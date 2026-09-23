//! CSS and JS bundling. Files are content-hashed into `/_assets/`, which `_headers`
//! serves as immutable; everything else in `static/` keeps its path.

use std::fs;
use std::path::{Path, PathBuf};

use anyhow::{Context, Result, anyhow};
use lightningcss::bundler::{Bundler, FileProvider};
use lightningcss::stylesheet::{MinifyOptions, ParserOptions, PrinterOptions};
use lightningcss::targets::{Browsers, Targets};
use sha2::{Digest, Sha256};

use crate::output::Output;

pub const ASSET_DIR: &str = "_assets";

#[derive(Debug, Clone)]
pub struct Analytics {
    pub site_id: String,
    pub src: String,
}

#[derive(Debug, Clone)]
pub struct Assets {
    pub css: String,
    pub js: String,
    pub speculation_rules: String,
    pub analytics: Option<Analytics>,
}

fn short_hash(bytes: &[u8]) -> String {
    let digest = Sha256::digest(bytes);
    digest.iter().take(5).map(|byte| format!("{byte:02x}")).collect()
}

fn hashed(output: &mut Output, stem: &str, extension: &str, bytes: Vec<u8>) -> String {
    let path = format!("{ASSET_DIR}/{stem}.{}.{extension}", short_hash(&bytes));
    output.add(&path, bytes);
    format!("/{path}")
}

/// Browsers the site supports: the last two years of evergreen releases. Nesting,
/// `color-mix` and `oklch(from …)` pass through, so the targets only lower syntax.
fn targets() -> Targets {
    Targets::from(Browsers {
        chrome: Some(120 << 16),
        edge: Some(120 << 16),
        firefox: Some(121 << 16),
        safari: Some((17 << 16) | (2 << 8)),
        ios_saf: Some((17 << 16) | (2 << 8)),
        ..Browsers::default()
    })
}

pub fn bundle_css(entry: &Path, minify: bool) -> Result<String> {
    let provider = FileProvider::new();
    let mut bundler = Bundler::new(&provider, None, ParserOptions::default());
    let mut sheet = bundler.bundle(entry).map_err(|error| anyhow!("bundling {}: {error}", entry.display()))?;
    sheet
        .minify(MinifyOptions { targets: targets(), ..MinifyOptions::default() })
        .map_err(|error| anyhow!("minifying {}: {error}", entry.display()))?;
    let css = sheet
        .to_css(PrinterOptions { minify, targets: targets(), ..PrinterOptions::default() })
        .map_err(|error| anyhow!("printing {}: {error}", entry.display()))?;
    Ok(css.code)
}

pub struct WebDirs {
    pub css: PathBuf,
    pub js: PathBuf,
    pub static_dir: PathBuf,
}

pub struct AssetOptions {
    pub minify: bool,
    pub analytics: bool,
}

pub fn build_assets(dirs: &WebDirs, options: &AssetOptions, output: &mut Output) -> Result<Assets> {
    let css = bundle_css(&dirs.css.join("site.css"), options.minify)?;
    let css = hashed(output, "site", "css", css.into_bytes());

    let read = |name: &str| {
        fs::read_to_string(dirs.js.join(name)).with_context(|| format!("reading web/js/{name}"))
    };
    let search = hashed(output, "search", "js", read("search.js")?.into_bytes());
    let site = read("site.js")?.replace("__SEARCH_MODULE__", &search);
    let js = hashed(output, "site", "js", site.into_bytes());

    Ok(Assets {
        css,
        js,
        speculation_rules: speculation_rules(),
        analytics: options.analytics.then(|| Analytics {
            site_id: "deadlog-io".into(),
            src: "https://a.drake.dev/tracker.js".into(),
        }),
    })
}

/// Hover prefetches any internal page; entity pages, the likeliest next step from a
/// list, are prerendered on a firmer hover.
fn speculation_rules() -> String {
    serde_json::json!({
        "prefetch": [{
            "where": { "and": [{ "href_matches": "/*" }, { "not": { "href_matches": "/_assets/*" } }] },
            "eagerness": "moderate"
        }],
        "prerender": [{
            "where": { "href_matches": ["/hero/*", "/item/*", "/ability/*"] },
            "eagerness": "conservative"
        }]
    })
    .to_string()
}

/// Everything under `static/` is copied as-is; the SQLite file never ships.
pub fn copy_static(dir: &Path, output: &mut Output) -> Result<()> {
    fn walk(root: &Path, dir: &Path, output: &mut Output) -> Result<()> {
        for entry in fs::read_dir(dir).with_context(|| format!("reading {}", dir.display()))? {
            let path = entry?.path();
            if path.is_dir() {
                walk(root, &path, output)?;
            } else if path.extension().is_none_or(|extension| extension != "db") {
                let relative = path.strip_prefix(root)?.to_string_lossy().replace('\\', "/");
                output.copy(&relative, path.clone());
            }
        }
        Ok(())
    }
    walk(dir, dir, output)
}
