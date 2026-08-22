``meta:
title "09-26-2024 Update"
thread_id "33015"
published "2024-09-26T14:17:58-0700"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
content_text "Added new hero, Mirage. Added an initial Anti-Cheat detection system. When a user is detected as cheating, during the game session the opponents will be given a choice between banning the user immediately and ending the match or turning the cheater into a frog for the rest of the game and then banning them afterwards. The system is set to conservative detection levels as we work on a v2 anti-cheat system that is more extensive. We will turn on the banning of users in a couple of days after the update is out. When a match is ended this way, the results will not count for other players. Added global quickcast support. You can now configure your abilities and/or items to be on quickcast mode globally. You can also customize each ability individually to be quickcast or not. This also supports grenade style abilities. Hero specific keybinds now say the ability name instead of ability 1-4 Added Zipline hotkey that can be independently bound from space/jump Fixed per-hero keys not inheriting user-defined default keys properly Added keybind indicator for hero-specific binds showing which keys have been bound for that hero Added Custom Match play mode Private lobbies now have an option to turn on cheats Private lobbies now let you select the specific servers to use Private lobbies now have an option to make the match publicly visible or private to only the players Private lobbies now support post-game and replays properly Private lobbies now allow picking specific lanes (solo and dual lane colors are displayed) Added a cheat report option in-game and post-game Can now mute and report enemy players using ESC while in-game Updated the game access invite UI to make it clear when users have been accepted (in most cases we look into where a user said their friend wasn't accepted, the user was actually accepted but they never claimed the game on the Steam notifications side) Added voice indicators for when players are speaking in party and team chat (green for party, white for team) Updated Player Card and action menu when clicking on a player in the friend list or ESC menu Fixed Rich Presence for Steam and in-game friend lists Party Code is now hidden when you enable Streamer Mode Added Region indicator to the matches on the watch tab Fixed search by MatchID not working for games that are live Added Spectator Fog of War toggle (hotkeys available in settings) Added South Africa servers Added Italian localization Instead of showing the total number of favorites for each build, we now tag popular builds using a mix of both recent and historical usage so that newer builds are easier to find Builds that haven't been updated in 30 days now have a distinct visual General rendering performance improvements Shadow quality improvements for higher shadow settings Fixed issues with player outline rendering in FSR2 Fixed regression with saturation volumes outline not showing up Displacement mapping no longer an official option and will likely be cut (it can be enabled with a ConVar after the game starts) Lighting improvements in map Picking up a powerup will now list all the stats they modify in the HUD instead of a generic name like 'Casting' or 'Gun' Spirit scaling is now always shown on the tooltips without needing to hold alt/tab Updated Viscous icon to look more different from Dynamo Added frosted shell effect on the rejuv crystal when Frozen Shelter is active Music and Sound effects will now pause during game pause Fixed Guardian trying to shoot people unsuccessfully behind cover Fixed Quicksilver Reload bonus damage not working correctly with things like Scorn and Flog Added timer sound to the last couple seconds of Flying Cloak Wall Jumps now use better animations to communicate directionality Fixed jumping between ziplines consuming stamina Fixed Magic Reverb not getting increased bonus damage from damage amps Improved preloading during queue time Updated Killing Blow effects Updated Lightning Ball effects to reduce some visual noise Fixed some issues with Crimson Slash effect not appearing reliably Viscous Puddle Punch will now show a red preview for when the punch is out of range but within 2x of the cast range Fixed Ricochet not respecting LOS when picking the targets No longer play low ammo sounds when firing while sliding Fixed not being able to bind Reload to Mouse Wheel Up/Down Minimap line colors now match the color of the hero drawing them Fixed spectator keybinds not showing correctly Updated Flying Strike effects to reduce some visual noise Fixed Flex Slot unlock order not matching the usual order of unlocks Updated Sleep Dagger projectile, impact and sleeping debuff visuals Fixed imbue and active abilities dialog not responding to keybinds if your ability/item binds included a modifier key or were bound to the mouse wheel Fixed Dynamo not playing an animation during the cast delay on Singularity Updated bullet shield break effects Updated Unstoppable effects to be clearer at cast time Fixed various projectiles going through bosses (Wraith cards, Geist bombs, etc) Fixed Dash not always breaking breakables Breakables will now wait to spawn if a player is in the way Abrams now has a new custom heavy melee animation Updated Haze VO Fixed a bug where Kelvin desperation VO for Arctic Beam and Ice Path were flipped Turned off a Shiv line where he referenced slowing down enemies when he wasn't actually doing so Removed reason 31 of why Lash is better than Bebop and replaced it with reason 26 of why Lash is better than Bebop (fixed a bug with Lash's hero select lines) Replaced a Grey Talon select line to make his intentions more clear Infernus will no longer appear in every bot match Bots can now choose to play Lady Geist, Mirage, Shiv, and Warden Fixed min/max falloff range displaying incorrectly on Weapon Stats Tooltip Updated Rejuvenator buff effect Updated wall bounce effects for Viscous in ball form Added citadel_give_gold cheat command Improved read on the connecting rope for Flying Strike and reduced visual obstruction of the ending slash Music bug fixes for replay and spectating Allow announcer lines for kill streaks and various hero lines to play while the player is in an active combat encounter Timing critical music and sfx will pause and resume in response to game pause Side lanes are now a little further apart from the middle lanes Added a First Blood bonus bounty for the first kill each player gets. Grants 150 bonus souls. Lane setup is now always 1-2-2-1 Zipline Boost now starts on cooldown again Trooper damage reduction from Guardians reduced from 35% to 28% (they die a little faster to Guardians now) Trooper share radius reduced (from allied hero to allied hero 50m->40m, from orb to allied hero 40m->35m) Reverted recent creep sharing duplication changes (back to how it was over a week ago, we want to see if it's still an issue with the other changes in this patch) Some latency-related calculation improvements that help orbs be a little less deny favored Orbs now appear a little smaller to the enemy that is trying to deny them Added a Soul Generator (like the one in hero sandbox) in the respawn area. Starts spawning orbs at 3 minutes. Each orb is worth 10 souls when shot. (primary purpose for this is cases when you are very close to an item purchase) Fire Rate slows now stack diminishingly Rejuv bonus creep HP increased from 50% to 70% Rejuv bonus is no longer consumed for dead players, they have it on their next life now Troopers no longer give half bounty when base guardians are destroyed for that lane Killer to Assist bounty ratio reduced from 2.0 to 1.7 (slightly more to assists) Midgame respawn time increased a bit (reaches 50s at 20 min instead of 40s at 20 min) Teleporter delay reduced from 5s to 4s Guardians now deal 10% more damage to players Sinner's Sacrifice now grants a permanent golden statue bonus when it is killed Fixed Sinner's Sacrifice sharing bounty to nearby allies Added indicator on the hud to help track your passive cooldown items when they are 1s from ready (headshot Booster, Medic Bullets, etc) Boon count increased from 11 to 14 (added to 16/18/20k) Non-Health boon bonuses rescaled over the 14 levels (same total as before) Aggressive crouch spamming within a very narrow window will now cause you to very briefly move progressively slower Added Rejuv drop on a loop in the sandbox mode Added infinite ammo option to sandbox (\"No Reload\") Fixed dashing downwards not destroying breakables Silence now deselects your ability if you had it open when silenced High-Velocity Mag: Bullet Velocity reduced from +30% to +25% Hollow Point Ward: Spirit Shield increased from +85 to +95 Pristine Emblem: Now requires High-Velocity Mag Pristine Emblem: Now grants +35% Bullet Velocity Combat Barrier: Fire Rate while shielded reduced from 8% to 6% Combat Barrier: Weapon Damage while shielded reduced from 28% to 25% Combat Barrier: Bullet Shield increased from +300 to +325 Health Nova: Weapon Damage increased from 10% to 12% Improved Bullet Armor: Bullet Resist increased from 45% to 50% Mystic Reach: Ability Range increased from 16% to 18% Mystic Reach: Now provides 6% Bullet Resist instead of 6% Spirit Resist Withering Whip: No longer grants +8% Fire Rate Withering Whip: Spirit Power increased from +4 to +6 Withering Whip: Now grants +1 Sprint Withering Whip: Cast range increased from 24m to 30m Withering Whip: Fire Rate slow increased from 40% to 45% Improved Reach: Now provides 12% Bullet Resist instead of 12% Spirit Resist Outer lanes at the middle of the map pushed further away from the inner lanes Added connection from canal near the urn platforms through the Radio Station and Apartment buildings Reworked interior corridors of Fish Market/Nursery to exit to the buildings sooner Added interior room partition from the Fish Market/Nursery to the Shops Moved rope to the Fish Market/Nursery rooftop to the back of the building Removed upper interior hallway from rope to the Fish Market/Nursery rooftops Moved truck from in front of archway with cosmic veil to the back of the Fish Market/Nursery Redesigned outer lane path (ziplines and trooper nodes) from Walker to Guardian on Amber Yellow and Sapphire Purple Added interior passage beside Subway Entrance to the outer lanes Abrams Infernal Resilience reduced from 16% to 15% Infernal Resilience T3 reduced from 9% to 8% Siphon Life spirit scaling increased from 0.2 to 0.3 Fixed Cases where Shoulder Charge was unexpectedly 'slamming' in to walls and stairs Bebop Hook range reduced from 30m to 25m Hyper Beam duration spirit scaling reduced from 0.08 to 0.06 Dynamo Singularity radius reduced from 8m to 7m Grey Talon Arrow cycle time reduced from 0.4s to 0.45s (overall dps unchanged) Rain of Arrows can be alternate-casted to remain near the ground Fixed air dash during Rain of Arrows going half the distance Guided Owl bonus spirit on death now has a 3s buffer window Guided Owl: very slight turn rate improvements Guided Owl radius increased from 12m to 13m Haze Sleep dagger hitbox reduced by 10% Fixed refresher not working properly with Smoke Bomb Fixed some items that didn't proc before: Tesla Bullets, Lucky Shot, Mystic Shot Bullet Dance now more accurately shows who it is shooting Fixed Bullet Dance sometimes not obeying line of sight accurately Bullet Dance bullets are now affected by Time Wall Bullet Dance evasion reduced from 50% to 25% Bullet Dance fire rate reduced from 25% to 15% Ivy Stone Form now works against airborne targets Kudzu Bomb T3 now also grants +2m Radius Kudzu Bomb spirit power scaling increased from 0.6 to 0.7 Fixed clicking noise when flying while disarmed Fixed being able to Stone Form during the Take Flight animation to circumvent the vulnerable cast period Kelvin Headshot bonus damage reduced by 20% Bullet damage growth reduced from 1.2 to 0.9 Arctic Beam movement slow reduced from 70% to 50% Moving through breakables while on Ice Path now destroys them Lady Geist Life Drain cooldown reduced from 42s to 30s Malice cooldown reduced from 6.25s to 6s Malice T1 improved from -2.75s Cooldown to -3s Fixed Life Drain not healing extra based on amplifications (like Soul Shredder and Malice stacks) Sprint increased from 1 to 1.5 McGinnis Fixed looking up circumventing the min range on Wall and Barrage Can now cast parry to cancel your ult Fixed various issues with Spectral Wall indoors and near walls spawning the wrong number of segments Mo & Krill Combo duration reduced from 2.75s to 2.5s Combo damage spirit scaling increased from 0.8 to 1.1 Combo kill trigger now has a 3s buffer window to get credit Sand Blast T1 reduced from +1.5s to +1s Sand Blast range increased from 30m to 35m Burrow base speed increased from 3 to 4 Burrow T3 speed reduced from +3 to +2 Paradox Pulse Grenade T3 now also grants +2% Damage Amp Fixed being unable to be damaged by multiple Time Walls Pocket Affliction no longer goes through walls, now respects line of sight Barrage T3 reduced from +5% to +4% Seven Static Charge stun duration reduced from 1.1 to 0.9 Static Charge T3 reduced from 1.1 to 0.9 Static Charge radius reduced from 6m to 5m Static Charge can now be alternate-casted on self (does not stun you) Static Charge now respects line of sight Lightning Ball T3 now also gives +1m Radius Shiv Slice and Dice T2 reduced from +85 to +75 Killing Blow Rage buildup per spirit damage reduced from 0.02 to 0.013 Killing Blow Rage drain rate increased from 0.3 to 0.35 Killing Blow Full Rage Bonus Damage reduced from 20% to 15% Killing Blow T2 increased from 5% to 10% Vindicta Gun cycle time increased from 0.19s to 0.22s (same overall dps) Stake: distance enemies are allowed to move increased from 6m to 8m Max Falloff reduced from 58m to 45m Fixed Flight ending if you touch the ground Low HP indication now also shows up while unscoped Assassinate Base damage reduced from 160 to 140 Assassinate zoom level reduced a little bit Flight duration spirit scaling reduced from 0.2 to 0.15 Viscous The Cube cleanse is now part of the T2 Puddle Punch enemy warning time increased from 0.35s to 0.45s Bullet Damage reduced from 13 to 12 Can now use down dash during Goo Ball Fixed Phantom Strike not positioning you correctly when using it with your Goo Ball Splatter post cast delay reduced from 0.5s to 0.2s Warden Binding Word escape range and escape time increased by 15% Last Stand spirit scaling increased from 0.9 to 1.2 Yamato Bullet damage growth reduced from 0.5 to 0.45 Crimson Slash fire rate slow reduced from 30% to 20% Fixed various issues with Flying Strike pathing Shadow Transformation duration reduced from 5s to 4.5s Shadow Transformation T3 duration increased from +1.5s to +2s Shadow Transformation no longer provides unlimited ammo Warp Stone Casting while on the ground will no longer stop the player in place, will try to move forward along the ground instead Fixed cases of Warp Stone getting caught on geometry Monster Rounds Bullet Resist vs NPCs reduced from 35% to 30% Restorative Shot Cooldown reduced from 6.2s to 5.5s Headshot Booster Fire Rate reduced from +5% to +4% Kinetic Dash Fire Rate reduced from 25% to 20% Fire Rate max duration reduced from 8s to 7s Berserker Damage required per stack reduced from 110 to 100 Mystic Shot Damage spirit scaling increased from 0.6 to 0.8 Melee Charge Impact now increases your ammo for that mag instead of reloading (so if your ammo is 2/8, it becomes 10/8). Reloads you instantly if in the middle of a reload. Cooldown increased from 8.5s to 10s Intensifying Magazine Max Weapon Damage reduced from 75% to 60% Escalating Resilience Fire Rate reduced from 14% to 12% Headhunter Now requires Headshot Booster No longer grants +50% Bullet Velocity Now grants +5% Fire Rate Fixed not being affected by cooldown reduction Titanic Magazine Ammo increased from 100% to 120% Sharpshooter Fixed falloff reduction not working properly Frenzy Low HP Spirit Resist changed to Bullet Resist Spiritual Overflow Now grants +250 Bullet Shield Silencer Now grants +12 Spirit Ricochet Fire Rate reduced from 12% to 10% Vampiric Burst Fixed casting it interrupting sliding Siphon Bullets Moved to T4 Vitality Now a T4 Vitality Item No longer grants +28% Weapon Damage Now grants +18% Bullet Resistance Shadow Weave Now a T4 Weapon Item Moved to T4 Weapon Melee Lifesteal Melee Damage reduced from 13% to 12% Heal vs non-heroes reduced from 40% to 30% Extra Stamina Stamina Recovery increased from 10% to 14% Restorative Locket No longer requires max stacks to restore a stamina point Divine Barrier Bonus Health reduced from 75 to 50 Return Fire While active grants +25% Bullet Resistance Bullet Damage Returned reduced from 70% to 60% No longer grants +7% Fire Rate Spirit Power increased from +7 to +9 Fixed Ricochet'd bullets not returning the right amount of damage Bullet Armor Bullet Resist increased from 20% to 25% Veil Walker No longer grants +20% Fire Rate Fortitude Bonus Health increased from 275 to 300 Lifestrike Cooldown reduced from 5.25s to 5s Fixed proccing heal more than once when hitting multiple targets Colossus Slow radius increased from 12m to 14m Soul Rebirth Increases base respawn rate by +15s Unstoppable Can no longer be cast during channels Ammo Scavenger Ammo reduced from 15% to 10% Health reduced from 60 to 40 Duration reduced from 35s to 30s Max stacks reduced from 12 to 10 Spirit Strike No longer grants +0.8 Health Regen Quicksilver Reload No longer triggers if your ammo is at max value already Decay Cooldown increased from 32s to 45s Cast range scaling reduced from 0.2 to 0.16 Improved Spirit Spirit Power increased from +21 to +23 Knockdown Now causes enemies to fall down faster Torment Pulse Health Bonus increased from 140 to 160 Spirit Power damage scaling increased from 0.25 to 0.33 Rapid Recharge Faster Time Between Charges increased from +55% to +65% Cooldown Reduction For Charged Abilities increased from +25% to 30% Magic Carpet Fixed it consuming stamina when jumping off Escalating Exposure Fixed the bonus damage being reduced twice by resistance Refresher Bullet Resist increased from 8% to 16% Spirit Resist reduced from 16% to 8% Echo Shard Now has a 0.3s cast delay (like Refresher)"
``

