``attr:
title "05-11-2025 Update"
thread_id "64113"
published "2025-05-11T12:06:03-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Weapon tree investment bonus increased by 6-12% (from 6/8/12/18/26/36/52/68/78/88% to 7/9/13/20/29/40/58/72/83/93) Spirit Power scaling globally reduced by -7% Kelvin Beam: Arctic Beam DPS reduced from 60 to 50 Mystic Regen: Duration reduced from 6s to 5s Mystic Regen: Spirit Power scaling reduced from 0.06 to 0.05 Lady Geist Malice now costs 6% of your Current HP Malice damage reduced from 32 to 25 Malice damage spirit scaling reduced from 0.72 to 0.6 T2 Malice reduced from 40 to 30 Shiv Slice and Dice damage reduced from 100 to 80 Bullet damage growth reduced from 0.246 to 0.22 Vyper Lethal Venom T2 reduced from -60% Healing Reduction to -40% Slither T3 reduced from +25% Resist to +20% Pocket Affliction duration reduced from 14s to 12s Fleetfoot Cooldown reduced from 12s to 11s Split Shot Shot count increased from 4 to 5 Active Reload Cooldown reduced from 14s to 12s Headhunter Bonus Headshot damage reduced from 150 to 120 Spirit Rend Cooldown increased from 2s to 2.5s Cultist Sacrifice Health reduced from 350 to 300 Capacitor Cooldown increased from 30s to 40s Divine Barrier Cooldown increased from 36s to 45s Inhibitor Duration increased from 2.5s to 3s Silence Wave Cooldown increased from 24s to 28s Tankbuster Fixed working on mid boss and objectives Decay Spirit power scaling reduced from 0.007 to 0.005 Cooldown increased from 22s to 24s Cast range spirit scaling reduced from 0.16 to 0.14 Boundless Spirit Heal reduced from 100 to 75 Mercurial Magnum Fire Rate bonus reduced from +30% to +25% Spirit Power scaling reduced from 0.6 to 0.5 Spirit Burn Healing Reduction reduced from -80% to -70%"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2025-05-09" to="2025-05-11"
  after from="2025-05-12" to="2025-05-20"
}
``

# General Changes

- Weapon tree investment bonus increased by 6-12% (from 6/8/12/18/26/36/52/68/78/88% to 7/9/13/20/29/40/58/72/83/93)
- Spirit Power scaling globally reduced by -7%
- Kelvin Beam: Arctic Beam DPS reduced from 60 to 50
- Mystic Regen: Duration reduced from 6s to 5s
- Mystic Regen: Spirit Power scaling reduced from 0.06 to 0.05

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Lady Geist", "Pocket", "Shiv", "Vyper"]} />
``

=hero:lady-geist:
``attr:
impact closed=#true {
  all {
    before win=0.5582 pick=0.6043 matches=32520 days=2 total=645732 covered=2 coverage="complete"
    after win=0.5338 pick=0.6033 matches=123751 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.5398 pick=0.7039 matches=1745 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5136 pick=0.6283 matches=5162 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))
==ability:malice:
[[/ability/malice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp]] Malice change history))
### [[/ability/malice]]((Malice))
- Malice now costs 6% of your Current HP
- Malice damage reduced from 32 to 25
- Malice damage spirit scaling reduced from 0.72 to 0.6
- T2 Malice reduced from 40 to 30
==
=

=hero:pocket:
``attr:
impact closed=#true {
  all {
    before win=0.4668 pick=0.331 matches=17811 days=2 total=645732 covered=2 coverage="complete"
    after win=0.463 pick=0.2894 matches=59351 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.4763 pick=0.5014 matches=1243 days=2 total=29748 covered=2 coverage="complete"
    after win=0.4559 pick=0.3785 matches=3110 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))
==ability:affliction:
[[/ability/affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/ability/affliction]]((Affliction))
- Affliction duration reduced from 14s to 12s
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4751 pick=0.5827 matches=31358 days=2 total=645732 covered=2 coverage="complete"
    after win=0.4625 pick=0.6038 matches=123845 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.4773 pick=0.7184 matches=1781 days=2 total=29748 covered=2 coverage="complete"
    after win=0.4811 pick=0.7102 matches=5835 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
==ability:slice-and-dice:
[[/ability/slice-and-dice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp]] Slice and Dice change history))
### [[/ability/slice-and-dice]]((Slice and Dice))
- Slice and Dice damage reduced from 100 to 80
==
- Bullet damage growth reduced from 0.246 to 0.22
=

