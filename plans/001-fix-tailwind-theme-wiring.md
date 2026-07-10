# Plan 001: Fix Tailwind v4 theme wiring — class-based `dark:` variant and `card-accent` utility

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 0cd12ff..HEAD -- app/src/app.css app/src/lib/components/changelog/ChangelogCard.svelte app/src/lib/components/changelog/PatchPreviewCard.svelte`
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

Two Tailwind v4 wiring gaps make styles silently misbehave. First, the app forces dark mode with `<html class="dark">`, but `app/src/app.css` never declares `@custom-variant dark`, so every `dark:` utility in the components (e.g. `dark:bg-input/30` in the button) follows the **visitor's OS color-scheme preference** instead of the `.dark` class — a visitor whose OS is in light mode gets dark backgrounds from the CSS variables but the light-mode branch of every `dark:`-gated utility. Second, the card hover style `hover:bg-card-accent/30` on both card components refers to a color that is never registered in `@theme inline`, so Tailwind generates no such utility and the intended hover affordance on the site's primary cards does nothing at all.

## Current state

- `app/src/app.css` — the only stylesheet; Tailwind v4 CSS-first config (no `tailwind.config.js` exists). Starts:
  ```css
  @import 'tailwindcss';
  @import 'tw-animate-css';
  ```
  There is **no** `@custom-variant dark` anywhere in the file (verify: `grep -n "custom-variant" app/src/app.css` → no matches).
- `app/src/app.html:2` — `<html lang="en" class="dark">` (dark mode is class-forced).
- `app/src/app.css:75` and `:145` — `--card-accent: var(--base-50);` (light `:root` block) and `--card-accent: var(--base-25);` (`.dark` block). The variable exists in both theme blocks but is **not** mapped in the `@theme inline` block (which starts around `app/src/app.css:196` and contains lines like `--color-card: var(--card);`).
- `app/src/lib/components/changelog/ChangelogCard.svelte:210` — non-latest card anchor:
  ```
  class="clip-corner-sm bg-card hover:bg-card-accent/30 group relative flex min-h-[200px] ..."
  ```
- `app/src/lib/components/changelog/PatchPreviewCard.svelte:28` — same `hover:bg-card-accent/30` pattern.
- Convention: semantic colors are exposed by adding `--color-<name>: var(--<name>);` lines inside `@theme inline` — see the existing `--color-card: var(--card);` line in `app/src/app.css` as the exemplar.

## Commands you will need

| Purpose   | Command                  | Expected on success |
|-----------|--------------------------|---------------------|
| Install   | `pnpm install`           | exit 0              |
| Typecheck | `pnpm check`             | exit 0, no errors   |
| Lint      | `pnpm lint`              | exit 0              |
| Tests     | `pnpm test`              | all pass            |
| Dev serve | `pnpm dev` (needs `app/static/deadlog.db`; if absent, skip manual verification) | serves on :5173 |

## Scope

**In scope** (the only files you should modify):
- `app/src/app.css`

**Out of scope** (do NOT touch, even though they look related):
- `app/src/app.html` — the forced `class="dark"` is intentional (the site is dark-only today; see plans/README.md "Findings considered and rejected" on light mode).
- `ChangelogCard.svelte` / `PatchPreviewCard.svelte` — their classes become correct once the token is registered; do not rewrite them.
- Any change to the token *values* (`--base-*`, `--card-accent` definitions).

## Git workflow

- Work on the current branch; one commit for this plan.
- Message style (match `git log`): short imperative subject, e.g. `fix tailwind dark variant + card-accent utility`.
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Add the class-based dark variant

In `app/src/app.css`, immediately after the two `@import` lines at the top, add:

```css
@custom-variant dark (&:is(.dark *));
```

**Verify**: `grep -n "custom-variant" app/src/app.css` → exactly one match near the top of the file.

### Step 2: Register the card-accent color in `@theme inline`

Inside the `@theme inline` block, next to the existing `--color-card: var(--card);` line, add:

```css
--color-card-accent: var(--card-accent);
```

**Verify**: `grep -n "color-card-accent" app/src/app.css` → one match inside the `@theme inline` block.

### Step 3: Build and check

**Verify**: `pnpm check` → exit 0. `pnpm lint` → exit 0. `pnpm build` → completes without errors (requires `DATABASE_URL`; the script sets it, but the db file must exist — if `app/static/deadlog.db` is missing, `pnpm check` + `pnpm lint` are sufficient gates).

If a dev server is possible, hover a card in the "Previous Updates" grid on `/` and confirm the background lightens slightly on hover.

## Test plan

No new unit tests — this is CSS-only configuration. Gates are `pnpm check`, `pnpm lint`, and the existing suite `pnpm test` (must stay green). Manual gate: card hover shows a background change.

## Done criteria

Machine-checkable. ALL must hold:

- [ ] `grep -c "custom-variant dark" app/src/app.css` → 1
- [ ] `grep -c "color-card-accent" app/src/app.css` → 1
- [ ] `pnpm check` exits 0
- [ ] `pnpm lint` exits 0
- [ ] `pnpm test` exits 0
- [ ] No files outside the in-scope list are modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back (do not improvise) if:

- `app/src/app.css` already contains a `@custom-variant dark` declaration (someone fixed it independently).
- A `tailwind.config.js`/`.ts` file exists in `app/` (the project migrated away from CSS-first config; the fix belongs there instead).
- `pnpm check` fails with errors unrelated to this change and you cannot tell whether they pre-existed (run it once on a clean tree first to baseline).

## Maintenance notes

- Any future light-mode work depends on Step 1 being present; without it `dark:` utilities and the token blocks disagree.
- Reviewer should scan for other `bg-<token>` usages whose token is missing from `@theme inline` (`--primary-subtle` and `--border-subtle` are defined but unused — see plans/README.md findings table).
