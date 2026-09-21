``attr:
title "03-25-2026 Update"
thread_id "121766"
published "2026-03-25T17:36:42-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Street Brawl: You now have all AP unlocked by round 5 Bebop Base health regen increased from 1.5 to 2.5 Calico Leaping Slash base damage increased from 50 to 60 Celeste Base regen reduced from 2 to 1 Dazzling Trick T3 silence duration reduced from +2s to +1.5s Doorman Call Bell slow increased from 30% to 35% Call Bell radius increased from 5m to 6m Doorway Distance increased from 60m to 70m Luggage Cart T2 now deals 75 bonus damage (0.6 spirit scaling) when hitting a wall Luggage Cart T3 stun duration reduced from 1.5s to 1.25s Graves Grasping Hands spirit damage scaling reduced from 1.9 to 1.6 Grasping Hands T3 reduced from 2 Ghouls Summoned to 1 Grasping Hands T3 now also reduces cooldown by 10s Borrowed Decree Ghoul HP reduced from 200 + 12/boon to 180 + 8/boon Borrowed Decree Ghouls damage reduced from 150 to 135 Jar of Dead T2 no longer grants +4s Duration Jar of Dead T3 changed from \"+2 Deadheads and Deadheads apply Essence Theft\" to \"+2 Deadheads and +4s Duration\" Essence Theft T3 changed from \"+1 tether and improved targeting angle\" to \"Your summons now apply Essence Theft\" Holliday Bounce Pad now provides allies with air control and stomp damage Crackshot T3 increased from -4s/-2s for hero/npc headshots to -6s/-3s Infernus Afterburn DPS increased from 12 to 14 Afterburn T1 DPS increased from +14 to +16 Concussive Combustion T2 increased from +85% Explosion Lifesteal to +100% Concussive Combustion T2 increased from -65s Cooldown to -75s Kelvin Frost Grenade damage spirit scaling reduced from 0.8 to 0.7 Frost Grenade T3 damage spirit scaling reduced from 0.9 to 0.8 Lady Geist Gun Falloff reduced from 20->52 to 17->48 Life Drain spirit scaling reduced from 0.536 to 0.43 Life Drain T3 spirit scaling increased from +0.3 to +0.4 McGinnis Medicinal Specter T3 duration increased from +1s to +1.5s Spectral Wall duration increased from 5s to 5.5s Mirage Fire Scarabs Health Steal Per Sec reduced from 10 to 9 Fire Scarabs T1 reduced from +8 Health Steal Per Sec to +7 Fire Scarabs T3 spirit scaling reduced from +0.23 to +0.17 Dust Devil cooldown increased from 32s to 36s Dust Devil T2 cooldown increased from -8s to -12s Dust Devil T3 now also increases lift duration by 0.3s Djinn's Mark spirit scaling reduced from 0.44 to 0.38 Rem Naptime T3 now also provides unstoppable while channeling Silver Bullet damage rescaled from 5.5+0.1206 to 5.4+0.124 Slam Fire cooldown increased from 22s to 25s Slam Fire T2 cooldown increased from -7s to -10s Venator Consecrating Grenade impact damage scaling reduced from 1.2 to 1.0 Gut Shot wall stun reduced from 0.65s to 0.6s Gut Shot damage scaling reduced from 1 to 0.8 Victor Restored health per boon back to 46 No longer has -30% Lifesteal Effectiveness Jumpstart T3 no longer purges non-ult debuffs Jumpstart T3 now adds +50% Debuff Resistance and cuts existing debuff durations by 50% Aura of Suffering radius reduced from 9.5m to 9m"
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
    before win=0.4482 pick=0.3206 matches=87259 days=4
    after win=0.4463 pick=0.3529 matches=343693 days=14
  }
  high {
    before win=0.4399 pick=0.3725 matches=15675 days=4
    after win=0.444 pick=0.445 matches=66960 days=14
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
    before win=0.4774 pick=0.1951 matches=53100 days=4
    after win=0.4834 pick=0.1815 matches=176817 days=14
  }
  high {
    before win=0.4757 pick=0.2544 matches=10707 days=4
    after win=0.4847 pick=0.2281 matches=34326 days=14
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
    before win=0.4739 pick=0.3394 matches=92355 days=4
    after win=0.4625 pick=0.3306 matches=321960 days=14
  }
  high {
    before win=0.4881 pick=0.3039 matches=12788 days=4
    after win=0.4746 pick=0.2878 matches=43314 days=14
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
    before win=0.4761 pick=0.3434 matches=93447 days=4
    after win=0.503 pick=0.3795 matches=369631 days=14
  }
  high {
    before win=0.4529 pick=0.2773 matches=11669 days=4
    after win=0.4967 pick=0.3288 matches=49474 days=14
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
    before win=0.5819 pick=0.631 matches=171719 days=4
    after win=0.5253 pick=0.5661 matches=551380 days=14
  }
  high {
    before win=0.5921 pick=0.6085 matches=25610 days=4
    after win=0.5294 pick=0.5 matches=75235 days=14
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
    before win=0.4403 pick=0.1461 matches=39763 days=4
    after win=0.443 pick=0.1596 matches=155468 days=14
  }
  high {
    before win=0.44 pick=0.1322 matches=5564 days=4
    after win=0.4398 pick=0.1559 matches=23457 days=14
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
    before win=0.5248 pick=0.392 matches=106675 days=4
    after win=0.5366 pick=0.4809 matches=468345 days=14
  }
  high {
    before win=0.5017 pick=0.369 matches=15528 days=4
    after win=0.5135 pick=0.4979 matches=74924 days=14
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
    before win=0.5502 pick=0.2579 matches=70178 days=4
    after win=0.5448 pick=0.255 matches=248357 days=14
  }
  high {
    before win=0.5538 pick=0.3272 matches=13771 days=4
    after win=0.5414 pick=0.3061 matches=46055 days=14
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
    before win=0.5184 pick=0.3326 matches=90513 days=4
    after win=0.514 pick=0.3149 matches=306698 days=14
  }
  high {
    before win=0.5082 pick=0.3579 matches=15063 days=4
    after win=0.5044 pick=0.3207 matches=48262 days=14
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
    before win=0.4853 pick=0.2073 matches=56410 days=4
    after win=0.5009 pick=0.2052 matches=199874 days=14
  }
  high {
    before win=0.4881 pick=0.1655 matches=6966 days=4
    after win=0.5113 pick=0.1623 matches=24423 days=14
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
    before win=0.5165 pick=0.3405 matches=92668 days=4
    after win=0.5068 pick=0.3067 matches=298695 days=14
  }
  high {
    before win=0.527 pick=0.4416 matches=18585 days=4
    after win=0.5104 pick=0.3374 matches=50772 days=14
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
    before win=0.4587 pick=0.5967 matches=162390 days=4
    after win=0.4562 pick=0.5697 matches=554827 days=14
  }
  high {
    before win=0.4504 pick=0.4183 matches=17604 days=4
    after win=0.4436 pick=0.3905 matches=58756 days=14
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
    before win=0.4746 pick=0.3389 matches=92225 days=4
    after win=0.4804 pick=0.3306 matches=322030 days=14
  }
  high {
    before win=0.492 pick=0.3026 matches=12735 days=4
    after win=0.493 pick=0.2914 matches=43845 days=14
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
    before win=0.4661 pick=0.4442 matches=120880 days=4
    after win=0.4669 pick=0.4302 matches=419037 days=14
  }
  high {
    before win=0.4791 pick=0.4722 matches=19872 days=4
    after win=0.4704 pick=0.4676 matches=70362 days=14
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
    before win=0.5247 pick=0.2161 matches=58803 days=4
    after win=0.4915 pick=0.1761 matches=171560 days=14
  }
  high {
    before win=0.5142 pick=0.1459 matches=6141 days=4
    after win=0.4667 pick=0.1068 matches=16074 days=14
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