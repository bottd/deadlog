``meta:
title "Minor Update - 06-11-2026"
steam_gid "1835236783562074"
published "2026-06-12T00:59:18.000Z"
author "IceFrog"
category "patch"
major_update #false
status "draft"
content_text "Urn give up time reduced from 75s to 60s Urn bounty reduced by 10% (unreduced for trailing team) Breakables health permanent bonus reduced from 15/25/35 to 15/20/30 for level 1/2/3 Kill comeback bounty values increased by 8% Street Brawl: All ability and item range/radius values are reduced by 10% Apollo Disengaging Sigil velocity increased by 50% Disengaging Sigil velocity's vertical:horizontal ratio changed from 1.5:1 to 1:1 Disengaging Sigil now allows input to alter the direction apollo launches himself (A/D biases to the left/right and W/S affect how much backwards motion is applied Disengaging Sigil T1 changed from \"+30 Damage\" to \"Gain +25% Fire Rate and Bullet Speed for 8s\" Disengaging Sigil T2 changed from \"Gain +30% Fire Rate and +50% Bullet Speed for 10s\" to \"On Player Hit: +1 Stamina restored and resets Air Jump/Dash limit\" Disengaging Sigil T3 changed from \"On Player Hit: +2 stamina restored and reset Air Jump/Dash limit\" to \"Recast within 4s\" Flawless Advance now allows Apollo to parry during it Bebop Exploding Uppercut T3 increased from +17% Missing Health to +18% Fixed Sticky Bomb T3 duration ending once the bomb went off rather than the 5s duration Sticky Bomb T3 changed from \"On Cast: +5m Move Speed and +20% Fire Rate for 5s\" to \"On Cast: +5m Move Speed and +25% Debuff Resistance for 6s\" (applies retroactively) Calico Gloom Bombs melee resist debuff now stacks additively Gloom Bombs T2 increased from -5% Melee Resist for 5s to -6% for 6s Gloom Bombs melee resist now applies on impact rather than explosion Return to Shadows damage increased from 140 to 150 Return to Shadows T2 damage increased from +65 to +75 Return to Shadows T3 heal increased from 350 to 450 Doorman Call Bell explosion damage spirit scaling reduced from 1.3 to 1.2 Call Bell T3 spirit scaling reduced from 0.4 to 0.35 Graves Jar of Dead collection rate reduced by 20% (takes longer to gain a charge) Jar of Dead damage reduced from 17+0.27 to 16+0.25 Jar of Dead bounty increased from 5+0.25/boon to 7+0.5/boon Grasping Hands T3 Immobilize duration reduced from +1s to +0.75s Grey Talon Gun cycle time increased from 0.5775 to 0.6 (~4% DPS nerf) Bullet damage growth reduced from +1.0 to +0.85 Rain of Arrows cooldown increased from 22s to 23s Rain of Arrows T2 reduced from -13s Cooldown to -12s Holliday Powder Keg now has an alt cast behavior to place the barrel at her feet Powder Keg various improvements to the launch angles, velocities and feel of casting Powder Keg now starts with 2 charges Powder Keg Charge Time increased from 3.5s to 7s Powder Keg spirit scaling reduced from 1.6 to 1.4 Powder Keg T2 changed from \"+58 Damage\" to \"+1 Charge\" Powder Keg T3 changed from \"+2 Charges and +0.4s Displacement\" to \"+100 Damage, +0.5 Spirit Scaling and -5s Charge Time\" Fixed various issues with placing bounce pad on elevated areas Bounce Pad landing radius reduced from 12m to 9m Bounce Pad T3 changed from \"+68 Stomp Damage and Improved Spirit Scaling\" to \"+0.7s Stomp Stun\" (only triggers from Holliday) Infernus Fixed Afterburn Max duration refreshing not properly accounting for both Debuff Resist and +Ability Duration Fixed Concussive Combustion cooldown not updating when getting the T2 or other CD reducing items when the ability is on cooldown Ivy Fixed a bug where Stone Form could sometimes do significantly more damage than intended McGinnis Mini Turret DPS rescaled from 30+0.39 to 24+0.42 (break even at 200 spirit power) Mini Turrets T3 Fire Rate reduced from +30% to +25% Fixed some rare cases where Heavy Barrage would stop working Heavy Barrage DPS reduced from 22.5 to 21 Paige Rallying Charge distance for max amp reduced from 350m to 250m Rallying Charge T2 increased from -30s Cooldown to -50s Plot Armor barrier spirit scaling increased from 1.3 to 1.5 Plot Armor T3 barrier spirit scaling increased from +0.3 to +0.5 Pocket Bullet damage growth reduced from +0.2 to +0.16 Flying Cloak T3 reduced from -13s Cooldown to -12s Affliction now does half damage on objectives Seven Bullet damage growth reduced from 0.337 to 0.24 Power Surge T3 reduced from +12s Duration to +10s Storm Cloud now hits breakables Shiv Killing Blow now has +30% more cooldown whenever it does not impact a player Silver Lycan Curse cooldown increased from 40s to 70s Lycan Curse T3 no longer heals Viscous Puddle Punch T2 increased from +40% Lifesteal to +60% Goo Ball T2 now also increases Bullet and Spirit Resist by +10% Victor Aura of Suffering radius reduced from 9m to 8m Aura of Suffering T3 now also increases radius by +1m Fixed some client performance issues when using Aura of Suffering Shocking Reanimation cooldown increased from 230s to 240s Shocking Reanimation T3 reduced from -120s Cooldown to -110s Shocking Reanimation T3 increased from +150 Damage to +175 Vindicta Assassinate Max Bonus Damage spirit scaling increased from 1.7 to 2.0 Warden Bullet falloff reduced from 20m->58m to 18m->47m Alchemical Flask spirit scaling reduced from 0.73 to 0.63 Alchemical Flask T2 reduced from +40 Damage to +35 Alchemical Flask T2 increased from -20% Weapon Damage to -25% Willpower spirit scaling increased from +0.5 to +0.8 Binding Word T3 reduced from -18s Cooldown to -14s Last Stand lifesteal increased from 65% to 75% Last Stand T2 increased from -30s Cooldown to -35s Last Stand T3 increased from +3s Duration to +4s Opening Rounds Conditional Weapon Damage bonus reduced from 30% to 25% Spirit Power increased from +4 to +7 Arcane Surge Fixed various cases with the bonuses not working"
``

