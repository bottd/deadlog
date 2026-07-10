# Plan 005: Give the home page a proper heading hierarchy (h1 → h2 → h3)

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 0cd12ff..HEAD -- app/src/lib/components/header/Header.svelte app/src/lib/components/changelog/Changelog.svelte app/src/lib/components/changelog/ChangelogCard.svelte`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug (accessibility / SEO)
- **Planned at**: commit `0cd12ff`, 2026-07-10

## Why this matters

The home page — the site's main landing page — has no `<h1>` or `<h2>` at all; the document outline starts at `<h3>` (the patch-card dates). Screen-reader users navigating by headings get no top-level description of the page, and the page loses an easy on-page SEO signal for its primary query ("Deadlock changelog"). The detail routes already have an `<h1>` each; home is the only gap.

## Current state

- `app/src/lib/components/header/Header.svelte` (~lines 37–46) renders the wordmark as a `<span>`, not a heading:
  ```svelte
  <span
  	class="font-display text-foreground heading-glow text-2xl font-medium tracking-wide transition-colors duration-300 md:text-3xl"
  >
  	dead<span class="text-primary">log</span>
  </span>
  ```
  The header is global chrome rendered on every route via `+layout.svelte` — because detail routes already have their own `<h1>`, do NOT make the wordmark an `<h1>` (that would create two h1s on detail pages).
- `app/src/lib/components/changelog/Changelog.svelte` — home page body (`<main>`): hero rail, then latest patch card, then previous-updates grid. Card titles render as `<h3>` (see `ChangelogCard.svelte:111` for the latest card and `:239` for grid cards). Section labels ("LATEST PATCH", "PREVIOUS UPDATES") are styled `<span>`s.
- `app/src/routes/+page.svelte` — renders `<MetaTags>` + `<Changelog>` + `<ScrollToTop>`; page title (meta) is set here.
- Convention: visually-hidden content — check for an existing `sr-only` usage (`grep -rn "sr-only" app/src` at planning time shows Tailwind's built-in `sr-only` utility is available; use it).

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

**Out of scope** (do NOT touch, even though they look related):
- `Header.svelte` (global chrome — a heading there would duplicate h1s on detail routes).
- `ChangelogCard.svelte` `<h3>`s — they become correct once h1/h2 exist above them.
- Detail routes (already correct).
- Meta tags / titles.

## Git workflow

- Work on the current branch; one commit for this plan. Short imperative subject, e.g. `add h1/h2 hierarchy to home page`.
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Add a visually-hidden h1

At the top of the `<main>` content in `Changelog.svelte`, add:

```svelte
<h1 class="sr-only">Deadlock Changelog — patch notes, hero and item balance history</h1>
```

**Verify**: `grep -n "<h1" app/src/lib/components/changelog/Changelog.svelte` → one match.

### Step 2: Promote the two section labels to h2

Convert the "LATEST PATCH" label (inside the latest-card region rendered by `ChangelogCard.svelte` it is a styled span — if it lives in `ChangelogCard.svelte`, instead wrap the *sections* in `Changelog.svelte`: add an `sr-only` `<h2>Latest patch</h2>` immediately before the latest card block and `<h2 class="sr-only">Previous updates</h2>` immediately before the grid). Do not restyle the visible labels; add hidden headings rather than re-tagging visible spans if re-tagging would change their look (heading elements carry UA font styles — the `sr-only` route avoids all visual risk).

**Verify**: `grep -cn "<h2" app/src/lib/components/changelog/Changelog.svelte` → 2.

### Step 3: Check

**Verify**: `pnpm check` → exit 0; `pnpm lint` → exit 0; `pnpm test` → all pass.

## Test plan

No new unit tests. Manual gate if a browser is available: run an outline check (e.g. browser devtools Accessibility tree) on `/` → exactly one h1, two h2s, then h3 card titles. Visual appearance unchanged (headings are `sr-only`).

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `grep -c "<h1" app/src/lib/components/changelog/Changelog.svelte` → 1
- [ ] `grep -c "<h2" app/src/lib/components/changelog/Changelog.svelte` → 2
- [ ] `pnpm check` exits 0, `pnpm lint` exits 0, `pnpm test` exits 0
- [ ] No files outside the in-scope list are modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back (do not improvise) if:

- `Changelog.svelte` already contains an `<h1>` (fixed independently).
- The section structure in `Changelog.svelte` doesn't match (latest card + grid not distinguishable) — report the actual structure.

## Maintenance notes

- If a visible page title is ever designed for the home page, replace the `sr-only` h1 with it — don't keep both.
- Reviewer: check detail routes still have exactly one h1 each (this plan must not touch them).
