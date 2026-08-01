``meta:
title "06-06-2024 Update"
thread_id "4096"
published "2024-06-06T14:56:14-0700"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
status "draft"
content_text "Reworked how friend invites work inside the client. You must now be Steam friends with a person to invite them. This has a friend recency requirement as well as your friend needing to not be a limited steam user. Previous requests do not need to be resubmitted. Replaced the neutral vaults with a new model, the Sinner's Sacrifice Added the ability to change builds while in-game Build descriptions can now be seen in-game via a tooltip Added neutrals to Hero Sandbox (the small room in the back on the right) Added new objective health bars for Guardians and Walkers Added Match History link to the top right You can now move active item slots on the HUD while holding alt/tab Improved visibility of the voice icon indicating who is talking Hero icons on the minimap are scaled up a little when holding alt Removed Pause cooldown in private bot matches and tutorial/sandbox Improved networking when there is packet loss or jitter Soul Vessel dropped from heroes (after killing neutrals) now scales in size based on how many souls are inside Improved Grey Talon's trap visibility Increased the speed of Guardian's melee attacks Changed Guardian's behavior to only attempt melee when a unit is within 6m but still do damage to units in 12m range Candle trooper health bars now stick around at 1% when they are in self destruct mode to make it more clear they can still be shot Infernus's Afterburn now shows portraits of enemies that are burning for the full duration Improved menu UI sound feedback Player's icon is highlighted in the top bar Added UI sound effects for team and opponent deaths Added Kinetic Carbine charge audio loop Updated Vindicta Flight sound effects Added Vindicta Assassinate sound effect for targeted players Improved visuals for Kelvin's gun projectile Fixed some visual issues with Ice Path Added AoE effect to Pocket's Barrage Updated weapon buff effect in Pocket's Flying Cloak upgrade Visual effects updates for melee lifesteal items Fixed Power Slash sometimes getting stuck on nearby geometry Updated sound effects for the Sinner's Sacrifice Updated Pocket's Enchanted Satchel delay and explode sounds Updated Pocket's Barrage cast and impact sounds Updated Warden's Binding Word delay and impact sounds Fixed Dynamo's Quantum Entanglement going through ceilings sometimes Fixed an HTML exploit with chat Fixed not being able to place deployable abilities at certain angles Fixed moving active item slots causing the player to say \"[ITEM] is on cooldown\" Fixed training Ivy's True Form causing you to get healed Fixed a bug with Malice firing slightly upward Changed collision on barrel stand stacks to block bullets Added zapper on factory outpost building Removed roof duct on top of low building besides inner Walker Removed street lamp post that was causing heroes to get stuck near inner lane Guardian Added lights to outer lane Cosmic Veil tunnels More heroes will now compliment on good uses of ultimates instead of just saying \"good work\" Fixed more instances of heroes being called out by the wrong name Base hero kill value increased from 150 to 225 Rejuv duration reduced from 4 to 3 minutes Rejuv buff no longer increases your ammo Rejuv now causes all your candle troopers to have double health for 3 minutes Mid Boss can now only be damaged by enemies inside the bottom pit Mid Boss Rejuv claim time reduced from 2.5s to 1.5s Strong neutrals HP reduced by 20% Strong neutrals souls bounty reduced by 20% 4 Strong Neutral camps in the corners of the map have been replaced with Medium neutrals Vaults souls increased from 260 to 300 Spirit tier bonus increased from 3/6/9/12 to 4/8/12/16 Vitality tier bonus increased from 5/10/15/20% to 8/12/16/20% Bullet damage falloff now maxes out at ~65m instead of ~70m Walker bomb damage reduced from 300 to 200 Moved the middle lane Base Guardians further out slightly Powerups bonus types are now split between the regular destructibles like crates/vases/etc and the Golden Statues. Regular ones can only roll for souls and Golden Statues can only roll for buffs. Distribution of destructibles and Golden Status around the map has been adjusted a bit. Respawn rate for Destructibles/Statues (after initial spawn) slowed from 120s to 180s Mid boss area has reduced destructibles Movement Speed powerup duration increased from 12s to 30s Movement Speed powerup movespeed reduced from 2 to 1 Movement Speed powerup sprint speed increased from 2 to 4 Fire Rate powerup reduced from +20% to +15% Fire Rate powerup duration increased from 25s to 35s Health Regen powerup regen reduced from 1.5% to 1% Health Regen powerup duration increased from 15s to 25s Cooldown Reduction powerup reduced from 25% to 20% Extra Clip powerup reduced from 4 clips to 3 Extra Stamina powerup duration increased from 60s to 80s Extra Stamina powerup amount reduced from 2 to 1 Crouch movespeed increased from 4 to 4.75 Bullet Shields now block damage from melee (similar to resistance) Increased the distance heroes slide when they come to the bottom of a ramp Decay changed from 2.2% of Max Health to 2.4% Current Health (less damage when the target is low, and non-lethal now) Healbane moved from Spirit tree to Vitality tree Healbane now gives +50 Health Soul Shredder Bullets: Spirit Amp reduced from +12% to +10% Improved Cooldown: HP Regen reduced from 2 to 1.5 Shifting Shroud: Cooldown reduced from 45s to 35s Shifting Shroud: Bonus spirit duration increased from 6s to 10s Metal Skin duration reduced from 4s to 3s Metal Skin cooldown increased from 25s to 30s Curse: No longer prevents stamina usage Curse: Now also prevents item usage Curse: Duration reduced from 3.75s to 3.5s Diviner's Kelvar: Bullet Shield increased from 700 to 1000 Abrams Base HP growth reduced from 36 to 32 Infernal Resilience T2 reduced from +200 Health to +150 Seismic Impact personal brief busy state upon landing increased from 0.2s to 0.3s Bebop Hyper Beam slow now affects stamina dashes Dynamo Base HP growth reduced from 48 to 44 Quantum Entanglement fire rate bonus reduced from +30% to +25% Singularity base radius increased from 8m to 10m Haze Sleep Dagger T3 damage reduction on target improved from -30% to -40% Smoke Bomb sprint speed now instantly kicks in after casting it Bullet Dance cooldown reduced from 160s to 130s Bullet Dance T2 changed to -40s Cooldown Bullet Dance T3 changed to +1 Targets Hit Per Shot Infernus Flame Dash cooldown increased from 30s to 38s Ivy Watcher's Covenant heal sharing reduced from 65% to 55% Kelvin Ice Path sprint speed increased from +1 to +2 Ice Path trail duration increased from 12s to 15s Frozen Shelter T2 changed to -40s Cooldown Frozen Shelter T3 changed to +70 Health Regen that scales with Spirit Frozen Shelter can now be dismissed early McGinnis Spectral Wall can now be dismissed early Pocket Barrage channel can now be interrupted by casting your other abilities Barrage radius increased from 6m to 6.5m Enchanted Satchel cast time reduced from 0.25s to 0.15s Seven Storm Cloud T1 increased from +30% to +35% Bullet Resist Vindicta Flight spirit bonus damage reduced from +12 to +10 Flight no longer has +10% bonus range to damage falloff Flight cooldown increased from 35s to 50s Flight T2 changed from +12 Spirit Damage to -15s Cooldown Flight T3 changed from +3 m/s Bonus Air Speed to +12 Spirit Damage Can no longer melee while flying for extra movement Assassinate now ramps up its total damage from 50% to 100% over 1 second of being zoomed (UI indication for this) Fixed being unable to move while scoped in with Assassinate Warden Base ammo increased from 14 to 16 Alchemical Flask T3 increased from +25% Fire Rate Slow to +35% Willpower T3 increased from +150 Spirit Shield to +200 Extra Regen Regen increased from 1.75 to 2 Enduring Spirit Spirit Lifesteal reduced from +10% to +8% Reactive Barrier Cooldown reduced from 35s to 25s Spirit Lifesteal Reduced from +25% to +23% Cold Front cooldown reduced from 40s to 32s Knockdown No longer provides +2 Sprint Now provides +1 Stamina Sharpshooter Damage falloff bonus reduced from 20% to 15% Intensifying Magazine Time for Max Damage reduced from 4s to 3.5s Torment Pulse Interval improved from 2s to 1.5s Damage per pulse reduced from 45 to 40 (total dps from 22.5 to 26.6) HP bonus reduced from +150 to +125 Majestic Leap Velocity increased from 22.5 to 27 Leech Spirit Lifesteal reduced from +35% to +33% Refresher No longer has cast time (was 1s) Mystic Reverb Fixed the damage being reduced by armor twice Damage reduced from 35% to 30% Boundless Spirit Spirit increased from 45 to 50 Spiritual Overflow Spirit duration increased from 14s to 18s"
``

