``meta:
title "10-10-2024 Update"
thread_id "36958"
published "2024-10-10T13:24:45-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
category "patch"
major_update #false
content_text "Added Ranked mode Added a 3rd casting mode, Quick Cast (shows range/radius/etc on key down, then on key up acts like Instant Cast). The three casting modes are now Instant Cast, Quick Cast, and Confirm Cast. Added input buffering for ability usage (so if you cast an ability and then quickly cast another ability during its cast time, the next one will fire instead of the input being dropped) Now displaying a unique ID for builds in the description section of the build browser.  You can click on it to copy the Build ID to the clipboard to share specific builds with friends. If you enter a Build ID in the search box of the build browser, it will show all of the builds for the current hero by the author of that build. For private lobbies, added the ability to swap players on both teams with a button press. In addition players can be randomly shuffled across the two teams, and if lanes are being assigned, can be shuffled within the teams. Added \"Allow Duplicate Heroes\" setting in Private Lobbies Certain heroes now have a higher priority at being in dual lanes (Ivy and Dynamo atm) Added per-player voice volume slider (accessible by clicking on a player via the ESC menu) Pausing is no longer allowed in the first three minutes of the game Added Thai and Indonesian localization Replaced the temp Yamato VO with a new translation spoken by a native actress Added Stomp AoE range indication as the Walker is about to use the ability Updated the way status effects are shown above the healthbar Fixed troopers being unreliable to shoot while on the zipline Fixed an Unsecured Souls bug where it gave extra bounty directly to the dying hero carrying unsecured souls Fixed AFK kick detection not working properly Added Crit Bonus Scale tooltip to the Weapon stats in the shop Fixed ESC key not working on the private lobbies page Fixed respawn music not playing while spectating another player Fixed a bug where the bot that would pick up the Urn was not the closest one, just the one that was in the highest player slot Fixed Streamer mode not persisting between game relaunches Keybinds in settings now selects the hero you're playing when you navigate to the Keybinds tab Rescue beam now shows heal indicator if you heal someone with it Fixed Debuff Reducer causing Teleporters to be faster Steam notifications moved to the top-left from the bottom-right, to avoid minimap overlap Continue to have mouse look enabled while M3 is pressed but before the ping wheel shows up Enabled Middle Mouse for \"pinging\" minimap Enabled the ability to middle mouse click players on the top bar Fixed Shiv's Killing Blow sometimes sending him into orbit Fixed Shiv's Killing Blow continuing to do damage while being teleported by Quantum Entanglement Fixed Quantum Entanglement's camera position anims not being smooth Yamato's Flying Strike now also cancels when the target is out of world (like with Quantum Entanglement) Fixed Pausing not working when using hero specific key binds Lash's Death Slam now has clearer visual states to indicate when someone is successfully locked in Fixed some cases where Grey Talon's trap effects would be stuck in the world Updated ground strike preview cone to have a little more information on shape & outer bounds Abandon Match is now only an available option once you have disconnected from the game server. Bringing up the menu while connected to a game now gives you the option to Disconnect rather than Abandon immediately Fixed issues with Bots not using ziplines properly Added Return Fire proc sound Added Metal Skin proc sound Updated McGinnis Heavy Barrage sound Added Guardian and Walker death notification sound for all players Improved panning resolution of bullet whizby sounds and shortened the max play distance to the local player Fixed hero death UI sound playing inconsistently Added bullet evasion sound effects Updated Kelvin weapon fire audio Updated Infernus weapon fire audio Improved clarity for hero roster selection VO Walker laser animation updated slightly, raising the forearms to better reveal the eye socket weakpoint to players on the ground Re-enabled weapon-specific reload sounds Abrams Life Siphon fades to 50% opacity after initial start to improve visibility Added Healing Rite cast sound Added Rescue Beam heal and pull loop sounds Added Health Nova cast sound Added Return Fire cast sound Revised Metal Skin cast sound Added Colossus cast and loop sounds Added echo to Echo Shard cast sound Added Silence Glyph cast and hit sounds Added Ammo Scavenger proc sound Added Restorative Shot proc sound Added Toxic Bullets proc variations Added a distance fade to Soul Shredder debuff effect and tweaked colors to reduce visual noise Improved visibility on Spiritual Overflow effects when heroes are airborne Reworked visual effects for puddle punch Updated \"getting started\" VO for the ability points tab to match the text Fixed a bunch of bugs that were impacting how VO was playing in a match.  Now a bunch of hero VO that was previously getting squashed/cut off should play properly (for instance certain lines where allies commented on ability usage, the patrons giving compliments for assists/team healing, etc). The patron once again will warn you when your Walkers are under attack The patron now will sometimes offer words of encouragement when you level up instead of when you destroy a Guardian or Walker Increased the time you need to carry the urn before the urn nags about not being delivered Fixed more instances of the wrong name for a hero being called out If you're Dynamo or Krill, you can now ping during your ult to alert your allies Mirage still loves the Djinn, but he yells about them less frequently Added new custom charge and light melee and parry animations for Bebop Added improvements for meleeing while using Siphon Life (book now floats and hand makes a fist) Updated Grey Talon root effect for trap Updated Grey Talon updated firing, projectile, impact effects Updated Rain of Arrows effects New heavy melee anims added to Mo & Krill and Ivy Adjusted Trooper tracer and muzzle effects for better alignment and lower visual noise Adjusted Lady Geist Life Drain to lower visual obstruction but increase awareness when it first latches Inferno Catalyst effect revisions to help show range better Trooper death effects resolve quicker and more cleanly Mirage Djinn's Mark effects revisions to reduce noise on the victim and appear more clearly for Mirage Soul jar effect carry and dropoff revisions to reduce visual noise for carrier New Imports Building New Taxi Stand building Replaced old retaining wall Replaced block-in park bridges Troopers attack range vs Lane Guardians reduced from 13.5m to 12m (they get closer to it) Players now need to be within 19m (above the ramp) to attack a Lane Guardian Guardians now take 70% less damage from troopers at the start of the game; this reduces by 10% per minute (max at +30% increased damage at 10 min) Guardian damage vs players increased by 20% Medium Camps spawn time changed from 7 min to 5 min Hard Camps spawn time changed from 7 min to 8 min Teleporters open time changed from 10 min to 8 min Trooper spawn/bounty lane end time changed from 10 min to 8 min Vaults spawn time/interval changed from 10/5 to 8/4 Golden Statues and Breakables spawn time changed from 3 min to 2 min Golden Statues bonuses upgrade time changed from 15 min to 10 min Golden Statue Health buff increased from 15/20 to 20/30 Golden Statues now have a tier 3 upgrade at 25 minutes (+2.5% Fire Rate, +8% Ammo, 1.5% CD Reduction, +7% Weapon Damage, 40 Health, +5 Spirit Power) Mid Boss now has 15 regen Mid Boss creep buff rescaled from 70% to 50/70/90% for the 1/2/3rd mid boss death (further deaths don't increase) Mid Boss rejuv respawn rescaled from 50% to 40/50/60% for the 1/2/3rd mid boss death (further deaths don't increase) Urn now causes the runner to be revealed on the minimap Heavy Melee against the urn runner now causes them to drop the urn Urn delivery now gives each player on your team a Golden Statue permanent buff Urn bounty increased by 15% Urn now falls down from the sky a little bit faster Comeback formula weighted a bit less on team vs team net worth calculation and more on the strength of the dying hero (regardless of lead) Percentage of deniable orbs from objectives for Guardian/Walker/Patron/Shrines rescaled from 54.55/66.67/100/0% to 35% Shields no longer reduce damage or get depleted by NPC units (Troopers, Bosses etc, but still takes damage from player summoned units) All heroes' movespeed increased by 0.3 (Enduring Speed reduced by 0.3) Bullet and Spirit Lifesteal now stack diminishingly Teleporters now grant +3 m/s for 5s after arriving at the other side Updated teleporter locations Moved teleporters to travel between outer lane Walkers Added teleporters in the underground tunnels Changed underground teleporters to go between Subway and Tunnel on the same side of the map Widened stairs from Shrines back to the player spawn area Added ledge to mantle back up to the player spawn area from the pit Added bridge and stair to the upper level of the Subway Entrance building from the outer lane Walker arenas Added upper level connection through the Subway Entrance building Moved Guardians back slightly further from stairs down to the canal Widened channels surrounding Mid Temple slightly Widened archways between Mid Temple channels Garage and Night Club: Changed ropes so that they take you to the second floor and added back stairs to take you to the roof Basic Magazine: Ammo increased from 24% to 26% Health Nova: Spirit Power increased from +4 to +6 Combat Barrier: Weapon Damage reduced from 25% to 22% Superior Stamina: Stamina Recovery increased from 20% to 25% Withering Whip: No longer grants +50 Health Withering Whip: Now grants +100 Bullet Shield Withering Whip: Cooldown reduced from 26s to 22s Improved Burst: Max Health damage reduced from 9% to 7% Abrams Base health reduced from 600 to 570 Health per boon increased from 32 to 34 (1048 vs 1046 total) Fixed shoulder charge sensitivity bugs that allowed you to turn more than intended Seismic Impact now allows for some very minor movement to help nudge around small objects Bebop Sticky Bomb growth increased from 2.5% to 4% per stack Sticky Bomb now loses 2 stacks on death Sticky Bomb now has 15 max stacks Hook range increased from 25m to 30m Hook now also hits enemy troopers, killing them instantly Fixed some cases where Hook would grab players from around corners Hyper Beam movement slow reduced from 30% to 25% Hyper Beam duration no longer scales with Spirit Power Hyper Beam duration increased from 8s to 10s Uppercut now applies a 15% Fire Rate slow in the landing radius for 5s. Scales with Spirit Power (0.2) Dynamo Quantum Entanglement cooldown increased from 12.5s to 15s Quantum Entanglement T3 now also also reduces cooldown by 4s Fixed Kinetic Pulse T2 tooltip to clarify that it affects bullets only and not melee damage Grey Talon Arrow cycle time increased from 0.45s to 0.55s (overall dps unchanged) Fixed Rain of Arrows alternate cast causing you to hit the ground soon after cast Fixed Guided Owl colliding with nearby objects during cast Fire Rate no longer scales with Spirit Power Base bullet damage now scales with Spirit Power (0.1) Guided Owl 3s grace period for kill increased to 4s Fixed Guided Owl grace period still requiring that he gets the kill, rather than the target just die Movespeed no longer scales with Spirit Power Base stamina increased from 3 to 4 Haze Fixation max stacks increased from 30 to 40 Fixation T3 reduced from +0.2 to +0.15 Bullet Dance no longer grants +15% Fire Rate Bullet Dance base ability now grants 2 Targets Hit Per Shot Bullet Dance base ability no longer grants +25% Evasion Bullet Dance T3 now grants +40% Evasion and +2 Bullet Dance Speed Infernus Catalyst Damage Amp reduced from 25% to 20% Catalyst T3 Damage Amp increased from 15% to 20% Ivy Improved default camera position Take Flight control keys are now similar to Vindicta's Fixed some issues with control on Take Flight when near a wall Lady Geist Fixed a bug that could cause some units to take more damage than intended with Essence Bomb when multiple targets are hit Life Drain can now be alternate-casted on allied heroes Added double tap accidental protection for Life Drain to help against instant cancellations Malice slow duration reduced from 6s to 4s Malice amp duration reduced from 16s to 13s You can now see how many Malice stacks you have on you as the opponent Lash Base bullet damage reduced from 10 to 9 Flog Heal vs heroes reduced from 80% to 70% Flog Heal vs creeps reduced from 30% to 25% McGinnis No longer has +25% Spirit Resist Now has +15% Bullet Resist Mini Turrets T1 no longer grants +1 charge Mini Turrets duration reduced from 30s to 24s Mini Turrets cooldown reduced from 30s to 24s Mini Turrets health scaling reduced from 30% to 20% Mini Turrets recharge time reduced from 5s to 3s Mini Turrets cast range increased from 15m to 20m Mini Turret damage reduction against troopers/neutrals increased from -40% to -50% Mini Turret damage reduction against objectives increased from -60% to -70% Fixed Ricochet not bouncing off of Mini Turrets Mini Turret spawn time reduced from 1s to 0.25s Mini Turret attack delay reduced from 0.35s to 0.2s Heavy Barrage radius increased from 4.5m to 5m Mirage Tornado now uses a range for its travel distance instead of a travel duration (scales with range increase) Enemies that have already been hit by Fire Scarabs now let the next scarab projectile pass through them Djinn's Mark base damage reduced from 16 to 12 Djinn's Mark scaling from spirit power increased from 0.4 to 0.55 Djinn's Mark reveal duration increased from 2s to 3s Traveler now causes your camera to move to the destination during the channel Traveler T1 is now \"+2 m/s\" (was -20s cd) Traveler T2 is now \"-30s cd\" (was +2 m/s) Traveler T3 fire rate increased from 20% to 30% Mo & Krill Combo T1 now grants +30% Bullet Resist While Channeling (no longer grants -28s CD) Combo cooldown reduced from 95s to 75s Paradox Bullet growth per boon increased from 0.33 to 0.45 Time Wall bullet duration reduced from 1s to 0.7s Fixed Time Wall not being spawned when looking down while casting Paradoxical Swap cooldown increased from 48s to 65s Paradoxical Swap range reduced from 30m to 25m Paradoxical Swap T1 now reduces cooldown by 15s Paradoxical Swap T3 now increases range by 20m Pulse Grenade radius reduced from 7m to 6m Pulse Grenade Damage Amp per Stack increased from 5% to 6% Pulse Grenade T3 no longer increases Damage Amp by 2% Pulse Grenade T3 now also increases the radius by 1m per pulse Pocket Shotgun falloff start reduced from 22m to 16m Enchanter's Satchel damage now respects line of sight Enchanter's Satchel now shows an aoe indicator for Pocket while channeling Affliction DPS Spirit Power scaling reduced from 0.4 to 0.34 Barrage radius reduced from 6.5m to 4.5m Barrage T3 now also increases radius by 2m Seven Base regen increased from 1.5 to 3 Movespeed scaling with Spirit Power reduced from 0.028 to 0.02 Lightning Ball T3 increased from +1m to +2m Shiv Slice and Dice Spirit damage scaling increased from 1.2 to 1.3 Slice and Dice T1 improved from -3.75s to -4s Rage decay rate reduced from 0.35 to 0.25 Rage buffer duration increased from 7s to 12s (how long it stays before starting to decay) Vindicta Reverted recent falloff damage changes Fall off increased from 58m (default) to 64m Bullet damage growth per boon reduced from 0.79 to 0.55 Flight duration no longer scales with Spirit Power Flight T2 now increases flight duration by 6s Flight bonus move speed above base now scales at 50% effectiveness No longer has -10% base bullet resist Health growth per boon reduced from 20 to 15 Gun cycle time increased from 0.22 to 0.26 (dps rescaled to remain the same, after the above changes are calculated in) Stake duration reduced from 2s to 1.75s Assassinate bonus souls is now unsecured Shooting while flying now has similar speed impact as on the ground Flight air acceleration decreased a little Crow Familiar % damage no longer affects Mid Boss Viscous Goo Ball no longer triggers on hit effect while in Ethereal Shift Fixed Superior Stamina dash count not working with Goo Ball Goo Ball stun duration reduced from 1s to 0.7s Splatter base damage reduced from 100 to 90 Splatter T2 reduced from +70 to +60 Splatter Spirit damage scale increased from 1.5 to 1.9 Fixed Instant Cast not working for Puddle Punch Warden Alchemical Flask cooldown reduced from 14s to 12s Alchemical Flask damage increased from 55 to 65 Alchemical Flask T1 is now +1 Stamina Reduction Alchemical Flask T2 is now +50 Damage Last Stand channel duration reduced from 2.2s to 2s Last Stand range increased from 12m to 13m Wraith Card Trick spirit scale reduced from 1.2 to 1.1 Card Trick generation via melee reduced by 50% Yamato Power Slash cooldown increased from 8.5s to 10.5s Power Slash T2 now also reduces cooldown by 2s Shadow Transformation no longer grants you bullet and spirit resist Shadow Transformation duration reduced from 4.5s to 4s Monster Rounds Weapon Damage vs NPCs reduced from 35% to 30% Restorative Shot Weapon Damage reduced from 8% to 7% Melee Charge Cooldown increased from 10.5s to 16s Long Range Ammo increase from 20% to 25% Tesla Bullets Spirit scaling increased from 0.13 to 0.16 Alchemical Fire Now behaves like other grenades and does not bounce off walls Base DPS increased from 45 to 55 Toxic Bullets Buildup is now 15% slower Frenzy Low HP threshold increased from 40% to 50% Ricochet Range reduced from 14m to 11m Silencer Spirit Power increased from 12 to 18 Vampiric Burst Added ammo on active increased from +50% to +75% Cooldown reduced from 37s to 34s Spiritual Overflow No longer grants +20% Fire Rate Upon full build-up, grants +35% Fire Rate Activated Spirit Power increased from +45 to +50 Healing Rite Regen duration increased from 17s to 19s (same total heal) Extra Regen Regen increased from 2.8 to 3 Ammo increased from 8% to 10% Extra Stamina Stamina Recovery increased from 14% to 16% Fire Rate reduced from 7% to 6% Now gives +25 Health Extra Health Weapon Damage increased from 5% to 6% Enduring Speed Movespeed bonus reduced from 1.4 to 1.1 (all heroes movement speed increased by 0.3) Slow resist reduced from 40% to 35% Restorative Locket Spirit Resist increased from 8% to 10% Now grants +1 Sprint Return Fire Cooldown increased from 25s to 30s Active bullet resist reduced from 25% to 20% Fortitude Health increased from +300 to +325 Lifestrike Heal increased from 55% of melee damage to 65% Veil Walker Speed increased from 3 to 4 Majestic Leap Cooldown increased from 23s to 26s Rescue Beam Cast range reduced from 36m to 32m Leech Weapon Damage increase from +15% to +20% Spirit Power increased from +12 to +18 Siphon Bullets HP Steal Per Bullet increased from 45 to 50 Extra Spirit Spirit Power increased from 9 to 10 Ammo Scavenger Spirit Power Per Soul reduced from 2 to 1 Max Stacks increased from 10 to 20 Cold Front Cooldown reduced from 34s to 28s Mystic Vulnerability Fixed it stacking with Escalating Exposure Slowing Hex Slow reduced from 30% to 25% Improved Spirit Spirit Power increased from +23 to +28 Knockdown Cooldown reduced from 48s to 40s Ethereal Shift Can no longer end it early Torment Pulse Pulse interval is now fixed and does not get reduced with cooldown reduction Superior Cooldown Now grants +100 Spirit Shield Escalating Exposure Spirit Resist On Damage reduced from -15% to -12% Amp Per Stack reduced from 6% to 5% Duration reduced from 15s to 12s Refresher Cooldown increased from 212s to 230s Mystic Reverb Slow reduced from 50% to 40%"
``

