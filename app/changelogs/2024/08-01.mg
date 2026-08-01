``meta:
title "08-01-2024 Update"
thread_id "13369"
published "2024-08-01T14:47:26-0700"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
status "draft"
content_text "Added a new hero, Viscous. He's green. Improved client performance Reworked the Hero Builds system. Browsing and editing builds now happens within the Shop UI (accessible via Sandbox or during a normal game). You can create custom categories for items with unique names and descriptions that can be independently resized and positioned. The interface for browsing builds has also been improved, public builds will now be sorted by popularity (number of favorites). Old builds are incompatible with this system, so they won't be visible in this UI, but we'll have a console command we'll release soon that you can use to print out your older guides if you need them for reference. North America (NA) servers have been moved from the west coast to closer to the middle of the country to make latency between east and west coast a little more even, as the majority of users are east coast now. The total average ping amongst all players will be lower as a result of this (a little higher for some and a lot lower for others). NA region testing times now start 1 hour earlier weekdays and weekends Minimum hero roster requirement reduced from 4 to 3 Added Oceanic servers and matchmaking region. Testing times are displayed in the client Added Teleporter icons on the minimap. The icons glow when you get close to them and pulse on the teleporter's exit location to show you the destination when you are about to enter it. When using the underground tunnels, the primary minimap fades out and an underground map for that area shows you your path and the exit locations. Reworked the invite system in the client to streamline the process. Emails are no longer required, the users will now receive access directly through Steam and Discord/Forum access will be available through the client. The UI will now also group users into three categories: available to invite, already invited, and already have access. This new system will result in less invitations stuck in limbo, and any previous invites that have not already claimed the game will be granted through this system as well. Hero Sandbox: Added an orb spawner for practicing last-hitting orbs Hero Sandbox: Added a dummy hero that patrols left and right to practice targeting Added a checkbox on the startup development dialog to be able to choose to not show it again Your vision through a Cosmic Veil is now based on your hero position rather than camera position Adjusted Zipline camera positions for various heroes to help with visibility Double tap threshold increased from 0.2s to 0.3s Fixed Candle Troopers near-death flash sometimes occurring while moving or doing other active animations Candle Trooper behind-wall HUD indicator now also shows near-death state Fixed taking damage not interrupting teleporters Fixed clicking on the top bar or minimap to change spectate targets being unreliable Fixed Function keys (F1-F5) being broken recently and not spectating team mates Fixed various abilities not showing the cast preview correctly on the first use (Mini Turrets, Quantum Entanglement, etc) Fixed Paradox Swap sometimes putting players behind walls Fixed Lash's Ground Strike sometimes causing the hero to be stuck for the rest of the match Fixed Abrams' Charge and Siphon pings not playing the correct VO Fixed Walkers having a pause at the end of their Rocket Barrage Fixed multiple instances of \"Killing Blow\" in the Damage Report Temporarily disabled the audio reminder on being unable to damage the patron while the shrines are alive Fixed Spectral Wall forcing itself into the first ability slot if its cooldown is refreshed Changed camera to more closely track the followed hero angles when watching replays Player names no longer show up above hero's heads when in replay free-cam mode Increased post-game time by 1s Fixed upgrading abilities via hotkeys not working while dead Fixed dead player minimap icons showing over enemy players who are below street level and over shop icons Fixed various bugs with Infernus that caused significant lag Fixed Shrines not having collision Fixed crosshair sometimes being stuck hidden for Yamato after Flying Strike was interrupted Added a bunch of new Ivy lines including updated pings, kill lines, etc Improved mix clarity for game dialog Improved distinction between orb collect and orb deny sounds Fixed various cheat/debug commands being accessible Updated Pocket animations: New crouch walk and aim, updated slide animation, and new firing from slide animation. Updated Mo & Krill Burrow start, duration, and end sounds Updated Mo & Krill Combo sound Updated Mo & Krill Sand Blast cast sound mix Updated Warden Alchemical Flask impact sounds Updated Warden Binding Word sound mix for teammates Updated Pocket Enchanted Satchel cast and delay sounds Added sleep status sound Updated Wraith zipline animations Fixed a bug with Urn that could cause you to be permanently silenced Fixed shop close sounds playing whenever the player enters the radius of a closed shop Added new visual effects for Lash's Ground Strike Improved ground impact effects for Ivy's True Form The client now culls more sounds when they are below a volume threshold The server no longer tells clients to play certain sounds when players and spectators are outside of audible range Shortened weapons and abilities volume attenuation over distance Fixed the console command zoom_sensitivity_ratio affecting both zoomed in and out Replaced two oil trucks with a new vehicle prop Improved visibility of low health state on troopers about to die Fixed Pocket's Cloak being able to tunnel through some ceilings and out of the world Reworked the location of the Walker on Amber Yellow and Sapphire Purple lanes. They are a little further towards the map edges. Nearby terrain has been reworked as well. The shooting experience near corners has been improved. Previously if your hero's eyes were obstructed at all, you would be unable to shoot altogether even if a large portion of your body was clearly visible. The check will now be a little more sophisticated and custom per hero, to allow you to shoot if your body is reasonably exposed. A part of this will also involve your hero leaning out a bit if not enough of your model is exposed to enemies. Soul Orbs now fly out in different initial directions before floating up. There is a 1/3rd chance it goes left, 1/3rd chance it goes right, and 1/3rd chance it goes up. Teleporters are now in pairs that send you between them to traverse the map horizontally Removed outer lane teleporters Added teleporters to areas between lanes (one in each quadrant). Total of 6 teleporters. Old teleport exit location changed to a connection to the street that slopes down to Mid Added connection from the underground teleport station to the outer lane Guardian (previously a juke spot) Added steam tunnel connection from Amber Blue Guardian and Sapphire Orange Guardian to Mid (one-way) Each trooper you shoot at will now consider you a higher priority than Guardians/Walkers; that trooper will stop shooting the Guardians/Walkers and consider you its target for a few seconds Walker laser DPS vs troopers increased from 150 to 190 Parrying a Guardian attack will no longer cause the Guardian to be stunned When Shrines are destroyed the Patron gets more aggressive, moves faster, and does more damage Weakened Patron HP regen increased from 80 to 120 Weakened Patron out of combat delay reduced from 30s to 20s Rejuv bonus reduced from 75% to 50% respawn time reduction Mid Boss health gained per minute increased from 350 to 425 Urn now gives the team that is behind +2 more sprint when carrying it Bullet damage falloff now maxes out at ~60m instead of ~65m Movement Powerup: Stamina regen increased from 20% to 30% Movement Powerup: Sprint speed increased from +2 to +3 Movement Powerup: Zipline bonus increased from 30% to 50% Gun Powerup: Ammo increased from +30% to +40% Powerup durations increased from 150s to 160s Reworked the climb-up exit from the Cosmic Veil space on the outer lanes Moved kiosk cover prop in the outer lanes to space out trooper paths Moved delivery truck out from the street curb near the underground shop Moved breakable idols from the street level juke spots to other locations Removed the tree in front of the Walkers on Amber Orange and Sapphire Blue Replaced some trees on the Amber side with steam vents Moved barrel cover barrier to block the Guardian shop opening on Amber Purple and Sapphire Yellow Raised the sign on the roof of the garage Removed the smoke wall from the end of the alleys Hollow Point Ward: Bonus damage reduced from 25% to 20% Added a new T3 Weapon Item, Pristine Emblem: Gives +25% Weapon Damage, +12 Spirit Power, and +12% Spirit Armor. When an enemy is above 50% HP, you deal an additional +25% Weapon Damage. Health Nova: Bonus HP increased from +50 to +75 Superior Stamina: Fire Rate reduced from 15% to 10% Silence Glyph: Spirit Shield increased from 150 to 225 Torment: Now has a regular cooldown that is reduced by cooldown reduction Abrams Fixed Shoulder Charge not stunning the target when colliding with Kelvin's Ice Dome Fixed some cases where Shoulder Charge did not stun when hitting a wall Fixed enemies being able to double jump out of Seismic Impact Shoulder Charge T3 reduced from +6.5 to +5.5 Weapon Damage Seismic Impact damage reduced from 200 to 175 Bebop Bullet Resistance growth per boon increased from 2% to 2.5% Sticky Bomb now prioritizes enemies over allies Hyper Beam duration now scales with Spirit (0.08) Hyper Beam spirit scaling increased from 2.2 to 2.4 Dynamo Kinetic Pulse width increased from 4m to 4.5m Kinetic Pulse recharge time reduced from 6s to 5s Rejuvenating Aurora regen Spirit Power scaling increased from 0.4 to 0.5 Grey Talon Charged Shot collision size reduced by 10% Guided Owl explosion radius increased from 10m to 12m Guided Owl cooldown reduced from 120s to 110s Haze Bullet damage falloff is now 20% more falloff than default Can now cast Smoke Bomb while on zipline Infernus Fixed Infernus being unable to slide out of Flame Dash Afterburn T1 and T2 Swapped Afterburn base DPS reduced from 18 to 15 Afterburn T3 DPS reduced from 33 to 30 Afterburn spirit scaling increased from 0.4 to 0.5 Kelvin Fixed Arctic Beam not having proper lag compensation Fixed some cases where Frost Grenade would explode and not hit anyone Arctic Beam can now be canceled directly by using parry Frost Grenade cast time reduced from 0.2s to 0.1s Frost Grenade recharge time reduced from 8s to 7s Ice Path sprint is now granted immediately on use Lady Geist Base sprint reduced from 2 to 1 Lash Base sprint reduced from 3 to 1 Ground Strike Damage Per Meter reduced from 6.3 to 6.0 McGinnis Mini Turrets no longer target immune structures Heavy Barrage cast/aim behavior improved for indoors and close range Reverted recent melee damage reduction Fixed Health Nova not working on Mini Turrets (when Health Nova was cast by McGinnis) Mini Turret base HP increased from +50 to +75 Mo & Krill Can now reload while burrowed Paradox Kinetic Carbine Time Slowed targets that were moving before the time slow will now resume their momentum when time slow wears off Bullet (and Kinetic Carbine) projectile speed reduced by 10% Ammo count reduced from 54 to 45 Pocket Affliction damage is dealt over 18s instead of 16s (same total damage, lower DPS) Enchanter's Satchel T3 changed from Disarms for 2.5s to Applies -40% Fire Rate for 4s Seven Static Charge stun duration reduced from 1.25s to 1.1s Static Charge T3 stun duration reduced from 1.25s to 1.1s Static Charge T2 radius increased from +5m to +7m Headshot damage taken reduced by 25% Vindicta Flight cooldown reduced from 45 to 40 Gun damage growth increased from 0.85 to 1.0 Wraith Card Trick post cast time reduced from 0.5s to 0.2s Fixed some issues Card Trick tracking that could cause it to orb players or go to the wrong spot Yamato Power Slash collision size reduced by 10% Bullet damage growth increased from 0.4 to 0.5 Monster Rounds HP Bonus increased from +50 to +65 Rapid Rounds HP Penalty increased from -40 HP to -50 HP Mystic Shot Base Spirit Damage reduced from +70 to +65 Berserker Damage required to earn a stack increased from 100 to 110 Kinetic Dash Now gives 1 HP regen Slowing Bullets Weapon Damage increased from 14% to 16% Hunter's Aura No longer grants +16% Ammo Now grants +150 Health Point Blank Bullet Shield increased from 250 to 300 Weapon Damage increased from 40% to 45% Titanic Magazine Now gives +8% Bullet resistance Heroic Aura Bonus Health increased from +125 to +150 Intensifying Magazine Fixed a bug that allowed you to gain weapon damage without firing Ricochet Bonus Health increased from 100 to 125 Now gives +8% Fire Rate Glass Cannon Weapon Damage increased from 70% to 75% Silencer Cooldown increased from 25s to 34s Siphon Bullets Weapon damage is no longer conditional on 15m, now always gives +40% Weapon Damage (previously gave +45% when close) Spiritual Overflow Now grants +10% Spirit Lifesteal Extra Regen Regen increased from 2.5 to 2.7 Melee Lifesteal Bonus health increased from +50 to +70 Restorative Locket When consuming at max stacks, replenishes target's stamina fully Return Fire Bullet Damage returned increased from 70% to 80% Bonus HP increased from +100 to +125 Divine Barrier Cast range increased from 30m to 35m Now grants +1.5 HP Regen Reactive Barrier Now grants +75 HP Rescue Beam Pull speed is now 25% faster Now grants +2 Sprint Bonus HP increased from +100 to +125 Metal Skin Duration increased from 3s to 3.5s Lifestrike Bullet Resist increased from 6% to 8% Veil Walker Bullet and Spirit Shields increased from 185 to 200 Cooldown reduced from 20s to 18s Weapon Damage increased from 6% to 10% Colossus Bonus HP increased from 500 to 600 Soul Rebirth Cooldown reduction increased from 10% to 15% Phantom Strike Cast range increased from 30m to 35m Inhibitor Debuff duration increased from 2s to 2.5s Leech Now provides +30% Degen Resistance (reduces anti heal effects by 30%) Spirit Strike Spirit Damage increased from 30 to 40 Ammo Scavenger Spirit Power duration increased from 18s to 24s Cold Front Damage reduced from 115 to 100 Spirit Power damage scaling increased from 0.98 to 1.25 Duration Extender Bonus HP increased from 75 to 100 Superior Duration Bonus HP increased from 125 to 175 Surge of Power Imbued Spirit Power increased from +24 to +26 Escalating Exposure First stack no longer does double amp value Now passively applies -12% Spirit Resist when dealing Spirit Damage Refresher Cooldown reduced from 220s to 200s Spirit Resist increased from 12% to 14% Echo Shard Bullet Resist increased from 10% to 16% Diviner's Kevlar Buff duration increased from 12s to 15s"
``

