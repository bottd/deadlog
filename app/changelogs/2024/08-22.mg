``meta:
title "08-22-2024 Update"
thread_id "19716"
published "2024-08-22T18:55:55-0700"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
status "draft"
content_text "Fixed High-Velocity Mag affecting some abilities Silence Glyph: Damage reduced from 150 to 100 Silence Glyph: Spirit damage scaling reduced from 1.5 to 1.0 Silence Glyph: Cast range reduced from 40m to 25m Silence Glyph: Sprint reduced from 2 to 1 Silence Glyph: Spirit Shield reduced from +225 to +200 Dying with Siphon Bullets stacks will now cause you to lose 2 stacks no matter who killed you (rather than returning 1 only if the victim killed you back) Fixed Siphon Bullets acting as spirit damage for procs Fixed shotgun heroes applying buildup effects like toxic bullets instantly on ricocheted enemies Parrying a Guardian now causes it to stop trying to repeatedly melee (and get parried over and over), and instead causes the boss to start shooting shortly there after Ivy Air Drop now silences the ally being carried until they are released Shiv Bloodletting incoming damage deferred reduced from 40% to 35% Reactive Barrier Cooldown increased from 20s to 30s Return Fire Bullet damage returned reduced form 80% to 70%"
``

# General Changes

- Fixed High-Velocity Mag affecting some abilities
- Silence Glyph: Damage reduced from 150 to 100
- Silence Glyph: Spirit damage scaling reduced from 1.5 to 1.0
- Silence Glyph: Cast range reduced from 40m to 25m
- Silence Glyph: Sprint reduced from 2 to 1
- Silence Glyph: Spirit Shield reduced from +225 to +200
- Dying with Siphon Bullets stacks will now cause you to lose 2 stacks no matter who killed you (rather than returning 1 only if the victim killed you back)
- Fixed Siphon Bullets acting as spirit damage for procs
- Fixed shotgun heroes applying buildup effects like toxic bullets instantly on ricocheted enemies
- Parrying a Guardian now causes it to stop trying to repeatedly melee (and get parried over and over), and instead causes the boss to start shooting shortly there after

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Ivy", "Shiv"]} />
``

##hero:ivy: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp]] Ivy

###ability: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp]] Air Drop

- Air Drop now silences the ally being carried until they are released

##hero:shiv: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp]] Shiv

- Bloodletting incoming damage deferred reduced from 40% to 35%

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Reactive Barrier", "Return Fire"]} />
``

##item:reactive-barrier: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.webp]] Reactive Barrier

- Cooldown increased from 20s to 30s

##item:return-fire: [[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.webp]] Return Fire

- Bullet damage returned reduced form 80% to 70%