# General Changes

- Added Ranked mode
- Added a 3rd casting mode, Quick Cast (shows range/radius/etc on key down, then on key up acts like Instant Cast). The three casting modes are now Instant Cast, Quick Cast, and Confirm Cast.
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/quick_cast_modes-mp4.23110/" label="quick cast modes" />
``
- Added input buffering for ability usage (so if you cast an ability and then quickly cast another ability during its cast time, the next one will fire instead of the input being dropped)
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/input_buffering-mp4.23111/" label="input buffering" />
``
- Now displaying a unique ID for builds in the description section of the build browser.  You can click on it to copy the Build ID to the clipboard to share specific builds with friends.
- If you enter a Build ID in the search box of the build browser, it will show all of the builds for the current hero by the author of that build.
- For private lobbies, added the ability to swap players on both teams with a button press. In addition players can be randomly shuffled across the two teams, and if lanes are being assigned, can be shuffled within the teams.
- Added "Allow Duplicate Heroes" setting in Private Lobbies
- Certain heroes now have a higher priority at being in dual lanes (Ivy and Dynamo atm)
- Added per-player voice volume slider (accessible by clicking on a player via the ESC menu)
- Pausing is no longer allowed in the first three minutes of the game
- Added Thai and Indonesian localization
- Replaced the temp Yamato VO with a new translation spoken by a native actress
- Added Stomp AoE range indication as the Walker is about to use the ability
- Updated the way status effects are shown above the healthbar
- Fixed troopers being unreliable to shoot while on the zipline
- Fixed an Unsecured Souls bug where it gave extra bounty directly to the dying hero carrying unsecured souls
- Fixed AFK kick detection not working properly
- Added Crit Bonus Scale tooltip to the Weapon stats in the shop
- Fixed ESC key not working on the private lobbies page
- Fixed respawn music not playing while spectating another player
- Fixed a bug where the bot that would pick up the Urn was not the closest one, just the one that was in the highest player slot
- Fixed Streamer mode not persisting between game relaunches
- Keybinds in settings now selects the hero you're playing when you navigate to the Keybinds tab
- Rescue beam now shows heal indicator if you heal someone with it
- Fixed Debuff Reducer causing Teleporters to be faster
- Steam notifications moved to the top-left from the bottom-right, to avoid minimap overlap
- Continue to have mouse look enabled while M3 is pressed but before the ping wheel shows up
- Enabled Middle Mouse for "pinging" minimap
- Enabled the ability to middle mouse click players on the top bar
- Fixed Shiv's Killing Blow sometimes sending him into orbit
- Fixed Shiv's Killing Blow continuing to do damage while being teleported by Quantum Entanglement
- Fixed Quantum Entanglement's camera position anims not being smooth
- Yamato's Flying Strike now also cancels when the target is out of world (like with Quantum Entanglement)
- Fixed Pausing not working when using hero specific key binds
- Lash's Death Slam now has clearer visual states to indicate when someone is successfully locked in
- Fixed some cases where Grey Talon's trap effects would be stuck in the world
- Updated ground strike preview cone to have a little more information on shape & outer bounds
- Abandon Match is now only an available option once you have disconnected from the game server. Bringing up the menu while connected to a game now gives you the option to Disconnect rather than Abandon immediately
- Fixed issues with Bots not using ziplines properly
- Added Return Fire proc sound
- Added Metal Skin proc sound
- Updated McGinnis Heavy Barrage sound
- Added Guardian and Walker death notification sound for all players
- Improved panning resolution of bullet whizby sounds and shortened the max play distance to the local player
- Fixed hero death UI sound playing inconsistently
- Added bullet evasion sound effects
- Updated Kelvin weapon fire audio
- Updated Infernus weapon fire audio
- Improved clarity for hero roster selection VO
- Walker laser animation updated slightly, raising the forearms to better reveal the eye socket weakpoint to players on the ground
- Re-enabled weapon-specific reload sounds
- Abrams Life Siphon fades to 50% opacity after initial start to improve visibility
- Added Healing Rite cast sound
- Added Rescue Beam heal and pull loop sounds
- Added Health Nova cast sound
- Added Return Fire cast sound
- Revised Metal Skin cast sound
- Added Colossus cast and loop sounds
- Added echo to Echo Shard cast sound
- Added Silence Glyph cast and hit sounds
- Added Ammo Scavenger proc sound
- Added Restorative Shot proc sound
- Added Toxic Bullets proc variations
- Added a distance fade to Soul Shredder debuff effect and tweaked colors to reduce visual noise
- Improved visibility on Spiritual Overflow effects when heroes are airborne
- Reworked visual effects for puddle punch
- Updated "getting started" VO for the ability points tab to match the text
- Fixed a bunch of bugs that were impacting how VO was playing in a match.  Now a bunch of hero VO that was previously getting squashed/cut off should play properly (for instance certain lines where allies commented on ability usage, the patrons giving compliments for assists/team healing, etc).
- The patron once again will warn you when your Walkers are under attack
- The patron now will sometimes offer words of encouragement when you level up instead of when you destroy a Guardian or Walker
- Increased the time you need to carry the urn before the urn nags about not being delivered
- Fixed more instances of the wrong name for a hero being called out
- If you're Dynamo or Krill, you can now ping during your ult to alert your allies
- Mirage still loves the Djinn, but he yells about them less frequently
- Added new custom charge and light melee and parry animations for Bebop
- Added improvements for meleeing while using Siphon Life (book now floats and hand makes a fist)
- Updated Grey Talon root effect for trap
- Updated Grey Talon updated firing, projectile, impact effects
- Updated Rain of Arrows effects
- New heavy melee anims added to Mo & Krill and Ivy
- Adjusted Trooper tracer and muzzle effects for better alignment and lower visual noise
- Adjusted Lady Geist Life Drain to lower visual obstruction but increase awareness when it first latches
- Inferno Catalyst effect revisions to help show range better
- Trooper death effects resolve quicker and more cleanly
- Mirage Djinn's Mark effects revisions to reduce noise on the victim and appear more clearly for Mirage
- Soul jar effect carry and dropoff revisions to reduce visual noise for carrier
- New Imports Building
- New Taxi Stand building
- Replaced old retaining wall
- Replaced block-in park bridges
- Troopers attack range vs Lane Guardians reduced from 13.5m to 12m (they get closer to it)
- Players now need to be within 19m (above the ramp) to attack a Lane Guardian
- Guardians now take 70% less damage from troopers at the start of the game; this reduces by 10% per minute (max at +30% increased damage at 10 min)
- Guardian damage vs players increased by 20%
- Medium Camps spawn time changed from 7 min to 5 min
- Hard Camps spawn time changed from 7 min to 8 min
- Teleporters open time changed from 10 min to 8 min
- Trooper spawn/bounty lane end time changed from 10 min to 8 min
- Vaults spawn time/interval changed from 10/5 to 8/4
- Golden Statues and Breakables spawn time changed from 3 min to 2 min
- Golden Statues bonuses upgrade time changed from 15 min to 10 min
- Golden Statue Health buff increased from 15/20 to 20/30
- Golden Statues now have a tier 3 upgrade at 25 minutes (+2.5% Fire Rate, +8% Ammo, 1.5% CD Reduction, +7% Weapon Damage, 40 Health, +5 Spirit Power)
- Mid Boss now has 15 regen
- Mid Boss creep buff rescaled from 70% to 50/70/90% for the 1/2/3rd mid boss death (further deaths don't increase)
- Mid Boss rejuv respawn rescaled from 50% to 40/50/60% for the 1/2/3rd mid boss death (further deaths don't increase)
- Urn now causes the runner to be revealed on the minimap
- Heavy Melee against the urn runner now causes them to drop the urn
- Urn delivery now gives each player on your team a Golden Statue permanent buff
- Urn bounty increased by 15%
- Urn now falls down from the sky a little bit faster
- Comeback formula weighted a bit less on team vs team net worth calculation and more on the strength of the dying hero (regardless of lead)
- Percentage of deniable orbs from objectives for Guardian/Walker/Patron/Shrines rescaled from 54.55/66.67/100/0% to 35%
- Shields no longer reduce damage or get depleted by NPC units (Troopers, Bosses etc, but still takes damage from player summoned units)
- All heroes' movespeed increased by 0.3 (Enduring Speed reduced by 0.3)
- Bullet and Spirit Lifesteal now stack diminishingly
- Teleporters now grant +3 m/s for 5s after arriving at the other side
- Updated teleporter locations
[[!:https://project8-data.community.forum/attachments/23/23115-6351c66f805cedd1dd63428bfd258de2.jpg?hash=LFr8AwcJ9D]]((teleporters map))
- Moved teleporters to travel between outer lane Walkers
[[!:https://project8-data.community.forum/attachments/23/23114-140801732d6f661891f71451f40a2f01.jpg?hash=S5uNgU90Du]]((teleporter walkers))
- Added teleporters in the underground tunnels
[[!:https://project8-data.community.forum/attachments/23/23111-d4918f22661c976f90f76458cab51888.jpg?hash=wyFimvcxZR]]((teleporter underground))
- Changed underground teleporters to go between Subway and Tunnel on the same side of the map
- Widened stairs from Shrines back to the player spawn area
- Added ledge to mantle back up to the player spawn area from the pit
- Added bridge and stair to the upper level of the Subway Entrance building from the outer lane Walker arenas
- Added upper level connection through the Subway Entrance building
[[!:https://project8-data.community.forum/attachments/23/23119-3c37b9c2a5165ddd441507e62f9d3beb.jpg?hash=3MJGJRS_zb]]((outer lane 01))
- Moved Guardians back slightly further from stairs down to the canal
- Widened channels surrounding Mid Temple slightly
- Widened archways between Mid Temple channels
[[!:https://project8-data.community.forum/attachments/23/23120-8103145c268db3ec157f9f2e5b7cf9a0.jpg?hash=IJMzjSZvpH]]((mid channel 01))
- Garage and Night Club: Changed ropes so that they take you to the second floor and added back stairs to take you to the roof
- Basic Magazine: Ammo increased from 24% to 26%
- Health Nova: Spirit Power increased from +4 to +6
- Combat Barrier: Weapon Damage reduced from 25% to 22%
- Superior Stamina: Stamina Recovery increased from 20% to 25%
- Withering Whip: No longer grants +50 Health
- Withering Whip: Now grants +100 Bullet Shield
- Withering Whip: Cooldown reduced from 26s to 22s
- Improved Burst: Max Health damage reduced from 9% to 7%

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Dynamo", "Grey Talon", "Haze", "Infernus", "Ivy", "Lady Geist", "Lash", "McGinnis", "Mirage", "Mo &amp; Krill", "Paradox", "Pocket", "Seven", "Shiv", "Vindicta", "Viscous", "Warden", "Wraith", "Yamato"]} />
``

=hero:abrams:
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))
- Base health reduced from 600 to 570
- Health per boon increased from 32 to 34 (1048 vs 1046 total)
==ability:shoulder-charge:
[[/hero/abrams?ability=shoulder-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp]] Shoulder Charge change history))
### [[/hero/abrams?ability=shoulder-charge]]((Shoulder Charge))
- Fixed shoulder charge sensitivity bugs that allowed you to turn more than intended
==
==ability:seismic-impact:
[[/hero/abrams?ability=seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/hero/abrams?ability=seismic-impact]]((Seismic Impact))
- Seismic Impact now allows for some very minor movement to help nudge around small objects
==
=

=hero:bebop:
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
==ability:sticky-bomb:
[[/hero/bebop?ability=sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/hero/bebop?ability=sticky-bomb]]((Sticky Bomb))
- Sticky Bomb growth increased from 2.5% to 4% per stack
- Sticky Bomb now loses 2 stacks on death
- Sticky Bomb now has 15 max stacks
==
==ability:hook:
[[/hero/bebop?ability=grapple-arm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp]] Hook change history))
### [[/hero/bebop?ability=grapple-arm]]((Hook))
- Hook range increased from 25m to 30m
- Hook now also hits enemy troopers, killing them instantly
==
==ability:grapple-arm:
[[/hero/bebop?ability=grapple-arm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp]] Grapple Arm change history))
### [[/hero/bebop?ability=grapple-arm]]((Grapple Arm))
- Fixed some cases where Hook would grab players from around corners
==
==ability:hyper-beam:
[[/hero/bebop?ability=hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam change history))
### [[/hero/bebop?ability=hyper-beam]]((Hyper Beam))
- Hyper Beam movement slow reduced from 30% to 25%
- Hyper Beam duration no longer scales with Spirit Power
- Hyper Beam duration increased from 8s to 10s
==
==ability:uppercut:
[[/hero/bebop?ability=exploding-uppercut]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp]] Uppercut change history))
### [[/hero/bebop?ability=exploding-uppercut]]((Uppercut))
- Uppercut now applies a 15% Fire Rate slow in the landing radius for 5s. Scales with Spirit Power (0.2)
==
=

=hero:dynamo:
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))
==ability:quantum-entanglement:
[[/hero/dynamo?ability=quantum-entanglement]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp]] Quantum Entanglement change history))
### [[/hero/dynamo?ability=quantum-entanglement]]((Quantum Entanglement))
- Quantum Entanglement cooldown increased from 12.5s to 15s
- Quantum Entanglement T3 now also also reduces cooldown by 4s
==
==ability:kinetic-pulse:
[[/hero/dynamo?ability=kinetic-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp]] Kinetic Pulse change history))
### [[/hero/dynamo?ability=kinetic-pulse]]((Kinetic Pulse))
- Fixed Kinetic Pulse T2 tooltip to clarify that it affects bullets only and not melee damage
==
=

