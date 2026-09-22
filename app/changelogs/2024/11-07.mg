``attr:
// Not reproducible offline: this body came from the Steam API, which no longer serves
// a note this old, so regenerate-from-cache.ts skips it and a forum-cache regeneration
// would replace real patch notes with the unfurl summary. The brace escaping that was
// once hand-applied here is now handled by the generator (see bulletLine).
title "11-07-2024 Update"
thread_id "44786"
steam_gid "6148070194801611991"
published "2024-11-07T13:31:34-0800"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Added Trapper to Hero Labs. Added support for Hero Labs in Private Lobbies, Private Bot Games and Sandbox that can be used at any time. Various adjustments to Experimental Heroes are listed in the in-game notes for Hero Labs. Added Quickbuy - You can now right-click items in the shop to add them to your Quickbuy queue. When you return to the shop, you will automatically purchase the items you can afford in your set order. An indicator on the hud will light up when you can afford the next item on your list. In Settings you may change the purchase mode to use a hotkey while in range of the shop rather than auto-purchase. The shaders, map and various other resources will now pre-compile on the dashboard to improve loading times when getting into a match. This also reduces in-game hitching in some cases. Added a visual indicator when browsing builds that shows which item types are most present in the build (Weapon, Vitality, Spirit). Added a Recent Purchases log to the Shop that displays all items bought by players during a match, ordered by most recent. Added support for the new Steam Game Recording Timeline API. This automatically adds timeline markers for kills, deaths, and team objectives. Added checkbox in settings to force the game to take focus when the game is unpaused. You can now hover party members on the dashboard while in queue to view their roster. Active Reload indicator UI slightly adjusted. Added \"Frenzied\" text when you own Frenzy and go below 50% health. Added a Social tab to the Settings dialog. This contains Streamer Mode, added support for Steam content filtering settings and a new setting to adjust incoming chat visibility. Hero Stats on the left side of the hud are now hidden by default, and can be viewed by holding ALT or TAB. When a stat is temporarily increased or decreased, it will show by default for the duration. Added hover tooltip descriptions to stats on the left side of the hud. Bots will more aggressively attack the Shrines and Patron when pushing into the enemy base. Fixed being able to briefly gain regen when crossing the Veil of the enemy fountain. Fixed Commends for All Heroes not showing up correctly in player profiles. Updated McGinnis Barrage explosions to show the edge of the aoe better. Fixed the 'x' button in the shop search not clearing the search box. Sinners Sacrifice now has a final damage state for clear read on final hit. Fixed some issues with Quantum Entanglement not moving units with it correctly when there is nearby geometry. Fixed various bugs with Duplicate Hero not working properly in private lobbies. Fixed Grey Talon getting assist credit while flying Guided Owl. Fixed Sinner's Sacrifice changing facing direction sometimes. Fixed a rare bug where shields would never regenerate. Fixed some cases where troopers could get stuck in the base. Fixed using melee to secure orbs being a little unresponsive. New effects for Viscous heavy melee. Added an ambient looping sound for each bridge powerup. Fixed some animation issues with Vindicta. Added new zipline animation for Vindicta. Looped music will resume playing if interrupted by a transient cue. Various bug fixes for looping sound effects and ones that are sometimes stuck playing every frame for a period of time. Improved animation readability for Mo & Krill heavy melee. Reduced visual clutter on Seven's tracers with high fire rate. Reduced visual clutter on Wraith's tracers with high fire rate. Effects updates for Fortitude. Added missing lean animation near walls for Mirage. Sand Blast distance and aoe read improvements. Fixed issues where health regen effect will begin popping on and off if player is at max health. New sounds added to Yamato’s Power Slash, Flying Strike, and Shadow Transformation abilities. New sounds added to Lash’s Ground Strike and Flog abilities. Renamed \"Mouse Wheel\" to \"Chat Wheel.\" Steam Input support: Added all missing Steam Input Actions from the Key Bindings screen (including Fly Up/Fly Down)​. Added a \"Replay Controls\" action set​. Allow Steam Deck to see the Key Bindings Screen​. Improved Glyph Swapping behavior when mixing controller and keyboard inputs​. Added Controller tab to house Controller specific options.​ Added a Steam Input Configurator launch button.​ Added Glyph Locking options: { Automatic | Keyboard & Mouse Only | Game Pad Only }​. Fixed crash in spectator mode when querying controller button state​. Fixed Controller not working until loading a level​. Official Steam Input configs for SteamDeck and DualSense have been updated​. Note: Legacy Analog Modes have been removed/replaced in favor of new Camera specific Steam Input modes. Some users may need to re-bind their joysticks/gyros.​ Troopers no longer change soul sharing rules after laning phase ends (meaning 2 heroes don't split souls). Troopers no longer increase their bounty by 20% at 8 minutes. Hero Kill gold increased from 150->1400 to 175->2000 (from 0 min to 45 min). Neutral Creeps now give 5% less souls. Troopers now take 28% more damage from Guardians. Walkers damage vs players increased by 10%. Guardians will now focus their attack on enemy players if an enemy player shoots a hero and the enemy player is within 15m of the Guardian. Moved 8 neutral camps (4 on each side) from outside the outer lanes behind the Walkers to in between inner and outer lanes. Added Cosmic Veils to the ground floor entrances to Mid that grant vision looking in but block vision looking out. Biased Urn delivery locations moved slightly closer to neutral positions. Minor adjustments to respawn curve (40s respawn happening at 20m now happens at 17m). Walker armor loss over time now happens at 16m instead of 14m. Troopers Spirit resist goes to 30% instead of 40% at 25 minutes. Mid Boss Rejuv Trooper Health increased by 30%. Fixed Troopers resistance against Base Guardians not working properly. Redesigned the warehouse interior to allow entry from the front of the Tenements and Music Hall buildings. Moved the stairs from the warehouse interior to the underground tunnel further from the Urn delivery location. Removed all railings from fire escape stairs. Pass at making rooftops smoother to navigate. Removed angled supports from chimney. Removed collision from small props. Added stairs on top of Bodega. Replaced small chimneys and temporary spikes with larger roof spikes to designate zap trigger locations. Replaced temp antennae with more \"menacing\" version to designate zap trigger locations. New Hotel building art pass. Changed exit location from the player spawn area to the rest of the base to the angled walls. Combat Barrier: Fire Rate increased from 6% to 7%. Debuff Remover: Debuff Resistance increased from 35% to 40%. Debuff Remover: Cooldown reduced from 48s to 45s. Withering Whip: Bullet Resist reduction reduced from -14% to -11%. Withering Whip: Cooldown reduced from 22s to 18s. Withering Whip: Now deals 50 Spirit Damage. Improved Cooldown: Cooldown Reduction reduced from 16% to 14%. Improved Cooldown: Spirit Shield improved from 75 to 100. Improved Cooldown: Now grants +10% Ammo. Improved Burst: Now triggers on your base damage, rather than how much the target receives. Improved Burst: Max HP damage reduced from 9% to 8%. Abrams Reverted Melee attack speed reduction. Shoulder Charge can now again use left/right strafe to slightly change direction. Shoulder Charge now carries momentum at the end of the charge. Siphon Life spirit scaling increased from 0.3 to 0.36. Infernal Resilience Damage Regen reduced from 15% to 14%. Infernal Resilience Damage Regen duration increased from 18s to 20s. Infernal Resilience T3 reduced from +8% to +7%. Fixed an issue where Seismic impact would travel more downwards instead of the facing direction. Bebop Sticky Bomb damage gained per hero impact increased from 1% to 1.5%. Sticky Bomb damage gained per hero kill reduced from 5% to 4%. Sticky Bomb T3 changed from Disarm to -30% Damage Penalty for 5s (similar to Inhibitor's debuff). Sticky Bomb now calculates its damage at detonation time rather than cast time (affects item combinations). Sticky Bomb now has 2x cast range when used on allies. Hook damage reduced from 40 to 10. Hook damage now has spirit scaling of 2x. Hyper Beam now goes on cooldown for 3 seconds when canceled during precast. Dynamo Now gains 1% Bullet Resist per Boon (0->14%). Fixed Quantum Entanglement sometimes not moving you to the destination properly. Singularity now deals 1.5% Max HP in the base ability. Singularity T3 increased from 3.8% to 4%. Singularity Base DPS reduced from 60 to 45. Grey Talon Base bullet damage reduced from 27 to 24. Bullet damage growth per boon increased from 1.41 to 1.62 (same total damage later on). Falloff range rescaled from 22m->58m to 18m->54m. Rain of Arrows strafe distance with stamina reduced by 30%. Charged Shot hitbox size reduced by 20%. Haze Bullet Dance no longer hits 2 targets. Bullet Dance now grants +30% Fire Rate. Bullet Dance now allows you to use items during it. Sleep Dagger T3 now also causes targets to wake up with -40% Fire Rate. Infernus Catalyst slow reduced from 40% to 35%. Afterburn buildup per bullet/headshot reduced from 10%/16% to 9%/14%. Ivy Watcher's Covenant Fire Rate spirit scaling increased from 0.2 to 0.3. Watcher's Covenant Bullet Lifesteal spirit scaling increased from 0.2 to 0.3. Lash Ground Strike can now be cast while on the zipline. Fixed interaction between Mirage's tornado and Death Slam. Ground Strike now pulls enemies to the ground with you (similar to Stone Form recently). McGinnis Mini Turrets DPS reduced from 60 to 40. Mini Turrets health reduced from 20% max HP to 15%. Mirage Bullet size reduced from 6 to 5. Tornado speed reduced from 20m to 18m. Tornado Lift Duration reduced from 1.1s to 1s. Fire Scarabs T2 reduced from -15% Bullet Resist to -10%. Paradox Bullet velocity increased from 411 to 525. Time Wall no longer has charges. Time Wall no longer deals 10% Max Health Damage. Time Wall cooldown reduced from 37s to 25s. Time Wall T2 is now Deals 10% Max Health Damage. Kinetic Carbine Max Damage Amp increased from 85% to 100%. Paradoxical Swap time to complete the swap reduced from 0.5-1.5 to 0.3-0.6 (variable based on distance). Pocket Barrage spirit scaling increased from 0.4 to 0.5. Light melee damage increased from 63 to 75. Vindicta Base bullet damage reduced from 15 to 13. Bullet damage growth per boon increased from 0.65 to 0.8 (same total damage later on). Stake duration increased from 1.75s to 2s. Flight T2 reduced from +8s to +6s. Crow Familiar tick rate changed from every 0.5s to every 1s. Assassinate starts at 25% power instead of 50% power. Viscous The Cube health regen now scales with spirit at 0.2. Goo Ball down dash ability moved from T3 to base ability. Goo Ball size now increases with range upgrades (doesn't affect collision with world). Fixed some hit detection issues with Goo Ball. Warden Now has +1 Sprint. Bullet Velocity increased from 213 to 290. Last Stand now goes on cooldown if you die or the ability is interrupted while cast. Last Stand T3 no longer grants unstoppable during channel. Last Stand now grants +50% Spirit Resist during channel. Wraith Telekinesis cast time increased from 0.6 to 0.7. Telekinesis damage reduced from 200 to 175. Yamato Shadow Transformation now affects the grapple time speed. Shadow Transformation duration increased from 4s to 6s. Shadow Transformation no longer prevents death. Shadow Transformation now grants +60% Bullet and Spirit Resist. Shadow Transformation now heals for 30% hp (done after the dispel). Shadow Transformation duration now extends by 2s whenever you get a kill in it (for that session). Close Quarters No longer grants +85 Bullet Shield Health. Now grants +5% Bullet Resist. Restorative Shot No longer grants +7% Bullet Resist. Now grants +90 Bullet Shield. Now procs on orb shots for NPC heal value. Melee Charge No longer grants +1 HP Regen. Weapon Damage reduced from 12% to 10%. Long Range Long range Weapon Damage reduced from 40% to 30%. Now grants +10% Weapon Damage. Berserker Bullet Resist increased from 7% to 9%. Active Reload Now grants +50 Health. Slowing Bullets Spirit Power increased from +5 to +6. Sharpshooter Long range Weapon Damage reduced from 70% to 50%. Now grants +20% Weapon Damage. Alchemical Fire Now grants +1 Sprint. Heroic Aura Cooldown reduced from 32s to 25s. Intensifying Magazine Time to reach Max Damage reduced from 3s to 2.7s. Toxic Bullets Damage changed from 5% of Current Health to 2.5% of Max Health. Shadow Weave Detection range increased from 18m to 22m. Glass Cannon Health loss reduced from -15% to -12%. Frenzy Low HP bullet resist increased from 45% to 55%. Lucky Shot Fixed it causing proc effects to roll twice whenever it procced. Silencer Now grants +12% Spirit Resist. Vampiric Burst Cooldown reduced from 34s to 30s. Extra Health Weapon Damage increased from 6% to 7%. Healing Rite Duration increased from 19s to 20s (total health restored unchanged). Bullet Armor Bullet Resist increased from 25% to 26%. Return Fire Duration reduced from 7s to 6s. Healing Nova Now grants +6% Ability Range. Debuff Reducer Health increased from +75 to +125. Healbane Healing reduction increased from -40% to -45%. Reactive Barrier Restores 1 stamina on proc. Spirit Armor Spirit Resist increased from 20% to 22%. Divine Barrier No longer grants +8% Ability Range. Now grants +6 Spirit Power. Restorative Locket No longer grants +5 Spirit Power. Now grants +25% Melee Resistance. Metal Skin No longer blocks melee damage. Veil Walker Ammo increased from 12% to 15%. Weapon Damage increased from 10% to 15%. Fortitude Health increased from 365 to 400. Lifestrike Bullet resistance increased from 8% to 10%. Soul Rebirth Removed from the game. Inhibitor Slow reduced from 25% to 20%. Siphon Bullets Now grants +15% Weapon Damage. Phantom Strike Now grounds any flying targets on impact (similar to how Slowing Hex used to work). Ammo Scavenger Duration increased from 35s to 45s. Mystic Burst Now triggers on your base damage, rather than how much the target receives. Slowing Hex Now uses Enduring Spirit as a component. Now gains +10% Spirit Lifesteal and +75 Bonus Health. Spirit Power reduced from 5 to 4. No longer grants +1 Sprint. Damage reduced from 70 to 40. Decay Now grants +1.5 HP Regen. Now grants +8% Ability Duration. Healing reduction increased from -50% to -70%. Bleed Damage reduced from 3.1% to 1%. Cooldown reduced from 45s to 33s. Superior Cooldown Now grants +15% Ammo. Magic Carpet Now grants +10% Ability Range."
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-11-02" to="2024-11-07"
  after from="2024-11-08" to="2024-11-10"
}
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
``attr:
impact closed=#true {
  all {
    before win=0.5528 pick=0.5691 matches=285016 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5321 pick=0.5824 matches=115116 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))