# General Changes

- Urn give up time reduced from 75s to 60s
- Urn bounty reduced by 10% (unreduced for trailing team)
- Breakables health permanent bonus reduced from 15/25/35 to 15/20/30 for level 1/2/3
- Kill comeback bounty values increased by 8%
- Street Brawl: All ability and item range/radius values are reduced by 10%

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Apollo", "Bebop", "Calico", "Doorman", "Graves", "Grey Talon", "Holliday", "Infernus", "Ivy", "McGinnis", "Paige", "Pocket", "Seven", "Shiv", "Silver", "Victor", "Vindicta", "Viscous", "Warden"]} />
``

##hero:apollo: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp]] Apollo

- Disengaging Sigil velocity increased by 50%
- Disengaging Sigil velocity's vertical:horizontal ratio changed from 1.5:1 to 1:1

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_sigil.webp]] Disengaging Sigil

- Disengaging Sigil now allows input to alter the direction apollo launches himself (A/D biases to the left/right and W/S affect how much backwards motion is applied
- Disengaging Sigil T1 changed from "+30 Damage" to "Gain +25% Fire Rate and Bullet Speed for 8s"
- Disengaging Sigil T2 changed from "Gain +30% Fire Rate and +50% Bullet Speed for 10s" to "On Player Hit: +1 Stamina restored and resets Air Jump/Dash limit"
- Disengaging Sigil T3 changed from "On Player Hit: +2 stamina restored and reset Air Jump/Dash limit" to "Recast within 4s"

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp]] Flawless Advance

- Flawless Advance now allows Apollo to parry during it

##hero:bebop: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp]] Exploding Uppercut

- Exploding Uppercut T3 increased from +17% Missing Health to +18%

- Fixed Sticky Bomb T3 duration ending once the bomb went off rather than the 5s duration

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb

- Sticky Bomb T3 changed from "On Cast: +5m Move Speed and +20% Fire Rate for 5s" to "On Cast: +5m Move Speed and +25% Debuff Resistance for 6s" (applies retroactively)

##hero:calico: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico

- Gloom Bombs melee resist debuff now stacks additively

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp]] Gloom Bombs

- Gloom Bombs T2 increased from -5% Melee Resist for 5s to -6% for 6s

- Gloom Bombs melee resist now applies on impact rather than explosion
- Return to Shadows damage increased from 140 to 150
- Return to Shadows T2 damage increased from +65 to +75
- Return to Shadows T3 heal increased from 350 to 450

##hero:doorman: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp]] Doorman

- Call Bell explosion damage spirit scaling reduced from 1.3 to 1.2

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp]] Call Bell

- Call Bell T3 spirit scaling reduced from 0.4 to 0.35

##hero:graves: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp]] Graves

- Jar of Dead collection rate reduced by 20% (takes longer to gain a charge)
- Jar of Dead damage reduced from 17+0.27 to 16+0.25
- Jar of Dead bounty increased from 5+0.25/boon to 7+0.5/boon

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp]] Grasping Hands

- Grasping Hands T3 Immobilize duration reduced from +1s to +0.75s

##hero:grey-talon: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon

