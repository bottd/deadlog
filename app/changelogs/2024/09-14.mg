``attr:
title "09-14-2024 Update"
thread_id "29586"
published "2024-09-14T21:05:26-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Bebop Hyper Beam cooldown increased from 117 to 130 Hyper Beam T1 reduced from -38s to -30s Hyper Beam end radius reduced from 5m to 4m Hyper Beam slow reduced from 40% to 30% Hyper Beam DPS reduced from 220 to 205 Hyper Beam DPS spirit scaling reduced from 3 to 2.7 McGinnis Medicinal Specter radius spirit power reduced from 0.07 to 0.05 Ammo Scavenger Buff duration reduced from 40s to 35s"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-09-13" to="2024-09-15"
  after from="2024-09-16" to="2024-09-17"
}
``


# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Bebop", "McGinnis"]} />
``

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.5144 pick=0.7849 matches=1215 days=2 total=18576 covered=2 coverage="complete"
    after win=#null pick=#null matches=534 days=1 total=8412 covered=1 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
==ability:hyper-beam:
[[/ability/hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam change history))
### [[/ability/hyper-beam]]((Hyper Beam))
- Hyper Beam cooldown increased from 117 to 130
- Hyper Beam T1 reduced from -38s to -30s
- Hyper Beam end radius reduced from 5m to 4m
- Hyper Beam slow reduced from 40% to 30%
==
==ability:hyper-beam-dps:
[[/ability/hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam DPS change history))
### [[/ability/hyper-beam]]((Hyper Beam DPS))
- Hyper Beam DPS reduced from 220 to 205
- Hyper Beam DPS spirit scaling reduced from 3 to 2.7
==
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=901 days=2 total=18576 covered=2 coverage="complete"
    after win=#null pick=#null matches=389 days=1 total=8412 covered=1 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
==ability:medicinal-specter:
[[/ability/medicinal-specter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp]] Medicinal Specter change history))
### [[/ability/medicinal-specter]]((Medicinal Specter))
- Medicinal Specter radius spirit power reduced from 0.07 to 0.05
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Ammo Scavenger"]} />
``

=item:ammo-scavenger:
[[/item/ammo-scavenger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]] Ammo Scavenger patch history))
## [[/item/ammo-scavenger]]((Ammo Scavenger))
- Buff duration reduced from 40s to 35s
=