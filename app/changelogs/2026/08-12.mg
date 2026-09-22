``attr:
title "Minor Update - 08-12-2026"
alias "2026/minor-08-12"
thread_id "162570"
steam_gid "1840944183775204"
published "2026-08-12T22:57:44.000Z"
author "IceFrog"
author_image "/assets/authors/icefrog.webp"
major_update #false
content_text "Apollo Riposte melee resist reduction increased from -22% to -25% Riposte T2 changed from \"-30% Melee Resist\" to \"-25% Melee Resist and +0.4s Stun Duration\" Riposte T3 increased from 60% Lifesteal for 7s to 75% Lifesteal for 13s Fixed Itani Lo Sahn being canceled with movement abilities Billy Base health regen reduced from 2.5 to 2.0 Rising Ram T3 changed from \"On Impact: Deal 7% max health as spirit damage\" to \"On hero hit: +10% Max HP for 16s\" Chain Gang spirit scaling reduced from 1 to 0.7 Doorman Doorway range reduced from 70m to 65m Walker will no longer consider Luggage Cart dragged enemies as valid targets to trigger the stomp on until soon after they are dropped off Similar to the Walker change above, the turrets in the healing area in base now also wait on considering valid targets Drifter Rend spirit scaling reduced from 1.7 to 1.4 Stalker's Mark cooldown increased from 24s to 26s Stalker's Mark T2 reduced from -12s Cooldown to -10s Holliday Powder Keg now does half its damage immediately and half over 3s as a damage over time burn (same overall damage, multiple instances stack) Ivy Stone Form T3 stun duration reduced from +1s to +0.75s Lash Falloff range reduced from 20m->58m to 18m->54m McGinnis Bullet damage base and growth values reduced by 5% Spirit Resist per boon reduced from +0.625% to +0.35% Mini Turrets no longer shoots heroes on ziplines Mini Turrets no longer have 80% decaying resist for the first 6s Mini Turrets health increased from 90 + 7.8/boon to 100 + 9/boon Medicinal Specter T1 changed from \"Provides +40% Spirit Resist\" to \"+1.5s Duration\" Medicinal Specter T3 no longer increases duration by +1.5s Medicinal Specter T3 now also increases spirit resistance by +40% Paige Plot Armor weapon damage scaling increased from 0.2 to 0.3 Seven Lightning Ball T3 radius increased from +1.5m to +1.75m Vindicta Stake T1 reduced from +65 Damage to +45 Vyper Petrifying Bola radius increased from 8m to 12m Petrifying Bola petrify duration increased from 2s to 2.2s Wraith Card Trick Heart heal spirit scaling reduced from 1 to 0.75 Full Auto T3 spirit scaling reduced from +0.06 to +0.045"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2026-07-31" to="2026-08-12"
  after from="2026-08-13" to="2026-08-22"
}
``

# General Changes

[[!:https://clan.akamai.steamstatic.com/images/45164767/568ff640318c8a81e2b5b4a22bf29e100ee144d9.png]]((store.steampowered))

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Apollo", "Billy", "Doorman", "Drifter", "Holliday", "Ivy", "Lash", "McGinnis", "Paige", "Seven", "Vindicta", "Vyper", "Wraith"]} />
``

=hero:apollo:
``attr:
impact closed=#true {
  all {
    before win=0.5019 pick=0.2586 matches=172518 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.5056 pick=0.3125 matches=134017 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=814 days=11 total=51300 covered=12 coverage="complete"
    after win=0.4971 pick=0.2861 matches=2738 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/apollo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp]] Apollo patch history))
## [[/hero/apollo]]((Apollo))
==ability:riposte:
[[/ability/riposte]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp]] Riposte change history))
### [[/ability/riposte]]((Riposte))
- Riposte melee resist reduction increased from -22% to -25%
- Riposte T2 changed from "-30% Melee Resist" to "-25% Melee Resist and +0.4s Stun Duration"
- Riposte T3 increased from 60% Lifesteal for 7s to 75% Lifesteal for 13s
==
==ability:itani-lo-sahn:
[[/ability/itani-lo-sahn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_ult.webp]] Itani Lo Sahn change history))
### [[/ability/itani-lo-sahn]]((Itani Lo Sahn))
- Fixed Itani Lo Sahn being canceled with movement abilities
==
=

