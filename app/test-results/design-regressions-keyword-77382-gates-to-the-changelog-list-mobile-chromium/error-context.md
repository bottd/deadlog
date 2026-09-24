# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: design-regressions.spec.ts >> keyword search from a patch navigates to the changelog list
- Location: e2e/design-regressions.spec.ts:67:1

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator: getByRole('combobox', { name: 'Hero, item, or keyword' })
Expected: "200"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveAttribute" getByRole('combobox', { name: 'Hero, item, or keyword' }) with timeout 5000ms
  - waiting for getByRole('combobox', { name: 'Hero, item, or keyword' })

```

```yaml
- link "Skip to content":
    - /url: '#main-content'
- banner:
    - navigation "Primary navigation":
        - link "deadlog.io - Home":
            - /url: /
            - text: deadlog
        - link "Heroes":
            - /url: /heroes
        - link "Items":
            - /url: /items
    - button "Search & filter"
- main:
    - link "Back to all changes":
        - /url: /
    - group: Contents
    - article:
        - heading "July 28th, 2026" [level=1]
        - text: IF
        - img "IceFrog"
        - text: By IceFrog at
        - time: 1:24 PM
        - text: 21 heroes 17 items
        - link "View original patch notes":
            - /url: https://store.steampowered.com/news/externalpost/steam_community_announcements/1839041357039193
        - button "Copy link to clipboard"
        - separator
        - region "Changelog details":
            - heading "General Changes" [level=2]
            - list:
                - listitem: Stamina bucket 3 heroes (slowest) have their ground dash time increased from 0.7s to 0.72s and air dash time from 0.49s to 0.51s
                - listitem: The Orb Spawners in base that give 10 souls on hit now split to nearby players on expire
                - listitem: Fixed the party member / team mate audio volume slider for voice communications
            - heading "Hero Changes" [level=2]
            - list "Affected heros":
                - listitem:
                    - link "Apollo":
                        - /url: '#apollo'
                - listitem:
                    - link "Billy":
                        - /url: '#billy'
                - listitem:
                    - link "Calico":
                        - /url: '#calico'
                - listitem:
                    - link "Celeste":
                        - /url: '#celeste'
                - listitem:
                    - link "The Doorman":
                        - /url: '#doorman'
                - listitem:
                    - link "Drifter":
                        - /url: '#drifter'
                - listitem:
                    - link "Dynamo":
                        - /url: '#dynamo'
                - listitem:
                    - link "Haze":
                        - /url: '#haze'
                - listitem:
                    - link "Ivy":
                        - /url: '#ivy'
                - listitem:
                    - link "Kelvin":
                        - /url: '#kelvin'
                - listitem:
                    - link "Lady Geist":
                        - /url: '#lady-geist'
                - listitem:
                    - link "Mina":
                        - /url: '#mina'
                - listitem:
                    - link "Mirage":
                        - /url: '#mirage'
                - listitem:
                    - link "Mo & Krill":
                        - /url: '#mo-krill'
                - listitem:
                    - link "Paige":
                        - /url: '#paige'
                - listitem:
                    - link "Pocket":
                        - /url: '#pocket'
                - listitem:
                    - link "Shiv":
                        - /url: '#shiv'
                - listitem:
                    - link "Silver":
                        - /url: '#silver'
                - listitem:
                    - link "Venator":
                        - /url: '#venator'
                - listitem:
                    - link "Viscous":
                        - /url: '#viscous'
                - listitem:
                    - link "Yamato":
                        - /url: '#yamato'
            - paragraph:
                - link "Apollo patch history":
                    - /url: /hero/apollo
            - heading "Apollo" [level=3]:
                - link "Apollo":
                    - /url: /hero/apollo
            - paragraph:
                - link "Riposte change history":
                    - /url: /ability/riposte
            - heading "Riposte" [level=4]:
                - link "Riposte":
                    - /url: /ability/riposte
            - list:
                - listitem: Riposte base stun duration increased from 0.6s to 0.8s
                - listitem: Riposte T3 changed from +1.6s Stun Duration to +60% Bullet, Spirit and Melee Lifesteal against the target for 7s
            - group: Current details for Riposte · client 6698
            - paragraph:
                - link "Billy patch history":
                    - /url: /hero/billy
            - heading "Billy" [level=3]:
                - link "Billy":
                    - /url: /hero/billy
            - paragraph:
                - link "Rising Ram change history":
                    - /url: /ability/rising-ram
            - heading "Rising Ram" [level=4]:
                - link "Rising Ram":
                    - /url: /ability/rising-ram
            - list:
                - listitem: Rising Ram T3 reduced from 8% Max Health to 7%
            - group: Current details for Rising Ram · client 6698
            - paragraph:
                - link "Calico patch history":
                    - /url: /hero/calico
            - heading "Calico" [level=3]:
                - link "Calico":
                    - /url: /hero/calico
            - paragraph:
                - link "Ava change history":
                    - /url: /ability/ava
            - heading "Ava" [level=4]:
                - link "Ava":
                    - /url: /ability/ava
            - list:
                - listitem: Ava T2 reduced from +45% Move Speed to +40%
                - listitem: Ava T3 reduced from +20% damage amp to +18%
            - group: Current details for Ava · client 6698
            - paragraph:
                - link "Celeste patch history":
                    - /url: /hero/celeste
            - heading "Celeste" [level=3]:
                - link "Celeste":
                    - /url: /hero/celeste
            - paragraph:
                - link "Shining Wonder change history":
                    - /url: /ability/shining-wonder
            - heading "Shining Wonder" [level=4]:
                - link "Shining Wonder":
                    - /url: /ability/shining-wonder
            - list:
                - listitem: Shining Wonder radius increased from 16.5m to 17.5m
                - listitem: Shining Wonder damage increased by 10%
                - listitem: Shining Wonder buffer duration increased from 3s to 3.25s
            - group: Current details for Shining Wonder · client 6698
            - paragraph:
                - link "Doorman patch history":
                    - /url: /hero/the-doorman
            - heading "Doorman" [level=3]:
                - link "Doorman":
                    - /url: /hero/the-doorman
            - list:
                - listitem: Bullet damage rescaled from 26 + 1.19/boon to 24 + 1.25
            - paragraph:
                - link "Call Bell Charge Time change history":
                    - /url: /ability/call-bell
            - heading "Call Bell Charge Time" [level=4]:
                - link "Call Bell Charge Time":
                    - /url: /ability/call-bell
            - list:
                - listitem: Call Bell Charge Time increased from 6s to 7s
            - paragraph:
                - link "Doorway change history":
                    - /url: /ability/doorway
            - heading "Doorway" [level=4]:
                - link "Doorway":
                    - /url: /ability/doorway
            - list:
                - listitem: Doorway duration reduced from 20s to 15s
                - listitem: Doorway T1 duration increased from +15s to +20s
                - listitem: Doorway T3 range reduced from +45m to +40m
            - group: Current details for Doorway · client 6698
            - paragraph:
                - link "Luggage Cart change history":
                    - /url: /ability/luggage-cart
            - heading "Luggage Cart" [level=4]:
                - link "Luggage Cart":
                    - /url: /ability/luggage-cart
            - list:
                - listitem: Luggage Cart damage reduced from 80 to 60
                - listitem: Luggage Cart T1 increased from +60 Damage to +80
                - listitem: Luggage Cart range reduced from 25m to 20m
                - listitem: Luggage Cart T2 increased from +20m Cast Range to +25m
            - group: Current details for Luggage Cart · client 6698
            - paragraph:
                - link "Drifter patch history":
                    - /url: /hero/drifter
            - heading "Drifter" [level=3]:
                - link "Drifter":
                    - /url: /hero/drifter
            - paragraph:
                - link "Rend change history":
                    - /url: /ability/rend
            - heading "Rend" [level=4]:
                - link "Rend":
                    - /url: /ability/rend
            - list:
                - listitem: Rend spirit scaling reduced from 1.8 to 1.7
                - listitem: Rend T3 silence duration reduced from 2.3s to 2s
            - group: Current details for Rend · client 6698
            - paragraph:
                - link "Dynamo patch history":
                    - /url: /hero/dynamo
            - heading "Dynamo" [level=3]:
                - link "Dynamo":
                    - /url: /hero/dynamo
            - paragraph:
                - link "Singularity change history":
                    - /url: /ability/singularity
            - heading "Singularity" [level=4]:
                - link "Singularity":
                    - /url: /ability/singularity
            - list:
                - listitem: Singularity cooldown reduced from 265s to 250s
            - group: Current details for Singularity · client 6698
            - paragraph:
                - link "Haze patch history":
                    - /url: /hero/haze
            - heading "Haze" [level=3]:
                - link "Haze":
                    - /url: /hero/haze
            - paragraph:
                - link "Sleep Dagger change history":
                    - /url: /ability/sleep-dagger
            - heading "Sleep Dagger" [level=4]:
                - link "Sleep Dagger":
                    - /url: /ability/sleep-dagger
            - list:
                - listitem: Sleep Dagger wake up time spirit scaling reduced from 0.003 to 0.002
                - listitem: Sleep Dagger damage spirit scaling reduced from 2.8 to 2.2
                - listitem: Sleep Dagger T2 changed from “-17s Cooldown and Applies 15 Fixation Stacks” to “+1s Sleep Duration and Applies 15 Fixation Stacks”
                - listitem: Sleep Dagger T3 changed from “+1s Sleep Duration and -50% Move and Dash Speed for 3s on wake-up” to “-17s Cooldown and -50% Move and Dash Speed for 3s on wake-up”
            - group: Current details for Sleep Dagger · client 6698
            - paragraph:
                - link "Fixation change history":
                    - /url: /ability/fixation
            - heading "Fixation" [level=4]:
                - link "Fixation":
                    - /url: /ability/fixation
            - list:
                - listitem: Fixation T3 reduced from +0.14 per Stack to +0.11
                - listitem: Fixation T3 now also scales with Weapon Damage (0.0003)
            - group: Current details for Fixation · client 6698
            - paragraph:
                - link "Ivy patch history":
                    - /url: /hero/ivy
            - heading "Ivy" [level=3]:
                - link "Ivy":
                    - /url: /hero/ivy
            - paragraph:
                - link "Stone Form change history":
                    - /url: /ability/stone-form
            - heading "Stone Form" [level=4]:
                - link "Stone Form":
                    - /url: /ability/stone-form
            - list:
                - listitem: Stone Form T3 spirit scaling reduced from +1.7 to +1.5
            - group: Current details for Stone Form · client 6698
            - paragraph:
                - link "Kelvin patch history":
                    - /url: /hero/kelvin
            - heading "Kelvin" [level=3]:
                - link "Kelvin":
                    - /url: /hero/kelvin
            - paragraph:
                - link "Frozen Shelter change history":
                    - /url: /ability/frozen-shelter
            - heading "Frozen Shelter" [level=4]:
                - link "Frozen Shelter":
                    - /url: /ability/frozen-shelter
            - list:
                - listitem: Frozen Shelter cooldown reduced from 195s to 185s
            - group: Current details for Frozen Shelter · client 6698
            - paragraph:
                - link "Lady Geist patch history":
                    - /url: /hero/lady-geist
            - heading "Lady Geist" [level=3]:
                - link "Lady Geist":
                    - /url: /hero/lady-geist
            - paragraph:
                - link "Life Drain change history":
                    - /url: /ability/life-drain
            - heading "Life Drain" [level=4]:
                - link "Life Drain":
                    - /url: /ability/life-drain
            - list:
                - listitem: Life Drain changed from 75% Damage to Heal to 100%
            - group: Current details for Life Drain · client 6698
            - paragraph:
                - link "Life Drain DPS change history":
                    - /url: /ability/life-drain
            - heading "Life Drain DPS" [level=4]:
                - link "Life Drain DPS":
                    - /url: /ability/life-drain
            - list:
                - listitem: Life Drain DPS reduced to provide the same effective heal as before but with less DPS
            - paragraph:
                - link "Malice change history":
                    - /url: /ability/malice
            - heading "Malice" [level=4]:
                - link "Malice":
                    - /url: /ability/malice
            - list:
                - listitem: Malice Damage amplification reduced from 8% to 7%
                - listitem: Malice T3 increased from +7% Damage Amp to +8%
            - group: Current details for Malice · client 6698
            - paragraph:
                - link "Mina patch history":
                    - /url: /hero/mina
            - heading "Mina" [level=3]:
                - link "Mina":
                    - /url: /hero/mina
            - paragraph:
                - link "Sanguine Retreat change history":
                    - /url: /ability/sanguine-retreat
            - heading "Sanguine Retreat" [level=4]:
                - link "Sanguine Retreat":
                    - /url: /ability/sanguine-retreat
            - list:
                - listitem: Sanguine Retreat recast time increased from 3.5s to 4s
                - listitem: Sanguine Retreat T3 cast range increased from +3m to +4m
            - group: Current details for Sanguine Retreat · client 6698
            - paragraph:
                - link "Mirage patch history":
                    - /url: /hero/mirage
            - heading "Mirage" [level=3]:
                - link "Mirage":
                    - /url: /hero/mirage
            - paragraph:
                - link "Fire Scarabs change history":
                    - /url: /ability/fire-scarabs
            - heading "Fire Scarabs" [level=4]:
                - link "Fire Scarabs":
                    - /url: /ability/fire-scarabs
            - list:
                - listitem: Fire Scarabs duration reduced from 7s to 5s
                - listitem: Fire Scarabs T2 reduced from +2 Charges to +1 Charge
                - listitem: Fire Scarabs T2 now also increases duration by 2s
            - group: Current details for Fire Scarabs · client 6698
            - paragraph:
                - link "Dust Devil change history":
                    - /url: /ability/dust-devil
            - heading "Dust Devil" [level=4]:
                - link "Dust Devil":
                    - /url: /ability/dust-devil
            - list:
                - listitem: Dust Devil T3 no longer increases Lift Duration by +0.3s
            - group: Current details for Dust Devil · client 6698
            - paragraph:
                - link "Djinn's Mark change history":
                    - /url: /ability/djinns-mark
            - heading "Djinn's Mark" [level=4]:
                - link "Djinn's Mark":
                    - /url: /ability/djinns-mark
            - list:
                - listitem: Fixed Djinn's Mark T3 still being -1s Cooldown instead of -0.75s
            - group: Current details for Djinn's Mark · client 6698
            - paragraph:
                - link "Mo & Krill patch history":
                    - /url: /hero/mo-krill
            - heading "Mo & Krill" [level=3]:
                - link "Mo & Krill":
                    - /url: /hero/mo-krill
            - paragraph:
                - link "Burrow change history":
                    - /url: /ability/burrow
            - heading "Burrow" [level=4]:
                - link "Burrow":
                    - /url: /ability/burrow
            - list:
                - listitem: Burrow cooldown no longer starts after the conclusion of the ability, now starts immediately
            - group: Current details for Burrow · client 6698
            - paragraph:
                - link "Combo change history":
                    - /url: /ability/combo
            - heading "Combo" [level=4]:
                - link "Combo":
                    - /url: /ability/combo
            - list:
                - listitem: Combo now lets you cast items while using it
            - group: Current details for Combo · client 6698
            - paragraph:
                - link "Paige patch history":
                    - /url: /hero/paige
            - heading "Paige" [level=3]:
                - link "Paige":
                    - /url: /hero/paige
            - paragraph:
                - link "Rallying Charge change history":
                    - /url: /ability/rallying-charge
            - heading "Rallying Charge" [level=4]:
                - link "Rallying Charge":
                    - /url: /ability/rallying-charge
            - list:
                - listitem: Rallying Charge cooldown reduced from 220s to 210s
            - group: Current details for Rallying Charge · client 6698
            - paragraph:
                - link "Pocket patch history":
                    - /url: /hero/pocket
            - heading "Pocket" [level=3]:
                - link "Pocket":
                    - /url: /hero/pocket
            - paragraph:
                - link "Flying Cloak change history":
                    - /url: /ability/flying-cloak
            - heading "Flying Cloak" [level=4]:
                - link "Flying Cloak":
                    - /url: /ability/flying-cloak
            - list:
                - listitem: Flying Cloak T3 reduced from -11s Cooldown to -10s
            - group: Current details for Flying Cloak · client 6698
            - paragraph:
                - link "Affliction DPS change history":
                    - /url: /ability/affliction
            - heading "Affliction DPS" [level=4]:
                - link "Affliction DPS":
                    - /url: /ability/affliction
            - list:
                - listitem: Affliction DPS reduced by ~6% (also reduces the spirit scaling and the upgrades)
            - paragraph:
                - link "Shiv patch history":
                    - /url: /hero/shiv
            - heading "Shiv" [level=3]:
                - link "Shiv":
                    - /url: /hero/shiv
            - list:
                - listitem: Stamina regen increased from 5.5s to 6s
            - paragraph:
                - link "Killing Blow change history":
                    - /url: /ability/killing-blow
            - heading "Killing Blow" [level=4]:
                - link "Killing Blow":
                    - /url: /ability/killing-blow
            - list:
                - listitem: Killing Blow recast window reduced from 20s to 16s
            - group: Current details for Killing Blow · client 6698
            - paragraph:
                - link "Silver patch history":
                    - /url: /hero/silver
            - heading "Silver" [level=3]:
                - link "Silver":
                    - /url: /hero/silver
            - list:
                - listitem: Gun falloff range reduced from 20m->46m to 17m→42m
            - paragraph:
                - link "Slam Fire change history":
                    - /url: /ability/slam-fire
            - heading "Slam Fire" [level=4]:
                - link "Slam Fire":
                    - /url: /ability/slam-fire
            - list:
                - listitem: Slam Fire now does 100% bonus damage against NPCs (troopers and neutrals, not objectives)
            - group: Current details for Slam Fire · client 6698
            - paragraph:
                - link "Lycan Curse change history":
                    - /url: /ability/lycan-curse
            - heading "Lycan Curse" [level=4]:
                - link "Lycan Curse":
                    - /url: /ability/lycan-curse
            - list:
                - listitem: Lycan Curse precast time increased from 0.2 to 0.3
                - listitem: Lycan Curse precast movespeed reduced from 7.6m to 2.5m
                - listitem: Lycan Curse T1 reduced from +20% Resists to +15%
            - group: Current details for Lycan Curse · client 6698
            - paragraph:
                - link "Venator patch history":
                    - /url: /hero/venator
            - heading "Venator" [level=3]:
                - link "Venator":
                    - /url: /hero/venator
            - list:
                - listitem: Sprint speed reduced from 1.5m to 1m
                - listitem: Bullet falloff range reduced from 20m-51m to 18m-47m
            - paragraph:
                - link "Ira Domini change history":
                    - /url: /ability/ira-domini
            - heading "Ira Domini" [level=4]:
                - link "Ira Domini":
                    - /url: /ability/ira-domini
            - list:
                - listitem: Ira Domini cooldown no longer starts after the conclusion of the ability, now starts immediately
                - listitem: Ira Domini blessed stakes damage increased from 100 to 115
            - group: Current details for Ira Domini · client 6698
            - paragraph:
                - link "Viscous patch history":
                    - /url: /hero/viscous
            - heading "Viscous" [level=3]:
                - link "Viscous":
                    - /url: /hero/viscous
            - paragraph:
                - link "Splatter change history":
                    - /url: /ability/splatter
            - heading "Splatter" [level=4]:
                - link "Splatter":
                    - /url: /ability/splatter
            - list:
                - listitem: Splatter damage reduced from 70 to 55
                - listitem: Splatter spirit ratio reduced from 0.8 to 0.7
                - listitem: Splatter base bounce count increased from 1 to 2
                - listitem: Splatter T3 bounce count reduced from +2 to +1
            - group: Current details for Splatter · client 6698
            - paragraph:
                - link "The Cube change history":
                    - /url: /ability/the-cube
            - heading "The Cube" [level=4]:
                - link "The Cube":
                    - /url: /ability/the-cube
            - list:
                - listitem: The Cube T3 reduced from -25s Cooldown to -20s
            - group: Current details for The Cube · client 6698
            - paragraph:
                - link "Puddle Punch change history":
                    - /url: /ability/puddle-punch
            - heading "Puddle Punch" [level=4]:
                - link "Puddle Punch":
                    - /url: /ability/puddle-punch
            - list:
                - listitem: Puddle Punch slow duration reduced from 4s to 3s
                - listitem: Puddle Punch slow increased from -20% to -30%
                - listitem: Puddle Punch cooldown reduced from 24s to 21s
            - group: Current details for Puddle Punch · client 6698
            - paragraph:
                - link "Goo Ball change history":
                    - /url: /ability/goo-ball
            - heading "Goo Ball" [level=4]:
                - link "Goo Ball":
                    - /url: /ability/goo-ball
            - list:
                - listitem: Goo Ball T2 increased from +10% Resists to +20%
            - group: Current details for Goo Ball · client 6698
            - paragraph:
                - link "Yamato patch history":
                    - /url: /hero/yamato
            - heading "Yamato" [level=3]:
                - link "Yamato":
                    - /url: /hero/yamato
            - paragraph:
                - link "Flying Slash change history":
                    - /url: /ability/flying-slash
            - heading "Flying Slash" [level=4]:
                - link "Flying Slash":
                    - /url: /ability/flying-slash
            - list:
                - listitem: Flying Slash T2 reduced from +40 Spirit Power to +35
                - listitem: Flying Slash T3 charges from +2 to +1
                - listitem: Flying Slash T3 Charge Time increased from 4s to 5s
            - group: Current details for Flying Slash · client 6698
            - heading "Item Changes" [level=2]
            - list "Affected items":
                - listitem:
                    - link "Crushing Fists":
                        - /url: '#crushing-fists'
                - listitem:
                    - link "Cursed Relic":
                        - /url: '#cursed-relic'
                - listitem:
                    - link "Diviner's Kevlar":
                        - /url: '#diviner-s-kevlar'
                - listitem:
                    - link "Echo Shard":
                        - /url: '#echo-shard'
                - listitem:
                    - link "Ethereal Shift":
                        - /url: '#ethereal-shift'
                - listitem:
                    - link "Frenzy":
                        - /url: '#frenzy'
                - listitem:
                    - link "Fury Trance":
                        - /url: '#fury-trance'
                - listitem:
                    - link "Lifestrike":
                        - /url: '#lifestrike'
                - listitem:
                    - link "Mystic Shot":
                        - /url: '#mystic-shot'
                - listitem:
                    - link "Restorative Locket":
                        - /url: '#restorative-locket'
                - listitem:
                    - link "Scourge":
                        - /url: '#scourge'
                - listitem:
                    - link "Slowing Bullets":
                        - /url: '#slowing-bullets'
                - listitem:
                    - link "Spirit Burn":
                        - /url: '#spirit-burn'
                - listitem:
                    - link "Spiritual Overflow":
                        - /url: '#spiritual-overflow'
                - listitem:
                    - link "Suppressor":
                        - /url: '#suppressor'
                - listitem:
                    - link "Tankbuster":
                        - /url: '#tankbuster'
                - listitem:
                    - link "Weighted Shots":
                        - /url: '#weighted-shots'
            - paragraph:
                - link "Crushing Fists patch history":
                    - /url: /item/crushing-fists
            - heading "Crushing Fists" [level=3]:
                - link "Crushing Fists":
                    - /url: /item/crushing-fists
            - list:
                - listitem: Max stacks stun duration increased from 0.5s to 0.75s
                - listitem: Bullet Resist reduction increased from -4% to -5% per stack
            - group: Current details for Crushing Fists · client 6698
            - paragraph:
                - link "Cursed Relic patch history":
                    - /url: /item/cursed-relic
            - heading "Cursed Relic" [level=3]:
                - link "Cursed Relic":
                    - /url: /item/cursed-relic
            - list:
                - listitem: No longer has -14% Damage Output innate
                - listitem: Now applies a -25% Damage Output debuff for the 3.25s duration
            - group: Current details for Cursed Relic · client 6698
            - paragraph:
                - link "Diviner's Kevlar patch history":
                    - /url: /item/diviners-kevlar
            - heading "Diviner's Kevlar" [level=3]:
                - link "Diviner's Kevlar":
                    - /url: /item/diviners-kevlar
            - list:
                - listitem: Spirit power increased from +35 to +40
            - group: Current details for Diviner's Kevlar · client 6698
            - paragraph:
                - link "Echo Shard patch history":
                    - /url: /item/echo-shard
            - heading "Echo Shard" [level=3]:
                - link "Echo Shard":
                    - /url: /item/echo-shard
            - list:
                - listitem: Now has a 0.5s post-cast time
                - listitem: No longer grants +5% Fire Rate
                - listitem: Cooldown increased from 35s to 30s + the cooldown of the imbued ability
            - group: Current details for Echo Shard · client 6698
            - paragraph:
                - link "Ethereal Shift patch history":
                    - /url: /item/ethereal-shift
            - heading "Ethereal Shift" [level=3]:
                - link "Ethereal Shift":
                    - /url: /item/ethereal-shift
            - list:
                - listitem:
                    - text: Cooldown increased from 35s to 37s
                    - 'link "Previous recorded cooldown change: 45s to 35s, March 6th, 2026."':
                        - /url: /change/2026/03-06#ethereal-shift
                        - text: prev. 45s → 35s · 6 Mar
            - group: Current details for Ethereal Shift · client 6698
            - paragraph:
                - link "Frenzy patch history":
                    - /url: /item/frenzy
            - heading "Frenzy" [level=3]:
                - link "Frenzy":
                    - /url: /item/frenzy
            - list:
                - listitem: Now has +10% Bullet Lifesteal as an innate
            - group: Current details for Frenzy · client 6698
            - paragraph:
                - link "Fury Trance patch history":
                    - /url: /item/fury-trance
            - heading "Fury Trance" [level=3]:
                - link "Fury Trance":
                    - /url: /item/fury-trance
            - list:
                - listitem: Active now grants +1m Move Speed
                - listitem: Active removes move speed penalty when shooting (like Fleetfoot)
            - group: Current details for Fury Trance · client 6698
            - paragraph:
                - link "Lifestrike patch history":
                    - /url: /item/lifestrike
            - heading "Lifestrike" [level=3]:
                - link "Lifestrike":
                    - /url: /item/lifestrike
            - list:
                - listitem: When hitting a trooper and a hero at the same time, it now always prioritizes healing off the hero (same change for Melee Lifesteal)
            - group: Current details for Lifestrike · client 6698
            - paragraph:
                - link "Mystic Shot patch history":
                    - /url: /item/mystic-shot
            - heading "Mystic Shot" [level=3]:
                - link "Mystic Shot":
                    - /url: /item/mystic-shot
            - list:
                - listitem:
                    - text: Cooldown reduced from 9s to 8s
                    - 'link "Previous recorded cooldown change: 8s to 9s, June 30th, 2026."':
                        - /url: /change/2026/06-30#mystic-shot
                        - text: prev. 8s → 9s · 30 Jun
                - listitem: Spirit scaling reduced from 1.2 to 0.9
            - group: Current details for Mystic Shot · client 6698
            - paragraph:
                - link "Restorative Locket patch history":
                    - /url: /item/restorative-locket
            - heading "Restorative Locket" [level=3]:
                - link "Restorative Locket":
                    - /url: /item/restorative-locket
            - list:
                - listitem: Heal per boon increased from 0.32 to 0.5
            - group: Current details for Restorative Locket · client 6698
            - paragraph:
                - link "Scourge patch history":
                    - /url: /item/scourge
            - heading "Scourge" [level=3]:
                - link "Scourge":
                    - /url: /item/scourge
            - list:
                - listitem: No longer grants +17% Debuff Resist innate bonus
                - listitem: Active now grants +20% Debuff Resist (retroactive on application)
                - listitem: Max Health per second reduced from 2.5% to 2.3%
            - group: Current details for Scourge · client 6698
            - paragraph:
                - link "Slowing Bullets patch history":
                    - /url: /item/slowing-bullets
            - heading "Slowing Bullets" [level=3]:
                - link "Slowing Bullets":
                    - /url: /item/slowing-bullets
            - list:
                - listitem: No longer grants +15% Weapon Damage
            - group: Current details for Slowing Bullets · client 6698
            - paragraph:
                - link "Spirit Burn patch history":
                    - /url: /item/spirit-burn
            - heading "Spirit Burn" [level=3]:
                - link "Spirit Burn":
                    - /url: /item/spirit-burn
            - list:
                - listitem: No longer hits enemies in a 12m radius, only affects primary target now
                - listitem: Changed from the cooldown being on the item to being target based
                - listitem: Removed half cooldown against NPC
                - listitem: Explosion damage reduced from 110 to 50
            - group: Current details for Spirit Burn · client 6698
            - paragraph:
                - link "Spiritual Overflow patch history":
                    - /url: /item/spiritual-overflow
            - heading "Spiritual Overflow" [level=3]:
                - link "Spiritual Overflow":
                    - /url: /item/spiritual-overflow
            - list:
                - listitem: Now provides a bonus +10% Spirit Lifesteal on proc
                - listitem: Ability Duration reduced from +15% to +13%
                - listitem: Fire Rate reduced from +32% to +30%
            - group: Current details for Spiritual Overflow · client 6698
            - paragraph:
                - link "Suppressor patch history":
                    - /url: /item/suppressor
            - heading "Suppressor" [level=3]:
                - link "Suppressor":
                    - /url: /item/suppressor
            - list:
                - listitem: Duration reduced from 5s to 4.5s
            - group: Current details for Suppressor · client 6698
            - paragraph:
                - link "Tankbuster patch history":
                    - /url: /item/tankbuster
            - heading "Tankbuster" [level=3]:
                - link "Tankbuster":
                    - /url: /item/tankbuster
            - list:
                - listitem: No longer procs off of items
            - group: Current details for Tankbuster · client 6698
            - paragraph:
                - link "Weighted Shots patch history":
                    - /url: /item/weighted-shots
            - heading "Weighted Shots" [level=3]:
                - link "Weighted Shots":
                    - /url: /item/weighted-shots
            - list:
                - listitem: Weapon Damage reduced from +40% to +30%
            - group: Current details for Weighted Shots · client 6698
        - region "Reading context and sources":
            - heading "Reading context and sources" [level=2]
            - paragraph: Current details describe game client 6698, not the game as it was when this patch shipped. Base values exclude upgrades and scaling.
            - paragraph: Previous recorded change links connect verified, explicit changes to the same property. They cover part of the archive, not a complete history of game values.
            - paragraph:
                - text: Current details from the
                - link "Deadlock API":
                    - /url: https://deadlock-api.com
                - text: .
