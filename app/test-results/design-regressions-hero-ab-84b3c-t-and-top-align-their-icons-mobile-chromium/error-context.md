# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: design-regressions.spec.ts >> hero ability cards share a height and top-align their icons
- Location: e2e/design-regressions.spec.ts:386:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByRole('region', { name: 'Abilities' }).getByRole('button')
Expected: 4
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByRole('region', { name: 'Abilities' }).getByRole('button') with timeout 5000ms
  - waiting for getByRole('region', { name: 'Abilities' }).getByRole('button')
    14 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=e2]:
    - link "Skip to content" [ref=e3] [cursor=pointer]:
        - /url: '#main-content'
    - banner [ref=e4]:
        - generic [ref=e5]:
            - navigation "Primary navigation" [ref=e6]:
                - generic [ref=e7]:
                    - link "deadlog.io - Home" [ref=e8] [cursor=pointer]:
                        - /url: /
                        - generic [ref=e15]: deadlog
                    - generic [ref=e18]:
                        - link "Heroes" [ref=e19] [cursor=pointer]:
                            - /url: /heroes
                        - link "Items" [ref=e20] [cursor=pointer]:
                            - /url: /items
            - button "Search & filter" [ref=e23]
    - main [ref=e29]:
        - generic [ref=e31]:
            - link "Back to heroes" [ref=e32] [cursor=pointer]:
                - /url: /heroes
            - generic [ref=e35]:
                - generic [ref=e37]:
                    - heading "Wraith" [level=1] [ref=e38]
                    - paragraph [ref=e39]:
                        - generic [ref=e40]: marksman hero
                    - paragraph [ref=e41]:
                        - text: Last changed
                        - link [ref=e42] [cursor=pointer]:
                            - /url: /change/2026/09-16#wraith
                            - time [ref=e43]: September 16th, 2026
                - group [ref=e44]:
                    - generic "27 patches · 138 changes Archive details" [ref=e45] [cursor=pointer]
            - region "Abilities" [ref=e46]:
                - paragraph [ref=e47]: Filter by ability
                - generic [ref=e48]:
                    - link "Card Trick" [ref=e49] [cursor=pointer]:
                        - /url: /ability/card-trick
                    - link "Project Mind" [ref=e50] [cursor=pointer]:
                        - /url: /ability/project-mind
                    - link "Full Auto" [ref=e51] [cursor=pointer]:
                        - /url: /ability/full-auto
                    - link "Telekinesis" [ref=e52] [cursor=pointer]:
                        - /url: /ability/telekinesis
            - region [ref=e53]:
                - generic [ref=e54]:
                    - heading "Change History" [level=2] [ref=e55]
                    - generic [ref=e56]: 27 patches
                - region [ref=e57]:
                    - heading "2026 4 patches" [level=3] [ref=e58]:
                        - text: '2026'
                        - generic [ref=e59]: 4 patches
                    - list [ref=e60]:
                        - listitem [ref=e61]:
                            - generic [ref=e62]:
                                - heading [level=4] [ref=e63]:
                                    - link [ref=e64] [cursor=pointer]:
                                        - /url: /change/2026/09-16#wraith
                                        - time [ref=e65]: September 16th, 2026
                                - generic [ref=e66]: 7 changes
                            - generic [ref=e67]:
                                - generic [ref=e68]:
                                    - heading "Card Trick" [level=5] [ref=e70]
                                    - list [ref=e71]:
                                        - listitem [ref=e72]: Card Trick heart heal reduced from 75 to 60
                                        - listitem [ref=e73]: Card Trick heart heal spirit scaling reduced from 0.75 to 0.5
                                        - listitem [ref=e74]: Card Trick Diamond Bullet and Spirit Resist reduction reduced from -8% to -7%
                                        - listitem [ref=e75]: Card Trick T3 Diamond Bullet and Spirit Resist reduction reduced from -5% to -4%
                                        - listitem [ref=e76]: Card Trick T3 Clubs slow from +20% to +15%
                                    - group [ref=e78]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e79] [cursor=pointer]:
                                            - generic [ref=e82]:
                                                - text: Current details
                                                - generic [ref=e83]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e84]:
                                    - heading "Project Mind" [level=5] [ref=e86]
                                    - list [ref=e87]:
                                        - listitem [ref=e88]: Fixed Project Mind getting caught on edges/corners when aiming past it
                                    - group [ref=e90]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e91] [cursor=pointer]:
                                            - generic [ref=e94]:
                                                - text: Current details
                                                - generic [ref=e95]: for Project Mind
                                                - text: · client 6698
                                - generic [ref=e96]:
                                    - heading "Full Auto" [level=5] [ref=e98]
                                    - list [ref=e99]:
                                        - listitem [ref=e100]: Full Auto spirit damage per bullet scaling increased from 0.03 to 0.045
                                    - group [ref=e102]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e103] [cursor=pointer]:
                                            - generic [ref=e106]:
                                                - text: Current details
                                                - generic [ref=e107]: for Full Auto
                                                - text: · client 6698
                            - generic [ref=e109]:
                                - generic [ref=e110]:
                                    - heading "Maxed first" [level=5] [ref=e111]
                                    - paragraph [ref=e112]: Share of Wraith players who maxed each ability first, 2–15 Sep → 17–22 Sep so far.
                                    - list "Maxed first" [ref=e113]:
                                        - listitem [ref=e114]:
                                            - link "Card Trick, 82% before, 81% after" [ref=e115] [cursor=pointer]:
                                                - /url: /ability/card-trick
                                                - generic [ref=e116]: Card Trick
                                                - generic [aria-hidden] [ref=e122]: 82% → 81%
                                        - listitem [ref=e123]:
                                            - link "Full Auto, 16% before, 17% after" [ref=e124] [cursor=pointer]:
                                                - /url: /ability/full-auto
                                                - generic [ref=e125]: Full Auto
                                                - generic [aria-hidden] [ref=e131]: 16% → 17%
                                        - listitem [ref=e132]:
                                            - link "Project Mind, 1% before, 1% after" [ref=e133] [cursor=pointer]:
                                                - /url: /ability/project-mind
                                                - generic [ref=e134]: Project Mind
                                                - generic [aria-hidden] [ref=e140]: 1% → 1%
                                        - listitem [ref=e141]:
                                            - link "Telekinesis, <1% before, <1% after" [ref=e142] [cursor=pointer]:
                                                - /url: /ability/telekinesis
                                                - generic [ref=e143]: Telekinesis
                                                - generic [aria-hidden] [ref=e149]: <1% → <1%
                                - generic [ref=e151]:
                                    - heading "Also changed in this patch" [level=5] [ref=e152]
                                    - paragraph [ref=e153]: Share of Wraith players who bought each, 2–15 Sep → 17–22 Sep so far.
                                    - list "Also changed in this patch" [ref=e154]:
                                        - listitem [ref=e155]:
                                            - link "Mercurial Magnum, 86% before, 86% after" [ref=e156] [cursor=pointer]:
                                                - /url: /change/2026/09-16#mercurial-magnum
                                                - generic [ref=e157]: Mercurial Magnum
                                                - generic [aria-hidden] [ref=e163]: 86% → 86%
                                        - listitem [ref=e164]:
                                            - link "Spiritual Overflow, 61% before, 54% after" [ref=e165] [cursor=pointer]:
                                                - /url: /change/2026/09-16#spiritual-overflow
                                                - generic [ref=e166]: Spiritual Overflow
                                                - generic [aria-hidden] [ref=e172]: 61% → 54%
                                        - listitem [ref=e173]:
                                            - link "Leech, 21% before, 28% after" [ref=e174] [cursor=pointer]:
                                                - /url: /change/2026/09-16#leech
                                                - generic [ref=e175]: Leech
                                                - generic [aria-hidden] [ref=e181]: 21% → 28%
                                    - group [ref=e182]:
                                        - generic "Their notes · 3 items" [ref=e183] [cursor=pointer]
                            - link "Full patch" [ref=e187] [cursor=pointer]:
                                - /url: /change/2026/09-16#wraith
                        - listitem [ref=e190]:
                            - generic [ref=e191]:
                                - heading [level=4] [ref=e192]:
                                    - link [ref=e193] [cursor=pointer]:
                                        - /url: /change/2026/08-12#wraith
                                        - time [ref=e194]: August 12th, 2026
                                - generic [ref=e195]: 2 changes
                            - generic [ref=e196]:
                                - generic [ref=e197]:
                                    - heading "Card Trick Heart" [level=5] [ref=e199]
                                    - list [ref=e200]:
                                        - listitem [ref=e201]: Card Trick Heart heal spirit scaling reduced from 1 to 0.75
                                - generic [ref=e202]:
                                    - heading "Full Auto" [level=5] [ref=e204]
                                    - list [ref=e205]:
                                        - listitem [ref=e206]: Full Auto T3 spirit scaling reduced from +0.06 to +0.045
                                    - group [ref=e208]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e209] [cursor=pointer]:
                                            - generic [ref=e212]:
                                                - text: Current details
                                                - generic [ref=e213]: for Full Auto
                                                - text: · client 6698
                            - link "Full patch" [ref=e215] [cursor=pointer]:
                                - /url: /change/2026/08-12#wraith
                        - listitem [ref=e218]:
                            - generic [ref=e219]:
                                - heading [level=4] [ref=e220]:
                                    - link [ref=e221] [cursor=pointer]:
                                        - /url: /change/2026/03-21#wraith
                                        - time [ref=e222]: March 21st, 2026
                                - generic [ref=e223]: 9 changes
                            - generic [ref=e224]:
                                - generic [ref=e225]:
                                    - heading "Card Trick" [level=5] [ref=e227]
                                    - list [ref=e228]:
                                        - listitem [ref=e229]: Card Trick heart now only heals for half the amount for secondary targets in the area
                                        - listitem [ref=e230]: Card Trick now randomly pulls cards out of a 2 deck stack (lowers overall variance. Gets a new 2 deck stack after that is depleted)
                                    - group [ref=e232]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e233] [cursor=pointer]:
                                            - generic [ref=e236]:
                                                - text: Current details
                                                - generic [ref=e237]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e238]:
                                    - heading "Project Mind" [level=5] [ref=e240]
                                    - list [ref=e241]:
                                        - listitem [ref=e242]: Project Mind cooldown increased from 42s to 46s
                                        - listitem [ref=e243]: Project Mind T3 cooldown increased from -28s to -32s
                                    - group [ref=e245]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e246] [cursor=pointer]:
                                            - generic [ref=e249]:
                                                - text: Current details
                                                - generic [ref=e250]: for Project Mind
                                                - text: · client 6698
                                - generic [ref=e251]:
                                    - heading "Full Auto" [level=5] [ref=e253]
                                    - list [ref=e254]:
                                        - listitem [ref=e255]: Full Auto T3 now interrupts/finishes an ongoing reload
                                    - group [ref=e257]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e258] [cursor=pointer]:
                                            - generic [ref=e261]:
                                                - text: Current details
                                                - generic [ref=e262]: for Full Auto
                                                - text: · client 6698
                                - generic [ref=e263]:
                                    - heading "Telekinesis" [level=5] [ref=e265]
                                    - list [ref=e266]:
                                        - listitem [ref=e267]: Telekinesis cast time increased from 0.35s to 0.45s
                                        - listitem [ref=e268]: Telekinesis debuff duration reduced from 2.75s to 2.25s
                                        - listitem [ref=e269]: Telekinesis cast range reduced from 13m to 10m
                                        - listitem [ref=e270]: Telekinesis cooldown increased from 120s to 130s
                                    - group [ref=e272]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e273] [cursor=pointer]:
                                            - generic [ref=e276]:
                                                - text: Current details
                                                - generic [ref=e277]: for Telekinesis
                                                - text: · client 6698
                            - link "Full patch" [ref=e279] [cursor=pointer]:
                                - /url: /change/2026/03-21#wraith
                        - listitem [ref=e282]:
                            - generic [ref=e283]:
                                - heading [level=4] [ref=e284]:
                                    - link [ref=e285] [cursor=pointer]:
                                        - /url: /change/2026/03-06#wraith
                                        - time [ref=e286]: March 6th, 2026
                                - generic [ref=e287]: 50 changes
                            - generic [ref=e288]:
                                - generic [ref=e289]:
                                    - heading "Card Trick" [level=5] [ref=e291]
                                    - list [ref=e292]:
                                        - listitem [ref=e293]: Card Trick cards now have specific suites with special bonuses.
                                        - listitem [ref=e294]: Card Trick base charge count increased from 1 to 2
                                        - listitem [ref=e295]: Card Trick base damage reduced from 60 to 45
                                        - listitem [ref=e296]: Card Trick spirit scaling reduced from 1.0 to 0.55
                                        - listitem [ref=e297]: Card Trick buildup now takes 20% longer
                                        - listitem [ref=e298]: Card Trick cooldown reduced from 0.75s to 0.5s
                                        - listitem [ref=e299]: Card Trick post cast time reduced from 0.2s to 0.1
                                        - listitem [ref=e300]: Card Trick now highlights the card that will be throw next.
                                        - listitem [ref=e301]: Card Trick now has unique sounds for each card suite that is summoned.
                                        - listitem [ref=e302]: Card Trick T1 increased from "+1 Charges" to "+2 Charges"
                                        - listitem [ref=e303]: Card Trick T2 changed from "+35 Damage" to "+40 Damage and increased spirit scaling (+0.4)"
                                        - listitem [ref=e304]: 'Card Trick T2 changed from "+50% Card Summon Rate and 30% slow for 1s" to "Improves Card Suites and increased joker chances" (new totals are Spades: 2.5x, Diamond: -13%, Heal: 150/2.0, Clubs: 50%, Joker: 1/5th chance)'
                                    - group [ref=e306]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e307] [cursor=pointer]:
                                            - generic [ref=e310]:
                                                - text: Current details
                                                - generic [ref=e311]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e312]:
                                    - heading "Project Mind" [level=5] [ref=e314]
                                    - list [ref=e315]:
                                        - listitem [ref=e316]: Fixed Project Mind interaction with stuns
                                    - group [ref=e318]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e319] [cursor=pointer]:
                                            - generic [ref=e322]:
                                                - text: Current details
                                                - generic [ref=e323]: for Project Mind
                                                - text: · client 6698
                                - generic [ref=e324]:
                                    - heading "Full Auto" [level=5] [ref=e326]
                                    - list [ref=e327]:
                                        - listitem [ref=e328]: Full Auto no longer affects allies (previously gave half fire rate to allies)
                                        - listitem [ref=e329]: Full Auto duration no longer scales with Spirit Power
                                        - listitem [ref=e330]: Full Auto cooldown reduced from 48s to 45s
                                        - listitem [ref=e331]: Full Auto base ability now deals +2 Spirit Damage Per Bullet (0.03 Spirit Scaling)
                                        - listitem [ref=e332]: Full Auto T1 increased from -14s Cooldown to -20s
                                        - listitem [ref=e333]: Full Auto T2 changed from "2.52 Spirit Damage per Bullet" to "+10% Fire Rate and +3s Duration"
                                        - listitem [ref=e334]: Full Auto T3 changed from "+15% Bullet and Spirit Lifesteal and increased spirit scaling" to "Unlimited Ammo and increased spirit scaling (+0.06)"
                                    - group [ref=e336]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e337] [cursor=pointer]:
                                            - generic [ref=e340]:
                                                - text: Current details
                                                - generic [ref=e341]: for Full Auto
                                                - text: · client 6698
                                - generic [ref=e342]:
                                    - heading "Telekinesis" [level=5] [ref=e344]
                                    - list [ref=e345]:
                                        - listitem [ref=e346]: Telekinesis cooldown increased from 110s to 120s
                                        - listitem [ref=e347]: Telekinesis cast range reduced from 20m to 14m
                                        - listitem [ref=e348]: Telekinesis cast time increased from 0.1s to 0.3s
                                        - listitem [ref=e349]: Telekinesis no longer has a projectile, it now instantly lifts the target for 0.75s and gives you a location target on the ground. After the 0.75s is over, it'll throw the hero towards that location up to 15m away. The target will take 100 Damage, 40% move slow and prevent stamina/movement-item and ability usage for 3s.
                                        - listitem [ref=e350]: Telekinesis T1 changed from "-25s Cooldown" to "+100 Damage"
                                        - listitem [ref=e351]: Telekinesis T2 changed from "+0.75s Silence and Disarm Duration" to "-50s Cooldown"
                                        - listitem [ref=e352]: Telekinesis T3 changed from "Bounces to nearby target" to "+1.5s Debuff duration and +6m Throw and Cast Range
                                    - group [ref=e354]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e355] [cursor=pointer]:
                                            - generic [ref=e358]:
                                                - text: Current details
                                                - generic [ref=e359]: for Telekinesis
                                                - text: · client 6698
                                - generic [ref=e360]:
                                    - heading "Card Trick Spade" [level=5] [ref=e362]
                                    - list [ref=e363]:
                                        - listitem [ref=e364]: Card Trick Spade reduced from +70% to +60%
                                - generic [ref=e365]:
                                    - heading "Card Trick Heart" [level=5] [ref=e367]
                                    - list [ref=e368]:
                                        - listitem [ref=e369]: Card Trick Heart scaling reduced from 1.25 to 1.0
                                - generic [ref=e370]:
                                    - heading "Card Trick" [level=5] [ref=e372]
                                    - list [ref=e373]:
                                        - listitem [ref=e374]: Card Trick T3 Heart scaling increased from 0.5 to 0.75
                                        - listitem [ref=e375]: Fixed Card Trick Heart heal doing full value for non-heroes (instead of half)
                                    - group [ref=e377]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e378] [cursor=pointer]:
                                            - generic [ref=e381]:
                                                - text: Current details
                                                - generic [ref=e382]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e383]:
                                    - heading "Telekinesis" [level=5] [ref=e385]
                                    - list [ref=e386]:
                                        - listitem [ref=e387]: Telekinesis debuff duration reduced from 3s to 2.75s
                                    - group [ref=e389]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e390] [cursor=pointer]:
                                            - generic [ref=e393]:
                                                - text: Current details
                                                - generic [ref=e394]: for Telekinesis
                                                - text: · client 6698
                                - generic [ref=e395]:
                                    - heading "Card Trick" [level=5] [ref=e397]
                                    - list [ref=e398]:
                                        - listitem [ref=e399]: Card Trick cooldown increased from 0.5s to 0.6s
                                    - group [ref=e401]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e402] [cursor=pointer]:
                                            - generic [ref=e405]:
                                                - text: Current details
                                                - generic [ref=e406]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e407]:
                                    - heading "Card Trick Joker" [level=5] [ref=e409]
                                    - list [ref=e410]:
                                        - listitem [ref=e411]: Card Trick Joker no longer bounces to other targets
                                - generic [ref=e412]:
                                    - heading "Card Trick" [level=5] [ref=e414]
                                    - list [ref=e415]:
                                        - listitem [ref=e416]: Card Trick gaining charges (AP or shop) no longer automatically builds them up
                                        - listitem [ref=e417]: Card Trick can now be alt casted to fire from the inverse order
                                        - listitem [ref=e418]: Card Trick T3 Spade bonus reduced from +50% to +40%
                                        - listitem [ref=e419]: Card Trick T3 Heart healing scale reduced from +0.75 to +0.5
                                    - group [ref=e421]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e422] [cursor=pointer]:
                                            - generic [ref=e425]:
                                                - text: Current details
                                                - generic [ref=e426]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e427]:
                                    - heading "Telekinesis" [level=5] [ref=e429]
                                    - list [ref=e430]:
                                        - listitem [ref=e431]: Telekinesis cast range reduced from 14m to 13m
                                        - listitem [ref=e432]: Telekinesis throw range reduced from 14m to 13m
                                        - listitem [ref=e433]: Telekinesis cast delay increased from 0.3s to 0.35s
                                    - group [ref=e435]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e436] [cursor=pointer]:
                                            - generic [ref=e439]:
                                                - text: Current details
                                                - generic [ref=e440]: for Telekinesis
                                                - text: · client 6698
                                - generic [ref=e441]:
                                    - heading "Card Trick" [level=5] [ref=e443]
                                    - list [ref=e444]:
                                        - listitem [ref=e445]: Card Trick heart now only heals for half the amount for secondary targets in the area
                                        - listitem [ref=e446]: Card Trick now randomly pulls cards out of a 2 deck stack (lowers overall variance. Gets a new 2 deck stack after that is depleted)
                                    - group [ref=e448]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e449] [cursor=pointer]:
                                            - generic [ref=e452]:
                                                - text: Current details
                                                - generic [ref=e453]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e454]:
                                    - heading "Project Mind" [level=5] [ref=e456]
                                    - list [ref=e457]:
                                        - listitem [ref=e458]:
                                            - text: Project Mind cooldown increased from 42s to 46s
                                            - 'link "Previous recorded cooldown change: 48s to 42s, November 21st, 2025." [ref=e459] [cursor=pointer]':
                                                - /url: /change/2025/11-21#project-mind
                                                - text: prev. 48s → 42s · 21 Nov 2025
                                        - listitem [ref=e460]: Project Mind T3 cooldown increased from -28s to -32s
                                    - group [ref=e462]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e463] [cursor=pointer]:
                                            - generic [ref=e466]:
                                                - text: Current details
                                                - generic [ref=e467]: for Project Mind
                                                - text: · client 6698
                                - generic [ref=e468]:
                                    - heading "Full Auto" [level=5] [ref=e470]
                                    - list [ref=e471]:
                                        - listitem [ref=e472]: Full Auto T3 now interrupts/finishes an ongoing reload
                                    - group [ref=e474]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e475] [cursor=pointer]:
                                            - generic [ref=e478]:
                                                - text: Current details
                                                - generic [ref=e479]: for Full Auto
                                                - text: · client 6698
                                - generic [ref=e480]:
                                    - heading "Telekinesis" [level=5] [ref=e482]
                                    - list [ref=e483]:
                                        - listitem [ref=e484]: Telekinesis cast time increased from 0.35s to 0.45s
                                        - listitem [ref=e485]: Telekinesis debuff duration reduced from 2.75s to 2.25s
                                        - listitem [ref=e486]: Telekinesis cast range reduced from 13m to 10m
                                        - listitem [ref=e487]: Telekinesis cooldown increased from 120s to 130s
                                    - group [ref=e489]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e490] [cursor=pointer]:
                                            - generic [ref=e493]:
                                                - text: Current details
                                                - generic [ref=e494]: for Telekinesis
                                                - text: · client 6698
                            - link "Full patch" [ref=e496] [cursor=pointer]:
                                - /url: /change/2026/03-06#wraith
                - region [ref=e499]:
                    - heading "2025 10 patches" [level=3] [ref=e500]:
                        - text: '2025'
                        - generic [ref=e501]: 10 patches
                    - list [ref=e502]:
                        - listitem [ref=e503]:
                            - generic [ref=e504]:
                                - heading [level=4] [ref=e505]:
                                    - link [ref=e506] [cursor=pointer]:
                                        - /url: /change/2025/12-16#wraith
                                        - time [ref=e507]: December 16th, 2025
                                - generic [ref=e508]: 3 changes
                            - generic [ref=e509]:
                                - list [ref=e511]:
                                    - listitem [ref=e512]: Sprint speed spirit power scaling reduced from 0.6 to 0.5
                                    - listitem [ref=e513]: Bullet damage per boon reduced from 0.17 to 0.14
                                - generic [ref=e514]:
                                    - heading "Project Mind" [level=5] [ref=e516]
                                    - list [ref=e517]:
                                        - listitem [ref=e518]: Project Mind T2 spirit scaling reduced from 2.44 to 1.7
                                    - group [ref=e520]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e521] [cursor=pointer]:
                                            - generic [ref=e524]:
                                                - text: Current details
                                                - generic [ref=e525]: for Project Mind
                                                - text: · client 6698
                            - link "Full patch" [ref=e527] [cursor=pointer]:
                                - /url: /change/2025/12-16#wraith
                        - listitem [ref=e530]:
                            - generic [ref=e531]:
                                - heading [level=4] [ref=e532]:
                                    - link [ref=e533] [cursor=pointer]:
                                        - /url: /change/2025/11-21#wraith
                                        - time [ref=e534]: November 21st, 2025
                                - generic [ref=e535]: 4 changes
                            - generic [ref=e536]:
                                - generic [ref=e537]:
                                    - heading "Card Trick" [level=5] [ref=e539]
                                    - list [ref=e540]:
                                        - listitem [ref=e541]: Card Trick base damage increased from 55 to 60
                                    - group [ref=e543]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e544] [cursor=pointer]:
                                            - generic [ref=e547]:
                                                - text: Current details
                                                - generic [ref=e548]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e549]:
                                    - heading "Project Mind" [level=5] [ref=e551]
                                    - list [ref=e552]:
                                        - listitem [ref=e553]: Project Mind cooldown reduced from 48s to 42s
                                    - group [ref=e555]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e556] [cursor=pointer]:
                                            - generic [ref=e559]:
                                                - text: Current details
                                                - generic [ref=e560]: for Project Mind
                                                - text: · client 6698
                                - generic [ref=e561]:
                                    - heading "Card Trick" [level=5] [ref=e563]
                                    - list [ref=e564]:
                                        - listitem [ref=e565]: Card Trick spirit scaling reduced from 1.2 to 1.0
                                    - group [ref=e567]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e568] [cursor=pointer]:
                                            - generic [ref=e571]:
                                                - text: Current details
                                                - generic [ref=e572]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e573]:
                                    - heading "Card Toss" [level=5] [ref=e575]
                                    - list [ref=e576]:
                                        - listitem [ref=e577]: Card Toss T2 reduced from +40 Damage to +35
                            - link "Full patch" [ref=e579] [cursor=pointer]:
                                - /url: /change/2025/11-21#wraith
                        - listitem [ref=e582]:
                            - generic [ref=e583]:
                                - heading [level=4] [ref=e584]:
                                    - link [ref=e585] [cursor=pointer]:
                                        - /url: /change/2025/10-02#wraith
                                        - time [ref=e586]: October 2nd, 2025
                                - generic [ref=e587]: 3 changes
                            - generic [ref=e588]:
                                - list [ref=e590]:
                                    - listitem [ref=e591]: Base bullet damage increased from 5.115 to 5.4
                                    - listitem [ref=e592]: Bullet damage growth per boon reduced from 0.175 to 0.155
                                - generic [ref=e593]:
                                    - heading "Card Trick" [level=5] [ref=e595]
                                    - list [ref=e596]:
                                        - listitem [ref=e597]: Card Trick delay reduced from 0.75 to 0.7
                                    - group [ref=e599]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e600] [cursor=pointer]:
                                            - generic [ref=e603]:
                                                - text: Current details
                                                - generic [ref=e604]: for Card Trick
                                                - text: · client 6698
                            - link "Full patch" [ref=e606] [cursor=pointer]:
                                - /url: /change/2025/10-02#wraith
                        - listitem [ref=e609]:
                            - generic [ref=e610]:
                                - heading [level=4] [ref=e611]:
                                    - link [ref=e612] [cursor=pointer]:
                                        - /url: /change/2025/07-29#wraith
                                        - time [ref=e613]: July 29th, 2025
                                - generic [ref=e614]: 2 changes
                            - list [ref=e617]:
                                - listitem [ref=e618]: Bullet damage increased from 4.95 to 5.115
                                - listitem [ref=e619]: Bullet damage growth reduced from 0.18 to 0.175 (same overall peak damage)
                            - link "Full patch" [ref=e621] [cursor=pointer]:
                                - /url: /change/2025/07-29#wraith
                        - listitem [ref=e624]:
                            - generic [ref=e625]:
                                - heading [level=4] [ref=e626]:
                                    - link [ref=e627] [cursor=pointer]:
                                        - /url: /change/2025/07-04#wraith
                                        - time [ref=e628]: July 4th, 2025
                                - generic [ref=e629]: 3 changes
                            - generic [ref=e630]:
                                - generic [ref=e631]:
                                    - heading "Card Trick" [level=5] [ref=e633]
                                    - list [ref=e634]:
                                        - listitem [ref=e635]: Card Trick T3 slow increased from 25% to 30%
                                        - listitem [ref=e636]: Card Trick spirit scaling increased from 1.1 to 1.2
                                    - group [ref=e638]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e639] [cursor=pointer]:
                                            - generic [ref=e642]:
                                                - text: Current details
                                                - generic [ref=e643]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e644]:
                                    - heading "Project Mind" [level=5] [ref=e646]
                                    - list [ref=e647]:
                                        - listitem [ref=e648]: Project Mind fixed going no where if the player is on uneven ground
                                    - group [ref=e650]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e651] [cursor=pointer]:
                                            - generic [ref=e654]:
                                                - text: Current details
                                                - generic [ref=e655]: for Project Mind
                                                - text: · client 6698
                            - link "Full patch" [ref=e657] [cursor=pointer]:
                                - /url: /change/2025/07-04#wraith
                        - listitem [ref=e660]:
                            - generic [ref=e661]:
                                - heading [level=4] [ref=e662]:
                                    - link [ref=e663] [cursor=pointer]:
                                        - /url: /change/2025/06-17#wraith
                                        - time [ref=e664]: June 17th, 2025
                                - generic [ref=e665]: 7 changes
                            - generic [ref=e666]:
                                - list [ref=e668]:
                                    - listitem [ref=e669]: Base health reduced from 700 to 650
                                    - listitem [ref=e670]: Bullet damage growth reduced by 18%
                                - generic [ref=e671]:
                                    - heading "Card Trick" [level=5] [ref=e673]
                                    - list [ref=e674]:
                                        - listitem [ref=e675]: Card Trick damage reduced from 70 to 60
                                        - listitem [ref=e676]: Card Trick spirit scaling increased from 0.84 to 1.1
                                        - listitem [ref=e677]: Card Trick T3 now also applies a 25% Slow for 1s
                                    - group [ref=e679]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e680] [cursor=pointer]:
                                            - generic [ref=e683]:
                                                - text: Current details
                                                - generic [ref=e684]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e685]:
                                    - heading "Full Auto" [level=5] [ref=e687]
                                    - list [ref=e688]:
                                        - listitem [ref=e689]: Full Auto T2 reduced from 4 Spirit Damage to 3
                                    - group [ref=e691]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e692] [cursor=pointer]:
                                            - generic [ref=e695]:
                                                - text: Current details
                                                - generic [ref=e696]: for Full Auto
                                                - text: · client 6698
                                - generic [ref=e697]:
                                    - heading "Project Mind" [level=5] [ref=e699]
                                    - list [ref=e700]:
                                        - listitem [ref=e701]: Project Mind improved teleport targeting to remove cases where Wraith would clip nearby geo unintentionally
                                    - group [ref=e703]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e704] [cursor=pointer]:
                                            - generic [ref=e707]:
                                                - text: Current details
                                                - generic [ref=e708]: for Project Mind
                                                - text: · client 6698
                            - link "Full patch" [ref=e710] [cursor=pointer]:
                                - /url: /change/2025/06-17#wraith
                        - listitem [ref=e713]:
                            - generic [ref=e714]:
                                - heading [level=4] [ref=e715]:
                                    - link [ref=e716] [cursor=pointer]:
                                        - /url: /change/2025/05-27#wraith
                                        - time [ref=e717]: May 27th, 2025
                                - generic [ref=e718]: 1 change
                            - generic [ref=e720]:
                                - heading "Telekinesis" [level=5] [ref=e722]
                                - list [ref=e723]:
                                    - listitem [ref=e724]: Telekinesis duration reduced from 3s to 2.75s
                                - group [ref=e726]:
                                    - generic "Current details for Telekinesis · client 6698" [ref=e727] [cursor=pointer]:
                                        - generic [ref=e730]:
                                            - text: Current details
                                            - generic [ref=e731]: for Telekinesis
                                            - text: · client 6698
                            - link "Full patch" [ref=e733] [cursor=pointer]:
                                - /url: /change/2025/05-27#wraith
                        - listitem [ref=e736]:
                            - generic [ref=e737]:
                                - heading [level=4] [ref=e738]:
                                    - link [ref=e739] [cursor=pointer]:
                                        - /url: /change/2025/05-19#wraith
                                        - time [ref=e740]: May 19th, 2025
                                - generic [ref=e741]: 2 changes
                            - generic [ref=e742]:
                                - list [ref=e744]:
                                    - listitem [ref=e745]: Health per boon reduced from 65 to 57
                                - generic [ref=e746]:
                                    - heading "Full Auto" [level=5] [ref=e748]
                                    - list [ref=e749]:
                                        - listitem [ref=e750]: Full Auto T2 spirit damage per bullet reduced from 5 to 4
                                    - group [ref=e752]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e753] [cursor=pointer]:
                                            - generic [ref=e756]:
                                                - text: Current details
                                                - generic [ref=e757]: for Full Auto
                                                - text: · client 6698
                            - link "Full patch" [ref=e759] [cursor=pointer]:
                                - /url: /change/2025/05-19#wraith
                        - listitem [ref=e762]:
                            - generic [ref=e763]:
                                - heading [level=4] [ref=e764]:
                                    - link [ref=e765] [cursor=pointer]:
                                        - /url: /change/2025/02-11#wraith
                                        - time [ref=e766]: February 11th, 2025
                                - generic [ref=e767]: 2 changes
                            - generic [ref=e768]:
                                - generic [ref=e769]:
                                    - heading "Card Trick" [level=5] [ref=e771]
                                    - list [ref=e772]:
                                        - listitem [ref=e773]: Card Trick base radius reduced from 5m to 4m
                                    - group [ref=e775]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e776] [cursor=pointer]:
                                            - generic [ref=e779]:
                                                - text: Current details
                                                - generic [ref=e780]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e781]:
                                    - heading "Telekinesis" [level=5] [ref=e783]
                                    - list [ref=e784]:
                                        - listitem [ref=e785]: Telekinesis base damage reduced from 175 to 140
                                    - group [ref=e787]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e788] [cursor=pointer]:
                                            - generic [ref=e791]:
                                                - text: Current details
                                                - generic [ref=e792]: for Telekinesis
                                                - text: · client 6698
                            - link "Full patch" [ref=e794] [cursor=pointer]:
                                - /url: /change/2025/02-11#wraith
                        - listitem [ref=e797]:
                            - generic [ref=e798]:
                                - heading [level=4] [ref=e799]:
                                    - link [ref=e800] [cursor=pointer]:
                                        - /url: /change/2025/01-19#wraith
                                        - time [ref=e801]: January 19th, 2025
                                - generic [ref=e802]: 6 changes
                            - generic [ref=e803]:
                                - generic [ref=e804]:
                                    - heading "Card Trick" [level=5] [ref=e806]
                                    - list [ref=e807]:
                                        - listitem [ref=e808]: Card Trick spirit scaling reduced from 1.1 to 0.9
                                        - listitem [ref=e809]:
                                            - text: Card Trick cooldown increased from 0.65 to 0.75
                                            - 'link "Previous recorded cooldown change: 0.5s to 0.65s, October 24th, 2024." [ref=e810] [cursor=pointer]':
                                                - /url: /change/2024/10-24#card-trick
                                                - text: prev. 0.5s → 0.65s · 24 Oct 2024
                                        - listitem [ref=e811]: Card Trick summon rate from non-heroes reduced from 0.35 to 0.25
                                    - group [ref=e813]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e814] [cursor=pointer]:
                                            - generic [ref=e817]:
                                                - text: Current details
                                                - generic [ref=e818]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e819]:
                                    - heading "Telekinesis" [level=5] [ref=e821]
                                    - list [ref=e822]:
                                        - listitem [ref=e823]: Telekinesis silence and disarm duration increased from 2.5s to 3s
                                        - listitem [ref=e824]: Telekinesis cast delay reduced from 0.4s to 0.3s
                                        - listitem [ref=e825]: Telekinesis up/down motion now lasts 0.25s longer and moves a little bit higher
                                    - group [ref=e827]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e828] [cursor=pointer]:
                                            - generic [ref=e831]:
                                                - text: Current details
                                                - generic [ref=e832]: for Telekinesis
                                                - text: · client 6698
                            - link "Full patch" [ref=e834] [cursor=pointer]:
                                - /url: /change/2025/01-19#wraith
                - region [ref=e837]:
                    - heading "2024 13 patches" [level=3] [ref=e838]:
                        - text: '2024'
                        - generic [ref=e839]: 13 patches
                    - list [ref=e840]:
                        - listitem [ref=e841]:
                            - generic [ref=e842]:
                                - heading [level=4] [ref=e843]:
                                    - link [ref=e844] [cursor=pointer]:
                                        - /url: /change/2024/12-06#wraith
                                        - time [ref=e845]: December 6th, 2024
                                - generic [ref=e846]: 9 changes
                            - generic [ref=e847]:
                                - list [ref=e849]:
                                    - listitem [ref=e850]: Bullet damage growth increased 0.37 to 0.39
                                - generic [ref=e851]:
                                    - heading "Full Auto" [level=5] [ref=e853]
                                    - list [ref=e854]:
                                        - listitem [ref=e855]: Full Auto T2 Spirit Damage Per Bullet now has default 0.05 Spirit Power scaling
                                        - listitem [ref=e856]: Full Auto T3 reduces the improved Spirit Power scaling from 0.1 to 0.05
                                        - listitem [ref=e857]: Full Auto T3 changed from 30% Bullet Lifesteal to 20% Bullet and Spirit Lifesteal
                                    - group [ref=e859]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e860] [cursor=pointer]:
                                            - generic [ref=e863]:
                                                - text: Current details
                                                - generic [ref=e864]: for Full Auto
                                                - text: · client 6698
                                - generic [ref=e865]:
                                    - heading "Telekinesis" [level=5] [ref=e867]
                                    - list [ref=e868]:
                                        - listitem [ref=e869]: Telekinesis cast time reduced from 0.7s to 0.4s
                                        - listitem [ref=e870]: Telekinesis projectile speed increased from 650 to 750
                                        - listitem [ref=e871]: Telekinesis now briefly lifts the enemy and then slams them to the ground and leaves the target with 2.5s of silence and disarm
                                        - listitem [ref=e872]: Telekinesis T2 duration now applies to the silence and disarm, increased to +0.75s
                                        - listitem [ref=e873]: Telekinesis T3 now causes the projectile to bounce to another nearby hero within 20m
                                    - group [ref=e875]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e876] [cursor=pointer]:
                                            - generic [ref=e879]:
                                                - text: Current details
                                                - generic [ref=e880]: for Telekinesis
                                                - text: · client 6698
                            - link "Full patch" [ref=e882] [cursor=pointer]:
                                - /url: /change/2024/12-06#wraith
                        - listitem [ref=e885]:
                            - generic [ref=e886]:
                                - heading [level=4] [ref=e887]:
                                    - link [ref=e888] [cursor=pointer]:
                                        - /url: /change/2024/11-21#wraith
                                        - time [ref=e889]: November 21st, 2024
                                - generic [ref=e890]: 4 changes
                            - generic [ref=e891]:
                                - generic [ref=e892]:
                                    - heading "Full Auto" [level=5] [ref=e894]
                                    - list [ref=e895]:
                                        - listitem [ref=e896]: Full Auto T3 lifesteal reduced from 35% to 30%
                                        - listitem [ref=e897]: Full Auto T2 no longer has spirit scaling (moved to T3)
                                        - listitem [ref=e898]: Full Auto T3 now also adds spirit scaling
                                    - group [ref=e900]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e901] [cursor=pointer]:
                                            - generic [ref=e904]:
                                                - text: Current details
                                                - generic [ref=e905]: for Full Auto
                                                - text: · client 6698
                                - generic [ref=e906]:
                                    - heading "Telekinesis" [level=5] [ref=e908]
                                    - list [ref=e909]:
                                        - listitem [ref=e910]: Telekinesis now causes the target to oscillate up and down a little bit
                                    - group [ref=e912]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e913] [cursor=pointer]:
                                            - generic [ref=e916]:
                                                - text: Current details
                                                - generic [ref=e917]: for Telekinesis
                                                - text: · client 6698
                            - link "Full patch" [ref=e919] [cursor=pointer]:
                                - /url: /change/2024/11-21#wraith
                        - listitem [ref=e922]:
                            - generic [ref=e923]:
                                - heading [level=4] [ref=e924]:
                                    - link [ref=e925] [cursor=pointer]:
                                        - /url: /change/2024/11-07#wraith
                                        - time [ref=e926]: November 7th, 2024
                                - generic [ref=e927]: 2 changes
                            - generic [ref=e929]:
                                - heading "Telekinesis" [level=5] [ref=e931]
                                - list [ref=e932]:
                                    - listitem [ref=e933]: Telekinesis cast time increased from 0.6 to 0.7.
                                    - listitem [ref=e934]: Telekinesis damage reduced from 200 to 175.
                                - group [ref=e936]:
                                    - generic "Current details for Telekinesis · client 6698" [ref=e937] [cursor=pointer]:
                                        - generic [ref=e940]:
                                            - text: Current details
                                            - generic [ref=e941]: for Telekinesis
                                            - text: · client 6698
                            - link "Full patch" [ref=e943] [cursor=pointer]:
                                - /url: /change/2024/11-07#wraith
                        - listitem [ref=e946]:
                            - generic [ref=e947]:
                                - heading [level=4] [ref=e948]:
                                    - link [ref=e949] [cursor=pointer]:
                                        - /url: /change/2024/10-24#wraith
                                        - time [ref=e950]: October 24th, 2024
                                - generic [ref=e951]: 4 changes
                            - generic [ref=e952]:
                                - generic [ref=e953]:
                                    - heading "Card Trick" [level=5] [ref=e955]
                                    - list [ref=e956]:
                                        - listitem [ref=e957]: Card Trick base damage reduced from 80 to 70
                                        - listitem [ref=e958]: Card Trick cooldown increased from 0.5s to 0.65s
                                    - group [ref=e960]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e961] [cursor=pointer]:
                                            - generic [ref=e964]:
                                                - text: Current details
                                                - generic [ref=e965]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e966]:
                                    - heading "Telekinesis" [level=5] [ref=e968]
                                    - list [ref=e969]:
                                        - listitem [ref=e970]: Telekinesis cooldown increased from 95s to 100s
                                        - listitem [ref=e971]: Telekinesis T1 cooldown improved from -28s to -30s
                                    - group [ref=e973]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e974] [cursor=pointer]:
                                            - generic [ref=e977]:
                                                - text: Current details
                                                - generic [ref=e978]: for Telekinesis
                                                - text: · client 6698
                            - link "Full patch" [ref=e980] [cursor=pointer]:
                                - /url: /change/2024/10-24#wraith
                        - listitem [ref=e983]:
                            - generic [ref=e984]:
                                - heading [level=4] [ref=e985]:
                                    - link [ref=e986] [cursor=pointer]:
                                        - /url: /change/2024/10-10#wraith
                                        - time [ref=e987]: October 10th, 2024
                                - generic [ref=e988]: 2 changes
                            - generic [ref=e990]:
                                - heading "Card Trick" [level=5] [ref=e992]
                                - list [ref=e993]:
                                    - listitem [ref=e994]: Card Trick spirit scale reduced from 1.2 to 1.1
                                    - listitem [ref=e995]: Card Trick generation via melee reduced by 50%
                                - group [ref=e997]:
                                    - generic "Current details for Card Trick · client 6698" [ref=e998] [cursor=pointer]:
                                        - generic [ref=e1001]:
                                            - text: Current details
                                            - generic [ref=e1002]: for Card Trick
                                            - text: · client 6698
                            - link "Full patch" [ref=e1004] [cursor=pointer]:
                                - /url: /change/2024/10-10#wraith
                        - listitem [ref=e1007]:
                            - generic [ref=e1008]:
                                - heading [level=4] [ref=e1009]:
                                    - link [ref=e1010] [cursor=pointer]:
                                        - /url: /change/2024/10-07#wraith
                                        - time [ref=e1011]: October 7th, 2024
                                - generic [ref=e1012]: 1 change
                            - generic [ref=e1014]:
                                - heading "Card Trick Spirit" [level=5] [ref=e1016]
                                - list [ref=e1017]:
                                    - listitem [ref=e1018]: Card Trick Spirit scaling reduced from 1.5 to 1.2
                            - link "Full patch" [ref=e1020] [cursor=pointer]:
                                - /url: /change/2024/10-07#wraith
                        - listitem [ref=e1023]:
                            - generic [ref=e1024]:
                                - heading [level=4] [ref=e1025]:
                                    - link [ref=e1026] [cursor=pointer]:
                                        - /url: /change/2024/09-12#wraith
                                        - time [ref=e1027]: September 12th, 2024
                                - generic [ref=e1028]: 3 changes
                            - generic [ref=e1030]:
                                - heading "Card Trick" [level=5] [ref=e1032]
                                - list [ref=e1033]:
                                    - listitem [ref=e1034]: Card Trick damage reduced from 100 to 80
                                    - listitem [ref=e1035]: Card Trick spirit scaling increased from 1.2 to 1.5
                                    - listitem [ref=e1036]: Card Trick card projectiles spawn above the reticle rather than on the left side
                                - group [ref=e1038]:
                                    - generic "Current details for Card Trick · client 6698" [ref=e1039] [cursor=pointer]:
                                        - generic [ref=e1042]:
                                            - text: Current details
                                            - generic [ref=e1043]: for Card Trick
                                            - text: · client 6698
                            - link "Full patch" [ref=e1045] [cursor=pointer]:
                                - /url: /change/2024/09-12#wraith
                        - listitem [ref=e1048]:
                            - generic [ref=e1049]:
                                - heading [level=4] [ref=e1050]:
                                    - link [ref=e1051] [cursor=pointer]:
                                        - /url: /change/2024/08-15#wraith
                                        - time [ref=e1052]: August 15th, 2024
                                - generic [ref=e1053]: 4 changes
                            - generic [ref=e1054]:
                                - generic [ref=e1055]:
                                    - heading "Card Trick" [level=5] [ref=e1057]
                                    - list [ref=e1058]:
                                        - listitem [ref=e1059]: Card Trick now has 0.5s cd per cast
                                    - group [ref=e1061]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e1062] [cursor=pointer]:
                                            - generic [ref=e1065]:
                                                - text: Current details
                                                - generic [ref=e1066]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e1067]:
                                    - heading "Telekinesis" [level=5] [ref=e1069]
                                    - list [ref=e1070]:
                                        - listitem [ref=e1071]: Telekinesis T2 duration reduced from +0.75s to +0.5s
                                    - group [ref=e1073]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e1074] [cursor=pointer]:
                                            - generic [ref=e1077]:
                                                - text: Current details
                                                - generic [ref=e1078]: for Telekinesis
                                                - text: · client 6698
                                - generic [ref=e1079]:
                                    - heading "Full Auto" [level=5] [ref=e1081]
                                    - list [ref=e1082]:
                                        - listitem [ref=e1083]: Full Auto T2 changed to Imbues Bullets with +5 Spirit Damage (only affects Wraith)
                                    - group [ref=e1085]:
                                        - generic "Current details for Full Auto · client 6698" [ref=e1086] [cursor=pointer]:
                                            - generic [ref=e1089]:
                                                - text: Current details
                                                - generic [ref=e1090]: for Full Auto
                                                - text: · client 6698
                                - generic [ref=e1091]:
                                    - heading "Telekinesis" [level=5] [ref=e1093]
                                    - list [ref=e1094]:
                                        - listitem [ref=e1095]: Fixed being able to melee and parry while stunned by Wraith's Telekinesis
                                    - group [ref=e1097]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e1098] [cursor=pointer]:
                                            - generic [ref=e1101]:
                                                - text: Current details
                                                - generic [ref=e1102]: for Telekinesis
                                                - text: · client 6698
                            - link "Full patch" [ref=e1104] [cursor=pointer]:
                                - /url: /change/2024/08-15#wraith
                        - listitem [ref=e1107]:
                            - generic [ref=e1108]:
                                - heading [level=4] [ref=e1109]:
                                    - link [ref=e1110] [cursor=pointer]:
                                        - /url: /change/2024/08-01#wraith
                                        - time [ref=e1111]: August 1st, 2024
                                - generic [ref=e1112]: 2 changes
                            - generic [ref=e1114]:
                                - heading "Card Trick" [level=5] [ref=e1116]
                                - list [ref=e1117]:
                                    - listitem [ref=e1118]: Card Trick post cast time reduced from 0.5s to 0.2s
                                    - listitem [ref=e1119]: Fixed some issues Card Trick tracking that could cause it to orb players or go to the wrong spot
                                - group [ref=e1121]:
                                    - generic "Current details for Card Trick · client 6698" [ref=e1122] [cursor=pointer]:
                                        - generic [ref=e1125]:
                                            - text: Current details
                                            - generic [ref=e1126]: for Card Trick
                                            - text: · client 6698
                            - link "Full patch" [ref=e1128] [cursor=pointer]:
                                - /url: /change/2024/08-01#wraith
                        - listitem [ref=e1131]:
                            - generic [ref=e1132]:
                                - heading [level=4] [ref=e1133]:
                                    - link [ref=e1134] [cursor=pointer]:
                                        - /url: /change/2024/07-04#wraith
                                        - time [ref=e1135]: July 4th, 2024
                                - generic [ref=e1136]: 1 change
                            - generic [ref=e1138]:
                                - heading "Project Mind" [level=5] [ref=e1140]
                                - list [ref=e1141]:
                                    - listitem [ref=e1142]: Project Mind T3 cooldown reduced from -35s to -30s
                                - group [ref=e1144]:
                                    - generic "Current details for Project Mind · client 6698" [ref=e1145] [cursor=pointer]:
                                        - generic [ref=e1148]:
                                            - text: Current details
                                            - generic [ref=e1149]: for Project Mind
                                            - text: · client 6698
                            - link "Full patch" [ref=e1151] [cursor=pointer]:
                                - /url: /change/2024/07-04#wraith
                        - listitem [ref=e1154]:
                            - generic [ref=e1155]:
                                - heading [level=4] [ref=e1156]:
                                    - link [ref=e1157] [cursor=pointer]:
                                        - /url: /change/2024/06-27#wraith
                                        - time [ref=e1158]: June 27th, 2024
                                - generic [ref=e1159]: 1 change
                            - generic [ref=e1161]:
                                - heading "Card Trick" [level=5] [ref=e1163]
                                - list [ref=e1164]:
                                    - listitem [ref=e1165]: The Royal Flush ability has been replaced with Card Trick. Card Trick enables Wraith's weapon damage to summon playing cards. Activating the ability throws one of the cards, which will fly towards the enemy or point under the crosshair and explode on impact.
                                - group [ref=e1167]:
                                    - generic "Current details for Card Trick · client 6698" [ref=e1168] [cursor=pointer]:
                                        - generic [ref=e1171]:
                                            - text: Current details
                                            - generic [ref=e1172]: for Card Trick
                                            - text: · client 6698
                            - link "Full patch" [ref=e1174] [cursor=pointer]:
                                - /url: /change/2024/06-27#wraith
                        - listitem [ref=e1177]:
                            - generic [ref=e1178]:
                                - heading [level=4] [ref=e1179]:
                                    - link [ref=e1180] [cursor=pointer]:
                                        - /url: /change/2024/05-30#wraith
                                        - time [ref=e1181]: May 30th, 2024
                                - generic [ref=e1182]: 1 change
                            - generic [ref=e1184]:
                                - heading "Project Mind" [level=5] [ref=e1186]
                                - list [ref=e1187]:
                                    - listitem [ref=e1188]: Project Mind cooldown reduced from 50s to 45s
                                - group [ref=e1190]:
                                    - generic "Current details for Project Mind · client 6698" [ref=e1191] [cursor=pointer]:
                                        - generic [ref=e1194]:
                                            - text: Current details
                                            - generic [ref=e1195]: for Project Mind
                                            - text: · client 6698
                            - link "Full patch" [ref=e1197] [cursor=pointer]:
                                - /url: /change/2024/05-30#wraith
                        - listitem [ref=e1200]:
                            - generic [ref=e1201]:
                                - heading [level=4] [ref=e1202]:
                                    - link [ref=e1203] [cursor=pointer]:
                                        - /url: /change/2024/05-23#wraith
                                        - time [ref=e1204]: May 23rd, 2024
                                - generic [ref=e1205]: 3 changes
                            - generic [ref=e1206]:
                                - generic [ref=e1207]:
                                    - heading "Royal Flush" [level=5] [ref=e1209]
                                    - list [ref=e1210]:
                                        - listitem [ref=e1211]: Royal Flush no longer has a cast delay
                                - generic [ref=e1212]:
                                    - heading "Card Trick" [level=5] [ref=e1214]
                                    - list [ref=e1215]:
                                        - listitem [ref=e1216]: Royal Flush time to spawn cards increased from 0.4s to 0.6s
                                    - group [ref=e1218]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e1219] [cursor=pointer]:
                                            - generic [ref=e1222]:
                                                - text: Current details
                                                - generic [ref=e1223]: for Card Trick
                                                - text: · client 6698
                                - generic [ref=e1224]:
                                    - heading "Telekinesis" [level=5] [ref=e1226]
                                    - list [ref=e1227]:
                                        - listitem [ref=e1228]: Telekinesis no longer allows the victim to shoot back
                                    - group [ref=e1230]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e1231] [cursor=pointer]:
                                            - generic [ref=e1234]:
                                                - text: Current details
                                                - generic [ref=e1235]: for Telekinesis
                                                - text: · client 6698
                            - link "Full patch" [ref=e1237] [cursor=pointer]:
                                - /url: /change/2024/05-23#wraith
                - region [ref=e1240]:
                    - heading "How these shares are measured" [level=2] [ref=e1241]
                    - paragraph [ref=e1242]: These are observed shares, before and after the patch. Other changes land in the same days, so a difference is not the effect of any one line.
                    - paragraph [ref=e1243]: Each side counts complete UTC days between the patch and its neighbours, excluding release day, up to 14 days; "so far" marks an after-window still collecting matches. All ranks, normal-mode ranked and unranked matches. Last collected September 23rd, 2026.
                    - paragraph [ref=e1244]: Maxed first is the share of a hero's matches in which each ability was the first to reach its third upgrade. Each side needs 1,000 matches.
                    - paragraph [ref=e1245]: Also changed lists up to three items changed in the same patch, ranked by the share of the hero's player-matches in which each was bought before the patch. It needs 1,000 hero appearances and 100 buyers. These are reading links, not build recommendations.
                    - paragraph [ref=e1246]: Current details describe game client 6698, not the game as it was when a patch shipped. Base values exclude upgrades and scaling.
                    - paragraph [ref=e1247]: Previous recorded change links connect verified, explicit changes to the same property. They cover part of the archive, not a complete history of game values.
                    - paragraph [ref=e1248]:
                        - text: Match data from the
                        - link "Deadlock API" [ref=e1249] [cursor=pointer]:
                            - /url: https://deadlock-api.com
                        - text: .
    - contentinfo [ref=e1250]:
        - generic [ref=e1252]:
            - link "deadlog.io" [ref=e1253] [cursor=pointer]:
                - /url: /
            - generic [ref=e1258]:
                - link "Browse all patches" [ref=e1259] [cursor=pointer]:
                    - /url: /archive
                - paragraph [ref=e1260]:
                    - text: Data provided by
                    - link "Deadlock API" [ref=e1261] [cursor=pointer]:
                        - /url: https://deadlock-api.com
                - paragraph [ref=e1262]: Deadlock is a trademark of Valve Corporation
            - generic [ref=e1263]: // end transmission
    - region "Notifications"
