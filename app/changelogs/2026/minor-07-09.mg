``attr:
title "Minor Update - 07-09-2026"
steam_gid "1836506165584438"
published "2026-07-09T19:26:55.000Z"
author "IceFrog"
author_image "/assets/authors/icefrog.webp"
major_update #false
content_text "Urn Runner sprint bonus reduced from +2m to 0 (trailing bonus reduced from +7m to +5m) Urn Runner move speed bonus reduced from +3.5m to +2m Urn Runner Stamina Recovery increased from +15% to +25% Urn talking frequency increased from every 8s to every 6s Urn talking sound distance increased (easier to hear a nearby Urn Runner) Unstable Rift warning time reduced from 25s to 20s Rift Troopers now have Spirit Resist (30/35/40/45%) Rift Troopers now have Melee Resistance (25%) Rift Troopers spawn interval increased from every 0.3s to 0.5s (spawns slightly more staggered) Unstable Rift comeback resist aura radius increased from 20m to 35m Rift Troopers max comeback count increased from 12 to 14 Objectives bounty split for nearby heroes reduced from 40% to 30% (this means slightly more portion of the bounty is split team wide rather than towards an individual player) Billy Rising Ram T3 spirit scaling reduced from 0.035 to 0.03 Doorman Bullet damage rescaled from 29.26 + 1.1/boon to 26 + 1.19 Crit scaling reduced from -25% to -30% Hotel Guest T3 increased from 13s Cooldown on Failure to Check Out to 15s Drifter Bullet damage per boon reduced from +0.616 to +0.49 Bloodscent T3 reduced from +12% to +11% Stalker's Mark cooldown increased from 20s to 24s Stalker's Mark T2 increased from -8s Cooldown to -12s Stalker's Mark T3 reduced from +2% Bleed to +1.5% Graves Jar of Dead T1 heal spirit scaling increased from 0.1 to 0.16 Jar of Dead now build up faster from neutral creeps Grasping Hands immobilize duration reduced from 1.25s to 1s Grasping Hands T3 cooldown increased from -10s to -14s Essence Theft now procs from melee hits Essence Theft T3 now also increases Max Steal Targets from 3 to 4 Borrowed Decree T1 changed from \"-15s Cooldown\" to \"-15s Cooldown and +25% Ghoul Speed\" Borrowed Decree T2 changed from \"+25% Ghoul Speed and +10s Duration\" to \"-0.3s Time to Spawn and +10s Duration\" Haze Sleep Dagger T2 now also applies 15 Fixation Stacks Sleep Dagger T2 reduced from -18s Cooldown to -17s Holliday Powder Keg spirit scaling reduced from 1.2 to 1.05 Mirage Fire Scarabs T3 spirit scaling reduced from +0.17 to +0.13 Dust Devil T3 spirit scaling reduced from +1 to +0.6 Djinn's Mark cooldown reduced from 3s to 2.75 Djinn's Mark T3 cooldown reduced from -1s Cooldown to -0.75s Traveler T3 increased from -70s Cooldown to -90s Pocket Affliction duration reduced from 11s to 10s Shiv Serrated Knives T3 spirit scaling reduced from +0.09 to +0.07 Slice and Dice spirit scaling reduced from 1.44 to 1.2 Slice and Dice T2 reduced from -6% Spirit Resist to -4% Bloodletting cooldown increased from 20s to 25s Bloodletting T1 increased from -10s Cooldown to -15s Bloodletting Damage Cleared reduced from 35% to 30% Bloodletting T2 Damage Cleared increased from 35% to 40% Killing Blow Health Threshold reduced from 20% to 18% Killing Blow T3 Health Threshold increased from +8% to +10% Silver Lycan Curse cooldown reduced from 80s to 60s Victor Shocking Reanimation cooldown reduced from 275s to 240s Viscous Splatter T3 spirit scaling reduced from +1.0 to +0.9 Yamato Flying Slash range reduced from 28m to 26m Flying Slash T3 Charge Delay increased from 3s to 4s Flying Slash T3 Ally Targeting now requires alt cast input Scourge Max Health Per Second reduced from 2.6% to 2.5%"
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2026-07-02" to="2026-07-09"
  after from="2026-07-10" to="2026-07-24"
}
``

# General Changes

