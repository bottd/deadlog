use anyhow::{Result, bail};
use deadlog_model::{EntityType, PatchStats, js_number};
use serde_json::{Map, Value};

use crate::enrichment::EntityEnrichment;

/// A changelog's root `` ``attr: `` block, held to the rules the TypeScript build's
/// `ChangelogMetadataSchema` applies.
#[derive(Debug, Clone, Default, PartialEq)]
pub struct ChangelogMetadata {
    pub title: String,
    /// Legacy changelog slug that resolves to this entry.
    pub alias: Option<String>,
    pub thread_id: Option<String>,
    pub steam_gid: Option<String>,
    /// ISO 8601 timestamp.
    pub published: String,
    pub author: String,
    pub author_image: Option<String>,
    pub preview_image: Option<String>,
    pub major_update: bool,
    pub client_version_captured: Option<i64>,
    pub client_version_captured_at: Option<String>,
}

fn required_string(map: &Map<String, Value>, key: &str) -> Result<String> {
    match map.get(key) {
        Some(Value::String(text)) => Ok(text.clone()),
        _ => bail!("metadata {key}: expected a string"),
    }
}

fn optional_string(map: &Map<String, Value>, key: &str) -> Result<Option<String>> {
    match map.get(key) {
        None => Ok(None),
        Some(Value::String(text)) => Ok(Some(text.clone())),
        Some(_) => bail!("metadata {key}: expected a string"),
    }
}

/// `String(value)`.
fn coerce_string(value: &Value) -> String {
    match value {
        Value::String(text) => text.clone(),
        Value::Number(number) => number.as_f64().map(js_number).unwrap_or_else(|| number.to_string()),
        Value::Array(items) => items
            .iter()
            .map(|item| if item.is_null() { String::new() } else { coerce_string(item) })
            .collect::<Vec<_>>()
            .join(","),
        Value::Object(_) => "[object Object]".into(),
        other => other.to_string(),
    }
}

/// `Boolean(value)`.
fn truthy(value: &Value) -> bool {
    match value {
        Value::Null => false,
        Value::Bool(flag) => *flag,
        Value::Number(number) => number.as_f64().is_some_and(|number| number != 0.0 && !number.is_nan()),
        Value::String(text) => !text.is_empty(),
        _ => true,
    }
}

impl ChangelogMetadata {
    pub fn parse(map: &Map<String, Value>) -> Result<Self> {
        let preview_image = optional_string(map, "preview_image")?;
        if let Some(url) = &preview_image
            && url::Url::parse(url).is_err()
        {
            bail!("metadata preview_image: expected a URL");
        }
        let client_version_captured = match map.get("client_version_captured") {
            None => None,
            Some(value) => match value.as_f64() {
                Some(number) if number.fract() == 0.0 && number > 0.0 => Some(number as i64),
                _ => bail!("metadata client_version_captured: expected a positive integer"),
            },
        };
        Ok(Self {
            title: required_string(map, "title")?,
            alias: optional_string(map, "alias")?,
            thread_id: map.get("thread_id").map(coerce_string),
            steam_gid: optional_string(map, "steam_gid")?,
            published: required_string(map, "published")?,
            author: required_string(map, "author")?,
            author_image: optional_string(map, "author_image")?,
            preview_image,
            major_update: map.get("major_update").is_some_and(truthy),
            client_version_captured,
            client_version_captured_at: optional_string(map, "client_version_captured_at")?,
        })
    }
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct ChangelogEntities {
    pub heroes: Vec<String>,
    pub items: Vec<String>,
}

/// One run of bullets under an entity, split per ability section.
#[derive(Debug, Clone, PartialEq)]
pub struct EntityBulletGroup {
    /// Ability heading the bullets sit under; `None` for the entity's own bullets.
    pub ability: Option<String>,
    pub bullets: Vec<String>,
}

#[derive(Debug, Clone, PartialEq)]
pub struct EntityChange {
    pub name: String,
    pub kind: EntityType,
    pub groups: Vec<EntityBulletGroup>,
    pub enrichment: EntityEnrichment,
}

/// Where an entity's block sits in the parsed text, as line indices.
#[derive(Debug, Clone, PartialEq)]
pub struct EntityBlock {
    pub name: String,
    pub kind: EntityType,
    pub fence_line: usize,
    pub attribute_lines: Option<(usize, usize)>,
    pub enrichment: EntityEnrichment,
}

#[derive(Debug, Clone, PartialEq)]
pub struct ParsedChangelog {
    pub filepath: std::path::PathBuf,
    pub slug: String,
    pub aliases: Vec<String>,
    pub metadata: ChangelogMetadata,
    pub entities: ChangelogEntities,
    pub entity_changes: Vec<EntityChange>,
    pub plain_text: String,
    pub preview_image: Option<String>,
    pub stats: Option<PatchStats>,
}
