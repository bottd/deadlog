//! Hero, item and ability histories. One page shape serves all three, as
//! `EntityChangelogPage.svelte` did; the builders differ in what they feed it.

use std::collections::HashMap;

use anyhow::Result;
use askama::Template;
use deadlog_db::{Ability, Changelog, Hero, Item};
use deadlog_model::{
    ChangeGroup, EntityImpact, HeroChangeGroup, PatchStats, RelatedItems, ability_fragment_id, entity_fragment_id,
    format_date, format_date_short, format_year, iso_string, plural, related_share,
};
use rayon::prelude::*;
use serde_json::{Value, json};

use super::Page;
use crate::context::hero_card_image;
use crate::meta::{
    CollectionPage, Meta, SITE_NAME, absolute_url, change_path, collection_page_schema, deadlock_game,
    default_social_image,
};
use crate::share::{
    self, BuyTime, ContextView, MethodNote, PageContext, PreviousChange, PropertyLink, ShareRow, ShareWindows,
};
use crate::{Assets, Layout, Site};

#[derive(Clone, Copy, PartialEq, Eq)]
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

    fn listing(self) -> (&'static str, &'static str) {
        match self {
            Kind::Item => ("/items", "Items"),
            Kind::Hero | Kind::Ability => ("/heroes", "Heroes"),
        }
    }
}

pub struct Bullet {
    pub text: String,
    pub previous: Option<PreviousChange>,
}

pub struct GroupView {
    pub ability: Option<String>,
    pub icon: Option<String>,
    pub bullets: Vec<Bullet>,
    pub context: Option<ContextView>,
}

pub struct RelatedNote {
    pub name: String,
    pub image: String,
    pub groups: Vec<Vec<String>>,
}

pub enum BandBlock {
    Share {
        kind: &'static str,
        heading_id: String,
        title: &'static str,
        lead: String,
        rows: Vec<ShareRow>,
        paired: bool,
        round: bool,
        notes: Vec<RelatedNote>,
    },
    BuyTime {
        lead: String,
        time: BuyTime,
    },
}

impl BandBlock {
    fn share(
        kind: &'static str,
        entry: &str,
        subject: &str,
        rows: Vec<ShareRow>,
        windows: &ShareWindows,
        notes: Vec<RelatedNote>,
    ) -> Self {
        let (title, lead, round) = match kind {
            "maxed-first" => ("Maxed first", format!("Share of {subject} players who maxed each ability first"), false),
            "related" => ("Also changed in this patch", format!("Share of {subject} players who bought each"), false),
            _ => ("Bought most by", format!("Share of each hero's players who bought {subject}"), true),
        };
        let paired = rows.iter().any(|row| row.after.is_some());
        BandBlock::Share {
            kind,
            heading_id: format!("{kind}-{entry}-heading"),
            title,
            lead: format!("{lead}, {}.", windows.span(paired)),
            rows,
            paired,
            round,
            notes,
        }
    }
}

pub struct PatchView {
    pub id: String,
    pub href: String,
    pub datetime: String,
    pub date: String,
    pub count_label: String,
    pub groups: Vec<GroupView>,
    pub band: Vec<BandBlock>,
}

pub struct TocPatch {
    pub id: String,
    pub label: String,
    pub change_count: Option<usize>,
}

pub struct RecentPatch {
    pub href: String,
    pub datetime: String,
    pub date: String,
    pub label: String,
}

pub struct RailEntry {
    pub slug: String,
    pub name: String,
    pub image: String,
    pub current: bool,
}

pub struct Latest {
    pub mentioned: bool,
    pub href: String,
    pub datetime: String,
    pub date: String,
}

#[derive(Template)]
#[template(path = "pages/entity.html")]
struct EntityPage<'a> {
    layout: Layout<'a>,
    kind: &'static str,
    name: String,
    image: Option<String>,
    accent: String,
    label: String,
    label_suffix: Option<String>,
    parent: Option<(String, String)>,
    listing_path: &'static str,
    listing_label: String,
    latest: Option<Latest>,
    summary: String,
    oldest: Option<(String, String)>,
    unknown: Option<String>,
    recent: Vec<RecentPatch>,
    recent_label: String,
    ability_descriptions: Vec<(String, String)>,
    about: Option<ContextView>,
    rail: Vec<RailEntry>,
    spacious: bool,
    patch_count: String,
    years: Vec<(String, String, Vec<PatchView>)>,
    toc: Vec<(String, Vec<TocPatch>)>,
    method: MethodNote,
}

