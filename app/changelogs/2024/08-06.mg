``attr:
title "08-06-2024 Update"
thread_id "14283"
published "2024-08-06T16:19:49-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Various adjustments to orb spawning behavior (a bit less horizontal motion and some more variance and details to its motion) Server performance improvements New categories added to builds are now wider by default Added a console command: deadlock_get_old_builds, which will download and print out all of the build data for your account prior to the new builds feature Viscous Added a directional arrow particle effect to Goo Ball for Viscous Added additional particles while using Goo Ball Fixed hit detection on Puddle Punch and Goo Ball Fixed Puddle Punch having 2x the range of the tooltip. Fixed Puddle Punch being able to target behind puddle Fixed Puddle Punch using Guardians as a surface to punch from Puddle Punch Range reduced from 70m to 60m Splatter now deals less damage if it hits the same target multiple times. 66% damage for the second hit, 33% damage for the third hit. Splatter Cooldown from 18s to 20s Splatter Base Damage from 120 to 110"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2024-08-02" to="2024-08-06"
  after from="2024-08-07" to="2024-08-15"
}
``

# General Changes

- Various adjustments to orb spawning behavior (a bit less horizontal motion and some more variance and details to its motion)
- Server performance improvements
- New categories added to builds are now wider by default
- Added a console command: deadlock_get_old_builds, which will download and print out all of the build data for your account prior to the new builds feature

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Viscous"]} />
``

=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=62 days=4 total=984 covered=4 coverage="complete"
    after win=#null pick=#null matches=310 days=8 total=7836 covered=8 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))
==ability:goo-ball:
[[/ability/goo-ball]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp]] Goo Ball change history))
### [[/ability/goo-ball]]((Goo Ball))
- Added a directional arrow particle effect to Goo Ball for Viscous
- Added additional particles while using Goo Ball
==
==ability:puddle-punch:
[[/ability/puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/ability/puddle-punch]]((Puddle Punch))
- Fixed hit detection on Puddle Punch and Goo Ball
- Fixed Puddle Punch having 2x the range of the tooltip.
- Fixed Puddle Punch being able to target behind puddle
- Fixed Puddle Punch using Guardians as a surface to punch from
==
==ability:puddle-punch-range:
[[/ability/puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch Range change history))
### [[/ability/puddle-punch]]((Puddle Punch Range))
- Puddle Punch Range reduced from 70m to 60m
==
==ability:splatter:
[[/ability/splatter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp]] Splatter change history))
### [[/ability/splatter]]((Splatter))
- Splatter now deals less damage if it hits the same target multiple times. 66% damage for the second hit, 33% damage for the third hit.
- Splatter Cooldown from 18s to 20s
- Splatter Base Damage from 120 to 110
==
=