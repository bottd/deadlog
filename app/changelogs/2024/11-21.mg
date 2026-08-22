``meta:
title "11-21-2024 Update"
thread_id "47476"
published "2024-11-21T15:21:49-0800"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
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
- New T3 Spirit Item, Spirit Snatch: Requires Spirit Strike. Causes your melee attacks to steal 12% Spirit Resist and 26 Spirit Power for 16s. Cooldown 6s. Buff you receive stacks if you hit different heroes. Grants +15% Melee Damage, +8% Spirit Resist,  +125 Health  and +1 Sprint. (Thanks to {https://forums.playdeadlock.com/threads/spirt-snatch-3k-soul-spirit-strike-upgrade.46932/}[https://forums.playdeadlock.com/threads/spirt-snatch-3k-soul-spirit-strike-upgrade.46932/] )
- New T3 Spirit Item, Arcane Surge: Requires Kinetic Dash. After successful Dash Jump, the next ability you use will also have +20% Range, +20% Duration and +20 Spirit Power. Grants +100 Health, +1 Stamina and +15% Slow Resist.

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Dynamo", "Grey Talon", "Haze", "Infernus", "Ivy", "Kelvin", "Lady Geist", "Lash", "McGinnis", "Mirage", "Mo &amp; Krill", "Paradox", "Pocket", "Seven", "Shiv", "Vindicta", "Viscous", "Warden", "Wraith", "Yamato"]} />
``

=hero:abrams:
[[/hero/abrams]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams patch history))
## [[/hero/abrams]]((Abrams))

==ability:infernal-resilience:
[[/hero/abrams?ability=infernal-resilience]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]] Infernal Resilience change history))
### [[/hero/abrams?ability=infernal-resilience]]((Infernal Resilience))

- Infernal Resilience reduced from 14% to 11% and T3 from 7% to 5.5%
==
==ability:siphon-life:
[[/hero/abrams?ability=siphon-life]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp]] Siphon Life change history))
### [[/hero/abrams?ability=siphon-life]]((Siphon Life))

- Siphon Life Heal vs Heroes reduced from 100% to 75%
- Siphon Life Heal vs Non-Heroes reduced from 50% to 40%
==

- Base regen increased from 1 to 1.5

==ability:siphon-life:
[[/hero/abrams?ability=siphon-life]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp]] Siphon Life change history))
### [[/hero/abrams?ability=siphon-life]]((Siphon Life))

- Siphon Life range now scales with Spirit Power (0.05)
- Siphon Life damage scaling with Spirit Power increased from 0.4 to 0.5
==
==ability:seismic-impact:
[[/hero/abrams?ability=seismic-impact]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp]] Seismic Impact change history))
### [[/hero/abrams?ability=seismic-impact]]((Seismic Impact))

- Seismic Impact drag down collision improved a bit
==
=
=hero:bebop:
[[/hero/bebop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop patch history))
## [[/hero/bebop]]((Bebop))

==ability:hyper-beam:
[[/hero/bebop?ability=hyper-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp]] Hyper Beam change history))
### [[/hero/bebop?ability=hyper-beam]]((Hyper Beam))

- Hyper Beam T3 reduced from 100/33% for Heroes/Creeps to 80%/25%
==
==ability:exploding-uppercut:
[[/hero/bebop?ability=exploding-uppercut]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp]] Exploding Uppercut change history))
### [[/hero/bebop?ability=exploding-uppercut]]((Exploding Uppercut))

- Exploding Uppercut T2 bonus now applies to melee damage too
==
==ability:grapple-arm:
[[/hero/bebop?ability=grapple-arm]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp]] Grapple Arm change history))
### [[/hero/bebop?ability=grapple-arm]]((Grapple Arm))

- Hook can now be canceled by allies with exit key (i.e. space bar, similar to existing Viscous Cube)
==
=
=hero:dynamo:
[[/hero/dynamo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo patch history))
## [[/hero/dynamo]]((Dynamo))

==ability:rejuvenating-aurora:
[[/hero/dynamo?ability=rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/hero/dynamo?ability=rejuvenating-aurora]]((Rejuvenating Aurora))

