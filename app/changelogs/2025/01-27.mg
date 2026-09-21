``attr:
title "01-27-2025 Update"
thread_id "54590"
published "2025-01-27T18:10:06-0800"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "All objectives now take 50% less damage from Spirit Damage (abilities no longer have one off values for this) Shrines are no longer vulnerable to Spirit Damage when out of range (rather than only immune to bullet damage) Can no longer stand on top of Walkers Spellslinger Headshots: Amp per headshot increased from 4% to 6% Spellslinger Headshots: Max Stacks reduced from 12 to 10 Abrams Infernal Resilience increased from 11% to 12% Bebop Uppercut air control lockout period reduced from 0.5s to 0.3s Dynamo Kinetic Pulse damage spirit scaling increased from 1.4 to 1.8 Kinetic Pulse T3 now also adds +1 Charge Calico Gloom Bombs now has updated impact SFX Gloom Bombs now has an arming effect for when they are about to detonate Leaping Slash only heals when hitting heroes Leaping Slash fixed VFX to match the damage area more accurately Leaping Slash updated to break breakables in the area Leaping Slash fixed a bug where calico's slash would deal no damage near walls Ava duration reduced from 20s to 15s Ava cooldown reduced from 50s to 45s Ava now gets slowed by 30% for 1s anytime she takes damage Ava speed reduced from 75% to 65% Ava T2 speed increased from +35% to +45% Ava now can now meow with m1 Return to Shadows cooldown increased from 80s to 90s Fixed Leaping Slash doing bonus damage from Melee Charge Grey Talon Spirit Snare cooldown reduced from 37s to 34s Spirit Snare T2 increased from +0.5s to +0.75s Haze Bullet Dance T3 increased from +40% Evasion to +60% Bullet Dance T3 increased from +2 Dance Move Speed to +3 Holliday Powder Keg will no longer arm instantly if the player has the Bounce Pad modifier Powder Keg Charge Time increased from 1s to 2s Powder Keg knock up time reduced by 15% Bounce Pad no will no longer expire after 5 seconds in the air Bounce Pad spirit scaling reduced from 0.9 to 0.4 Bounce Pad will now play a different sound on the player's first bounce when the stomp modifier is active Bounce Pad VFX and lifetime display improved Bounce Pad will now be more responsive for the player when landing and dealing damage Spirit Lasso duration reduced from 2.5s to 2.25s Spirit Lasso duration now lasts 1.5s longer when using Bounce Pad Spirit Lasso Fixed an issue where the lasso animation would get stuck on sometimes Kelvin Arctic Beam now also slows roll distances by 20% Seven Storm Cloud secondary ability delay reduced from 2s to 0.25s Shiv Serrated Knives no longer stops after hitting a Soul Orb Sinclair No longer has -35% Headshot Damage Reduction Vexing Bolt damage mechanics reworked, increases damage as the bolt travels, various values adjusted (150 max damage, 75 min damage, 2s time for max damage, assistant does 50% damage. T3 is now +150 max damage, +50% assistant damage) Vexing Bolt T2 updated to remove base fire rate debuff, add as t2 upgrade, remove spirit shred t2 Vexing Bolt allow for retarget to try to find targets through walls and to bend around corners Rabbit can now use jump Rabbit Hex projectile updated to better track targets that have recently changes models Spectral Assistant update VFX radius & lifetimes to scale off of clone damage Audience Participation cooldown with successful usage reduced from 100% to 50% Audience Participation stolen ultimate duration increased from 10s to 20s Audience Participation VFX updated steal effect to feel snappier Audience Participation fixed a typo in the ability description Vindicta Bullet damage reduced from 11.7 to 11.4 Crow projectile speed reduced from 4750 to 4250 Assassinate T2 reduced from +120 to +110 Viscous Goo Ball turn rate improved by 10% Vyper Bullet damage growth increased from 0.32 to 0.36 Petrifying Bola changed the petrify to no longer be breakable Lethal Venom updated to deal damage through petrify, rather than cleanse the petrify and damage Fixed Lethal Venom T2 anti-heal not working properly Ammo Scavenger Ammo reduced from 15% to 10% Swift Striker Fire Rate reduced from 22% to 20% Alchemical Fire Base damage reduced from 50 to 45 Bullet Lifesteal Lifesteal reduced from 26% to 24% Heroic Aura Lifesteal reduced from 18% to 16% Berserker Damage to gain stack increased from 100 to 120"
``

