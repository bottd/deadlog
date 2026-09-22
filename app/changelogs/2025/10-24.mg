``attr:
title "10-24-2025 Update"
thread_id "87198"
published "2025-10-24T16:54:51-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Getting damaged during the initial launch window (0.6s) after using a Jump Pad will cause you to be stunned (similar to ziplines having an initial knockoff period). When you are stunned, you will lose control and continue towards the landing destination. The stun will wear off 0.2s after landing, and then a 30% slow for 2s will apply. Damage over time does not trigger this (same damage rules as ziplines). Curse: Cooldown reduced from 50s to 45s Calico Gloom Bombs cooldown increased from 10s to 12s Gloom Bombs base damage from 55 to 45 Gloom Bombs spirit scaling reduced from 0.74 to 0.64 Gloom Bombs multi bomb damage ratio increased from 50% to 65% Ava no longer replenishes stamina on usage Doorman Bullet damage growth per boon reduced from 1.15 to 1.0 Outgoing headshot damage multiplier reduced by 25% Call Bell explosion damage spirit scaling increased from 1.5 to 1.7 Drifter Bloodscent isolated kill bonus reduced from 5% to 4% Base bullet damage increased from 20.9 to 21.3 Bullet damage growth increased from 0.52 to 0.56 Dynamo Quantum Entanglement Fire Rate increased from +25% to +30% Rejuvenating Aurora cooldown reduced from 48s to 45s Infernus Bullet damage growth per boon reduced from 0.12 to 0.08 Flame Dash T2 reduced from +35 to +30 Afterburn T1 reduced from -25% Spirit Damage to -20% Afterburn T3 reduced from +28 DPS to +26 Kelvin Base regen reduced from 2 to 1 Headshot reduction reduced from -20% to -25% Frozen Shelter cooldown increased from 150s to 170s McGinnis Medicinal Specter now has a 1s linger time Paradox Base bullet damage reduced from 6.48 to 6.15 Paradoxical Swap cooldown increased from 70s to 75s Seven Lightning Ball spirit scaling increased from 0.43 to 0.55 Shiv Alt fire knockback reduced by 10% Victor Pain Battery T1 and T2 swapped Aura of Suffering max damage reduced from 80 to 70 Aura of Suffering T2 reduced from +10/50 to +8/40 Vyper Screwjab Dagger spirit scaling increased from 0.65/0.33 to 0.8/0.4 Warden Base bullet damage increased from 15 to 16.2 Binding Word range increased from 19m to 20m Mystic Shot Base damage reduced from 55 to 45 Spirit scaling increased from 0.65 to 0.75 Warp Stone Bullet Resist reduced from 40% to 35% Capacitor Fire Rate reduced from 8% to 5% Cooldown increased from 40s to 60s Guardian Ward Cooldown increased from 40s to 45s Reactive Barrier Cooldown increased from 24s to 26s Spirit Shielding Barrier reduced from 325 to 300 Barrier boon scaling increased from 4 to 5 Weapon Shielding Barrier reduced from 325 to 300 Barrier boon scaling increased from 4 to 5 Fortitude Damage taken duration to regen reduced from 14s to 13s Trophy Collector Souls per Minute increased from 25 to 30 Majestic Leap Cooldown increased from 28s to 32s Divine Barrier Cooldown increased from 40s to 45s Rusted Barrel Bonus health increased from 60 to 70 Silence Wave Cooldown increased from 30s to 35s (affects component) Spirit Snatch Duration reduced from 14s to 10s Bonus damage reduced from 75 to 50 Ethereal Shift Cooldown increased from 20s to 45s Movespeed during phase reduced from 4m to 3m Can no longer target an ethereal shifted ally with things like Rescue Beam, Viscous Cube, etc"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2025-10-10" to="2025-10-24"
  after from="2025-10-25" to="2025-11-08"
}
``

# General Changes

