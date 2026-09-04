``meta:
title "07-04-2024 Update"
thread_id "9652"
published "2024-07-04T14:16:32-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
category "patch"
major_update #false
content_text "Added Asia servers and matchmaking region. Testing times for this region are Mon-Thur 5PM to 3AM and Fri-Sun 3PM to 3AM in China Standard Time (GMT+8). Added South America servers and matchmaking region. Testing times for this region are Mon-Thur 5PM to 3AM and Fri-Sun 3PM to 3AM in Atlantic Standard Time (GMT-4). Added a new Damage Report feature. You can now open a flyout panel within the shop to view a breakdown of your hero's incoming and outgoing damage throughout the course of a match. You can also hover an enemy hero to view a quick breakdown of their key stats and items. The data can be filtered by last respawn, 10 minutes, 5 minutes, 3 minutes, 1 minute, or 30 seconds. Reworked the top bar HUD to reduce overall height While spectating or watching replays, the game now has a free cursor mode without needing to hold modifiers down (defaulted to on). Can toggle it off while spectating using the 'J' key. Minimap now displays dead heroes for 5 seconds after their death Reworked the default suggested items for heroes to be much more simple (oriented more strongly for new player onboarding) Parties will now be a little more likely to be in the same lane, if there isn't a wide skill gap or other factors preventing it All instances of collecting souls  (whether claiming your own or denying an opponent) will share the same sound. Being denied a soul orb by an enemy will have its own unique sound. Fixed the HUD cooldown state thrashing while picking up the Soul Urn Fixed Spectral Wall sometimes not spawning depending on the map geometry nearby Added descriptive tooltips to Render and Audio options within settings. Render tooltips include an estimate of performance impact where applicable. Fixed a bug where bullets could penetrate close range targets and hit 2 targets when not intended (was primarily obvious with neutral farming) Reduced the end of match delay from 10s to 4s Added a shatter sound effect for meleeing the mid boss rejuvenator Added ghost models inside the doorways of the juke closets to help clarify which are dead ends Fixed position of the \"All Walkers Destroyed\" Flex slot to be the 2nd slot rather than the 4th Added a sound for when Infernus's Afterburn procs Added rejuvenator pickup sound Minimap now highlights Soul Urn dropoff location Updated Wraith Full Auto cast sound Added audio feedback for environmental damage Fixed sounds associated with last hit playing unreliably Updated sounds for Wraith Card Trick projectile, impact, and when you gain a card Added traffic and construction ambient sounds and updated general ambience mix Urn count changed from 2 to 1 (previous souls value restored) Urn pickup location moved to closer to the outer lanes (on the opposite side of the lane pillar, facing towards the bridge) Urn drop-off location now move to the same spot as the pickup (opposite end of the map, depending on which location the Urn spawns in) Urn pickup time reduced from 4s to 2s Urn now has a 2s drop-off time Urn no longer applies a 15% slow Urn now prevents you from using the zipline while carrying it The person delivering the urn now gets +25% soul bonus Reworked how Powerups work. There are now only 2 locations where they spawn instead of 6 (the two at the strong camps near the middle far edges of the map). The different powerup types are reduced from 6 to 4 and they have been reworked: Powerups now always cycle which ones spawn until they have each spawned, and then they are randomly allocated again Base Guardians and Shrines now have +40% Bullet Resistance. They lose 20% for each enemy hero nearby (down to a minimum of 0% bullet resistance). When they haven't taken damage for 60 seconds, they regenerate 4% max hp per second. Fixed Walkers not using their stomp properly Troopers now deal 25% less damage to other troopers Troopers spawn rate before 10 minutes is now the same as after 10 minutes (30s->25s) Breakables are no longer pre-placed on the map, they now spawn in when they are able to roll for drops (3 minutes) Breakables now use pseudorandom rolls (makes streaks of success or failure less likely) Golden Statue bonuses now have some dynamic weighting based on what has already dropped (makes it less likely that you have too many of one specific bonus over the course of the game) Golden Statue's CD Reduction bonus increased from 0.5% to 0.75% After 25 minutes, the Golden Statue bonuses that drop are slightly stronger: Bullet falloff damage now starts at 25m instead of 27m Inner lane Walker arena (Amber Orange and Sapphire Blue): Added hallway on street level from the warehouse interior to underneath the overpass Reworked stairs for defenders to reach the overpass to start near the Walker and exit with line of sight down the lane Added some juke closets around the map Added some balconies/awnings around the map Shortened the underground tunnels from the Subway entrance side Doorways into the Authority Building and Jazz Club are now offset Moved the new cover barrier in front of the inner lane Guardian closer to the Guardian Basic Magazine: Ammo increased from 15% to 20% Medic Bullets: Renamed to Restorative Shot Superior Stamina: Removed spirit bonus when doing 2x air jumps/dash Superior Stamina: Now grants +8 Spirit Superior Stamina: Now grants +30% Air Dash and Air Jump distance Withering Whip: Now grants +50 Health Improved Burst: No longer applies 50% slow Improved Burst: Now grants +100 Spirit Shield Health Improved Burst: Now grants +12% Weapon Damage Escalating Exposure now has a base of -12% Spirit Resist reduction Abrams Seismic Impact T3 is now Gain +100 Max HP and +15% Fire Rate per enemy hero hit for 25s Bebop Base HP regen reduced from 2 to 1 Hyper Beam cast range increased from 60m to 70m Grey Talon Guided Owl now grants +4 permanent Spirit Power for each hero killed with it Fixed Charged Shot not piercing if it collides with a Mini Turret Haze Smoke Bomb no longer instantly grants sprint Smoke Bomb duration increased from 6s to 8s Smoke Bomb T1 is now -15s CD Smoke Bomb T2 is now +6 Invis Sprint Smoke Bomb T3 is now Gain +30% Bullet Lifesteal for 8s Sleep Dagger T1 changed from +1s Sleep Duration to Drains 1 Stamina Infernus Flame Dash dps linger duration increased from 0.4s to 1s Ivy Fixed some bugs with Watcher's Covenant that caused it to sometimes disconnect/reconnect unintentionally Watcher's Covenant distance threshold to pick a new target increased from 2.5m to 6m Watcher's Covenant can now be cast again on an ally while the buff is active to make it prioritize that hero when possible Kelvin Fixed Frost Grenade not going where you had targeted if you moved quickly during the cast Ice Path T3 bonus now lingers for 6s extra Lash Death Slam time to lock on increased from 0.8s to 0.9s McGinnis Mini Turret damage reduction against troopers/neutrals increased from -30% to -40% Mini Turret damage reduction against objectives increased from -50% to -60% Mini Turret falloff damage increased from -30% to -35% Mini Turret cooldown reduced from 30s to 28s Mini Turret recharge time reduced from 6s to 5s Spectral Wall T1 and T2 swapped Spectral Wall T1 stamina drain reduced from 2 to 1 Mo & Krill Fixed Combo not gaining bonus HP when enemies died during it unless you got the killing blow Health growth per boon reduced from 47 to 44 While burrowed you have the same cast rules as the unborrow phase (i.e. can cast items and Scorn) Seven Static Charge cast range now scales with Spirit (0.1) Vindicta Flight cooldown reduced from 50s to 45s Flight up and down speed improved a bit Warden Binding Word now drains 1 stamina from the target on cast Wraith Project Mind T3 cooldown reduced from -35s to -30s Headshot Booster Cooldown increased from 5s to 7s Fixed the item not visually going on cooldown when it procs Restorative Shot Cooldown increased from 4s to 6s Monster Rounds Damage vs NPCs increased from +30% to +35% Active Reload Cooldown reduced from 25s to 23s Active fire rate bonus increased from 15% to 18% Berserker Weapon Damage per stack reduced from +6% to +5% Titanic Magazine Reload penalty reduced from -15% to -10% Intensifying Magazine Ammo reduced from 30% to 25% Point Blank Now gives +1 Stamina Hunter's Aura Bullet Resist reduction reduced from -15% to -10% Fire Rate slow reduced from -15% to -10% Solo enemy hero case increased from 2x to 3x Burst Fire Slide distance increased from +35% to +50% Tesla Bullets Damage is now affected by falloff Proc chance reduced from 30% to 25% Jump radius reduced from 9m to 8m Escalating Resilience Now gives +14% Ammo Lucky Shot Slow duration reduced from 2s to 1.5s No longer provides +20% Weapon Damage Ricochet Ricochet damage increased from 45% to 50% Silencer Debuff duration reduced from 3s to 2s Crippling Headshot Bullet and Spirit Resist reductions reduced from -30% to -24% Siphon Bullets Steal duration increased from 15s to 20s Sprint Boots Sprint Speed reduced from +3 to +2 Now a component of Enduring Speed Extra Stamina Now provides +10% Stamina Recovery Extra Health Increased from +140 to +150 Enduring Speed Now requires Sprint Boots Now grants +2 Sprint Restorative Locket Can now be cast on allies (30m cast range) Radius on gaining charges increased from 40m to 50m Cooldown increased from 18s to 24s Reactive Barrier Now procs on displacement abilities (e.g. Hook, Paradoxical Swap, Upper Cut) Healbane Debuff duration reduced from 7s to 6s Return Fire Health bonus increased from +75 to +100 Fixed spirit damage returned counting as bullet damage Bullet Lifesteal Increased from 22% to 24% Rescue Beam Cooldown reduced from 40s to 35s Fortitude Duration required to start regenerating reduced from 14s to 13s Majestic Leap Shields no longer prevent the item from being disabled Debuff Reducer The active now reduces the duration of existing debuffs by 80% of their current values. Grants +2m/s for 3s if a debuff was reduced. Passive debuff resistance increased from 30% to 35% Now gives +125 Health Cooldown reduced from 45s to 25s Unstoppable No longer has components (loses slow resist and movespeed bonus) Colossus Cooldown reduced from 65s to 45s Model size increase from 10% to 20% Inhibitor No longer grants +10% Fire Rate Slow reduced from 35% to 25% Leech Spirit Power increased from +7 to +10 Weapon Damage increased from +8% to +12% Bonus Health increased from +125 to +150 Shadow Weave Ambush Fire Rate reduced from +60% to +40% Cooldown increased from 35s to 45s No longer instantly grants sprint Infuser Spirit Power reduced from +18 to +16 Extra Spirit Now gives +25 Health Quicksilver Reload Cooldown increased from 5s to 12s Suppressor Duration reduced from 2.5s to 2s Decay Bleed damage increased from 2.6% of current HP to 2.8% Spirit bonus increased from +5 to +7 Duration Extender Now grants +1.5 hp regen Bullet Resist Shredder Debuff duration increased from 6s to 8s Now gives +5% Bullet Armor Mystic Slow Duration reduced from 2.5s to 2s Superior Duration Imbued duration increased from +30% to +32% Non-imbued duration increased from +22% to +24% Improved Spirit Now grants +75 Health Knockdown Cooldown increased from 30s to 45s Ethereal Shift Cooldown reduced from 30s to 25s Mystic Reverb The target is now slowed by 50% during the 3s delay Diviner's Kevlar Now provides +8% Cooldown Reduction Fixed the duration missing in the tooltip Buff duration increased from 10s to 12s Now grants +700 Spirit Shield and +700 Bullet Shield Boundless Spirit Health Regen increased from +10 to +15 Bonus Health increased from +200 to +300"
``

