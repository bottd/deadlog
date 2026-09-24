import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/minor-07-28.mg?embed=0
function Minor_07_28_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Apollo',
			'Billy',
			'Calico',
			'Celeste',
			'Doorman',
			'Drifter',
			'Dynamo',
			'Haze',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'Mina',
			'Mirage',
			'Mo &amp; Krill',
			'Paige',
			'Pocket',
			'Shiv',
			'Silver',
			'Venator',
			'Viscous',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2026/minor-07-28.mg?embed=1
function Minor_07_28_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Crushing Fists',
			'Cursed Relic',
			"Diviner's Kevlar",
			'Echo Shard',
			'Ethereal Shift',
			'Frenzy',
			'Fury Trance',
			'Lifestrike',
			'Mystic Shot',
			'Restorative Locket',
			'Scourge',
			'Slowing Bullets',
			'Spirit Burn',
			'Spiritual Overflow',
			'Suppressor',
			'Tankbuster',
			'Weighted Shots'
		]
	});
}
//#endregion
//#region changelogs/2026/minor-07-28.mg
var metadata = {
	title: 'Minor Update - 07-28-2026',
	steam_gid: '1839041357039193',
	published: '2026-07-28T20:24:35.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		"Stamina bucket 3 heroes (slowest) have their ground dash time increased from 0.7s to 0.72s and air dash time from 0.49s to 0.51s The Orb Spawners in base that give 10 souls on hit now split to nearby players on expire Fixed the party member / team mate audio volume slider for voice communications Apollo Riposte base stun duration increased from 0.6s to 0.8s Riposte T3 changed from +1.6s Stun Duration to +60% Bullet, Spirit and Melee Lifesteal against the target for 7s Billy Rising Ram T3 reduced from 8% Max Health to 7% Calico Ava T2 reduced from +45% Move Speed to +40% Ava T3 reduced from +20% damage amp to +18% Celeste Shining Wonder radius increased from 16.5m to 17.5m Shining Wonder damage increased by 10% Shining Wonder buffer duration increased from 3s to 3.25s Doorman Bullet damage rescaled from 26 + 1.19/boon to 24 + 1.25 Call Bell Charge Time increased from 6s to 7s Doorway duration reduced from 20s to 15s Doorway T1 duration increased from +15s to +20s Doorway T3 range reduced from +45m to +40m Luggage Cart damage reduced from 80 to 60 Luggage Cart T1 increased from +60 Damage to +80 Luggage Cart range reduced from 25m to 20m Luggage Cart T2 increased from +20m Cast Range to +25m Drifter Rend spirit scaling reduced from 1.8 to 1.7 Rend T3 silence duration reduced from 2.3s to 2s Dynamo Singularity cooldown reduced from 265s to 250s Haze Sleep Dagger wake up time spirit scaling reduced from 0.003 to 0.002 Sleep Dagger damage spirit scaling reduced from 2.8 to 2.2 Sleep Dagger T2 changed from “-17s Cooldown and Applies 15 Fixation Stacks” to “+1s Sleep Duration and Applies 15 Fixation Stacks” Sleep Dagger T3 changed from “+1s Sleep Duration and -50% Move and Dash Speed for 3s on wake-up” to “-17s Cooldown and -50% Move and Dash Speed for 3s on wake-up” Fixation T3 reduced from +0.14 per Stack to +0.11 Fixation T3 now also scales with Weapon Damage (0.0003) Ivy Stone Form T3 spirit scaling reduced from +1.7 to +1.5 Kelvin Frozen Shelter cooldown reduced from 195s to 185s Lady Geist Life Drain changed from 75% Damage to Heal to 100% Life Drain DPS reduced to provide the same effective heal as before but with less DPS Malice Damage amplification reduced from 8% to 7% Malice T3 increased from +7% Damage Amp to +8% Mina Sanguine Retreat recast time increased from 3.5s to 4s Sanguine Retreat T3 cast range increased from +3m to +4m Mirage Fire Scarabs duration reduced from 7s to 5s Fire Scarabs T2 reduced from +2 Charges to +1 Charge Fire Scarabs T2 now also increases duration by 2s Dust Devil T3 no longer increases Lift Duration by +0.3s Fixed Djinn's Mark T3 still being -1s Cooldown instead of -0.75s Mo & Krill Burrow cooldown no longer starts after the conclusion of the ability, now starts immediately Combo now lets you cast items while using it Paige Rallying Charge cooldown reduced from 220s to 210s Pocket Flying Cloak T3 reduced from -11s Cooldown to -10s Affliction DPS reduced by ~6% (also reduces the spirit scaling and the upgrades) Shiv Stamina regen increased from 5.5s to 6s Killing Blow recast window reduced from 20s to 16s Silver Gun falloff range reduced from 20m->46m to 17m→42m Slam Fire now does 100% bonus damage against NPCs (troopers and neutrals, not objectives) Lycan Curse precast time increased from 0.2 to 0.3 Lycan Curse precast movespeed reduced from 7.6m to 2.5m Lycan Curse T1 reduced from +20% Resists to +15% Venator Sprint speed reduced from 1.5m to 1m Bullet falloff range reduced from 20m-51m to 18m-47m Ira Domini cooldown no longer starts after the conclusion of the ability, now starts immediately Ira Domini blessed stakes damage increased from 100 to 115 Viscous Splatter damage reduced from 70 to 55 Splatter spirit ratio reduced from 0.8 to 0.7 Splatter base bounce count increased from 1 to 2 Splatter T3 bounce count reduced from +2 to +1 The Cube T3 reduced from -25s Cooldown to -20s Puddle Punch slow duration reduced from 4s to 3s Puddle Punch slow increased from -20% to -30% Puddle Punch cooldown reduced from 24s to 21s Goo Ball T2 increased from +10% Resists to +20% Yamato Flying Slash T2 reduced from +40 Spirit Power to +35 Flying Slash T3 charges from +2 to +1 Flying Slash T3 Charge Time increased from 4s to 5s Crushing Fists Max stacks stun duration increased from 0.5s to 0.75s Bullet Resist reduction increased from -4% to -5% per stack Cursed Relic No longer has -14% Damage Output innate Now applies a -25% Damage Output debuff for the 3.25s duration Diviner's Kevlar Spirit power increased from +35 to +40 Echo Shard Now has a 0.5s post-cast time No longer grants +5% Fire Rate Cooldown increased from 35s to 30s + the cooldown of the imbued ability Ethereal Shift Cooldown increased from 35s to 37s Frenzy Now has +10% Bullet Lifesteal as an innate Fury Trance Active now grants +1m Move Speed Active removes move speed penalty when shooting (like Fleetfoot) Lifestrike When hitting a trooper and a hero at the same time, it now always prioritizes healing off the hero (same change for Melee Lifesteal) Mystic Shot Cooldown reduced from 9s to 8s Spirit scaling reduced from 1.2 to 0.9 Restorative Locket Heal per boon increased from 0.32 to 0.5 Scourge No longer grants +17% Debuff Resist innate bonus Active now grants +20% Debuff Resist (retroactive on application) Max Health per second reduced from 2.5% to 2.3% Slowing Bullets No longer grants +15% Weapon Damage Weighted Shots Weapon Damage reduced from +40% to +30% Spiritual Overflow Now provides a bonus +10% Spirit Lifesteal on proc Ability Duration reduced from +15% to +13% Fire Rate reduced from +32% to +30% Spirit Burn No longer hits enemies in a 12m radius, only affects primary target now Changed from the cooldown being on the item to being target based Removed half cooldown against NPC Explosion damage reduced from 110 to 50 Suppressor Duration reduced from 5s to 4.5s Tankbuster No longer procs off of items",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-07-14',
			to: '2026-07-28'
		},
		after: {
			from: '2026-07-29',
			to: '2026-07-30'
		}
	}
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	},
	{
		level: 1,
		title: 'Hero Changes',
		id: 'hero-changes'
	},
	{
		level: 2,
		title: 'Apollo',
		id: 'apollo'
	},
	{
		level: 3,
		title: 'Riposte',
		id: 'riposte'
	},
	{
		level: 2,
		title: 'Billy',
		id: 'billy'
	},
	{
		level: 3,
		title: 'Rising Ram',
		id: 'rising-ram'
	},
	{
		level: 2,
		title: 'Calico',
		id: 'calico'
	},
	{
		level: 3,
		title: 'Ava',
		id: 'ava'
	},
	{
		level: 2,
		title: 'Celeste',
		id: 'celeste'
	},
	{
		level: 3,
		title: 'Shining Wonder',
		id: 'shining-wonder'
	},
	{
		level: 2,
		title: 'Doorman',
		id: 'doorman'
	},
	{
		level: 3,
		title: 'Call Bell Charge Time',
		id: 'call-bell-charge-time'
	},
	{
		level: 3,
		title: 'Doorway',
		id: 'doorway'
	},
	{
		level: 3,
		title: 'Luggage Cart',
		id: 'luggage-cart'
	},
	{
		level: 2,
		title: 'Drifter',
		id: 'drifter'
	},
	{
		level: 3,
		title: 'Rend',
		id: 'rend'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Singularity',
		id: 'singularity'
	},
	{
		level: 2,
		title: 'Haze',
		id: 'haze'
	},
	{
		level: 3,
		title: 'Sleep Dagger',
		id: 'sleep-dagger'
	},
	{
		level: 3,
		title: 'Fixation',
		id: 'fixation'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Stone Form',
		id: 'stone-form'
	},
	{
		level: 2,
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 3,
		title: 'Frozen Shelter',
		id: 'frozen-shelter'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Life Drain',
		id: 'life-drain'
	},
	{
		level: 3,
		title: 'Life Drain DPS',
		id: 'life-drain-dps'
	},
	{
		level: 3,
		title: 'Malice',
		id: 'malice'
	},
	{
		level: 2,
		title: 'Mina',
		id: 'mina'
	},
	{
		level: 3,
		title: 'Sanguine Retreat',
		id: 'sanguine-retreat'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 3,
		title: 'Fire Scarabs',
		id: 'fire-scarabs'
	},
	{
		level: 3,
		title: 'Dust Devil',
		id: 'dust-devil'
	},
	{
		level: 3,
		title: "Djinn's Mark",
		id: 'djinn-s-mark'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Burrow',
		id: 'burrow'
	},
	{
		level: 3,
		title: 'Combo',
		id: 'combo'
	},
	{
		level: 2,
		title: 'Paige',
		id: 'paige'
	},
	{
		level: 3,
		title: 'Rallying Charge',
		id: 'rallying-charge'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: 'Flying Cloak',
		id: 'flying-cloak'
	},
	{
		level: 3,
		title: 'Affliction DPS',
		id: 'affliction-dps'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow'
	},
	{
		level: 2,
		title: 'Silver',
		id: 'silver'
	},
	{
		level: 3,
		title: 'Slam Fire',
		id: 'slam-fire'
	},
	{
		level: 3,
		title: 'Lycan Curse',
		id: 'lycan-curse'
	},
	{
		level: 2,
		title: 'Venator',
		id: 'venator'
	},
	{
		level: 3,
		title: 'Ira Domini',
		id: 'ira-domini'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'Splatter',
		id: 'splatter'
	},
	{
		level: 3,
		title: 'The Cube',
		id: 'the-cube'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch'
	},
	{
		level: 3,
		title: 'Goo Ball',
		id: 'goo-ball'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Flying Slash',
		id: 'flying-slash'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Crushing Fists',
		id: 'crushing-fists'
	},
	{
		level: 2,
		title: 'Cursed Relic',
		id: 'cursed-relic'
	},
	{
		level: 2,
		title: "Diviner's Kevlar",
		id: 'diviner-s-kevlar'
	},
	{
		level: 2,
		title: 'Echo Shard',
		id: 'echo-shard'
	},
	{
		level: 2,
		title: 'Ethereal Shift',
		id: 'ethereal-shift'
	},
	{
		level: 2,
		title: 'Frenzy',
		id: 'frenzy'
	},
	{
		level: 2,
		title: 'Fury Trance',
		id: 'fury-trance'
	},
	{
		level: 2,
		title: 'Lifestrike',
		id: 'lifestrike'
	},
	{
		level: 2,
		title: 'Mystic Shot',
		id: 'mystic-shot'
	},
	{
		level: 2,
		title: 'Restorative Locket',
		id: 'restorative-locket'
	},
	{
		level: 2,
		title: 'Scourge',
		id: 'scourge'
	},
	{
		level: 2,
		title: 'Slowing Bullets',
		id: 'slowing-bullets'
	},
	{
		level: 2,
		title: 'Spirit Burn',
		id: 'spirit-burn'
	},
	{
		level: 2,
		title: 'Spiritual Overflow',
		id: 'spiritual-overflow'
	},
	{
		level: 2,
		title: 'Suppressor',
		id: 'suppressor'
	},
	{
		level: 2,
		title: 'Tankbuster',
		id: 'tankbuster'
	},
	{
		level: 2,
		title: 'Weighted Shots',
		id: 'weighted-shots'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-07-14',
			to: '2026-07-28'
		},
		after: {
			from: '2026-07-29',
			to: '2026-07-30'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Apollo',
			id: 'apollo'
		},
		{
			kind: 'hero',
			name: 'Billy',
			id: 'billy'
		},
		{
			kind: 'hero',
			name: 'Calico',
			id: 'calico'
		},
		{
			kind: 'hero',
			name: 'Celeste',
			id: 'celeste'
		},
		{
			kind: 'hero',
			name: 'Doorman',
			id: 'doorman'
		},
		{
			kind: 'hero',
			name: 'Drifter',
			id: 'drifter'
		},
		{
			kind: 'hero',
			name: 'Dynamo',
			id: 'dynamo'
		},
		{
			kind: 'hero',
			name: 'Haze',
			id: 'haze'
		},
		{
			kind: 'hero',
			name: 'Ivy',
			id: 'ivy'
		},
		{
			kind: 'hero',
			name: 'Kelvin',
			id: 'kelvin'
		},
		{
			kind: 'hero',
			name: 'Lady Geist',
			id: 'lady-geist'
		},
		{
			kind: 'hero',
			name: 'Mina',
			id: 'mina'
		},
		{
			kind: 'hero',
			name: 'Mirage',
			id: 'mirage'
		},
		{
			kind: 'hero',
			name: 'Mo & Krill',
			id: 'mo-krill'
		},
		{
			kind: 'hero',
			name: 'Paige',
			id: 'paige'
		},
		{
			kind: 'hero',
			name: 'Pocket',
			id: 'pocket'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
		},
		{
			kind: 'hero',
			name: 'Silver',
			id: 'silver'
		},
		{
			kind: 'hero',
			name: 'Venator',
			id: 'venator'
		},
		{
			kind: 'hero',
			name: 'Viscous',
			id: 'viscous'
		},
		{
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Crushing Fists',
			id: 'crushing-fists'
		},
		{
			kind: 'item',
			name: 'Cursed Relic',
			id: 'cursed-relic'
		},
		{
			kind: 'item',
			name: "Diviner's Kevlar",
			id: 'diviner-s-kevlar'
		},
		{
			kind: 'item',
			name: 'Echo Shard',
			id: 'echo-shard'
		},
		{
			kind: 'item',
			name: 'Ethereal Shift',
			id: 'ethereal-shift'
		},
		{
			kind: 'item',
			name: 'Frenzy',
			id: 'frenzy'
		},
		{
			kind: 'item',
			name: 'Fury Trance',
			id: 'fury-trance'
		},
		{
			kind: 'item',
			name: 'Lifestrike',
			id: 'lifestrike'
		},
		{
			kind: 'item',
			name: 'Mystic Shot',
			id: 'mystic-shot'
		},
		{
			kind: 'item',
			name: 'Restorative Locket',
			id: 'restorative-locket'
		},
		{
			kind: 'item',
			name: 'Scourge',
			id: 'scourge'
		},
		{
			kind: 'item',
			name: 'Slowing Bullets',
			id: 'slowing-bullets'
		},
		{
			kind: 'item',
			name: 'Spirit Burn',
			id: 'spirit-burn'
		},
		{
			kind: 'item',
			name: 'Spiritual Overflow',
			id: 'spiritual-overflow'
		},
		{
			kind: 'item',
			name: 'Suppressor',
			id: 'suppressor'
		},
		{
			kind: 'item',
			name: 'Tankbuster',
			id: 'tankbuster'
		},
		{
			kind: 'item',
			name: 'Weighted Shots',
			id: 'weighted-shots'
		}
	],
	related: []
};
function Minor_07_28_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Stamina bucket 3 heroes (slowest) have their ground dash time increased from 0.7s to 0.72s and air dash time from 0.49s to 0.51s</li><li>The Orb Spawners in base that give 10 souls on hit now split to nearby players on expire</li><li>Fixed the party member / team mate audio volume slider for voice communications</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	Minor_07_28_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero apollo">${html('\n<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>\n<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>\n')} <div class="ability riposte">${html('\n<p><a href="/ability/riposte"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Riposte change history</a></p>\n<h4 id="riposte"><a href="/ability/riposte">Riposte</a></h4>\n<ul><li>Riposte base stun duration increased from 0.6s to 0.8s</li><li>Riposte T3 changed from +1.6s Stun Duration to +60% Bullet, Spirit and Melee Lifesteal against the target for 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Riposte'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n')} <div class="ability rising-ram">${html('\n<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>\n<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>\n<ul><li>Rising Ram T3 reduced from 8% Max Health to 7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Rising Ram'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n')} <div class="ability ava">${html('\n<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>\n<h4 id="ava"><a href="/ability/ava">Ava</a></h4>\n<ul><li>Ava T2 reduced from +45% Move Speed to +40%</li><li>Ava T3 reduced from +20% damage amp to +18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Ava'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero celeste">${html('\n<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>\n<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>\n')} <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n')} <ul><li>${html('Shining Wonder radius increased from 16.5m to 17.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Shining Wonder radius increased from 16.5m to 17.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shining Wonder damage increased by 10%')}</li> <li>${html('Shining Wonder buffer duration increased from 3s to 3.25s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n<ul><li>Bullet damage rescaled from 26 + 1.19/boon to 24 + 1.25</li></ul>\n')} <div class="ability call-bell-charge-time">${html('\n<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell Charge Time change history</a></p>\n<h4 id="call-bell-charge-time"><a href="/ability/call-bell">Call Bell Charge Time</a></h4>\n<ul><li>Call Bell Charge Time increased from 6s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Call Bell Charge Time'
	});
	$$renderer.push(
		`<!----></div> <div class="ability doorway">${html('\n<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway change history</a></p>\n<h4 id="doorway"><a href="/ability/doorway">Doorway</a></h4>\n<ul><li>Doorway duration reduced from 20s to 15s</li><li>Doorway T1 duration increased from +15s to +20s</li><li>Doorway T3 range reduced from +45m to +40m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Doorway'
	});
	$$renderer.push(
		`<!----></div> <div class="ability luggage-cart">${html('\n<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>\n<h4 id="luggage-cart"><a href="/ability/luggage-cart">Luggage Cart</a></h4>\n')} <ul><li>${html('Luggage Cart damage reduced from 80 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Luggage Cart damage reduced from 80 to 60'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Luggage Cart T1 increased from +60 Damage to +80')}</li> <li>${html('Luggage Cart range reduced from 25m to 20m')}</li> <li>${html('Luggage Cart T2 increased from +20m Cast Range to +25m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Luggage Cart'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n')} <div class="ability rend">${html('\n<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>\n<h4 id="rend"><a href="/ability/rend">Rend</a></h4>\n<ul><li>Rend spirit scaling reduced from 1.8 to 1.7</li><li>Rend T3 silence duration reduced from 2.3s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Rend'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n')} <ul><li>${html('Singularity cooldown reduced from 265s to 250s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Singularity cooldown reduced from 265s to 250s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger wake up time spirit scaling reduced from 0.003 to 0.002</li><li>Sleep Dagger damage spirit scaling reduced from 2.8 to 2.2</li><li>Sleep Dagger T2 changed from “-17s Cooldown and Applies 15 Fixation Stacks” to “+1s Sleep Duration and Applies 15 Fixation Stacks”</li><li>Sleep Dagger T3 changed from “+1s Sleep Duration and -50% Move and Dash Speed for 3s on wake-up” to “-17s Cooldown and -50% Move and Dash Speed for 3s on wake-up”</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fixation">${html('\n<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>\n<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>\n<ul><li>Fixation T3 reduced from +0.14 per Stack to +0.11</li><li>Fixation T3 now also scales with Weapon Damage (0.0003)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Fixation'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>\n<ul><li>Stone Form T3 spirit scaling reduced from +1.7 to +1.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n')} <ul><li>${html('Frozen Shelter cooldown reduced from 195s to 185s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Frozen Shelter cooldown reduced from 195s to 185s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability life-drain">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>\n<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>\n<ul><li>Life Drain changed from 75% Damage to Heal to 100%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain'
	});
	$$renderer.push(
		`<!----></div> <div class="ability life-drain-dps">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain DPS change history</a></p>\n<h4 id="life-drain-dps"><a href="/ability/life-drain">Life Drain DPS</a></h4>\n<ul><li>Life Drain DPS reduced to provide the same effective heal as before but with less DPS</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Malice Damage amplification reduced from 8% to 7%</li><li>Malice T3 increased from +7% Damage Amp to +8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mina">${html('\n<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>\n<h3 id="mina"><a href="/hero/mina">Mina</a></h3>\n')} <div class="ability sanguine-retreat">${html('\n<p><a href="/ability/sanguine-retreat"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_sanguine_retreat.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sanguine Retreat change history</a></p>\n<h4 id="sanguine-retreat"><a href="/ability/sanguine-retreat">Sanguine Retreat</a></h4>\n<ul><li>Sanguine Retreat recast time increased from 3.5s to 4s</li><li>Sanguine Retreat T3 cast range increased from +3m to +4m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Sanguine Retreat'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs duration reduced from 7s to 5s</li><li>Fire Scarabs T2 reduced from +2 Charges to +1 Charge</li><li>Fire Scarabs T2 now also increases duration by 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dust-devil">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>\n<h4 id="dust-devil"><a href="/ability/dust-devil">Dust Devil</a></h4>\n<ul><li>Dust Devil T3 no longer increases Lift Duration by +0.3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Dust Devil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Fixed Djinn&#x27;s Mark T3 still being -1s Cooldown instead of -0.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability burrow">${html('\n<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>\n<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>\n<ul><li>Burrow cooldown no longer starts after the conclusion of the ability, now starts immediately</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Burrow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Combo now lets you cast items while using it</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paige">${html('\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n')} <div class="ability rallying-charge">${html('\n<p><a href="/ability/rallying-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rallying Charge change history</a></p>\n<h4 id="rallying-charge"><a href="/ability/rallying-charge">Rallying Charge</a></h4>\n')} <ul><li>${html('Rallying Charge cooldown reduced from 220s to 210s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paige',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Rallying Charge cooldown reduced from 220s to 210s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Rallying Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Flying Cloak T3 reduced from -11s Cooldown to -10s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction-dps">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction DPS change history</a></p>\n<h4 id="affliction-dps"><a href="/ability/affliction">Affliction DPS</a></h4>\n<ul><li>Affliction DPS reduced by ~6% (also reduces the spirit scaling and the upgrades)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Stamina regen increased from 5.5s to 6s</li></ul>\n')} <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow recast window reduced from 20s to 16s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero silver">${html('\n<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>\n<h3 id="silver"><a href="/hero/silver">Silver</a></h3>\n<ul><li>Gun falloff range reduced from 20m-&gt;46m to 17m→42m</li></ul>\n')} <div class="ability slam-fire">${html('\n<p><a href="/ability/slam-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_slamfire.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slam Fire change history</a></p>\n<h4 id="slam-fire"><a href="/ability/slam-fire">Slam Fire</a></h4>\n<ul><li>Slam Fire now does 100% bonus damage against NPCs (troopers and neutrals, not objectives)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Slam Fire'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse change history</a></p>\n<h4 id="lycan-curse"><a href="/ability/lycan-curse">Lycan Curse</a></h4>\n<ul><li>Lycan Curse precast time increased from 0.2 to 0.3</li><li>Lycan Curse precast movespeed reduced from 7.6m to 2.5m</li><li>Lycan Curse T1 reduced from +20% Resists to +15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero venator">${html('\n<p><a href="/hero/venator"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Venator patch history</a></p>\n<h3 id="venator"><a href="/hero/venator">Venator</a></h3>\n<ul><li>Sprint speed reduced from 1.5m to 1m</li><li>Bullet falloff range reduced from 20m-51m to 18m-47m</li></ul>\n')} <div class="ability ira-domini">${html('\n<p><a href="/ability/ira-domini"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_crossbow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ira Domini change history</a></p>\n<h4 id="ira-domini"><a href="/ability/ira-domini">Ira Domini</a></h4>\n<ul><li>Ira Domini cooldown no longer starts after the conclusion of the ability, now starts immediately</li><li>Ira Domini blessed stakes damage increased from 100 to 115</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Ira Domini'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n')} <ul><li>${html('Splatter damage reduced from 70 to 55')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Splatter damage reduced from 70 to 55'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Splatter spirit ratio reduced from 0.8 to 0.7')}</li> <li>${html('Splatter base bounce count increased from 1 to 2')}</li> <li>${html('Splatter T3 bounce count reduced from +2 to +1')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability the-cube">${html('\n<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>\n<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>\n<ul><li>The Cube T3 reduced from -25s Cooldown to -20s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'The Cube'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n')} <ul><li>${html('Puddle Punch slow duration reduced from 4s to 3s')}</li> <li>${html('Puddle Punch slow increased from -20% to -30%')}</li> <li>${html('Puddle Punch cooldown reduced from 24s to 21s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 2,
		bulletIndex: 2,
		text: 'Puddle Punch cooldown reduced from 24s to 21s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Goo Ball T2 increased from +10% Resists to +20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability flying-slash">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>\n<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>\n<ul><li>Flying Slash T2 reduced from +40 Spirit Power to +35</li><li>Flying Slash T3 charges from +2 to +1</li><li>Flying Slash T3 Charge Time increased from 4s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Slash'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	Minor_07_28_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item crushing-fists">${html('\n<p><a href="/item/crushing-fists"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crushing Fists patch history</a></p>\n<h3 id="crushing-fists"><a href="/item/crushing-fists">Crushing Fists</a></h3>\n<ul><li>Max stacks stun duration increased from 0.5s to 0.75s</li><li>Bullet Resist reduction increased from -4% to -5% per stack</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crushing Fists',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cursed-relic">${html('\n<p><a href="/item/cursed-relic"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/curse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cursed Relic patch history</a></p>\n<h3 id="cursed-relic"><a href="/item/cursed-relic">Cursed Relic</a></h3>\n<ul><li>No longer has -14% Damage Output innate</li><li>Now applies a -25% Damage Output debuff for the 3.25s duration</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cursed Relic',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item diviner-s-kevlar">${html('\n<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>\n<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>\n<ul><li>Spirit power increased from +35 to +40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n<ul><li>Now has a 0.5s post-cast time</li><li>No longer grants +5% Fire Rate</li><li>Cooldown increased from 35s to 30s + the cooldown of the imbued ability</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n')} <ul><li>${html('Cooldown increased from 35s to 37s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 35s to 37s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Now has +10% Bullet Lifesteal as an innate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fury-trance">${html('\n<p><a href="/item/fury-trance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fury_trance.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fury Trance patch history</a></p>\n<h3 id="fury-trance"><a href="/item/fury-trance">Fury Trance</a></h3>\n<ul><li>Active now grants +1m Move Speed</li><li>Active removes move speed penalty when shooting (like Fleetfoot)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fury Trance',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>When hitting a trooper and a hero at the same time, it now always prioritizes healing off the hero (same change for Melee Lifesteal)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n')} <ul><li>${html('Cooldown reduced from 9s to 8s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 9s to 8s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Spirit scaling reduced from 1.2 to 0.9')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Heal per boon increased from 0.32 to 0.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item scourge">${html('\n<p><a href="/item/scourge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Scourge patch history</a></p>\n<h3 id="scourge"><a href="/item/scourge">Scourge</a></h3>\n<ul><li>No longer grants +17% Debuff Resist innate bonus</li><li>Active now grants +20% Debuff Resist (retroactive on application)</li><li>Max Health per second reduced from 2.5% to 2.3%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Scourge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-bullets">${html('\n<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>\n<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>\n<ul><li>No longer grants +15% Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-burn">${html('\n<p><a href="/item/spirit-burn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Burn patch history</a></p>\n<h3 id="spirit-burn"><a href="/item/spirit-burn">Spirit Burn</a></h3>\n<ul><li>No longer hits enemies in a 12m radius, only affects primary target now</li><li>Changed from the cooldown being on the item to being target based</li><li>Removed half cooldown against NPC</li><li>Explosion damage reduced from 110 to 50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Burn',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Now provides a bonus +10% Spirit Lifesteal on proc</li><li>Ability Duration reduced from +15% to +13%</li><li>Fire Rate reduced from +32% to +30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item suppressor">${html('\n<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>\n<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>\n<ul><li>Duration reduced from 5s to 4.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Suppressor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tankbuster">${html('\n<p><a href="/item/tankbuster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tankbuster patch history</a></p>\n<h3 id="tankbuster"><a href="/item/tankbuster">Tankbuster</a></h3>\n<ul><li>No longer procs off of items</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tankbuster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weighted-shots">${html('\n<p><a href="/item/weighted-shots"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weighted Shots patch history</a></p>\n<h3 id="weighted-shots"><a href="/item/weighted-shots">Weighted Shots</a></h3>\n<ul><li>Weapon Damage reduced from +40% to +30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weighted Shots',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { Minor_07_28_mg as default, metadata, readingManifest, toc };
