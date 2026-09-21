``attr:
title "01-19-2025 Update"
thread_id "53961"
published "2025-01-19T16:02:37-0800"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "The Magnificent Sinclair: Rabbit Hex movespeed increased from 25% to 35% The Magnificent Sinclair: Rabbit Hex can no longer be applied to Unstoppable The Magnificent Sinclair: Rabbit Hex now triggers Reactive Barrier The Magnificent Sinclair: Fixed Debuff Reducer not working on Rabbit The Magnificent Sinclair: Teleporting now drops the Urn The Magnificent Sinclair: Vexing Bolt base damage reduced from 120 to 110 The Magnificent Sinclair: Spectral Assistant base cooldown increased from 30s to 40s The Magnificent Sinclair: Spectral Assistant base duration decreased from 8s to 6s All heroes base gun damage and growth reduced by 10% (numbers listed above are before this global reduction) Bebop Hook T1 reduced from 30% more weapon damage to 25% Exploding Uppercut T2 reduced from +60% weapon damage to +50% Sticky Bomb damage reduced from 120 to 110 Sticky Bomb T2 reduced from +80 Damage to +75 Calico Bullet Damage increased from 2 to 2.2 Leaping Slash Radius increased from 4m to 4.5m Leaping Slash T2 damage increased from +50 to +75 Ava now destroys breakables it runs through Ava T2 increased from 25% movespeed to 35% Holliday Bullet damage growth increased from 1.5 to 1.7 Powder Keg T2 reduced from 140 to 120 Crackshot now triggers on units. Uses half cooldown when triggered this way. Crackshot damage reduced from 75 to 60 Crackshot spirit scaling increased from 1 to 1.2 Crackshot T2 increased from 75 to 85 Crackshot T3 now also has -2s on creeps Fixed Crackshot applying Slowing Hex's anti-teleport debuff Spirit Lasso T2 duration increased from +0.5 to +0.75 Fixed height on damage from Bounce Pad sometimes causing it to not hurt heroes on your lasso Kelvin Health increased from 600 to 650 Mirage Fire Scarabs Max Health Steal reduced from 75 to 50 Fire Scarabs Max Health Steal spirit scaling increased from 0.9 to 1.4 Shiv Bullet Damage reduced from 5.7 to 5.5 Slice and Dice damage reduced from 110 to 100 Slice and Dice T2 reduced from +70 to +60 Slice and Dice spirit scaling increased from 1.3 to 1.55 Bloodletting deferred damage duration reduced from 13s to 12s Bloodletting cooldown increased from 50s to 60s Vindicta Movespeed reduced from 9 to 8 Bullet Velocity reduced from 810 to 740 Vyper Bullet Damage decreased from 9 to 7 Move Speed reduced from 7.3 to 7.0 Lethal Venom Max Damage reduced from 200 to 180 Slither T3 spirit and bullet resist while sliding reduced from +30% to +25% Wraith Card Trick spirit scaling reduced from 1.1 to 0.9 Card Trick cooldown increased from 0.65 to 0.75 Card Trick summon rate from non-heroes reduced from 0.35 to 0.25 Telekinesis silence and disarm duration increased from 2.5s to 3s Telekinesis cast delay reduced from 0.4s to 0.3s Telekinesis up/down motion now lasts 0.25s longer and moves a little bit higher Yamato Bullet damage growth reduced from 0.27 to 0.24 Extra Stamina Fire Rate reduced from 5% to 4% Alchemical Fire Reduced from -40% Effectiveness vs non-heroes to -50% Weapon Damage in radius reduced from +50% to +40% Hunter's Aura Bullet Resist Reduction reduced from -9% to -8% Fire Rate Slow increased from -9% to -10% Sharpshooter Weapon Damage reduced from 30% to 20% Movespeed penalty increased from -0.5 to -1"
``

# General Changes

- The Magnificent Sinclair: Rabbit Hex movespeed increased from 25% to 35%
- The Magnificent Sinclair: Rabbit Hex can no longer be applied to Unstoppable
- The Magnificent Sinclair: Rabbit Hex now triggers Reactive Barrier
- The Magnificent Sinclair: Fixed Debuff Reducer not working on Rabbit
- The Magnificent Sinclair: Teleporting now drops the Urn
- The Magnificent Sinclair: Vexing Bolt base damage reduced from 120 to 110
- The Magnificent Sinclair: Spectral Assistant base cooldown increased from 30s to 40s
- The Magnificent Sinclair: Spectral Assistant base duration decreased from 8s to 6s
- All heroes base gun damage and growth reduced by 10% (numbers listed above are before this global reduction)

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Bebop", "Calico", "Holliday", "Kelvin", "Mirage", "Shiv", "Vindicta", "Vyper", "Wraith", "Yamato"]} />
``

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.5368 pick=0.6416 matches=41831 days=2
    after win=0.5214 pick=0.7213 matches=125834 days=7
  }
  high {
    before win=0.5085 pick=0.7479 matches=1062 days=2
    after win=0.4951 pick=0.7309 matches=4324 days=7
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
==ability:hook:
[[/ability/grapple-arm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp]] Hook change history))
### [[/ability/grapple-arm]]((Hook))
- Hook T1 reduced from 30% more weapon damage to 25%
==
==ability:exploding-uppercut:
[[/ability/exploding-uppercut]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp]] Exploding Uppercut change history))
### [[/ability/exploding-uppercut]]((Exploding Uppercut))
- Exploding Uppercut T2 reduced from +60% weapon damage to +50%
==
==ability:sticky-bomb:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/ability/sticky-bomb]]((Sticky Bomb))
- Sticky Bomb damage reduced from 120 to 110
- Sticky Bomb T2 reduced from +80 Damage to +75
==
=

