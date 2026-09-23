//! The hero and item lists from the Deadlock asset API, reduced to what the build reads
//! and in the key order the TypeScript schemas wrote them, so `entities.json` and the
//! JSON columns come out byte for byte. Two readers exist because the API and the
//! committed snapshot differ: the API carries tooltip layout and scale functions, the
//! snapshot only the properties a tooltip shows.

use std::sync::LazyLock;

use anyhow::{Context, Result, bail};
use regex::Regex;
use serde::{Serialize, Serializer};
use serde_json::{Map, Value};

/// A zod `.nullish()` field: absent, an explicit `null`, or a value. `null` survives a
/// round trip through `entities.json`, absence does not.
#[derive(Debug, Clone, Default, PartialEq)]
pub enum Nullish<T> {
    #[default]
    Absent,
    Null,
    Value(T),
}

impl<T> Nullish<T> {
    pub fn is_absent(&self) -> bool {
        matches!(self, Nullish::Absent)
    }

    pub fn value(&self) -> Option<&T> {
        match self {
            Nullish::Value(value) => Some(value),
            _ => None,
        }
    }
}

impl<T: Serialize> Serialize for Nullish<T> {
    fn serialize<S: Serializer>(&self, serializer: S) -> Result<S::Ok, S::Error> {
        match self {
            Nullish::Value(value) => value.serialize(serializer),
            _ => serializer.serialize_none(),
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Serialize)]
pub struct HeroItems {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub signature1: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub signature2: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub signature3: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub signature4: Option<String>,
}

impl HeroItems {
    pub fn signature(&self, position: usize) -> Option<&str> {
        match position {
            1 => self.signature1.as_deref(),
            2 => self.signature2.as_deref(),
            3 => self.signature3.as_deref(),
            4 => self.signature4.as_deref(),
            _ => None,
        }
    }
}

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct Hero {
    pub id: i64,
    pub name: String,
    pub class_name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub hero_type: Option<String>,
    pub images: Map<String, Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub items: Option<HeroItems>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub player_selectable: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub disabled: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub in_development: Option<bool>,
}

impl Hero {
    pub fn is_released(&self) -> bool {
        self.player_selectable == Some(true) && self.disabled != Some(true) && self.in_development != Some(true)
    }
}

pub const DESCRIPTION_FIELDS: [&str; 6] = ["desc", "active", "passive", "t1_desc", "t2_desc", "t3_desc"];

#[derive(Debug, Clone, Default, PartialEq, Serialize)]
pub struct Description {
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub desc: Nullish<String>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub active: Nullish<String>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub passive: Nullish<String>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub t1_desc: Nullish<String>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub t2_desc: Nullish<String>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub t3_desc: Nullish<String>,
}

impl Description {
    pub fn field(&self, name: &str) -> Option<&str> {
        self.field_ref(name).and_then(|field| field.value()).map(String::as_str)
    }

    fn field_ref(&self, name: &str) -> Option<&Nullish<String>> {
        Some(match name {
            "desc" => &self.desc,
            "active" => &self.active,
            "passive" => &self.passive,
            "t1_desc" => &self.t1_desc,
            "t2_desc" => &self.t2_desc,
            "t3_desc" => &self.t3_desc,
            _ => return None,
        })
    }

    fn field_mut(&mut self, name: &str) -> &mut Nullish<String> {
        match name {
            "desc" => &mut self.desc,
            "active" => &mut self.active,
            "passive" => &mut self.passive,
            "t1_desc" => &mut self.t1_desc,
            "t2_desc" => &mut self.t2_desc,
            _ => &mut self.t3_desc,
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq, Serialize)]
pub struct Property {
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub value: Nullish<Value>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub label: Nullish<String>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub prefix: Nullish<String>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub postfix: Nullish<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub scales: Option<bool>,
}

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct Item {
    pub id: i64,
    pub class_name: String,
    pub name: String,
    #[serde(rename = "type")]
    pub kind: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub image: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub image_webp: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub shop_image: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub shop_image_webp: Option<String>,
    /// Shop taxonomy: null when absent from the source or an unexpected shape.
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub item_slot_type: Nullish<String>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub item_tier: Nullish<i64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub shopable: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub disabled: Option<bool>,
    #[serde(skip_serializing_if = "Nullish::is_absent")]
    pub description: Nullish<Description>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub properties: Option<Vec<(String, Property)>>,
}

impl Item {
    pub fn image(&self) -> &str {
        [&self.shop_image_webp, &self.shop_image, &self.image_webp, &self.image]
            .into_iter()
            .flatten()
            .find(|url| !url.is_empty())
            .map_or("", String::as_str)
    }

