mod common;

use std::collections::HashMap;

use common::{DAY_1, HeroPart, Parts, all_series, day};
use deadlog_model::{DayInterval, EntityImpact};
use deadlog_stats::constants::DAY_S;
use deadlog_stats::types::{DailyRow, DailyTotals, EntityKind};
use deadlog_stats::windows::{
    IndexedSeries, PatchRef, Sliced, TouchedEntity, index_series, patch_bounds, slice_windows, summarise, window_days,
};

const NOON: i64 = DAY_S / 2;

fn patch_at(id: &str, n: i64) -> PatchRef {
    patch_at_offset(id, n, NOON)
}

fn patch_at_offset(id: &str, n: i64, offset: i64) -> PatchRef {
    PatchRef { id: id.into(), at: day(n) + offset }
}

fn offsets(days: &[i64]) -> Vec<i64> {
    days.iter().map(|d| (d - DAY_1) / DAY_S).collect()
}

fn range(from: i64, to: i64) -> Vec<i64> {
    (from..=to).collect()
}

fn days(from: i64, to: i64) -> Vec<i64> {
    range(from, to).into_iter().map(day).collect()
}

fn far_future() -> i64 {
    day(1000)
}

fn impact_of<'a>(sliced: &'a Sliced, patch: &str, kind: EntityKind, id: i64) -> &'a EntityImpact {
    let (_, entries) = sliced.iter().find(|(key, _)| key == patch).expect("patch");
    &entries.iter().find(|entry| entry.kind == kind && entry.id == id).expect("entity").impact
}

fn keys_of(sliced: &Sliced, patch: &str) -> Vec<String> {
    sliced
        .iter()
        .find(|(key, _)| key == patch)
        .map(|(_, entries)| entries.iter().map(|e| format!("{}:{}", e.kind.as_str(), e.id)).collect())
        .unwrap_or_default()
}

fn uniform_series(entity_ids: &[i64], from: i64, to: i64, wins: f64, matches: f64, total_per_day: f64) -> HeroPart {
    let mut part = HeroPart::default();
    for n in range(from, to) {
        part.totals.insert(day(n), total_per_day);
        for &entity_id in entity_ids {
            part.rows.push(DailyRow::new(entity_id, day(n), wins, matches));
        }
    }
    part
}

fn indexed(part: &HeroPart, kind: EntityKind) -> IndexedSeries {
    index_series(&part.rows, &part.totals, kind)
}

#[test]
fn a_lone_patch_gets_14_days_on_each_side() {
    let window = window_days(&[patch_at("p", 20)], 0, far_future());
    assert_eq!(offsets(&window.before), range(6, 19));
    assert_eq!(offsets(&window.after), range(21, 34));
    assert!(window.closed);
}

#[test]
fn the_cap_applies_when_neighbours_are_far_away() {
    let patches = [patch_at("a", 0), patch_at("b", 40), patch_at("c", 80)];
    let window = window_days(&patches, 1, far_future());
    assert_eq!(offsets(&window.before), range(26, 39));
    assert_eq!(offsets(&window.after), range(41, 54));
}

#[test]
fn hotfixes_one_day_apart_leave_no_days() {
    let patches = [patch_at("a", 10), patch_at("b", 11), patch_at("c", 12)];
    let window = window_days(&patches, 1, far_future());
    assert!(window.before.is_empty());
    assert!(window.after.is_empty());
    assert!(window.closed);
}

#[test]
fn hotfixes_three_days_apart_keep_the_days_strictly_between() {
    let patches = [patch_at("a", 10), patch_at("b", 13), patch_at("c", 16)];
    let window = window_days(&patches, 1, far_future());
    assert_eq!(offsets(&window.before), vec![11, 12]);
    assert_eq!(offsets(&window.after), vec![14, 15]);
}

