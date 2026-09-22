``attr:
title "10-24-2024 Update"
thread_id "40951"
steam_gid "6212245217911837451"
published "2024-10-24T12:39:08-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Added 6 new heroes to Hero Labs, a new experimental hero matchmaking mode. The heroes are Holliday, Calico, Wrecker, Fathom, Viper and Magician (temp names). The goal of this mode is to invite players to help us in giving hero design feedback while heroes are in very early phases. Most heroes in this mode will have placeholder models, names, effects, etc (some exceptions are older in-dev heroes that had more developed art). They will also sometimes have placeholder/copy-paste abilities for certain slots if that ability slot is still TBD (such as Magician ultimate). There will be a specific hero labs section on the forum to post feedback on these. Heroes in this mode will often be removed, abilities changed, new heroes added, removed heroes re-added, etc. Patch notes for changes to heroes in this mode will be posted on the Hero Labs subforum. This mode will have limited testing hours for now while we gauge activity, in order to ensure faster queue times. You must have at least 50 games played to be able to queue here. If you don't get a new hero selected (since there are less new heroes than there are players), you will be considered higher priority for subsequent matches to get a new hero from your roster selection. Added Commends. You can commend players you've enjoyed playing with during the game or in the post-game scoreboard (same places you would report).  The number of commends you've received on each hero will be displayed in your profile. Added new character shader to improve player visibility in all areas of the map and experiment with more stylized rendering of character models Updated environment lighting and sky Added sequential kill streak music cues Added keybinds for \"Fly Up\" and \"Fly Down\".  Used for flying abilities like Ivy's Air Drop and Vindicta's Flight Fixed being unable to report/mute disconnected players You can now drag and drop build categories to move them around Added quick-selection for favorite builds. Clicking on the name of your currently active build in the shop will bring up a dropdown that lets you switch between favorited builds for that hero without opening the build browser. Added indication of game mode within match history Added Rank badge to matches on the Watch page Added Rank History tab to profile, currently only visible for yourself. You can click on previous ranks to view the Rank Report summary for that interval Flash Windows Taskbar icon if the game window isn't in focus and you have 3 seconds until you respawn Fixed issue in several languages where team net worth number shrunk to an unreadable size Fixed Urns sometimes appearing to stay in the world after being picked up Fixed jittering from Lash's gun firing while running and aiming (this should reduce screen noise significantly in this case) Lash melee animation updates Added Melee Resistance to Vitality stat screen Lowered pitch of Haze voice processing Added teleporter channel and appear sounds Added Healing Rite end sound Added Mystic Shot proc sound Added Magic Carpet cast, cast delay, loop, and end sounds Updated Slowing Hex projectile loop, hit, and debuff sounds Yamato's Flying Strike now stops tracking targets that teleport Shiv's Killing Blow now stops tracking targets that teleport McGinnis melee animation updates Fixing hitting ESC to close to intro movie also closing the ranked summary popup Fixed pregame countdown drawing over the shop UI Pocket climb animation adjustments Mirage Traveler now previews Mirage's model at destination to show facing direction Lady Geist Life Drain revisions to show start of effect better but reduce noise afterwards Silenced debuff revisions to reduce obstructed vision of player Infernus Afterburn: debuff vfx reduced opacity after start to reduce noise Mirage Djinn's Mark: damage vfx revision to reduce visual noise, debuff moved to overhead UI Mirage gun revisions to tracer, muzzle flash, and impacts Shiv Dagger: reduced size of stuck dagger in victim Unstoppable vfx has a more obvious start Lady Geist Malice: revisions to reduce vfx noise and obstructions Lady Geist Malice: reduced brightness of vfx for players close to it Shiv Slice and Dice: reduced vfx noise for players close to it Ivy Kudzu Bomb effects properly display visuals when above ground Lash Flog: new effects Play a sound when a debuff is applied to player but is purged due to some invulnerability Fixed instances where mix ducking occurs too early in a sound event's lifetime Fixed audio occlusion filtering artifacts during high rates of change Enabled certain music cues like 'respawn' to interrupt base attack music Denied orb sound will no longer play beyond 2500 game units from the player Reduced visual noise of Wraith's tracers when close up or when Wraith has a high fire rate Increased intelligibility of team-specific hero death sound Abandoning Co-op bot matches with more than one party now brings up the Abandon Match confirmation warning instead of leaving immediately Added looping telegraph for Seven Static Charge ability Added victim-specific sound for Static Charge the moment it is applied Bots are better at coming together to defend and push lanes Bots will prioritize assisting human allies on offense Reduced visual noise of Seven's tracers, especially when close up or when Seven has a high fire rate Added a \"Mouse Sensitivity: Vertical Scaling\" setting Added a \"Reset Camera\" bind (available in Steam Input) Fixed Steam Input \"Melee\" Action not resetting the camera vertically Added new Steam Input Analog Action: \"Aim\". This uses Angle-based sensitivity options in Steam Input (work-in-progress feature). Fixed Steam Input aiming no longer being affected by Mouse Sensitivity options (including Invert Y) Fixed a bug where the last controller plugged in would block actions from other controllers. Now multiple controllers can be combined. AP is no longer granted for Walkers Shrine/Patron no longer have Soul/AP bounties Shrine Flex Slot moved to \"All Shrines\" Missing AP from above is redistributed along souls reward line at similar soul levels that the objectives previously died on average Trooper Soul Orbs now have a 90ms buffer to allow the server to do better calculations on who shot the orb first, to minimize latency advantages for denying Trooper soul changed from 50/50% in the kill/orb to 60/40% Breakables spawn time increased from 2 minutes to 3 minutes Breakables Souls reduced from 35 + 3/min to 30 + 2.5/min Urn comeback properties now require an 8% net worth lead to kick in Urn pickup locations are the same as before, however now the drop-off locations will be variable based on which team is leading. If there isn't a lead over 8% net worth, then the drop-off location is the same as before. If there is, then the drop-off location will be closer to the losing team's side. The minimap will show where the drop-off location is as usual, as well as an indicator in the world that helps show you where it is. If the Urn hasn't been delivered within 90 seconds of pickup time, it now drains your health for 1% of Max HP per second (the timer is per team). Your regen is disabled during this. Whenever the Urn is dropped after 90 seconds of pickup time, it starts moving back to its spawn point immediately and cannot be picked up by the same team for 12 seconds. Increased speed Urn walks back Guardian attack range requirement changed from 20m to requiring you are above the ramp on high ground Guardian resist vs troopers changed from starting at 70% and ending at -30% at 10 min to starting at 60% and ending at -35% at 8 minutes Guardians now have resist vs players starting at 40% and ending at -35% at 8 minutes Walkers now have resist vs troopers starting at 60% and ending at -30% at 14 minutes Walkers now have resist vs players starting at 60% and ending at -30% at 14 minutes Troopers now gain +40% Spirit Resist gradually over 25 minutes, goes to 70% at 50 minutes Backdoor protection detection range for troopers increased (harder to kill troopers approaching the objectives with long range spells to stall making the game think you are backdooring when you aren't) Backdoor protection removal now has a 20s buffer (so it doesn't go into protection mode immediately once creeps die) Mid Boss respawn timer decreases with subsequent boss kills, from 7 to 7/6/5 minutes The 70s respawn time now happens at 30 min instead of 35 min There is now a respawn curve that goes from 70s to 75s over 30->40 minutes Base Guardians and Shrines no longer have out-of-combat regen Parry active window increased from 0.7 to 0.75 Parry cooldown reduced from 5s to 4.5s Medic Trooper heal now has 2 charges; time between casts is 6s [does not consume a charge when healing other troopers, mainly affects waves pushing on their own] Medic Trooper heal cooldown increased from 6s to 35s Sinner's Sacrifice now shares souls of subsequent hits with everyone that hit it recently (rather than the bigger value from last hit only going to one player) Redesigned stairs from central canal to the outer lanes (near Urn spawn) Added a skybridge with interior from the Subway Entrance buildings into the Port Authority and Speakeasy buildings Connection hallways behind the Chapel and Firehouse now has an option to continue inside to the Walker arenas Added a Bounce Pad from these connection hallways to the front of the overpass Neutral camps beside Amber Purple and Sapphire Yellow Walker arenas moved from the ground floor to the upper floor Redesigned traversal from ground floor to upper floor of the Garage and Night Club to get to the Sinner's Sacrifice neutrals Replaced fire escape stairs with ropes on the exterior of the Garage and Night Club Added more zipline nodes to outer lanes High-Velocity Mag: Bullet Velocity reduced from 25% to 20% High-Velocity Mag: Bullet Shield Health increased from 50 to 65 High-Velocity Mag: Weapon damage increased from 12% to 13% Superior Stamina: Spirit Power increased from 8 to 12 Mystic Reach: Ability Range reduced from 18% to 15% Mystic Reach: Bullet Resist increased from 6% to 7% Improved Cooldown: Now grants +75 Spirit Shield Withering Whip: Projectile speed increased by 30% Cold Front now does double damage to NPC units Improved Reach: Non-Imbued Ability Range increased from 25% to 26% Improved Reach: Bullet Resist increased from 12% to 13% Improved Burst: Max HP Damage increased from 7% to 9% Improved Burst: Threshold damage increased from 125 to 200 Infernus reduced darkness of players affected by Catalyst debuff reduced brightness and lingering of Concussive Combustion effects reduced visual noise of tracers and firerate increases Afterburn T1 reduced from 30% to 25% Viscous cleaner effect for viscous alt-fire Bullet damage reduced from 12 to 11 Bullet damage growth per boon increased from 0.86 to 0.9 (total from 24.04 to 23.6) The Cube T2 moved to T3 The Cube T2 is now +35 HP regen Splatter T2 reduced from +60 Damage to +50 Goo Ball Spirit Resist reduced from 70% to 60% Abrams Melee attack rate reduced by 15% (time between attacks) Gun falloff damage starts at 20m instead of 22m Fixed some cases where Shoulder Charge would do a 180/360 on spell cast Fixed Shoulder Charge sliding against wall surfaces incorrectly Fixed Seismic Impact sometimes getting stuck on objects Bebop Bullet damage growth increased from 0.29 to 0.33 No longer gains 1% Bullet Resist per boon Now gains 1% Spirit Resist per boon Sticky Bomb now loses 20% of your stacks on death (rounds up) Hook now returns troopers 75% faster than normal Grey Talon Base regen increased from 2 to 2.5 Gun spirit scaling increased from 0.1 to 0.13 Movespeed now scales with Spirit Power again Rain of Arrows strafe speed with stamina increased by 30% Ivy Base bullet damage increased from 4.5 to 5 Bullet damage growth reduced from 0.39 to 0.36 Air Drop slow reduced from 35% to 30% Kelvin Arctic Beam slow reduced from 50% to 40% Frost Grenade T2 heal reduced from 145 to 125 Fixed Frozen Shelter not freezing weakened patron Lady Geist Malice slow reduced from 20% to 15% Malice debuff duration reduced from 13s to 9s Malice Damage Amp reduced from 15% to 8% Malice T2 now also increases damage amp by 7% Malice no longer causes you to un-zoom on cast McGinnis Gun spin decay rate improved from 0.65 to 0.25 Mini Turrets cooldown reduced from 24s to 18s Mini Turrets spirit resist increased from 60% to 80% Spectral Wall slow reduced from 25% to 20% Spectral Wall T1 damage amp reduced from 25% to 15% Heavy Barrage minimum range increased from 6m to 7m Heavy Barrage cooldown increased from 106s to 140s Heavy Barrage T2 cooldown improved from -47s to -50s Heavy Barrage T1 slow reduced from 35% to 30% Mirage Fire Scarabs T3 max health steal increased from +70 to +80 Djinn's Mark T3 cooldown between multipliers improved from -0.5s to -0.75s Traveler Fire Rate increased from 20% to 30% Traveler T2 cooldown reduction improved from -30s to -40s Traveler T3 now grants Unstoppable for 3s on arrival Mo & Krill Now has 20% Headshot Crit reduction Burrow bullet and spirit resist now persist while spinning out of the burrow Paradox Pulse Grenade pulses are now expressed as a duration rather than a fixed pulse count (works with Duration Extender) Pulse Grenade T1 changed from +1 Pulse to +0.8s Duration Pulse Grenade T2 improved from -7.5s to -8s Kinetic Carbine T2 improved from -9.5s Cooldown to -10s Kinetic Carbine shots cannot miss due to evasion Kinetic Carbine can now pierce breakables Kinetic Carbine now does 15% more damage on a headshot Kinetic Carbine sound level reduced a little bit Seven Lightning Ball cooldown increased from 23s to 26s Lightning Ball radius reduced from 4m to 3.5m Lightning Ball T2 slow reduced from 40% to 35% Movespeed reduced from 7.3 to 7.1 Storm Cloud expand time reduced from 3s to 2s Storm Cloud range increased from 25m to 30m Shiv Base speed reduced from 7.3 to 7.0 Serrated Knives collision radius reduced by 20% Bloodletting cooldown increased from 21s to 50s Bloodletting T2 cd increased from -4.75s to -25s (final cd changed from 16.25s to 25s) Bloodletting duration increased from 10s to 13s Bloodletting Incoming Damage Deferred reduced from 30% to 22% Bloodletting T1 changed to +8% Incoming Damage Deferred (was +5s duration) Killing Blow range reduced from 20m to 13m Killing Blow Rage buildup per heavy melee reduced from 3.5 to 2.75 Killing Blow Rage buffer duration reduced from 10s to 9s Killing Blow Rage buildup vs creeps reduced by 50% Vindicta Gun cycle time improved from 0.26s to 0.22s Bullet damage growth per boon increased from 0.55 to 0.65 Fire rate now scales with Spirit Power (0.14) Assassinate no longer splits to allies Flight duration increased from 8s to 12s Flight T2 duration increased from +6s to +8s Assassinate bullet radius increased from 3\" to 4\" Assassinate scope is now automatically canceled when Paradoxical Swap hits you Warden Alchemical Flask slow duration reduced from 6s to 3s Alchemical Flask weapon damage duration increased from 6s to 7s Binding Word escape time reduced from 2.9s to 2.8s Binding Word escape range increased from 18.5m to 19m Last Stand T3 now also grants you unstoppable during the 2s channel Wraith Card Trick base damage reduced from 80 to 70 Card Trick cooldown increased from 0.5s to 0.65s Telekinesis cooldown increased from 95s to 100s Telekinesis T1 cooldown improved from -28s to -30s Yamato Fixed being able to cast an ability while casting Flying Strike Fixed Crimson Slash following in the direction of dash instead of cross hair Shadow Transformation T1 changed to +20% Fire Rate Shadow Transformation Cooldown reduced from 106s to 90s Rescue Beam fixed some visual bugs on the effects Pull speed reduced by 20% Sprint reduced from +2 to +1 Knockdown updated effect animation to alert when it will stun Ammo Scavenger proc sound only plays when applying a stack Duration increased from 30s to 35s Restorative Shot Weapon Damage reduced from 7% to 6% Cooldown increased from 5.5s to 6s Rapid Rounds Fire Rate increased from 9% to 10% Monster Rounds Resist vs NPCs reduced from 30% to 25% Melee Charge Weapon Damage reduced from 15% to 12% Health reduced from 100 to 75 Long Range No longer grants +25% Ammo Now has -20% Reload Time Active Reload No longer grants -20% Reload Time Now grants +18% Ammo Mystic Shot Proc cannot miss due to evasion Cooldown increased from 5.25 to 5.75 Burst Fire Now grants +20% Slow Resistance Sharpshooter No longer grants +20% Ammo Now has -20% Reload Time Tesla Bullets Proc cooldown can now be reduced by cooldown reduction Titanic Magazine Now grants +12% Spirit Resist No longer grants +18% Bullet Resist Now grants +25% Melee Damage Resistance Lucky Shot Proc now pierces evasion Vampiric Burst Health increased from 150 to 175 Extra Regen No longer grants +25 Health Extra Stamina Bonus Health increased from +25 to +35 Extra Health Now upgrades into Fortitude Enduring Speed Slow Resist reduced from 35% to 30% Reactive Barrier Ammo increased from 15% to 20% Majestic Leap Cooldown increased from 26s to 45s Getting shot while in the air disables the drop-down ability Fortitude Now upgrades from Extra Health Health increased from 325 to 365 Restore delay reduced from 11s to 10s Weapon Damage increased from 25% to 27% Veil Walker Bullet Shield increased from 200 to 250 Spirit Shield increased from 200 to 250 Soul Rebirth No longer grants +15% Cooldown Reduction Cooldown increased from 212s to 240s Siphon Bullets Max HP Steal Per Bullet increased from 50 to 55 Leech Now has 12% Cooldown Reduction No longer grants Spirit Power Phantom Strike No longer grants 15% Bullet Resist Now grants +15% Spirit Resist Unstoppable No longer grants +15% Spirit Resist Now grants +15% Bullet Resist No longer grants 1 Move Speed Colossus Slow reduced from 35% to 30% Slow radius reduced from 14m to 12m Slowing Hex Slow reduced from 25% to 20% Duration Extender Ability Duration reduced from 16% to 14% Now grants +8% Weapon Damage Bullet Resist Shredder No longer grants +5% Bullet Resist Now grants +15% Melee damage resistance Surge of Power When the passive procs, you no longer get slowed when shooting (similar to Fleetfoot) Movespeed reduced from +3 to +2 Mystic Slow Slow reduced from 30% to 25% Health bonus increased from 100 to 140 Superior Cooldown Spirit Shield increased from 100 to 150 Superior Duration Non-Imbued duration increased from 26% to 27% Imbued duration increased from 32% to 33% Ethereal Shift Active no longer grants 14 spirit power or reloads Active now grants +3 Movespeed for 5 seconds after returning Active now grants +40% Spirit Resist for 5 seconds after returning Now grants +6 Spirit Power Improved Spirit Spirit Power increased from 28 to 30 Boundless Spirit Spirit Power increased from 60 to 65 Weapon Power increased from 25% to 30% Escalating Exposure Spirit Amp Per Stack reduced from 5% to 4% Mystic Reverb Slow now only affects the primary target Spirit Lifesteal, Spirit Resist, and Ability Range reduced from 15% to 14%"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-10-19" to="2024-10-24"
  after from="2024-10-25" to="2024-10-28"
}
``

