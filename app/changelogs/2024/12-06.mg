``attr:
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
``attr:
impact closed=#true {
  all {
    before win=0.5219 pick=0.4958 matches=160077 days=6
    after win=0.5114 pick=0.5245 matches=202797 days=10
  }
  high {
    before win=0.5102 pick=0.5553 matches=6496 days=6
    after win=0.5128 pick=0.5223 matches=6472 days=10
  }
}
``
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))

- Bullet Damage decreased from 4.68 to 4.5

==ability:siphon-life:
[[/ability/siphon-life]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp]] Siphon Life change history))
### [[/ability/siphon-life]]((Siphon Life))

- Spirit Siphon spirit scaling increased from 0.5 to 0.65
==
=
=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.5002 pick=0.7341 matches=237007 days=6
    after win=0.5048 pick=0.7297 matches=282163 days=10
  }
  high {
    before win=0.4937 pick=0.6346 matches=7424 days=6
    after win=0.4981 pick=0.6349 matches=7868 days=10
  }
}
``
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
``attr:
impact closed=#true {
  all {
    before win=0.5017 pick=0.503 matches=162420 days=6
    after win=0.4816 pick=0.4542 matches=175648 days=10
  }
  high {
    before win=0.5106 pick=0.4956 matches=5797 days=6
    after win=0.4914 pick=0.3718 matches=4607 days=10
  }
}
``
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))

==ability:quantum-entanglement:
[[/ability/quantum-entanglement]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp]] Quantum Entanglement change history))
### [[/ability/quantum-entanglement]]((Quantum Entanglement))

- Fixed Quantum Entanglement not deselecting if you get silenced while targeting
==
==ability:kinetic-pulse:
[[/ability/kinetic-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp]] Kinetic Pulse change history))
### [[/ability/kinetic-pulse]]((Kinetic Pulse))

- Kinetic Pulse T2 now affects melee damage too
==
==ability:rejuvenating-aurora:
[[/ability/rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/ability/rejuvenating-aurora]]((Rejuvenating Aurora))

- Fixed Magic Carpet + Dynamo heal interaction
==
==ability:singularity:
[[/ability/singularity]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp]] Singularity change history))
### [[/ability/singularity]]((Singularity))

- Singularity cooldown increased from 191s to 215s
- Singularity now deals half damage to objectives

- Singularity fixed tooltip referencing knock-up that it doesn't do
==
=
=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.4541 pick=0.4421 matches=142734 days=6
    after win=0.4683 pick=0.4543 matches=175685 days=10
  }
  high {
    before win=0.4595 pick=0.2783 matches=3256 days=6
    after win=0.4748 pick=0.4004 matches=4962 days=10
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))

==ability:spirit-snare:
[[/ability/spirit-snare]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp]] Spirit Snare change history))
### [[/ability/spirit-snare]]((Spirit Snare))

- Immobilizing Trap renamed to Spirit Snare
- Spirit Snare now applies a Curse debuff for 1.75s to all enemies in the radius when it triggers instead of a tether
- Spirit Snare T2 no longer increases slow by 1s
- Spirit Snare T2 now increases Curse debuff by 0.5s
==
==ability:charged-shot:
[[/ability/charged-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp]] Charged Shot change history))
### [[/ability/charged-shot]]((Charged Shot))

- You can now shoot Charged Shot onto Spirit Snare center to trigger it to detonate immediately in a 30% increased radius
- Charged Shot can now secure orbs
==
=
=hero:haze:
``attr:
impact closed=#true {
  all {
    before win=0.5392 pick=0.9818 matches=316982 days=6
    after win=0.519 pick=0.9549 matches=369251 days=10
  }
  high {
    before win=0.5093 pick=0.984 matches=11511 days=6
    after win=0.4748 pick=0.9195 matches=11395 days=10
  }
}
``
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))

==ability:smoke-bomb:
[[/ability/smoke-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp]] Smoke Bomb change history))
### [[/ability/smoke-bomb]]((Smoke Bomb))

- Smoke Bomb T1 Sprint reduced from +6 to +5
- Smoke Bomb T3 charge time reduced from 10s to 7s
==
==ability:fixation:
[[/ability/fixation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp]] Fixation change history))
### [[/ability/fixation]]((Fixation))

- Fixed Fixation not working correctly with debuff resist
- Fixation T3 reduced from 0.15 to 0.12
==
==ability:sleep-dagger:
[[/ability/sleep-dagger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp]] Sleep Dagger change history))
### [[/ability/sleep-dagger]]((Sleep Dagger))

- Sleep state no longer disables the target. It instead allows them to move at 2 m/s and be unable to take any other action (including stamina, mantle, parry etc). The target still wakes up on damage.
- Sleep dagger now takes effect immediately, rather than after a brief delay
- Fixed creeps sometimes attacking and waking on sleeping targets
==
==ability:bullet-dance:
[[/ability/bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/ability/bullet-dance]]((Bullet Dance))

- Bullet Dance cooldown increased from 138s to 150s
- Bullet Dance T1 reduced from +7 to +6 Spirit Damage
- Bullet Dance T2 increased from -38s to -40s
- Bullet Dance fixed an issue causing the game to freeze for the duration of the ult channel
==
=
=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=0.4661 pick=0.7262 matches=234472 days=6
    after win=0.4983 pick=0.8249 matches=318970 days=10
  }
  high {
    before win=0.4439 pick=0.5597 matches=6547 days=6
    after win=0.4756 pick=0.802 matches=9939 days=10
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))

==ability:flame-dash:
[[/ability/flame-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash change history))
### [[/ability/flame-dash]]((Flame Dash))

- Flame Dash cooldown reduced from 40s to 35s
- Flame Dash T3 changed from -19s CD to -15s
- Flame Dash T3 now also makes the ability charged (15s charge time)
==
==ability:afterburn:
[[/ability/afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/ability/afterburn]]((Afterburn))

