``attr:
title "05-27-2025 Update"
thread_id "66453"
published "2025-05-27T16:47:06-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Breakable souls rescaled from 28.5 + 2.375/min to 23 + 2.6/min Trooper resistance near base reduced from 40% to 35% Fixed a bug where Urn can be invisibly carried on the hero by throwing it in certain areas like the air vents Fixed Neutrals near the base gaining the \"near base\" trooper resist Added news kiosk structure in between Mid Lane Walker and base entrance Added wall partition structures outside of Outer Lane base entrances Improved lighting in Mid Boss area Abrams Health growth per boon reduced from 81 to 78 Infernal Resilience Damage Regenerated increased from 10% to 12% Infernal Resilience T3 increased from 5% to 6% Various network related fixed for Shoulder Charge Shoulder Charge wall stun from 0.85s to 0.6s Shoulder Charge T2 changed from -12s Cooldown to +0.45s Wall Stun Shoulder Charge T3 changed to -18s Cooldown Seismic Impact cooldown increased from 160s to 170s Bebop Hyperbeam cooldown reduced from 130s to 110s Fixed some issues with lag compensation and Hook Calico Ammo increased from 9 to 10 Ava self slow on damage duration increased from 1.5s to 2s Ava self slow on damage increased from -50% to -65% Ava duration reduced from 15s to 14s Ava T1 duration reduced from +20s to +14s Ava recent damage window increased from 5s to 6s Fixed Curse and stuns not interrupting Ava (similar to Ice Path and Flame Dash) Grey Talon Spirit Snare radius increased from 6.2 to 6.5 Guided Owl duration increased from 14s to 16s Guided Owl cooldown decreased from 127s to 125s Guided Owl T2 cooldown improved from -47s to -50s Holliday Fixed some issues with lag compensation and Lasso Spirit Lasso cooldown increased from 100s to 105s Spirit Lasso T3 improved from -30s Cooldown to -35s Infernus Afterburn headshot buildup rate improved by 10% McGinnis Fixed Turret bugs when thrown at the Patron Throne Mo & Krill Base gun damage increased from 2.6 to 2.7 Scorn spirit scaling increased from 0.39 to 0.42 Combo cooldown increased from 75s to 80s Pocket Flying Cloak spirit damage scaling increased from 1.04 to 1.3 Seven Fixed Health Regen being 3 instead of 1.5 Power Surge spirit scaling increased from 0.148 to 0.16 Storm Cloud DPS reduced from 120 to 115 Storm Cloud T3 reduced from +75 to +70 Storm Cloud spirit scaling increased from 0.65 to 0.7 Storm Cloud cooldown increased from 148s to 155s Shiv Alt Fire base damage reduced by 15% Rage per weapon damage reduced by 10% Sinclair Vexing Bolt radius increased from 3m to 3.5m Vexing Bolt radius fixed to scale with radius increase now Spectral Assistant T2 duration increased from +5s to +7s Rabbit Hex cooldown reduced from 35s to 30s Viscous Goo Ball duration reduced from 10s to 9s Warden Bullet damage per boon reduced from 0.74 to 0.6 Last Stand interrupt cooldown increased from 20s to 30s Wraith Telekinesis duration reduced from 3s to 2.75s Restorative Shot Now only procs when the center pellet hits (in the case of shotguns, like how Mystic Shot works) Headshot Booster Now requires the center pellet hit the head hitbox to count Fleetfoot Cooldown increased from 10s to 16s Duration increased from 4s to 6s No longer grants +125 Bonus Health Now grants +10% Bullet Resistance While active, you gain +40% Slow Resistance Melee Charge Fixed always giving 25% more damage against objectives Headhunter Now requires the center pellet hit the head hitbox to count Bonus Headshot Damage now scales with Boons rather than Spirit Power (5.0 per Boon) Bonus Headshot Damage reduced from 100 to 75 Heal now scales with Boons rather than Spirit Power (0.1 per Boon) Cultist Sacrifice Out of Combat Regen reduced from 4 to 2 Weapon Damage vs NPC reduced from 35% to 30% Bullet Resist vs NPC reduced from 35% to 30% Fire Rate reduced from 25% to 10% Fire Rate now scales with Boons (1.25%) Health Bonus reduced from 250 to 100 Health Bonus now scales with Boons (11) Blood Tribute Fire Rate increased from 35% to 40% Express Shot Fixed shotguns with express shot instantly applying buildups Crippling Headshot No longer has a 3s cooldown Debuff duration reduced from 10s to 8s Armor Piercing Rounds Bullet Velocity increased from 30% to 35% (to match the component) Crushing Fists Fixed always giving 25% more damage against objectives Healing Nova Now a T3 item Base heal increased from 260 to 325 Heal now scales with Boons rather than Spirit Power (7 per Boon) Now grants +8 Spirit Power Cooldown reduced from 70s to 60s Counterspell Duration increased from 0.8s to 1s Spellbreaker Fixed it affecting Lady Geist's Soul Exchange Siphon Bullets Cooldown increased from 0.7s to 0.8s Fixed various bugs with stat stealing and Capacitor/Debuff Remover Superior Cooldown Cooldown Reduction reduced from 26% to 25% Tankbuster Fixed various bugs when multiple abilities hit on the same frame Decay Damage no longer procs item effects (like Affliction) Lightning Scroll Fixed bugs when used with Refresher Boundless Spirit Spirit % bonus increased from +10% to +13% Vortex Web Adjusted cast arc to be more similar to other grenades Mercurial Magnum Fixed an interaction bug with Split Shot"
``

