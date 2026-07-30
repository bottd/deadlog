``meta:
// Not reproducible offline: this body came from the Steam API, which no longer serves
// a note this old, so regenerate-from-cache.ts skips it and a forum-cache regeneration
// would replace real patch notes with the unfurl summary. The brace escaping that was
// once hand-applied here is now handled by the generator (see bulletLine).
title "11-07-2024 Update"
thread_id "44786"
steam_gid "6148070194801611991"
published "2024-11-07T13:31:34-0800"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
status "draft"
content_text "Added Trapper to Hero Labs. Added support for Hero Labs in Private Lobbies, Private Bot Games and Sandbox that can be used at any time. Various adjustments to Experimental Heroes are listed in the in-game notes for Hero Labs. Added Quickbuy - You can now right-click items in the shop to add them to your Quickbuy queue. When you return to the shop, you will automatically purchase the items you can afford in your set order. An indicator on the hud will light up when you can afford the next item on your list. In Settings you may change the purchase mode to use a hotkey while in range of the shop rather than auto-purchase. The shaders, map and various other resources will now pre-compile on the dashboard to improve loading times when getting into a match. This also reduces in-game hitching in some cases. Added a visual indicator when browsing builds that shows which item types are most present in the build (Weapon, Vitality, Spirit). Added a Recent Purchases log to the Shop that displays all items bought by players during a match, ordered by most recent. Added support for the new Steam Game Recording Timeline API. This automatically adds timeline markers for kills, deaths, and team objectives. Added checkbox in settings to force the game to take focus when the game is unpaused. You can now hover party members on the dashboard while in queue to view their roster. Active Reload indicator UI slightly adjusted. Added \"Frenzied\" text when you own Frenzy and go below 50% health. Added a Social tab to the Settings dialog. This contains Streamer Mode, added support for Steam content filtering settings and a new setting to adjust incoming chat visibility. Hero Stats on the left side of the hud are now hidden by default, and can be viewed by holding ALT or TAB. When a stat is temporarily increased or decreased, it will show by default for the duration. Added hover tooltip descriptions to stats on the left side of the hud. Bots will more aggressively attack the Shrines and Patron when pushing into the enemy base. Fixed being able to briefly gain regen when crossing the Veil of the enemy fountain. Fixed Commends for All Heroes not showing up correctly in player profiles. Updated McGinnis Barrage explosions to show the edge of the aoe better. Fixed the 'x' button in the shop search not clearing the search box. Sinners Sacrifice now has a final damage state for clear read on final hit. Fixed some issues with Quantum Entanglement not moving units with it correctly when there is nearby geometry. Fixed various bugs with Duplicate Hero not working properly in private lobbies. Fixed Grey Talon getting assist credit while flying Guided Owl. Fixed Sinner's Sacrifice changing facing direction sometimes. Fixed a rare bug where shields would never regenerate. Fixed some cases where troopers could get stuck in the base. Fixed using melee to secure orbs being a little unresponsive. New effects for Viscous heavy melee. Added an ambient looping sound for each bridge powerup. Fixed some animation issues with Vindicta. Added new zipline animation for Vindicta. Looped music will resume playing if interrupted by a transient cue. Various bug fixes for looping sound effects and ones that are sometimes stuck playing every frame for a period of time. Improved animation readability for Mo & Krill heavy melee. Reduced visual clutter on Seven's tracers with high fire rate. Reduced visual clutter on Wraith's tracers with high fire rate. Effects updates for Fortitude. Added missing lean animation near walls for Mirage. Sand Blast distance and aoe read improvements. Fixed issues where health regen effect will begin popping on and off if player is at max health. New sounds added to Yamato’s Power Slash, Flying Strike, and Shadow Transformation abilities. New sounds added to Lash’s Ground Strike and Flog abilities. Renamed \"Mouse Wheel\" to \"Chat Wheel.\" Steam Input support: Added all missing Steam Input Actions from the Key Bindings screen (including Fly Up/Fly Down)​. Added a \"Replay Controls\" action set​. Allow Steam Deck to see the Key Bindings Screen​. Improved Glyph Swapping behavior when mixing controller and keyboard inputs​. Added Controller tab to house Controller specific options.​ Added a Steam Input Configurator launch button.​ Added Glyph Locking options: { Automatic | Keyboard & Mouse Only | Game Pad Only }​. Fixed crash in spectator mode when querying controller button state​. Fixed Controller not working until loading a level​. Official Steam Input configs for SteamDeck and DualSense have been updated​. Note: Legacy Analog Modes have been removed/replaced in favor of new Camera specific Steam Input modes. Some users may need to re-bind their joysticks/gyros.​ Troopers no longer change soul sharing rules after laning phase ends (meaning 2 heroes don't split souls). Troopers no longer increase their bounty by 20% at 8 minutes. Hero Kill gold increased from 150->1400 to 175->2000 (from 0 min to 45 min). Neutral Creeps now give 5% less souls. Troopers now take 28% more damage from Guardians. Walkers damage vs players increased by 10%. Guardians will now focus their attack on enemy players if an enemy player shoots a hero and the enemy player is within 15m of the Guardian. Moved 8 neutral camps (4 on each side) from outside the outer lanes behind the Walkers to in between inner and outer lanes. Added Cosmic Veils to the ground floor entrances to Mid that grant vision looking in but block vision looking out. Biased Urn delivery locations moved slightly closer to neutral positions. Minor adjustments to respawn curve (40s respawn happening at 20m now happens at 17m). Walker armor loss over time now happens at 16m instead of 14m. Troopers Spirit resist goes to 30% instead of 40% at 25 minutes. Mid Boss Rejuv Trooper Health increased by 30%. Fixed Troopers resistance against Base Guardians not working properly. Redesigned the warehouse interior to allow entry from the front of the Tenements and Music Hall buildings. Moved the stairs from the warehouse interior to the underground tunnel further from the Urn delivery location. Removed all railings from fire escape stairs. Pass at making rooftops smoother to navigate. Removed angled supports from chimney. Removed collision from small props. Added stairs on top of Bodega. Replaced small chimneys and temporary spikes with larger roof spikes to designate zap trigger locations. Replaced temp antennae with more \"menacing\" version to designate zap trigger locations. New Hotel building art pass. Changed exit location from the player spawn area to the rest of the base to the angled walls. Combat Barrier: Fire Rate increased from 6% to 7%. Debuff Remover: Debuff Resistance increased from 35% to 40%. Debuff Remover: Cooldown reduced from 48s to 45s. Withering Whip: Bullet Resist reduction reduced from -14% to -11%. Withering Whip: Cooldown reduced from 22s to 18s. Withering Whip: Now deals 50 Spirit Damage. Improved Cooldown: Cooldown Reduction reduced from 16% to 14%. Improved Cooldown: Spirit Shield improved from 75 to 100. Improved Cooldown: Now grants +10% Ammo. Improved Burst: Now triggers on your base damage, rather than how much the target receives. Improved Burst: Max HP damage reduced from 9% to 8%. Abrams Reverted Melee attack speed reduction. Shoulder Charge can now again use left/right strafe to slightly change direction. Shoulder Charge now carries momentum at the end of the charge. Siphon Life spirit scaling increased from 0.3 to 0.36. Infernal Resilience Damage Regen reduced from 15% to 14%. Infernal Resilience Damage Regen duration increased from 18s to 20s. Infernal Resilience T3 reduced from +8% to +7%. Fixed an issue where Seismic impact would travel more downwards instead of the facing direction. Bebop Sticky Bomb damage gained per hero impact increased from 1% to 1.5%. Sticky Bomb damage gained per hero kill reduced from 5% to 4%. Sticky Bomb T3 changed from Disarm to -30% Damage Penalty for 5s (similar to Inhibitor's debuff). Sticky Bomb now calculates its damage at detonation time rather than cast time (affects item combinations). Sticky Bomb now has 2x cast range when used on allies. Hook damage reduced from 40 to 10. Hook damage now has spirit scaling of 2x. Hyper Beam now goes on cooldown for 3 seconds when canceled during precast. Dynamo Now gains 1% Bullet Resist per Boon (0->14%). Fixed Quantum Entanglement sometimes not moving you to the destination properly. Singularity now deals 1.5% Max HP in the base ability. Singularity T3 increased from 3.8% to 4%. Singularity Base DPS reduced from 60 to 45. Grey Talon Base bullet damage reduced from 27 to 24. Bullet damage growth per boon increased from 1.41 to 1.62 (same total damage later on). Falloff range rescaled from 22m->58m to 18m->54m. Rain of Arrows strafe distance with stamina reduced by 30%. Charged Shot hitbox size reduced by 20%. Haze Bullet Dance no longer hits 2 targets. Bullet Dance now grants +30% Fire Rate. Bullet Dance now allows you to use items during it. Sleep Dagger T3 now also causes targets to wake up with -40% Fire Rate. Infernus Catalyst slow reduced from 40% to 35%. Afterburn buildup per bullet/headshot reduced from 10%/16% to 9%/14%. Ivy Watcher's Covenant Fire Rate spirit scaling increased from 0.2 to 0.3. Watcher's Covenant Bullet Lifesteal spirit scaling increased from 0.2 to 0.3. Lash Ground Strike can now be cast while on the zipline. Fixed interaction between Mirage's tornado and Death Slam. Ground Strike now pulls enemies to the ground with you (similar to Stone Form recently). McGinnis Mini Turrets DPS reduced from 60 to 40. Mini Turrets health reduced from 20% max HP to 15%. Mirage Bullet size reduced from 6 to 5. Tornado speed reduced from 20m to 18m. Tornado Lift Duration reduced from 1.1s to 1s. Fire Scarabs T2 reduced from -15% Bullet Resist to -10%. Paradox Bullet velocity increased from 411 to 525. Time Wall no longer has charges. Time Wall no longer deals 10% Max Health Damage. Time Wall cooldown reduced from 37s to 25s. Time Wall T2 is now Deals 10% Max Health Damage. Kinetic Carbine Max Damage Amp increased from 85% to 100%. Paradoxical Swap time to complete the swap reduced from 0.5-1.5 to 0.3-0.6 (variable based on distance). Pocket Barrage spirit scaling increased from 0.4 to 0.5. Light melee damage increased from 63 to 75. Vindicta Base bullet damage reduced from 15 to 13. Bullet damage growth per boon increased from 0.65 to 0.8 (same total damage later on). Stake duration increased from 1.75s to 2s. Flight T2 reduced from +8s to +6s. Crow Familiar tick rate changed from every 0.5s to every 1s. Assassinate starts at 25% power instead of 50% power. Viscous The Cube health regen now scales with spirit at 0.2. Goo Ball down dash ability moved from T3 to base ability. Goo Ball size now increases with range upgrades (doesn't affect collision with world). Fixed some hit detection issues with Goo Ball. Warden Now has +1 Sprint. Bullet Velocity increased from 213 to 290. Last Stand now goes on cooldown if you die or the ability is interrupted while cast. Last Stand T3 no longer grants unstoppable during channel. Last Stand now grants +50% Spirit Resist during channel. Wraith Telekinesis cast time increased from 0.6 to 0.7. Telekinesis damage reduced from 200 to 175. Yamato Shadow Transformation now affects the grapple time speed. Shadow Transformation duration increased from 4s to 6s. Shadow Transformation no longer prevents death. Shadow Transformation now grants +60% Bullet and Spirit Resist. Shadow Transformation now heals for 30% hp (done after the dispel). Shadow Transformation duration now extends by 2s whenever you get a kill in it (for that session). Close Quarters No longer grants +85 Bullet Shield Health. Now grants +5% Bullet Resist. Restorative Shot No longer grants +7% Bullet Resist. Now grants +90 Bullet Shield. Now procs on orb shots for NPC heal value. Melee Charge No longer grants +1 HP Regen. Weapon Damage reduced from 12% to 10%. Long Range Long range Weapon Damage reduced from 40% to 30%. Now grants +10% Weapon Damage. Berserker Bullet Resist increased from 7% to 9%. Active Reload Now grants +50 Health. Slowing Bullets Spirit Power increased from +5 to +6. Sharpshooter Long range Weapon Damage reduced from 70% to 50%. Now grants +20% Weapon Damage. Alchemical Fire Now grants +1 Sprint. Heroic Aura Cooldown reduced from 32s to 25s. Intensifying Magazine Time to reach Max Damage reduced from 3s to 2.7s. Toxic Bullets Damage changed from 5% of Current Health to 2.5% of Max Health. Shadow Weave Detection range increased from 18m to 22m. Glass Cannon Health loss reduced from -15% to -12%. Frenzy Low HP bullet resist increased from 45% to 55%. Lucky Shot Fixed it causing proc effects to roll twice whenever it procced. Silencer Now grants +12% Spirit Resist. Vampiric Burst Cooldown reduced from 34s to 30s. Extra Health Weapon Damage increased from 6% to 7%. Healing Rite Duration increased from 19s to 20s (total health restored unchanged). Bullet Armor Bullet Resist increased from 25% to 26%. Return Fire Duration reduced from 7s to 6s. Healing Nova Now grants +6% Ability Range. Debuff Reducer Health increased from +75 to +125. Healbane Healing reduction increased from -40% to -45%. Reactive Barrier Restores 1 stamina on proc. Spirit Armor Spirit Resist increased from 20% to 22%. Divine Barrier No longer grants +8% Ability Range. Now grants +6 Spirit Power. Restorative Locket No longer grants +5 Spirit Power. Now grants +25% Melee Resistance. Metal Skin No longer blocks melee damage. Veil Walker Ammo increased from 12% to 15%. Weapon Damage increased from 10% to 15%. Fortitude Health increased from 365 to 400. Lifestrike Bullet resistance increased from 8% to 10%. Soul Rebirth Removed from the game. Inhibitor Slow reduced from 25% to 20%. Siphon Bullets Now grants +15% Weapon Damage. Phantom Strike Now grounds any flying targets on impact (similar to how Slowing Hex used to work). Ammo Scavenger Duration increased from 35s to 45s. Mystic Burst Now triggers on your base damage, rather than how much the target receives. Slowing Hex Now uses Enduring Spirit as a component. Now gains +10% Spirit Lifesteal and +75 Bonus Health. Spirit Power reduced from 5 to 4. No longer grants +1 Sprint. Damage reduced from 70 to 40. Decay Now grants +1.5 HP Regen. Now grants +8% Ability Duration. Healing reduction increased from -50% to -70%. Bleed Damage reduced from 3.1% to 1%. Cooldown reduced from 45s to 33s. Superior Cooldown Now grants +15% Ammo. Magic Carpet Now grants +10% Ability Range."
``


