# @deadlog/scraper

Scrapes patch notes into `app/changelogs/*.mg`, snapshots the Deadlock asset API into
`app/changelogs/entities.json`, and builds `app/static/deadlog.db` from both.

## Entity snapshot

`loadEntitySnapshot` resolves the newest version from `/v1/assets/client-versions`, then
fetches `/v1/assets/heroes` and `/v1/assets/items` with that one `client_version` and
`language=english`, so the two halves always describe the same build. Both must parse
before anything is replaced; on any failure the committed pair is used whole. The file's
envelope records `schemaVersion`, `clientVersion`, `language` and `collectedAt` beside
the arrays. A file without them is a legacy snapshot: it still builds, and nothing
derived from it claims a client version. The file is rewritten (through a temporary
file and a rename) only when the version, language or arrays change, never for a newer
`collectedAt` alone.

Items are projected on the way in (`src/types/deadlockApi.ts`): unknown keys are
stripped, inline SVG is dropped from description markup, and only the properties the
asset's own tooltip structure references are kept. `src/entityContext.ts` turns that
into the plain-text `EntityContext` stored in `hero_abilities.context` and
`items.context` at database build. The arrays keep API
response order verbatim: item slug ownership is decided by that order, so nothing may
sort or re-key them.

## Asset API findings (measured 2026-09-21)

Phase 0 of `docs/superpowers/plans/2026-09-21-api-reading-enrichment-plan.md`, from
`tsx scripts/probe-enrichment-api.ts --check assets --out <dir> --asset-version 6698
--second-version 6462`. A reduced, verbatim sample is committed as
`src/fixtures/enrichment/assets-6698.json` with its source URLs;
`src/enrichmentContract.test.ts` pins what it shows. Counts below cover the 152
signature abilities of the 38 selectable, enabled heroes and the 173 shopable upgrades.

**Versions.** `/v1/assets/client-versions` listed 814 ascending integers, 5044 → 6698.
`heroes?client_version=6698&language=english` and `items?…` returned 57 heroes and 726
items (389 ability, 251 upgrade, 86 weapon). A repeated pinned `items` request was
byte-identical. Version 6462 returned 733 items: 354 shared class names with a different
payload, 117 with a different description, 10 only in 6462, 3 only in 6698. Spirit
Lasso's cooldown is 115 there and 130 in 6698. Pinning selects distinct assets; nothing
in the API dates a version.

**Joins.** Every `signature1`–`4` slot of every hero resolves to an item `class_name`,
except the unreleased hero Fathom. `items/by-hero-id/1` returned Infernus's four
signature abilities plus `ability_melee_inferno`, and none of the weapon, movement or
innate slots. 19 of 57 heroes are disabled, unselectable or in development, and their
abilities mostly have no `desc` (55 signature abilities across all 57 heroes, against 5
among live ones), so filter heroes the way the build already does before judging
coverage.

**Descriptions.** Useful text is spread over several fields, none duplicated:

| Field                             | Abilities (152) | Shop items (173) |
| --------------------------------- | --------------- | ---------------- |
| `desc`                            | 147             | 141              |
| `quip`                            | 103             | —                |
| `t1_desc` / `t2_desc` / `t3_desc` | 63 / 107 / 139  | —                |
| `active` / `passive`              | 3 / 3           | 10 / 5           |

Five live abilities (Killing Blow, Rake, Bloodscent, Borrowed Decree, Boot Kick) have
no `desc`. The 32 shop items without one are pure stat items such as Extended Magazine,
whose only reading context is their properties. `desc2` did not occur.

The text is game-UI markup, not HTML to pass through:

- Inline `<svg>…</svg>` icons of 2–3 KB each in 78 ability and 38 item `desc` fields,
  always directly before a `<span class="inline-attribute-label …">` that carries the
  words. 36 `<img class="inline-attribute …" alt="slow"/>` icons and 12 Valve
  `<Panel class="AbilityPropertyIcon …">` tags, which are never closed.
- `<span>` with 38 distinct classes across all items (`highlight`, `highlight_spirit`, `diminish`,
  `inline-attribute-label SpiritDamage`, …) and `<br>` for paragraphs.
- 21 fields have unbalanced `<span>` tags in both directions: Paradoxical Swap opens one
  and never closes it, Soul Exchange `t3_desc` closes three and opens one, Sand Blast
  `t1_desc` opens two. One `<spawn` typo.