=hero:grey-talon:
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
- Arrow cycle time increased from 0.45s to 0.55s (overall dps unchanged)
==ability:rain-of-arrows:
[[/hero/grey-talon?ability=rain-of-arrows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp]] Rain of Arrows change history))
### [[/hero/grey-talon?ability=rain-of-arrows]]((Rain of Arrows))
- Fixed Rain of Arrows alternate cast causing you to hit the ground soon after cast
==
==ability:guided-owl:
[[/hero/grey-talon?ability=guided-owl]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp]] Guided Owl change history))
### [[/hero/grey-talon?ability=guided-owl]]((Guided Owl))
- Fixed Guided Owl colliding with nearby objects during cast
==
- Fire Rate no longer scales with Spirit Power
- Base bullet damage now scales with Spirit Power (0.1)
==ability:guided-owl:
[[/hero/grey-talon?ability=guided-owl]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp]] Guided Owl change history))
### [[/hero/grey-talon?ability=guided-owl]]((Guided Owl))
- Guided Owl 3s grace period for kill increased to 4s
- Fixed Guided Owl grace period still requiring that he gets the kill, rather than the target just die
==
- Movespeed no longer scales with Spirit Power
- Base stamina increased from 3 to 4
=

=hero:haze:
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))
==ability:fixation:
[[/hero/haze?ability=fixation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp]] Fixation change history))
### [[/hero/haze?ability=fixation]]((Fixation))
- Fixation max stacks increased from 30 to 40
- Fixation T3 reduced from +0.2 to +0.15
==
==ability:bullet-dance:
[[/hero/haze?ability=bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/hero/haze?ability=bullet-dance]]((Bullet Dance))
- Bullet Dance no longer grants +15% Fire Rate
- Bullet Dance base ability now grants 2 Targets Hit Per Shot
- Bullet Dance base ability no longer grants +25% Evasion
- Bullet Dance T3 now grants +40% Evasion and +2 Bullet Dance Speed
==
=