# General Changes

- Added a new hero, Viscous. He's green.
[[!:https://project8-data.community.forum/attachments/8/8606-5e65b8fab4e5d8bfec0c89803747f777.jpg?hash=iAqrn-aLP0]]((1722549138302))
- Improved client performance
- Reworked the Hero Builds system. Browsing and editing builds now happens within the Shop UI (accessible via Sandbox or during a normal game). You can create custom categories for items with unique names and descriptions that can be independently resized and positioned. The interface for browsing builds has also been improved, public builds will now be sorted by popularity (number of favorites). Old builds are incompatible with this system, so they won't be visible in this UI, but we'll have a console command we'll release soon that you can use to print out your older guides if you need them for reference.
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/dl_builds-mp4.8588/" label="dl builds" />
``
- North America (NA) servers have been moved from the west coast to closer to the middle of the country to make latency between east and west coast a little more even, as the majority of users are east coast now. The total average ping amongst all players will be lower as a result of this (a little higher for some and a lot lower for others).
- NA region testing times now start 1 hour earlier weekdays and weekends
- Minimum hero roster requirement reduced from 4 to 3
- Added Oceanic servers and matchmaking region. Testing times are displayed in the client
- Added Teleporter icons on the minimap. The icons glow when you get close to them and pulse on the teleporter's exit location to show you the destination when you are about to enter it.
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/dl_minimap_teleporter-mp4.8589/" label="dl minimap teleporter" />
``
- When using the underground tunnels, the primary minimap fades out and an underground map for that area shows you your path and the exit locations.
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/dl_minimap_tunnels-mp4.8590/" label="DL minimap tunnels" />
``
- Reworked the invite system in the client to streamline the process. Emails are no longer required, the users will now receive access directly through Steam and Discord/Forum access will be available through the client. The UI will now also group users into three categories: available to invite, already invited, and already have access. This new system will result in less invitations stuck in limbo, and any previous invites that have not already claimed the game will be granted through this system as well.
- Hero Sandbox: Added an orb spawner for practicing last-hitting orbs
- Hero Sandbox: Added a dummy hero that patrols left and right to practice targeting
- Added a checkbox on the startup development dialog to be able to choose to not show it again
- Your vision through a Cosmic Veil is now based on your hero position rather than camera position
- Adjusted Zipline camera positions for various heroes to help with visibility
- Double tap threshold increased from 0.2s to 0.3s
- Fixed Candle Troopers near-death flash sometimes occurring while moving or doing other active animations
- Candle Trooper behind-wall HUD indicator now also shows near-death state
- Fixed taking damage not interrupting teleporters
- Fixed clicking on the top bar or minimap to change spectate targets being unreliable
- Fixed Function keys (F1-F5) being broken recently and not spectating team mates
- Fixed various abilities not showing the cast preview correctly on the first use (Mini Turrets, Quantum Entanglement, etc)
- Fixed Paradox Swap sometimes putting players behind walls
- Fixed Lash's Ground Strike sometimes causing the hero to be stuck for the rest of the match
- Fixed Abrams' Charge and Siphon pings not playing the correct VO
- Fixed Walkers having a pause at the end of their Rocket Barrage
- Fixed multiple instances of "Killing Blow" in the Damage Report
- Temporarily disabled the audio reminder on being unable to damage the patron while the shrines are alive
- Fixed Spectral Wall forcing itself into the first ability slot if its cooldown is refreshed
- Changed camera to more closely track the followed hero angles when watching replays
- Player names no longer show up above hero's heads when in replay free-cam mode
- Increased post-game time by 1s
- Fixed upgrading abilities via hotkeys not working while dead
- Fixed dead player minimap icons showing over enemy players who are below street level and over shop icons
- Fixed various bugs with Infernus that caused significant lag
- Fixed Shrines not having collision
- Fixed crosshair sometimes being stuck hidden for Yamato after Flying Strike was interrupted
- Added a bunch of new Ivy lines including updated pings, kill lines, etc
- Improved mix clarity for game dialog
- Improved distinction between orb collect and orb deny sounds
- Fixed various cheat/debug commands being accessible
- Updated Pocket animations: New crouch walk and aim, updated slide animation, and new firing from slide animation.
- Updated Mo & Krill Burrow start, duration, and end sounds
- Updated Mo & Krill Combo sound
- Updated Mo & Krill Sand Blast cast sound mix
- Updated Warden Alchemical Flask impact sounds
- Updated Warden Binding Word sound mix for teammates
- Updated Pocket Enchanted Satchel cast and delay sounds
- Added sleep status sound
- Updated Wraith zipline animations
- Fixed a bug with Urn that could cause you to be permanently silenced
- Fixed shop close sounds playing whenever the player enters the radius of a closed shop
- Added new visual effects for Lash's Ground Strike
- Improved ground impact effects for Ivy's True Form
- The client now culls more sounds when they are below a volume threshold
- The server no longer tells clients to play certain sounds when players and spectators are outside of audible range
- Shortened weapons and abilities volume attenuation over distance
- Fixed the console command zoom_sensitivity_ratio affecting both zoomed in and out
- Replaced two oil trucks with a new vehicle prop
- Improved visibility of low health state on troopers about to die
- Fixed Pocket's Cloak being able to tunnel through some ceilings and out of the world
- Reworked the location of the Walker on Amber Yellow and Sapphire Purple lanes. They are a little further towards the map edges. Nearby terrain has been reworked as well.
[[!:https://project8-data.community.forum/attachments/8/8600-bec5521cea56fd07b5b4d9a10f29ec7f.jpg?hash=w44NZ_-AdQ]]((DL Yellow changes))
- The shooting experience near corners has been improved. Previously if your hero's eyes were obstructed at all, you would be unable to shoot altogether even if a large portion of your body was clearly visible. The check will now be a little more sophisticated and custom per hero, to allow you to shoot if your body is reasonably exposed. A part of this will also involve your hero leaning out a bit if not enough of your model is exposed to enemies.
- Soul Orbs now fly out in different initial directions before floating up. There is a 1/3rd chance it goes left, 1/3rd chance it goes right, and 1/3rd chance it goes up.
- Teleporters are now in pairs that send you between them to traverse the map horizontally
- Removed outer lane teleporters
- Added teleporters to areas between lanes (one in each quadrant). Total of 6 teleporters.
[[!:https://project8-data.community.forum/attachments/8/8602-b267b561ab0628e1cc782e934d30cdac.jpg?hash=ageyfsv0Wt]]((teleporter locations map))
- Old teleport exit location changed to a connection to the street that slopes down to Mid
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/mid_update-1-mp4.8594/" label="mid update (1)" />
``
- Added connection from the underground teleport station to the outer lane Guardian (previously a juke spot)
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/station_update-2-mp4.8595/" label="station update (2)" />
``
- Added steam tunnel connection from Amber Blue Guardian and Sapphire Orange Guardian to Mid (one-way)
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/mid_update_2-1-mp4.8596/" label="mid update 2 (1)" />
``
- Each trooper you shoot at will now consider you a higher priority than Guardians/Walkers; that trooper will stop shooting the Guardians/Walkers and consider you its target for a few seconds
- Walker laser DPS vs troopers increased from 150 to 190
- Parrying a Guardian attack will no longer cause the Guardian to be stunned
- When Shrines are destroyed the Patron gets more aggressive, moves faster, and does more damage
- Weakened Patron HP regen increased from 80 to 120
- Weakened Patron out of combat delay reduced from 30s to 20s
- Rejuv bonus reduced from 75% to 50% respawn time reduction
- Mid Boss health gained per minute increased from 350 to 425
- Urn now gives the team that is behind +2 more sprint when carrying it
- Bullet damage falloff now maxes out at ~60m instead of ~65m
- Movement Powerup: Stamina regen increased from 20% to 30%
- Movement Powerup: Sprint speed increased from +2 to +3
- Movement Powerup: Zipline bonus increased from 30% to 50%
- Gun Powerup: Ammo increased from +30% to +40%
- Powerup durations increased from 150s to 160s
- Reworked the climb-up exit from the Cosmic Veil space on the outer lanes
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/climb_update-1-mp4.8598/" label="climb update (1)" />
``
- Moved kiosk cover prop in the outer lanes to space out trooper paths
- Moved delivery truck out from the street curb near the underground shop
- Moved breakable idols from the street level juke spots to other locations
- Removed the tree in front of the Walkers on Amber Orange and Sapphire Blue
- Replaced some trees on the Amber side with steam vents
- Moved barrel cover barrier to block the Guardian shop opening on Amber Purple and Sapphire Yellow
- Raised the sign on the roof of the garage
- Removed the smoke wall from the end of the alleys
- Hollow Point Ward: Bonus damage reduced from 25% to 20%
- Added a new T3 Weapon Item, Pristine Emblem: Gives +25% Weapon Damage, +12 Spirit Power, and +12% Spirit Armor. When an enemy is above 50% HP, you deal an additional +25% Weapon Damage.
- Health Nova: Bonus HP increased from +50 to +75
- Superior Stamina: Fire Rate reduced from 15% to 10%
- Silence Glyph: Spirit Shield increased from 150 to 225
- Torment: Now has a regular cooldown that is reduced by cooldown reduction

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Dynamo", "Grey Talon", "Haze", "Infernus", "Kelvin", "Lady Geist", "Lash", "McGinnis", "Mo &amp; Krill", "Paradox", "Pocket", "Seven", "Vindicta", "Wraith", "Yamato"]} />
``

=hero:abrams:
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))

==ability:shoulder-charge:
[[/hero/abrams?ability=shoulder-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp]] Shoulder Charge change history))
### [[/hero/abrams?ability=shoulder-charge]]((Shoulder Charge))

- Fixed Shoulder Charge not stunning the target when colliding with Kelvin's Ice Dome
- Fixed some cases where Shoulder Charge did not stun when hitting a wall
==
==ability:seismic-impact:
[[/hero/abrams?ability=seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/hero/abrams?ability=seismic-impact]]((Seismic Impact))

- Fixed enemies being able to double jump out of Seismic Impact
==
==ability:shoulder-charge:
[[/hero/abrams?ability=shoulder-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp]] Shoulder Charge change history))
### [[/hero/abrams?ability=shoulder-charge]]((Shoulder Charge))

