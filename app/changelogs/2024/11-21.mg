``attr:
title "11-21-2024 Update"
thread_id "47476"
published "2024-11-21T15:21:49-0800"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "This update includes a new version of the matchmaker. The matchmaking pools are no longer split between normal and ranked, there is only one primary matchmaking mode and there are no limited hours. Badges will update immediately whenever you gain or lose enough MMR to change badges. You no longer have to wait a week or play a certain game count. There will sometimes be monthly global maintenance updates where we readjust the global curve based on the population, cheaters banned, recalculation adjustments, etc (this will be done as needed and not necessarily every month). Hero MMR is now used in the Matchmaker. Each player will have a \"core\" MMR and your MMR per hero will be offsets of your core MMR. When you queue, we will match you based on that hero's MMR. So if you are unfamiliar or play worse with a given hero, you will be put in an easier match than your usual. Judgement on your skill and familiarity with a hero will be based on the 20 most recent games with that hero. In your profile, we have UI that shows you what the matchmaker thinks your relative ranking for each hero is (give us feedback on this, we expect to iterate on this calculation). Leaderboards are also included per region (North America, South America, Europe, Asia, Oceania). There is a top 1000 Core MMR leaderboard as well as a top 1000 Hero MMR leaderboard for each hero (for each region separately). To qualify for being considered in leaderboards in general, you must have 50 games played in the last 30 days. To qualify for a specific hero's leaderboard, you must have played at least 20 games on that hero in the past 30 days. You can queue as any party size, however there are a few details. If the range of skill in your party is too wide, the amount of MMR you can gain will be reduced somewhat based on the degree. This is especially true if it’s a player we don't know anything about (like a very high mmr player queuing with a  \"new\" player, we will minimize updates to the known player until we are more confident we can trust the skill of that party overall). The previous limit on high MMR party sizes is increased from 2 to 3. This applies to Ascendant 1 and above. This is the old limit we had on disallowing too many high MMR players to be in the same party together, for matchmaking quality reasons. Given the updated no hour limits, if we think a match is a bad quality (like 5am games where there weren't a lot of players to pick from), we will weigh the match less heavily towards a rank update relative to what we would do with an average quality match. If you prefer playing with only solos, there is a convar (mm_prefer_solo_only true) you can use. When queuing as a party, you will have an option to override the default balance oriented lane assignment system and make the system prioritize putting your party members in the same lanes together. Added Swap Lanes feature. During the rooftop and zipline phase at the start of the game, you can now request to swap lanes with your teammates by clicking the button below their portrait on the scoreboard. If the other player accepts your request, you will immediately be swapped. You may decline an incoming request by right clicking it. There is an option to notify you anytime your rank levels up. There is also an option to show the average badge of each team for the post game. Added secondary key binds for actions You are now able to browse and favorite builds in the dashboard Sandbox mode now shows the souls value of the current items you have in your inventory Abilitiy tooltips now list exactly which items the ability has been imbued with rather than \"Ability is imbued\" Items in the shop that imbue abilities are tagged with a label with a similar styling to active items Commend toasts now stay on your screen until they are dismissed Commend toasts now have a button to return the commend to the player that commended you Adjusted the behavior of the Incoming Damage UI so that it can still be used in Sandbox mode There is now a Change Hero button in the Build Browser which brings up the hero picker to choose a different hero in both Sandbox and in the Dashboard Decision dialogs for dealing with item limits, imbuing, and activation slots are now shown at queue time rather than purchase time whenever possible You can now queue items to sell.  If you right click on items that you own it will add them to the front of your quickbuy queue, and they will be queued to sell. The sale price of these items will be added to your current souls to calculate when you can afford to purchase the next item in your quickbuy queue.. Adjusted Powerup Runes' design to look more visually breakable (due to melee change explained later in the gameplay section) Low priority games now require wins to count Gaining Rejuvenator buff now shows what stats have been improved on your hero (like powerups and other buffs) Fixed Abrams camera Added icon variants for high or low ground for small/medium/large camps Adding note below Cancel key in Settings explaining that \"Abilities will be cancelled with the Cancel Key when possible\" Purchase Log in the shop now shows enemy and ally purchases with different colors Fixed F1-F5 Keys not working (for moving camera to allies) Updated active items to have uniform sliding/cast delay behavior Curse: Cast delay changed from 0.0s to 0.1s, to match other similar actives Withering Whip: No longer interrupts sliding, to match other similar actives Silence Glyph: Cast delay changed from 0.0s to 0.1s, to match other similar actives The through-wall ally silhouette health bars are now more accurate Optimized lighting in the map for better rendering performance Fixed a bug where you would be prompted to sell an item if the component wasn't in the same category as the component you were buying (i.e. you go to buy slowing hex with your item slots full and you already own the component) Removed redundant Replay keybinds (now shares with Spectating) Added Chat Wheel Options as keybinds so you can bind keys to certain responses Fixed not being able to ping enemy items Added music and ambient sounds to hotel Added new run animation for Seven Revised Mirage Fire Scarabs projectile and cast sounds Revised Casting bridge buff loop Remastered weapon fire for Seven Remastered weapon fire for Paradox Fixed a bug where nearly all sound stops and never returns Fixed respawn music cue failing to play with shop menu open Fixed music not playing while the player is outside their base and their base is under attack Fixed haze smoke bomb loop not playing for teammates Improved negative feedback sound effect timing Fixed some cases where some sounds could overpower everything else Added key and button name localization support for keybinds Visual update to Mirage Tornado bullet evasion buff Visual update to Medicinal Specter to improve visibility Visual update to turret tracers, muzzle flash and impacts Sand Blast revision to help user judge distance and AOE Added preview state to Flying Strike Added effect to when the zipline ability first starts Added an AOE landing indicator for where units will be thrown with Death Slam (only shows for allies) Fixed Ground Strike preview cone visual to be more accurate Updated Patron VO to give the Amber Hand more lines that are unique to him as opposed to having the identical script of the Sapphire Flame (for instance, while the Sapphire Flame might praise Haze by saying \"you are perfection, Haze\", the Amber Hand would say \"Haze will dance, and they will fall\") Related to the above, both patrons will now call out the Greenwich/Green Lane objectives specifically when they are destroyed Updated Bebop VO: remaster pass and added some content Updated Viscous VO: he now comments on a lot more interactions in the game (no longer a small pool of reused lines for Goo Punch) Updated Paradox VO: remaster pass and added some content Updated Kelvin VO: remaster pass and added some content Stubbed in first pass VO for Fathom, Magician, Trapper, and Viper - the primary goal for these is to give coverage for pings, but we also added lines for hero select and ability usage Updated Holliday VO: remaster pass and added some content Some rendering performance improvements Fixed some lightmap quality regressions Fixed textures being slightly too blurry in FSR2 Fixed some rendering features (such as distance field shadows) running despite being disabled in UI Fixed right-clicking on an item in the shop in build editing mode causing it to be added to your Quickbuy queue Steam Game Recording no longer records kills/deaths if you're dead and spectating another player Steam Game Recording timeline no longer records Shrine objectives as \"The World\" Fixed fps_max accidentally being changed to slider maximum value when out of slider range Video Settings slider for fps_max goes up to 400 Fixing tooltips on keybind dropdowns not working correctly New sounds added to Yamato's Flying Strike while aiming New sounds added to Mo & Krill's Burrow and Sand Blast abilities Hit confirm sound added to Lash's Flog ability Fixed a bug causing Mo & Krill's Burrow emerge sound to double up when not cancelling the burrow early Fixed Mo & Krill's Burrow traveling/underground sound not looping correctly Steam Input support Fixed Controller binds not working when the same Keyboard binds were empty Fixed Show Scoreboard glyph in Sandbox Mode UI Soul Sharing ratios post-lane reduced from 100/70/45/33/25/20% to 100/60/35/25/20/16%  (for 1/2/3/4/5/6 players, original was 100/50/33/25/20/16%) Hero Kill souls decreased from 175->2000 to 175->1600 (from 0 min to 45 min) Walkers Stomp now also deals 10% Max HP as damage Walkers Laser now also deals 2% Max HP DPS Walkers now provide nearby allied heroes 25% Bullet and Spirit Resistance Walkers now have Resistance based on how many nearby enemies there are (0/8/16/24/32/40% for 1/2/3/4/5/6 players; they are more tanky against a large attacking team) Middle Lane Walkers HP increased from 5800 to 8000 (side walkers HP is 5175) Patron Laser now also deals 3% Max HP DPS Flex Slot changed from All Shrines to 1 Shrine and 2 Base Guardians Mid Boss trooper health for first spawn reduced from 95% to 70% Trooper Spirit Resist at 25 minutes reduced from 30% to 20% (still scales to 70% at 50 minutes) Respawn time curves changed from happening at 17/30 minutes for 40s/70s respawn to 20/40 minutes Trooper soul changed from 60/40% in the kill/orb to 65/35% Medic Trooper now has 3 charges of heal rather than 2 Falloff min range reduced from 22m to 20m Air Drag when getting off the zipline increased from 20% to 25% (default in general is 20%) Improved various issues with Heavy Melee vs Dash/Parry when there is latency Killing the first Patron now causes any existing enemy hero respawns to be reduced by 20 seconds. However, it does not reduce remaining respawn time lower than 10s. Powerups now require a heavy melee to claim (art visuals updated) Powerups now start weaker and grow stronger (from 10 minutes to 40  minutes) Gun Powerup: Previously was +20% Fire Rate and +40% Ammo for 160s. Now starts at \"+10% Fire Rate and +30% Ammo\" and ends at \"30% Fire Rate and +60% Ammo\" Survival Powerup: Previously was +400 Health and +1% Max Health Regen for 160s. Now starts at \"+250 Health and 1% Max Health Regen\" and ends at \"+700 Health and 1.5% Max Health Regen\" Casting Powerup: Previously was +25 Spirit Power and +20% Cooldown Reduction for 160s. Now starts at \"+20 Spirit Power and +15% Cooldown Reduction\" and ends at \"+40 Spirit Power and +25% Cooldown Reduction\" Movement Powerup: Previously was +2 Stamina, +3 Sprint, +30% Stamina Regen and +50% Zipline Boost for 160s. Now starts at \"+1 Stamina, +2 Sprint, +20% Stamina Regen and +40% Zipline Boost\" and ends at \"+4 Stamina, +4 Sprint, +50% Stamina Regen and +80% Zipline Boost\" Urn time to reveal increased from 20s to 25s Initial Urn bounty reduced from 4050 to 3000 (changed from 1750 + 230*Min to 700 + 230*Min) Adding an alternate Urn mechanic as an experiment for 2 days. This will be enabled this weekend only and Monday will be back to normal. Urn pickup location is the same, but drop-off location is now always at the top of mid temple. The bonus souls the team gets is reduced by 60% (the delivering player reward is unchanged). The reveal time is now 40s. Moved rooftop neutral camps on Amber Yellow and Sapphire Purple to rooftops closer to the Guardian Added a truck to climb up into the interior bridge area at the Port Authority and Jazz Club buildings Moved stairs up from the central canal to the Radio Station interior closer to the inner lanes Removed stairs up to the Radio Station interior from the underground Teleport Station Redesigned Radio Station interior to be more open Moved connection corridor between Inner and Outer lanes (Amber Yellow and Sapphire Purple) to be farther from the base entrances Removed the cosmic veils from the entrances of the connection corridor Changed entrance to the Armory/Warehouse from the inner lane to be more direct (not a hallway) Moved the side lane teleporters to the crawl space under the Hard camp Removed bookshelf model inside the upper floor of the Police Station/Garment Building to see the corridor behind it Removed Rope inside the Police Station/Garment Building Added interior stair connection in Factory/Mansion to stay inside from lower to upper areas Added a fence guard beside the stairs inside the Garage/Night Club Added zapper effect to the antenna models on rooftops New building facade art in Amber Blue and Purple lanes Added a street gate structure between the Garage and the Record Shop Below is a group of changes bundled together that pairs reducing sustain abilities/items as well as anti-heal mechanics by some percentage (some things less than others depending on the specific circumstances of the ability) Soul Shredder Bullets: Spirit Lifesteal reduced from 20% to 18% Soul Shredder Bullets: Spirit Amp reduced from 10% to 8% New T3 Weapon Item, Spellslinger Headshots: Requires Soul Shredder Bullets. Landing a headshot on enemy heroes increases your total Spirit Power by 3% for 12s. Cooldown 1.5s. Max stacks 12. Grants +12% Weapon Damage, +8% Spirit Amp/18% Spirit Lifesteal (component passive), and +150 Health. Debuff Remover: Active buff duration on purge increased from 3s to 4s Debuff Remover: Purging a debuff now also heals you for 10% Max HP Superior Stamina: Now grants +75 Health Superior Stamina: Now increases Wall Jump count by 1 as well Withering Whip: Cooldown reduced from 18s to 15s Silence Glyph: No longer a tracking projectile using a unit target, releases an aim-based projectile that silences on impact Silence Glyph: Cooldown reduced from 32s to 24s Knock Down: Cast range now ignores the Z height (similar to Lash's Death Slam) New T3 Spirit Item, Spirit Snatch: Requires Spirit Strike. Causes your melee attacks to steal 12% Spirit Resist and 26 Spirit Power for 16s. Cooldown 6s. Buff you receive stacks if you hit different heroes. Grants +15% Melee Damage, +8% Spirit Resist,  +125 Health  and +1 Sprint. (Thanks to https://forums.playdeadlock.com/threads/spirt-snatch-3k-soul-spirit-strike-upgrade.46932/ ) New T3 Spirit Item, Arcane Surge: Requires Kinetic Dash. After successful Dash Jump, the next ability you use will also have +20% Range, +20% Duration and +20 Spirit Power. Grants +100 Health, +1 Stamina and +15% Slow Resist. Abrams Infernal Resilience reduced from 14% to 11% and T3 from 7% to 5.5% Siphon Life Heal vs Heroes reduced from 100% to 75% Siphon Life Heal vs Non-Heroes reduced from 50% to 40% Base regen increased from 1 to 1.5 Siphon Life range now scales with Spirit Power (0.05) Siphon Life damage scaling with Spirit Power increased from 0.4 to 0.5 Seismic Impact drag down collision improved a bit Bebop Hyper Beam T3 reduced from 100/33% for Heroes/Creeps to 80%/25% Exploding Uppercut T2 bonus now applies to melee damage too Hook can now be canceled by allies with exit key (i.e. space bar, similar to existing Viscous Cube) Dynamo Rejuvenating Aurora regen reduced from 32 to 30 Rejuvenating Aurora Spirit Power scaling reduced from 0.5 to 0.45 Rejuvenating Aurora T3 reduced from 3.8% to 3.4% Kinetic Pulse now slides around geometry when it hits an obstruction Rejuvenating Aurora now allows you to reload during it (currently only allows you to continue reloading if cast before) Quantum Entanglement pulling allies no longer cancels their channel Quantum Entanglement now has a visual indicator for allies that will teleport Quantum Entanglement ally range increased from 9m to 10m Quantum Entanglement cooldown increased from 15s to 16s Quantum Entanglement T3 cooldown reduction improved from -4s to -5s Rejuvenating Aurora now allows you to use melee before T3 upgrade Grey Talon Rain of Arrows T3 reduced from 50% Lifesteal to 40% Bullet damage increased from 24 to 25 Health growth per boon increased from 27 to 29 Immobilizing Trap now tethers targets rather than rooting them Immobilizing Trap tether duration increased 1.25s to 1.5s Immobilizing Trap no longer applies 50% slow for 1s Immobilizing Trap slow now starts immediately for 30% and lasts until 2s after the tether ends Immobilizing Trap T2 changed from +2s Slow to +1s Tether Immobilizing Trap radius increased from 6 to 6.2 Immobilizing Trap T1 CD improved from -19s to -20s Guided Owl camera now returns more quickly when the Owl collides very far away Infernus Catalyst T2 reduced from 15% Lifesteal to 12% Catalyst T3 reduced from -40% Heal Degen to -33% Concussive Combustion T3 reduced from 100% to 85% Afterburn buildup decay time is now 15% slower Concussive Combustion radius increased from 12m to 13m Concussive Combustion T2 radius reduced from +4m to +3m Ivy Watcher's Covenant Bullet Lifesteal reduced from 15% to 12% Stone Form Max Health Heal reduced from 10% to 8% Stone Form T3 Max Health Heal reduced from +20% to +16% Stone Form drag down collision improved a bit Bullet damage increased from 5 to 5.2 Bullet damage growth reduced from 0.36 to 0.34 Fixed being launched incorrectly when using Stone Form on certain geometry Fixed Stone Form having a brief period of vulnerability after cast Air Drop flight controls improved a bit Air Drop duration reduced from 17s to 16s Air Drop cooldown increased from 85s to 90s Air Drop speed can now be increased with movespeed or sprint items (when out of combat) Air Drop now amplifies Sprint values by 1.5x Kelvin Frost Grenade T2 reduced from +125 Heal to +100 Frozen Shelter regen reduced from 120 to 110 Frozen Shelter T3 reduced from +70 (1.6 Spirit Power) to +60 ( 1.4 Spirit Power) Seismic Impact, Death Slam and Ground Strike now smash through Ice Path Lash Flog heal vs heroes reduced from 70% to 65% Flog heal vs creeps reduced from 25% to 20% Ground Strike drag down collision improved a bit McGinnis Medicinal Specter T3 reduced from 5% to 4.5% Bullet Velocity increased from 533 to 590 Fixed Wall triggering Reactive Barrier before T3 stun Mini Turrets health no longer scales with your hero's health. Mini Turrets Spirit Resist reduced from 70% to 30% Mini Turrets base health increased from 75 to 150 (roughly same overall health as previous start of game) Mini Turrets now gain +20 Health per Boon Mini Turrets now take at most 33% of their Max HP per second from any damage source.  Any excess damage is move to the following second. (In effect this means that turrets will always live at least 3 seconds) Fixed Mini Turrets dying causing you to lose sprint Mini Turrets cycle time reduced from 0.5 to 0.25 (DPS unchanged) Mini Turrets bullet velocity increased from 406 to 500 Mo & Krill Scorn heal vs heroes reduced from 2x to 1.6x Scorn heal vs creeps reduced from 0.7x to 0.6x Headshot resistance now only applies to the big head Burrow can now go under Spectral Wall Combo now pulls the target closer to you over time Combo health gain increased from 30 to 70 Sand Blast duration reduced from 3.5s to 3s Sand Blast T3 slow reduced from 50% to 40% Pocket Affliction T2 Healing Reduction reduced from 60% to 50% Warden Last Stand non-hero lifesteal reduced from 50% to 20% Last Stand hero lifesteal reduced from 100% to 80% Fire Rate spirit scaling reduced from 0.3 to 0.25 Alchemical Flask now respects LOS Last Stand cooldown increased from 138s to 140s Last Stand resistance during channel increased from 50% to 60% Wraith Full Auto T3 lifesteal reduced from 35% to 30% Full Auto T2 no longer has spirit scaling (moved to T3) Full Auto T3 now also adds spirit scaling Telekinesis now causes the target to oscillate up and down a little bit Viscous The Cube regen reduced from 40 to 35 The Cube T2 regen reduced from +35 to +30 The Cube regen spirit power scaling reduced from 0.2 to 0.18 Puddle Punch can now be parried (does not stun Viscous, only blocks the puddle effect for the parrying player) Shiv Bloodletting reduced from 22% to 20% Bloodletting T1 reduced from +8% to +6% Bloodletting rage bonus reduced from +15% to 14% Serrated Knives cooldown reduced from 19s to 16s Serrated Knives can now capture souls Slice and Dice base damage increased from 105 to 110 Slice and Dice T2 reduced from +75 to +70 Slice and Dice cooldown reduced from 16s to 15s Slice and Dice T1 reduced from -4s to -3s Killing Blow threshold increased from 20% to 22% Killing Blow T2 reduced from +8% Enemy Health Threshold to +6% Killing Blow Full Rage Damage Bonus increased from 15% to 17% Killing Blow T2 reduced from +10% Full Rage Bonus Damage to +8% Fixed an issue where using Serrated Knives and immediately holding M1 after to shoot not firing your gun Killing Blow Rage per spirit damage increased from 0.013 to 0.014 Killing Blow cast range increased from 14m to 15m Haze Fixed Bullet Dance sometimes freezing your client Using items during Smoke Bomb no longer breaks invisibility Smoke Bomb cooldown reduced from 37s to 30s Smoke Bomb T1 changed from -14s to +6 Invis Sprint Speed Smoke Bomb T2 changed from +6 Invis Sprint Speed to +15% Bullet Lifesteal for 8s Smoke Bomb T3 changed from +30% Bullet Lifesteal for 8s to Phases Out for 0.5s on cast and enables charges with 10s charge time (causes you to be \"out of world\" and fizzle incoming projectiles during this time, you are still able to move. You need to buy charges still) Fixation damage vs objectives reduced by 30% Bullet Dance Bonus Damage changed from +5 Bullet Damage to +6 Spirit Damage (with 0.1 Spirit Scaling) Bullet Dance T1 changed to +7 Spirit Damage Lady Geist Essence Bomb Self Damage spirit scaling reduced from 2 to 1.8 Mirage Tornado speed reduced by 10% Fixed Tornado being usable while immobilized Tornado and Fire Scarabs ability slots swapped Traveler cooldown increased from 130s to 145s Traveler T2 increased from -40s to -55s Traveler can now be cast by targeting the top bar portraits Paradox Fixed Kinetic Carbine not proccing Headshot effects (Headshot booster, Headhunter, Crippling Headshot) Paradoxical Swap time min/max increased by 0.2/0.3s (to help with camera) Time Wall now deals 50 damage for going through it Seven Storm Cloud now causes you to levitate up and down a little bit in a cycle rather than being fully stationary Storm Cloud expand time reduced from 2s to 1.5s Vindicta Crow Familiar changed from 0.2s cast delay to 0.2s post cast time Crow Familiar now also reduces spirit resistance by 6% Crow Familiar T3 changed from \"+3% Bleed and -40% Anti Heal\" to -12% Spirit and Bullet Resistance Stake radius increased from 8m to 9m Stake now sucks enemies 3m towards the center (and limits movement to 6m from center) Stake T1 changed from +0.5s to -40% Fire Rate Stake T3 changed from Disarm to +0.75s Assassinate min charge up increased from 25% to 50% Assassinate bonus damage on low hp base damage reduced from 135 to 120 Fixed Assassinate being stuck if you zoom in and get silenced Yamato Improved cases where Power Slash would hit enemies behind cover Shadow Transformation no longer heals on cast Shadow Transformation T3 increased from +2s to +3s Shadow Transformation now heals for 15% of your max hp on hero kill Slowing Hex No longer interrupts sliding, to match other similar actives Decay Cast delay changed from 0.25s to 0.1s, to match other similar actives No longer interrupts sliding, to match other similar actives Healing Reduction reduced from 70% to 55% Damage increased from 1% to 1.4% Knockdown Cast delay changed from 0.25s to 0.1s, to match other similar actives No longer interrupts sliding, to match other similar actives Active Reload Bullet Lifesteal reduced from 20% to 18% Headhunter Heal per Headshot reduced from 8% to 7% Head Shot Bonus Damage reduced from +140 to +130 Heroic Aura Bullet Lifesteal reduced from 20% to 18% Cooldown reduced from 25s to 20s Toxic Bullets Healing Reduction reduced from 65% to 50% Vampiric Burst Bullet Lifesteal reduced from 100% to 80% Melee Lifesteal Lifesteal reduced from 20% to 18% Now grants +3% Bullet Resist Bullet Lifesteal Lifesteal reduced from 28% to 26% Restorative Locket Regen per stack reduced from 35 to 32 Spirit Lifesteal Lifesteal reduced from 23% to 22% Healbane Healing Reduction reduced from 45% to 40% Duration increased from 6s to 7s Lifestrike Lifesteal reduced from 65% to 55% Leech Bullet Lifesteal reduced from 35% to 32% Spirit Lifesteal reduced from 35% to 32% Rapid Rounds Fire Rate increased from 10% to 11% Monster Rounds Bonus Health reduced from 50 to 30 Berserker Weapon Damage per stack increased from 5% to 6% Alchemical Fire DPS burn lingers on targets for 1s Hunter's Aura Fire Rate slow reduced from 10% to 9% Glass Cannon Now requires Slowing Bullets and grants the slow passive Silencer Reworked item. Passively builds up on enemies, silencing for 2s and then reducing spirit damage output by 40% for 4s. Enemies affected cannot be affected again for 12s. Grants +20% Weapon Damage, +15% Spirit Resist and 20% Debuff Reduction. (Buildup is a bit slower than Toxic Bullets) Lucky Shot Damage multiplier increased from 90% to 110% Now grants +150 Bullet Shield Reactive Barrier Bullet Shield health reduced from 400 to 350 Return Fire Now requires Extra Regen Debuff Reducer Debuff Resist reduced from 30% to 28% Weapon Damage increased from 6% to 8% Divine Barrier Now has +8% Ability Range again instead of +6 Spirit Power No longer grants +1 Sprint Healing Nova No longer has +6% Ability Range Rescue Beam Heal reduced from 26% to 24% Now grants +6% Ability Range Cooldown increased from 26s to 36s Pull speed reduced by 15% Metal Skin Active now reduces your Move Speed by 1.5 Majestic Leap Now grants +6% Spirit Resist Phantom Strike Cast range now ignores the Z height (similar to Lash's Death Slam) Ammo Scavenger While at max stacks you gain +2 Sprint Infuser Cooldown reduced from 37s to 32s Improved Spirit Health increased from 100 to 125 Ethereal Shift Post Shift now also grants +20 Spirit Power Rapid Recharge Time between charges reduced from 65% to 60% Mystic Slow Now grants +1 Sprint Health increased from 140 to 160 Torment Pulse Now grants +15% Melee Resistance Diviner's Kevlar No longer grants +20% Spirit Lifesteal Now grants +7% Ability Duration Echo Shard Cast delay reduced from 0.3s to 0.25s Mystic Reverb Damage increased from 40% to 45% Refresher Cooldown increased from 230s to 260s"
``

