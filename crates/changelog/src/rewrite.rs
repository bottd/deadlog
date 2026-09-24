use std::collections::HashMap;

use anyhow::{Result, bail};
use deadlog_model::{EntityImpact, PatchStats};

use crate::enrichment::{EnrichmentUpdate, EntityEnrichment, apply_update, write_enrichment_block};
use crate::extract::{change_key, parse_structure};
use crate::impact_block::write_stats_node;
use crate::schema::EntityBlock;

fn is_stats_line(line: &str) -> bool {
    line.strip_prefix("stats").is_some_and(|rest| !rest.starts_with(|c: char| c.is_ascii_alphanumeric() || c == '_'))
}

fn splice_stats(lines: &mut Vec<String>, metadata_lines: Option<(usize, usize)>, stats: &PatchStats) -> Result<()> {
    let Some((start, end)) = metadata_lines else {
        bail!("No root attr block to hold the stats node");
    };
    let first = lines.iter().enumerate().position(|(index, line)| index > start && index < end && is_stats_line(line));
    let Some(first) = first else {
        lines.splice(end..end, write_stats_node(stats));
        return Ok(());
    };
    let last = lines.iter().enumerate().position(|(index, line)| index > first && line == "}");
    match last {
        Some(last) if last < end => {
            lines.splice(first..=last, write_stats_node(stats));
            Ok(())
        }
        _ => bail!("Unterminated stats node"),
    }
}

/// Rewrites the attr block under each entity fence `pick` answers for, and the root
/// stats node when given one. Everything else keeps its bytes.
pub fn splice_entity_blocks(
    source: &str,
    mut pick: impl FnMut(&EntityBlock) -> Option<EnrichmentUpdate>,
    stats: Option<&PatchStats>,
) -> Result<String> {
    if source.contains('\r') {
        bail!("CRLF line endings are not supported");
    }

    let mut lines: Vec<String> = source.split('\n').map(str::to_string).collect();
    let parsed = parse_structure(source)?;
    let mut blocks: Vec<&EntityBlock> = parsed.blocks.iter().collect();
    blocks.sort_by(|a, b| b.fence_line.cmp(&a.fence_line));

    for block in blocks {
        let Some(update) = pick(block) else { continue };
        let (start, end) = block.attribute_lines.unwrap_or((block.fence_line + 1, block.fence_line));
        let written = write_enrichment_block(&apply_update(&block.enrichment, &update));
        lines.splice(start..end + 1, written);
    }
    if let Some(stats) = stats {
        splice_stats(&mut lines, parsed.metadata_lines, stats)?;
    }
    Ok(lines.join("\n"))
}

/// `pick` answers `None` to leave a block alone and `Some(None)` to clear its impact.
pub fn splice_impact_blocks(
    source: &str,
    mut pick: impl FnMut(&EntityBlock) -> Option<Option<EntityImpact>>,
    stats: Option<&PatchStats>,
) -> Result<String> {
    splice_entity_blocks(
        source,
        |block| pick(block).map(|impact| EnrichmentUpdate { impact: Some(impact), ..Default::default() }),
        stats,
    )
}

/// Restores what `previous` recorded — entity blocks and the stats node — onto a
/// regeneration of the same patch, matching entities by heading name.
pub fn carry_enrichment(previous: &str, next: &str) -> Result<String> {
    let before = parse_structure(previous)?;
    let recorded: HashMap<String, &EntityEnrichment> = before
        .blocks
        .iter()
        .filter(|block| !block.enrichment.is_empty())
        .map(|block| (change_key(block.kind.as_str(), &block.name), &block.enrichment))
        .collect();
    if recorded.is_empty() {
        return Ok(next.to_string());
    }

    let after = parse_structure(next)?;
    let stats = if after.stats.is_some() { None } else { before.stats.as_ref() };
    splice_entity_blocks(
        next,
        |block| {
            if block.attribute_lines.is_some() {
                return None;
            }
            recorded.get(&change_key(block.kind.as_str(), &block.name)).map(|enrichment| (*enrichment).clone().into())
        },
        stats,
    )
}
