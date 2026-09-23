use std::collections::{HashMap, HashSet};
use std::sync::LazyLock;

use deadlog_model::{EntityType, is_js_space, to_slug};
use regex::Regex;
use sha2::{Digest, Sha256};

/// Shared event contract: readers must reject links from an unknown extractor.
pub const PROPERTY_EXTRACTION_VERSION: i64 = 1;

pub const LINKED_PROPERTIES: [&str; 3] = ["cooldown", "radius", "damage"];

#[derive(Debug, Clone, PartialEq)]
pub struct PropertyValue {
    pub amount: f64,
    pub unit: String,
    pub text: String,
}

#[derive(Debug, Clone, PartialEq)]
pub struct PropertyEvent {
    pub property: &'static str,
    pub qualifier: String,
    pub old: PropertyValue,
    pub new: PropertyValue,
}

#[derive(Debug, Clone, PartialEq)]
pub enum Barrier {
    All,
    Properties(Vec<&'static str>),
}

#[derive(Debug, Clone, PartialEq)]
pub enum BulletReading {
    Event(PropertyEvent),
    Barrier(Barrier),
    Unrelated,
}

const VERBS: &str = "(?:increased|reduced|decreased|lowered|raised|changed|adjusted|improved|nerfed|buffed)";
const VALUE: &str = r"([+-]?[0-9]+(?:\.[0-9]+)?)(s|m|%)?";

static EVENT_RE: LazyLock<Regex> = LazyLock::new(|| {
    Regex::new(&format!(
        r"(?i)^(?:(T[123]) )?(base )?(cooldown|radius|damage) (?:has been |was |is )?{VERBS} from {VALUE} to {VALUE}$"
    ))
    .unwrap()
});
static REWORK_RE: LazyLock<Regex> = LazyLock::new(|| {
    Regex::new(
        r"(?i)(?-u:\b)(?:rework(?:ed)?|redesigned|replaced|renamed|removed|new ability|now a (?:passive|active)|no longer)(?-u:\b)",
    )
    .unwrap()
});
static PROPERTY_RES: LazyLock<Vec<(&'static str, Regex)>> = LazyLock::new(|| {
    LINKED_PROPERTIES
        .iter()
        .map(|property| (*property, Regex::new(&format!(r"(?i)(?-u:\b){property}(?-u:\b)")).unwrap()))
        .collect()
});

fn value(amount: &str, unit: Option<&str>, other: Option<&str>) -> PropertyValue {
    PropertyValue {
        amount: amount.parse().unwrap_or(f64::NAN),
        unit: unit.or(other).unwrap_or_default().to_string(),
        text: format!("{amount}{}", unit.unwrap_or_default()),
    }
}

/// `text.slice(units)` for a UTF-16 offset.
fn slice_utf16(text: &str, units: usize) -> &str {
    let mut count = 0;
    for (index, c) in text.char_indices() {
        if count >= units {
            return &text[index..];
        }
        count += c.len_utf16();
    }
    ""
}

pub fn read_bullet(bullet: &str, scope_name: Option<&str>) -> BulletReading {
    let trimmed = bullet.trim_matches(is_js_space);
    let mut text = trimmed.strip_suffix('.').unwrap_or(trimmed);
    if let Some(scope) = scope_name.filter(|scope| !scope.is_empty()) {
        if !text.to_lowercase().starts_with(&format!("{} ", scope.to_lowercase())) {
            return mentions(text);
        }
        text = slice_utf16(text, scope.encode_utf16().count() + 1);
    }

    let Some(captures) = EVENT_RE.captures(text) else { return mentions(text) };
    let group = |index| captures.get(index).map(|m| m.as_str());
    let (old_unit, new_unit) = (group(5), group(7));
    if let (Some(old), Some(new)) = (old_unit, new_unit)
        && old != new
    {
        return mentions(text);
    }
    let property = group(3).unwrap_or_default().to_lowercase();
    let property = LINKED_PROPERTIES.into_iter().find(|linked| *linked == property).unwrap_or("cooldown");
    let qualifier: Vec<String> =
        [group(1).map(str::to_uppercase), group(2).map(|_| "base".to_string())].into_iter().flatten().collect();
    BulletReading::Event(PropertyEvent {
        property,
        qualifier: qualifier.join(" "),
        old: value(group(4).unwrap_or_default(), old_unit, new_unit),
        new: value(group(6).unwrap_or_default(), new_unit, old_unit),
    })
}