# General Changes

- Added new hero, Mirage.
[[!:https://project8-data.community.forum/attachments/20/20368-e3ba7aa1f4a51da04dc021866fa54506.jpg?hash=ymVdtOoaPa]]((hero mirage))
- Added an initial Anti-Cheat detection system. When a user is detected as cheating, during the game session the opponents will be given a choice between banning the user immediately and ending the match or turning the cheater into a frog for the rest of the game and then banning them afterwards. The system is set to conservative detection levels as we work on a v2 anti-cheat system that is more extensive. We will turn on the banning of users in a couple of days after the update is out. When a match is ended this way, the results will not count for other players.
[[!:https://project8-data.community.forum/attachments/20/20367-5afd920938a15b06c92dbacbd525b980.jpg?hash=QQG9epHAYO]]((two buttons abrams))
- Added global quickcast support. You can now configure your abilities and/or items to be on quickcast mode globally. You can also customize each ability individually to be quickcast or not. This also supports grenade style abilities.
- Hero specific keybinds now say the ability name instead of ability 1-4
- Added Zipline hotkey that can be independently bound from space/jump
- Fixed per-hero keys not inheriting user-defined default keys properly
- Added keybind indicator for hero-specific binds showing which keys have been bound for that hero
- Added Custom Match play mode
- Private lobbies now have an option to turn on cheats
- Private lobbies now let you select the specific servers to use
- Private lobbies now have an option to make the match publicly visible or private to only the players
- Private lobbies now support post-game and replays properly
- Private lobbies now allow picking specific lanes (solo and dual lane colors are displayed)
- Added a cheat report option in-game and post-game
- Can now mute and report enemy players using ESC while in-game
- Updated the game access invite UI to make it clear when users have been accepted (in most cases we look into where a user said their friend wasn't accepted, the user was actually accepted but they never claimed the game on the Steam notifications side)
- Added voice indicators for when players are speaking in party and team chat (green for party, white for team)
- Updated Player Card and action menu when clicking on a player in the friend list or ESC menu
- Fixed Rich Presence for Steam and in-game friend lists
- Party Code is now hidden when you enable Streamer Mode
- Added Region indicator to the matches on the watch tab
- Fixed search by MatchID not working for games that are live
- Added Spectator Fog of War toggle (hotkeys available in settings)
- Added South Africa servers
- Added Italian localization
- Instead of showing the total number of favorites for each build, we now tag popular builds using a mix of both recent and historical usage so that newer builds are easier to find
- Builds that haven't been updated in 30 days now have a distinct visual
- General rendering performance improvements
- Shadow quality improvements for higher shadow settings
- Fixed issues with player outline rendering in FSR2
- Fixed regression with saturation volumes outline not showing up
- Displacement mapping no longer an official option and will likely be cut (it can be enabled with a ConVar after the game starts)
- Lighting improvements in map
- Picking up a powerup will now list all the stats they modify in the HUD instead of a generic name like 'Casting' or 'Gun'
- Spirit scaling is now always shown on the tooltips without needing to hold alt/tab
- Updated Viscous icon to look more different from Dynamo
- Added frosted shell effect on the rejuv crystal when Frozen Shelter is active
- Music and Sound effects will now pause during game pause
- Fixed Guardian trying to shoot people unsuccessfully behind cover
- Fixed Quicksilver Reload bonus damage not working correctly with things like Scorn and Flog
- Added timer sound to the last couple seconds of Flying Cloak
- Wall Jumps now use better animations to communicate directionality
- Fixed jumping between ziplines consuming stamina
- Fixed Magic Reverb not getting increased bonus damage from damage amps
- Improved preloading during queue time
- Updated Killing Blow effects
- Updated Lightning Ball effects to reduce some visual noise
- Fixed some issues with Crimson Slash effect not appearing reliably
- Viscous Puddle Punch will now show a red preview for when the punch is out of range but within 2x of the cast range
- Fixed Ricochet not respecting LOS when picking the targets
- No longer play low ammo sounds when firing while sliding
- Fixed not being able to bind Reload to Mouse Wheel Up/Down
- Minimap line colors now match the color of the hero drawing them
- Fixed spectator keybinds not showing correctly
- Updated Flying Strike effects to reduce some visual noise
- Fixed Flex Slot unlock order not matching the usual order of unlocks
- Updated Sleep Dagger projectile, impact and sleeping debuff visuals
- Fixed imbue and active abilities dialog not responding to keybinds if your ability/item binds included a modifier key or were bound to the mouse wheel
- Fixed Dynamo not playing an animation during the cast delay on Singularity
- Updated bullet shield break effects
- Updated Unstoppable effects to be clearer at cast time
- Fixed various projectiles going through bosses (Wraith cards, Geist bombs, etc)
- Fixed Dash not always breaking breakables
- Breakables will now wait to spawn if a player is in the way
- Abrams now has a new custom heavy melee animation
- Updated Haze VO
- Fixed a bug where Kelvin desperation VO for Arctic Beam and Ice Path were flipped
- Turned off a Shiv line where he referenced slowing down enemies when he wasn't actually doing so
- Removed reason 31 of why Lash is better than Bebop and replaced it with reason 26 of why Lash is better than Bebop (fixed a bug with Lash's hero select lines)
- Replaced a Grey Talon select line to make his intentions more clear
- Infernus will no longer appear in every bot match
- Bots can now choose to play Lady Geist, Mirage, Shiv, and Warden
- Fixed min/max falloff range displaying incorrectly on Weapon Stats Tooltip
- Updated Rejuvenator buff effect
- Updated wall bounce effects for Viscous in ball form
- Added citadel_give_gold cheat command
- Improved read on the connecting rope for Flying Strike and reduced visual obstruction of the ending slash
- Music bug fixes for replay and spectating
- Allow announcer lines for kill streaks and various hero lines to play while the player is in an active combat encounter
- Timing critical music and sfx will pause and resume in response to game pause
- Side lanes are now a little further apart from the middle lanes
- Added a First Blood bonus bounty for the first kill each player gets. Grants 150 bonus souls.
- Lane setup is now always 1-2-2-1
- Zipline Boost now starts on cooldown again
- Trooper damage reduction from Guardians reduced from 35% to 28% (they die a little faster to Guardians now)
- Trooper share radius reduced (from allied hero to allied hero 50m->40m, from orb to allied hero 40m->35m)
- Reverted recent creep sharing duplication changes (back to how it was over a week ago, we want to see if it's still an issue with the other changes in this patch)
- Some latency-related calculation improvements that help orbs be a little less deny favored
- Orbs now appear a little smaller to the enemy that is trying to deny them
- Added a Soul Generator (like the one in hero sandbox) in the respawn area. Starts spawning orbs at 3 minutes. Each orb is worth 10 souls when shot. (primary purpose for this is cases when you are very close to an item purchase)
- Fire Rate slows now stack diminishingly
- Rejuv bonus creep HP increased from 50% to 70%
- Rejuv bonus is no longer consumed for dead players, they have it on their next life now
- Troopers no longer give half bounty when base guardians are destroyed for that lane
- Killer to Assist bounty ratio reduced from 2.0 to 1.7 (slightly more to assists)
- Midgame respawn time increased a bit (reaches 50s at 20 min instead of 40s at 20 min)
- Teleporter delay reduced from 5s to 4s
- Guardians now deal 10% more damage to players
- Sinner's Sacrifice now grants a permanent golden statue bonus when it is killed
- Fixed Sinner's Sacrifice sharing bounty to nearby allies
- Added indicator on the hud to help track your passive cooldown items when they are 1s from ready (headshot Booster, Medic Bullets, etc)
- Boon count increased from 11 to 14 (added to 16/18/20k)
- Non-Health boon bonuses rescaled over the 14 levels (same total as before)
- Aggressive crouch spamming within a very narrow window will now cause you to very briefly move progressively slower
- Added Rejuv drop on a loop in the sandbox mode
- Added infinite ammo option to sandbox ("No Reload")
- Fixed dashing downwards not destroying breakables
- Silence now deselects your ability if you had it open when silenced
- High-Velocity Mag: Bullet Velocity reduced from +30% to +25%
- Hollow Point Ward: Spirit Shield increased from +85 to +95
- Pristine Emblem: Now requires High-Velocity Mag
- Pristine Emblem: Now grants +35% Bullet Velocity
- Combat Barrier: Fire Rate while shielded reduced from 8% to 6%
- Combat Barrier: Weapon Damage while shielded reduced from 28% to 25%
- Combat Barrier: Bullet Shield increased from +300 to +325
- Health Nova: Weapon Damage increased from 10% to 12%
- Improved Bullet Armor: Bullet Resist increased from 45% to 50%
- Mystic Reach: Ability Range increased from 16% to 18%
- Mystic Reach: Now provides 6% Bullet Resist instead of 6% Spirit Resist
- Withering Whip: No longer grants +8% Fire Rate
- Withering Whip: Spirit Power increased from +4 to +6
- Withering Whip: Now grants +1 Sprint
- Withering Whip: Cast range increased from 24m to 30m
- Withering Whip: Fire Rate slow increased from 40% to 45%
- Improved Reach: Now provides 12% Bullet Resist instead of 12% Spirit Resist
- Outer lanes at the middle of the map pushed further away from the inner lanes
- Added connection from canal near the urn platforms through the Radio Station and Apartment buildings
[[!:https://project8-data.community.forum/attachments/20/20364-737a9eb201f55b83b3b09dc8d87bd1c2.jpg?hash=0gyuyoyo_r]]((radio station connection))
- Reworked interior corridors of Fish Market/Nursery to exit to the buildings sooner
- Added interior room partition from the Fish Market/Nursery to the Shops
- Moved rope to the Fish Market/Nursery rooftop to the back of the building
- Removed upper interior hallway from rope to the Fish Market/Nursery rooftops
- Moved truck from in front of archway with cosmic veil to the back of the Fish Market/Nursery
[[!:https://project8-data.community.forum/attachments/20/20363-389f6eb1102c577c4052e2f4307e2341.jpg?hash=xVUkAzjhW9]]((fish market changes))
- Redesigned outer lane path (ziplines and trooper nodes) from Walker to Guardian on Amber Yellow and Sapphire Purple
[[!:https://project8-data.community.forum/attachments/20/20361-1672050e626e1611deecb2139c8b59f7.jpg?hash=iojHR_BDBx]]((amber yellow patch))
[[!:https://project8-data.community.forum/attachments/20/20362-0ce5e2aaa8d4e097eeec35b303e96b82.jpg?hash=vXAxwTYkow]]((amber purple patch))
- Added interior passage beside Subway Entrance to the outer lanes
[[!:https://project8-data.community.forum/attachments/20/20366-90529144c84ff416aea345345096a12e.jpg?hash=_S-M-Q7HiK]]((subway entrance connection))

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Dynamo", "Grey Talon", "Haze", "Ivy", "Kelvin", "Lady Geist", "McGinnis", "Mo &amp; Krill", "Paradox", "Pocket", "Seven", "Shiv", "Vindicta", "Viscous", "Warden", "Yamato"]} />
``

=hero:abrams:
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))

==ability:infernal-resilience:
[[/hero/abrams?ability=infernal-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]] Infernal Resilience change history))
### [[/hero/abrams?ability=infernal-resilience]]((Infernal Resilience))

- Infernal Resilience reduced from 16% to 15%
- Infernal Resilience T3 reduced from 9% to 8%
==
==ability:siphon-life:
[[/hero/abrams?ability=siphon-life]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp]] Siphon Life change history))
### [[/hero/abrams?ability=siphon-life]]((Siphon Life))

- Siphon Life spirit scaling increased from 0.2 to 0.3
==
==ability:shoulder-charge:
[[/hero/abrams?ability=shoulder-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp]] Shoulder Charge change history))
### [[/hero/abrams?ability=shoulder-charge]]((Shoulder Charge))

- Fixed Cases where Shoulder Charge was unexpectedly 'slamming' in to walls and stairs
==
=
=hero:bebop:
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))

==ability:hook:
### Hook

- Hook range reduced from 30m to 25m
==
==ability:hyper-beam:
[[/hero/bebop?ability=hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam change history))
### [[/hero/bebop?ability=hyper-beam]]((Hyper Beam))

- Hyper Beam duration spirit scaling reduced from 0.08 to 0.06
==
=
=hero:dynamo:
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))

==ability:singularity:
[[/hero/dynamo?ability=singularity]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp]] Singularity change history))
### [[/hero/dynamo?ability=singularity]]((Singularity))

- Singularity radius reduced from 8m to 7m
==
=
=hero:grey-talon:
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))