#[test]
fn the_patch_day_and_neighbour_days_are_never_included() {
    let patches = [patch_at_offset("a", 10, 1), patch_at_offset("b", 15, DAY_S - 1), patch_at_offset("c", 20, 0)];
    let window = window_days(&patches, 1, far_future());
    assert_eq!(offsets(&window.before), vec![11, 12, 13, 14]);
    assert_eq!(offsets(&window.after), vec![16, 17, 18, 19]);
}

#[test]
fn two_patches_on_one_day_share_their_windows() {
    let patches = [patch_at("a", 5), patch_at_offset("b", 10, 100), patch_at_offset("c", 10, 5000), patch_at("d", 14)];
    let first = window_days(&patches, 1, far_future());
    let second = window_days(&patches, 2, far_future());
    assert_eq!(first, second);
    assert_eq!(offsets(&first.before), vec![6, 7, 8, 9]);
    assert_eq!(offsets(&first.after), vec![11, 12, 13]);
}

#[test]
fn an_open_window_excludes_today() {
    let window = window_days(&[patch_at("p", 20)], 0, day(24) + 3600);
    assert_eq!(offsets(&window.after), vec![21, 22, 23]);
    assert!(!window.closed);
}

#[test]
fn a_window_closes_once_the_cap_plus_a_day_has_passed() {
    let patch = patch_at("p", 20);
    assert!(!window_days(std::slice::from_ref(&patch), 0, patch.at + 15 * DAY_S - 1).closed);
    assert!(window_days(std::slice::from_ref(&patch), 0, patch.at + 15 * DAY_S).closed);
}

#[test]
fn a_window_closes_as_soon_as_a_later_patch_exists() {
    let patches = [patch_at("a", 20), patch_at("b", 22)];
    assert!(window_days(&patches, 0, day(22) + NOON + 1).closed);
}

fn summarise_part() -> HeroPart {
    uniform_series(&[1], 0, 9, 110.0, 200.0, 24_000.0)
}

#[test]
fn summarise_sums_the_window_and_scales_hero_pick_to_share_of_matches() {
    let window = summarise(&indexed(&summarise_part(), EntityKind::Hero), 1, &days(0, 9));
    assert_eq!((window.win, window.pick, window.matches, window.days), (Some(0.55), Some(0.1), 2000.0, 10.0));
    assert_eq!(window.buy, None);
}

#[test]
fn summarise_leaves_item_pick_as_share_of_players() {
    let window = summarise(&indexed(&summarise_part(), EntityKind::Item), 1, &days(0, 9));
    assert_eq!(window.pick, Some(0.0083));
    assert_eq!(window.buy, Some(None));
}

#[test]
fn summarise_nulls_rates_under_the_floor_but_keeps_the_count() {
    let window = summarise(&indexed(&summarise_part(), EntityKind::Hero), 1, &days(0, 3));
    assert_eq!((window.win, window.pick, window.matches, window.days), (None, None, 800.0, 4.0));
}

#[test]
fn summarise_counts_entity_days_but_every_day_in_the_denominator() {
    let mut series = uniform_series(&[1], 0, 9, 150.0, 300.0, 24_000.0);
    series.rows.retain(|row| row.day != day(4));
    let window = summarise(&indexed(&series, EntityKind::Hero), 1, &days(0, 9));
    assert_eq!(window.days, 9.0);
    assert_eq!(window.matches, 2700.0);
    assert_eq!(window.pick, Some(0.135));
}

#[test]
fn summarise_returns_an_empty_window_for_an_unknown_entity_or_no_days() {
    let hero = indexed(&summarise_part(), EntityKind::Hero);
    assert_eq!(summarise(&hero, 99, &days(0, 9)).matches, 0.0);
    let empty = summarise(&hero, 1, &[]);
    assert_eq!((empty.win, empty.pick, empty.matches, empty.days), (None, None, 0.0, 0.0));
}

#[test]
fn summarise_rounds_rates_to_four_places() {
    let series = uniform_series(&[1], 0, 0, 1234.0, 3000.0, 36_001.0);
    let window = summarise(&indexed(&series, EntityKind::Hero), 1, &[day(0)]);
    assert_eq!(window.win, Some(0.4113));
    assert_eq!(window.pick, Some(1.0));
}

