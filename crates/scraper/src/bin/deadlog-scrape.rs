//! Throwaway harness mirroring `tsx lib/scraper/src/cli.ts`, until `deadlog scrape` and
//! `deadlog db` are wired into crates/cli.

fn main() {
    let args: Vec<String> = std::env::args().skip(1).collect();
    let flag = |name: &str| args.iter().any(|arg| arg == name);
    let mut options = deadlog_scraper::ScrapeOptions::from_env(std::path::Path::new("."));
    options.db_only = flag("--db-only");
    options.if_changed = flag("--if-changed");
    options.overwrite = flag("--overwrite");
    options.overwrite_irreproducible = flag("--overwrite-irreproducible");
    options.offline_snapshot = flag("--offline-snapshot");
    if let Ok(cache) = std::env::var("POST_CACHE_DIR") {
        options.cache_dir = cache.into();
    }
    let outcome = deadlog_scraper::run(&options)
        .and_then(|outcome| deadlog_scraper::write_github_output(outcome.changed));
    if let Err(error) = outcome {
        eprintln!("\n❌ Build failed: {error:#}");
        std::process::exit(1);
    }
}