# General Changes

- Added Asia servers and matchmaking region. Testing times for this region are Mon-Thur 5PM to 3AM and Fri-Sun 3PM to 3AM in China Standard Time (GMT+8).
- Added South America servers and matchmaking region. Testing times for this region are Mon-Thur 5PM to 3AM and Fri-Sun 3PM to 3AM in Atlantic Standard Time (GMT-4).
- Added a new Damage Report feature. You can now open a flyout panel within the shop to view a breakdown of your hero's incoming and outgoing damage throughout the course of a match. You can also hover an enemy hero to view a quick breakdown of their key stats and items. The data can be filtered by last respawn, 10 minutes, 5 minutes, 3 minutes, 1 minute, or 30 seconds.
- Reworked the top bar HUD to reduce overall height
- While spectating or watching replays, the game now has a free cursor mode without needing to hold modifiers down (defaulted to on). Can toggle it off while spectating using the 'J' key.
- Minimap now displays dead heroes for 5 seconds after their death
- Reworked the default suggested items for heroes to be much more simple (oriented more strongly for new player onboarding)
- Parties will now be a little more likely to be in the same lane, if there isn't a wide skill gap or other factors preventing it
- All instances of collecting souls  (whether claiming your own or denying an opponent) will share the same sound. Being denied a soul orb by an enemy will have its own unique sound.
- Fixed the HUD cooldown state thrashing while picking up the Soul Urn
- Fixed Spectral Wall sometimes not spawning depending on the map geometry nearby
- Added descriptive tooltips to Render and Audio options within settings. Render tooltips include an estimate of performance impact where applicable.
- Fixed a bug where bullets could penetrate close range targets and hit 2 targets when not intended (was primarily obvious with neutral farming)
- Reduced the end of match delay from 10s to 4s
- Added a shatter sound effect for meleeing the mid boss rejuvenator
- Added ghost models inside the doorways of the juke closets to help clarify which are dead ends
- Fixed position of the "All Walkers Destroyed" Flex slot to be the 2nd slot rather than the 4th
- Added a sound for when Infernus's Afterburn procs
- Added rejuvenator pickup sound
- Minimap now highlights Soul Urn dropoff location
- Updated Wraith Full Auto cast sound
- Added audio feedback for environmental damage
- Fixed sounds associated with last hit playing unreliably
- Updated sounds for Wraith Card Trick projectile, impact, and when you gain a card
- Added traffic and construction ambient sounds and updated general ambience mix
- Urn count changed from 2 to 1 (previous souls value restored)
- Urn pickup location moved to closer to the outer lanes (on the opposite side of the lane pillar, facing towards the bridge)
- Urn drop-off location now move to the same spot as the pickup (opposite end of the map, depending on which location the Urn spawns in)
- Urn pickup time reduced from 4s to 2s
- Urn now has a 2s drop-off time
- Urn no longer applies a 15% slow
- Urn now prevents you from using the zipline while carrying it
- The person delivering the urn now gets +25% soul bonus
- Reworked how Powerups work. There are now only 2 locations where they spawn instead of 6 (the two at the strong camps near the middle far edges of the map). The different powerup types are reduced from 6 to 4 and they have been reworked:
- Powerups now always cycle which ones spawn until they have each spawned, and then they are randomly allocated again
- Base Guardians and Shrines now have +40% Bullet Resistance. They lose 20% for each enemy hero nearby (down to a minimum of 0% bullet resistance). When they haven't taken damage for 60 seconds, they regenerate 4% max hp per second.
- Fixed Walkers not using their stomp properly
- Troopers now deal 25% less damage to other troopers
- Troopers spawn rate before 10 minutes is now the same as after 10 minutes (30s->25s)
- Breakables are no longer pre-placed on the map, they now spawn in when they are able to roll for drops (3 minutes)
- Breakables now use pseudorandom rolls (makes streaks of success or failure less likely)
- Golden Statue bonuses now have some dynamic weighting based on what has already dropped (makes it less likely that you have too many of one specific bonus over the course of the game)
- Golden Statue's CD Reduction bonus increased from 0.5% to 0.75%
- After 25 minutes, the Golden Statue bonuses that drop are slightly stronger:
- Bullet falloff damage now starts at 25m instead of 27m
- Inner lane Walker arena (Amber Orange and Sapphire Blue):
- Added hallway on street level from the warehouse interior to underneath the overpass
- Reworked stairs for defenders to reach the overpass to start near the Walker and exit with line of sight down the lane
- Added some juke closets around the map
- Added some balconies/awnings around the map
- Shortened the underground tunnels from the Subway entrance side
- Doorways into the Authority Building and Jazz Club are now offset
- Moved the new cover barrier in front of the inner lane Guardian closer to the Guardian
- Basic Magazine: Ammo increased from 15% to 20%
- Medic Bullets: Renamed to Restorative Shot
- Superior Stamina: Removed spirit bonus when doing 2x air jumps/dash
- Superior Stamina: Now grants +8 Spirit
- Superior Stamina: Now grants +30% Air Dash and Air Jump distance
- Withering Whip: Now grants +50 Health
- Improved Burst: No longer applies 50% slow
- Improved Burst: Now grants +100 Spirit Shield Health
- Improved Burst: Now grants +12% Weapon Damage
- Escalating Exposure now has a base of -12% Spirit Resist reduction

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Grey Talon", "Haze", "Infernus", "Ivy", "Kelvin", "Lash", "McGinnis", "Mo &amp; Krill", "Seven", "Vindicta", "Warden", "Wraith"]} />
``

