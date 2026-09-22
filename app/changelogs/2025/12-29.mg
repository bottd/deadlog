``attr:
title "12-29-2025 Update"
thread_id "95233"
published "2025-12-29T22:33:52-0800"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Respawn time at 19 minutes reduced from 35s to 30s Respawn time at 30 minutes reduced from 75s to 70s You now have a longer respawn time if you die and are meaningfully richer than the enemy team's average net worth (scales from +6s to +22s penalty, based on networth being 15 to 30% higher and game time being 10min to 25min, if under 15% NW or 10min, nothing happens) Neutral respawn times, hp, and bounty reduced by 30% (sinner's sacrifice unaffected) Urn no longer requires a drop off channel time Urn is now knocked out of your hands with a light melee (instead of only with a heavy melee) Urn pickup channel time is reset if you get hit with a light or heavy melee Can no longer parry while channeling to pickup the urn Urn carrier resist reduced from 50% to 30% Down Dash stamina cost reduced from 1 to 0.5 Stamina Regen in the healing zone is now dramatically increased Urn now drops if it travels through doorman portals Bebop Stamina increased from 2 to 3 Stamina regeneration cooldown increased from 4.55s to 6s Bebop Health per boon increased from +46 to +52 Sticky Bomb base damage reduced from 100 to 75 Sticky Bomb T2 damage reduced from 63 to 60 Sticky Bomb Spirit Scaling increased from 1.1 to 1.5 Sticky Bomb per hero hit from 1.5% to 1% + 0.0025% Spirit Scaling Sticky Bomb per hero kill from 4% to 2.5% + 0.015% Spirit Scaling Stamina regeneration cooldown improved from 6s to 5.5s Sticky Bomb stacks now count for half for each stack after a certain threshold (100 on hit and 10 on kill) Sticky Bomb base damage increased from 70 to 80 Sticky Bomb T2 increased from +60 to +70 Grey Talon Rain of Arrows cooldown reduced from 35s to 30s Rain of Arrows T3 now also grants +30% Bullet Evasion Guided Owl duration increased from 16s to 18s Guided Owl T1 damage increased from +81 to +85 Guided Owl Spirit Power per kill increased from 5 to 8 Holliday Powder Keg cooldown reduced from 32s to 28s Fixed Lasso being removed by Divine Barrier Ivy Watcher's Covenant Replicated Healing increased from 25% to 35% Watcher's Covenant Replicated Healing now scales with boons (0.5) Air Drop ally damage penalty reduced from -30% to -20% Kelvin Frost Grenade T3 now also reduces stamina regen by -30% Ice Path T3 Max Spirit Power increased from 55 to 75 Ice Path T3 Spirit Power linger duration increased from 6s to 8s Mo & Krill Burrow initial knockup vertical area detection improved Sand Blast now deals a fixed 40 damage Sand Blast can now be casted while Burrowed Sand Blast T2 increased from -19s Cooldown to -23s Sand Blast T3 now also slows dash distance by 40% Paradox Kinetic Carbine cooldown reduced from 30s to 27s Time Wall Width increased from 7m to 7.5m Seven Lightning Ball T3 increased from +1m to +1.5m Power Surge T2 reduced from -15% Spirit Resist for 8s to -10% for 6s Storm Cloud DPS increased from 90 to 95 Storm Cloud T3 increased from +54 DPS to 65 Storm Cloud T3 move speed increased from 2.5 to 3.8 Sinclair Spirit power growth increased from 1.1 to 1.3 Vexing Bolt initial velocity reduced from 1000 to 800 Vexing Bolt now only snaps to heroes Vexing Bolt max duration increased from 3s to 4s (max damage is still at 2s) Vexing Bolt now shows the target to redirect to (similar to Wraith's Cards) Rabbit Hex cooldown reduced from 30s to 26s Rabbit Hex radius increased from 6m to 6.5m Yamato Power Slash T3 bonus damage reduced from +166 to +150 Power Slash T3 now also increases spirit power scaling by 0.5 Shadow Transformation heal on kill increased from 12% to 15% Billy Base bullet damage reduced from 6.79 to 6.3 Lady Geist Ammo reduced from 10 to 9 Bullet Falloff from 58m to 52m McGinnis Medicinal Specter radius spirit scaling reduced from 0.0456 to 0.03 Medicinal Specter duration spirit scaling reduced from 0.11 to 0.05 Medicinal Specter T3 reduced from 3% Max Health to 2.5% Heavy Barrage T1 slow increased from 30% to 40% (and 20% dash slow) Heavy Barrage T3 spirit scaling increased from +0.1 to +0.2 Toxic Bullets Bleed damage reduced from 2.2% to 2% Buildup is 10% harder Kinetic Dash Ammo count reduced from +8 to +6"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2025-12-17" to="2025-12-30"
  after from="2025-12-31" to="2026-01-14"
}
``

