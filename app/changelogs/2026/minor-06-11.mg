``attr:
title "Minor Update - 06-11-2026"
steam_gid "1835236783562074"
published "2026-06-12T00:59:18.000Z"
author "IceFrog"
author_image "/assets/authors/icefrog.webp"
major_update #false
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

=hero:apollo:
``attr:
impact closed=#true {
  all {
    before win=0.4875 pick=0.2028 matches=69472 days=7
    after win=0.4847 pick=0.264 matches=164088 days=14
  }
  high {
    before win=0.4839 pick=0.1496 matches=8372 days=7
    after win=0.4656 pick=0.224 matches=22811 days=14
  }
}
``
[[/hero/apollo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp]] Apollo patch history))
## [[/hero/apollo]]((Apollo))
==ability:disengaging-sigil:
[[/ability/disengaging-sigil]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_sigil.webp]] Disengaging Sigil change history))
### [[/ability/disengaging-sigil]]((Disengaging Sigil))
- Disengaging Sigil velocity increased by 50%
- Disengaging Sigil velocity's vertical:horizontal ratio changed from 1.5:1 to 1:1
- Disengaging Sigil now allows input to alter the direction apollo launches himself (A/D biases to the left/right and W/S affect how much backwards motion is applied
- Disengaging Sigil T1 changed from "+30 Damage" to "Gain +25% Fire Rate and Bullet Speed for 8s"
- Disengaging Sigil T2 changed from "Gain +30% Fire Rate and +50% Bullet Speed for 10s" to "On Player Hit: +1 Stamina restored and resets Air Jump/Dash limit"
- Disengaging Sigil T3 changed from "On Player Hit: +2 stamina restored and reset Air Jump/Dash limit" to "Recast within 4s"
==
==ability:flawless-advance:
[[/ability/flawless-advance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp]] Flawless Advance change history))
### [[/ability/flawless-advance]]((Flawless Advance))
- Flawless Advance now allows Apollo to parry during it
==
=

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.4625 pick=0.4005 matches=137208 days=7
    after win=0.4706 pick=0.4483 matches=278614 days=14
  }
  high {
    before win=0.4712 pick=0.4569 matches=25574 days=7
    after win=0.4688 pick=0.5042 matches=51344 days=14
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
==ability:exploding-uppercut:
[[/ability/exploding-uppercut]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp]] Exploding Uppercut change history))
### [[/ability/exploding-uppercut]]((Exploding Uppercut))
- Exploding Uppercut T3 increased from +17% Missing Health to +18%
==
==ability:sticky-bomb:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/ability/sticky-bomb]]((Sticky Bomb))
- Fixed Sticky Bomb T3 duration ending once the bomb went off rather than the 5s duration
- Sticky Bomb T3 changed from "On Cast: +5m Move Speed and +20% Fire Rate for 5s" to "On Cast: +5m Move Speed and +25% Debuff Resistance for 6s" (applies retroactively)
==
=

=hero:calico:
``attr:
impact closed=#true {
  all {
    before win=0.5154 pick=0.1861 matches=63772 days=7
    after win=0.5166 pick=0.3059 matches=190117 days=14
  }
  high {
    before win=0.5248 pick=0.2676 matches=14979 days=7
    after win=0.5207 pick=0.4826 matches=49147 days=14
  }
}
``
[[/hero/calico]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico patch history))
## [[/hero/calico]]((Calico))
==ability:gloom-bombs:
[[/ability/gloom-bombs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp]] Gloom Bombs change history))
### [[/ability/gloom-bombs]]((Gloom Bombs))
- Gloom Bombs melee resist debuff now stacks additively
- Gloom Bombs T2 increased from -5% Melee Resist for 5s to -6% for 6s
- Gloom Bombs melee resist now applies on impact rather than explosion
==
==ability:return-to-shadows:
[[/ability/return-to-shadows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp]] Return to Shadows change history))
### [[/ability/return-to-shadows]]((Return to Shadows))
- Return to Shadows damage increased from 140 to 150
- Return to Shadows T2 damage increased from +65 to +75
- Return to Shadows T3 heal increased from 350 to 450
==
=

