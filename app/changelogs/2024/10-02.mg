``meta:
title "10-02-2024 Update"
thread_id "35439"
published "2024-10-02T17:18:25-0700"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
content_text "Respawn time at 20min reduced from 50s to 45s (was 40s previous patch) Zipline Boost cooldown reduced from 340s (5.6min) to 280s (4.6min) Fixed certain player name lengths not being reportable Ivy Kudzu Bomb damage spirit scaling reduced from 0.7 to 0.6 Kudzu Bomb T3 damage reduced from +60 to +50 Kudzu Bomb vertical radius is now a fixed 2m pancake shape instead of the full radius of the ability Air Drop explosion now respects line of sight Mirage Bullet radius reduced from 8 to 6 Tornado time for victims to reach max height reduced from 0.3s to 0.2s Tornado lift duration reduced from 1.2s to 1.1s Fixed Tornado being castable while busy (such as while channeling Traveler) Djinn's Mark T1 now only applies the slow when the multiplier is 2x or higher Djinn's Mark damage is now treated as a DoT in terms of zipline rules (doesn't prevent ziplining or knock you off) Fixed Djinn's Mark applying bullet procs with Return Fire Pocket Fixed Mystic Reverb causing Affliction damage be lethal"
``

# General Changes

- Respawn time at 20min reduced from 50s to 45s (was 40s previous patch)
- Zipline Boost cooldown reduced from 340s (5.6min) to 280s (4.6min)
- Fixed certain player name lengths not being reportable

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Ivy", "Mirage", "Pocket"]} />
``

=hero:ivy:
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))

==ability:kudzu-bomb:
### Kudzu Bomb

- Kudzu Bomb damage spirit scaling reduced from 0.7 to 0.6
- Kudzu Bomb T3 damage reduced from +60 to +50

- Kudzu Bomb vertical radius is now a fixed 2m pancake shape instead of the full radius of the ability
==
==ability:air-drop:
[[/hero/ivy?ability=air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/hero/ivy?ability=air-drop]]((Air Drop))

- Air Drop explosion now respects line of sight
==
=
=hero:mirage:
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))

- Bullet radius reduced from 8 to 6

==ability:dust-devil:
[[/hero/mirage?ability=dust-devil]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp]] Dust Devil change history))
### [[/hero/mirage?ability=dust-devil]]((Dust Devil))

- Tornado time for victims to reach max height reduced from 0.3s to 0.2s
- Tornado lift duration reduced from 1.2s to 1.1s
- Fixed Tornado being castable while busy (such as while channeling Traveler)
==
==ability:djinn-s-mark:
[[/hero/mirage?ability=djinns-mark]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp]] Djinn's Mark change history))
### [[/hero/mirage?ability=djinns-mark]]((Djinn's Mark))

- Djinn's Mark T1 now only applies the slow when the multiplier is 2x or higher
- Djinn's Mark damage is now treated as a DoT in terms of zipline rules (doesn't prevent ziplining or knock you off)

- Fixed Djinn's Mark applying bullet procs with Return Fire
==
=
=hero:pocket:
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))

==ability:affliction:
[[/hero/pocket?ability=affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/hero/pocket?ability=affliction]]((Affliction))

- Fixed Mystic Reverb causing Affliction damage be lethal
==
=