# General Changes

- Added 6 new heroes to Hero Labs, a new experimental hero matchmaking mode. The heroes are Holliday, Calico, Wrecker, Fathom, Viper and Magician (temp names). The goal of this mode is to invite players to help us in giving hero design feedback while heroes are in very early phases. Most heroes in this mode will have placeholder models, names, effects, etc (some exceptions are older in-dev heroes that had more developed art). They will also sometimes have placeholder/copy-paste abilities for certain slots if that ability slot is still TBD (such as Magician ultimate). There will be a specific hero labs section on the forum to post feedback on these. Heroes in this mode will often be removed, abilities changed, new heroes added, removed heroes re-added, etc. Patch notes for changes to heroes in this mode will be posted on the Hero Labs subforum. This mode will have limited testing hours for now while we gauge activity, in order to ensure faster queue times. You must have at least 50 games played to be able to queue here. If you don't get a new hero selected (since there are less new heroes than there are players), you will be considered higher priority for subsequent matches to get a new hero from your roster selection.
- Added Commends. You can commend players you've enjoyed playing with during the game or in the post-game scoreboard (same places you would report).  The number of commends you've received on each hero will be displayed in your profile.
- Added new character shader to improve player visibility in all areas of the map and experiment with more stylized rendering of character models
[[!:https://project8-data.community.forum/attachments/26/26043-0a7f28f92179f3eb7fa034e749847461.jpg?hash=TFfcNYdH9K]]((lighting changes))
- Updated environment lighting and sky
- Added sequential kill streak music cues
- Added keybinds for "Fly Up" and "Fly Down".  Used for flying abilities like Ivy's Air Drop and Vindicta's Flight
- Fixed being unable to report/mute disconnected players
- You can now drag and drop build categories to move them around
- Added quick-selection for favorite builds. Clicking on the name of your currently active build in the shop will bring up a dropdown that lets you switch between favorited builds for that hero without opening the build browser.
- Added indication of game mode within match history
- Added Rank badge to matches on the Watch page
- Added Rank History tab to profile, currently only visible for yourself. You can click on previous ranks to view the Rank Report summary for that interval
- Flash Windows Taskbar icon if the game window isn't in focus and you have 3 seconds until you respawn
- Fixed issue in several languages where team net worth number shrunk to an unreadable size
- Fixed Urns sometimes appearing to stay in the world after being picked up
- Fixed jittering from Lash's gun firing while running and aiming (this should reduce screen noise significantly in this case)
- Lash melee animation updates
- Added Melee Resistance to Vitality stat screen
- Lowered pitch of Haze voice processing
- Added teleporter channel and appear sounds
- Added Healing Rite end sound
- Added Mystic Shot proc sound
- Added Magic Carpet cast, cast delay, loop, and end sounds
- Updated Slowing Hex projectile loop, hit, and debuff sounds
- Yamato's Flying Strike now stops tracking targets that teleport
- Shiv's Killing Blow now stops tracking targets that teleport
- McGinnis melee animation updates
- Fixing hitting ESC to close to intro movie also closing the ranked summary popup
- Fixed pregame countdown drawing over the shop UI
- Pocket climb animation adjustments
- Mirage Traveler now previews Mirage's model at destination to show facing direction
- Lady Geist Life Drain revisions to show start of effect better but reduce noise afterwards
- Silenced debuff revisions to reduce obstructed vision of player
- Infernus Afterburn: debuff vfx reduced opacity after start to reduce noise
- Mirage Djinn's Mark: damage vfx revision to reduce visual noise, debuff moved to overhead UI
- Mirage gun revisions to tracer, muzzle flash, and impacts
- Shiv Dagger: reduced size of stuck dagger in victim
- Unstoppable vfx has a more obvious start
- Lady Geist Malice: revisions to reduce vfx noise and obstructions
- Lady Geist Malice: reduced brightness of vfx for players close to it
- Shiv Slice and Dice: reduced vfx noise for players close to it
- Ivy Kudzu Bomb effects properly display visuals when above ground
- Lash Flog: new effects
- Play a sound when a debuff is applied to player but is purged due to some invulnerability
- Fixed instances where mix ducking occurs too early in a sound event's lifetime
- Fixed audio occlusion filtering artifacts during high rates of change
- Enabled certain music cues like 'respawn' to interrupt base attack music
- Denied orb sound will no longer play beyond 2500 game units from the player
- Reduced visual noise of Wraith's tracers when close up or when Wraith has a high fire rate
- Increased intelligibility of team-specific hero death sound
- Abandoning Co-op bot matches with more than one party now brings up the Abandon Match confirmation warning instead of leaving immediately
- Added looping telegraph for Seven Static Charge ability
- Added victim-specific sound for Static Charge the moment it is applied
- Bots are better at coming together to defend and push lanes
- Bots will prioritize assisting human allies on offense
- Reduced visual noise of Seven's tracers, especially when close up or when Seven has a high fire rate
- Added a "Mouse Sensitivity: Vertical Scaling" setting
- Added a "Reset Camera" bind (available in Steam Input)
- Fixed Steam Input "Melee" Action not resetting the camera vertically
- Added new Steam Input Analog Action: "Aim". This uses Angle-based sensitivity options in Steam Input (work-in-progress feature).
- Fixed Steam Input aiming no longer being affected by Mouse Sensitivity options (including Invert Y)
- Fixed a bug where the last controller plugged in would block actions from other controllers. Now multiple controllers can be combined.
- AP is no longer granted for Walkers
- Shrine/Patron no longer have Soul/AP bounties
- Shrine Flex Slot moved to "All Shrines"
- Missing AP from above is redistributed along souls reward line at similar soul levels that the objectives previously died on average
- Trooper Soul Orbs now have a 90ms buffer to allow the server to do better calculations on who shot the orb first, to minimize latency advantages for denying
- Trooper soul changed from 50/50% in the kill/orb to 60/40%
- Breakables spawn time increased from 2 minutes to 3 minutes
- Breakables Souls reduced from 35 + 3/min to 30 + 2.5/min
- Urn comeback properties now require an 8% net worth lead to kick in
- Urn pickup locations are the same as before, however now the drop-off locations will be variable based on which team is leading. If there isn't a lead over 8% net worth, then the drop-off location is the same as before. If there is, then the drop-off location will be closer to the losing team's side. The minimap will show where the drop-off location is as usual, as well as an indicator in the world that helps show you where it is.
[[!:https://project8-data.community.forum/attachments/26/26029-316e26e32d5d9c28711b7b32c47c9ec2.jpg?hash=Bcy1Su9gev]]((urn 01))
[[!:https://project8-data.community.forum/attachments/26/26030-66b9044d013d7baf5a1aa5a85be4cda7.jpg?hash=kSgwnPOjDr]]((urn 02))
[[!:https://project8-data.community.forum/attachments/26/26031-964938f678db211578e57da87f872680.jpg?hash=u8rCtcD0c_]]((urn 03))
- If the Urn hasn't been delivered within 90 seconds of pickup time, it now drains your health for 1% of Max HP per second (the timer is per team). Your regen is disabled during this.
- Whenever the Urn is dropped after 90 seconds of pickup time, it starts moving back to its spawn point immediately and cannot be picked up by the same team for 12 seconds.
- Increased speed Urn walks back
- Guardian attack range requirement changed from 20m to requiring you are above the ramp on high ground
- Guardian resist vs troopers changed from starting at 70% and ending at -30% at 10 min to starting at 60% and ending at -35% at 8 minutes
- Guardians now have resist vs players starting at 40% and ending at -35% at 8 minutes
- Walkers now have resist vs troopers starting at 60% and ending at -30% at 14 minutes
- Walkers now have resist vs players starting at 60% and ending at -30% at 14 minutes
- Troopers now gain +40% Spirit Resist gradually over 25 minutes, goes to 70% at 50 minutes
- Backdoor protection detection range for troopers increased (harder to kill troopers approaching the objectives with long range spells to stall making the game think you are backdooring when you aren't)
- Backdoor protection removal now has a 20s buffer (so it doesn't go into protection mode immediately once creeps die)
- Mid Boss respawn timer decreases with subsequent boss kills, from 7 to 7/6/5 minutes
- The 70s respawn time now happens at 30 min instead of 35 min
- There is now a respawn curve that goes from 70s to 75s over 30->40 minutes
- Base Guardians and Shrines no longer have out-of-combat regen
- Parry active window increased from 0.7 to 0.75
- Parry cooldown reduced from 5s to 4.5s
- Medic Trooper heal now has 2 charges; time between casts is 6s [does not consume a charge when healing other troopers, mainly affects waves pushing on their own]
- Medic Trooper heal cooldown increased from 6s to 35s
- Sinner's Sacrifice now shares souls of subsequent hits with everyone that hit it recently (rather than the bigger value from last hit only going to one player)
- Redesigned stairs from central canal to the outer lanes (near Urn spawn)
- Added a skybridge with interior from the Subway Entrance buildings into the Port Authority and Speakeasy buildings
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/canal_update_102424-mp4.26017/" label="canal update 102424" />
``
[[!:https://project8-data.community.forum/attachments/26/26034-dadcc55de196610454a06ffd805d0234.jpg?hash=a48dE8_vh4]]((canal))
- Connection hallways behind the Chapel and Firehouse now has an option to continue inside to the Walker arenas
- Added a Bounce Pad from these connection hallways to the front of the overpass
- Neutral camps beside Amber Purple and Sapphire Yellow Walker arenas moved from the ground floor to the upper floor
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/purple_update_102424-mp4.26019/" label="purple update 102424" />
``
[[!:https://project8-data.community.forum/attachments/26/26036-93a05dca9721d8ccbea072fb616bb646.jpg?hash=A8rfo7fvQ4]]((outer lane connection 102424))
- Redesigned traversal from ground floor to upper floor of the Garage and Night Club to get to the Sinner's Sacrifice neutrals
- Replaced fire escape stairs with ropes on the exterior of the Garage and Night Club
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/garage_nightclub_102424-mp4.26021/" label="garage nightclub 102424" />
``
- Added more zipline nodes to outer lanes
- High-Velocity Mag: Bullet Velocity reduced from 25% to 20%
- High-Velocity Mag: Bullet Shield Health increased from 50 to 65
- High-Velocity Mag: Weapon damage increased from 12% to 13%
- Superior Stamina: Spirit Power increased from 8 to 12
- Mystic Reach: Ability Range reduced from 18% to 15%
- Mystic Reach: Bullet Resist increased from 6% to 7%
- Improved Cooldown: Now grants +75 Spirit Shield
- Withering Whip: Projectile speed increased by 30%
- Cold Front now does double damage to NPC units
- Improved Reach: Non-Imbued Ability Range increased from 25% to 26%
- Improved Reach: Bullet Resist increased from 12% to 13%
- Improved Burst: Max HP Damage increased from 7% to 9%
- Improved Burst: Threshold damage increased from 125 to 200

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Grey Talon", "Infernus", "Ivy", "Kelvin", "Lady Geist", "McGinnis", "Mirage", "Mo &amp; Krill", "Paradox", "Seven", "Shiv", "Vindicta", "Viscous", "Warden", "Wraith", "Yamato"]} />
``

=hero:abrams:
``attr:
impact closed=#true {
  all {
    before win=0.5471 pick=0.5444 matches=78453 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5527 pick=0.5336 matches=36234 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))
- Melee attack rate reduced by 15% (time between attacks)
- Gun falloff damage starts at 20m instead of 22m
==ability:shoulder-charge:
[[/ability/shoulder-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp]] Shoulder Charge change history))
### [[/ability/shoulder-charge]]((Shoulder Charge))
- Fixed some cases where Shoulder Charge would do a 180/360 on spell cast
- Fixed Shoulder Charge sliding against wall surfaces incorrectly
==
==ability:seismic-impact:
[[/ability/seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/ability/seismic-impact]]((Seismic Impact))
- Fixed Seismic Impact sometimes getting stuck on objects
==
=

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.4809 pick=0.6099 matches=87897 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4735 pick=0.5059 matches=34353 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
- Bullet damage growth increased from 0.29 to 0.33
- No longer gains 1% Bullet Resist per boon
- Now gains 1% Spirit Resist per boon
==ability:sticky-bomb:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/ability/sticky-bomb]]((Sticky Bomb))
- Sticky Bomb now loses 20% of your stacks on death (rounds up)
==
==ability:hook:
[[/ability/grapple-arm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp]] Hook change history))
### [[/ability/grapple-arm]]((Hook))
- Hook now returns troopers 75% faster than normal
==
=

=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.4465 pick=0.467 matches=67299 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5019 pick=0.6898 matches=46838 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
- Base regen increased from 2 to 2.5
- Gun spirit scaling increased from 0.1 to 0.13
- Movespeed now scales with Spirit Power again
==ability:rain-of-arrows:
[[/ability/rain-of-arrows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp]] Rain of Arrows change history))
### [[/ability/rain-of-arrows]]((Rain of Arrows))
- Rain of Arrows strafe speed with stamina increased by 30%
==
=

=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=0.5022 pick=0.8602 matches=123964 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4966 pick=0.8462 matches=57458 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
==ability:napalm:
[[/ability/napalm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp]] Napalm change history))
### [[/ability/napalm]]((Napalm))
- reduced darkness of players affected by Catalyst debuff
==
==ability:concussive-combustion:
[[/ability/concussive-combustion]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp]] Concussive Combustion change history))
### [[/ability/concussive-combustion]]((Concussive Combustion))
- reduced brightness and lingering of Concussive Combustion effects
- reduced visual noise of tracers and firerate increases
==
==ability:afterburn:
[[/ability/afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/ability/afterburn]]((Afterburn))
- Afterburn T1 reduced from 30% to 25%
==
=

