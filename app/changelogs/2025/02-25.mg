``meta:
title "Map Rework Update"
thread_id "56683"
steam_gid "1792116353369036"
published "2025-02-25T21:49:19.000Z"
author "Daniel Jennings"
category "patch"
major_update #false
status "draft"
content_text "The map has been redesigned around being 3 lanes rather than 4. This has a large range of accompanying map-wide changes regarding visuals, building layouts, pathways, neutral camps, air vents, breakables, powerup buffs, juke spots, mid boss, etc. Added a new feature called \"Explore Map\" where you can run around an empty city to test movement and navigation. You can find this under the 'Play' menu. Troopers no longer need to be last hit by a player in order to generate souls, as long as you are nearby. Troopers no longer have the \"near death\" flashing behavior. Soul Orb lifetime in the air reduced significantly. Soul Orb denies changed from 65/35% to 50/50%. Soul Orb physical radius increased by 10%. Reduced horizontal movement of soul orbs from troopers. Gaining souls from kills now shows a visual effect of souls flying towards you. Default sprint speed increased from 0.5 to 1.0. Sprint disable duration reduced from 5s to 4s when dealing/taking damage with heroes. Sprint disable duration reduced from 5s to 0.5s when dealing/taking damage with non-heroes. Sinner's Sacrifice no longer grants a random Golden Statue buff. Sinner's Sacrifice now has a looping timing window where if you kill it with a Heavy Melee (there are visual and audio cues), you will receive 3 Golden Statue buffs.  Alternatively, a last hit with Light Melee will only give 1 Golden Statue Buff. Added support for DLSS as an FSR2 alternative for temporal anti aliasing and upscaling. Requires an NVIDIA 2x-class GPU or above. For Vulkan users, upgraded FSR2 to AMD's new FSR3 temporal upscaler for sharper and more temporally stable output. Enabled NVIDIA Reflex and AMD Anti-Lag 2.0 for reduced latency. Client performance improvements. Bicubic filtering for lightmaps at higher shadow quality settings. Improve how we preload units to prevent shader compilation during gameplay. Hero shader improvements. Various netcode improvements Increased tick rate from 60hz to 64hz to improve the precision of certain game calculations. Improved client reporting to prevent incorrect prediction offsets to the server. Improved accuracy of server lag compensation to prevent bullets from reporting false hit detection against enemies further in the past. Improved timing of server lag compensation to engage during the first phase of bullet creation which previously could have resulted in bullets originating from different positions on the server and client. Improved accuracy of Soul Orb hitboxes to ensure they are in the correct position during client bullet prediction. Improved various close range abilities having casting errors (Sticky Bomb, Soul Exchange, Combo, etc). Increased post-laning trooper bounty to match the previous 4 lane global economy. Changed flex slot requirements: 1st flex slot changed from 3 Guardians down to 2 Guardians. 2nd flex slot changed from 2 Walkers down to 1 Walker. The last 2 flex slots are unchanged. Small Neutral Camp respawn time reduced from 4 minutes to 3 minutes. Mid Neutral Camp respawn time reduced from 6 minutes to 5 minutes. Neutrals soul values reduced by 10% (overall camp count and frequency has been increased). Side Walkers HP increased from 5,175 to 7,000. Mid Walkers HP increased from 8,000 to 9,000. Mid Boss HP and HP growth increased by 30%. Outer Zipline speed increased by 15%. Breakable soul values reduced by 5%. All juke spots now have veils (the dead end closets with the mystery man infront). Gun Powerup min/max Fire Rate increased from 10/30% to 15/35%. Fixed Gun Powerup not scaling Ammo to 60% as intended. Added a new Mid Boss Rejuvenator Symbol with three visual states (not spawned, under 1 min from spawn, and spawned). The new large amount of breakables in the mid boss middle area now initially spawn at the same time as mid boss. Superior Stamina: No longer gives 7% fire rate. Now visualizes the amount of damage reduced by resistances or shields. Incoming Damage UI now visualizes general damage reduction and amplification. Now shows the number of instances of damage done by each ability. Damage Report no longer clears immediately upon respawn, but instead will keep the data from your previous life with an added \"(Last Life)\" label. Breaking secondary stats out in the client Damage Report. (i.e. Shiv Serrated Knives now shows damage from initial hit and damage-over-time). Defaulting damage report to compact mode when you initially take damage. A variety of UI bugfixes and polish changes. Added the ability to right click on the header of a build category to add all items in that category to your Quickbuy queue. Quickbuy's default behavior is going back to showing purchase prompts when the item is actually purchased. A settings option has been added to show purchase prompts when the item is queued. Fixed a bug where you could queue an item that was a component of an item you already own. Fixed several bugs that caused items to be skipped when purchasing items with the Auto Buy option enabled. Fixed a bug where purchasing an item would clear the item search box in the shop. Fixed Steam profanity filter not being consistently applied to user-authored text in builds (names, descriptions, annotations). You can now create builds on the dashboard. You can now create ability builds by clicking on the ability icons in the skill build area (which is the only way you can do it on the dashboard) in addition to skilling them up in sandbox mode (where both work). Fixed a bug where dragging and dropping items while editing a build would remove the annotation from the item. Reworking default builds to assume items are bought in specified order. Updated Hero default builds. Added Suggested AP path for Haze, Paradox, Shiv, and Yamato. Ziplines are now curved. If a player abandons a match before the 5 minute mark, the game will now bring up a green hud message: \"This game will not be scored. It is now safe to leave.\" If the abandon occurs after 5 minutes, the hud message will be: \"This match can be abandoned without a penalty, but leaving will result in a loss.\". Updated the Heavy Melee vfx. Gun audio system updates attempt to balance powerful feel with ear fatigue more skillfully, also added some experiments for early reflection acoustics in weapon reports. Updated regular damage and headshot damage sounds; damage dealt to NPCs is now quieter. Players no longer collide with Bosses to prevent some unintended interactions. Crouch toggle now ends on a failed dash. Added positional tier 1 Guardian death sounds. Added sounds for tier 1 Guardian melee swing, melee slam, and melee hit. Added sounds for tier 1 Guardian activate from idle and deactivate to idle animations. Added positional Walker death sounds. Added sounds for Walker beam attack. Added sounds for Walker stomp attack. Added sounds for Walker rocket barrage attack. Adjusted what counts as a headshot when shooting through non-head hitboxes. Reduce duration of buff effect for gaining Ability Points. Button hints now update when changing keybinds during a match. Made bots better at purchasing and upgrading items. Made bots better at not getting stuck in walls. Adding row indicator if you're on the global leaderboards. Also auto scroll to your position on the global leaderboards. Taskbar icon only flashes once when you're about to respawn. The Walker's area buff now shows up on the hud's active stats section. Adding support for pinging Ability 1-4 to be \"almost ready\" with supporting vo. Hooking up generic \"Item is Ready\", \"Item is almost Ready\", and \"Item is on cooldown\" vo. Added missing unique death vo sounds for: Fathom, Trapper, Wrecker, Raven, Sinclair, and Wraith. Updated voice lines for having many souls to trigger at 6k, instead of 6.2k. Base attack music now starts immediately when an enemy enters the local player's base (previously only when damage was dealt to an objective). Damage audio does not play loudly if the player's health is not changing. Elevated ability hit confirmation sounds in the mix. Players can no longer shoot or reload their weapon while climbing a rope. Mix updates to deprioritize NPC, currency, and other sounds in base. Protections added to low audio frequencies from building up and clouding the mix. Updated volume for Paradox and Viscous' Select/Unselect lines increased to match the rest of the roster. So as not to create unintended situations where you give away your position while hiding from combat the \"you can't hide from me\" vo lines now only play for the speaker. At the beginning of a match certain heroes will now chat with each other as they ride to battle.  If a hero does not have a recorded conversation the patron will speak to them as they did previously. Minor vo bug fixes that address things like missing ability lines, wrong names being called out in pings, etc. Ping Update: Pre-match, if you press the ping button your hero will play a random taunt.  Not every hero has these lines yet. Ping Update: Certain heroes now have several new options that can be added to the ping wheel including \"Come with me\", \"Rejuv's Dropping\", \"Cover Me\", \"Nevermind\", \"Press The Advantage\", \"Not Ready To Teamfight\", \"Let's Hide Here\", \"it's Dangerous Here\", \"I'll Clear The Troopers\", \"Let's Meet Here\", and \"I'll Flank 'Em\". Ping Update: The Green lane is now alternatively referred to as \"Park\" instead of \"Greenwich\". Added an effect for when you break bridge Powerups. Sprint effects revisions to reduce noise. Window materials now feature imposter interiors and improved glass reflection. Added new signage to the world. Added new railing smartprop to the world. Added new oracle building model. Added new buildings for the city backdrop. Added under construction suspension bridge to yellow lane. Improved blending of character and world shadows. Improved lighting on city backdrop. Added Bull/Bear statues to the jungle lane street for landmark callouts. Ability Point effects revisions to reduce lingering noise. Powerup spawner gained effects revisions to reduce lingering noise. Zipline speed effect revisions. Stunned debuff effect revisions. Update last hit effects so that it reflects what is shown in the UI. Changed minimum bot difficulty for some heroes. Added chimes and bird sounds behind park gate. Added looping sound to jump pads in the world. Added neutral camp spawn sound. Added permanent powerup spawn sound. Added a global spawn sound for bridge buffs. Changed all language around 'Hero Sandbox' to 'Hero Testing'. Moved Private and Co-op bots to be bucketed under a single \"Play Bot Match\" button that splits into private vs co-op via selection modal. Added a News Post popup panel to the main menu. Added a link to Patch Notes to the main menu. Commends are now right-aligned. Enemy commends now auto-dismiss after a short duration. Fixed both \"Leave Match\" and \"Leave Spectating\" showing when you hit Esc while watching a match. Fixed a bug where abilities showed their imbued item multiple times. Adding Status Effect Panels next to healthbar and in the bottom left to display certain modifier icons in these areas. You can hover them to see what the status effect is. Adding Rejuvenator icon in the bottom left next to healthbar when you have the Rejuvenator. Adding powerups to the bottom left hud area and removing the progress bar in the middle left of the hud. Adding player speaking indicator on the minimap icon. Changing default minimap values to make ziplines smaller and other minor adjustments to player icons. Adding Health regen to active player stats on the left. Updating images on the zipline prompt UI to match new colors. Fixing wash-color on new inline glyphs for active items. Adding logic to make default build categories double height when they go over 9 items in one category. Matches that are safe to abandon now use the \"Leave Match\" label rather than \"Abandon Match\" in the escape menu. Settings for Custom Matches (such as Enable Cheats, Bot Difficulty, etc.) now default to whatever was last used. Updated playable model with latest art, animation, and vfx content. New Siphon run locomotion. New stand and crouch idles. New book model. New run stop animations. New shop UI animations. New jump animation Set. New run locomotion. Added new zoomed run set. Added new stagger animation. Re-authored crouch locomotion to match faster speeds. Authored new stand and crouch turn set. Improved camera animations during Seismic Impact. Updated vo -  remastering pass, no new content. Added ambient effects to book. Siphon Life buff effect revisions to unify theme better. Improved Abrams zipline animations. Fixed Shoulder Charge acting like it's modifying your movespeed on the hud active player stats. Disjoints now break hook tracking. Uppercut now only locks out player movement until the top of the launch 'arc'. Bomb now favors applying to the Hook target for 0.25s after Hooking. Weapon changes to scale beam visual impact based on dps of weapon. Hyper Beam visual revision to starting point to hook up better to rest of beam. Hyper Beam now has updated ground effects. Sticky bomb and Uppercut effects revisions to help clarify damage areas. Uppercut T2 Perk revision to buff effects to make them more apparent when Bebop has extra gun damage. When Bebop hooks an NPC, only Bebop will hear the hook success sound to make it less confusing for teammates/opponents. Fixed casting errors that would sometimes happen with Sticky Bomb Gloom Bombs now has updated vfx. Leaping Slash now has updated vfx. Updated Neutral Soul Orbs location while controlling Ava. Return to Shadows now has updated vfx. Fix Return to Shadows not breaking boxes on its damage portions. Updated vo - largely remastering pass, but some new content including lines to match her updated kit. Added new Ava run and jump animations. New simulation on cat tail. New upwards and downwards animation. New Calico slide animation. Improve logic around traces for teleports specifically to address Quantum Entanglement teleporting players out of the map. Updated vo - largely remastering pass, but some new content. Revision to adjust tracer properties as fire rate increases, simplify impacts. Reload effects revisions. Guided Owl accelerate has been updated from M1 to 'W' by default. Better visual feedback for Spirit Snare when triggered. Fixed Spirit power bonus from Guided Owl always being visible in the active player stats. Fixed a bug that caused Grey Talon's Owl explosion sound to not be heard by the caster if they detonated it early with a keypress. Sleep Dagger now has updated vfx. Adjusted hitboxes to added backpack. Updated to use the new weapon gun audio system. Fixed Haze getting stuck during Bullet Dance cast pose if she died during use. Spirit Lasso now has a cast bar on the hud during wind-up. New in-air looping sound added to the first time she uses a bounce pad. Updated vo - some new content, including increased variety of Crackshot lines. Flame Dash speed boost has been updated from M1 to 'W' by default. Flame Dash now shows the speed boost in the active stats area. Updated vo - remastering pass, no new content. Adjusted hitboxes to conform to model. Frozen Shelter updated to use triggers rather than cancel, to match behavior of other un-summons. Fixed aoe abilities going through Frozen Shelter. Updated vo - largely remastering pass, some new content. Tracer revisions to lower visual noise when close to tracer. Life Drain is no longer cancellable. Life Drain no longer slows you down if it's not draining life from an enemy. Fixed Soul Exchange flashing on left of hud for <1s. Fixed casting errors that would sometimes happen with Soul Exchange New tracer and muzzle flash effects. Heavy Barrage launch effects revisions. Heavy Barrage effect addition to connect projectiles in space to the hero better. Updated with new custom animations. Coattail sim has been added. Fire Scarabs no longer causes Magic Carpet to be cancelled. Fire Scarabs now works with \"No Cooldowns\" set in Hero Testing. Fire Scarabs debuff and buff effects revisions. Tornado cast delay increased from 0.0s to 0.1s. Tornado now destroys breakable props. Adjusted Djinn's Mark consume activation sound so it's not too loud if used on many enemies at the same time. Added new spawn animation. Traveler now has a custom animation on his destination model. Fixed bonus health not showing from ultimate when hovering Mo & Krill on the scoreboard. Fixing Burrow acting like it was modifying movement speed (without casting it) in the active player stats. Fixed casting errors that would sometimes happen with Combo Fixed sometimes being stuck in skeletal form forever. Static Charge effect revisions to make aoe act as a warning for the timing better by ramping up visibility towards the end. Slice and Dice is no longer cancellable. Killing Blow debuff indicator effect revisions to remove arrow and add a brief debuff effect on the victim. Updated model with new wand weapon. Moved to a new animation set. Spectral Assistant now has updated vfx. Spectral Assistant's bullets updated to come out of the turret's muzzle position. Fixed Sinclair keeping some passive bonuses from stolen ultimates after they've been used. Fixed enemy Mo & Krill getting buffs from copied ult. Fixed issue if both Sinclair and enemy Mo & Krill are using their ultimates at the same time (when one ended, both would end). Added warning sound for Sinclair's rabbit hex when placed. Don't show stat changes for abilities that are stolen from using ultimate when previewing items in the shop. Fixed Spectral Assistant firing effects to not track with projectile. Increased volume of Vexing Bolt projectile loop and redirect. Vexing bolt redirect telegraph now displays on vertical geometry. Fixed getting stuck zoomed in if you tried to use Assassinate while getting stunned or silenced. Fixed a bug that allowed you to kill your teammates coming out of The Cube. New weapon firing effects and updated projectile. Updated vo - lots of new content for everyone's favorite sleazebag criminal. Petrifying Bola explode and direct hit sounds updated to make it clearer when you get a direct hit. Updated Binding Word visual ring to be more apparent. Adjusted volume of Power Slash hit confirm sound to give better feedback to the attacker. Update model to show default Yamato body for all effects. Lurker's Ambush: The spit debuff is now a heavy slow rather than an immobilize, and its damage is dealt over the effect's duration rather than all on initial impact. Added unique footstep sfx. Lurker's Ambush: the active's duration and damage are halved if Fathom is not latched to a wall while casting. Lurker's Ambush: shortened the channel time required for max duration/damage. Reefdweller Harpoon: fixed it failing to cast if you were sliding while casting. Scalding Spray now has new vfx. Scalding Spray now has a new animation. Remastered sounds for Scalding Spray and Breach abilities for better feedback. Fixed a bug that caused Scalding Spray sound to be too quiet for the victim in certain situations. Updated animation set - Polished 8-way sprint, Aims, Parries, Air Dash, Ground Dash, Jumps, Reloads. Added sounds to Blindside debuff hit, loop, and end. Initial gun weapon audio. Fixed bugs preventing his vo from playing as intended. Reworked Bottled Phantasmicide and Silktrap. Adjusted hitboxes to better conform to his model. New sounds added for all of Trapper's abilities. Now traps new vermin and bought a new coat. Now plays a sound when entering the active window. Added activation sound. Added cast and buff sounds. Effects revisions. Revision to buff and cast to look less modern. Updated vfx. Fixed a bug that caused the ambient sound to not loop properly. New sounds added to differentiate them from Holliday's bounce pad. Clean up buff effect after launch. Fixed showing an extra cancel hint. Area effect now applies the intended slow debuff. No longer triggers off Pocket's Affliction. Added new sound to proc. Fixed the UI prompt getting stuck when moving too far away from the other player. Fixed heroes sometimes getting dropped to the ground while under the effect of Rescue Beam. Added new proc and end sounds. Now keeps the Soul Shredder Bullets passive buffs. Now has new vfx. Fixed a rare case where the cooldown was displaying incorrectly. Effect revisions. Added new proc sound. Added new vfx. Added proc sound. Added Switch Pro default configs for [ Standard | Gyro | Gyro + FlickStick ]. Changed the default suggested SteamInput config to Gyro Enabled (with standard stick controls). Minor fix for glyph size inside settings keybinding popup. Added option to use regular face button glyphs vs. universal glyphs. Camera movement between crouching and standing is smoother and quicker. Fixed a performance issue when zipline hint appears. Tweaks/remake of mouse button glyphs. Added Japanese localization support. Adding support for keybind glyphs in non-English languages. Applied regional number formatting in several areas that were previously not respecting localization language. Fixed many instances of truncated text in localization languages. Allowed room for 3-line Hero Labs descriptions in languages that needed additional space. Prevented zip line boost prompt from wrapping to a second line and being cut off in some languages. Fixed an issue in some languages where longer text in the menu that appears after hitting Esc in a match was wrapping to a second line and overlapping other menu items. Fixed clipping of chat wheel label text in languages where additional space was required. Slightly expanded width of keybinding setting rows to allow more space for the Reset label, which did not previously fit in some languages. Added a width limit for popup window titles to correspond to the width limit already present for the body of those messages. Fixed issue where text in Asian fonts was being clipped at the bottom of search fields and on the Builds tab label. Added missing Spirit Snare, Flying Cloak, and Colossus modifier labels. Fixed an issue in the Custom Match lobby UI where the length of certain labels caused the Copy Party Code and Show Party Code elements not to render at all. This was preventing players in Ukrainian, Polish, and Italian from being able to see or share party codes for custom matches. Fixed 'Unstick Hero' and 'Suicide' buttons not working properly. Fixed a few cases of the camera getting stuck zoomed out. Fixed powerups from breakables sometimes not being able to be picked up. Fixed not being able to stop death replay. Fixed death replay not working if you try to play it right after you die. Fixed Pause not working while you're dead. Fixed Urn return location looking active on the minimap when no one is holding the urn. Fixed players getting killed by Bosses showing \"Unknown\" in the kill feed. Fixed long outstanding bug where sometimes you couldn't drag an item to an active item slot. Fixed console getting bound to ` repeatedly. Fixed active items sometimes not showing correct cooldown. Fixed turrets shooting midboss if it's invulnerable to them (i.e. an enemy or ally was in the pit, they would shoot it but do no damage). It will shoot the mid boss if you're in the pit (which will allow them to damage mid boss). Same treatment for Weakened Patron. Fixed a bug with targeting previews for aoes sometimes not showing up. Fixed a bug that caused looping audio sources to be inaudible if the listener was too far away when the sound started. Fixed tether getting removed then applied every frame if Ivy was above the bridge and target is below the bridge (or vice versa) causing the vfx to flicker. Fixed a rare bug where an incorrect voice line would play. Fixed a rare bug that could cause a response voice line to not play. Fixed Urn return music not playing. Fixed Rejuvenator drop music playing in Sandbox. Fixed damage audio not playing in replay and for spectator. Fixed the case where multiple shields of the same type weren't stacking correctly. Fixed Weapon Damage % stats not breaking out Golden Statue and tier bonuses correctly in the tooltip. Potential fix for roster getting cleared if your game crashed. Bullets now record their lag compensation amount and stay at the same offset rather than tracking the client's latency per tick. Fixed Walker stomp sometimes not hitting nearby units on an elevation. Fixed Walker backdoor protection sometimes mistriggering from other lanes. Fixed a bug where abilities could mispredict a successful cast if the target is dashing past the caster. Fixed a bug where abilities could mispredict a successful cast if the target is an ally. Fixed an exploit that allowed players to 'secure' their souls by buying and refunding an item. Fixed Cancel button not working when waiting to spectate a match. Prevented cooldown timers from displaying 0.0 briefly at the end of the countdown. Fixed an issue causing extraneous blank lines to be appended to pings when individual lines of ping text were long. Holliday Bounce Pad damage reduced from 120 to 90. Bounce Pad T3 stun duration reduced from +1.25s to +1s. Spirit Lasso damage reduced from 120 to 90. Concussive Combustion reduced chances of ground trace missing ground and improved perf. Crimson Slash adjusted slash effects height to be better aligned to crosshair."
``

