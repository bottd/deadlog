``meta:
// Not reproducible offline: this body came from the Steam API, which no longer serves
// a note this old, so regenerate-from-cache.ts skips it and a forum-cache regeneration
// would replace real patch notes with the unfurl summary. The brace escaping that was
// once hand-applied here is now handled by the generator (see bulletLine).
title "12-06-2024 Update"
thread_id "50599"
steam_gid "1785321795648842"
published "2024-12-06T12:05:10-0800"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
category "patch"
major_update #false
content_text "Added a new hero, Raven, to Hero Labs Added park theming to purple lane Added park backdrop to park side of map Updated tree models to new visual style and added player collision to canopies For each player on the main leaderboard, you can see their top 3 heroes as well as their overall skill rating Moved the post-game survey to the final score screen Added text box field to the post-game survey Muting a player now also silences map drawing, pings, and chatwheel messages Various rendering performance improvements on map assets Added two new setting options \"Force English Hero Names\" and \"Force English Item Names\", which will display those values in English regardless of your chosen language Added Toggle Crouch as a new keybind Added a new setting option: \"Additional Build Search Language\", which lets you select a language to search for when requesting builds in addition to the current display language of the client. Fixed shop search not working in the shop when opened from Resources Revisions to melee parry effect and removal of the parry fail effect to make parries more clear Tweaked falloff range and toned down bass frequencies of hotel music Added Pocket Barrage cast delay sound Updated Pocket Enchanted Satchel cast sound Passive cooldown indicator now shows when the item is off cooldown instead of 1 second before Fixed invulnerable-to-debuff sound effect playing at wrong times Fixed melee damage audio playing despite no damage dealt Fixed rejuv collect sound playing from wrong location in hero sandbox Updated parry cast and parry success sounds Mirage now has custom animations for most of his core movement Fixed being able to wall jump off of the same surface multiple times Fixed the Damage Report UI clipping into the shop in Sandbox mode Fixed shop showing with a broken build tab if you had previously navigated to the hero builds, then opened it from Resources Fixed clicking on minimap not taking you to that location as a spectator Fade rooftop antenna ambient effects so that they are not visible at a distance Visual revisions to Quantum entanglement effect Reverted recent updates to Shiv run animations Increased volume and adjusted the mix of sounds for firing while disarmed and using abilities while silenced Lash's Flog impact sound adjusted for better feedback for attacking player Fixed bug preventing purchase sound from playing when buying/quickbuying Active or Imbued items Visual updates to Mirage muzzle flash and tracers Updated Bullet Flurry tracers to be spirit-based Fixed Bebop's bomb damage growth not being reflected in the tooltip Fixed Grey Talon's spirit power growth from his ult not being reflected in the shop Fix to Yamato Shadow Transformation visuals when duration is extended after killing an enemy Fixed some item sounds playing on caster instead of target Updated Krill VO - largely remastering pass, but some new content Updated Ivy VO - largely remastering pass, but also fixed some lines with Spanish pronunciation issues Fixed a regression where Kelvin referenced Grey Talon incorrectly Updated Divine Barrier cast sound Added Telemetry HUD options to the settings menu. The Telemetry HUD is an in-game HUD which can be used to monitor the frame rate and network conditions. The Telemetry HUD can be enabled under Settings > Game. More information on the HUD can be found here: https://help.steampowered.com/en/faqs/view/5E6F-5B36-5485-F6B9 Added new Learn to Play tutorial images in collaboration with Toastyghostey (https://www.instagram.com/toastyghostey/) Steam Input Support: Added support for new Crouch Toggle button Added 3 new Official Control Schemes: { Standard | Gyro | FlickStick }. Thanks to @FlickStickVids for consultation. Added versioning system to Configs, so that outdated configs are unloaded Added an Extra Competitive option to allow players to control what type of players are placed on their team. If you prefer to play with higher levels of coordination, communication, and competitiveness, then you can use this option to tell the matchmaker to build your team with like-minded allies. This option will sometimes be inactive in scenarios where the pool is very shallow (large portions of Eternus, off peak hours like 5am, extremely long queue, etc.), but otherwise in most normal scenarios the matchmaker will attempt to find you similar players. The new Extra Competitive option, Incoming Chat, and Lane Preference (party only) settings are now collected within a 'Queue Options' button on the dashboard below the profile area The recent change to increase party size allowed at the top MMR (from 2 to 3) reverted for Eternus and up, but maintained for Ascendant The matchmaker will now try to prioritize each team having at least 2 frontliners when it has the option to do so Ability Range stat now has diminishing stacking Ability Duration stat now has diminishing stacking Fire Rate now has a minimum final value of -50% Heroes now have +0.5 Sprint Sprint Boots reduced from +2 Sprint to +1.5 Enduring Speed reduced from +2 Sprint to +1.5 Carrying Urn now sets and limits your movespeed to a fixed 13 (this includes things like Ivy Air Drop). It no longer provides sprint. The speed cannot be reduced or increased. Urn spawn point now alternates left and right starting with left, rather than being random Shooting a trooper on a zipline now causes other troopers near it on the zipline to dismount as well Flying over buildings no longer causes you to get zapped, only standing on the building does Patron HP reduced from 10k to 7.5k Downed Patron HP reduced from 18k to 13.5k Patron HP grows by 250/Min starting 20 min Downed Patron HP grows by 450/Min starting 20 min (overall, these are -25% HP at 20 min, 0% at 30 min, and +25% at 40 min) Added a tick based souls system that gives the bottom two net worth players on the team a small amount of souls per second. The amount of souls available to distribute to the bottom two players is based on the souls gathered by your team (2% and 1%). This occurs after the laning phase. Added new limiting function for the soul orb duplication abuses during the laning phase. You shouldn't experience any real difference in normal gameplay: Reverted a few changes recently related to soul duplication issues Reverted: - Guardians now deal 25% more damage to troopers Reverted: - Guardians now take 25% more damage from troopers/players Reverted: - Range to be considered for souls reduced by 5m Reverted: - Troopers now do 20% more damage to each other Basic Magazine: Weapon Damage reduced from 15% to 12% High-Velocity Mag: Weapon Damage reduced from 13% to 11% Hollow Point Ward: Threshold increased from 60% to 65% Hollow Point Ward: Weapon Damage reduced from 22% to 20% Spellslinger Headshots: Proc bonus changed from 3% Spirit Power to 3% Spirit Amp Enchanter's Barrier: Cooldown reduction reduced from 8% to 6% Return Fire no longer has +9 Spirit Power Return Fire now has +3 HP Regen Return Fire now has +10% Ammo Debuff Remover: Buff duration increased from 4s to 5s Debuff Remover: Heal on active increased from 10% Max HP to 300 HP Withering Whip: Duration increased from 4.5s to 5s Withering Whip: Bullet Resist reduced from -11% to -12% Silence Glyph: Now pierces through all enemies in the path Silence Glyph: Projectile and collision size increased by 40% Abrams Bullet Damage decreased from 4.68 to 4.5 Spirit Siphon spirit scaling increased from 0.5 to 0.65 Bebop Uppercut now only locks enemies out of air control for a max of 0.5s (down from 1s) Hook now shows a hero icon when you connect with a target Hook delay reduced when pulling allies Hook T1 now also improves melee damage Dynamo Fixed Quantum Entanglement not deselecting if you get silenced while targeting Kinetic Pulse T2 now affects melee damage too Fixed Magic Carpet + Dynamo heal interaction Singularity cooldown increased from 191s to 215s Singularity now deals half damage to objectives Singularity fixed tooltip referencing knock-up that it doesn't do Grey Talon Immobilizing Trap renamed to Spirit Snare Spirit Snare now applies a Curse debuff for 1.75s to all enemies in the radius when it triggers instead of a tether Spirit Snare T2 no longer increases slow by 1s Spirit Snare T2 now increases Curse debuff by 0.5s You can now shoot Charged Shot onto Spirit Snare center to trigger it to detonate immediately in a 30% increased radius Charged Shot can now secure orbs Haze Smoke Bomb T1 Sprint reduced from +6 to +5 Smoke Bomb T3 charge time reduced from 10s to 7s Fixed Fixation not working correctly with debuff resist Fixation T3 reduced from 0.15 to 0.12 Sleep state no longer disables the target. It instead allows them to move at 2 m/s and be unable to take any other action (including stamina, mantle, parry etc). The target still wakes up on damage. Sleep dagger now takes effect immediately, rather than after a brief delay Fixed creeps sometimes attacking and waking on sleeping targets Bullet Dance cooldown increased from 138s to 150s Bullet Dance T1 reduced from +7 to +6 Spirit Damage Bullet Dance T2 increased from -38s to -40s Bullet Dance fixed an issue causing the game to freeze for the duration of the ult channel Infernus Flame Dash cooldown reduced from 40s to 35s Flame Dash T3 changed from -19s CD to -15s Flame Dash T3 now also makes the ability charged (15s charge time) Afterburn spirit scaling increased from 0.5 to 0.6 Ivy Melee damage and growth reduced by 15% Starting Health reduced from 550 to 525 Watcher's Covenant fixed to replicate healing even when you are full Watcher's Covenant now initially locks onto the target in your facing direction if there is one Stone Form now shows the Ivy player a visible radius indicator for where your hero will hit Kudzu Bomb now grows on the ground if it hits geo instead of floating in the air Air Drop damage reduced from 150 to 125 Fixed Phantom Strike not grounding Ivy when using Air Drop Air Drop now lets you choose to significantly reduce your initial upward momentum by holding the fly key down while casting the ability Kelvin Fixed some issues with being unable to shoot over half-height cover Frost Grenade now also reduces Stamina Regeneration during the slow duration Frozen Shelter now created on key up. While the key is down an outline of the area will be shown Frozen Shelter cooldown increased from 127s to 130s Frozen Shelter T2 increased from -38s to -40s Lady Geist Malice can now secure orbs Soul Exchange T2 changed from \"-10% Min Health\" to \"On cast +40% Fire Rate for 8s\" Soul Exchange T3 changed from \"On cast, +40% Fire Rate and +40% Spirit Resist for 8s\" to \"Silences enemies in 15m radius for 3s\" Life Drain duration increased from 2s to 2.5s Life Drain T3 changed from \"Enemy is Silenced while being Life Drained\" to \"Ability becomes charged and grants +1 Charge\". You can cast multiple Life Drains at the same time on different targets, no Charge Time. Lash Ground Strike T1 improved from -9.5s Cooldown to -10s Death Slam cooldown increased from 137s to 140s Death Slam channel time increased from 2s to 2.3s Death Slam Impact radius increased from 5m to 6m Death Slam cone angle increased from 75 to 85 Death Slam cast range increased from 18m to 20m Death Slam T2 changed from +100 damage to -30s Cooldown Death Slam T3 changed from -56s Cooldown to Impact Area Stuns for 1s Death Slam fixed a rendering issue that could lead to crashes, especially in tight spaces like Mid Boss arena McGinnis Mini Turrets HP gain per boon increased from 20 to 30 Mini Turrets no longer limit the damage they take to 33% of HP per second Mini Turrets now have a minimum lifetime of 4s. If they are killed during this time, they will be marked for death regardless of what happens during that time. There will be a visual indication that they are malfunctioning/dying. Mini Turrets Fire Rate reduced by 20% Mirage Fire Scarabs now applies its drain over 4s instead of frontloaded Fire Scarabs no longer restricts you from hitting the same target (debuff duration refreshes) Fire Scarabs launch window increased from 5s to 8s (can be extended by duration extender) Traveler now allows you to rotate the camera Traveler T2 changed from \"-56 Cooldown\" to \"Grants Ally Traveler Benefits\" (if cast on an enemy, it'll give the bonus to the closest ally hero within 30m) Mo & Krill Burrow is no longer affected by Shoulder Charge Spectral Wall no longer hits you while you are Burrowed Scorn now heals you instantly rather than over 1s Combo health gain tooltip clarified Paradox Time Wall Time Stop duration reduced from 0.6s to 0.5s Kinetic Carbine Max Stop duration reduced from 0.5s to 0.4s Kinetic Carbine T1 reduced from +0.5s to +0.4s Pocket Health growth reduced from 31 to 27 Enchanter's Satchel T1 increased from -4.75s to -5s Enchanter's Satchel Escape Duration reduced from 2s to 1.5s Enchanter's Satchel T3 now also increases Escape Duration by +0.5s Flying Cloak duration increased from 3.2 to 3.4s (slower speed, same overall distance) Affliction now immediately deals 18% of Current HP on application Affliction DPS reduced from 27 to 12 Affliction DPS Spirit Power scaling reduced from 0.3 to 0.22 Affliction radius reduced from 14m to 9m Affliction T3 reduced from +27 DPS to +15 DPS Affliction T3 now also increases range by +5m and increases initial damage by 5% Seven Storm Cloud now grants you a secondary ability Lightning Strike. It is a one time use AoE ability. You can target anywhere in your ultimate range, after a 2s delay it releases a vertical lightning strike onto a 6m area, knocking enemies away from that radius (6m knockback) and dealing 150 Damage (1.5 spirit scaling). There is a visual indicator for enemies that that area is about to be hit. Storm Cloud DPS reduced from 125 to 110 Storm Cloud T3 now also allows you to float around at 2.5m/s speed Shiv Fixed some targeting issues with Killing Blow Vindicta Health reduced from 550 to 525 Crow Familiar projectile speed increased from 3500 to 4750 Stake cooldown reduced from 42s to 40s Stake T2 increased from -19s Cooldown to -20s Stake T3 reduced from +0.75s to 0.5s Stake T3 now also increases capture radius by +2m Assassinate time between charges increased from 1.6s to 2s Assassinate base damage reduced from 130 to 120 Assassinate T2 damage reduced from 140 to 130 Viscous Fixed visual parry cooldown bug with Puddle Punch The Cube cooldown reduced from 48s to 42s The Cube cast range reduced from 30m to 26m Puddle Punch radius increased from 4 to 4.5 Puddle Punch slow reduced from 20% to 15% Puddle Punch T2 slow reduced from 20% to 15% Puddle Punch T3 now also causes the Punch to become a heavy melee Goo Ball damage Spirit Power scaling reduced from 1.3 to 1.1 Goo Ball damage T2 reduced from 120 to 90 Warden Fire Rate Spirit Power scaling reduced from 0.25 to 0.22 Last Stand Resistance reduced from 60% to 30% Last Stand now only goes on cooldown for 20s when interrupted rather than full Last Stand T2 now also reduces cooldown by 35s Last Stand T3 changed from \"-56s Cooldown\" to \"+50% Bullet and Spirit Resistance During Channel and +2.5s Duration\" Wraith Bullet damage growth increased 0.37 to 0.39 Full Auto T2 Spirit Damage Per Bullet now has default 0.05 Spirit Power scaling Full Auto T3 reduces the improved Spirit Power scaling from 0.1 to 0.05 Full Auto T3 changed from 30% Bullet Lifesteal to 20% Bullet and Spirit Lifesteal Telekinesis cast time reduced from 0.7s to 0.4s Telekinesis projectile speed increased from 650 to 750 Telekinesis now briefly lifts the enemy and then slams them to the ground and leaves the target with 2.5s of silence and disarm Telekinesis T2 duration now applies to the silence and disarm, increased to +0.75s Telekinesis T3 now causes the projectile to bounce to another nearby hero within 20m Yamato Flying Strike T3 now also lets you grapple to ally heroes Shadow Transformation cast time reduced from 2s to 1.5s Shadow Transformation no longer has a 0.6s post cast time Shadow Transformation T3 now also increases Resist by 15% Close Quarters Weapon Damage reduced from 25% to 22% Bullet Resist reduced from 5% to 4% Headshot Booster Cooldown increased from 7.5s to 8.5s Monster Rounds Weapon Damage vs NPC reduced from 30% to 26% Rapid Rounds Fire Rate reduced from 11% to 10% Restorative Shot Weapon Damage reduced from 6% to 3% Berserker Now builds into Frenzy Active Reload Ammo increased from 18% to 24% Fleetfoot Cooldown increased from 19s to 20s Melee Charge Bonus Health reduced from +75 to +65 Point Blank Now provides +20% Melee Resistance Toxic Bullets Bleed damage increased from 2.5% to 2.75% Alchemical Fire Spirit Power reduced from 11 to 7 Added alternate desaturated variant for friendly versions of this Sharpshooter Now reduces your Fire Rate by 10% and movespeed by 0.5 Weapon Damage increased from 20% to 30% Far range Weapon Damage increased from +50% to +70% Titanic Magazine Melee Resistance increased from 25% to 30% Frenzy Now builds from Berserker. Grants Berserker passive. Increases bonus per stack from 6% to 8%. Provides +12 ammo, 150 Bonus Health, +10% Bullet Resist. Stat bonuses when 50% below unchanged (4 m/s, 40% Fire Rate, 55% Bullet Resist, has 4s buffer memory) Crippling Headshot The headshot debuff will now stack from different sources, diminishingly (24%, 12%, 6%, etc) Shadow Weave Spot radius increased from 22m to 26m Lucky Shot Proc Chance reduced from 35% to 34% Silencer Buildup difficulty increased by 18% Spiritual Overflow Cooldown Reduction reduced from 15% to 12% Extra Stamina Fire Rate reduced from 6% to 5% Healing Rite Health bonus reduced from +45 to +30 Healing Nova Time to heal increased from 2s to 2.75s Restorative Locket Cooldown reduced from 30s to 25s Veil Walker When shot while invisible, you will require 1s to go back invisible rather than 0.25s Cooldown increased from 18s to 22s Majestic Leap No longer gets interrupted on slam down if you get shot Metal Skin Duration increased from 3.5s to 4s Stamina movement distance reduced by 25% Rescue Beam Range reduced from 32m to 28m Unstoppable Now has 20% Slow Resistance Leech No longer provides +12% Cooldown Reduction Now upgrades from Healbane. Provides +60% Anti Healing for 8s on Spirit Damage dealt. Infuser Duration increased from 6s to 8s No longer grants +50 Health Now grants +70 Spirit Shield Slowing Hex Cooldown increased from 26s to 28s Suppressor Duration increased from 2s to 2.5s Decay Bleed damage increased from 1.4% to 1.5% Rapid Recharge Cooldown for charged abilities reduced from 30% to 25% Ethereal Shift Allows you to float around slowly (2 m/s) Arcane Surge Ability range reduced from +20% to +18% Ability duration reduced from +20% to +18 Spirit Power reduced from +20 to +18 Mystic Slow Duration increased from 2s to 2.5s Surge of Power Fire Rate increased from 10% to 15% Knockdown Stun duration reduced from 0.9 to 0.75 Stun now lasts 1s longer against airborne targets based on how high off the ground they are (up to 30m) Refresher Cast delay increased from 0.3s to 0.6s Diviner's Kevlar Cooldown Reduction reduced from 12% to 10% Ability Duration increased from 7% to 10% Mystic Reverb Damage increased from 45% to 50% Magic Carpet Duration increased from 7s to 8s"
``


