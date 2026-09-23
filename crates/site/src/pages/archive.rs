use anyhow::Result;
use askama::Template;
use deadlog_model::{format_date, format_year};

use super::Page;
use crate::meta::{CollectionPage, Meta, SITE_NAME, absolute_url, collection_page_schema, deadlock_game, default_social_image};
use crate::{Assets, Layout, Site};

pub struct ArchivePatch {
    pub title: String,
    pub href: String,
    pub datetime: String,
    pub date: String,
}

#[derive(Template)]
#[template(path = "pages/archive.html")]
struct ArchivePage<'a> {
    layout: Layout<'a>,
    count: usize,
    years: Vec<(String, Vec<ArchivePatch>)>,
}

pub fn render(site: &Site, assets: &Assets) -> Result<Vec<Page>> {
    let title = "Deadlock Patch Archive | Deadlog";
    let description = "Browse every recorded Deadlock patch in chronological order.";
    let canonical = absolute_url("/archive");
    let patches = &site.db.changelogs;

    let mut years: Vec<(String, Vec<ArchivePatch>)> = Vec::new();
    for patch in patches {
        let year = format_year(&patch.pub_date);
        let entry = ArchivePatch {
            title: patch.title.clone(),
            href: format!("/change/{}", patch.slug),
            datetime: patch.pub_date.clone(),
            date: format_date(&patch.pub_date),
        };
        match years.iter_mut().find(|(existing, _)| *existing == year) {
            Some((_, group)) => group.push(entry),
            None => years.push((year, vec![entry])),
        }
    }

    let image = default_social_image();
    let schema = collection_page_schema(CollectionPage {
        canonical: &canonical,
        title,
        description,
        image: &image,
        about: vec![deadlock_game()],
        items: patches
            .iter()
            .map(|patch| (patch.title.clone(), absolute_url(&format!("/change/{}", patch.slug))))
            .collect(),
        date_modified: patches.first().map(|patch| patch.pub_date.clone()),
        breadcrumbs: vec![(SITE_NAME, "/"), ("Patch archive", "/archive")],
    });
    let layout = Layout::new(assets, "/archive", Meta::new(title, description, canonical).json_ld(schema));
    let html = ArchivePage { layout, count: patches.len(), years }.render()?;
    Ok(vec![("archive.html".into(), html)])
}
