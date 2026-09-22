``attr:
title "03-25-2026 Update"
thread_id "121766"
published "2026-03-25T17:36:42-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Street Brawl: You now have all AP unlocked by round 5 Bebop Base health regen increased from 1.5 to 2.5 Calico Leaping Slash base damage increased from 50 to 60 Celeste Base regen reduced from 2 to 1 Dazzling Trick T3 silence duration reduced from +2s to +1.5s Doorman Call Bell slow increased from 30% to 35% Call Bell radius increased from 5m to 6m Doorway Distance increased from 60m to 70m Luggage Cart T2 now deals 75 bonus damage (0.6 spirit scaling) when hitting a wall Luggage Cart T3 stun duration reduced from 1.5s to 1.25s Graves Grasping Hands spirit damage scaling reduced from 1.9 to 1.6 Grasping Hands T3 reduced from 2 Ghouls Summoned to 1 Grasping Hands T3 now also reduces cooldown by 10s Borrowed Decree Ghoul HP reduced from 200 + 12/boon to 180 + 8/boon Borrowed Decree Ghouls damage reduced from 150 to 135 Jar of Dead T2 no longer grants +4s Duration Jar of Dead T3 changed from \"+2 Deadheads and Deadheads apply Essence Theft\" to \"+2 Deadheads and +4s Duration\" Essence Theft T3 changed from \"+1 tether and improved targeting angle\" to \"Your summons now apply Essence Theft\" Holliday Bounce Pad now provides allies with air control and stomp damage Crackshot T3 increased from -4s/-2s for hero/npc headshots to -6s/-3s Infernus Afterburn DPS increased from 12 to 14 Afterburn T1 DPS increased from +14 to +16 Concussive Combustion T2 increased from +85% Explosion Lifesteal to +100% Concussive Combustion T2 increased from -65s Cooldown to -75s Kelvin Frost Grenade damage spirit scaling reduced from 0.8 to 0.7 Frost Grenade T3 damage spirit scaling reduced from 0.9 to 0.8 Lady Geist Gun Falloff reduced from 20->52 to 17->48 Life Drain spirit scaling reduced from 0.536 to 0.43 Life Drain T3 spirit scaling increased from +0.3 to +0.4 McGinnis Medicinal Specter T3 duration increased from +1s to +1.5s Spectral Wall duration increased from 5s to 5.5s Mirage Fire Scarabs Health Steal Per Sec reduced from 10 to 9 Fire Scarabs T1 reduced from +8 Health Steal Per Sec to +7 Fire Scarabs T3 spirit scaling reduced from +0.23 to +0.17 Dust Devil cooldown increased from 32s to 36s Dust Devil T2 cooldown increased from -8s to -12s Dust Devil T3 now also increases lift duration by 0.3s Djinn's Mark spirit scaling reduced from 0.44 to 0.38 Rem Naptime T3 now also provides unstoppable while channeling Silver Bullet damage rescaled from 5.5+0.1206 to 5.4+0.124 Slam Fire cooldown increased from 22s to 25s Slam Fire T2 cooldown increased from -7s to -10s Venator Consecrating Grenade impact damage scaling reduced from 1.2 to 1.0 Gut Shot wall stun reduced from 0.65s to 0.6s Gut Shot damage scaling reduced from 1 to 0.8 Victor Restored health per boon back to 46 No longer has -30% Lifesteal Effectiveness Jumpstart T3 no longer purges non-ult debuffs Jumpstart T3 now adds +50% Debuff Resistance and cuts existing debuff durations by 50% Aura of Suffering radius reduced from 9.5m to 9m"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2026-03-22" to="2026-03-26"
  after from="2026-03-27" to="2026-04-10"
}
``

# General Changes

- Street Brawl: You now have all AP unlocked by round 5

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Bebop", "Calico", "Celeste", "Doorman", "Graves", "Holliday", "Infernus", "Kelvin", "Lady Geist", "McGinnis", "Mirage", "Rem", "Silver", "Venator", "Victor"]} />
``

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.4481 pick=0.3207 matches=87594 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.4463 pick=0.3529 matches=343729 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.4398 pick=0.3727 matches=15738 days=4 total=506748 covered=4 coverage="complete"
    after win=0.444 pick=0.445 matches=66965 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
- Base health regen increased from 1.5 to 2.5
=