=hero:calico:
``attr:
impact closed=#true {
  all {
    before win=0.491 pick=0.9635 matches=62818 days=2
    after win=0.5481 pick=0.9472 matches=165251 days=7
  }
  high {
    before win=0.5089 pick=0.988 matches=1403 days=2
    after win=0.558 pick=0.9694 matches=5735 days=7
  }
}
``
[[/hero/calico]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico patch history))
## [[/hero/calico]]((Calico))
- Bullet Damage increased from 2 to 2.2
==ability:leaping-slash-radius:
[[/ability/leaping-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp]] Leaping Slash Radius change history))
### [[/ability/leaping-slash]]((Leaping Slash Radius))
- Leaping Slash Radius increased from 4m to 4.5m
==
==ability:leaping-slash:
[[/ability/leaping-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp]] Leaping Slash change history))
### [[/ability/leaping-slash]]((Leaping Slash))
- Leaping Slash T2 damage increased from +50 to +75
==
==ability:ava:
[[/ability/ava]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp]] Ava change history))
### [[/ability/ava]]((Ava))
- Ava now destroys breakables it runs through
- Ava T2 increased from 25% movespeed to 35%
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.4237 pick=0.9728 matches=63427 days=2
    after win=0.4437 pick=0.7991 matches=139420 days=7
  }
  high {
    before win=0.4221 pick=0.9859 matches=1400 days=2
    after win=0.4885 pick=0.7972 matches=4716 days=7
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
- Bullet damage growth increased from 1.5 to 1.7
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg T2 reduced from 140 to 120
==
==ability:crackshot:
[[/ability/crackshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp]] Crackshot change history))
### [[/ability/crackshot]]((Crackshot))
- Crackshot now triggers on units. Uses half cooldown when triggered this way.
- Crackshot damage reduced from 75 to 60
- Crackshot spirit scaling increased from 1 to 1.2
- Crackshot T2 increased from 75 to 85
- Crackshot T3 now also has -2s on creeps
- Fixed Crackshot applying Slowing Hex's anti-teleport debuff
==
==ability:spirit-lasso:
[[/ability/spirit-lasso]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp]] Spirit Lasso change history))
### [[/ability/spirit-lasso]]((Spirit Lasso))
- Spirit Lasso T2 duration increased from +0.5 to +0.75
==
==ability:bounce-pad:
[[/ability/bounce-pad]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad change history))
### [[/ability/bounce-pad]]((Bounce Pad))
- Fixed height on damage from Bounce Pad sometimes causing it to not hurt heroes on your lasso
==
=

=hero:kelvin:
``attr:
impact closed=#true {
  all {
    before win=0.458 pick=0.1949 matches=12705 days=2
    after win=0.4671 pick=0.2225 matches=38823 days=7
  }
  high {
    before win=#null pick=#null matches=223 days=2
    after win=0.4966 pick=0.1978 matches=1170 days=7
  }
}
``
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))
- Health increased from 600 to 650
=

=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.5088 pick=0.239 matches=15586 days=2
    after win=0.4971 pick=0.2452 matches=42773 days=7
  }
  high {
    before win=#null pick=#null matches=489 days=2
    after win=0.5035 pick=0.3595 matches=2127 days=7
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))
==ability:fire-scarabs:
[[/ability/fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/ability/fire-scarabs]]((Fire Scarabs))
- Fire Scarabs Max Health Steal reduced from 75 to 50
- Fire Scarabs Max Health Steal spirit scaling increased from 0.9 to 1.4
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4844 pick=0.3946 matches=25729 days=2
    after win=0.4559 pick=0.4362 matches=76109 days=7
  }
  high {
    before win=#null pick=#null matches=625 days=2
    after win=0.4408 pick=0.4912 matches=2906 days=7
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
- Bullet Damage reduced from 5.7 to 5.5
==ability:slice-and-dice:
[[/ability/slice-and-dice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp]] Slice and Dice change history))
### [[/ability/slice-and-dice]]((Slice and Dice))
- Slice and Dice damage reduced from 110 to 100
- Slice and Dice T2 reduced from +70 to +60
- Slice and Dice spirit scaling increased from 1.3 to 1.55
==
==ability:bloodletting:
[[/ability/bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting change history))
### [[/ability/bloodletting]]((Bloodletting))
- Bloodletting deferred damage duration reduced from 13s to 12s
- Bloodletting cooldown increased from 50s to 60s
==
=