=hero:billy:
``attr:
impact closed=#true {
  all {
    before win=0.4948 pick=0.423 matches=282151 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.4806 pick=0.3808 matches=163305 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=0.5289 pick=0.5497 matches=2350 days=12 total=51300 covered=12 coverage="complete"
    after win=0.4961 pick=0.3886 matches=3719 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/billy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp]] Billy patch history))
## [[/hero/billy]]((Billy))
- Base health regen reduced from 2.5 to 2.0
==ability:rising-ram:
[[/ability/rising-ram]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp]] Rising Ram change history))
### [[/ability/rising-ram]]((Rising Ram))
- Rising Ram T3 changed from "On Impact: Deal 7% max health as spirit damage" to "On hero hit: +10% Max HP for 16s"
==
==ability:chain-gang:
[[/ability/chain-gang]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_chaingang.webp]] Chain Gang change history))
### [[/ability/chain-gang]]((Chain Gang))
- Chain Gang spirit scaling reduced from 1 to 0.7
==
=

=hero:doorman:
``attr:
impact closed=#true {
  all {
    before win=0.4595 pick=0.1838 matches=122609 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.461 pick=0.1773 matches=76053 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=676 days=11 total=51300 covered=12 coverage="complete"
    after win=0.4714 pick=0.1478 matches=1415 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/the-doorman]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp]] Doorman patch history))
## [[/hero/the-doorman]]((Doorman))
==ability:doorway:
[[/ability/doorway]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp]] Doorway change history))
### [[/ability/doorway]]((Doorway))
- Doorway range reduced from 70m to 65m
==
==ability:luggage-cart:
[[/ability/luggage-cart]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp]] Luggage Cart change history))
### [[/ability/luggage-cart]]((Luggage Cart))
- Walker will no longer consider Luggage Cart dragged enemies as valid targets to trigger the stomp on until soon after they are dropped off
- Similar to the Walker change above, the turrets in the healing area in base now also wait on considering valid targets
==
=

=hero:drifter:
``attr:
impact closed=#true {
  all {
    before win=0.5155 pick=0.5083 matches=339068 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.5026 pick=0.4656 matches=199671 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=0.5031 pick=0.683 matches=2920 days=11 total=51300 covered=12 coverage="complete"
    after win=0.5059 pick=0.5718 matches=5473 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/drifter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp]] Drifter patch history))
## [[/hero/drifter]]((Drifter))
==ability:rend:
[[/ability/rend]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp]] Rend change history))
### [[/ability/rend]]((Rend))
- Rend spirit scaling reduced from 1.7 to 1.4
==
==ability:stalker-s-mark:
[[/ability/stalkers-mark]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_stalkersmark.webp]] Stalker's Mark change history))
### [[/ability/stalkers-mark]]((Stalker's Mark))
- Stalker's Mark cooldown increased from 24s to 26s
- Stalker's Mark T2 reduced from -12s Cooldown to -10s
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.4863 pick=0.2409 matches=160682 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.4668 pick=0.2333 matches=100043 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=0.5135 pick=0.3289 matches=1406 days=11 total=51300 covered=12 coverage="complete"
    after win=0.4861 pick=0.248 matches=2374 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg now does half its damage immediately and half over 3s as a damage over time burn (same overall damage, multiple instances stack)
==
=

=hero:ivy:
``attr:
impact closed=#true {
  all {
    before win=0.5384 pick=0.3138 matches=209337 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.5359 pick=0.3224 matches=138246 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=0.5429 pick=0.4007 matches=1713 days=12 total=51300 covered=12 coverage="complete"
    after win=0.5484 pick=0.3887 matches=3720 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))
==ability:stone-form:
[[/ability/stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/ability/stone-form]]((Stone Form))
- Stone Form T3 stun duration reduced from +1s to +0.75s
==
=

=hero:lash:
``attr:
impact closed=#true {
  all {
    before win=0.5196 pick=0.4632 matches=309023 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.5179 pick=0.4623 matches=198237 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=0.5264 pick=0.6297 matches=2692 days=12 total=51300 covered=12 coverage="complete"
    after win=0.5119 pick=0.652 matches=6240 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/lash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]] Lash patch history))
