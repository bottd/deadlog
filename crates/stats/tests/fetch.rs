mod common;

use common::{DAY_1, DAY_2, DAY_3, fixture, hero_row, item_row, param, stub_api};
use deadlog_stats::constants::{DAY_S, HIGH_RANK_MIN_BADGE, day_of};
use deadlog_stats::fetch::chunk_range;
use deadlog_stats::types::{DailyRow, EntityKind, RankTier, TimeRange};
use serde_json::json;

fn one_day() -> TimeRange {
    TimeRange { from: DAY_1, to: DAY_1 }
}

fn iso_day(iso: &str) -> i64 {
    chrono::NaiveDate::parse_from_str(iso, "%Y-%m-%d").unwrap().and_hms_opt(0, 0, 0).unwrap().and_utc().timestamp()
}

#[test]
fn chunks_cover_whole_days_consecutively_without_overlap() {
    let chunks = chunk_range(TimeRange { from: DAY_1 + 500, to: DAY_1 + 130 * DAY_S + 9 });
    assert_eq!(chunks.len(), 3);
    assert_eq!(chunks[0].from, DAY_1);
    assert_eq!(chunks.last().unwrap().to, DAY_1 + 131 * DAY_S - 1);
    for pair in chunks.windows(2) {
        assert_eq!(pair[1].from, pair[0].to + 1);
        assert_eq!(day_of(pair[1].from), pair[1].from);
    }
}

#[test]
fn a_range_within_the_limit_is_one_chunk() {
    assert_eq!(chunk_range(TimeRange { from: DAY_1, to: DAY_2 }), vec![TimeRange { from: DAY_1, to: DAY_3 - 1 }]);
}

#[test]
fn hero_rows_are_normalised_and_totals_read_from_matches_per_bucket() {
    let (api, calls) = stub_api(200, |_| json!([hero_row(1, DAY_1, 60, 100), hero_row(2, DAY_1, 40, 90)]));
    let (rows, totals) = api.fetch_series(EntityKind::Hero, RankTier::All, one_day()).unwrap();
    assert_eq!(rows, vec![DailyRow::new(1, DAY_1, 60.0, 100.0), DailyRow::new(2, DAY_1, 40.0, 90.0)]);
    assert_eq!(totals, [(DAY_1, 515_328.0)].into());
    let calls = calls.borrow();
    assert_eq!(calls[0].path(), "/v1/analytics/hero-stats");
    assert_eq!(param(&calls[0], "bucket").as_deref(), Some("start_time_day"));
    assert_eq!(param(&calls[0], "min_average_badge"), None);
}

#[test]
fn item_rows_are_normalised_and_carry_no_totals() {
    let (api, calls) = stub_api(200, |_| json!([item_row(7409189, DAY_1, 194, 367)]));
    let (rows, totals) = api.fetch_series(EntityKind::Item, RankTier::All, one_day()).unwrap();
    assert_eq!(rows, vec![DailyRow { buy_time: Some(857.67), ..DailyRow::new(7409189, DAY_1, 194.0, 367.0) }]);
    assert!(totals.is_empty());
    assert_eq!(calls.borrow()[0].path(), "/v1/analytics/item-stats");
}

#[test]
fn both_endpoints_pin_the_population_and_items_the_row_minimum() {
    let (api, calls) = stub_api(200, |_| json!([]));
    api.fetch_series(EntityKind::Hero, RankTier::All, one_day()).unwrap();
    api.fetch_series(EntityKind::Item, RankTier::High, one_day()).unwrap();
    let calls = calls.borrow();
    for url in calls.iter() {
        assert_eq!(param(url, "game_mode").as_deref(), Some("normal"));
        assert_eq!(param(url, "match_mode").as_deref(), Some("ranked,unranked"));
        assert_eq!(param(url, "min_unix_timestamp"), Some(DAY_1.to_string()));
        assert_eq!(param(url, "max_unix_timestamp"), Some((DAY_2 - 1).to_string()));
    }
    assert_eq!(param(&calls[0], "min_matches"), None);
    assert_eq!(param(&calls[1], "min_matches").as_deref(), Some("1"));
    assert_eq!(param(&calls[1], "min_average_badge").as_deref(), Some("91"));
}

