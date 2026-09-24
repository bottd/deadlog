//! Shop and ability tooltip text, reduced to plain paragraphs and a handful of numeric
//! properties. Anything that still looks like an unresolved localisation token is
//! dropped rather than shown.

use std::sync::LazyLock;

use deadlog_model::{AssetIdentity, ContextProperty, ContextSection, EntityContext, js_number};
use regex::{Captures, Regex};
use serde_json::Value;

use super::snapshot::{Description, Item, Nullish, Property, Provenance, strip_inline_svg};
use deadlog_model::{JS_SPACE, js_trim as trim};

static SPACES: LazyLock<Regex> = LazyLock::new(|| Regex::new(&format!("{JS_SPACE}+")).unwrap());
static BREAKS: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(&format!(r"(?i)(?:<br{JS_SPACE}*/?>{JS_SPACE}*)+")).unwrap());
static TAGS: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"<[^>]*>").unwrap());
static ENTITIES: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"(?i)&(#x[0-9a-f]+|#[0-9]+|[a-z]+);").unwrap());
static UNRESOLVED_TOKEN: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r"(?i)\{[a-z]:[^}]*\}|#[A-Za-z]+_[A-Za-z_]+|&[a-z#0-9]+;").unwrap());

fn named_entity(name: &str) -> Option<&'static str> {
    Some(match name {
        "amp" => "&",
        "lt" => "<",
        "gt" => ">",
        "quot" => "\"",
        "apos" => "'",
        "nbsp" => " ",
        _ => return None,
    })
}

fn decode_entities(text: &str) -> String {
    ENTITIES
        .replace_all(text, |captures: &Captures| {
            let whole = captures[0].to_string();
            let body = &captures[1];
            let Some(numeric) = body.strip_prefix('#') else {
                return named_entity(&body.to_lowercase()).map_or(whole, str::to_string);
            };
            let code = match numeric.strip_prefix(['x', 'X']) {
                Some(hex) => u32::from_str_radix(hex, 16).ok(),
                None => numeric.parse::<u32>().ok(),
            };
            code.filter(|code| *code > 0 && *code <= 0x10ffff).and_then(char::from_u32).map_or(whole, |c| c.to_string())
        })
        .into_owned()
}

pub fn markup_paragraphs(markup: Option<&str>) -> Vec<String> {
    let Some(markup) = markup.filter(|markup| !markup.is_empty()) else { return Vec::new() };
    let stripped = strip_inline_svg(markup);
    let spaced = SPACES.replace_all(&stripped, " ");
    let broken = BREAKS.replace_all(&spaced, "\n");
    let text = TAGS.replace_all(&broken, "");
    let paragraphs: Vec<String> = text
        .split('\n')
        .map(|paragraph| trim(&SPACES.replace_all(&decode_entities(paragraph), " ")).to_string())
        .filter(|paragraph| !paragraph.is_empty())
        .collect();
    if paragraphs.iter().any(|paragraph| UNRESOLVED_TOKEN.is_match(paragraph)) { Vec::new() } else { paragraphs }
}

pub fn description_text(markup: Option<&str>) -> Option<String> {
    Some(markup_paragraphs(markup).join(" ")).filter(|text| !text.is_empty())
}

const SECTION_SOURCES: [(&str, &str, Option<&str>); 6] = [
    ("desc", "description", None),
    ("active", "active", Some("Active")),
    ("passive", "passive", Some("Passive")),
    ("t1_desc", "tier1", Some("Tier 1")),
    ("t2_desc", "tier2", Some("Tier 2")),
    ("t3_desc", "tier3", Some("Tier 3")),
];

pub fn context_sections(description: Option<&Description>) -> Vec<ContextSection> {
    let mut sections = Vec::new();
    let mut seen = Vec::new();
    for (field, kind, label) in SECTION_SOURCES {
        let paragraphs = markup_paragraphs(description.and_then(|description| description.field(field)));
        let text = paragraphs.join("\n");
        if text.is_empty() || seen.contains(&text) {
            continue;
        }
        seen.push(text);
        sections.push(ContextSection { kind: kind.into(), label: label.map(str::to_string), paragraphs });
    }
    sections
}

static VALUE: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"^(-?)([0-9]*\.?[0-9]+)(m|s)?$").unwrap());
static LABEL_MARKUP: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"[{}<>#]").unwrap());

/// `String(value ?? '')`.
fn value_text(value: &Nullish<Value>) -> String {
    match value.value() {
        Some(Value::String(text)) => text.clone(),
        Some(Value::Number(number)) => {
            if number.is_i64() || number.is_u64() {
                number.to_string()
            } else {
                number.as_f64().map(js_number).unwrap_or_default()
            }
        }
        _ => String::new(),
    }
}

pub fn context_property(key: &str, source: &Property) -> Option<ContextProperty> {
    let label = trim(source.label.value()?);
    if label.is_empty() || LABEL_MARKUP.is_match(label) {
        return None;
    }

    let text = value_text(&source.value);
    let captures = VALUE.captures(trim(&text))?;
    let magnitude: f64 = captures[2].parse().ok()?;
    if !magnitude.is_finite() || magnitude == 0.0 {
        return None;
    }

    let postfix = source.postfix.value().map_or("", |postfix| trim(postfix));
    let unit = match captures.get(3) {
        Some(suffix) if !postfix.starts_with(suffix.as_str()) => suffix.as_str(),
        _ => postfix,
    };
    if unit.encode_utf16().count() > 20 || unit.contains(['{', '}', '<', '>', '#', '&']) {
        return None;
    }

    let prefix = source.prefix.value().map_or("", String::as_str);
    let sign = if &captures[1] == "-" || prefix == "-" {
        "-"
    } else if prefix == "+" || prefix == "{s:sign}" {
        "+"
    } else if prefix.is_empty() {
        ""
    } else {
        return None;
    };

    Some(ContextProperty {
        key: key.to_string(),
        label: label.to_string(),
        display: format!("{sign}{}", js_number(magnitude)),
        unit: unit.to_string(),
        scales: source.scales == Some(true),
    })
}

pub fn context_properties(properties: Option<&[(String, Property)]>) -> Vec<ContextProperty> {
    properties.unwrap_or_default().iter().filter_map(|(key, source)| context_property(key, source)).collect()
}

pub fn build_entity_context(
    identity: AssetIdentity,
    source: &Item,
    provenance: Option<&Provenance>,
) -> Option<EntityContext> {
    let sections = context_sections(source.description.value());
    let properties = context_properties(source.properties.as_deref());
    if sections.is_empty() && properties.is_empty() {
        return None;
    }
    Some(EntityContext {
        identity,
        client_version: provenance.map(|provenance| provenance.client_version),
        language: provenance.map(|provenance| provenance.language.clone()),
        collected_at: provenance.map(|provenance| provenance.collected_at.clone()),
        sections,
        properties,
    })
}