/// One patch in an entity's history, before it is shaped for the page.
struct Entry<'a> {
    changelog: &'a Changelog,
    groups: Option<Vec<Group>>,
    impact: Option<&'a EntityImpact>,
    stats: Option<&'a PatchStats>,
    related: Option<Related>,
    maxed_first: Option<Vec<ShareRow>>,
    bought_by: Option<Vec<ShareRow>>,
    buy_time: Option<BuyTime>,
}

struct Group {
    ability: Option<String>,
    ability_slug: Option<String>,
    icon: Option<String>,
    bullets: Vec<String>,
    previous: Vec<Option<PreviousChange>>,
}

struct Related {
    items: Vec<(ShareRow, Vec<ChangeGroup>)>,
}

impl Entry<'_> {
    fn change_count(&self) -> Option<usize> {
        self.groups.as_ref().map(|groups| groups.iter().map(|group| group.bullets.len()).sum())
    }
}

fn change_count_label(count: Option<usize>) -> String {
    match count {
        None => "change count unavailable".into(),
        Some(count) => format!("{count} {}", plural(count, "change", "changes")),
    }
}

struct Subject<'a> {
    kind: Kind,
    name: &'a str,
}

/// Fragment only: a `?hero=` query would mint a crawlable duplicate of the patch page.
/// An ability anchors on the label of the group it matched, since the notes head each
/// group with the changed stat rather than the ability's own name.
fn patch_href(slug: &str, groups: Option<&[Group]>, subject: &Subject) -> String {
    let path = change_path(slug);
    if subject.kind != Kind::Ability {
        return format!("{path}#{}", entity_fragment_id(subject.name));
    }
    match groups.and_then(|groups| groups.iter().find_map(|group| group.ability.as_deref())) {
        Some(label) => format!("{path}#{}", ability_fragment_id(label)),
        None => path,
    }
}

type PreviousLookup<'a> = HashMap<(String, i64, i64), PropertyLink<'a>>;

fn previous_lookup<'a>(site: &Site<'a>, entity_type: &str, entity_id: i64) -> PreviousLookup<'a> {
    site.property_events(entity_type, entity_id)
        .into_iter()
        .filter(|event| event.previous_old.is_some() && event.previous_new.is_some())
        .filter_map(|event| {
            let previous = site.changelog(event.previous_changelog_id.as_deref()?)?;
            Some((
                (event.changelog_id.clone(), event.group_index, event.bullet_index),
                PropertyLink { event, previous_slug: previous.slug.clone(), previous_pub_date: previous.pub_date.clone() },
            ))
        })
        .collect()
}

fn previous_for(
    lookup: &PreviousLookup,
    changelog: &Changelog,
    ability: Option<&str>,
    bullets: &[String],
    group_index: usize,
    entity_name: &str,
) -> Vec<Option<PreviousChange>> {
    let previous: Vec<Option<PreviousChange>> = (0..bullets.len())
        .map(|bullet_index| {
            lookup
                .get(&(changelog.id.clone(), group_index as i64, bullet_index as i64))
                .map(|link| share::previous_change(link, &changelog.pub_date, ability, entity_name, None))
        })
        .collect();
    if previous.iter().any(Option::is_some) { previous } else { Vec::new() }
}

fn hero_groups(
    groups: &[HeroChangeGroup],
    changelog: &Changelog,
    abilities: &[&Ability],
    lookup: &PreviousLookup,
    hero_name: &str,
) -> Vec<Group> {
    groups
        .iter()
        .enumerate()
        .map(|(index, group)| Group {
            ability: group.ability.clone(),
            ability_slug: group.ability_slug.clone(),
            icon: abilities
                .iter()
                .find(|ability| Some(&ability.slug) == group.ability_slug.as_ref())
                .map(|ability| ability.image.clone()),
            previous: previous_for(lookup, changelog, group.ability.as_deref(), &group.bullets, index, hero_name),
            bullets: group.bullets.clone(),
        })
        .collect()
}