- Rejuvenating Aurora regen reduced from 32 to 30
==
==ability:rejuvenating-aurora-spirit-power:
### [[/hero/dynamo?ability=rejuvenating-aurora]]((Rejuvenating Aurora Spirit Power))

- Rejuvenating Aurora Spirit Power scaling reduced from 0.5 to 0.45
==
==ability:rejuvenating-aurora:
[[/hero/dynamo?ability=rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/hero/dynamo?ability=rejuvenating-aurora]]((Rejuvenating Aurora))

- Rejuvenating Aurora T3 reduced from 3.8% to 3.4%
==
==ability:kinetic-pulse:
[[/hero/dynamo?ability=kinetic-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp]] Kinetic Pulse change history))
### [[/hero/dynamo?ability=kinetic-pulse]]((Kinetic Pulse))

- Kinetic Pulse now slides around geometry when it hits an obstruction
==
==ability:rejuvenating-aurora:
[[/hero/dynamo?ability=rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/hero/dynamo?ability=rejuvenating-aurora]]((Rejuvenating Aurora))

- Rejuvenating Aurora now allows you to reload during it (currently only allows you to continue reloading if cast before)
==
==ability:quantum-entanglement:
[[/hero/dynamo?ability=quantum-entanglement]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp]] Quantum Entanglement change history))
### [[/hero/dynamo?ability=quantum-entanglement]]((Quantum Entanglement))

- Quantum Entanglement pulling allies no longer cancels their channel
- Quantum Entanglement now has a visual indicator for allies that will teleport

- Quantum Entanglement ally range increased from 9m to 10m
- Quantum Entanglement cooldown increased from 15s to 16s
- Quantum Entanglement T3 cooldown reduction improved from -4s to -5s
==
==ability:rejuvenating-aurora:
[[/hero/dynamo?ability=rejuvenating-aurora]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora change history))
### [[/hero/dynamo?ability=rejuvenating-aurora]]((Rejuvenating Aurora))

- Rejuvenating Aurora now allows you to use melee before T3 upgrade
==
=
=hero:grey-talon:
[[/hero/grey-talon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon patch history))
## [[/hero/grey-talon]]((Grey Talon))

==ability:rain-of-arrows:
[[/hero/grey-talon?ability=rain-of-arrows]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp]] Rain of Arrows change history))
### [[/hero/grey-talon?ability=rain-of-arrows]]((Rain of Arrows))

- Rain of Arrows T3 reduced from 50% Lifesteal to 40%
==

- Bullet damage increased from 24 to 25
- Health growth per boon increased from 27 to 29

==ability:immobilizing-trap:
### Immobilizing Trap

- Immobilizing Trap now tethers targets rather than rooting them

- Immobilizing Trap tether duration increased 1.25s to 1.5s
- Immobilizing Trap no longer applies 50% slow for 1s
- Immobilizing Trap slow now starts immediately for 30% and lasts until 2s after the tether ends
- Immobilizing Trap T2 changed from +2s Slow to +1s Tether
- Immobilizing Trap radius increased from 6 to 6.2
- Immobilizing Trap T1 CD improved from -19s to -20s
==
==ability:guided-owl:
[[/hero/grey-talon?ability=guided-owl]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp]] Guided Owl change history))
### [[/hero/grey-talon?ability=guided-owl]]((Guided Owl))

- Guided Owl camera now returns more quickly when the Owl collides very far away
==
=
=hero:haze:
[[/hero/haze]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze patch history))
## [[/hero/haze]]((Haze))

==ability:bullet-dance:
[[/hero/haze?ability=bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/hero/haze?ability=bullet-dance]]((Bullet Dance))

- Fixed Bullet Dance sometimes freezing your client
==
==ability:smoke-bomb:
[[/hero/haze?ability=smoke-bomb]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp]] Smoke Bomb change history))
### [[/hero/haze?ability=smoke-bomb]]((Smoke Bomb))

- Using items during Smoke Bomb no longer breaks invisibility
- Smoke Bomb cooldown reduced from 37s to 30s
- Smoke Bomb T1 changed from -14s to +6 Invis Sprint Speed
- Smoke Bomb T2 changed from +6 Invis Sprint Speed to +15% Bullet Lifesteal for 8s
- Smoke Bomb T3 changed from +30% Bullet Lifesteal for 8s to Phases Out for 0.5s on cast and enables charges with 10s charge time (causes you to be "out of world" and fizzle incoming projectiles during this time, you are still able to move. You need to buy charges still)
==
==ability:fixation:
[[/hero/haze?ability=fixation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp]] Fixation change history))
### [[/hero/haze?ability=fixation]]((Fixation))

