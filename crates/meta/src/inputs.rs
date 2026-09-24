//! What the previews read from the database, in the order the TypeScript queries
//! returned it.

use std::collections::HashMap;

use deadlog_db::Snapshot;
use deadlog_model::{HERO_CARD_IMAGE_KEYS, HERO_ICON_IMAGE_KEYS, hero_image};

use crate::theme::{hero_tone, item_tone};

#[derive(Debug, Clone, Default)]
pub struct Patch {
    pub id: String,
    pub title: String,
    pub pub_date: String,
    pub author: String,
    pub major_update: bool,
    pub content_text: Option<String>,
    pub preview_image: Option<String>,
}

#[derive(Debug, Clone, Default)]
pub struct Icon {
    pub name: String,
    pub slug: String,
    pub src: String,
    pub tone: Option<&'static str>,
    /// `None` when the patch mentions the entity without its own section.
    pub change_count: Option<usize>,
}

#[derive(Debug, Clone, Default)]
pub struct PatchIcons {
    pub heroes: Vec<Icon>,
    pub items: Vec<Icon>,
}

#[derive(Debug, Clone, Default)]
pub struct HeroEntry {
    pub name: String,
    pub slug: String,
    pub hero_type: Option<String>,
    pub image: String,
}

#[derive(Debug, Clone, Default)]
pub struct ItemEntry {
    pub name: String,
    pub slug: String,
    pub kind: String,
    pub category: Option<String>,
    pub tier: Option<i64>,
    pub image: String,
}

#[derive(Debug, Clone, Default)]
pub struct Inputs {
    pub patches: Vec<Patch>,
    pub icons: HashMap<String, PatchIcons>,
    /// Released only.
    pub heroes: Vec<HeroEntry>,
    /// Released only.
    pub items: Vec<ItemEntry>,
}

impl Inputs {
    pub fn from_snapshot(snapshot: &Snapshot) -> Self {
        Self {
            patches: snapshot.changelogs.iter().map(patch).collect(),
            icons: icons(snapshot),
            heroes: snapshot
                .heroes
                .iter()
                .filter(|hero| hero.is_released)
                .map(|hero| HeroEntry {
                    name: hero.name.clone(),
                    slug: hero.slug.clone(),
                    hero_type: hero.hero_type.clone(),
                    image: hero_image(&hero.images, &HERO_CARD_IMAGE_KEYS),
                })
                .collect(),
            items: snapshot
                .items
                .iter()
                .filter(|item| item.is_released)
                .map(|item| ItemEntry {
                    name: item.name.clone(),
                    slug: item.slug.clone(),
                    kind: item.kind.clone(),
                    category: item.category.clone(),
                    tier: item.tier,
                    image: item.image.clone(),
                })
                .collect(),
        }
    }
}

fn patch(changelog: &deadlog_db::Changelog) -> Patch {
    Patch {
        id: changelog.id.clone(),
        title: changelog.title.clone(),
        pub_date: changelog.pub_date.clone(),
        author: changelog.author.clone(),
        major_update: changelog.major_update,
        content_text: changelog.content_text.clone(),
        preview_image: changelog.preview_image.clone(),
    }
}

/// `getChangelogIcons`: each patch's heroes and items, ordered by name.
fn icons(snapshot: &Snapshot) -> HashMap<String, PatchIcons> {
    let heroes: HashMap<i64, _> = snapshot.heroes.iter().map(|hero| (hero.id, hero)).collect();
    let items: HashMap<i64, _> = snapshot.items.iter().map(|item| (item.id, item)).collect();
    let mut result: HashMap<String, PatchIcons> = HashMap::new();

    for link in &snapshot.hero_links {
        let Some(hero) = heroes.get(&link.hero_id) else { continue };
        result.entry(link.changelog_id.clone()).or_default().heroes.push(Icon {
            name: hero.name.clone(),
            slug: hero.slug.clone(),
            src: hero_image(&hero.images, &HERO_ICON_IMAGE_KEYS),
            tone: hero_tone(hero.hero_type.as_deref()),
            change_count: link.change_count(),
        });
    }
    for link in &snapshot.item_links {
        let Some(item) = items.get(&link.item_id) else { continue };
        result.entry(link.changelog_id.clone()).or_default().items.push(Icon {
            name: item.name.clone(),
            slug: item.slug.clone(),
            src: item.image.clone(),
            tone: item_tone(item.category.as_deref()),
            change_count: link.change_count(),
        });
    }
    for icons in result.values_mut() {
        icons.heroes.sort_by(|a, b| a.name.cmp(&b.name));
        icons.items.sort_by(|a, b| a.name.cmp(&b.name));
    }
    result
}
