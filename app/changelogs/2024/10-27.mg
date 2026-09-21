``attr:
title "10-27-2024 Update"
thread_id "42492"
published "2024-10-27T18:43:19-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Urn NW lead requirement increased from 8% to 10% Shiv Killing Blow cast range increased from 13m to 14m Killing Blow rage per weapon damage increased from 0.015 to 0.017 Killing Blow drain rate reduced from 0.3 to 0.25 Bebop Sticky Bomb stacks no longer decrease on death Sticky Bomb now gives stacks based on dying heroes hurt by Sticky Bomb damage with a 12 second buffer (previously anyone hit by the bomb would automatically grant stacks) Sticky Bomb damage per stack increased from 3% to 5% Sticky Bomb spirit power damage scaling increased from 0.9 to 1.2 Sticky Bomb T1 improved from -7.5s to -8s Sticky Bomb cooldown reduced from 19s to 18s Grey Talon Movespeed spirit scaling reduced from 0.04 to 0.032 Bullet damage spirit scaling reduced from 0.13 to 0.12 Kelvin Ice Path cooldown increased from 38s to 42s McGinnis Mini Turrets Spirit Resist reduced from 80% to 70% Spectral Wall cooldown increased from 37s to 46s Spectral Wall T2 cooldown improved from -14s to -23s Paradox Pulse Grenade T3 reduced from +1m per Pulse to +0.75m Seven Storm Cloud DPS increased from 110 to 120 Yamato Shadow Transformation cooldown reduced from 90s to 85s Majestic Leap Cooldown reduced from 45s to 40s"
``

# General Changes

- Urn NW lead requirement increased from 8% to 10%

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Bebop", "Grey Talon", "Kelvin", "McGinnis", "Paradox", "Seven", "Shiv", "Yamato"]} />
``

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.4735 pick=0.5059 matches=34353 days=3
    after win=#null pick=#null matches=0 days=0
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
==ability:sticky-bomb:
[[/ability/sticky-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]] Sticky Bomb change history))
### [[/ability/sticky-bomb]]((Sticky Bomb))
- Sticky Bomb stacks no longer decrease on death
- Sticky Bomb now gives stacks based on dying heroes hurt by Sticky Bomb damage with a 12 second buffer (previously anyone hit by the bomb would automatically grant stacks)
- Sticky Bomb damage per stack increased from 3% to 5%
- Sticky Bomb spirit power damage scaling increased from 0.9 to 1.2
- Sticky Bomb T1 improved from -7.5s to -8s
- Sticky Bomb cooldown reduced from 19s to 18s
==
=

=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.5019 pick=0.6898 matches=46838 days=3
    after win=#null pick=#null matches=0 days=0
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
- Movespeed spirit scaling reduced from 0.04 to 0.032
- Bullet damage spirit scaling reduced from 0.13 to 0.12
=

=hero:kelvin:
``attr:
impact closed=#true {
  all {
    before win=0.4763 pick=0.3099 matches=21043 days=3
    after win=#null pick=#null matches=0 days=0
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))
==ability:ice-path:
[[/ability/ice-path]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp]] Ice Path change history))
### [[/ability/ice-path]]((Ice Path))
- Ice Path cooldown increased from 38s to 42s
==
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.5494 pick=0.5837 matches=39634 days=3
    after win=#null pick=#null matches=0 days=0
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
==ability:mini-turrets-spirit-resist:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turrets Spirit Resist change history))
### [[/ability/mini-turret]]((Mini Turrets Spirit Resist))
- Mini Turrets Spirit Resist reduced from 80% to 70%
==
==ability:spectral-wall:
[[/ability/spectral-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp]] Spectral Wall change history))
### [[/ability/spectral-wall]]((Spectral Wall))
- Spectral Wall cooldown increased from 37s to 46s
- Spectral Wall T2 cooldown improved from -14s to -23s
==
=

=hero:paradox:
``attr:
impact closed=#true {
  all {
    before win=0.4855 pick=0.573 matches=38907 days=3
    after win=#null pick=#null matches=0 days=0
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))
==ability:pulse-grenade:
[[/ability/pulse-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp]] Pulse Grenade change history))
### [[/ability/pulse-grenade]]((Pulse Grenade))
- Pulse Grenade T3 reduced from +1m per Pulse to +0.75m
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.4956 pick=0.7392 matches=50189 days=3
    after win=#null pick=#null matches=0 days=0
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:storm-cloud-dps:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud DPS change history))
### [[/ability/storm-cloud]]((Storm Cloud DPS))
- Storm Cloud DPS increased from 110 to 120
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4511 pick=0.3868 matches=26265 days=3
    after win=#null pick=#null matches=0 days=0
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))
- Killing Blow cast range increased from 13m to 14m
- Killing Blow rage per weapon damage increased from 0.015 to 0.017
- Killing Blow drain rate reduced from 0.3 to 0.25
==
=

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.4755 pick=0.3836 matches=26045 days=3
    after win=#null pick=#null matches=0 days=0
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))
- Shadow Transformation cooldown reduced from 90s to 85s
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Majestic Leap"]} />
``

=item:majestic-leap:
``attr:
impact closed=#true {
  all {
    before win=0.5008 pick=0.0709 matches=57743 days=3
    after win=#null pick=#null matches=0 days=0
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))
- Cooldown reduced from 45s to 40s
=