- Afterburn spirit scaling increased from 0.5 to 0.6
==
=
=hero:ivy:
``attr:
impact closed=#true {
  all {
    before win=0.5225 pick=0.5166 matches=166807 days=6
    after win=0.5043 pick=0.4297 matches=166139 days=10
  }
  high {
    before win=0.5265 pick=0.5749 matches=6725 days=6
    after win=0.5089 pick=0.4435 matches=5496 days=10
  }
}
``
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))

- Melee damage and growth reduced by 15%
- Starting Health reduced from 550 to 525

==ability:kudzu-connection:
[[/ability/kudzu-connection]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp]] Kudzu Connection change history))
### [[/ability/kudzu-connection]]((Kudzu Connection))

- Watcher's Covenant fixed to replicate healing even when you are full
==
==ability:watcher-s-covenant:
### Watcher's Covenant

- Watcher's Covenant now initially locks onto the target in your facing direction if there is one
==
==ability:stone-form:
[[/ability/stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/ability/stone-form]]((Stone Form))

- Stone Form now shows the Ivy player a visible radius indicator for where your hero will hit
==
==ability:kudzu-bomb:
### Kudzu Bomb

- Kudzu Bomb now grows on the ground if it hits geo instead of floating in the air
==
==ability:air-drop:
[[/ability/air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/ability/air-drop]]((Air Drop))

- Air Drop damage reduced from 150 to 125

- Fixed Phantom Strike not grounding Ivy when using Air Drop
- Air Drop now lets you choose to significantly reduce your initial upward momentum by holding the fly key down while casting the ability
==
=
=hero:kelvin:
``attr:
impact closed=#true {
  all {
    before win=0.4685 pick=0.2756 matches=88993 days=6
    after win=0.4444 pick=0.2832 matches=109521 days=10
  }
  high {
    before win=0.4885 pick=0.2888 matches=3378 days=6
    after win=0.4787 pick=0.2632 matches=3261 days=10
  }
}
``
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))

- Fixed some issues with being unable to shoot over half-height cover

==ability:frost-grenade:
[[/ability/frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/ability/frost-grenade]]((Frost Grenade))

- Frost Grenade now also reduces Stamina Regeneration during the slow duration
==
==ability:frozen-shelter:
[[/ability/frozen-shelter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp]] Frozen Shelter change history))
### [[/ability/frozen-shelter]]((Frozen Shelter))

- Frozen Shelter now created on key up. While the key is down an outline of the area will be shown
- Frozen Shelter cooldown increased from 127s to 130s
- Frozen Shelter T2 increased from -38s to -40s
==
=
=hero:lady-geist:
``attr:
impact closed=#true {
  all {
    before win=0.5036 pick=0.5293 matches=170891 days=6
    after win=0.4944 pick=0.5177 matches=200190 days=10
  }
  high {
    before win=0.5045 pick=0.585 matches=6843 days=6
    after win=0.4924 pick=0.5169 matches=6406 days=10
  }
}
``
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))

==ability:malice:
[[/ability/malice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp]] Malice change history))
### [[/ability/malice]]((Malice))

- Malice can now secure orbs
==
==ability:soul-exchange:
[[/ability/soul-exchange]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp]] Soul Exchange change history))
### [[/ability/soul-exchange]]((Soul Exchange))

- Soul Exchange T2 changed from "-10% Min Health" to "On cast +40% Fire Rate for 8s"
- Soul Exchange T3 changed from "On cast, +40% Fire Rate and +40% Spirit Resist for 8s" to "Silences enemies in 15m radius for 3s"
==
==ability:life-drain:
[[/ability/life-drain]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp]] Life Drain change history))
### [[/ability/life-drain]]((Life Drain))

- Life Drain duration increased from 2s to 2.5s
- Life Drain T3 changed from "Enemy is Silenced while being Life Drained" to "Ability becomes charged and grants +1 Charge". You can cast multiple Life Drains at the same time on different targets, no Charge Time.
==
=
=hero:lash:
``attr:
impact closed=#true {
  all {
    before win=0.4984 pick=0.6015 matches=194212 days=6
    after win=0.5114 pick=0.7154 matches=276648 days=10
  }
  high {
    before win=0.487 pick=0.7364 matches=8614 days=6
    after win=0.5019 pick=0.839 matches=10397 days=10
  }
}
``
[[/hero/lash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]] Lash patch history))
## [[/hero/lash]]((Lash))

==ability:ground-strike:
[[/ability/ground-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp]] Ground Strike change history))
### [[/ability/ground-strike]]((Ground Strike))

- Ground Strike T1 improved from -9.5s Cooldown to -10s
==
==ability:death-slam:
[[/ability/death-slam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp]] Death Slam change history))
### [[/ability/death-slam]]((Death Slam))

- Death Slam cooldown increased from 137s to 140s
- Death Slam channel time increased from 2s to 2.3s
==
==ability:death-slam-impact:
### [[/ability/death-slam]]((Death Slam Impact))

- Death Slam Impact radius increased from 5m to 6m

- Death Slam cone angle increased from 75 to 85
- Death Slam cast range increased from 18m to 20m
==
==ability:death-slam:
[[/ability/death-slam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp]] Death Slam change history))
### [[/ability/death-slam]]((Death Slam))

- Death Slam T2 changed from +100 damage to -30s Cooldown
- Death Slam T3 changed from -56s Cooldown to Impact Area Stuns for 1s

- Death Slam fixed a rendering issue that could lead to crashes, especially in tight spaces like Mid Boss arena
==
=
=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.4854 pick=0.5455 matches=176125 days=6
    after win=0.4766 pick=0.4634 matches=179168 days=10
  }
  high {
    before win=0.5026 pick=0.3116 matches=3645 days=6
    after win=0.4897 pick=0.2439 matches=3022 days=10
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))

==ability:mini-turret:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turret change history))
### [[/ability/mini-turret]]((Mini Turret))

- Mini Turrets HP gain per boon increased from 20 to 30
==
==ability:mini-turrets:
### [[/ability/mini-turret]]((Mini Turrets))

