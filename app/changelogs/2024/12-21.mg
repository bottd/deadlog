``meta:
title "12-21-2024 Update"
thread_id "52206"
published "2024-12-21T01:54:51-0800"
author "Yoshi"
author_image "https://project8-data.community.forum/avatars/m/0/1.jpg?1713628630"
category "patch"
major_update #false
status "draft"
content_text "Fixed some cases where slows could cause your speed to fall below the 2 m/s minimum Fixed slow percentage calculations being based off of assuming min speed is 0 rather than 2 (in effect this reduces how strong slows are) T4 items cost reduced from 6.2k to 6k Shield duration to not take damage before regenerating increased from 18s to 30s Fixed Ethereal Shift not canceling abilities like Flight Fixed various bugs with Arcane Surge Tick gold increased from 2/1% to 2.5/1.5% Spellslinger Headshots: Cooldown is now on a per target basis rather than on the item itself (this is a buff/flexibility improvement) Spellslinger Headshots: Spirit Amp per headshot increased from 3% to 4% Spellslinger Headshots: Fixed the base Spirit Amp requiring a headshot (this fix was released recently) Infernus Flame Dash T3 changed Charge Time increased from 15s to 18s Mirage Fire Scarabs T2 reduced from -10% Bullet Resist to -8% Vindicta Assassinate base damage reduced from 120 to 100 Assassinate bonus damage reduced from 120 to 100 Warden Bullet damage growth reduced from 0.94 to 0.9 Last Stand now does 40% less damage to objectives (similar to various other abilities) Yamato Shadow Transformation Bullet and Spirit Resist reduced from 45% to 40% Shadow Transformation T3 increased from 15% to 20% Resist Restorative Shot Cooldown increased from 6s to 7s Knockdown Stun duration reduced form 0.75s to 0.5s for ground targets (airborne values adjusted to be similar to before) Veil Walker Now a T4 item Shields increased from 250 to 300 Invisibility and speed duration increased from 5s to 7s Initial fade out time reduced from 1s to the previous 0.25s value Alchemical Fire Base DPS reduced from 55 to 50"
``

# General Changes

- Fixed some cases where slows could cause your speed to fall below the 2 m/s minimum
- Fixed slow percentage calculations being based off of assuming min speed is 0 rather than 2 (in effect this reduces how strong slows are)
- T4 items cost reduced from 6.2k to 6k
- Shield duration to not take damage before regenerating increased from 18s to 30s
- Fixed Ethereal Shift not canceling abilities like Flight
- Fixed various bugs with Arcane Surge
- Tick gold increased from 2/1% to 2.5/1.5%
- Spellslinger Headshots: Cooldown is now on a per target basis rather than on the item itself (this is a buff/flexibility improvement)
- Spellslinger Headshots: Spirit Amp per headshot increased from 3% to 4%
- Spellslinger Headshots: Fixed the base Spirit Amp requiring a headshot (this fix was released recently)

# Hero Changes

``embed:svelte:
<SectionPreview type="hero" names={["Infernus", "Mirage", "Vindicta", "Warden", "Yamato"]} />
``

=hero:infernus:
[[/hero/infernus]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp]] Infernus patch history))
## [[/hero/infernus]]((Infernus))

==ability:flame-dash:
[[/hero/infernus?ability=flame-dash]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp]] Flame Dash change history))
### [[/hero/infernus?ability=flame-dash]]((Flame Dash))

- Flame Dash T3 changed Charge Time increased from 15s to 18s
==
=
=hero:mirage:
[[/hero/mirage]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp]] Mirage patch history))
## [[/hero/mirage]]((Mirage))

==ability:fire-scarabs:
[[/hero/mirage?ability=fire-scarabs]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp]] Fire Scarabs change history))
### [[/hero/mirage?ability=fire-scarabs]]((Fire Scarabs))

- Fire Scarabs T2 reduced from -10% Bullet Resist to -8%
==
=
=hero:vindicta:
[[/hero/vindicta]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp]] Vindicta patch history))
## [[/hero/vindicta]]((Vindicta))

==ability:assassinate:
[[/hero/vindicta?ability=assassinate]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp]] Assassinate change history))
### [[/hero/vindicta?ability=assassinate]]((Assassinate))

- Assassinate base damage reduced from 120 to 100
- Assassinate bonus damage reduced from 120 to 100
==
=
=hero:warden:
[[/hero/warden]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp]] Warden patch history))
## [[/hero/warden]]((Warden))

- Bullet damage growth reduced from 0.94 to 0.9

==ability:last-stand:
[[/hero/warden?ability=last-stand]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp]] Last Stand change history))
### [[/hero/warden?ability=last-stand]]((Last Stand))

- Last Stand now does 40% less damage to objectives (similar to various other abilities)
==
=
=hero:yamato:
[[/hero/yamato]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp]] Yamato patch history))
## [[/hero/yamato]]((Yamato))

==ability:shadow-transformation:
[[/hero/yamato?ability=shadow-transformation]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp]] Shadow Transformation change history))
### [[/hero/yamato?ability=shadow-transformation]]((Shadow Transformation))

- Shadow Transformation Bullet and Spirit Resist reduced from 45% to 40%
- Shadow Transformation T3 increased from 15% to 20% Resist
==
=
# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Alchemical Fire", "Knockdown", "Restorative Shot", "Veil Walker"]} />
``

=item:alchemical-fire:
[[/item/alchemical-fire]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.webp]] Alchemical Fire patch history))
## [[/item/alchemical-fire]]((Alchemical Fire))

- Base DPS reduced from 55 to 50
=
=item:knockdown:
[[/item/knockdown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.webp]] Knockdown patch history))
## [[/item/knockdown]]((Knockdown))

- Stun duration reduced form 0.75s to 0.5s for ground targets (airborne values adjusted to be similar to before)
=
=item:restorative-shot:
[[/item/restorative-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp]] Restorative Shot patch history))
## [[/item/restorative-shot]]((Restorative Shot))

- Cooldown increased from 6s to 7s
=
=item:veil-walker:
[[/item/veil-walker]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp]] Veil Walker patch history))
## [[/item/veil-walker]]((Veil Walker))

- Now a T4 item
- Shields increased from 250 to 300
- Invisibility and speed duration increased from 5s to 7s
- Initial fade out time reduced from 1s to the previous 0.25s value
=