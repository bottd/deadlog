use std::collections::{HashMap, HashSet};

use anyhow::{Result, anyhow, bail};
use deadlog_model::{EntityType, PatchStats, decode_entity_name, entity_name_aliases, is_js_space};
use serde_json::{Map, Value};

use crate::ast::{self, Node, chain, is_image, plain_text};
use crate::enrichment::parse_enrichment;
use crate::impact_block::parse_stats;
use crate::schema::{ChangelogEntities, EntityBlock, EntityBulletGroup, EntityChange};

/// Only what `extract_entities` needs. Heading anchors come from the renderer's own toc,
/// so deriving ids here would be a second rule.
#[derive(Debug, Clone, PartialEq)]
pub struct TocEntry {
    pub level: usize,
    pub title: String,
    /// Kind of the block the heading names, e.g. `["hero"]`; empty for a section.
    pub attrs: Vec<String>,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Kind {
    Hero,
    Item,
    Ability,
}

impl Kind {
    fn as_str(self) -> &'static str {
        match self {
            Kind::Hero => "hero",
            Kind::Item => "item",
            Kind::Ability => "ability",
        }
    }

    fn entity(self) -> Option<EntityType> {
        match self {
            Kind::Hero => Some(EntityType::Hero),
            Kind::Item => Some(EntityType::Item),
            Kind::Ability => None,
        }
    }
}

pub fn change_key(kind: &str, name: &str) -> String {
    format!("{kind}:{}", entity_name_aliases(name).last().cloned().unwrap_or_default())
}

#[derive(Debug, Clone, PartialEq)]
pub struct ParsedBullet {
    pub kind: EntityType,
    pub name: String,
    pub ability: Option<String>,
    pub group_index: usize,
    pub bullet_index: usize,
    pub text: String,
    pub start_line: usize,
    pub end_line: usize,
    pub depth: usize,
}

#[derive(Debug, Clone, PartialEq)]
pub struct ReadingBlock {
    pub kind: EntityType,
    pub name: String,
    pub ability: Option<String>,
    pub start_line: usize,
    pub end_line: usize,
    pub depth: usize,
}

#[derive(Debug, Clone, PartialEq)]
pub struct ParsedStructure {
    /// The document's root-level `attr` blocks, as plain values.
    pub metadata: Map<String, Value>,
    pub toc: Vec<TocEntry>,
    pub changes: Vec<EntityChange>,
    /// Only images outside every block — an entity's own portrait is chrome, not content.
    pub images: Vec<String>,
    pub blocks: Vec<EntityBlock>,
    pub stats: Option<PatchStats>,
    pub metadata_lines: Option<(usize, usize)>,
    /// Positions use the same group/bullet indices as `changes`, never a second walk.
    pub bullets: Vec<ParsedBullet>,
    pub reading_blocks: Vec<ReadingBlock>,
}

struct Frame<'a> {
    kind: Kind,
    name: Option<String>,
    node: &'a Node,
}

#[derive(Default)]
struct Walker<'a> {
    stack: Vec<Frame<'a>>,
    toc: Vec<TocEntry>,
    images: Vec<String>,
    changes: Vec<EntityChange>,
    change_index: HashMap<String, usize>,
    blocks: Vec<EntityBlock>,
    bullets: Vec<ParsedBullet>,
    reading_blocks: Vec<ReadingBlock>,
}

fn trimmed_text(node: &Node) -> String {
    decode_entity_name(plain_text(&node.children).trim_matches(is_js_space))
}

