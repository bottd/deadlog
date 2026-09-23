//! Builds `deadlog.db` from the `.mg` changelogs and the entity snapshot. The database
//! is a pure function of those two inputs (plus the big-patch-day list), and the
//! TypeScript build it replaces wrote the same bytes: JSON columns are spelled the way
//! `JSON.stringify` spells them and rows go in the order the site reads them back.

pub mod abilities;
pub mod context;
pub mod snapshot;

use std::collections::{HashMap, HashSet};
use std::path::{Path, PathBuf};

use anyhow::{Context, Result, bail};
use deadlog_changelog::{
    EntityBulletGroup, EntityChange, LinkedEvent, PROPERTY_EXTRACTION_VERSION, ParsedChangelog, ScopedBullet,
    changelog_source_url, link_property_changes, load_all_changelogs,
};
use deadlog_model::{
    AbilityOrder, AssetIdentity, BoughtBy, EntityImpact, EntityType, NameIndex, RelatedItems, js_iso_string,
    resolve_hero_ability_slug, to_js_json, to_slug,
};
use rusqlite::{Connection, ToSql, params_from_iter};
use serde::Serialize;

use abilities::{AbilitySlot, resolve_ability_slots};
use context::build_entity_context;
use snapshot::{EntitySnapshot, Hero, Item};

/// The DDL drizzle-kit materialised from `lib/db/src/schema.ts`, verbatim.
pub const SCHEMA: &str = include_str!("schema.sql");

pub struct BuildOptions<'a> {
    /// Where `deadlog.db` lands; it is built beside the live file and renamed over it.
    pub output_dir: PathBuf,
    pub changelogs_dir: PathBuf,
    pub snapshot: &'a EntitySnapshot,
    /// Timestamps from `GET /v1/patches/big-days`; a changelog published on one of those
    /// days is a major update.
    pub big_days: &'a [String],
    /// The `built_at` metadata row, an ISO timestamp.
    pub built_at: String,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct BuildResult {
    pub path: PathBuf,
    pub patch_count: usize,
    pub hero_matches: usize,
    pub item_matches: usize,
}

struct EntityRoutes {
    heroes: HashSet<String>,
    items: HashSet<String>,
    abilities: HashSet<String>,
}

/// Every `[[/hero/…]]` and `[[/item/…]]` link must name a real page and carry a label.
fn assert_entity_links(content: &str, filepath: &Path, routes: &EntityRoutes) -> Result<()> {
    let base = url::Url::parse("https://deadlog.test").expect("valid base");
    let mut search = 0;
    while let Some(found) = content[search..].find("[[/") {
        let start = search + found;
        search = start + 1;
        let rest = &content[start + 2..];
        let Some(kind) = ["/hero/", "/item/"].into_iter().find(|kind| rest.starts_with(kind)) else { continue };
        let body_len = rest[kind.len()..].find(']').unwrap_or(rest.len() - kind.len());
        if body_len == 0 || !rest[kind.len() + body_len..].starts_with("]]") {
            continue;
        }
        let target = &rest[..kind.len() + body_len];
        let label_start = start + 2 + target.len() + 2;

        let url = base.join(target).ok();
        let valid = url.as_ref().is_some_and(|url| {
            let segments: Vec<&str> = url.path().split('/').collect();
            let (kind, slug) = (segments.get(1).copied().unwrap_or(""), segments.get(2).copied().unwrap_or(""));
            let extra = segments.get(3).is_some_and(|extra| !extra.is_empty());
            let query: Vec<(String, String)> = url.query_pairs().into_owned().collect();
            let ability = query.iter().find(|(key, _)| key == "ability").map(|(_, value)| value.as_str());
            let fragment = url.fragment().is_some_and(|fragment| !fragment.is_empty());
            !extra
                && !fragment
                && match kind {
                    "hero" => {
                        routes.heroes.contains(slug)
                            && (query.is_empty()
                                || (query.len() == 1
                                    && query[0].0 == "ability"
                                    && ability.is_some_and(|ability| routes.abilities.contains(&format!("{slug}:{ability}")))))
                    }
                    _ => kind == "item" && routes.items.contains(slug) && query.is_empty(),
                }
        });
        if !valid || !content[label_start..].starts_with("((") {
            bail!("Invalid entity link {target} in {}", filepath.display());
        }
        search = label_start;
    }
    Ok(())
}