# General Changes

- This update includes a new version of the matchmaker. The matchmaking pools are no longer split between normal and ranked, there is only one primary matchmaking mode and there are no limited hours.
- Badges will update immediately whenever you gain or lose enough MMR to change badges. You no longer have to wait a week or play a certain game count. There will sometimes be monthly global maintenance updates where we readjust the global curve based on the population, cheaters banned, recalculation adjustments, etc (this will be done as needed and not necessarily every month).
- Hero MMR is now used in the Matchmaker. Each player will have a "core" MMR and your MMR per hero will be offsets of your core MMR. When you queue, we will match you based on that hero's MMR. So if you are unfamiliar or play worse with a given hero, you will be put in an easier match than your usual. Judgement on your skill and familiarity with a hero will be based on the 20 most recent games with that hero. In your profile, we have UI that shows you what the matchmaker thinks your relative ranking for each hero is (give us feedback on this, we expect to iterate on this calculation).
- Leaderboards are also included per region (North America, South America, Europe, Asia, Oceania). There is a top 1000 Core MMR leaderboard as well as a top 1000 Hero MMR leaderboard for each hero (for each region separately). To qualify for being considered in leaderboards in general, you must have 50 games played in the last 30 days. To qualify for a specific hero's leaderboard, you must have played at least 20 games on that hero in the past 30 days.
- You can queue as any party size, however there are a few details. If the range of skill in your party is too wide, the amount of MMR you can gain will be reduced somewhat based on the degree. This is especially true if it’s a player we don't know anything about (like a very high mmr player queuing with a  "new" player, we will minimize updates to the known player until we are more confident we can trust the skill of that party overall).
- The previous limit on high MMR party sizes is increased from 2 to 3. This applies to Ascendant 1 and above. This is the old limit we had on disallowing too many high MMR players to be in the same party together, for matchmaking quality reasons.
- Given the updated no hour limits, if we think a match is a bad quality (like 5am games where there weren't a lot of players to pick from), we will weigh the match less heavily towards a rank update relative to what we would do with an average quality match.
- If you prefer playing with only solos, there is a convar (mm_prefer_solo_only true) you can use.
- When queuing as a party, you will have an option to override the default balance oriented lane assignment system and make the system prioritize putting your party members in the same lanes together.
- Added Swap Lanes feature. During the rooftop and zipline phase at the start of the game, you can now request to swap lanes with your teammates by clicking the button below their portrait on the scoreboard. If the other player accepts your request, you will immediately be swapped. You may decline an incoming request by right clicking it.
- There is an option to notify you anytime your rank levels up. There is also an option to show the average badge of each team for the post game.
- Added secondary key binds for actions
- You are now able to browse and favorite builds in the dashboard
- Sandbox mode now shows the souls value of the current items you have in your inventory
- Abilitiy tooltips now list exactly which items the ability has been imbued with rather than "Ability is imbued"
- Items in the shop that imbue abilities are tagged with a label with a similar styling to active items
- Commend toasts now stay on your screen until they are dismissed
- Commend toasts now have a button to return the commend to the player that commended you
- Adjusted the behavior of the Incoming Damage UI so that it can still be used in Sandbox mode
- There is now a Change Hero button in the Build Browser which brings up the hero picker to choose a different hero in both Sandbox and in the Dashboard
- Decision dialogs for dealing with item limits, imbuing, and activation slots are now shown at queue time rather than purchase time whenever possible
- You can now queue items to sell.  If you right click on items that you own it will add them to the front of your quickbuy queue, and they will be queued to sell. The sale price of these items will be added to your current souls to calculate when you can afford to purchase the next item in your quickbuy queue..
- Adjusted Powerup Runes' design to look more visually breakable (due to melee change explained later in the gameplay section)
- Low priority games now require wins to count
- Gaining Rejuvenator buff now shows what stats have been improved on your hero (like powerups and other buffs)
- Fixed Abrams camera
- Added icon variants for high or low ground for small/medium/large camps
- Adding note below Cancel key in Settings explaining that "Abilities will be cancelled with the Cancel Key when possible"
- Purchase Log in the shop now shows enemy and ally purchases with different colors
- Fixed F1-F5 Keys not working (for moving camera to allies)
- Updated active items to have uniform sliding/cast delay behavior
- Curse: Cast delay changed from 0.0s to 0.1s, to match other similar actives
- Withering Whip: No longer interrupts sliding, to match other similar actives
- Silence Glyph: Cast delay changed from 0.0s to 0.1s, to match other similar actives
- The through-wall ally silhouette health bars are now more accurate
- Optimized lighting in the map for better rendering performance
- Fixed a bug where you would be prompted to sell an item if the component wasn't in the same category as the component you were buying (i.e. you go to buy slowing hex with your item slots full and you already own the component)
- Removed redundant Replay keybinds (now shares with Spectating)
- Added Chat Wheel Options as keybinds so you can bind keys to certain responses
- Fixed not being able to ping enemy items
- Added music and ambient sounds to hotel
- Added new run animation for Seven
- Revised Mirage Fire Scarabs projectile and cast sounds
- Revised Casting bridge buff loop
- Remastered weapon fire for Seven
- Remastered weapon fire for Paradox
- Fixed a bug where nearly all sound stops and never returns
- Fixed respawn music cue failing to play with shop menu open
- Fixed music not playing while the player is outside their base and their base is under attack
- Fixed haze smoke bomb loop not playing for teammates
- Improved negative feedback sound effect timing
- Fixed some cases where some sounds could overpower everything else
- Added key and button name localization support for keybinds
- Visual update to Mirage Tornado bullet evasion buff
- Visual update to Medicinal Specter to improve visibility
- Visual update to turret tracers, muzzle flash and impacts
- Sand Blast revision to help user judge distance and AOE
- Added preview state to Flying Strike
- Added effect to when the zipline ability first starts
- Added an AOE landing indicator for where units will be thrown with Death Slam (only shows for allies)
- Fixed Ground Strike preview cone visual to be more accurate
- Updated Patron VO to give the Amber Hand more lines that are unique to him as opposed to having the identical script of the Sapphire Flame (for instance, while the Sapphire Flame might praise Haze by saying "you are perfection, Haze", the Amber Hand would say "Haze will dance, and they will fall")
- Related to the above, both patrons will now call out the Greenwich/Green Lane objectives specifically when they are destroyed
- Updated Bebop VO: remaster pass and added some content
- Updated Viscous VO: he now comments on a lot more interactions in the game (no longer a small pool of reused lines for Goo Punch)
- Updated Paradox VO: remaster pass and added some content
- Updated Kelvin VO: remaster pass and added some content
- Stubbed in first pass VO for Fathom, Magician, Trapper, and Viper - the primary goal for these is to give coverage for pings, but we also added lines for hero select and ability usage
- Updated Holliday VO: remaster pass and added some content
- Some rendering performance improvements
- Fixed some lightmap quality regressions
- Fixed textures being slightly too blurry in FSR2
- Fixed some rendering features (such as distance field shadows) running despite being disabled in UI
- Fixed right-clicking on an item in the shop in build editing mode causing it to be added to your Quickbuy queue
- Steam Game Recording no longer records kills/deaths if you're dead and spectating another player
- Steam Game Recording timeline no longer records Shrine objectives as "The World"
- Fixed fps_max accidentally being changed to slider maximum value when out of slider range
- Video Settings slider for fps_max goes up to 400
- Fixing tooltips on keybind dropdowns not working correctly
- New sounds added to Yamato's Flying Strike while aiming
- New sounds added to Mo & Krill's Burrow and Sand Blast abilities
- Hit confirm sound added to Lash's Flog ability
- Fixed a bug causing Mo & Krill's Burrow emerge sound to double up when not cancelling the burrow early
- Fixed Mo & Krill's Burrow traveling/underground sound not looping correctly
- Steam Input support
- Fixed Controller binds not working when the same Keyboard binds were empty
- Fixed Show Scoreboard glyph in Sandbox Mode UI
- Soul Sharing ratios post-lane reduced from 100/70/45/33/25/20% to 100/60/35/25/20/16%  (for 1/2/3/4/5/6 players, original was 100/50/33/25/20/16%)
- Hero Kill souls decreased from 175->2000 to 175->1600 (from 0 min to 45 min)
- Walkers Stomp now also deals 10% Max HP as damage
- Walkers Laser now also deals 2% Max HP DPS
- Walkers now provide nearby allied heroes 25% Bullet and Spirit Resistance
- Walkers now have Resistance based on how many nearby enemies there are (0/8/16/24/32/40% for 1/2/3/4/5/6 players; they are more tanky against a large attacking team)
- Middle Lane Walkers HP increased from 5800 to 8000 (side walkers HP is 5175)
- Patron Laser now also deals 3% Max HP DPS
- Flex Slot changed from All Shrines to 1 Shrine and 2 Base Guardians
- Mid Boss trooper health for first spawn reduced from 95% to 70%
- Trooper Spirit Resist at 25 minutes reduced from 30% to 20% (still scales to 70% at 50 minutes)
- Respawn time curves changed from happening at 17/30 minutes for 40s/70s respawn to 20/40 minutes
- Trooper soul changed from 60/40% in the kill/orb to 65/35%
- Medic Trooper now has 3 charges of heal rather than 2
- Falloff min range reduced from 22m to 20m
- Air Drag when getting off the zipline increased from 20% to 25% (default in general is 20%)
- Improved various issues with Heavy Melee vs Dash/Parry when there is latency
- Killing the first Patron now causes any existing enemy hero respawns to be reduced by 20 seconds. However, it does not reduce remaining respawn time lower than 10s.
- Powerups now require a heavy melee to claim (art visuals updated)
- Powerups now start weaker and grow stronger (from 10 minutes to 40  minutes)
- Gun Powerup:
- Previously was +20% Fire Rate and +40% Ammo for 160s.
- Now starts at "+10% Fire Rate and +30% Ammo" and ends at "30% Fire Rate and +60% Ammo"
- Survival Powerup:
- Previously was +400 Health and +1% Max Health Regen for 160s.
- Now starts at "+250 Health and 1% Max Health Regen" and ends at "+700 Health and 1.5% Max Health Regen"
- Casting Powerup:
- Previously was +25 Spirit Power and +20% Cooldown Reduction for 160s.
- Now starts at "+20 Spirit Power and +15% Cooldown Reduction" and ends at "+40 Spirit Power and +25% Cooldown Reduction"
- Movement Powerup:
- Previously was +2 Stamina, +3 Sprint, +30% Stamina Regen and +50% Zipline Boost for 160s.
- Now starts at "+1 Stamina, +2 Sprint, +20% Stamina Regen and +40% Zipline Boost" and ends at "+4 Stamina, +4 Sprint, +50% Stamina Regen and +80% Zipline Boost"
- Urn time to reveal increased from 20s to 25s
- Initial Urn bounty reduced from 4050 to 3000 (changed from 1750 + 230*Min to 700 + 230*Min)
- Adding an alternate Urn mechanic as an experiment for 2 days. This will be enabled this weekend only and Monday will be back to normal. Urn pickup location is the same, but drop-off location is now always at the top of mid temple. The bonus souls the team gets is reduced by 60% (the delivering player reward is unchanged). The reveal time is now 40s.
- Moved rooftop neutral camps on Amber Yellow and Sapphire Purple to rooftops closer to the Guardian
[[!:https://project8-data.community.forum/attachments/30/30148-d632db1a57bac84efafd1f06568bbdca.jpg?hash=XNpnAfM5z2]]((rooftop neutral camp 112124))
- Added a truck to climb up into the interior bridge area at the Port Authority and Jazz Club buildings
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/truck_update-mp4.30135/" label="truck update" />
``
- Moved stairs up from the central canal to the Radio Station interior closer to the inner lanes
- Removed stairs up to the Radio Station interior from the underground Teleport Station
- Redesigned Radio Station interior to be more open
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/canal_update-mp4.30136/" label="canal update" />
``
[[!:https://project8-data.community.forum/attachments/30/30153-16e7f9c01ad0338e6c831c6ae344b06f.jpg?hash=vUQDhBS3u7]]((canal update 112124))
- Moved connection corridor between Inner and Outer lanes (Amber Yellow and Sapphire Purple) to be farther from the base entrances
- Removed the cosmic veils from the entrances of the connection corridor
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/connection_update-mp4.30134/" label="connection update" />
``
- Changed entrance to the Armory/Warehouse from the inner lane to be more direct (not a hallway)
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/armory_update-mp4.30138/" label="armory update" />
``
[[!:https://project8-data.community.forum/attachments/30/30155-4b7fd9a547dceedf8f5fb08037d66a9c.jpg?hash=61ONTc41sT]]((armory entrance 112124))
- Moved the side lane teleporters to the crawl space under the Hard camp
``embed:svelte:
<VideoLink src="https://forums.playdeadlock.com/attachments/teleporter_update-mp4.30142/" label="teleporter update" />
``
- Removed bookshelf model inside the upper floor of the Police Station/Garment Building to see the corridor behind it
- Removed Rope inside the Police Station/Garment Building
[[!:https://project8-data.community.forum/attachments/30/30156-a8c2716fc1d7559cda993e3443effa05.jpg?hash=kVX3m19afn]]((garment interior 112124))
- Added interior stair connection in Factory/Mansion to stay inside from lower to upper areas
[[!:https://project8-data.community.forum/attachments/30/30149-4f38d7344afd4801416113724732afb6.jpg?hash=xryuxEx9Gu]]((outer lane update 112124))
- Added a fence guard beside the stairs inside the Garage/Night Club
[[!:https://project8-data.community.forum/attachments/30/30157-430fcc275de8c59e7765fa300eebf4eb.jpg?hash=1_YXZ1vh2H]]((garage interior 112124))
- Added zapper effect to the antenna models on rooftops
- New building facade art in Amber Blue and Purple lanes
[[!:https://project8-data.community.forum/attachments/30/30159-e1f8f6c21c976be0f73c94e165766979.jpg?hash=Rq-4W8I3qF]]((new drugstore 112124))
- Added a street gate structure between the Garage and the Record Shop
- Below is a group of changes bundled together that pairs reducing sustain abilities/items as well as anti-heal mechanics by some percentage (some things less than others depending on the specific circumstances of the ability)
- Soul Shredder Bullets: Spirit Lifesteal reduced from 20% to 18%
- Soul Shredder Bullets: Spirit Amp reduced from 10% to 8%
- New T3 Weapon Item, Spellslinger Headshots: Requires Soul Shredder Bullets. Landing a headshot on enemy heroes increases your total Spirit Power by 3% for 12s. Cooldown 1.5s. Max stacks 12. Grants +12% Weapon Damage, +8% Spirit Amp/18% Spirit Lifesteal (component passive), and +150 Health.
- Debuff Remover: Active buff duration on purge increased from 3s to 4s
- Debuff Remover: Purging a debuff now also heals you for 10% Max HP
- Superior Stamina: Now grants +75 Health
- Superior Stamina: Now increases Wall Jump count by 1 as well
- Withering Whip: Cooldown reduced from 18s to 15s
- Silence Glyph: No longer a tracking projectile using a unit target, releases an aim-based projectile that silences on impact
- Silence Glyph: Cooldown reduced from 32s to 24s
- Knock Down: Cast range now ignores the Z height (similar to Lash's Death Slam)
- New T3 Spirit Item, Spirit Snatch: Requires Spirit Strike. Causes your melee attacks to steal 12% Spirit Resist and 26 Spirit Power for 16s. Cooldown 6s. Buff you receive stacks if you hit different heroes. Grants +15% Melee Damage, +8% Spirit Resist,  +125 Health  and +1 Sprint. (Thanks to [[https://forums.playdeadlock.com/threads/spirt-snatch-3k-soul-spirit-strike-upgrade.46932/]]((https://forums.playdeadlock.com/threads/spirt-snatch-3k-soul-spirit-strike-upgrade.46932/)) )
- New T3 Spirit Item, Arcane Surge: Requires Kinetic Dash. After successful Dash Jump, the next ability you use will also have +20% Range, +20% Duration and +20 Spirit Power. Grants +100 Health, +1 Stamina and +15% Slow Resist.

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Dynamo", "Grey Talon", "Haze", "Infernus", "Ivy", "Kelvin", "Lady Geist", "Lash", "McGinnis", "Mirage", "Mo &amp; Krill", "Paradox", "Pocket", "Seven", "Shiv", "Vindicta", "Viscous", "Warden", "Wraith", "Yamato"]} />
``

=hero:abrams:
``attr:
impact closed=#true {
  all {
    before win=0.5274 pick=0.5368 matches=91496 days=6
    after win=0.5212 pick=0.5322 matches=244402 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5073 pick=0.5867 matches=10711 days=7
  }
}
``
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))
==ability:infernal-resilience:
[[/ability/infernal-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]] Infernal Resilience change history))
### [[/ability/infernal-resilience]]((Infernal Resilience))
- Infernal Resilience reduced from 14% to 11% and T3 from 7% to 5.5%
==
==ability:siphon-life:
[[/ability/siphon-life]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp]] Siphon Life change history))
### [[/ability/siphon-life]]((Siphon Life))
- Siphon Life Heal vs Heroes reduced from 100% to 75%
- Siphon Life Heal vs Non-Heroes reduced from 50% to 40%
==
- Base regen increased from 1 to 1.5
==ability:siphon-life:
[[/ability/siphon-life]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp]] Siphon Life change history))
### [[/ability/siphon-life]]((Siphon Life))
- Siphon Life range now scales with Spirit Power (0.05)
- Siphon Life damage scaling with Spirit Power increased from 0.4 to 0.5
==
==ability:seismic-impact:
[[/ability/seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/ability/seismic-impact]]((Seismic Impact))
- Seismic Impact drag down collision improved a bit
==
=

=hero:bebop:
``attr:
impact closed=#true {
  all {
    before win=0.5006 pick=0.6903 matches=117642 days=6
    after win=0.5018 pick=0.7034 matches=323023 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4858 pick=0.5871 matches=10717 days=7
  }
}
``
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))
==ability:hyper-beam:
[[/ability/hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam change history))
### [[/ability/hyper-beam]]((Hyper Beam))
- Hyper Beam T3 reduced from 100/33% for Heroes/Creeps to 80%/25%
==
==ability:exploding-uppercut:
[[/ability/exploding-uppercut]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp]] Exploding Uppercut change history))
### [[/ability/exploding-uppercut]]((Exploding Uppercut))
- Exploding Uppercut T2 bonus now applies to melee damage too
==
==ability:grapple-arm:
[[/ability/grapple-arm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp]] Grapple Arm change history))
### [[/ability/grapple-arm]]((Grapple Arm))
- Hook can now be canceled by allies with exit key (i.e. space bar, similar to existing Viscous Cube)
==
=