- Getting damaged during the initial launch window (0.6s) after using a Jump Pad will cause you to be stunned (similar to ziplines having an initial knockoff period). When you are stunned, you will lose control and continue towards the landing destination. The stun will wear off 0.2s after landing, and then a 30% slow for 2s will apply. Damage over time does not trigger this (same damage rules as ziplines).
- Curse: Cooldown reduced from 50s to 45s

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Calico", "Doorman", "Drifter", "Dynamo", "Infernus", "Kelvin", "McGinnis", "Paradox", "Seven", "Shiv", "Victor", "Vyper", "Warden"]} />
``

=hero:calico:
``attr:
impact closed=#true {
  all {
    before win=0.5294 pick=0.3893 matches=201401 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5165 pick=0.325 matches=109505 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5244 pick=0.4783 matches=43123 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.518 pick=0.3852 matches=23445 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/calico]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico patch history))
## [[/hero/calico]]((Calico))
==ability:gloom-bombs:
[[/ability/gloom-bombs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp]] Gloom Bombs change history))
### [[/ability/gloom-bombs]]((Gloom Bombs))
- Gloom Bombs cooldown increased from 10s to 12s
- Gloom Bombs base damage from 55 to 45
- Gloom Bombs spirit scaling reduced from 0.74 to 0.64
- Gloom Bombs multi bomb damage ratio increased from 50% to 65%
==
==ability:ava:
[[/ability/ava]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp]] Ava change history))
### [[/ability/ava]]((Ava))
- Ava no longer replenishes stamina on usage
==
=

=hero:doorman:
``attr:
impact closed=#true {
  all {
    before win=0.4983 pick=0.45 matches=232822 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.4775 pick=0.3694 matches=124484 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.4991 pick=0.4129 matches=37225 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.4632 pick=0.3055 matches=18592 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/the-doorman]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp]] Doorman patch history))
## [[/hero/the-doorman]]((Doorman))
- Bullet damage growth per boon reduced from 1.15 to 1.0
- Outgoing headshot damage multiplier reduced by 25%
==ability:call-bell:
[[/ability/call-bell]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp]] Call Bell change history))
### [[/ability/call-bell]]((Call Bell))
- Call Bell explosion damage spirit scaling increased from 1.5 to 1.7
==
=

=hero:drifter:
``attr:
impact closed=#true {
  all {
    before win=0.5099 pick=0.3842 matches=198800 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.52 pick=0.3988 matches=134395 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.4921 pick=0.3138 matches=28295 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.509 pick=0.343 matches=20873 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/drifter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp]] Drifter patch history))
## [[/hero/drifter]]((Drifter))
==ability:bloodscent:
[[/ability/bloodscent]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp]] Bloodscent change history))
### [[/ability/bloodscent]]((Bloodscent))
- Bloodscent isolated kill bonus reduced from 5% to 4%
==
- Base bullet damage increased from 20.9 to 21.3
- Bullet damage growth increased from 0.52 to 0.56
=

=hero:dynamo:
``attr:
impact closed=#true {
  all {
    before win=0.5281 pick=0.41 matches=212108 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5289 pick=0.4172 matches=140571 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5198 pick=0.3563 matches=32127 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5244 pick=0.3653 matches=22235 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))
==ability:quantum-entanglement-fire-rate:
[[/ability/quantum-entanglement]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp]] Quantum Entanglement Fire Rate change history))
### [[/ability/quantum-entanglement]]((Quantum Entanglement Fire Rate))
- Quantum Entanglement Fire Rate increased from +25% to +30%
==
==ability:rejuvenating-aurora:
[[/ability/rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/ability/rejuvenating-aurora]]((Rejuvenating Aurora))
- Rejuvenating Aurora cooldown reduced from 48s to 45s
==
=

=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=0.5135 pick=0.7294 matches=377372 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.4963 pick=0.6976 matches=235067 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5081 pick=0.7838 matches=70673 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.4899 pick=0.7266 matches=44220 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
- Bullet damage growth per boon reduced from 0.12 to 0.08
==ability:flame-dash:
[[/ability/flame-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash change history))
### [[/ability/flame-dash]]((Flame Dash))
- Flame Dash T2 reduced from +35 to +30
==
==ability:afterburn:
[[/ability/afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/ability/afterburn]]((Afterburn))
- Afterburn T1 reduced from -25% Spirit Damage to -20%
- Afterburn T3 reduced from +28 DPS to +26
==
=