# General Changes

- Added a new hero, Raven, to Hero Labs
- Added park theming to purple lane
- Added park backdrop to park side of map
- Updated tree models to new visual style and added player collision to canopies
- For each player on the main leaderboard, you can see their top 3 heroes as well as their overall skill rating
- Moved the post-game survey to the final score screen
- Added text box field to the post-game survey
- Muting a player now also silences map drawing, pings, and chatwheel messages
- Various rendering performance improvements on map assets
- Added two new setting options "Force English Hero Names" and "Force English Item Names", which will display those values in English regardless of your chosen language
- Added Toggle Crouch as a new keybind
- Added a new setting option: "Additional Build Search Language", which lets you select a language to search for when requesting builds in addition to the current display language of the client.
- Fixed shop search not working in the shop when opened from Resources
- Revisions to melee parry effect and removal of the parry fail effect to make parries more clear
- Tweaked falloff range and toned down bass frequencies of hotel music
- Added Pocket Barrage cast delay sound
- Updated Pocket Enchanted Satchel cast sound
- Passive cooldown indicator now shows when the item is off cooldown instead of 1 second before
- Fixed invulnerable-to-debuff sound effect playing at wrong times
- Fixed melee damage audio playing despite no damage dealt
- Fixed rejuv collect sound playing from wrong location in hero sandbox
- Updated parry cast and parry success sounds
- Mirage now has custom animations for most of his core movement
- Fixed being able to wall jump off of the same surface multiple times
- Fixed the Damage Report UI clipping into the shop in Sandbox mode
- Fixed shop showing with a broken build tab if you had previously navigated to the hero builds, then opened it from Resources
- Fixed clicking on minimap not taking you to that location as a spectator
- Fade rooftop antenna ambient effects so that they are not visible at a distance
- Visual revisions to Quantum entanglement effect
- Reverted recent updates to Shiv run animations
- Increased volume and adjusted the mix of sounds for firing while disarmed and using abilities while silenced
- Lash's Flog impact sound adjusted for better feedback for attacking player
- Fixed bug preventing purchase sound from playing when buying/quickbuying Active or Imbued items
- Visual updates to Mirage muzzle flash and tracers
- Updated Bullet Flurry tracers to be spirit-based
- Fixed Bebop's bomb damage growth not being reflected in the tooltip
- Fixed Grey Talon's spirit power growth from his ult not being reflected in the shop
- Fix to Yamato Shadow Transformation visuals when duration is extended after killing an enemy
- Fixed some item sounds playing on caster instead of target
- Updated Krill VO - largely remastering pass, but some new content
- Updated Ivy VO - largely remastering pass, but also fixed some lines with Spanish pronunciation issues
- Fixed a regression where Kelvin referenced Grey Talon incorrectly
- Updated Divine Barrier cast sound
- Added Telemetry HUD options to the settings menu. The Telemetry HUD is an in-game HUD which can be used to monitor the frame rate and network conditions. The Telemetry HUD can be enabled under Settings > Game. More information on the HUD can be found here: https://help.steampowered.com/en/faqs/view/5E6F-5B36-5485-F6B9
- Added new Learn to Play tutorial images in collaboration with Toastyghostey (https://www.instagram.com/toastyghostey/)
- Steam Input Support:
- Added support for new Crouch Toggle button
- Added 3 new Official Control Schemes: { Standard | Gyro | FlickStick }. Thanks to @FlickStickVids for consultation.
- Added versioning system to Configs, so that outdated configs are unloaded
- Added an Extra Competitive option to allow players to control what type of players are placed on their team. If you prefer to play with higher levels of coordination, communication, and competitiveness, then you can use this option to tell the matchmaker to build your team with like-minded allies. This option will sometimes be inactive in scenarios where the pool is very shallow (large portions of Eternus, off peak hours like 5am, extremely long queue, etc.), but otherwise in most normal scenarios the matchmaker will attempt to find you similar players.
- The new Extra Competitive option, Incoming Chat, and Lane Preference (party only) settings are now collected within a 'Queue Options' button on the dashboard below the profile area
- The recent change to increase party size allowed at the top MMR (from 2 to 3) reverted for Eternus and up, but maintained for Ascendant
- The matchmaker will now try to prioritize each team having at least 2 frontliners when it has the option to do so
- Ability Range stat now has diminishing stacking
- Ability Duration stat now has diminishing stacking
- Fire Rate now has a minimum final value of -50%
- Heroes now have +0.5 Sprint
- Sprint Boots reduced from +2 Sprint to +1.5
- Enduring Speed reduced from +2 Sprint to +1.5
- Carrying Urn now sets and limits your movespeed to a fixed 13 (this includes things like Ivy Air Drop). It no longer provides sprint. The speed cannot be reduced or increased.
- Urn spawn point now alternates left and right starting with left, rather than being random
- Shooting a trooper on a zipline now causes other troopers near it on the zipline to dismount as well
- Flying over buildings no longer causes you to get zapped, only standing on the building does
- Patron HP reduced from 10k to 7.5k
- Downed Patron HP reduced from 18k to 13.5k
- Patron HP grows by 250/Min starting 20 min
- Downed Patron HP grows by 450/Min starting 20 min (overall, these are -25% HP at 20 min, 0% at 30 min, and +25% at 40 min)
- Added a tick based souls system that gives the bottom two net worth players on the team a small amount of souls per second. The amount of souls available to distribute to the bottom two players is based on the souls gathered by your team (2% and 1%). This occurs after the laning phase.
- Added new limiting function for the soul orb duplication abuses during the laning phase. You shouldn't experience any real difference in normal gameplay:
- Reverted a few changes recently related to soul duplication issues
- Reverted: - Guardians now deal 25% more damage to troopers
- Reverted: - Guardians now take 25% more damage from troopers/players
- Reverted: - Range to be considered for souls reduced by 5m
- Reverted: - Troopers now do 20% more damage to each other
- Basic Magazine: Weapon Damage reduced from 15% to 12%
- High-Velocity Mag: Weapon Damage reduced from 13% to 11%
- Hollow Point Ward: Threshold increased from 60% to 65%
- Hollow Point Ward: Weapon Damage reduced from 22% to 20%
- Spellslinger Headshots: Proc bonus changed from 3% Spirit Power to 3% Spirit Amp
- Enchanter's Barrier: Cooldown reduction reduced from 8% to 6%
- Return Fire no longer has +9 Spirit Power
- Return Fire now has +3 HP Regen
- Return Fire now has +10% Ammo
- Debuff Remover: Buff duration increased from 4s to 5s
- Debuff Remover: Heal on active increased from 10% Max HP to 300 HP
- Withering Whip: Duration increased from 4.5s to 5s
- Withering Whip: Bullet Resist reduced from -11% to -12%
- Silence Glyph: Now pierces through all enemies in the path
- Silence Glyph: Projectile and collision size increased by 40%

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Dynamo", "Grey Talon", "Haze", "Infernus", "Ivy", "Kelvin", "Lady Geist", "Lash", "McGinnis", "Mirage", "Mo &amp; Krill", "Paradox", "Pocket", "Seven", "Shiv", "Vindicta", "Viscous", "Warden", "Wraith", "Yamato"]} />
``

=hero:abrams:
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))