=hero:infernus:
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
==ability:catalyst-damage-amp:
[[/hero/infernus?ability=napalm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp]] Catalyst Damage Amp change history))
### [[/hero/infernus?ability=napalm]]((Catalyst Damage Amp))
- Catalyst Damage Amp reduced from 25% to 20%
==
==ability:catalyst:
[[/hero/infernus?ability=napalm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp]] Catalyst change history))
### [[/hero/infernus?ability=napalm]]((Catalyst))
- Catalyst T3 Damage Amp increased from 15% to 20%
==
=

=hero:ivy:
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))
- Improved default camera position
- Take Flight control keys are now similar to Vindicta's
- Fixed some issues with control on Take Flight when near a wall
=

=hero:lady-geist:
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))
==ability:essence-bomb:
[[/hero/lady-geist?ability=essence-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp]] Essence Bomb change history))
### [[/hero/lady-geist?ability=essence-bomb]]((Essence Bomb))
- Fixed a bug that could cause some units to take more damage than intended with Essence Bomb when multiple targets are hit
==
==ability:life-drain:
[[/hero/lady-geist?ability=life-drain]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp]] Life Drain change history))
### [[/hero/lady-geist?ability=life-drain]]((Life Drain))
- Life Drain can now be alternate-casted on allied heroes
- Added double tap accidental protection for Life Drain to help against instant cancellations
==
==ability:malice:
[[/hero/lady-geist?ability=malice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp]] Malice change history))
### [[/hero/lady-geist?ability=malice]]((Malice))
- Malice slow duration reduced from 6s to 4s
- Malice amp duration reduced from 16s to 13s
- You can now see how many Malice stacks you have on you as the opponent
==
=