# General Changes

- Breakable souls rescaled from 28.5 + 2.375/min to 23 + 2.6/min
- Trooper resistance near base reduced from 40% to 35%
- Fixed a bug where Urn can be invisibly carried on the hero by throwing it in certain areas like the air vents
- Fixed Neutrals near the base gaining the "near base" trooper resist
- Added news kiosk structure in between Mid Lane Walker and base entrance
- Added wall partition structures outside of Outer Lane base entrances
- Improved lighting in Mid Boss area

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Calico", "Grey Talon", "Holliday", "Infernus", "McGinnis", "Mo &amp; Krill", "Pocket", "Seven", "Shiv", "Sinclair", "Viscous", "Warden", "Wraith"]} />
``

=hero:abrams:
``attr:
impact closed=#true {
  all {
    before win=0.5212 pick=0.5022 matches=67282 days=5
    after win=0.5132 pick=0.4628 matches=157040 days=14
  }
  high {
    before win=0.5039 pick=0.5124 matches=2548 days=5
    after win=0.4986 pick=0.4015 matches=4904 days=14
  }
}
``
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))
- Health growth per boon reduced from 81 to 78
==ability:infernal-resilience-damage-regenerated:
[[/ability/infernal-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]] Infernal Resilience Damage Regenerated change history))
### [[/ability/infernal-resilience]]((Infernal Resilience Damage Regenerated))
- Infernal Resilience Damage Regenerated increased from 10% to 12%
==
==ability:infernal-resilience:
[[/ability/infernal-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]] Infernal Resilience change history))
### [[/ability/infernal-resilience]]((Infernal Resilience))
- Infernal Resilience T3 increased from 5% to 6%
==
==ability:shoulder-charge:
[[/ability/shoulder-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp]] Shoulder Charge change history))
### [[/ability/shoulder-charge]]((Shoulder Charge))
- Various network related fixed for Shoulder Charge
- Shoulder Charge wall stun from 0.85s to 0.6s
- Shoulder Charge T2 changed from -12s Cooldown to +0.45s Wall Stun
- Shoulder Charge T3 changed to -18s Cooldown
==
==ability:seismic-impact:
[[/ability/seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/ability/seismic-impact]]((Seismic Impact))
- Seismic Impact cooldown increased from 160s to 170s
==
=

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.4629 pick=0.4924 matches=65979 days=5
    after win=0.4654 pick=0.5183 matches=175874 days=14
  }
  high {
    before win=0.4647 pick=0.3869 matches=1924 days=5
    after win=0.4922 pick=0.4105 matches=5014 days=14
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
==ability:hyperbeam:
[[/ability/hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyperbeam change history))
### [[/ability/hyper-beam]]((Hyperbeam))
- Hyperbeam cooldown reduced from 130s to 110s
==
==ability:grapple-arm:
[[/ability/grapple-arm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp]] Grapple Arm change history))
### [[/ability/grapple-arm]]((Grapple Arm))
- Fixed some issues with lag compensation and Hook
==
=

