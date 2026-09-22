``attr:
title "Minor Update - 07-01-2026"
steam_gid "1836506165566600"
published "2026-07-01T22:54:59.000Z"
author "IceFrog"
author_image "/assets/authors/icefrog.webp"
major_update #false
content_text "Shiv Alt Fire ammo cost reduced from 5 to 4 Weapon now has fixed pellet spread Slice and Dice is now back to doing spirit damage and reducing Spirit Resistance from enemies Slice and Dice damage increased from 60 to 75 Killing Blow T3 reduced from +10% Enemy Health Threshold to +8%"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from=#null to=#null
  after from="2026-07-02" to="2026-07-09"
}
``


# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Shiv"]} />
``

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="complete"
    after win=0.4978 pick=0.538 matches=153891 days=7 total=3432253 covered=7 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="complete"
    after win=0.4959 pick=0.6637 matches=33505 days=7 total=605746 covered=7 coverage="complete"
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
- Alt Fire ammo cost reduced from 5 to 4
- Weapon now has fixed pellet spread
==ability:slice-and-dice:
[[/ability/slice-and-dice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp]] Slice and Dice change history))
### [[/ability/slice-and-dice]]((Slice and Dice))
- Slice and Dice is now back to doing spirit damage and reducing Spirit Resistance from enemies
- Slice and Dice damage increased from 60 to 75
==
==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))
- Killing Blow T3 reduced from +10% Enemy Health Threshold to +8%
==
=