=hero:lash:
[[/hero/lash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]] Lash patch history))
## [[/hero/lash]]((Lash))
- Base bullet damage reduced from 10 to 9
==ability:flog:
[[/hero/lash?ability=flog]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp]] Flog change history))
### [[/hero/lash?ability=flog]]((Flog))
- Flog Heal vs heroes reduced from 80% to 70%
- Flog Heal vs creeps reduced from 30% to 25%
==
=

=hero:mcginnis:
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
- No longer has +25% Spirit Resist
- Now has +15% Bullet Resist
==ability:mini-turrets:
[[/hero/mcginnis?ability=mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turrets change history))
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turrets))
- Mini Turrets T1 no longer grants +1 charge
- Mini Turrets duration reduced from 30s to 24s
- Mini Turrets cooldown reduced from 30s to 24s
- Mini Turrets health scaling reduced from 30% to 20%
==
==ability:mini-turret:
[[/hero/mcginnis?ability=mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turret change history))
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turret))
- Mini Turrets recharge time reduced from 5s to 3s
- Mini Turrets cast range increased from 15m to 20m
- Mini Turret damage reduction against troopers/neutrals increased from -40% to -50%
- Mini Turret damage reduction against objectives increased from -60% to -70%
- Fixed Ricochet not bouncing off of Mini Turrets
- Mini Turret spawn time reduced from 1s to 0.25s
- Mini Turret attack delay reduced from 0.35s to 0.2s
==
==ability:heavy-barrage:
[[/hero/mcginnis?ability=heavy-barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp]] Heavy Barrage change history))
### [[/hero/mcginnis?ability=heavy-barrage]]((Heavy Barrage))
- Heavy Barrage radius increased from 4.5m to 5m
==
=