- Mini Turrets no longer limit the damage they take to 33% of HP per second
- Mini Turrets now have a minimum lifetime of 4s. If they are killed during this time, they will be marked for death regardless of what happens during that time. There will be a visual indication that they are malfunctioning/dying.
==
==ability:mini-turrets-fire-rate:
### [[/ability/mini-turret]]((Mini Turrets Fire Rate))

- Mini Turrets Fire Rate reduced by 20%
==
=
=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.4735 pick=0.2793 matches=90184 days=6
    after win=0.4918 pick=0.3626 matches=140214 days=10
  }
  high {
    before win=0.4708 pick=0.3219 matches=3766 days=6
    after win=0.5156 pick=0.498 matches=6171 days=10
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))

==ability:fire-scarabs:
[[/ability/fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/ability/fire-scarabs]]((Fire Scarabs))

- Fire Scarabs now applies its drain over 4s instead of frontloaded
- Fire Scarabs no longer restricts you from hitting the same target (debuff duration refreshes)
- Fire Scarabs launch window increased from 5s to 8s (can be extended by duration extender)
==
==ability:traveler:
[[/ability/traveler]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp]] Traveler change history))
### [[/ability/traveler]]((Traveler))

- Traveler now allows you to rotate the camera
- Traveler T2 changed from "-56 Cooldown" to "Grants Ally Traveler Benefits" (if cast on an enemy, it'll give the bonus to the closest ally hero within 30m)
==
=
=hero:mo-krill:
``attr:
impact closed=#true {
  all {
    before win=0.5203 pick=0.4648 matches=150065 days=6
    after win=0.5101 pick=0.504 matches=194872 days=10
  }
  high {
    before win=0.5267 pick=0.5129 matches=6000 days=6
    after win=0.5055 pick=0.4906 matches=6079 days=10
  }
}
``
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))

==ability:burrow:
[[/ability/burrow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp]] Burrow change history))
### [[/ability/burrow]]((Burrow))

- Burrow is no longer affected by Shoulder Charge
==
==ability:spectral-wall:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp]]((Spectral Wall))
### Spectral Wall

- Spectral Wall no longer hits you while you are Burrowed
==
==ability:scorn:
[[/ability/scorn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp]] Scorn change history))
### [[/ability/scorn]]((Scorn))

- Scorn now heals you instantly rather than over 1s
==
==ability:combo:
[[/ability/combo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp]] Combo change history))
### [[/ability/combo]]((Combo))

- Combo health gain tooltip clarified
==
=
=hero:paradox:
``attr:
impact closed=#true {
  all {
    before win=0.4935 pick=0.5015 matches=161906 days=6
    after win=0.4865 pick=0.4271 matches=165138 days=10
  }
  high {
    before win=0.5113 pick=0.6925 matches=8101 days=6
    after win=0.5167 pick=0.6085 matches=7540 days=10
  }
}
``
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))

==ability:time-wall-time-stop:
### [[/ability/time-wall]]((Time Wall Time Stop))

- Time Wall Time Stop duration reduced from 0.6s to 0.5s
==
==ability:kinetic-carbine-max-stop:
### [[/ability/kinetic-carbine]]((Kinetic Carbine Max Stop))

- Kinetic Carbine Max Stop duration reduced from 0.5s to 0.4s
==
==ability:kinetic-carbine:
[[/ability/kinetic-carbine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp]] Kinetic Carbine change history))
### [[/ability/kinetic-carbine]]((Kinetic Carbine))

- Kinetic Carbine T1 reduced from +0.5s to +0.4s
==
=
=hero:pocket:
``attr:
impact closed=#true {
  all {
    before win=0.4959 pick=0.48 matches=154979 days=6
    after win=0.4614 pick=0.334 matches=129134 days=10
  }
  high {
    before win=0.5259 pick=0.7506 matches=8781 days=6
    after win=0.4881 pick=0.5202 matches=6446 days=10
  }
}
``
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))

- Health growth reduced from 31 to 27

==ability:enchanter-s-satchel:
[[/ability/enchanters-satchel]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp]] Enchanter's Satchel change history))
### [[/ability/enchanters-satchel]]((Enchanter's Satchel))

- Enchanter's Satchel T1 increased from -4.75s to -5s
==
==ability:enchanter-s-satchel-escape-duration:
### [[/ability/enchanters-satchel]]((Enchanter's Satchel Escape Duration))

- Enchanter's Satchel Escape Duration reduced from 2s to 1.5s
==
==ability:enchanter-s-satchel:
[[/ability/enchanters-satchel]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp]] Enchanter's Satchel change history))
### [[/ability/enchanters-satchel]]((Enchanter's Satchel))

- Enchanter's Satchel T3 now also increases Escape Duration by +0.5s
==
==ability:flying-cloak:
[[/ability/flying-cloak]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp]] Flying Cloak change history))
### [[/ability/flying-cloak]]((Flying Cloak))

- Flying Cloak duration increased from 3.2 to 3.4s (slower speed, same overall distance)
==
==ability:affliction:
[[/ability/affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/ability/affliction]]((Affliction))

- Affliction now immediately deals 18% of Current HP on application
==
==ability:affliction-dps:
### [[/ability/affliction]]((Affliction DPS))

- Affliction DPS reduced from 27 to 12
==
==ability:affliction-dps-spirit-power:
### [[/ability/affliction]]((Affliction DPS Spirit Power))

- Affliction DPS Spirit Power scaling reduced from 0.3 to 0.22
==
==ability:affliction:
[[/ability/affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/ability/affliction]]((Affliction))

- Affliction radius reduced from 14m to 9m
- Affliction T3 reduced from +27 DPS to +15 DPS
- Affliction T3 now also increases range by +5m and increases initial damage by 5%
==
=
=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.5094 pick=0.6705 matches=216497 days=6
    after win=0.51 pick=0.6657 matches=257428 days=10
  }
  high {
    before win=0.4823 pick=0.4385 matches=5130 days=6
    after win=0.4818 pick=0.4291 matches=5318 days=10
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))