=hero:dynamo:
``attr:
impact closed=#true {
  all {
    before win=0.5092 pick=0.4868 matches=82966 days=6
    after win=0.4992 pick=0.4938 matches=226788 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5112 pick=0.4805 matches=8772 days=7
  }
}
``
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))
==ability:rejuvenating-aurora:
[[/ability/rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/ability/rejuvenating-aurora]]((Rejuvenating Aurora))
- Rejuvenating Aurora regen reduced from 32 to 30
==
==ability:rejuvenating-aurora-spirit-power:
[[/ability/rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora Spirit Power change history))
### [[/ability/rejuvenating-aurora]]((Rejuvenating Aurora Spirit Power))
- Rejuvenating Aurora Spirit Power scaling reduced from 0.5 to 0.45
==
==ability:rejuvenating-aurora:
[[/ability/rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/ability/rejuvenating-aurora]]((Rejuvenating Aurora))
- Rejuvenating Aurora T3 reduced from 3.8% to 3.4%
==
==ability:kinetic-pulse:
[[/ability/kinetic-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp]] Kinetic Pulse change history))
### [[/ability/kinetic-pulse]]((Kinetic Pulse))
- Kinetic Pulse now slides around geometry when it hits an obstruction
==
==ability:rejuvenating-aurora:
[[/ability/rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/ability/rejuvenating-aurora]]((Rejuvenating Aurora))
- Rejuvenating Aurora now allows you to reload during it (currently only allows you to continue reloading if cast before)
==
==ability:quantum-entanglement:
[[/ability/quantum-entanglement]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp]] Quantum Entanglement change history))
### [[/ability/quantum-entanglement]]((Quantum Entanglement))
- Quantum Entanglement pulling allies no longer cancels their channel
- Quantum Entanglement now has a visual indicator for allies that will teleport
- Quantum Entanglement ally range increased from 9m to 10m
- Quantum Entanglement cooldown increased from 15s to 16s
- Quantum Entanglement T3 cooldown reduction improved from -4s to -5s
==
==ability:rejuvenating-aurora:
[[/ability/rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/ability/rejuvenating-aurora]]((Rejuvenating Aurora))
- Rejuvenating Aurora now allows you to use melee before T3 upgrade
==
=

