``attr:
title "09-19-2024 Update"
thread_id "31166"
published "2024-09-19T17:58:06-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Replaced the recent soul duplication hotfix with new behavior. Pre 10 min, lanes now always split orbs when there are more heroes than the assigned participants for that lane (3+ people in a dual lane, 2+ people in a solo). Previously it only split with 3+ people regardless of the lane, which is what allowed soul abuses when dipping into a solo lane. Private lobbies can now assign players to duo and solo lanes Fixed some recent bugs with Vindicta Flight that could cause some large bursts in a direction Fixed being able to shoot while using Ethereal Shift and flying with Vindicta Veil Walker Fire Rate reduced from 30% to 20%"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-09-18" to="2024-09-20"
  after from="2024-09-21" to="2024-09-26"
}
``

# General Changes

- Replaced the recent soul duplication hotfix with new behavior. Pre 10 min, lanes now always split orbs when there are more heroes than the assigned participants for that lane (3+ people in a dual lane, 2+ people in a solo). Previously it only split with 3+ people regardless of the lane, which is what allowed soul abuses when dipping into a solo lane.
- Private lobbies can now assign players to duo and solo lanes
- Fixed some recent bugs with Vindicta Flight that could cause some large bursts in a direction
- Fixed being able to shoot while using Ethereal Shift and flying with Vindicta

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Veil Walker"]} />
``

=item:veil-walker:
``attr:
impact closed=#true {
  all {
    before win=0.5102 pick=0.0628 matches=1033 days=2 total=16452 covered=2 coverage="complete"
    after win=0.5079 pick=0.0676 matches=2910 days=5 total=43044 covered=5 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))
- Fire Rate reduced from 30% to 20%
=