# General Changes

- Reworked how friend invites work inside the client. You must now be Steam friends with a person to invite them. This has a friend recency requirement as well as your friend needing to not be a limited steam user. Previous requests do not need to be resubmitted.
- Replaced the neutral vaults with a new model, the Sinner's Sacrifice
- Added the ability to change builds while in-game
- Build descriptions can now be seen in-game via a tooltip
- Added neutrals to Hero Sandbox (the small room in the back on the right)
- Added new objective health bars for Guardians and Walkers
- Added Match History link to the top right
- You can now move active item slots on the HUD while holding alt/tab
- Improved visibility of the voice icon indicating who is talking
- Hero icons on the minimap are scaled up a little when holding alt
- Removed Pause cooldown in private bot matches and tutorial/sandbox
- Improved networking when there is packet loss or jitter
- Soul Vessel dropped from heroes (after killing neutrals) now scales in size based on how many souls are inside
- Improved Grey Talon's trap visibility
- Increased the speed of Guardian's melee attacks
- Changed Guardian's behavior to only attempt melee when a unit is within 6m but still do damage to units in 12m range
- Candle trooper health bars now stick around at 1% when they are in self destruct mode to make it more clear they can still be shot
- Infernus's Afterburn now shows portraits of enemies that are burning for the full duration
- Improved menu UI sound feedback
- Player's icon is highlighted in the top bar
- Added UI sound effects for team and opponent deaths
- Added Kinetic Carbine charge audio loop
- Updated Vindicta Flight sound effects
- Added Vindicta Assassinate sound effect for targeted players
- Improved visuals for Kelvin's gun projectile
- Fixed some visual issues with Ice Path
- Added AoE effect to Pocket's Barrage
- Updated weapon buff effect in Pocket's Flying Cloak upgrade
- Visual effects updates for melee lifesteal items
- Fixed Power Slash sometimes getting stuck on nearby geometry
- Updated sound effects for the Sinner's Sacrifice
- Updated Pocket's Enchanted Satchel delay and explode sounds
- Updated Pocket's Barrage cast and impact sounds
- Updated Warden's Binding Word delay and impact sounds
- Fixed Dynamo's Quantum Entanglement going through ceilings sometimes
- Fixed an HTML exploit with chat
- Fixed not being able to place deployable abilities at certain angles
- Fixed moving active item slots causing the player to say "[ITEM] is on cooldown"
- Fixed training Ivy's True Form causing you to get healed
- Fixed a bug with Malice firing slightly upward
- Changed collision on barrel stand stacks to block bullets
- Added zapper on factory outpost building
- Removed roof duct on top of low building besides inner Walker
- Removed street lamp post that was causing heroes to get stuck near inner lane Guardian
- Added lights to outer lane Cosmic Veil tunnels
- More heroes will now compliment on good uses of ultimates instead of just saying "good work"
- Fixed more instances of heroes being called out by the wrong name
- Base hero kill value increased from 150 to 225
- Rejuv duration reduced from 4 to 3 minutes
- Rejuv buff no longer increases your ammo
- Rejuv now causes all your candle troopers to have double health for 3 minutes
- Mid Boss can now only be damaged by enemies inside the bottom pit
- Mid Boss Rejuv claim time reduced from 2.5s to 1.5s
- Strong neutrals HP reduced by 20%
- Strong neutrals souls bounty reduced by 20%
- 4 Strong Neutral camps in the corners of the map have been replaced with Medium neutrals
- Vaults souls increased from 260 to 300
- Spirit tier bonus increased from 3/6/9/12 to 4/8/12/16
- Vitality tier bonus increased from 5/10/15/20% to 8/12/16/20%
- Bullet damage falloff now maxes out at ~65m instead of ~70m
- Walker bomb damage reduced from 300 to 200
- Moved the middle lane Base Guardians further out slightly
- Powerups bonus types are now split between the regular destructibles like crates/vases/etc and the Golden Statues. Regular ones can only roll for souls and Golden Statues can only roll for buffs. Distribution of destructibles and Golden Status around the map has been adjusted a bit.
- Respawn rate for Destructibles/Statues (after initial spawn) slowed from 120s to 180s
- Mid boss area has reduced destructibles
- Movement Speed powerup duration increased from 12s to 30s
- Movement Speed powerup movespeed reduced from 2 to 1
- Movement Speed powerup sprint speed increased from 2 to 4
- Fire Rate powerup reduced from +20% to +15%
- Fire Rate powerup duration increased from 25s to 35s
- Health Regen powerup regen reduced from 1.5% to 1%
- Health Regen powerup duration increased from 15s to 25s
- Cooldown Reduction powerup reduced from 25% to 20%
- Extra Clip powerup reduced from 4 clips to 3
- Extra Stamina powerup duration increased from 60s to 80s
- Extra Stamina powerup amount reduced from 2 to 1
- Crouch movespeed increased from 4 to 4.75
- Bullet Shields now block damage from melee (similar to resistance)
- Increased the distance heroes slide when they come to the bottom of a ramp
- Decay changed from 2.2% of Max Health to 2.4% Current Health (less damage when the target is low, and non-lethal now)
- Healbane moved from Spirit tree to Vitality tree
- Healbane now gives +50 Health
- Soul Shredder Bullets: Spirit Amp reduced from +12% to +10%
- Improved Cooldown: HP Regen reduced from 2 to 1.5
- Shifting Shroud: Cooldown reduced from 45s to 35s
- Shifting Shroud: Bonus spirit duration increased from 6s to 10s
- Metal Skin duration reduced from 4s to 3s
- Metal Skin cooldown increased from 25s to 30s
- Curse: No longer prevents stamina usage
- Curse: Now also prevents item usage
- Curse: Duration reduced from 3.75s to 3.5s
- Diviner's Kelvar: Bullet Shield increased from 700 to 1000

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Dynamo", "Haze", "Infernus", "Ivy", "Kelvin", "McGinnis", "Pocket", "Seven", "Vindicta", "Warden"]} />
``

