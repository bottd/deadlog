``attr:
title "12-21-2024 Update"
thread_id "52206"
published "2024-12-21T01:54:51-0800"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Fixed some cases where slows could cause your speed to fall below the 2 m/s minimum Fixed slow percentage calculations being based off of assuming min speed is 0 rather than 2 (in effect this reduces how strong slows are) T4 items cost reduced from 6.2k to 6k Shield duration to not take damage before regenerating increased from 18s to 30s Fixed Ethereal Shift not canceling abilities like Flight Fixed various bugs with Arcane Surge Tick gold increased from 2/1% to 2.5/1.5% Spellslinger Headshots: Cooldown is now on a per target basis rather than on the item itself (this is a buff/flexibility improvement) Spellslinger Headshots: Spirit Amp per headshot increased from 3% to 4% Spellslinger Headshots: Fixed the base Spirit Amp requiring a headshot (this fix was released recently) Infernus Flame Dash T3 changed Charge Time increased from 15s to 18s Mirage Fire Scarabs T2 reduced from -10% Bullet Resist to -8% Vindicta Assassinate base damage reduced from 120 to 100 Assassinate bonus damage reduced from 120 to 100 Warden Bullet damage growth reduced from 0.94 to 0.9 Last Stand now does 40% less damage to objectives (similar to various other abilities) Yamato Shadow Transformation Bullet and Spirit Resist reduced from 45% to 40% Shadow Transformation T3 increased from 15% to 20% Resist Restorative Shot Cooldown increased from 6s to 7s Knockdown Stun duration reduced form 0.75s to 0.5s for ground targets (airborne values adjusted to be similar to before) Veil Walker Now a T4 item Shields increased from 250 to 300 Invisibility and speed duration increased from 5s to 7s Initial fade out time reduced from 1s to the previous 0.25s value Alchemical Fire Base DPS reduced from 55 to 50"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-12-18" to="2024-12-21"
  after from="2024-12-22" to="2024-12-31"
}
``

# General Changes

- Fixed some cases where slows could cause your speed to fall below the 2 m/s minimum
- Fixed slow percentage calculations being based off of assuming min speed is 0 rather than 2 (in effect this reduces how strong slows are)
- T4 items cost reduced from 6.2k to 6k
- Shield duration to not take damage before regenerating increased from 18s to 30s
- Fixed Ethereal Shift not canceling abilities like Flight
- Fixed various bugs with Arcane Surge
- Tick gold increased from 2/1% to 2.5/1.5%
- Spellslinger Headshots: Cooldown is now on a per target basis rather than on the item itself (this is a buff/flexibility improvement)
- Spellslinger Headshots: Spirit Amp per headshot increased from 3% to 4%
- Spellslinger Headshots: Fixed the base Spirit Amp requiring a headshot (this fix was released recently)

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Infernus", "Mirage", "Vindicta", "Warden", "Yamato"]} />
``

=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=0.5095 pick=0.7889 matches=67701 days=3 total=1029756 covered=3 coverage="complete"
    after win=0.5078 pick=0.7706 matches=200601 days=9 total=3123960 covered=9 coverage="complete"
  }
  high {
    before win=0.5203 pick=0.7949 matches=1353 days=3 total=20424 covered=3 coverage="complete"
    after win=0.4838 pick=0.7344 matches=4454 days=9 total=72780 covered=9 coverage="complete"
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
==ability:flame-dash:
[[/ability/flame-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash change history))
### [[/ability/flame-dash]]((Flame Dash))
- Flame Dash T3 changed Charge Time increased from 15s to 18s
==
=

=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.4995 pick=0.3637 matches=31213 days=3 total=1029756 covered=3 coverage="complete"
    after win=0.502 pick=0.3842 matches=100028 days=9 total=3123960 covered=9 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=899 days=3 total=20424 covered=3 coverage="complete"
    after win=0.5255 pick=0.5927 matches=3595 days=9 total=72780 covered=9 coverage="complete"
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))
==ability:fire-scarabs:
[[/ability/fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/ability/fire-scarabs]]((Fire Scarabs))
- Fire Scarabs T2 reduced from -10% Bullet Resist to -8%
==
=