- Arrow cycle time reduced from 0.4s to 0.45s (overall dps unchanged)

==ability:rain-of-arrows:
[[/hero/grey-talon?ability=rain-of-arrows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp]] Rain of Arrows change history))
### [[/hero/grey-talon?ability=rain-of-arrows]]((Rain of Arrows))

- Rain of Arrows can be alternate-casted to remain near the ground
- Fixed air dash during Rain of Arrows going half the distance
==
==ability:guided-owl:
[[/hero/grey-talon?ability=guided-owl]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp]] Guided Owl change history))
### [[/hero/grey-talon?ability=guided-owl]]((Guided Owl))

- Guided Owl bonus spirit on death now has a 3s buffer window

- Guided Owl: very slight turn rate improvements
- Guided Owl radius increased from 12m to 13m
==
=
=hero:haze:
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))

==ability:sleep-dagger:
[[/hero/haze?ability=sleep-dagger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp]] Sleep Dagger change history))
### [[/hero/haze?ability=sleep-dagger]]((Sleep Dagger))

- Sleep dagger hitbox reduced by 10%
==
==ability:smoke-bomb:
[[/hero/haze?ability=smoke-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp]] Smoke Bomb change history))
### [[/hero/haze?ability=smoke-bomb]]((Smoke Bomb))

