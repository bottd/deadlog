``attr:
title "01-12-2025 Update"
thread_id "53389"
published "2025-01-12T18:51:01-0800"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Unstoppable state no longer blocks anti-heal effects Yamato Bullet damage growth reduced from 0.33 to 0.27 Shadow Transformation T1 reduced from +20% Fire Rate to +15% Alchemical Fire Effectiveness reduction (40%) vs buildings/midboss now affects the Weapon Damage bonus too (instead of just DPS) Berserker Weapon Damage per Stack reduced from 6% to 5% Bullet Resistance reduced from 9% to 8% Frenzy Weapon Damage per Stack reduced from 8% to 7% Bullet Resistance reduced from 10% to 8% Fire Rate reduced from 40% to 35% Low Health Bullet Resistance reduced from 55% to 50% Restorative Shot Cooldown increased from 7s to 9s"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2025-01-01" to="2025-01-13"
  after from="2025-01-14" to="2025-01-17"
}
``

# General Changes

- Unstoppable state no longer blocks anti-heal effects

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Yamato"]} />
``

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.5221 pick=0.6111 matches=205964 days=12 total=4044396 covered=12 coverage="complete"
    after win=0.487 pick=0.5186 matches=34779 days=3 total=804828 covered=3 coverage="complete"
  }
  high {
    before win=0.5236 pick=0.7335 matches=7817 days=12 total=127884 covered=12 coverage="complete"
    after win=0.4806 pick=0.5615 matches=1419 days=3 total=30324 covered=3 coverage="complete"
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
- Bullet damage growth reduced from 0.33 to 0.27
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))
- Shadow Transformation T1 reduced from +20% Fire Rate to +15%
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Alchemical Fire", "Berserker", "Frenzy", "Restorative Shot"]} />
``

=item:alchemical-fire:
``attr:
impact closed=#true {
  all {
    before win=0.5287 pick=0.0501 matches=202734 days=12 total=4044396 covered=12 coverage="complete"
    after win=0.5367 pick=0.062 matches=49912 days=3 total=804828 covered=3 coverage="complete"
  }
  high {
    before win=0.5469 pick=0.119 matches=15214 days=12 total=127884 covered=12 coverage="complete"
    after win=0.5402 pick=0.1284 matches=3895 days=3 total=30324 covered=3 coverage="complete"
  }
}
``
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))
- Effectiveness reduction (40%) vs buildings/midboss now affects the Weapon Damage bonus too (instead of just DPS)
=

=item:berserker:
``attr:
impact closed=#true {
  all {
    before win=0.5279 pick=0.1925 matches=778445 days=12 total=4044396 covered=12 coverage="complete"
    after win=0.5152 pick=0.1877 matches=151099 days=3 total=804828 covered=3 coverage="complete"
  }
  high {
    before win=0.5247 pick=0.2491 matches=31860 days=12 total=127884 covered=12 coverage="complete"
    after win=0.5164 pick=0.2232 matches=6768 days=3 total=30324 covered=3 coverage="complete"
  }
}
``
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))
- Weapon Damage per Stack reduced from 6% to 5%
- Bullet Resistance reduced from 9% to 8%
=

=item:frenzy:
``attr:
impact closed=#true {
  all {
    before win=0.581 pick=0.1018 matches=411610 days=12 total=4044396 covered=12 coverage="complete"
    after win=0.5643 pick=0.0974 matches=78353 days=3 total=804828 covered=3 coverage="complete"
  }
  high {
    before win=0.5753 pick=0.1175 matches=15020 days=12 total=127884 covered=12 coverage="complete"
    after win=0.5642 pick=0.091 matches=2758 days=3 total=30324 covered=3 coverage="complete"
  }
}
``
[[/item/frenzy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp]] Frenzy patch history))
## [[/item/frenzy]]((Frenzy))
- Weapon Damage per Stack reduced from 8% to 7%
- Bullet Resistance reduced from 10% to 8%
- Fire Rate reduced from 40% to 35%
- Low Health Bullet Resistance reduced from 55% to 50%
=

=item:restorative-shot:
``attr:
impact closed=#true {
  all {
    before win=0.4983 pick=0.2334 matches=944107 days=12 total=4044396 covered=12 coverage="complete"
    after win=0.4943 pick=0.2182 matches=175639 days=3 total=804828 covered=3 coverage="complete"
  }
  high {
    before win=0.5046 pick=0.3467 matches=44336 days=12 total=127884 covered=12 coverage="complete"
    after win=0.4953 pick=0.3043 matches=9229 days=3 total=30324 covered=3 coverage="complete"
  }
}
``
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))
- Cooldown increased from 7s to 9s
=