==ability:storm-cloud:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/ability/storm-cloud]]((Storm Cloud))

- Storm Cloud now grants you a secondary ability Lightning Strike. It is a one time use AoE ability. You can target anywhere in your ultimate range, after a 2s delay it releases a vertical lightning strike onto a 6m area, knocking enemies away from that radius (6m knockback) and dealing 150 Damage (1.5 spirit scaling). There is a visual indicator for enemies that that area is about to be hit.
==
==ability:storm-cloud-dps:
### [[/ability/storm-cloud]]((Storm Cloud DPS))

- Storm Cloud DPS reduced from 125 to 110
==
==ability:storm-cloud:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/ability/storm-cloud]]((Storm Cloud))

- Storm Cloud T3 now also allows you to float around at 2.5m/s speed
==
=
=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4745 pick=0.4779 matches=154304 days=6
    after win=0.4731 pick=0.5257 matches=203271 days=10
  }
  high {
    before win=0.4622 pick=0.5842 matches=6834 days=6
    after win=0.4737 pick=0.6472 matches=8020 days=10
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))

==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))

- Fixed some targeting issues with Killing Blow
==
=
=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.4998 pick=0.699 matches=225697 days=6
    after win=0.5249 pick=0.6969 matches=269464 days=10
  }
  high {
    before win=0.5068 pick=0.6793 matches=7946 days=6
    after win=0.5405 pick=0.7157 matches=8869 days=10
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))

- Health reduced from 550 to 525

==ability:crow-familiar:
[[/ability/crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow Familiar change history))
### [[/ability/crow-familiar]]((Crow Familiar))

- Crow Familiar projectile speed increased from 3500 to 4750
==
==ability:stake:
[[/ability/stake]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp]] Stake change history))
### [[/ability/stake]]((Stake))

- Stake cooldown reduced from 42s to 40s
- Stake T2 increased from -19s Cooldown to -20s
- Stake T3 reduced from +0.75s to 0.5s
- Stake T3 now also increases capture radius by +2m
==
==ability:assassinate:
[[/ability/assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/ability/assassinate]]((Assassinate))

- Assassinate time between charges increased from 1.6s to 2s
- Assassinate base damage reduced from 130 to 120
- Assassinate T2 damage reduced from 140 to 130
==
=
=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=0.4865 pick=0.3411 matches=110140 days=6
    after win=0.4816 pick=0.3122 matches=120731 days=10
  }
  high {
    before win=0.4965 pick=0.3934 matches=4602 days=6
    after win=0.4819 pick=0.3567 matches=4420 days=10
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))

==ability:puddle-punch:
[[/ability/puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/ability/puddle-punch]]((Puddle Punch))

- Fixed visual parry cooldown bug with Puddle Punch
==
==ability:the-cube:
[[/ability/the-cube]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp]] The Cube change history))
### [[/ability/the-cube]]((The Cube))

- The Cube cooldown reduced from 48s to 42s

- The Cube cast range reduced from 30m to 26m
==
==ability:puddle-punch:
[[/ability/puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/ability/puddle-punch]]((Puddle Punch))

- Puddle Punch radius increased from 4 to 4.5
- Puddle Punch slow reduced from 20% to 15%
- Puddle Punch T2 slow reduced from 20% to 15%
- Puddle Punch T3 now also causes the Punch to become a heavy melee
==
==ability:goo-ball:
[[/ability/goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball change history))
### [[/ability/goo-ball]]((Goo Ball))

- Goo Ball damage Spirit Power scaling reduced from 1.3 to 1.1
- Goo Ball damage T2 reduced from 120 to 90
==
=
=hero:warden:
``attr:
impact closed=#true {
  all {
    before win=0.5402 pick=0.6723 matches=217051 days=6
    after win=0.5366 pick=0.7404 matches=286294 days=10
  }
  high {
    before win=0.533 pick=0.7334 matches=8579 days=6
    after win=0.5284 pick=0.7155 matches=8866 days=10
  }
}
``
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))

- Fire Rate Spirit Power scaling reduced from 0.25 to 0.22

==ability:last-stand:
[[/ability/last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/ability/last-stand]]((Last Stand))

- Last Stand Resistance reduced from 60% to 30%
- Last Stand now only goes on cooldown for 20s when interrupted rather than full
- Last Stand T2 now also reduces cooldown by 35s
- Last Stand T3 changed from "-56s Cooldown" to "+50% Bullet and Spirit Resistance During Channel and +2.5s Duration"
==
=
=hero:wraith:
``attr:
impact closed=#true {
  all {
    before win=0.4809 pick=0.6575 matches=212299 days=6
    after win=0.4911 pick=0.615 matches=237796 days=10
  }
  high {
    before win=0.4777 pick=0.3966 matches=4639 days=6
    after win=0.5025 pick=0.4668 matches=5785 days=10
  }
}
``
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))

- Bullet damage growth increased 0.37 to 0.39

==ability:full-auto:
[[/ability/full-auto]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp]] Full Auto change history))
### [[/ability/full-auto]]((Full Auto))

- Full Auto T2 Spirit Damage Per Bullet now has default 0.05 Spirit Power scaling
- Full Auto T3 reduces the improved Spirit Power scaling from 0.1 to 0.05
- Full Auto T3 changed from 30% Bullet Lifesteal to 20% Bullet and Spirit Lifesteal
==
==ability:telekinesis:
[[/ability/telekinesis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp]] Telekinesis change history))
### [[/ability/telekinesis]]((Telekinesis))

- Telekinesis cast time reduced from 0.7s to 0.4s
- Telekinesis projectile speed increased from 650 to 750
- Telekinesis now briefly lifts the enemy and then slams them to the ground and leaves the target with 2.5s of silence and disarm
- Telekinesis T2 duration now applies to the silence and disarm, increased to +0.75s
- Telekinesis T3 now causes the projectile to bounce to another nearby hero within 20m
==
=
=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.495 pick=0.4045 matches=130610 days=6
    after win=0.5147 pick=0.4645 matches=179602 days=10
  }
  high {
    before win=0.501 pick=0.4926 matches=5762 days=6
    after win=0.5394 pick=0.5943 matches=7365 days=10
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))

