``meta:
title "10-24-2025 Update"
thread_id "87198"
published "2025-10-24T16:54:51-0700"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
status "draft"
content_text "Getting damaged during the initial launch window (0.6s) after using a Jump Pad will cause you to be stunned (similar to ziplines having an initial knockoff period). When you are stunned, you will lose control and continue towards the landing destination. The stun will wear off 0.2s after landing, and then a 30% slow for 2s will apply. Damage over time does not trigger this (same damage rules as ziplines). Curse: Cooldown reduced from 50s to 45s Calico Gloom Bombs cooldown increased from 10s to 12s Gloom Bombs base damage from 55 to 45 Gloom Bombs spirit scaling reduced from 0.74 to 0.64 Gloom Bombs multi bomb damage ratio increased from 50% to 65% Ava no longer replenishes stamina on usage Doorman Bullet damage growth per boon reduced from 1.15 to 1.0 Outgoing headshot damage multiplier reduced by 25% Call Bell explosion damage spirit scaling increased from 1.5 to 1.7 Drifter Bloodscent isolated kill bonus reduced from 5% to 4% Base bullet damage increased from 20.9 to 21.3 Bullet damage growth increased from 0.52 to 0.56 Dynamo Quantum Entanglement Fire Rate increased from +25% to +30% Rejuvenating Aurora cooldown reduced from 48s to 45s Infernus Bullet damage growth per boon reduced from 0.12 to 0.08 Flame Dash T2 reduced from +35 to +30 Afterburn T1 reduced from -25% Spirit Damage to -20% Afterburn T3 reduced from +28 DPS to +26 Kelvin Base regen reduced from 2 to 1 Headshot reduction reduced from -20% to -25% Frozen Shelter cooldown increased from 150s to 170s McGinnis Medicinal Specter now has a 1s linger time Paradox Base bullet damage reduced from 6.48 to 6.15 Paradoxical Swap cooldown increased from 70s to 75s Seven Lightning Ball spirit scaling increased from 0.43 to 0.55 Shiv Alt fire knockback reduced by 10% Victor Pain Battery T1 and T2 swapped Aura of Suffering max damage reduced from 80 to 70 Aura of Suffering T2 reduced from +10/50 to +8/40 Vyper Screwjab Dagger spirit scaling increased from 0.65/0.33 to 0.8/0.4 Warden Base bullet damage increased from 15 to 16.2 Binding Word range increased from 19m to 20m Mystic Shot Base damage reduced from 55 to 45 Spirit scaling increased from 0.65 to 0.75 Warp Stone Bullet Resist reduced from 40% to 35% Capacitor Fire Rate reduced from 8% to 5% Cooldown increased from 40s to 60s Guardian Ward Cooldown increased from 40s to 45s Reactive Barrier Cooldown increased from 24s to 26s Spirit Shielding Barrier reduced from 325 to 300 Barrier boon scaling increased from 4 to 5 Weapon Shielding Barrier reduced from 325 to 300 Barrier boon scaling increased from 4 to 5 Fortitude Damage taken duration to regen reduced from 14s to 13s Trophy Collector Souls per Minute increased from 25 to 30 Majestic Leap Cooldown increased from 28s to 32s Divine Barrier Cooldown increased from 40s to 45s Rusted Barrel Bonus health increased from 60 to 70 Silence Wave Cooldown increased from 30s to 35s (affects component) Spirit Snatch Duration reduced from 14s to 10s Bonus damage reduced from 75 to 50 Ethereal Shift Cooldown increased from 20s to 45s Movespeed during phase reduced from 4m to 3m Can no longer target an ethereal shifted ally with things like Rescue Beam, Viscous Cube, etc"
``

# General Changes

- Getting damaged during the initial launch window (0.6s) after using a Jump Pad will cause you to be stunned (similar to ziplines having an initial knockoff period). When you are stunned, you will lose control and continue towards the landing destination. The stun will wear off 0.2s after landing, and then a 30% slow for 2s will apply. Damage over time does not trigger this (same damage rules as ziplines).
- Curse: Cooldown reduced from 50s to 45s

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Calico", "Doorman", "Drifter", "Dynamo", "Infernus", "Kelvin", "McGinnis", "Paradox", "Seven", "Shiv", "Victor", "Vyper", "Warden"]} />
``

##hero:calico: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp]] Calico

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp]] Gloom Bombs

- Gloom Bombs cooldown increased from 10s to 12s

- Gloom Bombs base damage from 55 to 45

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp]] Gloom Bombs

- Gloom Bombs spirit scaling reduced from 0.74 to 0.64

- Gloom Bombs multi bomb damage ratio increased from 50% to 65%

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp]] Ava