- Fixed refresher not working properly with Smoke Bomb
- Fixed some items that didn't proc before: Tesla Bullets, Lucky Shot, Mystic Shot
==
==ability:bullet-dance:
[[/hero/haze?ability=bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/hero/haze?ability=bullet-dance]]((Bullet Dance))

- Bullet Dance now more accurately shows who it is shooting
- Fixed Bullet Dance sometimes not obeying line of sight accurately
- Bullet Dance bullets are now affected by Time Wall
- Bullet Dance evasion reduced from 50% to 25%
- Bullet Dance fire rate reduced from 25% to 15%
==
=
=hero:ivy:
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))

==ability:stone-form:
[[/hero/ivy?ability=stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/hero/ivy?ability=stone-form]]((Stone Form))

- Stone Form now works against airborne targets
==
==ability:kudzu-bomb:
### Kudzu Bomb

- Kudzu Bomb T3 now also grants +2m Radius
- Kudzu Bomb spirit power scaling increased from 0.6 to 0.7
==
==ability:air-drop:
[[/hero/ivy?ability=air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/hero/ivy?ability=air-drop]]((Air Drop))

- Fixed clicking noise when flying while disarmed
==
==ability:stone-form:
[[/hero/ivy?ability=stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/hero/ivy?ability=stone-form]]((Stone Form))

