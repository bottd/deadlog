//! The search island filters the static index tiers in the browser; the pages it
//! replaced ran SQL. This runs `web/js/search.js` in QuickJS and holds its predicate to
//! the original SQL one over the same queries and windows `parity.test.ts` used, and
//! holds its unfiltered assembly to the pages `feed.rs` prerenders.

use std::path::{Path, PathBuf};

use deadlog_db::Snapshot;
use deadlog_model::{NameIndex, entity_name_aliases};
use deadlog_site::Site;
use deadlog_site::feed;
use rquickjs::{Context, Runtime};
use rusqlite::{Connection, params_from_iter};
use serde_json::Value;

fn root() -> PathBuf {
    Path::new(env!("CARGO_MANIFEST_DIR")).join("../..")
}

const QUERIES: [&str; 16] = [
    "",
    "hero=Abrams",
    "hero=Bebop,Abrams",
    "item=Decay",
    "hero=Bebop&item=Decay",
    "major=true",
    "q=cooldown",
    "q=Bebop",
    "q=COOLDOWN",
    "q=spirit",
    "q=%",
    "hero=NonExistentHero12345",
    "hero=Bebop,NonExistentHero12345",
    "hero=The Bebop",
    "hero=Abrams&major=true",
    "item=Decay&q=damage",
];

const PAGES: [(usize, usize); 5] = [(8, 0), (15, 0), (8, 15), (12, 27), (15, 100)];

fn decode(component: &str) -> String {
    let bytes = component.replace('+', " ").into_bytes();
    let mut out = Vec::with_capacity(bytes.len());
    let mut index = 0;
    while index < bytes.len() {
        if bytes[index] == b'%'
            && let Some(hex) = bytes.get(index + 1..index + 3).and_then(|hex| std::str::from_utf8(hex).ok())
            && let Ok(byte) = u8::from_str_radix(hex, 16)
        {
            out.push(byte);
            index += 3;
            continue;
        }
        out.push(bytes[index]);
        index += 1;
    }
    String::from_utf8_lossy(&out).into_owned()
}

fn query_pairs(query: &str) -> serde_json::Map<String, Value> {
    query
        .split('&')
        .filter(|pair| !pair.is_empty())
        .filter_map(|pair| {
            let (key, value) = pair.split_once('=')?;
            Some((decode(key), Value::from(decode(value))))
        })
        .collect()
}

struct Filters {
    hero: Vec<String>,
    item: Vec<String>,
    q: String,
    major: bool,
}

/// `parseFilters` from the old `$lib/queries/keys`.
fn parse_filters(pairs: &serde_json::Map<String, Value>) -> Filters {
    let list = |key: &str| {
        let mut seen = std::collections::HashSet::new();
        pairs
            .get(key)
            .and_then(Value::as_str)
            .unwrap_or_default()
            .split(',')
            .map(|name| name.split_whitespace().collect::<Vec<_>>().join(" "))
            .filter(|name| {
                let key = entity_name_aliases(name).last().cloned().unwrap_or_default();
                !key.is_empty() && seen.insert(key)
            })
            .collect()
    };
    Filters {
        hero: list("hero"),
        item: list("item"),
        q: pairs.get("q").and_then(Value::as_str).unwrap_or_default().trim().to_string(),
        major: pairs.get("major").and_then(Value::as_str) == Some("true"),
    }
}

fn resolve(names: &[String], table: &[(i64, String)]) -> Vec<i64> {
    let index = NameIndex::new(table, |(_, name)| name.as_str());
    let mut ids: Vec<i64> = Vec::new();
    for name in names {
        let id = index.find(name).map(|(id, _)| *id).unwrap_or(-1);
        if !ids.contains(&id) {
            ids.push(id);
        }
    }
    ids
}

/// `queryChangelogs`, the SQL the prerendered feed and its API used before the index.
fn via_sql(conn: &Connection, query: &str, limit: usize, offset: usize) -> (Vec<String>, bool) {
    let filters = parse_filters(&query_pairs(query));
    let names = |table: &str| -> Vec<(i64, String)> {
        let mut statement = conn.prepare(&format!("SELECT id, name FROM {table}")).unwrap();
        statement.query_map([], |row| Ok((row.get(0)?, row.get(1)?))).unwrap().map(Result::unwrap).collect()
    };
    let hero_ids = if filters.hero.is_empty() { Vec::new() } else { resolve(&filters.hero, &names("heroes")) };
    let item_ids = if filters.item.is_empty() { Vec::new() } else { resolve(&filters.item, &names("items")) };

    let mut conditions = Vec::new();
    let mut values: Vec<rusqlite::types::Value> = Vec::new();
    if !filters.q.is_empty() {
        let pattern = format!("%{}%", filters.q.replace('!', "!!").replace('%', "!%").replace('_', "!_"));
        conditions.push("(LOWER(title) LIKE LOWER(?) ESCAPE '!' OR LOWER(content_text) LIKE LOWER(?) ESCAPE '!')".to_string());
        values.push(pattern.clone().into());
        values.push(pattern.into());
    }
    if filters.major {
        conditions.push("major_update = 1".into());
    }
    for (ids, table, column) in [(&hero_ids, "changelog_heroes", "hero_id"), (&item_ids, "changelog_items", "item_id")] {
        if ids.is_empty() {
            continue;
        }
        let placeholders = vec!["?"; ids.len()].join(",");
        conditions.push(format!(
            "EXISTS (SELECT 1 FROM {table} WHERE {table}.changelog_id = changelogs.id AND {column} IN ({placeholders}) GROUP BY {table}.changelog_id HAVING COUNT(*) = {})",
            ids.len()
        ));
        values.extend(ids.iter().map(|id| rusqlite::types::Value::from(*id)));
    }
    let clause = if conditions.is_empty() { String::new() } else { format!("WHERE {}", conditions.join(" AND ")) };
    let sql = format!("SELECT id FROM changelogs {clause} ORDER BY pub_date DESC LIMIT {} OFFSET {offset}", limit + 1);
    let mut statement = conn.prepare(&sql).unwrap();
    let mut ids: Vec<String> =
        statement.query_map(params_from_iter(values), |row| row.get(0)).unwrap().map(Result::unwrap).collect();
    let more = ids.len() > limit;
    ids.truncate(limit);
    (ids, more)
}