=hero:mirage:
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))
==ability:tornado:
[[/hero/mirage?ability=dust-devil]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp]] Tornado change history))
### [[/hero/mirage?ability=dust-devil]]((Tornado))
- Tornado now uses a range for its travel distance instead of a travel duration (scales with range increase)
==
==ability:fire-scarabs:
[[/hero/mirage?ability=fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/hero/mirage?ability=fire-scarabs]]((Fire Scarabs))
- Enemies that have already been hit by Fire Scarabs now let the next scarab projectile pass through them
==
==ability:djinn-s-mark:
[[/hero/mirage?ability=djinns-mark]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp]] Djinn's Mark change history))
### [[/hero/mirage?ability=djinns-mark]]((Djinn's Mark))
- Djinn's Mark base damage reduced from 16 to 12
- Djinn's Mark scaling from spirit power increased from 0.4 to 0.55
- Djinn's Mark reveal duration increased from 2s to 3s
==
==ability:traveler:
[[/hero/mirage?ability=traveler]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp]] Traveler change history))
### [[/hero/mirage?ability=traveler]]((Traveler))
- Traveler now causes your camera to move to the destination during the channel
- Traveler T1 is now "+2 m/s" (was -20s cd)
- Traveler T2 is now "-30s cd" (was +2 m/s)
- Traveler T3 fire rate increased from 20% to 30%
==
=

=hero:mo-krill:
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))
==ability:combo:
[[/hero/mo-krill?ability=combo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp]] Combo change history))
### [[/hero/mo-krill?ability=combo]]((Combo))
- Combo T1 now grants +30% Bullet Resist While Channeling (no longer grants -28s CD)
- Combo cooldown reduced from 95s to 75s
==
=

=hero:paradox:
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))
- Bullet growth per boon increased from 0.33 to 0.45
==ability:time-wall:
[[/hero/paradox?ability=time-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp]] Time Wall change history))
### [[/hero/paradox?ability=time-wall]]((Time Wall))
- Time Wall bullet duration reduced from 1s to 0.7s
- Fixed Time Wall not being spawned when looking down while casting
==
==ability:paradoxical-swap:
[[/hero/paradox?ability=paradoxical-swap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp]] Paradoxical Swap change history))
### [[/hero/paradox?ability=paradoxical-swap]]((Paradoxical Swap))
- Paradoxical Swap cooldown increased from 48s to 65s
- Paradoxical Swap range reduced from 30m to 25m
- Paradoxical Swap T1 now reduces cooldown by 15s
- Paradoxical Swap T3 now increases range by 20m
==
==ability:pulse-grenade:
[[/hero/paradox?ability=pulse-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp]] Pulse Grenade change history))
### [[/hero/paradox?ability=pulse-grenade]]((Pulse Grenade))
- Pulse Grenade radius reduced from 7m to 6m
- Pulse Grenade Damage Amp per Stack increased from 5% to 6%
- Pulse Grenade T3 no longer increases Damage Amp by 2%
- Pulse Grenade T3 now also increases the radius by 1m per pulse
==
=

=hero:pocket:
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))
- Shotgun falloff start reduced from 22m to 16m
==ability:enchanter-s-satchel:
[[/hero/pocket?ability=enchanters-satchel]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp]] Enchanter's Satchel change history))
### [[/hero/pocket?ability=enchanters-satchel]]((Enchanter's Satchel))
- Enchanter's Satchel damage now respects line of sight
- Enchanter's Satchel now shows an aoe indicator for Pocket while channeling
==
==ability:affliction-dps-spirit-power:
[[/hero/pocket?ability=affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction DPS Spirit Power change history))
### [[/hero/pocket?ability=affliction]]((Affliction DPS Spirit Power))
- Affliction DPS Spirit Power scaling reduced from 0.4 to 0.34
==
==ability:barrage:
[[/hero/pocket?ability=barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp]] Barrage change history))
### [[/hero/pocket?ability=barrage]]((Barrage))
- Barrage radius reduced from 6.5m to 4.5m
- Barrage T3 now also increases radius by 2m
==
=