#[test]
fn the_query_string_matches_url_search_params() {
    let (api, calls) = stub_api(200, |_| json!([]));
    api.fetch_series(EntityKind::Item, RankTier::High, one_day()).unwrap();
    assert_eq!(
        calls.borrow()[0].query(),
        Some(
            "bucket=start_time_day&min_unix_timestamp=1788825600&max_unix_timestamp=1788911999&game_mode=normal&match_mode=ranked%2Cunranked&min_matches=1&min_average_badge=91"
        )
    );
}

#[test]
fn only_the_high_tier_sends_the_badge_floor() {
    let (api, calls) = stub_api(200, |_| json!([]));
    api.fetch_series(EntityKind::Hero, RankTier::High, one_day()).unwrap();
    assert_eq!(param(&calls.borrow()[0], "min_average_badge"), Some(HIGH_RANK_MIN_BADGE.to_string()));
}

#[test]
fn buckets_beyond_the_requested_range_are_dropped() {
    let (api, _) = stub_api(200, |_| json!([hero_row(1, DAY_1, 60, 100), hero_row(1, DAY_2, 55, 100)]));
    let (rows, totals) = api.fetch_series(EntityKind::Hero, RankTier::All, one_day()).unwrap();
    assert_eq!(rows.iter().map(|row| row.day).collect::<Vec<_>>(), vec![DAY_1]);
    assert_eq!(totals.keys().copied().collect::<Vec<_>>(), vec![DAY_1]);
}

#[test]
fn consecutive_chunks_never_count_a_day_twice() {
    let (api, calls) = stub_api(200, |url| {
        let from: i64 = param(url, "min_unix_timestamp").unwrap().parse().unwrap();
        let max: i64 = param(url, "max_unix_timestamp").unwrap().parse().unwrap();
        json!([hero_row(1, from, 1, 2), hero_row(1, day_of(max), 1, 2), hero_row(1, max + 1, 1, 2)])
    });
    let (rows, _) =
        api.fetch_series(EntityKind::Hero, RankTier::All, TimeRange { from: DAY_1, to: DAY_1 + 100 * DAY_S }).unwrap();
    let calls = calls.borrow();
    assert_eq!(calls.len(), 2);
    let first_max: i64 = param(&calls[0], "max_unix_timestamp").unwrap().parse().unwrap();
    assert_eq!(param(&calls[1], "min_unix_timestamp"), Some((first_max + 1).to_string()));
    let unique: std::collections::HashSet<i64> = rows.iter().map(|row| row.day).collect();
    assert_eq!(unique.len(), rows.len());
}

#[test]
fn a_server_error_is_an_error() {
    let (api, _) = stub_api(500, |_| json!({ "status": 500, "error": "Internal server error: Database error." }));
    let error = api.fetch_series(EntityKind::Item, RankTier::All, one_day()).unwrap_err();
    assert!(error.to_string().contains("500"), "{error}");
}

#[test]
fn a_response_off_the_schema_is_an_error() {
    let (api, _) = stub_api(200, |_| json!([{ "hero_id": 1, "bucket": DAY_1 }]));
    let error = api.fetch_series(EntityKind::Hero, RankTier::All, one_day()).unwrap_err();
    assert!(error.to_string().contains("Invalid hero-stats response"), "{error}");
}

#[test]
fn a_null_buy_time_is_off_the_schema() {
    let (api, _) =
        stub_api(200, |_| json!([{ "item_id": 1, "bucket": DAY_1, "wins": 1, "matches": 2, "avg_buy_time_s": null }]));
    assert!(api.fetch_series(EntityKind::Item, RankTier::All, one_day()).is_err());
}

fn range_around_reset() -> TimeRange {
    TimeRange { from: iso_day("2026-07-29"), to: iso_day("2026-08-04") }
}