- Bullet Damage decreased from 4.68 to 4.5

==ability:siphon-life:
[[/hero/abrams?ability=siphon-life]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp]] Siphon Life change history))
### [[/hero/abrams?ability=siphon-life]]((Siphon Life))

- Spirit Siphon spirit scaling increased from 0.5 to 0.65
==
=
=hero:bebop:
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))

==ability:uppercut:
### Uppercut

- Uppercut now only locks enemies out of air control for a max of 0.5s (down from 1s)
==
==ability:hook:
### Hook

- Hook now shows a hero icon when you connect with a target
- Hook delay reduced when pulling allies
- Hook T1 now also improves melee damage
==
=
=hero:dynamo:
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))

==ability:quantum-entanglement:
[[/hero/dynamo?ability=quantum-entanglement]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp]] Quantum Entanglement change history))
### [[/hero/dynamo?ability=quantum-entanglement]]((Quantum Entanglement))

- Fixed Quantum Entanglement not deselecting if you get silenced while targeting
==
==ability:kinetic-pulse:
[[/hero/dynamo?ability=kinetic-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp]] Kinetic Pulse change history))
### [[/hero/dynamo?ability=kinetic-pulse]]((Kinetic Pulse))

- Kinetic Pulse T2 now affects melee damage too
==
==ability:rejuvenating-aurora:
[[/hero/dynamo?ability=rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/hero/dynamo?ability=rejuvenating-aurora]]((Rejuvenating Aurora))

