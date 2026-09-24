//! Social preview images (`og:image`) for every page that has one, rendered with takumi
//! from the same node trees the TypeScript generator built with `@takumi-rs/core`.

use std::path::{Path, PathBuf};
use std::time::Instant;

use anyhow::{Context, Result};
use deadlog_db::Snapshot;

mod components;
mod generate;
mod images;
mod inputs;
mod layouts;
mod node;
mod render;
mod text;
mod theme;

#[cfg(test)]
mod tests;

pub use generate::CONCURRENCY;

pub struct MetaOptions {
    pub db: PathBuf,
    pub fonts: PathBuf,
    /// Receives `index.png`, `change/<id>.png`, `hero/<slug>.png` and `item/<slug>.png`.
    pub out: PathBuf,
    /// Empty `out` first, so previews for renamed or removed entities do not linger.
    pub clean: bool,
}

impl MetaOptions {
    pub fn from_root(root: &Path) -> Self {
        Self {
            db: root.join("app/static/deadlog.db"),
            fonts: root.join("app/static/fonts"),
            out: root.join("app/static/assets/meta"),
            clean: true,
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub struct Report {
    pub home: usize,
    pub changelogs: usize,
    pub heroes: usize,
    pub items: usize,
    /// Sorted labels of the previews that were not written, e.g. `hero preview Abrams`.
    pub failures: Vec<String>,
    pub millis: u128,
}

impl Report {
    pub fn total(&self) -> usize {
        self.home + self.changelogs + self.heroes + self.items
    }
}

/// Renders every preview. Setup errors (database, fonts, output directory) are `Err`;
/// a preview that fails is logged, listed in [`Report::failures`], and the rest carry on.
pub fn generate(options: &MetaOptions) -> Result<Report> {
    let started = Instant::now();
    let snapshot = Snapshot::open(&options.db)?;
    let renderer = render::Renderer::new(&options.fonts)?;
    if options.clean && options.out.exists() {
        std::fs::remove_dir_all(&options.out).with_context(|| format!("clearing {}", options.out.display()))?;
    }
    let fetch = images::http_fetcher();
    let inputs = inputs::Inputs::from_snapshot(&snapshot);
    let report = generate::run(&inputs, &generate::Run::new(&renderer, &fetch, &options.out));
    Ok(Report { millis: started.elapsed().as_millis(), ..report })
}