# General Changes

- All objectives now take 50% less damage from Spirit Damage (abilities no longer have one off values for this)
- Shrines are no longer vulnerable to Spirit Damage when out of range (rather than only immune to bullet damage)
- Can no longer stand on top of Walkers
- Spellslinger Headshots: Amp per headshot increased from 4% to 6%
- Spellslinger Headshots: Max Stacks reduced from 12 to 10

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Calico", "Dynamo", "Grey Talon", "Haze", "Holliday", "Kelvin", "Seven", "Shiv", "Sinclair", "Vindicta", "Viscous", "Vyper"]} />
``

=hero:abrams:
``attr:
impact closed=#true {
  all {
    before win=0.5025 pick=0.3866 matches=67448 days=7
    after win=0.5109 pick=0.4093 matches=125340 days=14
  }
  high {
    before win=0.5357 pick=0.4026 matches=2382 days=7
    after win=0.4981 pick=0.3957 matches=4885 days=14
  }
}
``
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))
==ability:infernal-resilience:
[[/ability/infernal-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]] Infernal Resilience change history))
### [[/ability/infernal-resilience]]((Infernal Resilience))
- Infernal Resilience increased from 11% to 12%
==
=

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.5214 pick=0.7213 matches=125834 days=7
    after win=0.5085 pick=0.7794 matches=238666 days=14
  }
  high {
    before win=0.4951 pick=0.7309 matches=4324 days=7
    after win=0.4933 pick=0.7529 matches=9294 days=14
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
==ability:exploding-uppercut:
[[/ability/exploding-uppercut]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp]] Exploding Uppercut change history))
### [[/ability/exploding-uppercut]]((Exploding Uppercut))
- Uppercut air control lockout period reduced from 0.5s to 0.3s
==
=

=hero:calico:
``attr:
impact closed=#true {
  all {
    before win=0.5481 pick=0.9472 matches=165251 days=7
    after win=0.5241 pick=0.7662 matches=234611 days=14
  }
  high {
    before win=0.558 pick=0.9694 matches=5735 days=7
    after win=0.5246 pick=0.7759 matches=9578 days=14
  }
}
``
[[/hero/calico]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico patch history))
## [[/hero/calico]]((Calico))
==ability:gloom-bombs:
[[/ability/gloom-bombs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp]] Gloom Bombs change history))
### [[/ability/gloom-bombs]]((Gloom Bombs))
- Gloom Bombs now has updated impact SFX
- Gloom Bombs now has an arming effect for when they are about to detonate
==
==ability:leaping-slash:
[[/ability/leaping-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp]] Leaping Slash change history))
### [[/ability/leaping-slash]]((Leaping Slash))
- Leaping Slash only heals when hitting heroes
- Leaping Slash fixed VFX to match the damage area more accurately
- Leaping Slash updated to break breakables in the area
- Leaping Slash fixed a bug where calico's slash would deal no damage near walls
==
==ability:ava:
[[/ability/ava]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp]] Ava change history))
### [[/ability/ava]]((Ava))
- Ava duration reduced from 20s to 15s
- Ava cooldown reduced from 50s to 45s
- Ava now gets slowed by 30% for 1s anytime she takes damage
- Ava speed reduced from 75% to 65%
- Ava T2 speed increased from +35% to +45%
- Ava now can now meow with m1
==
==ability:return-to-shadows:
[[/ability/return-to-shadows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp]] Return to Shadows change history))
### [[/ability/return-to-shadows]]((Return to Shadows))
- Return to Shadows cooldown increased from 80s to 90s
==
==ability:leaping-slash:
[[/ability/leaping-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp]] Leaping Slash change history))
### [[/ability/leaping-slash]]((Leaping Slash))
- Fixed Leaping Slash doing bonus damage from Melee Charge
==
=