- Reverted Melee attack speed reduction.

==ability:shoulder-charge:
[[/ability/shoulder-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp]] Shoulder Charge change history))
### [[/ability/shoulder-charge]]((Shoulder Charge))

- Shoulder Charge can now again use left/right strafe to slightly change direction.
- Shoulder Charge now carries momentum at the end of the charge.
==
==ability:siphon-life:
[[/ability/siphon-life]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp]] Siphon Life change history))
### [[/ability/siphon-life]]((Siphon Life))

- Siphon Life spirit scaling increased from 0.3 to 0.36.
==
==ability:infernal-resilience-damage-regen:
### [[/ability/infernal-resilience]]((Infernal Resilience Damage Regen))

- Infernal Resilience Damage Regen reduced from 15% to 14%.
- Infernal Resilience Damage Regen duration increased from 18s to 20s.
==
==ability:infernal-resilience:
[[/ability/infernal-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]] Infernal Resilience change history))
### [[/ability/infernal-resilience]]((Infernal Resilience))

- Infernal Resilience T3 reduced from +8% to +7%.
==
==ability:seismic-impact:
[[/ability/seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/ability/seismic-impact]]((Seismic Impact))

- Fixed an issue where Seismic impact would travel more downwards instead of the facing direction.
==
=
=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.4992 pick=0.673 matches=337044 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4929 pick=0.6921 matches=136798 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))