==ability:flying-strike:
### Flying Strike

- Flying Strike T3 now also lets you grapple to ally heroes
==
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))

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
``attr:
impact closed=#true {
  all {
    before win=0.4986 pick=0.0589 matches=228103 days=6
    after win=0.4978 pick=0.057 matches=264608 days=10
  }
  high {
    before win=0.5016 pick=0.0452 matches=6338 days=6
    after win=0.4991 pick=0.0474 matches=7047 days=10
  }
}
``
[[/item/active-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp]] Active Reload patch history))
## [[/item/active-reload]]((Active Reload))

- Ammo increased from 18% to 24%
=
=item:alchemical-fire:
``attr:
impact closed=#true {
  all {
    before win=0.5324 pick=0.0281 matches=108998 days=6
    after win=0.5279 pick=0.0354 matches=164342 days=10
  }
  high {
    before win=0.5338 pick=0.0533 matches=7488 days=6
    after win=0.5454 pick=0.0777 matches=11557 days=10
  }
}
``
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))

- Spirit Power reduced from 11 to 7
- Added alternate desaturated variant for friendly versions of this
=
=item:arcane-surge:
``attr:
impact closed=#true {
  all {
    before win=0.5272 pick=0.0776 matches=300661 days=6
    after win=0.519 pick=0.0509 matches=236307 days=10
  }
  high {
    before win=0.5365 pick=0.0856 matches=12010 days=6
    after win=0.5358 pick=0.0439 matches=6532 days=10
  }
}
``
[[/item/arcane-surge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp]] Arcane Surge patch history))
## [[/item/arcane-surge]]((Arcane Surge))

- Ability range reduced from +20% to +18%
- Ability duration reduced from +20% to +18
- Spirit Power reduced from +20 to +18
=
=item:berserker:
``attr:
impact closed=#true {
  all {
    before win=0.5185 pick=0.0876 matches=339380 days=6
    after win=0.5198 pick=0.1316 matches=610510 days=10
  }
  high {
    before win=0.5149 pick=0.1239 matches=17389 days=6
    after win=0.5246 pick=0.1785 matches=26544 days=10
  }
}
``
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))

- Now builds into Frenzy
=
=item:close-quarters:
``attr:
impact closed=#true {
  all {
    before win=0.4993 pick=0.1849 matches=716261 days=6
    after win=0.4945 pick=0.189 matches=877133 days=10
  }
  high {
    before win=0.5 pick=0.1662 matches=23327 days=6
    after win=0.494 pick=0.1552 matches=23073 days=10
  }
}
``
[[/item/close-quarters]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp]] Close Quarters patch history))
## [[/item/close-quarters]]((Close Quarters))

- Weapon Damage reduced from 25% to 22%
- Bullet Resist reduced from 5% to 4%
=
=item:crippling-headshot:
``attr:
impact closed=#true {
  all {
    before win=0.5758 pick=0.0539 matches=208906 days=6
    after win=0.5786 pick=0.0557 matches=258454 days=10
  }
  high {
    before win=0.5914 pick=0.0547 matches=7675 days=6
    after win=0.5866 pick=0.0571 matches=8489 days=10
  }
}
``
[[/item/crippling-headshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp]] Crippling Headshot patch history))
## [[/item/crippling-headshot]]((Crippling Headshot))

- The headshot debuff will now stack from different sources, diminishingly (24%, 12%, 6%, etc)
=
=item:decay:
``attr:
impact closed=#true {
  all {
    before win=0.4733 pick=0.0245 matches=95047 days=6
    after win=0.4782 pick=0.0251 matches=116378 days=10
  }
  high {
    before win=0.4914 pick=0.0507 matches=7118 days=6
    after win=0.4961 pick=0.0547 matches=8130 days=10
  }
}
``
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))

- Bleed damage increased from 1.4% to 1.5%
=
=item:diviner-s-kevlar:
``attr:
impact closed=#true {
  all {
    before win=0.5707 pick=0.0731 matches=283404 days=6
    after win=0.5746 pick=0.0616 matches=285740 days=10
  }
  high {
    before win=0.5884 pick=0.1004 matches=14098 days=6
    after win=0.5907 pick=0.0754 matches=11205 days=10
  }
}
``
[[/item/diviners-kevlar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp]] Diviner's Kevlar patch history))
## [[/item/diviners-kevlar]]((Diviner's Kevlar))

- Cooldown Reduction reduced from 12% to 10%
- Ability Duration increased from 7% to 10%
=
=item:ethereal-shift:
``attr:
impact closed=#true {
  all {
    before win=0.5083 pick=0.0265 matches=102840 days=6
    after win=0.5164 pick=0.032 matches=148623 days=10
  }
  high {
    before win=0.5323 pick=0.0571 matches=8014 days=6
    after win=0.5392 pick=0.0678 matches=10082 days=10
  }
}
``
[[/item/ethereal-shift]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp]] Ethereal Shift patch history))
## [[/item/ethereal-shift]]((Ethereal Shift))

- Allows you to float around slowly (2 m/s)
=
=item:extra-stamina:
``attr:
impact closed=#true {
  all {
    before win=0.5046 pick=0.5323 matches=2062191 days=6
    after win=0.5052 pick=0.5398 matches=2504792 days=10
  }
  high {
    before win=0.5024 pick=0.5635 matches=79107 days=6
    after win=0.5019 pick=0.5648 matches=83992 days=10
  }
}
``
[[/item/extra-stamina]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp]] Extra Stamina patch history))
## [[/item/extra-stamina]]((Extra Stamina))

