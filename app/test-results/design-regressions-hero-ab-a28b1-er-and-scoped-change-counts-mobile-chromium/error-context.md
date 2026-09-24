# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: design-regressions.spec.ts >> hero abilities preserve slot order and scoped change counts
- Location: e2e/design-regressions.spec.ts:350:1

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
                    - heading "The Doorman" [level=1] [ref=e38]
                    - paragraph [ref=e39]:
                        - generic [ref=e40]: mystic hero
                    - paragraph [ref=e41]:
                        - text: Last changed
                        - link [ref=e42] [cursor=pointer]:
                            - /url: /change/2026/08-12#doorman
                            - time [ref=e43]: August 12th, 2026
                - group [ref=e44]:
                    - generic "16 patches · 109 changes Archive details" [ref=e45] [cursor=pointer]
            - region "Abilities" [ref=e46]:
                - paragraph [ref=e47]: Filter by ability
                - generic [ref=e48]:
                    - link "Call Bell" [ref=e49] [cursor=pointer]:
                        - /url: /ability/call-bell
                    - link "Doorway" [ref=e50] [cursor=pointer]:
                        - /url: /ability/doorway
                    - link "Luggage Cart" [ref=e51] [cursor=pointer]:
                        - /url: /ability/luggage-cart
                    - link "Hotel Guest" [ref=e52] [cursor=pointer]:
                        - /url: /ability/hotel-guest
            - region [ref=e53]:
                - generic [ref=e54]:
                    - heading "Change History" [level=2] [ref=e55]
                    - generic [ref=e56]: 16 patches
                - region [ref=e57]:
                    - heading "2026 11 patches" [level=3] [ref=e58]:
                        - text: '2026'
                        - generic [ref=e59]: 11 patches
                    - list [ref=e60]:
                        - listitem [ref=e61]:
                            - generic [ref=e62]:
                                - heading [level=4] [ref=e63]:
                                    - link [ref=e64] [cursor=pointer]:
                                        - /url: /change/2026/08-12#doorman
                                        - time [ref=e65]: August 12th, 2026
                                - generic [ref=e66]: 3 changes
                            - generic [ref=e67]:
                                - generic [ref=e68]:
                                    - heading "Doorway" [level=5] [ref=e70]
                                    - list [ref=e71]:
                                        - listitem [ref=e72]: Doorway range reduced from 70m to 65m
                                    - group [ref=e74]:
                                        - generic "Current details for Doorway · client 6698" [ref=e75] [cursor=pointer]:
                                            - generic [ref=e78]:
                                                - text: Current details
                                                - generic [ref=e79]: for Doorway
                                                - text: · client 6698
                                - generic [ref=e80]:
                                    - heading "Luggage Cart" [level=5] [ref=e82]
                                    - list [ref=e83]:
                                        - listitem [ref=e84]: Walker will no longer consider Luggage Cart dragged enemies as valid targets to trigger the stomp on until soon after they are dropped off
                                        - listitem [ref=e85]: Similar to the Walker change above, the turrets in the healing area in base now also wait on considering valid targets
                                    - group [ref=e87]:
                                        - generic "Current details for Luggage Cart · client 6698" [ref=e88] [cursor=pointer]:
                                            - generic [ref=e91]:
                                                - text: Current details
                                                - generic [ref=e92]: for Luggage Cart
                                                - text: · client 6698
                            - link "Full patch" [ref=e94] [cursor=pointer]:
                                - /url: /change/2026/08-12#doorman
                        - listitem [ref=e97]:
                            - generic [ref=e98]:
                                - heading [level=4] [ref=e99]:
                                    - link [ref=e100] [cursor=pointer]:
                                        - /url: /change/2026/minor-07-28#doorman
                                        - time [ref=e101]: July 28th, 2026
                                - generic [ref=e102]: 9 changes
                            - generic [ref=e103]:
                                - list [ref=e105]:
                                    - listitem [ref=e106]: Bullet damage rescaled from 26 + 1.19/boon to 24 + 1.25
                                - generic [ref=e107]:
                                    - heading "Call Bell Charge Time" [level=5] [ref=e109]
                                    - list [ref=e110]:
                                        - listitem [ref=e111]: Call Bell Charge Time increased from 6s to 7s
                                - generic [ref=e112]:
                                    - heading "Doorway" [level=5] [ref=e114]
                                    - list [ref=e115]:
                                        - listitem [ref=e116]: Doorway duration reduced from 20s to 15s
                                        - listitem [ref=e117]: Doorway T1 duration increased from +15s to +20s
                                        - listitem [ref=e118]: Doorway T3 range reduced from +45m to +40m
                                    - group [ref=e120]:
                                        - generic "Current details for Doorway · client 6698" [ref=e121] [cursor=pointer]:
                                            - generic [ref=e124]:
                                                - text: Current details
                                                - generic [ref=e125]: for Doorway
                                                - text: · client 6698
                                - generic [ref=e126]:
                                    - heading "Luggage Cart" [level=5] [ref=e128]
                                    - list [ref=e129]:
                                        - listitem [ref=e130]: Luggage Cart damage reduced from 80 to 60
                                        - listitem [ref=e131]: Luggage Cart T1 increased from +60 Damage to +80
                                        - listitem [ref=e132]: Luggage Cart range reduced from 25m to 20m
                                        - listitem [ref=e133]: Luggage Cart T2 increased from +20m Cast Range to +25m
                                    - group [ref=e135]:
                                        - generic "Current details for Luggage Cart · client 6698" [ref=e136] [cursor=pointer]:
                                            - generic [ref=e139]:
                                                - text: Current details
                                                - generic [ref=e140]: for Luggage Cart
                                                - text: · client 6698
                            - link "Full patch" [ref=e142] [cursor=pointer]:
                                - /url: /change/2026/minor-07-28#doorman
                        - listitem [ref=e145]:
                            - generic [ref=e146]:
                                - heading [level=4] [ref=e147]:
                                    - link [ref=e148] [cursor=pointer]:
                                        - /url: /change/2026/minor-07-09#doorman
                                        - time [ref=e149]: July 9th, 2026
                                - generic [ref=e150]: 3 changes
                            - generic [ref=e151]:
                                - list [ref=e153]:
                                    - listitem [ref=e154]: Bullet damage rescaled from 29.26 + 1.1/boon to 26 + 1.19
                                    - listitem [ref=e155]: Crit scaling reduced from -25% to -30%
                                - generic [ref=e156]:
                                    - heading "Hotel Guest" [level=5] [ref=e158]
                                    - list [ref=e159]:
                                        - listitem [ref=e160]: Hotel Guest T3 increased from 13s Cooldown on Failure to Check Out to 15s
                                    - group [ref=e162]:
                                        - generic "Current details for Hotel Guest · client 6698" [ref=e163] [cursor=pointer]:
                                            - generic [ref=e166]:
                                                - text: Current details
                                                - generic [ref=e167]: for Hotel Guest
                                                - text: · client 6698
                            - link "Full patch" [ref=e169] [cursor=pointer]:
                                - /url: /change/2026/minor-07-09#doorman
                        - listitem [ref=e172]:
                            - generic [ref=e173]:
                                - heading [level=4] [ref=e174]:
                                    - link [ref=e175] [cursor=pointer]:
                                        - /url: /change/2026/06-30#doorman
                                        - time [ref=e176]: June 30th, 2026
                                - generic [ref=e177]: 1 change
                            - generic [ref=e179]:
                                - heading "Doorway" [level=5] [ref=e181]
                                - list [ref=e182]:
                                    - listitem [ref=e183]: Doorway cooldown increased from 40s to 45s
                                - group [ref=e185]:
                                    - generic "Current details for Doorway · client 6698" [ref=e186] [cursor=pointer]:
                                        - generic [ref=e189]:
                                            - text: Current details
                                            - generic [ref=e190]: for Doorway
                                            - text: · client 6698
                            - link "Full patch" [ref=e192] [cursor=pointer]:
                                - /url: /change/2026/06-30#doorman
                        - listitem [ref=e195]:
                            - generic [ref=e196]:
                                - heading [level=4] [ref=e197]:
                                    - link [ref=e198] [cursor=pointer]:
                                        - /url: /change/2026/minor-06-11#doorman
                                        - time [ref=e199]: June 11th, 2026
                                - generic [ref=e200]: 2 changes
                            - generic [ref=e202]:
                                - heading "Call Bell" [level=5] [ref=e204]
                                - list [ref=e205]:
                                    - listitem [ref=e206]: Call Bell explosion damage spirit scaling reduced from 1.3 to 1.2
                                    - listitem [ref=e207]: Call Bell T3 spirit scaling reduced from 0.4 to 0.35
                                - group [ref=e209]:
                                    - generic "Current details for Call Bell · client 6698" [ref=e210] [cursor=pointer]:
                                        - generic [ref=e213]:
                                            - text: Current details
                                            - generic [ref=e214]: for Call Bell
                                            - text: · client 6698
                            - link "Full patch" [ref=e216] [cursor=pointer]:
                                - /url: /change/2026/minor-06-11#doorman
                        - listitem [ref=e219]:
                            - generic [ref=e220]:
                                - heading [level=4] [ref=e221]:
                                    - link [ref=e222] [cursor=pointer]:
                                        - /url: /change/2026/05-22#doorman
                                        - time [ref=e223]: May 22nd, 2026
                                - generic [ref=e224]: 8 changes
                            - generic [ref=e225]:
                                - generic [ref=e226]:
                                    - heading "Call Bell" [level=5] [ref=e228]
                                    - list [ref=e229]:
                                        - listitem [ref=e230]: Call Bell radius reduced from 6m to 5.5m
                                        - listitem [ref=e231]: Call Bell T3 radius increased from +4m to +4.5m
                                        - listitem [ref=e232]: Call Bell explosion damage spirit scaling reduced from 1.4 to 1.3
                                        - listitem [ref=e233]: Call Bell inaccuracy debuff no longer diminishes from 100% to 0% over 1 second (the rest of the debuff is 4s)
                                        - listitem [ref=e234]: Call Bell inaccuracy debuff reduced from -100% to -40% (lasts the full duration)
                                    - group [ref=e236]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e237] [cursor=pointer]:
                                            - generic [ref=e240]:
                                                - text: Current details
                                                - generic [ref=e241]: for Call Bell
                                                - text: · client 6698
                                - generic [ref=e242]:
                                    - heading "Doorway" [level=5] [ref=e244]
                                    - list [ref=e245]:
                                        - listitem [ref=e246]: Doorways close sub ability now starts on cooldown for 8s
                                        - listitem [ref=e247]: Doorway is no longer unsilenceable
                                    - group [ref=e249]:
                                        - generic "Current details for Doorway · client 6698" [ref=e250] [cursor=pointer]:
                                            - generic [ref=e253]:
                                                - text: Current details
                                                - generic [ref=e254]: for Doorway
                                                - text: · client 6698
                                - generic [ref=e255]:
                                    - heading "Luggage Cart" [level=5] [ref=e257]
                                    - list [ref=e258]:
                                        - listitem [ref=e259]: Fixed recent bug causing Luggage Cart not being dispelled
                                    - group [ref=e261]:
                                        - generic "Current details for Luggage Cart · client 6698" [ref=e262] [cursor=pointer]:
                                            - generic [ref=e265]:
                                                - text: Current details
                                                - generic [ref=e266]: for Luggage Cart
                                                - text: · client 6698
                            - link "Full patch" [ref=e268] [cursor=pointer]:
                                - /url: /change/2026/05-22#doorman
                        - listitem [ref=e271]:
                            - generic [ref=e272]:
                                - heading [level=4] [ref=e273]:
                                    - link [ref=e274] [cursor=pointer]:
                                        - /url: /change/2026/04-30#doorman
                                        - time [ref=e275]: April 30th, 2026
                                - generic [ref=e276]: 1 change
                            - generic [ref=e278]:
                                - heading "Doorway" [level=5] [ref=e280]
                                - list [ref=e281]:
                                    - listitem [ref=e282]: Fixed a bug that could allow you to bring the Urn through a doorway
                                - group [ref=e284]:
                                    - generic "Current details for Doorway · client 6698" [ref=e285] [cursor=pointer]:
                                        - generic [ref=e288]:
                                            - text: Current details
                                            - generic [ref=e289]: for Doorway
                                            - text: · client 6698
                            - link "Full patch" [ref=e291] [cursor=pointer]:
                                - /url: /change/2026/04-30#doorman
                        - listitem [ref=e294]:
                            - generic [ref=e295]:
                                - heading [level=4] [ref=e296]:
                                    - link [ref=e297] [cursor=pointer]:
                                        - /url: /change/2026/04-10#doorman
                                        - time [ref=e298]: April 10th, 2026
                                - generic [ref=e299]: 3 changes
                            - generic [ref=e300]:
                                - generic [ref=e301]:
                                    - heading "Doorways" [level=5] [ref=e303]
                                    - list [ref=e304]:
                                        - listitem [ref=e305]: Doorways now reveal on the minimap for enemies when they are within LOS
                                - generic [ref=e306]:
                                    - heading "Luggage Cart" [level=5] [ref=e308]
                                    - list [ref=e309]:
                                        - listitem [ref=e310]: Luggage Cart collision size reduced by 10%
                                        - listitem [ref=e311]: Luggage Cart no longer stuns enemies, just immobilizes/movement controls them (this means you can use dispel magic to get off)
                                    - group [ref=e313]:
                                        - generic "Current details for Luggage Cart · client 6698" [ref=e314] [cursor=pointer]:
                                            - generic [ref=e317]:
                                                - text: Current details
                                                - generic [ref=e318]: for Luggage Cart
                                                - text: · client 6698
                            - link "Full patch" [ref=e320] [cursor=pointer]:
                                - /url: /change/2026/04-10#doorman
                        - listitem [ref=e323]:
                            - generic [ref=e324]:
                                - heading [level=4] [ref=e325]:
                                    - link [ref=e326] [cursor=pointer]:
                                        - /url: /change/2026/03-25#doorman
                                        - time [ref=e327]: March 25th, 2026
                                - generic [ref=e328]: 5 changes
                            - generic [ref=e329]:
                                - generic [ref=e330]:
                                    - heading "Call Bell" [level=5] [ref=e332]
                                    - list [ref=e333]:
                                        - listitem [ref=e334]: Call Bell slow increased from 30% to 35%
                                        - listitem [ref=e335]: Call Bell radius increased from 5m to 6m
                                    - group [ref=e337]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e338] [cursor=pointer]:
                                            - generic [ref=e341]:
                                                - text: Current details
                                                - generic [ref=e342]: for Call Bell
                                                - text: · client 6698
                                - generic [ref=e343]:
                                    - heading "Doorway Distance" [level=5] [ref=e345]
                                    - list [ref=e346]:
                                        - listitem [ref=e347]: Doorway Distance increased from 60m to 70m
                                - generic [ref=e348]:
                                    - heading "Luggage Cart" [level=5] [ref=e350]
                                    - list [ref=e351]:
                                        - listitem [ref=e352]: Luggage Cart T2 now deals 75 bonus damage (0.6 spirit scaling) when hitting a wall
                                        - listitem [ref=e353]: Luggage Cart T3 stun duration reduced from 1.5s to 1.25s
                                    - group [ref=e355]:
                                        - generic "Current details for Luggage Cart · client 6698" [ref=e356] [cursor=pointer]:
                                            - generic [ref=e359]:
                                                - text: Current details
                                                - generic [ref=e360]: for Luggage Cart
                                                - text: · client 6698
                            - link "Full patch" [ref=e362] [cursor=pointer]:
                                - /url: /change/2026/03-25#doorman
                        - listitem [ref=e365]:
                            - generic [ref=e366]:
                                - heading [level=4] [ref=e367]:
                                    - link [ref=e368] [cursor=pointer]:
                                        - /url: /change/2026/03-21#doorman
                                        - time [ref=e369]: March 21st, 2026
                                - generic [ref=e370]: 13 changes
                            - generic [ref=e371]:
                                - generic [ref=e372]:
                                    - heading "Call Bell" [level=5] [ref=e374]
                                    - list [ref=e375]:
                                        - listitem [ref=e376]: Call Bell now continuously emits slow
                                        - listitem [ref=e377]: Call Bell impact damage spirit scaling reduced from 1 to 0.7
                                        - listitem [ref=e378]: Call Bell explosion damage spirit scaling reduced from 1.7 to 1.4
                                        - listitem [ref=e379]: Call Bell T1 changed from "+3m Radius" to "+1 Charge"
                                        - listitem [ref=e380]: Call Bell T3 no longer grants +1 Charge
                                        - listitem [ref=e381]: Call Bell T3 now also grants +4m Radius
                                        - listitem [ref=e382]: Call Bell T3 duration increased from +22s to +26s
                                        - listitem [ref=e383]: Call Bell T3 now also increases spirit scaling by +0.4
                                        - listitem [ref=e384]: Call Bell T3 no longer increases slow by -15%
                                    - group [ref=e386]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e387] [cursor=pointer]:
                                            - generic [ref=e390]:
                                                - text: Current details
                                                - generic [ref=e391]: for Call Bell
                                                - text: · client 6698
                                - generic [ref=e392]:
                                    - heading "Doorway" [level=5] [ref=e394]
                                    - list [ref=e395]:
                                        - listitem [ref=e396]: Doorway now shows the range of where the second door can be placed on the minimap.
                                        - listitem [ref=e397]: Doorway T3 distance spirit scaling reduced from 0.25 to 0.15
                                        - listitem [ref=e398]: Doorway T3 reduced from +50m to +45m
                                    - group [ref=e400]:
                                        - generic "Current details for Doorway · client 6698" [ref=e401] [cursor=pointer]:
                                            - generic [ref=e404]:
                                                - text: Current details
                                                - generic [ref=e405]: for Doorway
                                                - text: · client 6698
                                - generic [ref=e406]:
                                    - heading "Luggage Cart" [level=5] [ref=e408]
                                    - list [ref=e409]:
                                        - listitem [ref=e410]: Fixed Luggage Cart moving targets with Unstoppable if it goes through a Doorway
                                    - group [ref=e412]:
                                        - generic "Current details for Luggage Cart · client 6698" [ref=e413] [cursor=pointer]:
                                            - generic [ref=e416]:
                                                - text: Current details
                                                - generic [ref=e417]: for Luggage Cart
                                                - text: · client 6698
                            - link "Full patch" [ref=e419] [cursor=pointer]:
                                - /url: /change/2026/03-21#doorman
                        - listitem [ref=e422]:
                            - generic [ref=e423]:
                                - heading [level=4] [ref=e424]:
                                    - link [ref=e425] [cursor=pointer]:
                                        - /url: /change/2026/03-06#doorman
                                        - time [ref=e426]: March 6th, 2026
                                - generic [ref=e427]: 45 changes
                            - generic [ref=e428]:
                                - list [ref=e430]:
                                    - listitem [ref=e431]: Gun now pierces through targets at 50% reduced damage
                                - generic [ref=e432]:
                                    - heading "Call Bell" [level=5] [ref=e434]
                                    - list [ref=e435]:
                                        - listitem [ref=e436]: Call Bell time between charges increased from 4s to 6s
                                        - listitem [ref=e437]: Call Bell no longer has Impact Damage (was 40 with 1.0 scaling)
                                        - listitem [ref=e438]: Call Bell explosion damage increased from 55 to 85
                                        - listitem [ref=e439]: Call Bell explosion damage spirit scaling reduced from 1.7 to 1.4
                                        - listitem [ref=e440]: Call Bell T1 increased from +2m to +2.5m
                                        - listitem [ref=e441]: Call Bell T2 no longer has Impact Damage
                                        - listitem [ref=e442]: Call Bell T2 Explosion Damage increased from 40 to 75
                                        - listitem [ref=e443]: Call Bell T2 now increases spirit scaling by +0.6
                                        - listitem [ref=e444]: Call Bell T3 changed from "Impact causes half radius explosions" to "+1 Charge and +22s Lifetime. Causes the radius to continuously apply it's slow"
                                    - group [ref=e446]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e447] [cursor=pointer]:
                                            - generic [ref=e450]:
                                                - text: Current details
                                                - generic [ref=e451]: for Call Bell
                                                - text: · client 6698
                                - generic [ref=e452]:
                                    - heading "Doorway" [level=5] [ref=e454]
                                    - list [ref=e455]:
                                        - listitem [ref=e456]: Doorway now has a timer icon above the ability
                                        - listitem [ref=e457]: Doorway T1 duration increased from +10s to +15s
                                        - listitem [ref=e458]: Doorway T2 barrier duration increased from 8s to 12s
                                        - listitem [ref=e459]: Doorway T3 doorway distance now also scales with Spirit Power (0.25)
                                    - group [ref=e461]:
                                        - generic "Current details for Doorway · client 6698" [ref=e462] [cursor=pointer]:
                                            - generic [ref=e465]:
                                                - text: Current details
                                                - generic [ref=e466]: for Doorway
                                                - text: · client 6698
                                - generic [ref=e467]:
                                    - heading "Luggage Cart" [level=5] [ref=e469]
                                    - list [ref=e470]:
                                        - listitem [ref=e471]: Luggage Cart is now 20% larger (20% wider hitbox as well)
                                        - listitem [ref=e472]: Luggage Cart T1 changed from "-8s Cooldown" to "+60 Damage"
                                        - listitem [ref=e473]: Luggage Cart T2 increased from +15m Cast Range to +20m
                                        - listitem [ref=e474]: Luggage Cart T3 changed from "+45 Cart Damage and 117 Wall Damage and 1.2s Wall Stun" to "+1.5s Wall Stun and -15s Cooldown"
                                    - group [ref=e476]:
                                        - generic "Current details for Luggage Cart · client 6698" [ref=e477] [cursor=pointer]:
                                            - generic [ref=e480]:
                                                - text: Current details
                                                - generic [ref=e481]: for Luggage Cart
                                                - text: · client 6698
                                - list [ref=e483]:
                                    - listitem [ref=e484]: Fixed issues where the cart would hit a target coming out of the hotel before they were supposed to be allowed to be hit, causing the cart to not properly drag the target
                                - generic [ref=e485]:
                                    - heading "Hotel Guest" [level=5] [ref=e487]
                                    - list [ref=e488]:
                                        - listitem [ref=e489]: Hotel Guest cast range increased from 6m to 7m
                                        - listitem [ref=e490]: Hotel Guest no longer goes on cooldown if the target dies during the cast
                                        - listitem [ref=e491]: Hotel Guest fixed enemies not always landing in the correct spot on return
                                        - listitem [ref=e492]: Hotel Guest now supports instant cast settings
                                        - listitem [ref=e493]: Hotel Guest returning guest now has a 100% time slow that decays to 0% over 1s
                                        - listitem [ref=e494]: Hotel Guest cost of stay damage reduced from 150 to 75
                                        - listitem [ref=e495]: Hotel Guest failure to check-out damage reduced from 250 to 125
                                        - listitem [ref=e496]: Hotel Guest T1 changed from "+2m Cast Range" to "-1 Stamina and -25s Cooldown"
                                        - listitem [ref=e497]: Hotel Guest T2 changed from "Unstoppable while channeling" to "+1.5s Stun On Failure To Checkout and 150 Damage"
                                        - listitem [ref=e498]: Hotel Guest T3 changed from "-50s Cooldown" to "Unstoppable while Hotel is occupied. 10s Cooldown on Failure to Check Out"
                                        - listitem [ref=e499]: Hotel Guest T3 late checkout cooldown increased from 10s to 13s
                                    - group [ref=e501]:
                                        - generic "Current details for Hotel Guest · client 6698" [ref=e502] [cursor=pointer]:
                                            - generic [ref=e505]:
                                                - text: Current details
                                                - generic [ref=e506]: for Hotel Guest
                                                - text: · client 6698
                                - generic [ref=e507]:
                                    - heading "Call Bell" [level=5] [ref=e509]
                                    - list [ref=e510]:
                                        - listitem [ref=e511]: Call Bell now has Impact Damage (40+1) and Explosion Damage (55+1.7) as separate components again (previous values for impact/explosion)
                                        - listitem [ref=e512]: Call Bell T2 is now "+30 Impact Damage and +40 Explosion Damage"
                                        - listitem [ref=e513]: Call Bell T3 now also increases slow by 15%
                                        - listitem [ref=e514]: Call Bell now continuously emits slow
                                        - listitem [ref=e515]: Call Bell impact damage spirit scaling reduced from 1 to 0.7
                                        - listitem [ref=e516]: Call Bell T1 changed from "+3m Radius" to "+1 Charge"
                                        - listitem [ref=e517]: Call Bell T3 no longer grants +1 Charge
                                        - listitem [ref=e518]: Call Bell T3 now also grants +4m Radius
                                        - listitem [ref=e519]: Call Bell T3 duration increased from +22s to +26s
                                        - listitem [ref=e520]: Call Bell T3 now also increases spirit scaling by +0.4
                                        - listitem [ref=e521]: Call Bell T3 no longer increases slow by -15%
                                    - group [ref=e523]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e524] [cursor=pointer]:
                                            - generic [ref=e527]:
                                                - text: Current details
                                                - generic [ref=e528]: for Call Bell
                                                - text: · client 6698
                                - generic [ref=e529]:
                                    - heading "Doorway" [level=5] [ref=e531]
                                    - list [ref=e532]:
                                        - listitem [ref=e533]: Doorway now shows the range of where the second door can be placed on the minimap.
                                        - listitem [ref=e534]: Doorway T3 distance spirit scaling reduced from 0.25 to 0.15
                                        - listitem [ref=e535]: Doorway T3 reduced from +50m to +45m
                                    - group [ref=e537]:
                                        - generic "Current details for Doorway · client 6698" [ref=e538] [cursor=pointer]:
                                            - generic [ref=e541]:
                                                - text: Current details
                                                - generic [ref=e542]: for Doorway
                                                - text: · client 6698
                                - generic [ref=e543]:
                                    - heading "Luggage Cart" [level=5] [ref=e545]
                                    - list [ref=e546]:
                                        - listitem [ref=e547]: Fixed Luggage Cart moving targets with Unstoppable if it goes through a Doorway
                                    - group [ref=e549]:
                                        - generic "Current details for Luggage Cart · client 6698" [ref=e550] [cursor=pointer]:
                                            - generic [ref=e553]:
                                                - text: Current details
                                                - generic [ref=e554]: for Luggage Cart
                                                - text: · client 6698
                            - link "Full patch" [ref=e556] [cursor=pointer]:
                                - /url: /change/2026/03-06#doorman
                - region [ref=e559]:
                    - heading "2025 5 patches" [level=3] [ref=e560]:
                        - text: '2025'
                        - generic [ref=e561]: 5 patches
                    - list [ref=e562]:
                        - listitem [ref=e563]:
                            - generic [ref=e564]:
                                - heading [level=4] [ref=e565]:
                                    - link [ref=e566] [cursor=pointer]:
                                        - /url: /change/2025/11-21#doorman
                                        - time [ref=e567]: November 21st, 2025
                                - generic [ref=e568]: 5 changes
                            - generic [ref=e569]:
                                - list [ref=e571]:
                                    - listitem [ref=e572]: Base regen from 2 to 1
                                    - listitem [ref=e573]: Bullet damage falloff and effectiveness now use the actual distance traveled, rather than the distance between the starting position and end position. This fixes shooting through portals not using the right distance for falloff.
                                - generic [ref=e574]:
                                    - heading "Call Bell" [level=5] [ref=e576]
                                    - list [ref=e577]:
                                        - listitem [ref=e578]: Call Bell explosion damage reduced from 60 to 55
                                        - listitem [ref=e579]: Call Bell T2 explosion damage reduced from +50 to +45
                                        - listitem [ref=e580]: Call Bell impact damage spirit scaling increased from 0.7 to 1.0
                                    - group [ref=e582]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e583] [cursor=pointer]:
                                            - generic [ref=e586]:
                                                - text: Current details
                                                - generic [ref=e587]: for Call Bell
                                                - text: · client 6698
                            - link "Full patch" [ref=e589] [cursor=pointer]:
                                - /url: /change/2025/11-21#doorman
                        - listitem [ref=e592]:
                            - generic [ref=e593]:
                                - heading [level=4] [ref=e594]:
                                    - link [ref=e595] [cursor=pointer]:
                                        - /url: /change/2025/10-24#doorman
                                        - time [ref=e596]: October 24th, 2025
                                - generic [ref=e597]: 3 changes
                            - generic [ref=e598]:
                                - list [ref=e600]:
                                    - listitem [ref=e601]: Bullet damage growth per boon reduced from 1.15 to 1.0
                                    - listitem [ref=e602]: Outgoing headshot damage multiplier reduced by 25%
                                - generic [ref=e603]:
                                    - heading "Call Bell" [level=5] [ref=e605]
                                    - list [ref=e606]:
                                        - listitem [ref=e607]: Call Bell explosion damage spirit scaling increased from 1.5 to 1.7
                                    - group [ref=e609]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e610] [cursor=pointer]:
                                            - generic [ref=e613]:
                                                - text: Current details
                                                - generic [ref=e614]: for Call Bell
                                                - text: · client 6698
                            - link "Full patch" [ref=e616] [cursor=pointer]:
                                - /url: /change/2025/10-24#doorman
                        - listitem [ref=e619]:
                            - generic [ref=e620]:
                                - heading [level=4] [ref=e621]:
                                    - link [ref=e622] [cursor=pointer]:
                                        - /url: /change/2025/10-02#doorman
                                        - time [ref=e623]: October 2nd, 2025
                                - generic [ref=e624]: 3 changes
                            - generic [ref=e626]:
                                - heading "Doorway" [level=5] [ref=e628]
                                - list [ref=e629]:
                                    - listitem [ref=e630]: Doorway placement has been improved
                                    - listitem [ref=e631]: Doorway can now be placed through veils again
                                    - listitem [ref=e632]: Improved performance when placing Doorway
                                - group [ref=e634]:
                                    - generic "Current details for Doorway · client 6698" [ref=e635] [cursor=pointer]:
                                        - generic [ref=e638]:
                                            - text: Current details
                                            - generic [ref=e639]: for Doorway
                                            - text: · client 6698
                            - link "Full patch" [ref=e641] [cursor=pointer]:
                                - /url: /change/2025/10-02#doorman
                        - listitem [ref=e644]:
                            - generic [ref=e645]:
                                - heading [level=4] [ref=e646]:
                                    - link [ref=e647] [cursor=pointer]:
                                        - /url: /change/2025/09-04#doorman
                                        - time [ref=e648]: September 4th, 2025
                                - generic [ref=e649]: 3 changes
                            - generic [ref=e650]:
                                - generic [ref=e651]:
                                    - heading "Call Bell" [level=5] [ref=e653]
                                    - list [ref=e654]:
                                        - listitem [ref=e655]: Call Bell explosion damage reduced from 70 to 60
                                        - listitem [ref=e656]: Call Bell explosion damage spirit scaling increased from 1.4 to 1.5
                                    - group [ref=e658]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e659] [cursor=pointer]:
                                            - generic [ref=e662]:
                                                - text: Current details
                                                - generic [ref=e663]: for Call Bell
                                                - text: · client 6698
                                - generic [ref=e664]:
                                    - heading "Hotel Guest" [level=5] [ref=e666]
                                    - list [ref=e667]:
                                        - listitem [ref=e668]: Hotel Guest now teleports the target back to the beginning of the hotel if they fall into the void.
                                    - group [ref=e670]:
                                        - generic "Current details for Hotel Guest · client 6698" [ref=e671] [cursor=pointer]:
                                            - generic [ref=e674]:
                                                - text: Current details
                                                - generic [ref=e675]: for Hotel Guest
                                                - text: · client 6698
                            - link "Full patch" [ref=e677] [cursor=pointer]:
                                - /url: /change/2025/09-04#doorman
                        - listitem [ref=e680]:
                            - generic [ref=e681]:
                                - heading [level=4] [ref=e682]:
                                    - link [ref=e683] [cursor=pointer]:
                                        - /url: /change/2025/08-18#doorman
                                        - time [ref=e684]: August 18th, 2025
                                - generic [ref=e685]: 2 changes
                            - generic [ref=e686]:
                                - generic [ref=e687]:
                                    - heading "Call Bell" [level=5] [ref=e689]
                                    - list [ref=e690]:
                                        - listitem [ref=e691]: Call Bell cooldown increased from 16s to 18s
                                    - group [ref=e693]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e694] [cursor=pointer]:
                                            - generic [ref=e697]:
                                                - text: Current details
                                                - generic [ref=e698]: for Call Bell
                                                - text: · client 6698
                                - generic [ref=e699]:
                                    - heading "Luggage Cart" [level=5] [ref=e701]
                                    - list [ref=e702]:
                                        - listitem [ref=e703]: Luggage Cart T3 stun reduced duration from 1.5s to 1.2s
                                    - group [ref=e705]:
                                        - generic "Current details for Luggage Cart · client 6698" [ref=e706] [cursor=pointer]:
                                            - generic [ref=e709]:
                                                - text: Current details
                                                - generic [ref=e710]: for Luggage Cart
                                                - text: · client 6698
                            - link "Full patch" [ref=e712] [cursor=pointer]:
                                - /url: /change/2025/08-18#doorman
                - region [ref=e715]:
                    - heading "Reading context and sources" [level=2] [ref=e716]
                    - paragraph [ref=e717]: Current details describe game client 6698, not the game as it was when a patch shipped. Base values exclude upgrades and scaling.
                    - paragraph [ref=e718]:
                        - text: Current details from the
                        - link "Deadlock API" [ref=e719] [cursor=pointer]:
                            - /url: https://deadlock-api.com
                        - text: .
    - contentinfo [ref=e720]:
        - generic [ref=e722]:
            - link "deadlog.io" [ref=e723] [cursor=pointer]:
                - /url: /
            - generic [ref=e728]:
                - link "Browse all patches" [ref=e729] [cursor=pointer]:
                    - /url: /archive
                - paragraph [ref=e730]:
                    - text: Data provided by
                    - link "Deadlock API" [ref=e731] [cursor=pointer]:
                        - /url: https://deadlock-api.com
                - paragraph [ref=e732]: Deadlock is a trademark of Valve Corporation
            - generic [ref=e733]: // end transmission
    - region "Notifications"
