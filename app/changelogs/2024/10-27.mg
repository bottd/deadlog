``meta:
title "10-27-2024 Update"
thread_id "42492"
published "2024-10-27T18:43:19-0700"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
status "draft"
content_text "Urn NW lead requirement increased from 8% to 10% Shiv Killing Blow cast range increased from 13m to 14m Killing Blow rage per weapon damage increased from 0.015 to 0.017 Killing Blow drain rate reduced from 0.3 to 0.25 Bebop Sticky Bomb stacks no longer decrease on death Sticky Bomb now gives stacks based on dying heroes hurt by Sticky Bomb damage with a 12 second buffer (previously anyone hit by the bomb would automatically grant stacks) Sticky Bomb damage per stack increased from 3% to 5% Sticky Bomb spirit power damage scaling increased from 0.9 to 1.2 Sticky Bomb T1 improved from -7.5s to -8s Sticky Bomb cooldown reduced from 19s to 18s Grey Talon Movespeed spirit scaling reduced from 0.04 to 0.032 Bullet damage spirit scaling reduced from 0.13 to 0.12 Kelvin Ice Path cooldown increased from 38s to 42s McGinnis Mini Turrets Spirit Resist reduced from 80% to 70% Spectral Wall cooldown increased from 37s to 46s Spectral Wall T2 cooldown improved from -14s to -23s Paradox Pulse Grenade T3 reduced from +1m per Pulse to +0.75m Seven Storm Cloud DPS increased from 110 to 120 Yamato Shadow Transformation cooldown reduced from 90s to 85s Majestic Leap Cooldown reduced from 45s to 40s"
``

# General Changes

- Urn NW lead requirement increased from 8% to 10%

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Bebop", "Grey Talon", "Kelvin", "McGinnis", "Paradox", "Seven", "Shiv", "Yamato"]} />
``

=hero:bebop:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp]]
## Bebop

- Sticky Bomb stacks no longer decrease on death

==ability:sticky-bomb:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp]]
### Sticky Bomb

- Sticky Bomb now gives stacks based on dying heroes hurt by Sticky Bomb damage with a 12 second buffer (previously anyone hit by the bomb would automatically grant stacks)
- Sticky Bomb damage per stack increased from 3% to 5%
- Sticky Bomb spirit power damage scaling increased from 0.9 to 1.2
- Sticky Bomb T1 improved from -7.5s to -8s
- Sticky Bomb cooldown reduced from 19s to 18s
==
=
=hero:grey-talon:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp]]
## Grey Talon

- Movespeed spirit scaling reduced from 0.04 to 0.032
- Bullet damage spirit scaling reduced from 0.13 to 0.12
=
=hero:kelvin:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp]]
## Kelvin

==ability:ice-path:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp]]
### Ice Path

- Ice Path cooldown increased from 38s to 42s
==
=
=hero:mcginnis:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp]]
## McGinnis

==ability:mini-turrets-spirit-resist:
### Mini Turrets Spirit Resist

- Mini Turrets Spirit Resist reduced from 80% to 70%
==
==ability:spectral-wall:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp]]
### Spectral Wall

- Spectral Wall cooldown increased from 37s to 46s
- Spectral Wall T2 cooldown improved from -14s to -23s
==
=
=hero:paradox:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp]]
## Paradox

==ability:pulse-grenade:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp]]
### Pulse Grenade

- Pulse Grenade T3 reduced from +1m per Pulse to +0.75m
==
=
=hero:seven:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp]]
## Seven

==ability:storm-cloud-dps:
### Storm Cloud DPS

- Storm Cloud DPS increased from 110 to 120
==
=
=hero:shiv:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]]
## Shiv

- Killing Blow cast range increased from 13m to 14m
- Killing Blow rage per weapon damage increased from 0.015 to 0.017
- Killing Blow drain rate reduced from 0.3 to 0.25
=
=hero:yamato:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]]
## Yamato

==ability:shadow-transformation:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]]
### Shadow Transformation

- Shadow Transformation cooldown reduced from 90s to 85s
==
=
# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Majestic Leap"]} />
``

=item:majestic-leap:
[[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.webp]]
## Majestic Leap

- Cooldown reduced from 45s to 40s
=