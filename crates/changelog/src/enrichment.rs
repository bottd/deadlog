use anyhow::{Result, bail};
use deadlog_model::{
    AbilityOrder, AbilityOrderEntry, BoughtBy, BoughtByHero, EntityImpact, EntityType, RelatedItem, RelatedItems,
    js_number,
};
use serde_json::{Map, Value};

use crate::impact_block::{parse_impact, prop, write_impact_node};
use crate::validate::{count, method, one_of, optional_count, strict, string};

pub const RELATED_ITEMS_LIMIT: usize = 3;
pub const BOUGHT_BY_LIMIT: usize = 3;

#[derive(Debug, Clone, Default, PartialEq)]
pub struct EntityEnrichment {
    pub impact: Option<EntityImpact>,
    pub related: Option<RelatedItems>,
    pub order: Option<AbilityOrder>,
    pub bought: Option<BoughtBy>,
}

impl EntityEnrichment {
    pub fn is_empty(&self) -> bool {
        self.impact.is_none() && self.related.is_none() && self.order.is_none() && self.bought.is_none()
    }
}

/// Per field: `None` keeps what is recorded, `Some(None)` deletes it, `Some(Some(_))`
/// replaces it.
#[derive(Debug, Clone, Default, PartialEq)]
pub struct EnrichmentUpdate {
    pub impact: Option<Option<EntityImpact>>,
    pub related: Option<Option<RelatedItems>>,
    pub order: Option<Option<AbilityOrder>>,
    pub bought: Option<Option<BoughtBy>>,
}

impl From<EntityEnrichment> for EnrichmentUpdate {
    fn from(enrichment: EntityEnrichment) -> Self {
        Self {
            impact: enrichment.impact.map(Some),
            related: enrichment.related.map(Some),
            order: enrichment.order.map(Some),
            bought: enrichment.bought.map(Some),
        }
    }
}

const FIELD_NAMES: [&str; 4] = ["impact", "related", "order", "bought"];

/// The non-reserved keys of a catchall block, each `<prefix>-<id>`, in block order.
fn keyed<'a>(
    label: &str,
    prefix: &str,
    map: &'a Map<String, Value>,
    reserved: &[&str],
) -> Result<Vec<(i64, &'a Value)>> {
    map.iter()
        .filter(|(key, _)| !reserved.contains(&key.as_str()))
        .map(|(key, value)| {
            let id = key
                .strip_prefix(prefix)
                .and_then(|rest| rest.strip_prefix('-'))
                .filter(|digits| !digits.is_empty() && digits.bytes().all(|byte| byte.is_ascii_digit()))
                .and_then(|digits| digits.parse::<i64>().ok());
            match id {
                Some(id) => Ok((id, value)),
                None => bail!("Malformed {label} block: unknown key \"{key}\""),
            }
        })
        .collect()
}

fn require_after_total(label: &str, total: Option<f64>, afters: impl IntoIterator<Item = Option<f64>>) -> Result<()> {
    let mut afters = afters.into_iter();
    if total.is_none() != afters.all(|after| after.is_none()) {
        bail!("Malformed {label} block: after counts need an after total");
    }
    Ok(())
}

fn catchall_entries(
    label: &str,
    map: &Map<String, Value>,
    reserved: &[&str],
    required: &[&str],
    optional: &[&str],
) -> Result<()> {
    for (key, value) in map.iter().filter(|(key, _)| !reserved.contains(&key.as_str())) {
        let entry = strict(label, value, required, optional)?;
        for field in required.iter().chain(optional) {
            if let Some(value) = entry.get(*field) {
                count(label, &format!("{key}.{field}"), value)?;
            }
        }
    }
    Ok(())
}

