//! `/change/<year>/<slug>`: one patch's notes, rendered from its `.mg` file, with the
//! reading embeds (current details, previous changes, the stats band) filled from the
//! database the way `projectPatchReading` did.

use std::collections::{HashMap, HashSet};
use std::fs;
use std::path::Path;

use ::mog::TocEntry;
use anyhow::{Context, Result};
use askama::Template;
use chrono::Timelike;
use deadlog_changelog::{PROPERTY_EXTRACTION_VERSION, digest};
use deadlog_db::{Ability, Changelog};
use deadlog_model::{
    EntityType, author_initials, entity_fragment_id, entity_names_match, format_date, iso_string, make_summary,
    parse_date, patch_heading, plural, related_share, resolve_hero_ability_slug, to_slug,
};
use rayon::prelude::*;
use serde_json::{Value, json};

use super::Page;
use crate::context::hero_icon_image;
use crate::meta::{Article, Meta, SITE_NAME, SITE_URL, absolute_url, breadcrumb_list, change_path};
use crate::mog::{self, Icon, Icons, Manifest, PatchContext, Reading, detail_key, previous_key};
use crate::share::{
    self, ContextView, MethodNote, PropertyLink, RELATED_ITEMS_LIMIT, RELATED_MIN_APPEARANCES, RELATED_MIN_BUYERS,
    ShareRow,
};
use crate::{Assets, Layout, Site};

fn format_time(date: &str) -> String {
    let local = parse_date(date).unwrap_or_default().with_timezone(&chrono_tz::America::Los_Angeles);
    let (pm, hour) = local.hour12();
    format!("{hour}:{:02} {}", local.minute(), if pm { "PM" } else { "AM" })
}

fn icons(site: &Site, changelog: &Changelog) -> Icons {
    let by_name = |mut icons: Vec<Icon>| {
        icons.sort_by(|a, b| a.alt.cmp(&b.alt));
        icons
    };
    Icons {
        heroes: by_name(
            site.heroes_in(&changelog.id)
                .iter()
                .filter_map(|link| site.hero(link.hero_id))
                .map(|hero| Icon { id: hero.id, src: hero_icon_image(hero), alt: hero.name.clone() })
                .collect(),
        ),
        items: by_name(
            site.items_in(&changelog.id)
                .iter()
                .filter_map(|link| site.item(link.item_id))
                .map(|item| Icon { id: item.id, src: item.image.clone(), alt: item.name.clone() })
                .collect(),
        ),
    }
}

