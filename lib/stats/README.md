# @deadlog/stats

Measures win and pick rates before and after each patch, per hero and item, and writes
them into the patch's `.mg` file: one `attr` block directly under each `=hero:` /
`=item:` fence. The `.mg` files are the only store. The database build reads the blocks
into the `impact` column of `changelog_heroes` / `changelog_items`, which is also where
this package learns what is already recorded and closed.

Specs: `docs/superpowers/specs/2026-09-19-patch-impact-stats-design.md` (windowing,
metrics, UI) and `2026-09-20-impact-in-mog-design.md` (storage).

## Reader integration

Hero/item histories and full patch pages share `PatchImpact.svelte`. On full patches,
`app/inlineMogStatsPlugin.js` runs the application-owned adapter in
`app/src/lib/build/inlineMogStats.ts`: it validates the Mog attributes, inserts
in-memory Svelte embeds inside reportable hero/item blocks, and re-renders the
template through Mog's public parser before Svelte compilation. Mog's existing
metadata, TOC, CSS imports and original embed imports are retained. The archive
files are not rewritten for presentation, and no raw impact JSON is emitted as DOM
attributes.

The compiled module exports its parsed patch windows and represented entity kinds.
The route passes the windows through `MogContent` context to the inline components
and renders one method note outside entity filtering. Results are prerendered and
native disclosures work without JavaScript. Entirely suppressed results are omitted.

Design: `docs/superpowers/specs/2026-09-21-inline-mog-stats-design.md`.

The adapter also inserts current-details disclosures, verified predecessor links,
and compact related-item navigation. The patch server load reads only the changed
entities' descriptions and property links, projects a trimmed dictionary, and
validates predecessor destinations against Mog's exported TOC. Related-item links
use the recorded purchase counts and actual item anchors, targeting the unfiltered
patch so the section remains reachable. These follow-ups and their verification are
recorded in `docs/superpowers/plans/2026-09-21-inline-mog-reading-phases.md`.

## Usage

Both commands read `app/static/deadlog.db`, so run `pnpm build:db` first, and again
afterwards to pick the new blocks up.

`pnpm run build:stats` refreshes the entities whose window is still open (4 requests)
and rewrites only the files whose text changes. A block with `closed=#true` is never
touched. `pnpm run build:stats --rebuild` recomputes every window from the full history
(about 60 requests, 1–2 minutes) and rewrites closed blocks too; use it after changing
a constant in `src/constants.ts` or after adding an entity to a historical changelog.
A failed fetch leaves every file untouched and exits 0.

Blocks are located by the heading name inside the entity block, the way the extractor
identifies an entity, never by the fence slug: four entities have a fence slug that
differs from their database slug (`=hero:doorman:` is The Doorman). Everything is read
through the Mog parser's AST (`parseMogAst` from `vite-plugin-mog/parser`): the entity
blocks, their `attr` values as typed data, and the source lines to splice at. Only the
writer, `writeImpactNode` in `lib/changelog/src/impactBlock.ts`, spells the format by
hand, and a test round-trips it through the parser. `build:scraper --overwrite` keeps
recorded blocks: `writeMogFile` carries them from the file it replaces.

An `attr` block that is not valid KDL does not parse as attributes at all — the parser
leaves it as a verbatim block, which would render as code on the page. Both builds stop
on it: the extractor throws and names the line, and the site build fails on the
diagnostic the plugin emits.

## API findings (measured 2026-09-19)

All against `https://api.deadlock-api.com/v1/analytics` with `bucket=start_time_day`.

**Buckets** are UTC-midnight unix seconds. `max_unix_timestamp` is coarse: asking for
one day returned the following day's full bucket as well. Filter returned rows to the
requested days locally; never trust the range to be exact.

**`matches_per_bucket` is player slots, not matches.** On `hero-stats` it equals the
sum of every hero's `matches` for that day (515,328 on 2026-09-08, about 43k real
matches × 12). So:

- hero pick rate (share of matches the hero appears in) =
  `matches × 12 / matches_per_bucket`
- `PLAYERS_PER_MATCH = 12` is a constant of this package.

**`item-stats.matches` is player-match rows**, not distinct matches: the top item had
251,758 against roughly 43k matches that day, and `wins + losses = matches`. `players`
is distinct accounts and is not a usable numerator. So:

- item pick rate (share of players who bought it) = `matches / matches_per_bucket`,
  using the hero series' `matches_per_bucket` for the same day and rank tier.
- Item PICK is shown. The two pick rates have different meanings (share of matches vs
  share of players); the UI footnote says so.

