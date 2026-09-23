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
        #[cfg(feature = "serve")]
        Command::Serve { port, static_only, out } => {
            deadlog_site::serve::run(BuildOptions::from_root(&cli.root), out, port, static_only)?;
        }
    }
    Ok(())
}
