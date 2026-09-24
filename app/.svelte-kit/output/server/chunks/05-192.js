import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/05-19.mg?embed=0
function _5_19_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Dynamo',
			'Kelvin',
			'Lady Geist',
			'McGinnis',
			'Shiv',
			'Vyper',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2025/05-19.mg?embed=1
function _5_19_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Alchemical Fire',
			'Arcane Surge',
			'Arctic Blast',
			'Armor Piercing Rounds',
			'Berserker',
			'Boundless Spirit',
			'Bullet Lifesteal',
			'Bullet Resilience',
			'Bullet Resist Shredder',
			'Burst Fire',
			'Capacitor',
			'Cheat Death',
			'Close Quarters',
			'Cold Front',
			'Compress Cooldown',
			'Crushing Fists',
			'Cultist Sacrifice',
			'Debuff Reducer',
			'Decay',
			'Duration Extender',
			'Echo Shard',
			"Enchanter's Emblem",
			'Enduring Speed',
			'Escalating Exposure',
			'Escalating Resilience',
			'Ethereal Shift',
			'Express Shot',
			'Extended Magazine',
			'Extra Charge',
			'Fleetfoot',
			'Focus Lens',
			'Frenzy',
			'Fury Trance',
			'Glass Cannon',
			'Guardian Ward',
			'Headhunter',
			'Headshot Booster',
			'Healing Booster',
			'Healing Nova',
			'Healing Tempo',
			'Hollow Point',
			"Hunter's Aura",
			'Infuser',
			'Intensifying Magazine',
			'Lifestrike',
			'Long Range',
			'Lucky Shot',
			'Majestic Leap',
			'Melee Charge',
			'Mercurial Magnum',
			'Metal Skin',
			'Monster Rounds',
			'Mystic Burst',
			'Mystic Regeneration',
			'Phantom Strike',
			'Plated Armor',
			'Point Blank',
			'Quicksilver Reload',
			'Radiant Regeneration',
			'Rapid Recharge',
			'Reactive Barrier',
			'Rescue Beam',
			'Restorative Locket',
			'Restorative Shot',
			'Return Fire',
			'Rusted Barrel',
			'Scourge',
			'Shadow Weave',
			'Sharpshooter',
			'Silence Wave',
			'Siphon Bullets',
			'Slowing Bullets',
			'Spellbreaker',
			'Spirit Burn',
			'Spirit Rend',
			'Spirit Resilience',
			'Spirit Shielding',
			'Spiritual Overflow',
			'Stamina Mastery',
			'Surge of Power',
			'Tankbuster',
			'Tesla Bullets',
			'Titanic Magazine',
			'Torment Pulse',
			'Toxic Bullets',
			'Trophy Collector',
			'Veil Walker',
			'Weakening Headshot',
			'Weapon Shielding'
		]
	});
}
//#endregion
//#region changelogs/2025/05-19.mg
var metadata = {
	title: '05-19-2025 Update',
	thread_id: '65381',
	published: '2025-05-19T17:12:38-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Troopers now gain 50% resistance when they are in near the base (this has been 30% the past few days) Distance allowed to shoot Shrines increased by 7m Hero Kill Bounty increased from 175->1600 to 250->1800 (maxes out at 45 min) 2 hero soul split ratio increased from 60% to 65% Walker HP increased by 10% Walkers resistance vs troopers reaches -40% at 20 minutes instead of 16 minutes Objectives Spirit Resistance reduced from 50% to 40% The soul orb securer's advantage over denier has been reduced. Add a flash to the start of the soul orb claimability window Moved outer lane Base Guardians down to the lower landing. Added interior connection from lower landing to the ropes. Flattened the shape of the outer lane base bridges. Backstabber: Now only triggers when hitting an enemy within 25m Debuff Remover: Move Speed buff duration reduced from 4s to 3s Abrams Move Speed reduced from 6.8 to 6.5 Dynamo Rejuvenating Aurora T3 reduced from 3% to 2.5% Kelvin Stamina Cooldown increased from 5s to 6s Lady Geist Health per boon reduced from 86 to 82 Essence Bomb self damage spirit scaling increased from 1.3 to 1.6 Life Drain cast range reduced from 20m to 18m McGinnis Medicinal Specter T3 reduced from 3.5% to 3% Shiv Move Speed reduced from 7 to 6.8 Health per boon reduced from 81 to 77 Base gun damage reduced from 4.95 to 4.6 Vyper Health per boon reduced from 64 to 53 Now has -20% Crit Bonus Scale (like Kelvin) Bullet damage growth reduced from 0.33 to 0.28 Warden Last Stand T2 reduced from +70 DPS to +60 Last Stand spirit power scaling increased from 1.3 to 1.4 Wraith Health per boon reduced from 65 to 57 Full Auto T2 spirit damage per bullet reduced from 5 to 4 Yamato Crimson Slash T2 heal reduced from 8% to 6% Close Quarters Melee Resistance increased from 15% to 20% Extended Magazine Max Ammo increased from 25% to 30% Headshot Booster Cooldown increased from 6s to 8s Monster Rounds Out of Combat regen reduced from 1.5 to 1 Restorative Shot Weapon Damage increased from 6% to 8% Cooldown reduced from 7s to 6s Active Reload No longer goes on cooldown when it doesn't trigger Now grants +1 Move Speed during the active Fleetfoot Cooldown reduced from 11s to 10s Intensifying Magazine Weapon Damage increased from 40% to 45% Long Range Weapon Damage increased from 35% to 40% Melee Charge Bonus Heavy Damage reduced from 30% to 25% Slowing Bullets Dash distance slow reduced from -25% to -20% Titanic Magazine Weapon Damage reduced from 15% to 12% Weakening Headshot Health bonus increased from +50 to +75 Alchemical Fire Spirit power scaling increased from 0.056 to 0.07 Berserker Bullet Resistance reduced from 18% to 16% Burst Fire Now grants +10% Fire Rate Active Fire Rate reduced from +45% to +35% Cooldown reduced from 8s to 7s Duration reduced from 4s to 3.5s Cultist Sacrifice Buff no longer expires on death Buff duration reduced from 180s to 170s Bonus health reduced from 300 to 275 Escalating Resilience Bonus health increased from +100 to +125 Stack duration increased from 20s to 24s Express Shot Weapon Damage reduced from +150% to +125% Headhunter Cooldown increased from 6s to 8s Weapon Damage reduced from +8% to +5% Hollow Point Bullet Resistance Reduction increased from -10% to -12% Hunter's Aura Bullet Resistance Reduction increased from -7% to -8% Point Blank Melee Resistance increased from +25% to +30% Sharpshooter Weapon Fall-off Range increased from +18% to +20% Spirit Rend Debuff duration reduced from 8s to 7s Tesla Bullets Damage reduced from 45 to 40 Toxic Bullets Bleed reduced from 2.6% to 2.5% Armor Piercing Rounds Chance reduced from 65% to 60% Capacitor Active damage reduced from 200 to 100 Damage reduced from 45 to 40 Crushing Fists Bonus Heavy Damage reduced from 30% to 25% Melee damage reduced from 25% to 20% Frenzy Bullet Resistance bonuses changed to Spirit Resistance Glass Cannon Fire Rate per stack increased from +7% to +8% Lucky Shot Chance increased from 20% to 25% Shadow Weave Cooldown reduced from 48s to 40s Spiritual Overflow Fire Rate reduced from +40% to +30% Active now also grants +20% Ability Duration Enduring Speed Now upgrades from Sprint Boots Move Speed increased from +1.75 to +2 (does not grant sprint, +2 Sprint upgrades to +2 Move Speed) Slow Resistance reduced from 50% to 30% No longer grants +75 Bonus Health Now grants +2 Out of Combat Regen Bullet Lifesteal Bonus Health increased from +70 to +90 Debuff Reducer Bonus Health reduced from +75 to +50 Enchanter's Emblem Out of Combat Regen reduced from +3 to +2 Guardian Ward Bonus Range increased from +8% to +10% Healing Booster Healing Effectiveness reduced from +25% to +20% Healing Nova Heal reduced from 300 to 260 Spirit power scaling increased from 0.93 to 1.3 Reactive Barrier Now grants +5% Spirit Resistance Restorative Locket Charge up range reduced from 35m to 30m Heal spirit scaling reduced from 0.23 to 0.17 Return Fire Cooldown reduced from 30s to 25s Spirit Shielding Now grants +1 Move Speed after the shield triggers Weapon Shielding Now grants +1 Move Speed after the shield triggers Bullet Resilience Low HP trigger increased from +30% to +35% Fury Trance Bonus health increased from +50 to +100 Active Bullet Resistance changed to Spirit Resistance Lifestrike Heal reduced from 60% to 50% Majestic Leap Cooldown reduced from 32s to 28s Barrier increased from 300 to 350 Metal Skin Dash Distance penalty reduced from 25% to 20% Rescue Beam Heal reduced from 25% to 20% Spirit Resilience Low HP trigger increased from +30% to +35% Stamina Mastery Air Jump/Dash Distance increased from +25% to +30% Trophy Collector Max Stacks increased from 14 to 16 Veil Walker Invis duration reduced from 7s to 6s Cheat Death Duration increased from 4s to 4.5s Cooldown reduced from 130s to 120s Healing Tempo Healing Effectiveness reduced from +30% to +25% Infuser Spirit Power reduced from +35 to +30 Phantom Strike Cooldown increased from 30s to 35s Plated Armor On-Hit Prevention Percent reduced from 60% to 50% Siphon Bullets No longer grants +10% Bullet Resistance Now grants +12% Spirit Resistance Cooldown reduced from 0.8s to 0.7s Spellbreaker Cooldown reduced from 14s to 10s Extra Charge Charged Spirit Power increased from +5 to +7 Mystic Burst Chargeup time reduced from 14s to 12s Mystic Regeneration No longer scales with Spirit Power Now upgrades to a new T3 Spirit Item, Radiant Regeneration Rusted Barrel Fire Rate reduction increased from -30% to -35% Arcane Surge Ability Range reduced from +20% to +15% Ability Duration reduced from +20% to +15% Bullet Resist Shredder Duration increased from 6s to 8s Cold Front Cooldown reduced from 30s to 24s Compress Cooldown Imbued Cooldown Reduction increased from +18% to +22% Duration Extender Imbued Ability Duration increased from +20% to +22% Quicksilver Reload Chargeup time increased from 16s to 18s Decay Damage reduced from 2.75% to 2.5% Cooldown increased from 24s to 30s Rapid Recharge Charged Spirit Power increased from +10 to +16 Silence Wave Cooldown increased from 28s to 30s Silence duration reduced from 4s to 3.75s Surge of Power Spirit Power increased from 22 to 25 Tankbuster Damage reduced from 7% to 6% Chargeup time increased from 8s to 12s Torment Pulse Bonus Health increased from 110 to 125 Radiant Regeneration New T3 Spirit Item, upgrades from Mystic Regeneration. Dealing damage to enemy heroes grants you +5 HP regen (with 0.04 spirit scaling) for 5s. On ability cast, heals you for +100 and provides +2 Move Speed for 3s. Cooldown 6s. Arctic Blast Cooldown reduced from 30s to 24s Boundless Spirit No longer heals and grants movement speed on ability cast. Now grants +10% Spirit Power Spirit Power reduced from 40 to 35 Echo Shard Cooldown reduced from 35s to 30s Escalating Exposure Spirit Amp per Stack increased from 4% to 4.5% Max Stacks reduced from 14 to 12 Ethereal Shift Cooldown reduced from 24s to 22s Focus Lens Cooldown increased from 27s to 28s Mercurial Magnum Chargeup time increased from 10s to 14s Scourge Damage reduced from 3.5% to 3.25% Spirit Burn Damage Threshold increased from 400 to 500",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-05-12',
			to: '2025-05-20'
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
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Essence Bomb',
		id: 'essence-bomb'
	},
	{
		level: 3,
		title: 'Life Drain',
		id: 'life-drain'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Medicinal Specter',
		id: 'medicinal-specter'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 2,
		title: 'Vyper',
		id: 'vyper'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Last Stand',
		id: 'last-stand'
	},
	{
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Full Auto',
		id: 'full-auto'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Crimson Slash',
		id: 'crimson-slash'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Active Reload',
		id: 'active-reload'
	},
	{
		level: 2,
		title: 'Alchemical Fire',
		id: 'alchemical-fire'
	},
	{
		level: 2,
		title: 'Arcane Surge',
		id: 'arcane-surge'
	},
	{
		level: 2,
		title: 'Arctic Blast',
		id: 'arctic-blast'
	},
	{
		level: 2,
		title: 'Armor Piercing Rounds',
		id: 'armor-piercing-rounds'
	},
	{
		level: 2,
		title: 'Berserker',
		id: 'berserker'
	},
	{
		level: 2,
		title: 'Boundless Spirit',
		id: 'boundless-spirit'
	},
	{
		level: 2,
		title: 'Bullet Lifesteal',
		id: 'bullet-lifesteal'
	},
	{
		level: 2,
		title: 'Bullet Resilience',
		id: 'bullet-resilience'
	},
	{
		level: 2,
		title: 'Bullet Resist Shredder',
		id: 'bullet-resist-shredder'
	},
	{
		level: 2,
		title: 'Burst Fire',
		id: 'burst-fire'
	},
	{
		level: 2,
		title: 'Capacitor',
		id: 'capacitor'
	},
	{
		level: 2,
		title: 'Cheat Death',
		id: 'cheat-death'
	},
	{
		level: 2,
		title: 'Close Quarters',
		id: 'close-quarters'
	},
	{
		level: 2,
		title: 'Cold Front',
		id: 'cold-front'
	},
	{
		level: 2,
		title: 'Compress Cooldown',
		id: 'compress-cooldown'
	},
	{
		level: 2,
		title: 'Crushing Fists',
		id: 'crushing-fists'
	},
	{
		level: 2,
		title: 'Cultist Sacrifice',
		id: 'cultist-sacrifice'
	},
	{
		level: 2,
		title: 'Debuff Reducer',
		id: 'debuff-reducer'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: 'Duration Extender',
		id: 'duration-extender'
	},
	{
		level: 2,
		title: 'Echo Shard',
		id: 'echo-shard'
	},
	{
		level: 2,
		title: "Enchanter's Emblem",
		id: 'enchanter-s-emblem'
	},
	{
		level: 2,
		title: 'Enduring Speed',
		id: 'enduring-speed'
	},
	{
		level: 2,
		title: 'Escalating Exposure',
		id: 'escalating-exposure'
	},
	{
		level: 2,
		title: 'Escalating Resilience',
		id: 'escalating-resilience'
	},
	{
		level: 2,
		title: 'Ethereal Shift',
		id: 'ethereal-shift'
	},
	{
		level: 2,
		title: 'Express Shot',
		id: 'express-shot'
	},
	{
		level: 2,
		title: 'Extended Magazine',
		id: 'extended-magazine'
	},
	{
		level: 2,
		title: 'Extra Charge',
		id: 'extra-charge'
	},
	{
		level: 2,
		title: 'Fleetfoot',
		id: 'fleetfoot'
	},
	{
		level: 2,
		title: 'Focus Lens',
		id: 'focus-lens'
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
		title: 'Glass Cannon',
		id: 'glass-cannon'
	},
	{
		level: 2,
		title: 'Guardian Ward',
		id: 'guardian-ward'
	},
	{
		level: 2,
		title: 'Headhunter',
		id: 'headhunter'
	},
	{
		level: 2,
		title: 'Headshot Booster',
		id: 'headshot-booster'
	},
	{
		level: 2,
		title: 'Healing Booster',
		id: 'healing-booster'
	},
	{
		level: 2,
		title: 'Healing Nova',
		id: 'healing-nova'
	},
	{
		level: 2,
		title: 'Healing Tempo',
		id: 'healing-tempo'
	},
	{
		level: 2,
		title: 'Hollow Point',
		id: 'hollow-point'
	},
	{
		level: 2,
		title: "Hunter's Aura",
		id: 'hunter-s-aura'
	},
	{
		level: 2,
		title: 'Infuser',
		id: 'infuser'
	},
	{
		level: 2,
		title: 'Intensifying Magazine',
		id: 'intensifying-magazine'
	},
	{
		level: 2,
		title: 'Lifestrike',
		id: 'lifestrike'
	},
	{
		level: 2,
		title: 'Long Range',
		id: 'long-range'
	},
	{
		level: 2,
		title: 'Lucky Shot',
		id: 'lucky-shot'
	},
	{
		level: 2,
		title: 'Majestic Leap',
		id: 'majestic-leap'
	},
	{
		level: 2,
		title: 'Melee Charge',
		id: 'melee-charge'
	},
	{
		level: 2,
		title: 'Mercurial Magnum',
		id: 'mercurial-magnum'
	},
	{
		level: 2,
		title: 'Metal Skin',
		id: 'metal-skin'
	},
	{
		level: 2,
		title: 'Monster Rounds',
		id: 'monster-rounds'
	},
	{
		level: 2,
		title: 'Mystic Burst',
		id: 'mystic-burst'
	},
	{
		level: 2,
		title: 'Mystic Regeneration',
		id: 'mystic-regeneration'
	},
	{
		level: 2,
		title: 'Phantom Strike',
		id: 'phantom-strike'
	},
	{
		level: 2,
		title: 'Plated Armor',
		id: 'plated-armor'
	},
	{
		level: 2,
		title: 'Point Blank',
		id: 'point-blank'
	},
	{
		level: 2,
		title: 'Quicksilver Reload',
		id: 'quicksilver-reload'
	},
	{
		level: 2,
		title: 'Radiant Regeneration',
		id: 'radiant-regeneration'
	},
	{
		level: 2,
		title: 'Rapid Recharge',
		id: 'rapid-recharge'
	},
	{
		level: 2,
		title: 'Reactive Barrier',
		id: 'reactive-barrier'
	},
	{
		level: 2,
		title: 'Rescue Beam',
		id: 'rescue-beam'
	},
	{
		level: 2,
		title: 'Restorative Locket',
		id: 'restorative-locket'
	},
	{
		level: 2,
		title: 'Restorative Shot',
		id: 'restorative-shot'
	},
	{
		level: 2,
		title: 'Return Fire',
		id: 'return-fire'
	},
	{
		level: 2,
		title: 'Rusted Barrel',
		id: 'rusted-barrel'
	},
	{
		level: 2,
		title: 'Scourge',
		id: 'scourge'
	},
	{
		level: 2,
		title: 'Shadow Weave',
		id: 'shadow-weave'
	},
	{
		level: 2,
		title: 'Sharpshooter',
		id: 'sharpshooter'
	},
	{
		level: 2,
		title: 'Silence Wave',
		id: 'silence-wave'
	},
	{
		level: 2,
		title: 'Siphon Bullets',
		id: 'siphon-bullets'
	},
	{
		level: 2,
		title: 'Slowing Bullets',
		id: 'slowing-bullets'
	},
	{
		level: 2,
		title: 'Spellbreaker',
		id: 'spellbreaker'
	},
	{
		level: 2,
		title: 'Spirit Burn',
		id: 'spirit-burn'
	},
	{
		level: 2,
		title: 'Spirit Rend',
		id: 'spirit-rend'
	},
	{
		level: 2,
		title: 'Spirit Resilience',
		id: 'spirit-resilience'
	},
	{
		level: 2,
		title: 'Spirit Shielding',
		id: 'spirit-shielding'
	},
	{
		level: 2,
		title: 'Spiritual Overflow',
		id: 'spiritual-overflow'
	},
	{
		level: 2,
		title: 'Stamina Mastery',
		id: 'stamina-mastery'
	},
	{
		level: 2,
		title: 'Surge of Power',
		id: 'surge-of-power'
	},
	{
		level: 2,
		title: 'Tankbuster',
		id: 'tankbuster'
	},
	{
		level: 2,
		title: 'Tesla Bullets',
		id: 'tesla-bullets'
	},
	{
		level: 2,
		title: 'Titanic Magazine',
		id: 'titanic-magazine'
	},
	{
		level: 2,
		title: 'Torment Pulse',
		id: 'torment-pulse'
	},
	{
		level: 2,
		title: 'Toxic Bullets',
		id: 'toxic-bullets'
	},
	{
		level: 2,
		title: 'Trophy Collector',
		id: 'trophy-collector'
	},
	{
		level: 2,
		title: 'Veil Walker',
		id: 'veil-walker'
	},
	{
		level: 2,
		title: 'Weakening Headshot',
		id: 'weakening-headshot'
	},
	{
		level: 2,
		title: 'Weapon Shielding',
		id: 'weapon-shielding'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-05-12',
			to: '2025-05-20'
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
			name: 'Dynamo',
			id: 'dynamo'
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
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Shiv',
			id: 'shiv'
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
			kind: 'hero',
			name: 'Wraith',
			id: 'wraith'
		},
		{
			kind: 'hero',
			name: 'Yamato',
			id: 'yamato'
		},
		{
			kind: 'item',
			name: 'Active Reload',
			id: 'active-reload'
		},
		{
			kind: 'item',
			name: 'Alchemical Fire',
			id: 'alchemical-fire'
		},
		{
			kind: 'item',
			name: 'Arcane Surge',
			id: 'arcane-surge'
		},
		{
			kind: 'item',
			name: 'Arctic Blast',
			id: 'arctic-blast'
		},
		{
			kind: 'item',
			name: 'Armor Piercing Rounds',
			id: 'armor-piercing-rounds'
		},
		{
			kind: 'item',
			name: 'Berserker',
			id: 'berserker'
		},
		{
			kind: 'item',
			name: 'Boundless Spirit',
			id: 'boundless-spirit'
		},
		{
			kind: 'item',
			name: 'Bullet Lifesteal',
			id: 'bullet-lifesteal'
		},
		{
			kind: 'item',
			name: 'Bullet Resilience',
			id: 'bullet-resilience'
		},
		{
			kind: 'item',
			name: 'Bullet Resist Shredder',
			id: 'bullet-resist-shredder'
		},
		{
			kind: 'item',
			name: 'Burst Fire',
			id: 'burst-fire'
		},
		{
			kind: 'item',
			name: 'Capacitor',
			id: 'capacitor'
		},
		{
			kind: 'item',
			name: 'Cheat Death',
			id: 'cheat-death'
		},
		{
			kind: 'item',
			name: 'Close Quarters',
			id: 'close-quarters'
		},
		{
			kind: 'item',
			name: 'Cold Front',
			id: 'cold-front'
		},
		{
			kind: 'item',
			name: 'Compress Cooldown',
			id: 'compress-cooldown'
		},
		{
			kind: 'item',
			name: 'Crushing Fists',
			id: 'crushing-fists'
		},
		{
			kind: 'item',
			name: 'Cultist Sacrifice',
			id: 'cultist-sacrifice'
		},
		{
			kind: 'item',
			name: 'Debuff Reducer',
			id: 'debuff-reducer'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: 'Duration Extender',
			id: 'duration-extender'
		},
		{
			kind: 'item',
			name: 'Echo Shard',
			id: 'echo-shard'
		},
		{
			kind: 'item',
			name: "Enchanter's Emblem",
			id: 'enchanter-s-emblem'
		},
		{
			kind: 'item',
			name: 'Enduring Speed',
			id: 'enduring-speed'
		},
		{
			kind: 'item',
			name: 'Escalating Exposure',
			id: 'escalating-exposure'
		},
		{
			kind: 'item',
			name: 'Escalating Resilience',
			id: 'escalating-resilience'
		},
		{
			kind: 'item',
			name: 'Ethereal Shift',
			id: 'ethereal-shift'
		},
		{
			kind: 'item',
			name: 'Express Shot',
			id: 'express-shot'
		},
		{
			kind: 'item',
			name: 'Extended Magazine',
			id: 'extended-magazine'
		},
		{
			kind: 'item',
			name: 'Extra Charge',
			id: 'extra-charge'
		},
		{
			kind: 'item',
			name: 'Fleetfoot',
			id: 'fleetfoot'
		},
		{
			kind: 'item',
			name: 'Focus Lens',
			id: 'focus-lens'
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
			name: 'Glass Cannon',
			id: 'glass-cannon'
		},
		{
			kind: 'item',
			name: 'Guardian Ward',
			id: 'guardian-ward'
		},
		{
			kind: 'item',
			name: 'Headhunter',
			id: 'headhunter'
		},
		{
			kind: 'item',
			name: 'Headshot Booster',
			id: 'headshot-booster'
		},
		{
			kind: 'item',
			name: 'Healing Booster',
			id: 'healing-booster'
		},
		{
			kind: 'item',
			name: 'Healing Nova',
			id: 'healing-nova'
		},
		{
			kind: 'item',
			name: 'Healing Tempo',
			id: 'healing-tempo'
		},
		{
			kind: 'item',
			name: 'Hollow Point',
			id: 'hollow-point'
		},
		{
			kind: 'item',
			name: "Hunter's Aura",
			id: 'hunter-s-aura'
		},
		{
			kind: 'item',
			name: 'Infuser',
			id: 'infuser'
		},
		{
			kind: 'item',
			name: 'Intensifying Magazine',
			id: 'intensifying-magazine'
		},
		{
			kind: 'item',
			name: 'Lifestrike',
			id: 'lifestrike'
		},
		{
			kind: 'item',
			name: 'Long Range',
			id: 'long-range'
		},
		{
			kind: 'item',
			name: 'Lucky Shot',
			id: 'lucky-shot'
		},
		{
			kind: 'item',
			name: 'Majestic Leap',
			id: 'majestic-leap'
		},
		{
			kind: 'item',
			name: 'Melee Charge',
			id: 'melee-charge'
		},
		{
			kind: 'item',
			name: 'Mercurial Magnum',
			id: 'mercurial-magnum'
		},
		{
			kind: 'item',
			name: 'Metal Skin',
			id: 'metal-skin'
		},
		{
			kind: 'item',
			name: 'Monster Rounds',
			id: 'monster-rounds'
		},
		{
			kind: 'item',
			name: 'Mystic Burst',
			id: 'mystic-burst'
		},
		{
			kind: 'item',
			name: 'Mystic Regeneration',
			id: 'mystic-regeneration'
		},
		{
			kind: 'item',
			name: 'Phantom Strike',
			id: 'phantom-strike'
		},
		{
			kind: 'item',
			name: 'Plated Armor',
			id: 'plated-armor'
		},
		{
			kind: 'item',
			name: 'Point Blank',
			id: 'point-blank'
		},
		{
			kind: 'item',
			name: 'Quicksilver Reload',
			id: 'quicksilver-reload'
		},
		{
			kind: 'item',
			name: 'Radiant Regeneration',
			id: 'radiant-regeneration'
		},
		{
			kind: 'item',
			name: 'Rapid Recharge',
			id: 'rapid-recharge'
		},
		{
			kind: 'item',
			name: 'Reactive Barrier',
			id: 'reactive-barrier'
		},
		{
			kind: 'item',
			name: 'Rescue Beam',
			id: 'rescue-beam'
		},
		{
			kind: 'item',
			name: 'Restorative Locket',
			id: 'restorative-locket'
		},
		{
			kind: 'item',
			name: 'Restorative Shot',
			id: 'restorative-shot'
		},
		{
			kind: 'item',
			name: 'Return Fire',
			id: 'return-fire'
		},
		{
			kind: 'item',
			name: 'Rusted Barrel',
			id: 'rusted-barrel'
		},
		{
			kind: 'item',
			name: 'Scourge',
			id: 'scourge'
		},
		{
			kind: 'item',
			name: 'Shadow Weave',
			id: 'shadow-weave'
		},
		{
			kind: 'item',
			name: 'Sharpshooter',
			id: 'sharpshooter'
		},
		{
			kind: 'item',
			name: 'Silence Wave',
			id: 'silence-wave'
		},
		{
			kind: 'item',
			name: 'Siphon Bullets',
			id: 'siphon-bullets'
		},
		{
			kind: 'item',
			name: 'Slowing Bullets',
			id: 'slowing-bullets'
		},
		{
			kind: 'item',
			name: 'Spellbreaker',
			id: 'spellbreaker'
		},
		{
			kind: 'item',
			name: 'Spirit Burn',
			id: 'spirit-burn'
		},
		{
			kind: 'item',
			name: 'Spirit Rend',
			id: 'spirit-rend'
		},
		{
			kind: 'item',
			name: 'Spirit Resilience',
			id: 'spirit-resilience'
		},
		{
			kind: 'item',
			name: 'Spirit Shielding',
			id: 'spirit-shielding'
		},
		{
			kind: 'item',
			name: 'Spiritual Overflow',
			id: 'spiritual-overflow'
		},
		{
			kind: 'item',
			name: 'Stamina Mastery',
			id: 'stamina-mastery'
		},
		{
			kind: 'item',
			name: 'Surge of Power',
			id: 'surge-of-power'
		},
		{
			kind: 'item',
			name: 'Tankbuster',
			id: 'tankbuster'
		},
		{
			kind: 'item',
			name: 'Tesla Bullets',
			id: 'tesla-bullets'
		},
		{
			kind: 'item',
			name: 'Titanic Magazine',
			id: 'titanic-magazine'
		},
		{
			kind: 'item',
			name: 'Torment Pulse',
			id: 'torment-pulse'
		},
		{
			kind: 'item',
			name: 'Toxic Bullets',
			id: 'toxic-bullets'
		},
		{
			kind: 'item',
			name: 'Trophy Collector',
			id: 'trophy-collector'
		},
		{
			kind: 'item',
			name: 'Veil Walker',
			id: 'veil-walker'
		},
		{
			kind: 'item',
			name: 'Weakening Headshot',
			id: 'weakening-headshot'
		},
		{
			kind: 'item',
			name: 'Weapon Shielding',
			id: 'weapon-shielding'
		}
	],
	related: []
};
function _5_19_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Troopers now gain 50% resistance when they are in near the base (this has been 30% the past few days)</li><li>Distance allowed to shoot Shrines increased by 7m</li><li>Hero Kill Bounty increased from 175-&gt;1600 to 250-&gt;1800 (maxes out at 45 min)</li><li>2 hero soul split ratio increased from 60% to 65%</li><li>Walker HP increased by 10%</li><li>Walkers resistance vs troopers reaches -40% at 20 minutes instead of 16 minutes</li><li>Objectives Spirit Resistance reduced from 50% to 40%</li><li>The soul orb securer&#x27;s advantage over denier has been reduced.</li><li>Add a flash to the start of the soul orb claimability window</li><li>Moved outer lane Base Guardians down to the lower landing.</li><li>Added interior connection from lower landing to the ropes.</li><li>Flattened the shape of the outer lane base bridges.</li><li>Backstabber: Now only triggers when hitting an enemy within 25m</li><li>Debuff Remover: Move Speed buff duration reduced from 4s to 3s</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_5_19_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<div class="hero abrams">\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Move Speed reduced from 6.8 to 6.5</li></ul>\n</div>\n')} <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n<ul><li>Rejuvenating Aurora T3 reduced from 3% to 2.5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero kelvin">\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Stamina Cooldown increased from 5s to 6s</li></ul>\n</div>\n')} <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n<ul><li>Health per boon reduced from 86 to 82</li></ul>\n')} <div class="ability essence-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>\n<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>\n<ul><li>Essence Bomb self damage spirit scaling increased from 1.3 to 1.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Essence Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability life-drain">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>\n<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>\n<ul><li>Life Drain cast range reduced from 20m to 18m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n<ul><li>Medicinal Specter T3 reduced from 3.5% to 3%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero shiv">\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Move Speed reduced from 7 to 6.8</li><li>Health per boon reduced from 81 to 77</li><li>Base gun damage reduced from 4.95 to 4.6</li></ul>\n</div>\n<div class="hero vyper">\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n<ul><li>Health per boon reduced from 64 to 53</li><li>Now has -20% Crit Bonus Scale (like Kelvin)</li><li>Bullet damage growth reduced from 0.33 to 0.28</li></ul>\n</div>\n')} <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand T2 reduced from +70 DPS to +60</li><li>Last Stand spirit power scaling increased from 1.3 to 1.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n<ul><li>Health per boon reduced from 65 to 57</li></ul>\n')} <div class="ability full-auto">${html('\n<p><a href="/ability/full-auto"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Full Auto change history</a></p>\n<h4 id="full-auto"><a href="/ability/full-auto">Full Auto</a></h4>\n<ul><li>Full Auto T2 spirit damage per bullet reduced from 5 to 4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Full Auto'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n<ul><li>Crimson Slash T2 heal reduced from 8% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_19_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n<ul><li>No longer goes on cooldown when it doesn&#x27;t trigger</li><li>Now grants +1 Move Speed during the active</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Spirit power scaling increased from 0.056 to 0.07</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item arcane-surge">${html('\n<p><a href="/item/arcane-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arcane Surge patch history</a></p>\n<h3 id="arcane-surge"><a href="/item/arcane-surge">Arcane Surge</a></h3>\n<ul><li>Ability Range reduced from +20% to +15%</li><li>Ability Duration reduced from +20% to +15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Arcane Surge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item arctic-blast">${html('\n<p><a href="/item/arctic-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arctic_blast.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arctic Blast patch history</a></p>\n<h3 id="arctic-blast"><a href="/item/arctic-blast">Arctic Blast</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Arctic Blast',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 24s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Arctic Blast',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item armor-piercing-rounds">${html('\n<p><a href="/item/armor-piercing-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/armor_piercing_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Armor Piercing Rounds patch history</a></p>\n<h3 id="armor-piercing-rounds"><a href="/item/armor-piercing-rounds">Armor Piercing Rounds</a></h3>\n<ul><li>Chance reduced from 65% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Armor Piercing Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Bullet Resistance reduced from 18% to 16%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>No longer heals and grants movement speed on ability cast.</li><li>Now grants +10% Spirit Power</li><li>Spirit Power reduced from 40 to 35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-lifesteal">${html('\n<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>\n<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>\n<ul><li>Bonus Health increased from +70 to +90</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resilience">${html('\n<p><a href="/item/bullet-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resilience patch history</a></p>\n<h3 id="bullet-resilience"><a href="/item/bullet-resilience">Bullet Resilience</a></h3>\n<ul><li>Low HP trigger increased from +30% to +35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resist-shredder">${html('\n<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>\n<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>\n<ul><li>Duration increased from 6s to 8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resist Shredder',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item burst-fire">${html('\n<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>\n<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>\n')} <ul><li>${html('Now grants +10% Fire Rate')}</li> <li>${html('Active Fire Rate reduced from +45% to +35%')}</li> <li>${html('Cooldown reduced from 8s to 7s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Burst Fire',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown reduced from 8s to 7s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Duration reduced from 4s to 3.5s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Burst Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item capacitor">${html('\n<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>\n<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>\n')} <ul><li>${html('Active damage reduced from 200 to 100')}</li> <li>${html('Damage reduced from 45 to 40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Damage reduced from 45 to 40'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cheat-death">${html('\n<p><a href="/item/cheat-death"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cheat Death patch history</a></p>\n<h3 id="cheat-death"><a href="/item/cheat-death">Cheat Death</a></h3>\n')} <ul><li>${html('Duration increased from 4s to 4.5s')}</li> <li>${html('Cooldown reduced from 130s to 120s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cheat Death',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 130s to 120s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cheat Death',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item close-quarters">${html('\n<p><a href="/item/close-quarters"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Close Quarters patch history</a></p>\n<h3 id="close-quarters"><a href="/item/close-quarters">Close Quarters</a></h3>\n<ul><li>Melee Resistance increased from 15% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Close Quarters',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 24s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item compress-cooldown">${html('\n<p><a href="/item/compress-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Compress Cooldown patch history</a></p>\n<h3 id="compress-cooldown"><a href="/item/compress-cooldown">Compress Cooldown</a></h3>\n<ul><li>Imbued Cooldown Reduction increased from +18% to +22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Compress Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crushing-fists">${html('\n<p><a href="/item/crushing-fists"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crushing Fists patch history</a></p>\n<h3 id="crushing-fists"><a href="/item/crushing-fists">Crushing Fists</a></h3>\n<ul><li>Bonus Heavy Damage reduced from 30% to 25%</li><li>Melee damage reduced from 25% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crushing Fists',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cultist-sacrifice">${html('\n<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>\n<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>\n<ul><li>Buff no longer expires on death</li><li>Buff duration reduced from 180s to 170s</li><li>Bonus health reduced from 300 to 275</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item debuff-reducer">${html('\n<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>\n<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>\n<ul><li>Bonus Health reduced from +75 to +50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Debuff Reducer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Damage reduced from 2.75% to 2.5%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 2.75% to 2.5%'
	});
	$$renderer.push(`<!----></li> <li>${html('Cooldown increased from 24s to 30s')} `);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 24s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item duration-extender">${html('\n<p><a href="/item/duration-extender"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Duration Extender patch history</a></p>\n<h3 id="duration-extender"><a href="/item/duration-extender">Duration Extender</a></h3>\n<ul><li>Imbued Ability Duration increased from +20% to +22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Duration Extender',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n')} <ul><li>${html('Cooldown reduced from 35s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 35s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enchanter-s-emblem">${html('\n<p><a href="/item/enchanters-emblem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enchanter&#x27;s Emblem patch history</a></p>\n<h3 id="enchanter-s-emblem"><a href="/item/enchanters-emblem">Enchanter&#x27;s Emblem</a></h3>\n<ul><li>Out of Combat Regen reduced from +3 to +2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Enchanter's Emblem",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enduring-speed">${html('\n<p><a href="/item/enduring-speed"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Speed patch history</a></p>\n<h3 id="enduring-speed"><a href="/item/enduring-speed">Enduring Speed</a></h3>\n<ul><li>Now upgrades from Sprint Boots</li><li>Move Speed increased from +1.75 to +2 (does not grant sprint, +2 Sprint upgrades to +2 Move Speed)</li><li>Slow Resistance reduced from 50% to 30%</li><li>No longer grants +75 Bonus Health</li><li>Now grants +2 Out of Combat Regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Enduring Speed',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-exposure">${html('\n<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>\n<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>\n<ul><li>Spirit Amp per Stack increased from 4% to 4.5%</li><li>Max Stacks reduced from 14 to 12</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Exposure',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>Bonus health increased from +100 to +125</li><li>Stack duration increased from 20s to 24s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n')} <ul><li>${html('Cooldown reduced from 24s to 22s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 24s to 22s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item express-shot">${html('\n<p><a href="/item/express-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Express Shot patch history</a></p>\n<h3 id="express-shot"><a href="/item/express-shot">Express Shot</a></h3>\n<ul><li>Weapon Damage reduced from +150% to +125%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Express Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extended-magazine">${html('\n<p><a href="/item/extended-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extended Magazine patch history</a></p>\n<h3 id="extended-magazine"><a href="/item/extended-magazine">Extended Magazine</a></h3>\n<ul><li>Max Ammo increased from 25% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extended Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-charge">${html('\n<p><a href="/item/extra-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Charge patch history</a></p>\n<h3 id="extra-charge"><a href="/item/extra-charge">Extra Charge</a></h3>\n<ul><li>Charged Spirit Power increased from +5 to +7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fleetfoot">${html('\n<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>\n<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>\n')} <ul><li>${html('Cooldown reduced from 11s to 10s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 11s to 10s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item focus-lens">${html('\n<p><a href="/item/focus-lens"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/focus_lens.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Focus Lens patch history</a></p>\n<h3 id="focus-lens"><a href="/item/focus-lens">Focus Lens</a></h3>\n')} <ul><li>${html('Cooldown increased from 27s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Focus Lens',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 27s to 28s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Focus Lens',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Bullet Resistance bonuses changed to Spirit Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fury-trance">${html('\n<p><a href="/item/fury-trance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fury_trance.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fury Trance patch history</a></p>\n<h3 id="fury-trance"><a href="/item/fury-trance">Fury Trance</a></h3>\n<ul><li>Bonus health increased from +50 to +100</li><li>Active Bullet Resistance changed to Spirit Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fury Trance',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Fire Rate per stack increased from +7% to +8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item guardian-ward">${html('\n<p><a href="/item/guardian-ward"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Guardian Ward patch history</a></p>\n<h3 id="guardian-ward"><a href="/item/guardian-ward">Guardian Ward</a></h3>\n<ul><li>Bonus Range increased from +8% to +10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Guardian Ward',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headhunter">${html('\n<p><a href="/item/headhunter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headhunter patch history</a></p>\n<h3 id="headhunter"><a href="/item/headhunter">Headhunter</a></h3>\n')} <ul><li>${html('Cooldown increased from 6s to 8s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Headhunter',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 6s to 8s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Weapon Damage reduced from +8% to +5%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headhunter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n')} <ul><li>${html('Cooldown increased from 6s to 8s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 6s to 8s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-booster">${html('\n<p><a href="/item/healing-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Booster patch history</a></p>\n<h3 id="healing-booster"><a href="/item/healing-booster">Healing Booster</a></h3>\n<ul><li>Healing Effectiveness reduced from +25% to +20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-nova">${html('\n<p><a href="/item/healing-nova"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Nova patch history</a></p>\n<h3 id="healing-nova"><a href="/item/healing-nova">Healing Nova</a></h3>\n<ul><li>Heal reduced from 300 to 260</li><li>Spirit power scaling increased from 0.93 to 1.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Nova',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-tempo">${html('\n<p><a href="/item/healing-tempo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_tempo.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Tempo patch history</a></p>\n<h3 id="healing-tempo"><a href="/item/healing-tempo">Healing Tempo</a></h3>\n<ul><li>Healing Effectiveness reduced from +30% to +25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Tempo',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hollow-point">${html('\n<p><a href="/item/hollow-point"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hollow_point.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hollow Point patch history</a></p>\n<h3 id="hollow-point"><a href="/item/hollow-point">Hollow Point</a></h3>\n<ul><li>Bullet Resistance Reduction increased from -10% to -12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Hollow Point',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hunter-s-aura">${html('\n<p><a href="/item/hunters-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hunter&#x27;s Aura patch history</a></p>\n<h3 id="hunter-s-aura"><a href="/item/hunters-aura">Hunter&#x27;s Aura</a></h3>\n<ul><li>Bullet Resistance Reduction increased from -7% to -8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Hunter's Aura",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item infuser">${html('\n<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>\n<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>\n<ul><li>Spirit Power reduced from +35 to +30</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Infuser',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item intensifying-magazine">${html('\n<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>\n<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>\n<ul><li>Weapon Damage increased from 40% to 45%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Intensifying Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Heal reduced from 60% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item long-range">${html('\n<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>\n<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>\n<ul><li>Weapon Damage increased from 35% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Long Range',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lucky-shot">${html('\n<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>\n<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>\n<ul><li>Chance increased from 20% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lucky Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n')} <ul><li>${html('Cooldown reduced from 32s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 32s to 28s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Barrier increased from 300 to 350')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n<ul><li>Bonus Heavy Damage reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mercurial-magnum">${html('\n<p><a href="/item/mercurial-magnum"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mercurial Magnum patch history</a></p>\n<h3 id="mercurial-magnum"><a href="/item/mercurial-magnum">Mercurial Magnum</a></h3>\n<ul><li>Chargeup time increased from 10s to 14s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mercurial Magnum',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item metal-skin">${html('\n<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>\n<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>\n<ul><li>Dash Distance penalty reduced from 25% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item monster-rounds">${html('\n<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>\n<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>\n<ul><li>Out of Combat regen reduced from 1.5 to 1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Monster Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-burst">${html('\n<p><a href="/item/mystic-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Burst patch history</a></p>\n<h3 id="mystic-burst"><a href="/item/mystic-burst">Mystic Burst</a></h3>\n<ul><li>Chargeup time reduced from 14s to 12s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-regeneration">${html('\n<p><a href="/item/mystic-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Regeneration patch history</a></p>\n<h3 id="mystic-regeneration"><a href="/item/mystic-regeneration">Mystic Regeneration</a></h3>\n<ul><li>No longer scales with Spirit Power</li><li>Now upgrades to a new T3 Spirit Item, Radiant Regeneration</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Regeneration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item phantom-strike">${html('\n<p><a href="/item/phantom-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Phantom Strike patch history</a></p>\n<h3 id="phantom-strike"><a href="/item/phantom-strike">Phantom Strike</a></h3>\n')} <ul><li>${html('Cooldown increased from 30s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 30s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Phantom Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item plated-armor">${html('\n<p><a href="/item/plated-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/plated_armor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Plated Armor patch history</a></p>\n<h3 id="plated-armor"><a href="/item/plated-armor">Plated Armor</a></h3>\n<ul><li>On-Hit Prevention Percent reduced from 60% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Plated Armor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item point-blank">${html('\n<p><a href="/item/point-blank"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Point Blank patch history</a></p>\n<h3 id="point-blank"><a href="/item/point-blank">Point Blank</a></h3>\n<ul><li>Melee Resistance increased from +25% to +30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Point Blank',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item quicksilver-reload">${html('\n<p><a href="/item/quicksilver-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Quicksilver Reload patch history</a></p>\n<h3 id="quicksilver-reload"><a href="/item/quicksilver-reload">Quicksilver Reload</a></h3>\n<ul><li>Chargeup time increased from 16s to 18s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Quicksilver Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item radiant-regeneration">${html('\n<p><a href="/item/radiant-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Radiant Regeneration patch history</a></p>\n<h3 id="radiant-regeneration"><a href="/item/radiant-regeneration">Radiant Regeneration</a></h3>\n<ul><li>New T3 Spirit Item, upgrades from Mystic Regeneration. Dealing damage to enemy heroes grants you +5 HP regen (with 0.04 spirit scaling) for 5s. On ability cast, heals you for +100 and provides +2 Move Speed for 3s. Cooldown 6s.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Radiant Regeneration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-recharge">${html('\n<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>\n<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>\n<ul><li>Charged Spirit Power increased from +10 to +16</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Recharge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n<ul><li>Now grants +5% Spirit Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n<ul><li>Heal reduced from 25% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Charge up range reduced from 35m to 30m</li><li>Heal spirit scaling reduced from 0.23 to 0.17</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n')} <ul><li>${html('Weapon Damage increased from 6% to 8%')}</li> <li>${html('Cooldown reduced from 7s to 6s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 7s to 6s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rusted-barrel">${html('\n<p><a href="/item/rusted-barrel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rusted Barrel patch history</a></p>\n<h3 id="rusted-barrel"><a href="/item/rusted-barrel">Rusted Barrel</a></h3>\n<ul><li>Fire Rate reduction increased from -30% to -35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item scourge">${html('\n<p><a href="/item/scourge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Scourge patch history</a></p>\n<h3 id="scourge"><a href="/item/scourge">Scourge</a></h3>\n')} <ul><li>${html('Damage reduced from 3.5% to 3.25%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Scourge',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 3.5% to 3.25%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Scourge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n')} <ul><li>${html('Cooldown reduced from 48s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 48s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Weapon Fall-off Range increased from +18% to +20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silence-wave">${html('\n<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>\n<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>\n')} <ul><li>${html('Cooldown increased from 28s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 28s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Silence duration reduced from 4s to 3.75s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n')} <ul><li>${html('No longer grants +10% Bullet Resistance')}</li> <li>${html('Now grants +12% Spirit Resistance')}</li> <li>${html('Cooldown reduced from 0.8s to 0.7s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown reduced from 0.8s to 0.7s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-bullets">${html('\n<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>\n<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>\n<ul><li>Dash distance slow reduced from -25% to -20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellbreaker">${html('\n<p><a href="/item/spellbreaker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellbreaker patch history</a></p>\n<h3 id="spellbreaker"><a href="/item/spellbreaker">Spellbreaker</a></h3>\n')} <ul><li>${html('Cooldown reduced from 14s to 10s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Spellbreaker',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 14s to 10s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellbreaker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-burn">${html('\n<p><a href="/item/spirit-burn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Burn patch history</a></p>\n<h3 id="spirit-burn"><a href="/item/spirit-burn">Spirit Burn</a></h3>\n<ul><li>Damage Threshold increased from 400 to 500</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Burn',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-rend">${html('\n<p><a href="/item/spirit-rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Rend patch history</a></p>\n<h3 id="spirit-rend"><a href="/item/spirit-rend">Spirit Rend</a></h3>\n<ul><li>Debuff duration reduced from 8s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Rend',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-resilience">${html('\n<p><a href="/item/spirit-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Resilience patch history</a></p>\n<h3 id="spirit-resilience"><a href="/item/spirit-resilience">Spirit Resilience</a></h3>\n<ul><li>Low HP trigger increased from +30% to +35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shielding">${html('\n<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>\n<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>\n<ul><li>Now grants +1 Move Speed after the shield triggers</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Fire Rate reduced from +40% to +30%</li><li>Active now also grants +20% Ability Duration</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item stamina-mastery">${html('\n<p><a href="/item/stamina-mastery"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Stamina Mastery patch history</a></p>\n<h3 id="stamina-mastery"><a href="/item/stamina-mastery">Stamina Mastery</a></h3>\n<ul><li>Air Jump/Dash Distance increased from +25% to +30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Stamina Mastery',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n<ul><li>Spirit Power increased from 22 to 25</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tankbuster">${html('\n<p><a href="/item/tankbuster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tankbuster patch history</a></p>\n<h3 id="tankbuster"><a href="/item/tankbuster">Tankbuster</a></h3>\n')} <ul><li>${html('Damage reduced from 7% to 6%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Tankbuster',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 7% to 6%'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Chargeup time increased from 8s to 12s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tankbuster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tesla-bullets">${html('\n<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>\n<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>\n')} <ul><li>${html('Damage reduced from 45 to 40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Tesla Bullets',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 45 to 40'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tesla Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Weapon Damage reduced from 15% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item torment-pulse">${html('\n<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>\n<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>\n<ul><li>Bonus Health increased from 110 to 125</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Torment Pulse',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Bleed reduced from 2.6% to 2.5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item trophy-collector">${html('\n<p><a href="/item/trophy-collector"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Trophy Collector patch history</a></p>\n<h3 id="trophy-collector"><a href="/item/trophy-collector">Trophy Collector</a></h3>\n<ul><li>Max Stacks increased from 14 to 16</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Trophy Collector',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n<ul><li>Invis duration reduced from 7s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weakening-headshot">${html('\n<p><a href="/item/weakening-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weakening Headshot patch history</a></p>\n<h3 id="weakening-headshot"><a href="/item/weakening-headshot">Weakening Headshot</a></h3>\n<ul><li>Health bonus increased from +50 to +75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weakening Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weapon-shielding">${html('\n<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>\n<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>\n<ul><li>Now grants +1 Move Speed after the shield triggers</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_19_mg as default, metadata, readingManifest, toc };