- Fixation damage vs objectives reduced by 30%
==
==ability:bullet-dance:
[[/hero/haze?ability=bullet-dance]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp]] Bullet Dance change history))
### [[/hero/haze?ability=bullet-dance]]((Bullet Dance))

- Bullet Dance Bonus Damage changed from +5 Bullet Damage to +6 Spirit Damage (with 0.1 Spirit Scaling)
- Bullet Dance T1 changed to +7 Spirit Damage
==
=
=hero:infernus:
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))

==ability:catalyst:
### Catalyst

- Catalyst T2 reduced from 15% Lifesteal to 12%
- Catalyst T3 reduced from -40% Heal Degen to -33%
==
==ability:concussive-combustion:
[[/hero/infernus?ability=concussive-combustion]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp]] Concussive Combustion change history))
### [[/hero/infernus?ability=concussive-combustion]]((Concussive Combustion))

- Concussive Combustion T3 reduced from 100% to 85%
==
==ability:afterburn:
[[/hero/infernus?ability=afterburn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn change history))
### [[/hero/infernus?ability=afterburn]]((Afterburn))

- Afterburn buildup decay time is now 15% slower
==
==ability:concussive-combustion:
[[/hero/infernus?ability=concussive-combustion]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp]] Concussive Combustion change history))
### [[/hero/infernus?ability=concussive-combustion]]((Concussive Combustion))

- Concussive Combustion radius increased from 12m to 13m
- Concussive Combustion T2 radius reduced from +4m to +3m
==
=
=hero:ivy:
[[/hero/ivy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy patch history))
## [[/hero/ivy]]((Ivy))

==ability:watcher-s-covenant-bullet-lifesteal:
### Watcher's Covenant Bullet Lifesteal

- Watcher's Covenant Bullet Lifesteal reduced from 15% to 12%
==
==ability:stone-form-max-health-heal:
### [[/hero/ivy?ability=stone-form]]((Stone Form Max Health Heal))

- Stone Form Max Health Heal reduced from 10% to 8%
==
==ability:stone-form:
[[/hero/ivy?ability=stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/hero/ivy?ability=stone-form]]((Stone Form))

- Stone Form T3 Max Health Heal reduced from +20% to +16%

- Stone Form drag down collision improved a bit
==

- Bullet damage increased from 5 to 5.2
- Bullet damage growth reduced from 0.36 to 0.34

==ability:stone-form:
[[/hero/ivy?ability=stone-form]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp]] Stone Form change history))
### [[/hero/ivy?ability=stone-form]]((Stone Form))

- Fixed being launched incorrectly when using Stone Form on certain geometry
- Fixed Stone Form having a brief period of vulnerability after cast
==
==ability:air-drop:
[[/hero/ivy?ability=air-drop]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop change history))
### [[/hero/ivy?ability=air-drop]]((Air Drop))

- Air Drop flight controls improved a bit
- Air Drop duration reduced from 17s to 16s
- Air Drop cooldown increased from 85s to 90s
- Air Drop speed can now be increased with movespeed or sprint items (when out of combat)
- Air Drop now amplifies Sprint values by 1.5x
==
=
=hero:kelvin:
[[/hero/kelvin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin patch history))
## [[/hero/kelvin]]((Kelvin))

==ability:frost-grenade:
[[/hero/kelvin?ability=frost-grenade]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp]] Frost Grenade change history))
### [[/hero/kelvin?ability=frost-grenade]]((Frost Grenade))

- Frost Grenade T2 reduced from +125 Heal to +100
==
==ability:frozen-shelter:
[[/hero/kelvin?ability=frozen-shelter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp]] Frozen Shelter change history))
### [[/hero/kelvin?ability=frozen-shelter]]((Frozen Shelter))

- Frozen Shelter regen reduced from 120 to 110
- Frozen Shelter T3 reduced from +70 (1.6 Spirit Power) to +60 ( 1.4 Spirit Power)
==
==ability:ice-path:
[[/hero/kelvin?ability=ice-path]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp]] Ice Path change history))
### [[/hero/kelvin?ability=ice-path]]((Ice Path))