==ability:sticky-bomb:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/ability/sticky-bomb]]((Sticky Bomb))

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
[[/ability/hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam change history))
### [[/ability/hyper-beam]]((Hyper Beam))

- Hyper Beam now goes on cooldown for 3 seconds when canceled during precast.
==
=
=hero:dynamo:
``attr:
impact closed=#true {
  all {
    before win=0.4878 pick=0.3985 matches=199563 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5175 pick=0.4237 matches=83749 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))

- Now gains 1% Bullet Resist per Boon (0->14%).

==ability:quantum-entanglement:
[[/ability/quantum-entanglement]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp]] Quantum Entanglement change history))
### [[/ability/quantum-entanglement]]((Quantum Entanglement))

- Fixed Quantum Entanglement sometimes not moving you to the destination properly.
==
==ability:singularity:
[[/ability/singularity]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp]] Singularity change history))
### [[/ability/singularity]]((Singularity))

- Singularity now deals 1.5% Max HP in the base ability.
- Singularity T3 increased from 3.8% to 4%.
==
==ability:singularity-base-dps:
### [[/ability/singularity]]((Singularity Base DPS))

- Singularity Base DPS reduced from 60 to 45.
==
=
=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.4766 pick=0.6763 matches=338669 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4562 pick=0.5565 matches=109994 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))

