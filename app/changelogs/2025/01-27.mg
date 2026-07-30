``meta:
title "01-27-2025 Update"
thread_id "54590"
published "2025-01-27T18:10:06-0800"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
status "draft"
content_text "All objectives now take 50% less damage from Spirit Damage (abilities no longer have one off values for this) Shrines are no longer vulnerable to Spirit Damage when out of range (rather than only immune to bullet damage) Can no longer stand on top of Walkers Spellslinger Headshots: Amp per headshot increased from 4% to 6% Spellslinger Headshots: Max Stacks reduced from 12 to 10 Abrams Infernal Resilience increased from 11% to 12% Bebop Uppercut air control lockout period reduced from 0.5s to 0.3s Dynamo Kinetic Pulse damage spirit scaling increased from 1.4 to 1.8 Kinetic Pulse T3 now also adds +1 Charge Calico Gloom Bombs now has updated impact SFX Gloom Bombs now has an arming effect for when they are about to detonate Leaping Slash only heals when hitting heroes Leaping Slash fixed VFX to match the damage area more accurately Leaping Slash updated to break breakables in the area Leaping Slash fixed a bug where calico's slash would deal no damage near walls Ava duration reduced from 20s to 15s Ava cooldown reduced from 50s to 45s Ava now gets slowed by 30% for 1s anytime she takes damage Ava speed reduced from 75% to 65% Ava T2 speed increased from +35% to +45% Ava now can now meow with m1 Return to Shadows cooldown increased from 80s to 90s Fixed Leaping Slash doing bonus damage from Melee Charge Grey Talon Spirit Snare cooldown reduced from 37s to 34s Spirit Snare T2 increased from +0.5s to +0.75s Haze Bullet Dance T3 increased from +40% Evasion to +60% Bullet Dance T3 increased from +2 Dance Move Speed to +3 Holliday Powder Keg will no longer arm instantly if the player has the Bounce Pad modifier Powder Keg Charge Time increased from 1s to 2s Powder Keg knock up time reduced by 15% Bounce Pad no will no longer expire after 5 seconds in the air Bounce Pad spirit scaling reduced from 0.9 to 0.4 Bounce Pad will now play a different sound on the player's first bounce when the stomp modifier is active Bounce Pad VFX and lifetime display improved Bounce Pad will now be more responsive for the player when landing and dealing damage Spirit Lasso duration reduced from 2.5s to 2.25s Spirit Lasso duration now lasts 1.5s longer when using Bounce Pad Spirit Lasso Fixed an issue where the lasso animation would get stuck on sometimes Kelvin Arctic Beam now also slows roll distances by 20% Seven Storm Cloud secondary ability delay reduced from 2s to 0.25s Shiv Serrated Knives no longer stops after hitting a Soul Orb Sinclair No longer has -35% Headshot Damage Reduction Vexing Bolt damage mechanics reworked, increases damage as the bolt travels, various values adjusted (150 max damage, 75 min damage, 2s time for max damage, assistant does 50% damage. T3 is now +150 max damage, +50% assistant damage) Vexing Bolt T2 updated to remove base fire rate debuff, add as t2 upgrade, remove spirit shred t2 Vexing Bolt allow for retarget to try to find targets through walls and to bend around corners Rabbit can now use jump Rabbit Hex projectile updated to better track targets that have recently changes models Spectral Assistant update VFX radius & lifetimes to scale off of clone damage Audience Participation cooldown with successful usage reduced from 100% to 50% Audience Participation stolen ultimate duration increased from 10s to 20s Audience Participation VFX updated steal effect to feel snappier Audience Participation fixed a typo in the ability description Vindicta Bullet damage reduced from 11.7 to 11.4 Crow projectile speed reduced from 4750 to 4250 Assassinate T2 reduced from +120 to +110 Viscous Goo Ball turn rate improved by 10% Vyper Bullet damage growth increased from 0.32 to 0.36 Petrifying Bola changed the petrify to no longer be breakable Lethal Venom updated to deal damage through petrify, rather than cleanse the petrify and damage Fixed Lethal Venom T2 anti-heal not working properly Ammo Scavenger Ammo reduced from 15% to 10% Swift Striker Fire Rate reduced from 22% to 20% Alchemical Fire Base damage reduced from 50 to 45 Bullet Lifesteal Lifesteal reduced from 26% to 24% Heroic Aura Lifesteal reduced from 18% to 16% Berserker Damage to gain stack increased from 100 to 120"
``

# General Changes

- All objectives now take 50% less damage from Spirit Damage (abilities no longer have one off values for this)
- Shrines are no longer vulnerable to Spirit Damage when out of range (rather than only immune to bullet damage)
- Can no longer stand on top of Walkers
- Spellslinger Headshots: Amp per headshot increased from 4% to 6%
- Spellslinger Headshots: Max Stacks reduced from 12 to 10

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Abrams", "Bebop", "Calico", "Dynamo", "Grey Talon", "Haze", "Holliday", "Kelvin", "Seven", "Shiv", "Sinclair", "Vindicta", "Viscous", "Vyper"]} />
``

##hero:abrams: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp]] Abrams

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp]] Infernal Resilience

- Infernal Resilience increased from 11% to 12%