=hero:seven:
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
- Base regen increased from 1.5 to 3
- Movespeed scaling with Spirit Power reduced from 0.028 to 0.02
==ability:lightning-ball:
[[/hero/seven?ability=lightning-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp]] Lightning Ball change history))
### [[/hero/seven?ability=lightning-ball]]((Lightning Ball))
- Lightning Ball T3 increased from +1m to +2m
==
=

=hero:shiv:
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
==ability:slice-and-dice:
[[/hero/shiv?ability=slice-and-dice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp]] Slice and Dice change history))
### [[/hero/shiv?ability=slice-and-dice]]((Slice and Dice))
- Slice and Dice Spirit damage scaling increased from 1.2 to 1.3
- Slice and Dice T1 improved from -3.75s to -4s
==
- Rage decay rate reduced from 0.35 to 0.25
- Rage buffer duration increased from 7s to 12s (how long it stays before starting to decay)
=

=hero:vindicta:
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
- Reverted recent falloff damage changes
- Fall off increased from 58m (default) to 64m
- Bullet damage growth per boon reduced from 0.79 to 0.55
==ability:flight:
[[/hero/vindicta?ability=flight]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]] Flight change history))
### [[/hero/vindicta?ability=flight]]((Flight))
- Flight duration no longer scales with Spirit Power
- Flight T2 now increases flight duration by 6s
- Flight bonus move speed above base now scales at 50% effectiveness
==
- No longer has -10% base bullet resist
- Health growth per boon reduced from 20 to 15
- Gun cycle time increased from 0.22 to 0.26 (dps rescaled to remain the same, after the above changes are calculated in)
==ability:stake:
[[/hero/vindicta?ability=stake]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp]] Stake change history))
### [[/hero/vindicta?ability=stake]]((Stake))
- Stake duration reduced from 2s to 1.75s
==
==ability:assassinate:
[[/hero/vindicta?ability=assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/hero/vindicta?ability=assassinate]]((Assassinate))
- Assassinate bonus souls is now unsecured
==
==ability:flight:
[[/hero/vindicta?ability=flight]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]] Flight change history))
### [[/hero/vindicta?ability=flight]]((Flight))
- Shooting while flying now has similar speed impact as on the ground
- Flight air acceleration decreased a little
==
==ability:crow-familiar:
[[/hero/vindicta?ability=crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow Familiar change history))
### [[/hero/vindicta?ability=crow-familiar]]((Crow Familiar))
- Crow Familiar % damage no longer affects Mid Boss
==
=

=hero:viscous:
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))
==ability:goo-ball:
[[/hero/viscous?ability=goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball change history))
### [[/hero/viscous?ability=goo-ball]]((Goo Ball))
- Goo Ball no longer triggers on hit effect while in Ethereal Shift
- Fixed Superior Stamina dash count not working with Goo Ball
- Goo Ball stun duration reduced from 1s to 0.7s
==
==ability:splatter:
[[/hero/viscous?ability=splatter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp]] Splatter change history))
### [[/hero/viscous?ability=splatter]]((Splatter))
- Splatter base damage reduced from 100 to 90
- Splatter T2 reduced from +70 to +60
==
==ability:splatter-spirit:
[[/hero/viscous?ability=splatter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp]] Splatter Spirit change history))
### [[/hero/viscous?ability=splatter]]((Splatter Spirit))
- Splatter Spirit damage scale increased from 1.5 to 1.9
==
==ability:puddle-punch:
[[/hero/viscous?ability=puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/hero/viscous?ability=puddle-punch]]((Puddle Punch))
- Fixed Instant Cast not working for Puddle Punch
==
=

=hero:warden:
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))
==ability:alchemical-flask:
[[/hero/warden?ability=alchemical-flask]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp]] Alchemical Flask change history))
### [[/hero/warden?ability=alchemical-flask]]((Alchemical Flask))
- Alchemical Flask cooldown reduced from 14s to 12s
- Alchemical Flask damage increased from 55 to 65
- Alchemical Flask T1 is now +1 Stamina Reduction
- Alchemical Flask T2 is now +50 Damage
==
==ability:last-stand:
[[/hero/warden?ability=last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/hero/warden?ability=last-stand]]((Last Stand))
- Last Stand channel duration reduced from 2.2s to 2s
- Last Stand range increased from 12m to 13m
==
=

=hero:wraith:
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))
==ability:card-trick:
[[/hero/wraith?ability=card-trick]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp]] Card Trick change history))
### [[/hero/wraith?ability=card-trick]]((Card Trick))
- Card Trick spirit scale reduced from 1.2 to 1.1
- Card Trick generation via melee reduced by 50%
==
=

=hero:yamato:
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
==ability:power-slash:
[[/hero/yamato?ability=power-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp]] Power Slash change history))
### [[/hero/yamato?ability=power-slash]]((Power Slash))
- Power Slash cooldown increased from 8.5s to 10.5s
- Power Slash T2 now also reduces cooldown by 2s
==
==ability:shadow-transformation:
[[/hero/yamato?ability=shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/hero/yamato?ability=shadow-transformation]]((Shadow Transformation))
- Shadow Transformation no longer grants you bullet and spirit resist
- Shadow Transformation duration reduced from 4.5s to 4s
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Alchemical Fire", "Ammo Scavenger", "Cold Front", "Enduring Speed", "Escalating Exposure", "Ethereal Shift", "Extra Health", "Extra Regen", "Extra Spirit", "Extra Stamina", "Fortitude", "Frenzy", "Healing Rite", "Improved Spirit", "Knockdown", "Leech", "Lifestrike", "Long Range", "Majestic Leap", "Melee Charge", "Monster Rounds", "Mystic Reverb", "Mystic Vulnerability", "Refresher", "Rescue Beam", "Restorative Locket", "Restorative Shot", "Return Fire", "Ricochet", "Silencer", "Siphon Bullets", "Slowing Hex", "Spiritual Overflow", "Superior Cooldown", "Tesla Bullets", "Torment Pulse", "Toxic Bullets", "Vampiric Burst", "Veil Walker"]} />
``

=item:alchemical-fire:
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))
- Now behaves like other grenades and does not bounce off walls
- Base DPS increased from 45 to 55
=

=item:ammo-scavenger:
[[/item/ammo-scavenger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]] Ammo Scavenger patch history))
## [[/item/ammo-scavenger]]((Ammo Scavenger))
- Spirit Power Per Soul reduced from 2 to 1
- Max Stacks increased from 10 to 20
=

=item:cold-front:
[[/item/cold-front]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp]] Cold Front patch history))
## [[/item/cold-front]]((Cold Front))
- Cooldown reduced from 34s to 28s
=