fn related_changes(site: &Site, changelog: &Changelog, related: Option<&RelatedItems>) -> Option<Related> {
    let related = related.filter(|related| related.status == "complete")?;
    changelog.stats.as_ref()?.before.as_ref()?;
    let items: Vec<(ShareRow, Vec<ChangeGroup>)> = related
        .items
        .iter()
        .filter_map(|item| {
            let link = site
                .items_in(&changelog.id)
                .iter()
                .find(|link| link.item_id == item.id && link.change_groups.as_ref().is_some_and(|groups| !groups.is_empty()));
            let Some(link) = link else {
                eprintln!("Related item {} has no change section in {}; omitted", item.id, changelog.slug);
                return None;
            };
            let entity = site.item(item.id)?;
            let share = related_share(related, item);
            Some((
                ShareRow {
                    name: entity.name.clone(),
                    image: entity.image.clone(),
                    href: format!("{}#{}", change_path(&changelog.slug), entity_fragment_id(&entity.name)),
                    before: share.before,
                    after: share.after,
                    muted: false,
                },
                link.change_groups.clone().unwrap_or_default(),
            ))
        })
        .collect();
    (!items.is_empty()).then_some(Related { items })
}

struct Common<'a> {
    kind: Kind,
    name: String,
    image: Option<String>,
    accent: String,
    label: String,
    label_suffix: Option<String>,
    parent: Option<(String, String)>,
    path: String,
    title: String,
    description: String,
    og_image: String,
    indexable: bool,
    abilities: Vec<&'a Ability>,
    current_ability: Option<String>,
    contexts: HashMap<String, PageContext>,
    first_context_version: Option<i64>,
    about: Option<PageContext>,
}