    pub fn ability_image(&self) -> &str {
        [&self.image_webp, &self.image, &self.shop_image_webp, &self.shop_image]
            .into_iter()
            .flatten()
            .find(|url| !url.is_empty())
            .map_or("", String::as_str)
    }

    pub fn description_field(&self, name: &str) -> Option<&str> {
        self.description.value().and_then(|description| description.field(name))
    }

    pub fn is_released(&self) -> bool {
        !self.item_slot_type.is_absent()
            && !matches!(self.item_slot_type, Nullish::Null)
            && self.shopable == Some(true)
            && self.disabled != Some(true)
    }
}

#[derive(Debug, Clone, PartialEq)]
pub struct Provenance {
    pub client_version: i64,
    pub language: String,
    pub collected_at: String,
}

#[derive(Debug, Clone, PartialEq)]
pub struct EntitySnapshot {
    pub heroes: Vec<Hero>,
    pub items: Vec<Item>,
    pub provenance: Option<Provenance>,
}

fn serialize_properties(properties: &[(String, Property)]) -> Result<Value> {
    let mut map = Map::new();
    for (key, property) in properties {
        map.insert(key.clone(), serde_json::to_value(property)?);
    }
    Ok(Value::Object(map))
}

pub fn item_value(item: &Item) -> Result<Value> {
    let mut value = serde_json::to_value(item)?;
    if let (Some(properties), Some(map)) = (&item.properties, value.as_object_mut()) {
        map.insert("properties".into(), serialize_properties(properties)?);
    }
    Ok(value)
}

fn field<'a>(map: &'a Map<String, Value>, key: &str) -> Option<&'a Value> {
    map.get(key)
}

fn required_string(map: &Map<String, Value>, key: &str) -> Result<String> {
    match field(map, key) {
        Some(Value::String(text)) => Ok(text.clone()),
        _ => bail!("{key}: expected a string"),
    }
}

fn required_number(map: &Map<String, Value>, key: &str) -> Result<i64> {
    match field(map, key).and_then(Value::as_f64) {
        Some(number) if number.fract() == 0.0 => Ok(number as i64),
        _ => bail!("{key}: expected a number"),
    }
}

/// `z.string().optional()`: absent is fine, anything but a string fails the response.
fn optional_string(map: &Map<String, Value>, key: &str) -> Result<Option<String>> {
    match field(map, key) {
        None => Ok(None),
        Some(Value::String(text)) => Ok(Some(text.clone())),
        Some(_) => bail!("{key}: expected a string"),
    }
}

fn optional_bool(map: &Map<String, Value>, key: &str) -> Result<Option<bool>> {
    match field(map, key) {
        None => Ok(None),
        Some(Value::Bool(flag)) => Ok(Some(*flag)),
        Some(_) => bail!("{key}: expected a boolean"),
    }
}

/// `.nullish().catch(fallback)`: a wrong shape becomes the fallback instead of failing.
fn nullish<T>(
    map: &Map<String, Value>,
    key: &str,
    read: impl FnOnce(&Value) -> Option<T>,
    fallback: Nullish<T>,
) -> Nullish<T> {
    match field(map, key) {
        None => Nullish::Absent,
        Some(Value::Null) => Nullish::Null,
        Some(value) => read(value).map_or(fallback, Nullish::Value),
    }
}