=hero:ivy:
``attr:
impact closed=#true {
  all {
    before win=0.5177 pick=0.4056 matches=58456 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5123 pick=0.4209 matches=28576 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))
- Base bullet damage increased from 4.5 to 5
- Bullet damage growth reduced from 0.39 to 0.36
==ability:air-drop:
[[/ability/air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/ability/air-drop]]((Air Drop))
- Air Drop slow reduced from 35% to 30%
==
=

=hero:kelvin:
``attr:
impact closed=#true {
  all {
    before win=0.4884 pick=0.3402 matches=49027 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4763 pick=0.3099 matches=21043 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))
==ability:arctic-beam:
[[/ability/arctic-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp]] Arctic Beam change history))
### [[/ability/arctic-beam]]((Arctic Beam))
- Arctic Beam slow reduced from 50% to 40%
==
==ability:frost-grenade:
[[/ability/frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/ability/frost-grenade]]((Frost Grenade))
- Frost Grenade T2 heal reduced from 145 to 125
==
==ability:frozen-shelter:
[[/ability/frozen-shelter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp]] Frozen Shelter change history))
### [[/ability/frozen-shelter]]((Frozen Shelter))
- Fixed Frozen Shelter not freezing weakened patron
==
=

=hero:lady-geist:
``attr:
impact closed=#true {
  all {
    before win=0.5253 pick=0.632 matches=91085 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4964 pick=0.5546 matches=37660 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))