fn island_source() -> String {
    let source = std::fs::read_to_string(root().join("web/js/search.js")).unwrap();
    source.replace("export async function", "async function").replace("export function", "function").replace("export const", "const")
}

#[test]
fn island_predicate_matches_sql_and_prerendered_pages() {
    let db_path = root().join("app/static/deadlog.db");
    if !db_path.exists() {
        eprintln!("skipping: {} not built", db_path.display());
        return;
    }
    let snapshot = Snapshot::open(&db_path).unwrap();
    let site = Site::new(&snapshot);
    let index = feed::index(&site);
    let conn = Connection::open(&db_path).unwrap();

    let runtime = Runtime::new().unwrap();
    let context = Context::full(&runtime).unwrap();
    context.with(|ctx| {
        ctx.eval::<(), _>(island_source()).unwrap();
        let tiers = format!(
            "globalThis.INDEX = {}; globalThis.TEXT = {}; globalThis.GROUPS = {};",
            feed::index_json(&index),
            feed::text_json(&site),
            feed::groups_json(&site)
        );
        ctx.eval::<(), _>(tiers).unwrap();

        for query in QUERIES {
            let pairs = Value::Object(query_pairs(query)).to_string();
            for (limit, offset) in PAGES {
                let script = format!(
                    "(() => {{
                        const pairs = {pairs};
                        const filters = parseFilters({{ get: (key) => pairs[key] ?? null }});
                        const scope = {{
                            heroIds: resolveEntityIds(filters.hero, INDEX.heroes),
                            itemIds: resolveEntityIds(filters.item, INDEX.items),
                            q: filters.q,
                            majorOnly: filters.major
                        }};
                        const page = queryFeed(INDEX, TEXT, scope, {{ limit: {limit}, offset: {offset} }});
                        const summaries = assembleSummaries(page.rows, INDEX, {{ text: TEXT, groups: GROUPS }}, {{ ...scope, isFirstPage: {offset} === 0 }});
                        if (summaries.length !== page.rows.length) throw new Error('assembly dropped rows');
                        return JSON.stringify({{ ids: page.rows.map((row) => row.id), more: page.hasMore }});
                    }})()"
                );
                let result: String = ctx.eval(script).unwrap_or_else(|error| panic!("{query}: {error:?}"));
                let result: Value = serde_json::from_str(&result).unwrap();
                let (ids, more) = via_sql(&conn, query, limit, offset);
                assert_eq!(result["ids"], serde_json::json!(ids), "{query:?} @{offset}/{limit} selects the same rows");
                assert_eq!(result["more"], Value::from(more), "{query:?} @{offset}/{limit} agrees on more");
            }
        }

        for page in 0..feed::page_count(index.rows.len()) {
            let (summaries, more) = feed::unfiltered_page(&index, page);
            let expected: Vec<Value> = summaries
                .iter()
                .map(|patch| {
                    serde_json::json!({
                        "id": patch.changelog.id,
                        "summary": patch.summary,
                        "heroes": patch.heroes.iter().map(|icon| &icon.alt).collect::<Vec<_>>(),
                        "items": patch.items.iter().map(|icon| &icon.alt).collect::<Vec<_>>(),
                        "counts": [patch.hero_count, patch.item_count],
                    })
                })
                .collect();
            let script = format!(
                "(() => {{
                    const window = feedWindow({page});
                    const scope = {{ heroIds: [], itemIds: [], q: '', majorOnly: false }};
                    const slice = queryFeed(INDEX, null, scope, window);
                    const summaries = assembleSummaries(slice.rows, INDEX, {{ text: null, groups: null }}, {{ isFirstPage: {page} === 0 }});
                    return JSON.stringify({{ more: slice.hasMore, cards: summaries.map((patch) => ({{
                        id: patch.id,
                        summary: patch.summary,
                        heroes: patch.icons.heroes.map((icon) => icon.alt),
                        items: patch.icons.items.map((icon) => icon.alt),
                        counts: [patch.counts.heroes, patch.counts.items]
                    }})) }});
                }})()"
            );
            let result: String = ctx.eval(script).unwrap();
            let result: Value = serde_json::from_str(&result).unwrap();
            assert_eq!(result["cards"], Value::Array(expected), "unfiltered page {page}");
            assert_eq!(result["more"], Value::from(more), "unfiltered page {page} agrees on more");
        }
    });
}