=hero:abrams:
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))
==ability:seismic-impact:
[[/hero/abrams?ability=seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/hero/abrams?ability=seismic-impact]]((Seismic Impact))
- Seismic Impact T3 is now Gain +100 Max HP and +15% Fire Rate per enemy hero hit for 25s
==
=

=hero:bebop:
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
- Base HP regen reduced from 2 to 1
==ability:hyper-beam:
[[/hero/bebop?ability=hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam change history))
### [[/hero/bebop?ability=hyper-beam]]((Hyper Beam))
- Hyper Beam cast range increased from 60m to 70m
==
=

=hero:grey-talon:
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
==ability:guided-owl:
[[/hero/grey-talon?ability=guided-owl]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp]] Guided Owl change history))
### [[/hero/grey-talon?ability=guided-owl]]((Guided Owl))
- Guided Owl now grants +4 permanent Spirit Power for each hero killed with it
==
==ability:charged-shot:
[[/hero/grey-talon?ability=charged-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp]] Charged Shot change history))
### [[/hero/grey-talon?ability=charged-shot]]((Charged Shot))
- Fixed Charged Shot not piercing if it collides with a Mini Turret
==
=

=hero:haze:
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))
==ability:smoke-bomb:
[[/hero/haze?ability=smoke-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp]] Smoke Bomb change history))
### [[/hero/haze?ability=smoke-bomb]]((Smoke Bomb))
- Smoke Bomb no longer instantly grants sprint
- Smoke Bomb duration increased from 6s to 8s
- Smoke Bomb T1 is now -15s CD
- Smoke Bomb T2 is now +6 Invis Sprint
- Smoke Bomb T3 is now Gain +30% Bullet Lifesteal for 8s
==
==ability:sleep-dagger:
[[/hero/haze?ability=sleep-dagger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp]] Sleep Dagger change history))
### [[/hero/haze?ability=sleep-dagger]]((Sleep Dagger))
- Sleep Dagger T1 changed from +1s Sleep Duration to Drains 1 Stamina
==
=

