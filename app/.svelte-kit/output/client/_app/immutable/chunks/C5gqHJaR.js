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
		names: [
			`Abrams`,
			`Bebop`,
			`Dynamo`,
			`Grey Talon`,
			`Haze`,
			`Infernus`,
			`Ivy`,
			`Kelvin`,
			`Lady Geist`,
			`Lash`,
			`McGinnis`,
			`Mirage`,
			`Mo &amp; Krill`,
			`Paradox`,
			`Pocket`,
			`Seven`,
			`Shiv`,
			`Vindicta`,
			`Viscous`,
			`Warden`,
			`Wraith`,
			`Yamato`
		]
	});
}
function ae(ee) {
	re(ee, {
		type: `item`,
		names:
			`Active Reload.Alchemical Fire.Arcane Surge.Berserker.Close Quarters.Crippling Headshot.Decay.Diviner's Kevlar.Ethereal Shift.Extra Stamina.Fleetfoot.Frenzy.Headshot Booster.Healing Nova.Healing Rite.Infuser.Knockdown.Leech.Lucky Shot.Magic Carpet.Majestic Leap.Melee Charge.Metal Skin.Monster Rounds.Mystic Reverb.Mystic Slow.Point Blank.Rapid Recharge.Rapid Rounds.Refresher.Rescue Beam.Restorative Locket.Restorative Shot.Shadow Weave.Sharpshooter.Silencer.Slowing Hex.Spiritual Overflow.Suppressor.Surge of Power.Titanic Magazine.Toxic Bullets.Unstoppable.Veil Walker`.split(
				`.`
			)
	});
}
var oe = {
		title: `12-06-2024 Update`,
		thread_id: `50599`,
		steam_gid: `1785321795648842`,
		published: `2024-12-06T12:05:10-0800`,
		author: `Yoshi`,
		author_image: `/assets/authors/yoshi.webp`,
		major_update: !1,
		content_text: `Added a new hero, Raven, to Hero Labs Added park theming to purple lane Added park backdrop to park side of map Updated tree models to new visual style and added player collision to canopies For each player on the main leaderboard, you can see their top 3 heroes as well as their overall skill rating Moved the post-game survey to the final score screen Added text box field to the post-game survey Muting a player now also silences map drawing, pings, and chatwheel messages Various rendering performance improvements on map assets Added two new setting options "Force English Hero Names" and "Force English Item Names", which will display those values in English regardless of your chosen language Added Toggle Crouch as a new keybind Added a new setting option: "Additional Build Search Language", which lets you select a language to search for when requesting builds in addition to the current display language of the client. Fixed shop search not working in the shop when opened from Resources Revisions to melee parry effect and removal of the parry fail effect to make parries more clear Tweaked falloff range and toned down bass frequencies of hotel music Added Pocket Barrage cast delay sound Updated Pocket Enchanted Satchel cast sound Passive cooldown indicator now shows when the item is off cooldown instead of 1 second before Fixed invulnerable-to-debuff sound effect playing at wrong times Fixed melee damage audio playing despite no damage dealt Fixed rejuv collect sound playing from wrong location in hero sandbox Updated parry cast and parry success sounds Mirage now has custom animations for most of his core movement Fixed being able to wall jump off of the same surface multiple times Fixed the Damage Report UI clipping into the shop in Sandbox mode Fixed shop showing with a broken build tab if you had previously navigated to the hero builds, then opened it from Resources Fixed clicking on minimap not taking you to that location as a spectator Fade rooftop antenna ambient effects so that they are not visible at a distance Visual revisions to Quantum entanglement effect Reverted recent updates to Shiv run animations Increased volume and adjusted the mix of sounds for firing while disarmed and using abilities while silenced Lash's Flog impact sound adjusted for better feedback for attacking player Fixed bug preventing purchase sound from playing when buying/quickbuying Active or Imbued items Visual updates to Mirage muzzle flash and tracers Updated Bullet Flurry tracers to be spirit-based Fixed Bebop's bomb damage growth not being reflected in the tooltip Fixed Grey Talon's spirit power growth from his ult not being reflected in the shop Fix to Yamato Shadow Transformation visuals when duration is extended after killing an enemy Fixed some item sounds playing on caster instead of target Updated Krill VO - largely remastering pass, but some new content Updated Ivy VO - largely remastering pass, but also fixed some lines with Spanish pronunciation issues Fixed a regression where Kelvin referenced Grey Talon incorrectly Updated Divine Barrier cast sound Added Telemetry HUD options to the settings menu. The Telemetry HUD is an in-game HUD which can be used to monitor the frame rate and network conditions. The Telemetry HUD can be enabled under Settings > Game. More information on the HUD can be found here: https://help.steampowered.com/en/faqs/view/5E6F-5B36-5485-F6B9 Added new Learn to Play tutorial images in collaboration with Toastyghostey (https://www.instagram.com/toastyghostey/) Steam Input Support: Added support for new Crouch Toggle button Added 3 new Official Control Schemes: { Standard | Gyro | FlickStick }. Thanks to @FlickStickVids for consultation. Added versioning system to Configs, so that outdated configs are unloaded Added an Extra Competitive option to allow players to control what type of players are placed on their team. If you prefer to play with higher levels of coordination, communication, and competitiveness, then you can use this option to tell the matchmaker to build your team with like-minded allies. This option will sometimes be inactive in scenarios where the pool is very shallow (large portions of Eternus, off peak hours like 5am, extremely long queue, etc.), but otherwise in most normal scenarios the matchmaker will attempt to find you similar players. The new Extra Competitive option, Incoming Chat, and Lane Preference (party only) settings are now collected within a 'Queue Options' button on the dashboard below the profile area The recent change to increase party size allowed at the top MMR (from 2 to 3) reverted for Eternus and up, but maintained for Ascendant The matchmaker will now try to prioritize each team having at least 2 frontliners when it has the option to do so Ability Range stat now has diminishing stacking Ability Duration stat now has diminishing stacking Fire Rate now has a minimum final value of -50% Heroes now have +0.5 Sprint Sprint Boots reduced from +2 Sprint to +1.5 Enduring Speed reduced from +2 Sprint to +1.5 Carrying Urn now sets and limits your movespeed to a fixed 13 (this includes things like Ivy Air Drop). It no longer provides sprint. The speed cannot be reduced or increased. Urn spawn point now alternates left and right starting with left, rather than being random Shooting a trooper on a zipline now causes other troopers near it on the zipline to dismount as well Flying over buildings no longer causes you to get zapped, only standing on the building does Patron HP reduced from 10k to 7.5k Downed Patron HP reduced from 18k to 13.5k Patron HP grows by 250/Min starting 20 min Downed Patron HP grows by 450/Min starting 20 min (overall, these are -25% HP at 20 min, 0% at 30 min, and +25% at 40 min) Added a tick based souls system that gives the bottom two net worth players on the team a small amount of souls per second. The amount of souls available to distribute to the bottom two players is based on the souls gathered by your team (2% and 1%). This occurs after the laning phase. Added new limiting function for the soul orb duplication abuses during the laning phase. You shouldn't experience any real difference in normal gameplay: Reverted a few changes recently related to soul duplication issues Reverted: - Guardians now deal 25% more damage to troopers Reverted: - Guardians now take 25% more damage from troopers/players Reverted: - Range to be considered for souls reduced by 5m Reverted: - Troopers now do 20% more damage to each other Basic Magazine: Weapon Damage reduced from 15% to 12% High-Velocity Mag: Weapon Damage reduced from 13% to 11% Hollow Point Ward: Threshold increased from 60% to 65% Hollow Point Ward: Weapon Damage reduced from 22% to 20% Spellslinger Headshots: Proc bonus changed from 3% Spirit Power to 3% Spirit Amp Enchanter's Barrier: Cooldown reduction reduced from 8% to 6% Return Fire no longer has +9 Spirit Power Return Fire now has +3 HP Regen Return Fire now has +10% Ammo Debuff Remover: Buff duration increased from 4s to 5s Debuff Remover: Heal on active increased from 10% Max HP to 300 HP Withering Whip: Duration increased from 4.5s to 5s Withering Whip: Bullet Resist reduced from -11% to -12% Silence Glyph: Now pierces through all enemies in the path Silence Glyph: Projectile and collision size increased by 40% Abrams Bullet Damage decreased from 4.68 to 4.5 Spirit Siphon spirit scaling increased from 0.5 to 0.65 Bebop Uppercut now only locks enemies out of air control for a max of 0.5s (down from 1s) Hook now shows a hero icon when you connect with a target Hook delay reduced when pulling allies Hook T1 now also improves melee damage Dynamo Fixed Quantum Entanglement not deselecting if you get silenced while targeting Kinetic Pulse T2 now affects melee damage too Fixed Magic Carpet + Dynamo heal interaction Singularity cooldown increased from 191s to 215s Singularity now deals half damage to objectives Singularity fixed tooltip referencing knock-up that it doesn't do Grey Talon Immobilizing Trap renamed to Spirit Snare Spirit Snare now applies a Curse debuff for 1.75s to all enemies in the radius when it triggers instead of a tether Spirit Snare T2 no longer increases slow by 1s Spirit Snare T2 now increases Curse debuff by 0.5s You can now shoot Charged Shot onto Spirit Snare center to trigger it to detonate immediately in a 30% increased radius Charged Shot can now secure orbs Haze Smoke Bomb T1 Sprint reduced from +6 to +5 Smoke Bomb T3 charge time reduced from 10s to 7s Fixed Fixation not working correctly with debuff resist Fixation T3 reduced from 0.15 to 0.12 Sleep state no longer disables the target. It instead allows them to move at 2 m/s and be unable to take any other action (including stamina, mantle, parry etc). The target still wakes up on damage. Sleep dagger now takes effect immediately, rather than after a brief delay Fixed creeps sometimes attacking and waking on sleeping targets Bullet Dance cooldown increased from 138s to 150s Bullet Dance T1 reduced from +7 to +6 Spirit Damage Bullet Dance T2 increased from -38s to -40s Bullet Dance fixed an issue causing the game to freeze for the duration of the ult channel Infernus Flame Dash cooldown reduced from 40s to 35s Flame Dash T3 changed from -19s CD to -15s Flame Dash T3 now also makes the ability charged (15s charge time) Afterburn spirit scaling increased from 0.5 to 0.6 Ivy Melee damage and growth reduced by 15% Starting Health reduced from 550 to 525 Watcher's Covenant fixed to replicate healing even when you are full Watcher's Covenant now initially locks onto the target in your facing direction if there is one Stone Form now shows the Ivy player a visible radius indicator for where your hero will hit Kudzu Bomb now grows on the ground if it hits geo instead of floating in the air Air Drop damage reduced from 150 to 125 Fixed Phantom Strike not grounding Ivy when using Air Drop Air Drop now lets you choose to significantly reduce your initial upward momentum by holding the fly key down while casting the ability Kelvin Fixed some issues with being unable to shoot over half-height cover Frost Grenade now also reduces Stamina Regeneration during the slow duration Frozen Shelter now created on key up. While the key is down an outline of the area will be shown Frozen Shelter cooldown increased from 127s to 130s Frozen Shelter T2 increased from -38s to -40s Lady Geist Malice can now secure orbs Soul Exchange T2 changed from "-10% Min Health" to "On cast +40% Fire Rate for 8s" Soul Exchange T3 changed from "On cast, +40% Fire Rate and +40% Spirit Resist for 8s" to "Silences enemies in 15m radius for 3s" Life Drain duration increased from 2s to 2.5s Life Drain T3 changed from "Enemy is Silenced while being Life Drained" to "Ability becomes charged and grants +1 Charge". You can cast multiple Life Drains at the same time on different targets, no Charge Time. Lash Ground Strike T1 improved from -9.5s Cooldown to -10s Death Slam cooldown increased from 137s to 140s Death Slam channel time increased from 2s to 2.3s Death Slam Impact radius increased from 5m to 6m Death Slam cone angle increased from 75 to 85 Death Slam cast range increased from 18m to 20m Death Slam T2 changed from +100 damage to -30s Cooldown Death Slam T3 changed from -56s Cooldown to Impact Area Stuns for 1s Death Slam fixed a rendering issue that could lead to crashes, especially in tight spaces like Mid Boss arena McGinnis Mini Turrets HP gain per boon increased from 20 to 30 Mini Turrets no longer limit the damage they take to 33% of HP per second Mini Turrets now have a minimum lifetime of 4s. If they are killed during this time, they will be marked for death regardless of what happens during that time. There will be a visual indication that they are malfunctioning/dying. Mini Turrets Fire Rate reduced by 20% Mirage Fire Scarabs now applies its drain over 4s instead of frontloaded Fire Scarabs no longer restricts you from hitting the same target (debuff duration refreshes) Fire Scarabs launch window increased from 5s to 8s (can be extended by duration extender) Traveler now allows you to rotate the camera Traveler T2 changed from "-56 Cooldown" to "Grants Ally Traveler Benefits" (if cast on an enemy, it'll give the bonus to the closest ally hero within 30m) Mo & Krill Burrow is no longer affected by Shoulder Charge Spectral Wall no longer hits you while you are Burrowed Scorn now heals you instantly rather than over 1s Combo health gain tooltip clarified Paradox Time Wall Time Stop duration reduced from 0.6s to 0.5s Kinetic Carbine Max Stop duration reduced from 0.5s to 0.4s Kinetic Carbine T1 reduced from +0.5s to +0.4s Pocket Health growth reduced from 31 to 27 Enchanter's Satchel T1 increased from -4.75s to -5s Enchanter's Satchel Escape Duration reduced from 2s to 1.5s Enchanter's Satchel T3 now also increases Escape Duration by +0.5s Flying Cloak duration increased from 3.2 to 3.4s (slower speed, same overall distance) Affliction now immediately deals 18% of Current HP on application Affliction DPS reduced from 27 to 12 Affliction DPS Spirit Power scaling reduced from 0.3 to 0.22 Affliction radius reduced from 14m to 9m Affliction T3 reduced from +27 DPS to +15 DPS Affliction T3 now also increases range by +5m and increases initial damage by 5% Seven Storm Cloud now grants you a secondary ability Lightning Strike. It is a one time use AoE ability. You can target anywhere in your ultimate range, after a 2s delay it releases a vertical lightning strike onto a 6m area, knocking enemies away from that radius (6m knockback) and dealing 150 Damage (1.5 spirit scaling). There is a visual indicator for enemies that that area is about to be hit. Storm Cloud DPS reduced from 125 to 110 Storm Cloud T3 now also allows you to float around at 2.5m/s speed Shiv Fixed some targeting issues with Killing Blow Vindicta Health reduced from 550 to 525 Crow Familiar projectile speed increased from 3500 to 4750 Stake cooldown reduced from 42s to 40s Stake T2 increased from -19s Cooldown to -20s Stake T3 reduced from +0.75s to 0.5s Stake T3 now also increases capture radius by +2m Assassinate time between charges increased from 1.6s to 2s Assassinate base damage reduced from 130 to 120 Assassinate T2 damage reduced from 140 to 130 Viscous Fixed visual parry cooldown bug with Puddle Punch The Cube cooldown reduced from 48s to 42s The Cube cast range reduced from 30m to 26m Puddle Punch radius increased from 4 to 4.5 Puddle Punch slow reduced from 20% to 15% Puddle Punch T2 slow reduced from 20% to 15% Puddle Punch T3 now also causes the Punch to become a heavy melee Goo Ball damage Spirit Power scaling reduced from 1.3 to 1.1 Goo Ball damage T2 reduced from 120 to 90 Warden Fire Rate Spirit Power scaling reduced from 0.25 to 0.22 Last Stand Resistance reduced from 60% to 30% Last Stand now only goes on cooldown for 20s when interrupted rather than full Last Stand T2 now also reduces cooldown by 35s Last Stand T3 changed from "-56s Cooldown" to "+50% Bullet and Spirit Resistance During Channel and +2.5s Duration" Wraith Bullet damage growth increased 0.37 to 0.39 Full Auto T2 Spirit Damage Per Bullet now has default 0.05 Spirit Power scaling Full Auto T3 reduces the improved Spirit Power scaling from 0.1 to 0.05 Full Auto T3 changed from 30% Bullet Lifesteal to 20% Bullet and Spirit Lifesteal Telekinesis cast time reduced from 0.7s to 0.4s Telekinesis projectile speed increased from 650 to 750 Telekinesis now briefly lifts the enemy and then slams them to the ground and leaves the target with 2.5s of silence and disarm Telekinesis T2 duration now applies to the silence and disarm, increased to +0.75s Telekinesis T3 now causes the projectile to bounce to another nearby hero within 20m Yamato Flying Strike T3 now also lets you grapple to ally heroes Shadow Transformation cast time reduced from 2s to 1.5s Shadow Transformation no longer has a 0.6s post cast time Shadow Transformation T3 now also increases Resist by 15% Close Quarters Weapon Damage reduced from 25% to 22% Bullet Resist reduced from 5% to 4% Headshot Booster Cooldown increased from 7.5s to 8.5s Monster Rounds Weapon Damage vs NPC reduced from 30% to 26% Rapid Rounds Fire Rate reduced from 11% to 10% Restorative Shot Weapon Damage reduced from 6% to 3% Berserker Now builds into Frenzy Active Reload Ammo increased from 18% to 24% Fleetfoot Cooldown increased from 19s to 20s Melee Charge Bonus Health reduced from +75 to +65 Point Blank Now provides +20% Melee Resistance Toxic Bullets Bleed damage increased from 2.5% to 2.75% Alchemical Fire Spirit Power reduced from 11 to 7 Added alternate desaturated variant for friendly versions of this Sharpshooter Now reduces your Fire Rate by 10% and movespeed by 0.5 Weapon Damage increased from 20% to 30% Far range Weapon Damage increased from +50% to +70% Titanic Magazine Melee Resistance increased from 25% to 30% Frenzy Now builds from Berserker. Grants Berserker passive. Increases bonus per stack from 6% to 8%. Provides +12 ammo, 150 Bonus Health, +10% Bullet Resist. Stat bonuses when 50% below unchanged (4 m/s, 40% Fire Rate, 55% Bullet Resist, has 4s buffer memory) Crippling Headshot The headshot debuff will now stack from different sources, diminishingly (24%, 12%, 6%, etc) Shadow Weave Spot radius increased from 22m to 26m Lucky Shot Proc Chance reduced from 35% to 34% Silencer Buildup difficulty increased by 18% Spiritual Overflow Cooldown Reduction reduced from 15% to 12% Extra Stamina Fire Rate reduced from 6% to 5% Healing Rite Health bonus reduced from +45 to +30 Healing Nova Time to heal increased from 2s to 2.75s Restorative Locket Cooldown reduced from 30s to 25s Veil Walker When shot while invisible, you will require 1s to go back invisible rather than 0.25s Cooldown increased from 18s to 22s Majestic Leap No longer gets interrupted on slam down if you get shot Metal Skin Duration increased from 3.5s to 4s Stamina movement distance reduced by 25% Rescue Beam Range reduced from 32m to 28m Unstoppable Now has 20% Slow Resistance Leech No longer provides +12% Cooldown Reduction Now upgrades from Healbane. Provides +60% Anti Healing for 8s on Spirit Damage dealt. Infuser Duration increased from 6s to 8s No longer grants +50 Health Now grants +70 Spirit Shield Slowing Hex Cooldown increased from 26s to 28s Suppressor Duration increased from 2s to 2.5s Decay Bleed damage increased from 1.4% to 1.5% Rapid Recharge Cooldown for charged abilities reduced from 30% to 25% Ethereal Shift Allows you to float around slowly (2 m/s) Arcane Surge Ability range reduced from +20% to +18% Ability duration reduced from +20% to +18 Spirit Power reduced from +20 to +18 Mystic Slow Duration increased from 2s to 2.5s Surge of Power Fire Rate increased from 10% to 15% Knockdown Stun duration reduced from 0.9 to 0.75 Stun now lasts 1s longer against airborne targets based on how high off the ground they are (up to 30m) Refresher Cast delay increased from 0.3s to 0.6s Diviner's Kevlar Cooldown Reduction reduced from 12% to 10% Ability Duration increased from 7% to 10% Mystic Reverb Damage increased from 45% to 50% Magic Carpet Duration increased from 7s to 8s`,
		stats: {
			schema: 2,
			method: 2,
			collected: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-11-30`, to: `2024-12-06` },
			after: { from: `2024-12-07`, to: `2024-12-17` }
		}
	},
	se = [
		{ level: 1, title: `General Changes`, id: `general-changes` },
		{ level: 1, title: `Hero Changes`, id: `hero-changes` },
		{ level: 2, title: `Abrams`, id: `abrams` },
		{ level: 3, title: `Siphon Life`, id: `siphon-life` },
		{ level: 2, title: `Bebop`, id: `bebop` },
		{ level: 3, title: `Uppercut`, id: `uppercut` },
		{ level: 3, title: `Hook`, id: `hook` },
		{ level: 2, title: `Dynamo`, id: `dynamo` },
		{ level: 3, title: `Quantum Entanglement`, id: `quantum-entanglement` },
		{ level: 3, title: `Kinetic Pulse`, id: `kinetic-pulse` },
		{ level: 3, title: `Rejuvenating Aurora`, id: `rejuvenating-aurora` },
		{ level: 3, title: `Singularity`, id: `singularity` },
		{ level: 2, title: `Grey Talon`, id: `grey-talon` },
		{ level: 3, title: `Spirit Snare`, id: `spirit-snare` },
		{ level: 3, title: `Charged Shot`, id: `charged-shot` },
		{ level: 2, title: `Haze`, id: `haze` },
		{ level: 3, title: `Smoke Bomb`, id: `smoke-bomb` },
		{ level: 3, title: `Fixation`, id: `fixation` },
		{ level: 3, title: `Sleep Dagger`, id: `sleep-dagger` },
		{ level: 3, title: `Bullet Dance`, id: `bullet-dance` },
		{ level: 2, title: `Infernus`, id: `infernus` },
		{ level: 3, title: `Flame Dash`, id: `flame-dash` },
		{ level: 3, title: `Afterburn`, id: `afterburn` },
		{ level: 2, title: `Ivy`, id: `ivy` },
		{ level: 3, title: `Kudzu Connection`, id: `kudzu-connection` },
		{ level: 3, title: `Watcher's Covenant`, id: `watcher-s-covenant` },
		{ level: 3, title: `Stone Form`, id: `stone-form` },
		{ level: 3, title: `Kudzu Bomb`, id: `kudzu-bomb` },
		{ level: 3, title: `Air Drop`, id: `air-drop` },
		{ level: 2, title: `Kelvin`, id: `kelvin` },
		{ level: 3, title: `Frost Grenade`, id: `frost-grenade` },
		{ level: 3, title: `Frozen Shelter`, id: `frozen-shelter` },
		{ level: 2, title: `Lady Geist`, id: `lady-geist` },
		{ level: 3, title: `Malice`, id: `malice` },
		{ level: 3, title: `Soul Exchange`, id: `soul-exchange` },
		{ level: 3, title: `Life Drain`, id: `life-drain` },
		{ level: 2, title: `Lash`, id: `lash` },
		{ level: 3, title: `Ground Strike`, id: `ground-strike` },
		{ level: 3, title: `Death Slam`, id: `death-slam` },
		{ level: 3, title: `Death Slam Impact`, id: `death-slam-impact` },
		{ level: 3, title: `Death Slam`, id: `death-slam-1` },
		{ level: 2, title: `McGinnis`, id: `mcginnis` },
		{ level: 3, title: `Mini Turret`, id: `mini-turret` },
		{ level: 3, title: `Mini Turrets`, id: `mini-turrets` },
		{ level: 3, title: `Mini Turrets Fire Rate`, id: `mini-turrets-fire-rate` },
		{ level: 2, title: `Mirage`, id: `mirage` },
		{ level: 3, title: `Fire Scarabs`, id: `fire-scarabs` },
		{ level: 3, title: `Traveler`, id: `traveler` },
		{ level: 2, title: `Mo & Krill`, id: `mo-krill` },
		{ level: 3, title: `Burrow`, id: `burrow` },
		{ level: 3, title: `Spectral Wall`, id: `spectral-wall` },
		{ level: 3, title: `Scorn`, id: `scorn` },
		{ level: 3, title: `Combo`, id: `combo` },
		{ level: 2, title: `Paradox`, id: `paradox` },
		{ level: 3, title: `Time Wall Time Stop`, id: `time-wall-time-stop` },
		{ level: 3, title: `Kinetic Carbine Max Stop`, id: `kinetic-carbine-max-stop` },
		{ level: 3, title: `Kinetic Carbine`, id: `kinetic-carbine` },
		{ level: 2, title: `Pocket`, id: `pocket` },
		{ level: 3, title: `Enchanter's Satchel`, id: `enchanter-s-satchel` },
		{
			level: 3,
			title: `Enchanter's Satchel Escape Duration`,
			id: `enchanter-s-satchel-escape-duration`
		},
		{ level: 3, title: `Enchanter's Satchel`, id: `enchanter-s-satchel-1` },
		{ level: 3, title: `Flying Cloak`, id: `flying-cloak` },
		{ level: 3, title: `Affliction`, id: `affliction` },
		{ level: 3, title: `Affliction DPS`, id: `affliction-dps` },
		{ level: 3, title: `Affliction DPS Spirit Power`, id: `affliction-dps-spirit-power` },
		{ level: 3, title: `Affliction`, id: `affliction-1` },
		{ level: 2, title: `Seven`, id: `seven` },
		{ level: 3, title: `Storm Cloud`, id: `storm-cloud` },
		{ level: 3, title: `Storm Cloud DPS`, id: `storm-cloud-dps` },
		{ level: 3, title: `Storm Cloud`, id: `storm-cloud-1` },
		{ level: 2, title: `Shiv`, id: `shiv` },
		{ level: 3, title: `Killing Blow`, id: `killing-blow` },
		{ level: 2, title: `Vindicta`, id: `vindicta` },
		{ level: 3, title: `Crow Familiar`, id: `crow-familiar` },
		{ level: 3, title: `Stake`, id: `stake` },
		{ level: 3, title: `Assassinate`, id: `assassinate` },
		{ level: 2, title: `Viscous`, id: `viscous` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch` },
		{ level: 3, title: `The Cube`, id: `the-cube` },
		{ level: 3, title: `Puddle Punch`, id: `puddle-punch-1` },
		{ level: 3, title: `Goo Ball`, id: `goo-ball` },
		{ level: 2, title: `Warden`, id: `warden` },
		{ level: 3, title: `Last Stand`, id: `last-stand` },
		{ level: 2, title: `Wraith`, id: `wraith` },
		{ level: 3, title: `Full Auto`, id: `full-auto` },
		{ level: 3, title: `Telekinesis`, id: `telekinesis` },
		{ level: 2, title: `Yamato`, id: `yamato` },
		{ level: 3, title: `Flying Strike`, id: `flying-strike` },
		{ level: 3, title: `Shadow Transformation`, id: `shadow-transformation` },
		{ level: 1, title: `Item Changes`, id: `item-changes` },
		{ level: 2, title: `Active Reload`, id: `active-reload` },
		{ level: 2, title: `Alchemical Fire`, id: `alchemical-fire` },
		{ level: 2, title: `Arcane Surge`, id: `arcane-surge` },
		{ level: 2, title: `Berserker`, id: `berserker` },
		{ level: 2, title: `Close Quarters`, id: `close-quarters` },
		{ level: 2, title: `Crippling Headshot`, id: `crippling-headshot` },
		{ level: 2, title: `Decay`, id: `decay` },
		{ level: 2, title: `Diviner's Kevlar`, id: `diviner-s-kevlar` },
		{ level: 2, title: `Ethereal Shift`, id: `ethereal-shift` },
		{ level: 2, title: `Extra Stamina`, id: `extra-stamina` },
		{ level: 2, title: `Fleetfoot`, id: `fleetfoot` },
		{ level: 2, title: `Frenzy`, id: `frenzy` },
		{ level: 2, title: `Headshot Booster`, id: `headshot-booster` },
		{ level: 2, title: `Healing Nova`, id: `healing-nova` },
		{ level: 2, title: `Healing Rite`, id: `healing-rite` },
		{ level: 2, title: `Infuser`, id: `infuser` },
		{ level: 2, title: `Knockdown`, id: `knockdown` },
		{ level: 2, title: `Leech`, id: `leech` },
		{ level: 2, title: `Lucky Shot`, id: `lucky-shot` },
		{ level: 2, title: `Magic Carpet`, id: `magic-carpet` },
		{ level: 2, title: `Majestic Leap`, id: `majestic-leap` },
		{ level: 2, title: `Melee Charge`, id: `melee-charge` },
		{ level: 2, title: `Metal Skin`, id: `metal-skin` },
		{ level: 2, title: `Monster Rounds`, id: `monster-rounds` },
		{ level: 2, title: `Mystic Reverb`, id: `mystic-reverb` },
		{ level: 2, title: `Mystic Slow`, id: `mystic-slow` },
		{ level: 2, title: `Point Blank`, id: `point-blank` },
		{ level: 2, title: `Rapid Recharge`, id: `rapid-recharge` },
		{ level: 2, title: `Rapid Rounds`, id: `rapid-rounds` },
		{ level: 2, title: `Refresher`, id: `refresher` },
		{ level: 2, title: `Rescue Beam`, id: `rescue-beam` },
		{ level: 2, title: `Restorative Locket`, id: `restorative-locket` },
		{ level: 2, title: `Restorative Shot`, id: `restorative-shot` },
		{ level: 2, title: `Shadow Weave`, id: `shadow-weave` },
		{ level: 2, title: `Sharpshooter`, id: `sharpshooter` },
		{ level: 2, title: `Silencer`, id: `silencer` },
		{ level: 2, title: `Slowing Hex`, id: `slowing-hex` },
		{ level: 2, title: `Spiritual Overflow`, id: `spiritual-overflow` },
		{ level: 2, title: `Suppressor`, id: `suppressor` },
		{ level: 2, title: `Surge of Power`, id: `surge-of-power` },
		{ level: 2, title: `Titanic Magazine`, id: `titanic-magazine` },
		{ level: 2, title: `Toxic Bullets`, id: `toxic-bullets` },
		{ level: 2, title: `Unstoppable`, id: `unstoppable` },
		{ level: 2, title: `Veil Walker`, id: `veil-walker` }
	],
	s = {
		stats: {
			schemaVersion: 2,
			methodVersion: 2,
			collectedAt: `2026-09-21T21:41:20.000Z`,
			before: { from: `2024-11-30`, to: `2024-12-06` },
			after: { from: `2024-12-07`, to: `2024-12-17` },
			siblings: []
		},
		open: !1,
		sections: [
			{ kind: `hero`, name: `Abrams`, id: `abrams` },
			{ kind: `hero`, name: `Bebop`, id: `bebop` },
			{ kind: `hero`, name: `Dynamo`, id: `dynamo` },
			{ kind: `hero`, name: `Grey Talon`, id: `grey-talon` },
			{ kind: `hero`, name: `Haze`, id: `haze` },
			{ kind: `hero`, name: `Infernus`, id: `infernus` },
			{ kind: `hero`, name: `Ivy`, id: `ivy` },
			{ kind: `hero`, name: `Kelvin`, id: `kelvin` },
			{ kind: `hero`, name: `Lady Geist`, id: `lady-geist` },
			{ kind: `hero`, name: `Lash`, id: `lash` },
			{ kind: `hero`, name: `McGinnis`, id: `mcginnis` },
			{ kind: `hero`, name: `Mirage`, id: `mirage` },
			{ kind: `hero`, name: `Mo & Krill`, id: `mo-krill` },
			{ kind: `hero`, name: `Paradox`, id: `paradox` },
			{ kind: `hero`, name: `Pocket`, id: `pocket` },
			{ kind: `hero`, name: `Seven`, id: `seven` },
			{ kind: `hero`, name: `Shiv`, id: `shiv` },
			{ kind: `hero`, name: `Vindicta`, id: `vindicta` },
			{ kind: `hero`, name: `Viscous`, id: `viscous` },
			{ kind: `hero`, name: `Warden`, id: `warden` },
			{ kind: `hero`, name: `Wraith`, id: `wraith` },
			{ kind: `hero`, name: `Yamato`, id: `yamato` },
			{ kind: `item`, name: `Active Reload`, id: `active-reload` },
			{ kind: `item`, name: `Alchemical Fire`, id: `alchemical-fire` },
			{ kind: `item`, name: `Arcane Surge`, id: `arcane-surge` },
			{ kind: `item`, name: `Berserker`, id: `berserker` },
			{ kind: `item`, name: `Close Quarters`, id: `close-quarters` },
			{ kind: `item`, name: `Crippling Headshot`, id: `crippling-headshot` },
			{ kind: `item`, name: `Decay`, id: `decay` },
			{ kind: `item`, name: `Diviner's Kevlar`, id: `diviner-s-kevlar` },
			{ kind: `item`, name: `Ethereal Shift`, id: `ethereal-shift` },
			{ kind: `item`, name: `Extra Stamina`, id: `extra-stamina` },
			{ kind: `item`, name: `Fleetfoot`, id: `fleetfoot` },
			{ kind: `item`, name: `Frenzy`, id: `frenzy` },
			{ kind: `item`, name: `Headshot Booster`, id: `headshot-booster` },
			{ kind: `item`, name: `Healing Nova`, id: `healing-nova` },
			{ kind: `item`, name: `Healing Rite`, id: `healing-rite` },
			{ kind: `item`, name: `Infuser`, id: `infuser` },
			{ kind: `item`, name: `Knockdown`, id: `knockdown` },
			{ kind: `item`, name: `Leech`, id: `leech` },
			{ kind: `item`, name: `Lucky Shot`, id: `lucky-shot` },
			{ kind: `item`, name: `Magic Carpet`, id: `magic-carpet` },
			{ kind: `item`, name: `Majestic Leap`, id: `majestic-leap` },
			{ kind: `item`, name: `Melee Charge`, id: `melee-charge` },
			{ kind: `item`, name: `Metal Skin`, id: `metal-skin` },
			{ kind: `item`, name: `Monster Rounds`, id: `monster-rounds` },
			{ kind: `item`, name: `Mystic Reverb`, id: `mystic-reverb` },
			{ kind: `item`, name: `Mystic Slow`, id: `mystic-slow` },
			{ kind: `item`, name: `Point Blank`, id: `point-blank` },
			{ kind: `item`, name: `Rapid Recharge`, id: `rapid-recharge` },
			{ kind: `item`, name: `Rapid Rounds`, id: `rapid-rounds` },
			{ kind: `item`, name: `Refresher`, id: `refresher` },
			{ kind: `item`, name: `Rescue Beam`, id: `rescue-beam` },
			{ kind: `item`, name: `Restorative Locket`, id: `restorative-locket` },
			{ kind: `item`, name: `Restorative Shot`, id: `restorative-shot` },
			{ kind: `item`, name: `Shadow Weave`, id: `shadow-weave` },
			{ kind: `item`, name: `Sharpshooter`, id: `sharpshooter` },
			{ kind: `item`, name: `Silencer`, id: `silencer` },
			{ kind: `item`, name: `Slowing Hex`, id: `slowing-hex` },
			{ kind: `item`, name: `Spiritual Overflow`, id: `spiritual-overflow` },
			{ kind: `item`, name: `Suppressor`, id: `suppressor` },
			{ kind: `item`, name: `Surge of Power`, id: `surge-of-power` },
			{ kind: `item`, name: `Titanic Magazine`, id: `titanic-magazine` },
			{ kind: `item`, name: `Toxic Bullets`, id: `toxic-bullets` },
			{ kind: `item`, name: `Unstoppable`, id: `unstoppable` },
			{ kind: `item`, name: `Veil Walker`, id: `veil-walker` }
		],
		related: []
	},
	ce = ee(
		`<!> <!> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li> <li></li></ul> <!></div> <div><!> <ul><li></li> <li><!> <!></li> <li><!> <!></li></ul> <!></div></div> <div><!> <div><!> <!></div> <div><!> <ul><li><!> <!></li> <li></li></ul> <!></div> <div><!> <ul><li><!> <!></li> <li></li> <li></li> <li></li></ul> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <div><!> <div><!> <!></div> <div><!> <!></div></div> <!> <!> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li><!> <!></li></ul> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <ul><li></li> <li><!> <!></li></ul> <!></div>`,
		1
	);
function le(ee) {
	var re = ce(),
		oe = ne(re);
	t(
		oe,
		() => `<h2 id="general-changes" data-mog-section="">General Changes</h2>
<ul><li>Added a new hero, Raven, to Hero Labs</li><li>Added park theming to purple lane</li><li>Added park backdrop to park side of map</li><li>Updated tree models to new visual style and added player collision to canopies</li><li>For each player on the main leaderboard, you can see their top 3 heroes as well as their overall skill rating</li><li>Moved the post-game survey to the final score screen</li><li>Added text box field to the post-game survey</li><li>Muting a player now also silences map drawing, pings, and chatwheel messages</li><li>Various rendering performance improvements on map assets</li><li>Added two new setting options &quot;Force English Hero Names&quot; and &quot;Force English Item Names&quot;, which will display those values in English regardless of your chosen language</li><li>Added Toggle Crouch as a new keybind</li><li>Added a new setting option: &quot;Additional Build Search Language&quot;, which lets you select a language to search for when requesting builds in addition to the current display language of the client.</li><li>Fixed shop search not working in the shop when opened from Resources</li><li>Revisions to melee parry effect and removal of the parry fail effect to make parries more clear</li><li>Tweaked falloff range and toned down bass frequencies of hotel music</li><li>Added Pocket Barrage cast delay sound</li><li>Updated Pocket Enchanted Satchel cast sound</li><li>Passive cooldown indicator now shows when the item is off cooldown instead of 1 second before</li><li>Fixed invulnerable-to-debuff sound effect playing at wrong times</li><li>Fixed melee damage audio playing despite no damage dealt</li><li>Fixed rejuv collect sound playing from wrong location in hero sandbox</li><li>Updated parry cast and parry success sounds</li><li>Mirage now has custom animations for most of his core movement</li><li>Fixed being able to wall jump off of the same surface multiple times</li><li>Fixed the Damage Report UI clipping into the shop in Sandbox mode</li><li>Fixed shop showing with a broken build tab if you had previously navigated to the hero builds, then opened it from Resources</li><li>Fixed clicking on minimap not taking you to that location as a spectator</li><li>Fade rooftop antenna ambient effects so that they are not visible at a distance</li><li>Visual revisions to Quantum entanglement effect</li><li>Reverted recent updates to Shiv run animations</li><li>Increased volume and adjusted the mix of sounds for firing while disarmed and using abilities while silenced</li><li>Lash&#x27;s Flog impact sound adjusted for better feedback for attacking player</li><li>Fixed bug preventing purchase sound from playing when buying/quickbuying Active or Imbued items</li><li>Visual updates to Mirage muzzle flash and tracers</li><li>Updated Bullet Flurry tracers to be spirit-based</li><li>Fixed Bebop&#x27;s bomb damage growth not being reflected in the tooltip</li><li>Fixed Grey Talon&#x27;s spirit power growth from his ult not being reflected in the shop</li><li>Fix to Yamato Shadow Transformation visuals when duration is extended after killing an enemy</li><li>Fixed some item sounds playing on caster instead of target</li><li>Updated Krill VO - largely remastering pass, but some new content</li><li>Updated Ivy VO - largely remastering pass, but also fixed some lines with Spanish pronunciation issues</li><li>Fixed a regression where Kelvin referenced Grey Talon incorrectly</li><li>Updated Divine Barrier cast sound</li><li>Added Telemetry HUD options to the settings menu. The Telemetry HUD is an in-game HUD which can be used to monitor the frame rate and network conditions. The Telemetry HUD can be enabled under Settings &gt; Game. More information on the HUD can be found here: https://help.steampowered.com/en/faqs/view/5E6F-5B36-5485-F6B9</li><li>Added new Learn to Play tutorial images in collaboration with Toastyghostey (https://www.instagram.com/toastyghostey/)</li><li>Steam Input Support:</li><li>Added support for new Crouch Toggle button</li><li>Added 3 new Official Control Schemes: { Standard | Gyro | FlickStick }. Thanks to @FlickStickVids for consultation.</li><li>Added versioning system to Configs, so that outdated configs are unloaded</li><li>Added an Extra Competitive option to allow players to control what type of players are placed on their team. If you prefer to play with higher levels of coordination, communication, and competitiveness, then you can use this option to tell the matchmaker to build your team with like-minded allies. This option will sometimes be inactive in scenarios where the pool is very shallow (large portions of Eternus, off peak hours like 5am, extremely long queue, etc.), but otherwise in most normal scenarios the matchmaker will attempt to find you similar players.</li><li>The new Extra Competitive option, Incoming Chat, and Lane Preference (party only) settings are now collected within a &#x27;Queue Options&#x27; button on the dashboard below the profile area</li><li>The recent change to increase party size allowed at the top MMR (from 2 to 3) reverted for Eternus and up, but maintained for Ascendant</li><li>The matchmaker will now try to prioritize each team having at least 2 frontliners when it has the option to do so</li><li>Ability Range stat now has diminishing stacking</li><li>Ability Duration stat now has diminishing stacking</li><li>Fire Rate now has a minimum final value of -50%</li><li>Heroes now have +0.5 Sprint</li><li>Sprint Boots reduced from +2 Sprint to +1.5</li><li>Enduring Speed reduced from +2 Sprint to +1.5</li><li>Carrying Urn now sets and limits your movespeed to a fixed 13 (this includes things like Ivy Air Drop). It no longer provides sprint. The speed cannot be reduced or increased.</li><li>Urn spawn point now alternates left and right starting with left, rather than being random</li><li>Shooting a trooper on a zipline now causes other troopers near it on the zipline to dismount as well</li><li>Flying over buildings no longer causes you to get zapped, only standing on the building does</li><li>Patron HP reduced from 10k to 7.5k</li><li>Downed Patron HP reduced from 18k to 13.5k</li><li>Patron HP grows by 250/Min starting 20 min</li><li>Downed Patron HP grows by 450/Min starting 20 min (overall, these are -25% HP at 20 min, 0% at 30 min, and +25% at 40 min)</li><li>Added a tick based souls system that gives the bottom two net worth players on the team a small amount of souls per second. The amount of souls available to distribute to the bottom two players is based on the souls gathered by your team (2% and 1%). This occurs after the laning phase.</li><li>Added new limiting function for the soul orb duplication abuses during the laning phase. You shouldn&#x27;t experience any real difference in normal gameplay:</li><li>Reverted a few changes recently related to soul duplication issues</li><li>Reverted: - Guardians now deal 25% more damage to troopers</li><li>Reverted: - Guardians now take 25% more damage from troopers/players</li><li>Reverted: - Range to be considered for souls reduced by 5m</li><li>Reverted: - Troopers now do 20% more damage to each other</li><li>Basic Magazine: Weapon Damage reduced from 15% to 12%</li><li>High-Velocity Mag: Weapon Damage reduced from 13% to 11%</li><li>Hollow Point Ward: Threshold increased from 60% to 65%</li><li>Hollow Point Ward: Weapon Damage reduced from 22% to 20%</li><li>Spellslinger Headshots: Proc bonus changed from 3% Spirit Power to 3% Spirit Amp</li><li>Enchanter&#x27;s Barrier: Cooldown reduction reduced from 8% to 6%</li><li>Return Fire no longer has +9 Spirit Power</li><li>Return Fire now has +3 HP Regen</li><li>Return Fire now has +10% Ammo</li><li>Debuff Remover: Buff duration increased from 4s to 5s</li><li>Debuff Remover: Heal on active increased from 10% Max HP to 300 HP</li><li>Withering Whip: Duration increased from 4.5s to 5s</li><li>Withering Whip: Bullet Resist reduced from -11% to -12%</li><li>Silence Glyph: Now pierces through all enemies in the path</li><li>Silence Glyph: Projectile and collision size increased by 40%</li></ul>
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
<ul><li>Bullet Damage decreased from 4.68 to 4.5</li></ul>
`
	);
	var ue = i(le, 2);
	n(ue, 1, `ability siphon-life`);
	var de = r(ue);
	t(
		de,
		() => `
<p><a href="/ability/siphon-life"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Siphon Life change history</a></p>
<h4 id="siphon-life"><a href="/ability/siphon-life">Siphon Life</a></h4>
<ul><li>Spirit Siphon spirit scaling increased from 0.5 to 0.65</li></ul>
`
	);
	var fe = i(de, 2);
	(a(fe, { kind: `hero`, name: `Abrams`, ability: `Siphon Life` }), e(ue), e(s));
	var c = i(s, 2);
	n(c, 1, `hero bebop`);
	var pe = r(c);
	t(
		pe,
		() => `
<p><a href="/hero/bebop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Bebop patch history</a></p>
<h3 id="bebop"><a href="/hero/bebop">Bebop</a></h3>
`
	);
	var l = i(pe, 2);
	n(l, 1, `ability uppercut`);
	var me = r(l);
	t(
		me,
		() => `
<h4 id="uppercut">Uppercut</h4>
<ul><li>Uppercut now only locks enemies out of air control for a max of 0.5s (down from 1s)</li></ul>
`
	);
	var he = i(me, 2);
	(a(he, { kind: `hero`, name: `Bebop`, ability: `Uppercut` }), e(l));
	var ge = i(l, 2);
	n(ge, 1, `ability hook`);
	var _e = r(ge);
	t(
		_e,
		() => `
<h4 id="hook">Hook</h4>
<ul><li>Hook now shows a hero icon when you connect with a target</li><li>Hook delay reduced when pulling allies</li><li>Hook T1 now also improves melee damage</li></ul>
`
	);
	var ve = i(_e, 2);
	(a(ve, { kind: `hero`, name: `Bebop`, ability: `Hook` }), e(ge), e(c));
	var u = i(c, 2);
	n(u, 1, `hero dynamo`);
	var ye = r(u);
	t(
		ye,
		() => `
<p><a href="/hero/dynamo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Dynamo patch history</a></p>
<h3 id="dynamo"><a href="/hero/dynamo">Dynamo</a></h3>
`
	);
	var d = i(ye, 2);
	n(d, 1, `ability quantum-entanglement`);
	var be = r(d);
	t(
		be,
		() => `
<p><a href="/ability/quantum-entanglement"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Quantum Entanglement change history</a></p>
<h4 id="quantum-entanglement"><a href="/ability/quantum-entanglement">Quantum Entanglement</a></h4>
<ul><li>Fixed Quantum Entanglement not deselecting if you get silenced while targeting</li></ul>
`
	);
	var xe = i(be, 2);
	(a(xe, { kind: `hero`, name: `Dynamo`, ability: `Quantum Entanglement` }), e(d));
	var f = i(d, 2);
	n(f, 1, `ability kinetic-pulse`);
	var Se = r(f);
	t(
		Se,
		() => `
<p><a href="/ability/kinetic-pulse"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Pulse change history</a></p>
<h4 id="kinetic-pulse"><a href="/ability/kinetic-pulse">Kinetic Pulse</a></h4>
<ul><li>Kinetic Pulse T2 now affects melee damage too</li></ul>
`
	);
	var Ce = i(Se, 2);
	(a(Ce, { kind: `hero`, name: `Dynamo`, ability: `Kinetic Pulse` }), e(f));
	var p = i(f, 2);
	n(p, 1, `ability rejuvenating-aurora`);
	var we = r(p);
	t(
		we,
		() => `
<p><a href="/ability/rejuvenating-aurora"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Rejuvenating Aurora change history</a></p>
<h4 id="rejuvenating-aurora"><a href="/ability/rejuvenating-aurora">Rejuvenating Aurora</a></h4>
<ul><li>Fixed Magic Carpet + Dynamo heal interaction</li></ul>
`
	);
	var Te = i(we, 2);
	(a(Te, { kind: `hero`, name: `Dynamo`, ability: `Rejuvenating Aurora` }), e(p));
	var Ee = i(p, 2);
	n(Ee, 1, `ability singularity`);
	var De = r(Ee);
	t(
		De,
		() => `
<p><a href="/ability/singularity"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Singularity change history</a></p>
<h4 id="singularity"><a href="/ability/singularity">Singularity</a></h4>
`
	);
	var Oe = i(De, 2),
		ke = r(Oe),
		Ae = r(ke);
	t(Ae, () => `Singularity cooldown increased from 191s to 215s`);
	var je = i(Ae, 2);
	(o(je, {
		kind: `hero`,
		name: `Dynamo`,
		groupIndex: 3,
		bulletIndex: 0,
		text: `Singularity cooldown increased from 191s to 215s`
	}),
		e(ke));
	var Me = i(ke, 2);
	(t(Me, () => `Singularity now deals half damage to objectives`, !0), e(Me));
	var Ne = i(Me, 2);
	(t(
		Ne,
		() => `Singularity fixed tooltip referencing knock-up that it doesn&#x27;t do`,
		!0
	),
		e(Ne),
		e(Oe));
	var Pe = i(Oe, 2);
	(a(Pe, { kind: `hero`, name: `Dynamo`, ability: `Singularity` }), e(Ee), e(u));
	var m = i(u, 2);
	n(m, 1, `hero grey-talon`);
	var Fe = r(m);
	t(
		Fe,
		() => `
<p><a href="/hero/grey-talon"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Grey Talon patch history</a></p>
<h3 id="grey-talon"><a href="/hero/grey-talon">Grey Talon</a></h3>
`
	);
	var h = i(Fe, 2);
	n(h, 1, `ability spirit-snare`);
	var Ie = r(h);
	t(
		Ie,
		() => `
<p><a href="/ability/spirit-snare"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Spirit Snare change history</a></p>
<h4 id="spirit-snare"><a href="/ability/spirit-snare">Spirit Snare</a></h4>
<ul><li>Immobilizing Trap renamed to Spirit Snare</li><li>Spirit Snare now applies a Curse debuff for 1.75s to all enemies in the radius when it triggers instead of a tether</li><li>Spirit Snare T2 no longer increases slow by 1s</li><li>Spirit Snare T2 now increases Curse debuff by 0.5s</li></ul>
`
	);
	var Le = i(Ie, 2);
	(a(Le, { kind: `hero`, name: `Grey Talon`, ability: `Spirit Snare` }), e(h));
	var Re = i(h, 2);
	n(Re, 1, `ability charged-shot`);
	var ze = r(Re);
	t(
		ze,
		() => `
<p><a href="/ability/charged-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Charged Shot change history</a></p>
<h4 id="charged-shot"><a href="/ability/charged-shot">Charged Shot</a></h4>
<ul><li>You can now shoot Charged Shot onto Spirit Snare center to trigger it to detonate immediately in a 30% increased radius</li><li>Charged Shot can now secure orbs</li></ul>
`
	);
	var Be = i(ze, 2);
	(a(Be, { kind: `hero`, name: `Grey Talon`, ability: `Charged Shot` }), e(Re), e(m));
	var g = i(m, 2);
	n(g, 1, `hero haze`);
	var Ve = r(g);
	t(
		Ve,
		() => `
<p><a href="/hero/haze"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Haze patch history</a></p>
<h3 id="haze"><a href="/hero/haze">Haze</a></h3>
`
	);
	var _ = i(Ve, 2);
	n(_, 1, `ability smoke-bomb`);
	var He = r(_);
	t(
		He,
		() => `
<p><a href="/ability/smoke-bomb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Smoke Bomb change history</a></p>
<h4 id="smoke-bomb"><a href="/ability/smoke-bomb">Smoke Bomb</a></h4>
<ul><li>Smoke Bomb T1 Sprint reduced from +6 to +5</li><li>Smoke Bomb T3 charge time reduced from 10s to 7s</li></ul>
`
	);
	var Ue = i(He, 2);
	(a(Ue, { kind: `hero`, name: `Haze`, ability: `Smoke Bomb` }), e(_));
	var v = i(_, 2);
	n(v, 1, `ability fixation`);
	var We = r(v);
	t(
		We,
		() => `
<p><a href="/ability/fixation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fixation change history</a></p>
<h4 id="fixation"><a href="/ability/fixation">Fixation</a></h4>
<ul><li>Fixed Fixation not working correctly with debuff resist</li><li>Fixation T3 reduced from 0.15 to 0.12</li></ul>
`
	);
	var Ge = i(We, 2);
	(a(Ge, { kind: `hero`, name: `Haze`, ability: `Fixation` }), e(v));
	var y = i(v, 2);
	n(y, 1, `ability sleep-dagger`);
	var Ke = r(y);
	t(
		Ke,
		() => `
<p><a href="/ability/sleep-dagger"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Sleep Dagger change history</a></p>
<h4 id="sleep-dagger"><a href="/ability/sleep-dagger">Sleep Dagger</a></h4>
<ul><li>Sleep state no longer disables the target. It instead allows them to move at 2 m/s and be unable to take any other action (including stamina, mantle, parry etc). The target still wakes up on damage.</li><li>Sleep dagger now takes effect immediately, rather than after a brief delay</li><li>Fixed creeps sometimes attacking and waking on sleeping targets</li></ul>
`
	);
	var qe = i(Ke, 2);
	(a(qe, { kind: `hero`, name: `Haze`, ability: `Sleep Dagger` }), e(y));
	var Je = i(y, 2);
	n(Je, 1, `ability bullet-dance`);
	var Ye = r(Je);
	t(
		Ye,
		() => `
<p><a href="/ability/bullet-dance"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Bullet Dance change history</a></p>
<h4 id="bullet-dance"><a href="/ability/bullet-dance">Bullet Dance</a></h4>
`
	);
	var Xe = i(Ye, 2),
		Ze = r(Xe),
		Qe = r(Ze);
	t(Qe, () => `Bullet Dance cooldown increased from 138s to 150s`);
	var $e = i(Qe, 2);
	(o($e, {
		kind: `hero`,
		name: `Haze`,
		groupIndex: 3,
		bulletIndex: 0,
		text: `Bullet Dance cooldown increased from 138s to 150s`
	}),
		e(Ze));
	var et = i(Ze, 2);
	(t(et, () => `Bullet Dance T1 reduced from +7 to +6 Spirit Damage`, !0), e(et));
	var tt = i(et, 2);
	(t(tt, () => `Bullet Dance T2 increased from -38s to -40s`, !0), e(tt));
	var nt = i(tt, 2);
	(t(
		nt,
		() =>
			`Bullet Dance fixed an issue causing the game to freeze for the duration of the ult channel`,
		!0
	),
		e(nt),
		e(Xe));
	var rt = i(Xe, 2);
	(a(rt, { kind: `hero`, name: `Haze`, ability: `Bullet Dance` }), e(Je), e(g));
	var b = i(g, 2);
	n(b, 1, `hero infernus`);
	var it = r(b);
	t(
		it,
		() => `
<p><a href="/hero/infernus"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infernus patch history</a></p>
<h3 id="infernus"><a href="/hero/infernus">Infernus</a></h3>
`
	);
	var x = i(it, 2);
	n(x, 1, `ability flame-dash`);
	var at = r(x);
	t(
		at,
		() => `
<p><a href="/ability/flame-dash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flame Dash change history</a></p>
<h4 id="flame-dash"><a href="/ability/flame-dash">Flame Dash</a></h4>
`
	);
	var ot = i(at, 2),
		st = r(ot),
		ct = r(st);
	t(ct, () => `Flame Dash cooldown reduced from 40s to 35s`);
	var lt = i(ct, 2);
	(o(lt, {
		kind: `hero`,
		name: `Infernus`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Flame Dash cooldown reduced from 40s to 35s`
	}),
		e(st));
	var ut = i(st, 2);
	(t(ut, () => `Flame Dash T3 changed from -19s CD to -15s`, !0), e(ut));
	var dt = i(ut, 2);
	(t(dt, () => `Flame Dash T3 now also makes the ability charged (15s charge time)`, !0),
		e(dt),
		e(ot));
	var ft = i(ot, 2);
	(a(ft, { kind: `hero`, name: `Infernus`, ability: `Flame Dash` }), e(x));
	var pt = i(x, 2);
	n(pt, 1, `ability afterburn`);
	var mt = r(pt);
	t(
		mt,
		() => `
<p><a href="/ability/afterburn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Afterburn change history</a></p>
<h4 id="afterburn"><a href="/ability/afterburn">Afterburn</a></h4>
<ul><li>Afterburn spirit scaling increased from 0.5 to 0.6</li></ul>
`
	);
	var ht = i(mt, 2);
	(a(ht, { kind: `hero`, name: `Infernus`, ability: `Afterburn` }), e(pt), e(b));
	var S = i(b, 2);
	n(S, 1, `hero ivy`);
	var gt = r(S);
	t(
		gt,
		() => `
<p><a href="/hero/ivy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ivy patch history</a></p>
<h3 id="ivy"><a href="/hero/ivy">Ivy</a></h3>
<ul><li>Melee damage and growth reduced by 15%</li><li>Starting Health reduced from 550 to 525</li></ul>
`
	);
	var C = i(gt, 2);
	n(C, 1, `ability kudzu-connection`);
	var _t = r(C);
	t(
		_t,
		() => `
<p><a href="/ability/kudzu-connection"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kudzu Connection change history</a></p>
<h4 id="kudzu-connection"><a href="/ability/kudzu-connection">Kudzu Connection</a></h4>
<ul><li>Watcher&#x27;s Covenant fixed to replicate healing even when you are full</li></ul>
`
	);
	var vt = i(_t, 2);
	(a(vt, { kind: `hero`, name: `Ivy`, ability: `Kudzu Connection` }), e(C));
	var w = i(C, 2);
	n(w, 1, `ability watcher-s-covenant`);
	var yt = r(w);
	t(
		yt,
		() => `
<h4 id="watcher-s-covenant">Watcher&#x27;s Covenant</h4>
<ul><li>Watcher&#x27;s Covenant now initially locks onto the target in your facing direction if there is one</li></ul>
`
	);
	var bt = i(yt, 2);
	(a(bt, { kind: `hero`, name: `Ivy`, ability: `Watcher's Covenant` }), e(w));
	var T = i(w, 2);
	n(T, 1, `ability stone-form`);
	var xt = r(T);
	t(
		xt,
		() => `
<p><a href="/ability/stone-form"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stone Form change history</a></p>
<h4 id="stone-form"><a href="/ability/stone-form">Stone Form</a></h4>
<ul><li>Stone Form now shows the Ivy player a visible radius indicator for where your hero will hit</li></ul>
`
	);
	var St = i(xt, 2);
	(a(St, { kind: `hero`, name: `Ivy`, ability: `Stone Form` }), e(T));
	var E = i(T, 2);
	n(E, 1, `ability kudzu-bomb`);
	var Ct = r(E);
	t(
		Ct,
		() => `
<h4 id="kudzu-bomb">Kudzu Bomb</h4>
<ul><li>Kudzu Bomb now grows on the ground if it hits geo instead of floating in the air</li></ul>
`
	);
	var wt = i(Ct, 2);
	(a(wt, { kind: `hero`, name: `Ivy`, ability: `Kudzu Bomb` }), e(E));
	var Tt = i(E, 2);
	n(Tt, 1, `ability air-drop`);
	var Et = r(Tt);
	t(
		Et,
		() => `
<p><a href="/ability/air-drop"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Air Drop change history</a></p>
<h4 id="air-drop"><a href="/ability/air-drop">Air Drop</a></h4>
`
	);
	var Dt = i(Et, 2),
		Ot = r(Dt),
		kt = r(Ot);
	t(kt, () => `Air Drop damage reduced from 150 to 125`);
	var At = i(kt, 2);
	(o(At, {
		kind: `hero`,
		name: `Ivy`,
		groupIndex: 5,
		bulletIndex: 0,
		text: `Air Drop damage reduced from 150 to 125`
	}),
		e(Ot));
	var jt = i(Ot, 2);
	(t(jt, () => `Fixed Phantom Strike not grounding Ivy when using Air Drop`, !0), e(jt));
	var Mt = i(jt, 2);
	(t(
		Mt,
		() =>
			`Air Drop now lets you choose to significantly reduce your initial upward momentum by holding the fly key down while casting the ability`,
		!0
	),
		e(Mt),
		e(Dt));
	var Nt = i(Dt, 2);
	(a(Nt, { kind: `hero`, name: `Ivy`, ability: `Air Drop` }), e(Tt), e(S));
	var D = i(S, 2);
	n(D, 1, `hero kelvin`);
	var Pt = r(D);
	t(
		Pt,
		() => `
<p><a href="/hero/kelvin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Kelvin patch history</a></p>
<h3 id="kelvin"><a href="/hero/kelvin">Kelvin</a></h3>
<ul><li>Fixed some issues with being unable to shoot over half-height cover</li></ul>
`
	);
	var O = i(Pt, 2);
	n(O, 1, `ability frost-grenade`);
	var Ft = r(O);
	t(
		Ft,
		() => `
<p><a href="/ability/frost-grenade"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frost Grenade change history</a></p>
<h4 id="frost-grenade"><a href="/ability/frost-grenade">Frost Grenade</a></h4>
<ul><li>Frost Grenade now also reduces Stamina Regeneration during the slow duration</li></ul>
`
	);
	var It = i(Ft, 2);
	(a(It, { kind: `hero`, name: `Kelvin`, ability: `Frost Grenade` }), e(O));
	var Lt = i(O, 2);
	n(Lt, 1, `ability frozen-shelter`);
	var Rt = r(Lt);
	t(
		Rt,
		() => `
<p><a href="/ability/frozen-shelter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Frozen Shelter change history</a></p>
<h4 id="frozen-shelter"><a href="/ability/frozen-shelter">Frozen Shelter</a></h4>
`
	);
	var zt = i(Rt, 2),
		Bt = r(zt);
	(t(
		Bt,
		() =>
			`Frozen Shelter now created on key up. While the key is down an outline of the area will be shown`,
		!0
	),
		e(Bt));
	var Vt = i(Bt, 2),
		Ht = r(Vt);
	t(Ht, () => `Frozen Shelter cooldown increased from 127s to 130s`);
	var Ut = i(Ht, 2);
	(o(Ut, {
		kind: `hero`,
		name: `Kelvin`,
		groupIndex: 2,
		bulletIndex: 1,
		text: `Frozen Shelter cooldown increased from 127s to 130s`
	}),
		e(Vt));
	var Wt = i(Vt, 2);
	(t(Wt, () => `Frozen Shelter T2 increased from -38s to -40s`, !0), e(Wt), e(zt));
	var Gt = i(zt, 2);
	(a(Gt, { kind: `hero`, name: `Kelvin`, ability: `Frozen Shelter` }), e(Lt), e(D));
	var k = i(D, 2);
	n(k, 1, `hero lady-geist`);
	var Kt = r(k);
	t(
		Kt,
		() => `
<p><a href="/hero/lady-geist"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lady Geist patch history</a></p>
<h3 id="lady-geist"><a href="/hero/lady-geist">Lady Geist</a></h3>
`
	);
	var A = i(Kt, 2);
	n(A, 1, `ability malice`);
	var qt = r(A);
	t(
		qt,
		() => `
<p><a href="/ability/malice"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Malice change history</a></p>
<h4 id="malice"><a href="/ability/malice">Malice</a></h4>
<ul><li>Malice can now secure orbs</li></ul>
`
	);
	var Jt = i(qt, 2);
	(a(Jt, { kind: `hero`, name: `Lady Geist`, ability: `Malice` }), e(A));
	var j = i(A, 2);
	n(j, 1, `ability soul-exchange`);
	var Yt = r(j);
	t(
		Yt,
		() => `
<p><a href="/ability/soul-exchange"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Soul Exchange change history</a></p>
<h4 id="soul-exchange"><a href="/ability/soul-exchange">Soul Exchange</a></h4>
<ul><li>Soul Exchange T2 changed from &quot;-10% Min Health&quot; to &quot;On cast +40% Fire Rate for 8s&quot;</li><li>Soul Exchange T3 changed from &quot;On cast, +40% Fire Rate and +40% Spirit Resist for 8s&quot; to &quot;Silences enemies in 15m radius for 3s&quot;</li></ul>
`
	);
	var Xt = i(Yt, 2);
	(a(Xt, { kind: `hero`, name: `Lady Geist`, ability: `Soul Exchange` }), e(j));
	var Zt = i(j, 2);
	n(Zt, 1, `ability life-drain`);
	var Qt = r(Zt);
	t(
		Qt,
		() => `
<p><a href="/ability/life-drain"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Life Drain change history</a></p>
<h4 id="life-drain"><a href="/ability/life-drain">Life Drain</a></h4>
<ul><li>Life Drain duration increased from 2s to 2.5s</li><li>Life Drain T3 changed from &quot;Enemy is Silenced while being Life Drained&quot; to &quot;Ability becomes charged and grants +1 Charge&quot;. You can cast multiple Life Drains at the same time on different targets, no Charge Time.</li></ul>
`
	);
	var $t = i(Qt, 2);
	(a($t, { kind: `hero`, name: `Lady Geist`, ability: `Life Drain` }), e(Zt), e(k));
	var M = i(k, 2);
	n(M, 1, `hero lash`);
	var en = r(M);
	t(
		en,
		() => `
<p><a href="/hero/lash"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lash patch history</a></p>
<h3 id="lash"><a href="/hero/lash">Lash</a></h3>
`
	);
	var N = i(en, 2);
	n(N, 1, `ability ground-strike`);
	var tn = r(N);
	t(
		tn,
		() => `
<p><a href="/ability/ground-strike"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Ground Strike change history</a></p>
<h4 id="ground-strike"><a href="/ability/ground-strike">Ground Strike</a></h4>
<ul><li>Ground Strike T1 improved from -9.5s Cooldown to -10s</li></ul>
`
	);
	var nn = i(tn, 2);
	(a(nn, { kind: `hero`, name: `Lash`, ability: `Ground Strike` }), e(N));
	var P = i(N, 2);
	n(P, 1, `ability death-slam`);
	var rn = r(P);
	t(
		rn,
		() => `
<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>
<h4 id="death-slam"><a href="/ability/death-slam">Death Slam</a></h4>
`
	);
	var an = i(rn, 2),
		on = r(an),
		sn = r(on);
	t(sn, () => `Death Slam cooldown increased from 137s to 140s`);
	var cn = i(sn, 2);
	(o(cn, {
		kind: `hero`,
		name: `Lash`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `Death Slam cooldown increased from 137s to 140s`
	}),
		e(on));
	var ln = i(on, 2);
	(t(ln, () => `Death Slam channel time increased from 2s to 2.3s`, !0), e(ln), e(an));
	var un = i(an, 2);
	(a(un, { kind: `hero`, name: `Lash`, ability: `Death Slam` }), e(P));
	var F = i(P, 2);
	n(F, 1, `ability death-slam-impact`);
	var dn = r(F);
	t(
		dn,
		() => `
<h4 id="death-slam-impact"><a href="/ability/death-slam">Death Slam Impact</a></h4>
`
	);
	var fn = i(dn, 2),
		pn = r(fn),
		mn = r(pn);
	t(mn, () => `Death Slam Impact radius increased from 5m to 6m`);
	var hn = i(mn, 2);
	(o(hn, {
		kind: `hero`,
		name: `Lash`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Death Slam Impact radius increased from 5m to 6m`
	}),
		e(pn));
	var gn = i(pn, 2);
	(t(gn, () => `Death Slam cone angle increased from 75 to 85`, !0), e(gn));
	var _n = i(gn, 2);
	(t(_n, () => `Death Slam cast range increased from 18m to 20m`, !0), e(_n), e(fn));
	var vn = i(fn, 2);
	(a(vn, { kind: `hero`, name: `Lash`, ability: `Death Slam Impact` }), e(F));
	var yn = i(F, 2);
	n(yn, 1, `ability death-slam`);
	var bn = r(yn);
	t(
		bn,
		() => `
<p><a href="/ability/death-slam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Death Slam change history</a></p>
<h4 id="death-slam-1"><a href="/ability/death-slam">Death Slam</a></h4>
<ul><li>Death Slam T2 changed from +100 damage to -30s Cooldown</li><li>Death Slam T3 changed from -56s Cooldown to Impact Area Stuns for 1s</li><li>Death Slam fixed a rendering issue that could lead to crashes, especially in tight spaces like Mid Boss arena</li></ul>
`
	);
	var xn = i(bn, 2);
	(a(xn, { kind: `hero`, name: `Lash`, ability: `Death Slam` }), e(yn), e(M));
	var I = i(M, 2);
	n(I, 1, `hero mcginnis`);
	var Sn = r(I);
	t(
		Sn,
		() => `
<p><a href="/hero/mcginnis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> McGinnis patch history</a></p>
<h3 id="mcginnis"><a href="/hero/mcginnis">McGinnis</a></h3>
`
	);
	var L = i(Sn, 2);
	n(L, 1, `ability mini-turret`);
	var Cn = r(L);
	t(
		Cn,
		() => `
<p><a href="/ability/mini-turret"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Mini Turret change history</a></p>
<h4 id="mini-turret"><a href="/ability/mini-turret">Mini Turret</a></h4>
<ul><li>Mini Turrets HP gain per boon increased from 20 to 30</li></ul>
`
	);
	var wn = i(Cn, 2);
	(a(wn, { kind: `hero`, name: `McGinnis`, ability: `Mini Turret` }), e(L));
	var R = i(L, 2);
	n(R, 1, `ability mini-turrets`);
	var Tn = r(R);
	t(
		Tn,
		() => `
<h4 id="mini-turrets"><a href="/ability/mini-turret">Mini Turrets</a></h4>
<ul><li>Mini Turrets no longer limit the damage they take to 33% of HP per second</li><li>Mini Turrets now have a minimum lifetime of 4s. If they are killed during this time, they will be marked for death regardless of what happens during that time. There will be a visual indication that they are malfunctioning/dying.</li></ul>
`
	);
	var En = i(Tn, 2);
	(a(En, { kind: `hero`, name: `McGinnis`, ability: `Mini Turrets` }), e(R));
	var Dn = i(R, 2);
	n(Dn, 1, `ability mini-turrets-fire-rate`);
	var On = r(Dn);
	t(
		On,
		() => `
<h4 id="mini-turrets-fire-rate"><a href="/ability/mini-turret">Mini Turrets Fire Rate</a></h4>
<ul><li>Mini Turrets Fire Rate reduced by 20%</li></ul>
`
	);
	var kn = i(On, 2);
	(a(kn, { kind: `hero`, name: `McGinnis`, ability: `Mini Turrets Fire Rate` }),
		e(Dn),
		e(I));
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
	var B = i(An, 2);
	n(B, 1, `ability fire-scarabs`);
	var jn = r(B);
	t(
		jn,
		() => `
<p><a href="/ability/fire-scarabs"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Fire Scarabs change history</a></p>
<h4 id="fire-scarabs"><a href="/ability/fire-scarabs">Fire Scarabs</a></h4>
<ul><li>Fire Scarabs now applies its drain over 4s instead of frontloaded</li><li>Fire Scarabs no longer restricts you from hitting the same target (debuff duration refreshes)</li><li>Fire Scarabs launch window increased from 5s to 8s (can be extended by duration extender)</li></ul>
`
	);
	var Mn = i(jn, 2);
	(a(Mn, { kind: `hero`, name: `Mirage`, ability: `Fire Scarabs` }), e(B));
	var Nn = i(B, 2);
	n(Nn, 1, `ability traveler`);
	var Pn = r(Nn);
	t(
		Pn,
		() => `
<p><a href="/ability/traveler"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Traveler change history</a></p>
<h4 id="traveler"><a href="/ability/traveler">Traveler</a></h4>
<ul><li>Traveler now allows you to rotate the camera</li><li>Traveler T2 changed from &quot;-56 Cooldown&quot; to &quot;Grants Ally Traveler Benefits&quot; (if cast on an enemy, it&#x27;ll give the bonus to the closest ally hero within 30m)</li></ul>
`
	);
	var Fn = i(Pn, 2);
	(a(Fn, { kind: `hero`, name: `Mirage`, ability: `Traveler` }), e(Nn), e(z));
	var V = i(z, 2);
	n(V, 1, `hero mo-krill`);
	var In = r(V);
	t(
		In,
		() => `
<p><a href="/hero/mo-krill"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mo &amp; Krill patch history</a></p>
<h3 id="mo-krill"><a href="/hero/mo-krill">Mo &amp; Krill</a></h3>
`
	);
	var H = i(In, 2);
	n(H, 1, `ability burrow`);
	var Ln = r(H);
	t(
		Ln,
		() => `
<p><a href="/ability/burrow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Burrow change history</a></p>
<h4 id="burrow"><a href="/ability/burrow">Burrow</a></h4>
<ul><li>Burrow is no longer affected by Shoulder Charge</li></ul>
`
	);
	var Rn = i(Ln, 2);
	(a(Rn, { kind: `hero`, name: `Mo & Krill`, ability: `Burrow` }), e(H));
	var U = i(H, 2);
	n(U, 1, `ability spectral-wall`);
	var zn = r(U);
	t(
		zn,
		() => `
<p><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp" alt="Spectral Wall"  decoding="async" width="24" height="24" loading="lazy"/></p>
<h4 id="spectral-wall">Spectral Wall</h4>
<ul><li>Spectral Wall no longer hits you while you are Burrowed</li></ul>
`
	);
	var Bn = i(zn, 2);
	(a(Bn, { kind: `hero`, name: `Mo & Krill`, ability: `Spectral Wall` }), e(U));
	var W = i(U, 2);
	n(W, 1, `ability scorn`);
	var Vn = r(W);
	t(
		Vn,
		() => `
<p><a href="/ability/scorn"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Scorn change history</a></p>
<h4 id="scorn"><a href="/ability/scorn">Scorn</a></h4>
<ul><li>Scorn now heals you instantly rather than over 1s</li></ul>
`
	);
	var Hn = i(Vn, 2);
	(a(Hn, { kind: `hero`, name: `Mo & Krill`, ability: `Scorn` }), e(W));
	var Un = i(W, 2);
	n(Un, 1, `ability combo`);
	var Wn = r(Un);
	t(
		Wn,
		() => `
<p><a href="/ability/combo"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Combo change history</a></p>
<h4 id="combo"><a href="/ability/combo">Combo</a></h4>
<ul><li>Combo health gain tooltip clarified</li></ul>
`
	);
	var Gn = i(Wn, 2);
	(a(Gn, { kind: `hero`, name: `Mo & Krill`, ability: `Combo` }), e(Un), e(V));
	var G = i(V, 2);
	n(G, 1, `hero paradox`);
	var Kn = r(G);
	t(
		Kn,
		() => `
<p><a href="/hero/paradox"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Paradox patch history</a></p>
<h3 id="paradox"><a href="/hero/paradox">Paradox</a></h3>
`
	);
	var K = i(Kn, 2);
	n(K, 1, `ability time-wall-time-stop`);
	var qn = r(K);
	t(
		qn,
		() => `
<h4 id="time-wall-time-stop"><a href="/ability/time-wall">Time Wall Time Stop</a></h4>
<ul><li>Time Wall Time Stop duration reduced from 0.6s to 0.5s</li></ul>
`
	);
	var Jn = i(qn, 2);
	(a(Jn, { kind: `hero`, name: `Paradox`, ability: `Time Wall Time Stop` }), e(K));
	var q = i(K, 2);
	n(q, 1, `ability kinetic-carbine-max-stop`);
	var Yn = r(q);
	t(
		Yn,
		() => `
<h4 id="kinetic-carbine-max-stop"><a href="/ability/kinetic-carbine">Kinetic Carbine Max Stop</a></h4>
<ul><li>Kinetic Carbine Max Stop duration reduced from 0.5s to 0.4s</li></ul>
`
	);
	var Xn = i(Yn, 2);
	(a(Xn, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine Max Stop` }), e(q));
	var Zn = i(q, 2);
	n(Zn, 1, `ability kinetic-carbine`);
	var Qn = r(Zn);
	t(
		Qn,
		() => `
<p><a href="/ability/kinetic-carbine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Kinetic Carbine change history</a></p>
<h4 id="kinetic-carbine"><a href="/ability/kinetic-carbine">Kinetic Carbine</a></h4>
<ul><li>Kinetic Carbine T1 reduced from +0.5s to +0.4s</li></ul>
`
	);
	var $n = i(Qn, 2);
	(a($n, { kind: `hero`, name: `Paradox`, ability: `Kinetic Carbine` }), e(Zn), e(G));
	var J = i(G, 2);
	n(J, 1, `hero pocket`);
	var er = r(J);
	t(
		er,
		() => `
<p><a href="/hero/pocket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Pocket patch history</a></p>
<h3 id="pocket"><a href="/hero/pocket">Pocket</a></h3>
<ul><li>Health growth reduced from 31 to 27</li></ul>
`
	);
	var Y = i(er, 2);
	n(Y, 1, `ability enchanter-s-satchel`);
	var tr = r(Y);
	t(
		tr,
		() => `
<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>
<h4 id="enchanter-s-satchel"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>
<ul><li>Enchanter&#x27;s Satchel T1 increased from -4.75s to -5s</li></ul>
`
	);
	var nr = i(tr, 2);
	(a(nr, { kind: `hero`, name: `Pocket`, ability: `Enchanter's Satchel` }), e(Y));
	var X = i(Y, 2);
	n(X, 1, `ability enchanter-s-satchel-escape-duration`);
	var rr = r(X);
	t(
		rr,
		() => `
<h4 id="enchanter-s-satchel-escape-duration"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel Escape Duration</a></h4>
<ul><li>Enchanter&#x27;s Satchel Escape Duration reduced from 2s to 1.5s</li></ul>
`
	);
	var ir = i(rr, 2);
	(a(ir, {
		kind: `hero`,
		name: `Pocket`,
		ability: `Enchanter's Satchel Escape Duration`
	}),
		e(X));
	var Z = i(X, 2);
	n(Z, 1, `ability enchanter-s-satchel`);
	var ar = r(Z);
	t(
		ar,
		() => `
<p><a href="/ability/enchanters-satchel"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Enchanter&#x27;s Satchel change history</a></p>
<h4 id="enchanter-s-satchel-1"><a href="/ability/enchanters-satchel">Enchanter&#x27;s Satchel</a></h4>
<ul><li>Enchanter&#x27;s Satchel T3 now also increases Escape Duration by +0.5s</li></ul>
`
	);
	var or = i(ar, 2);
	(a(or, { kind: `hero`, name: `Pocket`, ability: `Enchanter's Satchel` }), e(Z));
	var Q = i(Z, 2);
	n(Q, 1, `ability flying-cloak`);
	var sr = r(Q);
	t(
		sr,
		() => `
<p><a href="/ability/flying-cloak"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Flying Cloak change history</a></p>
<h4 id="flying-cloak"><a href="/ability/flying-cloak">Flying Cloak</a></h4>
<ul><li>Flying Cloak duration increased from 3.2 to 3.4s (slower speed, same overall distance)</li></ul>
`
	);
	var cr = i(sr, 2);
	(a(cr, { kind: `hero`, name: `Pocket`, ability: `Flying Cloak` }), e(Q));
	var lr = i(Q, 2);
	n(lr, 1, `ability affliction`);
	var ur = r(lr);
	t(
		ur,
		() => `
<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>
<h4 id="affliction"><a href="/ability/affliction">Affliction</a></h4>
<ul><li>Affliction now immediately deals 18% of Current HP on application</li></ul>
`
	);
	var dr = i(ur, 2);
	(a(dr, { kind: `hero`, name: `Pocket`, ability: `Affliction` }), e(lr));
	var fr = i(lr, 2);
	n(fr, 1, `ability affliction-dps`);
	var pr = r(fr);
	t(
		pr,
		() => `
<h4 id="affliction-dps"><a href="/ability/affliction">Affliction DPS</a></h4>
<ul><li>Affliction DPS reduced from 27 to 12</li></ul>
`
	);
	var mr = i(pr, 2);
	(a(mr, { kind: `hero`, name: `Pocket`, ability: `Affliction DPS` }), e(fr));
	var hr = i(fr, 2);
	n(hr, 1, `ability affliction-dps-spirit-power`);
	var gr = r(hr);
	t(
		gr,
		() => `
<h4 id="affliction-dps-spirit-power"><a href="/ability/affliction">Affliction DPS Spirit Power</a></h4>
<ul><li>Affliction DPS Spirit Power scaling reduced from 0.3 to 0.22</li></ul>
`
	);
	var _r = i(gr, 2);
	(a(_r, { kind: `hero`, name: `Pocket`, ability: `Affliction DPS Spirit Power` }),
		e(hr));
	var vr = i(hr, 2);
	n(vr, 1, `ability affliction`);
	var yr = r(vr);
	t(
		yr,
		() => `
<p><a href="/ability/affliction"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Affliction change history</a></p>
<h4 id="affliction-1"><a href="/ability/affliction">Affliction</a></h4>
`
	);
	var br = i(yr, 2),
		xr = r(br),
		Sr = r(xr);
	t(Sr, () => `Affliction radius reduced from 14m to 9m`);
	var Cr = i(Sr, 2);
	(o(Cr, {
		kind: `hero`,
		name: `Pocket`,
		groupIndex: 8,
		bulletIndex: 0,
		text: `Affliction radius reduced from 14m to 9m`
	}),
		e(xr));
	var wr = i(xr, 2);
	(t(wr, () => `Affliction T3 reduced from +27 DPS to +15 DPS`, !0), e(wr));
	var Tr = i(wr, 2);
	(t(
		Tr,
		() =>
			`Affliction T3 now also increases range by +5m and increases initial damage by 5%`,
		!0
	),
		e(Tr),
		e(br));
	var Er = i(br, 2);
	(a(Er, { kind: `hero`, name: `Pocket`, ability: `Affliction` }), e(vr), e(J));
	var Dr = i(J, 2);
	n(Dr, 1, `hero seven`);
	var Or = r(Dr);
	t(
		Or,
		() => `
<p><a href="/hero/seven"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Seven patch history</a></p>
<h3 id="seven"><a href="/hero/seven">Seven</a></h3>
`
	);
	var $ = i(Or, 2);
	n($, 1, `ability storm-cloud`);
	var kr = r($);
	t(
		kr,
		() => `
<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>
<h4 id="storm-cloud"><a href="/ability/storm-cloud">Storm Cloud</a></h4>
<ul><li>Storm Cloud now grants you a secondary ability Lightning Strike. It is a one time use AoE ability. You can target anywhere in your ultimate range, after a 2s delay it releases a vertical lightning strike onto a 6m area, knocking enemies away from that radius (6m knockback) and dealing 150 Damage (1.5 spirit scaling). There is a visual indicator for enemies that that area is about to be hit.</li></ul>
`
	);
	var Ar = i(kr, 2);
	(a(Ar, { kind: `hero`, name: `Seven`, ability: `Storm Cloud` }), e($));
	var jr = i($, 2);
	n(jr, 1, `ability storm-cloud-dps`);
	var Mr = r(jr);
	t(
		Mr,
		() => `
<h4 id="storm-cloud-dps"><a href="/ability/storm-cloud">Storm Cloud DPS</a></h4>
<ul><li>Storm Cloud DPS reduced from 125 to 110</li></ul>
`
	);
	var Nr = i(Mr, 2);
	(a(Nr, { kind: `hero`, name: `Seven`, ability: `Storm Cloud DPS` }), e(jr));
	var Pr = i(jr, 2);
	n(Pr, 1, `ability storm-cloud`);
	var Fr = r(Pr);
	t(
		Fr,
		() => `
<p><a href="/ability/storm-cloud"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Storm Cloud change history</a></p>
<h4 id="storm-cloud-1"><a href="/ability/storm-cloud">Storm Cloud</a></h4>
<ul><li>Storm Cloud T3 now also allows you to float around at 2.5m/s speed</li></ul>
`
	);
	var Ir = i(Fr, 2);
	(a(Ir, { kind: `hero`, name: `Seven`, ability: `Storm Cloud` }), e(Pr), e(Dr));
	var Lr = i(Dr, 2);
	n(Lr, 1, `hero shiv`);
	var Rr = r(Lr);
	t(
		Rr,
		() => `
<p><a href="/hero/shiv"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shiv patch history</a></p>
<h3 id="shiv"><a href="/hero/shiv">Shiv</a></h3>
`
	);
	var zr = i(Rr, 2);
	n(zr, 1, `ability killing-blow`);
	var Br = r(zr);
	t(
		Br,
		() => `
<p><a href="/ability/killing-blow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Killing Blow change history</a></p>
<h4 id="killing-blow"><a href="/ability/killing-blow">Killing Blow</a></h4>
<ul><li>Fixed some targeting issues with Killing Blow</li></ul>
`
	);
	var Vr = i(Br, 2);
	(a(Vr, { kind: `hero`, name: `Shiv`, ability: `Killing Blow` }), e(zr), e(Lr));
	var Hr = i(Lr, 2);
	n(Hr, 1, `hero vindicta`);
	var Ur = r(Hr);
	t(
		Ur,
		() => `
<p><a href="/hero/vindicta"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Vindicta patch history</a></p>
<h3 id="vindicta"><a href="/hero/vindicta">Vindicta</a></h3>
<ul><li>Health reduced from 550 to 525</li></ul>
`
	);
	var Wr = i(Ur, 2);
	n(Wr, 1, `ability crow-familiar`);
	var Gr = r(Wr);
	t(
		Gr,
		() => `
<p><a href="/ability/crow-familiar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Crow Familiar change history</a></p>
<h4 id="crow-familiar"><a href="/ability/crow-familiar">Crow Familiar</a></h4>
<ul><li>Crow Familiar projectile speed increased from 3500 to 4750</li></ul>
`
	);
	var Kr = i(Gr, 2);
	(a(Kr, { kind: `hero`, name: `Vindicta`, ability: `Crow Familiar` }), e(Wr));
	var qr = i(Wr, 2);
	n(qr, 1, `ability stake`);
	var Jr = r(qr);
	t(
		Jr,
		() => `
<p><a href="/ability/stake"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Stake change history</a></p>
<h4 id="stake"><a href="/ability/stake">Stake</a></h4>
`
	);
	var Yr = i(Jr, 2),
		Xr = r(Yr),
		Zr = r(Xr);
	t(Zr, () => `Stake cooldown reduced from 42s to 40s`);
	var Qr = i(Zr, 2);
	(o(Qr, {
		kind: `hero`,
		name: `Vindicta`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Stake cooldown reduced from 42s to 40s`
	}),
		e(Xr));
	var $r = i(Xr, 2);
	(t($r, () => `Stake T2 increased from -19s Cooldown to -20s`, !0), e($r));
	var ei = i($r, 2);
	(t(ei, () => `Stake T3 reduced from +0.75s to 0.5s`, !0), e(ei));
	var ti = i(ei, 2);
	(t(ti, () => `Stake T3 now also increases capture radius by +2m`, !0), e(ti), e(Yr));
	var ni = i(Yr, 2);
	(a(ni, { kind: `hero`, name: `Vindicta`, ability: `Stake` }), e(qr));
	var ri = i(qr, 2);
	n(ri, 1, `ability assassinate`);
	var ii = r(ri);
	t(
		ii,
		() => `
<p><a href="/ability/assassinate"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Assassinate change history</a></p>
<h4 id="assassinate"><a href="/ability/assassinate">Assassinate</a></h4>
`
	);
	var ai = i(ii, 2),
		oi = r(ai);
	(t(oi, () => `Assassinate time between charges increased from 1.6s to 2s`, !0), e(oi));
	var si = i(oi, 2),
		ci = r(si);
	t(ci, () => `Assassinate base damage reduced from 130 to 120`);
	var li = i(ci, 2);
	(o(li, {
		kind: `hero`,
		name: `Vindicta`,
		groupIndex: 3,
		bulletIndex: 1,
		text: `Assassinate base damage reduced from 130 to 120`
	}),
		e(si));
	var ui = i(si, 2),
		di = r(ui);
	t(di, () => `Assassinate T2 damage reduced from 140 to 130`);
	var fi = i(di, 2);
	(o(fi, {
		kind: `hero`,
		name: `Vindicta`,
		groupIndex: 3,
		bulletIndex: 2,
		text: `Assassinate T2 damage reduced from 140 to 130`
	}),
		e(ui),
		e(ai));
	var pi = i(ai, 2);
	(a(pi, { kind: `hero`, name: `Vindicta`, ability: `Assassinate` }), e(ri), e(Hr));
	var mi = i(Hr, 2);
	n(mi, 1, `hero viscous`);
	var hi = r(mi);
	t(
		hi,
		() => `
<p><a href="/hero/viscous"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Viscous patch history</a></p>
<h3 id="viscous"><a href="/hero/viscous">Viscous</a></h3>
`
	);
	var gi = i(hi, 2);
	n(gi, 1, `ability puddle-punch`);
	var _i = r(gi);
	t(
		_i,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
<ul><li>Fixed visual parry cooldown bug with Puddle Punch</li></ul>
`
	);
	var vi = i(_i, 2);
	(a(vi, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), e(gi));
	var yi = i(gi, 2);
	n(yi, 1, `ability the-cube`);
	var bi = r(yi);
	t(
		bi,
		() => `
<p><a href="/ability/the-cube"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> The Cube change history</a></p>
<h4 id="the-cube"><a href="/ability/the-cube">The Cube</a></h4>
`
	);
	var xi = i(bi, 2),
		Si = r(xi),
		Ci = r(Si);
	t(Ci, () => `The Cube cooldown reduced from 48s to 42s`);
	var wi = i(Ci, 2);
	(o(wi, {
		kind: `hero`,
		name: `Viscous`,
		groupIndex: 1,
		bulletIndex: 0,
		text: `The Cube cooldown reduced from 48s to 42s`
	}),
		e(Si));
	var Ti = i(Si, 2);
	(t(Ti, () => `The Cube cast range reduced from 30m to 26m`, !0), e(Ti), e(xi));
	var Ei = i(xi, 2);
	(a(Ei, { kind: `hero`, name: `Viscous`, ability: `The Cube` }), e(yi));
	var Di = i(yi, 2);
	n(Di, 1, `ability puddle-punch`);
	var Oi = r(Di);
	t(
		Oi,
		() => `
<p><a href="/ability/puddle-punch"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Puddle Punch change history</a></p>
<h4 id="puddle-punch-1"><a href="/ability/puddle-punch">Puddle Punch</a></h4>
`
	);
	var ki = i(Oi, 2),
		Ai = r(ki),
		ji = r(Ai);
	t(ji, () => `Puddle Punch radius increased from 4 to 4.5`);
	var Mi = i(ji, 2);
	(o(Mi, {
		kind: `hero`,
		name: `Viscous`,
		groupIndex: 2,
		bulletIndex: 0,
		text: `Puddle Punch radius increased from 4 to 4.5`
	}),
		e(Ai));
	var Ni = i(Ai, 2);
	(t(Ni, () => `Puddle Punch slow reduced from 20% to 15%`, !0), e(Ni));
	var Pi = i(Ni, 2);
	(t(Pi, () => `Puddle Punch T2 slow reduced from 20% to 15%`, !0), e(Pi));
	var Fi = i(Pi, 2);
	(t(Fi, () => `Puddle Punch T3 now also causes the Punch to become a heavy melee`, !0),
		e(Fi),
		e(ki));
	var Ii = i(ki, 2);
	(a(Ii, { kind: `hero`, name: `Viscous`, ability: `Puddle Punch` }), e(Di));
	var Li = i(Di, 2);
	n(Li, 1, `ability goo-ball`);
	var Ri = r(Li);
	t(
		Ri,
		() => `
<p><a href="/ability/goo-ball"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Goo Ball change history</a></p>
<h4 id="goo-ball"><a href="/ability/goo-ball">Goo Ball</a></h4>
<ul><li>Goo Ball damage Spirit Power scaling reduced from 1.3 to 1.1</li><li>Goo Ball damage T2 reduced from 120 to 90</li></ul>
`
	);
	var zi = i(Ri, 2);
	(a(zi, { kind: `hero`, name: `Viscous`, ability: `Goo Ball` }), e(Li), e(mi));
	var Bi = i(mi, 2);
	n(Bi, 1, `hero warden`);
	var Vi = r(Bi);
	t(
		Vi,
		() => `
<p><a href="/hero/warden"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Warden patch history</a></p>
<h3 id="warden"><a href="/hero/warden">Warden</a></h3>
<ul><li>Fire Rate Spirit Power scaling reduced from 0.25 to 0.22</li></ul>
`
	);
	var Hi = i(Vi, 2);
	n(Hi, 1, `ability last-stand`);
	var Ui = r(Hi);
	t(
		Ui,
		() => `
<p><a href="/ability/last-stand"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Last Stand change history</a></p>
<h4 id="last-stand"><a href="/ability/last-stand">Last Stand</a></h4>
<ul><li>Last Stand Resistance reduced from 60% to 30%</li><li>Last Stand now only goes on cooldown for 20s when interrupted rather than full</li><li>Last Stand T2 now also reduces cooldown by 35s</li><li>Last Stand T3 changed from &quot;-56s Cooldown&quot; to &quot;+50% Bullet and Spirit Resistance During Channel and +2.5s Duration&quot;</li></ul>
`
	);
	var Wi = i(Ui, 2);
	(a(Wi, { kind: `hero`, name: `Warden`, ability: `Last Stand` }), e(Hi), e(Bi));
	var Gi = i(Bi, 2);
	n(Gi, 1, `hero wraith`);
	var Ki = r(Gi);
	t(
		Ki,
		() => `
<p><a href="/hero/wraith"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Wraith patch history</a></p>
<h3 id="wraith"><a href="/hero/wraith">Wraith</a></h3>
<ul><li>Bullet damage growth increased 0.37 to 0.39</li></ul>
`
	);
	var qi = i(Ki, 2);
	n(qi, 1, `ability full-auto`);
	var Ji = r(qi);
	t(
		Ji,
		() => `
<p><a href="/ability/full-auto"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Full Auto change history</a></p>
<h4 id="full-auto"><a href="/ability/full-auto">Full Auto</a></h4>
<ul><li>Full Auto T2 Spirit Damage Per Bullet now has default 0.05 Spirit Power scaling</li><li>Full Auto T3 reduces the improved Spirit Power scaling from 0.1 to 0.05</li><li>Full Auto T3 changed from 30% Bullet Lifesteal to 20% Bullet and Spirit Lifesteal</li></ul>
`
	);
	var Yi = i(Ji, 2);
	(a(Yi, { kind: `hero`, name: `Wraith`, ability: `Full Auto` }), e(qi));
	var Xi = i(qi, 2);
	n(Xi, 1, `ability telekinesis`);
	var Zi = r(Xi);
	t(
		Zi,
		() => `
<p><a href="/ability/telekinesis"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Telekinesis change history</a></p>
<h4 id="telekinesis"><a href="/ability/telekinesis">Telekinesis</a></h4>
<ul><li>Telekinesis cast time reduced from 0.7s to 0.4s</li><li>Telekinesis projectile speed increased from 650 to 750</li><li>Telekinesis now briefly lifts the enemy and then slams them to the ground and leaves the target with 2.5s of silence and disarm</li><li>Telekinesis T2 duration now applies to the silence and disarm, increased to +0.75s</li><li>Telekinesis T3 now causes the projectile to bounce to another nearby hero within 20m</li></ul>
`
	);
	var Qi = i(Zi, 2);
	(a(Qi, { kind: `hero`, name: `Wraith`, ability: `Telekinesis` }), e(Xi), e(Gi));
	var $i = i(Gi, 2);
	n($i, 1, `hero yamato`);
	var ea = r($i);
	t(
		ea,
		() => `
<p><a href="/hero/yamato"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Yamato patch history</a></p>
<h3 id="yamato"><a href="/hero/yamato">Yamato</a></h3>
`
	);
	var ta = i(ea, 2);
	n(ta, 1, `ability flying-strike`);
	var na = r(ta);
	t(
		na,
		() => `
<h4 id="flying-strike">Flying Strike</h4>
<ul><li>Flying Strike T3 now also lets you grapple to ally heroes</li></ul>
`
	);
	var ra = i(na, 2);
	(a(ra, { kind: `hero`, name: `Yamato`, ability: `Flying Strike` }), e(ta));
	var ia = i(ta, 2);
	n(ia, 1, `ability shadow-transformation`);
	var aa = r(ia);
	t(
		aa,
		() => `
<p><a href="/ability/shadow-transformation"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp" alt=""  decoding="async" width="24" height="24" loading="lazy"/> Shadow Transformation change history</a></p>
<h4 id="shadow-transformation"><a href="/ability/shadow-transformation">Shadow Transformation</a></h4>
<ul><li>Shadow Transformation cast time reduced from 2s to 1.5s</li><li>Shadow Transformation no longer has a 0.6s post cast time</li><li>Shadow Transformation T3 now also increases Resist by 15%</li></ul>
`
	);
	var oa = i(aa, 2);
	(a(oa, { kind: `hero`, name: `Yamato`, ability: `Shadow Transformation` }),
		e(ia),
		e($i));
	var sa = i($i, 2);
	t(
		sa,
		() => `
<h2 id="item-changes" data-mog-section="">Item Changes</h2>
`
	);
	var ca = i(sa, 2);
	ae(ca, {});
	var la = i(ca, 2);
	n(la, 1, `item active-reload`);
	var ua = r(la);
	t(
		ua,
		() => `
<p><a href="/item/active-reload"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Active Reload patch history</a></p>
<h3 id="active-reload"><a href="/item/active-reload">Active Reload</a></h3>
<ul><li>Ammo increased from 18% to 24%</li></ul>
`
	);
	var da = i(ua, 2);
	(a(da, { kind: `item`, name: `Active Reload`, ability: null }), e(la));
	var fa = i(la, 2);
	n(fa, 1, `item alchemical-fire`);
	var pa = r(fa);
	t(
		pa,
		() => `
<p><a href="/item/alchemical-fire"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Alchemical Fire patch history</a></p>
<h3 id="alchemical-fire"><a href="/item/alchemical-fire">Alchemical Fire</a></h3>
<ul><li>Spirit Power reduced from 11 to 7</li><li>Added alternate desaturated variant for friendly versions of this</li></ul>
`
	);
	var ma = i(pa, 2);
	(a(ma, { kind: `item`, name: `Alchemical Fire`, ability: null }), e(fa));
	var ha = i(fa, 2);
	n(ha, 1, `item arcane-surge`);
	var ga = r(ha);
	t(
		ga,
		() => `
<p><a href="/item/arcane-surge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Arcane Surge patch history</a></p>
<h3 id="arcane-surge"><a href="/item/arcane-surge">Arcane Surge</a></h3>
<ul><li>Ability range reduced from +20% to +18%</li><li>Ability duration reduced from +20% to +18</li><li>Spirit Power reduced from +20 to +18</li></ul>
`
	);
	var _a = i(ga, 2);
	(a(_a, { kind: `item`, name: `Arcane Surge`, ability: null }), e(ha));
	var va = i(ha, 2);
	n(va, 1, `item berserker`);
	var ya = r(va);
	t(
		ya,
		() => `
<p><a href="/item/berserker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Berserker patch history</a></p>
<h3 id="berserker"><a href="/item/berserker">Berserker</a></h3>
<ul><li>Now builds into Frenzy</li></ul>
`
	);
	var ba = i(ya, 2);
	(a(ba, { kind: `item`, name: `Berserker`, ability: null }), e(va));
	var xa = i(va, 2);
	n(xa, 1, `item close-quarters`);
	var Sa = r(xa);
	t(
		Sa,
		() => `
<p><a href="/item/close-quarters"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Close Quarters patch history</a></p>
<h3 id="close-quarters"><a href="/item/close-quarters">Close Quarters</a></h3>
<ul><li>Weapon Damage reduced from 25% to 22%</li><li>Bullet Resist reduced from 5% to 4%</li></ul>
`
	);
	var Ca = i(Sa, 2);
	(a(Ca, { kind: `item`, name: `Close Quarters`, ability: null }), e(xa));
	var wa = i(xa, 2);
	n(wa, 1, `item crippling-headshot`);
	var Ta = r(wa);
	t(
		Ta,
		() => `
<p><a href="/item/crippling-headshot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Crippling Headshot patch history</a></p>
<h3 id="crippling-headshot"><a href="/item/crippling-headshot">Crippling Headshot</a></h3>
<ul><li>The headshot debuff will now stack from different sources, diminishingly (24%, 12%, 6%, etc)</li></ul>
`
	);
	var Ea = i(Ta, 2);
	(a(Ea, { kind: `item`, name: `Crippling Headshot`, ability: null }), e(wa));
	var Da = i(wa, 2);
	n(Da, 1, `item decay`);
	var Oa = r(Da);
	t(
		Oa,
		() => `
<p><a href="/item/decay"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Decay patch history</a></p>
<h3 id="decay"><a href="/item/decay">Decay</a></h3>
<ul><li>Bleed damage increased from 1.4% to 1.5%</li></ul>
`
	);
	var ka = i(Oa, 2);
	(a(ka, { kind: `item`, name: `Decay`, ability: null }), e(Da));
	var Aa = i(Da, 2);
	n(Aa, 1, `item diviner-s-kevlar`);
	var ja = r(Aa);
	t(
		ja,
		() => `
<p><a href="/item/diviners-kevlar"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Diviner&#x27;s Kevlar patch history</a></p>
<h3 id="diviner-s-kevlar"><a href="/item/diviners-kevlar">Diviner&#x27;s Kevlar</a></h3>
<ul><li>Cooldown Reduction reduced from 12% to 10%</li><li>Ability Duration increased from 7% to 10%</li></ul>
`
	);
	var Ma = i(ja, 2);
	(a(Ma, { kind: `item`, name: `Diviner's Kevlar`, ability: null }), e(Aa));
	var Na = i(Aa, 2);
	n(Na, 1, `item ethereal-shift`);
	var Pa = r(Na);
	t(
		Pa,
		() => `
<p><a href="/item/ethereal-shift"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Ethereal Shift patch history</a></p>
<h3 id="ethereal-shift"><a href="/item/ethereal-shift">Ethereal Shift</a></h3>
<ul><li>Allows you to float around slowly (2 m/s)</li></ul>
`
	);
	var Fa = i(Pa, 2);
	(a(Fa, { kind: `item`, name: `Ethereal Shift`, ability: null }), e(Na));
	var Ia = i(Na, 2);
	n(Ia, 1, `item extra-stamina`);
	var La = r(Ia);
	t(
		La,
		() => `
<p><a href="/item/extra-stamina"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Extra Stamina patch history</a></p>
<h3 id="extra-stamina"><a href="/item/extra-stamina">Extra Stamina</a></h3>
<ul><li>Fire Rate reduced from 6% to 5%</li></ul>
`
	);
	var Ra = i(La, 2);
	(a(Ra, { kind: `item`, name: `Extra Stamina`, ability: null }), e(Ia));
	var za = i(Ia, 2);
	n(za, 1, `item fleetfoot`);
	var Ba = r(za);
	t(
		Ba,
		() => `
<p><a href="/item/fleetfoot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Fleetfoot patch history</a></p>
<h3 id="fleetfoot"><a href="/item/fleetfoot">Fleetfoot</a></h3>
`
	);
	var Va = i(Ba, 2),
		Ha = r(Va),
		Ua = r(Ha);
	t(Ua, () => `Cooldown increased from 19s to 20s`);
	var Wa = i(Ua, 2);
	(o(Wa, {
		kind: `item`,
		name: `Fleetfoot`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 19s to 20s`
	}),
		e(Ha),
		e(Va));
	var Ga = i(Va, 2);
	(a(Ga, { kind: `item`, name: `Fleetfoot`, ability: null }), e(za));
	var Ka = i(za, 2);
	n(Ka, 1, `item frenzy`);
	var qa = r(Ka);
	t(
		qa,
		() => `
<p><a href="/item/frenzy"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Frenzy patch history</a></p>
<h3 id="frenzy"><a href="/item/frenzy">Frenzy</a></h3>
<ul><li>Now builds from Berserker. Grants Berserker passive. Increases bonus per stack from 6% to 8%. Provides +12 ammo, 150 Bonus Health, +10% Bullet Resist. Stat bonuses when 50% below unchanged (4 m/s, 40% Fire Rate, 55% Bullet Resist, has 4s buffer memory)</li></ul>
`
	);
	var Ja = i(qa, 2);
	(a(Ja, { kind: `item`, name: `Frenzy`, ability: null }), e(Ka));
	var Ya = i(Ka, 2);
	n(Ya, 1, `item headshot-booster`);
	var Xa = r(Ya);
	t(
		Xa,
		() => `
<p><a href="/item/headshot-booster"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Headshot Booster patch history</a></p>
<h3 id="headshot-booster"><a href="/item/headshot-booster">Headshot Booster</a></h3>
`
	);
	var Za = i(Xa, 2),
		Qa = r(Za),
		$a = r(Qa);
	t($a, () => `Cooldown increased from 7.5s to 8.5s`);
	var eo = i($a, 2);
	(o(eo, {
		kind: `item`,
		name: `Headshot Booster`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 7.5s to 8.5s`
	}),
		e(Qa),
		e(Za));
	var to = i(Za, 2);
	(a(to, { kind: `item`, name: `Headshot Booster`, ability: null }), e(Ya));
	var no = i(Ya, 2);
	n(no, 1, `item healing-nova`);
	var ro = r(no);
	t(
		ro,
		() => `
<p><a href="/item/healing-nova"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Nova patch history</a></p>
<h3 id="healing-nova"><a href="/item/healing-nova">Healing Nova</a></h3>
<ul><li>Time to heal increased from 2s to 2.75s</li></ul>
`
	);
	var io = i(ro, 2);
	(a(io, { kind: `item`, name: `Healing Nova`, ability: null }), e(no));
	var ao = i(no, 2);
	n(ao, 1, `item healing-rite`);
	var oo = r(ao);
	t(
		oo,
		() => `
<p><a href="/item/healing-rite"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Healing Rite patch history</a></p>
<h3 id="healing-rite"><a href="/item/healing-rite">Healing Rite</a></h3>
<ul><li>Health bonus reduced from +45 to +30</li></ul>
`
	);
	var so = i(oo, 2);
	(a(so, { kind: `item`, name: `Healing Rite`, ability: null }), e(ao));
	var co = i(ao, 2);
	n(co, 1, `item infuser`);
	var lo = r(co);
	t(
		lo,
		() => `
<p><a href="/item/infuser"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Infuser patch history</a></p>
<h3 id="infuser"><a href="/item/infuser">Infuser</a></h3>
<ul><li>Duration increased from 6s to 8s</li><li>No longer grants +50 Health</li><li>Now grants +70 Spirit Shield</li></ul>
`
	);
	var uo = i(lo, 2);
	(a(uo, { kind: `item`, name: `Infuser`, ability: null }), e(co));
	var fo = i(co, 2);
	n(fo, 1, `item knockdown`);
	var po = r(fo);
	t(
		po,
		() => `
<p><a href="/item/knockdown"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Knockdown patch history</a></p>
<h3 id="knockdown"><a href="/item/knockdown">Knockdown</a></h3>
<ul><li>Stun duration reduced from 0.9 to 0.75</li><li>Stun now lasts 1s longer against airborne targets based on how high off the ground they are (up to 30m)</li></ul>
`
	);
	var mo = i(po, 2);
	(a(mo, { kind: `item`, name: `Knockdown`, ability: null }), e(fo));
	var ho = i(fo, 2);
	n(ho, 1, `item leech`);
	var go = r(ho);
	t(
		go,
		() => `
<p><a href="/item/leech"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Leech patch history</a></p>
<h3 id="leech"><a href="/item/leech">Leech</a></h3>
<ul><li>No longer provides +12% Cooldown Reduction</li><li>Now upgrades from Healbane. Provides +60% Anti Healing for 8s on Spirit Damage dealt.</li></ul>
`
	);
	var _o = i(go, 2);
	(a(_o, { kind: `item`, name: `Leech`, ability: null }), e(ho));
	var vo = i(ho, 2);
	n(vo, 1, `item lucky-shot`);
	var yo = r(vo);
	t(
		yo,
		() => `
<p><a href="/item/lucky-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Lucky Shot patch history</a></p>
<h3 id="lucky-shot"><a href="/item/lucky-shot">Lucky Shot</a></h3>
<ul><li>Proc Chance reduced from 35% to 34%</li></ul>
`
	);
	var bo = i(yo, 2);
	(a(bo, { kind: `item`, name: `Lucky Shot`, ability: null }), e(vo));
	var xo = i(vo, 2);
	n(xo, 1, `item magic-carpet`);
	var So = r(xo);
	t(
		So,
		() => `
<p><a href="/item/magic-carpet"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Magic Carpet patch history</a></p>
<h3 id="magic-carpet"><a href="/item/magic-carpet">Magic Carpet</a></h3>
<ul><li>Duration increased from 7s to 8s</li></ul>
`
	);
	var Co = i(So, 2);
	(a(Co, { kind: `item`, name: `Magic Carpet`, ability: null }), e(xo));
	var wo = i(xo, 2);
	n(wo, 1, `item majestic-leap`);
	var To = r(wo);
	t(
		To,
		() => `
<p><a href="/item/majestic-leap"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Majestic Leap patch history</a></p>
<h3 id="majestic-leap"><a href="/item/majestic-leap">Majestic Leap</a></h3>
<ul><li>No longer gets interrupted on slam down if you get shot</li></ul>
`
	);
	var Eo = i(To, 2);
	(a(Eo, { kind: `item`, name: `Majestic Leap`, ability: null }), e(wo));
	var Do = i(wo, 2);
	n(Do, 1, `item melee-charge`);
	var Oo = r(Do);
	t(
		Oo,
		() => `
<p><a href="/item/melee-charge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Melee Charge patch history</a></p>
<h3 id="melee-charge"><a href="/item/melee-charge">Melee Charge</a></h3>
<ul><li>Bonus Health reduced from +75 to +65</li></ul>
`
	);
	var ko = i(Oo, 2);
	(a(ko, { kind: `item`, name: `Melee Charge`, ability: null }), e(Do));
	var Ao = i(Do, 2);
	n(Ao, 1, `item metal-skin`);
	var jo = r(Ao);
	t(
		jo,
		() => `
<p><a href="/item/metal-skin"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Metal Skin patch history</a></p>
<h3 id="metal-skin"><a href="/item/metal-skin">Metal Skin</a></h3>
<ul><li>Duration increased from 3.5s to 4s</li><li>Stamina movement distance reduced by 25%</li></ul>
`
	);
	var Mo = i(jo, 2);
	(a(Mo, { kind: `item`, name: `Metal Skin`, ability: null }), e(Ao));
	var No = i(Ao, 2);
	n(No, 1, `item monster-rounds`);
	var Po = r(No);
	t(
		Po,
		() => `
<p><a href="/item/monster-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Monster Rounds patch history</a></p>
<h3 id="monster-rounds"><a href="/item/monster-rounds">Monster Rounds</a></h3>
<ul><li>Weapon Damage vs NPC reduced from 30% to 26%</li></ul>
`
	);
	var Fo = i(Po, 2);
	(a(Fo, { kind: `item`, name: `Monster Rounds`, ability: null }), e(No));
	var Io = i(No, 2);
	n(Io, 1, `item mystic-reverb`);
	var Lo = r(Io);
	t(
		Lo,
		() => `
<p><a href="/item/mystic-reverb"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Reverb patch history</a></p>
<h3 id="mystic-reverb"><a href="/item/mystic-reverb">Mystic Reverb</a></h3>
`
	);
	var Ro = i(Lo, 2),
		zo = r(Ro),
		Bo = r(zo);
	t(Bo, () => `Damage increased from 45% to 50%`);
	var Vo = i(Bo, 2);
	(o(Vo, {
		kind: `item`,
		name: `Mystic Reverb`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Damage increased from 45% to 50%`
	}),
		e(zo),
		e(Ro));
	var Ho = i(Ro, 2);
	(a(Ho, { kind: `item`, name: `Mystic Reverb`, ability: null }), e(Io));
	var Uo = i(Io, 2);
	n(Uo, 1, `item mystic-slow`);
	var Wo = r(Uo);
	t(
		Wo,
		() => `
<p><a href="/item/mystic-slow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Mystic Slow patch history</a></p>
<h3 id="mystic-slow"><a href="/item/mystic-slow">Mystic Slow</a></h3>
<ul><li>Duration increased from 2s to 2.5s</li></ul>
`
	);
	var Go = i(Wo, 2);
	(a(Go, { kind: `item`, name: `Mystic Slow`, ability: null }), e(Uo));
	var Ko = i(Uo, 2);
	n(Ko, 1, `item point-blank`);
	var qo = r(Ko);
	t(
		qo,
		() => `
<p><a href="/item/point-blank"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Point Blank patch history</a></p>
<h3 id="point-blank"><a href="/item/point-blank">Point Blank</a></h3>
<ul><li>Now provides +20% Melee Resistance</li></ul>
`
	);
	var Jo = i(qo, 2);
	(a(Jo, { kind: `item`, name: `Point Blank`, ability: null }), e(Ko));
	var Yo = i(Ko, 2);
	n(Yo, 1, `item rapid-recharge`);
	var Xo = r(Yo);
	t(
		Xo,
		() => `
<p><a href="/item/rapid-recharge"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Recharge patch history</a></p>
<h3 id="rapid-recharge"><a href="/item/rapid-recharge">Rapid Recharge</a></h3>
<ul><li>Cooldown for charged abilities reduced from 30% to 25%</li></ul>
`
	);
	var Zo = i(Xo, 2);
	(a(Zo, { kind: `item`, name: `Rapid Recharge`, ability: null }), e(Yo));
	var Qo = i(Yo, 2);
	n(Qo, 1, `item rapid-rounds`);
	var $o = r(Qo);
	t(
		$o,
		() => `
<p><a href="/item/rapid-rounds"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rapid Rounds patch history</a></p>
<h3 id="rapid-rounds"><a href="/item/rapid-rounds">Rapid Rounds</a></h3>
<ul><li>Fire Rate reduced from 11% to 10%</li></ul>
`
	);
	var es = i($o, 2);
	(a(es, { kind: `item`, name: `Rapid Rounds`, ability: null }), e(Qo));
	var ts = i(Qo, 2);
	n(ts, 1, `item refresher`);
	var ns = r(ts);
	t(
		ns,
		() => `
<p><a href="/item/refresher"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Refresher patch history</a></p>
<h3 id="refresher"><a href="/item/refresher">Refresher</a></h3>
<ul><li>Cast delay increased from 0.3s to 0.6s</li></ul>
`
	);
	var rs = i(ns, 2);
	(a(rs, { kind: `item`, name: `Refresher`, ability: null }), e(ts));
	var is = i(ts, 2);
	n(is, 1, `item rescue-beam`);
	var as = r(is);
	t(
		as,
		() => `
<p><a href="/item/rescue-beam"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Rescue Beam patch history</a></p>
<h3 id="rescue-beam"><a href="/item/rescue-beam">Rescue Beam</a></h3>
<ul><li>Range reduced from 32m to 28m</li></ul>
`
	);
	var os = i(as, 2);
	(a(os, { kind: `item`, name: `Rescue Beam`, ability: null }), e(is));
	var ss = i(is, 2);
	n(ss, 1, `item restorative-locket`);
	var cs = r(ss);
	t(
		cs,
		() => `
<p><a href="/item/restorative-locket"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Locket patch history</a></p>
<h3 id="restorative-locket"><a href="/item/restorative-locket">Restorative Locket</a></h3>
`
	);
	var ls = i(cs, 2),
		us = r(ls),
		ds = r(us);
	t(ds, () => `Cooldown reduced from 30s to 25s`);
	var fs = i(ds, 2);
	(o(fs, {
		kind: `item`,
		name: `Restorative Locket`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown reduced from 30s to 25s`
	}),
		e(us),
		e(ls));
	var ps = i(ls, 2);
	(a(ps, { kind: `item`, name: `Restorative Locket`, ability: null }), e(ss));
	var ms = i(ss, 2);
	n(ms, 1, `item restorative-shot`);
	var hs = r(ms);
	t(
		hs,
		() => `
<p><a href="/item/restorative-shot"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Restorative Shot patch history</a></p>
<h3 id="restorative-shot"><a href="/item/restorative-shot">Restorative Shot</a></h3>
<ul><li>Weapon Damage reduced from 6% to 3%</li></ul>
`
	);
	var gs = i(hs, 2);
	(a(gs, { kind: `item`, name: `Restorative Shot`, ability: null }), e(ms));
	var _s = i(ms, 2);
	n(_s, 1, `item shadow-weave`);
	var vs = r(_s);
	t(
		vs,
		() => `
<p><a href="/item/shadow-weave"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Shadow Weave patch history</a></p>
<h3 id="shadow-weave"><a href="/item/shadow-weave">Shadow Weave</a></h3>
<ul><li>Spot radius increased from 22m to 26m</li></ul>
`
	);
	var ys = i(vs, 2);
	(a(ys, { kind: `item`, name: `Shadow Weave`, ability: null }), e(_s));
	var bs = i(_s, 2);
	n(bs, 1, `item sharpshooter`);
	var xs = r(bs);
	t(
		xs,
		() => `
<p><a href="/item/sharpshooter"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Sharpshooter patch history</a></p>
<h3 id="sharpshooter"><a href="/item/sharpshooter">Sharpshooter</a></h3>
<ul><li>Now reduces your Fire Rate by 10% and movespeed by 0.5</li><li>Weapon Damage increased from 20% to 30%</li><li>Far range Weapon Damage increased from +50% to +70%</li></ul>
`
	);
	var Ss = i(xs, 2);
	(a(Ss, { kind: `item`, name: `Sharpshooter`, ability: null }), e(bs));
	var Cs = i(bs, 2);
	n(Cs, 1, `item silencer`);
	var ws = r(Cs);
	t(
		ws,
		() => `
<p><a href="/item/silencer"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Silencer patch history</a></p>
<h3 id="silencer"><a href="/item/silencer">Silencer</a></h3>
<ul><li>Buildup difficulty increased by 18%</li></ul>
`
	);
	var Ts = i(ws, 2);
	(a(Ts, { kind: `item`, name: `Silencer`, ability: null }), e(Cs));
	var Es = i(Cs, 2);
	n(Es, 1, `item slowing-hex`);
	var Ds = r(Es);
	t(
		Ds,
		() => `
<p><a href="/item/slowing-hex"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Slowing Hex patch history</a></p>
<h3 id="slowing-hex"><a href="/item/slowing-hex">Slowing Hex</a></h3>
`
	);
	var Os = i(Ds, 2),
		ks = r(Os),
		As = r(ks);
	t(As, () => `Cooldown increased from 26s to 28s`);
	var js = i(As, 2);
	(o(js, {
		kind: `item`,
		name: `Slowing Hex`,
		groupIndex: 0,
		bulletIndex: 0,
		text: `Cooldown increased from 26s to 28s`
	}),
		e(ks),
		e(Os));
	var Ms = i(Os, 2);
	(a(Ms, { kind: `item`, name: `Slowing Hex`, ability: null }), e(Es));
	var Ns = i(Es, 2);
	n(Ns, 1, `item spiritual-overflow`);
	var Ps = r(Ns);
	t(
		Ps,
		() => `
<p><a href="/item/spiritual-overflow"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Spiritual Overflow patch history</a></p>
<h3 id="spiritual-overflow"><a href="/item/spiritual-overflow">Spiritual Overflow</a></h3>
<ul><li>Cooldown Reduction reduced from 15% to 12%</li></ul>
`
	);
	var Fs = i(Ps, 2);
	(a(Fs, { kind: `item`, name: `Spiritual Overflow`, ability: null }), e(Ns));
	var Is = i(Ns, 2);
	n(Is, 1, `item suppressor`);
	var Ls = r(Is);
	t(
		Ls,
		() => `
<p><a href="/item/suppressor"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Suppressor patch history</a></p>
<h3 id="suppressor"><a href="/item/suppressor">Suppressor</a></h3>
<ul><li>Duration increased from 2s to 2.5s</li></ul>
`
	);
	var Rs = i(Ls, 2);
	(a(Rs, { kind: `item`, name: `Suppressor`, ability: null }), e(Is));
	var zs = i(Is, 2);
	n(zs, 1, `item surge-of-power`);
	var Bs = r(zs);
	t(
		Bs,
		() => `
<p><a href="/item/surge-of-power"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Surge of Power patch history</a></p>
<h3 id="surge-of-power"><a href="/item/surge-of-power">Surge of Power</a></h3>
<ul><li>Fire Rate increased from 10% to 15%</li></ul>
`
	);
	var Vs = i(Bs, 2);
	(a(Vs, { kind: `item`, name: `Surge of Power`, ability: null }), e(zs));
	var Hs = i(zs, 2);
	n(Hs, 1, `item titanic-magazine`);
	var Us = r(Hs);
	t(
		Us,
		() => `
<p><a href="/item/titanic-magazine"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Titanic Magazine patch history</a></p>
<h3 id="titanic-magazine"><a href="/item/titanic-magazine">Titanic Magazine</a></h3>
<ul><li>Melee Resistance increased from 25% to 30%</li></ul>
`
	);
	var Ws = i(Us, 2);
	(a(Ws, { kind: `item`, name: `Titanic Magazine`, ability: null }), e(Hs));
	var Gs = i(Hs, 2);
	n(Gs, 1, `item toxic-bullets`);
	var Ks = r(Gs);
	t(
		Ks,
		() => `
<p><a href="/item/toxic-bullets"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Toxic Bullets patch history</a></p>
<h3 id="toxic-bullets"><a href="/item/toxic-bullets">Toxic Bullets</a></h3>
<ul><li>Bleed damage increased from 2.5% to 2.75%</li></ul>
`
	);
	var qs = i(Ks, 2);
	(a(qs, { kind: `item`, name: `Toxic Bullets`, ability: null }), e(Gs));
	var Js = i(Gs, 2);
	n(Js, 1, `item unstoppable`);
	var Ys = r(Js);
	t(
		Ys,
		() => `
<p><a href="/item/unstoppable"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Unstoppable patch history</a></p>
<h3 id="unstoppable"><a href="/item/unstoppable">Unstoppable</a></h3>
<ul><li>Now has 20% Slow Resistance</li></ul>
`
	);
	var Xs = i(Ys, 2);
	(a(Xs, { kind: `item`, name: `Unstoppable`, ability: null }), e(Js));
	var Zs = i(Js, 2);
	n(Zs, 1, `item veil-walker`);
	var Qs = r(Zs);
	t(
		Qs,
		() => `
<p><a href="/item/veil-walker"><img src="https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp" alt=""  decoding="async" width="40" height="40" loading="lazy"/> Veil Walker patch history</a></p>
<h3 id="veil-walker"><a href="/item/veil-walker">Veil Walker</a></h3>
`
	);
	var $s = i(Qs, 2),
		ec = r($s);
	(t(
		ec,
		() =>
			`When shot while invisible, you will require 1s to go back invisible rather than 0.25s`,
		!0
	),
		e(ec));
	var tc = i(ec, 2),
		nc = r(tc);
	t(nc, () => `Cooldown increased from 18s to 22s`);
	var rc = i(nc, 2);
	(o(rc, {
		kind: `item`,
		name: `Veil Walker`,
		groupIndex: 0,
		bulletIndex: 1,
		text: `Cooldown increased from 18s to 22s`
	}),
		e(tc),
		e($s));
	var ic = i($s, 2);
	(a(ic, { kind: `item`, name: `Veil Walker`, ability: null }), e(Zs), te(ee, re));
}
export { le as default, oe as metadata, s as readingManifest, se as toc };
