# Plan 003: Make filter badges keyboard-removable and screen-reader announced

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 0cd12ff..HEAD -- app/src/lib/components/filter-bar/FilterBadge.svelte app/src/lib/components/ui/badge/badge.svelte app/src/lib/components/filter-bar/FilterInput.svelte`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug (accessibility)
- **Planned at**: commit `0cd12ff`, 2026-07-10

## Why this matters

Active hero/item filters are shown as removable badges in the filter bar, but the remove action is a bare `onclick` on a `<span>`: not focusable, not announced as interactive, not operable by keyboard. A keyboard or screen-reader user can clear ALL filters (that control is a real `<button>`) but cannot remove a single one. This is a WCAG 2.1.1 (keyboard) failure on the site's core interaction — filtering the changelog. The hit area (~20px chip with a 12px icon) is also below the WCAG 2.2 24px target-size minimum.

## Current state

- `app/src/lib/components/filter-bar/FilterBadge.svelte` (lines 1–20):
  ```svelte
  <script lang="ts">
  	import XIcon from '@lucide/svelte/icons/x';
  	import { Badge } from '$lib/components/ui/badge';

  	interface Props {
  		name: string;
  		icon?: string;
  		onRemove: () => void;
  		badgeColor?: 'hero' | 'item';
  	}

  	let { name, icon, onRemove, badgeColor = 'hero' }: Props = $props();
  </script>

  <Badge
  	variant={badgeColor === 'hero' ? 'default' : 'secondary'}
  	onclick={onRemove}
  	class="group/badge hover:shadow-primary/10 cursor-pointer transition-all duration-200 hover:scale-105 hover:pr-2 hover:shadow-md"
  >
  	{#if icon}
  ```
  (After the icon it renders the name and an `XIcon` sized `size-3`.)
- `app/src/lib/components/ui/badge/badge.svelte` (lines ~55–62) — a shadcn-svelte primitive; renders `<svelte:element this={href ? 'a' : 'span'} ...>` so without `href` the badge is a `<span>` with the `onclick` spread via `{...restProps}` — no `role`, no `tabindex`, no keyboard handler. **Do not modify this file** — it is CLI-managed shadcn surface.
- `app/src/lib/components/filter-bar/FilterInput.svelte` — uses `<FilterBadge ...>` at two call sites (~line 132 desktop, ~line 140 mobile sheet), passing `onRemove`. The "Clear all" control (~line 174) is already a real `<button>` — use it as the convention exemplar for aria-labels.
- Convention: icon-only buttons in this repo use the `Button` component or native `<button>` with an `aria-label` (see the Clear-all button in `FilterInput.svelte`).

## Commands you will need

| Purpose   | Command      | Expected on success |
|-----------|--------------|---------------------|
| Install   | `pnpm install` | exit 0            |
| Typecheck | `pnpm check` | exit 0, no errors   |
| Lint      | `pnpm lint`  | exit 0              |
| Tests     | `pnpm test`  | all pass            |

## Scope

**In scope** (the only files you should modify):
- `app/src/lib/components/filter-bar/FilterBadge.svelte`

**Out of scope** (do NOT touch, even though they look related):
- `app/src/lib/components/ui/badge/badge.svelte` — shadcn-managed primitive; making every badge focusable would be wrong.
- `FilterInput.svelte` call sites — the `FilterBadge` public props API must not change.
- `EntityItem.svelte`, `HeroRail.svelte`.

## Git workflow

- Work on the current branch; one commit for this plan. Short imperative subject, e.g. `make filter badges keyboard-removable`.
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Wrap the badge in a native remove button

Restructure `FilterBadge.svelte` so the interactive element is a real `<button type="button">`:

- Move `onclick={onRemove}` off the `<Badge>` onto a wrapping `<button type="button" onclick={onRemove} aria-label={`Remove ${name} filter`} class="group/badge cursor-pointer">` (or render the button *inside* the badge around the X icon — either is acceptable, but the whole-chip button matches the current whole-chip click behavior; prefer it).
- Keep the visual classes currently on `<Badge>` (hover scale/shadow) — they may live on the button or the badge, whichever keeps the rendered look identical.
- Ensure the button has a minimum 24px hit area: add `min-h-6` (24px) or padding on the button; the visual chip may stay smaller.
- Keep the `Props` interface unchanged.

**Verify**: `grep -n "<button" app/src/lib/components/filter-bar/FilterBadge.svelte` → at least one match with `aria-label`.

### Step 2: Check focus styling

The button must show a visible focus ring. Use the repo's standard focus classes (the `Badge` variants already include `focus-visible:ring-[3px]`-style classes via `badgeVariants`; if the wrapper button suppresses them, add `focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-md outline-none` to the button).

**Verify**: `pnpm check` → exit 0; `pnpm lint` → exit 0.

### Step 3: Run the suite

**Verify**: `pnpm test` → all pass.

## Test plan

- If a component test harness exists for filter-bar components (check `app/src/lib/components/filter-bar/*.test.ts` / `*.spec.ts`; none were found at planning time), add a test that `FilterBadge` renders a `button` with an accessible name containing the filter name and that clicking it calls `onRemove`. Model after any existing vitest browser-mode component test in `app/src`; if none exists, skip the new test and note it in your report rather than inventing new infrastructure.
- Existing e2e: `app/e2e/filtering.spec.ts` exercises filter add/remove flows — must still pass if runnable (needs `app/static/deadlog.db`; skip with a note if absent).

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `FilterBadge.svelte` renders a native `<button>` with `aria-label` mentioning the filter name
- [ ] `grep -n "onclick" app/src/lib/components/ui/badge/badge.svelte` → unchanged (file untouched, `git status`)
- [ ] `pnpm check` exits 0, `pnpm lint` exits 0, `pnpm test` exits 0
- [ ] No files outside the in-scope list are modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back (do not improvise) if:

- `FilterBadge.svelte` no longer matches the "Current state" excerpt (drifted).
- Fixing focus styling seems to require editing `badge.svelte` — report instead.
- The e2e filtering spec fails specifically on badge-removal selectors after the change (selector coupling) — report the failing selector rather than rewriting the spec broadly.

## Maintenance notes

- If badge removal gets an explicit small X-button design later, keep the accessible name pattern `Remove <name> filter`.
- Reviewer: tab through the filter bar with 2+ active filters — each badge must be focusable, Enter/Space must remove it, and the visual look must be unchanged.