- Shoulder Charge T3 reduced from +6.5 to +5.5 Weapon Damage
==
==ability:seismic-impact:
[[/hero/abrams?ability=seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/hero/abrams?ability=seismic-impact]]((Seismic Impact))

- Seismic Impact damage reduced from 200 to 175
==
=
=hero:bebop:
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))

- Bullet Resistance growth per boon increased from 2% to 2.5%

==ability:sticky-bomb:
[[/hero/bebop?ability=sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/hero/bebop?ability=sticky-bomb]]((Sticky Bomb))

- Sticky Bomb now prioritizes enemies over allies
==
==ability:hyper-beam:
[[/hero/bebop?ability=hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam change history))
### [[/hero/bebop?ability=hyper-beam]]((Hyper Beam))

- Hyper Beam duration now scales with Spirit (0.08)
- Hyper Beam spirit scaling increased from 2.2 to 2.4
==
=
=hero:dynamo:
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))

==ability:kinetic-pulse:
[[/hero/dynamo?ability=kinetic-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp]] Kinetic Pulse change history))
### [[/hero/dynamo?ability=kinetic-pulse]]((Kinetic Pulse))

- Kinetic Pulse width increased from 4m to 4.5m

- Kinetic Pulse recharge time reduced from 6s to 5s
==
==ability:rejuvenating-aurora:
[[/hero/dynamo?ability=rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/hero/dynamo?ability=rejuvenating-aurora]]((Rejuvenating Aurora))