=hero:vyper:
``attr:
impact closed=#true {
  all {
    before win=0.5164 pick=0.2862 matches=15399 days=2 total=645732 covered=2 coverage="complete"
    after win=0.526 pick=0.3258 matches=66832 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=619 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5406 pick=0.3328 matches=2734 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/hero/vyper]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp]] Vyper patch history))
## [[/hero/vyper]]((Vyper))
==ability:lethal-venom:
[[/ability/lethal-venom]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp]] Lethal Venom change history))
### [[/ability/lethal-venom]]((Lethal Venom))
- Lethal Venom T2 reduced from -60% Healing Reduction to -40%
==
==ability:slither:
[[/ability/slither]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp]] Slither change history))
### [[/ability/slither]]((Slither))
- Slither T3 reduced from +25% Resist to +20%
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Active Reload", "Boundless Spirit", "Capacitor", "Cultist Sacrifice", "Decay", "Divine Barrier", "Fleetfoot", "Headhunter", "Inhibitor", "Mercurial Magnum", "Silence Wave", "Spirit Burn", "Spirit Rend", "Split Shot", "Tankbuster"]} />
``

=item:active-reload:
``attr:
impact closed=#true {
  all {
    before win=0.4556 pick=0.0272 matches=17591 days=2 total=645732 covered=2 coverage="complete"
    after win=0.4748 pick=0.0168 matches=41363 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=701 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5312 pick=0.0127 matches=1250 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/active-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp]] Active Reload patch history))
## [[/item/active-reload]]((Active Reload))
- Cooldown reduced from 14s to 12s
=

=item:boundless-spirit:
[[/item/boundless-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp]] Boundless Spirit patch history))
## [[/item/boundless-spirit]]((Boundless Spirit))
- Heal reduced from 100 to 75
=

=item:capacitor:
``attr:
impact closed=#true {
  all {
    before win=0.5132 pick=0.0459 matches=29653 days=2 total=645732 covered=2 coverage="complete"
    after win=0.5137 pick=0.0455 matches=111945 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.526 pick=0.0433 matches=1289 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5137 pick=0.0375 matches=3693 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/capacitor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp]] Capacitor patch history))
## [[/item/capacitor]]((Capacitor))
- Cooldown increased from 30s to 40s
=

=item:cultist-sacrifice:
``attr:
impact closed=#true {
  all {
    before win=0.5176 pick=0.0978 matches=63169 days=2 total=645732 covered=2 coverage="complete"
    after win=0.5185 pick=0.1008 matches=248140 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.5143 pick=0.1799 matches=5351 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5124 pick=0.1438 matches=14176 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/cultist-sacrifice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp]] Cultist Sacrifice patch history))
## [[/item/cultist-sacrifice]]((Cultist Sacrifice))
- Health reduced from 350 to 300
=

=item:decay:
``attr:
impact closed=#true {
  all {
    before win=0.4818 pick=0.0201 matches=12960 days=2 total=645732 covered=2 coverage="complete"
    after win=0.4807 pick=0.0439 matches=108033 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=937 days=2 total=29748 covered=2 coverage="complete"
    after win=0.493 pick=0.068 matches=6700 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))
- Spirit power scaling reduced from 0.007 to 0.005
- Cooldown increased from 22s to 24s
- Cast range spirit scaling reduced from 0.16 to 0.14
=

=item:divine-barrier:
``attr:
impact closed=#true {
  all {
    before win=0.5555 pick=0.0178 matches=11517 days=2 total=645732 covered=2 coverage="complete"
    after win=0.5581 pick=0.0163 matches=40211 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=997 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5794 pick=0.0213 matches=2097 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/divine-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp]] Divine Barrier patch history))
## [[/item/divine-barrier]]((Divine Barrier))
- Cooldown increased from 36s to 45s
=

=item:fleetfoot:
``attr:
impact closed=#true {
  all {
    before win=0.5252 pick=0.0685 matches=44224 days=2 total=645732 covered=2 coverage="complete"
    after win=0.5293 pick=0.0761 matches=187258 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.5086 pick=0.0623 matches=1854 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5333 pick=0.0815 matches=8035 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/fleetfoot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp]] Fleetfoot patch history))
## [[/item/fleetfoot]]((Fleetfoot))
- Cooldown reduced from 12s to 11s
=