=hero:doorman:
``attr:
impact closed=#true {
  all {
    before win=0.5114 pick=0.2486 matches=85151 days=7
    after win=0.5032 pick=0.2304 matches=143195 days=14
  }
  high {
    before win=0.5141 pick=0.2273 matches=12723 days=7
    after win=0.4994 pick=0.2015 matches=20518 days=14
  }
}
``
[[/hero/the-doorman]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp]] Doorman patch history))
## [[/hero/the-doorman]]((Doorman))
==ability:call-bell:
[[/ability/call-bell]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp]] Call Bell change history))
### [[/ability/call-bell]]((Call Bell))
- Call Bell explosion damage spirit scaling reduced from 1.3 to 1.2
- Call Bell T3 spirit scaling reduced from 0.4 to 0.35
==
=

=hero:graves:
``attr:
impact closed=#true {
  all {
    before win=0.558 pick=0.4299 matches=147296 days=7
    after win=0.5336 pick=0.3527 matches=219221 days=14
  }
  high {
    before win=0.5421 pick=0.3241 matches=18143 days=7
    after win=0.5136 pick=0.1976 matches=20124 days=14
  }
}
``
[[/hero/graves]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp]] Graves patch history))
## [[/hero/graves]]((Graves))
==ability:jar-of-dead:
[[/ability/jar-of-dead]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp]] Jar of Dead change history))
### [[/ability/jar-of-dead]]((Jar of Dead))
- Jar of Dead collection rate reduced by 20% (takes longer to gain a charge)
- Jar of Dead damage reduced from 17+0.27 to 16+0.25
- Jar of Dead bounty increased from 5+0.25/boon to 7+0.5/boon
==
==ability:grasping-hands:
[[/ability/grasping-hands]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp]] Grasping Hands change history))
### [[/ability/grasping-hands]]((Grasping Hands))
- Grasping Hands T3 Immobilize duration reduced from +1s to +0.75s
==
=

=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.5105 pick=0.3249 matches=111303 days=7
    after win=0.4885 pick=0.2541 matches=157959 days=14
  }
  high {
    before win=0.5065 pick=0.4212 matches=23577 days=7
    after win=0.4789 pick=0.3034 matches=30899 days=14
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
- Gun cycle time increased from 0.5775 to 0.6 (~4% DPS nerf)
- Bullet damage growth reduced from +1.0 to +0.85
==ability:rain-of-arrows:
[[/ability/rain-of-arrows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp]] Rain of Arrows change history))
### [[/ability/rain-of-arrows]]((Rain of Arrows))
- Rain of Arrows cooldown increased from 22s to 23s
- Rain of Arrows T2 reduced from -13s Cooldown to -12s
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.4583 pick=0.1761 matches=60325 days=7
    after win=0.5026 pick=0.3664 matches=227762 days=14
  }
  high {
    before win=0.4765 pick=0.1818 matches=10176 days=7
    after win=0.5232 pick=0.4551 matches=46343 days=14
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg now has an alt cast behavior to place the barrel at her feet
- Powder Keg various improvements to the launch angles, velocities and feel of casting
- Powder Keg now starts with 2 charges
==
==ability:powder-keg-charge-time:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg Charge Time change history))
### [[/ability/powder-keg]]((Powder Keg Charge Time))
- Powder Keg Charge Time increased from 3.5s to 7s
==
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg spirit scaling reduced from 1.6 to 1.4
- Powder Keg T2 changed from "+58 Damage" to "+1 Charge"
- Powder Keg T3 changed from "+2 Charges and +0.4s Displacement" to "+100 Damage, +0.5 Spirit Scaling and -5s Charge Time"
==
==ability:bounce-pad:
[[/ability/bounce-pad]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad change history))
### [[/ability/bounce-pad]]((Bounce Pad))
- Fixed various issues with placing bounce pad on elevated areas
- Bounce Pad landing radius reduced from 12m to 9m
- Bounce Pad T3 changed from "+68 Stomp Damage and Improved Spirit Scaling" to "+0.7s Stomp Stun" (only triggers from Holliday)
==
=

