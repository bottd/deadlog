``attr:
title "05-21-2025 Update"
thread_id "65674"
published "2025-05-21T15:55:33-0700"
author "Yoshi"
author_image "/assets/authors/yoshi.webp"
major_update #false
content_text "Troopers will now only flinch from player damage if it is a headshot while the trooper is busy running. Trooper resistance near base reduced from 50% to 40% Fixed Breakable souls being counted as secured souls rather than unsecured souls (this fix was released yesterday) Added Breakable souls to the post game Souls by Source graph (was previously bundled in with Urn) Melee damage growth per boon reduced by 5% Cultists Sacrifice: Bonus health reduced from 275 to 250 Cultists Sacrifice: Bonus duration reduced from 170s to 160s Added statues in front of Mid Lane entrances for cover. Moved Shrines away from the back walls a bit. Extended shrine low ground closer to the throne. Redesigned cover in front of the throne. Removed a tree in front of the Mid Lane entrance. Tweaked trooper nodes to go around new statues. Removed a misplaced Curiosity Shop sign. Express Shot Weapon Damage increased from 125% to 150% Now does reduced damage for non-primary gun damage (alt fires, carbine), 150% to 75% Headshot Booster Health reduced from 65 to 40 Headhunter Heal reduced from 6% to 4% Heal now scales with spirit power (0.014) Bonus damage reduced from 120 to 100 Bonus damage now scales with spirit power (0.3) Spirit Rend Fixed being able to get 2 stacks without using the cooldown Frenzy Active Spirit Resistance reduced from 40% to 30% Siphon Bullets Steal per hit reduced from 65 to 55 Spirit Resistance reduced from 12% to 10% Fixed the cooldown not being consumed when blocked by Plated Armor Decay Cast range spirit scaling reduced from 0.13 to 0.1 Damage reduced from 2.5% to 2.4% Damage spirit scaling reduced from 0.00465 to 0.0038 Cooldown increased from 30s to 36s Healing Reduction increased from -35% to -40% Superior Cooldown Cooldown Reduction reduced from 27% to 26%"
``

# General Changes

- Troopers will now only flinch from player damage if it is a headshot while the trooper is busy running.
- Trooper resistance near base reduced from 50% to 40%
- Fixed Breakable souls being counted as secured souls rather than unsecured souls (this fix was released yesterday)
- Added Breakable souls to the post game Souls by Source graph (was previously bundled in with Urn)
- Melee damage growth per boon reduced by 5%
- Cultists Sacrifice: Bonus health reduced from 275 to 250
- Cultists Sacrifice: Bonus duration reduced from 170s to 160s
- Added statues in front of Mid Lane entrances for cover.
- Moved Shrines away from the back walls a bit.
- Extended shrine low ground closer to the throne.
- Redesigned cover in front of the throne.
- Removed a tree in front of the Mid Lane entrance.
- Tweaked trooper nodes to go around new statues.
- Removed a misplaced Curiosity Shop sign.

# Item Changes

``embed:svelte:
<SectionPreview type="item" names={["Decay", "Express Shot", "Frenzy", "Headhunter", "Headshot Booster", "Siphon Bullets", "Spirit Rend", "Superior Cooldown"]} />
``

=item:decay:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0
    after win=0.4716 pick=0.0417 matches=67005 days=5
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4884 pick=0.0507 matches=3028 days=5
  }
}
``
[[/item/decay]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.webp]] Decay patch history))
## [[/item/decay]]((Decay))
- Cast range spirit scaling reduced from 0.13 to 0.1
- Damage reduced from 2.5% to 2.4%
- Damage spirit scaling reduced from 0.00465 to 0.0038
- Cooldown increased from 30s to 36s
- Healing Reduction increased from -35% to -40%
=

=item:express-shot:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0
    after win=0.458 pick=0.0516 matches=82956 days=5
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4683 pick=0.0401 matches=2394 days=5
  }
}
``
[[/item/express-shot]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp]] Express Shot patch history))
## [[/item/express-shot]]((Express Shot))
- Weapon Damage increased from 125% to 150%
- Now does reduced damage for non-primary gun damage (alt fires, carbine), 150% to 75%
=

=item:frenzy:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0
    after win=0.592 pick=0.021 matches=33686 days=5
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=#null pick=#null matches=924 days=5
  }
}
``
[[/item/frenzy]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp]] Frenzy patch history))
## [[/item/frenzy]]((Frenzy))
- Active Spirit Resistance reduced from 40% to 30%
=

=item:headhunter:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0
    after win=0.4856 pick=0.1374 matches=220863 days=5
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4784 pick=0.1194 matches=7128 days=5
  }
}
``
[[/item/headhunter]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp]] Headhunter patch history))
## [[/item/headhunter]]((Headhunter))
- Heal reduced from 6% to 4%
- Heal now scales with spirit power (0.014)
- Bonus damage reduced from 120 to 100
- Bonus damage now scales with spirit power (0.3)
=

=item:headshot-booster:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0
    after win=0.4917 pick=0.2669 matches=429196 days=5
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.4858 pick=0.2831 matches=16897 days=5
  }
}
``
[[/item/headshot-booster]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp]] Headshot Booster patch history))
## [[/item/headshot-booster]]((Headshot Booster))
- Health reduced from 65 to 40
=

=item:siphon-bullets:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0
    after win=0.5656 pick=0.0833 matches=133897 days=5
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5494 pick=0.1392 matches=8306 days=5
  }
}
``
[[/item/siphon-bullets]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp]] Siphon Bullets patch history))
## [[/item/siphon-bullets]]((Siphon Bullets))
- Steal per hit reduced from 65 to 55
- Spirit Resistance reduced from 12% to 10%
- Fixed the cooldown not being consumed when blocked by Plated Armor
=

=item:spirit-rend:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0
    after win=0.5044 pick=0.0564 matches=90611 days=5
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5241 pick=0.0279 matches=1662 days=5
  }
}
``
[[/item/spirit-rend]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.webp]] Spirit Rend patch history))
## [[/item/spirit-rend]]((Spirit Rend))
- Fixed being able to get 2 stacks without using the cooldown
=

=item:superior-cooldown:
``attr:
impact closed=#true {
  all {
    before win=#null pick=#null matches=0 days=0
    after win=0.5145 pick=0.4453 matches=715959 days=5
  }
  high {
    before win=#null pick=#null matches=0 days=0
    after win=0.5193 pick=0.4678 matches=27919 days=5
  }
}
``
[[/item/superior-cooldown]](([[!:https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp]] Superior Cooldown patch history))
## [[/item/superior-cooldown]]((Superior Cooldown))
- Cooldown Reduction reduced from 27% to 26%
=