**High-rank floor: `HIGH_RANK_MIN_BADGE = 91` (Phantom 1+).** Summed over a 14-day
span (2026-08-25 → 09-08), entities clearing 1000 matches:

| `min_average_badge` | heroes (of 38) | hero median | items (of 156) | item median |
| ------------------- | -------------- | ----------- | -------------- | ----------- |
| 101                 | 29             | 1,272       | 138            | 4,266       |
| 91                  | 38             | 7,157       | 156            | 27,562      |
| 81                  | 38             | 18,514      | 156            | 67,994      |

At 101 a full 14-day window barely clears the floor for the median hero, and most
real windows are shorter than 14 days. At 91 the median hero sees about 500 matches a
day, so a 2–3 day window between hotfixes still reports.

**The high-rank series collapses at rank resets.** At badge 91, hero player slots went
56,760 (2026-07-30) → 12 (07-31) → 168 (08-01) while all-ranks volume rose, and
`item-stats` returned no high-rank rows at all for 07-31. Nobody holds a high badge
right after a reset. Days can therefore be absent from one series and present in
another; `MIN_WINDOW_MATCHES` turns the affected high-rank windows into `null`.

**History keeps growing slightly.** A full rebuild one day after the first changed 1,964
closed windows, every one by a small increase in matches (at most 0.47%; rates moved
by at most 0.0004, no day counts changed). The API ingests late matches for old days.
Freezing closed blocks keeps the committed files stable, so a `--rebuild` diff that
touches hundreds of old blocks by a few matches is this, not a bug. The move from the
JSON snapshot to `.mg` blocks on 2026-09-20 rebuilt everything two days after the first
run: the same 2,131 entries, no day-count or suppression changes, 12 of 8,356 closed
windows beyond +0.5 % matches (small 2024 samples and a high-rank window near a rank
reset, at most +1.2 %), and one patch (2025-09-04) whose item counts fell by about
0.06 % — an upstream correction.

**Range limits.** `hero-stats` serves the whole history in one request (2024-05-18 →
today, 24,682 rows, 12 MB, ~1 s). `item-stats` fails with
`500 Internal server error: Database error.` after ~20 s for 180 and 365 days; 90 days
succeeds in 8–14 s. `MAX_RANGE_DAYS = 60` keeps a margin under that timeout. It applies
to item requests; hero requests use it too for one code path.

**Data horizon.** First bucket is 2024-05-18, but early days are tiny (12–216 player
slots a day through May 2024; 138 days under 20,000). No gaps in the daily series.
`MIN_WINDOW_MATCHES` already suppresses those windows; no separate horizon constant.

**Rate limit and caching.** `ratelimit-limit: 200` per 60 s per IP;
`cache-control: public, max-age=600`. A full run is about 15 chunks × 4 series = 60
sequential requests.

## Enrichment findings (measured 2026-09-21)

Phase 0 of `docs/superpowers/plans/2026-09-21-api-reading-enrichment-plan.md`. Every
number below comes from `scripts/probe-enrichment-api.ts` (deleted since; last in `6d13dc6`), a read-only probe that saved
each response and a `requests.jsonl` (URL, retrieval time, status) to `--out`. Reduced
responses are committed under `src/fixtures/enrichment/`, each with its source URLs and
how it was cut down; `enrichmentContract.test.ts` pins what they show. All requests
were made between 21:02 and 21:20 UTC. `P` below stands for
`tsx scripts/probe-enrichment-api.ts --out <dir>` as it was at that commit.

**The documented defaults are the defaults.** Adding `game_mode=normal` and
`match_mode=ranked,unranked` returned byte-identical `hero-stats` and `item-stats`
responses in all five windows below. `matches_per_bucket` still equals the sum of every
hero's `matches` on each of the 72 days checked, with the modes explicit.

**The default `min_matches=20` is a per-row filter, and it bites where data is thin.**
`item-stats` with `bucket=start_time_day` drops every (item, day) row under 20 matches;
surviving rows are unchanged. `P --check min-matches --from F --to T [--badge 91]`:

| Window (UTC days)       | Rank     | Why chosen               | Rows default → `min_matches=1` | Matches dropped | Largest dropped row |
| ----------------------- | -------- | ------------------------ | ------------------------------ | --------------- | ------------------- |
| 2026-07-29 → 2026-08-04 | badge 91 | rank reset on 07-31      | 766 → 1,018                    | 1,640           | 19                  |
| 2025-01-12 → 2025-01-27 | badge 91 | early-2025 high rank     | 1,792 → 1,792                  | 0               | —                   |
| 2024-08-01 → 2024-08-29 | all      | oldest patch with a rate | 2,500 → 3,059                  | 5,257           | 19                  |
| 2024-08-01 → 2024-08-29 | badge 91 | same                     | 0 → 0                          | 0               | —                   |
| 2024-05-18 → 2024-06-06 | all      | oldest recorded days     | 539 → 1,760                    | 8,555           | 19                  |