- Fire Rate reduced from 6% to 5%
=
=item:fleetfoot:
``attr:
impact closed=#true {
  all {
    before win=0.5275 pick=0.1549 matches=600290 days=6
    after win=0.5239 pick=0.1567 matches=727082 days=10
  }
  high {
    before win=0.5169 pick=0.2133 matches=29942 days=6
    after win=0.5104 pick=0.2084 matches=30991 days=10
  }
}
``
[[/item/fleetfoot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp]] Fleetfoot patch history))
## [[/item/fleetfoot]]((Fleetfoot))

- Cooldown increased from 19s to 20s
=
=item:frenzy:
``attr:
impact closed=#true {
  all {
    before win=0.5941 pick=0.0417 matches=161372 days=6
    after win=0.5891 pick=0.057 matches=264479 days=10
  }
  high {
    before win=0.6106 pick=0.0522 matches=7332 days=6
    after win=0.5918 pick=0.0686 matches=10204 days=10
  }
}
``
[[/item/frenzy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp]] Frenzy patch history))
## [[/item/frenzy]]((Frenzy))

- Now builds from Berserker. Grants Berserker passive. Increases bonus per stack from 6% to 8%. Provides +12 ammo, 150 Bonus Health, +10% Bullet Resist. Stat bonuses when 50% below unchanged (4 m/s, 40% Fire Rate, 55% Bullet Resist, has 4s buffer memory)
=
=item:headshot-booster:
``attr:
impact closed=#true {
  all {
    before win=0.501 pick=0.3273 matches=1267984 days=6
    after win=0.5005 pick=0.3201 matches=1485448 days=10
  }
  high {
    before win=0.4987 pick=0.3659 matches=51363 days=6
    after win=0.4991 pick=0.3309 matches=49204 days=10
  }
}
``
[[/item/headshot-booster]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp]] Headshot Booster patch history))
## [[/item/headshot-booster]]((Headshot Booster))

- Cooldown increased from 7.5s to 8.5s
=
=item:healing-nova:
``attr:
impact closed=#true {
  all {
    before win=0.5053 pick=0.0463 matches=179575 days=6
    after win=0.4876 pick=0.0365 matches=169299 days=10
  }
  high {
    before win=0.5169 pick=0.0516 matches=7247 days=6
    after win=0.4948 pick=0.0404 matches=6004 days=10
  }
}
``
[[/item/healing-nova]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp]] Healing Nova patch history))
## [[/item/healing-nova]]((Healing Nova))

- Time to heal increased from 2s to 2.75s
=
=item:healing-rite:
``attr:
impact closed=#true {
  all {
    before win=0.4976 pick=0.263 matches=1019042 days=6
    after win=0.4961 pick=0.2475 matches=1148620 days=10
  }
  high {
    before win=0.5036 pick=0.2993 matches=42018 days=6
    after win=0.4968 pick=0.2877 matches=42775 days=10
  }
}
``
[[/item/healing-rite]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp]] Healing Rite patch history))
## [[/item/healing-rite]]((Healing Rite))

- Health bonus reduced from +45 to +30
=
=item:infuser:
``attr:
impact closed=#true {
  all {
    before win=0.4771 pick=0.0594 matches=230218 days=6
    after win=0.5008 pick=0.07 matches=324674 days=10
  }
  high {
    before win=0.4673 pick=0.0724 matches=10161 days=6
    after win=0.4846 pick=0.0992 matches=14746 days=10
  }
}
``
[[/item/infuser]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp]] Infuser patch history))
## [[/item/infuser]]((Infuser))

- Duration increased from 6s to 8s
- No longer grants +50 Health
- Now grants +70 Spirit Shield
=
=item:knockdown:
``attr:
impact closed=#true {
  all {
    before win=0.4879 pick=0.0529 matches=204977 days=6
    after win=0.4729 pick=0.056 matches=259960 days=10
  }
  high {
    before win=0.4908 pick=0.065 matches=9123 days=6
    after win=0.4859 pick=0.0727 matches=10818 days=10
  }
}
``
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))

- Stun duration reduced from 0.9 to 0.75
- Stun now lasts 1s longer against airborne targets based on how high off the ground they are (up to 30m)
=
=item:leech:
``attr:
impact closed=#true {
  all {
    before win=0.5577 pick=0.1172 matches=454217 days=6
    after win=0.5676 pick=0.1248 matches=579019 days=10
  }
  high {
    before win=0.581 pick=0.0561 matches=7871 days=6
    after win=0.5821 pick=0.0712 matches=10585 days=10
  }
}
``
[[/item/leech]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp]] Leech patch history))
## [[/item/leech]]((Leech))

- No longer provides +12% Cooldown Reduction
- Now upgrades from Healbane. Provides +60% Anti Healing for 8s on Spirit Damage dealt.
=
=item:lucky-shot:
``attr:
impact closed=#true {
  all {
    before win=0.5889 pick=0.0865 matches=335056 days=6
    after win=0.5867 pick=0.0943 matches=437556 days=10
  }
  high {
    before win=0.5872 pick=0.0764 matches=10718 days=6
    after win=0.5738 pick=0.084 matches=12485 days=10
  }
}
``
[[/item/lucky-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp]] Lucky Shot patch history))
## [[/item/lucky-shot]]((Lucky Shot))

- Proc Chance reduced from 35% to 34%
=
=item:magic-carpet:
``attr:
impact closed=#true {
  all {
    before win=0.6188 pick=0.007 matches=27309 days=6
    after win=0.5974 pick=0.0071 matches=33164 days=10
  }
  high {
    before win=0.6255 pick=0.0142 matches=1992 days=6
    after win=0.5873 pick=0.0134 matches=1994 days=10
  }
}
``
[[/item/magic-carpet]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp]] Magic Carpet patch history))
## [[/item/magic-carpet]]((Magic Carpet))

- Duration increased from 7s to 8s
=
=item:majestic-leap:
``attr:
impact closed=#true {
  all {
    before win=0.5164 pick=0.0351 matches=136040 days=6
    after win=0.5222 pick=0.0384 matches=178034 days=10
  }
  high {
    before win=0.5086 pick=0.0426 matches=5973 days=6
    after win=0.521 pick=0.0506 matches=7518 days=10
  }
}
``
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))

