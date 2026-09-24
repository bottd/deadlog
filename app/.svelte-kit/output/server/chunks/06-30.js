import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/06-30.mg?embed=0
function _6_30_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Apollo',
			'Billy',
			'Celeste',
			'Doorman',
			'Drifter',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Holliday',
			'Ivy',
			'Lash',
			'Mina',
			'Mo &amp; Krill',
			'Paige',
			'Paradox',
			'Pocket',
			'Rem',
			'Seven',
			'Shiv',
			'Vindicta',
			'Viscous',
			'Vyper',
			'Warden'
		]
	});
}
//#endregion
//#region changelogs/2026/06-30.mg?embed=1
function _6_30_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: ['Cursed Relic', 'Mystic Shot', 'Scourge', 'Toxic Bullets']
	});
}
//#endregion
//#region changelogs/2026/06-30.mg
var metadata = {
	title: 'Minor Update - 06-30-2026',
	alias: '2026/minor-06-30',
	thread_id: '146261',
	steam_gid: '1836506165563227',
	published: '2026-06-30T17:22:14.000Z',
	author: 'IceFrog',
	author_image: '/assets/authors/icefrog.webp',
	major_update: false,
	content_text:
		'King of the Hill objective has been rethemed and renamed to "Unstable Rift" Unstable Rift no longer requires an Urn delivery to trigger the start of the event. It now has a variable start time of +/- 1 minute. There is a global announcement 25s before it spawns. 60s before that there is also an in-world only visual effect to let you know which lane it\'ll randomly spawn in. Unstable Rift spawn interval increased from every 6 minutes to every 7 minutes Unstable Rift comeback bonuses (resists in the area, extra comeback bounty, and trailing/leading team claiming timer) now all scale linearly based on the amount of NW they are trailing (scales from no bonus at 0% NW behind to full bonus at 15% NW behind) The team that secures the Unstable Rift now also has a wave of 5 Rift Troopers sent down from the rift location. When trailing, spawns up to 12 troopers instead (using the same linear ramp from 0% NW to -15% NW) Rift Troopers drop no souls when killed Rift Troopers spawn with 100% extra health and damage (they also look larger and have custom VFX). Their bonus health and damage grow slightly per event (first one is 100%, then 120%, 140%, etc) Any players in the Unstable Rift Zone are now revealed on the minimap Unstable Rift bounty increased by 35% (to account for the 35% loss with no urn runner bounty, overall objective bounty is unchanged) Unstable Rift no longer grants +1 permanent buff to each player (there is also no +3 buffs to the urn runner) Urn running is now its own objective. Spawns on either end of the map (where the previous neutral pickup locations were), and gets delivered to the opposite end. Spawns at 10/15/20/25/etc. Urn runner is no longer revealed and is not disarmed or silenced (going through a doorway or mirage teleport still drops it) Urn cannot be manually dropped. It gets dropped when you get hit with a light or heavy melee, are stunned or are killed. It stays where it drops and does not walk back home. Urn runner can no longer parry Urn bounty value starts decaying after 45s from being picked up. It drains gradually over another 45s and then the urn is removed when the bounty is empty. Urn is deposited immediately at the drop off point. Urn bounty when deposited is worth 250 + 70/min for just the urn runner. Still has the comeback bounty component. Upon deposit all of the souls are released as orbs into the air (if another ally secures the orbs, they share the bounty with the urn runner). Urn runner gets +4 permanent buffs on deposit Urn is now louder when it talks and is easier to hear by nearby enemies After 3 Minutes from spawn the Urn will start walking very slowly on his own towards the deposit location Urn runner\'s passive bonuses while holding it now scales based on how behind you are, rather than being on or off (same as the Unstable Rift 0%-15% NW linear scaling). Bonuses are the same as the previous urn runner bonuses. citadel_force_spawn_idol - This spawns the Urn citadel_koth_dev_test_spawn - This moves your hero and spawns the Unstable Rift in the early warning state then quickly transitions to the 25s broadcasted timer Reworked Boon reward table Health per boon reduced by 5% All ultimate base and upgrade cooldowns nerfed by 15% (rounded to the nearest multiple of 5) Rejuv buff duration reduced from 4 minutes to 3 Respawn ramp changed from 8-30s from 5-19m to 8-35s from 5-20m Guardian bounty reduced from 1500 to 1250 Walker bounty reduced from 4000 to 3500 First blood bounty reduced from 150 to 125 Base kill bounty reduced from 250 to 200 (max is still 2200 at 40m) Trooper bounty rescaled from 116 + 1.16/m to 100 + 2/m (less before 20m, more after) Trooper bounty ratio in the deniable flying orb increased from 40% to 50% Minimum unsecured souls allowed to drop reduced from 150 to 50 + 5/min Dash Jump input window increased from 0.2s to 0.25s duration (start time: 0.3s to end time: 0.55s) Dash Jump distance increased from 18m to 19m Dash Jump vertical impulse increased from 400 to 425 Jump Pads on top of the double sinner buildings have been removed Hovering an item in the shop now shows you a preview for your investment bars Street Brawl: No longer locks you out of getting off the zipline in the first few seconds Street Brawl: Increased item randomness a bit Street Brawl: Fixed Enhanced Sharpshooter and Enhanced Spiritual Overflow not maintaining the bonuses from their enhanced components Abrams Siphon Life T3 reduced from +3m Radius to +2m Shoulder Charge T3 reduced from -20s Cooldown to -18s Apollo Riposte T1 increased from -7s Cooldown to -8s Riposte grace window to target after channel increased from +1s to +1.3s Riposte cast range increased from 25m to 35m Riposte targeting angle increased from 70 to 90 Flawless Advance Heal on hero hit spirit scaling increased from 1 to 1.3 Itani Lo Sahn T3 increased from +40% Bonus Damage to +50% Billy Bullet damage per boon reduced by 10% Bashdown melee scaling reduced from 1.1 to 0.9 Bashdown T3 reduced from 60% Heavy Melee damage to 50% Rising Ram T3 Max HP Damage reduced from 10% to 8% Rising Ram T3 Max HP Damage spirit scaling increased from 0.017 to 0.035 (break even at 111 spirit power) Celeste Dazzling Trick cooldown reduced from 35s to 32s Radiant Daggers buff duration increased from 25s to 30s Radiant Daggers spirit scaling increased from 0.56 to 0.63 Shining Wonder bounce range increased from 15.5m to 16.5m Shining Wonder damage increased by 10% Doorman Doorway cooldown increased from 40s to 45s Drifter Health per boon increased from 41 to 43 (global hp boon reduction is after this) Rend cast time reduced from 0.5s to 0.4s Rend post cast time reduced from 0.5s to 0.4s Rend T2 increased from -7s Cooldown to -8s Bloodscent T1 increased from +2m/s while near an isolated enemy to +3m/s Bloodscent T2 increased from 18% missing health heal to +24% Dynamo Rejuvenating Aurora regeneration increased from 25/s to 30/s Grey Talon Rain of Arrows cooldown increased from 23s to 25s Guided Owl permanent spirit bonus reduced from 10 to 8 Holliday Powder Keg velocity reduced slightly Powder Keg charge delay increased from 7s to 7.5s Powder Keg spirit scaling reduced from 1.4 to 1.2 Powder Keg T3 reduced from +100 Damage to +80 Haze Sleep Dagger T1 increased from -8% Bullet Resist to -10% Sleep Dagger T2 increased from -17s Cooldown to -18s Smoke Bomb T3 increased from +40% Bullet Lifesteal to +50% Ivy Entangling Thorns spirit scaling increased from 0.45 to 0.55 Kudzu Connection Replicated Healing per boon scale increased from +0.5 to +0.85 Air Drop cooldown reduction when used on allies increased from -25% to -30% Lash Ground Strike cooldown reduced from 21s to 18s Flog angle increased from 30 to 38 Mina Rake missing health as damage increased from 5% to 6% Sanguine Retreat T3 now also increases range by +3m Nox Nostra damage increased from 4.45 to 4.6 Nox Nostra T1 damage increased from +1.74 to +1.9 Mo & Krill Sand Blast T2 slow increased from -25% to -30% Sand Blast T3 increased from -20s Cooldown to -25s Combo bonus max health per kill increased from 30+1/boon to 40+2/boon Paige Health per boon increased from 29 to 33 Bookwyrm T1 changed from "+2s Trail Duration and +1m Radius" to "-12s Cooldown" Bookwyrm T2 changed from "+10m Range and -12s Cooldown" to "+1 Charge, +1m Radius and +2s Trail Duration" Bookworm T3 changed from "+100 Damage, +30 DPS and +1 Charge" to "+100 Damage, +30 DPS and +12m Travel Range" Plot Armor T1 fire rate spirit scaling increased from 0.13 to 0.16 Plot Armor T3 increased from 75% Barrier to 100% Rallying Charge is now properly counted as a "miss" (for the -50% CD Reduction) if the only thing that was impacted were non-heroes Rallying Charge T3 Max Amp increased from +50% to +70% Paradox Kinetic Carbine T2 now also increases move speed spirit scaling (0.06) Kinetic Carbine T3 changed from affecting Max Damage Scaling to affecting both Min and Max Damage Scaling Pocket Bullet damage per boon reduced from 0.16 to 0.14 Flying Cloak T3 reduced from -12s Cooldown to -11s Rem Tag Along healing per second spirit scaling reduced from 0.66 to 0.4 Tag Along T3 missing health spirit scaling reduced from +0.02 to +0.016 Lil Helpers Spirit Resist reduced from 15% to 12% Lil Helpers T1 changed from "+1 Helper" to "+1 Helper and +1.5m/s Move Speed" Lil Helpers T2 changed from "+8% Spirit Resist and +1.5m/s Move Speed" to "+1 Helper and +15% Trooper Damage and Resist" Lil Helpers T3 changed from "+2 Helpers and +20% Trooper Damage and Resist" to "+1 Helper and +15% Spirit Resist" Seven Lightning Ball charge delay reduced from 7s to 6s Storm Cloud time to expand increased from 1.5s to 3.5s Storm Cloud damage interval increased from 0.25s to 0.3s (DPS unchanged) Storm Cloud T2 now also increases Initial Radius by +5m Shiv Alt Fire damage now has a custom value per boon (+0.2) Alt Fire ammo consumed per shot increased from 3 to 5 Alt Fire knockback movement is now disabled by slowing hex state Serrated Knives cooldown reduced from 18s to 16s Slice and Dice now deals +25 light melee damage (75 total) instead of 60 spirit damage Slice and Dice changed from -6% Spirit Resist to +4% Damage Amp Bloodletting T2 changed from "+15% Incoming Damage Deferred" to "+35% Deferred Damage Cleared" Bloodletting T3 changed from "+50% Deferred Damage Cleared" to "+15% Incoming Damage Deferred" Killing Blow now deals damage to troopers and neutrals along the way Killing Blow executing a hero now instantly fills the rage bar Killing Blow now has the T3 "recast within 20s on a hero kill" as part of the base ability Killing Blow Full Rage Damage Bonus reduced from +12% to +8% Killing Blow range reduced from 18m to 12m Killing Blow T1 now also increases range by +6m Killing Blow T2 increased from +10% Full Rage Bonus Damage to +16% Killing Blow T3 increased from +5% Enemy health Threshold to +10% Vindicta Stake T2 reduced from -20s Cooldown to -22s Crow Familiar T2 increased from -12s Cooldown to -16s Crow Familiar collision radius between each crow increased slightly Assassinate Max Bonus Damage spirit scaling increased from 2 to 2.3 Viscous Splatter T3 spirit scaling reduced from +1.1 to +1.0 Puddle Punch T3 increased from -12s Cooldown to -14s Goo Ball T3 increased from +6s Duration to +7s Vyper Screwjab Dagger T3 now also reduces charge delay from 4s to 2s Slither T3 spirit scaling increased from 0.6 to 0.8 Warden Bullet damage per boon reduced from 0.34 to 0.28 Willpower T2 increased from -22s Cooldown to -24s Willpower T3 increased from +2.5 spirit power scaling to +2.7 Mystic Shot Cooldown increased from 8s to 9s Toxic Bullets Bleed damage increased from 1.7% to 1.9% Scourge Max Health DPS reduced from 3.5% to 2.6% Max Health DPS now scales with spirit power (0.0055) Cursed Relic Damage Penalty increased from -10% to -14%',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-06-16',
			to: '2026-06-30'
		},
		after: {
			from: null,
			to: null
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
		title: 'Abrams',
		id: 'abrams'
	},
	{
		level: 3,
		title: 'Siphon Life',
		id: 'siphon-life'
	},
	{
		level: 3,
		title: 'Shoulder Charge',
		id: 'shoulder-charge'
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
		level: 3,
		title: 'Flawless Advance',
		id: 'flawless-advance'
	},
	{
		level: 3,
		title: 'Itani Lo Sahn',
		id: 'itani-lo-sahn'
	},
	{
		level: 2,
		title: 'Billy',
		id: 'billy'
	},
	{
		level: 3,
		title: 'Bashdown',
		id: 'bashdown'
	},
	{
		level: 3,
		title: 'Rising Ram',
		id: 'rising-ram'
	},
	{
		level: 2,
		title: 'Celeste',
		id: 'celeste'
	},
	{
		level: 3,
		title: 'Dazzling Trick',
		id: 'dazzling-trick'
	},
	{
		level: 3,
		title: 'Radiant Daggers',
		id: 'radiant-daggers'
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
		title: 'Doorway',
		id: 'doorway'
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
		level: 3,
		title: 'Bloodscent',
		id: 'bloodscent'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Rejuvenating Aurora',
		id: 'rejuvenating-aurora'
	},
	{
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Rain of Arrows',
		id: 'rain-of-arrows'
	},
	{
		level: 3,
		title: 'Guided Owl',
		id: 'guided-owl'
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
		title: 'Smoke Bomb',
		id: 'smoke-bomb'
	},
	{
		level: 2,
		title: 'Holliday',
		id: 'holliday'
	},
	{
		level: 3,
		title: 'Powder Keg',
		id: 'powder-keg'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Entangling Thorns',
		id: 'entangling-thorns'
	},
	{
		level: 3,
		title: 'Kudzu Connection',
		id: 'kudzu-connection'
	},
	{
		level: 3,
		title: 'Air Drop',
		id: 'air-drop'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Ground Strike',
		id: 'ground-strike'
	},
	{
		level: 3,
		title: 'Flog',
		id: 'flog'
	},
	{
		level: 2,
		title: 'Mina',
		id: 'mina'
	},
	{
		level: 3,
		title: 'Rake',
		id: 'rake'
	},
	{
		level: 3,
		title: 'Sanguine Retreat',
		id: 'sanguine-retreat'
	},
	{
		level: 3,
		title: 'Nox Nostra',
		id: 'nox-nostra'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Sand Blast',
		id: 'sand-blast'
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
		title: 'Bookwyrm',
		id: 'bookwyrm'
	},
	{
		level: 3,
		title: 'Bookworm',
		id: 'bookworm'
	},
	{
		level: 3,
		title: 'Plot Armor',
		id: 'plot-armor'
	},
	{
		level: 3,
		title: 'Rallying Charge',
		id: 'rallying-charge'
	},
	{
		level: 2,
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 3,
		title: 'Kinetic Carbine',
		id: 'kinetic-carbine'
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
		level: 2,
		title: 'Rem',
		id: 'rem'
	},
	{
		level: 3,
		title: 'Tag Along',
		id: 'tag-along'
	},
	{
		level: 3,
		title: 'Lil Helpers Spirit Resist',
		id: 'lil-helpers-spirit-resist'
	},
	{
		level: 3,
		title: 'Lil Helpers',
		id: 'lil-helpers'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Lightning Ball',
		id: 'lightning-ball'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 3,
		title: 'Serrated Knives',
		id: 'serrated-knives'
	},
	{
		level: 3,
		title: 'Slice and Dice',
		id: 'slice-and-dice'
	},
	{
		level: 3,
		title: 'Bloodletting',
		id: 'bloodletting'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow'
	},
	{
		level: 3,
		title: 'Killing Blow Full Rage Damage Bonus',
		id: 'killing-blow-full-rage-damage-bonus'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow-1'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Stake',
		id: 'stake'
	},
	{
		level: 3,
		title: 'Crow Familiar',
		id: 'crow-familiar'
	},
	{
		level: 3,
		title: 'Assassinate Max Bonus Damage',
		id: 'assassinate-max-bonus-damage'
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
		title: 'Vyper',
		id: 'vyper'
	},
	{
		level: 3,
		title: 'Screwjab Dagger',
		id: 'screwjab-dagger'
	},
	{
		level: 3,
		title: 'Slither',
		id: 'slither'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Willpower',
		id: 'willpower'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Cursed Relic',
		id: 'cursed-relic'
	},
	{
		level: 2,
		title: 'Mystic Shot',
		id: 'mystic-shot'
	},
	{
		level: 2,
		title: 'Scourge',
		id: 'scourge'
	},
	{
		level: 2,
		title: 'Toxic Bullets',
		id: 'toxic-bullets'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-06-16',
			to: '2026-06-30'
		},
		after: null,
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Abrams',
			id: 'abrams'
		},
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
			name: 'Grey Talon',
			id: 'grey-talon'
		},
		{
			kind: 'hero',
			name: 'Haze',
			id: 'haze'
		},
		{
			kind: 'hero',
			name: 'Holliday',
			id: 'holliday'
		},
		{
			kind: 'hero',
			name: 'Ivy',
			id: 'ivy'
		},
		{
			kind: 'hero',
			name: 'Lash',
			id: 'lash'
		},
		{
			kind: 'hero',
			name: 'Mina',
			id: 'mina'
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
			name: 'Paradox',
			id: 'paradox'
		},
		{
			kind: 'hero',
			name: 'Pocket',
			id: 'pocket'
		},
		{
			kind: 'hero',
			name: 'Rem',
			id: 'rem'
		},
		{
			kind: 'hero',
			name: 'Seven',
			id: 'seven'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
		},
		{
			kind: 'hero',
			name: 'Vindicta',
			id: 'vindicta'
		},
		{
			kind: 'hero',
			name: 'Viscous',
			id: 'viscous'
		},
		{
			kind: 'hero',
			name: 'Vyper',
			id: 'vyper'
		},
		{
			kind: 'hero',
			name: 'Warden',
			id: 'warden'
		},
		{
			kind: 'item',
			name: 'Cursed Relic',
			id: 'cursed-relic'
		},
		{
			kind: 'item',
			name: 'Mystic Shot',
			id: 'mystic-shot'
		},
		{
			kind: 'item',
			name: 'Scourge',
			id: 'scourge'
		},
		{
			kind: 'item',
			name: 'Toxic Bullets',
			id: 'toxic-bullets'
		}
	],
	related: []
};
function _6_30_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<p><img src="https://clan.akamai.steamstatic.com/images/45164767/568ff640318c8a81e2b5b4a22bf29e100ee144d9.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>\n<ul><li>King of the Hill objective has been rethemed and renamed to &quot;Unstable Rift&quot;</li><li>Unstable Rift no longer requires an Urn delivery to trigger the start of the event. It now has a variable start time of +/- 1 minute. There is a global announcement 25s before it spawns. 60s before that there is also an in-world only visual effect to let you know which lane it&#x27;ll randomly spawn in.</li><li>Unstable Rift spawn interval increased from every 6 minutes to every 7 minutes</li><li>Unstable Rift comeback bonuses (resists in the area, extra comeback bounty, and trailing/leading team claiming timer) now all scale linearly based on the amount of NW they are trailing (scales from no bonus at 0% NW behind to full bonus at 15% NW behind)</li><li>The team that secures the Unstable Rift now also has a wave of 5 Rift Troopers sent down from the rift location. When trailing, spawns up to 12 troopers instead (using the same linear ramp from 0% NW to -15% NW)</li><li>Rift Troopers drop no souls when killed</li><li>Rift Troopers spawn with 100% extra health and damage (they also look larger and have custom VFX). Their bonus health and damage grow slightly per event (first one is 100%, then 120%, 140%, etc)</li><li>Any players in the Unstable Rift Zone are now revealed on the minimap</li><li>Unstable Rift bounty increased by 35% (to account for the 35% loss with no urn runner bounty, overall objective bounty is unchanged)</li><li>Unstable Rift no longer grants +1 permanent buff to each player (there is also no +3 buffs to the urn runner)</li><li>Urn running is now its own objective. Spawns on either end of the map (where the previous neutral pickup locations were), and gets delivered to the opposite end. Spawns at 10/15/20/25/etc.</li><li>Urn runner is no longer revealed and is not disarmed or silenced (going through a doorway or mirage teleport still drops it)</li><li>Urn cannot be manually dropped. It gets dropped when you get hit with a light or heavy melee, are stunned or are killed. It stays where it drops and does not walk back home.</li><li>Urn runner can no longer parry</li><li>Urn bounty value starts decaying after 45s from being picked up. It drains gradually over another 45s and then the urn is removed when the bounty is empty.</li><li>Urn is deposited immediately at the drop off point.</li><li>Urn bounty when deposited is worth 250 + 70/min for just the urn runner. Still has the comeback bounty component. Upon deposit all of the souls are released as orbs into the air (if another ally secures the orbs, they share the bounty with the urn runner).</li><li>Urn runner gets +4 permanent buffs on deposit</li><li>Urn is now louder when it talks and is easier to hear by nearby enemies</li><li>After 3 Minutes from spawn the Urn will start walking very slowly on his own towards the deposit location</li><li>Urn runner&#x27;s passive bonuses while holding it now scales based on how behind you are, rather than being on or off (same as the Unstable Rift 0%-15% NW linear scaling). Bonuses are the same as the previous urn runner bonuses.</li><li>citadel_force_spawn_idol - This spawns the Urn</li><li>citadel_koth_dev_test_spawn - This moves your hero and spawns the Unstable Rift in the early warning state then quickly transitions to the 25s broadcasted timer</li><li>Reworked Boon reward table</li><li>Health per boon reduced by 5%</li><li>All ultimate base and upgrade cooldowns nerfed by 15% (rounded to the nearest multiple of 5)</li><li>Rejuv buff duration reduced from 4 minutes to 3</li><li>Respawn ramp changed from 8-30s from 5-19m to 8-35s from 5-20m</li><li>Guardian bounty reduced from 1500 to 1250</li><li>Walker bounty reduced from 4000 to 3500</li><li>First blood bounty reduced from 150 to 125</li><li>Base kill bounty reduced from 250 to 200 (max is still 2200 at 40m)</li><li>Trooper bounty rescaled from 116 + 1.16/m to 100 + 2/m (less before 20m, more after)</li><li>Trooper bounty ratio in the deniable flying orb increased from 40% to 50%</li><li>Minimum unsecured souls allowed to drop reduced from 150 to 50 + 5/min</li><li>Dash Jump input window increased from 0.2s to 0.25s duration (start time: 0.3s to end time: 0.55s)</li><li>Dash Jump distance increased from 18m to 19m</li><li>Dash Jump vertical impulse increased from 400 to 425</li><li>Jump Pads on top of the double sinner buildings have been removed</li><li>Hovering an item in the shop now shows you a preview for your investment bars</li><li>Street Brawl: No longer locks you out of getting off the zipline in the first few seconds</li><li>Street Brawl: Increased item randomness a bit</li><li>Street Brawl: Fixed Enhanced Sharpshooter and Enhanced Spiritual Overflow not maintaining the bonuses from their enhanced components</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_6_30_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Siphon Life T3 reduced from +3m Radius to +2m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Shoulder Charge T3 reduced from -20s Cooldown to -18s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero apollo">${html('\n<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>\n<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>\n')} <div class="ability riposte">${html('\n<p><a href="/ability/riposte"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Riposte change history</a></p>\n<h4 id="riposte"><a href="/ability/riposte">Riposte</a></h4>\n<ul><li>Riposte T1 increased from -7s Cooldown to -8s</li><li>Riposte grace window to target after channel increased from +1s to +1.3s</li><li>Riposte cast range increased from 25m to 35m</li><li>Riposte targeting angle increased from 70 to 90</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Riposte'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>\n<h4 id="flawless-advance"><a href="/ability/flawless-advance">Flawless Advance</a></h4>\n<ul><li>Flawless Advance Heal on hero hit spirit scaling increased from 1 to 1.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability itani-lo-sahn">${html('\n<p><a href="/ability/itani-lo-sahn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_ult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Itani Lo Sahn change history</a></p>\n<h4 id="itani-lo-sahn"><a href="/ability/itani-lo-sahn">Itani Lo Sahn</a></h4>\n<ul><li>Itani Lo Sahn T3 increased from +40% Bonus Damage to +50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Itani Lo Sahn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n<ul><li>Bullet damage per boon reduced by 10%</li></ul>\n')} <div class="ability bashdown">${html('\n<p><a href="/ability/bashdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_sigilslam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bashdown change history</a></p>\n<h4 id="bashdown"><a href="/ability/bashdown">Bashdown</a></h4>\n<ul><li>Bashdown melee scaling reduced from 1.1 to 0.9</li><li>Bashdown T3 reduced from 60% Heavy Melee damage to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Bashdown'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rising-ram">${html('\n<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>\n<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>\n<ul><li>Rising Ram T3 Max HP Damage reduced from 10% to 8%</li><li>Rising Ram T3 Max HP Damage spirit scaling increased from 0.017 to 0.035 (break even at 111 spirit power)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Rising Ram'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero celeste">${html('\n<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>\n<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>\n')} <div class="ability dazzling-trick">${html('\n<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>\n<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>\n')} <ul><li>${html('Dazzling Trick cooldown reduced from 35s to 32s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Dazzling Trick cooldown reduced from 35s to 32s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Dazzling Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability radiant-daggers">${html('\n<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>\n<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>\n<ul><li>Radiant Daggers buff duration increased from 25s to 30s</li><li>Radiant Daggers spirit scaling increased from 0.56 to 0.63</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Radiant Daggers'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n<ul><li>Shining Wonder bounce range increased from 15.5m to 16.5m</li><li>Shining Wonder damage increased by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n')} <div class="ability doorway">${html('\n<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway change history</a></p>\n<h4 id="doorway"><a href="/ability/doorway">Doorway</a></h4>\n')} <ul><li>${html('Doorway cooldown increased from 40s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Doorway cooldown increased from 40s to 45s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Doorway'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n<ul><li>Health per boon increased from 41 to 43 (global hp boon reduction is after this)</li></ul>\n')} <div class="ability rend">${html('\n<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>\n<h4 id="rend"><a href="/ability/rend">Rend</a></h4>\n<ul><li>Rend cast time reduced from 0.5s to 0.4s</li><li>Rend post cast time reduced from 0.5s to 0.4s</li><li>Rend T2 increased from -7s Cooldown to -8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Rend'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodscent">${html('\n<p><a href="/ability/bloodscent"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodscent change history</a></p>\n<h4 id="bloodscent"><a href="/ability/bloodscent">Bloodscent</a></h4>\n<ul><li>Bloodscent T1 increased from +2m/s while near an isolated enemy to +3m/s</li><li>Bloodscent T2 increased from 18% missing health heal to +24%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Bloodscent'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n<ul><li>Rejuvenating Aurora regeneration increased from 25/s to 30/s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n')} <ul><li>${html('Rain of Arrows cooldown increased from 23s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Rain of Arrows cooldown increased from 23s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n<ul><li>Guided Owl permanent spirit bonus reduced from 10 to 8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger T1 increased from -8% Bullet Resist to -10%</li><li>Sleep Dagger T2 increased from -17s Cooldown to -18s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n<ul><li>Smoke Bomb T3 increased from +40% Bullet Lifesteal to +50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero holliday">${html('\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n')} <div class="ability powder-keg">${html('\n<p><a href="/ability/powder-keg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Powder Keg change history</a></p>\n<h4 id="powder-keg"><a href="/ability/powder-keg">Powder Keg</a></h4>\n<ul><li>Powder Keg velocity reduced slightly</li><li>Powder Keg charge delay increased from 7s to 7.5s</li><li>Powder Keg spirit scaling reduced from 1.4 to 1.2</li><li>Powder Keg T3 reduced from +100 Damage to +80</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Holliday',
		ability: 'Powder Keg'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability entangling-thorns">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Thorns change history</a></p>\n<h4 id="entangling-thorns"><a href="/ability/entangling-thorns">Entangling Thorns</a></h4>\n<ul><li>Entangling Thorns spirit scaling increased from 0.45 to 0.55</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Entangling Thorns'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Kudzu Connection Replicated Healing per boon scale increased from +0.5 to +0.85</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop cooldown reduction when used on allies increased from -25% to -30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n')} <ul><li>${html('Ground Strike cooldown reduced from 21s to 18s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Ground Strike cooldown reduced from 21s to 18s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog"><a href="/ability/flog">Flog</a></h4>\n<ul><li>Flog angle increased from 30 to 38</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mina">${html('\n<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>\n<h3 id="mina"><a href="/hero/mina">Mina</a></h3>\n')} <div class="ability rake">${html('\n<p><a href="/ability/rake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_rake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rake change history</a></p>\n<h4 id="rake"><a href="/ability/rake">Rake</a></h4>\n<ul><li>Rake missing health as damage increased from 5% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Rake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sanguine-retreat">${html('\n<p><a href="/ability/sanguine-retreat"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_sanguine_retreat.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sanguine Retreat change history</a></p>\n<h4 id="sanguine-retreat"><a href="/ability/sanguine-retreat">Sanguine Retreat</a></h4>\n<ul><li>Sanguine Retreat T3 now also increases range by +3m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Sanguine Retreat'
	});
	$$renderer.push(
		`<!----></div> <div class="ability nox-nostra">${html('\n<p><a href="/ability/nox-nostra"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_nox_nostra.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Nox Nostra change history</a></p>\n<h4 id="nox-nostra"><a href="/ability/nox-nostra">Nox Nostra</a></h4>\n')} <ul><li>${html('Nox Nostra damage increased from 4.45 to 4.6')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Nox Nostra damage increased from 4.45 to 4.6'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Nox Nostra T1 damage increased from +1.74 to +1.9')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Nox Nostra T1 damage increased from +1.74 to +1.9'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Nox Nostra'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability sand-blast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>\n<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>\n<ul><li>Sand Blast T2 slow increased from -25% to -30%</li><li>Sand Blast T3 increased from -20s Cooldown to -25s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sand Blast'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Combo bonus max health per kill increased from 30+1/boon to 40+2/boon</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paige">${html('\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n<ul><li>Health per boon increased from 29 to 33</li></ul>\n')} <div class="ability bookwyrm">${html('\n<p><a href="/ability/bookwyrm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bookwyrm change history</a></p>\n<h4 id="bookwyrm"><a href="/ability/bookwyrm">Bookwyrm</a></h4>\n<ul><li>Bookwyrm T1 changed from &quot;+2s Trail Duration and +1m Radius&quot; to &quot;-12s Cooldown&quot;</li><li>Bookwyrm T2 changed from &quot;+10m Range and -12s Cooldown&quot; to &quot;+1 Charge, +1m Radius and +2s Trail Duration&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Bookwyrm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bookworm">${html('\n<p><a href="/ability/bookwyrm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bookworm change history</a></p>\n<h4 id="bookworm"><a href="/ability/bookwyrm">Bookworm</a></h4>\n<ul><li>Bookworm T3 changed from &quot;+100 Damage, +30 DPS and +1 Charge&quot; to &quot;+100 Damage, +30 DPS and +12m Travel Range&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Bookworm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability plot-armor">${html('\n<p><a href="/ability/plot-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_defendandfight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Plot Armor change history</a></p>\n<h4 id="plot-armor"><a href="/ability/plot-armor">Plot Armor</a></h4>\n<ul><li>Plot Armor T1 fire rate spirit scaling increased from 0.13 to 0.16</li><li>Plot Armor T3 increased from 75% Barrier to 100%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Plot Armor'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rallying-charge">${html('\n<p><a href="/ability/rallying-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rallying Charge change history</a></p>\n<h4 id="rallying-charge"><a href="/ability/rallying-charge">Rallying Charge</a></h4>\n<ul><li>Rallying Charge is now properly counted as a &quot;miss&quot; (for the -50% CD Reduction) if the only thing that was impacted were non-heroes</li><li>Rallying Charge T3 Max Amp increased from +50% to +70%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Rallying Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine T2 now also increases move speed spirit scaling (0.06)</li><li>Kinetic Carbine T3 changed from affecting Max Damage Scaling to affecting both Min and Max Damage Scaling</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n<ul><li>Bullet damage per boon reduced from 0.16 to 0.14</li></ul>\n')} <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Flying Cloak T3 reduced from -12s Cooldown to -11s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero rem">${html('\n<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>\n<h3 id="rem"><a href="/hero/rem">Rem</a></h3>\n')} <div class="ability tag-along">${html('\n<p><a href="/ability/tag-along"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_tag_along.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tag Along change history</a></p>\n<h4 id="tag-along"><a href="/ability/tag-along">Tag Along</a></h4>\n<ul><li>Tag Along healing per second spirit scaling reduced from 0.66 to 0.4</li><li>Tag Along T3 missing health spirit scaling reduced from +0.02 to +0.016</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Tag Along'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lil-helpers-spirit-resist">${html('\n<p><a href="/ability/lil-helpers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_helpers.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lil Helpers Spirit Resist change history</a></p>\n<h4 id="lil-helpers-spirit-resist"><a href="/ability/lil-helpers">Lil Helpers Spirit Resist</a></h4>\n<ul><li>Lil Helpers Spirit Resist reduced from 15% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Lil Helpers Spirit Resist'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lil-helpers">${html('\n<p><a href="/ability/lil-helpers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_helpers.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lil Helpers change history</a></p>\n<h4 id="lil-helpers"><a href="/ability/lil-helpers">Lil Helpers</a></h4>\n<ul><li>Lil Helpers T1 changed from &quot;+1 Helper&quot; to &quot;+1 Helper and +1.5m/s Move Speed&quot;</li><li>Lil Helpers T2 changed from &quot;+8% Spirit Resist and +1.5m/s Move Speed&quot; to &quot;+1 Helper and +15% Trooper Damage and Resist&quot;</li><li>Lil Helpers T3 changed from &quot;+2 Helpers and +20% Trooper Damage and Resist&quot; to &quot;+1 Helper and +15% Spirit Resist&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Lil Helpers'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n<ul><li>Lightning Ball charge delay reduced from 7s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud time to expand increased from 1.5s to 3.5s</li><li>Storm Cloud damage interval increased from 0.25s to 0.3s (DPS unchanged)</li><li>Storm Cloud T2 now also increases Initial Radius by +5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Alt Fire damage now has a custom value per boon (+0.2)</li><li>Alt Fire ammo consumed per shot increased from 3 to 5</li><li>Alt Fire knockback movement is now disabled by slowing hex state</li></ul>\n')} <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n')} <ul><li>${html('Serrated Knives cooldown reduced from 18s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Serrated Knives cooldown reduced from 18s to 16s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div> <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n<ul><li>Slice and Dice now deals +25 light melee damage (75 total) instead of 60 spirit damage</li><li>Slice and Dice changed from -6% Spirit Resist to +4% Damage Amp</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n<ul><li>Bloodletting T2 changed from &quot;+15% Incoming Damage Deferred&quot; to &quot;+35% Deferred Damage Cleared&quot;</li><li>Bloodletting T3 changed from &quot;+50% Deferred Damage Cleared&quot; to &quot;+15% Incoming Damage Deferred&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow now deals damage to troopers and neutrals along the way</li><li>Killing Blow executing a hero now instantly fills the rage bar</li><li>Killing Blow now has the T3 &quot;recast within 20s on a hero kill&quot; as part of the base ability</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow-full-rage-damage-bonus">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow Full Rage Damage Bonus change history</a></p>\n<h4 id="killing-blow-full-rage-damage-bonus"><a href="/ability/killing-blow">Killing Blow Full Rage Damage Bonus</a></h4>\n<ul><li>Killing Blow Full Rage Damage Bonus reduced from +12% to +8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow Full Rage Damage Bonus'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow-1"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow range reduced from 18m to 12m</li><li>Killing Blow T1 now also increases range by +6m</li><li>Killing Blow T2 increased from +10% Full Rage Bonus Damage to +16%</li><li>Killing Blow T3 increased from +5% Enemy health Threshold to +10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n<ul><li>Stake T2 reduced from -20s Cooldown to -22s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crow-familiar">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>\n<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>\n<ul><li>Crow Familiar T2 increased from -12s Cooldown to -16s</li><li>Crow Familiar collision radius between each crow increased slightly</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate-max-bonus-damage">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate Max Bonus Damage change history</a></p>\n<h4 id="assassinate-max-bonus-damage"><a href="/ability/assassinate">Assassinate Max Bonus Damage</a></h4>\n<ul><li>Assassinate Max Bonus Damage spirit scaling increased from 2 to 2.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate Max Bonus Damage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n<ul><li>Splatter T3 spirit scaling reduced from +1.1 to +1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Puddle Punch T3 increased from -12s Cooldown to -14s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Goo Ball T3 increased from +6s Duration to +7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n')} <div class="ability screwjab-dagger">${html('\n<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>\n<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>\n<ul><li>Screwjab Dagger T3 now also reduces charge delay from 4s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Screwjab Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability slither">${html('\n<p><a href="/ability/slither"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slither change history</a></p>\n<h4 id="slither"><a href="/ability/slither">Slither</a></h4>\n<ul><li>Slither T3 spirit scaling increased from 0.6 to 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Slither'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Bullet damage per boon reduced from 0.34 to 0.28</li></ul>\n')} <div class="ability willpower">${html('\n<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>\n<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>\n<ul><li>Willpower T2 increased from -22s Cooldown to -24s</li><li>Willpower T3 increased from +2.5 spirit power scaling to +2.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Willpower'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_6_30_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item cursed-relic">${html('\n<p><a href="/item/cursed-relic"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/curse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cursed Relic patch history</a></p>\n<h3 id="cursed-relic"><a href="/item/cursed-relic">Cursed Relic</a></h3>\n<ul><li>Damage Penalty increased from -10% to -14%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cursed Relic',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n')} <ul><li>${html('Cooldown increased from 8s to 9s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 8s to 9s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item scourge">${html('\n<p><a href="/item/scourge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Scourge patch history</a></p>\n<h3 id="scourge"><a href="/item/scourge">Scourge</a></h3>\n<ul><li>Max Health DPS reduced from 3.5% to 2.6%</li><li>Max Health DPS now scales with spirit power (0.0055)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Scourge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Bleed damage increased from 1.7% to 1.9%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _6_30_mg as default, metadata, readingManifest, toc };