=hero:dynamo:
``attr:
impact closed=#true {
  all {
    before win=0.5031 pick=0.3528 matches=61558 days=7
    after win=0.5123 pick=0.5032 matches=154067 days=14
  }
  high {
    before win=0.4901 pick=0.2549 matches=1508 days=7
    after win=0.5048 pick=0.437 matches=5394 days=14
  }
}
``
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))
==ability:kinetic-pulse:
[[/ability/kinetic-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp]] Kinetic Pulse change history))
### [[/ability/kinetic-pulse]]((Kinetic Pulse))
- Kinetic Pulse damage spirit scaling increased from 1.4 to 1.8
- Kinetic Pulse T3 now also adds +1 Charge
==
=

=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.4894 pick=0.3406 matches=59421 days=7
    after win=0.497 pick=0.4479 matches=137137 days=14
  }
  high {
    before win=0.4857 pick=0.3132 matches=1853 days=7
    after win=0.497 pick=0.4639 matches=5726 days=14
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
==ability:spirit-snare:
[[/ability/spirit-snare]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp]] Spirit Snare change history))
### [[/ability/spirit-snare]]((Spirit Snare))
- Spirit Snare cooldown reduced from 37s to 34s
- Spirit Snare T2 increased from +0.5s to +0.75s
==
=

=hero:haze:
``attr:
impact closed=#true {
  all {
    before win=0.5098 pick=0.8322 matches=145194 days=7
    after win=0.5087 pick=0.8646 matches=264752 days=14
  }
  high {
    before win=0.4797 pick=0.7894 matches=4670 days=7
    after win=0.4789 pick=0.8014 matches=9893 days=14
  }
}
``
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))
==ability:bullet-dance:
[[/ability/bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/ability/bullet-dance]]((Bullet Dance))
- Bullet Dance T3 increased from +40% Evasion to +60%
- Bullet Dance T3 increased from +2 Dance Move Speed to +3
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.4437 pick=0.7991 matches=139420 days=7
    after win=0.4524 pick=0.4866 matches=148986 days=14
  }
  high {
    before win=0.4885 pick=0.7972 matches=4716 days=7
    after win=0.5112 pick=0.5237 matches=6465 days=14
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg will no longer arm instantly if the player has the Bounce Pad modifier
==
==ability:powder-keg-charge-time:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg Charge Time change history))
### [[/ability/powder-keg]]((Powder Keg Charge Time))
- Powder Keg Charge Time increased from 1s to 2s
==
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg knock up time reduced by 15%
==
==ability:bounce-pad:
[[/ability/bounce-pad]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad change history))
### [[/ability/bounce-pad]]((Bounce Pad))
- Bounce Pad no will no longer expire after 5 seconds in the air
- Bounce Pad spirit scaling reduced from 0.9 to 0.4
- Bounce Pad will now play a different sound on the player's first bounce when the stomp modifier is active
- Bounce Pad VFX and lifetime display improved
- Bounce Pad will now be more responsive for the player when landing and dealing damage
==
==ability:spirit-lasso:
[[/ability/spirit-lasso]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp]] Spirit Lasso change history))
### [[/ability/spirit-lasso]]((Spirit Lasso))
- Spirit Lasso duration reduced from 2.5s to 2.25s
- Spirit Lasso duration now lasts 1.5s longer when using Bounce Pad
- Spirit Lasso Fixed an issue where the lasso animation would get stuck on sometimes
==
=