=hero:grey-talon:
``attr:
impact closed=#true {
  all {
    before win=0.4615 pick=0.4552 matches=77574 days=6
    after win=0.4574 pick=0.4586 matches=210616 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4593 pick=0.2828 matches=5162 days=7
  }
}
``
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))
==ability:rain-of-arrows:
[[/ability/rain-of-arrows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp]] Rain of Arrows change history))
### [[/ability/rain-of-arrows]]((Rain of Arrows))
- Rain of Arrows T3 reduced from 50% Lifesteal to 40%
==
- Bullet damage increased from 24 to 25
- Health growth per boon increased from 27 to 29
==ability:immobilizing-trap:
[[/ability/spirit-snare]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp]] Immobilizing Trap change history))
### [[/ability/spirit-snare]]((Immobilizing Trap))
- Immobilizing Trap now tethers targets rather than rooting them
==
==ability:spirit-snare:
[[/ability/spirit-snare]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp]] Spirit Snare change history))
### [[/ability/spirit-snare]]((Spirit Snare))
- Immobilizing Trap tether duration increased 1.25s to 1.5s
==
==ability:immobilizing-trap:
[[/ability/spirit-snare]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp]] Immobilizing Trap change history))
### [[/ability/spirit-snare]]((Immobilizing Trap))
- Immobilizing Trap no longer applies 50% slow for 1s
- Immobilizing Trap slow now starts immediately for 30% and lasts until 2s after the tether ends
- Immobilizing Trap T2 changed from +2s Slow to +1s Tether
- Immobilizing Trap radius increased from 6 to 6.2
- Immobilizing Trap T1 CD improved from -19s to -20s
==
==ability:guided-owl:
[[/ability/guided-owl]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp]] Guided Owl change history))
### [[/ability/guided-owl]]((Guided Owl))
- Guided Owl camera now returns more quickly when the Owl collides very far away
==
=

