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
/* empty css        */ import { a, i as o, n as s } from './vWaTnxY_.js';
function re(ee) {
	s(ee, {
		type: `hero`,
		names: [
			`Abrams`,
			`Bebop`,
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Ivy`,
			`Kelvin`,
			`Lady Geist`,
			`McGinnis`,
			`Mo &amp; Krill`,
			`Paradox`,
			`Pocket`,
			`Seven`,
			`Shiv`,
			`Vindicta`,
			`Viscous`,
			`Warden`,
			`Yamato`
		]
	});
}
function ie(ee) {
	s(ee, {
		type: `item`,
		names:
			`Ammo Scavenger.Berserker.Bullet Armor.Colossus.Decay.Divine Barrier.Echo Shard.Escalating Exposure.Escalating Resilience.Extra Stamina.Fortitude.Frenzy.Headhunter.Headshot Booster.Improved Spirit.Intensifying Magazine.Kinetic Dash.Knockdown.Lifestrike.Magic Carpet.Melee Charge.Melee Lifesteal.Monster Rounds.Mystic Shot.Quicksilver Reload.Rapid Recharge.Refresher.Restorative Locket.Restorative Shot.Return Fire.Ricochet.Shadow Weave.Sharpshooter.Silencer.Siphon Bullets.Soul Rebirth.Spirit Strike.Spiritual Overflow.Titanic Magazine.Torment Pulse.Unstoppable.Vampiric Burst.Veil Walker.Warp Stone`.split(
				`.`
			)
	});
}
var ae = {
		title: `09-26-2024 Update`,
		thread_id: `33015`,
		published: `2024-09-26T14:17:58-0700`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Added new hero, Mirage. Added an initial Anti-Cheat detection system. When a user is detected as cheating, during the game session the opponents will be given a choice between banning the user immediately and ending the match or turning the cheater into a frog for the rest of the game and then banning them afterwards. The system is set to conservative detection levels as we work on a v2 anti-cheat system that is more extensive. We will turn on the banning of users in a couple of days after the update is out. When a match is ended this way, the results will not count for other players. Added global quickcast support. You can now configure your abilities and/or items to be on quickcast mode globally. You can also customize each ability individually to be quickcast or not. This also supports grenade style abilities. Hero specific keybinds now say the ability name instead of ability 1-4 Added Zipline hotkey that can be independently bound from space/jump Fixed per-hero keys not inheriting user-defined default keys properly Added keybind indicator for hero-specific binds showing which keys have been bound for that hero Added Custom Match play mode Private lobbies now have an option to turn on cheats Private lobbies now let you select the specific servers to use Private lobbies now have an option to make the match publicly visible or private to only the players Private lobbies now support post-game and replays properly Private lobbies now allow picking specific lanes (solo and dual lane colors are displayed) Added a cheat report option in-game and post-game Can now mute and report enemy players using ESC while in-game Updated the game access invite UI to make it clear when users have been accepted (in most cases we look into where a user said their friend wasn't accepted, the user was actually accepted but they never claimed the game on the Steam notifications side) Added voice indicators for when players are speaking in party and team chat (green for party, white for team) Updated Player Card and action menu when clicking on a player in the friend list or ESC menu Fixed Rich Presence for Steam and in-game friend lists Party Code is now hidden when you enable Streamer Mode Added Region indicator to the matches on the watch tab Fixed search by MatchID not working for games that are live Added Spectator Fog of War toggle (hotkeys available in settings) Added South Africa servers Added Italian localization Instead of showing the total number of favorites for each build, we now tag popular builds using a mix of both recent and historical usage so that newer builds are easier to find Builds that haven't been updated in 30 days now have a distinct visual General rendering performance improvements Shadow quality improvements for higher shadow settings Fixed issues with player outline rendering in FSR2 Fixed regression with saturation volumes outline not showing up Displacement mapping no longer an official option and will likely be cut (it can be enabled with a ConVar after the game starts) Lighting improvements in map Picking up a powerup will now list all the stats they modify in the HUD instead of a generic name like 'Casting' or 'Gun' Spirit scaling is now always shown on the tooltips without needing to hold alt/tab Updated Viscous icon to look more different from Dynamo Added frosted shell effect on the rejuv crystal when Frozen Shelter is active Music and Sound effects will now pause during game pause Fixed Guardian trying to shoot people unsuccessfully behind cover Fixed Quicksilver Reload bonus damage not working correctly with things like Scorn and Flog Added timer sound to the last couple seconds of Flying Cloak Wall Jumps now use better animations to communicate directionality Fixed jumping between ziplines consuming stamina Fixed Magic Reverb not getting increased bonus damage from damage amps Improved preloading during queue time Updated Killing Blow effects Updated Lightning Ball effects to reduce some visual noise Fixed some issues with Crimson Slash effect not appearing reliably Viscous Puddle Punch will now show a red preview for when the punch is out of range but within 2x of the cast range Fixed Ricochet not respecting LOS when picking the targets No longer play low ammo sounds when firing while sliding Fixed not being able to bind Reload to Mouse Wheel Up/Down Minimap line colors now match the color of the hero drawing them Fixed spectator keybinds not showing correctly Updated Flying Strike effects to reduce some visual noise Fixed Flex Slot unlock order not matching the usual order of unlocks Updated Sleep Dagger projectile, impact and sleeping debuff visuals Fixed imbue and active abilities dialog not responding to keybinds if your ability/item binds included a modifier key or were bound to the mouse wheel Fixed Dynamo not playing an animation during the cast delay on Singularity Updated bullet shield break effects Updated Unstoppable effects to be clearer at cast time Fixed various projectiles going through bosses (Wraith cards, Geist bombs, etc) Fixed Dash not always breaking breakables Breakables will now wait to spawn if a player is in the way Abrams now has a new custom heavy melee animation Updated Haze VO Fixed a bug where Kelvin desperation VO for Arctic Beam and Ice Path were flipped Turned off a Shiv line where he referenced slowing down enemies when he wasn't actually doing so Removed reason 31 of why Lash is better than Bebop and replaced it with reason 26 of why Lash is better than Bebop (fixed a bug with Lash's hero select lines) Replaced a Grey Talon select line to make his intentions more clear Infernus will no longer appear in every bot match Bots can now choose to play Lady Geist, Mirage, Shiv, and Warden Fixed min/max falloff range displaying incorrectly on Weapon Stats Tooltip Updated Rejuvenator buff effect Updated wall bounce effects for Viscous in ball form Added citadel_give_gold cheat command Improved read on the connecting rope for Flying Strike and reduced visual obstruction of the ending slash Music bug fixes for replay and spectating Allow announcer lines for kill streaks and various hero lines to play while the player is in an active combat encounter Timing critical music and sfx will pause and resume in response to game pause Side lanes are now a little further apart from the middle lanes Added a First Blood bonus bounty for the first kill each player gets. Grants 150 bonus souls. Lane setup is now always 1-2-2-1 Zipline Boost now starts on cooldown again Trooper damage reduction from Guardians reduced from 35% to 28% (they die a little faster to Guardians now) Trooper share radius reduced (from allied hero to allied hero 50m->40m, from orb to allied hero 40m->35m) Reverted recent creep sharing duplication changes (back to how it was over a week ago, we want to see if it's still an issue with the other changes in this patch) Some latency-related calculation improvements that help orbs be a little less deny favored Orbs now appear a little smaller to the enemy that is trying to deny them Added a Soul Generator (like the one in hero sandbox) in the respawn area. Starts spawning orbs at 3 minutes. Each orb is worth 10 souls when shot. (primary purpose for this is cases when you are very close to an item purchase) Fire Rate slows now stack diminishingly Rejuv bonus creep HP increased from 50% to 70% Rejuv bonus is no longer consumed for dead players, they have it on their next life now Troopers no longer give half bounty when base guardians are destroyed for that lane Killer to Assist bounty ratio reduced from 2.0 to 1.7 (slightly more to assists) Midgame respawn time increased a bit (reaches 50s at 20 min instead of 40s at 20 min) Teleporter delay reduced from 5s to 4s Guardians now deal 10% more damage to players Sinner's Sacrifice now grants a permanent golden statue bonus when it is killed Fixed Sinner's Sacrifice sharing bounty to nearby allies Added indicator on the hud to help track your passive cooldown items when they are 1s from ready (headshot Booster, Medic Bullets, etc) Boon count increased from 11 to 14 (added to 16/18/20k) Non-Health boon bonuses rescaled over the 14 levels (same total as before) Aggressive crouch spamming within a very narrow window will now cause you to very briefly move progressively slower Added Rejuv drop on a loop in the sandbox mode Added infinite ammo option to sandbox ("No Reload") Fixed dashing downwards not destroying breakables Silence now deselects your ability if you had it open when silenced High-Velocity Mag: Bullet Velocity reduced from +30% to +25% Hollow Point Ward: Spirit Shield increased from +85 to +95 Pristine Emblem: Now requires High-Velocity Mag Pristine Emblem: Now grants +35% Bullet Velocity Combat Barrier: Fire Rate while shielded reduced from 8% to 6% Combat Barrier: Weapon Damage while shielded reduced from 28% to 25% Combat Barrier: Bullet Shield increased from +300 to +325 Health Nova: Weapon Damage increased from 10% to 12% Improved Bullet Armor: Bullet Resist increased from 45% to 50% Mystic Reach: Ability Range increased from 16% to 18% Mystic Reach: Now provides 6% Bullet Resist instead of 6% Spirit Resist Withering Whip: No longer grants +8% Fire Rate Withering Whip: Spirit Power increased from +4 to +6 Withering Whip: Now grants +1 Sprint Withering Whip: Cast range increased from 24m to 30m Withering Whip: Fire Rate slow increased from 40% to 45% Improved Reach: Now provides 12% Bullet Resist instead of 12% Spirit Resist Outer lanes at the middle of the map pushed further away from the inner lanes Added connection from canal near the urn platforms through the Radio Station and Apartment buildings Reworked interior corridors of Fish Market/Nursery to exit to the buildings sooner Added interior room partition from the Fish Market/Nursery to the Shops Moved rope to the Fish Market/Nursery rooftop to the back of the building Removed upper interior hallway from rope to the Fish Market/Nursery rooftops Moved truck from in front of archway with cosmic veil to the back of the Fish Market/Nursery Redesigned outer lane path (ziplines and trooper nodes) from Walker to Guardian on Amber Yellow and Sapphire Purple Added interior passage beside Subway Entrance to the outer lanes Abrams Infernal Resilience reduced from 16% to 15% Infernal Resilience T3 reduced from 9% to 8% Siphon Life spirit scaling increased from 0.2 to 0.3 Fixed Cases where Shoulder Charge was unexpectedly 'slamming' in to walls and stairs Bebop Hook range reduced from 30m to 25m Hyper Beam duration spirit scaling reduced from 0.08 to 0.06 Dynamo Singularity radius reduced from 8m to 7m Grey Talon Arrow cycle time reduced from 0.4s to 0.45s (overall dps unchanged) Rain of Arrows can be alternate-casted to remain near the ground Fixed air dash during Rain of Arrows going half the distance Guided Owl bonus spirit on death now has a 3s buffer window Guided Owl: very slight turn rate improvements Guided Owl radius increased from 12m to 13m Haze Sleep dagger hitbox reduced by 10% Fixed refresher not working properly with Smoke Bomb Fixed some items that didn't proc before: Tesla Bullets, Lucky Shot, Mystic Shot Bullet Dance now more accurately shows who it is shooting Fixed Bullet Dance sometimes not obeying line of sight accurately Bullet Dance bullets are now affected by Time Wall Bullet Dance evasion reduced from 50% to 25% Bullet Dance fire rate reduced from 25% to 15% Ivy Stone Form now works against airborne targets Kudzu Bomb T3 now also grants +2m Radius Kudzu Bomb spirit power scaling increased from 0.6 to 0.7 Fixed clicking noise when flying while disarmed Fixed being able to Stone Form during the Take Flight animation to circumvent the vulnerable cast period Kelvin Headshot bonus damage reduced by 20% Bullet damage growth reduced from 1.2 to 0.9 Arctic Beam movement slow reduced from 70% to 50% Moving through breakables while on Ice Path now destroys them Lady Geist Life Drain cooldown reduced from 42s to 30s Malice cooldown reduced from 6.25s to 6s Malice T1 improved from -2.75s Cooldown to -3s Fixed Life Drain not healing extra based on amplifications (like Soul Shredder and Malice stacks) Sprint increased from 1 to 1.5 McGinnis Fixed looking up circumventing the min range on Wall and Barrage Can now cast parry to cancel your ult Fixed various issues with Spectral Wall indoors and near walls spawning the wrong number of segments Mo & Krill Combo duration reduced from 2.75s to 2.5s Combo damage spirit scaling increased from 0.8 to 1.1 Combo kill trigger now has a 3s buffer window to get credit Sand Blast T1 reduced from +1.5s to +1s Sand Blast range increased from 30m to 35m Burrow base speed increased from 3 to 4 Burrow T3 speed reduced from +3 to +2 Paradox Pulse Grenade T3 now also grants +2% Damage Amp Fixed being unable to be damaged by multiple Time Walls Pocket Affliction no longer goes through walls, now respects line of sight Barrage T3 reduced from +5% to +4% Seven Static Charge stun duration reduced from 1.1 to 0.9 Static Charge T3 reduced from 1.1 to 0.9 Static Charge radius reduced from 6m to 5m Static Charge can now be alternate-casted on self (does not stun you) Static Charge now respects line of sight Lightning Ball T3 now also gives +1m Radius Shiv Slice and Dice T2 reduced from +85 to +75 Killing Blow Rage buildup per spirit damage reduced from 0.02 to 0.013 Killing Blow Rage drain rate increased from 0.3 to 0.35 Killing Blow Full Rage Bonus Damage reduced from 20% to 15% Killing Blow T2 increased from 5% to 10% Vindicta Gun cycle time increased from 0.19s to 0.22s (same overall dps) Stake: distance enemies are allowed to move increased from 6m to 8m Max Falloff reduced from 58m to 45m Fixed Flight ending if you touch the ground Low HP indication now also shows up while unscoped Assassinate Base damage reduced from 160 to 140 Assassinate zoom level reduced a little bit Flight duration spirit scaling reduced from 0.2 to 0.15 Viscous The Cube cleanse is now part of the T2 Puddle Punch enemy warning time increased from 0.35s to 0.45s Bullet Damage reduced from 13 to 12 Can now use down dash during Goo Ball Fixed Phantom Strike not positioning you correctly when using it with your Goo Ball Splatter post cast delay reduced from 0.5s to 0.2s Warden Binding Word escape range and escape time increased by 15% Last Stand spirit scaling increased from 0.9 to 1.2 Yamato Bullet damage growth reduced from 0.5 to 0.45 Crimson Slash fire rate slow reduced from 30% to 20% Fixed various issues with Flying Strike pathing Shadow Transformation duration reduced from 5s to 4.5s Shadow Transformation T3 duration increased from +1.5s to +2s Shadow Transformation no longer provides unlimited ammo Warp Stone Casting while on the ground will no longer stop the player in place, will try to move forward along the ground instead Fixed cases of Warp Stone getting caught on geometry Monster Rounds Bullet Resist vs NPCs reduced from 35% to 30% Restorative Shot Cooldown reduced from 6.2s to 5.5s Headshot Booster Fire Rate reduced from +5% to +4% Kinetic Dash Fire Rate reduced from 25% to 20% Fire Rate max duration reduced from 8s to 7s Berserker Damage required per stack reduced from 110 to 100 Mystic Shot Damage spirit scaling increased from 0.6 to 0.8 Melee Charge Impact now increases your ammo for that mag instead of reloading (so if your ammo is 2/8, it becomes 10/8). Reloads you instantly if in the middle of a reload. Cooldown increased from 8.5s to 10s Intensifying Magazine Max Weapon Damage reduced from 75% to 60% Escalating Resilience Fire Rate reduced from 14% to 12% Headhunter Now requires Headshot Booster No longer grants +50% Bullet Velocity Now grants +5% Fire Rate Fixed not being affected by cooldown reduction Titanic Magazine Ammo increased from 100% to 120% Sharpshooter Fixed falloff reduction not working properly Frenzy Low HP Spirit Resist changed to Bullet Resist Spiritual Overflow Now grants +250 Bullet Shield Silencer Now grants +12 Spirit Ricochet Fire Rate reduced from 12% to 10% Vampiric Burst Fixed casting it interrupting sliding Siphon Bullets Moved to T4 Vitality Now a T4 Vitality Item No longer grants +28% Weapon Damage Now grants +18% Bullet Resistance Shadow Weave Now a T4 Weapon Item Moved to T4 Weapon Melee Lifesteal Melee Damage reduced from 13% to 12% Heal vs non-heroes reduced from 40% to 30% Extra Stamina Stamina Recovery increased from 10% to 14% Restorative Locket No longer requires max stacks to restore a stamina point Divine Barrier Bonus Health reduced from 75 to 50 Return Fire While active grants +25% Bullet Resistance Bullet Damage Returned reduced from 70% to 60% No longer grants +7% Fire Rate Spirit Power increased from +7 to +9 Fixed Ricochet'd bullets not returning the right amount of damage Bullet Armor Bullet Resist increased from 20% to 25% Veil Walker No longer grants +20% Fire Rate Fortitude Bonus Health increased from 275 to 300 Lifestrike Cooldown reduced from 5.25s to 5s Fixed proccing heal more than once when hitting multiple targets Colossus Slow radius increased from 12m to 14m Soul Rebirth Increases base respawn rate by +15s Unstoppable Can no longer be cast during channels Ammo Scavenger Ammo reduced from 15% to 10% Health reduced from 60 to 40 Duration reduced from 35s to 30s Max stacks reduced from 12 to 10 Spirit Strike No longer grants +0.8 Health Regen Quicksilver Reload No longer triggers if your ammo is at max value already Decay Cooldown increased from 32s to 45s Cast range scaling reduced from 0.2 to 0.16 Improved Spirit Spirit Power increased from +21 to +23 Knockdown Now causes enemies to fall down faster Torment Pulse Health Bonus increased from 140 to 160 Spirit Power damage scaling increased from 0.25 to 0.33 Rapid Recharge Faster Time Between Charges increased from +55% to +65% Cooldown Reduction For Charged Abilities increased from +25% to 30% Magic Carpet Fixed it consuming stamina when jumping off Escalating Exposure Fixed the bonus damage being reduced twice by resistance Refresher Bullet Resist increased from 8% to 16% Spirit Resist reduced from 16% to 8% Echo Shard Now has a 0.3s cast delay (like Refresher)`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-21`, to: `2024-09-26` },
			after: { from: `2024-09-27`, to: `2024-09-28` }
		}
	},
	oe = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Infernal Resilience`, id: `infernal-resilience` },
		{ level: 3, title: `Siphon Life`, id: `siphon-life` },
		{ level: 3, title: `Shoulder Charge`, id: `shoulder-charge` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Hook`, id: `hook` },
		{ level: 3, title: `Hyper Beam`, id: `hyper-beam` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Singularity`, id: `singularity` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Rain of Arrows`, id: `rain-of-arrows` },
		{ level: 3, title: `Guided Owl`, id: `guided-owl` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger` },
		{ level: 3, title: `Smoke Bomb`, id: `smoke-bomb` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Stone Form`, id: `stone-form` },
		{ level: 3, title: `Kudzu Bomb`, id: `kudzu-bomb` },
		{ level: 3, title: `Air Drop`, id: `air-drop` },
		{ level: 3, title: `Stone Form`, id: `stone-form-1` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Arctic Beam`, id: `arctic-beam` },
		{ level: 3, title: `Ice Path`, id: `ice-path` },
		{ level: 2, title: `Lady Geist`, id: `lady-geist` },
		{ level: 3, title: `Life Drain`, id: `life-drain` },
		{ level: 3, title: `Malice`, id: `malice` },
		{ level: 3, title: `Life Drain`, id: `life-drain-1` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Can`, id: `can` },
		{ level: 3, title: `Spectral Wall`, id: `spectral-wall` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Combo`, id: `combo` },
		{ level: 3, title: `Sand Blast`, id: `sand-blast` },
		{ level: 3, title: `Burrow`, id: `burrow` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Pulse Grenade`, id: `pulse-grenade` },
		{ level: 3, title: `Time Wall`, id: `time-wall` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Affliction`, id: `affliction` },
		{ level: 3, title: `Barrage`, id: `barrage` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Static Charge`, id: `static-charge` },
		{ level: 3, title: `Lightning Ball`, id: `lightning-ball` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Slice and Dice`, id: `slice-and-dice` },
		{ level: 3, title: `Killing Blow`, id: `killing-blow` },
		{
			level: 3,
			title: `Killing Blow Full Rage Bonus Damage`,
			id: `killing-blow-full-rage-bonus-damage`
		},
		{ level: 3, title: `Killing Blow`, id: `killing-blow-1` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Stake`, id: `stake` },
		{ level: 3, title: `Flight`, id: `flight` },
		{ level: 3, title: `Assassinate`, id: `assassinate` },
		{ level: 3, title: `Assassinate Base`, id: `assassinate-base` },
		{ level: 3, title: `Assassinate`, id: `assassinate-1` },
		{ level: 3, title: `Flight`, id: `flight-1` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `The Cube`, id: `the-cube` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball` },
		{ level: 3, title: `Splatter`, id: `splatter` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Binding Word`, id: `binding-word` },
		{ level: 3, title: `Last Stand`, id: `last-stand` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Crimson Slash`, id: `crimson-slash` },
		{ level: 3, title: `Flying Slash`, id: `flying-slash` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Ammo Scavenger`, id: `ammo-scavenger` },
		{ level: 2, title: `Berserker`, id: `berserker` },
		{ level: 2, title: `Bullet Armor`, id: `bullet-armor` },
		{ level: 2, title: `Colossus`, id: `colossus` },
		{ level: 2, title: `Decay`, id: `decay` },
		{ level: 2, title: `Divine Barrier`, id: `divine-barrier` },
		{ level: 2, title: `Echo Shard`, id: `echo-shard` },
		{ level: 2, title: `Escalating Exposure`, id: `escalating-exposure` },
		{ level: 2, title: `Escalating Resilience`, id: `escalating-resilience` },
		{ level: 2, title: `Extra Stamina`, id: `extra-stamina` },
		{ level: 2, title: `Fortitude`, id: `fortitude` },
		{ level: 2, title: `Frenzy`, id: `frenzy` },
		{ level: 2, title: `Headhunter`, id: `headhunter` },
		{ level: 2, title: `Headshot Booster`, id: `headshot-booster` },
		{ level: 2, title: `Improved Spirit`, id: `improved-spirit` },
		{ level: 2, title: `Intensifying Magazine`, id: `intensifying-magazine` },
		{ level: 2, title: `Kinetic Dash`, id: `kinetic-dash` },
		{ level: 2, title: `Knockdown`, id: `knockdown` },
		{ level: 2, title: `Lifestrike`, id: `lifestrike` },
		{ level: 2, title: `Magic Carpet`, id: `magic-carpet` },
		{ level: 2, title: `Melee Charge`, id: `melee-charge` },
		{ level: 2, title: `Melee Lifesteal`, id: `melee-lifesteal` },
		{ level: 2, title: `Monster Rounds`, id: `monster-rounds` },
		{ level: 2, title: `Mystic Shot`, id: `mystic-shot` },
		{ level: 2, title: `Quicksilver Reload`, id: `quicksilver-reload` },
		{ level: 2, title: `Rapid Recharge`, id: `rapid-recharge` },
		{ level: 2, title: `Refresher`, id: `refresher` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` },
		{ level: 2, title: `Return Fire`, id: `return-fire` },
		{ level: 2, title: `Ricochet`, id: `ricochet` },
		{ level: 2, title: `Shadow Weave`, id: `shadow-weave` },
		{ level: 2, title: `Sharpshooter`, id: `sharpshooter` },
		{ level: 2, title: `Silencer`, id: `silencer` },
		{ level: 2, title: `Siphon Bullets`, id: `siphon-bullets` },
		{ level: 2, title: `Soul Rebirth`, id: `soul-rebirth` },
		{ level: 2, title: `Spirit Strike`, id: `spirit-strike` },
		{ level: 2, title: `Spiritual Overflow`, id: `spiritual-overflow` },
		{ level: 2, title: `Titanic Magazine`, id: `titanic-magazine` },
		{ level: 2, title: `Torment Pulse`, id: `torment-pulse` },
		{ level: 2, title: `Unstoppable`, id: `unstoppable` },
		{ level: 2, title: `Vampiric Burst`, id: `vampiric-burst` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` },
		{ level: 2, title: `Warp Stone`, id: `warp-stone` }
	],
	c = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-09-21`, to: `2024-09-26` },
			after: { from: `2024-09-27`, to: `2024-09-28` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lady Geist`, id: `lady-geist` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Ammo Scavenger`, id: `ammo-scavenger` },
			{ kind: `item`, name: `Berserker`, id: `berserker` },
			{ kind: `item`, name: `Bullet Armor`, id: `bullet-armor` },
			{ kind: `item`, name: `Colossus`, id: `colossus` },
			{ kind: `item`, name: `Decay`, id: `decay` },
			{ kind: `item`, name: `Divine Barrier`, id: `divine-barrier` },
			{ kind: `item`, name: `Echo Shard`, id: `echo-shard` },
			{ kind: `item`, name: `Escalating Exposure`, id: `escalating-exposure` },
			{ kind: `item`, name: `Escalating Resilience`, id: `escalating-resilience` },
			{ kind: `item`, name: `Extra Stamina`, id: `extra-stamina` },
			{ kind: `item`, name: `Fortitude`, id: `fortitude` },
			{ kind: `item`, name: `Frenzy`, id: `frenzy` },
			{ kind: `item`, name: `Headhunter`, id: `headhunter` },
			{ kind: `item`, name: `Headshot Booster`, id: `headshot-booster` },
			{ kind: `item`, name: `Improved Spirit`, id: `improved-spirit` },
			{ kind: `item`, name: `Intensifying Magazine`, id: `intensifying-magazine` },
			{ kind: `item`, name: `Kinetic Dash`, id: `kinetic-dash` },
			{ kind: `item`, name: `Knockdown`, id: `knockdown` },
			{ kind: `item`, name: `Lifestrike`, id: `lifestrike` },
			{ kind: `item`, name: `Magic Carpet`, id: `magic-carpet` },
			{ kind: `item`, name: `Melee Charge`, id: `melee-charge` },
			{ kind: `item`, name: `Melee Lifesteal`, id: `melee-lifesteal` },
			{ kind: `item`, name: `Monster Rounds`, id: `monster-rounds` },
			{ kind: `item`, name: `Mystic Shot`, id: `mystic-shot` },
			{ kind: `item`, name: `Quicksilver Reload`, id: `quicksilver-reload` },
			{ kind: `item`, name: `Rapid Recharge`, id: `rapid-recharge` },
			{ kind: `item`, name: `Refresher`, id: `refresher` },
			{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` },
			{ kind: `item`, name: `Return Fire`, id: `return-fire` },
			{ kind: `item`, name: `Ricochet`, id: `ricochet` },
			{ kind: `item`, name: `Shadow Weave`, id: `shadow-weave` },
			{ kind: `item`, name: `Sharpshooter`, id: `sharpshooter` },
			{ kind: `item`, name: `Silencer`, id: `silencer` },
			{ kind: `item`, name: `Siphon Bullets`, id: `siphon-bullets` },
			{ kind: `item`, name: `Soul Rebirth`, id: `soul-rebirth` },
			{ kind: `item`, name: `Spirit Strike`, id: `spirit-strike` },
			{ kind: `item`, name: `Spiritual Overflow`, id: `spiritual-overflow` },
			{ kind: `item`, name: `Titanic Magazine`, id: `titanic-magazine` },
			{ kind: `item`, name: `Torment Pulse`, id: `torment-pulse` },
			{ kind: `item`, name: `Unstoppable`, id: `unstoppable` },
			{ kind: `item`, name: `Vampiric Burst`, id: `vampiric-burst` },
			{ kind: `item`, name: `Veil Walker`, id: `veil-walker` },
			{ kind: `item`, name: `Warp Stone`, id: `warp-stone` }
		],
		related: []
	},
	se = ee(
		`<!> <!> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li></li> <li></li> <li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <!></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <ul><li></li> <li></li> <li><!> <!></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div>`,
		1
	);
function ce(ee) {
	var s = se(),
		ae = ne(s);
	t(
		ae,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Added new hero, Mirage.</li></ul>
<p><img src="https://project8-data.community.forum/attachments/20/20368-e3ba7aa1f4a51da04dc021866fa54506.jpg?hash=ymVdtOoaPa" alt="hero mirage"  decoding="async" loading="eager"/></p>
<ul><li>Added an initial Anti-Cheat detection system. When a user is detected as cheating, during the game session the opponents will be given a choice between banning the user immediately and ending the match or turning the cheater into a frog for the rest of the game and then banning them afterwards. The system is set to conservative detection levels as we work on a v2 anti-cheat system that is more extensive. We will turn on the banning of users in a couple of days after the update is out. When a match is ended this way, the results will not count for other players.</li></ul>
<p><img src="https://project8-data.community.forum/attachments/20/20367-5afd920938a15b06c92dbacbd525b980.jpg?hash=QQG9epHAYO" alt="two buttons abrams"  decoding="async" loading="lazy"/></p>
<ul><li>Added global quickcast support. You can now configure your abilities and/or items to be on quickcast mode globally. You can also customize each ability individually to be quickcast or not. This also supports grenade style abilities.</li><li>Hero specific keybinds now say the ability name instead of ability 1-4</li><li>Added Zipline hotkey that can be independently bound from space/jump</li><li>Fixed per-hero keys not inheriting user-defined default keys properly</li><li>Added keybind indicator for hero-specific binds showing which keys have been bound for that hero</li><li>Added Custom Match play mode</li><li>Private lobbies now have an option to turn on cheats</li><li>Private lobbies now let you select the specific servers to use</li><li>Private lobbies now have an option to make the match publicly visible or private to only the players</li><li>Private lobbies now support post-game and replays properly</li><li>Private lobbies now allow picking specific lanes (solo and dual lane colors are displayed)</li><li>Added a cheat report option in-game and post-game</li><li>Can now mute and report enemy players using ESC while in-game</li><li>Updated the game access invite UI to make it clear when users have been accepted (in most cases we look into where a user said their friend wasn&#x27;t accepted, the user was actually accepted but they never claimed the game on the Steam notifications side)</li><li>Added voice indicators for when players are speaking in party and team chat (green for party, white for team)</li><li>Updated Player Card and action menu when clicking on a player in the friend list or ESC menu</li><li>Fixed Rich Presence for Steam and in-game friend lists</li><li>Party Code is now hidden when you enable Streamer Mode</li><li>Added Region indicator to the matches on the watch tab</li><li>Fixed search by MatchID not working for games that are live</li><li>Added Spectator Fog of War toggle (hotkeys available in settings)</li><li>Added South Africa servers</li><li>Added Italian localization</li><li>Instead of showing the total number of favorites for each build, we now tag popular builds using a mix of both recent and historical usage so that newer builds are easier to find</li><li>Builds that haven&#x27;t been updated in 30 days now have a distinct visual</li><li>General rendering performance improvements</li><li>Shadow quality improvements for higher shadow settings</li><li>Fixed issues with player outline rendering in FSR2</li><li>Fixed regression with saturation volumes outline not showing up</li><li>Displacement mapping no longer an official option and will likely be cut (it can be enabled with a ConVar after the game starts)</li><li>Lighting improvements in map</li><li>Picking up a powerup will now list all the stats they modify in the HUD instead of a generic name like &#x27;Casting&#x27; or &#x27;Gun&#x27;</li><li>Spirit scaling is now always shown on the tooltips without needing to hold alt/tab</li><li>Updated Viscous icon to look more different from Dynamo</li><li>Added frosted shell effect on the rejuv crystal when Frozen Shelter is active</li><li>Music and Sound effects will now pause during game pause</li><li>Fixed Guardian trying to shoot people unsuccessfully behind cover</li><li>Fixed Quicksilver Reload bonus damage not working correctly with things like Scorn and Flog</li><li>Added timer sound to the last couple seconds of Flying Cloak</li><li>Wall Jumps now use better animations to communicate directionality</li><li>Fixed jumping between ziplines consuming stamina</li><li>Fixed Magic Reverb not getting increased bonus damage from damage amps</li><li>Improved preloading during queue time</li><li>Updated Killing Blow effects</li><li>Updated Lightning Ball effects to reduce some visual noise</li><li>Fixed some issues with Crimson Slash effect not appearing reliably</li><li>Viscous Puddle Punch will now show a red preview for when the punch is out of range but within 2x of the cast range</li><li>Fixed Ricochet not respecting LOS when picking the targets</li><li>No longer play low ammo sounds when firing while sliding</li><li>Fixed not being able to bind Reload to Mouse Wheel Up/Down</li><li>Minimap line colors now match the color of the hero drawing them</li><li>Fixed spectator keybinds not showing correctly</li><li>Updated Flying Strike effects to reduce some visual noise</li><li>Fixed Flex Slot unlock order not matching the usual order of unlocks</li><li>Updated Sleep Dagger projectile, impact and sleeping debuff visuals</li><li>Fixed imbue and active abilities dialog not responding to keybinds if your ability/item binds included a modifier key or were bound to the mouse wheel</li><li>Fixed Dynamo not playing an animation during the cast delay on Singularity</li><li>Updated bullet shield break effects</li><li>Updated Unstoppable effects to be clearer at cast time</li><li>Fixed various projectiles going through bosses (Wraith cards, Geist bombs, etc)</li><li>Fixed Dash not always breaking breakables</li><li>Breakables will now wait to spawn if a player is in the way</li><li>Abrams now has a new custom heavy melee animation</li><li>Updated Haze VO</li><li>Fixed a bug where Kelvin desperation VO for Arctic Beam and Ice Path were flipped</li><li>Turned off a Shiv line where he referenced slowing down enemies when he wasn&#x27;t actually doing so</li><li>Removed reason 31 of why Lash is better than Bebop and replaced it with reason 26 of why Lash is better than Bebop (fixed a bug with Lash&#x27;s hero select lines)</li><li>Replaced a Grey Talon select line to make his intentions more clear</li><li>Infernus will no longer appear in every bot match</li><li>Bots can now choose to play Lady Geist, Mirage, Shiv, and Warden</li><li>Fixed min/max falloff range displaying incorrectly on Weapon Stats Tooltip</li><li>Updated Rejuvenator buff effect</li><li>Updated wall bounce effects for Viscous in ball form</li><li>Added citadel_give_gold cheat command</li><li>Improved read on the connecting rope for Flying Strike and reduced visual obstruction of the ending slash</li><li>Music bug fixes for replay and spectating</li><li>Allow announcer lines for kill streaks and various hero lines to play while the player is in an active combat encounter</li><li>Timing critical music and sfx will pause and resume in response to game pause</li><li>Side lanes are now a little further apart from the middle lanes</li><li>Added a First Blood bonus bounty for the first kill each player gets. Grants 150 bonus souls.</li><li>Lane setup is now always 1-2-2-1</li><li>Zipline Boost now starts on cooldown again</li><li>Trooper damage reduction from Guardians reduced from 35% to 28% (they die a little faster to Guardians now)</li><li>Trooper share radius reduced (from allied hero to allied hero 50m-&gt;40m, from orb to allied hero 40m-&gt;35m)</li><li>Reverted recent creep sharing duplication changes (back to how it was over a week ago, we want to see if it&#x27;s still an issue with the other changes in this patch)</li><li>Some latency-related calculation improvements that help orbs be a little less deny favored</li><li>Orbs now appear a little smaller to the enemy that is trying to deny them</li><li>Added a Soul Generator (like the one in hero sandbox) in the respawn area. Starts spawning orbs at 3 minutes. Each orb is worth 10 souls when shot. (primary purpose for this is cases when you are very close to an item purchase)</li><li>Fire Rate slows now stack diminishingly</li><li>Rejuv bonus creep HP increased from 50% to 70%</li><li>Rejuv bonus is no longer consumed for dead players, they have it on their next life now</li><li>Troopers no longer give half bounty when base guardians are destroyed for that lane</li><li>Killer to Assist bounty ratio reduced from 2.0 to 1.7 (slightly more to assists)</li><li>Midgame respawn time increased a bit (reaches 50s at 20 min instead of 40s at 20 min)</li><li>Teleporter delay reduced from 5s to 4s</li><li>Guardians now deal 10% more damage to players</li><li>Sinner&#x27;s Sacrifice now grants a permanent golden statue bonus when it is killed</li><li>Fixed Sinner&#x27;s Sacrifice sharing bounty to nearby allies</li><li>Added indicator on the hud to help track your passive cooldown items when they are 1s from ready (headshot Booster, Medic Bullets, etc)</li><li>Boon count increased from 11 to 14 (added to 16/18/20k)</li><li>Non-Health boon bonuses rescaled over the 14 levels (same total as before)</li><li>Aggressive crouch spamming within a very narrow window will now cause you to very briefly move progressively slower</li><li>Added Rejuv drop on a loop in the sandbox mode</li><li>Added infinite ammo option to sandbox (&quot;No Reload&quot;)</li><li>Fixed dashing downwards not destroying breakables</li><li>Silence now deselects your ability if you had it open when silenced</li><li>High-Velocity Mag: Bullet Velocity reduced from +30% to +25%</li><li>Hollow Point Ward: Spirit Shield increased from +85 to +95</li><li>Pristine Emblem: Now requires High-Velocity Mag</li><li>Pristine Emblem: Now grants +35% Bullet Velocity</li><li>Combat Barrier: Fire Rate while shielded reduced from 8% to 6%</li><li>Combat Barrier: Weapon Damage while shielded reduced from 28% to 25%</li><li>Combat Barrier: Bullet Shield increased from +300 to +325</li><li>Health Nova: Weapon Damage increased from 10% to 12%</li><li>Improved Bullet Armor: Bullet Resist increased from 45% to 50%</li><li>Mystic Reach: Ability Range increased from 16% to 18%</li><li>Mystic Reach: Now provides 6% Bullet Resist instead of 6% Spirit Resist</li><li>Withering Whip: No longer grants +8% Fire Rate</li><li>Withering Whip: Spirit Power increased from +4 to +6</li><li>Withering Whip: Now grants +1 Sprint</li><li>Withering Whip: Cast range increased from 24m to 30m</li><li>Withering Whip: Fire Rate slow increased from 40% to 45%</li><li>Improved Reach: Now provides 12% Bullet Resist instead of 12% Spirit Resist</li><li>Outer lanes at the middle of the map pushed further away from the inner lanes</li><li>Added connection from canal near the urn platforms through the Radio Station and Apartment buildings</li></ul>
<p><img src="https://project8-data.community.forum/attachments/20/20364-737a9eb201f55b83b3b09dc8d87bd1c2.jpg?hash=0gyuyoyo_r" alt="radio station connection"  decoding="async" loading="lazy"/></p>
<ul><li>Reworked interior corridors of Fish Market/Nursery to exit to the buildings sooner</li><li>Added interior room partition from the Fish Market/Nursery to the Shops</li><li>Moved rope to the Fish Market/Nursery rooftop to the back of the building</li><li>Removed upper interior hallway from rope to the Fish Market/Nursery rooftops</li><li>Moved truck from in front of archway with cosmic veil to the back of the Fish Market/Nursery</li></ul>
<p><img src="https://project8-data.community.forum/attachments/20/20363-389f6eb1102c577c4052e2f4307e2341.jpg?hash=xVUkAzjhW9" alt="fish market changes"  decoding="async" loading="lazy"/></p>
<ul><li>Redesigned outer lane path (ziplines and trooper nodes) from Walker to Guardian on Amber Yellow and Sapphire Purple</li></ul>
<p><img src="https://project8-data.community.forum/attachments/20/20361-1672050e626e1611deecb2139c8b59f7.jpg?hash=iojHR_BDBx" alt="amber yellow patch"  decoding="async" loading="lazy"/> <img src="https://project8-data.community.forum/attachments/20/20362-0ce5e2aaa8d4e097eeec35b303e96b82.jpg?hash=vXAxwTYkow" alt="amber purple patch"  decoding="async" loading="lazy"/></p>
<ul><li>Added interior passage beside Subway Entrance to the outer lanes</li></ul>
<p><img src="https://project8-data.community.forum/attachments/20/20366-90529144c84ff416aea345345096a12e.jpg?hash=_S-M-Q7HiK" alt="subway entrance connection"  decoding="async" loading="lazy"/></p>
<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>
`
	);
	var oe = i(ae, 2);
	re(oe, {});
	var c = i(oe, 2);
	n(c, 1, `hero abrams`);
	var ce = r(c);
	t(
		ce,
		() => `
<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>
<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>
`
	);
	var l = i(ce, 2);
	n(l, 1, `ability infernal-resilience`);
	var le = r(l);
	t(
		le,
		() => `
<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>
<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>
<ul><li>Infernal Resilience reduced from 16% to 15%</li><li>Infernal Resilience T3 reduced from 9% to 8%</li></ul>
`
	);
	var ue = i(le, 2);
	(a(ue, { kind: `hero`, name: `Abrams`, ability: `Infernal Resilience` }), e(l));
	var u = i(l, 2);
	n(u, 1, `ability siphon-life`);
	var de = r(u);
	t(
		de,
		() => `
<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>
<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>
<ul><li>Siphon Life spirit scaling increased from 0.2 to 0.3</li></ul>
`
	);
	var fe = i(de, 2);
	(a(fe, { kind: `hero`, name: `Abrams`, ability: `Siphon Life` }), e(u));
	var pe = i(u, 2);
	n(pe, 1, `ability shoulder-charge`);
	var me = r(pe);
	t(
		me,
		() => `
<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>
<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>
<ul><li>Fixed Cases where Shoulder Charge was unexpectedly &#x27;slamming&#x27; in to walls and stairs</li></ul>
`
	);
	var he = i(me, 2);
	(a(he, { kind: `hero`, name: `Abrams`, ability: `Shoulder Charge` }), e(pe), e(c));
	var d = i(c, 2);
	n(d, 1, `hero bebop`);
	var ge = r(d);
	t(
		ge,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
`
	);
	var f = i(ge, 2);
	n(f, 1, `ability hook`);
	var _e = r(f);
	t(
		_e,
		() => `
<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>
<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>
<ul><li>Hook range reduced from 30m to 25m</li></ul>
`
	);
	var ve = i(_e, 2);
	(a(ve, { kind: `hero`, name: `Bebop`, ability: `Hook` }), e(f));
	var ye = i(f, 2);
	n(ye, 1, `ability hyper-beam`);
	var be = r(ye);
	t(
		be,
		() => `
<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>
<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>
<ul><li>Hyper Beam duration spirit scaling reduced from 0.08 to 0.06</li></ul>
`
	);
	var xe = i(be, 2);
	(a(xe, { kind: `hero`, name: `Bebop`, ability: `Hyper Beam` }), e(ye), e(d));
	var p = i(d, 2);
	n(p, 1, `hero dynamo`);
	var Se = r(p);
	t(
		Se,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var Ce = i(Se, 2);
	n(Ce, 1, `ability singularity`);
	var we = r(Ce);
	t(
		we,
		() => `
<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>
<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>
`
	);
	var Te = i(we, 2),
		Ee = r(Te),
		De = r(Ee);
	t(De, () => `Singularity radius reduced from 8m to 7m`);
	var Oe = i(De, 2);
	(o(Oe, {
		kind: `hero`,
		name: `Dynamo`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Singularity radius reduced from 8m to 7m`
	}),
		e(Ee),
		e(Te));
	var ke = i(Te, 2);
	(a(ke, { kind: `hero`, name: `Dynamo`, ability: `Singularity` }), e(Ce), e(p));
	var m = i(p, 2);
	n(m, 1, `hero grey-talon`);
	var Ae = r(m);
	t(
		Ae,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
<ul><li>Arrow cycle time reduced from 0.4s to 0.45s (overall dps unchanged)</li></ul>
`
	);
	var h = i(Ae, 2);
	n(h, 1, `ability rain-of-arrows`);
	var je = r(h);
	t(
		je,
		() => `
<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>
<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>
<ul><li>Rain of Arrows can be alternate-casted to remain near the ground</li><li>Fixed air dash during Rain of Arrows going half the distance</li></ul>
`
	);
	var Me = i(je, 2);
	(a(Me, { kind: `hero`, name: `Grey Talon`, ability: `Rain of Arrows` }), e(h));
	var Ne = i(h, 2);
	n(Ne, 1, `ability guided-owl`);
	var Pe = r(Ne);
	t(
		Pe,
		() => `
<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>
<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>
`
	);
	var Fe = i(Pe, 2),
		Ie = r(Fe);
	(t(Ie, () => `Guided Owl bonus spirit on death now has a 3s buffer window`, !0), e(Ie));
	var Le = i(Ie, 2);
	(t(Le, () => `Guided Owl: very slight turn rate improvements`, !0), e(Le));
	var Re = i(Le, 2),
		ze = r(Re);
	t(ze, () => `Guided Owl radius increased from 12m to 13m`);
	var Be = i(ze, 2);
	(o(Be, {
		kind: `hero`,
		name: `Grey Talon`,
		groupIndex: 2,
		bulletIndex: 2,
		text: `Guided Owl radius increased from 12m to 13m`
	}),
		e(Re),
		e(Fe));
	var Ve = i(Fe, 2);
	(a(Ve, { kind: `hero`, name: `Grey Talon`, ability: `Guided Owl` }), e(Ne), e(m));
	var g = i(m, 2);
	n(g, 1, `hero haze`);
	var He = r(g);
	t(
		He,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var _ = i(He, 2);
	n(_, 1, `ability sleep-dagger`);
	var Ue = r(_);
	t(
		Ue,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep dagger hitbox reduced by 10%</li></ul>
`
	);
	var We = i(Ue, 2);
	(a(We, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), e(_));
	var v = i(_, 2);
	n(v, 1, `ability smoke-bomb`);
	var Ge = r(v);
	t(
		Ge,
		() => `
<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>
<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>
<ul><li>Fixed refresher not working properly with Smoke Bomb</li><li>Fixed some items that didn&#x27;t proc before: Tesla Bullets, Lucky Shot, Mystic Shot</li></ul>
`
	);
	var Ke = i(Ge, 2);
	(a(Ke, { kind: `hero`, name: `Haze`, ability: `Smoke Bomb` }), e(v));
	var qe = i(v, 2);
	n(qe, 1, `ability bullet-dance`);
	var Je = r(qe);
	t(
		Je,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
<ul><li>Bullet Dance now more accurately shows who it is shooting</li><li>Fixed Bullet Dance sometimes not obeying line of sight accurately</li><li>Bullet Dance bullets are now affected by Time Wall</li><li>Bullet Dance evasion reduced from 50% to 25%</li><li>Bullet Dance fire rate reduced from 25% to 15%</li></ul>
`
	);
	var Ye = i(Je, 2);
	(a(Ye, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), e(qe), e(g));
	var y = i(g, 2);
	n(y, 1, `hero ivy`);
	var Xe = r(y);
	t(
		Xe,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
`
	);
	var b = i(Xe, 2);
	n(b, 1, `ability stone-form`);
	var Ze = r(b);
	t(
		Ze,
		() => `
<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>
<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>
<ul><li>Stone Form now works against airborne targets</li></ul>
`
	);
	var Qe = i(Ze, 2);
	(a(Qe, { kind: `hero`, name: `Ivy`, ability: `Stone Form` }), e(b));
	var x = i(b, 2);
	n(x, 1, `ability kudzu-bomb`);
	var $e = r(x);
	t(
		$e,
		() => `
<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb change history</a></p>
<h4 id="kudzu-bomb"><a href="/ability/entangling-thorns">Kudzu Bomb</a></h4>
<ul><li>Kudzu Bomb T3 now also grants +2m Radius</li><li>Kudzu Bomb spirit power scaling increased from 0.6 to 0.7</li></ul>
`
	);
	var et = i($e, 2);
	(a(et, { kind: `hero`, name: `Ivy`, ability: `Kudzu Bomb` }), e(x));
	var S = i(x, 2);
	n(S, 1, `ability air-drop`);
	var tt = r(S);
	t(
		tt,
		() => `
<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>
<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>
<ul><li>Fixed clicking noise when flying while disarmed</li></ul>
`
	);
	var nt = i(tt, 2);
	(a(nt, { kind: `hero`, name: `Ivy`, ability: `Air Drop` }), e(S));
	var rt = i(S, 2);
	n(rt, 1, `ability stone-form`);
	var it = r(rt);
	t(
		it,
		() => `
<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>
<h4 id="stone-form-1"><a href="/ability/stone-form">Stone Form</a></h4>
<ul><li>Fixed being able to Stone Form during the Take Flight animation to circumvent the vulnerable cast period</li></ul>
`
	);
	var at = i(it, 2);
	(a(at, { kind: `hero`, name: `Ivy`, ability: `Stone Form` }), e(rt), e(y));
	var C = i(y, 2);
	n(C, 1, `hero kelvin`);
	var ot = r(C);
	t(
		ot,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
<ul><li>Headshot bonus damage reduced by 20%</li><li>Bullet damage growth reduced from 1.2 to 0.9</li></ul>
`
	);
	var w = i(ot, 2);
	n(w, 1, `ability arctic-beam`);
	var st = r(w);
	t(
		st,
		() => `
<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>
<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>
<ul><li>Arctic Beam movement slow reduced from 70% to 50%</li></ul>
`
	);
	var ct = i(st, 2);
	(a(ct, { kind: `hero`, name: `Kelvin`, ability: `Arctic Beam` }), e(w));
	var lt = i(w, 2);
	n(lt, 1, `ability ice-path`);
	var ut = r(lt);
	t(
		ut,
		() => `
<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>
<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>
<ul><li>Moving through breakables while on Ice Path now destroys them</li></ul>
`
	);
	var dt = i(ut, 2);
	(a(dt, { kind: `hero`, name: `Kelvin`, ability: `Ice Path` }), e(lt), e(C));
	var T = i(C, 2);
	n(T, 1, `hero lady-geist`);
	var ft = r(T);
	t(
		ft,
		() => `
<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>
<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>
`
	);
	var E = i(ft, 2);
	n(E, 1, `ability life-drain`);
	var pt = r(E);
	t(
		pt,
		() => `
<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>
<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>
`
	);
	var mt = i(pt, 2),
		ht = r(mt),
		gt = r(ht);
	t(gt, () => `Life Drain cooldown reduced from 42s to 30s`);
	var _t = i(gt, 2);
	(o(_t, {
		kind: `hero`,
		name: `Lady Geist`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Life Drain cooldown reduced from 42s to 30s`
	}),
		e(ht),
		e(mt));
	var vt = i(mt, 2);
	(a(vt, { kind: `hero`, name: `Lady Geist`, ability: `Life Drain` }), e(E));
	var D = i(E, 2);
	n(D, 1, `ability malice`);
	var yt = r(D);
	t(
		yt,
		() => `
<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>
<h4 id="malice"><a href="/ability/malice">Malice</a></h4>
`
	);
	var bt = i(yt, 2),
		xt = r(bt),
		St = r(xt);
	t(St, () => `Malice cooldown reduced from 6.25s to 6s`);
	var Ct = i(St, 2);
	(o(Ct, {
		kind: `hero`,
		name: `Lady Geist`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Malice cooldown reduced from 6.25s to 6s`
	}),
		e(xt));
	var wt = i(xt, 2);
	(t(wt, () => `Malice T1 improved from -2.75s Cooldown to -3s`, !0), e(wt), e(bt));
	var Tt = i(bt, 2);
	(a(Tt, { kind: `hero`, name: `Lady Geist`, ability: `Malice` }), e(D));
	var O = i(D, 2);
	n(O, 1, `ability life-drain`);
	var Et = r(O);
	t(
		Et,
		() => `
<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>
<h4 id="life-drain-1"><a href="/ability/life-drain">Life Drain</a></h4>
<ul><li>Fixed Life Drain not healing extra based on amplifications (like Soul Shredder and Malice stacks)</li></ul>
`
	);
	var Dt = i(Et, 2);
	(a(Dt, { kind: `hero`, name: `Lady Geist`, ability: `Life Drain` }), e(O));
	var Ot = i(O, 2);
	(t(
		Ot,
		() => `
<ul><li>Sprint increased from 1 to 1.5</li></ul>
`
	),
		e(T));
	var k = i(T, 2);
	n(k, 1, `hero mcginnis`);
	var kt = r(k);
	t(
		kt,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
<ul><li>Fixed looking up circumventing the min range on Wall and Barrage</li></ul>
`
	);
	var A = i(kt, 2);
	n(A, 1, `ability can`);
	var At = r(A);
	t(
		At,
		() => `
<h4 id="can">Can</h4>
<ul><li>Can now cast parry to cancel your ult</li></ul>
`
	);
	var jt = i(At, 2);
	(a(jt, { kind: `hero`, name: `McGinnis`, ability: `Can` }), e(A));
	var Mt = i(A, 2);
	n(Mt, 1, `ability spectral-wall`);
	var Nt = r(Mt);
	t(
		Nt,
		() => `
<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>
<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>
<ul><li>Fixed various issues with Spectral Wall indoors and near walls spawning the wrong number of segments</li></ul>
`
	);
	var Pt = i(Nt, 2);
	(a(Pt, { kind: `hero`, name: `McGinnis`, ability: `Spectral Wall` }), e(Mt), e(k));
	var j = i(k, 2);
	n(j, 1, `hero mo-krill`);
	var Ft = r(j);
	t(
		Ft,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
`
	);
	var M = i(Ft, 2);
	n(M, 1, `ability combo`);
	var It = r(M);
	t(
		It,
		() => `
<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>
<h4 id="combo"><a href="/ability/combo">Combo</a></h4>
<ul><li>Combo duration reduced from 2.75s to 2.5s</li><li>Combo damage spirit scaling increased from 0.8 to 1.1</li><li>Combo kill trigger now has a 3s buffer window to get credit</li></ul>
`
	);
	var Lt = i(It, 2);
	(a(Lt, { kind: `hero`, name: `Mo & Krill`, ability: `Combo` }), e(M));
	var N = i(M, 2);
	n(N, 1, `ability sand-blast`);
	var Rt = r(N);
	t(
		Rt,
		() => `
<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>
<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>
<ul><li>Sand Blast T1 reduced from +1.5s to +1s</li><li>Sand Blast range increased from 30m to 35m</li></ul>
`
	);
	var zt = i(Rt, 2);
	(a(zt, { kind: `hero`, name: `Mo & Krill`, ability: `Sand Blast` }), e(N));
	var Bt = i(N, 2);
	n(Bt, 1, `ability burrow`);
	var Vt = r(Bt);
	t(
		Vt,
		() => `
<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>
<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>
<ul><li>Burrow base speed increased from 3 to 4</li><li>Burrow T3 speed reduced from +3 to +2</li></ul>
`
	);
	var Ht = i(Vt, 2);
	(a(Ht, { kind: `hero`, name: `Mo & Krill`, ability: `Burrow` }), e(Bt), e(j));
	var P = i(j, 2);
	n(P, 1, `hero paradox`);
	var Ut = r(P);
	t(
		Ut,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var F = i(Ut, 2);
	n(F, 1, `ability pulse-grenade`);
	var Wt = r(F);
	t(
		Wt,
		() => `
<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>
<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>
<ul><li>Pulse Grenade T3 now also grants +2% Damage Amp</li></ul>
`
	);
	var Gt = i(Wt, 2);
	(a(Gt, { kind: `hero`, name: `Paradox`, ability: `Pulse Grenade` }), e(F));
	var Kt = i(F, 2);
	n(Kt, 1, `ability time-wall`);
	var qt = r(Kt);
	t(
		qt,
		() => `
<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>
<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>
<ul><li>Fixed being unable to be damaged by multiple Time Walls</li></ul>
`
	);
	var Jt = i(qt, 2);
	(a(Jt, { kind: `hero`, name: `Paradox`, ability: `Time Wall` }), e(Kt), e(P));
	var I = i(P, 2);
	n(I, 1, `hero pocket`);
	var Yt = r(I);
	t(
		Yt,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
`
	);
	var L = i(Yt, 2);
	n(L, 1, `ability affliction`);
	var Xt = r(L);
	t(
		Xt,
		() => `
<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>
<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>
<ul><li>Affliction no longer goes through walls, now respects line of sight</li></ul>
`
	);
	var Zt = i(Xt, 2);
	(a(Zt, { kind: `hero`, name: `Pocket`, ability: `Affliction` }), e(L));
	var Qt = i(L, 2);
	n(Qt, 1, `ability barrage`);
	var $t = r(Qt);
	t(
		$t,
		() => `
<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>
<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>
<ul><li>Barrage T3 reduced from +5% to +4%</li></ul>
`
	);
	var en = i($t, 2);
	(a(en, { kind: `hero`, name: `Pocket`, ability: `Barrage` }), e(Qt), e(I));
	var R = i(I, 2);
	n(R, 1, `hero seven`);
	var tn = r(R);
	t(
		tn,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var z = i(tn, 2);
	n(z, 1, `ability static-charge`);
	var nn = r(z);
	t(
		nn,
		() => `
<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>
<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>
`
	);
	var rn = i(nn, 2),
		an = r(rn);
	(t(an, () => `Static Charge stun duration reduced from 1.1 to 0.9`, !0), e(an));
	var on = i(an, 2);
	(t(on, () => `Static Charge T3 reduced from 1.1 to 0.9`, !0), e(on));
	var sn = i(on, 2),
		cn = r(sn);
	t(cn, () => `Static Charge radius reduced from 6m to 5m`);
	var ln = i(cn, 2);
	(o(ln, {
		kind: `hero`,
		name: `Seven`,
		groupIndex: 0,
		bulletIndex: 2,
		text: `Static Charge radius reduced from 6m to 5m`
	}),
		e(sn));
	var un = i(sn, 2);
	(t(
		un,
		() => `Static Charge can now be alternate-casted on self (does not stun you)`,
		!0
	),
		e(un));
	var dn = i(un, 2);
	(t(dn, () => `Static Charge now respects line of sight`, !0), e(dn), e(rn));
	var fn = i(rn, 2);
	(a(fn, { kind: `hero`, name: `Seven`, ability: `Static Charge` }), e(z));
	var pn = i(z, 2);
	n(pn, 1, `ability lightning-ball`);
	var mn = r(pn);
	t(
		mn,
		() => `
<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>
<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>
<ul><li>Lightning Ball T3 now also gives +1m Radius</li></ul>
`
	);
	var hn = i(mn, 2);
	(a(hn, { kind: `hero`, name: `Seven`, ability: `Lightning Ball` }), e(pn), e(R));
	var B = i(R, 2);
	n(B, 1, `hero shiv`);
	var gn = r(B);
	t(
		gn,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
`
	);
	var V = i(gn, 2);
	n(V, 1, `ability slice-and-dice`);
	var _n = r(V);
	t(
		_n,
		() => `
<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>
<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>
<ul><li>Slice and Dice T2 reduced from +85 to +75</li></ul>
`
	);
	var vn = i(_n, 2);
	(a(vn, { kind: `hero`, name: `Shiv`, ability: `Slice and Dice` }), e(V));
	var H = i(V, 2);
	n(H, 1, `ability killing-blow`);
	var yn = r(H);
	t(
		yn,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>
<ul><li>Killing Blow Rage buildup per spirit damage reduced from 0.02 to 0.013</li><li>Killing Blow Rage drain rate increased from 0.3 to 0.35</li></ul>
`
	);
	var bn = i(yn, 2);
	(a(bn, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), e(H));
	var U = i(H, 2);
	n(U, 1, `ability killing-blow-full-rage-bonus-damage`);
	var xn = r(U);
	t(
		xn,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow Full Rage Bonus Damage change history</a></p>
<h4 id="killing-blow-full-rage-bonus-damage"><a href="/ability/killing-blow">Killing Blow Full Rage Bonus Damage</a></h4>
<ul><li>Killing Blow Full Rage Bonus Damage reduced from 20% to 15%</li></ul>
`
	);
	var Sn = i(xn, 2);
	(a(Sn, { kind: `hero`, name: `Shiv`, ability: `Killing Blow Full Rage Bonus Damage` }),
		e(U));
	var Cn = i(U, 2);
	n(Cn, 1, `ability killing-blow`);
	var wn = r(Cn);
	t(
		wn,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow-1"><a href="/ability/killing-blow">Killing Blow</a></h4>
<ul><li>Killing Blow T2 increased from 5% to 10%</li></ul>
`
	);
	var Tn = i(wn, 2);
	(a(Tn, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), e(Cn), e(B));
	var W = i(B, 2);
	n(W, 1, `hero vindicta`);
	var En = r(W);
	t(
		En,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
<ul><li>Gun cycle time increased from 0.19s to 0.22s (same overall dps)</li></ul>
`
	);
	var Dn = i(En, 2);
	n(Dn, 1, `ability stake`);
	var On = r(Dn);
	t(
		On,
		() => `
<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>
<h4 id="stake"><a href="/ability/stake">Stake</a></h4>
<ul><li>Stake: distance enemies are allowed to move increased from 6m to 8m</li></ul>
`
	);
	var kn = i(On, 2);
	(a(kn, { kind: `hero`, name: `Vindicta`, ability: `Stake` }), e(Dn));
	var An = i(Dn, 2);
	t(
		An,
		() => `
<ul><li>Max Falloff reduced from 58m to 45m</li></ul>
`
	);
	var G = i(An, 2);
	n(G, 1, `ability flight`);
	var jn = r(G);
	t(
		jn,
		() => `
<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>
<h4 id="flight"><a href="/ability/flight">Flight</a></h4>
<ul><li>Fixed Flight ending if you touch the ground</li></ul>
`
	);
	var Mn = i(jn, 2);
	(a(Mn, { kind: `hero`, name: `Vindicta`, ability: `Flight` }), e(G));
	var K = i(G, 2);
	n(K, 1, `ability assassinate`);
	var Nn = r(K);
	t(
		Nn,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Low HP indication now also shows up while unscoped</li></ul>
`
	);
	var Pn = i(Nn, 2);
	(a(Pn, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), e(K));
	var q = i(K, 2);
	n(q, 1, `ability assassinate-base`);
	var Fn = r(q);
	t(
		Fn,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate Base change history</a></p>
<h4 id="assassinate-base"><a href="/ability/assassinate">Assassinate Base</a></h4>
`
	);
	var In = i(Fn, 2),
		Ln = r(In),
		Rn = r(Ln);
	t(Rn, () => `Assassinate Base damage reduced from 160 to 140`);
	var zn = i(Rn, 2);
	(o(zn, {
		kind: `hero`,
		name: `Vindicta`,
		groupIndex: 5,
		bulletIndex: 0,
		text: `Assassinate Base damage reduced from 160 to 140`
	}),
		e(Ln),
		e(In));
	var Bn = i(In, 2);
	(a(Bn, { kind: `hero`, name: `Vindicta`, ability: `Assassinate Base` }), e(q));
	var J = i(q, 2);
	n(J, 1, `ability assassinate`);
	var Vn = r(J);
	t(
		Vn,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate-1"><a href="/ability/assassinate">Assassinate</a></h4>
<ul><li>Assassinate zoom level reduced a little bit</li></ul>
`
	);
	var Hn = i(Vn, 2);
	(a(Hn, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), e(J));
	var Un = i(J, 2);
	n(Un, 1, `ability flight`);
	var Wn = r(Un);
	t(
		Wn,
		() => `
<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>
<h4 id="flight-1"><a href="/ability/flight">Flight</a></h4>
<ul><li>Flight duration spirit scaling reduced from 0.2 to 0.15</li></ul>
`
	);
	var Gn = i(Wn, 2);
	(a(Gn, { kind: `hero`, name: `Vindicta`, ability: `Flight` }), e(Un), e(W));
	var Y = i(W, 2);
	n(Y, 1, `hero viscous`);
	var Kn = r(Y);
	t(
		Kn,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var X = i(Kn, 2);
	n(X, 1, `ability the-cube`);
	var qn = r(X);
	t(
		qn,
		() => `
<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>
<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>
<ul><li>The Cube cleanse is now part of the T2</li></ul>
`
	);
	var Jn = i(qn, 2);
	(a(Jn, { kind: `hero`, name: `Viscous`, ability: `The Cube` }), e(X));
	var Z = i(X, 2);
	n(Z, 1, `ability puddle-punch`);
	var Yn = r(Z);
	t(
		Yn,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
<ul><li>Puddle Punch enemy warning time increased from 0.35s to 0.45s</li></ul>
`
	);
	var Xn = i(Yn, 2);
	(a(Xn, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), e(Z));
	var Zn = i(Z, 2);
	t(
		Zn,
		() => `
<ul><li>Bullet Damage reduced from 13 to 12</li></ul>
`
	);
	var Q = i(Zn, 2);
	n(Q, 1, `ability goo-ball`);
	var Qn = r(Q);
	t(
		Qn,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>
<ul><li>Can now use down dash during Goo Ball</li><li>Fixed Phantom Strike not positioning you correctly when using it with your Goo Ball</li></ul>
`
	);
	var $n = i(Qn, 2);
	(a($n, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), e(Q));
	var er = i(Q, 2);
	n(er, 1, `ability splatter`);
	var tr = r(er);
	t(
		tr,
		() => `
<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>
<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>
<ul><li>Splatter post cast delay reduced from 0.5s to 0.2s</li></ul>
`
	);
	var nr = i(tr, 2);
	(a(nr, { kind: `hero`, name: `Viscous`, ability: `Splatter` }), e(er), e(Y));
	var $ = i(Y, 2);
	n($, 1, `hero warden`);
	var rr = r($);
	t(
		rr,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
`
	);
	var ir = i(rr, 2);
	n(ir, 1, `ability binding-word`);
	var ar = r(ir);
	t(
		ar,
		() => `
<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>
<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>
<ul><li>Binding Word escape range and escape time increased by 15%</li></ul>
`
	);
	var or = i(ar, 2);
	(a(or, { kind: `hero`, name: `Warden`, ability: `Binding Word` }), e(ir));
	var sr = i(ir, 2);
	n(sr, 1, `ability last-stand`);
	var cr = r(sr);
	t(
		cr,
		() => `
<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>
<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>
<ul><li>Last Stand spirit scaling increased from 0.9 to 1.2</li></ul>
`
	);
	var lr = i(cr, 2);
	(a(lr, { kind: `hero`, name: `Warden`, ability: `Last Stand` }), e(sr), e($));
	var ur = i($, 2);
	n(ur, 1, `hero yamato`);
	var dr = r(ur);
	t(
		dr,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
<ul><li>Bullet damage growth reduced from 0.5 to 0.45</li></ul>
`
	);
	var fr = i(dr, 2);
	n(fr, 1, `ability crimson-slash`);
	var pr = r(fr);
	t(
		pr,
		() => `
<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>
<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>
<ul><li>Crimson Slash fire rate slow reduced from 30% to 20%</li></ul>
`
	);
	var mr = i(pr, 2);
	(a(mr, { kind: `hero`, name: `Yamato`, ability: `Crimson Slash` }), e(fr));
	var hr = i(fr, 2);
	n(hr, 1, `ability flying-slash`);
	var gr = r(hr);
	t(
		gr,
		() => `
<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>
<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>
<ul><li>Fixed various issues with Flying Strike pathing</li></ul>
`
	);
	var _r = i(gr, 2);
	(a(_r, { kind: `hero`, name: `Yamato`, ability: `Flying Slash` }), e(hr));
	var vr = i(hr, 2);
	n(vr, 1, `ability shadow-transformation`);
	var yr = r(vr);
	t(
		yr,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation duration reduced from 5s to 4.5s</li><li>Shadow Transformation T3 duration increased from +1.5s to +2s</li><li>Shadow Transformation no longer provides unlimited ammo</li></ul>
`
	);
	var br = i(yr, 2);
	(a(br, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }),
		e(vr),
		e(ur));
	var xr = i(ur, 2);
	t(
		xr,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var Sr = i(xr, 2);
	ie(Sr, {});
	var Cr = i(Sr, 2);
	n(Cr, 1, `item ammo-scavenger`);
	var wr = r(Cr);
	t(
		wr,
		() => `
<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>
<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>
<ul><li>Ammo reduced from 15% to 10%</li><li>Health reduced from 60 to 40</li><li>Duration reduced from 35s to 30s</li><li>Max stacks reduced from 12 to 10</li></ul>
`
	);
	var Tr = i(wr, 2);
	(a(Tr, { kind: `item`, name: `Ammo Scavenger`, ability: null }), e(Cr));
	var Er = i(Cr, 2);
	n(Er, 1, `item berserker`);
	var Dr = r(Er);
	t(
		Dr,
		() => `
<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>
<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>
<ul><li>Damage required per stack reduced from 110 to 100</li></ul>
`
	);
	var Or = i(Dr, 2);
	(a(Or, { kind: `item`, name: `Berserker`, ability: null }), e(Er));
	var kr = i(Er, 2);
	n(kr, 1, `item bullet-armor`);
	var Ar = r(kr);
	t(
		Ar,
		() => `
<p><a href="/item/bullet-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Armor patch history</a></p>
<h3 id="bullet-armor"><a href="/item/bullet-armor">Bullet Armor</a></h3>
<ul><li>Bullet Resist increased from 20% to 25%</li></ul>
`
	);
	var jr = i(Ar, 2);
	(a(jr, { kind: `item`, name: `Bullet Armor`, ability: null }), e(kr));
	var Mr = i(kr, 2);
	n(Mr, 1, `item colossus`);
	var Nr = r(Mr);
	t(
		Nr,
		() => `
<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>
<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>
<ul><li>Slow radius increased from 12m to 14m</li></ul>
`
	);
	var Pr = i(Nr, 2);
	(a(Pr, { kind: `item`, name: `Colossus`, ability: null }), e(Mr));
	var Fr = i(Mr, 2);
	n(Fr, 1, `item decay`);
	var Ir = r(Fr);
	t(
		Ir,
		() => `
<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>
<h3 id="decay"><a href="/item/decay">Decay</a></h3>
`
	);
	var Lr = i(Ir, 2),
		Rr = r(Lr),
		zr = r(Rr);
	t(zr, () => `Cooldown increased from 32s to 45s`);
	var Br = i(zr, 2);
	(o(Br, {
		kind: `item`,
		name: `Decay`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 32s to 45s`
	}),
		e(Rr));
	var Vr = i(Rr, 2);
	(t(Vr, () => `Cast range scaling reduced from 0.2 to 0.16`, !0), e(Vr), e(Lr));
	var Hr = i(Lr, 2);
	(a(Hr, { kind: `item`, name: `Decay`, ability: null }), e(Fr));
	var Ur = i(Fr, 2);
	n(Ur, 1, `item divine-barrier`);
	var Wr = r(Ur);
	t(
		Wr,
		() => `
<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>
<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>
<ul><li>Bonus Health reduced from 75 to 50</li></ul>
`
	);
	var Gr = i(Wr, 2);
	(a(Gr, { kind: `item`, name: `Divine Barrier`, ability: null }), e(Ur));
	var Kr = i(Ur, 2);
	n(Kr, 1, `item echo-shard`);
	var qr = r(Kr);
	t(
		qr,
		() => `
<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>
<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>
<ul><li>Now has a 0.3s cast delay (like Refresher)</li></ul>
`
	);
	var Jr = i(qr, 2);
	(a(Jr, { kind: `item`, name: `Echo Shard`, ability: null }), e(Kr));
	var Yr = i(Kr, 2);
	n(Yr, 1, `item escalating-exposure`);
	var Xr = r(Yr);
	t(
		Xr,
		() => `
<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>
<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>
<ul><li>Fixed the bonus damage being reduced twice by resistance</li></ul>
`
	);
	var Zr = i(Xr, 2);
	(a(Zr, { kind: `item`, name: `Escalating Exposure`, ability: null }), e(Yr));
	var Qr = i(Yr, 2);
	n(Qr, 1, `item escalating-resilience`);
	var $r = r(Qr);
	t(
		$r,
		() => `
<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>
<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>
<ul><li>Fire Rate reduced from 14% to 12%</li></ul>
`
	);
	var ei = i($r, 2);
	(a(ei, { kind: `item`, name: `Escalating Resilience`, ability: null }), e(Qr));
	var ti = i(Qr, 2);
	n(ti, 1, `item extra-stamina`);
	var ni = r(ti);
	t(
		ni,
		() => `
<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>
<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>
<ul><li>Stamina Recovery increased from 10% to 14%</li></ul>
`
	);
	var ri = i(ni, 2);
	(a(ri, { kind: `item`, name: `Extra Stamina`, ability: null }), e(ti));
	var ii = i(ti, 2);
	n(ii, 1, `item fortitude`);
	var ai = r(ii);
	t(
		ai,
		() => `
<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>
<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>
<ul><li>Bonus Health increased from 275 to 300</li></ul>
`
	);
	var oi = i(ai, 2);
	(a(oi, { kind: `item`, name: `Fortitude`, ability: null }), e(ii));
	var si = i(ii, 2);
	n(si, 1, `item frenzy`);
	var ci = r(si);
	t(
		ci,
		() => `
<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>
<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>
<ul><li>Low HP Spirit Resist changed to Bullet Resist</li></ul>
`
	);
	var li = i(ci, 2);
	(a(li, { kind: `item`, name: `Frenzy`, ability: null }), e(si));
	var ui = i(si, 2);
	n(ui, 1, `item headhunter`);
	var di = r(ui);
	t(
		di,
		() => `
<p><a href="/item/headhunter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headhunter patch history</a></p>
<h3 id="headhunter"><a href="/item/headhunter">Headhunter</a></h3>
<ul><li>Now requires Headshot Booster</li><li>No longer grants +50% Bullet Velocity</li><li>Now grants +5% Fire Rate</li><li>Fixed not being affected by cooldown reduction</li></ul>
`
	);
	var fi = i(di, 2);
	(a(fi, { kind: `item`, name: `Headhunter`, ability: null }), e(ui));
	var pi = i(ui, 2);
	n(pi, 1, `item headshot-booster`);
	var mi = r(pi);
	t(
		mi,
		() => `
<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>
<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>
<ul><li>Fire Rate reduced from +5% to +4%</li></ul>
`
	);
	var hi = i(mi, 2);
	(a(hi, { kind: `item`, name: `Headshot Booster`, ability: null }), e(pi));
	var gi = i(pi, 2);
	n(gi, 1, `item improved-spirit`);
	var _i = r(gi);
	t(
		_i,
		() => `
<p><a href="/item/improved-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Improved Spirit patch history</a></p>
<h3 id="improved-spirit"><a href="/item/improved-spirit">Improved Spirit</a></h3>
<ul><li>Spirit Power increased from +21 to +23</li></ul>
`
	);
	var vi = i(_i, 2);
	(a(vi, { kind: `item`, name: `Improved Spirit`, ability: null }), e(gi));
	var yi = i(gi, 2);
	n(yi, 1, `item intensifying-magazine`);
	var bi = r(yi);
	t(
		bi,
		() => `
<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>
<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>
<ul><li>Max Weapon Damage reduced from 75% to 60%</li></ul>
`
	);
	var xi = i(bi, 2);
	(a(xi, { kind: `item`, name: `Intensifying Magazine`, ability: null }), e(yi));
	var Si = i(yi, 2);
	n(Si, 1, `item kinetic-dash`);
	var Ci = r(Si);
	t(
		Ci,
		() => `
<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>
<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>
<ul><li>Fire Rate reduced from 25% to 20%</li><li>Fire Rate max duration reduced from 8s to 7s</li></ul>
`
	);
	var wi = i(Ci, 2);
	(a(wi, { kind: `item`, name: `Kinetic Dash`, ability: null }), e(Si));
	var Ti = i(Si, 2);
	n(Ti, 1, `item knockdown`);
	var Ei = r(Ti);
	t(
		Ei,
		() => `
<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>
<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>
<ul><li>Now causes enemies to fall down faster</li></ul>
`
	);
	var Di = i(Ei, 2);
	(a(Di, { kind: `item`, name: `Knockdown`, ability: null }), e(Ti));
	var Oi = i(Ti, 2);
	n(Oi, 1, `item lifestrike`);
	var ki = r(Oi);
	t(
		ki,
		() => `
<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>
<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>
`
	);
	var Ai = i(ki, 2),
		ji = r(Ai),
		Mi = r(ji);
	t(Mi, () => `Cooldown reduced from 5.25s to 5s`);
	var Ni = i(Mi, 2);
	(o(Ni, {
		kind: `item`,
		name: `Lifestrike`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 5.25s to 5s`
	}),
		e(ji));
	var Pi = i(ji, 2);
	(t(Pi, () => `Fixed proccing heal more than once when hitting multiple targets`, !0),
		e(Pi),
		e(Ai));
	var Fi = i(Ai, 2);
	(a(Fi, { kind: `item`, name: `Lifestrike`, ability: null }), e(Oi));
	var Ii = i(Oi, 2);
	n(Ii, 1, `item magic-carpet`);
	var Li = r(Ii);
	t(
		Li,
		() => `
<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>
<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>
<ul><li>Fixed it consuming stamina when jumping off</li></ul>
`
	);
	var Ri = i(Li, 2);
	(a(Ri, { kind: `item`, name: `Magic Carpet`, ability: null }), e(Ii));
	var zi = i(Ii, 2);
	n(zi, 1, `item melee-charge`);
	var Bi = r(zi);
	t(
		Bi,
		() => `
<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>
<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>
`
	);
	var Vi = i(Bi, 2),
		Hi = r(Vi);
	(t(
		Hi,
		() =>
			`Impact now increases your ammo for that mag instead of reloading (so if your ammo is 2/8, it becomes 10/8). Reloads you instantly if in the middle of a reload.`,
		!0
	),
		e(Hi));
	var Ui = i(Hi, 2),
		Wi = r(Ui);
	t(Wi, () => `Cooldown increased from 8.5s to 10s`);
	var Gi = i(Wi, 2);
	(o(Gi, {
		kind: `item`,
		name: `Melee Charge`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown increased from 8.5s to 10s`
	}),
		e(Ui),
		e(Vi));
	var Ki = i(Vi, 2);
	(a(Ki, { kind: `item`, name: `Melee Charge`, ability: null }), e(zi));
	var qi = i(zi, 2);
	n(qi, 1, `item melee-lifesteal`);
	var Ji = r(qi);
	t(
		Ji,
		() => `
<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>
<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>
<ul><li>Melee Damage reduced from 13% to 12%</li><li>Heal vs non-heroes reduced from 40% to 30%</li></ul>
`
	);
	var Yi = i(Ji, 2);
	(a(Yi, { kind: `item`, name: `Melee Lifesteal`, ability: null }), e(qi));
	var Xi = i(qi, 2);
	n(Xi, 1, `item monster-rounds`);
	var Zi = r(Xi);
	t(
		Zi,
		() => `
<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>
<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>
<ul><li>Bullet Resist vs NPCs reduced from 35% to 30%</li></ul>
`
	);
	var Qi = i(Zi, 2);
	(a(Qi, { kind: `item`, name: `Monster Rounds`, ability: null }), e(Xi));
	var $i = i(Xi, 2);
	n($i, 1, `item mystic-shot`);
	var ea = r($i);
	t(
		ea,
		() => `
<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>
<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>
<ul><li>Damage spirit scaling increased from 0.6 to 0.8</li></ul>
`
	);
	var ta = i(ea, 2);
	(a(ta, { kind: `item`, name: `Mystic Shot`, ability: null }), e($i));
	var na = i($i, 2);
	n(na, 1, `item quicksilver-reload`);
	var ra = r(na);
	t(
		ra,
		() => `
<p><a href="/item/quicksilver-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Quicksilver Reload patch history</a></p>
<h3 id="quicksilver-reload"><a href="/item/quicksilver-reload">Quicksilver Reload</a></h3>
<ul><li>No longer triggers if your ammo is at max value already</li></ul>
`
	);
	var ia = i(ra, 2);
	(a(ia, { kind: `item`, name: `Quicksilver Reload`, ability: null }), e(na));
	var aa = i(na, 2);
	n(aa, 1, `item rapid-recharge`);
	var oa = r(aa);
	t(
		oa,
		() => `
<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>
<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>
<ul><li>Faster Time Between Charges increased from +55% to +65%</li><li>Cooldown Reduction For Charged Abilities increased from +25% to 30%</li></ul>
`
	);
	var sa = i(oa, 2);
	(a(sa, { kind: `item`, name: `Rapid Recharge`, ability: null }), e(aa));
	var ca = i(aa, 2);
	n(ca, 1, `item refresher`);
	var la = r(ca);
	t(
		la,
		() => `
<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>
<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>
<ul><li>Bullet Resist increased from 8% to 16%</li><li>Spirit Resist reduced from 16% to 8%</li></ul>
`
	);
	var ua = i(la, 2);
	(a(ua, { kind: `item`, name: `Refresher`, ability: null }), e(ca));
	var da = i(ca, 2);
	n(da, 1, `item restorative-locket`);
	var fa = r(da);
	t(
		fa,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
<ul><li>No longer requires max stacks to restore a stamina point</li></ul>
`
	);
	var pa = i(fa, 2);
	(a(pa, { kind: `item`, name: `Restorative Locket`, ability: null }), e(da));
	var ma = i(da, 2);
	n(ma, 1, `item restorative-shot`);
	var ha = r(ma);
	t(
		ha,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
`
	);
	var ga = i(ha, 2),
		_a = r(ga),
		va = r(_a);
	t(va, () => `Cooldown reduced from 6.2s to 5.5s`);
	var ya = i(va, 2);
	(o(ya, {
		kind: `item`,
		name: `Restorative Shot`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 6.2s to 5.5s`
	}),
		e(_a),
		e(ga));
	var ba = i(ga, 2);
	(a(ba, { kind: `item`, name: `Restorative Shot`, ability: null }), e(ma));
	var xa = i(ma, 2);
	n(xa, 1, `item return-fire`);
	var Sa = r(xa);
	t(
		Sa,
		() => `
<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>
<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>
<ul><li>While active grants +25% Bullet Resistance</li><li>Bullet Damage Returned reduced from 70% to 60%</li><li>No longer grants +7% Fire Rate</li><li>Spirit Power increased from +7 to +9</li><li>Fixed Ricochet&#x27;d bullets not returning the right amount of damage</li></ul>
`
	);
	var Ca = i(Sa, 2);
	(a(Ca, { kind: `item`, name: `Return Fire`, ability: null }), e(xa));
	var wa = i(xa, 2);
	n(wa, 1, `item ricochet`);
	var Ta = r(wa);
	t(
		Ta,
		() => `
<p><a href="/item/ricochet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ricochet patch history</a></p>
<h3 id="ricochet"><a href="/item/ricochet">Ricochet</a></h3>
<ul><li>Fire Rate reduced from 12% to 10%</li></ul>
`
	);
	var Ea = i(Ta, 2);
	(a(Ea, { kind: `item`, name: `Ricochet`, ability: null }), e(wa));
	var Da = i(wa, 2);
	n(Da, 1, `item shadow-weave`);
	var Oa = r(Da);
	t(
		Oa,
		() => `
<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>
<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>
<ul><li>Now a T4 Weapon Item</li><li>Moved to T4 Weapon</li></ul>
`
	);
	var ka = i(Oa, 2);
	(a(ka, { kind: `item`, name: `Shadow Weave`, ability: null }), e(Da));
	var Aa = i(Da, 2);
	n(Aa, 1, `item sharpshooter`);
	var ja = r(Aa);
	t(
		ja,
		() => `
<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>
<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>
<ul><li>Fixed falloff reduction not working properly</li></ul>
`
	);
	var Ma = i(ja, 2);
	(a(Ma, { kind: `item`, name: `Sharpshooter`, ability: null }), e(Aa));
	var Na = i(Aa, 2);
	n(Na, 1, `item silencer`);
	var Pa = r(Na);
	t(
		Pa,
		() => `
<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>
<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>
<ul><li>Now grants +12 Spirit</li></ul>
`
	);
	var Fa = i(Pa, 2);
	(a(Fa, { kind: `item`, name: `Silencer`, ability: null }), e(Na));
	var Ia = i(Na, 2);
	n(Ia, 1, `item siphon-bullets`);
	var La = r(Ia);
	t(
		La,
		() => `
<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>
<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>
<ul><li>Moved to T4 Vitality</li><li>Now a T4 Vitality Item</li><li>No longer grants +28% Weapon Damage</li><li>Now grants +18% Bullet Resistance</li></ul>
`
	);
	var Ra = i(La, 2);
	(a(Ra, { kind: `item`, name: `Siphon Bullets`, ability: null }), e(Ia));
	var za = i(Ia, 2);
	n(za, 1, `item soul-rebirth`);
	var Ba = r(za);
	t(
		Ba,
		() => `
<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>
<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>
<ul><li>Increases base respawn rate by +15s</li></ul>
`
	);
	var Va = i(Ba, 2);
	(a(Va, { kind: `item`, name: `Soul Rebirth`, ability: null }), e(za));
	var Ha = i(za, 2);
	n(Ha, 1, `item spirit-strike`);
	var Ua = r(Ha);
	t(
		Ua,
		() => `
<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>
<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>
<ul><li>No longer grants +0.8 Health Regen</li></ul>
`
	);
	var Wa = i(Ua, 2);
	(a(Wa, { kind: `item`, name: `Spirit Strike`, ability: null }), e(Ha));
	var Ga = i(Ha, 2);
	n(Ga, 1, `item spiritual-overflow`);
	var Ka = r(Ga);
	t(
		Ka,
		() => `
<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>
<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>
<ul><li>Now grants +250 Bullet Shield</li></ul>
`
	);
	var qa = i(Ka, 2);
	(a(qa, { kind: `item`, name: `Spiritual Overflow`, ability: null }), e(Ga));
	var Ja = i(Ga, 2);
	n(Ja, 1, `item titanic-magazine`);
	var Ya = r(Ja);
	t(
		Ya,
		() => `
<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>
<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>
<ul><li>Ammo increased from 100% to 120%</li></ul>
`
	);
	var Xa = i(Ya, 2);
	(a(Xa, { kind: `item`, name: `Titanic Magazine`, ability: null }), e(Ja));
	var Za = i(Ja, 2);
	n(Za, 1, `item torment-pulse`);
	var Qa = r(Za);
	t(
		Qa,
		() => `
<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>
<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>
<ul><li>Health Bonus increased from 140 to 160</li><li>Spirit Power damage scaling increased from 0.25 to 0.33</li></ul>
`
	);
	var $a = i(Qa, 2);
	(a($a, { kind: `item`, name: `Torment Pulse`, ability: null }), e(Za));
	var eo = i(Za, 2);
	n(eo, 1, `item unstoppable`);
	var to = r(eo);
	t(
		to,
		() => `
<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>
<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>
<ul><li>Can no longer be cast during channels</li></ul>
`
	);
	var no = i(to, 2);
	(a(no, { kind: `item`, name: `Unstoppable`, ability: null }), e(eo));
	var ro = i(eo, 2);
	n(ro, 1, `item vampiric-burst`);
	var io = r(ro);
	t(
		io,
		() => `
<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>
<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>
<ul><li>Fixed casting it interrupting sliding</li></ul>
`
	);
	var ao = i(io, 2);
	(a(ao, { kind: `item`, name: `Vampiric Burst`, ability: null }), e(ro));
	var oo = i(ro, 2);
	n(oo, 1, `item veil-walker`);
	var so = r(oo);
	t(
		so,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
<ul><li>No longer grants +20% Fire Rate</li></ul>
`
	);
	var co = i(so, 2);
	(a(co, { kind: `item`, name: `Veil Walker`, ability: null }), e(oo));
	var lo = i(oo, 2);
	n(lo, 1, `item warp-stone`);
	var uo = r(lo);
	t(
		uo,
		() => `
<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>
<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>
<ul><li>Casting while on the ground will no longer stop the player in place, will try to move forward along the ground instead</li><li>Fixed cases of Warp Stone getting caught on geometry</li></ul>
`
	);
	var fo = i(uo, 2);
	(a(fo, { kind: `item`, name: `Warp Stone`, ability: null }), e(lo), te(ee, s));
}
export { ce as default, ae as metadata, c as readingManifest, oe as toc };