=hero:kelvin:
``attr:
impact closed=#true {
  all {
    before win=0.4671 pick=0.2225 matches=38823 days=7
    after win=0.4686 pick=0.2537 matches=77678 days=14
  }
  high {
    before win=0.4966 pick=0.1978 matches=1170 days=7
    after win=0.5068 pick=0.2339 matches=2887 days=14
  }
}
``
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))
==ability:arctic-beam:
[[/ability/arctic-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp]] Arctic Beam change history))
### [[/ability/arctic-beam]]((Arctic Beam))
- Arctic Beam now also slows roll distances by 20%
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.5391 pick=0.4948 matches=86316 days=7
    after win=0.5495 pick=0.6272 matches=192065 days=14
  }
  high {
    before win=0.5244 pick=0.3043 matches=1800 days=7
    after win=0.5193 pick=0.4755 matches=5870 days=14
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:storm-cloud:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/ability/storm-cloud]]((Storm Cloud))
- Storm Cloud secondary ability delay reduced from 2s to 0.25s
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4559 pick=0.4362 matches=76109 days=7
    after win=0.4636 pick=0.5084 matches=155688 days=14
  }
  high {
    before win=0.4408 pick=0.4912 matches=2906 days=7
    after win=0.4645 pick=0.5485 matches=6771 days=14
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
==ability:serrated-knives:
[[/ability/serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives change history))
### [[/ability/serrated-knives]]((Serrated Knives))
- Serrated Knives no longer stops after hitting a Soul Orb
==
=

=hero:sinclair:
``attr:
impact closed=#true {
  all {
    before win=0.4476 pick=0.4363 matches=76111 days=7
    after win=0.3898 pick=0.148 matches=45308 days=14
  }
  high {
    before win=0.4834 pick=0.32 matches=1893 days=7
    after win=#null pick=#null matches=777 days=14
  }
}
``
[[/hero/sinclair]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp]] Sinclair patch history))
## [[/hero/sinclair]]((Sinclair))
- No longer has -35% Headshot Damage Reduction
==ability:vexing-bolt:
[[/ability/vexing-bolt]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp]] Vexing Bolt change history))
### [[/ability/vexing-bolt]]((Vexing Bolt))
- Vexing Bolt damage mechanics reworked, increases damage as the bolt travels, various values adjusted (150 max damage, 75 min damage, 2s time for max damage, assistant does 50% damage. T3 is now +150 max damage, +50% assistant damage)
- Vexing Bolt T2 updated to remove base fire rate debuff, add as t2 upgrade, remove spirit shred t2
- Vexing Bolt allow for retarget to try to find targets through walls and to bend around corners
==
==ability:rabbit-hex:
[[/ability/rabbit-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp]] Rabbit Hex change history))
### [[/ability/rabbit-hex]]((Rabbit Hex))
- Rabbit can now use jump
- Rabbit Hex projectile updated to better track targets that have recently changes models
==
==ability:spectral-assistant:
[[/ability/spectral-assistant]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp]] Spectral Assistant change history))
### [[/ability/spectral-assistant]]((Spectral Assistant))
- Spectral Assistant update VFX radius & lifetimes to scale off of clone damage
==
==ability:audience-participation:
[[/ability/audience-participation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_copyult.webp]] Audience Participation change history))
### [[/ability/audience-participation]]((Audience Participation))
- Audience Participation cooldown with successful usage reduced from 100% to 50%
- Audience Participation stolen ultimate duration increased from 10s to 20s
- Audience Participation VFX updated steal effect to feel snappier
- Audience Participation fixed a typo in the ability description
==
=

=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.4959 pick=0.4648 matches=81096 days=7
    after win=0.4911 pick=0.4486 matches=137364 days=14
  }
  high {
    before win=0.492 pick=0.5524 matches=3268 days=7
    after win=0.5084 pick=0.4596 matches=5673 days=14
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
- Bullet damage reduced from 11.7 to 11.4
==ability:crow:
[[/ability/crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow change history))
### [[/ability/crow-familiar]]((Crow))
- Crow projectile speed reduced from 4750 to 4250
==
==ability:assassinate:
[[/ability/assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/ability/assassinate]]((Assassinate))
- Assassinate T2 reduced from +120 to +110
==
=

=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=0.4735 pick=0.2705 matches=47193 days=7
    after win=0.4705 pick=0.3138 matches=96096 days=14
  }
  high {
    before win=0.4893 pick=0.3016 matches=1784 days=7
    after win=0.4886 pick=0.3296 matches=4069 days=14
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))
==ability:goo-ball:
[[/ability/goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball change history))
### [[/ability/goo-ball]]((Goo Ball))
- Goo Ball turn rate improved by 10%
==
=