=hero:haze:
``attr:
impact closed=#true {
  all {
    before win=0.5057 pick=0.9223 matches=157190 days=6
    after win=0.5338 pick=0.9669 matches=444046 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5068 pick=0.9686 matches=17681 days=7
  }
}
``
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))
==ability:bullet-dance:
[[/ability/bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/ability/bullet-dance]]((Bullet Dance))
- Fixed Bullet Dance sometimes freezing your client
==
==ability:smoke-bomb:
[[/ability/smoke-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp]] Smoke Bomb change history))
### [[/ability/smoke-bomb]]((Smoke Bomb))
- Using items during Smoke Bomb no longer breaks invisibility
- Smoke Bomb cooldown reduced from 37s to 30s
- Smoke Bomb T1 changed from -14s to +6 Invis Sprint Speed
- Smoke Bomb T2 changed from +6 Invis Sprint Speed to +15% Bullet Lifesteal for 8s
- Smoke Bomb T3 changed from +30% Bullet Lifesteal for 8s to Phases Out for 0.5s on cast and enables charges with 10s charge time (causes you to be "out of world" and fizzle incoming projectiles during this time, you are still able to move. You need to buy charges still)
==
==ability:fixation:
[[/ability/fixation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp]] Fixation change history))
### [[/ability/fixation]]((Fixation))
- Fixation damage vs objectives reduced by 30%
==
==ability:bullet-dance:
[[/ability/bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/ability/bullet-dance]]((Bullet Dance))
- Bullet Dance Bonus Damage changed from +5 Bullet Damage to +6 Spirit Damage (with 0.1 Spirit Scaling)
- Bullet Dance T1 changed to +7 Spirit Damage
==
=

=hero:infernus:
``attr:
impact closed=#true {
  all {
    before win=0.475 pick=0.7648 matches=130344 days=6
    after win=0.4717 pick=0.7487 matches=343820 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4429 pick=0.6362 matches=11614 days=7
  }
}
``
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))
==ability:catalyst:
[[/ability/napalm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp]] Catalyst change history))
### [[/ability/napalm]]((Catalyst))
- Catalyst T2 reduced from 15% Lifesteal to 12%
- Catalyst T3 reduced from -40% Heal Degen to -33%
==
==ability:concussive-combustion:
[[/ability/concussive-combustion]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp]] Concussive Combustion change history))
### [[/ability/concussive-combustion]]((Concussive Combustion))
- Concussive Combustion T3 reduced from 100% to 85%
==
==ability:afterburn:
[[/ability/afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/ability/afterburn]]((Afterburn))
- Afterburn buildup decay time is now 15% slower
==
==ability:concussive-combustion:
[[/ability/concussive-combustion]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp]] Concussive Combustion change history))
### [[/ability/concussive-combustion]]((Concussive Combustion))
- Concussive Combustion radius increased from 12m to 13m
- Concussive Combustion T2 radius reduced from +4m to +3m
==
=

=hero:ivy:
``attr:
impact closed=#true {
  all {
    before win=0.5119 pick=0.4797 matches=81762 days=6
    after win=0.5226 pick=0.4973 matches=228369 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5328 pick=0.5505 matches=10050 days=7
  }
}
``
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))
==ability:watcher-s-covenant-bullet-lifesteal:
[[/ability/kudzu-connection]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp]] Watcher's Covenant Bullet Lifesteal change history))
### [[/ability/kudzu-connection]]((Watcher's Covenant Bullet Lifesteal))
- Watcher's Covenant Bullet Lifesteal reduced from 15% to 12%
==
==ability:stone-form-max-health-heal:
[[/ability/stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form Max Health Heal change history))
### [[/ability/stone-form]]((Stone Form Max Health Heal))
- Stone Form Max Health Heal reduced from 10% to 8%
==
==ability:stone-form:
[[/ability/stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/ability/stone-form]]((Stone Form))
- Stone Form T3 Max Health Heal reduced from +20% to +16%
- Stone Form drag down collision improved a bit
==
- Bullet damage increased from 5 to 5.2
- Bullet damage growth reduced from 0.36 to 0.34
==ability:stone-form:
[[/ability/stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/ability/stone-form]]((Stone Form))
- Fixed being launched incorrectly when using Stone Form on certain geometry
- Fixed Stone Form having a brief period of vulnerability after cast
==
==ability:air-drop:
[[/ability/air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/ability/air-drop]]((Air Drop))
- Air Drop flight controls improved a bit
- Air Drop duration reduced from 17s to 16s
- Air Drop cooldown increased from 85s to 90s
- Air Drop speed can now be increased with movespeed or sprint items (when out of combat)
- Air Drop now amplifies Sprint values by 1.5x
==
=

=hero:kelvin:
``attr:
impact closed=#true {
  all {
    before win=0.4736 pick=0.2859 matches=48735 days=6
    after win=0.468 pick=0.2761 matches=126801 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.497 pick=0.2882 matches=5262 days=7
  }
}
``
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))
==ability:frost-grenade:
[[/ability/frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/ability/frost-grenade]]((Frost Grenade))
- Frost Grenade T2 reduced from +125 Heal to +100
==
==ability:frozen-shelter:
[[/ability/frozen-shelter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp]] Frozen Shelter change history))
### [[/ability/frozen-shelter]]((Frozen Shelter))
- Frozen Shelter regen reduced from 120 to 110
- Frozen Shelter T3 reduced from +70 (1.6 Spirit Power) to +60 ( 1.4 Spirit Power)
==
==ability:ice-path:
[[/ability/ice-path]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp]] Ice Path change history))
### [[/ability/ice-path]]((Ice Path))
- Seismic Impact, Death Slam and Ground Strike now smash through Ice Path
==
=

=hero:lady-geist:
``attr:
impact closed=#true {
  all {
    before win=0.5038 pick=0.5368 matches=91481 days=6
    after win=0.5054 pick=0.5237 matches=240498 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5052 pick=0.5606 matches=10234 days=7
  }
}
``
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))
==ability:essence-bomb-self-damage:
[[/ability/essence-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp]] Essence Bomb Self Damage change history))
### [[/ability/essence-bomb]]((Essence Bomb Self Damage))
- Essence Bomb Self Damage spirit scaling reduced from 2 to 1.8
==
=