fn item_priority(item: &Item) -> u8 {
    if item.shopable == Some(true) && item.disabled != Some(true) {
        3
    } else if item.kind == "upgrade" {
        2
    } else {
        1
    }
}

/// Items that get a row: imaged, one per slug. Ties in priority keep snapshot order,
/// which is what decides who owns a colliding slug (`melee`, `patron`, …).
fn items_to_insert(items: &[Item]) -> Vec<&Item> {
    let mut ranked: Vec<&Item> = items.iter().filter(|item| !item.image().is_empty()).collect();
    ranked.sort_by(|a, b| item_priority(b).cmp(&item_priority(a)));
    let mut seen = HashSet::new();
    ranked.into_iter().filter(|item| {
        let slug = to_slug(&item.name);
        !slug.is_empty() && seen.insert(slug)
    })
    .collect()
}

const HERO_TYPES: [&str; 4] = ["marksman", "mystic", "brawler", "assassin"];

fn json<T: Serialize>(value: &T) -> Result<String> {
    Ok(to_js_json(value)?)
}

fn optional_json<T: Serialize>(value: Option<&T>) -> Result<Option<String>> {
    value.map(json).transpose()
}

/// `INSERT … VALUES (…), (…)` in batches small enough for SQLite's parameter limit.
fn insert_rows(
    conn: &Connection,
    table: &str,
    columns: &[&str],
    rows: &[Vec<Box<dyn ToSql + '_>>],
    ignore_conflicts: bool,
) -> Result<()> {
    let quoted: Vec<String> = columns.iter().map(|column| format!("\"{column}\"")).collect();
    let placeholders = format!("({})", vec!["?"; columns.len()].join(", "));
    for batch in rows.chunks(50) {
        let values = vec![placeholders.as_str(); batch.len()].join(", ");
        let conflict = if ignore_conflicts { " on conflict do nothing" } else { "" };
        let sql = format!("insert into \"{table}\" ({}) values {values}{conflict}", quoted.join(", "));
        let params = batch.iter().flat_map(|row| row.iter().map(|value| value.as_ref()));
        conn.execute(&sql, params_from_iter(params)).with_context(|| format!("inserting into {table}"))?;
    }
    Ok(())
}

type Row<'a> = Vec<Box<dyn ToSql + 'a>>;

macro_rules! row {
    ($($value:expr),* $(,)?) => { vec![$(Box::new($value) as Box<dyn ToSql>),*] };
}

type Index = NameIndex<(String, i64)>;

/// First entity wins each alias, as `indexEntityNames` did.
fn name_index<'a>(entities: impl Iterator<Item = (&'a str, i64)>) -> Index {
    let entities: Vec<(String, i64)> = entities.map(|(name, id)| (name.to_string(), id)).collect();
    NameIndex::new(&entities, |(name, _)| name)
}

/// `None` groups: the entity is named in the patch but heads no section of its own.
type EntityMatch = Option<Vec<EntityBulletGroup>>;

fn collect_entity_matches(
    names: &[String],
    changes: &[EntityChange],
    kind: EntityType,
    index: &Index,
) -> Vec<(i64, EntityMatch)> {
    let mut matches: Vec<(i64, EntityMatch)> = Vec::new();
    for name in names {
        if let Some(&id) = index.find(name).map(|(_, id)| id)
            && !matches.iter().any(|(existing, _)| *existing == id)
        {
            matches.push((id, None));
        }
    }
    for change in changes.iter().filter(|change| change.kind == kind) {
        let Some(&id) = index.find(&change.name).map(|(_, id)| id) else { continue };
        // An entity can head more than one section in a patch; groups concatenate.
        match matches.iter_mut().find(|(existing, _)| *existing == id) {
            Some((_, groups)) => groups.get_or_insert_with(Vec::new).extend(change.groups.iter().cloned()),
            None => matches.push((id, Some(change.groups.clone()))),
        }
    }
    matches
}

fn collect_enrichment<T: Clone>(
    changes: &[EntityChange],
    kind: EntityType,
    index: &Index,
    field: impl Fn(&EntityChange) -> Option<&T>,
) -> HashMap<i64, T> {
    let mut recorded = HashMap::new();
    for change in changes.iter().filter(|change| change.kind == kind) {
        let Some(value) = field(change) else { continue };
        if let Some(&id) = index.find(&change.name).map(|(_, id)| id) {
            recorded.entry(id).or_insert_with(|| value.clone());
        }
    }
    recorded
}

