use anyhow::Result;
use askama::Template;
use deadlog_model::locale_compare;

use super::Page;
use crate::context::hero_card_image;
use crate::meta::{
    CollectionPage, Meta, SITE_NAME, absolute_url, collection_page_schema, deadlock_game, default_social_image,
};
use crate::{Assets, Layout, Site};

pub struct DirectoryEntry {
    pub name: String,
    pub href: String,
    pub image: String,
    pub subtitle: Option<String>,
    pub category: Option<String>,
}

#[derive(Template)]
#[template(path = "pages/directory.html")]
struct DirectoryPage<'a> {
    layout: Layout<'a>,
    kind: &'static str,
    heading: &'static str,
    lede: &'static str,
    label: &'static str,
    entries: Vec<DirectoryEntry>,
}

pub const CATEGORIES: [&str; 4] = ["", "weapon", "vitality", "spirit"];

struct Kind {
    kind: &'static str,
    path: &'static str,
    heading: &'static str,
    lede: &'static str,
    title: &'static str,
    description: &'static str,
}

const HEROES: Kind = Kind {
    kind: "hero",
    path: "/heroes",
    heading: "Heroes",
    lede: "Find a hero to read every recorded buff, nerf, and balance change.",
    title: "Deadlock Heroes: Balance Change History | Deadlog",
    description: "Browse every released Deadlock hero and open a complete history of buffs, nerfs, and balance changes from official patch notes.",
};

const ITEMS: Kind = Kind {
    kind: "item",
    path: "/items",
    heading: "Items",
    lede: "Find an item to trace its balance changes across the patch archive.",
    title: "Deadlock Items: Balance Change History | Deadlog",
    description: "Browse every released Deadlock item and open a complete history of buffs, nerfs, and balance changes from official patch notes.",
};

fn page(assets: &Assets, kind: &Kind, mut entries: Vec<DirectoryEntry>) -> Result<Page> {
    entries.sort_by(|a, b| locale_compare(&a.name, &b.name));
    let canonical = absolute_url(kind.path);
    let image = default_social_image();
    let schema = collection_page_schema(CollectionPage {
        canonical: &canonical,
        title: kind.title,
        description: kind.description,
        image: &image,
        about: vec![deadlock_game()],
        items: entries.iter().map(|entry| (entry.name.clone(), absolute_url(&entry.href))).collect(),
        date_modified: None,
        breadcrumbs: vec![(SITE_NAME, "/"), (kind.heading, kind.path)],
    });
    let layout = Layout::new(assets, kind.path, Meta::new(kind.title, kind.description, canonical).json_ld(schema));
    let html = DirectoryPage {
        layout,
        kind: kind.kind,
        heading: kind.heading,
        lede: kind.lede,
        label: if kind.kind == "hero" { "heroes" } else { "items" },
        entries,
    }
    .render()?;
    Ok((super::file_for(kind.path), html))
}

pub fn render(site: &Site, assets: &Assets) -> Result<Vec<Page>> {
    let heroes = site
        .released_heroes()
        .map(|hero| DirectoryEntry {
            name: hero.name.clone(),
            href: format!("/hero/{}", hero.slug),
            image: hero_card_image(hero),
            subtitle: hero.hero_type.clone(),
            category: None,
        })
        .collect();
    let items = site
        .released_items()
        .map(|item| DirectoryEntry {
            name: item.name.clone(),
            href: format!("/item/{}", item.slug),
            image: item.image.clone(),
            subtitle: item.category.clone(),
            category: item.category.clone(),
        })
        .collect();
    Ok(vec![page(assets, &HEROES, heroes)?, page(assets, &ITEMS, items)?])
}
