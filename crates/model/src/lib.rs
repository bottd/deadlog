//! Shapes shared by the pipeline and the site. The JSON column types mirror what the
//! TypeScript pipeline writes into `deadlog.db`, so both halves read the same rows.

use serde::{Deserialize, Serialize};

mod abilities;
mod dates;
mod js;
mod mog_markup;
mod names;
mod text;

pub use abilities::*;
pub use dates::*;
pub use js::*;
pub use mog_markup::*;
pub use names::*;
pub use text::*;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum EntityType {
    Hero,
    Item,
}

impl EntityType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Hero => "hero",
            Self::Item => "item",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ChangeGroup {
    pub ability: Option<String>,
    pub bullets: Vec<String>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct HeroChangeGroup {
    pub ability: Option<String>,
    pub ability_slug: Option<String>,
    pub bullets: Vec<String>,
}

/// Thresholds the stats job applies and the pages quote back to readers.
pub const WINDOW_CAP_DAYS: i64 = 14;
pub const RELATED_MIN_APPEARANCES: f64 = 1000.0;
pub const RELATED_MIN_BUYERS: f64 = 100.0;

pub fn count_bullets<'a, I>(groups: Option<I>) -> Option<usize>
where
    I: IntoIterator<Item = &'a Vec<String>>,
{
    groups.map(|groups| groups.into_iter().map(Vec::len).sum())
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct DayInterval {
    pub from: String,
    pub to: String,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PatchStats {
    pub schema_version: u32,
    pub method_version: u32,
    pub collected_at: String,
    pub before: Option<DayInterval>,
    pub after: Option<DayInterval>,
    pub siblings: Vec<String>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ImpactWindow {
    pub win: Option<f64>,
    pub pick: Option<f64>,
    pub matches: f64,
    pub days: f64,
    pub total: f64,
    pub covered: f64,
    pub coverage: String,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub buy: Option<Option<f64>>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct TierImpact {
    pub before: ImpactWindow,
    pub after: ImpactWindow,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct EntityImpact {
    pub closed: bool,
    pub all: TierImpact,
    pub high: TierImpact,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct RelatedItem {
    pub id: i64,
    pub buyers: f64,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub after: Option<f64>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RelatedItems {
    pub method_version: u32,
    pub status: String,
    pub appearances: f64,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub after_appearances: Option<f64>,
    pub candidates: Vec<i64>,
    pub items: Vec<RelatedItem>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct AbilityOrderEntry {
    pub id: i64,
    pub before: f64,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub after: Option<f64>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AbilityOrder {
    pub method_version: u32,
    pub matches: f64,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub after_matches: Option<f64>,
    pub abilities: Vec<AbilityOrderEntry>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BoughtByHero {
    pub id: i64,
    pub buyers: f64,
    pub appearances: f64,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub after_buyers: Option<f64>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub after_appearances: Option<f64>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BoughtBy {
    pub method_version: u32,
    pub heroes: Vec<BoughtByHero>,
}

#[derive(Debug, Clone, Copy, PartialEq)]
pub struct ShareChange {
    pub before: f64,
    pub after: Option<f64>,
}

fn after_ratio(count: Option<f64>, total: Option<f64>) -> Option<f64> {
    match (count, total) {
        (Some(count), Some(total)) if total != 0.0 => Some(count / total),
        _ => None,
    }
}

pub fn related_share(related: &RelatedItems, item: &RelatedItem) -> ShareChange {
    ShareChange { before: item.buyers / related.appearances, after: after_ratio(item.after, related.after_appearances) }
}

pub fn ability_share(order: &AbilityOrder, entry: &AbilityOrderEntry) -> ShareChange {
    ShareChange { before: entry.before / order.matches, after: after_ratio(entry.after, order.after_matches) }
}

pub fn bought_by_share(hero: &BoughtByHero) -> ShareChange {
    ShareChange {
        before: hero.buyers / hero.appearances,
        after: after_ratio(hero.after_buyers, hero.after_appearances),
    }
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AssetIdentity {
    pub asset_id: i64,
    pub class_name: String,
    #[serde(rename = "type")]
    pub kind: String,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub hero_id: Option<i64>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub slot: Option<i64>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ContextSection {
    pub kind: String,
    pub label: Option<String>,
    pub paragraphs: Vec<String>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ContextProperty {
    pub key: String,
    pub label: String,
    pub display: String,
    pub unit: String,
    pub scales: bool,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EntityContext {
    pub identity: AssetIdentity,
    pub client_version: Option<i64>,
    pub language: Option<String>,
    pub collected_at: Option<String>,
    pub sections: Vec<ContextSection>,
    pub properties: Vec<ContextProperty>,
}

pub const HERO_CARD_IMAGE_KEYS: [&str; 4] =
    ["icon_hero_card_webp", "icon_hero_card", "icon_image_small_webp", "icon_image_small"];

pub const HERO_ICON_IMAGE_KEYS: [&str; 2] = ["icon_image_small_webp", "icon_image_small"];

/// `images` keeps the upstream key order, which the "first non-empty value" fallback reads.
pub fn hero_image(images: &serde_json::Map<String, serde_json::Value>, keys: &[&str]) -> String {
    fn non_empty(value: &serde_json::Value) -> Option<&str> {
        value.as_str().filter(|url| !url.is_empty())
    }
    keys.iter()
        .find_map(|key| images.get(*key).and_then(non_empty))
        .or_else(|| images.values().find_map(non_empty))
        .unwrap_or_default()
        .to_string()
}