- Rejuvenating Aurora regen Spirit Power scaling increased from 0.4 to 0.5
==
=
=hero:grey-talon:
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))

==ability:charged-shot:
[[/hero/grey-talon?ability=charged-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp]] Charged Shot change history))
### [[/hero/grey-talon?ability=charged-shot]]((Charged Shot))

- Charged Shot collision size reduced by 10%
==
==ability:guided-owl:
[[/hero/grey-talon?ability=guided-owl]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp]] Guided Owl change history))
### [[/hero/grey-talon?ability=guided-owl]]((Guided Owl))

- Guided Owl explosion radius increased from 10m to 12m
- Guided Owl cooldown reduced from 120s to 110s
==
=
=hero:haze:
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))

- Bullet damage falloff is now 20% more falloff than default

==ability:smoke-bomb:
[[/hero/haze?ability=smoke-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp]] Smoke Bomb change history))
### [[/hero/haze?ability=smoke-bomb]]((Smoke Bomb))

- Can now cast Smoke Bomb while on zipline
==
=
=hero:infernus:
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))

==ability:flame-dash:
[[/hero/infernus?ability=flame-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash change history))
### [[/hero/infernus?ability=flame-dash]]((Flame Dash))

- Fixed Infernus being unable to slide out of Flame Dash
==
==ability:afterburn:
[[/hero/infernus?ability=afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/hero/infernus?ability=afterburn]]((Afterburn))

