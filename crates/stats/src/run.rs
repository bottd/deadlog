use std::collections::{HashMap, HashSet};
use std::path::Path;

use anyhow::{Context, Result, bail};
use deadlog_model::PatchStats;

use crate::constants::{DAY_S, METHOD_VERSION, WINDOW_CAP_DAYS};
use crate::read::{PatchInputs, RecordedEntity, StatsPatch};
use crate::rewrite::{EntityIndex, upsert_impact_blocks};
use crate::types::{AllSeries, TimeRange};
use crate::windows::{PatchRef, TouchedEntity, patch_bounds, slice_windows, window_days};

pub struct RunOptions<'a> {
    pub changelogs_dir: &'a Path,
    pub rebuild: bool,
    pub now: i64,
}

const LOOKBACK_S: i64 = (WINDOW_CAP_DAYS + 2) * DAY_S;

fn is_frozen(entity: &RecordedEntity) -> bool {
    entity.recorded.as_ref().is_some_and(|recorded| recorded.closed)
}

pub(crate) fn refs(patches: &[StatsPatch]) -> Vec<PatchRef> {
    patches.iter().map(StatsPatch::to_ref).collect()
}

pub(crate) fn iso_time(now: i64) -> String {
    chrono::DateTime::from_timestamp(now, 0)
        .map(|date| date.format("%Y-%m-%dT%H:%M:%S%.3fZ").to_string())
        .unwrap_or_default()
}

/// Patches whose window is still open, or that recorded an entity as open.
pub fn stale_patch_ids(
    patches: &[StatsPatch],
    touched: &HashMap<String, Vec<RecordedEntity>>,
    now: i64,
) -> Vec<String> {
    let refs = refs(patches);
    patches
        .iter()
        .enumerate()
        .filter(|(index, patch)| {
            let open = touched
                .get(&patch.id)
                .is_some_and(|list| list.iter().any(|entity| entity.recorded.as_ref().is_some_and(|r| !r.closed)));
            open || !window_days(&refs, *index, now).closed
        })
        .map(|(_, patch)| patch.id.clone())
        .collect()
}

fn is_current(patch: &StatsPatch) -> bool {
    patch.stats.as_ref().is_some_and(|stats| stats.schema_version == 2 && stats.method_version == METHOD_VERSION)
}

/// One stats run over `inputs`. A failed fetch is reported and leaves every file as it
/// was; the run still succeeds, so a flaky API never fails the job.
pub fn run(
    options: &RunOptions,
    inputs: PatchInputs,
    fetch_all: &mut dyn FnMut(TimeRange) -> Result<AllSeries>,
    log: &mut dyn FnMut(&str),
) -> Result<()> {
    let RunOptions { changelogs_dir, rebuild, now } = *options;
    let PatchInputs { patches, touched, entities } = inputs;
    if patches.is_empty() {
        bail!("No patches in the database");
    }
    let recorded_in =
        |patch: &StatsPatch| touched.get(&patch.id).is_some_and(|list| list.iter().any(|e| e.recorded.is_some()));

    let any_recorded = touched.values().any(|list| list.iter().any(|entity| entity.recorded.is_some()));
    let full = rebuild || !any_recorded;
    let wanted_ids: HashSet<String> = if full {
        patches.iter().map(|patch| patch.id.clone()).collect()
    } else {
        stale_patch_ids(&patches, &touched, now).into_iter().collect()
    };
    let wanted: Vec<(usize, &StatsPatch)> =
        patches.iter().enumerate().filter(|(_, patch)| wanted_ids.contains(&patch.id)).collect();
    let Some((_, first)) = wanted.first() else {
        log("   Stats: every window is closed, nothing to refresh");
        return Ok(());
    };

    let series = match fetch_all(TimeRange { from: first.at - LOOKBACK_S, to: now }) {
        Ok(series) => series,
        Err(error) => {
            eprintln!("   Stats: fetch failed, changelogs left untouched: {error:#}");
            return Ok(());
        }
    };

    let refresh: HashMap<String, Vec<TouchedEntity>> = wanted
        .iter()
        .map(|(_, patch)| {
            let entities = touched
                .get(&patch.id)
                .map(|list| {
                    list.iter()
                        .filter(|entity| rebuild || !is_current(patch) || !is_frozen(entity))
                        .map(|entity| TouchedEntity { kind: entity.kind, id: entity.id })
                        .collect()
                })
                .unwrap_or_default();
            (patch.id.clone(), entities)
        })
        .collect();
    let refs = refs(&patches);
    let sliced = slice_windows(&refs, &refresh, &series, now);
    let index = EntityIndex::new(&entities);

    let mut files = 0;
    let mut blocks = 0;
    let collected_at = iso_time(now);
    for &(position, patch) in &wanted {
        let impacts = sliced.iter().find(|(id, _)| *id == patch.id).map_or(&[][..], |(_, list)| list.as_slice());
        let whole_file = rebuild || !is_current(patch);
        if impacts.is_empty() && !(whole_file && recorded_in(patch)) {
            continue;
        }
        let bounds = patch_bounds(&refs, position, now);
        let stats_at = |at: &str| PatchStats {
            schema_version: 2,
            method_version: METHOD_VERSION,
            collected_at: at.to_string(),
            before: bounds.before.clone(),
            after: bounds.after.clone(),
            siblings: bounds.siblings.clone(),
        };

        let path = changelogs_dir.join(format!("{}.mg", patch.slug));
        if !path.exists() {
            bail!("Changelog file not found: {}", path.display());
        }
        let source = std::fs::read_to_string(&path)?;
        let write = |at: &str| upsert_impact_blocks(&source, impacts, &index, Some(&stats_at(at)), whole_file);
        let next = (|| {
            let previous = patch.stats.as_ref().map_or(collected_at.as_str(), |stats| stats.collected_at.as_str());
            let next = write(previous)?;
            if next != source { write(&collected_at) } else { Ok(next) }
        })()
        .with_context(|| format!("Failed to write patch impact into {}", path.display()))?;
        if next == source {
            continue;
        }

        write_atomically(&path, &next)?;
        files += 1;
        blocks += impacts.len();
    }

    let legacy = patches
        .iter()
        .filter(|patch| !wanted_ids.contains(&patch.id) && !is_current(patch) && recorded_in(patch))
        .count();
    if legacy > 0 {
        log(&format!(
            "   Stats: {legacy} closed changelogs hold an older method; run with --rebuild to recompute them"
        ));
    }

    log(&if files == 0 {
        "   Stats: no change".to_string()
    } else {
        format!(
            "   Stats: {files} changelogs updated, {blocks} blocks written, refreshed {} {}",
            wanted.len(),
            if full { "(full rebuild)" } else { "open" }
        )
    });
    Ok(())
}

pub(crate) fn write_atomically(path: &Path, text: &str) -> Result<()> {
    let mut temporary = path.as_os_str().to_owned();
    temporary.push(".tmp");
    std::fs::write(&temporary, text)?;
    std::fs::rename(&temporary, path)?;
    Ok(())
}