- Base bullet damage reduced from 27 to 24.
- Bullet damage growth per boon increased from 1.41 to 1.62 (same total damage later on).
- Falloff range rescaled from 22m->58m to 18m->54m.

==ability:rain-of-arrows:
[[/ability/rain-of-arrows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp]] Rain of Arrows change history))
### [[/ability/rain-of-arrows]]((Rain of Arrows))

- Rain of Arrows strafe distance with stamina reduced by 30%.
==
==ability:charged-shot:
[[/ability/charged-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp]] Charged Shot change history))
### [[/ability/charged-shot]]((Charged Shot))

- Charged Shot hitbox size reduced by 20%.
==
=
=hero:haze:
``attr:
impact closed=#true {
  all {
    before win=0.5426 pick=0.9368 matches=469153 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4967 pick=0.9227 matches=182369 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))

==ability:bullet-dance:
[[/ability/bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/ability/bullet-dance]]((Bullet Dance))

- Bullet Dance no longer hits 2 targets.
- Bullet Dance now grants +30% Fire Rate.
- Bullet Dance now allows you to use items during it.
==
==ability:sleep-dagger:
[[/ability/sleep-dagger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp]] Sleep Dagger change history))
### [[/ability/sleep-dagger]]((Sleep Dagger))

- Sleep Dagger T3 now also causes targets to wake up with -40% Fire Rate.
==
=
=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=0.495 pick=0.8417 matches=421541 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4845 pick=0.7977 matches=157653 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))

==ability:catalyst:
### Catalyst

- Catalyst slow reduced from 40% to 35%.
==
==ability:afterburn:
[[/ability/afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/ability/afterburn]]((Afterburn))

- Afterburn buildup per bullet/headshot reduced from 10%/16% to 9%/14%.
==
=
=hero:ivy:
``attr:
impact closed=#true {
  all {
    before win=0.5094 pick=0.4487 matches=224691 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5301 pick=0.4615 matches=91219 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))

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
``attr:
impact closed=#true {
  all {
    before win=0.4882 pick=0.5181 matches=259480 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5024 pick=0.5663 matches=111919 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/lash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]] Lash patch history))