- Urn Runner sprint bonus reduced from +2m to 0 (trailing bonus reduced from +7m to +5m)
- Urn Runner move speed bonus reduced from +3.5m to +2m
- Urn Runner Stamina Recovery increased from +15% to +25%
- Urn talking frequency increased from every 8s to every 6s
- Urn talking sound distance increased (easier to hear a nearby Urn Runner)
- Unstable Rift warning time reduced from 25s to 20s
- Rift Troopers now have Spirit Resist (30/35/40/45%)
- Rift Troopers now have Melee Resistance (25%)
- Rift Troopers spawn interval increased from every 0.3s to 0.5s (spawns slightly more staggered)
- Unstable Rift comeback resist aura radius increased from 20m to 35m
- Rift Troopers max comeback count increased from 12 to 14
- Objectives bounty split for nearby heroes reduced from 40% to 30% (this means slightly more portion of the bounty is split team wide rather than towards an individual player)

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Billy", "Doorman", "Drifter", "Graves", "Haze", "Holliday", "Mirage", "Pocket", "Shiv", "Silver", "Victor", "Viscous", "Yamato"]} />
``

=hero:billy:
``attr:
impact closed=#true {
  all {
    before win=0.5017 pick=0.3834 matches=109660 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.5043 pick=0.3979 matches=223664 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.5141 pick=0.3543 matches=17887 days=7 total=605746 covered=7 coverage="complete"
    after win=0.5135 pick=0.3582 matches=34293 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/billy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp]] Billy patch history))
## [[/hero/billy]]((Billy))
==ability:rising-ram:
[[/ability/rising-ram]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp]] Rising Ram change history))
### [[/ability/rising-ram]]((Rising Ram))
- Rising Ram T3 spirit scaling reduced from 0.035 to 0.03
==
=

=hero:doorman:
``attr:
impact closed=#true {
  all {
    before win=0.5073 pick=0.2353 matches=67296 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.4941 pick=0.2276 matches=127943 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.5119 pick=0.2084 matches=10518 days=7 total=605746 covered=7 coverage="complete"
    after win=0.497 pick=0.1969 matches=18855 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/the-doorman]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp]] Doorman patch history))
## [[/hero/the-doorman]]((Doorman))
- Bullet damage rescaled from 29.26 + 1.1/boon to 26 + 1.19
- Crit scaling reduced from -25% to -30%
==ability:hotel-guest:
[[/ability/hotel-guest]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_elevator.webp]] Hotel Guest change history))
### [[/ability/hotel-guest]]((Hotel Guest))
- Hotel Guest T3 increased from 13s Cooldown on Failure to Check Out to 15s
==
=

=hero:drifter:
``attr:
impact closed=#true {
  all {
    before win=0.5488 pick=0.5494 matches=157144 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.514 pick=0.4715 matches=265050 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.5481 pick=0.6578 matches=33206 days=7 total=605746 covered=7 coverage="complete"
    after win=0.5099 pick=0.551 matches=52756 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/drifter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp]] Drifter patch history))
## [[/hero/drifter]]((Drifter))
- Bullet damage per boon reduced from +0.616 to +0.49
==ability:bloodscent:
[[/ability/bloodscent]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp]] Bloodscent change history))
### [[/ability/bloodscent]]((Bloodscent))
- Bloodscent T3 reduced from +12% to +11%
==
==ability:stalker-s-mark:
[[/ability/stalkers-mark]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_stalkersmark.webp]] Stalker's Mark change history))
### [[/ability/stalkers-mark]]((Stalker's Mark))
- Stalker's Mark cooldown increased from 20s to 24s
- Stalker's Mark T2 increased from -8s Cooldown to -12s
- Stalker's Mark T3 reduced from +2% Bleed to +1.5%
==
=

=hero:graves:
``attr:
impact closed=#true {
  all {
    before win=0.5301 pick=0.3215 matches=91968 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.5527 pick=0.3807 matches=214000 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.5083 pick=0.1604 matches=8096 days=7 total=605746 covered=7 coverage="complete"
    after win=0.5353 pick=0.2494 matches=23880 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/graves]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp]] Graves patch history))