=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=0.4973 pick=0.4322 matches=148082 days=7
    after win=0.5018 pick=0.4684 matches=291129 days=14
  }
  high {
    before win=0.4804 pick=0.379 matches=21214 days=7
    after win=0.4845 pick=0.4236 matches=43137 days=14
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
==ability:afterburn:
[[/ability/afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/ability/afterburn]]((Afterburn))
- Fixed Afterburn Max duration refreshing not properly accounting for both Debuff Resist and +Ability Duration
==
==ability:concussive-combustion:
[[/ability/concussive-combustion]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp]] Concussive Combustion change history))
### [[/ability/concussive-combustion]]((Concussive Combustion))
- Fixed Concussive Combustion cooldown not updating when getting the T2 or other CD reducing items when the ability is on cooldown
==
=

=hero:ivy:
``attr:
impact closed=#true {
  all {
    before win=0.5244 pick=0.2685 matches=91984 days=7
    after win=0.5257 pick=0.2658 matches=165218 days=14
  }
  high {
    before win=0.5225 pick=0.3096 matches=17329 days=7
    after win=0.5279 pick=0.2977 matches=30316 days=14
  }
}
``
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))
==ability:stone-form:
[[/ability/stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/ability/stone-form]]((Stone Form))
- Fixed a bug where Stone Form could sometimes do significantly more damage than intended
==
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.5242 pick=0.2215 matches=75892 days=7
    after win=0.5233 pick=0.1907 matches=118543 days=14
  }
  high {
    before win=0.5406 pick=0.2122 matches=11876 days=7
    after win=0.5355 pick=0.1691 matches=17221 days=14
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
==ability:mini-turret:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turret change history))
### [[/ability/mini-turret]]((Mini Turret))
- Mini Turret DPS rescaled from 30+0.39 to 24+0.42 (break even at 200 spirit power)
==
==ability:mini-turrets:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turrets change history))
### [[/ability/mini-turret]]((Mini Turrets))
- Mini Turrets T3 Fire Rate reduced from +30% to +25%
==
==ability:heavy-barrage:
[[/ability/heavy-barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp]] Heavy Barrage change history))
### [[/ability/heavy-barrage]]((Heavy Barrage))
- Fixed some rare cases where Heavy Barrage would stop working
==
==ability:heavy-barrage-dps:
[[/ability/heavy-barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp]] Heavy Barrage DPS change history))
### [[/ability/heavy-barrage]]((Heavy Barrage DPS))
- Heavy Barrage DPS reduced from 22.5 to 21
==
=

=hero:paige:
``attr:
impact closed=#true {
  all {
    before win=0.5169 pick=0.2967 matches=101656 days=7
    after win=0.5254 pick=0.3124 matches=194181 days=14
  }
  high {
    before win=0.4986 pick=0.2154 matches=12058 days=7
    after win=0.5159 pick=0.2413 matches=24571 days=14
  }
}
``
[[/hero/paige]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp]] Paige patch history))
## [[/hero/paige]]((Paige))
==ability:rallying-charge:
[[/ability/rallying-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp]] Rallying Charge change history))
### [[/ability/rallying-charge]]((Rallying Charge))
- Rallying Charge distance for max amp reduced from 350m to 250m
- Rallying Charge T2 increased from -30s Cooldown to -50s
==
==ability:plot-armor:
[[/ability/plot-armor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_defendandfight.webp]] Plot Armor change history))
### [[/ability/plot-armor]]((Plot Armor))
- Plot Armor barrier spirit scaling increased from 1.3 to 1.5
- Plot Armor T3 barrier spirit scaling increased from +0.3 to +0.5
==
=