## [[/hero/lash]]((Lash))

==ability:ground-strike:
[[/ability/ground-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp]] Ground Strike change history))
### [[/ability/ground-strike]]((Ground Strike))

- Ground Strike can now be cast while on the zipline.
==
==ability:death-slam:
[[/ability/death-slam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp]] Death Slam change history))
### [[/ability/death-slam]]((Death Slam))

- Fixed interaction between Mirage's tornado and Death Slam.
==
==ability:ground-strike:
[[/ability/ground-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp]] Ground Strike change history))
### [[/ability/ground-strike]]((Ground Strike))

- Ground Strike now pulls enemies to the ground with you (similar to Stone Form recently).
==
=
=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.5366 pick=0.653 matches=327009 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4998 pick=0.5806 matches=114752 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))

==ability:mini-turrets-dps:
### [[/ability/mini-turret]]((Mini Turrets DPS))

- Mini Turrets DPS reduced from 60 to 40.
==
==ability:mini-turrets:
### [[/ability/mini-turret]]((Mini Turrets))

- Mini Turrets health reduced from 20% max HP to 15%.
==
=
=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.5009 pick=0.4808 matches=240781 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.484 pick=0.4086 matches=80765 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))

- Bullet size reduced from 6 to 5.

==ability:tornado:
### Tornado

- Tornado speed reduced from 20m to 18m.
==
==ability:tornado-lift-duration:
### Tornado Lift Duration

- Tornado Lift Duration reduced from 1.1s to 1s.
==
==ability:fire-scarabs:
[[/ability/fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/ability/fire-scarabs]]((Fire Scarabs))

- Fire Scarabs T2 reduced from -15% Bullet Resist to -10%.
==
=
=hero:paradox:
``attr:
impact closed=#true {
  all {
    before win=0.4824 pick=0.4902 matches=245481 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4782 pick=0.5003 matches=98873 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))

- Bullet velocity increased from 411 to 525.

==ability:time-wall:
[[/ability/time-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp]] Time Wall change history))
### [[/ability/time-wall]]((Time Wall))

- Time Wall no longer has charges.
- Time Wall no longer deals 10% Max Health Damage.
- Time Wall cooldown reduced from 37s to 25s.
- Time Wall T2 is now Deals 10% Max Health Damage.
==
==ability:kinetic-carbine-max-damage-amp:
### [[/ability/kinetic-carbine]]((Kinetic Carbine Max Damage Amp))

- Kinetic Carbine Max Damage Amp increased from 85% to 100%.
==
==ability:paradoxical-swap:
[[/ability/paradoxical-swap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp]] Paradoxical Swap change history))
### [[/ability/paradoxical-swap]]((Paradoxical Swap))

- Paradoxical Swap time to complete the swap reduced from 0.5-1.5 to 0.3-0.6 (variable based on distance).
==
=
=hero:pocket:
``attr:
impact closed=#true {
  all {
    before win=0.466 pick=0.3414 matches=170977 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4937 pick=0.3838 matches=75848 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))

==ability:barrage:
[[/ability/barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp]] Barrage change history))
### [[/ability/barrage]]((Barrage))

- Barrage spirit scaling increased from 0.4 to 0.5.
==

- Light melee damage increased from 63 to 75.
=
=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.4783 pick=0.7331 matches=367153 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4754 pick=0.6813 matches=134659 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))

- Base bullet damage reduced from 15 to 13.
- Bullet damage growth per boon increased from 0.65 to 0.8 (same total damage later on).

==ability:stake:
[[/ability/stake]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp]] Stake change history))
### [[/ability/stake]]((Stake))

- Stake duration increased from 1.75s to 2s.
==
==ability:flight:
[[/ability/flight]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]] Flight change history))
### [[/ability/flight]]((Flight))

- Flight T2 reduced from +8s to +6s.
==
==ability:crow-familiar:
[[/ability/crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow Familiar change history))
### [[/ability/crow-familiar]]((Crow Familiar))

- Crow Familiar tick rate changed from every 0.5s to every 1s.
==
==ability:assassinate:
[[/ability/assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/ability/assassinate]]((Assassinate))

- Assassinate starts at 25% power instead of 50% power.
==
=
=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=0.463 pick=0.2847 matches=142593 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4887 pick=0.3663 matches=72388 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))

==ability:the-cube:
[[/ability/the-cube]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp]] The Cube change history))
### [[/ability/the-cube]]((The Cube))

- The Cube health regen now scales with spirit at 0.2.
==
==ability:goo-ball:
[[/ability/goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball change history))
### [[/ability/goo-ball]]((Goo Ball))

- Goo Ball down dash ability moved from T3 to base ability.
- Goo Ball size now increases with range upgrades (doesn't affect collision with world).
- Fixed some hit detection issues with Goo Ball.
==
=
=hero:warden:
``attr:
impact closed=#true {
  all {
    before win=0.5241 pick=0.4811 matches=240920 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5338 pick=0.5049 matches=99793 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))

