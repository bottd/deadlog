import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2024/12-06.mg?embed=0
function _2_06_mg$2($$renderer) {
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
			'Kelvin',
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
//#region changelogs/2024/12-06.mg?embed=1
function _2_06_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Active Reload',
			'Alchemical Fire',
			'Arcane Surge',
			'Berserker',
			'Close Quarters',
			'Crippling Headshot',
			'Decay',
			"Diviner's Kevlar",
			'Ethereal Shift',
			'Extra Stamina',
			'Fleetfoot',
			'Frenzy',
			'Headshot Booster',
			'Healing Nova',
			'Healing Rite',
			'Infuser',
			'Knockdown',
			'Leech',
			'Lucky Shot',
			'Magic Carpet',
			'Majestic Leap',
			'Melee Charge',
			'Metal Skin',
			'Monster Rounds',
			'Mystic Reverb',
			'Mystic Slow',
			'Point Blank',
			'Rapid Recharge',
			'Rapid Rounds',
			'Refresher',
			'Rescue Beam',
			'Restorative Locket',
			'Restorative Shot',
			'Shadow Weave',
			'Sharpshooter',
			'Silencer',
			'Slowing Hex',
			'Spiritual Overflow',
			'Suppressor',
			'Surge of Power',
			'Titanic Magazine',
			'Toxic Bullets',
			'Unstoppable',
			'Veil Walker'
		]
	});
}
//#endregion
//#region changelogs/2024/12-06.mg
var metadata = {
	title: '12-06-2024 Update',
	thread_id: '50599',
	steam_gid: '1785321795648842',
	published: '2024-12-06T12:05:10-0800',
	author: 'Yoshi',
	author_image: '/assets/authors/yoshi.webp',
	major_update: false,
	content_text:
		'Added a new hero, Raven, to Hero Labs Added park theming to purple lane Added park backdrop to park side of map Updated tree models to new visual style and added player collision to canopies For each player on the main leaderboard, you can see their top 3 heroes as well as their overall skill rating Moved the post-game survey to the final score screen Added text box field to the post-game survey Muting a player now also silences map drawing, pings, and chatwheel messages Various rendering performance improvements on map assets Added two new setting options "Force English Hero Names" and "Force English Item Names", which will display those values in English regardless of your chosen language Added Toggle Crouch as a new keybind Added a new setting option: "Additional Build Search Language", which lets you select a language to search for when requesting builds in addition to the current display language of the client. Fixed shop search not working in the shop when opened from Resources Revisions to melee parry effect and removal of the parry fail effect to make parries more clear Tweaked falloff range and toned down bass frequencies of hotel music Added Pocket Barrage cast delay sound Updated Pocket Enchanted Satchel cast sound Passive cooldown indicator now shows when the item is off cooldown instead of 1 second before Fixed invulnerable-to-debuff sound effect playing at wrong times Fixed melee damage audio playing despite no damage dealt Fixed rejuv collect sound playing from wrong location in hero sandbox Updated parry cast and parry success sounds Mirage now has custom animations for most of his core movement Fixed being able to wall jump off of the same surface multiple times Fixed the Damage Report UI clipping into the shop in Sandbox mode Fixed shop showing with a broken build tab if you had previously navigated to the hero builds, then opened it from Resources Fixed clicking on minimap not taking you to that location as a spectator Fade rooftop antenna ambient effects so that they are not visible at a distance Visual revisions to Quantum entanglement effect Reverted recent updates to Shiv run animations Increased volume and adjusted the mix of sounds for firing while disarmed and using abilities while silenced Lash\'s Flog impact sound adjusted for better feedback for attacking player Fixed bug preventing purchase sound from playing when buying/quickbuying Active or Imbued items Visual updates to Mirage muzzle flash and tracers Updated Bullet Flurry tracers to be spirit-based Fixed Bebop\'s bomb damage growth not being reflected in the tooltip Fixed Grey Talon\'s spirit power growth from his ult not being reflected in the shop Fix to Yamato Shadow Transformation visuals when duration is extended after killing an enemy Fixed some item sounds playing on caster instead of target Updated Krill VO - largely remastering pass, but some new content Updated Ivy VO - largely remastering pass, but also fixed some lines with Spanish pronunciation issues Fixed a regression where Kelvin referenced Grey Talon incorrectly Updated Divine Barrier cast sound Added Telemetry HUD options to the settings menu. The Telemetry HUD is an in-game HUD which can be used to monitor the frame rate and network conditions. The Telemetry HUD can be enabled under Settings > Game. More information on the HUD can be found here: https://help.steampowered.com/en/faqs/view/5E6F-5B36-5485-F6B9 Added new Learn to Play tutorial images in collaboration with Toastyghostey (https://www.instagram.com/toastyghostey/) Steam Input Support: Added support for new Crouch Toggle button Added 3 new Official Control Schemes: { Standard | Gyro | FlickStick }. Thanks to @FlickStickVids for consultation. Added versioning system to Configs, so that outdated configs are unloaded Added an Extra Competitive option to allow players to control what type of players are placed on their team. If you prefer to play with higher levels of coordination, communication, and competitiveness, then you can use this option to tell the matchmaker to build your team with like-minded allies. This option will sometimes be inactive in scenarios where the pool is very shallow (large portions of Eternus, off peak hours like 5am, extremely long queue, etc.), but otherwise in most normal scenarios the matchmaker will attempt to find you similar players. The new Extra Competitive option, Incoming Chat, and Lane Preference (party only) settings are now collected within a \'Queue Options\' button on the dashboard below the profile area The recent change to increase party size allowed at the top MMR (from 2 to 3) reverted for Eternus and up, but maintained for Ascendant The matchmaker will now try to prioritize each team having at least 2 frontliners when it has the option to do so Ability Range stat now has diminishing stacking Ability Duration stat now has diminishing stacking Fire Rate now has a minimum final value of -50% Heroes now have +0.5 Sprint Sprint Boots reduced from +2 Sprint to +1.5 Enduring Speed reduced from +2 Sprint to +1.5 Carrying Urn now sets and limits your movespeed to a fixed 13 (this includes things like Ivy Air Drop). It no longer provides sprint. The speed cannot be reduced or increased. Urn spawn point now alternates left and right starting with left, rather than being random Shooting a trooper on a zipline now causes other troopers near it on the zipline to dismount as well Flying over buildings no longer causes you to get zapped, only standing on the building does Patron HP reduced from 10k to 7.5k Downed Patron HP reduced from 18k to 13.5k Patron HP grows by 250/Min starting 20 min Downed Patron HP grows by 450/Min starting 20 min (overall, these are -25% HP at 20 min, 0% at 30 min, and +25% at 40 min) Added a tick based souls system that gives the bottom two net worth players on the team a small amount of souls per second. The amount of souls available to distribute to the bottom two players is based on the souls gathered by your team (2% and 1%). This occurs after the laning phase. Added new limiting function for the soul orb duplication abuses during the laning phase. You shouldn\'t experience any real difference in normal gameplay: Reverted a few changes recently related to soul duplication issues Reverted: - Guardians now deal 25% more damage to troopers Reverted: - Guardians now take 25% more damage from troopers/players Reverted: - Range to be considered for souls reduced by 5m Reverted: - Troopers now do 20% more damage to each other Basic Magazine: Weapon Damage reduced from 15% to 12% High-Velocity Mag: Weapon Damage reduced from 13% to 11% Hollow Point Ward: Threshold increased from 60% to 65% Hollow Point Ward: Weapon Damage reduced from 22% to 20% Spellslinger Headshots: Proc bonus changed from 3% Spirit Power to 3% Spirit Amp Enchanter\'s Barrier: Cooldown reduction reduced from 8% to 6% Return Fire no longer has +9 Spirit Power Return Fire now has +3 HP Regen Return Fire now has +10% Ammo Debuff Remover: Buff duration increased from 4s to 5s Debuff Remover: Heal on active increased from 10% Max HP to 300 HP Withering Whip: Duration increased from 4.5s to 5s Withering Whip: Bullet Resist reduced from -11% to -12% Silence Glyph: Now pierces through all enemies in the path Silence Glyph: Projectile and collision size increased by 40% Abrams Bullet Damage decreased from 4.68 to 4.5 Spirit Siphon spirit scaling increased from 0.5 to 0.65 Bebop Uppercut now only locks enemies out of air control for a max of 0.5s (down from 1s) Hook now shows a hero icon when you connect with a target Hook delay reduced when pulling allies Hook T1 now also improves melee damage Dynamo Fixed Quantum Entanglement not deselecting if you get silenced while targeting Kinetic Pulse T2 now affects melee damage too Fixed Magic Carpet + Dynamo heal interaction Singularity cooldown increased from 191s to 215s Singularity now deals half damage to objectives Singularity fixed tooltip referencing knock-up that it doesn\'t do Grey Talon Immobilizing Trap renamed to Spirit Snare Spirit Snare now applies a Curse debuff for 1.75s to all enemies in the radius when it triggers instead of a tether Spirit Snare T2 no longer increases slow by 1s Spirit Snare T2 now increases Curse debuff by 0.5s You can now shoot Charged Shot onto Spirit Snare center to trigger it to detonate immediately in a 30% increased radius Charged Shot can now secure orbs Haze Smoke Bomb T1 Sprint reduced from +6 to +5 Smoke Bomb T3 charge time reduced from 10s to 7s Fixed Fixation not working correctly with debuff resist Fixation T3 reduced from 0.15 to 0.12 Sleep state no longer disables the target. It instead allows them to move at 2 m/s and be unable to take any other action (including stamina, mantle, parry etc). The target still wakes up on damage. Sleep dagger now takes effect immediately, rather than after a brief delay Fixed creeps sometimes attacking and waking on sleeping targets Bullet Dance cooldown increased from 138s to 150s Bullet Dance T1 reduced from +7 to +6 Spirit Damage Bullet Dance T2 increased from -38s to -40s Bullet Dance fixed an issue causing the game to freeze for the duration of the ult channel Infernus Flame Dash cooldown reduced from 40s to 35s Flame Dash T3 changed from -19s CD to -15s Flame Dash T3 now also makes the ability charged (15s charge time) Afterburn spirit scaling increased from 0.5 to 0.6 Ivy Melee damage and growth reduced by 15% Starting Health reduced from 550 to 525 Watcher\'s Covenant fixed to replicate healing even when you are full Watcher\'s Covenant now initially locks onto the target in your facing direction if there is one Stone Form now shows the Ivy player a visible radius indicator for where your hero will hit Kudzu Bomb now grows on the ground if it hits geo instead of floating in the air Air Drop damage reduced from 150 to 125 Fixed Phantom Strike not grounding Ivy when using Air Drop Air Drop now lets you choose to significantly reduce your initial upward momentum by holding the fly key down while casting the ability Kelvin Fixed some issues with being unable to shoot over half-height cover Frost Grenade now also reduces Stamina Regeneration during the slow duration Frozen Shelter now created on key up. While the key is down an outline of the area will be shown Frozen Shelter cooldown increased from 127s to 130s Frozen Shelter T2 increased from -38s to -40s Lady Geist Malice can now secure orbs Soul Exchange T2 changed from "-10% Min Health" to "On cast +40% Fire Rate for 8s" Soul Exchange T3 changed from "On cast, +40% Fire Rate and +40% Spirit Resist for 8s" to "Silences enemies in 15m radius for 3s" Life Drain duration increased from 2s to 2.5s Life Drain T3 changed from "Enemy is Silenced while being Life Drained" to "Ability becomes charged and grants +1 Charge". You can cast multiple Life Drains at the same time on different targets, no Charge Time. Lash Ground Strike T1 improved from -9.5s Cooldown to -10s Death Slam cooldown increased from 137s to 140s Death Slam channel time increased from 2s to 2.3s Death Slam Impact radius increased from 5m to 6m Death Slam cone angle increased from 75 to 85 Death Slam cast range increased from 18m to 20m Death Slam T2 changed from +100 damage to -30s Cooldown Death Slam T3 changed from -56s Cooldown to Impact Area Stuns for 1s Death Slam fixed a rendering issue that could lead to crashes, especially in tight spaces like Mid Boss arena McGinnis Mini Turrets HP gain per boon increased from 20 to 30 Mini Turrets no longer limit the damage they take to 33% of HP per second Mini Turrets now have a minimum lifetime of 4s. If they are killed during this time, they will be marked for death regardless of what happens during that time. There will be a visual indication that they are malfunctioning/dying. Mini Turrets Fire Rate reduced by 20% Mirage Fire Scarabs now applies its drain over 4s instead of frontloaded Fire Scarabs no longer restricts you from hitting the same target (debuff duration refreshes) Fire Scarabs launch window increased from 5s to 8s (can be extended by duration extender) Traveler now allows you to rotate the camera Traveler T2 changed from "-56 Cooldown" to "Grants Ally Traveler Benefits" (if cast on an enemy, it\'ll give the bonus to the closest ally hero within 30m) Mo & Krill Burrow is no longer affected by Shoulder Charge Spectral Wall no longer hits you while you are Burrowed Scorn now heals you instantly rather than over 1s Combo health gain tooltip clarified Paradox Time Wall Time Stop duration reduced from 0.6s to 0.5s Kinetic Carbine Max Stop duration reduced from 0.5s to 0.4s Kinetic Carbine T1 reduced from +0.5s to +0.4s Pocket Health growth reduced from 31 to 27 Enchanter\'s Satchel T1 increased from -4.75s to -5s Enchanter\'s Satchel Escape Duration reduced from 2s to 1.5s Enchanter\'s Satchel T3 now also increases Escape Duration by +0.5s Flying Cloak duration increased from 3.2 to 3.4s (slower speed, same overall distance) Affliction now immediately deals 18% of Current HP on application Affliction DPS reduced from 27 to 12 Affliction DPS Spirit Power scaling reduced from 0.3 to 0.22 Affliction radius reduced from 14m to 9m Affliction T3 reduced from +27 DPS to +15 DPS Affliction T3 now also increases range by +5m and increases initial damage by 5% Seven Storm Cloud now grants you a secondary ability Lightning Strike. It is a one time use AoE ability. You can target anywhere in your ultimate range, after a 2s delay it releases a vertical lightning strike onto a 6m area, knocking enemies away from that radius (6m knockback) and dealing 150 Damage (1.5 spirit scaling). There is a visual indicator for enemies that that area is about to be hit. Storm Cloud DPS reduced from 125 to 110 Storm Cloud T3 now also allows you to float around at 2.5m/s speed Shiv Fixed some targeting issues with Killing Blow Vindicta Health reduced from 550 to 525 Crow Familiar projectile speed increased from 3500 to 4750 Stake cooldown reduced from 42s to 40s Stake T2 increased from -19s Cooldown to -20s Stake T3 reduced from +0.75s to 0.5s Stake T3 now also increases capture radius by +2m Assassinate time between charges increased from 1.6s to 2s Assassinate base damage reduced from 130 to 120 Assassinate T2 damage reduced from 140 to 130 Viscous Fixed visual parry cooldown bug with Puddle Punch The Cube cooldown reduced from 48s to 42s The Cube cast range reduced from 30m to 26m Puddle Punch radius increased from 4 to 4.5 Puddle Punch slow reduced from 20% to 15% Puddle Punch T2 slow reduced from 20% to 15% Puddle Punch T3 now also causes the Punch to become a heavy melee Goo Ball damage Spirit Power scaling reduced from 1.3 to 1.1 Goo Ball damage T2 reduced from 120 to 90 Warden Fire Rate Spirit Power scaling reduced from 0.25 to 0.22 Last Stand Resistance reduced from 60% to 30% Last Stand now only goes on cooldown for 20s when interrupted rather than full Last Stand T2 now also reduces cooldown by 35s Last Stand T3 changed from "-56s Cooldown" to "+50% Bullet and Spirit Resistance During Channel and +2.5s Duration" Wraith Bullet damage growth increased 0.37 to 0.39 Full Auto T2 Spirit Damage Per Bullet now has default 0.05 Spirit Power scaling Full Auto T3 reduces the improved Spirit Power scaling from 0.1 to 0.05 Full Auto T3 changed from 30% Bullet Lifesteal to 20% Bullet and Spirit Lifesteal Telekinesis cast time reduced from 0.7s to 0.4s Telekinesis projectile speed increased from 650 to 750 Telekinesis now briefly lifts the enemy and then slams them to the ground and leaves the target with 2.5s of silence and disarm Telekinesis T2 duration now applies to the silence and disarm, increased to +0.75s Telekinesis T3 now causes the projectile to bounce to another nearby hero within 20m Yamato Flying Strike T3 now also lets you grapple to ally heroes Shadow Transformation cast time reduced from 2s to 1.5s Shadow Transformation no longer has a 0.6s post cast time Shadow Transformation T3 now also increases Resist by 15% Close Quarters Weapon Damage reduced from 25% to 22% Bullet Resist reduced from 5% to 4% Headshot Booster Cooldown increased from 7.5s to 8.5s Monster Rounds Weapon Damage vs NPC reduced from 30% to 26% Rapid Rounds Fire Rate reduced from 11% to 10% Restorative Shot Weapon Damage reduced from 6% to 3% Berserker Now builds into Frenzy Active Reload Ammo increased from 18% to 24% Fleetfoot Cooldown increased from 19s to 20s Melee Charge Bonus Health reduced from +75 to +65 Point Blank Now provides +20% Melee Resistance Toxic Bullets Bleed damage increased from 2.5% to 2.75% Alchemical Fire Spirit Power reduced from 11 to 7 Added alternate desaturated variant for friendly versions of this Sharpshooter Now reduces your Fire Rate by 10% and movespeed by 0.5 Weapon Damage increased from 20% to 30% Far range Weapon Damage increased from +50% to +70% Titanic Magazine Melee Resistance increased from 25% to 30% Frenzy Now builds from Berserker. Grants Berserker passive. Increases bonus per stack from 6% to 8%. Provides +12 ammo, 150 Bonus Health, +10% Bullet Resist. Stat bonuses when 50% below unchanged (4 m/s, 40% Fire Rate, 55% Bullet Resist, has 4s buffer memory) Crippling Headshot The headshot debuff will now stack from different sources, diminishingly (24%, 12%, 6%, etc) Shadow Weave Spot radius increased from 22m to 26m Lucky Shot Proc Chance reduced from 35% to 34% Silencer Buildup difficulty increased by 18% Spiritual Overflow Cooldown Reduction reduced from 15% to 12% Extra Stamina Fire Rate reduced from 6% to 5% Healing Rite Health bonus reduced from +45 to +30 Healing Nova Time to heal increased from 2s to 2.75s Restorative Locket Cooldown reduced from 30s to 25s Veil Walker When shot while invisible, you will require 1s to go back invisible rather than 0.25s Cooldown increased from 18s to 22s Majestic Leap No longer gets interrupted on slam down if you get shot Metal Skin Duration increased from 3.5s to 4s Stamina movement distance reduced by 25% Rescue Beam Range reduced from 32m to 28m Unstoppable Now has 20% Slow Resistance Leech No longer provides +12% Cooldown Reduction Now upgrades from Healbane. Provides +60% Anti Healing for 8s on Spirit Damage dealt. Infuser Duration increased from 6s to 8s No longer grants +50 Health Now grants +70 Spirit Shield Slowing Hex Cooldown increased from 26s to 28s Suppressor Duration increased from 2s to 2.5s Decay Bleed damage increased from 1.4% to 1.5% Rapid Recharge Cooldown for charged abilities reduced from 30% to 25% Ethereal Shift Allows you to float around slowly (2 m/s) Arcane Surge Ability range reduced from +20% to +18% Ability duration reduced from +20% to +18 Spirit Power reduced from +20 to +18 Mystic Slow Duration increased from 2s to 2.5s Surge of Power Fire Rate increased from 10% to 15% Knockdown Stun duration reduced from 0.9 to 0.75 Stun now lasts 1s longer against airborne targets based on how high off the ground they are (up to 30m) Refresher Cast delay increased from 0.3s to 0.6s Diviner\'s Kevlar Cooldown Reduction reduced from 12% to 10% Ability Duration increased from 7% to 10% Mystic Reverb Damage increased from 45% to 50% Magic Carpet Duration increased from 7s to 8s',
	stats: {
		schema: 2,
		method: 2,
		collected: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-11-30',
			to: '2024-12-06'
		},
		after: {
			from: '2024-12-07',
			to: '2024-12-17'
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
		level: 2,
		title: 'Bebop',
		id: 'bebop'
	},
	{
		level: 3,
		title: 'Uppercut',
		id: 'uppercut'
	},
	{
		level: 3,
		title: 'Hook',
		id: 'hook'
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
		title: 'Charged Shot',
		id: 'charged-shot'
	},
	{
		level: 2,
		title: 'Haze',
		id: 'haze'
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
		title: 'Sleep Dagger',
		id: 'sleep-dagger'
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
		title: 'Flame Dash',
		id: 'flame-dash'
	},
	{
		level: 3,
		title: 'Afterburn',
		id: 'afterburn'
	},
	{
		level: 2,
		title: 'Ivy',
		id: 'ivy'
	},
	{
		level: 3,
		title: 'Kudzu Connection',
		id: 'kudzu-connection'
	},
	{
		level: 3,
		title: "Watcher's Covenant",
		id: 'watcher-s-covenant'
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
		title: 'Frozen Shelter',
		id: 'frozen-shelter'
	},
	{
		level: 2,
		title: 'Lady Geist',
		id: 'lady-geist'
	},
	{
		level: 3,
		title: 'Malice',
		id: 'malice'
	},
	{
		level: 3,
		title: 'Soul Exchange',
		id: 'soul-exchange'
	},
	{
		level: 3,
		title: 'Life Drain',
		id: 'life-drain'
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
		title: 'Death Slam',
		id: 'death-slam'
	},
	{
		level: 3,
		title: 'Death Slam Impact',
		id: 'death-slam-impact'
	},
	{
		level: 3,
		title: 'Death Slam',
		id: 'death-slam-1'
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
		title: 'Mini Turrets Fire Rate',
		id: 'mini-turrets-fire-rate'
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
		title: 'Burrow',
		id: 'burrow'
	},
	{
		level: 3,
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 3,
		title: 'Scorn',
		id: 'scorn'
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
		title: 'Time Wall Time Stop',
		id: 'time-wall-time-stop'
	},
	{
		level: 3,
		title: 'Kinetic Carbine Max Stop',
		id: 'kinetic-carbine-max-stop'
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
		title: "Enchanter's Satchel",
		id: 'enchanter-s-satchel'
	},
	{
		level: 3,
		title: "Enchanter's Satchel Escape Duration",
		id: 'enchanter-s-satchel-escape-duration'
	},
	{
		level: 3,
		title: "Enchanter's Satchel",
		id: 'enchanter-s-satchel-1'
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
		level: 3,
		title: 'Affliction DPS',
		id: 'affliction-dps'
	},
	{
		level: 3,
		title: 'Affliction DPS Spirit Power',
		id: 'affliction-dps-spirit-power'
	},
	{
		level: 3,
		title: 'Affliction',
		id: 'affliction-1'
	},
	{
		level: 2,
		title: 'Seven',
		id: 'seven'
	},
	{
		level: 3,
		title: 'Storm Cloud',
		id: 'storm-cloud'
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
		title: 'Killing Blow',
		id: 'killing-blow'
	},
	{
		level: 2,
		title: 'Vindicta',
		id: 'vindicta'
	},
	{
		level: 3,
		title: 'Crow Familiar',
		id: 'crow-familiar'
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
		level: 3,
		title: 'The Cube',
		id: 'the-cube'
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
		level: 3,
		title: 'Telekinesis',
		id: 'telekinesis'
	},
	{
		level: 2,
		title: 'Yamato',
		id: 'yamato'
	},
	{
		level: 3,
		title: 'Flying Strike',
		id: 'flying-strike'
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
		title: 'Berserker',
		id: 'berserker'
	},
	{
		level: 2,
		title: 'Close Quarters',
		id: 'close-quarters'
	},
	{
		level: 2,
		title: 'Crippling Headshot',
		id: 'crippling-headshot'
	},
	{
		level: 2,
		title: 'Decay',
		id: 'decay'
	},
	{
		level: 2,
		title: "Diviner's Kevlar",
		id: 'diviner-s-kevlar'
	},
	{
		level: 2,
		title: 'Ethereal Shift',
		id: 'ethereal-shift'
	},
	{
		level: 2,
		title: 'Extra Stamina',
		id: 'extra-stamina'
	},
	{
		level: 2,
		title: 'Fleetfoot',
		id: 'fleetfoot'
	},
	{
		level: 2,
		title: 'Frenzy',
		id: 'frenzy'
	},
	{
		level: 2,
		title: 'Headshot Booster',
		id: 'headshot-booster'
	},
	{
		level: 2,
		title: 'Healing Nova',
		id: 'healing-nova'
	},
	{
		level: 2,
		title: 'Healing Rite',
		id: 'healing-rite'
	},
	{
		level: 2,
		title: 'Infuser',
		id: 'infuser'
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
		title: 'Lucky Shot',
		id: 'lucky-shot'
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
		title: 'Mystic Slow',
		id: 'mystic-slow'
	},
	{
		level: 2,
		title: 'Point Blank',
		id: 'point-blank'
	},
	{
		level: 2,
		title: 'Rapid Recharge',
		id: 'rapid-recharge'
	},
	{
		level: 2,
		title: 'Rapid Rounds',
		id: 'rapid-rounds'
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
		title: 'Titanic Magazine',
		id: 'titanic-magazine'
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
	}
];
var readingManifest = {
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:41:20.000Z',
		before: {
			from: '2024-11-30',
			to: '2024-12-06'
		},
		after: {
			from: '2024-12-07',
			to: '2024-12-17'
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
			name: 'Berserker',
			id: 'berserker'
		},
		{
			kind: 'item',
			name: 'Close Quarters',
			id: 'close-quarters'
		},
		{
			kind: 'item',
			name: 'Crippling Headshot',
			id: 'crippling-headshot'
		},
		{
			kind: 'item',
			name: 'Decay',
			id: 'decay'
		},
		{
			kind: 'item',
			name: "Diviner's Kevlar",
			id: 'diviner-s-kevlar'
		},
		{
			kind: 'item',
			name: 'Ethereal Shift',
			id: 'ethereal-shift'
		},
		{
			kind: 'item',
			name: 'Extra Stamina',
			id: 'extra-stamina'
		},
		{
			kind: 'item',
			name: 'Fleetfoot',
			id: 'fleetfoot'
		},
		{
			kind: 'item',
			name: 'Frenzy',
			id: 'frenzy'
		},
		{
			kind: 'item',
			name: 'Headshot Booster',
			id: 'headshot-booster'
		},
		{
			kind: 'item',
			name: 'Healing Nova',
			id: 'healing-nova'
		},
		{
			kind: 'item',
			name: 'Healing Rite',
			id: 'healing-rite'
		},
		{
			kind: 'item',
			name: 'Infuser',
			id: 'infuser'
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
			name: 'Lucky Shot',
			id: 'lucky-shot'
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
			name: 'Mystic Slow',
			id: 'mystic-slow'
		},
		{
			kind: 'item',
			name: 'Point Blank',
			id: 'point-blank'
		},
		{
			kind: 'item',
			name: 'Rapid Recharge',
			id: 'rapid-recharge'
		},
		{
			kind: 'item',
			name: 'Rapid Rounds',
			id: 'rapid-rounds'
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
			name: 'Titanic Magazine',
			id: 'titanic-magazine'
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
		}
	],
	related: []
};
function _2_06_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<ul><li>Added a new hero, Raven, to Hero Labs</li><li>Added park theming to purple lane</li><li>Added park backdrop to park side of map</li><li>Updated tree models to new visual style and added player collision to canopies</li><li>For each player on the main leaderboard, you can see their top 3 heroes as well as their overall skill rating</li><li>Moved the post-game survey to the final score screen</li><li>Added text box field to the post-game survey</li><li>Muting a player now also silences map drawing, pings, and chatwheel messages</li><li>Various rendering performance improvements on map assets</li><li>Added two new setting options &quot;Force English Hero Names&quot; and &quot;Force English Item Names&quot;, which will display those values in English regardless of your chosen language</li><li>Added Toggle Crouch as a new keybind</li><li>Added a new setting option: &quot;Additional Build Search Language&quot;, which lets you select a language to search for when requesting builds in addition to the current display language of the client.</li><li>Fixed shop search not working in the shop when opened from Resources</li><li>Revisions to melee parry effect and removal of the parry fail effect to make parries more clear</li><li>Tweaked falloff range and toned down bass frequencies of hotel music</li><li>Added Pocket Barrage cast delay sound</li><li>Updated Pocket Enchanted Satchel cast sound</li><li>Passive cooldown indicator now shows when the item is off cooldown instead of 1 second before</li><li>Fixed invulnerable-to-debuff sound effect playing at wrong times</li><li>Fixed melee damage audio playing despite no damage dealt</li><li>Fixed rejuv collect sound playing from wrong location in hero sandbox</li><li>Updated parry cast and parry success sounds</li><li>Mirage now has custom animations for most of his core movement</li><li>Fixed being able to wall jump off of the same surface multiple times</li><li>Fixed the Damage Report UI clipping into the shop in Sandbox mode</li><li>Fixed shop showing with a broken build tab if you had previously navigated to the hero builds, then opened it from Resources</li><li>Fixed clicking on minimap not taking you to that location as a spectator</li><li>Fade rooftop antenna ambient effects so that they are not visible at a distance</li><li>Visual revisions to Quantum entanglement effect</li><li>Reverted recent updates to Shiv run animations</li><li>Increased volume and adjusted the mix of sounds for firing while disarmed and using abilities while silenced</li><li>Lash&#x27;s Flog impact sound adjusted for better feedback for attacking player</li><li>Fixed bug preventing purchase sound from playing when buying/quickbuying Active or Imbued items</li><li>Visual updates to Mirage muzzle flash and tracers</li><li>Updated Bullet Flurry tracers to be spirit-based</li><li>Fixed Bebop&#x27;s bomb damage growth not being reflected in the tooltip</li><li>Fixed Grey Talon&#x27;s spirit power growth from his ult not being reflected in the shop</li><li>Fix to Yamato Shadow Transformation visuals when duration is extended after killing an enemy</li><li>Fixed some item sounds playing on caster instead of target</li><li>Updated Krill VO - largely remastering pass, but some new content</li><li>Updated Ivy VO - largely remastering pass, but also fixed some lines with Spanish pronunciation issues</li><li>Fixed a regression where Kelvin referenced Grey Talon incorrectly</li><li>Updated Divine Barrier cast sound</li><li>Added Telemetry HUD options to the settings menu. The Telemetry HUD is an in-game HUD which can be used to monitor the frame rate and network conditions. The Telemetry HUD can be enabled under Settings &gt; Game. More information on the HUD can be found here: https://help.steampowered.com/en/faqs/view/5E6F-5B36-5485-F6B9</li><li>Added new Learn to Play tutorial images in collaboration with Toastyghostey (https://www.instagram.com/toastyghostey/)</li><li>Steam Input Support:</li><li>Added support for new Crouch Toggle button</li><li>Added 3 new Official Control Schemes: { Standard | Gyro | FlickStick }. Thanks to @FlickStickVids for consultation.</li><li>Added versioning system to Configs, so that outdated configs are unloaded</li><li>Added an Extra Competitive option to allow players to control what type of players are placed on their team. If you prefer to play with higher levels of coordination, communication, and competitiveness, then you can use this option to tell the matchmaker to build your team with like-minded allies. This option will sometimes be inactive in scenarios where the pool is very shallow (large portions of Eternus, off peak hours like 5am, extremely long queue, etc.), but otherwise in most normal scenarios the matchmaker will attempt to find you similar players.</li><li>The new Extra Competitive option, Incoming Chat, and Lane Preference (party only) settings are now collected within a &#x27;Queue Options&#x27; button on the dashboard below the profile area</li><li>The recent change to increase party size allowed at the top MMR (from 2 to 3) reverted for Eternus and up, but maintained for Ascendant</li><li>The matchmaker will now try to prioritize each team having at least 2 frontliners when it has the option to do so</li><li>Ability Range stat now has diminishing stacking</li><li>Ability Duration stat now has diminishing stacking</li><li>Fire Rate now has a minimum final value of -50%</li><li>Heroes now have +0.5 Sprint</li><li>Sprint Boots reduced from +2 Sprint to +1.5</li><li>Enduring Speed reduced from +2 Sprint to +1.5</li><li>Carrying Urn now sets and limits your movespeed to a fixed 13 (this includes things like Ivy Air Drop). It no longer provides sprint. The speed cannot be reduced or increased.</li><li>Urn spawn point now alternates left and right starting with left, rather than being random</li><li>Shooting a trooper on a zipline now causes other troopers near it on the zipline to dismount as well</li><li>Flying over buildings no longer causes you to get zapped, only standing on the building does</li><li>Patron HP reduced from 10k to 7.5k</li><li>Downed Patron HP reduced from 18k to 13.5k</li><li>Patron HP grows by 250/Min starting 20 min</li><li>Downed Patron HP grows by 450/Min starting 20 min (overall, these are -25% HP at 20 min, 0% at 30 min, and +25% at 40 min)</li><li>Added a tick based souls system that gives the bottom two net worth players on the team a small amount of souls per second. The amount of souls available to distribute to the bottom two players is based on the souls gathered by your team (2% and 1%). This occurs after the laning phase.</li><li>Added new limiting function for the soul orb duplication abuses during the laning phase. You shouldn&#x27;t experience any real difference in normal gameplay:</li><li>Reverted a few changes recently related to soul duplication issues</li><li>Reverted: - Guardians now deal 25% more damage to troopers</li><li>Reverted: - Guardians now take 25% more damage from troopers/players</li><li>Reverted: - Range to be considered for souls reduced by 5m</li><li>Reverted: - Troopers now do 20% more damage to each other</li><li>Basic Magazine: Weapon Damage reduced from 15% to 12%</li><li>High-Velocity Mag: Weapon Damage reduced from 13% to 11%</li><li>Hollow Point Ward: Threshold increased from 60% to 65%</li><li>Hollow Point Ward: Weapon Damage reduced from 22% to 20%</li><li>Spellslinger Headshots: Proc bonus changed from 3% Spirit Power to 3% Spirit Amp</li><li>Enchanter&#x27;s Barrier: Cooldown reduction reduced from 8% to 6%</li><li>Return Fire no longer has +9 Spirit Power</li><li>Return Fire now has +3 HP Regen</li><li>Return Fire now has +10% Ammo</li><li>Debuff Remover: Buff duration increased from 4s to 5s</li><li>Debuff Remover: Heal on active increased from 10% Max HP to 300 HP</li><li>Withering Whip: Duration increased from 4.5s to 5s</li><li>Withering Whip: Bullet Resist reduced from -11% to -12%</li><li>Silence Glyph: Now pierces through all enemies in the path</li><li>Silence Glyph: Projectile and collision size increased by 40%</li></ul>\n<h2 id="hero-changes" data-mog-section="">Hero Changes</h2>\n')} `
	);
	_2_06_mg$2($$renderer, {});
	$$renderer.push(
		`<!----> <div class="hero abrams">${html('\n<p><a href="/hero/abrams"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Abrams patch history</a></p>\n<h3 id="abrams"><a href="/hero/abrams">Abrams</a></h3>\n<ul><li>Bullet Damage decreased from 4.68 to 4.5</li></ul>\n')} <div class="ability siphon-life">${html('\n<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>\n<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>\n<ul><li>Spirit Siphon spirit scaling increased from 0.5 to 0.65</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Abrams',
		ability: 'Siphon Life'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero bebop">${html('\n<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>\n<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>\n')} <div class="ability uppercut">${html('\n<h4 id="uppercut">Uppercut</h4>\n<ul><li>Uppercut now only locks enemies out of air control for a max of 0.5s (down from 1s)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Uppercut'
	});
	$$renderer.push(
		`<!----></div> <div class="ability hook">${html('\n<h4 id="hook">Hook</h4>\n<ul><li>Hook now shows a hero icon when you connect with a target</li><li>Hook delay reduced when pulling allies</li><li>Hook T1 now also improves melee damage</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Bebop',
		ability: 'Hook'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero dynamo">${html('\n<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>\n<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>\n')} <div class="ability quantum-entanglement">${html('\n<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>\n<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>\n<ul><li>Fixed Quantum Entanglement not deselecting if you get silenced while targeting</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Quantum Entanglement'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-pulse">${html('\n<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>\n<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>\n<ul><li>Kinetic Pulse T2 now affects melee damage too</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Kinetic Pulse'
	});
	$$renderer.push(
		`<!----></div> <div class="ability rejuvenating-aurora">${html('\n<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>\n<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>\n<ul><li>Fixed Magic Carpet + Dynamo heal interaction</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Rejuvenating Aurora'
	});
	$$renderer.push(
		`<!----></div> <div class="ability singularity">${html('\n<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>\n<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>\n')} <ul><li>${html('Singularity cooldown increased from 191s to 215s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Singularity cooldown increased from 191s to 215s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Singularity now deals half damage to objectives')}</li> <li>${html('Singularity fixed tooltip referencing knock-up that it doesn&#x27;t do')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Dynamo',
		ability: 'Singularity'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero grey-talon">${html('\n<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>\n<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>\n')} <div class="ability spirit-snare">${html('\n<p><a href="/ability/spirit-snare"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Snare change history</a></p>\n<h4 id="spirit-snare"><a href="/ability/spirit-snare">Spirit Snare</a></h4>\n<ul><li>Immobilizing Trap renamed to Spirit Snare</li><li>Spirit Snare now applies a Curse debuff for 1.75s to all enemies in the radius when it triggers instead of a tether</li><li>Spirit Snare T2 no longer increases slow by 1s</li><li>Spirit Snare T2 now increases Curse debuff by 0.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Spirit Snare'
	});
	$$renderer.push(
		`<!----></div> <div class="ability charged-shot">${html('\n<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>\n<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>\n<ul><li>You can now shoot Charged Shot onto Spirit Snare center to trigger it to detonate immediately in a 30% increased radius</li><li>Charged Shot can now secure orbs</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Grey Talon',
		ability: 'Charged Shot'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero haze">${html('\n<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>\n<h3 id="haze"><a href="/hero/haze">Haze</a></h3>\n')} <div class="ability smoke-bomb">${html('\n<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>\n<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>\n<ul><li>Smoke Bomb T1 Sprint reduced from +6 to +5</li><li>Smoke Bomb T3 charge time reduced from 10s to 7s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Smoke Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability fixation">${html('\n<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>\n<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>\n<ul><li>Fixed Fixation not working correctly with debuff resist</li><li>Fixation T3 reduced from 0.15 to 0.12</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Fixation'
	});
	$$renderer.push(
		`<!----></div> <div class="ability sleep-dagger">${html('\n<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>\n<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>\n<ul><li>Sleep state no longer disables the target. It instead allows them to move at 2 m/s and be unable to take any other action (including stamina, mantle, parry etc). The target still wakes up on damage.</li><li>Sleep dagger now takes effect immediately, rather than after a brief delay</li><li>Fixed creeps sometimes attacking and waking on sleeping targets</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Sleep Dagger'
	});
	$$renderer.push(
		`<!----></div> <div class="ability bullet-dance">${html('\n<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>\n<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>\n')} <ul><li>${html('Bullet Dance cooldown increased from 138s to 150s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Haze',
		groupIndex: 3,
		bulletIndex: 0,
		text: 'Bullet Dance cooldown increased from 138s to 150s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Bullet Dance T1 reduced from +7 to +6 Spirit Damage')}</li> <li>${html('Bullet Dance T2 increased from -38s to -40s')}</li> <li>${html('Bullet Dance fixed an issue causing the game to freeze for the duration of the ult channel')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Haze',
		ability: 'Bullet Dance'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero infernus">${html('\n<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>\n<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>\n')} <div class="ability flame-dash">${html('\n<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>\n<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>\n')} <ul><li>${html('Flame Dash cooldown reduced from 40s to 35s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Flame Dash cooldown reduced from 40s to 35s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Flame Dash T3 changed from -19s CD to -15s')}</li> <li>${html('Flame Dash T3 now also makes the ability charged (15s charge time)')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Flame Dash'
	});
	$$renderer.push(
		`<!----></div> <div class="ability afterburn">${html('\n<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>\n<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>\n<ul><li>Afterburn spirit scaling increased from 0.5 to 0.6</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Infernus',
		ability: 'Afterburn'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero ivy">${html('\n<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>\n<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>\n<ul><li>Melee damage and growth reduced by 15%</li><li>Starting Health reduced from 550 to 525</li></ul>\n')} <div class="ability kudzu-connection">${html('\n<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>\n<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>\n<ul><li>Watcher&#x27;s Covenant fixed to replicate healing even when you are full</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Connection'
	});
	$$renderer.push(
		`<!----></div> <div class="ability watcher-s-covenant">${html('\n<h4 id="watcher-s-covenant">Watcher&#x27;s Covenant</h4>\n<ul><li>Watcher&#x27;s Covenant now initially locks onto the target in your facing direction if there is one</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: "Watcher's Covenant"
	});
	$$renderer.push(
		`<!----></div> <div class="ability stone-form">${html('\n<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>\n<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>\n<ul><li>Stone Form now shows the Ivy player a visible radius indicator for where your hero will hit</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Stone Form'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kudzu-bomb">${html('\n<h4 id="kudzu-bomb">Kudzu Bomb</h4>\n<ul><li>Kudzu Bomb now grows on the ground if it hits geo instead of floating in the air</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Kudzu Bomb'
	});
	$$renderer.push(
		`<!----></div> <div class="ability air-drop">${html('\n<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>\n<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>\n')} <ul><li>${html('Air Drop damage reduced from 150 to 125')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		groupIndex: 5,
		bulletIndex: 0,
		text: 'Air Drop damage reduced from 150 to 125'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Fixed Phantom Strike not grounding Ivy when using Air Drop')}</li> <li>${html('Air Drop now lets you choose to significantly reduce your initial upward momentum by holding the fly key down while casting the ability')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Ivy',
		ability: 'Air Drop'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero kelvin">${html('\n<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>\n<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>\n<ul><li>Fixed some issues with being unable to shoot over half-height cover</li></ul>\n')} <div class="ability frost-grenade">${html('\n<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>\n<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>\n<ul><li>Frost Grenade now also reduces Stamina Regeneration during the slow duration</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frost Grenade'
	});
	$$renderer.push(
		`<!----></div> <div class="ability frozen-shelter">${html('\n<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>\n<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>\n')} <ul><li>${html('Frozen Shelter now created on key up. While the key is down an outline of the area will be shown')}</li> <li>${html('Frozen Shelter cooldown increased from 127s to 130s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		groupIndex: 2,
		bulletIndex: 1,
		text: 'Frozen Shelter cooldown increased from 127s to 130s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Frozen Shelter T2 increased from -38s to -40s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Kelvin',
		ability: 'Frozen Shelter'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lady-geist">${html('\n<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>\n<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>\n')} <div class="ability malice">${html('\n<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>\n<h4 id="malice"><a href="/ability/malice">Malice</a></h4>\n<ul><li>Malice can now secure orbs</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Malice'
	});
	$$renderer.push(
		`<!----></div> <div class="ability soul-exchange">${html('\n<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>\n<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>\n<ul><li>Soul Exchange T2 changed from &quot;-10% Min Health&quot; to &quot;On cast +40% Fire Rate for 8s&quot;</li><li>Soul Exchange T3 changed from &quot;On cast, +40% Fire Rate and +40% Spirit Resist for 8s&quot; to &quot;Silences enemies in 15m radius for 3s&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Soul Exchange'
	});
	$$renderer.push(
		`<!----></div> <div class="ability life-drain">${html('\n<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>\n<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>\n<ul><li>Life Drain duration increased from 2s to 2.5s</li><li>Life Drain T3 changed from &quot;Enemy is Silenced while being Life Drained&quot; to &quot;Ability becomes charged and grants +1 Charge&quot;. You can cast multiple Life Drains at the same time on different targets, no Charge Time.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lady Geist',
		ability: 'Life Drain'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero lash">${html('\n<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>\n<h3 id="lash"><a href="/hero/lash">Lash</a></h3>\n')} <div class="ability ground-strike">${html('\n<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>\n<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>\n<ul><li>Ground Strike T1 improved from -9.5s Cooldown to -10s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Ground Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>\n')} <ul><li>${html('Death Slam cooldown increased from 137s to 140s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'Death Slam cooldown increased from 137s to 140s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Death Slam channel time increased from 2s to 2.3s')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam-impact">${html('\n<h4 id="death-slam-impact"><a href="/ability/death-slam">Death Slam Impact</a></h4>\n')} <ul><li>${html('Death Slam Impact radius increased from 5m to 6m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Lash',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Death Slam Impact radius increased from 5m to 6m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Death Slam cone angle increased from 75 to 85')}</li> <li>${html('Death Slam cast range increased from 18m to 20m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam Impact'
	});
	$$renderer.push(
		`<!----></div> <div class="ability death-slam">${html('\n<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>\n<h4 id="death-slam-1"><a href="/ability/death-slam">Death Slam</a></h4>\n<ul><li>Death Slam T2 changed from +100 damage to -30s Cooldown</li><li>Death Slam T3 changed from -56s Cooldown to Impact Area Stuns for 1s</li><li>Death Slam fixed a rendering issue that could lead to crashes, especially in tight spaces like Mid Boss arena</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Lash',
		ability: 'Death Slam'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mcginnis">${html('\n<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>\n<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>\n')} <div class="ability mini-turret">${html('\n<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>\n<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>\n<ul><li>Mini Turrets HP gain per boon increased from 20 to 30</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turret'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turrets">${html('\n<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>\n<ul><li>Mini Turrets no longer limit the damage they take to 33% of HP per second</li><li>Mini Turrets now have a minimum lifetime of 4s. If they are killed during this time, they will be marked for death regardless of what happens during that time. There will be a visual indication that they are malfunctioning/dying.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets'
	});
	$$renderer.push(
		`<!----></div> <div class="ability mini-turrets-fire-rate">${html('\n<h4 id="mini-turrets-fire-rate"><a href="/ability/mini-turret">Mini Turrets Fire Rate</a></h4>\n<ul><li>Mini Turrets Fire Rate reduced by 20%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'McGinnis',
		ability: 'Mini Turrets Fire Rate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mirage">${html('\n<p><a href="/hero/mirage"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mirage patch history</a></p>\n<h3 id="mirage"><a href="/hero/mirage">Mirage</a></h3>\n')} <div class="ability fire-scarabs">${html('\n<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>\n<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>\n<ul><li>Fire Scarabs now applies its drain over 4s instead of frontloaded</li><li>Fire Scarabs no longer restricts you from hitting the same target (debuff duration refreshes)</li><li>Fire Scarabs launch window increased from 5s to 8s (can be extended by duration extender)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Fire Scarabs'
	});
	$$renderer.push(
		`<!----></div> <div class="ability traveler">${html('\n<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>\n<h4 id="traveler"><a href="/ability/traveler">Traveler</a></h4>\n<ul><li>Traveler now allows you to rotate the camera</li><li>Traveler T2 changed from &quot;-56 Cooldown&quot; to &quot;Grants Ally Traveler Benefits&quot; (if cast on an enemy, it&#x27;ll give the bonus to the closest ally hero within 30m)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mirage',
		ability: 'Traveler'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero mo-krill">${html('\n<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>\n<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>\n')} <div class="ability burrow">${html('\n<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>\n<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>\n<ul><li>Burrow is no longer affected by Shoulder Charge</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Burrow'
	});
	$$renderer.push(
		`<!----></div> <div class="ability spectral-wall">${html('\n<p><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt="Spectral Wall"  decoding="async" width="24" height="24" loading="lazy"/></p>\n<h4 id="spectral-wall">Spectral Wall</h4>\n<ul><li>Spectral Wall no longer hits you while you are Burrowed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Spectral Wall'
	});
	$$renderer.push(
		`<!----></div> <div class="ability scorn">${html('\n<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>\n<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>\n<ul><li>Scorn now heals you instantly rather than over 1s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Scorn'
	});
	$$renderer.push(
		`<!----></div> <div class="ability combo">${html('\n<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>\n<h4 id="combo"><a href="/ability/combo">Combo</a></h4>\n<ul><li>Combo health gain tooltip clarified</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Mo & Krill',
		ability: 'Combo'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero paradox">${html('\n<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>\n<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>\n')} <div class="ability time-wall-time-stop">${html('\n<h4 id="time-wall-time-stop"><a href="/ability/time-wall">Time Wall Time Stop</a></h4>\n<ul><li>Time Wall Time Stop duration reduced from 0.6s to 0.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Time Wall Time Stop'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine-max-stop">${html('\n<h4 id="kinetic-carbine-max-stop"><a href="/ability/kinetic-carbine">Kinetic Carbine Max Stop</a></h4>\n<ul><li>Kinetic Carbine Max Stop duration reduced from 0.5s to 0.4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine Max Stop'
	});
	$$renderer.push(
		`<!----></div> <div class="ability kinetic-carbine">${html('\n<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>\n<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>\n<ul><li>Kinetic Carbine T1 reduced from +0.5s to +0.4s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Paradox',
		ability: 'Kinetic Carbine'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero pocket">${html('\n<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>\n<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>\n<ul><li>Health growth reduced from 31 to 27</li></ul>\n')} <div class="ability enchanter-s-satchel">${html('\n<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>\n<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>\n<ul><li>Enchanter&#x27;s Satchel T1 increased from -4.75s to -5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: "Enchanter's Satchel"
	});
	$$renderer.push(
		`<!----></div> <div class="ability enchanter-s-satchel-escape-duration">${html('\n<h4 id="enchanter-s-satchel-escape-duration"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel Escape Duration</a></h4>\n<ul><li>Enchanter&#x27;s Satchel Escape Duration reduced from 2s to 1.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: "Enchanter's Satchel Escape Duration"
	});
	$$renderer.push(
		`<!----></div> <div class="ability enchanter-s-satchel">${html('\n<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>\n<h4 id="enchanter-s-satchel-1"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>\n<ul><li>Enchanter&#x27;s Satchel T3 now also increases Escape Duration by +0.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: "Enchanter's Satchel"
	});
	$$renderer.push(
		`<!----></div> <div class="ability flying-cloak">${html('\n<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>\n<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>\n<ul><li>Flying Cloak duration increased from 3.2 to 3.4s (slower speed, same overall distance)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Flying Cloak'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>\n<ul><li>Affliction now immediately deals 18% of Current HP on application</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction-dps">${html('\n<h4 id="affliction-dps"><a href="/ability/affliction">Affliction DPS</a></h4>\n<ul><li>Affliction DPS reduced from 27 to 12</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction-dps-spirit-power">${html('\n<h4 id="affliction-dps-spirit-power"><a href="/ability/affliction">Affliction DPS Spirit Power</a></h4>\n<ul><li>Affliction DPS Spirit Power scaling reduced from 0.3 to 0.22</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction DPS Spirit Power'
	});
	$$renderer.push(
		`<!----></div> <div class="ability affliction">${html('\n<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>\n<h4 id="affliction-1"><a href="/ability/affliction">Affliction</a></h4>\n')} <ul><li>${html('Affliction radius reduced from 14m to 9m')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		groupIndex: 8,
		bulletIndex: 0,
		text: 'Affliction radius reduced from 14m to 9m'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Affliction T3 reduced from +27 DPS to +15 DPS')}</li> <li>${html('Affliction T3 now also increases range by +5m and increases initial damage by 5%')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Pocket',
		ability: 'Affliction'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero seven">${html('\n<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>\n<h3 id="seven"><a href="/hero/seven">Seven</a></h3>\n')} <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud now grants you a secondary ability Lightning Strike. It is a one time use AoE ability. You can target anywhere in your ultimate range, after a 2s delay it releases a vertical lightning strike onto a 6m area, knocking enemies away from that radius (6m knockback) and dealing 150 Damage (1.5 spirit scaling). There is a visual indicator for enemies that that area is about to be hit.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud-dps">${html('\n<h4 id="storm-cloud-dps"><a href="/ability/storm-cloud">Storm Cloud DPS</a></h4>\n<ul><li>Storm Cloud DPS reduced from 125 to 110</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud DPS'
	});
	$$renderer.push(
		`<!----></div> <div class="ability storm-cloud">${html('\n<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>\n<h4 id="storm-cloud-1"><a href="/ability/storm-cloud">Storm Cloud</a></h4>\n<ul><li>Storm Cloud T3 now also allows you to float around at 2.5m/s speed</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Seven',
		ability: 'Storm Cloud'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero shiv">${html('\n<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>\n<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>\n')} <div class="ability killing-blow">${html('\n<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>\n<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>\n<ul><li>Fixed some targeting issues with Killing Blow</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Shiv',
		ability: 'Killing Blow'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero vindicta">${html('\n<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>\n<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>\n<ul><li>Health reduced from 550 to 525</li></ul>\n')} <div class="ability crow-familiar">${html('\n<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>\n<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>\n<ul><li>Crow Familiar projectile speed increased from 3500 to 4750</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Crow Familiar'
	});
	$$renderer.push(
		`<!----></div> <div class="ability stake">${html('\n<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>\n<h4 id="stake"><a href="/ability/stake">Stake</a></h4>\n')} <ul><li>${html('Stake cooldown reduced from 42s to 40s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Stake cooldown reduced from 42s to 40s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Stake T2 increased from -19s Cooldown to -20s')}</li> <li>${html('Stake T3 reduced from +0.75s to 0.5s')}</li> <li>${html('Stake T3 now also increases capture radius by +2m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Stake'
	});
	$$renderer.push(
		`<!----></div> <div class="ability assassinate">${html('\n<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>\n<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>\n')} <ul><li>${html('Assassinate time between charges increased from 1.6s to 2s')}</li> <li>${html('Assassinate base damage reduced from 130 to 120')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 3,
		bulletIndex: 1,
		text: 'Assassinate base damage reduced from 130 to 120'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Assassinate T2 damage reduced from 140 to 130')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		groupIndex: 3,
		bulletIndex: 2,
		text: 'Assassinate T2 damage reduced from 140 to 130'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Vindicta',
		ability: 'Assassinate'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero viscous">${html('\n<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>\n<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>\n')} <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n<ul><li>Fixed visual parry cooldown bug with Puddle Punch</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability the-cube">${html('\n<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>\n<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>\n')} <ul><li>${html('The Cube cooldown reduced from 48s to 42s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 1,
		bulletIndex: 0,
		text: 'The Cube cooldown reduced from 48s to 42s'
	});
	$$renderer.push(
		`<!----></li> <li>${html('The Cube cast range reduced from 30m to 26m')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'The Cube'
	});
	$$renderer.push(
		`<!----></div> <div class="ability puddle-punch">${html('\n<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>\n<h4 id="puddle-punch-1"><a href="/ability/puddle-punch">Puddle Punch</a></h4>\n')} <ul><li>${html('Puddle Punch radius increased from 4 to 4.5')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		groupIndex: 2,
		bulletIndex: 0,
		text: 'Puddle Punch radius increased from 4 to 4.5'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Puddle Punch slow reduced from 20% to 15%')}</li> <li>${html('Puddle Punch T2 slow reduced from 20% to 15%')}</li> <li>${html('Puddle Punch T3 now also causes the Punch to become a heavy melee')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Puddle Punch'
	});
	$$renderer.push(
		`<!----></div> <div class="ability goo-ball">${html('\n<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>\n<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>\n<ul><li>Goo Ball damage Spirit Power scaling reduced from 1.3 to 1.1</li><li>Goo Ball damage T2 reduced from 120 to 90</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Viscous',
		ability: 'Goo Ball'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero warden">${html('\n<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>\n<h3 id="warden"><a href="/hero/warden">Warden</a></h3>\n<ul><li>Fire Rate Spirit Power scaling reduced from 0.25 to 0.22</li></ul>\n')} <div class="ability last-stand">${html('\n<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>\n<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>\n<ul><li>Last Stand Resistance reduced from 60% to 30%</li><li>Last Stand now only goes on cooldown for 20s when interrupted rather than full</li><li>Last Stand T2 now also reduces cooldown by 35s</li><li>Last Stand T3 changed from &quot;-56s Cooldown&quot; to &quot;+50% Bullet and Spirit Resistance During Channel and +2.5s Duration&quot;</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Warden',
		ability: 'Last Stand'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero wraith">${html('\n<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>\n<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>\n<ul><li>Bullet damage growth increased 0.37 to 0.39</li></ul>\n')} <div class="ability full-auto">${html('\n<p><a href="/ability/full-auto"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Full Auto change history</a></p>\n<h4 id="full-auto"><a href="/ability/full-auto">Full Auto</a></h4>\n<ul><li>Full Auto T2 Spirit Damage Per Bullet now has default 0.05 Spirit Power scaling</li><li>Full Auto T3 reduces the improved Spirit Power scaling from 0.1 to 0.05</li><li>Full Auto T3 changed from 30% Bullet Lifesteal to 20% Bullet and Spirit Lifesteal</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Full Auto'
	});
	$$renderer.push(
		`<!----></div> <div class="ability telekinesis">${html('\n<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>\n<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>\n<ul><li>Telekinesis cast time reduced from 0.7s to 0.4s</li><li>Telekinesis projectile speed increased from 650 to 750</li><li>Telekinesis now briefly lifts the enemy and then slams them to the ground and leaves the target with 2.5s of silence and disarm</li><li>Telekinesis T2 duration now applies to the silence and disarm, increased to +0.75s</li><li>Telekinesis T3 now causes the projectile to bounce to another nearby hero within 20m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Wraith',
		ability: 'Telekinesis'
	});
	$$renderer.push(
		`<!----></div></div> <div class="hero yamato">${html('\n<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>\n<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>\n')} <div class="ability flying-strike">${html('\n<h4 id="flying-strike">Flying Strike</h4>\n<ul><li>Flying Strike T3 now also lets you grapple to ally heroes</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Flying Strike'
	});
	$$renderer.push(
		`<!----></div> <div class="ability shadow-transformation">${html('\n<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>\n<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>\n<ul><li>Shadow Transformation cast time reduced from 2s to 1.5s</li><li>Shadow Transformation no longer has a 0.6s post cast time</li><li>Shadow Transformation T3 now also increases Resist by 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'hero',
		name: 'Yamato',
		ability: 'Shadow Transformation'
	});
	$$renderer.push(
		`<!----></div></div> ${html('\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_2_06_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item active-reload">${html('\n<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>\n<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>\n<ul><li>Ammo increased from 18% to 24%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Active Reload',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item alchemical-fire">${html('\n<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>\n<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>\n<ul><li>Spirit Power reduced from 11 to 7</li><li>Added alternate desaturated variant for friendly versions of this</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Alchemical Fire',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item arcane-surge">${html('\n<p><a href="/item/arcane-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arcane Surge patch history</a></p>\n<h3 id="arcane-surge"><a href="/item/arcane-surge">Arcane Surge</a></h3>\n<ul><li>Ability range reduced from +20% to +18%</li><li>Ability duration reduced from +20% to +18</li><li>Spirit Power reduced from +20 to +18</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Arcane Surge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item berserker">${html('\n<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>\n<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>\n<ul><li>Now builds into Frenzy</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Berserker',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item close-quarters">${html('\n<p><a href="/item/close-quarters"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Close Quarters patch history</a></p>\n<h3 id="close-quarters"><a href="/item/close-quarters">Close Quarters</a></h3>\n<ul><li>Weapon Damage reduced from 25% to 22%</li><li>Bullet Resist reduced from 5% to 4%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Close Quarters',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item crippling-headshot">${html('\n<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>\n<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>\n<ul><li>The headshot debuff will now stack from different sources, diminishingly (24%, 12%, 6%, etc)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Crippling Headshot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item decay">${html('\n<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>\n<h3 id="decay"><a href="/item/decay">Decay</a></h3>\n<ul><li>Bleed damage increased from 1.4% to 1.5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Decay',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item diviner-s-kevlar">${html('\n<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>\n<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>\n<ul><li>Cooldown Reduction reduced from 12% to 10%</li><li>Ability Duration increased from 7% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: "Diviner's Kevlar",
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ethereal-shift">${html('\n<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>\n<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>\n<ul><li>Allows you to float around slowly (2 m/s)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ethereal Shift',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item extra-stamina">${html('\n<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>\n<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>\n<ul><li>Fire Rate reduced from 6% to 5%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Extra Stamina',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item fleetfoot">${html('\n<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>\n<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>\n')} <ul><li>${html('Cooldown increased from 19s to 20s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 19s to 20s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Fleetfoot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item frenzy">${html('\n<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>\n<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>\n<ul><li>Now builds from Berserker. Grants Berserker passive. Increases bonus per stack from 6% to 8%. Provides +12 ammo, 150 Bonus Health, +10% Bullet Resist. Stat bonuses when 50% below unchanged (4 m/s, 40% Fire Rate, 55% Bullet Resist, has 4s buffer memory)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Frenzy',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item headshot-booster">${html('\n<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>\n<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>\n')} <ul><li>${html('Cooldown increased from 7.5s to 8.5s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 7.5s to 8.5s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Headshot Booster',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-nova">${html('\n<p><a href="/item/healing-nova"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Nova patch history</a></p>\n<h3 id="healing-nova"><a href="/item/healing-nova">Healing Nova</a></h3>\n<ul><li>Time to heal increased from 2s to 2.75s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Nova',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item healing-rite">${html('\n<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>\n<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>\n<ul><li>Health bonus reduced from +45 to +30</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Healing Rite',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item infuser">${html('\n<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>\n<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>\n<ul><li>Duration increased from 6s to 8s</li><li>No longer grants +50 Health</li><li>Now grants +70 Spirit Shield</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Infuser',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item knockdown">${html('\n<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>\n<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>\n<ul><li>Stun duration reduced from 0.9 to 0.75</li><li>Stun now lasts 1s longer against airborne targets based on how high off the ground they are (up to 30m)</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Knockdown',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leech">${html('\n<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>\n<h3 id="leech"><a href="/item/leech">Leech</a></h3>\n<ul><li>No longer provides +12% Cooldown Reduction</li><li>Now upgrades from Healbane. Provides +60% Anti Healing for 8s on Spirit Damage dealt.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leech',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item lucky-shot">${html('\n<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>\n<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>\n<ul><li>Proc Chance reduced from 35% to 34%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Lucky Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item magic-carpet">${html('\n<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>\n<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>\n<ul><li>Duration increased from 7s to 8s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Magic Carpet',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item majestic-leap">${html('\n<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>\n<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>\n<ul><li>No longer gets interrupted on slam down if you get shot</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Majestic Leap',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item melee-charge">${html('\n<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>\n<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>\n<ul><li>Bonus Health reduced from +75 to +65</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Melee Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item metal-skin">${html('\n<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>\n<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>\n<ul><li>Duration increased from 3.5s to 4s</li><li>Stamina movement distance reduced by 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Metal Skin',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item monster-rounds">${html('\n<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>\n<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>\n<ul><li>Weapon Damage vs NPC reduced from 30% to 26%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Monster Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-reverb">${html('\n<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>\n<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>\n')} <ul><li>${html('Damage increased from 45% to 50%')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Damage increased from 45% to 50%'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Reverb',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mystic-slow">${html('\n<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>\n<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>\n<ul><li>Duration increased from 2s to 2.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mystic Slow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item point-blank">${html('\n<p><a href="/item/point-blank"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Point Blank patch history</a></p>\n<h3 id="point-blank"><a href="/item/point-blank">Point Blank</a></h3>\n<ul><li>Now provides +20% Melee Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Point Blank',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-recharge">${html('\n<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>\n<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>\n<ul><li>Cooldown for charged abilities reduced from 30% to 25%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Recharge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rapid-rounds">${html('\n<p><a href="/item/rapid-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Rounds patch history</a></p>\n<h3 id="rapid-rounds"><a href="/item/rapid-rounds">Rapid Rounds</a></h3>\n<ul><li>Fire Rate reduced from 11% to 10%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rapid Rounds',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item refresher">${html('\n<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>\n<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>\n<ul><li>Cast delay increased from 0.3s to 0.6s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Refresher',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rescue-beam">${html('\n<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>\n<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>\n<ul><li>Range reduced from 32m to 28m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rescue Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-locket">${html('\n<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>\n<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>\n')} <ul><li>${html('Cooldown reduced from 30s to 25s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown reduced from 30s to 25s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Locket',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item restorative-shot">${html('\n<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>\n<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>\n<ul><li>Weapon Damage reduced from 6% to 3%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Restorative Shot',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shadow-weave">${html('\n<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>\n<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>\n<ul><li>Spot radius increased from 22m to 26m</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shadow Weave',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sharpshooter">${html('\n<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>\n<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>\n<ul><li>Now reduces your Fire Rate by 10% and movespeed by 0.5</li><li>Weapon Damage increased from 20% to 30%</li><li>Far range Weapon Damage increased from +50% to +70%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sharpshooter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item silencer">${html('\n<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>\n<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>\n<ul><li>Buildup difficulty increased by 18%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Silencer',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item slowing-hex">${html('\n<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>\n<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>\n')} <ul><li>${html('Cooldown increased from 26s to 28s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 26s to 28s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Slowing Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spiritual-overflow">${html('\n<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>\n<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>\n<ul><li>Cooldown Reduction reduced from 15% to 12%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spiritual Overflow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item suppressor">${html('\n<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>\n<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>\n<ul><li>Duration increased from 2s to 2.5s</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Suppressor',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item surge-of-power">${html('\n<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>\n<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>\n<ul><li>Fire Rate increased from 10% to 15%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Surge of Power',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item titanic-magazine">${html('\n<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>\n<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>\n<ul><li>Melee Resistance increased from 25% to 30%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Titanic Magazine',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item toxic-bullets">${html('\n<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>\n<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>\n<ul><li>Bleed damage increased from 2.5% to 2.75%</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Toxic Bullets',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item unstoppable">${html('\n<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>\n<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>\n<ul><li>Now has 20% Slow Resistance</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Unstoppable',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item veil-walker">${html('\n<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>\n<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>\n')} <ul><li>${html('When shot while invisible, you will require 1s to go back invisible rather than 0.25s')}</li> <li>${html('Cooldown increased from 18s to 22s')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		groupIndex: 0,
		bulletIndex: 1,
		text: 'Cooldown increased from 18s to 22s'
	});
	$$renderer.push(`<!----></li></ul> `);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Veil Walker',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _2_06_mg as default, metadata, readingManifest, toc };