=hero:abrams:
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))

- Base HP growth reduced from 36 to 32

==ability:infernal-resilience:
[[/hero/abrams?ability=infernal-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]] Infernal Resilience change history))
### [[/hero/abrams?ability=infernal-resilience]]((Infernal Resilience))

- Infernal Resilience T2 reduced from +200 Health to +150
==
==ability:seismic-impact:
[[/hero/abrams?ability=seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/hero/abrams?ability=seismic-impact]]((Seismic Impact))

- Seismic Impact personal brief busy state upon landing increased from 0.2s to 0.3s
==
=
=hero:bebop:
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))

==ability:hyper-beam:
[[/hero/bebop?ability=hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam change history))
### [[/hero/bebop?ability=hyper-beam]]((Hyper Beam))

- Hyper Beam slow now affects stamina dashes
==
=
=hero:dynamo:
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))

- Base HP growth reduced from 48 to 44

==ability:quantum-entanglement:
[[/hero/dynamo?ability=quantum-entanglement]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp]] Quantum Entanglement change history))
### [[/hero/dynamo?ability=quantum-entanglement]]((Quantum Entanglement))

- Quantum Entanglement fire rate bonus reduced from +30% to +25%
==
==ability:singularity:
[[/hero/dynamo?ability=singularity]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp]] Singularity change history))
### [[/hero/dynamo?ability=singularity]]((Singularity))