## [[/hero/lash]]((Lash))
- Falloff range reduced from 20m->58m to 18m->54m
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.5395 pick=0.2474 matches=165067 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.4967 pick=0.1906 matches=81750 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=0.5756 pick=0.4299 matches=1838 days=11 total=51300 covered=12 coverage="complete"
    after win=0.5097 pick=0.2253 matches=2156 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
- Bullet damage base and growth values reduced by 5%
- Spirit Resist per boon reduced from +0.625% to +0.35%
==ability:mini-turrets:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turrets change history))
### [[/ability/mini-turret]]((Mini Turrets))
- Mini Turrets no longer shoots heroes on ziplines
- Mini Turrets no longer have 80% decaying resist for the first 6s
- Mini Turrets health increased from 90 + 7.8/boon to 100 + 9/boon
==
==ability:medicinal-specter:
[[/ability/medicinal-specter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp]] Medicinal Specter change history))
### [[/ability/medicinal-specter]]((Medicinal Specter))
- Medicinal Specter T1 changed from "Provides +40% Spirit Resist" to "+1.5s Duration"
- Medicinal Specter T3 no longer increases duration by +1.5s
- Medicinal Specter T3 now also increases spirit resistance by +40%
==
=

=hero:paige:
``attr:
impact closed=#true {
  all {
    before win=0.5402 pick=0.325 matches=216768 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.5421 pick=0.3319 matches=142330 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=952 days=11 total=51300 covered=12 coverage="complete"
    after win=0.5173 pick=0.2721 matches=2604 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/paige]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp]] Paige patch history))
## [[/hero/paige]]((Paige))
==ability:plot-armor:
[[/ability/plot-armor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_defendandfight.webp]] Plot Armor change history))
### [[/ability/plot-armor]]((Plot Armor))
- Plot Armor weapon damage scaling increased from 0.2 to 0.3
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.5518 pick=0.3922 matches=261644 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.5495 pick=0.3864 matches=165686 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=854 days=11 total=51300 covered=12 coverage="complete"
    after win=0.534 pick=0.2782 matches=2663 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:lightning-ball:
[[/ability/lightning-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp]] Lightning Ball change history))
### [[/ability/lightning-ball]]((Lightning Ball))
- Lightning Ball T3 radius increased from +1.5m to +1.75m
==
=

=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.5193 pick=0.3354 matches=223723 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.5125 pick=0.3542 matches=151905 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=0.4963 pick=0.4704 matches=2011 days=11 total=51300 covered=12 coverage="complete"
    after win=0.4963 pick=0.4406 matches=4217 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
==ability:stake:
[[/ability/stake]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp]] Stake change history))
### [[/ability/stake]]((Stake))
- Stake T1 reduced from +65 Damage to +45
==
=

=hero:vyper:
``attr:
impact closed=#true {
  all {
    before win=0.4888 pick=0.1619 matches=107990 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.502 pick=0.2151 matches=92229 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=732 days=11 total=51300 covered=12 coverage="complete"
    after win=0.5637 pick=0.2541 matches=2432 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/vyper]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp]] Vyper patch history))
## [[/hero/vyper]]((Vyper))
==ability:petrifying-bola:
[[/ability/petrifying-bola]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_petrifybola.webp]] Petrifying Bola change history))
### [[/ability/petrifying-bola]]((Petrifying Bola))
- Petrifying Bola radius increased from 8m to 12m
- Petrifying Bola petrify duration increased from 2s to 2.2s
==
=

=hero:wraith:
``attr:
impact closed=#true {
  all {
    before win=0.5083 pick=0.4188 matches=279357 days=12 total=8004962 covered=12 coverage="complete"
    after win=0.5119 pick=0.4201 matches=180162 days=9 total=5146105 covered=9 coverage="complete"
  }
  high {
    before win=0.5037 pick=0.7343 matches=3139 days=12 total=51300 covered=12 coverage="complete"
    after win=0.5021 pick=0.6343 matches=6071 days=9 total=114851 covered=9 coverage="complete"
  }
}
``
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))
==ability:card-trick-heart:
[[/ability/card-trick]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp]] Card Trick Heart change history))
### [[/ability/card-trick]]((Card Trick Heart))
- Card Trick Heart heal spirit scaling reduced from 1 to 0.75
==
==ability:full-auto:
[[/ability/full-auto]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp]] Full Auto change history))
### [[/ability/full-auto]]((Full Auto))
- Full Auto T3 spirit scaling reduced from +0.06 to +0.045
==
=