=hero:calico:
``attr:
impact closed=#true {
  all {
    before win=0.5259 pick=0.4564 matches=61149 days=5
    after win=0.5251 pick=0.4784 matches=162346 days=14
  }
  high {
    before win=0.533 pick=0.5825 matches=2897 days=5
    after win=0.5306 pick=0.6732 matches=8223 days=14
  }
}
``
[[/hero/calico]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico patch history))
## [[/hero/calico]]((Calico))
- Ammo increased from 9 to 10
==ability:ava:
[[/ability/ava]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp]] Ava change history))
### [[/ability/ava]]((Ava))
- Ava self slow on damage duration increased from 1.5s to 2s
- Ava self slow on damage increased from -50% to -65%
- Ava duration reduced from 15s to 14s
- Ava T1 duration reduced from +20s to +14s
- Ava recent damage window increased from 5s to 6s
- Fixed Curse and stuns not interrupting Ava (similar to Ice Path and Flame Dash)
==
=

=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.4497 pick=0.3205 matches=42937 days=5
    after win=0.4512 pick=0.3297 matches=111877 days=14
  }
  high {
    before win=0.4494 pick=0.2107 matches=1048 days=5
    after win=0.4278 pick=0.2035 matches=2485 days=14
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
==ability:spirit-snare:
[[/ability/spirit-snare]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp]] Spirit Snare change history))
### [[/ability/spirit-snare]]((Spirit Snare))
- Spirit Snare radius increased from 6.2 to 6.5
==
==ability:guided-owl:
[[/ability/guided-owl]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp]] Guided Owl change history))
### [[/ability/guided-owl]]((Guided Owl))
- Guided Owl duration increased from 14s to 16s
- Guided Owl cooldown decreased from 127s to 125s
- Guided Owl T2 cooldown improved from -47s to -50s
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.4619 pick=0.2946 matches=39468 days=5
    after win=0.4579 pick=0.2884 matches=97855 days=14
  }
  high {
    before win=0.4821 pick=0.3817 matches=1898 days=5
    after win=0.4767 pick=0.3808 matches=4651 days=14
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:spirit-lasso:
[[/ability/spirit-lasso]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp]] Spirit Lasso change history))
### [[/ability/spirit-lasso]]((Spirit Lasso))
- Fixed some issues with lag compensation and Lasso
- Spirit Lasso cooldown increased from 100s to 105s
- Spirit Lasso T3 improved from -30s Cooldown to -35s
==
=

=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=0.5023 pick=0.7785 matches=104306 days=5
    after win=0.5065 pick=0.8186 matches=277799 days=14
  }
  high {
    before win=0.497 pick=0.696 matches=3461 days=5
    after win=0.4941 pick=0.7584 matches=9263 days=14
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
==ability:afterburn:
[[/ability/afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/ability/afterburn]]((Afterburn))
- Afterburn headshot buildup rate improved by 10%
==
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.4896 pick=0.3687 matches=49398 days=5
    after win=0.486 pick=0.3379 matches=114676 days=14
  }
  high {
    before win=#null pick=#null matches=978 days=5
    after win=0.5188 pick=0.1651 matches=2016 days=14
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
==ability:mini-turret:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turret change history))
### [[/ability/mini-turret]]((Mini Turret))
- Fixed Turret bugs when thrown at the Patron Throne
==
=