#[test]
fn summarise_weights_buy_time_by_matches() {
    let mut rows = vec![DailyRow::new(5, day(0), 500.0, 1000.0), DailyRow::new(5, day(1), 100.0, 200.0)];
    rows[0].buy_time = Some(600.0);
    rows[1].buy_time = Some(1201.0);
    let totals: DailyTotals = [(day(0), 10_000.0), (day(1), 10_000.0)].into();
    let window = summarise(&index_series(&rows, &totals, EntityKind::Item), 5, &days(0, 1));
    assert_eq!(window.buy, Some(Some(700.0)));
}

#[test]
fn coverage_refuses_a_rate_when_a_cohort_day_is_missing() {
    let days = days(0, 9);
    let rows: Vec<DailyRow> = days.iter().map(|d| DailyRow::new(1, *d, 150.0, 300.0)).collect();
    let full: DailyTotals = days.iter().map(|d| (*d, 120_000.0)).collect();
    let mut gapped = full.clone();
    gapped.remove(&days[0]);

    let complete = summarise(&index_series(&rows, &full, EntityKind::Hero), 1, &days);
    assert_eq!((complete.win, complete.total, complete.covered), (Some(0.5), 1_200_000.0, 10.0));
    assert_eq!(complete.coverage, "complete");
    let incomplete = summarise(&index_series(&rows, &gapped, EntityKind::Hero), 1, &days);
    assert_eq!((incomplete.win, incomplete.pick, incomplete.matches, incomplete.covered), (None, None, 3000.0, 9.0));
    assert_eq!(incomplete.coverage, "incomplete");
}

#[test]
fn coverage_keeps_a_covered_day_the_entity_sat_out_as_a_real_zero() {
    let days = days(0, 9);
    let rows: Vec<DailyRow> = days[..5].iter().map(|d| DailyRow::new(1, *d, 150.0, 300.0)).collect();
    let totals: DailyTotals = days.iter().map(|d| (*d, 120_000.0)).collect();
    let window = summarise(&index_series(&rows, &totals, EntityKind::Hero), 1, &days);
    assert_eq!((window.win, window.days, window.covered), (Some(0.5), 5.0, 10.0));
    assert_eq!(window.coverage, "complete");
}

#[test]
fn patch_bounds_are_end_exclusive_days_with_same_day_siblings() {
    let patches = [patch_at("a", 20), PatchRef { id: "b".into(), at: day(20) + 7200 }, patch_at("c", 30)];
    let bounds = patch_bounds(&patches, 0, far_future());
    assert_eq!(bounds.before, Some(DayInterval { from: "2026-09-14".into(), to: "2026-09-28".into() }));
    assert_eq!(bounds.after, Some(DayInterval { from: "2026-09-29".into(), to: "2026-10-08".into() }));
    assert_eq!(bounds.siblings, vec!["b".to_string()]);
    assert_eq!(patch_bounds(&[patch_at("p", 20)], 0, day(21) + 60).after, None);
}

struct Slicing {
    hero_all: HeroPart,
    hero_high: HeroPart,
    item_all: HeroPart,
    patches: Vec<PatchRef>,
}

fn slicing() -> Slicing {
    Slicing {
        hero_all: uniform_series(&[1, 2], 0, 60, 100.0, 200.0, 24_000.0),
        hero_high: uniform_series(&[1, 2], 0, 60, 12.0, 20.0, 2400.0),
        item_all: uniform_series(&[500], 0, 60, 300.0, 500.0, 1.0),
        patches: vec![patch_at("p1", 20), patch_at("p2", 40)],
    }
}

fn touched(entries: &[(&str, &[(EntityKind, i64)])]) -> HashMap<String, Vec<TouchedEntity>> {
    entries
        .iter()
        .map(|(patch, list)| (patch.to_string(), list.iter().map(|&(kind, id)| TouchedEntity { kind, id }).collect()))
        .collect()
}