# General Changes

- Added Trapper to Hero Labs.
- Added support for Hero Labs in Private Lobbies, Private Bot Games and Sandbox that can be used at any time.
- Various adjustments to Experimental Heroes are listed in the in-game notes for Hero Labs.
- Added Quickbuy - You can now right-click items in the shop to add them to your Quickbuy queue. When you return to the shop, you will automatically purchase the items you can afford in your set order. An indicator on the hud will light up when you can afford the next item on your list. In Settings you may change the purchase mode to use a hotkey while in range of the shop rather than auto-purchase.
- The shaders, map and various other resources will now pre-compile on the dashboard to improve loading times when getting into a match. This also reduces in-game hitching in some cases.
- Added a visual indicator when browsing builds that shows which item types are most present in the build (Weapon, Vitality, Spirit).
- Added a Recent Purchases log to the Shop that displays all items bought by players during a match, ordered by most recent.
- Added support for the new Steam Game Recording Timeline API. This automatically adds timeline markers for kills, deaths, and team objectives.
- Added checkbox in settings to force the game to take focus when the game is unpaused.
- You can now hover party members on the dashboard while in queue to view their roster.
- Active Reload indicator UI slightly adjusted.
- Added "Frenzied" text when you own Frenzy and go below 50% health.
- Added a Social tab to the Settings dialog. This contains Streamer Mode, added support for Steam content filtering settings and a new setting to adjust incoming chat visibility.
- Hero Stats on the left side of the hud are now hidden by default, and can be viewed by holding ALT or TAB. When a stat is temporarily increased or decreased, it will show by default for the duration.
- Added hover tooltip descriptions to stats on the left side of the hud.
- Bots will more aggressively attack the Shrines and Patron when pushing into the enemy base.
- Fixed being able to briefly gain regen when crossing the Veil of the enemy fountain.
- Fixed Commends for All Heroes not showing up correctly in player profiles.
- Updated McGinnis Barrage explosions to show the edge of the aoe better.
- Fixed the 'x' button in the shop search not clearing the search box.
- Sinners Sacrifice now has a final damage state for clear read on final hit.
- Fixed some issues with Quantum Entanglement not moving units with it correctly when there is nearby geometry.
- Fixed various bugs with Duplicate Hero not working properly in private lobbies.
- Fixed Grey Talon getting assist credit while flying Guided Owl.
- Fixed Sinner's Sacrifice changing facing direction sometimes.
- Fixed a rare bug where shields would never regenerate.
- Fixed some cases where troopers could get stuck in the base.
- Fixed using melee to secure orbs being a little unresponsive.
- New effects for Viscous heavy melee.
- Added an ambient looping sound for each bridge powerup.
- Fixed some animation issues with Vindicta.
- Added new zipline animation for Vindicta.
- Looped music will resume playing if interrupted by a transient cue.
- Various bug fixes for looping sound effects and ones that are sometimes stuck playing every frame for a period of time.
- Improved animation readability for Mo & Krill heavy melee.
- Reduced visual clutter on Seven's tracers with high fire rate.
- Reduced visual clutter on Wraith's tracers with high fire rate.
- Effects updates for Fortitude.
- Added missing lean animation near walls for Mirage.
- Sand Blast distance and aoe read improvements.
- Fixed issues where health regen effect will begin popping on and off if player is at max health.
- New sounds added to Yamato’s Power Slash, Flying Strike, and Shadow Transformation abilities.
- New sounds added to Lash’s Ground Strike and Flog abilities.
- Renamed "Mouse Wheel" to "Chat Wheel."
- Steam Input support:
- Added all missing Steam Input Actions from the Key Bindings screen (including Fly Up/Fly Down)​.
- Added a "Replay Controls" action set​.
- Allow Steam Deck to see the Key Bindings Screen​.
- Improved Glyph Swapping behavior when mixing controller and keyboard inputs​.
- Added Controller tab to house Controller specific options.​
- Added a Steam Input Configurator launch button.​
- Added Glyph Locking options: { Automatic | Keyboard & Mouse Only | Game Pad Only }.
- Fixed crash in spectator mode when querying controller button state​.
- Fixed Controller not working until loading a level​.
- Official Steam Input configs for SteamDeck and DualSense have been updated​.
- Note: Legacy Analog Modes have been removed/replaced in favor of new Camera specific Steam Input modes. Some users may need to re-bind their joysticks/gyros.​
- Troopers no longer change soul sharing rules after laning phase ends (meaning 2 heroes don't split souls).
- Troopers no longer increase their bounty by 20% at 8 minutes.
- Hero Kill gold increased from 150->1400 to 175->2000 (from 0 min to 45 min).
- Neutral Creeps now give 5% less souls.
- Troopers now take 28% more damage from Guardians.
- Walkers damage vs players increased by 10%.
- Guardians will now focus their attack on enemy players if an enemy player shoots a hero and the enemy player is within 15m of the Guardian.
- Moved 8 neutral camps (4 on each side) from outside the outer lanes behind the Walkers to in between inner and outer lanes.
- Added Cosmic Veils to the ground floor entrances to Mid that grant vision looking in but block vision looking out.
- Biased Urn delivery locations moved slightly closer to neutral positions.
- Minor adjustments to respawn curve (40s respawn happening at 20m now happens at 17m).
- Walker armor loss over time now happens at 16m instead of 14m.
- Troopers Spirit resist goes to 30% instead of 40% at 25 minutes.
- Mid Boss Rejuv Trooper Health increased by 30%.
- Fixed Troopers resistance against Base Guardians not working properly.
- Redesigned the warehouse interior to allow entry from the front of the Tenements and Music Hall buildings.
- Moved the stairs from the warehouse interior to the underground tunnel further from the Urn delivery location.
- Removed all railings from fire escape stairs.
- Pass at making rooftops smoother to navigate.
- Removed angled supports from chimney.
- Removed collision from small props.
- Added stairs on top of Bodega.
- Replaced small chimneys and temporary spikes with larger roof spikes to designate zap trigger locations.
- Replaced temp antennae with more "menacing" version to designate zap trigger locations.
- New Hotel building art pass.
- Changed exit location from the player spawn area to the rest of the base to the angled walls.
- Combat Barrier: Fire Rate increased from 6% to 7%.
- Debuff Remover: Debuff Resistance increased from 35% to 40%.
- Debuff Remover: Cooldown reduced from 48s to 45s.
- Withering Whip: Bullet Resist reduction reduced from -14% to -11%.
- Withering Whip: Cooldown reduced from 22s to 18s.
- Withering Whip: Now deals 50 Spirit Damage.
- Improved Cooldown: Cooldown Reduction reduced from 16% to 14%.
- Improved Cooldown: Spirit Shield improved from 75 to 100.
- Improved Cooldown: Now grants +10% Ammo.
- Improved Burst: Now triggers on your base damage, rather than how much the target receives.
- Improved Burst: Max HP damage reduced from 9% to 8%.

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Dynamo", "Grey Talon", "Haze", "Infernus", "Ivy", "Lash", "McGinnis", "Mirage", "Paradox", "Pocket", "Vindicta", "Viscous", "Warden", "Wraith", "Yamato"]} />
``

=hero:abrams:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]]
## Abrams