=hero:mo-krill:
``attr:
impact closed=#true {
  all {
    before win=0.4932 pick=0.3805 matches=50980 days=5
    after win=0.5055 pick=0.4043 matches=137203 days=14
  }
  high {
    before win=0.5007 pick=0.2928 matches=1456 days=5
    after win=0.513 pick=0.3471 matches=4240 days=14
  }
}
``
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))
- Base gun damage increased from 2.6 to 2.7
==ability:scorn:
[[/ability/scorn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp]] Scorn change history))
### [[/ability/scorn]]((Scorn))
- Scorn spirit scaling increased from 0.39 to 0.42
==
==ability:combo:
[[/ability/combo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp]] Combo change history))
### [[/ability/combo]]((Combo))
- Combo cooldown increased from 75s to 80s
==
=

=hero:pocket:
``attr:
impact closed=#true {
  all {
    before win=0.4594 pick=0.2608 matches=34947 days=5
    after win=0.4709 pick=0.2728 matches=92590 days=14
  }
  high {
    before win=0.4902 pick=0.3487 matches=1734 days=5
    after win=0.4689 pick=0.384 matches=4690 days=14
  }
}
``
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))
==ability:flying-cloak:
[[/ability/flying-cloak]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp]] Flying Cloak change history))
### [[/ability/flying-cloak]]((Flying Cloak))
- Flying Cloak spirit damage scaling increased from 1.04 to 1.3
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.5551 pick=0.6277 matches=84100 days=5
    after win=0.5498 pick=0.6242 matches=211816 days=14
  }
  high {
    before win=0.5301 pick=0.4784 matches=2379 days=5
    after win=0.5148 pick=0.455 matches=5557 days=14
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
- Fixed Health Regen being 3 instead of 1.5
==ability:power-surge:
[[/ability/power-surge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp]] Power Surge change history))
### [[/ability/power-surge]]((Power Surge))
- Power Surge spirit scaling increased from 0.148 to 0.16
==
==ability:storm-cloud-dps:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud DPS change history))
### [[/ability/storm-cloud]]((Storm Cloud DPS))
- Storm Cloud DPS reduced from 120 to 115
==
==ability:storm-cloud:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/ability/storm-cloud]]((Storm Cloud))
- Storm Cloud T3 reduced from +75 to +70
- Storm Cloud spirit scaling increased from 0.65 to 0.7
- Storm Cloud cooldown increased from 148s to 155s
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4436 pick=0.542 matches=72625 days=5
    after win=0.4441 pick=0.454 matches=154073 days=14
  }
  high {
    before win=0.4442 pick=0.5944 matches=2956 days=5
    after win=0.46 pick=0.5 matches=6107 days=14
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
- Alt Fire base damage reduced by 15%
- Rage per weapon damage reduced by 10%
=

=hero:sinclair:
``attr:
impact closed=#true {
  all {
    before win=0.4529 pick=0.1558 matches=20871 days=5
    after win=0.46 pick=0.1984 matches=67319 days=14
  }
  high {
    before win=#null pick=#null matches=824 days=5
    after win=0.4962 pick=0.227 matches=2773 days=14
  }
}
``
[[/hero/sinclair]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp]] Sinclair patch history))
## [[/hero/sinclair]]((Sinclair))
==ability:vexing-bolt:
[[/ability/vexing-bolt]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp]] Vexing Bolt change history))
### [[/ability/vexing-bolt]]((Vexing Bolt))
- Vexing Bolt radius increased from 3m to 3.5m
- Vexing Bolt radius fixed to scale with radius increase now
==
==ability:spectral-assistant:
[[/ability/spectral-assistant]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp]] Spectral Assistant change history))
### [[/ability/spectral-assistant]]((Spectral Assistant))
- Spectral Assistant T2 duration increased from +5s to +7s
==
==ability:rabbit-hex:
[[/ability/rabbit-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp]] Rabbit Hex change history))
### [[/ability/rabbit-hex]]((Rabbit Hex))
- Rabbit Hex cooldown reduced from 35s to 30s
==
=

