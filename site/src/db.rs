use std::collections::HashMap;

use anyhow::{Context, Result};
use rusqlite::{Connection, OptionalExtension, params};
use serde::Deserialize;
use serde::de::DeserializeOwned;

#[derive(Debug, Clone, Deserialize)]
pub struct DayInterval {
    pub from: String,
    pub to: String,
}

#[derive(Debug, Clone, Deserialize)]
pub struct PatchStats {
    pub before: Option<DayInterval>,
    pub after: Option<DayInterval>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ChangeGroup {
    pub ability: Option<String>,
    pub ability_slug: Option<String>,
    pub bullets: Vec<String>,
}

#[derive(Debug, Clone, Deserialize)]
pub struct Impact {
    pub closed: bool,
}

#[derive(Debug, Clone, Deserialize)]
pub struct RelatedItem {
    pub id: i64,
    pub buyers: u64,
    pub after: Option<u64>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RelatedItems {
    pub status: String,
    pub appearances: u64,
    pub after_appearances: Option<u64>,
    pub items: Vec<RelatedItem>,
}

#[derive(Debug, Clone, Deserialize)]
pub struct AbilityOrderEntry {
    pub id: i64,
    pub before: u64,
    pub after: Option<u64>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AbilityOrder {
    pub matches: u64,
    pub after_matches: Option<u64>,
    pub abilities: Vec<AbilityOrderEntry>,
}

#[derive(Debug, Clone)]
pub struct Hero {
    pub id: i64,
    pub name: String,
    pub slug: String,
    pub icon: String,
}

#[derive(Debug, Clone)]
pub struct Ability {
    pub name: String,
    pub slug: String,
    pub image: String,
    pub asset_id: Option<i64>,
}

#[derive(Debug, Clone)]
pub struct ItemRef {
    pub name: String,
    pub image: String,
    pub changes: Vec<ChangeGroup>,
}

#[derive(Debug, Clone)]
pub struct HeroEntry {
    pub changelog_id: String,
    pub patch_slug: String,
    pub pub_date: String,
    pub groups: Option<Vec<ChangeGroup>>,
    pub impact: Option<Impact>,
    pub stats: Option<PatchStats>,
    pub related: Option<RelatedItems>,
    pub order: Option<AbilityOrder>,
}

pub struct Db {
    conn: Connection,
}

fn json<T: DeserializeOwned>(raw: Option<String>) -> Result<Option<T>> {
    raw.map(|text| serde_json::from_str(&text).context("malformed JSON column"))
        .transpose()
}

const ICON_KEYS: [&str; 4] = [
    "icon_image_small_webp",
    "icon_image_small",
    "icon_hero_card_webp",
    "icon_hero_card",
];

fn hero_icon(images: &str) -> String {
    let map: HashMap<String, String> = serde_json::from_str(images).unwrap_or_default();
    ICON_KEYS
        .iter()
        .find_map(|key| map.get(*key).filter(|url| !url.is_empty()).cloned())
        .unwrap_or_default()
}

impl Db {
    pub fn open(path: &str) -> Result<Self> {
        let conn = Connection::open_with_flags(path, rusqlite::OpenFlags::SQLITE_OPEN_READ_ONLY)
            .with_context(|| format!("opening {path}"))?;
        Ok(Self { conn })
    }

    pub fn released_heroes(&self) -> Result<Vec<Hero>> {
        let mut statement = self.conn.prepare(
            "SELECT id, name, slug, images FROM heroes WHERE is_released = 1 ORDER BY name",
        )?;
        let rows = statement.query_map([], |row| {
            Ok(Hero {
                id: row.get(0)?,
                name: row.get(1)?,
                slug: row.get(2)?,
                icon: hero_icon(&row.get::<_, String>(3)?),
            })
        })?;
        Ok(rows.collect::<rusqlite::Result<_>>()?)
    }

    pub fn abilities(&self, hero_id: i64) -> Result<Vec<Ability>> {
        let mut statement = self.conn.prepare(
            "SELECT name, slug, image, asset_id FROM hero_abilities WHERE hero_id = ?1 ORDER BY position",
        )?;
        let rows = statement.query_map(params![hero_id], |row| {
            Ok(Ability {
                name: row.get(0)?,
                slug: row.get(1)?,
                image: row.get(2)?,
                asset_id: row.get(3)?,
            })
        })?;
        Ok(rows.collect::<rusqlite::Result<_>>()?)
    }

    pub fn hero_history(&self, hero_id: i64) -> Result<Vec<HeroEntry>> {
        let mut statement = self.conn.prepare(
            "SELECT c.id, c.slug, c.pub_date, ch.change_groups, ch.impact, c.stats,
                    ch.related_items, ch.ability_order
             FROM changelog_heroes ch JOIN changelogs c ON c.id = ch.changelog_id
             WHERE ch.hero_id = ?1 ORDER BY c.pub_date DESC",
        )?;
        let raw = statement.query_map(params![hero_id], |row| {
            Ok((
                row.get::<_, String>(0)?,
                row.get::<_, String>(1)?,
                row.get::<_, String>(2)?,
                row.get::<_, Option<String>>(3)?,
                row.get::<_, Option<String>>(4)?,
                row.get::<_, Option<String>>(5)?,
                row.get::<_, Option<String>>(6)?,
                row.get::<_, Option<String>>(7)?,
            ))
        })?;
        raw.map(|row| {
            let (id, slug, date, groups, impact, stats, related, order) = row?;
            Ok(HeroEntry {
                changelog_id: id,
                patch_slug: slug,
                pub_date: date,
                groups: json(groups)?,
                impact: json(impact)?,
                stats: json(stats)?,
                related: json(related)?,
                order: json(order)?,
            })
        })
        .collect()
    }

    pub fn item_in_patch(&self, changelog_id: &str, item_id: i64) -> Result<Option<ItemRef>> {
        self.conn
            .query_row(
                "SELECT i.name, i.image, ci.change_groups
                 FROM changelog_items ci JOIN items i ON i.id = ci.item_id
                 WHERE ci.changelog_id = ?1 AND ci.item_id = ?2",
                params![changelog_id, item_id],
                |row| {
                    Ok((
                        row.get::<_, String>(0)?,
                        row.get::<_, String>(1)?,
                        row.get::<_, Option<String>>(2)?,
                    ))
                },
            )
            .optional()?
            .map(|(name, image, groups)| {
                Ok(ItemRef {
                    name,
                    image,
                    changes: json(groups)?.unwrap_or_default(),
                })
            })
            .transpose()
    }
}