=hero:lash:
``attr:
impact closed=#true {
  all {
    before win=0.5004 pick=0.615 matches=104820 days=6
    after win=0.5001 pick=0.6127 matches=281385 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4922 pick=0.7475 matches=13646 days=7
  }
}
``
[[/hero/lash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]] Lash patch history))
## [[/hero/lash]]((Lash))
==ability:flog:
[[/ability/flog]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp]] Flog change history))
### [[/ability/flog]]((Flog))
- Flog heal vs heroes reduced from 70% to 65%
- Flog heal vs creeps reduced from 25% to 20%
==
==ability:ground-strike:
[[/ability/ground-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp]] Ground Strike change history))
### [[/ability/ground-strike]]((Ground Strike))
- Ground Strike drag down collision improved a bit
==
=

=hero:mcginnis:
``attr:
impact closed=#true {
  all {
    before win=0.4838 pick=0.4958 matches=84492 days=6
    after win=0.495 pick=0.536 matches=246139 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5044 pick=0.3046 matches=5561 days=7
  }
}
``
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))
==ability:medicinal-specter:
[[/ability/medicinal-specter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp]] Medicinal Specter change history))
### [[/ability/medicinal-specter]]((Medicinal Specter))
- Medicinal Specter T3 reduced from 5% to 4.5%
==
- Bullet Velocity increased from 533 to 590
- Fixed Wall triggering Reactive Barrier before T3 stun
==ability:mini-turrets:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turrets change history))
### [[/ability/mini-turret]]((Mini Turrets))
- Mini Turrets health no longer scales with your hero's health.
==
==ability:mini-turrets-spirit-resist:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turrets Spirit Resist change history))
### [[/ability/mini-turret]]((Mini Turrets Spirit Resist))
- Mini Turrets Spirit Resist reduced from 70% to 30%
==
==ability:mini-turret:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turret change history))
### [[/ability/mini-turret]]((Mini Turret))
- Mini Turrets base health increased from 75 to 150 (roughly same overall health as previous start of game)
==
==ability:mini-turrets:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turrets change history))
### [[/ability/mini-turret]]((Mini Turrets))
- Mini Turrets now gain +20 Health per Boon
- Mini Turrets now take at most 33% of their Max HP per second from any damage source.  Any excess damage is move to the following second. (In effect this means that turrets will always live at least 3 seconds)
==
==ability:mini-turret:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turret change history))
### [[/ability/mini-turret]]((Mini Turret))
- Fixed Mini Turrets dying causing you to lose sprint
- Mini Turrets cycle time reduced from 0.5 to 0.25 (DPS unchanged)
==
==ability:mini-turrets:
[[/ability/mini-turret]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp]] Mini Turrets change history))
### [[/ability/mini-turret]]((Mini Turrets))
- Mini Turrets bullet velocity increased from 406 to 500
==
=

=hero:mirage:
``attr:
impact closed=#true {
  all {
    before win=0.4933 pick=0.3636 matches=61964 days=6
    after win=0.4702 pick=0.3139 matches=144165 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4789 pick=0.3847 matches=7022 days=7
  }
}
``
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))
==ability:tornado:
[[/ability/dust-devil]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp]] Tornado change history))
### [[/ability/dust-devil]]((Tornado))
- Tornado speed reduced by 10%
==
==ability:dust-devil:
[[/ability/dust-devil]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp]] Dust Devil change history))
### [[/ability/dust-devil]]((Dust Devil))
- Fixed Tornado being usable while immobilized
- Tornado and Fire Scarabs ability slots swapped
==
==ability:traveler:
[[/ability/traveler]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp]] Traveler change history))
### [[/ability/traveler]]((Traveler))
- Traveler cooldown increased from 130s to 145s
- Traveler T2 increased from -40s to -55s
- Traveler can now be cast by targeting the top bar portraits
==
=

=hero:mo-krill:
``attr:
impact closed=#true {
  all {
    before win=0.5169 pick=0.4211 matches=71771 days=6
    after win=0.5192 pick=0.4463 matches=204954 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5302 pick=0.4712 matches=8601 days=7
  }
}
``
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))
==ability:scorn:
[[/ability/scorn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp]] Scorn change history))
### [[/ability/scorn]]((Scorn))
- Scorn heal vs heroes reduced from 2x to 1.6x
- Scorn heal vs creeps reduced from 0.7x to 0.6x
==
- Headshot resistance now only applies to the big head
==ability:burrow:
[[/ability/burrow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp]] Burrow change history))
### [[/ability/burrow]]((Burrow))
- Burrow can now go under Spectral Wall
==
==ability:combo:
[[/ability/combo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp]] Combo change history))
### [[/ability/combo]]((Combo))
- Combo now pulls the target closer to you over time
- Combo health gain increased from 30 to 70
==
==ability:sand-blast:
[[/ability/sand-blast]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp]] Sand Blast change history))
### [[/ability/sand-blast]]((Sand Blast))
- Sand Blast duration reduced from 3.5s to 3s
- Sand Blast T3 slow reduced from 50% to 40%
==
=

=hero:paradox:
``attr:
impact closed=#true {
  all {
    before win=0.492 pick=0.4903 matches=83561 days=6
    after win=0.4887 pick=0.4854 matches=222910 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5128 pick=0.6532 matches=11924 days=7
  }
}
``
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))
==ability:kinetic-carbine:
[[/ability/kinetic-carbine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp]] Kinetic Carbine change history))
### [[/ability/kinetic-carbine]]((Kinetic Carbine))
- Fixed Kinetic Carbine not proccing Headshot effects (Headshot booster, Headhunter, Crippling Headshot)
==
==ability:paradoxical-swap:
[[/ability/paradoxical-swap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp]] Paradoxical Swap change history))
### [[/ability/paradoxical-swap]]((Paradoxical Swap))
- Paradoxical Swap time min/max increased by 0.2/0.3s (to help with camera)
==
==ability:time-wall:
[[/ability/time-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp]] Time Wall change history))
### [[/ability/time-wall]]((Time Wall))
- Time Wall now deals 50 damage for going through it
==
=

=hero:pocket:
``attr:
impact closed=#true {
  all {
    before win=0.5138 pick=0.4936 matches=84117 days=6
    after win=0.4978 pick=0.48 matches=220424 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5259 pick=0.7708 matches=14071 days=7
  }
}
``
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))
==ability:affliction:
[[/ability/affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/ability/affliction]]((Affliction))
- Affliction T2 Healing Reduction reduced from 60% to 50%
==
=

=hero:seven:
``attr:
impact closed=#true {
  all {
    before win=0.4943 pick=0.6412 matches=109285 days=6
    after win=0.5153 pick=0.6724 matches=308789 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4981 pick=0.4586 matches=8371 days=7
  }
}
``
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))
==ability:storm-cloud:
[[/ability/storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/ability/storm-cloud]]((Storm Cloud))
- Storm Cloud now causes you to levitate up and down a little bit in a cycle rather than being fully stationary
- Storm Cloud expand time reduced from 2s to 1.5s
==
=

=hero:shiv:
``attr:
impact closed=#true {
  all {
    before win=0.4774 pick=0.3598 matches=61318 days=6
    after win=0.4694 pick=0.4299 matches=197440 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4571 pick=0.5054 matches=9226 days=7
  }
}
``
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))
==ability:bloodletting:
[[/ability/bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting change history))
### [[/ability/bloodletting]]((Bloodletting))
- Bloodletting reduced from 22% to 20%
- Bloodletting T1 reduced from +8% to +6%
- Bloodletting rage bonus reduced from +15% to 14%
==
==ability:serrated-knives:
[[/ability/serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives change history))
### [[/ability/serrated-knives]]((Serrated Knives))
- Serrated Knives cooldown reduced from 19s to 16s
- Serrated Knives can now capture souls
==
==ability:slice-and-dice:
[[/ability/slice-and-dice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp]] Slice and Dice change history))
### [[/ability/slice-and-dice]]((Slice and Dice))
- Slice and Dice base damage increased from 105 to 110
- Slice and Dice T2 reduced from +75 to +70
- Slice and Dice cooldown reduced from 16s to 15s
- Slice and Dice T1 reduced from -4s to -3s
==
==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))
- Killing Blow threshold increased from 20% to 22%
- Killing Blow T2 reduced from +8% Enemy Health Threshold to +6%
==
==ability:killing-blow-full-rage-damage-bonus:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow Full Rage Damage Bonus change history))
### [[/ability/killing-blow]]((Killing Blow Full Rage Damage Bonus))
- Killing Blow Full Rage Damage Bonus increased from 15% to 17%
==
==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))
- Killing Blow T2 reduced from +10% Full Rage Bonus Damage to +8%
==
==ability:serrated-knives:
[[/ability/serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives change history))
### [[/ability/serrated-knives]]((Serrated Knives))
- Fixed an issue where using Serrated Knives and immediately holding M1 after to shoot not firing your gun
==
==ability:killing-blow:
[[/ability/killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/ability/killing-blow]]((Killing Blow))
- Killing Blow Rage per spirit damage increased from 0.013 to 0.014
- Killing Blow cast range increased from 14m to 15m
==
=

=hero:vindicta:
``attr:
impact closed=#true {
  all {
    before win=0.4833 pick=0.633 matches=107889 days=6
    after win=0.5042 pick=0.6774 matches=311100 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5066 pick=0.6457 matches=11787 days=7
  }
}
``
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))
==ability:crow-familiar:
[[/ability/crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow Familiar change history))
### [[/ability/crow-familiar]]((Crow Familiar))
- Crow Familiar changed from 0.2s cast delay to 0.2s post cast time
- Crow Familiar now also reduces spirit resistance by 6%
- Crow Familiar T3 changed from "+3% Bleed and -40% Anti Heal" to -12% Spirit and Bullet Resistance
==
==ability:stake:
[[/ability/stake]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp]] Stake change history))
### [[/ability/stake]]((Stake))
- Stake radius increased from 8m to 9m
- Stake now sucks enemies 3m towards the center (and limits movement to 6m from center)
- Stake T1 changed from +0.5s to -40% Fire Rate
- Stake T3 changed from Disarm to +0.75s
==
==ability:assassinate:
[[/ability/assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/ability/assassinate]]((Assassinate))
- Assassinate min charge up increased from 25% to 50%
- Assassinate bonus damage on low hp base damage reduced from 135 to 120
- Fixed Assassinate being stuck if you zoom in and get silenced
==
=

=hero:viscous:
``attr:
impact closed=#true {
  all {
    before win=0.4966 pick=0.3767 matches=64195 days=6
    after win=0.4842 pick=0.3567 matches=163799 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4954 pick=0.4078 matches=7444 days=7
  }
}
``
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))
==ability:the-cube:
[[/ability/the-cube]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp]] The Cube change history))
### [[/ability/the-cube]]((The Cube))
- The Cube regen reduced from 40 to 35
- The Cube T2 regen reduced from +35 to +30
- The Cube regen spirit power scaling reduced from 0.2 to 0.18
==
==ability:puddle-punch:
[[/ability/puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/ability/puddle-punch]]((Puddle Punch))
- Puddle Punch can now be parried (does not stun Viscous, only blocks the puddle effect for the parrying player)
==
=