- Seismic Impact, Death Slam and Ground Strike now smash through Ice Path
==
=
=hero:lady-geist:
[[/hero/lady-geist]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp]] Lady Geist patch history))
## [[/hero/lady-geist]]((Lady Geist))

==ability:essence-bomb-self-damage:
### [[/hero/lady-geist?ability=essence-bomb]]((Essence Bomb Self Damage))

- Essence Bomb Self Damage spirit scaling reduced from 2 to 1.8
==
=
=hero:lash:
[[/hero/lash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp]] Lash patch history))
## [[/hero/lash]]((Lash))

==ability:flog:
[[/hero/lash?ability=flog]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp]] Flog change history))
### [[/hero/lash?ability=flog]]((Flog))

- Flog heal vs heroes reduced from 70% to 65%
- Flog heal vs creeps reduced from 25% to 20%
==
==ability:ground-strike:
[[/hero/lash?ability=ground-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp]] Ground Strike change history))
### [[/hero/lash?ability=ground-strike]]((Ground Strike))

- Ground Strike drag down collision improved a bit
==
=
=hero:mcginnis:
[[/hero/mcginnis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis patch history))
## [[/hero/mcginnis]]((McGinnis))

==ability:medicinal-specter:
[[/hero/mcginnis?ability=medicinal-specter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp]] Medicinal Specter change history))
### [[/hero/mcginnis?ability=medicinal-specter]]((Medicinal Specter))

- Medicinal Specter T3 reduced from 5% to 4.5%
==

- Bullet Velocity increased from 533 to 590
- Fixed Wall triggering Reactive Barrier before T3 stun

==ability:mini-turrets:
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turrets))

- Mini Turrets health no longer scales with your hero's health.
==
==ability:mini-turrets-spirit-resist:
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turrets Spirit Resist))

- Mini Turrets Spirit Resist reduced from 70% to 30%

- Mini Turrets base health increased from 75 to 150 (roughly same overall health as previous start of game)
==
==ability:mini-turrets:
### [[/hero/mcginnis?ability=mini-turret]]((Mini Turrets))

- Mini Turrets now gain +20 Health per Boon
- Mini Turrets now take at most 33% of their Max HP per second from any damage source.  Any excess damage is move to the following second. (In effect this means that turrets will always live at least 3 seconds)

- Fixed Mini Turrets dying causing you to lose sprint
- Mini Turrets cycle time reduced from 0.5 to 0.25 (DPS unchanged)
- Mini Turrets bullet velocity increased from 406 to 500
==
=
=hero:mirage:
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))

==ability:tornado:
### Tornado

- Tornado speed reduced by 10%

- Fixed Tornado being usable while immobilized
- Tornado and Fire Scarabs ability slots swapped
==
==ability:traveler:
[[/hero/mirage?ability=traveler]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp]] Traveler change history))
### [[/hero/mirage?ability=traveler]]((Traveler))

- Traveler cooldown increased from 130s to 145s
- Traveler T2 increased from -40s to -55s

- Traveler can now be cast by targeting the top bar portraits
==
=
=hero:mo-krill:
[[/hero/mo-krill]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp]] Mo & Krill patch history))
## [[/hero/mo-krill]]((Mo & Krill))

==ability:scorn:
[[/hero/mo-krill?ability=scorn]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp]] Scorn change history))
### [[/hero/mo-krill?ability=scorn]]((Scorn))

- Scorn heal vs heroes reduced from 2x to 1.6x
- Scorn heal vs creeps reduced from 0.7x to 0.6x
==

- Headshot resistance now only applies to the big head

==ability:burrow:
[[/hero/mo-krill?ability=burrow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp]] Burrow change history))
### [[/hero/mo-krill?ability=burrow]]((Burrow))

- Burrow can now go under Spectral Wall
==
==ability:combo:
[[/hero/mo-krill?ability=combo]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp]] Combo change history))
### [[/hero/mo-krill?ability=combo]]((Combo))

- Combo now pulls the target closer to you over time
- Combo health gain increased from 30 to 70
==
==ability:sand-blast:
[[/hero/mo-krill?ability=sand-blast]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp]] Sand Blast change history))
### [[/hero/mo-krill?ability=sand-blast]]((Sand Blast))

