import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/10-02.mg?embed=0
function _0_02_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Billy',
			'Calico',
			'Doorman',
			'Drifter',
			'Dynamo',
			'Grey Talon',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'Lash',
			'Mina',
			'Mirage',
			'Mo &amp; Krill',
			'Paige',
			'Seven',
			'Victor',
			'Vindicta',
			'Viscous',
			'Vyper',
			'Warden',
			'Wraith'
		]
	});
}
//#endregion
//#region changelogs/2025/10-02.mg?embed=1
function _0_02_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Blood Tribute',
			'Capacitor',
			'Cheat Death',
			'Cold Front',
			'Colossus',
			'Counterspell',
			'Cultist Sacrifice',
			'Disarming Hex',
			'Extra Health',
			'Fury Trance',
			'Greater Expansion',
			'Headshot Booster',
			'Inhibitor',
			'Majestic Leap',
			'Mystic Burst',
			'Mystic Shot',
			'Mystic Slow',
			'Quicksilver Reload',
			'Reactive Barrier',
			'Rebuttal',
			'Rescue Beam',
			'Restorative Locket',
			'Rusted Barrel',
			'Shadow Weave',
			'Silence Wave',
			'Soul Urn',
			'Spellbreaker',
			'Spirit Burn',
			'Spirit Lifesteal',
			'Spirit Rend',
			'Spirit Resilience',
			'Spirit Shielding',
			'Spirit Snatch',
			'Spiritual Overflow',
			'Sprint Boots',
			'Tesla Bullets',
			'Toxic Bullets',
			'Unstoppable',
			'Veil Walker',
			'Weapon Shielding'
		]
	});
}
//#endregion
//#region changelogs/2025/10-02.mg
var metadata = {
	title: '10-02-2025 Update',
	thread_id: '84332',
	published: '2025-10-02T13:03:05-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Weapon Investment bonus increased from 7/9/13/20/29/40/58/72/83/93% to 7/9/13/20/29/40/60/75/95/115 (for 0.8/1.6/2.4/3.2/4.8/7.2/9.6/16/22.4/28.8k spent) Applying a CC to an enemy is reduced in duration when affected by other CCs in a short interval. Each previously applied CC reduces the duration by 7% up to a max of 21% over the past 7 seconds. CC is defined as the same set of debuffs that affect Reactive Barrier (stun, sleep, immobilize, tether, etc). Note that abilities that apply multiple things only count as one CC (aka Abrams shoulder charge CC on the grab and the stun, Lash ult grab and stun, etc). Matchmaking updates to include more considerations for a balanced roster beyond only frontliners Reduced shooting lock-out period when jumping from 0.15s to 0.0s Shooting while jumping now applies a -10% inaccuracy period for 0.15s after jumping Wall Jumps after the first one now cost 0.5 stamina (first wall jump per sequence is free) Reduced corner boosting velocity by 20% Mid Boss base HP increased from 12500 to 13000 Mid Boss damage resistance per second reduced from 50 + 7/min to 35 + 5/min Rejuv bonus HP reduced from 15% to 10% 2nd Midboss rejuv credits reduced from 4 to 3 Dropped Unsecured soul bags now require a Heavy Melee to secure rather than standing ontop of them Added an extra boon at 12k (nearby boon levels adjusted slightly, 10.2/11.6/13.2k to 10/11/12/13.2k) Neutral Shop no longer gets disabled if an enemy is nearby Distance to attack Walkers reduced from 35m to 34m Fixed ordering issues with various items with Bullet based Procs. Debuffs (ie. negative Bullet Resist) from all procs are now applied before any bonus damage from the procs. Items include Weakening Headshot, Crippling Headshot, Headshot Booster, Headhunter, Hollow Point and Mystic Shot. Enabled input buffering for shooting, dashing, melee and parry. This allows input to register before the current action is finished High Velocity Rounds: Bullet Velocity increased from +35% to +45% (reflected through upgrades as well) Backstabber: Cooldown increased from 5s to 6s Cutlist Sacrifice: Fire Rate boon scaling reduced from 0.8 to 0.7 Diviner’s Kevlar: Duration increased from 13s to 20s Diviner’s Kevlar: Spirit Power increased from +25 to +35 Fixed Wall Jumps not refunding stamina if a mantle or zipline occurs within the refund window (similar to how we treat other stamina refunds) Abrams Siphon Life damage and spirit scaling reduced by 10% Siphon Life heal ratio increased by 10% Shoulder Charge T1 changed from +25% Weapon Power to +20 Bullet Damage Per Shot (results in a weaker followup melee hit) Billy Add footsteps to Billy\'s out of combat run animations Base move speed reduced from 7.3 to 7.1 Blasted T1 movespeed increased from +1.75 to +2.25m Calico Base bullet damage increased from 1.9 to 2.0 Gloom Bombs radius increased from 2.5m to 3m Ava duration increased from 14s to 16s Leaping Slash height increased from 1.5m to 2.5m Return to Shadows cooldown reduced from 100s to 90s Return to Shadows radius increased from 7m to 7.5m Doorman Doorway placement has been improved Doorway can now be placed through veils again Improved performance when placing Doorway Drifter Stalker\'s Mark new sound added for teleport precast Stalker\'s Mark replaced temp whizby sound with an updated version Stalker\'s Mark ambush cast delay increased from 0.0s to 0.35s Dynamo Kinetic Pulse height increased from 0.7m to 1.0m Rejuvenating Aurora spirit scaling per level increased from 0.372 to 0.4 Grey Talon Charged Shot spirit scaling reduced from 1.11 to 1.0 Charged Shot T3 spirit scaling reduced from 1.11 to 1.0 Rain of Arrows no longer lingers the air benefits like unlimited air dash once the ability is canceled or runs out Ivy Bullet damage growth reduced from 0.15 to 0.11 Spirit scaling per boon increased from 1.1 to 1.2 Kudzu Bomb DPS reduced from 55 to 50 Kudzu Bomb T3 DPS reduced from +46 to +40 Stone Form damage spirit scaling increased from 1.0 to 1.5 Air Drop no longer grants allied bullet resistance (still grants barrier on drop) Kelvin Base bullet damage reduced from 18.9 to 17.8 Clip size reduced from 15 to 14 Spirit Power per boon increased from 1.1 to 1.3 Lady Geist Essence Bomb spirit scaling increased from 1.07 to 1.22 Lash Ground Strike range reduced from 11m to 10m Ground Strike cooldown increased from 19s to 21s Ground Strike damage reduced from 70 to 60 Mina New heavy melee animation Rake now passively lets you float in the air with the umbrella for up to 2.5s with right click Rake heal spirit scale reduced from 1.5 to 0.5 Rake T2 now also increases heal spirit scale by 1.0 Rake T3 damage increased from 6% to 7% Sanguine Retreat cooldown increased from 27s to 30s Nox Nostra now has 50% reduction in damage against objectives Nox Nostra reduced the Cap on objective damage from the T3 from +50 Damage per Bat to +20 Damage (only a nerf against objectives) Mirage Djinn\'s Mark is now affected by cooldown reduction Mo & Krill Bullet damage growth per boon increased from 0.063 to 0.07 Burrow bullet resistance reduced from 80% to 60% Combo duration reduced from 2.5s to 2.4s Combo T2 duration reduced from 0.75s to 0.7s Paige Bullet projectile speed increased by 15% Bullet damage growth per boon reduced from 0.8 to 0.66 Defend and Fight! duration increased from 5s to 7s Defend and Fight! cooldown increased from 26s to 30s Captivating Read reduced cooldown from 30s to 25s Captivating Read moved the UI element to the bottom of the screen so it\'s more noticeable when you get hit Captivating Read radius increased from 7m to 7.5m Conjure Dragon now properly applies burning effect below the dragon if the dragon is far off the ground Rallying Charge damage reduced from 150 (+1.2) to 125 (+1.0) Rallying Charge healing reduced from 150 (+2) to 125 (+1.6) Rallying Charge both damage & healing now grows as the horses travel, up to a max +100% of both at 350m Rallying Charge increased horse speed from 1700 to 2000 Rallying Charge reduced knock-up speed from 800 to 600 Rallying Charge spawn-in time reduced from 0.15s to 0.05s to remove deadzone in front Seven Static Charge T2 reduced from +8m to +7m Power Surge spirit power scaling reduced by 10% Storm Cloud’s Lightning Strike damage reduced from 90 to 75 Storm Cloud’s Lightning Strike spirit power reduced from 1.4 to 0.5 Victor Base health changed from 680 (+41 per boon, max of 1992) to 720 (+39 per boon, max of 1968) Pain Battery fixed the bolts hitting world geometry more often than intended Pain Battery damage required to charge up reduced from 50% max health to 40% Aura of Suffering reduced DPS spirit scaling on the minimum damage from 0.25 to 0.22 and on the maximum damage from 1.25 to 1.1 Aura of Suffering self damage reduced from 100% to 85% Shocking Reanimation increased stun duration from 1s to 1.5s Shocking Reanimation damage spirit scaling increased from 1.8 to 2.0 Shocking Reanimation T1 changed from "+10 spirit damage per bullet and 25% fire rate until reload" to " Shocking Reanimation T3 changed from "+200 damage and +3m radius" to "+10 spirit damage per bullet and 20% fire rate while the ability is on cooldown" Shocking Reanimation improved hit detection Fixed Shocking Reanimation sometimes not hitting targets that are in the Z axis Pain Battery T3 heal reduced from 20% to 18% Jumpstart cooldown increased from 22s to 23s Aura of Suffering self damage can no longer be reduced by spirit resistance (same as Jumpstart) Aura of Suffering self damage reduced from 85% to 80% Aura of Suffering self damage reduced from 80% to 70% Aura of Suffering radius reduced from 8m to 7.7m Aura of Suffering MinDPS, MaxDPS and spirit scaling increased by ~5-6% Jumpstart duration increased from 4s to 4.5s Shocking Reanimation radius increased from 12m to 13m Vindicta Base bullet damage increased from 11.4 to 11.8 Flight duration increased from 13s to 15s Flight T2 increased from 7s to 8s Flight spirit damage scaling increased from 0.19 to 0.22 Assassinate bonus damage spirit scaling increased from 1.4 to 1.7 Assassinate cooldown reduced from 60s to 50s Viscous Alt fire base damage reduced from 48 to 42 Alt fire damage growth increased from 1.25 to 1.6 Splatter damage reduced from 80 to 70 Splatter T1 increased from -5.75s to -6s Vyper Screwjab Dagger has been reworked Screwjab Dagger now stacks in both damage and slows the more daggers you hit against the same target Screwjab Dagger is now charge-based, with a 4.5s time between charges. Starts with 2 charges. Screwjab Dagger damage changed from 50 (+1) to 50 (+0.65) and 25 (+0.33) per stack Screwjab Dagger has a max stack of 3 (shows in overhead) Screwjab Dagger slow changed from 50% to 35% + 15% per stack Screwjab Dagger slow duration increased from 1s to 2s Screwjab Dagger cooldown increased from 9s to 10s Screwjab Dagger T1 changed from -4s Cooldown to +1 Charge Screwjab Dagger T2 changed from +50 damage to -8% Bullet Resist, and -5% per Stack Screwjab Dagger T3 changed from +2s slow duration and -1 stamina to 40% CDR on hit Screwjab Dagger projectile speed increased from 3500 to 4200 Screwjab Dagger updated sfx Screwjab Dagger added a pitch incrementor to impact sound. The sound will slightly increment in pitch relative to each stack that gets applied to a target. Lethal Venom can now be cast on non-trooper enemies (neutrals and objectives) Lethal Venom T3 upgrade can now trigger on all enemies, including troopers Lethal Venom T3 build-up per shot reduced from 5 to 4.5 (a nerf) Slither is no longer leveled up by default at the start of the game Slither T3 changed from 20% resists to “180 health barrier when initiating a slide”, has 0.6 spirit scaling, lasts 5s and 8s cd. Slither now leaves a green trail Warden Last Stand DPS spirit scaling reduced from 1.45 to 1.3 Fire rate spirit scaling increased from 0.22 to 0.25 Wraith Base bullet damage increased from 5.115 to 5.4 Bullet damage growth per boon reduced from 0.175 to 0.155 Card Trick delay reduced from 0.75 to 0.7 Soul Urn Carriers now have +30% bullet and +30% spirit Resist Movespeed bonus reduced from +7m to +3.5m Damage taken when holding too long increased from 1% to 1.5% Max Health per second Headshot Booster Damage reduced from 50 to 45 Mystic Shot Damage reduced from 60 to 55 Cultist Sacrifice Fire Rate reduced from 10% to 8% Health boon scaling reduced from 7 to 4 Health reduced from 100 to 75 Cooldown increased from 250s to 260s Spirit Rend Debuff duration increased from 7s to 8s Cooldown reduced from 2.5s to 2.25s Toxic Bullets Burn increased from 2.1% to 2.2% Blood Tribute Heal reduction reduced from -40% to -30% Tesla Bullets Fixed proc rate being improved with general cooldown reduction Capacitor Fixed proc rate being improved with general cooldown reduction Shadow Weave Spotted radius reduced from 26m to 20m Spiritual Overflow No longer grants +20% Ability Duration on proc Now grants +20% Cooldown Reduction on proc Extra Health Bonus Health increased from 175 to 185 Sprint Boots Sprint increased from 2 to 2.25 (affects upgrades) Rebuttal Now grants +18% Melee Resistance Spirit Lifesteal Now provides +6 Spirit Power Restorative Locket Boon scaling increased from 0.3 to 0.4 Weapon Shielding Damage Threshold reduced from 175 to 150 Movespeed increased from 1.5 to 1.75 Spirit Shielding Movespeed increased from 1.5 to 1.75 Reactive Barrier Cooldown increased from 22s to 24s Veil Walker Heal reduced from 150 to 85 Heal scale per boon increased from 4 to 6 Cooldown increased from 12s to 15s Reveal on damage duration increased from 0.25s to 0.5s Initial invis fade duration increased from 0s to 0.25s Reveal on spotted duration increased from 0.25s to 1.25s Counterspell Parry duration reduced from 0.9s to 0.8s Majestic Leap Barrier reduced from 350 to 140 Barrier now scales with Boons (10 scaling) Rescue Beam Cast range increased from 28m to 32m Fury Trance Cooldown increased from 16s to 18s Spirit Resilience Spirit Resistance increased from 25% to 30% Cheat Death Damage output reduction reduced from -70% to -60% Healing reduction reduced from -70% to -60% Inhibitor Buildup rate increased (now matches Slowing Bullets buildup rate) No longer limited to hero only targets Unstoppable Duration increased from 5s to 5.5s Colossus Active resist increased from 30% to 35% Radius increased from 12m to 14m Spellbreaker Threshold increased from 150 to 175 Rusted Barrel Cast range increased from 28m to 32m Bullet Resistance reduction increased from -6% to -8% Mystic Burst Cooldown increased from 12s to 14s Quicksilver Reload Bonus damage reduced from 55 to 44 Cold Front Bonus damage reduced from 100 to 95 Cooldown increased from 24s to 25s Mystic Slow Now reduces dash distance by 10% (affects upgrades) Disarming Hex Cast range increased from 23m to 32m Silence Wave Silence duration reduced from 3.25s to 3s Spirit Snatch Melee damage reduced from 10% to 7% Greater Expansion Spirit Resist increased from 8% to 10% Spirit Burn Now goes on cooldown for half the normal time when used on non-heroes (rather than 0 cooldown)',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2025-09-18',
			to: '2025-10-02'
		},
		after: {
			from: '2025-10-03',
			to: '2025-10-17'
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
		title: 'Billy',
		id: 'billy'
	},
	{
		level: 3,
		title: 'Blasted',
		id: 'blasted'
	},
	{
		level: 2,
		title: 'Calico',
		id: 'calico'
	},
	{
		level: 3,
		title: 'Gloom Bombs',
		id: 'gloom-bombs'
	},
	{
		level: 3,
		title: 'Ava',
		id: 'ava'
	},
	{
		level: 3,
		title: 'Leaping Slash',
		id: 'leaping-slash'
	},
	{
		level: 3,
		title: 'Return to Shadows',
		id: 'return-to-shadows'
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
		title: "Stalker's Mark",
		id: 'stalker-s-mark'
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
		title: 'Charged Shot',
		id: 'charged-shot'
	},
	{
		level: 3,
		title: 'Rain of Arrows',
		id: 'rain-of-arrows'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Kudzu Bomb DPS',
		id: 'kudzu-bomb-dps'
	},
	{
		level: 3,
		title: 'Kudzu Bomb',
		id: 'kudzu-bomb'
	},
	{
		level: 3,
		title: 'Stone Form',
		id: 'stone-form'
	},
	{
		level: 3,
		title: 'Air Drop',
		id: 'air-drop'
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
		title: 'Mirage',
		id: 'mirage'
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
		title: 'Captivating Read',
		id: 'captivating-read'
	},
	{
		level: 3,
		title: 'Conjure Dragon',
		id: 'conjure-dragon'
	},
	{
		level: 3,
		title: 'Rallying Charge',
		id: 'rallying-charge'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Static Charge',
		id: 'static-charge'
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
		level: 2,
		title: 'Victor',
		id: 'victor'
	},
	{
		level: 3,
		title: 'Pain Battery',
		id: 'pain-battery'
	},
	{
		level: 3,
		title: 'Aura of Suffering',
		id: 'aura-of-suffering'
	},
	{
		level: 3,
		title: 'Shocking Reanimation',
		id: 'shocking-reanimation'
	},
	{
		level: 3,
		title: 'Pain Battery',
		id: 'pain-battery-1'
	},
	{
		level: 3,
		title: 'Jumpstart',
		id: 'jumpstart'
	},
	{
		level: 3,
		title: 'Aura of Suffering',
		id: 'aura-of-suffering-1'
	},
	{
		level: 3,
		title: 'Jumpstart',
		id: 'jumpstart-1'
	},
	{
		level: 3,
		title: 'Shocking Reanimation',
		id: 'shocking-reanimation-1'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Flight',
		id: 'flight'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate'
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
		title: 'Lethal Venom',
		id: 'lethal-venom'
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
		title: 'Last Stand DPS',
		id: 'last-stand-dps'
	},
	{
		level: 2,
		title: 'Wraith',
		id: 'wraith'
	},
	{
		level: 3,
		title: 'Card Trick',
		id: 'card-trick'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Blood Tribute',
		id: 'blood-tribute'
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
		title: 'Colossus',
		id: 'colossus'
	},
	{
		level: 2,
		title: 'Counterspell',
		id: 'counterspell'
	},
	{
		level: 2,
		title: 'Cultist Sacrifice',
		id: 'cultist-sacrifice'
	},
	{
		level: 2,
		title: 'Disarming Hex',
		id: 'disarming-hex'
	},
	{
		level: 2,
		title: 'Extra Health',
		id: 'extra-health'
	},
	{
		level: 2,
		title: 'Fury Trance',
		id: 'fury-trance'
	},
	{
		level: 2,
		title: 'Greater Expansion',
		id: 'greater-expansion'
	},
	{
		level: 2,
		title: 'Headshot Booster',
		id: 'headshot-booster'
	},
	{
		level: 2,
		title: 'Inhibitor',
		id: 'inhibitor'
	},
	{
		level: 2,
		title: 'Majestic Leap',
		id: 'majestic-leap'
	},
	{
		level: 2,
		title: 'Mystic Burst',
		id: 'mystic-burst'
	},
	{
		level: 2,
		title: 'Mystic Shot',
		id: 'mystic-shot'
	},
	{
		level: 2,
		title: 'Mystic Slow',
		id: 'mystic-slow'
	},
	{
		level: 2,
		title: 'Quicksilver Reload',
		id: 'quicksilver-reload'
	},
	{
		level: 2,
		title: 'Reactive Barrier',
		id: 'reactive-barrier'
	},
	{
		level: 2,
		title: 'Rebuttal',
		id: 'rebuttal'
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
		title: 'Rusted Barrel',
		id: 'rusted-barrel'
	},
	{
		level: 2,
		title: 'Shadow Weave',
		id: 'shadow-weave'
	},
	{
		level: 2,
		title: 'Silence Wave',
		id: 'silence-wave'
	},
	{
		level: 2,
		title: 'Soul Urn',
		id: 'soul-urn'
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
		title: 'Spirit Lifesteal',
		id: 'spirit-lifesteal'
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
		title: 'Spirit Snatch',
		id: 'spirit-snatch'
	},
	{
		level: 2,
		title: 'Spiritual Overflow',
		id: 'spiritual-overflow'
	},
	{
		level: 2,
		title: 'Sprint Boots',
		id: 'sprint-boots'
	},
	{
		level: 2,
		title: 'Tesla Bullets',
		id: 'tesla-bullets'
	},
	{
		level: 2,
		title: 'Toxic Bullets',
		id: 'toxic-bullets'
	},
	{
		level: 2,
		title: 'Unstoppable',
		id: 'unstoppable'
	},
	{
		level: 2,
		title: 'Veil Walker',
		id: 'veil-walker'
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
			from: '2025-09-18',
			to: '2025-10-02'
		},
		after: {
			from: '2025-10-03',
			to: '2025-10-17'
		},
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
			name: 'Seven',
			id: 'seven'
		},
		{
			kind: 'hero',
			name: 'Victor',
			id: 'victor'
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
			kind: 'item',
			name: 'Blood Tribute',
			id: 'blood-tribute'
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
			name: 'Colossus',
			id: 'colossus'
		},
		{
			kind: 'item',
			name: 'Counterspell',
			id: 'counterspell'
		},
		{
			kind: 'item',
			name: 'Cultist Sacrifice',
			id: 'cultist-sacrifice'
		},
		{
			kind: 'item',
			name: 'Disarming Hex',
			id: 'disarming-hex'
		},
		{
			kind: 'item',
			name: 'Extra Health',
			id: 'extra-health'
		},
		{
			kind: 'item',
			name: 'Fury Trance',
			id: 'fury-trance'
		},
		{
			kind: 'item',
			name: 'Greater Expansion',
			id: 'greater-expansion'
		},
		{
			kind: 'item',
			name: 'Headshot Booster',
			id: 'headshot-booster'
		},
		{
			kind: 'item',
			name: 'Inhibitor',
			id: 'inhibitor'
		},
		{
			kind: 'item',
			name: 'Majestic Leap',
			id: 'majestic-leap'
		},
		{
			kind: 'item',
			name: 'Mystic Burst',
			id: 'mystic-burst'
		},
		{
			kind: 'item',
			name: 'Mystic Shot',
			id: 'mystic-shot'
		},
		{
			kind: 'item',
			name: 'Mystic Slow',
			id: 'mystic-slow'
		},
		{
			kind: 'item',
			name: 'Quicksilver Reload',
			id: 'quicksilver-reload'
		},
		{
			kind: 'item',
			name: 'Reactive Barrier',
			id: 'reactive-barrier'
		},
		{
			kind: 'item',
			name: 'Rebuttal',
			id: 'rebuttal'
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
			name: 'Rusted Barrel',
			id: 'rusted-barrel'
		},
		{
			kind: 'item',
			name: 'Shadow Weave',
			id: 'shadow-weave'
		},
		{
			kind: 'item',
			name: 'Silence Wave',
			id: 'silence-wave'
		},
		{
			kind: 'item',
			name: 'Soul Urn',
			id: 'soul-urn'
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
			name: 'Spirit Lifesteal',
			id: 'spirit-lifesteal'
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
			name: 'Spirit Snatch',
			id: 'spirit-snatch'
		},
		{
			kind: 'item',
			name: 'Spiritual Overflow',
			id: 'spiritual-overflow'
		},
		{
			kind: 'item',
			name: 'Sprint Boots',
			id: 'sprint-boots'
		},
		{
			kind: 'item',
			name: 'Tesla Bullets',
			id: 'tesla-bullets'
		},
		{
			kind: 'item',
			name: 'Toxic Bullets',
			id: 'toxic-bullets'
		},
		{
			kind: 'item',
			name: 'Unstoppable',
			id: 'unstoppable'
		},
		{
			kind: 'item',
			name: 'Veil Walker',
			id: 'veil-walker'
		},
		{
			kind: 'item',
			name: 'Weapon Shielding',
			id: 'weapon-shielding'
		}
	],
	related: []
};
function _0_02_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Weapon Investment bonus increased from 7/9/13/20/29/40/58/72/83/93% to 7/9/13/20/29/40/60/75/95/115 (for 0.8/1.6/2.4/3.2/4.8/7.2/9.6/16/22.4/28.8k spent)</li><li>Applying a CC to an enemy is reduced in duration when affected by other CCs in a short interval. Each previously applied CC reduces the duration by 7% up to a max of 21% over the past 7 seconds. CC is defined as the same set of debuffs that affect Reactive Barrier (stun, sleep, immobilize, tether, etc). Note that abilities that apply multiple things only count as one CC (aka Abrams shoulder charge CC on the grab and the stun, Lash ult grab and stun, etc).</li><li>Matchmaking updates to include more considerations for a balanced roster beyond only frontliners</li><li>Reduced shooting lock-out period when jumping from 0.15s to 0.0s</li><li>Shooting while jumping now applies a -10% inaccuracy period for 0.15s after jumping</li><li>Wall Jumps after the first one now cost 0.5 stamina (first wall jump per sequence is free)</li><li>Reduced corner boosting velocity by 20%</li><li>Mid Boss base HP increased from 12500 to 13000</li><li>Mid Boss damage resistance per second reduced from 50 + 7/min to 35 + 5/min</li><li>Rejuv bonus HP reduced from 15% to 10%</li><li>2nd Midboss rejuv credits reduced from 4 to 3</li><li>Dropped Unsecured soul bags now require a Heavy Melee to secure rather than standing ontop of them</li><li>Added an extra boon at 12k (nearby boon levels adjusted slightly, 10.2/11.6/13.2k to 10/11/12/13.2k)</li><li>Neutral Shop no longer gets disabled if an enemy is nearby</li><li>Distance to attack Walkers reduced from 35m to 34m</li><li>Fixed ordering issues with various items with Bullet based Procs. Debuffs (ie. negative Bullet Resist) from all procs are now applied before any bonus damage from the procs. Items include Weakening Headshot, Crippling Headshot, Headshot Booster, Headhunter, Hollow Point and Mystic Shot.</li><li>Enabled input buffering for shooting, dashing, melee and parry. This allows input to register before the current action is finished</li><li>High Velocity Rounds: Bullet Velocity increased from +35% to +45% (reflected through upgrades as well)</li><li>Backstabber: Cooldown increased from 5s to 6s</li><li>Cutlist Sacrifice: Fire Rate boon scaling reduced from 0.8 to 0.7</li><li>Diviner’s Kevlar: Duration increased from 13s to 20s</li><li>Diviner’s Kevlar: Spirit Power increased from +25 to +35</li><li>Fixed Wall Jumps not refunding stamina if a mantle or zipline occurs within the refund window (similar to how we treat other stamina refunds)</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_0_02_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Siphon Life damage and spirit scaling reduced by 10%</li><li>Siphon Life heal ratio increased by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Shoulder Charge T1 changed from +25% Weapon Power to +20 Bullet Damage Per Shot (results in a weaker followup melee hit)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n<ul><li>Add footsteps to Billy&#x27;s out of combat run animations</li><li>Base move speed reduced from 7.3 to 7.1</li></ul>\n')} <div class="ability blasted">${html('\n<p><a href="/ability/blasted"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_blasted.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Blasted change history</a></p>\n<h4 id="blasted"><a href="/ability/blasted">Blasted</a></h4>\n<ul><li>Blasted T1 movespeed increased from +1.75 to +2.25m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Blasted'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n<ul><li>Base bullet damage increased from 1.9 to 2.0</li></ul>\n')} <div class="ability gloom-bombs">${html('\n<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bombs change history</a></p>\n<h4 id="gloom-bombs"><a href="/ability/gloom-bombs">Gloom Bombs</a></h4>\n')} <ul><li>${html('Gloom Bombs radius increased from 2.5m to 3m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Gloom Bombs radius increased from 2.5m to 3m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Gloom Bombs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ava">${html('\n<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>\n<h4 id="ava"><a href="/ability/ava">Ava</a></h4>\n<ul><li>Ava duration increased from 14s to 16s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Ava'
	});
	$$renderer.push(
		`<!----></div> <div class="ability leaping-slash">${html('\n<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>\n<h4 id="leaping-slash"><a href="/ability/leaping-slash">Leaping Slash</a></h4>\n<ul><li>Leaping Slash height increased from 1.5m to 2.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Leaping Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability return-to-shadows">${html('\n<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return to Shadows change history</a></p>\n<h4 id="return-to-shadows"><a href="/ability/return-to-shadows">Return to Shadows</a></h4>\n')} <ul><li>${html('Return to Shadows cooldown reduced from 100s to 90s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 4,
		bulletIndex: 0,
		text: 'Return to Shadows cooldown reduced from 100s to 90s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Return to Shadows radius increased from 7m to 7.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 4,
		bulletIndex: 1,
		text: 'Return to Shadows radius increased from 7m to 7.5m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Return to Shadows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n')} <div class="ability doorway">${html('\n<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway change history</a></p>\n<h4 id="doorway"><a href="/ability/doorway">Doorway</a></h4>\n<ul><li>Doorway placement has been improved</li><li>Doorway can now be placed through veils again</li><li>Improved performance when placing Doorway</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Doorway'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n')} <div class="ability stalker-s-mark">${html('\n<p><a href="/ability/stalkers-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_stalkersmark.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stalker&#x27;s Mark change history</a></p>\n<h4 id="stalker-s-mark"><a href="/ability/stalkers-mark">Stalker&#x27;s Mark</a></h4>\n<ul><li>Stalker&#x27;s Mark new sound added for teleport precast</li><li>Stalker&#x27;s Mark replaced temp whizby sound with an updated version</li><li>Stalker&#x27;s Mark ambush cast delay increased from 0.0s to 0.35s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: "Stalker's Mark"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Kinetic Pulse height increased from 0.7m to 1.0m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n<ul><li>Rejuvenating Aurora spirit scaling per level increased from 0.372 to 0.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n<ul><li>Charged Shot spirit scaling reduced from 1.11 to 1.0</li><li>Charged Shot T3 spirit scaling reduced from 1.11 to 1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n<ul><li>Rain of Arrows no longer lingers the air benefits like unlimited air dash once the ability is canceled or runs out</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Bullet damage growth reduced from 0.15 to 0.11</li><li>Spirit scaling per boon increased from 1.1 to 1.2</li></ul>\n')} <div class="ability kudzu-bomb-dps">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb DPS change history</a></p>\n<h4 id="kudzu-bomb-dps"><a href="/ability/entangling-thorns">Kudzu Bomb DPS</a></h4>\n<ul><li>Kudzu Bomb DPS reduced from 55 to 50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Bomb DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-bomb">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb change history</a></p>\n<h4 id="kudzu-bomb"><a href="/ability/entangling-thorns">Kudzu Bomb</a></h4>\n<ul><li>Kudzu Bomb T3 DPS reduced from +46 to +40</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>\n<ul><li>Stone Form damage spirit scaling increased from 1.0 to 1.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop no longer grants allied bullet resistance (still grants barrier on drop)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero kelvin">\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Base bullet damage reduced from 18.9 to 17.8</li><li>Clip size reduced from 15 to 14</li><li>Spirit Power per boon increased from 1.1 to 1.3</li></ul>\n</div>\n')} <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability essence-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>\n<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>\n<ul><li>Essence Bomb spirit scaling increased from 1.07 to 1.22</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Essence Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n')} <ul><li>${html('Ground Strike range reduced from 11m to 10m')}</li> <li>${html('Ground Strike cooldown increased from 19s to 21s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Ground Strike cooldown increased from 19s to 21s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Ground Strike damage reduced from 70 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Ground Strike damage reduced from 70 to 60'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mina">${html('\n<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>\n<h3 id="mina"><a href="/hero/mina">Mina</a></h3>\n<ul><li>New heavy melee animation</li></ul>\n')} <div class="ability rake">${html('\n<p><a href="/ability/rake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_rake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rake change history</a></p>\n<h4 id="rake"><a href="/ability/rake">Rake</a></h4>\n')} <ul><li>${html('Rake now passively lets you float in the air with the umbrella for up to 2.5s with right click')}</li> <li>${html('Rake heal spirit scale reduced from 1.5 to 0.5')}</li> <li>${html('Rake T2 now also increases heal spirit scale by 1.0')}</li> <li>${html('Rake T3 damage increased from 6% to 7%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 1,
		bulletIndex: 3,
		text: 'Rake T3 damage increased from 6% to 7%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Rake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sanguine-retreat">${html('\n<p><a href="/ability/sanguine-retreat"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_sanguine_retreat.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sanguine Retreat change history</a></p>\n<h4 id="sanguine-retreat"><a href="/ability/sanguine-retreat">Sanguine Retreat</a></h4>\n')} <ul><li>${html('Sanguine Retreat cooldown increased from 27s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Sanguine Retreat cooldown increased from 27s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Sanguine Retreat'
	});
	$$renderer.push(
		`<!----></div> <div class="ability nox-nostra">${html('\n<p><a href="/ability/nox-nostra"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_nox_nostra.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Nox Nostra change history</a></p>\n<h4 id="nox-nostra"><a href="/ability/nox-nostra">Nox Nostra</a></h4>\n<ul><li>Nox Nostra now has 50% reduction in damage against objectives</li><li>Nox Nostra reduced the Cap on objective damage from the T3 from +50 Damage per Bat to +20 Damage (only a nerf against objectives)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Nox Nostra'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Djinn&#x27;s Mark is now affected by cooldown reduction</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n<ul><li>Bullet damage growth per boon increased from 0.063 to 0.07</li></ul>\n')} <div class="ability burrow">${html('\n<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>\n<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>\n<ul><li>Burrow bullet resistance reduced from 80% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Burrow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Combo duration reduced from 2.5s to 2.4s</li><li>Combo T2 duration reduced from 0.75s to 0.7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paige">${html('\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n<ul><li>Bullet projectile speed increased by 15%</li><li>Bullet damage growth per boon reduced from 0.8 to 0.66</li><li>Defend and Fight! duration increased from 5s to 7s</li><li>Defend and Fight! cooldown increased from 26s to 30s</li></ul>\n')} <div class="ability captivating-read">${html('\n<p><a href="/ability/captivating-read"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_blindinglight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Captivating Read change history</a></p>\n<h4 id="captivating-read"><a href="/ability/captivating-read">Captivating Read</a></h4>\n')} <ul><li>${html('Captivating Read reduced cooldown from 30s to 25s')}</li> <li>${html('Captivating Read moved the UI element to the bottom of the screen so it&#x27;s more noticeable when you get hit')}</li> <li>${html('Captivating Read radius increased from 7m to 7.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paige',
		groupIndex: 1,
		bulletIndex: 2,
		text: 'Captivating Read radius increased from 7m to 7.5m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Captivating Read'
	});
	$$renderer.push(
		`<!----></div> <div class="ability conjure-dragon">${html('\n<p><a href="/ability/bookwyrm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Conjure Dragon change history</a></p>\n<h4 id="conjure-dragon"><a href="/ability/bookwyrm">Conjure Dragon</a></h4>\n<ul><li>Conjure Dragon now properly applies burning effect below the dragon if the dragon is far off the ground</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Conjure Dragon'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rallying-charge">${html('\n<p><a href="/ability/rallying-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rallying Charge change history</a></p>\n<h4 id="rallying-charge"><a href="/ability/rallying-charge">Rallying Charge</a></h4>\n<ul><li>Rallying Charge damage reduced from 150 (+1.2) to 125 (+1.0)</li><li>Rallying Charge healing reduced from 150 (+2) to 125 (+1.6)</li><li>Rallying Charge both damage &amp; healing now grows as the horses travel, up to a max +100% of both at 350m</li><li>Rallying Charge increased horse speed from 1700 to 2000</li><li>Rallying Charge reduced knock-up speed from 800 to 600</li><li>Rallying Charge spawn-in time reduced from 0.15s to 0.05s to remove deadzone in front</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Rallying Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability static-charge">${html('\n<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>\n<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>\n<ul><li>Static Charge T2 reduced from +8m to +7m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Static Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability power-surge">${html('\n<p><a href="/ability/power-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Surge change history</a></p>\n<h4 id="power-surge"><a href="/ability/power-surge">Power Surge</a></h4>\n<ul><li>Power Surge spirit power scaling reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Power Surge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud’s Lightning Strike damage reduced from 90 to 75</li><li>Storm Cloud’s Lightning Strike spirit power reduced from 1.4 to 0.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n<ul><li>Base health changed from 680 (+41 per boon, max of 1992) to 720 (+39 per boon, max of 1968)</li></ul>\n')} <div class="ability pain-battery">${html('\n<p><a href="/ability/pain-battery"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_pain_battery.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pain Battery change history</a></p>\n<h4 id="pain-battery"><a href="/ability/pain-battery">Pain Battery</a></h4>\n<ul><li>Pain Battery fixed the bolts hitting world geometry more often than intended</li><li>Pain Battery damage required to charge up reduced from 50% max health to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Pain Battery'
	});
	$$renderer.push(
		`<!----></div> <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n<ul><li>Aura of Suffering reduced DPS spirit scaling on the minimum damage from 0.25 to 0.22 and on the maximum damage from 1.25 to 1.1</li><li>Aura of Suffering self damage reduced from 100% to 85%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n<ul><li>Shocking Reanimation increased stun duration from 1s to 1.5s</li><li>Shocking Reanimation damage spirit scaling increased from 1.8 to 2.0</li><li>Shocking Reanimation T1 changed from &quot;+10 spirit damage per bullet and 25% fire rate until reload&quot; to &quot;</li><li>Shocking Reanimation T3 changed from &quot;+200 damage and +3m radius&quot; to &quot;+10 spirit damage per bullet and 20% fire rate while the ability is on cooldown&quot;</li><li>Shocking Reanimation improved hit detection</li><li>Fixed Shocking Reanimation sometimes not hitting targets that are in the Z axis</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability pain-battery">${html('\n<p><a href="/ability/pain-battery"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_pain_battery.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pain Battery change history</a></p>\n<h4 id="pain-battery-1"><a href="/ability/pain-battery">Pain Battery</a></h4>\n<ul><li>Pain Battery T3 heal reduced from 20% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Pain Battery'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jumpstart">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>\n<h4 id="jumpstart"><a href="/ability/jumpstart">Jumpstart</a></h4>\n')} <ul><li>${html('Jumpstart cooldown increased from 22s to 23s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Jumpstart cooldown increased from 22s to 23s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering-1"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n')} <ul><li>${html('Aura of Suffering self damage can no longer be reduced by spirit resistance (same as Jumpstart)')}</li> <li>${html('Aura of Suffering self damage reduced from 85% to 80%')}</li> <li>${html('Aura of Suffering self damage reduced from 80% to 70%')}</li> <li>${html('Aura of Suffering radius reduced from 8m to 7.7m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 6,
		bulletIndex: 3,
		text: 'Aura of Suffering radius reduced from 8m to 7.7m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Aura of Suffering MinDPS, MaxDPS and spirit scaling increased by ~5-6%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jumpstart">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>\n<h4 id="jumpstart-1"><a href="/ability/jumpstart">Jumpstart</a></h4>\n<ul><li>Jumpstart duration increased from 4s to 4.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation-1"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n')} <ul><li>${html('Shocking Reanimation radius increased from 12m to 13m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 8,
		bulletIndex: 0,
		text: 'Shocking Reanimation radius increased from 12m to 13m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Base bullet damage increased from 11.4 to 11.8</li></ul>\n')} <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Flight duration increased from 13s to 15s</li><li>Flight T2 increased from 7s to 8s</li><li>Flight spirit damage scaling increased from 0.19 to 0.22</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n')} <ul><li>${html('Assassinate bonus damage spirit scaling increased from 1.4 to 1.7')}</li> <li>${html('Assassinate cooldown reduced from 60s to 50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Assassinate cooldown reduced from 60s to 50s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n<ul><li>Alt fire base damage reduced from 48 to 42</li><li>Alt fire damage growth increased from 1.25 to 1.6</li></ul>\n')} <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n')} <ul><li>${html('Splatter damage reduced from 80 to 70')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Splatter damage reduced from 80 to 70'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Splatter T1 increased from -5.75s to -6s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n')} <div class="ability screwjab-dagger">${html('\n<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>\n<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>\n')} <ul><li>${html('Screwjab Dagger has been reworked')}</li> <li>${html('Screwjab Dagger now stacks in both damage and slows the more daggers you hit against the same target')}</li> <li>${html('Screwjab Dagger is now charge-based, with a 4.5s time between charges. Starts with 2 charges.')}</li> <li>${html('Screwjab Dagger damage changed from 50 (+1) to 50 (+0.65) and 25 (+0.33) per stack')}</li> <li>${html('Screwjab Dagger has a max stack of 3 (shows in overhead)')}</li> <li>${html('Screwjab Dagger slow changed from 50% to 35% + 15% per stack')}</li> <li>${html('Screwjab Dagger slow duration increased from 1s to 2s')}</li> <li>${html('Screwjab Dagger cooldown increased from 9s to 10s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		groupIndex: 0,
		bulletIndex: 7,
		text: 'Screwjab Dagger cooldown increased from 9s to 10s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Screwjab Dagger T1 changed from -4s Cooldown to +1 Charge')}</li> <li>${html('Screwjab Dagger T2 changed from +50 damage to -8% Bullet Resist, and -5% per Stack')}</li> <li>${html('Screwjab Dagger T3 changed from +2s slow duration and -1 stamina to 40% CDR on hit')}</li> <li>${html('Screwjab Dagger projectile speed increased from 3500 to 4200')}</li> <li>${html('Screwjab Dagger updated sfx')}</li> <li>${html('Screwjab Dagger added a pitch incrementor to impact sound. The sound will slightly increment in pitch relative to each stack that gets applied to a target.')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Screwjab Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lethal-venom">${html('\n<p><a href="/ability/lethal-venom"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lethal Venom change history</a></p>\n<h4 id="lethal-venom"><a href="/ability/lethal-venom">Lethal Venom</a></h4>\n<ul><li>Lethal Venom can now be cast on non-trooper enemies (neutrals and objectives)</li><li>Lethal Venom T3 upgrade can now trigger on all enemies, including troopers</li><li>Lethal Venom T3 build-up per shot reduced from 5 to 4.5 (a nerf)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Lethal Venom'
	});
	$$renderer.push(
		`<!----></div> <div class="ability slither">${html('\n<p><a href="/ability/slither"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slither change history</a></p>\n<h4 id="slither"><a href="/ability/slither">Slither</a></h4>\n<ul><li>Slither is no longer leveled up by default at the start of the game</li><li>Slither T3 changed from 20% resists to “180 health barrier when initiating a slide”, has 0.6 spirit scaling, lasts 5s and 8s cd.</li><li>Slither now leaves a green trail</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Slither'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability last-stand-dps">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand DPS change history</a></p>\n<h4 id="last-stand-dps"><a href="/ability/last-stand">Last Stand DPS</a></h4>\n<ul><li>Last Stand DPS spirit scaling reduced from 1.45 to 1.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand DPS'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Fire rate spirit scaling increased from 0.22 to 0.25</li></ul>\n')}</div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n<ul><li>Base bullet damage increased from 5.115 to 5.4</li><li>Bullet damage growth per boon reduced from 0.175 to 0.155</li></ul>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Card Trick delay reduced from 0.75 to 0.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_0_02_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item blood-tribute">${html('\n<p><a href="/item/blood-tribute"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Blood Tribute patch history</a></p>\n<h3 id="blood-tribute"><a href="/item/blood-tribute">Blood Tribute</a></h3>\n<ul><li>Heal reduction reduced from -40% to -30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Blood Tribute',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item capacitor">${html('\n<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>\n<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>\n<ul><li>Fixed proc rate being improved with general cooldown reduction</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cheat-death">${html('\n<p><a href="/item/cheat-death"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cheat Death patch history</a></p>\n<h3 id="cheat-death"><a href="/item/cheat-death">Cheat Death</a></h3>\n<ul><li>Damage output reduction reduced from -70% to -60%</li><li>Healing reduction reduced from -70% to -60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cheat Death',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n')} <ul><li>${html('Bonus damage reduced from 100 to 95')}</li> <li>${html('Cooldown increased from 24s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 24s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item colossus">${html('\n<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>\n<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>\n')} <ul><li>${html('Active resist increased from 30% to 35%')}</li> <li>${html('Radius increased from 12m to 14m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Colossus',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Radius increased from 12m to 14m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Colossus',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item counterspell">${html('\n<p><a href="/item/counterspell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Counterspell patch history</a></p>\n<h3 id="counterspell"><a href="/item/counterspell">Counterspell</a></h3>\n<ul><li>Parry duration reduced from 0.9s to 0.8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Counterspell',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cultist-sacrifice">${html('\n<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>\n<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>\n')} <ul><li>${html('Fire Rate reduced from 10% to 8%')}</li> <li>${html('Health boon scaling reduced from 7 to 4')}</li> <li>${html('Health reduced from 100 to 75')}</li> <li>${html('Cooldown increased from 250s to 260s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Cooldown increased from 250s to 260s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item disarming-hex">${html('\n<p><a href="/item/disarming-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/disarming_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Disarming Hex patch history</a></p>\n<h3 id="disarming-hex"><a href="/item/disarming-hex">Disarming Hex</a></h3>\n<ul><li>Cast range increased from 23m to 32m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Disarming Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-health">${html('\n<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>\n<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>\n<ul><li>Bonus Health increased from 175 to 185</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Health',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fury-trance">${html('\n<p><a href="/item/fury-trance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fury_trance.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fury Trance patch history</a></p>\n<h3 id="fury-trance"><a href="/item/fury-trance">Fury Trance</a></h3>\n')} <ul><li>${html('Cooldown increased from 16s to 18s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Fury Trance',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 16s to 18s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fury Trance',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item greater-expansion">${html('\n<p><a href="/item/greater-expansion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Greater Expansion patch history</a></p>\n<h3 id="greater-expansion"><a href="/item/greater-expansion">Greater Expansion</a></h3>\n<ul><li>Spirit Resist increased from 8% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Greater Expansion',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n')} <ul><li>${html('Damage reduced from 50 to 45')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 50 to 45'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>Buildup rate increased (now matches Slowing Bullets buildup rate)</li><li>No longer limited to hero only targets</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>Barrier reduced from 350 to 140</li><li>Barrier now scales with Boons (10 scaling)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-burst">${html('\n<p><a href="/item/mystic-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Burst patch history</a></p>\n<h3 id="mystic-burst"><a href="/item/mystic-burst">Mystic Burst</a></h3>\n')} <ul><li>${html('Cooldown increased from 12s to 14s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Burst',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 12s to 14s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n')} <ul><li>${html('Damage reduced from 60 to 55')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage reduced from 60 to 55'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-slow">${html('\n<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>\n<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>\n<ul><li>Now reduces dash distance by 10% (affects upgrades)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Slow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item quicksilver-reload">${html('\n<p><a href="/item/quicksilver-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Quicksilver Reload patch history</a></p>\n<h3 id="quicksilver-reload"><a href="/item/quicksilver-reload">Quicksilver Reload</a></h3>\n<ul><li>Bonus damage reduced from 55 to 44</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Quicksilver Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n')} <ul><li>${html('Cooldown increased from 22s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 22s to 24s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rebuttal">${html('\n<p><a href="/item/rebuttal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rebuttal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rebuttal patch history</a></p>\n<h3 id="rebuttal"><a href="/item/rebuttal">Rebuttal</a></h3>\n<ul><li>Now grants +18% Melee Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rebuttal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n<ul><li>Cast range increased from 28m to 32m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Boon scaling increased from 0.3 to 0.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rusted-barrel">${html('\n<p><a href="/item/rusted-barrel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rusted Barrel patch history</a></p>\n<h3 id="rusted-barrel"><a href="/item/rusted-barrel">Rusted Barrel</a></h3>\n<ul><li>Cast range increased from 28m to 32m</li><li>Bullet Resistance reduction increased from -6% to -8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Spotted radius reduced from 26m to 20m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silence-wave">${html('\n<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>\n<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>\n<ul><li>Silence duration reduced from 3.25s to 3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item soul-urn">${html('\n<h3 id="soul-urn">Soul Urn</h3>\n<ul><li>Carriers now have +30% bullet and +30% spirit Resist</li><li>Movespeed bonus reduced from +7m to +3.5m</li><li>Damage taken when holding too long increased from 1% to 1.5% Max Health per second</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Soul Urn',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellbreaker">${html('\n<p><a href="/item/spellbreaker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellbreaker patch history</a></p>\n<h3 id="spellbreaker"><a href="/item/spellbreaker">Spellbreaker</a></h3>\n<ul><li>Threshold increased from 150 to 175</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellbreaker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-burn">${html('\n<p><a href="/item/spirit-burn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Burn patch history</a></p>\n<h3 id="spirit-burn"><a href="/item/spirit-burn">Spirit Burn</a></h3>\n<ul><li>Now goes on cooldown for half the normal time when used on non-heroes (rather than 0 cooldown)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Burn',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-lifesteal">${html('\n<p><a href="/item/spirit-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Lifesteal patch history</a></p>\n<h3 id="spirit-lifesteal"><a href="/item/spirit-lifesteal">Spirit Lifesteal</a></h3>\n<ul><li>Now provides +6 Spirit Power</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-rend">${html('\n<p><a href="/item/spirit-rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Rend patch history</a></p>\n<h3 id="spirit-rend"><a href="/item/spirit-rend">Spirit Rend</a></h3>\n')} <ul><li>${html('Debuff duration increased from 7s to 8s')}</li> <li>${html('Cooldown reduced from 2.5s to 2.25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Spirit Rend',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 2.5s to 2.25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Rend',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-resilience">${html('\n<p><a href="/item/spirit-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Resilience patch history</a></p>\n<h3 id="spirit-resilience"><a href="/item/spirit-resilience">Spirit Resilience</a></h3>\n<ul><li>Spirit Resistance increased from 25% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shielding">${html('\n<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>\n<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>\n<ul><li>Movespeed increased from 1.5 to 1.75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-snatch">${html('\n<p><a href="/item/spirit-snatch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Snatch patch history</a></p>\n<h3 id="spirit-snatch"><a href="/item/spirit-snatch">Spirit Snatch</a></h3>\n<ul><li>Melee damage reduced from 10% to 7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Snatch',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>No longer grants +20% Ability Duration on proc</li><li>Now grants +20% Cooldown Reduction on proc</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sprint-boots">${html('\n<p><a href="/item/sprint-boots"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sprint Boots patch history</a></p>\n<h3 id="sprint-boots"><a href="/item/sprint-boots">Sprint Boots</a></h3>\n<ul><li>Sprint increased from 2 to 2.25 (affects upgrades)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sprint Boots',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tesla-bullets">${html('\n<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>\n<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>\n<ul><li>Fixed proc rate being improved with general cooldown reduction</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tesla Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Burn increased from 2.1% to 2.2%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n<ul><li>Duration increased from 5s to 5.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n')} <ul><li>${html('Heal reduced from 150 to 85')}</li> <li>${html('Heal scale per boon increased from 4 to 6')}</li> <li>${html('Cooldown increased from 12s to 15s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown increased from 12s to 15s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Reveal on damage duration increased from 0.25s to 0.5s')}</li> <li>${html('Initial invis fade duration increased from 0s to 0.25s')}</li> <li>${html('Reveal on spotted duration increased from 0.25s to 1.25s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weapon-shielding">${html('\n<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>\n<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>\n<ul><li>Damage Threshold reduced from 175 to 150</li><li>Movespeed increased from 1.5 to 1.75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _0_02_mg as default, metadata, readingManifest, toc };