- Now has +1 Sprint.
- Bullet Velocity increased from 213 to 290.

==ability:last-stand:
[[/ability/last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/ability/last-stand]]((Last Stand))

- Last Stand now goes on cooldown if you die or the ability is interrupted while cast.
- Last Stand T3 no longer grants unstoppable during channel.
- Last Stand now grants +50% Spirit Resist during channel.
==
=
=hero:wraith:
``attr:
impact closed=#true {
  all {
    before win=0.4932 pick=0.8053 matches=403277 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4924 pick=0.77 matches=152183 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))

==ability:telekinesis:
[[/ability/telekinesis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp]] Telekinesis change history))
### [[/ability/telekinesis]]((Telekinesis))

- Telekinesis cast time increased from 0.6 to 0.7.
- Telekinesis damage reduced from 200 to 175.
==
=
=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.4802 pick=0.3797 matches=190177 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5544 pick=0.5599 matches=110657 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))

==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))

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
``attr:
impact closed=#true {
  all {
    before win=0.5101 pick=0.0762 matches=458065 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4926 pick=0.075 matches=177866 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/active-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp]] Active Reload patch history))
## [[/item/active-reload]]((Active Reload))

- Now grants +50 Health.
=
=item:alchemical-fire:
``attr:
impact closed=#true {
  all {
    before win=0.4961 pick=0.0147 matches=88578 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5066 pick=0.0176 matches=41714 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))

- Now grants +1 Sprint.
=
=item:ammo-scavenger:
[[/item/ammo-scavenger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]] Ammo Scavenger patch history))
## [[/item/ammo-scavenger]]((Ammo Scavenger))

- Duration increased from 35s to 45s.
=
=item:berserker:
``attr:
impact closed=#true {
  all {
    before win=0.5224 pick=0.0776 matches=466463 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5251 pick=0.0815 matches=193364 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))

- Bullet Resist increased from 7% to 9%.
=
=item:bullet-armor:
[[/item/bullet-armor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.webp]] Bullet Armor patch history))
## [[/item/bullet-armor]]((Bullet Armor))

- Bullet Resist increased from 25% to 26%.
=
=item:close-quarters:
``attr:
impact closed=#true {
  all {
    before win=0.5034 pick=0.2064 matches=1240419 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5103 pick=0.2165 matches=513479 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/close-quarters]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp]] Close Quarters patch history))
## [[/item/close-quarters]]((Close Quarters))

- No longer grants +85 Bullet Shield Health.
- Now grants +5% Bullet Resist.
=
=item:debuff-reducer:
``attr:
impact closed=#true {
  all {
    before win=0.497 pick=0.0586 matches=351994 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5046 pick=0.0625 matches=148293 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/debuff-reducer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp]] Debuff Reducer patch history))
## [[/item/debuff-reducer]]((Debuff Reducer))

- Health increased from +75 to +125.
=
=item:decay:
``attr:
impact closed=#true {
  all {
    before win=0.469 pick=0.0224 matches=134399 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4839 pick=0.0254 matches=60327 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))

- Now grants +1.5 HP Regen.
- Now grants +8% Ability Duration.
- Healing reduction increased from -50% to -70%.
- Bleed Damage reduced from 3.1% to 1%.
- Cooldown reduced from 45s to 33s.
=
=item:divine-barrier:
[[/item/divine-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp]] Divine Barrier patch history))
## [[/item/divine-barrier]]((Divine Barrier))

- No longer grants +8% Ability Range.
- Now grants +6 Spirit Power.
=
=item:extra-health:
``attr:
impact closed=#true {
  all {
    before win=0.5003 pick=0.236 matches=1418067 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5004 pick=0.2434 matches=577392 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/extra-health]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp]] Extra Health patch history))
## [[/item/extra-health]]((Extra Health))

- Weapon Damage increased from 6% to 7%.
=
=item:fortitude:
``attr:
impact closed=#true {
  all {
    before win=0.5142 pick=0.1115 matches=669915 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5082 pick=0.1215 matches=288156 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/fortitude]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp]] Fortitude patch history))
## [[/item/fortitude]]((Fortitude))

- Health increased from 365 to 400.
=
=item:frenzy:
``attr:
impact closed=#true {
  all {
    before win=0.5563 pick=0.0305 matches=183533 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5513 pick=0.0416 matches=98705 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/frenzy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp]] Frenzy patch history))
## [[/item/frenzy]]((Frenzy))

- Low HP bullet resist increased from 45% to 55%.
=
=item:glass-cannon:
``attr:
impact closed=#true {
  all {
    before win=0.5385 pick=0.0663 matches=398344 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5315 pick=0.072 matches=170838 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/glass-cannon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp]] Glass Cannon patch history))
## [[/item/glass-cannon]]((Glass Cannon))

