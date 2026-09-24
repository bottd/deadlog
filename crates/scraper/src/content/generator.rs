use std::collections::HashMap;
use std::sync::LazyLock;

use anyhow::Result;
use deadlog_changelog::EntityBulletGroup;
use deadlog_db::write::abilities::resolve_ability_slots;
use deadlog_db::write::snapshot::{Hero, Item};
use deadlog_model::{
    HERO_ICON_IMAGE_KEYS, MOG_IMAGE_PREFIX, NameIndex, ability_fragment_id, entity_fragment_id, entity_name_aliases,
    escape_mog_delimiters, hero_image, mog_image, mog_link, parse_mog_link, resolve_hero_ability_slug, strip_mog_links,
    to_slug,
};
use regex::Regex;

use super::parser::{EntityLists, GroupedContent, group_notes_by_ability, parse_and_group_content};
use crate::hero_abilities::{AbilityName, regroup_ability_changes};
use deadlog_model::locale_compare;

// The forum names a video attachment "<name>-mp4.<id>"; a plain ".mp4" covers anywhere
// else a clip is linked directly. It serves no embeddable video, so a clip renders as a
// labelled card rather than a bare URL.
static VIDEO_HREF: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"(?i)(?:-|\.)(?:mp4|webm|m4v)(?:\.|$|/)").unwrap());
static VIDEO_EXT: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"(?i)\.(?:mp4|webm|m4v)$").unwrap());
static VIEW_ATTACHMENT: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(&format!(r"(?i)^view attachment{}+", deadlog_model::JS_SPACE)).unwrap());
static SEPARATORS: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"[-_]+").unwrap());

/// "View attachment bounce_update.mp4" is XenForo chrome; the filename is the content.
fn clean_video_label(label: &str) -> String {
    let cleaned = VIEW_ATTACHMENT.replace(label, "");
    let cleaned = VIDEO_EXT.replace(&cleaned, "");
    let cleaned = SEPARATORS.replace_all(&cleaned, " ");
    let cleaned = deadlog_model::js_trim(&cleaned);
    if cleaned.is_empty() { "clip".into() } else { cleaned.to_string() }
}

#[derive(Debug, Clone, PartialEq)]
pub struct EntityAsset {
    pub name: String,
    pub src: Option<String>,
    pub slug: String,
}

pub struct EntityAssets {
    pub hero: NameIndex<EntityAsset>,
    pub item: NameIndex<EntityAsset>,
    abilities_by_hero: HashMap<String, Vec<EntityAsset>>,
}

impl EntityAssets {
    fn abilities_for(&self, hero_name: &str) -> &[EntityAsset] {
        entity_name_aliases(hero_name)
            .iter()
            .find_map(|alias| self.abilities_by_hero.get(alias))
            .map_or(&[], Vec::as_slice)
    }
}

fn index_by_alias<'a>(rows: impl Iterator<Item = (&'a str, &'a str)>) -> NameIndex<EntityAsset> {
    let assets: Vec<EntityAsset> = rows
        .map(|(name, image)| EntityAsset {
            name: name.to_string(),
            src: (!image.is_empty()).then(|| image.to_string()),
            slug: to_slug(name),
        })
        .collect();
    NameIndex::new(&assets, |asset| &asset.name)
}

pub fn build_entity_assets(heroes: &[Hero], items: &[Item]) -> Result<EntityAssets> {
    let slots = resolve_ability_slots(heroes, items, None)?;
    let mut abilities_by_hero = HashMap::new();
    for hero in heroes {
        let abilities: Vec<EntityAsset> = slots
            .get(&hero.id)
            .into_iter()
            .flatten()
            .map(|slot| EntityAsset { name: slot.name.clone(), src: Some(slot.image.clone()), slug: slot.slug.clone() })
            .collect();
        for alias in entity_name_aliases(&hero.name) {
            abilities_by_hero.insert(alias, abilities.clone());
        }
    }
    let hero_images: Vec<(String, String)> =
        heroes.iter().map(|hero| (hero.name.clone(), hero_image(&hero.images, &HERO_ICON_IMAGE_KEYS))).collect();
    Ok(EntityAssets {
        hero: index_by_alias(hero_images.iter().map(|(name, image)| (name.as_str(), image.as_str()))),
        item: index_by_alias(
            items
                .iter()
                .filter(|item| item.kind != "ability" && !item.image().is_empty())
                .map(|item| (item.name.as_str(), item.image())),
        ),
        abilities_by_hero,
    })
}

struct LinkTarget {
    href: String,
    src: Option<String>,
}

fn entity_target(assets: Option<&EntityAssets>, kind: &str, name: &str) -> Option<LinkTarget> {
    let index = if kind == "hero" { &assets?.hero } else { &assets?.item };
    index.find(name).map(|asset| LinkTarget { href: format!("/{kind}/{}", asset.slug), src: asset.src.clone() })
}

