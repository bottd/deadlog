``attr:
title "11-10-2024 Update"
thread_id "45689"
published "2024-11-10T08:19:27-0800"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Soul Sharing ratios post-lane reduced from 100/100/66/50/40/33% to 100/75/50/35/28/22% (for 1/2/3/4/5/6 players) Yamato Shadow Transformation Bullet and Spirit Resist reduced from 60% to 50% Shadow Transformation Heal reduced from 30% to 25% Shadow Transformation duration reduced from 6s to 5.5s Paradox Paradoxical Swap time increased by 0.1s (to help with camera)"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-11-08" to="2024-11-10"
  after from="2024-11-11" to="2024-11-14"
}
``

# General Changes

- Soul Sharing ratios post-lane reduced from 100/100/66/50/40/33% to 100/75/50/35/28/22% (for 1/2/3/4/5/6 players)

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Paradox", "Yamato"]} />
``

=hero:paradox:
``attr:
impact closed=#true {
  all {
    before win=0.4782 pick=0.5003 matches=98873 days=2 total=2371716 covered=2 coverage="complete"
    after win=0.487 pick=0.4979 matches=117419 days=3 total=2829660 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))
==ability:paradoxical-swap:
[[/ability/paradoxical-swap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp]] Paradoxical Swap change history))
### [[/ability/paradoxical-swap]]((Paradoxical Swap))
- Paradoxical Swap time increased by 0.1s (to help with camera)
==
=

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.5544 pick=0.5599 matches=110657 days=2 total=2371716 covered=2 coverage="complete"
    after win=0.5335 pick=0.6552 matches=154495 days=3 total=2829660 covered=3 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))
- Shadow Transformation Bullet and Spirit Resist reduced from 60% to 50%
==
==ability:shadow-transformation-heal:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation Heal change history))
### [[/ability/shadow-transformation]]((Shadow Transformation Heal))
- Shadow Transformation Heal reduced from 30% to 25%
==
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))
- Shadow Transformation duration reduced from 6s to 5.5s
==
=