=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.5216 pick=0.4514 matches=29429 days=2
    after win=0.4959 pick=0.4648 matches=81096 days=7
  }
  high {
    before win=#null pick=#null matches=770 days=2
    after win=0.492 pick=0.5524 matches=3268 days=7
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
- Movespeed reduced from 9 to 8
- Bullet Velocity reduced from 810 to 740
=

=hero:vyper:
``attr:
impact closed=#true {
  all {
    before win=0.5554 pick=0.9939 matches=64804 days=2
    after win=0.4585 pick=0.5726 matches=99899 days=7
  }
  high {
    before win=0.5727 pick=0.9923 matches=1409 days=2
    after win=0.4505 pick=0.2747 matches=1625 days=7
  }
}
``
[[/hero/vyper]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp]] Vyper patch history))
## [[/hero/vyper]]((Vyper))
- Bullet Damage decreased from 9 to 7
- Move Speed reduced from 7.3 to 7.0
==ability:lethal-venom-max-damage:
[[/ability/lethal-venom]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp]] Lethal Venom Max Damage change history))
### [[/ability/lethal-venom]]((Lethal Venom Max Damage))
- Lethal Venom Max Damage reduced from 200 to 180
==
==ability:slither:
[[/ability/slither]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp]] Slither change history))
### [[/ability/slither]]((Slither))
- Slither T3 spirit and bullet resist while sliding reduced from +30% to +25%
==
=

=hero:wraith:
``attr:
impact closed=#true {
  all {
    before win=0.4978 pick=0.3898 matches=25414 days=2
    after win=0.5065 pick=0.4213 matches=73503 days=7
  }
  high {
    before win=#null pick=#null matches=527 days=2
    after win=0.5212 pick=0.514 matches=3041 days=7
  }
}
``
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))
==ability:card-trick:
[[/ability/card-trick]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp]] Card Trick change history))
### [[/ability/card-trick]]((Card Trick))
- Card Trick spirit scaling reduced from 1.1 to 0.9
- Card Trick cooldown increased from 0.65 to 0.75
- Card Trick summon rate from non-heroes reduced from 0.35 to 0.25
==
==ability:telekinesis:
[[/ability/telekinesis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp]] Telekinesis change history))
### [[/ability/telekinesis]]((Telekinesis))
- Telekinesis silence and disarm duration increased from 2.5s to 3s
- Telekinesis cast delay reduced from 0.4s to 0.3s
- Telekinesis up/down motion now lasts 0.25s longer and moves a little bit higher
==
=

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.4889 pick=0.3117 matches=20324 days=2
    after win=0.498 pick=0.3359 matches=58594 days=7
  }
  high {
    before win=#null pick=#null matches=486 days=2
    after win=0.5129 pick=0.465 matches=2751 days=7
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
- Bullet damage growth reduced from 0.27 to 0.24
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Alchemical Fire", "Extra Stamina", "Hunter's Aura", "Sharpshooter"]} />
``

=item:alchemical-fire:
``attr:
impact closed=#true {
  all {
    before win=0.5476 pick=0.0422 matches=32994 days=2
    after win=0.5338 pick=0.0576 matches=120509 days=7
  }
  high {
    before win=0.552 pick=0.0841 matches=1433 days=2
    after win=0.5241 pick=0.1086 matches=7712 days=7
  }
}
``
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))
- Reduced from -40% Effectiveness vs non-heroes to -50%
- Weapon Damage in radius reduced from +50% to +40%
=

=item:extra-stamina:
``attr:
impact closed=#true {
  all {
    before win=0.5039 pick=0.6201 matches=485185 days=2
    after win=0.5017 pick=0.6286 matches=1316097 days=7
  }
  high {
    before win=0.5034 pick=0.7012 matches=11948 days=2
    after win=0.5008 pick=0.6997 matches=49671 days=7
  }
}
``
[[/item/extra-stamina]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp]] Extra Stamina patch history))
## [[/item/extra-stamina]]((Extra Stamina))
- Fire Rate reduced from 5% to 4%
=

=item:hunter-s-aura:
``attr:
impact closed=#true {
  all {
    before win=0.5599 pick=0.0879 matches=68748 days=2
    after win=0.549 pick=0.0829 matches=173600 days=7
  }
  high {
    before win=0.5511 pick=0.1188 matches=2025 days=2
    after win=0.5367 pick=0.111 matches=7880 days=7
  }
}
``
[[/item/hunters-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp]] Hunter's Aura patch history))
## [[/item/hunters-aura]]((Hunter's Aura))
- Bullet Resist Reduction reduced from -9% to -8%
- Fire Rate Slow increased from -9% to -10%
=

=item:sharpshooter:
``attr:
impact closed=#true {
  all {
    before win=0.4895 pick=0.0913 matches=71470 days=2
    after win=0.4845 pick=0.0736 matches=154129 days=7
  }
  high {
    before win=0.5024 pick=0.0993 matches=1692 days=2
    after win=0.5005 pick=0.0828 matches=5878 days=7
  }
}
``
[[/item/sharpshooter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp]] Sharpshooter patch history))
## [[/item/sharpshooter]]((Sharpshooter))
- Weapon Damage reduced from 30% to 20%
- Movespeed penalty increased from -0.5 to -1
=