- Afterburn T1 and T2 Swapped

- Afterburn base DPS reduced from 18 to 15
- Afterburn T3 DPS reduced from 33 to 30
- Afterburn spirit scaling increased from 0.4 to 0.5
==
=
=hero:kelvin:
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))

==ability:arctic-beam:
[[/hero/kelvin?ability=arctic-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp]] Arctic Beam change history))
### [[/hero/kelvin?ability=arctic-beam]]((Arctic Beam))

- Fixed Arctic Beam not having proper lag compensation
==
==ability:frost-grenade:
[[/hero/kelvin?ability=frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/hero/kelvin?ability=frost-grenade]]((Frost Grenade))

- Fixed some cases where Frost Grenade would explode and not hit anyone
==
==ability:arctic-beam:
[[/hero/kelvin?ability=arctic-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp]] Arctic Beam change history))
### [[/hero/kelvin?ability=arctic-beam]]((Arctic Beam))

- Arctic Beam can now be canceled directly by using parry
==
==ability:frost-grenade:
[[/hero/kelvin?ability=frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/hero/kelvin?ability=frost-grenade]]((Frost Grenade))

- Frost Grenade cast time reduced from 0.2s to 0.1s
- Frost Grenade recharge time reduced from 8s to 7s
==
==ability:ice-path:
[[/hero/kelvin?ability=ice-path]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp]] Ice Path change history))
### [[/hero/kelvin?ability=ice-path]]((Ice Path))