- Reverted Melee attack speed reduction.
- Shoulder Charge can now again use left/right strafe to slightly change direction.

==ability:shoulder-charge:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp]]
### Shoulder Charge

- Shoulder Charge now carries momentum at the end of the charge.
==
==ability:siphon-life:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp]]
### Siphon Life

- Siphon Life spirit scaling increased from 0.3 to 0.36.
==
==ability:infernal-resilience-damage-regen:
### Infernal Resilience Damage Regen

- Infernal Resilience Damage Regen reduced from 15% to 14%.
- Infernal Resilience Damage Regen duration increased from 18s to 20s.
==
==ability:infernal-resilience:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]]
### Infernal Resilience

- Infernal Resilience T3 reduced from +8% to +7%.

- Fixed an issue where Seismic impact would travel more downwards instead of the facing direction.
==
=
=hero:bebop:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]]
## Bebop

==ability:sticky-bomb:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]]
### Sticky Bomb

- Sticky Bomb damage gained per hero impact increased from 1% to 1.5%.
- Sticky Bomb damage gained per hero kill reduced from 5% to 4%.
- Sticky Bomb T3 changed from Disarm to -30% Damage Penalty for 5s (similar to Inhibitor's debuff).
- Sticky Bomb now calculates its damage at detonation time rather than cast time (affects item combinations).
- Sticky Bomb now has 2x cast range when used on allies.
==
==ability:hook:
### Hook

- Hook damage reduced from 40 to 10.
- Hook damage now has spirit scaling of 2x.
==
==ability:hyper-beam:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]]
### Hyper Beam

