import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/05-22.mg?embed=0
function _5_22_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Apollo',
			'Bebop',
			'Billy',
			'Calico',
			'Celeste',
			'Doorman',
			'Drifter',
			'Dynamo',
			'Graves',
			'Grey Talon',
			'Haze',
			'Holliday',
			'Infernus',
			'Kelvin',
			'Lash',
			'McGinnis',
			'Mina',
			'Mirage',
			'Mo &amp; Krill',
			'Paige',
			'Paradox',
			'Pocket',
			'Rem',
			'Seven',
			'Shiv',
			'Silver',
			'Venator',
			'Victor',
			'Viscous',
			'Vyper',
			'Warden',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2026/05-22.mg?embed=1
function _5_22_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Alchemical Fire',
			'Arcane Surge',
			'Arctic Blast',
			'Battle Vest',
			'Bullet Lifesteal',
			'Bullet Resist Shredder',
			'Capacitor',
			'Cold Front',
			'Counterspell',
			'Crippling Headshot',
			'Crushing Fists',
			'Cultist Sacrifice',
			'Debuff Reducer',
			'Decay',
			'Disarming Hex',
			'Dispel Magic',
			'Divine Barrier',
			'Escalating Resilience',
			'Extra Regen',
			'Fleetfoot',
			'Focus Lens',
			'Fortitude',
			'Frenzy',
			'Fury Trance',
			'Glass Cannon',
			'Golden Goose Egg',
			'Guardian Ward',
			'Healing Booster',
			'Healing Rite',
			'Heroic Aura',
			"Hunter's Aura",
			'Indomitable',
			'Infuser',
			'Juggernaut',
			'Leech',
			'Magic Carpet',
			'Majestic Leap',
			'Melee Charge',
			'Mercurial Magnum',
			'Mystic Regeneration',
			'Mystic Shot',
			'Mystic Slow',
			'Opening Rounds',
			'Radiant Regeneration',
			'Rapid Recharge',
			'Reactive Barrier',
			'Rebuttal',
			'Recharging Rush',
			'Restorative Locket',
			'Restorative Shot',
			'Return Fire',
			'Rusted Barrel',
			'Scourge',
			'Shadow Weave',
			'Sharpshooter',
			'Silencer',
			'Slowing Bullets',
			'Spellbreaker',
			'Spellslinger',
			'Spirit Lifesteal',
			'Spirit Shielding',
			'Spirit Snatch',
			'Spiritual Overflow',
			'Surge of Power',
			'Tesla Bullets',
			'Torment Pulse',
			'Toxic Bullets',
			'Unstoppable',
			'Vampiric Burst',
			'Veil Walker',
			'Vortex Web',
			'Weakening Headshot',
			'Weapon Shielding',
			'Weighted Shots',
			'Witchmail'
		]
	});
}
//#endregion
//#region changelogs/2026/05-22.mg
var metadata = {
	title: 'Gameplay Update - 05-22-2026',
	alias: '2026/gameplay-05-22',
	thread_id: '135477',
	steam_gid: '1833334318572828',
	published: '2026-05-22T21:51:02.000Z',
	author: 'simonne',
	author_image: '/assets/authors/deadlock.webp',
	major_update: false,
	content_text:
		'Base HP reduced by 10 for all heroes HP per boon reduced by 3 Guardians scaling resistance from +75%->-50% over 12 minutes to +50%->-50% (takes more damage early) Medium neutrals initial spawn time reduced from 6 minutes to 5 minutes Breakables spawn time increased from 2 minutes to 3 minutes Shrines are now invulnerable until one pair of Base Guardians are destroyed Backdoor removal linger duration reduced from 20s to 14s Knockup durations are now affected by debuff reduction Removed two jump pads from around the middle of the map that point to outwards (to the left and right respectively) Sliding no longer resets sprint speed Stamina Regeneration is reduced by 25% for 5s after using a Wall Jump. This does not trigger when out of combat or when mantling soon after. Bullet Velocity now stacks additively rather than diminishingly Medic trooper heal duration increased from 2s to 4s (same overall heal amount) When receiving multiple of the Medic trooper orb the duration will now be added ontop rather than stacking directly (so picking up 4 in a row will give the regen over 16s instead of over 4s, overall heal is the same just slower) Medic Trooper heal increased from 12% missing hp to 13% Fixed Parry FX not always matching state Base Guardian Bullet Resistance increased from 10% to 20% Shrine Bullet Resistance increased from 10% to 20% Tier 2 Bullet Resistance increased from 25% to 35% Midboss now starts spawned at the beginning of the game Total Damage Reduction debuffs now stack diminishingly rather than additively (Inhibitor, Fire Scarabs, etc) Movespeed diminish point increased from 11 to 12 (very slightly less aggressive diminishing scaling) Weapon Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 46/55/70/85 to 46/54/62/74/86 Vitality Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 38/42/46/50 to 38/42/46/50 (final two tiers shifted up by +4) Spirit Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 38/48/57/66 to 38/45/52/59/66 Fixed various item barrier durations not scaling with duration increases Walkers will interrupt a rocket barrage during the 1s windup if stomp becomes an option. Fixed a bug where walkers were spinning while lasering. Smoothed zipline grabbing to fix some jitter Added ropes to zipline binding (so if a player rebinds zipline to something other than SPACE it will also apply to mounting/dismounting ropes) Removed delay on ziplines when using alternative key binds Fixed the following abilities taking you out of zoom temporarily when cast: Blasted, Gloom Bombs, Shining Wonder, Call Bell, Luggage Cart, Stalker\'s Mark, Rejuvenating Aurora, Charged Shot, Powder Keg, Bounce Pad, Spirit Lasso, Napalm, Ice Path, Flog, Spectral Wall, Rake, Fire Scarabs, Scorn, Sand Blast, Time Wall, Paradoxical Swap, Barrage, Flying Cloak, Pillow Toss, Lightning Ball, Entangling Bola, Go For The Throat, Vexing Bolt, Consecrating Grenade, Gut Shot, Snap Trap, Ira Domini, Pain Battery, Jump Start, Flight, Crow Familiar, Lethal Venom, Petrifying Bola, Alchemical Flask, Card Trick, Capacitor, Restorative Locket, Healing Nova, Silence Wave, Magic Carpet, Refresher Fixed the following items and abilities not working through veils: Heroic Aura, Healing Rite, Healing Nova, Rescue Beam, Divine Barrier, Kudzu Connection, Cube, Tag Along, Lil Helpers, Guardian Ward, Scourge, Plot Armor We are experimenting with an alternate set of Urn mechanics. Please give us your thoughts on this after you\'ve played with it some. To pickup the Urn, rather than standing in place to channel, you now light or heavy melee the Urn to pick it up. The Urn is now always dropped off on top of the bridge on the middle of the map. Once dropped off, the Urn will go into a "Depositing" phase for a set amount of time, depending on which team the urn favors (3s/5s/10s for Favored/Neutral/Unfavored). While in the Depositing phase, the enemy team can Heavy Melee the urn to have their team claim it and cause it to switch sides. This adds +1.25s to that team\'s timer. If the urn is Favored or Unfavored (in a comeback state), then the Favored team will get +50% Bullet and Spirit Resist in a 60m radius around the urn while it is being carried, dropped or deposited. After 35s (aggregate time held per team), the carrier will start taking 5% Max HP damage per second (previously was 45s and 0.15% Max HP damage). Urn damage is lethal Like before, when the Urn is fumbled, it will wait 13s if there is a player within 25m. However afterwards, with this new version, it can no longer be picked up anymore and will very quickly run back to its spawn position. No longer silences you while carrying. You are still disarmed and movement silenced. No longer grants +30% Bullet and Spirit Resist while carrying it Area around deposting the urn is revealed (urn runner is also revealed as usual) The rules for Favored/Unfavored remain the same (+15% soul difference for the first urn at 10:00, +10% for all future urns) Souls are all instant after the deposit is complete All rewards are the same. The last person to contest the urn gets the +3 Golden Idol buffs, falling back to the original carrier if nobody contested it. Added a new T1 Vitality Item, Grit. Active grants you 200 Barrier for 4s duration. Innate grants 1 Out of Combat Regen. Cooldown: 60s. Upgrades to Weapon Shielding, Spirit Shielding, Reactive Barrier (these do not inherit the manual cast active) and Guardian Ward. Ballistic Enhancement: Now upgrades from Mystic Expansion Ballistic Enhancement: Ability Range increased from +20% to +22% Fixed the following Enhanced Items not maintaining their stats from components: Opening Rounds, Tankbuster, Kinetic Dash, Radiant Regeneration, Burst Fire, Veil Walker, Arcane Surge, Fury Trance, Leech Urn drop off point is moved from the above bridge in the mid lane to under the bridge in the side lane Urn timer extension when contested increased from 1.25s to 3s Urn deposit timers for favored/neutral/unfavored increased from 3/5/10s to 5/10/15s Urn comeback bullet and spirit resist auras reduced from 50% to 35% Urn pickup spot is now where the old comeback drop off spots were for when your team is behind Urn runner no longer has sprint disabled Urn runner now has max sprint acceleration Urn runner now gains +2m Sprint, +1 Stamina, +10% Dash Distance and +15% Stamina Regen Urn runner for the team that is behind now gains an extra +4m Sprint Urn collision radius increased by 20% Various smaller urn holding timers and variables adjusted to account for the new location Abrams Infernal Resilience T1 changed from "+1.5 Health Regen" to "+200 Max Health" Infernal Resilience T2 changed from "200 Max Health" to "+18% Melee Lifesteal" (40% effective vs non-heroes) Seismic Impact T2 increased from +0.7s Stun Duration to +0.8s Seismic Impact T3 Unstoppable duration increased from 5s to 6s Apollo Improved the hero\'s hitboxes (easier to hit) Base regen reduced from 2 to 1 Riposte no longer automatically dashes. It now grants you a sub ability immediately to target the hero you want to jump to for a brief duration (can target the enemy before the parry to buffer it). Cast range is 25m. Riposte no longer triggers on damage auras (things like Flame Dash) Riposte no longer triggers off of objective damage Flawless Advance hitbox reduced by 10% Bebop Bullet damage per boon reduced from 0.139 to 0.115 Exploding Uppercut T2 weapon damage reduced from +40% to +30% Sticky Bomb T2 increased from +75 Damage to +85 Billy Health per boon increased from +48 to +59 Bullet damage per boon reduced from 0.165 to 0.142 Rising Ram cooldown increased from 30s to 32s Rising Ram T2 increased from +0.3s Duration to +0.4s Rising Ram T3 increased from -10s Cooldown to -13s Calico Gloom Bomb T2 changed from "+75 Damage to Barriers" to "-5% Melee Resist for 5s Per Bomb" (stacks) Celeste Improved the hero\'s hitboxes (easier to hit) Stamina cooldown increased from 4.5s to 5s Radiant Daggers T2 changed from "-18s Cooldown and +70 Damage" to "-22s Cooldown and +80 Damage" Shining Wonder T2 increased from +50 Damage to +70 Doorman Call Bell radius reduced from 6m to 5.5m Call Bell T3 radius increased from +4m to +4.5m Call Bell explosion damage spirit scaling reduced from 1.4 to 1.3 Call Bell inaccuracy debuff no longer diminishes from 100% to 0% over 1 second (the rest of the debuff is 4s) Call Bell inaccuracy debuff reduced from -100% to -40% (lasts the full duration) Doorways close sub ability now starts on cooldown for 8s Doorway is no longer unsilenceable Fixed recent bug causing Luggage Cart not being dispelled Drifter Rend T3 no longer increases scaling by 0.4 Rend T3 now also deals Heavy Melee Damage (0.55 scale) Dynamo Kinetic Pulse T2 reduced from -18% Bullet Resistance to -15% Kinetic Pulse spirit scaling reduced from 1.65 to 1.55 Quantum Entanglement T3 changed from dispelling non-ult debuffs to reducing the duration of non-ult debuffs by 50% Graves Sprint speed increased from 1.6 to 2.2 Grasping Hands now spawns a ghoul in the base ability (T3 still increases it by 1) Updated dash ranges for Deadheads to be calculated from the center of Graves when they are following her Fixed Fire Rate buffs for Deadheads not being applied to their next attack, but only on subsequent attacks Fixed Deadheads being unable to dash through veils Fixed Deadheads being unable to dash to targets at the very end of your attack range when they are in follow mode Fixed Deadhead\'s damage taken from bullets being unaffected by fall-off Added 0.1s buffer duration for Deadheads losing line-of-sight before they stop following an enemy Fixed Deadheads becoming inactive if Graves dies while they are following her Jar of Dead spirit scaling reduced from 0.35 to 0.31 (they are better at dealing damage now) Increased speed & acceleration of Deadheads only when they are following Graves - doesn\'t affect in-combat Fixed certain projectiles (i.e Gray Talon\'s Bird) colliding with Deadheads Update Grave\'s melee to also set the dash target for Deadheads Bullet damage and growth reduced by -10% Grey Talon Rain of Arrows cooldown reduced from 30s to 22s Rain of Arrows cast delay reduced from 0.5s to 0.2s Rain of Arrows duration reduced from 7s to 4s Rain of Arrows moving ability in air improved Rain of Arrow stamina distance changed from being -9% to +25% Rain of Arrows Weapon Damage bonus reduced from +4 to +3 Rain of Arrows T1 changed from "-14s Cooldown" to "+3 Weapon Damage and +30% Slow for 1.5s" Rain of Arrows T2 changed from "+5 Weapon Damage and +40% Slow for 1.5s" to "-13s Cooldown" (Total CD from 16s to 9s) Haze Fixation T3 increased from +0.12 to +0.14 Holliday Base bullet damage increased from 18.8 to 19.7 Health regen increased from 1 to 2 Infernus Bullet size increased from 3 to 4 Concussive Combustion T3 increased from +0.75s Stun Duration to +0.9s Kelvin Frost Grenade damage spirit scaling reduced from 0.7 to 0.6 When interrupted on Ice Path, it no longer creates an ice path below him and instead lets him fall to the ground Arctic Beam DPS spirit scaling reduced from 0.5 to 0.38 Lash Bullet damage per boon reduced from 0.341 to 0.31 Ground Strike damage per meter spirit scaling increased from 0.0372 to 0.04 Grapple T2 bonus damage no longer stacks with itself, but instead refreshes the duration Grapple T3 now also grants +1 Charge McGinnis Bullet damage per boon increased from 0.17 to 0.18 Fixed Heavy Barrage not triggering Diviner\'s Kevlar Medicinal Specter radius increased from 5.5m to 6m Mina Innate -8% Debuff Resist Fixed Rake sometimes not working with high ping Love Bites T3 increased from -4s Cooldown to -5s Love Bites no longer applies the flat on hit damage to abilities (was doing 20% of its value on Nox Nostra) Nox Nostra T3 reduced from 1% Current HP to 0.5% Mirage Updated Djinn\'s Mark visuals Mo & Krill Getting hit with a melee no longer knocks you up when you are burrowed Sand Blast T3 increased from +1s Duration to +1.5s Paige Bookwyrm T2 improved from -8s Cooldown to -12s Rallying Charge T3 increased from +135 Damage to +160 Rallying Charge now has half cooldown if it hits no allies or enemies Paradox Time Wall T1 duration increased from +2.5s to +3.5s Time Wall T3 increased from +1 Charge to +2 Time Wall T3 Charge Delay reduced from 4s to 2s Kinetic Carbine T3 increased from +50% Max Damage Scaling to +55% Paradoxical Swap damage increased from 125 to 150 Pocket Flying Cloak T2 weapon damage duration reduced from 8s to 6s Affliction cooldown increased from 140s to 150s Rem Pillow Toss charge time reduced from 9s to 8s Pillow Toss T3 increased from +90 to +100 Damage Tag Along burst heal now also applies to secondary allies that you jump to Tag Along lingering heal duration reduced from 3s to 2s (values rebalanced to be the same overall heal just faster) Tag Along T2 Barrier and Item Duration/Range effectiveness increased from 25% to 35% Tag Along T3 now also increases Missing Health Heal from 0.03 to 0.05 and Regen Per Second from 0.66 to 1.0 Tag Along can now be cast through veils Reduced lockout period after ejecting from Tag Along from 1s to 0.3s Tag Along time to fly to your ally is now 50% faster Tag Along heal duration is now displayed on the hud as well as the healthbar icon Tag Along fixed specific abilities/items that could kill Rem while he\'s napping Tag Along now allows friendly auras to affect Rem Tag Along eject is no longer affected by debuff resistance and now launches upwards slightly more to prevent hitting the ground Tag Along eject no longer briefly restricts movement abilities and input Naptime now provides +30% damage reduction in the base ability (T3 still adds +50%) Seven Bullet damage growth reduced from 0.374 to 0.337 Crit reduction increased from 35% to 55% Shiv Slice and Dice T2 reduced from -8% Spirit Resist to -6% Bloodletting Deferred Damage Cleared reduced from 40% to 35% Bloodletting T3 increased from +45% Deferred Damage Cleared to +50% Killing Blow cooldown increased from 105s to 125s Killing Blow full rage damage bonus reduced from 14% to 12% Killing Blow T2 increased from +8% Full Rage Damage Bonus to +10% Killing Blow T2 now also reduces cooldown by -30s Silver Bullet Cycle Time reduced from 0.9s to 0.85s (overall DPS adjusted to remain the same) Entangling Bola no longer prevents you from jumping and mantling Entangling Bola T2 changed from "+0.75s Duration" to "-5s Cooldown" Entangling Bola T3 changed from "-5s Cooldown and Ricochet to 2 additional targets" to "+0.75s Duration and Ricochet to 2 additional targets" Lycan Curse Fire Rate reduced from 80% to 65% Lycan Curse Fire Rate spirit scaling increased from 0.25 to 0.45 Venator Health increased from 790+43/boon to 830+48/boon Hex-Lined Snap Trap T3 increased from +25% Damage Against Revealed Targets to +30% Hex-Lined Snap Trap T3 now also grants +1 Charge Victor Bullet damage reduced from 13+0.3135 to 12+0.26 Jumpstart T3 spirit scaling increased from +0.6 to +0.9 Aura of Suffering now does 50% damage to objectives Viscous Puddle Punch T1 now also increases damage by +20 Puddle Punch T2 no longer increases damage by +30 Puddle Punch T2 now also grants +40% Lifesteal (1/4th against non-heroes) Vyper Screwjab Dagger T2 bullet resist per stack from -5% to -6% Screwjab Dagger T3 now also increases max stacks by 2 Warden Bullet damage per boon reduced from 0.38 to 0.34 Willpower T3 debuff resistance now retroactively applies to existing debuffs when cast Binding Word T2 no longer increases cast range by +12m Yamato Power Slash post cast time reduced from 0.4s to 0.2s Power Slash spirit scaling increased from 1.86s to 2.1 Flying Slash range increased from 25m to 30m Flying Slash T2 no longer grants +20m Cast Range Flying Slash T3 now also grants +15m Cast Range Flying Slash T3 increased from +1 Charge to +2 Fixed Crimson Slash not being able to hit anything if the player is aimed too high or low Shadow Transformation T1 increased from +5 Weapon Damage to +7 Restorative Shot NPC Healing increased from 15 to 20 Melee Charge Cooldown reduced from 7s to 5s Active Reload Lifesteal increased from 14% to 16% Weakening Headshot Now works vs NPCs Fleetfoot Now grants +6% Weapon Damage Active slow resistance increased from 35% to 40% Opening Rounds Spirit Power reduced from +7 to +4 Slowing Bullets Dash Distance slow reduced from -25% to -22% Mystic Shot Spirit scaling increased from 1 to 1.2 Recharging Rush Cooldown increased from 24s to 25s Tesla Bullets Proc cooldown reduced from 0.25s to 0.2s Alchemical Fire Damage per Second spirit scaling increased from 0.152 to 0.2 Weighted Shots Dash Distance slow reduced from -25% to -22% Debuff resistance increased from 20% to 22% Shadow Weave Duration increased from 10s to 13s Ambush Fire Rate increased from 20% to 25% Ambush Spirit Power increased from 20 to 25 Ambush Melee Damage increased from 20% to 25% Escalating Resilience Max Ammo increased from 30% to 35% Weapon Damage increased from 15% to 18% Heroic Aura Radius increased from 30m to 35m Sharpshooter Now upgrades from High-Velocity Rounds (in addition to Long Range). Grants +60% Bullet Velocity. Long range weapon damage reduced from 70% to 60% Now has innate 10% Weapon Damage (from components) Hunter\'s Aura Fire Rate reduction increased from -14% to -15% Cultist Sacrifice Weapon Damage increased from 8% to 10% Weapon Damage boon scaling increased from 0.7 to 0.8 Bonus Souls increased from 170% to 180% Toxic Bullets No longer builds up from melee attacks Capacitor Proc cooldown reduced from 0.25s to 0.2s Crushing Fists Cooldown reduced from 7s to 5s Melee damage increased from 20% to 22% Frenzy Triggered debuff resistance increased from 30% to 40% Crippling Headshot Now works vs NPCs Spiritual Overflow Spirit Lifesteal moved from Active to Innate (reduced from 16% to 13%) Now builds from Spirit Lifesteal (gains the innates it has) Glass Cannon Max Health reduction reduced from -15% to -13% Silencer Spirit Resistance reduced from 15% to 12% Spellslinger Cooldown Reduction reduced from 6% to 5% Healing Rite Spirit scaling increased from 0.93 to 1.1 Extra Regen Regen reduced from 3 to 2.5 Out of Combat regen increased from 1 to 1.5 Rebuttal Parry cooldown reduced from -2s to -1.75s Debuff Reducer Now grants +90 Health Return Fire Duration increased from 6s to 6.5s Healing Booster Fixed various abilities and items not being boosted correctly Restorative Locket No longer has a minimum of 1 stamina restore Max stamina restored reduced from 4 to 3 Reactive Barrier Now grants +1 Out of Combat Regen (from components) Spirit Shielding No longer grants +1.75m Move Speed on activation Proc now also temporarily grants +18% Spirit Resistance (for the 8s duration) Weapon Shielding No longer grants +1.75m Move Speed on activation Proc now also temporarily grants +18% Bullet Resistance (for the 8s duration) Guardian Ward Barrier increased from 200 to 250 Cooldown increased from 45s to 60s Now grants +1.5 Out of Combat Regen (from components) Bullet Lifesteal Now grants +6% Weapon Damage Battle Vest Weapon Damage increased from 15% to 18% Dispel Magic Cooldown increased from 40s to 45s Spirit Lifesteal Bonus Health increased from +70 to +90 Fury Trance Active duration increased from 6s to 6.5s Gains the +6% Weapon Damage (from component) Fire Rate increased from 30% to 32% Majestic Leap Now grants +50% air control for the duration of the barrier Barrier boon scaling increased from 8 to 12 Fortitude Move speed increased from 1.25m to 1.5m Veil Walker Heal per boon increased from 6 to 8 Invisibility duration increased from 7s to 8s Counterspell Spirit Power reduced from +8 to +5 Divine Barrier Now grants +1.5 Out of Combat Regen (from components) Juggernaut Fire Rate reduction increased from -36% to -40% Move speed bonus increased from +2m to +2.5m Spellbreaker Now grants +90 Health (from components) Indomitable Barrier scaling increased from 1.8 to 2.0 Now has +2 Out of Combat Regen (from components) Bullet Resist increased from 8% to 10% Spirit Resist increased from 8% to 10% Witchmail Spirit Resist increased from 20% to 22% Unstoppable Cooldown reduced from 65s to 60s Infuser Duration increased from 6s to 7s Gains +6 Spirit Power (from components) Vampiric Burst Duration increased from 4.5s to 5s Now grants +6% Weapon Power (from components) Leech Updated bonus HP to match the components Golden Goose Egg Permanent buff from every 100 souls to every 80 Mystic Regeneration Regen duration increased from 6s to 7s Rusted Barrel Bonus health increased from 50 to 60 Cold Front Radius reduced from 12m to 10m Damage height increased from 5m to 7m Bullet Resist Shredder No longer grants +65 Bonus Health Bullet Resist increased from 8% to 9% Now grants +9% Weapon Damage Mystic Slow Bonus Health increased from +30 to +50 Arcane Surge Fixed various interaction bugs with different abilities Surge of Power Imbued Spirit Power increased from 24 to 25 Spirit Snatch Bonus damage spirit scaling increased from 0.744 to 0.84 Spirit Power Steal increased from 20 to 28 Decay Cooldown reduced from 32s to 30s Disarming Hex Duration increased from 4s to 4.25s Torment Pulse Melee Resist increased from 15% to 18% Radiant Regeneration Regen duration increased from 6s to 7s Rapid Recharge Spirit Power for Charged Abilities increased from +10 to +14 Magic Carpet Now innately grants -15% Gravity and Air Control by +25% Arctic Blast Slowed targets now have their stamina regen frozen for the 4s slow duration Radius increased from 12m to 16m Damage height increased from 5m to 7m No longer does 15% damage amp Immobilize increased from 0.75s to 1s Focus Lens Duration increased from 4s to 4.5s Scourge Debuff resist increased from 15% to 17% Mercurial Magnum Base Bullet Damage spirit scaling increased from 0.465 to 0.49 Vortex Web Fixed the debuff losing gravity modification when upgraded from Slowing Hex',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-05-08',
			to: '2026-05-22'
		},
		after: {
			from: '2026-05-23',
			to: '2026-05-28'
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
		title: 'Infernal Resilience',
		id: 'infernal-resilience'
	},
	{
		level: 3,
		title: 'Seismic Impact',
		id: 'seismic-impact'
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
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
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
		title: 'Gloom Bomb',
		id: 'gloom-bomb'
	},
	{
		level: 2,
		title: 'Celeste',
		id: 'celeste'
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
		title: 'Call Bell',
		id: 'call-bell'
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
		title: 'Kinetic Pulse',
		id: 'kinetic-pulse'
	},
	{
		level: 3,
		title: 'Quantum Entanglement',
		id: 'quantum-entanglement'
	},
	{
		level: 2,
		title: 'Graves',
		id: 'graves'
	},
	{
		level: 3,
		title: 'Grasping Hands',
		id: 'grasping-hands'
	},
	{
		level: 3,
		title: 'Jar of Dead',
		id: 'jar-of-dead'
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
		level: 2,
		title: 'Haze',
		id: 'haze'
	},
	{
		level: 3,
		title: 'Fixation',
		id: 'fixation'
	},
	{
		level: 2,
		title: 'Holliday',
		id: 'holliday'
	},
	{
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Concussive Combustion',
		id: 'concussive-combustion'
	},
	{
		level: 2,
		title: 'Kelvin',
		id: 'kelvin'
	},
	{
		level: 3,
		title: 'Frost Grenade',
		id: 'frost-grenade'
	},
	{
		level: 3,
		title: 'Ice Path',
		id: 'ice-path'
	},
	{
		level: 3,
		title: 'Arctic Beam DPS',
		id: 'arctic-beam-dps'
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
		title: 'Grapple',
		id: 'grapple'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 3,
		title: 'Medicinal Specter',
		id: 'medicinal-specter'
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
		title: 'Love Bites',
		id: 'love-bites'
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
		title: 'Sand Blast',
		id: 'sand-blast'
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
		title: 'Time Wall',
		id: 'time-wall'
	},
	{
		level: 3,
		title: 'Kinetic Carbine',
		id: 'kinetic-carbine'
	},
	{
		level: 3,
		title: 'Paradoxical Swap',
		id: 'paradoxical-swap'
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
		title: 'Affliction',
		id: 'affliction'
	},
	{
		level: 2,
		title: 'Rem',
		id: 'rem'
	},
	{
		level: 3,
		title: 'Pillow Toss',
		id: 'pillow-toss'
	},
	{
		level: 3,
		title: 'Tag Along',
		id: 'tag-along'
	},
	{
		level: 3,
		title: 'Naptime',
		id: 'naptime'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 2,
		title: 'Shiv',
		id: 'shiv'
	},
	{
		level: 3,
		title: 'Slice and Dice',
		id: 'slice-and-dice'
	},
	{
		level: 3,
		title: 'Bloodletting Deferred Damage Cleared',
		id: 'bloodletting-deferred-damage-cleared'
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
		level: 2,
		title: 'Silver',
		id: 'silver'
	},
	{
		level: 3,
		title: 'Entangling Bola',
		id: 'entangling-bola'
	},
	{
		level: 3,
		title: 'Lycan Curse Fire Rate',
		id: 'lycan-curse-fire-rate'
	},
	{
		level: 2,
		title: 'Venator',
		id: 'venator'
	},
	{
		level: 3,
		title: 'Hex-Lined Snap Trap',
		id: 'hex-lined-snap-trap'
	},
	{
		level: 2,
		title: 'Victor',
		id: 'victor'
	},
	{
		level: 3,
		title: 'Jumpstart',
		id: 'jumpstart'
	},
	{
		level: 3,
		title: 'Aura of Suffering',
		id: 'aura-of-suffering'
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
		title: 'Screwjab Dagger',
		id: 'screwjab-dagger'
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
		level: 3,
		title: 'Binding Word',
		id: 'binding-word'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Power Slash',
		id: 'power-slash'
	},
	{
		level: 3,
		title: 'Flying Slash',
		id: 'flying-slash'
	},
	{
		level: 3,
		title: 'Crimson Slash',
		id: 'crimson-slash'
	},
	{
		level: 3,
		title: 'Shadow Transformation',
		id: 'shadow-transformation'
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
		title: 'Battle Vest',
		id: 'battle-vest'
	},
	{
		level: 2,
		title: 'Bullet Lifesteal',
		id: 'bullet-lifesteal'
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
		title: 'Cold Front',
		id: 'cold-front'
	},
	{
		level: 2,
		title: 'Counterspell',
		id: 'counterspell'
	},
	{
		level: 2,
		title: 'Crippling Headshot',
		id: 'crippling-headshot'
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
		title: 'Disarming Hex',
		id: 'disarming-hex'
	},
	{
		level: 2,
		title: 'Dispel Magic',
		id: 'dispel-magic'
	},
	{
		level: 2,
		title: 'Divine Barrier',
		id: 'divine-barrier'
	},
	{
		level: 2,
		title: 'Escalating Resilience',
		id: 'escalating-resilience'
	},
	{
		level: 2,
		title: 'Extra Regen',
		id: 'extra-regen'
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
		title: 'Fortitude',
		id: 'fortitude'
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
		title: 'Golden Goose Egg',
		id: 'golden-goose-egg'
	},
	{
		level: 2,
		title: 'Guardian Ward',
		id: 'guardian-ward'
	},
	{
		level: 2,
		title: 'Healing Booster',
		id: 'healing-booster'
	},
	{
		level: 2,
		title: 'Healing Rite',
		id: 'healing-rite'
	},
	{
		level: 2,
		title: 'Heroic Aura',
		id: 'heroic-aura'
	},
	{
		level: 2,
		title: "Hunter's Aura",
		id: 'hunter-s-aura'
	},
	{
		level: 2,
		title: 'Indomitable',
		id: 'indomitable'
	},
	{
		level: 2,
		title: 'Infuser',
		id: 'infuser'
	},
	{
		level: 2,
		title: 'Juggernaut',
		id: 'juggernaut'
	},
	{
		level: 2,
		title: 'Leech',
		id: 'leech'
	},
	{
		level: 2,
		title: 'Magic Carpet',
		id: 'magic-carpet'
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
		title: 'Mystic Regeneration',
		id: 'mystic-regeneration'
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
		title: 'Opening Rounds',
		id: 'opening-rounds'
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
		title: 'Rebuttal',
		id: 'rebuttal'
	},
	{
		level: 2,
		title: 'Recharging Rush',
		id: 'recharging-rush'
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
		title: 'Silencer',
		id: 'silencer'
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
		title: 'Spellslinger',
		id: 'spellslinger'
	},
	{
		level: 2,
		title: 'Spirit Lifesteal',
		id: 'spirit-lifesteal'
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
		title: 'Surge of Power',
		id: 'surge-of-power'
	},
	{
		level: 2,
		title: 'Tesla Bullets',
		id: 'tesla-bullets'
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
		title: 'Unstoppable',
		id: 'unstoppable'
	},
	{
		level: 2,
		title: 'Vampiric Burst',
		id: 'vampiric-burst'
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
		title: 'Weakening Headshot',
		id: 'weakening-headshot'
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
	},
	{
		level: 2,
		title: 'Witchmail',
		id: 'witchmail'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-05-08',
			to: '2026-05-22'
		},
		after: {
			from: '2026-05-23',
			to: '2026-05-28'
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
			name: 'Apollo',
			id: 'apollo'
		},
		{
			kind: 'hero',
			name: 'Bebop',
			id: 'bebop'
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
			name: 'Graves',
			id: 'graves'
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
			name: 'Infernus',
			id: 'infernus'
		},
		{
			kind: 'hero',
			name: 'Kelvin',
			id: 'kelvin'
		},
		{
			kind: 'hero',
			name: 'Lash',
			id: 'lash'
		},
		{
			kind: 'hero',
			name: 'McGinnis',
			id: 'mcginnis'
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
			name: 'Victor',
			id: 'victor'
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
			name: 'Battle Vest',
			id: 'battle-vest'
		},
		{
			kind: 'item',
			name: 'Bullet Lifesteal',
			id: 'bullet-lifesteal'
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
			name: 'Cold Front',
			id: 'cold-front'
		},
		{
			kind: 'item',
			name: 'Counterspell',
			id: 'counterspell'
		},
		{
			kind: 'item',
			name: 'Crippling Headshot',
			id: 'crippling-headshot'
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
			name: 'Disarming Hex',
			id: 'disarming-hex'
		},
		{
			kind: 'item',
			name: 'Dispel Magic',
			id: 'dispel-magic'
		},
		{
			kind: 'item',
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: 'Escalating Resilience',
			id: 'escalating-resilience'
		},
		{
			kind: 'item',
			name: 'Extra Regen',
			id: 'extra-regen'
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
			name: 'Fortitude',
			id: 'fortitude'
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
			name: 'Golden Goose Egg',
			id: 'golden-goose-egg'
		},
		{
			kind: 'item',
			name: 'Guardian Ward',
			id: 'guardian-ward'
		},
		{
			kind: 'item',
			name: 'Healing Booster',
			id: 'healing-booster'
		},
		{
			kind: 'item',
			name: 'Healing Rite',
			id: 'healing-rite'
		},
		{
			kind: 'item',
			name: 'Heroic Aura',
			id: 'heroic-aura'
		},
		{
			kind: 'item',
			name: "Hunter's Aura",
			id: 'hunter-s-aura'
		},
		{
			kind: 'item',
			name: 'Indomitable',
			id: 'indomitable'
		},
		{
			kind: 'item',
			name: 'Infuser',
			id: 'infuser'
		},
		{
			kind: 'item',
			name: 'Juggernaut',
			id: 'juggernaut'
		},
		{
			kind: 'item',
			name: 'Leech',
			id: 'leech'
		},
		{
			kind: 'item',
			name: 'Magic Carpet',
			id: 'magic-carpet'
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
			name: 'Mystic Regeneration',
			id: 'mystic-regeneration'
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
			name: 'Opening Rounds',
			id: 'opening-rounds'
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
			name: 'Rebuttal',
			id: 'rebuttal'
		},
		{
			kind: 'item',
			name: 'Recharging Rush',
			id: 'recharging-rush'
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
			name: 'Silencer',
			id: 'silencer'
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
			name: 'Spellslinger',
			id: 'spellslinger'
		},
		{
			kind: 'item',
			name: 'Spirit Lifesteal',
			id: 'spirit-lifesteal'
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
			name: 'Surge of Power',
			id: 'surge-of-power'
		},
		{
			kind: 'item',
			name: 'Tesla Bullets',
			id: 'tesla-bullets'
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
			name: 'Unstoppable',
			id: 'unstoppable'
		},
		{
			kind: 'item',
			name: 'Vampiric Burst',
			id: 'vampiric-burst'
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
			name: 'Weakening Headshot',
			id: 'weakening-headshot'
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
		},
		{
			kind: 'item',
			name: 'Witchmail',
			id: 'witchmail'
		}
	],
	related: []
};
function _5_22_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<p><img src="https://clan.akamai.steamstatic.com/images/45164767/686d522ba79a25d36cf53ef92f7b0499501f7d2f.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>\n<ul><li>Base HP reduced by 10 for all heroes</li><li>HP per boon reduced by 3</li><li>Guardians scaling resistance from +75%-&gt;-50% over 12 minutes to +50%-&gt;-50% (takes more damage early)</li><li>Medium neutrals initial spawn time reduced from 6 minutes to 5 minutes</li><li>Breakables spawn time increased from 2 minutes to 3 minutes</li><li>Shrines are now invulnerable until one pair of Base Guardians are destroyed</li><li>Backdoor removal linger duration reduced from 20s to 14s</li><li>Knockup durations are now affected by debuff reduction</li><li>Removed two jump pads from around the middle of the map that point to outwards (to the left and right respectively)</li><li>Sliding no longer resets sprint speed</li><li>Stamina Regeneration is reduced by 25% for 5s after using a Wall Jump. This does not trigger when out of combat or when mantling soon after.</li><li>Bullet Velocity now stacks additively rather than diminishingly</li><li>Medic trooper heal duration increased from 2s to 4s (same overall heal amount)</li><li>When receiving multiple of the Medic trooper orb the duration will now be added ontop rather than stacking directly (so picking up 4 in a row will give the regen over 16s instead of over 4s, overall heal is the same just slower)</li><li>Medic Trooper heal increased from 12% missing hp to 13%</li><li>Fixed Parry FX not always matching state</li><li>Base Guardian Bullet Resistance increased from 10% to 20%</li><li>Shrine Bullet Resistance increased from 10% to 20%</li><li>Tier 2 Bullet Resistance increased from 25% to 35%</li><li>Midboss now starts spawned at the beginning of the game</li><li>Total Damage Reduction debuffs now stack diminishingly rather than additively (Inhibitor, Fire Scarabs, etc)</li><li>Movespeed diminish point increased from 11 to 12 (very slightly less aggressive diminishing scaling)</li><li>Weapon Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 46/55/70/85 to 46/54/62/74/86</li><li>Vitality Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 38/42/46/50 to 38/42/46/50 (final two tiers shifted up by +4)</li><li>Spirit Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 38/48/57/66 to 38/45/52/59/66</li><li>Fixed various item barrier durations not scaling with duration increases</li><li>Walkers will interrupt a rocket barrage during the 1s windup if stomp becomes an option.</li><li>Fixed a bug where walkers were spinning while lasering.</li><li>Smoothed zipline grabbing to fix some jitter</li><li>Added ropes to zipline binding (so if a player rebinds zipline to something other than SPACE it will also apply to mounting/dismounting ropes)</li><li>Removed delay on ziplines when using alternative key binds</li><li>Fixed the following abilities taking you out of zoom temporarily when cast: Blasted, Gloom Bombs, Shining Wonder, Call Bell, Luggage Cart, Stalker&#x27;s Mark, Rejuvenating Aurora, Charged Shot, Powder Keg, Bounce Pad, Spirit Lasso, Napalm, Ice Path, Flog, Spectral Wall, Rake, Fire Scarabs, Scorn, Sand Blast, Time Wall, Paradoxical Swap, Barrage, Flying Cloak, Pillow Toss, Lightning Ball, Entangling Bola, Go For The Throat, Vexing Bolt, Consecrating Grenade, Gut Shot, Snap Trap, Ira Domini, Pain Battery, Jump Start, Flight, Crow Familiar, Lethal Venom, Petrifying Bola, Alchemical Flask, Card Trick, Capacitor, Restorative Locket, Healing Nova, Silence Wave, Magic Carpet, Refresher</li><li>Fixed the following items and abilities not working through veils: Heroic Aura, Healing Rite, Healing Nova, Rescue Beam, Divine Barrier, Kudzu Connection, Cube, Tag Along, Lil Helpers, Guardian Ward, Scourge, Plot Armor</li><li>We are experimenting with an alternate set of Urn mechanics. Please give us your thoughts on this after you&#x27;ve played with it some.</li><li>To pickup the Urn, rather than standing in place to channel, you now light or heavy melee the Urn to pick it up.</li><li>The Urn is now always dropped off on top of the bridge on the middle of the map.</li><li>Once dropped off, the Urn will go into a &quot;Depositing&quot; phase for a set amount of time, depending on which team the urn favors (3s/5s/10s for Favored/Neutral/Unfavored).</li><li>While in the Depositing phase, the enemy team can Heavy Melee the urn to have their team claim it and cause it to switch sides. This adds +1.25s to that team&#x27;s timer.</li><li>If the urn is Favored or Unfavored (in a comeback state), then the Favored team will get +50% Bullet and Spirit Resist in a 60m radius around the urn while it is being carried, dropped or deposited.</li><li>After 35s (aggregate time held per team), the carrier will start taking 5% Max HP damage per second (previously was 45s and 0.15% Max HP damage).</li><li>Urn damage is lethal</li><li>Like before, when the Urn is fumbled, it will wait 13s if there is a player within 25m. However afterwards, with this new version, it can no longer be picked up anymore and will very quickly run back to its spawn position.</li><li>No longer silences you while carrying. You are still disarmed and movement silenced.</li><li>No longer grants +30% Bullet and Spirit Resist while carrying it</li><li>Area around deposting the urn is revealed (urn runner is also revealed as usual)</li><li>The rules for Favored/Unfavored remain the same (+15% soul difference for the first urn at 10:00, +10% for all future urns)</li><li>Souls are all instant after the deposit is complete</li><li>All rewards are the same. The last person to contest the urn gets the +3 Golden Idol buffs, falling back to the original carrier if nobody contested it.</li><li>Added a new T1 Vitality Item, Grit. Active grants you 200 Barrier for 4s duration. Innate grants 1 Out of Combat Regen. Cooldown: 60s. Upgrades to Weapon Shielding, Spirit Shielding, Reactive Barrier (these do not inherit the manual cast active) and Guardian Ward.</li><li>Ballistic Enhancement: Now upgrades from Mystic Expansion</li><li>Ballistic Enhancement: Ability Range increased from +20% to +22%</li><li>Fixed the following Enhanced Items not maintaining their stats from components: Opening Rounds, Tankbuster, Kinetic Dash, Radiant Regeneration, Burst Fire, Veil Walker, Arcane Surge, Fury Trance, Leech</li><li>Urn drop off point is moved from the above bridge in the mid lane to under the bridge in the side lane</li><li>Urn timer extension when contested increased from 1.25s to 3s</li><li>Urn deposit timers for favored/neutral/unfavored increased from 3/5/10s to 5/10/15s</li><li>Urn comeback bullet and spirit resist auras reduced from 50% to 35%</li><li>Urn pickup spot is now where the old comeback drop off spots were for when your team is behind</li><li>Urn runner no longer has sprint disabled</li><li>Urn runner now has max sprint acceleration</li><li>Urn runner now gains +2m Sprint, +1 Stamina, +10% Dash Distance and +15% Stamina Regen</li><li>Urn runner for the team that is behind now gains an extra +4m Sprint</li><li>Urn collision radius increased by 20%</li><li>Various smaller urn holding timers and variables adjusted to account for the new location</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_5_22_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience T1 changed from &quot;+1.5 Health Regen&quot; to &quot;+200 Max Health&quot;</li><li>Infernal Resilience T2 changed from &quot;200 Max Health&quot; to &quot;+18% Melee Lifesteal&quot; (40% effective vs non-heroes)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Seismic Impact T2 increased from +0.7s Stun Duration to +0.8s</li><li>Seismic Impact T3 Unstoppable duration increased from 5s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero apollo">${html('\n<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>\n<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>\n<ul><li>Improved the hero&#x27;s hitboxes (easier to hit)</li><li>Base regen reduced from 2 to 1</li></ul>\n')} <div class="ability riposte">${html('\n<p><a href="/ability/riposte"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Riposte change history</a></p>\n<h4 id="riposte"><a href="/ability/riposte">Riposte</a></h4>\n<ul><li>Riposte no longer automatically dashes. It now grants you a sub ability immediately to target the hero you want to jump to for a brief duration (can target the enemy before the parry to buffer it). Cast range is 25m.</li><li>Riposte no longer triggers on damage auras (things like Flame Dash)</li><li>Riposte no longer triggers off of objective damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Riposte'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>\n<h4 id="flawless-advance"><a href="/ability/flawless-advance">Flawless Advance</a></h4>\n<ul><li>Flawless Advance hitbox reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n<ul><li>Bullet damage per boon reduced from 0.139 to 0.115</li></ul>\n')} <div class="ability exploding-uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>\n<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>\n<ul><li>Exploding Uppercut T2 weapon damage reduced from +40% to +30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Exploding Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb T2 increased from +75 Damage to +85</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n<ul><li>Health per boon increased from +48 to +59</li><li>Bullet damage per boon reduced from 0.165 to 0.142</li></ul>\n')} <div class="ability rising-ram">${html('\n<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>\n<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>\n')} <ul><li>${html('Rising Ram cooldown increased from 30s to 32s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Billy',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Rising Ram cooldown increased from 30s to 32s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Rising Ram T2 increased from +0.3s Duration to +0.4s')}</li> <li>${html('Rising Ram T3 increased from -10s Cooldown to -13s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Rising Ram'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n')} <div class="ability gloom-bomb">${html('\n<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bomb change history</a></p>\n<h4 id="gloom-bomb"><a href="/ability/gloom-bombs">Gloom Bomb</a></h4>\n<ul><li>Gloom Bomb T2 changed from &quot;+75 Damage to Barriers&quot; to &quot;-5% Melee Resist for 5s Per Bomb&quot; (stacks)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Gloom Bomb'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero celeste">${html('\n<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>\n<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>\n<ul><li>Improved the hero&#x27;s hitboxes (easier to hit)</li><li>Stamina cooldown increased from 4.5s to 5s</li></ul>\n')} <div class="ability radiant-daggers">${html('\n<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>\n<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>\n<ul><li>Radiant Daggers T2 changed from &quot;-18s Cooldown and +70 Damage&quot; to &quot;-22s Cooldown and +80 Damage&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Radiant Daggers'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n<ul><li>Shining Wonder T2 increased from +50 Damage to +70</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n')} <div class="ability call-bell">${html('\n<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>\n<h4 id="call-bell"><a href="/ability/call-bell">Call Bell</a></h4>\n')} <ul><li>${html('Call Bell radius reduced from 6m to 5.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Call Bell radius reduced from 6m to 5.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Call Bell T3 radius increased from +4m to +4.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Call Bell T3 radius increased from +4m to +4.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Call Bell explosion damage spirit scaling reduced from 1.4 to 1.3')}</li> <li>${html('Call Bell inaccuracy debuff no longer diminishes from 100% to 0% over 1 second (the rest of the debuff is 4s)')}</li> <li>${html('Call Bell inaccuracy debuff reduced from -100% to -40% (lasts the full duration)')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Call Bell'
	});
	$$renderer.push(
		`<!----></div> <div class="ability doorway">${html('\n<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway change history</a></p>\n<h4 id="doorway"><a href="/ability/doorway">Doorway</a></h4>\n<ul><li>Doorways close sub ability now starts on cooldown for 8s</li><li>Doorway is no longer unsilenceable</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Doorway'
	});
	$$renderer.push(
		`<!----></div> <div class="ability luggage-cart">${html('\n<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>\n<h4 id="luggage-cart"><a href="/ability/luggage-cart">Luggage Cart</a></h4>\n<ul><li>Fixed recent bug causing Luggage Cart not being dispelled</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Luggage Cart'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n')} <div class="ability rend">${html('\n<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>\n<h4 id="rend"><a href="/ability/rend">Rend</a></h4>\n<ul><li>Rend T3 no longer increases scaling by 0.4</li><li>Rend T3 now also deals Heavy Melee Damage (0.55 scale)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Rend'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Kinetic Pulse T2 reduced from -18% Bullet Resistance to -15%</li><li>Kinetic Pulse spirit scaling reduced from 1.65 to 1.55</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n<ul><li>Quantum Entanglement T3 changed from dispelling non-ult debuffs to reducing the duration of non-ult debuffs by 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero graves">${html('\n<p><a href="/hero/graves"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Graves patch history</a></p>\n<h3 id="graves"><a href="/hero/graves">Graves</a></h3>\n<ul><li>Sprint speed increased from 1.6 to 2.2</li></ul>\n')} <div class="ability grasping-hands">${html('\n<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands change history</a></p>\n<h4 id="grasping-hands"><a href="/ability/grasping-hands">Grasping Hands</a></h4>\n<ul><li>Grasping Hands now spawns a ghoul in the base ability (T3 still increases it by 1)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Grasping Hands'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jar-of-dead">${html('\n<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>\n<h4 id="jar-of-dead"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>\n<ul><li>Updated dash ranges for Deadheads to be calculated from the center of Graves when they are following her</li><li>Fixed Fire Rate buffs for Deadheads not being applied to their next attack, but only on subsequent attacks</li><li>Fixed Deadheads being unable to dash through veils</li><li>Fixed Deadheads being unable to dash to targets at the very end of your attack range when they are in follow mode</li><li>Fixed Deadhead&#x27;s damage taken from bullets being unaffected by fall-off</li><li>Added 0.1s buffer duration for Deadheads losing line-of-sight before they stop following an enemy</li><li>Fixed Deadheads becoming inactive if Graves dies while they are following her</li><li>Jar of Dead spirit scaling reduced from 0.35 to 0.31 (they are better at dealing damage now)</li><li>Increased speed &amp; acceleration of Deadheads only when they are following Graves - doesn&#x27;t affect in-combat</li><li>Fixed certain projectiles (i.e Gray Talon&#x27;s Bird) colliding with Deadheads</li><li>Update Grave&#x27;s melee to also set the dash target for Deadheads</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Jar of Dead'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet damage and growth reduced by -10%</li></ul>\n')}</div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n')} <ul><li>${html('Rain of Arrows cooldown reduced from 30s to 22s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Rain of Arrows cooldown reduced from 30s to 22s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Rain of Arrows cast delay reduced from 0.5s to 0.2s')}</li> <li>${html('Rain of Arrows duration reduced from 7s to 4s')}</li> <li>${html('Rain of Arrows moving ability in air improved')}</li> <li>${html('Rain of Arrow stamina distance changed from being -9% to +25%')}</li> <li>${html('Rain of Arrows Weapon Damage bonus reduced from +4 to +3')}</li> <li>${html('Rain of Arrows T1 changed from &quot;-14s Cooldown&quot; to &quot;+3 Weapon Damage and +30% Slow for 1.5s&quot;')}</li> <li>${html('Rain of Arrows T2 changed from &quot;+5 Weapon Damage and +40% Slow for 1.5s&quot; to &quot;-13s Cooldown&quot; (Total CD from 16s to 9s)')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability fixation">${html('\n<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>\n<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>\n<ul><li>Fixation T3 increased from +0.12 to +0.14</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Fixation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero holliday">\n<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>\n<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>\n<ul><li>Base bullet damage increased from 18.8 to 19.7</li><li>Health regen increased from 1 to 2</li></ul>\n</div>\n')} <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n<ul><li>Bullet size increased from 3 to 4</li></ul>\n')} <div class="ability concussive-combustion">${html('\n<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>\n<h4 id="concussive-combustion"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>\n<ul><li>Concussive Combustion T3 increased from +0.75s Stun Duration to +0.9s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Concussive Combustion'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Frost Grenade damage spirit scaling reduced from 0.7 to 0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>When interrupted on Ice Path, it no longer creates an ice path below him and instead lets him fall to the ground</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div> <div class="ability arctic-beam-dps">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam DPS change history</a></p>\n<h4 id="arctic-beam-dps"><a href="/ability/arctic-beam">Arctic Beam DPS</a></h4>\n<ul><li>Arctic Beam DPS spirit scaling reduced from 0.5 to 0.38</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam DPS'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n<ul><li>Bullet damage per boon reduced from 0.341 to 0.31</li></ul>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Ground Strike damage per meter spirit scaling increased from 0.0372 to 0.04</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple">${html('\n<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>\n<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>\n<ul><li>Grapple T2 bonus damage no longer stacks with itself, but instead refreshes the duration</li><li>Grapple T3 now also grants +1 Charge</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Grapple'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n<ul><li>Bullet damage per boon increased from 0.17 to 0.18</li></ul>\n')} <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n<ul><li>Fixed Heavy Barrage not triggering Diviner&#x27;s Kevlar</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n')} <ul><li>${html('Medicinal Specter radius increased from 5.5m to 6m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Medicinal Specter radius increased from 5.5m to 6m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mina">${html('\n<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>\n<h3 id="mina"><a href="/hero/mina">Mina</a></h3>\n<ul><li>Innate -8% Debuff Resist</li></ul>\n')} <div class="ability rake">${html('\n<p><a href="/ability/rake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_rake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rake change history</a></p>\n<h4 id="rake"><a href="/ability/rake">Rake</a></h4>\n<ul><li>Fixed Rake sometimes not working with high ping</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Rake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability love-bites">${html('\n<p><a href="/ability/love-bites"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_love_bites.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Love Bites change history</a></p>\n<h4 id="love-bites"><a href="/ability/love-bites">Love Bites</a></h4>\n<ul><li>Love Bites T3 increased from -4s Cooldown to -5s</li><li>Love Bites no longer applies the flat on hit damage to abilities (was doing 20% of its value on Nox Nostra)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Love Bites'
	});
	$$renderer.push(
		`<!----></div> <div class="ability nox-nostra">${html('\n<p><a href="/ability/nox-nostra"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_nox_nostra.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Nox Nostra change history</a></p>\n<h4 id="nox-nostra"><a href="/ability/nox-nostra">Nox Nostra</a></h4>\n<ul><li>Nox Nostra T3 reduced from 1% Current HP to 0.5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Nox Nostra'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Updated Djinn&#x27;s Mark visuals</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n<ul><li>Getting hit with a melee no longer knocks you up when you are burrowed</li></ul>\n')} <div class="ability sand-blast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>\n<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>\n<ul><li>Sand Blast T3 increased from +1s Duration to +1.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sand Blast'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paige">${html('\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n')} <div class="ability bookwyrm">${html('\n<p><a href="/ability/bookwyrm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bookwyrm change history</a></p>\n<h4 id="bookwyrm"><a href="/ability/bookwyrm">Bookwyrm</a></h4>\n<ul><li>Bookwyrm T2 improved from -8s Cooldown to -12s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Bookwyrm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rallying-charge">${html('\n<p><a href="/ability/rallying-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rallying Charge change history</a></p>\n<h4 id="rallying-charge"><a href="/ability/rallying-charge">Rallying Charge</a></h4>\n<ul><li>Rallying Charge T3 increased from +135 Damage to +160</li><li>Rallying Charge now has half cooldown if it hits no allies or enemies</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Rallying Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Time Wall T1 duration increased from +2.5s to +3.5s</li><li>Time Wall T3 increased from +1 Charge to +2</li><li>Time Wall T3 Charge Delay reduced from 4s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine T3 increased from +50% Max Damage Scaling to +55%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div> <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n')} <ul><li>${html('Paradoxical Swap damage increased from 125 to 150')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Paradoxical Swap damage increased from 125 to 150'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Flying Cloak T2 weapon damage duration reduced from 8s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n')} <ul><li>${html('Affliction cooldown increased from 140s to 150s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Affliction cooldown increased from 140s to 150s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero rem">${html('\n<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>\n<h3 id="rem"><a href="/hero/rem">Rem</a></h3>\n')} <div class="ability pillow-toss">${html('\n<p><a href="/ability/pillow-toss"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_pillow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pillow Toss change history</a></p>\n<h4 id="pillow-toss"><a href="/ability/pillow-toss">Pillow Toss</a></h4>\n<ul><li>Pillow Toss charge time reduced from 9s to 8s</li><li>Pillow Toss T3 increased from +90 to +100 Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Pillow Toss'
	});
	$$renderer.push(
		`<!----></div> <div class="ability tag-along">${html('\n<p><a href="/ability/tag-along"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_tag_along.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tag Along change history</a></p>\n<h4 id="tag-along"><a href="/ability/tag-along">Tag Along</a></h4>\n<ul><li>Tag Along burst heal now also applies to secondary allies that you jump to</li><li>Tag Along lingering heal duration reduced from 3s to 2s (values rebalanced to be the same overall heal just faster)</li><li>Tag Along T2 Barrier and Item Duration/Range effectiveness increased from 25% to 35%</li><li>Tag Along T3 now also increases Missing Health Heal from 0.03 to 0.05 and Regen Per Second from 0.66 to 1.0</li><li>Tag Along can now be cast through veils</li><li>Reduced lockout period after ejecting from Tag Along from 1s to 0.3s</li><li>Tag Along time to fly to your ally is now 50% faster</li><li>Tag Along heal duration is now displayed on the hud as well as the healthbar icon</li><li>Tag Along fixed specific abilities/items that could kill Rem while he&#x27;s napping</li><li>Tag Along now allows friendly auras to affect Rem</li><li>Tag Along eject is no longer affected by debuff resistance and now launches upwards slightly more to prevent hitting the ground</li><li>Tag Along eject no longer briefly restricts movement abilities and input</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Tag Along'
	});
	$$renderer.push(
		`<!----></div> <div class="ability naptime">${html('\n<p><a href="/ability/naptime"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Naptime change history</a></p>\n<h4 id="naptime"><a href="/ability/naptime">Naptime</a></h4>\n<ul><li>Naptime now provides +30% damage reduction in the base ability (T3 still adds +50%)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Naptime'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero seven">\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n<ul><li>Bullet damage growth reduced from 0.374 to 0.337</li><li>Crit reduction increased from 35% to 55%</li></ul>\n</div>\n')} <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n<ul><li>Slice and Dice T2 reduced from -8% Spirit Resist to -6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting-deferred-damage-cleared">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting Deferred Damage Cleared change history</a></p>\n<h4 id="bloodletting-deferred-damage-cleared"><a href="/ability/bloodletting">Bloodletting Deferred Damage Cleared</a></h4>\n<ul><li>Bloodletting Deferred Damage Cleared reduced from 40% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting Deferred Damage Cleared'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n<ul><li>Bloodletting T3 increased from +45% Deferred Damage Cleared to +50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n')} <ul><li>${html('Killing Blow cooldown increased from 105s to 125s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Killing Blow cooldown increased from 105s to 125s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Killing Blow full rage damage bonus reduced from 14% to 12%')}</li> <li>${html('Killing Blow T2 increased from +8% Full Rage Damage Bonus to +10%')}</li> <li>${html('Killing Blow T2 now also reduces cooldown by -30s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero silver">${html('\n<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>\n<h3 id="silver"><a href="/hero/silver">Silver</a></h3>\n<ul><li>Bullet Cycle Time reduced from 0.9s to 0.85s (overall DPS adjusted to remain the same)</li></ul>\n')} <div class="ability entangling-bola">${html('\n<p><a href="/ability/entangling-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_bola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Bola change history</a></p>\n<h4 id="entangling-bola"><a href="/ability/entangling-bola">Entangling Bola</a></h4>\n<ul><li>Entangling Bola no longer prevents you from jumping and mantling</li><li>Entangling Bola T2 changed from &quot;+0.75s Duration&quot; to &quot;-5s Cooldown&quot;</li><li>Entangling Bola T3 changed from &quot;-5s Cooldown and Ricochet to 2 additional targets&quot; to &quot;+0.75s Duration and Ricochet to 2 additional targets&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Entangling Bola'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse-fire-rate">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse Fire Rate change history</a></p>\n<h4 id="lycan-curse-fire-rate"><a href="/ability/lycan-curse">Lycan Curse Fire Rate</a></h4>\n<ul><li>Lycan Curse Fire Rate reduced from 80% to 65%</li><li>Lycan Curse Fire Rate spirit scaling increased from 0.25 to 0.45</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse Fire Rate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero venator">${html('\n<p><a href="/hero/venator"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Venator patch history</a></p>\n<h3 id="venator"><a href="/hero/venator">Venator</a></h3>\n<ul><li>Health increased from 790+43/boon to 830+48/boon</li></ul>\n')} <div class="ability hex-lined-snap-trap">${html('\n<p><a href="/ability/hex-lined-snap-trap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hex-Lined Snap Trap change history</a></p>\n<h4 id="hex-lined-snap-trap"><a href="/ability/hex-lined-snap-trap">Hex-Lined Snap Trap</a></h4>\n<ul><li>Hex-Lined Snap Trap T3 increased from +25% Damage Against Revealed Targets to +30%</li><li>Hex-Lined Snap Trap T3 now also grants +1 Charge</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Venator',
		ability: 'Hex-Lined Snap Trap'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n<ul><li>Bullet damage reduced from 13+0.3135 to 12+0.26</li></ul>\n')} <div class="ability jumpstart">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>\n<h4 id="jumpstart"><a href="/ability/jumpstart">Jumpstart</a></h4>\n<ul><li>Jumpstart T3 spirit scaling increased from +0.6 to +0.9</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n<ul><li>Aura of Suffering now does 50% damage to objectives</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Puddle Punch T1 now also increases damage by +20</li><li>Puddle Punch T2 no longer increases damage by +30</li><li>Puddle Punch T2 now also grants +40% Lifesteal (1/4th against non-heroes)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vyper">${html('\n<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>\n<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>\n')} <div class="ability screwjab-dagger">${html('\n<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>\n<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>\n<ul><li>Screwjab Dagger T2 bullet resist per stack from -5% to -6%</li><li>Screwjab Dagger T3 now also increases max stacks by 2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vyper',
		ability: 'Screwjab Dagger'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Bullet damage per boon reduced from 0.38 to 0.34</li></ul>\n')} <div class="ability willpower">${html('\n<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>\n<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>\n<ul><li>Willpower T3 debuff resistance now retroactively applies to existing debuffs when cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Willpower'
	});
	$$renderer.push(
		`<!----></div> <div class="ability binding-word">${html('\n<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>\n<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>\n<ul><li>Binding Word T2 no longer increases cast range by +12m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Binding Word'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash post cast time reduced from 0.4s to 0.2s</li><li>Power Slash spirit scaling increased from 1.86s to 2.1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-slash">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>\n<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>\n<ul><li>Flying Slash range increased from 25m to 30m</li><li>Flying Slash T2 no longer grants +20m Cast Range</li><li>Flying Slash T3 now also grants +15m Cast Range</li><li>Flying Slash T3 increased from +1 Charge to +2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n<ul><li>Fixed Crimson Slash not being able to hit anything if the player is aimed too high or low</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation T1 increased from +5 Weapon Damage to +7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_22_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n<ul><li>Lifesteal increased from 14% to 16%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Damage per Second spirit scaling increased from 0.152 to 0.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item arcane-surge">${html('\n<p><a href="/item/arcane-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arcane Surge patch history</a></p>\n<h3 id="arcane-surge"><a href="/item/arcane-surge">Arcane Surge</a></h3>\n<ul><li>Fixed various interaction bugs with different abilities</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Arcane Surge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item arctic-blast">${html('\n<p><a href="/item/arctic-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arctic_blast.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arctic Blast patch history</a></p>\n<h3 id="arctic-blast"><a href="/item/arctic-blast">Arctic Blast</a></h3>\n')} <ul><li>${html('Slowed targets now have their stamina regen frozen for the 4s slow duration')}</li> <li>${html('Radius increased from 12m to 16m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Arctic Blast',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Radius increased from 12m to 16m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Damage height increased from 5m to 7m')}</li> <li>${html('No longer does 15% damage amp')}</li> <li>${html('Immobilize increased from 0.75s to 1s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Arctic Blast',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item battle-vest">${html('\n<p><a href="/item/battle-vest"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/battle_vest.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Battle Vest patch history</a></p>\n<h3 id="battle-vest"><a href="/item/battle-vest">Battle Vest</a></h3>\n<ul><li>Weapon Damage increased from 15% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Battle Vest',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-lifesteal">${html('\n<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>\n<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>\n<ul><li>Now grants +6% Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resist-shredder">${html('\n<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>\n<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>\n<ul><li>No longer grants +65 Bonus Health</li><li>Bullet Resist increased from 8% to 9%</li><li>Now grants +9% Weapon Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resist Shredder',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item capacitor">${html('\n<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>\n<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>\n<ul><li>Proc cooldown reduced from 0.25s to 0.2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Capacitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n')} <ul><li>${html('Radius reduced from 12m to 10m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Radius reduced from 12m to 10m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Damage height increased from 5m to 7m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item counterspell">${html('\n<p><a href="/item/counterspell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Counterspell patch history</a></p>\n<h3 id="counterspell"><a href="/item/counterspell">Counterspell</a></h3>\n<ul><li>Spirit Power reduced from +8 to +5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Counterspell',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crippling-headshot">${html('\n<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>\n<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>\n<ul><li>Now works vs NPCs</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crippling Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crushing-fists">${html('\n<p><a href="/item/crushing-fists"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crushing Fists patch history</a></p>\n<h3 id="crushing-fists"><a href="/item/crushing-fists">Crushing Fists</a></h3>\n')} <ul><li>${html('Cooldown reduced from 7s to 5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Crushing Fists',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 7s to 5s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Melee damage increased from 20% to 22%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crushing Fists',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cultist-sacrifice">${html('\n<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>\n<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>\n<ul><li>Weapon Damage increased from 8% to 10%</li><li>Weapon Damage boon scaling increased from 0.7 to 0.8</li><li>Bonus Souls increased from 170% to 180%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item debuff-reducer">${html('\n<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>\n<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>\n<ul><li>Now grants +90 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Debuff Reducer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Cooldown reduced from 32s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 32s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item disarming-hex">${html('\n<p><a href="/item/disarming-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/disarming_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Disarming Hex patch history</a></p>\n<h3 id="disarming-hex"><a href="/item/disarming-hex">Disarming Hex</a></h3>\n<ul><li>Duration increased from 4s to 4.25s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Disarming Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item dispel-magic">${html('\n<p><a href="/item/dispel-magic"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_remover.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dispel Magic patch history</a></p>\n<h3 id="dispel-magic"><a href="/item/dispel-magic">Dispel Magic</a></h3>\n')} <ul><li>${html('Cooldown increased from 40s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Dispel Magic',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 40s to 45s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Dispel Magic',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>Now grants +1.5 Out of Combat Regen (from components)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>Max Ammo increased from 30% to 35%</li><li>Weapon Damage increased from 15% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-regen">${html('\n<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>\n<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>\n<ul><li>Regen reduced from 3 to 2.5</li><li>Out of Combat regen increased from 1 to 1.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Regen',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fleetfoot">${html('\n<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>\n<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>\n<ul><li>Now grants +6% Weapon Damage</li><li>Active slow resistance increased from 35% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item focus-lens">${html('\n<p><a href="/item/focus-lens"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/focus_lens.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Focus Lens patch history</a></p>\n<h3 id="focus-lens"><a href="/item/focus-lens">Focus Lens</a></h3>\n<ul><li>Duration increased from 4s to 4.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Focus Lens',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Move speed increased from 1.25m to 1.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Triggered debuff resistance increased from 30% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fury-trance">${html('\n<p><a href="/item/fury-trance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fury_trance.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fury Trance patch history</a></p>\n<h3 id="fury-trance"><a href="/item/fury-trance">Fury Trance</a></h3>\n<ul><li>Active duration increased from 6s to 6.5s</li><li>Gains the +6% Weapon Damage (from component)</li><li>Fire Rate increased from 30% to 32%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fury Trance',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item glass-cannon">${html('\n<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>\n<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>\n<ul><li>Max Health reduction reduced from -15% to -13%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Glass Cannon',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item golden-goose-egg">${html('\n<p><a href="/item/golden-goose-egg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/goose_egg.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Golden Goose Egg patch history</a></p>\n<h3 id="golden-goose-egg"><a href="/item/golden-goose-egg">Golden Goose Egg</a></h3>\n<ul><li>Permanent buff from every 100 souls to every 80</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Golden Goose Egg',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item guardian-ward">${html('\n<p><a href="/item/guardian-ward"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Guardian Ward patch history</a></p>\n<h3 id="guardian-ward"><a href="/item/guardian-ward">Guardian Ward</a></h3>\n')} <ul><li>${html('Barrier increased from 200 to 250')}</li> <li>${html('Cooldown increased from 45s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Guardian Ward',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 45s to 60s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Now grants +1.5 Out of Combat Regen (from components)')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Guardian Ward',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-booster">${html('\n<p><a href="/item/healing-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Booster patch history</a></p>\n<h3 id="healing-booster"><a href="/item/healing-booster">Healing Booster</a></h3>\n<ul><li>Fixed various abilities and items not being boosted correctly</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n<ul><li>Spirit scaling increased from 0.93 to 1.1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item heroic-aura">${html('\n<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>\n<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>\n')} <ul><li>${html('Radius increased from 30m to 35m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Heroic Aura',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Radius increased from 30m to 35m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Heroic Aura',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hunter-s-aura">${html('\n<p><a href="/item/hunters-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hunter&#x27;s Aura patch history</a></p>\n<h3 id="hunter-s-aura"><a href="/item/hunters-aura">Hunter&#x27;s Aura</a></h3>\n<ul><li>Fire Rate reduction increased from -14% to -15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Hunter's Aura",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item indomitable">${html('\n<p><a href="/item/indomitable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/indomitable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Indomitable patch history</a></p>\n<h3 id="indomitable"><a href="/item/indomitable">Indomitable</a></h3>\n<ul><li>Barrier scaling increased from 1.8 to 2.0</li><li>Now has +2 Out of Combat Regen (from components)</li><li>Bullet Resist increased from 8% to 10%</li><li>Spirit Resist increased from 8% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Indomitable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item infuser">${html('\n<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>\n<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>\n<ul><li>Duration increased from 6s to 7s</li><li>Gains +6 Spirit Power (from components)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Infuser',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item juggernaut">${html('\n<p><a href="/item/juggernaut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/juggernaut.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Juggernaut patch history</a></p>\n<h3 id="juggernaut"><a href="/item/juggernaut">Juggernaut</a></h3>\n<ul><li>Fire Rate reduction increased from -36% to -40%</li><li>Move speed bonus increased from +2m to +2.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Juggernaut',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>Updated bonus HP to match the components</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item magic-carpet">${html('\n<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>\n<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>\n<ul><li>Now innately grants -15% Gravity and Air Control by +25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Magic Carpet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>Now grants +50% air control for the duration of the barrier</li><li>Barrier boon scaling increased from 8 to 12</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n')} <ul><li>${html('Cooldown reduced from 7s to 5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 7s to 5s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mercurial-magnum">${html('\n<p><a href="/item/mercurial-magnum"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mercurial Magnum patch history</a></p>\n<h3 id="mercurial-magnum"><a href="/item/mercurial-magnum">Mercurial Magnum</a></h3>\n<ul><li>Base Bullet Damage spirit scaling increased from 0.465 to 0.49</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mercurial Magnum',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-regeneration">${html('\n<p><a href="/item/mystic-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Regeneration patch history</a></p>\n<h3 id="mystic-regeneration"><a href="/item/mystic-regeneration">Mystic Regeneration</a></h3>\n<ul><li>Regen duration increased from 6s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Regeneration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n<ul><li>Spirit scaling increased from 1 to 1.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-slow">${html('\n<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>\n<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>\n<ul><li>Bonus Health increased from +30 to +50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Slow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item opening-rounds">${html('\n<p><a href="/item/opening-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Opening Rounds patch history</a></p>\n<h3 id="opening-rounds"><a href="/item/opening-rounds">Opening Rounds</a></h3>\n<ul><li>Spirit Power reduced from +7 to +4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Opening Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item radiant-regeneration">${html('\n<p><a href="/item/radiant-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Radiant Regeneration patch history</a></p>\n<h3 id="radiant-regeneration"><a href="/item/radiant-regeneration">Radiant Regeneration</a></h3>\n<ul><li>Regen duration increased from 6s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Radiant Regeneration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-recharge">${html('\n<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>\n<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>\n<ul><li>Spirit Power for Charged Abilities increased from +10 to +14</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Recharge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item reactive-barrier">${html('\n<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>\n<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>\n<ul><li>Now grants +1 Out of Combat Regen (from components)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Reactive Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rebuttal">${html('\n<p><a href="/item/rebuttal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rebuttal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rebuttal patch history</a></p>\n<h3 id="rebuttal"><a href="/item/rebuttal">Rebuttal</a></h3>\n<ul><li>Parry cooldown reduced from -2s to -1.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rebuttal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item recharging-rush">${html('\n<p><a href="/item/recharging-rush"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Recharging Rush patch history</a></p>\n<h3 id="recharging-rush"><a href="/item/recharging-rush">Recharging Rush</a></h3>\n')} <ul><li>${html('Cooldown increased from 24s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Recharging Rush',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 24s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Recharging Rush',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>No longer has a minimum of 1 stamina restore</li><li>Max stamina restored reduced from 4 to 3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>NPC Healing increased from 15 to 20</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>Duration increased from 6s to 6.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rusted-barrel">${html('\n<p><a href="/item/rusted-barrel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rusted Barrel patch history</a></p>\n<h3 id="rusted-barrel"><a href="/item/rusted-barrel">Rusted Barrel</a></h3>\n<ul><li>Bonus health increased from 50 to 60</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item scourge">${html('\n<p><a href="/item/scourge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Scourge patch history</a></p>\n<h3 id="scourge"><a href="/item/scourge">Scourge</a></h3>\n<ul><li>Debuff resist increased from 15% to 17%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Scourge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Duration increased from 10s to 13s</li><li>Ambush Fire Rate increased from 20% to 25%</li><li>Ambush Spirit Power increased from 20 to 25</li><li>Ambush Melee Damage increased from 20% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Now upgrades from High-Velocity Rounds (in addition to Long Range). Grants +60% Bullet Velocity.</li><li>Long range weapon damage reduced from 70% to 60%</li><li>Now has innate 10% Weapon Damage (from components)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Spirit Resistance reduced from 15% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-bullets">${html('\n<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>\n<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>\n<ul><li>Dash Distance slow reduced from -25% to -22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellbreaker">${html('\n<p><a href="/item/spellbreaker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellbreaker patch history</a></p>\n<h3 id="spellbreaker"><a href="/item/spellbreaker">Spellbreaker</a></h3>\n<ul><li>Now grants +90 Health (from components)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellbreaker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellslinger">${html('\n<p><a href="/item/spellslinger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spell_slinger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellslinger patch history</a></p>\n<h3 id="spellslinger"><a href="/item/spellslinger">Spellslinger</a></h3>\n<ul><li>Cooldown Reduction reduced from 6% to 5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellslinger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-lifesteal">${html('\n<p><a href="/item/spirit-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Lifesteal patch history</a></p>\n<h3 id="spirit-lifesteal"><a href="/item/spirit-lifesteal">Spirit Lifesteal</a></h3>\n<ul><li>Bonus Health increased from +70 to +90</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shielding">${html('\n<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>\n<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>\n<ul><li>No longer grants +1.75m Move Speed on activation</li><li>Proc now also temporarily grants +18% Spirit Resistance (for the 8s duration)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-snatch">${html('\n<p><a href="/item/spirit-snatch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Snatch patch history</a></p>\n<h3 id="spirit-snatch"><a href="/item/spirit-snatch">Spirit Snatch</a></h3>\n<ul><li>Bonus damage spirit scaling increased from 0.744 to 0.84</li><li>Spirit Power Steal increased from 20 to 28</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Snatch',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Spirit Lifesteal moved from Active to Innate (reduced from 16% to 13%)</li><li>Now builds from Spirit Lifesteal (gains the innates it has)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n<ul><li>Imbued Spirit Power increased from 24 to 25</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tesla-bullets">${html('\n<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>\n<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>\n<ul><li>Proc cooldown reduced from 0.25s to 0.2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tesla Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item torment-pulse">${html('\n<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>\n<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>\n<ul><li>Melee Resist increased from 15% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Torment Pulse',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>No longer builds up from melee attacks</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n')} <ul><li>${html('Cooldown reduced from 65s to 60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 65s to 60s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vampiric-burst">${html('\n<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>\n<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>\n<ul><li>Duration increased from 4.5s to 5s</li><li>Now grants +6% Weapon Power (from components)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n<ul><li>Heal per boon increased from 6 to 8</li><li>Invisibility duration increased from 7s to 8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vortex-web">${html('\n<p><a href="/item/vortex-web"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/vortex_web.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vortex Web patch history</a></p>\n<h3 id="vortex-web"><a href="/item/vortex-web">Vortex Web</a></h3>\n<ul><li>Fixed the debuff losing gravity modification when upgraded from Slowing Hex</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vortex Web',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weakening-headshot">${html('\n<p><a href="/item/weakening-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weakening Headshot patch history</a></p>\n<h3 id="weakening-headshot"><a href="/item/weakening-headshot">Weakening Headshot</a></h3>\n<ul><li>Now works vs NPCs</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weakening Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weapon-shielding">${html('\n<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>\n<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>\n<ul><li>No longer grants +1.75m Move Speed on activation</li><li>Proc now also temporarily grants +18% Bullet Resistance (for the 8s duration)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weighted-shots">${html('\n<p><a href="/item/weighted-shots"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weighted Shots patch history</a></p>\n<h3 id="weighted-shots"><a href="/item/weighted-shots">Weighted Shots</a></h3>\n<ul><li>Dash Distance slow reduced from -25% to -22%</li><li>Debuff resistance increased from 20% to 22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weighted Shots',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item witchmail">${html('\n<p><a href="/item/witchmail"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/witchmail.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Witchmail patch history</a></p>\n<h3 id="witchmail"><a href="/item/witchmail">Witchmail</a></h3>\n<ul><li>Spirit Resist increased from 20% to 22%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Witchmail',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_22_mg as default, metadata, readingManifest, toc };