fn entity_block(node: &Node, name: &str, kind: EntityType) -> Result<EntityBlock> {
    let attr_blocks = node.attribute_blocks();
    let keys: Vec<Option<&str>> = node.attribute_children().iter().map(|child| child.name.as_deref()).collect();
    if attr_blocks.len() > 1 {
        bail!("{name}: an entity block takes one attr block");
    }
    if keys.iter().collect::<HashSet<_>>().len() != keys.len() {
        bail!("{name}: an attr key is set more than once");
    }
    let plain = node.attributes.as_ref().and_then(|attributes| attributes.plain.as_ref());
    let enrichment = parse_enrichment(plain, kind).map_err(|error| anyhow!("{name}: {error}"))?;
    let Some(fence) = node.fence.or(node.span) else {
        bail!("{name}: block has no source position");
    };
    Ok(EntityBlock {
        name: name.to_string(),
        kind,
        fence_line: fence.start_line,
        attribute_lines: attr_blocks.first().map(|block| (block.start_line, block.end_line)),
        enrichment,
    })
}

fn owns_impact(node: &Node) -> bool {
    node.is_marker("free") && matches!(chain(node).first(), Some(&"hero") | Some(&"item"))
}

impl<'a> Walker<'a> {
    fn innermost(&self, kind: Kind) -> Option<&Frame<'a>> {
        self.stack.iter().rev().find(|frame| frame.kind == kind && frame.name.is_some())
    }

    fn heading(&mut self, node: &Node) -> Result<()> {
        // Entity headings can use native Mog links; their visible label remains the name.
        let title = trimmed_text(node);
        // A heading names the block it sits in; anything outside one is a section.
        let open = self.stack.last_mut();
        let unnamed = open.as_ref().is_some_and(|frame| frame.name.is_none());
        let attrs = match (&open, unnamed) {
            (Some(frame), true) => vec![frame.kind.as_str().to_string()],
            _ => Vec::new(),
        };
        let mut owner = None;
        if let Some(frame) = open
            && unnamed
        {
            frame.name = Some(title.clone());
            owner = frame.kind.entity().map(|kind| (kind, frame.node));
        }
        self.toc.push(TocEntry { level: node.depth.unwrap_or_default(), title: title.clone(), attrs });

        let Some((kind, block_node)) = owner else { return Ok(()) };
        let key = change_key(kind.as_str(), &title);
        if self.change_index.contains_key(&key) {
            return Ok(());
        }
        let block = entity_block(block_node, &title, kind)?;
        self.change_index.insert(key, self.changes.len());
        self.changes.push(EntityChange {
            name: title,
            kind,
            groups: Vec::new(),
            enrichment: block.enrichment.clone(),
        });
        self.blocks.push(block);
        Ok(())
    }

    fn bullet(&mut self, node: &Node) {
        let Some(entity) = self.innermost(Kind::Hero).or_else(|| self.innermost(Kind::Item)) else { return };
        let (kind, name) = (entity.kind, entity.name.clone().unwrap_or_default());
        let Some(&index) = self.change_index.get(&change_key(kind.as_str(), &name)) else { return };
        let text = trimmed_text(node);
        if text.is_empty() {
            return;
        }

        // Bullets group per ability section, so the renderer can show the ability
        // heading and icon instead of a text prefix.
        let ability = self.innermost(Kind::Ability).and_then(|frame| frame.name.clone());
        let current = &mut self.changes[index];
        if current.groups.last().is_none_or(|group| group.ability != ability) {
            current.groups.push(EntityBulletGroup { ability: ability.clone(), bullets: Vec::new() });
        }
        let group_index = current.groups.len() - 1;
        let group = &mut current.groups[group_index];
        group.bullets.push(text.clone());
        if let (Some(span), Some(kind)) = (node.span, kind.entity()) {
            self.bullets.push(ParsedBullet {
                kind,
                name,
                ability,
                group_index,
                bullet_index: group.bullets.len() - 1,
                text,
                start_line: span.start_line,
                end_line: span.end_line,
                depth: node.depth.unwrap_or_default(),
            });
        }
    }

    fn walk(&mut self, nodes: &'a [Node]) -> Result<()> {
        for node in nodes {
            if !node.attribute_children().is_empty() && !owns_impact(node) {
                let line = node.attribute_blocks().first().copied().or(node.span).map_or(0, |span| span.start_line);
                bail!(
                    "Malformed impact block: the attr block on line {} is not directly under a hero or item fence",
                    line + 1
                );
            }
            if node.kind == "paragraph" {
                if let Some(first) = node.children.first()
                    && is_image(first)
                    && self.stack.is_empty()
                {
                    self.images.push(first.target.clone().unwrap_or_default());
                }
                continue;
            }
            if node.kind == "delimiter" && chain(node).first() == Some(&"attr") {
                bail!(
                    "Malformed impact block: line {} is not valid KDL",
                    node.span.map_or(0, |span| span.start_line) + 1
                );
            }
            if node.kind != "marker" {
                continue;
            }

            match node.marker.as_deref() {
                Some("heading") => self.heading(node)?,
                Some("unordered-list") => self.bullet(node),
                _ => {}
            }

            if !node.is_marker("free") {
                self.walk(&node.children)?;
                continue;
            }
            // A bare fence groups without naming anything.
            let Some(kind) = chain(node).first().copied() else {
                self.walk(&node.children)?;
                continue;
            };
            let kind = match kind {
                "hero" => Kind::Hero,
                "item" => Kind::Item,
                _ => Kind::Ability,
            };
            self.stack.push(Frame { kind, name: None, node });
            self.walk(&node.children)?;
            self.close_frame(node);
            self.stack.pop();
        }
        Ok(())
    }

    fn close_frame(&mut self, node: &Node) {
        let Some(frame) = self.stack.last() else { return };
        let hero = self.innermost(Kind::Hero).and_then(|hero| hero.name.clone());
        let owner = if frame.kind == Kind::Item { frame.name.clone() } else { hero.clone() };
        let (Some(name), Some(owner), Some(span)) = (&frame.name, owner, node.span) else { return };
        if frame.kind == Kind::Item || (frame.kind == Kind::Ability && hero.is_some()) {
            self.reading_blocks.push(ReadingBlock {
                kind: if frame.kind == Kind::Item { EntityType::Item } else { EntityType::Hero },
                name: owner,
                ability: (frame.kind == Kind::Ability).then(|| name.clone()),
                start_line: span.start_line,
                end_line: span.end_line,
                depth: node.depth.unwrap_or_default(),
            });
        }
    }
}

