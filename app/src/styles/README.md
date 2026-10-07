# CSS architecture

`../app.html` declares the cascade order before SvelteKit's stylesheet links.
`../app.css` imports the shared foundations into those layers:

```css
@layer reset, tokens, base, layout, prose, components, utilities;
@layer components.primitives, components.features;
```

The order declaration belongs in the document head: code-split component CSS can
load before the root CSS bundle, including on a direct visit to a nested route.
Declaring the order only in `app.css` would let the first loaded component establish
precedence ahead of the reset.

- **reset** normalizes browser defaults explicitly, including border sizing, forms,
  headings, lists, and images.
- **tokens** owns the palette, semantic colors, font stacks, type scale, spacing,
  radii, shadows, and motion values. Change shared design values here.
- **base** owns fonts, document defaults, default focus outlines, entity accent
  inheritance, and shared keyframes.
- **layout** owns the shared responsive page container.
- **prose** styles generated Mog documents in `../lib/components/changelog/mog-content.css`.
  Its native `@scope` stops at `[data-prose-ui]`. Put that attribute on the root of
  UI embedded in Mog so document rules do not style its internals.
- **components.primitives** owns shared controls and surfaces. Bits UI wrappers use
  explicit `data-slot` hooks in `primitives.css` so styling works across component
  and portal boundaries. The two TOCs share colocated `changelog/toc.css`.
- **components.features** owns feature and route styling, normally in a scoped
  Svelte `<style>` block. It can override primitive defaults without competing on
  selector specificity or relying on stylesheet load order.
- **utilities** contains only screen-reader hiding, the no-JavaScript visibility
  hook, shared icon sizes, and the reduced-motion override.

## Component conventions

Use semantic classes and state attributes: `data-size`, `data-major`,
`data-entity-kind`, `aria-pressed`, `aria-current`, and Bits UI's `data-state`.
TypeScript supplies state and data, not strings of styling instructions.

Use inherited custom properties for visual parameters. For example, a panel owns
`--corner-tl` and `--corner-br`, including their hover values; `CornerAccents` owns
the geometry. TOC size variants change a handful of inherited sizing properties.
Inline styles are reserved for runtime values or an external component's theme API.

Keep feature selectors scoped. A class passed to a child component is not a local
DOM element, so target its deliberately named public hook with `:global(...)` when
needed. Prefix those hooks with the owning feature, especially for portalled UI.

Put authored rules in their intended layer. Normal unlayered CSS outranks every
normal layered rule; adding an unlayered override would bypass this contract.
Library-injected styles (such as Sonner) retain their own styling API.

Native nesting, logical properties, relative colors, `color-mix()`, and `@scope`
are part of the modern-browser baseline. No utility generator or CSS preprocessor
is required. Preserve the existing responsive breakpoints when changing styles;
use container queries when a component genuinely needs to respond to its own width.

## Verification

From the workspace root:

```sh
pnpm check
pnpm build
pnpm test:e2e
```

The browser suite covers mobile and desktop layouts, focus rings, selected states,
generated content, overlays, and client-side navigation. Compare representative
pages at both widths when changing shared tokens, reset rules, or layer order.
