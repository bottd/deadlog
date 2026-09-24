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
                        - generic [ref=e15]:
                            - generic [ref=e16]:
                                - generic [ref=e17]: deadlog
                                - generic [ref=e18]: .io
                            - generic [ref=e19]: Deadlock Changelog
                    - generic [ref=e20]:
                        - link "Heroes" [ref=e21] [cursor=pointer]:
                            - /url: /heroes
                        - link "Items" [ref=e22] [cursor=pointer]:
                            - /url: /items
            - generic [ref=e26]:
                - generic [ref=e27]: Search by hero, item, or keyword
                - combobox "Search by hero, item, or keyword" [ref=e28]
                - button "Search changelog" [ref=e29]
    - main [ref=e34]:
        - generic [ref=e35]:
            - generic [ref=e36]:
                - link "Back to heroes" [ref=e37] [cursor=pointer]:
                    - /url: /heroes
                - generic [ref=e40]:
                    - generic [ref=e42]:
                        - heading "Wraith" [level=1] [ref=e43]
                        - paragraph [ref=e44]:
                            - generic [ref=e45]: marksman hero
                        - paragraph [ref=e46]:
                            - text: Last changed
                            - link [ref=e47] [cursor=pointer]:
                                - /url: /change/2026/09-16#wraith
                                - time [ref=e48]: September 16th, 2026
                    - group [ref=e49]:
                        - generic "27 patches · 138 changes Archive details" [ref=e50] [cursor=pointer]
                - region "Abilities" [ref=e51]:
                    - paragraph [ref=e52]: Filter by ability
                    - generic [ref=e53]:
                        - link "Card Trick" [ref=e54] [cursor=pointer]:
                            - /url: /ability/card-trick
                        - link "Project Mind" [ref=e55] [cursor=pointer]:
                            - /url: /ability/project-mind
                        - link "Full Auto" [ref=e56] [cursor=pointer]:
                            - /url: /ability/full-auto
                        - link "Telekinesis" [ref=e57] [cursor=pointer]:
                            - /url: /ability/telekinesis
                - region [ref=e58]:
                    - generic [ref=e59]:
                        - heading "Change History" [level=2] [ref=e60]
                        - generic [ref=e61]: 27 patches
                    - region [ref=e62]:
                        - heading "2026 4 patches" [level=3] [ref=e63]:
                            - text: '2026'
                            - generic [ref=e64]: 4 patches
                        - list [ref=e65]:
                            - listitem [ref=e66]:
                                - generic [ref=e67]:
                                    - heading [level=4] [ref=e68]:
                                        - link [ref=e69] [cursor=pointer]:
                                            - /url: /change/2026/09-16#wraith
                                            - time [ref=e70]: September 16th, 2026
                                    - generic [ref=e71]: 7 changes
                                - generic [ref=e72]:
                                    - generic [ref=e73]:
                                        - heading "Card Trick" [level=5] [ref=e75]
                                        - list [ref=e76]:
                                            - listitem [ref=e77]: Card Trick heart heal reduced from 75 to 60
                                            - listitem [ref=e78]: Card Trick heart heal spirit scaling reduced from 0.75 to 0.5
                                            - listitem [ref=e79]: Card Trick Diamond Bullet and Spirit Resist reduction reduced from -8% to -7%
                                            - listitem [ref=e80]: Card Trick T3 Diamond Bullet and Spirit Resist reduction reduced from -5% to -4%
                                            - listitem [ref=e81]: Card Trick T3 Clubs slow from +20% to +15%
                                        - group [ref=e83]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e84] [cursor=pointer]:
                                                - generic [ref=e87]:
                                                    - text: Current details
                                                    - generic [ref=e88]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e89]:
                                        - heading "Project Mind" [level=5] [ref=e91]
                                        - list [ref=e92]:
                                            - listitem [ref=e93]: Fixed Project Mind getting caught on edges/corners when aiming past it
                                        - group [ref=e95]:
                                            - generic "Current details for Project Mind · client 6698" [ref=e96] [cursor=pointer]:
                                                - generic [ref=e99]:
                                                    - text: Current details
                                                    - generic [ref=e100]: for Project Mind
                                                    - text: · client 6698
                                    - generic [ref=e101]:
                                        - heading "Full Auto" [level=5] [ref=e103]
                                        - list [ref=e104]:
                                            - listitem [ref=e105]: Full Auto spirit damage per bullet scaling increased from 0.03 to 0.045
                                        - group [ref=e107]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e108] [cursor=pointer]:
                                                - generic [ref=e111]:
                                                    - text: Current details
                                                    - generic [ref=e112]: for Full Auto
                                                    - text: · client 6698
                                - generic [ref=e114]:
                                    - generic [ref=e115]:
                                        - heading "Maxed first" [level=5] [ref=e116]
                                        - paragraph [ref=e117]: Share of Wraith players who maxed each ability first, 2–15 Sep → 17–22 Sep so far.
                                        - list "Maxed first" [ref=e118]:
                                            - listitem [ref=e119]:
                                                - link "Card Trick, 82% before, 81% after" [ref=e120] [cursor=pointer]:
                                                    - /url: /ability/card-trick
                                                    - generic [ref=e121]: Card Trick
                                                    - generic [aria-hidden] [ref=e127]: 82% → 81%
                                            - listitem [ref=e128]:
                                                - link "Full Auto, 16% before, 17% after" [ref=e129] [cursor=pointer]:
                                                    - /url: /ability/full-auto
                                                    - generic [ref=e130]: Full Auto
                                                    - generic [aria-hidden] [ref=e136]: 16% → 17%
                                            - listitem [ref=e137]:
                                                - link "Project Mind, 1% before, 1% after" [ref=e138] [cursor=pointer]:
                                                    - /url: /ability/project-mind
                                                    - generic [ref=e139]: Project Mind
                                                    - generic [aria-hidden] [ref=e145]: 1% → 1%
                                            - listitem [ref=e146]:
                                                - link "Telekinesis, <1% before, <1% after" [ref=e147] [cursor=pointer]:
                                                    - /url: /ability/telekinesis
                                                    - generic [ref=e148]: Telekinesis
                                                    - generic [aria-hidden] [ref=e154]: <1% → <1%
                                    - generic [ref=e156]:
                                        - heading "Also changed in this patch" [level=5] [ref=e157]
                                        - paragraph [ref=e158]: Share of Wraith players who bought each, 2–15 Sep → 17–22 Sep so far.
                                        - list "Also changed in this patch" [ref=e159]:
                                            - listitem [ref=e160]:
                                                - link "Mercurial Magnum, 86% before, 86% after" [ref=e161] [cursor=pointer]:
                                                    - /url: /change/2026/09-16#mercurial-magnum
                                                    - generic [ref=e162]: Mercurial Magnum
                                                    - generic [aria-hidden] [ref=e168]: 86% → 86%
                                            - listitem [ref=e169]:
                                                - link "Spiritual Overflow, 61% before, 54% after" [ref=e170] [cursor=pointer]:
                                                    - /url: /change/2026/09-16#spiritual-overflow
                                                    - generic [ref=e171]: Spiritual Overflow
                                                    - generic [aria-hidden] [ref=e177]: 61% → 54%
                                            - listitem [ref=e178]:
                                                - link "Leech, 21% before, 28% after" [ref=e179] [cursor=pointer]:
                                                    - /url: /change/2026/09-16#leech
                                                    - generic [ref=e180]: Leech
                                                    - generic [aria-hidden] [ref=e186]: 21% → 28%
                                        - group [ref=e187]:
                                            - generic "Their notes · 3 items" [ref=e188] [cursor=pointer]
                                - link "Full patch" [ref=e192] [cursor=pointer]:
                                    - /url: /change/2026/09-16#wraith
                            - listitem [ref=e195]:
                                - generic [ref=e196]:
                                    - heading [level=4] [ref=e197]:
                                        - link [ref=e198] [cursor=pointer]:
                                            - /url: /change/2026/08-12#wraith
                                            - time [ref=e199]: August 12th, 2026
                                    - generic [ref=e200]: 2 changes
                                - generic [ref=e201]:
                                    - generic [ref=e202]:
                                        - heading "Card Trick Heart" [level=5] [ref=e204]
                                        - list [ref=e205]:
                                            - listitem [ref=e206]: Card Trick Heart heal spirit scaling reduced from 1 to 0.75
                                    - generic [ref=e207]:
                                        - heading "Full Auto" [level=5] [ref=e209]
                                        - list [ref=e210]:
                                            - listitem [ref=e211]: Full Auto T3 spirit scaling reduced from +0.06 to +0.045
                                        - group [ref=e213]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e214] [cursor=pointer]:
                                                - generic [ref=e217]:
                                                    - text: Current details
                                                    - generic [ref=e218]: for Full Auto
                                                    - text: · client 6698
                                - link "Full patch" [ref=e220] [cursor=pointer]:
                                    - /url: /change/2026/08-12#wraith
                            - listitem [ref=e223]:
                                - generic [ref=e224]:
                                    - heading [level=4] [ref=e225]:
                                        - link [ref=e226] [cursor=pointer]:
                                            - /url: /change/2026/03-21#wraith
                                            - time [ref=e227]: March 21st, 2026
                                    - generic [ref=e228]: 9 changes
                                - generic [ref=e229]:
                                    - generic [ref=e230]:
                                        - heading "Card Trick" [level=5] [ref=e232]
                                        - list [ref=e233]:
                                            - listitem [ref=e234]: Card Trick heart now only heals for half the amount for secondary targets in the area
                                            - listitem [ref=e235]: Card Trick now randomly pulls cards out of a 2 deck stack (lowers overall variance. Gets a new 2 deck stack after that is depleted)
                                        - group [ref=e237]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e238] [cursor=pointer]:
                                                - generic [ref=e241]:
                                                    - text: Current details
                                                    - generic [ref=e242]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e243]:
                                        - heading "Project Mind" [level=5] [ref=e245]
                                        - list [ref=e246]:
                                            - listitem [ref=e247]: Project Mind cooldown increased from 42s to 46s
                                            - listitem [ref=e248]: Project Mind T3 cooldown increased from -28s to -32s
                                        - group [ref=e250]:
                                            - generic "Current details for Project Mind · client 6698" [ref=e251] [cursor=pointer]:
                                                - generic [ref=e254]:
                                                    - text: Current details
                                                    - generic [ref=e255]: for Project Mind
                                                    - text: · client 6698
                                    - generic [ref=e256]:
                                        - heading "Full Auto" [level=5] [ref=e258]
                                        - list [ref=e259]:
                                            - listitem [ref=e260]: Full Auto T3 now interrupts/finishes an ongoing reload
                                        - group [ref=e262]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e263] [cursor=pointer]:
                                                - generic [ref=e266]:
                                                    - text: Current details
                                                    - generic [ref=e267]: for Full Auto
                                                    - text: · client 6698
                                    - generic [ref=e268]:
                                        - heading "Telekinesis" [level=5] [ref=e270]
                                        - list [ref=e271]:
                                            - listitem [ref=e272]: Telekinesis cast time increased from 0.35s to 0.45s
                                            - listitem [ref=e273]: Telekinesis debuff duration reduced from 2.75s to 2.25s
                                            - listitem [ref=e274]: Telekinesis cast range reduced from 13m to 10m
                                            - listitem [ref=e275]: Telekinesis cooldown increased from 120s to 130s
                                        - group [ref=e277]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e278] [cursor=pointer]:
                                                - generic [ref=e281]:
                                                    - text: Current details
                                                    - generic [ref=e282]: for Telekinesis
                                                    - text: · client 6698
                                - link "Full patch" [ref=e284] [cursor=pointer]:
                                    - /url: /change/2026/03-21#wraith
                            - listitem [ref=e287]:
                                - generic [ref=e288]:
                                    - heading [level=4] [ref=e289]:
                                        - link [ref=e290] [cursor=pointer]:
                                            - /url: /change/2026/03-06#wraith
                                            - time [ref=e291]: March 6th, 2026
                                    - generic [ref=e292]: 50 changes
                                - generic [ref=e293]:
                                    - generic [ref=e294]:
                                        - heading "Card Trick" [level=5] [ref=e296]
                                        - list [ref=e297]:
                                            - listitem [ref=e298]: Card Trick cards now have specific suites with special bonuses.
                                            - listitem [ref=e299]: Card Trick base charge count increased from 1 to 2
                                            - listitem [ref=e300]: Card Trick base damage reduced from 60 to 45
                                            - listitem [ref=e301]: Card Trick spirit scaling reduced from 1.0 to 0.55
                                            - listitem [ref=e302]: Card Trick buildup now takes 20% longer
                                            - listitem [ref=e303]: Card Trick cooldown reduced from 0.75s to 0.5s
                                            - listitem [ref=e304]: Card Trick post cast time reduced from 0.2s to 0.1
                                            - listitem [ref=e305]: Card Trick now highlights the card that will be throw next.
                                            - listitem [ref=e306]: Card Trick now has unique sounds for each card suite that is summoned.
                                            - listitem [ref=e307]: Card Trick T1 increased from "+1 Charges" to "+2 Charges"
                                            - listitem [ref=e308]: Card Trick T2 changed from "+35 Damage" to "+40 Damage and increased spirit scaling (+0.4)"
                                            - listitem [ref=e309]: 'Card Trick T2 changed from "+50% Card Summon Rate and 30% slow for 1s" to "Improves Card Suites and increased joker chances" (new totals are Spades: 2.5x, Diamond: -13%, Heal: 150/2.0, Clubs: 50%, Joker: 1/5th chance)'
                                        - group [ref=e311]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e312] [cursor=pointer]:
                                                - generic [ref=e315]:
                                                    - text: Current details
                                                    - generic [ref=e316]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e317]:
                                        - heading "Project Mind" [level=5] [ref=e319]
                                        - list [ref=e320]:
                                            - listitem [ref=e321]: Fixed Project Mind interaction with stuns
                                        - group [ref=e323]:
                                            - generic "Current details for Project Mind · client 6698" [ref=e324] [cursor=pointer]:
                                                - generic [ref=e327]:
                                                    - text: Current details
                                                    - generic [ref=e328]: for Project Mind
                                                    - text: · client 6698
                                    - generic [ref=e329]:
                                        - heading "Full Auto" [level=5] [ref=e331]
                                        - list [ref=e332]:
                                            - listitem [ref=e333]: Full Auto no longer affects allies (previously gave half fire rate to allies)
                                            - listitem [ref=e334]: Full Auto duration no longer scales with Spirit Power
                                            - listitem [ref=e335]: Full Auto cooldown reduced from 48s to 45s
                                            - listitem [ref=e336]: Full Auto base ability now deals +2 Spirit Damage Per Bullet (0.03 Spirit Scaling)
                                            - listitem [ref=e337]: Full Auto T1 increased from -14s Cooldown to -20s
                                            - listitem [ref=e338]: Full Auto T2 changed from "2.52 Spirit Damage per Bullet" to "+10% Fire Rate and +3s Duration"
                                            - listitem [ref=e339]: Full Auto T3 changed from "+15% Bullet and Spirit Lifesteal and increased spirit scaling" to "Unlimited Ammo and increased spirit scaling (+0.06)"
                                        - group [ref=e341]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e342] [cursor=pointer]:
                                                - generic [ref=e345]:
                                                    - text: Current details
                                                    - generic [ref=e346]: for Full Auto
                                                    - text: · client 6698
                                    - generic [ref=e347]:
                                        - heading "Telekinesis" [level=5] [ref=e349]
                                        - list [ref=e350]:
                                            - listitem [ref=e351]: Telekinesis cooldown increased from 110s to 120s
                                            - listitem [ref=e352]: Telekinesis cast range reduced from 20m to 14m
                                            - listitem [ref=e353]: Telekinesis cast time increased from 0.1s to 0.3s
                                            - listitem [ref=e354]: Telekinesis no longer has a projectile, it now instantly lifts the target for 0.75s and gives you a location target on the ground. After the 0.75s is over, it'll throw the hero towards that location up to 15m away. The target will take 100 Damage, 40% move slow and prevent stamina/movement-item and ability usage for 3s.
                                            - listitem [ref=e355]: Telekinesis T1 changed from "-25s Cooldown" to "+100 Damage"
                                            - listitem [ref=e356]: Telekinesis T2 changed from "+0.75s Silence and Disarm Duration" to "-50s Cooldown"
                                            - listitem [ref=e357]: Telekinesis T3 changed from "Bounces to nearby target" to "+1.5s Debuff duration and +6m Throw and Cast Range
                                        - group [ref=e359]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e360] [cursor=pointer]:
                                                - generic [ref=e363]:
                                                    - text: Current details
                                                    - generic [ref=e364]: for Telekinesis
                                                    - text: · client 6698
                                    - generic [ref=e365]:
                                        - heading "Card Trick Spade" [level=5] [ref=e367]
                                        - list [ref=e368]:
                                            - listitem [ref=e369]: Card Trick Spade reduced from +70% to +60%
                                    - generic [ref=e370]:
                                        - heading "Card Trick Heart" [level=5] [ref=e372]
                                        - list [ref=e373]:
                                            - listitem [ref=e374]: Card Trick Heart scaling reduced from 1.25 to 1.0
                                    - generic [ref=e375]:
                                        - heading "Card Trick" [level=5] [ref=e377]
                                        - list [ref=e378]:
                                            - listitem [ref=e379]: Card Trick T3 Heart scaling increased from 0.5 to 0.75
                                            - listitem [ref=e380]: Fixed Card Trick Heart heal doing full value for non-heroes (instead of half)
                                        - group [ref=e382]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e383] [cursor=pointer]:
                                                - generic [ref=e386]:
                                                    - text: Current details
                                                    - generic [ref=e387]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e388]:
                                        - heading "Telekinesis" [level=5] [ref=e390]
                                        - list [ref=e391]:
                                            - listitem [ref=e392]: Telekinesis debuff duration reduced from 3s to 2.75s
                                        - group [ref=e394]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e395] [cursor=pointer]:
                                                - generic [ref=e398]:
                                                    - text: Current details
                                                    - generic [ref=e399]: for Telekinesis
                                                    - text: · client 6698
                                    - generic [ref=e400]:
                                        - heading "Card Trick" [level=5] [ref=e402]
                                        - list [ref=e403]:
                                            - listitem [ref=e404]: Card Trick cooldown increased from 0.5s to 0.6s
                                        - group [ref=e406]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e407] [cursor=pointer]:
                                                - generic [ref=e410]:
                                                    - text: Current details
                                                    - generic [ref=e411]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e412]:
                                        - heading "Card Trick Joker" [level=5] [ref=e414]
                                        - list [ref=e415]:
                                            - listitem [ref=e416]: Card Trick Joker no longer bounces to other targets
                                    - generic [ref=e417]:
                                        - heading "Card Trick" [level=5] [ref=e419]
                                        - list [ref=e420]:
                                            - listitem [ref=e421]: Card Trick gaining charges (AP or shop) no longer automatically builds them up
                                            - listitem [ref=e422]: Card Trick can now be alt casted to fire from the inverse order
                                            - listitem [ref=e423]: Card Trick T3 Spade bonus reduced from +50% to +40%
                                            - listitem [ref=e424]: Card Trick T3 Heart healing scale reduced from +0.75 to +0.5
                                        - group [ref=e426]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e427] [cursor=pointer]:
                                                - generic [ref=e430]:
                                                    - text: Current details
                                                    - generic [ref=e431]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e432]:
                                        - heading "Telekinesis" [level=5] [ref=e434]
                                        - list [ref=e435]:
                                            - listitem [ref=e436]: Telekinesis cast range reduced from 14m to 13m
                                            - listitem [ref=e437]: Telekinesis throw range reduced from 14m to 13m
                                            - listitem [ref=e438]: Telekinesis cast delay increased from 0.3s to 0.35s
                                        - group [ref=e440]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e441] [cursor=pointer]:
                                                - generic [ref=e444]:
                                                    - text: Current details
                                                    - generic [ref=e445]: for Telekinesis
                                                    - text: · client 6698
                                    - generic [ref=e446]:
                                        - heading "Card Trick" [level=5] [ref=e448]
                                        - list [ref=e449]:
                                            - listitem [ref=e450]: Card Trick heart now only heals for half the amount for secondary targets in the area
                                            - listitem [ref=e451]: Card Trick now randomly pulls cards out of a 2 deck stack (lowers overall variance. Gets a new 2 deck stack after that is depleted)
                                        - group [ref=e453]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e454] [cursor=pointer]:
                                                - generic [ref=e457]:
                                                    - text: Current details
                                                    - generic [ref=e458]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e459]:
                                        - heading "Project Mind" [level=5] [ref=e461]
                                        - list [ref=e462]:
                                            - listitem [ref=e463]:
                                                - text: Project Mind cooldown increased from 42s to 46s
                                                - 'link "Previous recorded cooldown change: 48s to 42s, November 21st, 2025." [ref=e464] [cursor=pointer]':
                                                    - /url: /change/2025/11-21#project-mind
                                                    - text: prev. 48s → 42s · 21 Nov 2025
                                            - listitem [ref=e465]: Project Mind T3 cooldown increased from -28s to -32s
                                        - group [ref=e467]:
                                            - generic "Current details for Project Mind · client 6698" [ref=e468] [cursor=pointer]:
                                                - generic [ref=e471]:
                                                    - text: Current details
                                                    - generic [ref=e472]: for Project Mind
                                                    - text: · client 6698
                                    - generic [ref=e473]:
                                        - heading "Full Auto" [level=5] [ref=e475]
                                        - list [ref=e476]:
                                            - listitem [ref=e477]: Full Auto T3 now interrupts/finishes an ongoing reload
                                        - group [ref=e479]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e480] [cursor=pointer]:
                                                - generic [ref=e483]:
                                                    - text: Current details
                                                    - generic [ref=e484]: for Full Auto
                                                    - text: · client 6698
                                    - generic [ref=e485]:
                                        - heading "Telekinesis" [level=5] [ref=e487]
                                        - list [ref=e488]:
                                            - listitem [ref=e489]: Telekinesis cast time increased from 0.35s to 0.45s
                                            - listitem [ref=e490]: Telekinesis debuff duration reduced from 2.75s to 2.25s
                                            - listitem [ref=e491]: Telekinesis cast range reduced from 13m to 10m
                                            - listitem [ref=e492]: Telekinesis cooldown increased from 120s to 130s
                                        - group [ref=e494]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e495] [cursor=pointer]:
                                                - generic [ref=e498]:
                                                    - text: Current details
                                                    - generic [ref=e499]: for Telekinesis
                                                    - text: · client 6698
                                - link "Full patch" [ref=e501] [cursor=pointer]:
                                    - /url: /change/2026/03-06#wraith
                    - region [ref=e504]:
                        - heading "2025 10 patches" [level=3] [ref=e505]:
                            - text: '2025'
                            - generic [ref=e506]: 10 patches
                        - list [ref=e507]:
                            - listitem [ref=e508]:
                                - generic [ref=e509]:
                                    - heading [level=4] [ref=e510]:
                                        - link [ref=e511] [cursor=pointer]:
                                            - /url: /change/2025/12-16#wraith
                                            - time [ref=e512]: December 16th, 2025
                                    - generic [ref=e513]: 3 changes
                                - generic [ref=e514]:
                                    - list [ref=e516]:
                                        - listitem [ref=e517]: Sprint speed spirit power scaling reduced from 0.6 to 0.5
                                        - listitem [ref=e518]: Bullet damage per boon reduced from 0.17 to 0.14
                                    - generic [ref=e519]:
                                        - heading "Project Mind" [level=5] [ref=e521]
                                        - list [ref=e522]:
                                            - listitem [ref=e523]: Project Mind T2 spirit scaling reduced from 2.44 to 1.7
                                        - group [ref=e525]:
                                            - generic "Current details for Project Mind · client 6698" [ref=e526] [cursor=pointer]:
                                                - generic [ref=e529]:
                                                    - text: Current details
                                                    - generic [ref=e530]: for Project Mind
                                                    - text: · client 6698
                                - link "Full patch" [ref=e532] [cursor=pointer]:
                                    - /url: /change/2025/12-16#wraith
                            - listitem [ref=e535]:
                                - generic [ref=e536]:
                                    - heading [level=4] [ref=e537]:
                                        - link [ref=e538] [cursor=pointer]:
                                            - /url: /change/2025/11-21#wraith
                                            - time [ref=e539]: November 21st, 2025
                                    - generic [ref=e540]: 4 changes
                                - generic [ref=e541]:
                                    - generic [ref=e542]:
                                        - heading "Card Trick" [level=5] [ref=e544]
                                        - list [ref=e545]:
                                            - listitem [ref=e546]: Card Trick base damage increased from 55 to 60
                                        - group [ref=e548]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e549] [cursor=pointer]:
                                                - generic [ref=e552]:
                                                    - text: Current details
                                                    - generic [ref=e553]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e554]:
                                        - heading "Project Mind" [level=5] [ref=e556]
                                        - list [ref=e557]:
                                            - listitem [ref=e558]: Project Mind cooldown reduced from 48s to 42s
                                        - group [ref=e560]:
                                            - generic "Current details for Project Mind · client 6698" [ref=e561] [cursor=pointer]:
                                                - generic [ref=e564]:
                                                    - text: Current details
                                                    - generic [ref=e565]: for Project Mind
                                                    - text: · client 6698
                                    - generic [ref=e566]:
                                        - heading "Card Trick" [level=5] [ref=e568]
                                        - list [ref=e569]:
                                            - listitem [ref=e570]: Card Trick spirit scaling reduced from 1.2 to 1.0
                                        - group [ref=e572]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e573] [cursor=pointer]:
                                                - generic [ref=e576]:
                                                    - text: Current details
                                                    - generic [ref=e577]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e578]:
                                        - heading "Card Toss" [level=5] [ref=e580]
                                        - list [ref=e581]:
                                            - listitem [ref=e582]: Card Toss T2 reduced from +40 Damage to +35
                                - link "Full patch" [ref=e584] [cursor=pointer]:
                                    - /url: /change/2025/11-21#wraith
                            - listitem [ref=e587]:
                                - generic [ref=e588]:
                                    - heading [level=4] [ref=e589]:
                                        - link [ref=e590] [cursor=pointer]:
                                            - /url: /change/2025/10-02#wraith
                                            - time [ref=e591]: October 2nd, 2025
                                    - generic [ref=e592]: 3 changes
                                - generic [ref=e593]:
                                    - list [ref=e595]:
                                        - listitem [ref=e596]: Base bullet damage increased from 5.115 to 5.4
                                        - listitem [ref=e597]: Bullet damage growth per boon reduced from 0.175 to 0.155
                                    - generic [ref=e598]:
                                        - heading "Card Trick" [level=5] [ref=e600]
                                        - list [ref=e601]:
                                            - listitem [ref=e602]: Card Trick delay reduced from 0.75 to 0.7
                                        - group [ref=e604]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e605] [cursor=pointer]:
                                                - generic [ref=e608]:
                                                    - text: Current details
                                                    - generic [ref=e609]: for Card Trick
                                                    - text: · client 6698
                                - link "Full patch" [ref=e611] [cursor=pointer]:
                                    - /url: /change/2025/10-02#wraith
                            - listitem [ref=e614]:
                                - generic [ref=e615]:
                                    - heading [level=4] [ref=e616]:
                                        - link [ref=e617] [cursor=pointer]:
                                            - /url: /change/2025/07-29#wraith
                                            - time [ref=e618]: July 29th, 2025
                                    - generic [ref=e619]: 2 changes
                                - list [ref=e622]:
                                    - listitem [ref=e623]: Bullet damage increased from 4.95 to 5.115
                                    - listitem [ref=e624]: Bullet damage growth reduced from 0.18 to 0.175 (same overall peak damage)
                                - link "Full patch" [ref=e626] [cursor=pointer]:
                                    - /url: /change/2025/07-29#wraith
                            - listitem [ref=e629]:
                                - generic [ref=e630]:
                                    - heading [level=4] [ref=e631]:
                                        - link [ref=e632] [cursor=pointer]:
                                            - /url: /change/2025/07-04#wraith
                                            - time [ref=e633]: July 4th, 2025
                                    - generic [ref=e634]: 3 changes
                                - generic [ref=e635]:
                                    - generic [ref=e636]:
                                        - heading "Card Trick" [level=5] [ref=e638]
                                        - list [ref=e639]:
                                            - listitem [ref=e640]: Card Trick T3 slow increased from 25% to 30%
                                            - listitem [ref=e641]: Card Trick spirit scaling increased from 1.1 to 1.2
                                        - group [ref=e643]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e644] [cursor=pointer]:
                                                - generic [ref=e647]:
                                                    - text: Current details
                                                    - generic [ref=e648]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e649]:
                                        - heading "Project Mind" [level=5] [ref=e651]
                                        - list [ref=e652]:
                                            - listitem [ref=e653]: Project Mind fixed going no where if the player is on uneven ground
                                        - group [ref=e655]:
                                            - generic "Current details for Project Mind · client 6698" [ref=e656] [cursor=pointer]:
                                                - generic [ref=e659]:
                                                    - text: Current details
                                                    - generic [ref=e660]: for Project Mind
                                                    - text: · client 6698
                                - link "Full patch" [ref=e662] [cursor=pointer]:
                                    - /url: /change/2025/07-04#wraith
                            - listitem [ref=e665]:
                                - generic [ref=e666]:
                                    - heading [level=4] [ref=e667]:
                                        - link [ref=e668] [cursor=pointer]:
                                            - /url: /change/2025/06-17#wraith
                                            - time [ref=e669]: June 17th, 2025
                                    - generic [ref=e670]: 7 changes
                                - generic [ref=e671]:
                                    - list [ref=e673]:
                                        - listitem [ref=e674]: Base health reduced from 700 to 650
                                        - listitem [ref=e675]: Bullet damage growth reduced by 18%
                                    - generic [ref=e676]:
                                        - heading "Card Trick" [level=5] [ref=e678]
                                        - list [ref=e679]:
                                            - listitem [ref=e680]: Card Trick damage reduced from 70 to 60
                                            - listitem [ref=e681]: Card Trick spirit scaling increased from 0.84 to 1.1
                                            - listitem [ref=e682]: Card Trick T3 now also applies a 25% Slow for 1s
                                        - group [ref=e684]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e685] [cursor=pointer]:
                                                - generic [ref=e688]:
                                                    - text: Current details
                                                    - generic [ref=e689]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e690]:
                                        - heading "Full Auto" [level=5] [ref=e692]
                                        - list [ref=e693]:
                                            - listitem [ref=e694]: Full Auto T2 reduced from 4 Spirit Damage to 3
                                        - group [ref=e696]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e697] [cursor=pointer]:
                                                - generic [ref=e700]:
                                                    - text: Current details
                                                    - generic [ref=e701]: for Full Auto
                                                    - text: · client 6698
                                    - generic [ref=e702]:
                                        - heading "Project Mind" [level=5] [ref=e704]
                                        - list [ref=e705]:
                                            - listitem [ref=e706]: Project Mind improved teleport targeting to remove cases where Wraith would clip nearby geo unintentionally
                                        - group [ref=e708]:
                                            - generic "Current details for Project Mind · client 6698" [ref=e709] [cursor=pointer]:
                                                - generic [ref=e712]:
                                                    - text: Current details
                                                    - generic [ref=e713]: for Project Mind
                                                    - text: · client 6698
                                - link "Full patch" [ref=e715] [cursor=pointer]:
                                    - /url: /change/2025/06-17#wraith
                            - listitem [ref=e718]:
                                - generic [ref=e719]:
                                    - heading [level=4] [ref=e720]:
                                        - link [ref=e721] [cursor=pointer]:
                                            - /url: /change/2025/05-27#wraith
                                            - time [ref=e722]: May 27th, 2025
                                    - generic [ref=e723]: 1 change
                                - generic [ref=e725]:
                                    - heading "Telekinesis" [level=5] [ref=e727]
                                    - list [ref=e728]:
                                        - listitem [ref=e729]: Telekinesis duration reduced from 3s to 2.75s
                                    - group [ref=e731]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e732] [cursor=pointer]:
                                            - generic [ref=e735]:
                                                - text: Current details
                                                - generic [ref=e736]: for Telekinesis
                                                - text: · client 6698
                                - link "Full patch" [ref=e738] [cursor=pointer]:
                                    - /url: /change/2025/05-27#wraith
                            - listitem [ref=e741]:
                                - generic [ref=e742]:
                                    - heading [level=4] [ref=e743]:
                                        - link [ref=e744] [cursor=pointer]:
                                            - /url: /change/2025/05-19#wraith
                                            - time [ref=e745]: May 19th, 2025
                                    - generic [ref=e746]: 2 changes
                                - generic [ref=e747]:
                                    - list [ref=e749]:
                                        - listitem [ref=e750]: Health per boon reduced from 65 to 57
                                    - generic [ref=e751]:
                                        - heading "Full Auto" [level=5] [ref=e753]
                                        - list [ref=e754]:
                                            - listitem [ref=e755]: Full Auto T2 spirit damage per bullet reduced from 5 to 4
                                        - group [ref=e757]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e758] [cursor=pointer]:
                                                - generic [ref=e761]:
                                                    - text: Current details
                                                    - generic [ref=e762]: for Full Auto
                                                    - text: · client 6698
                                - link "Full patch" [ref=e764] [cursor=pointer]:
                                    - /url: /change/2025/05-19#wraith
                            - listitem [ref=e767]:
                                - generic [ref=e768]:
                                    - heading [level=4] [ref=e769]:
                                        - link [ref=e770] [cursor=pointer]:
                                            - /url: /change/2025/02-11#wraith
                                            - time [ref=e771]: February 11th, 2025
                                    - generic [ref=e772]: 2 changes
                                - generic [ref=e773]:
                                    - generic [ref=e774]:
                                        - heading "Card Trick" [level=5] [ref=e776]
                                        - list [ref=e777]:
                                            - listitem [ref=e778]: Card Trick base radius reduced from 5m to 4m
                                        - group [ref=e780]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e781] [cursor=pointer]:
                                                - generic [ref=e784]:
                                                    - text: Current details
                                                    - generic [ref=e785]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e786]:
                                        - heading "Telekinesis" [level=5] [ref=e788]
                                        - list [ref=e789]:
                                            - listitem [ref=e790]: Telekinesis base damage reduced from 175 to 140
                                        - group [ref=e792]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e793] [cursor=pointer]:
                                                - generic [ref=e796]:
                                                    - text: Current details
                                                    - generic [ref=e797]: for Telekinesis
                                                    - text: · client 6698
                                - link "Full patch" [ref=e799] [cursor=pointer]:
                                    - /url: /change/2025/02-11#wraith
                            - listitem [ref=e802]:
                                - generic [ref=e803]:
                                    - heading [level=4] [ref=e804]:
                                        - link [ref=e805] [cursor=pointer]:
                                            - /url: /change/2025/01-19#wraith
                                            - time [ref=e806]: January 19th, 2025
                                    - generic [ref=e807]: 6 changes
                                - generic [ref=e808]:
                                    - generic [ref=e809]:
                                        - heading "Card Trick" [level=5] [ref=e811]
                                        - list [ref=e812]:
                                            - listitem [ref=e813]: Card Trick spirit scaling reduced from 1.1 to 0.9
                                            - listitem [ref=e814]:
                                                - text: Card Trick cooldown increased from 0.65 to 0.75
                                                - 'link "Previous recorded cooldown change: 0.5s to 0.65s, October 24th, 2024." [ref=e815] [cursor=pointer]':
                                                    - /url: /change/2024/10-24#card-trick
                                                    - text: prev. 0.5s → 0.65s · 24 Oct 2024
                                            - listitem [ref=e816]: Card Trick summon rate from non-heroes reduced from 0.35 to 0.25
                                        - group [ref=e818]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e819] [cursor=pointer]:
                                                - generic [ref=e822]:
                                                    - text: Current details
                                                    - generic [ref=e823]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e824]:
                                        - heading "Telekinesis" [level=5] [ref=e826]
                                        - list [ref=e827]:
                                            - listitem [ref=e828]: Telekinesis silence and disarm duration increased from 2.5s to 3s
                                            - listitem [ref=e829]: Telekinesis cast delay reduced from 0.4s to 0.3s
                                            - listitem [ref=e830]: Telekinesis up/down motion now lasts 0.25s longer and moves a little bit higher
                                        - group [ref=e832]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e833] [cursor=pointer]:
                                                - generic [ref=e836]:
                                                    - text: Current details
                                                    - generic [ref=e837]: for Telekinesis
                                                    - text: · client 6698
                                - link "Full patch" [ref=e839] [cursor=pointer]:
                                    - /url: /change/2025/01-19#wraith
                    - region [ref=e842]:
                        - heading "2024 13 patches" [level=3] [ref=e843]:
                            - text: '2024'
                            - generic [ref=e844]: 13 patches
                        - list [ref=e845]:
                            - listitem [ref=e846]:
                                - generic [ref=e847]:
                                    - heading [level=4] [ref=e848]:
                                        - link [ref=e849] [cursor=pointer]:
                                            - /url: /change/2024/12-06#wraith
                                            - time [ref=e850]: December 6th, 2024
                                    - generic [ref=e851]: 9 changes
                                - generic [ref=e852]:
                                    - list [ref=e854]:
                                        - listitem [ref=e855]: Bullet damage growth increased 0.37 to 0.39
                                    - generic [ref=e856]:
                                        - heading "Full Auto" [level=5] [ref=e858]
                                        - list [ref=e859]:
                                            - listitem [ref=e860]: Full Auto T2 Spirit Damage Per Bullet now has default 0.05 Spirit Power scaling
                                            - listitem [ref=e861]: Full Auto T3 reduces the improved Spirit Power scaling from 0.1 to 0.05
                                            - listitem [ref=e862]: Full Auto T3 changed from 30% Bullet Lifesteal to 20% Bullet and Spirit Lifesteal
                                        - group [ref=e864]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e865] [cursor=pointer]:
                                                - generic [ref=e868]:
                                                    - text: Current details
                                                    - generic [ref=e869]: for Full Auto
                                                    - text: · client 6698
                                    - generic [ref=e870]:
                                        - heading "Telekinesis" [level=5] [ref=e872]
                                        - list [ref=e873]:
                                            - listitem [ref=e874]: Telekinesis cast time reduced from 0.7s to 0.4s
                                            - listitem [ref=e875]: Telekinesis projectile speed increased from 650 to 750
                                            - listitem [ref=e876]: Telekinesis now briefly lifts the enemy and then slams them to the ground and leaves the target with 2.5s of silence and disarm
                                            - listitem [ref=e877]: Telekinesis T2 duration now applies to the silence and disarm, increased to +0.75s
                                            - listitem [ref=e878]: Telekinesis T3 now causes the projectile to bounce to another nearby hero within 20m
                                        - group [ref=e880]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e881] [cursor=pointer]:
                                                - generic [ref=e884]:
                                                    - text: Current details
                                                    - generic [ref=e885]: for Telekinesis
                                                    - text: · client 6698
                                - link "Full patch" [ref=e887] [cursor=pointer]:
                                    - /url: /change/2024/12-06#wraith
                            - listitem [ref=e890]:
                                - generic [ref=e891]:
                                    - heading [level=4] [ref=e892]:
                                        - link [ref=e893] [cursor=pointer]:
                                            - /url: /change/2024/11-21#wraith
                                            - time [ref=e894]: November 21st, 2024
                                    - generic [ref=e895]: 4 changes
                                - generic [ref=e896]:
                                    - generic [ref=e897]:
                                        - heading "Full Auto" [level=5] [ref=e899]
                                        - list [ref=e900]:
                                            - listitem [ref=e901]: Full Auto T3 lifesteal reduced from 35% to 30%
                                            - listitem [ref=e902]: Full Auto T2 no longer has spirit scaling (moved to T3)
                                            - listitem [ref=e903]: Full Auto T3 now also adds spirit scaling
                                        - group [ref=e905]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e906] [cursor=pointer]:
                                                - generic [ref=e909]:
                                                    - text: Current details
                                                    - generic [ref=e910]: for Full Auto
                                                    - text: · client 6698
                                    - generic [ref=e911]:
                                        - heading "Telekinesis" [level=5] [ref=e913]
                                        - list [ref=e914]:
                                            - listitem [ref=e915]: Telekinesis now causes the target to oscillate up and down a little bit
                                        - group [ref=e917]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e918] [cursor=pointer]:
                                                - generic [ref=e921]:
                                                    - text: Current details
                                                    - generic [ref=e922]: for Telekinesis
                                                    - text: · client 6698
                                - link "Full patch" [ref=e924] [cursor=pointer]:
                                    - /url: /change/2024/11-21#wraith
                            - listitem [ref=e927]:
                                - generic [ref=e928]:
                                    - heading [level=4] [ref=e929]:
                                        - link [ref=e930] [cursor=pointer]:
                                            - /url: /change/2024/11-07#wraith
                                            - time [ref=e931]: November 7th, 2024
                                    - generic [ref=e932]: 2 changes
                                - generic [ref=e934]:
                                    - heading "Telekinesis" [level=5] [ref=e936]
                                    - list [ref=e937]:
                                        - listitem [ref=e938]: Telekinesis cast time increased from 0.6 to 0.7.
                                        - listitem [ref=e939]: Telekinesis damage reduced from 200 to 175.
                                    - group [ref=e941]:
                                        - generic "Current details for Telekinesis · client 6698" [ref=e942] [cursor=pointer]:
                                            - generic [ref=e945]:
                                                - text: Current details
                                                - generic [ref=e946]: for Telekinesis
                                                - text: · client 6698
                                - link "Full patch" [ref=e948] [cursor=pointer]:
                                    - /url: /change/2024/11-07#wraith
                            - listitem [ref=e951]:
                                - generic [ref=e952]:
                                    - heading [level=4] [ref=e953]:
                                        - link [ref=e954] [cursor=pointer]:
                                            - /url: /change/2024/10-24#wraith
                                            - time [ref=e955]: October 24th, 2024
                                    - generic [ref=e956]: 4 changes
                                - generic [ref=e957]:
                                    - generic [ref=e958]:
                                        - heading "Card Trick" [level=5] [ref=e960]
                                        - list [ref=e961]:
                                            - listitem [ref=e962]: Card Trick base damage reduced from 80 to 70
                                            - listitem [ref=e963]: Card Trick cooldown increased from 0.5s to 0.65s
                                        - group [ref=e965]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e966] [cursor=pointer]:
                                                - generic [ref=e969]:
                                                    - text: Current details
                                                    - generic [ref=e970]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e971]:
                                        - heading "Telekinesis" [level=5] [ref=e973]
                                        - list [ref=e974]:
                                            - listitem [ref=e975]: Telekinesis cooldown increased from 95s to 100s
                                            - listitem [ref=e976]: Telekinesis T1 cooldown improved from -28s to -30s
                                        - group [ref=e978]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e979] [cursor=pointer]:
                                                - generic [ref=e982]:
                                                    - text: Current details
                                                    - generic [ref=e983]: for Telekinesis
                                                    - text: · client 6698
                                - link "Full patch" [ref=e985] [cursor=pointer]:
                                    - /url: /change/2024/10-24#wraith
                            - listitem [ref=e988]:
                                - generic [ref=e989]:
                                    - heading [level=4] [ref=e990]:
                                        - link [ref=e991] [cursor=pointer]:
                                            - /url: /change/2024/10-10#wraith
                                            - time [ref=e992]: October 10th, 2024
                                    - generic [ref=e993]: 2 changes
                                - generic [ref=e995]:
                                    - heading "Card Trick" [level=5] [ref=e997]
                                    - list [ref=e998]:
                                        - listitem [ref=e999]: Card Trick spirit scale reduced from 1.2 to 1.1
                                        - listitem [ref=e1000]: Card Trick generation via melee reduced by 50%
                                    - group [ref=e1002]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e1003] [cursor=pointer]:
                                            - generic [ref=e1006]:
                                                - text: Current details
                                                - generic [ref=e1007]: for Card Trick
                                                - text: · client 6698
                                - link "Full patch" [ref=e1009] [cursor=pointer]:
                                    - /url: /change/2024/10-10#wraith
                            - listitem [ref=e1012]:
                                - generic [ref=e1013]:
                                    - heading [level=4] [ref=e1014]:
                                        - link [ref=e1015] [cursor=pointer]:
                                            - /url: /change/2024/10-07#wraith
                                            - time [ref=e1016]: October 7th, 2024
                                    - generic [ref=e1017]: 1 change
                                - generic [ref=e1019]:
                                    - heading "Card Trick Spirit" [level=5] [ref=e1021]
                                    - list [ref=e1022]:
                                        - listitem [ref=e1023]: Card Trick Spirit scaling reduced from 1.5 to 1.2
                                - link "Full patch" [ref=e1025] [cursor=pointer]:
                                    - /url: /change/2024/10-07#wraith
                            - listitem [ref=e1028]:
                                - generic [ref=e1029]:
                                    - heading [level=4] [ref=e1030]:
                                        - link [ref=e1031] [cursor=pointer]:
                                            - /url: /change/2024/09-12#wraith
                                            - time [ref=e1032]: September 12th, 2024
                                    - generic [ref=e1033]: 3 changes
                                - generic [ref=e1035]:
                                    - heading "Card Trick" [level=5] [ref=e1037]
                                    - list [ref=e1038]:
                                        - listitem [ref=e1039]: Card Trick damage reduced from 100 to 80
                                        - listitem [ref=e1040]: Card Trick spirit scaling increased from 1.2 to 1.5
                                        - listitem [ref=e1041]: Card Trick card projectiles spawn above the reticle rather than on the left side
                                    - group [ref=e1043]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e1044] [cursor=pointer]:
                                            - generic [ref=e1047]:
                                                - text: Current details
                                                - generic [ref=e1048]: for Card Trick
                                                - text: · client 6698
                                - link "Full patch" [ref=e1050] [cursor=pointer]:
                                    - /url: /change/2024/09-12#wraith
                            - listitem [ref=e1053]:
                                - generic [ref=e1054]:
                                    - heading [level=4] [ref=e1055]:
                                        - link [ref=e1056] [cursor=pointer]:
                                            - /url: /change/2024/08-15#wraith
                                            - time [ref=e1057]: August 15th, 2024
                                    - generic [ref=e1058]: 4 changes
                                - generic [ref=e1059]:
                                    - generic [ref=e1060]:
                                        - heading "Card Trick" [level=5] [ref=e1062]
                                        - list [ref=e1063]:
                                            - listitem [ref=e1064]: Card Trick now has 0.5s cd per cast
                                        - group [ref=e1066]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e1067] [cursor=pointer]:
                                                - generic [ref=e1070]:
                                                    - text: Current details
                                                    - generic [ref=e1071]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e1072]:
                                        - heading "Telekinesis" [level=5] [ref=e1074]
                                        - list [ref=e1075]:
                                            - listitem [ref=e1076]: Telekinesis T2 duration reduced from +0.75s to +0.5s
                                        - group [ref=e1078]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e1079] [cursor=pointer]:
                                                - generic [ref=e1082]:
                                                    - text: Current details
                                                    - generic [ref=e1083]: for Telekinesis
                                                    - text: · client 6698
                                    - generic [ref=e1084]:
                                        - heading "Full Auto" [level=5] [ref=e1086]
                                        - list [ref=e1087]:
                                            - listitem [ref=e1088]: Full Auto T2 changed to Imbues Bullets with +5 Spirit Damage (only affects Wraith)
                                        - group [ref=e1090]:
                                            - generic "Current details for Full Auto · client 6698" [ref=e1091] [cursor=pointer]:
                                                - generic [ref=e1094]:
                                                    - text: Current details
                                                    - generic [ref=e1095]: for Full Auto
                                                    - text: · client 6698
                                    - generic [ref=e1096]:
                                        - heading "Telekinesis" [level=5] [ref=e1098]
                                        - list [ref=e1099]:
                                            - listitem [ref=e1100]: Fixed being able to melee and parry while stunned by Wraith's Telekinesis
                                        - group [ref=e1102]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e1103] [cursor=pointer]:
                                                - generic [ref=e1106]:
                                                    - text: Current details
                                                    - generic [ref=e1107]: for Telekinesis
                                                    - text: · client 6698
                                - link "Full patch" [ref=e1109] [cursor=pointer]:
                                    - /url: /change/2024/08-15#wraith
                            - listitem [ref=e1112]:
                                - generic [ref=e1113]:
                                    - heading [level=4] [ref=e1114]:
                                        - link [ref=e1115] [cursor=pointer]:
                                            - /url: /change/2024/08-01#wraith
                                            - time [ref=e1116]: August 1st, 2024
                                    - generic [ref=e1117]: 2 changes
                                - generic [ref=e1119]:
                                    - heading "Card Trick" [level=5] [ref=e1121]
                                    - list [ref=e1122]:
                                        - listitem [ref=e1123]: Card Trick post cast time reduced from 0.5s to 0.2s
                                        - listitem [ref=e1124]: Fixed some issues Card Trick tracking that could cause it to orb players or go to the wrong spot
                                    - group [ref=e1126]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e1127] [cursor=pointer]:
                                            - generic [ref=e1130]:
                                                - text: Current details
                                                - generic [ref=e1131]: for Card Trick
                                                - text: · client 6698
                                - link "Full patch" [ref=e1133] [cursor=pointer]:
                                    - /url: /change/2024/08-01#wraith
                            - listitem [ref=e1136]:
                                - generic [ref=e1137]:
                                    - heading [level=4] [ref=e1138]:
                                        - link [ref=e1139] [cursor=pointer]:
                                            - /url: /change/2024/07-04#wraith
                                            - time [ref=e1140]: July 4th, 2024
                                    - generic [ref=e1141]: 1 change
                                - generic [ref=e1143]:
                                    - heading "Project Mind" [level=5] [ref=e1145]
                                    - list [ref=e1146]:
                                        - listitem [ref=e1147]: Project Mind T3 cooldown reduced from -35s to -30s
                                    - group [ref=e1149]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e1150] [cursor=pointer]:
                                            - generic [ref=e1153]:
                                                - text: Current details
                                                - generic [ref=e1154]: for Project Mind
                                                - text: · client 6698
                                - link "Full patch" [ref=e1156] [cursor=pointer]:
                                    - /url: /change/2024/07-04#wraith
                            - listitem [ref=e1159]:
                                - generic [ref=e1160]:
                                    - heading [level=4] [ref=e1161]:
                                        - link [ref=e1162] [cursor=pointer]:
                                            - /url: /change/2024/06-27#wraith
                                            - time [ref=e1163]: June 27th, 2024
                                    - generic [ref=e1164]: 1 change
                                - generic [ref=e1166]:
                                    - heading "Card Trick" [level=5] [ref=e1168]
                                    - list [ref=e1169]:
                                        - listitem [ref=e1170]: The Royal Flush ability has been replaced with Card Trick. Card Trick enables Wraith's weapon damage to summon playing cards. Activating the ability throws one of the cards, which will fly towards the enemy or point under the crosshair and explode on impact.
                                    - group [ref=e1172]:
                                        - generic "Current details for Card Trick · client 6698" [ref=e1173] [cursor=pointer]:
                                            - generic [ref=e1176]:
                                                - text: Current details
                                                - generic [ref=e1177]: for Card Trick
                                                - text: · client 6698
                                - link "Full patch" [ref=e1179] [cursor=pointer]:
                                    - /url: /change/2024/06-27#wraith
                            - listitem [ref=e1182]:
                                - generic [ref=e1183]:
                                    - heading [level=4] [ref=e1184]:
                                        - link [ref=e1185] [cursor=pointer]:
                                            - /url: /change/2024/05-30#wraith
                                            - time [ref=e1186]: May 30th, 2024
                                    - generic [ref=e1187]: 1 change
                                - generic [ref=e1189]:
                                    - heading "Project Mind" [level=5] [ref=e1191]
                                    - list [ref=e1192]:
                                        - listitem [ref=e1193]: Project Mind cooldown reduced from 50s to 45s
                                    - group [ref=e1195]:
                                        - generic "Current details for Project Mind · client 6698" [ref=e1196] [cursor=pointer]:
                                            - generic [ref=e1199]:
                                                - text: Current details
                                                - generic [ref=e1200]: for Project Mind
                                                - text: · client 6698
                                - link "Full patch" [ref=e1202] [cursor=pointer]:
                                    - /url: /change/2024/05-30#wraith
                            - listitem [ref=e1205]:
                                - generic [ref=e1206]:
                                    - heading [level=4] [ref=e1207]:
                                        - link [ref=e1208] [cursor=pointer]:
                                            - /url: /change/2024/05-23#wraith
                                            - time [ref=e1209]: May 23rd, 2024
                                    - generic [ref=e1210]: 3 changes
                                - generic [ref=e1211]:
                                    - generic [ref=e1212]:
                                        - heading "Royal Flush" [level=5] [ref=e1214]
                                        - list [ref=e1215]:
                                            - listitem [ref=e1216]: Royal Flush no longer has a cast delay
                                    - generic [ref=e1217]:
                                        - heading "Card Trick" [level=5] [ref=e1219]
                                        - list [ref=e1220]:
                                            - listitem [ref=e1221]: Royal Flush time to spawn cards increased from 0.4s to 0.6s
                                        - group [ref=e1223]:
                                            - generic "Current details for Card Trick · client 6698" [ref=e1224] [cursor=pointer]:
                                                - generic [ref=e1227]:
                                                    - text: Current details
                                                    - generic [ref=e1228]: for Card Trick
                                                    - text: · client 6698
                                    - generic [ref=e1229]:
                                        - heading "Telekinesis" [level=5] [ref=e1231]
                                        - list [ref=e1232]:
                                            - listitem [ref=e1233]: Telekinesis no longer allows the victim to shoot back
                                        - group [ref=e1235]:
                                            - generic "Current details for Telekinesis · client 6698" [ref=e1236] [cursor=pointer]:
                                                - generic [ref=e1239]:
                                                    - text: Current details
                                                    - generic [ref=e1240]: for Telekinesis
                                                    - text: · client 6698
                                - link "Full patch" [ref=e1242] [cursor=pointer]:
                                    - /url: /change/2024/05-23#wraith
                    - region [ref=e1245]:
                        - heading "How these shares are measured" [level=2] [ref=e1246]
                        - paragraph [ref=e1247]: These are observed shares, before and after the patch. Other changes land in the same days, so a difference is not the effect of any one line.
                        - paragraph [ref=e1248]: Each side counts complete UTC days between the patch and its neighbours, excluding release day, up to 14 days; "so far" marks an after-window still collecting matches. All ranks, normal-mode ranked and unranked matches. Last collected September 23rd, 2026.
                        - paragraph [ref=e1249]: Maxed first is the share of a hero's matches in which each ability was the first to reach its third upgrade. Each side needs 1,000 matches.
                        - paragraph [ref=e1250]: Also changed lists up to three items changed in the same patch, ranked by the share of the hero's player-matches in which each was bought before the patch. It needs 1,000 hero appearances and 100 buyers. These are reading links, not build recommendations.
                        - paragraph [ref=e1251]: Current details describe game client 6698, not the game as it was when a patch shipped. Base values exclude upgrades and scaling.
                        - paragraph [ref=e1252]: Previous recorded change links connect verified, explicit changes to the same property. They cover part of the archive, not a complete history of game values.
                        - paragraph [ref=e1253]:
                            - text: Match data from the
                            - link "Deadlock API" [ref=e1254] [cursor=pointer]:
                                - /url: https://deadlock-api.com
                            - text: .
            - complementary "Change history index" [ref=e1255]:
                - navigation "Change history contents" [ref=e1257]:
                    - paragraph [ref=e1259]: History
                    - generic [ref=e1260]:
                        - generic [ref=e1261]:
                            - link "2026 4" [ref=e1262] [cursor=pointer]:
                                - /url: '#year-2026'
                                - text: '2026'
                                - generic [ref=e1264]: '4'
                            - list [ref=e1265]:
                                - listitem [ref=e1266]:
                                    - link "September 16th, 2026 7" [ref=e1267] [cursor=pointer]:
                                        - /url: '#history-162572'
                                        - generic [ref=e1268]: September 16th, 2026
                                        - generic [ref=e1269]: '7'
                                - listitem [ref=e1270]:
                                    - link "August 12th, 2026 2" [ref=e1271] [cursor=pointer]:
                                        - /url: '#history-162570'
                                        - generic [ref=e1272]: August 12th, 2026
                                        - generic [ref=e1273]: '2'
                                - listitem [ref=e1274]:
                                    - link "March 21st, 2026 9" [ref=e1275] [cursor=pointer]:
                                        - /url: '#history-120256'
                                        - generic [ref=e1276]: March 21st, 2026
                                        - generic [ref=e1277]: '9'
                                - listitem [ref=e1278]:
                                    - link "March 6th, 2026 50" [ref=e1279] [cursor=pointer]:
                                        - /url: '#history-114328'
                                        - generic [ref=e1280]: March 6th, 2026
                                        - generic [ref=e1281]: '50'
                        - generic [ref=e1282]:
                            - link "2025 10" [ref=e1283] [cursor=pointer]:
                                - /url: '#year-2025'
                                - text: '2025'
                                - generic [ref=e1285]: '10'
                            - list [ref=e1286]:
                                - listitem [ref=e1287]:
                                    - link "December 16th, 2025 3" [ref=e1288] [cursor=pointer]:
                                        - /url: '#history-93983'
                                        - generic [ref=e1289]: December 16th, 2025
                                        - generic [ref=e1290]: '3'
                                - listitem [ref=e1291]:
                                    - link "November 21st, 2025 4" [ref=e1292] [cursor=pointer]:
                                        - /url: '#history-90383'
                                        - generic [ref=e1293]: November 21st, 2025
                                        - generic [ref=e1294]: '4'
                                - listitem [ref=e1295]:
                                    - link "October 2nd, 2025 3" [ref=e1296] [cursor=pointer]:
                                        - /url: '#history-84332'
                                        - generic [ref=e1297]: October 2nd, 2025
                                        - generic [ref=e1298]: '3'
                                - listitem [ref=e1299]:
                                    - link "July 29th, 2025 2" [ref=e1300] [cursor=pointer]:
                                        - /url: '#history-72760'
                                        - generic [ref=e1301]: July 29th, 2025
                                        - generic [ref=e1302]: '2'
                                - listitem [ref=e1303]:
                                    - link "July 4th, 2025 3" [ref=e1304] [cursor=pointer]:
                                        - /url: '#history-70156'
                                        - generic [ref=e1305]: July 4th, 2025
                                        - generic [ref=e1306]: '3'
                                - listitem [ref=e1307]:
                                    - link "June 17th, 2025 7" [ref=e1308] [cursor=pointer]:
                                        - /url: '#history-68401'
                                        - generic [ref=e1309]: June 17th, 2025
                                        - generic [ref=e1310]: '7'
                                - listitem [ref=e1311]:
                                    - link "May 27th, 2025 1" [ref=e1312] [cursor=pointer]:
                                        - /url: '#history-66453'
                                        - generic [ref=e1313]: May 27th, 2025
                                        - generic [ref=e1314]: '1'
                                - listitem [ref=e1315]:
                                    - link "May 19th, 2025 2" [ref=e1316] [cursor=pointer]:
                                        - /url: '#history-65381'
                                        - generic [ref=e1317]: May 19th, 2025
                                        - generic [ref=e1318]: '2'
                                - listitem [ref=e1319]:
                                    - link "February 11th, 2025 2" [ref=e1320] [cursor=pointer]:
                                        - /url: '#history-55677'
                                        - generic [ref=e1321]: February 11th, 2025
                                        - generic [ref=e1322]: '2'
                                - listitem [ref=e1323]:
                                    - link "January 19th, 2025 6" [ref=e1324] [cursor=pointer]:
                                        - /url: '#history-53961'
                                        - generic [ref=e1325]: January 19th, 2025
                                        - generic [ref=e1326]: '6'
                        - generic [ref=e1327]:
                            - link "2024 13" [ref=e1328] [cursor=pointer]:
                                - /url: '#year-2024'
                                - text: '2024'
                                - generic [ref=e1330]: '13'
                            - list [ref=e1331]:
                                - listitem [ref=e1332]:
                                    - link "December 6th, 2024 9" [ref=e1333] [cursor=pointer]:
                                        - /url: '#history-50599'
                                        - generic [ref=e1334]: December 6th, 2024
                                        - generic [ref=e1335]: '9'
                                - listitem [ref=e1336]:
                                    - link "November 21st, 2024 4" [ref=e1337] [cursor=pointer]:
                                        - /url: '#history-47476'
                                        - generic [ref=e1338]: November 21st, 2024
                                        - generic [ref=e1339]: '4'
                                - listitem [ref=e1340]:
                                    - link "November 7th, 2024 2" [ref=e1341] [cursor=pointer]:
                                        - /url: '#history-44786'
                                        - generic [ref=e1342]: November 7th, 2024
                                        - generic [ref=e1343]: '2'
                                - listitem [ref=e1344]:
                                    - link "October 24th, 2024 4" [ref=e1345] [cursor=pointer]:
                                        - /url: '#history-40951'
                                        - generic [ref=e1346]: October 24th, 2024
                                        - generic [ref=e1347]: '4'
                                - listitem [ref=e1348]:
                                    - link "October 10th, 2024 2" [ref=e1349] [cursor=pointer]:
                                        - /url: '#history-36958'
                                        - generic [ref=e1350]: October 10th, 2024
                                        - generic [ref=e1351]: '2'
                                - listitem [ref=e1352]:
                                    - link "October 7th, 2024 1" [ref=e1353] [cursor=pointer]:
                                        - /url: '#history-36441'
                                        - generic [ref=e1354]: October 7th, 2024
                                        - generic [ref=e1355]: '1'
                                - listitem [ref=e1356]:
                                    - link "September 12th, 2024 3" [ref=e1357] [cursor=pointer]:
                                        - /url: '#history-27974'
                                        - generic [ref=e1358]: September 12th, 2024
                                        - generic [ref=e1359]: '3'
                                - listitem [ref=e1360]:
                                    - link "August 15th, 2024 4" [ref=e1361] [cursor=pointer]:
                                        - /url: '#history-16378'
                                        - generic [ref=e1362]: August 15th, 2024
                                        - generic [ref=e1363]: '4'
                                - listitem [ref=e1364]:
                                    - link "August 1st, 2024 2" [ref=e1365] [cursor=pointer]:
                                        - /url: '#history-13369'
                                        - generic [ref=e1366]: August 1st, 2024
                                        - generic [ref=e1367]: '2'
                                - listitem [ref=e1368]:
                                    - link "July 4th, 2024 1" [ref=e1369] [cursor=pointer]:
                                        - /url: '#history-9652'
                                        - generic [ref=e1370]: July 4th, 2024
                                        - generic [ref=e1371]: '1'
                                - listitem [ref=e1372]:
                                    - link "June 27th, 2024 1" [ref=e1373] [cursor=pointer]:
                                        - /url: '#history-8486'
                                        - generic [ref=e1374]: June 27th, 2024
                                        - generic [ref=e1375]: '1'
                                - listitem [ref=e1376]:
                                    - link "May 30th, 2024 1" [ref=e1377] [cursor=pointer]:
                                        - /url: '#history-2514'
                                        - generic [ref=e1378]: May 30th, 2024
                                        - generic [ref=e1379]: '1'
                                - listitem [ref=e1380]:
                                    - link "May 23rd, 2024 3" [ref=e1381] [cursor=pointer]:
                                        - /url: '#history-1245'
                                        - generic [ref=e1382]: May 23rd, 2024
                                        - generic [ref=e1383]: '3'
    - contentinfo [ref=e1384]:
        - generic [ref=e1386]:
            - link "deadlog.io" [ref=e1387] [cursor=pointer]:
                - /url: /
            - generic [ref=e1392]:
                - link "Browse all patches" [ref=e1393] [cursor=pointer]:
                    - /url: /archive
                - paragraph [ref=e1394]:
                    - text: Data provided by
                    - link "Deadlock API" [ref=e1395] [cursor=pointer]:
                        - /url: https://deadlock-api.com
                - paragraph [ref=e1396]: Deadlock is a trademark of Valve Corporation
            - generic [ref=e1397]: // end transmission
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
