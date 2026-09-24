use anyhow::{Result, bail};
use deadlog_changelog::{EntityBlock, splice_impact_blocks};
use deadlog_model::{EntityImpact, NameIndex, PatchStats};

use crate::types::EntityKind;
use crate::windows::SlicedImpact;

#[derive(Debug, Clone, PartialEq)]
pub struct NamedEntity {
    pub id: i64,
    pub name: String,
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct Entities {
    pub hero: Vec<NamedEntity>,
    pub item: Vec<NamedEntity>,
}

/// Blocks are found by the heading name inside them, the way the database build
/// identifies an entity, never by fence slug: `=hero:doorman:` is The Doorman.
pub struct EntityIndex {
    hero: NameIndex<NamedEntity>,
    item: NameIndex<NamedEntity>,
}

impl EntityIndex {
    pub fn new(entities: &Entities) -> Self {
        Self {
            hero: NameIndex::new(&entities.hero, |hero| &hero.name),
            item: NameIndex::new(&entities.item, |item| &item.name),
        }
    }

    pub fn find(&self, kind: EntityKind, name: &str) -> Option<i64> {
        let index = if kind == EntityKind::Hero { &self.hero } else { &self.item };
        index.find(name).map(|entity| entity.id)
    }

    pub fn id_of(&self, block: &EntityBlock) -> Option<i64> {
        self.find(block.kind, &block.name)
    }
}

pub(crate) fn entity_key(kind: EntityKind, id: Option<i64>) -> String {
    format!("{}:{}", kind.as_str(), id.map_or_else(|| "undefined".into(), |id| id.to_string()))
}

/// Writes each impact into its entity's block. With `remove_others`, an impact on any
/// other block is removed; a requested entity without a block is an error.
pub fn upsert_impact_blocks(
    source: &str,
    impacts: &[SlicedImpact],
    index: &EntityIndex,
    stats: Option<&PatchStats>,
    remove_others: bool,
) -> Result<String> {
    let mut pending: Vec<(String, Option<&EntityImpact>)> = Vec::new();
    for entry in impacts {
        let key = entity_key(entry.kind, Some(entry.id));
        match pending.iter_mut().find(|(existing, _)| *existing == key) {
            Some(slot) => slot.1 = Some(&entry.impact),
            None => pending.push((key, Some(&entry.impact))),
        }
    }

    let next = splice_impact_blocks(
        source,
        |block| {
            let key = entity_key(block.kind, index.id_of(block));
            let entry = pending.iter_mut().find(|(existing, _)| *existing == key).and_then(|slot| slot.1.take());
            match entry {
                Some(impact) => Some(Some(impact.clone())),
                None if remove_others && block.enrichment.impact.is_some() => Some(None),
                None => None,
            }
        },
        stats,
    )?;

    let missing: Vec<&str> = pending.iter().filter(|(_, entry)| entry.is_some()).map(|(key, _)| key.as_str()).collect();
    if !missing.is_empty() {
        bail!("No block found for {}", missing.join(", "));
    }
    Ok(next)
}