- Hyper Beam now goes on cooldown for 3 seconds when canceled during precast.
==
=
=hero:dynamo:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]]
## Dynamo

- Now gains 1% Bullet Resist per Boon (0->14%).
- Fixed Quantum Entanglement sometimes not moving you to the destination properly.

==ability:singularity:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp]]
### Singularity

- Singularity now deals 1.5% Max HP in the base ability.
- Singularity T3 increased from 3.8% to 4%.
==
==ability:singularity-base-dps:
### Singularity Base DPS

- Singularity Base DPS reduced from 60 to 45.
==
=
=hero:grey-talon:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]]
## Grey Talon

- Base bullet damage reduced from 27 to 24.
- Bullet damage growth per boon increased from 1.41 to 1.62 (same total damage later on).

==ability:falloff:
### Falloff

- Falloff range rescaled from 22m->58m to 18m->54m.

- Rain of Arrows strafe distance with stamina reduced by 30%.
- Charged Shot hitbox size reduced by 20%.
==
=
=hero:haze:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]]
## Haze

- Bullet Dance no longer hits 2 targets.
- Bullet Dance now grants +30% Fire Rate.
- Bullet Dance now allows you to use items during it.

==ability:sleep-dagger:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp]]
### Sleep Dagger

- Sleep Dagger T3 now also causes targets to wake up with -40% Fire Rate.
==
=
=hero:infernus:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]]
## Infernus