- Singularity base radius increased from 8m to 10m
==
=
=hero:haze:
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))

==ability:sleep-dagger:
[[/hero/haze?ability=sleep-dagger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp]] Sleep Dagger change history))
### [[/hero/haze?ability=sleep-dagger]]((Sleep Dagger))

- Sleep Dagger T3 damage reduction on target improved from -30% to -40%
==
==ability:smoke-bomb:
[[/hero/haze?ability=smoke-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp]] Smoke Bomb change history))
### [[/hero/haze?ability=smoke-bomb]]((Smoke Bomb))

- Smoke Bomb sprint speed now instantly kicks in after casting it
==
==ability:bullet-dance:
[[/hero/haze?ability=bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/hero/haze?ability=bullet-dance]]((Bullet Dance))

- Bullet Dance cooldown reduced from 160s to 130s
- Bullet Dance T2 changed to -40s Cooldown
- Bullet Dance T3 changed to +1 Targets Hit Per Shot
==
=
=hero:infernus:
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))

==ability:flame-dash:
[[/hero/infernus?ability=flame-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash change history))
### [[/hero/infernus?ability=flame-dash]]((Flame Dash))

- Flame Dash cooldown increased from 30s to 38s
==
=
=hero:ivy:
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))

==ability:watcher-s-covenant:
### Watcher's Covenant