#[derive(Serialize)]
struct HeroGroup<'a> {
    ability: &'a Option<String>,
    bullets: &'a [String],
    #[serde(rename = "abilitySlug")]
    ability_slug: Option<String>,
}

#[derive(Serialize)]
struct ItemGroup<'a> {
    ability: &'a Option<String>,
    bullets: &'a [String],
}

struct HeroLink {
    changelog_id: String,
    hero_id: i64,
    groups: Option<Vec<(EntityBulletGroup, Option<String>)>>,
    impact: Option<EntityImpact>,
    related: Option<RelatedItems>,
    order: Option<AbilityOrder>,
}

struct ItemLink {
    changelog_id: String,
    item_id: i64,
    groups: Option<Vec<EntityBulletGroup>>,
    impact: Option<EntityImpact>,
    bought: Option<BoughtBy>,
}

struct Patch<'a> {
    id: String,
    changelog: &'a ParsedChangelog,
    pub_date: String,
    major_update: bool,
    source_url: String,
}

fn insert_heroes(conn: &Connection, heroes: &[Hero]) -> Result<()> {
    let rows = heroes
        .iter()
        .map(|hero| {
            let hero_type = hero.hero_type.clone().filter(|kind| HERO_TYPES.contains(&kind.as_str()));
            Ok(row![
                hero.id,
                hero.name.clone(),
                to_slug(&hero.name),
                hero.class_name.clone(),
                hero_type,
                json(&hero.images)?,
                hero.is_released()
            ])
        })
        .collect::<Result<Vec<Row>>>()?;
    insert_rows(conn, "heroes", &["id", "name", "slug", "class_name", "hero_type", "images", "is_released"], &rows, true)
}

fn insert_abilities(conn: &Connection, slots: &[&AbilitySlot]) -> Result<()> {
    let rows = slots
        .iter()
        .map(|slot| {
            if !(1..=4).contains(&slot.position) || slot.image.is_empty() {
                bail!("{}: invalid ability slot {}", slot.name, slot.position);
            }
            Ok(row![
                slot.hero_id,
                slot.position,
                slot.name.clone(),
                slot.slug.clone(),
                slot.image.clone(),
                slot.description.clone(),
                slot.asset_id,
                slot.class_name.clone(),
                optional_json(slot.context.as_ref())?
            ])
        })
        .collect::<Result<Vec<Row>>>()?;
    insert_rows(
        conn,
        "hero_abilities",
        &["hero_id", "position", "name", "slug", "image", "description", "asset_id", "class_name", "context"],
        &rows,
        false,
    )
}

fn insert_items(conn: &Connection, items: &[&Item], snapshot: &EntitySnapshot) -> Result<()> {
    let rows = items
        .iter()
        .map(|item| {
            let context = (item.kind == "upgrade")
                .then(|| {
                    let identity = AssetIdentity {
                        asset_id: item.id,
                        class_name: item.class_name.clone(),
                        kind: item.kind.clone(),
                        hero_id: None,
                        slot: None,
                    };
                    build_entity_context(identity, item, snapshot.provenance.as_ref())
                })
                .flatten();
            Ok(row![
                item.id,
                item.name.clone(),
                to_slug(&item.name),
                item.class_name.clone(),
                item.kind.clone(),
                item.item_slot_type.value().cloned(),
                item.item_tier.value().copied(),
                item.image().to_string(),
                item.is_released(),
                optional_json(context.as_ref())?
            ])
        })
        .collect::<Result<Vec<Row>>>()?;
    insert_rows(
        conn,
        "items",
        &["id", "name", "slug", "class_name", "type", "category", "tier", "image", "is_released", "context"],
        &rows,
        true,
    )
}

fn scoped(
    kind: EntityType,
    changelog_id: &str,
    published_at: &str,
    entity_id: i64,
    groups: &[(EntityBulletGroup, Option<String>)],
) -> Vec<ScopedBullet> {
    groups
        .iter()
        .enumerate()
        .flat_map(|(group_index, (group, ability_slug))| {
            group.bullets.iter().enumerate().map(move |(bullet_index, text)| ScopedBullet {
                patch_id: changelog_id.to_string(),
                published_at: published_at.to_string(),
                entity_type: kind,
                entity_id,
                ability: group.ability.clone(),
                ability_slug: ability_slug.clone(),
                group_index,
                bullet_index,
                text: text.clone(),
            })
        })
        .collect()
}