/// One pass over the document, yielding every output the build needs. Walking it twice
/// would mean two readings of the same tree, which is how the toc and the entity list
/// drift apart.
pub fn parse_structure(content: &str) -> Result<ParsedStructure> {
    let document = ast::parse(content)?;
    let metadata = document
        .attributes
        .as_ref()
        .and_then(|attributes| attributes.plain.clone())
        .unwrap_or_default();
    let stats = metadata.get("stats").map(parse_stats).transpose()?;
    let metadata_lines = document
        .attributes
        .as_ref()
        .and_then(|attributes| attributes.blocks.first())
        .map(|block| (block.start_line, block.end_line));

    let mut walker = Walker::default();
    walker.walk(&document.body)?;
    Ok(ParsedStructure {
        metadata,
        toc: walker.toc,
        changes: walker.changes,
        images: walker.images,
        blocks: walker.blocks,
        stats,
        metadata_lines,
        bullets: walker.bullets,
        reading_blocks: walker.reading_blocks,
    })
}

pub fn extract_entity_changes(content: &str) -> Result<Vec<EntityChange>> {
    Ok(parse_structure(content)?.changes)
}

/// An entity is a heading that says it is one, so section order no longer has to be
/// inferred and stray headings cannot be mistaken for entities.
pub fn extract_entities(toc: &[TocEntry]) -> ChangelogEntities {
    let mut entities = ChangelogEntities::default();
    for entry in toc {
        let list = match entry.attrs.first().map(String::as_str) {
            Some("hero") => &mut entities.heroes,
            Some("item") => &mut entities.items,
            _ => continue,
        };
        if !list.contains(&entry.title) {
            list.push(entry.title.clone());
        }
    }
    entities
}