=hero:infernus:
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
==ability:flame-dash:
[[/hero/infernus?ability=flame-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash change history))
### [[/hero/infernus?ability=flame-dash]]((Flame Dash))
- Flame Dash dps linger duration increased from 0.4s to 1s
==
=

=hero:ivy:
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))
==ability:kudzu-connection:
[[/hero/ivy?ability=kudzu-connection]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp]] Kudzu Connection change history))
### [[/hero/ivy?ability=kudzu-connection]]((Kudzu Connection))
- Fixed some bugs with Watcher's Covenant that caused it to sometimes disconnect/reconnect unintentionally
- Watcher's Covenant distance threshold to pick a new target increased from 2.5m to 6m
- Watcher's Covenant can now be cast again on an ally while the buff is active to make it prioritize that hero when possible
==
=

=hero:kelvin:
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))
==ability:frost-grenade:
[[/hero/kelvin?ability=frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/hero/kelvin?ability=frost-grenade]]((Frost Grenade))
- Fixed Frost Grenade not going where you had targeted if you moved quickly during the cast
==
==ability:ice-path:
[[/hero/kelvin?ability=ice-path]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp]] Ice Path change history))
### [[/hero/kelvin?ability=ice-path]]((Ice Path))
- Ice Path T3 bonus now lingers for 6s extra
==
=

