``meta:
title "04-04-2025 Update"
thread_id "60284"
published "2025-04-04T16:35:38-0700"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
content_text "Added an option to allow canceling abilities with the ability key to the main options page. Soul orb spawn delay range increased from 0.2-0.7 to 0.4-0.7 Soul orb size increased by 10% Soul orb lag compensation buffer increased from 120ms to 140ms Fixed issues with denying melee soul orbs Fixed various other timing related bugs with Soul orbs Fixed shotguns doing too much damage to Guardians Removed the outer lanes teleporters Sprint increased by +0.5 for all heroes Removed the top of the mid arch from being able to be occupied Lifesteal provided by things like Soul Shredder bullets now properly diminishes in stacking with other sources of lifesteal Fix an edge case where a player can claim the Rejuv but also get parried Fixed spellslinger headshots providing more bonuses than intended Fixed some misc mispredictions during Ice Path movement Fixed Ice Path being overly sticky for allies Fixed Ivy, Viscous and Magic Carpet moving faster than desired when holding the soul urn Urn reveal time reduced from 25s to 15s Urn speed limit increased from 13 m/s to 15 m/s Wall Jump's behavior has been reworked so that lateral velocity is now modified by WASD movement direction into/away from the wall Mantle now requires pushing WASD Direction toward a ledge Improved Camera positions while character is backed up against walls When attaching to a zipline, movement direction can override the travel direction When holding \"Jump/Mantle\" after attaching to a rope, continue to move up the rope Calico Health growth per boon reduced from 41 to 34 Leaping Slash Heal reduced from 50 to 40 Leaping Slash Heal Spirit Scaling reduced from 1.6 to 1.1 Holliday Powder Keg T2 bonus damage reduced from 100 to 80 Crackshot T2 bonus damage reduced from 85 to 60 Mirage Djinn's Mark T2 reduced from +4s Multiplier Duration to +2.5s Seven Health Regen reduced from 3 to 1.5 Sinclair Vexing Bolt cooldown increased from 15 to 24 Vexing Bolt T1 changed from -4s Cooldown to \"Bolt Apply -25% Fire Rate for 5s\" Vexing Bolt T2 changed from \"Bolt Apply -25% Fire Rate for 5s\" to -13s Cooldown Vindicta Crow Familiar duration spirit scaling reduced from 0.03 to 0.024 Crow Familiar Health Drain reduced from 3% to 2.3% Infuser Spirit Lifesteal reduced from 20% to 15% Bonus Spirit reduced from 16 to 13"
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
[[/hero/calico]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico patch history))
## [[/hero/calico]]((Calico))

- Health growth per boon reduced from 41 to 34

==ability:leaping-slash-heal:
### [[/hero/calico?ability=leaping-slash]]((Leaping Slash Heal))

- Leaping Slash Heal reduced from 50 to 40
==
==ability:leaping-slash-heal-spirit-scaling:
### [[/hero/calico?ability=leaping-slash]]((Leaping Slash Heal Spirit Scaling))

- Leaping Slash Heal Spirit Scaling reduced from 1.6 to 1.1
==
=
=hero:holliday:
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))

==ability:powder-keg:
[[/hero/holliday?ability=powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/hero/holliday?ability=powder-keg]]((Powder Keg))

- Powder Keg T2 bonus damage reduced from 100 to 80
==
==ability:crackshot:
[[/hero/holliday?ability=crackshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp]] Crackshot change history))
### [[/hero/holliday?ability=crackshot]]((Crackshot))

- Crackshot T2 bonus damage reduced from 85 to 60
==
=
=hero:mirage:
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))

==ability:djinn-s-mark:
[[/hero/mirage?ability=djinns-mark]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp]] Djinn's Mark change history))
### [[/hero/mirage?ability=djinns-mark]]((Djinn's Mark))

- Djinn's Mark T2 reduced from +4s Multiplier Duration to +2.5s
==
=
=hero:seven:
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))

- Health Regen reduced from 3 to 1.5
=
=hero:sinclair:
[[/hero/sinclair]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp]] Sinclair patch history))
## [[/hero/sinclair]]((Sinclair))

==ability:vexing-bolt:
[[/hero/sinclair?ability=vexing-bolt]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp]] Vexing Bolt change history))
### [[/hero/sinclair?ability=vexing-bolt]]((Vexing Bolt))

- Vexing Bolt cooldown increased from 15 to 24
- Vexing Bolt T1 changed from -4s Cooldown to "Bolt Apply -25% Fire Rate for 5s"
- Vexing Bolt T2 changed from "Bolt Apply -25% Fire Rate for 5s" to -13s Cooldown
==
=
=hero:vindicta:
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))

==ability:crow-familiar:
[[/hero/vindicta?ability=crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow Familiar change history))
### [[/hero/vindicta?ability=crow-familiar]]((Crow Familiar))

- Crow Familiar duration spirit scaling reduced from 0.03 to 0.024
==
==ability:crow-familiar-health-drain:
### [[/hero/vindicta?ability=crow-familiar]]((Crow Familiar Health Drain))

- Crow Familiar Health Drain reduced from 3% to 2.3%
==
=
# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Infuser"]} />
``

=item:infuser:
[[/item/infuser]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp]] Infuser patch history))
## [[/item/infuser]]((Infuser))

- Spirit Lifesteal reduced from 20% to 15%
- Bonus Spirit reduced from 16 to 13
=