/// `projectPatchReading` plus `resolveRelatedReading`.
fn reading(
    site: &Site,
    changelog: &Changelog,
    icons: &Icons,
    manifest: &Manifest,
    tocs: &HashMap<String, Vec<TocEntry>>,
) -> Reading {
    let mut reading = Reading::default();
    let heroes = site.heroes_in(&changelog.id);
    let items = site.items_in(&changelog.id);

    for link in items {
        let Some(item) = site.item(link.item_id) else { continue };
        let changed =
            link.change_groups.as_ref().is_some_and(|groups| groups.iter().any(|group| !group.bullets.is_empty()));
        if let (Some(context), true) = (&item.context, changed) {
            reading.details.insert(
                detail_key(EntityType::Item, item.id, None),
                ContextView {
                    context: context.clone(),
                    name: item.name.clone(),
                    header: false,
                    history_href: Some(format!("/item/{}", item.slug)),
                },
            );
        }
    }
    let abilities: Vec<&Ability> =
        heroes.iter().flat_map(|link| site.abilities(link.hero_id).iter().copied()).collect();
    for ability in &abilities {
        let Some(hero) = heroes.iter().find(|link| link.hero_id == ability.hero_id) else { continue };
        let exact = hero.change_groups.iter().flatten().any(|group| {
            group.ability.as_ref().is_some_and(|name| to_slug(name) == ability.slug)
                && !group.bullets.is_empty()
                && group.ability_slug.as_deref() == Some(ability.slug.as_str())
        });
        if let (Some(context), true) = (&ability.context, exact) {
            reading.details.insert(
                detail_key(EntityType::Hero, ability.hero_id, Some(&ability.slug)),
                ContextView {
                    context: context.clone(),
                    name: ability.name.clone(),
                    header: false,
                    history_href: Some(format!("/ability/{}", ability.slug)),
                },
            );
        }
    }

    for event in site.db.property_events.iter().filter(|event| event.changelog_id == changelog.id) {
        if event.extraction_version != PROPERTY_EXTRACTION_VERSION
            || event.previous_old.is_none()
            || event.previous_new.is_none()
        {
            continue;
        }
        let Some(previous) = event.previous_changelog_id.as_deref().and_then(|id| site.changelog(id)) else { continue };
        let index = event.group_index as usize;
        let (name, group) = match event.entity_type.as_str() {
            "hero" => {
                let Some(link) = heroes.iter().find(|link| link.hero_id == event.entity_id) else { continue };
                let Some(hero) = site.hero(link.hero_id) else { continue };
                let group = link.change_groups.as_ref().and_then(|groups| groups.get(index));
                (hero.name.as_str(), group.map(|group| (group.ability.as_deref(), group.bullets.as_slice())))
            }
            _ => {
                let Some(link) = items.iter().find(|link| link.item_id == event.entity_id) else { continue };
                let Some(item) = site.item(link.item_id) else { continue };
                let group = link.change_groups.as_ref().and_then(|groups| groups.get(index));
                (item.name.as_str(), group.map(|group| (group.ability.as_deref(), group.bullets.as_slice())))
            }
        };
        let Some((ability, bullets)) = group else { continue };
        let Some(bullet) = bullets.get(event.bullet_index as usize) else { continue };
        if digest(bullet) != event.digest {
            continue;
        }
        let toc = tocs.get(&previous.slug).map(Vec::as_slice).unwrap_or_default();
        let mut owner: Option<&str> = None;
        let headings: Vec<&TocEntry> = toc
            .iter()
            .filter(|heading| {
                if heading.level <= 2 {
                    owner = (heading.level == 2).then_some(heading.title.as_str());
                }
                match &ability {
                    Some(ability) => {
                        heading.level == 3
                            && heading.title == *ability
                            && owner.is_some_and(|owner| entity_names_match(owner, name))
                    }
                    None => heading.level == 2 && entity_names_match(&heading.title, name),
                }
            })
            .collect();
        let [heading] = headings.as_slice() else { continue };
        let link =
            PropertyLink { event, previous_slug: previous.slug.clone(), previous_pub_date: previous.pub_date.clone() };
        let href = format!("{}#{}", change_path(&previous.slug), heading.id);
        let annotation = share::previous_change(&link, &changelog.pub_date, ability, name, Some(href));
        reading.previous.insert(
            previous_key(&event.entity_type, event.entity_id, event.group_index, event.bullet_index),
            (annotation, bullet.clone()),
        );
    }

    for link in heroes {
        let Some(order) = &link.ability_order else { continue };
        let changed: Vec<Option<&str>> =
            link.change_groups.iter().flatten().map(|group| group.ability_slug.as_deref()).collect();
        let rows = share::maxed_first_rows(order, site.abilities(link.hero_id).iter().copied(), &changed);
        if !rows.is_empty() {
            reading.maxed_first.insert(link.hero_id, rows);
        }
    }
    for link in items {
        if let Some(bought) = &link.bought_by {
            let rows = share::bought_by_rows(bought, site);
            if !rows.is_empty() {
                reading.bought_by.insert(link.item_id, rows);
            }
        }
        if let Some(time) = share::buy_time(link.impact.as_ref()) {
            reading.buy_time.insert(link.item_id, time);
        }
    }

    let patch_path = change_path(&changelog.slug);
    // The manifest only lists complete records of a measured patch.
    for (name, record) in &manifest.related {
        let Some(hero) = icons.heroes.iter().find(|hero| entity_names_match(&hero.alt, name)) else { continue };
        if record.appearances < RELATED_MIN_APPEARANCES {
            continue;
        }
        let rows: Vec<ShareRow> = record
            .items
            .iter()
            .filter(|recorded| recorded.buyers >= RELATED_MIN_BUYERS && recorded.buyers <= record.appearances)
            .filter_map(|recorded| {
                let item = icons.items.iter().find(|item| item.id == recorded.id)?;
                let sections: Vec<&(EntityType, String, String)> = manifest
                    .sections
                    .iter()
                    .filter(|(kind, section, _)| *kind == EntityType::Item && entity_names_match(section, &item.alt))
                    .collect();
                let [(_, _, id)] = sections.as_slice() else { return None };
                let share = related_share(record, recorded);
                Some(ShareRow {
                    name: item.alt.clone(),
                    image: item.src.clone(),
                    href: format!("{patch_path}#{id}"),
                    before: share.before,
                    after: share.after,
                    muted: false,
                })
            })
            .take(RELATED_ITEMS_LIMIT)
            .collect();
        if !rows.is_empty() {
            reading.related.insert(hero.id, rows);
        }
    }
    reading
}

