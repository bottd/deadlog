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
                        - heading "The Doorman" [level=1] [ref=e43]
                        - paragraph [ref=e44]:
                            - generic [ref=e45]: mystic hero
                        - paragraph [ref=e46]:
                            - text: Last changed
                            - link [ref=e47] [cursor=pointer]:
                                - /url: /change/2026/08-12#doorman
                                - time [ref=e48]: August 12th, 2026
                    - group [ref=e49]:
                        - generic "16 patches · 109 changes Archive details" [ref=e50] [cursor=pointer]
                - region "Abilities" [ref=e51]:
                    - paragraph [ref=e52]: Filter by ability
                    - generic [ref=e53]:
                        - link "Call Bell" [ref=e54] [cursor=pointer]:
                            - /url: /ability/call-bell
                        - link "Doorway" [ref=e55] [cursor=pointer]:
                            - /url: /ability/doorway
                        - link "Luggage Cart" [ref=e56] [cursor=pointer]:
                            - /url: /ability/luggage-cart
                        - link "Hotel Guest" [ref=e57] [cursor=pointer]:
                            - /url: /ability/hotel-guest
                - region [ref=e58]:
                    - generic [ref=e59]:
                        - heading "Change History" [level=2] [ref=e60]
                        - generic [ref=e61]: 16 patches
                    - region [ref=e62]:
                        - heading "2026 11 patches" [level=3] [ref=e63]:
                            - text: '2026'
                            - generic [ref=e64]: 11 patches
                        - list [ref=e65]:
                            - listitem [ref=e66]:
                                - generic [ref=e67]:
                                    - heading [level=4] [ref=e68]:
                                        - link [ref=e69] [cursor=pointer]:
                                            - /url: /change/2026/08-12#doorman
                                            - time [ref=e70]: August 12th, 2026
                                    - generic [ref=e71]: 3 changes
                                - generic [ref=e72]:
                                    - generic [ref=e73]:
                                        - heading "Doorway" [level=5] [ref=e75]
                                        - list [ref=e76]:
                                            - listitem [ref=e77]: Doorway range reduced from 70m to 65m
                                        - group [ref=e79]:
                                            - generic "Current details for Doorway · client 6698" [ref=e80] [cursor=pointer]:
                                                - generic [ref=e83]:
                                                    - text: Current details
                                                    - generic [ref=e84]: for Doorway
                                                    - text: · client 6698
                                    - generic [ref=e85]:
                                        - heading "Luggage Cart" [level=5] [ref=e87]
                                        - list [ref=e88]:
                                            - listitem [ref=e89]: Walker will no longer consider Luggage Cart dragged enemies as valid targets to trigger the stomp on until soon after they are dropped off
                                            - listitem [ref=e90]: Similar to the Walker change above, the turrets in the healing area in base now also wait on considering valid targets
                                        - group [ref=e92]:
                                            - generic "Current details for Luggage Cart · client 6698" [ref=e93] [cursor=pointer]:
                                                - generic [ref=e96]:
                                                    - text: Current details
                                                    - generic [ref=e97]: for Luggage Cart
                                                    - text: · client 6698
                                - link "Full patch" [ref=e99] [cursor=pointer]:
                                    - /url: /change/2026/08-12#doorman
                            - listitem [ref=e102]:
                                - generic [ref=e103]:
                                    - heading [level=4] [ref=e104]:
                                        - link [ref=e105] [cursor=pointer]:
                                            - /url: /change/2026/minor-07-28#doorman
                                            - time [ref=e106]: July 28th, 2026
                                    - generic [ref=e107]: 9 changes
                                - generic [ref=e108]:
                                    - list [ref=e110]:
                                        - listitem [ref=e111]: Bullet damage rescaled from 26 + 1.19/boon to 24 + 1.25
                                    - generic [ref=e112]:
                                        - heading "Call Bell Charge Time" [level=5] [ref=e114]
                                        - list [ref=e115]:
                                            - listitem [ref=e116]: Call Bell Charge Time increased from 6s to 7s
                                    - generic [ref=e117]:
                                        - heading "Doorway" [level=5] [ref=e119]
                                        - list [ref=e120]:
                                            - listitem [ref=e121]: Doorway duration reduced from 20s to 15s
                                            - listitem [ref=e122]: Doorway T1 duration increased from +15s to +20s
                                            - listitem [ref=e123]: Doorway T3 range reduced from +45m to +40m
                                        - group [ref=e125]:
                                            - generic "Current details for Doorway · client 6698" [ref=e126] [cursor=pointer]:
                                                - generic [ref=e129]:
                                                    - text: Current details
                                                    - generic [ref=e130]: for Doorway
                                                    - text: · client 6698
                                    - generic [ref=e131]:
                                        - heading "Luggage Cart" [level=5] [ref=e133]
                                        - list [ref=e134]:
                                            - listitem [ref=e135]: Luggage Cart damage reduced from 80 to 60
                                            - listitem [ref=e136]: Luggage Cart T1 increased from +60 Damage to +80
                                            - listitem [ref=e137]: Luggage Cart range reduced from 25m to 20m
                                            - listitem [ref=e138]: Luggage Cart T2 increased from +20m Cast Range to +25m
                                        - group [ref=e140]:
                                            - generic "Current details for Luggage Cart · client 6698" [ref=e141] [cursor=pointer]:
                                                - generic [ref=e144]:
                                                    - text: Current details
                                                    - generic [ref=e145]: for Luggage Cart
                                                    - text: · client 6698
                                - link "Full patch" [ref=e147] [cursor=pointer]:
                                    - /url: /change/2026/minor-07-28#doorman
                            - listitem [ref=e150]:
                                - generic [ref=e151]:
                                    - heading [level=4] [ref=e152]:
                                        - link [ref=e153] [cursor=pointer]:
                                            - /url: /change/2026/minor-07-09#doorman
                                            - time [ref=e154]: July 9th, 2026
                                    - generic [ref=e155]: 3 changes
                                - generic [ref=e156]:
                                    - list [ref=e158]:
                                        - listitem [ref=e159]: Bullet damage rescaled from 29.26 + 1.1/boon to 26 + 1.19
                                        - listitem [ref=e160]: Crit scaling reduced from -25% to -30%
                                    - generic [ref=e161]:
                                        - heading "Hotel Guest" [level=5] [ref=e163]
                                        - list [ref=e164]:
                                            - listitem [ref=e165]: Hotel Guest T3 increased from 13s Cooldown on Failure to Check Out to 15s
                                        - group [ref=e167]:
                                            - generic "Current details for Hotel Guest · client 6698" [ref=e168] [cursor=pointer]:
                                                - generic [ref=e171]:
                                                    - text: Current details
                                                    - generic [ref=e172]: for Hotel Guest
                                                    - text: · client 6698
                                - link "Full patch" [ref=e174] [cursor=pointer]:
                                    - /url: /change/2026/minor-07-09#doorman
                            - listitem [ref=e177]:
                                - generic [ref=e178]:
                                    - heading [level=4] [ref=e179]:
                                        - link [ref=e180] [cursor=pointer]:
                                            - /url: /change/2026/06-30#doorman
                                            - time [ref=e181]: June 30th, 2026
                                    - generic [ref=e182]: 1 change
                                - generic [ref=e184]:
                                    - heading "Doorway" [level=5] [ref=e186]
                                    - list [ref=e187]:
                                        - listitem [ref=e188]: Doorway cooldown increased from 40s to 45s
                                    - group [ref=e190]:
                                        - generic "Current details for Doorway · client 6698" [ref=e191] [cursor=pointer]:
                                            - generic [ref=e194]:
                                                - text: Current details
                                                - generic [ref=e195]: for Doorway
                                                - text: · client 6698
                                - link "Full patch" [ref=e197] [cursor=pointer]:
                                    - /url: /change/2026/06-30#doorman
                            - listitem [ref=e200]:
                                - generic [ref=e201]:
                                    - heading [level=4] [ref=e202]:
                                        - link [ref=e203] [cursor=pointer]:
                                            - /url: /change/2026/minor-06-11#doorman
                                            - time [ref=e204]: June 11th, 2026
                                    - generic [ref=e205]: 2 changes
                                - generic [ref=e207]:
                                    - heading "Call Bell" [level=5] [ref=e209]
                                    - list [ref=e210]:
                                        - listitem [ref=e211]: Call Bell explosion damage spirit scaling reduced from 1.3 to 1.2
                                        - listitem [ref=e212]: Call Bell T3 spirit scaling reduced from 0.4 to 0.35
                                    - group [ref=e214]:
                                        - generic "Current details for Call Bell · client 6698" [ref=e215] [cursor=pointer]:
                                            - generic [ref=e218]:
                                                - text: Current details
                                                - generic [ref=e219]: for Call Bell
                                                - text: · client 6698
                                - link "Full patch" [ref=e221] [cursor=pointer]:
                                    - /url: /change/2026/minor-06-11#doorman
                            - listitem [ref=e224]:
                                - generic [ref=e225]:
                                    - heading [level=4] [ref=e226]:
                                        - link [ref=e227] [cursor=pointer]:
                                            - /url: /change/2026/05-22#doorman
                                            - time [ref=e228]: May 22nd, 2026
                                    - generic [ref=e229]: 8 changes
                                - generic [ref=e230]:
                                    - generic [ref=e231]:
                                        - heading "Call Bell" [level=5] [ref=e233]
                                        - list [ref=e234]:
                                            - listitem [ref=e235]: Call Bell radius reduced from 6m to 5.5m
                                            - listitem [ref=e236]: Call Bell T3 radius increased from +4m to +4.5m
                                            - listitem [ref=e237]: Call Bell explosion damage spirit scaling reduced from 1.4 to 1.3
                                            - listitem [ref=e238]: Call Bell inaccuracy debuff no longer diminishes from 100% to 0% over 1 second (the rest of the debuff is 4s)
                                            - listitem [ref=e239]: Call Bell inaccuracy debuff reduced from -100% to -40% (lasts the full duration)
                                        - group [ref=e241]:
                                            - generic "Current details for Call Bell · client 6698" [ref=e242] [cursor=pointer]:
                                                - generic [ref=e245]:
                                                    - text: Current details
                                                    - generic [ref=e246]: for Call Bell
                                                    - text: · client 6698
                                    - generic [ref=e247]:
                                        - heading "Doorway" [level=5] [ref=e249]
                                        - list [ref=e250]:
                                            - listitem [ref=e251]: Doorways close sub ability now starts on cooldown for 8s
                                            - listitem [ref=e252]: Doorway is no longer unsilenceable
                                        - group [ref=e254]:
                                            - generic "Current details for Doorway · client 6698" [ref=e255] [cursor=pointer]:
                                                - generic [ref=e258]:
                                                    - text: Current details
                                                    - generic [ref=e259]: for Doorway
                                                    - text: · client 6698
                                    - generic [ref=e260]:
                                        - heading "Luggage Cart" [level=5] [ref=e262]
                                        - list [ref=e263]:
                                            - listitem [ref=e264]: Fixed recent bug causing Luggage Cart not being dispelled
                                        - group [ref=e266]:
                                            - generic "Current details for Luggage Cart · client 6698" [ref=e267] [cursor=pointer]:
                                                - generic [ref=e270]:
                                                    - text: Current details
                                                    - generic [ref=e271]: for Luggage Cart
                                                    - text: · client 6698
                                - link "Full patch" [ref=e273] [cursor=pointer]:
                                    - /url: /change/2026/05-22#doorman
                            - listitem [ref=e276]:
                                - generic [ref=e277]:
                                    - heading [level=4] [ref=e278]:
                                        - link [ref=e279] [cursor=pointer]:
                                            - /url: /change/2026/04-30#doorman
                                            - time [ref=e280]: April 30th, 2026
                                    - generic [ref=e281]: 1 change
                                - generic [ref=e283]:
                                    - heading "Doorway" [level=5] [ref=e285]
                                    - list [ref=e286]:
                                        - listitem [ref=e287]: Fixed a bug that could allow you to bring the Urn through a doorway
                                    - group [ref=e289]:
                                        - generic "Current details for Doorway · client 6698" [ref=e290] [cursor=pointer]:
                                            - generic [ref=e293]:
                                                - text: Current details
                                                - generic [ref=e294]: for Doorway
                                                - text: · client 6698
                                - link "Full patch" [ref=e296] [cursor=pointer]:
                                    - /url: /change/2026/04-30#doorman
                            - listitem [ref=e299]:
                                - generic [ref=e300]:
                                    - heading [level=4] [ref=e301]:
                                        - link [ref=e302] [cursor=pointer]:
                                            - /url: /change/2026/04-10#doorman
                                            - time [ref=e303]: April 10th, 2026
                                    - generic [ref=e304]: 3 changes
                                - generic [ref=e305]:
                                    - generic [ref=e306]:
                                        - heading "Doorways" [level=5] [ref=e308]
                                        - list [ref=e309]:
                                            - listitem [ref=e310]: Doorways now reveal on the minimap for enemies when they are within LOS
                                    - generic [ref=e311]:
                                        - heading "Luggage Cart" [level=5] [ref=e313]
                                        - list [ref=e314]:
                                            - listitem [ref=e315]: Luggage Cart collision size reduced by 10%
                                            - listitem [ref=e316]: Luggage Cart no longer stuns enemies, just immobilizes/movement controls them (this means you can use dispel magic to get off)
                                        - group [ref=e318]:
                                            - generic "Current details for Luggage Cart · client 6698" [ref=e319] [cursor=pointer]:
                                                - generic [ref=e322]:
                                                    - text: Current details
                                                    - generic [ref=e323]: for Luggage Cart
                                                    - text: · client 6698
                                - link "Full patch" [ref=e325] [cursor=pointer]:
                                    - /url: /change/2026/04-10#doorman
                            - listitem [ref=e328]:
                                - generic [ref=e329]:
                                    - heading [level=4] [ref=e330]:
                                        - link [ref=e331] [cursor=pointer]:
                                            - /url: /change/2026/03-25#doorman
                                            - time [ref=e332]: March 25th, 2026
                                    - generic [ref=e333]: 5 changes
                                - generic [ref=e334]:
                                    - generic [ref=e335]:
                                        - heading "Call Bell" [level=5] [ref=e337]
                                        - list [ref=e338]:
                                            - listitem [ref=e339]: Call Bell slow increased from 30% to 35%
                                            - listitem [ref=e340]: Call Bell radius increased from 5m to 6m
                                        - group [ref=e342]:
                                            - generic "Current details for Call Bell · client 6698" [ref=e343] [cursor=pointer]:
                                                - generic [ref=e346]:
                                                    - text: Current details
                                                    - generic [ref=e347]: for Call Bell
                                                    - text: · client 6698
                                    - generic [ref=e348]:
                                        - heading "Doorway Distance" [level=5] [ref=e350]
                                        - list [ref=e351]:
                                            - listitem [ref=e352]: Doorway Distance increased from 60m to 70m
                                    - generic [ref=e353]:
                                        - heading "Luggage Cart" [level=5] [ref=e355]
                                        - list [ref=e356]:
                                            - listitem [ref=e357]: Luggage Cart T2 now deals 75 bonus damage (0.6 spirit scaling) when hitting a wall
                                            - listitem [ref=e358]: Luggage Cart T3 stun duration reduced from 1.5s to 1.25s
                                        - group [ref=e360]:
                                            - generic "Current details for Luggage Cart · client 6698" [ref=e361] [cursor=pointer]:
                                                - generic [ref=e364]:
                                                    - text: Current details
                                                    - generic [ref=e365]: for Luggage Cart
                                                    - text: · client 6698
                                - link "Full patch" [ref=e367] [cursor=pointer]:
                                    - /url: /change/2026/03-25#doorman
                            - listitem [ref=e370]:
                                - generic [ref=e371]:
                                    - heading [level=4] [ref=e372]:
                                        - link [ref=e373] [cursor=pointer]:
                                            - /url: /change/2026/03-21#doorman
                                            - time [ref=e374]: March 21st, 2026
                                    - generic [ref=e375]: 13 changes
                                - generic [ref=e376]:
                                    - generic [ref=e377]:
                                        - heading "Call Bell" [level=5] [ref=e379]
                                        - list [ref=e380]:
                                            - listitem [ref=e381]: Call Bell now continuously emits slow
                                            - listitem [ref=e382]: Call Bell impact damage spirit scaling reduced from 1 to 0.7
                                            - listitem [ref=e383]: Call Bell explosion damage spirit scaling reduced from 1.7 to 1.4
                                            - listitem [ref=e384]: Call Bell T1 changed from "+3m Radius" to "+1 Charge"
                                            - listitem [ref=e385]: Call Bell T3 no longer grants +1 Charge
                                            - listitem [ref=e386]: Call Bell T3 now also grants +4m Radius
                                            - listitem [ref=e387]: Call Bell T3 duration increased from +22s to +26s
                                            - listitem [ref=e388]: Call Bell T3 now also increases spirit scaling by +0.4
                                            - listitem [ref=e389]: Call Bell T3 no longer increases slow by -15%
                                        - group [ref=e391]:
                                            - generic "Current details for Call Bell · client 6698" [ref=e392] [cursor=pointer]:
                                                - generic [ref=e395]:
                                                    - text: Current details
                                                    - generic [ref=e396]: for Call Bell
                                                    - text: · client 6698
                                    - generic [ref=e397]:
                                        - heading "Doorway" [level=5] [ref=e399]
                                        - list [ref=e400]:
                                            - listitem [ref=e401]: Doorway now shows the range of where the second door can be placed on the minimap.
                                            - listitem [ref=e402]: Doorway T3 distance spirit scaling reduced from 0.25 to 0.15
                                            - listitem [ref=e403]: Doorway T3 reduced from +50m to +45m
                                        - group [ref=e405]:
                                            - generic "Current details for Doorway · client 6698" [ref=e406] [cursor=pointer]:
                                                - generic [ref=e409]:
                                                    - text: Current details
                                                    - generic [ref=e410]: for Doorway
                                                    - text: · client 6698
                                    - generic [ref=e411]:
                                        - heading "Luggage Cart" [level=5] [ref=e413]
                                        - list [ref=e414]:
                                            - listitem [ref=e415]: Fixed Luggage Cart moving targets with Unstoppable if it goes through a Doorway
                                        - group [ref=e417]:
                                            - generic "Current details for Luggage Cart · client 6698" [ref=e418] [cursor=pointer]:
                                                - generic [ref=e421]:
                                                    - text: Current details
                                                    - generic [ref=e422]: for Luggage Cart
                                                    - text: · client 6698
                                - link "Full patch" [ref=e424] [cursor=pointer]:
                                    - /url: /change/2026/03-21#doorman
                            - listitem [ref=e427]:
                                - generic [ref=e428]:
                                    - heading [level=4] [ref=e429]:
                                        - link [ref=e430] [cursor=pointer]:
                                            - /url: /change/2026/03-06#doorman
                                            - time [ref=e431]: March 6th, 2026
                                    - generic [ref=e432]: 45 changes
                                - generic [ref=e433]:
                                    - list [ref=e435]:
                                        - listitem [ref=e436]: Gun now pierces through targets at 50% reduced damage
                                    - generic [ref=e437]:
                                        - heading "Call Bell" [level=5] [ref=e439]
                                        - list [ref=e440]:
                                            - listitem [ref=e441]: Call Bell time between charges increased from 4s to 6s
                                            - listitem [ref=e442]: Call Bell no longer has Impact Damage (was 40 with 1.0 scaling)
                                            - listitem [ref=e443]: Call Bell explosion damage increased from 55 to 85
                                            - listitem [ref=e444]: Call Bell explosion damage spirit scaling reduced from 1.7 to 1.4
                                            - listitem [ref=e445]: Call Bell T1 increased from +2m to +2.5m
                                            - listitem [ref=e446]: Call Bell T2 no longer has Impact Damage
                                            - listitem [ref=e447]: Call Bell T2 Explosion Damage increased from 40 to 75
                                            - listitem [ref=e448]: Call Bell T2 now increases spirit scaling by +0.6
                                            - listitem [ref=e449]: Call Bell T3 changed from "Impact causes half radius explosions" to "+1 Charge and +22s Lifetime. Causes the radius to continuously apply it's slow"
                                        - group [ref=e451]:
                                            - generic "Current details for Call Bell · client 6698" [ref=e452] [cursor=pointer]:
                                                - generic [ref=e455]:
                                                    - text: Current details
                                                    - generic [ref=e456]: for Call Bell
                                                    - text: · client 6698
                                    - generic [ref=e457]:
                                        - heading "Doorway" [level=5] [ref=e459]
                                        - list [ref=e460]:
                                            - listitem [ref=e461]: Doorway now has a timer icon above the ability
                                            - listitem [ref=e462]: Doorway T1 duration increased from +10s to +15s
                                            - listitem [ref=e463]: Doorway T2 barrier duration increased from 8s to 12s
                                            - listitem [ref=e464]: Doorway T3 doorway distance now also scales with Spirit Power (0.25)
                                        - group [ref=e466]:
                                            - generic "Current details for Doorway · client 6698" [ref=e467] [cursor=pointer]:
                                                - generic [ref=e470]:
                                                    - text: Current details
                                                    - generic [ref=e471]: for Doorway
                                                    - text: · client 6698
                                    - generic [ref=e472]:
                                        - heading "Luggage Cart" [level=5] [ref=e474]
                                        - list [ref=e475]:
                                            - listitem [ref=e476]: Luggage Cart is now 20% larger (20% wider hitbox as well)
                                            - listitem [ref=e477]: Luggage Cart T1 changed from "-8s Cooldown" to "+60 Damage"
                                            - listitem [ref=e478]: Luggage Cart T2 increased from +15m Cast Range to +20m
                                            - listitem [ref=e479]: Luggage Cart T3 changed from "+45 Cart Damage and 117 Wall Damage and 1.2s Wall Stun" to "+1.5s Wall Stun and -15s Cooldown"
                                        - group [ref=e481]:
                                            - generic "Current details for Luggage Cart · client 6698" [ref=e482] [cursor=pointer]:
                                                - generic [ref=e485]:
                                                    - text: Current details
                                                    - generic [ref=e486]: for Luggage Cart
                                                    - text: · client 6698
                                    - list [ref=e488]:
                                        - listitem [ref=e489]: Fixed issues where the cart would hit a target coming out of the hotel before they were supposed to be allowed to be hit, causing the cart to not properly drag the target
                                    - generic [ref=e490]:
                                        - heading "Hotel Guest" [level=5] [ref=e492]
                                        - list [ref=e493]:
                                            - listitem [ref=e494]: Hotel Guest cast range increased from 6m to 7m
                                            - listitem [ref=e495]: Hotel Guest no longer goes on cooldown if the target dies during the cast
                                            - listitem [ref=e496]: Hotel Guest fixed enemies not always landing in the correct spot on return
                                            - listitem [ref=e497]: Hotel Guest now supports instant cast settings
                                            - listitem [ref=e498]: Hotel Guest returning guest now has a 100% time slow that decays to 0% over 1s
                                            - listitem [ref=e499]: Hotel Guest cost of stay damage reduced from 150 to 75
                                            - listitem [ref=e500]: Hotel Guest failure to check-out damage reduced from 250 to 125
                                            - listitem [ref=e501]: Hotel Guest T1 changed from "+2m Cast Range" to "-1 Stamina and -25s Cooldown"
                                            - listitem [ref=e502]: Hotel Guest T2 changed from "Unstoppable while channeling" to "+1.5s Stun On Failure To Checkout and 150 Damage"
                                            - listitem [ref=e503]: Hotel Guest T3 changed from "-50s Cooldown" to "Unstoppable while Hotel is occupied. 10s Cooldown on Failure to Check Out"
                                            - listitem [ref=e504]: Hotel Guest T3 late checkout cooldown increased from 10s to 13s
                                        - group [ref=e506]:
                                            - generic "Current details for Hotel Guest · client 6698" [ref=e507] [cursor=pointer]:
                                                - generic [ref=e510]:
                                                    - text: Current details
                                                    - generic [ref=e511]: for Hotel Guest
                                                    - text: · client 6698
                                    - generic [ref=e512]:
                                        - heading "Call Bell" [level=5] [ref=e514]
                                        - list [ref=e515]:
                                            - listitem [ref=e516]: Call Bell now has Impact Damage (40+1) and Explosion Damage (55+1.7) as separate components again (previous values for impact/explosion)
                                            - listitem [ref=e517]: Call Bell T2 is now "+30 Impact Damage and +40 Explosion Damage"
                                            - listitem [ref=e518]: Call Bell T3 now also increases slow by 15%
                                            - listitem [ref=e519]: Call Bell now continuously emits slow
                                            - listitem [ref=e520]: Call Bell impact damage spirit scaling reduced from 1 to 0.7
                                            - listitem [ref=e521]: Call Bell T1 changed from "+3m Radius" to "+1 Charge"
                                            - listitem [ref=e522]: Call Bell T3 no longer grants +1 Charge
                                            - listitem [ref=e523]: Call Bell T3 now also grants +4m Radius
                                            - listitem [ref=e524]: Call Bell T3 duration increased from +22s to +26s
                                            - listitem [ref=e525]: Call Bell T3 now also increases spirit scaling by +0.4
                                            - listitem [ref=e526]: Call Bell T3 no longer increases slow by -15%
                                        - group [ref=e528]:
                                            - generic "Current details for Call Bell · client 6698" [ref=e529] [cursor=pointer]:
                                                - generic [ref=e532]:
                                                    - text: Current details
                                                    - generic [ref=e533]: for Call Bell
                                                    - text: · client 6698
                                    - generic [ref=e534]:
                                        - heading "Doorway" [level=5] [ref=e536]
                                        - list [ref=e537]:
                                            - listitem [ref=e538]: Doorway now shows the range of where the second door can be placed on the minimap.
                                            - listitem [ref=e539]: Doorway T3 distance spirit scaling reduced from 0.25 to 0.15
                                            - listitem [ref=e540]: Doorway T3 reduced from +50m to +45m
                                        - group [ref=e542]:
                                            - generic "Current details for Doorway · client 6698" [ref=e543] [cursor=pointer]:
                                                - generic [ref=e546]:
                                                    - text: Current details
                                                    - generic [ref=e547]: for Doorway
                                                    - text: · client 6698
                                    - generic [ref=e548]:
                                        - heading "Luggage Cart" [level=5] [ref=e550]
                                        - list [ref=e551]:
                                            - listitem [ref=e552]: Fixed Luggage Cart moving targets with Unstoppable if it goes through a Doorway
                                        - group [ref=e554]:
                                            - generic "Current details for Luggage Cart · client 6698" [ref=e555] [cursor=pointer]:
                                                - generic [ref=e558]:
                                                    - text: Current details
                                                    - generic [ref=e559]: for Luggage Cart
                                                    - text: · client 6698
                                - link "Full patch" [ref=e561] [cursor=pointer]:
                                    - /url: /change/2026/03-06#doorman
                    - region [ref=e564]:
                        - heading "2025 5 patches" [level=3] [ref=e565]:
                            - text: '2025'
                            - generic [ref=e566]: 5 patches
                        - list [ref=e567]:
                            - listitem [ref=e568]:
                                - generic [ref=e569]:
                                    - heading [level=4] [ref=e570]:
                                        - link [ref=e571] [cursor=pointer]:
                                            - /url: /change/2025/11-21#doorman
                                            - time [ref=e572]: November 21st, 2025
                                    - generic [ref=e573]: 5 changes
                                - generic [ref=e574]:
                                    - list [ref=e576]:
                                        - listitem [ref=e577]: Base regen from 2 to 1
                                        - listitem [ref=e578]: Bullet damage falloff and effectiveness now use the actual distance traveled, rather than the distance between the starting position and end position. This fixes shooting through portals not using the right distance for falloff.
                                    - generic [ref=e579]:
                                        - heading "Call Bell" [level=5] [ref=e581]
                                        - list [ref=e582]:
                                            - listitem [ref=e583]: Call Bell explosion damage reduced from 60 to 55
                                            - listitem [ref=e584]: Call Bell T2 explosion damage reduced from +50 to +45
                                            - listitem [ref=e585]: Call Bell impact damage spirit scaling increased from 0.7 to 1.0
                                        - group [ref=e587]:
                                            - generic "Current details for Call Bell · client 6698" [ref=e588] [cursor=pointer]:
                                                - generic [ref=e591]:
                                                    - text: Current details
                                                    - generic [ref=e592]: for Call Bell
                                                    - text: · client 6698
                                - link "Full patch" [ref=e594] [cursor=pointer]:
                                    - /url: /change/2025/11-21#doorman
                            - listitem [ref=e597]:
                                - generic [ref=e598]:
                                    - heading [level=4] [ref=e599]:
                                        - link [ref=e600] [cursor=pointer]:
                                            - /url: /change/2025/10-24#doorman
                                            - time [ref=e601]: October 24th, 2025
                                    - generic [ref=e602]: 3 changes
                                - generic [ref=e603]:
                                    - list [ref=e605]:
                                        - listitem [ref=e606]: Bullet damage growth per boon reduced from 1.15 to 1.0
                                        - listitem [ref=e607]: Outgoing headshot damage multiplier reduced by 25%
                                    - generic [ref=e608]:
                                        - heading "Call Bell" [level=5] [ref=e610]
                                        - list [ref=e611]:
                                            - listitem [ref=e612]: Call Bell explosion damage spirit scaling increased from 1.5 to 1.7
                                        - group [ref=e614]:
                                            - generic "Current details for Call Bell · client 6698" [ref=e615] [cursor=pointer]:
                                                - generic [ref=e618]:
                                                    - text: Current details
                                                    - generic [ref=e619]: for Call Bell
                                                    - text: · client 6698
                                - link "Full patch" [ref=e621] [cursor=pointer]:
                                    - /url: /change/2025/10-24#doorman
                            - listitem [ref=e624]:
                                - generic [ref=e625]:
                                    - heading [level=4] [ref=e626]:
                                        - link [ref=e627] [cursor=pointer]:
                                            - /url: /change/2025/10-02#doorman
                                            - time [ref=e628]: October 2nd, 2025
                                    - generic [ref=e629]: 3 changes
                                - generic [ref=e631]:
                                    - heading "Doorway" [level=5] [ref=e633]
                                    - list [ref=e634]:
                                        - listitem [ref=e635]: Doorway placement has been improved
                                        - listitem [ref=e636]: Doorway can now be placed through veils again
                                        - listitem [ref=e637]: Improved performance when placing Doorway
                                    - group [ref=e639]:
                                        - generic "Current details for Doorway · client 6698" [ref=e640] [cursor=pointer]:
                                            - generic [ref=e643]:
                                                - text: Current details
                                                - generic [ref=e644]: for Doorway
                                                - text: · client 6698
                                - link "Full patch" [ref=e646] [cursor=pointer]:
                                    - /url: /change/2025/10-02#doorman
                            - listitem [ref=e649]:
                                - generic [ref=e650]:
                                    - heading [level=4] [ref=e651]:
                                        - link [ref=e652] [cursor=pointer]:
                                            - /url: /change/2025/09-04#doorman
                                            - time [ref=e653]: September 4th, 2025
                                    - generic [ref=e654]: 3 changes
                                - generic [ref=e655]:
                                    - generic [ref=e656]:
                                        - heading "Call Bell" [level=5] [ref=e658]
                                        - list [ref=e659]:
                                            - listitem [ref=e660]: Call Bell explosion damage reduced from 70 to 60
                                            - listitem [ref=e661]: Call Bell explosion damage spirit scaling increased from 1.4 to 1.5
                                        - group [ref=e663]:
                                            - generic "Current details for Call Bell · client 6698" [ref=e664] [cursor=pointer]:
                                                - generic [ref=e667]:
                                                    - text: Current details
                                                    - generic [ref=e668]: for Call Bell
                                                    - text: · client 6698
                                    - generic [ref=e669]:
                                        - heading "Hotel Guest" [level=5] [ref=e671]
                                        - list [ref=e672]:
                                            - listitem [ref=e673]: Hotel Guest now teleports the target back to the beginning of the hotel if they fall into the void.
                                        - group [ref=e675]:
                                            - generic "Current details for Hotel Guest · client 6698" [ref=e676] [cursor=pointer]:
                                                - generic [ref=e679]:
                                                    - text: Current details
                                                    - generic [ref=e680]: for Hotel Guest
                                                    - text: · client 6698
                                - link "Full patch" [ref=e682] [cursor=pointer]:
                                    - /url: /change/2025/09-04#doorman
                            - listitem [ref=e685]:
                                - generic [ref=e686]:
                                    - heading [level=4] [ref=e687]:
                                        - link [ref=e688] [cursor=pointer]:
                                            - /url: /change/2025/08-18#doorman
                                            - time [ref=e689]: August 18th, 2025
                                    - generic [ref=e690]: 2 changes
                                - generic [ref=e691]:
                                    - generic [ref=e692]:
                                        - heading "Call Bell" [level=5] [ref=e694]
                                        - list [ref=e695]:
                                            - listitem [ref=e696]: Call Bell cooldown increased from 16s to 18s
                                        - group [ref=e698]:
                                            - generic "Current details for Call Bell · client 6698" [ref=e699] [cursor=pointer]:
                                                - generic [ref=e702]:
                                                    - text: Current details
                                                    - generic [ref=e703]: for Call Bell
                                                    - text: · client 6698
                                    - generic [ref=e704]:
                                        - heading "Luggage Cart" [level=5] [ref=e706]
                                        - list [ref=e707]:
                                            - listitem [ref=e708]: Luggage Cart T3 stun reduced duration from 1.5s to 1.2s
                                        - group [ref=e710]:
                                            - generic "Current details for Luggage Cart · client 6698" [ref=e711] [cursor=pointer]:
                                                - generic [ref=e714]:
                                                    - text: Current details
                                                    - generic [ref=e715]: for Luggage Cart
                                                    - text: · client 6698
                                - link "Full patch" [ref=e717] [cursor=pointer]:
                                    - /url: /change/2025/08-18#doorman
                    - region [ref=e720]:
                        - heading "Reading context and sources" [level=2] [ref=e721]
                        - paragraph [ref=e722]: Current details describe game client 6698, not the game as it was when a patch shipped. Base values exclude upgrades and scaling.
                        - paragraph [ref=e723]:
                            - text: Current details from the
                            - link "Deadlock API" [ref=e724] [cursor=pointer]:
                                - /url: https://deadlock-api.com
                            - text: .
            - complementary "Change history index" [ref=e725]:
                - navigation "Change history contents" [ref=e727]:
                    - paragraph [ref=e729]: History
                    - generic [ref=e730]:
                        - generic [ref=e731]:
                            - link "2026 11" [ref=e732] [cursor=pointer]:
                                - /url: '#year-2026'
                                - text: '2026'
                                - generic [ref=e734]: '11'
                            - list [ref=e735]:
                                - listitem [ref=e736]:
                                    - link "August 12th, 2026 3" [ref=e737] [cursor=pointer]:
                                        - /url: '#history-162570'
                                        - generic [ref=e738]: August 12th, 2026
                                        - generic [ref=e739]: '3'
                                - listitem [ref=e740]:
                                    - link "July 28th, 2026 9" [ref=e741] [cursor=pointer]:
                                        - /url: '#history-1839041357039193'
                                        - generic [ref=e742]: July 28th, 2026
                                        - generic [ref=e743]: '9'
                                - listitem [ref=e744]:
                                    - link "July 9th, 2026 3" [ref=e745] [cursor=pointer]:
                                        - /url: '#history-1836506165584438'
                                        - generic [ref=e746]: July 9th, 2026
                                        - generic [ref=e747]: '3'
                                - listitem [ref=e748]:
                                    - link "June 30th, 2026 1" [ref=e749] [cursor=pointer]:
                                        - /url: '#history-146261'
                                        - generic [ref=e750]: June 30th, 2026
                                        - generic [ref=e751]: '1'
                                - listitem [ref=e752]:
                                    - link "June 11th, 2026 2" [ref=e753] [cursor=pointer]:
                                        - /url: '#history-1835236783562074'
                                        - generic [ref=e754]: June 11th, 2026
                                        - generic [ref=e755]: '2'
                                - listitem [ref=e756]:
                                    - link "May 22nd, 2026 8" [ref=e757] [cursor=pointer]:
                                        - /url: '#history-135477'
                                        - generic [ref=e758]: May 22nd, 2026
                                        - generic [ref=e759]: '8'
                                - listitem [ref=e760]:
                                    - link "April 30th, 2026 1" [ref=e761] [cursor=pointer]:
                                        - /url: '#history-129989'
                                        - generic [ref=e762]: April 30th, 2026
                                        - generic [ref=e763]: '1'
                                - listitem [ref=e764]:
                                    - link "April 10th, 2026 3" [ref=e765] [cursor=pointer]:
                                        - /url: '#history-125825'
                                        - generic [ref=e766]: April 10th, 2026
                                        - generic [ref=e767]: '3'
                                - listitem [ref=e768]:
                                    - link "March 25th, 2026 5" [ref=e769] [cursor=pointer]:
                                        - /url: '#history-121766'
                                        - generic [ref=e770]: March 25th, 2026
                                        - generic [ref=e771]: '5'
                                - listitem [ref=e772]:
                                    - link "March 21st, 2026 13" [ref=e773] [cursor=pointer]:
                                        - /url: '#history-120256'
                                        - generic [ref=e774]: March 21st, 2026
                                        - generic [ref=e775]: '13'
                                - listitem [ref=e776]:
                                    - link "March 6th, 2026 45" [ref=e777] [cursor=pointer]:
                                        - /url: '#history-114328'
                                        - generic [ref=e778]: March 6th, 2026
                                        - generic [ref=e779]: '45'
                        - generic [ref=e780]:
                            - link "2025 5" [ref=e781] [cursor=pointer]:
                                - /url: '#year-2025'
                                - text: '2025'
                                - generic [ref=e783]: '5'
                            - list [ref=e784]:
                                - listitem [ref=e785]:
                                    - link "November 21st, 2025 5" [ref=e786] [cursor=pointer]:
                                        - /url: '#history-90383'
                                        - generic [ref=e787]: November 21st, 2025
                                        - generic [ref=e788]: '5'
                                - listitem [ref=e789]:
                                    - link "October 24th, 2025 3" [ref=e790] [cursor=pointer]:
                                        - /url: '#history-87198'
                                        - generic [ref=e791]: October 24th, 2025
                                        - generic [ref=e792]: '3'
                                - listitem [ref=e793]:
                                    - link "October 2nd, 2025 3" [ref=e794] [cursor=pointer]:
                                        - /url: '#history-84332'
                                        - generic [ref=e795]: October 2nd, 2025
                                        - generic [ref=e796]: '3'
                                - listitem [ref=e797]:
                                    - link "September 4th, 2025 3" [ref=e798] [cursor=pointer]:
                                        - /url: '#history-80693'
                                        - generic [ref=e799]: September 4th, 2025
                                        - generic [ref=e800]: '3'
                                - listitem [ref=e801]:
                                    - link "August 18th, 2025 2" [ref=e802] [cursor=pointer]:
                                        - /url: '#history-75046'
                                        - generic [ref=e803]: August 18th, 2025
                                        - generic [ref=e804]: '2'
    - contentinfo [ref=e805]:
        - generic [ref=e807]:
            - link "deadlog.io" [ref=e808] [cursor=pointer]:
                - /url: /
            - generic [ref=e813]:
                - link "Browse all patches" [ref=e814] [cursor=pointer]:
                    - /url: /archive
                - paragraph [ref=e815]:
                    - text: Data provided by
                    - link "Deadlock API" [ref=e816] [cursor=pointer]:
                        - /url: https://deadlock-api.com
                - paragraph [ref=e817]: Deadlock is a trademark of Valve Corporation
            - generic [ref=e818]: // end transmission
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