=hero:lash:
[[/hero/lash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]] Lash patch history))
## [[/hero/lash]]((Lash))
==ability:death-slam:
[[/hero/lash?ability=death-slam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp]] Death Slam change history))
### [[/hero/lash?ability=death-slam]]((Death Slam))
- Death Slam time to lock on increased from 0.8s to 0.9s
==
=

=hero:mcginnis:
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
==ability:mini-turret:
[[/hero/mcginnis?ability=mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turret change history))
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turret))
- Mini Turret damage reduction against troopers/neutrals increased from -30% to -40%
- Mini Turret damage reduction against objectives increased from -50% to -60%
- Mini Turret falloff damage increased from -30% to -35%
- Mini Turret cooldown reduced from 30s to 28s
- Mini Turret recharge time reduced from 6s to 5s
==
==ability:spectral-wall:
[[/hero/mcginnis?ability=spectral-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp]] Spectral Wall change history))
### [[/hero/mcginnis?ability=spectral-wall]]((Spectral Wall))
- Spectral Wall T1 and T2 swapped
- Spectral Wall T1 stamina drain reduced from 2 to 1
==
=

=hero:mo-krill:
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))
==ability:combo:
[[/hero/mo-krill?ability=combo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp]] Combo change history))
### [[/hero/mo-krill?ability=combo]]((Combo))
- Fixed Combo not gaining bonus HP when enemies died during it unless you got the killing blow
==
- Health growth per boon reduced from 47 to 44
==ability:scorn:
[[/hero/mo-krill?ability=scorn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp]] Scorn change history))
### [[/hero/mo-krill?ability=scorn]]((Scorn))
- While burrowed you have the same cast rules as the unborrow phase (i.e. can cast items and Scorn)
==
=

