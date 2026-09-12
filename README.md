# deadlog.io

A searchable Deadlock patch archive with per-hero, per-item, and per-ability histories.

[![Deadlog homepage showing the latest Deadlock patch notes](docs/homepage.png)](https://deadlog.io)

## Tech Stack

- Drizzle ORM
  - SQLite (`@libsql/client`)
  - Cloudflare D1 (`drizzle-orm/d1`)
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
app/
  src/         # SvelteKit routes and UI
  changelogs/  # Authored/generated .mg patch notes
  static/      # Site assets and generated deadlog.db
lib/
  db/          # Schema, SQLite/D1 clients, read queries, and feed types
  changelog/   # Mog metadata and structured change extraction
  scraper/     # Forum/Steam ingestion and transactional database builder
  meta/        # Social preview generation
  utils/       # Shared entity names/images, dates, and content helpers
scripts/       # Development utilities
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

# Skip rebuilding when scraping finds no content changes (used by the scheduler)
pnpm build:scraper --if-changed

# Generate preview images
pnpm build:meta

# Refresh the README screenshot (prod)
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