=hero:vyper:
``attr:
impact closed=#true {
  all {
    before win=0.4585 pick=0.5726 matches=99899 days=7
    after win=0.4837 pick=0.3331 matches=101991 days=14
  }
  high {
    before win=0.4505 pick=0.2747 matches=1625 days=7
    after win=0.519 pick=0.2045 matches=2524 days=14
  }
}
``
[[/hero/vyper]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp]] Vyper patch history))
## [[/hero/vyper]]((Vyper))
- Bullet damage growth increased from 0.32 to 0.36
==ability:petrifying-bola:
[[/ability/petrifying-bola]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_petrifybola.webp]] Petrifying Bola change history))
### [[/ability/petrifying-bola]]((Petrifying Bola))
- Petrifying Bola changed the petrify to no longer be breakable
==
==ability:lethal-venom:
[[/ability/lethal-venom]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp]] Lethal Venom change history))
### [[/ability/lethal-venom]]((Lethal Venom))
- Lethal Venom updated to deal damage through petrify, rather than cleanse the petrify and damage
- Fixed Lethal Venom T2 anti-heal not working properly
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Alchemical Fire", "Ammo Scavenger", "Berserker", "Bullet Lifesteal", "Heroic Aura", "Swift Striker"]} />
``

=item:alchemical-fire:
``attr:
impact closed=#true {
  all {
    before win=0.5338 pick=0.0576 matches=120509 days=7
    after win=0.5268 pick=0.0637 matches=233928 days=14
  }
  high {
    before win=0.5241 pick=0.1086 matches=7712 days=7
    after win=0.5304 pick=0.1055 matches=15628 days=14
  }
}
``
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))
- Base damage reduced from 50 to 45
=

=item:ammo-scavenger:
[[/item/ammo-scavenger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]] Ammo Scavenger patch history))
## [[/item/ammo-scavenger]]((Ammo Scavenger))
- Ammo reduced from 15% to 10%
=

=item:berserker:
``attr:
impact closed=#true {
  all {
    before win=0.5246 pick=0.1736 matches=363482 days=7
    after win=0.5187 pick=0.1714 matches=629663 days=14
  }
  high {
    before win=0.522 pick=0.1911 matches=13566 days=7
    after win=0.5177 pick=0.1755 matches=25993 days=14
  }
}
``
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))
- Damage to gain stack increased from 100 to 120
=

=item:bullet-lifesteal:
``attr:
impact closed=#true {
  all {
    before win=0.4918 pick=0.3048 matches=638052 days=7
    after win=0.499 pick=0.2682 matches=985533 days=14
  }
  high {
    before win=0.4864 pick=0.2258 matches=16027 days=7
    after win=0.5009 pick=0.2141 matches=31711 days=14
  }
}
``
[[/item/bullet-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp]] Bullet Lifesteal patch history))
## [[/item/bullet-lifesteal]]((Bullet Lifesteal))
- Lifesteal reduced from 26% to 24%
=

=item:heroic-aura:
``attr:
impact closed=#true {
  all {
    before win=0.5403 pick=0.0251 matches=52573 days=7
    after win=0.5344 pick=0.026 matches=95619 days=14
  }
  high {
    before win=0.5618 pick=0.0352 matches=2501 days=7
    after win=0.5387 pick=0.0361 matches=5344 days=14
  }
}
``
[[/item/heroic-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp]] Heroic Aura patch history))
## [[/item/heroic-aura]]((Heroic Aura))
- Lifesteal reduced from 18% to 16%
=

=item:swift-striker:
``attr:
impact closed=#true {
  all {
    before win=0.4972 pick=0.2358 matches=493616 days=7
    after win=0.5023 pick=0.222 matches=815541 days=14
  }
  high {
    before win=0.5011 pick=0.2318 matches=16453 days=7
    after win=0.5038 pick=0.2258 matches=33445 days=14
  }
}
``
[[/item/swift-striker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp]] Swift Striker patch history))
## [[/item/swift-striker]]((Swift Striker))
- Fire Rate reduced from 22% to 20%
=