=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=0.4761 pick=0.3916 matches=52469 days=5
    after win=0.4705 pick=0.3914 matches=132810 days=14
  }
  high {
    before win=0.4956 pick=0.4313 matches=2145 days=5
    after win=0.4718 pick=0.3792 matches=4631 days=14
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))
==ability:goo-ball:
[[/ability/goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball change history))
### [[/ability/goo-ball]]((Goo Ball))
- Goo Ball duration reduced from 10s to 9s
==
=

=hero:warden:
``attr:
impact closed=#true {
  all {
    before win=0.5312 pick=0.5989 matches=80238 days=5
    after win=0.5267 pick=0.5777 matches=196034 days=14
  }
  high {
    before win=0.5288 pick=0.5787 matches=2878 days=5
    after win=0.5251 pick=0.4868 matches=5946 days=14
  }
}
``
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))
- Bullet damage per boon reduced from 0.74 to 0.6
==ability:last-stand:
[[/ability/last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/ability/last-stand]]((Last Stand))
- Last Stand interrupt cooldown increased from 20s to 30s
==
=

=hero:wraith:
``attr:
impact closed=#true {
  all {
    before win=0.5269 pick=0.6679 matches=89489 days=5
    after win=0.5306 pick=0.6595 matches=223807 days=14
  }
  high {
    before win=0.5433 pick=0.7979 matches=3968 days=5
    after win=0.5464 pick=0.7663 matches=9360 days=14
  }
}
``
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))
==ability:telekinesis:
[[/ability/telekinesis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp]] Telekinesis change history))
### [[/ability/telekinesis]]((Telekinesis))
- Telekinesis duration reduced from 3s to 2.75s
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Armor Piercing Rounds", "Blood Tribute", "Boundless Spirit", "Counterspell", "Crippling Headshot", "Crushing Fists", "Cultist Sacrifice", "Decay", "Express Shot", "Fleetfoot", "Headhunter", "Headshot Booster", "Healing Nova", "Lightning Scroll", "Melee Charge", "Mercurial Magnum", "Restorative Shot", "Siphon Bullets", "Spellbreaker", "Superior Cooldown", "Tankbuster", "Vortex Web"]} />
``

=item:armor-piercing-rounds:
``attr:
impact closed=#true {
  all {
    before win=0.5491 pick=0.0273 matches=43867 days=5
    after win=0.5458 pick=0.0244 matches=99362 days=14
  }
  high {
    before win=0.5482 pick=0.0177 matches=1058 days=5
    after win=0.554 pick=0.015 matches=2193 days=14
  }
}
``
[[/item/armor-piercing-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/armor_piercing_rounds.webp]] Armor Piercing Rounds patch history))
## [[/item/armor-piercing-rounds]]((Armor Piercing Rounds))
- Bullet Velocity increased from 30% to 35% (to match the component)
=

=item:blood-tribute:
``attr:
impact closed=#true {
  all {
    before win=0.5194 pick=0.0027 matches=4336 days=5
    after win=0.5243 pick=0.0029 matches=11629 days=14
  }
  high {
    before win=#null pick=#null matches=174 days=5
    after win=#null pick=#null matches=509 days=13
  }
}
``
[[/item/blood-tribute]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute.webp]] Blood Tribute patch history))
## [[/item/blood-tribute]]((Blood Tribute))
- Fire Rate increased from 35% to 40%
=