## [[/hero/graves]]((Graves))
==ability:jar-of-dead:
[[/ability/jar-of-dead]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp]] Jar of Dead change history))
### [[/ability/jar-of-dead]]((Jar of Dead))
- Jar of Dead T1 heal spirit scaling increased from 0.1 to 0.16
- Jar of Dead now build up faster from neutral creeps
==
==ability:grasping-hands:
[[/ability/grasping-hands]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp]] Grasping Hands change history))
### [[/ability/grasping-hands]]((Grasping Hands))
- Grasping Hands immobilize duration reduced from 1.25s to 1s
- Grasping Hands T3 cooldown increased from -10s to -14s
==
==ability:essence-theft:
[[/ability/essence-theft]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_siphon.webp]] Essence Theft change history))
### [[/ability/essence-theft]]((Essence Theft))
- Essence Theft now procs from melee hits
- Essence Theft T3 now also increases Max Steal Targets from 3 to 4
==
==ability:borrowed-decree:
[[/ability/borrowed-decree]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp]] Borrowed Decree change history))
### [[/ability/borrowed-decree]]((Borrowed Decree))
- Borrowed Decree T1 changed from "-15s Cooldown" to "-15s Cooldown and +25% Ghoul Speed"
- Borrowed Decree T2 changed from "+25% Ghoul Speed and +10s Duration" to "-0.3s Time to Spawn and +10s Duration"
==
=

=hero:haze:
``attr:
impact closed=#true {
  all {
    before win=0.518 pick=0.4482 matches=128187 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.5373 pick=0.5862 matches=329524 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.4908 pick=0.3769 matches=19025 days=7 total=605746 covered=7 coverage="complete"
    after win=0.5193 pick=0.6207 matches=59430 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))
==ability:sleep-dagger:
[[/ability/sleep-dagger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp]] Sleep Dagger change history))
### [[/ability/sleep-dagger]]((Sleep Dagger))
- Sleep Dagger T2 now also applies 15 Fixation Stacks
- Sleep Dagger T2 reduced from -18s Cooldown to -17s
==
=

=hero:holliday:
``attr:
impact closed=#true {
  all {
    before win=0.4843 pick=0.2518 matches=72019 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.4772 pick=0.2121 matches=119241 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.4999 pick=0.292 matches=14738 days=7 total=605746 covered=7 coverage="complete"
    after win=0.4928 pick=0.2399 matches=22966 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/holliday]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday patch history))
## [[/hero/holliday]]((Holliday))
==ability:powder-keg:
[[/ability/powder-keg]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp]] Powder Keg change history))
### [[/ability/powder-keg]]((Powder Keg))
- Powder Keg spirit scaling reduced from 1.2 to 1.05
==
=

=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.4885 pick=0.2526 matches=72238 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.4848 pick=0.254 matches=142767 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.5008 pick=0.3117 matches=15734 days=7 total=605746 covered=7 coverage="complete"
    after win=0.4954 pick=0.2898 matches=27744 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))
==ability:fire-scarabs:
[[/ability/fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/ability/fire-scarabs]]((Fire Scarabs))
- Fire Scarabs T3 spirit scaling reduced from +0.17 to +0.13
==
==ability:dust-devil:
[[/ability/dust-devil]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp]] Dust Devil change history))
### [[/ability/dust-devil]]((Dust Devil))
- Dust Devil T3 spirit scaling reduced from +1 to +0.6
==
==ability:djinn-s-mark:
[[/ability/djinns-mark]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp]] Djinn's Mark change history))
### [[/ability/djinns-mark]]((Djinn's Mark))
- Djinn's Mark cooldown reduced from 3s to 2.75
- Djinn's Mark T3 cooldown reduced from -1s Cooldown to -0.75s
==
==ability:traveler:
[[/ability/traveler]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp]] Traveler change history))
### [[/ability/traveler]]((Traveler))
- Traveler T3 increased from -70s Cooldown to -90s
==
=

=hero:pocket:
``attr:
impact closed=#true {
  all {
    before win=0.4683 pick=0.2106 matches=60225 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.4649 pick=0.2299 matches=129224 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.4802 pick=0.2506 matches=12648 days=7 total=605746 covered=7 coverage="complete"
    after win=0.4709 pick=0.291 matches=27860 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))
==ability:affliction:
[[/ability/affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/ability/affliction]]((Affliction))
- Affliction duration reduced from 11s to 10s
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4978 pick=0.538 matches=153891 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.4758 pick=0.3908 matches=219698 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.4959 pick=0.6637 matches=33505 days=7 total=605746 covered=7 coverage="complete"
    after win=0.4769 pick=0.4766 matches=45633 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