impl Slicing {
    fn slice(&self, touched: &HashMap<String, Vec<TouchedEntity>>, now: i64) -> Sliced {
        let series = all_series(Parts {
            hero_all: Some(self.hero_all.clone()),
            hero_high: Some(self.hero_high.clone()),
            item_all: Some(self.item_all.rows.clone()),
            ..Default::default()
        });
        slice_windows(&self.patches, touched, &series, now)
    }
}

#[test]
fn slice_emits_only_the_entities_each_patch_touched() {
    let s = slicing();
    let impact =
        s.slice(&touched(&[("p1", &[(EntityKind::Hero, 1)]), ("p2", &[(EntityKind::Item, 500)])]), far_future());
    assert_eq!(impact.iter().map(|(id, _)| id.as_str()).collect::<Vec<_>>(), ["p1", "p2"]);
    assert_eq!(keys_of(&impact, "p1"), ["hero:1"]);
    assert_eq!(keys_of(&impact, "p2"), ["item:500"]);
}

#[test]
fn slice_reports_both_tiers_nulling_the_thin_one() {
    let s = slicing();
    let impact = s.slice(&touched(&[("p1", &[(EntityKind::Hero, 1)])]), far_future());
    let entry = impact_of(&impact, "p1", EntityKind::Hero, 1);
    let before = &entry.all.before;
    assert_eq!((before.win, before.pick, before.matches, before.days), (Some(0.5), Some(0.1), 2800.0, 14.0));
    assert_eq!(entry.all.after.matches, 2800.0);
    assert_eq!((entry.high.before.win, entry.high.before.pick, entry.high.before.matches), (None, None, 280.0));
}

#[test]
fn slice_divides_item_picks_by_hero_player_slots() {
    let s = slicing();
    let impact = s.slice(&touched(&[("p2", &[(EntityKind::Item, 500)])]), far_future());
    let entry = impact_of(&impact, "p2", EntityKind::Item, 500);
    assert_eq!(entry.all.before.pick, Some(0.0208));
    assert_eq!(entry.all.before.win, Some(0.6));
}

#[test]
fn slice_skips_entities_without_data_and_empty_patches() {
    let s = slicing();
    let impact = s.slice(
        &touched(&[("p1", &[(EntityKind::Hero, 77)]), ("p2", &[(EntityKind::Hero, 77), (EntityKind::Hero, 2)])]),
        far_future(),
    );
    assert_eq!(impact.iter().map(|(id, _)| id.as_str()).collect::<Vec<_>>(), ["p2"]);
    assert_eq!(keys_of(&impact, "p2"), ["hero:2"]);
}

#[test]
fn slice_marks_the_newest_patch_open_and_closes_the_ones_before() {
    let s = slicing();
    let impact =
        s.slice(&touched(&[("p1", &[(EntityKind::Hero, 1)]), ("p2", &[(EntityKind::Hero, 1)])]), day(44) + NOON);
    assert!(impact_of(&impact, "p1", EntityKind::Hero, 1).closed);
    let open = impact_of(&impact, "p2", EntityKind::Hero, 1);
    assert!(!open.closed);
    assert_eq!(
        (open.all.after.win, open.all.after.pick, open.all.after.days, open.all.after.matches),
        (None, None, 3.0, 600.0)
    );
}

#[test]
fn slice_tolerates_a_day_missing_from_one_tier_only() {
    let mut s = slicing();
    s.hero_high.rows.retain(|row| row.day != day(25));
    s.hero_high.totals.remove(&day(25));
    s.item_all = HeroPart::default();
    let impact = s.slice(&touched(&[("p1", &[(EntityKind::Hero, 1)])]), far_future());
    assert_eq!(impact_of(&impact, "p1", EntityKind::Hero, 1).all.after.days, 14.0);
    assert_eq!(impact_of(&impact, "p1", EntityKind::Hero, 1).high.after.days, 13.0);
}