- Fixed Magic Carpet + Dynamo heal interaction
==
==ability:singularity:
[[/hero/dynamo?ability=singularity]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp]] Singularity change history))
### [[/hero/dynamo?ability=singularity]]((Singularity))

- Singularity cooldown increased from 191s to 215s
- Singularity now deals half damage to objectives

- Singularity fixed tooltip referencing knock-up that it doesn't do
==
=
=hero:grey-talon:
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))

==ability:spirit-snare:
[[/hero/grey-talon?ability=spirit-snare]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp]] Spirit Snare change history))
### [[/hero/grey-talon?ability=spirit-snare]]((Spirit Snare))

- Immobilizing Trap renamed to Spirit Snare
- Spirit Snare now applies a Curse debuff for 1.75s to all enemies in the radius when it triggers instead of a tether
- Spirit Snare T2 no longer increases slow by 1s
- Spirit Snare T2 now increases Curse debuff by 0.5s
==
==ability:charged-shot:
[[/hero/grey-talon?ability=charged-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp]] Charged Shot change history))
### [[/hero/grey-talon?ability=charged-shot]]((Charged Shot))

- You can now shoot Charged Shot onto Spirit Snare center to trigger it to detonate immediately in a 30% increased radius
- Charged Shot can now secure orbs
==
=
=hero:haze:
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))