On 2026-07-31 the default returned no high-rank item rows at all while `min_matches=1`
returned 86: one high-rank match was played that day (12 player slots). The earlier note
that `item-stats` had "no high-rank rows at all for 07-31" was this filter, not missing
data. No badge-91 rows exist for August 2024 under either setting.

**Effect on what is recorded.** `P --check windows` recomputed every recorded item
window (the 1,385 of 1,516 item-patch links that have any data, × before/after, per tier) through `sliceWindows`, once
from the default series and once from `min_matches=1` (62 requests, all 200):

| Tier     | Windows | Reportable | `matches` differs | Published win or pick differs | Crosses the 1,000 floor |
| -------- | ------- | ---------- | ----------------- | ----------------------------- | ----------------------- |
| all      | 2,770   | 1,808      | 439               | 0                             | 0                       |
| badge 91 | 2,770   | 1,321      | 19                | 2                             | 0                       |

The two rate changes are both the high-rank "after" window of `2025/10-02`: item
3361811174 (win 0.6142 → 0.6166, pick 0.0020 → 0.0022, matches 1,226 → 1,312, days
7 → 14) and item 1798666702 (win 0.6048 → 0.6042, pick 0.0023 → 0.0024, 1,407 → 1,445,
days 12 → 14). Every other difference is in a window under the floor, which publishes
`#null` rates, or is too small to move a four-decimal rate. The two series were fetched
minutes apart, so a few single-match differences may be late ingestion instead.

**Decision — daily minimum: material, marginally.** By the plan's rule (any published
rate changes) the effect is material: 2 of 5,540 windows, largest shift 0.0024 win and
0.0002 pick, none crossing the floor, none after 2025-10-02. 458 windows would record a
different `matches`, and some a different `days`. Sending `min_matches=1` therefore
changes method; sending `min_matches=20` pins today's behaviour exactly. The API's row
filter is not a confidence rule either way: `MIN_WINDOW_MATCHES` remains the only one.

**Upper bounds are not exact, and not consistently inexact.** `hero-stats` filters by
whole day throughout the history: `max_unix_timestamp` anywhere inside day D returns
all of D, and `D + 86399` also returns D + 1 (checked on eight dates from 2024-08-29 to
2026-09-01). `item-stats` does the same for recent days only. For days up to at least
2026-07-15 it filters at finer than day precision (a bound of D 00:00 returns a sliver
of D; `D + 86399` returns exactly D), and from at least 2026-08-15 it filters by whole
day and over-returns D + 1. So `to + 86399` with local trimming is complete and exact
in both regimes, which is what `fetchSeries` does. No single bound is exact for an
aggregate bucket in both regimes.

**Hero-conditioned purchases.** `P --check association --from 2026-09-13 --to 2026-09-15
--heroes 1,13 --items 3696726732,1710079648` (Infernus, Haze; Toxic Bullets, Healing
Rite; the range ends the day before the 2026-09-16 patch):

- `item-stats?bucket=hero`: the bucket value is the hero id (5,907 rows, every bucket a
  known hero).
- 935 hero-filtered daily item rows: `wins + losses = matches` in all, and none exceeds
  the hero's own `matches` that day.
- `hero-stats?include_item_ids=I` counts slightly fewer player-matches than
  `item-stats?hero_ids=H` for the same (H, I, day): 13,941 vs 13,976, 11,405 vs 11,575,
  10,904 vs 11,011 for Infernus + Toxic Bullets; 781 vs 784 for Healing Rite. The gap is
  0–1.5 % and always in that direction. Unexplained; consistent with `item-stats`
  counting a re-bought item twice. `players` (10,856 for the first pair) is distinct
  accounts and is lower still.
- Under `include_item_ids`, `matches_per_bucket` becomes the buyers' player slots across
  all heroes (50,662 vs 536,650 unfiltered on 2026-09-13). It is not a denominator; take
  the denominator from the unfiltered `hero-stats` row.