fn nullish_string(map: &Map<String, Value>, key: &str) -> Nullish<String> {
    nullish(map, key, |value| value.as_str().map(str::to_string), Nullish::Absent)
}

fn object<'a>(value: &'a Value, what: &str) -> Result<&'a Map<String, Value>> {
    value.as_object().with_context(|| format!("{what}: expected an object"))
}

pub fn read_hero(value: &Value) -> Result<Hero> {
    let map = object(value, "hero")?;
    let images = object(field(map, "images").unwrap_or(&Value::Null), "images")?;
    if let Some((key, _)) = images.iter().find(|(_, url)| !url.is_string()) {
        bail!("images.{key}: expected a string");
    }
    let items = match field(map, "items") {
        None => None,
        Some(value) => {
            let items = object(value, "items")?;
            Some(HeroItems {
                signature1: optional_string(items, "signature1")?,
                signature2: optional_string(items, "signature2")?,
                signature3: optional_string(items, "signature3")?,
                signature4: optional_string(items, "signature4")?,
            })
        }
    };
    Ok(Hero {
        id: required_number(map, "id")?,
        name: required_string(map, "name")?,
        class_name: required_string(map, "class_name")?,
        hero_type: optional_string(map, "hero_type")?,
        images: images.clone(),
        items,
        player_selectable: optional_bool(map, "player_selectable")?,
        disabled: optional_bool(map, "disabled")?,
        in_development: optional_bool(map, "in_development")?,
    })
}

fn read_description(value: &Value) -> Option<Description> {
    let map = value.as_object()?;
    let mut description = Description::default();
    for name in DESCRIPTION_FIELDS {
        *description.field_mut(name) = nullish_string(map, name);
    }
    Some(description)
}

fn read_property_fields(map: &Map<String, Value>) -> Property {
    Property {
        value: nullish(map, "value", |value| (value.is_number() || value.is_string()).then(|| value.clone()), Nullish::Absent),
        label: nullish_string(map, "label"),
        prefix: nullish_string(map, "prefix"),
        postfix: nullish_string(map, "postfix"),
        scales: None,
    }
}

const ITEM_TYPES: [&str; 3] = ["weapon", "ability", "upgrade"];
const SLOT_TYPES: [&str; 3] = ["weapon", "vitality", "spirit"];

fn read_item_fields(map: &Map<String, Value>) -> Result<Item> {
    let kind = required_string(map, "type")?;
    if !ITEM_TYPES.contains(&kind.as_str()) {
        bail!("type: unexpected \"{kind}\"");
    }
    Ok(Item {
        id: required_number(map, "id")?,
        class_name: required_string(map, "class_name")?,
        name: required_string(map, "name")?,
        kind,
        image: optional_string(map, "image")?,
        image_webp: optional_string(map, "image_webp")?,
        shop_image: optional_string(map, "shop_image")?,
        shop_image_webp: optional_string(map, "shop_image_webp")?,
        item_slot_type: nullish(
            map,
            "item_slot_type",
            |value| value.as_str().filter(|slot| SLOT_TYPES.contains(slot)).map(str::to_string),
            Nullish::Null,
        ),
        item_tier: nullish(
            map,
            "item_tier",
            |value| value.as_f64().filter(|tier| tier.fract() == 0.0 && *tier > 0.0).map(|tier| tier as i64),
            Nullish::Null,
        ),
        shopable: optional_bool(map, "shopable")?,
        disabled: optional_bool(map, "disabled")?,
        description: nullish(map, "description", read_description, Nullish::Null),
        properties: None,
    })
}

/// One item as `entities.json` stores it.
pub fn read_snapshot_item(value: &Value) -> Result<Item> {
    let map = object(value, "item")?;
    let mut item = read_item_fields(map)?;
    item.properties = match field(map, "properties").and_then(Value::as_object) {
        None => None,
        Some(properties) => properties
            .iter()
            .map(|(key, value)| {
                let source = value.as_object()?;
                let mut property = read_property_fields(source);
                property.scales = match source.get("scales") {
                    None => None,
                    Some(Value::Bool(flag)) => Some(*flag),
                    Some(_) => return None,
                };
                Some((key.clone(), property))
            })
            .collect(),
    };
    Ok(item)
}