=item:boundless-spirit:
``attr:
impact closed=#true {
  all {
    before win=0.5309 pick=0.1755 matches=282184 days=5
    after win=0.5349 pick=0.1826 matches=743717 days=14
  }
  high {
    before win=0.5397 pick=0.0928 matches=5540 days=5
    after win=0.5443 pick=0.0933 matches=13677 days=14
  }
}
``
[[/item/boundless-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp]] Boundless Spirit patch history))
## [[/item/boundless-spirit]]((Boundless Spirit))
- Spirit % bonus increased from +10% to +13%
=

=item:counterspell:
``attr:
impact closed=#true {
  all {
    before win=0.4802 pick=0.0228 matches=36650 days=5
    after win=0.4835 pick=0.0202 matches=82151 days=14
  }
  high {
    before win=0.4939 pick=0.0304 matches=1812 days=5
    after win=0.5126 pick=0.0267 matches=3919 days=14
  }
}
``
[[/item/counterspell]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell.webp]] Counterspell patch history))
## [[/item/counterspell]]((Counterspell))
- Duration increased from 0.8s to 1s
=

=item:crippling-headshot:
``attr:
impact closed=#true {
  all {
    before win=0.548 pick=0.0393 matches=63207 days=5
    after win=0.5559 pick=0.0339 matches=138013 days=14
  }
  high {
    before win=0.5687 pick=0.0258 matches=1542 days=5
    after win=0.5738 pick=0.0254 matches=3719 days=14
  }
}
``
[[/item/crippling-headshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.webp]] Crippling Headshot patch history))
## [[/item/crippling-headshot]]((Crippling Headshot))
- No longer has a 3s cooldown
- Debuff duration reduced from 10s to 8s
=

=item:crushing-fists:
``attr:
impact closed=#true {
  all {
    before win=0.553 pick=0.0616 matches=99086 days=5
    after win=0.5491 pick=0.0583 matches=237558 days=14
  }
  high {
    before win=0.5412 pick=0.0518 matches=3091 days=5
    after win=0.558 pick=0.0411 matches=6027 days=14
  }
}
``
[[/item/crushing-fists]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp]] Crushing Fists patch history))
## [[/item/crushing-fists]]((Crushing Fists))
- Fixed always giving 25% more damage against objectives
=

=item:cultist-sacrifice:
``attr:
impact closed=#true {
  all {
    before win=0.5189 pick=0.1577 matches=253575 days=5
    after win=0.5115 pick=0.1028 matches=418492 days=14
  }
  high {
    before win=0.5131 pick=0.2929 matches=17480 days=5
    after win=0.52 pick=0.1405 matches=20595 days=14
  }
}
``
[[/item/cultist-sacrifice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp]] Cultist Sacrifice patch history))
## [[/item/cultist-sacrifice]]((Cultist Sacrifice))
- Out of Combat Regen reduced from 4 to 2
- Weapon Damage vs NPC reduced from 35% to 30%
- Bullet Resist vs NPC reduced from 35% to 30%
- Fire Rate reduced from 25% to 10%
- Fire Rate now scales with Boons (1.25%)
- Health Bonus reduced from 250 to 100
- Health Bonus now scales with Boons (11)
=

=item:decay:
``attr:
impact closed=#true {
  all {
    before win=0.4716 pick=0.0417 matches=67005 days=5
    after win=0.4569 pick=0.0256 matches=104360 days=14
  }
  high {
    before win=0.4884 pick=0.0507 matches=3028 days=5
    after win=0.4635 pick=0.0231 matches=3379 days=14
  }
}
``
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))
- Damage no longer procs item effects (like Affliction)
=

=item:express-shot:
``attr:
impact closed=#true {
  all {
    before win=0.458 pick=0.0516 matches=82956 days=5
    after win=0.4565 pick=0.039 matches=158642 days=14
  }
  high {
    before win=0.4683 pick=0.0401 matches=2394 days=5
    after win=0.4667 pick=0.0317 matches=4645 days=14
  }
}
``
[[/item/express-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp]] Express Shot patch history))
## [[/item/express-shot]]((Express Shot))
- Fixed shotguns with express shot instantly applying buildups
=