# General Changes

- Respawn time at 19 minutes reduced from 35s to 30s
- Respawn time at 30 minutes reduced from 75s to 70s
- You now have a longer respawn time if you die and are meaningfully richer than the enemy team's average net worth (scales from +6s to +22s penalty, based on networth being 15 to 30% higher and game time being 10min to 25min, if under 15% NW or 10min, nothing happens)
- Neutral respawn times, hp, and bounty reduced by 30% (sinner's sacrifice unaffected)
- Urn no longer requires a drop off channel time
- Urn is now knocked out of your hands with a light melee (instead of only with a heavy melee)
- Urn pickup channel time is reset if you get hit with a light or heavy melee
- Can no longer parry while channeling to pickup the urn
- Urn carrier resist reduced from 50% to 30%
- Down Dash stamina cost reduced from 1 to 0.5
- Stamina Regen in the healing zone is now dramatically increased
- Urn now drops if it travels through doorman portals

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Bebop", "Billy", "Grey Talon", "Holliday", "Ivy", "Kelvin", "Lady Geist", "McGinnis", "Mo &amp; Krill", "Paradox", "Seven", "Sinclair", "Yamato"]} />
``

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.4477 pick=0.471 matches=115735 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4825 pick=0.7051 matches=227563 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.4399 pick=0.4798 matches=22134 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4593 pick=0.7963 matches=45026 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
- Stamina increased from 2 to 3
- Stamina regeneration cooldown increased from 4.55s to 6s
- Bebop Health per boon increased from +46 to +52
==ability:sticky-bomb:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/ability/sticky-bomb]]((Sticky Bomb))
- Sticky Bomb base damage reduced from 100 to 75
- Sticky Bomb T2 damage reduced from 63 to 60
==
==ability:sticky-bomb-spirit-scaling:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb Spirit Scaling change history))
### [[/ability/sticky-bomb]]((Sticky Bomb Spirit Scaling))
- Sticky Bomb Spirit Scaling increased from 1.1 to 1.5
==
==ability:sticky-bomb:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/ability/sticky-bomb]]((Sticky Bomb))
- Sticky Bomb per hero hit from 1.5% to 1% + 0.0025% Spirit Scaling
- Sticky Bomb per hero kill from 4% to 2.5% + 0.015% Spirit Scaling
==
- Stamina regeneration cooldown improved from 6s to 5.5s
==ability:sticky-bomb:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/ability/sticky-bomb]]((Sticky Bomb))
- Sticky Bomb stacks now count for half for each stack after a certain threshold (100 on hit and 10 on kill)
- Sticky Bomb base damage increased from 70 to 80
- Sticky Bomb T2 increased from +60 to +70
==
=

=hero:billy:
``attr:
impact closed=#true {
  all {
    before win=0.5047 pick=0.425 matches=104447 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4863 pick=0.3739 matches=120688 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.5153 pick=0.3782 matches=17447 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4861 pick=0.3102 matches=17537 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/billy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp]] Billy patch history))
## [[/hero/billy]]((Billy))
- Base bullet damage reduced from 6.79 to 6.3
=

=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.4447 pick=0.2629 matches=64599 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4705 pick=0.2419 matches=78087 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.4266 pick=0.2321 matches=10706 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4668 pick=0.2192 matches=12394 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
==ability:rain-of-arrows:
[[/ability/rain-of-arrows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp]] Rain of Arrows change history))
### [[/ability/rain-of-arrows]]((Rain of Arrows))
- Rain of Arrows cooldown reduced from 35s to 30s
- Rain of Arrows T3 now also grants +30% Bullet Evasion
==
==ability:guided-owl:
[[/ability/guided-owl]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp]] Guided Owl change history))
### [[/ability/guided-owl]]((Guided Owl))
- Guided Owl duration increased from 16s to 18s
- Guided Owl T1 damage increased from +81 to +85
- Guided Owl Spirit Power per kill increased from 5 to 8
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.442 pick=0.2779 matches=68296 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4544 pick=0.2669 matches=86137 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.4516 pick=0.2822 matches=13018 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4632 pick=0.2755 matches=15577 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg cooldown reduced from 32s to 28s
==
==ability:spirit-lasso:
[[/ability/spirit-lasso]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp]] Spirit Lasso change history))
### [[/ability/spirit-lasso]]((Spirit Lasso))
- Fixed Lasso being removed by Divine Barrier
==
=