==ability:smoke-bomb:
[[/hero/haze?ability=smoke-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp]] Smoke Bomb change history))
### [[/hero/haze?ability=smoke-bomb]]((Smoke Bomb))

- Smoke Bomb T1 Sprint reduced from +6 to +5
- Smoke Bomb T3 charge time reduced from 10s to 7s
==
==ability:fixation:
[[/hero/haze?ability=fixation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp]] Fixation change history))
### [[/hero/haze?ability=fixation]]((Fixation))

- Fixed Fixation not working correctly with debuff resist
- Fixation T3 reduced from 0.15 to 0.12
==
==ability:sleep-dagger:
[[/hero/haze?ability=sleep-dagger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp]] Sleep Dagger change history))
### [[/hero/haze?ability=sleep-dagger]]((Sleep Dagger))

- Sleep state no longer disables the target. It instead allows them to move at 2 m/s and be unable to take any other action (including stamina, mantle, parry etc). The target still wakes up on damage.
- Sleep dagger now takes effect immediately, rather than after a brief delay
- Fixed creeps sometimes attacking and waking on sleeping targets
==
==ability:bullet-dance:
[[/hero/haze?ability=bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/hero/haze?ability=bullet-dance]]((Bullet Dance))

- Bullet Dance cooldown increased from 138s to 150s
- Bullet Dance T1 reduced from +7 to +6 Spirit Damage
- Bullet Dance T2 increased from -38s to -40s
- Bullet Dance fixed an issue causing the game to freeze for the duration of the ult channel
==
=
=hero:infernus:
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))

==ability:flame-dash:
[[/hero/infernus?ability=flame-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash change history))
### [[/hero/infernus?ability=flame-dash]]((Flame Dash))

- Flame Dash cooldown reduced from 40s to 35s
- Flame Dash T3 changed from -19s CD to -15s
- Flame Dash T3 now also makes the ability charged (15s charge time)
==
==ability:afterburn:
[[/hero/infernus?ability=afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/hero/infernus?ability=afterburn]]((Afterburn))

- Afterburn spirit scaling increased from 0.5 to 0.6
==
=
=hero:ivy:
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))

- Melee damage and growth reduced by 15%
- Starting Health reduced from 550 to 525

==ability:kudzu-connection:
[[/hero/ivy?ability=kudzu-connection]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp]] Kudzu Connection change history))
### [[/hero/ivy?ability=kudzu-connection]]((Kudzu Connection))

- Watcher's Covenant fixed to replicate healing even when you are full
==
==ability:watcher-s-covenant:
### Watcher's Covenant

- Watcher's Covenant now initially locks onto the target in your facing direction if there is one
==
==ability:stone-form:
[[/hero/ivy?ability=stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/hero/ivy?ability=stone-form]]((Stone Form))

- Stone Form now shows the Ivy player a visible radius indicator for where your hero will hit
==
==ability:kudzu-bomb:
### Kudzu Bomb

- Kudzu Bomb now grows on the ground if it hits geo instead of floating in the air
==
==ability:air-drop:
[[/hero/ivy?ability=air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/hero/ivy?ability=air-drop]]((Air Drop))

- Air Drop damage reduced from 150 to 125

- Fixed Phantom Strike not grounding Ivy when using Air Drop
- Air Drop now lets you choose to significantly reduce your initial upward momentum by holding the fly key down while casting the ability
==
=
=hero:kelvin:
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))

- Fixed some issues with being unable to shoot over half-height cover

==ability:frost-grenade:
[[/hero/kelvin?ability=frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/hero/kelvin?ability=frost-grenade]]((Frost Grenade))

- Frost Grenade now also reduces Stamina Regeneration during the slow duration
==
==ability:frozen-shelter:
[[/hero/kelvin?ability=frozen-shelter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp]] Frozen Shelter change history))
### [[/hero/kelvin?ability=frozen-shelter]]((Frozen Shelter))

- Frozen Shelter now created on key up. While the key is down an outline of the area will be shown
- Frozen Shelter cooldown increased from 127s to 130s
- Frozen Shelter T2 increased from -38s to -40s
==
=
=hero:lady-geist:
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))

==ability:malice:
[[/hero/lady-geist?ability=malice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp]] Malice change history))
### [[/hero/lady-geist?ability=malice]]((Malice))

- Malice can now secure orbs
==
==ability:soul-exchange:
[[/hero/lady-geist?ability=soul-exchange]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp]] Soul Exchange change history))
### [[/hero/lady-geist?ability=soul-exchange]]((Soul Exchange))

- Soul Exchange T2 changed from "-10% Min Health" to "On cast +40% Fire Rate for 8s"
- Soul Exchange T3 changed from "On cast, +40% Fire Rate and +40% Spirit Resist for 8s" to "Silences enemies in 15m radius for 3s"
==
==ability:life-drain:
[[/hero/lady-geist?ability=life-drain]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp]] Life Drain change history))
### [[/hero/lady-geist?ability=life-drain]]((Life Drain))

- Life Drain duration increased from 2s to 2.5s
- Life Drain T3 changed from "Enemy is Silenced while being Life Drained" to "Ability becomes charged and grants +1 Charge". You can cast multiple Life Drains at the same time on different targets, no Charge Time.
==
=
=hero:lash:
[[/hero/lash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]] Lash patch history))
## [[/hero/lash]]((Lash))

==ability:ground-strike:
[[/hero/lash?ability=ground-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp]] Ground Strike change history))
### [[/hero/lash?ability=ground-strike]]((Ground Strike))

- Ground Strike T1 improved from -9.5s Cooldown to -10s
==
==ability:death-slam:
[[/hero/lash?ability=death-slam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp]] Death Slam change history))
### [[/hero/lash?ability=death-slam]]((Death Slam))

- Death Slam cooldown increased from 137s to 140s
- Death Slam channel time increased from 2s to 2.3s
==
==ability:death-slam-impact:
### [[/hero/lash?ability=death-slam]]((Death Slam Impact))