==ability:serrated-knives:
[[/ability/serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives change history))
### [[/ability/serrated-knives]]((Serrated Knives))
- Serrated Knives T3 spirit scaling reduced from +0.09 to +0.07
==
==ability:slice-and-dice:
[[/ability/slice-and-dice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp]] Slice and Dice change history))
### [[/ability/slice-and-dice]]((Slice and Dice))
- Slice and Dice spirit scaling reduced from 1.44 to 1.2
- Slice and Dice T2 reduced from -6% Spirit Resist to -4%
==
==ability:bloodletting:
[[/ability/bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting change history))
### [[/ability/bloodletting]]((Bloodletting))
- Bloodletting cooldown increased from 20s to 25s
- Bloodletting T1 increased from -10s Cooldown to -15s
==
==ability:bloodletting-damage-cleared:
[[/ability/bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting Damage Cleared change history))
### [[/ability/bloodletting]]((Bloodletting Damage Cleared))
- Bloodletting Damage Cleared reduced from 35% to 30%
==
==ability:bloodletting:
[[/ability/bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting change history))
### [[/ability/bloodletting]]((Bloodletting))
- Bloodletting T2 Damage Cleared increased from 35% to 40%
==
==ability:killing-blow-health-threshold:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow Health Threshold change history))
### [[/ability/killing-blow]]((Killing Blow Health Threshold))
- Killing Blow Health Threshold reduced from 20% to 18%
==
==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))
- Killing Blow T3 Health Threshold increased from +8% to +10%
==
=

=hero:silver:
``attr:
impact closed=#true {
  all {
    before win=0.4388 pick=0.2225 matches=63630 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.4565 pick=0.2684 matches=150880 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.4577 pick=0.1822 matches=9195 days=7 total=605746 covered=7 coverage="complete"
    after win=0.4833 pick=0.2621 matches=25094 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/silver]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp]] Silver patch history))
## [[/hero/silver]]((Silver))
==ability:lycan-curse:
[[/ability/lycan-curse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp]] Lycan Curse change history))
### [[/ability/lycan-curse]]((Lycan Curse))
- Lycan Curse cooldown reduced from 80s to 60s
==
=

=hero:victor:
``attr:
impact closed=#true {
  all {
    before win=0.518 pick=0.3039 matches=86921 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.551 pick=0.3283 matches=184563 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.4855 pick=0.2151 matches=10859 days=7 total=605746 covered=7 coverage="complete"
    after win=0.5282 pick=0.2466 matches=23616 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/victor]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp]] Victor patch history))
## [[/hero/victor]]((Victor))
==ability:shocking-reanimation:
[[/ability/shocking-reanimation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp]] Shocking Reanimation change history))
### [[/ability/shocking-reanimation]]((Shocking Reanimation))
- Shocking Reanimation cooldown reduced from 275s to 240s
==
=

=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=0.4764 pick=0.2454 matches=70196 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.472 pick=0.2572 matches=144585 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.4778 pick=0.29 matches=14640 days=7 total=605746 covered=7 coverage="complete"
    after win=0.4703 pick=0.2908 matches=27839 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))
==ability:splatter:
[[/ability/splatter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp]] Splatter change history))
### [[/ability/splatter]]((Splatter))
- Splatter T3 spirit scaling reduced from +1.0 to +0.9
==
=

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.4973 pick=0.2965 matches=84814 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.4986 pick=0.302 matches=169760 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.5165 pick=0.3496 matches=17646 days=7 total=605746 covered=7 coverage="complete"
    after win=0.5151 pick=0.3437 matches=32911 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
==ability:flying-slash:
[[/ability/flying-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp]] Flying Slash change history))
### [[/ability/flying-slash]]((Flying Slash))
- Flying Slash range reduced from 28m to 26m
- Flying Slash T3 Charge Delay increased from 3s to 4s
- Flying Slash T3 Ally Targeting now requires alt cast input
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Scourge"]} />
``

=item:scourge:
``attr:
impact closed=#true {
  all {
    before win=0.5874 pick=0.0597 matches=204855 days=7 total=3432253 covered=7 coverage="complete"
    after win=0.5913 pick=0.0608 matches=410080 days=14 total=6745468 covered=14 coverage="complete"
  }
  high {
    before win=0.5876 pick=0.0805 matches=48779 days=7 total=605746 covered=7 coverage="complete"
    after win=0.5909 pick=0.0814 matches=93476 days=14 total=1148976 covered=14 coverage="complete"
  }
}
``
[[/item/scourge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.webp]] Scourge patch history))
## [[/item/scourge]]((Scourge))
- Max Health Per Second reduced from 2.6% to 2.5%
=