=item:fleetfoot:
``attr:
impact closed=#true {
  all {
    before win=0.5371 pick=0.1159 matches=186427 days=5
    after win=0.5382 pick=0.1337 matches=544550 days=14
  }
  high {
    before win=0.5368 pick=0.1534 matches=9152 days=5
    after win=0.543 pick=0.169 matches=24772 days=14
  }
}
``
[[/item/fleetfoot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp]] Fleetfoot patch history))
## [[/item/fleetfoot]]((Fleetfoot))
- Cooldown increased from 10s to 16s
- Duration increased from 4s to 6s
- No longer grants +125 Bonus Health
- Now grants +10% Bullet Resistance
- While active, you gain +40% Slow Resistance
=

=item:headhunter:
``attr:
impact closed=#true {
  all {
    before win=0.4856 pick=0.1374 matches=220863 days=5
    after win=0.4821 pick=0.0805 matches=327810 days=14
  }
  high {
    before win=0.4784 pick=0.1194 matches=7128 days=5
    after win=0.4849 pick=0.0505 matches=7398 days=14
  }
}
``
[[/item/headhunter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp]] Headhunter patch history))
## [[/item/headhunter]]((Headhunter))
- Now requires the center pellet hit the head hitbox to count
- Bonus Headshot Damage now scales with Boons rather than Spirit Power (5.0 per Boon)
- Bonus Headshot Damage reduced from 100 to 75
- Heal now scales with Boons rather than Spirit Power (0.1 per Boon)
=

=item:headshot-booster:
``attr:
impact closed=#true {
  all {
    before win=0.4917 pick=0.2669 matches=429196 days=5
    after win=0.4903 pick=0.1944 matches=791804 days=14
  }
  high {
    before win=0.4858 pick=0.2831 matches=16897 days=5
    after win=0.4914 pick=0.1759 matches=25784 days=14
  }
}
``
[[/item/headshot-booster]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp]] Headshot Booster patch history))
## [[/item/headshot-booster]]((Headshot Booster))
- Now requires the center pellet hit the head hitbox to count
=

=item:healing-nova:
``attr:
impact closed=#true {
  all {
    before win=0.5066 pick=0.1031 matches=165731 days=5
    after win=0.5023 pick=0.0301 matches=122384 days=14
  }
  high {
    before win=0.506 pick=0.2246 matches=13405 days=5
    after win=0.5491 pick=0.0201 matches=2952 days=14
  }
}
``
[[/item/healing-nova]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp]] Healing Nova patch history))
## [[/item/healing-nova]]((Healing Nova))
- Now a T3 item
- Base heal increased from 260 to 325
- Heal now scales with Boons rather than Spirit Power (7 per Boon)
- Now grants +8 Spirit Power
- Cooldown reduced from 70s to 60s
=

=item:lightning-scroll:
``attr:
impact closed=#true {
  all {
    before win=0.5788 pick=0.0409 matches=65787 days=5
    after win=0.5768 pick=0.0398 matches=161962 days=14
  }
  high {
    before win=0.594 pick=0.0334 matches=1995 days=5
    after win=0.5674 pick=0.032 matches=4697 days=14
  }
}
``
[[/item/lightning-scroll]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/lightning_scroll.webp]] Lightning Scroll patch history))
## [[/item/lightning-scroll]]((Lightning Scroll))
- Fixed bugs when used with Refresher
=

=item:melee-charge:
``attr:
impact closed=#true {
  all {
    before win=0.52 pick=0.079 matches=127095 days=5
    after win=0.5125 pick=0.0759 matches=309110 days=14
  }
  high {
    before win=0.5068 pick=0.0767 matches=4578 days=5
    after win=0.5114 pick=0.0632 matches=9264 days=14
  }
}
``
[[/item/melee-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp]] Melee Charge patch history))
## [[/item/melee-charge]]((Melee Charge))
- Fixed always giving 25% more damage against objectives
=

