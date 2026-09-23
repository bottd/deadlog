//! Patch notes from `.mg` to HTML. Mog renders the document; this module does what the
//! Vite build layered on top of it: reading embeds are spliced into the source at the
//! end of each entity block and after each linked bullet (`inlineMogStats.ts`), the
//! rendered HTML gets the heading levels and image attributes the page expects
//! (`transformMogHtml` in `svelte.config.js`), and every embed renders as markup.

use std::collections::HashMap;
use std::sync::LazyLock;

use anyhow::{Context, Result, anyhow, bail};
use askama::Template;
use deadlog_changelog::{BulletReading, ParsedStructure, ast, parse_structure, read_bullet};
use deadlog_model::{EntityType, PatchStats, decode_entity_name, entity_fragment_id, entity_names_match};
use mog::{DataFilter, OutputMode, Segment, TocEntry};
use regex::Regex;
use serde_json::Value;

use crate::share::{BandBlock, BuyTime, ContextView, PreviousChange, ShareRow, ShareWindows};

/// One entity icon a patch mentions, like `ChangelogEntityIcon`.
#[derive(Debug, Clone)]
pub struct Icon {
    pub id: i64,
    pub src: String,
    pub alt: String,
    pub slug: String,
    pub change_count: Option<usize>,
}

#[derive(Debug, Clone, Default)]
pub struct Icons {
    pub heroes: Vec<Icon>,
    pub items: Vec<Icon>,
}

impl Icons {
    pub fn resolve(&self, kind: EntityType, name: &str) -> Option<&Icon> {
        let list = if kind == EntityType::Hero { &self.heroes } else { &self.items };
        list.iter().find(|icon| entity_names_match(&icon.alt, name))
    }
}

#[derive(Debug, Clone)]
pub struct RelatedReading {
    pub items: Vec<ShareRow>,
}

/// What the page's reading embeds draw on, keyed like `readingContext.ts`.
#[derive(Debug, Clone, Default)]
pub struct Reading {
    pub details: HashMap<String, ContextView>,
    pub previous: HashMap<String, (PreviousChange, String)>,
    pub maxed_first: HashMap<i64, Vec<ShareRow>>,
    pub bought_by: HashMap<i64, Vec<ShareRow>>,
    pub buy_time: HashMap<i64, BuyTime>,
    pub related: HashMap<i64, RelatedReading>,
}

pub fn detail_key(kind: EntityType, id: i64, ability: Option<&str>) -> String {
    match ability {
        Some(ability) => format!("{}:{id}:{}", kind.as_str(), deadlog_model::to_slug(ability)),
        None => format!("{}:{id}", kind.as_str()),
    }
}

pub fn previous_key(kind: &str, id: i64, group: i64, bullet: i64) -> String {
    format!("{kind}:{id}:{group}:{bullet}")
}

/// The patch-level facts the Vite build exported as `readingManifest`.
#[derive(Debug, Clone, Default)]
pub struct Manifest {
    pub stats: Option<PatchStats>,
    pub open: bool,
    pub sections: Vec<(EntityType, String, String)>,
    pub related: Vec<(String, deadlog_model::RelatedItems)>,
}

#[derive(Debug, Clone)]
enum Inserted {
    Details { kind: EntityType, name: String, ability: Option<String> },
    StatsBand { kind: EntityType, name: String },
    Previous { kind: EntityType, name: String, group: usize, bullet: usize, text: String },
}

/// `serializeMogValue`: safe inside both a Svelte expression and a script element.
fn serialize(value: &str) -> String {
    Value::from(value).to_string().replace('<', "\\u003c").replace('\u{2028}', "\\u2028").replace('\u{2029}', "\\u2029")
}

fn optional(value: Option<&str>) -> String {
    value.map(serialize).unwrap_or_else(|| "null".into())
}

static BULLET_LINE: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"^(\s*)(-+)\s+(.+)$").unwrap());

struct Spliced {
    source: String,
    inserted: HashMap<String, Inserted>,
    edited: bool,
}

fn boundaries<'a>(nodes: &'a [ast::Node], out: &mut HashMap<usize, &'a ast::Node>) {
    for node in nodes {
        if node.is_marker("free")
            && let Some(fence) = node.fence
        {
            out.insert(fence.start_line, node);
        }
        boundaries(&node.children, out);
    }
}