=hero:pocket:
``attr:
impact closed=#true {
  all {
    before win=0.4764 pick=0.2688 matches=92105 days=7
    after win=0.4703 pick=0.2359 matches=146630 days=14
  }
  high {
    before win=0.483 pick=0.3447 matches=19293 days=7
    after win=0.4782 pick=0.2947 matches=30005 days=14
  }
}
``
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))
- Bullet damage growth reduced from +0.2 to +0.16
==ability:flying-cloak:
[[/ability/flying-cloak]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp]] Flying Cloak change history))
### [[/ability/flying-cloak]]((Flying Cloak))
- Flying Cloak T3 reduced from -13s Cooldown to -12s
==
==ability:affliction:
[[/ability/affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/ability/affliction]]((Affliction))
- Affliction now does half damage on objectives
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.5751 pick=0.5511 matches=188805 days=7
    after win=0.5609 pick=0.472 matches=293352 days=14
  }
  high {
    before win=0.5736 pick=0.57 matches=31904 days=7
    after win=0.5578 pick=0.4308 matches=43867 days=14
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
- Bullet damage growth reduced from 0.337 to 0.24
==ability:power-surge:
[[/ability/power-surge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp]] Power Surge change history))
### [[/ability/power-surge]]((Power Surge))
- Power Surge T3 reduced from +12s Duration to +10s
==
==ability:storm-cloud:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/ability/storm-cloud]]((Storm Cloud))
- Storm Cloud now hits breakables
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4623 pick=0.3377 matches=115699 days=7
    after win=0.4764 pick=0.3661 matches=227577 days=14
  }
  high {
    before win=0.4599 pick=0.4481 matches=25082 days=7
    after win=0.4838 pick=0.4741 matches=48277 days=14
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))
- Killing Blow now has +30% more cooldown whenever it does not impact a player
==
=

=hero:silver:
``attr:
impact closed=#true {
  all {
    before win=0.4779 pick=0.4273 matches=146375 days=7
    after win=0.4452 pick=0.2636 matches=163811 days=14
  }
  high {
    before win=0.5013 pick=0.4708 matches=26350 days=7
    after win=0.4653 pick=0.2352 matches=23947 days=14
  }
}
``
[[/hero/silver]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp]] Silver patch history))
## [[/hero/silver]]((Silver))
==ability:lycan-curse:
[[/ability/lycan-curse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp]] Lycan Curse change history))
### [[/ability/lycan-curse]]((Lycan Curse))
- Lycan Curse cooldown increased from 40s to 70s
- Lycan Curse T3 no longer heals
==
=

=hero:victor:
``attr:
impact closed=#true {
  all {
    before win=0.5607 pick=0.417 matches=142875 days=7
    after win=0.5444 pick=0.3645 matches=226575 days=14
  }
  high {
    before win=0.5398 pick=0.3841 matches=21502 days=7
    after win=0.5206 pick=0.3079 matches=31349 days=14
  }
}
``
[[/hero/victor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp]] Victor patch history))
## [[/hero/victor]]((Victor))
==ability:aura-of-suffering:
[[/ability/aura-of-suffering]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp]] Aura of Suffering change history))
### [[/ability/aura-of-suffering]]((Aura of Suffering))
- Aura of Suffering radius reduced from 9m to 8m
- Aura of Suffering T3 now also increases radius by +1m
- Fixed some client performance issues when using Aura of Suffering
==
==ability:shocking-reanimation:
[[/ability/shocking-reanimation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp]] Shocking Reanimation change history))
### [[/ability/shocking-reanimation]]((Shocking Reanimation))
- Shocking Reanimation cooldown increased from 230s to 240s
- Shocking Reanimation T3 reduced from -120s Cooldown to -110s
- Shocking Reanimation T3 increased from +150 Damage to +175
==
=

