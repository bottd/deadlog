``meta:
title "Shop Rework Update"
thread_id "63133"
steam_gid "1799088287841594"
published "2025-05-08T19:33:12.000Z"
author "mystery *******"
author_image "/assets/authors/deadlock.webp"
category "patch"
major_update #false
content_text "Full shop rework, including many new items. Item slots are now all universal, rather than tree specific. Total slot count reduced from 16 to 12. Item costs are now discounted when you own the component. New artwork for all item icons. Reworked how tier bonuses work in the shop. They are no longer based on each item you buy, but instead based on your total spend in a tree. Bonuses are not linear (maxing out one tree fully isn't optimal bonus-wise). Various item names have been changed. Items now glow when there is an upgrade you can buy. The Build Browser has been reworked and is now its own fullscreen UI. Added a \"Create Build\" button when hovering over a player in post-game. This will create a local unpublished build based on the items the player purchased in that match (including imbue targets and the order in which items were sold). Added a new feature: build tags. Build tags are a way to compactly describe the theme of a build. A tag has an icon and a description, and you can assign 3 tags to a build (they don't have to be unique). There are a small number of initial \"standard\" tags such as Weapon/Spirit/Vitality, but also things like level of complexity, whether the build is melee focused, etc. In addition to the standard build tags, the ability icons of the hero, and icons of items included in a build can also be used as tags. Published builds that don't yet have tags will not show up in the public results in the build browser. Added the ability to specify a suggested imbue target for items in a build. When using Quickbuy this will be automatically selected. When purchasing normally, the suggested ability will be highlighted in the imbue popup. Added the ability to specify a sell priority value (0-100) for items in a build. When using Quickbuy, if you are out of slots, and you own an item with a sell priority, that item will automatically be sold to make room for your next purchase. Build Categories can now be marked as Optional, which show up differently in the build UI and will not be added to Quickbuy when queuing a build. You can now highlight both items and categories in the build editor, with a dedicated section on the left to edit the properties of the current selection (this replaces right-click context menus to update things like annotation notes and imbue targets). You can remove items from a build by dragging them outside of the category UI. Added a new larger Quickbuy queue UI adjacent to the shop that lets you remove and reorder items in the queue. Added buttons to queue your entire build and to clear your Quickbuy queue. The default Quickbuy hotkey has been changed from 'Shift+B' to 'G'. Added an option to always queue your selected build at the start of a match. Fixed several bugs that would cause Quickbuy purchases to fail. New base design. Amber side early development pass at industrial exterior. Sapphire side early development pass at museum exterior. Interior shape changed to round with a high domed ceiling (both sides using the same interior temporarily). Added Patron Throne that moves down into the ground to form the final Patron area. Two ventilation tunnels from the player spawn to the final Patron area combined into a single tunnel. Shrines moved back closer to the player spawn area and pushed into alcoves. Hallways along the Mid Lane entrance to the base changed to rooms with ropes leading up to the high ground. Side passages from player spawn area to the Shrines changed to curved stairs. Increased areas in front of the Mid Lane base entrances. Added Juke Closets in between base entrances on the interior side. Lowered buildings on the corners of the area that have access to Mid Boss. Extended the rope from Mid Boss to the rooftop of these newly lowered buildings. Redesigned Boutique. Expanded the rooftop all the way back to the wall. Raised building separating the Boutique and the base. Continuous interior from jungle area to the walker. Stairs dip down into the building. Added high building archway behind the Walker. Increased the window size in the covered hallway in between the Walker and the jungle areas. Removed the Skybridges just below the ziplines from the base side. Removed the Pedestrian bridge in between the Walker and the Guardian. Reduced width of the street coming from the Guardian. Added catwalk on the defender side to connect to the catwalk behind the Walker. Added an awning in front of the Cultural Center. Changed the Cultural Center interior path to go to the defender side catwalk. Removed the high ground side entrance to the interior hallway on the outside of the lane. Centered the bounce pad coming out of the interior hallway in between the Walker and the Guardian. Added a rope to access the roof from the jungle side. Removed wall shrubs on the jungle side. Removed the zap triggers on that rooftop. Added breakables on the roof. Lowered the tower building in the jungle area across from the connection area. Lowered rooftop of the Clinic/Law Office (building next to the Bear/Bull statues). Connected the rooftop of the Clinic/Law Office to the lowered roof leading to Mid Lane. Lowered one side of the building beside the Fish Market/Nursery. Added Juke Closet off the lowered rooftop. Added breakables to all newly lowered rooftops. Moved and rotated delivery trucks separating neutral camps. Increased size of doorways of Juke Closets. Wooden crates replaced with new design and shader. Skybridges Pedestrian Bridges (old Power Up bridges) Department Store Chapel Bell Tower Apartment Complex Speakeasy Gallery Interiors Broadway Storefronts Nightclub Theater Increased size of all doorways entering interior spaces. Removed the veils below the old Power-Up bridges. Removed the sign on the top of the Theater. Added collision to the chimney pipes. Raised interior ceiling of Radio Station/Apartment Complex on outer lanes next to the T1 Shops. Removed the columns in the interiors of the Radio Station/Apartment. Added lights to the Radio Station/Apartment interiors. Removed veil at the front of Dept Store/New York Oracle. Players gain back ammo when claiming an Orb. Improved reliability of soul orb claims when experiencing momentary packet loss or latency. Reworked visual effects to more clearly communicate when they are claimable or expiring. Reworked client feedback when shooting a soul orb prior to being awarded the souls. Soul orbs no longer automatically claim when colliding with the world. Improved unit targeting logic. Networking: Add method to smooth player jitter that may result from non-ideal networking conditions. Fixed jittery motion for various in-world UI elements, such as targeting and ziplines. Improve fairness in hit registration between high and low ping players during ability use and when shooting troopers. Fixed rare bug that would cause melee hits to have an incorrect range on the server. Fixed various scenarios causing networking-related jitter when climbing ropes. Reduced jitter from mispredictions while ziplining near another player. Fixed issues with mispredicting (and bad stuttering) when going around corners on zipline. Air Acceleration has been increased to improve Wall Jump controls, but only while moving at lower speeds. Wall Jump launch has different kick away speed from the wall based on whether you're pushing your movement direction toward, away, or neutral. Fixed cases where it was impossible to Mantle Ledges to the left or right of your Wall Jump direction, just after a Wall Jump. Fixed/improved control over air dashes just after a Wall Jump. Wall Jump fatigue affects the vertical launch only, and recovers at 1.25s instead of 2s. This should encourage long lateral leaps, while keeping chimneying in check. Fixed a bug where using Melee on the ground triggered Wall Jump fatigue. Wall detection for wall jumps now takes into account all walls in a small radius around the player, not just the last wall touched. Changes to Wall Jump behavior have reduced the effectiveness of \"Corner Boosting\" a bit. While Wall Sliding, terminal velocity is in effect (for vertical speeds only). At -600u/s gravity is cancelled out. Mantle Glide: Holding Crouch or Crouch Toggle while exiting a Mantle creates a small speed boost, allowing you to slide out of mantles. Various Fixes for camera positions when characters push the camera into the ceiling in special cases ( Vindicta & Abrams' Ults ). Characters, Guardians, Walkers and Shrines will fade to a minimum transparency as they get too close to the camera. Soft Camera Collision: As you move, the camera anticipates walls approaching from behind and to the right of your character resulting in less sudden jolts, and smooth near/far camera paths when turning in constricted spaces. Changing the third flex slot unlock from killing all Walkers to killing two Walkers. Changing last flex slot from base guardians and shrine to just base guardians. Players now start with 400 souls. Adjusted the boon reward schedule and added some more levels. You now also gain Spirit per boon.  Adjusted Spirit on various abilities and items to compensate. All hero stats rebalanced alongside the shop rework. Adjusted objective health values (as part of damage value changes in the shop). Shields have been reworked and are now called Barriers. They are no longer multiple damage types. They also interact normally with resistances now. Hero kill comeback values reduced by 15%. The losing team now gains up to 25% more souls from troopers, neutrals, vaults, and objectives, based on how behind they are (peaks at 20% max networth delta). First 3k in networth difference is ignored. Zipline Boost speed reduced from 130% to 80%. Zipline Boost cooldown increased from 280s to 360s. Zipline now glows in the world when there is a zipline-boosted player on it. Zipline Walker nodes adjusted.  When Walker is contested, the last active defending zipline node is now behind the Walker instead of right on top of it. Zipline dismount momentum reduced slightly. Trooper bounty split from 100/60/35/25/20/16% to 100/60/30/20/15/11 (less effective economy as a large group). Side Walkers' HP relative to Mid Walkers HP changed from -22% HP to -40%. Decreased the height of Walkers' Stomp ability from 9m to 6m. Backdoor protection range check increased by 5m for Walkers and 10m for Base Objectives. Distance to attack walkers increased from 32.5 to 35. Powerups Now spawn at 5 minutes instead of 10 minutes. Breakables now spawn at 2 minutes instead of 3 minutes (they still respawn every 3 minutes). Soul Breakables chance increased from 50% to 60%. Golden Statue breakables chance increased from 40% to 50%. Minimap now shows what kind of powerup is spawned. Teleporters now start available at the beginning of the game, rather than at 8 minutes. Walkers Resistance based on nearby enemies increased from 0/8/16/24/32/40% to 0/0/20/30/40/50%. Bullet and Spirit Resistance for being near Walker value reduced from 25% to 15%. Bullet and Spirit Resistance for being near Walker radius reduced from 35.5m to 32m. Neutral bounties increased by 6%. Healing area turrets' damage increased by 20%. Base trooper bounty reduced from 144 to 132 Powerup Gun: Min Fire Rate reduced from 15% to 12%. Powerup Gun: Min Ammo reduced from 30% to 20%. Powerup Survival: Min Health reduced from 250 to 200. Powerup Survival: Min regen reduced from 0.75% to 0.5%. Powerup Casting: Min Spirit Power reduced from 20 to 15. Powerup Casting: Min CD Reduction reduced from 15% to 12%. Powerup Movement: Min Sprint reduced from 2m to 1.5m. Powerups now start scaling up from 5 min rather than from 10 min. Debuff Resistance now stacks diminishingly. Increased Dash Slow cap from -40% to -50%. Upgraded items now share the cooldown of the consumed item (i.e. using Healing Rite before upgrading to Healing Nova no longer resets the cooldown). Updated all default builds. Net Worth display shows decimals until 10k (instead of only until 5k). Updated all targeting in game with new visuals to be consistent for positive targeting AOEs. Troopers are visible through walls during the laning phase. Replaces the HUD element showing trooper icon and health. Ally health bars visible through walls in addition to X-ray. Nearby creep X-rays also visible through walls. Added outlines to hero shader. Minor update to the \"Get Started\" tutorial videos to reflect the three lanes and removal of trooper last hits. Corrected name of Temple Guardian in the damage report where it was appearing as Mid Boss. Added a tooltip to explain the secondary build search language option in Settings. Aligned labels of in-world pickup item labels with the corresponding modifiers so the HUD text that appears after picking up an item uses consistent terminology. Shrines are now navigation blockers, discouraging troopers from walking through and into them. Majestic Leap, Warp Stone, and Phantom Strike can now properly be cast while climbing ropes. Sinclair's Spectral Assistant teleport follow-up can now properly be cast while climbing ropes. Bots will change their mind less frequently when considering retreating due to low health. Bots now use ziplines when returning to base to heal. Bots are now much better at ziplining out of base. Players will no longer be attacked by nearby Neutrals when attacking the Sinner's Sacrifice in Sandbox. Improvements to camera change on rope climb ejection. Added sounds for Patron transforming to weakened state. Added Patron shock attack sound when in weakened state. Adjusted Walker audio mix for greater threat perception when enemy and less threat when ally. Improved Guardian activate sound to trigger less often between attacks. Updated zipline audio mix so allies and enemies using ziplines are more audible. Improved footstep audio sync across all heroes. Improved animation audio coverage across all heroes. Updated audio mix between footsteps and movement across all heroes. New footstep material sweetener sounds, increased overall volume. Added more match start conversations. Match start conversations are now cancelled by higher priority lines (like ping lines), regardless of which hero is talking. Fixed match start conversations to handle game pauses correctly. Voice lines that fire when an objective is denied will only be played for those close to the objective. Removed shop music in hero test. Updated weapon initial reflection acoustics model. Damage audio feedback scales with \"falloff\" - it will be more quiet when damage is least effective. Lowered and shortened headshot damage audio. Removed some mix settings that were lowering player weapon when receiving damage. Added support to play weapon fire from muzzle location. Technical groundwork to change sound effects based on surface materials for things like footsteps and bullets with some meaningful performance savings. Added unique surface impacts for bullets for various materials. Technical groundwork to unify weapon sound and continue reducing fatigue, includes some additional support to include per-weapon low ammo sounds and acoustics. Remastered several characters' weapon fire sounds using the new feature set (Wraith, Dynamo, Calico, and Abrams). Improved bullet whizby audio detection. Ensured technical parity between automatic and animation-driven footstep systems. Match Start conversations now have a 50% chance of firing - this reduces repetition as well gives the patron a chance to speak individually to a hero. Match Start conversation timings have been adjusted to make them flow faster and more naturally. Match Start conversations will no longer partially fire, so if content has not been recorded you won't hear the start of a conversation then no follow-up. Green lane is once again referred to as Greenwich by heroes. Added a new Ping for \"leaving the area\" for most heroes. Adjusted Patron VO frequency when leveling up so they're a little less chatty. Fixed several issues with heroes referring to other heroes with outdated names or not saying their name at all. Updated Shopkeeper VO - minor update that adds a few new interactions. Turned off/on a handful of stray VO lines to have things be more in line with current iteration of abilities (for instance Holliday no longer says \"armor's not going to save you\", when in fact, armor could save you). Increased volume for hero effort VO sounds (jumping, dashing, mantling). Teammates' pain VO will receive a volume boost when their health gets below a certain threshold. Changed Hero Death VO to be directional. Items now show Spirit Scaling when alt is pressed. General visual pass to minimap in concert with map changes to improve its read and usability. Objective icons and lanes on minimap have been adjusted for visual and functional clarity. New lower \"basement\" level texture was added to minimap when players traverse into deeper parts of the map. All keyboard/controller button glyphs have been unified into a common UI element. Keyboard, Mouse, and Button bind stylings have improved, especially in the case of \"inline\" bindings. When an action is not bound to any key button, there is a symbol in its place. When an ability or active item button is pressed during cooldown, the related element will shake and glow red briefly. Updated and improved search functionality in the shop. The cooldown alert message has been removed, but alert messages related to Charges, Silences, etc. remain. Objective healthbars now only show for the Patron, Shrines, and Midboss. When stunned or disarmed the reticle now changes state and displays a duration meter. Hiding gun disarmed FX and generic disarm particles since the reticle communicates the disarmed state. Added overhead indicators for disarm abilities. Don't show cooldowns on ability icons for the imbue popup. Reordered ping wheel messages with lanes so the order matches the left to right order of the lanes. Simplified and reworked the menu when you hit ESC while in-game. Deadlock loading screens can now animate and show other controls. Added charge-up icon and entry in labels in the same way we have cooldowns for items. Added \"unstoppable\" as a status effect to show in tooltips. The ultimate icons on the team's bar at the top of the HUD have been updated. Added UI indication when an item is upgradeable in the shop (when you already have a component for an item). Added purchase messages in the chat feed for T3 and T4 items that allies or enemies purchase. Added a corner cap on items in inventory/scoreboard/etc to replace the old tier indicators and give better tree recognition. Disabled low/mid health label under crosshair. Made it so scaling values below 0.5 shows 2 decimals instead of 1. Hovering items in the damage report now shows tooltip for that item. Sinner's Sacrifice bonuses now appear faster. Added a UI state when Stamina is disabled with a debuff. Top bar now uses the new vertical bar graphs. Charge-up items (Mystic Burst, Tankbuster, QSR, Ethereal Bullets) now show 'cooldown' timing clock on icon while they are charging up. When charge-up items are fully charged the HUD icon at center will show just like items that are refreshed on cooldown. Renamed \"Move Speed Resist\" to \"Slow Resist\". Items in your HUD are organized by cheapest to most expensive from left to right. Base Guardians now share a single Icon / HP pool on Minimap. Patron now shows an icon for each of its phases. Active items are no longer sorted separately from the rest of the items; all items are now sorted alphabetically. Range and Duration upgrades are now labeled as “Ability Range” and “Ability Duration” tooltip wise, to help with searching in the shop. Added new 'out of combat' run and sprint. New Crouch animations. Improved hipfire animations. Added custom jump catapult animation - an alternate jump animation when using fans and Majestic Leap etc. Refined jump start to be cleaner. Added custom Zipline Boosted loop. Added Zipline swinging animation. Fixed a regression where Abrams' Siphon Life and Shoulder Charge ping VO were swapped. Removed competing camera modifier on Seismic Impact. Fixed camera position on client's ground target not using previews, causing it to be jittery. Hook: Reworked code to reduce mispredicts. Hook: When Bebop hooks a trooper, only Bebop will hear the hook success sound now. Hook: Fixed the hook sometimes not breaking when the target is stuck. Hook: Fixed the target sometimes not being positioned in front of Bebop when Bebop rotated. New updated model and animations. Hero pose ambient VFX added. Reload effects revisions. Fixed announcer match start line to be spoken by the friendly announcer (was randomly picking between friendly and enemy). Various tooltip fixes. Base Bullet Damage spirit power scaling reduced from 0.09 to 0.07. Charged Shot T3 Spirit Power scaling reduced from 1.3 to 1.2. VO remastering pass. Sleep no longer wakes up from damage over time. Catalyst: Projectile no longer slides against geometry. Watcher's Covenant: Fixed not replicating healing from Bullet Lifesteal (it worked with other sources of bullet lifesteal). Base Spirit Resist reduced from 15% to 10%. Bullet Growth reduced from 0.311 to 0.29. Bullet Velocity increased from 590 to 650. No longer has +15% Base Bullet Resist. Now has +1% Spirit Resist per Boon. Mini Turrets: No longer have a 3 second minimum life time.  They now spawn with 60% spirit and bullet resist that decays over 6s. Mini Turrets: T3 duration reduced from +18s to +14s. Tornado: Improved camera animations during ability. VO remastering pass as well as new VO content. Animation for holding and throwing items has been added. Base bullet damage increased from 3.9 to 4.1. VO remastering pass as well as updated ping lines. Minor rework on animation set. Gun: Improved firing effects. Gun: Fixed alt-fire weapon thinking it could zoom. It would try if you held right-click and jumped. Gun: Falloff range reduced from 20m->58m to 18m->52m. New sounds added. Effects revision to show when the item procs. Fixed it not playing the correct cast sound. Now uses charge-up mechanic (recharges its proc strength over its cooldown duration). Updated overhead visual counter. Now stops all momentum on Stun so victims fall straight down. Effects revision at start to make it more apparent. Added metal footstep sweetener sound when Metal Skin is active. Now uses charge-up mechanic. Fixed its fire rate buff not being networked, and therefore not showing up in left-hand panel. New sounds added Now plays a sound every time a stack is gained. Returned Bullets factor in attacker movement and cannot be easily avoided by strafing. Added effect on activation. Fixed item not granting +20% weapon power. Effects revisions for better visibility and separation from other effects. Fixed jittery health numbers in some non-English languages. Adjusted the width of the individual soul count backer in the HUD by language to prevent player soul counts from spilling outside of the bounding box in languages where number formatting and/or length of the abbreviation for thousands results in longer text than English. Applied language-specific width adjustments and padding to the team soul count panel to improve readability. Localized the loading screen. Added localized versions of the Great For New Players screenshot in the new player dialog window. Added localized versions of the the Hero Labs screenshot shown at the hero selection screen. Corrected HUD images containing text that were still showing up in English when playing in Korean. Adjusted font sizing to fix instances of truncated text in the Hero Testing menu in Russian and Indonesian. Enabled resizing of the new player dialog window to fit longer or shorter text appropriately in translation and prevent the \"Got it!\" button from being cut off in languages with longer text. Enabled font scaling on the Imbue and Active tag labels and the Report button to prevent truncation in certain languages. Fixed multiple instances of single character awkwardly wrapping to second line in Japanese. Added localization support for bot hero pings. Fixed the base healing sound sometimes getting stuck on. Fixed items like Suppressor showing fire rate slow deltas for yourself when it's actually applied to the enemy. Fixed crosshairs not always showing the Disarmed state even though you're disarmed. Fixed heroes that have weapon attributes that get scaled by spirit not showing in the deltas for weapon attributes on the mod tooltips. Fixed Move speed on the HUD always showing Sprint speed included even if you weren't sprinting. Fixed hero stats on dashboard page getting updated from the stats in your previous game. Fixed not being able to ping while the game is paused. Fixed issue with hero stats tooltip. For example, Glass Cannon was showing -20 health instead of -20% health when hovering the stat tooltip. Fixed selling items in Sandbox asking if you want to sell for half price. Fixed rare bug causing you to get stuck on a zipline until you manually dismount. Fixed bug causing nearby other players to appear jittery while on a zipline. Fixed issues that were preventing Yamato, Vindicta, and Pocket desperation lines from playing. Fixed corrections when granting ammo via modifier. Fixed Soul Urn Icon not appearing next to enemies on the minimap if they were Team Sapphire. Fixed Shotguns not having their damage properly reduced against Guardians. Fixed abilities and items allowing one to circumvent the max speed cap on players holding the Soul Urn. Fixed an edge case where a player could claim the Rejuvenator while they were also parried on their attack. Fixed some cases of self damage putting zipline usage on Cooldown and/or knocking the player off the zipline. Fixed Debuff Reducer reducing Soul Urn and Unsecured Orbs pickup time. Fixed a bug causing Lash's Ground Strike impact to be too loud and Flog impact to be too quiet when hitting large groups of enemies with each ability. Fixed a bug preventing Dynamo's and Lash's light melee sounds from playing. Fixed a bug causing Holliday's weapon firing sound to be too quiet with sustained firing. Fixed a bug causing Holliday's Crackshot ready sound to play while dead. Fixed a bug preventing ambient cricket sounds from playing. Fixed a bug preventing ambient tree sounds from looping correctly. Fixed a bug causing some looping sounds to occasionally start with a small delay. Fixed a bug causing Lucky Shot's proc sound to play too loud for certain weapon types. Fixed match start zipline conversations being too quiet. Fixed various Bullet Velocity tooltip issues. Fixed Bullet Velocity not working properly when you had multiple sources (it would pick the highest, even if you had a negative source). Fixed Stamina Recovery not showing deltas properly. Fixed crash when clicking \"Take Control\" and there's nothing to control. Fixed Phantom Strike causing infinite gravity during the duration of the debuff. Fix various cases where Magic Carpet would get cancelled if any enemy stepped in to your debuff (IE Viscous Goo, Inferno FlameDash, Ivy Kudzu). Fixed a bug where some item and ability interactions were accidentally being reduced by Debuff Reducer, like Viscous' Ball Stun prevention and some kill trackers. Fix Vindicta flight and Wraith Full Auto spirit damage not working if the enemy has a barrier. Siphon Life Added new animation logic support for Siphon Life and items. Shoulder Charge Base duration increased from 1.2s to 1.4s. T1 is now \"On Hero Collide: +25% Weapon Damage for 8s\". T2 is now \"-12s Cooldown\". T3 is now \"+0.2s Stun Duration and 40% Movement Slow for 4s\". New cycle and pre cast 'goose step'. Added support for shoulder charging while in air. New sounds added for hitting heroes, troopers, and walls. Seismic Impact Radius increased from 9m to 10.5m. Effects revisions. Fixed crash down sound triggering twice. New slam animation. New sounds added for in-air looping sound and descend sound. Exploding Uppercut Fixed missing uppercut hero impact sound. Hyper Beam Effect revisions for projections on vertical surfaces. Fixed damaging enemies through thin walls. Leaping Slash Fixed animation getting stuck when stunned during the ability cast. Kinetic Pulse T1 Fire Rate slow now matches the Move Slow Quantum Entanglement Added small lerp to VFX for the teleport and smoothed out camera transitions. Rejuvenating Aurora Effect revisions to center focus on head. Singularity Updated effects revisions. Increased tick rate, equals out to roughly the same DPS overall, just smoother. Spirit Snare Added physical elements to the AoE visuals. Powder Keg Fixed being able to spawn barrels on the other side of thin walls. Bounce Pad Fixed a bug where bounce pads might force you back to the ground after use. Spirit Lasso Holliday now plays VO when she lands a hit with her lasso as opposed to when she casts her lasso (so she won't say \"shoot them\" if she didn't actually grab anyone). Stone Form Fixed cast sound being delayed and increased its volume. Fixed interaction with air vents and small geo. Air Drop Adjusted visuals to have higher contrast. Ally cast range increased from 8m to 12m. Slow duration reduced from 4s to 3s. Radius reduced from 14m to 12m. Combat Barrier reduced from 200 to 150. Combat Barrier Spirit Power scaling reduced from 2.5 to 1.5. T1 duration reduced from 12s to 8s. T2 Combat Barrier reduced from +300 to +200. T3 Silence reduced from 4.5s to 3s. Ice Path Reduced how sticky the Ice Path is for allies. Arctic Beam Fixed damaging enemies through thin walls. Life Drain You're now only slowed when Life Drain is damaging a target. Ground Strike Spirit scaling reduced from 0.05 to 0.04. Fixed a bug that caused Ground Strike to push the victim under the world. Flog Updated ability icon. Death Slam UI lock-on revisions to simplify readability. Fixed channel effect on Death Slam to not disappear prematurely. New sounds added for lock-on success sounds, in-air looping sound, victim impact sounds, and a 'miss' sound when Lash does not successfully grab anybody or cancels the ability early. Mini Turret Updated DPS tooltip to properly reflect the correct number. Updated ambient, tracer, and muzzle flash effects. Medicinal Specter Effects revisions and improvements. Fixed audio buildup when multiple characters are being healed by Medicinal Specter at once. Now provides +15% Stamina Regen. T3 reduced from 4% to 3.5%. Spectral Wall Fixed missing sound as it travels before deploy. The last 2 segments on the left/right sides of Spectral Wall will now turn towards a nearby wall if there is one. Duration reduced from 5s to 4.5s. Cooldown increased from 46s to 50s. T2 reduced from -22s to -20s. T3 reduced from 1s Stun to 0.75s. Heavy Barrage Projectile and ambient effects revisions. Now allows full movement while channeling the ability. Fixed a bug where the Camera would not zoom out during the ability if user setting was set to QuickCast. Now slows your dash usage by 35%. Damage per rocket reduced from 30 to 23. Minimum distance increased from 7m to 9m. Cooldown increased from 140s to 150s. Spirit power scaling reduced from 0.35 to 0.25. T3 damage per rocket reduced from +30 to +25. T3 now also increases spirit scaling by 0.1. Scorn Heal reduced from 1.3x to 1.2x. Burrow T2 reduced from +100 Damage to +80. Sand Blast Projectile no longer slides against geometry. No longer deals damage. Combo Bonus health on kill/assist reduced from +70 to +50. Affliction No longer removed by Debuff Remover (as this item no longer removes ultimate effects). Duration reduced from 18s to 14s. DPS increased from 10 to 30. Initial damage reduced from 18% to 10%. T2 now increases duration by +4s. T2 Healing Reduction reduced from -50% to -40%. T3 no longer has % Current HP damage. T3 increased from +10 DPS to +20 DPS. T3 range increased from +5m to +6m. Static Charge Can no longer be self cast. Killing Blow Threshold reduced from 22% to 20%. T2 threshold reduced from +6% to +5%. Vexing Bolt Redirect telegraphs correctly on vertical geometry. Rabbit Hex Fixed a bug where Henry and Savannah wouldn't play VO when turning enemies into rabbits. Assassinate Fixed Vindicta Assassinate zoom in sound triggering twice. Puddle Punch Fix a bug where Puddle Punch would sometimes not deal damage when the target was very close to a wall. Goo Ball Cooldown increased from 95s to 105s. Fixed it knocking back heroes with Unstoppable state. Petrifying Bola Debuff effect revisions to help identify targets better. Adjusted the volume of direct hits and explosion sounds. Telekinesis Revisions to debuff effect."
``

