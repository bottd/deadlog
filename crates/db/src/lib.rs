//! Reads `deadlog.db`, the contract between the pipeline and the site. The whole
//! database is a few megabytes, so the generator loads it once and derives every page
//! from memory rather than issuing a query per page.

pub mod write;

use std::collections::HashMap;
use std::path::Path;

use anyhow::{Context, Result};
use deadlog_model::{
    AbilityOrder, BoughtBy, ChangeGroup, EntityContext, EntityImpact, HeroChangeGroup, PatchStats, RelatedItems,
    count_bullets,
};
use rusqlite::{Connection, OpenFlags, Row};
use serde::de::DeserializeOwned;

#[derive(Debug, Clone)]
pub struct Changelog {
    pub id: String,
    pub title: String,
    pub slug: String,
    pub source_url: String,
    pub author: String,
    pub author_image: String,
    pub preview_image: Option<String>,
    pub pub_date: String,
    pub major_update: bool,
    pub content_text: Option<String>,
    pub stats: Option<PatchStats>,
}

#[derive(Debug, Clone)]
pub struct Hero {
    pub id: i64,
    pub name: String,
    pub slug: String,
    pub class_name: String,
    pub hero_type: Option<String>,
    pub images: serde_json::Map<String, serde_json::Value>,
    pub is_released: bool,
}

#[derive(Debug, Clone)]
pub struct Item {
    pub id: i64,
    pub name: String,
    pub slug: String,
    pub class_name: String,
    pub kind: String,
    pub category: Option<String>,
    pub tier: Option<i64>,
    pub image: String,
    pub is_released: bool,
    pub context: Option<EntityContext>,
}

#[derive(Debug, Clone)]
pub struct Ability {
    pub hero_id: i64,
    pub position: i64,
    pub name: String,
    pub slug: String,
    pub image: String,
    pub description: Option<String>,
    pub asset_id: Option<i64>,
    pub class_name: Option<String>,
    pub context: Option<EntityContext>,
}

#[derive(Debug, Clone)]
pub struct HeroLink {
    pub changelog_id: String,
    pub hero_id: i64,
    pub change_groups: Option<Vec<HeroChangeGroup>>,
    /// The column as stored, for outputs that must reproduce it byte for byte.
    pub change_groups_json: Option<String>,
    pub impact: Option<EntityImpact>,
    pub related_items: Option<RelatedItems>,
    pub ability_order: Option<AbilityOrder>,
}

#[derive(Debug, Clone)]
pub struct ItemLink {
    pub changelog_id: String,
    pub item_id: i64,
    pub change_groups: Option<Vec<ChangeGroup>>,
    /// The column as stored, for outputs that must reproduce it byte for byte.
    pub change_groups_json: Option<String>,
    pub impact: Option<EntityImpact>,
    pub bought_by: Option<BoughtBy>,
}

impl HeroLink {
    /// Bullets across the hero's groups; `None` when the patch only mentions the hero.
    pub fn change_count(&self) -> Option<usize> {
        count_bullets(self.change_groups.as_ref().map(|groups| groups.iter().map(|group| &group.bullets)))
    }
}

impl ItemLink {
    /// Bullets across the item's groups; `None` when the patch only mentions the item.
    pub fn change_count(&self) -> Option<usize> {
        count_bullets(self.change_groups.as_ref().map(|groups| groups.iter().map(|group| &group.bullets)))
    }
}

#[derive(Debug, Clone)]
pub struct PropertyEvent {
    pub changelog_id: String,
    pub entity_type: String,
    pub entity_id: i64,
    pub ability_slug: Option<String>,
    pub group_index: i64,
    pub bullet_index: i64,
    pub property: String,
    pub qualifier: String,
    pub old_value: String,
    pub new_value: String,
    pub digest: String,
    pub extraction_version: i64,
    pub previous_changelog_id: Option<String>,
    pub previous_old: Option<String>,
    pub previous_new: Option<String>,
}

#[derive(Debug, Clone)]
pub struct Alias {
    pub slug: String,
    pub changelog_id: String,
}

/// Every table, in the order the TypeScript queries read them.
#[derive(Debug, Clone, Default)]
pub struct Snapshot {
    /// Newest first.
    pub changelogs: Vec<Changelog>,
    /// Ordered by id.
    pub heroes: Vec<Hero>,
    /// Ordered by id.
    pub items: Vec<Item>,
    /// Ordered by hero id, then position.
    pub abilities: Vec<Ability>,
    /// Table order (rowid).
    pub hero_links: Vec<HeroLink>,
    /// Table order (rowid).
    pub item_links: Vec<ItemLink>,
    pub property_events: Vec<PropertyEvent>,
    pub aliases: Vec<Alias>,
    pub metadata: HashMap<String, Option<String>>,
}

fn json<T: DeserializeOwned>(row: &Row, index: usize, what: &str) -> rusqlite::Result<Option<T>> {
    let raw: Option<String> = row.get(index)?;
    raw.map(|text| {
        serde_json::from_str(&text).map_err(|error| {
            rusqlite::Error::FromSqlConversionFailure(
                index,
                rusqlite::types::Type::Text,
                format!("malformed {what}: {error}").into(),
            )
        })
    })
    .transpose()
}

fn all<T>(conn: &Connection, sql: &str, map: impl FnMut(&Row) -> rusqlite::Result<T>) -> Result<Vec<T>> {
    let mut statement = conn.prepare(sql).with_context(|| format!("preparing {sql}"))?;
    let rows = statement.query_map([], map)?;
    Ok(rows.collect::<rusqlite::Result<_>>().with_context(|| format!("reading {sql}"))?)
}

