//! Collected build output: every page and file the site ships, keyed by its path
//! under `dist/`. Keeping it in memory lets `serve` answer from the same build.

use std::collections::BTreeMap;
use std::fs;
use std::path::{Path, PathBuf};

use anyhow::{Context, Result, bail};

#[derive(Debug, Clone)]
pub enum Content {
    Bytes(Vec<u8>),
    File(PathBuf),
}

#[derive(Debug, Default)]
pub struct Output {
    files: BTreeMap<String, Content>,
}

impl Output {
    pub fn add(&mut self, path: &str, bytes: impl Into<Vec<u8>>) {
        self.files.insert(path.trim_start_matches('/').to_string(), Content::Bytes(bytes.into()));
    }

    pub fn copy(&mut self, path: &str, source: PathBuf) {
        self.files.entry(path.trim_start_matches('/').to_string()).or_insert(Content::File(source));
    }

    pub fn extend(&mut self, pages: impl IntoIterator<Item = (String, String)>) -> Result<()> {
        for (path, html) in pages {
            if self.files.contains_key(&path) {
                bail!("two pages render to {path}");
            }
            self.add(&path, html);
        }
        Ok(())
    }

    pub fn get(&self, path: &str) -> Option<&Content> {
        self.files.get(path.trim_start_matches('/'))
    }

    pub fn len(&self) -> usize {
        self.files.len()
    }

    pub fn is_empty(&self) -> bool {
        self.files.is_empty()
    }

    /// Replaces `dir` wholesale so a removed page cannot linger from an older build.
    pub fn write(&self, dir: &Path) -> Result<()> {
        if dir.exists() {
            fs::remove_dir_all(dir).with_context(|| format!("clearing {}", dir.display()))?;
        }
        for (path, content) in &self.files {
            let target = dir.join(path);
            if let Some(parent) = target.parent() {
                fs::create_dir_all(parent)?;
            }
            match content {
                Content::Bytes(bytes) => fs::write(&target, bytes),
                Content::File(source) => fs::copy(source, &target).map(|_| ()),
            }
            .with_context(|| format!("writing {}", target.display()))?;
        }
        Ok(())
    }
}