==ability:catalyst:
### Catalyst

- Catalyst slow reduced from 40% to 35%.

- Afterburn buildup per bullet/headshot reduced from 10%/16% to 9%/14%.
==
=
=hero:ivy:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]]
## Ivy

==ability:watcher-s-covenant-fire-rate:
### Watcher's Covenant Fire Rate

- Watcher's Covenant Fire Rate spirit scaling increased from 0.2 to 0.3.
==
==ability:watcher-s-covenant-bullet-lifesteal:
### Watcher's Covenant Bullet Lifesteal

- Watcher's Covenant Bullet Lifesteal spirit scaling increased from 0.2 to 0.3.
==
=
=hero:lash:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]]
## Lash

- Ground Strike can now be cast while on the zipline.
- Fixed interaction between Mirage's tornado and Death Slam.

==ability:ground-strike:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp]]
### Ground Strike

- Ground Strike now pulls enemies to the ground with you (similar to Stone Form recently).
==
=
=hero:mcginnis:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]]
## McGinnis

==ability:mini-turrets-dps:
### Mini Turrets DPS

- Mini Turrets DPS reduced from 60 to 40.
==
==ability:mini-turrets:
### Mini Turrets

- Mini Turrets health reduced from 20% max HP to 15%.
==
=
=hero:mirage:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]]
## Mirage

