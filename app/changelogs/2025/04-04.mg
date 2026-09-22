``attr:
title "04-04-2025 Update"
thread_id "60284"
published "2025-04-04T16:35:38-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Added an option to allow canceling abilities with the ability key to the main options page. Soul orb spawn delay range increased from 0.2-0.7 to 0.4-0.7 Soul orb size increased by 10% Soul orb lag compensation buffer increased from 120ms to 140ms Fixed issues with denying melee soul orbs Fixed various other timing related bugs with Soul orbs Fixed shotguns doing too much damage to Guardians Removed the outer lanes teleporters Sprint increased by +0.5 for all heroes Removed the top of the mid arch from being able to be occupied Lifesteal provided by things like Soul Shredder bullets now properly diminishes in stacking with other sources of lifesteal Fix an edge case where a player can claim the Rejuv but also get parried Fixed spellslinger headshots providing more bonuses than intended Fixed some misc mispredictions during Ice Path movement Fixed Ice Path being overly sticky for allies Fixed Ivy, Viscous and Magic Carpet moving faster than desired when holding the soul urn Urn reveal time reduced from 25s to 15s Urn speed limit increased from 13 m/s to 15 m/s Wall Jump's behavior has been reworked so that lateral velocity is now modified by WASD movement direction into/away from the wall Mantle now requires pushing WASD Direction toward a ledge Improved Camera positions while character is backed up against walls When attaching to a zipline, movement direction can override the travel direction When holding \"Jump/Mantle\" after attaching to a rope, continue to move up the rope Calico Health growth per boon reduced from 41 to 34 Leaping Slash Heal reduced from 50 to 40 Leaping Slash Heal Spirit Scaling reduced from 1.6 to 1.1 Holliday Powder Keg T2 bonus damage reduced from 100 to 80 Crackshot T2 bonus damage reduced from 85 to 60 Mirage Djinn's Mark T2 reduced from +4s Multiplier Duration to +2.5s Seven Health Regen reduced from 3 to 1.5 Sinclair Vexing Bolt cooldown increased from 15 to 24 Vexing Bolt T1 changed from -4s Cooldown to \"Bolt Apply -25% Fire Rate for 5s\" Vexing Bolt T2 changed from \"Bolt Apply -25% Fire Rate for 5s\" to -13s Cooldown Vindicta Crow Familiar duration spirit scaling reduced from 0.03 to 0.024 Crow Familiar Health Drain reduced from 3% to 2.3% Infuser Spirit Lifesteal reduced from 20% to 15% Bonus Spirit reduced from 16 to 13"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2025-03-21" to="2025-04-04"
  after from="2025-04-05" to="2025-04-18"
}
``

# General Changes

- Added an option to allow canceling abilities with the ability key to the main options page.
- Soul orb spawn delay range increased from 0.2-0.7 to 0.4-0.7
- Soul orb size increased by 10%
- Soul orb lag compensation buffer increased from 120ms to 140ms
- Fixed issues with denying melee soul orbs
- Fixed various other timing related bugs with Soul orbs
- Fixed shotguns doing too much damage to Guardians
- Removed the outer lanes teleporters
- Sprint increased by +0.5 for all heroes
- Removed the top of the mid arch from being able to be occupied
- Lifesteal provided by things like Soul Shredder bullets now properly diminishes in stacking with other sources of lifesteal
- Fix an edge case where a player can claim the Rejuv but also get parried
- Fixed spellslinger headshots providing more bonuses than intended
- Fixed some misc mispredictions during Ice Path movement
- Fixed Ice Path being overly sticky for allies
- Fixed Ivy, Viscous and Magic Carpet moving faster than desired when holding the soul urn
- Urn reveal time reduced from 25s to 15s
- Urn speed limit increased from 13 m/s to 15 m/s
- Wall Jump's behavior has been reworked so that lateral velocity is now modified by WASD movement direction into/away from the wall
- Mantle now requires pushing WASD Direction toward a ledge
- Improved Camera positions while character is backed up against walls
- When attaching to a zipline, movement direction can override the travel direction
- When holding "Jump/Mantle" after attaching to a rope, continue to move up the rope

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Calico", "Holliday", "Mirage", "Seven", "Sinclair", "Vindicta"]} />
``

