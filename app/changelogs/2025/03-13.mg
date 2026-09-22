``attr:
title "03-13-2025 Update"
thread_id "58592"
published "2025-03-13T11:40:11-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Increased horizontal soul orb movement a bit Soul Orb spawn delay increased a bit and added some variability Neutrals soul values reduced by 15%  (including Sinner's Sacrifice) Sinner's Sacrifice spawn/respawn time increased from 8/4 minutes to 10/5 Mid Neutral Camp respawn time increased from 5 minutes to 6 minutes Golden Statue Buffs adjustments Level 1 Ammo reduced from 4% to 3% Level 2 Ammo reduced from 6% to 5% Level 3 Ammo reduced from 8% to 7% Level 1 HP reduced from 20 to 15 Level 2 HP reduced from 30 to 25 Level 3 HP reduced from 40 to 35 Level 3 Weapon Power reduced from 7% to 6% Level 3 Spirit reduced from 5 to 4 Minor respawn curve adjustments Holliday Powder Keg T2 decreased from +120 to +100 Bounce Pad cooldown increased from 37s to 41s Bounce Pad T1 is now T2 Bounce Pad New T1 is -10s cooldown Bounce Pad T2 is now T3. Removed T3 Stun Haze Bullet Dance bonus damage is now weapon damage instead of spirit Sinclair Assistant damage now follows his gun's falloff range Assistant base damage reduced from 30 to 20 Cold Front No longer does double damage to creeps"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2025-02-27" to="2025-03-13"
  after from="2025-03-14" to="2025-03-17"
}
``

# General Changes

- Increased horizontal soul orb movement a bit
- Soul Orb spawn delay increased a bit and added some variability
- Neutrals soul values reduced by 15%  (including Sinner's Sacrifice)
- Sinner's Sacrifice spawn/respawn time increased from 8/4 minutes to 10/5
- Mid Neutral Camp respawn time increased from 5 minutes to 6 minutes
- Golden Statue Buffs adjustments
- Level 1 Ammo reduced from 4% to 3%
- Level 2 Ammo reduced from 6% to 5%
- Level 3 Ammo reduced from 8% to 7%
- Level 1 HP reduced from 20 to 15
- Level 2 HP reduced from 30 to 25
- Level 3 HP reduced from 40 to 35
- Level 3 Weapon Power reduced from 7% to 6%
- Level 3 Spirit reduced from 5 to 4
- Minor respawn curve adjustments

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Haze", "Holliday", "Sinclair"]} />
``

=hero:haze:
``attr:
impact closed=#true {
  all {
    before win=0.5239 pick=0.8899 matches=285865 days=14 total=3854592 covered=14 coverage="complete"
    after win=0.4855 pick=0.859 matches=61121 days=3 total=853812 covered=3 coverage="complete"
  }
  high {
    before win=0.496 pick=0.8609 matches=11025 days=14 total=153684 covered=14 coverage="complete"
    after win=0.4214 pick=0.7385 matches=2112 days=3 total=34320 covered=3 coverage="complete"
  }
}
``
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))
==ability:bullet-dance:
[[/ability/bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/ability/bullet-dance]]((Bullet Dance))
- Bullet Dance bonus damage is now weapon damage instead of spirit
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.4563 pick=0.3506 matches=112630 days=14 total=3854592 covered=14 coverage="complete"
    after win=0.4475 pick=0.271 matches=19283 days=3 total=853812 covered=3 coverage="complete"
  }
  high {
    before win=0.4937 pick=0.4335 matches=5552 days=14 total=153684 covered=14 coverage="complete"
    after win=#null pick=#null matches=785 days=3 total=34320 covered=3 coverage="complete"
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg T2 decreased from +120 to +100
==
==ability:bounce-pad:
[[/ability/bounce-pad]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad change history))
### [[/ability/bounce-pad]]((Bounce Pad))
- Bounce Pad cooldown increased from 37s to 41s
- Bounce Pad T1 is now T2
==
==ability:bounce-pad-new:
[[/ability/bounce-pad]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad New change history))
### [[/ability/bounce-pad]]((Bounce Pad New))
- Bounce Pad New T1 is -10s cooldown
==
==ability:bounce-pad:
[[/ability/bounce-pad]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad change history))
### [[/ability/bounce-pad]]((Bounce Pad))
- Bounce Pad T2 is now T3. Removed T3 Stun
==
=

=hero:sinclair:
``attr:
impact closed=#true {
  all {
    before win=0.4629 pick=0.2689 matches=86372 days=14 total=3854592 covered=14 coverage="complete"
    after win=0.4564 pick=0.2117 matches=15063 days=3 total=853812 covered=3 coverage="complete"
  }
  high {
    before win=0.5006 pick=0.2522 matches=3230 days=14 total=153684 covered=14 coverage="complete"
    after win=#null pick=#null matches=579 days=3 total=34320 covered=3 coverage="complete"
  }
}
``
[[/hero/sinclair]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp]] Sinclair patch history))
## [[/hero/sinclair]]((Sinclair))
==ability:assistant:
[[/ability/spectral-assistant]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp]] Assistant change history))
### [[/ability/spectral-assistant]]((Assistant))
- Assistant damage now follows his gun's falloff range
==
==ability:spectral-assistant:
[[/ability/spectral-assistant]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp]] Spectral Assistant change history))
### [[/ability/spectral-assistant]]((Spectral Assistant))
- Assistant base damage reduced from 30 to 20
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Cold Front"]} />
``

=item:cold-front:
``attr:
impact closed=#true {
  all {
    before win=0.5224 pick=0.2713 matches=1045609 days=14 total=3854592 covered=14 coverage="complete"
    after win=0.5179 pick=0.2197 matches=187621 days=3 total=853812 covered=3 coverage="complete"
  }
  high {
    before win=0.5129 pick=0.4402 matches=67647 days=14 total=153684 covered=14 coverage="complete"
    after win=0.5091 pick=0.2966 matches=10181 days=3 total=34320 covered=3 coverage="complete"
  }
}
``
[[/item/cold-front]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp]] Cold Front patch history))
## [[/item/cold-front]]((Cold Front))
- No longer does double damage to creeps
=