=hero:ivy:
``attr:
impact closed=#true {
  all {
    before win=0.5171 pick=0.2985 matches=73354 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.5249 pick=0.3215 matches=103764 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.5128 pick=0.2979 matches=13745 days=13 total=553632 covered=13 coverage="complete"
    after win=0.5287 pick=0.325 matches=18376 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))
==ability:watcher-s-covenant-replicated-healing:
[[/ability/kudzu-connection]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp]] Watcher's Covenant Replicated Healing change history))
### [[/ability/kudzu-connection]]((Watcher's Covenant Replicated Healing))
- Watcher's Covenant Replicated Healing increased from 25% to 35%
- Watcher's Covenant Replicated Healing now scales with boons (0.5)
==
==ability:air-drop:
[[/ability/air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/ability/air-drop]]((Air Drop))
- Air Drop ally damage penalty reduced from -30% to -20%
==
=

=hero:kelvin:
``attr:
impact closed=#true {
  all {
    before win=0.4707 pick=0.241 matches=59234 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4601 pick=0.1923 matches=62055 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.4777 pick=0.2347 matches=10830 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4581 pick=0.1656 matches=9363 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))
==ability:frost-grenade:
[[/ability/frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/ability/frost-grenade]]((Frost Grenade))
- Frost Grenade T3 now also reduces stamina regen by -30%
==
==ability:ice-path:
[[/ability/ice-path]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp]] Ice Path change history))
### [[/ability/ice-path]]((Ice Path))
- Ice Path T3 Max Spirit Power increased from 55 to 75
- Ice Path T3 Spirit Power linger duration increased from 6s to 8s
==
=

=hero:lady-geist:
``attr:
impact closed=#true {
  all {
    before win=0.4775 pick=0.341 matches=83808 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4681 pick=0.2938 matches=94839 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.4702 pick=0.3279 matches=15127 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4685 pick=0.2488 matches=14069 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))
- Ammo reduced from 10 to 9
- Bullet Falloff from 58m to 52m
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.5557 pick=0.3987 matches=97980 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4978 pick=0.3508 matches=113226 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.5618 pick=0.3686 matches=17005 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4927 pick=0.2677 matches=15137 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
==ability:medicinal-specter:
[[/ability/medicinal-specter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp]] Medicinal Specter change history))
### [[/ability/medicinal-specter]]((Medicinal Specter))
- Medicinal Specter radius spirit scaling reduced from 0.0456 to 0.03
- Medicinal Specter duration spirit scaling reduced from 0.11 to 0.05
- Medicinal Specter T3 reduced from 3% Max Health to 2.5%
==
==ability:heavy-barrage:
[[/ability/heavy-barrage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp]] Heavy Barrage change history))
### [[/ability/heavy-barrage]]((Heavy Barrage))
- Heavy Barrage T1 slow increased from 30% to 40% (and 20% dash slow)
- Heavy Barrage T3 spirit scaling increased from +0.1 to +0.2
==
=

=hero:mo-krill:
``attr:
impact closed=#true {
  all {
    before win=0.4979 pick=0.3042 matches=74764 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.5079 pick=0.3028 matches=97720 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.4908 pick=0.3102 matches=14312 days=13 total=553632 covered=13 coverage="complete"
    after win=0.5112 pick=0.3012 matches=17032 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))
==ability:burrow:
[[/ability/burrow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp]] Burrow change history))
### [[/ability/burrow]]((Burrow))
- Burrow initial knockup vertical area detection improved
==
==ability:sand-blast:
[[/ability/sand-blast]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp]] Sand Blast change history))
### [[/ability/sand-blast]]((Sand Blast))
- Sand Blast now deals a fixed 40 damage
- Sand Blast can now be casted while Burrowed
- Sand Blast T2 increased from -19s Cooldown to -23s
- Sand Blast T3 now also slows dash distance by 40%
==
=

=hero:paradox:
``attr:
impact closed=#true {
  all {
    before win=0.4638 pick=0.2926 matches=71906 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4692 pick=0.2785 matches=89879 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.4765 pick=0.329 matches=15179 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4843 pick=0.3287 matches=18584 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))