- Health loss reduced from -15% to -12%.
=
=item:healbane:
``attr:
impact closed=#true {
  all {
    before win=0.4927 pick=0.162 matches=973444 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5088 pick=0.1773 matches=420466 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/healbane]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp]] Healbane patch history))
## [[/item/healbane]]((Healbane))

- Healing reduction increased from -40% to -45%.
=
=item:healing-nova:
``attr:
impact closed=#true {
  all {
    before win=0.4986 pick=0.0292 matches=175389 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5187 pick=0.0432 matches=102350 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/healing-nova]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp]] Healing Nova patch history))
## [[/item/healing-nova]]((Healing Nova))

- Now grants +6% Ability Range.
=
=item:healing-rite:
``attr:
impact closed=#true {
  all {
    before win=0.4945 pick=0.2403 matches=1444357 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5006 pick=0.2483 matches=588806 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/healing-rite]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.webp]] Healing Rite patch history))
## [[/item/healing-rite]]((Healing Rite))

- Duration increased from 19s to 20s (total health restored unchanged).
=
=item:heroic-aura:
``attr:
impact closed=#true {
  all {
    before win=0.5517 pick=0.0321 matches=193172 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5268 pick=0.0291 matches=69111 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/heroic-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp]] Heroic Aura patch history))
## [[/item/heroic-aura]]((Heroic Aura))

- Cooldown reduced from 32s to 25s.
=
=item:inhibitor:
``attr:
impact closed=#true {
  all {
    before win=0.5659 pick=0.037 matches=222495 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5426 pick=0.0398 matches=94499 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/inhibitor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp]] Inhibitor patch history))
## [[/item/inhibitor]]((Inhibitor))

- Slow reduced from 25% to 20%.
=
=item:intensifying-magazine:
``attr:
impact closed=#true {
  all {
    before win=0.512 pick=0.0906 matches=544514 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5084 pick=0.0969 matches=229747 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/intensifying-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp]] Intensifying Magazine patch history))
## [[/item/intensifying-magazine]]((Intensifying Magazine))

- Time to reach Max Damage reduced from 3s to 2.7s.
=
=item:lifestrike:
``attr:
impact closed=#true {
  all {
    before win=0.5371 pick=0.0521 matches=312945 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5256 pick=0.0539 matches=127853 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/lifestrike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp]] Lifestrike patch history))
## [[/item/lifestrike]]((Lifestrike))

- Bullet resistance increased from 8% to 10%.
=
=item:long-range:
``attr:
impact closed=#true {
  all {
    before win=0.4847 pick=0.1135 matches=681992 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4771 pick=0.1216 matches=288491 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/long-range]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp]] Long Range patch history))
## [[/item/long-range]]((Long Range))

- Long range Weapon Damage reduced from 40% to 30%.
- Now grants +10% Weapon Damage.
=
=item:lucky-shot:
``attr:
impact closed=#true {
  all {
    before win=0.5683 pick=0.1033 matches=620950 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5345 pick=0.0956 matches=226790 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/lucky-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp]] Lucky Shot patch history))
## [[/item/lucky-shot]]((Lucky Shot))

- Fixed it causing proc effects to roll twice whenever it procced.
=
=item:magic-carpet:
``attr:
impact closed=#true {
  all {
    before win=0.5581 pick=0.003 matches=18123 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5807 pick=0.0052 matches=12261 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/magic-carpet]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.webp]] Magic Carpet patch history))
## [[/item/magic-carpet]]((Magic Carpet))

- Now grants +10% Ability Range.
=
=item:melee-charge:
``attr:
impact closed=#true {
  all {
    before win=0.5318 pick=0.081 matches=486522 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5197 pick=0.0819 matches=194346 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/melee-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp]] Melee Charge patch history))
## [[/item/melee-charge]]((Melee Charge))

- No longer grants +1 HP Regen.
- Weapon Damage reduced from 12% to 10%.
=
=item:metal-skin:
``attr:
impact closed=#true {
  all {
    before win=0.4263 pick=0.0556 matches=334428 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4509 pick=0.045 matches=106840 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/metal-skin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp]] Metal Skin patch history))
## [[/item/metal-skin]]((Metal Skin))

- No longer blocks melee damage.
=
=item:mystic-burst:
``attr:
impact closed=#true {
  all {
    before win=0.4863 pick=0.4082 matches=2453105 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4957 pick=0.417 matches=989086 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/mystic-burst]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp]] Mystic Burst patch history))
## [[/item/mystic-burst]]((Mystic Burst))

- Now triggers on your base damage, rather than how much the target receives.
=
=item:phantom-strike:
``attr:
impact closed=#true {
  all {
    before win=0.5527 pick=0.0114 matches=68274 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5532 pick=0.0179 matches=42397 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/phantom-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp]] Phantom Strike patch history))
## [[/item/phantom-strike]]((Phantom Strike))

- Now grounds any flying targets on impact (similar to how Slowing Hex used to work).
=
=item:reactive-barrier:
``attr:
impact closed=#true {
  all {
    before win=0.4864 pick=0.0449 matches=269559 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4931 pick=0.0488 matches=115780 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/reactive-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier patch history))