=item:headhunter:
``attr:
impact closed=#true {
  all {
    before win=0.4769 pick=0.1037 matches=66943 days=2 total=645732 covered=2 coverage="complete"
    after win=0.4939 pick=0.1487 matches=366057 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.5114 pick=0.1177 matches=3502 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5025 pick=0.1859 matches=18330 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/headhunter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp]] Headhunter patch history))
## [[/item/headhunter]]((Headhunter))
- Bonus Headshot damage reduced from 150 to 120
=

=item:inhibitor:
``attr:
impact closed=#true {
  all {
    before win=0.5496 pick=0.0216 matches=13937 days=2 total=645732 covered=2 coverage="complete"
    after win=0.5738 pick=0.0188 matches=46237 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=602 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5761 pick=0.0182 matches=1793 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/inhibitor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.webp]] Inhibitor patch history))
## [[/item/inhibitor]]((Inhibitor))
- Duration increased from 2.5s to 3s
=

=item:mercurial-magnum:
``attr:
impact closed=#true {
  all {
    before win=0.5378 pick=0.16 matches=103318 days=2 total=645732 covered=2 coverage="complete"
    after win=0.5382 pick=0.1934 matches=476127 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.5498 pick=0.1628 matches=4842 days=2 total=29748 covered=2 coverage="complete"
    after win=0.544 pick=0.1835 matches=18093 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/mercurial-magnum]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp]] Mercurial Magnum patch history))
## [[/item/mercurial-magnum]]((Mercurial Magnum))
- Fire Rate bonus reduced from +30% to +25%
- Spirit Power scaling reduced from 0.6 to 0.5
=

=item:silence-wave:
``attr:
impact closed=#true {
  all {
    before win=0.485 pick=0.0386 matches=24898 days=2 total=645732 covered=2 coverage="complete"
    after win=0.491 pick=0.0395 matches=97249 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.4577 pick=0.0576 matches=1713 days=2 total=29748 covered=2 coverage="complete"
    after win=0.4851 pick=0.0523 matches=5158 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/silence-wave]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp]] Silence Wave patch history))
## [[/item/silence-wave]]((Silence Wave))
- Cooldown increased from 24s to 28s
=

=item:spirit-burn:
``attr:
impact closed=#true {
  all {
    before win=0.574 pick=0.1813 matches=117095 days=2 total=645732 covered=2 coverage="complete"
    after win=0.57 pick=0.2009 matches=494373 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.5605 pick=0.2121 matches=6309 days=2 total=29748 covered=2 coverage="complete"
    after win=0.5691 pick=0.177 matches=17447 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/spirit-burn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp]] Spirit Burn patch history))
## [[/item/spirit-burn]]((Spirit Burn))
- Healing Reduction reduced from -80% to -70%
=

=item:spirit-rend:
``attr:
impact closed=#true {
  all {
    before win=0.5083 pick=0.0981 matches=63370 days=2 total=645732 covered=2 coverage="complete"
    after win=0.5025 pick=0.0734 matches=180704 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.4897 pick=0.0654 matches=1946 days=2 total=29748 covered=2 coverage="complete"
    after win=0.4969 pick=0.0415 matches=4093 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/spirit-rend]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.webp]] Spirit Rend patch history))
## [[/item/spirit-rend]]((Spirit Rend))
- Cooldown increased from 2s to 2.5s
=

=item:split-shot:
``attr:
impact closed=#true {
  all {
    before win=0.4649 pick=0.0221 matches=14290 days=2 total=645732 covered=2 coverage="complete"
    after win=0.4741 pick=0.019 matches=46881 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=370 days=2 total=29748 covered=2 coverage="complete"
    after win=0.4921 pick=0.0115 matches=1136 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/split-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/split_shot.webp]] Split Shot patch history))
## [[/item/split-shot]]((Split Shot))
- Shot count increased from 4 to 5
=

=item:tankbuster:
``attr:
impact closed=#true {
  all {
    before win=0.5022 pick=0.2879 matches=185933 days=2 total=645732 covered=2 coverage="complete"
    after win=0.496 pick=0.3015 matches=742078 days=8 total=2461380 covered=8 coverage="complete"
  }
  high {
    before win=0.5032 pick=0.2923 matches=8696 days=2 total=29748 covered=2 coverage="complete"
    after win=0.4968 pick=0.2935 matches=28941 days=8 total=98592 covered=8 coverage="complete"
  }
}
``
[[/item/tankbuster]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp]] Tankbuster patch history))
## [[/item/tankbuster]]((Tankbuster))
- Fixed working on mid boss and objectives
=