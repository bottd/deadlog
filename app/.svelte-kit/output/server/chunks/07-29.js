import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/07-29.mg?embed=0
function _7_29_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Bebop',
			'Dynamo',
			'Grey Talon',
			'Kelvin',
			'Lady Geist',
			'McGinnis',
			'Mirage',
			'Paradox',
			'Pocket',
			'Seven',
			'Shiv',
			'Vindicta',
			'Viscous',
			'Vyper',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2025/07-29.mg?embed=1
function _7_29_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Armor Piercing Rounds',
			'Berserker',
			'Blood Tribute',
			'Bullet Resist Shredder',
			'Capacitor',
			'Cheat Death',
			'Cold Front',
			'Crushing Fists',
			'Decay',
			'Disarming Hex',
			'Divine Barrier',
			'Express Shot',
			'Fleetfoot',
			'Guardian Ward',
			"Hunter's Aura",
			'Melee Charge',
			'Metal Skin',
			'Restorative Shot',
			'Return Fire',
			'Rusted Barrel',
			'Scourge',
			'Shadow Weave',
			'Slowing Bullets',
			'Slowing Hex',
			'Spellslinger',
			'Spirit Rend',
			'Spirit Resilience',
			'Spirit Sap',
			'Spirit Shielding',
			'Spirit Shredder Bullets',
			'Suppressor',
			'Surge of Power',
			'Swift Striker',
			'Tankbuster',
			'Toxic Bullets',
			'Trophy Collector',
			'Veil Walker',
			'Vortex Web',
			'Weapon Shielding',
			'Weighted Shots'
		]
	});
}
//#endregion
//#region changelogs/2025/07-29.mg
var metadata = {
	title: '07-29-2025 Update',
	thread_id: '72760',
	published: '2025-07-29T15:22:52-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Mid Boss HP is now fixed at the spawn time. Base HP increased from 6725 to 12500 and growth reduced from 470 to 200. Reworked Rejuv reward from Mid Boss. No longer buffs troopers, reduces respawn time and buffs various stats. Upon death, 3 rejuv crystals fall to the ground (4 for subsequent midboss kills). Claiming one now grants you in place revive after 3s. If you already claimed one and claim another, it'll go to an ally (priority is closest allies first, then most recent dead allies). Dying with Rejuv no longer counts as a kill/death nor gives out bounties. While you have the Rejuv buff, you gain the following: +20% Max HP, +20% Fire Rate, and +15% Spirit Damage. Gaining the buff heals you to full and lasts up to 7 minutes. Meleeing a mantling enemy no longer cancels their mantle, instead it applies 80% movement slow that ramps down to 20% over 2s. Adding a debuff that makes you climb ropes 40% slower for 4s after you've taken player damage. This debuff only exists when you're on a rope, and tapers off to 0% in the last 1s of the damage window. Slight reduction to the amount of turning you can do while performing a heavy melee Light melee base damage reduced by 20% (except for Viscous, Calico and Bebop) Heavy Melee cooldown increased from 0.9s to 1.0s Heavy Melee cooldown when missing increased from 0.9s to 1.3s Parried stun duration is no longer reduced by debuff resistance Parry bonus damage is no longer melee specific, now affects all damage types (reduced from 35% to 30%) Heroes now have different dash speeds (same distance, slower to get there). They are placed into 3 buckets to start, Bucket 1: +5%, Bucket 2: -5%, Bucket 3: -15%. Removed the teleporters behind the Walkers After 20 minutes, trooper spawn time is reduced from 30s to 25s Trooper bounty growth reduced from 1.5 to 1.2 Removed the bounce pads on top of the Nursery/Fish Market rooftop leading back to Mid. Trooper ally split updated from 100/65/30/20/15/11% to 100/65/28/15/12/8% Breakables souls growth per minute reduced from 2.6 to 2.0 Reduced comeback multipliers a bit Neutrals bounty increased by 15% (strong neutrals +25%) Medium Neutrals respawn rate increased from 360s to 420s (+17%) Strong Neutrals respawn rate increased from 480s to 600s (+25%) Sinner's Sacrifice: Retaliate damage increased from 40 to 60 Sinner's Sacrifice: Heavy melee end success bonus now grants 4 buffs rather than 3 (these also take a little longer to kill now due to the melee timing changes) Hero bounties are now reduced based on the amount of players, similar to the trooper mechanic. (Means kills are less efficient/rewarding when its a big group, 1/2/3/4/5/6 players are 100/100/90/85/80/75% efficient) Movespeed Slow when shooting reduced from -30% to -25% Side Walkers HP increased by 10% Objectives no longer have 20-25% Spirit Resistance The following abilities now do 50% damage to objectives: Last Stand, Storm Cloud, Hyper Beam, Heavy Barrage Trooper: Walk speed increased from 6.1 to 6.3 Trooper: Run speed increased from 11 to 13 Minor respawn curve reductions (19 min from 40s to 35s, 30 min from 80s to 75s, 40 min is still 85s) Update the Zipline Knockdown to make the players go straight down and not start the stun timer until they hit the ground Zipline knockoff stun duration reduced from 3s to 2.5s Added new UI indicator on HP for showing pending heal (affects things like Abram's passive) Debuff Remover: Bonus Health reduced from 125 to 100 Debuff Remover: Cooldown increased from 45s to 50s Focus Lens cooldown reduced from 28s to 25s Rejuv buff duration reduced from 7 minutes to 5 minutes Side Walkers +16% HP, Mid Walkers +8% HP Tankbuster cooldown increased from 12s to 14s Parry bonus damage reduced from 30% to 25% Rejuv now drops 1 crystal again, with each heavy melee hit granting a credit to the team (up to 3 for first midboss, and 4 for subsequent ones). Everyone on the team gains the buff. Whenever an ally dies, they respawn in place, lose the buff and your team rejuv credits get reduced by 1 (an ally can only consume one rejuv credit). The top bar has a UI indicator for how many rejuv credits remain. When all rejuv credits are used, the buff disappears for everyone. Buff duration reduced to 4 minutes (was 7 min in the last rework, and 5 min in the most recent adjustment) Buff reduced from +20% max hp to +15% Buff reduced from +20% fire rate to +15% Dash speed for bucket 3 heroes increased from -15% to -10% Bebop No longer has +10% Base Bullet Resistance Now has +0.3% Bullet Resistance per Boon Exploding Uppercut T2 reduced from +50% Weapon Damage to +40% Exploding Uppercut T2 duration reduced from 12s to 9s Grapple Arm T1 reduced from +25% Weapon Damage to +20% Grapple Arm T1 duration reduced from 10s to 6s Dynamo Kinetic Pulse damage height increased from 0.5m to 0.7m Grey Talon Spirit Snare Curse duration increased from 1.75s to 2s Guided Owl cooldown reduced from 135s to 120s Kelvin Arctic Beam T3 no longer bounces off of objectives Lady Geist Essence Bomb no longer sticks to units Essence Bomb cooldown increased from 10.5 to 14.5 Essence Bomb radius increased from 7m to 9m Essence Bomb T1 changed from \"+2m Radius\" to \"-4s Cooldown\" Essence Bomb projectile speed increased by 25% McGinnis Health per boon reduced from 56 to 52 Spectral Wall fixed a bug where aiming at long stairs would sometimes cause the preview to go through it Spectral Wall change the preview particle Spectral Wall now supports Lag Compensation Spectral Wall will now erupt where the preview Particle is displaying when manually triggering the Eruption Turrets health per boon reduced from 12 to 10 Mirage Base bullet damage reduced by 10% Paradox Bullet damage scaling increased by 10% Pocket Affliction initial Current HP % damage increased from 10% to 12% Shiv Rage now only builds up from damaging players Rage buildup for all damage types increased by 20% (easier to build up) Rage decay duration increased from 9s to 12s Bloodletting duration reduced from 12s to 6s Bloodletting cooldown reduced from 60s to 45s Bloodletting damage clear increased from 30% to 40% Bloodletting T1 and T2 swapped Bloodletting T3 increased from +20% to +35% Bloodletting cooldown reduced from 45s to 25s Bloodletting T1 cooldown increased from -25s to -10s Bloodletting T2 increased from +6% Deferred to +10% Bloodletting Rage deferred bonus from +14% to +15% Bloodletting deferred damage from +20% to +25% Seven Base movement speed reduced from 7.1 to 6.9 Move Speed spirit scaling reduced from 0.023 to 0.02 Power Surge T1 and T2 swapped Storm Cloud cooldown increased from 170s to 180s Storm Cloud Spirit Power scaling reduced from 0.7 to 0.65 Storm Cloud DPS reduced from 95 to 90 Storm Cloud T3 reduced from +65 to +60 Base Sprint speed reduced from 2.0 to 1.0 Base regen reduced from 1.5 to 1.0 Base health reduced from 700 to 650 Vindicta Crow T1 bounce no longer bounces off of objectives Stake T3 reduced from +2m to +1m Viscous Puddle Punch cooldown reduced from 30s to 24s Puddle Punch T3 increased from -11.5s Cooldown to -12s Warden Bullet base damage reduced from 17 to 15 Bullet damage growth increased from 0.38 to 0.44 DPS reduced from 74 to 70 Last Stand lifesteal vs non-heroes reduced from 15% to 10% Wraith Bullet damage increased from 4.95 to 5.115 Bullet damage growth reduced from 0.18 to 0.175 (same overall peak damage) Yamato Alt Fire base damage reduced from 63.36 to 50 Alt Fire base damage now grows per boon (+0.7) Vyper Gun cycle time increased from 0.063 to 0.07 (a nerf) Slither T1 slide distance reduced from +25% to +20% Headshot Crit value reduced from 80% to 70% Fixed some issues with hitbox and its size in some areas Restorative Shot Heal from NPC reduced from 20 to 15 Weapon damage reduced from 8% to 6% Fleetfoot Bullet Resistance reduced from 10% to 6% Melee Charge Bullet Resistance reduced from 10% to 6% Spirit Shredder Bullets Spirit Resist Reduction increased from -7% to -8% Slowing Bullets After buildup is achieved, debuff duration is refreshed rather than starting buildup again Swift Striker Fire Rate increased from 18% to 20% Express Shot Primary weapon damage increased from 165% to 185% Toxic Bullets Damage reduced from 2.5% Max HP to 2.1% Now scales with Spirit Power (0.005%) Berserker Bullet Resistance reduced from 16% to 8% Blood Tribute Healing Reduction reduced from -50% to -40% Now grants +4 Out of Combat Regen Active Move Speed increased from 1.75 to 2 Weighted Shots Bullet Velocity reduced from -25% to -30% Stamina Recovery reduced from -10% to -20% Hunter's Aura Now grants +1 Sprint Spirit Rend Spirit Resist Reduction increased from -7% to -8% Crushing Fists Bullet Resistance reduced from 20% to 12% Heavy Melee Distance reduced from +70% to +60% Armor Piercing Rounds Chance reduced from 60% to 50% Shadow Weave Duration reduced from 25s to 18s Cooldown reduced from 40s to 32s Now grants +25% Melee Damage on Ambush reveal Capacitor Damage increased from 45 to 50 Spellslinger Buff duration increased from 10s to 14s Guardian Ward Cooldown reduced from 45s to 40s Weapon Shielding Barrier reduced from 400 to 325 Barrier no longer scales with Spirit Power (1.116) Barrier now scales with Boons (+4) Spirit Shielding Barrier reduced from 400 to 325 Barrier no longer scales with Spirit Power (1.116) Barrier now scales with Boons (+4) Return Fire Bullet Resistance reduced from 10% to 6% Bullet Damage Returned reduced from 60% to 50% Spirit Damage return from 30% to 25% Veil Walker Cooldown reduced from 14s to 12s Metal Skin Cooldown reduced from 24s to 20s Trophy Collector Out of Combat regen increased from 2 to 3.5 Spirit Resilience Spirit Resistance reduced from 30% to 25% Divine Barrier Cooldown reduced from 45s to 40s Cheat Death Effect no longer gets pierced by kill events like Killing Blow or Guided Owl Rusted Barrel Now reduces Bullet Resistance by 5% Cooldown reduced from 25s to 20s Suppressor Fire Rate reduction reduced from -35% to -30% Cold Front Spirit Resistance reduced from 10% to 6% Slowing Hex Duration increased from 3s to 3.5s Bullet Resist Shredder Bullet Resistance Reduction increased from -12% to -13% Spirit Sap Spirit Power reduction increased from -15 to -18 Cast Range increased from 30m to 40m Bonus Health increased from 50 to 75 Disarming Hex Cooldown reduced from 25s to 20s Surge of Power Cooldown increased from 8s to 14s Duration increased from 6s to 8s Fire Rate increased from 20% to 22% Spirit Power increased from 25 to 28 Tankbuster Now ignores enemy Spirit Resistance Damage reduced from 6% to 5% Decay Damage increased from 2.4% to 2.6% Scourge Projectile speed increased from 800 to 1600 Vortex Web Projectile Speed increased from 1800 to 2400",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-07-15',
			to: '2025-07-29'
		},
		after: {
			from: '2025-07-30',
			to: '2025-08-13'
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
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Exploding Uppercut',
		id: 'exploding-uppercut'
	},
	{
		level: 3,
		title: 'Grapple Arm',
		id: 'grapple-arm'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Kinetic Pulse',
		id: 'kinetic-pulse'
	},
	{
		level: 2,
		title: 'Grey Talon',
		id: 'grey-talon'
	},
	{
		level: 3,
		title: 'Spirit Snare',
		id: 'spirit-snare'
	},
	{
		level: 3,
		title: 'Guided Owl',
		id: 'guided-owl'
	},
	{
		level: 2,
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 3,
		title: 'Arctic Beam',
		id: 'arctic-beam'
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
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 3,
		title: 'Turrets',
		id: 'turrets'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 2,
		title: 'Paradox',
		id: 'paradox'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: 'Affliction',
		id: 'affliction'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Power Surge',
		id: 'power-surge'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud'
	},
	{
		level: 3,
		title: 'Storm Cloud Spirit Power',
		id: 'storm-cloud-spirit-power'
	},
	{
		level: 3,
		title: 'Storm Cloud DPS',
		id: 'storm-cloud-dps'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud-1'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 3,
		title: 'Bloodletting',
		id: 'bloodletting'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Crow',
		id: 'crow'
	},
	{
		level: 3,
		title: 'Stake',
		id: 'stake'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch'
	},
	{
		level: 2,
		title: 'Vyper',
		id: 'vyper'
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
		title: 'Last Stand',
		id: 'last-stand'
	},
	{
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
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
		title: 'Blood Tribute',
		id: 'blood-tribute'
	},
	{
		level: 2,
		title: 'Bullet Resist Shredder',
		id: 'bullet-resist-shredder'
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
		title: 'Cold Front',
		id: 'cold-front'
	},
	{
		level: 2,
		title: 'Crushing Fists',
		id: 'crushing-fists'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: 'Disarming Hex',
		id: 'disarming-hex'
	},
	{
		level: 2,
		title: 'Divine Barrier',
		id: 'divine-barrier'
	},
	{
		level: 2,
		title: 'Express Shot',
		id: 'express-shot'
	},
	{
		level: 2,
		title: 'Fleetfoot',
		id: 'fleetfoot'
	},
	{
		level: 2,
		title: 'Guardian Ward',
		id: 'guardian-ward'
	},
	{
		level: 2,
		title: "Hunter's Aura",
		id: 'hunter-s-aura'
	},
	{
		level: 2,
		title: 'Melee Charge',
		id: 'melee-charge'
	},
	{
		level: 2,
		title: 'Metal Skin',
		id: 'metal-skin'
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
		title: 'Slowing Bullets',
		id: 'slowing-bullets'
	},
	{
		level: 2,
		title: 'Slowing Hex',
		id: 'slowing-hex'
	},
	{
		level: 2,
		title: 'Spellslinger',
		id: 'spellslinger'
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
		title: 'Spirit Sap',
		id: 'spirit-sap'
	},
	{
		level: 2,
		title: 'Spirit Shielding',
		id: 'spirit-shielding'
	},
	{
		level: 2,
		title: 'Spirit Shredder Bullets',
		id: 'spirit-shredder-bullets'
	},
	{
		level: 2,
		title: 'Suppressor',
		id: 'suppressor'
	},
	{
		level: 2,
		title: 'Surge of Power',
		id: 'surge-of-power'
	},
	{
		level: 2,
		title: 'Swift Striker',
		id: 'swift-striker'
	},
	{
		level: 2,
		title: 'Tankbuster',
		id: 'tankbuster'
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
		title: 'Vortex Web',
		id: 'vortex-web'
	},
	{
		level: 2,
		title: 'Weapon Shielding',
		id: 'weapon-shielding'
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
			from: '2025-07-15',
			to: '2025-07-29'
		},
		after: {
			from: '2025-07-30',
			to: '2025-08-13'
		},
		siblings: []
	},
	open: false,
	sections: [
		{
			kind: 'hero',
			name: 'Bebop',
			id: 'bebop'
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
			name: 'Mirage',
			id: 'mirage'
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
			name: 'Blood Tribute',
			id: 'blood-tribute'
		},
		{
			kind: 'item',
			name: 'Bullet Resist Shredder',
			id: 'bullet-resist-shredder'
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
			name: 'Cold Front',
			id: 'cold-front'
		},
		{
			kind: 'item',
			name: 'Crushing Fists',
			id: 'crushing-fists'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: 'Disarming Hex',
			id: 'disarming-hex'
		},
		{
			kind: 'item',
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: 'Express Shot',
			id: 'express-shot'
		},
		{
			kind: 'item',
			name: 'Fleetfoot',
			id: 'fleetfoot'
		},
		{
			kind: 'item',
			name: 'Guardian Ward',
			id: 'guardian-ward'
		},
		{
			kind: 'item',
			name: "Hunter's Aura",
			id: 'hunter-s-aura'
		},
		{
			kind: 'item',
			name: 'Melee Charge',
			id: 'melee-charge'
		},
		{
			kind: 'item',
			name: 'Metal Skin',
			id: 'metal-skin'
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
			name: 'Slowing Bullets',
			id: 'slowing-bullets'
		},
		{
			kind: 'item',
			name: 'Slowing Hex',
			id: 'slowing-hex'
		},
		{
			kind: 'item',
			name: 'Spellslinger',
			id: 'spellslinger'
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
			name: 'Spirit Sap',
			id: 'spirit-sap'
		},
		{
			kind: 'item',
			name: 'Spirit Shielding',
			id: 'spirit-shielding'
		},
		{
			kind: 'item',
			name: 'Spirit Shredder Bullets',
			id: 'spirit-shredder-bullets'
		},
		{
			kind: 'item',
			name: 'Suppressor',
			id: 'suppressor'
		},
		{
			kind: 'item',
			name: 'Surge of Power',
			id: 'surge-of-power'
		},
		{
			kind: 'item',
			name: 'Swift Striker',
			id: 'swift-striker'
		},
		{
			kind: 'item',
			name: 'Tankbuster',
			id: 'tankbuster'
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
			name: 'Vortex Web',
			id: 'vortex-web'
		},
		{
			kind: 'item',
			name: 'Weapon Shielding',
			id: 'weapon-shielding'
		},
		{
			kind: 'item',
			name: 'Weighted Shots',
			id: 'weighted-shots'
		}
	],
	related: []
};
function _7_29_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Mid Boss HP is now fixed at the spawn time. Base HP increased from 6725 to 12500 and growth reduced from 470 to 200.</li><li>Reworked Rejuv reward from Mid Boss. No longer buffs troopers, reduces respawn time and buffs various stats. Upon death, 3 rejuv crystals fall to the ground (4 for subsequent midboss kills). Claiming one now grants you in place revive after 3s. If you already claimed one and claim another, it&#x27;ll go to an ally (priority is closest allies first, then most recent dead allies). Dying with Rejuv no longer counts as a kill/death nor gives out bounties. While you have the Rejuv buff, you gain the following: +20% Max HP, +20% Fire Rate, and +15% Spirit Damage. Gaining the buff heals you to full and lasts up to 7 minutes.</li><li>Meleeing a mantling enemy no longer cancels their mantle, instead it applies 80% movement slow that ramps down to 20% over 2s.</li><li>Adding a debuff that makes you climb ropes 40% slower for 4s after you&#x27;ve taken player damage. This debuff only exists when you&#x27;re on a rope, and tapers off to 0% in the last 1s of the damage window.</li><li>Slight reduction to the amount of turning you can do while performing a heavy melee</li><li>Light melee base damage reduced by 20% (except for Viscous, Calico and Bebop)</li><li>Heavy Melee cooldown increased from 0.9s to 1.0s</li><li>Heavy Melee cooldown when missing increased from 0.9s to 1.3s</li><li>Parried stun duration is no longer reduced by debuff resistance</li><li>Parry bonus damage is no longer melee specific, now affects all damage types (reduced from 35% to 30%)</li><li>Heroes now have different dash speeds (same distance, slower to get there). They are placed into 3 buckets to start, Bucket 1: +5%, Bucket 2: -5%, Bucket 3: -15%.</li><li>Removed the teleporters behind the Walkers</li><li>After 20 minutes, trooper spawn time is reduced from 30s to 25s</li><li>Trooper bounty growth reduced from 1.5 to 1.2</li><li>Removed the bounce pads on top of the Nursery/Fish Market rooftop leading back to Mid.</li><li>Trooper ally split updated from 100/65/30/20/15/11% to 100/65/28/15/12/8%</li><li>Breakables souls growth per minute reduced from 2.6 to 2.0</li><li>Reduced comeback multipliers a bit</li><li>Neutrals bounty increased by 15% (strong neutrals +25%)</li><li>Medium Neutrals respawn rate increased from 360s to 420s (+17%)</li><li>Strong Neutrals respawn rate increased from 480s to 600s (+25%)</li><li>Sinner&#x27;s Sacrifice: Retaliate damage increased from 40 to 60</li><li>Sinner&#x27;s Sacrifice: Heavy melee end success bonus now grants 4 buffs rather than 3 (these also take a little longer to kill now due to the melee timing changes)</li><li>Hero bounties are now reduced based on the amount of players, similar to the trooper mechanic. (Means kills are less efficient/rewarding when its a big group, 1/2/3/4/5/6 players are 100/100/90/85/80/75% efficient)</li><li>Movespeed Slow when shooting reduced from -30% to -25%</li><li>Side Walkers HP increased by 10%</li><li>Objectives no longer have 20-25% Spirit Resistance</li><li>The following abilities now do 50% damage to objectives: Last Stand, Storm Cloud, Hyper Beam, Heavy Barrage</li><li>Trooper: Walk speed increased from 6.1 to 6.3</li><li>Trooper: Run speed increased from 11 to 13</li><li>Minor respawn curve reductions (19 min from 40s to 35s, 30 min from 80s to 75s, 40 min is still 85s)</li><li>Update the Zipline Knockdown to make the players go straight down and not start the stun timer until they hit the ground</li><li>Zipline knockoff stun duration reduced from 3s to 2.5s</li><li>Added new UI indicator on HP for showing pending heal (affects things like Abram&#x27;s passive)</li><li>Debuff Remover: Bonus Health reduced from 125 to 100</li><li>Debuff Remover: Cooldown increased from 45s to 50s</li><li>Focus Lens cooldown reduced from 28s to 25s</li><li>Rejuv buff duration reduced from 7 minutes to 5 minutes</li><li>Side Walkers +16% HP, Mid Walkers +8% HP</li><li>Tankbuster cooldown increased from 12s to 14s</li><li>Parry bonus damage reduced from 30% to 25%</li><li>Rejuv now drops 1 crystal again, with each heavy melee hit granting a credit to the team (up to 3 for first midboss, and 4 for subsequent ones). Everyone on the team gains the buff. Whenever an ally dies, they respawn in place, lose the buff and your team rejuv credits get reduced by 1 (an ally can only consume one rejuv credit). The top bar has a UI indicator for how many rejuv credits remain. When all rejuv credits are used, the buff disappears for everyone.</li><li>Buff duration reduced to 4 minutes (was 7 min in the last rework, and 5 min in the most recent adjustment)</li><li>Buff reduced from +20% max hp to +15%</li><li>Buff reduced from +20% fire rate to +15%</li><li>Dash speed for bucket 3 heroes increased from -15% to -10%</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_7_29_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>No longer has +10% Base Bullet Resistance</li><li>Now has +0.3% Bullet Resistance per Boon</li></ul>\n')} <div class="ability exploding-uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>\n<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>\n<ul><li>Exploding Uppercut T2 reduced from +50% Weapon Damage to +40%</li><li>Exploding Uppercut T2 duration reduced from 12s to 9s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Exploding Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple-arm">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>\n<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>\n<ul><li>Grapple Arm T1 reduced from +25% Weapon Damage to +20%</li><li>Grapple Arm T1 duration reduced from 10s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Grapple Arm'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Kinetic Pulse damage height increased from 0.5m to 0.7m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability spirit-snare">${html('\n<p><a href="/ability/spirit-snare"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Snare change history</a></p>\n<h4 id="spirit-snare"><a href="/ability/spirit-snare">Spirit Snare</a></h4>\n<ul><li>Spirit Snare Curse duration increased from 1.75s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Spirit Snare'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n')} <ul><li>${html('Guided Owl cooldown reduced from 135s to 120s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Guided Owl cooldown reduced from 135s to 120s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Arctic Beam T3 no longer bounces off of objectives</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability essence-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>\n<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>\n')} <ul><li>${html('Essence Bomb no longer sticks to units')}</li> <li>${html('Essence Bomb cooldown increased from 10.5 to 14.5')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Essence Bomb cooldown increased from 10.5 to 14.5'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Essence Bomb radius increased from 7m to 9m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Essence Bomb radius increased from 7m to 9m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Essence Bomb T1 changed from &quot;+2m Radius&quot; to &quot;-4s Cooldown&quot;')}</li> <li>${html('Essence Bomb projectile speed increased by 25%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Essence Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n<ul><li>Health per boon reduced from 56 to 52</li></ul>\n')} <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall fixed a bug where aiming at long stairs would sometimes cause the preview to go through it</li><li>Spectral Wall change the preview particle</li><li>Spectral Wall now supports Lag Compensation</li><li>Spectral Wall will now erupt where the preview Particle is displaying when manually triggering the Eruption</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Turrets change history</a></p>\n<h4 id="turrets"><a href="/ability/mini-turret">Turrets</a></h4>\n<ul><li>Turrets health per boon reduced from 12 to 10</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Turrets'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero mirage">\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n<ul><li>Base bullet damage reduced by 10%</li></ul>\n</div>\n<div class="hero paradox">\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n<ul><li>Bullet damage scaling increased by 10%</li></ul>\n</div>\n')} <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction initial Current HP % damage increased from 10% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n<ul><li>Base movement speed reduced from 7.1 to 6.9</li><li>Move Speed spirit scaling reduced from 0.023 to 0.02</li></ul>\n')} <div class="ability power-surge">${html('\n<p><a href="/ability/power-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Surge change history</a></p>\n<h4 id="power-surge"><a href="/ability/power-surge">Power Surge</a></h4>\n<ul><li>Power Surge T1 and T2 swapped</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Power Surge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n')} <ul><li>${html('Storm Cloud cooldown increased from 170s to 180s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Storm Cloud cooldown increased from 170s to 180s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud-spirit-power">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud Spirit Power change history</a></p>\n<h4 id="storm-cloud-spirit-power"><a href="/ability/storm-cloud">Storm Cloud Spirit Power</a></h4>\n<ul><li>Storm Cloud Spirit Power scaling reduced from 0.7 to 0.65</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud Spirit Power'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud-dps">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud DPS change history</a></p>\n<h4 id="storm-cloud-dps"><a href="/ability/storm-cloud">Storm Cloud DPS</a></h4>\n<ul><li>Storm Cloud DPS reduced from 95 to 90</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud-1"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud T3 reduced from +65 to +60</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Base Sprint speed reduced from 2.0 to 1.0</li><li>Base regen reduced from 1.5 to 1.0</li><li>Base health reduced from 700 to 650</li></ul>\n')}</div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Rage now only builds up from damaging players</li><li>Rage buildup for all damage types increased by 20% (easier to build up)</li><li>Rage decay duration increased from 9s to 12s</li></ul>\n')} <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n')} <ul><li>${html('Bloodletting duration reduced from 12s to 6s')}</li> <li>${html('Bloodletting cooldown reduced from 60s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Bloodletting cooldown reduced from 60s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bloodletting damage clear increased from 30% to 40%')}</li> <li>${html('Bloodletting T1 and T2 swapped')}</li> <li>${html('Bloodletting T3 increased from +20% to +35%')}</li> <li>${html('Bloodletting cooldown reduced from 45s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 1,
		bulletIndex: 5,
		text: 'Bloodletting cooldown reduced from 45s to 25s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bloodletting T1 cooldown increased from -25s to -10s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 1,
		bulletIndex: 6,
		text: 'Bloodletting T1 cooldown increased from -25s to -10s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bloodletting T2 increased from +6% Deferred to +10%')}</li> <li>${html('Bloodletting Rage deferred bonus from +14% to +15%')}</li> <li>${html('Bloodletting deferred damage from +20% to +25%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n')} <div class="ability crow">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow change history</a></p>\n<h4 id="crow"><a href="/ability/crow-familiar">Crow</a></h4>\n<ul><li>Crow T1 bounce no longer bounces off of objectives</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n<ul><li>Stake T3 reduced from +2m to +1m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n')} <ul><li>${html('Puddle Punch cooldown reduced from 30s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Puddle Punch cooldown reduced from 30s to 24s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Puddle Punch T3 increased from -11.5s Cooldown to -12s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n<ul><li>Gun cycle time increased from 0.063 to 0.07 (a nerf)</li></ul>\n')} <div class="ability slither">${html('\n<p><a href="/ability/slither"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slither change history</a></p>\n<h4 id="slither"><a href="/ability/slither">Slither</a></h4>\n<ul><li>Slither T1 slide distance reduced from +25% to +20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Slither'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Headshot Crit value reduced from 80% to 70%</li><li>Fixed some issues with hitbox and its size in some areas</li></ul>\n')}</div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Bullet base damage reduced from 17 to 15</li><li>Bullet damage growth increased from 0.38 to 0.44</li><li>DPS reduced from 74 to 70</li></ul>\n')} <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand lifesteal vs non-heroes reduced from 15% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero wraith">\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n<ul><li>Bullet damage increased from 4.95 to 5.115</li><li>Bullet damage growth reduced from 0.18 to 0.175 (same overall peak damage)</li></ul>\n</div>\n<div class="hero yamato">\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n<ul><li>Alt Fire base damage reduced from 63.36 to 50</li><li>Alt Fire base damage now grows per boon (+0.7)</li></ul>\n</div>\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_7_29_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item armor-piercing-rounds">${html('\n<p><a href="/item/armor-piercing-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/armor_piercing_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Armor Piercing Rounds patch history</a></p>\n<h3 id="armor-piercing-rounds"><a href="/item/armor-piercing-rounds">Armor Piercing Rounds</a></h3>\n<ul><li>Chance reduced from 60% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Armor Piercing Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Bullet Resistance reduced from 16% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item blood-tribute">${html('\n<p><a href="/item/blood-tribute"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Blood Tribute patch history</a></p>\n<h3 id="blood-tribute"><a href="/item/blood-tribute">Blood Tribute</a></h3>\n<ul><li>Healing Reduction reduced from -50% to -40%</li><li>Now grants +4 Out of Combat Regen</li><li>Active Move Speed increased from 1.75 to 2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Blood Tribute',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resist-shredder">${html('\n<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>\n<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>\n<ul><li>Bullet Resistance Reduction increased from -12% to -13%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resist Shredder',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item capacitor">${html('\n<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>\n<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>\n')} <ul><li>${html('Damage increased from 45 to 50')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage increased from 45 to 50'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cheat-death">${html('\n<p><a href="/item/cheat-death"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cheat Death patch history</a></p>\n<h3 id="cheat-death"><a href="/item/cheat-death">Cheat Death</a></h3>\n<ul><li>Effect no longer gets pierced by kill events like Killing Blow or Guided Owl</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cheat Death',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n<ul><li>Spirit Resistance reduced from 10% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crushing-fists">${html('\n<p><a href="/item/crushing-fists"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crushing Fists patch history</a></p>\n<h3 id="crushing-fists"><a href="/item/crushing-fists">Crushing Fists</a></h3>\n<ul><li>Bullet Resistance reduced from 20% to 12%</li><li>Heavy Melee Distance reduced from +70% to +60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crushing Fists',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Damage increased from 2.4% to 2.6%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage increased from 2.4% to 2.6%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item disarming-hex">${html('\n<p><a href="/item/disarming-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/disarming_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Disarming Hex patch history</a></p>\n<h3 id="disarming-hex"><a href="/item/disarming-hex">Disarming Hex</a></h3>\n')} <ul><li>${html('Cooldown reduced from 25s to 20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Disarming Hex',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 25s to 20s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Disarming Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n')} <ul><li>${html('Cooldown reduced from 45s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 45s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item express-shot">${html('\n<p><a href="/item/express-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Express Shot patch history</a></p>\n<h3 id="express-shot"><a href="/item/express-shot">Express Shot</a></h3>\n<ul><li>Primary weapon damage increased from 165% to 185%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Express Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fleetfoot">${html('\n<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>\n<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>\n<ul><li>Bullet Resistance reduced from 10% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item guardian-ward">${html('\n<p><a href="/item/guardian-ward"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Guardian Ward patch history</a></p>\n<h3 id="guardian-ward"><a href="/item/guardian-ward">Guardian Ward</a></h3>\n')} <ul><li>${html('Cooldown reduced from 45s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Guardian Ward',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 45s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Guardian Ward',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hunter-s-aura">${html('\n<p><a href="/item/hunters-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hunter&#x27;s Aura patch history</a></p>\n<h3 id="hunter-s-aura"><a href="/item/hunters-aura">Hunter&#x27;s Aura</a></h3>\n<ul><li>Now grants +1 Sprint</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Hunter's Aura",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n<ul><li>Bullet Resistance reduced from 10% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item metal-skin">${html('\n<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>\n<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>\n')} <ul><li>${html('Cooldown reduced from 24s to 20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 24s to 20s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>Heal from NPC reduced from 20 to 15</li><li>Weapon damage reduced from 8% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>Bullet Resistance reduced from 10% to 6%</li><li>Bullet Damage Returned reduced from 60% to 50%</li><li>Spirit Damage return from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rusted-barrel">${html('\n<p><a href="/item/rusted-barrel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rusted Barrel patch history</a></p>\n<h3 id="rusted-barrel"><a href="/item/rusted-barrel">Rusted Barrel</a></h3>\n')} <ul><li>${html('Now reduces Bullet Resistance by 5%')}</li> <li>${html('Cooldown reduced from 25s to 20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 25s to 20s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item scourge">${html('\n<p><a href="/item/scourge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Scourge patch history</a></p>\n<h3 id="scourge"><a href="/item/scourge">Scourge</a></h3>\n<ul><li>Projectile speed increased from 800 to 1600</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Scourge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n')} <ul><li>${html('Duration reduced from 25s to 18s')}</li> <li>${html('Cooldown reduced from 40s to 32s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 40s to 32s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Now grants +25% Melee Damage on Ambush reveal')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-bullets">${html('\n<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>\n<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>\n<ul><li>After buildup is achieved, debuff duration is refreshed rather than starting buildup again</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n<ul><li>Duration increased from 3s to 3.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellslinger">${html('\n<p><a href="/item/spellslinger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spell_slinger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellslinger patch history</a></p>\n<h3 id="spellslinger"><a href="/item/spellslinger">Spellslinger</a></h3>\n<ul><li>Buff duration increased from 10s to 14s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellslinger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-rend">${html('\n<p><a href="/item/spirit-rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Rend patch history</a></p>\n<h3 id="spirit-rend"><a href="/item/spirit-rend">Spirit Rend</a></h3>\n<ul><li>Spirit Resist Reduction increased from -7% to -8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Rend',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-resilience">${html('\n<p><a href="/item/spirit-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Resilience patch history</a></p>\n<h3 id="spirit-resilience"><a href="/item/spirit-resilience">Spirit Resilience</a></h3>\n<ul><li>Spirit Resistance reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-sap">${html('\n<p><a href="/item/spirit-sap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_sap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Sap patch history</a></p>\n<h3 id="spirit-sap"><a href="/item/spirit-sap">Spirit Sap</a></h3>\n<ul><li>Spirit Power reduction increased from -15 to -18</li><li>Cast Range increased from 30m to 40m</li><li>Bonus Health increased from 50 to 75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Sap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shielding">${html('\n<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>\n<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>\n<ul><li>Barrier reduced from 400 to 325</li><li>Barrier no longer scales with Spirit Power (1.116)</li><li>Barrier now scales with Boons (+4)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shredder-bullets">${html('\n<p><a href="/item/spirit-shredder-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spirit_shredder_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shredder Bullets patch history</a></p>\n<h3 id="spirit-shredder-bullets"><a href="/item/spirit-shredder-bullets">Spirit Shredder Bullets</a></h3>\n<ul><li>Spirit Resist Reduction increased from -7% to -8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shredder Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item suppressor">${html('\n<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>\n<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>\n<ul><li>Fire Rate reduction reduced from -35% to -30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Suppressor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n')} <ul><li>${html('Cooldown increased from 8s to 14s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 8s to 14s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Duration increased from 6s to 8s')}</li> <li>${html('Fire Rate increased from 20% to 22%')}</li> <li>${html('Spirit Power increased from 25 to 28')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item swift-striker">${html('\n<p><a href="/item/swift-striker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Swift Striker patch history</a></p>\n<h3 id="swift-striker"><a href="/item/swift-striker">Swift Striker</a></h3>\n<ul><li>Fire Rate increased from 18% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Swift Striker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tankbuster">${html('\n<p><a href="/item/tankbuster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tankbuster patch history</a></p>\n<h3 id="tankbuster"><a href="/item/tankbuster">Tankbuster</a></h3>\n')} <ul><li>${html('Now ignores enemy Spirit Resistance')}</li> <li>${html('Damage reduced from 6% to 5%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Tankbuster',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Damage reduced from 6% to 5%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tankbuster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Damage reduced from 2.5% Max HP to 2.1%</li><li>Now scales with Spirit Power (0.005%)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item trophy-collector">${html('\n<p><a href="/item/trophy-collector"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Trophy Collector patch history</a></p>\n<h3 id="trophy-collector"><a href="/item/trophy-collector">Trophy Collector</a></h3>\n<ul><li>Out of Combat regen increased from 2 to 3.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Trophy Collector',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n')} <ul><li>${html('Cooldown reduced from 14s to 12s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 14s to 12s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vortex-web">${html('\n<p><a href="/item/vortex-web"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/vortex_web.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vortex Web patch history</a></p>\n<h3 id="vortex-web"><a href="/item/vortex-web">Vortex Web</a></h3>\n<ul><li>Projectile Speed increased from 1800 to 2400</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vortex Web',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weapon-shielding">${html('\n<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>\n<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>\n<ul><li>Barrier reduced from 400 to 325</li><li>Barrier no longer scales with Spirit Power (1.116)</li><li>Barrier now scales with Boons (+4)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weighted-shots">${html('\n<p><a href="/item/weighted-shots"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weighted Shots patch history</a></p>\n<h3 id="weighted-shots"><a href="/item/weighted-shots">Weighted Shots</a></h3>\n<ul><li>Bullet Velocity reduced from -25% to -30%</li><li>Stamina Recovery reduced from -10% to -20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weighted Shots',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _7_29_mg as default, metadata, readingManifest, toc };
