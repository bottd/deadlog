``attr:
title "11-01-2024 Update"
thread_id "43705"
published "2024-11-01T16:12:33-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Improved Burst: Damage threshold requirement reduced from 200 to 175 Grey Talon Base bullet damage reduced from 30 to 27 Movement speed scaling from Spirit Power reduced from 0.032 to 0.025 Mirage Fire Scarabs cooldown increased from 32s to 40s HP per boon reduced from 41 to 37 Bebop Sticky Bomb now gains 1% stack on attach (still gains 5% on target death) Paradox Time Wall T3 silence duration reduced from 3s to 2.5s Metal Skin Cooldown increased from 21s to 28s Siphon Bullets Max HP Steal is now affected by falloff"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-10-30" to="2024-11-01"
  after from="2024-11-02" to="2024-11-07"
}
``

# General Changes

- Improved Burst: Damage threshold requirement reduced from 200 to 175

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Bebop", "Grey Talon", "Mirage", "Paradox"]} />
``

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.4797 pick=0.5981 matches=118648 days=2 total=2380608 covered=2 coverage="complete"
    after win=0.4992 pick=0.673 matches=337044 days=5 total=6009612 covered=5 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
==ability:sticky-bomb:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/ability/sticky-bomb]]((Sticky Bomb))
- Sticky Bomb now gains 1% stack on attach (still gains 5% on target death)
==
=

=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.495 pick=0.708 matches=140458 days=2 total=2380608 covered=2 coverage="complete"
    after win=0.4766 pick=0.6763 matches=338669 days=5 total=6009612 covered=5 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
- Base bullet damage reduced from 30 to 27
- Movement speed scaling from Spirit Power reduced from 0.032 to 0.025
=

=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.5113 pick=0.4995 matches=99099 days=2 total=2380608 covered=2 coverage="complete"
    after win=0.5009 pick=0.4808 matches=240781 days=5 total=6009612 covered=5 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))
==ability:fire-scarabs:
[[/ability/fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/ability/fire-scarabs]]((Fire Scarabs))
- Fire Scarabs cooldown increased from 32s to 40s
==
- HP per boon reduced from 41 to 37
=

=hero:paradox:
``attr:
impact closed=#true {
  all {
    before win=0.4773 pick=0.498 matches=98796 days=2 total=2380608 covered=2 coverage="complete"
    after win=0.4824 pick=0.4902 matches=245481 days=5 total=6009612 covered=5 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))
==ability:time-wall:
[[/ability/time-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp]] Time Wall change history))
### [[/ability/time-wall]]((Time Wall))
- Time Wall T3 silence duration reduced from 3s to 2.5s
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Metal Skin", "Siphon Bullets"]} />
``

=item:metal-skin:
``attr:
impact closed=#true {
  all {
    before win=0.4289 pick=0.0518 matches=123433 days=2 total=2380608 covered=2 coverage="complete"
    after win=0.4263 pick=0.0556 matches=334428 days=5 total=6009612 covered=5 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/metal-skin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp]] Metal Skin patch history))
## [[/item/metal-skin]]((Metal Skin))
- Cooldown increased from 21s to 28s
=

=item:siphon-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.5515 pick=0.0318 matches=75642 days=2 total=2380608 covered=2 coverage="complete"
    after win=0.535 pick=0.0344 matches=206682 days=5 total=6009612 covered=5 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/siphon-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]] Siphon Bullets patch history))
## [[/item/siphon-bullets]]((Siphon Bullets))
- Max HP Steal is now affected by falloff
=