fn kind_str(kind: EntityType) -> &'static str {
    kind.as_str()
}

/// `inlineMogStats`: splice reading embeds into the source by line, the way the
/// Vite plugin did, so Mog lifts each into its block.
fn splice(source: &str, structure: &ParsedStructure) -> Result<Spliced> {
    let document = ast::parse(source)?;
    let mut fences = HashMap::new();
    boundaries(&document.body, &mut fences);

    let mut lines: Vec<String> = source.split('\n').map(|line| line.strip_suffix('\r').unwrap_or(line).to_string()).collect();
    let mut inserted: HashMap<String, Inserted> = HashMap::new();
    let mut insertions: Vec<(usize, Vec<String>)> = Vec::new();
    let mut add = |line: usize, code: String, what: Inserted, inserted: &mut HashMap<String, Inserted>| {
        inserted.insert(code.clone(), what);
        let content = ["``embed:svelte:".to_string(), code, "``".to_string()];
        match insertions.iter_mut().find(|(existing, _)| *existing == line) {
            Some((_, lines)) => lines.extend(content),
            None => insertions.push((line, content.to_vec())),
        }
    };

    for block in &structure.reading_blocks {
        let has_bullets = structure
            .bullets
            .iter()
            .any(|bullet| bullet.start_line > block.start_line && bullet.end_line < block.end_line);
        if !has_bullets {
            continue;
        }
        if lines.get(block.end_line).map(|line| line.trim()) != Some("=".repeat(block.depth).as_str()) {
            bail!("Cannot locate closing fence for {}", block.name);
        }
        let code = format!(
            "<DeadlogReadingDetails kind={{{}}} name={{{}}} ability={{{}}} />",
            serialize(kind_str(block.kind)),
            serialize(&block.name),
            optional(block.ability.as_deref())
        );
        let what = Inserted::Details { kind: block.kind, name: block.name.clone(), ability: block.ability.clone() };
        add(block.end_line, code, what, &mut inserted);
    }

    let related: Vec<&str> = structure
        .blocks
        .iter()
        .filter(|block| {
            block.kind == EntityType::Hero
                && block.enrichment.related.as_ref().is_some_and(|related| related.status == "complete")
                && structure.stats.as_ref().is_some_and(|stats| stats.before.is_some())
        })
        .map(|block| block.name.as_str())
        .collect();
    for block in &structure.blocks {
        let enrichment = &block.enrichment;
        let reads = match block.kind {
            EntityType::Hero => enrichment.order.is_some() || related.contains(&block.name.as_str()),
            EntityType::Item => {
                enrichment.bought.is_some()
                    || enrichment.impact.as_ref().is_some_and(|impact| impact.all.after.buy.flatten().is_some())
            }
        };
        if !reads {
            continue;
        }
        let node = fences.get(&block.fence_line);
        let end = node.and_then(|node| node.span.map(|span| span.end_line));
        let depth = node.and_then(|node| node.depth).unwrap_or_default();
        let Some(end) = end.filter(|&end| lines.get(end).map(|line| line.trim()) == Some("=".repeat(depth).as_str()))
        else {
            bail!("Cannot locate closing fence for {} {}", kind_str(block.kind), block.name);
        };
        let code = format!(
            "<DeadlogStatsBand kind={{{}}} name={{{}}} />",
            serialize(kind_str(block.kind)),
            serialize(&block.name)
        );
        add(end, code, Inserted::StatsBand { kind: block.kind, name: block.name.clone() }, &mut inserted);
    }

    let mut edits: Vec<(usize, usize, Vec<String>)> =
        insertions.into_iter().map(|(start, content)| (start, 0, content)).collect();
    for bullet in &structure.bullets {
        if bullet.start_line != bullet.end_line
            || (bullet.kind == EntityType::Hero && bullet.ability.is_none())
            || !matches!(read_bullet(&bullet.text, bullet.ability.as_deref()), BulletReading::Event(_))
        {
            continue;
        }
        let Some(captures) = BULLET_LINE.captures(&lines[bullet.start_line]) else { continue };
        let (indent, marker, text) = (&captures[1], &captures[2], &captures[3]);
        if marker.len() != bullet.depth {
            continue;
        }
        let code = format!(
            "<DeadlogPreviousChange kind={{{}}} name={{{}}} groupIndex={{{}}} bulletIndex={{{}}} text={{{}}} />",
            serialize(kind_str(bullet.kind)),
            serialize(&bullet.name),
            bullet.group_index,
            bullet.bullet_index,
            serialize(&bullet.text)
        );
        inserted.insert(
            code.clone(),
            Inserted::Previous {
                kind: bullet.kind,
                name: bullet.name.clone(),
                group: bullet.group_index,
                bullet: bullet.bullet_index,
                text: bullet.text.clone(),
            },
        );
        let content = [marker, text, "``embed:svelte:", &code, "``", marker].iter().map(|line| format!("{indent}{line}")).collect();
        edits.push((bullet.start_line, 1, content));
    }
    let edited = !edits.is_empty();
    edits.sort_by(|a, b| b.0.cmp(&a.0));
    for (start, remove, content) in edits {
        lines.splice(start..start + remove, content);
    }
    Ok(Spliced { source: lines.join("\n"), inserted, edited })
}