fn render_page(assets: &Assets, common: Common, entries: Vec<Entry>) -> Result<Page> {
    let subject = Subject { kind: common.kind, name: &common.name };
    let (listing_path, listing_label) = common.kind.listing();

    let context_version =
        common.about.as_ref().and_then(|about| about.client_version).or(common.first_context_version);
    let method = MethodNote {
        collected_at: entries.iter().find_map(|entry| entry.stats).map(|stats| stats.collected_at.clone()),
        shipped: "a patch",
        context_versions: context_version.into_iter().collect(),
        details: context_version.is_some(),
        previous: entries.iter().any(|entry| {
            entry.groups.as_ref().is_some_and(|groups| groups.iter().any(|group| group.previous.iter().any(Option::is_some)))
        }),
        related: entries.iter().any(|entry| entry.related.is_some()),
        maxed_first: entries.iter().any(|entry| entry.maxed_first.as_ref().is_some_and(|rows| !rows.is_empty())),
        bought_by: entries.iter().any(|entry| entry.bought_by.as_ref().is_some_and(|rows| !rows.is_empty())),
        buy_time: entries.iter().any(|entry| entry.buy_time.is_some()),
    };

    let counted: Vec<usize> = entries.iter().filter_map(Entry::change_count).collect();
    let total: usize = counted.iter().sum();
    let unknown = entries.len() - counted.len();
    let changes_value = if unknown == 0 {
        Some(total.to_string())
    } else if !counted.is_empty() {
        Some(format!("{total}+"))
    } else {
        None
    };
    let summary = format!(
        "{} {}{}",
        entries.len(),
        plural(entries.len(), "patch", "patches"),
        changes_value.map(|value| format!(" · {value} changes")).unwrap_or_default()
    );

    let latest = entries.first().map(|entry| Latest {
        mentioned: entry.change_count().is_none(),
        href: patch_href(&entry.changelog.slug, entry.groups.as_deref(), &subject),
        datetime: iso_string(&entry.changelog.pub_date),
        date: format_date(&entry.changelog.pub_date),
    });
    let oldest = entries.last().map(|entry| (iso_string(&entry.changelog.pub_date), format_date(&entry.changelog.pub_date)));
    let recent = entries
        .iter()
        .take(6)
        .map(|entry| RecentPatch {
            href: patch_href(&entry.changelog.slug, entry.groups.as_deref(), &subject),
            datetime: iso_string(&entry.changelog.pub_date),
            date: format_date_short(&entry.changelog.pub_date),
            label: format!(
                "View {} in the {} patch, {}",
                common.name,
                format_date_short(&entry.changelog.pub_date),
                change_count_label(entry.change_count())
            ),
        })
        .collect::<Vec<_>>();
    let recent_label = format!("Most recent {} of {} patches", recent.len(), entries.len());

    let spacious = !common.contexts.is_empty();
    let mut years: Vec<(String, String, Vec<PatchView>)> = Vec::new();
    let mut toc: Vec<(String, Vec<TocPatch>)> = Vec::new();
    for entry in &entries {
        let year = format_year(&entry.changelog.pub_date);
        let view = patch_view(entry, &subject, &common);
        let toc_entry = TocPatch {
            id: entry.changelog.id.clone(),
            label: format_date(&entry.changelog.pub_date),
            change_count: entry.change_count(),
        };
        match years.iter_mut().find(|(existing, _, _)| *existing == year) {
            Some((_, _, patches)) => patches.push(view),
            None => years.push((year.clone(), String::new(), vec![view])),
        }
        match toc.iter_mut().find(|(existing, _)| *existing == year) {
            Some((_, patches)) => patches.push(toc_entry),
            None => toc.push((year, vec![toc_entry])),
        }
    }
    for (_, label, patches) in &mut years {
        *label = format!("{} {}", patches.len(), plural(patches.len(), "patch", "patches"));
    }
    if entries.len() < 6 {
        toc.clear();
    }

    let canonical = absolute_url(&common.path);
    let mut meta = Meta::new(&common.title, &common.description, &canonical)
        .image(&common.og_image)
        .indexable(common.indexable);
    if common.indexable {
        let mut thing = serde_json::Map::new();
        thing.insert("@type".into(), json!("Thing"));
        thing.insert("name".into(), json!(common.name));
        if let Some(image) = &common.image {
            thing.insert("image".into(), json!(image));
        }
        let parent_path = common.parent.as_ref().map(|(name, slug)| (name.clone(), format!("/hero/{slug}")));
        let mut breadcrumbs: Vec<(&str, &str)> = vec![(SITE_NAME, "/"), (listing_label, listing_path)];
        if let Some((name, path)) = &parent_path {
            breadcrumbs.push((name, path));
        }
        breadcrumbs.push((&common.name, &common.path));
        meta = meta.json_ld(collection_page_schema(CollectionPage {
            canonical: &canonical,
            title: &common.title,
            description: &common.description,
            image: &common.og_image,
            about: vec![deadlock_game(), Value::Object(thing)],
            items: entries
                .iter()
                .map(|entry| (entry.changelog.title.clone(), absolute_url(&change_path(&entry.changelog.slug))))
                .collect(),
            date_modified: entries.first().map(|entry| iso_string(&entry.changelog.pub_date)),
            breadcrumbs,
        }));
    }

    let rail = common
        .abilities
        .iter()
        .map(|ability| RailEntry {
            slug: ability.slug.clone(),
            name: ability.name.clone(),
            image: ability.image.clone(),
            current: common.current_ability.as_deref() == Some(ability.slug.as_str()),
        })
        .collect();
    let ability_descriptions = common
        .abilities
        .iter()
        .filter_map(|ability| {
            ability.description.as_ref().filter(|text| !text.is_empty()).map(|text| (ability.name.clone(), text.clone()))
        })
        .collect();

    let page = EntityPage {
        layout: Layout::new(assets, &common.path, meta),
        kind: common.kind.as_str(),
        about: common.about.as_ref().map(|context| ContextView {
            context: context.clone(),
            name: common.name.clone(),
            header: true,
            history_href: None,
        }),
        name: common.name.clone(),
        image: common.image.clone(),
        accent: common.accent.clone(),
        label: common.label.clone(),
        label_suffix: common.label_suffix.clone(),
        parent: common.parent.clone(),
        listing_path,
        listing_label: listing_label.to_lowercase(),
        latest,
        summary,
        oldest,
        unknown: (unknown > 0).then(|| {
            format!(
                "{unknown} {} mention {} without a separate change count.",
                plural(unknown, "patch", "patches"),
                common.name
            )
        }),
        recent,
        recent_label,
        ability_descriptions,
        rail,
        spacious,
        patch_count: format!("{} {}", entries.len(), plural(entries.len(), "patch", "patches")),
        years,
        toc,
        method,
    };
    Ok((super::file_for(&common.path), page.render()?))
}

