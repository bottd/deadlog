use std::collections::HashSet;
use std::sync::LazyLock;

use anyhow::{Context, Result};
use deadlog_model::{MOG_IMAGE_PREFIX, js_trim, mog_image, mog_link, parse_mog_link};
use ego_tree::NodeRef;
use regex::Regex;
use scraper::{Html, Node};

use crate::html::document_first;
use deadlog_model::decode_uri_component;

/// Lowercased names and article-stripped aliases, as the forum notes spell them.
#[derive(Debug, Clone, Default)]
pub struct EntityLists {
    pub heroes: HashSet<String>,
    pub items: HashSet<String>,
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct GroupedContent {
    pub general: Vec<String>,
    /// In first-mention order.
    pub heroes: Vec<(String, Vec<String>)>,
    pub items: Vec<(String, Vec<String>)>,
}

const STAT_PREFIX_BLOCKLIST: [&str; 19] = [
    "base",
    "bullet",
    "gun",
    "health",
    "regen",
    "dps",
    "movespeed",
    "move",
    "stamina",
    "weapon",
    "melee",
    "fire",
    "is",
    "fixed",
    "starting",
    "spirit",
    "max",
    "min",
    "bonus",
];

const STAT_PHRASE_BLOCKLIST: [&str; 21] = [
    "base health",
    "base bullet",
    "base regen",
    "base sprint",
    "base spirit",
    "base spirit resist",
    "base bullet resist",
    "base bullet damage",
    "base movement",
    "bullet velocity",
    "bullet resist",
    "bullet damage",
    "fire rate",
    "fire rate spirit power",
    "health regen",
    "gun falloff",
    "gun damage",
    "move speed",
    "starting health",
    "last stand resistance",
    "killing blow rage damage bonus",
];

const ABILITY_KEYWORDS: [&str; 40] = [
    "cooldown",
    "damage",
    "duration",
    "radius",
    "range",
    "speed",
    "heal",
    "health",
    "stun",
    "slow",
    "silence",
    "lifesteal",
    "dps",
    "now ",
    "no longer",
    "is now",
    "bonus",
    "max ",
    "min ",
    "fire rate",
    "movement",
    "spirit",
    "bullet",
    "proc",
    "channel",
    "delay",
    "change",
    "projectile",
    "width",
    "height",
    "scaling",
    "reduced",
    "increased",
    "reworked",
    "t1 ",
    "t1:",
    "t2 ",
    "t2:",
    "t3 ",
    "t3:",
];

fn js_pattern(pattern: &str) -> Regex {
    Regex::new(&pattern.replace(r"\s", deadlog_model::JS_SPACE)).expect("valid regex")
}

static ABILITY_PREFIX: LazyLock<Regex> =
    LazyLock::new(|| js_pattern(r"^([A-Z][a-zA-Z']*(?:\s+[A-Z][a-zA-Z']*)*)\s+(?:T[1-3](?-u:\b)|[a-z])"));
static WORDS: LazyLock<Regex> = LazyLock::new(|| js_pattern(r"\s+"));

/// The ability a note opens with, e.g. "Shoulder Charge" in "Shoulder Charge cooldown
/// reduced", unless that opening is a stat ("Base Health …").
pub fn detect_ability_prefix(note: &str, known_abilities: Option<&HashSet<String>>) -> Option<String> {
    let captures = ABILITY_PREFIX.captures(note)?;
    let candidate = captures.get(1)?;
    let candidate_lower = candidate.as_str().to_lowercase();

    if let Some(known) = known_abilities.filter(|known| !known.is_empty()) {
        return known.contains(&candidate_lower).then(|| candidate.as_str().to_string());
    }

    let first_word = WORDS.split(candidate.as_str()).next().unwrap_or_default().to_lowercase();
    if STAT_PREFIX_BLOCKLIST.contains(&first_word.as_str()) || STAT_PHRASE_BLOCKLIST.contains(&candidate_lower.as_str())
    {
        return None;
    }

    let rest = note[candidate.end()..].trim_start_matches(deadlog_model::is_js_whitespace).to_lowercase();
    ABILITY_KEYWORDS.iter().any(|keyword| rest.starts_with(keyword)).then(|| candidate.as_str().to_string())
}

#[derive(Debug, Clone, PartialEq)]
pub struct NoteGroup {
    pub ability_name: Option<String>,
    pub notes: Vec<String>,
}

pub fn group_notes_by_ability(notes: &[String], known_abilities: Option<&HashSet<String>>) -> Vec<NoteGroup> {
    let mut groups: Vec<NoteGroup> = Vec::new();
    let mut current_ability: Option<String> = None;
    let mut current_notes: Vec<String> = Vec::new();

    for note in notes {
        let ability = detect_ability_prefix(note, known_abilities);
        match &ability {
            Some(name) if Some(name) != current_ability.as_ref() => {
                if !current_notes.is_empty() {
                    groups.push(NoteGroup {
                        ability_name: current_ability.clone(),
                        notes: std::mem::take(&mut current_notes),
                    });
                }
                current_ability = ability.clone();
                current_notes = vec![note.clone()];
            }
            Some(_) => current_notes.push(note.clone()),
            None => {
                if current_ability.is_some() && !current_notes.is_empty() {
                    groups.push(NoteGroup {
                        ability_name: current_ability.take(),
                        notes: std::mem::take(&mut current_notes),
                    });
                }
                match groups.last_mut() {
                    Some(last) if last.ability_name.is_none() => last.notes.push(note.clone()),
                    _ => groups.push(NoteGroup { ability_name: None, notes: vec![note.clone()] }),
                }
            }
        }
    }
    if !current_notes.is_empty() {
        groups.push(NoteGroup { ability_name: current_ability, notes: current_notes });
    }
    groups
}

/// Mog link targets and labels are bracket/paren delimited, so neither may contain them.
static SAFE_HREF: LazyLock<Regex> = LazyLock::new(|| js_pattern(r"(?i)^https?://[^\s\[\]()]+$"));
static LINK_DELIMITERS: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"[\[\]()]").expect("valid regex"));
static PROXY_IMAGE: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"/proxy\.php\?image=([^&]+)").expect("valid regex"));
static EXTENSION: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"\.[^.]+$").expect("valid regex"));
static BLANK_LINES: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"\n{2,}").expect("valid regex"));