- Death Slam Impact radius increased from 5m to 6m

- Death Slam cone angle increased from 75 to 85
- Death Slam cast range increased from 18m to 20m
==
==ability:death-slam:
[[/hero/lash?ability=death-slam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp]] Death Slam change history))
### [[/hero/lash?ability=death-slam]]((Death Slam))

- Death Slam T2 changed from +100 damage to -30s Cooldown
- Death Slam T3 changed from -56s Cooldown to Impact Area Stuns for 1s

- Death Slam fixed a rendering issue that could lead to crashes, especially in tight spaces like Mid Boss arena
==
=
=hero:mcginnis:
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))

==ability:mini-turret:
[[/hero/mcginnis?ability=mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turret change history))
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turret))

- Mini Turrets HP gain per boon increased from 20 to 30
==
==ability:mini-turrets:
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turrets))

- Mini Turrets no longer limit the damage they take to 33% of HP per second
- Mini Turrets now have a minimum lifetime of 4s. If they are killed during this time, they will be marked for death regardless of what happens during that time. There will be a visual indication that they are malfunctioning/dying.
==
==ability:mini-turrets-fire-rate:
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turrets Fire Rate))

- Mini Turrets Fire Rate reduced by 20%
==
=
=hero:mirage:
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))

==ability:fire-scarabs:
[[/hero/mirage?ability=fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/hero/mirage?ability=fire-scarabs]]((Fire Scarabs))

- Fire Scarabs now applies its drain over 4s instead of frontloaded
- Fire Scarabs no longer restricts you from hitting the same target (debuff duration refreshes)
- Fire Scarabs launch window increased from 5s to 8s (can be extended by duration extender)
==
==ability:traveler:
[[/hero/mirage?ability=traveler]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp]] Traveler change history))
### [[/hero/mirage?ability=traveler]]((Traveler))

- Traveler now allows you to rotate the camera
- Traveler T2 changed from "-56 Cooldown" to "Grants Ally Traveler Benefits" (if cast on an enemy, it'll give the bonus to the closest ally hero within 30m)
==
=
=hero:mo-krill:
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))

==ability:burrow:
[[/hero/mo-krill?ability=burrow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp]] Burrow change history))
### [[/hero/mo-krill?ability=burrow]]((Burrow))

- Burrow is no longer affected by Shoulder Charge
==
==ability:spectral-wall:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp]]((Spectral Wall))
### Spectral Wall

- Spectral Wall no longer hits you while you are Burrowed
==
==ability:scorn:
[[/hero/mo-krill?ability=scorn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp]] Scorn change history))
### [[/hero/mo-krill?ability=scorn]]((Scorn))

- Scorn now heals you instantly rather than over 1s
==
==ability:combo:
[[/hero/mo-krill?ability=combo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp]] Combo change history))
### [[/hero/mo-krill?ability=combo]]((Combo))

- Combo health gain tooltip clarified
==
=
=hero:paradox:
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))

==ability:time-wall-time-stop:
### [[/hero/paradox?ability=time-wall]]((Time Wall Time Stop))

- Time Wall Time Stop duration reduced from 0.6s to 0.5s
==
==ability:kinetic-carbine-max-stop:
### [[/hero/paradox?ability=kinetic-carbine]]((Kinetic Carbine Max Stop))

- Kinetic Carbine Max Stop duration reduced from 0.5s to 0.4s
==
==ability:kinetic-carbine:
[[/hero/paradox?ability=kinetic-carbine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp]] Kinetic Carbine change history))
### [[/hero/paradox?ability=kinetic-carbine]]((Kinetic Carbine))

- Kinetic Carbine T1 reduced from +0.5s to +0.4s
==
=
=hero:pocket:
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))

- Health growth reduced from 31 to 27

==ability:enchanter-s-satchel:
[[/hero/pocket?ability=enchanters-satchel]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp]] Enchanter's Satchel change history))
### [[/hero/pocket?ability=enchanters-satchel]]((Enchanter's Satchel))

- Enchanter's Satchel T1 increased from -4.75s to -5s
==
==ability:enchanter-s-satchel-escape-duration:
### [[/hero/pocket?ability=enchanters-satchel]]((Enchanter's Satchel Escape Duration))

- Enchanter's Satchel Escape Duration reduced from 2s to 1.5s
==
==ability:enchanter-s-satchel:
[[/hero/pocket?ability=enchanters-satchel]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp]] Enchanter's Satchel change history))
### [[/hero/pocket?ability=enchanters-satchel]]((Enchanter's Satchel))

- Enchanter's Satchel T3 now also increases Escape Duration by +0.5s
==
==ability:flying-cloak:
[[/hero/pocket?ability=flying-cloak]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp]] Flying Cloak change history))
### [[/hero/pocket?ability=flying-cloak]]((Flying Cloak))

- Flying Cloak duration increased from 3.2 to 3.4s (slower speed, same overall distance)
==
==ability:affliction:
[[/hero/pocket?ability=affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/hero/pocket?ability=affliction]]((Affliction))

- Affliction now immediately deals 18% of Current HP on application
==
==ability:affliction-dps:
### [[/hero/pocket?ability=affliction]]((Affliction DPS))

- Affliction DPS reduced from 27 to 12
==
==ability:affliction-dps-spirit-power:
### [[/hero/pocket?ability=affliction]]((Affliction DPS Spirit Power))

- Affliction DPS Spirit Power scaling reduced from 0.3 to 0.22
==
==ability:affliction:
[[/hero/pocket?ability=affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/hero/pocket?ability=affliction]]((Affliction))

- Affliction radius reduced from 14m to 9m
- Affliction T3 reduced from +27 DPS to +15 DPS
- Affliction T3 now also increases range by +5m and increases initial damage by 5%
==
=
=hero:seven:
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))

==ability:storm-cloud:
[[/hero/seven?ability=storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/hero/seven?ability=storm-cloud]]((Storm Cloud))

- Storm Cloud now grants you a secondary ability Lightning Strike. It is a one time use AoE ability. You can target anywhere in your ultimate range, after a 2s delay it releases a vertical lightning strike onto a 6m area, knocking enemies away from that radius (6m knockback) and dealing 150 Damage (1.5 spirit scaling). There is a visual indicator for enemies that that area is about to be hit.
==
==ability:storm-cloud-dps:
### [[/hero/seven?ability=storm-cloud]]((Storm Cloud DPS))

- Storm Cloud DPS reduced from 125 to 110
==
==ability:storm-cloud:
[[/hero/seven?ability=storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/hero/seven?ability=storm-cloud]]((Storm Cloud))

- Storm Cloud T3 now also allows you to float around at 2.5m/s speed
==
=
=hero:shiv:
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))

==ability:killing-blow:
[[/hero/shiv?ability=killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/hero/shiv?ability=killing-blow]]((Killing Blow))

- Fixed some targeting issues with Killing Blow
==
=
=hero:vindicta:
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))

- Health reduced from 550 to 525