- Watcher's Covenant heal sharing reduced from 65% to 55%
==
=
=hero:kelvin:
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))

==ability:ice-path:
[[/hero/kelvin?ability=ice-path]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp]] Ice Path change history))
### [[/hero/kelvin?ability=ice-path]]((Ice Path))

- Ice Path sprint speed increased from +1 to +2
- Ice Path trail duration increased from 12s to 15s
==
==ability:frozen-shelter:
[[/hero/kelvin?ability=frozen-shelter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp]] Frozen Shelter change history))
### [[/hero/kelvin?ability=frozen-shelter]]((Frozen Shelter))

- Frozen Shelter T2 changed to -40s Cooldown
- Frozen Shelter T3 changed to +70 Health Regen that scales with Spirit

- Frozen Shelter can now be dismissed early
==
=
=hero:mcginnis:
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))

==ability:spectral-wall:
[[/hero/mcginnis?ability=spectral-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp]] Spectral Wall change history))
### [[/hero/mcginnis?ability=spectral-wall]]((Spectral Wall))

- Spectral Wall can now be dismissed early
==
=
=hero:pocket:
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))

==ability:barrage:
[[/hero/pocket?ability=barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp]] Barrage change history))
### [[/hero/pocket?ability=barrage]]((Barrage))

- Barrage channel can now be interrupted by casting your other abilities
- Barrage radius increased from 6m to 6.5m
==
==ability:enchanter-s-satchel:
[[/hero/pocket?ability=enchanters-satchel]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp]] Enchanter's Satchel change history))
### [[/hero/pocket?ability=enchanters-satchel]]((Enchanter's Satchel))

- Enchanted Satchel cast time reduced from 0.25s to 0.15s
==
=
=hero:seven:
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))

==ability:storm-cloud:
[[/hero/seven?ability=storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/hero/seven?ability=storm-cloud]]((Storm Cloud))

- Storm Cloud T1 increased from +30% to +35% Bullet Resist
==
=
=hero:vindicta:
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))

==ability:flight:
[[/hero/vindicta?ability=flight]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp]] Flight change history))
### [[/hero/vindicta?ability=flight]]((Flight))

- Flight spirit bonus damage reduced from +12 to +10
- Flight no longer has +10% bonus range to damage falloff
- Flight cooldown increased from 35s to 50s
- Flight T2 changed from +12 Spirit Damage to -15s Cooldown
- Flight T3 changed from +3 m/s Bonus Air Speed to +12 Spirit Damage
==
==ability:can:
### Can

- Can no longer melee while flying for extra movement
==
==ability:assassinate:
[[/hero/vindicta?ability=assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/hero/vindicta?ability=assassinate]]((Assassinate))

- Assassinate now ramps up its total damage from 50% to 100% over 1 second of being zoomed (UI indication for this)