impl Snapshot {
    pub fn open(path: impl AsRef<Path>) -> Result<Self> {
        let path = path.as_ref();
        let conn = Connection::open_with_flags(path, OpenFlags::SQLITE_OPEN_READ_ONLY)
            .with_context(|| format!("opening {}", path.display()))?;
        Self::read(&conn)
    }

    pub fn read(conn: &Connection) -> Result<Self> {
        let changelogs = all(
            conn,
            "SELECT id, title, slug, source_url, author, author_image, preview_image, pub_date,
                    major_update, content_text, stats
             FROM changelogs ORDER BY pub_date DESC",
            |row| {
                Ok(Changelog {
                    id: row.get(0)?,
                    title: row.get(1)?,
                    slug: row.get(2)?,
                    source_url: row.get(3)?,
                    author: row.get(4)?,
                    author_image: row.get(5)?,
                    preview_image: row.get(6)?,
                    pub_date: row.get(7)?,
                    major_update: row.get(8)?,
                    content_text: row.get(9)?,
                    stats: json(row, 10, "changelogs.stats")?,
                })
            },
        )?;
        let heroes = all(
            conn,
            "SELECT id, name, slug, class_name, hero_type, images, is_released FROM heroes ORDER BY id",
            |row| {
                Ok(Hero {
                    id: row.get(0)?,
                    name: row.get(1)?,
                    slug: row.get(2)?,
                    class_name: row.get(3)?,
                    hero_type: row.get(4)?,
                    images: json(row, 5, "heroes.images")?.unwrap_or_default(),
                    is_released: row.get(6)?,
                })
            },
        )?;
        let items = all(
            conn,
            "SELECT id, name, slug, class_name, type, category, tier, image, is_released, context
             FROM items ORDER BY id",
            |row| {
                Ok(Item {
                    id: row.get(0)?,
                    name: row.get(1)?,
                    slug: row.get(2)?,
                    class_name: row.get(3)?,
                    kind: row.get(4)?,
                    category: row.get(5)?,
                    tier: row.get(6)?,
                    image: row.get(7)?,
                    is_released: row.get(8)?,
                    context: json(row, 9, "items.context")?,
                })
            },
        )?;
        let abilities = all(
            conn,
            "SELECT hero_id, position, name, slug, image, description, asset_id, class_name, context
             FROM hero_abilities ORDER BY hero_id, position",
            |row| {
                Ok(Ability {
                    hero_id: row.get(0)?,
                    position: row.get(1)?,
                    name: row.get(2)?,
                    slug: row.get(3)?,
                    image: row.get(4)?,
                    description: row.get(5)?,
                    asset_id: row.get(6)?,
                    class_name: row.get(7)?,
                    context: json(row, 8, "hero_abilities.context")?,
                })
            },
        )?;
        let hero_links = all(
            conn,
            "SELECT changelog_id, hero_id, change_groups, impact, related_items, ability_order
             FROM changelog_heroes ORDER BY rowid",
            |row| {
                Ok(HeroLink {
                    changelog_id: row.get(0)?,
                    hero_id: row.get(1)?,
                    change_groups: json(row, 2, "changelog_heroes.change_groups")?,
                    change_groups_json: row.get(2)?,
                    impact: json(row, 3, "changelog_heroes.impact")?,
                    related_items: json(row, 4, "changelog_heroes.related_items")?,
                    ability_order: json(row, 5, "changelog_heroes.ability_order")?,
                })
            },
        )?;
        let item_links = all(
            conn,
            "SELECT changelog_id, item_id, change_groups, impact, bought_by
             FROM changelog_items ORDER BY rowid",
            |row| {
                Ok(ItemLink {
                    changelog_id: row.get(0)?,
                    item_id: row.get(1)?,
                    change_groups: json(row, 2, "changelog_items.change_groups")?,
                    change_groups_json: row.get(2)?,
                    impact: json(row, 3, "changelog_items.impact")?,
                    bought_by: json(row, 4, "changelog_items.bought_by")?,
                })
            },
        )?;
        let property_events = all(
            conn,
            "SELECT changelog_id, entity_type, entity_id, ability_slug, group_index, bullet_index,
                    property, qualifier, old_value, new_value, digest, extraction_version,
                    previous_changelog_id, previous_old, previous_new
             FROM property_events ORDER BY rowid",
            |row| {
                Ok(PropertyEvent {
                    changelog_id: row.get(0)?,
                    entity_type: row.get(1)?,
                    entity_id: row.get(2)?,
                    ability_slug: row.get(3)?,
                    group_index: row.get(4)?,
                    bullet_index: row.get(5)?,
                    property: row.get(6)?,
                    qualifier: row.get(7)?,
                    old_value: row.get(8)?,
                    new_value: row.get(9)?,
                    digest: row.get(10)?,
                    extraction_version: row.get(11)?,
                    previous_changelog_id: row.get(12)?,
                    previous_old: row.get(13)?,
                    previous_new: row.get(14)?,
                })
            },
        )?;
        let aliases = all(conn, "SELECT slug, changelog_id FROM changelog_aliases ORDER BY slug", |row| {
            Ok(Alias { slug: row.get(0)?, changelog_id: row.get(1)? })
        })?;
        let metadata =
            all(conn, "SELECT key, value FROM metadata", |row| Ok((row.get(0)?, row.get(1)?)))?.into_iter().collect();
        Ok(Self { changelogs, heroes, items, abilities, hero_links, item_links, property_events, aliases, metadata })
    }

    pub fn metadata(&self, key: &str) -> Option<&str> {
        self.metadata.get(key).and_then(|value| value.as_deref())
    }
}
