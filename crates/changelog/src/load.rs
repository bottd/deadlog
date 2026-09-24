use std::path::{Path, PathBuf};

use anyhow::{Context, Result};
use deadlog_model::parse_js_date;

use crate::extract::{extract_entities, parse_structure};
use crate::schema::{ChangelogMetadata, ParsedChangelog};

fn same_source(left: &ParsedChangelog, right: &ParsedChangelog) -> bool {
    let (left_meta, right_meta) = (&left.metadata, &right.metadata);
    let empty = |id: &Option<String>| id.as_deref().is_none_or(str::is_empty);
    (left_meta.steam_gid.is_some() && left_meta.steam_gid == right_meta.steam_gid)
        || (left_meta.thread_id.is_some() && left_meta.thread_id == right_meta.thread_id)
        || (empty(&left_meta.steam_gid)
            && empty(&left_meta.thread_id)
            && empty(&right_meta.steam_gid)
            && empty(&right_meta.thread_id)
            && left.slug == right.slug)
}

fn source_count(changelog: &ParsedChangelog) -> usize {
    let present = |id: &Option<String>| usize::from(id.as_deref().is_some_and(|id| !id.is_empty()));
    present(&changelog.metadata.thread_id) + present(&changelog.metadata.steam_gid)
}

/// Merges changelogs that share a forum thread or Steam post into the one with the most
/// sources, keeping every other slug as an alias.
pub fn deduplicate_changelogs(changelogs: Vec<ParsedChangelog>) -> Vec<ParsedChangelog> {
    let mut unique: Vec<ParsedChangelog> = Vec::new();
    for changelog in changelogs {
        let matches: Vec<usize> = unique
            .iter()
            .enumerate()
            .filter(|(_, current)| same_source(&changelog, current))
            .map(|(index, _)| index)
            .collect();
        if matches.is_empty() {
            unique.push(changelog);
            continue;
        }

        let mut candidates: Vec<&ParsedChangelog> = matches.iter().map(|index| &unique[*index]).collect();
        candidates.push(&changelog);
        let preferred = candidates
            .iter()
            .copied()
            .reduce(|best, candidate| if source_count(candidate) > source_count(best) { candidate } else { best })
            .expect("at least one candidate");
        let mut aliases = vec![preferred.slug.clone()];
        for alias in candidates.iter().flat_map(|candidate| &candidate.aliases) {
            if !aliases.contains(alias) {
                aliases.push(alias.clone());
            }
        }
        let merged = ParsedChangelog { aliases, ..preferred.clone() };
        unique[matches[0]] = merged;
        for index in matches[1..].iter().rev() {
            unique.remove(*index);
        }
    }
    unique
}

/// Every `.mg` under `dir`, shallowest first and then by name, as Node's recursive
/// `readdirSync` lists them.
fn find_mog_files(dir: &Path) -> Result<Vec<PathBuf>> {
    let mut files = Vec::new();
    let mut queue = vec![dir.to_path_buf()];
    while !queue.is_empty() {
        let mut next = Vec::new();
        for current in queue {
            let mut entries: Vec<PathBuf> = std::fs::read_dir(&current)
                .with_context(|| format!("reading {}", current.display()))?
                .map(|entry| entry.map(|entry| entry.path()))
                .collect::<std::io::Result<_>>()?;
            entries.sort();
            for path in entries {
                if path.is_dir() {
                    next.push(path);
                } else if path.extension().is_some_and(|extension| extension == "mg") {
                    files.push(path);
                }
            }
        }
        queue = next;
    }
    Ok(files)
}

/// The patch's own screenshot, from the images `parse_structure` found outside every
/// block — an entity portrait is chrome and would otherwise win by being first.
pub fn extract_preview_image(images: &[String]) -> Option<String> {
    images
        .iter()
        .find(|candidate| {
            let Ok(url) = url::Url::parse(candidate) else { return false };
            let path = url.path().to_lowercase();
            matches!(url.scheme(), "http" | "https") && !path.ends_with(".ico") && !path.contains("favicon")
        })
        .cloned()
}

pub fn load_changelog(changelogs_dir: &Path, filepath: &Path) -> Result<ParsedChangelog> {
    let content = std::fs::read_to_string(filepath)?;
    let structure = parse_structure(&content)?;
    let metadata = ChangelogMetadata::parse(&structure.metadata)?;
    let entities = extract_entities(&structure.toc);
    let relative = filepath.strip_prefix(changelogs_dir).unwrap_or(filepath);
    let relative = relative.to_string_lossy().replace('\\', "/");
    let slug = relative.strip_suffix(".mg").unwrap_or(&relative).to_string();
    let plain_text =
        structure.metadata.get("content_text").and_then(|text| text.as_str()).unwrap_or_default().to_string();
    let preview_image = metadata.preview_image.clone().or_else(|| extract_preview_image(&structure.images));
    let aliases = match &metadata.alias {
        Some(alias) if !alias.is_empty() => vec![slug.clone(), alias.clone()],
        _ => vec![slug.clone()],
    };
    Ok(ParsedChangelog {
        filepath: filepath.to_path_buf(),
        slug,
        aliases,
        metadata,
        entities,
        entity_changes: structure.changes,
        plain_text,
        preview_image,
        stats: structure.stats,
    })
}

fn published_millis(changelog: &ParsedChangelog) -> f64 {
    parse_js_date(&changelog.metadata.published).map_or(f64::NAN, |date| date.timestamp_millis() as f64)
}

/// Every changelog under `changelogs_dir`, deduplicated by source and newest first.
pub fn load_all_changelogs(changelogs_dir: &Path) -> Result<Vec<ParsedChangelog>> {
    if !changelogs_dir.exists() {
        return Ok(Vec::new());
    }
    let changelogs = find_mog_files(changelogs_dir)?
        .iter()
        .map(|filepath| {
            load_changelog(changelogs_dir, filepath)
                .with_context(|| format!("Failed to parse changelog: {}", filepath.display()))
        })
        .collect::<Result<Vec<_>>>()?;

    let mut unique = deduplicate_changelogs(changelogs);
    unique.sort_by(|a, b| {
        (published_millis(b) - published_millis(a)).partial_cmp(&0.0).unwrap_or(std::cmp::Ordering::Equal)
    });
    Ok(unique)
}