==ability:malice:
[[/ability/malice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp]] Malice change history))
### [[/ability/malice]]((Malice))
- Malice slow reduced from 20% to 15%
- Malice debuff duration reduced from 13s to 9s
==
==ability:malice-damage-amp:
[[/ability/malice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp]] Malice Damage Amp change history))
### [[/ability/malice]]((Malice Damage Amp))
- Malice Damage Amp reduced from 15% to 8%
==
==ability:malice:
[[/ability/malice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp]] Malice change history))
### [[/ability/malice]]((Malice))
- Malice T2 now also increases damage amp by 7%
- Malice no longer causes you to un-zoom on cast
==
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.5147 pick=0.5971 matches=86049 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5494 pick=0.5837 matches=39634 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
- Gun spin decay rate improved from 0.65 to 0.25
==ability:mini-turrets:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turrets change history))
### [[/ability/mini-turret]]((Mini Turrets))
- Mini Turrets cooldown reduced from 24s to 18s
- Mini Turrets spirit resist increased from 60% to 80%
==
==ability:spectral-wall:
[[/ability/spectral-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp]] Spectral Wall change history))
### [[/ability/spectral-wall]]((Spectral Wall))
- Spectral Wall slow reduced from 25% to 20%
- Spectral Wall T1 damage amp reduced from 25% to 15%
==
==ability:heavy-barrage:
[[/ability/heavy-barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp]] Heavy Barrage change history))
### [[/ability/heavy-barrage]]((Heavy Barrage))
- Heavy Barrage minimum range increased from 6m to 7m
- Heavy Barrage cooldown increased from 106s to 140s
- Heavy Barrage T2 cooldown improved from -47s to -50s
- Heavy Barrage T1 slow reduced from 35% to 30%
==
=