- Fixed being able to Stone Form during the Take Flight animation to circumvent the vulnerable cast period
==
=
=hero:kelvin:
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))

- Headshot bonus damage reduced by 20%
- Bullet damage growth reduced from 1.2 to 0.9

==ability:arctic-beam:
[[/hero/kelvin?ability=arctic-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp]] Arctic Beam change history))
### [[/hero/kelvin?ability=arctic-beam]]((Arctic Beam))

- Arctic Beam movement slow reduced from 70% to 50%
==
==ability:ice-path:
[[/hero/kelvin?ability=ice-path]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp]] Ice Path change history))
### [[/hero/kelvin?ability=ice-path]]((Ice Path))

- Moving through breakables while on Ice Path now destroys them
==
=
=hero:lady-geist:
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))

==ability:life-drain:
[[/hero/lady-geist?ability=life-drain]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp]] Life Drain change history))
### [[/hero/lady-geist?ability=life-drain]]((Life Drain))

- Life Drain cooldown reduced from 42s to 30s
==
==ability:malice:
[[/hero/lady-geist?ability=malice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp]] Malice change history))
### [[/hero/lady-geist?ability=malice]]((Malice))

- Malice cooldown reduced from 6.25s to 6s
- Malice T1 improved from -2.75s Cooldown to -3s
==
==ability:life-drain:
[[/hero/lady-geist?ability=life-drain]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp]] Life Drain change history))
### [[/hero/lady-geist?ability=life-drain]]((Life Drain))