- Aggregate buckets include the over-returned day and cannot be trimmed: for Infernus +
  Toxic Bullets the three requested days sum to 36,562, while `bucket=no_bucket` and
  `bucket=hero` both return 46,433 = 36,562 + 9,871 for 2026-09-16. Single-day
  `no_bucket` requests returned 25,551 and 22,586 where the daily rows are 13,976 and
  11,575.
- Several `include_item_ids` mean **all** of them: 513 Infernus player-matches bought
  both on 2026-09-13, against 13,941 and 781 singly. On `item-stats` the parameter
  filters the population, not the output: with `hero_ids=1&include_item_ids=3696726732`
  all 156 items came back, counted among Toxic Bullets buyers. Comma-separated
  `hero_ids` pools the heroes into one row per item.

**Decision — association numerator and boundaries: daily `hero-stats` per changed item.**
One request per item id, `bucket=start_time_day`, trimmed locally, numerator
`matches` for (hero, day), denominator the unfiltered `hero-stats` `matches` for the
same hero and day. Same endpoint and units on both sides, exact day bounds, and the
conservative count of the two. Per-hero daily `item-stats` is the fallback. The hero
bucket and `no_bucket` are rejected.

**Decision — missing rows.** Four cases, only the first of which is a zero:

| Case                                                                              | Meaning                                  | Treatment                              |
| --------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------- |
| Item row absent, hero row present, request at `min_matches=1` or via `hero-stats` | Nobody on that hero bought it that day   | Zero purchases                         |
| Item row absent under the default minimum                                         | Fewer than 20, possibly zero             | Unknown; do not read as zero           |
| Whole day absent from one series (rank reset, badge filter)                       | No qualifying matches in that population | Day contributes nothing to either side |
| Hero denominator row absent                                                       | Hero unplayed or not yet released        | No rate for that day                   |

An HTTP failure is none of these: nothing is written and the run retries later.

## Method 2 and schema 2 (2026-09-21)

Phase 1 of the enrichment plans. A patch's `.mg` now records what was measured, once, in
its root `attr` block:

```
stats schema=2 method=2 collected="2026-09-21T21:41:20.000Z" {
  before from="2025-09-18" to="2025-10-02"
  after from="2025-10-03" to="2025-10-17"
  siblings "162580"
}
```

Intervals are complete UTC days, start-inclusive and end-exclusive, `#null` when empty;
`siblings` lists other patches released the same day, which share both windows. Every
window also carries `total` (cohort player slots), `covered` (days the cohort series
has) and `coverage`. Schema 1 (windows without these fields, no root node) is no longer
read; every recorded file was migrated. The reader names an unsupported schema rather
than reading it as something else.

`METHODS` in `src/constants.ts` holds what a method version means. Both send
`game_mode=normal` and `match_mode=ranked,unranked` explicitly; method 1 kept the API's
`min_matches=20`, method 2 sends `min_matches=1`. Method 2 also refuses a rate for a
window whose cohort series is missing a day (`coverage="incomplete"`, shown as "data
unavailable") instead of comparing rates over different day sets.

A routine run writes schema 2 for patches whose window is open, recomputing the whole
file, and leaves closed files alone; if any closed file still holds an older method it
says so and asks for `--rebuild`. `collected` only moves when something else in the file
does, so an unchanged run writes nothing. Files are replaced through a temporary file
and a rename. `--rebuild` also removes a block whose entity no longer has any data.

**Migration.** `--rebuild` on 2026-09-21 rewrote 81 files (2,291 blocks; 160 entities
gained a block now that rows under 20 matches exist). Against the previous blocks, over
8,524 windows: no rate appeared or disappeared, none was suppressed for coverage, 739
rates moved, one by more than 0.002 (the `2025/10-02` high-rank window Phase 0
predicted); the rest is two days of late ingestion. 1,734 windows are
`coverage="incomplete"`, all of them already without a rate (mostly high rank before
badges existed). The database differed only in `impact` and the new `changelogs.stats`
column, and a second routine run wrote nothing.

## Related items (2026-09-21)

`pnpm run build:related` records, on each hero block, up to three items changed in the
same patch ranked by how many of that hero's player-matches bought them in the
before-window: `hero-stats?include_item_ids=I` by day (one request per changed item,
shared by every hero in the patch) over the unfiltered `hero-stats` appearances for the
same days. All ranks. It needs 1,000 appearances and 100 buyers, stores raw counts, and
freezes a result until the patch's changed items or `RELATED_METHOD_VERSION` change.
`--patch=<id>` targets one patch; `--rebuild` recomputes the archive (one request per
changed item per patch — not part of a routine run). A failed request writes nothing
for that patch; the missing record is the retry state.