- Gun cycle time increased from 0.5775 to 0.6 (~4% DPS nerf)
- Bullet damage growth reduced from +1.0 to +0.85
- Rain of Arrows cooldown increased from 22s to 23s
- Rain of Arrows T2 reduced from -13s Cooldown to -12s

##hero:holliday: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg

- Powder Keg now has an alt cast behavior to place the barrel at her feet

- Powder Keg various improvements to the launch angles, velocities and feel of casting

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg

- Powder Keg now starts with 2 charges

###ability: Powder Keg Charge Time

- Powder Keg Charge Time increased from 3.5s to 7s

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg

- Powder Keg spirit scaling reduced from 1.6 to 1.4
- Powder Keg T2 changed from "+58 Damage" to "+1 Charge"
- Powder Keg T3 changed from "+2 Charges and +0.4s Displacement" to "+100 Damage, +0.5 Spirit Scaling and -5s Charge Time"

- Fixed various issues with placing bounce pad on elevated areas
- Bounce Pad landing radius reduced from 12m to 9m

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad

- Bounce Pad T3 changed from "+68 Stomp Damage and Improved Spirit Scaling" to "+0.7s Stomp Stun" (only triggers from Holliday)

##hero:infernus: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus

- Fixed Afterburn Max duration refreshing not properly accounting for both Debuff Resist and +Ability Duration
- Fixed Concussive Combustion cooldown not updating when getting the T2 or other CD reducing items when the ability is on cooldown

##hero:ivy: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy

- Fixed a bug where Stone Form could sometimes do significantly more damage than intended

##hero:mcginnis: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis

- Mini Turret DPS rescaled from 30+0.39 to 24+0.42 (break even at 200 spirit power)

###ability: Mini Turrets

- Mini Turrets T3 Fire Rate reduced from +30% to +25%

- Fixed some rare cases where Heavy Barrage would stop working

###ability: Heavy Barrage DPS

- Heavy Barrage DPS reduced from 22.5 to 21

##hero:paige: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp]] Paige

- Rallying Charge distance for max amp reduced from 350m to 250m

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp]] Rallying Charge

- Rallying Charge T2 increased from -30s Cooldown to -50s

- Plot Armor barrier spirit scaling increased from 1.3 to 1.5

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_defendandfight.webp]] Plot Armor

- Plot Armor T3 barrier spirit scaling increased from +0.3 to +0.5

##hero:pocket: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket

- Bullet damage growth reduced from +0.2 to +0.16

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp]] Flying Cloak

- Flying Cloak T3 reduced from -13s Cooldown to -12s

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction

- Affliction now does half damage on objectives

##hero:seven: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven

- Bullet damage growth reduced from 0.337 to 0.24

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp]] Power Surge

- Power Surge T3 reduced from +12s Duration to +10s

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud

- Storm Cloud now hits breakables

##hero:shiv: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow

- Killing Blow now has +30% more cooldown whenever it does not impact a player

##hero:silver: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp]] Silver

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp]] Lycan Curse

- Lycan Curse cooldown increased from 40s to 70s
- Lycan Curse T3 no longer heals

##hero:victor: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp]] Victor

- Aura of Suffering radius reduced from 9m to 8m
- Aura of Suffering T3 now also increases radius by +1m
- Fixed some client performance issues when using Aura of Suffering

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp]] Shocking Reanimation

- Shocking Reanimation cooldown increased from 230s to 240s
- Shocking Reanimation T3 reduced from -120s Cooldown to -110s
- Shocking Reanimation T3 increased from +150 Damage to +175

##hero:vindicta: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta

###ability: Assassinate Max Bonus Damage

- Assassinate Max Bonus Damage spirit scaling increased from 1.7 to 2.0

##hero:viscous: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch

- Puddle Punch T2 increased from +40% Lifesteal to +60%

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball

- Goo Ball T2 now also increases Bullet and Spirit Resist by +10%

##hero:warden: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden

- Bullet falloff reduced from 20m->58m to 18m->47m

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp]] Alchemical Flask

- Alchemical Flask spirit scaling reduced from 0.73 to 0.63
- Alchemical Flask T2 reduced from +40 Damage to +35
- Alchemical Flask T2 increased from -20% Weapon Damage to -25%

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp]] Willpower

- Willpower spirit scaling increased from +0.5 to +0.8

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp]] Binding Word

- Binding Word T3 reduced from -18s Cooldown to -14s

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand

- Last Stand lifesteal increased from 65% to 75%
- Last Stand T2 increased from -30s Cooldown to -35s
- Last Stand T3 increased from +3s Duration to +4s

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Arcane Surge", "Opening Rounds"]} />
``

##item:arcane-surge: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp]] Arcane Surge

- Fixed various cases with the bonuses not working

##item:opening-rounds: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp]] Opening Rounds

- Conditional Weapon Damage bonus reduced from 30% to 25%
- Spirit Power increased from +4 to +7