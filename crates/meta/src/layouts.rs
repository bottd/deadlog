use serde_json::{Value, json};

use crate::components::{
    CardArt, EntityCard, Fit, RowIcon, Segment, annotation, card, display, display_wraps,
    entity_card, flag, lede, patch_rows,
};
use crate::node::{div, style};
use crate::text::count_label;
use crate::theme::{CONTENT, colors, hero_tone, item_tone};

const ART_CLEAR: i64 = 542;

pub struct ChangelogLayout {
    pub heading: String,
    pub date: String,
    pub author: String,
    pub major_update: bool,
    pub hero_count: usize,
    pub item_count: usize,
    pub hero_icons: Vec<RowIcon>,
    pub item_icons: Vec<RowIcon>,
    pub summary: Option<String>,
    pub art: Option<String>,
}

fn column(gap: &str, children: impl IntoIterator<Item = Option<Value>>) -> Value {
    div(style(json!({ "display": "flex", "flexDirection": "column", "gap": gap })), children)
}

pub fn changelog(props: &ChangelogLayout) -> Value {
    let has_rows = !props.hero_icons.is_empty() || !props.item_icons.is_empty();
    let lede_lines = if !has_rows {
        2
    } else if display_wraps(&props.heading, CONTENT, 2) {
        0
    } else {
        1
    };
    let counts = |n: usize, singular, plural| {
        if n > 0 { count_label(n, singular, plural) } else { String::new() }
    };
    let segments = [
        Segment::new(props.date.to_uppercase(), Some(colors::SEA)),
        Segment::new(counts(props.hero_count, "HERO", Some("HEROES")), Some(colors::AMBER)),
        Segment::new(counts(props.item_count, "ITEM", None), Some(colors::AMBER)),
    ];
    let annotation_width = if props.major_update { CONTENT - 220 } else { CONTENT };
    let art = props
        .art
        .as_ref()
        .filter(|art| !art.is_empty())
        .map(|art| CardArt { src: art.clone(), clear: ART_CLEAR });
    let summary = props.summary.as_deref().filter(|summary| !summary.is_empty());

    card(
        Some(&format!("BY {}", props.author.to_uppercase())),
        art,
        column(
            "22px",
            [
                Some(display(&props.heading, CONTENT, 2)),
                Some(div(
                    style(json!({ "display": "flex", "alignItems": "center", "gap": "20px" })),
                    [
                        annotation(&segments, annotation_width),
                        props.major_update.then(|| flag("MAJOR")),
                    ],
                )),
                summary.and_then(|summary| lede(summary, CONTENT, lede_lines)),
                patch_rows(
                    &props.hero_icons,
                    &props.item_icons,
                    props.hero_count,
                    props.item_count,
                ),
            ],
        ),
    )
}

pub struct HomeLayout {
    pub last_updated: String,
    pub patch_count: usize,
    pub hero_count: usize,
    pub item_count: usize,
    pub hero_icons: Vec<RowIcon>,
    pub item_icons: Vec<RowIcon>,
    pub latest_hero_count: usize,
    pub latest_item_count: usize,
}

pub fn home(props: &HomeLayout) -> Value {
    let segments = [
        Segment::new(format!("{} PATCHES", props.patch_count), Some(colors::AMBER)),
        Segment::new(format!("{} HEROES", props.hero_count), Some(colors::STONE)),
        Segment::new(format!("{} ITEMS", props.item_count), Some(colors::STONE)),
    ];
    card(
        Some(&format!("LATEST PATCH · {}", props.last_updated)),
        None,
        column(
            "22px",
            [
                Some(display("Deadlock Patch Notes", CONTENT, 1)),
                lede(
                    "Every patch, hero buff, nerf and item change — in one searchable changelog.",
                    CONTENT,
                    2,
                ),
                annotation(&segments, CONTENT),
                patch_rows(
                    &props.hero_icons,
                    &props.item_icons,
                    props.latest_hero_count,
                    props.latest_item_count,
                ),
            ],
        ),
    )
}

pub struct HeroLayout {
    pub name: String,
    pub hero_type: Option<String>,
    pub image: String,
    /// Formatted count, or empty when every patch is mention-only.
    pub changes: String,
    pub patch_count: usize,
    pub history: String,
}

pub fn hero(props: &HeroLayout) -> Value {
    let hero_type = props.hero_type.as_deref().filter(|kind| !kind.is_empty());
    entity_card(EntityCard {
        name: &props.name,
        image: &props.image,
        thumb: (264, 368),
        fit: Fit::Cover,
        history: &props.history,
        segments: vec![
            Segment::new(
                hero_type.map(str::to_uppercase).unwrap_or_default(),
                hero_tone(hero_type),
            ),
            Segment::new(props.changes.clone(), Some(colors::AMBER)),
            Segment::new(count_label(props.patch_count, "PATCH", Some("PATCHES")), None),
        ],
    })
}

pub struct ItemLayout {
    pub name: String,
    pub kind: String,
    pub category: Option<String>,
    pub tier: Option<i64>,
    pub image: String,
    /// Formatted count, or empty when every patch is mention-only.
    pub changes: String,
    pub patch_count: usize,
    pub history: String,
}

pub fn item(props: &ItemLayout) -> Value {
    let category = props.category.as_deref();
    let tier = props.tier.filter(|tier| *tier != 0).map(|tier| format!("TIER {tier}"));
    entity_card(EntityCard {
        name: &props.name,
        image: &props.image,
        thumb: (264, 264),
        fit: Fit::Contain,
        history: &props.history,
        segments: vec![
            Segment::new(category.unwrap_or(&props.kind).to_uppercase(), item_tone(category)),
            Segment::new(tier.unwrap_or_default(), None),
            Segment::new(props.changes.clone(), Some(colors::AMBER)),
            Segment::new(count_label(props.patch_count, "PATCH", Some("PATCHES")), None),
        ],
    })
}
