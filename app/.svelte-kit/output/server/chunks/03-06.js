import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2026/03-06.mg?embed=0
function _3_06_mg$2($$renderer) {
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
			'Haze',
			'Infernus',
			'Ivy',
			'Kelvin',
			'Lady Geist',
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
			'Victor',
			'Vindicta',
			'Viscous',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2026/03-06.mg?embed=1
function _3_06_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Arcane Surge',
			'Ballistic Enchantment',
			'Blood Tribute',
			'Boundless Spirit',
			'Bullet Resilience',
			'Burst Fire',
			'Celestial Blessing',
			'Cheat Death',
			'Cloak of Opportunity',
			'Colossus',
			'Counterspell',
			'Crushing Fists',
			'Cultist Sacrifice',
			'Cursed Relic',
			'Decay',
			'Disarming Hex',
			'Dispel Magic',
			'Divine Barrier',
			"Diviner's Kevlar",
			'Echo Shard',
			'Electric Slippers',
			"Enchanter's Emblem",
			'Enduring Speed',
			'Ethereal Shift',
			'Express Shot',
			'Extended Magazine',
			'Extra Health',
			'Fortitude',
			'Frenzy',
			'Golden Goose Egg',
			'Greater Expansion',
			'Guardian Ward',
			'Healing Nova',
			'High-Velocity Rounds',
			"Hunter's Aura",
			'Infinite Rounds',
			'Inhibitor',
			'Knockdown',
			'Lifestrike',
			'Long Range',
			'Magic Carpet',
			'Majestic Leap',
			'Melee Charge',
			'Metal Skin',
			'Mystic Regeneration',
			'Mystic Shot',
			'Mystical Piano',
			'Nullification Burst',
			'Opening Rounds',
			'Radiant Regeneration',
			'Rescue Beam',
			'Restorative Locket',
			'Return Fire',
			'Rusted Barrel',
			'Seraphim Wings',
			'Shadow Strike',
			'Shrink Ray',
			'Silence Wave',
			'Siphon Bullets',
			'Slowing Hex',
			'Spellbreaker',
			'Spirit Burn',
			'Spirit Rend',
			'Spirit Resilience',
			'Spirit Sap',
			'Spirit Shredder Bullets',
			'Spiritual Overflow',
			'Split Shot',
			'Stalker',
			'Suppressor',
			'Swift Striker',
			'Tankbuster',
			'Torment Pulse',
			'Trophy Collector',
			'Unstable Concoction',
			'Vortex Web',
			'Weakening Headshot',
			'Weapon Shielding',
			'Weighted Shots'
		]
	});
}
//#endregion
//#region changelogs/2026/03-06.mg
var metadata = {
	title: 'Gameplay Update - 03-06-2026',
	alias: '2026/gameplay-03-06',
	thread_id: '114328',
	steam_gid: '1826362059925616',
	published: '2026-03-06T21:37:00.000Z',
	author: 'simonne',
	author_image: '/assets/authors/deadlock.webp',
	major_update: false,
	content_text:
		'Can now jump during slide Dash jump grants a very brief period with increased air control (30% for 0.25s) Shrine is now easier to kill for the first one and harder for the second. HP from 8100 to 5000/10000 (HP updates after the first one dies, like Walkers) Shrines attack no longer hits heroes under the shrine Super troopers bonus DPS increased from +40% to +60% (the upgraded troopers when Shrine dies) Middle Lane troopers now gets upgraded when either of the shrines die, rather than only when both die Killing a pair of base guardians now spawns a zipline boosted trooper wave to reinforce your push Medic Troopers DPS grows by 3% per minute Troopers now gain 7 HP regen when out of combat Trooper wave interval increased from every 25s to every 20s starting at 35 minutes Guardians bounty increased from 1000 to 1500 Walkers bounty increased from 3500 to 4000 Walkers Health rescaled from 6800/9350/11900 to 6000/9000/12000 Walkers armor decay rescaled from "+75% -> -50%" to "+65% -> -65%", from over 20min to over 18min Base Guardians bounty from 750 to 1000 Shrines bounty increased from 0 to 2000 Mid Boss base bounty increased from 2000 to 3000 Mid Boss base HP increased from 11900 to 13000 Mid Boss global announcement health threshold reduced from 70% to 50% Mid Boss now has 35% Debuff Resistance Rejuv drop duration reduced from 7s to 6s Rejuv duration no longer refreshes when hitting a crystal later Minimap now indicates if the Urn is a favored, neutral or unfavored Added a neutral camp (2 Normal, 3 Weak) at Hidden King Park Walker Added a neutral camp (2 Normal, 3 Weak) at Archmother York Walker Added "0 Way" veils underneath the Shrine platforms in each base Moved the mid lane bridge above the Hidden King Base entrance more to the middle of the two edges Subsequent CC reduction increased from 8%/24% to 10/30% (window from 7s to 8s) Move speed diminishing ramp now occurs around 11m rather than 10m Fixed melee abilities not using conditional damage based on enemy state (close quarters, point blank, opening rounds) Street Brawl: Removed item slot limit (don\'t need to sell items in the final round sometimes) Added new T1 Spirit Item: Golden Goose Egg Backstabber: Renamed to Stalker Vindcita: Ammo reduced from 22 to 19 Vindcita: Crow Familiar cooldown increased from 28s to 32s Card Types: Spades: +70% Damage Diamond: Cuts enemy resistances by -8% for 5s. Does not stack. Hearts: Heals you for 75 HP (1.25 spirit scaling, half heal on non-heroes) Clubs: 30% Slow for 3s Joker: Has all of the above effects and bounces to an additional enemy within 20m. (Has 1/9th chance) Golden Egg Goose: Souls Per Minute increased from 75 to 90 Base Guardians HP reduced from 5500 to 4000 Zipline can now be captured a little bit more forward towards the enemy base The minimum always captured zipline distance in your base is now reduced a little bit inwards Super troopers (when a lane shrine is down) now have 15% less bounty Hero base health increased by 40 Hero health increased growth by +4 and 8% Vitality investment bonuses increased by 12% Vitality investment tree bonus reverted back to % base hp increase rather than raw constant bonus (back to how it was set up in december) Hero health growth increased by +3 and 4% Spirit investment rescaled from 7/11/15/19/38/52/64/76/89/101 to 7/11/15/19/38/48/57/66/75/100 Small neutrals spirit resist increased from 35% to 45% Improved the following Enhanced Items: Blood Tribute, Shadow Weave, Cultist Sacrifice, Magic Carpet, Healing Rite, Majestic Leap, Metal Skin, Monster Rounds, Veil Walker, Fury Trance, Return Fire, Restorative Locket, Rebuttal, Disarming Hex, Split Shot, Rescue Beam, Spirit Sap, Cursed Relic, Heroic Aura, Rusted Barrel, Weapon Shielding, Nullification Blast, Cloak of Opportunity Runed Gauntlet: Melee distance increased from 130% to 150% Runed Gauntlet: Cooldown on hit reduced from -12% to -16% Runed Gauntlet: Cooldown on hit reduced from -3s to -4s Brawl Victor: Aura of Suffering aura radius reduced by 2m Brawl Bebop: Hyper Beam duration from -4s to -5s Abrams Bullet damage reduced from 3.86+0.13/boon to 3.6+0.1/boon Siphon Life DPS reduced from 29 to 22 Siphon Life range reduced from 10m to 7.5m Siphon Life is now circular rather than just in front of him Siphon Life range no longer increases with Spirit Power Siphon Life visual range FX fixed to show larger than default radius values Siphon Life Lifesteal against heroes increased from 66% to 80% Siphon Life Lifesteal against non-heroes increased from 33% to 40% Siphon Life DPS spirit scaling increased from 0.5 to 0.6 Siphon Life T1 increased from -19s to -20s Siphon Life T3 now also increases radius by +3.5m Siphon Life T3 DPS reduced from 20 to 18 Shoulder Charge damage reduced from 37 to 30 Shoulder Charge wall stun duration reduced from 0.6s to 0.3s Should Charge spirit scaling reduced from 1.9 to 1.4 Shoulder Charge T1 changed from "+2.2 Weapon Damage for 8s" to "+40% Slow for 3s" Shoulder Charge T2 wall stun duration increased from 0.45s to 0.8s Shoulder Charge T3 cooldown increased from -18s to -20s Shoulder Charge T3 now also grants +1.5 Weapon Damage for 6s Infernal Resilience T2 increased from +150 Health to +200 Infernal Resilience T3 now also grants +20% Debuff Resistance Seismic Impact is a little faster to target the location when rising Seismic Impact damage increase from 75 to 100 Seismic Impact now allows you to use items during it Seismic Impact radius reduced from 10.5m to 9m Seismic Impact T2 changed from "Per Hero Hit: +100 HP and +14% Fire Rate" to "+0.6s Stun Duration" Seismic Impact T3 now also increases radius by 6m Melee damage per boon increased by 10% Siphon Life range increased from 7.5m to 8m Siphon Life T3 range reduced from +3.5m to +3m Infernal Resilience T3 increased from +7% Damage Regenerated to +8% Seismic Impact impact height increased from 4m to 6m Seismic Impact T2 increased from +0.6s Stun Duration to +0.7s Seismic Impact T3 Unstoppable duration increased from 4s to 5s Apollo Fixed Riposte not leaving the ground when started on the ground Riposte no longer triggers from trooper or neutral damage Flawless Advance T2 no longer increases Apollo\'s lunge speed Flawless Advance now gets interrupted by stun and sleep Itani Lo Sahn base damage reduced from 225 to 190 and spirit scaling increased from 1.6 to 2.3 Itani Lo Sahn\'s hit width no longer scales with radius increases Flawless Advance T3 now also increases Apollo\'s attacking lunge speed Bullet damage increased from 17 to 18.5 Riposte T2 melee resist reduction increased from -22% to -30% Riposte T3 increased from +1.2s Stun to +1.6s Bebop Hook can now be canceled Billy Bashdown radius reduced from 4.5m to 4m Bashdown T2 changed from "+1.3m Radius" to "+1 Charge and +2m Radius" Bashdown T3 now also reduces charge time by 2s Rising Ram damage reduced from 55 to 40 Rising Ram damage spirit scaling increased from 1.7 to 1.9 Rising Ram cooldown reduced by 50% on impact Rising Ram charge duration reduced from 0.51s to 0.3s Rising Ram T1 changed from "On Impact: -50% Cooldown" to "On Impact: +25% Weapon Damage for 5s" Rising Ram T2 changed from "On Impact: +35% Weapon Damage for 5s" to "+0.3s Charge Duration" Rising Ram T3 increased from 6.5% Max Health to 8% Blasted spirit scaling reduced from 0.8 to 0.6 Blasted active duration no longer slows down the decay when doing bullet damage (melee still extends it though) Blasted passive no longer reduces enemy fire rate by -14% Blasted tooltip simplified Blasted T3 now also increases spirit scaling by +0.6 Chain Gang radius reduced from 13m to 12m Chain Gang no longer grants +15% Spirit and Bullet Resist Chain Gang cooldown increased from 125s to 150s Chain Gang T1 changed from "-25s Cooldown" to "+40% Spirit and Bullet Resist" Chain Gang T2 changed from "+15% Spirit and Bullet Resist" to "-50s Cooldown" Chain Gang T3 changed from 2s Unstoppable to +1.3s Unstoppable for each hero pulled in Chain Gang T3 no longer grants +90 damage Chain Gang T3 now also increases the radius by +5m Rising Ram now uses a break-off angle when grounded, allowing upward movement if looking up enough Calico Bullets no longer have gravity Now fires an additional pellet right down the center (DPS is the same). The center pellet is now considered the primary pellet for headshots. Gloom Bombs changed so the first grenade always lands in the middle Gloom Bombs projectile sticky radius increased from 10 to 15 Gloom Bombs cast delay reduced from 0.15s to 0.1s Gloom Bombs T2 changed from +16.2 damage to +75 bonus damage vs barriers Leaping Slash improved targeting of dash to end early if near enemy heroes Leaping Slash can now dash vertically, even while on the ground Leaping Slash T2 changed from +40 damage to +300 souls on hero kill Leaping Slash T3 changed from -50% CDR on hit to -50% CDR and +60 damage Leaping Slash radius reduced from 4.5m to 4m Ava can no longer manipulate movement if meleeing while midair Ava now uses healthbar modifier style for duration Ava fixed camera not being centered around Ava Ava melee attack delay reduced from 0.4s to 0.0s Ava melee attack cooldown increased from 0.75 to 0.85 Ava melee attack now goes the way you are looking Ava now starts at a minimum speed, and increases to maximum speed over time, resetting on taking damage Ava now gradually recovers speed over time after taking damage, rather than being slowed for the entire duration Ava cooldown reduced from 45s to 30s Ava duration reduced from 16s to 15s Ava T1 duration increased from +14s to 15s Ava T2 changed from +45% Speed to +45% Speed and +15 Health Regen Ava T3 changed from -20s Cooldown and +35 Health Regen to a growing damage amp the longer you are transformed, up to 20% for 6s Return To Shadows now allows for some vertical flight movement during channel Return To Shadows now has new channel bar Return to Shadows T2 reduced from 67.5 Damage to 65 Return to Shadows T3 no longer grants +18% Damage Amp for 6s, but grants 350 healing instead Move speed reduced from 7.2 to 6.8 Fixed Gloom Bombs T2 giving an extra +15 flat bonus (released a couple days ago) Leaping Slash scaling reduced from 1.5 to 1.2 Leaping Slash T2 reduced from 300 Souls to 225 Leaping Slash scaling reduced from 1.2 to 0.8 Leaping Slash cooldown increased from 11s to 13s Leaping Slash T2 reduced from "+225s within 4s" to "+200 within 3s" Ava is no longer disabled by damage over time abilities (same as zipline rules) Return to Shadows move speed reduced from 30% to 20% Return to Shadows cooldown increased from 90s to 100s Celeste Gravity reduced from -20% to -28% (less gravity) Air Control/Acceleration reduced from +50/18% to +38/12% (less air control and acceleration) Shining Wonder bounce range reduced from 17m to 15m Shining Wonder linger duration reduced from 4.5s to 3.25s Gravity from 28% to 25% (was 20% previous patch) Air Control increased from 38% to 44% (was 50% previous patch) Light Eater on hit damage reduced from 25 to 20 Dazzling Trick barrier spirit scaling reduced from 1.1 to 0.8 Shining Wonder no longer refunds half cooldown on miss Shining Wonder linger time reduced from 3.25s to 3s Bullet/Melee resistance reduced from -6% to -8% Gun now has falloff 22m->60m Bullet damage increased from 18+0.6 to 22+0.7 Light Eater spirit scaling increased from 0.23 to 0.28 Dazzling Trick no longer grants +1m Move Speed Dazzling Trick T1 increased from +2.5m Move Speed to +3.5m Radiant Daggers spirit scaling increased from 0.42 to 0.56 Radiant Daggers T2 increased from "-15s Cooldown and +60 Damage" to "-18s Cooldown and +70 Damage" Radiant Daggers T3 fire rate increased from 6% to 7% Shining Wonder range reduced from 15m to 14m Shining Wonder T3 reduced from +10 Max Bounces to +8 Doorman Gun now pierces through targets at 50% reduced damage Call Bell time between charges increased from 4s to 6s Call Bell no longer has Impact Damage (was 40 with 1.0 scaling) Call Bell explosion damage increased from 55 to 85 Call Bell explosion damage spirit scaling reduced from 1.7 to 1.4 Call Bell T1 increased from +2m to +2.5m Call Bell T2 no longer has Impact Damage Call Bell T2 Explosion Damage increased from 40 to 75 Call Bell T2 now increases spirit scaling by +0.6 Call Bell T3 changed from "Impact causes half radius explosions" to "+1 Charge and +22s Lifetime. Causes the radius to continuously apply it\'s slow" Doorway now has a timer icon above the ability Doorway T1 duration increased from +10s to +15s Doorway T2 barrier duration increased from 8s to 12s Doorway T3 doorway distance now also scales with Spirit Power (0.25) Luggage Cart is now 20% larger (20% wider hitbox as well) Luggage Cart T1 changed from "-8s Cooldown" to "+60 Damage" Luggage Cart T2 increased from +15m Cast Range to +20m Luggage Cart T3 changed from "+45 Cart Damage and 117 Wall Damage and 1.2s Wall Stun" to "+1.5s Wall Stun and -15s Cooldown" Fixed issues where the cart would hit a target coming out of the hotel before they were supposed to be allowed to be hit, causing the cart to not properly drag the target Hotel Guest cast range increased from 6m to 7m Hotel Guest no longer goes on cooldown if the target dies during the cast Hotel Guest fixed enemies not always landing in the correct spot on return Hotel Guest now supports instant cast settings Hotel Guest returning guest now has a 100% time slow that decays to 0% over 1s Hotel Guest cost of stay damage reduced from 150 to 75 Hotel Guest failure to check-out damage reduced from 250 to 125 Hotel Guest T1 changed from "+2m Cast Range" to "-1 Stamina and -25s Cooldown" Hotel Guest T2 changed from "Unstoppable while channeling" to "+1.5s Stun On Failure To Checkout and 150 Damage" Hotel Guest T3 changed from "-50s Cooldown" to "Unstoppable while Hotel is occupied. 10s Cooldown on Failure to Check Out" Hotel Guest T3 late checkout cooldown increased from 10s to 13s Call Bell now has Impact Damage (40+1) and Explosion Damage (55+1.7) as separate components again (previous values for impact/explosion) Call Bell T2 is now "+30 Impact Damage and +40 Explosion Damage" Call Bell T3 now also increases slow by 15% Call Bell now continuously emits slow Call Bell impact damage spirit scaling reduced from 1 to 0.7 Call Bell T1 changed from "+3m Radius" to "+1 Charge" Call Bell T3 no longer grants +1 Charge Call Bell T3 now also grants +4m Radius Call Bell T3 duration increased from +22s to +26s Call Bell T3 now also increases spirit scaling by +0.4 Call Bell T3 no longer increases slow by -15% Doorway now shows the range of where the second door can be placed on the minimap. Doorway T3 distance spirit scaling reduced from 0.25 to 0.15 Doorway T3 reduced from +50m to +45m Fixed Luggage Cart moving targets with Unstoppable if it goes through a Doorway Drifter Rend damage range reduced from 18m to 16m Rend cooldown increased from 13s to 16s Rend damage spirit scaling increased from 1.4 to 1.8 Rend "bonus" damage is now the melee range at close range (so you only do melee damage at close range and spirit is the default) Rend T1 bonus damage increased from +32 to +40 Rend T3 changed from "Gain 45% Bullet Lifesteal against affected enemies for 4s" to "Close range attack now silences enemies for 2.3s" Stalker\'s Mark duration reduced from 6s to 5s Stalker\'s Mark T1 changed from "+1% Bleed" to "-8% Bullet Resist" Stalker\'s Mark T2 changed from "+22% Fire Rate for 6s after ambush" to "+3s Duration and -8s Cooldown" Stalker\'s Mark T3 changed from "Enables 2 Charges and +2s Duration" to "+2% Bleed and -40% Healing" Bloodscent now grants Drifter the same amount of permanent bonus weapon damage when an isolated hero dies nearby, whether Drifter gets the assist or the kill Bloodscent permanent bonus weapon damage gained per isolated hero death reduced from 4% to 3% Bloodscent T2 changed from "Isolated kill reduces cooldowns by 15s and restores 3 stamina" to "Isolated death restores 18% Missing Health and restores 2 stamina" Eternal Night now makes the targets be considered as isolated Eternal Night Sprint reduced from +3m to +2m Eternal Night no longer has 7 spirit damage proc Eternal Night cooldown increased from 120s to 125s Eternal Night duration reduced from 7s to 6.5s Eternal Night T1 changed from "+6.3 Spirit Damage Proc" to "+10m Sprint" (kicks in immediately) Eternal Night T2 changed from "-30s Cooldown and +3m/s Sprint" to "-45s Cooldown" Eternal Night T3 increased from "+2s Duration and +1 Max Target" to "+2.5s Duration and +1 Max Target" Fixed Quicksilver Reload dealing bonus multiple times with Rend Dynamo Bullet damage increased from 12.2+0.44 to 12.6+0.5 Kinetic Pulse cooldown increased from 22s to 26s Kinetic Pulse damage increased from 90 to 115 Kinetic Pulse range reduced from 20m to 16m Kinetic Pulse range no longer increases with spirit scaling Kinetic Pulse spirit scaling increased from 1.7 to 2.1 Kinetic Pulse T1 changed from "35% Move Slow and -30% Fire Rate" to "+1 Charge" Kinetic Pulse T2 changed from "+30% Bullet Damage for 8s" to "Reduces enemy Bullet Resistance by -18% and Move Speed by -30% for 4s" Kinetic Pulse T3 changed from "+104 Damage and +1 Charge" to "+135 Damage and +16m Cast Range" Quantum Entanglement no longer grants +26% Fire Rate Quantum Entanglement no longer reloads ammo Quantum Entanglement base ability now restores 1 stamina Quantum Entanglement ally distance increased from 10m to 13m Quantum Entanglement range increased from 9m to 10m Quantum Entanglement T1 increased from +4m Range to +6m Quantum Entanglement T2 changed from "+22% Fire Rate" to "-6s Cooldown" Quantum Entanglement T3 changed from "-5s Cooldown and +120% Ammo" to "Dispells non-ult debuffs for you and your allies" Rejuvenating Aurora cooldown increased from 45s to 48s Rejuvenating Aurora now has a 1s linger on allies Rejuvenating Aurora now lets you jump while using it Rejuvenating Aurora T1 changed from "+4 Move Speed for 8s after full channel" to "Aura provides +4 Move Speed during channel" Rejuvenating Aurora T2 cooldown from -14s to -20s Rejuvenating Aurora T2 now also increases duration by 1s Singularity no longer does 1.5% Max Health DPS Singularity DPS increased from 40 to 75 Singularity DPS spirit scaling increased from 0.19 to 0.28 Singularity T3 increased from 4% Max Health DPS to 5.5% Ammo increased from 18 to 20 Kinetic Pulse spirit scaling reduced from 2.1 to 1.8 Kinetic Pulse width increased from 5m to 5.5m Kinetic Pulse T3 increased from +16m Range to +20m Quantum Entanglement T3 now also replenishes 1 charge for charged abilities (half effect on allies) Singularity T3 Max health as damage increased from 5.5% to 6% Graves Grasping Hands is now set up to work through proper alternate cast methods and be more responsive Grasping Hands Immobilize duration reduced from 1.5s to 1.25s Grasping Hands cooldown reduced from 38s to 34s Grasping Hands T2 changed from "+0.75s Immobilize Duration" to "+90 Damage and +10m Wall Length" Grasping Hands T3 changed from "+15m Wall Length and -10s Cooldown" to "+1s Immobilize Duration and -12s Cooldown" Jar of Dead spirit scaling increased from 0.25 to 0.35 Jar of Dead health per boon increased from 1 to 1.3 Jar of Dead fixed colliding with the world sometimes Jar of Dead T2 now increases duration by +4s Grasping Hands deploy time reduced from 0.7s to 0.6s Grasping Hands T3 changed from "+1s Immobilize and -12s Cooldown" to "+1s Immobilize and +2 Ghouls Summoned" Essence Theft T3 fixed to latch onto targets nearby more readily Borrowed Decree now summons 2 Ghouls on cast Borrowed Decree T3 no longer summons 3 Ghouls on cast Borrowed Decree T3 increased from +5% Current Health to +6% Haze Spirit per boon reduced from 1.1 to 0.5 Sleep Dagger Sleep move speed reduced from 2m/s to 1.5m/s Sleep Dagger Wake Up delay no longer increases with spirit scaling Sleep Dagger cooldown increased from 26s to 30s Sleep Dagger Sleep duration reduced from 3s to 2.75s Sleep Dagger T1 changed from "Removes 1 Stamina" to "-8% Bullet Resist Reduction for 6s" Sleep Dagger T2 changed from "-12s Cooldown and -60% Stamina for 6s" to "-15s Cooldown" Sleep Dagger T3 changed from "-12% Bullet Resist and -35% Fire Rate for 6s on wakeup" to "+0.75s Sleep Duration. -50% Move and Dash Slow for 2.5s on wakeup" Smoke Bomb cooldown increased from 30s to 33s Smoke Bomb duration spirit scaling reduced from 0.18 to 0.08 Smoke Bomb no longer has base +2m Invis Sprint Speed Smoke Bomb T1 increased from +5m Invis Sprint Speed to +7m Smoke Bomb T2 changed from "+10% Bullet Lifesteal" to "Enables 2 Ability Charges" Smoke Bomb T3 changed from "Enable 2 Charges and Grants +0.5s of Invincibility" to "Dispels non-ult debuffs and grants 30% Lifesteal for 5s" Fixation reduced from +0.2 Weapon Damage per stack to +0.18 Fixation T1 spirit scaling increased from 0.37 to 0.8 Fixation T1 reduced from +50 Spirit Damage to +40 Fixation T3 increased from +0.12 Weapon Damage to +0.14 Bullet Dance Fire Rate bonus reduced from 30% to 20% Bullet Dance base ability now has 60% Evasion Bullet Dance duration spirit scaling increased from 0.06 to 0.08 Bullet Dance Bonus Bullet Damage reduced from 10 to 7 Bullet Dance T1 increased from +4 Bullet Damage to +7 Bullet Dance T2 now also increases Fire Rate by +10% Bullet Dance T3 no longer adds 60% Bullet Evasion Bullet Dance T3 now also fires at an additional target Infernus Napalm damage reduced from 46 to 40 Napalm damage spirit scaling increased from 0.3 to 0.6 Napalm amplified damage taken reduced from 20% to 16% Napalm T2 lifesteal increased from 10% to 15% Flame Dash DPS spirit scaling increased from 0.8 to 1.0 Flame Dash T1 changed from "-25% Fire Rate" to "-12s Cooldown" Flame Dash T2 DPS reduced from +27 to +20 Flame Dash T2 DPS now also increases trail duration by 1s Flame Dash T3 no longer reduces cooldown by 15s Flame Dash T3 now also grants +1 Charge Flame Dash T3 time between charges reduced from 20s to 14s Melee can now buildup afterburn (20% for light melee, 35% for heavy) Afterburn T1 changed from "-20% Spirit Damage" to "+14 DPS" Afterburn T2 changed from +1s Burn Duration to -35% Spirit Damage Afterburn T3 changed from "+23 DPS" to "+3s Max Burn Duration" (Base duration is the same, but can buildup after igniting to grow to max burn duration, abilities only refresh up to the base) Concussive Combustion cast now causes camera to move back a bit Concussive Combustion delay increased from 3s to 3.25s Concussive Combustion radius reduced from 13m to 12m Concussive Combustion cooldown increased from 140s to 165s Concussive Combustion damage reduced from 150 to 125 Concussive Combustion T1 changed from "-35s Cooldown" to "+100 Damage" Concussive Combustion T2 changed from "+0.5s Stun and +3m Radius" to "-65s Cooldown and +65% Explosion Heal" Concussive Combustion T3 changed from "+94 Damage and Heal for 70% damage" to "+0.75s Stun and +10m Radius" Reload time reduced from 2.491 to 2.25 Flame Dash speed now moves faster by the same amount of speed above your base Concussive Combustion T2 increased from +65% Explosion Lifesteal to +85% Ivy Now has -10% Gravity Bullet damage reduced from 4.59+0.12/boon to 4.45+0.06/boon Kudzu Bomb renamed to Entangling Thorns Entangling Thorns Recharge Time reduced from 8s to 5s Entangling Thorns spirit scaling reduced from 0.65 to 0.55 Entangling Thorns T2 changed from "+2s Duration" to "+2m Radius and increases spirit scaling by +0.5" Entangling Thorns T3 changed from "+36 DPS and +2m Radius" to "Entangles enemies that remain in it for 2s. Lasts 1.6s" Watcher\'s Covenant renamed to Kudzu Connection Kudzu Connection Fire Rate spirit scaling reduced from 0.25 to 0.18 Kudzu Connection Bullet Lifesteal spirit scaling reduced from 0.19 to 0.15 Kudzu Connection T1 changed from "+8% Fire Rate" to "+2m Move Speed bonus" Kudzu Connection T2 changed from "+2m Move Speed Bonus" to "+8% Fire Rate and +8% Bullet Lifesteal" Kudzu Connection T3 changed from "+1 Tether Count" to "Ability is now always active" Stone Form cooldown increased from 37s to 40s Stone Form damage spirit scaling reduced from 1.5 to 0.8 Stone Form T1 changed from "-19s cooldown" to "+7% Max Health Heal" Stone Form T2 changed from "+68 Damage and +0.5s Stun" to "-25s Cooldown" Stone Form T3 changed from "+13% Max Health Heal" to "+1s Stun and Increased Spirit Scaling (2.0)" Air Drop cast time removed. Instead, if you take damage the ability will be unable to be used for 3.5s Air Drop spirit damage scaling reduced from 2.3 to 1.0 Air Drop Cooldown reduced from 100s to 65s Air Drop duration increased from 16s to 21s Air Drop base/max speed increased from 11/18m to 10/22m Air Drop bomb radius increased from 14m to 20m Air Drop buff duration reduced from 12s to 8s Air Drop ally cast range increased from 14m to 18m Air Drop now grants you and your ally +20% Outgoing Damage after dropping Air Drop bomb no longer has a fast explode expanding behavior Air Drop bomb no longer causes a knockup Air Drop bomb no longer slows on explode by default Air Drop bomb no longer provides barrier by default Air Drop T1 changed from "-20% Bullet Resist on enemies hit for 8s" to "Grants you and ally 300 Barrier (+1.0 Spirit Scaling)" Lasts 12s. Air Drop T2 changed from "+200 Barrier and +5m Explode Radius" to "Explode applies 50% Slow for 3s" Air Drop T3 now also increases damage scaling by +1.5 and barrier scaling by +1.0 Entangling Thorns spirit scaling reduced from 0.55 to 0.45 Bullet damage growth increased from 0.06 to 0.08 Kudzu Connection now only gives you half the bonus if you aren\'t connected to an ally Air Drop damage spirit scaling reduced from 1 to 0.7 Air Drop T1 barrier spirit scaling reduced from 1 to 0.7 Air Drop T2 slow reduced from 50% to 40% Stone Form spirit scaling reduced from 0.8 to 0.6 Stone Form T3 spirit scaling reduced from +2 to +1.7 Air Drop ally cast range increased from 18m to 22m Air Drop is no longer disabled by damage over time abilities (same as zipline rules) Air Drop cooldown increased from 65s to 85s Air Drop cooldown is reduced by 25% when used on allies Kelvin Frost Grenade now impacts on Ice Path Frost Grenade radius reduced from 6.5m to 6m Frost Grenade cooldown increased from 20s to 30s Frost Grenade now comes with 2 charges Frost Grenade now heals in the base ability (60 + 0.9 Spirit Scaling) Frost Grenade no longer has -40% Stamina regen reduction Frost Grenade T1 changed from "+1 Charge" to "Increases damage and heal by +30" Frost Grenade T2 changed from "Provides healing 80+1.5" to "Freezes stamina regen and -10s Cooldown" Frost Grenade T3 changed from "+144 Damage and -30% Stamina Regen" to "Increases damage and heal spirit scaling by 1.0 and Radius by +2m" Ice Path is now cancelled on Ability Button Press instead of Space Ice Path cooldown increased from 46s to 50s Ice Path incline/decline speed increased Ice Path T1 changed from "+4 Sprint" to "+2 Move Speed and +35% Bullet Resistance on Ice Path" Ice Path T2 increased from -17s Cooldown to -20s Ice Path T3 now grants you +35% Spirit Power while on Ice Path Arctic Beam visual clarity on VFX improved Arctic Beam now lets you cast Frost Grenade and items while using it Arctic Beam Max Fire Rate Reduction reduced from -35% to -20% Arctic Beam Max Slow reduced from -40% to -20% Arctic Beam spirit scaling reduced from 0.8 to 0.5 Arctic Beam cooldown increased from 25s to 28s Arctic Beam T1 changed from "-7s Cooldown" to "Increases Move Slow and Fire Rate Reduction by -25%" Arctic Beam T2 changed from "+33 DPS" to "+20 DPS and +0.6 Spirit Scaling" Arctic Beam T3 now also reduces cooldown by 13s Frozen Shelter can now be canceled first without canceling Ice Beam Frozen Shelter is now 8m unit target, creates the dome around the center of both heroes. Can be self casted to create it around yourself. Frozen Shelter duration reduced from 5.25s to 5s Frozen Shelter T1 changed from "-35% Enemy Fire Rate" to "-25s Cooldown" Frozen Shelter T2 increased from +1s to +1.5s Frozen Shelter T3 now also dispels non-ult debuffs on cast (affects you and allies) Frost Grenade radius increased from 6m to 6.5m Frost Grenade damage spirit scaling reduced from 0.914 to 0.8 Frost Grenade T3 damage spirit scaling reduced from 1.0 to 0.9 Ice Path T2 increased from -20s Cooldown to -25s Ice Path T3 now also grants +20 Spirit Power Frozen Shelter T3 increased from 50 Health Regen to 65 Lady Geist Essence Bomb self damage changed from 30 + 1.8 scaling to 30% of the damage (base is 90 + 1.2 scaling) Essence Bomb radius reduced from 9m to 7m Essence Bomb cooldown reduced from 14.5s to 14s Essence Bomb T1 increased from -4s to -5s Essence Bomb T2 also increases radius by +2m Life Drain cooldown increased from 30s to 34s Life Drain break range reduced from 30m to 28m Life Drain T1 DPS increased from +16.2 to +18 Life Drain T2 duration increased from +2s to +2.5s Life Drain T3 charges increased from +1 to +2 Life Drain T3 now also increases spirit scaling by +0.3 Soul Exchange cast time reduced from 0.2s to 0.1s Soul Exchange post cast hold time reduced from 0.7s to 0.2s Soul Exchange T1 cooldown increased from -35s to -60s Soul Exchange T2 changed from "On Cast: +35% Fire Rate for 8s" to "Silences enemies within 25m for 3s" Soul Exchange T3 changed from "Silences enemies within 25m for 3s" to "On Cast: +60 Spirit Power, +40% Fire Rate and +50% Spirit Resistance for 8s" Lash Increased Sparkles Fixed Ground Strike against players brought down from mid air not doing damage Grapple T2 weapon damage increased from +6 to +7 Grapple T3 changed from "+20% Fire Rate" to "+60% Air Control and +1 Stamina on Usage" Flog cooldown increased from 24s to 26s Flog Attack Angle no longer increases with Spirit Power Flog heal vs heroes reduced from 60% to 50% Flog T2 increased from -12s Cooldown to -16s Flog T2 now also reduces Fire Rate by 30% Flog T3 no longer reduces Fire Rate Flog T3 damage reduced from +86 to +80 Flog T3 now also increases Attack Angle by 40 and Heal by +20% Fixed Death Slam camera sometimes being obstructed Death Slam throw distance no longer scales with Spirit Power (was 0.3) Death Slam cooldown increased from 145s to 150s Death Slam T1 throw distance increased from +8m to +12m Death Slam T2 cooldown increased from -25s to -40s Death Slam T3 now also increases cast range by +10m Death Slam throw range increased from 12m to 14m Death Slam throw range now scales with spirit power (+0.14) Death Slam T3 cast range reduced from +10m to +6m Death Slam T3 stun increased from 1s to 1.2s McGinnis Stamina speed bucket 3 to 2 Bullet damage reduced from 6.72 + 0.2/boon to 6.0 + 0.16/boon Mini Turret duration increased from 24s to 35s Mini Turret base health and health growth reduced by 40% Mini Turrets initial fading resist start value increased from 60% to 80% Mini Turrets now have 35% melee resist Mini Turret tracking, angle and projectile speeds significantly improved Mini Turret on the minimap now flash/turn red when they are attacking Mini Turret T1 changed from "Turrets apply 25% slow" to "+10m Attack Range and +10 DPS" Mini Turret T2 changed from "+10m Attack Range and + 10% Fire Rate" to "+2 Charges" Mini Turret T3 changed from "+38 Turret DPS and +14s Turret Lifetime" to "+30% Turret Fire Rate and +12s Turret Lifetime" Medicinal Specter duration no longer scales with spirit power Medicinal Specter radius no longer scales with spirit power Medicinal Specter regen now scales with spirit power (+0.3) Medicinal Specter cooldown increased from 48s to 50s Medicinal Specter no longer provides +15% Stamina Recovery Medicinal Specter T1 changed from "+30% Fire Rate" to "+40% Spirit Resistance" Medicinal Specter T2 increased from -17s Cooldown to -20s Medicinal Specter T2 now also increases Stamina Recovery by +100% Medicinal Specter T3 regen reduced from 2.5% Max HP to 2% Medicinal Specter T3 now also increases radius by 3m Medicinal Specter T3 now also increases duration by 1s Spectral Wall that is midcast will now fire when you are interrupted, rather than continue to expand outward Spectral Wall segments can now be destroyed with 2 heavy melee hits (destroys an individual segment) Spectral Wall min range reduced from 6m to 5m Spectral Wall applies it\'s slow to enemies it passes through while being summoned Spectral Wall T1 no longer drains 1 stamina Spectral Wall T1 Damage Amp increased from 15% to 20% Spectral Wall T2 also increases wall duration by +2s Spectral Wall T3 changed from "0.75s Stun on Impact" to "Creates 2 Turrets for 8s and increases slow by 30%" (creates them on the side facing you spread along the wall) Heavy Barrage duration reduced from 13s to 8s Heavy Barrage minimum range reduced from 9m to 8.5m Heavy Barrage T1 tooltip updated to clarify that it also reduces dash distance Heavy Barrage T1 move slow reduced from 40% to 30% Heavy Barrage T1 dash slow increased from 20% to 30% Heavy Barrage T1 slow duration reduced from 2s to 1.5s Heavy Barrage T2 cooldown reduction increased from -45s to -55s Heavy Barrage T2 now also increases duration by 6s Heavy Barrage T3 damage increased from +21 to +25 Heavy Barrage T3 spirit scaling from +0.2 to +0.25 Heavy Barrage T3 now also increases explosion radius by 2m Heavy Barrage radius reduced from 5m to 4.5m Heavy Barrage T1 slow duration reduced from 1.5s to 1s Heavy Barrage T3 spirit scaling reduced from +0.25 to +0.2 Heavy Barrage T3 damage reduced from +25 to +22 Bullet damage increased from 6.0+0.15/boon to 6.2+0.16/boon Mini Turret attack range increased from 25m to 30m Medicinal Specter radius increased from 5m to 5.5m Spectral Wall duration increased from 4.5s to 5s Heavy Barrage cooldown increased from 165s to 175s Heavy Barrage spirit scaling reduced from 0.23 to 0.2 Heavy Barrage T3 spirit scaling reduced from 0.2 to 0.16 Heavy Barrage T3 DPS reduced from 22 to 18 Mina Stamina cooldown increased from 3.9s to 4.2s Rake cooldown increased from 10s to 16s Rake hero hit missing health as damage increased from 3% to 5% Rake heal per kill reduced from 30 to 25 Rake heal per kill spirit scaling reduced from 0.43 to 0.3 Rake T1 changed from "+20 Heal Per Kill" to "+60 Damage" Rake T2 changed from "+54 Damage and +1.0 Heal Per Kill spirit scaling" to "+30 Heal Per Kill and -8s Cooldown" Rake T3 now also provides +1.2 Heal Per Kill spirit scaling Sanguine Retreat cast range reduced 10m to 9m Sanguine Retreat recast window increased from 3s to 3.5s Sanguine Retreat T1 changed from "+3m Cast Range" to "+20% Fire Rate and 8 Bullets" Sanguine Retreat T2 changed from "+25% Fire Rate and 8 Bullets" to "-10s Cooldown" Sanguine Retreat T3 changed from "-12s Cooldown" to "+1 Recast" Love Bites Cooldown increased from 8s to 10s Love Bites damage reduced from 6 to 4 Love Bites damage spirit scaling increased from 0.06 to 0.09 Love Bites bonus damage reduced from 55 to 45 Love Bites bonus damage spirit scaling increased from 1.6 to 1.85 Love Bites T1 changed from "On Proc: +4 m/s Move Speed for 3s" to "On Proc: 30% Slow for 3s" Love Bites T2 Damage/Bonus reduced from 3.6/50 to 3/45 Love Bites T3 changed from "On Proc: -1 Stamina and 30% slow for 3s" to "-4s Cooldown and On Proc +25% Fire Rate for 5s" Nox Nostra cooldown increased from 115s to 130s Nox Nostra damage reduced from 6 to 5.6 Nox Nostra T1 increased from +1.8 to +2.2 Nox Nostra T2 cooldown increased from -40s to -55s Fixed a bug with Rake with how the low hp bonus damage against non-hero targets was dealt (when they were low, the spirit resist didn\'t matter effectively) Float time with umbrella increased from 2.5s to 4s Can now zoom in again to continue floating if you let go of the zoom, as long as the total zoom time is still under the max Fixed various issues with Nox Nostra bats not hitting things properly (DPS values reduced to compensate for this indirect buff) Mirage Bullet damage reduced from 15.2+0.5 to 14.8+0.3 Fire Scarabs no longer have a limited duration to launch each one. Functions as a normal charged ability. Fire Scarabs collision and model size increased a bit Fire Scarabs base charges reduced from 4 to 2 Fire Scarabs spirit scaling reduced from 1.0 to 0.8 Fire Scarabs now immediately steal the health from the target Fire Scarabs Max Health steal increased from 45 to 70 Fire Scarabs changed from -8% Bullet Resist to +10% Damage Amp on that target from any damage you deal Fire Scarabs cooldown increased from 40s to 45s Fire Scarabs T1 changed from "-15s Cooldown" to "+50 Max Health Steal" Fire Scarabs T2 changed from "-8% Bullet Resist" to "+2 Charges" Fire Scarabs T3 changed from "+63 Max Health Steal" to "+10% Damage Amp and +1.2 Spirit Scaling" Fire Scarabs no longer has a reduced effect against non-heroes Tornado renamed to Dust Devil Dust Devil lift duration reduced from 1.0s to 0.4s Dust Devil spirit scaling reduced from 0.7 to 0.3 Dust Devil now slows affected enemies by 30% for 3s Dust Devil bullet evasion duration increased from 3.5s to 4s Dust Devil bullet evasion increased from 25% to 30% Dust Devil T1 changed from "+0.4s Lift Duration" to "+60 Damage" Dust Devil T2 changed from "-14s Cooldown" to "-8s Cooldown and +30% Evasion" Dust Devil T3 changed from "+20% Bullet" to "Can Recast within 5s. Increases spirit scaling by 1.0" Djinn\'s Mark cooldown increased from 2.6s to 3s Djinn\'s Mark multiplier duration increased from 4.5s to 5s Djinn\'s Mark reveal duration increased from 3s to 6s Djinn\'s Mark tooltip rewritten to be based on a "per stack" basis. A stack increases the damage by 200%. (this is just a tooltip change) Djinn\'s Mark T1 changed from "60% slow for 0.5s on 2x stack" to "Fading 60% slow for 0.5s" Djinn\'s Mark T2 increased from +8.1 Damage to +20 Djinn\'s Mark T3 cooldown increased from -0.75s to -1s Djinn\'s Mark T3 now also stuns for 0.5s at max stacks Traveler cooldown reduced from 155s to 145s Traveler can now be cast while on the zipline Traveler no longer channels. It now has a 3s delay before teleporting. Taking damage interrupts the ability and puts it on cooldown for 6s. Traveler now targets a location on the minimap rather than units. Places you at the ground level of that location. Traveler no longer grants +2m Move Speed and +26% Fire Rate Traveler T1 changed from "+2m Move Speed and -35s Cooldown" to "3m Move Speed for 12s" Traveler T2 changed from "Grants Traveler Buffs to Ally" to "400 Barrier with spirit scaling for 12s" Traveler T3 "Unstoppable for 3s" to "-80s Cooldown" Fire Scarabs cooldown reduced from 45s to 35s Traveler T1 now also increases Fire Rate by 20% Fire Scarabs no longer does max health steal Fire Scarabs now drains life from the enemy, dealing DPS to the enemy and healing you for 8s. Fire Scarabs no longer applies +10% Damage Amp Fire Scarabs now reduces enemy damage output by 20% (and +15% in T3) Dust Devil radius increased from 3.5m to 4m Dust Devil T3 window to recast increased from 5s to 6s Djinn\'s Mark spirit scaling reduced from 0.51 to 0.44 Djinn\'s Mark debuff visuals improved Djinn\'s Mark T1 slow duration increased from 0.5s to 0.8s Djinn\'s Mark T2 multiplier duration increased from 2.5s to 3s Traveler no longer gets interrupted by non-hero sources nor DOT damage Traveler wait time reduced from 3s to 2s Traveler interrupt cooldown reduced from 6s to 4s Traveler cooldown reduced from 145s to 120s Traveler can now be manually canceled Traveler can now also target units Mo & Krill Scorn damage reduced from 56 to 50 Scorn radius reduced from 10m to 9m Scorn spirit scaling increased from 0.42 to 0.75 Scorn T1 changed from "-3.75s Cooldown" to "+35 Damage" Scorn T2 changed from "+21 Damage" to "-5s Cooldown and +1m Radius" Burrow now lets you enter the tunnels Burrow cooldown increased from 37s to 40s Burrow T1 changed from "+3s Duration" to "+50 Spin DPS" Burrow T2 changed from "+68 Spin DPS and +2 Radius" to "+2 Spin Radius and +4s Burrow Time" Burrow T3 increased from +2 m/s Move Speed to +4 Burrow T3 increased from -19s Cooldown to -20s Sand Blast cooldown reduced from 42s to 40s Sand Blast duration reduced from 3s to 2.5s Sand Blast range reduced from 35m to 25m Sand Blast T1 changed from "+1s" to "+50 Damage and +5m Range" Sand Blast T2 changed from "-23s Cooldown" to "Slows targets Move Speed and Dash Distance by -25%" Sand Blast T3 changed from "Slows targets Move Speed and Dash Distance by -40%" to "+1s Duration and -20s Cooldown" Combo cooldown increased from 90s to 150s Combo DPS increased from 35 to 60 Combo T1 changed "+30% Bullet Resist During Combo" to "+100% Lifesteal" Combo T2 changed from "+0.7s Duration" to "+60 DPS and +50% Bullet Resist" Combo T3 changed from "+32 DPS and 80% Lifesteal" to "+0.7s Duration and -60s Cooldown" Scorn heal vs non-heroes reduced from 0.5x to 0.35x Scorn cooldown increased from 12.5s to 13s Combo DPS reduced from 60 to 45 Combo cooldown reduced from 150s to 140s Combo T2 changed from "+60 DPS and +50% Bullet Resist" to "-35s Cooldown and +50% Bullet Resist" Combo T3 changed from +0.7s Duration and -60s Cooldown" to "+0.7s Duration and +60 Damage" Combo range reduced from 4.8m to 4m Combo DPS reduced from 45 to 40 Combo DPS spirit scaling reduced from 1.2 to 0.6 Combo cooldown reduced from 140s to 130s Combo T3 DPS reduced from +60 to +50 Combo T3 now also increases spirit scaling +0.4 Combo health rescaled from 50 to 30 + 1/Boon (not retroactive) Paige Conjure Dragon renamed to Bookwyrm Bookwyrm fixed initial location not starting where you click it Bookwyrm cooldown increased from 30s to 33s Bookwyrm T1 changed from "-5s Cooldown" to "+2s Trail Duration and +1m Width" Bookwyrm T2 changed from "+2s Trail Duration" to "-8s Cooldown and +10m Travel Range" Bookwyrm T3 Damage/DPS rescaled from 104/27 to 100/30 Bookwyrm T3 now also grants +1 Charge Defend and Fight! renamed to Plot Armor Plot Armor barrier spirit scaling reduced from 1.6 to 1.3 Plot Armor T3 now also increases spirit scaling (+0.3) Captivating Read height area no longer increases with range bonuses Captivating Read cooldown increased from 25s to 30s Captivating Read immobilize duration reduced from 1.25s to 1s Captivating Read T1 cooldown increased from -6s to -11s Captivating Read T2 immobilize duration increased from 0.75s to 1s Captivating Read T3 now also increases radius by 1m Rallying Charge T2 now also reduces cooldown by 30s Rallying Charge T3 now also increases Max Amp from +100% to +150% Paradox Pulse Grenade radius reduced from 6m to 5.5m Pulse Grenade radius increases by +1m per Pulse Pulse Grenade Amp Per Stack reduced from 6% to 4% Pulse Grenade cooldown increased from 28s to 32s Pulse Grenade spirit scaling reduced from 0.6 to 0.4 Pulse Grenade changed from -30% Move Speed for 2s to -20% Time Slow for 0.2s Pulse Grenade T1 changed from +0.8s Duration to -12s Cooldown Pulse Grenade T2 changed from "-8s Cooldown" to "+20 Pulse Damage and +0.5 Spirit Scaling" Pulse Grenade T3 changed from "+36 Pulse Damage and +0.8m Radius per Pulse" to "+4% Damage Amp Per Stack and +1.6s Duration" Time Wall duration reduced from 6s to 5.5 Time Wall no longer damages enemies going through it Time Wall now increases allied bullet speeds going through it by 100% Time Wall now increases adds +30% Weapon Damage to allied bullet damage (affects Carbine) Time Wall T1 increased from +2m Width to +3m Time Wall T2 changed from "+9% Max Health Damage" to "+2.5s Duration and +30% Weapon Damage" Time Wall T3 changed from silencing enemies to Allowing Charges and Granting +1 Charge (4s Charge Time) Kinetic Carbine cooldown increased from 27s to 30s Kinetic Carbine speed spirit scaling increased from 0.09 to 0.13 Kinetic Carbine base damage scale increased from 100% to 125% Kinetic Carbine T2 changed from "-8s Cooldown and +2s Charge Hold" to "-12s Cooldown" Kinetic Carbine T3 now also increases charge hold by 2s Paradoxical Swap cooldown increased from 75s to 95s Paradoxical Swap no longer has 80% Spirit Lifesteal Paradoxical Swap damage changed from 115 (0.6 spirit scaling) to 10% Current Health Paradoxical Swap T1 changed from "-15s Cooldown" to "+200 Barrier (1.5 Spirit Scaling)" Paradoxical Swap T2 changed from "+81 Damage" to "+13m Cast Range and -35s Cooldown" Paradoxical Swap T3 changed from "+15m Cast Range" to "Swaps additional enemies in 7m radius and +10% Current Health Damage" Pulse Grenade spirit scaling reduced from 0.4 to 0.3 Time Wall slow duration increased from 1.25s to 2s Time Wall T1 now also increases duration by +2.5s Time Wall T2 no longer increases duration by +2.5s Time Wall T2 now also silences enemies for 2.3s Paradoxical Swap damage changed from 10% Current Health to 125 with 1.1 spirit scaling Paradoxical Swap T3 changed from 10% Current Health to 10% Max Health Paradoxical Swap can now be alt casted to swap only a single target with the T3 Pulse Grenade does half damage to objectives Pocket Barrage projectile speed increased by 15% Barrage now lets you use stamina during the ability Barrage now lets you use Flying Cloak during the ability Barrage T1 increased from +12.6 Damage Per Projectile to +16 Barrage T2 cooldown increased from -14s to -16s Barrage T3 increased from +2m Radius to +3m Flying Cloak cooldown reduced from 32s to 26s Flying Cloak damage reduced from 70 to 60 Flying Cloak duration increased from 3.4s to 3.8s (travels slower, same total distance) Flying Cloak T1 changed from "-14s Cooldown" to "+70 Damage" Flying Cloak T2 changed from "+76 Damage" to "+5 Weapon Damage upon cast for 8s" Flying Cloak T3 changed from "+7 Weapon Damage after teleporting for 10s" to "+1.6s Travel Time and -14s Cooldown" Enchanter\'s Satchel spirit scaling increased from 0.61 to 0.9 Enchanter\'s Satchel T3 now also reduces movement speed by 40% Enchanter\'s Satchel T3 Fire Rate slow increased from 35% to 40% Enchanter\'s Satchel T3 Escape duration increased from +0.5s to +1.5s Enchanter\'s Satchel T3 now also increases radius by 4m Affliction no longer applies 12% Current Health Damage Affliction DPS increased from 28 to 32 Affliction spirit scaling increased from 0.17 to 0.2 Affliction cooldown increased from 140s to 150s Affliction T1 increased from -25s Cooldown to -40s Cooldown Affliction T2 no longer reduces healing by 40% Affliction T2 now also increases radius by 4m Affliction T3 no longer increases radius by 6m Affliction T3 now prevents all healing on targets Affliction T3 increases spirit scaling by +0.1 Affliction duration reduced from 12s to 11s (overall total damage is reduced slightly) Affliction DPS increased from 32+0.2 to 34+0.22 Affliction T2 duration reduced from +4s to +3s Affliction T3 DPS increased from 16+0.1 to 18+0.11 Rem Lil Helpers trooper base healing changed from 10/s to 8/s. The delay between heals has been reduced so the frequency of healing is more constant. (overall reduction) Lil Helpers trooper healing spirit scaling increased from 0.125 to 0.14 Naptime sleep move speed reduced from 2m/s to 1.5m/s Naptime sleep duration decreased from 4.25s to 4s Naptime radius decreased from 20m to 17.0m Naptime T2 changed from "unstoppable and -35% Damage resist while channeling" to "+0.5s Sleep Duration and +3m Radius" Naptime T3 now also grants +50% damage resist while channeling Seven Move Speed no longer scales with spirit power Sprint speed increased from 0.6m to 1.8m Lightning Ball slows down less vs non-heroes (previously was 2m/s for all, now 3.5m/s for non-heroes) Lightning Ball fixed now doing damage if another ball was already hitting a target Lightning Ball T2 now also increases lifetime by 1s Static Charge damage reduced from 38 to 35 Static Charge cast range reduced from 16m to 15m Static Charge cast range no longer increases with spirit power Static Charge T1 increased from -19s Cooldown to -20s Static Charge T2 now also increases cast range by +5m Static Charge T3 now also increases damage by +160 Power Surge duration no longer scales with spirit power Power Surge cooldown increased from 48s to 50s Power Surge max jumps increased from 3 to 4 Power Surge T1 increased from -15s to -18s Power Surge T2 changed from "-10% Spirit Resist for 6s" to "+3m Move Speed, +8 Damage and increased Spirit Scaling (+0.23)" Power Surge T3 changed from "+11 Shock Damage, scaling and +3 max jumps" to "-15% Spirit Resist for 8s and +12s Duration" Storm Cloud allows movement in the base ability (1.5m) Storm Cloud bullet resistance reduced from 20% to 0% Storm Cloud T1 bullet resist increased from 35% to 55% Storm Cloud T3 increases move speed by +3m (was +3.8m before) Lightning Ball charge time reduced from 8s to 7s Storm Cloud T3 increases speed from +3m to +4m Shiv Stamina reduced from 3 to 2 Stamina movement speed reduced from 6.7 to 6.5 Bullet damage growth increased from 0.154 to 0.165 Serrated Knives no longer has impact damage Serrated Knives Bleed DPS per knife increased from 4 to 10 Serrated Knives Bleed DPS spirit scaling increased from 0.13 to 0.15 Serrated Knives T1 changed from "+1 Charge" to "+2s Duration" Serrated Knives T2 changed from "+2s Duration" to "+2 Charges" Serrated Knives T3 no longer has +30 Impact Damage Serrated Knives T3 DPS increased from +5.5 to +12 Serrated Knives T3 increases spirit scaling by +0.10 Slice and Dice cooldown increased from 15s to 16s Slice and Dice Impact damage reduced from 75 to 60 Slice and Dice reduces Spirit Resistance by 6% for 16s. Multiple instances stack. Slice and Dice T1 increased from -3s Cooldown to -6s Cooldown Slice and Dice T2 changed from "+50 Impact Damage" to "-8% Spirit Resistance and +2m Dash Range" Slice and Dice T3 now also grants +50 Impact Damage Killing Blow is no longer unit targeted, you jump in the direction forward with some small control Killing Blow Damage Amp reduced from 15% to 14% Killing Blow T2 changed from "+5% Enemy Health Threshold and +6% Damage Amp" to "+8% Damage Amp" Killing Blow T3 now grants you 20s to recast the ultimate, rather than removing the cooldown Killing Blow T3 now also increases enemy health threshold by +5% Alt fire knockback increased by 10% Serrated Knives cooldown increased from 16s to 18s Killing Blow range increased from 13m to 18m Killing Blow travel speed increased a bit Stamina increased from 2 to 3 Stamina cooldown increased from 4.5s to 5.5s Bloodletting no longer interrupts sliding when cast Bloodletting is now affected by healing modifiers Fixed a bug with Killing Blow T3 causing the cooldown to be delayed if you failed to execute during the allowed window Killing Blow now continues forward (and dealing damage) until it reaches a target it can kill or runs out of range Silver Mauling Leap damage scaling reduced from 1.9 to 1.5 Fixed Tail Whack being considered a movement ability Tail Whack disarm duration reduced from 2.5s to 2s Tail Whack slow duration increased from 1.5s to 2s Tail Whack T3 changed from "+1s Disarm Duration" to "1.5s Debuff Duration" Lycan Curse cooldown increased from 35s to 50s Lycan Curse base health bonus reduced from 100 to 75 Lycan Curse no longer grants +14% Bullet and Spirit Resistance Lycan Curse no longer grants +2m Move Speed Lycan Curse T1 resist increased from +14% to +15% Lycan Curse T2 bonus health increased from 125 to 150 Lycan Curse base health bonus increased from +75 to +125 Lycan Curse T2 increased from +3m to +4m Lycan Curse cooldown reduced from 50s to 40s Lycan Curse T1 increased from 15% Resists to 18% Slam Fire Weapon Accuracy reduced from -25% to -30% Go For The Throat, Boot Kick and Mauling Leap now benefit from range increases Boot Kick now uses a break-off angle when grounded, allowing upward movement if looking up enough Tail Whack spirit scaling increased from 1 to 1.5 Lycan Curse now grants 1.5m Move Speed Lycan Curse T1 increased from +18% Resists to +20% Lycan Curse T2 increased from +150 Bonus Health to +200 Lycan Curse T3 now has a 1.5s buffer for kill credit Victor Bullet damage increased from 12.3 to 12.5 Pain Battery now starts charged Pain Battery range increased from 20m to 28m Pain Battery reduced randomness on the projectile paths Pain Battery bolt count from 5 to 7 Pain Battery T2 increased from +36 to +50 Pain Battery T3 now also increases spirit scaling by +0.6 Jumpstart cooldown increased from 23s to 30s Jumpstart Move Speed reduced from 4m to 3m Jumpstart spirit scaling reduced from 1.8 to 1.2 Jumpstart T1 increased from +1.5m to +3m Move Speed Jumpstart T2 now also reduces cooldown by -8s Jumpstart T3 now also provides +1 Charge Jumpstart T3 no longer reduces cooldown Jumpstart T3 now also increases spirit scaling by 0.8 Aura of Suffering time to max DPS reduced from 10s to 6s Aura of Suffering radius increased from 7.7m to 10m Aura of Suffering toggle cooldown reduced from 2.5s to 2s Aura of Suffering Min DPS reduced from 16 to 12 Aura of Suffering Min DPS spirit scaling reduced from 0.18 to 0.135 Aura of Suffering Max DPS reduced from 70 to 54 Aura of Suffering Max DPS spirit scaling reduced from 0.9 to 0.67 Aura of Suffering T2 Min/Max DPS reduced from 8/36 to 6/26 Aura of Suffering Text Progress bar indicates time to Max DPS Aura of Suffering T3 reduced from +13% Damage to +15% Shocking Reanimation radius reduced from 13m to 12m Shocking Reanimation rebirth health reduced from 60% to 50% Shocking Reanimation T1 changed from "+3m Radius and +90 Damage" to "While on Cooldown: +15% Fire Rate and +6 Spirit Damage Per Bullet (0.06 scaling)" Shocking Reanimation T2 rebirth health increased from 40% to 50% Shocking Reanimation T3 changed from "While on Cooldown: +18% Fire Rate and +9 Spirit Damage Per Bullet (0.06 scaling)" to "+6m Radius, +1s Stun and -50s Cooldown" Pain Battery T3 reduced from 18% Missing Health to 15% Jumpstart T3 spirit scaling reduced from 0.8 to 0.6 Aura of Suffering can now be activated on the zipline Aura of Suffering radius reduced from 10m to 9.5m Aura of Suffering Base and T2 Max DPS and scaling reduced by 10% Shocking Reanimation cooldown increased from 190s to 210s Shocking Reanimation T3 increased from -50s Cooldown to -70s Health per boon increased from 46 to 50 Now has 30% less effectiveness from lifesteal (Lifesteal Effectiveness stat added to Vitality tooltip) Shocking Reanimation radius increased from 12m to 18m Shocking Reanimation cooldown increased from 210s to 230s Shocking Reanimation T3 no longer increases radius by 6m Shocking Reanimation T3 cooldown from -70s to -100s Shocking Reanimation T3 now also deals +150 Damage Vindicta Fire Rate no longer scales with Spirit Power Bullet damage now scales with spirit power (0.022) Bullet Velocity increased from 557 to 660 Stake damage reduced from 55 to 40 Stake damage spirit scaling increased from 0.37 to 0.5 Stake projectile speed increased from 20m/s to 25m/s Stake T1 changed from "-35% Fire Rate" to "+65 Damage" Stake T3 Tether Duration increased from +0.5s to +0.75s Stake T3 capture radius increased from +1m to +2m Flight now allows you to use melee Flight now allows parry to be used Flight now grants you +50% Item Cast Range Flight spirit damage scaling reduced from 0.22 to 0.18 Flight duration reduced from 15s to 13s Flight T2 duration increased from +8s to +10s Flight T3 Spirit Damage Per Bullet reduced from 12.6 to 10 Flight T3 now increases spirit scaling by 0.1 Flight T3 now also refreshes duration on hero kill Crow Familiar now releases a swarm of crows in a cone forward, hitting all enemies along the path Crow Familiar debuff duration no longer scales with spirit power Crow Familiar debuff duration increased from 4s to 5s Crow Familiar bleed damage reduced from 2.7% to 2.2% Crow Familiar damage increased from 37 to 40 Crow Familiar T1 changed from "Ricochet up to 2 times" to "Reduces healing by -35%" Crow Familiar T2 now also increase bleed damage by +0.5% Crow Familiar T3 now also increases debuff duration by 2s Assassinate while scoped no longer un-scopes when using items Assassinate now has a 4s buffer on impact for bonus credit Assassinate while scoped now plays a sound for you when the it is fully charged Assassinate weapon damage bonus increased from 5% to 6% Fixed not gaining bonus damage if a proc bonus was the killing blow Viscous Splatter bounces once by default Splatter cooldown reduced from 30s to 26 Splatter spirit scaling reduced from 1.77 to 0.8 Splatter ground effect now increases slide distance by 60% for you and your allies Splatter multiple hit damage value reduced from 50% to 50/38/26% Splatter T1 radius increased from +1m to +2m Splatter T2 cooldown increased from -12s to -14s Splatter T3 spirit scaling increased from +0.4 to +1.3 Splatter T3 still adds 2 bounces The Cube now has a very brief period where allies cannot cancel to prevent accidental cancels The Cube healing spirit scaling increased from 0.14 to 0.3 The Cube T3 increased from -21s Cooldown to -25s Puddle Punch now grants +30% Air Control when affecting yourself or allies Puddle Punch Charge Time increased from 1.5s to 1.7s Puddle Punch Slow increased from 15% to 20% Puddle Punch now acts as if its close range with respect to item procs (like Point Blank) Puddle Punch radius reduced from 4.5m to 4m Puddle Punch T2 changed from "+27 Damage and -15% Move Slow" to "+1.5m Radius and +30 Damage" Goo Ball no longer can carry Urn Goo Ball turn rate improved a bit Goo Ball can now use abilities and items (rather than being locked behind T3) Goo Ball cooldown increased from 115s to 130s Goo Ball duration increased from 9s to 10s Goo Ball Bullet and Spirit resist reduced from 60% to 35% Goo Ball T1 changed from "+5s Duration" to "-30s Cooldown" Goo Ball T2 reduced from +72 Damage to +70 Goo Ball T3 changed from "Can now use abilities and items" to "+6s duration and +0.3s Stun Duration" Splatter T3 spirit scaling reduced from 1.3 to 1.1 Puddle Punch scaling reduced from 1.1 to 1.0 Fixed Puddle Punch T3 giving an extra +60 melee damage (released a couple days ago) Puddle Punch scaling reduced from 1 to 0.8 Puddle Punch scaling reduced from 0.8 to 0.6 Puddle Punch now has +20 bonus damage Puddle Punch wind up time increased from 0.15s to 0.2s Puddle Punch displacement duration reduced from 0.8s to 0.6s Goo Ball stun duration reduced from 0.7s to 0.5s Goo Ball lockout period from being affected again increased from 1.25s to 1.35s Goo Ball duration increased from 10s to 11s Warden Bullet growth per boon reduced from 0.44 to 0.38 Alchemical Flask Weapon Damage reduction reduced from -30% to -25% Alchemical Flask T2 damage increased from +36 to +40 Alchemical Flask T2 now also increases Weapon Damage Reduction by -20% Alchemical Flask T2 no longer increases radius by 1m Alchemical Flask T3 cooldown increased from -6.5s to -7s Alchemical Flask T3 now also increases radius by 2m Willpower duration reduced from 7s to 5s Willpower cooldown reduced from 42s to 40 Willpower barrier now scales with spirit power in the base ability (+0.5) Willpower T2 cooldown from -19s to -22s Willpower T2 now also increases duration by +2s Willpower T3 changed from "+150 Barrier Health and improved scaling (3.7)" to "+40% Debuff Resistance and improved scaling (2.5)" Binding Word cast range reduced from 20m to 15m Binding Word cooldown decreased from 37s to 34s Binding Word T1 changed from "+1s Immobilize Duration" to "+20% Bullet Damage to Trapped heroes for 5s" Binding Word T2 changed from "-19s Cooldown" to "+0.75s Duration and +12m Cast Range" Binding Word T2 now increases trap duration by 0.75s Binding Word T3 changed from "+20% Bullet Damage" to "-18s Cooldown and Silences enemies until they escape or are trapped" Last Stand Channeling bullet and spirit resist increased from 30% to 60% Last Stand radius reduced from 13m to 12m Last Stand T1 increased from +3m Radius to +4m Last Stand T3 no longer grants +50% Bullet and Spirit Resist Last Stand T3 duration increased from +2.5s to +3s Last Stand T3 now also grants you Unstoppable while channeling Last Stand Bullet and Spirit Resist while channeling reduced from 60% to 50% Last Stand T3 now also increases Bullet and Spirit Resist while channeling by +30% Wraith Card Trick cards now have specific suites with special bonuses. Card Trick base charge count increased from 1 to 2 Card Trick base damage reduced from 60 to 45 Card Trick spirit scaling reduced from 1.0 to 0.55 Card Trick buildup now takes 20% longer Card Trick cooldown reduced from 0.75s to 0.5s Card Trick post cast time reduced from 0.2s to 0.1 Card Trick now highlights the card that will be throw next. Card Trick now has unique sounds for each card suite that is summoned. Card Trick T1 increased from "+1 Charges" to "+2 Charges" Card Trick T2 changed from "+35 Damage" to "+40 Damage and increased spirit scaling (+0.4)" Card Trick T2 changed from "+50% Card Summon Rate and 30% slow for 1s" to "Improves Card Suites and increased joker chances" (new totals are Spades: 2.5x, Diamond: -13%, Heal: 150/2.0, Clubs: 50%, Joker: 1/5th chance) Fixed Project Mind interaction with stuns Full Auto no longer affects allies (previously gave half fire rate to allies) Full Auto duration no longer scales with Spirit Power Full Auto cooldown reduced from 48s to 45s Full Auto base ability now deals +2 Spirit Damage Per Bullet (0.03 Spirit Scaling) Full Auto T1 increased from -14s Cooldown to -20s Full Auto T2 changed from "2.52 Spirit Damage per Bullet" to "+10% Fire Rate and +3s Duration" Full Auto T3 changed from "+15% Bullet and Spirit Lifesteal and increased spirit scaling" to "Unlimited Ammo and increased spirit scaling (+0.06)" Telekinesis cooldown increased from 110s to 120s Telekinesis cast range reduced from 20m to 14m Telekinesis cast time increased from 0.1s to 0.3s Telekinesis no longer has a projectile, it now instantly lifts the target for 0.75s and gives you a location target on the ground. After the 0.75s is over, it\'ll throw the hero towards that location up to 15m away. The target will take 100 Damage, 40% move slow and prevent stamina/movement-item and ability usage for 3s. Telekinesis T1 changed from "-25s Cooldown" to "+100 Damage" Telekinesis T2 changed from "+0.75s Silence and Disarm Duration" to "-50s Cooldown" Telekinesis T3 changed from "Bounces to nearby target" to "+1.5s Debuff duration and +6m Throw and Cast Range Card Trick Spade reduced from +70% to +60% Card Trick Heart scaling reduced from 1.25 to 1.0 Card Trick T3 Heart scaling increased from 0.5 to 0.75 Fixed Card Trick Heart heal doing full value for non-heroes (instead of half) Telekinesis debuff duration reduced from 3s to 2.75s Card Trick cooldown increased from 0.5s to 0.6s Card Trick Joker no longer bounces to other targets Card Trick gaining charges (AP or shop) no longer automatically builds them up Card Trick can now be alt casted to fire from the inverse order Card Trick T3 Spade bonus reduced from +50% to +40% Card Trick T3 Heart healing scale reduced from +0.75 to +0.5 Telekinesis cast range reduced from 14m to 13m Telekinesis throw range reduced from 14m to 13m Telekinesis cast delay increased from 0.3s to 0.35s Card Trick heart now only heals for half the amount for secondary targets in the area Card Trick now randomly pulls cards out of a 2 deck stack (lowers overall variance. Gets a new 2 deck stack after that is depleted) Project Mind cooldown increased from 42s to 46s Project Mind T3 cooldown increased from -28s to -32s Full Auto T3 now interrupts/finishes an ongoing reload Telekinesis cast time increased from 0.35s to 0.45s Telekinesis debuff duration reduced from 2.75s to 2.25s Telekinesis cast range reduced from 13m to 10m Telekinesis cooldown increased from 120s to 130s Yamato Power Slash being held down no longer automatically fires it You can now cast Parry directly while channeling Power Slash to fire the Power Slash and parry Power Slash base ability now has +60% Bullet Resist while channeling Power Slash cooldown increased from 10.5s to 12s Power Slash Slash Length reduced from 25m to 22m Power Slash T1 changed from "+60% Bullet Resist while channeling" to "40% Slow for 3s" Power Slash T2 changed from "-2s Cooldown and 40% slow for 3s" to "-4s Cooldown" Power Slash T3 now also grants +8m Range Flying Strike renamed to Flying Slash Flying Slash is now light melee damage rather than spirit Flying Slash slow increased from -30% to -50% Flying Slash cooldown increased from 21s to 36s Flying Slash range increased from 20m to 25m Flying Slash T1 changed from "25% Slow" to "-18s Cooldown" Flying Slash T2 changed from "+20m Cast Range" to "+20m Cast Range and gain +40 Spirit for 6s" Flying Slash T3 changed from "Can Grapple to ally heroes and +6 Weapon Damage for 10s" to "Can Grapple to ally heroes. Becomes Charged and grants +2 charges (3s between charges)." Fixed Flying Slash T3 ally cast stopping too soon before reaching the player Crimson Slash cooldown increased from 15s to 16s Crimson Slash Fire Rate reduction increased from -18% to -30% Crimson Slash T1 changed from "-26% Fire Rate" to "On Hit: +30% Melee Damage for 4s" Crimson Slash T3 increased from -9s Cooldown to -10s Crimson Slash T3 now also increases spirit scaling (+0.6) Shadow Transformation cooldown increased from 110s to 130s Shadow Transformation Bullet and Spirit Resist reduced from 40% to 30% Shadow Transformation T1 changed from "+14% Fire Rate" to "+5 Weapon Damage" Shadow Transformation T2 now also reduces cooldown by 25s Shadow Transformation T3 increased from +20% Bullet and Spirit Resist to +30% Fixed Flying Strike triggering heavy melee procs rather than light melee (damage amount was light melee still) Extended Magazine Weapon Damage increased from +6% to +8% High-Velocity Rounds No longer grants +5% Fire Rate Now grants +8% Weapon Damage Bullet Velocity increased from +50% to +60% (these changes affect upgrades) Long Range Fall-off Range increased from +4% to +8% Active Reload You can now reload while already full when carrying this item Opening Rounds Spirit Power increased from +8 to +10 Weapon Damage increased from +40% to +45% Swift Striker Fire Rate increased from 18% to 20% Mystic Shot Damage spirit scaling increased from 0.8 to 1.0 Split Shot Cooldown reduced from 32s to 24s Now supports custom count and angles per hero Enabled for Celeste (3 at 70 degrees) Stalker No longer procs based on angles of attack, but instead based on doing bullet or melee damage within 8m of a hero target No longer has a proximity requirement for the overtime bonuses (beyond the 8m proc proximity) Melee Charge Heavy Melee Bonus damage now works with heavy melee abilities Spirit Shredder Bullets Spirit Lifesteal increased from 8% to 12% Weakening Headshot Bonus health increased from +50 to +60 Ballistic Enchantment Weapon damage per stack increased from 18% to 20% Range reduced from 30% to 25% Non-hero weapon damage increased from 4% to 5% Ability Range reduced from 25% to 20% Hunter\'s Aura Solo hero multiplier reduced from 3x to 2x Bullet Resist Reduction increased from -8% to -10% Fire Rate Reduction increased from -11% to -14% Weighted Shots Now builds from Slowing Bullets. Has Slowing Bullets passive No longer grants +16% Spirit Resist Now grants -0.5m Move Speed No longer grants -30% Bullet Velocity Debuff Resist increased from 16% to 18% Weapon Damage increased from 35% to 40% Stamina Reduction reduced from -20% to -14% Debuff Resist increased from 18% to 20% Express Shot Ammo consumed changed from -30% to 2 Ammo Blood Tribute No longer has healing reduction Self damage increased from 40 to 50 Spirit Resist reduced from 10% to 8% Spirit Rend Cooldown reduced from 2.2s to 2s Spirit Lifesteal increased from 8% to 12% Crushing Fists Heavy Melee Bonus damage now works with heavy melee abilities Frenzy Base Fire Rate increased from 8% to 10% Base Spirit Resist increased from 10% to 15% Conditional Fire Rate reduced from 28% to 25% Conditional Spirit Resist reduced from 30% to 20% Spiritual Overflow Spirit Power increased from 30 to 40 Now grants +20% Duration instead of +12% CD Reduction Extra Health Increased from 185 to 210 Enduring Speed Fixed slow resistance interaction with dash slows Restorative Locket Range increased from 30m to 35m Max stamina regen increased from 3 to 4 Now always restores at least 1 stamina Spirit Resist increased from 8% to 10% Return Fire Returning damage now always hits the target\'s body (some amount would naturally miss before, and some would be headshots) Bullet Damage Returned reduced from 60% to 50% Weapon Shielding Damage threshold increased from 150 to 250 Cooldown reduced from 45s to 35s Bullet Resilience Low Health threshold increased from 40% to 50% Low Health resistance reduced from 22% to 15% Spirit Resilience Low Health threshold increased from 40% to 50% Low Health resistance reduced from 22% to 15% Lifestrike Heal on melee hit reduced from 160 to 100 + 1.5/boon Heal on melee hit percentage reduced from 50% to 30% + 0.5%/boon Majestic Leap Barrier increased from 140 to 200 Trophy Collector Souls per minute increased from 22 to 25 Dispel Magic Cooldown reduced from 50s to 40s Fortitude Time to regen reduced from 13s to 10s Spellbreaker High instant damage reduction reduced from -75% to -65% Diviner\'s Kevlar Cooldown reduced from 64s to 40s Inhibitor Damage Penalty reduced from -35% to -30% Weapon Damage bonus increased from +22% to +25% Cheat Death No longer reduces movement speed by -2m during the death immunity phase Colossus Active now grants you an additional +30% Melee Damage Siphon Bullets Now steals 2.5% of enemy max HP per bullet instead of a fixed amount Mystic Regeneration Health bonus increased from +40 to +50 Duration increased from 5s to 6s Rusted Barrel Cooldown reduced from 20s to 16s Arcane Surge Spirit Power increased from +15 to +20 Ability Range reduced from 15% to 12% Slowing Hex Now sets the gravity of an enemy to a fixed +20% (heavier) regardless of their own base values Projectile speed increased from 53m/s to 80m/s Cooldown reduced from 30s to 27s Suppressor Debuff duration increased from 4s to 5s Spirit Sap Spirit Power loss increased from -24 to -30 Cooldown reduced from 32s to 18s Decay Healing Reduction increased from -45% to -50% Silence Wave Damage spirit scaling increased from 0.6 to 1.0 Cooldown reduced from 35s to 30s Knockdown Gravity increased from +50% to +100% when the stun hits the target (causes airborne targets to fall faster) Ability Range reduced from +6% to +5% Radiant Regeneration Health bonus increased from +65 to +90 Duration increased from 5s to 6s Healing on Ability Cast boon scaling increased from 1.5 to 2.0 Tankbuster Current Health Bonus Damage increased from 7.5% to 8% Torment Pulse Damage spirit scaling reduced from 0.28 to 0.25 No longer hits sleeping enemies to avoid waking them up Pulse Damage reduced from 27+0.25 to 25+0.23 Disarming Hex Cooldown reduced from 20s to 16s Magic Carpet Duration increased from 8s to 12s Bonus health increased from 75 to 125 Ethereal Shift Cooldown reduced from 45s to 35s Cursed Relic Damage penalty increased from -8% to -10% Vortex Web Now has a unit target option where it will vacuum enemies around that target Will now only unit target when used with alt cast Ability Range reduced from +10% to +8% Golden Goose Egg souls per buff improved from every 200 souls to every 150 Now has a 2 second channel to hatch Greater Expansion Ability Range reduced from 35% to 30% Guardian Ward Ability Range reduced from 10% to 8% Cultist Sacrifice Ability Range reduced from +15% to +12% Healing Nova Ability Range reduced from +6% to +5% Rescue Beam Ability Range reduced from +8% to +6% Divine Barrier Ability Range reduced from +15% to +10% Echo Shard No longer grants +5% Ability Range Spirit Burn Ability Range reduced from +8% to +6% Burst Fire Duration increased from 3.5s to 4.5s Cooldown increased from 7s to 9s Enchanter\'s Emblem Spirit Resist increased from 15% to 18% Metal Skin Bullet Resist reduced from 15% to 12% Counterspell Bonus Health reduced from 100 to 75 Boundless Spirit Constant spirit bonus reduced from 35 to 30 Unstable Concoction Now grants you unstoppable during the pre explosion state Radius increased from 18m to 22m Shadow Strike Stamina increased from +2 to +3 Now grants +350 Health DPS increased from 75 to 125 DPS spirit scaling increased from 0.2 to 0.4 Invis duration increased from 2.5s to 3s Electric Slippers Damage radius increased from 8m to 12m Slide Fire Rate increased from 50% to 60% Nullification Burst Radius increased from 12m to 20m Now grants +40% Debuff Resistance Celestial Blessing Cooldown reduced from 50s to 30s Heal increased from up to 50% of your HP to 60% Heal min increased from 300 to 400 Seraphim Wings In Air Damage Reduction increased from -40% to -60% Additional air dash/jump increased from +1 to unlimited Cloak of Opportunity Barrier increased from 300 to 500 Cooldown reduced from 14s to 12s Infinite Rounds Fire Rate increased from 30% to 35% Mystical Piano Radius increased from 11m to 12m Shrink Ray Now grants +20% Fire Rate while shrunk',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-02-20',
			to: '2026-03-06'
		},
		after: {
			from: '2026-03-07',
			to: '2026-03-21'
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
		title: 'Siphon Life DPS',
		id: 'siphon-life-dps'
	},
	{
		level: 3,
		title: 'Siphon Life',
		id: 'siphon-life'
	},
	{
		level: 3,
		title: 'Siphon Life DPS',
		id: 'siphon-life-dps-1'
	},
	{
		level: 3,
		title: 'Siphon Life',
		id: 'siphon-life-1'
	},
	{
		level: 3,
		title: 'Shoulder Charge',
		id: 'shoulder-charge'
	},
	{
		level: 3,
		title: 'Should Charge',
		id: 'should-charge'
	},
	{
		level: 3,
		title: 'Shoulder Charge',
		id: 'shoulder-charge-1'
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
		level: 3,
		title: 'Siphon Life',
		id: 'siphon-life-2'
	},
	{
		level: 3,
		title: 'Infernal Resilience',
		id: 'infernal-resilience-1'
	},
	{
		level: 3,
		title: 'Seismic Impact',
		id: 'seismic-impact-1'
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
		level: 3,
		title: 'Flawless Advance',
		id: 'flawless-advance-1'
	},
	{
		level: 3,
		title: 'Riposte',
		id: 'riposte-1'
	},
	{
		level: 2,
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Grapple Arm',
		id: 'grapple-arm'
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
		level: 3,
		title: 'Blasted',
		id: 'blasted'
	},
	{
		level: 3,
		title: 'Chain Gang',
		id: 'chain-gang'
	},
	{
		level: 3,
		title: 'Rising Ram',
		id: 'rising-ram-1'
	},
	{
		level: 2,
		title: 'Calico',
		id: 'calico'
	},
	{
		level: 3,
		title: 'Bullets',
		id: 'bullets'
	},
	{
		level: 3,
		title: 'Gloom Bombs',
		id: 'gloom-bombs'
	},
	{
		level: 3,
		title: 'Leaping Slash',
		id: 'leaping-slash'
	},
	{
		level: 3,
		title: 'Ava',
		id: 'ava'
	},
	{
		level: 3,
		title: 'Return To Shadows',
		id: 'return-to-shadows'
	},
	{
		level: 3,
		title: 'Return to Shadows',
		id: 'return-to-shadows-1'
	},
	{
		level: 3,
		title: 'Gloom Bombs',
		id: 'gloom-bombs-1'
	},
	{
		level: 3,
		title: 'Leaping Slash',
		id: 'leaping-slash-1'
	},
	{
		level: 3,
		title: 'Ava',
		id: 'ava-1'
	},
	{
		level: 3,
		title: 'Return to Shadows',
		id: 'return-to-shadows-2'
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
		level: 3,
		title: 'Light Eater',
		id: 'light-eater'
	},
	{
		level: 3,
		title: 'Dazzling Trick',
		id: 'dazzling-trick'
	},
	{
		level: 3,
		title: 'Shining Wonder',
		id: 'shining-wonder-1'
	},
	{
		level: 3,
		title: 'Light Eater',
		id: 'light-eater-1'
	},
	{
		level: 3,
		title: 'Dazzling Trick',
		id: 'dazzling-trick-1'
	},
	{
		level: 3,
		title: 'Radiant Daggers',
		id: 'radiant-daggers'
	},
	{
		level: 3,
		title: 'Shining Wonder',
		id: 'shining-wonder-2'
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
		level: 3,
		title: 'Hotel Guest',
		id: 'hotel-guest'
	},
	{
		level: 3,
		title: 'Call Bell',
		id: 'call-bell-1'
	},
	{
		level: 3,
		title: 'Doorway',
		id: 'doorway-1'
	},
	{
		level: 3,
		title: 'Luggage Cart',
		id: 'luggage-cart-1'
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
		title: "Stalker's Mark",
		id: 'stalker-s-mark'
	},
	{
		level: 3,
		title: 'Bloodscent',
		id: 'bloodscent'
	},
	{
		level: 3,
		title: 'Eternal Night',
		id: 'eternal-night'
	},
	{
		level: 3,
		title: 'Eternal Night Sprint',
		id: 'eternal-night-sprint'
	},
	{
		level: 3,
		title: 'Eternal Night',
		id: 'eternal-night-1'
	},
	{
		level: 3,
		title: 'Rend',
		id: 'rend-1'
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
		level: 3,
		title: 'Rejuvenating Aurora',
		id: 'rejuvenating-aurora'
	},
	{
		level: 3,
		title: 'Singularity',
		id: 'singularity'
	},
	{
		level: 3,
		title: 'Singularity DPS',
		id: 'singularity-dps'
	},
	{
		level: 3,
		title: 'Singularity',
		id: 'singularity-1'
	},
	{
		level: 3,
		title: 'Kinetic Pulse',
		id: 'kinetic-pulse-1'
	},
	{
		level: 3,
		title: 'Quantum Entanglement',
		id: 'quantum-entanglement-1'
	},
	{
		level: 3,
		title: 'Singularity',
		id: 'singularity-2'
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
		title: 'Grasping Hands Immobilize',
		id: 'grasping-hands-immobilize'
	},
	{
		level: 3,
		title: 'Grasping Hands',
		id: 'grasping-hands-1'
	},
	{
		level: 3,
		title: 'Jar of Dead',
		id: 'jar-of-dead'
	},
	{
		level: 3,
		title: 'Grasping Hands',
		id: 'grasping-hands-2'
	},
	{
		level: 3,
		title: 'Essence Theft',
		id: 'essence-theft'
	},
	{
		level: 3,
		title: 'Borrowed Decree',
		id: 'borrowed-decree'
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
		title: 'Sleep Dagger Wake Up',
		id: 'sleep-dagger-wake-up'
	},
	{
		level: 3,
		title: 'Sleep Dagger',
		id: 'sleep-dagger-1'
	},
	{
		level: 3,
		title: 'Sleep Dagger Sleep',
		id: 'sleep-dagger-sleep'
	},
	{
		level: 3,
		title: 'Sleep Dagger',
		id: 'sleep-dagger-2'
	},
	{
		level: 3,
		title: 'Smoke Bomb',
		id: 'smoke-bomb'
	},
	{
		level: 3,
		title: 'Fixation',
		id: 'fixation'
	},
	{
		level: 3,
		title: 'Bullet Dance',
		id: 'bullet-dance'
	},
	{
		level: 2,
		title: 'Infernus',
		id: 'infernus'
	},
	{
		level: 3,
		title: 'Napalm',
		id: 'napalm'
	},
	{
		level: 3,
		title: 'Flame Dash DPS',
		id: 'flame-dash-dps'
	},
	{
		level: 3,
		title: 'Flame Dash',
		id: 'flame-dash'
	},
	{
		level: 3,
		title: 'Afterburn',
		id: 'afterburn'
	},
	{
		level: 3,
		title: 'Concussive Combustion',
		id: 'concussive-combustion'
	},
	{
		level: 3,
		title: 'Flame Dash',
		id: 'flame-dash-1'
	},
	{
		level: 3,
		title: 'Concussive Combustion',
		id: 'concussive-combustion-1'
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
		title: 'Entangling Thorns Recharge Time',
		id: 'entangling-thorns-recharge-time'
	},
	{
		level: 3,
		title: 'Entangling Thorns',
		id: 'entangling-thorns-1'
	},
	{
		level: 3,
		title: 'Kudzu Connection',
		id: 'kudzu-connection'
	},
	{
		level: 3,
		title: 'Kudzu Connection Fire Rate',
		id: 'kudzu-connection-fire-rate'
	},
	{
		level: 3,
		title: 'Kudzu Connection Bullet Lifesteal',
		id: 'kudzu-connection-bullet-lifesteal'
	},
	{
		level: 3,
		title: 'Kudzu Connection',
		id: 'kudzu-connection-1'
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
		level: 3,
		title: 'Air Drop Cooldown',
		id: 'air-drop-cooldown'
	},
	{
		level: 3,
		title: 'Air Drop',
		id: 'air-drop-1'
	},
	{
		level: 3,
		title: 'Entangling Thorns',
		id: 'entangling-thorns-2'
	},
	{
		level: 3,
		title: 'Kudzu Connection',
		id: 'kudzu-connection-2'
	},
	{
		level: 3,
		title: 'Air Drop',
		id: 'air-drop-2'
	},
	{
		level: 3,
		title: 'Stone Form',
		id: 'stone-form-1'
	},
	{
		level: 3,
		title: 'Air Drop',
		id: 'air-drop-3'
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
		title: 'Arctic Beam',
		id: 'arctic-beam'
	},
	{
		level: 3,
		title: 'Arctic Beam Max Fire Rate Reduction',
		id: 'arctic-beam-max-fire-rate-reduction'
	},
	{
		level: 3,
		title: 'Arctic Beam Max Slow',
		id: 'arctic-beam-max-slow'
	},
	{
		level: 3,
		title: 'Arctic Beam',
		id: 'arctic-beam-1'
	},
	{
		level: 3,
		title: 'Frozen Shelter',
		id: 'frozen-shelter'
	},
	{
		level: 3,
		title: 'Frost Grenade',
		id: 'frost-grenade-1'
	},
	{
		level: 3,
		title: 'Ice Path',
		id: 'ice-path-1'
	},
	{
		level: 3,
		title: 'Frozen Shelter',
		id: 'frozen-shelter-1'
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
		level: 3,
		title: 'Soul Exchange',
		id: 'soul-exchange'
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
		level: 3,
		title: 'Flog',
		id: 'flog'
	},
	{
		level: 3,
		title: 'Flog Attack Angle',
		id: 'flog-attack-angle'
	},
	{
		level: 3,
		title: 'Flog',
		id: 'flog-1'
	},
	{
		level: 3,
		title: 'Death Slam',
		id: 'death-slam'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 3,
		title: 'Mini Turrets',
		id: 'mini-turrets'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret-1'
	},
	{
		level: 3,
		title: 'Medicinal Specter',
		id: 'medicinal-specter'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 3,
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret-2'
	},
	{
		level: 3,
		title: 'Medicinal Specter',
		id: 'medicinal-specter-1'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall-1'
	},
	{
		level: 3,
		title: 'Heavy Barrage',
		id: 'heavy-barrage-1'
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
		title: 'Love Bites Cooldown',
		id: 'love-bites-cooldown'
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
		level: 3,
		title: 'Rake',
		id: 'rake-1'
	},
	{
		level: 3,
		title: 'Can',
		id: 'can'
	},
	{
		level: 3,
		title: 'Nox Nostra',
		id: 'nox-nostra-1'
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
		level: 3,
		title: 'Traveler',
		id: 'traveler'
	},
	{
		level: 3,
		title: 'Fire Scarabs',
		id: 'fire-scarabs-1'
	},
	{
		level: 3,
		title: 'Traveler',
		id: 'traveler-1'
	},
	{
		level: 3,
		title: 'Fire Scarabs',
		id: 'fire-scarabs-2'
	},
	{
		level: 3,
		title: 'Dust Devil',
		id: 'dust-devil-1'
	},
	{
		level: 3,
		title: "Djinn's Mark",
		id: 'djinn-s-mark-1'
	},
	{
		level: 3,
		title: 'Traveler',
		id: 'traveler-2'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Scorn',
		id: 'scorn'
	},
	{
		level: 3,
		title: 'Burrow',
		id: 'burrow'
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
		level: 3,
		title: 'Combo DPS',
		id: 'combo-dps'
	},
	{
		level: 3,
		title: 'Combo',
		id: 'combo-1'
	},
	{
		level: 3,
		title: 'Scorn',
		id: 'scorn-1'
	},
	{
		level: 3,
		title: 'Combo DPS',
		id: 'combo-dps-1'
	},
	{
		level: 3,
		title: 'Combo',
		id: 'combo-2'
	},
	{
		level: 3,
		title: 'Combo DPS',
		id: 'combo-dps-2'
	},
	{
		level: 3,
		title: 'Combo',
		id: 'combo-3'
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
		title: 'Plot Armor',
		id: 'plot-armor'
	},
	{
		level: 3,
		title: 'Captivating Read',
		id: 'captivating-read'
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
		title: 'Pulse Grenade',
		id: 'pulse-grenade'
	},
	{
		level: 3,
		title: 'Pulse Grenade Amp Per Stack',
		id: 'pulse-grenade-amp-per-stack'
	},
	{
		level: 3,
		title: 'Pulse Grenade',
		id: 'pulse-grenade-1'
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
		level: 3,
		title: 'Pulse Grenade',
		id: 'pulse-grenade-2'
	},
	{
		level: 3,
		title: 'Time Wall',
		id: 'time-wall-1'
	},
	{
		level: 3,
		title: 'Paradoxical Swap',
		id: 'paradoxical-swap-1'
	},
	{
		level: 3,
		title: 'Pulse Grenade',
		id: 'pulse-grenade-3'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: 'Barrage',
		id: 'barrage'
	},
	{
		level: 3,
		title: 'Flying Cloak',
		id: 'flying-cloak'
	},
	{
		level: 3,
		title: "Enchanter's Satchel",
		id: 'enchanter-s-satchel'
	},
	{
		level: 3,
		title: 'Affliction',
		id: 'affliction'
	},
	{
		level: 3,
		title: 'Affliction DPS',
		id: 'affliction-dps'
	},
	{
		level: 3,
		title: 'Affliction',
		id: 'affliction-1'
	},
	{
		level: 3,
		title: 'Affliction DPS',
		id: 'affliction-dps-1'
	},
	{
		level: 3,
		title: 'Affliction',
		id: 'affliction-2'
	},
	{
		level: 2,
		title: 'Rem',
		id: 'rem'
	},
	{
		level: 3,
		title: 'Lil Helpers',
		id: 'lil-helpers'
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
		level: 3,
		title: 'Lightning Ball',
		id: 'lightning-ball'
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
		level: 3,
		title: 'Lightning Ball',
		id: 'lightning-ball-1'
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
		title: 'Serrated Knives',
		id: 'serrated-knives'
	},
	{
		level: 3,
		title: 'Serrated Knives Bleed DPS',
		id: 'serrated-knives-bleed-dps'
	},
	{
		level: 3,
		title: 'Serrated Knives',
		id: 'serrated-knives-1'
	},
	{
		level: 3,
		title: 'Slice and Dice',
		id: 'slice-and-dice'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow'
	},
	{
		level: 3,
		title: 'Killing Blow Damage Amp',
		id: 'killing-blow-damage-amp'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow-1'
	},
	{
		level: 3,
		title: 'Serrated Knives',
		id: 'serrated-knives-2'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow-2'
	},
	{
		level: 3,
		title: 'Bloodletting',
		id: 'bloodletting'
	},
	{
		level: 3,
		title: 'Killing Blow',
		id: 'killing-blow-3'
	},
	{
		level: 2,
		title: 'Silver',
		id: 'silver'
	},
	{
		level: 3,
		title: 'Mauling Leap',
		id: 'mauling-leap'
	},
	{
		level: 3,
		title: 'Boot Kick',
		id: 'boot-kick'
	},
	{
		level: 3,
		title: 'Tail Whack',
		id: 'tail-whack'
	},
	{
		level: 3,
		title: 'Lycan Curse',
		id: 'lycan-curse'
	},
	{
		level: 3,
		title: 'Slam Fire Weapon Accuracy',
		id: 'slam-fire-weapon-accuracy'
	},
	{
		level: 3,
		title: 'Lycan Curse',
		id: 'lycan-curse-1'
	},
	{
		level: 3,
		title: 'Boot Kick',
		id: 'boot-kick-1'
	},
	{
		level: 3,
		title: 'Tail Whack',
		id: 'tail-whack-1'
	},
	{
		level: 3,
		title: 'Lycan Curse',
		id: 'lycan-curse-2'
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
		title: 'Jumpstart',
		id: 'jumpstart'
	},
	{
		level: 3,
		title: 'Jumpstart Move Speed',
		id: 'jumpstart-move-speed'
	},
	{
		level: 3,
		title: 'Jumpstart',
		id: 'jumpstart-1'
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
		id: 'jumpstart-2'
	},
	{
		level: 3,
		title: 'Aura of Suffering',
		id: 'aura-of-suffering-1'
	},
	{
		level: 3,
		title: 'Shocking Reanimation',
		id: 'shocking-reanimation-1'
	},
	{
		level: 3,
		title: 'Shocking Reanimation',
		id: 'shocking-reanimation-2'
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
		title: 'Flight',
		id: 'flight'
	},
	{
		level: 3,
		title: 'Crow Familiar',
		id: 'crow-familiar'
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
		title: 'Puddle Punch Charge Time',
		id: 'puddle-punch-charge-time'
	},
	{
		level: 3,
		title: 'Puddle Punch Slow',
		id: 'puddle-punch-slow'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch-1'
	},
	{
		level: 3,
		title: 'Goo Ball',
		id: 'goo-ball'
	},
	{
		level: 3,
		title: 'Splatter',
		id: 'splatter-1'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch-2'
	},
	{
		level: 3,
		title: 'Goo Ball',
		id: 'goo-ball-1'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Alchemical Flask',
		id: 'alchemical-flask'
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
		level: 3,
		title: 'Last Stand Channeling',
		id: 'last-stand-channeling'
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
		title: 'Card Trick',
		id: 'card-trick'
	},
	{
		level: 3,
		title: 'Project Mind',
		id: 'project-mind'
	},
	{
		level: 3,
		title: 'Full Auto',
		id: 'full-auto'
	},
	{
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis'
	},
	{
		level: 3,
		title: 'Card Trick Spade',
		id: 'card-trick-spade'
	},
	{
		level: 3,
		title: 'Card Trick Heart',
		id: 'card-trick-heart'
	},
	{
		level: 3,
		title: 'Card Trick',
		id: 'card-trick-1'
	},
	{
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis-1'
	},
	{
		level: 3,
		title: 'Card Trick',
		id: 'card-trick-2'
	},
	{
		level: 3,
		title: 'Card Trick Joker',
		id: 'card-trick-joker'
	},
	{
		level: 3,
		title: 'Card Trick',
		id: 'card-trick-3'
	},
	{
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis-2'
	},
	{
		level: 3,
		title: 'Card Trick',
		id: 'card-trick-4'
	},
	{
		level: 3,
		title: 'Project Mind',
		id: 'project-mind-1'
	},
	{
		level: 3,
		title: 'Full Auto',
		id: 'full-auto-1'
	},
	{
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis-3'
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
		title: 'Power Slash Slash Length',
		id: 'power-slash-slash-length'
	},
	{
		level: 3,
		title: 'Power Slash',
		id: 'power-slash-1'
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
		level: 3,
		title: 'Flying Slash',
		id: 'flying-slash-1'
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
		title: 'Arcane Surge',
		id: 'arcane-surge'
	},
	{
		level: 2,
		title: 'Ballistic Enchantment',
		id: 'ballistic-enchantment'
	},
	{
		level: 2,
		title: 'Blood Tribute',
		id: 'blood-tribute'
	},
	{
		level: 2,
		title: 'Boundless Spirit',
		id: 'boundless-spirit'
	},
	{
		level: 2,
		title: 'Bullet Resilience',
		id: 'bullet-resilience'
	},
	{
		level: 2,
		title: 'Burst Fire',
		id: 'burst-fire'
	},
	{
		level: 2,
		title: 'Celestial Blessing',
		id: 'celestial-blessing'
	},
	{
		level: 2,
		title: 'Cheat Death',
		id: 'cheat-death'
	},
	{
		level: 2,
		title: 'Cloak of Opportunity',
		id: 'cloak-of-opportunity'
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
		title: 'Cursed Relic',
		id: 'cursed-relic'
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
		title: 'Electric Slippers',
		id: 'electric-slippers'
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
		title: 'Extra Health',
		id: 'extra-health'
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
		title: 'Golden Goose Egg',
		id: 'golden-goose-egg'
	},
	{
		level: 2,
		title: 'Greater Expansion',
		id: 'greater-expansion'
	},
	{
		level: 2,
		title: 'Guardian Ward',
		id: 'guardian-ward'
	},
	{
		level: 2,
		title: 'Healing Nova',
		id: 'healing-nova'
	},
	{
		level: 2,
		title: 'High-Velocity Rounds',
		id: 'high-velocity-rounds'
	},
	{
		level: 2,
		title: "Hunter's Aura",
		id: 'hunter-s-aura'
	},
	{
		level: 2,
		title: 'Infinite Rounds',
		id: 'infinite-rounds'
	},
	{
		level: 2,
		title: 'Inhibitor',
		id: 'inhibitor'
	},
	{
		level: 2,
		title: 'Knockdown',
		id: 'knockdown'
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
		title: 'Metal Skin',
		id: 'metal-skin'
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
		title: 'Mystical Piano',
		id: 'mystical-piano'
	},
	{
		level: 2,
		title: 'Nullification Burst',
		id: 'nullification-burst'
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
		title: 'Seraphim Wings',
		id: 'seraphim-wings'
	},
	{
		level: 2,
		title: 'Shadow Strike',
		id: 'shadow-strike'
	},
	{
		level: 2,
		title: 'Shrink Ray',
		id: 'shrink-ray'
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
		title: 'Slowing Hex',
		id: 'slowing-hex'
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
		title: 'Spirit Sap',
		id: 'spirit-sap'
	},
	{
		level: 2,
		title: 'Spirit Shredder Bullets',
		id: 'spirit-shredder-bullets'
	},
	{
		level: 2,
		title: 'Spiritual Overflow',
		id: 'spiritual-overflow'
	},
	{
		level: 2,
		title: 'Split Shot',
		id: 'split-shot'
	},
	{
		level: 2,
		title: 'Stalker',
		id: 'stalker'
	},
	{
		level: 2,
		title: 'Suppressor',
		id: 'suppressor'
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
		title: 'Torment Pulse',
		id: 'torment-pulse'
	},
	{
		level: 2,
		title: 'Trophy Collector',
		id: 'trophy-collector'
	},
	{
		level: 2,
		title: 'Unstable Concoction',
		id: 'unstable-concoction'
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
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2026-02-20',
			to: '2026-03-06'
		},
		after: {
			from: '2026-03-07',
			to: '2026-03-21'
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
			name: 'Haze',
			id: 'haze'
		},
		{
			kind: 'hero',
			name: 'Infernus',
			id: 'infernus'
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
			name: 'Arcane Surge',
			id: 'arcane-surge'
		},
		{
			kind: 'item',
			name: 'Ballistic Enchantment',
			id: 'ballistic-enchantment'
		},
		{
			kind: 'item',
			name: 'Blood Tribute',
			id: 'blood-tribute'
		},
		{
			kind: 'item',
			name: 'Boundless Spirit',
			id: 'boundless-spirit'
		},
		{
			kind: 'item',
			name: 'Bullet Resilience',
			id: 'bullet-resilience'
		},
		{
			kind: 'item',
			name: 'Burst Fire',
			id: 'burst-fire'
		},
		{
			kind: 'item',
			name: 'Celestial Blessing',
			id: 'celestial-blessing'
		},
		{
			kind: 'item',
			name: 'Cheat Death',
			id: 'cheat-death'
		},
		{
			kind: 'item',
			name: 'Cloak of Opportunity',
			id: 'cloak-of-opportunity'
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
			name: 'Cursed Relic',
			id: 'cursed-relic'
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
			name: 'Electric Slippers',
			id: 'electric-slippers'
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
			name: 'Extra Health',
			id: 'extra-health'
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
			name: 'Golden Goose Egg',
			id: 'golden-goose-egg'
		},
		{
			kind: 'item',
			name: 'Greater Expansion',
			id: 'greater-expansion'
		},
		{
			kind: 'item',
			name: 'Guardian Ward',
			id: 'guardian-ward'
		},
		{
			kind: 'item',
			name: 'Healing Nova',
			id: 'healing-nova'
		},
		{
			kind: 'item',
			name: 'High-Velocity Rounds',
			id: 'high-velocity-rounds'
		},
		{
			kind: 'item',
			name: "Hunter's Aura",
			id: 'hunter-s-aura'
		},
		{
			kind: 'item',
			name: 'Infinite Rounds',
			id: 'infinite-rounds'
		},
		{
			kind: 'item',
			name: 'Inhibitor',
			id: 'inhibitor'
		},
		{
			kind: 'item',
			name: 'Knockdown',
			id: 'knockdown'
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
			name: 'Metal Skin',
			id: 'metal-skin'
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
			name: 'Mystical Piano',
			id: 'mystical-piano'
		},
		{
			kind: 'item',
			name: 'Nullification Burst',
			id: 'nullification-burst'
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
			name: 'Seraphim Wings',
			id: 'seraphim-wings'
		},
		{
			kind: 'item',
			name: 'Shadow Strike',
			id: 'shadow-strike'
		},
		{
			kind: 'item',
			name: 'Shrink Ray',
			id: 'shrink-ray'
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
			name: 'Slowing Hex',
			id: 'slowing-hex'
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
			name: 'Spirit Sap',
			id: 'spirit-sap'
		},
		{
			kind: 'item',
			name: 'Spirit Shredder Bullets',
			id: 'spirit-shredder-bullets'
		},
		{
			kind: 'item',
			name: 'Spiritual Overflow',
			id: 'spiritual-overflow'
		},
		{
			kind: 'item',
			name: 'Split Shot',
			id: 'split-shot'
		},
		{
			kind: 'item',
			name: 'Stalker',
			id: 'stalker'
		},
		{
			kind: 'item',
			name: 'Suppressor',
			id: 'suppressor'
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
			name: 'Torment Pulse',
			id: 'torment-pulse'
		},
		{
			kind: 'item',
			name: 'Trophy Collector',
			id: 'trophy-collector'
		},
		{
			kind: 'item',
			name: 'Unstable Concoction',
			id: 'unstable-concoction'
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
		}
	],
	related: []
};
function _3_06_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<p><img src="https://clan.akamai.steamstatic.com/images/45164767/1a200778c94a048c5b2580a1e1a36071679ff19e.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>\n<ul><li>Can now jump during slide</li><li>Dash jump grants a very brief period with increased air control (30% for 0.25s)</li><li>Shrine is now easier to kill for the first one and harder for the second. HP from 8100 to 5000/10000 (HP updates after the first one dies, like Walkers)</li><li>Shrines attack no longer hits heroes under the shrine</li><li>Super troopers bonus DPS increased from +40% to +60% (the upgraded troopers when Shrine dies)</li><li>Middle Lane troopers now gets upgraded when either of the shrines die, rather than only when both die</li><li>Killing a pair of base guardians now spawns a zipline boosted trooper wave to reinforce your push</li><li>Medic Troopers DPS grows by 3% per minute</li><li>Troopers now gain 7 HP regen when out of combat</li><li>Trooper wave interval increased from every 25s to every 20s starting at 35 minutes</li><li>Guardians bounty increased from 1000 to 1500</li><li>Walkers bounty increased from 3500 to 4000</li><li>Walkers Health rescaled from 6800/9350/11900 to 6000/9000/12000</li><li>Walkers armor decay rescaled from &quot;+75% -&gt; -50%&quot; to &quot;+65% -&gt; -65%&quot;, from over 20min to over 18min</li><li>Base Guardians bounty from 750 to 1000</li><li>Shrines bounty increased from 0 to 2000</li><li>Mid Boss base bounty increased from 2000 to 3000</li><li>Mid Boss base HP increased from 11900 to 13000</li><li>Mid Boss global announcement health threshold reduced from 70% to 50%</li><li>Mid Boss now has 35% Debuff Resistance</li><li>Rejuv drop duration reduced from 7s to 6s</li><li>Rejuv duration no longer refreshes when hitting a crystal later</li><li>Minimap now indicates if the Urn is a favored, neutral or unfavored</li><li>Added a neutral camp (2 Normal, 3 Weak) at Hidden King Park Walker</li><li>Added a neutral camp (2 Normal, 3 Weak) at Archmother York Walker</li><li>Added &quot;0 Way&quot; veils underneath the Shrine platforms in each base</li><li>Moved the mid lane bridge above the Hidden King Base entrance more to the middle of the two edges</li><li>Subsequent CC reduction increased from 8%/24% to 10/30% (window from 7s to 8s)</li><li>Move speed diminishing ramp now occurs around 11m rather than 10m</li><li>Fixed melee abilities not using conditional damage based on enemy state (close quarters, point blank, opening rounds)</li><li>Street Brawl: Removed item slot limit (don&#x27;t need to sell items in the final round sometimes)</li><li>Added new T1 Spirit Item: Golden Goose Egg</li><li>Backstabber: Renamed to Stalker</li><li>Vindcita: Ammo reduced from 22 to 19</li><li>Vindcita: Crow Familiar cooldown increased from 28s to 32s</li><li>Card Types:</li><li>Spades: +70% Damage</li><li>Diamond: Cuts enemy resistances by -8% for 5s. Does not stack.</li><li>Hearts: Heals you for 75 HP (1.25 spirit scaling, half heal on non-heroes)</li><li>Clubs: 30% Slow for 3s</li><li>Joker: Has all of the above effects and bounces to an additional enemy within 20m. (Has 1/9th chance)</li><li>Golden Egg Goose: Souls Per Minute increased from 75 to 90</li><li>Base Guardians HP reduced from 5500 to 4000</li><li>Zipline can now be captured a little bit more forward towards the enemy base</li><li>The minimum always captured zipline distance in your base is now reduced a little bit inwards</li><li>Super troopers (when a lane shrine is down) now have 15% less bounty</li><li>Hero base health increased by 40</li><li>Hero health increased growth by +4 and 8%</li><li>Vitality investment bonuses increased by 12%</li><li>Vitality investment tree bonus reverted back to % base hp increase rather than raw constant bonus (back to how it was set up in december)</li><li>Hero health growth increased by +3 and 4%</li><li>Spirit investment rescaled from 7/11/15/19/38/52/64/76/89/101 to 7/11/15/19/38/48/57/66/75/100</li><li>Small neutrals spirit resist increased from 35% to 45%</li><li>Improved the following Enhanced Items: Blood Tribute, Shadow Weave, Cultist Sacrifice, Magic Carpet, Healing Rite, Majestic Leap, Metal Skin, Monster Rounds, Veil Walker, Fury Trance, Return Fire, Restorative Locket, Rebuttal, Disarming Hex, Split Shot, Rescue Beam, Spirit Sap, Cursed Relic, Heroic Aura, Rusted Barrel, Weapon Shielding, Nullification Blast, Cloak of Opportunity</li><li>Runed Gauntlet: Melee distance increased from 130% to 150%</li><li>Runed Gauntlet: Cooldown on hit reduced from -12% to -16%</li><li>Runed Gauntlet: Cooldown on hit reduced from -3s to -4s</li><li>Brawl Victor: Aura of Suffering aura radius reduced by 2m</li><li>Brawl Bebop: Hyper Beam duration from -4s to -5s</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_3_06_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Bullet damage reduced from 3.86+0.13/boon to 3.6+0.1/boon</li></ul>\n')} <div class="ability siphon-life-dps">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life DPS change history</a></p>\n<h4 id="siphon-life-dps"><a href="/ability/siphon-life">Siphon Life DPS</a></h4>\n<ul><li>Siphon Life DPS reduced from 29 to 22</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Siphon Life range reduced from 10m to 7.5m</li><li>Siphon Life is now circular rather than just in front of him</li><li>Siphon Life range no longer increases with Spirit Power</li><li>Siphon Life visual range FX fixed to show larger than default radius values</li><li>Siphon Life Lifesteal against heroes increased from 66% to 80%</li><li>Siphon Life Lifesteal against non-heroes increased from 33% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div> <div class="ability siphon-life-dps">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life DPS change history</a></p>\n<h4 id="siphon-life-dps-1"><a href="/ability/siphon-life">Siphon Life DPS</a></h4>\n<ul><li>Siphon Life DPS spirit scaling increased from 0.5 to 0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life-1"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Siphon Life T1 increased from -19s to -20s</li><li>Siphon Life T3 now also increases radius by +3.5m</li><li>Siphon Life T3 DPS reduced from 20 to 18</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n')} <ul><li>${html('Shoulder Charge damage reduced from 37 to 30')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Shoulder Charge damage reduced from 37 to 30'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shoulder Charge wall stun duration reduced from 0.6s to 0.3s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability should-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Should Charge change history</a></p>\n<h4 id="should-charge"><a href="/ability/shoulder-charge">Should Charge</a></h4>\n<ul><li>Should Charge spirit scaling reduced from 1.9 to 1.4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Should Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge-1"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n')} <ul><li>${html('Shoulder Charge T1 changed from &quot;+2.2 Weapon Damage for 8s&quot; to &quot;+40% Slow for 3s&quot;')}</li> <li>${html('Shoulder Charge T2 wall stun duration increased from 0.45s to 0.8s')}</li> <li>${html('Shoulder Charge T3 cooldown increased from -18s to -20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		groupIndex: 7,
		bulletIndex: 2,
		text: 'Shoulder Charge T3 cooldown increased from -18s to -20s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shoulder Charge T3 now also grants +1.5 Weapon Damage for 6s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience T2 increased from +150 Health to +200</li><li>Infernal Resilience T3 now also grants +20% Debuff Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n')} <ul><li>${html('Seismic Impact is a little faster to target the location when rising')}</li> <li>${html('Seismic Impact damage increase from 75 to 100')}</li> <li>${html('Seismic Impact now allows you to use items during it')}</li> <li>${html('Seismic Impact radius reduced from 10.5m to 9m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		groupIndex: 9,
		bulletIndex: 3,
		text: 'Seismic Impact radius reduced from 10.5m to 9m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Seismic Impact T2 changed from &quot;Per Hero Hit: +100 HP and +14% Fire Rate&quot; to &quot;+0.6s Stun Duration&quot;')}</li> <li>${html('Seismic Impact T3 now also increases radius by 6m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Melee damage per boon increased by 10%</li></ul>\n')} <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life-2"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Siphon Life range increased from 7.5m to 8m</li><li>Siphon Life T3 range reduced from +3.5m to +3m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div> <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience-1"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience T3 increased from +7% Damage Regenerated to +8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact-1"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Seismic Impact impact height increased from 4m to 6m</li><li>Seismic Impact T2 increased from +0.6s Stun Duration to +0.7s</li><li>Seismic Impact T3 Unstoppable duration increased from 4s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero apollo">${html('\n<p><a href="/hero/apollo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Apollo patch history</a></p>\n<h3 id="apollo"><a href="/hero/apollo">Apollo</a></h3>\n')} <div class="ability riposte">${html('\n<p><a href="/ability/riposte"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Riposte change history</a></p>\n<h4 id="riposte"><a href="/ability/riposte">Riposte</a></h4>\n<ul><li>Fixed Riposte not leaving the ground when started on the ground</li><li>Riposte no longer triggers from trooper or neutral damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Riposte'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>\n<h4 id="flawless-advance"><a href="/ability/flawless-advance">Flawless Advance</a></h4>\n<ul><li>Flawless Advance T2 no longer increases Apollo&#x27;s lunge speed</li><li>Flawless Advance now gets interrupted by stun and sleep</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance'
	});
	$$renderer.push(
		`<!----></div> <div class="ability itani-lo-sahn">${html('\n<p><a href="/ability/itani-lo-sahn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_ult.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Itani Lo Sahn change history</a></p>\n<h4 id="itani-lo-sahn"><a href="/ability/itani-lo-sahn">Itani Lo Sahn</a></h4>\n<ul><li>Itani Lo Sahn base damage reduced from 225 to 190 and spirit scaling increased from 1.6 to 2.3</li><li>Itani Lo Sahn&#x27;s hit width no longer scales with radius increases</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Itani Lo Sahn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flawless-advance">${html('\n<p><a href="/ability/flawless-advance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flawless Advance change history</a></p>\n<h4 id="flawless-advance-1"><a href="/ability/flawless-advance">Flawless Advance</a></h4>\n<ul><li>Flawless Advance T3 now also increases Apollo&#x27;s attacking lunge speed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Flawless Advance'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet damage increased from 17 to 18.5</li></ul>\n')} <div class="ability riposte">${html('\n<p><a href="/ability/riposte"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Riposte change history</a></p>\n<h4 id="riposte-1"><a href="/ability/riposte">Riposte</a></h4>\n<ul><li>Riposte T2 melee resist reduction increased from -22% to -30%</li><li>Riposte T3 increased from +1.2s Stun to +1.6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Apollo',
		ability: 'Riposte'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability grapple-arm">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>\n<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>\n<ul><li>Hook can now be canceled</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Grapple Arm'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero billy">${html('\n<p><a href="/hero/billy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Billy patch history</a></p>\n<h3 id="billy"><a href="/hero/billy">Billy</a></h3>\n')} <div class="ability bashdown">${html('\n<p><a href="/ability/bashdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_sigilslam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bashdown change history</a></p>\n<h4 id="bashdown"><a href="/ability/bashdown">Bashdown</a></h4>\n')} <ul><li>${html('Bashdown radius reduced from 4.5m to 4m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Billy',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Bashdown radius reduced from 4.5m to 4m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bashdown T2 changed from &quot;+1.3m Radius&quot; to &quot;+1 Charge and +2m Radius&quot;')}</li> <li>${html('Bashdown T3 now also reduces charge time by 2s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Bashdown'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rising-ram">${html('\n<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>\n<h4 id="rising-ram"><a href="/ability/rising-ram">Rising Ram</a></h4>\n')} <ul><li>${html('Rising Ram damage reduced from 55 to 40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Billy',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Rising Ram damage reduced from 55 to 40'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Rising Ram damage spirit scaling increased from 1.7 to 1.9')}</li> <li>${html('Rising Ram cooldown reduced by 50% on impact')}</li> <li>${html('Rising Ram charge duration reduced from 0.51s to 0.3s')}</li> <li>${html('Rising Ram T1 changed from &quot;On Impact: -50% Cooldown&quot; to &quot;On Impact: +25% Weapon Damage for 5s&quot;')}</li> <li>${html('Rising Ram T2 changed from &quot;On Impact: +35% Weapon Damage for 5s&quot; to &quot;+0.3s Charge Duration&quot;')}</li> <li>${html('Rising Ram T3 increased from 6.5% Max Health to 8%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Rising Ram'
	});
	$$renderer.push(
		`<!----></div> <div class="ability blasted">${html('\n<p><a href="/ability/blasted"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_blasted.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Blasted change history</a></p>\n<h4 id="blasted"><a href="/ability/blasted">Blasted</a></h4>\n<ul><li>Blasted spirit scaling reduced from 0.8 to 0.6</li><li>Blasted active duration no longer slows down the decay when doing bullet damage (melee still extends it though)</li><li>Blasted passive no longer reduces enemy fire rate by -14%</li><li>Blasted tooltip simplified</li><li>Blasted T3 now also increases spirit scaling by +0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Blasted'
	});
	$$renderer.push(
		`<!----></div> <div class="ability chain-gang">${html('\n<p><a href="/ability/chain-gang"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_chaingang.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Chain Gang change history</a></p>\n<h4 id="chain-gang"><a href="/ability/chain-gang">Chain Gang</a></h4>\n')} <ul><li>${html('Chain Gang radius reduced from 13m to 12m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Billy',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Chain Gang radius reduced from 13m to 12m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Chain Gang no longer grants +15% Spirit and Bullet Resist')}</li> <li>${html('Chain Gang cooldown increased from 125s to 150s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Billy',
		groupIndex: 3,
		bulletIndex: 2,
		text: 'Chain Gang cooldown increased from 125s to 150s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Chain Gang T1 changed from &quot;-25s Cooldown&quot; to &quot;+40% Spirit and Bullet Resist&quot;')}</li> <li>${html('Chain Gang T2 changed from &quot;+15% Spirit and Bullet Resist&quot; to &quot;-50s Cooldown&quot;')}</li> <li>${html('Chain Gang T3 changed from 2s Unstoppable to +1.3s Unstoppable for each hero pulled in')}</li> <li>${html('Chain Gang T3 no longer grants +90 damage')}</li> <li>${html('Chain Gang T3 now also increases the radius by +5m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Chain Gang'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rising-ram">${html('\n<p><a href="/ability/rising-ram"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rising Ram change history</a></p>\n<h4 id="rising-ram-1"><a href="/ability/rising-ram">Rising Ram</a></h4>\n<ul><li>Rising Ram now uses a break-off angle when grounded, allowing upward movement if looking up enough</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Billy',
		ability: 'Rising Ram'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero calico">${html('\n<p><a href="/hero/calico"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Calico patch history</a></p>\n<h3 id="calico"><a href="/hero/calico">Calico</a></h3>\n')} <div class="ability bullets">${html('\n<h4 id="bullets">Bullets</h4>\n<ul><li>Bullets no longer have gravity</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Bullets'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Now fires an additional pellet right down the center (DPS is the same). The center pellet is now considered the primary pellet for headshots.</li></ul>\n')} <div class="ability gloom-bombs">${html('\n<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bombs change history</a></p>\n<h4 id="gloom-bombs"><a href="/ability/gloom-bombs">Gloom Bombs</a></h4>\n<ul><li>Gloom Bombs changed so the first grenade always lands in the middle</li><li>Gloom Bombs projectile sticky radius increased from 10 to 15</li><li>Gloom Bombs cast delay reduced from 0.15s to 0.1s</li><li>Gloom Bombs T2 changed from +16.2 damage to +75 bonus damage vs barriers</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Gloom Bombs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability leaping-slash">${html('\n<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>\n<h4 id="leaping-slash"><a href="/ability/leaping-slash">Leaping Slash</a></h4>\n')} <ul><li>${html('Leaping Slash improved targeting of dash to end early if near enemy heroes')}</li> <li>${html('Leaping Slash can now dash vertically, even while on the ground')}</li> <li>${html('Leaping Slash T2 changed from +40 damage to +300 souls on hero kill')}</li> <li>${html('Leaping Slash T3 changed from -50% CDR on hit to -50% CDR and +60 damage')}</li> <li>${html('Leaping Slash radius reduced from 4.5m to 4m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 3,
		bulletIndex: 4,
		text: 'Leaping Slash radius reduced from 4.5m to 4m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Leaping Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ava">${html('\n<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>\n<h4 id="ava"><a href="/ability/ava">Ava</a></h4>\n')} <ul><li>${html('Ava can no longer manipulate movement if meleeing while midair')}</li> <li>${html('Ava now uses healthbar modifier style for duration')}</li> <li>${html('Ava fixed camera not being centered around Ava')}</li> <li>${html('Ava melee attack delay reduced from 0.4s to 0.0s')}</li> <li>${html('Ava melee attack cooldown increased from 0.75 to 0.85')}</li> <li>${html('Ava melee attack now goes the way you are looking')}</li> <li>${html('Ava now starts at a minimum speed, and increases to maximum speed over time, resetting on taking damage')}</li> <li>${html('Ava now gradually recovers speed over time after taking damage, rather than being slowed for the entire duration')}</li> <li>${html('Ava cooldown reduced from 45s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 4,
		bulletIndex: 8,
		text: 'Ava cooldown reduced from 45s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Ava duration reduced from 16s to 15s')}</li> <li>${html('Ava T1 duration increased from +14s to 15s')}</li> <li>${html('Ava T2 changed from +45% Speed to +45% Speed and +15 Health Regen')}</li> <li>${html('Ava T3 changed from -20s Cooldown and +35 Health Regen to a growing damage amp the longer you are transformed, up to 20% for 6s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Ava'
	});
	$$renderer.push(
		`<!----></div> <div class="ability return-to-shadows">${html('\n<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return To Shadows change history</a></p>\n<h4 id="return-to-shadows"><a href="/ability/return-to-shadows">Return To Shadows</a></h4>\n<ul><li>Return To Shadows now allows for some vertical flight movement during channel</li><li>Return To Shadows now has new channel bar</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Return To Shadows'
	});
	$$renderer.push(
		`<!----></div> <div class="ability return-to-shadows">${html('\n<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return to Shadows change history</a></p>\n<h4 id="return-to-shadows-1"><a href="/ability/return-to-shadows">Return to Shadows</a></h4>\n<ul><li>Return to Shadows T2 reduced from 67.5 Damage to 65</li><li>Return to Shadows T3 no longer grants +18% Damage Amp for 6s, but grants 350 healing instead</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Return to Shadows'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Move speed reduced from 7.2 to 6.8</li></ul>\n')} <div class="ability gloom-bombs">${html('\n<p><a href="/ability/gloom-bombs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Gloom Bombs change history</a></p>\n<h4 id="gloom-bombs-1"><a href="/ability/gloom-bombs">Gloom Bombs</a></h4>\n<ul><li>Fixed Gloom Bombs T2 giving an extra +15 flat bonus (released a couple days ago)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Gloom Bombs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability leaping-slash">${html('\n<p><a href="/ability/leaping-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Leaping Slash change history</a></p>\n<h4 id="leaping-slash-1"><a href="/ability/leaping-slash">Leaping Slash</a></h4>\n')} <ul><li>${html('Leaping Slash scaling reduced from 1.5 to 1.2')}</li> <li>${html('Leaping Slash T2 reduced from 300 Souls to 225')}</li> <li>${html('Leaping Slash scaling reduced from 1.2 to 0.8')}</li> <li>${html('Leaping Slash cooldown increased from 11s to 13s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 9,
		bulletIndex: 3,
		text: 'Leaping Slash cooldown increased from 11s to 13s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Leaping Slash T2 reduced from &quot;+225s within 4s&quot; to &quot;+200 within 3s&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Leaping Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ava">${html('\n<p><a href="/ability/ava"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ava change history</a></p>\n<h4 id="ava-1"><a href="/ability/ava">Ava</a></h4>\n<ul><li>Ava is no longer disabled by damage over time abilities (same as zipline rules)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Ava'
	});
	$$renderer.push(
		`<!----></div> <div class="ability return-to-shadows">${html('\n<p><a href="/ability/return-to-shadows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Return to Shadows change history</a></p>\n<h4 id="return-to-shadows-2"><a href="/ability/return-to-shadows">Return to Shadows</a></h4>\n')} <ul><li>${html('Return to Shadows move speed reduced from 30% to 20%')}</li> <li>${html('Return to Shadows cooldown increased from 90s to 100s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Calico',
		groupIndex: 11,
		bulletIndex: 1,
		text: 'Return to Shadows cooldown increased from 90s to 100s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Calico',
		ability: 'Return to Shadows'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero celeste">${html('\n<p><a href="/hero/celeste"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celeste patch history</a></p>\n<h3 id="celeste"><a href="/hero/celeste">Celeste</a></h3>\n<ul><li>Gravity reduced from -20% to -28% (less gravity)</li><li>Air Control/Acceleration reduced from +50/18% to +38/12% (less air control and acceleration)</li></ul>\n')} <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n<ul><li>Shining Wonder bounce range reduced from 17m to 15m</li><li>Shining Wonder linger duration reduced from 4.5s to 3.25s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Gravity from 28% to 25% (was 20% previous patch)</li><li>Air Control increased from 38% to 44% (was 50% previous patch)</li></ul>\n')} <div class="ability light-eater">${html('\n<p><a href="/ability/light-eater"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_flare.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Light Eater change history</a></p>\n<h4 id="light-eater"><a href="/ability/light-eater">Light Eater</a></h4>\n<ul><li>Light Eater on hit damage reduced from 25 to 20</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Light Eater'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dazzling-trick">${html('\n<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>\n<h4 id="dazzling-trick"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>\n<ul><li>Dazzling Trick barrier spirit scaling reduced from 1.1 to 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Dazzling Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder-1"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n<ul><li>Shining Wonder no longer refunds half cooldown on miss</li><li>Shining Wonder linger time reduced from 3.25s to 3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet/Melee resistance reduced from -6% to -8%</li><li>Gun now has falloff 22m-&gt;60m</li><li>Bullet damage increased from 18+0.6 to 22+0.7</li></ul>\n')} <div class="ability light-eater">${html('\n<p><a href="/ability/light-eater"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_flare.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Light Eater change history</a></p>\n<h4 id="light-eater-1"><a href="/ability/light-eater">Light Eater</a></h4>\n<ul><li>Light Eater spirit scaling increased from 0.23 to 0.28</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Light Eater'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dazzling-trick">${html('\n<p><a href="/ability/dazzling-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dazzling Trick change history</a></p>\n<h4 id="dazzling-trick-1"><a href="/ability/dazzling-trick">Dazzling Trick</a></h4>\n<ul><li>Dazzling Trick no longer grants +1m Move Speed</li><li>Dazzling Trick T1 increased from +2.5m Move Speed to +3.5m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Dazzling Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability radiant-daggers">${html('\n<p><a href="/ability/radiant-daggers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Radiant Daggers change history</a></p>\n<h4 id="radiant-daggers"><a href="/ability/radiant-daggers">Radiant Daggers</a></h4>\n<ul><li>Radiant Daggers spirit scaling increased from 0.42 to 0.56</li><li>Radiant Daggers T2 increased from &quot;-15s Cooldown and +60 Damage&quot; to &quot;-18s Cooldown and +70 Damage&quot;</li><li>Radiant Daggers T3 fire rate increased from 6% to 7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Radiant Daggers'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shining-wonder">${html('\n<p><a href="/ability/shining-wonder"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shining Wonder change history</a></p>\n<h4 id="shining-wonder-2"><a href="/ability/shining-wonder">Shining Wonder</a></h4>\n<ul><li>Shining Wonder range reduced from 15m to 14m</li><li>Shining Wonder T3 reduced from +10 Max Bounces to +8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Celeste',
		ability: 'Shining Wonder'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero doorman">${html('\n<p><a href="/hero/the-doorman"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Doorman patch history</a></p>\n<h3 id="doorman"><a href="/hero/the-doorman">Doorman</a></h3>\n<ul><li>Gun now pierces through targets at 50% reduced damage</li></ul>\n')} <div class="ability call-bell">${html('\n<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>\n<h4 id="call-bell"><a href="/ability/call-bell">Call Bell</a></h4>\n<ul><li>Call Bell time between charges increased from 4s to 6s</li><li>Call Bell no longer has Impact Damage (was 40 with 1.0 scaling)</li><li>Call Bell explosion damage increased from 55 to 85</li><li>Call Bell explosion damage spirit scaling reduced from 1.7 to 1.4</li><li>Call Bell T1 increased from +2m to +2.5m</li><li>Call Bell T2 no longer has Impact Damage</li><li>Call Bell T2 Explosion Damage increased from 40 to 75</li><li>Call Bell T2 now increases spirit scaling by +0.6</li><li>Call Bell T3 changed from &quot;Impact causes half radius explosions&quot; to &quot;+1 Charge and +22s Lifetime. Causes the radius to continuously apply it&#x27;s slow&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Call Bell'
	});
	$$renderer.push(
		`<!----></div> <div class="ability doorway">${html('\n<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway change history</a></p>\n<h4 id="doorway"><a href="/ability/doorway">Doorway</a></h4>\n<ul><li>Doorway now has a timer icon above the ability</li><li>Doorway T1 duration increased from +10s to +15s</li><li>Doorway T2 barrier duration increased from 8s to 12s</li><li>Doorway T3 doorway distance now also scales with Spirit Power (0.25)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Doorway'
	});
	$$renderer.push(
		`<!----></div> <div class="ability luggage-cart">${html('\n<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>\n<h4 id="luggage-cart"><a href="/ability/luggage-cart">Luggage Cart</a></h4>\n<ul><li>Luggage Cart is now 20% larger (20% wider hitbox as well)</li><li>Luggage Cart T1 changed from &quot;-8s Cooldown&quot; to &quot;+60 Damage&quot;</li><li>Luggage Cart T2 increased from +15m Cast Range to +20m</li><li>Luggage Cart T3 changed from &quot;+45 Cart Damage and 117 Wall Damage and 1.2s Wall Stun&quot; to &quot;+1.5s Wall Stun and -15s Cooldown&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Luggage Cart'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Fixed issues where the cart would hit a target coming out of the hotel before they were supposed to be allowed to be hit, causing the cart to not properly drag the target</li></ul>\n')} <div class="ability hotel-guest">${html('\n<p><a href="/ability/hotel-guest"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_elevator.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hotel Guest change history</a></p>\n<h4 id="hotel-guest"><a href="/ability/hotel-guest">Hotel Guest</a></h4>\n<ul><li>Hotel Guest cast range increased from 6m to 7m</li><li>Hotel Guest no longer goes on cooldown if the target dies during the cast</li><li>Hotel Guest fixed enemies not always landing in the correct spot on return</li><li>Hotel Guest now supports instant cast settings</li><li>Hotel Guest returning guest now has a 100% time slow that decays to 0% over 1s</li><li>Hotel Guest cost of stay damage reduced from 150 to 75</li><li>Hotel Guest failure to check-out damage reduced from 250 to 125</li><li>Hotel Guest T1 changed from &quot;+2m Cast Range&quot; to &quot;-1 Stamina and -25s Cooldown&quot;</li><li>Hotel Guest T2 changed from &quot;Unstoppable while channeling&quot; to &quot;+1.5s Stun On Failure To Checkout and 150 Damage&quot;</li><li>Hotel Guest T3 changed from &quot;-50s Cooldown&quot; to &quot;Unstoppable while Hotel is occupied. 10s Cooldown on Failure to Check Out&quot;</li><li>Hotel Guest T3 late checkout cooldown increased from 10s to 13s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Hotel Guest'
	});
	$$renderer.push(
		`<!----></div> <div class="ability call-bell">${html('\n<p><a href="/ability/call-bell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Call Bell change history</a></p>\n<h4 id="call-bell-1"><a href="/ability/call-bell">Call Bell</a></h4>\n<ul><li>Call Bell now has Impact Damage (40+1) and Explosion Damage (55+1.7) as separate components again (previous values for impact/explosion)</li><li>Call Bell T2 is now &quot;+30 Impact Damage and +40 Explosion Damage&quot;</li><li>Call Bell T3 now also increases slow by 15%</li><li>Call Bell now continuously emits slow</li><li>Call Bell impact damage spirit scaling reduced from 1 to 0.7</li><li>Call Bell T1 changed from &quot;+3m Radius&quot; to &quot;+1 Charge&quot;</li><li>Call Bell T3 no longer grants +1 Charge</li><li>Call Bell T3 now also grants +4m Radius</li><li>Call Bell T3 duration increased from +22s to +26s</li><li>Call Bell T3 now also increases spirit scaling by +0.4</li><li>Call Bell T3 no longer increases slow by -15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Call Bell'
	});
	$$renderer.push(
		`<!----></div> <div class="ability doorway">${html('\n<p><a href="/ability/doorway"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Doorway change history</a></p>\n<h4 id="doorway-1"><a href="/ability/doorway">Doorway</a></h4>\n<ul><li>Doorway now shows the range of where the second door can be placed on the minimap.</li><li>Doorway T3 distance spirit scaling reduced from 0.25 to 0.15</li><li>Doorway T3 reduced from +50m to +45m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Doorway'
	});
	$$renderer.push(
		`<!----></div> <div class="ability luggage-cart">${html('\n<p><a href="/ability/luggage-cart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Luggage Cart change history</a></p>\n<h4 id="luggage-cart-1"><a href="/ability/luggage-cart">Luggage Cart</a></h4>\n<ul><li>Fixed Luggage Cart moving targets with Unstoppable if it goes through a Doorway</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Doorman',
		ability: 'Luggage Cart'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero drifter">${html('\n<p><a href="/hero/drifter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Drifter patch history</a></p>\n<h3 id="drifter"><a href="/hero/drifter">Drifter</a></h3>\n')} <div class="ability rend">${html('\n<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>\n<h4 id="rend"><a href="/ability/rend">Rend</a></h4>\n')} <ul><li>${html('Rend damage range reduced from 18m to 16m')}</li> <li>${html('Rend cooldown increased from 13s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Rend cooldown increased from 13s to 16s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Rend damage spirit scaling increased from 1.4 to 1.8')}</li> <li>${html('Rend &quot;bonus&quot; damage is now the melee range at close range (so you only do melee damage at close range and spirit is the default)')}</li> <li>${html('Rend T1 bonus damage increased from +32 to +40')}</li> <li>${html('Rend T3 changed from &quot;Gain 45% Bullet Lifesteal against affected enemies for 4s&quot; to &quot;Close range attack now silences enemies for 2.3s&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Rend'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stalker-s-mark">${html('\n<p><a href="/ability/stalkers-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_stalkersmark.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stalker&#x27;s Mark change history</a></p>\n<h4 id="stalker-s-mark"><a href="/ability/stalkers-mark">Stalker&#x27;s Mark</a></h4>\n<ul><li>Stalker&#x27;s Mark duration reduced from 6s to 5s</li><li>Stalker&#x27;s Mark T1 changed from &quot;+1% Bleed&quot; to &quot;-8% Bullet Resist&quot;</li><li>Stalker&#x27;s Mark T2 changed from &quot;+22% Fire Rate for 6s after ambush&quot; to &quot;+3s Duration and -8s Cooldown&quot;</li><li>Stalker&#x27;s Mark T3 changed from &quot;Enables 2 Charges and +2s Duration&quot; to &quot;+2% Bleed and -40% Healing&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: "Stalker's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability bloodscent">${html('\n<p><a href="/ability/bloodscent"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodscent change history</a></p>\n<h4 id="bloodscent"><a href="/ability/bloodscent">Bloodscent</a></h4>\n<ul><li>Bloodscent now grants Drifter the same amount of permanent bonus weapon damage when an isolated hero dies nearby, whether Drifter gets the assist or the kill</li><li>Bloodscent permanent bonus weapon damage gained per isolated hero death reduced from 4% to 3%</li><li>Bloodscent T2 changed from &quot;Isolated kill reduces cooldowns by 15s and restores 3 stamina&quot; to &quot;Isolated death restores 18% Missing Health and restores 2 stamina&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Bloodscent'
	});
	$$renderer.push(
		`<!----></div> <div class="ability eternal-night">${html('\n<p><a href="/ability/eternal-night"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/darkness.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Eternal Night change history</a></p>\n<h4 id="eternal-night"><a href="/ability/eternal-night">Eternal Night</a></h4>\n<ul><li>Eternal Night now makes the targets be considered as isolated</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Eternal Night'
	});
	$$renderer.push(
		`<!----></div> <div class="ability eternal-night-sprint">${html('\n<p><a href="/ability/eternal-night"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/darkness.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Eternal Night Sprint change history</a></p>\n<h4 id="eternal-night-sprint"><a href="/ability/eternal-night">Eternal Night Sprint</a></h4>\n<ul><li>Eternal Night Sprint reduced from +3m to +2m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Eternal Night Sprint'
	});
	$$renderer.push(
		`<!----></div> <div class="ability eternal-night">${html('\n<p><a href="/ability/eternal-night"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/darkness.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Eternal Night change history</a></p>\n<h4 id="eternal-night-1"><a href="/ability/eternal-night">Eternal Night</a></h4>\n')} <ul><li>${html('Eternal Night no longer has 7 spirit damage proc')}</li> <li>${html('Eternal Night cooldown increased from 120s to 125s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		groupIndex: 5,
		bulletIndex: 1,
		text: 'Eternal Night cooldown increased from 120s to 125s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Eternal Night duration reduced from 7s to 6.5s')}</li> <li>${html('Eternal Night T1 changed from &quot;+6.3 Spirit Damage Proc&quot; to &quot;+10m Sprint&quot; (kicks in immediately)')}</li> <li>${html('Eternal Night T2 changed from &quot;-30s Cooldown and +3m/s Sprint&quot; to &quot;-45s Cooldown&quot;')}</li> <li>${html('Eternal Night T3 increased from &quot;+2s Duration and +1 Max Target&quot; to &quot;+2.5s Duration and +1 Max Target&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Eternal Night'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rend">${html('\n<p><a href="/ability/rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rend change history</a></p>\n<h4 id="rend-1"><a href="/ability/rend">Rend</a></h4>\n<ul><li>Fixed Quicksilver Reload dealing bonus multiple times with Rend</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Drifter',
		ability: 'Rend'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n<ul><li>Bullet damage increased from 12.2+0.44 to 12.6+0.5</li></ul>\n')} <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n')} <ul><li>${html('Kinetic Pulse cooldown increased from 22s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Kinetic Pulse cooldown increased from 22s to 26s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Kinetic Pulse damage increased from 90 to 115')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Kinetic Pulse damage increased from 90 to 115'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Kinetic Pulse range reduced from 20m to 16m')}</li> <li>${html('Kinetic Pulse range no longer increases with spirit scaling')}</li> <li>${html('Kinetic Pulse spirit scaling increased from 1.7 to 2.1')}</li> <li>${html('Kinetic Pulse T1 changed from &quot;35% Move Slow and -30% Fire Rate&quot; to &quot;+1 Charge&quot;')}</li> <li>${html('Kinetic Pulse T2 changed from &quot;+30% Bullet Damage for 8s&quot; to &quot;Reduces enemy Bullet Resistance by -18% and Move Speed by -30% for 4s&quot;')}</li> <li>${html('Kinetic Pulse T3 changed from &quot;+104 Damage and +1 Charge&quot; to &quot;+135 Damage and +16m Cast Range&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n<ul><li>Quantum Entanglement no longer grants +26% Fire Rate</li><li>Quantum Entanglement no longer reloads ammo</li><li>Quantum Entanglement base ability now restores 1 stamina</li><li>Quantum Entanglement ally distance increased from 10m to 13m</li><li>Quantum Entanglement range increased from 9m to 10m</li><li>Quantum Entanglement T1 increased from +4m Range to +6m</li><li>Quantum Entanglement T2 changed from &quot;+22% Fire Rate&quot; to &quot;-6s Cooldown&quot;</li><li>Quantum Entanglement T3 changed from &quot;-5s Cooldown and +120% Ammo&quot; to &quot;Dispells non-ult debuffs for you and your allies&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n')} <ul><li>${html('Rejuvenating Aurora cooldown increased from 45s to 48s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Rejuvenating Aurora cooldown increased from 45s to 48s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Rejuvenating Aurora now has a 1s linger on allies')}</li> <li>${html('Rejuvenating Aurora now lets you jump while using it')}</li> <li>${html('Rejuvenating Aurora T1 changed from &quot;+4 Move Speed for 8s after full channel&quot; to &quot;Aura provides +4 Move Speed during channel&quot;')}</li> <li>${html('Rejuvenating Aurora T2 cooldown from -14s to -20s')}</li> <li>${html('Rejuvenating Aurora T2 now also increases duration by 1s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity no longer does 1.5% Max Health DPS</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity-dps">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity DPS change history</a></p>\n<h4 id="singularity-dps"><a href="/ability/singularity">Singularity DPS</a></h4>\n<ul><li>Singularity DPS increased from 40 to 75</li><li>Singularity DPS spirit scaling increased from 0.19 to 0.28</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity-1"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity T3 increased from 4% Max Health DPS to 5.5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Ammo increased from 18 to 20</li></ul>\n')} <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse-1"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Kinetic Pulse spirit scaling reduced from 2.1 to 1.8</li><li>Kinetic Pulse width increased from 5m to 5.5m</li><li>Kinetic Pulse T3 increased from +16m Range to +20m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement-1"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n<ul><li>Quantum Entanglement T3 now also replenishes 1 charge for charged abilities (half effect on allies)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity-2"><a href="/ability/singularity">Singularity</a></h4>\n<ul><li>Singularity T3 Max health as damage increased from 5.5% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero graves">${html('\n<p><a href="/hero/graves"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Graves patch history</a></p>\n<h3 id="graves"><a href="/hero/graves">Graves</a></h3>\n')} <div class="ability grasping-hands">${html('\n<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands change history</a></p>\n<h4 id="grasping-hands"><a href="/ability/grasping-hands">Grasping Hands</a></h4>\n<ul><li>Grasping Hands is now set up to work through proper alternate cast methods and be more responsive</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Grasping Hands'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grasping-hands-immobilize">${html('\n<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands Immobilize change history</a></p>\n<h4 id="grasping-hands-immobilize"><a href="/ability/grasping-hands">Grasping Hands Immobilize</a></h4>\n<ul><li>Grasping Hands Immobilize duration reduced from 1.5s to 1.25s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Grasping Hands Immobilize'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grasping-hands">${html('\n<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands change history</a></p>\n<h4 id="grasping-hands-1"><a href="/ability/grasping-hands">Grasping Hands</a></h4>\n')} <ul><li>${html('Grasping Hands cooldown reduced from 38s to 34s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Graves',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Grasping Hands cooldown reduced from 38s to 34s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Grasping Hands T2 changed from &quot;+0.75s Immobilize Duration&quot; to &quot;+90 Damage and +10m Wall Length&quot;')}</li> <li>${html('Grasping Hands T3 changed from &quot;+15m Wall Length and -10s Cooldown&quot; to &quot;+1s Immobilize Duration and -12s Cooldown&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Grasping Hands'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jar-of-dead">${html('\n<p><a href="/ability/jar-of-dead"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jar of Dead change history</a></p>\n<h4 id="jar-of-dead"><a href="/ability/jar-of-dead">Jar of Dead</a></h4>\n<ul><li>Jar of Dead spirit scaling increased from 0.25 to 0.35</li><li>Jar of Dead health per boon increased from 1 to 1.3</li><li>Jar of Dead fixed colliding with the world sometimes</li><li>Jar of Dead T2 now increases duration by +4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Jar of Dead'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grasping-hands">${html('\n<p><a href="/ability/grasping-hands"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grasping Hands change history</a></p>\n<h4 id="grasping-hands-2"><a href="/ability/grasping-hands">Grasping Hands</a></h4>\n<ul><li>Grasping Hands deploy time reduced from 0.7s to 0.6s</li><li>Grasping Hands T3 changed from &quot;+1s Immobilize and -12s Cooldown&quot; to &quot;+1s Immobilize and +2 Ghouls Summoned&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Grasping Hands'
	});
	$$renderer.push(
		`<!----></div> <div class="ability essence-theft">${html('\n<p><a href="/ability/essence-theft"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_siphon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Theft change history</a></p>\n<h4 id="essence-theft"><a href="/ability/essence-theft">Essence Theft</a></h4>\n<ul><li>Essence Theft T3 fixed to latch onto targets nearby more readily</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Essence Theft'
	});
	$$renderer.push(
		`<!----></div> <div class="ability borrowed-decree">${html('\n<p><a href="/ability/borrowed-decree"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Borrowed Decree change history</a></p>\n<h4 id="borrowed-decree"><a href="/ability/borrowed-decree">Borrowed Decree</a></h4>\n<ul><li>Borrowed Decree now summons 2 Ghouls on cast</li><li>Borrowed Decree T3 no longer summons 3 Ghouls on cast</li><li>Borrowed Decree T3 increased from +5% Current Health to +6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Graves',
		ability: 'Borrowed Decree'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n<ul><li>Spirit per boon reduced from 1.1 to 0.5</li></ul>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger Sleep move speed reduced from 2m/s to 1.5m/s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger-wake-up">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger Wake Up change history</a></p>\n<h4 id="sleep-dagger-wake-up"><a href="/ability/sleep-dagger">Sleep Dagger Wake Up</a></h4>\n<ul><li>Sleep Dagger Wake Up delay no longer increases with spirit scaling</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger Wake Up'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger-1"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n')} <ul><li>${html('Sleep Dagger cooldown increased from 26s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Sleep Dagger cooldown increased from 26s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger-sleep">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger Sleep change history</a></p>\n<h4 id="sleep-dagger-sleep"><a href="/ability/sleep-dagger">Sleep Dagger Sleep</a></h4>\n<ul><li>Sleep Dagger Sleep duration reduced from 3s to 2.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger Sleep'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger-2"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep Dagger T1 changed from &quot;Removes 1 Stamina&quot; to &quot;-8% Bullet Resist Reduction for 6s&quot;</li><li>Sleep Dagger T2 changed from &quot;-12s Cooldown and -60% Stamina for 6s&quot; to &quot;-15s Cooldown&quot;</li><li>Sleep Dagger T3 changed from &quot;-12% Bullet Resist and -35% Fire Rate for 6s on wakeup&quot; to &quot;+0.75s Sleep Duration. -50% Move and Dash Slow for 2.5s on wakeup&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n')} <ul><li>${html('Smoke Bomb cooldown increased from 30s to 33s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 6,
		bulletIndex: 0,
		text: 'Smoke Bomb cooldown increased from 30s to 33s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Smoke Bomb duration spirit scaling reduced from 0.18 to 0.08')}</li> <li>${html('Smoke Bomb no longer has base +2m Invis Sprint Speed')}</li> <li>${html('Smoke Bomb T1 increased from +5m Invis Sprint Speed to +7m')}</li> <li>${html('Smoke Bomb T2 changed from &quot;+10% Bullet Lifesteal&quot; to &quot;Enables 2 Ability Charges&quot;')}</li> <li>${html('Smoke Bomb T3 changed from &quot;Enable 2 Charges and Grants +0.5s of Invincibility&quot; to &quot;Dispels non-ult debuffs and grants 30% Lifesteal for 5s&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fixation">${html('\n<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>\n<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>\n<ul><li>Fixation reduced from +0.2 Weapon Damage per stack to +0.18</li><li>Fixation T1 spirit scaling increased from 0.37 to 0.8</li><li>Fixation T1 reduced from +50 Spirit Damage to +40</li><li>Fixation T3 increased from +0.12 Weapon Damage to +0.14</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Fixation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance Fire Rate bonus reduced from 30% to 20%</li><li>Bullet Dance base ability now has 60% Evasion</li><li>Bullet Dance duration spirit scaling increased from 0.06 to 0.08</li><li>Bullet Dance Bonus Bullet Damage reduced from 10 to 7</li><li>Bullet Dance T1 increased from +4 Bullet Damage to +7</li><li>Bullet Dance T2 now also increases Fire Rate by +10%</li><li>Bullet Dance T3 no longer adds 60% Bullet Evasion</li><li>Bullet Dance T3 now also fires at an additional target</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability napalm">${html('\n<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Napalm change history</a></p>\n<h4 id="napalm"><a href="/ability/napalm">Napalm</a></h4>\n')} <ul><li>${html('Napalm damage reduced from 46 to 40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Napalm damage reduced from 46 to 40'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Napalm damage spirit scaling increased from 0.3 to 0.6')}</li> <li>${html('Napalm amplified damage taken reduced from 20% to 16%')}</li> <li>${html('Napalm T2 lifesteal increased from 10% to 15%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Napalm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flame-dash-dps">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash DPS change history</a></p>\n<h4 id="flame-dash-dps"><a href="/ability/flame-dash">Flame Dash DPS</a></h4>\n<ul><li>Flame Dash DPS spirit scaling increased from 0.8 to 1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n<ul><li>Flame Dash T1 changed from &quot;-25% Fire Rate&quot; to &quot;-12s Cooldown&quot;</li><li>Flame Dash T2 DPS reduced from +27 to +20</li><li>Flame Dash T2 DPS now also increases trail duration by 1s</li><li>Flame Dash T3 no longer reduces cooldown by 15s</li><li>Flame Dash T3 now also grants +1 Charge</li><li>Flame Dash T3 time between charges reduced from 20s to 14s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Melee can now buildup afterburn (20% for light melee, 35% for heavy)</li><li>Afterburn T1 changed from &quot;-20% Spirit Damage&quot; to &quot;+14 DPS&quot;</li><li>Afterburn T2 changed from +1s Burn Duration to -35% Spirit Damage</li><li>Afterburn T3 changed from &quot;+23 DPS&quot; to &quot;+3s Max Burn Duration&quot; (Base duration is the same, but can buildup after igniting to grow to max burn duration, abilities only refresh up to the base)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability concussive-combustion">${html('\n<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>\n<h4 id="concussive-combustion"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>\n')} <ul><li>${html('Concussive Combustion cast now causes camera to move back a bit')}</li> <li>${html('Concussive Combustion delay increased from 3s to 3.25s')}</li> <li>${html('Concussive Combustion radius reduced from 13m to 12m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		groupIndex: 4,
		bulletIndex: 2,
		text: 'Concussive Combustion radius reduced from 13m to 12m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Concussive Combustion cooldown increased from 140s to 165s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		groupIndex: 4,
		bulletIndex: 3,
		text: 'Concussive Combustion cooldown increased from 140s to 165s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Concussive Combustion damage reduced from 150 to 125')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		groupIndex: 4,
		bulletIndex: 4,
		text: 'Concussive Combustion damage reduced from 150 to 125'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Concussive Combustion T1 changed from &quot;-35s Cooldown&quot; to &quot;+100 Damage&quot;')}</li> <li>${html('Concussive Combustion T2 changed from &quot;+0.5s Stun and +3m Radius&quot; to &quot;-65s Cooldown and +65% Explosion Heal&quot;')}</li> <li>${html('Concussive Combustion T3 changed from &quot;+94 Damage and Heal for 70% damage&quot; to &quot;+0.75s Stun and +10m Radius&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Concussive Combustion'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Reload time reduced from 2.491 to 2.25</li></ul>\n')} <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash-1"><a href="/ability/flame-dash">Flame Dash</a></h4>\n<ul><li>Flame Dash speed now moves faster by the same amount of speed above your base</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability concussive-combustion">${html('\n<p><a href="/ability/concussive-combustion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Concussive Combustion change history</a></p>\n<h4 id="concussive-combustion-1"><a href="/ability/concussive-combustion">Concussive Combustion</a></h4>\n<ul><li>Concussive Combustion T2 increased from +65% Explosion Lifesteal to +85%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Concussive Combustion'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Now has -10% Gravity</li><li>Bullet damage reduced from 4.59+0.12/boon to 4.45+0.06/boon</li></ul>\n')} <div class="ability entangling-thorns">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Thorns change history</a></p>\n<h4 id="entangling-thorns"><a href="/ability/entangling-thorns">Entangling Thorns</a></h4>\n<ul><li>Kudzu Bomb renamed to Entangling Thorns</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Entangling Thorns'
	});
	$$renderer.push(
		`<!----></div> <div class="ability entangling-thorns-recharge-time">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Thorns Recharge Time change history</a></p>\n<h4 id="entangling-thorns-recharge-time"><a href="/ability/entangling-thorns">Entangling Thorns Recharge Time</a></h4>\n<ul><li>Entangling Thorns Recharge Time reduced from 8s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Entangling Thorns Recharge Time'
	});
	$$renderer.push(
		`<!----></div> <div class="ability entangling-thorns">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Thorns change history</a></p>\n<h4 id="entangling-thorns-1"><a href="/ability/entangling-thorns">Entangling Thorns</a></h4>\n<ul><li>Entangling Thorns spirit scaling reduced from 0.65 to 0.55</li><li>Entangling Thorns T2 changed from &quot;+2s Duration&quot; to &quot;+2m Radius and increases spirit scaling by +0.5&quot;</li><li>Entangling Thorns T3 changed from &quot;+36 DPS and +2m Radius&quot; to &quot;Entangles enemies that remain in it for 2s. Lasts 1.6s&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Entangling Thorns'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Watcher&#x27;s Covenant renamed to Kudzu Connection</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-connection-fire-rate">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection Fire Rate change history</a></p>\n<h4 id="kudzu-connection-fire-rate"><a href="/ability/kudzu-connection">Kudzu Connection Fire Rate</a></h4>\n<ul><li>Kudzu Connection Fire Rate spirit scaling reduced from 0.25 to 0.18</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection Fire Rate'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-connection-bullet-lifesteal">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection Bullet Lifesteal change history</a></p>\n<h4 id="kudzu-connection-bullet-lifesteal"><a href="/ability/kudzu-connection">Kudzu Connection Bullet Lifesteal</a></h4>\n<ul><li>Kudzu Connection Bullet Lifesteal spirit scaling reduced from 0.19 to 0.15</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection Bullet Lifesteal'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection-1"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Kudzu Connection T1 changed from &quot;+8% Fire Rate&quot; to &quot;+2m Move Speed bonus&quot;</li><li>Kudzu Connection T2 changed from &quot;+2m Move Speed Bonus&quot; to &quot;+8% Fire Rate and +8% Bullet Lifesteal&quot;</li><li>Kudzu Connection T3 changed from &quot;+1 Tether Count&quot; to &quot;Ability is now always active&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>\n')} <ul><li>${html('Stone Form cooldown increased from 37s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		groupIndex: 8,
		bulletIndex: 0,
		text: 'Stone Form cooldown increased from 37s to 40s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Stone Form damage spirit scaling reduced from 1.5 to 0.8')}</li> <li>${html('Stone Form T1 changed from &quot;-19s cooldown&quot; to &quot;+7% Max Health Heal&quot;')}</li> <li>${html('Stone Form T2 changed from &quot;+68 Damage and +0.5s Stun&quot; to &quot;-25s Cooldown&quot;')}</li> <li>${html('Stone Form T3 changed from &quot;+13% Max Health Heal&quot; to &quot;+1s Stun and Increased Spirit Scaling (2.0)&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop cast time removed. Instead, if you take damage the ability will be unable to be used for 3.5s</li><li>Air Drop spirit damage scaling reduced from 2.3 to 1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop-cooldown">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop Cooldown change history</a></p>\n<h4 id="air-drop-cooldown"><a href="/ability/air-drop">Air Drop Cooldown</a></h4>\n<ul><li>Air Drop Cooldown reduced from 100s to 65s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop Cooldown'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop-1"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop duration increased from 16s to 21s</li><li>Air Drop base/max speed increased from 11/18m to 10/22m</li><li>Air Drop bomb radius increased from 14m to 20m</li><li>Air Drop buff duration reduced from 12s to 8s</li><li>Air Drop ally cast range increased from 14m to 18m</li><li>Air Drop now grants you and your ally +20% Outgoing Damage after dropping</li><li>Air Drop bomb no longer has a fast explode expanding behavior</li><li>Air Drop bomb no longer causes a knockup</li><li>Air Drop bomb no longer slows on explode by default</li><li>Air Drop bomb no longer provides barrier by default</li><li>Air Drop T1 changed from &quot;-20% Bullet Resist on enemies hit for 8s&quot; to &quot;Grants you and ally 300 Barrier (+1.0 Spirit Scaling)&quot; Lasts 12s.</li><li>Air Drop T2 changed from &quot;+200 Barrier and +5m Explode Radius&quot; to &quot;Explode applies 50% Slow for 3s&quot;</li><li>Air Drop T3 now also increases damage scaling by +1.5 and barrier scaling by +1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div> <div class="ability entangling-thorns">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Entangling Thorns change history</a></p>\n<h4 id="entangling-thorns-2"><a href="/ability/entangling-thorns">Entangling Thorns</a></h4>\n<ul><li>Entangling Thorns spirit scaling reduced from 0.55 to 0.45</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Entangling Thorns'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet damage growth increased from 0.06 to 0.08</li></ul>\n')} <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection-2"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Kudzu Connection now only gives you half the bonus if you aren&#x27;t connected to an ally</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop-2"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Air Drop damage spirit scaling reduced from 1 to 0.7</li><li>Air Drop T1 barrier spirit scaling reduced from 1 to 0.7</li><li>Air Drop T2 slow reduced from 50% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form-1"><a href="/ability/stone-form">Stone Form</a></h4>\n<ul><li>Stone Form spirit scaling reduced from 0.8 to 0.6</li><li>Stone Form T3 spirit scaling reduced from +2 to +1.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop-3"><a href="/ability/air-drop">Air Drop</a></h4>\n')} <ul><li>${html('Air Drop ally cast range increased from 18m to 22m')}</li> <li>${html('Air Drop is no longer disabled by damage over time abilities (same as zipline rules)')}</li> <li>${html('Air Drop cooldown increased from 65s to 85s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		groupIndex: 17,
		bulletIndex: 2,
		text: 'Air Drop cooldown increased from 65s to 85s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Air Drop cooldown is reduced by 25% when used on allies')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n')} <ul><li>${html('Frost Grenade now impacts on Ice Path')}</li> <li>${html('Frost Grenade radius reduced from 6.5m to 6m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Frost Grenade radius reduced from 6.5m to 6m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Frost Grenade cooldown increased from 20s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Frost Grenade cooldown increased from 20s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Frost Grenade now comes with 2 charges')}</li> <li>${html('Frost Grenade now heals in the base ability (60 + 0.9 Spirit Scaling)')}</li> <li>${html('Frost Grenade no longer has -40% Stamina regen reduction')}</li> <li>${html('Frost Grenade T1 changed from &quot;+1 Charge&quot; to &quot;Increases damage and heal by +30&quot;')}</li> <li>${html('Frost Grenade T2 changed from &quot;Provides healing 80+1.5&quot; to &quot;Freezes stamina regen and -10s Cooldown&quot;')}</li> <li>${html('Frost Grenade T3 changed from &quot;+144 Damage and -30% Stamina Regen&quot; to &quot;Increases damage and heal spirit scaling by 1.0 and Radius by +2m&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n')} <ul><li>${html('Ice Path is now cancelled on Ability Button Press instead of Space')}</li> <li>${html('Ice Path cooldown increased from 46s to 50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Ice Path cooldown increased from 46s to 50s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Ice Path incline/decline speed increased')}</li> <li>${html('Ice Path T1 changed from &quot;+4 Sprint&quot; to &quot;+2 Move Speed and +35% Bullet Resistance on Ice Path&quot;')}</li> <li>${html('Ice Path T2 increased from -17s Cooldown to -20s')}</li> <li>${html('Ice Path T3 now grants you +35% Spirit Power while on Ice Path')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div> <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Arctic Beam visual clarity on VFX improved</li><li>Arctic Beam now lets you cast Frost Grenade and items while using it</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability arctic-beam-max-fire-rate-reduction">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam Max Fire Rate Reduction change history</a></p>\n<h4 id="arctic-beam-max-fire-rate-reduction"><a href="/ability/arctic-beam">Arctic Beam Max Fire Rate Reduction</a></h4>\n<ul><li>Arctic Beam Max Fire Rate Reduction reduced from -35% to -20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam Max Fire Rate Reduction'
	});
	$$renderer.push(
		`<!----></div> <div class="ability arctic-beam-max-slow">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam Max Slow change history</a></p>\n<h4 id="arctic-beam-max-slow"><a href="/ability/arctic-beam">Arctic Beam Max Slow</a></h4>\n<ul><li>Arctic Beam Max Slow reduced from -40% to -20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam Max Slow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam-1"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n')} <ul><li>${html('Arctic Beam spirit scaling reduced from 0.8 to 0.5')}</li> <li>${html('Arctic Beam cooldown increased from 25s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 5,
		bulletIndex: 1,
		text: 'Arctic Beam cooldown increased from 25s to 28s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Arctic Beam T1 changed from &quot;-7s Cooldown&quot; to &quot;Increases Move Slow and Fire Rate Reduction by -25%&quot;')}</li> <li>${html('Arctic Beam T2 changed from &quot;+33 DPS&quot; to &quot;+20 DPS and +0.6 Spirit Scaling&quot;')}</li> <li>${html('Arctic Beam T3 now also reduces cooldown by 13s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n<ul><li>Frozen Shelter can now be canceled first without canceling Ice Beam</li><li>Frozen Shelter is now 8m unit target, creates the dome around the center of both heroes. Can be self casted to create it around yourself.</li><li>Frozen Shelter duration reduced from 5.25s to 5s</li><li>Frozen Shelter T1 changed from &quot;-35% Enemy Fire Rate&quot; to &quot;-25s Cooldown&quot;</li><li>Frozen Shelter T2 increased from +1s to +1.5s</li><li>Frozen Shelter T3 now also dispels non-ult debuffs on cast (affects you and allies)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade-1"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n')} <ul><li>${html('Frost Grenade radius increased from 6m to 6.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 7,
		bulletIndex: 0,
		text: 'Frost Grenade radius increased from 6m to 6.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Frost Grenade damage spirit scaling reduced from 0.914 to 0.8')}</li> <li>${html('Frost Grenade T3 damage spirit scaling reduced from 1.0 to 0.9')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path-1"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Ice Path T2 increased from -20s Cooldown to -25s</li><li>Ice Path T3 now also grants +20 Spirit Power</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter-1"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n<ul><li>Frozen Shelter T3 increased from 50 Health Regen to 65</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability essence-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>\n<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>\n')} <ul><li>${html('Essence Bomb self damage changed from 30 + 1.8 scaling to 30% of the damage (base is 90 + 1.2 scaling)')}</li> <li>${html('Essence Bomb radius reduced from 9m to 7m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Essence Bomb radius reduced from 9m to 7m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Essence Bomb cooldown reduced from 14.5s to 14s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Essence Bomb cooldown reduced from 14.5s to 14s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Essence Bomb T1 increased from -4s to -5s')}</li> <li>${html('Essence Bomb T2 also increases radius by +2m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Essence Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability life-drain">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>\n<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>\n')} <ul><li>${html('Life Drain cooldown increased from 30s to 34s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Life Drain cooldown increased from 30s to 34s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Life Drain break range reduced from 30m to 28m')}</li> <li>${html('Life Drain T1 DPS increased from +16.2 to +18')}</li> <li>${html('Life Drain T2 duration increased from +2s to +2.5s')}</li> <li>${html('Life Drain T3 charges increased from +1 to +2')}</li> <li>${html('Life Drain T3 now also increases spirit scaling by +0.3')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain'
	});
	$$renderer.push(
		`<!----></div> <div class="ability soul-exchange">${html('\n<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>\n<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>\n')} <ul><li>${html('Soul Exchange cast time reduced from 0.2s to 0.1s')}</li> <li>${html('Soul Exchange post cast hold time reduced from 0.7s to 0.2s')}</li> <li>${html('Soul Exchange T1 cooldown increased from -35s to -60s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 2,
		bulletIndex: 2,
		text: 'Soul Exchange T1 cooldown increased from -35s to -60s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Soul Exchange T2 changed from &quot;On Cast: +35% Fire Rate for 8s&quot; to &quot;Silences enemies within 25m for 3s&quot;')}</li> <li>${html('Soul Exchange T3 changed from &quot;Silences enemies within 25m for 3s&quot; to &quot;On Cast: +60 Spirit Power, +40% Fire Rate and +50% Spirit Resistance for 8s&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Soul Exchange'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n<ul><li>Increased Sparkles</li></ul>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Fixed Ground Strike against players brought down from mid air not doing damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple">${html('\n<p><a href="/ability/grapple"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple change history</a></p>\n<h4 id="grapple"><a href="/ability/grapple">Grapple</a></h4>\n<ul><li>Grapple T2 weapon damage increased from +6 to +7</li><li>Grapple T3 changed from &quot;+20% Fire Rate&quot; to &quot;+60% Air Control and +1 Stamina on Usage&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Grapple'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog"><a href="/ability/flog">Flog</a></h4>\n')} <ul><li>${html('Flog cooldown increased from 24s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Flog cooldown increased from 24s to 26s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flog-attack-angle">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog Attack Angle change history</a></p>\n<h4 id="flog-attack-angle"><a href="/ability/flog">Flog Attack Angle</a></h4>\n<ul><li>Flog Attack Angle no longer increases with Spirit Power</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog Attack Angle'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog-1"><a href="/ability/flog">Flog</a></h4>\n')} <ul><li>${html('Flog heal vs heroes reduced from 60% to 50%')}</li> <li>${html('Flog T2 increased from -12s Cooldown to -16s')}</li> <li>${html('Flog T2 now also reduces Fire Rate by 30%')}</li> <li>${html('Flog T3 no longer reduces Fire Rate')}</li> <li>${html('Flog T3 damage reduced from +86 to +80')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 5,
		bulletIndex: 4,
		text: 'Flog T3 damage reduced from +86 to +80'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flog T3 now also increases Attack Angle by 40 and Heal by +20%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n')} <ul><li>${html('Fixed Death Slam camera sometimes being obstructed')}</li> <li>${html('Death Slam throw distance no longer scales with Spirit Power (was 0.3)')}</li> <li>${html('Death Slam cooldown increased from 145s to 150s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 6,
		bulletIndex: 2,
		text: 'Death Slam cooldown increased from 145s to 150s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Death Slam T1 throw distance increased from +8m to +12m')}</li> <li>${html('Death Slam T2 cooldown increased from -25s to -40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 6,
		bulletIndex: 4,
		text: 'Death Slam T2 cooldown increased from -25s to -40s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Death Slam T3 now also increases cast range by +10m')}</li> <li>${html('Death Slam throw range increased from 12m to 14m')}</li> <li>${html('Death Slam throw range now scales with spirit power (+0.14)')}</li> <li>${html('Death Slam T3 cast range reduced from +10m to +6m')}</li> <li>${html('Death Slam T3 stun increased from 1s to 1.2s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n<ul><li>Stamina speed bucket 3 to 2</li><li>Bullet damage reduced from 6.72 + 0.2/boon to 6.0 + 0.16/boon</li></ul>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Mini Turret duration increased from 24s to 35s</li><li>Mini Turret base health and health growth reduced by 40%</li><li>Mini Turrets initial fading resist start value increased from 60% to 80%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n<ul><li>Mini Turrets now have 35% melee resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret-1"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Mini Turret tracking, angle and projectile speeds significantly improved</li><li>Mini Turret on the minimap now flash/turn red when they are attacking</li><li>Mini Turret T1 changed from &quot;Turrets apply 25% slow&quot; to &quot;+10m Attack Range and +10 DPS&quot;</li><li>Mini Turret T2 changed from &quot;+10m Attack Range and + 10% Fire Rate&quot; to &quot;+2 Charges&quot;</li><li>Mini Turret T3 changed from &quot;+38 Turret DPS and +14s Turret Lifetime&quot; to &quot;+30% Turret Fire Rate and +12s Turret Lifetime&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n')} <ul><li>${html('Medicinal Specter duration no longer scales with spirit power')}</li> <li>${html('Medicinal Specter radius no longer scales with spirit power')}</li> <li>${html('Medicinal Specter regen now scales with spirit power (+0.3)')}</li> <li>${html('Medicinal Specter cooldown increased from 48s to 50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 4,
		bulletIndex: 3,
		text: 'Medicinal Specter cooldown increased from 48s to 50s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Medicinal Specter no longer provides +15% Stamina Recovery')}</li> <li>${html('Medicinal Specter T1 changed from &quot;+30% Fire Rate&quot; to &quot;+40% Spirit Resistance&quot;')}</li> <li>${html('Medicinal Specter T2 increased from -17s Cooldown to -20s')}</li> <li>${html('Medicinal Specter T2 now also increases Stamina Recovery by +100%')}</li> <li>${html('Medicinal Specter T3 regen reduced from 2.5% Max HP to 2%')}</li> <li>${html('Medicinal Specter T3 now also increases radius by 3m')}</li> <li>${html('Medicinal Specter T3 now also increases duration by 1s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall that is midcast will now fire when you are interrupted, rather than continue to expand outward</li><li>Spectral Wall segments can now be destroyed with 2 heavy melee hits (destroys an individual segment)</li><li>Spectral Wall min range reduced from 6m to 5m</li><li>Spectral Wall applies it&#x27;s slow to enemies it passes through while being summoned</li><li>Spectral Wall T1 no longer drains 1 stamina</li><li>Spectral Wall T1 Damage Amp increased from 15% to 20%</li><li>Spectral Wall T2 also increases wall duration by +2s</li><li>Spectral Wall T3 changed from &quot;0.75s Stun on Impact&quot; to &quot;Creates 2 Turrets for 8s and increases slow by 30%&quot; (creates them on the side facing you spread along the wall)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n')} <ul><li>${html('Heavy Barrage duration reduced from 13s to 8s')}</li> <li>${html('Heavy Barrage minimum range reduced from 9m to 8.5m')}</li> <li>${html('Heavy Barrage T1 tooltip updated to clarify that it also reduces dash distance')}</li> <li>${html('Heavy Barrage T1 move slow reduced from 40% to 30%')}</li> <li>${html('Heavy Barrage T1 dash slow increased from 20% to 30%')}</li> <li>${html('Heavy Barrage T1 slow duration reduced from 2s to 1.5s')}</li> <li>${html('Heavy Barrage T2 cooldown reduction increased from -45s to -55s')}</li> <li>${html('Heavy Barrage T2 now also increases duration by 6s')}</li> <li>${html('Heavy Barrage T3 damage increased from +21 to +25')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 6,
		bulletIndex: 8,
		text: 'Heavy Barrage T3 damage increased from +21 to +25'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Heavy Barrage T3 spirit scaling from +0.2 to +0.25')}</li> <li>${html('Heavy Barrage T3 now also increases explosion radius by 2m')}</li> <li>${html('Heavy Barrage radius reduced from 5m to 4.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 6,
		bulletIndex: 11,
		text: 'Heavy Barrage radius reduced from 5m to 4.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Heavy Barrage T1 slow duration reduced from 1.5s to 1s')}</li> <li>${html('Heavy Barrage T3 spirit scaling reduced from +0.25 to +0.2')}</li> <li>${html('Heavy Barrage T3 damage reduced from +25 to +22')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 6,
		bulletIndex: 14,
		text: 'Heavy Barrage T3 damage reduced from +25 to +22'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet damage increased from 6.0+0.15/boon to 6.2+0.16/boon</li></ul>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret-2"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Mini Turret attack range increased from 25m to 30m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability medicinal-specter">${html('\n<p><a href="/ability/medicinal-specter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Medicinal Specter change history</a></p>\n<h4 id="medicinal-specter-1"><a href="/ability/medicinal-specter">Medicinal Specter</a></h4>\n')} <ul><li>${html('Medicinal Specter radius increased from 5m to 5.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 9,
		bulletIndex: 0,
		text: 'Medicinal Specter radius increased from 5m to 5.5m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Medicinal Specter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall-1"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Spectral Wall duration increased from 4.5s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage-1"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n')} <ul><li>${html('Heavy Barrage cooldown increased from 165s to 175s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 11,
		bulletIndex: 0,
		text: 'Heavy Barrage cooldown increased from 165s to 175s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Heavy Barrage spirit scaling reduced from 0.23 to 0.2')}</li> <li>${html('Heavy Barrage T3 spirit scaling reduced from 0.2 to 0.16')}</li> <li>${html('Heavy Barrage T3 DPS reduced from 22 to 18')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mina">${html('\n<p><a href="/hero/mina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mina patch history</a></p>\n<h3 id="mina"><a href="/hero/mina">Mina</a></h3>\n<ul><li>Stamina cooldown increased from 3.9s to 4.2s</li></ul>\n')} <div class="ability rake">${html('\n<p><a href="/ability/rake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_rake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rake change history</a></p>\n<h4 id="rake"><a href="/ability/rake">Rake</a></h4>\n')} <ul><li>${html('Rake cooldown increased from 10s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Rake cooldown increased from 10s to 16s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Rake hero hit missing health as damage increased from 3% to 5%')}</li> <li>${html('Rake heal per kill reduced from 30 to 25')}</li> <li>${html('Rake heal per kill spirit scaling reduced from 0.43 to 0.3')}</li> <li>${html('Rake T1 changed from &quot;+20 Heal Per Kill&quot; to &quot;+60 Damage&quot;')}</li> <li>${html('Rake T2 changed from &quot;+54 Damage and +1.0 Heal Per Kill spirit scaling&quot; to &quot;+30 Heal Per Kill and -8s Cooldown&quot;')}</li> <li>${html('Rake T3 now also provides +1.2 Heal Per Kill spirit scaling')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Rake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sanguine-retreat">${html('\n<p><a href="/ability/sanguine-retreat"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_sanguine_retreat.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sanguine Retreat change history</a></p>\n<h4 id="sanguine-retreat"><a href="/ability/sanguine-retreat">Sanguine Retreat</a></h4>\n<ul><li>Sanguine Retreat cast range reduced 10m to 9m</li><li>Sanguine Retreat recast window increased from 3s to 3.5s</li><li>Sanguine Retreat T1 changed from &quot;+3m Cast Range&quot; to &quot;+20% Fire Rate and 8 Bullets&quot;</li><li>Sanguine Retreat T2 changed from &quot;+25% Fire Rate and 8 Bullets&quot; to &quot;-10s Cooldown&quot;</li><li>Sanguine Retreat T3 changed from &quot;-12s Cooldown&quot; to &quot;+1 Recast&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Sanguine Retreat'
	});
	$$renderer.push(
		`<!----></div> <div class="ability love-bites-cooldown">${html('\n<p><a href="/ability/love-bites"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_love_bites.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Love Bites Cooldown change history</a></p>\n<h4 id="love-bites-cooldown"><a href="/ability/love-bites">Love Bites Cooldown</a></h4>\n<ul><li>Love Bites Cooldown increased from 8s to 10s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Love Bites Cooldown'
	});
	$$renderer.push(
		`<!----></div> <div class="ability love-bites">${html('\n<p><a href="/ability/love-bites"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_love_bites.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Love Bites change history</a></p>\n<h4 id="love-bites"><a href="/ability/love-bites">Love Bites</a></h4>\n')} <ul><li>${html('Love Bites damage reduced from 6 to 4')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 4,
		bulletIndex: 0,
		text: 'Love Bites damage reduced from 6 to 4'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Love Bites damage spirit scaling increased from 0.06 to 0.09')}</li> <li>${html('Love Bites bonus damage reduced from 55 to 45')}</li> <li>${html('Love Bites bonus damage spirit scaling increased from 1.6 to 1.85')}</li> <li>${html('Love Bites T1 changed from &quot;On Proc: +4 m/s Move Speed for 3s&quot; to &quot;On Proc: 30% Slow for 3s&quot;')}</li> <li>${html('Love Bites T2 Damage/Bonus reduced from 3.6/50 to 3/45')}</li> <li>${html('Love Bites T3 changed from &quot;On Proc: -1 Stamina and 30% slow for 3s&quot; to &quot;-4s Cooldown and On Proc +25% Fire Rate for 5s&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Love Bites'
	});
	$$renderer.push(
		`<!----></div> <div class="ability nox-nostra">${html('\n<p><a href="/ability/nox-nostra"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_nox_nostra.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Nox Nostra change history</a></p>\n<h4 id="nox-nostra"><a href="/ability/nox-nostra">Nox Nostra</a></h4>\n')} <ul><li>${html('Nox Nostra cooldown increased from 115s to 130s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Nox Nostra cooldown increased from 115s to 130s'
	});
	$$renderer.push(`<!----></li> <li>${html('Nox Nostra damage reduced from 6 to 5.6')} `);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 5,
		bulletIndex: 1,
		text: 'Nox Nostra damage reduced from 6 to 5.6'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Nox Nostra T1 increased from +1.8 to +2.2')}</li> <li>${html('Nox Nostra T2 cooldown increased from -40s to -55s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mina',
		groupIndex: 5,
		bulletIndex: 3,
		text: 'Nox Nostra T2 cooldown increased from -40s to -55s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Nox Nostra'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rake">${html('\n<p><a href="/ability/rake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_rake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rake change history</a></p>\n<h4 id="rake-1"><a href="/ability/rake">Rake</a></h4>\n<ul><li>Fixed a bug with Rake with how the low hp bonus damage against non-hero targets was dealt (when they were low, the spirit resist didn&#x27;t matter effectively)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Rake'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Float time with umbrella increased from 2.5s to 4s</li></ul>\n')} <div class="ability can">${html('\n<h4 id="can">Can</h4>\n<ul><li>Can now zoom in again to continue floating if you let go of the zoom, as long as the total zoom time is still under the max</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Can'
	});
	$$renderer.push(
		`<!----></div> <div class="ability nox-nostra">${html('\n<p><a href="/ability/nox-nostra"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_nox_nostra.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Nox Nostra change history</a></p>\n<h4 id="nox-nostra-1"><a href="/ability/nox-nostra">Nox Nostra</a></h4>\n<ul><li>Fixed various issues with Nox Nostra bats not hitting things properly (DPS values reduced to compensate for this indirect buff)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mina',
		ability: 'Nox Nostra'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n<ul><li>Bullet damage reduced from 15.2+0.5 to 14.8+0.3</li></ul>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n')} <ul><li>${html('Fire Scarabs no longer have a limited duration to launch each one. Functions as a normal charged ability.')}</li> <li>${html('Fire Scarabs collision and model size increased a bit')}</li> <li>${html('Fire Scarabs base charges reduced from 4 to 2')}</li> <li>${html('Fire Scarabs spirit scaling reduced from 1.0 to 0.8')}</li> <li>${html('Fire Scarabs now immediately steal the health from the target')}</li> <li>${html('Fire Scarabs Max Health steal increased from 45 to 70')}</li> <li>${html('Fire Scarabs changed from -8% Bullet Resist to +10% Damage Amp on that target from any damage you deal')}</li> <li>${html('Fire Scarabs cooldown increased from 40s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 1,
		bulletIndex: 7,
		text: 'Fire Scarabs cooldown increased from 40s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Fire Scarabs T1 changed from &quot;-15s Cooldown&quot; to &quot;+50 Max Health Steal&quot;')}</li> <li>${html('Fire Scarabs T2 changed from &quot;-8% Bullet Resist&quot; to &quot;+2 Charges&quot;')}</li> <li>${html('Fire Scarabs T3 changed from &quot;+63 Max Health Steal&quot; to &quot;+10% Damage Amp and +1.2 Spirit Scaling&quot;')}</li> <li>${html('Fire Scarabs no longer has a reduced effect against non-heroes')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dust-devil">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>\n<h4 id="dust-devil"><a href="/ability/dust-devil">Dust Devil</a></h4>\n<ul><li>Tornado renamed to Dust Devil</li><li>Dust Devil lift duration reduced from 1.0s to 0.4s</li><li>Dust Devil spirit scaling reduced from 0.7 to 0.3</li><li>Dust Devil now slows affected enemies by 30% for 3s</li><li>Dust Devil bullet evasion duration increased from 3.5s to 4s</li><li>Dust Devil bullet evasion increased from 25% to 30%</li><li>Dust Devil T1 changed from &quot;+0.4s Lift Duration&quot; to &quot;+60 Damage&quot;</li><li>Dust Devil T2 changed from &quot;-14s Cooldown&quot; to &quot;-8s Cooldown and +30% Evasion&quot;</li><li>Dust Devil T3 changed from &quot;+20% Bullet&quot; to &quot;Can Recast within 5s. Increases spirit scaling by 1.0&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Dust Devil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n')} <ul><li>${html('Djinn&#x27;s Mark cooldown increased from 2.6s to 3s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 3,
		bulletIndex: 0,
		text: "Djinn's Mark cooldown increased from 2.6s to 3s"
	});
	$$renderer.push(
		`<!----></li> <li>${html('Djinn&#x27;s Mark multiplier duration increased from 4.5s to 5s')}</li> <li>${html('Djinn&#x27;s Mark reveal duration increased from 3s to 6s')}</li> <li>${html('Djinn&#x27;s Mark tooltip rewritten to be based on a &quot;per stack&quot; basis. A stack increases the damage by 200%. (this is just a tooltip change)')}</li> <li>${html('Djinn&#x27;s Mark T1 changed from &quot;60% slow for 0.5s on 2x stack&quot; to &quot;Fading 60% slow for 0.5s&quot;')}</li> <li>${html('Djinn&#x27;s Mark T2 increased from +8.1 Damage to +20')}</li> <li>${html('Djinn&#x27;s Mark T3 cooldown increased from -0.75s to -1s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 3,
		bulletIndex: 6,
		text: "Djinn's Mark T3 cooldown increased from -0.75s to -1s"
	});
	$$renderer.push(
		`<!----></li> <li>${html('Djinn&#x27;s Mark T3 now also stuns for 0.5s at max stacks')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>\n<h4 id="traveler"><a href="/ability/traveler">Traveler</a></h4>\n')} <ul><li>${html('Traveler cooldown reduced from 155s to 145s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 4,
		bulletIndex: 0,
		text: 'Traveler cooldown reduced from 155s to 145s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Traveler can now be cast while on the zipline')}</li> <li>${html('Traveler no longer channels. It now has a 3s delay before teleporting. Taking damage interrupts the ability and puts it on cooldown for 6s.')}</li> <li>${html('Traveler now targets a location on the minimap rather than units. Places you at the ground level of that location.')}</li> <li>${html('Traveler no longer grants +2m Move Speed and +26% Fire Rate')}</li> <li>${html('Traveler T1 changed from &quot;+2m Move Speed and -35s Cooldown&quot; to &quot;3m Move Speed for 12s&quot;')}</li> <li>${html('Traveler T2 changed from &quot;Grants Traveler Buffs to Ally&quot; to &quot;400 Barrier with spirit scaling for 12s&quot;')}</li> <li>${html('Traveler T3 &quot;Unstoppable for 3s&quot; to &quot;-80s Cooldown&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs-1"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n')} <ul><li>${html('Fire Scarabs cooldown reduced from 45s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Fire Scarabs cooldown reduced from 45s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>\n<h4 id="traveler-1"><a href="/ability/traveler">Traveler</a></h4>\n<ul><li>Traveler T1 now also increases Fire Rate by 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs-2"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs no longer does max health steal</li><li>Fire Scarabs now drains life from the enemy, dealing DPS to the enemy and healing you for 8s.</li><li>Fire Scarabs no longer applies +10% Damage Amp</li><li>Fire Scarabs now reduces enemy damage output by 20% (and +15% in T3)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability dust-devil">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Dust Devil change history</a></p>\n<h4 id="dust-devil-1"><a href="/ability/dust-devil">Dust Devil</a></h4>\n')} <ul><li>${html('Dust Devil radius increased from 3.5m to 4m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 8,
		bulletIndex: 0,
		text: 'Dust Devil radius increased from 3.5m to 4m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Dust Devil T3 window to recast increased from 5s to 6s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Dust Devil'
	});
	$$renderer.push(
		`<!----></div> <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark-1"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n<ul><li>Djinn&#x27;s Mark spirit scaling reduced from 0.51 to 0.44</li><li>Djinn&#x27;s Mark debuff visuals improved</li><li>Djinn&#x27;s Mark T1 slow duration increased from 0.5s to 0.8s</li><li>Djinn&#x27;s Mark T2 multiplier duration increased from 2.5s to 3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>\n<h4 id="traveler-2"><a href="/ability/traveler">Traveler</a></h4>\n')} <ul><li>${html('Traveler no longer gets interrupted by non-hero sources nor DOT damage')}</li> <li>${html('Traveler wait time reduced from 3s to 2s')}</li> <li>${html('Traveler interrupt cooldown reduced from 6s to 4s')}</li> <li>${html('Traveler cooldown reduced from 145s to 120s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 10,
		bulletIndex: 3,
		text: 'Traveler cooldown reduced from 145s to 120s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Traveler can now be manually canceled')}</li> <li>${html('Traveler can now also target units')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability scorn">${html('\n<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>\n<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>\n')} <ul><li>${html('Scorn damage reduced from 56 to 50')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Scorn damage reduced from 56 to 50'
	});
	$$renderer.push(`<!----></li> <li>${html('Scorn radius reduced from 10m to 9m')} `);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Scorn radius reduced from 10m to 9m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Scorn spirit scaling increased from 0.42 to 0.75')}</li> <li>${html('Scorn T1 changed from &quot;-3.75s Cooldown&quot; to &quot;+35 Damage&quot;')}</li> <li>${html('Scorn T2 changed from &quot;+21 Damage&quot; to &quot;-5s Cooldown and +1m Radius&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Scorn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability burrow">${html('\n<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>\n<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>\n')} <ul><li>${html('Burrow now lets you enter the tunnels')}</li> <li>${html('Burrow cooldown increased from 37s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Burrow cooldown increased from 37s to 40s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Burrow T1 changed from &quot;+3s Duration&quot; to &quot;+50 Spin DPS&quot;')}</li> <li>${html('Burrow T2 changed from &quot;+68 Spin DPS and +2 Radius&quot; to &quot;+2 Spin Radius and +4s Burrow Time&quot;')}</li> <li>${html('Burrow T3 increased from +2 m/s Move Speed to +4')}</li> <li>${html('Burrow T3 increased from -19s Cooldown to -20s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Burrow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sand-blast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>\n<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>\n')} <ul><li>${html('Sand Blast cooldown reduced from 42s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Sand Blast cooldown reduced from 42s to 40s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Sand Blast duration reduced from 3s to 2.5s')}</li> <li>${html('Sand Blast range reduced from 35m to 25m')}</li> <li>${html('Sand Blast T1 changed from &quot;+1s&quot; to &quot;+50 Damage and +5m Range&quot;')}</li> <li>${html('Sand Blast T2 changed from &quot;-23s Cooldown&quot; to &quot;Slows targets Move Speed and Dash Distance by -25%&quot;')}</li> <li>${html('Sand Blast T3 changed from &quot;Slows targets Move Speed and Dash Distance by -40%&quot; to &quot;+1s Duration and -20s Cooldown&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sand Blast'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n')} <ul><li>${html('Combo cooldown increased from 90s to 150s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Combo cooldown increased from 90s to 150s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo-dps">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo DPS change history</a></p>\n<h4 id="combo-dps"><a href="/ability/combo">Combo DPS</a></h4>\n<ul><li>Combo DPS increased from 35 to 60</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo-1"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Combo T1 changed &quot;+30% Bullet Resist During Combo&quot; to &quot;+100% Lifesteal&quot;</li><li>Combo T2 changed from &quot;+0.7s Duration&quot; to &quot;+60 DPS and +50% Bullet Resist&quot;</li><li>Combo T3 changed from &quot;+32 DPS and 80% Lifesteal&quot; to &quot;+0.7s Duration and -60s Cooldown&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div> <div class="ability scorn">${html('\n<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>\n<h4 id="scorn-1"><a href="/ability/scorn">Scorn</a></h4>\n')} <ul><li>${html('Scorn heal vs non-heroes reduced from 0.5x to 0.35x')}</li> <li>${html('Scorn cooldown increased from 12.5s to 13s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 6,
		bulletIndex: 1,
		text: 'Scorn cooldown increased from 12.5s to 13s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Scorn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo-dps">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo DPS change history</a></p>\n<h4 id="combo-dps-1"><a href="/ability/combo">Combo DPS</a></h4>\n<ul><li>Combo DPS reduced from 60 to 45</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo-2"><a href="/ability/combo">Combo</a></h4>\n')} <ul><li>${html('Combo cooldown reduced from 150s to 140s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 8,
		bulletIndex: 0,
		text: 'Combo cooldown reduced from 150s to 140s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Combo T2 changed from &quot;+60 DPS and +50% Bullet Resist&quot; to &quot;-35s Cooldown and +50% Bullet Resist&quot;')}</li> <li>${html('Combo T3 changed from +0.7s Duration and -60s Cooldown&quot; to &quot;+0.7s Duration and +60 Damage&quot;')}</li> <li>${html('Combo range reduced from 4.8m to 4m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo-dps">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo DPS change history</a></p>\n<h4 id="combo-dps-2"><a href="/ability/combo">Combo DPS</a></h4>\n<ul><li>Combo DPS reduced from 45 to 40</li><li>Combo DPS spirit scaling reduced from 1.2 to 0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo-3"><a href="/ability/combo">Combo</a></h4>\n')} <ul><li>${html('Combo cooldown reduced from 140s to 130s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 10,
		bulletIndex: 0,
		text: 'Combo cooldown reduced from 140s to 130s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Combo T3 DPS reduced from +60 to +50')}</li> <li>${html('Combo T3 now also increases spirit scaling +0.4')}</li> <li>${html('Combo health rescaled from 50 to 30 + 1/Boon (not retroactive)')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paige">${html('\n<p><a href="/hero/paige"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paige patch history</a></p>\n<h3 id="paige"><a href="/hero/paige">Paige</a></h3>\n')} <div class="ability bookwyrm">${html('\n<p><a href="/ability/bookwyrm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bookwyrm change history</a></p>\n<h4 id="bookwyrm"><a href="/ability/bookwyrm">Bookwyrm</a></h4>\n')} <ul><li>${html('Conjure Dragon renamed to Bookwyrm')}</li> <li>${html('Bookwyrm fixed initial location not starting where you click it')}</li> <li>${html('Bookwyrm cooldown increased from 30s to 33s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paige',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Bookwyrm cooldown increased from 30s to 33s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bookwyrm T1 changed from &quot;-5s Cooldown&quot; to &quot;+2s Trail Duration and +1m Width&quot;')}</li> <li>${html('Bookwyrm T2 changed from &quot;+2s Trail Duration&quot; to &quot;-8s Cooldown and +10m Travel Range&quot;')}</li> <li>${html('Bookwyrm T3 Damage/DPS rescaled from 104/27 to 100/30')}</li> <li>${html('Bookwyrm T3 now also grants +1 Charge')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Bookwyrm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability plot-armor">${html('\n<p><a href="/ability/plot-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_defendandfight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Plot Armor change history</a></p>\n<h4 id="plot-armor"><a href="/ability/plot-armor">Plot Armor</a></h4>\n<ul><li>Defend and Fight! renamed to Plot Armor</li><li>Plot Armor barrier spirit scaling reduced from 1.6 to 1.3</li><li>Plot Armor T3 now also increases spirit scaling (+0.3)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Plot Armor'
	});
	$$renderer.push(
		`<!----></div> <div class="ability captivating-read">${html('\n<p><a href="/ability/captivating-read"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_blindinglight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Captivating Read change history</a></p>\n<h4 id="captivating-read"><a href="/ability/captivating-read">Captivating Read</a></h4>\n')} <ul><li>${html('Captivating Read height area no longer increases with range bonuses')}</li> <li>${html('Captivating Read cooldown increased from 25s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paige',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Captivating Read cooldown increased from 25s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Captivating Read immobilize duration reduced from 1.25s to 1s')}</li> <li>${html('Captivating Read T1 cooldown increased from -6s to -11s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paige',
		groupIndex: 2,
		bulletIndex: 3,
		text: 'Captivating Read T1 cooldown increased from -6s to -11s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Captivating Read T2 immobilize duration increased from 0.75s to 1s')}</li> <li>${html('Captivating Read T3 now also increases radius by 1m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Captivating Read'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rallying-charge">${html('\n<p><a href="/ability/rallying-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rallying Charge change history</a></p>\n<h4 id="rallying-charge"><a href="/ability/rallying-charge">Rallying Charge</a></h4>\n<ul><li>Rallying Charge T2 now also reduces cooldown by 30s</li><li>Rallying Charge T3 now also increases Max Amp from +100% to +150%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paige',
		ability: 'Rallying Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n')} <ul><li>${html('Pulse Grenade radius reduced from 6m to 5.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Pulse Grenade radius reduced from 6m to 5.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Pulse Grenade radius increases by +1m per Pulse')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability pulse-grenade-amp-per-stack">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade Amp Per Stack change history</a></p>\n<h4 id="pulse-grenade-amp-per-stack"><a href="/ability/pulse-grenade">Pulse Grenade Amp Per Stack</a></h4>\n<ul><li>Pulse Grenade Amp Per Stack reduced from 6% to 4%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade Amp Per Stack'
	});
	$$renderer.push(
		`<!----></div> <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade-1"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n')} <ul><li>${html('Pulse Grenade cooldown increased from 28s to 32s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Pulse Grenade cooldown increased from 28s to 32s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Pulse Grenade spirit scaling reduced from 0.6 to 0.4')}</li> <li>${html('Pulse Grenade changed from -30% Move Speed for 2s to -20% Time Slow for 0.2s')}</li> <li>${html('Pulse Grenade T1 changed from +0.8s Duration to -12s Cooldown')}</li> <li>${html('Pulse Grenade T2 changed from &quot;-8s Cooldown&quot; to &quot;+20 Pulse Damage and +0.5 Spirit Scaling&quot;')}</li> <li>${html('Pulse Grenade T3 changed from &quot;+36 Pulse Damage and +0.8m Radius per Pulse&quot; to &quot;+4% Damage Amp Per Stack and +1.6s Duration&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Time Wall duration reduced from 6s to 5.5</li><li>Time Wall no longer damages enemies going through it</li><li>Time Wall now increases allied bullet speeds going through it by 100%</li><li>Time Wall now increases adds +30% Weapon Damage to allied bullet damage (affects Carbine)</li><li>Time Wall T1 increased from +2m Width to +3m</li><li>Time Wall T2 changed from &quot;+9% Max Health Damage&quot; to &quot;+2.5s Duration and +30% Weapon Damage&quot;</li><li>Time Wall T3 changed from silencing enemies to Allowing Charges and Granting +1 Charge (4s Charge Time)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n')} <ul><li>${html('Kinetic Carbine cooldown increased from 27s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 4,
		bulletIndex: 0,
		text: 'Kinetic Carbine cooldown increased from 27s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Kinetic Carbine speed spirit scaling increased from 0.09 to 0.13')}</li> <li>${html('Kinetic Carbine base damage scale increased from 100% to 125%')}</li> <li>${html('Kinetic Carbine T2 changed from &quot;-8s Cooldown and +2s Charge Hold&quot; to &quot;-12s Cooldown&quot;')}</li> <li>${html('Kinetic Carbine T3 now also increases charge hold by 2s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div> <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n')} <ul><li>${html('Paradoxical Swap cooldown increased from 75s to 95s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Paradoxical Swap cooldown increased from 75s to 95s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Paradoxical Swap no longer has 80% Spirit Lifesteal')}</li> <li>${html('Paradoxical Swap damage changed from 115 (0.6 spirit scaling) to 10% Current Health')}</li> <li>${html('Paradoxical Swap T1 changed from &quot;-15s Cooldown&quot; to &quot;+200 Barrier (1.5 Spirit Scaling)&quot;')}</li> <li>${html('Paradoxical Swap T2 changed from &quot;+81 Damage&quot; to &quot;+13m Cast Range and -35s Cooldown&quot;')}</li> <li>${html('Paradoxical Swap T3 changed from &quot;+15m Cast Range&quot; to &quot;Swaps additional enemies in 7m radius and +10% Current Health Damage&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div> <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade-2"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n<ul><li>Pulse Grenade spirit scaling reduced from 0.4 to 0.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall-1"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Time Wall slow duration increased from 1.25s to 2s</li><li>Time Wall T1 now also increases duration by +2.5s</li><li>Time Wall T2 no longer increases duration by +2.5s</li><li>Time Wall T2 now also silences enemies for 2.3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap-1"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n<ul><li>Paradoxical Swap damage changed from 10% Current Health to 125 with 1.1 spirit scaling</li><li>Paradoxical Swap T3 changed from 10% Current Health to 10% Max Health</li><li>Paradoxical Swap can now be alt casted to swap only a single target with the T3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div> <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade-3"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n<ul><li>Pulse Grenade does half damage to objectives</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>\n')} <ul><li>${html('Barrage projectile speed increased by 15%')}</li> <li>${html('Barrage now lets you use stamina during the ability')}</li> <li>${html('Barrage now lets you use Flying Cloak during the ability')}</li> <li>${html('Barrage T1 increased from +12.6 Damage Per Projectile to +16')}</li> <li>${html('Barrage T2 cooldown increased from -14s to -16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 0,
		bulletIndex: 4,
		text: 'Barrage T2 cooldown increased from -14s to -16s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Barrage T3 increased from +2m Radius to +3m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n')} <ul><li>${html('Flying Cloak cooldown reduced from 32s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Flying Cloak cooldown reduced from 32s to 26s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flying Cloak damage reduced from 70 to 60')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Flying Cloak damage reduced from 70 to 60'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flying Cloak duration increased from 3.4s to 3.8s (travels slower, same total distance)')}</li> <li>${html('Flying Cloak T1 changed from &quot;-14s Cooldown&quot; to &quot;+70 Damage&quot;')}</li> <li>${html('Flying Cloak T2 changed from &quot;+76 Damage&quot; to &quot;+5 Weapon Damage upon cast for 8s&quot;')}</li> <li>${html('Flying Cloak T3 changed from &quot;+7 Weapon Damage after teleporting for 10s&quot; to &quot;+1.6s Travel Time and -14s Cooldown&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div> <div class="ability enchanter-s-satchel">${html('\n<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>\n<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>\n<ul><li>Enchanter&#x27;s Satchel spirit scaling increased from 0.61 to 0.9</li><li>Enchanter&#x27;s Satchel T3 now also reduces movement speed by 40%</li><li>Enchanter&#x27;s Satchel T3 Fire Rate slow increased from 35% to 40%</li><li>Enchanter&#x27;s Satchel T3 Escape duration increased from +0.5s to +1.5s</li><li>Enchanter&#x27;s Satchel T3 now also increases radius by 4m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: "Enchanter's Satchel"
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction no longer applies 12% Current Health Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction-dps">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction DPS change history</a></p>\n<h4 id="affliction-dps"><a href="/ability/affliction">Affliction DPS</a></h4>\n<ul><li>Affliction DPS increased from 28 to 32</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction-1"><a href="/ability/affliction">Affliction</a></h4>\n')} <ul><li>${html('Affliction spirit scaling increased from 0.17 to 0.2')}</li> <li>${html('Affliction cooldown increased from 140s to 150s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 5,
		bulletIndex: 1,
		text: 'Affliction cooldown increased from 140s to 150s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Affliction T1 increased from -25s Cooldown to -40s Cooldown')}</li> <li>${html('Affliction T2 no longer reduces healing by 40%')}</li> <li>${html('Affliction T2 now also increases radius by 4m')}</li> <li>${html('Affliction T3 no longer increases radius by 6m')}</li> <li>${html('Affliction T3 now prevents all healing on targets')}</li> <li>${html('Affliction T3 increases spirit scaling by +0.1')}</li> <li>${html('Affliction duration reduced from 12s to 11s (overall total damage is reduced slightly)')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction-dps">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction DPS change history</a></p>\n<h4 id="affliction-dps-1"><a href="/ability/affliction">Affliction DPS</a></h4>\n<ul><li>Affliction DPS increased from 32+0.2 to 34+0.22</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction-2"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction T2 duration reduced from +4s to +3s</li><li>Affliction T3 DPS increased from 16+0.1 to 18+0.11</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero rem">${html('\n<p><a href="/hero/rem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rem patch history</a></p>\n<h3 id="rem"><a href="/hero/rem">Rem</a></h3>\n')} <div class="ability lil-helpers">${html('\n<p><a href="/ability/lil-helpers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_helpers.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lil Helpers change history</a></p>\n<h4 id="lil-helpers"><a href="/ability/lil-helpers">Lil Helpers</a></h4>\n<ul><li>Lil Helpers trooper base healing changed from 10/s to 8/s. The delay between heals has been reduced so the frequency of healing is more constant. (overall reduction)</li><li>Lil Helpers trooper healing spirit scaling increased from 0.125 to 0.14</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Lil Helpers'
	});
	$$renderer.push(
		`<!----></div> <div class="ability naptime">${html('\n<p><a href="/ability/naptime"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Naptime change history</a></p>\n<h4 id="naptime"><a href="/ability/naptime">Naptime</a></h4>\n')} <ul><li>${html('Naptime sleep move speed reduced from 2m/s to 1.5m/s')}</li> <li>${html('Naptime sleep duration decreased from 4.25s to 4s')}</li> <li>${html('Naptime radius decreased from 20m to 17.0m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Rem',
		groupIndex: 1,
		bulletIndex: 2,
		text: 'Naptime radius decreased from 20m to 17.0m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Naptime T2 changed from &quot;unstoppable and -35% Damage resist while channeling&quot; to &quot;+0.5s Sleep Duration and +3m Radius&quot;')}</li> <li>${html('Naptime T3 now also grants +50% damage resist while channeling')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Rem',
		ability: 'Naptime'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n<ul><li>Move Speed no longer scales with spirit power</li><li>Sprint speed increased from 0.6m to 1.8m</li></ul>\n')} <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n<ul><li>Lightning Ball slows down less vs non-heroes (previously was 2m/s for all, now 3.5m/s for non-heroes)</li><li>Lightning Ball fixed now doing damage if another ball was already hitting a target</li><li>Lightning Ball T2 now also increases lifetime by 1s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability static-charge">${html('\n<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>\n<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>\n')} <ul><li>${html('Static Charge damage reduced from 38 to 35')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Static Charge damage reduced from 38 to 35'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Static Charge cast range reduced from 16m to 15m')}</li> <li>${html('Static Charge cast range no longer increases with spirit power')}</li> <li>${html('Static Charge T1 increased from -19s Cooldown to -20s')}</li> <li>${html('Static Charge T2 now also increases cast range by +5m')}</li> <li>${html('Static Charge T3 now also increases damage by +160')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Static Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability power-surge">${html('\n<p><a href="/ability/power-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Surge change history</a></p>\n<h4 id="power-surge"><a href="/ability/power-surge">Power Surge</a></h4>\n')} <ul><li>${html('Power Surge duration no longer scales with spirit power')}</li> <li>${html('Power Surge cooldown increased from 48s to 50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 3,
		bulletIndex: 1,
		text: 'Power Surge cooldown increased from 48s to 50s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Power Surge max jumps increased from 3 to 4')}</li> <li>${html('Power Surge T1 increased from -15s to -18s')}</li> <li>${html('Power Surge T2 changed from &quot;-10% Spirit Resist for 6s&quot; to &quot;+3m Move Speed, +8 Damage and increased Spirit Scaling (+0.23)&quot;')}</li> <li>${html('Power Surge T3 changed from &quot;+11 Shock Damage, scaling and +3 max jumps&quot; to &quot;-15% Spirit Resist for 8s and +12s Duration&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Power Surge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud allows movement in the base ability (1.5m)</li><li>Storm Cloud bullet resistance reduced from 20% to 0%</li><li>Storm Cloud T1 bullet resist increased from 35% to 55%</li><li>Storm Cloud T3 increases move speed by +3m (was +3.8m before)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball-1"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n<ul><li>Lightning Ball charge time reduced from 8s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud-1"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud T3 increases speed from +3m to +4m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n<ul><li>Stamina reduced from 3 to 2</li><li>Stamina movement speed reduced from 6.7 to 6.5</li><li>Bullet damage growth increased from 0.154 to 0.165</li></ul>\n')} <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n<ul><li>Serrated Knives no longer has impact damage</li><li>Serrated Knives Bleed DPS per knife increased from 4 to 10</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div> <div class="ability serrated-knives-bleed-dps">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives Bleed DPS change history</a></p>\n<h4 id="serrated-knives-bleed-dps"><a href="/ability/serrated-knives">Serrated Knives Bleed DPS</a></h4>\n<ul><li>Serrated Knives Bleed DPS spirit scaling increased from 0.13 to 0.15</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives Bleed DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives-1"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n<ul><li>Serrated Knives T1 changed from &quot;+1 Charge&quot; to &quot;+2s Duration&quot;</li><li>Serrated Knives T2 changed from &quot;+2s Duration&quot; to &quot;+2 Charges&quot;</li><li>Serrated Knives T3 no longer has +30 Impact Damage</li><li>Serrated Knives T3 DPS increased from +5.5 to +12</li><li>Serrated Knives T3 increases spirit scaling by +0.10</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div> <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n')} <ul><li>${html('Slice and Dice cooldown increased from 15s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 4,
		bulletIndex: 0,
		text: 'Slice and Dice cooldown increased from 15s to 16s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Slice and Dice Impact damage reduced from 75 to 60')}</li> <li>${html('Slice and Dice reduces Spirit Resistance by 6% for 16s. Multiple instances stack.')}</li> <li>${html('Slice and Dice T1 increased from -3s Cooldown to -6s Cooldown')}</li> <li>${html('Slice and Dice T2 changed from &quot;+50 Impact Damage&quot; to &quot;-8% Spirit Resistance and +2m Dash Range&quot;')}</li> <li>${html('Slice and Dice T3 now also grants +50 Impact Damage')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow is no longer unit targeted, you jump in the direction forward with some small control</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow-damage-amp">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow Damage Amp change history</a></p>\n<h4 id="killing-blow-damage-amp"><a href="/ability/killing-blow">Killing Blow Damage Amp</a></h4>\n<ul><li>Killing Blow Damage Amp reduced from 15% to 14%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow Damage Amp'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow-1"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow T2 changed from &quot;+5% Enemy Health Threshold and +6% Damage Amp&quot; to &quot;+8% Damage Amp&quot;</li><li>Killing Blow T3 now grants you 20s to recast the ultimate, rather than removing the cooldown</li><li>Killing Blow T3 now also increases enemy health threshold by +5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Alt fire knockback increased by 10%</li></ul>\n')} <div class="ability serrated-knives">${html('\n<p><a href="/ability/serrated-knives"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Serrated Knives change history</a></p>\n<h4 id="serrated-knives-2"><a href="/ability/serrated-knives">Serrated Knives</a></h4>\n')} <ul><li>${html('Serrated Knives cooldown increased from 16s to 18s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		groupIndex: 9,
		bulletIndex: 0,
		text: 'Serrated Knives cooldown increased from 16s to 18s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Serrated Knives'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow-2"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow range increased from 13m to 18m</li><li>Killing Blow travel speed increased a bit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Stamina increased from 2 to 3</li><li>Stamina cooldown increased from 4.5s to 5.5s</li></ul>\n')} <div class="ability bloodletting">${html('\n<p><a href="/ability/bloodletting"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bloodletting change history</a></p>\n<h4 id="bloodletting"><a href="/ability/bloodletting">Bloodletting</a></h4>\n<ul><li>Bloodletting no longer interrupts sliding when cast</li><li>Bloodletting is now affected by healing modifiers</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Bloodletting'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow-3"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Fixed a bug with Killing Blow T3 causing the cooldown to be delayed if you failed to execute during the allowed window</li><li>Killing Blow now continues forward (and dealing damage) until it reaches a target it can kill or runs out of range</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero silver">${html('\n<p><a href="/hero/silver"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silver patch history</a></p>\n<h3 id="silver"><a href="/hero/silver">Silver</a></h3>\n')} <div class="ability mauling-leap">${html('\n<p><a href="/ability/entangling-bola"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_bola.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mauling Leap change history</a></p>\n<h4 id="mauling-leap"><a href="/ability/entangling-bola">Mauling Leap</a></h4>\n<ul><li>Mauling Leap damage scaling reduced from 1.9 to 1.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Mauling Leap'
	});
	$$renderer.push(
		`<!----></div> <div class="ability boot-kick">${html('\n<p><a href="/ability/boot-kick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_jumpback.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Boot Kick change history</a></p>\n<h4 id="boot-kick"><a href="/ability/boot-kick">Boot Kick</a></h4>\n<ul><li>Fixed Tail Whack being considered a movement ability</li><li>Tail Whack disarm duration reduced from 2.5s to 2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Boot Kick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability tail-whack">${html('\n<p><a href="/ability/boot-kick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_jumpback.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tail Whack change history</a></p>\n<h4 id="tail-whack"><a href="/ability/boot-kick">Tail Whack</a></h4>\n<ul><li>Tail Whack slow duration increased from 1.5s to 2s</li><li>Tail Whack T3 changed from &quot;+1s Disarm Duration&quot; to &quot;1.5s Debuff Duration&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Tail Whack'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse change history</a></p>\n<h4 id="lycan-curse"><a href="/ability/lycan-curse">Lycan Curse</a></h4>\n')} <ul><li>${html('Lycan Curse cooldown increased from 35s to 50s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Silver',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Lycan Curse cooldown increased from 35s to 50s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Lycan Curse base health bonus reduced from 100 to 75')}</li> <li>${html('Lycan Curse no longer grants +14% Bullet and Spirit Resistance')}</li> <li>${html('Lycan Curse no longer grants +2m Move Speed')}</li> <li>${html('Lycan Curse T1 resist increased from +14% to +15%')}</li> <li>${html('Lycan Curse T2 bonus health increased from 125 to 150')}</li> <li>${html('Lycan Curse base health bonus increased from +75 to +125')}</li> <li>${html('Lycan Curse T2 increased from +3m to +4m')}</li> <li>${html('Lycan Curse cooldown reduced from 50s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Silver',
		groupIndex: 3,
		bulletIndex: 8,
		text: 'Lycan Curse cooldown reduced from 50s to 40s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Lycan Curse T1 increased from 15% Resists to 18%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability slam-fire-weapon-accuracy">${html('\n<p><a href="/ability/slam-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_slamfire.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slam Fire Weapon Accuracy change history</a></p>\n<h4 id="slam-fire-weapon-accuracy"><a href="/ability/slam-fire">Slam Fire Weapon Accuracy</a></h4>\n<ul><li>Slam Fire Weapon Accuracy reduced from -25% to -30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Slam Fire Weapon Accuracy'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse change history</a></p>\n<h4 id="lycan-curse-1"><a href="/ability/lycan-curse">Lycan Curse</a></h4>\n<ul><li>Go For The Throat, Boot Kick and Mauling Leap now benefit from range increases</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability boot-kick">${html('\n<p><a href="/ability/boot-kick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_jumpback.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Boot Kick change history</a></p>\n<h4 id="boot-kick-1"><a href="/ability/boot-kick">Boot Kick</a></h4>\n<ul><li>Boot Kick now uses a break-off angle when grounded, allowing upward movement if looking up enough</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Boot Kick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability tail-whack">${html('\n<p><a href="/ability/boot-kick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_jumpback.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tail Whack change history</a></p>\n<h4 id="tail-whack-1"><a href="/ability/boot-kick">Tail Whack</a></h4>\n<ul><li>Tail Whack spirit scaling increased from 1 to 1.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Tail Whack'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lycan-curse">${html('\n<p><a href="/ability/lycan-curse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lycan Curse change history</a></p>\n<h4 id="lycan-curse-2"><a href="/ability/lycan-curse">Lycan Curse</a></h4>\n<ul><li>Lycan Curse now grants 1.5m Move Speed</li><li>Lycan Curse T1 increased from +18% Resists to +20%</li><li>Lycan Curse T2 increased from +150 Bonus Health to +200</li><li>Lycan Curse T3 now has a 1.5s buffer for kill credit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Silver',
		ability: 'Lycan Curse'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero victor">${html('\n<p><a href="/hero/victor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Victor patch history</a></p>\n<h3 id="victor"><a href="/hero/victor">Victor</a></h3>\n<ul><li>Bullet damage increased from 12.3 to 12.5</li></ul>\n')} <div class="ability pain-battery">${html('\n<p><a href="/ability/pain-battery"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_pain_battery.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pain Battery change history</a></p>\n<h4 id="pain-battery"><a href="/ability/pain-battery">Pain Battery</a></h4>\n<ul><li>Pain Battery now starts charged</li><li>Pain Battery range increased from 20m to 28m</li><li>Pain Battery reduced randomness on the projectile paths</li><li>Pain Battery bolt count from 5 to 7</li><li>Pain Battery T2 increased from +36 to +50</li><li>Pain Battery T3 now also increases spirit scaling by +0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Pain Battery'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jumpstart">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>\n<h4 id="jumpstart"><a href="/ability/jumpstart">Jumpstart</a></h4>\n')} <ul><li>${html('Jumpstart cooldown increased from 23s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Jumpstart cooldown increased from 23s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jumpstart-move-speed">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart Move Speed change history</a></p>\n<h4 id="jumpstart-move-speed"><a href="/ability/jumpstart">Jumpstart Move Speed</a></h4>\n<ul><li>Jumpstart Move Speed reduced from 4m to 3m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart Move Speed'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jumpstart">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>\n<h4 id="jumpstart-1"><a href="/ability/jumpstart">Jumpstart</a></h4>\n<ul><li>Jumpstart spirit scaling reduced from 1.8 to 1.2</li><li>Jumpstart T1 increased from +1.5m to +3m Move Speed</li><li>Jumpstart T2 now also reduces cooldown by -8s</li><li>Jumpstart T3 now also provides +1 Charge</li><li>Jumpstart T3 no longer reduces cooldown</li><li>Jumpstart T3 now also increases spirit scaling by 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n')} <ul><li>${html('Aura of Suffering time to max DPS reduced from 10s to 6s')}</li> <li>${html('Aura of Suffering radius increased from 7.7m to 10m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 5,
		bulletIndex: 1,
		text: 'Aura of Suffering radius increased from 7.7m to 10m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Aura of Suffering toggle cooldown reduced from 2.5s to 2s')}</li> <li>${html('Aura of Suffering Min DPS reduced from 16 to 12')}</li> <li>${html('Aura of Suffering Min DPS spirit scaling reduced from 0.18 to 0.135')}</li> <li>${html('Aura of Suffering Max DPS reduced from 70 to 54')}</li> <li>${html('Aura of Suffering Max DPS spirit scaling reduced from 0.9 to 0.67')}</li> <li>${html('Aura of Suffering T2 Min/Max DPS reduced from 8/36 to 6/26')}</li> <li>${html('Aura of Suffering Text Progress bar indicates time to Max DPS')}</li> <li>${html('Aura of Suffering T3 reduced from +13% Damage to +15%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n')} <ul><li>${html('Shocking Reanimation radius reduced from 13m to 12m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 6,
		bulletIndex: 0,
		text: 'Shocking Reanimation radius reduced from 13m to 12m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shocking Reanimation rebirth health reduced from 60% to 50%')}</li> <li>${html('Shocking Reanimation T1 changed from &quot;+3m Radius and +90 Damage&quot; to &quot;While on Cooldown: +15% Fire Rate and +6 Spirit Damage Per Bullet (0.06 scaling)&quot;')}</li> <li>${html('Shocking Reanimation T2 rebirth health increased from 40% to 50%')}</li> <li>${html('Shocking Reanimation T3 changed from &quot;While on Cooldown: +18% Fire Rate and +9 Spirit Damage Per Bullet (0.06 scaling)&quot; to &quot;+6m Radius, +1s Stun and -50s Cooldown&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability pain-battery">${html('\n<p><a href="/ability/pain-battery"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_pain_battery.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pain Battery change history</a></p>\n<h4 id="pain-battery-1"><a href="/ability/pain-battery">Pain Battery</a></h4>\n<ul><li>Pain Battery T3 reduced from 18% Missing Health to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Pain Battery'
	});
	$$renderer.push(
		`<!----></div> <div class="ability jumpstart">${html('\n<p><a href="/ability/jumpstart"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Jumpstart change history</a></p>\n<h4 id="jumpstart-2"><a href="/ability/jumpstart">Jumpstart</a></h4>\n<ul><li>Jumpstart T3 spirit scaling reduced from 0.8 to 0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Jumpstart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability aura-of-suffering">${html('\n<p><a href="/ability/aura-of-suffering"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Aura of Suffering change history</a></p>\n<h4 id="aura-of-suffering-1"><a href="/ability/aura-of-suffering">Aura of Suffering</a></h4>\n')} <ul><li>${html('Aura of Suffering can now be activated on the zipline')}</li> <li>${html('Aura of Suffering radius reduced from 10m to 9.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 9,
		bulletIndex: 1,
		text: 'Aura of Suffering radius reduced from 10m to 9.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Aura of Suffering Base and T2 Max DPS and scaling reduced by 10%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Aura of Suffering'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation-1"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n')} <ul><li>${html('Shocking Reanimation cooldown increased from 190s to 210s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 10,
		bulletIndex: 0,
		text: 'Shocking Reanimation cooldown increased from 190s to 210s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shocking Reanimation T3 increased from -50s Cooldown to -70s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Health per boon increased from 46 to 50</li><li>Now has 30% less effectiveness from lifesteal (Lifesteal Effectiveness stat added to Vitality tooltip)</li></ul>\n')} <div class="ability shocking-reanimation">${html('\n<p><a href="/ability/shocking-reanimation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shocking Reanimation change history</a></p>\n<h4 id="shocking-reanimation-2"><a href="/ability/shocking-reanimation">Shocking Reanimation</a></h4>\n')} <ul><li>${html('Shocking Reanimation radius increased from 12m to 18m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 12,
		bulletIndex: 0,
		text: 'Shocking Reanimation radius increased from 12m to 18m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shocking Reanimation cooldown increased from 210s to 230s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Victor',
		groupIndex: 12,
		bulletIndex: 1,
		text: 'Shocking Reanimation cooldown increased from 210s to 230s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shocking Reanimation T3 no longer increases radius by 6m')}</li> <li>${html('Shocking Reanimation T3 cooldown from -70s to -100s')}</li> <li>${html('Shocking Reanimation T3 now also deals +150 Damage')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Victor',
		ability: 'Shocking Reanimation'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Fire Rate no longer scales with Spirit Power</li><li>Bullet damage now scales with spirit power (0.022)</li><li>Bullet Velocity increased from 557 to 660</li></ul>\n')} <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n')} <ul><li>${html('Stake damage reduced from 55 to 40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Stake damage reduced from 55 to 40'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Stake damage spirit scaling increased from 0.37 to 0.5')}</li> <li>${html('Stake projectile speed increased from 20m/s to 25m/s')}</li> <li>${html('Stake T1 changed from &quot;-35% Fire Rate&quot; to &quot;+65 Damage&quot;')}</li> <li>${html('Stake T3 Tether Duration increased from +0.5s to +0.75s')}</li> <li>${html('Stake T3 capture radius increased from +1m to +2m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Flight now allows you to use melee</li><li>Flight now allows parry to be used</li><li>Flight now grants you +50% Item Cast Range</li><li>Flight spirit damage scaling reduced from 0.22 to 0.18</li><li>Flight duration reduced from 15s to 13s</li><li>Flight T2 duration increased from +8s to +10s</li><li>Flight T3 Spirit Damage Per Bullet reduced from 12.6 to 10</li><li>Flight T3 now increases spirit scaling by 0.1</li><li>Flight T3 now also refreshes duration on hero kill</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crow-familiar">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>\n<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>\n')} <ul><li>${html('Crow Familiar now releases a swarm of crows in a cone forward, hitting all enemies along the path')}</li> <li>${html('Crow Familiar debuff duration no longer scales with spirit power')}</li> <li>${html('Crow Familiar debuff duration increased from 4s to 5s')}</li> <li>${html('Crow Familiar bleed damage reduced from 2.7% to 2.2%')}</li> <li>${html('Crow Familiar damage increased from 37 to 40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 3,
		bulletIndex: 4,
		text: 'Crow Familiar damage increased from 37 to 40'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Crow Familiar T1 changed from &quot;Ricochet up to 2 times&quot; to &quot;Reduces healing by -35%&quot;')}</li> <li>${html('Crow Familiar T2 now also increase bleed damage by +0.5%')}</li> <li>${html('Crow Familiar T3 now also increases debuff duration by 2s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate while scoped no longer un-scopes when using items</li><li>Assassinate now has a 4s buffer on impact for bonus credit</li><li>Assassinate while scoped now plays a sound for you when the it is fully charged</li><li>Assassinate weapon damage bonus increased from 5% to 6%</li><li>Fixed not gaining bonus damage if a proc bonus was the killing blow</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n')} <ul><li>${html('Splatter bounces once by default')}</li> <li>${html('Splatter cooldown reduced from 30s to 26')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Splatter cooldown reduced from 30s to 26'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Splatter spirit scaling reduced from 1.77 to 0.8')}</li> <li>${html('Splatter ground effect now increases slide distance by 60% for you and your allies')}</li> <li>${html('Splatter multiple hit damage value reduced from 50% to 50/38/26%')}</li> <li>${html('Splatter T1 radius increased from +1m to +2m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 0,
		bulletIndex: 5,
		text: 'Splatter T1 radius increased from +1m to +2m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Splatter T2 cooldown increased from -12s to -14s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 0,
		bulletIndex: 6,
		text: 'Splatter T2 cooldown increased from -12s to -14s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Splatter T3 spirit scaling increased from +0.4 to +1.3')}</li> <li>${html('Splatter T3 still adds 2 bounces')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability the-cube">${html('\n<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>\n<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>\n<ul><li>The Cube now has a very brief period where allies cannot cancel to prevent accidental cancels</li><li>The Cube healing spirit scaling increased from 0.14 to 0.3</li><li>The Cube T3 increased from -21s Cooldown to -25s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'The Cube'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Puddle Punch now grants +30% Air Control when affecting yourself or allies</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch-charge-time">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch Charge Time change history</a></p>\n<h4 id="puddle-punch-charge-time"><a href="/ability/puddle-punch">Puddle Punch Charge Time</a></h4>\n<ul><li>Puddle Punch Charge Time increased from 1.5s to 1.7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch Charge Time'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch-slow">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch Slow change history</a></p>\n<h4 id="puddle-punch-slow"><a href="/ability/puddle-punch">Puddle Punch Slow</a></h4>\n<ul><li>Puddle Punch Slow increased from 15% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch Slow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch-1"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n')} <ul><li>${html('Puddle Punch now acts as if its close range with respect to item procs (like Point Blank)')}</li> <li>${html('Puddle Punch radius reduced from 4.5m to 4m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 5,
		bulletIndex: 1,
		text: 'Puddle Punch radius reduced from 4.5m to 4m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Puddle Punch T2 changed from &quot;+27 Damage and -15% Move Slow&quot; to &quot;+1.5m Radius and +30 Damage&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n')} <ul><li>${html('Goo Ball no longer can carry Urn')}</li> <li>${html('Goo Ball turn rate improved a bit')}</li> <li>${html('Goo Ball can now use abilities and items (rather than being locked behind T3)')}</li> <li>${html('Goo Ball cooldown increased from 115s to 130s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 6,
		bulletIndex: 3,
		text: 'Goo Ball cooldown increased from 115s to 130s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Goo Ball duration increased from 9s to 10s')}</li> <li>${html('Goo Ball Bullet and Spirit resist reduced from 60% to 35%')}</li> <li>${html('Goo Ball T1 changed from &quot;+5s Duration&quot; to &quot;-30s Cooldown&quot;')}</li> <li>${html('Goo Ball T2 reduced from +72 Damage to +70')}</li> <li>${html('Goo Ball T3 changed from &quot;Can now use abilities and items&quot; to &quot;+6s duration and +0.3s Stun Duration&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter-1"><a href="/ability/splatter">Splatter</a></h4>\n<ul><li>Splatter T3 spirit scaling reduced from 1.3 to 1.1</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch-2"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Puddle Punch scaling reduced from 1.1 to 1.0</li><li>Fixed Puddle Punch T3 giving an extra +60 melee damage (released a couple days ago)</li><li>Puddle Punch scaling reduced from 1 to 0.8</li><li>Puddle Punch scaling reduced from 0.8 to 0.6</li><li>Puddle Punch now has +20 bonus damage</li><li>Puddle Punch wind up time increased from 0.15s to 0.2s</li><li>Puddle Punch displacement duration reduced from 0.8s to 0.6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball-1"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Goo Ball stun duration reduced from 0.7s to 0.5s</li><li>Goo Ball lockout period from being affected again increased from 1.25s to 1.35s</li><li>Goo Ball duration increased from 10s to 11s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Bullet growth per boon reduced from 0.44 to 0.38</li></ul>\n')} <div class="ability alchemical-flask">${html('\n<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>\n<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>\n')} <ul><li>${html('Alchemical Flask Weapon Damage reduction reduced from -30% to -25%')}</li> <li>${html('Alchemical Flask T2 damage increased from +36 to +40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 1,
		bulletIndex: 1,
		text: 'Alchemical Flask T2 damage increased from +36 to +40'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Alchemical Flask T2 now also increases Weapon Damage Reduction by -20%')}</li> <li>${html('Alchemical Flask T2 no longer increases radius by 1m')}</li> <li>${html('Alchemical Flask T3 cooldown increased from -6.5s to -7s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 1,
		bulletIndex: 4,
		text: 'Alchemical Flask T3 cooldown increased from -6.5s to -7s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Alchemical Flask T3 now also increases radius by 2m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Alchemical Flask'
	});
	$$renderer.push(
		`<!----></div> <div class="ability willpower">${html('\n<p><a href="/ability/willpower"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Willpower change history</a></p>\n<h4 id="willpower"><a href="/ability/willpower">Willpower</a></h4>\n')} <ul><li>${html('Willpower duration reduced from 7s to 5s')}</li> <li>${html('Willpower cooldown reduced from 42s to 40')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Willpower cooldown reduced from 42s to 40'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Willpower barrier now scales with spirit power in the base ability (+0.5)')}</li> <li>${html('Willpower T2 cooldown from -19s to -22s')}</li> <li>${html('Willpower T2 now also increases duration by +2s')}</li> <li>${html('Willpower T3 changed from &quot;+150 Barrier Health and improved scaling (3.7)&quot; to &quot;+40% Debuff Resistance and improved scaling (2.5)&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Willpower'
	});
	$$renderer.push(
		`<!----></div> <div class="ability binding-word">${html('\n<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>\n<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>\n')} <ul><li>${html('Binding Word cast range reduced from 20m to 15m')}</li> <li>${html('Binding Word cooldown decreased from 37s to 34s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 3,
		bulletIndex: 1,
		text: 'Binding Word cooldown decreased from 37s to 34s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Binding Word T1 changed from &quot;+1s Immobilize Duration&quot; to &quot;+20% Bullet Damage to Trapped heroes for 5s&quot;')}</li> <li>${html('Binding Word T2 changed from &quot;-19s Cooldown&quot; to &quot;+0.75s Duration and +12m Cast Range&quot;')}</li> <li>${html('Binding Word T2 now increases trap duration by 0.75s')}</li> <li>${html('Binding Word T3 changed from &quot;+20% Bullet Damage&quot; to &quot;-18s Cooldown and Silences enemies until they escape or are trapped&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Binding Word'
	});
	$$renderer.push(
		`<!----></div> <div class="ability last-stand-channeling">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand Channeling change history</a></p>\n<h4 id="last-stand-channeling"><a href="/ability/last-stand">Last Stand Channeling</a></h4>\n<ul><li>Last Stand Channeling bullet and spirit resist increased from 30% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand Channeling'
	});
	$$renderer.push(
		`<!----></div> <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n')} <ul><li>${html('Last Stand radius reduced from 13m to 12m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Last Stand radius reduced from 13m to 12m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Last Stand T1 increased from +3m Radius to +4m')}</li> <li>${html('Last Stand T3 no longer grants +50% Bullet and Spirit Resist')}</li> <li>${html('Last Stand T3 duration increased from +2.5s to +3s')}</li> <li>${html('Last Stand T3 now also grants you Unstoppable while channeling')}</li> <li>${html('Last Stand Bullet and Spirit Resist while channeling reduced from 60% to 50%')}</li> <li>${html('Last Stand T3 now also increases Bullet and Spirit Resist while channeling by +30%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n')} <ul><li>${html('Card Trick cards now have specific suites with special bonuses.')}</li> <li>${html('Card Trick base charge count increased from 1 to 2')}</li> <li>${html('Card Trick base damage reduced from 60 to 45')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Card Trick base damage reduced from 60 to 45'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Card Trick spirit scaling reduced from 1.0 to 0.55')}</li> <li>${html('Card Trick buildup now takes 20% longer')}</li> <li>${html('Card Trick cooldown reduced from 0.75s to 0.5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 0,
		bulletIndex: 5,
		text: 'Card Trick cooldown reduced from 0.75s to 0.5s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Card Trick post cast time reduced from 0.2s to 0.1')}</li> <li>${html('Card Trick now highlights the card that will be throw next.')}</li> <li>${html('Card Trick now has unique sounds for each card suite that is summoned.')}</li> <li>${html('Card Trick T1 increased from &quot;+1 Charges&quot; to &quot;+2 Charges&quot;')}</li> <li>${html('Card Trick T2 changed from &quot;+35 Damage&quot; to &quot;+40 Damage and increased spirit scaling (+0.4)&quot;')}</li> <li>${html('Card Trick T2 changed from &quot;+50% Card Summon Rate and 30% slow for 1s&quot; to &quot;Improves Card Suites and increased joker chances&quot; (new totals are Spades: 2.5x, Diamond: -13%, Heal: 150/2.0, Clubs: 50%, Joker: 1/5th chance)')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability project-mind">${html('\n<p><a href="/ability/project-mind"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Project Mind change history</a></p>\n<h4 id="project-mind"><a href="/ability/project-mind">Project Mind</a></h4>\n<ul><li>Fixed Project Mind interaction with stuns</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Project Mind'
	});
	$$renderer.push(
		`<!----></div> <div class="ability full-auto">${html('\n<p><a href="/ability/full-auto"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Full Auto change history</a></p>\n<h4 id="full-auto"><a href="/ability/full-auto">Full Auto</a></h4>\n')} <ul><li>${html('Full Auto no longer affects allies (previously gave half fire rate to allies)')}</li> <li>${html('Full Auto duration no longer scales with Spirit Power')}</li> <li>${html('Full Auto cooldown reduced from 48s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 2,
		bulletIndex: 2,
		text: 'Full Auto cooldown reduced from 48s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Full Auto base ability now deals +2 Spirit Damage Per Bullet (0.03 Spirit Scaling)')}</li> <li>${html('Full Auto T1 increased from -14s Cooldown to -20s')}</li> <li>${html('Full Auto T2 changed from &quot;2.52 Spirit Damage per Bullet&quot; to &quot;+10% Fire Rate and +3s Duration&quot;')}</li> <li>${html('Full Auto T3 changed from &quot;+15% Bullet and Spirit Lifesteal and increased spirit scaling&quot; to &quot;Unlimited Ammo and increased spirit scaling (+0.06)&quot;')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Full Auto'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>\n')} <ul><li>${html('Telekinesis cooldown increased from 110s to 120s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Telekinesis cooldown increased from 110s to 120s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Telekinesis cast range reduced from 20m to 14m')}</li> <li>${html('Telekinesis cast time increased from 0.1s to 0.3s')}</li> <li>${html('Telekinesis no longer has a projectile, it now instantly lifts the target for 0.75s and gives you a location target on the ground. After the 0.75s is over, it&#x27;ll throw the hero towards that location up to 15m away. The target will take 100 Damage, 40% move slow and prevent stamina/movement-item and ability usage for 3s.')}</li> <li>${html('Telekinesis T1 changed from &quot;-25s Cooldown&quot; to &quot;+100 Damage&quot;')}</li> <li>${html('Telekinesis T2 changed from &quot;+0.75s Silence and Disarm Duration&quot; to &quot;-50s Cooldown&quot;')}</li> <li>${html('Telekinesis T3 changed from &quot;Bounces to nearby target&quot; to &quot;+1.5s Debuff duration and +6m Throw and Cast Range')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-trick-spade">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick Spade change history</a></p>\n<h4 id="card-trick-spade"><a href="/ability/card-trick">Card Trick Spade</a></h4>\n<ul><li>Card Trick Spade reduced from +70% to +60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick Spade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-trick-heart">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick Heart change history</a></p>\n<h4 id="card-trick-heart"><a href="/ability/card-trick">Card Trick Heart</a></h4>\n<ul><li>Card Trick Heart scaling reduced from 1.25 to 1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick Heart'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick-1"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Card Trick T3 Heart scaling increased from 0.5 to 0.75</li><li>Fixed Card Trick Heart heal doing full value for non-heroes (instead of half)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis-1"><a href="/ability/telekinesis">Telekinesis</a></h4>\n<ul><li>Telekinesis debuff duration reduced from 3s to 2.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick-2"><a href="/ability/card-trick">Card Trick</a></h4>\n')} <ul><li>${html('Card Trick cooldown increased from 0.5s to 0.6s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 8,
		bulletIndex: 0,
		text: 'Card Trick cooldown increased from 0.5s to 0.6s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-trick-joker">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick Joker change history</a></p>\n<h4 id="card-trick-joker"><a href="/ability/card-trick">Card Trick Joker</a></h4>\n<ul><li>Card Trick Joker no longer bounces to other targets</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick Joker'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick-3"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Card Trick gaining charges (AP or shop) no longer automatically builds them up</li><li>Card Trick can now be alt casted to fire from the inverse order</li><li>Card Trick T3 Spade bonus reduced from +50% to +40%</li><li>Card Trick T3 Heart healing scale reduced from +0.75 to +0.5</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis-2"><a href="/ability/telekinesis">Telekinesis</a></h4>\n<ul><li>Telekinesis cast range reduced from 14m to 13m</li><li>Telekinesis throw range reduced from 14m to 13m</li><li>Telekinesis cast delay increased from 0.3s to 0.35s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div> <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick-4"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Card Trick heart now only heals for half the amount for secondary targets in the area</li><li>Card Trick now randomly pulls cards out of a 2 deck stack (lowers overall variance. Gets a new 2 deck stack after that is depleted)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div> <div class="ability project-mind">${html('\n<p><a href="/ability/project-mind"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Project Mind change history</a></p>\n<h4 id="project-mind-1"><a href="/ability/project-mind">Project Mind</a></h4>\n')} <ul><li>${html('Project Mind cooldown increased from 42s to 46s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 13,
		bulletIndex: 0,
		text: 'Project Mind cooldown increased from 42s to 46s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Project Mind T3 cooldown increased from -28s to -32s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 13,
		bulletIndex: 1,
		text: 'Project Mind T3 cooldown increased from -28s to -32s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Project Mind'
	});
	$$renderer.push(
		`<!----></div> <div class="ability full-auto">${html('\n<p><a href="/ability/full-auto"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Full Auto change history</a></p>\n<h4 id="full-auto-1"><a href="/ability/full-auto">Full Auto</a></h4>\n<ul><li>Full Auto T3 now interrupts/finishes an ongoing reload</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Full Auto'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis-3"><a href="/ability/telekinesis">Telekinesis</a></h4>\n')} <ul><li>${html('Telekinesis cast time increased from 0.35s to 0.45s')}</li> <li>${html('Telekinesis debuff duration reduced from 2.75s to 2.25s')}</li> <li>${html('Telekinesis cast range reduced from 13m to 10m')}</li> <li>${html('Telekinesis cooldown increased from 120s to 130s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		groupIndex: 15,
		bulletIndex: 3,
		text: 'Telekinesis cooldown increased from 120s to 130s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n')} <ul><li>${html('Power Slash being held down no longer automatically fires it')}</li> <li>${html('You can now cast Parry directly while channeling Power Slash to fire the Power Slash and parry')}</li> <li>${html('Power Slash base ability now has +60% Bullet Resist while channeling')}</li> <li>${html('Power Slash cooldown increased from 10.5s to 12s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Power Slash cooldown increased from 10.5s to 12s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability power-slash-slash-length">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash Slash Length change history</a></p>\n<h4 id="power-slash-slash-length"><a href="/ability/power-slash">Power Slash Slash Length</a></h4>\n<ul><li>Power Slash Slash Length reduced from 25m to 22m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash Slash Length'
	});
	$$renderer.push(
		`<!----></div> <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash-1"><a href="/ability/power-slash">Power Slash</a></h4>\n<ul><li>Power Slash T1 changed from &quot;+60% Bullet Resist while channeling&quot; to &quot;40% Slow for 3s&quot;</li><li>Power Slash T2 changed from &quot;-2s Cooldown and 40% slow for 3s&quot; to &quot;-4s Cooldown&quot;</li><li>Power Slash T3 now also grants +8m Range</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-slash">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>\n<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>\n')} <ul><li>${html('Flying Strike renamed to Flying Slash')}</li> <li>${html('Flying Slash is now light melee damage rather than spirit')}</li> <li>${html('Flying Slash slow increased from -30% to -50%')}</li> <li>${html('Flying Slash cooldown increased from 21s to 36s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 3,
		bulletIndex: 3,
		text: 'Flying Slash cooldown increased from 21s to 36s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flying Slash range increased from 20m to 25m')}</li> <li>${html('Flying Slash T1 changed from &quot;25% Slow&quot; to &quot;-18s Cooldown&quot;')}</li> <li>${html('Flying Slash T2 changed from &quot;+20m Cast Range&quot; to &quot;+20m Cast Range and gain +40 Spirit for 6s&quot;')}</li> <li>${html('Flying Slash T3 changed from &quot;Can Grapple to ally heroes and +6 Weapon Damage for 10s&quot; to &quot;Can Grapple to ally heroes. Becomes Charged and grants +2 charges (3s between charges).&quot;')}</li> <li>${html('Fixed Flying Slash T3 ally cast stopping too soon before reaching the player')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n')} <ul><li>${html('Crimson Slash cooldown increased from 15s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 4,
		bulletIndex: 0,
		text: 'Crimson Slash cooldown increased from 15s to 16s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Crimson Slash Fire Rate reduction increased from -18% to -30%')}</li> <li>${html('Crimson Slash T1 changed from &quot;-26% Fire Rate&quot; to &quot;On Hit: +30% Melee Damage for 4s&quot;')}</li> <li>${html('Crimson Slash T3 increased from -9s Cooldown to -10s')}</li> <li>${html('Crimson Slash T3 now also increases spirit scaling (+0.6)')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n')} <ul><li>${html('Shadow Transformation cooldown increased from 110s to 130s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Shadow Transformation cooldown increased from 110s to 130s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Shadow Transformation Bullet and Spirit Resist reduced from 40% to 30%')}</li> <li>${html('Shadow Transformation T1 changed from &quot;+14% Fire Rate&quot; to &quot;+5 Weapon Damage&quot;')}</li> <li>${html('Shadow Transformation T2 now also reduces cooldown by 25s')}</li> <li>${html('Shadow Transformation T3 increased from +20% Bullet and Spirit Resist to +30%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-slash">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>\n<h4 id="flying-slash-1"><a href="/ability/flying-slash">Flying Slash</a></h4>\n<ul><li>Fixed Flying Strike triggering heavy melee procs rather than light melee (damage amount was light melee still)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Slash'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_3_06_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n<ul><li>You can now reload while already full when carrying this item</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item arcane-surge">${html('\n<p><a href="/item/arcane-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arcane Surge patch history</a></p>\n<h3 id="arcane-surge"><a href="/item/arcane-surge">Arcane Surge</a></h3>\n<ul><li>Spirit Power increased from +15 to +20</li><li>Ability Range reduced from 15% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Arcane Surge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ballistic-enchantment">${html('\n<p><a href="/item/ballistic-enchantment"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_seal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ballistic Enchantment patch history</a></p>\n<h3 id="ballistic-enchantment"><a href="/item/ballistic-enchantment">Ballistic Enchantment</a></h3>\n<ul><li>Weapon damage per stack increased from 18% to 20%</li><li>Range reduced from 30% to 25%</li><li>Non-hero weapon damage increased from 4% to 5%</li><li>Ability Range reduced from 25% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ballistic Enchantment',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item blood-tribute">${html('\n<p><a href="/item/blood-tribute"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Blood Tribute patch history</a></p>\n<h3 id="blood-tribute"><a href="/item/blood-tribute">Blood Tribute</a></h3>\n<ul><li>No longer has healing reduction</li><li>Self damage increased from 40 to 50</li><li>Spirit Resist reduced from 10% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Blood Tribute',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item boundless-spirit">${html('\n<p><a href="/item/boundless-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Boundless Spirit patch history</a></p>\n<h3 id="boundless-spirit"><a href="/item/boundless-spirit">Boundless Spirit</a></h3>\n<ul><li>Constant spirit bonus reduced from 35 to 30</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Boundless Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-resilience">${html('\n<p><a href="/item/bullet-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Resilience patch history</a></p>\n<h3 id="bullet-resilience"><a href="/item/bullet-resilience">Bullet Resilience</a></h3>\n<ul><li>Low Health threshold increased from 40% to 50%</li><li>Low Health resistance reduced from 22% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item burst-fire">${html('\n<p><a href="/item/burst-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Burst Fire patch history</a></p>\n<h3 id="burst-fire"><a href="/item/burst-fire">Burst Fire</a></h3>\n')} <ul><li>${html('Duration increased from 3.5s to 4.5s')}</li> <li>${html('Cooldown increased from 7s to 9s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Burst Fire',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 7s to 9s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Burst Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item celestial-blessing">${html('\n<p><a href="/item/celestial-blessing"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/celestial_guidance.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Celestial Blessing patch history</a></p>\n<h3 id="celestial-blessing"><a href="/item/celestial-blessing">Celestial Blessing</a></h3>\n')} <ul><li>${html('Cooldown reduced from 50s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Celestial Blessing',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 50s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Heal increased from up to 50% of your HP to 60%')}</li> <li>${html('Heal min increased from 300 to 400')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Celestial Blessing',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cheat-death">${html('\n<p><a href="/item/cheat-death"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cheat Death patch history</a></p>\n<h3 id="cheat-death"><a href="/item/cheat-death">Cheat Death</a></h3>\n<ul><li>No longer reduces movement speed by -2m during the death immunity phase</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cheat Death',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cloak-of-opportunity">${html('\n<p><a href="/item/cloak-of-opportunity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/cloak_of_opportunity.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cloak of Opportunity patch history</a></p>\n<h3 id="cloak-of-opportunity"><a href="/item/cloak-of-opportunity">Cloak of Opportunity</a></h3>\n')} <ul><li>${html('Barrier increased from 300 to 500')}</li> <li>${html('Cooldown reduced from 14s to 12s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cloak of Opportunity',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 14s to 12s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cloak of Opportunity',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item colossus">${html('\n<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>\n<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>\n<ul><li>Active now grants you an additional +30% Melee Damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Colossus',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item counterspell">${html('\n<p><a href="/item/counterspell"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Counterspell patch history</a></p>\n<h3 id="counterspell"><a href="/item/counterspell">Counterspell</a></h3>\n<ul><li>Bonus Health reduced from 100 to 75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Counterspell',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crushing-fists">${html('\n<p><a href="/item/crushing-fists"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crushing Fists patch history</a></p>\n<h3 id="crushing-fists"><a href="/item/crushing-fists">Crushing Fists</a></h3>\n<ul><li>Heavy Melee Bonus damage now works with heavy melee abilities</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crushing Fists',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cultist-sacrifice">${html('\n<p><a href="/item/cultist-sacrifice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cultist Sacrifice patch history</a></p>\n<h3 id="cultist-sacrifice"><a href="/item/cultist-sacrifice">Cultist Sacrifice</a></h3>\n<ul><li>Ability Range reduced from +15% to +12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cultist Sacrifice',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cursed-relic">${html('\n<p><a href="/item/cursed-relic"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/curse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cursed Relic patch history</a></p>\n<h3 id="cursed-relic"><a href="/item/cursed-relic">Cursed Relic</a></h3>\n<ul><li>Damage penalty increased from -8% to -10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cursed Relic',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n<ul><li>Healing Reduction increased from -45% to -50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item disarming-hex">${html('\n<p><a href="/item/disarming-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/disarming_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Disarming Hex patch history</a></p>\n<h3 id="disarming-hex"><a href="/item/disarming-hex">Disarming Hex</a></h3>\n')} <ul><li>${html('Cooldown reduced from 20s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Disarming Hex',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 20s to 16s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Disarming Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item dispel-magic">${html('\n<p><a href="/item/dispel-magic"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_remover.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dispel Magic patch history</a></p>\n<h3 id="dispel-magic"><a href="/item/dispel-magic">Dispel Magic</a></h3>\n')} <ul><li>${html('Cooldown reduced from 50s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Dispel Magic',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 50s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Dispel Magic',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>Ability Range reduced from +15% to +10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item diviner-s-kevlar">${html('\n<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>\n<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>\n')} <ul><li>${html('Cooldown reduced from 64s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 64s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n<ul><li>No longer grants +5% Ability Range</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item electric-slippers">${html('\n<p><a href="/item/electric-slippers"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/electric_slippers.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Electric Slippers patch history</a></p>\n<h3 id="electric-slippers"><a href="/item/electric-slippers">Electric Slippers</a></h3>\n<ul><li>Damage radius increased from 8m to 12m</li><li>Slide Fire Rate increased from 50% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Electric Slippers',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enchanter-s-emblem">${html('\n<p><a href="/item/enchanters-emblem"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enchanter&#x27;s Emblem patch history</a></p>\n<h3 id="enchanter-s-emblem"><a href="/item/enchanters-emblem">Enchanter&#x27;s Emblem</a></h3>\n<ul><li>Spirit Resist increased from 15% to 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Enchanter's Emblem",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enduring-speed">${html('\n<p><a href="/item/enduring-speed"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Speed patch history</a></p>\n<h3 id="enduring-speed"><a href="/item/enduring-speed">Enduring Speed</a></h3>\n<ul><li>Fixed slow resistance interaction with dash slows</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Enduring Speed',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n')} <ul><li>${html('Cooldown reduced from 45s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 45s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item express-shot">${html('\n<p><a href="/item/express-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Express Shot patch history</a></p>\n<h3 id="express-shot"><a href="/item/express-shot">Express Shot</a></h3>\n<ul><li>Ammo consumed changed from -30% to 2 Ammo</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Express Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extended-magazine">${html('\n<p><a href="/item/extended-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extended Magazine patch history</a></p>\n<h3 id="extended-magazine"><a href="/item/extended-magazine">Extended Magazine</a></h3>\n<ul><li>Weapon Damage increased from +6% to +8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extended Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-health">${html('\n<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>\n<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>\n<ul><li>Increased from 185 to 210</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Health',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Time to regen reduced from 13s to 10s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Base Fire Rate increased from 8% to 10%</li><li>Base Spirit Resist increased from 10% to 15%</li><li>Conditional Fire Rate reduced from 28% to 25%</li><li>Conditional Spirit Resist reduced from 30% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item golden-goose-egg">${html('\n<p><a href="/item/golden-goose-egg"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/goose_egg.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Golden Goose Egg patch history</a></p>\n<h3 id="golden-goose-egg"><a href="/item/golden-goose-egg">Golden Goose Egg</a></h3>\n<ul><li>souls per buff improved from every 200 souls to every 150</li><li>Now has a 2 second channel to hatch</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Golden Goose Egg',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item greater-expansion">${html('\n<p><a href="/item/greater-expansion"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Greater Expansion patch history</a></p>\n<h3 id="greater-expansion"><a href="/item/greater-expansion">Greater Expansion</a></h3>\n<ul><li>Ability Range reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Greater Expansion',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item guardian-ward">${html('\n<p><a href="/item/guardian-ward"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Guardian Ward patch history</a></p>\n<h3 id="guardian-ward"><a href="/item/guardian-ward">Guardian Ward</a></h3>\n<ul><li>Ability Range reduced from 10% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Guardian Ward',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-nova">${html('\n<p><a href="/item/healing-nova"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Nova patch history</a></p>\n<h3 id="healing-nova"><a href="/item/healing-nova">Healing Nova</a></h3>\n<ul><li>Ability Range reduced from +6% to +5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Nova',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item high-velocity-rounds">${html('\n<p><a href="/item/high-velocity-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> High-Velocity Rounds patch history</a></p>\n<h3 id="high-velocity-rounds"><a href="/item/high-velocity-rounds">High-Velocity Rounds</a></h3>\n<ul><li>No longer grants +5% Fire Rate</li><li>Now grants +8% Weapon Damage</li><li>Bullet Velocity increased from +50% to +60% (these changes affect upgrades)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'High-Velocity Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hunter-s-aura">${html('\n<p><a href="/item/hunters-aura"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Hunter&#x27;s Aura patch history</a></p>\n<h3 id="hunter-s-aura"><a href="/item/hunters-aura">Hunter&#x27;s Aura</a></h3>\n<ul><li>Solo hero multiplier reduced from 3x to 2x</li><li>Bullet Resist Reduction increased from -8% to -10%</li><li>Fire Rate Reduction increased from -11% to -14%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Hunter's Aura",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item infinite-rounds">${html('\n<p><a href="/item/infinite-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/infinite_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infinite Rounds patch history</a></p>\n<h3 id="infinite-rounds"><a href="/item/infinite-rounds">Infinite Rounds</a></h3>\n<ul><li>Fire Rate increased from 30% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Infinite Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item inhibitor">${html('\n<p><a href="/item/inhibitor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Inhibitor patch history</a></p>\n<h3 id="inhibitor"><a href="/item/inhibitor">Inhibitor</a></h3>\n<ul><li>Damage Penalty reduced from -35% to -30%</li><li>Weapon Damage bonus increased from +22% to +25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Inhibitor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>Gravity increased from +50% to +100% when the stun hits the target (causes airborne targets to fall faster)</li><li>Ability Range reduced from +6% to +5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Heal on melee hit reduced from 160 to 100 + 1.5/boon</li><li>Heal on melee hit percentage reduced from 50% to 30% + 0.5%/boon</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item long-range">${html('\n<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>\n<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>\n<ul><li>Fall-off Range increased from +4% to +8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Long Range',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item magic-carpet">${html('\n<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>\n<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>\n<ul><li>Duration increased from 8s to 12s</li><li>Bonus health increased from 75 to 125</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Magic Carpet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>Barrier increased from 140 to 200</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n<ul><li>Heavy Melee Bonus damage now works with heavy melee abilities</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item metal-skin">${html('\n<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>\n<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>\n<ul><li>Bullet Resist reduced from 15% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-regeneration">${html('\n<p><a href="/item/mystic-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Regeneration patch history</a></p>\n<h3 id="mystic-regeneration"><a href="/item/mystic-regeneration">Mystic Regeneration</a></h3>\n<ul><li>Health bonus increased from +40 to +50</li><li>Duration increased from 5s to 6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Regeneration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n<ul><li>Damage spirit scaling increased from 0.8 to 1.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystical-piano">${html('\n<p><a href="/item/mystical-piano"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/mystical_piano.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystical Piano patch history</a></p>\n<h3 id="mystical-piano"><a href="/item/mystical-piano">Mystical Piano</a></h3>\n')} <ul><li>${html('Radius increased from 11m to 12m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystical Piano',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Radius increased from 11m to 12m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystical Piano',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item nullification-burst">${html('\n<p><a href="/item/nullification-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/nullification_aura.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Nullification Burst patch history</a></p>\n<h3 id="nullification-burst"><a href="/item/nullification-burst">Nullification Burst</a></h3>\n')} <ul><li>${html('Radius increased from 12m to 20m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Nullification Burst',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Radius increased from 12m to 20m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Now grants +40% Debuff Resistance')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Nullification Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item opening-rounds">${html('\n<p><a href="/item/opening-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Opening Rounds patch history</a></p>\n<h3 id="opening-rounds"><a href="/item/opening-rounds">Opening Rounds</a></h3>\n<ul><li>Spirit Power increased from +8 to +10</li><li>Weapon Damage increased from +40% to +45%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Opening Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item radiant-regeneration">${html('\n<p><a href="/item/radiant-regeneration"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Radiant Regeneration patch history</a></p>\n<h3 id="radiant-regeneration"><a href="/item/radiant-regeneration">Radiant Regeneration</a></h3>\n<ul><li>Health bonus increased from +65 to +90</li><li>Duration increased from 5s to 6s</li><li>Healing on Ability Cast boon scaling increased from 1.5 to 2.0</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Radiant Regeneration',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n<ul><li>Ability Range reduced from +8% to +6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Range increased from 30m to 35m</li><li>Max stamina regen increased from 3 to 4</li><li>Now always restores at least 1 stamina</li><li>Spirit Resist increased from 8% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>Returning damage now always hits the target&#x27;s body (some amount would naturally miss before, and some would be headshots)</li><li>Bullet Damage Returned reduced from 60% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rusted-barrel">${html('\n<p><a href="/item/rusted-barrel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rusted Barrel patch history</a></p>\n<h3 id="rusted-barrel"><a href="/item/rusted-barrel">Rusted Barrel</a></h3>\n')} <ul><li>${html('Cooldown reduced from 20s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 20s to 16s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rusted Barrel',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item seraphim-wings">${html('\n<p><a href="/item/seraphim-wings"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/icarus_wings.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seraphim Wings patch history</a></p>\n<h3 id="seraphim-wings"><a href="/item/seraphim-wings">Seraphim Wings</a></h3>\n<ul><li>In Air Damage Reduction increased from -40% to -60%</li><li>Additional air dash/jump increased from +1 to unlimited</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Seraphim Wings',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-strike">${html('\n<p><a href="/item/shadow-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/shadow_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Strike patch history</a></p>\n<h3 id="shadow-strike"><a href="/item/shadow-strike">Shadow Strike</a></h3>\n<ul><li>Stamina increased from +2 to +3</li><li>Now grants +350 Health</li><li>DPS increased from 75 to 125</li><li>DPS spirit scaling increased from 0.2 to 0.4</li><li>Invis duration increased from 2.5s to 3s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shrink-ray">${html('\n<p><a href="/item/shrink-ray"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/shrink_ray.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shrink Ray patch history</a></p>\n<h3 id="shrink-ray"><a href="/item/shrink-ray">Shrink Ray</a></h3>\n<ul><li>Now grants +20% Fire Rate while shrunk</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shrink Ray',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silence-wave">${html('\n<p><a href="/item/silence-wave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silence Wave patch history</a></p>\n<h3 id="silence-wave"><a href="/item/silence-wave">Silence Wave</a></h3>\n')} <ul><li>${html('Damage spirit scaling increased from 0.6 to 1.0')}</li> <li>${html('Cooldown reduced from 35s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 35s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silence Wave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Now steals 2.5% of enemy max HP per bullet instead of a fixed amount</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n')} <ul><li>${html('Now sets the gravity of an enemy to a fixed +20% (heavier) regardless of their own base values')}</li> <li>${html('Projectile speed increased from 53m/s to 80m/s')}</li> <li>${html('Cooldown reduced from 30s to 27s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Cooldown reduced from 30s to 27s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spellbreaker">${html('\n<p><a href="/item/spellbreaker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spellbreaker patch history</a></p>\n<h3 id="spellbreaker"><a href="/item/spellbreaker">Spellbreaker</a></h3>\n<ul><li>High instant damage reduction reduced from -75% to -65%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spellbreaker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-burn">${html('\n<p><a href="/item/spirit-burn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Burn patch history</a></p>\n<h3 id="spirit-burn"><a href="/item/spirit-burn">Spirit Burn</a></h3>\n<ul><li>Ability Range reduced from +8% to +6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Burn',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-rend">${html('\n<p><a href="/item/spirit-rend"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Rend patch history</a></p>\n<h3 id="spirit-rend"><a href="/item/spirit-rend">Spirit Rend</a></h3>\n')} <ul><li>${html('Cooldown reduced from 2.2s to 2s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Spirit Rend',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 2.2s to 2s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Spirit Lifesteal increased from 8% to 12%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Rend',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-resilience">${html('\n<p><a href="/item/spirit-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Resilience patch history</a></p>\n<h3 id="spirit-resilience"><a href="/item/spirit-resilience">Spirit Resilience</a></h3>\n<ul><li>Low Health threshold increased from 40% to 50%</li><li>Low Health resistance reduced from 22% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-sap">${html('\n<p><a href="/item/spirit-sap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_sap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Sap patch history</a></p>\n<h3 id="spirit-sap"><a href="/item/spirit-sap">Spirit Sap</a></h3>\n')} <ul><li>${html('Spirit Power loss increased from -24 to -30')}</li> <li>${html('Cooldown reduced from 32s to 18s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Spirit Sap',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 32s to 18s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Sap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-shredder-bullets">${html('\n<p><a href="/item/spirit-shredder-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spirit_shredder_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Shredder Bullets patch history</a></p>\n<h3 id="spirit-shredder-bullets"><a href="/item/spirit-shredder-bullets">Spirit Shredder Bullets</a></h3>\n<ul><li>Spirit Lifesteal increased from 8% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Shredder Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Spirit Power increased from 30 to 40</li><li>Now grants +20% Duration instead of +12% CD Reduction</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item split-shot">${html('\n<p><a href="/item/split-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/split_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Split Shot patch history</a></p>\n<h3 id="split-shot"><a href="/item/split-shot">Split Shot</a></h3>\n')} <ul><li>${html('Cooldown reduced from 32s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Split Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 32s to 24s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Now supports custom count and angles per hero')}</li> <li>${html('Enabled for Celeste (3 at 70 degrees)')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Split Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item stalker">${html('\n<p><a href="/item/stalker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Stalker patch history</a></p>\n<h3 id="stalker"><a href="/item/stalker">Stalker</a></h3>\n<ul><li>No longer procs based on angles of attack, but instead based on doing bullet or melee damage within 8m of a hero target</li><li>No longer has a proximity requirement for the overtime bonuses (beyond the 8m proc proximity)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Stalker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item suppressor">${html('\n<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>\n<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>\n<ul><li>Debuff duration increased from 4s to 5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Suppressor',
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
		`<!----></div> <div class="item tankbuster">${html('\n<p><a href="/item/tankbuster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tankbuster patch history</a></p>\n<h3 id="tankbuster"><a href="/item/tankbuster">Tankbuster</a></h3>\n<ul><li>Current Health Bonus Damage increased from 7.5% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tankbuster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item torment-pulse">${html('\n<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>\n<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>\n<ul><li>Damage spirit scaling reduced from 0.28 to 0.25</li><li>No longer hits sleeping enemies to avoid waking them up</li><li>Pulse Damage reduced from 27+0.25 to 25+0.23</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Torment Pulse',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item trophy-collector">${html('\n<p><a href="/item/trophy-collector"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Trophy Collector patch history</a></p>\n<h3 id="trophy-collector"><a href="/item/trophy-collector">Trophy Collector</a></h3>\n<ul><li>Souls per minute increased from 22 to 25</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Trophy Collector',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstable-concoction">${html('\n<p><a href="/item/unstable-concoction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/brawl/unstable_concoction.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstable Concoction patch history</a></p>\n<h3 id="unstable-concoction"><a href="/item/unstable-concoction">Unstable Concoction</a></h3>\n')} <ul><li>${html('Now grants you unstoppable during the pre explosion state')}</li> <li>${html('Radius increased from 18m to 22m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Unstable Concoction',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Radius increased from 18m to 22m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstable Concoction',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vortex-web">${html('\n<p><a href="/item/vortex-web"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/vortex_web.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vortex Web patch history</a></p>\n<h3 id="vortex-web"><a href="/item/vortex-web">Vortex Web</a></h3>\n<ul><li>Now has a unit target option where it will vacuum enemies around that target</li><li>Will now only unit target when used with alt cast</li><li>Ability Range reduced from +10% to +8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vortex Web',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weakening-headshot">${html('\n<p><a href="/item/weakening-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weakening Headshot patch history</a></p>\n<h3 id="weakening-headshot"><a href="/item/weakening-headshot">Weakening Headshot</a></h3>\n<ul><li>Bonus health increased from +50 to +60</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weakening Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weapon-shielding">${html('\n<p><a href="/item/weapon-shielding"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weapon Shielding patch history</a></p>\n<h3 id="weapon-shielding"><a href="/item/weapon-shielding">Weapon Shielding</a></h3>\n')} <ul><li>${html('Damage threshold increased from 150 to 250')}</li> <li>${html('Cooldown reduced from 45s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 45s to 35s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weapon Shielding',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item weighted-shots">${html('\n<p><a href="/item/weighted-shots"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Weighted Shots patch history</a></p>\n<h3 id="weighted-shots"><a href="/item/weighted-shots">Weighted Shots</a></h3>\n<ul><li>Now builds from Slowing Bullets. Has Slowing Bullets passive</li><li>No longer grants +16% Spirit Resist</li><li>Now grants -0.5m Move Speed</li><li>No longer grants -30% Bullet Velocity</li><li>Debuff Resist increased from 16% to 18%</li><li>Weapon Damage increased from 35% to 40%</li><li>Stamina Reduction reduced from -20% to -14%</li><li>Debuff Resist increased from 18% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Weighted Shots',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _3_06_mg as default, metadata, readingManifest, toc };