pub struct TocAbility {
    pub id: String,
    pub title: String,
    pub image: Option<String>,
}

pub struct TocEntity {
    pub fragment: String,
    pub src: String,
    pub alt: String,
    pub abilities: Vec<TocAbility>,
}

pub struct TocGroup {
    pub id: &'static str,
    pub label: &'static str,
    pub entities: Vec<TocEntity>,
}

pub struct TocView {
    pub hide_general: bool,
    pub generic: Vec<(String, String, bool)>,
    pub groups: Vec<TocGroup>,
}

const STRUCTURED_SECTION_IDS: [&str; 3] = ["general-changes", "hero-changes", "item-changes"];

/// `ChangelogToc`'s grouping: entities in the order their headings appear, each with
/// the ability headings nested under it.
fn toc_view(toc: &[TocEntry], icons: &Icons, abilities: &[&Ability]) -> TocView {
    let hide_general = !toc.iter().any(|entry| entry.id == "general-changes");
    let generic = if icons.heroes.is_empty() && icons.items.is_empty() {
        toc.iter()
            .filter(|entry| !STRUCTURED_SECTION_IDS.contains(&entry.id.as_str()))
            .map(|entry| (entry.id.clone(), entry.title.clone(), entry.level > 1))
            .collect()
    } else {
        Vec::new()
    };

    let mut positions: HashMap<&str, HashMap<&str, usize>> = HashMap::new();
    let mut nested: HashMap<&str, Vec<&TocEntry>> = HashMap::new();
    let mut section: Option<&str> = None;
    let mut open: Option<&str> = None;
    for entry in toc {
        if entry.level == 3 {
            if let Some(owner) = open {
                nested.entry(owner).or_default().push(entry);
            }
            continue;
        }
        open = None;
        if entry.level == 1 {
            section = Some(&entry.id);
            positions.insert(&entry.id, HashMap::new());
        } else if entry.level == 2 {
            if let Some(map) = section.and_then(|id| positions.get_mut(id)) {
                let size = map.len();
                map.insert(&entry.id, size);
            }
            open = Some(&entry.id);
            nested.insert(&entry.id, Vec::new());
        }
    }

    let groups = [("hero-changes", "Heroes", &icons.heroes), ("item-changes", "Items", &icons.items)]
        .into_iter()
        .filter(|(_, _, entities)| !entities.is_empty())
        .map(|(id, label, entities)| {
            let order = positions.get(id);
            let rank = |icon: &Icon| {
                order.and_then(|order| order.get(entity_fragment_id(&icon.alt).as_str()).copied()).unwrap_or(usize::MAX)
            };
            let mut sorted: Vec<&Icon> = entities.iter().collect();
            sorted.sort_by_key(|icon| rank(icon));
            TocGroup {
                id,
                label,
                entities: sorted
                    .into_iter()
                    .map(|icon| {
                        let fragment = entity_fragment_id(&icon.alt);
                        let hero_abilities: Vec<&&Ability> = if id == "hero-changes" {
                            abilities.iter().filter(|ability| ability.hero_id == icon.id).collect()
                        } else {
                            Vec::new()
                        };
                        TocEntity {
                            abilities: nested
                                .get(fragment.as_str())
                                .map(|entries| {
                                    entries
                                        .iter()
                                        .map(|entry| {
                                            let slug = resolve_hero_ability_slug(
                                                &entry.title,
                                                hero_abilities.iter().map(|ability| ability.slug.as_str()),
                                            );
                                            TocAbility {
                                                id: entry.id.clone(),
                                                title: entry.title.clone(),
                                                image: slug.and_then(|slug| {
                                                    hero_abilities
                                                        .iter()
                                                        .find(|ability| ability.slug == slug)
                                                        .map(|ability| ability.image.clone())
                                                }),
                                            }
                                        })
                                        .collect()
                                })
                                .unwrap_or_default(),
                            fragment,
                            src: icon.src.clone(),
                            alt: icon.alt.clone(),
                        }
                    })
                    .collect(),
            }
        })
        .collect();
    TocView { hide_general, generic, groups }
}

