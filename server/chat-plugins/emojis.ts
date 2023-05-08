/* eslint max-len: ["error", 240] */

import Axios from 'axios';
import probe from 'probe-image-size';
import {FS} from '../../lib';
import {Punishments} from '../punishments';

const EMOJI_BAN_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week
const MAX_REASON_LENGTH = 300;
const MAX_EMOJI_SIZE = 64;
const EMOJI_SIZE = 32;
const ERROR_NO_EMOJI_NAME = 'Specify an emoji name.';
const ERROR_NO_EMOJI_URL = 'Specify an emoji URL.';
const ERROR_NO_VALID_EMOJI_IMAGE = 'Specify a PNG or GIF image.';

type Emojis = Record<string, string>;

export const emojis: Emojis = JSON.parse(
	FS('config/chat-plugins/emojis.json').readIfExistsSync() || "{}"
);

const createEmojiRegex = (
	emojiNames: string[],
) => new RegExp(`(${emojiNames.map((emojiName) => `:${emojiName}:`).join('|')})`, 'g');

let emojiRegex: RegExp = createEmojiRegex(Object.keys(emojis));

const saveEmojis = () => {
	FS('config/chat-plugins/emojis.json').writeUpdate(() => JSON.stringify(emojis));
};

const addOrUpdateEmoji = (name: string, filename: string) => {
	emojis[name] = filename;
	emojiRegex = createEmojiRegex(Object.keys(emojis));
	saveEmojis();
};

const deleteEmoji = (name: string) => {
	delete emojis[name];
	emojiRegex = createEmojiRegex(Object.keys(emojis));
	saveEmojis();
};

const toAlphaNumeric = (text: string) => ('' + text).replace(/[^A-Za-z0-9]+/g, '');

const createEmojiHtml = (
	name: string,
	filename: string,
) => `<img src="https://clover.weedl.es:8443/emojis/${filename}" title=":${name}:" height="${EMOJI_SIZE}" width="${EMOJI_SIZE}">`;

const downloadEmoji = async (emojiName: string, imageUrl: string) => {
	const imagebuffer = (await Axios.get(imageUrl, {responseType: 'arraybuffer'})).data;
	const probeResult = probe.sync(imagebuffer);

	if (!probeResult) {
		throw new Chat.ErrorMessage(ERROR_NO_VALID_EMOJI_IMAGE);
	}

	const {width, height, type} = probeResult;

	if (!['png', 'gif'].includes(type)) {
		throw new Chat.ErrorMessage(ERROR_NO_VALID_EMOJI_IMAGE);
	}

	const maxSize = Math.max(width, height);
	const minSize = Math.min(width, height);

	if (maxSize > MAX_EMOJI_SIZE || minSize < EMOJI_SIZE || (width !== height)) {
		throw new Chat.ErrorMessage(`Specify a square image between 32x32 and 64x64. Your image is ${probeResult.width}x${probeResult.height}`);
	}

	const fileName = `${emojiName}.${type}`;
	await FS(`./config/emojis/${fileName}`).write(imagebuffer);

	return fileName;
};

export const commands: Chat.ChatCommands = {
	emojis: 'emoji',
	emoji: {
		list() {
			this.runBroadcast();
			return this.sendReplyBox(`<b><u>Emojis</u> <i>(hover for name, try <code>:EMOJINAME:</code>)</i></b><br />${Object.entries(emojis).map(([emojiName, emojiUrl]) => createEmojiHtml(emojiName, emojiUrl)).join(' ')}`);
		},
		update: 'add',
		async add(target, room, user) {
			this.checkCan('emoji');
			const [rawEmojiName, emojiUrl] = target.split(',').map((part) => part.trim());

			if (!rawEmojiName) {
				return this.errorReply(ERROR_NO_EMOJI_NAME);
			}
			const emojiName = toAlphaNumeric(rawEmojiName);

			if (!emojiUrl) {
				return this.errorReply(ERROR_NO_EMOJI_URL);
			}

			const filename = await downloadEmoji(emojiName, emojiUrl);

			addOrUpdateEmoji(emojiName, filename);

			this.addGlobalModAction(`${user.name} added emoji :${emojiName}:`);
			return this.sendReplyBox(`Added: ${createEmojiHtml(emojiName, filename)}`);
		},
		remove(target, room, user) {
			this.checkCan('emoji');
			const emojiName = toAlphaNumeric(target);

			if (!emojis[emojiName]) {
				return this.sendReplyBox(`No such emoji :${emojiName}: exists.`);
			}

			deleteEmoji(emojiName);

			this.addGlobalModAction(`${user.name} deleted emoji :${emojiName}:`);
			return this.sendReply(`Deleted :${emojiName}:`);
		},
		async ban(target, room, user) {
			const {targetUser, targetUsername, rest: reason} = this.splitUser(target);

			if (!targetUser) return this.errorReply(`User '${targetUsername}' not found.`);
			if (reason.length > MAX_REASON_LENGTH) {
				return this.errorReply(`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
			}

			this.checkCan('lock', targetUser);

			await Punishments.punish(targetUser, {
				type: 'EMOJIBAN',
				expireTime: Date.now() + EMOJI_BAN_DURATION,
				id: targetUser.id,
				reason,
			}, false);
			targetUser.popup(`|modal|${user.name} has emoji banned you for ${Chat.toDurationString(EMOJI_BAN_DURATION)}. ${reason}`);
			this.addGlobalModAction(`${targetUser.name} was emoji banned by ${user.name} for ${Chat.toDurationString(EMOJI_BAN_DURATION)}.${(reason ? ` (${reason})` : ``)}`);
			this.modlog(`EMOJI`, targetUser, reason);
		},
		unban(target, room, user) {
			const {targetUser, targetUsername} = this.splitUser(target);

			this.checkCan('lock', targetUser);

			const success = Punishments.unpunish(targetUser?.id || toID(targetUsername), 'EMOJIBAN');
			if (success) {
				this.globalModlog(`${(targetUser ? targetUser.name : toID(targetUsername))}'s emoji banned was lifted by ${user.name}.`);
				this.modlog('UNEMOJIBAN', (targetUser || toID(targetUsername)), null, {noip: 1, noalts: 1});
			} else {
				this.errorReply(`${(targetUser ? targetUser.name : targetUsername)} is not emoji banned.`);
			}
		},
	},
	emojihelp() {
		this.runBroadcast();
		return this.sendReplyBox([
			`<code>/emoji list</code> - Lists all available emojis.`,
			`<code>/emoji add [name], [image url]</code> - Adds or updates an emoji. Requires: &`,
			`<code>/emoji remove [name]</code> - Removes an emoji. Requires: &`,
			`<code>/emoji ban [user], [reason]</code> - Bans a user from using emojis. Requires: &, @, %`,
			`<code>/emoji unban [user]</code> - Removes an emoji ban from a user. Requires: &, @, %`,
		].join('<br />'));
	},
};

export const chatfilter: Chat.ChatFilter = (message, user) => {
	if (!Punishments.hasPunishType(user.id, 'EMOJIBAN') && Object.keys(emojis).length > 0 && emojiRegex.test(message)) {
		const prefix = message.startsWith('/html') ? '' : '/html ';
		return prefix + message.replace(emojiRegex, (match) => {
			const emojiName = match.slice(1, -1);
			return createEmojiHtml(emojiName, emojis[emojiName]);
		});
	}
	return message;
};