fn safe_label(text: &str) -> String {
    js_trim(&LINK_DELIMITERS.replace_all(text, "")).to_string()
}

fn link_markup(href: &str, text: &str) -> String {
    let label = safe_label(text);
    if !SAFE_HREF.is_match(href) {
        return label;
    }
    mog_link(href, if label.is_empty() { href } else { &label })
}

/// An image goes through the same allowlist as a link: Mog's transclusion is inline
/// grammar, where one unbalanced `((` swallows the rest of the block.
fn image_markup(src: &str, alt: &str) -> String {
    let label = safe_label(alt);
    if !SAFE_HREF.is_match(src) {
        return label;
    }
    mog_image(src, &label)
}

fn element_name<'a>(node: NodeRef<'a, Node>) -> Option<&'a str> {
    node.value().as_element().map(|element| element.name())
}

fn image_block(node: NodeRef<Node>) -> Result<String> {
    let element = node.value().as_element().expect("an img element");
    let src = element.attr("src").unwrap_or_default();
    let alt = element.attr("alt").unwrap_or_default();
    let url = match PROXY_IMAGE.captures(src) {
        Some(captures) => decode_uri_component(&captures[1]).context("URIError: URI malformed")?,
        None => src.to_string(),
    };
    let label = EXTENSION.replace(alt, "").replace(['-', '_'], " ");
    Ok(format!("\n{}\n", image_markup(&url, &label)))
}

/// `textContent` of the post body after the rewrites `extract_content` makes: breaks
/// become newlines, images become transclusions (replacing a wrapping link, since the
/// transclusion carries its own target) and links become Mog links.
fn rewritten_text(node: NodeRef<Node>, out: &mut String) -> Result<()> {
    for child in node.children() {
        match child.value() {
            Node::Text(text) => out.push_str(text),
            Node::Element(_) => match element_name(child) {
                Some("br") => out.push('\n'),
                Some("img") => out.push_str(&image_block(child)?),
                Some("a") => {
                    let image = child.children().find(|grandchild| element_name(*grandchild) == Some("img"));
                    if let Some(image) = image {
                        out.push_str(&image_block(image)?);
                        continue;
                    }
                    let mut label = String::new();
                    rewritten_text(child, &mut label)?;
                    let href = child.value().as_element().and_then(|element| element.attr("href")).unwrap_or_default();
                    out.push_str(&link_markup(href, &label));
                }
                _ => rewritten_text(child, out)?,
            },
            _ => {}
        }
    }
    Ok(())
}