- Sand Blast duration reduced from 3.5s to 3s
- Sand Blast T3 slow reduced from 50% to 40%
==
=
=hero:paradox:
[[/hero/paradox]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox patch history))
## [[/hero/paradox]]((Paradox))

==ability:kinetic-carbine:
[[/hero/paradox?ability=kinetic-carbine]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp]] Kinetic Carbine change history))
### [[/hero/paradox?ability=kinetic-carbine]]((Kinetic Carbine))

- Fixed Kinetic Carbine not proccing Headshot effects (Headshot booster, Headhunter, Crippling Headshot)
==
==ability:paradoxical-swap:
[[/hero/paradox?ability=paradoxical-swap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp]] Paradoxical Swap change history))
### [[/hero/paradox?ability=paradoxical-swap]]((Paradoxical Swap))

- Paradoxical Swap time min/max increased by 0.2/0.3s (to help with camera)
==
==ability:time-wall:
[[/hero/paradox?ability=time-wall]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp]] Time Wall change history))
### [[/hero/paradox?ability=time-wall]]((Time Wall))

- Time Wall now deals 50 damage for going through it
==
=
=hero:pocket:
[[/hero/pocket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp]] Pocket patch history))
## [[/hero/pocket]]((Pocket))

==ability:affliction:
[[/hero/pocket?ability=affliction]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp]] Affliction change history))
### [[/hero/pocket?ability=affliction]]((Affliction))

- Affliction T2 Healing Reduction reduced from 60% to 50%
==
=
=hero:seven:
[[/hero/seven]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven patch history))
## [[/hero/seven]]((Seven))

==ability:storm-cloud:
[[/hero/seven?ability=storm-cloud]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp]] Storm Cloud change history))
### [[/hero/seven?ability=storm-cloud]]((Storm Cloud))

- Storm Cloud now causes you to levitate up and down a little bit in a cycle rather than being fully stationary

- Storm Cloud expand time reduced from 2s to 1.5s
==
=
=hero:shiv:
[[/hero/shiv]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv patch history))
## [[/hero/shiv]]((Shiv))

==ability:bloodletting:
[[/hero/shiv?ability=bloodletting]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp]] Bloodletting change history))
### [[/hero/shiv?ability=bloodletting]]((Bloodletting))

- Bloodletting reduced from 22% to 20%
- Bloodletting T1 reduced from +8% to +6%

- Bloodletting rage bonus reduced from +15% to 14%
==
==ability:serrated-knives:
[[/hero/shiv?ability=serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives change history))
### [[/hero/shiv?ability=serrated-knives]]((Serrated Knives))

- Serrated Knives cooldown reduced from 19s to 16s

- Serrated Knives can now capture souls
==
==ability:slice-and-dice:
[[/hero/shiv?ability=slice-and-dice]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp]] Slice and Dice change history))
### [[/hero/shiv?ability=slice-and-dice]]((Slice and Dice))

- Slice and Dice base damage increased from 105 to 110
- Slice and Dice T2 reduced from +75 to +70
- Slice and Dice cooldown reduced from 16s to 15s
- Slice and Dice T1 reduced from -4s to -3s
==
==ability:killing-blow:
[[/hero/shiv?ability=killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/hero/shiv?ability=killing-blow]]((Killing Blow))

- Killing Blow threshold increased from 20% to 22%
- Killing Blow T2 reduced from +8% Enemy Health Threshold to +6%
==
==ability:killing-blow-full-rage-damage-bonus:
### [[/hero/shiv?ability=killing-blow]]((Killing Blow Full Rage Damage Bonus))

- Killing Blow Full Rage Damage Bonus increased from 15% to 17%
==
==ability:killing-blow:
[[/hero/shiv?ability=killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/hero/shiv?ability=killing-blow]]((Killing Blow))

- Killing Blow T2 reduced from +10% Full Rage Bonus Damage to +8%
==
==ability:serrated-knives:
[[/hero/shiv?ability=serrated-knives]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives change history))
### [[/hero/shiv?ability=serrated-knives]]((Serrated Knives))