pub fn parse_related(value: &Value) -> Result<RelatedItems> {
    const LABEL: &str = "related block";
    const RESERVED: [&str; 5] = ["method", "status", "appearances", "after-appearances", "candidates"];
    let map = crate::validate::object(LABEL, value)?;
    for key in ["method", "status", "appearances", "candidates"] {
        if !map.contains_key(key) {
            bail!("Malformed {LABEL}: missing \"{key}\"");
        }
    }
    let method_version = method(LABEL, "method", &map["method"])?;
    let status = one_of(LABEL, "status", &map["status"], &["complete", "no-window", "insufficient-sample"])?;
    let appearances = count(LABEL, "appearances", &map["appearances"])?;
    let after_appearances = optional_count(LABEL, map, "after-appearances")?;
    let candidates = string(LABEL, "candidates", &map["candidates"])?;
    if candidates.is_empty()
        || !candidates.split(',').all(|id| !id.is_empty() && id.bytes().all(|b| b.is_ascii_digit()))
    {
        bail!("Malformed {LABEL}: candidates must be comma-separated ids");
    }
    catchall_entries(LABEL, map, &RESERVED, &["buyers"], &["after"])?;
    let items: Vec<RelatedItem> = keyed("related", "item", map, &RESERVED)?
        .into_iter()
        .map(|(id, entry)| RelatedItem {
            id,
            buyers: entry["buyers"].as_f64().unwrap_or_default(),
            after: entry.get("after").and_then(Value::as_f64),
        })
        .collect();
    if items.len() > RELATED_ITEMS_LIMIT {
        bail!("Malformed related block: more than {RELATED_ITEMS_LIMIT} items");
    }
    if status != "complete" && !items.is_empty() {
        bail!("Malformed related block: items recorded with status \"{status}\"");
    }
    require_after_total("related", after_appearances, items.iter().map(|item| item.after))?;
    Ok(RelatedItems {
        method_version,
        status: status.to_string(),
        appearances,
        after_appearances,
        candidates: candidates.split(',').map(|id| id.parse().unwrap_or_default()).collect(),
        items,
    })
}

fn parse_order(value: &Value) -> Result<AbilityOrder> {
    const LABEL: &str = "order block";
    const RESERVED: [&str; 3] = ["method", "matches", "after-matches"];
    let map = crate::validate::object(LABEL, value)?;
    for key in ["method", "matches"] {
        if !map.contains_key(key) {
            bail!("Malformed {LABEL}: missing \"{key}\"");
        }
    }
    let method_version = method(LABEL, "method", &map["method"])?;
    let matches = count(LABEL, "matches", &map["matches"])?;
    let after_matches = optional_count(LABEL, map, "after-matches")?;
    catchall_entries(LABEL, map, &RESERVED, &["before"], &["after"])?;
    let abilities: Vec<AbilityOrderEntry> = keyed("order", "ability", map, &RESERVED)?
        .into_iter()
        .map(|(id, entry)| AbilityOrderEntry {
            id,
            before: entry["before"].as_f64().unwrap_or_default(),
            after: entry.get("after").and_then(Value::as_f64),
        })
        .collect();
    require_after_total("order", after_matches, abilities.iter().map(|entry| entry.after))?;
    Ok(AbilityOrder { method_version, matches, after_matches, abilities })
}

fn parse_bought(value: &Value) -> Result<BoughtBy> {
    const LABEL: &str = "bought block";
    const RESERVED: [&str; 1] = ["method"];
    let map = crate::validate::object(LABEL, value)?;
    let Some(method_value) = map.get("method") else {
        bail!("Malformed {LABEL}: missing \"method\"");
    };
    let method_version = method(LABEL, "method", method_value)?;
    catchall_entries(LABEL, map, &RESERVED, &["buyers", "appearances"], &["after-buyers", "after-appearances"])?;
    let entries = keyed("bought", "hero", map, &RESERVED)?;
    if entries.len() > BOUGHT_BY_LIMIT {
        bail!("Malformed bought block: more than {BOUGHT_BY_LIMIT} heroes");
    }
    let heroes = entries
        .into_iter()
        .map(|(id, entry)| {
            let after_buyers = entry.get("after-buyers").and_then(Value::as_f64);
            let after_appearances = entry.get("after-appearances").and_then(Value::as_f64);
            require_after_total("bought", after_appearances, [after_buyers])?;
            Ok(BoughtByHero {
                id,
                buyers: entry["buyers"].as_f64().unwrap_or_default(),
                appearances: entry["appearances"].as_f64().unwrap_or_default(),
                after_buyers,
                after_appearances: after_buyers.and(after_appearances),
            })
        })
        .collect::<Result<_>>()?;
    Ok(BoughtBy { method_version, heroes })
}

fn node(head: String, children: Vec<String>) -> Vec<String> {
    if children.is_empty() {
        return vec![head];
    }
    let mut lines = vec![format!("{head} {{")];
    lines.extend(children.into_iter().map(|line| format!("  {line}")));
    lines.push("}".into());
    lines
}

