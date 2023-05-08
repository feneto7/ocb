export const Moves: { [k: string]: ModdedMoveData } = {
	nightmare: {
		inherit: true,
		condition: {
			noCopy: true,
			onStart(pokemon) {
				if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose') && !pokemon.hasAbility('lethargic')) {
					return false;
				}
				this.add('-start', pokemon, 'Nightmare');
			},
			onResidualOrder: 11,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
	},
	closeblobmat: {
		inherit: true,
		isNonstandard: null,
	},
	faedozer: {
		inherit: true,
		isNonstandard: null,
	},
	roidflex: {
		inherit: true,
		isNonstandard: null,
	},
	sleppthatblobsthesky: {
		inherit: true,
		isNonstandard: null,
	},
	yiikout: {
		inherit: true,
		isNonstandard: null,
	},
	leafshield: {
		inherit: true,
		isNonstandard: null,
	},
	twintowertumblingterror: {
		inherit: true,
		isNonstandard: null,
	},
	skullcannon: {
		inherit: true,
		isNonstandard: null,
	},
	matingpress: {
		inherit: true,
		isNonstandard: null,
	},
	gunshot: {
		inherit: true,
		isNonstandard: null,
	},
	behemothblob: {
		inherit: true,
		isNonstandard: null,
	},
	genwunroom: {
		inherit: true,
		isNonstandard: null,
	},
	backroom: {
		inherit: true,
		isNonstandard: null,
	},
	charmerssong: {
		inherit: true,
		isNonstandard: null,
	},
	psychospell: {
		inherit: true,
		isNonstandard: null,
	},
	wonderwand: {
		inherit: true,
		isNonstandard: null,
	},
	implosion: {
		inherit: true,
		isNonstandard: null,
	},
	portalgun: {
		inherit: true,
		isNonstandard: null,
	},
	sportsball: {
		inherit: true,
		isNonstandard: null,
	},
	rainbowbeam: {
		inherit: true,
		isNonstandard: null,
	},
	freikugel: {
		inherit: true,
		isNonstandard: null,
	},
	firewall: {
		inherit: true,
		isNonstandard: null,
	},
	maximize: {
		inherit: true,
		isNonstandard: null,
	},
	seaquake: {
		inherit: true,
		isNonstandard: null,
	},
	edgequake: {
		inherit: true,
		isNonstandard: null,
	},
	telluriccurrent: {
		inherit: true,
		isNonstandard: null,
	},
	rockout: {
		inherit: true,
		isNonstandard: null,
	},
	toppingtoss: {
		inherit: true,
		isNonstandard: null,
	},
	heavensblessing: {
		inherit: true,
		isNonstandard: null,
	},
	sandysnore: {
		inherit: true,
		isNonstandard: null,
	},
	amogus: {
		inherit: true,
		isNonstandard: null,
	},
	bishido: {
		inherit: true,
		isNonstandard: null,
	},
	auroraveil: {
		inherit: true,
		onTry() {
			return this.field.isWeather(['hail', 'snow', 'hyperboreanarctic']);
		},
	},
	blizzard: {
		inherit: true,
		onModifyMove(move) {
			if (this.field.isWeather(['hail', 'snow', 'hyperboreanarctic'])) move.accuracy = true;
		},
	},
	groundbomb: {
		inherit: true,
		isNonstandard: null,
	},
	obsidianhorn: {
		inherit: true,
		isNonstandard: null,
	},
	feudefee: {
		inherit: true,
		isNonstandard: null,
	},
	heavenpierce: {
		inherit: true,
		isNonstandard: null,
	},
	chernoboil: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	halflife: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	atombomb: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	radiation: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	nuclearmeltdown: {
		inherit: true,
		type: "Nuclear",
		isNonstandard: null,
	},
	toxicbeam: {
		inherit: true,
		isNonstandard: null,
	},
	butterflykick: {
		inherit: true,
		isNonstandard: null,
	},
	inverserush: {
		inherit: true,
		isNonstandard: null,
	},
	skulltoss: {
		inherit: true,
		isNonstandard: null,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	blobblast: {
		inherit: true,
		isNonstandard: null,
	},
	floofandpoof: {
		inherit: true,
		isNonstandard: null,
	},
	sunburst: {
		inherit: true,
		isNonstandard: null,
	},
	deepfry: {
		inherit: true,
		isNonstandard: null,
	},
	flashbang: {
		inherit: true,
		isNonstandard: null,
	},
	doubleiceblob: {
		inherit: true,
		isNonstandard: null,
	},
	extremesneed: {
		inherit: true,
		isNonstandard: null,
	},
	bouncyball: {
		inherit: true,
		isNonstandard: null,
	},
	bouncybubble: {
		inherit: true,
		isNonstandard: null,
	},
	buzzybuzz: {
		inherit: true,
		isNonstandard: null,
	},
	windwhip: {
		inherit: true,
		isNonstandard: null,
	},
	sleepingsands: {
		inherit: true,
		isNonstandard: null,
	},
	feedandseed: {
		inherit: true,
		isNonstandard: null,
	},
	relicsong: {
		inherit: true,
		isNonstandard: null,
	},
	astralbarrage: {
		inherit: true,
		isNonstandard: null,
	},
	fruitjuice: {
		inherit: true,
		isNonstandard: null,
	},
	sizzlyslide: {
		inherit: true,
		isNonstandard: null,
	},
	electromagnetism: {
		inherit: true,
		isNonstandard: null,
	},
	splishysplash: {
		inherit: true,
		isNonstandard: null,
	},
	titaniumclap: {
		inherit: true,
		isNonstandard: null,
	},
	paranormalactivity: {
		inherit: true,
		isNonstandard: null,
	},
	infectiouswheeze: {
		inherit: true,
		isNonstandard: null,
	},
	siphon: {
		inherit: true,
		isNonstandard: null,
	},
	xenobeam: {
		inherit: true,
		isNonstandard: null,
	},
	abduction: {
		inherit: true,
		isNonstandard: null,
	},
	flashfreeze: {
		inherit: true,
		isNonstandard: null,
	},
	hypersomnia: {
		inherit: true,
		isNonstandard: null,
	},
	sugarrush: {
		inherit: true,
		isNonstandard: null,
	},
	bloodletting: {
		inherit: true,
		isNonstandard: null,
	},
	nosedive: {
		inherit: true,
		isNonstandard: null,
	},
	shadowstrike: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	shadowban: {
		inherit: true,
		isNonstandard: null,
	},
	slipturn: {
		inherit: true,
		isNonstandard: null,
	},
	helldive: {
		inherit: true,
		isNonstandard: null,
	},
	hyperzone: {
		inherit: true,
		isNonstandard: null,
	},
	freeballoonday: {
		inherit: true,
		isNonstandard: null,
	},
	spectresabre: {
		inherit: true,
		isNonstandard: null,
	},
	bloodshot: {
		inherit: true,
		isNonstandard: null,
	},
	malicepowder: {
		inherit: true,
		isNonstandard: null,
	},
	mushroomshot: {
		inherit: true,
		isNonstandard: null,
	},
	overdose: {
		inherit: true,
		isNonstandard: null,
	},
	highjumpsaw: {
		inherit: true,
		isNonstandard: null,
	},
	stingingrage: {
		inherit: true,
		isNonstandard: null,
	},
	afteryou: {
		inherit: true,
		isNonstandard: null,
	},
	bilebite: {
		inherit: true,
		isNonstandard: null,
	},
	bestow: {
		inherit: true,
		isNonstandard: null,
	},
	downpour: {
		inherit: true,
		isNonstandard: null,
	},
	embargo: {
		inherit: true,
		isNonstandard: null,
	},
	firepledge: {
		inherit: true,
		isNonstandard: null,
	},
	fling: {
		inherit: true,
		isNonstandard: null,
	},
	freezyfrost: {
		inherit: true,
		isNonstandard: null,
	},
	grasspledge: {
		inherit: true,
		isNonstandard: null,
	},
	energyburst: {
		inherit: true,
		isNonstandard: null,
	},
	glitzyglow: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		isNonstandard: null,
	},
	happyhour: {
		inherit: true,
		isNonstandard: null,
	},
	holdhands: {
		inherit: true,
		isNonstandard: null,
	},
	icestorm: {
		inherit: true,
		isNonstandard: null,
	},
	instruct: {
		inherit: true,
		isNonstandard: null,
	},
	magneticflux: {
		inherit: true,
		isNonstandard: null,
	},
	paleowave: {
		inherit: true,
		isNonstandard: null,
	},
	poisonivy: {
		inherit: true,
		isNonstandard: null,
	},
	quash: {
		inherit: true,
		isNonstandard: null,
	},
	skydrop: {
		inherit: true,
		isNonstandard: null,
	},
	sappyseed: {
		inherit: true,
		isNonstandard: null,
	},
	telekinesis: {
		inherit: true,
		isNonstandard: null,
	},
	waterpledge: {
		inherit: true,
		isNonstandard: null,
	},
	glassing: {
		inherit: true,
		isNonstandard: null,
	},
	meltedplastic: {
		inherit: true,
		isNonstandard: null,
	},
	recycleray: {
		inherit: true,
		isNonstandard: null,
	},
	plasticterrain: {
		inherit: true,
		isNonstandard: null,
	},
	fadereflection: {
		inherit: true,
		isNonstandard: null,
	},
	plasticblaze: {
		inherit: true,
		isNonstandard: null,
	},
	coldcutter: {
		inherit: true,
		isNonstandard: null,
	},
	qualityrip: {
		inherit: true,
		isNonstandard: null,
	},
	concussion: {
		inherit: true,
		isNonstandard: null,
	},
	shootingstar: {
		inherit: true,
		isNonstandard: null,
	},
	hornithrust: {
		inherit: true,
		isNonstandard: null,
	},
	mouthmelter: {
		inherit: true,
		isNonstandard: null,
	},
	terrainpulse: {
		num: 805,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Terrain Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, pulse: 1},
		onModifyType(move, pokemon) {
			if (!pokemon.isGrounded()) return;
			switch (this.field.terrain) {
			case 'electricterrain':
				move.type = 'Electric';
				break;
			case 'grassyterrain':
				move.type = 'Grass';
				break;
			case 'mistyterrain':
				move.type = 'Fairy';
				break;
			case 'psychicterrain':
				move.type = 'Psychic';
				break;
			case 'plasticterrain':
				move.type = 'Plastic';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			if (this.field.terrain && pokemon.isGrounded()) {
				move.basePower *= 2;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {basePower: 160},
		maxMove: {basePower: 130},
	},
	present: {
		inherit: true,
		onModifyType(move, pokemon) {
			if (pokemon.species.name === 'Blobbos-Clause') {
				move.type = 'Ice';
			} else {
				move.type = 'Normal';
			}
		},
		onTryHit(target, source, move) {
			if (source.species.name === 'Blobbos-Clause') {
				if (source.isAlly(target)) {
					move.basePower = 0;
					move.infiltrates = true;
				}
				move.basePower = 120;
			}
		},
		onHit(target, source) {
			if (source.species.name === 'Blobbos-Clause') {
				if (source.isAlly(target)) {
					if (!this.heal(Math.floor(target.baseMaxhp * 0.5))) {
						this.add('-immune', target);
						return this.NOT_FAIL;
					}
				}
			}
		},
	},
	weatherball: {
		inherit: true,
		onModifyType(move, pokemon) {
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.type = 'Fire';
				break;
			case 'raindance':
			case 'primordialsea':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
			case 'snow':
			case 'hyperboreanarctic': // TODO: Text
				move.type = 'Ice';
				break;
			}
		},
	},
	heroicstrike: {
		inherit: true,
		isNonstandard: null,
	},
	heroiconslaught: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxblobbomb: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxbefuddle: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxcannonade: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxcentiferno: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxchistrike: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxcuddle: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxdepletion: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxdrumsolo: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxfinale: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxfireball: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxfoamburst: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxgoldrush: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxgravitas: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxhydrosnipe: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxmalodor: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxmeltdown: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxoneblow: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxrapidflow: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxreplenish: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxresonance: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsandblast: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsmite: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsnooze: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsteelsurge: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxstonesurge: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxstunshock: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxsweetness: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxtartness: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxterror: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxvinelash: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxvolcalith: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxvoltcrash: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxwildfire: {
		inherit: true,
		isNonstandard: null,
	},
	gmaxwindrage: {
		inherit: true,
		isNonstandard: null,
	},
	maxairstream: {
		inherit: true,
		isNonstandard: null,
	},
	maxdarkness: {
		inherit: true,
		isNonstandard: null,
	},
	maxflare: {
		inherit: true,
		isNonstandard: null,
	},
	maxflutterby: {
		inherit: true,
		isNonstandard: null,
	},
	maxgeyser: {
		inherit: true,
		isNonstandard: null,
	},
	maxguard: {
		inherit: true,
		isNonstandard: null,
	},
	maxhailstorm: {
		inherit: true,
		isNonstandard: null,
	},
	maxknuckle: {
		inherit: true,
		isNonstandard: null,
	},
	maxlightning: {
		inherit: true,
		isNonstandard: null,
	},
	maxmemeitude: {
		inherit: true,
		isNonstandard: null,
	},
	maxmindstorm: {
		inherit: true,
		isNonstandard: null,
	},
	maxooze: {
		inherit: true,
		isNonstandard: null,
	},
	maxovergrowth: {
		inherit: true,
		isNonstandard: null,
	},
	maxphantasm: {
		inherit: true,
		isNonstandard: null,
	},
	maxquake: {
		inherit: true,
		isNonstandard: null,
	},
	maxrockfall: {
		inherit: true,
		isNonstandard: null,
	},
	maxstarfall: {
		inherit: true,
		isNonstandard: null,
	},
	maxsteelspike: {
		inherit: true,
		isNonstandard: null,
	},
	maxstrike: {
		inherit: true,
		isNonstandard: null,
	},
	maxwyrmwind: {
		inherit: true,
		isNonstandard: null,
	},
	sparklyswirl: {
		inherit: true,
		isNonstandard: null,
	},
	swamp: {
		inherit: true,
		isNonstandard: null,
	},
	slysquall: {
		inherit: true,
		isNonstandard: null,
	},
	trapcard: {
		inherit: true,
		isNonstandard: null,
	},
	devilsbarrage: {
		inherit: true,
		isNonstandard: null,
	},
	cursedblade: {
		inherit: true,
		isNonstandard: null,
	},
	dousingflame: {
		inherit: true,
		isNonstandard: null,
	},
	riptide: {
		inherit: true,
		isNonstandard: null,
	},
	foolsgambit: {
		inherit: true,
		isNonstandard: null,
	},
	bigshot: {
		inherit: true,
		isNonstandard: null,
	},
	drinkpotion: {
		inherit: true,
		isNonstandard: null,
	},
	rebuild: {
		inherit: true,
		isNonstandard: null,
	},
	winterwhiteout: {
		inherit: true,
		isNonstandard: null,
	},
	flurryfist: {
		inherit: true,
		isNonstandard: null,
	},
	rawvenom: {
		inherit: true,
		isNonstandard: null,
	},
	direclaw: {
		inherit: true,
		isNonstandard: null,
	},
	psyshieldbash: {
		inherit: true,
		isNonstandard: null,
	},
	powershift: {
		inherit: true,
		isNonstandard: null,
	},
	stoneaxe: {
		inherit: true,
		isNonstandard: null,
	},
	springtidestorm: {
		inherit: true,
		isNonstandard: null,
	},
	mysticalpower: {
		inherit: true,
		isNonstandard: null,
	},
	ragingfury: {
		inherit: true,
		isNonstandard: null,
	},
	wavecrash: {
		inherit: true,
		isNonstandard: null,
	},
	chloroblast: {
		inherit: true,
		isNonstandard: null,
	},
	mountaingale: {
		inherit: true,
		isNonstandard: null,
	},
	victorydance: {
		inherit: true,
		isNonstandard: null,
	},
	headlongrush: {
		inherit: true,
		isNonstandard: null,
	},
	barbbarrage: {
		inherit: true,
		isNonstandard: null,
	},
	esperwing: {
		inherit: true,
		isNonstandard: null,
	},
	bittermalice: {
		inherit: true,
		isNonstandard: null,
	},
	shelter: {
		inherit: true,
		isNonstandard: null,
	},
	triplearrows: {
		inherit: true,
		isNonstandard: null,
	},
	infernalparade: {
		inherit: true,
		isNonstandard: null,
	},
	ceaselessedge: {
		inherit: true,
		isNonstandard: null,
	},
	bleakwindstorm: {
		inherit: true,
		isNonstandard: null,
	},
	wildboltstorm: {
		inherit: true,
		isNonstandard: null,
	},
	sandsearstorm: {
		inherit: true,
		isNonstandard: null,
	},
	lunarblessing: {
		inherit: true,
		isNonstandard: null,
	},
	takeheart: {
		inherit: true,
		isNonstandard: null,
	},
	silktrap: {
		inherit: true,
		isNonstandard: null,
	},
	axekick: {
		inherit: true,
		isNonstandard: null,
	},
	lastrespects: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	luminacrash: {
		inherit: true,
		isNonstandard: null,
	},
	orderup: {
		inherit: true,
		isNonstandard: null,
	},
	jetpunch: {
		inherit: true,
		isNonstandard: null,
	},
	spicyextract: {
		inherit: true,
		isNonstandard: null,
	},
	spinout: {
		inherit: true,
		isNonstandard: null,
	},
	populationbomb: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	icespinner: {
		inherit: true,
		isNonstandard: null,
	},
	glaiverush: {
		inherit: true,
		isNonstandard: null,
	},
	revivalblessing: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	saltcure: {
		inherit: true,
		isNonstandard: null,
	},
	tripledive: {
		inherit: true,
		isNonstandard: null,
	},
	mortalspin: {
		inherit: true,
		isNonstandard: null,
	},
	doodle: {
		inherit: true,
		isNonstandard: null,
	},
	filletaway: {
		inherit: true,
		isNonstandard: null,
	},
	kowtowcleave: {
		inherit: true,
		isNonstandard: null,
	},
	flowertrick: {
		inherit: true,
		isNonstandard: null,
	},
	torchsong: {
		inherit: true,
		isNonstandard: null,
	},
	aquastep: {
		inherit: true,
		isNonstandard: null,
	},
	ragingbull: {
		inherit: true,
		isNonstandard: null,
	},
	makeitrain: {
		inherit: true,
		isNonstandard: null,
	},
	ruination: {
		inherit: true,
		isNonstandard: null,
	},
	collisioncourse: {
		inherit: true,
		isNonstandard: null,
	},
	electrodrift: {
		inherit: true,
		isNonstandard: null,
	},
	shedtail: {
		inherit: true,
		isNonstandard: null,
		noSketch: true,
	},
	chillyreception: {
		inherit: true,
		isNonstandard: null,
	},
	snowscape: {
		inherit: true,
		isNonstandard: null,
	},
	tidyup: {
		inherit: true,
		isNonstandard: null,
	},
	pounce: {
		inherit: true,
		isNonstandard: null,
	},
	trailblaze: {
		inherit: true,
		isNonstandard: null,
	},
	chillingwater: {
		inherit: true,
		isNonstandard: null,
	},
	hyperdrill: {
		inherit: true,
		isNonstandard: null,
	},
	twinbeam: {
		inherit: true,
		isNonstandard: null,
	},
	ragefist: {
		inherit: true,
		isNonstandard: null,
	},
	armorcannon: {
		inherit: true,
		isNonstandard: null,
	},
	bitterblade: {
		inherit: true,
		isNonstandard: null,
	},
	doubleshock: {
		inherit: true,
		isNonstandard: null,
	},
	comeuppance: {
		inherit: true,
		isNonstandard: null,
	},
	aquacutter: {
		inherit: true,
		isNonstandard: null,
	},
	blazingtorque: {
		inherit: true,
		isNonstandard: null,
	},
	wickedtorque: {
		inherit: true,
		isNonstandard: null,
	},
	combattorque: {
		inherit: true,
		isNonstandard: null,
	},
	noxioustorque: {
		inherit: true,
		isNonstandard: null,
	},
	magicaltorque: {
		inherit: true,
		isNonstandard: null,
	},
	laserbeam: {
		inherit: true,
		isNonstandard: null,
	},
	regularattack: {
		inherit: true,
		isNonstandard: null,
	},
	landmind: {
		inherit: true,
		isNonstandard: null,
	},
	pobybbolb: {
		inherit: true,
		isNonstandard: null,
	},
	eronsrepus: {
		inherit: true,
		isNonstandard: null,
	},
	shuttleloop: {
		inherit: true,
		isNonstandard: null,
	},
	saltsprinkle: {
		inherit: true,
		isNonstandard: null,
	},
	holdit: {
		inherit: true,
		isNonstandard: null,
	},
	objection: {
		inherit: true,
		isNonstandard: null,
	},
	takethat: {
		inherit: true,
		isNonstandard: null,
	},
	plushrush: {
		inherit: true,
		isNonstandard: null,
	},
	seaoffire: {
		inherit: true,
		isNonstandard: null,
	},
	tridentcharge: {
		inherit: true,
		isNonstandard: null,
	},
	blackfire: {
		inherit: true,
		isNonstandard: null,
	},
	bugout: {
		inherit: true,
		isNonstandard: null,
	},
	hardcrash: {
		inherit: true,
		isNonstandard: null,
	},
	driftgear: {
		inherit: true,
		isNonstandard: null,
	},
	gentworrible: {
		inherit: true,
		isNonstandard: null,
	},
	tombstonerd: {
		inherit: true,
		isNonstandard: null,
	},
	secretstrength: {
		inherit: true,
		isNonstandard: null,
	},
	gigatonhammer: {
		num: 893,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "Gigaton Hammer",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, hammer: 1},
		onDisableMove(pokemon) {
			if (pokemon.lastMove?.id === 'gigatonhammer') pokemon.disableMove('gigatonhammer');
		},
		beforeMoveCallback(pokemon) {
			if (pokemon.lastMove?.id === 'gigatonhammer') pokemon.addVolatile('gigatonhammer');
		},
		onAfterMove(pokemon) {
			if (pokemon.removeVolatile('gigatonhammer')) {
				this.add('-hint', "Some effects can force a Pokemon to use Gigaton Hammer again in a row.");
			}
		},
		condition: {},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	strifedicekind: {
		inherit: true,
		isNonstandard: null,
	},
	metronomeifitwasfunny: {
		inherit: true,
		isNonstandard: null,
	},
	meatballmash: {
		inherit: true,
		isNonstandard: null,
	},
	blandybland: {
		inherit: true,
		isNonstandard: null,
	},
	thunderblitz: {
		inherit: true,
		isNonstandard: null,
	},
	scarystory: {
		inherit: true,
		isNonstandard: null,
	},
	moonstrike: {
		inherit: true,
		isNonstandard: null,
	},
	invigorate: {
		inherit: true,
		isNonstandard: null,
	},
	blazingswipe: {
		inherit: true,
		isNonstandard: null,
	},
	hivemind: {
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
	artwall: {
		inherit: true,
		isNonstandard: null,
	},
	badenergy: {
		inherit: true,
		isNonstandard: null,
	},
	cerebralparasite: {
		inherit: true,
		isNonstandard: null,
	},
	bellyflop: {
		inherit: true,
		isNonstandard: null,
	},
	sinkhole: {
		inherit: true,
		isNonstandard: null,
	},
	dustbowl: {
		inherit: true,
		isNonstandard: null,
	},
	squash: {
		inherit: true,
		isNonstandard: null,
	},
	cherrynobyl: {
		inherit: true,
		isNonstandard: null,
	},
	shadowbox: {
		inherit: true,
		isNonstandard: null,
	},
	mindbreak: {
		inherit: true,
		isNonstandard: null,
	},
	berserkersoul: {
		inherit: true,
		isNonstandard: null,
	},
	heartofthecards: {
		inherit: true,
		isNonstandard: null,
	},
	anyheal: {
		inherit: true,
		isNonstandard: null,
	},
	anystatus: {
		inherit: true,
		isNonstandard: null,
	},
	anyattack: {
		inherit: true,
		isNonstandard: null,
	},
	anystatup: {
		inherit: true,
		isNonstandard: null,
	},
	lavadapt: {
		inherit: true,
		isNonstandard: null,
	},
	trashtalk: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorball: {
		inherit: true,
		isNonstandard: null,
	},
	torchshriek: {
		inherit: true,
		isNonstandard: null,
	},
	sereneshockwave: {
		inherit: true,
		isNonstandard: null,
	},
	battlecry: {
		inherit: true,
		isNonstandard: null,
	},
};
