``attr:
title "05-24-2024 Update"
thread_id "1359"
published "2024-05-24T16:58:19-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Withering Whip: No longer has +1 Stamina Withering Whip: Duration reduced from 3.5s to 3s Withering Whip: Bullet Resist Reduction reduced from -20% to -14% Decay Cast range reduced from 30m to 15m"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from=#null to=#null
  after from="2024-05-25" to="2024-05-30"
}
``

# General Changes

- Withering Whip: No longer has +1 Stamina
- Withering Whip: Duration reduced from 3.5s to 3s
- Withering Whip: Bullet Resist Reduction reduced from -20% to -14%

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Decay"]} />
``

=item:decay:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="complete"
    after win=#null pick=#null matches=14 days=4 total=684 covered=5 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="complete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))
- Cast range reduced from 30m to 15m
=