- Ice Path sprint is now granted immediately on use
==
=
=hero:lady-geist:
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))

- Base sprint reduced from 2 to 1
=
=hero:lash:
[[/hero/lash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]] Lash patch history))
## [[/hero/lash]]((Lash))

- Base sprint reduced from 3 to 1

==ability:ground-strike-damage-per-meter:
### [[/hero/lash?ability=ground-strike]]((Ground Strike Damage Per Meter))

- Ground Strike Damage Per Meter reduced from 6.3 to 6.0
==
=
=hero:mcginnis:
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))

==ability:mini-turrets:
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turrets))

- Mini Turrets no longer target immune structures
==
==ability:heavy-barrage:
[[/hero/mcginnis?ability=heavy-barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp]] Heavy Barrage change history))
### [[/hero/mcginnis?ability=heavy-barrage]]((Heavy Barrage))

- Heavy Barrage cast/aim behavior improved for indoors and close range
==

- Reverted recent melee damage reduction

==ability:mini-turret:
[[/hero/mcginnis?ability=mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turret change history))
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turret))

- Fixed Health Nova not working on Mini Turrets (when Health Nova was cast by McGinnis)
- Mini Turret base HP increased from +50 to +75
==
=
=hero:mo-krill:
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))

==ability:can:
### Can

- Can now reload while burrowed
==
=
=hero:paradox:
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))

==ability:kinetic-carbine:
[[/hero/paradox?ability=kinetic-carbine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp]] Kinetic Carbine change history))
### [[/hero/paradox?ability=kinetic-carbine]]((Kinetic Carbine))

- Kinetic Carbine Time Slowed targets that were moving before the time slow will now resume their momentum when time slow wears off
- Bullet (and Kinetic Carbine) projectile speed reduced by 10%
==

- Ammo count reduced from 54 to 45
=
=hero:pocket:
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))

==ability:affliction:
[[/hero/pocket?ability=affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/hero/pocket?ability=affliction]]((Affliction))

- Affliction damage is dealt over 18s instead of 16s (same total damage, lower DPS)
==
==ability:enchanter-s-satchel:
[[/hero/pocket?ability=enchanters-satchel]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp]] Enchanter's Satchel change history))
### [[/hero/pocket?ability=enchanters-satchel]]((Enchanter's Satchel))

- Enchanter's Satchel T3 changed from Disarms for 2.5s to Applies -40% Fire Rate for 4s
==
=
=hero:seven:
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))

==ability:static-charge:
[[/hero/seven?ability=static-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp]] Static Charge change history))
### [[/hero/seven?ability=static-charge]]((Static Charge))

- Static Charge stun duration reduced from 1.25s to 1.1s
- Static Charge T3 stun duration reduced from 1.25s to 1.1s
- Static Charge T2 radius increased from +5m to +7m
==

