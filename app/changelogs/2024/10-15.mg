``attr:
title "10-15-2024 Update"
thread_id "38925"
published "2024-10-15T17:07:44-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Urn now reveals you after 20s from initial pickup Urn sprint changed from +3/5 for winning/losing team to +2/6 First flex slot is now granted after 3 Guardians die instead of 4 Base kill bounty reduced from 225 to 150 (still scales to 1400 over time) Respawn time at 20 minutes reduced from 45s to 40s T3 Golden Statues spawn time moved from 25 min to 30 min Range to attack lane Guardians increased from 19m to 20m Seven Lightning Ball T3 reduced from +2m Radius to +1m Shiv Rage decay rate increased from 0.25 to 0.3 Rage buffer duration reduced from 12s to 10s"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-10-12" to="2024-10-16"
  after from="2024-10-17" to="2024-10-18"
}
``

# General Changes

- Urn now reveals you after 20s from initial pickup
- Urn sprint changed from +3/5 for winning/losing team to +2/6
- First flex slot is now granted after 3 Guardians die instead of 4
- Base kill bounty reduced from 225 to 150 (still scales to 1400 over time)
- Respawn time at 20 minutes reduced from 45s to 40s
- T3 Golden Statues spawn time moved from 25 min to 30 min
- Range to attack lane Guardians increased from 19m to 20m

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Seven", "Shiv"]} />
``

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.558 pick=0.8998 matches=138596 days=4 total=1848456 covered=4 coverage="complete"
    after win=0.5409 pick=0.9068 matches=75743 days=1 total=1002288 covered=1 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:lightning-ball:
[[/ability/lightning-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp]] Lightning Ball change history))
### [[/ability/lightning-ball]]((Lightning Ball))
- Lightning Ball T3 reduced from +2m Radius to +1m
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.5184 pick=0.6593 matches=101561 days=4 total=1848456 covered=4 coverage="complete"
    after win=0.514 pick=0.6624 matches=55330 days=1 total=1002288 covered=1 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
- Rage decay rate increased from 0.25 to 0.3
- Rage buffer duration reduced from 12s to 10s
=