fn patch_view(entry: &Entry, subject: &Subject, common: &Common) -> PatchView {
    let groups = entry
        .groups
        .as_ref()
        .map(|groups| {
            groups
                .iter()
                .map(|group| GroupView {
                    ability: group.ability.clone(),
                    icon: group.icon.clone(),
                    bullets: group
                        .bullets
                        .iter()
                        .enumerate()
                        .map(|(index, text)| Bullet {
                            text: text.clone(),
                            previous: group.previous.get(index).cloned().flatten(),
                        })
                        .collect(),
                    context: group
                        .ability_slug
                        .as_ref()
                        .filter(|_| share::group_context_matches(group.ability.as_deref(), group.ability_slug.as_deref()))
                        .and_then(|slug| common.contexts.get(slug))
                        .map(|context| ContextView {
                            context: context.clone(),
                            name: group.ability.clone().unwrap_or_default(),
                            header: false,
                            history_href: group.ability_slug.as_ref().map(|slug| format!("/ability/{slug}")),
                        }),
                })
                .collect()
        })
        .unwrap_or_default();

    let mut band = Vec::new();
    let has_reading = entry.maxed_first.as_ref().is_some_and(|rows| !rows.is_empty())
        || entry.related.is_some()
        || entry.bought_by.as_ref().is_some_and(|rows| !rows.is_empty())
        || entry.buy_time.is_some();
    if let Some(stats) = entry.stats.filter(|_| has_reading) {
        let windows = ShareWindows::new(
            stats,
            &entry.changelog.pub_date,
            entry.impact.is_some_and(|impact| !impact.closed),
        );
        let id = &entry.changelog.id;
        if let Some(rows) = entry.maxed_first.clone().filter(|rows| !rows.is_empty()) {
            band.push(BandBlock::share("maxed-first", id, subject.name, rows, &windows, Vec::new()));
        }
        if let Some(related) = &entry.related {
            let notes = related
                .items
                .iter()
                .map(|(row, groups)| RelatedNote {
                    name: row.name.clone(),
                    image: row.image.clone(),
                    groups: groups.iter().map(|group| group.bullets.clone()).collect(),
                })
                .collect();
            let rows = related.items.iter().map(|(row, _)| row.clone()).collect();
            band.push(BandBlock::share("related", id, subject.name, rows, &windows, notes));
        }
        if let Some(rows) = entry.bought_by.clone().filter(|rows| !rows.is_empty()) {
            band.push(BandBlock::share("bought-by", id, subject.name, rows, &windows, Vec::new()));
        }
        if let Some(time) = entry.buy_time.clone() {
            band.push(BandBlock::BuyTime {
                lead: format!("Average game time {} buyers bought it, {}.", subject.name, windows.span(true)),
                time,
            });
        }
    }

    PatchView {
        id: entry.changelog.id.clone(),
        href: patch_href(&entry.changelog.slug, entry.groups.as_deref(), subject),
        datetime: iso_string(&entry.changelog.pub_date),
        date: format_date(&entry.changelog.pub_date),
        count_label: change_count_label(entry.change_count()),
        groups,
        band,
    }
}

fn hero_type_accent(hero: &Hero) -> String {
    hero.hero_type.as_ref().map(|kind| format!("var(--type-{kind})")).unwrap_or_else(|| "var(--signal)".into())
}

fn changed_ability_contexts(site: &Site, hero: &Hero) -> (HashMap<String, PageContext>, Option<i64>) {
    let changed: Vec<&str> = site
        .hero_history(hero.id)
        .iter()
        .flat_map(|link| link.change_groups.iter().flatten())
        .filter_map(|group| group.ability_slug.as_deref())
        .collect();
    let mut first_version = None;
    let mut contexts = HashMap::new();
    for ability in site.abilities(hero.id) {
        let Some(context) = &ability.context else { continue };
        if !changed.contains(&ability.slug.as_str()) {
            continue;
        }
        let context = PageContext::new(context);
        if contexts.is_empty() {
            first_version = Some(context.client_version);
        }
        contexts.insert(ability.slug.clone(), context);
    }
    (contexts, first_version.flatten())
}