#[derive(Clone, Copy, PartialEq, Eq)]
enum BlockKind {
    Entity,
    Ability,
}

fn block_kind(classes: &str) -> Option<BlockKind> {
    let classes: Vec<&str> = classes.split_whitespace().collect();
    if classes.contains(&"ability") {
        Some(BlockKind::Ability)
    } else if classes.contains(&"hero") || classes.contains(&"item") {
        Some(BlockKind::Entity)
    } else {
        None
    }
}

#[derive(Default)]
struct TransformState {
    seen_top_level_image: bool,
    blocks: Vec<Option<BlockKind>>,
}

static ROUTE_SUFFIX: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r#"href="(/(?:hero|item|ability)/[a-z0-9-]+)\.html"#).unwrap());
static TAG: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"(?i)</?([a-z][\w:-]*)\b[^>]*>").unwrap());
static CLASS_ATTR: LazyLock<Regex> = LazyLock::new(|| Regex::new(r#"(?i)\bclass=(?:"([^"]*)"|'([^']*)')"#).unwrap());

fn has_attribute(tag: &str, name: &str) -> bool {
    let lower = tag.to_lowercase();
    let pattern = format!("{name}=");
    lower.match_indices(&pattern).any(|(index, _)| lower[..index].ends_with(char::is_whitespace))
}

fn add_attribute(tag: &str, name: &str, value: &str) -> String {
    if has_attribute(tag, name) {
        return tag.to_string();
    }
    let closing = if tag.ends_with("/>") { "/>" } else { ">" };
    format!("{} {name}=\"{value}\"{closing}", &tag[..tag.len() - closing.len()])
}

fn rename(tag: &str, from: &str, to: &str) -> String {
    let closing = tag.starts_with("</");
    let prefix = if closing { "</" } else { "<" };
    format!("{prefix}{to}{}", &tag[prefix.len() + from.len()..])
}

/// `transformMogHtml`: app routes lose Mog's `.html` suffix, headings drop a level
/// inside entity and ability blocks, and images get sizes and loading hints.
fn transform_html(html: &str, state: &mut TransformState) -> String {
    let html = ROUTE_SUFFIX.replace_all(html, "href=\"$1");
    TAG.replace_all(&html, |captures: &regex::Captures| {
        let tag = &captures[0];
        let name = captures[1].to_lowercase();
        let closing = tag.starts_with("</");
        if name == "div" {
            if closing {
                state.blocks.pop();
            } else {
                let classes = CLASS_ATTR
                    .captures(tag)
                    .and_then(|found| found.get(1).or(found.get(2)))
                    .map(|found| found.as_str())
                    .unwrap_or_default();
                state.blocks.push(block_kind(classes));
            }
            return tag.to_string();
        }
        let block = state.blocks.iter().rev().find_map(|kind| *kind);
        match name.as_str() {
            "h1" => {
                let heading = rename(tag, "h1", "h2");
                if closing { heading } else { add_attribute(&heading, "data-mog-section", "") }
            }
            "h2" if block == Some(BlockKind::Entity) => rename(tag, "h2", "h3"),
            "h3" if block == Some(BlockKind::Ability) => rename(tag, "h3", "h4"),
            "img" if !closing => {
                let image = add_attribute(tag, "decoding", "async");
                match block {
                    Some(BlockKind::Ability) => {
                        let image = add_attribute(&add_attribute(&image, "width", "24"), "height", "24");
                        add_attribute(&image, "loading", "lazy")
                    }
                    Some(BlockKind::Entity) => {
                        let image = add_attribute(&add_attribute(&image, "width", "40"), "height", "40");
                        add_attribute(&image, "loading", "lazy")
                    }
                    None => {
                        let loading = if state.seen_top_level_image { "lazy" } else { "eager" };
                        state.seen_top_level_image = true;
                        add_attribute(&image, "loading", loading)
                    }
                }
            }
            _ => tag.to_string(),
        }
    })
    .into_owned()
}

/// Props of an author-written embed such as `<VideoLink src="…" label="…" />`.
fn embed_props(code: &str) -> Result<(String, HashMap<String, Value>)> {
    let code = code.trim();
    let body = code.strip_prefix('<').and_then(|rest| rest.strip_suffix("/>")).ok_or_else(|| anyhow!("unsupported embed {code}"))?;
    let name_end = body.find(char::is_whitespace).unwrap_or(body.len());
    let name = body[..name_end].to_string();
    let mut rest = body[name_end..].trim_start();
    let mut props = HashMap::new();
    while !rest.is_empty() {
        let eq = rest.find('=').ok_or_else(|| anyhow!("malformed embed props in {code}"))?;
        let key = rest[..eq].trim().to_string();
        rest = &rest[eq + 1..];
        let value;
        if let Some(stripped) = rest.strip_prefix('"') {
            let end = stripped.find('"').ok_or_else(|| anyhow!("unterminated string in {code}"))?;
            value = Value::from(decode_entity_name(&stripped[..end]));
            rest = &stripped[end + 1..];
        } else if rest.starts_with('{') {
            let mut depth = 0;
            let mut end = None;
            let mut in_string = false;
            let mut escaped = false;
            for (index, c) in rest.char_indices() {
                match c {
                    _ if escaped => escaped = false,
                    '\\' if in_string => escaped = true,
                    '"' => in_string = !in_string,
                    '{' if !in_string => depth += 1,
                    '}' if !in_string => {
                        depth -= 1;
                        if depth == 0 {
                            end = Some(index);
                            break;
                        }
                    }
                    _ => {}
                }
            }
            let end = end.ok_or_else(|| anyhow!("unterminated expression in {code}"))?;
            value = serde_json::from_str(&rest[1..end]).with_context(|| format!("embed expression in {code}"))?;
            rest = &rest[end + 1..];
        } else {
            bail!("unsupported embed prop in {code}");
        }
        props.insert(key, value);
        rest = rest.trim_start();
    }
    Ok((name, props))
}

#[derive(Template)]
#[template(path = "partials/mog_embeds.html", block = "section_preview")]
struct SectionPreview<'a> {
    kind: &'a str,
    icons: Vec<(String, String, String)>,
}

#[derive(Template)]
#[template(path = "partials/mog_embeds.html", block = "video_link")]
struct VideoLink<'a> {
    src: &'a str,
    label: &'a str,
}