const EMPTY_CHANGELOG: &str = "# Changelog\n\nNo structured changes were parsed for this update.";

/// A KDL quoted string and a JSON one escape the same way for everything written here,
/// so the changelog reader can pair this with a JSON parse.
fn kdl_string(value: &str) -> String {
    serde_json::to_string(value).unwrap_or_default()
}

/// A component embed, `` ``embed:svelte: `` fenced.
fn embed_block(tag: &str) -> String {
    ["``embed:svelte:", tag, "``"].join("\n")
}

fn escape_inline_attr(value: &str) -> String {
    value.replace('&', "&amp;").replace('"', "&quot;")
}

fn entity_block(
    depth: usize,
    attrs: &[String],
    level: usize,
    name: &str,
    target: Option<&LinkTarget>,
    body: Vec<String>,
) -> Vec<String> {
    let fence = "=".repeat(depth);
    let image_label = format!("{name} {} history", if attrs[0] == "ability" { "change" } else { "patch" });
    let mut lines = vec![format!("{fence}{}", attrs.iter().map(|attr| format!("{attr}:")).collect::<String>())];
    if let Some(target) = target
        && let Some(src) = &target.src
    {
        lines.push(mog_link(&target.href, &format!("{} {image_label}", mog_image(src, ""))));
    }
    let heading = match target {
        Some(target) => mog_link(&target.href, name),
        None => name.to_string(),
    };
    lines.push(format!("{} {heading}", "#".repeat(level)));
    lines.extend(body);
    lines.push(fence);
    lines
}

fn section_preview_block(kind: &str, names: &[&String]) -> String {
    let escaped: Vec<String> = names.iter().map(|name| format!("\"{}\"", escape_inline_attr(name))).collect();
    embed_block(&format!("<SectionPreview type=\"{kind}\" names={{[{}]}} />", escaped.join(", ")))
}

/// The forum serves no embeddable video URL, so a clip stays a link out.
fn video_embed_block(target: &str, label: &str) -> String {
    embed_block(&format!(
        "<VideoLink src=\"{}\" label=\"{}\" />",
        escape_inline_attr(target),
        escape_inline_attr(&clean_video_label(label))
    ))
}

/// Note text only — the embed blocks above rely on real braces and brackets. Prose
/// delimiters are escaped, links carried over from the source post are not.
fn bullet_line(note: &str) -> String {
    format!("- {}", escape_mog_delimiters(note))
}

fn sorted(entries: &[(String, Vec<String>)]) -> Vec<&(String, Vec<String>)> {
    let mut sorted: Vec<&(String, Vec<String>)> = entries.iter().collect();
    sorted.sort_by(|a, b| locale_compare(&a.0, &b.0));
    sorted
}

pub fn generate_structured_content(grouped: &GroupedContent, assets: Option<&EntityAssets>) -> String {
    let mut out: Vec<String> = Vec::new();

    if !grouped.general.is_empty() {
        out.extend(["# General Changes".to_string(), String::new()]);
        for note in &grouped.general {
            match parse_mog_link(note) {
                _ if note.starts_with(MOG_IMAGE_PREFIX) => out.push(note.clone()),
                Some((target, label)) if VIDEO_HREF.is_match(target) => out.push(video_embed_block(target, label)),
                _ => out.push(bullet_line(note)),
            }
        }
    }

    if !grouped.heroes.is_empty() {
        let heroes = sorted(&grouped.heroes);
        let names: Vec<&String> = heroes.iter().map(|(name, _)| name).collect();
        out.extend([String::new(), "# Hero Changes".into(), String::new(), section_preview_block("hero", &names)]);

        for (hero_name, notes) in heroes {
            let hero = entity_target(assets, "hero", hero_name);
            let abilities = assets.map_or(&[][..], |assets| assets.abilities_for(hero_name));
            let names: Vec<AbilityName> = abilities
                .iter()
                .map(|ability| AbilityName { name: ability.name.clone(), slug: ability.slug.clone() })
                .collect();
            let noted: Vec<EntityBulletGroup> = group_notes_by_ability(notes, None)
                .into_iter()
                .map(|group| EntityBulletGroup { ability: group.ability_name, bullets: group.notes })
                .collect();
            let mut body = Vec::new();
            for group in regroup_ability_changes(&noted, &names) {
                let bullets: Vec<String> = group.bullets.iter().map(|bullet| bullet_line(bullet)).collect();
                let Some(ability_name) = &group.ability else {
                    body.extend(bullets);
                    continue;
                };
                let slug =
                    resolve_hero_ability_slug(ability_name, abilities.iter().map(|ability| ability.slug.as_str()));
                let ability = abilities.iter().find(|candidate| Some(&candidate.slug) == slug.as_ref());
                // The ability's own page, not the hero page filtered to it. The query form
                // gave every ability heading its own crawlable URL that only ever
                // canonicalised back to the bare patch page.
                let target = match (&hero, ability) {
                    (Some(_), Some(ability)) => {
                        Some(LinkTarget { href: format!("/ability/{}", ability.slug), src: ability.src.clone() })
                    }
                    _ => None,
                };
                body.extend(entity_block(
                    2,
                    &["ability".into(), ability_fragment_id(ability_name)],
                    3,
                    ability_name,
                    target.as_ref(),
                    bullets,
                ));
            }
            out.push(String::new());
            out.extend(entity_block(
                1,
                &["hero".into(), entity_fragment_id(hero_name)],
                2,
                hero_name,
                hero.as_ref(),
                body,
            ));
        }
    }

    if !grouped.items.is_empty() {
        let items = sorted(&grouped.items);
        let names: Vec<&String> = items.iter().map(|(name, _)| name).collect();
        out.extend([String::new(), "# Item Changes".into(), String::new(), section_preview_block("item", &names)]);
        for (item_name, notes) in items {
            let item = entity_target(assets, "item", item_name);
            out.push(String::new());
            out.extend(entity_block(
                1,
                &["item".into(), entity_fragment_id(item_name)],
                2,
                item_name,
                item.as_ref(),
                notes.iter().map(|note| bullet_line(note)).collect(),
            ));
        }
    }

    out.join("\n")
}

