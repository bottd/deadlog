import {
	I as ee,
	Ot as e,
	P as te,
	T as t,
	at as ne,
	g as n,
	it as r,
	st as i
} from './CSrylp8p.js';
import './xihTtKlq.js';
import './B7jpYZsL.js';
import './DGUGVeMZ.js';
import './Byt6hszL.js';
/* empty css        */ import { a, i as o, n as re } from './vWaTnxY_.js';
function ie(ee) {
	re(ee, {
		type: `hero`,
		names:
			`Abrams.Apollo.Bebop.Billy.Calico.Celeste.Doorman.Drifter.Dynamo.Graves.Grey Talon.Haze.Holliday.Infernus.Kelvin.Lash.McGinnis.Mina.Mirage.Mo &amp; Krill.Paige.Paradox.Pocket.Rem.Seven.Shiv.Silver.Venator.Victor.Viscous.Vyper.Warden.Yamato`.split(
				`.`
			)
	});
}
function ae(ee) {
	re(ee, {
		type: `item`,
		names:
			`Active Reload.Alchemical Fire.Arcane Surge.Arctic Blast.Battle Vest.Bullet Lifesteal.Bullet Resist Shredder.Capacitor.Cold Front.Counterspell.Crippling Headshot.Crushing Fists.Cultist Sacrifice.Debuff Reducer.Decay.Disarming Hex.Dispel Magic.Divine Barrier.Escalating Resilience.Extra Regen.Fleetfoot.Focus Lens.Fortitude.Frenzy.Fury Trance.Glass Cannon.Golden Goose Egg.Guardian Ward.Healing Booster.Healing Rite.Heroic Aura.Hunter's Aura.Indomitable.Infuser.Juggernaut.Leech.Magic Carpet.Majestic Leap.Melee Charge.Mercurial Magnum.Mystic Regeneration.Mystic Shot.Mystic Slow.Opening Rounds.Radiant Regeneration.Rapid Recharge.Reactive Barrier.Rebuttal.Recharging Rush.Restorative Locket.Restorative Shot.Return Fire.Rusted Barrel.Scourge.Shadow Weave.Sharpshooter.Silencer.Slowing Bullets.Spellbreaker.Spellslinger.Spirit Lifesteal.Spirit Shielding.Spirit Snatch.Spiritual Overflow.Surge of Power.Tesla Bullets.Torment Pulse.Toxic Bullets.Unstoppable.Vampiric Burst.Veil Walker.Vortex Web.Weakening Headshot.Weapon Shielding.Weighted Shots.Witchmail`.split(
				`.`
			)
	});
}
var oe = {
		title: `Gameplay Update - 05-22-2026`,
		alias: `2026/gameplay-05-22`,
		thread_id: `135477`,
		steam_gid: `1833334318572828`,
		published: `2026-05-22T21:51:02.000Z`,
		author: `simonne`,
		author_image: `/assets/authors/deadlock.webp`,
		major_update: !1,
		content_text: `Base HP reduced by 10 for all heroes HP per boon reduced by 3 Guardians scaling resistance from +75%->-50% over 12 minutes to +50%->-50% (takes more damage early) Medium neutrals initial spawn time reduced from 6 minutes to 5 minutes Breakables spawn time increased from 2 minutes to 3 minutes Shrines are now invulnerable until one pair of Base Guardians are destroyed Backdoor removal linger duration reduced from 20s to 14s Knockup durations are now affected by debuff reduction Removed two jump pads from around the middle of the map that point to outwards (to the left and right respectively) Sliding no longer resets sprint speed Stamina Regeneration is reduced by 25% for 5s after using a Wall Jump. This does not trigger when out of combat or when mantling soon after. Bullet Velocity now stacks additively rather than diminishingly Medic trooper heal duration increased from 2s to 4s (same overall heal amount) When receiving multiple of the Medic trooper orb the duration will now be added ontop rather than stacking directly (so picking up 4 in a row will give the regen over 16s instead of over 4s, overall heal is the same just slower) Medic Trooper heal increased from 12% missing hp to 13% Fixed Parry FX not always matching state Base Guardian Bullet Resistance increased from 10% to 20% Shrine Bullet Resistance increased from 10% to 20% Tier 2 Bullet Resistance increased from 25% to 35% Midboss now starts spawned at the beginning of the game Total Damage Reduction debuffs now stack diminishingly rather than additively (Inhibitor, Fire Scarabs, etc) Movespeed diminish point increased from 11 to 12 (very slightly less aggressive diminishing scaling) Weapon Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 46/55/70/85 to 46/54/62/74/86 Vitality Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 38/42/46/50 to 38/42/46/50 (final two tiers shifted up by +4) Spirit Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 38/48/57/66 to 38/45/52/59/66 Fixed various item barrier durations not scaling with duration increases Walkers will interrupt a rocket barrage during the 1s windup if stomp becomes an option. Fixed a bug where walkers were spinning while lasering. Smoothed zipline grabbing to fix some jitter Added ropes to zipline binding (so if a player rebinds zipline to something other than SPACE it will also apply to mounting/dismounting ropes) Removed delay on ziplines when using alternative key binds Fixed the following abilities taking you out of zoom temporarily when cast: Blasted, Gloom Bombs, Shining Wonder, Call Bell, Luggage Cart, Stalker's Mark, Rejuvenating Aurora, Charged Shot, Powder Keg, Bounce Pad, Spirit Lasso, Napalm, Ice Path, Flog, Spectral Wall, Rake, Fire Scarabs, Scorn, Sand Blast, Time Wall, Paradoxical Swap, Barrage, Flying Cloak, Pillow Toss, Lightning Ball, Entangling Bola, Go For The Throat, Vexing Bolt, Consecrating Grenade, Gut Shot, Snap Trap, Ira Domini, Pain Battery, Jump Start, Flight, Crow Familiar, Lethal Venom, Petrifying Bola, Alchemical Flask, Card Trick, Capacitor, Restorative Locket, Healing Nova, Silence Wave, Magic Carpet, Refresher Fixed the following items and abilities not working through veils: Heroic Aura, Healing Rite, Healing Nova, Rescue Beam, Divine Barrier, Kudzu Connection, Cube, Tag Along, Lil Helpers, Guardian Ward, Scourge, Plot Armor We are experimenting with an alternate set of Urn mechanics. Please give us your thoughts on this after you've played with it some. To pickup the Urn, rather than standing in place to channel, you now light or heavy melee the Urn to pick it up. The Urn is now always dropped off on top of the bridge on the middle of the map. Once dropped off, the Urn will go into a "Depositing" phase for a set amount of time, depending on which team the urn favors (3s/5s/10s for Favored/Neutral/Unfavored). While in the Depositing phase, the enemy team can Heavy Melee the urn to have their team claim it and cause it to switch sides. This adds +1.25s to that team's timer. If the urn is Favored or Unfavored (in a comeback state), then the Favored team will get +50% Bullet and Spirit Resist in a 60m radius around the urn while it is being carried, dropped or deposited. After 35s (aggregate time held per team), the carrier will start taking 5% Max HP damage per second (previously was 45s and 0.15% Max HP damage). Urn damage is lethal Like before, when the Urn is fumbled, it will wait 13s if there is a player within 25m. However afterwards, with this new version, it can no longer be picked up anymore and will very quickly run back to its spawn position. No longer silences you while carrying. You are still disarmed and movement silenced. No longer grants +30% Bullet and Spirit Resist while carrying it Area around deposting the urn is revealed (urn runner is also revealed as usual) The rules for Favored/Unfavored remain the same (+15% soul difference for the first urn at 10:00, +10% for all future urns) Souls are all instant after the deposit is complete All rewards are the same. The last person to contest the urn gets the +3 Golden Idol buffs, falling back to the original carrier if nobody contested it. Added a new T1 Vitality Item, Grit. Active grants you 200 Barrier for 4s duration. Innate grants 1 Out of Combat Regen. Cooldown: 60s. Upgrades to Weapon Shielding, Spirit Shielding, Reactive Barrier (these do not inherit the manual cast active) and Guardian Ward. Ballistic Enhancement: Now upgrades from Mystic Expansion Ballistic Enhancement: Ability Range increased from +20% to +22% Fixed the following Enhanced Items not maintaining their stats from components: Opening Rounds, Tankbuster, Kinetic Dash, Radiant Regeneration, Burst Fire, Veil Walker, Arcane Surge, Fury Trance, Leech Urn drop off point is moved from the above bridge in the mid lane to under the bridge in the side lane Urn timer extension when contested increased from 1.25s to 3s Urn deposit timers for favored/neutral/unfavored increased from 3/5/10s to 5/10/15s Urn comeback bullet and spirit resist auras reduced from 50% to 35% Urn pickup spot is now where the old comeback drop off spots were for when your team is behind Urn runner no longer has sprint disabled Urn runner now has max sprint acceleration Urn runner now gains +2m Sprint, +1 Stamina, +10% Dash Distance and +15% Stamina Regen Urn runner for the team that is behind now gains an extra +4m Sprint Urn collision radius increased by 20% Various smaller urn holding timers and variables adjusted to account for the new location Abrams Infernal Resilience T1 changed from "+1.5 Health Regen" to "+200 Max Health" Infernal Resilience T2 changed from "200 Max Health" to "+18% Melee Lifesteal" (40% effective vs non-heroes) Seismic Impact T2 increased from +0.7s Stun Duration to +0.8s Seismic Impact T3 Unstoppable duration increased from 5s to 6s Apollo Improved the hero's hitboxes (easier to hit) Base regen reduced from 2 to 1 Riposte no longer automatically dashes. It now grants you a sub ability immediately to target the hero you want to jump to for a brief duration (can target the enemy before the parry to buffer it). Cast range is 25m. Riposte no longer triggers on damage auras (things like Flame Dash) Riposte no longer triggers off of objective damage Flawless Advance hitbox reduced by 10% Bebop Bullet damage per boon reduced from 0.139 to 0.115 Exploding Uppercut T2 weapon damage reduced from +40% to +30% Sticky Bomb T2 increased from +75 Damage to +85 Billy Health per boon increased from +48 to +59 Bullet damage per boon reduced from 0.165 to 0.142 Rising Ram cooldown increased from 30s to 32s Rising Ram T2 increased from +0.3s Duration to +0.4s Rising Ram T3 increased from -10s Cooldown to -13s Calico Gloom Bomb T2 changed from "+75 Damage to Barriers" to "-5% Melee Resist for 5s Per Bomb" (stacks) Celeste Improved the hero's hitboxes (easier to hit) Stamina cooldown increased from 4.5s to 5s Radiant Daggers T2 changed from "-18s Cooldown and +70 Damage" to "-22s Cooldown and +80 Damage" Shining Wonder T2 increased from +50 Damage to +70 Doorman Call Bell radius reduced from 6m to 5.5m Call Bell T3 radius increased from +4m to +4.5m Call Bell explosion damage spirit scaling reduced from 1.4 to 1.3 Call Bell inaccuracy debuff no longer diminishes from 100% to 0% over 1 second (the rest of the debuff is 4s) Call Bell inaccuracy debuff reduced from -100% to -40% (lasts the full duration) Doorways close sub ability now starts on cooldown for 8s Doorway is no longer unsilenceable Fixed recent bug causing Luggage Cart not being dispelled Drifter Rend T3 no longer increases scaling by 0.4 Rend T3 now also deals Heavy Melee Damage (0.55 scale) Dynamo Kinetic Pulse T2 reduced from -18% Bullet Resistance to -15% Kinetic Pulse spirit scaling reduced from 1.65 to 1.55 Quantum Entanglement T3 changed from dispelling non-ult debuffs to reducing the duration of non-ult debuffs by 50% Graves Sprint speed increased from 1.6 to 2.2 Grasping Hands now spawns a ghoul in the base ability (T3 still increases it by 1) Updated dash ranges for Deadheads to be calculated from the center of Graves when they are following her Fixed Fire Rate buffs for Deadheads not being applied to their next attack, but only on subsequent attacks Fixed Deadheads being unable to dash through veils Fixed Deadheads being unable to dash to targets at the very end of your attack range when they are in follow mode Fixed Deadhead's damage taken from bullets being unaffected by fall-off Added 0.1s buffer duration for Deadheads losing line-of-sight before they stop following an enemy Fixed Deadheads becoming inactive if Graves dies while they are following her Jar of Dead spirit scaling reduced from 0.35 to 0.31 (they are better at dealing damage now) Increased speed & acceleration of Deadheads only when they are following Graves - doesn't affect in-combat Fixed certain projectiles (i.e Gray Talon's Bird) colliding with Deadheads Update Grave's melee to also set the dash target for Deadheads Bullet damage and growth reduced by -10% Grey Talon Rain of Arrows cooldown reduced from 30s to 22s Rain of Arrows cast delay reduced from 0.5s to 0.2s Rain of Arrows duration reduced from 7s to 4s Rain of Arrows moving ability in air improved Rain of Arrow stamina distance changed from being -9% to +25% Rain of Arrows Weapon Damage bonus reduced from +4 to +3 Rain of Arrows T1 changed from "-14s Cooldown" to "+3 Weapon Damage and +30% Slow for 1.5s" Rain of Arrows T2 changed from "+5 Weapon Damage and +40% Slow for 1.5s" to "-13s Cooldown" (Total CD from 16s to 9s) Haze Fixation T3 increased from +0.12 to +0.14 Holliday Base bullet damage increased from 18.8 to 19.7 Health regen increased from 1 to 2 Infernus Bullet size increased from 3 to 4 Concussive Combustion T3 increased from +0.75s Stun Duration to +0.9s Kelvin Frost Grenade damage spirit scaling reduced from 0.7 to 0.6 When interrupted on Ice Path, it no longer creates an ice path below him and instead lets him fall to the ground Arctic Beam DPS spirit scaling reduced from 0.5 to 0.38 Lash Bullet damage per boon reduced from 0.341 to 0.31 Ground Strike damage per meter spirit scaling increased from 0.0372 to 0.04 Grapple T2 bonus damage no longer stacks with itself, but instead refreshes the duration Grapple T3 now also grants +1 Charge McGinnis Bullet damage per boon increased from 0.17 to 0.18 Fixed Heavy Barrage not triggering Diviner's Kevlar Medicinal Specter radius increased from 5.5m to 6m Mina Innate -8% Debuff Resist Fixed Rake sometimes not working with high ping Love Bites T3 increased from -4s Cooldown to -5s Love Bites no longer applies the flat on hit damage to abilities (was doing 20% of its value on Nox Nostra) Nox Nostra T3 reduced from 1% Current HP to 0.5% Mirage Updated Djinn's Mark visuals Mo & Krill Getting hit with a melee no longer knocks you up when you are burrowed Sand Blast T3 increased from +1s Duration to +1.5s Paige Bookwyrm T2 improved from -8s Cooldown to -12s Rallying Charge T3 increased from +135 Damage to +160 Rallying Charge now has half cooldown if it hits no allies or enemies Paradox Time Wall T1 duration increased from +2.5s to +3.5s Time Wall T3 increased from +1 Charge to +2 Time Wall T3 Charge Delay reduced from 4s to 2s Kinetic Carbine T3 increased from +50% Max Damage Scaling to +55% Paradoxical Swap damage increased from 125 to 150 Pocket Flying Cloak T2 weapon damage duration reduced from 8s to 6s Affliction cooldown increased from 140s to 150s Rem Pillow Toss charge time reduced from 9s to 8s Pillow Toss T3 increased from +90 to +100 Damage Tag Along burst heal now also applies to secondary allies that you jump to Tag Along lingering heal duration reduced from 3s to 2s (values rebalanced to be the same overall heal just faster) Tag Along T2 Barrier and Item Duration/Range effectiveness increased from 25% to 35% Tag Along T3 now also increases Missing Health Heal from 0.03 to 0.05 and Regen Per Second from 0.66 to 1.0 Tag Along can now be cast through veils Reduced lockout period after ejecting from Tag Along from 1s to 0.3s Tag Along time to fly to your ally is now 50% faster Tag Along heal duration is now displayed on the hud as well as the healthbar icon Tag Along fixed specific abilities/items that could kill Rem while he's napping Tag Along now allows friendly auras to affect Rem Tag Along eject is no longer affected by debuff resistance and now launches upwards slightly more to prevent hitting the ground Tag Along eject no longer briefly restricts movement abilities and input Naptime now provides +30% damage reduction in the base ability (T3 still adds +50%) Seven Bullet damage growth reduced from 0.374 to 0.337 Crit reduction increased from 35% to 55% Shiv Slice and Dice T2 reduced from -8% Spirit Resist to -6% Bloodletting Deferred Damage Cleared reduced from 40% to 35% Bloodletting T3 increased from +45% Deferred Damage Cleared to +50% Killing Blow cooldown increased from 105s to 125s Killing Blow full rage damage bonus reduced from 14% to 12% Killing Blow T2 increased from +8% Full Rage Damage Bonus to +10% Killing Blow T2 now also reduces cooldown by -30s Silver Bullet Cycle Time reduced from 0.9s to 0.85s (overall DPS adjusted to remain the same) Entangling Bola no longer prevents you from jumping and mantling Entangling Bola T2 changed from "+0.75s Duration" to "-5s Cooldown" Entangling Bola T3 changed from "-5s Cooldown and Ricochet to 2 additional targets" to "+0.75s Duration and Ricochet to 2 additional targets" Lycan Curse Fire Rate reduced from 80% to 65% Lycan Curse Fire Rate spirit scaling increased from 0.25 to 0.45 Venator Health increased from 790+43/boon to 830+48/boon Hex-Lined Snap Trap T3 increased from +25% Damage Against Revealed Targets to +30% Hex-Lined Snap Trap T3 now also grants +1 Charge Victor Bullet damage reduced from 13+0.3135 to 12+0.26 Jumpstart T3 spirit scaling increased from +0.6 to +0.9 Aura of Suffering now does 50% damage to objectives Viscous Puddle Punch T1 now also increases damage by +20 Puddle Punch T2 no longer increases damage by +30 Puddle Punch T2 now also grants +40% Lifesteal (1/4th against non-heroes) Vyper Screwjab Dagger T2 bullet resist per stack from -5% to -6% Screwjab Dagger T3 now also increases max stacks by 2 Warden Bullet damage per boon reduced from 0.38 to 0.34 Willpower T3 debuff resistance now retroactively applies to existing debuffs when cast Binding Word T2 no longer increases cast range by +12m Yamato Power Slash post cast time reduced from 0.4s to 0.2s Power Slash spirit scaling increased from 1.86s to 2.1 Flying Slash range increased from 25m to 30m Flying Slash T2 no longer grants +20m Cast Range Flying Slash T3 now also grants +15m Cast Range Flying Slash T3 increased from +1 Charge to +2 Fixed Crimson Slash not being able to hit anything if the player is aimed too high or low Shadow Transformation T1 increased from +5 Weapon Damage to +7 Restorative Shot NPC Healing increased from 15 to 20 Melee Charge Cooldown reduced from 7s to 5s Active Reload Lifesteal increased from 14% to 16% Weakening Headshot Now works vs NPCs Fleetfoot Now grants +6% Weapon Damage Active slow resistance increased from 35% to 40% Opening Rounds Spirit Power reduced from +7 to +4 Slowing Bullets Dash Distance slow reduced from -25% to -22% Mystic Shot Spirit scaling increased from 1 to 1.2 Recharging Rush Cooldown increased from 24s to 25s Tesla Bullets Proc cooldown reduced from 0.25s to 0.2s Alchemical Fire Damage per Second spirit scaling increased from 0.152 to 0.2 Weighted Shots Dash Distance slow reduced from -25% to -22% Debuff resistance increased from 20% to 22% Shadow Weave Duration increased from 10s to 13s Ambush Fire Rate increased from 20% to 25% Ambush Spirit Power increased from 20 to 25 Ambush Melee Damage increased from 20% to 25% Escalating Resilience Max Ammo increased from 30% to 35% Weapon Damage increased from 15% to 18% Heroic Aura Radius increased from 30m to 35m Sharpshooter Now upgrades from High-Velocity Rounds (in addition to Long Range). Grants +60% Bullet Velocity. Long range weapon damage reduced from 70% to 60% Now has innate 10% Weapon Damage (from components) Hunter's Aura Fire Rate reduction increased from -14% to -15% Cultist Sacrifice Weapon Damage increased from 8% to 10% Weapon Damage boon scaling increased from 0.7 to 0.8 Bonus Souls increased from 170% to 180% Toxic Bullets No longer builds up from melee attacks Capacitor Proc cooldown reduced from 0.25s to 0.2s Crushing Fists Cooldown reduced from 7s to 5s Melee damage increased from 20% to 22% Frenzy Triggered debuff resistance increased from 30% to 40% Crippling Headshot Now works vs NPCs Spiritual Overflow Spirit Lifesteal moved from Active to Innate (reduced from 16% to 13%) Now builds from Spirit Lifesteal (gains the innates it has) Glass Cannon Max Health reduction reduced from -15% to -13% Silencer Spirit Resistance reduced from 15% to 12% Spellslinger Cooldown Reduction reduced from 6% to 5% Healing Rite Spirit scaling increased from 0.93 to 1.1 Extra Regen Regen reduced from 3 to 2.5 Out of Combat regen increased from 1 to 1.5 Rebuttal Parry cooldown reduced from -2s to -1.75s Debuff Reducer Now grants +90 Health Return Fire Duration increased from 6s to 6.5s Healing Booster Fixed various abilities and items not being boosted correctly Restorative Locket No longer has a minimum of 1 stamina restore Max stamina restored reduced from 4 to 3 Reactive Barrier Now grants +1 Out of Combat Regen (from components) Spirit Shielding No longer grants +1.75m Move Speed on activation Proc now also temporarily grants +18% Spirit Resistance (for the 8s duration) Weapon Shielding No longer grants +1.75m Move Speed on activation Proc now also temporarily grants +18% Bullet Resistance (for the 8s duration) Guardian Ward Barrier increased from 200 to 250 Cooldown increased from 45s to 60s Now grants +1.5 Out of Combat Regen (from components) Bullet Lifesteal Now grants +6% Weapon Damage Battle Vest Weapon Damage increased from 15% to 18% Dispel Magic Cooldown increased from 40s to 45s Spirit Lifesteal Bonus Health increased from +70 to +90 Fury Trance Active duration increased from 6s to 6.5s Gains the +6% Weapon Damage (from component) Fire Rate increased from 30% to 32% Majestic Leap Now grants +50% air control for the duration of the barrier Barrier boon scaling increased from 8 to 12 Fortitude Move speed increased from 1.25m to 1.5m Veil Walker Heal per boon increased from 6 to 8 Invisibility duration increased from 7s to 8s Counterspell Spirit Power reduced from +8 to +5 Divine Barrier Now grants +1.5 Out of Combat Regen (from components) Juggernaut Fire Rate reduction increased from -36% to -40% Move speed bonus increased from +2m to +2.5m Spellbreaker Now grants +90 Health (from components) Indomitable Barrier scaling increased from 1.8 to 2.0 Now has +2 Out of Combat Regen (from components) Bullet Resist increased from 8% to 10% Spirit Resist increased from 8% to 10% Witchmail Spirit Resist increased from 20% to 22% Unstoppable Cooldown reduced from 65s to 60s Infuser Duration increased from 6s to 7s Gains +6 Spirit Power (from components) Vampiric Burst Duration increased from 4.5s to 5s Now grants +6% Weapon Power (from components) Leech Updated bonus HP to match the components Golden Goose Egg Permanent buff from every 100 souls to every 80 Mystic Regeneration Regen duration increased from 6s to 7s Rusted Barrel Bonus health increased from 50 to 60 Cold Front Radius reduced from 12m to 10m Damage height increased from 5m to 7m Bullet Resist Shredder No longer grants +65 Bonus Health Bullet Resist increased from 8% to 9% Now grants +9% Weapon Damage Mystic Slow Bonus Health increased from +30 to +50 Arcane Surge Fixed various interaction bugs with different abilities Surge of Power Imbued Spirit Power increased from 24 to 25 Spirit Snatch Bonus damage spirit scaling increased from 0.744 to 0.84 Spirit Power Steal increased from 20 to 28 Decay Cooldown reduced from 32s to 30s Disarming Hex Duration increased from 4s to 4.25s Torment Pulse Melee Resist increased from 15% to 18% Radiant Regeneration Regen duration increased from 6s to 7s Rapid Recharge Spirit Power for Charged Abilities increased from +10 to +14 Magic Carpet Now innately grants -15% Gravity and Air Control by +25% Arctic Blast Slowed targets now have their stamina regen frozen for the 4s slow duration Radius increased from 12m to 16m Damage height increased from 5m to 7m No longer does 15% damage amp Immobilize increased from 0.75s to 1s Focus Lens Duration increased from 4s to 4.5s Scourge Debuff resist increased from 15% to 17% Mercurial Magnum Base Bullet Damage spirit scaling increased from 0.465 to 0.49 Vortex Web Fixed the debuff losing gravity modification when upgraded from Slowing Hex`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2026-05-08`, to: `2026-05-22` },
			after: { from: `2026-05-23`, to: `2026-05-28` }
		}
	},
	se = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Infernal Resilience`, id: `infernal-resilience` },
		{ level: 3, title: `Seismic Impact`, id: `seismic-impact` },
		{ level: 2, title: `Apollo`, id: `apollo` },
		{ level: 3, title: `Riposte`, id: `riposte` },
		{ level: 3, title: `Flawless Advance`, id: `flawless-advance` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Exploding Uppercut`, id: `exploding-uppercut` },
		{ level: 3, title: `Sticky Bomb`, id: `sticky-bomb` },
		{ level: 2, title: `Billy`, id: `billy` },
		{ level: 3, title: `Rising Ram`, id: `rising-ram` },
		{ level: 2, title: `Calico`, id: `calico` },
		{ level: 3, title: `Gloom Bomb`, id: `gloom-bomb` },
		{ level: 2, title: `Celeste`, id: `celeste` },
		{ level: 3, title: `Radiant Daggers`, id: `radiant-daggers` },
		{ level: 3, title: `Shining Wonder`, id: `shining-wonder` },
		{ level: 2, title: `Doorman`, id: `doorman` },
		{ level: 3, title: `Call Bell`, id: `call-bell` },
		{ level: 3, title: `Doorway`, id: `doorway` },
		{ level: 3, title: `Luggage Cart`, id: `luggage-cart` },
		{ level: 2, title: `Drifter`, id: `drifter` },
		{ level: 3, title: `Rend`, id: `rend` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Kinetic Pulse`, id: `kinetic-pulse` },
		{ level: 3, title: `Quantum Entanglement`, id: `quantum-entanglement` },
		{ level: 2, title: `Graves`, id: `graves` },
		{ level: 3, title: `Grasping Hands`, id: `grasping-hands` },
		{ level: 3, title: `Jar of Dead`, id: `jar-of-dead` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Rain of Arrows`, id: `rain-of-arrows` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Fixation`, id: `fixation` },
		{ level: 2, title: `Holliday`, id: `holliday` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Concussive Combustion`, id: `concussive-combustion` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Frost Grenade`, id: `frost-grenade` },
		{ level: 3, title: `Ice Path`, id: `ice-path` },
		{ level: 3, title: `Arctic Beam DPS`, id: `arctic-beam-dps` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike` },
		{ level: 3, title: `Grapple`, id: `grapple` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Heavy Barrage`, id: `heavy-barrage` },
		{ level: 3, title: `Medicinal Specter`, id: `medicinal-specter` },
		{ level: 2, title: `Mina`, id: `mina` },
		{ level: 3, title: `Rake`, id: `rake` },
		{ level: 3, title: `Love Bites`, id: `love-bites` },
		{ level: 3, title: `Nox Nostra`, id: `nox-nostra` },
		{ level: 2, title: `Mirage`, id: `mirage` },
		{ level: 3, title: `Djinn's Mark`, id: `djinn-s-mark` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Sand Blast`, id: `sand-blast` },
		{ level: 2, title: `Paige`, id: `paige` },
		{ level: 3, title: `Bookwyrm`, id: `bookwyrm` },
		{ level: 3, title: `Rallying Charge`, id: `rallying-charge` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Time Wall`, id: `time-wall` },
		{ level: 3, title: `Kinetic Carbine`, id: `kinetic-carbine` },
		{ level: 3, title: `Paradoxical Swap`, id: `paradoxical-swap` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Flying Cloak`, id: `flying-cloak` },
		{ level: 3, title: `Affliction`, id: `affliction` },
		{ level: 2, title: `Rem`, id: `rem` },
		{ level: 3, title: `Pillow Toss`, id: `pillow-toss` },
		{ level: 3, title: `Tag Along`, id: `tag-along` },
		{ level: 3, title: `Naptime`, id: `naptime` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Slice and Dice`, id: `slice-and-dice` },
		{
			level: 3,
			title: `Bloodletting Deferred Damage Cleared`,
			id: `bloodletting-deferred-damage-cleared`
		},
		{ level: 3, title: `Bloodletting`, id: `bloodletting` },
		{ level: 3, title: `Killing Blow`, id: `killing-blow` },
		{ level: 2, title: `Silver`, id: `silver` },
		{ level: 3, title: `Entangling Bola`, id: `entangling-bola` },
		{ level: 3, title: `Lycan Curse Fire Rate`, id: `lycan-curse-fire-rate` },
		{ level: 2, title: `Venator`, id: `venator` },
		{ level: 3, title: `Hex-Lined Snap Trap`, id: `hex-lined-snap-trap` },
		{ level: 2, title: `Victor`, id: `victor` },
		{ level: 3, title: `Jumpstart`, id: `jumpstart` },
		{ level: 3, title: `Aura of Suffering`, id: `aura-of-suffering` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch` },
		{ level: 2, title: `Vyper`, id: `vyper` },
		{ level: 3, title: `Screwjab Dagger`, id: `screwjab-dagger` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Willpower`, id: `willpower` },
		{ level: 3, title: `Binding Word`, id: `binding-word` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Power Slash`, id: `power-slash` },
		{ level: 3, title: `Flying Slash`, id: `flying-slash` },
		{ level: 3, title: `Crimson Slash`, id: `crimson-slash` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Active Reload`, id: `active-reload` },
		{ level: 2, title: `Alchemical Fire`, id: `alchemical-fire` },
		{ level: 2, title: `Arcane Surge`, id: `arcane-surge` },
		{ level: 2, title: `Arctic Blast`, id: `arctic-blast` },
		{ level: 2, title: `Battle Vest`, id: `battle-vest` },
		{ level: 2, title: `Bullet Lifesteal`, id: `bullet-lifesteal` },
		{ level: 2, title: `Bullet Resist Shredder`, id: `bullet-resist-shredder` },
		{ level: 2, title: `Capacitor`, id: `capacitor` },
		{ level: 2, title: `Cold Front`, id: `cold-front` },
		{ level: 2, title: `Counterspell`, id: `counterspell` },
		{ level: 2, title: `Crippling Headshot`, id: `crippling-headshot` },
		{ level: 2, title: `Crushing Fists`, id: `crushing-fists` },
		{ level: 2, title: `Cultist Sacrifice`, id: `cultist-sacrifice` },
		{ level: 2, title: `Debuff Reducer`, id: `debuff-reducer` },
		{ level: 2, title: `Decay`, id: `decay` },
		{ level: 2, title: `Disarming Hex`, id: `disarming-hex` },
		{ level: 2, title: `Dispel Magic`, id: `dispel-magic` },
		{ level: 2, title: `Divine Barrier`, id: `divine-barrier` },
		{ level: 2, title: `Escalating Resilience`, id: `escalating-resilience` },
		{ level: 2, title: `Extra Regen`, id: `extra-regen` },
		{ level: 2, title: `Fleetfoot`, id: `fleetfoot` },
		{ level: 2, title: `Focus Lens`, id: `focus-lens` },
		{ level: 2, title: `Fortitude`, id: `fortitude` },
		{ level: 2, title: `Frenzy`, id: `frenzy` },
		{ level: 2, title: `Fury Trance`, id: `fury-trance` },
		{ level: 2, title: `Glass Cannon`, id: `glass-cannon` },
		{ level: 2, title: `Golden Goose Egg`, id: `golden-goose-egg` },
		{ level: 2, title: `Guardian Ward`, id: `guardian-ward` },
		{ level: 2, title: `Healing Booster`, id: `healing-booster` },
		{ level: 2, title: `Healing Rite`, id: `healing-rite` },
		{ level: 2, title: `Heroic Aura`, id: `heroic-aura` },
		{ level: 2, title: `Hunter's Aura`, id: `hunter-s-aura` },
		{ level: 2, title: `Indomitable`, id: `indomitable` },
		{ level: 2, title: `Infuser`, id: `infuser` },
		{ level: 2, title: `Juggernaut`, id: `juggernaut` },
		{ level: 2, title: `Leech`, id: `leech` },
		{ level: 2, title: `Magic Carpet`, id: `magic-carpet` },
		{ level: 2, title: `Majestic Leap`, id: `majestic-leap` },
		{ level: 2, title: `Melee Charge`, id: `melee-charge` },
		{ level: 2, title: `Mercurial Magnum`, id: `mercurial-magnum` },
		{ level: 2, title: `Mystic Regeneration`, id: `mystic-regeneration` },
		{ level: 2, title: `Mystic Shot`, id: `mystic-shot` },
		{ level: 2, title: `Mystic Slow`, id: `mystic-slow` },
		{ level: 2, title: `Opening Rounds`, id: `opening-rounds` },
		{ level: 2, title: `Radiant Regeneration`, id: `radiant-regeneration` },
		{ level: 2, title: `Rapid Recharge`, id: `rapid-recharge` },
		{ level: 2, title: `Reactive Barrier`, id: `reactive-barrier` },
		{ level: 2, title: `Rebuttal`, id: `rebuttal` },
		{ level: 2, title: `Recharging Rush`, id: `recharging-rush` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` },
		{ level: 2, title: `Return Fire`, id: `return-fire` },
		{ level: 2, title: `Rusted Barrel`, id: `rusted-barrel` },
		{ level: 2, title: `Scourge`, id: `scourge` },
		{ level: 2, title: `Shadow Weave`, id: `shadow-weave` },
		{ level: 2, title: `Sharpshooter`, id: `sharpshooter` },
		{ level: 2, title: `Silencer`, id: `silencer` },
		{ level: 2, title: `Slowing Bullets`, id: `slowing-bullets` },
		{ level: 2, title: `Spellbreaker`, id: `spellbreaker` },
		{ level: 2, title: `Spellslinger`, id: `spellslinger` },
		{ level: 2, title: `Spirit Lifesteal`, id: `spirit-lifesteal` },
		{ level: 2, title: `Spirit Shielding`, id: `spirit-shielding` },
		{ level: 2, title: `Spirit Snatch`, id: `spirit-snatch` },
		{ level: 2, title: `Spiritual Overflow`, id: `spiritual-overflow` },
		{ level: 2, title: `Surge of Power`, id: `surge-of-power` },
		{ level: 2, title: `Tesla Bullets`, id: `tesla-bullets` },
		{ level: 2, title: `Torment Pulse`, id: `torment-pulse` },
		{ level: 2, title: `Toxic Bullets`, id: `toxic-bullets` },
		{ level: 2, title: `Unstoppable`, id: `unstoppable` },
		{ level: 2, title: `Vampiric Burst`, id: `vampiric-burst` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` },
		{ level: 2, title: `Vortex Web`, id: `vortex-web` },
		{ level: 2, title: `Weakening Headshot`, id: `weakening-headshot` },
		{ level: 2, title: `Weapon Shielding`, id: `weapon-shielding` },
		{ level: 2, title: `Weighted Shots`, id: `weighted-shots` },
		{ level: 2, title: `Witchmail`, id: `witchmail` }
	],
	s = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2026-05-08`, to: `2026-05-22` },
			after: { from: `2026-05-23`, to: `2026-05-28` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Apollo`, id: `apollo` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Billy`, id: `billy` },
			{ kind: `hero`, name: `Calico`, id: `calico` },
			{ kind: `hero`, name: `Celeste`, id: `celeste` },
			{ kind: `hero`, name: `Doorman`, id: `doorman` },
			{ kind: `hero`, name: `Drifter`, id: `drifter` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Graves`, id: `graves` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Holliday`, id: `holliday` },
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mina`, id: `mina` },
			{ kind: `hero`, name: `Mirage`, id: `mirage` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Paige`, id: `paige` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Rem`, id: `rem` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Silver`, id: `silver` },
			{ kind: `hero`, name: `Venator`, id: `venator` },
			{ kind: `hero`, name: `Victor`, id: `victor` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Vyper`, id: `vyper` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Active Reload`, id: `active-reload` },
			{ kind: `item`, name: `Alchemical Fire`, id: `alchemical-fire` },
			{ kind: `item`, name: `Arcane Surge`, id: `arcane-surge` },
			{ kind: `item`, name: `Arctic Blast`, id: `arctic-blast` },
			{ kind: `item`, name: `Battle Vest`, id: `battle-vest` },
			{ kind: `item`, name: `Bullet Lifesteal`, id: `bullet-lifesteal` },
			{ kind: `item`, name: `Bullet Resist Shredder`, id: `bullet-resist-shredder` },
			{ kind: `item`, name: `Capacitor`, id: `capacitor` },
			{ kind: `item`, name: `Cold Front`, id: `cold-front` },
			{ kind: `item`, name: `Counterspell`, id: `counterspell` },
			{ kind: `item`, name: `Crippling Headshot`, id: `crippling-headshot` },
			{ kind: `item`, name: `Crushing Fists`, id: `crushing-fists` },
			{ kind: `item`, name: `Cultist Sacrifice`, id: `cultist-sacrifice` },
			{ kind: `item`, name: `Debuff Reducer`, id: `debuff-reducer` },
			{ kind: `item`, name: `Decay`, id: `decay` },
			{ kind: `item`, name: `Disarming Hex`, id: `disarming-hex` },
			{ kind: `item`, name: `Dispel Magic`, id: `dispel-magic` },
			{ kind: `item`, name: `Divine Barrier`, id: `divine-barrier` },
			{ kind: `item`, name: `Escalating Resilience`, id: `escalating-resilience` },
			{ kind: `item`, name: `Extra Regen`, id: `extra-regen` },
			{ kind: `item`, name: `Fleetfoot`, id: `fleetfoot` },
			{ kind: `item`, name: `Focus Lens`, id: `focus-lens` },
			{ kind: `item`, name: `Fortitude`, id: `fortitude` },
			{ kind: `item`, name: `Frenzy`, id: `frenzy` },
			{ kind: `item`, name: `Fury Trance`, id: `fury-trance` },
			{ kind: `item`, name: `Glass Cannon`, id: `glass-cannon` },
			{ kind: `item`, name: `Golden Goose Egg`, id: `golden-goose-egg` },
			{ kind: `item`, name: `Guardian Ward`, id: `guardian-ward` },
			{ kind: `item`, name: `Healing Booster`, id: `healing-booster` },
			{ kind: `item`, name: `Healing Rite`, id: `healing-rite` },
			{ kind: `item`, name: `Heroic Aura`, id: `heroic-aura` },
			{ kind: `item`, name: `Hunter's Aura`, id: `hunter-s-aura` },
			{ kind: `item`, name: `Indomitable`, id: `indomitable` },
			{ kind: `item`, name: `Infuser`, id: `infuser` },
			{ kind: `item`, name: `Juggernaut`, id: `juggernaut` },
			{ kind: `item`, name: `Leech`, id: `leech` },
			{ kind: `item`, name: `Magic Carpet`, id: `magic-carpet` },
			{ kind: `item`, name: `Majestic Leap`, id: `majestic-leap` },
			{ kind: `item`, name: `Melee Charge`, id: `melee-charge` },
			{ kind: `item`, name: `Mercurial Magnum`, id: `mercurial-magnum` },
			{ kind: `item`, name: `Mystic Regeneration`, id: `mystic-regeneration` },
			{ kind: `item`, name: `Mystic Shot`, id: `mystic-shot` },
			{ kind: `item`, name: `Mystic Slow`, id: `mystic-slow` },
			{ kind: `item`, name: `Opening Rounds`, id: `opening-rounds` },
			{ kind: `item`, name: `Radiant Regeneration`, id: `radiant-regeneration` },
			{ kind: `item`, name: `Rapid Recharge`, id: `rapid-recharge` },
			{ kind: `item`, name: `Reactive Barrier`, id: `reactive-barrier` },
			{ kind: `item`, name: `Rebuttal`, id: `rebuttal` },
			{ kind: `item`, name: `Recharging Rush`, id: `recharging-rush` },
			{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` },
			{ kind: `item`, name: `Return Fire`, id: `return-fire` },
			{ kind: `item`, name: `Rusted Barrel`, id: `rusted-barrel` },
			{ kind: `item`, name: `Scourge`, id: `scourge` },
			{ kind: `item`, name: `Shadow Weave`, id: `shadow-weave` },
			{ kind: `item`, name: `Sharpshooter`, id: `sharpshooter` },
			{ kind: `item`, name: `Silencer`, id: `silencer` },
			{ kind: `item`, name: `Slowing Bullets`, id: `slowing-bullets` },
			{ kind: `item`, name: `Spellbreaker`, id: `spellbreaker` },
			{ kind: `item`, name: `Spellslinger`, id: `spellslinger` },
			{ kind: `item`, name: `Spirit Lifesteal`, id: `spirit-lifesteal` },
			{ kind: `item`, name: `Spirit Shielding`, id: `spirit-shielding` },
			{ kind: `item`, name: `Spirit Snatch`, id: `spirit-snatch` },
			{ kind: `item`, name: `Spiritual Overflow`, id: `spiritual-overflow` },
			{ kind: `item`, name: `Surge of Power`, id: `surge-of-power` },
			{ kind: `item`, name: `Tesla Bullets`, id: `tesla-bullets` },
			{ kind: `item`, name: `Torment Pulse`, id: `torment-pulse` },
			{ kind: `item`, name: `Toxic Bullets`, id: `toxic-bullets` },
			{ kind: `item`, name: `Unstoppable`, id: `unstoppable` },
			{ kind: `item`, name: `Vampiric Burst`, id: `vampiric-burst` },
			{ kind: `item`, name: `Veil Walker`, id: `veil-walker` },
			{ kind: `item`, name: `Vortex Web`, id: `vortex-web` },
			{ kind: `item`, name: `Weakening Headshot`, id: `weakening-headshot` },
			{ kind: `item`, name: `Weapon Shielding`, id: `weapon-shielding` },
			{ kind: `item`, name: `Weighted Shots`, id: `weighted-shots` },
			{ kind: `item`, name: `Witchmail`, id: `witchmail` }
		],
		related: []
	},
	ce = ee(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li><!> <!></li> <li></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div></div> <!> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <!> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li> <li></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function le(ee) {
	var re = ce(),
		oe = ne(re);
	t(
		oe,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<p><img src="https://clan.akamai.steamstatic.com/images/45164767/686d522ba79a25d36cf53ef92f7b0499501f7d2f.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>
<ul><li>Base HP reduced by 10 for all heroes</li><li>HP per boon reduced by 3</li><li>Guardians scaling resistance from +75%-&gt;-50% over 12 minutes to +50%-&gt;-50% (takes more damage early)</li><li>Medium neutrals initial spawn time reduced from 6 minutes to 5 minutes</li><li>Breakables spawn time increased from 2 minutes to 3 minutes</li><li>Shrines are now invulnerable until one pair of Base Guardians are destroyed</li><li>Backdoor removal linger duration reduced from 20s to 14s</li><li>Knockup durations are now affected by debuff reduction</li><li>Removed two jump pads from around the middle of the map that point to outwards (to the left and right respectively)</li><li>Sliding no longer resets sprint speed</li><li>Stamina Regeneration is reduced by 25% for 5s after using a Wall Jump. This does not trigger when out of combat or when mantling soon after.</li><li>Bullet Velocity now stacks additively rather than diminishingly</li><li>Medic trooper heal duration increased from 2s to 4s (same overall heal amount)</li><li>When receiving multiple of the Medic trooper orb the duration will now be added ontop rather than stacking directly (so picking up 4 in a row will give the regen over 16s instead of over 4s, overall heal is the same just slower)</li><li>Medic Trooper heal increased from 12% missing hp to 13%</li><li>Fixed Parry FX not always matching state</li><li>Base Guardian Bullet Resistance increased from 10% to 20%</li><li>Shrine Bullet Resistance increased from 10% to 20%</li><li>Tier 2 Bullet Resistance increased from 25% to 35%</li><li>Midboss now starts spawned at the beginning of the game</li><li>Total Damage Reduction debuffs now stack diminishingly rather than additively (Inhibitor, Fire Scarabs, etc)</li><li>Movespeed diminish point increased from 11 to 12 (very slightly less aggressive diminishing scaling)</li><li>Weapon Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 46/55/70/85 to 46/54/62/74/86</li><li>Vitality Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 38/42/46/50 to 38/42/46/50 (final two tiers shifted up by +4)</li><li>Spirit Investment Bonus now has a 6.4k line, changed from 4.8k/7.2k/9.6k/16k to 4.8k/6.4k/8k/11.2k/16k with bonuses from 38/48/57/66 to 38/45/52/59/66</li><li>Fixed various item barrier durations not scaling with duration increases</li><li>Walkers will interrupt a rocket barrage during the 1s windup if stomp becomes an option.</li><li>Fixed a bug where walkers were spinning while lasering.</li><li>Smoothed zipline grabbing to fix some jitter</li><li>Added ropes to zipline binding (so if a player rebinds zipline to something other than SPACE it will also apply to mounting/dismounting ropes)</li><li>Removed delay on ziplines when using alternative key binds</li><li>Fixed the following abilities taking you out of zoom temporarily when cast: Blasted, Gloom Bombs, Shining Wonder, Call Bell, Luggage Cart, Stalker&#x27;s Mark, Rejuvenating Aurora, Charged Shot, Powder Keg, Bounce Pad, Spirit Lasso, Napalm, Ice Path, Flog, Spectral Wall, Rake, Fire Scarabs, Scorn, Sand Blast, Time Wall, Paradoxical Swap, Barrage, Flying Cloak, Pillow Toss, Lightning Ball, Entangling Bola, Go For The Throat, Vexing Bolt, Consecrating Grenade, Gut Shot, Snap Trap, Ira Domini, Pain Battery, Jump Start, Flight, Crow Familiar, Lethal Venom, Petrifying Bola, Alchemical Flask, Card Trick, Capacitor, Restorative Locket, Healing Nova, Silence Wave, Magic Carpet, Refresher</li><li>Fixed the following items and abilities not working through veils: Heroic Aura, Healing Rite, Healing Nova, Rescue Beam, Divine Barrier, Kudzu Connection, Cube, Tag Along, Lil Helpers, Guardian Ward, Scourge, Plot Armor</li><li>We are experimenting with an alternate set of Urn mechanics. Please give us your thoughts on this after you&#x27;ve played with it some.</li><li>To pickup the Urn, rather than standing in place to channel, you now light or heavy melee the Urn to pick it up.</li><li>The Urn is now always dropped off on top of the bridge on the middle of the map.</li><li>Once dropped off, the Urn will go into a &quot;Depositing&quot; phase for a set amount of time, depending on which team the urn favors (3s/5s/10s for Favored/Neutral/Unfavored).</li><li>While in the Depositing phase, the enemy team can Heavy Melee the urn to have their team claim it and cause it to switch sides. This adds +1.25s to that team&#x27;s timer.</li><li>If the urn is Favored or Unfavored (in a comeback state), then the Favored team will get +50% Bullet and Spirit Resist in a 60m radius around the urn while it is being carried, dropped or deposited.</li><li>After 35s (aggregate time held per team), the carrier will start taking 5% Max HP damage per second (previously was 45s and 0.15% Max HP damage).</li><li>Urn damage is lethal</li><li>Like before, when the Urn is fumbled, it will wait 13s if there is a player within 25m. However afterwards, with this new version, it can no longer be picked up anymore and will very quickly run back to its spawn position.</li><li>No longer silences you while carrying. You are still disarmed and movement silenced.</li><li>No longer grants +30% Bullet and Spirit Resist while carrying it</li><li>Area around deposting the urn is revealed (urn runner is also revealed as usual)</li><li>The rules for Favored/Unfavored remain the same (+15% soul difference for the first urn at 10:00, +10% for all future urns)</li><li>Souls are all instant after the deposit is complete</li><li>All rewards are the same. The last person to contest the urn gets the +3 Golden Idol buffs, falling back to the original carrier if nobody contested it.</li><li>Added a new T1 Vitality Item, Grit. Active grants you 200 Barrier for 4s duration. Innate grants 1 Out of Combat Regen. Cooldown: 60s. Upgrades to Weapon Shielding, Spirit Shielding, Reactive Barrier (these do not inherit the manual cast active) and Guardian Ward.</li><li>Ballistic Enhancement: Now upgrades from Mystic Expansion</li><li>Ballistic Enhancement: Ability Range increased from +20% to +22%</li><li>Fixed the following Enhanced Items not maintaining their stats from components: Opening Rounds, Tankbuster, Kinetic Dash, Radiant Regeneration, Burst Fire, Veil Walker, Arcane Surge, Fury Trance, Leech</li><li>Urn drop off point is moved from the above bridge in the mid lane to under the bridge in the side lane</li><li>Urn timer extension when contested increased from 1.25s to 3s</li><li>Urn deposit timers for favored/neutral/unfavored increased from 3/5/10s to 5/10/15s</li><li>Urn comeback bullet and spirit resist auras reduced from 50% to 35%</li><li>Urn pickup spot is now where the old comeback drop off spots were for when your team is behind</li><li>Urn runner no longer has sprint disabled</li><li>Urn runner now has max sprint acceleration</li><li>Urn runner now gains +2m Sprint, +1 Stamina, +10% Dash Distance and +15% Stamina Regen</li><li>Urn runner for the team that is behind now gains an extra +4m Sprint</li><li>Urn collision radius increased by 20%</li><li>Various smaller urn holding timers and variables adjusted to account for the new location</li></ul>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var se = i(oe, 2);
	ie(se, {});
	var s = i(se, 2);
	n(s, 1, `hero abrams`);
	var le = r(s);
	t(
		le,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
`
	);
	var c = i(le, 2);
	n(c, 1, `ability infernal-resilience`);
	var ue = r(c);
	t(
		ue,
		() => `
<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>
<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>
<ul><li>Infernal Resilience T1 changed from &quot;+1.5 Health Regen&quot; to &quot;+200 Max Health&quot;</li><li>Infernal Resilience T2 changed from &quot;200 Max Health&quot; to &quot;+18% Melee Lifesteal&quot; (40% effective vs non-heroes)</li></ul>
`
	);
	var de = i(ue, 2);
	(a(de, { kind: `hero`, name: `Abrams`, ability: `Infernal Resilience` }), e(c));
	var fe = i(c, 2);
	n(fe, 1, `ability seismic-impact`);
	var pe = r(fe);
	t(
		pe,
		() => `
<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>
<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>
<ul><li>Seismic Impact T2 increased from +0.7s Stun Duration to +0.8s</li><li>Seismic Impact T3 Unstoppable duration increased from 5s to 6s</li></ul>
`
	);
	var me = i(pe, 2);
	(a(me, { kind: `hero`, name: `Abrams`, ability: `Seismic Impact` }), e(fe), e(s));
	var l = i(s, 2);
	n(l, 1, `hero apollo`);
	var he = r(l);
	t(
		he,
		() => `
<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>
<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>
<ul><li>Improved the hero&#x27;s hitboxes (easier to hit)</li><li>Base regen reduced from 2 to 1</li></ul>
`
	);
	var u = i(he, 2);
	n(u, 1, `ability riposte`);
	var ge = r(u);
	t(
		ge,
		() => `
<p><a href="/ability/riposte"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Riposte change history</a></p>
<h4 id="riposte"><a href="/ability/riposte">Riposte</a></h4>
<ul><li>Riposte no longer automatically dashes. It now grants you a sub ability immediately to target the hero you want to jump to for a brief duration (can target the enemy before the parry to buffer it). Cast range is 25m.</li><li>Riposte no longer triggers on damage auras (things like Flame Dash)</li><li>Riposte no longer triggers off of objective damage</li></ul>
`
	);
	var _e = i(ge, 2);
	(a(_e, { kind: `hero`, name: `Apollo`, ability: `Riposte` }), e(u));
	var ve = i(u, 2);
	n(ve, 1, `ability flawless-advance`);
	var ye = r(ve);
	t(
		ye,
		() => `
<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>
<h4 id="flawless-advance"><a href="/ability/flawless-advance">Flawless Advance</a></h4>
<ul><li>Flawless Advance hitbox reduced by 10%</li></ul>
`
	);
	var be = i(ye, 2);
	(a(be, { kind: `hero`, name: `Apollo`, ability: `Flawless Advance` }), e(ve), e(l));
	var d = i(l, 2);
	n(d, 1, `hero bebop`);
	var xe = r(d);
	t(
		xe,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
<ul><li>Bullet damage per boon reduced from 0.139 to 0.115</li></ul>
`
	);
	var f = i(xe, 2);
	n(f, 1, `ability exploding-uppercut`);
	var Se = r(f);
	t(
		Se,
		() => `
<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Exploding Uppercut change history</a></p>
<h4 id="exploding-uppercut"><a href="/ability/exploding-uppercut">Exploding Uppercut</a></h4>
<ul><li>Exploding Uppercut T2 weapon damage reduced from +40% to +30%</li></ul>
`
	);
	var Ce = i(Se, 2);
	(a(Ce, { kind: `hero`, name: `Bebop`, ability: `Exploding Uppercut` }), e(f));
	var we = i(f, 2);
	n(we, 1, `ability sticky-bomb`);
	var Te = r(we);
	t(
		Te,
		() => `
<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>
<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>
<ul><li>Sticky Bomb T2 increased from +75 Damage to +85</li></ul>
`
	);
	var Ee = i(Te, 2);
	(a(Ee, { kind: `hero`, name: `Bebop`, ability: `Sticky Bomb` }), e(we), e(d));
	var p = i(d, 2);
	n(p, 1, `hero billy`);
	var De = r(p);
	t(
		De,
		() => `
<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>
<h3 id="billy"><a href="/hero/billy">Billy</a></h3>
<ul><li>Health per boon increased from +48 to +59</li><li>Bullet damage per boon reduced from 0.165 to 0.142</li></ul>
`
	);
	var Oe = i(De, 2);
	n(Oe, 1, `ability rising-ram`);
	var ke = r(Oe);
	t(
		ke,
		() => `
<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>
<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>
`
	);
	var Ae = i(ke, 2),
		je = r(Ae),
		Me = r(je);
	t(Me, () => `Rising Ram cooldown increased from 30s to 32s`);
	var Ne = i(Me, 2);
	(o(Ne, {
		kind: `hero`,
		name: `Billy`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Rising Ram cooldown increased from 30s to 32s`
	}),
		e(je));
	var Pe = i(je, 2);
	(t(Pe, () => `Rising Ram T2 increased from +0.3s Duration to +0.4s`, !0), e(Pe));
	var Fe = i(Pe, 2);
	(t(Fe, () => `Rising Ram T3 increased from -10s Cooldown to -13s`, !0), e(Fe), e(Ae));
	var Ie = i(Ae, 2);
	(a(Ie, { kind: `hero`, name: `Billy`, ability: `Rising Ram` }), e(Oe), e(p));
	var m = i(p, 2);
	n(m, 1, `hero calico`);
	var Le = r(m);
	t(
		Le,
		() => `
<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>
<h3 id="calico"><a href="/hero/calico">Calico</a></h3>
`
	);
	var Re = i(Le, 2);
	n(Re, 1, `ability gloom-bomb`);
	var ze = r(Re);
	t(
		ze,
		() => `
<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bomb change history</a></p>
<h4 id="gloom-bomb"><a href="/ability/gloom-bombs">Gloom Bomb</a></h4>
<ul><li>Gloom Bomb T2 changed from &quot;+75 Damage to Barriers&quot; to &quot;-5% Melee Resist for 5s Per Bomb&quot; (stacks)</li></ul>
`
	);
	var Be = i(ze, 2);
	(a(Be, { kind: `hero`, name: `Calico`, ability: `Gloom Bomb` }), e(Re), e(m));
	var h = i(m, 2);
	n(h, 1, `hero celeste`);
	var Ve = r(h);
	t(
		Ve,
		() => `
<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>
<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>
<ul><li>Improved the hero&#x27;s hitboxes (easier to hit)</li><li>Stamina cooldown increased from 4.5s to 5s</li></ul>
`
	);
	var g = i(Ve, 2);
	n(g, 1, `ability radiant-daggers`);
	var He = r(g);
	t(
		He,
		() => `
<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>
<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>
<ul><li>Radiant Daggers T2 changed from &quot;-18s Cooldown and +70 Damage&quot; to &quot;-22s Cooldown and +80 Damage&quot;</li></ul>
`
	);
	var Ue = i(He, 2);
	(a(Ue, { kind: `hero`, name: `Celeste`, ability: `Radiant Daggers` }), e(g));
	var We = i(g, 2);
	n(We, 1, `ability shining-wonder`);
	var Ge = r(We);
	t(
		Ge,
		() => `
<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>
<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>
<ul><li>Shining Wonder T2 increased from +50 Damage to +70</li></ul>
`
	);
	var Ke = i(Ge, 2);
	(a(Ke, { kind: `hero`, name: `Celeste`, ability: `Shining Wonder` }), e(We), e(h));
	var _ = i(h, 2);
	n(_, 1, `hero doorman`);
	var qe = r(_);
	t(
		qe,
		() => `
<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>
<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>
`
	);
	var v = i(qe, 2);
	n(v, 1, `ability call-bell`);
	var Je = r(v);
	t(
		Je,
		() => `
<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>
<h4 id="call-bell"><a href="/ability/call-bell">Call Bell</a></h4>
`
	);
	var Ye = i(Je, 2),
		Xe = r(Ye),
		Ze = r(Xe);
	t(Ze, () => `Call Bell radius reduced from 6m to 5.5m`);
	var Qe = i(Ze, 2);
	(o(Qe, {
		kind: `hero`,
		name: `Doorman`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Call Bell radius reduced from 6m to 5.5m`
	}),
		e(Xe));
	var $e = i(Xe, 2),
		et = r($e);
	t(et, () => `Call Bell T3 radius increased from +4m to +4.5m`);
	var tt = i(et, 2);
	(o(tt, {
		kind: `hero`,
		name: `Doorman`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Call Bell T3 radius increased from +4m to +4.5m`
	}),
		e($e));
	var nt = i($e, 2);
	(t(nt, () => `Call Bell explosion damage spirit scaling reduced from 1.4 to 1.3`, !0),
		e(nt));
	var rt = i(nt, 2);
	(t(
		rt,
		() =>
			`Call Bell inaccuracy debuff no longer diminishes from 100% to 0% over 1 second (the rest of the debuff is 4s)`,
		!0
	),
		e(rt));
	var it = i(rt, 2);
	(t(
		it,
		() =>
			`Call Bell inaccuracy debuff reduced from -100% to -40% (lasts the full duration)`,
		!0
	),
		e(it),
		e(Ye));
	var at = i(Ye, 2);
	(a(at, { kind: `hero`, name: `Doorman`, ability: `Call Bell` }), e(v));
	var y = i(v, 2);
	n(y, 1, `ability doorway`);
	var ot = r(y);
	t(
		ot,
		() => `
<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway change history</a></p>
<h4 id="doorway"><a href="/ability/doorway">Doorway</a></h4>
<ul><li>Doorways close sub ability now starts on cooldown for 8s</li><li>Doorway is no longer unsilenceable</li></ul>
`
	);
	var st = i(ot, 2);
	(a(st, { kind: `hero`, name: `Doorman`, ability: `Doorway` }), e(y));
	var ct = i(y, 2);
	n(ct, 1, `ability luggage-cart`);
	var lt = r(ct);
	t(
		lt,
		() => `
<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>
<h4 id="luggage-cart"><a href="/ability/luggage-cart">Luggage Cart</a></h4>
<ul><li>Fixed recent bug causing Luggage Cart not being dispelled</li></ul>
`
	);
	var ut = i(lt, 2);
	(a(ut, { kind: `hero`, name: `Doorman`, ability: `Luggage Cart` }), e(ct), e(_));
	var b = i(_, 2);
	n(b, 1, `hero drifter`);
	var dt = r(b);
	t(
		dt,
		() => `
<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>
<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>
`
	);
	var ft = i(dt, 2);
	n(ft, 1, `ability rend`);
	var pt = r(ft);
	t(
		pt,
		() => `
<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>
<h4 id="rend"><a href="/ability/rend">Rend</a></h4>
<ul><li>Rend T3 no longer increases scaling by 0.4</li><li>Rend T3 now also deals Heavy Melee Damage (0.55 scale)</li></ul>
`
	);
	var mt = i(pt, 2);
	(a(mt, { kind: `hero`, name: `Drifter`, ability: `Rend` }), e(ft), e(b));
	var x = i(b, 2);
	n(x, 1, `hero dynamo`);
	var ht = r(x);
	t(
		ht,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var S = i(ht, 2);
	n(S, 1, `ability kinetic-pulse`);
	var gt = r(S);
	t(
		gt,
		() => `
<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>
<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>
<ul><li>Kinetic Pulse T2 reduced from -18% Bullet Resistance to -15%</li><li>Kinetic Pulse spirit scaling reduced from 1.65 to 1.55</li></ul>
`
	);
	var _t = i(gt, 2);
	(a(_t, { kind: `hero`, name: `Dynamo`, ability: `Kinetic Pulse` }), e(S));
	var vt = i(S, 2);
	n(vt, 1, `ability quantum-entanglement`);
	var yt = r(vt);
	t(
		yt,
		() => `
<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>
<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>
<ul><li>Quantum Entanglement T3 changed from dispelling non-ult debuffs to reducing the duration of non-ult debuffs by 50%</li></ul>
`
	);
	var bt = i(yt, 2);
	(a(bt, { kind: `hero`, name: `Dynamo`, ability: `Quantum Entanglement` }), e(vt), e(x));
	var C = i(x, 2);
	n(C, 1, `hero graves`);
	var xt = r(C);
	t(
		xt,
		() => `
<p><a href="/hero/graves"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Graves patch history</a></p>
<h3 id="graves"><a href="/hero/graves">Graves</a></h3>
<ul><li>Sprint speed increased from 1.6 to 2.2</li></ul>
`
	);
	var w = i(xt, 2);
	n(w, 1, `ability grasping-hands`);
	var St = r(w);
	t(
		St,
		() => `
<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands change history</a></p>
<h4 id="grasping-hands"><a href="/ability/grasping-hands">Grasping Hands</a></h4>
<ul><li>Grasping Hands now spawns a ghoul in the base ability (T3 still increases it by 1)</li></ul>
`
	);
	var Ct = i(St, 2);
	(a(Ct, { kind: `hero`, name: `Graves`, ability: `Grasping Hands` }), e(w));
	var T = i(w, 2);
	n(T, 1, `ability jar-of-dead`);
	var wt = r(T);
	t(
		wt,
		() => `
<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>
<h4 id="jar-of-dead"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>
<ul><li>Updated dash ranges for Deadheads to be calculated from the center of Graves when they are following her</li><li>Fixed Fire Rate buffs for Deadheads not being applied to their next attack, but only on subsequent attacks</li><li>Fixed Deadheads being unable to dash through veils</li><li>Fixed Deadheads being unable to dash to targets at the very end of your attack range when they are in follow mode</li><li>Fixed Deadhead&#x27;s damage taken from bullets being unaffected by fall-off</li><li>Added 0.1s buffer duration for Deadheads losing line-of-sight before they stop following an enemy</li><li>Fixed Deadheads becoming inactive if Graves dies while they are following her</li><li>Jar of Dead spirit scaling reduced from 0.35 to 0.31 (they are better at dealing damage now)</li><li>Increased speed &amp; acceleration of Deadheads only when they are following Graves - doesn&#x27;t affect in-combat</li><li>Fixed certain projectiles (i.e Gray Talon&#x27;s Bird) colliding with Deadheads</li><li>Update Grave&#x27;s melee to also set the dash target for Deadheads</li></ul>
`
	);
	var Tt = i(wt, 2);
	(a(Tt, { kind: `hero`, name: `Graves`, ability: `Jar of Dead` }), e(T));
	var Et = i(T, 2);
	(t(
		Et,
		() => `
<ul><li>Bullet damage and growth reduced by -10%</li></ul>
`
	),
		e(C));
	var E = i(C, 2);
	n(E, 1, `hero grey-talon`);
	var Dt = r(E);
	t(
		Dt,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
`
	);
	var Ot = i(Dt, 2);
	n(Ot, 1, `ability rain-of-arrows`);
	var kt = r(Ot);
	t(
		kt,
		() => `
<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>
<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>
`
	);
	var At = i(kt, 2),
		jt = r(At),
		Mt = r(jt);
	t(Mt, () => `Rain of Arrows cooldown reduced from 30s to 22s`);
	var Nt = i(Mt, 2);
	(o(Nt, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Rain of Arrows cooldown reduced from 30s to 22s`
	}),
		e(jt));
	var Pt = i(jt, 2);
	(t(Pt, () => `Rain of Arrows cast delay reduced from 0.5s to 0.2s`, !0), e(Pt));
	var Ft = i(Pt, 2);
	(t(Ft, () => `Rain of Arrows duration reduced from 7s to 4s`, !0), e(Ft));
	var It = i(Ft, 2);
	(t(It, () => `Rain of Arrows moving ability in air improved`, !0), e(It));
	var Lt = i(It, 2);
	(t(Lt, () => `Rain of Arrow stamina distance changed from being -9% to +25%`, !0),
		e(Lt));
	var Rt = i(Lt, 2);
	(t(Rt, () => `Rain of Arrows Weapon Damage bonus reduced from +4 to +3`, !0), e(Rt));
	var zt = i(Rt, 2);
	(t(
		zt,
		() =>
			`Rain of Arrows T1 changed from &quot;-14s Cooldown&quot; to &quot;+3 Weapon Damage and +30% Slow for 1.5s&quot;`,
		!0
	),
		e(zt));
	var Bt = i(zt, 2);
	(t(
		Bt,
		() =>
			`Rain of Arrows T2 changed from &quot;+5 Weapon Damage and +40% Slow for 1.5s&quot; to &quot;-13s Cooldown&quot; (Total CD from 16s to 9s)`,
		!0
	),
		e(Bt),
		e(At));
	var Vt = i(At, 2);
	(a(Vt, { kind: `hero`, name: `Grey Talon`, ability: `Rain of Arrows` }), e(Ot), e(E));
	var D = i(E, 2);
	n(D, 1, `hero haze`);
	var Ht = r(D);
	t(
		Ht,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var Ut = i(Ht, 2);
	n(Ut, 1, `ability fixation`);
	var Wt = r(Ut);
	t(
		Wt,
		() => `
<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>
<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>
<ul><li>Fixation T3 increased from +0.12 to +0.14</li></ul>
`
	);
	var Gt = i(Wt, 2);
	(a(Gt, { kind: `hero`, name: `Haze`, ability: `Fixation` }), e(Ut), e(D));
	var Kt = i(D, 2);
	t(
		Kt,
		() => `
<div class="hero holliday">
<p><a href="/hero/holliday"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Holliday patch history</a></p>
<h3 id="holliday"><a href="/hero/holliday">Holliday</a></h3>
<ul><li>Base bullet damage increased from 18.8 to 19.7</li><li>Health regen increased from 1 to 2</li></ul>
</div>
`
	);
	var O = i(Kt, 2);
	n(O, 1, `hero infernus`);
	var qt = r(O);
	t(
		qt,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
<ul><li>Bullet size increased from 3 to 4</li></ul>
`
	);
	var Jt = i(qt, 2);
	n(Jt, 1, `ability concussive-combustion`);
	var Yt = r(Jt);
	t(
		Yt,
		() => `
<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>
<h4 id="concussive-combustion"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>
<ul><li>Concussive Combustion T3 increased from +0.75s Stun Duration to +0.9s</li></ul>
`
	);
	var Xt = i(Yt, 2);
	(a(Xt, { kind: `hero`, name: `Infernus`, ability: `Concussive Combustion` }),
		e(Jt),
		e(O));
	var k = i(O, 2);
	n(k, 1, `hero kelvin`);
	var Zt = r(k);
	t(
		Zt,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
`
	);
	var A = i(Zt, 2);
	n(A, 1, `ability frost-grenade`);
	var Qt = r(A);
	t(
		Qt,
		() => `
<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>
<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>
<ul><li>Frost Grenade damage spirit scaling reduced from 0.7 to 0.6</li></ul>
`
	);
	var $t = i(Qt, 2);
	(a($t, { kind: `hero`, name: `Kelvin`, ability: `Frost Grenade` }), e(A));
	var j = i(A, 2);
	n(j, 1, `ability ice-path`);
	var en = r(j);
	t(
		en,
		() => `
<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>
<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>
<ul><li>When interrupted on Ice Path, it no longer creates an ice path below him and instead lets him fall to the ground</li></ul>
`
	);
	var tn = i(en, 2);
	(a(tn, { kind: `hero`, name: `Kelvin`, ability: `Ice Path` }), e(j));
	var nn = i(j, 2);
	n(nn, 1, `ability arctic-beam-dps`);
	var rn = r(nn);
	t(
		rn,
		() => `
<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam DPS change history</a></p>
<h4 id="arctic-beam-dps"><a href="/ability/arctic-beam">Arctic Beam DPS</a></h4>
<ul><li>Arctic Beam DPS spirit scaling reduced from 0.5 to 0.38</li></ul>
`
	);
	var an = i(rn, 2);
	(a(an, { kind: `hero`, name: `Kelvin`, ability: `Arctic Beam DPS` }), e(nn), e(k));
	var M = i(k, 2);
	n(M, 1, `hero lash`);
	var on = r(M);
	t(
		on,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
<ul><li>Bullet damage per boon reduced from 0.341 to 0.31</li></ul>
`
	);
	var N = i(on, 2);
	n(N, 1, `ability ground-strike`);
	var sn = r(N);
	t(
		sn,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>
<ul><li>Ground Strike damage per meter spirit scaling increased from 0.0372 to 0.04</li></ul>
`
	);
	var cn = i(sn, 2);
	(a(cn, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), e(N));
	var ln = i(N, 2);
	n(ln, 1, `ability grapple`);
	var un = r(ln);
	t(
		un,
		() => `
<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>
<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>
<ul><li>Grapple T2 bonus damage no longer stacks with itself, but instead refreshes the duration</li><li>Grapple T3 now also grants +1 Charge</li></ul>
`
	);
	var dn = i(un, 2);
	(a(dn, { kind: `hero`, name: `Lash`, ability: `Grapple` }), e(ln), e(M));
	var P = i(M, 2);
	n(P, 1, `hero mcginnis`);
	var fn = r(P);
	t(
		fn,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
<ul><li>Bullet damage per boon increased from 0.17 to 0.18</li></ul>
`
	);
	var F = i(fn, 2);
	n(F, 1, `ability heavy-barrage`);
	var pn = r(F);
	t(
		pn,
		() => `
<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>
<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>
<ul><li>Fixed Heavy Barrage not triggering Diviner&#x27;s Kevlar</li></ul>
`
	);
	var mn = i(pn, 2);
	(a(mn, { kind: `hero`, name: `McGinnis`, ability: `Heavy Barrage` }), e(F));
	var hn = i(F, 2);
	n(hn, 1, `ability medicinal-specter`);
	var gn = r(hn);
	t(
		gn,
		() => `
<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>
<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>
`
	);
	var _n = i(gn, 2),
		vn = r(_n),
		yn = r(vn);
	t(yn, () => `Medicinal Specter radius increased from 5.5m to 6m`);
	var bn = i(yn, 2);
	(o(bn, {
		kind: `hero`,
		name: `McGinnis`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Medicinal Specter radius increased from 5.5m to 6m`
	}),
		e(vn),
		e(_n));
	var xn = i(_n, 2);
	(a(xn, { kind: `hero`, name: `McGinnis`, ability: `Medicinal Specter` }), e(hn), e(P));
	var I = i(P, 2);
	n(I, 1, `hero mina`);
	var Sn = r(I);
	t(
		Sn,
		() => `
<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>
<h3 id="mina"><a href="/hero/mina">Mina</a></h3>
<ul><li>Innate -8% Debuff Resist</li></ul>
`
	);
	var L = i(Sn, 2);
	n(L, 1, `ability rake`);
	var Cn = r(L);
	t(
		Cn,
		() => `
<p><a href="/ability/rake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_rake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rake change history</a></p>
<h4 id="rake"><a href="/ability/rake">Rake</a></h4>
<ul><li>Fixed Rake sometimes not working with high ping</li></ul>
`
	);
	var wn = i(Cn, 2);
	(a(wn, { kind: `hero`, name: `Mina`, ability: `Rake` }), e(L));
	var R = i(L, 2);
	n(R, 1, `ability love-bites`);
	var Tn = r(R);
	t(
		Tn,
		() => `
<p><a href="/ability/love-bites"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_love_bites.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Love Bites change history</a></p>
<h4 id="love-bites"><a href="/ability/love-bites">Love Bites</a></h4>
<ul><li>Love Bites T3 increased from -4s Cooldown to -5s</li><li>Love Bites no longer applies the flat on hit damage to abilities (was doing 20% of its value on Nox Nostra)</li></ul>
`
	);
	var En = i(Tn, 2);
	(a(En, { kind: `hero`, name: `Mina`, ability: `Love Bites` }), e(R));
	var Dn = i(R, 2);
	n(Dn, 1, `ability nox-nostra`);
	var On = r(Dn);
	t(
		On,
		() => `
<p><a href="/ability/nox-nostra"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_nox_nostra.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Nox Nostra change history</a></p>
<h4 id="nox-nostra"><a href="/ability/nox-nostra">Nox Nostra</a></h4>
<ul><li>Nox Nostra T3 reduced from 1% Current HP to 0.5%</li></ul>
`
	);
	var kn = i(On, 2);
	(a(kn, { kind: `hero`, name: `Mina`, ability: `Nox Nostra` }), e(Dn), e(I));
	var z = i(I, 2);
	n(z, 1, `hero mirage`);
	var An = r(z);
	t(
		An,
		() => `
<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>
<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>
`
	);
	var jn = i(An, 2);
	n(jn, 1, `ability djinn-s-mark`);
	var Mn = r(jn);
	t(
		Mn,
		() => `
<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>
<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>
<ul><li>Updated Djinn&#x27;s Mark visuals</li></ul>
`
	);
	var Nn = i(Mn, 2);
	(a(Nn, { kind: `hero`, name: `Mirage`, ability: `Djinn's Mark` }), e(jn), e(z));
	var B = i(z, 2);
	n(B, 1, `hero mo-krill`);
	var Pn = r(B);
	t(
		Pn,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
<ul><li>Getting hit with a melee no longer knocks you up when you are burrowed</li></ul>
`
	);
	var Fn = i(Pn, 2);
	n(Fn, 1, `ability sand-blast`);
	var In = r(Fn);
	t(
		In,
		() => `
<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>
<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>
<ul><li>Sand Blast T3 increased from +1s Duration to +1.5s</li></ul>
`
	);
	var Ln = i(In, 2);
	(a(Ln, { kind: `hero`, name: `Mo & Krill`, ability: `Sand Blast` }), e(Fn), e(B));
	var V = i(B, 2);
	n(V, 1, `hero paige`);
	var Rn = r(V);
	t(
		Rn,
		() => `
<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>
<h3 id="paige"><a href="/hero/paige">Paige</a></h3>
`
	);
	var H = i(Rn, 2);
	n(H, 1, `ability bookwyrm`);
	var zn = r(H);
	t(
		zn,
		() => `
<p><a href="/ability/bookwyrm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bookwyrm change history</a></p>
<h4 id="bookwyrm"><a href="/ability/bookwyrm">Bookwyrm</a></h4>
<ul><li>Bookwyrm T2 improved from -8s Cooldown to -12s</li></ul>
`
	);
	var Bn = i(zn, 2);
	(a(Bn, { kind: `hero`, name: `Paige`, ability: `Bookwyrm` }), e(H));
	var Vn = i(H, 2);
	n(Vn, 1, `ability rallying-charge`);
	var Hn = r(Vn);
	t(
		Hn,
		() => `
<p><a href="/ability/rallying-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rallying Charge change history</a></p>
<h4 id="rallying-charge"><a href="/ability/rallying-charge">Rallying Charge</a></h4>
<ul><li>Rallying Charge T3 increased from +135 Damage to +160</li><li>Rallying Charge now has half cooldown if it hits no allies or enemies</li></ul>
`
	);
	var Un = i(Hn, 2);
	(a(Un, { kind: `hero`, name: `Paige`, ability: `Rallying Charge` }), e(Vn), e(V));
	var U = i(V, 2);
	n(U, 1, `hero paradox`);
	var Wn = r(U);
	t(
		Wn,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var W = i(Wn, 2);
	n(W, 1, `ability time-wall`);
	var Gn = r(W);
	t(
		Gn,
		() => `
<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>
<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>
<ul><li>Time Wall T1 duration increased from +2.5s to +3.5s</li><li>Time Wall T3 increased from +1 Charge to +2</li><li>Time Wall T3 Charge Delay reduced from 4s to 2s</li></ul>
`
	);
	var Kn = i(Gn, 2);
	(a(Kn, { kind: `hero`, name: `Paradox`, ability: `Time Wall` }), e(W));
	var G = i(W, 2);
	n(G, 1, `ability kinetic-carbine`);
	var qn = r(G);
	t(
		qn,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>
<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>
<ul><li>Kinetic Carbine T3 increased from +50% Max Damage Scaling to +55%</li></ul>
`
	);
	var Jn = i(qn, 2);
	(a(Jn, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine` }), e(G));
	var Yn = i(G, 2);
	n(Yn, 1, `ability paradoxical-swap`);
	var Xn = r(Yn);
	t(
		Xn,
		() => `
<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>
<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>
`
	);
	var Zn = i(Xn, 2),
		Qn = r(Zn),
		$n = r(Qn);
	t($n, () => `Paradoxical Swap damage increased from 125 to 150`);
	var er = i($n, 2);
	(o(er, {
		kind: `hero`,
		name: `Paradox`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Paradoxical Swap damage increased from 125 to 150`
	}),
		e(Qn),
		e(Zn));
	var tr = i(Zn, 2);
	(a(tr, { kind: `hero`, name: `Paradox`, ability: `Paradoxical Swap` }), e(Yn), e(U));
	var K = i(U, 2);
	n(K, 1, `hero pocket`);
	var nr = r(K);
	t(
		nr,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
`
	);
	var q = i(nr, 2);
	n(q, 1, `ability flying-cloak`);
	var rr = r(q);
	t(
		rr,
		() => `
<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>
<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>
<ul><li>Flying Cloak T2 weapon damage duration reduced from 8s to 6s</li></ul>
`
	);
	var ir = i(rr, 2);
	(a(ir, { kind: `hero`, name: `Pocket`, ability: `Flying Cloak` }), e(q));
	var ar = i(q, 2);
	n(ar, 1, `ability affliction`);
	var or = r(ar);
	t(
		or,
		() => `
<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>
<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>
`
	);
	var sr = i(or, 2),
		cr = r(sr),
		lr = r(cr);
	t(lr, () => `Affliction cooldown increased from 140s to 150s`);
	var ur = i(lr, 2);
	(o(ur, {
		kind: `hero`,
		name: `Pocket`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Affliction cooldown increased from 140s to 150s`
	}),
		e(cr),
		e(sr));
	var dr = i(sr, 2);
	(a(dr, { kind: `hero`, name: `Pocket`, ability: `Affliction` }), e(ar), e(K));
	var J = i(K, 2);
	n(J, 1, `hero rem`);
	var fr = r(J);
	t(
		fr,
		() => `
<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>
<h3 id="rem"><a href="/hero/rem">Rem</a></h3>
`
	);
	var Y = i(fr, 2);
	n(Y, 1, `ability pillow-toss`);
	var pr = r(Y);
	t(
		pr,
		() => `
<p><a href="/ability/pillow-toss"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_pillow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pillow Toss change history</a></p>
<h4 id="pillow-toss"><a href="/ability/pillow-toss">Pillow Toss</a></h4>
<ul><li>Pillow Toss charge time reduced from 9s to 8s</li><li>Pillow Toss T3 increased from +90 to +100 Damage</li></ul>
`
	);
	var mr = i(pr, 2);
	(a(mr, { kind: `hero`, name: `Rem`, ability: `Pillow Toss` }), e(Y));
	var X = i(Y, 2);
	n(X, 1, `ability tag-along`);
	var hr = r(X);
	t(
		hr,
		() => `
<p><a href="/ability/tag-along"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_tag_along.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tag Along change history</a></p>
<h4 id="tag-along"><a href="/ability/tag-along">Tag Along</a></h4>
<ul><li>Tag Along burst heal now also applies to secondary allies that you jump to</li><li>Tag Along lingering heal duration reduced from 3s to 2s (values rebalanced to be the same overall heal just faster)</li><li>Tag Along T2 Barrier and Item Duration/Range effectiveness increased from 25% to 35%</li><li>Tag Along T3 now also increases Missing Health Heal from 0.03 to 0.05 and Regen Per Second from 0.66 to 1.0</li><li>Tag Along can now be cast through veils</li><li>Reduced lockout period after ejecting from Tag Along from 1s to 0.3s</li><li>Tag Along time to fly to your ally is now 50% faster</li><li>Tag Along heal duration is now displayed on the hud as well as the healthbar icon</li><li>Tag Along fixed specific abilities/items that could kill Rem while he&#x27;s napping</li><li>Tag Along now allows friendly auras to affect Rem</li><li>Tag Along eject is no longer affected by debuff resistance and now launches upwards slightly more to prevent hitting the ground</li><li>Tag Along eject no longer briefly restricts movement abilities and input</li></ul>
`
	);
	var gr = i(hr, 2);
	(a(gr, { kind: `hero`, name: `Rem`, ability: `Tag Along` }), e(X));
	var _r = i(X, 2);
	n(_r, 1, `ability naptime`);
	var vr = r(_r);
	t(
		vr,
		() => `
<p><a href="/ability/naptime"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Naptime change history</a></p>
<h4 id="naptime"><a href="/ability/naptime">Naptime</a></h4>
<ul><li>Naptime now provides +30% damage reduction in the base ability (T3 still adds +50%)</li></ul>
`
	);
	var yr = i(vr, 2);
	(a(yr, { kind: `hero`, name: `Rem`, ability: `Naptime` }), e(_r), e(J));
	var br = i(J, 2);
	t(
		br,
		() => `
<div class="hero seven">
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
<ul><li>Bullet damage growth reduced from 0.374 to 0.337</li><li>Crit reduction increased from 35% to 55%</li></ul>
</div>
`
	);
	var Z = i(br, 2);
	n(Z, 1, `hero shiv`);
	var xr = r(Z);
	t(
		xr,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
`
	);
	var Q = i(xr, 2);
	n(Q, 1, `ability slice-and-dice`);
	var Sr = r(Q);
	t(
		Sr,
		() => `
<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>
<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>
<ul><li>Slice and Dice T2 reduced from -8% Spirit Resist to -6%</li></ul>
`
	);
	var Cr = i(Sr, 2);
	(a(Cr, { kind: `hero`, name: `Shiv`, ability: `Slice and Dice` }), e(Q));
	var wr = i(Q, 2);
	n(wr, 1, `ability bloodletting-deferred-damage-cleared`);
	var Tr = r(wr);
	t(
		Tr,
		() => `
<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting Deferred Damage Cleared change history</a></p>
<h4 id="bloodletting-deferred-damage-cleared"><a href="/ability/bloodletting">Bloodletting Deferred Damage Cleared</a></h4>
<ul><li>Bloodletting Deferred Damage Cleared reduced from 40% to 35%</li></ul>
`
	);
	var Er = i(Tr, 2);
	(a(Er, { kind: `hero`, name: `Shiv`, ability: `Bloodletting Deferred Damage Cleared` }),
		e(wr));
	var Dr = i(wr, 2);
	n(Dr, 1, `ability bloodletting`);
	var Or = r(Dr);
	t(
		Or,
		() => `
<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>
<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>
<ul><li>Bloodletting T3 increased from +45% Deferred Damage Cleared to +50%</li></ul>
`
	);
	var kr = i(Or, 2);
	(a(kr, { kind: `hero`, name: `Shiv`, ability: `Bloodletting` }), e(Dr));
	var Ar = i(Dr, 2);
	n(Ar, 1, `ability killing-blow`);
	var jr = r(Ar);
	t(
		jr,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>
`
	);
	var Mr = i(jr, 2),
		Nr = r(Mr),
		Pr = r(Nr);
	t(Pr, () => `Killing Blow cooldown increased from 105s to 125s`);
	var Fr = i(Pr, 2);
	(o(Fr, {
		kind: `hero`,
		name: `Shiv`,
		groupIndex: 3,
		bulletIndex: 0,
		text: `Killing Blow cooldown increased from 105s to 125s`
	}),
		e(Nr));
	var Ir = i(Nr, 2);
	(t(Ir, () => `Killing Blow full rage damage bonus reduced from 14% to 12%`, !0), e(Ir));
	var Lr = i(Ir, 2);
	(t(Lr, () => `Killing Blow T2 increased from +8% Full Rage Damage Bonus to +10%`, !0),
		e(Lr));
	var Rr = i(Lr, 2);
	(t(Rr, () => `Killing Blow T2 now also reduces cooldown by -30s`, !0), e(Rr), e(Mr));
	var zr = i(Mr, 2);
	(a(zr, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), e(Ar), e(Z));
	var Br = i(Z, 2);
	n(Br, 1, `hero silver`);
	var Vr = r(Br);
	t(
		Vr,
		() => `
<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>
<h3 id="silver"><a href="/hero/silver">Silver</a></h3>
<ul><li>Bullet Cycle Time reduced from 0.9s to 0.85s (overall DPS adjusted to remain the same)</li></ul>
`
	);
	var Hr = i(Vr, 2);
	n(Hr, 1, `ability entangling-bola`);
	var Ur = r(Hr);
	t(
		Ur,
		() => `
<p><a href="/ability/entangling-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_bola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Bola change history</a></p>
<h4 id="entangling-bola"><a href="/ability/entangling-bola">Entangling Bola</a></h4>
<ul><li>Entangling Bola no longer prevents you from jumping and mantling</li><li>Entangling Bola T2 changed from &quot;+0.75s Duration&quot; to &quot;-5s Cooldown&quot;</li><li>Entangling Bola T3 changed from &quot;-5s Cooldown and Ricochet to 2 additional targets&quot; to &quot;+0.75s Duration and Ricochet to 2 additional targets&quot;</li></ul>
`
	);
	var Wr = i(Ur, 2);
	(a(Wr, { kind: `hero`, name: `Silver`, ability: `Entangling Bola` }), e(Hr));
	var Gr = i(Hr, 2);
	n(Gr, 1, `ability lycan-curse-fire-rate`);
	var Kr = r(Gr);
	t(
		Kr,
		() => `
<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse Fire Rate change history</a></p>
<h4 id="lycan-curse-fire-rate"><a href="/ability/lycan-curse">Lycan Curse Fire Rate</a></h4>
<ul><li>Lycan Curse Fire Rate reduced from 80% to 65%</li><li>Lycan Curse Fire Rate spirit scaling increased from 0.25 to 0.45</li></ul>
`
	);
	var qr = i(Kr, 2);
	(a(qr, { kind: `hero`, name: `Silver`, ability: `Lycan Curse Fire Rate` }),
		e(Gr),
		e(Br));
	var $ = i(Br, 2);
	n($, 1, `hero venator`);
	var Jr = r($);
	t(
		Jr,
		() => `
<p><a href="/hero/venator"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Venator patch history</a></p>
<h3 id="venator"><a href="/hero/venator">Venator</a></h3>
<ul><li>Health increased from 790+43/boon to 830+48/boon</li></ul>
`
	);
	var Yr = i(Jr, 2);
	n(Yr, 1, `ability hex-lined-snap-trap`);
	var Xr = r(Yr);
	t(
		Xr,
		() => `
<p><a href="/ability/hex-lined-snap-trap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hex-Lined Snap Trap change history</a></p>
<h4 id="hex-lined-snap-trap"><a href="/ability/hex-lined-snap-trap">Hex-Lined Snap Trap</a></h4>
<ul><li>Hex-Lined Snap Trap T3 increased from +25% Damage Against Revealed Targets to +30%</li><li>Hex-Lined Snap Trap T3 now also grants +1 Charge</li></ul>
`
	);
	var Zr = i(Xr, 2);
	(a(Zr, { kind: `hero`, name: `Venator`, ability: `Hex-Lined Snap Trap` }), e(Yr), e($));
	var Qr = i($, 2);
	n(Qr, 1, `hero victor`);
	var $r = r(Qr);
	t(
		$r,
		() => `
<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>
<h3 id="victor"><a href="/hero/victor">Victor</a></h3>
<ul><li>Bullet damage reduced from 13+0.3135 to 12+0.26</li></ul>
`
	);
	var ei = i($r, 2);
	n(ei, 1, `ability jumpstart`);
	var ti = r(ei);
	t(
		ti,
		() => `
<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>
<h4 id="jumpstart"><a href="/ability/jumpstart">Jumpstart</a></h4>
<ul><li>Jumpstart T3 spirit scaling increased from +0.6 to +0.9</li></ul>
`
	);
	var ni = i(ti, 2);
	(a(ni, { kind: `hero`, name: `Victor`, ability: `Jumpstart` }), e(ei));
	var ri = i(ei, 2);
	n(ri, 1, `ability aura-of-suffering`);
	var ii = r(ri);
	t(
		ii,
		() => `
<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>
<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>
<ul><li>Aura of Suffering now does 50% damage to objectives</li></ul>
`
	);
	var ai = i(ii, 2);
	(a(ai, { kind: `hero`, name: `Victor`, ability: `Aura of Suffering` }), e(ri), e(Qr));
	var oi = i(Qr, 2);
	n(oi, 1, `hero viscous`);
	var si = r(oi);
	t(
		si,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var ci = i(si, 2);
	n(ci, 1, `ability puddle-punch`);
	var li = r(ci);
	t(
		li,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
<ul><li>Puddle Punch T1 now also increases damage by +20</li><li>Puddle Punch T2 no longer increases damage by +30</li><li>Puddle Punch T2 now also grants +40% Lifesteal (1/4th against non-heroes)</li></ul>
`
	);
	var ui = i(li, 2);
	(a(ui, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), e(ci), e(oi));
	var di = i(oi, 2);
	n(di, 1, `hero vyper`);
	var fi = r(di);
	t(
		fi,
		() => `
<p><a href="/hero/vyper"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vyper patch history</a></p>
<h3 id="vyper"><a href="/hero/vyper">Vyper</a></h3>
`
	);
	var pi = i(fi, 2);
	n(pi, 1, `ability screwjab-dagger`);
	var mi = r(pi);
	t(
		mi,
		() => `
<p><a href="/ability/screwjab-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Screwjab Dagger change history</a></p>
<h4 id="screwjab-dagger"><a href="/ability/screwjab-dagger">Screwjab Dagger</a></h4>
<ul><li>Screwjab Dagger T2 bullet resist per stack from -5% to -6%</li><li>Screwjab Dagger T3 now also increases max stacks by 2</li></ul>
`
	);
	var hi = i(mi, 2);
	(a(hi, { kind: `hero`, name: `Vyper`, ability: `Screwjab Dagger` }), e(pi), e(di));
	var gi = i(di, 2);
	n(gi, 1, `hero warden`);
	var _i = r(gi);
	t(
		_i,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Bullet damage per boon reduced from 0.38 to 0.34</li></ul>
`
	);
	var vi = i(_i, 2);
	n(vi, 1, `ability willpower`);
	var yi = r(vi);
	t(
		yi,
		() => `
<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>
<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>
<ul><li>Willpower T3 debuff resistance now retroactively applies to existing debuffs when cast</li></ul>
`
	);
	var bi = i(yi, 2);
	(a(bi, { kind: `hero`, name: `Warden`, ability: `Willpower` }), e(vi));
	var xi = i(vi, 2);
	n(xi, 1, `ability binding-word`);
	var Si = r(xi);
	t(
		Si,
		() => `
<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>
<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>
<ul><li>Binding Word T2 no longer increases cast range by +12m</li></ul>
`
	);
	var Ci = i(Si, 2);
	(a(Ci, { kind: `hero`, name: `Warden`, ability: `Binding Word` }), e(xi), e(gi));
	var wi = i(gi, 2);
	n(wi, 1, `hero yamato`);
	var Ti = r(wi);
	t(
		Ti,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var Ei = i(Ti, 2);
	n(Ei, 1, `ability power-slash`);
	var Di = r(Ei);
	t(
		Di,
		() => `
<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>
<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>
<ul><li>Power Slash post cast time reduced from 0.4s to 0.2s</li><li>Power Slash spirit scaling increased from 1.86s to 2.1</li></ul>
`
	);
	var Oi = i(Di, 2);
	(a(Oi, { kind: `hero`, name: `Yamato`, ability: `Power Slash` }), e(Ei));
	var ki = i(Ei, 2);
	n(ki, 1, `ability flying-slash`);
	var Ai = r(ki);
	t(
		Ai,
		() => `
<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>
<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>
<ul><li>Flying Slash range increased from 25m to 30m</li><li>Flying Slash T2 no longer grants +20m Cast Range</li><li>Flying Slash T3 now also grants +15m Cast Range</li><li>Flying Slash T3 increased from +1 Charge to +2</li></ul>
`
	);
	var ji = i(Ai, 2);
	(a(ji, { kind: `hero`, name: `Yamato`, ability: `Flying Slash` }), e(ki));
	var Mi = i(ki, 2);
	n(Mi, 1, `ability crimson-slash`);
	var Ni = r(Mi);
	t(
		Ni,
		() => `
<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>
<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>
<ul><li>Fixed Crimson Slash not being able to hit anything if the player is aimed too high or low</li></ul>
`
	);
	var Pi = i(Ni, 2);
	(a(Pi, { kind: `hero`, name: `Yamato`, ability: `Crimson Slash` }), e(Mi));
	var Fi = i(Mi, 2);
	n(Fi, 1, `ability shadow-transformation`);
	var Ii = r(Fi);
	t(
		Ii,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation T1 increased from +5 Weapon Damage to +7</li></ul>
`
	);
	var Li = i(Ii, 2);
	(a(Li, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }),
		e(Fi),
		e(wi));
	var Ri = i(wi, 2);
	t(
		Ri,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var zi = i(Ri, 2);
	ae(zi, {});
	var Bi = i(zi, 2);
	n(Bi, 1, `item active-reload`);
	var Vi = r(Bi);
	t(
		Vi,
		() => `
<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>
<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>
<ul><li>Lifesteal increased from 14% to 16%</li></ul>
`
	);
	var Hi = i(Vi, 2);
	(a(Hi, { kind: `item`, name: `Active Reload`, ability: null }), e(Bi));
	var Ui = i(Bi, 2);
	n(Ui, 1, `item alchemical-fire`);
	var Wi = r(Ui);
	t(
		Wi,
		() => `
<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>
<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>
<ul><li>Damage per Second spirit scaling increased from 0.152 to 0.2</li></ul>
`
	);
	var Gi = i(Wi, 2);
	(a(Gi, { kind: `item`, name: `Alchemical Fire`, ability: null }), e(Ui));
	var Ki = i(Ui, 2);
	n(Ki, 1, `item arcane-surge`);
	var qi = r(Ki);
	t(
		qi,
		() => `
<p><a href="/item/arcane-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arcane Surge patch history</a></p>
<h3 id="arcane-surge"><a href="/item/arcane-surge">Arcane Surge</a></h3>
<ul><li>Fixed various interaction bugs with different abilities</li></ul>
`
	);
	var Ji = i(qi, 2);
	(a(Ji, { kind: `item`, name: `Arcane Surge`, ability: null }), e(Ki));
	var Yi = i(Ki, 2);
	n(Yi, 1, `item arctic-blast`);
	var Xi = r(Yi);
	t(
		Xi,
		() => `
<p><a href="/item/arctic-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arctic_blast.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arctic Blast patch history</a></p>
<h3 id="arctic-blast"><a href="/item/arctic-blast">Arctic Blast</a></h3>
`
	);
	var Zi = i(Xi, 2),
		Qi = r(Zi);
	(t(
		Qi,
		() => `Slowed targets now have their stamina regen frozen for the 4s slow duration`,
		!0
	),
		e(Qi));
	var $i = i(Qi, 2),
		ea = r($i);
	t(ea, () => `Radius increased from 12m to 16m`);
	var ta = i(ea, 2);
	(o(ta, {
		kind: `item`,
		name: `Arctic Blast`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Radius increased from 12m to 16m`
	}),
		e($i));
	var na = i($i, 2);
	(t(na, () => `Damage height increased from 5m to 7m`, !0), e(na));
	var ra = i(na, 2);
	(t(ra, () => `No longer does 15% damage amp`, !0), e(ra));
	var ia = i(ra, 2);
	(t(ia, () => `Immobilize increased from 0.75s to 1s`, !0), e(ia), e(Zi));
	var aa = i(Zi, 2);
	(a(aa, { kind: `item`, name: `Arctic Blast`, ability: null }), e(Yi));
	var oa = i(Yi, 2);
	n(oa, 1, `item battle-vest`);
	var sa = r(oa);
	t(
		sa,
		() => `
<p><a href="/item/battle-vest"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/battle_vest.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Battle Vest patch history</a></p>
<h3 id="battle-vest"><a href="/item/battle-vest">Battle Vest</a></h3>
<ul><li>Weapon Damage increased from 15% to 18%</li></ul>
`
	);
	var ca = i(sa, 2);
	(a(ca, { kind: `item`, name: `Battle Vest`, ability: null }), e(oa));
	var la = i(oa, 2);
	n(la, 1, `item bullet-lifesteal`);
	var ua = r(la);
	t(
		ua,
		() => `
<p><a href="/item/bullet-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Lifesteal patch history</a></p>
<h3 id="bullet-lifesteal"><a href="/item/bullet-lifesteal">Bullet Lifesteal</a></h3>
<ul><li>Now grants +6% Weapon Damage</li></ul>
`
	);
	var da = i(ua, 2);
	(a(da, { kind: `item`, name: `Bullet Lifesteal`, ability: null }), e(la));
	var fa = i(la, 2);
	n(fa, 1, `item bullet-resist-shredder`);
	var pa = r(fa);
	t(
		pa,
		() => `
<p><a href="/item/bullet-resist-shredder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resist Shredder patch history</a></p>
<h3 id="bullet-resist-shredder"><a href="/item/bullet-resist-shredder">Bullet Resist Shredder</a></h3>
<ul><li>No longer grants +65 Bonus Health</li><li>Bullet Resist increased from 8% to 9%</li><li>Now grants +9% Weapon Damage</li></ul>
`
	);
	var ma = i(pa, 2);
	(a(ma, { kind: `item`, name: `Bullet Resist Shredder`, ability: null }), e(fa));
	var ha = i(fa, 2);
	n(ha, 1, `item capacitor`);
	var ga = r(ha);
	t(
		ga,
		() => `
<p><a href="/item/capacitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Capacitor patch history</a></p>
<h3 id="capacitor"><a href="/item/capacitor">Capacitor</a></h3>
<ul><li>Proc cooldown reduced from 0.25s to 0.2s</li></ul>
`
	);
	var _a = i(ga, 2);
	(a(_a, { kind: `item`, name: `Capacitor`, ability: null }), e(ha));
	var va = i(ha, 2);
	n(va, 1, `item cold-front`);
	var ya = r(va);
	t(
		ya,
		() => `
<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>
<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>
`
	);
	var ba = i(ya, 2),
		xa = r(ba),
		Sa = r(xa);
	t(Sa, () => `Radius reduced from 12m to 10m`);
	var Ca = i(Sa, 2);
	(o(Ca, {
		kind: `item`,
		name: `Cold Front`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Radius reduced from 12m to 10m`
	}),
		e(xa));
	var wa = i(xa, 2);
	(t(wa, () => `Damage height increased from 5m to 7m`, !0), e(wa), e(ba));
	var Ta = i(ba, 2);
	(a(Ta, { kind: `item`, name: `Cold Front`, ability: null }), e(va));
	var Ea = i(va, 2);
	n(Ea, 1, `item counterspell`);
	var Da = r(Ea);
	t(
		Da,
		() => `
<p><a href="/item/counterspell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Counterspell patch history</a></p>
<h3 id="counterspell"><a href="/item/counterspell">Counterspell</a></h3>
<ul><li>Spirit Power reduced from +8 to +5</li></ul>
`
	);
	var Oa = i(Da, 2);
	(a(Oa, { kind: `item`, name: `Counterspell`, ability: null }), e(Ea));
	var ka = i(Ea, 2);
	n(ka, 1, `item crippling-headshot`);
	var Aa = r(ka);
	t(
		Aa,
		() => `
<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>
<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>
<ul><li>Now works vs NPCs</li></ul>
`
	);
	var ja = i(Aa, 2);
	(a(ja, { kind: `item`, name: `Crippling Headshot`, ability: null }), e(ka));
	var Ma = i(ka, 2);
	n(Ma, 1, `item crushing-fists`);
	var Na = r(Ma);
	t(
		Na,
		() => `
<p><a href="/item/crushing-fists"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crushing Fists patch history</a></p>
<h3 id="crushing-fists"><a href="/item/crushing-fists">Crushing Fists</a></h3>
`
	);
	var Pa = i(Na, 2),
		Fa = r(Pa),
		Ia = r(Fa);
	t(Ia, () => `Cooldown reduced from 7s to 5s`);
	var La = i(Ia, 2);
	(o(La, {
		kind: `item`,
		name: `Crushing Fists`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 7s to 5s`
	}),
		e(Fa));
	var Ra = i(Fa, 2);
	(t(Ra, () => `Melee damage increased from 20% to 22%`, !0), e(Ra), e(Pa));
	var za = i(Pa, 2);
	(a(za, { kind: `item`, name: `Crushing Fists`, ability: null }), e(Ma));
	var Ba = i(Ma, 2);
	n(Ba, 1, `item cultist-sacrifice`);
	var Va = r(Ba);
	t(
		Va,
		() => `
<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>
<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>
<ul><li>Weapon Damage increased from 8% to 10%</li><li>Weapon Damage boon scaling increased from 0.7 to 0.8</li><li>Bonus Souls increased from 170% to 180%</li></ul>
`
	);
	var Ha = i(Va, 2);
	(a(Ha, { kind: `item`, name: `Cultist Sacrifice`, ability: null }), e(Ba));
	var Ua = i(Ba, 2);
	n(Ua, 1, `item debuff-reducer`);
	var Wa = r(Ua);
	t(
		Wa,
		() => `
<p><a href="/item/debuff-reducer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Debuff Reducer patch history</a></p>
<h3 id="debuff-reducer"><a href="/item/debuff-reducer">Debuff Reducer</a></h3>
<ul><li>Now grants +90 Health</li></ul>
`
	);
	var Ga = i(Wa, 2);
	(a(Ga, { kind: `item`, name: `Debuff Reducer`, ability: null }), e(Ua));
	var Ka = i(Ua, 2);
	n(Ka, 1, `item decay`);
	var qa = r(Ka);
	t(
		qa,
		() => `
<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>
<h3 id="decay"><a href="/item/decay">Decay</a></h3>
`
	);
	var Ja = i(qa, 2),
		Ya = r(Ja),
		Xa = r(Ya);
	t(Xa, () => `Cooldown reduced from 32s to 30s`);
	var Za = i(Xa, 2);
	(o(Za, {
		kind: `item`,
		name: `Decay`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 32s to 30s`
	}),
		e(Ya),
		e(Ja));
	var Qa = i(Ja, 2);
	(a(Qa, { kind: `item`, name: `Decay`, ability: null }), e(Ka));
	var $a = i(Ka, 2);
	n($a, 1, `item disarming-hex`);
	var eo = r($a);
	t(
		eo,
		() => `
<p><a href="/item/disarming-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/disarming_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Disarming Hex patch history</a></p>
<h3 id="disarming-hex"><a href="/item/disarming-hex">Disarming Hex</a></h3>
<ul><li>Duration increased from 4s to 4.25s</li></ul>
`
	);
	var to = i(eo, 2);
	(a(to, { kind: `item`, name: `Disarming Hex`, ability: null }), e($a));
	var no = i($a, 2);
	n(no, 1, `item dispel-magic`);
	var ro = r(no);
	t(
		ro,
		() => `
<p><a href="/item/dispel-magic"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_remover.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dispel Magic patch history</a></p>
<h3 id="dispel-magic"><a href="/item/dispel-magic">Dispel Magic</a></h3>
`
	);
	var io = i(ro, 2),
		ao = r(io),
		oo = r(ao);
	t(oo, () => `Cooldown increased from 40s to 45s`);
	var so = i(oo, 2);
	(o(so, {
		kind: `item`,
		name: `Dispel Magic`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 40s to 45s`
	}),
		e(ao),
		e(io));
	var co = i(io, 2);
	(a(co, { kind: `item`, name: `Dispel Magic`, ability: null }), e(no));
	var lo = i(no, 2);
	n(lo, 1, `item divine-barrier`);
	var uo = r(lo);
	t(
		uo,
		() => `
<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>
<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>
<ul><li>Now grants +1.5 Out of Combat Regen (from components)</li></ul>
`
	);
	var fo = i(uo, 2);
	(a(fo, { kind: `item`, name: `Divine Barrier`, ability: null }), e(lo));
	var po = i(lo, 2);
	n(po, 1, `item escalating-resilience`);
	var mo = r(po);
	t(
		mo,
		() => `
<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>
<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>
<ul><li>Max Ammo increased from 30% to 35%</li><li>Weapon Damage increased from 15% to 18%</li></ul>
`
	);
	var ho = i(mo, 2);
	(a(ho, { kind: `item`, name: `Escalating Resilience`, ability: null }), e(po));
	var go = i(po, 2);
	n(go, 1, `item extra-regen`);
	var _o = r(go);
	t(
		_o,
		() => `
<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>
<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>
<ul><li>Regen reduced from 3 to 2.5</li><li>Out of Combat regen increased from 1 to 1.5</li></ul>
`
	);
	var vo = i(_o, 2);
	(a(vo, { kind: `item`, name: `Extra Regen`, ability: null }), e(go));
	var yo = i(go, 2);
	n(yo, 1, `item fleetfoot`);
	var bo = r(yo);
	t(
		bo,
		() => `
<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>
<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>
<ul><li>Now grants +6% Weapon Damage</li><li>Active slow resistance increased from 35% to 40%</li></ul>
`
	);
	var xo = i(bo, 2);
	(a(xo, { kind: `item`, name: `Fleetfoot`, ability: null }), e(yo));
	var So = i(yo, 2);
	n(So, 1, `item focus-lens`);
	var Co = r(So);
	t(
		Co,
		() => `
<p><a href="/item/focus-lens"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/focus_lens.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Focus Lens patch history</a></p>
<h3 id="focus-lens"><a href="/item/focus-lens">Focus Lens</a></h3>
<ul><li>Duration increased from 4s to 4.5s</li></ul>
`
	);
	var wo = i(Co, 2);
	(a(wo, { kind: `item`, name: `Focus Lens`, ability: null }), e(So));
	var To = i(So, 2);
	n(To, 1, `item fortitude`);
	var Eo = r(To);
	t(
		Eo,
		() => `
<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>
<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>
<ul><li>Move speed increased from 1.25m to 1.5m</li></ul>
`
	);
	var Do = i(Eo, 2);
	(a(Do, { kind: `item`, name: `Fortitude`, ability: null }), e(To));
	var Oo = i(To, 2);
	n(Oo, 1, `item frenzy`);
	var ko = r(Oo);
	t(
		ko,
		() => `
<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>
<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>
<ul><li>Triggered debuff resistance increased from 30% to 40%</li></ul>
`
	);
	var Ao = i(ko, 2);
	(a(Ao, { kind: `item`, name: `Frenzy`, ability: null }), e(Oo));
	var jo = i(Oo, 2);
	n(jo, 1, `item fury-trance`);
	var Mo = r(jo);
	t(
		Mo,
		() => `
<p><a href="/item/fury-trance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fury_trance.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fury Trance patch history</a></p>
<h3 id="fury-trance"><a href="/item/fury-trance">Fury Trance</a></h3>
<ul><li>Active duration increased from 6s to 6.5s</li><li>Gains the +6% Weapon Damage (from component)</li><li>Fire Rate increased from 30% to 32%</li></ul>
`
	);
	var No = i(Mo, 2);
	(a(No, { kind: `item`, name: `Fury Trance`, ability: null }), e(jo));
	var Po = i(jo, 2);
	n(Po, 1, `item glass-cannon`);
	var Fo = r(Po);
	t(
		Fo,
		() => `
<p><a href="/item/glass-cannon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Glass Cannon patch history</a></p>
<h3 id="glass-cannon"><a href="/item/glass-cannon">Glass Cannon</a></h3>
<ul><li>Max Health reduction reduced from -15% to -13%</li></ul>
`
	);
	var Io = i(Fo, 2);
	(a(Io, { kind: `item`, name: `Glass Cannon`, ability: null }), e(Po));
	var Lo = i(Po, 2);
	n(Lo, 1, `item golden-goose-egg`);
	var Ro = r(Lo);
	t(
		Ro,
		() => `
<p><a href="/item/golden-goose-egg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/goose_egg.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Golden Goose Egg patch history</a></p>
<h3 id="golden-goose-egg"><a href="/item/golden-goose-egg">Golden Goose Egg</a></h3>
<ul><li>Permanent buff from every 100 souls to every 80</li></ul>
`
	);
	var zo = i(Ro, 2);
	(a(zo, { kind: `item`, name: `Golden Goose Egg`, ability: null }), e(Lo));
	var Bo = i(Lo, 2);
	n(Bo, 1, `item guardian-ward`);
	var Vo = r(Bo);
	t(
		Vo,
		() => `
<p><a href="/item/guardian-ward"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Guardian Ward patch history</a></p>
<h3 id="guardian-ward"><a href="/item/guardian-ward">Guardian Ward</a></h3>
`
	);
	var Ho = i(Vo, 2),
		Uo = r(Ho);
	(t(Uo, () => `Barrier increased from 200 to 250`, !0), e(Uo));
	var Wo = i(Uo, 2),
		Go = r(Wo);
	t(Go, () => `Cooldown increased from 45s to 60s`);
	var Ko = i(Go, 2);
	(o(Ko, {
		kind: `item`,
		name: `Guardian Ward`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown increased from 45s to 60s`
	}),
		e(Wo));
	var qo = i(Wo, 2);
	(t(qo, () => `Now grants +1.5 Out of Combat Regen (from components)`, !0),
		e(qo),
		e(Ho));
	var Jo = i(Ho, 2);
	(a(Jo, { kind: `item`, name: `Guardian Ward`, ability: null }), e(Bo));
	var Yo = i(Bo, 2);
	n(Yo, 1, `item healing-booster`);
	var Xo = r(Yo);
	t(
		Xo,
		() => `
<p><a href="/item/healing-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Booster patch history</a></p>
<h3 id="healing-booster"><a href="/item/healing-booster">Healing Booster</a></h3>
<ul><li>Fixed various abilities and items not being boosted correctly</li></ul>
`
	);
	var Zo = i(Xo, 2);
	(a(Zo, { kind: `item`, name: `Healing Booster`, ability: null }), e(Yo));
	var Qo = i(Yo, 2);
	n(Qo, 1, `item healing-rite`);
	var $o = r(Qo);
	t(
		$o,
		() => `
<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>
<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>
<ul><li>Spirit scaling increased from 0.93 to 1.1</li></ul>
`
	);
	var es = i($o, 2);
	(a(es, { kind: `item`, name: `Healing Rite`, ability: null }), e(Qo));
	var ts = i(Qo, 2);
	n(ts, 1, `item heroic-aura`);
	var ns = r(ts);
	t(
		ns,
		() => `
<p><a href="/item/heroic-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Heroic Aura patch history</a></p>
<h3 id="heroic-aura"><a href="/item/heroic-aura">Heroic Aura</a></h3>
`
	);
	var rs = i(ns, 2),
		is = r(rs),
		as = r(is);
	t(as, () => `Radius increased from 30m to 35m`);
	var os = i(as, 2);
	(o(os, {
		kind: `item`,
		name: `Heroic Aura`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Radius increased from 30m to 35m`
	}),
		e(is),
		e(rs));
	var ss = i(rs, 2);
	(a(ss, { kind: `item`, name: `Heroic Aura`, ability: null }), e(ts));
	var cs = i(ts, 2);
	n(cs, 1, `item hunter-s-aura`);
	var ls = r(cs);
	t(
		ls,
		() => `
<p><a href="/item/hunters-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hunter&#x27;s Aura patch history</a></p>
<h3 id="hunter-s-aura"><a href="/item/hunters-aura">Hunter&#x27;s Aura</a></h3>
<ul><li>Fire Rate reduction increased from -14% to -15%</li></ul>
`
	);
	var us = i(ls, 2);
	(a(us, { kind: `item`, name: `Hunter's Aura`, ability: null }), e(cs));
	var ds = i(cs, 2);
	n(ds, 1, `item indomitable`);
	var fs = r(ds);
	t(
		fs,
		() => `
<p><a href="/item/indomitable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/indomitable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Indomitable patch history</a></p>
<h3 id="indomitable"><a href="/item/indomitable">Indomitable</a></h3>
<ul><li>Barrier scaling increased from 1.8 to 2.0</li><li>Now has +2 Out of Combat Regen (from components)</li><li>Bullet Resist increased from 8% to 10%</li><li>Spirit Resist increased from 8% to 10%</li></ul>
`
	);
	var ps = i(fs, 2);
	(a(ps, { kind: `item`, name: `Indomitable`, ability: null }), e(ds));
	var ms = i(ds, 2);
	n(ms, 1, `item infuser`);
	var hs = r(ms);
	t(
		hs,
		() => `
<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>
<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>
<ul><li>Duration increased from 6s to 7s</li><li>Gains +6 Spirit Power (from components)</li></ul>
`
	);
	var gs = i(hs, 2);
	(a(gs, { kind: `item`, name: `Infuser`, ability: null }), e(ms));
	var _s = i(ms, 2);
	n(_s, 1, `item juggernaut`);
	var vs = r(_s);
	t(
		vs,
		() => `
<p><a href="/item/juggernaut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/juggernaut.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Juggernaut patch history</a></p>
<h3 id="juggernaut"><a href="/item/juggernaut">Juggernaut</a></h3>
<ul><li>Fire Rate reduction increased from -36% to -40%</li><li>Move speed bonus increased from +2m to +2.5m</li></ul>
`
	);
	var ys = i(vs, 2);
	(a(ys, { kind: `item`, name: `Juggernaut`, ability: null }), e(_s));
	var bs = i(_s, 2);
	n(bs, 1, `item leech`);
	var xs = r(bs);
	t(
		xs,
		() => `
<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>
<h3 id="leech"><a href="/item/leech">Leech</a></h3>
<ul><li>Updated bonus HP to match the components</li></ul>
`
	);
	var Ss = i(xs, 2);
	(a(Ss, { kind: `item`, name: `Leech`, ability: null }), e(bs));
	var Cs = i(bs, 2);
	n(Cs, 1, `item magic-carpet`);
	var ws = r(Cs);
	t(
		ws,
		() => `
<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>
<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>
<ul><li>Now innately grants -15% Gravity and Air Control by +25%</li></ul>
`
	);
	var Ts = i(ws, 2);
	(a(Ts, { kind: `item`, name: `Magic Carpet`, ability: null }), e(Cs));
	var Es = i(Cs, 2);
	n(Es, 1, `item majestic-leap`);
	var Ds = r(Es);
	t(
		Ds,
		() => `
<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>
<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>
<ul><li>Now grants +50% air control for the duration of the barrier</li><li>Barrier boon scaling increased from 8 to 12</li></ul>
`
	);
	var Os = i(Ds, 2);
	(a(Os, { kind: `item`, name: `Majestic Leap`, ability: null }), e(Es));
	var ks = i(Es, 2);
	n(ks, 1, `item melee-charge`);
	var As = r(ks);
	t(
		As,
		() => `
<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>
<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>
`
	);
	var js = i(As, 2),
		Ms = r(js),
		Ns = r(Ms);
	t(Ns, () => `Cooldown reduced from 7s to 5s`);
	var Ps = i(Ns, 2);
	(o(Ps, {
		kind: `item`,
		name: `Melee Charge`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 7s to 5s`
	}),
		e(Ms),
		e(js));
	var Fs = i(js, 2);
	(a(Fs, { kind: `item`, name: `Melee Charge`, ability: null }), e(ks));
	var Is = i(ks, 2);
	n(Is, 1, `item mercurial-magnum`);
	var Ls = r(Is);
	t(
		Ls,
		() => `
<p><a href="/item/mercurial-magnum"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mercurial Magnum patch history</a></p>
<h3 id="mercurial-magnum"><a href="/item/mercurial-magnum">Mercurial Magnum</a></h3>
<ul><li>Base Bullet Damage spirit scaling increased from 0.465 to 0.49</li></ul>
`
	);
	var Rs = i(Ls, 2);
	(a(Rs, { kind: `item`, name: `Mercurial Magnum`, ability: null }), e(Is));
	var zs = i(Is, 2);
	n(zs, 1, `item mystic-regeneration`);
	var Bs = r(zs);
	t(
		Bs,
		() => `
<p><a href="/item/mystic-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Regeneration patch history</a></p>
<h3 id="mystic-regeneration"><a href="/item/mystic-regeneration">Mystic Regeneration</a></h3>
<ul><li>Regen duration increased from 6s to 7s</li></ul>
`
	);
	var Vs = i(Bs, 2);
	(a(Vs, { kind: `item`, name: `Mystic Regeneration`, ability: null }), e(zs));
	var Hs = i(zs, 2);
	n(Hs, 1, `item mystic-shot`);
	var Us = r(Hs);
	t(
		Us,
		() => `
<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>
<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>
<ul><li>Spirit scaling increased from 1 to 1.2</li></ul>
`
	);
	var Ws = i(Us, 2);
	(a(Ws, { kind: `item`, name: `Mystic Shot`, ability: null }), e(Hs));
	var Gs = i(Hs, 2);
	n(Gs, 1, `item mystic-slow`);
	var Ks = r(Gs);
	t(
		Ks,
		() => `
<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>
<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>
<ul><li>Bonus Health increased from +30 to +50</li></ul>
`
	);
	var qs = i(Ks, 2);
	(a(qs, { kind: `item`, name: `Mystic Slow`, ability: null }), e(Gs));
	var Js = i(Gs, 2);
	n(Js, 1, `item opening-rounds`);
	var Ys = r(Js);
	t(
		Ys,
		() => `
<p><a href="/item/opening-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Opening Rounds patch history</a></p>
<h3 id="opening-rounds"><a href="/item/opening-rounds">Opening Rounds</a></h3>
<ul><li>Spirit Power reduced from +7 to +4</li></ul>
`
	);
	var Xs = i(Ys, 2);
	(a(Xs, { kind: `item`, name: `Opening Rounds`, ability: null }), e(Js));
	var Zs = i(Js, 2);
	n(Zs, 1, `item radiant-regeneration`);
	var Qs = r(Zs);
	t(
		Qs,
		() => `
<p><a href="/item/radiant-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Radiant Regeneration patch history</a></p>
<h3 id="radiant-regeneration"><a href="/item/radiant-regeneration">Radiant Regeneration</a></h3>
<ul><li>Regen duration increased from 6s to 7s</li></ul>
`
	);
	var $s = i(Qs, 2);
	(a($s, { kind: `item`, name: `Radiant Regeneration`, ability: null }), e(Zs));
	var ec = i(Zs, 2);
	n(ec, 1, `item rapid-recharge`);
	var tc = r(ec);
	t(
		tc,
		() => `
<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>
<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>
<ul><li>Spirit Power for Charged Abilities increased from +10 to +14</li></ul>
`
	);
	var nc = i(tc, 2);
	(a(nc, { kind: `item`, name: `Rapid Recharge`, ability: null }), e(ec));
	var rc = i(ec, 2);
	n(rc, 1, `item reactive-barrier`);
	var ic = r(rc);
	t(
		ic,
		() => `
<p><a href="/item/reactive-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Reactive Barrier patch history</a></p>
<h3 id="reactive-barrier"><a href="/item/reactive-barrier">Reactive Barrier</a></h3>
<ul><li>Now grants +1 Out of Combat Regen (from components)</li></ul>
`
	);
	var ac = i(ic, 2);
	(a(ac, { kind: `item`, name: `Reactive Barrier`, ability: null }), e(rc));
	var oc = i(rc, 2);
	n(oc, 1, `item rebuttal`);
	var sc = r(oc);
	t(
		sc,
		() => `
<p><a href="/item/rebuttal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rebuttal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rebuttal patch history</a></p>
<h3 id="rebuttal"><a href="/item/rebuttal">Rebuttal</a></h3>
<ul><li>Parry cooldown reduced from -2s to -1.75s</li></ul>
`
	);
	var cc = i(sc, 2);
	(a(cc, { kind: `item`, name: `Rebuttal`, ability: null }), e(oc));
	var lc = i(oc, 2);
	n(lc, 1, `item recharging-rush`);
	var uc = r(lc);
	t(
		uc,
		() => `
<p><a href="/item/recharging-rush"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Recharging Rush patch history</a></p>
<h3 id="recharging-rush"><a href="/item/recharging-rush">Recharging Rush</a></h3>
`
	);
	var dc = i(uc, 2),
		fc = r(dc),
		pc = r(fc);
	t(pc, () => `Cooldown increased from 24s to 25s`);
	var mc = i(pc, 2);
	(o(mc, {
		kind: `item`,
		name: `Recharging Rush`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 24s to 25s`
	}),
		e(fc),
		e(dc));
	var hc = i(dc, 2);
	(a(hc, { kind: `item`, name: `Recharging Rush`, ability: null }), e(lc));
	var gc = i(lc, 2);
	n(gc, 1, `item restorative-locket`);
	var _c = r(gc);
	t(
		_c,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
<ul><li>No longer has a minimum of 1 stamina restore</li><li>Max stamina restored reduced from 4 to 3</li></ul>
`
	);
	var vc = i(_c, 2);
	(a(vc, { kind: `item`, name: `Restorative Locket`, ability: null }), e(gc));
	var yc = i(gc, 2);
	n(yc, 1, `item restorative-shot`);
	var bc = r(yc);
	t(
		bc,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
<ul><li>NPC Healing increased from 15 to 20</li></ul>
`
	);
	var xc = i(bc, 2);
	(a(xc, { kind: `item`, name: `Restorative Shot`, ability: null }), e(yc));
	var Sc = i(yc, 2);
	n(Sc, 1, `item return-fire`);
	var Cc = r(Sc);
	t(
		Cc,
		() => `
<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>
<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>
<ul><li>Duration increased from 6s to 6.5s</li></ul>
`
	);
	var wc = i(Cc, 2);
	(a(wc, { kind: `item`, name: `Return Fire`, ability: null }), e(Sc));
	var Tc = i(Sc, 2);
	n(Tc, 1, `item rusted-barrel`);
	var Ec = r(Tc);
	t(
		Ec,
		() => `
<p><a href="/item/rusted-barrel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rusted Barrel patch history</a></p>
<h3 id="rusted-barrel"><a href="/item/rusted-barrel">Rusted Barrel</a></h3>
<ul><li>Bonus health increased from 50 to 60</li></ul>
`
	);
	var Dc = i(Ec, 2);
	(a(Dc, { kind: `item`, name: `Rusted Barrel`, ability: null }), e(Tc));
	var Oc = i(Tc, 2);
	n(Oc, 1, `item scourge`);
	var kc = r(Oc);
	t(
		kc,
		() => `
<p><a href="/item/scourge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Scourge patch history</a></p>
<h3 id="scourge"><a href="/item/scourge">Scourge</a></h3>
<ul><li>Debuff resist increased from 15% to 17%</li></ul>
`
	);
	var Ac = i(kc, 2);
	(a(Ac, { kind: `item`, name: `Scourge`, ability: null }), e(Oc));
	var jc = i(Oc, 2);
	n(jc, 1, `item shadow-weave`);
	var Mc = r(jc);
	t(
		Mc,
		() => `
<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>
<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>
<ul><li>Duration increased from 10s to 13s</li><li>Ambush Fire Rate increased from 20% to 25%</li><li>Ambush Spirit Power increased from 20 to 25</li><li>Ambush Melee Damage increased from 20% to 25%</li></ul>
`
	);
	var Nc = i(Mc, 2);
	(a(Nc, { kind: `item`, name: `Shadow Weave`, ability: null }), e(jc));
	var Pc = i(jc, 2);
	n(Pc, 1, `item sharpshooter`);
	var Fc = r(Pc);
	t(
		Fc,
		() => `
<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>
<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>
<ul><li>Now upgrades from High-Velocity Rounds (in addition to Long Range). Grants +60% Bullet Velocity.</li><li>Long range weapon damage reduced from 70% to 60%</li><li>Now has innate 10% Weapon Damage (from components)</li></ul>
`
	);
	var Ic = i(Fc, 2);
	(a(Ic, { kind: `item`, name: `Sharpshooter`, ability: null }), e(Pc));
	var Lc = i(Pc, 2);
	n(Lc, 1, `item silencer`);
	var Rc = r(Lc);
	t(
		Rc,
		() => `
<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>
<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>
<ul><li>Spirit Resistance reduced from 15% to 12%</li></ul>
`
	);
	var zc = i(Rc, 2);
	(a(zc, { kind: `item`, name: `Silencer`, ability: null }), e(Lc));
	var Bc = i(Lc, 2);
	n(Bc, 1, `item slowing-bullets`);
	var Vc = r(Bc);
	t(
		Vc,
		() => `
<p><a href="/item/slowing-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Bullets patch history</a></p>
<h3 id="slowing-bullets"><a href="/item/slowing-bullets">Slowing Bullets</a></h3>
<ul><li>Dash Distance slow reduced from -25% to -22%</li></ul>
`
	);
	var Hc = i(Vc, 2);
	(a(Hc, { kind: `item`, name: `Slowing Bullets`, ability: null }), e(Bc));
	var Uc = i(Bc, 2);
	n(Uc, 1, `item spellbreaker`);
	var Wc = r(Uc);
	t(
		Wc,
		() => `
<p><a href="/item/spellbreaker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellbreaker patch history</a></p>
<h3 id="spellbreaker"><a href="/item/spellbreaker">Spellbreaker</a></h3>
<ul><li>Now grants +90 Health (from components)</li></ul>
`
	);
	var Gc = i(Wc, 2);
	(a(Gc, { kind: `item`, name: `Spellbreaker`, ability: null }), e(Uc));
	var Kc = i(Uc, 2);
	n(Kc, 1, `item spellslinger`);
	var qc = r(Kc);
	t(
		qc,
		() => `
<p><a href="/item/spellslinger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spell_slinger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellslinger patch history</a></p>
<h3 id="spellslinger"><a href="/item/spellslinger">Spellslinger</a></h3>
<ul><li>Cooldown Reduction reduced from 6% to 5%</li></ul>
`
	);
	var Jc = i(qc, 2);
	(a(Jc, { kind: `item`, name: `Spellslinger`, ability: null }), e(Kc));
	var Yc = i(Kc, 2);
	n(Yc, 1, `item spirit-lifesteal`);
	var Xc = r(Yc);
	t(
		Xc,
		() => `
<p><a href="/item/spirit-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Lifesteal patch history</a></p>
<h3 id="spirit-lifesteal"><a href="/item/spirit-lifesteal">Spirit Lifesteal</a></h3>
<ul><li>Bonus Health increased from +70 to +90</li></ul>
`
	);
	var Zc = i(Xc, 2);
	(a(Zc, { kind: `item`, name: `Spirit Lifesteal`, ability: null }), e(Yc));
	var Qc = i(Yc, 2);
	n(Qc, 1, `item spirit-shielding`);
	var $c = r(Qc);
	t(
		$c,
		() => `
<p><a href="/item/spirit-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shielding patch history</a></p>
<h3 id="spirit-shielding"><a href="/item/spirit-shielding">Spirit Shielding</a></h3>
<ul><li>No longer grants +1.75m Move Speed on activation</li><li>Proc now also temporarily grants +18% Spirit Resistance (for the 8s duration)</li></ul>
`
	);
	var el = i($c, 2);
	(a(el, { kind: `item`, name: `Spirit Shielding`, ability: null }), e(Qc));
	var tl = i(Qc, 2);
	n(tl, 1, `item spirit-snatch`);
	var nl = r(tl);
	t(
		nl,
		() => `
<p><a href="/item/spirit-snatch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Snatch patch history</a></p>
<h3 id="spirit-snatch"><a href="/item/spirit-snatch">Spirit Snatch</a></h3>
<ul><li>Bonus damage spirit scaling increased from 0.744 to 0.84</li><li>Spirit Power Steal increased from 20 to 28</li></ul>
`
	);
	var rl = i(nl, 2);
	(a(rl, { kind: `item`, name: `Spirit Snatch`, ability: null }), e(tl));
	var il = i(tl, 2);
	n(il, 1, `item spiritual-overflow`);
	var al = r(il);
	t(
		al,
		() => `
<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>
<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>
<ul><li>Spirit Lifesteal moved from Active to Innate (reduced from 16% to 13%)</li><li>Now builds from Spirit Lifesteal (gains the innates it has)</li></ul>
`
	);
	var ol = i(al, 2);
	(a(ol, { kind: `item`, name: `Spiritual Overflow`, ability: null }), e(il));
	var sl = i(il, 2);
	n(sl, 1, `item surge-of-power`);
	var cl = r(sl);
	t(
		cl,
		() => `
<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>
<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>
<ul><li>Imbued Spirit Power increased from 24 to 25</li></ul>
`
	);
	var ll = i(cl, 2);
	(a(ll, { kind: `item`, name: `Surge of Power`, ability: null }), e(sl));
	var ul = i(sl, 2);
	n(ul, 1, `item tesla-bullets`);
	var dl = r(ul);
	t(
		dl,
		() => `
<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>
<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>
<ul><li>Proc cooldown reduced from 0.25s to 0.2s</li></ul>
`
	);
	var fl = i(dl, 2);
	(a(fl, { kind: `item`, name: `Tesla Bullets`, ability: null }), e(ul));
	var pl = i(ul, 2);
	n(pl, 1, `item torment-pulse`);
	var ml = r(pl);
	t(
		ml,
		() => `
<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>
<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>
<ul><li>Melee Resist increased from 15% to 18%</li></ul>
`
	);
	var hl = i(ml, 2);
	(a(hl, { kind: `item`, name: `Torment Pulse`, ability: null }), e(pl));
	var gl = i(pl, 2);
	n(gl, 1, `item toxic-bullets`);
	var _l = r(gl);
	t(
		_l,
		() => `
<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>
<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>
<ul><li>No longer builds up from melee attacks</li></ul>
`
	);
	var vl = i(_l, 2);
	(a(vl, { kind: `item`, name: `Toxic Bullets`, ability: null }), e(gl));
	var yl = i(gl, 2);
	n(yl, 1, `item unstoppable`);
	var bl = r(yl);
	t(
		bl,
		() => `
<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>
<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>
`
	);
	var xl = i(bl, 2),
		Sl = r(xl),
		Cl = r(Sl);
	t(Cl, () => `Cooldown reduced from 65s to 60s`);
	var wl = i(Cl, 2);
	(o(wl, {
		kind: `item`,
		name: `Unstoppable`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 65s to 60s`
	}),
		e(Sl),
		e(xl));
	var Tl = i(xl, 2);
	(a(Tl, { kind: `item`, name: `Unstoppable`, ability: null }), e(yl));
	var El = i(yl, 2);
	n(El, 1, `item vampiric-burst`);
	var Dl = r(El);
	t(
		Dl,
		() => `
<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>
<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>
<ul><li>Duration increased from 4.5s to 5s</li><li>Now grants +6% Weapon Power (from components)</li></ul>
`
	);
	var Ol = i(Dl, 2);
	(a(Ol, { kind: `item`, name: `Vampiric Burst`, ability: null }), e(El));
	var kl = i(El, 2);
	n(kl, 1, `item veil-walker`);
	var Al = r(kl);
	t(
		Al,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
<ul><li>Heal per boon increased from 6 to 8</li><li>Invisibility duration increased from 7s to 8s</li></ul>
`
	);
	var jl = i(Al, 2);
	(a(jl, { kind: `item`, name: `Veil Walker`, ability: null }), e(kl));
	var Ml = i(kl, 2);
	n(Ml, 1, `item vortex-web`);
	var Nl = r(Ml);
	t(
		Nl,
		() => `
<p><a href="/item/vortex-web"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/vortex_web.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vortex Web patch history</a></p>
<h3 id="vortex-web"><a href="/item/vortex-web">Vortex Web</a></h3>
<ul><li>Fixed the debuff losing gravity modification when upgraded from Slowing Hex</li></ul>
`
	);
	var Pl = i(Nl, 2);
	(a(Pl, { kind: `item`, name: `Vortex Web`, ability: null }), e(Ml));
	var Fl = i(Ml, 2);
	n(Fl, 1, `item weakening-headshot`);
	var Il = r(Fl);
	t(
		Il,
		() => `
<p><a href="/item/weakening-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weakening Headshot patch history</a></p>
<h3 id="weakening-headshot"><a href="/item/weakening-headshot">Weakening Headshot</a></h3>
<ul><li>Now works vs NPCs</li></ul>
`
	);
	var Ll = i(Il, 2);
	(a(Ll, { kind: `item`, name: `Weakening Headshot`, ability: null }), e(Fl));
	var Rl = i(Fl, 2);
	n(Rl, 1, `item weapon-shielding`);
	var zl = r(Rl);
	t(
		zl,
		() => `
<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>
<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>
<ul><li>No longer grants +1.75m Move Speed on activation</li><li>Proc now also temporarily grants +18% Bullet Resistance (for the 8s duration)</li></ul>
`
	);
	var Bl = i(zl, 2);
	(a(Bl, { kind: `item`, name: `Weapon Shielding`, ability: null }), e(Rl));
	var Vl = i(Rl, 2);
	n(Vl, 1, `item weighted-shots`);
	var Hl = r(Vl);
	t(
		Hl,
		() => `
<p><a href="/item/weighted-shots"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weighted Shots patch history</a></p>
<h3 id="weighted-shots"><a href="/item/weighted-shots">Weighted Shots</a></h3>
<ul><li>Dash Distance slow reduced from -25% to -22%</li><li>Debuff resistance increased from 20% to 22%</li></ul>
`
	);
	var Ul = i(Hl, 2);
	(a(Ul, { kind: `item`, name: `Weighted Shots`, ability: null }), e(Vl));
	var Wl = i(Vl, 2);
	n(Wl, 1, `item witchmail`);
	var Gl = r(Wl);
	t(
		Gl,
		() => `
<p><a href="/item/witchmail"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/witchmail.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Witchmail patch history</a></p>
<h3 id="witchmail"><a href="/item/witchmail">Witchmail</a></h3>
<ul><li>Spirit Resist increased from 20% to 22%</li></ul>
`
	);
	var Kl = i(Gl, 2);
	(a(Kl, { kind: `item`, name: `Witchmail`, ability: null }), e(Wl), te(ee, re));
}
export { le as default, oe as metadata, s as readingManifest, se as toc };
