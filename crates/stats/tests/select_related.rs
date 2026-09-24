mod common;

use std::collections::HashMap;

use common::fixture;
use deadlog_model::{BoughtBy, BoughtByHero, RelatedItem, RelatedItems};
use deadlog_stats::select_related::{
    RelatedInput, WindowSeries, is_current_related, select_bought_by, select_related_items,
};
use deadlog_stats::types::DailyRow;
use serde_json::Value;

const TOXIC: i64 = 3696726732;
const RITE: i64 = 1710079648;

fn day(iso: &str) -> i64 {
    chrono::NaiveDate::parse_from_str(iso, "%Y-%m-%d").unwrap().and_hms_opt(0, 0, 0).unwrap().and_utc().timestamp()
}

fn days() -> Vec<i64> {
    vec![day("2026-09-13"), day("2026-09-14"), day("2026-09-15")]
}

fn rows(list: &Value) -> Vec<DailyRow> {
    list.as_array()
        .unwrap()
        .iter()
        .map(|row| {
            DailyRow::new(
                row["hero_id"].as_i64().unwrap(),
                row["bucket"].as_i64().unwrap(),
                row["wins"].as_f64().unwrap(),
                row["matches"].as_f64().unwrap(),
            )
        })
        .collect()
}

fn recorded(days: Vec<i64>) -> WindowSeries {
    let fixture = fixture("hero-item-association");
    WindowSeries {
        days,
        hero_rows: rows(&fixture["heroDaily"]),
        buyers: [
            (TOXIC, rows(&fixture["buyers"][TOXIC.to_string()])),
            (RITE, rows(&fixture["buyers"][RITE.to_string()])),
        ]
        .into(),
    }
}

fn hero(matches: f64, at: i64) -> DailyRow {
    DailyRow::new(1, at, 0.0, matches)
}

fn select(series: &WindowSeries, hero_id: i64, candidates: &[i64]) -> RelatedItems {
    select_related_items(RelatedInput { series, hero_id, candidates, after: None }).unwrap()
}

fn item(id: i64, buyers: f64) -> RelatedItem {
    RelatedItem { id, buyers, after: None }
}

#[test]
fn buyers_divide_by_the_hero_appearances_of_the_same_days() {
    let result = select(&recorded(days()), 1, &[TOXIC, RITE]);
    assert_eq!(
        result,
        RelatedItems {
            method_version: 2,
            status: "complete".into(),
            appearances: 20_988.0 + 17_490.0 + 16_590.0,
            after_appearances: None,
            candidates: vec![RITE, TOXIC],
            items: vec![item(TOXIC, 13_941.0 + 11_405.0 + 10_904.0), item(RITE, 781.0 + 664.0 + 654.0)],
        }
    );
}

#[test]
fn the_over_returned_day_is_ignored() {
    let result = select(&recorded(days()[..2].to_vec()), 13, &[TOXIC]);
    assert_eq!(result.appearances, 20_428.0 + 17_482.0);
    assert_eq!(result.items, vec![item(TOXIC, 2768.0 + 2269.0)]);
}

fn single(heroes: Vec<DailyRow>, buyers: &[(i64, Vec<DailyRow>)], days: Vec<i64>) -> WindowSeries {
    WindowSeries { days, hero_rows: heroes, buyers: buyers.iter().cloned().collect() }
}

#[test]
fn an_empty_window_needs_no_data() {
    let result = select(&WindowSeries::default(), 1, &[5]);
    assert_eq!((result.status.as_str(), result.appearances), ("no-window", 0.0));
    assert!(result.items.is_empty());
}

#[test]
fn it_stops_at_999_appearances_and_proceeds_at_1000() {
    let d = days()[0];
    let at = |matches: f64| select(&single(vec![hero(matches, d)], &[(5, vec![hero(500.0, d)])], vec![d]), 1, &[5]);
    let short = at(999.0);
    assert_eq!(short.status, "insufficient-sample");
    assert!(short.items.is_empty());
    let enough = at(1000.0);
    assert_eq!(enough.status, "complete");
    assert_eq!(enough.items, vec![item(5, 500.0)]);
}

#[test]
fn a_candidate_under_100_buyers_is_dropped_and_an_empty_result_kept() {
    let d = days()[0];
    let result = select(
        &single(vec![hero(5000.0, d)], &[(5, vec![hero(99.0, d)]), (6, vec![hero(100.0, d)])], vec![d]),
        1,
        &[5, 6],
    );
    assert_eq!(result.items, vec![item(6, 100.0)]);
    let empty = select(&single(vec![hero(5000.0, d)], &[(5, vec![hero(99.0, d)])], vec![d]), 1, &[5]);
    assert_eq!(empty.status, "complete");
    assert!(empty.items.is_empty());
}

