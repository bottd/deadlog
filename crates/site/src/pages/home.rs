//! The unfiltered feed: `/` leads with the newest patch and `/page/<n>` continues it, so
//! the whole archive is reachable without scripting. The search island replaces the
//! grid with filtered results and turns "Older patches" into infinite scroll.

use anyhow::Result;
use askama::Template;
use deadlog_model::{author_initials, patch_heading, plural};
use serde_json::json;

use super::Page;
use crate::context::{hero_card_image, locale_compare};
use crate::feed::{self, Icon, PatchSummary};
use crate::meta::{Meta, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, absolute_url, change_path, default_social_image};
use crate::{Assets, Layout, Site};

pub struct IconRow {
    pub items: bool,
    pub label: &'static str,
    pub tone: &'static str,
    pub icons: Vec<IconView>,
    pub extra: usize,
}

pub struct IconView {
    pub href: String,
    pub alt: String,
    pub src: String,
}

pub struct Count {
    pub n: usize,
    pub noun: &'static str,
    pub tone: &'static str,
}

/// A feed card's view, shared by the featured card and the grid (`patchCardView`).
pub struct CardView {
    pub href: String,
    pub heading: String,
    pub named: bool,
    pub date: String,
    pub datetime: String,
    pub author: String,
    pub author_image: String,
    pub initials: String,
    pub major: bool,
    pub preview_image: Option<String>,
    pub summary: String,
    pub rows: Vec<IconRow>,
    pub counts: Vec<Count>,
    pub totals: String,
    pub accessible_label: String,
}

fn icon_views(href: &str, icons: &[Icon]) -> Vec<IconView> {
    icons
        .iter()
        .map(|icon| IconView {
            href: format!("{href}#{}", deadlog_model::entity_fragment_id(&icon.alt)),
            alt: icon.alt.clone(),
            src: icon.src.clone(),
        })
        .collect()
}

pub fn card_view(patch: &PatchSummary, featured: bool) -> CardView {
    let changelog = patch.changelog;
    let href = change_path(&changelog.slug);
    let mut rows = Vec::new();
    if !patch.heroes.is_empty() {
        rows.push(IconRow {
            items: false,
            label: "Heroes",
            tone: "text-primary",
            icons: icon_views(&href, &patch.heroes),
            extra: patch.hero_count.saturating_sub(patch.heroes.len()),
        });
    }
    if !patch.items.is_empty() {
        rows.push(IconRow {
            items: true,
            label: "Items",
            tone: "text-signal",
            icons: icon_views(&href, &patch.items),
            extra: patch.item_count.saturating_sub(patch.items.len()),
        });
    }
    let mut counts = Vec::new();
    if patch.hero_count > 0 {
        counts.push(Count { n: patch.hero_count, noun: plural(patch.hero_count, "hero", "heroes"), tone: "text-primary" });
    }
    if patch.item_count > 0 {
        counts.push(Count { n: patch.item_count, noun: plural(patch.item_count, "item", "items"), tone: "text-signal" });
    }
    let phrases: Vec<String> = counts.iter().map(|count| format!("{} {}", count.n, count.noun)).collect();
    let heading = patch_heading(&changelog.title, &changelog.pub_date);
    let accessible_label = format!(
        "{}{}, by {}{}. View full patch.",
        if featured { "Latest patch, " } else { "" },
        if heading.named { format!("{}, {}", changelog.title, heading.date) } else { heading.date.clone() },
        changelog.author,
        if phrases.is_empty() { String::new() } else { format!(", affecting {}", phrases.join(" and ")) }
    );
    CardView {
        href,
        named: heading.named,
        date: heading.date,
        heading: heading.heading,
        datetime: changelog.pub_date.clone(),
        author: changelog.author.clone(),
        author_image: changelog.author_image.clone(),
        initials: author_initials(&changelog.author),
        major: changelog.major_update,
        preview_image: changelog.preview_image.clone(),
        summary: patch.summary.clone(),
        rows,
        counts,
        totals: phrases.join(" · "),
        accessible_label,
    }
}

pub struct RailHero {
    pub name: String,
    pub image: String,
}

#[derive(Template)]
#[template(path = "pages/home.html")]
struct HomePage<'a> {
    layout: Layout<'a>,
    page: usize,
    pages: usize,
    total: usize,
    total_label: &'static str,
    featured: Option<CardView>,
    cards: Vec<CardView>,
    rail: Vec<RailHero>,
    older: Option<String>,
    newer: Option<String>,
}

fn page_route(page: usize) -> String {
    if page == 0 { "/".into() } else { format!("/page/{}", page + 1) }
}

pub fn render(site: &Site, assets: &Assets) -> Result<Vec<Page>> {
    let index = feed::index(site);
    let total = index.rows.len();
    let pages = feed::page_count(total);
    let mut rail: Vec<RailHero> =
        site.released_heroes().map(|hero| RailHero { name: hero.name.clone(), image: hero_card_image(hero) }).collect();
    rail.sort_by(|a, b| locale_compare(&a.name, &b.name));

    let mut out = Vec::new();
    for page in 0..pages {
        let (summaries, has_more) = feed::unfiltered_page(&index, page);
        let mut cards: Vec<CardView> =
            summaries.iter().enumerate().map(|(position, patch)| card_view(patch, page == 0 && position == 0)).collect();
        let featured = (page == 0 && !cards.is_empty()).then(|| cards.remove(0));
        let route = page_route(page);
        let meta = if page == 0 {
            let latest = site.db.changelogs.first().map(|changelog| changelog.pub_date.clone());
            Meta::new(SITE_TITLE, SITE_DESCRIPTION, SITE_URL).json_ld(json!({
                "@graph": [
                    {
                        "@type": "WebSite",
                        "@id": format!("{SITE_URL}/#website"),
                        "url": SITE_URL,
                        "name": SITE_NAME,
                        "alternateName": "Deadlock Changelog",
                        "description": SITE_DESCRIPTION,
                        "inLanguage": "en-US"
                    },
                    {
                        "@type": "CollectionPage",
                        "@id": format!("{SITE_URL}/#webpage"),
                        "url": SITE_URL,
                        "name": SITE_TITLE,
                        "description": SITE_DESCRIPTION,
                        "image": default_social_image(),
                        "dateModified": latest,
                        "inLanguage": "en-US",
                        "isPartOf": { "@id": format!("{SITE_URL}/#website") },
                        "about": { "@type": "VideoGame", "name": "Deadlock" }
                    }
                ]
            }))
        } else {
            Meta::new(
                format!("Deadlock Patch Notes, page {} | Deadlog", page + 1),
                SITE_DESCRIPTION,
                absolute_url(&route),
            )
        };
        let html = HomePage {
            layout: Layout::new(assets, &route, meta),
            page,
            pages,
            total,
            total_label: plural(total, "patch", "patches"),
            featured,
            cards,
            rail: if page == 0 { rail.iter().map(|hero| RailHero { name: hero.name.clone(), image: hero.image.clone() }).collect() } else { Vec::new() },
            older: has_more.then(|| page_route(page + 1)),
            newer: (page > 0).then(|| page_route(page - 1)),
        }
        .render()?;
        out.push((super::file_for(&route), html));
    }
    Ok(out)
}
