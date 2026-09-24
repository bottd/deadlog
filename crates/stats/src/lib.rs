//! Patch impact and reading enrichment from the Deadlock analytics API, written into
//! the `.mg` changelogs as `attr` blocks.

pub mod ability_order;
pub mod constants;
pub mod fetch;
pub mod read;
pub mod rewrite;
pub mod run;
pub mod run_related;
pub mod select_related;
pub mod types;
pub mod windows;

use std::path::{Path, PathBuf};

use anyhow::{Result, bail};
use deadlog_db::Snapshot;

pub use fetch::Api;

/// Where both commands read and write, from the repository root by default.
#[derive(Debug, Clone, PartialEq)]
pub struct Paths {
    /// `app/static/deadlog.db`, built by `deadlog db`.
    pub db: PathBuf,
    /// `app/changelogs`, the only store the commands write.
    pub changelogs: PathBuf,
}

impl Paths {
    pub fn from_root(root: &Path) -> Self {
        Self { db: root.join("app/static/deadlog.db"), changelogs: root.join("app/changelogs") }
    }

    fn snapshot(&self) -> Result<Snapshot> {
        if !self.db.exists() {
            bail!("Database not found at {}. Run deadlog db first.", self.db.display());
        }
        Snapshot::open(&self.db)
    }
}

/// Unix seconds, the `now` both commands take.
pub fn now() -> i64 {
    chrono::Utc::now().timestamp()
}

/// `deadlog stats [--rebuild]` (was `pnpm run build:stats`).
///
/// Reads the patches, their touched heroes and items and what is already recorded from
/// the database, so `deadlog db` must run first and again afterwards to pick the new
/// blocks up. A routine run fetches from the earliest stale patch (a window still open,
/// or an entity recorded open) and rewrites only files whose text changes; a closed
/// block is never touched. `--rebuild` recomputes every window from the full history and
/// rewrites closed blocks too, also removing a block whose entity no longer has data.
///
/// Prints `   Stats: …` summaries to stdout. A failed fetch is reported on stderr,
/// leaves every file untouched and still returns `Ok` (exit 0). A missing database,
/// changelog file or entity block is an `Err` (exit 1).
pub fn stats(paths: &Paths, rebuild: bool, api: &Api, now: i64) -> Result<()> {
    let inputs = read::read_patches(&paths.snapshot()?)?;
    run::run(
        &run::RunOptions { changelogs_dir: &paths.changelogs, rebuild, now },
        inputs,
        &mut |range| api.fetch_all_series(range),
        &mut |message| println!("{message}"),
    )
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct RelatedArgs {
    pub rebuild: bool,
    pub patch: Option<String>,
}

impl RelatedArgs {
    /// The TypeScript CLI's argument rules: `--rebuild` and `--patch=<id>`, nothing else.
    pub fn parse(args: &[String]) -> Result<Self> {
        if let Some(unknown) = args.iter().find(|arg| *arg != "--rebuild" && !arg.starts_with("--patch=")) {
            bail!("Unknown argument {unknown}. Use --patch=<patch id> or --rebuild.");
        }
        Ok(Self {
            rebuild: args.iter().any(|arg| arg == "--rebuild"),
            patch: args.iter().find_map(|arg| arg.strip_prefix("--patch=")).map(str::to_string),
        })
    }
}

/// `deadlog related [--patch=<id>] [--rebuild]` (was `pnpm run build:related`).
///
/// Records, per patch, related items and ability order on changed hero blocks and
/// bought-by on changed item blocks, plus the root `stats` node when the patch has
/// none. A routine run covers the newest patch day, patches whose window is open or
/// settling (`READING_SETTLE_DAYS` after it closes) and patches of the last
/// `RELATED_RETRY_DAYS` with a hero not yet recorded; elsewhere a record stays until its
/// method or the patch's changed items change. `--patch=<id>` targets one patch (an
/// unknown id, or one with nothing to relate, is an `Err`); `--rebuild` recomputes every
/// eligible patch, one request per changed item per patch.
///
/// A failed request leaves that patch's file untouched, is reported on stderr and
/// counted in the `   Related: …` summary; the command still returns `Ok`. The stats
/// workflow runs it with `continue-on-error`.
pub fn related(paths: &Paths, args: &RelatedArgs, api: &Api, now: i64) -> Result<()> {
    let inputs = read::read_related_patches(&paths.snapshot()?)?;
    run_related::run_related_items(
        &run_related::RelatedRunOptions {
            changelogs_dir: &paths.changelogs,
            now,
            rebuild: args.rebuild,
            patch_id: args.patch.as_deref(),
        },
        inputs,
        api,
        &mut |message| println!("{message}"),
    )
}