=hero:warden:
``attr:
impact closed=#true {
  all {
    before win=0.5459 pick=0.6225 matches=106095 days=6
    after win=0.5365 pick=0.6272 matches=288017 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5393 pick=0.6879 matches=12557 days=7
  }
}
``
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))
==ability:last-stand:
[[/ability/last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/ability/last-stand]]((Last Stand))
- Last Stand non-hero lifesteal reduced from 50% to 20%
- Last Stand hero lifesteal reduced from 100% to 80%
==
- Fire Rate spirit scaling reduced from 0.3 to 0.25
==ability:alchemical-flask:
[[/ability/alchemical-flask]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp]] Alchemical Flask change history))
### [[/ability/alchemical-flask]]((Alchemical Flask))
- Alchemical Flask now respects LOS
==
==ability:last-stand:
[[/ability/last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/ability/last-stand]]((Last Stand))
- Last Stand cooldown increased from 138s to 140s
- Last Stand resistance during channel increased from 50% to 60%
==
=

=hero:wraith:
``attr:
impact closed=#true {
  all {
    before win=0.4908 pick=0.7475 matches=127396 days=6
    after win=0.4819 pick=0.7003 matches=321617 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4626 pick=0.455 matches=8306 days=7
  }
}
``
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))
==ability:full-auto:
[[/ability/full-auto]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp]] Full Auto change history))
### [[/ability/full-auto]]((Full Auto))
- Full Auto T3 lifesteal reduced from 35% to 30%
- Full Auto T2 no longer has spirit scaling (moved to T3)
- Full Auto T3 now also adds spirit scaling
==
==ability:telekinesis:
[[/ability/telekinesis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp]] Telekinesis change history))
### [[/ability/telekinesis]]((Telekinesis))
- Telekinesis now causes the target to oscillate up and down a little bit
==
=

=hero:yamato:
``attr:
impact closed=#true {
  all {
    before win=0.5236 pick=0.5814 matches=99091 days=6
    after win=0.4915 pick=0.4612 matches=211790 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5 pick=0.5665 matches=10341 days=7
  }
}
``
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))
==ability:power-slash:
[[/ability/power-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp]] Power Slash change history))
### [[/ability/power-slash]]((Power Slash))
- Improved cases where Power Slash would hit enemies behind cover
==
==ability:shadow-transformation:
[[/ability/shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/ability/shadow-transformation]]((Shadow Transformation))
- Shadow Transformation no longer heals on cast
- Shadow Transformation T3 increased from +2s to +3s
- Shadow Transformation now heals for 15% of your max hp on hero kill
==
=

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Active Reload", "Alchemical Fire", "Ammo Scavenger", "Berserker", "Bullet Lifesteal", "Debuff Reducer", "Decay", "Divine Barrier", "Diviner's Kevlar", "Echo Shard", "Ethereal Shift", "Glass Cannon", "Headhunter", "Healbane", "Healing Nova", "Heroic Aura", "Hunter's Aura", "Improved Spirit", "Infuser", "Knockdown", "Leech", "Lifestrike", "Lucky Shot", "Majestic Leap", "Melee Lifesteal", "Metal Skin", "Monster Rounds", "Mystic Reverb", "Mystic Slow", "Phantom Strike", "Rapid Recharge", "Rapid Rounds", "Reactive Barrier", "Refresher", "Rescue Beam", "Restorative Locket", "Return Fire", "Silencer", "Slowing Hex", "Spirit Lifesteal", "Torment Pulse", "Toxic Bullets", "Vampiric Burst"]} />
``

=item:active-reload:
``attr:
impact closed=#true {
  all {
    before win=0.4946 pick=0.0722 matches=147646 days=6
    after win=0.5049 pick=0.0628 matches=345923 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5044 pick=0.0521 matches=11420 days=7
  }
}
``
[[/item/active-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp]] Active Reload patch history))
## [[/item/active-reload]]((Active Reload))
- Bullet Lifesteal reduced from 20% to 18%
=

=item:alchemical-fire:
``attr:
impact closed=#true {
  all {
    before win=0.5202 pick=0.0158 matches=32252 days=6
    after win=0.5296 pick=0.0215 matches=118329 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5494 pick=0.0363 matches=7947 days=7
  }
}
``
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))
- DPS burn lingers on targets for 1s
=

=item:ammo-scavenger:
[[/item/ammo-scavenger]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]] Ammo Scavenger patch history))
## [[/item/ammo-scavenger]]((Ammo Scavenger))
- While at max stacks you gain +2 Sprint
=

=item:berserker:
``attr:
impact closed=#true {
  all {
    before win=0.5233 pick=0.0805 matches=164662 days=6
    after win=0.5206 pick=0.0859 matches=473453 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.522 pick=0.1136 matches=24885 days=7
  }
}
``
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))
- Weapon Damage per stack increased from 5% to 6%
=

=item:bullet-lifesteal:
``attr:
impact closed=#true {
  all {
    before win=0.5039 pick=0.2558 matches=523178 days=6
    after win=0.5124 pick=0.2528 matches=1393006 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5099 pick=0.1963 matches=42991 days=7
  }
}
``
[[/item/bullet-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp]] Bullet Lifesteal patch history))
## [[/item/bullet-lifesteal]]((Bullet Lifesteal))
- Lifesteal reduced from 28% to 26%
=

=item:debuff-reducer:
``attr:
impact closed=#true {
  all {
    before win=0.5071 pick=0.0627 matches=128221 days=6
    after win=0.508 pick=0.07 matches=385886 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5271 pick=0.1267 matches=27750 days=7
  }
}
``
[[/item/debuff-reducer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp]] Debuff Reducer patch history))
## [[/item/debuff-reducer]]((Debuff Reducer))
- Debuff Resist reduced from 30% to 28%
- Weapon Damage increased from 6% to 8%
=

=item:decay:
``attr:
impact closed=#true {
  all {
    before win=0.4808 pick=0.0272 matches=55721 days=6
    after win=0.4747 pick=0.0244 matches=134710 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.485 pick=0.0473 matches=10357 days=7
  }
}
``
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))
- Cast delay changed from 0.25s to 0.1s, to match other similar actives
- No longer interrupts sliding, to match other similar actives
- Healing Reduction reduced from 70% to 55%
- Damage increased from 1% to 1.4%
=

=item:divine-barrier:
[[/item/divine-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp]] Divine Barrier patch history))
## [[/item/divine-barrier]]((Divine Barrier))
- Now has +8% Ability Range again instead of +6 Spirit Power
- No longer grants +1 Sprint
=

=item:diviner-s-kevlar:
``attr:
impact closed=#true {
  all {
    before win=0.5702 pick=0.0648 matches=132479 days=6
    after win=0.5667 pick=0.0685 matches=377468 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.578 pick=0.0963 matches=21106 days=7
  }
}
``
[[/item/diviners-kevlar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp]] Diviner's Kevlar patch history))
## [[/item/diviners-kevlar]]((Diviner's Kevlar))
- No longer grants +20% Spirit Lifesteal
- Now grants +7% Ability Duration
=

=item:echo-shard:
``attr:
impact closed=#true {
  all {
    before win=0.5465 pick=0.0272 matches=55610 days=6
    after win=0.5379 pick=0.0332 matches=183193 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5235 pick=0.0289 matches=6340 days=7
  }
}
``
[[/item/echo-shard]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp]] Echo Shard patch history))
## [[/item/echo-shard]]((Echo Shard))
- Cast delay reduced from 0.3s to 0.25s
=

=item:ethereal-shift:
``attr:
impact closed=#true {
  all {
    before win=0.5088 pick=0.0222 matches=45485 days=6
    after win=0.5092 pick=0.0257 matches=141705 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5483 pick=0.0567 matches=12430 days=7
  }
}
``
[[/item/ethereal-shift]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp]] Ethereal Shift patch history))
## [[/item/ethereal-shift]]((Ethereal Shift))
- Post Shift now also grants +20 Spirit Power
=

=item:glass-cannon:
``attr:
impact closed=#true {
  all {
    before win=0.566 pick=0.0513 matches=105004 days=6
    after win=0.5741 pick=0.0628 matches=346209 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5915 pick=0.0412 matches=9028 days=7
  }
}
``
[[/item/glass-cannon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp]] Glass Cannon patch history))
## [[/item/glass-cannon]]((Glass Cannon))
- Now requires Slowing Bullets and grants the slow passive
=

=item:headhunter:
``attr:
impact closed=#true {
  all {
    before win=0.5143 pick=0.1606 matches=328387 days=6
    after win=0.5087 pick=0.1601 matches=882448 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5118 pick=0.1889 matches=41370 days=7
  }
}
``
[[/item/headhunter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp]] Headhunter patch history))
## [[/item/headhunter]]((Headhunter))
- Heal per Headshot reduced from 8% to 7%
- Head Shot Bonus Damage reduced from +140 to +130
=

=item:healbane:
``attr:
impact closed=#true {
  all {
    before win=0.5088 pick=0.1695 matches=346693 days=6
    after win=0.505 pick=0.1722 matches=949212 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5108 pick=0.2423 matches=53083 days=7
  }
}
``
[[/item/healbane]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp]] Healbane patch history))
## [[/item/healbane]]((Healbane))
- Healing Reduction reduced from 45% to 40%
- Duration increased from 6s to 7s
=

=item:healing-nova:
``attr:
impact closed=#true {
  all {
    before win=0.5199 pick=0.0599 matches=122463 days=6
    after win=0.5087 pick=0.0491 matches=270816 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5157 pick=0.0585 matches=12811 days=7
  }
}
``
[[/item/healing-nova]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp]] Healing Nova patch history))
## [[/item/healing-nova]]((Healing Nova))
- No longer has +6% Ability Range
=

=item:heroic-aura:
``attr:
impact closed=#true {
  all {
    before win=0.5326 pick=0.027 matches=55283 days=6
    after win=0.5375 pick=0.0326 matches=179529 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.555 pick=0.042 matches=9205 days=7
  }
}
``
[[/item/heroic-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp]] Heroic Aura patch history))
## [[/item/heroic-aura]]((Heroic Aura))
- Bullet Lifesteal reduced from 20% to 18%
- Cooldown reduced from 25s to 20s
=

=item:hunter-s-aura:
``attr:
impact closed=#true {
  all {
    before win=0.5545 pick=0.0559 matches=114225 days=6
    after win=0.5487 pick=0.0542 matches=298830 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.538 pick=0.068 matches=14904 days=7
  }
}
``
[[/item/hunters-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp]] Hunter's Aura patch history))
## [[/item/hunters-aura]]((Hunter's Aura))
- Fire Rate slow reduced from 10% to 9%
=

