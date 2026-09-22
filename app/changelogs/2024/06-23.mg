``attr:
title "06-23-2024 Update"
thread_id "7705"
published "2024-06-23T16:23:36-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "There is no longer a reinforcement trooper wave after Guardians and Walkers die Yamato Shadow Transformation now causes you to be unable to die during the buff Spirit Strike Melee damage reduced from 20% to 15% Melee Charge No longer grants +15% Melee Damage Veil Walker Bullet Shield reduced from +200 to +150 Shield restore now takes 5s to fully regen Cooldown increased from 20s to 25s"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-06-21" to="2024-06-23"
  after from="2024-06-24" to="2024-06-27"
}
``

# General Changes

- There is no longer a reinforcement trooper wave after Guardians and Walkers die

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Yamato"]} />
``

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=21 days=2 total=648 covered=2 coverage="complete"
    after win=#null pick=#null matches=29 days=3 total=996 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))
- Shadow Transformation now causes you to be unable to die during the buff
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Melee Charge", "Spirit Strike", "Veil Walker"]} />
``

=item:melee-charge:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=64 days=2 total=648 covered=2 coverage="complete"
    after win=#null pick=#null matches=47 days=3 total=996 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/melee-charge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp]] Melee Charge patch history))
## [[/item/melee-charge]]((Melee Charge))
- No longer grants +15% Melee Damage
=

=item:spirit-strike:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=67 days=2 total=648 covered=2 coverage="complete"
    after win=#null pick=#null matches=72 days=3 total=996 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/spirit-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp]] Spirit Strike patch history))
## [[/item/spirit-strike]]((Spirit Strike))
- Melee damage reduced from 20% to 15%
=

=item:veil-walker:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=33 days=2 total=648 covered=2 coverage="complete"
    after win=#null pick=#null matches=54 days=3 total=996 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))
- Bullet Shield reduced from +200 to +150
- Shield restore now takes 5s to fully regen
- Cooldown increased from 20s to 25s
=