# General Changes

[[!:https://clan.akamai.steamstatic.com/images/45164767/0908b05b0e83747ca99a9337d401daf3a662f85d.png]]((store.steampowered))
- Full shop rework, including many new items.
- Item slots are now all universal, rather than tree specific.
- Total slot count reduced from 16 to 12.
- Item costs are now discounted when you own the component.
- New artwork for all item icons.
- Reworked how tier bonuses work in the shop. They are no longer based on each item you buy, but instead based on your total spend in a tree. Bonuses are not linear (maxing out one tree fully isn't optimal bonus-wise).
- Various item names have been changed.
- Items now glow when there is an upgrade you can buy.
- The Build Browser has been reworked and is now its own fullscreen UI.
- Added a "Create Build" button when hovering over a player in post-game. This will create a local unpublished build based on the items the player purchased in that match (including imbue targets and the order in which items were sold).
- Added a new feature: build tags. Build tags are a way to compactly describe the theme of a build. A tag has an icon and a description, and you can assign 3 tags to a build (they don't have to be unique). There are a small number of initial "standard" tags such as Weapon/Spirit/Vitality, but also things like level of complexity, whether the build is melee focused, etc. In addition to the standard build tags, the ability icons of the hero, and icons of items included in a build can also be used as tags.
- Published builds that don't yet have tags will not show up in the public results in the build browser.
- Added the ability to specify a suggested imbue target for items in a build. When using Quickbuy this will be automatically selected. When purchasing normally, the suggested ability will be highlighted in the imbue popup.
- Added the ability to specify a sell priority value (0-100) for items in a build. When using Quickbuy, if you are out of slots, and you own an item with a sell priority, that item will automatically be sold to make room for your next purchase.
- Build Categories can now be marked as Optional, which show up differently in the build UI and will not be added to Quickbuy when queuing a build.
- You can now highlight both items and categories in the build editor, with a dedicated section on the left to edit the properties of the current selection (this replaces right-click context menus to update things like annotation notes and imbue targets).
- You can remove items from a build by dragging them outside of the category UI.
- Added a new larger Quickbuy queue UI adjacent to the shop that lets you remove and reorder items in the queue.
- Added buttons to queue your entire build and to clear your Quickbuy queue.
- The default Quickbuy hotkey has been changed from 'Shift+B' to 'G'.
- Added an option to always queue your selected build at the start of a match.
- Fixed several bugs that would cause Quickbuy purchases to fail.
- New base design.
- Amber side early development pass at industrial exterior.
- Sapphire side early development pass at museum exterior.
- Interior shape changed to round with a high domed ceiling (both sides using the same interior temporarily).
- Added Patron Throne that moves down into the ground to form the final Patron area.
- Two ventilation tunnels from the player spawn to the final Patron area combined into a single tunnel.
- Shrines moved back closer to the player spawn area and pushed into alcoves.
- Hallways along the Mid Lane entrance to the base changed to rooms with ropes leading up to the high ground.
- Side passages from player spawn area to the Shrines changed to curved stairs.
- Increased areas in front of the Mid Lane base entrances.
- Added Juke Closets in between base entrances on the interior side.
- Lowered buildings on the corners of the area that have access to Mid Boss.
- Extended the rope from Mid Boss to the rooftop of these newly lowered buildings.
- Redesigned Boutique.
- Expanded the rooftop all the way back to the wall.
- Raised building separating the Boutique and the base.
- Continuous interior from jungle area to the walker.
- Stairs dip down into the building.
- Added high building archway behind the Walker.
- Increased the window size in the covered hallway in between the Walker and the jungle areas.
- Removed the Skybridges just below the ziplines from the base side.
- Removed the Pedestrian bridge in between the Walker and the Guardian.
- Reduced width of the street coming from the Guardian.
- Added catwalk on the defender side to connect to the catwalk behind the Walker.
- Added an awning in front of the Cultural Center.
- Changed the Cultural Center interior path to go to the defender side catwalk.
- Removed the high ground side entrance to the interior hallway on the outside of the lane.
- Centered the bounce pad coming out of the interior hallway in between the Walker and the Guardian.
- Added a rope to access the roof from the jungle side.
- Removed wall shrubs on the jungle side.
- Removed the zap triggers on that rooftop.
- Added breakables on the roof.
- Lowered the tower building in the jungle area across from the connection area.
- Lowered rooftop of the Clinic/Law Office (building next to the Bear/Bull statues).
- Connected the rooftop of the Clinic/Law Office to the lowered roof leading to Mid Lane.
- Lowered one side of the building beside the Fish Market/Nursery.
- Added Juke Closet off the lowered rooftop.
- Added breakables to all newly lowered rooftops.
- Moved and rotated delivery trucks separating neutral camps.
- Increased size of doorways of Juke Closets.
- Wooden crates replaced with new design and shader.
- Skybridges
- Pedestrian Bridges (old Power Up bridges)
- Department Store
- Chapel
- Bell Tower
- Apartment Complex
- Speakeasy
- Gallery
- Interiors
- Broadway Storefronts
- Nightclub
- Theater
- Increased size of all doorways entering interior spaces.
- Removed the veils below the old Power-Up bridges.
- Removed the sign on the top of the Theater.
- Added collision to the chimney pipes.
- Raised interior ceiling of Radio Station/Apartment Complex on outer lanes next to the T1 Shops.
- Removed the columns in the interiors of the Radio Station/Apartment.
- Added lights to the Radio Station/Apartment interiors.
- Removed veil at the front of Dept Store/New York Oracle.
- Players gain back ammo when claiming an Orb.
- Improved reliability of soul orb claims when experiencing momentary packet loss or latency.
- Reworked visual effects to more clearly communicate when they are claimable or expiring.
- Reworked client feedback when shooting a soul orb prior to being awarded the souls.
- Soul orbs no longer automatically claim when colliding with the world.
- Improved unit targeting logic.
- Networking: Add method to smooth player jitter that may result from non-ideal networking conditions.
- Fixed jittery motion for various in-world UI elements, such as targeting and ziplines.
- Improve fairness in hit registration between high and low ping players during ability use and when shooting troopers.
- Fixed rare bug that would cause melee hits to have an incorrect range on the server.
- Fixed various scenarios causing networking-related jitter when climbing ropes.
- Reduced jitter from mispredictions while ziplining near another player.
- Fixed issues with mispredicting (and bad stuttering) when going around corners on zipline.
- Air Acceleration has been increased to improve Wall Jump controls, but only while moving at lower speeds.
- Wall Jump launch has different kick away speed from the wall based on whether you're pushing your movement direction toward, away, or neutral.
- Fixed cases where it was impossible to Mantle Ledges to the left or right of your Wall Jump direction, just after a Wall Jump.
- Fixed/improved control over air dashes just after a Wall Jump.
- Wall Jump fatigue affects the vertical launch only, and recovers at 1.25s instead of 2s. This should encourage long lateral leaps, while keeping chimneying in check.
- Fixed a bug where using Melee on the ground triggered Wall Jump fatigue.
- Wall detection for wall jumps now takes into account all walls in a small radius around the player, not just the last wall touched.
- Changes to Wall Jump behavior have reduced the effectiveness of "Corner Boosting" a bit.
- While Wall Sliding, terminal velocity is in effect (for vertical speeds only). At -600u/s gravity is cancelled out.
- Mantle Glide: Holding Crouch or Crouch Toggle while exiting a Mantle creates a small speed boost, allowing you to slide out of mantles.
- Various Fixes for camera positions when characters push the camera into the ceiling in special cases ( Vindicta & Abrams' Ults ).
- Characters, Guardians, Walkers and Shrines will fade to a minimum transparency as they get too close to the camera.
- Soft Camera Collision: As you move, the camera anticipates walls approaching from behind and to the right of your character resulting in less sudden jolts, and smooth near/far camera paths when turning in constricted spaces.
- Changing the third flex slot unlock from killing all Walkers to killing two Walkers.
- Changing last flex slot from base guardians and shrine to just base guardians.
- Players now start with 400 souls.
- Adjusted the boon reward schedule and added some more levels.
- You now also gain Spirit per boon.  Adjusted Spirit on various abilities and items to compensate.
- All hero stats rebalanced alongside the shop rework.
- Adjusted objective health values (as part of damage value changes in the shop).
- Shields have been reworked and are now called Barriers. They are no longer multiple damage types. They also interact normally with resistances now.
- Hero kill comeback values reduced by 15%.
- The losing team now gains up to 25% more souls from troopers, neutrals, vaults, and objectives, based on how behind they are (peaks at 20% max networth delta). First 3k in networth difference is ignored.
- Zipline Boost speed reduced from 130% to 80%.
- Zipline Boost cooldown increased from 280s to 360s.
- Zipline now glows in the world when there is a zipline-boosted player on it.
- Zipline Walker nodes adjusted.  When Walker is contested, the last active defending zipline node is now behind the Walker instead of right on top of it.
- Zipline dismount momentum reduced slightly.
- Trooper bounty split from 100/60/35/25/20/16% to 100/60/30/20/15/11 (less effective economy as a large group).
- Side Walkers' HP relative to Mid Walkers HP changed from -22% HP to -40%.
- Decreased the height of Walkers' Stomp ability from 9m to 6m.
- Backdoor protection range check increased by 5m for Walkers and 10m for Base Objectives.
- Distance to attack walkers increased from 32.5 to 35.
- Powerups Now spawn at 5 minutes instead of 10 minutes.
- Breakables now spawn at 2 minutes instead of 3 minutes (they still respawn every 3 minutes).
- Soul Breakables chance increased from 50% to 60%.
- Golden Statue breakables chance increased from 40% to 50%.
- Minimap now shows what kind of powerup is spawned.
- Teleporters now start available at the beginning of the game, rather than at 8 minutes.
- Walkers Resistance based on nearby enemies increased from 0/8/16/24/32/40% to 0/0/20/30/40/50%.
- Bullet and Spirit Resistance for being near Walker value reduced from 25% to 15%.
- Bullet and Spirit Resistance for being near Walker radius reduced from 35.5m to 32m.
- Neutral bounties increased by 6%.
- Healing area turrets' damage increased by 20%.
- Base trooper bounty reduced from 144 to 132
- Powerup Gun: Min Fire Rate reduced from 15% to 12%.
- Powerup Gun: Min Ammo reduced from 30% to 20%.
- Powerup Survival: Min Health reduced from 250 to 200.
- Powerup Survival: Min regen reduced from 0.75% to 0.5%.
- Powerup Casting: Min Spirit Power reduced from 20 to 15.
- Powerup Casting: Min CD Reduction reduced from 15% to 12%.
- Powerup Movement: Min Sprint reduced from 2m to 1.5m.
- Powerups now start scaling up from 5 min rather than from 10 min.
- Debuff Resistance now stacks diminishingly.
- Increased Dash Slow cap from -40% to -50%.
- Upgraded items now share the cooldown of the consumed item (i.e. using Healing Rite before upgrading to Healing Nova no longer resets the cooldown).
- Updated all default builds.
- Net Worth display shows decimals until 10k (instead of only until 5k).
- Updated all targeting in game with new visuals to be consistent for positive targeting AOEs.
- Troopers are visible through walls during the laning phase. Replaces the HUD element showing trooper icon and health.
- Ally health bars visible through walls in addition to X-ray.
- Nearby creep X-rays also visible through walls.
- Added outlines to hero shader.
- Minor update to the "Get Started" tutorial videos to reflect the three lanes and removal of trooper last hits.
- Corrected name of Temple Guardian in the damage report where it was appearing as Mid Boss.
- Added a tooltip to explain the secondary build search language option in Settings.
- Aligned labels of in-world pickup item labels with the corresponding modifiers so the HUD text that appears after picking up an item uses consistent terminology.
- Shrines are now navigation blockers, discouraging troopers from walking through and into them.
- Majestic Leap, Warp Stone, and Phantom Strike can now properly be cast while climbing ropes.
- Sinclair's Spectral Assistant teleport follow-up can now properly be cast while climbing ropes.
- Bots will change their mind less frequently when considering retreating due to low health.
- Bots now use ziplines when returning to base to heal.
- Bots are now much better at ziplining out of base.
- Players will no longer be attacked by nearby Neutrals when attacking the Sinner's Sacrifice in Sandbox.
- Improvements to camera change on rope climb ejection.
- Added sounds for Patron transforming to weakened state.
- Added Patron shock attack sound when in weakened state.
- Adjusted Walker audio mix for greater threat perception when enemy and less threat when ally.
- Improved Guardian activate sound to trigger less often between attacks.
- Updated zipline audio mix so allies and enemies using ziplines are more audible.
- Improved footstep audio sync across all heroes.
- Improved animation audio coverage across all heroes.
- Updated audio mix between footsteps and movement across all heroes.
- New footstep material sweetener sounds, increased overall volume.
- Added more match start conversations.
- Match start conversations are now cancelled by higher priority lines (like ping lines), regardless of which hero is talking.
- Fixed match start conversations to handle game pauses correctly.
- Voice lines that fire when an objective is denied will only be played for those close to the objective.
- Removed shop music in hero test.
- Updated weapon initial reflection acoustics model.
- Damage audio feedback scales with "falloff" - it will be more quiet when damage is least effective.
- Lowered and shortened headshot damage audio.
- Removed some mix settings that were lowering player weapon when receiving damage.
- Added support to play weapon fire from muzzle location.
- Technical groundwork to change sound effects based on surface materials for things like footsteps and bullets with some meaningful performance savings.
- Added unique surface impacts for bullets for various materials.
- Technical groundwork to unify weapon sound and continue reducing fatigue, includes some additional support to include per-weapon low ammo sounds and acoustics.
- Remastered several characters' weapon fire sounds using the new feature set (Wraith, Dynamo, Calico, and Abrams).
- Improved bullet whizby audio detection.
- Ensured technical parity between automatic and animation-driven footstep systems.
- Match Start conversations now have a 50% chance of firing - this reduces repetition as well gives the patron a chance to speak individually to a hero.
- Match Start conversation timings have been adjusted to make them flow faster and more naturally.
- Match Start conversations will no longer partially fire, so if content has not been recorded you won't hear the start of a conversation then no follow-up.
- Green lane is once again referred to as Greenwich by heroes.
- Added a new Ping for "leaving the area" for most heroes.
- Adjusted Patron VO frequency when leveling up so they're a little less chatty.
- Fixed several issues with heroes referring to other heroes with outdated names or not saying their name at all.
- Updated Shopkeeper VO - minor update that adds a few new interactions.
- Turned off/on a handful of stray VO lines to have things be more in line with current iteration of abilities (for instance Holliday no longer says "armor's not going to save you", when in fact, armor could save you).
- Increased volume for hero effort VO sounds (jumping, dashing, mantling).
- Teammates' pain VO will receive a volume boost when their health gets below a certain threshold.
- Changed Hero Death VO to be directional.
- Items now show Spirit Scaling when alt is pressed.
- General visual pass to minimap in concert with map changes to improve its read and usability.
- Objective icons and lanes on minimap have been adjusted for visual and functional clarity.
- New lower "basement" level texture was added to minimap when players traverse into deeper parts of the map.
- All keyboard/controller button glyphs have been unified into a common UI element.
- Keyboard, Mouse, and Button bind stylings have improved, especially in the case of "inline" bindings.
- When an action is not bound to any key button, there is a symbol in its place.
- When an ability or active item button is pressed during cooldown, the related element will shake and glow red briefly.
- Updated and improved search functionality in the shop.
- The cooldown alert message has been removed, but alert messages related to Charges, Silences, etc. remain.
- Objective healthbars now only show for the Patron, Shrines, and Midboss.
- When stunned or disarmed the reticle now changes state and displays a duration meter.
- Hiding gun disarmed FX and generic disarm particles since the reticle communicates the disarmed state.
- Added overhead indicators for disarm abilities.
- Don't show cooldowns on ability icons for the imbue popup.
- Reordered ping wheel messages with lanes so the order matches the left to right order of the lanes.
- Simplified and reworked the menu when you hit ESC while in-game.
- Deadlock loading screens can now animate and show other controls.
- Added charge-up icon and entry in labels in the same way we have cooldowns for items.
- Added "unstoppable" as a status effect to show in tooltips.
- The ultimate icons on the team's bar at the top of the HUD have been updated.
- Added UI indication when an item is upgradeable in the shop (when you already have a component for an item).
- Added purchase messages in the chat feed for T3 and T4 items that allies or enemies purchase.
- Added a corner cap on items in inventory/scoreboard/etc to replace the old tier indicators and give better tree recognition.
- Disabled low/mid health label under crosshair.
- Made it so scaling values below 0.5 shows 2 decimals instead of 1.
- Hovering items in the damage report now shows tooltip for that item.
- Sinner's Sacrifice bonuses now appear faster.
- Added a UI state when Stamina is disabled with a debuff.
- Top bar now uses the new vertical bar graphs.
- Charge-up items (Mystic Burst, Tankbuster, QSR, Ethereal Bullets) now show 'cooldown' timing clock on icon while they are charging up.
- When charge-up items are fully charged the HUD icon at center will show just like items that are refreshed on cooldown.
- Renamed "Move Speed Resist" to "Slow Resist".
- Items in your HUD are organized by cheapest to most expensive from left to right.
- Base Guardians now share a single Icon / HP pool on Minimap.
- Patron now shows an icon for each of its phases.
- Active items are no longer sorted separately from the rest of the items; all items are now sorted alphabetically.
- Range and Duration upgrades are now labeled as “Ability Range” and “Ability Duration” tooltip wise, to help with searching in the shop.
- Added new 'out of combat' run and sprint.
- New Crouch animations.
- Improved hipfire animations.
- Added custom jump catapult animation - an alternate jump animation when using fans and Majestic Leap etc.
- Refined jump start to be cleaner.
- Added custom Zipline Boosted loop.
- Added Zipline swinging animation.
- Fixed a regression where Abrams' Siphon Life and Shoulder Charge ping VO were swapped.
- Removed competing camera modifier on Seismic Impact.
- Fixed camera position on client's ground target not using previews, causing it to be jittery.
- Hook: Reworked code to reduce mispredicts.
- Hook: When Bebop hooks a trooper, only Bebop will hear the hook success sound now.
- Hook: Fixed the hook sometimes not breaking when the target is stuck.
- Hook: Fixed the target sometimes not being positioned in front of Bebop when Bebop rotated.
- New updated model and animations.
- Hero pose ambient VFX added.
- Reload effects revisions.
- Fixed announcer match start line to be spoken by the friendly announcer (was randomly picking between friendly and enemy).
- Various tooltip fixes.
- Base Bullet Damage spirit power scaling reduced from 0.09 to 0.07.
- Charged Shot T3 Spirit Power scaling reduced from 1.3 to 1.2.
- VO remastering pass.
- Sleep no longer wakes up from damage over time.
- Catalyst: Projectile no longer slides against geometry.
- Watcher's Covenant: Fixed not replicating healing from Bullet Lifesteal (it worked with other sources of bullet lifesteal).
- Base Spirit Resist reduced from 15% to 10%.
- Bullet Growth reduced from 0.311 to 0.29.
- Bullet Velocity increased from 590 to 650.
- No longer has +15% Base Bullet Resist.
- Now has +1% Spirit Resist per Boon.
- Mini Turrets: No longer have a 3 second minimum life time.  They now spawn with 60% spirit and bullet resist that decays over 6s.
- Mini Turrets: T3 duration reduced from +18s to +14s.
- Tornado: Improved camera animations during ability.
- VO remastering pass as well as new VO content.
- Animation for holding and throwing items has been added.
- Base bullet damage increased from 3.9 to 4.1.
- VO remastering pass as well as updated ping lines.
- Minor rework on animation set.
- Gun: Improved firing effects.
- Gun: Fixed alt-fire weapon thinking it could zoom. It would try if you held right-click and jumped.
- Gun: Falloff range reduced from 20m->58m to 18m->52m.
- New sounds added.
- Effects revision to show when the item procs.
- Fixed it not playing the correct cast sound.
- Now uses charge-up mechanic (recharges its proc strength over its cooldown duration).
- Updated overhead visual counter.
- Now stops all momentum on Stun so victims fall straight down.
- Effects revision at start to make it more apparent.
- Added metal footstep sweetener sound when Metal Skin is active.
- Now uses charge-up mechanic.
- Fixed its fire rate buff not being networked, and therefore not showing up in left-hand panel.
- New sounds added
- Now plays a sound every time a stack is gained.
- Returned Bullets factor in attacker movement and cannot be easily avoided by strafing.
- Added effect on activation.
- Fixed item not granting +20% weapon power.
- Effects revisions for better visibility and separation from other effects.
- Fixed jittery health numbers in some non-English languages.
- Adjusted the width of the individual soul count backer in the HUD by language to prevent player soul counts from spilling outside of the bounding box in languages where number formatting and/or length of the abbreviation for thousands results in longer text than English.
- Applied language-specific width adjustments and padding to the team soul count panel to improve readability.
- Localized the loading screen.
- Added localized versions of the Great For New Players screenshot in the new player dialog window.
- Added localized versions of the the Hero Labs screenshot shown at the hero selection screen.
- Corrected HUD images containing text that were still showing up in English when playing in Korean.
- Adjusted font sizing to fix instances of truncated text in the Hero Testing menu in Russian and Indonesian.
- Enabled resizing of the new player dialog window to fit longer or shorter text appropriately in translation and prevent the "Got it!" button from being cut off in languages with longer text.
- Enabled font scaling on the Imbue and Active tag labels and the Report button to prevent truncation in certain languages.
- Fixed multiple instances of single character awkwardly wrapping to second line in Japanese.
- Added localization support for bot hero pings.
- Fixed the base healing sound sometimes getting stuck on.
- Fixed items like Suppressor showing fire rate slow deltas for yourself when it's actually applied to the enemy.
- Fixed crosshairs not always showing the Disarmed state even though you're disarmed.
- Fixed heroes that have weapon attributes that get scaled by spirit not showing in the deltas for weapon attributes on the mod tooltips.
- Fixed Move speed on the HUD always showing Sprint speed included even if you weren't sprinting.
- Fixed hero stats on dashboard page getting updated from the stats in your previous game.
- Fixed not being able to ping while the game is paused.
- Fixed issue with hero stats tooltip. For example, Glass Cannon was showing -20 health instead of -20% health when hovering the stat tooltip.
- Fixed selling items in Sandbox asking if you want to sell for half price.
- Fixed rare bug causing you to get stuck on a zipline until you manually dismount.
- Fixed bug causing nearby other players to appear jittery while on a zipline.
- Fixed issues that were preventing Yamato, Vindicta, and Pocket desperation lines from playing.
- Fixed corrections when granting ammo via modifier.
- Fixed Soul Urn Icon not appearing next to enemies on the minimap if they were Team Sapphire.
- Fixed Shotguns not having their damage properly reduced against Guardians.
- Fixed abilities and items allowing one to circumvent the max speed cap on players holding the Soul Urn.
- Fixed an edge case where a player could claim the Rejuvenator while they were also parried on their attack.
- Fixed some cases of self damage putting zipline usage on Cooldown and/or knocking the player off the zipline.
- Fixed Debuff Reducer reducing Soul Urn and Unsecured Orbs pickup time.
- Fixed a bug causing Lash's Ground Strike impact to be too loud and Flog impact to be too quiet when hitting large groups of enemies with each ability.
- Fixed a bug preventing Dynamo's and Lash's light melee sounds from playing.
- Fixed a bug causing Holliday's weapon firing sound to be too quiet with sustained firing.
- Fixed a bug causing Holliday's Crackshot ready sound to play while dead.
- Fixed a bug preventing ambient cricket sounds from playing.
- Fixed a bug preventing ambient tree sounds from looping correctly.
- Fixed a bug causing some looping sounds to occasionally start with a small delay.
- Fixed a bug causing Lucky Shot's proc sound to play too loud for certain weapon types.
- Fixed match start zipline conversations being too quiet.
- Fixed various Bullet Velocity tooltip issues.
- Fixed Bullet Velocity not working properly when you had multiple sources (it would pick the highest, even if you had a negative source).
- Fixed Stamina Recovery not showing deltas properly.
- Fixed crash when clicking "Take Control" and there's nothing to control.
- Fixed Phantom Strike causing infinite gravity during the duration of the debuff.
- Fix various cases where Magic Carpet would get cancelled if any enemy stepped in to your debuff (IE Viscous Goo, Inferno FlameDash, Ivy Kudzu).
- Fixed a bug where some item and ability interactions were accidentally being reduced by Debuff Reducer, like Viscous' Ball Stun prevention and some kill trackers.
- Fix Vindicta flight and Wraith Full Auto spirit damage not working if the enemy has a barrier.

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Affliction", "Air Drop", "Arctic Beam", "Assassinate", "Bounce Pad", "Burrow", "Combo", "Death Slam", "Exploding Uppercut", "Flog", "Goo Ball", "Ground Strike", "Heavy Barrage", "Hyper Beam", "Ice Path", "Killing Blow", "Kinetic Pulse", "Leaping Slash", "Life Drain", "Medicinal Specter", "Mini Turret", "Petrifying Bola", "Powder Keg", "Puddle Punch", "Quantum Entanglement", "Rabbit Hex", "Rejuvenating Aurora", "Sand Blast", "Scorn", "Seismic Impact", "Shoulder Charge", "Singularity", "Siphon Life", "Spectral Wall", "Spirit Lasso", "Spirit Snare", "Static Charge", "Stone Form", "Telekinesis", "Vexing Bolt"]} />
``

=item:affliction:
## Affliction
- No longer removed by Debuff Remover (as this item no longer removes ultimate effects).
- Duration reduced from 18s to 14s.
- DPS increased from 10 to 30.
- Initial damage reduced from 18% to 10%.
- T2 now increases duration by +4s.
- T2 Healing Reduction reduced from -50% to -40%.
- T3 no longer has % Current HP damage.
- T3 increased from +10 DPS to +20 DPS.
- T3 range increased from +5m to +6m.
=

=item:air-drop:
## Air Drop
- Adjusted visuals to have higher contrast.
- Ally cast range increased from 8m to 12m.
- Slow duration reduced from 4s to 3s.
- Radius reduced from 14m to 12m.
- Combat Barrier reduced from 200 to 150.
- Combat Barrier Spirit Power scaling reduced from 2.5 to 1.5.
- T1 duration reduced from 12s to 8s.
- T2 Combat Barrier reduced from +300 to +200.
- T3 Silence reduced from 4.5s to 3s.
=

=item:arctic-beam:
## Arctic Beam
- Fixed damaging enemies through thin walls.
=

=item:assassinate:
## Assassinate
- Fixed Vindicta Assassinate zoom in sound triggering twice.
=

=item:bounce-pad:
## Bounce Pad
- Fixed a bug where bounce pads might force you back to the ground after use.
=

=item:burrow:
## Burrow
- T2 reduced from +100 Damage to +80.
=

=item:combo:
## Combo
- Bonus health on kill/assist reduced from +70 to +50.
=

=item:death-slam:
## Death Slam
- UI lock-on revisions to simplify readability.
- Fixed channel effect on Death Slam to not disappear prematurely.
- New sounds added for lock-on success sounds, in-air looping sound, victim impact sounds, and a 'miss' sound when Lash does not successfully grab anybody or cancels the ability early.
=

=item:exploding-uppercut:
## Exploding Uppercut
- Fixed missing uppercut hero impact sound.
=

=item:flog:
## Flog
- Updated ability icon.
=

=item:goo-ball:
## Goo Ball
- Cooldown increased from 95s to 105s.
- Fixed it knocking back heroes with Unstoppable state.
=

=item:ground-strike:
## Ground Strike
- Spirit scaling reduced from 0.05 to 0.04.
- Fixed a bug that caused Ground Strike to push the victim under the world.
=

=item:heavy-barrage:
## Heavy Barrage
- Projectile and ambient effects revisions.
- Now allows full movement while channeling the ability.
- Fixed a bug where the Camera would not zoom out during the ability if user setting was set to QuickCast.
- Now slows your dash usage by 35%.
- Damage per rocket reduced from 30 to 23.
- Minimum distance increased from 7m to 9m.
- Cooldown increased from 140s to 150s.
- Spirit power scaling reduced from 0.35 to 0.25.
- T3 damage per rocket reduced from +30 to +25.
- T3 now also increases spirit scaling by 0.1.
=

=item:hyper-beam:
## Hyper Beam
- Effect revisions for projections on vertical surfaces.
- Fixed damaging enemies through thin walls.
=

=item:ice-path:
## Ice Path
- Reduced how sticky the Ice Path is for allies.
=

=item:killing-blow:
## Killing Blow
- Threshold reduced from 22% to 20%.
- T2 threshold reduced from +6% to +5%.
=

=item:kinetic-pulse:
## Kinetic Pulse
- T1 Fire Rate slow now matches the Move Slow
=

=item:leaping-slash:
## Leaping Slash
- Fixed animation getting stuck when stunned during the ability cast.
=

=item:life-drain:
## Life Drain
- You're now only slowed when Life Drain is damaging a target.
=

=item:medicinal-specter:
## Medicinal Specter
- Effects revisions and improvements.
- Fixed audio buildup when multiple characters are being healed by Medicinal Specter at once.
- Now provides +15% Stamina Regen.
- T3 reduced from 4% to 3.5%.
=

=item:mini-turret:
## Mini Turret
- Updated DPS tooltip to properly reflect the correct number.
- Updated ambient, tracer, and muzzle flash effects.
=

=item:petrifying-bola:
## Petrifying Bola
- Debuff effect revisions to help identify targets better.
- Adjusted the volume of direct hits and explosion sounds.
=

=item:powder-keg:
## Powder Keg
- Fixed being able to spawn barrels on the other side of thin walls.
=

=item:puddle-punch:
## Puddle Punch
- Fix a bug where Puddle Punch would sometimes not deal damage when the target was very close to a wall.
=

=item:quantum-entanglement:
## Quantum Entanglement
- Added small lerp to VFX for the teleport and smoothed out camera transitions.
=

=item:rabbit-hex:
## Rabbit Hex
- Fixed a bug where Henry and Savannah wouldn't play VO when turning enemies into rabbits.
=

=item:rejuvenating-aurora:
## Rejuvenating Aurora
- Effect revisions to center focus on head.
=

=item:sand-blast:
## Sand Blast
- Projectile no longer slides against geometry.
- No longer deals damage.
=

=item:scorn:
## Scorn
- Heal reduced from 1.3x to 1.2x.
=

=item:seismic-impact:
## Seismic Impact
- Radius increased from 9m to 10.5m.
- Effects revisions.
- Fixed crash down sound triggering twice.
- New slam animation.
- New sounds added for in-air looping sound and descend sound.
=

=item:shoulder-charge:
## Shoulder Charge
- Base duration increased from 1.2s to 1.4s.
- T1 is now "On Hero Collide: +25% Weapon Damage for 8s".
- T2 is now "-12s Cooldown".
- T3 is now "+0.2s Stun Duration and 40% Movement Slow for 4s".
- New cycle and pre cast 'goose step'.
- Added support for shoulder charging while in air.
- New sounds added for hitting heroes, troopers, and walls.
=

=item:singularity:
## Singularity
- Updated effects revisions.
- Increased tick rate, equals out to roughly the same DPS overall, just smoother.
=

=item:siphon-life:
## Siphon Life
- Added new animation logic support for Siphon Life and items.
=

=item:spectral-wall:
## Spectral Wall
- Fixed missing sound as it travels before deploy.
- The last 2 segments on the left/right sides of Spectral Wall will now turn towards a nearby wall if there is one.
- Duration reduced from 5s to 4.5s.
- Cooldown increased from 46s to 50s.
- T2 reduced from -22s to -20s.
- T3 reduced from 1s Stun to 0.75s.
=

=item:spirit-lasso:
## Spirit Lasso
- Holliday now plays VO when she lands a hit with her lasso as opposed to when she casts her lasso (so she won't say "shoot them" if she didn't actually grab anyone).
=

=item:spirit-snare:
## Spirit Snare
- Added physical elements to the AoE visuals.
=

=item:static-charge:
## Static Charge
- Can no longer be self cast.
=

=item:stone-form:
## Stone Form
- Fixed cast sound being delayed and increased its volume.
- Fixed interaction with air vents and small geo.
=

=item:telekinesis:
## Telekinesis
- Revisions to debuff effect.
=

=item:vexing-bolt:
## Vexing Bolt
- Redirect telegraphs correctly on vertical geometry.
=