=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.4923 pick=0.3917 matches=56448 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5099 pick=0.5384 matches=36560 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))
==ability:fire-scarabs:
[[/ability/fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/ability/fire-scarabs]]((Fire Scarabs))
- Fire Scarabs T3 max health steal increased from +70 to +80
==
==ability:djinn-s-mark:
[[/ability/djinns-mark]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp]] Djinn's Mark change history))
### [[/ability/djinns-mark]]((Djinn's Mark))
- Djinn's Mark T3 cooldown between multipliers improved from -0.5s to -0.75s
==
==ability:traveler-fire-rate:
[[/ability/traveler]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp]] Traveler Fire Rate change history))
### [[/ability/traveler]]((Traveler Fire Rate))
- Traveler Fire Rate increased from 20% to 30%
==
==ability:traveler:
[[/ability/traveler]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp]] Traveler change history))
### [[/ability/traveler]]((Traveler))
- Traveler T2 cooldown reduction improved from -30s to -40s
- Traveler T3 now grants Unstoppable for 3s on arrival
==
=

=hero:mo-krill:
``attr:
impact closed=#true {
  all {
    before win=0.5065 pick=0.3855 matches=55562 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5222 pick=0.4383 matches=29757 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))
- Now has 20% Headshot Crit reduction
==ability:burrow:
[[/ability/burrow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp]] Burrow change history))
### [[/ability/burrow]]((Burrow))
- Burrow bullet and spirit resist now persist while spinning out of the burrow
==
=

=hero:paradox:
``attr:
impact closed=#true {
  all {
    before win=0.4608 pick=0.3971 matches=57226 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4855 pick=0.573 matches=38907 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))