- Fixed being unable to move while scoped in with Assassinate
==
=
=hero:warden:
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))

- Base ammo increased from 14 to 16

==ability:alchemical-flask:
[[/hero/warden?ability=alchemical-flask]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp]] Alchemical Flask change history))
### [[/hero/warden?ability=alchemical-flask]]((Alchemical Flask))

- Alchemical Flask T3 increased from +25% Fire Rate Slow to +35%
==
==ability:willpower:
[[/hero/warden?ability=willpower]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp]] Willpower change history))
### [[/hero/warden?ability=willpower]]((Willpower))

- Willpower T3 increased from +150 Spirit Shield to +200
==
=
# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Boundless Spirit", "Cold Front", "Enduring Spirit", "Extra Regen", "Intensifying Magazine", "Knockdown", "Leech", "Majestic Leap", "Mystic Reverb", "Reactive Barrier", "Refresher", "Sharpshooter", "Spirit Lifesteal", "Spiritual Overflow", "Torment Pulse"]} />
``

=item:boundless-spirit:
[[/item/boundless-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp]] Boundless Spirit patch history))
## [[/item/boundless-spirit]]((Boundless Spirit))

- Spirit increased from 45 to 50
=
=item:cold-front:
[[/item/cold-front]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp]] Cold Front patch history))
## [[/item/cold-front]]((Cold Front))

- cooldown reduced from 40s to 32s
=
=item:enduring-spirit:
[[/item/enduring-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_armor/resilience.webp]] Enduring Spirit patch history))
## [[/item/enduring-spirit]]((Enduring Spirit))

- Spirit Lifesteal reduced from +10% to +8%
=
=item:extra-regen:
[[/item/extra-regen]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp]] Extra Regen patch history))
## [[/item/extra-regen]]((Extra Regen))

- Regen increased from 1.75 to 2
=
=item:intensifying-magazine:
[[/item/intensifying-magazine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp]] Intensifying Magazine patch history))
## [[/item/intensifying-magazine]]((Intensifying Magazine))

- Time for Max Damage reduced from 4s to 3.5s
=
=item:knockdown:
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))

- No longer provides +2 Sprint
- Now provides +1 Stamina
=
=item:leech:
[[/item/leech]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp]] Leech patch history))
## [[/item/leech]]((Leech))

- Spirit Lifesteal reduced from +35% to +33%
=
=item:majestic-leap:
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))

- Velocity increased from 22.5 to 27
=
=item:mystic-reverb:
[[/item/mystic-reverb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp]] Mystic Reverb patch history))
## [[/item/mystic-reverb]]((Mystic Reverb))

- Fixed the damage being reduced by armor twice
- Damage reduced from 35% to 30%
=
=item:reactive-barrier:
[[/item/reactive-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier patch history))
## [[/item/reactive-barrier]]((Reactive Barrier))

- Cooldown reduced from 35s to 25s
=
=item:refresher:
[[/item/refresher]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp]] Refresher patch history))
## [[/item/refresher]]((Refresher))

- No longer has cast time (was 1s)
=
=item:sharpshooter:
[[/item/sharpshooter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp]] Sharpshooter patch history))
## [[/item/sharpshooter]]((Sharpshooter))

- Damage falloff bonus reduced from 20% to 15%
=
=item:spirit-lifesteal:
[[/item/spirit-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp]] Spirit Lifesteal patch history))
## [[/item/spirit-lifesteal]]((Spirit Lifesteal))

- Reduced from +25% to +23%
=
=item:spiritual-overflow:
[[/item/spiritual-overflow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp]] Spiritual Overflow patch history))
## [[/item/spiritual-overflow]]((Spiritual Overflow))

- Spirit duration increased from 14s to 18s
=
=item:torment-pulse:
[[/item/torment-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp]] Torment Pulse patch history))
## [[/item/torment-pulse]]((Torment Pulse))

- Interval improved from 2s to 1.5s
- Damage per pulse reduced from 45 to 40 (total dps from 22.5 to 26.6)
- HP bonus reduced from +150 to +125
=