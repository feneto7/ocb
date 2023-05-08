export const Moves: { [k: string]: ModdedMoveData } = {
	/* CAP Enabled/Modified Moves */
	aerialace: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, slicing: 1},
	},
	appleacid: {
		inherit: true,
		isNonstandard: null,
	},
	assist: {
		inherit: true,
		isNonstandard: null,
		onHit(target) {
			const noAssist = [
				'assist', 'banefulbunker', 'beakblast', 'belch', 'bestow', 'bounce', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'destinybond', 'detect', 'dig', 'dive', 'dragontail', 'endure', 'feint', 'fly', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'phantomforce', 'protect', 'ragepowder', 'roar', 'shadowforce', 'shelltrap', 'sketch', 'skydrop', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind', 'wingsofcorrection', 'leafshield',
			];

			const moves = [];
			for (const pokemon of target.side.pokemon) {
				if (pokemon === target) continue;
				for (const moveSlot of pokemon.moveSlots) {
					const moveid = moveSlot.id;
					if (noAssist.includes(moveid)) continue;
					const move = this.dex.moves.get(moveid);
					if (move.isZ || move.isMax) {
						continue;
					}
					moves.push(moveid);
				}
			}
			let randomMove = '';
			if (moves.length) randomMove = this.sample(moves);
			if (!randomMove) {
				return false;
			}
			this.actions.useMove(randomMove, target);
		},
	},
	bodypress: {
		inherit: true,
		isNonstandard: null,
	},
	behemothbash: {
		inherit: true,
		isNonstandard: null,
	},
	behemothblade: {
		inherit: true,
		isNonstandard: null,
	},
	boltbeak: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	branchpoke: {
		inherit: true,
		isNonstandard: null,
	},
	breakingswipe: {
		inherit: true,
		isNonstandard: null,
	},
	bulletseed: {
		inherit: true,
		onHit(target, source) {
			if (source.types.includes('Grass')) {
				if (this.randomChance(1, 16)) {
					target.addVolatile('leechseed');
				}
			}
		},
	},
	burningjealousy: {
		inherit: true,
		isNonstandard: null,
	},
	clangoroussoul: {
		inherit: true,
		isNonstandard: null,
	},
	coaching: {
		inherit: true,
		isNonstandard: null,
	},
	copycat: {
		inherit: true,
		onHit(pokemon) {
			const noCopycat = [
				'assist', 'banefulbunker', 'beakblast', 'behemothbash', 'behemothblade', 'belch', 'bestow', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'craftyshield', 'destinybond', 'detect', 'dragontail', 'dynamaxcannon', 'endure', 'feint', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'obstruct', 'protect', 'ragepowder', 'roar', 'shelltrap', 'sketch', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind', 'wingsofcorrection',
			];
			let move: Move | ActiveMove | null = this.lastMove;
			if (!move) return;

			if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
			if (noCopycat.includes(move.id) || move.isZ || move.isMax) {
				return false;
			}
			this.actions.useMove(move.id, pokemon);
		},
	},
	corrosivegas: {
		inherit: true,
		isNonstandard: null,
	},
	courtchange: {
		inherit: true,
		isNonstandard: null,
	},
	decorate: {
		inherit: true,
		isNonstandard: null,
	},
	dragondarts: {
		inherit: true,
		isNonstandard: null,
	},
	dragonenergy: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	drumbeating: {
		inherit: true,
		isNonstandard: null,
	},
	dualwingbeat: {
		inherit: true,
		isNonstandard: null,
	},
	dynamaxcannon: {
		inherit: true,
		isNonstandard: null,
	},
	eeriespell: {
		inherit: true,
		isNonstandard: null,
	},
	eternabeam: {
		inherit: true,
		isNonstandard: null,
	},
	expandingforce: {
		inherit: true,
		isNonstandard: null,
	},
	falsesurrender: {
		inherit: true,
		isNonstandard: null,
	},
	fierywrath: {
		inherit: true,
		isNonstandard: null,
	},
	firefang: {
		inherit: true,
		accuracy: 100,
	},
	firstimpression: {
		inherit: true,
		priority: 3,
	},
	fishiousrend: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	floatyfall: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	flipturn: {
		inherit: true,
		isNonstandard: null,
	},
	freezingglare: {
		inherit: true,
		isNonstandard: null,
	},
	glaciallance: {
		inherit: true,
		isNonstandard: null,
	},
	grassyglide: {
		inherit: true,
		isNonstandard: null,
	},
	grassyterrain: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude', 'earthpower'];
				if (weakenedMoves.includes(move.id) && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('move weakened by grassy terrain');
					return this.chainModify(0.5);
				}
				if (move.id === 'earthpower') {
					this.add('-message', 'In Clover CAP, Earth Power is weakened by Grassy Terrain.');
				}
				if (move.type === 'Grass' && attacker.isGrounded()) {
					this.debug('grassy terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Grassy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			onResidual(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
				} else {
					this.debug(`Pokemon semi-invuln or not grounded; Grassy Terrain skipped`);
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},
	},
	gravapple: {
		inherit: true,
		isNonstandard: null,
	},
	icefang: {
		inherit: true,
		accuracy: 100,
	},
	jawlock: {
		inherit: true,
		isNonstandard: null,
	},
	judgment: {
		inherit: true,
		isNonstandard: null,
	},
	junglehealing: {
		inherit: true,
		isNonstandard: null,
	},
	lashout: {
		inherit: true,
		isNonstandard: null,
	},
	lifedew: {
		inherit: true,
		isNonstandard: null,
	},
	lowsweep: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	magicpowder: {
		inherit: true,
		isNonstandard: null,
	},
	meteorassault: {
		inherit: true,
		isNonstandard: null,
	},
	meteorbeam: {
		inherit: true,
		isNonstandard: null,
	},
	moonlight: {
		inherit: true,
		onHit(pokemon) { // TODO: Cap-only
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'densefog':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	morningsun: {
		inherit: true,
		onHit(pokemon) { // TODO: Cap-only
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'densefog':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	mistyexplosion: {
		inherit: true,
		isNonstandard: null,
	},
	multiattack: {
		inherit: true,
		isNonstandard: null,
	},
	needlearm: {
		inherit: true,
		basePower: 65,
		onHit(target) {
			if (this.randomChance(1, 2)) {
				target.side.addSideCondition('spikes');
			}
		},
		secondary: null,
	},
	noretreat: {
		inherit: true,
		isNonstandard: null,
	},
	obstruct: {
		inherit: true,
		isNonstandard: null,
	},
	octolock: {
		inherit: true,
		isNonstandard: null,
	},
	overdrive: {
		inherit: true,
		isNonstandard: null,
	},
	pikapapow: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	poltergeist: {
		inherit: true,
		isNonstandard: null,
	},
	pyroball: {
		inherit: true,
		isNonstandard: null,
	},
	risingvoltage: {
		inherit: true,
		isNonstandard: null,
	},
	scaleshot: {
		inherit: true,
		isNonstandard: null,
	},
	scorchingsands: {
		inherit: true,
		isNonstandard: null,
	},
	seedbomb: {
		inherit: true,
		onHit(target, source) {
			if (source.types.includes('Grass')) {
				if (this.randomChance(3, 10)) {
					target.addVolatile('leechseed');
				}
			}
		},
	},
	sharpen: {
		inherit: true,
		isNonstandard: null,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
		},
		volatileStatus: 'sharpen',
		condition: {
			onStart(target) {
				this.effectState.stacks = 1;
				this.add('-start', target, 'sharpen' + this.effectState.stacks);
			},
			onRestart(target) {
				if (this.effectState.stacks >= 3) return false;
				this.effectState.stacks++;
				this.add('-start', target, 'sharpen' + this.effectState.stacks);
			},
			onModifyCritRatio(critRatio) {
				return critRatio + this.effectState.stacks;
			},
			onEnd(target) {
				this.add('-end', target, 'Sharpen');
			},
		},
	},
	shellsidearm: {
		inherit: true,
		isNonstandard: null,
	},
	skittersmack: {
		inherit: true,
		isNonstandard: null,
	},
	smackdown: {
		inherit: true,
		condition: {
			noCopy: true,
			onStart(pokemon) { // TODO: Blobbos cap
				let applies = false;
				if (
					pokemon.hasType('Flying') ||
					pokemon.hasAbility('levitate') ||
					pokemon.hasAbility('asoneblobbostherian')) {
					applies = true;
				}
				if (pokemon.hasItem('ironball') || pokemon.volatiles['ingrain'] ||
					this.field.getPseudoWeather('gravity')) applies = false;
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					applies = true;
					this.queue.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
				}
				if (pokemon.volatiles['magnetrise']) {
					applies = true;
					delete pokemon.volatiles['magnetrise'];
				}
				if (pokemon.volatiles['telekinesis']) {
					applies = true;
					delete pokemon.volatiles['telekinesis'];
				}
				if (!applies) return false;
				this.add('-start', pokemon, 'Smack Down');
			},
			onRestart(pokemon) {
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					this.queue.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
					this.add('-start', pokemon, 'Smack Down');
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
		},
	},
	snaptrap: {
		inherit: true,
		isNonstandard: null,
	},
	snipeshot: {
		inherit: true,
		isNonstandard: null,
	},
	solarbeam: {
		inherit: true,
		onBasePower(basePower, pokemon, target) {
			if (['raindance', 'primordialsea', 'sandstorm', 'hail', 'densefog'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	solarblade: {
		inherit: true,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, slicing: 1},
		onBasePower(basePower, pokemon, target) {
			if (['raindance', 'primordialsea', 'sandstorm', 'hail', 'densefog'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	spikecannon: {
		inherit: true,
		onHit(target) {
			if (this.randomChance(1, 8)) {
				target.side.addSideCondition('spikes');
			}
		},
	},
	spiritbreak: {
		inherit: true,
		isNonstandard: null,
	},
	splishysplash: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	steelbeam: {
		inherit: true,
		isNonstandard: null,
	},
	steelroller: {
		inherit: true,
		isNonstandard: null,
	},
	strangesteam: {
		inherit: true,
		isNonstandard: null,
	},
	stuffcheeks: {
		inherit: true,
		isNonstandard: null,
	},
	suckerpunch: {
		inherit: true,
		flags: {punch: 1, contact: 1, protect: 1, mirror: 1},
	},
	surgingstrikes: {
		inherit: true,
		isNonstandard: null,
	},
	synthesis: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				factor = 0.667;
				break;
			case 'raindance':
			case 'primordialsea':
			case 'sandstorm':
			case 'hail':
			case 'densefog':
				factor = 0.25;
				break;
			}
			const success = !!this.heal(this.modify(pokemon.maxhp, factor));
			if (!success) {
				this.add('-fail', pokemon, 'heal');
				return this.NOT_FAIL;
			}
			return success;
		},
	},
	tarshot: {
		inherit: true,
		isNonstandard: null,
	},
	teatime: {
		inherit: true,
		isNonstandard: null,
	},
	telekinesis: {
		inherit: true,
		condition: {
			duration: 3,
			onStart(target) {
				if (['Diglett', 'Dugtrio', 'Palossand', 'Sandygast', 'Fusjahl'].includes(target.baseSpecies.baseSpecies) ||
					['Gengar-Mega', 'Goryannus-Mega'].includes(target.baseSpecies.name)) {
					this.add('-immune', target);
					return null;
				}
				if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;
				this.add('-start', target, 'Telekinesis');
			},
			onAccuracyPriority: -1,
			onAccuracy(accuracy, target, source, move) {
				if (move && !move.ohko) return true;
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onUpdate(pokemon) {
				if (pokemon.baseSpecies.name === 'Gengar-Mega') {
					delete pokemon.volatiles['telekinesis'];
					this.add('-end', pokemon, 'Telekinesis', '[silent]');
				}
			},
			onResidualOrder: 19,
			onEnd(target) {
				this.add('-end', target, 'Telekinesis');
			},
		},
	},
	terrainpulse: {
		inherit: true,
		isNonstandard: null,
	},
	thundercage: {
		inherit: true,
		isNonstandard: null,
	},
	thunderfang: {
		inherit: true,
		accuracy: 100,
	},
	thunderouskick: {
		inherit: true,
		isNonstandard: null,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	trickroom: {
		inherit: true,
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (this.activeMove?.id === 'backroom') {
					return 2;
				}
				if (source?.hasAbility(['persistent', 'moreroom'])) {
					this.add('-activate', source, `ability: ${source.ability}`, effect);
					return 7;
				}
				return 5;
			},
			onFieldStart(target, source) {
				this.add('-fieldstart', 'move: Trick Room', '[of] ' + source);
			},
			onFieldRestart(target, source) {
				this.field.removePseudoWeather('trickroom');
			},
			// Speed modification is changed in Pokemon.getActionSpeed() in sim/pokemon.js
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 1,
			onFieldEnd() {
				this.add('-fieldend', 'move: Trick Room');
			},
		},
	},
	tripleaxel: {
		inherit: true,
		isNonstandard: null,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	xscissor: {
		inherit: true,
		critRatio: 2,
	},
	weatherball: {
		inherit: true,
		onModifyMove(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.basePower *= 2;
				break;
			case 'raindance':
			case 'primordialsea':
				move.basePower *= 2;
				break;
			case 'sandstorm':
				move.basePower *= 2;
				break;
			case 'hail':
				move.basePower *= 2;
				break;
			case 'densefog':
				move.basePower *= 2;
				break;
			}
		},
	},
	wickedblow: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	zippyzap: {
		inherit: true,
		basePower: 50,
		pp: 15,
		willCrit: true,
		secondary: null,
		noSketch: true,
		isNonstandard: null,
	},
	/* CAP Exclusive Moves */
	crusadercrash: {
		inherit: true,
		isNonstandard: null,
	},
	moregun: {
		inherit: true,
		isNonstandard: null,
	},
	psychofists: {
		inherit: true,
		isNonstandard: null,
	},
	faradaycage: {
		inherit: true,
		isNonstandard: null,
	},
	dragonburst: {
		inherit: true,
		isNonstandard: null,
	},
	rockclock: {
		inherit: true,
		isNonstandard: null,
	},
	awaken: {
		inherit: true,
		isNonstandard: null,
	},
	voltaiccyclone: {
		inherit: true,
		isNonstandard: null,
	},
	boilover: {
		inherit: true,
		isNonstandard: null,
	},
	soulcrusher: {
		inherit: true,
		isNonstandard: null,
	},
	trickstab: {
		inherit: true,
		isNonstandard: null,
	},
	tombstoner: {
		inherit: true,
		isNonstandard: null,
	},
	fruitjuice: {
		inherit: true,
		isNonstandard: null,
	},
	phantomfang: {
		inherit: true,
		isNonstandard: null,
	},
	phasethrough: {
		inherit: true,
		isNonstandard: null,
	},
	coldcutter: {
		inherit: true,
		isNonstandard: null,
	},
	shadowscales: {
		inherit: true,
		isNonstandard: null,
	},
	wingsofcorrection: {
		inherit: true,
		isNonstandard: null,
	},
	brutalpunishment: {
		inherit: true,
		isNonstandard: null,
	},
	cloudbreaker: {
		inherit: true,
		isNonstandard: null,
	},
	gazerbeam: {
		inherit: true,
		isNonstandard: null,
	},
	memejr: {
		inherit: true,
		isNonstandard: null,
	},
	shinestrike: {
		inherit: true,
		isNonstandard: null,
	},
	petrify: {
		inherit: true,
		isNonstandard: null,
	},
	starseedblast: {
		inherit: true,
		isNonstandard: null,
	},
	brandingblade: {
		inherit: true,
		isNonstandard: null,
	},
	mudmaelstrom: {
		inherit: true,
		isNonstandard: null,
	},
	finalhour: {
		inherit: true,
		isNonstandard: null,
	},
	turnabout: {
		inherit: true,
		isNonstandard: null,
	},
	meddymeds: {
		inherit: true,
		isNonstandard: null,
	},
	badeggs: {
		inherit: true,
		isNonstandard: null,
	},
	backdraft: {
		inherit: true,
		isNonstandard: null,
	},
	villify: {
		inherit: true,
		isNonstandard: null,
	},
	nuclearwinter: {
		inherit: true,
		isNonstandard: null,
	},
	shroomsnuggle: {
		inherit: true,
		isNonstandard: null,
	},
	darkening: {
		inherit: true,
		isNonstandard: null,
	},
	beamblade: {
		inherit: true,
		isNonstandard: null,
	},
	bearhug: {
		inherit: true,
		isNonstandard: null,
	},
	chilipowder: {
		inherit: true,
		isNonstandard: null,
	},
	thunderdrop: {
		inherit: true,
		isNonstandard: null,
	},
	faeblade: {
		inherit: true,
		isNonstandard: null,
	},
	stickytongue: {
		inherit: true,
		isNonstandard: null,
	},
	rocketpunch: {
		inherit: true,
		isNonstandard: null,
	},
	powerwasher: {
		inherit: true,
		isNonstandard: null,
	},
	flakcannon: {
		inherit: true,
		isNonstandard: null,
	},
	neosporin: {
		inherit: true,
		isNonstandard: null,
	},
	blackbomb: {
		inherit: true,
		isNonstandard: null,
	},
	frigidend: {
		inherit: true,
		isNonstandard: null,
	},
	cherrybomb: {
		inherit: true,
		isNonstandard: null,
	},
	crashhopper: {
		inherit: true,
		isNonstandard: null,
	},
	wrapd: {
		inherit: true,
		isNonstandard: null,
	},
	blizzardd: {
		inherit: true,
		isNonstandard: null,
	},
	amnesiad: {
		inherit: true,
		isNonstandard: null,
	},
	hyperbeamd: {
		inherit: true,
		isNonstandard: null,
	},
	fractus: {
		inherit: true,
		isNonstandard: null,
	},
	purge: {
		inherit: true,
		isNonstandard: null,
	},
	extinction: {
		inherit: true,
		isNonstandard: null,
	},
	uproot: {
		inherit: true,
		isNonstandard: null,
	},
	mirageveil: {
		inherit: true,
		isNonstandard: null,
	},
	frostbite: {
		inherit: true,
		isNonstandard: null,
	},
	braindamage: {
		inherit: true,
		isNonstandard: null,
	},
	flintfang: {
		inherit: true,
		isNonstandard: null,
	},
	calibrate: {
		inherit: true,
		isNonstandard: null,
	},
	razorwind: {
		accuracy: 90,
		basePower: 60,
		category: "Special",
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, wind: 1},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Flying",
		isNonstandard: null,
	},
	rototiller: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Rototiller",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onModifyMove(move, pokemon) {
			if (['sandstorm'].includes(pokemon.effectiveWeather())) move.boosts = {atk: 2, spa: 2};
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Ground",
		zMove: {boost: {atk: 1}},
		contestType: "Beautiful",
	},
	skyuppercut: {
		inherit: true,
		isNonstandard: null,
		onEffectiveness(typeMod, target, type) {
			if (type === 'Flying') return 0;
		},
	},
	smellingsalts: {
		inherit: true,
		type: "Fighting",
		secondary: {
			chance: 10,
			status: 'par',
		},
		isNonstandard: null,
	},
	sonicboom: {
		inherit: true,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		name: "Sonic Boom",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				const hpBeforeRecoil = pokemon.hp;
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.dex.conditions.get('Sonic Boom'), true);
				if (pokemon.hp <= pokemon.maxhp / 2 && hpBeforeRecoil > pokemon.maxhp / 2) {
					this.runEvent('EmergencyExit', pokemon, pokemon);
				}
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Flying",
		isNonstandard: null,
	},
	geargrind: {
		inherit: true,
		isNonstandard: null,
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
	},
	zenheadbutt: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
};
