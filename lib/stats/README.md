# @deadlog/stats

Builds `app/stats/impact.json`: measured win and pick rates before and after each
patch, per hero and item. Spec: `docs/superpowers/specs/2026-09-19-patch-impact-stats-design.md`.

## Usage

`pnpm run build:stats` refreshes the windows that are still open (4 requests).
`pnpm run build:stats --rebuild` recomputes every window from the full history (about
60 requests, 1–2 minutes). Rebuild after changing a constant in `src/constants.ts` or
after adding an entity to a historical changelog. A failed fetch leaves the snapshot
untouched and exits 0.

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
