//! One module per page family. Each returns `(path under dist/, html)` pairs.

pub mod archive;
pub mod directory;
pub mod entity;
pub mod home;
pub mod not_found;
pub mod patch;

use std::path::Path;

use anyhow::Result;
use rayon::prelude::*;

use crate::{Assets, Site};

pub type Page = (String, String);

pub fn render_all(site: &Site, assets: &Assets, changelogs: &Path) -> Result<Vec<Page>> {
    let families: Vec<Box<dyn Fn() -> Result<Vec<Page>> + Sync + '_>> = vec![
        Box::new(|| home::render(site, assets)),
        Box::new(|| archive::render(site, assets)),
        Box::new(|| directory::render(site, assets)),
        Box::new(|| entity::render(site, assets)),
        Box::new(|| patch::render(site, assets, changelogs)),
        Box::new(|| not_found::render(site, assets)),
    ];
    let rendered: Vec<Vec<Page>> = families.par_iter().map(|family| family()).collect::<Result<_>>()?;
    Ok(rendered.into_iter().flatten().collect())
}

/// `dist/` file for a route: `/hero/abrams` is served from `hero/abrams.html`.
pub fn file_for(route: &str) -> String {
    match route.trim_matches('/') {
        "" => "index.html".into(),
        path => format!("{path}.html"),
    }
}