- No longer gets interrupted on slam down if you get shot
=
=item:melee-charge:
``attr:
impact closed=#true {
  all {
    before win=0.5162 pick=0.0724 matches=280672 days=6
    after win=0.5081 pick=0.0747 matches=346654 days=10
  }
  high {
    before win=0.5115 pick=0.077 matches=10810 days=6
    after win=0.505 pick=0.0779 matches=11585 days=10
  }
}
``
[[/item/melee-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp]] Melee Charge patch history))
## [[/item/melee-charge]]((Melee Charge))

- Bonus Health reduced from +75 to +65
=
=item:metal-skin:
``attr:
impact closed=#true {
  all {
    before win=0.4184 pick=0.033 matches=127931 days=6
    after win=0.4255 pick=0.0299 matches=138916 days=10
  }
  high {
    before win=0.4389 pick=0.057 matches=8000 days=6
    after win=0.4386 pick=0.0539 matches=8010 days=10
  }
}
``
[[/item/metal-skin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp]] Metal Skin patch history))
## [[/item/metal-skin]]((Metal Skin))

- Duration increased from 3.5s to 4s
- Stamina movement distance reduced by 25%
=
=item:monster-rounds:
``attr:
impact closed=#true {
  all {
    before win=0.5029 pick=0.2025 matches=784725 days=6
    after win=0.4999 pick=0.1754 matches=813908 days=10
  }
  high {
    before win=0.5109 pick=0.2055 matches=28843 days=6
    after win=0.5084 pick=0.1817 matches=27023 days=10
  }
}
``
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
``attr:
impact closed=#true {
  all {
    before win=0.5278 pick=0.0808 matches=313113 days=6
    after win=0.5261 pick=0.0788 matches=365567 days=10
  }
  high {
    before win=0.5334 pick=0.0617 matches=8655 days=6
    after win=0.5323 pick=0.0598 matches=8899 days=10
  }
}
``
[[/item/mystic-slow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp]] Mystic Slow patch history))
## [[/item/mystic-slow]]((Mystic Slow))

- Duration increased from 2s to 2.5s
=
=item:point-blank:
``attr:
impact closed=#true {
  all {
    before win=0.512 pick=0.0926 matches=358692 days=6
    after win=0.5111 pick=0.1011 matches=468888 days=10
  }
  high {
    before win=0.5052 pick=0.077 matches=10806 days=6
    after win=0.5102 pick=0.0775 matches=11522 days=10
  }
}
``
[[/item/point-blank]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp]] Point Blank patch history))
## [[/item/point-blank]]((Point Blank))

- Now provides +20% Melee Resistance
=
=item:rapid-recharge:
``attr:
impact closed=#true {
  all {
    before win=0.4988 pick=0.1927 matches=746593 days=6
    after win=0.5049 pick=0.2241 matches=1039791 days=10
  }
  high {
    before win=0.4985 pick=0.1595 matches=22383 days=6
    after win=0.5017 pick=0.2003 matches=29785 days=10
  }
}
``
[[/item/rapid-recharge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp]] Rapid Recharge patch history))
## [[/item/rapid-recharge]]((Rapid Recharge))

- Cooldown for charged abilities reduced from 30% to 25%
=
=item:rapid-rounds:
``attr:
impact closed=#true {
  all {
    before win=0.5032 pick=0.2014 matches=780194 days=6
    after win=0.5061 pick=0.2146 matches=995561 days=10
  }
  high {
    before win=0.495 pick=0.2008 matches=28194 days=6
    after win=0.4962 pick=0.2381 matches=35407 days=10
  }
}
``
[[/item/rapid-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp]] Rapid Rounds patch history))
## [[/item/rapid-rounds]]((Rapid Rounds))

- Fire Rate reduced from 11% to 10%
=
=item:refresher:
``attr:
impact closed=#true {
  all {
    before win=0.5697 pick=0.0234 matches=90516 days=6
    after win=0.561 pick=0.0248 matches=115243 days=10
  }
  high {
    before win=0.5821 pick=0.0308 matches=4319 days=6
    after win=0.5836 pick=0.0298 matches=4433 days=10
  }
}
``
[[/item/refresher]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp]] Refresher patch history))
## [[/item/refresher]]((Refresher))

- Cast delay increased from 0.3s to 0.6s
=
=item:rescue-beam:
``attr:
impact closed=#true {
  all {
    before win=0.5228 pick=0.0196 matches=75994 days=6
    after win=0.5029 pick=0.0182 matches=84544 days=10
  }
  high {
    before win=0.5277 pick=0.0389 matches=5454 days=6
    after win=0.5157 pick=0.0344 matches=5108 days=10
  }
}
``
[[/item/rescue-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp]] Rescue Beam patch history))
## [[/item/rescue-beam]]((Rescue Beam))

- Range reduced from 32m to 28m
=
=item:restorative-locket:
``attr:
impact closed=#true {
  all {
    before win=0.497 pick=0.0096 matches=37009 days=6
    after win=0.5097 pick=0.0118 matches=54683 days=10
  }
  high {
    before win=0.5093 pick=0.02 matches=2802 days=6
    after win=0.5336 pick=0.0246 matches=3664 days=10
  }
}
``
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))

- Cooldown reduced from 30s to 25s
=
=item:restorative-shot:
``attr:
impact closed=#true {
  all {
    before win=0.4982 pick=0.1872 matches=725458 days=6
    after win=0.4907 pick=0.1824 matches=846364 days=10
  }
  high {
    before win=0.5038 pick=0.2478 matches=34779 days=6
    after win=0.5007 pick=0.2454 matches=36494 days=10
  }
}
``
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))

