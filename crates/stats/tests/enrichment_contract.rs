//! Pins what the recorded API responses under `lib/stats/src/fixtures/enrichment` show;
//! `lib/stats/README.md` explains each finding.

mod common;

use std::collections::HashMap;

use common::fixture;
use deadlog_stats::constants::DAY_S;
use serde_json::Value;

fn day_start(iso: &str) -> i64 {
    chrono::NaiveDate::parse_from_str(iso, "%Y-%m-%d").unwrap().and_hms_opt(0, 0, 0).unwrap().and_utc().timestamp()
}

fn list(value: &Value) -> &Vec<Value> {
    value.as_array().unwrap()
}

fn num(row: &Value, key: &str) -> i64 {
    row[key].as_i64().unwrap()
}

fn sum(rows: &[&Value]) -> i64 {
    rows.iter().map(|row| num(row, "matches")).sum()
}

struct Association {
    fixture: Value,
    heroes: Vec<i64>,
    items: Vec<i64>,
    to: i64,
    requested_days: Vec<i64>,
}

fn association() -> Association {
    let fixture = fixture("hero-item-association");
    let ids = |key: &str| list(&fixture["requested"][key]).iter().map(|id| id.as_i64().unwrap()).collect();
    let from = day_start(fixture["requested"]["from"].as_str().unwrap());
    let to = day_start(fixture["requested"]["to"].as_str().unwrap());
    Association {
        heroes: ids("heroes"),
        items: ids("items"),
        to,
        requested_days: vec![from, from + DAY_S, to],
        fixture,
    }
}

impl Association {
    fn find<'a>(rows: &'a Value, key: &str, id: i64, day: i64) -> Option<&'a Value> {
        list(rows).iter().find(|row| num(row, key) == id && num(row, "bucket") == day)
    }

    fn appearances(&self, hero: i64, day: i64) -> Option<&Value> {
        Self::find(&self.fixture["heroDaily"], "hero_id", hero, day)
    }

    fn buyers(&self, hero: i64, item: i64, day: i64) -> Option<&Value> {
        Self::find(&self.fixture["buyers"][item.to_string()], "hero_id", hero, day)
    }

    fn purchases(&self, hero: i64, item: i64, day: i64) -> Option<&Value> {
        Self::find(&self.fixture["itemDaily"][hero.to_string()], "item_id", item, day)
    }
}

fn matches_of(row: Option<&Value>) -> f64 {
    row.map_or(f64::NAN, |row| row["matches"].as_f64().unwrap())
}

#[test]
fn every_count_splits_into_wins_and_losses() {
    let a = association();
    let f = &a.fixture;
    let rows = list(&f["heroDaily"])
        .iter()
        .chain(f["buyers"].as_object().unwrap().values().flat_map(list))
        .chain(f["itemDaily"].as_object().unwrap().values().flat_map(list));
    for row in rows {
        assert_eq!(num(row, "wins") + num(row, "losses"), num(row, "matches"));
    }
}

#[test]
fn buyers_stay_within_item_stats_matches_and_both_within_appearances() {
    let a = association();
    for &hero in &a.heroes {
        for &item in &a.items {
            for &day in &a.requested_days {
                let bought = matches_of(a.buyers(hero, item, day));
                let rows = matches_of(a.purchases(hero, item, day));
                let played = matches_of(a.appearances(hero, day));
                assert!(bought <= rows);
                assert!(rows <= played);
                assert!(rows - bought <= rows * 0.02);
            }
        }
    }
}

#[test]
fn a_filtered_matches_per_bucket_is_buyer_slots_not_the_denominator() {
    let a = association();
    for &item in &a.items {
        for &day in &a.requested_days {
            let filtered =
                a.buyers(a.heroes[0], item, day).map_or(f64::NAN, |row| row["matches_per_bucket"].as_f64().unwrap());
            let unfiltered =
                a.appearances(a.heroes[0], day).map_or(f64::NAN, |row| row["matches_per_bucket"].as_f64().unwrap());
            assert!(filtered < unfiltered / 5.0);
        }
    }
}

#[test]
fn every_daily_response_over_returns_the_day_after_the_range() {
    let a = association();
    let extra = a.to + DAY_S;
    assert!(list(&a.fixture["heroDaily"]).iter().any(|row| num(row, "bucket") == extra));
    for hero in &a.heroes {
        assert!(list(&a.fixture["itemDaily"][hero.to_string()]).iter().any(|row| num(row, "bucket") == extra));
    }
}

#[test]
fn aggregate_buckets_fold_in_the_extra_day_where_it_cannot_be_trimmed() {
    let a = association();
    for &hero in &a.heroes {
        for &item in &a.items {
            let daily: Vec<&Value> = list(&a.fixture["itemDaily"][hero.to_string()])
                .iter()
                .filter(|row| num(row, "item_id") == item)
                .collect();
            let requested: Vec<&Value> = daily.iter().copied().filter(|row| num(row, "bucket") <= a.to).collect();
            let aggregate = list(&a.fixture["itemNoBucket"][hero.to_string()])
                .iter()
                .find(|row| num(row, "item_id") == item)
                .unwrap();
            let by_hero = list(&a.fixture["itemByHeroBucket"])
                .iter()
                .find(|row| num(row, "item_id") == item && num(row, "bucket") == hero)
                .unwrap();
            assert_eq!(num(aggregate, "matches"), sum(&daily));
            assert_eq!(num(by_hero, "matches"), sum(&daily));
            assert!(num(aggregate, "matches") > sum(&requested));
        }
    }
}

#[test]
fn several_include_item_ids_mean_all_of_them() {
    let a = association();
    for row in list(&a.fixture["buyersOfBoth"]) {
        for &item in &a.items {
            let single = matches_of(a.buyers(num(row, "hero_id"), item, num(row, "bucket")));
            assert!((num(row, "matches") as f64) < single);
        }
    }
}

fn key(row: &Value) -> String {
    format!("{}:{}", num(row, "item_id"), num(row, "bucket"))
}

#[test]
fn the_default_minimum_drops_whole_rows_under_20_and_leaves_the_rest() {
    let fixture = fixture("min-matches-rank-reset");
    let kept: HashMap<String, &Value> = list(&fixture["itemDefault"]).iter().map(|row| (key(row), row)).collect();
    let dropped: Vec<&Value> = list(&fixture["itemMin1"]).iter().filter(|row| !kept.contains_key(&key(row))).collect();
    assert!(!dropped.is_empty());
    for row in dropped {
        assert!(num(row, "matches") < 20);
    }
    for row in list(&fixture["itemMin1"]) {
        match kept.get(&key(row)) {
            Some(twin) => assert_eq!(*twin, row),
            None => assert!(num(row, "matches") < 20),
        }
    }
    assert!(list(&fixture["itemDefault"]).iter().all(|row| num(row, "matches") >= 20));
}

#[test]
fn the_default_minimum_removes_the_reset_day_though_matches_were_played() {
    let fixture = fixture("min-matches-rank-reset");
    let reset_day = day_start("2026-07-31");
    let has = |name: &str| list(&fixture[name]).iter().any(|row| num(row, "bucket") == reset_day);
    assert!(!has("itemDefault"));
    assert!(has("itemMin1"));
    assert!(has("hero"));
}