=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.4789 pick=0.2575 matches=88208 days=7
    after win=0.4885 pick=0.2831 matches=175944 days=14
  }
  high {
    before win=0.4952 pick=0.2381 matches=13327 days=7
    after win=0.4987 pick=0.2824 matches=28754 days=14
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
==ability:assassinate-max-bonus-damage:
[[/ability/assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate Max Bonus Damage change history))
### [[/ability/assassinate]]((Assassinate Max Bonus Damage))
- Assassinate Max Bonus Damage spirit scaling increased from 1.7 to 2.0
==
=

=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=0.4763 pick=0.1997 matches=68431 days=7
    after win=0.4811 pick=0.2257 matches=140277 days=14
  }
  high {
    before win=0.4767 pick=0.2111 matches=11817 days=7
    after win=0.4825 pick=0.2626 matches=26742 days=14
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))
==ability:puddle-punch:
[[/ability/puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/ability/puddle-punch]]((Puddle Punch))
- Puddle Punch T2 increased from +40% Lifesteal to +60%
==
==ability:goo-ball:
[[/ability/goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball change history))
### [[/ability/goo-ball]]((Goo Ball))
- Goo Ball T2 now also increases Bullet and Spirit Resist by +10%
==
=

=hero:warden:
``attr:
impact closed=#true {
  all {
    before win=0.4914 pick=0.2596 matches=88926 days=7
    after win=0.5015 pick=0.2661 matches=165391 days=14
  }
  high {
    before win=0.4881 pick=0.2727 matches=15264 days=7
    after win=0.504 pick=0.2794 matches=28451 days=14
  }
}
``
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))
- Bullet falloff reduced from 20m->58m to 18m->47m
==ability:alchemical-flask:
[[/ability/alchemical-flask]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp]] Alchemical Flask change history))
### [[/ability/alchemical-flask]]((Alchemical Flask))
- Alchemical Flask spirit scaling reduced from 0.73 to 0.63
- Alchemical Flask T2 reduced from +40 Damage to +35
- Alchemical Flask T2 increased from -20% Weapon Damage to -25%
==
==ability:willpower:
[[/ability/willpower]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp]] Willpower change history))
### [[/ability/willpower]]((Willpower))
- Willpower spirit scaling increased from +0.5 to +0.8
==
==ability:binding-word:
[[/ability/binding-word]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp]] Binding Word change history))
### [[/ability/binding-word]]((Binding Word))
- Binding Word T3 reduced from -18s Cooldown to -14s
==
==ability:last-stand:
[[/ability/last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/ability/last-stand]]((Last Stand))
- Last Stand lifesteal increased from 65% to 75%
- Last Stand T2 increased from -30s Cooldown to -35s
- Last Stand T3 increased from +3s Duration to +4s
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Arcane Surge", "Opening Rounds"]} />
``

=item:arcane-surge:
``attr:
impact closed=#true {
  all {
    before win=0.521 pick=0.112 matches=460258 days=7
    after win=0.5157 pick=0.1141 matches=850728 days=14
  }
  high {
    before win=0.5181 pick=0.1355 matches=91021 days=7
    after win=0.5122 pick=0.1301 matches=158988 days=14
  }
}
``
[[/item/arcane-surge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp]] Arcane Surge patch history))
## [[/item/arcane-surge]]((Arcane Surge))
- Fixed various cases with the bonuses not working
=

=item:opening-rounds:
``attr:
impact closed=#true {
  all {
    before win=0.4925 pick=0.2087 matches=857898 days=7
    after win=0.4922 pick=0.196 matches=1461635 days=14
  }
  high {
    before win=0.4966 pick=0.2424 matches=162844 days=7
    after win=0.4976 pick=0.2164 matches=264444 days=14
  }
}
``
[[/item/opening-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp]] Opening Rounds patch history))
## [[/item/opening-rounds]]((Opening Rounds))
- Conditional Weapon Damage bonus reduced from 30% to 25%
- Spirit Power increased from +4 to +7
=