- Bullet size reduced from 6 to 5.

==ability:tornado:
### Tornado

- Tornado speed reduced from 20m to 18m.
==
==ability:tornado-lift-duration:
### Tornado Lift Duration

- Tornado Lift Duration reduced from 1.1s to 1s.

- Fire Scarabs T2 reduced from -15% Bullet Resist to -10%.
==
=
=hero:paradox:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]]
## Paradox

- Bullet velocity increased from 411 to 525.

==ability:time-wall:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp]]
### Time Wall

- Time Wall no longer has charges.
- Time Wall no longer deals 10% Max Health Damage.
- Time Wall cooldown reduced from 37s to 25s.
- Time Wall T2 is now Deals 10% Max Health Damage.
==
==ability:kinetic-carbine-max-damage-amp:
### Kinetic Carbine Max Damage Amp

- Kinetic Carbine Max Damage Amp increased from 85% to 100%.

- Paradoxical Swap time to complete the swap reduced from 0.5-1.5 to 0.3-0.6 (variable based on distance).
==
=
=hero:pocket:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]]
## Pocket

==ability:barrage:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp]]
### Barrage

- Barrage spirit scaling increased from 0.4 to 0.5.

- Light melee damage increased from 63 to 75.
==
=
=hero:vindicta:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]]
## Vindicta