=hero:calico:
``attr:
impact closed=#true {
  all {
    before win=0.5175 pick=0.5573 matches=167544 days=14 total=3607920 covered=14 coverage="complete"
    after win=0.5076 pick=0.4938 matches=125269 days=13 total=3044340 covered=13 coverage="complete"
  }
  high {
    before win=0.5138 pick=0.6107 matches=7764 days=14 total=152568 covered=14 coverage="complete"
    after win=0.4985 pick=0.5348 matches=5773 days=13 total=129528 covered=13 coverage="complete"
  }
}
``
[[/hero/calico]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico patch history))
## [[/hero/calico]]((Calico))
- Health growth per boon reduced from 41 to 34
==ability:leaping-slash-heal:
[[/ability/leaping-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp]] Leaping Slash Heal change history))
### [[/ability/leaping-slash]]((Leaping Slash Heal))
- Leaping Slash Heal reduced from 50 to 40
==
==ability:leaping-slash-heal-spirit-scaling:
[[/ability/leaping-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp]] Leaping Slash Heal Spirit Scaling change history))
### [[/ability/leaping-slash]]((Leaping Slash Heal Spirit Scaling))
- Leaping Slash Heal Spirit Scaling reduced from 1.6 to 1.1
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.4673 pick=0.2943 matches=88489 days=14 total=3607920 covered=14 coverage="complete"
    after win=0.4688 pick=0.2795 matches=70908 days=13 total=3044340 covered=13 coverage="complete"
  }
  high {
    before win=0.5143 pick=0.4014 matches=5104 days=14 total=152568 covered=14 coverage="complete"
    after win=0.4968 pick=0.4008 matches=4326 days=13 total=129528 covered=13 coverage="complete"
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg T2 bonus damage reduced from 100 to 80
==
==ability:crackshot:
[[/ability/crackshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp]] Crackshot change history))
### [[/ability/crackshot]]((Crackshot))
- Crackshot T2 bonus damage reduced from 85 to 60
==
=

=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.4924 pick=0.3538 matches=106363 days=14 total=3607920 covered=14 coverage="complete"
    after win=0.4988 pick=0.3726 matches=94520 days=13 total=3044340 covered=13 coverage="complete"
  }
  high {
    before win=0.5002 pick=0.4963 matches=6310 days=14 total=152568 covered=14 coverage="complete"
    after win=0.5165 pick=0.534 matches=5764 days=13 total=129528 covered=13 coverage="complete"
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))
==ability:djinn-s-mark:
[[/ability/djinns-mark]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp]] Djinn's Mark change history))
### [[/ability/djinns-mark]]((Djinn's Mark))
- Djinn's Mark T2 reduced from +4s Multiplier Duration to +2.5s
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.557 pick=0.7483 matches=224978 days=14 total=3607920 covered=14 coverage="complete"
    after win=0.551 pick=0.7105 matches=180257 days=13 total=3044340 covered=13 coverage="complete"
  }
  high {
    before win=0.5397 pick=0.6977 matches=8871 days=14 total=152568 covered=14 coverage="complete"
    after win=0.5253 pick=0.6128 matches=6615 days=13 total=129528 covered=13 coverage="complete"
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
- Health Regen reduced from 3 to 1.5
=

=hero:sinclair:
``attr:
impact closed=#true {
  all {
    before win=0.4679 pick=0.186 matches=55937 days=14 total=3607920 covered=14 coverage="complete"
    after win=0.4732 pick=0.1851 matches=46968 days=13 total=3044340 covered=13 coverage="complete"
  }
  high {
    before win=0.4922 pick=0.206 matches=2619 days=14 total=152568 covered=14 coverage="complete"
    after win=0.5078 pick=0.2317 matches=2501 days=13 total=129528 covered=13 coverage="complete"
  }
}
``
[[/hero/sinclair]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp]] Sinclair patch history))
## [[/hero/sinclair]]((Sinclair))
==ability:vexing-bolt:
[[/ability/vexing-bolt]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp]] Vexing Bolt change history))
### [[/ability/vexing-bolt]]((Vexing Bolt))
- Vexing Bolt cooldown increased from 15 to 24
- Vexing Bolt T1 changed from -4s Cooldown to "Bolt Apply -25% Fire Rate for 5s"
- Vexing Bolt T2 changed from "Bolt Apply -25% Fire Rate for 5s" to -13s Cooldown
==
=

=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.5008 pick=0.4443 matches=133575 days=14 total=3607920 covered=14 coverage="complete"
    after win=0.4936 pick=0.4367 matches=110789 days=13 total=3044340 covered=13 coverage="complete"
  }
  high {
    before win=0.5228 pick=0.5141 matches=6536 days=14 total=152568 covered=14 coverage="complete"
    after win=0.5007 pick=0.4994 matches=5390 days=13 total=129528 covered=13 coverage="complete"
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
==ability:crow-familiar:
[[/ability/crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow Familiar change history))
### [[/ability/crow-familiar]]((Crow Familiar))
- Crow Familiar duration spirit scaling reduced from 0.03 to 0.024
==
==ability:crow-familiar-health-drain:
[[/ability/crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow Familiar Health Drain change history))
### [[/ability/crow-familiar]]((Crow Familiar Health Drain))
- Crow Familiar Health Drain reduced from 3% to 2.3%
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Infuser"]} />
``

=item:infuser:
``attr:
impact closed=#true {
  all {
    before win=0.5159 pick=0.1889 matches=681524 days=14 total=3607920 covered=14 coverage="complete"
    after win=0.5096 pick=0.18 matches=548065 days=13 total=3044340 covered=13 coverage="complete"
  }
  high {
    before win=0.5042 pick=0.2972 matches=45338 days=14 total=152568 covered=14 coverage="complete"
    after win=0.5008 pick=0.2695 matches=34906 days=13 total=129528 covered=13 coverage="complete"
  }
}
``
[[/item/infuser]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp]] Infuser patch history))
## [[/item/infuser]]((Infuser))
- Spirit Lifesteal reduced from 20% to 15%
- Bonus Spirit reduced from 16 to 13
=