fn property_row(event: &LinkedEvent) -> Row<'static> {
    let previous = event.previous.as_ref();
    row![
        event.patch_id.clone(),
        event.entity_type.as_str(),
        event.entity_id,
        event.ability_slug.clone(),
        event.group_index as i64,
        event.bullet_index as i64,
        event.event.property,
        event.event.qualifier.clone(),
        event.event.old.text.clone(),
        event.event.new.text.clone(),
        event.digest.clone(),
        PROPERTY_EXTRACTION_VERSION,
        previous.map(|previous| previous.patch_id.clone()),
        previous.map(|previous| previous.old.clone()),
        previous.map(|previous| previous.new.clone())
    ]
}

fn check_built(conn: &Connection, patch_count: usize) -> Result<()> {
    for (failure, query) in [
        ("foreign key violations", "SELECT \"table\", rowid, parent FROM pragma_foreign_key_check".to_string()),
        (
            "aliases shadowing a live slug",
            "SELECT a.slug FROM changelog_aliases a JOIN changelogs c ON c.slug = a.slug".to_string(),
        ),
        ("changelogs dropped on conflict", format!("SELECT 1 WHERE (SELECT COUNT(*) FROM changelogs) != {patch_count}")),
    ] {
        let mut statement = conn.prepare(&query)?;
        let columns = statement.column_count();
        let rows: Vec<String> = statement
            .query_map([], |row| {
                (0..columns)
                    .map(|index| row.get::<_, rusqlite::types::Value>(index).map(|value| format!("{value:?}")))
                    .collect::<rusqlite::Result<Vec<_>>>()
                    .map(|values| values.join(", "))
            })?
            .take(5)
            .collect::<rusqlite::Result<_>>()?;
        if !rows.is_empty() {
            bail!("Built database has {failure}: {rows:?}");
        }
    }
    Ok(())
}