static INLINE_SVG: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(&format!(r"(?i)<svg(?-u:\b)[\s\S]*?</svg{}*>", deadlog_model::JS_SPACE)).unwrap());

pub fn strip_inline_svg(markup: &str) -> String {
    INLINE_SVG.replace_all(markup, "").into_owned()
}

fn strings(value: Option<&Value>) -> Vec<String> {
    value
        .and_then(Value::as_array)
        .map(|items| items.iter().filter_map(Value::as_str).filter(|key| !key.is_empty()).map(str::to_string).collect())
        .unwrap_or_default()
}

fn records(value: Option<&Value>) -> Vec<&Map<String, Value>> {
    value.and_then(Value::as_array).map(|items| items.iter().filter_map(Value::as_object).collect()).unwrap_or_default()
}

/// The property keys a tooltip actually shows, in the order it shows them.
pub fn displayed_property_keys(tooltip_sections: Option<&Value>, tooltip_details: Option<&Value>) -> Vec<String> {
    let shop = records(tooltip_sections).into_iter().flat_map(|section| {
        records(section.get("section_attributes")).into_iter().flat_map(|attribute| {
            [
                strings(attribute.get("important_properties")),
                strings(attribute.get("elevated_properties")),
                strings(attribute.get("properties")),
            ]
            .concat()
        })
    });
    let details = tooltip_details.and_then(Value::as_object);
    let ability = records(details.and_then(|details| details.get("info_sections"))).into_iter().flat_map(|section| {
        let blocks = records(section.get("properties_block")).into_iter().flat_map(|block| {
            records(block.get("properties")).into_iter().flat_map(|entry| {
                [entry.get("important_property"), entry.get("status_effect_value")]
                    .into_iter()
                    .flatten()
                    .filter_map(Value::as_str)
                    .filter(|key| !key.is_empty())
                    .map(str::to_string)
                    .collect::<Vec<_>>()
            })
        });
        blocks.chain(strings(section.get("basic_properties"))).collect::<Vec<_>>()
    });
    let mut keys: Vec<String> = Vec::new();
    for key in strings(details.and_then(|details| details.get("additional_header_properties")))
        .into_iter()
        .chain(shop)
        .chain(ability)
    {
        if !keys.contains(&key) {
            keys.push(key);
        }
    }
    keys
}

/// JavaScript truthiness, for `scale_function ? … : …`.
fn truthy(value: &Value) -> bool {
    match value {
        Value::Null => false,
        Value::Bool(flag) => *flag,
        Value::Number(number) => number.as_f64().is_some_and(|number| number != 0.0),
        Value::String(text) => !text.is_empty(),
        _ => true,
    }
}

/// One item as the asset API returns it: descriptions lose their inline SVG icons and
/// properties narrow to the ones its tooltip shows.
pub fn read_api_item(value: &Value) -> Result<Item> {
    let map = object(value, "item")?;
    let mut item = read_item_fields(map)?;
    if let Nullish::Value(description) = &mut item.description {
        for name in DESCRIPTION_FIELDS {
            if let Nullish::Value(text) = description.field_mut(name)
                && !text.is_empty()
            {
                *text = strip_inline_svg(text);
            }
        }
    }
    let properties: Option<Vec<(&String, &Map<String, Value>)>> = field(map, "properties")
        .and_then(Value::as_object)
        .and_then(|properties| properties.iter().map(|(key, value)| Some((key, value.as_object()?))).collect());
    let mut shown = Vec::new();
    for key in displayed_property_keys(field(map, "tooltip_sections"), field(map, "tooltip_details")) {
        let Some(source) = properties.as_ref().and_then(|properties| {
            properties.iter().rev().find(|(name, _)| **name == key).map(|(_, source)| *source)
        }) else {
            continue;
        };
        let mut property = read_property_fields(source);
        if source.get("scale_function").is_some_and(truthy) {
            property.scales = Some(true);
        }
        shown.push((key, property));
    }
    item.properties = (!shown.is_empty()).then_some(shown);
    Ok(item)
}