=item:mercurial-magnum:
``attr:
impact closed=#true {
  all {
    before win=0.541 pick=0.1722 matches=276946 days=5
    after win=0.5415 pick=0.1505 matches=612934 days=14
  }
  high {
    before win=0.5474 pick=0.1282 matches=7649 days=5
    after win=0.5506 pick=0.0998 matches=14621 days=14
  }
}
``
[[/item/mercurial-magnum]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp]] Mercurial Magnum patch history))
## [[/item/mercurial-magnum]]((Mercurial Magnum))
- Fixed an interaction bug with Split Shot
=

=item:restorative-shot:
``attr:
impact closed=#true {
  all {
    before win=0.4786 pick=0.0874 matches=140556 days=5
    after win=0.4752 pick=0.0686 matches=279266 days=14
  }
  high {
    before win=0.485 pick=0.1023 matches=6107 days=5
    after win=0.4812 pick=0.0717 matches=10508 days=14
  }
}
``
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))
- Now only procs when the center pellet hits (in the case of shotguns, like how Mystic Shot works)
=

=item:siphon-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.5656 pick=0.0833 matches=133897 days=5
    after win=0.5737 pick=0.0762 matches=310220 days=14
  }
  high {
    before win=0.5494 pick=0.1392 matches=8306 days=5
    after win=0.5688 pick=0.0938 matches=13749 days=14
  }
}
``
[[/item/siphon-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]] Siphon Bullets patch history))
## [[/item/siphon-bullets]]((Siphon Bullets))
- Cooldown increased from 0.7s to 0.8s
- Fixed various bugs with stat stealing and Capacitor/Debuff Remover
=

=item:spellbreaker:
``attr:
impact closed=#true {
  all {
    before win=0.5682 pick=0.0221 matches=35570 days=5
    after win=0.5703 pick=0.0221 matches=89950 days=14
  }
  high {
    before win=0.594 pick=0.0173 matches=1032 days=5
    after win=0.6056 pick=0.0174 matches=2543 days=14
  }
}
``
[[/item/spellbreaker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.webp]] Spellbreaker patch history))
## [[/item/spellbreaker]]((Spellbreaker))
- Fixed it affecting Lady Geist's Soul Exchange
=

=item:superior-cooldown:
``attr:
impact closed=#true {
  all {
    before win=0.5145 pick=0.4453 matches=715959 days=5
    after win=0.5126 pick=0.4555 matches=1855013 days=14
  }
  high {
    before win=0.5193 pick=0.4678 matches=27919 days=5
    after win=0.5155 pick=0.4698 matches=68863 days=14
  }
}
``
[[/item/superior-cooldown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp]] Superior Cooldown patch history))
## [[/item/superior-cooldown]]((Superior Cooldown))
- Cooldown Reduction reduced from 26% to 25%
=

=item:tankbuster:
``attr:
impact closed=#true {
  all {
    before win=0.4923 pick=0.2852 matches=458492 days=5
    after win=0.4911 pick=0.2845 matches=1158500 days=14
  }
  high {
    before win=0.5023 pick=0.2605 matches=15543 days=5
    after win=0.4901 pick=0.2559 matches=37501 days=14
  }
}
``
[[/item/tankbuster]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp]] Tankbuster patch history))
## [[/item/tankbuster]]((Tankbuster))
- Fixed various bugs when multiple abilities hit on the same frame
=

=item:vortex-web:
``attr:
impact closed=#true {
  all {
    before win=0.546 pick=0.0095 matches=15309 days=5
    after win=0.5446 pick=0.0085 matches=34515 days=14
  }
  high {
    before win=#null pick=#null matches=621 days=5
    after win=0.5517 pick=0.0095 matches=1392 days=14
  }
}
``
[[/item/vortex-web]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/vortex_web.webp]] Vortex Web patch history))
## [[/item/vortex-web]]((Vortex Web))
- Adjusted cast arc to be more similar to other grenades
=