- Fixed Life Drain not healing extra based on amplifications (like Soul Shredder and Malice stacks)
==

- Sprint increased from 1 to 1.5
=
=hero:mcginnis:
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))

- Fixed looking up circumventing the min range on Wall and Barrage

==ability:can:
### Can

- Can now cast parry to cancel your ult
==
==ability:spectral-wall:
[[/hero/mcginnis?ability=spectral-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp]] Spectral Wall change history))
### [[/hero/mcginnis?ability=spectral-wall]]((Spectral Wall))

- Fixed various issues with Spectral Wall indoors and near walls spawning the wrong number of segments
==
=
=hero:mo-krill:
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))

==ability:combo:
[[/hero/mo-krill?ability=combo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp]] Combo change history))
### [[/hero/mo-krill?ability=combo]]((Combo))

- Combo duration reduced from 2.75s to 2.5s
- Combo damage spirit scaling increased from 0.8 to 1.1

- Combo kill trigger now has a 3s buffer window to get credit
==
==ability:sand-blast:
[[/hero/mo-krill?ability=sand-blast]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp]] Sand Blast change history))
### [[/hero/mo-krill?ability=sand-blast]]((Sand Blast))

- Sand Blast T1 reduced from +1.5s to +1s
- Sand Blast range increased from 30m to 35m
==
==ability:burrow:
[[/hero/mo-krill?ability=burrow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp]] Burrow change history))
### [[/hero/mo-krill?ability=burrow]]((Burrow))

- Burrow base speed increased from 3 to 4
- Burrow T3 speed reduced from +3 to +2
==
=
=hero:paradox:
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))

==ability:pulse-grenade:
[[/hero/paradox?ability=pulse-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp]] Pulse Grenade change history))
### [[/hero/paradox?ability=pulse-grenade]]((Pulse Grenade))

- Pulse Grenade T3 now also grants +2% Damage Amp
==
==ability:time-wall:
[[/hero/paradox?ability=time-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp]] Time Wall change history))
### [[/hero/paradox?ability=time-wall]]((Time Wall))

- Fixed being unable to be damaged by multiple Time Walls
==
=
=hero:pocket:
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))

==ability:affliction:
[[/hero/pocket?ability=affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/hero/pocket?ability=affliction]]((Affliction))

- Affliction no longer goes through walls, now respects line of sight
==
==ability:barrage:
[[/hero/pocket?ability=barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp]] Barrage change history))
### [[/hero/pocket?ability=barrage]]((Barrage))

- Barrage T3 reduced from +5% to +4%
==
=
=hero:seven:
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))

==ability:static-charge:
[[/hero/seven?ability=static-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp]] Static Charge change history))
### [[/hero/seven?ability=static-charge]]((Static Charge))

- Static Charge stun duration reduced from 1.1 to 0.9
- Static Charge T3 reduced from 1.1 to 0.9
- Static Charge radius reduced from 6m to 5m

- Static Charge can now be alternate-casted on self (does not stun you)
- Static Charge now respects line of sight
==
==ability:lightning-ball:
[[/hero/seven?ability=lightning-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp]] Lightning Ball change history))
### [[/hero/seven?ability=lightning-ball]]((Lightning Ball))

- Lightning Ball T3 now also gives +1m Radius
==
=
=hero:shiv:
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))

==ability:slice-and-dice:
[[/hero/shiv?ability=slice-and-dice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp]] Slice and Dice change history))
### [[/hero/shiv?ability=slice-and-dice]]((Slice and Dice))

- Slice and Dice T2 reduced from +85 to +75
==
==ability:killing-blow:
[[/hero/shiv?ability=killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/hero/shiv?ability=killing-blow]]((Killing Blow))

- Killing Blow Rage buildup per spirit damage reduced from 0.02 to 0.013
- Killing Blow Rage drain rate increased from 0.3 to 0.35
==
==ability:killing-blow-full-rage-bonus-damage:
### [[/hero/shiv?ability=killing-blow]]((Killing Blow Full Rage Bonus Damage))

- Killing Blow Full Rage Bonus Damage reduced from 20% to 15%
==
==ability:killing-blow:
[[/hero/shiv?ability=killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/hero/shiv?ability=killing-blow]]((Killing Blow))

- Killing Blow T2 increased from 5% to 10%
==
=
=hero:vindicta:
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))

- Gun cycle time increased from 0.19s to 0.22s (same overall dps)

==ability:stake:
[[/hero/vindicta?ability=stake]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp]] Stake change history))
### [[/hero/vindicta?ability=stake]]((Stake))

- Stake: distance enemies are allowed to move increased from 6m to 8m
==

- Max Falloff reduced from 58m to 45m

==ability:flight:
[[/hero/vindicta?ability=flight]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]] Flight change history))
### [[/hero/vindicta?ability=flight]]((Flight))

- Fixed Flight ending if you touch the ground
==
==ability:assassinate:
[[/hero/vindicta?ability=assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/hero/vindicta?ability=assassinate]]((Assassinate))

- Low HP indication now also shows up while unscoped
==
==ability:assassinate-base:
### [[/hero/vindicta?ability=assassinate]]((Assassinate Base))