fn collect_plain_text(grouped: &GroupedContent) -> String {
    let mut parts: Vec<&str> = Vec::new();
    for note in &grouped.general {
        // Media and bare source links are navigation, not patch content — keeping their
        // labels would put "View attachment clip.mp4" into search and meta descriptions.
        if !note.starts_with(MOG_IMAGE_PREFIX) && parse_mog_link(note).is_none() {
            parts.push(note);
        }
    }
    for (name, notes) in grouped.heroes.iter().chain(&grouped.items) {
        parts.push(name);
        parts.extend(notes.iter().map(String::as_str));
    }
    // content_text feeds search and meta descriptions, so it wants the link's label
    // rather than its markup.
    strip_mog_links(&parts.join(" "))
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct RenderedContent {
    pub mog: String,
    pub text: String,
}

/// Everything one changelog is generated from: its metadata, and either raw note lines
/// to group, prose already rendered to Mog, or both.
#[derive(Debug, Clone, Default, PartialEq)]
pub struct ChangelogSource {
    pub title: String,
    pub alias: Option<String>,
    pub published: String,
    pub author: String,
    pub author_image: Option<String>,
    pub thread_id: Option<String>,
    pub steam_gid: Option<String>,
    pub raw_content: Option<String>,
    pub rendered_content: Option<RenderedContent>,
}

pub fn generate_changelog(source: &ChangelogSource, entities: &EntityLists, assets: Option<&EntityAssets>) -> String {
    let raw = source.raw_content.as_deref().unwrap_or_default();
    let (structured, content_text) = match &source.rendered_content {
        Some(rendered) => {
            let mut structured = rendered.mog.clone();
            let mut text = rendered.text.clone();
            if !deadlog_model::js_trim(raw).is_empty() {
                let grouped = parse_and_group_content(raw, entities);
                let supplemental = generate_structured_content(&grouped, assets);
                let supplemental = deadlog_model::js_trim(&supplemental);
                let supplemental_text = collect_plain_text(&grouped);
                structured = [structured.as_str(), supplemental]
                    .into_iter()
                    .filter(|part| !part.is_empty())
                    .collect::<Vec<_>>()
                    .join("\n\n");
                text = [text.as_str(), supplemental_text.as_str()]
                    .into_iter()
                    .filter(|part| !part.is_empty())
                    .collect::<Vec<_>>()
                    .join(" ");
            }
            (structured, text)
        }
        None => {
            let grouped = parse_and_group_content(raw, entities);
            (generate_structured_content(&grouped, assets), collect_plain_text(&grouped))
        }
    };

    let mut out = vec!["``attr:".to_string(), format!("title {}", kdl_string(&source.title))];
    for (key, value) in [("alias", &source.alias), ("thread_id", &source.thread_id), ("steam_gid", &source.steam_gid)] {
        if let Some(value) = value.as_deref().filter(|value| !value.is_empty()) {
            out.push(format!("{key} {}", kdl_string(value)));
        }
    }
    out.push(format!("published {}", kdl_string(&source.published)));
    out.push(format!("author {}", kdl_string(&source.author)));
    if let Some(image) = source.author_image.as_deref().filter(|image| !image.is_empty()) {
        out.push(format!("author_image {}", kdl_string(image)));
    }
    out.extend([
        "major_update #false".to_string(),
        format!("content_text {}", kdl_string(&content_text)),
        "``".into(),
        String::new(),
        if structured.is_empty() { EMPTY_CHANGELOG.to_string() } else { structured },
    ]);
    out.join("\n")
}