- Base bullet damage reduced from 15 to 13.
- Bullet damage growth per boon increased from 0.65 to 0.8 (same total damage later on).

==ability:stake:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp]]
### Stake

- Stake duration increased from 1.75s to 2s.
==
==ability:flight:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]]
### Flight

- Flight T2 reduced from +8s to +6s.

- Crow Familiar tick rate changed from every 0.5s to every 1s.
- Assassinate starts at 25% power instead of 50% power.
==
=
=hero:viscous:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]]
## Viscous

==ability:the-cube:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp]]
### The Cube

- The Cube health regen now scales with spirit at 0.2.

- Goo Ball down dash ability moved from T3 to base ability.
- Goo Ball size now increases with range upgrades (doesn't affect collision with world).
- Fixed some hit detection issues with Goo Ball.
==
=
=hero:warden:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]]
## Warden

- Now has +1 Sprint.
- Bullet Velocity increased from 213 to 290.

==ability:last-stand:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]]
### Last Stand

- Last Stand now goes on cooldown if you die or the ability is interrupted while cast.
- Last Stand T3 no longer grants unstoppable during channel.
- Last Stand now grants +50% Spirit Resist during channel.
==
=
=hero:wraith:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]]
## Wraith

- Telekinesis cast time increased from 0.6 to 0.7.

==ability:telekinesis:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp]]
### Telekinesis

- Telekinesis damage reduced from 200 to 175.
==
=
=hero:yamato:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]]
## Yamato

==ability:shadow-transformation:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]]
### Shadow Transformation

- Shadow Transformation now affects the grapple time speed.
- Shadow Transformation duration increased from 4s to 6s.
- Shadow Transformation no longer prevents death.
- Shadow Transformation now grants +60% Bullet and Spirit Resist.
- Shadow Transformation now heals for 30% hp (done after the dispel).
- Shadow Transformation duration now extends by 2s whenever you get a kill in it (for that session).
==
=
# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Active Reload", "Alchemical Fire", "Ammo Scavenger", "Berserker", "Bullet Armor", "Close Quarters", "Debuff Reducer", "Decay", "Divine Barrier", "Extra Health", "Fortitude", "Frenzy", "Glass Cannon", "Healbane", "Healing Nova", "Healing Rite", "Heroic Aura", "Inhibitor", "Intensifying Magazine", "Lifestrike", "Long Range", "Lucky Shot", "Magic Carpet", "Melee Charge", "Metal Skin", "Mystic Burst", "Phantom Strike", "Reactive Barrier", "Restorative Locket", "Restorative Shot", "Return Fire", "Shadow Weave", "Sharpshooter", "Silencer", "Siphon Bullets", "Slowing Bullets", "Slowing Hex", "Soul Rebirth", "Spirit Armor", "Superior Cooldown", "Toxic Bullets", "Vampiric Burst", "Veil Walker"]} />
``

=item:active-reload:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp]]
## Active Reload

- Now grants +50 Health.
=
=item:alchemical-fire:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]]
## Alchemical Fire

- Now grants +1 Sprint.
=
=item:ammo-scavenger:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]]
## Ammo Scavenger

- Duration increased from 35s to 45s.
=
=item:berserker:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]]
## Berserker

- Bullet Resist increased from 7% to 9%.
=
=item:bullet-armor:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp]]
## Bullet Armor

- Bullet Resist increased from 25% to 26%.
=
=item:close-quarters:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp]]
## Close Quarters

- No longer grants +85 Bullet Shield Health.
- Now grants +5% Bullet Resist.
=
=item:debuff-reducer:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp]]
## Debuff Reducer

- Health increased from +75 to +125.
=
=item:decay:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]]
## Decay