- Assassinate Base damage reduced from 160 to 140

- Assassinate zoom level reduced a little bit
==
==ability:flight:
[[/hero/vindicta?ability=flight]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]] Flight change history))
### [[/hero/vindicta?ability=flight]]((Flight))

- Flight duration spirit scaling reduced from 0.2 to 0.15
==
=
=hero:viscous:
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))

==ability:the-cube:
[[/hero/viscous?ability=the-cube]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp]] The Cube change history))
### [[/hero/viscous?ability=the-cube]]((The Cube))

- The Cube cleanse is now part of the T2
==
==ability:puddle-punch:
[[/hero/viscous?ability=puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/hero/viscous?ability=puddle-punch]]((Puddle Punch))

- Puddle Punch enemy warning time increased from 0.35s to 0.45s
==

- Bullet Damage reduced from 13 to 12

==ability:goo-ball:
[[/hero/viscous?ability=goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball change history))
### [[/hero/viscous?ability=goo-ball]]((Goo Ball))

- Can now use down dash during Goo Ball

- Fixed Phantom Strike not positioning you correctly when using it with your Goo Ball
==
==ability:splatter:
[[/hero/viscous?ability=splatter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp]] Splatter change history))
### [[/hero/viscous?ability=splatter]]((Splatter))

- Splatter post cast delay reduced from 0.5s to 0.2s
==
=
=hero:warden:
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))

==ability:binding-word:
[[/hero/warden?ability=binding-word]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp]] Binding Word change history))
### [[/hero/warden?ability=binding-word]]((Binding Word))

- Binding Word escape range and escape time increased by 15%
==
==ability:last-stand:
[[/hero/warden?ability=last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/hero/warden?ability=last-stand]]((Last Stand))

- Last Stand spirit scaling increased from 0.9 to 1.2
==
=
=hero:yamato:
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))

- Bullet damage growth reduced from 0.5 to 0.45

==ability:crimson-slash:
[[/hero/yamato?ability=crimson-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp]] Crimson Slash change history))
### [[/hero/yamato?ability=crimson-slash]]((Crimson Slash))

- Crimson Slash fire rate slow reduced from 30% to 20%
==
==ability:flying-slash:
[[/hero/yamato?ability=flying-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp]] Flying Slash change history))
### [[/hero/yamato?ability=flying-slash]]((Flying Slash))

- Fixed various issues with Flying Strike pathing
==
==ability:shadow-transformation:
[[/hero/yamato?ability=shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/hero/yamato?ability=shadow-transformation]]((Shadow Transformation))

- Shadow Transformation duration reduced from 5s to 4.5s
- Shadow Transformation T3 duration increased from +1.5s to +2s
- Shadow Transformation no longer provides unlimited ammo
==
=
# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Ammo Scavenger", "Berserker", "Bullet Armor", "Colossus", "Decay", "Divine Barrier", "Echo Shard", "Escalating Exposure", "Escalating Resilience", "Extra Stamina", "Fortitude", "Frenzy", "Headhunter", "Headshot Booster", "Improved Spirit", "Intensifying Magazine", "Kinetic Dash", "Knockdown", "Lifestrike", "Magic Carpet", "Melee Charge", "Melee Lifesteal", "Monster Rounds", "Mystic Shot", "Quicksilver Reload", "Rapid Recharge", "Refresher", "Restorative Locket", "Restorative Shot", "Return Fire", "Ricochet", "Shadow Weave", "Sharpshooter", "Silencer", "Siphon Bullets", "Soul Rebirth", "Spirit Strike", "Spiritual Overflow", "Titanic Magazine", "Torment Pulse", "Unstoppable", "Vampiric Burst", "Veil Walker", "Warp Stone"]} />
``

=item:ammo-scavenger:
[[/item/ammo-scavenger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]] Ammo Scavenger patch history))
## [[/item/ammo-scavenger]]((Ammo Scavenger))

- Ammo reduced from 15% to 10%
- Health reduced from 60 to 40
- Duration reduced from 35s to 30s
- Max stacks reduced from 12 to 10
=
=item:berserker:
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))

- Damage required per stack reduced from 110 to 100
=
=item:bullet-armor:
[[/item/bullet-armor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp]] Bullet Armor patch history))
## [[/item/bullet-armor]]((Bullet Armor))

- Bullet Resist increased from 20% to 25%
=
=item:colossus:
[[/item/colossus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp]] Colossus patch history))
## [[/item/colossus]]((Colossus))

- Slow radius increased from 12m to 14m
=
=item:decay:
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))

- Cooldown increased from 32s to 45s
- Cast range scaling reduced from 0.2 to 0.16
=
=item:divine-barrier:
[[/item/divine-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp]] Divine Barrier patch history))
## [[/item/divine-barrier]]((Divine Barrier))

- Bonus Health reduced from 75 to 50
=
=item:echo-shard:
[[/item/echo-shard]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp]] Echo Shard patch history))
## [[/item/echo-shard]]((Echo Shard))

- Now has a 0.3s cast delay (like Refresher)
=
=item:escalating-exposure:
[[/item/escalating-exposure]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp]] Escalating Exposure patch history))
## [[/item/escalating-exposure]]((Escalating Exposure))

- Fixed the bonus damage being reduced twice by resistance
=
=item:escalating-resilience:
[[/item/escalating-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp]] Escalating Resilience patch history))
## [[/item/escalating-resilience]]((Escalating Resilience))

- Fire Rate reduced from 14% to 12%
=
=item:extra-stamina:
[[/item/extra-stamina]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp]] Extra Stamina patch history))
## [[/item/extra-stamina]]((Extra Stamina))

- Stamina Recovery increased from 10% to 14%
=
=item:fortitude:
[[/item/fortitude]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp]] Fortitude patch history))
## [[/item/fortitude]]((Fortitude))

- Bonus Health increased from 275 to 300
=
=item:frenzy:
[[/item/frenzy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp]] Frenzy patch history))
## [[/item/frenzy]]((Frenzy))

- Low HP Spirit Resist changed to Bullet Resist
=
=item:headhunter:
[[/item/headhunter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp]] Headhunter patch history))
## [[/item/headhunter]]((Headhunter))

- Now requires Headshot Booster
- No longer grants +50% Bullet Velocity
- Now grants +5% Fire Rate
- Fixed not being affected by cooldown reduction
=
=item:headshot-booster:
[[/item/headshot-booster]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp]] Headshot Booster patch history))
## [[/item/headshot-booster]]((Headshot Booster))

