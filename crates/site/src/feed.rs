//! The patch feed: the static index tiers the search island filters client-side, and
//! the summaries the prerendered feed pages show. `web/js/search.js` ports the same
//! assembly, and the predicate parity test holds the two together.

use std::collections::HashMap;

use anyhow::Result;
use deadlog_db::{Changelog, Hero, Item};
use deadlog_model::make_summary;
use serde_json::{Map, Value, json};

use crate::context::hero_icon_image;
use crate::{Output, Site};

pub const INITIAL_LOAD_COUNT: usize = 15;
pub const PAGE_SIZE: usize = 12;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum EntityKind {
    Hero,
    Item,
}

#[derive(Debug, Clone)]
pub struct FeedEntity {
    pub id: i64,
    pub kind: EntityKind,
    pub name: String,
    pub slug: String,
    pub src: String,
    pub hero_type: Option<String>,
    pub item_category: Option<String>,
}

#[derive(Debug, Clone)]
pub struct EntityRef {
    pub id: i64,
    pub change_count: Option<usize>,
}

#[derive(Debug, Clone)]
pub struct FeedRow<'a> {
    pub changelog: &'a Changelog,
    pub summary: String,
    pub heroes: Vec<EntityRef>,
    pub items: Vec<EntityRef>,
}

pub struct FeedIndex<'a> {
    pub rows: Vec<FeedRow<'a>>,
    pub heroes: Vec<FeedEntity>,
    pub items: Vec<FeedEntity>,
}

/// An icon in a feed card, like `ChangelogEntityIcon`.
#[derive(Debug, Clone)]
pub struct Icon {
    pub id: i64,
    pub kind: EntityKind,
    pub src: String,
    pub alt: String,
    pub slug: String,
    pub change_count: Option<usize>,
}

#[derive(Debug, Clone)]
pub struct PatchSummary<'a> {
    pub changelog: &'a Changelog,
    pub summary: String,
    pub heroes: Vec<Icon>,
    pub items: Vec<Icon>,
    pub hero_count: usize,
    pub item_count: usize,
}

fn hero_entity(hero: &Hero) -> FeedEntity {
    FeedEntity {
        id: hero.id,
        kind: EntityKind::Hero,
        name: hero.name.clone(),
        slug: hero.slug.clone(),
        src: hero_icon_image(hero),
        hero_type: hero.hero_type.clone(),
        item_category: None,
    }
}

fn item_entity(item: &Item) -> FeedEntity {
    FeedEntity {
        id: item.id,
        kind: EntityKind::Item,
        name: item.name.clone(),
        slug: item.slug.clone(),
        src: item.image.clone(),
        hero_type: None,
        item_category: item.category.clone(),
    }
}

pub fn index<'a>(site: &Site<'a>) -> FeedIndex<'a> {
    let rows = site
        .db
        .changelogs
        .iter()
        .map(|changelog| FeedRow {
            changelog,
            summary: make_summary(changelog.content_text.as_deref(), 140),
            heroes: site
                .heroes_in(&changelog.id)
                .iter()
                .map(|link| EntityRef {
                    id: link.hero_id,
                    change_count: link.change_groups.as_ref().map(|groups| groups.iter().map(|group| group.bullets.len()).sum()),
                })
                .collect(),
            items: site
                .items_in(&changelog.id)
                .iter()
                .map(|link| EntityRef {
                    id: link.item_id,
                    change_count: link.change_groups.as_ref().map(|groups| groups.iter().map(|group| group.bullets.len()).sum()),
                })
                .collect(),
        })
        .collect();

    let mut heroes: Vec<FeedEntity> = site
        .db
        .heroes
        .iter()
        .filter(|hero| site.db.hero_links.iter().any(|link| link.hero_id == hero.id))
        .map(hero_entity)
        .collect();
    heroes.sort_by(|a, b| a.name.cmp(&b.name));
    let mut items: Vec<FeedEntity> = site
        .db
        .items
        .iter()
        .filter(|item| site.db.item_links.iter().any(|link| link.item_id == item.id))
        .map(item_entity)
        .collect();
    items.sort_by(|a, b| a.name.cmp(&b.name));
    FeedIndex { rows, heroes, items }
}

/// `feedWindow`: the first page is larger, since it leads with the featured card.
pub fn window(page: usize) -> (usize, usize) {
    if page == 0 {
        (INITIAL_LOAD_COUNT, 0)
    } else {
        (PAGE_SIZE, INITIAL_LOAD_COUNT + (page - 1) * PAGE_SIZE)
    }
}

pub fn page_count(total: usize) -> usize {
    1 + total.saturating_sub(INITIAL_LOAD_COUNT).div_ceil(PAGE_SIZE)
}

fn icons(refs: &[EntityRef], entities: &HashMap<i64, &FeedEntity>) -> Vec<Icon> {
    let mut icons: Vec<Icon> = refs
        .iter()
        .filter_map(|reference| {
            let entity = entities.get(&reference.id)?;
            Some(Icon {
                id: entity.id,
                kind: entity.kind,
                src: entity.src.clone(),
                alt: entity.name.clone(),
                slug: entity.slug.clone(),
                change_count: reference.change_count,
            })
        })
        .collect();
    icons.sort_by(|a, b| a.alt.cmp(&b.alt));
    icons
}