=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.5301 pick=0.7101 matches=60938 days=3 total=1029756 covered=3 coverage="complete"
    after win=0.5207 pick=0.7008 matches=182449 days=9 total=3123960 covered=9 coverage="complete"
  }
  high {
    before win=0.5492 pick=0.7585 matches=1291 days=3 total=20424 covered=3 coverage="complete"
    after win=0.5409 pick=0.7563 matches=4587 days=9 total=72780 covered=9 coverage="complete"
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
==ability:assassinate:
[[/ability/assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/ability/assassinate]]((Assassinate))
- Assassinate base damage reduced from 120 to 100
- Assassinate bonus damage reduced from 120 to 100
==
=

=hero:warden:
``attr:
impact closed=#true {
  all {
    before win=0.5307 pick=0.74 matches=63504 days=3 total=1029756 covered=3 coverage="complete"
    after win=0.5267 pick=0.6972 matches=181505 days=9 total=3123960 covered=9 coverage="complete"
  }
  high {
    before win=0.52 pick=0.7039 matches=1198 days=3 total=20424 covered=3 coverage="complete"
    after win=0.5186 pick=0.6613 matches=4011 days=9 total=72780 covered=9 coverage="complete"
  }
}
``
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))
- Bullet damage growth reduced from 0.94 to 0.9
==ability:last-stand:
[[/ability/last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/ability/last-stand]]((Last Stand))
- Last Stand now does 40% less damage to objectives (similar to various other abilities)
==
=

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.5249 pick=0.4951 matches=42488 days=3 total=1029756 covered=3 coverage="complete"
    after win=0.5328 pick=0.581 matches=151247 days=9 total=3123960 covered=9 coverage="complete"
  }
  high {
    before win=0.5325 pick=0.6322 matches=1076 days=3 total=20424 covered=3 coverage="complete"
    after win=0.5484 pick=0.8018 matches=4863 days=9 total=72780 covered=9 coverage="complete"
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))
- Shadow Transformation Bullet and Spirit Resist reduced from 45% to 40%
- Shadow Transformation T3 increased from 15% to 20% Resist
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Alchemical Fire", "Knockdown", "Restorative Shot", "Veil Walker"]} />
``

=item:alchemical-fire:
``attr:
impact closed=#true {
  all {
    before win=0.5293 pick=0.0421 matches=43359 days=3 total=1029756 covered=3 coverage="complete"
    after win=0.5225 pick=0.0403 matches=126026 days=9 total=3123960 covered=9 coverage="complete"
  }
  high {
    before win=0.556 pick=0.09 matches=1838 days=3 total=20424 covered=3 coverage="complete"
    after win=0.5412 pick=0.0945 matches=6881 days=9 total=72780 covered=9 coverage="complete"
  }
}
``
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))
- Base DPS reduced from 55 to 50
=

=item:knockdown:
``attr:
impact closed=#true {
  all {
    before win=0.4718 pick=0.0528 matches=54342 days=3 total=1029756 covered=3 coverage="complete"
    after win=0.4671 pick=0.0473 matches=147652 days=9 total=3123960 covered=9 coverage="complete"
  }
  high {
    before win=0.5133 pick=0.0754 matches=1539 days=3 total=20424 covered=3 coverage="complete"
    after win=0.4691 pick=0.0558 matches=4063 days=9 total=72780 covered=9 coverage="complete"
  }
}
``
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))
- Stun duration reduced form 0.75s to 0.5s for ground targets (airborne values adjusted to be similar to before)
=

=item:restorative-shot:
``attr:
impact closed=#true {
  all {
    before win=0.4946 pick=0.1895 matches=195144 days=3 total=1029756 covered=3 coverage="complete"
    after win=0.4965 pick=0.2064 matches=644634 days=9 total=3123960 covered=9 coverage="complete"
  }
  high {
    before win=0.5028 pick=0.2653 matches=5418 days=3 total=20424 covered=3 coverage="complete"
    after win=0.5046 pick=0.3061 matches=22277 days=9 total=72780 covered=9 coverage="complete"
  }
}
``
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))
- Cooldown increased from 6s to 7s
=

=item:veil-walker:
``attr:
impact closed=#true {
  all {
    before win=0.5352 pick=0.0629 matches=64792 days=3 total=1029756 covered=3 coverage="complete"
    after win=0.5372 pick=0.0146 matches=45623 days=9 total=3123960 covered=9 coverage="complete"
  }
  high {
    before win=0.5542 pick=0.1373 matches=2804 days=3 total=20424 covered=3 coverage="complete"
    after win=#null pick=#null matches=904 days=9 total=72780 covered=9 coverage="complete"
  }
}
``
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))
- Now a T4 item
- Shields increased from 250 to 300
- Invisibility and speed duration increased from 5s to 7s
- Initial fade out time reduced from 1s to the previous 0.25s value
=