use std::path::{Path, PathBuf};

use anyhow::Result;
use deadlog_db::write::snapshot::{EntitySnapshot, read_snapshot, serialize_snapshot, without_collection_time};

use super::deadlock::fetch_entity_snapshot;
use crate::http::Http;

pub fn entity_snapshot_path(changelogs_dir: &Path) -> PathBuf {
    changelogs_dir.join("entities.json")
}

/// Writes through a staging file so a crash cannot leave a half-written snapshot.
pub fn write_entity_snapshot(changelogs_dir: &Path, snapshot: &EntitySnapshot) -> Result<PathBuf> {
    let target = entity_snapshot_path(changelogs_dir);
    let staging = PathBuf::from(format!("{}.{}.tmp", target.display(), std::process::id()));
    std::fs::create_dir_all(changelogs_dir)?;
    std::fs::write(&staging, serialize_snapshot(snapshot)?)?;
    std::fs::rename(&staging, &target)?;
    Ok(target)
}

/// The committed snapshot, or `None` when it is missing or not usable.
pub fn read_entity_snapshot(changelogs_dir: &Path) -> Option<EntitySnapshot> {
    let path = entity_snapshot_path(changelogs_dir);
    let raw = std::fs::read_to_string(&path).ok()?;
    match read_snapshot(&raw) {
        Ok(snapshot) => Some(snapshot),
        Err(_) => {
            eprintln!("   ⚠️  {} is not a usable snapshot", path.display());
            None
        }
    }
}

/// Heroes and items for this build: the live API when it answers, refreshing
/// `entities.json` when the API moved on; otherwise the committed snapshot, so an API
/// outage never blocks a build. A refresh that differs only in its collection time
/// keeps the committed file, and its timestamp, untouched.
pub fn load_entity_snapshot(http: &dyn Http, changelogs_dir: &Path, now: &str) -> Result<EntitySnapshot> {
    let fetched = fetch_entity_snapshot(http, now);
    let cached = read_entity_snapshot(changelogs_dir);
    match fetched {
        Ok(snapshot) => {
            if let Some(cached) = cached
                && without_collection_time(&cached)? == without_collection_time(&snapshot)?
            {
                return Ok(cached);
            }
            write_entity_snapshot(changelogs_dir, &snapshot)?;
            Ok(snapshot)
        }
        Err(error) => {
            let Some(cached) = cached else { return Err(error) };
            eprintln!("   ⚠️  Deadlock asset API unreachable ({error})");
            eprintln!("   ↩️  Falling back to {}", entity_snapshot_path(changelogs_dir).display());
            Ok(cached)
        }
    }
}