- contentinfo:
    - link "deadlog.io":
        - /url: /
    - link "Browse all patches":
        - /url: /archive
    - paragraph:
        - text: Data provided by
        - link "Deadlock API":
            - /url: https://deadlock-api.com
    - paragraph: Deadlock is a trademark of Valve Corporation
    - text: // end transmission
- region "Notifications"
```

# Test source

```ts
  1   | import { expect, test } from 'playwright/test';
  2   | import { expectNoHorizontalOverflow, gotoApp, openEntityFilter } from './helpers';
  3   |
  4   | const LATEST_CHANGE = '/change/2026/minor-06-11';
  5   |
  6   | test('the global changelog filter navigates from a directory', async ({
  7   | 	page
  8   | }, testInfo) => {
  9   | 	await gotoApp(page, '/heroes');
  10  | 	const input = await openEntityFilter(page, testInfo.project.name === 'mobile-chromium');
  11  | 	await input.fill('Bebop');
  12  | 	await page.getByRole('option', { name: /Bebop, Hero, not selected/ }).click();
  13  |
  14  | 	// Anchored to the root path on purpose: "/?hero=Bebop" and "/heroes?hero=Bebop"
  15  | 	// both satisfied a "/?" optional-slash pattern, hiding the fact that filtering
  16  | 	// from a directory stayed on a page that ignores the param.
  17  | 	await expect(page).toHaveURL(/\/\?hero=Bebop$/);
  18  | 	await expect(
  19  | 		page.getByRole('button', { name: 'Remove Hero filter: Bebop' })
  20  | 	).toBeVisible();
  21  | 	await expect(page.locator('[data-matched-changes]').first()).toContainText('Bebop');
  22  | });
  23  |
  24  | test('selected filter chips are keyboard removable', async ({ page }) => {
  25  | 	await gotoApp(page, '/?hero=Bebop');
  26  | 	const chip = page.getByRole('button', { name: 'Remove Hero filter: Bebop' });
  27  | 	await chip.focus();
  28  | 	await page.keyboard.press('Enter');
  29  | 	await expect(page).toHaveURL(/\/$/);
  30  | });
  31  |
  32  | test('directory search narrows items without horizontal overflow', async ({ page }) => {
  33  | 	await gotoApp(page, '/items');
  34  | 	await page
  35  | 		.getByRole('searchbox', { name: 'Filter items by name' })
  36  | 		.fill('Active Reload');
  37  | 	await expect(page.getByRole('link', { name: /Active Reload/ })).toBeVisible();
  38  | 	await expect(page.getByRole('link', { name: /Berserker/ })).toHaveCount(0);
  39  | 	await expectNoHorizontalOverflow(page);
  40  | });
  41  |
  42  | test('an ability deep link keeps its entity scope and profile history', async ({
  43  | 	page
  44  | }) => {
  45  | 	await gotoApp(page, '/hero/the-doorman?ability=call-bell');
  46  | 	await expect(page).toHaveURL(/\/hero\/the-doorman\?ability=call-bell$/);
  47  | 	await expect(
  48  | 		page.getByRole('heading', { level: 1, name: 'The Doorman' })
  49  | 	).toBeVisible();
  50  | 	await expect(
  51  | 		page
  52  | 			.getByRole('region', { name: 'Abilities' })
  53  | 			.getByRole('button', { name: /^Call Bell/ })
  54  | 	).toHaveAttribute('aria-pressed', 'true');
  55  | 	const patchLink = page
  56  | 		.getByRole('region', { name: 'Change History' })
  57  | 		.getByRole('link')
  58  | 		.first();
  59  | 	await expect(patchLink).toHaveAttribute('href', /\/change\/[^?]+#doorman$/);
  60  | });
  61  |
  62  | test('a changelog alias redirect keeps the query string', async ({ page }) => {
  63  | 	await gotoApp(page, '/change/2026/gameplay-03-06?ref=test');
  64  | 	await expect(page).toHaveURL(/\/change\/2026\/03-06\?ref=test$/);
  65  | });
  66  |
  67  | test('keyword search from a patch navigates to the changelog list', async ({
  68  | 	page
  69  | }, testInfo) => {
  70  | 	await gotoApp(page, '/change/2026/minor-07-28');
  71  | 	const input = await openEntityFilter(page, testInfo.project.name === 'mobile-chromium');
> 72  | 	await expect(input).toHaveAttribute('maxlength', '200');
      |                      ^ Error: expect(locator).toHaveAttribute(expected) failed
  73  | 	await input.fill('stamina bucket');
  74  | 	await input.press('Enter');
  75  |
  76  | 	await expect(page).toHaveURL(/\/\?q=stamina\+bucket$/);
  77  | 	await expect(page.locator('[data-patch-card]').first()).toBeVisible();
  78  | });
  79  |
  80  | test('historical item filters still resolve and remain removable', async ({ page }) => {
  81  | 	await gotoApp(page, '/?item=Ammo+Scavenger');
  82  |
  83  | 	await expect(page.locator('[data-patch-card]').first()).toBeVisible();
  84  | 	await expect(
  85  | 		page.getByRole('button', { name: 'Remove Item filter: Ammo Scavenger' })
  86  | 	).toBeVisible();
  87  | 	await page.getByRole('link', { name: 'Ammo Scavenger full history' }).first().click();
  88  | 	await expect(
  89  | 		page.getByRole('heading', { level: 1, name: 'Ammo Scavenger' })
  90  | 	).toBeVisible();
  91  | 	await expect(page.locator('main header')).toContainText('Historical');
  92  | });
  93  |
  94  | test('mobile fallback offers a complete archive without JavaScript', async ({
  95  | 	browser
  96  | }, testInfo) => {
  97  | 	test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile no-JavaScript fallback');
  98  | 	const context = await browser.newContext({
  99  | 		javaScriptEnabled: false,
  100 | 		reducedMotion: 'reduce',
  101 | 		viewport: { width: 390, height: 844 }
  102 | 	});
  103 | 	const page = await context.newPage();
  104 | 	await page.goto('http://127.0.0.1:4173/?hero=Bebop&item=Ammo+Scavenger&major=true');
  105 | 	await page.evaluate(() => document.fonts.ready);
  106 |
  107 | 	// Playwright's text/role query engines skip noscript descendants even when the
  108 | 	// browser renders them with JavaScript disabled, so locate this native fallback.
  109 | 	const fallback = page.locator('header noscript p');
  110 | 	await expect(fallback).toBeVisible();
  111 | 	await expect(fallback).toContainText('Search needs JavaScript.');
  112 | 	await expect(page.getByRole('searchbox')).toHaveCount(0);
  113 | 	await page.locator('header noscript a[href="/archive"]').click();
  114 | 	await expect(
  115 | 		page.getByRole('heading', { level: 1, name: 'Patch archive' })
  116 | 	).toBeVisible();
  117 | 	const patches = page.locator('main a[href^="/change/"]');
  118 | 	expect(await patches.count()).toBeGreaterThan(100);
  119 | 	await patches.last().click();
  120 | 	await expect(page.getByRole('region', { name: 'Changelog details' })).toBeVisible();
  121 | 	await context.close();
  122 | });
  123 |
  124 | test('semantic accent colors remain legible on their UI surfaces', async ({
  125 | 	page
  126 | }, testInfo) => {
  127 | 	test.skip(
  128 | 		testInfo.project.name !== 'desktop-chromium',
  129 | 		'One browser color calculation is enough'
  130 | 	);
  131 | 	await gotoApp(page, '/');
  132 |
  133 | 	// One theme ships (app.html hardcodes `class="dark"`), so measure what renders.
  134 | 	const contrast = async () => {
  135 | 		return page.evaluate(() => {
  136 | 			const styles = getComputedStyle(document.documentElement);
  137 | 			const luminance = (hex: string) => {
  138 | 				const channels = hex
  139 | 					.match(/[\da-f]{2}/gi)!
  140 | 					.map((value) => Number.parseInt(value, 16) / 255)
  141 | 					.map((value) =>
  142 | 						value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  143 | 					);
  144 | 				return 0.2126 * channels[0]! + 0.7152 * channels[1]! + 0.0722 * channels[2]!;
  145 | 			};
  146 | 			const ratio = (first: string, second: string) => {
  147 | 				const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  148 | 				return (values[0]! + 0.05) / (values[1]! + 0.05);
  149 | 			};
  150 | 			const token = (name: string) => styles.getPropertyValue(name).trim();
  151 | 			const background = token('--background');
  152 | 			const card = token('--card');
  153 | 			const primary = token('--primary');
  154 | 			const signal = token('--signal');
  155 | 			const navigationFontSize = Math.min(
  156 | 				...[
  157 | 					...document.querySelectorAll(
  158 | 						'header nav a[href="/heroes"], header nav a[href="/items"]'
  159 | 					)
  160 | 				].map((element) => Number.parseFloat(getComputedStyle(element).fontSize))
  161 | 			);
  162 |
  163 | 			return {
  164 | 				text: [
  165 | 					ratio(token('--foreground'), background),
  166 | 					ratio(token('--card-foreground'), card),
  167 | 					ratio(token('--muted-foreground'), background),
  168 | 					ratio(primary, background),
  169 | 					ratio(primary, card),
  170 | 					ratio(signal, background),
  171 | 					ratio(signal, card)
  172 | 				],
```