=hero:seven:
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:static-charge:
[[/hero/seven?ability=static-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp]] Static Charge change history))
### [[/hero/seven?ability=static-charge]]((Static Charge))
- Static Charge cast range now scales with Spirit (0.1)
==
=

=hero:vindicta:
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
==ability:flight:
[[/hero/vindicta?ability=flight]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]] Flight change history))
### [[/hero/vindicta?ability=flight]]((Flight))
- Flight cooldown reduced from 50s to 45s
- Flight up and down speed improved a bit
==
=

=hero:warden:
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))
==ability:binding-word:
[[/hero/warden?ability=binding-word]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp]] Binding Word change history))
### [[/hero/warden?ability=binding-word]]((Binding Word))
- Binding Word now drains 1 stamina from the target on cast
==
=

=hero:wraith:
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))
==ability:project-mind:
[[/hero/wraith?ability=project-mind]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp]] Project Mind change history))
### [[/hero/wraith?ability=project-mind]]((Project Mind))
- Project Mind T3 cooldown reduced from -35s to -30s
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Active Reload", "Berserker", "Boundless Spirit", "Bullet Lifesteal", "Bullet Resist Shredder", "Burst Fire", "Colossus", "Crippling Headshot", "Debuff Reducer", "Decay", "Diviner's Kevlar", "Duration Extender", "Enduring Speed", "Escalating Resilience", "Ethereal Shift", "Extra Health", "Extra Spirit", "Extra Stamina", "Fortitude", "Headshot Booster", "Healbane", "Hunter's Aura", "Improved Spirit", "Infuser", "Inhibitor", "Intensifying Magazine", "Knockdown", "Leech", "Lucky Shot", "Majestic Leap", "Monster Rounds", "Mystic Reverb", "Mystic Slow", "Point Blank", "Quicksilver Reload", "Reactive Barrier", "Rescue Beam", "Restorative Locket", "Restorative Shot", "Return Fire", "Ricochet", "Shadow Weave", "Silencer", "Siphon Bullets", "Sprint Boots", "Superior Duration", "Suppressor", "Tesla Bullets", "Titanic Magazine", "Unstoppable"]} />
``

=item:active-reload:
[[/item/active-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp]] Active Reload patch history))
## [[/item/active-reload]]((Active Reload))
- Cooldown reduced from 25s to 23s
- Active fire rate bonus increased from 15% to 18%
=

=item:berserker:
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))
- Weapon Damage per stack reduced from +6% to +5%
=

=item:boundless-spirit:
[[/item/boundless-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp]] Boundless Spirit patch history))
## [[/item/boundless-spirit]]((Boundless Spirit))
- Health Regen increased from +10 to +15
- Bonus Health increased from +200 to +300
=

=item:bullet-lifesteal:
[[/item/bullet-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp]] Bullet Lifesteal patch history))
## [[/item/bullet-lifesteal]]((Bullet Lifesteal))
- Increased from 22% to 24%
=

=item:bullet-resist-shredder:
[[/item/bullet-resist-shredder]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp]] Bullet Resist Shredder patch history))
## [[/item/bullet-resist-shredder]]((Bullet Resist Shredder))
- Debuff duration increased from 6s to 8s
- Now gives +5% Bullet Armor
=

=item:burst-fire:
[[/item/burst-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp]] Burst Fire patch history))
## [[/item/burst-fire]]((Burst Fire))
- Slide distance increased from +35% to +50%
=

=item:colossus:
[[/item/colossus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.webp]] Colossus patch history))
## [[/item/colossus]]((Colossus))
- Cooldown reduced from 65s to 45s
- Model size increase from 10% to 20%
=

=item:crippling-headshot:
[[/item/crippling-headshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp]] Crippling Headshot patch history))
## [[/item/crippling-headshot]]((Crippling Headshot))
- Bullet and Spirit Resist reductions reduced from -30% to -24%
=

=item:debuff-reducer:
[[/item/debuff-reducer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp]] Debuff Reducer patch history))
## [[/item/debuff-reducer]]((Debuff Reducer))
- The active now reduces the duration of existing debuffs by 80% of their current values. Grants +2m/s for 3s if a debuff was reduced.
- Passive debuff resistance increased from 30% to 35%
- Now gives +125 Health
- Cooldown reduced from 45s to 25s
=

