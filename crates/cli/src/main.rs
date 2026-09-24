use std::path::PathBuf;

use anyhow::Result;
use clap::{Parser, Subcommand};
use deadlog_site::BuildOptions;

#[derive(Parser)]
#[command(name = "deadlog", about = "Build and serve deadlog.io")]
struct Cli {
    /// Repository root; paths default to their usual places under it.
    #[arg(long, global = true, default_value = ".")]
    root: PathBuf,
    #[command(subcommand)]
    command: Command,
}

#[derive(Subcommand)]
enum Command {
    /// Render the site into `dist/`.
    Build {
        #[arg(long)]
        db: Option<PathBuf>,
        #[arg(long, default_value = "dist")]
        out: PathBuf,
        /// Keep CSS readable and leave the analytics snippet out.
        #[arg(long)]
        dev: bool,
    },
    /// Scrape new patch notes into `app/changelogs`, then rebuild the database.
    Scrape {
        /// Skip the database build when the scrape wrote nothing, and report
        /// `changed=` to `$GITHUB_OUTPUT` for CI.
        #[arg(long)]
        if_changed: bool,
        /// Regenerate changelogs that already exist. Destructive.
        #[arg(long)]
        overwrite: bool,
        /// With --overwrite, also replace the files whose notes cannot be fetched again.
        #[arg(long)]
        overwrite_irreproducible: bool,
        /// Read heroes and items from `entities.json` without asking the asset API.
        #[arg(long)]
        offline_snapshot: bool,
    },
    /// Rebuild `deadlog.db` from the `.mg` files on disk.
    Db {
        #[arg(long)]
        offline_snapshot: bool,
    },
    /// Refresh the patch impact windows in the `.mg` files. Reads `deadlog.db`, so run
    /// `deadlog db` before and after.
    Stats {
        /// Recompute every window from the full match history.
        #[arg(long)]
        rebuild: bool,
    },
    /// Refresh the related-items reading for heroes in recent patches.
    Related {
        /// Only this patch id.
        #[arg(long)]
        patch: Option<String>,
        #[arg(long)]
        rebuild: bool,
    },
    /// Render the social preview images into `app/static/assets/meta`.
    Meta {
        #[arg(long)]
        db: Option<PathBuf>,
        #[arg(long)]
        out: Option<PathBuf>,
        /// Keep existing previews instead of clearing the directory first.
        #[arg(long)]
        keep: bool,
    },
    /// Serve the site locally, rebuilding on change.
    #[cfg(feature = "serve")]
    Serve {
        #[arg(long, default_value_t = 4180)]
        port: u16,
        /// Serve an existing `dist/` as-is, the way the host would.
        #[arg(long = "static")]
        static_only: bool,
        #[arg(long, default_value = "dist")]
        out: PathBuf,
    },
}

fn scrape(options: &deadlog_scraper::ScrapeOptions) {
    let outcome =
        deadlog_scraper::run(options).and_then(|outcome| deadlog_scraper::write_github_output(outcome.changed));
    if let Err(error) = outcome {
        eprintln!("\n❌ Build failed: {error:#}");
        std::process::exit(1);
    }
}

fn main() -> Result<()> {
    let cli = Cli::parse();
    match cli.command {
        Command::Build { db, out, dev } => {
            let mut options = BuildOptions::from_root(&cli.root);
            if let Some(db) = db {
                options.db = db;
            }
            options.minify = !dev;
            options.analytics = !dev;
            let (output, report) = deadlog_site::build(&options)?;
            output.write(&out)?;
            println!(
                "Rendered {} pages ({} files) into {} in {} ms",
                report.pages,
                report.files,
                out.display(),
                report.millis
            );
        }
        Command::Scrape { if_changed, overwrite, overwrite_irreproducible, offline_snapshot } => {
            let mut options = deadlog_scraper::ScrapeOptions::from_env(&cli.root);
            options.if_changed = if_changed;
            options.overwrite = overwrite;
            options.overwrite_irreproducible = overwrite_irreproducible;
            options.offline_snapshot = offline_snapshot;
            scrape(&options);
        }
        Command::Db { offline_snapshot } => {
            let mut options = deadlog_scraper::ScrapeOptions::from_env(&cli.root);
            options.db_only = true;
            options.offline_snapshot = offline_snapshot;
            scrape(&options);
        }
        Command::Stats { rebuild } => {
            let api = deadlog_stats::Api::live()?;
            deadlog_stats::stats(&deadlog_stats::Paths::from_root(&cli.root), rebuild, &api, deadlog_stats::now())?;
        }
        Command::Related { patch, rebuild } => {
            let api = deadlog_stats::Api::live()?;
            let args = deadlog_stats::RelatedArgs { rebuild, patch };
            deadlog_stats::related(&deadlog_stats::Paths::from_root(&cli.root), &args, &api, deadlog_stats::now())?;
        }
        Command::Meta { db, out, keep } => {
            let mut options = deadlog_meta::MetaOptions::from_root(&cli.root);
            if let Some(db) = db {
                options.db = db;
            }
            if let Some(out) = out {
                options.out = out;
            }
            options.clean = !keep;
            let report = deadlog_meta::generate(&options)?;
            println!("Generated {} changelog images", report.changelogs);
            println!("Generated {} hero images", report.heroes);
            println!("Generated {} item images", report.items);
            println!("Generated {} images in total in {} ms", report.total(), report.millis);
            if !report.failures.is_empty() {
                eprintln!("{} previews failed:", report.failures.len());
                for failure in &report.failures {
                    eprintln!("  {failure}");
                }
                std::process::exit(1);
            }
        }
        #[cfg(feature = "serve")]
        Command::Serve { port, static_only, out } => {
            deadlog_site::serve::run(BuildOptions::from_root(&cli.root), out, port, static_only)?;
        }
    }
    Ok(())
}
