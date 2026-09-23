//! The deadlog.io data pipeline's front half: scrape the changelog forum and Steam
//! announcements into `.mg` files, then build `deadlog.db` from them.

pub mod api;
pub mod author;
pub mod content;
pub mod hero_abilities;
mod html;
pub mod http;
mod js;
pub mod pipeline;

use std::path::{Path, PathBuf};

use anyhow::{Context, Result};
use deadlog_db::write::snapshot::EntitySnapshot;
use deadlog_db::write::{BuildOptions, BuildResult, build_database};

use api::deadlock::{fetch_big_patch_days, fetch_client_version};
use api::snapshot::{entity_snapshot_path, load_entity_snapshot, read_entity_snapshot};
use content::capture_version::VersionCapture;
use http::{Http, ReqwestHttp};
use pipeline::{ScrapeConfig, now_iso, scrape_changelogs};

pub use pipeline::{IRREPRODUCIBLE_MARKER, ScrapeResult};

#[derive(Debug, Clone)]
pub struct ScrapeOptions {
    /// `--db-only`: rebuild the database from the `.mg` files on disk, no scraping.
    pub db_only: bool,
    /// `--if-changed`: skip the database build when the scrape wrote nothing.
    pub if_changed: bool,
    /// `--overwrite`: regenerate changelogs that already exist. Destructive.
    pub overwrite: bool,
    /// `--overwrite-irreproducible`: let `overwrite` replace the files marked
    /// [`IRREPRODUCIBLE_MARKER`], whose notes cannot be fetched again.
    pub overwrite_irreproducible: bool,
    /// `--offline-snapshot`: read heroes and items from `entities.json` without asking
    /// the asset API. The big-patch-day list still needs the network.
    pub offline_snapshot: bool,
    /// `CHANGELOGS_DIR`, default `app/changelogs`.
    pub changelogs_dir: PathBuf,
    /// `OUTPUT_DIR`, default `app/static`; `deadlog.db` lands here.
    pub output_dir: PathBuf,
    /// Scraped forum posts, default `lib/scraper/src/cache/posts`.
    pub cache_dir: PathBuf,
    /// Pause between forum requests.
    pub delay: std::time::Duration,
}

impl ScrapeOptions {
    /// Paths as the TypeScript CLI resolved them: `CHANGELOGS_DIR` and `OUTPUT_DIR`
    /// from the environment when set and non-empty, else their usual places under `root`.
    pub fn from_env(root: &Path) -> Self {
        let env_dir = |name: &str, default: &str| {
            std::env::var(name).ok().filter(|value| !value.is_empty()).map_or_else(|| root.join(default), PathBuf::from)
        };
        Self {
            db_only: false,
            if_changed: false,
            overwrite: false,
            overwrite_irreproducible: false,
            offline_snapshot: false,
            changelogs_dir: env_dir("CHANGELOGS_DIR", "app/changelogs"),
            output_dir: env_dir("OUTPUT_DIR", "app/static"),
            cache_dir: root.join(api::forum::POST_CACHE_DIR),
            delay: std::time::Duration::from_millis(500),
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RunOutcome {
    /// What `--if-changed` reports to CI: false only when a scrape wrote nothing and the
    /// build was skipped.
    pub changed: bool,
    pub result: Option<BuildResult>,
}

fn snapshot(http: &dyn Http, options: &ScrapeOptions) -> Result<EntitySnapshot> {
    if options.offline_snapshot {
        return read_entity_snapshot(&options.changelogs_dir)
            .with_context(|| format!("no usable snapshot at {}", entity_snapshot_path(&options.changelogs_dir).display()));
    }
    load_entity_snapshot(http, &options.changelogs_dir, &now_iso())
}

/// `deadlog db`: build `<output_dir>/deadlog.db` from the `.mg` files, with heroes and
/// items from the asset API (falling back to `entities.json`) and major-update days
/// from the patches API.
pub fn build_db(http: &dyn Http, options: &ScrapeOptions, snapshot: &EntitySnapshot) -> Result<BuildResult> {
    println!("🌐 Fetching data from Deadlock API...");
    let big_days = fetch_big_patch_days(http)?;
    let result = build_database(&BuildOptions {
        output_dir: options.output_dir.clone(),
        changelogs_dir: options.changelogs_dir.clone(),
        snapshot,
        big_days: &big_days,
        built_at: now_iso(),
    })?;
    println!("\n✨ Database built successfully!");
    println!("📦 File: {}", result.path.display());
    println!("📊 Changelogs: {}", result.patch_count);
    Ok(result)
}

/// The whole pipeline against the network, as `deadlog scrape` runs it.
pub fn run(options: &ScrapeOptions) -> Result<RunOutcome> {
    run_with(&ReqwestHttp::new()?, options)
}

/// `deadlog scrape [--if-changed] [--overwrite]` (and `deadlog db` with `db_only`):
/// load the entity snapshot once, scrape unless `db_only`, then build the database —
/// unless `if_changed` and the scrape changed nothing. Call [`write_github_output`]
/// with the outcome afterwards; on error, exit non-zero without writing it.
pub fn run_with(http: &dyn Http, options: &ScrapeOptions) -> Result<RunOutcome> {
    let snapshot = snapshot(http, options)?;

    if !options.db_only {
        println!("📝 Step 1: Scraping changelogs from forum...\n");
        let capture = fetch_client_version(http)
            .ok()
            .map(|client_version| VersionCapture { client_version, captured_at: now_iso() });
        let scrape = scrape_changelogs(&ScrapeConfig {
            http,
            changelogs_dir: options.changelogs_dir.clone(),
            cache_dir: options.cache_dir.clone(),
            overwrite: options.overwrite,
            overwrite_irreproducible: options.overwrite_irreproducible,
            snapshot: &snapshot,
            capture,
            delay: options.delay,
        })?;
        if options.if_changed && !scrape.changed {
            println!("No changelog changes; skipping the database build.");
            return Ok(RunOutcome { changed: false, result: None });
        }
        println!("\n🗄️  Step 2: Building database...\n");
    }

    let result = build_db(http, options, &snapshot)?;
    println!("\n✅ Build complete!");
    println!("   Database: {}", result.path.display());
    println!("   Changelogs: {}", result.patch_count);
    println!("   Hero refs: {}", result.hero_matches);
    println!("   Item refs: {}", result.item_matches);
    Ok(RunOutcome { changed: true, result: Some(result) })
}

/// Appends `changed=true|false` to `$GITHUB_OUTPUT` when it is set, for the workflow's
/// `steps.<id>.outputs.changed`.
pub fn write_github_output(changed: bool) -> Result<()> {
    let Some(path) = std::env::var_os("GITHUB_OUTPUT").filter(|path| !path.is_empty()) else { return Ok(()) };
    use std::io::Write;
    let mut file = std::fs::OpenOptions::new().create(true).append(true).open(&path)?;
    writeln!(file, "changed={changed}")?;
    Ok(())
}