```

# Test source

```ts
  257 |
  258 | 	await gotoApp(page, '/hero/abrams');
  259 | 	await expectTokenColor('brawler hero', '--type-brawler');
  260 | 	await gotoApp(page, '/item/active-reload');
  261 | 	await expectTokenColor('Weapon item', '--item-weapon');
  262 | });
  263 |
  264 | test('the mobile sheet close control uses the shared focus-visible ring', async ({
  265 | 	page
  266 | }, testInfo) => {
  267 | 	test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile sheet regression');
  268 | 	await gotoApp(page, '/');
  269 | 	await page.getByRole('button', { name: /Search & filter/ }).click();
  270 |
  271 | 	const close = page.getByRole('button', { name: 'Close' });
  272 | 	await expect(close).toBeVisible();
  273 | 	const target = await close.boundingBox();
  274 | 	expect(target?.width).toBeGreaterThanOrEqual(44);
  275 | 	expect(target?.height).toBeGreaterThanOrEqual(44);
  276 | 	await close.focus();
  277 | 	await page.keyboard.press('Tab');
  278 | 	await page.keyboard.press('Shift+Tab');
  279 | 	await expect(close).toBeFocused();
  280 | 	const boxShadow = await close.evaluate(
  281 | 		(element) => getComputedStyle(element).boxShadow
  282 | 	);
  283 | 	expect(boxShadow).toMatch(/0px 0px 0px 3px/);
  284 | });
  285 |
  286 | test('entity aliases render as selected and toggle without duplication', async ({
  287 | 	page
  288 | }) => {
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
> 357 | 	await expect(buttons).toHaveCount(names.length);
      |                        ^ Error: expect(locator).toHaveCount(expected) failed
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
  389 | 	await expect(cards).toHaveCount(4);
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
```