#[test]
fn a_day_the_api_omitted_stays_absent() {
    let recorded = fixture("min-matches-rank-reset");
    let (api, _) = stub_api(200, move |_| recorded["itemDefault"].clone());
    let range = range_around_reset();
    let (rows, _) = api.fetch_series(EntityKind::Item, RankTier::High, range).unwrap();
    assert!(!rows.is_empty());
    assert!(!rows.iter().any(|row| row.day == iso_day("2026-07-31")));
    assert!(rows.iter().all(|row| row.day <= range.to));
}

#[test]
fn player_slots_exceed_any_one_hero_and_are_the_daily_total() {
    let recorded = fixture("min-matches-rank-reset");
    let (api, _) = stub_api(200, move |_| recorded["hero"].clone());
    let range = range_around_reset();
    let (rows, totals) = api.fetch_series(EntityKind::Hero, RankTier::High, range).unwrap();
    assert!(!totals.contains_key(&(range.to + DAY_S)));
    for row in rows {
        assert!(totals[&row.day] >= row.matches);
    }
}

#[test]
fn a_failing_request_is_tried_three_times() {
    let (api, calls) = stub_api(500, |_| json!({ "error": "Database error." }));
    let error = api.fetch_series(EntityKind::Item, RankTier::All, one_day()).unwrap_err();
    assert!(error.to_string().contains("500"));
    assert_eq!(calls.borrow().len(), 3);
}

#[test]
fn a_rejected_request_is_not_retried() {
    let (api, calls) = stub_api(400, |_| json!({ "error": "bad request" }));
    let error = api.fetch_series(EntityKind::Hero, RankTier::All, one_day()).unwrap_err();
    assert!(error.to_string().contains("400"));
    assert_eq!(calls.borrow().len(), 1);
}

#[test]
fn buyer_series_ask_hero_stats_for_one_item_and_drop_the_filtered_total() {
    let (api, calls) = stub_api(200, |_| {
        let mut first = hero_row(1, DAY_1, 60, 100);
        first["matches_per_bucket"] = json!(50_662);
        json!([first, hero_row(1, DAY_2, 55, 90)])
    });
    let rows = api.fetch_buyer_series(3696726732, one_day()).unwrap();
    assert_eq!(rows, vec![DailyRow::new(1, DAY_1, 60.0, 100.0)]);
    let calls = calls.borrow();
    assert_eq!(calls[0].path(), "/v1/analytics/hero-stats");
    assert_eq!(param(&calls[0], "include_item_ids").as_deref(), Some("3696726732"));
    assert_eq!(param(&calls[0], "game_mode").as_deref(), Some("normal"));
    assert_eq!(param(&calls[0], "min_matches"), None);
}

#[test]
fn each_tier_takes_its_totals_from_the_hero_series() {
    let (api, _) = stub_api(200, |url| {
        let high = param(url, "min_average_badge").is_some();
        if url.path().ends_with("hero-stats") {
            let mut row = hero_row(1, DAY_1, 6, 10);
            row["matches_per_bucket"] = json!(if high { 1200 } else { 120_000 });
            return json!([row]);
        }
        json!([item_row(7409189, DAY_1, 3, 5)])
    });
    let all = api.fetch_all_series(one_day()).unwrap();
    assert_eq!(all.totals.all[&DAY_1], 120_000.0);
    assert_eq!(all.totals.high[&DAY_1], 1200.0);
    assert_eq!(all.item.all, all.item.high);
    assert_eq!(all.item.all[0].entity_id, 7409189);
}

#[test]
fn ability_order_asks_through_the_last_second_of_the_last_day() {
    let (api, calls) = stub_api(200, |_| json!([{ "abilities": [1, 2, 1], "matches": 5, "wins": 3 }]));
    let rows = api.fetch_ability_order(7, TimeRange { from: DAY_1, to: DAY_2 }).unwrap();
    assert_eq!(rows[0].abilities, vec![1, 2, 1]);
    assert_eq!(rows[0].matches, 5.0);
    let calls = calls.borrow();
    assert_eq!(calls[0].path(), "/v1/analytics/ability-order-stats");
    assert_eq!(
        calls[0].query(),
        Some(
            "hero_id=7&min_unix_timestamp=1788825600&max_unix_timestamp=1788998399&min_matches=1&game_mode=normal&match_mode=ranked%2Cunranked"
        )
    );
}