=item:enduring-speed:
[[/item/enduring-speed]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp]] Enduring Speed patch history))
## [[/item/enduring-speed]]((Enduring Speed))
- Movespeed bonus reduced from 1.4 to 1.1 (all heroes movement speed increased by 0.3)
- Slow resist reduced from 40% to 35%
=

=item:escalating-exposure:
[[/item/escalating-exposure]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp]] Escalating Exposure patch history))
## [[/item/escalating-exposure]]((Escalating Exposure))
- Spirit Resist On Damage reduced from -15% to -12%
- Amp Per Stack reduced from 6% to 5%
- Duration reduced from 15s to 12s
=

=item:ethereal-shift:
[[/item/ethereal-shift]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp]] Ethereal Shift patch history))
## [[/item/ethereal-shift]]((Ethereal Shift))
- Can no longer end it early
=

=item:extra-health:
[[/item/extra-health]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp]] Extra Health patch history))
## [[/item/extra-health]]((Extra Health))
- Weapon Damage increased from 5% to 6%
=

=item:extra-regen:
[[/item/extra-regen]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp]] Extra Regen patch history))
## [[/item/extra-regen]]((Extra Regen))
- Regen increased from 2.8 to 3
- Ammo increased from 8% to 10%
=

=item:extra-spirit:
[[/item/extra-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp]] Extra Spirit patch history))
## [[/item/extra-spirit]]((Extra Spirit))
- Spirit Power increased from 9 to 10
=

=item:extra-stamina:
[[/item/extra-stamina]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp]] Extra Stamina patch history))
## [[/item/extra-stamina]]((Extra Stamina))
- Stamina Recovery increased from 14% to 16%
- Fire Rate reduced from 7% to 6%
- Now gives +25 Health
=

=item:fortitude:
[[/item/fortitude]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp]] Fortitude patch history))
## [[/item/fortitude]]((Fortitude))
- Health increased from +300 to +325
=

=item:frenzy:
[[/item/frenzy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp]] Frenzy patch history))
## [[/item/frenzy]]((Frenzy))
- Low HP threshold increased from 40% to 50%
=

=item:healing-rite:
[[/item/healing-rite]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp]] Healing Rite patch history))
## [[/item/healing-rite]]((Healing Rite))
- Regen duration increased from 17s to 19s (same total heal)
=

=item:improved-spirit:
[[/item/improved-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp]] Improved Spirit patch history))
## [[/item/improved-spirit]]((Improved Spirit))
- Spirit Power increased from +23 to +28
=

=item:knockdown:
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))
- Cooldown reduced from 48s to 40s
=

=item:leech:
[[/item/leech]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp]] Leech patch history))
## [[/item/leech]]((Leech))
- Weapon Damage increase from +15% to +20%
- Spirit Power increased from +12 to +18
=

=item:lifestrike:
[[/item/lifestrike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp]] Lifestrike patch history))
## [[/item/lifestrike]]((Lifestrike))
- Heal increased from 55% of melee damage to 65%
=

=item:long-range:
[[/item/long-range]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp]] Long Range patch history))
## [[/item/long-range]]((Long Range))
- Ammo increase from 20% to 25%
=

=item:majestic-leap:
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))
- Cooldown increased from 23s to 26s
=

=item:melee-charge:
[[/item/melee-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp]] Melee Charge patch history))
## [[/item/melee-charge]]((Melee Charge))
- Cooldown increased from 10.5s to 16s
=

=item:monster-rounds:
[[/item/monster-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp]] Monster Rounds patch history))
## [[/item/monster-rounds]]((Monster Rounds))
- Weapon Damage vs NPCs reduced from 35% to 30%
=

=item:mystic-reverb:
[[/item/mystic-reverb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp]] Mystic Reverb patch history))
## [[/item/mystic-reverb]]((Mystic Reverb))
- Slow reduced from 50% to 40%
=

=item:mystic-vulnerability:
[[/item/mystic-vulnerability]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp]] Mystic Vulnerability patch history))
## [[/item/mystic-vulnerability]]((Mystic Vulnerability))
- Fixed it stacking with Escalating Exposure
=

=item:refresher:
[[/item/refresher]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp]] Refresher patch history))
## [[/item/refresher]]((Refresher))
- Cooldown increased from 212s to 230s
=

=item:rescue-beam:
[[/item/rescue-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp]] Rescue Beam patch history))
## [[/item/rescue-beam]]((Rescue Beam))
- Cast range reduced from 36m to 32m
=

=item:restorative-locket:
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))
- Spirit Resist increased from 8% to 10%
- Now grants +1 Sprint
=

=item:restorative-shot:
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))
- Weapon Damage reduced from 8% to 7%
=

=item:return-fire:
[[/item/return-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp]] Return Fire patch history))
## [[/item/return-fire]]((Return Fire))
- Cooldown increased from 25s to 30s
- Active bullet resist reduced from 25% to 20%
=

=item:ricochet:
[[/item/ricochet]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp]] Ricochet patch history))
## [[/item/ricochet]]((Ricochet))
- Range reduced from 14m to 11m
=

=item:silencer:
[[/item/silencer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]] Silencer patch history))
## [[/item/silencer]]((Silencer))
- Spirit Power increased from 12 to 18
=

=item:siphon-bullets:
[[/item/siphon-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]] Siphon Bullets patch history))
## [[/item/siphon-bullets]]((Siphon Bullets))
- HP Steal Per Bullet increased from 45 to 50
=

=item:slowing-hex:
[[/item/slowing-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp]] Slowing Hex patch history))
## [[/item/slowing-hex]]((Slowing Hex))
- Slow reduced from 30% to 25%
=

=item:spiritual-overflow:
[[/item/spiritual-overflow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp]] Spiritual Overflow patch history))
## [[/item/spiritual-overflow]]((Spiritual Overflow))
- No longer grants +20% Fire Rate
- Upon full build-up, grants +35% Fire Rate
- Activated Spirit Power increased from +45 to +50
=

=item:superior-cooldown:
[[/item/superior-cooldown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp]] Superior Cooldown patch history))
## [[/item/superior-cooldown]]((Superior Cooldown))
- Now grants +100 Spirit Shield
=

=item:tesla-bullets:
[[/item/tesla-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp]] Tesla Bullets patch history))
## [[/item/tesla-bullets]]((Tesla Bullets))
- Spirit scaling increased from 0.13 to 0.16
=

=item:torment-pulse:
[[/item/torment-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp]] Torment Pulse patch history))
## [[/item/torment-pulse]]((Torment Pulse))
- Pulse interval is now fixed and does not get reduced with cooldown reduction
=

=item:toxic-bullets:
[[/item/toxic-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp]] Toxic Bullets patch history))
## [[/item/toxic-bullets]]((Toxic Bullets))
- Buildup is now 15% slower
=

=item:vampiric-burst:
[[/item/vampiric-burst]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp]] Vampiric Burst patch history))
## [[/item/vampiric-burst]]((Vampiric Burst))
- Added ammo on active increased from +50% to +75%
- Cooldown reduced from 37s to 34s
=

=item:veil-walker:
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))
- Speed increased from 3 to 4
=