=item:decay:
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))
- Bleed damage increased from 2.6% of current HP to 2.8%
- Spirit bonus increased from +5 to +7
=

=item:diviner-s-kevlar:
[[/item/diviners-kevlar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp]] Diviner's Kevlar patch history))
## [[/item/diviners-kevlar]]((Diviner's Kevlar))
- Now provides +8% Cooldown Reduction
- Fixed the duration missing in the tooltip
- Buff duration increased from 10s to 12s
- Now grants +700 Spirit Shield and +700 Bullet Shield
=

=item:duration-extender:
[[/item/duration-extender]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp]] Duration Extender patch history))
## [[/item/duration-extender]]((Duration Extender))
- Now grants +1.5 hp regen
=

=item:enduring-speed:
[[/item/enduring-speed]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp]] Enduring Speed patch history))
## [[/item/enduring-speed]]((Enduring Speed))
- Now requires Sprint Boots
- Now grants +2 Sprint
=

=item:escalating-resilience:
[[/item/escalating-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.webp]] Escalating Resilience patch history))
## [[/item/escalating-resilience]]((Escalating Resilience))
- Now gives +14% Ammo
=

=item:ethereal-shift:
[[/item/ethereal-shift]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp]] Ethereal Shift patch history))
## [[/item/ethereal-shift]]((Ethereal Shift))
- Cooldown reduced from 30s to 25s
=

=item:extra-health:
[[/item/extra-health]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp]] Extra Health patch history))
## [[/item/extra-health]]((Extra Health))
- Increased from +140 to +150
=

=item:extra-spirit:
[[/item/extra-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp]] Extra Spirit patch history))
## [[/item/extra-spirit]]((Extra Spirit))
- Now gives +25 Health
=

=item:extra-stamina:
[[/item/extra-stamina]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp]] Extra Stamina patch history))
## [[/item/extra-stamina]]((Extra Stamina))
- Now provides +10% Stamina Recovery
=

=item:fortitude:
[[/item/fortitude]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp]] Fortitude patch history))
## [[/item/fortitude]]((Fortitude))
- Duration required to start regenerating reduced from 14s to 13s
=

=item:headshot-booster:
[[/item/headshot-booster]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp]] Headshot Booster patch history))
## [[/item/headshot-booster]]((Headshot Booster))
- Cooldown increased from 5s to 7s
- Fixed the item not visually going on cooldown when it procs
=

=item:healbane:
[[/item/healbane]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp]] Healbane patch history))
## [[/item/healbane]]((Healbane))
- Debuff duration reduced from 7s to 6s
=

=item:hunter-s-aura:
[[/item/hunters-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp]] Hunter's Aura patch history))
## [[/item/hunters-aura]]((Hunter's Aura))
- Bullet Resist reduction reduced from -15% to -10%
- Fire Rate slow reduced from -15% to -10%
- Solo enemy hero case increased from 2x to 3x
=

=item:improved-spirit:
[[/item/improved-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp]] Improved Spirit patch history))
## [[/item/improved-spirit]]((Improved Spirit))
- Now grants +75 Health
=

=item:infuser:
[[/item/infuser]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp]] Infuser patch history))
## [[/item/infuser]]((Infuser))
- Spirit Power reduced from +18 to +16
=

=item:inhibitor:
[[/item/inhibitor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp]] Inhibitor patch history))
## [[/item/inhibitor]]((Inhibitor))
- No longer grants +10% Fire Rate
- Slow reduced from 35% to 25%
=

=item:intensifying-magazine:
[[/item/intensifying-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp]] Intensifying Magazine patch history))
## [[/item/intensifying-magazine]]((Intensifying Magazine))
- Ammo reduced from 30% to 25%
=

=item:knockdown:
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))
- Cooldown increased from 30s to 45s
=

=item:leech:
[[/item/leech]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp]] Leech patch history))
## [[/item/leech]]((Leech))
- Spirit Power increased from +7 to +10
- Weapon Damage increased from +8% to +12%
- Bonus Health increased from +125 to +150
=

=item:lucky-shot:
[[/item/lucky-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp]] Lucky Shot patch history))
## [[/item/lucky-shot]]((Lucky Shot))
- Slow duration reduced from 2s to 1.5s
- No longer provides +20% Weapon Damage
=