fn mentions(text: &str) -> BulletReading {
    if REWORK_RE.is_match(text) {
        return BulletReading::Barrier(Barrier::All);
    }
    let properties: Vec<&'static str> =
        PROPERTY_RES.iter().filter(|(_, pattern)| pattern.is_match(text)).map(|(property, _)| *property).collect();
    if properties.is_empty() { BulletReading::Unrelated } else { BulletReading::Barrier(Barrier::Properties(properties)) }
}

#[derive(Debug, Clone, PartialEq)]
pub struct ScopedBullet {
    pub patch_id: String,
    pub published_at: String,
    pub entity_type: EntityType,
    pub entity_id: i64,
    pub ability: Option<String>,
    pub ability_slug: Option<String>,
    pub group_index: usize,
    pub bullet_index: usize,
    pub text: String,
}

#[derive(Debug, Clone, PartialEq)]
pub struct PreviousChange {
    pub patch_id: String,
    pub old: String,
    pub new: String,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Unlinked {
    First,
    Barrier,
    AmbiguousOrder,
    ValueMismatch,
}

#[derive(Debug, Clone, PartialEq)]
pub struct LinkedEvent {
    pub event: PropertyEvent,
    pub patch_id: String,
    pub entity_type: EntityType,
    pub entity_id: i64,
    pub ability_slug: Option<String>,
    pub group_index: usize,
    pub bullet_index: usize,
    pub digest: String,
    pub previous: Option<PreviousChange>,
    pub unlinked: Option<Unlinked>,
}

fn digest(text: &str) -> String {
    let hash = Sha256::digest(text.as_bytes());
    hash.iter().take(8).map(|byte| format!("{byte:02x}")).collect()
}

struct Scope {
    key: String,
    name: Option<String>,
    trusted: bool,
}

fn scope_of(bullet: &ScopedBullet) -> Option<Scope> {
    match bullet.entity_type {
        EntityType::Item => Some(Scope {
            key: format!("item:{}", bullet.entity_id),
            name: bullet.ability.clone(),
            trusted: bullet.ability.as_deref().is_none_or(str::is_empty),
        }),
        EntityType::Hero => {
            let ability = bullet.ability.as_deref().filter(|ability| !ability.is_empty())?;
            let slug = bullet.ability_slug.as_deref().filter(|slug| !slug.is_empty())?;
            Some(Scope {
                key: format!("hero:{}:{slug}", bullet.entity_id),
                name: Some(ability.to_string()),
                trusted: to_slug(ability) == slug,
            })
        }
    }
}

struct Step {
    patch_id: String,
    tied: bool,
    events: Vec<usize>,
    barrier: bool,
}

/// Links each readable property change to the one it continues, refusing whenever the
/// order or the values leave any doubt.
pub fn link_property_changes(bullets: &[ScopedBullet]) -> Vec<LinkedEvent> {
    let mut ordered: Vec<&ScopedBullet> = bullets.iter().collect();
    // localeCompare in the TypeScript; these ids and ISO stamps sort the same by bytes.
    ordered.sort_by(|a, b| {
        a.published_at
            .cmp(&b.published_at)
            .then_with(|| a.patch_id.cmp(&b.patch_id))
            .then(a.group_index.cmp(&b.group_index))
            .then(a.bullet_index.cmp(&b.bullet_index))
    });
    let mut tied_times = HashSet::new();
    let mut seen_times: HashMap<&str, &str> = HashMap::new();
    for bullet in &ordered {
        if let Some(owner) = seen_times.get(bullet.published_at.as_str())
            && *owner != bullet.patch_id
        {
            tied_times.insert(bullet.published_at.as_str());
        }
        seen_times.insert(&bullet.published_at, &bullet.patch_id);
    }

    let mut chain_order: Vec<String> = Vec::new();
    let mut chains: HashMap<String, Vec<Step>> = HashMap::new();
    let mut step_for = |chains: &mut HashMap<String, Vec<Step>>, chain: &str, bullet: &ScopedBullet| -> (String, usize) {
        let steps = chains.entry(chain.to_string()).or_insert_with(|| {
            chain_order.push(chain.to_string());
            Vec::new()
        });
        if steps.last().is_none_or(|step| step.patch_id != bullet.patch_id) {
            steps.push(Step {
                patch_id: bullet.patch_id.clone(),
                tied: tied_times.contains(bullet.published_at.as_str()),
                events: Vec::new(),
                barrier: false,
            });
        }
        (chain.to_string(), steps.len() - 1)
    };

    let mut events: Vec<LinkedEvent> = Vec::new();
    let mut chains_by_scope: HashMap<String, Vec<String>> = HashMap::new();
    for bullet in ordered {
        let Some(scope) = scope_of(bullet) else { continue };
        let reading = match read_bullet(&bullet.text, scope.name.as_deref()) {
            BulletReading::Event(event) if !scope.trusted => {
                BulletReading::Barrier(Barrier::Properties(vec![event.property]))
            }
            reading => reading,
        };
        let known = chains_by_scope.entry(scope.key.clone()).or_default();
        match reading {
            BulletReading::Unrelated => {}
            BulletReading::Barrier(barrier) => {
                for chain in known.iter() {
                    let property = chain.split('|').nth(1).unwrap_or_default();
                    let blocks = match &barrier {
                        Barrier::All => true,
                        Barrier::Properties(properties) => properties.contains(&property),
                    };
                    if blocks {
                        let (key, index) = step_for(&mut chains, chain, bullet);
                        chains.get_mut(&key).expect("chain exists")[index].barrier = true;
                    }
                }
            }
            BulletReading::Event(event) => {
                let chain = format!("{}|{}|{}", scope.key, event.property, event.qualifier);
                if !known.contains(&chain) {
                    known.push(chain.clone());
                }
                let (key, index) = step_for(&mut chains, &chain, bullet);
                chains.get_mut(&key).expect("chain exists")[index].events.push(events.len());
                events.push(LinkedEvent {
                    digest: digest(&bullet.text),
                    event,
                    patch_id: bullet.patch_id.clone(),
                    entity_type: bullet.entity_type,
                    entity_id: bullet.entity_id,
                    ability_slug: bullet.ability_slug.clone(),
                    group_index: bullet.group_index,
                    bullet_index: bullet.bullet_index,
                    previous: None,
                    unlinked: Some(Unlinked::First),
                });
            }
        }
    }

    for steps in chains.values() {
        let mut last: Option<&Step> = None;
        let mut blocked = false;
        for step in steps {
            let ordered = !step.tied && step.events.len() == 1;
            for &index in &step.events {
                let (unlinked, previous) = match last {
                    None => (Some(Unlinked::First), None),
                    Some(_) if blocked || step.barrier => (Some(Unlinked::Barrier), None),
                    Some(last) if !ordered || last.tied || last.events.len() != 1 => (Some(Unlinked::AmbiguousOrder), None),
                    Some(last) => {
                        let before = &events[last.events[0]];
                        let event = &events[index].event;
                        let same_unit = event.old.unit == before.event.new.unit
                            || event.old.unit.is_empty()
                            || before.event.new.unit.is_empty();
                        if event.old.amount != before.event.new.amount || !same_unit {
                            (Some(Unlinked::ValueMismatch), None)
                        } else {
                            let previous = PreviousChange {
                                patch_id: before.patch_id.clone(),
                                old: before.event.old.text.clone(),
                                new: before.event.new.text.clone(),
                            };
                            (None, Some(previous))
                        }
                    }
                };
                events[index].unlinked = unlinked;
                events[index].previous = previous;
            }
            if !step.events.is_empty() {
                last = Some(step);
                blocked = step.barrier;
            } else if step.barrier {
                blocked = true;
            }
        }
    }
    events
}