==ability:pulse-grenade:
[[/ability/pulse-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp]] Pulse Grenade change history))
### [[/ability/pulse-grenade]]((Pulse Grenade))
- Pulse Grenade pulses are now expressed as a duration rather than a fixed pulse count (works with Duration Extender)
- Pulse Grenade T1 changed from +1 Pulse to +0.8s Duration
- Pulse Grenade T2 improved from -7.5s to -8s
==
==ability:kinetic-carbine:
[[/ability/kinetic-carbine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp]] Kinetic Carbine change history))
### [[/ability/kinetic-carbine]]((Kinetic Carbine))
- Kinetic Carbine T2 improved from -9.5s Cooldown to -10s
- Kinetic Carbine shots cannot miss due to evasion
- Kinetic Carbine can now pierce breakables
- Kinetic Carbine now does 15% more damage on a headshot
- Kinetic Carbine sound level reduced a little bit
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.5382 pick=0.8958 matches=129089 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4956 pick=0.7392 matches=50189 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:lightning-ball:
[[/ability/lightning-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp]] Lightning Ball change history))
### [[/ability/lightning-ball]]((Lightning Ball))
- Lightning Ball cooldown increased from 23s to 26s
- Lightning Ball radius reduced from 4m to 3.5m
- Lightning Ball T2 slow reduced from 40% to 35%
==
- Movespeed reduced from 7.3 to 7.1
==ability:storm-cloud:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/ability/storm-cloud]]((Storm Cloud))
- Storm Cloud expand time reduced from 3s to 2s
- Storm Cloud range increased from 25m to 30m
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.5152 pick=0.6607 matches=95215 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4511 pick=0.3868 matches=26265 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
- Base speed reduced from 7.3 to 7.0
==ability:serrated-knives:
[[/ability/serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives change history))
### [[/ability/serrated-knives]]((Serrated Knives))
- Serrated Knives collision radius reduced by 20%
==
==ability:bloodletting:
[[/ability/bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting change history))
### [[/ability/bloodletting]]((Bloodletting))
- Bloodletting cooldown increased from 21s to 50s
- Bloodletting T2 cd increased from -4.75s to -25s (final cd changed from 16.25s to 25s)
- Bloodletting duration increased from 10s to 13s
==
==ability:bloodletting-incoming-damage-deferred:
[[/ability/bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting Incoming Damage Deferred change history))
### [[/ability/bloodletting]]((Bloodletting Incoming Damage Deferred))
- Bloodletting Incoming Damage Deferred reduced from 30% to 22%
==
==ability:bloodletting:
[[/ability/bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting change history))
### [[/ability/bloodletting]]((Bloodletting))
- Bloodletting T1 changed to +8% Incoming Damage Deferred (was +5s duration)
==
==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))
- Killing Blow range reduced from 20m to 13m
- Killing Blow Rage buildup per heavy melee reduced from 3.5 to 2.75
- Killing Blow Rage buffer duration reduced from 10s to 9s
- Killing Blow Rage buildup vs creeps reduced by 50%
==
=

=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.4499 pick=0.5185 matches=74715 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4766 pick=0.7133 matches=48430 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
- Gun cycle time improved from 0.26s to 0.22s
- Bullet damage growth per boon increased from 0.55 to 0.65
- Fire rate now scales with Spirit Power (0.14)
==ability:assassinate:
[[/ability/assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/ability/assassinate]]((Assassinate))
- Assassinate no longer splits to allies
==
==ability:flight:
[[/ability/flight]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]] Flight change history))
### [[/ability/flight]]((Flight))
- Flight duration increased from 8s to 12s
- Flight T2 duration increased from +6s to +8s
==
==ability:assassinate:
[[/ability/assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/ability/assassinate]]((Assassinate))
- Assassinate bullet radius increased from 3" to 4"
- Assassinate scope is now automatically canceled when Paradoxical Swap hits you
==
=

=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=0.4848 pick=0.3487 matches=50247 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4603 pick=0.3055 matches=20740 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))
- cleaner effect for viscous alt-fire
- Bullet damage reduced from 12 to 11
- Bullet damage growth per boon increased from 0.86 to 0.9 (total from 24.04 to 23.6)
==ability:the-cube:
[[/ability/the-cube]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp]] The Cube change history))
### [[/ability/the-cube]]((The Cube))
- The Cube T2 moved to T3
- The Cube T2 is now +35 HP regen
==
==ability:splatter:
[[/ability/splatter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp]] Splatter change history))
### [[/ability/splatter]]((Splatter))
- Splatter T2 reduced from +60 Damage to +50
==
==ability:goo-ball-spirit-resist:
[[/ability/goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball Spirit Resist change history))
### [[/ability/goo-ball]]((Goo Ball Spirit Resist))
- Goo Ball Spirit Resist reduced from 70% to 60%
==
=

=hero:warden:
``attr:
impact closed=#true {
  all {
    before win=0.5242 pick=0.4664 matches=67221 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5247 pick=0.4625 matches=31401 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))
==ability:alchemical-flask:
[[/ability/alchemical-flask]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp]] Alchemical Flask change history))
### [[/ability/alchemical-flask]]((Alchemical Flask))
- Alchemical Flask slow duration reduced from 6s to 3s
- Alchemical Flask weapon damage duration increased from 6s to 7s
==
==ability:binding-word:
[[/ability/binding-word]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp]] Binding Word change history))
### [[/ability/binding-word]]((Binding Word))
- Binding Word escape time reduced from 2.9s to 2.8s
- Binding Word escape range increased from 18.5m to 19m
==
==ability:last-stand:
[[/ability/last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/ability/last-stand]]((Last Stand))
- Last Stand T3 now also grants you unstoppable during the 2s channel
==
=

=hero:wraith:
``attr:
impact closed=#true {
  all {
    before win=0.4887 pick=0.8197 matches=118123 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4926 pick=0.7656 matches=51982 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))
==ability:card-trick:
[[/ability/card-trick]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp]] Card Trick change history))
### [[/ability/card-trick]]((Card Trick))
- Card Trick base damage reduced from 80 to 70
- Card Trick cooldown increased from 0.5s to 0.65s
==
==ability:telekinesis:
[[/ability/telekinesis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp]] Telekinesis change history))
### [[/ability/telekinesis]]((Telekinesis))
- Telekinesis cooldown increased from 95s to 100s
- Telekinesis T1 cooldown improved from -28s to -30s
==
=

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.4687 pick=0.3953 matches=56968 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4755 pick=0.3836 matches=26045 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
==ability:flying-slash:
[[/ability/flying-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp]] Flying Slash change history))
### [[/ability/flying-slash]]((Flying Slash))
- Fixed being able to cast an ability while casting Flying Strike
==
==ability:crimson-slash:
[[/ability/crimson-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp]] Crimson Slash change history))
### [[/ability/crimson-slash]]((Crimson Slash))
- Fixed Crimson Slash following in the direction of dash instead of cross hair
==
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))
- Shadow Transformation T1 changed to +20% Fire Rate
==
==ability:shadow-transformation-cooldown:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation Cooldown change history))
### [[/ability/shadow-transformation]]((Shadow Transformation Cooldown))
- Shadow Transformation Cooldown reduced from 106s to 90s
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Active Reload", "Ammo Scavenger", "Boundless Spirit", "Bullet Resist Shredder", "Burst Fire", "Colossus", "Duration Extender", "Enduring Speed", "Escalating Exposure", "Ethereal Shift", "Extra Health", "Extra Regen", "Extra Stamina", "Fortitude", "Improved Spirit", "Knockdown", "Leech", "Long Range", "Lucky Shot", "Majestic Leap", "Melee Charge", "Monster Rounds", "Mystic Reverb", "Mystic Shot", "Mystic Slow", "Phantom Strike", "Rapid Rounds", "Reactive Barrier", "Rescue Beam", "Restorative Shot", "Sharpshooter", "Siphon Bullets", "Slowing Hex", "Soul Rebirth", "Superior Cooldown", "Superior Duration", "Surge of Power", "Tesla Bullets", "Titanic Magazine", "Unstoppable", "Vampiric Burst", "Veil Walker"]} />
``

