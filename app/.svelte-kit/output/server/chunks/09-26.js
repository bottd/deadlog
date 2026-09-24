import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/09-26.mg?embed=0
function _9_26_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Ivy',
			'Kelvin',
			'Lady Geist',
			'McGinnis',
			'Mo &amp; Krill',
			'Paradox',
			'Pocket',
			'Seven',
			'Shiv',
			'Vindicta',
			'Viscous',
			'Warden',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/09-26.mg?embed=1
function _9_26_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Ammo Scavenger',
			'Berserker',
			'Bullet Armor',
			'Colossus',
			'Decay',
			'Divine Barrier',
			'Echo Shard',
			'Escalating Exposure',
			'Escalating Resilience',
			'Extra Stamina',
			'Fortitude',
			'Frenzy',
			'Headhunter',
			'Headshot Booster',
			'Improved Spirit',
			'Intensifying Magazine',
			'Kinetic Dash',
			'Knockdown',
			'Lifestrike',
			'Magic Carpet',
			'Melee Charge',
			'Melee Lifesteal',
			'Monster Rounds',
			'Mystic Shot',
			'Quicksilver Reload',
			'Rapid Recharge',
			'Refresher',
			'Restorative Locket',
			'Restorative Shot',
			'Return Fire',
			'Ricochet',
			'Shadow Weave',
			'Sharpshooter',
			'Silencer',
			'Siphon Bullets',
			'Soul Rebirth',
			'Spirit Strike',
			'Spiritual Overflow',
			'Titanic Magazine',
			'Torment Pulse',
			'Unstoppable',
			'Vampiric Burst',
			'Veil Walker',
			'Warp Stone'
		]
	});
}
//#endregion
//#region changelogs/2024/09-26.mg
var metadata = {
	title: '09-26-2024 Update',
	thread_id: '33015',
	published: '2024-09-26T14:17:58-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Added new hero, Mirage. Added an initial Anti-Cheat detection system. When a user is detected as cheating, during the game session the opponents will be given a choice between banning the user immediately and ending the match or turning the cheater into a frog for the rest of the game and then banning them afterwards. The system is set to conservative detection levels as we work on a v2 anti-cheat system that is more extensive. We will turn on the banning of users in a couple of days after the update is out. When a match is ended this way, the results will not count for other players. Added global quickcast support. You can now configure your abilities and/or items to be on quickcast mode globally. You can also customize each ability individually to be quickcast or not. This also supports grenade style abilities. Hero specific keybinds now say the ability name instead of ability 1-4 Added Zipline hotkey that can be independently bound from space/jump Fixed per-hero keys not inheriting user-defined default keys properly Added keybind indicator for hero-specific binds showing which keys have been bound for that hero Added Custom Match play mode Private lobbies now have an option to turn on cheats Private lobbies now let you select the specific servers to use Private lobbies now have an option to make the match publicly visible or private to only the players Private lobbies now support post-game and replays properly Private lobbies now allow picking specific lanes (solo and dual lane colors are displayed) Added a cheat report option in-game and post-game Can now mute and report enemy players using ESC while in-game Updated the game access invite UI to make it clear when users have been accepted (in most cases we look into where a user said their friend wasn't accepted, the user was actually accepted but they never claimed the game on the Steam notifications side) Added voice indicators for when players are speaking in party and team chat (green for party, white for team) Updated Player Card and action menu when clicking on a player in the friend list or ESC menu Fixed Rich Presence for Steam and in-game friend lists Party Code is now hidden when you enable Streamer Mode Added Region indicator to the matches on the watch tab Fixed search by MatchID not working for games that are live Added Spectator Fog of War toggle (hotkeys available in settings) Added South Africa servers Added Italian localization Instead of showing the total number of favorites for each build, we now tag popular builds using a mix of both recent and historical usage so that newer builds are easier to find Builds that haven't been updated in 30 days now have a distinct visual General rendering performance improvements Shadow quality improvements for higher shadow settings Fixed issues with player outline rendering in FSR2 Fixed regression with saturation volumes outline not showing up Displacement mapping no longer an official option and will likely be cut (it can be enabled with a ConVar after the game starts) Lighting improvements in map Picking up a powerup will now list all the stats they modify in the HUD instead of a generic name like 'Casting' or 'Gun' Spirit scaling is now always shown on the tooltips without needing to hold alt/tab Updated Viscous icon to look more different from Dynamo Added frosted shell effect on the rejuv crystal when Frozen Shelter is active Music and Sound effects will now pause during game pause Fixed Guardian trying to shoot people unsuccessfully behind cover Fixed Quicksilver Reload bonus damage not working correctly with things like Scorn and Flog Added timer sound to the last couple seconds of Flying Cloak Wall Jumps now use better animations to communicate directionality Fixed jumping between ziplines consuming stamina Fixed Magic Reverb not getting increased bonus damage from damage amps Improved preloading during queue time Updated Killing Blow effects Updated Lightning Ball effects to reduce some visual noise Fixed some issues with Crimson Slash effect not appearing reliably Viscous Puddle Punch will now show a red preview for when the punch is out of range but within 2x of the cast range Fixed Ricochet not respecting LOS when picking the targets No longer play low ammo sounds when firing while sliding Fixed not being able to bind Reload to Mouse Wheel Up/Down Minimap line colors now match the color of the hero drawing them Fixed spectator keybinds not showing correctly Updated Flying Strike effects to reduce some visual noise Fixed Flex Slot unlock order not matching the usual order of unlocks Updated Sleep Dagger projectile, impact and sleeping debuff visuals Fixed imbue and active abilities dialog not responding to keybinds if your ability/item binds included a modifier key or were bound to the mouse wheel Fixed Dynamo not playing an animation during the cast delay on Singularity Updated bullet shield break effects Updated Unstoppable effects to be clearer at cast time Fixed various projectiles going through bosses (Wraith cards, Geist bombs, etc) Fixed Dash not always breaking breakables Breakables will now wait to spawn if a player is in the way Abrams now has a new custom heavy melee animation Updated Haze VO Fixed a bug where Kelvin desperation VO for Arctic Beam and Ice Path were flipped Turned off a Shiv line where he referenced slowing down enemies when he wasn't actually doing so Removed reason 31 of why Lash is better than Bebop and replaced it with reason 26 of why Lash is better than Bebop (fixed a bug with Lash's hero select lines) Replaced a Grey Talon select line to make his intentions more clear Infernus will no longer appear in every bot match Bots can now choose to play Lady Geist, Mirage, Shiv, and Warden Fixed min/max falloff range displaying incorrectly on Weapon Stats Tooltip Updated Rejuvenator buff effect Updated wall bounce effects for Viscous in ball form Added citadel_give_gold cheat command Improved read on the connecting rope for Flying Strike and reduced visual obstruction of the ending slash Music bug fixes for replay and spectating Allow announcer lines for kill streaks and various hero lines to play while the player is in an active combat encounter Timing critical music and sfx will pause and resume in response to game pause Side lanes are now a little further apart from the middle lanes Added a First Blood bonus bounty for the first kill each player gets. Grants 150 bonus souls. Lane setup is now always 1-2-2-1 Zipline Boost now starts on cooldown again Trooper damage reduction from Guardians reduced from 35% to 28% (they die a little faster to Guardians now) Trooper share radius reduced (from allied hero to allied hero 50m->40m, from orb to allied hero 40m->35m) Reverted recent creep sharing duplication changes (back to how it was over a week ago, we want to see if it's still an issue with the other changes in this patch) Some latency-related calculation improvements that help orbs be a little less deny favored Orbs now appear a little smaller to the enemy that is trying to deny them Added a Soul Generator (like the one in hero sandbox) in the respawn area. Starts spawning orbs at 3 minutes. Each orb is worth 10 souls when shot. (primary purpose for this is cases when you are very close to an item purchase) Fire Rate slows now stack diminishingly Rejuv bonus creep HP increased from 50% to 70% Rejuv bonus is no longer consumed for dead players, they have it on their next life now Troopers no longer give half bounty when base guardians are destroyed for that lane Killer to Assist bounty ratio reduced from 2.0 to 1.7 (slightly more to assists) Midgame respawn time increased a bit (reaches 50s at 20 min instead of 40s at 20 min) Teleporter delay reduced from 5s to 4s Guardians now deal 10% more damage to players Sinner's Sacrifice now grants a permanent golden statue bonus when it is killed Fixed Sinner's Sacrifice sharing bounty to nearby allies Added indicator on the hud to help track your passive cooldown items when they are 1s from ready (headshot Booster, Medic Bullets, etc) Boon count increased from 11 to 14 (added to 16/18/20k) Non-Health boon bonuses rescaled over the 14 levels (same total as before) Aggressive crouch spamming within a very narrow window will now cause you to very briefly move progressively slower Added Rejuv drop on a loop in the sandbox mode Added infinite ammo option to sandbox (\"No Reload\") Fixed dashing downwards not destroying breakables Silence now deselects your ability if you had it open when silenced High-Velocity Mag: Bullet Velocity reduced from +30% to +25% Hollow Point Ward: Spirit Shield increased from +85 to +95 Pristine Emblem: Now requires High-Velocity Mag Pristine Emblem: Now grants +35% Bullet Velocity Combat Barrier: Fire Rate while shielded reduced from 8% to 6% Combat Barrier: Weapon Damage while shielded reduced from 28% to 25% Combat Barrier: Bullet Shield increased from +300 to +325 Health Nova: Weapon Damage increased from 10% to 12% Improved Bullet Armor: Bullet Resist increased from 45% to 50% Mystic Reach: Ability Range increased from 16% to 18% Mystic Reach: Now provides 6% Bullet Resist instead of 6% Spirit Resist Withering Whip: No longer grants +8% Fire Rate Withering Whip: Spirit Power increased from +4 to +6 Withering Whip: Now grants +1 Sprint Withering Whip: Cast range increased from 24m to 30m Withering Whip: Fire Rate slow increased from 40% to 45% Improved Reach: Now provides 12% Bullet Resist instead of 12% Spirit Resist Outer lanes at the middle of the map pushed further away from the inner lanes Added connection from canal near the urn platforms through the Radio Station and Apartment buildings Reworked interior corridors of Fish Market/Nursery to exit to the buildings sooner Added interior room partition from the Fish Market/Nursery to the Shops Moved rope to the Fish Market/Nursery rooftop to the back of the building Removed upper interior hallway from rope to the Fish Market/Nursery rooftops Moved truck from in front of archway with cosmic veil to the back of the Fish Market/Nursery Redesigned outer lane path (ziplines and trooper nodes) from Walker to Guardian on Amber Yellow and Sapphire Purple Added interior passage beside Subway Entrance to the outer lanes Abrams Infernal Resilience reduced from 16% to 15% Infernal Resilience T3 reduced from 9% to 8% Siphon Life spirit scaling increased from 0.2 to 0.3 Fixed Cases where Shoulder Charge was unexpectedly 'slamming' in to walls and stairs Bebop Hook range reduced from 30m to 25m Hyper Beam duration spirit scaling reduced from 0.08 to 0.06 Dynamo Singularity radius reduced from 8m to 7m Grey Talon Arrow cycle time reduced from 0.4s to 0.45s (overall dps unchanged) Rain of Arrows can be alternate-casted to remain near the ground Fixed air dash during Rain of Arrows going half the distance Guided Owl bonus spirit on death now has a 3s buffer window Guided Owl: very slight turn rate improvements Guided Owl radius increased from 12m to 13m Haze Sleep dagger hitbox reduced by 10% Fixed refresher not working properly with Smoke Bomb Fixed some items that didn't proc before: Tesla Bullets, Lucky Shot, Mystic Shot Bullet Dance now more accurately shows who it is shooting Fixed Bullet Dance sometimes not obeying line of sight accurately Bullet Dance bullets are now affected by Time Wall Bullet Dance evasion reduced from 50% to 25% Bullet Dance fire rate reduced from 25% to 15% Ivy Stone Form now works against airborne targets Kudzu Bomb T3 now also grants +2m Radius Kudzu Bomb spirit power scaling increased from 0.6 to 0.7 Fixed clicking noise when flying while disarmed Fixed being able to Stone Form during the Take Flight animation to circumvent the vulnerable cast period Kelvin Headshot bonus damage reduced by 20% Bullet damage growth reduced from 1.2 to 0.9 Arctic Beam movement slow reduced from 70% to 50% Moving through breakables while on Ice Path now destroys them Lady Geist Life Drain cooldown reduced from 42s to 30s Malice cooldown reduced from 6.25s to 6s Malice T1 improved from -2.75s Cooldown to -3s Fixed Life Drain not healing extra based on amplifications (like Soul Shredder and Malice stacks) Sprint increased from 1 to 1.5 McGinnis Fixed looking up circumventing the min range on Wall and Barrage Can now cast parry to cancel your ult Fixed various issues with Spectral Wall indoors and near walls spawning the wrong number of segments Mo & Krill Combo duration reduced from 2.75s to 2.5s Combo damage spirit scaling increased from 0.8 to 1.1 Combo kill trigger now has a 3s buffer window to get credit Sand Blast T1 reduced from +1.5s to +1s Sand Blast range increased from 30m to 35m Burrow base speed increased from 3 to 4 Burrow T3 speed reduced from +3 to +2 Paradox Pulse Grenade T3 now also grants +2% Damage Amp Fixed being unable to be damaged by multiple Time Walls Pocket Affliction no longer goes through walls, now respects line of sight Barrage T3 reduced from +5% to +4% Seven Static Charge stun duration reduced from 1.1 to 0.9 Static Charge T3 reduced from 1.1 to 0.9 Static Charge radius reduced from 6m to 5m Static Charge can now be alternate-casted on self (does not stun you) Static Charge now respects line of sight Lightning Ball T3 now also gives +1m Radius Shiv Slice and Dice T2 reduced from +85 to +75 Killing Blow Rage buildup per spirit damage reduced from 0.02 to 0.013 Killing Blow Rage drain rate increased from 0.3 to 0.35 Killing Blow Full Rage Bonus Damage reduced from 20% to 15% Killing Blow T2 increased from 5% to 10% Vindicta Gun cycle time increased from 0.19s to 0.22s (same overall dps) Stake: distance enemies are allowed to move increased from 6m to 8m Max Falloff reduced from 58m to 45m Fixed Flight ending if you touch the ground Low HP indication now also shows up while unscoped Assassinate Base damage reduced from 160 to 140 Assassinate zoom level reduced a little bit Flight duration spirit scaling reduced from 0.2 to 0.15 Viscous The Cube cleanse is now part of the T2 Puddle Punch enemy warning time increased from 0.35s to 0.45s Bullet Damage reduced from 13 to 12 Can now use down dash during Goo Ball Fixed Phantom Strike not positioning you correctly when using it with your Goo Ball Splatter post cast delay reduced from 0.5s to 0.2s Warden Binding Word escape range and escape time increased by 15% Last Stand spirit scaling increased from 0.9 to 1.2 Yamato Bullet damage growth reduced from 0.5 to 0.45 Crimson Slash fire rate slow reduced from 30% to 20% Fixed various issues with Flying Strike pathing Shadow Transformation duration reduced from 5s to 4.5s Shadow Transformation T3 duration increased from +1.5s to +2s Shadow Transformation no longer provides unlimited ammo Warp Stone Casting while on the ground will no longer stop the player in place, will try to move forward along the ground instead Fixed cases of Warp Stone getting caught on geometry Monster Rounds Bullet Resist vs NPCs reduced from 35% to 30% Restorative Shot Cooldown reduced from 6.2s to 5.5s Headshot Booster Fire Rate reduced from +5% to +4% Kinetic Dash Fire Rate reduced from 25% to 20% Fire Rate max duration reduced from 8s to 7s Berserker Damage required per stack reduced from 110 to 100 Mystic Shot Damage spirit scaling increased from 0.6 to 0.8 Melee Charge Impact now increases your ammo for that mag instead of reloading (so if your ammo is 2/8, it becomes 10/8). Reloads you instantly if in the middle of a reload. Cooldown increased from 8.5s to 10s Intensifying Magazine Max Weapon Damage reduced from 75% to 60% Escalating Resilience Fire Rate reduced from 14% to 12% Headhunter Now requires Headshot Booster No longer grants +50% Bullet Velocity Now grants +5% Fire Rate Fixed not being affected by cooldown reduction Titanic Magazine Ammo increased from 100% to 120% Sharpshooter Fixed falloff reduction not working properly Frenzy Low HP Spirit Resist changed to Bullet Resist Spiritual Overflow Now grants +250 Bullet Shield Silencer Now grants +12 Spirit Ricochet Fire Rate reduced from 12% to 10% Vampiric Burst Fixed casting it interrupting sliding Siphon Bullets Moved to T4 Vitality Now a T4 Vitality Item No longer grants +28% Weapon Damage Now grants +18% Bullet Resistance Shadow Weave Now a T4 Weapon Item Moved to T4 Weapon Melee Lifesteal Melee Damage reduced from 13% to 12% Heal vs non-heroes reduced from 40% to 30% Extra Stamina Stamina Recovery increased from 10% to 14% Restorative Locket No longer requires max stacks to restore a stamina point Divine Barrier Bonus Health reduced from 75 to 50 Return Fire While active grants +25% Bullet Resistance Bullet Damage Returned reduced from 70% to 60% No longer grants +7% Fire Rate Spirit Power increased from +7 to +9 Fixed Ricochet'd bullets not returning the right amount of damage Bullet Armor Bullet Resist increased from 20% to 25% Veil Walker No longer grants +20% Fire Rate Fortitude Bonus Health increased from 275 to 300 Lifestrike Cooldown reduced from 5.25s to 5s Fixed proccing heal more than once when hitting multiple targets Colossus Slow radius increased from 12m to 14m Soul Rebirth Increases base respawn rate by +15s Unstoppable Can no longer be cast during channels Ammo Scavenger Ammo reduced from 15% to 10% Health reduced from 60 to 40 Duration reduced from 35s to 30s Max stacks reduced from 12 to 10 Spirit Strike No longer grants +0.8 Health Regen Quicksilver Reload No longer triggers if your ammo is at max value already Decay Cooldown increased from 32s to 45s Cast range scaling reduced from 0.2 to 0.16 Improved Spirit Spirit Power increased from +21 to +23 Knockdown Now causes enemies to fall down faster Torment Pulse Health Bonus increased from 140 to 160 Spirit Power damage scaling increased from 0.25 to 0.33 Rapid Recharge Faster Time Between Charges increased from +55% to +65% Cooldown Reduction For Charged Abilities increased from +25% to 30% Magic Carpet Fixed it consuming stamina when jumping off Escalating Exposure Fixed the bonus damage being reduced twice by resistance Refresher Bullet Resist increased from 8% to 16% Spirit Resist reduced from 16% to 8% Echo Shard Now has a 0.3s cast delay (like Refresher)",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-09-21',
			to: '2024-09-26'
		},
		after: {
			from: '2024-09-27',
			to: '2024-09-28'
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
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Hook',
		id: 'hook'
	},
	{
		level: 3,
		title: 'Hyper Beam',
		id: 'hyper-beam'
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
		level: 3,
		title: 'Bullet Dance',
		id: 'bullet-dance'
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
		level: 3,
		title: 'Kudzu Bomb',
		id: 'kudzu-bomb'
	},
	{
		level: 3,
		title: 'Air Drop',
		id: 'air-drop'
	},
	{
		level: 3,
		title: 'Stone Form',
		id: 'stone-form-1'
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
		level: 3,
		title: 'Ice Path',
		id: 'ice-path'
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
		title: 'Malice',
		id: 'malice'
	},
	{
		level: 3,
		title: 'Life Drain',
		id: 'life-drain-1'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Can',
		id: 'can'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 2,
		title: 'Mo & Krill',
		id: 'mo-krill'
	},
	{
		level: 3,
		title: 'Combo',
		id: 'combo'
	},
	{
		level: 3,
		title: 'Sand Blast',
		id: 'sand-blast'
	},
	{
		level: 3,
		title: 'Burrow',
		id: 'burrow'
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
		title: 'Time Wall',
		id: 'time-wall'
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
		level: 3,
		title: 'Barrage',
		id: 'barrage'
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
		title: 'Lightning Ball',
		id: 'lightning-ball'
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
		title: 'Killing Blow',
		id: 'killing-blow'
	},
	{
		level: 3,
		title: 'Killing Blow Full Rage Bonus Damage',
		id: 'killing-blow-full-rage-bonus-damage'
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
		title: 'Flight',
		id: 'flight'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate'
	},
	{
		level: 3,
		title: 'Assassinate Base',
		id: 'assassinate-base'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate-1'
	},
	{
		level: 3,
		title: 'Flight',
		id: 'flight-1'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
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
		level: 3,
		title: 'Splatter',
		id: 'splatter'
	},
	{
		level: 2,
		title: 'Warden',
		id: 'warden'
	},
	{
		level: 3,
		title: 'Binding Word',
		id: 'binding-word'
	},
	{
		level: 3,
		title: 'Last Stand',
		id: 'last-stand'
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
		level: 3,
		title: 'Flying Slash',
		id: 'flying-slash'
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
		title: 'Ammo Scavenger',
		id: 'ammo-scavenger'
	},
	{
		level: 2,
		title: 'Berserker',
		id: 'berserker'
	},
	{
		level: 2,
		title: 'Bullet Armor',
		id: 'bullet-armor'
	},
	{
		level: 2,
		title: 'Colossus',
		id: 'colossus'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: 'Divine Barrier',
		id: 'divine-barrier'
	},
	{
		level: 2,
		title: 'Echo Shard',
		id: 'echo-shard'
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
		title: 'Extra Stamina',
		id: 'extra-stamina'
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
		title: 'Improved Spirit',
		id: 'improved-spirit'
	},
	{
		level: 2,
		title: 'Intensifying Magazine',
		id: 'intensifying-magazine'
	},
	{
		level: 2,
		title: 'Kinetic Dash',
		id: 'kinetic-dash'
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
		title: 'Magic Carpet',
		id: 'magic-carpet'
	},
	{
		level: 2,
		title: 'Melee Charge',
		id: 'melee-charge'
	},
	{
		level: 2,
		title: 'Melee Lifesteal',
		id: 'melee-lifesteal'
	},
	{
		level: 2,
		title: 'Monster Rounds',
		id: 'monster-rounds'
	},
	{
		level: 2,
		title: 'Mystic Shot',
		id: 'mystic-shot'
	},
	{
		level: 2,
		title: 'Quicksilver Reload',
		id: 'quicksilver-reload'
	},
	{
		level: 2,
		title: 'Rapid Recharge',
		id: 'rapid-recharge'
	},
	{
		level: 2,
		title: 'Refresher',
		id: 'refresher'
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
		title: 'Ricochet',
		id: 'ricochet'
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
		title: 'Siphon Bullets',
		id: 'siphon-bullets'
	},
	{
		level: 2,
		title: 'Soul Rebirth',
		id: 'soul-rebirth'
	},
	{
		level: 2,
		title: 'Spirit Strike',
		id: 'spirit-strike'
	},
	{
		level: 2,
		title: 'Spiritual Overflow',
		id: 'spiritual-overflow'
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
		title: 'Warp Stone',
		id: 'warp-stone'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-09-21',
			to: '2024-09-26'
		},
		after: {
			from: '2024-09-27',
			to: '2024-09-28'
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
			name: 'McGinnis',
			id: 'mcginnis'
		},
		{
			kind: 'hero',
			name: 'Mo & Krill',
			id: 'mo-krill'
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
			name: 'Ammo Scavenger',
			id: 'ammo-scavenger'
		},
		{
			kind: 'item',
			name: 'Berserker',
			id: 'berserker'
		},
		{
			kind: 'item',
			name: 'Bullet Armor',
			id: 'bullet-armor'
		},
		{
			kind: 'item',
			name: 'Colossus',
			id: 'colossus'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: 'Divine Barrier',
			id: 'divine-barrier'
		},
		{
			kind: 'item',
			name: 'Echo Shard',
			id: 'echo-shard'
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
			name: 'Extra Stamina',
			id: 'extra-stamina'
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
			name: 'Improved Spirit',
			id: 'improved-spirit'
		},
		{
			kind: 'item',
			name: 'Intensifying Magazine',
			id: 'intensifying-magazine'
		},
		{
			kind: 'item',
			name: 'Kinetic Dash',
			id: 'kinetic-dash'
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
			name: 'Magic Carpet',
			id: 'magic-carpet'
		},
		{
			kind: 'item',
			name: 'Melee Charge',
			id: 'melee-charge'
		},
		{
			kind: 'item',
			name: 'Melee Lifesteal',
			id: 'melee-lifesteal'
		},
		{
			kind: 'item',
			name: 'Monster Rounds',
			id: 'monster-rounds'
		},
		{
			kind: 'item',
			name: 'Mystic Shot',
			id: 'mystic-shot'
		},
		{
			kind: 'item',
			name: 'Quicksilver Reload',
			id: 'quicksilver-reload'
		},
		{
			kind: 'item',
			name: 'Rapid Recharge',
			id: 'rapid-recharge'
		},
		{
			kind: 'item',
			name: 'Refresher',
			id: 'refresher'
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
			name: 'Ricochet',
			id: 'ricochet'
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
			name: 'Siphon Bullets',
			id: 'siphon-bullets'
		},
		{
			kind: 'item',
			name: 'Soul Rebirth',
			id: 'soul-rebirth'
		},
		{
			kind: 'item',
			name: 'Spirit Strike',
			id: 'spirit-strike'
		},
		{
			kind: 'item',
			name: 'Spiritual Overflow',
			id: 'spiritual-overflow'
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
			name: 'Warp Stone',
			id: 'warp-stone'
		}
	],
	related: []
};
function _9_26_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added new hero, Mirage.</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/20/20368-e3ba7aa1f4a51da04dc021866fa54506.jpg?hash=ymVdtOoaPa" alt="hero mirage"  decoding="async" loading="eager"/></p>\n<ul><li>Added an initial Anti-Cheat detection system. When a user is detected as cheating, during the game session the opponents will be given a choice between banning the user immediately and ending the match or turning the cheater into a frog for the rest of the game and then banning them afterwards. The system is set to conservative detection levels as we work on a v2 anti-cheat system that is more extensive. We will turn on the banning of users in a couple of days after the update is out. When a match is ended this way, the results will not count for other players.</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/20/20367-5afd920938a15b06c92dbacbd525b980.jpg?hash=QQG9epHAYO" alt="two buttons abrams"  decoding="async" loading="lazy"/></p>\n<ul><li>Added global quickcast support. You can now configure your abilities and/or items to be on quickcast mode globally. You can also customize each ability individually to be quickcast or not. This also supports grenade style abilities.</li><li>Hero specific keybinds now say the ability name instead of ability 1-4</li><li>Added Zipline hotkey that can be independently bound from space/jump</li><li>Fixed per-hero keys not inheriting user-defined default keys properly</li><li>Added keybind indicator for hero-specific binds showing which keys have been bound for that hero</li><li>Added Custom Match play mode</li><li>Private lobbies now have an option to turn on cheats</li><li>Private lobbies now let you select the specific servers to use</li><li>Private lobbies now have an option to make the match publicly visible or private to only the players</li><li>Private lobbies now support post-game and replays properly</li><li>Private lobbies now allow picking specific lanes (solo and dual lane colors are displayed)</li><li>Added a cheat report option in-game and post-game</li><li>Can now mute and report enemy players using ESC while in-game</li><li>Updated the game access invite UI to make it clear when users have been accepted (in most cases we look into where a user said their friend wasn&#x27;t accepted, the user was actually accepted but they never claimed the game on the Steam notifications side)</li><li>Added voice indicators for when players are speaking in party and team chat (green for party, white for team)</li><li>Updated Player Card and action menu when clicking on a player in the friend list or ESC menu</li><li>Fixed Rich Presence for Steam and in-game friend lists</li><li>Party Code is now hidden when you enable Streamer Mode</li><li>Added Region indicator to the matches on the watch tab</li><li>Fixed search by MatchID not working for games that are live</li><li>Added Spectator Fog of War toggle (hotkeys available in settings)</li><li>Added South Africa servers</li><li>Added Italian localization</li><li>Instead of showing the total number of favorites for each build, we now tag popular builds using a mix of both recent and historical usage so that newer builds are easier to find</li><li>Builds that haven&#x27;t been updated in 30 days now have a distinct visual</li><li>General rendering performance improvements</li><li>Shadow quality improvements for higher shadow settings</li><li>Fixed issues with player outline rendering in FSR2</li><li>Fixed regression with saturation volumes outline not showing up</li><li>Displacement mapping no longer an official option and will likely be cut (it can be enabled with a ConVar after the game starts)</li><li>Lighting improvements in map</li><li>Picking up a powerup will now list all the stats they modify in the HUD instead of a generic name like &#x27;Casting&#x27; or &#x27;Gun&#x27;</li><li>Spirit scaling is now always shown on the tooltips without needing to hold alt/tab</li><li>Updated Viscous icon to look more different from Dynamo</li><li>Added frosted shell effect on the rejuv crystal when Frozen Shelter is active</li><li>Music and Sound effects will now pause during game pause</li><li>Fixed Guardian trying to shoot people unsuccessfully behind cover</li><li>Fixed Quicksilver Reload bonus damage not working correctly with things like Scorn and Flog</li><li>Added timer sound to the last couple seconds of Flying Cloak</li><li>Wall Jumps now use better animations to communicate directionality</li><li>Fixed jumping between ziplines consuming stamina</li><li>Fixed Magic Reverb not getting increased bonus damage from damage amps</li><li>Improved preloading during queue time</li><li>Updated Killing Blow effects</li><li>Updated Lightning Ball effects to reduce some visual noise</li><li>Fixed some issues with Crimson Slash effect not appearing reliably</li><li>Viscous Puddle Punch will now show a red preview for when the punch is out of range but within 2x of the cast range</li><li>Fixed Ricochet not respecting LOS when picking the targets</li><li>No longer play low ammo sounds when firing while sliding</li><li>Fixed not being able to bind Reload to Mouse Wheel Up/Down</li><li>Minimap line colors now match the color of the hero drawing them</li><li>Fixed spectator keybinds not showing correctly</li><li>Updated Flying Strike effects to reduce some visual noise</li><li>Fixed Flex Slot unlock order not matching the usual order of unlocks</li><li>Updated Sleep Dagger projectile, impact and sleeping debuff visuals</li><li>Fixed imbue and active abilities dialog not responding to keybinds if your ability/item binds included a modifier key or were bound to the mouse wheel</li><li>Fixed Dynamo not playing an animation during the cast delay on Singularity</li><li>Updated bullet shield break effects</li><li>Updated Unstoppable effects to be clearer at cast time</li><li>Fixed various projectiles going through bosses (Wraith cards, Geist bombs, etc)</li><li>Fixed Dash not always breaking breakables</li><li>Breakables will now wait to spawn if a player is in the way</li><li>Abrams now has a new custom heavy melee animation</li><li>Updated Haze VO</li><li>Fixed a bug where Kelvin desperation VO for Arctic Beam and Ice Path were flipped</li><li>Turned off a Shiv line where he referenced slowing down enemies when he wasn&#x27;t actually doing so</li><li>Removed reason 31 of why Lash is better than Bebop and replaced it with reason 26 of why Lash is better than Bebop (fixed a bug with Lash&#x27;s hero select lines)</li><li>Replaced a Grey Talon select line to make his intentions more clear</li><li>Infernus will no longer appear in every bot match</li><li>Bots can now choose to play Lady Geist, Mirage, Shiv, and Warden</li><li>Fixed min/max falloff range displaying incorrectly on Weapon Stats Tooltip</li><li>Updated Rejuvenator buff effect</li><li>Updated wall bounce effects for Viscous in ball form</li><li>Added citadel_give_gold cheat command</li><li>Improved read on the connecting rope for Flying Strike and reduced visual obstruction of the ending slash</li><li>Music bug fixes for replay and spectating</li><li>Allow announcer lines for kill streaks and various hero lines to play while the player is in an active combat encounter</li><li>Timing critical music and sfx will pause and resume in response to game pause</li><li>Side lanes are now a little further apart from the middle lanes</li><li>Added a First Blood bonus bounty for the first kill each player gets. Grants 150 bonus souls.</li><li>Lane setup is now always 1-2-2-1</li><li>Zipline Boost now starts on cooldown again</li><li>Trooper damage reduction from Guardians reduced from 35% to 28% (they die a little faster to Guardians now)</li><li>Trooper share radius reduced (from allied hero to allied hero 50m-&gt;40m, from orb to allied hero 40m-&gt;35m)</li><li>Reverted recent creep sharing duplication changes (back to how it was over a week ago, we want to see if it&#x27;s still an issue with the other changes in this patch)</li><li>Some latency-related calculation improvements that help orbs be a little less deny favored</li><li>Orbs now appear a little smaller to the enemy that is trying to deny them</li><li>Added a Soul Generator (like the one in hero sandbox) in the respawn area. Starts spawning orbs at 3 minutes. Each orb is worth 10 souls when shot. (primary purpose for this is cases when you are very close to an item purchase)</li><li>Fire Rate slows now stack diminishingly</li><li>Rejuv bonus creep HP increased from 50% to 70%</li><li>Rejuv bonus is no longer consumed for dead players, they have it on their next life now</li><li>Troopers no longer give half bounty when base guardians are destroyed for that lane</li><li>Killer to Assist bounty ratio reduced from 2.0 to 1.7 (slightly more to assists)</li><li>Midgame respawn time increased a bit (reaches 50s at 20 min instead of 40s at 20 min)</li><li>Teleporter delay reduced from 5s to 4s</li><li>Guardians now deal 10% more damage to players</li><li>Sinner&#x27;s Sacrifice now grants a permanent golden statue bonus when it is killed</li><li>Fixed Sinner&#x27;s Sacrifice sharing bounty to nearby allies</li><li>Added indicator on the hud to help track your passive cooldown items when they are 1s from ready (headshot Booster, Medic Bullets, etc)</li><li>Boon count increased from 11 to 14 (added to 16/18/20k)</li><li>Non-Health boon bonuses rescaled over the 14 levels (same total as before)</li><li>Aggressive crouch spamming within a very narrow window will now cause you to very briefly move progressively slower</li><li>Added Rejuv drop on a loop in the sandbox mode</li><li>Added infinite ammo option to sandbox (&quot;No Reload&quot;)</li><li>Fixed dashing downwards not destroying breakables</li><li>Silence now deselects your ability if you had it open when silenced</li><li>High-Velocity Mag: Bullet Velocity reduced from +30% to +25%</li><li>Hollow Point Ward: Spirit Shield increased from +85 to +95</li><li>Pristine Emblem: Now requires High-Velocity Mag</li><li>Pristine Emblem: Now grants +35% Bullet Velocity</li><li>Combat Barrier: Fire Rate while shielded reduced from 8% to 6%</li><li>Combat Barrier: Weapon Damage while shielded reduced from 28% to 25%</li><li>Combat Barrier: Bullet Shield increased from +300 to +325</li><li>Health Nova: Weapon Damage increased from 10% to 12%</li><li>Improved Bullet Armor: Bullet Resist increased from 45% to 50%</li><li>Mystic Reach: Ability Range increased from 16% to 18%</li><li>Mystic Reach: Now provides 6% Bullet Resist instead of 6% Spirit Resist</li><li>Withering Whip: No longer grants +8% Fire Rate</li><li>Withering Whip: Spirit Power increased from +4 to +6</li><li>Withering Whip: Now grants +1 Sprint</li><li>Withering Whip: Cast range increased from 24m to 30m</li><li>Withering Whip: Fire Rate slow increased from 40% to 45%</li><li>Improved Reach: Now provides 12% Bullet Resist instead of 12% Spirit Resist</li><li>Outer lanes at the middle of the map pushed further away from the inner lanes</li><li>Added connection from canal near the urn platforms through the Radio Station and Apartment buildings</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/20/20364-737a9eb201f55b83b3b09dc8d87bd1c2.jpg?hash=0gyuyoyo_r" alt="radio station connection"  decoding="async" loading="lazy"/></p>\n<ul><li>Reworked interior corridors of Fish Market/Nursery to exit to the buildings sooner</li><li>Added interior room partition from the Fish Market/Nursery to the Shops</li><li>Moved rope to the Fish Market/Nursery rooftop to the back of the building</li><li>Removed upper interior hallway from rope to the Fish Market/Nursery rooftops</li><li>Moved truck from in front of archway with cosmic veil to the back of the Fish Market/Nursery</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/20/20363-389f6eb1102c577c4052e2f4307e2341.jpg?hash=xVUkAzjhW9" alt="fish market changes"  decoding="async" loading="lazy"/></p>\n<ul><li>Redesigned outer lane path (ziplines and trooper nodes) from Walker to Guardian on Amber Yellow and Sapphire Purple</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/20/20361-1672050e626e1611deecb2139c8b59f7.jpg?hash=iojHR_BDBx" alt="amber yellow patch"  decoding="async" loading="lazy"/> <img src="https://project8-data.community.forum/attachments/20/20362-0ce5e2aaa8d4e097eeec35b303e96b82.jpg?hash=vXAxwTYkow" alt="amber purple patch"  decoding="async" loading="lazy"/></p>\n<ul><li>Added interior passage beside Subway Entrance to the outer lanes</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/20/20366-90529144c84ff416aea345345096a12e.jpg?hash=_S-M-Q7HiK" alt="subway entrance connection"  decoding="async" loading="lazy"/></p>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_9_26_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n')} <div class="ability infernal-resilience">${html('\n<p><a href="/ability/infernal-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Infernal Resilience change history</a></p>\n<h4 id="infernal-resilience"><a href="/ability/infernal-resilience">Infernal Resilience</a></h4>\n<ul><li>Infernal Resilience reduced from 16% to 15%</li><li>Infernal Resilience T3 reduced from 9% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Infernal Resilience'
	});
	$$renderer.push(
		`<!----></div> <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Siphon Life spirit scaling increased from 0.2 to 0.3</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Fixed Cases where Shoulder Charge was unexpectedly &#x27;slamming&#x27; in to walls and stairs</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability hook">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>\n<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>\n<ul><li>Hook range reduced from 30m to 25m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n<ul><li>Hyper Beam duration spirit scaling reduced from 0.08 to 0.06</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n')} <ul><li>${html('Singularity radius reduced from 8m to 7m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Singularity radius reduced from 8m to 7m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n<ul><li>Arrow cycle time reduced from 0.4s to 0.45s (overall dps unchanged)</li></ul>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n<ul><li>Rain of Arrows can be alternate-casted to remain near the ground</li><li>Fixed air dash during Rain of Arrows going half the distance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n')} <ul><li>${html('Guided Owl bonus spirit on death now has a 3s buffer window')}</li> <li>${html('Guided Owl: very slight turn rate improvements')}</li> <li>${html('Guided Owl radius increased from 12m to 13m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		groupIndex: 2,
		bulletIndex: 2,
		text: 'Guided Owl radius increased from 12m to 13m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep dagger hitbox reduced by 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n<ul><li>Fixed refresher not working properly with Smoke Bomb</li><li>Fixed some items that didn&#x27;t proc before: Tesla Bullets, Lucky Shot, Mystic Shot</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance now more accurately shows who it is shooting</li><li>Fixed Bullet Dance sometimes not obeying line of sight accurately</li><li>Bullet Dance bullets are now affected by Time Wall</li><li>Bullet Dance evasion reduced from 50% to 25%</li><li>Bullet Dance fire rate reduced from 25% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n')} <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>\n<ul><li>Stone Form now works against airborne targets</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-bomb">${html('\n<p><a href="/ability/entangling-thorns"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Bomb change history</a></p>\n<h4 id="kudzu-bomb"><a href="/ability/entangling-thorns">Kudzu Bomb</a></h4>\n<ul><li>Kudzu Bomb T3 now also grants +2m Radius</li><li>Kudzu Bomb spirit power scaling increased from 0.6 to 0.7</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n<ul><li>Fixed clicking noise when flying while disarmed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form-1"><a href="/ability/stone-form">Stone Form</a></h4>\n<ul><li>Fixed being able to Stone Form during the Take Flight animation to circumvent the vulnerable cast period</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Headshot bonus damage reduced by 20%</li><li>Bullet damage growth reduced from 1.2 to 0.9</li></ul>\n')} <div class="ability arctic-beam">${html('\n<p><a href="/ability/arctic-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Arctic Beam change history</a></p>\n<h4 id="arctic-beam"><a href="/ability/arctic-beam">Arctic Beam</a></h4>\n<ul><li>Arctic Beam movement slow reduced from 70% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Arctic Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability ice-path">${html('\n<p><a href="/ability/ice-path"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ice Path change history</a></p>\n<h4 id="ice-path"><a href="/ability/ice-path">Ice Path</a></h4>\n<ul><li>Moving through breakables while on Ice Path now destroys them</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Ice Path'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability life-drain">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>\n<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>\n')} <ul><li>${html('Life Drain cooldown reduced from 42s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Life Drain cooldown reduced from 42s to 30s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain'
	});
	$$renderer.push(
		`<!----></div> <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n')} <ul><li>${html('Malice cooldown reduced from 6.25s to 6s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Malice cooldown reduced from 6.25s to 6s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Malice T1 improved from -2.75s Cooldown to -3s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability life-drain">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>\n<h4 id="life-drain-1"><a href="/ability/life-drain">Life Drain</a></h4>\n<ul><li>Fixed Life Drain not healing extra based on amplifications (like Soul Shredder and Malice stacks)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Sprint increased from 1 to 1.5</li></ul>\n')}</div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n<ul><li>Fixed looking up circumventing the min range on Wall and Barrage</li></ul>\n')} <div class="ability can">${html('\n<h4 id="can">Can</h4>\n<ul><li>Can now cast parry to cancel your ult</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Can'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><a href="/ability/spectral-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spectral Wall change history</a></p>\n<h4 id="spectral-wall"><a href="/ability/spectral-wall">Spectral Wall</a></h4>\n<ul><li>Fixed various issues with Spectral Wall indoors and near walls spawning the wrong number of segments</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Combo duration reduced from 2.75s to 2.5s</li><li>Combo damage spirit scaling increased from 0.8 to 1.1</li><li>Combo kill trigger now has a 3s buffer window to get credit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sand-blast">${html('\n<p><a href="/ability/sand-blast"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sand Blast change history</a></p>\n<h4 id="sand-blast"><a href="/ability/sand-blast">Sand Blast</a></h4>\n<ul><li>Sand Blast T1 reduced from +1.5s to +1s</li><li>Sand Blast range increased from 30m to 35m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Sand Blast'
	});
	$$renderer.push(
		`<!----></div> <div class="ability burrow">${html('\n<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>\n<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>\n<ul><li>Burrow base speed increased from 3 to 4</li><li>Burrow T3 speed reduced from +3 to +2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Burrow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n<ul><li>Pulse Grenade T3 now also grants +2% Damage Amp</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Fixed being unable to be damaged by multiple Time Walls</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n')} <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction no longer goes through walls, now respects line of sight</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div> <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>\n<ul><li>Barrage T3 reduced from +5% to +4%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability static-charge">${html('\n<p><a href="/ability/static-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Static Charge change history</a></p>\n<h4 id="static-charge"><a href="/ability/static-charge">Static Charge</a></h4>\n')} <ul><li>${html('Static Charge stun duration reduced from 1.1 to 0.9')}</li> <li>${html('Static Charge T3 reduced from 1.1 to 0.9')}</li> <li>${html('Static Charge radius reduced from 6m to 5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Seven',
		groupIndex: 0,
		bulletIndex: 2,
		text: 'Static Charge radius reduced from 6m to 5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Static Charge can now be alternate-casted on self (does not stun you)')}</li> <li>${html('Static Charge now respects line of sight')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Static Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n<ul><li>Lightning Ball T3 now also gives +1m Radius</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n<ul><li>Slice and Dice T2 reduced from +85 to +75</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow Rage buildup per spirit damage reduced from 0.02 to 0.013</li><li>Killing Blow Rage drain rate increased from 0.3 to 0.35</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow-full-rage-bonus-damage">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow Full Rage Bonus Damage change history</a></p>\n<h4 id="killing-blow-full-rage-bonus-damage"><a href="/ability/killing-blow">Killing Blow Full Rage Bonus Damage</a></h4>\n<ul><li>Killing Blow Full Rage Bonus Damage reduced from 20% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow Full Rage Bonus Damage'
	});
	$$renderer.push(
		`<!----></div> <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow-1"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Killing Blow T2 increased from 5% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Gun cycle time increased from 0.19s to 0.22s (same overall dps)</li></ul>\n')} <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n<ul><li>Stake: distance enemies are allowed to move increased from 6m to 8m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Max Falloff reduced from 58m to 45m</li></ul>\n')} <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Fixed Flight ending if you touch the ground</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Low HP indication now also shows up while unscoped</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate-base">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate Base change history</a></p>\n<h4 id="assassinate-base"><a href="/ability/assassinate">Assassinate Base</a></h4>\n')} <ul><li>${html('Assassinate Base damage reduced from 160 to 140')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Assassinate Base damage reduced from 160 to 140'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate Base'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate-1"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate zoom level reduced a little bit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight-1"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Flight duration spirit scaling reduced from 0.2 to 0.15</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability the-cube">${html('\n<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>\n<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>\n<ul><li>The Cube cleanse is now part of the T2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'The Cube'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Puddle Punch enemy warning time increased from 0.35s to 0.45s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Bullet Damage reduced from 13 to 12</li></ul>\n')} <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Can now use down dash during Goo Ball</li><li>Fixed Phantom Strike not positioning you correctly when using it with your Goo Ball</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n<ul><li>Splatter post cast delay reduced from 0.5s to 0.2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability binding-word">${html('\n<p><a href="/ability/binding-word"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Binding Word change history</a></p>\n<h4 id="binding-word"><a href="/ability/binding-word">Binding Word</a></h4>\n<ul><li>Binding Word escape range and escape time increased by 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Binding Word'
	});
	$$renderer.push(
		`<!----></div> <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand spirit scaling increased from 0.9 to 1.2</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n<ul><li>Bullet damage growth reduced from 0.5 to 0.45</li></ul>\n')} <div class="ability crimson-slash">${html('\n<p><a href="/ability/crimson-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crimson Slash change history</a></p>\n<h4 id="crimson-slash"><a href="/ability/crimson-slash">Crimson Slash</a></h4>\n<ul><li>Crimson Slash fire rate slow reduced from 30% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Crimson Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-slash">${html('\n<p><a href="/ability/flying-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Slash change history</a></p>\n<h4 id="flying-slash"><a href="/ability/flying-slash">Flying Slash</a></h4>\n<ul><li>Fixed various issues with Flying Strike pathing</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation duration reduced from 5s to 4.5s</li><li>Shadow Transformation T3 duration increased from +1.5s to +2s</li><li>Shadow Transformation no longer provides unlimited ammo</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_9_26_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Ammo reduced from 15% to 10%</li><li>Health reduced from 60 to 40</li><li>Duration reduced from 35s to 30s</li><li>Max stacks reduced from 12 to 10</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Damage required per stack reduced from 110 to 100</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bullet-armor">${html('\n<p><a href="/item/bullet-armor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bullet Armor patch history</a></p>\n<h3 id="bullet-armor"><a href="/item/bullet-armor">Bullet Armor</a></h3>\n<ul><li>Bullet Resist increased from 20% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bullet Armor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item colossus">${html('\n<p><a href="/item/colossus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Colossus patch history</a></p>\n<h3 id="colossus"><a href="/item/colossus">Colossus</a></h3>\n<ul><li>Slow radius increased from 12m to 14m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Colossus',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n')} <ul><li>${html('Cooldown increased from 32s to 45s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Decay',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 32s to 45s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Cast range scaling reduced from 0.2 to 0.16')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item divine-barrier">${html('\n<p><a href="/item/divine-barrier"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Divine Barrier patch history</a></p>\n<h3 id="divine-barrier"><a href="/item/divine-barrier">Divine Barrier</a></h3>\n<ul><li>Bonus Health reduced from 75 to 50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Divine Barrier',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item echo-shard">${html('\n<p><a href="/item/echo-shard"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Echo Shard patch history</a></p>\n<h3 id="echo-shard"><a href="/item/echo-shard">Echo Shard</a></h3>\n<ul><li>Now has a 0.3s cast delay (like Refresher)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Echo Shard',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-exposure">${html('\n<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>\n<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>\n<ul><li>Fixed the bonus damage being reduced twice by resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Exposure',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-resilience">${html('\n<p><a href="/item/escalating-resilience"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Resilience patch history</a></p>\n<h3 id="escalating-resilience"><a href="/item/escalating-resilience">Escalating Resilience</a></h3>\n<ul><li>Fire Rate reduced from 14% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Resilience',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-stamina">${html('\n<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>\n<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>\n<ul><li>Stamina Recovery increased from 10% to 14%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Stamina',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Bonus Health increased from 275 to 300</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Low HP Spirit Resist changed to Bullet Resist</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headhunter">${html('\n<p><a href="/item/headhunter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headhunter patch history</a></p>\n<h3 id="headhunter"><a href="/item/headhunter">Headhunter</a></h3>\n<ul><li>Now requires Headshot Booster</li><li>No longer grants +50% Bullet Velocity</li><li>Now grants +5% Fire Rate</li><li>Fixed not being affected by cooldown reduction</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headhunter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n<ul><li>Fire Rate reduced from +5% to +4%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item improved-spirit">${html('\n<p><a href="/item/improved-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Improved Spirit patch history</a></p>\n<h3 id="improved-spirit"><a href="/item/improved-spirit">Improved Spirit</a></h3>\n<ul><li>Spirit Power increased from +21 to +23</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Improved Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item intensifying-magazine">${html('\n<p><a href="/item/intensifying-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Intensifying Magazine patch history</a></p>\n<h3 id="intensifying-magazine"><a href="/item/intensifying-magazine">Intensifying Magazine</a></h3>\n<ul><li>Max Weapon Damage reduced from 75% to 60%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Intensifying Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item kinetic-dash">${html('\n<p><a href="/item/kinetic-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kinetic Dash patch history</a></p>\n<h3 id="kinetic-dash"><a href="/item/kinetic-dash">Kinetic Dash</a></h3>\n<ul><li>Fire Rate reduced from 25% to 20%</li><li>Fire Rate max duration reduced from 8s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Dash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>Now causes enemies to fall down faster</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n')} <ul><li>${html('Cooldown reduced from 5.25s to 5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 5.25s to 5s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Fixed proccing heal more than once when hitting multiple targets')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item magic-carpet">${html('\n<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>\n<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>\n<ul><li>Fixed it consuming stamina when jumping off</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Magic Carpet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n')} <ul><li>${html('Impact now increases your ammo for that mag instead of reloading (so if your ammo is 2/8, it becomes 10/8). Reloads you instantly if in the middle of a reload.')}</li> <li>${html('Cooldown increased from 8.5s to 10s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 8.5s to 10s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-lifesteal">${html('\n<p><a href="/item/melee-lifesteal"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Lifesteal patch history</a></p>\n<h3 id="melee-lifesteal"><a href="/item/melee-lifesteal">Melee Lifesteal</a></h3>\n<ul><li>Melee Damage reduced from 13% to 12%</li><li>Heal vs non-heroes reduced from 40% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Lifesteal',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item monster-rounds">${html('\n<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>\n<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>\n<ul><li>Bullet Resist vs NPCs reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Monster Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-shot">${html('\n<p><a href="/item/mystic-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Shot patch history</a></p>\n<h3 id="mystic-shot"><a href="/item/mystic-shot">Mystic Shot</a></h3>\n<ul><li>Damage spirit scaling increased from 0.6 to 0.8</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item quicksilver-reload">${html('\n<p><a href="/item/quicksilver-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Quicksilver Reload patch history</a></p>\n<h3 id="quicksilver-reload"><a href="/item/quicksilver-reload">Quicksilver Reload</a></h3>\n<ul><li>No longer triggers if your ammo is at max value already</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Quicksilver Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-recharge">${html('\n<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>\n<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>\n<ul><li>Faster Time Between Charges increased from +55% to +65%</li><li>Cooldown Reduction For Charged Abilities increased from +25% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Recharge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item refresher">${html('\n<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>\n<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>\n<ul><li>Bullet Resist increased from 8% to 16%</li><li>Spirit Resist reduced from 16% to 8%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Refresher',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>No longer requires max stacks to restore a stamina point</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n')} <ul><li>${html('Cooldown reduced from 6.2s to 5.5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 6.2s to 5.5s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n<ul><li>While active grants +25% Bullet Resistance</li><li>Bullet Damage Returned reduced from 70% to 60%</li><li>No longer grants +7% Fire Rate</li><li>Spirit Power increased from +7 to +9</li><li>Fixed Ricochet&#x27;d bullets not returning the right amount of damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ricochet">${html('\n<p><a href="/item/ricochet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ricochet patch history</a></p>\n<h3 id="ricochet"><a href="/item/ricochet">Ricochet</a></h3>\n<ul><li>Fire Rate reduced from 12% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ricochet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Now a T4 Weapon Item</li><li>Moved to T4 Weapon</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Fixed falloff reduction not working properly</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Now grants +12 Spirit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>Moved to T4 Vitality</li><li>Now a T4 Vitality Item</li><li>No longer grants +28% Weapon Damage</li><li>Now grants +18% Bullet Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item soul-rebirth">${html('\n<p><a href="/item/soul-rebirth"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Soul Rebirth patch history</a></p>\n<h3 id="soul-rebirth"><a href="/item/soul-rebirth">Soul Rebirth</a></h3>\n<ul><li>Increases base respawn rate by +15s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Soul Rebirth',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-strike">${html('\n<p><a href="/item/spirit-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spirit Strike patch history</a></p>\n<h3 id="spirit-strike"><a href="/item/spirit-strike">Spirit Strike</a></h3>\n<ul><li>No longer grants +0.8 Health Regen</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Now grants +250 Bullet Shield</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Ammo increased from 100% to 120%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item torment-pulse">${html('\n<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>\n<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>\n<ul><li>Health Bonus increased from 140 to 160</li><li>Spirit Power damage scaling increased from 0.25 to 0.33</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Torment Pulse',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n<ul><li>Can no longer be cast during channels</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vampiric-burst">${html('\n<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>\n<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>\n<ul><li>Fixed casting it interrupting sliding</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n<ul><li>No longer grants +20% Fire Rate</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item warp-stone">${html('\n<p><a href="/item/warp-stone"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warp Stone patch history</a></p>\n<h3 id="warp-stone"><a href="/item/warp-stone">Warp Stone</a></h3>\n<ul><li>Casting while on the ground will no longer stop the player in place, will try to move forward along the ground instead</li><li>Fixed cases of Warp Stone getting caught on geometry</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Warp Stone',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _9_26_mg as default, metadata, readingManifest, toc };
