//! The deadlog.io static site: every page is a plain function of the database and the
//! `.mg` changelogs, rendered once at build time.

pub mod assets;
pub mod context;
pub mod feed;
pub mod hosting;
pub mod meta;
pub mod mog;
pub mod output;
pub mod pages;
#[cfg(feature = "serve")]
pub mod serve;
pub mod share;

use std::path::PathBuf;
use std::time::Instant;

use anyhow::Result;
use deadlog_db::Snapshot;

pub use assets::Assets;
pub use context::Site;
pub use meta::Meta;
pub use output::Output;

/// What every page hands the base template.
pub struct Layout<'a> {
    pub meta: Meta,
    /// The page's own path, for the header's current-section marker.
    pub path: String,
    pub assets: &'a Assets,
}

impl<'a> Layout<'a> {
    pub fn new(assets: &'a Assets, path: impl Into<String>, meta: Meta) -> Self {
        Self { meta, path: path.into(), assets }
    }
}

#[derive(Debug, Clone)]
pub struct BuildOptions {
    pub db: PathBuf,
    pub changelogs: PathBuf,
    pub web: PathBuf,
    pub static_dir: PathBuf,
    pub minify: bool,
    pub analytics: bool,
}

impl BuildOptions {
    /// Paths relative to the repository root.
    pub fn from_root(root: impl Into<PathBuf>) -> Self {
        let root = root.into();
        Self {
            db: root.join("app/static/deadlog.db"),
            changelogs: root.join("app/changelogs"),
            web: root.join("web"),
            static_dir: root.join("app/static"),
            minify: true,
            analytics: true,
        }
    }
}

pub struct BuildReport {
    pub pages: usize,
    pub files: usize,
    pub millis: u128,
}

pub fn build(options: &BuildOptions) -> Result<(Output, BuildReport)> {
    let started = Instant::now();
    let snapshot = Snapshot::open(&options.db)?;
    let site = Site::new(&snapshot);
    let mut output = Output::default();

    assets::copy_static(&options.static_dir, &mut output)?;
    let dirs = assets::WebDirs {
        css: options.web.join("css"),
        js: options.web.join("js"),
        static_dir: options.static_dir.clone(),
    };
    let assets = assets::build_assets(
        &dirs,
        &assets::AssetOptions { minify: options.minify, analytics: options.analytics },
        &mut output,
    )?;

    let pages = pages::render_all(&site, &assets, &options.changelogs)?;
    let page_count = pages.len();
    output.extend(pages)?;
    feed::write_tiers(&site, &mut output)?;
    hosting::write(&site, &mut output)?;

    let report = BuildReport { pages: page_count, files: output.len(), millis: started.elapsed().as_millis() };
    Ok((output, report))
}