/// Builds `<output_dir>/deadlog.db` (the `deadlog db` subcommand and the second step of
/// `deadlog scrape`). The file is written as `deadlog.db.building` and renamed over the
/// live one only after it passes its integrity checks, so a parse or insert failure
/// cannot destroy the last good database.
pub fn build_database(options: &BuildOptions) -> Result<BuildResult> {
    let BuildOptions { output_dir, changelogs_dir, snapshot, big_days, built_at } = options;
    std::fs::create_dir_all(output_dir)?;
    let target = output_dir.join("deadlog.db");
    let building = output_dir.join("deadlog.db.building");
    if building.exists() {
        std::fs::remove_file(&building)?;
    }

    let big_day_dates: HashSet<&str> = big_days.iter().map(|day| day.split('T').next().unwrap_or(day)).collect();
    let heroes = &snapshot.heroes;
    println!("📅 Found {} big patch days", big_day_dates.len());
    println!("🦸 Found {} heroes", heroes.len());
    println!("⚔️  Found {} items", snapshot.items.len());

    let mut conn = Connection::open(&building).with_context(|| format!("creating {}", building.display()))?;
    conn.execute_batch(SCHEMA)?;
    let tx = conn.transaction()?;

    insert_heroes(&tx, heroes)?;
    let ability_slots = resolve_ability_slots(heroes, &snapshot.items, snapshot.provenance.as_ref())?;
    let slot_rows: Vec<&AbilitySlot> =
        heroes.iter().filter_map(|hero| ability_slots.get(&hero.id)).flatten().collect();
    insert_abilities(&tx, &slot_rows)?;

    let items = items_to_insert(&snapshot.items);
    insert_items(&tx, &items, snapshot)?;

    let hero_index = name_index(heroes.iter().map(|hero| (hero.name.as_str(), hero.id)));
    let item_index = name_index(items.iter().filter(|item| item.kind == "upgrade").map(|item| (item.name.as_str(), item.id)));

    let changelogs = load_all_changelogs(changelogs_dir)?;
    let patch_count = changelogs.len();
    println!("  ✅ Found {patch_count} unique changelogs");
    let routes = EntityRoutes {
        heroes: heroes.iter().map(|hero| to_slug(&hero.name)).collect(),
        items: items.iter().filter(|item| item.kind != "ability").map(|item| to_slug(&item.name)).collect(),
        abilities: heroes
            .iter()
            .flat_map(|hero| {
                let hero_slug = to_slug(&hero.name);
                ability_slots.get(&hero.id).into_iter().flatten().map(move |slot| format!("{hero_slug}:{}", slot.slug))
            })
            .collect(),
    };
    for changelog in &changelogs {
        let content = std::fs::read_to_string(&changelog.filepath)?;
        assert_entity_links(&content, &changelog.filepath, &routes)?;
    }

    let mut patches = Vec::new();
    let mut aliases = Vec::new();
    let mut hero_links = Vec::new();
    let mut item_links = Vec::new();
    for changelog in &changelogs {
        let metadata = &changelog.metadata;
        let date_only = metadata.published.split('T').next().unwrap_or_default();
        let id = metadata.thread_id.clone().or_else(|| metadata.steam_gid.clone()).unwrap_or_else(|| changelog.slug.clone());
        let changes = &changelog.entity_changes;
        patches.push(Patch {
            id: id.clone(),
            changelog,
            pub_date: js_iso_string(&metadata.published).with_context(|| format!("{}: invalid published date", changelog.slug))?,
            major_update: big_day_dates.contains(date_only) || metadata.major_update,
            source_url: changelog_source_url(metadata)?,
        });
        aliases.extend(changelog.aliases.iter().filter(|alias| **alias != changelog.slug).map(|alias| (alias.clone(), id.clone())));

        let hero_impact = collect_enrichment(changes, EntityType::Hero, &hero_index, |c| c.enrichment.impact.as_ref());
        let item_impact = collect_enrichment(changes, EntityType::Item, &item_index, |c| c.enrichment.impact.as_ref());
        let hero_related = collect_enrichment(changes, EntityType::Hero, &hero_index, |c| c.enrichment.related.as_ref());
        let hero_order = collect_enrichment(changes, EntityType::Hero, &hero_index, |c| c.enrichment.order.as_ref());
        let item_bought = collect_enrichment(changes, EntityType::Item, &item_index, |c| c.enrichment.bought.as_ref());

        for (hero_id, groups) in collect_entity_matches(&changelog.entities.heroes, changes, EntityType::Hero, &hero_index) {
            let slugs: Vec<&str> = ability_slots.get(&hero_id).into_iter().flatten().map(|slot| slot.slug.as_str()).collect();
            let groups = groups.map(|groups| {
                groups
                    .into_iter()
                    .map(|group| {
                        let slug = group.ability.as_deref().and_then(|ability| resolve_hero_ability_slug(ability, slugs.iter().copied()));
                        (group, slug)
                    })
                    .collect()
            });
            hero_links.push(HeroLink {
                changelog_id: id.clone(),
                hero_id,
                groups,
                impact: hero_impact.get(&hero_id).cloned(),
                related: hero_related.get(&hero_id).cloned(),
                order: hero_order.get(&hero_id).cloned(),
            });
        }
        for (item_id, groups) in collect_entity_matches(&changelog.entities.items, changes, EntityType::Item, &item_index) {
            item_links.push(ItemLink {
                changelog_id: id.clone(),
                item_id,
                groups,
                impact: item_impact.get(&item_id).cloned(),
                bought: item_bought.get(&item_id).cloned(),
            });
        }
    }

    let patch_rows = patches
        .iter()
        .map(|patch| {
            let (changelog, metadata) = (patch.changelog, &patch.changelog.metadata);
            Ok(row![
                patch.id.clone(),
                metadata.title.clone(),
                changelog.slug.clone(),
                patch.source_url.clone(),
                metadata.author.clone(),
                metadata.author_image.clone().unwrap_or_default(),
                changelog.preview_image.clone(),
                patch.pub_date.clone(),
                patch.major_update,
                changelog.plain_text.clone(),
                optional_json(changelog.stats.as_ref())?
            ])
        })
        .collect::<Result<Vec<Row>>>()?;
    insert_rows(
        &tx,
        "changelogs",
        &[
            "id", "title", "slug", "source_url", "author", "author_image", "preview_image", "pub_date", "major_update",
            "content_text", "stats",
        ],
        &patch_rows,
        true,
    )?;
    let alias_rows: Vec<Row> = aliases.iter().map(|(slug, id)| row![slug.clone(), id.clone()]).collect();
    insert_rows(&tx, "changelog_aliases", &["slug", "changelog_id"], &alias_rows, false)?;

    let hero_rows = hero_links
        .iter()
        .map(|link| {
            let groups: Option<Vec<HeroGroup>> = link.groups.as_ref().map(|groups| {
                groups
                    .iter()
                    .map(|(group, slug)| HeroGroup { ability: &group.ability, bullets: &group.bullets, ability_slug: slug.clone() })
                    .collect()
            });
            Ok(row![
                link.changelog_id.clone(),
                link.hero_id,
                optional_json(groups.as_ref())?,
                optional_json(link.impact.as_ref())?,
                optional_json(link.related.as_ref())?,
                optional_json(link.order.as_ref())?
            ])
        })
        .collect::<Result<Vec<Row>>>()?;
    insert_rows(
        &tx,
        "changelog_heroes",
        &["changelog_id", "hero_id", "change_groups", "impact", "related_items", "ability_order"],
        &hero_rows,
        true,
    )?;
    let item_rows = item_links
        .iter()
        .map(|link| {
            let groups: Option<Vec<ItemGroup>> = link
                .groups
                .as_ref()
                .map(|groups| groups.iter().map(|group| ItemGroup { ability: &group.ability, bullets: &group.bullets }).collect());
            Ok(row![
                link.changelog_id.clone(),
                link.item_id,
                optional_json(groups.as_ref())?,
                optional_json(link.impact.as_ref())?,
                optional_json(link.bought.as_ref())?
            ])
        })
        .collect::<Result<Vec<Row>>>()?;
    insert_rows(&tx, "changelog_items", &["changelog_id", "item_id", "change_groups", "impact", "bought_by"], &item_rows, true)?;

    let published_at: HashMap<&str, &str> = patches.iter().map(|patch| (patch.id.as_str(), patch.pub_date.as_str())).collect();
    let published = |id: &str| published_at.get(id).copied().unwrap_or_default();
    let mut bullets = Vec::new();
    let mut seen = HashSet::new();
    for link in &hero_links {
        if seen.insert(("hero", link.changelog_id.clone(), link.hero_id)) {
            let groups = link.groups.as_deref().unwrap_or_default();
            bullets.extend(scoped(EntityType::Hero, &link.changelog_id, published(&link.changelog_id), link.hero_id, groups));
        }
    }
    for link in &item_links {
        if seen.insert(("item", link.changelog_id.clone(), link.item_id)) {
            let groups: Vec<(EntityBulletGroup, Option<String>)> =
                link.groups.iter().flatten().map(|group| (group.clone(), None)).collect();
            bullets.extend(scoped(EntityType::Item, &link.changelog_id, published(&link.changelog_id), link.item_id, &groups));
        }
    }
    let events = link_property_changes(&bullets);
    let property_rows: Vec<Row> = events.iter().map(property_row).collect();
    insert_rows(
        &tx,
        "property_events",
        &[
            "changelog_id", "entity_type", "entity_id", "ability_slug", "group_index", "bullet_index", "property",
            "qualifier", "old_value", "new_value", "digest", "extraction_version", "previous_changelog_id", "previous_old",
            "previous_new",
        ],
        &property_rows,
        false,
    )?;
    let linked = events.iter().filter(|event| event.previous.is_some()).count();
    println!("  🔗 {} property changes, {linked} linked to a previous one", events.len());
    println!("  ✅ Inserted {patch_count} changelogs");
    println!("  🦸 {} hero references", hero_links.len());
    println!("  ⚔️  {} item references", item_links.len());

    let mut metadata: Vec<Row> = vec![row!["built_at", built_at.clone()], row!["patch_count", patch_count.to_string()]];
    if let Some(provenance) = &snapshot.provenance {
        metadata.push(row!["asset_client_version", provenance.client_version.to_string()]);
        metadata.push(row!["asset_language", provenance.language.clone()]);
        metadata.push(row!["asset_collected_at", provenance.collected_at.clone()]);
    }
    insert_rows(&tx, "metadata", &["key", "value"], &metadata, false)?;
    tx.commit()?;

    check_built(&conn, patch_count)?;
    drop(conn);
    std::fs::rename(&building, &target)?;

    Ok(BuildResult {
        path: target,
        patch_count,
        hero_matches: hero_links.len(),
        item_matches: item_links.len(),
    })
}