fn list<T>(value: Option<&Value>, what: &str, read: impl Fn(&Value) -> Result<T>) -> Result<Vec<T>> {
    let Some(items) = value.and_then(Value::as_array) else { bail!("{what}: expected an array") };
    items.iter().enumerate().map(|(index, item)| read(item).with_context(|| format!("{what}[{index}]"))).collect()
}

pub fn read_api_heroes(value: &Value) -> Result<Vec<Hero>> {
    list(Some(value), "heroes", read_hero)
}

pub fn read_api_items(value: &Value) -> Result<Vec<Item>> {
    list(Some(value), "items", read_api_item)
}

/// `entities.json`, or an error when it is not a usable snapshot.
pub fn read_snapshot(json: &str) -> Result<EntitySnapshot> {
    let value: Value = serde_json::from_str(json)?;
    let map = object(&value, "snapshot")?;
    let heroes = list(map.get("heroes"), "heroes", read_hero)?;
    let items = list(map.get("items"), "items", read_snapshot_item)?;
    let schema_version = match map.get("schemaVersion") {
        None => None,
        Some(version) if version.as_f64() == Some(2.0) => Some(2),
        Some(_) => bail!("schemaVersion: expected 2"),
    };
    let client_version = match map.get("clientVersion") {
        None => None,
        Some(version) => match version.as_f64() {
            Some(number) if number.fract() == 0.0 && number > 0.0 => Some(number as i64),
            _ => bail!("clientVersion: expected a positive integer"),
        },
    };
    let language = optional_string(map, "language")?.filter(|language| !language.is_empty());
    let collected_at = optional_string(map, "collectedAt")?.filter(|collected| !collected.is_empty());
    let provenance = match (schema_version, client_version, language, collected_at) {
        (Some(_), Some(client_version), Some(language), Some(collected_at)) => {
            Some(Provenance { client_version, language, collected_at })
        }
        _ => None,
    };
    Ok(EntitySnapshot { heroes, items, provenance })
}

const SNAPSHOT_SCHEMA_VERSION: i64 = 2;

fn entity_lists(snapshot: &EntitySnapshot) -> Result<(Value, Value)> {
    let heroes = serde_json::to_value(&snapshot.heroes)?;
    let items = Value::Array(snapshot.items.iter().map(item_value).collect::<Result<_>>()?);
    Ok((heroes, items))
}

/// `entities.json` in API order, never sorted: item slug dedupe breaks ties by that order.
pub fn serialize_snapshot(snapshot: &EntitySnapshot) -> Result<String> {
    let (heroes, items) = entity_lists(snapshot)?;
    let mut envelope = Map::new();
    if let Some(provenance) = &snapshot.provenance {
        envelope.insert("schemaVersion".into(), SNAPSHOT_SCHEMA_VERSION.into());
        envelope.insert("clientVersion".into(), provenance.client_version.into());
        envelope.insert("language".into(), provenance.language.clone().into());
        envelope.insert("collectedAt".into(), provenance.collected_at.clone().into());
    }
    envelope.insert("heroes".into(), heroes);
    envelope.insert("items".into(), items);
    Ok(format!("{}\n", deadlog_model::js_json_pretty(&Value::Object(envelope), "\t")))
}

/// The snapshot as a comparison key that ignores when it was collected.
pub fn without_collection_time(snapshot: &EntitySnapshot) -> Result<String> {
    let (heroes, items) = entity_lists(snapshot)?;
    let mut key = Map::new();
    if let Some(provenance) = &snapshot.provenance {
        key.insert("clientVersion".into(), provenance.client_version.into());
        key.insert("language".into(), provenance.language.clone().into());
    }
    key.insert("heroes".into(), heroes);
    key.insert("items".into(), items);
    Ok(deadlog_model::js_json(&Value::Object(key)))
}
