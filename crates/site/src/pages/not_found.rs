use anyhow::Result;
use askama::Template;

use super::Page;
use crate::meta::{Meta, SITE_URL};
use crate::{Assets, Layout, Site};

#[derive(Template)]
#[template(path = "pages/not_found.html")]
struct NotFoundPage<'a> {
    layout: Layout<'a>,
    hero_count: usize,
    item_count: usize,
}

/// Served for every unknown path, so the canonical is the site root and the
/// requested path is filled in by the page script.
pub fn render(site: &Site, assets: &Assets) -> Result<Vec<Page>> {
    let meta = Meta::new("Not found | Deadlog", "That page is not in the Deadlog archive.", format!("{SITE_URL}/404"))
        .indexable(false);
    let html = NotFoundPage {
        layout: Layout::new(assets, "/404", meta),
        hero_count: site.released_heroes().count(),
        item_count: site.released_items().count(),
    }
    .render()?;
    Ok(vec![("404.html".into(), html)])
}
