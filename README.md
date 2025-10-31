# deadlog.io

A changelog site for Deadlock

## Tech Stack

- SvelteKit
- Tailwind CSS
- TypeScript
- Drizzle ORM
  - SQLite (`@libsql/client`)
  - Cloudflare D1 (`drizzle-orm/d1`)
- Playwright
- NX
- [Deadlock API](https://deadlock-api.com)

## Development

### Project Structure

This is an NX monorepo with the following structure:

```
apps/
  web/       # SvelteKit app
libs/
  scraper/   # Scraper & database builder
  meta/      # Meta preview image generation library
```

### Set up

```bash
# Enable direnv
direnv allow

# Install dependencies
npm install

# Run local dev server
nx dev web

# Format
nix fmt

# Check
nx check
```
