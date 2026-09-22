``attr:
title "09-01-2024 Update"
thread_id "24093"
published "2024-09-01T13:40:48-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Rope climb speed increased from 11 to 13 Rope activation range increased from 2.2m to 2.4m Fixed an HTML parsing exploit with builds Infernus Flame Dash now has 30% Slow Resistance Ivy Air Drop self cast time reduced from 2 to 1.3 Seven Storm Cloud: Spirit Power DPS scaling reduced from 0.8 to 0.7 Viscous Puddle Punch base cast range from 60m to 40m Puddle Punch T2 damage from +50 to +35 Puddle Punch base cooldown increased from 24 to 28 Puddle Punch now knocks people less high into the air Base clip reduced from 24 to 20, Alt Fire now requires 5 bullets"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-08-30" to="2024-09-01"
  after from="2024-09-02" to="2024-09-12"
}
``

# General Changes

- Rope climb speed increased from 11 to 13
- Rope activation range increased from 2.2m to 2.4m
- Fixed an HTML parsing exploit with builds

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Infernus", "Ivy", "Seven", "Viscous"]} />
``

=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=945 days=2 total=13668 covered=2 coverage="complete"
    after win=0.4868 pick=0.7747 matches=5965 days=10 total=92400 covered=10 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
==ability:flame-dash:
[[/ability/flame-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash change history))
### [[/ability/flame-dash]]((Flame Dash))
- Flame Dash now has 30% Slow Resistance
==
=

=hero:ivy:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=488 days=2 total=13668 covered=2 coverage="complete"
    after win=0.4938 pick=0.3471 matches=2673 days=10 total=92400 covered=10 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))
==ability:air-drop:
[[/ability/air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/ability/air-drop]]((Air Drop))
- Air Drop self cast time reduced from 2 to 1.3
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.5923 pick=0.885 matches=1008 days=2 total=13668 covered=2 coverage="complete"
    after win=0.574 pick=0.9091 matches=7000 days=10 total=92400 covered=10 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:storm-cloud:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/ability/storm-cloud]]((Storm Cloud))
- Storm Cloud: Spirit Power DPS scaling reduced from 0.8 to 0.7
==
=

=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=420 days=2 total=13668 covered=2 coverage="complete"
    after win=0.4861 pick=0.374 matches=2880 days=10 total=92400 covered=10 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))
==ability:puddle-punch:
[[/ability/puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/ability/puddle-punch]]((Puddle Punch))
- Puddle Punch base cast range from 60m to 40m
- Puddle Punch T2 damage from +50 to +35
- Puddle Punch base cooldown increased from 24 to 28
- Puddle Punch now knocks people less high into the air
==
- Base clip reduced from 24 to 20, Alt Fire now requires 5 bullets
=