- Headshot damage taken reduced by 25%
=
=hero:vindicta:
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))

==ability:flight:
[[/hero/vindicta?ability=flight]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]] Flight change history))
### [[/hero/vindicta?ability=flight]]((Flight))

- Flight cooldown reduced from 45 to 40
==

- Gun damage growth increased from 0.85 to 1.0
=
=hero:wraith:
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))

==ability:card-trick:
[[/hero/wraith?ability=card-trick]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp]] Card Trick change history))
### [[/hero/wraith?ability=card-trick]]((Card Trick))

- Card Trick post cast time reduced from 0.5s to 0.2s
- Fixed some issues Card Trick tracking that could cause it to orb players or go to the wrong spot
==
=
=hero:yamato:
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))

==ability:power-slash:
[[/hero/yamato?ability=power-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp]] Power Slash change history))
### [[/hero/yamato?ability=power-slash]]((Power Slash))

- Power Slash collision size reduced by 10%
==

- Bullet damage growth increased from 0.4 to 0.5
=
# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Ammo Scavenger", "Berserker", "Cold Front", "Colossus", "Divine Barrier", "Diviner's Kevlar", "Duration Extender", "Echo Shard", "Escalating Exposure", "Extra Regen", "Glass Cannon", "Heroic Aura", "Hunter's Aura", "Inhibitor", "Intensifying Magazine", "Kinetic Dash", "Leech", "Lifestrike", "Melee Lifesteal", "Metal Skin", "Monster Rounds", "Mystic Shot", "Phantom Strike", "Point Blank", "Rapid Rounds", "Reactive Barrier", "Refresher", "Rescue Beam", "Restorative Locket", "Return Fire", "Ricochet", "Silencer", "Siphon Bullets", "Slowing Bullets", "Soul Rebirth", "Spirit Strike", "Spiritual Overflow", "Superior Duration", "Surge of Power", "Titanic Magazine", "Veil Walker"]} />
``

=item:ammo-scavenger:
[[/item/ammo-scavenger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]] Ammo Scavenger patch history))
## [[/item/ammo-scavenger]]((Ammo Scavenger))

- Spirit Power duration increased from 18s to 24s
=
=item:berserker:
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))

- Damage required to earn a stack increased from 100 to 110
=
=item:cold-front:
[[/item/cold-front]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp]] Cold Front patch history))
## [[/item/cold-front]]((Cold Front))

- Damage reduced from 115 to 100
- Spirit Power damage scaling increased from 0.98 to 1.25
=
=item:colossus:
[[/item/colossus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp]] Colossus patch history))
## [[/item/colossus]]((Colossus))

- Bonus HP increased from 500 to 600
=
=item:divine-barrier:
[[/item/divine-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp]] Divine Barrier patch history))
## [[/item/divine-barrier]]((Divine Barrier))

- Cast range increased from 30m to 35m
- Now grants +1.5 HP Regen
=
=item:diviner-s-kevlar:
[[/item/diviners-kevlar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp]] Diviner's Kevlar patch history))
## [[/item/diviners-kevlar]]((Diviner's Kevlar))

- Buff duration increased from 12s to 15s
=
=item:duration-extender:
[[/item/duration-extender]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp]] Duration Extender patch history))
## [[/item/duration-extender]]((Duration Extender))

- Bonus HP increased from 75 to 100
=
=item:echo-shard:
[[/item/echo-shard]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp]] Echo Shard patch history))
## [[/item/echo-shard]]((Echo Shard))

- Bullet Resist increased from 10% to 16%
=
=item:escalating-exposure:
[[/item/escalating-exposure]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp]] Escalating Exposure patch history))
## [[/item/escalating-exposure]]((Escalating Exposure))

- First stack no longer does double amp value
- Now passively applies -12% Spirit Resist when dealing Spirit Damage
=
=item:extra-regen:
[[/item/extra-regen]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp]] Extra Regen patch history))
## [[/item/extra-regen]]((Extra Regen))

- Regen increased from 2.5 to 2.7
=
=item:glass-cannon:
[[/item/glass-cannon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp]] Glass Cannon patch history))
## [[/item/glass-cannon]]((Glass Cannon))

- Weapon Damage increased from 70% to 75%
=
=item:heroic-aura:
[[/item/heroic-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp]] Heroic Aura patch history))
## [[/item/heroic-aura]]((Heroic Aura))

- Bonus Health increased from +125 to +150
=
=item:hunter-s-aura:
[[/item/hunters-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp]] Hunter's Aura patch history))
## [[/item/hunters-aura]]((Hunter's Aura))

- No longer grants +16% Ammo
- Now grants +150 Health
=
=item:inhibitor:
[[/item/inhibitor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp]] Inhibitor patch history))
## [[/item/inhibitor]]((Inhibitor))

- Debuff duration increased from 2s to 2.5s
=
=item:intensifying-magazine:
[[/item/intensifying-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp]] Intensifying Magazine patch history))
## [[/item/intensifying-magazine]]((Intensifying Magazine))

- Fixed a bug that allowed you to gain weapon damage without firing
=
=item:kinetic-dash:
[[/item/kinetic-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp]] Kinetic Dash patch history))
## [[/item/kinetic-dash]]((Kinetic Dash))

