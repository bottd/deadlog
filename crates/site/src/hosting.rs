//! Files the host reads rather than serves: `_redirects`, `_headers`, and the sitemap.

use anyhow::{Result, bail};
use deadlog_model::{canonical_slug, iso_string};

use crate::context::locale_compare;
use crate::meta::{SITE_URL, absolute_url, change_path};
use crate::{Output, Site};

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Redirect {
    pub from: String,
    pub to: String,
    pub status: u16,
}

pub fn parse_redirects(text: &str) -> Vec<Redirect> {
    text.lines()
        .map(str::trim)
        .filter(|line| !line.is_empty() && !line.starts_with('#'))
        .filter_map(|line| {
            let mut parts = line.split_whitespace();
            let from = parts.next()?.to_string();
            let to = parts.next()?.to_string();
            let status = parts.next().and_then(|status| status.parse().ok()).unwrap_or(302);
            Some(Redirect { from, to, status })
        })
        .collect()
}

/// Routes are matched byte-for-byte, so a slug with an uppercase letter could never be
/// reached; that is a data bug, and it fails the build rather than shipping a dead page.
fn check_lowercase<'a>(kind: &str, slugs: impl IntoIterator<Item = &'a str>) -> Result<()> {
    for slug in slugs {
        if slug != canonical_slug(slug) {
            bail!("{kind} slug \"{slug}\" is not lowercase — routes are matched exactly, so nothing could ever reach it");
        }
    }
    Ok(())
}

pub fn redirects(site: &Site) -> Result<Vec<Redirect>> {
    check_lowercase("hero", site.renderable_heroes().iter().map(|hero| hero.slug.as_str()))?;
    check_lowercase("item", site.renderable_items().iter().map(|item| item.slug.as_str()))?;
    check_lowercase("ability", site.released_abilities().iter().map(|(ability, _)| ability.slug.as_str()))?;
    check_lowercase("changelog", site.db.changelogs.iter().map(|changelog| changelog.slug.as_str()))?;

    let mut redirects = Vec::new();
    for alias in &site.db.aliases {
        let Some(target) = site.changelog(&alias.changelog_id) else {
            bail!("changelog alias {} points at missing changelog {}", alias.slug, alias.changelog_id);
        };
        check_lowercase("changelog alias", [alias.slug.as_str()])?;
        check_lowercase("changelog alias target", [target.slug.as_str()])?;
        let to = change_path(&target.slug);
        for from in [change_path(&alias.slug), format!("{}/", change_path(&alias.slug))] {
            redirects.push(Redirect { from, to: to.clone(), status: 308 });
        }
    }
    Ok(redirects)
}

// includeSubDomains and preload are deliberately omitted: they commit every current and
// future subdomain to HTTPS for a year, which is a separate decision from securing
// deadlog.io itself.
const HEADERS: &str = "/*
  Strict-Transport-Security: max-age=31536000
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/_assets/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable
";

fn sitemap(site: &Site) -> String {
    let mut entries: Vec<(String, Option<String>)> = Vec::new();
    let latest = site.db.changelogs.first().map(|changelog| iso_string(&changelog.pub_date));
    for path in ["/", "/heroes", "/items", "/archive"] {
        entries.push((absolute_url(path), latest.clone()));
    }
    for changelog in &site.db.changelogs {
        if changelog.content_text.as_deref().is_some_and(|text| !text.trim().is_empty()) {
            entries.push((absolute_url(&change_path(&changelog.slug)), Some(iso_string(&changelog.pub_date))));
        }
    }
    let last_modified = |ids: Vec<&str>| {
        ids.iter()
            .filter_map(|id| site.changelog(id))
            .map(|changelog| changelog.pub_date.as_str())
            .max()
            .map(iso_string)
    };
    let mut heroes: Vec<_> = site.released_heroes().filter(|hero| !hero.slug.is_empty()).collect();
    heroes.sort_by(|a, b| locale_compare(&a.name, &b.name));
    for hero in heroes {
        let ids = site.hero_history(hero.id).iter().map(|link| link.changelog_id.as_str()).collect();
        entries.push((absolute_url(&format!("/hero/{}", hero.slug)), last_modified(ids)));
    }
    let mut items: Vec<_> = site.released_items().filter(|item| !item.slug.is_empty()).collect();
    items.sort_by(|a, b| locale_compare(&a.name, &b.name));
    for item in items {
        let ids = site.item_history(item.id).iter().map(|link| link.changelog_id.as_str()).collect();
        entries.push((absolute_url(&format!("/item/{}", item.slug)), last_modified(ids)));
    }
    for (ability, _) in site.released_abilities() {
        let ids = site
            .db
            .hero_links
            .iter()
            .filter(|link| site.hero(link.hero_id).is_some_and(|hero| hero.is_released))
            .filter(|link| {
                link.change_groups.as_ref().is_some_and(|groups| {
                    groups.iter().any(|group| group.ability_slug.as_deref() == Some(ability.slug.as_str()))
                })
            })
            .map(|link| link.changelog_id.as_str())
            .collect();
        entries.push((absolute_url(&format!("/ability/{}", ability.slug)), last_modified(ids)));
    }

    let body: Vec<String> = entries
        .iter()
        .map(|(url, modified)| {
            let mut entry = format!("  <url>\n    <loc>{}</loc>", url.replace('&', "&amp;"));
            if let Some(modified) = modified {
                entry.push_str(&format!("\n    <lastmod>{}</lastmod>", modified.replace('&', "&amp;")));
            }
            entry.push_str("\n  </url>");
            entry
        })
        .collect();
    format!(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n{}\n</urlset>",
        body.join("\n")
    )
}

pub fn write(site: &Site, output: &mut Output) -> Result<()> {
    let redirects: Vec<String> =
        redirects(site)?.iter().map(|redirect| format!("{} {} {}", redirect.from, redirect.to, redirect.status)).collect();
    output.add("_redirects", format!("{}\n", redirects.join("\n")));
    output.add("_headers", HEADERS);
    output.add("sitemap.xml", sitemap(site));
    debug_assert!(SITE_URL.starts_with("https://"));
    Ok(())
}