==ability:crow-familiar:
[[/hero/vindicta?ability=crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow Familiar change history))
### [[/hero/vindicta?ability=crow-familiar]]((Crow Familiar))

- Crow Familiar projectile speed increased from 3500 to 4750
==
==ability:stake:
[[/hero/vindicta?ability=stake]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp]] Stake change history))
### [[/hero/vindicta?ability=stake]]((Stake))

- Stake cooldown reduced from 42s to 40s
- Stake T2 increased from -19s Cooldown to -20s
- Stake T3 reduced from +0.75s to 0.5s
- Stake T3 now also increases capture radius by +2m
==
==ability:assassinate:
[[/hero/vindicta?ability=assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/hero/vindicta?ability=assassinate]]((Assassinate))

- Assassinate time between charges increased from 1.6s to 2s
- Assassinate base damage reduced from 130 to 120
- Assassinate T2 damage reduced from 140 to 130
==
=
=hero:viscous:
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))

==ability:puddle-punch:
[[/hero/viscous?ability=puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/hero/viscous?ability=puddle-punch]]((Puddle Punch))

- Fixed visual parry cooldown bug with Puddle Punch
==
==ability:the-cube:
[[/hero/viscous?ability=the-cube]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp]] The Cube change history))
### [[/hero/viscous?ability=the-cube]]((The Cube))

- The Cube cooldown reduced from 48s to 42s

- The Cube cast range reduced from 30m to 26m
==
==ability:puddle-punch:
[[/hero/viscous?ability=puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/hero/viscous?ability=puddle-punch]]((Puddle Punch))

- Puddle Punch radius increased from 4 to 4.5
- Puddle Punch slow reduced from 20% to 15%
- Puddle Punch T2 slow reduced from 20% to 15%
- Puddle Punch T3 now also causes the Punch to become a heavy melee
==
==ability:goo-ball:
[[/hero/viscous?ability=goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball change history))
### [[/hero/viscous?ability=goo-ball]]((Goo Ball))

- Goo Ball damage Spirit Power scaling reduced from 1.3 to 1.1
- Goo Ball damage T2 reduced from 120 to 90
==
=
=hero:warden:
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))

- Fire Rate Spirit Power scaling reduced from 0.25 to 0.22

==ability:last-stand:
[[/hero/warden?ability=last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/hero/warden?ability=last-stand]]((Last Stand))

- Last Stand Resistance reduced from 60% to 30%
- Last Stand now only goes on cooldown for 20s when interrupted rather than full
- Last Stand T2 now also reduces cooldown by 35s
- Last Stand T3 changed from "-56s Cooldown" to "+50% Bullet and Spirit Resistance During Channel and +2.5s Duration"
==
=
=hero:wraith:
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))

- Bullet damage growth increased 0.37 to 0.39

==ability:full-auto:
[[/hero/wraith?ability=full-auto]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp]] Full Auto change history))
### [[/hero/wraith?ability=full-auto]]((Full Auto))

- Full Auto T2 Spirit Damage Per Bullet now has default 0.05 Spirit Power scaling
- Full Auto T3 reduces the improved Spirit Power scaling from 0.1 to 0.05
- Full Auto T3 changed from 30% Bullet Lifesteal to 20% Bullet and Spirit Lifesteal
==
==ability:telekinesis:
[[/hero/wraith?ability=telekinesis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp]] Telekinesis change history))
### [[/hero/wraith?ability=telekinesis]]((Telekinesis))

- Telekinesis cast time reduced from 0.7s to 0.4s
- Telekinesis projectile speed increased from 650 to 750
- Telekinesis now briefly lifts the enemy and then slams them to the ground and leaves the target with 2.5s of silence and disarm
- Telekinesis T2 duration now applies to the silence and disarm, increased to +0.75s
- Telekinesis T3 now causes the projectile to bounce to another nearby hero within 20m
==
=
=hero:yamato:
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))

==ability:flying-strike:
### Flying Strike

- Flying Strike T3 now also lets you grapple to ally heroes
==
==ability:shadow-transformation:
[[/hero/yamato?ability=shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/hero/yamato?ability=shadow-transformation]]((Shadow Transformation))

- Shadow Transformation cast time reduced from 2s to 1.5s
- Shadow Transformation no longer has a 0.6s post cast time
- Shadow Transformation T3 now also increases Resist by 15%
==
=
# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Active Reload", "Alchemical Fire", "Arcane Surge", "Berserker", "Close Quarters", "Crippling Headshot", "Decay", "Diviner's Kevlar", "Ethereal Shift", "Extra Stamina", "Fleetfoot", "Frenzy", "Headshot Booster", "Healing Nova", "Healing Rite", "Infuser", "Knockdown", "Leech", "Lucky Shot", "Magic Carpet", "Majestic Leap", "Melee Charge", "Metal Skin", "Monster Rounds", "Mystic Reverb", "Mystic Slow", "Point Blank", "Rapid Recharge", "Rapid Rounds", "Refresher", "Rescue Beam", "Restorative Locket", "Restorative Shot", "Shadow Weave", "Sharpshooter", "Silencer", "Slowing Hex", "Spiritual Overflow", "Suppressor", "Surge of Power", "Titanic Magazine", "Toxic Bullets", "Unstoppable", "Veil Walker"]} />
``

=item:active-reload:
[[/item/active-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp]] Active Reload patch history))
## [[/item/active-reload]]((Active Reload))

- Ammo increased from 18% to 24%
=
=item:alchemical-fire:
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))

- Spirit Power reduced from 11 to 7
- Added alternate desaturated variant for friendly versions of this
=
=item:arcane-surge:
[[/item/arcane-surge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp]] Arcane Surge patch history))
## [[/item/arcane-surge]]((Arcane Surge))

- Ability range reduced from +20% to +18%
- Ability duration reduced from +20% to +18
- Spirit Power reduced from +20 to +18
=
=item:berserker:
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))

- Now builds into Frenzy
=
=item:close-quarters:
[[/item/close-quarters]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp]] Close Quarters patch history))
## [[/item/close-quarters]]((Close Quarters))

- Weapon Damage reduced from 25% to 22%
- Bullet Resist reduced from 5% to 4%
=
=item:crippling-headshot:
[[/item/crippling-headshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp]] Crippling Headshot patch history))
## [[/item/crippling-headshot]]((Crippling Headshot))

- The headshot debuff will now stack from different sources, diminishingly (24%, 12%, 6%, etc)
=
=item:decay:
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))

- Bleed damage increased from 1.4% to 1.5%
=
=item:diviner-s-kevlar:
[[/item/diviners-kevlar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp]] Diviner's Kevlar patch history))
## [[/item/diviners-kevlar]]((Diviner's Kevlar))

- Cooldown Reduction reduced from 12% to 10%
- Ability Duration increased from 7% to 10%
=
=item:ethereal-shift:
[[/item/ethereal-shift]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp]] Ethereal Shift patch history))
## [[/item/ethereal-shift]]((Ethereal Shift))

- Allows you to float around slowly (2 m/s)
=
=item:extra-stamina:
[[/item/extra-stamina]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp]] Extra Stamina patch history))
## [[/item/extra-stamina]]((Extra Stamina))