## [[/item/reactive-barrier]]((Reactive Barrier))

- Restores 1 stamina on proc.
=
=item:restorative-locket:
``attr:
impact closed=#true {
  all {
    before win=0.5101 pick=0.01 matches=59987 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5187 pick=0.0106 matches=25228 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))

- No longer grants +5 Spirit Power.
- Now grants +25% Melee Resistance.
=
=item:restorative-shot:
``attr:
impact closed=#true {
  all {
    before win=0.4948 pick=0.1636 matches=983191 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.503 pick=0.1707 matches=404777 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))

- No longer grants +7% Bullet Resist.
- Now grants +90 Bullet Shield.
- Now procs on orb shots for NPC heal value.
=
=item:return-fire:
``attr:
impact closed=#true {
  all {
    before win=0.4815 pick=0.0587 matches=353031 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4928 pick=0.0616 matches=146061 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/return-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp]] Return Fire patch history))
## [[/item/return-fire]]((Return Fire))

- Duration reduced from 7s to 6s.
=
=item:shadow-weave:
``attr:
impact closed=#true {
  all {
    before win=0.5303 pick=0.0183 matches=109953 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5219 pick=0.0184 matches=43631 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/shadow-weave]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp]] Shadow Weave patch history))
## [[/item/shadow-weave]]((Shadow Weave))

- Detection range increased from 18m to 22m.
=
=item:sharpshooter:
``attr:
impact closed=#true {
  all {
    before win=0.4787 pick=0.0739 matches=443922 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4697 pick=0.0781 matches=185259 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/sharpshooter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp]] Sharpshooter patch history))
## [[/item/sharpshooter]]((Sharpshooter))

- Long range Weapon Damage reduced from 70% to 50%.
- Now grants +20% Weapon Damage.
=
=item:silencer:
[[/item/silencer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]] Silencer patch history))
## [[/item/silencer]]((Silencer))

- Now grants +12% Spirit Resist.
=
=item:siphon-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.535 pick=0.0344 matches=206682 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5351 pick=0.0428 matches=101498 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/siphon-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]] Siphon Bullets patch history))
## [[/item/siphon-bullets]]((Siphon Bullets))

- Now grants +15% Weapon Damage.
=
=item:slowing-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.5043 pick=0.1135 matches=681977 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5016 pick=0.1087 matches=257827 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/slowing-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp]] Slowing Bullets patch history))
## [[/item/slowing-bullets]]((Slowing Bullets))

- Spirit Power increased from +5 to +6.
=
=item:slowing-hex:
``attr:
impact closed=#true {
  all {
    before win=0.5207 pick=0.0782 matches=469673 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5109 pick=0.0886 matches=210093 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/slowing-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp]] Slowing Hex patch history))
## [[/item/slowing-hex]]((Slowing Hex))

- Now uses Enduring Spirit as a component.
- Now gains +10% Spirit Lifesteal and +75 Bonus Health.
- Spirit Power reduced from 5 to 4.
- No longer grants +1 Sprint.
- Damage reduced from 70 to 40.
=
=item:soul-rebirth:
[[/item/soul-rebirth]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_tech/rebirth.webp]] Soul Rebirth patch history))
## [[/item/soul-rebirth]]((Soul Rebirth))

- Removed from the game.
=
=item:spirit-armor:
[[/item/spirit-armor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp]] Spirit Armor patch history))
## [[/item/spirit-armor]]((Spirit Armor))

- Spirit Resist increased from 20% to 22%.
=
=item:superior-cooldown:
``attr:
impact closed=#true {
  all {
    before win=0.5002 pick=0.2755 matches=1655488 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5026 pick=0.2974 matches=705398 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/superior-cooldown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp]] Superior Cooldown patch history))
## [[/item/superior-cooldown]]((Superior Cooldown))

- Now grants +15% Ammo.
=
=item:toxic-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.4977 pick=0.1343 matches=806946 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.4917 pick=0.1333 matches=316162 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/toxic-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp]] Toxic Bullets patch history))
## [[/item/toxic-bullets]]((Toxic Bullets))

- Damage changed from 5% of Current Health to 2.5% of Max Health.
=
=item:vampiric-burst:
``attr:
impact closed=#true {
  all {
    before win=0.5673 pick=0.0233 matches=140152 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5522 pick=0.0256 matches=60659 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/vampiric-burst]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp]] Vampiric Burst patch history))
## [[/item/vampiric-burst]]((Vampiric Burst))

- Cooldown reduced from 34s to 30s.
=
=item:veil-walker:
``attr:
impact closed=#true {
  all {
    before win=0.507 pick=0.0322 matches=193632 days=5 total=6009612 covered=5 coverage="complete"
    after win=0.5131 pick=0.0369 matches=87405 days=2 total=2371716 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))

- Ammo increased from 12% to 15%.
- Weapon Damage increased from 10% to 15%.
=