``attr:
title "10-07-2024 Update"
thread_id "36441"
published "2024-10-07T12:45:09-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Fixed various cases where you could target/select units behind walls with abilities (like Yamato's Flying Strike) Wraith Card Trick Spirit scaling reduced from 1.5 to 1.2 Shadow Weave Ambush Fire Rate reduced from +40% to +30%"
``

# General Changes

- Fixed various cases where you could target/select units behind walls with abilities (like Yamato's Flying Strike)

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Wraith"]} />
``

=hero:wraith:
``attr:
impact closed=#true {
  all {
    before win=0.4907 pick=0.8262 matches=86421 days=3
    after win=0.4813 pick=0.8185 matches=78844 days=2
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))
==ability:card-trick-spirit:
[[/ability/card-trick]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp]] Card Trick Spirit change history))
### [[/ability/card-trick]]((Card Trick Spirit))
- Card Trick Spirit scaling reduced from 1.5 to 1.2
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Shadow Weave"]} />
``

=item:shadow-weave:
``attr:
impact closed=#true {
  all {
    before win=0.5487 pick=0.0197 matches=24727 days=3
    after win=0.5328 pick=0.0198 matches=22913 days=2
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=0 days=0
  }
}
``
[[/item/shadow-weave]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.webp]] Shadow Weave patch history))
## [[/item/shadow-weave]]((Shadow Weave))
- Ambush Fire Rate reduced from +40% to +30%
=