```

# Test source

```ts
  289 | 	await gotoApp(page, '/?hero=bebop');
  290 | 	await page.getByText('Quick hero filters', { exact: true }).click();
  291 | 	const hero = page.locator('main').getByRole('button', { name: 'Bebop', exact: true });
  292 |
  293 | 	await expect(hero).toHaveAttribute('aria-pressed', 'true');
  294 | 	await expect(
  295 | 		page.getByRole('button', { name: 'Remove Hero filter: Bebop' })
  296 | 	).toBeVisible();
  297 | 	await hero.click();
  298 | 	await expect(page).toHaveURL(/\/$/);
  299 | });
  300 |
  301 | test('filtered results retain scope and expose direct entity histories', async ({
  302 | 	page
  303 | }) => {
  304 | 	await gotoApp(page, '/?hero=Bebop');
  305 | 	await expect(page.locator('[data-patch-card]').first().locator('h2 a')).toHaveAttribute(
  306 | 		'href',
  307 | 		/^\/change\/[^?]+\?hero=Bebop$/
  308 | 	);
  309 | 	await expect(
  310 | 		page.getByRole('link', { name: 'Bebop full history' }).first()
  311 | 	).toHaveAttribute('href', '/hero/bebop');
  312 | 	await gotoApp(page, '/?hero=Bebop,Abrams');
  313 | 	const link = page.locator('[data-patch-card]').first().locator('h2 a');
  314 | 	await expect(link).toHaveAttribute('href', /hero=Bebop%2CAbrams$/);
  315 | 	await link.click();
  316 | 	await expect(
  317 | 		page.getByRole('region', { name: 'Changelog details' }).locator('#abrams')
  318 | 	).toBeVisible();
  319 | 	const current = new URL(page.url());
  320 | 	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
  321 | 		'href',
  322 | 		`https://deadlog.io${current.pathname}`
  323 | 	);
  324 |
  325 | 	await gotoApp(page, '/');
  326 | 	const entityLink = page
  327 | 		.getByRole('link', { name: 'Jump to Abrams in this patch' })
  328 | 		.first();
  329 | 	await expect(entityLink).toHaveAttribute('href', /\/change\/[^?]+#abrams$/);
  330 | 	await entityLink.click();
  331 | 	await expect(page.locator('#abrams')).toBeVisible();
  332 | });
  333 |
  334 | test('entity histories deduplicate shared forum and Steam sources', async ({ page }) => {
  335 | 	await gotoApp(page, '/hero/kelvin');
  336 | 	const history = page.getByRole('region', { name: 'Change History' });
  337 |
  338 | 	await expect(
  339 | 		history.getByRole('link', { name: 'March 6th, 2026', exact: true })
  340 | 	).toHaveCount(1);
  341 | });
  342 |
  343 | test('deduplicated changelog slugs redirect to the canonical source', async ({
  344 | 	page
  345 | }) => {
  346 | 	await gotoApp(page, '/change/2026/gameplay-03-06?hero=Kelvin');
  347 | 	await expect(page).toHaveURL(/\/change\/2026\/03-06\?hero=Kelvin$/);
  348 | });
  349 |
  350 | test('hero abilities preserve slot order and scoped change counts', async ({ page }) => {
  351 | 	await gotoApp(page, '/hero/the-doorman');
  352 |
  353 | 	const rail = page.getByRole('region', { name: 'Abilities' });
  354 | 	const buttons = rail.getByRole('button');
  355 | 	const names = ['Call Bell', 'Doorway', 'Luggage Cart', 'Hotel Guest'];
  356 |
  357 | 	await expect(buttons).toHaveCount(names.length);
  358 | 	for (const [index, name] of names.entries()) {
  359 | 		await expect(buttons.nth(index)).toHaveAccessibleName(
  360 | 			new RegExp(`^${name}(?:\\s|$)`)
  361 | 		);
  362 | 	}
  363 |
  364 | 	const history = page.getByRole('region', { name: 'Change History' });
  365 | 	const card = history.locator('li:has(a[href="/change/2026/minor-07-28#doorman"])');
  366 | 	await expect(card.getByText('9 changes', { exact: true })).toBeVisible();
  367 | 	await expect(card.getByRole('heading', { name: 'July 28th, 2026' })).toBeVisible();
  368 | 	await expect(card.locator('ul > li')).toHaveCount(9);
  369 |
  370 | 	const callBell = rail.getByRole('button', { name: /^Call Bell(?:\s|$)/ });
  371 | 	await callBell.click();
  372 |
  373 | 	await expect(page).toHaveURL(/\/hero\/the-doorman\?ability=call-bell$/);
  374 | 	await expect(callBell).toHaveAttribute('aria-pressed', 'true');
  375 | 	await expect(card.getByText('1 change', { exact: true })).toBeVisible();
  376 | 	await expect(card.locator('ul > li')).toHaveText([
  377 | 		'Call Bell Charge Time increased from 6s to 7s'
  378 | 	]);
  379 | 	await expect(
  380 | 		card.getByRole('heading', { name: 'Call Bell Charge Time' })
  381 | 	).toBeVisible();
  382 | 	await expect(card.getByRole('heading', { name: 'Doorway' })).toHaveCount(0);
  383 | 	await expect(history.getByRole('button', { name: 'Show all changes' })).toBeVisible();
  384 | });
  385 |
  386 | test('hero ability cards share a height and top-align their icons', async ({ page }) => {
  387 | 	await gotoApp(page, '/hero/wraith');
  388 | 	const cards = page.getByRole('region', { name: 'Abilities' }).getByRole('button');
> 389 | 	await expect(cards).toHaveCount(4);
      |                      ^ Error: expect(locator).toHaveCount(expected) failed
  390 |
  391 | 	const layout = await cards.evaluateAll((elements) =>
  392 | 		elements.map((element) => {
  393 | 			const cardBox = element.getBoundingClientRect();
  394 | 			const iconBox = element.querySelector('img')!.getBoundingClientRect();
  395 | 			return {
  396 | 				height: cardBox.height,
  397 | 				iconOffset: iconBox.top - cardBox.top
  398 | 			};
  399 | 		})
  400 | 	);
  401 | 	const [reference, ...remaining] = layout;
  402 | 	if (!reference) throw new Error('Expected at least one ability card');
  403 | 	for (const card of remaining) {
  404 | 		expect(card.height).toBeCloseTo(reference.height, 1);
  405 | 		expect(card.iconOffset).toBeCloseTo(reference.iconOffset, 1);
  406 | 	}
  407 | });
  408 |
  409 | test('mog entity links target app routes without document extensions', async ({
  410 | 	page
  411 | }) => {
  412 | 	await gotoApp(page, '/change/2026/minor-07-28');
  413 | 	const content = page.getByRole('region', { name: 'Changelog details' });
  414 |
  415 | 	await expect(
  416 | 		content.getByRole('heading', { level: 3, name: 'Doorman' }).getByRole('link')
  417 | 	).toHaveAttribute('href', '/hero/the-doorman');
  418 | 	await expect(
  419 | 		content
  420 | 			.getByRole('heading', { level: 4, name: 'Call Bell Charge Time' })
  421 | 			.getByRole('link')
  422 | 	).toHaveAttribute('href', '/ability/call-bell');
  423 |
  424 | 	const entityImage = content.locator('.hero img').first();
  425 | 	await expect(entityImage).toHaveAttribute('width', '40');
  426 | 	await expect(entityImage).toHaveAttribute('height', '40');
  427 | 	await expect(entityImage).toHaveAttribute('loading', 'lazy');
  428 | 	await expect(entityImage).toHaveAttribute('decoding', 'async');
  429 | 	const abilityImage = content.locator('.ability img').first();
  430 | 	await expect(abilityImage).toHaveAttribute('width', '24');
  431 | 	await expect(abilityImage).toHaveAttribute('height', '24');
  432 | 	await expect(abilityImage).toHaveAttribute('loading', 'lazy');
  433 | 	await expect(abilityImage).toHaveAttribute('decoding', 'async');
  434 | });
  435 |
  436 | test('changelog contents surface ability icons on a card', async ({ page }, testInfo) => {
  437 | 	await gotoApp(page, '/change/2026/minor-07-28');
  438 | 	if (testInfo.project.name === 'mobile-chromium') {
  439 | 		await page.getByRole('button', { name: 'Open table of contents' }).click();
  440 | 	}
  441 |
  442 | 	const toc = page.getByRole('navigation', { name: 'Table of contents' });
  443 | 	await expect(toc.getByRole('link', { name: /patch history/ })).toHaveCount(0);
  444 | 	await expect(toc.locator('.toc-entity').first()).toContainText('Apollo');
  445 | 	await expect(toc.locator('.toc-entity').nth(1)).toContainText('Billy');
  446 | 	const ability = toc.getByRole('link', { name: 'Riposte', exact: true });
  447 | 	await expect(ability.locator('img')).toHaveAttribute('src', /fencer_riposte\.webp$/);
  448 | 	const [heroBox, abilityBox] = await Promise.all([
  449 | 		toc.locator('.toc-entity').first().boundingBox(),
  450 | 		ability.boundingBox()
  451 | 	]);
  452 | 	expect(heroBox).not.toBeNull();
  453 | 	expect(abilityBox).not.toBeNull();
  454 | 	expect(abilityBox!.x).toBeGreaterThan(heroBox!.x);
  455 | 	const abilityUsesMutedText = await ability.evaluate((element) => {
  456 | 		const reference = document.createElement('span');
  457 | 		reference.style.color =
  458 | 			'color-mix(in srgb, var(--muted-foreground) 100%, transparent)';
  459 | 		document.body.append(reference);
  460 | 		const matches = getComputedStyle(element).color === getComputedStyle(reference).color;
  461 | 		reference.remove();
  462 | 		return matches;
  463 | 	});
  464 | 	expect(abilityUsesMutedText).toBe(true);
  465 | 	const surface = await toc.evaluate(
  466 | 		(element) => getComputedStyle(element).backgroundColor
  467 | 	);
  468 | 	expect(surface).not.toBe('rgba(0, 0, 0, 0)');
  469 | 	await expect(toc.locator('[data-toc-tree]')).toHaveCSS('border-left-width', '0px');
  470 | 	if (testInfo.project.name === 'desktop-chromium') {
  471 | 		const scrollContainer = page.locator('[data-toc-scroll]');
  472 | 		const scrollState = await scrollContainer.evaluate((element) => {
  473 | 			const style = getComputedStyle(element);
  474 | 			return {
  475 | 				position: style.position,
  476 | 				overflowY: style.overflowY,
  477 | 				clientHeight: element.clientHeight,
  478 | 				scrollHeight: element.scrollHeight
  479 | 			};
  480 | 		});
  481 | 		expect(scrollState.position).toBe('sticky');
  482 | 		expect(scrollState.overflowY).toBe('auto');
  483 | 		expect(scrollState.scrollHeight).toBeGreaterThan(scrollState.clientHeight);
  484 | 	}
  485 |
  486 | 	await gotoApp(page, '/change/2024/05-10');
  487 | 	if (testInfo.project.name === 'mobile-chromium') {
  488 | 		await page.getByRole('button', { name: 'Open table of contents' }).click();
  489 | 	}
```