==ability:kinetic-carbine:
[[/ability/kinetic-carbine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp]] Kinetic Carbine change history))
### [[/ability/kinetic-carbine]]((Kinetic Carbine))
- Kinetic Carbine cooldown reduced from 30s to 27s
==
==ability:time-wall-width:
[[/ability/time-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp]] Time Wall Width change history))
### [[/ability/time-wall]]((Time Wall Width))
- Time Wall Width increased from 7m to 7.5m
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.5477 pick=0.3867 matches=95037 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.5448 pick=0.4219 matches=136163 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.5421 pick=0.3507 matches=16178 days=13 total=553632 covered=13 coverage="complete"
    after win=0.5316 pick=0.3656 matches=20673 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:lightning-ball:
[[/ability/lightning-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp]] Lightning Ball change history))
### [[/ability/lightning-ball]]((Lightning Ball))
- Lightning Ball T3 increased from +1m to +1.5m
==
==ability:power-surge:
[[/ability/power-surge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp]] Power Surge change history))
### [[/ability/power-surge]]((Power Surge))
- Power Surge T2 reduced from -15% Spirit Resist for 8s to -10% for 6s
==
==ability:storm-cloud-dps:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud DPS change history))
### [[/ability/storm-cloud]]((Storm Cloud DPS))
- Storm Cloud DPS increased from 90 to 95
==
==ability:storm-cloud:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/ability/storm-cloud]]((Storm Cloud))
- Storm Cloud T3 increased from +54 DPS to 65
- Storm Cloud T3 move speed increased from 2.5 to 3.8
==
=

=hero:sinclair:
``attr:
impact closed=#true {
  all {
    before win=0.4457 pick=0.2327 matches=57196 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4566 pick=0.2121 matches=68446 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.4409 pick=0.2306 matches=10639 days=13 total=553632 covered=13 coverage="complete"
    after win=0.459 pick=0.2135 matches=12070 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/sinclair]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp]] Sinclair patch history))
## [[/hero/sinclair]]((Sinclair))
- Spirit power growth increased from 1.1 to 1.3
==ability:vexing-bolt:
[[/ability/vexing-bolt]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp]] Vexing Bolt change history))
### [[/ability/vexing-bolt]]((Vexing Bolt))
- Vexing Bolt initial velocity reduced from 1000 to 800
- Vexing Bolt now only snaps to heroes
- Vexing Bolt max duration increased from 3s to 4s (max damage is still at 2s)
- Vexing Bolt now shows the target to redirect to (similar to Wraith's Cards)
==
==ability:rabbit-hex:
[[/ability/rabbit-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp]] Rabbit Hex change history))
### [[/ability/rabbit-hex]]((Rabbit Hex))
- Rabbit Hex cooldown reduced from 30s to 26s
- Rabbit Hex radius increased from 6m to 6.5m
==
=

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.4498 pick=0.294 matches=72253 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4642 pick=0.3107 matches=100279 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.4617 pick=0.3264 matches=15060 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4792 pick=0.361 matches=20412 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
==ability:power-slash:
[[/ability/power-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp]] Power Slash change history))
### [[/ability/power-slash]]((Power Slash))
- Power Slash T3 bonus damage reduced from +166 to +150
- Power Slash T3 now also increases spirit power scaling by 0.5
==
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))
- Shadow Transformation heal on kill increased from 12% to 15%
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Kinetic Dash", "Toxic Bullets"]} />
``

=item:kinetic-dash:
``attr:
impact closed=#true {
  all {
    before win=0.5018 pick=0.1605 matches=473316 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.5074 pick=0.1875 matches=726175 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.5046 pick=0.2012 matches=111377 days=13 total=553632 covered=13 coverage="complete"
    after win=0.5136 pick=0.2292 matches=155521 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/item/kinetic-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp]] Kinetic Dash patch history))
## [[/item/kinetic-dash]]((Kinetic Dash))
- Ammo count reduced from +8 to +6
=

=item:toxic-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.5014 pick=0.1603 matches=472861 days=13 total=2948940 covered=13 coverage="complete"
    after win=0.4954 pick=0.1521 matches=589105 days=14 total=3873084 covered=14 coverage="complete"
  }
  high {
    before win=0.502 pick=0.1754 matches=97132 days=13 total=553632 covered=13 coverage="complete"
    after win=0.4998 pick=0.1563 matches=106020 days=14 total=678516 covered=14 coverage="complete"
  }
}
``
[[/item/toxic-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp]] Toxic Bullets patch history))
## [[/item/toxic-bullets]]((Toxic Bullets))
- Bleed damage reduced from 2.2% to 2%
- Buildup is 10% harder
=