- Fire Rate reduced from +5% to +4%
=
=item:improved-spirit:
[[/item/improved-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp]] Improved Spirit patch history))
## [[/item/improved-spirit]]((Improved Spirit))

- Spirit Power increased from +21 to +23
=
=item:intensifying-magazine:
[[/item/intensifying-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp]] Intensifying Magazine patch history))
## [[/item/intensifying-magazine]]((Intensifying Magazine))

- Max Weapon Damage reduced from 75% to 60%
=
=item:kinetic-dash:
[[/item/kinetic-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp]] Kinetic Dash patch history))
## [[/item/kinetic-dash]]((Kinetic Dash))

- Fire Rate reduced from 25% to 20%
- Fire Rate max duration reduced from 8s to 7s
=
=item:knockdown:
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))

- Now causes enemies to fall down faster
=
=item:lifestrike:
[[/item/lifestrike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp]] Lifestrike patch history))
## [[/item/lifestrike]]((Lifestrike))

- Cooldown reduced from 5.25s to 5s
- Fixed proccing heal more than once when hitting multiple targets
=
=item:magic-carpet:
[[/item/magic-carpet]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp]] Magic Carpet patch history))
## [[/item/magic-carpet]]((Magic Carpet))

- Fixed it consuming stamina when jumping off
=
=item:melee-charge:
[[/item/melee-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp]] Melee Charge patch history))
## [[/item/melee-charge]]((Melee Charge))

- Impact now increases your ammo for that mag instead of reloading (so if your ammo is 2/8, it becomes 10/8). Reloads you instantly if in the middle of a reload.
- Cooldown increased from 8.5s to 10s
=
=item:melee-lifesteal:
[[/item/melee-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp]] Melee Lifesteal patch history))
## [[/item/melee-lifesteal]]((Melee Lifesteal))

- Melee Damage reduced from 13% to 12%
- Heal vs non-heroes reduced from 40% to 30%
=
=item:monster-rounds:
[[/item/monster-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp]] Monster Rounds patch history))
## [[/item/monster-rounds]]((Monster Rounds))

- Bullet Resist vs NPCs reduced from 35% to 30%
=
=item:mystic-shot:
[[/item/mystic-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp]] Mystic Shot patch history))
## [[/item/mystic-shot]]((Mystic Shot))

- Damage spirit scaling increased from 0.6 to 0.8
=
=item:quicksilver-reload:
[[/item/quicksilver-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp]] Quicksilver Reload patch history))
## [[/item/quicksilver-reload]]((Quicksilver Reload))

- No longer triggers if your ammo is at max value already
=
=item:rapid-recharge:
[[/item/rapid-recharge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp]] Rapid Recharge patch history))
## [[/item/rapid-recharge]]((Rapid Recharge))

- Faster Time Between Charges increased from +55% to +65%
- Cooldown Reduction For Charged Abilities increased from +25% to 30%
=
=item:refresher:
[[/item/refresher]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp]] Refresher patch history))
## [[/item/refresher]]((Refresher))

- Bullet Resist increased from 8% to 16%
- Spirit Resist reduced from 16% to 8%
=
=item:restorative-locket:
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))

- No longer requires max stacks to restore a stamina point
=
=item:restorative-shot:
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))

- Cooldown reduced from 6.2s to 5.5s
=
=item:return-fire:
[[/item/return-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp]] Return Fire patch history))
## [[/item/return-fire]]((Return Fire))

- While active grants +25% Bullet Resistance
- Bullet Damage Returned reduced from 70% to 60%
- No longer grants +7% Fire Rate
- Spirit Power increased from +7 to +9
- Fixed Ricochet'd bullets not returning the right amount of damage
=
=item:ricochet:
[[/item/ricochet]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp]] Ricochet patch history))
## [[/item/ricochet]]((Ricochet))

- Fire Rate reduced from 12% to 10%
=
=item:shadow-weave:
[[/item/shadow-weave]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp]] Shadow Weave patch history))
## [[/item/shadow-weave]]((Shadow Weave))

- Now a T4 Weapon Item
- Moved to T4 Weapon
=
=item:sharpshooter:
[[/item/sharpshooter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp]] Sharpshooter patch history))
## [[/item/sharpshooter]]((Sharpshooter))

- Fixed falloff reduction not working properly
=
=item:silencer:
[[/item/silencer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]] Silencer patch history))
## [[/item/silencer]]((Silencer))

- Now grants +12 Spirit
=
=item:siphon-bullets:
[[/item/siphon-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]] Siphon Bullets patch history))
## [[/item/siphon-bullets]]((Siphon Bullets))

- Moved to T4 Vitality
- Now a T4 Vitality Item
- No longer grants +28% Weapon Damage
- Now grants +18% Bullet Resistance
=
=item:soul-rebirth:
[[/item/soul-rebirth]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp]] Soul Rebirth patch history))
## [[/item/soul-rebirth]]((Soul Rebirth))

- Increases base respawn rate by +15s
=
=item:spirit-strike:
[[/item/spirit-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp]] Spirit Strike patch history))
## [[/item/spirit-strike]]((Spirit Strike))

- No longer grants +0.8 Health Regen
=
=item:spiritual-overflow:
[[/item/spiritual-overflow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp]] Spiritual Overflow patch history))
## [[/item/spiritual-overflow]]((Spiritual Overflow))

- Now grants +250 Bullet Shield
=
=item:titanic-magazine:
[[/item/titanic-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp]] Titanic Magazine patch history))
## [[/item/titanic-magazine]]((Titanic Magazine))

- Ammo increased from 100% to 120%
=
=item:torment-pulse:
[[/item/torment-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp]] Torment Pulse patch history))
## [[/item/torment-pulse]]((Torment Pulse))

- Health Bonus increased from 140 to 160
- Spirit Power damage scaling increased from 0.25 to 0.33
=
=item:unstoppable:
[[/item/unstoppable]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp]] Unstoppable patch history))
## [[/item/unstoppable]]((Unstoppable))

- Can no longer be cast during channels
=
=item:vampiric-burst:
[[/item/vampiric-burst]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp]] Vampiric Burst patch history))
## [[/item/vampiric-burst]]((Vampiric Burst))

- Fixed casting it interrupting sliding
=
=item:veil-walker:
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))

- No longer grants +20% Fire Rate
=
=item:warp-stone:
[[/item/warp-stone]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp]] Warp Stone patch history))
## [[/item/warp-stone]]((Warp Stone))

- Casting while on the ground will no longer stop the player in place, will try to move forward along the ground instead
- Fixed cases of Warp Stone getting caught on geometry
=