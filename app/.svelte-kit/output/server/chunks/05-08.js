import { m as html } from './server2.js';
import './changelog.js';
import './MethodNote.js';
/* empty css                      */
import {
	a as MogEntityContext,
	i as MogPreviousChange,
	n as SectionPreview
} from './VideoLink.js';
//#region changelogs/2025/05-08.mg?embed=0
function _5_08_mg$1($$renderer) {
	SectionPreview($$renderer, {
		type: 'item',
		names: [
			'Affliction',
			'Air Drop',
			'Arctic Beam',
			'Assassinate',
			'Bounce Pad',
			'Burrow',
			'Combo',
			'Death Slam',
			'Exploding Uppercut',
			'Flog',
			'Goo Ball',
			'Ground Strike',
			'Heavy Barrage',
			'Hyper Beam',
			'Ice Path',
			'Killing Blow',
			'Kinetic Pulse',
			'Leaping Slash',
			'Life Drain',
			'Medicinal Specter',
			'Mini Turret',
			'Petrifying Bola',
			'Powder Keg',
			'Puddle Punch',
			'Quantum Entanglement',
			'Rabbit Hex',
			'Rejuvenating Aurora',
			'Sand Blast',
			'Scorn',
			'Seismic Impact',
			'Shoulder Charge',
			'Singularity',
			'Siphon Life',
			'Spectral Wall',
			'Spirit Lasso',
			'Spirit Snare',
			'Static Charge',
			'Stone Form',
			'Telekinesis',
			'Vexing Bolt'
		]
	});
}
//#endregion
//#region changelogs/2025/05-08.mg
var metadata = {
	title: 'Shop Rework Update',
	thread_id: '63133',
	steam_gid: '1799088287841594',
	published: '2025-05-08T19:33:12.000Z',
	author: 'mystery *******',
	author_image: '/assets/authors/deadlock.webp',
	major_update: false,
	content_text:
		"Full shop rework, including many new items. Item slots are now all universal, rather than tree specific. Total slot count reduced from 16 to 12. Item costs are now discounted when you own the component. New artwork for all item icons. Reworked how tier bonuses work in the shop. They are no longer based on each item you buy, but instead based on your total spend in a tree. Bonuses are not linear (maxing out one tree fully isn't optimal bonus-wise). Various item names have been changed. Items now glow when there is an upgrade you can buy. The Build Browser has been reworked and is now its own fullscreen UI. Added a \"Create Build\" button when hovering over a player in post-game. This will create a local unpublished build based on the items the player purchased in that match (including imbue targets and the order in which items were sold). Added a new feature: build tags. Build tags are a way to compactly describe the theme of a build. A tag has an icon and a description, and you can assign 3 tags to a build (they don't have to be unique). There are a small number of initial \"standard\" tags such as Weapon/Spirit/Vitality, but also things like level of complexity, whether the build is melee focused, etc. In addition to the standard build tags, the ability icons of the hero, and icons of items included in a build can also be used as tags. Published builds that don't yet have tags will not show up in the public results in the build browser. Added the ability to specify a suggested imbue target for items in a build. When using Quickbuy this will be automatically selected. When purchasing normally, the suggested ability will be highlighted in the imbue popup. Added the ability to specify a sell priority value (0-100) for items in a build. When using Quickbuy, if you are out of slots, and you own an item with a sell priority, that item will automatically be sold to make room for your next purchase. Build Categories can now be marked as Optional, which show up differently in the build UI and will not be added to Quickbuy when queuing a build. You can now highlight both items and categories in the build editor, with a dedicated section on the left to edit the properties of the current selection (this replaces right-click context menus to update things like annotation notes and imbue targets). You can remove items from a build by dragging them outside of the category UI. Added a new larger Quickbuy queue UI adjacent to the shop that lets you remove and reorder items in the queue. Added buttons to queue your entire build and to clear your Quickbuy queue. The default Quickbuy hotkey has been changed from 'Shift+B' to 'G'. Added an option to always queue your selected build at the start of a match. Fixed several bugs that would cause Quickbuy purchases to fail. New base design. Amber side early development pass at industrial exterior. Sapphire side early development pass at museum exterior. Interior shape changed to round with a high domed ceiling (both sides using the same interior temporarily). Added Patron Throne that moves down into the ground to form the final Patron area. Two ventilation tunnels from the player spawn to the final Patron area combined into a single tunnel. Shrines moved back closer to the player spawn area and pushed into alcoves. Hallways along the Mid Lane entrance to the base changed to rooms with ropes leading up to the high ground. Side passages from player spawn area to the Shrines changed to curved stairs. Increased areas in front of the Mid Lane base entrances. Added Juke Closets in between base entrances on the interior side. Lowered buildings on the corners of the area that have access to Mid Boss. Extended the rope from Mid Boss to the rooftop of these newly lowered buildings. Redesigned Boutique. Expanded the rooftop all the way back to the wall. Raised building separating the Boutique and the base. Continuous interior from jungle area to the walker. Stairs dip down into the building. Added high building archway behind the Walker. Increased the window size in the covered hallway in between the Walker and the jungle areas. Removed the Skybridges just below the ziplines from the base side. Removed the Pedestrian bridge in between the Walker and the Guardian. Reduced width of the street coming from the Guardian. Added catwalk on the defender side to connect to the catwalk behind the Walker. Added an awning in front of the Cultural Center. Changed the Cultural Center interior path to go to the defender side catwalk. Removed the high ground side entrance to the interior hallway on the outside of the lane. Centered the bounce pad coming out of the interior hallway in between the Walker and the Guardian. Added a rope to access the roof from the jungle side. Removed wall shrubs on the jungle side. Removed the zap triggers on that rooftop. Added breakables on the roof. Lowered the tower building in the jungle area across from the connection area. Lowered rooftop of the Clinic/Law Office (building next to the Bear/Bull statues). Connected the rooftop of the Clinic/Law Office to the lowered roof leading to Mid Lane. Lowered one side of the building beside the Fish Market/Nursery. Added Juke Closet off the lowered rooftop. Added breakables to all newly lowered rooftops. Moved and rotated delivery trucks separating neutral camps. Increased size of doorways of Juke Closets. Wooden crates replaced with new design and shader. Skybridges Pedestrian Bridges (old Power Up bridges) Department Store Chapel Bell Tower Apartment Complex Speakeasy Gallery Interiors Broadway Storefronts Nightclub Theater Increased size of all doorways entering interior spaces. Removed the veils below the old Power-Up bridges. Removed the sign on the top of the Theater. Added collision to the chimney pipes. Raised interior ceiling of Radio Station/Apartment Complex on outer lanes next to the T1 Shops. Removed the columns in the interiors of the Radio Station/Apartment. Added lights to the Radio Station/Apartment interiors. Removed veil at the front of Dept Store/New York Oracle. Players gain back ammo when claiming an Orb. Improved reliability of soul orb claims when experiencing momentary packet loss or latency. Reworked visual effects to more clearly communicate when they are claimable or expiring. Reworked client feedback when shooting a soul orb prior to being awarded the souls. Soul orbs no longer automatically claim when colliding with the world. Improved unit targeting logic. Networking: Add method to smooth player jitter that may result from non-ideal networking conditions. Fixed jittery motion for various in-world UI elements, such as targeting and ziplines. Improve fairness in hit registration between high and low ping players during ability use and when shooting troopers. Fixed rare bug that would cause melee hits to have an incorrect range on the server. Fixed various scenarios causing networking-related jitter when climbing ropes. Reduced jitter from mispredictions while ziplining near another player. Fixed issues with mispredicting (and bad stuttering) when going around corners on zipline. Air Acceleration has been increased to improve Wall Jump controls, but only while moving at lower speeds. Wall Jump launch has different kick away speed from the wall based on whether you're pushing your movement direction toward, away, or neutral. Fixed cases where it was impossible to Mantle Ledges to the left or right of your Wall Jump direction, just after a Wall Jump. Fixed/improved control over air dashes just after a Wall Jump. Wall Jump fatigue affects the vertical launch only, and recovers at 1.25s instead of 2s. This should encourage long lateral leaps, while keeping chimneying in check. Fixed a bug where using Melee on the ground triggered Wall Jump fatigue. Wall detection for wall jumps now takes into account all walls in a small radius around the player, not just the last wall touched. Changes to Wall Jump behavior have reduced the effectiveness of \"Corner Boosting\" a bit. While Wall Sliding, terminal velocity is in effect (for vertical speeds only). At -600u/s gravity is cancelled out. Mantle Glide: Holding Crouch or Crouch Toggle while exiting a Mantle creates a small speed boost, allowing you to slide out of mantles. Various Fixes for camera positions when characters push the camera into the ceiling in special cases ( Vindicta & Abrams' Ults ). Characters, Guardians, Walkers and Shrines will fade to a minimum transparency as they get too close to the camera. Soft Camera Collision: As you move, the camera anticipates walls approaching from behind and to the right of your character resulting in less sudden jolts, and smooth near/far camera paths when turning in constricted spaces. Changing the third flex slot unlock from killing all Walkers to killing two Walkers. Changing last flex slot from base guardians and shrine to just base guardians. Players now start with 400 souls. Adjusted the boon reward schedule and added some more levels. You now also gain Spirit per boon.  Adjusted Spirit on various abilities and items to compensate. All hero stats rebalanced alongside the shop rework. Adjusted objective health values (as part of damage value changes in the shop). Shields have been reworked and are now called Barriers. They are no longer multiple damage types. They also interact normally with resistances now. Hero kill comeback values reduced by 15%. The losing team now gains up to 25% more souls from troopers, neutrals, vaults, and objectives, based on how behind they are (peaks at 20% max networth delta). First 3k in networth difference is ignored. Zipline Boost speed reduced from 130% to 80%. Zipline Boost cooldown increased from 280s to 360s. Zipline now glows in the world when there is a zipline-boosted player on it. Zipline Walker nodes adjusted.  When Walker is contested, the last active defending zipline node is now behind the Walker instead of right on top of it. Zipline dismount momentum reduced slightly. Trooper bounty split from 100/60/35/25/20/16% to 100/60/30/20/15/11 (less effective economy as a large group). Side Walkers' HP relative to Mid Walkers HP changed from -22% HP to -40%. Decreased the height of Walkers' Stomp ability from 9m to 6m. Backdoor protection range check increased by 5m for Walkers and 10m for Base Objectives. Distance to attack walkers increased from 32.5 to 35. Powerups Now spawn at 5 minutes instead of 10 minutes. Breakables now spawn at 2 minutes instead of 3 minutes (they still respawn every 3 minutes). Soul Breakables chance increased from 50% to 60%. Golden Statue breakables chance increased from 40% to 50%. Minimap now shows what kind of powerup is spawned. Teleporters now start available at the beginning of the game, rather than at 8 minutes. Walkers Resistance based on nearby enemies increased from 0/8/16/24/32/40% to 0/0/20/30/40/50%. Bullet and Spirit Resistance for being near Walker value reduced from 25% to 15%. Bullet and Spirit Resistance for being near Walker radius reduced from 35.5m to 32m. Neutral bounties increased by 6%. Healing area turrets' damage increased by 20%. Base trooper bounty reduced from 144 to 132 Powerup Gun: Min Fire Rate reduced from 15% to 12%. Powerup Gun: Min Ammo reduced from 30% to 20%. Powerup Survival: Min Health reduced from 250 to 200. Powerup Survival: Min regen reduced from 0.75% to 0.5%. Powerup Casting: Min Spirit Power reduced from 20 to 15. Powerup Casting: Min CD Reduction reduced from 15% to 12%. Powerup Movement: Min Sprint reduced from 2m to 1.5m. Powerups now start scaling up from 5 min rather than from 10 min. Debuff Resistance now stacks diminishingly. Increased Dash Slow cap from -40% to -50%. Upgraded items now share the cooldown of the consumed item (i.e. using Healing Rite before upgrading to Healing Nova no longer resets the cooldown). Updated all default builds. Net Worth display shows decimals until 10k (instead of only until 5k). Updated all targeting in game with new visuals to be consistent for positive targeting AOEs. Troopers are visible through walls during the laning phase. Replaces the HUD element showing trooper icon and health. Ally health bars visible through walls in addition to X-ray. Nearby creep X-rays also visible through walls. Added outlines to hero shader. Minor update to the \"Get Started\" tutorial videos to reflect the three lanes and removal of trooper last hits. Corrected name of Temple Guardian in the damage report where it was appearing as Mid Boss. Added a tooltip to explain the secondary build search language option in Settings. Aligned labels of in-world pickup item labels with the corresponding modifiers so the HUD text that appears after picking up an item uses consistent terminology. Shrines are now navigation blockers, discouraging troopers from walking through and into them. Majestic Leap, Warp Stone, and Phantom Strike can now properly be cast while climbing ropes. Sinclair's Spectral Assistant teleport follow-up can now properly be cast while climbing ropes. Bots will change their mind less frequently when considering retreating due to low health. Bots now use ziplines when returning to base to heal. Bots are now much better at ziplining out of base. Players will no longer be attacked by nearby Neutrals when attacking the Sinner's Sacrifice in Sandbox. Improvements to camera change on rope climb ejection. Added sounds for Patron transforming to weakened state. Added Patron shock attack sound when in weakened state. Adjusted Walker audio mix for greater threat perception when enemy and less threat when ally. Improved Guardian activate sound to trigger less often between attacks. Updated zipline audio mix so allies and enemies using ziplines are more audible. Improved footstep audio sync across all heroes. Improved animation audio coverage across all heroes. Updated audio mix between footsteps and movement across all heroes. New footstep material sweetener sounds, increased overall volume. Added more match start conversations. Match start conversations are now cancelled by higher priority lines (like ping lines), regardless of which hero is talking. Fixed match start conversations to handle game pauses correctly. Voice lines that fire when an objective is denied will only be played for those close to the objective. Removed shop music in hero test. Updated weapon initial reflection acoustics model. Damage audio feedback scales with \"falloff\" - it will be more quiet when damage is least effective. Lowered and shortened headshot damage audio. Removed some mix settings that were lowering player weapon when receiving damage. Added support to play weapon fire from muzzle location. Technical groundwork to change sound effects based on surface materials for things like footsteps and bullets with some meaningful performance savings. Added unique surface impacts for bullets for various materials. Technical groundwork to unify weapon sound and continue reducing fatigue, includes some additional support to include per-weapon low ammo sounds and acoustics. Remastered several characters' weapon fire sounds using the new feature set (Wraith, Dynamo, Calico, and Abrams). Improved bullet whizby audio detection. Ensured technical parity between automatic and animation-driven footstep systems. Match Start conversations now have a 50% chance of firing - this reduces repetition as well gives the patron a chance to speak individually to a hero. Match Start conversation timings have been adjusted to make them flow faster and more naturally. Match Start conversations will no longer partially fire, so if content has not been recorded you won't hear the start of a conversation then no follow-up. Green lane is once again referred to as Greenwich by heroes. Added a new Ping for \"leaving the area\" for most heroes. Adjusted Patron VO frequency when leveling up so they're a little less chatty. Fixed several issues with heroes referring to other heroes with outdated names or not saying their name at all. Updated Shopkeeper VO - minor update that adds a few new interactions. Turned off/on a handful of stray VO lines to have things be more in line with current iteration of abilities (for instance Holliday no longer says \"armor's not going to save you\", when in fact, armor could save you). Increased volume for hero effort VO sounds (jumping, dashing, mantling). Teammates' pain VO will receive a volume boost when their health gets below a certain threshold. Changed Hero Death VO to be directional. Items now show Spirit Scaling when alt is pressed. General visual pass to minimap in concert with map changes to improve its read and usability. Objective icons and lanes on minimap have been adjusted for visual and functional clarity. New lower \"basement\" level texture was added to minimap when players traverse into deeper parts of the map. All keyboard/controller button glyphs have been unified into a common UI element. Keyboard, Mouse, and Button bind stylings have improved, especially in the case of \"inline\" bindings. When an action is not bound to any key button, there is a symbol in its place. When an ability or active item button is pressed during cooldown, the related element will shake and glow red briefly. Updated and improved search functionality in the shop. The cooldown alert message has been removed, but alert messages related to Charges, Silences, etc. remain. Objective healthbars now only show for the Patron, Shrines, and Midboss. When stunned or disarmed the reticle now changes state and displays a duration meter. Hiding gun disarmed FX and generic disarm particles since the reticle communicates the disarmed state. Added overhead indicators for disarm abilities. Don't show cooldowns on ability icons for the imbue popup. Reordered ping wheel messages with lanes so the order matches the left to right order of the lanes. Simplified and reworked the menu when you hit ESC while in-game. Deadlock loading screens can now animate and show other controls. Added charge-up icon and entry in labels in the same way we have cooldowns for items. Added \"unstoppable\" as a status effect to show in tooltips. The ultimate icons on the team's bar at the top of the HUD have been updated. Added UI indication when an item is upgradeable in the shop (when you already have a component for an item). Added purchase messages in the chat feed for T3 and T4 items that allies or enemies purchase. Added a corner cap on items in inventory/scoreboard/etc to replace the old tier indicators and give better tree recognition. Disabled low/mid health label under crosshair. Made it so scaling values below 0.5 shows 2 decimals instead of 1. Hovering items in the damage report now shows tooltip for that item. Sinner's Sacrifice bonuses now appear faster. Added a UI state when Stamina is disabled with a debuff. Top bar now uses the new vertical bar graphs. Charge-up items (Mystic Burst, Tankbuster, QSR, Ethereal Bullets) now show 'cooldown' timing clock on icon while they are charging up. When charge-up items are fully charged the HUD icon at center will show just like items that are refreshed on cooldown. Renamed \"Move Speed Resist\" to \"Slow Resist\". Items in your HUD are organized by cheapest to most expensive from left to right. Base Guardians now share a single Icon / HP pool on Minimap. Patron now shows an icon for each of its phases. Active items are no longer sorted separately from the rest of the items; all items are now sorted alphabetically. Range and Duration upgrades are now labeled as “Ability Range” and “Ability Duration” tooltip wise, to help with searching in the shop. Added new 'out of combat' run and sprint. New Crouch animations. Improved hipfire animations. Added custom jump catapult animation - an alternate jump animation when using fans and Majestic Leap etc. Refined jump start to be cleaner. Added custom Zipline Boosted loop. Added Zipline swinging animation. Fixed a regression where Abrams' Siphon Life and Shoulder Charge ping VO were swapped. Removed competing camera modifier on Seismic Impact. Fixed camera position on client's ground target not using previews, causing it to be jittery. Hook: Reworked code to reduce mispredicts. Hook: When Bebop hooks a trooper, only Bebop will hear the hook success sound now. Hook: Fixed the hook sometimes not breaking when the target is stuck. Hook: Fixed the target sometimes not being positioned in front of Bebop when Bebop rotated. New updated model and animations. Hero pose ambient VFX added. Reload effects revisions. Fixed announcer match start line to be spoken by the friendly announcer (was randomly picking between friendly and enemy). Various tooltip fixes. Base Bullet Damage spirit power scaling reduced from 0.09 to 0.07. Charged Shot T3 Spirit Power scaling reduced from 1.3 to 1.2. VO remastering pass. Sleep no longer wakes up from damage over time. Catalyst: Projectile no longer slides against geometry. Watcher's Covenant: Fixed not replicating healing from Bullet Lifesteal (it worked with other sources of bullet lifesteal). Base Spirit Resist reduced from 15% to 10%. Bullet Growth reduced from 0.311 to 0.29. Bullet Velocity increased from 590 to 650. No longer has +15% Base Bullet Resist. Now has +1% Spirit Resist per Boon. Mini Turrets: No longer have a 3 second minimum life time.  They now spawn with 60% spirit and bullet resist that decays over 6s. Mini Turrets: T3 duration reduced from +18s to +14s. Tornado: Improved camera animations during ability. VO remastering pass as well as new VO content. Animation for holding and throwing items has been added. Base bullet damage increased from 3.9 to 4.1. VO remastering pass as well as updated ping lines. Minor rework on animation set. Gun: Improved firing effects. Gun: Fixed alt-fire weapon thinking it could zoom. It would try if you held right-click and jumped. Gun: Falloff range reduced from 20m->58m to 18m->52m. New sounds added. Effects revision to show when the item procs. Fixed it not playing the correct cast sound. Now uses charge-up mechanic (recharges its proc strength over its cooldown duration). Updated overhead visual counter. Now stops all momentum on Stun so victims fall straight down. Effects revision at start to make it more apparent. Added metal footstep sweetener sound when Metal Skin is active. Now uses charge-up mechanic. Fixed its fire rate buff not being networked, and therefore not showing up in left-hand panel. New sounds added Now plays a sound every time a stack is gained. Returned Bullets factor in attacker movement and cannot be easily avoided by strafing. Added effect on activation. Fixed item not granting +20% weapon power. Effects revisions for better visibility and separation from other effects. Fixed jittery health numbers in some non-English languages. Adjusted the width of the individual soul count backer in the HUD by language to prevent player soul counts from spilling outside of the bounding box in languages where number formatting and/or length of the abbreviation for thousands results in longer text than English. Applied language-specific width adjustments and padding to the team soul count panel to improve readability. Localized the loading screen. Added localized versions of the Great For New Players screenshot in the new player dialog window. Added localized versions of the the Hero Labs screenshot shown at the hero selection screen. Corrected HUD images containing text that were still showing up in English when playing in Korean. Adjusted font sizing to fix instances of truncated text in the Hero Testing menu in Russian and Indonesian. Enabled resizing of the new player dialog window to fit longer or shorter text appropriately in translation and prevent the \"Got it!\" button from being cut off in languages with longer text. Enabled font scaling on the Imbue and Active tag labels and the Report button to prevent truncation in certain languages. Fixed multiple instances of single character awkwardly wrapping to second line in Japanese. Added localization support for bot hero pings. Fixed the base healing sound sometimes getting stuck on. Fixed items like Suppressor showing fire rate slow deltas for yourself when it's actually applied to the enemy. Fixed crosshairs not always showing the Disarmed state even though you're disarmed. Fixed heroes that have weapon attributes that get scaled by spirit not showing in the deltas for weapon attributes on the mod tooltips. Fixed Move speed on the HUD always showing Sprint speed included even if you weren't sprinting. Fixed hero stats on dashboard page getting updated from the stats in your previous game. Fixed not being able to ping while the game is paused. Fixed issue with hero stats tooltip. For example, Glass Cannon was showing -20 health instead of -20% health when hovering the stat tooltip. Fixed selling items in Sandbox asking if you want to sell for half price. Fixed rare bug causing you to get stuck on a zipline until you manually dismount. Fixed bug causing nearby other players to appear jittery while on a zipline. Fixed issues that were preventing Yamato, Vindicta, and Pocket desperation lines from playing. Fixed corrections when granting ammo via modifier. Fixed Soul Urn Icon not appearing next to enemies on the minimap if they were Team Sapphire. Fixed Shotguns not having their damage properly reduced against Guardians. Fixed abilities and items allowing one to circumvent the max speed cap on players holding the Soul Urn. Fixed an edge case where a player could claim the Rejuvenator while they were also parried on their attack. Fixed some cases of self damage putting zipline usage on Cooldown and/or knocking the player off the zipline. Fixed Debuff Reducer reducing Soul Urn and Unsecured Orbs pickup time. Fixed a bug causing Lash's Ground Strike impact to be too loud and Flog impact to be too quiet when hitting large groups of enemies with each ability. Fixed a bug preventing Dynamo's and Lash's light melee sounds from playing. Fixed a bug causing Holliday's weapon firing sound to be too quiet with sustained firing. Fixed a bug causing Holliday's Crackshot ready sound to play while dead. Fixed a bug preventing ambient cricket sounds from playing. Fixed a bug preventing ambient tree sounds from looping correctly. Fixed a bug causing some looping sounds to occasionally start with a small delay. Fixed a bug causing Lucky Shot's proc sound to play too loud for certain weapon types. Fixed match start zipline conversations being too quiet. Fixed various Bullet Velocity tooltip issues. Fixed Bullet Velocity not working properly when you had multiple sources (it would pick the highest, even if you had a negative source). Fixed Stamina Recovery not showing deltas properly. Fixed crash when clicking \"Take Control\" and there's nothing to control. Fixed Phantom Strike causing infinite gravity during the duration of the debuff. Fix various cases where Magic Carpet would get cancelled if any enemy stepped in to your debuff (IE Viscous Goo, Inferno FlameDash, Ivy Kudzu). Fixed a bug where some item and ability interactions were accidentally being reduced by Debuff Reducer, like Viscous' Ball Stun prevention and some kill trackers. Fix Vindicta flight and Wraith Full Auto spirit damage not working if the enemy has a barrier. Siphon Life Added new animation logic support for Siphon Life and items. Shoulder Charge Base duration increased from 1.2s to 1.4s. T1 is now \"On Hero Collide: +25% Weapon Damage for 8s\". T2 is now \"-12s Cooldown\". T3 is now \"+0.2s Stun Duration and 40% Movement Slow for 4s\". New cycle and pre cast 'goose step'. Added support for shoulder charging while in air. New sounds added for hitting heroes, troopers, and walls. Seismic Impact Radius increased from 9m to 10.5m. Effects revisions. Fixed crash down sound triggering twice. New slam animation. New sounds added for in-air looping sound and descend sound. Exploding Uppercut Fixed missing uppercut hero impact sound. Hyper Beam Effect revisions for projections on vertical surfaces. Fixed damaging enemies through thin walls. Leaping Slash Fixed animation getting stuck when stunned during the ability cast. Kinetic Pulse T1 Fire Rate slow now matches the Move Slow Quantum Entanglement Added small lerp to VFX for the teleport and smoothed out camera transitions. Rejuvenating Aurora Effect revisions to center focus on head. Singularity Updated effects revisions. Increased tick rate, equals out to roughly the same DPS overall, just smoother. Spirit Snare Added physical elements to the AoE visuals. Powder Keg Fixed being able to spawn barrels on the other side of thin walls. Bounce Pad Fixed a bug where bounce pads might force you back to the ground after use. Spirit Lasso Holliday now plays VO when she lands a hit with her lasso as opposed to when she casts her lasso (so she won't say \"shoot them\" if she didn't actually grab anyone). Stone Form Fixed cast sound being delayed and increased its volume. Fixed interaction with air vents and small geo. Air Drop Adjusted visuals to have higher contrast. Ally cast range increased from 8m to 12m. Slow duration reduced from 4s to 3s. Radius reduced from 14m to 12m. Combat Barrier reduced from 200 to 150. Combat Barrier Spirit Power scaling reduced from 2.5 to 1.5. T1 duration reduced from 12s to 8s. T2 Combat Barrier reduced from +300 to +200. T3 Silence reduced from 4.5s to 3s. Ice Path Reduced how sticky the Ice Path is for allies. Arctic Beam Fixed damaging enemies through thin walls. Life Drain You're now only slowed when Life Drain is damaging a target. Ground Strike Spirit scaling reduced from 0.05 to 0.04. Fixed a bug that caused Ground Strike to push the victim under the world. Flog Updated ability icon. Death Slam UI lock-on revisions to simplify readability. Fixed channel effect on Death Slam to not disappear prematurely. New sounds added for lock-on success sounds, in-air looping sound, victim impact sounds, and a 'miss' sound when Lash does not successfully grab anybody or cancels the ability early. Mini Turret Updated DPS tooltip to properly reflect the correct number. Updated ambient, tracer, and muzzle flash effects. Medicinal Specter Effects revisions and improvements. Fixed audio buildup when multiple characters are being healed by Medicinal Specter at once. Now provides +15% Stamina Regen. T3 reduced from 4% to 3.5%. Spectral Wall Fixed missing sound as it travels before deploy. The last 2 segments on the left/right sides of Spectral Wall will now turn towards a nearby wall if there is one. Duration reduced from 5s to 4.5s. Cooldown increased from 46s to 50s. T2 reduced from -22s to -20s. T3 reduced from 1s Stun to 0.75s. Heavy Barrage Projectile and ambient effects revisions. Now allows full movement while channeling the ability. Fixed a bug where the Camera would not zoom out during the ability if user setting was set to QuickCast. Now slows your dash usage by 35%. Damage per rocket reduced from 30 to 23. Minimum distance increased from 7m to 9m. Cooldown increased from 140s to 150s. Spirit power scaling reduced from 0.35 to 0.25. T3 damage per rocket reduced from +30 to +25. T3 now also increases spirit scaling by 0.1. Scorn Heal reduced from 1.3x to 1.2x. Burrow T2 reduced from +100 Damage to +80. Sand Blast Projectile no longer slides against geometry. No longer deals damage. Combo Bonus health on kill/assist reduced from +70 to +50. Affliction No longer removed by Debuff Remover (as this item no longer removes ultimate effects). Duration reduced from 18s to 14s. DPS increased from 10 to 30. Initial damage reduced from 18% to 10%. T2 now increases duration by +4s. T2 Healing Reduction reduced from -50% to -40%. T3 no longer has % Current HP damage. T3 increased from +10 DPS to +20 DPS. T3 range increased from +5m to +6m. Static Charge Can no longer be self cast. Killing Blow Threshold reduced from 22% to 20%. T2 threshold reduced from +6% to +5%. Vexing Bolt Redirect telegraphs correctly on vertical geometry. Rabbit Hex Fixed a bug where Henry and Savannah wouldn't play VO when turning enemies into rabbits. Assassinate Fixed Vindicta Assassinate zoom in sound triggering twice. Puddle Punch Fix a bug where Puddle Punch would sometimes not deal damage when the target was very close to a wall. Goo Ball Cooldown increased from 95s to 105s. Fixed it knocking back heroes with Unstoppable state. Petrifying Bola Debuff effect revisions to help identify targets better. Adjusted the volume of direct hits and explosion sounds. Telekinesis Revisions to debuff effect."
};
var toc = [
	{
		level: 1,
		title: 'General Changes',
		id: 'general-changes'
	},
	{
		level: 1,
		title: 'Item Changes',
		id: 'item-changes'
	},
	{
		level: 2,
		title: 'Affliction',
		id: 'affliction'
	},
	{
		level: 2,
		title: 'Air Drop',
		id: 'air-drop'
	},
	{
		level: 2,
		title: 'Arctic Beam',
		id: 'arctic-beam'
	},
	{
		level: 2,
		title: 'Assassinate',
		id: 'assassinate'
	},
	{
		level: 2,
		title: 'Bounce Pad',
		id: 'bounce-pad'
	},
	{
		level: 2,
		title: 'Burrow',
		id: 'burrow'
	},
	{
		level: 2,
		title: 'Combo',
		id: 'combo'
	},
	{
		level: 2,
		title: 'Death Slam',
		id: 'death-slam'
	},
	{
		level: 2,
		title: 'Exploding Uppercut',
		id: 'exploding-uppercut'
	},
	{
		level: 2,
		title: 'Flog',
		id: 'flog'
	},
	{
		level: 2,
		title: 'Goo Ball',
		id: 'goo-ball'
	},
	{
		level: 2,
		title: 'Ground Strike',
		id: 'ground-strike'
	},
	{
		level: 2,
		title: 'Heavy Barrage',
		id: 'heavy-barrage'
	},
	{
		level: 2,
		title: 'Hyper Beam',
		id: 'hyper-beam'
	},
	{
		level: 2,
		title: 'Ice Path',
		id: 'ice-path'
	},
	{
		level: 2,
		title: 'Killing Blow',
		id: 'killing-blow'
	},
	{
		level: 2,
		title: 'Kinetic Pulse',
		id: 'kinetic-pulse'
	},
	{
		level: 2,
		title: 'Leaping Slash',
		id: 'leaping-slash'
	},
	{
		level: 2,
		title: 'Life Drain',
		id: 'life-drain'
	},
	{
		level: 2,
		title: 'Medicinal Specter',
		id: 'medicinal-specter'
	},
	{
		level: 2,
		title: 'Mini Turret',
		id: 'mini-turret'
	},
	{
		level: 2,
		title: 'Petrifying Bola',
		id: 'petrifying-bola'
	},
	{
		level: 2,
		title: 'Powder Keg',
		id: 'powder-keg'
	},
	{
		level: 2,
		title: 'Puddle Punch',
		id: 'puddle-punch'
	},
	{
		level: 2,
		title: 'Quantum Entanglement',
		id: 'quantum-entanglement'
	},
	{
		level: 2,
		title: 'Rabbit Hex',
		id: 'rabbit-hex'
	},
	{
		level: 2,
		title: 'Rejuvenating Aurora',
		id: 'rejuvenating-aurora'
	},
	{
		level: 2,
		title: 'Sand Blast',
		id: 'sand-blast'
	},
	{
		level: 2,
		title: 'Scorn',
		id: 'scorn'
	},
	{
		level: 2,
		title: 'Seismic Impact',
		id: 'seismic-impact'
	},
	{
		level: 2,
		title: 'Shoulder Charge',
		id: 'shoulder-charge'
	},
	{
		level: 2,
		title: 'Singularity',
		id: 'singularity'
	},
	{
		level: 2,
		title: 'Siphon Life',
		id: 'siphon-life'
	},
	{
		level: 2,
		title: 'Spectral Wall',
		id: 'spectral-wall'
	},
	{
		level: 2,
		title: 'Spirit Lasso',
		id: 'spirit-lasso'
	},
	{
		level: 2,
		title: 'Spirit Snare',
		id: 'spirit-snare'
	},
	{
		level: 2,
		title: 'Static Charge',
		id: 'static-charge'
	},
	{
		level: 2,
		title: 'Stone Form',
		id: 'stone-form'
	},
	{
		level: 2,
		title: 'Telekinesis',
		id: 'telekinesis'
	},
	{
		level: 2,
		title: 'Vexing Bolt',
		id: 'vexing-bolt'
	}
];
var readingManifest = {
	stats: null,
	open: false,
	sections: [
		{
			kind: 'item',
			name: 'Affliction',
			id: 'affliction'
		},
		{
			kind: 'item',
			name: 'Air Drop',
			id: 'air-drop'
		},
		{
			kind: 'item',
			name: 'Arctic Beam',
			id: 'arctic-beam'
		},
		{
			kind: 'item',
			name: 'Assassinate',
			id: 'assassinate'
		},
		{
			kind: 'item',
			name: 'Bounce Pad',
			id: 'bounce-pad'
		},
		{
			kind: 'item',
			name: 'Burrow',
			id: 'burrow'
		},
		{
			kind: 'item',
			name: 'Combo',
			id: 'combo'
		},
		{
			kind: 'item',
			name: 'Death Slam',
			id: 'death-slam'
		},
		{
			kind: 'item',
			name: 'Exploding Uppercut',
			id: 'exploding-uppercut'
		},
		{
			kind: 'item',
			name: 'Flog',
			id: 'flog'
		},
		{
			kind: 'item',
			name: 'Goo Ball',
			id: 'goo-ball'
		},
		{
			kind: 'item',
			name: 'Ground Strike',
			id: 'ground-strike'
		},
		{
			kind: 'item',
			name: 'Heavy Barrage',
			id: 'heavy-barrage'
		},
		{
			kind: 'item',
			name: 'Hyper Beam',
			id: 'hyper-beam'
		},
		{
			kind: 'item',
			name: 'Ice Path',
			id: 'ice-path'
		},
		{
			kind: 'item',
			name: 'Killing Blow',
			id: 'killing-blow'
		},
		{
			kind: 'item',
			name: 'Kinetic Pulse',
			id: 'kinetic-pulse'
		},
		{
			kind: 'item',
			name: 'Leaping Slash',
			id: 'leaping-slash'
		},
		{
			kind: 'item',
			name: 'Life Drain',
			id: 'life-drain'
		},
		{
			kind: 'item',
			name: 'Medicinal Specter',
			id: 'medicinal-specter'
		},
		{
			kind: 'item',
			name: 'Mini Turret',
			id: 'mini-turret'
		},
		{
			kind: 'item',
			name: 'Petrifying Bola',
			id: 'petrifying-bola'
		},
		{
			kind: 'item',
			name: 'Powder Keg',
			id: 'powder-keg'
		},
		{
			kind: 'item',
			name: 'Puddle Punch',
			id: 'puddle-punch'
		},
		{
			kind: 'item',
			name: 'Quantum Entanglement',
			id: 'quantum-entanglement'
		},
		{
			kind: 'item',
			name: 'Rabbit Hex',
			id: 'rabbit-hex'
		},
		{
			kind: 'item',
			name: 'Rejuvenating Aurora',
			id: 'rejuvenating-aurora'
		},
		{
			kind: 'item',
			name: 'Sand Blast',
			id: 'sand-blast'
		},
		{
			kind: 'item',
			name: 'Scorn',
			id: 'scorn'
		},
		{
			kind: 'item',
			name: 'Seismic Impact',
			id: 'seismic-impact'
		},
		{
			kind: 'item',
			name: 'Shoulder Charge',
			id: 'shoulder-charge'
		},
		{
			kind: 'item',
			name: 'Singularity',
			id: 'singularity'
		},
		{
			kind: 'item',
			name: 'Siphon Life',
			id: 'siphon-life'
		},
		{
			kind: 'item',
			name: 'Spectral Wall',
			id: 'spectral-wall'
		},
		{
			kind: 'item',
			name: 'Spirit Lasso',
			id: 'spirit-lasso'
		},
		{
			kind: 'item',
			name: 'Spirit Snare',
			id: 'spirit-snare'
		},
		{
			kind: 'item',
			name: 'Static Charge',
			id: 'static-charge'
		},
		{
			kind: 'item',
			name: 'Stone Form',
			id: 'stone-form'
		},
		{
			kind: 'item',
			name: 'Telekinesis',
			id: 'telekinesis'
		},
		{
			kind: 'item',
			name: 'Vexing Bolt',
			id: 'vexing-bolt'
		}
	],
	related: []
};
function _5_08_mg($$renderer) {
	$$renderer.push(
		`${html('<h2 id="general-changes" data-mog-section="">General Changes</h2>\n<p><img src="https://clan.akamai.steamstatic.com/images/45164767/0908b05b0e83747ca99a9337d401daf3a662f85d.png" alt="store.steampowered"  decoding="async" loading="eager"/></p>\n<ul><li>Full shop rework, including many new items.</li><li>Item slots are now all universal, rather than tree specific.</li><li>Total slot count reduced from 16 to 12.</li><li>Item costs are now discounted when you own the component.</li><li>New artwork for all item icons.</li><li>Reworked how tier bonuses work in the shop. They are no longer based on each item you buy, but instead based on your total spend in a tree. Bonuses are not linear (maxing out one tree fully isn&#x27;t optimal bonus-wise).</li><li>Various item names have been changed.</li><li>Items now glow when there is an upgrade you can buy.</li><li>The Build Browser has been reworked and is now its own fullscreen UI.</li><li>Added a &quot;Create Build&quot; button when hovering over a player in post-game. This will create a local unpublished build based on the items the player purchased in that match (including imbue targets and the order in which items were sold).</li><li>Added a new feature: build tags. Build tags are a way to compactly describe the theme of a build. A tag has an icon and a description, and you can assign 3 tags to a build (they don&#x27;t have to be unique). There are a small number of initial &quot;standard&quot; tags such as Weapon/Spirit/Vitality, but also things like level of complexity, whether the build is melee focused, etc. In addition to the standard build tags, the ability icons of the hero, and icons of items included in a build can also be used as tags.</li><li>Published builds that don&#x27;t yet have tags will not show up in the public results in the build browser.</li><li>Added the ability to specify a suggested imbue target for items in a build. When using Quickbuy this will be automatically selected. When purchasing normally, the suggested ability will be highlighted in the imbue popup.</li><li>Added the ability to specify a sell priority value (0-100) for items in a build. When using Quickbuy, if you are out of slots, and you own an item with a sell priority, that item will automatically be sold to make room for your next purchase.</li><li>Build Categories can now be marked as Optional, which show up differently in the build UI and will not be added to Quickbuy when queuing a build.</li><li>You can now highlight both items and categories in the build editor, with a dedicated section on the left to edit the properties of the current selection (this replaces right-click context menus to update things like annotation notes and imbue targets).</li><li>You can remove items from a build by dragging them outside of the category UI.</li><li>Added a new larger Quickbuy queue UI adjacent to the shop that lets you remove and reorder items in the queue.</li><li>Added buttons to queue your entire build and to clear your Quickbuy queue.</li><li>The default Quickbuy hotkey has been changed from &#x27;Shift+B&#x27; to &#x27;G&#x27;.</li><li>Added an option to always queue your selected build at the start of a match.</li><li>Fixed several bugs that would cause Quickbuy purchases to fail.</li><li>New base design.</li><li>Amber side early development pass at industrial exterior.</li><li>Sapphire side early development pass at museum exterior.</li><li>Interior shape changed to round with a high domed ceiling (both sides using the same interior temporarily).</li><li>Added Patron Throne that moves down into the ground to form the final Patron area.</li><li>Two ventilation tunnels from the player spawn to the final Patron area combined into a single tunnel.</li><li>Shrines moved back closer to the player spawn area and pushed into alcoves.</li><li>Hallways along the Mid Lane entrance to the base changed to rooms with ropes leading up to the high ground.</li><li>Side passages from player spawn area to the Shrines changed to curved stairs.</li><li>Increased areas in front of the Mid Lane base entrances.</li><li>Added Juke Closets in between base entrances on the interior side.</li><li>Lowered buildings on the corners of the area that have access to Mid Boss.</li><li>Extended the rope from Mid Boss to the rooftop of these newly lowered buildings.</li><li>Redesigned Boutique.</li><li>Expanded the rooftop all the way back to the wall.</li><li>Raised building separating the Boutique and the base.</li><li>Continuous interior from jungle area to the walker.</li><li>Stairs dip down into the building.</li><li>Added high building archway behind the Walker.</li><li>Increased the window size in the covered hallway in between the Walker and the jungle areas.</li><li>Removed the Skybridges just below the ziplines from the base side.</li><li>Removed the Pedestrian bridge in between the Walker and the Guardian.</li><li>Reduced width of the street coming from the Guardian.</li><li>Added catwalk on the defender side to connect to the catwalk behind the Walker.</li><li>Added an awning in front of the Cultural Center.</li><li>Changed the Cultural Center interior path to go to the defender side catwalk.</li><li>Removed the high ground side entrance to the interior hallway on the outside of the lane.</li><li>Centered the bounce pad coming out of the interior hallway in between the Walker and the Guardian.</li><li>Added a rope to access the roof from the jungle side.</li><li>Removed wall shrubs on the jungle side.</li><li>Removed the zap triggers on that rooftop.</li><li>Added breakables on the roof.</li><li>Lowered the tower building in the jungle area across from the connection area.</li><li>Lowered rooftop of the Clinic/Law Office (building next to the Bear/Bull statues).</li><li>Connected the rooftop of the Clinic/Law Office to the lowered roof leading to Mid Lane.</li><li>Lowered one side of the building beside the Fish Market/Nursery.</li><li>Added Juke Closet off the lowered rooftop.</li><li>Added breakables to all newly lowered rooftops.</li><li>Moved and rotated delivery trucks separating neutral camps.</li><li>Increased size of doorways of Juke Closets.</li><li>Wooden crates replaced with new design and shader.</li><li>Skybridges</li><li>Pedestrian Bridges (old Power Up bridges)</li><li>Department Store</li><li>Chapel</li><li>Bell Tower</li><li>Apartment Complex</li><li>Speakeasy</li><li>Gallery</li><li>Interiors</li><li>Broadway Storefronts</li><li>Nightclub</li><li>Theater</li><li>Increased size of all doorways entering interior spaces.</li><li>Removed the veils below the old Power-Up bridges.</li><li>Removed the sign on the top of the Theater.</li><li>Added collision to the chimney pipes.</li><li>Raised interior ceiling of Radio Station/Apartment Complex on outer lanes next to the T1 Shops.</li><li>Removed the columns in the interiors of the Radio Station/Apartment.</li><li>Added lights to the Radio Station/Apartment interiors.</li><li>Removed veil at the front of Dept Store/New York Oracle.</li><li>Players gain back ammo when claiming an Orb.</li><li>Improved reliability of soul orb claims when experiencing momentary packet loss or latency.</li><li>Reworked visual effects to more clearly communicate when they are claimable or expiring.</li><li>Reworked client feedback when shooting a soul orb prior to being awarded the souls.</li><li>Soul orbs no longer automatically claim when colliding with the world.</li><li>Improved unit targeting logic.</li><li>Networking: Add method to smooth player jitter that may result from non-ideal networking conditions.</li><li>Fixed jittery motion for various in-world UI elements, such as targeting and ziplines.</li><li>Improve fairness in hit registration between high and low ping players during ability use and when shooting troopers.</li><li>Fixed rare bug that would cause melee hits to have an incorrect range on the server.</li><li>Fixed various scenarios causing networking-related jitter when climbing ropes.</li><li>Reduced jitter from mispredictions while ziplining near another player.</li><li>Fixed issues with mispredicting (and bad stuttering) when going around corners on zipline.</li><li>Air Acceleration has been increased to improve Wall Jump controls, but only while moving at lower speeds.</li><li>Wall Jump launch has different kick away speed from the wall based on whether you&#x27;re pushing your movement direction toward, away, or neutral.</li><li>Fixed cases where it was impossible to Mantle Ledges to the left or right of your Wall Jump direction, just after a Wall Jump.</li><li>Fixed/improved control over air dashes just after a Wall Jump.</li><li>Wall Jump fatigue affects the vertical launch only, and recovers at 1.25s instead of 2s. This should encourage long lateral leaps, while keeping chimneying in check.</li><li>Fixed a bug where using Melee on the ground triggered Wall Jump fatigue.</li><li>Wall detection for wall jumps now takes into account all walls in a small radius around the player, not just the last wall touched.</li><li>Changes to Wall Jump behavior have reduced the effectiveness of &quot;Corner Boosting&quot; a bit.</li><li>While Wall Sliding, terminal velocity is in effect (for vertical speeds only). At -600u/s gravity is cancelled out.</li><li>Mantle Glide: Holding Crouch or Crouch Toggle while exiting a Mantle creates a small speed boost, allowing you to slide out of mantles.</li><li>Various Fixes for camera positions when characters push the camera into the ceiling in special cases ( Vindicta &amp; Abrams&#x27; Ults ).</li><li>Characters, Guardians, Walkers and Shrines will fade to a minimum transparency as they get too close to the camera.</li><li>Soft Camera Collision: As you move, the camera anticipates walls approaching from behind and to the right of your character resulting in less sudden jolts, and smooth near/far camera paths when turning in constricted spaces.</li><li>Changing the third flex slot unlock from killing all Walkers to killing two Walkers.</li><li>Changing last flex slot from base guardians and shrine to just base guardians.</li><li>Players now start with 400 souls.</li><li>Adjusted the boon reward schedule and added some more levels.</li><li>You now also gain Spirit per boon.  Adjusted Spirit on various abilities and items to compensate.</li><li>All hero stats rebalanced alongside the shop rework.</li><li>Adjusted objective health values (as part of damage value changes in the shop).</li><li>Shields have been reworked and are now called Barriers. They are no longer multiple damage types. They also interact normally with resistances now.</li><li>Hero kill comeback values reduced by 15%.</li><li>The losing team now gains up to 25% more souls from troopers, neutrals, vaults, and objectives, based on how behind they are (peaks at 20% max networth delta). First 3k in networth difference is ignored.</li><li>Zipline Boost speed reduced from 130% to 80%.</li><li>Zipline Boost cooldown increased from 280s to 360s.</li><li>Zipline now glows in the world when there is a zipline-boosted player on it.</li><li>Zipline Walker nodes adjusted.  When Walker is contested, the last active defending zipline node is now behind the Walker instead of right on top of it.</li><li>Zipline dismount momentum reduced slightly.</li><li>Trooper bounty split from 100/60/35/25/20/16% to 100/60/30/20/15/11 (less effective economy as a large group).</li><li>Side Walkers&#x27; HP relative to Mid Walkers HP changed from -22% HP to -40%.</li><li>Decreased the height of Walkers&#x27; Stomp ability from 9m to 6m.</li><li>Backdoor protection range check increased by 5m for Walkers and 10m for Base Objectives.</li><li>Distance to attack walkers increased from 32.5 to 35.</li><li>Powerups Now spawn at 5 minutes instead of 10 minutes.</li><li>Breakables now spawn at 2 minutes instead of 3 minutes (they still respawn every 3 minutes).</li><li>Soul Breakables chance increased from 50% to 60%.</li><li>Golden Statue breakables chance increased from 40% to 50%.</li><li>Minimap now shows what kind of powerup is spawned.</li><li>Teleporters now start available at the beginning of the game, rather than at 8 minutes.</li><li>Walkers Resistance based on nearby enemies increased from 0/8/16/24/32/40% to 0/0/20/30/40/50%.</li><li>Bullet and Spirit Resistance for being near Walker value reduced from 25% to 15%.</li><li>Bullet and Spirit Resistance for being near Walker radius reduced from 35.5m to 32m.</li><li>Neutral bounties increased by 6%.</li><li>Healing area turrets&#x27; damage increased by 20%.</li><li>Base trooper bounty reduced from 144 to 132</li><li>Powerup Gun: Min Fire Rate reduced from 15% to 12%.</li><li>Powerup Gun: Min Ammo reduced from 30% to 20%.</li><li>Powerup Survival: Min Health reduced from 250 to 200.</li><li>Powerup Survival: Min regen reduced from 0.75% to 0.5%.</li><li>Powerup Casting: Min Spirit Power reduced from 20 to 15.</li><li>Powerup Casting: Min CD Reduction reduced from 15% to 12%.</li><li>Powerup Movement: Min Sprint reduced from 2m to 1.5m.</li><li>Powerups now start scaling up from 5 min rather than from 10 min.</li><li>Debuff Resistance now stacks diminishingly.</li><li>Increased Dash Slow cap from -40% to -50%.</li><li>Upgraded items now share the cooldown of the consumed item (i.e. using Healing Rite before upgrading to Healing Nova no longer resets the cooldown).</li><li>Updated all default builds.</li><li>Net Worth display shows decimals until 10k (instead of only until 5k).</li><li>Updated all targeting in game with new visuals to be consistent for positive targeting AOEs.</li><li>Troopers are visible through walls during the laning phase. Replaces the HUD element showing trooper icon and health.</li><li>Ally health bars visible through walls in addition to X-ray.</li><li>Nearby creep X-rays also visible through walls.</li><li>Added outlines to hero shader.</li><li>Minor update to the &quot;Get Started&quot; tutorial videos to reflect the three lanes and removal of trooper last hits.</li><li>Corrected name of Temple Guardian in the damage report where it was appearing as Mid Boss.</li><li>Added a tooltip to explain the secondary build search language option in Settings.</li><li>Aligned labels of in-world pickup item labels with the corresponding modifiers so the HUD text that appears after picking up an item uses consistent terminology.</li><li>Shrines are now navigation blockers, discouraging troopers from walking through and into them.</li><li>Majestic Leap, Warp Stone, and Phantom Strike can now properly be cast while climbing ropes.</li><li>Sinclair&#x27;s Spectral Assistant teleport follow-up can now properly be cast while climbing ropes.</li><li>Bots will change their mind less frequently when considering retreating due to low health.</li><li>Bots now use ziplines when returning to base to heal.</li><li>Bots are now much better at ziplining out of base.</li><li>Players will no longer be attacked by nearby Neutrals when attacking the Sinner&#x27;s Sacrifice in Sandbox.</li><li>Improvements to camera change on rope climb ejection.</li><li>Added sounds for Patron transforming to weakened state.</li><li>Added Patron shock attack sound when in weakened state.</li><li>Adjusted Walker audio mix for greater threat perception when enemy and less threat when ally.</li><li>Improved Guardian activate sound to trigger less often between attacks.</li><li>Updated zipline audio mix so allies and enemies using ziplines are more audible.</li><li>Improved footstep audio sync across all heroes.</li><li>Improved animation audio coverage across all heroes.</li><li>Updated audio mix between footsteps and movement across all heroes.</li><li>New footstep material sweetener sounds, increased overall volume.</li><li>Added more match start conversations.</li><li>Match start conversations are now cancelled by higher priority lines (like ping lines), regardless of which hero is talking.</li><li>Fixed match start conversations to handle game pauses correctly.</li><li>Voice lines that fire when an objective is denied will only be played for those close to the objective.</li><li>Removed shop music in hero test.</li><li>Updated weapon initial reflection acoustics model.</li><li>Damage audio feedback scales with &quot;falloff&quot; - it will be more quiet when damage is least effective.</li><li>Lowered and shortened headshot damage audio.</li><li>Removed some mix settings that were lowering player weapon when receiving damage.</li><li>Added support to play weapon fire from muzzle location.</li><li>Technical groundwork to change sound effects based on surface materials for things like footsteps and bullets with some meaningful performance savings.</li><li>Added unique surface impacts for bullets for various materials.</li><li>Technical groundwork to unify weapon sound and continue reducing fatigue, includes some additional support to include per-weapon low ammo sounds and acoustics.</li><li>Remastered several characters&#x27; weapon fire sounds using the new feature set (Wraith, Dynamo, Calico, and Abrams).</li><li>Improved bullet whizby audio detection.</li><li>Ensured technical parity between automatic and animation-driven footstep systems.</li><li>Match Start conversations now have a 50% chance of firing - this reduces repetition as well gives the patron a chance to speak individually to a hero.</li><li>Match Start conversation timings have been adjusted to make them flow faster and more naturally.</li><li>Match Start conversations will no longer partially fire, so if content has not been recorded you won&#x27;t hear the start of a conversation then no follow-up.</li><li>Green lane is once again referred to as Greenwich by heroes.</li><li>Added a new Ping for &quot;leaving the area&quot; for most heroes.</li><li>Adjusted Patron VO frequency when leveling up so they&#x27;re a little less chatty.</li><li>Fixed several issues with heroes referring to other heroes with outdated names or not saying their name at all.</li><li>Updated Shopkeeper VO - minor update that adds a few new interactions.</li><li>Turned off/on a handful of stray VO lines to have things be more in line with current iteration of abilities (for instance Holliday no longer says &quot;armor&#x27;s not going to save you&quot;, when in fact, armor could save you).</li><li>Increased volume for hero effort VO sounds (jumping, dashing, mantling).</li><li>Teammates&#x27; pain VO will receive a volume boost when their health gets below a certain threshold.</li><li>Changed Hero Death VO to be directional.</li><li>Items now show Spirit Scaling when alt is pressed.</li><li>General visual pass to minimap in concert with map changes to improve its read and usability.</li><li>Objective icons and lanes on minimap have been adjusted for visual and functional clarity.</li><li>New lower &quot;basement&quot; level texture was added to minimap when players traverse into deeper parts of the map.</li><li>All keyboard/controller button glyphs have been unified into a common UI element.</li><li>Keyboard, Mouse, and Button bind stylings have improved, especially in the case of &quot;inline&quot; bindings.</li><li>When an action is not bound to any key button, there is a symbol in its place.</li><li>When an ability or active item button is pressed during cooldown, the related element will shake and glow red briefly.</li><li>Updated and improved search functionality in the shop.</li><li>The cooldown alert message has been removed, but alert messages related to Charges, Silences, etc. remain.</li><li>Objective healthbars now only show for the Patron, Shrines, and Midboss.</li><li>When stunned or disarmed the reticle now changes state and displays a duration meter.</li><li>Hiding gun disarmed FX and generic disarm particles since the reticle communicates the disarmed state.</li><li>Added overhead indicators for disarm abilities.</li><li>Don&#x27;t show cooldowns on ability icons for the imbue popup.</li><li>Reordered ping wheel messages with lanes so the order matches the left to right order of the lanes.</li><li>Simplified and reworked the menu when you hit ESC while in-game.</li><li>Deadlock loading screens can now animate and show other controls.</li><li>Added charge-up icon and entry in labels in the same way we have cooldowns for items.</li><li>Added &quot;unstoppable&quot; as a status effect to show in tooltips.</li><li>The ultimate icons on the team&#x27;s bar at the top of the HUD have been updated.</li><li>Added UI indication when an item is upgradeable in the shop (when you already have a component for an item).</li><li>Added purchase messages in the chat feed for T3 and T4 items that allies or enemies purchase.</li><li>Added a corner cap on items in inventory/scoreboard/etc to replace the old tier indicators and give better tree recognition.</li><li>Disabled low/mid health label under crosshair.</li><li>Made it so scaling values below 0.5 shows 2 decimals instead of 1.</li><li>Hovering items in the damage report now shows tooltip for that item.</li><li>Sinner&#x27;s Sacrifice bonuses now appear faster.</li><li>Added a UI state when Stamina is disabled with a debuff.</li><li>Top bar now uses the new vertical bar graphs.</li><li>Charge-up items (Mystic Burst, Tankbuster, QSR, Ethereal Bullets) now show &#x27;cooldown&#x27; timing clock on icon while they are charging up.</li><li>When charge-up items are fully charged the HUD icon at center will show just like items that are refreshed on cooldown.</li><li>Renamed &quot;Move Speed Resist&quot; to &quot;Slow Resist&quot;.</li><li>Items in your HUD are organized by cheapest to most expensive from left to right.</li><li>Base Guardians now share a single Icon / HP pool on Minimap.</li><li>Patron now shows an icon for each of its phases.</li><li>Active items are no longer sorted separately from the rest of the items; all items are now sorted alphabetically.</li><li>Range and Duration upgrades are now labeled as “Ability Range” and “Ability Duration” tooltip wise, to help with searching in the shop.</li><li>Added new &#x27;out of combat&#x27; run and sprint.</li><li>New Crouch animations.</li><li>Improved hipfire animations.</li><li>Added custom jump catapult animation - an alternate jump animation when using fans and Majestic Leap etc.</li><li>Refined jump start to be cleaner.</li><li>Added custom Zipline Boosted loop.</li><li>Added Zipline swinging animation.</li><li>Fixed a regression where Abrams&#x27; Siphon Life and Shoulder Charge ping VO were swapped.</li><li>Removed competing camera modifier on Seismic Impact.</li><li>Fixed camera position on client&#x27;s ground target not using previews, causing it to be jittery.</li><li>Hook: Reworked code to reduce mispredicts.</li><li>Hook: When Bebop hooks a trooper, only Bebop will hear the hook success sound now.</li><li>Hook: Fixed the hook sometimes not breaking when the target is stuck.</li><li>Hook: Fixed the target sometimes not being positioned in front of Bebop when Bebop rotated.</li><li>New updated model and animations.</li><li>Hero pose ambient VFX added.</li><li>Reload effects revisions.</li><li>Fixed announcer match start line to be spoken by the friendly announcer (was randomly picking between friendly and enemy).</li><li>Various tooltip fixes.</li><li>Base Bullet Damage spirit power scaling reduced from 0.09 to 0.07.</li><li>Charged Shot T3 Spirit Power scaling reduced from 1.3 to 1.2.</li><li>VO remastering pass.</li><li>Sleep no longer wakes up from damage over time.</li><li>Catalyst: Projectile no longer slides against geometry.</li><li>Watcher&#x27;s Covenant: Fixed not replicating healing from Bullet Lifesteal (it worked with other sources of bullet lifesteal).</li><li>Base Spirit Resist reduced from 15% to 10%.</li><li>Bullet Growth reduced from 0.311 to 0.29.</li><li>Bullet Velocity increased from 590 to 650.</li><li>No longer has +15% Base Bullet Resist.</li><li>Now has +1% Spirit Resist per Boon.</li><li>Mini Turrets: No longer have a 3 second minimum life time.  They now spawn with 60% spirit and bullet resist that decays over 6s.</li><li>Mini Turrets: T3 duration reduced from +18s to +14s.</li><li>Tornado: Improved camera animations during ability.</li><li>VO remastering pass as well as new VO content.</li><li>Animation for holding and throwing items has been added.</li><li>Base bullet damage increased from 3.9 to 4.1.</li><li>VO remastering pass as well as updated ping lines.</li><li>Minor rework on animation set.</li><li>Gun: Improved firing effects.</li><li>Gun: Fixed alt-fire weapon thinking it could zoom. It would try if you held right-click and jumped.</li><li>Gun: Falloff range reduced from 20m-&gt;58m to 18m-&gt;52m.</li><li>New sounds added.</li><li>Effects revision to show when the item procs.</li><li>Fixed it not playing the correct cast sound.</li><li>Now uses charge-up mechanic (recharges its proc strength over its cooldown duration).</li><li>Updated overhead visual counter.</li><li>Now stops all momentum on Stun so victims fall straight down.</li><li>Effects revision at start to make it more apparent.</li><li>Added metal footstep sweetener sound when Metal Skin is active.</li><li>Now uses charge-up mechanic.</li><li>Fixed its fire rate buff not being networked, and therefore not showing up in left-hand panel.</li><li>New sounds added</li><li>Now plays a sound every time a stack is gained.</li><li>Returned Bullets factor in attacker movement and cannot be easily avoided by strafing.</li><li>Added effect on activation.</li><li>Fixed item not granting +20% weapon power.</li><li>Effects revisions for better visibility and separation from other effects.</li><li>Fixed jittery health numbers in some non-English languages.</li><li>Adjusted the width of the individual soul count backer in the HUD by language to prevent player soul counts from spilling outside of the bounding box in languages where number formatting and/or length of the abbreviation for thousands results in longer text than English.</li><li>Applied language-specific width adjustments and padding to the team soul count panel to improve readability.</li><li>Localized the loading screen.</li><li>Added localized versions of the Great For New Players screenshot in the new player dialog window.</li><li>Added localized versions of the the Hero Labs screenshot shown at the hero selection screen.</li><li>Corrected HUD images containing text that were still showing up in English when playing in Korean.</li><li>Adjusted font sizing to fix instances of truncated text in the Hero Testing menu in Russian and Indonesian.</li><li>Enabled resizing of the new player dialog window to fit longer or shorter text appropriately in translation and prevent the &quot;Got it!&quot; button from being cut off in languages with longer text.</li><li>Enabled font scaling on the Imbue and Active tag labels and the Report button to prevent truncation in certain languages.</li><li>Fixed multiple instances of single character awkwardly wrapping to second line in Japanese.</li><li>Added localization support for bot hero pings.</li><li>Fixed the base healing sound sometimes getting stuck on.</li><li>Fixed items like Suppressor showing fire rate slow deltas for yourself when it&#x27;s actually applied to the enemy.</li><li>Fixed crosshairs not always showing the Disarmed state even though you&#x27;re disarmed.</li><li>Fixed heroes that have weapon attributes that get scaled by spirit not showing in the deltas for weapon attributes on the mod tooltips.</li><li>Fixed Move speed on the HUD always showing Sprint speed included even if you weren&#x27;t sprinting.</li><li>Fixed hero stats on dashboard page getting updated from the stats in your previous game.</li><li>Fixed not being able to ping while the game is paused.</li><li>Fixed issue with hero stats tooltip. For example, Glass Cannon was showing -20 health instead of -20% health when hovering the stat tooltip.</li><li>Fixed selling items in Sandbox asking if you want to sell for half price.</li><li>Fixed rare bug causing you to get stuck on a zipline until you manually dismount.</li><li>Fixed bug causing nearby other players to appear jittery while on a zipline.</li><li>Fixed issues that were preventing Yamato, Vindicta, and Pocket desperation lines from playing.</li><li>Fixed corrections when granting ammo via modifier.</li><li>Fixed Soul Urn Icon not appearing next to enemies on the minimap if they were Team Sapphire.</li><li>Fixed Shotguns not having their damage properly reduced against Guardians.</li><li>Fixed abilities and items allowing one to circumvent the max speed cap on players holding the Soul Urn.</li><li>Fixed an edge case where a player could claim the Rejuvenator while they were also parried on their attack.</li><li>Fixed some cases of self damage putting zipline usage on Cooldown and/or knocking the player off the zipline.</li><li>Fixed Debuff Reducer reducing Soul Urn and Unsecured Orbs pickup time.</li><li>Fixed a bug causing Lash&#x27;s Ground Strike impact to be too loud and Flog impact to be too quiet when hitting large groups of enemies with each ability.</li><li>Fixed a bug preventing Dynamo&#x27;s and Lash&#x27;s light melee sounds from playing.</li><li>Fixed a bug causing Holliday&#x27;s weapon firing sound to be too quiet with sustained firing.</li><li>Fixed a bug causing Holliday&#x27;s Crackshot ready sound to play while dead.</li><li>Fixed a bug preventing ambient cricket sounds from playing.</li><li>Fixed a bug preventing ambient tree sounds from looping correctly.</li><li>Fixed a bug causing some looping sounds to occasionally start with a small delay.</li><li>Fixed a bug causing Lucky Shot&#x27;s proc sound to play too loud for certain weapon types.</li><li>Fixed match start zipline conversations being too quiet.</li><li>Fixed various Bullet Velocity tooltip issues.</li><li>Fixed Bullet Velocity not working properly when you had multiple sources (it would pick the highest, even if you had a negative source).</li><li>Fixed Stamina Recovery not showing deltas properly.</li><li>Fixed crash when clicking &quot;Take Control&quot; and there&#x27;s nothing to control.</li><li>Fixed Phantom Strike causing infinite gravity during the duration of the debuff.</li><li>Fix various cases where Magic Carpet would get cancelled if any enemy stepped in to your debuff (IE Viscous Goo, Inferno FlameDash, Ivy Kudzu).</li><li>Fixed a bug where some item and ability interactions were accidentally being reduced by Debuff Reducer, like Viscous&#x27; Ball Stun prevention and some kill trackers.</li><li>Fix Vindicta flight and Wraith Full Auto spirit damage not working if the enemy has a barrier.</li></ul>\n<h2 id="item-changes" data-mog-section="">Item Changes</h2>\n')} `
	);
	_5_08_mg$1($$renderer, {});
	$$renderer.push(
		`<!----> <div class="item affliction">${html('\n<h3 id="affliction">Affliction</h3>\n<ul><li>No longer removed by Debuff Remover (as this item no longer removes ultimate effects).</li><li>Duration reduced from 18s to 14s.</li><li>DPS increased from 10 to 30.</li><li>Initial damage reduced from 18% to 10%.</li><li>T2 now increases duration by +4s.</li><li>T2 Healing Reduction reduced from -50% to -40%.</li><li>T3 no longer has % Current HP damage.</li><li>T3 increased from +10 DPS to +20 DPS.</li><li>T3 range increased from +5m to +6m.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Affliction',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item air-drop">${html('\n<h3 id="air-drop">Air Drop</h3>\n')} <ul><li>${html('Adjusted visuals to have higher contrast.')}</li> <li>${html('Ally cast range increased from 8m to 12m.')}</li> <li>${html('Slow duration reduced from 4s to 3s.')}</li> <li>${html('Radius reduced from 14m to 12m.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Air Drop',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Radius reduced from 14m to 12m.'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Combat Barrier reduced from 200 to 150.')}</li> <li>${html('Combat Barrier Spirit Power scaling reduced from 2.5 to 1.5.')}</li> <li>${html('T1 duration reduced from 12s to 8s.')}</li> <li>${html('T2 Combat Barrier reduced from +300 to +200.')}</li> <li>${html('T3 Silence reduced from 4.5s to 3s.')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Air Drop',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item arctic-beam">${html('\n<h3 id="arctic-beam">Arctic Beam</h3>\n<ul><li>Fixed damaging enemies through thin walls.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Arctic Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item assassinate">${html('\n<h3 id="assassinate">Assassinate</h3>\n<ul><li>Fixed Vindicta Assassinate zoom in sound triggering twice.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Assassinate',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item bounce-pad">${html('\n<h3 id="bounce-pad">Bounce Pad</h3>\n<ul><li>Fixed a bug where bounce pads might force you back to the ground after use.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Bounce Pad',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item burrow">${html('\n<h3 id="burrow">Burrow</h3>\n<ul><li>T2 reduced from +100 Damage to +80.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Burrow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item combo">${html('\n<h3 id="combo">Combo</h3>\n<ul><li>Bonus health on kill/assist reduced from +70 to +50.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Combo',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item death-slam">${html('\n<h3 id="death-slam">Death Slam</h3>\n<ul><li>UI lock-on revisions to simplify readability.</li><li>Fixed channel effect on Death Slam to not disappear prematurely.</li><li>New sounds added for lock-on success sounds, in-air looping sound, victim impact sounds, and a &#x27;miss&#x27; sound when Lash does not successfully grab anybody or cancels the ability early.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Death Slam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item exploding-uppercut">${html('\n<h3 id="exploding-uppercut">Exploding Uppercut</h3>\n<ul><li>Fixed missing uppercut hero impact sound.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Exploding Uppercut',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item flog">${html('\n<h3 id="flog">Flog</h3>\n<ul><li>Updated ability icon.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Flog',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item goo-ball">${html('\n<h3 id="goo-ball">Goo Ball</h3>\n')} <ul><li>${html('Cooldown increased from 95s to 105s.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Goo Ball',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Cooldown increased from 95s to 105s.'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Fixed it knocking back heroes with Unstoppable state.')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Goo Ball',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ground-strike">${html('\n<h3 id="ground-strike">Ground Strike</h3>\n<ul><li>Spirit scaling reduced from 0.05 to 0.04.</li><li>Fixed a bug that caused Ground Strike to push the victim under the world.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ground Strike',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item heavy-barrage">${html('\n<h3 id="heavy-barrage">Heavy Barrage</h3>\n')} <ul><li>${html('Projectile and ambient effects revisions.')}</li> <li>${html('Now allows full movement while channeling the ability.')}</li> <li>${html('Fixed a bug where the Camera would not zoom out during the ability if user setting was set to QuickCast.')}</li> <li>${html('Now slows your dash usage by 35%.')}</li> <li>${html('Damage per rocket reduced from 30 to 23.')}</li> <li>${html('Minimum distance increased from 7m to 9m.')}</li> <li>${html('Cooldown increased from 140s to 150s.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Heavy Barrage',
		groupIndex: 0,
		bulletIndex: 6,
		text: 'Cooldown increased from 140s to 150s.'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Spirit power scaling reduced from 0.35 to 0.25.')}</li> <li>${html('T3 damage per rocket reduced from +30 to +25.')}</li> <li>${html('T3 now also increases spirit scaling by 0.1.')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Heavy Barrage',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item hyper-beam">${html('\n<h3 id="hyper-beam">Hyper Beam</h3>\n<ul><li>Effect revisions for projections on vertical surfaces.</li><li>Fixed damaging enemies through thin walls.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Hyper Beam',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item ice-path">${html('\n<h3 id="ice-path">Ice Path</h3>\n<ul><li>Reduced how sticky the Ice Path is for allies.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Ice Path',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item killing-blow">${html('\n<h3 id="killing-blow">Killing Blow</h3>\n<ul><li>Threshold reduced from 22% to 20%.</li><li>T2 threshold reduced from +6% to +5%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Killing Blow',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item kinetic-pulse">${html('\n<h3 id="kinetic-pulse">Kinetic Pulse</h3>\n<ul><li>T1 Fire Rate slow now matches the Move Slow</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Kinetic Pulse',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item leaping-slash">${html('\n<h3 id="leaping-slash">Leaping Slash</h3>\n<ul><li>Fixed animation getting stuck when stunned during the ability cast.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Leaping Slash',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item life-drain">${html('\n<h3 id="life-drain">Life Drain</h3>\n<ul><li>You&#x27;re now only slowed when Life Drain is damaging a target.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Life Drain',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item medicinal-specter">${html('\n<h3 id="medicinal-specter">Medicinal Specter</h3>\n<ul><li>Effects revisions and improvements.</li><li>Fixed audio buildup when multiple characters are being healed by Medicinal Specter at once.</li><li>Now provides +15% Stamina Regen.</li><li>T3 reduced from 4% to 3.5%.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Medicinal Specter',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item mini-turret">${html('\n<h3 id="mini-turret">Mini Turret</h3>\n<ul><li>Updated DPS tooltip to properly reflect the correct number.</li><li>Updated ambient, tracer, and muzzle flash effects.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Mini Turret',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item petrifying-bola">${html('\n<h3 id="petrifying-bola">Petrifying Bola</h3>\n<ul><li>Debuff effect revisions to help identify targets better.</li><li>Adjusted the volume of direct hits and explosion sounds.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Petrifying Bola',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item powder-keg">${html('\n<h3 id="powder-keg">Powder Keg</h3>\n<ul><li>Fixed being able to spawn barrels on the other side of thin walls.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Powder Keg',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item puddle-punch">${html('\n<h3 id="puddle-punch">Puddle Punch</h3>\n<ul><li>Fix a bug where Puddle Punch would sometimes not deal damage when the target was very close to a wall.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Puddle Punch',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item quantum-entanglement">${html('\n<h3 id="quantum-entanglement">Quantum Entanglement</h3>\n<ul><li>Added small lerp to VFX for the teleport and smoothed out camera transitions.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Quantum Entanglement',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rabbit-hex">${html('\n<h3 id="rabbit-hex">Rabbit Hex</h3>\n<ul><li>Fixed a bug where Henry and Savannah wouldn&#x27;t play VO when turning enemies into rabbits.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rabbit Hex',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item rejuvenating-aurora">${html('\n<h3 id="rejuvenating-aurora">Rejuvenating Aurora</h3>\n<ul><li>Effect revisions to center focus on head.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Rejuvenating Aurora',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item sand-blast">${html('\n<h3 id="sand-blast">Sand Blast</h3>\n<ul><li>Projectile no longer slides against geometry.</li><li>No longer deals damage.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Sand Blast',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item scorn">${html('\n<h3 id="scorn">Scorn</h3>\n<ul><li>Heal reduced from 1.3x to 1.2x.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Scorn',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item seismic-impact">${html('\n<h3 id="seismic-impact">Seismic Impact</h3>\n')} <ul><li>${html('Radius increased from 9m to 10.5m.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Seismic Impact',
		groupIndex: 0,
		bulletIndex: 0,
		text: 'Radius increased from 9m to 10.5m.'
	});
	$$renderer.push(
		`<!----></li> <li>${html('Effects revisions.')}</li> <li>${html('Fixed crash down sound triggering twice.')}</li> <li>${html('New slam animation.')}</li> <li>${html('New sounds added for in-air looping sound and descend sound.')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Seismic Impact',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item shoulder-charge">${html('\n<h3 id="shoulder-charge">Shoulder Charge</h3>\n<ul><li>Base duration increased from 1.2s to 1.4s.</li><li>T1 is now &quot;On Hero Collide: +25% Weapon Damage for 8s&quot;.</li><li>T2 is now &quot;-12s Cooldown&quot;.</li><li>T3 is now &quot;+0.2s Stun Duration and 40% Movement Slow for 4s&quot;.</li><li>New cycle and pre cast &#x27;goose step&#x27;.</li><li>Added support for shoulder charging while in air.</li><li>New sounds added for hitting heroes, troopers, and walls.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Shoulder Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item singularity">${html('\n<h3 id="singularity">Singularity</h3>\n<ul><li>Updated effects revisions.</li><li>Increased tick rate, equals out to roughly the same DPS overall, just smoother.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Singularity',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item siphon-life">${html('\n<h3 id="siphon-life">Siphon Life</h3>\n<ul><li>Added new animation logic support for Siphon Life and items.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Siphon Life',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spectral-wall">${html('\n<h3 id="spectral-wall">Spectral Wall</h3>\n')} <ul><li>${html('Fixed missing sound as it travels before deploy.')}</li> <li>${html('The last 2 segments on the left/right sides of Spectral Wall will now turn towards a nearby wall if there is one.')}</li> <li>${html('Duration reduced from 5s to 4.5s.')}</li> <li>${html('Cooldown increased from 46s to 50s.')} `
	);
	MogPreviousChange($$renderer, {
		kind: 'item',
		name: 'Spectral Wall',
		groupIndex: 0,
		bulletIndex: 3,
		text: 'Cooldown increased from 46s to 50s.'
	});
	$$renderer.push(
		`<!----></li> <li>${html('T2 reduced from -22s to -20s.')}</li> <li>${html('T3 reduced from 1s Stun to 0.75s.')}</li></ul> `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spectral Wall',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-lasso">${html('\n<h3 id="spirit-lasso">Spirit Lasso</h3>\n<ul><li>Holliday now plays VO when she lands a hit with her lasso as opposed to when she casts her lasso (so she won&#x27;t say &quot;shoot them&quot; if she didn&#x27;t actually grab anyone).</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Lasso',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item spirit-snare">${html('\n<h3 id="spirit-snare">Spirit Snare</h3>\n<ul><li>Added physical elements to the AoE visuals.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Spirit Snare',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item static-charge">${html('\n<h3 id="static-charge">Static Charge</h3>\n<ul><li>Can no longer be self cast.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Static Charge',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item stone-form">${html('\n<h3 id="stone-form">Stone Form</h3>\n<ul><li>Fixed cast sound being delayed and increased its volume.</li><li>Fixed interaction with air vents and small geo.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Stone Form',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item telekinesis">${html('\n<h3 id="telekinesis">Telekinesis</h3>\n<ul><li>Revisions to debuff effect.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Telekinesis',
		ability: null
	});
	$$renderer.push(
		`<!----></div> <div class="item vexing-bolt">${html('\n<h3 id="vexing-bolt">Vexing Bolt</h3>\n<ul><li>Redirect telegraphs correctly on vertical geometry.</li></ul>\n')} `
	);
	MogEntityContext($$renderer, {
		kind: 'item',
		name: 'Vexing Bolt',
		ability: null
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _5_08_mg as default, metadata, readingManifest, toc };
