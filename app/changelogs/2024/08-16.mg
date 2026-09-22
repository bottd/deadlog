``attr:
title "08-16-2024 Update"
thread_id "17251"
published "2024-08-16T15:28:51-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Fixed spectating ending 1 minute before the game ended Fixed Hero Demo starting you at max level Fixed Lady Geist not being able to jump during Life Drain Fixed the boon level display in the hero pages not working correctly Changed default shop music back to original Shiv Gun base damage reduced from 6.3 to 5.7 Serrated Knives collision size reduced by 10% Serrated Knives projectile speed reduced by 10% Serrated Knives base damage reduced from 75 to 35 Serrated Knives spirit scaling reduced from 1 to 0.6 Serrated Knives DPS spirit scaling reduced from 0.2 to 0.16 Serrated Knives T3 reduced from +75 Damage and +5 Bleed to +40 Damage and +5 Bleed Fixed Serrated Knives bouncing to other units even if it did not impact the target Fixed Rage and Bloodletting not clearing out on death Fixed Bloodletting deferred damage waking him up from sleep Fixed Killing Blow falling through the world sometimes Ivy Restored previous audio processing Air Drop cooldown increased from 70s to 80s Air Drop duration reduced from 20s to 17s Air Drop bomb no longer silences in the base (now part of t3) Air Drop bomb slow duration increased from 3s to 4.5s Air Drop T2 now also has +5m radius Air Drop T3 no longer has +12m radius Air Drop T3 no longer extends debuff duration by +2s Air Drop T3 silences enemies for 4.5s"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from=#null to=#null
  after from="2024-08-17" to="2024-08-19"
}
``

# General Changes

- Fixed spectating ending 1 minute before the game ended
- Fixed Hero Demo starting you at max level
- Fixed Lady Geist not being able to jump during Life Drain
- Fixed the boon level display in the hero pages not working correctly
- Changed default shop music back to original

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Ivy", "Shiv"]} />
``

=hero:ivy:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="complete"
    after win=#null pick=#null matches=161 days=2 total=4008 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="complete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))
- Restored previous audio processing
==ability:air-drop:
[[/ability/air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/ability/air-drop]]((Air Drop))
- Air Drop cooldown increased from 70s to 80s
- Air Drop duration reduced from 20s to 17s
- Air Drop bomb no longer silences in the base (now part of t3)
- Air Drop bomb slow duration increased from 3s to 4.5s
- Air Drop T2 now also has +5m radius
- Air Drop T3 no longer has +12m radius
- Air Drop T3 no longer extends debuff duration by +2s
- Air Drop T3 silences enemies for 4.5s
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="complete"
    after win=#null pick=#null matches=211 days=2 total=4008 covered=2 coverage="complete"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="complete"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage="incomplete"
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
- Gun base damage reduced from 6.3 to 5.7
==ability:serrated-knives:
[[/ability/serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives change history))
### [[/ability/serrated-knives]]((Serrated Knives))
- Serrated Knives collision size reduced by 10%
- Serrated Knives projectile speed reduced by 10%
- Serrated Knives base damage reduced from 75 to 35
- Serrated Knives spirit scaling reduced from 1 to 0.6
==
==ability:serrated-knives-dps:
[[/ability/serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives DPS change history))
### [[/ability/serrated-knives]]((Serrated Knives DPS))
- Serrated Knives DPS spirit scaling reduced from 0.2 to 0.16
==
==ability:serrated-knives:
[[/ability/serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives change history))
### [[/ability/serrated-knives]]((Serrated Knives))
- Serrated Knives T3 reduced from +75 Damage and +5 Bleed to +40 Damage and +5 Bleed
- Fixed Serrated Knives bouncing to other units even if it did not impact the target
==
==ability:bloodletting:
[[/ability/bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting change history))
### [[/ability/bloodletting]]((Bloodletting))
- Fixed Rage and Bloodletting not clearing out on death
- Fixed Bloodletting deferred damage waking him up from sleep
==
==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))
- Fixed Killing Blow falling through the world sometimes
==
=