/// The post's text with links and images as Mog markup. Zero-width characters are
/// deliberately left alone: the forum uses them as the only separator between bullets
/// crammed onto one line (see 2025/12-16), so stripping them runs "0.75" straight into
/// the next "- Backstabber:".
pub fn extract_content(html: &str) -> Result<String> {
    let document = Html::parse_document(html);
    let Some(wrapper) = document_first(&document, ".bbWrapper") else { return Ok(html.to_string()) };
    let mut text = String::new();
    rewritten_text(*wrapper, &mut text)?;
    Ok(js_trim(&BLANK_LINES.replace_all(&text, "\n")).to_string())
}

enum Parsed {
    Hero(String, String),
    Item(String, String),
    General(String),
}

static ENTITY_LINE: LazyLock<Regex> = LazyLock::new(|| js_pattern(r"^([^:]+):\s*(.+)$"));

fn parse_changelog_line(text: &str, entities: &EntityLists) -> Parsed {
    if let Some(captures) = ENTITY_LINE.captures(text) {
        let entity = js_trim(&captures[1]);
        let note = js_trim(&captures[2]).to_string();
        let lower = entity.to_lowercase();
        if entities.heroes.contains(&lower) {
            return Parsed::Hero(entity.to_string(), note);
        }
        if entities.items.contains(&lower) {
            return Parsed::Item(entity.to_string(), note);
        }
    }
    Parsed::General(text.to_string())
}

// Valve's forum posts mix markers: most patches use "-", but plenty use "*" or "•".
// Accepting only "-" silently discards a whole patch (see 10-02-2025, 194 bullets).
// "-"/"•" keep their original space-optional form ("-20% Reload Time" is a bullet);
// "*" requires a space so emphasis and stray asterisks aren't swallowed.
static BULLET_MARKER: LazyLock<Regex> = LazyLock::new(|| js_pattern(r"^(?:[-•]|\*\s)"));
static BULLET_PREFIX: LazyLock<Regex> = LazyLock::new(|| js_pattern(r"^[-*•]+\s*"));

fn push_note(groups: &mut Vec<(String, Vec<String>)>, name: String, note: String) {
    match groups.iter_mut().find(|(existing, _)| *existing == name) {
        Some((_, notes)) => notes.push(note),
        None => groups.push((name, vec![note])),
    }
}

pub fn parse_and_group_content(raw_content: &str, entities: &EntityLists) -> GroupedContent {
    let mut result = GroupedContent::default();
    let mut prose = Vec::new();
    let mut saw_bullet = false;

    for line in raw_content.split('\n') {
        let trimmed = js_trim(line);
        if trimmed.starts_with(MOG_IMAGE_PREFIX) {
            result.general.push(trimmed.to_string());
            continue;
        }
        if trimmed.is_empty() {
            continue;
        }
        if !BULLET_MARKER.is_match(trimmed) {
            // Valve posts demo clips on their own line beside the screenshots. Such a line
            // carries no bullet marker, so without this it lands in `prose` and is dropped
            // from every post that also has bullets — which is all of them.
            if parse_mog_link(trimmed).is_some() {
                result.general.push(trimmed.to_string());
            } else {
                prose.push(trimmed.to_string());
            }
            continue;
        }

        let stripped = js_trim(&BULLET_PREFIX.replace(trimmed, "")).to_string();
        if stripped.is_empty() {
            continue;
        }
        saw_bullet = true;
        match parse_changelog_line(&stripped, entities) {
            Parsed::Hero(name, note) => push_note(&mut result.heroes, name, note),
            Parsed::Item(name, note) => push_note(&mut result.items, name, note),
            Parsed::General(note) => result.general.push(note),
        }
    }

    // Some "updates" are prose announcements with no bullets at all. Keeping their
    // text beats emitting an empty changelog, but never let prose outrank real bullets.
    if !saw_bullet {
        result.general.extend(prose);
    }
    result
}

/// Drops repeated `-` bullets. Deliberately `-` only: `*` lines repeat legitimately
/// (the same stat tweak listed under two items), and deduping them drops real changes.
pub fn deduplicate_lines(text: &str) -> String {
    let mut seen = HashSet::new();
    text.split('\n')
        .filter(|line| {
            let trimmed = js_trim(line);
            !trimmed.starts_with('-') || seen.insert(trimmed.to_string())
        })
        .collect::<Vec<_>>()
        .join("\n")
}