- Fire Rate reduced from 6% to 5%
=
=item:fleetfoot:
[[/item/fleetfoot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp]] Fleetfoot patch history))
## [[/item/fleetfoot]]((Fleetfoot))

- Cooldown increased from 19s to 20s
=
=item:frenzy:
[[/item/frenzy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp]] Frenzy patch history))
## [[/item/frenzy]]((Frenzy))

- Now builds from Berserker. Grants Berserker passive. Increases bonus per stack from 6% to 8%. Provides +12 ammo, 150 Bonus Health, +10% Bullet Resist. Stat bonuses when 50% below unchanged (4 m/s, 40% Fire Rate, 55% Bullet Resist, has 4s buffer memory)
=
=item:headshot-booster:
[[/item/headshot-booster]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp]] Headshot Booster patch history))
## [[/item/headshot-booster]]((Headshot Booster))

- Cooldown increased from 7.5s to 8.5s
=
=item:healing-nova:
[[/item/healing-nova]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp]] Healing Nova patch history))
## [[/item/healing-nova]]((Healing Nova))

- Time to heal increased from 2s to 2.75s
=
=item:healing-rite:
[[/item/healing-rite]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp]] Healing Rite patch history))
## [[/item/healing-rite]]((Healing Rite))

- Health bonus reduced from +45 to +30
=
=item:infuser:
[[/item/infuser]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp]] Infuser patch history))
## [[/item/infuser]]((Infuser))

- Duration increased from 6s to 8s
- No longer grants +50 Health
- Now grants +70 Spirit Shield
=
=item:knockdown:
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))

- Stun duration reduced from 0.9 to 0.75
- Stun now lasts 1s longer against airborne targets based on how high off the ground they are (up to 30m)
=
=item:leech:
[[/item/leech]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp]] Leech patch history))
## [[/item/leech]]((Leech))

- No longer provides +12% Cooldown Reduction
- Now upgrades from Healbane. Provides +60% Anti Healing for 8s on Spirit Damage dealt.
=
=item:lucky-shot:
[[/item/lucky-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp]] Lucky Shot patch history))
## [[/item/lucky-shot]]((Lucky Shot))

- Proc Chance reduced from 35% to 34%
=
=item:magic-carpet:
[[/item/magic-carpet]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp]] Magic Carpet patch history))
## [[/item/magic-carpet]]((Magic Carpet))

- Duration increased from 7s to 8s
=
=item:majestic-leap:
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))

- No longer gets interrupted on slam down if you get shot
=
=item:melee-charge:
[[/item/melee-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp]] Melee Charge patch history))
## [[/item/melee-charge]]((Melee Charge))

- Bonus Health reduced from +75 to +65
=
=item:metal-skin:
[[/item/metal-skin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp]] Metal Skin patch history))
## [[/item/metal-skin]]((Metal Skin))

- Duration increased from 3.5s to 4s
- Stamina movement distance reduced by 25%
=
=item:monster-rounds:
[[/item/monster-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp]] Monster Rounds patch history))
## [[/item/monster-rounds]]((Monster Rounds))

- Weapon Damage vs NPC reduced from 30% to 26%
=
=item:mystic-reverb:
[[/item/mystic-reverb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp]] Mystic Reverb patch history))
## [[/item/mystic-reverb]]((Mystic Reverb))

- Damage increased from 45% to 50%
=
=item:mystic-slow:
[[/item/mystic-slow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp]] Mystic Slow patch history))
## [[/item/mystic-slow]]((Mystic Slow))

- Duration increased from 2s to 2.5s
=
=item:point-blank:
[[/item/point-blank]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp]] Point Blank patch history))
## [[/item/point-blank]]((Point Blank))

- Now provides +20% Melee Resistance
=
=item:rapid-recharge:
[[/item/rapid-recharge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp]] Rapid Recharge patch history))
## [[/item/rapid-recharge]]((Rapid Recharge))

- Cooldown for charged abilities reduced from 30% to 25%
=
=item:rapid-rounds:
[[/item/rapid-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp]] Rapid Rounds patch history))
## [[/item/rapid-rounds]]((Rapid Rounds))

- Fire Rate reduced from 11% to 10%
=
=item:refresher:
[[/item/refresher]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp]] Refresher patch history))
## [[/item/refresher]]((Refresher))

- Cast delay increased from 0.3s to 0.6s
=
=item:rescue-beam:
[[/item/rescue-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp]] Rescue Beam patch history))
## [[/item/rescue-beam]]((Rescue Beam))

- Range reduced from 32m to 28m
=
=item:restorative-locket:
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))

- Cooldown reduced from 30s to 25s
=
=item:restorative-shot:
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))

- Weapon Damage reduced from 6% to 3%
=
=item:shadow-weave:
[[/item/shadow-weave]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp]] Shadow Weave patch history))
## [[/item/shadow-weave]]((Shadow Weave))

- Spot radius increased from 22m to 26m
=
=item:sharpshooter:
[[/item/sharpshooter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp]] Sharpshooter patch history))
## [[/item/sharpshooter]]((Sharpshooter))

- Now reduces your Fire Rate by 10% and movespeed by 0.5
- Weapon Damage increased from 20% to 30%
- Far range Weapon Damage increased from +50% to +70%
=
=item:silencer:
[[/item/silencer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]] Silencer patch history))
## [[/item/silencer]]((Silencer))

- Buildup difficulty increased by 18%
=
=item:slowing-hex:
[[/item/slowing-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp]] Slowing Hex patch history))
## [[/item/slowing-hex]]((Slowing Hex))

- Cooldown increased from 26s to 28s
=
=item:spiritual-overflow:
[[/item/spiritual-overflow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp]] Spiritual Overflow patch history))
## [[/item/spiritual-overflow]]((Spiritual Overflow))

- Cooldown Reduction reduced from 15% to 12%
=
=item:suppressor:
[[/item/suppressor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp]] Suppressor patch history))
## [[/item/suppressor]]((Suppressor))

- Duration increased from 2s to 2.5s
=
=item:surge-of-power:
[[/item/surge-of-power]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp]] Surge of Power patch history))
## [[/item/surge-of-power]]((Surge of Power))

- Fire Rate increased from 10% to 15%
=
=item:titanic-magazine:
[[/item/titanic-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp]] Titanic Magazine patch history))
## [[/item/titanic-magazine]]((Titanic Magazine))

- Melee Resistance increased from 25% to 30%
=
=item:toxic-bullets:
[[/item/toxic-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp]] Toxic Bullets patch history))
## [[/item/toxic-bullets]]((Toxic Bullets))

- Bleed damage increased from 2.5% to 2.75%
=
=item:unstoppable:
[[/item/unstoppable]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp]] Unstoppable patch history))
## [[/item/unstoppable]]((Unstoppable))

- Now has 20% Slow Resistance
=
=item:veil-walker:
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))

- When shot while invisible, you will require 1s to go back invisible rather than 0.25s
- Cooldown increased from 18s to 22s
=