/// The unfiltered feed's summaries for one page, as `unfilteredFeedPage` built them.
pub fn unfiltered_page<'a>(index: &FeedIndex<'a>, page: usize) -> (Vec<PatchSummary<'a>>, bool) {
    let heroes: HashMap<i64, &FeedEntity> = index.heroes.iter().map(|entity| (entity.id, entity)).collect();
    let items: HashMap<i64, &FeedEntity> = index.items.iter().map(|entity| (entity.id, entity)).collect();
    let (limit, offset) = window(page);
    let rows: Vec<&FeedRow> = index.rows.iter().skip(offset).take(limit).collect();
    let has_more = index.rows.len() > offset + limit;
    let summaries = rows
        .iter()
        .enumerate()
        .map(|(position, row)| {
            let hero_icons = icons(&row.heroes, &heroes);
            let item_icons = icons(&row.items, &items);
            let limit = if page == 0 && position == 0 { 14 } else { 6 };
            PatchSummary {
                changelog: row.changelog,
                summary: row.summary.clone(),
                hero_count: hero_icons.len(),
                item_count: item_icons.len(),
                heroes: hero_icons.into_iter().take(limit).collect(),
                items: item_icons.into_iter().take(limit).collect(),
            }
        })
        .collect();
    (summaries, has_more)
}

/// `JSON.stringify` order for a plain object: array-index keys ascending, then the rest
/// in insertion order.
fn js_object(entries: Vec<(String, Value)>) -> String {
    let is_index = |key: &str| {
        key.parse::<u32>().is_ok_and(|n| n != u32::MAX && n.to_string() == key)
    };
    let (mut indexed, named): (Vec<_>, Vec<_>) = entries.into_iter().partition(|(key, _)| is_index(key));
    indexed.sort_by_key(|(key, _)| key.parse::<u32>().unwrap_or_default());
    let body: Vec<String> = indexed
        .into_iter()
        .chain(named)
        .map(|(key, value)| format!("{}:{}", Value::from(key), value))
        .collect();
    format!("{{{}}}", body.join(","))
}

fn entity_json(entity: &FeedEntity) -> Value {
    let mut object = Map::new();
    object.insert("id".into(), json!(entity.id));
    object.insert("name".into(), json!(entity.name));
    object.insert("slug".into(), json!(entity.slug));
    object.insert("src".into(), json!(entity.src));
    match entity.kind {
        EntityKind::Hero => {
            object.insert("heroType".into(), json!(entity.hero_type));
            object.insert("type".into(), json!("hero"));
        }
        EntityKind::Item => {
            object.insert("type".into(), json!("item"));
            if let Some(category) = &entity.item_category {
                object.insert("itemCategory".into(), json!(category));
            }
        }
    }
    Value::Object(object)
}

fn refs_json(refs: &[EntityRef]) -> Value {
    Value::Array(refs.iter().map(|reference| json!({ "id": reference.id, "changeCount": reference.change_count })).collect())
}

pub fn index_json(index: &FeedIndex) -> String {
    let rows: Vec<Value> = index
        .rows
        .iter()
        .map(|row| {
            let changelog = row.changelog;
            json!({
                "id": changelog.id,
                "slug": changelog.slug,
                "title": changelog.title,
                "date": changelog.pub_date,
                "author": changelog.author,
                "authorImage": changelog.author_image,
                "previewImage": changelog.preview_image,
                "majorUpdate": changelog.major_update,
                "summary": row.summary,
                "heroes": refs_json(&row.heroes),
                "items": refs_json(&row.items),
            })
        })
        .collect();
    json!({
        "rows": rows,
        "heroes": index.heroes.iter().map(entity_json).collect::<Vec<_>>(),
        "items": index.items.iter().map(entity_json).collect::<Vec<_>>(),
    })
    .to_string()
}

fn raw_json(text: Option<&str>) -> Value {
    text.and_then(|text| serde_json::from_str(text).ok()).unwrap_or(Value::Null)
}

pub fn text_json(site: &Site) -> String {
    js_object(
        site.db
            .changelogs
            .iter()
            .map(|changelog| (changelog.id.clone(), json!(changelog.content_text.clone().unwrap_or_default())))
            .collect(),
    )
}

pub fn groups_json(site: &Site) -> String {
    let heroes = site.db.hero_links.iter().map(|link| {
        (format!("{}:hero:{}", link.changelog_id, link.hero_id), raw_json(link.change_groups_json.as_deref()))
    });
    let items = site.db.item_links.iter().map(|link| {
        (format!("{}:item:{}", link.changelog_id, link.item_id), raw_json(link.change_groups_json.as_deref()))
    });
    js_object(heroes.chain(items).collect())
}

/// Released heroes and items for the header's search options, the one list every page
/// used to carry in its hydration payload.
pub fn search_json(site: &Site) -> String {
    let heroes: Vec<Value> = site
        .released_heroes()
        .map(|hero| json!({ "id": hero.id, "name": hero.name, "slug": hero.slug, "image": crate::context::hero_card_image(hero) }))
        .collect();
    let items: Vec<Value> = site
        .released_items()
        .filter(|item| !item.name.trim().is_empty() && !item.name.contains('_'))
        .map(|item| json!({ "id": item.id, "name": item.name, "slug": item.slug, "image": item.image }))
        .collect();
    json!({ "heroes": heroes, "items": items }).to_string()
}

pub fn write_tiers(site: &Site, output: &mut Output) -> Result<()> {
    let index = index(site);
    output.add("feed-index.json", index_json(&index));
    output.add("feed-text.json", text_json(site));
    output.add("feed-groups.json", groups_json(site));
    output.add("search-entities.json", search_json(site));
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn js_key_order() {
        let text = js_object(vec![
            ("b".into(), json!(1)),
            ("10".into(), json!(2)),
            ("2".into(), json!(3)),
            ("a:1".into(), json!(4)),
        ]);
        assert_eq!(text, r#"{"2":3,"10":2,"b":1,"a:1":4}"#);
    }

    #[test]
    fn pages() {
        assert_eq!(page_count(115), 10);
        assert_eq!(page_count(15), 1);
        assert_eq!(window(2), (12, 27));
    }
}