fn hero_page(site: &Site, assets: &Assets, hero: &Hero) -> Result<Page> {
    let abilities: Vec<&Ability> = site.abilities(hero.id).to_vec();
    let lookup = previous_lookup(site, "hero", hero.id);
    let (contexts, first_context_version) = changed_ability_contexts(site, hero);
    let entries: Vec<Entry> = site
        .hero_history(hero.id)
        .iter()
        .filter_map(|link| {
            let changelog = site.changelog(&link.changelog_id)?;
            let groups = link
                .change_groups
                .as_ref()
                .map(|groups| hero_groups(groups, changelog, &abilities, &lookup, &hero.name));
            let changed: Vec<Option<&str>> = link
                .change_groups
                .iter()
                .flatten()
                .map(|group| group.ability_slug.as_deref())
                .collect();
            Some(Entry {
                changelog,
                impact: link.impact.as_ref(),
                stats: changelog.stats.as_ref(),
                related: related_changes(site, changelog, link.related_items.as_ref()),
                maxed_first: link
                    .ability_order
                    .as_ref()
                    .map(|order| share::maxed_first_rows(order, abilities.iter().copied(), &changed)),
                bought_by: None,
                buy_time: None,
                groups,
            })
        })
        .collect();
    let common = Common {
        kind: Kind::Hero,
        name: hero.name.clone(),
        image: Some(hero_card_image(hero)),
        accent: hero_type_accent(hero),
        label: hero.hero_type.as_ref().map(|kind| format!("{kind} hero")).unwrap_or_else(|| "Hero profile".into()),
        label_suffix: None,
        parent: None,
        path: format!("/hero/{}", hero.slug),
        title: format!("{} Deadlock Changes: Buffs & Nerfs | Deadlog", hero.name),
        description: format!(
            "Track every {} buff, nerf, and balance change across Deadlock patch notes in chronological order.",
            hero.name
        ),
        og_image: if hero.is_released {
            absolute_url(&format!("/assets/meta/hero/{}.png", hero.slug))
        } else {
            default_social_image()
        },
        indexable: hero.is_released,
        abilities,
        current_ability: None,
        contexts,
        first_context_version,
        about: None,
    };
    render_page(assets, common, entries)
}

fn item_page(site: &Site, assets: &Assets, item: &Item) -> Result<Page> {
    let lookup = previous_lookup(site, "item", item.id);
    let heroes: HashMap<i64, share::HeroIcon> = site
        .db
        .heroes
        .iter()
        .map(|hero| {
            (
                hero.id,
                share::HeroIcon {
                    name: hero.name.clone(),
                    slug: hero.slug.clone(),
                    image: crate::context::hero_icon_image(hero),
                },
            )
        })
        .collect();
    let entries: Vec<Entry> = site
        .item_history(item.id)
        .iter()
        .filter_map(|link| {
            let changelog = site.changelog(&link.changelog_id)?;
            let groups = link.change_groups.as_ref().map(|groups| {
                groups
                    .iter()
                    .enumerate()
                    .map(|(index, group)| Group {
                        ability: group.ability.clone(),
                        ability_slug: None,
                        icon: None,
                        previous: previous_for(&lookup, changelog, group.ability.as_deref(), &group.bullets, index, &item.name),
                        bullets: group.bullets.clone(),
                    })
                    .collect()
            });
            Some(Entry {
                changelog,
                impact: link.impact.as_ref(),
                stats: changelog.stats.as_ref(),
                related: None,
                maxed_first: None,
                bought_by: link.bought_by.as_ref().map(|bought| share::bought_by_rows(bought, &heroes)),
                buy_time: share::buy_time(link.impact.as_ref()),
                groups,
            })
        })
        .collect();
    let (category_label, accent) = match item.category.as_deref() {
        Some("weapon") => ("Weapon item", "var(--item-weapon)"),
        Some("vitality") => ("Vitality item", "var(--item-vitality)"),
        Some("spirit") => ("Spirit item", "var(--item-spirit)"),
        _ => ("Item", "var(--signal)"),
    };
    let common = Common {
        kind: Kind::Item,
        name: item.name.clone(),
        image: Some(item.image.clone()),
        accent: accent.into(),
        label: if item.is_released {
            category_label.into()
        } else {
            format!("Historical {}", category_label.to_lowercase())
        },
        label_suffix: item.tier.map(|tier| format!("/ Tier {tier}")),
        parent: None,
        path: format!("/item/{}", item.slug),
        title: format!("{} Deadlock Changes: Buffs & Nerfs | Deadlog", item.name),
        description: format!(
            "Track every {} buff, nerf, and balance change across Deadlock patch notes in chronological order.",
            item.name
        ),
        og_image: if item.is_released {
            absolute_url(&format!("/assets/meta/item/{}.png", item.slug))
        } else {
            default_social_image()
        },
        indexable: item.is_released,
        abilities: Vec::new(),
        current_ability: None,
        contexts: HashMap::new(),
        first_context_version: None,
        about: item.context.as_ref().map(PageContext::new),
    };
    render_page(assets, common, entries)
}