=item:majestic-leap:
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))
- Shields no longer prevent the item from being disabled
=

=item:monster-rounds:
[[/item/monster-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp]] Monster Rounds patch history))
## [[/item/monster-rounds]]((Monster Rounds))
- Damage vs NPCs increased from +30% to +35%
=

=item:mystic-reverb:
[[/item/mystic-reverb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp]] Mystic Reverb patch history))
## [[/item/mystic-reverb]]((Mystic Reverb))
- The target is now slowed by 50% during the 3s delay
=

=item:mystic-slow:
[[/item/mystic-slow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp]] Mystic Slow patch history))
## [[/item/mystic-slow]]((Mystic Slow))
- Duration reduced from 2.5s to 2s
=

=item:point-blank:
[[/item/point-blank]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp]] Point Blank patch history))
## [[/item/point-blank]]((Point Blank))
- Now gives +1 Stamina
=

=item:quicksilver-reload:
[[/item/quicksilver-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp]] Quicksilver Reload patch history))
## [[/item/quicksilver-reload]]((Quicksilver Reload))
- Cooldown increased from 5s to 12s
=

=item:reactive-barrier:
[[/item/reactive-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier patch history))
## [[/item/reactive-barrier]]((Reactive Barrier))
- Now procs on displacement abilities (e.g. Hook, Paradoxical Swap, Upper Cut)
=

=item:rescue-beam:
[[/item/rescue-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp]] Rescue Beam patch history))
## [[/item/rescue-beam]]((Rescue Beam))
- Cooldown reduced from 40s to 35s
=

=item:restorative-locket:
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))
- Can now be cast on allies (30m cast range)
- Radius on gaining charges increased from 40m to 50m
- Cooldown increased from 18s to 24s
=

=item:restorative-shot:
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))
- Cooldown increased from 4s to 6s
=

=item:return-fire:
[[/item/return-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp]] Return Fire patch history))
## [[/item/return-fire]]((Return Fire))
- Health bonus increased from +75 to +100
- Fixed spirit damage returned counting as bullet damage
=

=item:ricochet:
[[/item/ricochet]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp]] Ricochet patch history))
## [[/item/ricochet]]((Ricochet))
- Ricochet damage increased from 45% to 50%
=

=item:shadow-weave:
[[/item/shadow-weave]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp]] Shadow Weave patch history))
## [[/item/shadow-weave]]((Shadow Weave))
- Ambush Fire Rate reduced from +60% to +40%
- Cooldown increased from 35s to 45s
- No longer instantly grants sprint
=

=item:silencer:
[[/item/silencer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]] Silencer patch history))
## [[/item/silencer]]((Silencer))
- Debuff duration reduced from 3s to 2s
=

=item:siphon-bullets:
[[/item/siphon-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]] Siphon Bullets patch history))
## [[/item/siphon-bullets]]((Siphon Bullets))
- Steal duration increased from 15s to 20s
=

=item:sprint-boots:
[[/item/sprint-boots]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp]] Sprint Boots patch history))
## [[/item/sprint-boots]]((Sprint Boots))
- Sprint Speed reduced from +3 to +2
- Now a component of Enduring Speed
=

=item:superior-duration:
[[/item/superior-duration]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp]] Superior Duration patch history))
## [[/item/superior-duration]]((Superior Duration))
- Imbued duration increased from +30% to +32%
- Non-imbued duration increased from +22% to +24%
=

=item:suppressor:
[[/item/suppressor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp]] Suppressor patch history))
## [[/item/suppressor]]((Suppressor))
- Duration reduced from 2.5s to 2s
=

=item:tesla-bullets:
[[/item/tesla-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp]] Tesla Bullets patch history))
## [[/item/tesla-bullets]]((Tesla Bullets))
- Damage is now affected by falloff
- Proc chance reduced from 30% to 25%
- Jump radius reduced from 9m to 8m
=

=item:titanic-magazine:
[[/item/titanic-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp]] Titanic Magazine patch history))
## [[/item/titanic-magazine]]((Titanic Magazine))
- Reload penalty reduced from -15% to -10%
=

=item:unstoppable:
[[/item/unstoppable]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp]] Unstoppable patch history))
## [[/item/unstoppable]]((Unstoppable))
- No longer has components (loses slow resist and movespeed bonus)
=