=hero:kelvin:
``attr:
impact closed=#true {
  all {
    before win=0.5111 pick=0.3036 matches=157071 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.502 pick=0.2888 matches=97320 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5237 pick=0.3395 matches=30608 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5076 pick=0.306 matches=18621 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))
- Base regen reduced from 2 to 1
- Headshot reduction reduced from -20% to -25%
==ability:frozen-shelter:
[[/ability/frozen-shelter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp]] Frozen Shelter change history))
### [[/ability/frozen-shelter]]((Frozen Shelter))
- Frozen Shelter cooldown increased from 150s to 170s
==
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.5137 pick=0.3249 matches=168101 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5278 pick=0.349 matches=117605 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5165 pick=0.2264 matches=20413 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5329 pick=0.2683 matches=16328 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
==ability:medicinal-specter:
[[/ability/medicinal-specter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp]] Medicinal Specter change history))
### [[/ability/medicinal-specter]]((Medicinal Specter))
- Medicinal Specter now has a 1s linger time
==
=

=hero:paradox:
``attr:
impact closed=#true {
  all {
    before win=0.4908 pick=0.3736 matches=193303 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.483 pick=0.358 matches=120637 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.4981 pick=0.4888 matches=44071 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.4942 pick=0.4575 matches=27843 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))
- Base bullet damage reduced from 6.48 to 6.15
==ability:paradoxical-swap:
[[/ability/paradoxical-swap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp]] Paradoxical Swap change history))
### [[/ability/paradoxical-swap]]((Paradoxical Swap))
- Paradoxical Swap cooldown increased from 70s to 75s
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.5249 pick=0.3477 matches=179883 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5253 pick=0.3425 matches=115421 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5133 pick=0.2335 matches=21056 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5123 pick=0.2331 matches=14184 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:lightning-ball:
[[/ability/lightning-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp]] Lightning Ball change history))
### [[/ability/lightning-ball]]((Lightning Ball))
- Lightning Ball spirit scaling increased from 0.43 to 0.55
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4608 pick=0.3917 matches=202640 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.4661 pick=0.4118 matches=138750 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.4606 pick=0.5048 matches=45511 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.4688 pick=0.5329 matches=32431 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
- Alt fire knockback reduced by 10%
=

=hero:victor:
``attr:
impact closed=#true {
  all {
    before win=0.5401 pick=0.3775 matches=195293 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5326 pick=0.3201 matches=107849 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5389 pick=0.4241 matches=38236 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5137 pick=0.2847 matches=17324 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/victor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp]] Victor patch history))
## [[/hero/victor]]((Victor))
==ability:pain-battery:
[[/ability/pain-battery]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_pain_battery.webp]] Pain Battery change history))
### [[/ability/pain-battery]]((Pain Battery))
- Pain Battery T1 and T2 swapped
==
==ability:aura-of-suffering:
[[/ability/aura-of-suffering]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp]] Aura of Suffering change history))
### [[/ability/aura-of-suffering]]((Aura of Suffering))
- Aura of Suffering max damage reduced from 80 to 70
- Aura of Suffering T2 reduced from +10/50 to +8/40
==
=

=hero:vyper:
``attr:
impact closed=#true {
  all {
    before win=0.4724 pick=0.192 matches=99346 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.4798 pick=0.1937 matches=65279 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.4928 pick=0.1498 matches=13504 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.4995 pick=0.1653 matches=10063 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/vyper]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp]] Vyper patch history))
## [[/hero/vyper]]((Vyper))
==ability:screwjab-dagger:
[[/ability/screwjab-dagger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp]] Screwjab Dagger change history))
### [[/ability/screwjab-dagger]]((Screwjab Dagger))
- Screwjab Dagger spirit scaling increased from 0.65/0.33 to 0.8/0.4
==
=

