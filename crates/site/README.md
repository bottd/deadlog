# deadlog-site

The deadlog.io static site. Every page is a plain function of `app/static/deadlog.db`
and the `.mg` changelogs in `app/changelogs`, rendered at build time into `dist/`; there
is no runtime server and no client framework. Plan and history:
`docs/rust/2026-09-23-migration-plan.md`.

```sh
cargo run --release -- build          # dist/, minified, with analytics
cargo run -- build --dev              # readable CSS and HTML, no analytics
cargo run -- serve                    # http://127.0.0.1:4180, rebuilds on data/web changes
cargo run -- serve --static           # serve dist/ with the host's routing rules
cargo test -p deadlog-site
```

Templates are compiled into the binary, so `serve` picks up changes to the database,
the changelogs and `web/` on its own but needs a restart after editing `templates/`.

## Layout

- `src/pages/`: one module per page family (`home`, `archive`, `directory`,
  `entity` for hero/item/ability histories, `patch`, `not_found`). Each returns
  `(path under dist/, html)` pairs; `/hero/abrams` is written to `hero/abrams.html`.
- `src/mog.rs`: patch notes from `.mg` to HTML through the same renderer
  `vite-plugin-mog` used, plus the reading embeds the Vite build spliced in.
- `src/share.rs`: the stats band, current-details disclosures and previous-change
  links shared by entity and patch pages.
- `src/feed.rs`: the feed index tiers (`feed-index.json`, `feed-text.json`,
  `feed-groups.json`) the search island filters, and the prerendered feed pages.
- `src/hosting.rs`: `_redirects` (changelog aliases, with the lowercase guard),
  `_headers`, `sitemap.xml`.
- `templates/`: Askama templates. Keep them out of Prettier (`.prettierignore`);
  its HTML printer breaks their tags.
- `../../web/css`: the stylesheet, bundled and hashed by lightningcss. `app.css`,
  `changelog.css`, `entity.css` and `code.css` were extracted from the last SvelteKit
  build (UnoCSS output included), so class names in templates match what they styled.
- `../../web/js`: `site.js` on every page; `search.js`, the search island, loads on
  first use.

## Checks

- `cargo run -p deadlog-parity --bin parity -- <reference-dist> dist` compares two
  builds page by page on what they say and link to.
- `tests/feed_parity.rs` runs `web/js/search.js` in QuickJS against the SQL predicate
  the feed used to run, and against the prerendered feed pages.
- `e2e/` holds the Playwright suite, run against `serve --static`.