- Fixed an issue where using Serrated Knives and immediately holding M1 after to shoot not firing your gun
==
==ability:killing-blow:
[[/hero/shiv?ability=killing-blow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp]] Killing Blow change history))
### [[/hero/shiv?ability=killing-blow]]((Killing Blow))

- Killing Blow Rage per spirit damage increased from 0.013 to 0.014
- Killing Blow cast range increased from 14m to 15m
==
=
=hero:vindicta:
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))

==ability:crow-familiar:
[[/hero/vindicta?ability=crow-familiar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp]] Crow Familiar change history))
### [[/hero/vindicta?ability=crow-familiar]]((Crow Familiar))

- Crow Familiar changed from 0.2s cast delay to 0.2s post cast time
- Crow Familiar now also reduces spirit resistance by 6%
- Crow Familiar T3 changed from "+3% Bleed and -40% Anti Heal" to -12% Spirit and Bullet Resistance
==
==ability:stake:
[[/hero/vindicta?ability=stake]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp]] Stake change history))
### [[/hero/vindicta?ability=stake]]((Stake))

- Stake radius increased from 8m to 9m
- Stake now sucks enemies 3m towards the center (and limits movement to 6m from center)
- Stake T1 changed from +0.5s to -40% Fire Rate
- Stake T3 changed from Disarm to +0.75s
==
==ability:assassinate:
[[/hero/vindicta?ability=assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/hero/vindicta?ability=assassinate]]((Assassinate))

- Assassinate min charge up increased from 25% to 50%
- Assassinate bonus damage on low hp base damage reduced from 135 to 120

- Fixed Assassinate being stuck if you zoom in and get silenced
==
=
=hero:viscous:
[[/hero/viscous]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous patch history))
## [[/hero/viscous]]((Viscous))

==ability:the-cube:
[[/hero/viscous?ability=the-cube]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp]] The Cube change history))
### [[/hero/viscous?ability=the-cube]]((The Cube))

- The Cube regen reduced from 40 to 35
- The Cube T2 regen reduced from +35 to +30

- The Cube regen spirit power scaling reduced from 0.2 to 0.18
==
==ability:puddle-punch:
[[/hero/viscous?ability=puddle-punch]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp]] Puddle Punch change history))
### [[/hero/viscous?ability=puddle-punch]]((Puddle Punch))

- Puddle Punch can now be parried (does not stun Viscous, only blocks the puddle effect for the parrying player)
==
=
=hero:warden:
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))

==ability:last-stand:
[[/hero/warden?ability=last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/hero/warden?ability=last-stand]]((Last Stand))

- Last Stand non-hero lifesteal reduced from 50% to 20%
- Last Stand hero lifesteal reduced from 100% to 80%
==

- Fire Rate spirit scaling reduced from 0.3 to 0.25

==ability:alchemical-flask:
[[/hero/warden?ability=alchemical-flask]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp]] Alchemical Flask change history))
### [[/hero/warden?ability=alchemical-flask]]((Alchemical Flask))

- Alchemical Flask now respects LOS
==
==ability:last-stand:
[[/hero/warden?ability=last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/hero/warden?ability=last-stand]]((Last Stand))

- Last Stand cooldown increased from 138s to 140s

- Last Stand resistance during channel increased from 50% to 60%
==
=
=hero:wraith:
[[/hero/wraith]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp]] Wraith patch history))
## [[/hero/wraith]]((Wraith))

==ability:full-auto:
[[/hero/wraith?ability=full-auto]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp]] Full Auto change history))
### [[/hero/wraith?ability=full-auto]]((Full Auto))

- Full Auto T3 lifesteal reduced from 35% to 30%
- Full Auto T2 no longer has spirit scaling (moved to T3)
- Full Auto T3 now also adds spirit scaling
==
==ability:telekinesis:
[[/hero/wraith?ability=telekinesis]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp]] Telekinesis change history))
### [[/hero/wraith?ability=telekinesis]]((Telekinesis))

- Telekinesis now causes the target to oscillate up and down a little bit
==
=
=hero:yamato:
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))

==ability:power-slash:
[[/hero/yamato?ability=power-slash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp]] Power Slash change history))
### [[/hero/yamato?ability=power-slash]]((Power Slash))