=item:improved-spirit:
``attr:
impact closed=#true {
  all {
    before win=0.5078 pick=0.2438 matches=498621 days=6
    after win=0.5071 pick=0.27 matches=1487845 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5077 pick=0.2046 matches=44813 days=7
  }
}
``
[[/item/improved-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp]] Improved Spirit patch history))
## [[/item/improved-spirit]]((Improved Spirit))
- Health increased from 100 to 125
=

=item:infuser:
``attr:
impact closed=#true {
  all {
    before win=0.482 pick=0.0574 matches=117420 days=6
    after win=0.4799 pick=0.0579 matches=319290 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4651 pick=0.0752 matches=16483 days=7
  }
}
``
[[/item/infuser]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp]] Infuser patch history))
## [[/item/infuser]]((Infuser))
- Cooldown reduced from 37s to 32s
=

=item:knockdown:
``attr:
impact closed=#true {
  all {
    before win=0.4979 pick=0.038 matches=77704 days=6
    after win=0.4866 pick=0.0449 matches=247704 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4942 pick=0.0543 matches=11901 days=7
  }
}
``
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))
- Cast delay changed from 0.25s to 0.1s, to match other similar actives
- No longer interrupts sliding, to match other similar actives
=

=item:leech:
``attr:
impact closed=#true {
  all {
    before win=0.5546 pick=0.1023 matches=209308 days=6
    after win=0.5555 pick=0.1172 matches=645635 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5726 pick=0.06 matches=13148 days=7
  }
}
``
[[/item/leech]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp]] Leech patch history))
## [[/item/leech]]((Leech))
- Bullet Lifesteal reduced from 35% to 32%
- Spirit Lifesteal reduced from 35% to 32%
=

=item:lifestrike:
``attr:
impact closed=#true {
  all {
    before win=0.534 pick=0.0434 matches=88704 days=6
    after win=0.5209 pick=0.0488 matches=268971 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.504 pick=0.0413 matches=9046 days=7
  }
}
``
[[/item/lifestrike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp]] Lifestrike patch history))
## [[/item/lifestrike]]((Lifestrike))
- Lifesteal reduced from 65% to 55%
=

=item:lucky-shot:
``attr:
impact closed=#true {
  all {
    before win=0.5698 pick=0.0681 matches=139250 days=6
    after win=0.5866 pick=0.0826 matches=455386 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5849 pick=0.0696 matches=15244 days=7
  }
}
``
[[/item/lucky-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp]] Lucky Shot patch history))
## [[/item/lucky-shot]]((Lucky Shot))
- Damage multiplier increased from 90% to 110%
- Now grants +150 Bullet Shield
=

=item:majestic-leap:
``attr:
impact closed=#true {
  all {
    before win=0.5229 pick=0.0392 matches=80092 days=6
    after win=0.5184 pick=0.0371 matches=204308 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5091 pick=0.0434 matches=9502 days=7
  }
}
``
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))
- Now grants +6% Spirit Resist
=

=item:melee-lifesteal:
``attr:
impact closed=#true {
  all {
    before win=0.5124 pick=0.1099 matches=224824 days=6
    after win=0.5018 pick=0.116 matches=639416 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4921 pick=0.1223 matches=26793 days=7
  }
}
``
[[/item/melee-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp]] Melee Lifesteal patch history))
## [[/item/melee-lifesteal]]((Melee Lifesteal))
- Lifesteal reduced from 20% to 18%
- Now grants +3% Bullet Resist
=

=item:metal-skin:
``attr:
impact closed=#true {
  all {
    before win=0.4406 pick=0.0357 matches=73081 days=6
    after win=0.4168 pick=0.0339 matches=186731 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4317 pick=0.0559 matches=12256 days=7
  }
}
``
[[/item/metal-skin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp]] Metal Skin patch history))
## [[/item/metal-skin]]((Metal Skin))
- Active now reduces your Move Speed by 1.5
=

=item:monster-rounds:
``attr:
impact closed=#true {
  all {
    before win=0.5041 pick=0.2154 matches=440575 days=6
    after win=0.5043 pick=0.2116 matches=1166240 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5106 pick=0.2119 matches=46409 days=7
  }
}
``
[[/item/monster-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp]] Monster Rounds patch history))
## [[/item/monster-rounds]]((Monster Rounds))
- Bonus Health reduced from 50 to 30
=

=item:mystic-reverb:
[[/item/mystic-reverb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp]] Mystic Reverb patch history))
## [[/item/mystic-reverb]]((Mystic Reverb))
- Damage increased from 40% to 45%
=

=item:mystic-slow:
``attr:
impact closed=#true {
  all {
    before win=0.5189 pick=0.0626 matches=128036 days=6
    after win=0.5295 pick=0.0757 matches=416991 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5378 pick=0.0567 matches=12423 days=7
  }
}
``
[[/item/mystic-slow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp]] Mystic Slow patch history))
## [[/item/mystic-slow]]((Mystic Slow))
- Now grants +1 Sprint
- Health increased from 140 to 160
=

=item:phantom-strike:
``attr:
impact closed=#true {
  all {
    before win=0.5849 pick=0.0121 matches=24649 days=6
    after win=0.574 pick=0.0143 matches=78992 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.577 pick=0.0232 matches=5088 days=7
  }
}
``
[[/item/phantom-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp]] Phantom Strike patch history))
## [[/item/phantom-strike]]((Phantom Strike))
- Cast range now ignores the Z height (similar to Lash's Death Slam)
=

=item:rapid-recharge:
``attr:
impact closed=#true {
  all {
    before win=0.4975 pick=0.1813 matches=370858 days=6
    after win=0.5004 pick=0.1981 matches=1091629 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.506 pick=0.1655 matches=36256 days=7
  }
}
``
[[/item/rapid-recharge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp]] Rapid Recharge patch history))
## [[/item/rapid-recharge]]((Rapid Recharge))
- Time between charges reduced from 65% to 60%
=

=item:rapid-rounds:
``attr:
impact closed=#true {
  all {
    before win=0.4907 pick=0.1729 matches=353640 days=6
    after win=0.504 pick=0.1848 matches=1018470 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4946 pick=0.1885 matches=41283 days=7
  }
}
``
[[/item/rapid-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp]] Rapid Rounds patch history))
## [[/item/rapid-rounds]]((Rapid Rounds))
- Fire Rate increased from 10% to 11%
=

=item:reactive-barrier:
``attr:
impact closed=#true {
  all {
    before win=0.4994 pick=0.0576 matches=117793 days=6
    after win=0.4933 pick=0.0617 matches=340233 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5035 pick=0.0767 matches=16795 days=7
  }
}
``
[[/item/reactive-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier patch history))
## [[/item/reactive-barrier]]((Reactive Barrier))
- Bullet Shield health reduced from 400 to 350
=

=item:refresher:
``attr:
impact closed=#true {
  all {
    before win=0.5794 pick=0.0243 matches=49675 days=6
    after win=0.5661 pick=0.0233 matches=128307 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5885 pick=0.0305 matches=6690 days=7
  }
}
``
[[/item/refresher]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp]] Refresher patch history))
## [[/item/refresher]]((Refresher))
- Cooldown increased from 230s to 260s
=

=item:rescue-beam:
``attr:
impact closed=#true {
  all {
    before win=0.5267 pick=0.018 matches=36788 days=6
    after win=0.5249 pick=0.0184 matches=101210 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5325 pick=0.0364 matches=7970 days=7
  }
}
``
[[/item/rescue-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp]] Rescue Beam patch history))
## [[/item/rescue-beam]]((Rescue Beam))
- Heal reduced from 26% to 24%
- Now grants +6% Ability Range
- Cooldown increased from 26s to 36s
- Pull speed reduced by 15%
=

=item:restorative-locket:
``attr:
impact closed=#true {
  all {
    before win=0.5233 pick=0.0101 matches=20602 days=6
    after win=0.5047 pick=0.0098 matches=53889 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5148 pick=0.0227 matches=4969 days=7
  }
}
``
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))
- Regen per stack reduced from 35 to 32
=

=item:return-fire:
``attr:
impact closed=#true {
  all {
    before win=0.4884 pick=0.0625 matches=127793 days=6
    after win=0.4652 pick=0.0681 matches=375089 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4735 pick=0.1149 matches=25178 days=7
  }
}
``
[[/item/return-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp]] Return Fire patch history))
## [[/item/return-fire]]((Return Fire))
- Now requires Extra Regen
=

=item:silencer:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0
    after win=0.6001 pick=0.0169 matches=92920 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.6041 pick=0.023 matches=5036 days=7
  }
}
``
[[/item/silencer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]] Silencer patch history))
## [[/item/silencer]]((Silencer))
- Reworked item. Passively builds up on enemies, silencing for 2s and then reducing spirit damage output by 40% for 4s. Enemies affected cannot be affected again for 12s. Grants +20% Weapon Damage, +15% Spirit Resist and 20% Debuff Reduction. (Buildup is a bit slower than Toxic Bullets)
=

=item:slowing-hex:
``attr:
impact closed=#true {
  all {
    before win=0.5223 pick=0.0982 matches=200812 days=6
    after win=0.517 pick=0.0991 matches=546034 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5167 pick=0.1779 matches=38967 days=7
  }
}
``
[[/item/slowing-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp]] Slowing Hex patch history))
## [[/item/slowing-hex]]((Slowing Hex))
- No longer interrupts sliding, to match other similar actives
=

=item:spirit-lifesteal:
``attr:
impact closed=#true {
  all {
    before win=0.5007 pick=0.2272 matches=464589 days=6
    after win=0.5007 pick=0.2494 matches=1374597 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4995 pick=0.2126 matches=46580 days=7
  }
}
``
[[/item/spirit-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp]] Spirit Lifesteal patch history))
## [[/item/spirit-lifesteal]]((Spirit Lifesteal))
- Lifesteal reduced from 23% to 22%
=

=item:torment-pulse:
``attr:
impact closed=#true {
  all {
    before win=0.5453 pick=0.0981 matches=200559 days=6
    after win=0.5309 pick=0.0997 matches=549544 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5219 pick=0.1191 matches=26091 days=7
  }
}
``
[[/item/torment-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp]] Torment Pulse patch history))
## [[/item/torment-pulse]]((Torment Pulse))
- Now grants +15% Melee Resistance
=

=item:toxic-bullets:
``attr:
impact closed=#true {
  all {
    before win=0.495 pick=0.1146 matches=234358 days=6
    after win=0.4929 pick=0.1141 matches=628838 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4741 pick=0.0975 matches=21362 days=7
  }
}
``
[[/item/toxic-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp]] Toxic Bullets patch history))
## [[/item/toxic-bullets]]((Toxic Bullets))
- Healing Reduction reduced from 65% to 50%
=

=item:vampiric-burst:
``attr:
impact closed=#true {
  all {
    before win=0.5922 pick=0.0159 matches=32419 days=6
    after win=0.5978 pick=0.0176 matches=97197 days=7
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.6258 pick=0.0175 matches=3824 days=7
  }
}
``
[[/item/vampiric-burst]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp]] Vampiric Burst patch history))
## [[/item/vampiric-burst]]((Vampiric Burst))
- Bullet Lifesteal reduced from 100% to 80%
=