# deadlog.io

A searchable Deadlock patch archive with per-hero, per-item, and per-ability histories.

[![Deadlog homepage showing the latest Deadlock patch notes](docs/homepage.png)](https://deadlog.io)

## Tech Stack

- Rust: one `deadlog` binary for the pipeline and the static site
- SQLite (`rusqlite`), read at build time only
- Askama templates, lightningcss, a small vanilla-JS search island
- Mog (`.mg`) for patch contents
- takumi for social preview images
- Playwright for browser tests
- [Deadlock API](https://deadlock-api.com)
- Cloudflare Workers static assets

## Development

### Project Structure

```
crates/
  cli/         # the `deadlog` binary
  site/        # static site generator and local server
  changelog/   # .mg parsing and change extraction
  db/          # deadlog.db schema, reader and writer
  scraper/     # forum/Steam ingestion and the Deadlock asset API
  stats/       # patch impact windows from Deadlock API match data
  meta/        # social preview images
  model/       # shared types and helpers
  parity/      # page-parity checker between two builds
web/           # CSS and JS the site ships
app/
  changelogs/  # patch notes (.mg), the pipeline's source of truth
  static/      # static files and the generated deadlog.db
e2e/           # Playwright suite
```

### Set up

```bash
# Enable direnv (Rust toolchain, sqlite, Node for Playwright)
direnv allow

# Rebuild the database from existing patch files
cargo run --release -- db

# Fetch new patch notes, then rebuild the database
cargo run --release -- scrape
cargo run --release -- scrape --if-changed   # skip the rebuild when nothing changed

# Refresh open patch impact windows in the .mg files
cargo run --release -- stats
cargo run --release -- stats --rebuild       # recompute every window
cargo run --release -- related

# Generate preview images
cargo run --release -- meta

# Build the site into dist/, or serve it with live reload
cargo run --release -- build
cargo run -- serve

# Format and check
nix fmt
nix flake check
cargo test --workspace

# Browser tests against dist/
cd e2e && npm ci && npx playwright test
```