- Improved cases where Power Slash would hit enemies behind cover
==
==ability:shadow-transformation:
[[/hero/yamato?ability=shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/hero/yamato?ability=shadow-transformation]]((Shadow Transformation))

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
[[/item/active-reload]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp]] Active Reload patch history))
## [[/item/active-reload]]((Active Reload))

- Bullet Lifesteal reduced from 20% to 18%
=
=item:alchemical-fire:
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
[[/item/berserker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker patch history))
## [[/item/berserker]]((Berserker))

- Weapon Damage per stack increased from 5% to 6%
=
=item:bullet-lifesteal:
[[/item/bullet-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp]] Bullet Lifesteal patch history))
## [[/item/bullet-lifesteal]]((Bullet Lifesteal))

- Lifesteal reduced from 28% to 26%
=
=item:debuff-reducer:
[[/item/debuff-reducer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.webp]] Debuff Reducer patch history))
## [[/item/debuff-reducer]]((Debuff Reducer))

- Debuff Resist reduced from 30% to 28%
- Weapon Damage increased from 6% to 8%
=
=item:decay:
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
[[/item/diviners-kevlar]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.webp]] Diviner's Kevlar patch history))
## [[/item/diviners-kevlar]]((Diviner's Kevlar))

- No longer grants +20% Spirit Lifesteal
- Now grants +7% Ability Duration
=
=item:echo-shard:
[[/item/echo-shard]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp]] Echo Shard patch history))
## [[/item/echo-shard]]((Echo Shard))

- Cast delay reduced from 0.3s to 0.25s
=
=item:ethereal-shift:
[[/item/ethereal-shift]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp]] Ethereal Shift patch history))
## [[/item/ethereal-shift]]((Ethereal Shift))

- Post Shift now also grants +20 Spirit Power
=
=item:glass-cannon:
[[/item/glass-cannon]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.webp]] Glass Cannon patch history))
## [[/item/glass-cannon]]((Glass Cannon))

- Now requires Slowing Bullets and grants the slow passive
=
=item:headhunter:
[[/item/headhunter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp]] Headhunter patch history))
## [[/item/headhunter]]((Headhunter))

- Heal per Headshot reduced from 8% to 7%
- Head Shot Bonus Damage reduced from +140 to +130
=
=item:healbane:
[[/item/healbane]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp]] Healbane patch history))
## [[/item/healbane]]((Healbane))

- Healing Reduction reduced from 45% to 40%
- Duration increased from 6s to 7s
=
=item:healing-nova:
[[/item/healing-nova]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.webp]] Healing Nova patch history))
## [[/item/healing-nova]]((Healing Nova))

- No longer has +6% Ability Range
=
=item:heroic-aura:
[[/item/heroic-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp]] Heroic Aura patch history))
## [[/item/heroic-aura]]((Heroic Aura))

- Bullet Lifesteal reduced from 20% to 18%
- Cooldown reduced from 25s to 20s
=
=item:hunter-s-aura:
[[/item/hunters-aura]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp]] Hunter's Aura patch history))
## [[/item/hunters-aura]]((Hunter's Aura))

- Fire Rate slow reduced from 10% to 9%
=
=item:improved-spirit:
[[/item/improved-spirit]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp]] Improved Spirit patch history))
## [[/item/improved-spirit]]((Improved Spirit))

- Health increased from 100 to 125
=
=item:infuser:
[[/item/infuser]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp]] Infuser patch history))
## [[/item/infuser]]((Infuser))

- Cooldown reduced from 37s to 32s
=
=item:knockdown:
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))

- Cast delay changed from 0.25s to 0.1s, to match other similar actives
- No longer interrupts sliding, to match other similar actives
=
=item:leech:
[[/item/leech]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp]] Leech patch history))
## [[/item/leech]]((Leech))

- Bullet Lifesteal reduced from 35% to 32%
- Spirit Lifesteal reduced from 35% to 32%
=
=item:lifestrike:
[[/item/lifestrike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp]] Lifestrike patch history))
## [[/item/lifestrike]]((Lifestrike))

- Lifesteal reduced from 65% to 55%
=
=item:lucky-shot:
[[/item/lucky-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp]] Lucky Shot patch history))
## [[/item/lucky-shot]]((Lucky Shot))