=hero:calico:
``attr:
impact closed=#true {
  all {
    before win=0.4774 pick=0.195 matches=53270 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.4834 pick=0.1815 matches=176835 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.4758 pick=0.2541 matches=10732 days=4 total=506748 covered=4 coverage="complete"
    after win=0.4847 pick=0.2281 matches=34327 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/calico]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico patch history))
## [[/hero/calico]]((Calico))
==ability:leaping-slash:
[[/ability/leaping-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp]] Leaping Slash change history))
### [[/ability/leaping-slash]]((Leaping Slash))
- Leaping Slash base damage increased from 50 to 60
==
=

=hero:celeste:
``attr:
impact closed=#true {
  all {
    before win=0.4739 pick=0.3393 matches=92674 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.4625 pick=0.3306 matches=321994 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.4881 pick=0.3038 matches=12829 days=4 total=506748 covered=4 coverage="complete"
    after win=0.4746 pick=0.2878 matches=43316 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/celeste]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp]] Celeste patch history))
## [[/hero/celeste]]((Celeste))
- Base regen reduced from 2 to 1
==ability:dazzling-trick:
[[/ability/dazzling-trick]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp]] Dazzling Trick change history))
### [[/ability/dazzling-trick]]((Dazzling Trick))
- Dazzling Trick T3 silence duration reduced from +2s to +1.5s
==
=

=hero:doorman:
``attr:
impact closed=#true {
  all {
    before win=0.476 pick=0.3433 matches=93764 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.5031 pick=0.3795 matches=369664 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.4529 pick=0.2772 matches=11705 days=4 total=506748 covered=4 coverage="complete"
    after win=0.4967 pick=0.3288 matches=49476 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/the-doorman]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp]] Doorman patch history))
## [[/hero/the-doorman]]((Doorman))
==ability:call-bell:
[[/ability/call-bell]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp]] Call Bell change history))
### [[/ability/call-bell]]((Call Bell))
- Call Bell slow increased from 30% to 35%
- Call Bell radius increased from 5m to 6m
==
==ability:doorway-distance:
[[/ability/doorway]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp]] Doorway Distance change history))
### [[/ability/doorway]]((Doorway Distance))
- Doorway Distance increased from 60m to 70m
==
==ability:luggage-cart:
[[/ability/luggage-cart]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp]] Luggage Cart change history))
### [[/ability/luggage-cart]]((Luggage Cart))
- Luggage Cart T2 now deals 75 bonus damage (0.6 spirit scaling) when hitting a wall
- Luggage Cart T3 stun duration reduced from 1.5s to 1.25s
==
=

=hero:graves:
``attr:
impact closed=#true {
  all {
    before win=0.582 pick=0.631 matches=172366 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.5253 pick=0.5661 matches=551444 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.5921 pick=0.6085 matches=25696 days=4 total=506748 covered=4 coverage="complete"
    after win=0.5294 pick=0.5 matches=75239 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/graves]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp]] Graves patch history))
## [[/hero/graves]]((Graves))
==ability:grasping-hands:
[[/ability/grasping-hands]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp]] Grasping Hands change history))
### [[/ability/grasping-hands]]((Grasping Hands))
- Grasping Hands spirit damage scaling reduced from 1.9 to 1.6
- Grasping Hands T3 reduced from 2 Ghouls Summoned to 1
- Grasping Hands T3 now also reduces cooldown by 10s
==
==ability:borrowed-decree-ghoul-hp:
[[/ability/borrowed-decree]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp]] Borrowed Decree Ghoul HP change history))
### [[/ability/borrowed-decree]]((Borrowed Decree Ghoul HP))
- Borrowed Decree Ghoul HP reduced from 200 + 12/boon to 180 + 8/boon
==
==ability:borrowed-decree-ghouls:
[[/ability/borrowed-decree]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp]] Borrowed Decree Ghouls change history))
### [[/ability/borrowed-decree]]((Borrowed Decree Ghouls))
- Borrowed Decree Ghouls damage reduced from 150 to 135
==
==ability:jar-of-dead:
[[/ability/jar-of-dead]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp]] Jar of Dead change history))
### [[/ability/jar-of-dead]]((Jar of Dead))
- Jar of Dead T2 no longer grants +4s Duration
- Jar of Dead T3 changed from "+2 Deadheads and Deadheads apply Essence Theft" to "+2 Deadheads and +4s Duration"
==
==ability:essence-theft:
[[/ability/essence-theft]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_siphon.webp]] Essence Theft change history))
### [[/ability/essence-theft]]((Essence Theft))
- Essence Theft T3 changed from "+1 tether and improved targeting angle" to "Your summons now apply Essence Theft"
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.4403 pick=0.1461 matches=39905 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.443 pick=0.1596 matches=155483 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.4402 pick=0.1322 matches=5582 days=4 total=506748 covered=4 coverage="complete"
    after win=0.4398 pick=0.1559 matches=23458 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:bounce-pad:
[[/ability/bounce-pad]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad change history))
### [[/ability/bounce-pad]]((Bounce Pad))
- Bounce Pad now provides allies with air control and stomp damage
==
==ability:crackshot:
[[/ability/crackshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp]] Crackshot change history))
### [[/ability/crackshot]]((Crackshot))
- Crackshot T3 increased from -4s/-2s for hero/npc headshots to -6s/-3s
==
=

=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=0.5249 pick=0.392 matches=107077 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.5366 pick=0.4809 matches=468394 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.5021 pick=0.3691 matches=15587 days=4 total=506748 covered=4 coverage="complete"
    after win=0.5135 pick=0.4979 matches=74928 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
==ability:afterburn-dps:
[[/ability/afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn DPS change history))
### [[/ability/afterburn]]((Afterburn DPS))
- Afterburn DPS increased from 12 to 14
==
==ability:afterburn:
[[/ability/afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/ability/afterburn]]((Afterburn))
- Afterburn T1 DPS increased from +14 to +16
==
==ability:concussive-combustion:
[[/ability/concussive-combustion]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp]] Concussive Combustion change history))
### [[/ability/concussive-combustion]]((Concussive Combustion))
- Concussive Combustion T2 increased from +85% Explosion Lifesteal to +100%
- Concussive Combustion T2 increased from -65s Cooldown to -75s
==
=

=hero:kelvin:
``attr:
impact closed=#true {
  all {
    before win=0.5501 pick=0.2579 matches=70442 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.5448 pick=0.255 matches=248389 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.5535 pick=0.3272 matches=13819 days=4 total=506748 covered=4 coverage="complete"
    after win=0.5414 pick=0.306 matches=46057 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))
==ability:frost-grenade:
[[/ability/frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/ability/frost-grenade]]((Frost Grenade))
- Frost Grenade damage spirit scaling reduced from 0.8 to 0.7
- Frost Grenade T3 damage spirit scaling reduced from 0.9 to 0.8
==
=

=hero:lady-geist:
``attr:
impact closed=#true {
  all {
    before win=0.5184 pick=0.3328 matches=90905 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.514 pick=0.3149 matches=306733 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.5079 pick=0.358 matches=15119 days=4 total=506748 covered=4 coverage="complete"
    after win=0.5044 pick=0.3207 matches=48265 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))
- Gun Falloff reduced from 20->52 to 17->48
==ability:life-drain:
[[/ability/life-drain]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp]] Life Drain change history))
### [[/ability/life-drain]]((Life Drain))
- Life Drain spirit scaling reduced from 0.536 to 0.43
- Life Drain T3 spirit scaling increased from +0.3 to +0.4
==
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.4851 pick=0.2073 matches=56630 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.5009 pick=0.2052 matches=199897 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.4883 pick=0.1654 matches=6985 days=4 total=506748 covered=4 coverage="complete"
    after win=0.5113 pick=0.1623 matches=24423 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
==ability:medicinal-specter:
[[/ability/medicinal-specter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp]] Medicinal Specter change history))
### [[/ability/medicinal-specter]]((Medicinal Specter))
- Medicinal Specter T3 duration increased from +1s to +1.5s
==
==ability:spectral-wall:
[[/ability/spectral-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp]] Spectral Wall change history))
### [[/ability/spectral-wall]]((Spectral Wall))
- Spectral Wall duration increased from 5s to 5.5s
==
=

=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.5165 pick=0.3407 matches=93053 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.5068 pick=0.3067 matches=298726 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.5267 pick=0.4415 matches=18643 days=4 total=506748 covered=4 coverage="complete"
    after win=0.5104 pick=0.3374 matches=50774 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))
