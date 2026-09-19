# deadlog.io

A searchable Deadlock patch archive with per-hero, per-item, and per-ability histories.

[![Deadlog homepage showing the latest Deadlock patch notes](docs/homepage.png)](https://deadlog.io)

## Tech Stack

- Drizzle ORM
  - SQLite (`@libsql/client`), read at build time only
- PNPM
- SvelteKit
- UnoCSS
- TypeScript
- Playwright
- [Deadlock API](https://deadlock-api.com)
- Mog (`.mg`) for patch contents

## Development

### Project Structure

This is a pnpm workspace with the following structure:

```
app/           # SvelteKit App
  src/         # routes and components
  changelogs/  # generated patch notes
  static/      # assets and generated deadlog.db
lib/
  db/          # schema, queries, and types
  changelog/   # change extraction
  scraper/     # forum/steam ingestion
  meta/        # social preview image generation
  utils/
scripts/
```

### Set up

```bash
# Enable direnv
direnv allow

# Install dependencies
pnpm install

# Run local dev server
pnpm dev

# Rebuild the database from existing patch files
pnpm build:db

# Fetch new patch notes and rebuild using one entity-data snapshot
pnpm build:scraper

# Skip rebuilding when scraping finds no content changes
pnpm build:scraper --if-changed

# Generate preview images
pnpm build:meta

# Refresh the README screenshot (targets prod)
pnpm screenshot

# Screenshot local instead
SCREENSHOT_URL=http://127.0.0.1:5173 pnpm screenshot

# Format
nix fmt

# Check
pnpm check
pnpm lint
pnpm test

# Build and run browser tests
pnpm build
pnpm test:e2e
```
