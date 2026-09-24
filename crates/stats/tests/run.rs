mod common;

use std::cell::Cell;
use std::collections::HashMap;
use std::path::PathBuf;

use anyhow::{Result, anyhow};
use common::{HeroPart, Parts, all_series, day};
use deadlog_changelog::parse_structure;
use deadlog_model::{DayInterval, EntityImpact, PatchStats};
use deadlog_stats::constants::DAY_S;
use deadlog_stats::read::{PatchInputs, RecordedEntity, StatsPatch};
use deadlog_stats::rewrite::{Entities, NamedEntity};
use deadlog_stats::run::{RunOptions, run, stale_patch_ids};
use deadlog_stats::types::{AllSeries, DailyRow, EntityKind, TimeRange};

const NOW: i64 = 1788825600 + 44 * DAY_S + DAY_S / 2;

fn patches() -> Vec<StatsPatch> {
    vec![
        StatsPatch { id: "p1".into(), slug: "2026/p1".into(), at: day(20) + 100, stats: None },
        StatsPatch { id: "p2".into(), slug: "2026/p2".into(), at: day(40) + 100, stats: None },
    ]
}

fn changelog(title: &str) -> String {
    format!("``attr:\ntitle \"{title}\"\n``\n\n=hero:infernus:\n## Infernus\n- Afterburn reduced\n=\n")
}

fn hero_series(range: TimeRange, wins: f64) -> HeroPart {
    let mut part = HeroPart::default();
    let mut d = day(0);
    while d <= day(60) {
        if d >= range.from - DAY_S && d <= range.to {
            part.rows.push(DailyRow::new(1, d, wins, 1000.0));
            part.totals.insert(d, 120_000.0);
        }
        d += DAY_S;
    }
    part
}

fn fetch_with(wins: f64) -> impl FnMut(TimeRange) -> Result<AllSeries> {
    move |range| Ok(all_series(Parts { hero_all: Some(hero_series(range, wins)), ..Default::default() }))
}

struct Fixture {
    _dir: tempfile::TempDir,
    root: PathBuf,
}

impl Fixture {
    fn new() -> Self {
        let dir = tempfile::tempdir().unwrap();
        let root = dir.path().to_path_buf();
        std::fs::create_dir_all(root.join("2026")).unwrap();
        let fixture = Self { _dir: dir, root };
        fixture.write("2026/p1", &changelog("One"));
        fixture.write("2026/p2", &changelog("Two"));
        fixture
    }

    fn file(&self, slug: &str) -> PathBuf {
        self.root.join(format!("{slug}.mg"))
    }

    fn write(&self, slug: &str, text: &str) {
        std::fs::write(self.file(slug), text).unwrap();
    }

    fn read(&self, slug: &str) -> String {
        std::fs::read_to_string(self.file(slug)).unwrap()
    }

    fn impact(&self, slug: &str) -> Option<EntityImpact> {
        parse_structure(&self.read(slug)).unwrap().changes[0].enrichment.impact.clone()
    }

    fn stats(&self, slug: &str) -> Option<PatchStats> {
        parse_structure(&self.read(slug)).unwrap().stats
    }

    fn inputs(&self) -> PatchInputs {
        let touched = patches()
            .iter()
            .map(|patch| {
                (
                    patch.id.clone(),
                    vec![RecordedEntity { kind: EntityKind::Hero, id: 1, recorded: self.impact(&patch.slug) }],
                )
            })
            .collect();
        let patches =
            patches().into_iter().map(|patch| StatsPatch { stats: self.stats(&patch.slug), ..patch }).collect();
        PatchInputs { patches, touched, entities: entities() }
    }

    fn run(
        &self,
        now: i64,
        rebuild: bool,
        fetch: &mut dyn FnMut(TimeRange) -> Result<AllSeries>,
    ) -> Result<Vec<String>> {
        self.run_with(self.inputs(), now, rebuild, fetch)
    }

    fn run_with(
        &self,
        inputs: PatchInputs,
        now: i64,
        rebuild: bool,
        fetch: &mut dyn FnMut(TimeRange) -> Result<AllSeries>,
    ) -> Result<Vec<String>> {
        let mut log = Vec::new();
        run(&RunOptions { changelogs_dir: &self.root, rebuild, now }, inputs, fetch, &mut |line| {
            log.push(line.to_string())
        })?;
        Ok(log)
    }
}

fn entities() -> Entities {
    Entities { hero: vec![NamedEntity { id: 1, name: "Infernus".into() }], item: vec![] }
}