- Ava no longer replenishes stamina on usage

##hero:doorman: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp]] Doorman

- Bullet damage growth per boon reduced from 1.15 to 1.0
- Outgoing headshot damage multiplier reduced by 25%
- Call Bell explosion damage spirit scaling increased from 1.5 to 1.7

##hero:drifter: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp]] Drifter

- Bloodscent isolated kill bonus reduced from 5% to 4%
- Base bullet damage increased from 20.9 to 21.3
- Bullet damage growth increased from 0.52 to 0.56

##hero:dynamo: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp]] Dynamo

###ability: Quantum Entanglement Fire Rate

- Quantum Entanglement Fire Rate increased from +25% to +30%

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp]] Rejuvenating Aurora

- Rejuvenating Aurora cooldown reduced from 48s to 45s

##hero:infernus: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus

- Bullet damage growth per boon reduced from 0.12 to 0.08

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash

- Flame Dash T2 reduced from +35 to +30

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp]] Afterburn

- Afterburn T1 reduced from -25% Spirit Damage to -20%
- Afterburn T3 reduced from +28 DPS to +26

##hero:kelvin: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]] Kelvin

- Base regen reduced from 2 to 1
- Headshot reduction reduced from -20% to -25%

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp]] Frozen Shelter

- Frozen Shelter cooldown increased from 150s to 170s

##hero:mcginnis: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]] McGinnis

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp]] Medicinal Specter

- Medicinal Specter now has a 1s linger time

##hero:paradox: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]] Paradox

- Base bullet damage reduced from 6.48 to 6.15

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp]] Paradoxical Swap

- Paradoxical Swap cooldown increased from 70s to 75s

##hero:seven: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]] Seven

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp]] Lightning Ball

- Lightning Ball spirit scaling increased from 0.43 to 0.55

##hero:shiv: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv

- Alt fire knockback reduced by 10%

##hero:victor: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp]] Victor

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_pain_battery.webp]] Pain Battery

- Pain Battery T1 and T2 swapped

- Aura of Suffering max damage reduced from 80 to 70
- Aura of Suffering T2 reduced from +10/50 to +8/40

##hero:vyper: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp]] Vyper

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp]] Screwjab Dagger

- Screwjab Dagger spirit scaling increased from 0.65/0.33 to 0.8/0.4

##hero:warden: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden

- Base bullet damage increased from 15 to 16.2

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp]] Binding Word

- Binding Word range increased from 19m to 20m

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Capacitor", "Divine Barrier", "Ethereal Shift", "Fortitude", "Guardian Ward", "Majestic Leap", "Mystic Shot", "Reactive Barrier", "Rusted Barrel", "Silence Wave", "Spirit Shielding", "Spirit Snatch", "Trophy Collector", "Warp Stone", "Weapon Shielding"]} />
``

##item:capacitor: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp]] Capacitor

- Fire Rate reduced from 8% to 5%
- Cooldown increased from 40s to 60s

##item:divine-barrier: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp]] Divine Barrier

- Cooldown increased from 40s to 45s

##item:ethereal-shift: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.webp]] Ethereal Shift

- Cooldown increased from 20s to 45s
- Movespeed during phase reduced from 4m to 3m
- Can no longer target an ethereal shifted ally with things like Rescue Beam, Viscous Cube, etc

##item:fortitude: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp]] Fortitude

- Damage taken duration to regen reduced from 14s to 13s

##item:guardian-ward: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp]] Guardian Ward

- Cooldown increased from 40s to 45s

##item:majestic-leap: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]] Majestic Leap

- Cooldown increased from 28s to 32s

##item:mystic-shot: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp]] Mystic Shot

- Base damage reduced from 55 to 45
- Spirit scaling increased from 0.65 to 0.75

##item:reactive-barrier: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier

- Cooldown increased from 24s to 26s

##item:rusted-barrel: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.webp]] Rusted Barrel

- Bonus health increased from 60 to 70

##item:silence-wave: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.webp]] Silence Wave

- Cooldown increased from 30s to 35s (affects component)

##item:spirit-shielding: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp]] Spirit Shielding

- Barrier reduced from 325 to 300
- Barrier boon scaling increased from 4 to 5

##item:spirit-snatch: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp]] Spirit Snatch

- Duration reduced from 14s to 10s
- Bonus damage reduced from 75 to 50

##item:trophy-collector: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp]] Trophy Collector

- Souls per Minute increased from 25 to 30

##item:warp-stone: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.webp]] Warp Stone

- Bullet Resist reduced from 40% to 35%

##item:weapon-shielding: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.webp]] Weapon Shielding

- Barrier reduced from 325 to 300
- Barrier boon scaling increased from 4 to 5