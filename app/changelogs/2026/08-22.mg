``attr:
title "Minor Update - 08-22-2026"
alias "2026/minor-08-22"
thread_id "162571"
steam_gid "1841579228672283"
published "2026-08-22T21:40:46.000Z"
author "IceFrog"
author_image "/assets/authors/icefrog.webp"
major_update #false
content_text "Celeste Dazzling Trick cooldown increased from 32s to 34s Dazzling Trick T2 barrier rescaled from \"+80 and +0.7 scaling\" to \"+70 and +0.76\" Dazzling Trick T3 cooldown increased from -18s to -20s Dazzling Trick T3 reduced from +1.5s Silence to +1.25s Radiant Daggers Spirit Amp per stack reduced from +8% to +7% Radiant Daggers T3 Spirit Amp per stack increased from +3% to +4% Shining Wonder bounce range reduced from 17.5m to 16.5m Shining Wonder damage reduced from 165 to 140 Shining Wonder spirit scaling reduced from 0.9 to 0.6 Shining Wonder T2 now also increases spirit scaling by +0.45 Radiant Regeneration Heal on cast reduced from 70 to 65 Restorative Locket Spirit Resistance reduced from 10% to 8%"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2026-08-13" to="2026-08-22"
  after from="2026-08-23" to="2026-09-06"
}
``

# General Changes

[[!:https://clan.akamai.steamstatic.com/images/45164767/568ff640318c8a81e2b5b4a22bf29e100ee144d9.png]]((store.steampowered))

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Celeste"]} />
``

=hero:celeste:
``attr:
impact closed=#true {
  all {
    before win=0.5221 pick=0.4431 matches=190026 days=9 total=5146105 covered=9 coverage="complete"
    after win=0.52 pick=0.3912 matches=259266 days=14 total=7953871 covered=14 coverage="complete"
  }
  high {
    before win=0.5534 pick=0.3842 matches=3677 days=9 total=114851 covered=9 coverage="complete"
    after win=0.5503 pick=0.2379 matches=5381 days=14 total=271414 covered=14 coverage="complete"
  }
}
``
[[/hero/celeste]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp]] Celeste patch history))
## [[/hero/celeste]]((Celeste))
==ability:dazzling-trick:
[[/ability/dazzling-trick]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp]] Dazzling Trick change history))
### [[/ability/dazzling-trick]]((Dazzling Trick))
- Dazzling Trick cooldown increased from 32s to 34s
- Dazzling Trick T2 barrier rescaled from "+80 and +0.7 scaling" to "+70 and +0.76"
- Dazzling Trick T3 cooldown increased from -18s to -20s
- Dazzling Trick T3 reduced from +1.5s Silence to +1.25s
==
==ability:radiant-daggers:
[[/ability/radiant-daggers]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp]] Radiant Daggers change history))
### [[/ability/radiant-daggers]]((Radiant Daggers))
- Radiant Daggers Spirit Amp per stack reduced from +8% to +7%
- Radiant Daggers T3 Spirit Amp per stack increased from +3% to +4%
==
==ability:shining-wonder:
[[/ability/shining-wonder]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp]] Shining Wonder change history))
### [[/ability/shining-wonder]]((Shining Wonder))
- Shining Wonder bounce range reduced from 17.5m to 16.5m
- Shining Wonder damage reduced from 165 to 140
- Shining Wonder spirit scaling reduced from 0.9 to 0.6
- Shining Wonder T2 now also increases spirit scaling by +0.45
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Radiant Regeneration", "Restorative Locket"]} />
``

=item:radiant-regeneration:
``attr:
impact closed=#true {
  all {
    before win=0.5105 pick=0.1203 matches=618968 days=9 total=5146105 covered=9 coverage="complete"
    after win=0.506 pick=0.1203 matches=956842 days=14 total=7953871 covered=14 coverage="complete"
  }
  high {
    before win=0.5111 pick=0.0982 matches=11281 days=9 total=114851 covered=9 coverage="complete"
    after win=0.5053 pick=0.0905 matches=24573 days=14 total=271414 covered=14 coverage="complete"
  }
}
``
[[/item/radiant-regeneration]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp]] Radiant Regeneration patch history))
## [[/item/radiant-regeneration]]((Radiant Regeneration))
- Heal on cast reduced from 70 to 65
=

=item:restorative-locket:
``attr:
impact closed=#true {
  all {
    before win=0.5037 pick=0.0958 matches=493096 days=9 total=5146105 covered=9 coverage="complete"
    after win=0.5026 pick=0.0959 matches=763157 days=14 total=7953871 covered=14 coverage="complete"
  }
  high {
    before win=0.5159 pick=0.1825 matches=20956 days=9 total=114851 covered=9 coverage="complete"
    after win=0.5094 pick=0.1614 matches=43799 days=14 total=271414 covered=14 coverage="complete"
  }
}
``
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))
- Spirit Resistance reduced from 10% to 8%
=