- One entity (`&amp;`, Riposte `t3_desc`). No `{…}` or `#Token` localization tokens in
  any description; the `#` hits are hex colours inside the SVGs.

**Normalization rule.** Reduce to plain text and never emit the source markup: drop
`<svg>` elements whole, drop every other tag but keep its text, turn `<br>` runs into
paragraph breaks, decode entities, collapse whitespace. Tag balance cannot be relied on,
so this must be a tokenizing strip, not a DOM parse that repairs nesting. Examples:

| Source                                                                                                     | Normalized                                                               |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `dealing <svg…>…</svg>\n<span class="inline-attribute-label SpiritDPS">spirit damage over time</span>.`    | `dealing spirit damage over time.`                                       |
| `Fire a projectile that <span class="highlight">swaps your position with the target enemy hero.`           | `Fire a projectile that swaps your position with the target enemy hero.` |
| `<span class="highlight">+50 Damage and <span class="highlight">+5m Range`                                 | `+50 Damage and +5m Range`                                               |
| `Bullet, Spirit &amp; Melee Lifesteal`                                                                     | `Bullet, Spirit & Melee Lifesteal`                                       |
| `small and <Panel class="AbilityPropertyIcon prop_move_speed"> <span class="highlight">move faster</span>` | `small and move faster`                                                  |

**Properties.** Each asset carries about 20–25 properties, most of them engine defaults (`'0'`,
`'-1'`) that the game never shows. The tooltip structures say which are shown:
`tooltip_sections[].section_attributes[].{properties, important_properties,
elevated_properties}` on upgrades, and
`tooltip_details.info_sections[].{basic_properties, properties_block[].properties[].
{important_property, status_effect_value}}` plus `additional_header_properties` on
abilities. That selects 789 of 4,005 ability properties and 875 of 3,233 item
properties.

- Shown keys that resolve to no property: `StatusEffect*` names (38 + 11; they name a
  status, not a value), one blank key (Rabbit Hex), and four real danglers (Aura of
  Suffering `MinRadius`/`MaxRadius`, Rebuttal `ParrySuccessHeal`, Weakening Headshot
  `HeadshotBonusDamage`). `important_properties_with_icon` holds objects, not keys.
- `value` is a number (138 shown), a numeric string (1,333), or a numeric string with
  its unit already attached (189: `20m`, and, among labelled properties, four `m` values whose postfix is `m/s`).
  Three are missing and one is an empty string. Leading-dot strings (`.75`) occur among
  unshown properties.
- `postfix` is free text (`s`, `m`, `%`, ` m`, `%/sec`, ` HP/s`, `º`, `°`, ` per stack`,
  `% of Max Health`, empty). `prefix` is absent, empty, `+`, `-`, or the unresolved token
  `{s:sign}` (1,251 labelled properties). `display_units` is present on about a tenth.
- 9 shown properties have no `label`.
- A value is the base: `scale_function` marks scaling with spirit, range or cooldown
  stats, and an ability's `upgrades[].property_upgrades` add the tier bonuses
  (`bonus` is itself a number or a string).

**Formatting rule / allowlist.** A property may be displayed only if its key is
referenced by the asset's own tooltip structure, it resolves, it has a non-empty
`label`, and its `value` matches `^-?\d*\.?\d+(m|s)?$` with a non-zero number. Render
`label`, then sign, number, unit: the unit is the trimmed `postfix`, or the value's own suffix
when the postfix does not begin with it (`2m` with postfix `m/s` is `2 m/s`); `{s:sign}` becomes `+` for a positive number and
nothing for a negative one; a literal `+`/`-` prefix is kept. Present it as the base
value. Anything else is omitted rather than repaired. If that proves too loose in Phase
2, descriptions ship without properties.

**Tolerant schema.** No field was `null` in version 6698; optional fields are absent
instead. Missing on live abilities: `update_time` (21), `behaviours` (7), `videos` (45),
`dependent_abilities` (132). Missing on shop items: `image` and `image_webp` (15, all
with `shop_image` and `shop_image_webp`, which `itemImage` already prefers),
`component_items` (111), `disabled` (152), `update_time` (114), `imbue` (162). Every
description field, `properties`, `tooltip_sections` and `tooltip_details` must be
optional and nullable, and a failure in one of them must not reject the asset.