#[test]
fn three_are_taken_by_share_ties_broken_by_id() {
    let d = days()[0];
    let buyers =
        [(9, vec![hero(300.0, d)]), (4, vec![hero(300.0, d)]), (7, vec![hero(900.0, d)]), (2, vec![hero(200.0, d)])];
    let result = select(&single(vec![hero(5000.0, d)], &buyers, vec![d]), 1, &[9, 4, 7, 2]);
    assert_eq!(result.items.iter().map(|item| item.id).collect::<Vec<_>>(), vec![7, 4, 9]);
    assert_eq!(result.candidates, vec![2, 4, 7, 9]);
}

#[test]
fn a_candidate_with_more_buyers_than_appearances_on_a_day_is_rejected() {
    let [d0, d1, _] = days()[..] else { unreachable!() };
    let series = single(
        vec![hero(3000.0, d0), hero(3000.0, d1)],
        &[(5, vec![hero(3001.0, d0), hero(10.0, d1)]), (6, vec![hero(400.0, d0)])],
        vec![d0, d1],
    );
    assert_eq!(select(&series, 1, &[5, 6]).items, vec![item(6, 400.0)]);
}

#[test]
fn a_missing_buyer_series_is_not_read_as_zero() {
    let d = days()[0];
    let series = single(vec![hero(5000.0, d)], &[], vec![d]);
    let error =
        select_related_items(RelatedInput { series: &series, hero_id: 1, candidates: &[5], after: None }).unwrap_err();
    assert!(error.to_string().contains("No buyer series"));
}

#[test]
fn the_after_window_counts_the_selected_items() {
    let d = days()[0];
    let before = single(vec![hero(5000.0, d)], &[(5, vec![hero(500.0, d)]), (6, vec![hero(400.0, d)])], vec![d]);
    let after = single(vec![hero(2000.0, d)], &[(5, vec![hero(100.0, d)]), (6, vec![hero(300.0, d)])], vec![d]);
    let result =
        select_related_items(RelatedInput { series: &before, hero_id: 1, candidates: &[5, 6], after: Some(&after) })
            .unwrap();
    assert_eq!(result.after_appearances, Some(2000.0));
    assert_eq!(
        result.items,
        vec![
            RelatedItem { id: 5, buyers: 500.0, after: Some(100.0) },
            RelatedItem { id: 6, buyers: 400.0, after: Some(300.0) }
        ]
    );
}

#[test]
fn a_recorded_selection_holds_while_candidates_and_method_are_the_same() {
    let recorded = select(&WindowSeries::default(), 1, &[9, 4]);
    assert!(is_current_related(Some(&recorded), &[4, 9]));
    assert!(!is_current_related(Some(&recorded), &[4, 9, 11]));
    assert!(!is_current_related(Some(&RelatedItems { method_version: 0, ..recorded.clone() }), &[4, 9]));
    assert!(!is_current_related(None, &[4, 9]));
}

const DAY: i64 = 86_400;

fn bought_window(heroes: &[(i64, f64)], buyers: &[(i64, f64)], day: i64) -> WindowSeries {
    let rows =
        |entries: &[(i64, f64)]| entries.iter().map(|&(id, matches)| DailyRow::new(id, day, 0.0, matches)).collect();
    WindowSeries { days: vec![day], hero_rows: rows(heroes), buyers: HashMap::from([(7, rows(buyers))]) }
}

fn bought(id: i64, buyers: f64, appearances: f64) -> BoughtByHero {
    BoughtByHero { id, buyers, appearances, after_buyers: None, after_appearances: None }
}

#[test]
fn heroes_rank_by_the_share_of_their_players_who_bought_the_item() {
    let before = bought_window(
        &[(1, 10_000.0), (2, 2000.0), (3, 5000.0), (4, 900.0), (5, 4000.0)],
        &[(1, 3000.0), (2, 1500.0), (3, 1000.0), (4, 800.0), (5, 90.0)],
        DAY,
    );
    assert_eq!(
        select_bought_by(7, &before, None).unwrap(),
        Some(BoughtBy {
            method_version: 1,
            heroes: vec![bought(2, 1500.0, 2000.0), bought(1, 3000.0, 10_000.0), bought(3, 1000.0, 5000.0)],
        })
    );
}

#[test]
fn the_after_window_is_added_where_the_hero_clears_the_floor() {
    let before = bought_window(&[(1, 10_000.0), (2, 10_000.0)], &[(1, 5000.0), (2, 4000.0)], DAY);
    let after = bought_window(&[(1, 2000.0), (2, 500.0)], &[(1, 600.0), (2, 400.0)], 2 * DAY);
    assert_eq!(
        select_bought_by(7, &before, Some(&after)).unwrap().unwrap().heroes,
        vec![
            BoughtByHero { after_buyers: Some(600.0), after_appearances: Some(2000.0), ..bought(1, 5000.0, 10_000.0) },
            bought(2, 4000.0, 10_000.0),
        ]
    );
}

#[test]
fn no_hero_clearing_the_floors_is_none() {
    assert_eq!(select_bought_by(7, &bought_window(&[(1, 500.0)], &[(1, 400.0)], DAY), None).unwrap(), None);
}