==ability:fire-scarabs:
[[/ability/fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/ability/fire-scarabs]]((Fire Scarabs))
- Fire Scarabs Health Steal Per Sec reduced from 10 to 9
- Fire Scarabs T1 reduced from +8 Health Steal Per Sec to +7
- Fire Scarabs T3 spirit scaling reduced from +0.23 to +0.17
==
==ability:dust-devil:
[[/ability/dust-devil]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp]] Dust Devil change history))
### [[/ability/dust-devil]]((Dust Devil))
- Dust Devil cooldown increased from 32s to 36s
- Dust Devil T2 cooldown increased from -8s to -12s
- Dust Devil T3 now also increases lift duration by 0.3s
==
==ability:djinn-s-mark:
[[/ability/djinns-mark]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp]] Djinn's Mark change history))
### [[/ability/djinns-mark]]((Djinn's Mark))
- Djinn's Mark spirit scaling reduced from 0.44 to 0.38
==
=

=hero:rem:
``attr:
impact closed=#true {
  all {
    before win=0.4589 pick=0.5967 matches=162990 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.4562 pick=0.5697 matches=554898 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.4505 pick=0.4186 matches=17676 days=4 total=506748 covered=4 coverage="complete"
    after win=0.4436 pick=0.3905 matches=58760 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/rem]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp]] Rem patch history))
## [[/hero/rem]]((Rem))
==ability:naptime:
[[/ability/naptime]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp]] Naptime change history))
### [[/ability/naptime]]((Naptime))
- Naptime T3 now also provides unstoppable while channeling
==
=

=hero:silver:
``attr:
impact closed=#true {
  all {
    before win=0.4746 pick=0.3388 matches=92545 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.4804 pick=0.3306 matches=322063 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.4917 pick=0.3025 matches=12776 days=4 total=506748 covered=4 coverage="complete"
    after win=0.493 pick=0.2914 matches=43848 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/silver]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp]] Silver patch history))
## [[/hero/silver]]((Silver))
- Bullet damage rescaled from 5.5+0.1206 to 5.4+0.124
==ability:slam-fire:
[[/ability/slam-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_slamfire.webp]] Slam Fire change history))
### [[/ability/slam-fire]]((Slam Fire))
- Slam Fire cooldown increased from 22s to 25s
- Slam Fire T2 cooldown increased from -7s to -10s
==
=

=hero:venator:
``attr:
impact closed=#true {
  all {
    before win=0.4661 pick=0.4443 matches=121369 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.4669 pick=0.4302 matches=419083 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.479 pick=0.4725 matches=19952 days=4 total=506748 covered=4 coverage="complete"
    after win=0.4704 pick=0.4676 matches=70364 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/venator]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp]] Venator patch history))
## [[/hero/venator]]((Venator))
==ability:consecrating-grenade:
[[/ability/consecrating-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_grenade.webp]] Consecrating Grenade change history))
### [[/ability/consecrating-grenade]]((Consecrating Grenade))
- Consecrating Grenade impact damage scaling reduced from 1.2 to 1.0
==
==ability:gutshot:
[[/ability/gutshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_shotgun.webp]] Gutshot change history))
### [[/ability/gutshot]]((Gutshot))
- Gut Shot wall stun reduced from 0.65s to 0.6s
==
==ability:gut-shot:
[[/ability/gutshot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_shotgun.webp]] Gut Shot change history))
### [[/ability/gutshot]]((Gut Shot))
- Gut Shot damage scaling reduced from 1 to 0.8
==
=

=hero:victor:
``attr:
impact closed=#true {
  all {
    before win=0.5247 pick=0.216 matches=58992 days=4 total=3277889 covered=4 coverage="complete"
    after win=0.4915 pick=0.1762 matches=171585 days=14 total=11688831 covered=14 coverage="complete"
  }
  high {
    before win=0.5142 pick=0.1458 matches=6155 days=4 total=506748 covered=4 coverage="complete"
    after win=0.4667 pick=0.1068 matches=16076 days=14 total=1805867 covered=14 coverage="complete"
  }
}
``
[[/hero/victor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp]] Victor patch history))
## [[/hero/victor]]((Victor))
- Restored health per boon back to 46
- No longer has -30% Lifesteal Effectiveness
==ability:jumpstart:
[[/ability/jumpstart]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp]] Jumpstart change history))
### [[/ability/jumpstart]]((Jumpstart))
- Jumpstart T3 no longer purges non-ult debuffs
- Jumpstart T3 now adds +50% Debuff Resistance and cuts existing debuff durations by 50%
==
==ability:aura-of-suffering:
[[/ability/aura-of-suffering]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp]] Aura of Suffering change history))
### [[/ability/aura-of-suffering]]((Aura of Suffering))
- Aura of Suffering radius reduced from 9.5m to 9m
==
=