#[derive(Template)]
#[template(path = "partials/mog_embeds.html", block = "details")]
struct Details<'a> {
    view: &'a ContextView,
}

#[derive(Template)]
#[template(path = "partials/mog_embeds.html", block = "previous")]
struct Previous<'a> {
    previous: &'a PreviousChange,
}

#[derive(Template)]
#[template(path = "partials/mog_embeds.html", block = "stats_band")]
struct StatsBand<'a> {
    kind: &'a str,
    blocks: Vec<BandBlock>,
}

/// Everything an embed can read while the patch renders.
pub struct PatchContext<'a> {
    pub icons: &'a Icons,
    pub reading: &'a Reading,
    pub manifest: &'a Manifest,
    pub pub_date: &'a str,
    pub changelog_id: &'a str,
}

fn render_inserted(what: &Inserted, patch: &PatchContext) -> Result<String> {
    match what {
        Inserted::Details { kind, name, ability } => {
            let Some(entity) = patch.icons.resolve(*kind, name) else { return Ok(String::new()) };
            match patch.reading.details.get(&detail_key(*kind, entity.id, ability.as_deref())) {
                Some(view) => Ok(Details { view }.render()?),
                None => Ok(String::new()),
            }
        }
        Inserted::Previous { kind, name, group, bullet, text } => {
            let Some(entity) = patch.icons.resolve(*kind, name) else { return Ok(String::new()) };
            let key = previous_key(kind.as_str(), entity.id, *group as i64, *bullet as i64);
            match patch.reading.previous.get(&key) {
                Some((previous, recorded)) if recorded == text => Ok(Previous { previous }.render()?),
                _ => Ok(String::new()),
            }
        }
        Inserted::StatsBand { kind, name } => {
            let Some(entity) = patch.icons.resolve(*kind, name) else { return Ok(String::new()) };
            let Some(stats) = &patch.manifest.stats else { return Ok(String::new()) };
            let windows = ShareWindows::new(stats, patch.pub_date, patch.manifest.open);
            let subject = entity.alt.as_str();
            let id = format!("{}-{}", patch.changelog_id, entity.id);
            let mut blocks = Vec::new();
            if *kind == EntityType::Hero {
                if let Some(rows) = patch.reading.maxed_first.get(&entity.id) {
                    blocks.push(BandBlock::share("maxed-first", &id, subject, rows.clone(), &windows, Vec::new()));
                }
                if let Some(related) = patch.reading.related.get(&entity.id) {
                    blocks.push(BandBlock::share("related", &id, subject, related.items.clone(), &windows, Vec::new()));
                }
            } else {
                if let Some(rows) = patch.reading.bought_by.get(&entity.id) {
                    blocks.push(BandBlock::share("bought-by", &id, subject, rows.clone(), &windows, Vec::new()));
                }
                if let Some(time) = patch.reading.buy_time.get(&entity.id) {
                    blocks.push(BandBlock::BuyTime {
                        lead: format!("Average game time {subject} buyers bought it, {}.", windows.span(true)),
                        time: time.clone(),
                    });
                }
            }
            if blocks.is_empty() {
                return Ok(String::new());
            }
            Ok(StatsBand { kind: kind.as_str(), blocks }.render()?)
        }
    }
}