- Now grants +1.5 HP Regen.
- Now grants +8% Ability Duration.
- Healing reduction increased from -50% to -70%.
- Bleed Damage reduced from 3.1% to 1%.
- Cooldown reduced from 45s to 33s.
=
=item:divine-barrier:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp]]
## Divine Barrier

- No longer grants +8% Ability Range.
- Now grants +6 Spirit Power.
=
=item:extra-health:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp]]
## Extra Health

- Weapon Damage increased from 6% to 7%.
=
=item:fortitude:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp]]
## Fortitude

- Health increased from 365 to 400.
=
=item:frenzy:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp]]
## Frenzy

- Low HP bullet resist increased from 45% to 55%.
=
=item:glass-cannon:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp]]
## Glass Cannon

- Health loss reduced from -15% to -12%.
=
=item:healbane:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp]]
## Healbane

- Healing reduction increased from -40% to -45%.
=
=item:healing-nova:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp]]
## Healing Nova

- Now grants +6% Ability Range.
=
=item:healing-rite:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp]]
## Healing Rite

- Duration increased from 19s to 20s (total health restored unchanged).
=
=item:heroic-aura:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp]]
## Heroic Aura

- Cooldown reduced from 32s to 25s.
=
=item:inhibitor:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp]]
## Inhibitor

- Slow reduced from 25% to 20%.
=
=item:intensifying-magazine:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp]]
## Intensifying Magazine

- Time to reach Max Damage reduced from 3s to 2.7s.
=
=item:lifestrike:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp]]
## Lifestrike

- Bullet resistance increased from 8% to 10%.
=
=item:long-range:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp]]
## Long Range

- Long range Weapon Damage reduced from 40% to 30%.
- Now grants +10% Weapon Damage.
=
=item:lucky-shot:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp]]
## Lucky Shot

- Fixed it causing proc effects to roll twice whenever it procced.
=
=item:magic-carpet:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp]]
## Magic Carpet

- Now grants +10% Ability Range.
=
=item:melee-charge:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp]]
## Melee Charge

- No longer grants +1 HP Regen.
- Weapon Damage reduced from 12% to 10%.
=
=item:metal-skin:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp]]
## Metal Skin

- No longer blocks melee damage.
=
=item:mystic-burst:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp]]
## Mystic Burst

- Now triggers on your base damage, rather than how much the target receives.
=
=item:phantom-strike:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp]]
## Phantom Strike

- Now grounds any flying targets on impact (similar to how Slowing Hex used to work).
=
=item:reactive-barrier:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]]
## Reactive Barrier

- Restores 1 stamina on proc.
=
=item:restorative-locket:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]]
## Restorative Locket

- No longer grants +5 Spirit Power.
- Now grants +25% Melee Resistance.
=
=item:restorative-shot:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]]
## Restorative Shot

- No longer grants +7% Bullet Resist.
- Now grants +90 Bullet Shield.
- Now procs on orb shots for NPC heal value.
=
=item:return-fire:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp]]
## Return Fire

- Duration reduced from 7s to 6s.
=
=item:shadow-weave:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp]]
## Shadow Weave

- Detection range increased from 18m to 22m.
=
=item:sharpshooter:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp]]
## Sharpshooter

- Long range Weapon Damage reduced from 70% to 50%.
- Now grants +20% Weapon Damage.
=
=item:silencer:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]]
## Silencer

- Now grants +12% Spirit Resist.
=
=item:siphon-bullets:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]]
## Siphon Bullets

- Now grants +15% Weapon Damage.
=
=item:slowing-bullets:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp]]
## Slowing Bullets

- Spirit Power increased from +5 to +6.
=
=item:slowing-hex:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp]]
## Slowing Hex

- Now uses Enduring Spirit as a component.
- Now gains +10% Spirit Lifesteal and +75 Bonus Health.
- Spirit Power reduced from 5 to 4.
- No longer grants +1 Sprint.
- Damage reduced from 70 to 40.
=
=item:soul-rebirth:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp]]
## Soul Rebirth

- Removed from the game.
=
=item:spirit-armor:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp]]
## Spirit Armor

- Spirit Resist increased from 20% to 22%.
=
=item:superior-cooldown:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp]]
## Superior Cooldown

- Now grants +15% Ammo.
=
=item:toxic-bullets:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp]]
## Toxic Bullets

- Damage changed from 5% of Current Health to 2.5% of Max Health.
=
=item:vampiric-burst:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp]]
## Vampiric Burst

- Cooldown reduced from 34s to 30s.
=
=item:veil-walker:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]]
## Veil Walker

- Ammo increased from 12% to 15%.
- Weapon Damage increased from 10% to 15%.
=