=item:active-reload:
``attr:
impact closed=#true {
  all {
    before win=0.4963 pick=0.0647 matches=111934 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.505 pick=0.075 matches=61128 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/active-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp]] Active Reload patch history))
## [[/item/active-reload]]((Active Reload))
- No longer grants -20% Reload Time
- Now grants +18% Ammo
=

=item:ammo-scavenger:
[[/item/ammo-scavenger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]] Ammo Scavenger patch history))
## [[/item/ammo-scavenger]]((Ammo Scavenger))
- proc sound only plays when applying a stack
- Duration increased from 30s to 35s
=

=item:boundless-spirit:
[[/item/boundless-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp]] Boundless Spirit patch history))
## [[/item/boundless-spirit]]((Boundless Spirit))
- Spirit Power increased from 60 to 65
- Weapon Power increased from 25% to 30%
=

=item:bullet-resist-shredder:
``attr:
impact closed=#true {
  all {
    before win=0.515 pick=0.2256 matches=390220 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.52 pick=0.2519 matches=205277 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/bullet-resist-shredder]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp]] Bullet Resist Shredder patch history))
## [[/item/bullet-resist-shredder]]((Bullet Resist Shredder))
- No longer grants +5% Bullet Resist
- Now grants +15% Melee damage resistance
=

=item:burst-fire:
``attr:
impact closed=#true {
  all {
    before win=0.5174 pick=0.1268 matches=219275 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5231 pick=0.1565 matches=127521 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/burst-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp]] Burst Fire patch history))
## [[/item/burst-fire]]((Burst Fire))
- Now grants +20% Slow Resistance
=

=item:colossus:
``attr:
impact closed=#true {
  all {
    before win=0.5781 pick=0.0253 matches=43825 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5655 pick=0.0175 matches=14224 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/colossus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp]] Colossus patch history))
## [[/item/colossus]]((Colossus))
- Slow reduced from 35% to 30%
- Slow radius reduced from 14m to 12m
=

=item:duration-extender:
``attr:
impact closed=#true {
  all {
    before win=0.5237 pick=0.2379 matches=411347 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5205 pick=0.2476 matches=201748 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/duration-extender]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp]] Duration Extender patch history))
## [[/item/duration-extender]]((Duration Extender))
- Ability Duration reduced from 16% to 14%
- Now grants +8% Weapon Damage
=

=item:enduring-speed:
``attr:
impact closed=#true {
  all {
    before win=0.5144 pick=0.5747 matches=993897 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5096 pick=0.5592 matches=455643 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/enduring-speed]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp]] Enduring Speed patch history))
## [[/item/enduring-speed]]((Enduring Speed))
- Slow Resist reduced from 35% to 30%
=

=item:escalating-exposure:
``attr:
impact closed=#true {
  all {
    before win=0.5545 pick=0.1755 matches=303441 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5256 pick=0.1123 matches=91537 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/escalating-exposure]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp]] Escalating Exposure patch history))
## [[/item/escalating-exposure]]((Escalating Exposure))
- Spirit Amp Per Stack reduced from 5% to 4%
=

=item:ethereal-shift:
``attr:
impact closed=#true {
  all {
    before win=0.4869 pick=0.0206 matches=35648 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4953 pick=0.024 matches=19591 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/ethereal-shift]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp]] Ethereal Shift patch history))
## [[/item/ethereal-shift]]((Ethereal Shift))
- Active no longer grants 14 spirit power or reloads
- Active now grants +3 Movespeed for 5 seconds after returning
- Active now grants +40% Spirit Resist for 5 seconds after returning
- Now grants +6 Spirit Power
=

=item:extra-health:
``attr:
impact closed=#true {
  all {
    before win=0.4888 pick=0.1369 matches=236712 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5003 pick=0.2246 matches=183028 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/extra-health]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp]] Extra Health patch history))
## [[/item/extra-health]]((Extra Health))
- Now upgrades into Fortitude
=

=item:extra-regen:
``attr:
impact closed=#true {
  all {
    before win=0.5002 pick=0.3923 matches=678346 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4981 pick=0.3986 matches=324737 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/extra-regen]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp]] Extra Regen patch history))
## [[/item/extra-regen]]((Extra Regen))
- No longer grants +25 Health
=

=item:extra-stamina:
``attr:
impact closed=#true {
  all {
    before win=0.4992 pick=0.4224 matches=730448 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5055 pick=0.4504 matches=366992 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/extra-stamina]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp]] Extra Stamina patch history))
## [[/item/extra-stamina]]((Extra Stamina))
- Bonus Health increased from +25 to +35
=

=item:fortitude:
``attr:
impact closed=#true {
  all {
    before win=0.5105 pick=0.0741 matches=128127 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5174 pick=0.116 matches=94483 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/fortitude]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp]] Fortitude patch history))
## [[/item/fortitude]]((Fortitude))
- Now upgrades from Extra Health
- Health increased from 325 to 365
- Restore delay reduced from 11s to 10s
- Weapon Damage increased from 25% to 27%
=

=item:improved-spirit:
``attr:
impact closed=#true {
  all {
    before win=0.5016 pick=0.3021 matches=522442 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4928 pick=0.2838 matches=231243 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/improved-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp]] Improved Spirit patch history))
## [[/item/improved-spirit]]((Improved Spirit))
- Spirit Power increased from 28 to 30
=

=item:knockdown:
``attr:
impact closed=#true {
  all {
    before win=0.4877 pick=0.0254 matches=43866 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4899 pick=0.0433 matches=35261 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))
- updated effect animation to alert when it will stun
=

=item:leech:
``attr:
impact closed=#true {
  all {
    before win=0.5612 pick=0.199 matches=344125 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5431 pick=0.1371 matches=111721 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/leech]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp]] Leech patch history))
## [[/item/leech]]((Leech))
- Now has 12% Cooldown Reduction
- No longer grants Spirit Power
=

=item:long-range:
``attr:
impact closed=#true {
  all {
    before win=0.4564 pick=0.0823 matches=142338 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4911 pick=0.1108 matches=90242 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/long-range]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp]] Long Range patch history))
## [[/item/long-range]]((Long Range))
- No longer grants +25% Ammo
- Now has -20% Reload Time
=

=item:lucky-shot:
``attr:
impact closed=#true {
  all {
    before win=0.57 pick=0.0917 matches=158579 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5681 pick=0.0938 matches=76441 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/lucky-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp]] Lucky Shot patch history))
## [[/item/lucky-shot]]((Lucky Shot))
- Proc now pierces evasion
=

=item:majestic-leap:
``attr:
impact closed=#true {
  all {
    before win=0.5063 pick=0.0868 matches=150033 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5008 pick=0.0709 matches=57743 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))
- Cooldown increased from 26s to 45s
- Getting shot while in the air disables the drop-down ability
=

=item:melee-charge:
``attr:
impact closed=#true {
  all {
    before win=0.5321 pick=0.0876 matches=151576 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5308 pick=0.0788 matches=64180 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/melee-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp]] Melee Charge patch history))