- Weapon Damage reduced from 6% to 3%
=
=item:shadow-weave:
``attr:
impact closed=#true {
  all {
    before win=0.5426 pick=0.0134 matches=51797 days=6
    after win=0.551 pick=0.0076 matches=35338 days=10
  }
  high {
    before win=0.5508 pick=0.0218 matches=3061 days=6
    after win=0.5586 pick=0.0114 matches=1699 days=10
  }
}
``
[[/item/shadow-weave]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp]] Shadow Weave patch history))
## [[/item/shadow-weave]]((Shadow Weave))

- Spot radius increased from 22m to 26m
=
=item:sharpshooter:
``attr:
impact closed=#true {
  all {
    before win=0.4945 pick=0.0652 matches=252515 days=6
    after win=0.5067 pick=0.0727 matches=337483 days=10
  }
  high {
    before win=0.5116 pick=0.0415 matches=5831 days=6
    after win=0.527 pick=0.0639 matches=9502 days=10
  }
}
``
[[/item/sharpshooter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp]] Sharpshooter patch history))
## [[/item/sharpshooter]]((Sharpshooter))

- Now reduces your Fire Rate by 10% and movespeed by 0.5
- Weapon Damage increased from 20% to 30%
- Far range Weapon Damage increased from +50% to +70%
=
=item:silencer:
``attr:
impact closed=#true {
  all {
    before win=0.601 pick=0.0216 matches=83559 days=6
    after win=0.595 pick=0.0191 matches=88428 days=10
  }
  high {
    before win=0.6055 pick=0.0289 matches=4061 days=6
    after win=0.6125 pick=0.0206 matches=3063 days=10
  }
}
``
[[/item/silencer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]] Silencer patch history))
## [[/item/silencer]]((Silencer))

- Buildup difficulty increased by 18%
=
=item:slowing-hex:
``attr:
impact closed=#true {
  all {
    before win=0.5196 pick=0.103 matches=398919 days=6
    after win=0.5177 pick=0.0971 matches=450561 days=10
  }
  high {
    before win=0.5185 pick=0.1856 matches=26055 days=6
    after win=0.5098 pick=0.175 matches=26016 days=10
  }
}
``
[[/item/slowing-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp]] Slowing Hex patch history))
## [[/item/slowing-hex]]((Slowing Hex))

- Cooldown increased from 26s to 28s
=
=item:spiritual-overflow:
``attr:
impact closed=#true {
  all {
    before win=0.5624 pick=0.0916 matches=354755 days=6
    after win=0.566 pick=0.0862 matches=400024 days=10
  }
  high {
    before win=0.5735 pick=0.0804 matches=11293 days=6
    after win=0.5752 pick=0.0752 matches=11178 days=10
  }
}
``
[[/item/spiritual-overflow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp]] Spiritual Overflow patch history))
## [[/item/spiritual-overflow]]((Spiritual Overflow))

- Cooldown Reduction reduced from 15% to 12%
=
=item:suppressor:
``attr:
impact closed=#true {
  all {
    before win=0.5091 pick=0.0999 matches=387022 days=6
    after win=0.5089 pick=0.098 matches=454604 days=10
  }
  high {
    before win=0.5134 pick=0.0753 matches=10572 days=6
    after win=0.5212 pick=0.0774 matches=11507 days=10
  }
}
``
[[/item/suppressor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp]] Suppressor patch history))
## [[/item/suppressor]]((Suppressor))

- Duration increased from 2s to 2.5s
=
=item:surge-of-power:
``attr:
impact closed=#true {
  all {
    before win=0.5267 pick=0.1211 matches=469024 days=6
    after win=0.5284 pick=0.1323 matches=614044 days=10
  }
  high {
    before win=0.5234 pick=0.0903 matches=12674 days=6
    after win=0.5292 pick=0.1026 matches=15258 days=10
  }
}
``
[[/item/surge-of-power]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp]] Surge of Power patch history))
## [[/item/surge-of-power]]((Surge of Power))

- Fire Rate increased from 10% to 15%
=
=item:titanic-magazine:
``attr:
impact closed=#true {
  all {
    before win=0.5053 pick=0.1363 matches=528000 days=6
    after win=0.5082 pick=0.1354 matches=628200 days=10
  }
  high {
    before win=0.5162 pick=0.0502 matches=7050 days=6
    after win=0.5023 pick=0.0476 matches=7081 days=10
  }
}
``
[[/item/titanic-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp]] Titanic Magazine patch history))
## [[/item/titanic-magazine]]((Titanic Magazine))

- Melee Resistance increased from 25% to 30%
=
=item:toxic-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.489 pick=0.1103 matches=427335 days=6
    after win=0.5031 pick=0.1072 matches=497586 days=10
  }
  high {
    before win=0.4676 pick=0.089 matches=12488 days=6
    after win=0.49 pick=0.0962 matches=14302 days=10
  }
}
``
[[/item/toxic-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp]] Toxic Bullets patch history))
## [[/item/toxic-bullets]]((Toxic Bullets))

- Bleed damage increased from 2.5% to 2.75%
=
=item:unstoppable:
``attr:
impact closed=#true {
  all {
    before win=0.5699 pick=0.0331 matches=128085 days=6
    after win=0.5644 pick=0.0332 matches=154003 days=10
  }
  high {
    before win=0.5565 pick=0.0392 matches=5497 days=6
    after win=0.553 pick=0.0393 matches=5845 days=10
  }
}
``
[[/item/unstoppable]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp]] Unstoppable patch history))
## [[/item/unstoppable]]((Unstoppable))

- Now has 20% Slow Resistance
=
=item:veil-walker:
``attr:
impact closed=#true {
  all {
    before win=0.5364 pick=0.0717 matches=277771 days=6
    after win=0.5311 pick=0.0615 matches=285396 days=10
  }
  high {
    before win=0.5548 pick=0.1369 matches=19213 days=6
    after win=0.5492 pick=0.1293 matches=19227 days=10
  }
}
``
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))

- When shot while invisible, you will require 1s to go back invisible rather than 0.25s
- Cooldown increased from 18s to 22s
=