fn render_authored(code: &str, patch: &PatchContext) -> Result<String> {
    let (name, props) = embed_props(code)?;
    let text = |key: &str| props.get(key).and_then(Value::as_str).unwrap_or_default().to_string();
    match name.as_str() {
        "SectionPreview" => {
            let kind = text("type");
            let entity_kind = if kind == "hero" { EntityType::Hero } else { EntityType::Item };
            let names: Vec<String> = props
                .get("names")
                .and_then(Value::as_array)
                .map(|names| names.iter().filter_map(Value::as_str).map(str::to_string).collect())
                .unwrap_or_default();
            let icons: Vec<(String, String, String)> = names
                .iter()
                .filter_map(|name| {
                    let entity = patch.icons.resolve(entity_kind, name)?;
                    Some((entity.alt.clone(), entity.src.clone(), entity_fragment_id(&entity.alt)))
                })
                .collect();
            if icons.is_empty() {
                return Ok(String::new());
            }
            Ok(SectionPreview { kind: &kind, icons }.render()?)
        }
        "VideoLink" => Ok(VideoLink { src: &text("src"), label: &text("label") }.render()?),
        other => bail!("unknown embed component {other}"),
    }
}

pub fn toc(source: &str) -> Result<Vec<TocEntry>> {
    let result = mog::parse_metadata_on_bounded_stack(source).map_err(|error| anyhow!(error))?;
    Ok(result.toc)
}

pub fn structure(source: &str) -> Result<ParsedStructure> {
    parse_structure(source)
}

/// A patch with its reading embeds spliced in, ready to render.
pub struct Prepared {
    text: String,
    inserted: HashMap<String, Inserted>,
    pub manifest: Manifest,
}

