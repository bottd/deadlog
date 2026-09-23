# deadlog-site

The Rust + HTMX reimplementation of the Deadlog web surface, started 2026-09-23. See
`../docs/rust-htmx/2026-09-23-prd-review.md` for how `PRODUCT.md` maps onto this stack.

It is a static site generator, as the PRD's "static only, no runtime database" constraint
requires: it reads the SQLite database the existing pipeline builds and writes HTML.
HTMX swaps load prerendered fragment files; every swap target is also a full page at the
same URL, so links work without JavaScript.

```sh
pnpm run build:db                     # from the repo root, once
cargo run --release -- build          # --db ../app/static/deadlog.db --out dist
python3 -m http.server -d dist 4180   # then open /heroes/
cargo test
```

Phase 1 renders `/heroes/`, every released hero's history with the stats band (Maxed
first, Also changed in this patch), and `/hero/<slug>/ability/<ability>/` pages plus the
`fragment.html` each ability chip swaps in. `htmx.min.js` is vendored from htmx.org 2.0.6.
Links to `/change/…` target pages this generator does not render yet.
