use std::path::Path;

use anyhow::Result;

use super::Page;
use crate::{Assets, Site};

pub fn render(_site: &Site, _assets: &Assets, _changelogs: &Path) -> Result<Vec<Page>> {
    Ok(Vec::new())
}