##hero:bebop: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]] Bebop

- Uppercut air control lockout period reduced from 0.5s to 0.3s

##hero:calico: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp]] Gloom Bombs

- Gloom Bombs now has updated impact SFX
- Gloom Bombs now has an arming effect for when they are about to detonate

- Leaping Slash only heals when hitting heroes
- Leaping Slash fixed VFX to match the damage area more accurately
- Leaping Slash updated to break breakables in the area
- Leaping Slash fixed a bug where calico's slash would deal no damage near walls

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp]] Ava

- Ava duration reduced from 20s to 15s
- Ava cooldown reduced from 50s to 45s
- Ava now gets slowed by 30% for 1s anytime she takes damage
- Ava speed reduced from 75% to 65%
- Ava T2 speed increased from +35% to +45%
- Ava now can now meow with m1

- Return to Shadows cooldown increased from 80s to 90s
- Fixed Leaping Slash doing bonus damage from Melee Charge

##hero:dynamo: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp]] Kinetic Pulse

- Kinetic Pulse damage spirit scaling increased from 1.4 to 1.8
- Kinetic Pulse T3 now also adds +1 Charge

##hero:grey-talon: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]] Grey Talon

- Spirit Snare cooldown reduced from 37s to 34s
- Spirit Snare T2 increased from +0.5s to +0.75s

##hero:haze: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp]] Haze

- Bullet Dance T3 increased from +40% Evasion to +60%
- Bullet Dance T3 increased from +2 Dance Move Speed to +3

##hero:holliday: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp]] Holliday

- Powder Keg will no longer arm instantly if the player has the Bounce Pad modifier

###ability: Powder Keg Charge Time

- Powder Keg Charge Time increased from 1s to 2s

- Powder Keg knock up time reduced by 15%
- Bounce Pad no will no longer expire after 5 seconds in the air

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp]] Bounce Pad

- Bounce Pad spirit scaling reduced from 0.9 to 0.4

- Bounce Pad will now play a different sound on the player's first bounce when the stomp modifier is active
- Bounce Pad VFX and lifetime display improved
- Bounce Pad will now be more responsive for the player when landing and dealing damage
- Spirit Lasso duration reduced from 2.5s to 2.25s
- Spirit Lasso duration now lasts 1.5s longer when using Bounce Pad
- Spirit Lasso Fixed an issue where the lasso animation would get stuck on sometimes

##hero:kelvin: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp]] Arctic Beam

- Arctic Beam now also slows roll distances by 20%

##hero:seven: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven

- Storm Cloud secondary ability delay reduced from 2s to 0.25s

##hero:shiv: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp]] Serrated Knives

- Serrated Knives no longer stops after hitting a Soul Orb

##hero:sinclair: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp]] Sinclair

- No longer has -35% Headshot Damage Reduction

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp]] Vexing Bolt

- Vexing Bolt damage mechanics reworked, increases damage as the bolt travels, various values adjusted (150 max damage, 75 min damage, 2s time for max damage, assistant does 50% damage. T3 is now +150 max damage, +50% assistant damage)
- Vexing Bolt T2 updated to remove base fire rate debuff, add as t2 upgrade, remove spirit shred t2

- Vexing Bolt allow for retarget to try to find targets through walls and to bend around corners
- Rabbit can now use jump

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp]] Rabbit Hex

- Rabbit Hex projectile updated to better track targets that have recently changes models

- Spectral Assistant update VFX radius & lifetimes to scale off of clone damage

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_copyult.webp]] Audience Participation

- Audience Participation cooldown with successful usage reduced from 100% to 50%

- Audience Participation stolen ultimate duration increased from 10s to 20s
- Audience Participation VFX updated steal effect to feel snappier
- Audience Participation fixed a typo in the ability description

##hero:vindicta: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta

- Bullet damage reduced from 11.7 to 11.4

###ability: Crow

- Crow projectile speed reduced from 4750 to 4250

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate

- Assassinate T2 reduced from +120 to +110

##hero:viscous: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp]] Viscous

- Goo Ball turn rate improved by 10%

##hero:vyper: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp]] Vyper

- Bullet damage growth increased from 0.32 to 0.36

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_petrifybola.webp]] Petrifying Bola

- Petrifying Bola changed the petrify to no longer be breakable

- Lethal Venom updated to deal damage through petrify, rather than cleanse the petrify and damage
- Fixed Lethal Venom T2 anti-heal not working properly

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Alchemical Fire", "Ammo Scavenger", "Berserker", "Bullet Lifesteal", "Heroic Aura", "Swift Striker"]} />
``

##item:alchemical-fire: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire

- Base damage reduced from 50 to 45

##item:ammo-scavenger: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/upgrades/mods_weapon/ammo_scavenger.webp]] Ammo Scavenger

- Ammo reduced from 15% to 10%

##item:berserker: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp]] Berserker

- Damage to gain stack increased from 100 to 120

##item:bullet-lifesteal: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp]] Bullet Lifesteal

- Lifesteal reduced from 26% to 24%

##item:heroic-aura: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp]] Heroic Aura

- Lifesteal reduced from 18% to 16%

##item:swift-striker: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp]] Swift Striker

- Fire Rate reduced from 22% to 20%