/// The manifest needs only the structure and the rendered headings, so the page can
/// build its reading data before the embeds render.
pub fn prepare(source: &str, structure: &ParsedStructure) -> Result<Prepared> {
    let spliced = splice(source, structure)?;
    let mut manifest = Manifest::default();
    let text = if spliced.edited { spliced.source } else { source.to_string() };
    if spliced.edited {
        manifest.stats = structure.stats.clone();
        manifest.open =
            structure.blocks.iter().any(|block| block.enrichment.impact.as_ref().is_some_and(|impact| !impact.closed));
        let rendered = toc(&text)?;
        manifest.sections = structure
            .toc
            .iter()
            .enumerate()
            .filter_map(|(index, heading)| {
                let kind = match heading.attrs.first().map(String::as_str) {
                    Some("hero") => EntityType::Hero,
                    Some("item") => EntityType::Item,
                    _ => return None,
                };
                let rendered = rendered.get(index).filter(|rendered| rendered.title == heading.title)?;
                Some((kind, heading.title.clone(), rendered.id.clone()))
            })
            .collect();
        manifest.related = structure
            .blocks
            .iter()
            .filter(|block| block.kind == EntityType::Hero && structure.stats.as_ref().is_some_and(|stats| stats.before.is_some()))
            .filter_map(|block| {
                let related = block.enrichment.related.clone().filter(|related| related.status == "complete")?;
                Some((block.name.clone(), related))
            })
            .collect();
    }
    Ok(Prepared { text, inserted: spliced.inserted, manifest })
}

pub fn render(prepared: &Prepared, patch: &PatchContext) -> Result<String> {
    let inserted = &prepared.inserted;
    let result = mog::parse_on_bounded_stack(&prepared.text, Some(OutputMode::svelte), DataFilter::None)
        .map_err(|error| anyhow!(error))?;
    if let Some(diagnostics) = result.diagnostics.filter(|diagnostics| !diagnostics.is_empty()) {
        bail!("mog: {}", diagnostics.join("\n"));
    }
    let mut state = TransformState::default();
    let mut html = String::new();
    for segment in &result.segments {
        match segment {
            Segment::Html { html: fragment } => html.push_str(&transform_html(fragment, &mut state)),
            Segment::Embed { index } => {
                let embed = result
                    .embed_components
                    .iter()
                    .find(|embed| embed.index == *index)
                    .ok_or_else(|| anyhow!("missing embed {index}"))?;
                let markup = match inserted.get(&embed.code) {
                    Some(what) => render_inserted(what, patch)?,
                    None => render_authored(&embed.code, patch)?,
                };
                html.push_str(&markup);
            }
            Segment::Open { tag, classes, .. } => {
                if tag.as_str() == "div" {
                    state.blocks.push(block_kind(classes));
                }
                if classes.is_empty() {
                    html.push_str(&format!("<{tag}>"));
                } else {
                    html.push_str(&format!("<{tag} class=\"{}\">", askama::filters::escape(classes, askama::filters::Html)?));
                }
            }
            Segment::Close { tag } => {
                if tag.as_str() == "div" {
                    state.blocks.pop();
                }
                html.push_str(&format!("</{tag}>"));
            }
        }
        html.push('\n');
    }
    Ok(html)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn transforms_headings_and_images() {
        let mut state = TransformState::default();
        let html = transform_html(
            r#"<h1 id="x">X</h1><div class="hero abrams"><p><a href="/hero/abrams.html"><img src="a" alt="" /></a></p><h2 id="abrams">A</h2><div class="ability charge"><h3 id="c">C</h3></div></div><p><img src="b" alt="" /></p><p><img src="c" alt="" /></p>"#,
            &mut state,
        );
        assert!(html.contains(r#"<h2 id="x" data-mog-section="">X</h2>"#));
        assert!(html.contains(r#"href="/hero/abrams""#));
        assert!(html.contains(r#"<img src="a" alt=""  decoding="async" width="40" height="40" loading="lazy"/>"#));
        assert!(html.contains(r#"<h3 id="abrams">A</h3>"#));
        assert!(html.contains(r#"<h4 id="c">C</h4>"#));
        assert!(html.contains(r#"<img src="b" alt=""  decoding="async" loading="eager"/>"#));
        assert!(html.contains(r#"<img src="c" alt=""  decoding="async" loading="lazy"/>"#));
    }

    #[test]
    fn parses_authored_embeds() {
        let (name, props) = embed_props(r#"<SectionPreview type="hero" names={["Mo &amp; Krill", "Ivy"]} />"#).unwrap();
        assert_eq!(name, "SectionPreview");
        assert_eq!(props["type"], "hero");
        assert_eq!(props["names"][0], "Mo &amp; Krill");
        let (_, props) = embed_props(r#"<VideoLink src="https://x/y-mp4.1/" label="A &amp; B" />"#).unwrap();
        assert_eq!(props["label"], "A & B");
    }
}