fn ability_page(site: &Site, assets: &Assets, ability: &Ability, hero: &Hero) -> Result<Page> {
    let abilities: Vec<&Ability> = site.abilities(hero.id).to_vec();
    let lookup = previous_lookup(site, "hero", hero.id);
    let entries: Vec<Entry> = site
        .hero_history(hero.id)
        .iter()
        .filter_map(|link| {
            let changelog = site.changelog(&link.changelog_id)?;
            let groups: Vec<Group> = link
                .change_groups
                .iter()
                .flatten()
                .enumerate()
                .filter(|(_, group)| group.ability_slug.as_deref() == Some(ability.slug.as_str()))
                .map(|(index, group)| Group {
                    ability: group.ability.clone(),
                    ability_slug: group.ability_slug.clone(),
                    icon: Some(ability.image.clone()),
                    previous: previous_for(&lookup, changelog, group.ability.as_deref(), &group.bullets, index, &hero.name),
                    bullets: group.bullets.clone(),
                })
                .collect();
            (!groups.is_empty()).then_some(Entry {
                changelog,
                groups: Some(groups),
                impact: None,
                stats: None,
                related: None,
                maxed_first: None,
                bought_by: None,
                buy_time: None,
            })
        })
        .collect();
    let common = Common {
        kind: Kind::Ability,
        name: ability.name.clone(),
        image: Some(ability.image.clone()),
        accent: hero_type_accent(hero),
        label: format!("{} ability", hero.name),
        label_suffix: None,
        parent: Some((hero.name.clone(), hero.slug.clone())),
        path: format!("/ability/{}", ability.slug),
        title: format!("{} Changes: {} | Deadlog", ability.name, hero.name),
        description: format!(
            "Track every {} buff, nerf, and balance change for {} across Deadlock patch notes in chronological order.",
            ability.name, hero.name
        ),
        og_image: absolute_url(&format!("/assets/meta/hero/{}.png", hero.slug)),
        indexable: true,
        abilities,
        current_ability: Some(ability.slug.clone()),
        contexts: HashMap::new(),
        first_context_version: None,
        about: ability.context.as_ref().map(PageContext::new),
    };
    render_page(assets, common, entries)
}

pub fn render(site: &Site, assets: &Assets) -> Result<Vec<Page>> {
    let heroes = site.renderable_heroes();
    let items = site.renderable_items();
    let abilities = site.released_abilities();
    let mut pages: Vec<Page> = heroes.par_iter().map(|hero| hero_page(site, assets, hero)).collect::<Result<_>>()?;
    pages.extend(items.par_iter().map(|item| item_page(site, assets, item)).collect::<Result<Vec<_>>>()?);
    pages.extend(
        abilities
            .par_iter()
            .map(|(ability, hero)| ability_page(site, assets, ability, hero))
            .collect::<Result<Vec<_>>>()?,
    );
    Ok(pages)
}
