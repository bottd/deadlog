//! What the stats job learns from `deadlog.db`: patches, the entities each one touched,
//! and what is already recorded for them.

use std::collections::HashMap;

use anyhow::{Result, anyhow};
use deadlog_db::Snapshot;
use deadlog_model::{AbilityOrder, BoughtBy, EntityImpact, PatchStats, RelatedItems, parse_js_date};

use crate::rewrite::{Entities, NamedEntity};
use crate::types::EntityKind;
use crate::windows::PatchRef;

#[derive(Debug, Clone, PartialEq)]
pub struct StatsPatch {
    pub id: String,
    pub slug: String,
    pub at: i64,
    pub stats: Option<PatchStats>,
}

impl StatsPatch {
    pub fn to_ref(&self) -> PatchRef {
        PatchRef { id: self.id.clone(), at: self.at }
    }
}

#[derive(Debug, Clone, PartialEq)]
pub struct RecordedEntity {
    pub kind: EntityKind,
    pub id: i64,
    pub recorded: Option<EntityImpact>,
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct PatchInputs {
    /// Oldest first.
    pub patches: Vec<StatsPatch>,
    pub touched: HashMap<String, Vec<RecordedEntity>>,
    pub entities: Entities,
}

#[derive(Debug, Clone, PartialEq)]
pub struct RelatedHero {
    pub id: i64,
    pub recorded: Option<RelatedItems>,
    pub ability_changed: bool,
    pub recorded_order: Option<AbilityOrder>,
}

#[derive(Debug, Clone, PartialEq)]
pub struct RelatedItemLink {
    pub id: i64,
    pub recorded: Option<BoughtBy>,
}

#[derive(Debug, Clone, PartialEq)]
pub struct RelatedPatch {
    pub patch: StatsPatch,
    pub heroes: Vec<RelatedHero>,
    pub candidates: Vec<i64>,
    pub items: Vec<RelatedItemLink>,
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct RelatedInputs {
    /// Oldest first.
    pub patches: Vec<RelatedPatch>,
    pub entities: Entities,
    /// Ability asset ids per hero, in slot order.
    pub abilities: HashMap<i64, Vec<i64>>,
}

/// `Math.floor(Date.parse(pubDate) / 1000)`.
fn published_at(pub_date: &str) -> Result<i64> {
    let date = parse_js_date(pub_date).ok_or_else(|| anyhow!("Unparsable pub_date {pub_date:?}"))?;
    Ok(date.timestamp_millis().div_euclid(1000))
}

fn patches(snapshot: &Snapshot) -> Result<Vec<StatsPatch>> {
    let mut patches = snapshot
        .changelogs
        .iter()
        .map(|changelog| {
            Ok(StatsPatch {
                id: changelog.id.clone(),
                slug: changelog.slug.clone(),
                at: published_at(&changelog.pub_date)?,
                stats: changelog.stats.clone(),
            })
        })
        .collect::<Result<Vec<_>>>()?;
    patches.sort_by(|a, b| a.at.cmp(&b.at).then_with(|| a.id.cmp(&b.id)));
    Ok(patches)
}

fn entities(snapshot: &Snapshot) -> Entities {
    Entities {
        hero: snapshot.heroes.iter().map(|hero| NamedEntity { id: hero.id, name: hero.name.clone() }).collect(),
        item: snapshot.items.iter().map(|item| NamedEntity { id: item.id, name: item.name.clone() }).collect(),
    }
}

pub fn read_patches(snapshot: &Snapshot) -> Result<PatchInputs> {
    let mut touched: HashMap<String, Vec<RecordedEntity>> = HashMap::new();
    for link in &snapshot.hero_links {
        touched.entry(link.changelog_id.clone()).or_default().push(RecordedEntity {
            kind: EntityKind::Hero,
            id: link.hero_id,
            recorded: link.impact.clone(),
        });
    }
    for link in &snapshot.item_links {
        touched.entry(link.changelog_id.clone()).or_default().push(RecordedEntity {
            kind: EntityKind::Item,
            id: link.item_id,
            recorded: link.impact.clone(),
        });
    }
    Ok(PatchInputs { patches: patches(snapshot)?, touched, entities: entities(snapshot) })
}

pub fn read_related_patches(snapshot: &Snapshot) -> Result<RelatedInputs> {
    let mut abilities: HashMap<i64, Vec<i64>> = HashMap::new();
    for ability in &snapshot.abilities {
        if let Some(asset_id) = ability.asset_id {
            abilities.entry(ability.hero_id).or_default().push(asset_id);
        }
    }

    let patches = patches(snapshot)?
        .into_iter()
        .map(|patch| {
            let heroes = snapshot
                .hero_links
                .iter()
                .filter(|link| link.changelog_id == patch.id)
                .filter(|link| {
                    link.change_groups.as_ref().is_some_and(|groups| groups.iter().any(|g| !g.bullets.is_empty()))
                })
                .map(|link| RelatedHero {
                    id: link.hero_id,
                    recorded: link.related_items.clone(),
                    ability_changed: link.change_groups.as_ref().is_some_and(|groups| {
                        groups.iter().any(|group| {
                            group.ability.as_deref().is_some_and(|name| !name.is_empty()) && !group.bullets.is_empty()
                        })
                    }),
                    recorded_order: link.ability_order.clone(),
                })
                .collect();
            let changed: Vec<_> = snapshot
                .item_links
                .iter()
                .filter(|link| link.changelog_id == patch.id)
                .filter(|link| {
                    link.change_groups.as_ref().is_some_and(|groups| groups.iter().any(|g| !g.bullets.is_empty()))
                })
                .collect();
            RelatedPatch {
                candidates: changed.iter().map(|link| link.item_id).collect(),
                items: changed
                    .iter()
                    .map(|link| RelatedItemLink { id: link.item_id, recorded: link.bought_by.clone() })
                    .collect(),
                heroes,
                patch,
            }
        })
        .collect();

    Ok(RelatedInputs { patches, entities: entities(snapshot), abilities })
}