impl TocView {
    fn link_count(&self) -> usize {
        usize::from(!self.hide_general)
            + self.generic.len()
            + self.groups.iter().map(|group| group.entities.len() + 1).sum::<usize>()
    }
}

#[derive(Template)]
#[template(path = "pages/patch.html")]
struct PatchPage<'a> {
    layout: Layout<'a>,
    heading: String,
    named: bool,
    date: String,
    datetime: String,
    time: String,
    author: String,
    author_image: String,
    initials: String,
    hero_count: usize,
    item_count: usize,
    hero_label: &'static str,
    item_label: &'static str,
    source_url: String,
    patch_path: String,
    toc: Option<TocView>,
    content: String,
    entities: String,
    method: MethodNote,
}

fn render_patch(
    site: &Site,
    assets: &Assets,
    changelog: &Changelog,
    source: &str,
    tocs: &HashMap<String, Vec<TocEntry>>,
) -> Result<Page> {
    let toc_entries = tocs.get(&changelog.slug).map(Vec::as_slice).unwrap_or_default();
    let prepared = mog::prepare(source, toc_entries)?;
    let icons = icons(site, changelog);
    let reading = reading(site, changelog, &icons, &prepared.manifest, tocs);
    let content = mog::render(
        &prepared,
        &PatchContext {
            icons: &icons,
            reading: &reading,
            manifest: &prepared.manifest,
            pub_date: &changelog.pub_date,
            changelog_id: &changelog.id,
        },
    )?;

    let mut abilities: Vec<&Ability> =
        site.heroes_in(&changelog.id).iter().flat_map(|link| site.abilities(link.hero_id).iter().copied()).collect();
    abilities.sort_by_key(|ability| (ability.hero_id, ability.position));
    let toc = toc_view(toc_entries, &icons, &abilities);

    let mut context_versions: Vec<i64> = reading
        .details
        .values()
        .filter_map(|view| view.context.client_version)
        .collect::<HashSet<_>>()
        .into_iter()
        .collect();
    context_versions.sort_unstable();
    let method = MethodNote {
        collected_at: prepared.manifest.stats.as_ref().map(|stats| stats.collected_at.clone()),
        shipped: "this patch",
        context_versions,
        details: !reading.details.is_empty(),
        previous: !reading.previous.is_empty(),
        related: !reading.related.is_empty(),
        maxed_first: !reading.maxed_first.is_empty(),
        bought_by: !reading.bought_by.is_empty(),
        buy_time: !reading.buy_time.is_empty(),
    };

    let patch_path = change_path(&changelog.slug);
    let canonical = absolute_url(&patch_path);
    let title = format!("{} | Deadlock Patch Notes", changelog.title);
    let description = Some(make_summary(changelog.content_text.as_deref(), 155))
        .filter(|text| !text.is_empty())
        .unwrap_or_else(|| {
            format!(
                "Read the {} Deadlock patch notes, including hero, item, and gameplay balance changes.",
                format_date(&changelog.pub_date)
            )
        });
    let image = absolute_url(&format!("/assets/meta/change/{}.png", changelog.id));
    let indexable = changelog.content_text.as_deref().is_some_and(|text| !text.trim().is_empty());
    let published = iso_string(&changelog.pub_date);
    let names: Vec<String> = icons.heroes.iter().chain(&icons.items).map(|icon| icon.alt.clone()).collect();
    let mut meta = Meta::new(&title, &description, &canonical).image(&image).indexable(indexable).article(Article {
        published_time: published.clone(),
        section: "Deadlock Patch Notes".into(),
        tags: names.clone(),
    });
    if indexable {
        meta = meta.json_ld(json!({
            "@graph": [
                {
                    "@type": "Article",
                    "@id": format!("{canonical}#article"),
                    "headline": changelog.title,
                    "name": title,
                    "description": description,
                    "url": canonical,
                    "mainEntityOfPage": { "@type": "WebPage", "@id": canonical },
                    "datePublished": published,
                    "dateModified": published,
                    "image": { "@type": "ImageObject", "url": image, "width": 1200, "height": 630 },
                    "author": { "@type": "Person", "name": changelog.author },
                    "publisher": {
                        "@type": "Organization",
                        "name": SITE_NAME,
                        "url": SITE_URL,
                        "logo": {
                            "@type": "ImageObject",
                            "url": absolute_url("/android-chrome-512x512.png"),
                            "width": 512,
                            "height": 512
                        }
                    },
                    "articleSection": "Deadlock Patch Notes",
                    "isAccessibleForFree": true,
                    "inLanguage": "en-US",
                    "isBasedOn": { "@type": "CreativeWork", "url": changelog.source_url },
                    "about": names.iter().map(|name| json!({ "@type": "Thing", "name": name })).collect::<Vec<Value>>()
                },
                breadcrumb_list(&[(SITE_NAME, "/"), (&changelog.title, &patch_path)])
            ]
        }));
    }

    let heading = patch_heading(&changelog.title, &changelog.pub_date);
    let entities = json!({
        "heroes": icons.heroes.iter().map(|icon| &icon.alt).collect::<Vec<_>>(),
        "items": icons.items.iter().map(|icon| &icon.alt).collect::<Vec<_>>(),
    })
    .to_string();
    let page = PatchPage {
        layout: Layout::new(assets, &patch_path, meta),
        heading: heading.heading,
        named: heading.named,
        date: heading.date,
        datetime: published,
        time: format_time(&changelog.pub_date),
        author: changelog.author.clone(),
        author_image: changelog.author_image.clone(),
        initials: author_initials(&changelog.author),
        hero_count: icons.heroes.len(),
        item_count: icons.items.len(),
        hero_label: plural(icons.heroes.len(), "hero", "heroes"),
        item_label: plural(icons.items.len(), "item", "items"),
        source_url: changelog.source_url.clone(),
        patch_path: patch_path.clone(),
        toc: (toc.link_count() > 1).then_some(toc),
        content,
        entities,
        method,
    };
    Ok((super::file_for(&patch_path), page.render()?))
}

pub fn render(site: &Site, assets: &Assets, changelogs: &Path) -> Result<Vec<Page>> {
    let sources: Vec<(&Changelog, String)> = site
        .db
        .changelogs
        .iter()
        .map(|changelog| {
            let path = changelogs.join(format!("{}.mg", changelog.slug));
            fs::read_to_string(&path)
                .with_context(|| format!("Missing .mg file for {}", changelog.slug))
                .map(|source| (changelog, source))
        })
        .collect::<Result<_>>()?;
    let tocs: HashMap<String, Vec<TocEntry>> = sources
        .par_iter()
        .map(|(changelog, source)| {
            Ok((changelog.slug.clone(), mog::toc(source).with_context(|| changelog.slug.clone())?))
        })
        .collect::<Result<_>>()?;
    sources
        .par_iter()
        .map(|(changelog, source)| {
            render_patch(site, assets, changelog, source, &tocs)
                .with_context(|| format!("rendering /change/{}", changelog.slug))
        })
        .collect()
}