=hero:warden:
``attr:
impact closed=#true {
  all {
    before win=0.4922 pick=0.1994 matches=103143 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5141 pick=0.2573 matches=86687 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.4829 pick=0.1509 matches=13606 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5155 pick=0.2471 matches=15040 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))
- Base bullet damage increased from 15 to 16.2
==ability:binding-word:
[[/ability/binding-word]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp]] Binding Word change history))
### [[/ability/binding-word]]((Binding Word))
- Binding Word range increased from 19m to 20m
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Capacitor", "Divine Barrier", "Ethereal Shift", "Fortitude", "Guardian Ward", "Majestic Leap", "Mystic Shot", "Reactive Barrier", "Rusted Barrel", "Silence Wave", "Spirit Shielding", "Spirit Snatch", "Trophy Collector", "Warp Stone", "Weapon Shielding"]} />
``

=item:capacitor:
``attr:
impact closed=#true {
  all {
    before win=0.5284 pick=0.057 matches=354199 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5265 pick=0.0634 matches=256237 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5326 pick=0.063 matches=68160 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5336 pick=0.0752 matches=54889 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/capacitor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp]] Capacitor patch history))
## [[/item/capacitor]]((Capacitor))
- Fire Rate reduced from 8% to 5%
- Cooldown increased from 40s to 60s
=

=item:divine-barrier:
``attr:
impact closed=#true {
  all {
    before win=0.5625 pick=0.0264 matches=163957 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5548 pick=0.0314 matches=126997 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5701 pick=0.0292 matches=31574 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5673 pick=0.0375 matches=27355 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/divine-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp]] Divine Barrier patch history))
## [[/item/divine-barrier]]((Divine Barrier))
- Cooldown increased from 40s to 45s
=

=item:ethereal-shift:
``attr:
impact closed=#true {
  all {
    before win=0.5813 pick=0.0462 matches=286875 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5773 pick=0.0287 matches=116196 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5791 pick=0.069 matches=74706 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5821 pick=0.0341 matches=24888 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/ethereal-shift]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp]] Ethereal Shift patch history))
## [[/item/ethereal-shift]]((Ethereal Shift))
- Cooldown increased from 20s to 45s
- Movespeed during phase reduced from 4m to 3m
- Can no longer target an ethereal shifted ally with things like Rescue Beam, Viscous Cube, etc
=

=item:fortitude:
``attr:
impact closed=#true {
  all {
    before win=0.5183 pick=0.1176 matches=729839 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5199 pick=0.1042 matches=421269 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5332 pick=0.1116 matches=120753 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5394 pick=0.1 matches=73030 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/fortitude]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp]] Fortitude patch history))
## [[/item/fortitude]]((Fortitude))
- Damage taken duration to regen reduced from 14s to 13s
=

=item:guardian-ward:
``attr:
impact closed=#true {
  all {
    before win=0.5221 pick=0.0501 matches=311125 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5143 pick=0.0564 matches=227955 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5211 pick=0.0563 matches=60886 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5138 pick=0.0672 matches=49086 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/guardian-ward]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp]] Guardian Ward patch history))
## [[/item/guardian-ward]]((Guardian Ward))
- Cooldown increased from 40s to 45s
=

=item:majestic-leap:
``attr:
impact closed=#true {
  all {
    before win=0.5059 pick=0.0621 matches=385515 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5051 pick=0.0644 matches=260580 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5064 pick=0.0844 matches=91349 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.503 pick=0.0867 matches=63350 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))
- Cooldown increased from 28s to 32s
=

=item:mystic-shot:
``attr:
impact closed=#true {
  all {
    before win=0.48 pick=0.1755 matches=1089622 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.4784 pick=0.1642 matches=664034 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.4832 pick=0.2016 matches=218106 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.4859 pick=0.1793 matches=130940 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/mystic-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp]] Mystic Shot patch history))
## [[/item/mystic-shot]]((Mystic Shot))
- Base damage reduced from 55 to 45
- Spirit scaling increased from 0.65 to 0.75
=