## [[/item/melee-charge]]((Melee Charge))
- Weapon Damage reduced from 15% to 12%
- Health reduced from 100 to 75
=

=item:monster-rounds:
``attr:
impact closed=#true {
  all {
    before win=0.5107 pick=0.2527 matches=437081 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5072 pick=0.2395 matches=195114 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/monster-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp]] Monster Rounds patch history))
## [[/item/monster-rounds]]((Monster Rounds))
- Resist vs NPCs reduced from 30% to 25%
=

=item:mystic-reverb:
[[/item/mystic-reverb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp]] Mystic Reverb patch history))
## [[/item/mystic-reverb]]((Mystic Reverb))
- Slow now only affects the primary target
- Spirit Lifesteal, Spirit Resist, and Ability Range reduced from 15% to 14%
=

=item:mystic-shot:
``attr:
impact closed=#true {
  all {
    before win=0.4889 pick=0.2426 matches=419582 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4918 pick=0.2558 matches=208398 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/mystic-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp]] Mystic Shot patch history))
## [[/item/mystic-shot]]((Mystic Shot))
- Proc cannot miss due to evasion
- Cooldown increased from 5.25 to 5.75
=

=item:mystic-slow:
``attr:
impact closed=#true {
  all {
    before win=0.5356 pick=0.1231 matches=212847 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5219 pick=0.0962 matches=78382 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/mystic-slow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp]] Mystic Slow patch history))
## [[/item/mystic-slow]]((Mystic Slow))
- Slow reduced from 30% to 25%
- Health bonus increased from 100 to 140
=

=item:phantom-strike:
``attr:
impact closed=#true {
  all {
    before win=0.5629 pick=0.0148 matches=25543 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5577 pick=0.014 matches=11442 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/phantom-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp]] Phantom Strike patch history))
## [[/item/phantom-strike]]((Phantom Strike))
- No longer grants 15% Bullet Resist
- Now grants +15% Spirit Resist
=

=item:rapid-rounds:
``attr:
impact closed=#true {
  all {
    before win=0.5008 pick=0.1498 matches=259114 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5036 pick=0.1607 matches=130959 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/rapid-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp]] Rapid Rounds patch history))
## [[/item/rapid-rounds]]((Rapid Rounds))
- Fire Rate increased from 9% to 10%
=

=item:reactive-barrier:
``attr:
impact closed=#true {
  all {
    before win=0.4805 pick=0.0505 matches=87365 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4875 pick=0.046 matches=37461 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/reactive-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier patch history))
## [[/item/reactive-barrier]]((Reactive Barrier))
- Ammo increased from 15% to 20%
=

=item:rescue-beam:
``attr:
impact closed=#true {
  all {
    before win=0.5313 pick=0.0138 matches=23828 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5181 pick=0.0184 matches=15018 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/rescue-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp]] Rescue Beam patch history))
## [[/item/rescue-beam]]((Rescue Beam))
- fixed some visual bugs on the effects
- Pull speed reduced by 20%
- Sprint reduced from +2 to +1
=

=item:restorative-shot:
``attr:
impact closed=#true {
  all {
    before win=0.5045 pick=0.1911 matches=330434 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.495 pick=0.1822 matches=148447 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))
- Weapon Damage reduced from 7% to 6%
- Cooldown increased from 5.5s to 6s
=

=item:sharpshooter:
``attr:
impact closed=#true {
  all {
    before win=0.4567 pick=0.0602 matches=104057 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4833 pick=0.0761 matches=62008 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/sharpshooter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp]] Sharpshooter patch history))
## [[/item/sharpshooter]]((Sharpshooter))
- No longer grants +20% Ammo
- Now has -20% Reload Time
=

=item:siphon-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.5486 pick=0.0238 matches=41127 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.545 pick=0.0231 matches=18838 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/siphon-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]] Siphon Bullets patch history))
## [[/item/siphon-bullets]]((Siphon Bullets))
- Max HP Steal Per Bullet increased from 50 to 55
=

=item:slowing-hex:
``attr:
impact closed=#true {
  all {
    before win=0.5126 pick=0.0658 matches=113788 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5168 pick=0.0883 matches=71953 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/slowing-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp]] Slowing Hex patch history))
## [[/item/slowing-hex]]((Slowing Hex))
- Slow reduced from 25% to 20%
=

=item:soul-rebirth:
[[/item/soul-rebirth]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp]] Soul Rebirth patch history))
## [[/item/soul-rebirth]]((Soul Rebirth))
- No longer grants +15% Cooldown Reduction
- Cooldown increased from 212s to 240s
=

=item:superior-cooldown:
``attr:
impact closed=#true {
  all {
    before win=0.512 pick=0.3387 matches=585684 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.4992 pick=0.2876 matches=234304 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/superior-cooldown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp]] Superior Cooldown patch history))
## [[/item/superior-cooldown]]((Superior Cooldown))
- Spirit Shield increased from 100 to 150
=

=item:superior-duration:
``attr:
impact closed=#true {
  all {
    before win=0.5305 pick=0.1547 matches=267615 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5143 pick=0.1316 matches=107234 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/superior-duration]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp]] Superior Duration patch history))
## [[/item/superior-duration]]((Superior Duration))
- Non-Imbued duration increased from 26% to 27%
- Imbued duration increased from 32% to 33%
=

=item:surge-of-power:
``attr:
impact closed=#true {
  all {
    before win=0.5201 pick=0.1724 matches=298166 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5078 pick=0.159 matches=129563 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/surge-of-power]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp]] Surge of Power patch history))
## [[/item/surge-of-power]]((Surge of Power))
- When the passive procs, you no longer get slowed when shooting (similar to Fleetfoot)
- Movespeed reduced from +3 to +2
=

=item:tesla-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.5073 pick=0.1077 matches=186188 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5064 pick=0.1083 matches=88267 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/tesla-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp]] Tesla Bullets patch history))
## [[/item/tesla-bullets]]((Tesla Bullets))
- Proc cooldown can now be reduced by cooldown reduction
=

=item:titanic-magazine:
``attr:
impact closed=#true {
  all {
    before win=0.501 pick=0.1321 matches=228395 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5035 pick=0.1289 matches=105053 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/titanic-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp]] Titanic Magazine patch history))
## [[/item/titanic-magazine]]((Titanic Magazine))
- Now grants +12% Spirit Resist
- No longer grants +18% Bullet Resist
- Now grants +25% Melee Damage Resistance
=

=item:unstoppable:
``attr:
impact closed=#true {
  all {
    before win=0.5775 pick=0.048 matches=83020 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5699 pick=0.0421 matches=34328 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/unstoppable]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp]] Unstoppable patch history))
## [[/item/unstoppable]]((Unstoppable))
- No longer grants +15% Spirit Resist
- Now grants +15% Bullet Resist
- No longer grants 1 Move Speed
=

=item:vampiric-burst:
``attr:
impact closed=#true {
  all {
    before win=0.582 pick=0.0249 matches=42988 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5704 pick=0.0237 matches=19330 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/vampiric-burst]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp]] Vampiric Burst patch history))
## [[/item/vampiric-burst]]((Vampiric Burst))
- Health increased from 150 to 175
=

=item:veil-walker:
``attr:
impact closed=#true {
  all {
    before win=0.4974 pick=0.0323 matches=55899 days=5 total=1729344 covered=5 coverage="complete"
    after win=0.5079 pick=0.033 matches=26905 days=3 total=814788 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))
- Bullet Shield increased from 200 to 250
- Spirit Shield increased from 200 to 250
=