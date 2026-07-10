# Plan 004: Honor prefers-reduced-motion in home-page transitions

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 0cd12ff..HEAD -- app/src/lib/components/changelog/Changelog.svelte app/src/lib/components/changelog/ChangelogCard.svelte`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug (accessibility)
- **Planned at**: commit `0cd12ff`, 2026-07-10

## Why this matters

The home page plays fly/scale entrance animations on every card, headline, and entity icon unconditionally. The global CSS `@media (prefers-reduced-motion: reduce)` block only neutralizes CSS animations — Svelte `in:fly`/`in:scale` are JS-driven and ignore it. Users who have asked their OS to reduce motion still get the full choreography on the site's main page. The hero detail page already handles this correctly with a `transitionConfig` derived from `prefersReducedMotion`; the home page is the inconsistent outlier, and the fix is to reuse that exact pattern.

## Current state

- `app/src/lib/components/changelog/Changelog.svelte` — home page body. Line 11: `import { scale, fly } from 'svelte/transition';`. Unconditional transitions at lines 66 (`in:scale={{ start: 0.9, duration: 400 }}`), 126 (`in:fly={{ y: 20, duration: 350, easing: quintOut }}`), 145–150 (`in:fly={{ ... }}`), 159 (`in:scale={{ start: 0.95, duration: 400 }}`), 204 (`in:fly={{ y: 10, duration: 400 }}`).
- `app/src/lib/components/changelog/ChangelogCard.svelte` — line 10 imports `scale, fly`; unconditional transitions at lines 100 (`in:fly={{ x: -20, duration: 500, easing: backOut }}`), 113 (`in:fly={{ y: 20, duration: 400, delay: 100 }}`), 154+ (staggered `in:scale`), and further icon transitions near line 283.
- The repo's exemplar pattern, `app/src/routes/hero/[slug]/+page.svelte:50-77`:
  ```svelte
  import { prefersReducedMotion } from 'svelte/motion';
  ...
  const transitionConfig = $derived(
  	prefersReducedMotion.current
  		? { duration: 0 }
  		: {
  				duration: 400,
  				easing: quintOut
  			}
  );

  const cardTransitionConfig = $derived((i: number) =>
  	prefersReducedMotion.current
  		? { duration: 0 }
  		: {
  				delay: Math.min(i, 12) * 40,
  				duration: 400,
  				easing: quintOut
  			}
  );
  ```
  Usage: `in:fly={transitionConfig}` / `in:fly={cardTransitionConfig(i)}`. Match this pattern exactly (Svelte 5 runes, `$derived`).

## Commands you will need

| Purpose   | Command      | Expected on success |
|-----------|--------------|---------------------|
| Install   | `pnpm install` | exit 0            |
| Typecheck | `pnpm check` | exit 0, no errors   |
| Lint      | `pnpm lint`  | exit 0              |
| Tests     | `pnpm test`  | all pass            |

## Scope

**In scope** (the only files you should modify):
- `app/src/lib/components/changelog/Changelog.svelte`
- `app/src/lib/components/changelog/ChangelogCard.svelte`

**Out of scope** (do NOT touch, even though they look related):
- `app/src/app.css` reduced-motion block (already correct for CSS animations).
- `hero/[slug]/+page.svelte`, `item/[slug]/+page.svelte`, `change/[id]/+page.svelte` — already gated.
- Do not remove or redesign any animation; only gate them.

## Git workflow

- Work on the current branch; one commit for this plan. Short imperative subject, e.g. `gate home transitions on prefers-reduced-motion`.
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Gate transitions in Changelog.svelte

Import `prefersReducedMotion` from `'svelte/motion'`. For each `in:fly`/`in:scale` listed in "Current state", replace the inline options object with a `$derived` config (or a small helper returning `{ duration: 0 }` when `prefersReducedMotion.current` is true, else the existing options verbatim). Keep every existing duration/easing/delay value unchanged in the non-reduced branch.

**Verify**: `pnpm check` → exit 0. `grep -c "prefersReducedMotion" app/src/lib/components/changelog/Changelog.svelte` → ≥ 1.

### Step 2: Gate transitions in ChangelogCard.svelte

Same treatment for the transitions at lines 100, 113, 154+, 283+ (staggered icon delays keep their `Math.min`-style stagger in the non-reduced branch — copy the `cardTransitionConfig(i)` closure pattern from the hero page for the indexed ones).

**Verify**: `pnpm check` → exit 0. `grep -c "prefersReducedMotion" app/src/lib/components/changelog/ChangelogCard.svelte` → ≥ 1.

### Step 3: Run the suite

**Verify**: `pnpm lint` → exit 0; `pnpm test` → all pass.

## Test plan

No new unit tests (visual behavior). Manual gate if a browser is available: with DevTools emulating `prefers-reduced-motion: reduce`, reload `/` — content must appear without fly/scale motion; without emulation the animations must look identical to before.

## Done criteria

Machine-checkable. ALL must hold:

- [ ] Both files import `prefersReducedMotion` and no `in:fly`/`in:scale` in them uses a hardcoded non-zero duration without the gate (inspect: `grep -n "in:fly\|in:scale" <file>` and confirm each references a gated config)
- [ ] `pnpm check` exits 0, `pnpm lint` exits 0, `pnpm test` exits 0
- [ ] No files outside the in-scope list are modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back (do not improvise) if:

- The transition call sites don't match the listed line numbers/patterns (drifted) — re-locate them by grepping `in:fly\|in:scale`; if the components were restructured beyond recognition, stop.
- `prefersReducedMotion` from `svelte/motion` is unavailable in the installed Svelte version (it is available in Svelte 5.x used here — if the import errors, report).

## Maintenance notes

- New entrance animations on any page should use a gated config from day one; consider extracting a shared `$lib/utils/motion.ts` helper if a third page needs it (deliberately deferred — two call-site files don't justify the abstraction yet).
- Reviewer: diff should show only transition-options changes, no timing/easing value changes in the default branch.