fn write_related_node(related: &RelatedItems) -> Vec<String> {
    let candidates: Vec<String> = related.candidates.iter().map(i64::to_string).collect();
    node(
        format!(
            "related method={} status=\"{}\" appearances={}{} candidates=\"{}\"",
            related.method_version,
            related.status,
            js_number(related.appearances),
            prop("after-appearances", related.after_appearances.map(Some)),
            candidates.join(",")
        ),
        related
            .items
            .iter()
            .map(|item| {
                format!("item-{} buyers={}{}", item.id, js_number(item.buyers), prop("after", item.after.map(Some)))
            })
            .collect(),
    )
}

fn write_order_node(order: &AbilityOrder) -> Vec<String> {
    node(
        format!(
            "order method={} matches={}{}",
            order.method_version,
            js_number(order.matches),
            prop("after-matches", order.after_matches.map(Some))
        ),
        order
            .abilities
            .iter()
            .map(|entry| {
                format!(
                    "ability-{} before={}{}",
                    entry.id,
                    js_number(entry.before),
                    prop("after", entry.after.map(Some))
                )
            })
            .collect(),
    )
}

fn write_bought_node(bought: &BoughtBy) -> Vec<String> {
    node(
        format!("bought method={}", bought.method_version),
        bought
            .heroes
            .iter()
            .map(|hero| {
                format!(
                    "hero-{} buyers={} appearances={}{}{}",
                    hero.id,
                    js_number(hero.buyers),
                    js_number(hero.appearances),
                    prop("after-buyers", hero.after_buyers.map(Some)),
                    prop("after-appearances", hero.after_appearances.map(Some))
                )
            })
            .collect(),
    )
}

fn kinds(field: &str) -> &'static [EntityType] {
    match field {
        "impact" => &[EntityType::Hero, EntityType::Item],
        "related" | "order" => &[EntityType::Hero],
        _ => &[EntityType::Item],
    }
}

pub fn parse_enrichment(plain: Option<&Map<String, Value>>, kind: EntityType) -> Result<EntityEnrichment> {
    let empty = Map::new();
    let plain = plain.unwrap_or(&empty);
    if let Some(unknown) = plain.keys().find(|key| !FIELD_NAMES.contains(&key.as_str())) {
        bail!("an entity attr block holds only {}, not \"{unknown}\"", FIELD_NAMES.join(", "));
    }
    let mut enrichment = EntityEnrichment::default();
    for field in FIELD_NAMES {
        let Some(value) = plain.get(field) else { continue };
        if !kinds(field).contains(&kind) {
            let other = if kind == EntityType::Hero { "an item" } else { "a hero" };
            bail!("only {other} block takes {field}");
        }
        match field {
            "impact" => enrichment.impact = Some(parse_impact(value)?),
            "related" => enrichment.related = Some(parse_related(value)?),
            "order" => enrichment.order = Some(parse_order(value)?),
            _ => enrichment.bought = Some(parse_bought(value)?),
        }
    }
    Ok(enrichment)
}

fn pick<T: Clone>(update: &Option<Option<T>>, current: &Option<T>) -> Option<T> {
    match update {
        None => current.clone(),
        Some(value) => value.clone(),
    }
}

pub fn apply_update(current: &EntityEnrichment, update: &EnrichmentUpdate) -> EntityEnrichment {
    EntityEnrichment {
        impact: pick(&update.impact, &current.impact),
        related: pick(&update.related, &current.related),
        order: pick(&update.order, &current.order),
        bought: pick(&update.bought, &current.bought),
    }
}

pub fn write_enrichment_block(enrichment: &EntityEnrichment) -> Vec<String> {
    let mut body = Vec::new();
    if let Some(impact) = &enrichment.impact {
        body.extend(write_impact_node(impact));
    }
    if let Some(related) = &enrichment.related {
        body.extend(write_related_node(related));
    }
    if let Some(order) = &enrichment.order {
        body.extend(write_order_node(order));
    }
    if let Some(bought) = &enrichment.bought {
        body.extend(write_bought_node(bought));
    }
    if body.is_empty() {
        return body;
    }
    let mut lines = vec!["``attr:".to_string()];
    lines.extend(body);
    lines.push("``".into());
    lines
}
