``attr:
title "03-16-2025 Update"
thread_id "58880"
published "2025-03-16T17:30:59-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Neutral bounty increased by 5% Sinner's Sacrifice initial spawn time reduced from 10 min to 8 min (respawn rate is still 5 min) Fixed a bug with Neutral bounty later in the game being reduced by more than the initial intended -15% (this fix was released yesterday) Restorative Locket No longer grants +10% Spirit Resist Divine Barrier Shields reduced from 260 to 230"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2025-03-14" to="2025-03-17"
  after from="2025-03-18" to="2025-03-20"
}
``

# General Changes

- Neutral bounty increased by 5%
- Sinner's Sacrifice initial spawn time reduced from 10 min to 8 min (respawn rate is still 5 min)
- Fixed a bug with Neutral bounty later in the game being reduced by more than the initial intended -15% (this fix was released yesterday)

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Divine Barrier", "Restorative Locket"]} />
``

=item:divine-barrier:
[[/item/divine-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp]] Divine Barrier patch history))
## [[/item/divine-barrier]]((Divine Barrier))
- Shields reduced from 260 to 230
=

=item:restorative-locket:
``attr:
impact closed=#true {
  all {
    before win=0.5156 pick=0.0594 matches=50674 days=3 total=853812 covered=3 coverage="complete"
    after win=0.4932 pick=0.0526 matches=26104 days=2 total=496236 covered=2 coverage="complete"
  }
  high {
    before win=0.5145 pick=0.1296 matches=4449 days=3 total=34320 covered=3 coverage="complete"
    after win=0.483 pick=0.1025 matches=2317 days=2 total=22596 covered=2 coverage="complete"
  }
}
``
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))
- No longer grants +10% Spirit Resist
=