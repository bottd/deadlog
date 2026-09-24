import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview,
	t as VideoLink
} from './VideoLink.js';
//#region changelogs/2024/10-10.mg?embed=0
function _0_10_mg$4($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/quick_cast_modes-mp4.23110/',
		label: 'quick cast modes'
	});
}
//#endregion
//#region changelogs/2024/10-10.mg?embed=1
function _0_10_mg$3($$renderer) {
	VideoLink($$renderer, {
		src: 'https://forums.playdeadlock.com/attachments/input_buffering-mp4.23111/',
		label: 'input buffering'
	});
}
//#endregion
//#region changelogs/2024/10-10.mg?embed=2
function _0_10_mg$2($$renderer) {
	SectionPreview($$renderer, {
		type: 'hero',
		names: [
			'Abrams',
			'Bebop',
			'Dynamo',
			'Grey Talon',
			'Haze',
			'Infernus',
			'Ivy',
			'Lady Geist',
			'Lash',
			'McGinnis',
			'Mirage',
			'Mo &amp; Krill',
			'Paradox',
			'Pocket',
			'Seven',
			'Shiv',
			'Vindicta',
			'Viscous',
			'Warden',
			'Wraith',
			'Yamato'
		]
	});
}
//#endregion
//#region changelogs/2024/10-10.mg?embed=3
function _0_10_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Alchemical Fire',
			'Ammo Scavenger',
			'Cold Front',
			'Enduring Speed',
			'Escalating Exposure',
			'Ethereal Shift',
			'Extra Health',
			'Extra Regen',
			'Extra Spirit',
			'Extra Stamina',
			'Fortitude',
			'Frenzy',
			'Healing Rite',
			'Improved Spirit',
			'Knockdown',
			'Leech',
			'Lifestrike',
			'Long Range',
			'Majestic Leap',
			'Melee Charge',
			'Monster Rounds',
			'Mystic Reverb',
			'Mystic Vulnerability',
			'Refresher',
			'Rescue Beam',
			'Restorative Locket',
			'Restorative Shot',
			'Return Fire',
			'Ricochet',
			'Silencer',
			'Siphon Bullets',
			'Slowing Hex',
			'Spiritual Overflow',
			'Superior Cooldown',
			'Tesla Bullets',
			'Torment Pulse',
			'Toxic Bullets',
			'Vampiric Burst',
			'Veil Walker'
		]
	});
}
//#endregion
//#region changelogs/2024/10-10.mg
var metadata = {
	title: '10-10-2024 Update',
	thread_id: '36958',
	published: '2024-10-10T13:24:45-0700',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		"Added Ranked mode Added a 3rd casting mode, Quick Cast (shows range/radius/etc on key down, then on key up acts like Instant Cast). The three casting modes are now Instant Cast, Quick Cast, and Confirm Cast. Added input buffering for ability usage (so if you cast an ability and then quickly cast another ability during its cast time, the next one will fire instead of the input being dropped) Now displaying a unique ID for builds in the description section of the build browser.  You can click on it to copy the Build ID to the clipboard to share specific builds with friends. If you enter a Build ID in the search box of the build browser, it will show all of the builds for the current hero by the author of that build. For private lobbies, added the ability to swap players on both teams with a button press. In addition players can be randomly shuffled across the two teams, and if lanes are being assigned, can be shuffled within the teams. Added \"Allow Duplicate Heroes\" setting in Private Lobbies Certain heroes now have a higher priority at being in dual lanes (Ivy and Dynamo atm) Added per-player voice volume slider (accessible by clicking on a player via the ESC menu) Pausing is no longer allowed in the first three minutes of the game Added Thai and Indonesian localization Replaced the temp Yamato VO with a new translation spoken by a native actress Added Stomp AoE range indication as the Walker is about to use the ability Updated the way status effects are shown above the healthbar Fixed troopers being unreliable to shoot while on the zipline Fixed an Unsecured Souls bug where it gave extra bounty directly to the dying hero carrying unsecured souls Fixed AFK kick detection not working properly Added Crit Bonus Scale tooltip to the Weapon stats in the shop Fixed ESC key not working on the private lobbies page Fixed respawn music not playing while spectating another player Fixed a bug where the bot that would pick up the Urn was not the closest one, just the one that was in the highest player slot Fixed Streamer mode not persisting between game relaunches Keybinds in settings now selects the hero you're playing when you navigate to the Keybinds tab Rescue beam now shows heal indicator if you heal someone with it Fixed Debuff Reducer causing Teleporters to be faster Steam notifications moved to the top-left from the bottom-right, to avoid minimap overlap Continue to have mouse look enabled while M3 is pressed but before the ping wheel shows up Enabled Middle Mouse for \"pinging\" minimap Enabled the ability to middle mouse click players on the top bar Fixed Shiv's Killing Blow sometimes sending him into orbit Fixed Shiv's Killing Blow continuing to do damage while being teleported by Quantum Entanglement Fixed Quantum Entanglement's camera position anims not being smooth Yamato's Flying Strike now also cancels when the target is out of world (like with Quantum Entanglement) Fixed Pausing not working when using hero specific key binds Lash's Death Slam now has clearer visual states to indicate when someone is successfully locked in Fixed some cases where Grey Talon's trap effects would be stuck in the world Updated ground strike preview cone to have a little more information on shape & outer bounds Abandon Match is now only an available option once you have disconnected from the game server. Bringing up the menu while connected to a game now gives you the option to Disconnect rather than Abandon immediately Fixed issues with Bots not using ziplines properly Added Return Fire proc sound Added Metal Skin proc sound Updated McGinnis Heavy Barrage sound Added Guardian and Walker death notification sound for all players Improved panning resolution of bullet whizby sounds and shortened the max play distance to the local player Fixed hero death UI sound playing inconsistently Added bullet evasion sound effects Updated Kelvin weapon fire audio Updated Infernus weapon fire audio Improved clarity for hero roster selection VO Walker laser animation updated slightly, raising the forearms to better reveal the eye socket weakpoint to players on the ground Re-enabled weapon-specific reload sounds Abrams Life Siphon fades to 50% opacity after initial start to improve visibility Added Healing Rite cast sound Added Rescue Beam heal and pull loop sounds Added Health Nova cast sound Added Return Fire cast sound Revised Metal Skin cast sound Added Colossus cast and loop sounds Added echo to Echo Shard cast sound Added Silence Glyph cast and hit sounds Added Ammo Scavenger proc sound Added Restorative Shot proc sound Added Toxic Bullets proc variations Added a distance fade to Soul Shredder debuff effect and tweaked colors to reduce visual noise Improved visibility on Spiritual Overflow effects when heroes are airborne Reworked visual effects for puddle punch Updated \"getting started\" VO for the ability points tab to match the text Fixed a bunch of bugs that were impacting how VO was playing in a match.  Now a bunch of hero VO that was previously getting squashed/cut off should play properly (for instance certain lines where allies commented on ability usage, the patrons giving compliments for assists/team healing, etc). The patron once again will warn you when your Walkers are under attack The patron now will sometimes offer words of encouragement when you level up instead of when you destroy a Guardian or Walker Increased the time you need to carry the urn before the urn nags about not being delivered Fixed more instances of the wrong name for a hero being called out If you're Dynamo or Krill, you can now ping during your ult to alert your allies Mirage still loves the Djinn, but he yells about them less frequently Added new custom charge and light melee and parry animations for Bebop Added improvements for meleeing while using Siphon Life (book now floats and hand makes a fist) Updated Grey Talon root effect for trap Updated Grey Talon updated firing, projectile, impact effects Updated Rain of Arrows effects New heavy melee anims added to Mo & Krill and Ivy Adjusted Trooper tracer and muzzle effects for better alignment and lower visual noise Adjusted Lady Geist Life Drain to lower visual obstruction but increase awareness when it first latches Inferno Catalyst effect revisions to help show range better Trooper death effects resolve quicker and more cleanly Mirage Djinn's Mark effects revisions to reduce noise on the victim and appear more clearly for Mirage Soul jar effect carry and dropoff revisions to reduce visual noise for carrier New Imports Building New Taxi Stand building Replaced old retaining wall Replaced block-in park bridges Troopers attack range vs Lane Guardians reduced from 13.5m to 12m (they get closer to it) Players now need to be within 19m (above the ramp) to attack a Lane Guardian Guardians now take 70% less damage from troopers at the start of the game; this reduces by 10% per minute (max at +30% increased damage at 10 min) Guardian damage vs players increased by 20% Medium Camps spawn time changed from 7 min to 5 min Hard Camps spawn time changed from 7 min to 8 min Teleporters open time changed from 10 min to 8 min Trooper spawn/bounty lane end time changed from 10 min to 8 min Vaults spawn time/interval changed from 10/5 to 8/4 Golden Statues and Breakables spawn time changed from 3 min to 2 min Golden Statues bonuses upgrade time changed from 15 min to 10 min Golden Statue Health buff increased from 15/20 to 20/30 Golden Statues now have a tier 3 upgrade at 25 minutes (+2.5% Fire Rate, +8% Ammo, 1.5% CD Reduction, +7% Weapon Damage, 40 Health, +5 Spirit Power) Mid Boss now has 15 regen Mid Boss creep buff rescaled from 70% to 50/70/90% for the 1/2/3rd mid boss death (further deaths don't increase) Mid Boss rejuv respawn rescaled from 50% to 40/50/60% for the 1/2/3rd mid boss death (further deaths don't increase) Urn now causes the runner to be revealed on the minimap Heavy Melee against the urn runner now causes them to drop the urn Urn delivery now gives each player on your team a Golden Statue permanent buff Urn bounty increased by 15% Urn now falls down from the sky a little bit faster Comeback formula weighted a bit less on team vs team net worth calculation and more on the strength of the dying hero (regardless of lead) Percentage of deniable orbs from objectives for Guardian/Walker/Patron/Shrines rescaled from 54.55/66.67/100/0% to 35% Shields no longer reduce damage or get depleted by NPC units (Troopers, Bosses etc, but still takes damage from player summoned units) All heroes' movespeed increased by 0.3 (Enduring Speed reduced by 0.3) Bullet and Spirit Lifesteal now stack diminishingly Teleporters now grant +3 m/s for 5s after arriving at the other side Updated teleporter locations Moved teleporters to travel between outer lane Walkers Added teleporters in the underground tunnels Changed underground teleporters to go between Subway and Tunnel on the same side of the map Widened stairs from Shrines back to the player spawn area Added ledge to mantle back up to the player spawn area from the pit Added bridge and stair to the upper level of the Subway Entrance building from the outer lane Walker arenas Added upper level connection through the Subway Entrance building Moved Guardians back slightly further from stairs down to the canal Widened channels surrounding Mid Temple slightly Widened archways between Mid Temple channels Garage and Night Club: Changed ropes so that they take you to the second floor and added back stairs to take you to the roof Basic Magazine: Ammo increased from 24% to 26% Health Nova: Spirit Power increased from +4 to +6 Combat Barrier: Weapon Damage reduced from 25% to 22% Superior Stamina: Stamina Recovery increased from 20% to 25% Withering Whip: No longer grants +50 Health Withering Whip: Now grants +100 Bullet Shield Withering Whip: Cooldown reduced from 26s to 22s Improved Burst: Max Health damage reduced from 9% to 7% Abrams Base health reduced from 600 to 570 Health per boon increased from 32 to 34 (1048 vs 1046 total) Fixed shoulder charge sensitivity bugs that allowed you to turn more than intended Seismic Impact now allows for some very minor movement to help nudge around small objects Bebop Sticky Bomb growth increased from 2.5% to 4% per stack Sticky Bomb now loses 2 stacks on death Sticky Bomb now has 15 max stacks Hook range increased from 25m to 30m Hook now also hits enemy troopers, killing them instantly Fixed some cases where Hook would grab players from around corners Hyper Beam movement slow reduced from 30% to 25% Hyper Beam duration no longer scales with Spirit Power Hyper Beam duration increased from 8s to 10s Uppercut now applies a 15% Fire Rate slow in the landing radius for 5s. Scales with Spirit Power (0.2) Dynamo Quantum Entanglement cooldown increased from 12.5s to 15s Quantum Entanglement T3 now also also reduces cooldown by 4s Fixed Kinetic Pulse T2 tooltip to clarify that it affects bullets only and not melee damage Grey Talon Arrow cycle time increased from 0.45s to 0.55s (overall dps unchanged) Fixed Rain of Arrows alternate cast causing you to hit the ground soon after cast Fixed Guided Owl colliding with nearby objects during cast Fire Rate no longer scales with Spirit Power Base bullet damage now scales with Spirit Power (0.1) Guided Owl 3s grace period for kill increased to 4s Fixed Guided Owl grace period still requiring that he gets the kill, rather than the target just die Movespeed no longer scales with Spirit Power Base stamina increased from 3 to 4 Haze Fixation max stacks increased from 30 to 40 Fixation T3 reduced from +0.2 to +0.15 Bullet Dance no longer grants +15% Fire Rate Bullet Dance base ability now grants 2 Targets Hit Per Shot Bullet Dance base ability no longer grants +25% Evasion Bullet Dance T3 now grants +40% Evasion and +2 Bullet Dance Speed Infernus Catalyst Damage Amp reduced from 25% to 20% Catalyst T3 Damage Amp increased from 15% to 20% Ivy Improved default camera position Take Flight control keys are now similar to Vindicta's Fixed some issues with control on Take Flight when near a wall Lady Geist Fixed a bug that could cause some units to take more damage than intended with Essence Bomb when multiple targets are hit Life Drain can now be alternate-casted on allied heroes Added double tap accidental protection for Life Drain to help against instant cancellations Malice slow duration reduced from 6s to 4s Malice amp duration reduced from 16s to 13s You can now see how many Malice stacks you have on you as the opponent Lash Base bullet damage reduced from 10 to 9 Flog Heal vs heroes reduced from 80% to 70% Flog Heal vs creeps reduced from 30% to 25% McGinnis No longer has +25% Spirit Resist Now has +15% Bullet Resist Mini Turrets T1 no longer grants +1 charge Mini Turrets duration reduced from 30s to 24s Mini Turrets cooldown reduced from 30s to 24s Mini Turrets health scaling reduced from 30% to 20% Mini Turrets recharge time reduced from 5s to 3s Mini Turrets cast range increased from 15m to 20m Mini Turret damage reduction against troopers/neutrals increased from -40% to -50% Mini Turret damage reduction against objectives increased from -60% to -70% Fixed Ricochet not bouncing off of Mini Turrets Mini Turret spawn time reduced from 1s to 0.25s Mini Turret attack delay reduced from 0.35s to 0.2s Heavy Barrage radius increased from 4.5m to 5m Mirage Tornado now uses a range for its travel distance instead of a travel duration (scales with range increase) Enemies that have already been hit by Fire Scarabs now let the next scarab projectile pass through them Djinn's Mark base damage reduced from 16 to 12 Djinn's Mark scaling from spirit power increased from 0.4 to 0.55 Djinn's Mark reveal duration increased from 2s to 3s Traveler now causes your camera to move to the destination during the channel Traveler T1 is now \"+2 m/s\" (was -20s cd) Traveler T2 is now \"-30s cd\" (was +2 m/s) Traveler T3 fire rate increased from 20% to 30% Mo & Krill Combo T1 now grants +30% Bullet Resist While Channeling (no longer grants -28s CD) Combo cooldown reduced from 95s to 75s Paradox Bullet growth per boon increased from 0.33 to 0.45 Time Wall bullet duration reduced from 1s to 0.7s Fixed Time Wall not being spawned when looking down while casting Paradoxical Swap cooldown increased from 48s to 65s Paradoxical Swap range reduced from 30m to 25m Paradoxical Swap T1 now reduces cooldown by 15s Paradoxical Swap T3 now increases range by 20m Pulse Grenade radius reduced from 7m to 6m Pulse Grenade Damage Amp per Stack increased from 5% to 6% Pulse Grenade T3 no longer increases Damage Amp by 2% Pulse Grenade T3 now also increases the radius by 1m per pulse Pocket Shotgun falloff start reduced from 22m to 16m Enchanter's Satchel damage now respects line of sight Enchanter's Satchel now shows an aoe indicator for Pocket while channeling Affliction DPS Spirit Power scaling reduced from 0.4 to 0.34 Barrage radius reduced from 6.5m to 4.5m Barrage T3 now also increases radius by 2m Seven Base regen increased from 1.5 to 3 Movespeed scaling with Spirit Power reduced from 0.028 to 0.02 Lightning Ball T3 increased from +1m to +2m Shiv Slice and Dice Spirit damage scaling increased from 1.2 to 1.3 Slice and Dice T1 improved from -3.75s to -4s Rage decay rate reduced from 0.35 to 0.25 Rage buffer duration increased from 7s to 12s (how long it stays before starting to decay) Vindicta Reverted recent falloff damage changes Fall off increased from 58m (default) to 64m Bullet damage growth per boon reduced from 0.79 to 0.55 Flight duration no longer scales with Spirit Power Flight T2 now increases flight duration by 6s Flight bonus move speed above base now scales at 50% effectiveness No longer has -10% base bullet resist Health growth per boon reduced from 20 to 15 Gun cycle time increased from 0.22 to 0.26 (dps rescaled to remain the same, after the above changes are calculated in) Stake duration reduced from 2s to 1.75s Assassinate bonus souls is now unsecured Shooting while flying now has similar speed impact as on the ground Flight air acceleration decreased a little Crow Familiar % damage no longer affects Mid Boss Viscous Goo Ball no longer triggers on hit effect while in Ethereal Shift Fixed Superior Stamina dash count not working with Goo Ball Goo Ball stun duration reduced from 1s to 0.7s Splatter base damage reduced from 100 to 90 Splatter T2 reduced from +70 to +60 Splatter Spirit damage scale increased from 1.5 to 1.9 Fixed Instant Cast not working for Puddle Punch Warden Alchemical Flask cooldown reduced from 14s to 12s Alchemical Flask damage increased from 55 to 65 Alchemical Flask T1 is now +1 Stamina Reduction Alchemical Flask T2 is now +50 Damage Last Stand channel duration reduced from 2.2s to 2s Last Stand range increased from 12m to 13m Wraith Card Trick spirit scale reduced from 1.2 to 1.1 Card Trick generation via melee reduced by 50% Yamato Power Slash cooldown increased from 8.5s to 10.5s Power Slash T2 now also reduces cooldown by 2s Shadow Transformation no longer grants you bullet and spirit resist Shadow Transformation duration reduced from 4.5s to 4s Monster Rounds Weapon Damage vs NPCs reduced from 35% to 30% Restorative Shot Weapon Damage reduced from 8% to 7% Melee Charge Cooldown increased from 10.5s to 16s Long Range Ammo increase from 20% to 25% Tesla Bullets Spirit scaling increased from 0.13 to 0.16 Alchemical Fire Now behaves like other grenades and does not bounce off walls Base DPS increased from 45 to 55 Toxic Bullets Buildup is now 15% slower Frenzy Low HP threshold increased from 40% to 50% Ricochet Range reduced from 14m to 11m Silencer Spirit Power increased from 12 to 18 Vampiric Burst Added ammo on active increased from +50% to +75% Cooldown reduced from 37s to 34s Spiritual Overflow No longer grants +20% Fire Rate Upon full build-up, grants +35% Fire Rate Activated Spirit Power increased from +45 to +50 Healing Rite Regen duration increased from 17s to 19s (same total heal) Extra Regen Regen increased from 2.8 to 3 Ammo increased from 8% to 10% Extra Stamina Stamina Recovery increased from 14% to 16% Fire Rate reduced from 7% to 6% Now gives +25 Health Extra Health Weapon Damage increased from 5% to 6% Enduring Speed Movespeed bonus reduced from 1.4 to 1.1 (all heroes movement speed increased by 0.3) Slow resist reduced from 40% to 35% Restorative Locket Spirit Resist increased from 8% to 10% Now grants +1 Sprint Return Fire Cooldown increased from 25s to 30s Active bullet resist reduced from 25% to 20% Fortitude Health increased from +300 to +325 Lifestrike Heal increased from 55% of melee damage to 65% Veil Walker Speed increased from 3 to 4 Majestic Leap Cooldown increased from 23s to 26s Rescue Beam Cast range reduced from 36m to 32m Leech Weapon Damage increase from +15% to +20% Spirit Power increased from +12 to +18 Siphon Bullets HP Steal Per Bullet increased from 45 to 50 Extra Spirit Spirit Power increased from 9 to 10 Ammo Scavenger Spirit Power Per Soul reduced from 2 to 1 Max Stacks increased from 10 to 20 Cold Front Cooldown reduced from 34s to 28s Mystic Vulnerability Fixed it stacking with Escalating Exposure Slowing Hex Slow reduced from 30% to 25% Improved Spirit Spirit Power increased from +23 to +28 Knockdown Cooldown reduced from 48s to 40s Ethereal Shift Can no longer end it early Torment Pulse Pulse interval is now fixed and does not get reduced with cooldown reduction Superior Cooldown Now grants +100 Spirit Shield Escalating Exposure Spirit Resist On Damage reduced from -15% to -12% Amp Per Stack reduced from 6% to 5% Duration reduced from 15s to 12s Refresher Cooldown increased from 212s to 230s Mystic Reverb Slow reduced from 50% to 40%",
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-10-08',
			to: '2024-10-10'
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
		title: 'Shoulder Charge',
		id: 'shoulder-charge'
	},
	{
		level: 3,
		title: 'Seismic Impact',
		id: 'seismic-impact'
	},
	{
		level: 2,
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Sticky Bomb',
		id: 'sticky-bomb'
	},
	{
		level: 3,
		title: 'Hook',
		id: 'hook'
	},
	{
		level: 3,
		title: 'Grapple Arm',
		id: 'grapple-arm'
	},
	{
		level: 3,
		title: 'Hyper Beam',
		id: 'hyper-beam'
	},
	{
		level: 3,
		title: 'Uppercut',
		id: 'uppercut'
	},
	{
		level: 2,
		title: 'Dynamo',
		id: 'dynamo'
	},
	{
		level: 3,
		title: 'Quantum Entanglement',
		id: 'quantum-entanglement'
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
		title: 'Rain of Arrows',
		id: 'rain-of-arrows'
	},
	{
		level: 3,
		title: 'Guided Owl',
		id: 'guided-owl'
	},
	{
		level: 3,
		title: 'Guided Owl',
		id: 'guided-owl-1'
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
		title: 'Catalyst Damage Amp',
		id: 'catalyst-damage-amp'
	},
	{
		level: 3,
		title: 'Catalyst',
		id: 'catalyst'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
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
		title: 'Malice',
		id: 'malice'
	},
	{
		level: 2,
		title: 'Lash',
		id: 'lash'
	},
	{
		level: 3,
		title: 'Flog',
		id: 'flog'
	},
	{
		level: 2,
		title: 'McGinnis',
		id: 'mcginnis'
	},
	{
		level: 3,
		title: 'Mini Turrets',
		id: 'mini-turrets'
	},
	{
		level: 3,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 3,
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 2,
		title: 'Mirage',
		id: 'mirage'
	},
	{
		level: 3,
		title: 'Tornado',
		id: 'tornado'
	},
	{
		level: 3,
		title: 'Fire Scarabs',
		id: 'fire-scarabs'
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
		title: 'Paradoxical Swap',
		id: 'paradoxical-swap'
	},
	{
		level: 3,
		title: 'Pulse Grenade',
		id: 'pulse-grenade'
	},
	{
		level: 2,
		title: 'Pocket',
		id: 'pocket'
	},
	{
		level: 3,
		title: "Enchanter's Satchel",
		id: 'enchanter-s-satchel'
	},
	{
		level: 3,
		title: 'Affliction DPS Spirit Power',
		id: 'affliction-dps-spirit-power'
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
		title: 'Stake',
		id: 'stake'
	},
	{
		level: 3,
		title: 'Assassinate',
		id: 'assassinate'
	},
	{
		level: 3,
		title: 'Flight',
		id: 'flight-1'
	},
	{
		level: 3,
		title: 'Crow Familiar',
		id: 'crow-familiar'
	},
	{
		level: 2,
		title: 'Viscous',
		id: 'viscous'
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
		level: 3,
		title: 'Splatter Spirit',
		id: 'splatter-spirit'
	},
	{
		level: 3,
		title: 'Puddle Punch',
		id: 'puddle-punch'
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
		title: 'Alchemical Fire',
		id: 'alchemical-fire'
	},
	{
		level: 2,
		title: 'Ammo Scavenger',
		id: 'ammo-scavenger'
	},
	{
		level: 2,
		title: 'Cold Front',
		id: 'cold-front'
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
		title: 'Ethereal Shift',
		id: 'ethereal-shift'
	},
	{
		level: 2,
		title: 'Extra Health',
		id: 'extra-health'
	},
	{
		level: 2,
		title: 'Extra Regen',
		id: 'extra-regen'
	},
	{
		level: 2,
		title: 'Extra Spirit',
		id: 'extra-spirit'
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
		title: 'Healing Rite',
		id: 'healing-rite'
	},
	{
		level: 2,
		title: 'Improved Spirit',
		id: 'improved-spirit'
	},
	{
		level: 2,
		title: 'Knockdown',
		id: 'knockdown'
	},
	{
		level: 2,
		title: 'Leech',
		id: 'leech'
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
		title: 'Monster Rounds',
		id: 'monster-rounds'
	},
	{
		level: 2,
		title: 'Mystic Reverb',
		id: 'mystic-reverb'
	},
	{
		level: 2,
		title: 'Mystic Vulnerability',
		id: 'mystic-vulnerability'
	},
	{
		level: 2,
		title: 'Refresher',
		id: 'refresher'
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
		title: 'Ricochet',
		id: 'ricochet'
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
		title: 'Slowing Hex',
		id: 'slowing-hex'
	},
	{
		level: 2,
		title: 'Spiritual Overflow',
		id: 'spiritual-overflow'
	},
	{
		level: 2,
		title: 'Superior Cooldown',
		id: 'superior-cooldown'
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
		title: 'Vampiric Burst',
		id: 'vampiric-burst'
	},
	{
		level: 2,
		title: 'Veil Walker',
		id: 'veil-walker'
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-10-08',
			to: '2024-10-10'
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
			name: 'Alchemical Fire',
			id: 'alchemical-fire'
		},
		{
			kind: 'item',
			name: 'Ammo Scavenger',
			id: 'ammo-scavenger'
		},
		{
			kind: 'item',
			name: 'Cold Front',
			id: 'cold-front'
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
			name: 'Ethereal Shift',
			id: 'ethereal-shift'
		},
		{
			kind: 'item',
			name: 'Extra Health',
			id: 'extra-health'
		},
		{
			kind: 'item',
			name: 'Extra Regen',
			id: 'extra-regen'
		},
		{
			kind: 'item',
			name: 'Extra Spirit',
			id: 'extra-spirit'
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
			name: 'Healing Rite',
			id: 'healing-rite'
		},
		{
			kind: 'item',
			name: 'Improved Spirit',
			id: 'improved-spirit'
		},
		{
			kind: 'item',
			name: 'Knockdown',
			id: 'knockdown'
		},
		{
			kind: 'item',
			name: 'Leech',
			id: 'leech'
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
			name: 'Monster Rounds',
			id: 'monster-rounds'
		},
		{
			kind: 'item',
			name: 'Mystic Reverb',
			id: 'mystic-reverb'
		},
		{
			kind: 'item',
			name: 'Mystic Vulnerability',
			id: 'mystic-vulnerability'
		},
		{
			kind: 'item',
			name: 'Refresher',
			id: 'refresher'
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
			name: 'Ricochet',
			id: 'ricochet'
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
			name: 'Slowing Hex',
			id: 'slowing-hex'
		},
		{
			kind: 'item',
			name: 'Spiritual Overflow',
			id: 'spiritual-overflow'
		},
		{
			kind: 'item',
			name: 'Superior Cooldown',
			id: 'superior-cooldown'
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
			name: 'Vampiric Burst',
			id: 'vampiric-burst'
		},
		{
			kind: 'item',
			name: 'Veil Walker',
			id: 'veil-walker'
		}
	],
	related: []
};
function _0_10_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added Ranked mode</li><li>Added a 3rd casting mode, Quick Cast (shows range/radius/etc on key down, then on key up acts like Instant Cast). The three casting modes are now Instant Cast, Quick Cast, and Confirm Cast.</li></ul>\n')} `
	);
	_0_10_mg$4($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Added input buffering for ability usage (so if you cast an ability and then quickly cast another ability during its cast time, the next one will fire instead of the input being dropped)</li></ul>\n')} `
	);
	_0_10_mg$3($$renderer, {});
	$$renderer.push(
		`<!----> ${html('<ul><li>Now displaying a unique ID for builds in the description section of the build browser.  You can click on it to copy the Build ID to the clipboard to share specific builds with friends.</li><li>If you enter a Build ID in the search box of the build browser, it will show all of the builds for the current hero by the author of that build.</li><li>For private lobbies, added the ability to swap players on both teams with a button press. In addition players can be randomly shuffled across the two teams, and if lanes are being assigned, can be shuffled within the teams.</li><li>Added &quot;Allow Duplicate Heroes&quot; setting in Private Lobbies</li><li>Certain heroes now have a higher priority at being in dual lanes (Ivy and Dynamo atm)</li><li>Added per-player voice volume slider (accessible by clicking on a player via the ESC menu)</li><li>Pausing is no longer allowed in the first three minutes of the game</li><li>Added Thai and Indonesian localization</li><li>Replaced the temp Yamato VO with a new translation spoken by a native actress</li><li>Added Stomp AoE range indication as the Walker is about to use the ability</li><li>Updated the way status effects are shown above the healthbar</li><li>Fixed troopers being unreliable to shoot while on the zipline</li><li>Fixed an Unsecured Souls bug where it gave extra bounty directly to the dying hero carrying unsecured souls</li><li>Fixed AFK kick detection not working properly</li><li>Added Crit Bonus Scale tooltip to the Weapon stats in the shop</li><li>Fixed ESC key not working on the private lobbies page</li><li>Fixed respawn music not playing while spectating another player</li><li>Fixed a bug where the bot that would pick up the Urn was not the closest one, just the one that was in the highest player slot</li><li>Fixed Streamer mode not persisting between game relaunches</li><li>Keybinds in settings now selects the hero you&#x27;re playing when you navigate to the Keybinds tab</li><li>Rescue beam now shows heal indicator if you heal someone with it</li><li>Fixed Debuff Reducer causing Teleporters to be faster</li><li>Steam notifications moved to the top-left from the bottom-right, to avoid minimap overlap</li><li>Continue to have mouse look enabled while M3 is pressed but before the ping wheel shows up</li><li>Enabled Middle Mouse for &quot;pinging&quot; minimap</li><li>Enabled the ability to middle mouse click players on the top bar</li><li>Fixed Shiv&#x27;s Killing Blow sometimes sending him into orbit</li><li>Fixed Shiv&#x27;s Killing Blow continuing to do damage while being teleported by Quantum Entanglement</li><li>Fixed Quantum Entanglement&#x27;s camera position anims not being smooth</li><li>Yamato&#x27;s Flying Strike now also cancels when the target is out of world (like with Quantum Entanglement)</li><li>Fixed Pausing not working when using hero specific key binds</li><li>Lash&#x27;s Death Slam now has clearer visual states to indicate when someone is successfully locked in</li><li>Fixed some cases where Grey Talon&#x27;s trap effects would be stuck in the world</li><li>Updated ground strike preview cone to have a little more information on shape &amp; outer bounds</li><li>Abandon Match is now only an available option once you have disconnected from the game server. Bringing up the menu while connected to a game now gives you the option to Disconnect rather than Abandon immediately</li><li>Fixed issues with Bots not using ziplines properly</li><li>Added Return Fire proc sound</li><li>Added Metal Skin proc sound</li><li>Updated McGinnis Heavy Barrage sound</li><li>Added Guardian and Walker death notification sound for all players</li><li>Improved panning resolution of bullet whizby sounds and shortened the max play distance to the local player</li><li>Fixed hero death UI sound playing inconsistently</li><li>Added bullet evasion sound effects</li><li>Updated Kelvin weapon fire audio</li><li>Updated Infernus weapon fire audio</li><li>Improved clarity for hero roster selection VO</li><li>Walker laser animation updated slightly, raising the forearms to better reveal the eye socket weakpoint to players on the ground</li><li>Re-enabled weapon-specific reload sounds</li><li>Abrams Life Siphon fades to 50% opacity after initial start to improve visibility</li><li>Added Healing Rite cast sound</li><li>Added Rescue Beam heal and pull loop sounds</li><li>Added Health Nova cast sound</li><li>Added Return Fire cast sound</li><li>Revised Metal Skin cast sound</li><li>Added Colossus cast and loop sounds</li><li>Added echo to Echo Shard cast sound</li><li>Added Silence Glyph cast and hit sounds</li><li>Added Ammo Scavenger proc sound</li><li>Added Restorative Shot proc sound</li><li>Added Toxic Bullets proc variations</li><li>Added a distance fade to Soul Shredder debuff effect and tweaked colors to reduce visual noise</li><li>Improved visibility on Spiritual Overflow effects when heroes are airborne</li><li>Reworked visual effects for puddle punch</li><li>Updated &quot;getting started&quot; VO for the ability points tab to match the text</li><li>Fixed a bunch of bugs that were impacting how VO was playing in a match.  Now a bunch of hero VO that was previously getting squashed/cut off should play properly (for instance certain lines where allies commented on ability usage, the patrons giving compliments for assists/team healing, etc).</li><li>The patron once again will warn you when your Walkers are under attack</li><li>The patron now will sometimes offer words of encouragement when you level up instead of when you destroy a Guardian or Walker</li><li>Increased the time you need to carry the urn before the urn nags about not being delivered</li><li>Fixed more instances of the wrong name for a hero being called out</li><li>If you&#x27;re Dynamo or Krill, you can now ping during your ult to alert your allies</li><li>Mirage still loves the Djinn, but he yells about them less frequently</li><li>Added new custom charge and light melee and parry animations for Bebop</li><li>Added improvements for meleeing while using Siphon Life (book now floats and hand makes a fist)</li><li>Updated Grey Talon root effect for trap</li><li>Updated Grey Talon updated firing, projectile, impact effects</li><li>Updated Rain of Arrows effects</li><li>New heavy melee anims added to Mo &amp; Krill and Ivy</li><li>Adjusted Trooper tracer and muzzle effects for better alignment and lower visual noise</li><li>Adjusted Lady Geist Life Drain to lower visual obstruction but increase awareness when it first latches</li><li>Inferno Catalyst effect revisions to help show range better</li><li>Trooper death effects resolve quicker and more cleanly</li><li>Mirage Djinn&#x27;s Mark effects revisions to reduce noise on the victim and appear more clearly for Mirage</li><li>Soul jar effect carry and dropoff revisions to reduce visual noise for carrier</li><li>New Imports Building</li><li>New Taxi Stand building</li><li>Replaced old retaining wall</li><li>Replaced block-in park bridges</li><li>Troopers attack range vs Lane Guardians reduced from 13.5m to 12m (they get closer to it)</li><li>Players now need to be within 19m (above the ramp) to attack a Lane Guardian</li><li>Guardians now take 70% less damage from troopers at the start of the game; this reduces by 10% per minute (max at +30% increased damage at 10 min)</li><li>Guardian damage vs players increased by 20%</li><li>Medium Camps spawn time changed from 7 min to 5 min</li><li>Hard Camps spawn time changed from 7 min to 8 min</li><li>Teleporters open time changed from 10 min to 8 min</li><li>Trooper spawn/bounty lane end time changed from 10 min to 8 min</li><li>Vaults spawn time/interval changed from 10/5 to 8/4</li><li>Golden Statues and Breakables spawn time changed from 3 min to 2 min</li><li>Golden Statues bonuses upgrade time changed from 15 min to 10 min</li><li>Golden Statue Health buff increased from 15/20 to 20/30</li><li>Golden Statues now have a tier 3 upgrade at 25 minutes (+2.5% Fire Rate, +8% Ammo, 1.5% CD Reduction, +7% Weapon Damage, 40 Health, +5 Spirit Power)</li><li>Mid Boss now has 15 regen</li><li>Mid Boss creep buff rescaled from 70% to 50/70/90% for the 1/2/3rd mid boss death (further deaths don&#x27;t increase)</li><li>Mid Boss rejuv respawn rescaled from 50% to 40/50/60% for the 1/2/3rd mid boss death (further deaths don&#x27;t increase)</li><li>Urn now causes the runner to be revealed on the minimap</li><li>Heavy Melee against the urn runner now causes them to drop the urn</li><li>Urn delivery now gives each player on your team a Golden Statue permanent buff</li><li>Urn bounty increased by 15%</li><li>Urn now falls down from the sky a little bit faster</li><li>Comeback formula weighted a bit less on team vs team net worth calculation and more on the strength of the dying hero (regardless of lead)</li><li>Percentage of deniable orbs from objectives for Guardian/Walker/Patron/Shrines rescaled from 54.55/66.67/100/0% to 35%</li><li>Shields no longer reduce damage or get depleted by NPC units (Troopers, Bosses etc, but still takes damage from player summoned units)</li><li>All heroes&#x27; movespeed increased by 0.3 (Enduring Speed reduced by 0.3)</li><li>Bullet and Spirit Lifesteal now stack diminishingly</li><li>Teleporters now grant +3 m/s for 5s after arriving at the other side</li><li>Updated teleporter locations</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/23/23115-6351c66f805cedd1dd63428bfd258de2.jpg?hash=LFr8AwcJ9D" alt="teleporters map"  decoding="async" loading="eager"/></p>\n<ul><li>Moved teleporters to travel between outer lane Walkers</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/23/23114-140801732d6f661891f71451f40a2f01.jpg?hash=S5uNgU90Du" alt="teleporter walkers"  decoding="async" loading="lazy"/></p>\n<ul><li>Added teleporters in the underground tunnels</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/23/23111-d4918f22661c976f90f76458cab51888.jpg?hash=wyFimvcxZR" alt="teleporter underground"  decoding="async" loading="lazy"/></p>\n<ul><li>Changed underground teleporters to go between Subway and Tunnel on the same side of the map</li><li>Widened stairs from Shrines back to the player spawn area</li><li>Added ledge to mantle back up to the player spawn area from the pit</li><li>Added bridge and stair to the upper level of the Subway Entrance building from the outer lane Walker arenas</li><li>Added upper level connection through the Subway Entrance building</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/23/23119-3c37b9c2a5165ddd441507e62f9d3beb.jpg?hash=3MJGJRS_zb" alt="outer lane 01"  decoding="async" loading="lazy"/></p>\n<ul><li>Moved Guardians back slightly further from stairs down to the canal</li><li>Widened channels surrounding Mid Temple slightly</li><li>Widened archways between Mid Temple channels</li></ul>\n<p><img src="https://project8-data.community.forum/attachments/23/23120-8103145c268db3ec157f9f2e5b7cf9a0.jpg?hash=IJMzjSZvpH" alt="mid channel 01"  decoding="async" loading="lazy"/></p>\n<ul><li>Garage and Night Club: Changed ropes so that they take you to the second floor and added back stairs to take you to the roof</li><li>Basic Magazine: Ammo increased from 24% to 26%</li><li>Health Nova: Spirit Power increased from +4 to +6</li><li>Combat Barrier: Weapon Damage reduced from 25% to 22%</li><li>Superior Stamina: Stamina Recovery increased from 20% to 25%</li><li>Withering Whip: No longer grants +50 Health</li><li>Withering Whip: Now grants +100 Bullet Shield</li><li>Withering Whip: Cooldown reduced from 26s to 22s</li><li>Improved Burst: Max Health damage reduced from 9% to 7%</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_0_10_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Base health reduced from 600 to 570</li><li>Health per boon increased from 32 to 34 (1048 vs 1046 total)</li></ul>\n')} <div class="ability shoulder-charge">${html('\n<p><a href="/ability/shoulder-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shoulder Charge change history</a></p>\n<h4 id="shoulder-charge"><a href="/ability/shoulder-charge">Shoulder Charge</a></h4>\n<ul><li>Fixed shoulder charge sensitivity bugs that allowed you to turn more than intended</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Shoulder Charge'
	});
	$$renderer.push(
		`<!----></div> <div class="ability seismic-impact">${html('\n<p><a href="/ability/seismic-impact"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Seismic Impact change history</a></p>\n<h4 id="seismic-impact"><a href="/ability/seismic-impact">Seismic Impact</a></h4>\n<ul><li>Seismic Impact now allows for some very minor movement to help nudge around small objects</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Seismic Impact'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability sticky-bomb">${html('\n<p><a href="/ability/sticky-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sticky Bomb change history</a></p>\n<h4 id="sticky-bomb"><a href="/ability/sticky-bomb">Sticky Bomb</a></h4>\n<ul><li>Sticky Bomb growth increased from 2.5% to 4% per stack</li><li>Sticky Bomb now loses 2 stacks on death</li><li>Sticky Bomb now has 15 max stacks</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Sticky Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hook">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hook change history</a></p>\n<h4 id="hook"><a href="/ability/grapple-arm">Hook</a></h4>\n<ul><li>Hook range increased from 25m to 30m</li><li>Hook now also hits enemy troopers, killing them instantly</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div> <div class="ability grapple-arm">${html('\n<p><a href="/ability/grapple-arm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Grapple Arm change history</a></p>\n<h4 id="grapple-arm"><a href="/ability/grapple-arm">Grapple Arm</a></h4>\n<ul><li>Fixed some cases where Hook would grab players from around corners</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Grapple Arm'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hyper-beam">${html('\n<p><a href="/ability/hyper-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Hyper Beam change history</a></p>\n<h4 id="hyper-beam"><a href="/ability/hyper-beam">Hyper Beam</a></h4>\n<ul><li>Hyper Beam movement slow reduced from 30% to 25%</li><li>Hyper Beam duration no longer scales with Spirit Power</li><li>Hyper Beam duration increased from 8s to 10s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hyper Beam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability uppercut">${html('\n<p><a href="/ability/exploding-uppercut"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Uppercut change history</a></p>\n<h4 id="uppercut"><a href="/ability/exploding-uppercut">Uppercut</a></h4>\n<ul><li>Uppercut now applies a 15% Fire Rate slow in the landing radius for 5s. Scales with Spirit Power (0.2)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Uppercut'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n')} <ul><li>${html('Quantum Entanglement cooldown increased from 12.5s to 15s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Quantum Entanglement cooldown increased from 12.5s to 15s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Quantum Entanglement T3 now also also reduces cooldown by 4s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Fixed Kinetic Pulse T2 tooltip to clarify that it affects bullets only and not melee damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n<ul><li>Arrow cycle time increased from 0.45s to 0.55s (overall dps unchanged)</li></ul>\n')} <div class="ability rain-of-arrows">${html('\n<p><a href="/ability/rain-of-arrows"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rain of Arrows change history</a></p>\n<h4 id="rain-of-arrows"><a href="/ability/rain-of-arrows">Rain of Arrows</a></h4>\n<ul><li>Fixed Rain of Arrows alternate cast causing you to hit the ground soon after cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Rain of Arrows'
	});
	$$renderer.push(
		`<!----></div> <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl"><a href="/ability/guided-owl">Guided Owl</a></h4>\n<ul><li>Fixed Guided Owl colliding with nearby objects during cast</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Fire Rate no longer scales with Spirit Power</li><li>Base bullet damage now scales with Spirit Power (0.1)</li></ul>\n')} <div class="ability guided-owl">${html('\n<p><a href="/ability/guided-owl"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Guided Owl change history</a></p>\n<h4 id="guided-owl-1"><a href="/ability/guided-owl">Guided Owl</a></h4>\n<ul><li>Guided Owl 3s grace period for kill increased to 4s</li><li>Fixed Guided Owl grace period still requiring that he gets the kill, rather than the target just die</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Guided Owl'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Movespeed no longer scales with Spirit Power</li><li>Base stamina increased from 3 to 4</li></ul>\n')}</div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability fixation">${html('\n<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>\n<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>\n<ul><li>Fixation max stacks increased from 30 to 40</li><li>Fixation T3 reduced from +0.2 to +0.15</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Fixation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n<ul><li>Bullet Dance no longer grants +15% Fire Rate</li><li>Bullet Dance base ability now grants 2 Targets Hit Per Shot</li><li>Bullet Dance base ability no longer grants +25% Evasion</li><li>Bullet Dance T3 now grants +40% Evasion and +2 Bullet Dance Speed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability catalyst-damage-amp">${html('\n<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Catalyst Damage Amp change history</a></p>\n<h4 id="catalyst-damage-amp"><a href="/ability/napalm">Catalyst Damage Amp</a></h4>\n<ul><li>Catalyst Damage Amp reduced from 25% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Catalyst Damage Amp'
	});
	$$renderer.push(
		`<!----></div> <div class="ability catalyst">${html('\n<p><a href="/ability/napalm"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Catalyst change history</a></p>\n<h4 id="catalyst"><a href="/ability/napalm">Catalyst</a></h4>\n<ul><li>Catalyst T3 Damage Amp increased from 15% to 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Catalyst'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<div class="hero ivy">\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Improved default camera position</li><li>Take Flight control keys are now similar to Vindicta&#x27;s</li><li>Fixed some issues with control on Take Flight when near a wall</li></ul>\n</div>\n')} <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability essence-bomb">${html('\n<p><a href="/ability/essence-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Essence Bomb change history</a></p>\n<h4 id="essence-bomb"><a href="/ability/essence-bomb">Essence Bomb</a></h4>\n<ul><li>Fixed a bug that could cause some units to take more damage than intended with Essence Bomb when multiple targets are hit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Essence Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability life-drain">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>\n<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>\n<ul><li>Life Drain can now be alternate-casted on allied heroes</li><li>Added double tap accidental protection for Life Drain to help against instant cancellations</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain'
	});
	$$renderer.push(
		`<!----></div> <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Malice slow duration reduced from 6s to 4s</li><li>Malice amp duration reduced from 16s to 13s</li><li>You can now see how many Malice stacks you have on you as the opponent</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n<ul><li>Base bullet damage reduced from 10 to 9</li></ul>\n')} <div class="ability flog">${html('\n<p><a href="/ability/flog"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flog change history</a></p>\n<h4 id="flog"><a href="/ability/flog">Flog</a></h4>\n<ul><li>Flog Heal vs heroes reduced from 80% to 70%</li><li>Flog Heal vs creeps reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Flog'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n<ul><li>No longer has +25% Spirit Resist</li><li>Now has +15% Bullet Resist</li></ul>\n')} <div class="ability mini-turrets">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turrets change history</a></p>\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n')} <ul><li>${html('Mini Turrets T1 no longer grants +1 charge')}</li> <li>${html('Mini Turrets duration reduced from 30s to 24s')}</li> <li>${html('Mini Turrets cooldown reduced from 30s to 24s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 1,
		bulletIndex: 2,
		text: 'Mini Turrets cooldown reduced from 30s to 24s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Mini Turrets health scaling reduced from 30% to 20%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Mini Turrets recharge time reduced from 5s to 3s</li><li>Mini Turrets cast range increased from 15m to 20m</li><li>Mini Turret damage reduction against troopers/neutrals increased from -40% to -50%</li><li>Mini Turret damage reduction against objectives increased from -60% to -70%</li><li>Fixed Ricochet not bouncing off of Mini Turrets</li><li>Mini Turret spawn time reduced from 1s to 0.25s</li><li>Mini Turret attack delay reduced from 0.35s to 0.2s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability heavy-barrage">${html('\n<p><a href="/ability/heavy-barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Heavy Barrage change history</a></p>\n<h4 id="heavy-barrage"><a href="/ability/heavy-barrage">Heavy Barrage</a></h4>\n')} <ul><li>${html('Heavy Barrage radius increased from 4.5m to 5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Heavy Barrage radius increased from 4.5m to 5m'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Heavy Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability tornado">${html('\n<p><a href="/ability/dust-devil"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Tornado change history</a></p>\n<h4 id="tornado"><a href="/ability/dust-devil">Tornado</a></h4>\n<ul><li>Tornado now uses a range for its travel distance instead of a travel duration (scales with range increase)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Tornado'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Enemies that have already been hit by Fire Scarabs now let the next scarab projectile pass through them</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability djinn-s-mark">${html('\n<p><a href="/ability/djinns-mark"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Djinn&#x27;s Mark change history</a></p>\n<h4 id="djinn-s-mark"><a href="/ability/djinns-mark">Djinn&#x27;s Mark</a></h4>\n')} <ul><li>${html('Djinn&#x27;s Mark base damage reduced from 16 to 12')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		groupIndex: 2,
		bulletIndex: 0,
		text: "Djinn's Mark base damage reduced from 16 to 12"
	});
	$$renderer.push(
		`<!----></li> <li>${html('Djinn&#x27;s Mark scaling from spirit power increased from 0.4 to 0.55')}</li> <li>${html('Djinn&#x27;s Mark reveal duration increased from 2s to 3s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: "Djinn's Mark"
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>\n<h4 id="traveler"><a href="/ability/traveler">Traveler</a></h4>\n<ul><li>Traveler now causes your camera to move to the destination during the channel</li><li>Traveler T1 is now &quot;+2 m/s&quot; (was -20s cd)</li><li>Traveler T2 is now &quot;-30s cd&quot; (was +2 m/s)</li><li>Traveler T3 fire rate increased from 20% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n')} <ul><li>${html('Combo T1 now grants +30% Bullet Resist While Channeling (no longer grants -28s CD)')}</li> <li>${html('Combo cooldown reduced from 95s to 75s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Combo cooldown reduced from 95s to 75s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n<ul><li>Bullet growth per boon increased from 0.33 to 0.45</li></ul>\n')} <div class="ability time-wall">${html('\n<p><a href="/ability/time-wall"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Time Wall change history</a></p>\n<h4 id="time-wall"><a href="/ability/time-wall">Time Wall</a></h4>\n<ul><li>Time Wall bullet duration reduced from 1s to 0.7s</li><li>Fixed Time Wall not being spawned when looking down while casting</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability paradoxical-swap">${html('\n<p><a href="/ability/paradoxical-swap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Paradoxical Swap change history</a></p>\n<h4 id="paradoxical-swap"><a href="/ability/paradoxical-swap">Paradoxical Swap</a></h4>\n')} <ul><li>${html('Paradoxical Swap cooldown increased from 48s to 65s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Paradoxical Swap cooldown increased from 48s to 65s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Paradoxical Swap range reduced from 30m to 25m')}</li> <li>${html('Paradoxical Swap T1 now reduces cooldown by 15s')}</li> <li>${html('Paradoxical Swap T3 now increases range by 20m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Paradoxical Swap'
	});
	$$renderer.push(
		`<!----></div> <div class="ability pulse-grenade">${html('\n<p><a href="/ability/pulse-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Pulse Grenade change history</a></p>\n<h4 id="pulse-grenade"><a href="/ability/pulse-grenade">Pulse Grenade</a></h4>\n')} <ul><li>${html('Pulse Grenade radius reduced from 7m to 6m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Pulse Grenade radius reduced from 7m to 6m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Pulse Grenade Damage Amp per Stack increased from 5% to 6%')}</li> <li>${html('Pulse Grenade T3 no longer increases Damage Amp by 2%')}</li> <li>${html('Pulse Grenade T3 now also increases the radius by 1m per pulse')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Pulse Grenade'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n<ul><li>Shotgun falloff start reduced from 22m to 16m</li></ul>\n')} <div class="ability enchanter-s-satchel">${html('\n<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>\n<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>\n<ul><li>Enchanter&#x27;s Satchel damage now respects line of sight</li><li>Enchanter&#x27;s Satchel now shows an aoe indicator for Pocket while channeling</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: "Enchanter's Satchel"
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction-dps-spirit-power">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction DPS Spirit Power change history</a></p>\n<h4 id="affliction-dps-spirit-power"><a href="/ability/affliction">Affliction DPS Spirit Power</a></h4>\n<ul><li>Affliction DPS Spirit Power scaling reduced from 0.4 to 0.34</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction DPS Spirit Power'
	});
	$$renderer.push(
		`<!----></div> <div class="ability barrage">${html('\n<p><a href="/ability/barrage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Barrage change history</a></p>\n<h4 id="barrage"><a href="/ability/barrage">Barrage</a></h4>\n')} <ul><li>${html('Barrage radius reduced from 6.5m to 4.5m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Barrage radius reduced from 6.5m to 4.5m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Barrage T3 now also increases radius by 2m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Barrage'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n<ul><li>Base regen increased from 1.5 to 3</li><li>Movespeed scaling with Spirit Power reduced from 0.028 to 0.02</li></ul>\n')} <div class="ability lightning-ball">${html('\n<p><a href="/ability/lightning-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Lightning Ball change history</a></p>\n<h4 id="lightning-ball"><a href="/ability/lightning-ball">Lightning Ball</a></h4>\n<ul><li>Lightning Ball T3 increased from +1m to +2m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Lightning Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability slice-and-dice">${html('\n<p><a href="/ability/slice-and-dice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Slice and Dice change history</a></p>\n<h4 id="slice-and-dice"><a href="/ability/slice-and-dice">Slice and Dice</a></h4>\n<ul><li>Slice and Dice Spirit damage scaling increased from 1.2 to 1.3</li><li>Slice and Dice T1 improved from -3.75s to -4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Slice and Dice'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>Rage decay rate reduced from 0.35 to 0.25</li><li>Rage buffer duration increased from 7s to 12s (how long it stays before starting to decay)</li></ul>\n')}</div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Reverted recent falloff damage changes</li><li>Fall off increased from 58m (default) to 64m</li><li>Bullet damage growth per boon reduced from 0.79 to 0.55</li></ul>\n')} <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Flight duration no longer scales with Spirit Power</li><li>Flight T2 now increases flight duration by 6s</li><li>Flight bonus move speed above base now scales at 50% effectiveness</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> ${html('\n<ul><li>No longer has -10% base bullet resist</li><li>Health growth per boon reduced from 20 to 15</li><li>Gun cycle time increased from 0.22 to 0.26 (dps rescaled to remain the same, after the above changes are calculated in)</li></ul>\n')} <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n<ul><li>Stake duration reduced from 2s to 1.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n<ul><li>Assassinate bonus souls is now unsecured</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div> <div class="ability flight">${html('\n<p><a href="/ability/flight"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flight change history</a></p>\n<h4 id="flight-1"><a href="/ability/flight">Flight</a></h4>\n<ul><li>Shooting while flying now has similar speed impact as on the ground</li><li>Flight air acceleration decreased a little</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Flight'
	});
	$$renderer.push(
		`<!----></div> <div class="ability crow-familiar">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>\n<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>\n<ul><li>Crow Familiar % damage no longer affects Mid Boss</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Goo Ball no longer triggers on hit effect while in Ethereal Shift</li><li>Fixed Superior Stamina dash count not working with Goo Ball</li><li>Goo Ball stun duration reduced from 1s to 0.7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div> <div class="ability splatter">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter change history</a></p>\n<h4 id="splatter"><a href="/ability/splatter">Splatter</a></h4>\n')} <ul><li>${html('Splatter base damage reduced from 100 to 90')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Splatter base damage reduced from 100 to 90'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Splatter T2 reduced from +70 to +60')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter'
	});
	$$renderer.push(
		`<!----></div> <div class="ability splatter-spirit">${html('\n<p><a href="/ability/splatter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Splatter Spirit change history</a></p>\n<h4 id="splatter-spirit"><a href="/ability/splatter">Splatter Spirit</a></h4>\n<ul><li>Splatter Spirit damage scale increased from 1.5 to 1.9</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Splatter Spirit'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Fixed Instant Cast not working for Puddle Punch</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n')} <div class="ability alchemical-flask">${html('\n<p><a href="/ability/alchemical-flask"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Alchemical Flask change history</a></p>\n<h4 id="alchemical-flask"><a href="/ability/alchemical-flask">Alchemical Flask</a></h4>\n')} <ul><li>${html('Alchemical Flask cooldown reduced from 14s to 12s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Alchemical Flask cooldown reduced from 14s to 12s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Alchemical Flask damage increased from 55 to 65')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Warden',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Alchemical Flask damage increased from 55 to 65'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Alchemical Flask T1 is now +1 Stamina Reduction')}</li> <li>${html('Alchemical Flask T2 is now +50 Damage')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Alchemical Flask'
	});
	$$renderer.push(
		`<!----></div> <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand channel duration reduced from 2.2s to 2s</li><li>Last Stand range increased from 12m to 13m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n')} <div class="ability card-trick">${html('\n<p><a href="/ability/card-trick"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Card Trick change history</a></p>\n<h4 id="card-trick"><a href="/ability/card-trick">Card Trick</a></h4>\n<ul><li>Card Trick spirit scale reduced from 1.2 to 1.1</li><li>Card Trick generation via melee reduced by 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Card Trick'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability power-slash">${html('\n<p><a href="/ability/power-slash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Power Slash change history</a></p>\n<h4 id="power-slash"><a href="/ability/power-slash">Power Slash</a></h4>\n')} <ul><li>${html('Power Slash cooldown increased from 8.5s to 10.5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Power Slash cooldown increased from 8.5s to 10.5s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Power Slash T2 now also reduces cooldown by 2s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Power Slash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation no longer grants you bullet and spirit resist</li><li>Shadow Transformation duration reduced from 4.5s to 4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_0_10_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Now behaves like other grenades and does not bounce off walls</li><li>Base DPS increased from 45 to 55</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ammo-scavenger">${html('\n<p><a href="/item/ammo-scavenger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ammo Scavenger patch history</a></p>\n<h3 id="ammo-scavenger"><a href="/item/ammo-scavenger">Ammo Scavenger</a></h3>\n<ul><li>Spirit Power Per Soul reduced from 2 to 1</li><li>Max Stacks increased from 10 to 20</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ammo Scavenger',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item cold-front">${html('\n<p><a href="/item/cold-front"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Cold Front patch history</a></p>\n<h3 id="cold-front"><a href="/item/cold-front">Cold Front</a></h3>\n')} <ul><li>${html('Cooldown reduced from 34s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 34s to 28s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Cold Front',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item enduring-speed">${html('\n<p><a href="/item/enduring-speed"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Enduring Speed patch history</a></p>\n<h3 id="enduring-speed"><a href="/item/enduring-speed">Enduring Speed</a></h3>\n<ul><li>Movespeed bonus reduced from 1.4 to 1.1 (all heroes movement speed increased by 0.3)</li><li>Slow resist reduced from 40% to 35%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Enduring Speed',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item escalating-exposure">${html('\n<p><a href="/item/escalating-exposure"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Escalating Exposure patch history</a></p>\n<h3 id="escalating-exposure"><a href="/item/escalating-exposure">Escalating Exposure</a></h3>\n<ul><li>Spirit Resist On Damage reduced from -15% to -12%</li><li>Amp Per Stack reduced from 6% to 5%</li><li>Duration reduced from 15s to 12s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Escalating Exposure',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n<ul><li>Can no longer end it early</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-health">${html('\n<p><a href="/item/extra-health"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Health patch history</a></p>\n<h3 id="extra-health"><a href="/item/extra-health">Extra Health</a></h3>\n<ul><li>Weapon Damage increased from 5% to 6%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Health',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-regen">${html('\n<p><a href="/item/extra-regen"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Regen patch history</a></p>\n<h3 id="extra-regen"><a href="/item/extra-regen">Extra Regen</a></h3>\n<ul><li>Regen increased from 2.8 to 3</li><li>Ammo increased from 8% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Regen',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-spirit">${html('\n<p><a href="/item/extra-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Spirit patch history</a></p>\n<h3 id="extra-spirit"><a href="/item/extra-spirit">Extra Spirit</a></h3>\n<ul><li>Spirit Power increased from 9 to 10</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-stamina">${html('\n<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>\n<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>\n<ul><li>Stamina Recovery increased from 14% to 16%</li><li>Fire Rate reduced from 7% to 6%</li><li>Now gives +25 Health</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Stamina',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fortitude">${html('\n<p><a href="/item/fortitude"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fortitude patch history</a></p>\n<h3 id="fortitude"><a href="/item/fortitude">Fortitude</a></h3>\n<ul><li>Health increased from +300 to +325</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fortitude',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Low HP threshold increased from 40% to 50%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n<ul><li>Regen duration increased from 17s to 19s (same total heal)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item improved-spirit">${html('\n<p><a href="/item/improved-spirit"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Improved Spirit patch history</a></p>\n<h3 id="improved-spirit"><a href="/item/improved-spirit">Improved Spirit</a></h3>\n<ul><li>Spirit Power increased from +23 to +28</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Improved Spirit',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n')} <ul><li>${html('Cooldown reduced from 48s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 48s to 40s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>Weapon Damage increase from +15% to +20%</li><li>Spirit Power increased from +12 to +18</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lifestrike">${html('\n<p><a href="/item/lifestrike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lifestrike patch history</a></p>\n<h3 id="lifestrike"><a href="/item/lifestrike">Lifestrike</a></h3>\n<ul><li>Heal increased from 55% of melee damage to 65%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lifestrike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item long-range">${html('\n<p><a href="/item/long-range"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Long Range patch history</a></p>\n<h3 id="long-range"><a href="/item/long-range">Long Range</a></h3>\n<ul><li>Ammo increase from 20% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Long Range',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n')} <ul><li>${html('Cooldown increased from 23s to 26s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 23s to 26s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n')} <ul><li>${html('Cooldown increased from 10.5s to 16s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 10.5s to 16s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item monster-rounds">${html('\n<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>\n<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>\n<ul><li>Weapon Damage vs NPCs reduced from 35% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Monster Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n<ul><li>Slow reduced from 50% to 40%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-vulnerability">${html('\n<p><a href="/item/mystic-vulnerability"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Vulnerability patch history</a></p>\n<h3 id="mystic-vulnerability"><a href="/item/mystic-vulnerability">Mystic Vulnerability</a></h3>\n<ul><li>Fixed it stacking with Escalating Exposure</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Vulnerability',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item refresher">${html('\n<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>\n<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>\n')} <ul><li>${html('Cooldown increased from 212s to 230s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Refresher',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 212s to 230s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Refresher',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n<ul><li>Cast range reduced from 36m to 32m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n<ul><li>Spirit Resist increased from 8% to 10%</li><li>Now grants +1 Sprint</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>Weapon Damage reduced from 8% to 7%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item return-fire">${html('\n<p><a href="/item/return-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Return Fire patch history</a></p>\n<h3 id="return-fire"><a href="/item/return-fire">Return Fire</a></h3>\n')} <ul><li>${html('Cooldown increased from 25s to 30s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 25s to 30s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Active bullet resist reduced from 25% to 20%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Return Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ricochet">${html('\n<p><a href="/item/ricochet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ricochet patch history</a></p>\n<h3 id="ricochet"><a href="/item/ricochet">Ricochet</a></h3>\n<ul><li>Range reduced from 14m to 11m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ricochet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Spirit Power increased from 12 to 18</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-bullets">${html('\n<p><a href="/item/siphon-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Siphon Bullets patch history</a></p>\n<h3 id="siphon-bullets"><a href="/item/siphon-bullets">Siphon Bullets</a></h3>\n<ul><li>HP Steal Per Bullet increased from 45 to 50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n<ul><li>Slow reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>No longer grants +20% Fire Rate</li><li>Upon full build-up, grants +35% Fire Rate</li><li>Activated Spirit Power increased from +45 to +50</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item superior-cooldown">${html('\n<p><a href="/item/superior-cooldown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Superior Cooldown patch history</a></p>\n<h3 id="superior-cooldown"><a href="/item/superior-cooldown">Superior Cooldown</a></h3>\n<ul><li>Now grants +100 Spirit Shield</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Superior Cooldown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item tesla-bullets">${html('\n<p><a href="/item/tesla-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Tesla Bullets patch history</a></p>\n<h3 id="tesla-bullets"><a href="/item/tesla-bullets">Tesla Bullets</a></h3>\n<ul><li>Spirit scaling increased from 0.13 to 0.16</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Tesla Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item torment-pulse">${html('\n<p><a href="/item/torment-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Torment Pulse patch history</a></p>\n<h3 id="torment-pulse"><a href="/item/torment-pulse">Torment Pulse</a></h3>\n<ul><li>Pulse interval is now fixed and does not get reduced with cooldown reduction</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Torment Pulse',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Buildup is now 15% slower</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vampiric-burst">${html('\n<p><a href="/item/vampiric-burst"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vampiric Burst patch history</a></p>\n<h3 id="vampiric-burst"><a href="/item/vampiric-burst">Vampiric Burst</a></h3>\n')} <ul><li>${html('Added ammo on active increased from +50% to +75%')}</li> <li>${html('Cooldown reduced from 37s to 34s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown reduced from 37s to 34s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vampiric Burst',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n<ul><li>Speed increased from 3 to 4</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _0_10_mg as default, metadata, readingManifest, toc };