fn base_inputs() -> PatchInputs {
    PatchInputs {
        patches: patches(),
        touched: patches()
            .iter()
            .map(|patch| (patch.id.clone(), vec![RecordedEntity { kind: EntityKind::Hero, id: 1, recorded: None }]))
            .collect::<HashMap<_, _>>(),
        entities: entities(),
    }
}

const OLDER_BLOCK: &str = "``attr:
impact closed=#true {
  all {
    before win=0.4 pick=0.1 matches=14000 days=14 total=168000 covered=14 coverage=\"complete\"
    after win=0.4 pick=0.1 matches=14000 days=14 total=168000 covered=14 coverage=\"complete\"
  }
  high {
    before win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage=\"complete\"
    after win=#null pick=#null matches=0 days=0 total=0 covered=0 coverage=\"complete\"
  }
}
``";

fn older_changelog(title: &str, closed: bool) -> String {
    let block = if closed { OLDER_BLOCK.to_string() } else { OLDER_BLOCK.replacen("#true", "#false", 1) };
    changelog(title)
        .replacen(
            "``\n",
            "stats schema=2 method=1 collected=\"2026-01-01T00:00:00.000Z\" {\n  before from=#null to=#null\n  after from=#null to=#null\n}\n``\n",
            1,
        )
        .replacen("=hero:infernus:", &format!("=hero:infernus:\n{block}"), 1)
}

fn iso(now: i64) -> String {
    chrono::DateTime::from_timestamp(now, 0).unwrap().format("%Y-%m-%dT%H:%M:%S%.3fZ").to_string()
}

#[test]
fn stale_patches_are_open_windows_and_entries_recorded_open_after_closing() {
    let fixture = Fixture::new();
    assert_eq!(stale_patch_ids(&patches(), &fixture.inputs().touched, NOW), ["p2"]);
    fixture.run(NOW, false, &mut fetch_with(500.0)).unwrap();
    assert_eq!(stale_patch_ids(&patches(), &fixture.inputs().touched, day(90)), ["p2"]);
}

#[test]
fn the_first_run_writes_the_whole_history() {
    let fixture = Fixture::new();
    let from = Cell::new(0);
    let mut inner = fetch_with(500.0);
    fixture
        .run(NOW, false, &mut |range| {
            from.set(range.from);
            inner(range)
        })
        .unwrap();

    let p1 = fixture.impact("2026/p1").unwrap();
    assert!(p1.closed);
    assert_eq!((p1.all.after.win, p1.all.after.days), (Some(0.5), 14.0));
    let p2 = fixture.impact("2026/p2").unwrap();
    assert!(!p2.closed);
    assert_eq!(p2.all.after.days, 3.0);
    assert!(from.get() < day(20) - 14 * DAY_S);
}

#[test]
fn a_routine_run_refreshes_only_the_open_patch() {
    let fixture = Fixture::new();
    fixture.run(NOW, false, &mut fetch_with(500.0)).unwrap();
    let closed_file = fixture.read("2026/p1");
    let from = Cell::new(0);
    let mut inner = fetch_with(600.0);
    fixture
        .run(NOW + DAY_S, false, &mut |range| {
            from.set(range.from);
            inner(range)
        })
        .unwrap();

    assert!(from.get() > day(20));
    assert!(from.get() < day(40) - 14 * DAY_S);
    assert_eq!(fixture.read("2026/p1"), closed_file);
    let p2 = fixture.impact("2026/p2").unwrap();
    assert!(!p2.closed);
    assert_eq!((p2.all.after.win, p2.all.after.days), (Some(0.6), 4.0));
}

#[test]
fn a_failed_fetch_leaves_every_file_untouched() {
    let fixture = Fixture::new();
    fixture.run(NOW, false, &mut fetch_with(500.0)).unwrap();
    let before = fixture.read("2026/p2");
    let outcome = fixture.run(NOW + DAY_S, false, &mut |_| Err(anyhow!("Failed to fetch: 500")));
    assert!(outcome.is_ok());
    assert_eq!(fixture.read("2026/p2"), before);
}

#[test]
fn nothing_is_written_when_the_numbers_have_not_changed() {
    let fixture = Fixture::new();
    fixture.run(NOW, false, &mut fetch_with(500.0)).unwrap();
    let before = fixture.read("2026/p2");
    let log = fixture.run(NOW + 60, false, &mut fetch_with(500.0)).unwrap();
    assert_eq!(fixture.read("2026/p2"), before);
    assert!(log.contains(&"   Stats: no change".to_string()));
}