=item:reactive-barrier:
``attr:
impact closed=#true {
  all {
    before win=0.4959 pick=0.043 matches=267042 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.496 pick=0.0709 matches=286679 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5129 pick=0.0661 matches=71563 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5082 pick=0.1066 matches=77846 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/reactive-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier patch history))
## [[/item/reactive-barrier]]((Reactive Barrier))
- Cooldown increased from 24s to 26s
=

=item:rusted-barrel:
``attr:
impact closed=#true {
  all {
    before win=0.4184 pick=0.0113 matches=70074 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.4159 pick=0.0141 matches=57060 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.4202 pick=0.0173 matches=18680 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.4138 pick=0.0207 matches=15117 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/rusted-barrel]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp]] Rusted Barrel patch history))
## [[/item/rusted-barrel]]((Rusted Barrel))
- Bonus health increased from 60 to 70
=

=item:silence-wave:
``attr:
impact closed=#true {
  all {
    before win=0.491 pick=0.0601 matches=373009 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.4883 pick=0.0617 matches=249386 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5006 pick=0.0887 matches=95948 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5023 pick=0.0873 matches=63722 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/silence-wave]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp]] Silence Wave patch history))
## [[/item/silence-wave]]((Silence Wave))
- Cooldown increased from 30s to 35s (affects component)
=

=item:spirit-shielding:
``attr:
impact closed=#true {
  all {
    before win=0.4941 pick=0.1122 matches=696814 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.498 pick=0.1426 matches=576533 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5029 pick=0.1387 matches=150092 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5059 pick=0.1886 matches=137711 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/spirit-shielding]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp]] Spirit Shielding patch history))
## [[/item/spirit-shielding]]((Spirit Shielding))
- Barrier reduced from 325 to 300
- Barrier boon scaling increased from 4 to 5
=

=item:spirit-snatch:
``attr:
impact closed=#true {
  all {
    before win=0.5151 pick=0.1411 matches=876135 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5105 pick=0.1473 matches=595583 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5146 pick=0.1658 matches=179346 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5122 pick=0.1735 matches=126719 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/spirit-snatch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp]] Spirit Snatch patch history))
## [[/item/spirit-snatch]]((Spirit Snatch))
- Duration reduced from 14s to 10s
- Bonus damage reduced from 75 to 50
=

=item:trophy-collector:
``attr:
impact closed=#true {
  all {
    before win=0.523 pick=0.0823 matches=511085 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5288 pick=0.0988 matches=399560 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5165 pick=0.0666 matches=72093 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5217 pick=0.0893 matches=65216 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/trophy-collector]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp]] Trophy Collector patch history))
## [[/item/trophy-collector]]((Trophy Collector))
- Souls per Minute increased from 25 to 30
=

=item:warp-stone:
``attr:
impact closed=#true {
  all {
    before win=0.5292 pick=0.0723 matches=448975 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.5276 pick=0.0755 matches=305136 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.5286 pick=0.1168 matches=126398 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.5238 pick=0.1209 matches=88280 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/warp-stone]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp]] Warp Stone patch history))
## [[/item/warp-stone]]((Warp Stone))
- Bullet Resist reduced from 40% to 35%
=

=item:weapon-shielding:
``attr:
impact closed=#true {
  all {
    before win=0.4301 pick=0.0105 matches=65353 days=14 total=6208692 covered=14 coverage="complete"
    after win=0.4417 pick=0.0124 matches=49959 days=14 total=4043484 covered=14 coverage="complete"
  }
  high {
    before win=0.4471 pick=0.0072 matches=7746 days=14 total=1081968 covered=14 coverage="complete"
    after win=0.4624 pick=0.0115 matches=8410 days=14 total=730320 covered=14 coverage="complete"
  }
}
``
[[/item/weapon-shielding]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp]] Weapon Shielding patch history))
## [[/item/weapon-shielding]]((Weapon Shielding))
- Barrier reduced from 325 to 300
- Barrier boon scaling increased from 4 to 5
=