- Damage multiplier increased from 90% to 110%
- Now grants +150 Bullet Shield
=
=item:majestic-leap:
[[/item/majestic-leap]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap patch history))
## [[/item/majestic-leap]]((Majestic Leap))

- Now grants +6% Spirit Resist
=
=item:melee-lifesteal:
[[/item/melee-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp]] Melee Lifesteal patch history))
## [[/item/melee-lifesteal]]((Melee Lifesteal))

- Lifesteal reduced from 20% to 18%
- Now grants +3% Bullet Resist
=
=item:metal-skin:
[[/item/metal-skin]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.webp]] Metal Skin patch history))
## [[/item/metal-skin]]((Metal Skin))

- Active now reduces your Move Speed by 1.5
=
=item:monster-rounds:
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
[[/item/mystic-slow]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp]] Mystic Slow patch history))
## [[/item/mystic-slow]]((Mystic Slow))

- Now grants +1 Sprint
- Health increased from 140 to 160
=
=item:phantom-strike:
[[/item/phantom-strike]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp]] Phantom Strike patch history))
## [[/item/phantom-strike]]((Phantom Strike))

- Cast range now ignores the Z height (similar to Lash's Death Slam)
=
=item:rapid-recharge:
[[/item/rapid-recharge]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp]] Rapid Recharge patch history))
## [[/item/rapid-recharge]]((Rapid Recharge))

- Time between charges reduced from 65% to 60%
=
=item:rapid-rounds:
[[/item/rapid-rounds]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp]] Rapid Rounds patch history))
## [[/item/rapid-rounds]]((Rapid Rounds))

- Fire Rate increased from 10% to 11%
=
=item:reactive-barrier:
[[/item/reactive-barrier]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier patch history))
## [[/item/reactive-barrier]]((Reactive Barrier))

- Bullet Shield health reduced from 400 to 350
=
=item:refresher:
[[/item/refresher]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp]] Refresher patch history))
## [[/item/refresher]]((Refresher))

- Cooldown increased from 230s to 260s
=
=item:rescue-beam:
[[/item/rescue-beam]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.webp]] Rescue Beam patch history))
## [[/item/rescue-beam]]((Rescue Beam))

- Heal reduced from 26% to 24%
- Now grants +6% Ability Range
- Cooldown increased from 26s to 36s
- Pull speed reduced by 15%
=
=item:restorative-locket:
[[/item/restorative-locket]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp]] Restorative Locket patch history))
## [[/item/restorative-locket]]((Restorative Locket))

- Regen per stack reduced from 35 to 32
=
=item:return-fire:
[[/item/return-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp]] Return Fire patch history))
## [[/item/return-fire]]((Return Fire))

- Now requires Extra Regen
=
=item:silencer:
[[/item/silencer]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp]] Silencer patch history))
## [[/item/silencer]]((Silencer))

- Reworked item. Passively builds up on enemies, silencing for 2s and then reducing spirit damage output by 40% for 4s. Enemies affected cannot be affected again for 12s. Grants +20% Weapon Damage, +15% Spirit Resist and 20% Debuff Reduction. (Buildup is a bit slower than Toxic Bullets)
=
=item:slowing-hex:
[[/item/slowing-hex]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp]] Slowing Hex patch history))
## [[/item/slowing-hex]]((Slowing Hex))

- No longer interrupts sliding, to match other similar actives
=
=item:spirit-lifesteal:
[[/item/spirit-lifesteal]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp]] Spirit Lifesteal patch history))
## [[/item/spirit-lifesteal]]((Spirit Lifesteal))

- Lifesteal reduced from 23% to 22%
=
=item:torment-pulse:
[[/item/torment-pulse]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp]] Torment Pulse patch history))
## [[/item/torment-pulse]]((Torment Pulse))

- Now grants +15% Melee Resistance
=
=item:toxic-bullets:
[[/item/toxic-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp]] Toxic Bullets patch history))
## [[/item/toxic-bullets]]((Toxic Bullets))

- Healing Reduction reduced from 65% to 50%
=
=item:vampiric-burst:
[[/item/vampiric-burst]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp]] Vampiric Burst patch history))
## [[/item/vampiric-burst]]((Vampiric Burst))

- Bullet Lifesteal reduced from 100% to 80%
=