- Now gives 1 HP regen
=
=item:leech:
[[/item/leech]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp]] Leech patch history))
## [[/item/leech]]((Leech))

- Now provides +30% Degen Resistance (reduces anti heal effects by 30%)
=
=item:lifestrike:
[[/item/lifestrike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp]] Lifestrike patch history))
## [[/item/lifestrike]]((Lifestrike))

- Bullet Resist increased from 6% to 8%
=
=item:melee-lifesteal:
[[/item/melee-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp]] Melee Lifesteal patch history))
## [[/item/melee-lifesteal]]((Melee Lifesteal))

- Bonus health increased from +50 to +70
=
=item:metal-skin:
[[/item/metal-skin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp]] Metal Skin patch history))
## [[/item/metal-skin]]((Metal Skin))

- Duration increased from 3s to 3.5s
=
=item:monster-rounds:
[[/item/monster-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp]] Monster Rounds patch history))
## [[/item/monster-rounds]]((Monster Rounds))

- HP Bonus increased from +50 to +65
=
=item:mystic-shot:
[[/item/mystic-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp]] Mystic Shot patch history))
## [[/item/mystic-shot]]((Mystic Shot))

- Base Spirit Damage reduced from +70 to +65
=
=item:phantom-strike:
[[/item/phantom-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp]] Phantom Strike patch history))
## [[/item/phantom-strike]]((Phantom Strike))

- Cast range increased from 30m to 35m
=
=item:point-blank:
[[/item/point-blank]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp]] Point Blank patch history))
## [[/item/point-blank]]((Point Blank))

- Bullet Shield increased from 250 to 300
- Weapon Damage increased from 40% to 45%
=
=item:rapid-rounds:
[[/item/rapid-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp]] Rapid Rounds patch history))
## [[/item/rapid-rounds]]((Rapid Rounds))

- HP Penalty increased from -40 HP to -50 HP
=
=item:reactive-barrier:
[[/item/reactive-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier patch history))
## [[/item/reactive-barrier]]((Reactive Barrier))

- Now grants +75 HP
=
=item:refresher:
[[/item/refresher]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp]] Refresher patch history))
## [[/item/refresher]]((Refresher))

- Cooldown reduced from 220s to 200s
- Spirit Resist increased from 12% to 14%
=
=item:rescue-beam:
[[/item/rescue-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp]] Rescue Beam patch history))
## [[/item/rescue-beam]]((Rescue Beam))

- Pull speed is now 25% faster
- Now grants +2 Sprint
- Bonus HP increased from +100 to +125
=
=item:restorative-locket:
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))

- When consuming at max stacks, replenishes target's stamina fully
=
=item:return-fire:
[[/item/return-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp]] Return Fire patch history))
## [[/item/return-fire]]((Return Fire))

- Bullet Damage returned increased from 70% to 80%
- Bonus HP increased from +100 to +125
=
=item:ricochet:
[[/item/ricochet]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp]] Ricochet patch history))
## [[/item/ricochet]]((Ricochet))

- Bonus Health increased from 100 to 125
- Now gives +8% Fire Rate
=
=item:silencer:
[[/item/silencer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]] Silencer patch history))
## [[/item/silencer]]((Silencer))

- Cooldown increased from 25s to 34s
=
=item:siphon-bullets:
[[/item/siphon-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]] Siphon Bullets patch history))
## [[/item/siphon-bullets]]((Siphon Bullets))

- Weapon damage is no longer conditional on 15m, now always gives +40% Weapon Damage (previously gave +45% when close)
=
=item:slowing-bullets:
[[/item/slowing-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp]] Slowing Bullets patch history))
## [[/item/slowing-bullets]]((Slowing Bullets))

- Weapon Damage increased from 14% to 16%
=
=item:soul-rebirth:
[[/item/soul-rebirth]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp]] Soul Rebirth patch history))
## [[/item/soul-rebirth]]((Soul Rebirth))

- Cooldown reduction increased from 10% to 15%
=
=item:spirit-strike:
[[/item/spirit-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp]] Spirit Strike patch history))
## [[/item/spirit-strike]]((Spirit Strike))

- Spirit Damage increased from 30 to 40
=
=item:spiritual-overflow:
[[/item/spiritual-overflow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp]] Spiritual Overflow patch history))
## [[/item/spiritual-overflow]]((Spiritual Overflow))

- Now grants +10% Spirit Lifesteal
=
=item:superior-duration:
[[/item/superior-duration]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp]] Superior Duration patch history))
## [[/item/superior-duration]]((Superior Duration))

- Bonus HP increased from 125 to 175
=
=item:surge-of-power:
[[/item/surge-of-power]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp]] Surge of Power patch history))
## [[/item/surge-of-power]]((Surge of Power))

- Imbued Spirit Power increased from +24 to +26
=
=item:titanic-magazine:
[[/item/titanic-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp]] Titanic Magazine patch history))
## [[/item/titanic-magazine]]((Titanic Magazine))

- Now gives +8% Bullet resistance
=
=item:veil-walker:
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))

- Bullet and Spirit Shields increased from 185 to 200
- Cooldown reduced from 20s to 18s
- Weapon Damage increased from 6% to 10%
=