#[test]
fn the_fetch_is_skipped_once_every_window_is_closed() {
    let fixture = Fixture::new();
    fixture.run(day(90), false, &mut fetch_with(500.0)).unwrap();
    let called = Cell::new(false);
    fixture
        .run(day(91), false, &mut |range| {
            called.set(true);
            fetch_with(900.0)(range)
        })
        .unwrap();
    assert!(!called.get());
}

#[test]
fn rebuild_recomputes_closed_blocks() {
    let fixture = Fixture::new();
    fixture.run(NOW, false, &mut fetch_with(500.0)).unwrap();
    fixture.run(NOW, true, &mut fetch_with(700.0)).unwrap();
    assert_eq!(fixture.impact("2026/p1").unwrap().all.after.win, Some(0.7));
}

#[test]
fn the_sampled_intervals_and_method_are_recorded_once_per_file() {
    let fixture = Fixture::new();
    fixture.run(NOW, false, &mut fetch_with(500.0)).unwrap();
    assert_eq!(
        fixture.stats("2026/p2"),
        Some(PatchStats {
            schema_version: 2,
            method_version: 3,
            collected_at: iso(NOW),
            before: Some(DayInterval { from: "2026-10-04".into(), to: "2026-10-18".into() }),
            after: Some(DayInterval { from: "2026-10-19".into(), to: "2026-10-22".into() }),
            siblings: vec![],
        })
    );
    let before = fixture.impact("2026/p2").unwrap().all.before;
    assert_eq!((before.total, before.covered, before.coverage.as_str()), (14.0 * 120_000.0, 14.0, "complete"));
}

#[test]
fn the_collection_time_stays_when_a_later_run_changes_nothing() {
    let fixture = Fixture::new();
    fixture.run(NOW, false, &mut fetch_with(500.0)).unwrap();
    fixture.run(NOW + 3600, false, &mut fetch_with(500.0)).unwrap();
    assert_eq!(fixture.stats("2026/p2").unwrap().collected_at, iso(NOW));
}

#[test]
fn a_closed_older_method_file_is_left_alone_and_a_rebuild_is_asked_for() {
    let fixture = Fixture::new();
    fixture.write("2026/p1", &older_changelog("One", true));
    let log = fixture.run(NOW, false, &mut fetch_with(500.0)).unwrap();
    assert_eq!(fixture.read("2026/p1"), older_changelog("One", true));
    assert!(log.iter().any(|line| line.contains("1 closed changelogs hold")), "{log:?}");
}

#[test]
fn an_open_older_method_file_is_upgraded_as_a_whole() {
    let fixture = Fixture::new();
    fixture.write("2026/p2", &older_changelog("Two", false));
    fixture.run(NOW, false, &mut fetch_with(500.0)).unwrap();
    assert_eq!(fixture.stats("2026/p2").unwrap().method_version, 3);
    assert_eq!(fixture.impact("2026/p2").unwrap().all.before.coverage, "complete");
}

#[test]
fn a_missing_cohort_day_suppresses_rates_and_says_so() {
    let fixture = Fixture::new();
    fixture
        .run(NOW, false, &mut |range| {
            let mut part = hero_series(range, 500.0);
            part.totals.remove(&day(30));
            Ok(all_series(Parts { hero_all: Some(part), ..Default::default() }))
        })
        .unwrap();
    let after = fixture.impact("2026/p1").unwrap().all.after;
    assert_eq!(
        (after.win, after.matches, after.covered, after.coverage.as_str()),
        (None, 14_000.0, 13.0, "incomplete")
    );
}

#[test]
fn a_touched_entity_without_a_block_names_the_file() {
    let fixture = Fixture::new();
    fixture.write("2026/p2", "``attr:\ntitle \"Two\"\n``\n\n# Notes\n- Nothing here\n");
    let error = fixture.run_with(base_inputs(), NOW, false, &mut fetch_with(500.0)).unwrap_err();
    assert!(error.to_string().contains(&format!("2026{}p2.mg", std::path::MAIN_SEPARATOR)), "{error}");
}

#[test]
fn a_missing_changelog_file_is_an_error() {
    let fixture = Fixture::new();
    std::fs::remove_file(fixture.file("2026/p1")).unwrap();
    let error = fixture.run_with(base_inputs(), NOW, false, &mut fetch_with(500.0)).unwrap_err();
    assert!(error.to_string().contains("not found"), "{error}");
}