# General Changes

[[!:https://clan.akamai.steamstatic.com/images/45164767/27bbee6ce3031dc70be354316a8f3290c3e5c20a.png]]((store.steampowered))
- The map has been redesigned around being 3 lanes rather than 4. This has a large range of accompanying map-wide changes regarding visuals, building layouts, pathways, neutral camps, air vents, breakables, powerup buffs, juke spots, mid boss, etc.
- Added a new feature called "Explore Map" where you can run around an empty city to test movement and navigation. You can find this under the 'Play' menu.
- Troopers no longer need to be last hit by a player in order to generate souls, as long as you are nearby. Troopers no longer have the "near death" flashing behavior.
- Soul Orb lifetime in the air reduced significantly.
- Soul Orb denies changed from 65/35% to 50/50%.
- Soul Orb physical radius increased by 10%.
- Reduced horizontal movement of soul orbs from troopers.
- Gaining souls from kills now shows a visual effect of souls flying towards you.
- Default sprint speed increased from 0.5 to 1.0.
- Sprint disable duration reduced from 5s to 4s when dealing/taking damage with heroes.
- Sprint disable duration reduced from 5s to 0.5s when dealing/taking damage with non-heroes.
- Sinner's Sacrifice no longer grants a random Golden Statue buff.
- Sinner's Sacrifice now has a looping timing window where if you kill it with a Heavy Melee (there are visual and audio cues), you will receive 3 Golden Statue buffs.  Alternatively, a last hit with Light Melee will only give 1 Golden Statue Buff.
- Added support for DLSS as an FSR2 alternative for temporal anti aliasing and upscaling. Requires an NVIDIA 2x-class GPU or above.
- For Vulkan users, upgraded FSR2 to AMD's new FSR3 temporal upscaler for sharper and more temporally stable output.
- Enabled NVIDIA Reflex and AMD Anti-Lag 2.0 for reduced latency.
- Client performance improvements.
- Bicubic filtering for lightmaps at higher shadow quality settings.
- Improve how we preload units to prevent shader compilation during gameplay.
- Hero shader improvements.
- Various netcode improvements
- Increased tick rate from 60hz to 64hz to improve the precision of certain game calculations.
- Improved client reporting to prevent incorrect prediction offsets to the server.
- Improved accuracy of server lag compensation to prevent bullets from reporting false hit detection against enemies further in the past.
- Improved timing of server lag compensation to engage during the first phase of bullet creation which previously could have resulted in bullets originating from different positions on the server and client.
- Improved accuracy of Soul Orb hitboxes to ensure they are in the correct position during client bullet prediction.
- Improved various close range abilities having casting errors (Sticky Bomb, Soul Exchange, Combo, etc).
- Increased post-laning trooper bounty to match the previous 4 lane global economy.
- Changed flex slot requirements:
- 1st flex slot changed from 3 Guardians down to 2 Guardians.
- 2nd flex slot changed from 2 Walkers down to 1 Walker.
- The last 2 flex slots are unchanged.
- Small Neutral Camp respawn time reduced from 4 minutes to 3 minutes.
- Mid Neutral Camp respawn time reduced from 6 minutes to 5 minutes.
- Neutrals soul values reduced by 10% (overall camp count and frequency has been increased).
- Side Walkers HP increased from 5,175 to 7,000.
- Mid Walkers HP increased from 8,000 to 9,000.
- Mid Boss HP and HP growth increased by 30%.
- Outer Zipline speed increased by 15%.
- Breakable soul values reduced by 5%.
- All juke spots now have veils (the dead end closets with the mystery man infront).
- Gun Powerup min/max Fire Rate increased from 10/30% to 15/35%.
- Fixed Gun Powerup not scaling Ammo to 60% as intended.
- Added a new Mid Boss Rejuvenator Symbol with three visual states (not spawned, under 1 min from spawn, and spawned).
- The new large amount of breakables in the mid boss middle area now initially spawn at the same time as mid boss.
- Superior Stamina: No longer gives 7% fire rate.
- Now visualizes the amount of damage reduced by resistances or shields.
- Incoming Damage UI now visualizes general damage reduction and amplification.
- Now shows the number of instances of damage done by each ability.
- Damage Report no longer clears immediately upon respawn, but instead will keep the data from your previous life with an added "(Last Life)" label.
- Breaking secondary stats out in the client Damage Report. (i.e. Shiv Serrated Knives now shows damage from initial hit and damage-over-time).
- Defaulting damage report to compact mode when you initially take damage.
- A variety of UI bugfixes and polish changes.
- Added the ability to right click on the header of a build category to add all items in that category to your Quickbuy queue.
- Quickbuy's default behavior is going back to showing purchase prompts when the item is actually purchased. A settings option has been added to show purchase prompts when the item is queued.
- Fixed a bug where you could queue an item that was a component of an item you already own.
- Fixed several bugs that caused items to be skipped when purchasing items with the Auto Buy option enabled.
- Fixed a bug where purchasing an item would clear the item search box in the shop.
- Fixed Steam profanity filter not being consistently applied to user-authored text in builds (names, descriptions, annotations).
- You can now create builds on the dashboard.
- You can now create ability builds by clicking on the ability icons in the skill build area (which is the only way you can do it on the dashboard) in addition to skilling them up in sandbox mode (where both work).
- Fixed a bug where dragging and dropping items while editing a build would remove the annotation from the item.
- Reworking default builds to assume items are bought in specified order.
- Updated Hero default builds.
- Added Suggested AP path for Haze, Paradox, Shiv, and Yamato.
- Ziplines are now curved.
- If a player abandons a match before the 5 minute mark, the game will now bring up a green hud message: "This game will not be scored. It is now safe to leave." If the abandon occurs after 5 minutes, the hud message will be: "This match can be abandoned without a penalty, but leaving will result in a loss.".
- Updated the Heavy Melee vfx.
- Gun audio system updates attempt to balance powerful feel with ear fatigue more skillfully, also added some experiments for early reflection acoustics in weapon reports.
- Updated regular damage and headshot damage sounds; damage dealt to NPCs is now quieter.
- Players no longer collide with Bosses to prevent some unintended interactions.
- Crouch toggle now ends on a failed dash.
- Added positional tier 1 Guardian death sounds.
- Added sounds for tier 1 Guardian melee swing, melee slam, and melee hit.
- Added sounds for tier 1 Guardian activate from idle and deactivate to idle animations.
- Added positional Walker death sounds.
- Added sounds for Walker beam attack.
- Added sounds for Walker stomp attack.
- Added sounds for Walker rocket barrage attack.
- Adjusted what counts as a headshot when shooting through non-head hitboxes.
- Reduce duration of buff effect for gaining Ability Points.
- Button hints now update when changing keybinds during a match.
- Made bots better at purchasing and upgrading items.
- Made bots better at not getting stuck in walls.
- Adding row indicator if you're on the global leaderboards. Also auto scroll to your position on the global leaderboards.
- Taskbar icon only flashes once when you're about to respawn.
- The Walker's area buff now shows up on the hud's active stats section.
- Adding support for pinging Ability 1-4 to be "almost ready" with supporting vo.
- Hooking up generic "Item is Ready", "Item is almost Ready", and "Item is on cooldown" vo.
- Added missing unique death vo sounds for: Fathom, Trapper, Wrecker, Raven, Sinclair, and Wraith.
- Updated voice lines for having many souls to trigger at 6k, instead of 6.2k.
- Base attack music now starts immediately when an enemy enters the local player's base (previously only when damage was dealt to an objective).
- Damage audio does not play loudly if the player's health is not changing.
- Elevated ability hit confirmation sounds in the mix.
- Players can no longer shoot or reload their weapon while climbing a rope.
- Mix updates to deprioritize NPC, currency, and other sounds in base.
- Protections added to low audio frequencies from building up and clouding the mix.
- Updated volume for Paradox and Viscous' Select/Unselect lines increased to match the rest of the roster.
- So as not to create unintended situations where you give away your position while hiding from combat the "you can't hide from me" vo lines now only play for the speaker.
- At the beginning of a match certain heroes will now chat with each other as they ride to battle.  If a hero does not have a recorded conversation the patron will speak to them as they did previously.
- Minor vo bug fixes that address things like missing ability lines, wrong names being called out in pings, etc.
- Ping Update: Pre-match, if you press the ping button your hero will play a random taunt.  Not every hero has these lines yet.
- Ping Update: Certain heroes now have several new options that can be added to the ping wheel including "Come with me", "Rejuv's Dropping", "Cover Me", "Nevermind", "Press The Advantage", "Not Ready To Teamfight", "Let's Hide Here", "it's Dangerous Here", "I'll Clear The Troopers", "Let's Meet Here", and "I'll Flank 'Em".
- Ping Update: The Green lane is now alternatively referred to as "Park" instead of "Greenwich".
- Added an effect for when you break bridge Powerups.
- Sprint effects revisions to reduce noise.
- Window materials now feature imposter interiors and improved glass reflection.
- Added new signage to the world.
- Added new railing smartprop to the world.
- Added new oracle building model.
- Added new buildings for the city backdrop.
- Added under construction suspension bridge to yellow lane.
- Improved blending of character and world shadows.
- Improved lighting on city backdrop.
- Added Bull/Bear statues to the jungle lane street for landmark callouts.
- Ability Point effects revisions to reduce lingering noise.
- Powerup spawner gained effects revisions to reduce lingering noise.
- Zipline speed effect revisions.
- Stunned debuff effect revisions.
- Update last hit effects so that it reflects what is shown in the UI.
- Changed minimum bot difficulty for some heroes.
- Added chimes and bird sounds behind park gate.
- Added looping sound to jump pads in the world.
- Added neutral camp spawn sound.
- Added permanent powerup spawn sound.
- Added a global spawn sound for bridge buffs.
- Changed all language around 'Hero Sandbox' to 'Hero Testing'.
- Moved Private and Co-op bots to be bucketed under a single "Play Bot Match" button that splits into private vs co-op via selection modal.
- Added a News Post popup panel to the main menu.
- Added a link to Patch Notes to the main menu.
- Commends are now right-aligned.
- Enemy commends now auto-dismiss after a short duration.
- Fixed both "Leave Match" and "Leave Spectating" showing when you hit Esc while watching a match.
- Fixed a bug where abilities showed their imbued item multiple times.
- Adding Status Effect Panels next to healthbar and in the bottom left to display certain modifier icons in these areas. You can hover them to see what the status effect is.
- Adding Rejuvenator icon in the bottom left next to healthbar when you have the Rejuvenator.
- Adding powerups to the bottom left hud area and removing the progress bar in the middle left of the hud.
- Adding player speaking indicator on the minimap icon.
- Changing default minimap values to make ziplines smaller and other minor adjustments to player icons.
- Adding Health regen to active player stats on the left.
- Updating images on the zipline prompt UI to match new colors.
- Fixing wash-color on new inline glyphs for active items.
- Adding logic to make default build categories double height when they go over 9 items in one category.
- Matches that are safe to abandon now use the "Leave Match" label rather than "Abandon Match" in the escape menu.
- Settings for Custom Matches (such as Enable Cheats, Bot Difficulty, etc.) now default to whatever was last used.
- Updated playable model with latest art, animation, and vfx content.
- New Siphon run locomotion.
- New stand and crouch idles.
- New book model.
- New run stop animations.
- New shop UI animations.
- New jump animation Set.
- New run locomotion.
- Added new zoomed run set.
- Added new stagger animation.
- Re-authored crouch locomotion to match faster speeds.
- Authored new stand and crouch turn set.
- Improved camera animations during Seismic Impact.
- Updated vo -  remastering pass, no new content.
- Added ambient effects to book.
- Siphon Life buff effect revisions to unify theme better.
- Improved Abrams zipline animations.
- Fixed Shoulder Charge acting like it's modifying your movespeed on the hud active player stats.
- Disjoints now break hook tracking.
- Uppercut now only locks out player movement until the top of the launch 'arc'.
- Bomb now favors applying to the Hook target for 0.25s after Hooking.
- Weapon changes to scale beam visual impact based on dps of weapon.
- Hyper Beam visual revision to starting point to hook up better to rest of beam.
- Hyper Beam now has updated ground effects.
- Sticky bomb and Uppercut effects revisions to help clarify damage areas.
- Uppercut T2 Perk revision to buff effects to make them more apparent when Bebop has extra gun damage.
- When Bebop hooks an NPC, only Bebop will hear the hook success sound to make it less confusing for teammates/opponents.
- Fixed casting errors that would sometimes happen with Sticky Bomb
- Gloom Bombs now has updated vfx.
- Leaping Slash now has updated vfx.
- Updated Neutral Soul Orbs location while controlling Ava.
- Return to Shadows now has updated vfx.
- Fix Return to Shadows not breaking boxes on its damage portions.
- Updated vo - largely remastering pass, but some new content including lines to match her updated kit.
- Added new Ava run and jump animations.
- New simulation on cat tail. New upwards and downwards animation.
- New Calico slide animation.
- Improve logic around traces for teleports specifically to address Quantum Entanglement teleporting players out of the map.
- Updated vo - largely remastering pass, but some new content.
- Revision to adjust tracer properties as fire rate increases, simplify impacts.
- Reload effects revisions.
- Guided Owl accelerate has been updated from M1 to 'W' by default.
- Better visual feedback for Spirit Snare when triggered.
- Fixed Spirit power bonus from Guided Owl always being visible in the active player stats.
- Fixed a bug that caused Grey Talon's Owl explosion sound to not be heard by the caster if they detonated it early with a keypress.
- Sleep Dagger now has updated vfx.
- Adjusted hitboxes to added backpack.
- Updated to use the new weapon gun audio system.
- Fixed Haze getting stuck during Bullet Dance cast pose if she died during use.
- Spirit Lasso now has a cast bar on the hud during wind-up.
- New in-air looping sound added to the first time she uses a bounce pad.
- Updated vo - some new content, including increased variety of Crackshot lines.
- Flame Dash speed boost has been updated from M1 to 'W' by default.
- Flame Dash now shows the speed boost in the active stats area.
- Updated vo - remastering pass, no new content.
- Adjusted hitboxes to conform to model.
- Frozen Shelter updated to use triggers rather than cancel, to match behavior of other un-summons.
- Fixed aoe abilities going through Frozen Shelter.
- Updated vo - largely remastering pass, some new content.
- Tracer revisions to lower visual noise when close to tracer.
- Life Drain is no longer cancellable.
- Life Drain no longer slows you down if it's not draining life from an enemy.
- Fixed Soul Exchange flashing on left of hud for <1s.
- Fixed casting errors that would sometimes happen with Soul Exchange
- New tracer and muzzle flash effects.
- Heavy Barrage launch effects revisions.
- Heavy Barrage effect addition to connect projectiles in space to the hero better.
- Updated with new custom animations.
- Coattail sim has been added.
- Fire Scarabs no longer causes Magic Carpet to be cancelled.
- Fire Scarabs now works with "No Cooldowns" set in Hero Testing.
- Fire Scarabs debuff and buff effects revisions.
- Tornado cast delay increased from 0.0s to 0.1s.
- Tornado now destroys breakable props.
- Adjusted Djinn's Mark consume activation sound so it's not too loud if used on many enemies at the same time.
- Added new spawn animation.
- Traveler now has a custom animation on his destination model.
- Fixed bonus health not showing from ultimate when hovering Mo & Krill on the scoreboard.
- Fixing Burrow acting like it was modifying movement speed (without casting it) in the active player stats.
- Fixed casting errors that would sometimes happen with Combo
- Fixed sometimes being stuck in skeletal form forever.
- Static Charge effect revisions to make aoe act as a warning for the timing better by ramping up visibility towards the end.
- Slice and Dice is no longer cancellable.
- Killing Blow debuff indicator effect revisions to remove arrow and add a brief debuff effect on the victim.
- Updated model with new wand weapon.
- Moved to a new animation set.
- Spectral Assistant now has updated vfx.
- Spectral Assistant's bullets updated to come out of the turret's muzzle position.
- Fixed Sinclair keeping some passive bonuses from stolen ultimates after they've been used.
- Fixed enemy Mo & Krill getting buffs from copied ult.
- Fixed issue if both Sinclair and enemy Mo & Krill are using their ultimates at the same time (when one ended, both would end).
- Added warning sound for Sinclair's rabbit hex when placed.
- Don't show stat changes for abilities that are stolen from using ultimate when previewing items in the shop.
- Fixed Spectral Assistant firing effects to not track with projectile.
- Increased volume of Vexing Bolt projectile loop and redirect.
- Vexing bolt redirect telegraph now displays on vertical geometry.
- Fixed getting stuck zoomed in if you tried to use Assassinate while getting stunned or silenced.
- Fixed a bug that allowed you to kill your teammates coming out of The Cube.
- New weapon firing effects and updated projectile.
- Updated vo - lots of new content for everyone's favorite sleazebag criminal.
- Petrifying Bola explode and direct hit sounds updated to make it clearer when you get a direct hit.
- Updated Binding Word visual ring to be more apparent.
- Adjusted volume of Power Slash hit confirm sound to give better feedback to the attacker.
- Update model to show default Yamato body for all effects.
- Lurker's Ambush: The spit debuff is now a heavy slow rather than an immobilize, and its damage is dealt over the effect's duration rather than all on initial impact.
- Added unique footstep sfx.
- Lurker's Ambush: the active's duration and damage are halved if Fathom is not latched to a wall while casting.
- Lurker's Ambush: shortened the channel time required for max duration/damage.
- Reefdweller Harpoon: fixed it failing to cast if you were sliding while casting.
- Scalding Spray now has new vfx.
- Scalding Spray now has a new animation.
- Remastered sounds for Scalding Spray and Breach abilities for better feedback.
- Fixed a bug that caused Scalding Spray sound to be too quiet for the victim in certain situations.
- Updated animation set - Polished 8-way sprint, Aims, Parries, Air Dash, Ground Dash, Jumps, Reloads.
- Added sounds to Blindside debuff hit, loop, and end.
- Initial gun weapon audio.
- Fixed bugs preventing his vo from playing as intended.
- Reworked Bottled Phantasmicide and Silktrap.
- Adjusted hitboxes to better conform to his model.
- New sounds added for all of Trapper's abilities.
- Now traps new vermin and bought a new coat.
- Now plays a sound when entering the active window.
- Added activation sound.
- Added cast and buff sounds.
- Effects revisions.
- Revision to buff and cast to look less modern.
- Updated vfx.
- Fixed a bug that caused the ambient sound to not loop properly.
- New sounds added to differentiate them from Holliday's bounce pad.
- Clean up buff effect after launch.
- Fixed showing an extra cancel hint.
- Area effect now applies the intended slow debuff.
- No longer triggers off Pocket's Affliction.
- Added new sound to proc.
- Fixed the UI prompt getting stuck when moving too far away from the other player.
- Fixed heroes sometimes getting dropped to the ground while under the effect of Rescue Beam.
- Added new proc and end sounds.
- Now keeps the Soul Shredder Bullets passive buffs.
- Now has new vfx.
- Fixed a rare case where the cooldown was displaying incorrectly.
- Effect revisions.
- Added new proc sound.
- Added new vfx.
- Added proc sound.
- Added Switch Pro default configs for [ Standard | Gyro | Gyro + FlickStick ].
- Changed the default suggested SteamInput config to Gyro Enabled (with standard stick controls).
- Minor fix for glyph size inside settings keybinding popup.
- Added option to use regular face button glyphs vs. universal glyphs.
- Camera movement between crouching and standing is smoother and quicker.
- Fixed a performance issue when zipline hint appears.
- Tweaks/remake of mouse button glyphs.
- Added Japanese localization support.
- Adding support for keybind glyphs in non-English languages.
- Applied regional number formatting in several areas that were previously not respecting localization language.
- Fixed many instances of truncated text in localization languages.
- Allowed room for 3-line Hero Labs descriptions in languages that needed additional space.
- Prevented zip line boost prompt from wrapping to a second line and being cut off in some languages.
- Fixed an issue in some languages where longer text in the menu that appears after hitting Esc in a match was wrapping to a second line and overlapping other menu items.
- Fixed clipping of chat wheel label text in languages where additional space was required.
- Slightly expanded width of keybinding setting rows to allow more space for the Reset label, which did not previously fit in some languages.
- Added a width limit for popup window titles to correspond to the width limit already present for the body of those messages.
- Fixed issue where text in Asian fonts was being clipped at the bottom of search fields and on the Builds tab label.
- Added missing Spirit Snare, Flying Cloak, and Colossus modifier labels.
- Fixed an issue in the Custom Match lobby UI where the length of certain labels caused the Copy Party Code and Show Party Code elements not to render at all. This was preventing players in Ukrainian, Polish, and Italian from being able to see or share party codes for custom matches.
- Fixed 'Unstick Hero' and 'Suicide' buttons not working properly.
- Fixed a few cases of the camera getting stuck zoomed out.
- Fixed powerups from breakables sometimes not being able to be picked up.
- Fixed not being able to stop death replay.
- Fixed death replay not working if you try to play it right after you die.
- Fixed Pause not working while you're dead.
- Fixed Urn return location looking active on the minimap when no one is holding the urn.
- Fixed players getting killed by Bosses showing "Unknown" in the kill feed.
- Fixed long outstanding bug where sometimes you couldn't drag an item to an active item slot.
- Fixed console getting bound to ` repeatedly.
- Fixed active items sometimes not showing correct cooldown.
- Fixed turrets shooting midboss if it's invulnerable to them (i.e. an enemy or ally was in the pit, they would shoot it but do no damage). It will shoot the mid boss if you're in the pit (which will allow them to damage mid boss). Same treatment for Weakened Patron.
- Fixed a bug with targeting previews for aoes sometimes not showing up.
- Fixed a bug that caused looping audio sources to be inaudible if the listener was too far away when the sound started.
- Fixed tether getting removed then applied every frame if Ivy was above the bridge and target is below the bridge (or vice versa) causing the vfx to flicker.
- Fixed a rare bug where an incorrect voice line would play.
- Fixed a rare bug that could cause a response voice line to not play.
- Fixed Urn return music not playing.
- Fixed Rejuvenator drop music playing in Sandbox.
- Fixed damage audio not playing in replay and for spectator.
- Fixed the case where multiple shields of the same type weren't stacking correctly.
- Fixed Weapon Damage % stats not breaking out Golden Statue and tier bonuses correctly in the tooltip.
- Potential fix for roster getting cleared if your game crashed.
- Bullets now record their lag compensation amount and stay at the same offset rather than tracking the client's latency per tick.
- Fixed Walker stomp sometimes not hitting nearby units on an elevation.
- Fixed Walker backdoor protection sometimes mistriggering from other lanes.
- Fixed a bug where abilities could mispredict a successful cast if the target is dashing past the caster.
- Fixed a bug where abilities could mispredict a successful cast if the target is an ally.
- Fixed an exploit that allowed players to 'secure' their souls by buying and refunding an item.
- Fixed Cancel button not working when waiting to spectate a match.
- Prevented cooldown timers from displaying 0.0 briefly at the end of the countdown.
- Fixed an issue causing extraneous blank lines to be appended to pings when individual lines of ping text were long.

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Holliday"]} />
``

=hero:holliday:
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:bounce-pad:
[[/hero/holliday?ability=bounce-pad]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad change history))
### [[/hero/holliday?ability=bounce-pad]]((Bounce Pad))
- Bounce Pad damage reduced from 120 to 90.
- Bounce Pad T3 stun duration reduced from +1.25s to +1s.
==
==ability:spirit-lasso:
[[/hero/holliday?ability=spirit-lasso]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp]] Spirit Lasso change history))
### [[/hero/holliday?ability=spirit-lasso]]((Spirit Lasso))
- Spirit Lasso damage reduced from 120 to 90.
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Concussive Combustion", "Crimson Slash"]} />
``

=item:concussive-combustion:
## Concussive Combustion
- reduced chances of ground trace missing ground and improved perf.
=

=item:crimson-slash:
## Crimson Slash
- adjusted slash effects height to be better aligned to crosshair.
=