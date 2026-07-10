# Plan 002: Move the "Previous Updates" divider out of the latest-patch link

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 0cd12ff..HEAD -- app/src/lib/components/changelog/ChangelogCard.svelte app/src/lib/components/changelog/Changelog.svelte`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `0cd12ff`, 2026-07-10

## Why this matters

On the home page, the horizontal "PREVIOUS UPDATES" section divider that separates the hero "latest patch" card from the grid of older patches is rendered **inside** the latest card's `<a>` element. Clicking the divider text or its flanking rules therefore navigates to the latest patch — a click target the user perceives as inert page furniture. Screen readers also announce the divider text as part of the latest-patch link's accessible name. Moving the divider out of the anchor fixes both.

## Current state

- `app/src/lib/components/changelog/ChangelogCard.svelte` — renders one patch card. When `isLatest` is true it renders a large hero card wrapped in `<a {href} ...>` starting around line 80; the anchor closes at line 206. Just before the close, lines 199–206 read:
  ```svelte
  		<div class="mt-2 flex items-center gap-4 px-4">
  			<div class="bg-primary/30 h-px flex-1"></div>
  			<span class="text-muted-foreground font-mono text-[10px] tracking-widest uppercase"
  				>Previous Updates</span
  			>
  			<div class="bg-primary/30 h-px flex-1"></div>
  		</div>
  	</a>
  ```
  After the `{:else}` branch (line 207+) the non-latest card starts with its own `<a>`.
- `app/src/lib/components/changelog/Changelog.svelte` — the home page body. It renders the latest card and the grid; the latest card render site is the block containing `<ChangelogCard ... isLatest={true} ...>` (near line 126: `<div in:fly={{ y: 20, duration: 350, easing: quintOut }}>`), and the previous-updates grid follows it (cards rendered for `allChangelogs.slice(1)`).
- Convention: section micro-labels use `font-mono text-[10px] tracking-widest uppercase` styling — keep the divider's markup identical, only relocate it.

## Commands you will need

| Purpose   | Command      | Expected on success |
|-----------|--------------|---------------------|
| Install   | `pnpm install` | exit 0            |
| Typecheck | `pnpm check` | exit 0, no errors   |
| Lint      | `pnpm lint`  | exit 0              |
| Tests     | `pnpm test`  | all pass            |

## Scope

**In scope** (the only files you should modify):
- `app/src/lib/components/changelog/ChangelogCard.svelte` (remove the divider block)
- `app/src/lib/components/changelog/Changelog.svelte` (render the divider as a sibling between latest card and grid)

**Out of scope** (do NOT touch, even though they look related):
- The `isLatest={false}` card branch and its markup.
- `PatchPreviewCard.svelte`.
- Any change to the divider's visual styling.

## Git workflow

- Work on the current branch; one commit for this plan. Short imperative subject, e.g. `move previous-updates divider out of latest-patch link`.
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Remove the divider from the anchor

In `ChangelogCard.svelte`, delete the entire `<div class="mt-2 flex items-center gap-4 px-4">...</div>` block quoted above (the one ending right before `</a>` in the `isLatest` branch). The `</a>` now directly follows the previous element.

**Verify**: `grep -n "Previous Updates" app/src/lib/components/changelog/ChangelogCard.svelte` → no matches.

### Step 2: Render the divider in Changelog.svelte

In `Changelog.svelte`, immediately **after** the element that renders the latest card (`<ChangelogCard ... isLatest={true}>` and its wrapping transition `<div>`), and **before** the previous-updates grid markup, insert the exact block removed in Step 1 (unchanged markup). Only render it when older changelogs exist — wrap in `{#if allChangelogs.length > 1}` (match the variable name actually used at the grid render site; if the grid is already inside such a guard, place the divider inside the same guard).

**Verify**: `grep -n "Previous Updates" app/src/lib/components/changelog/Changelog.svelte` → one match.

### Step 3: Check

**Verify**: `pnpm check` → exit 0; `pnpm lint` → exit 0; `pnpm test` → all pass.

## Test plan

No new unit tests required (pure markup relocation); the e2e suite `app/e2e/filtering.spec.ts` must still pass if run (`pnpm --filter deadlog-web test:e2e`, requires `app/static/deadlog.db` and a built preview — skip if the db is absent, and say so in your report). Manual gate if a dev server is possible: on `/`, hovering the "PREVIOUS UPDATES" text shows no pointer cursor and clicking it does not navigate.

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `grep -c "Previous Updates" app/src/lib/components/changelog/ChangelogCard.svelte` → 0
- [ ] `grep -c "Previous Updates" app/src/lib/components/changelog/Changelog.svelte` → 1
- [ ] `pnpm check` exits 0, `pnpm lint` exits 0, `pnpm test` exits 0
- [ ] No files outside the in-scope list are modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back (do not improvise) if:

- The divider block is no longer inside the `<a>` in `ChangelogCard.svelte` (already fixed).
- The latest-card render site in `Changelog.svelte` doesn't match the description (component restructured) — report what you found instead.
- Moving the block breaks a Svelte transition compile (e.g. the grid markup depends on the divider's position for a `{#key}` boundary).

## Maintenance notes

- If the latest card is ever redesigned, keep interactive area = card only; section furniture belongs to `Changelog.svelte`.
- Reviewer: confirm the divider still appears exactly once between the hero card and the grid, and not when there are no older patches.
