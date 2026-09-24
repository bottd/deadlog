mod common;

use std::cell::{Cell, RefCell};
use std::path::PathBuf;

use anyhow::{Result, anyhow};
use common::day;
use deadlog_changelog::{EntityEnrichment, parse_structure};
use deadlog_model::{
    AbilityOrder, AbilityOrderEntry, BoughtBy, BoughtByHero, DayInterval, EntityType, RelatedItem, RelatedItems,
};
use deadlog_stats::constants::DAY_S;
use deadlog_stats::read::{RelatedHero, RelatedInputs, RelatedItemLink, RelatedPatch, StatsPatch};
use deadlog_stats::rewrite::{Entities, NamedEntity};
use deadlog_stats::run_related::{RelatedRunOptions, RelatedSource, patches_in_scope, run_related_items};
use deadlog_stats::types::{AbilityOrderRow, DailyRow, TimeRange};

const NOW: i64 = 1788825600 + 44 * DAY_S + DAY_S / 2;
const SETTLED: i64 = 1788825600 + 60 * DAY_S;

fn changelog(title: &str) -> String {
    format!(
        "``attr:\ntitle \"{title}\"\n``\n\n=hero:infernus:\n## Infernus\n- Afterburn reduced\n=\n=item:toxic-bullets:\n## Toxic Bullets\n- Bleed increased\n=\n"
    )
}

#[derive(Clone)]
struct Base {
    id: &'static str,
    slug: &'static str,
    at: i64,
    candidates: Vec<i64>,
}

fn base() -> Vec<Base> {
    vec![
        Base { id: "p1", slug: "2026/p1", at: day(5) + 100, candidates: vec![7] },
        Base { id: "p2", slug: "2026/p2", at: day(40) + 100, candidates: vec![7] },
    ]
}

struct Fixture {
    _dir: tempfile::TempDir,
    root: PathBuf,
    base: Vec<Base>,
}

impl Fixture {
    fn new() -> Self {
        let dir = tempfile::tempdir().unwrap();
        let root = dir.path().to_path_buf();
        std::fs::create_dir_all(root.join("2026")).unwrap();
        let fixture = Self { _dir: dir, root, base: base() };
        for patch in &fixture.base {
            fixture.write(patch.slug, &changelog(patch.id));
        }
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

    fn enrichment(&self, slug: &str, index: usize) -> EntityEnrichment {
        parse_structure(&self.read(slug)).unwrap().blocks[index].enrichment.clone()
    }

    fn related(&self, slug: &str) -> Option<RelatedItems> {
        self.enrichment(slug, 0).related
    }

    fn inputs(&self) -> RelatedInputs {
        let patches = self
            .base
            .iter()
            .map(|patch| {
                let parsed = parse_structure(&self.read(patch.slug)).unwrap();
                let hero = &parsed.blocks[0].enrichment;
                let item = parsed.blocks.iter().find(|block| block.kind == EntityType::Item).unwrap();
                RelatedPatch {
                    patch: StatsPatch {
                        id: patch.id.into(),
                        slug: patch.slug.into(),
                        at: patch.at,
                        stats: parsed.stats.clone(),
                    },
                    heroes: vec![RelatedHero {
                        id: 1,
                        recorded: hero.related.clone(),
                        ability_changed: true,
                        recorded_order: hero.order.clone(),
                    }],
                    candidates: patch.candidates.clone(),
                    items: vec![RelatedItemLink { id: 7, recorded: item.enrichment.bought.clone() }],
                }
            })
            .collect();
        RelatedInputs {
            patches,
            entities: Entities {
                hero: vec![NamedEntity { id: 1, name: "Infernus".into() }],
                item: vec![NamedEntity { id: 7, name: "Toxic Bullets".into() }],
            },
            abilities: [(1, vec![11, 12])].into(),
        }
    }

    fn run(&self, source: &Source, now: i64, rebuild: bool) -> Result<Vec<String>> {
        let mut log = Vec::new();
        run_related_items(
            &RelatedRunOptions { changelogs_dir: &self.root, now, rebuild, patch_id: None },
            self.inputs(),
            source,
            &mut |line| log.push(line.to_string()),
        )?;
        Ok(log)
    }
}

fn series(range: TimeRange, matches: f64) -> Vec<DailyRow> {
    let mut rows = Vec::new();
    let mut d = range.from;
    while d <= range.to {
        rows.push(DailyRow::new(1, d, 0.0, matches));
        d += DAY_S;
    }
    rows
}

struct Source {
    hero_matches: f64,
    hero_calls: Cell<usize>,
    buyer_calls: RefCell<Vec<(i64, TimeRange)>>,
    fail_buyers_before: Option<i64>,
}

impl Source {
    fn new(hero_matches: f64) -> Self {
        Self { hero_matches, hero_calls: Cell::new(0), buyer_calls: RefCell::new(Vec::new()), fail_buyers_before: None }
    }
}

impl RelatedSource for Source {
    fn heroes(&self, range: TimeRange) -> Result<Vec<DailyRow>> {
        self.hero_calls.set(self.hero_calls.get() + 1);
        Ok(series(range, self.hero_matches))
    }

    fn buyers(&self, item_id: i64, range: TimeRange) -> Result<Vec<DailyRow>> {
        self.buyer_calls.borrow_mut().push((item_id, range));
        if self.fail_buyers_before.is_some_and(|limit| range.to < limit) {
            return Err(anyhow!("Failed to fetch: 500"));
        }
        Ok(series(range, 300.0))
    }

    fn ability_order(&self, _hero_id: i64, _range: TimeRange) -> Result<Vec<AbilityOrderRow>> {
        Ok(vec![
            AbilityOrderRow { abilities: vec![11, 12, 11, 11, 11, 12], matches: 800.0 },
            AbilityOrderRow { abilities: vec![12, 11, 12, 12, 12], matches: 400.0 },
        ])
    }
}

fn scope_ids(fixture: &Fixture, rebuild: bool, patch_id: Option<&str>) -> Result<Vec<String>> {
    let inputs = fixture.inputs();
    Ok(patches_in_scope(&inputs.patches, NOW, rebuild, patch_id)?.iter().map(|patch| patch.patch.id.clone()).collect())
}

#[test]
fn scope_takes_the_newest_day_and_recent_unrecorded_patches_not_the_archive() {
    let fixture = Fixture::new();
    assert_eq!(scope_ids(&fixture, false, None).unwrap(), ["p2"]);
    assert_eq!(scope_ids(&fixture, true, None).unwrap().len(), 2);
    assert_eq!(scope_ids(&fixture, false, Some("p1")).unwrap(), ["p1"]);
}

#[test]
fn scope_refuses_a_patch_it_cannot_relate_anything_in() {
    let error = scope_ids(&Fixture::new(), false, Some("nope")).unwrap_err();
    assert!(error.to_string().contains("unknown or has no hero and item changes"));
}

#[test]
fn the_selection_goes_on_the_hero_block_and_the_window_on_the_file() {
    let fixture = Fixture::new();
    fixture.run(&Source::new(1000.0), NOW, false).unwrap();

    assert_eq!(
        fixture.related("2026/p2"),
        Some(RelatedItems {
            method_version: 2,
            status: "complete".into(),
            appearances: 14_000.0,
            after_appearances: Some(3000.0),
            candidates: vec![7],
            items: vec![RelatedItem { id: 7, buyers: 4200.0, after: Some(900.0) }],
        })
    );
    let parsed = parse_structure(&fixture.read("2026/p2")).unwrap();
    assert_eq!(parsed.stats.unwrap().before, Some(DayInterval { from: "2026-10-04".into(), to: "2026-10-18".into() }));
    assert_eq!(
        parsed.blocks[0].enrichment.order,
        Some(AbilityOrder {
            method_version: 1,
            matches: 1200.0,
            after_matches: Some(1200.0),
            abilities: vec![
                AbilityOrderEntry { id: 11, before: 800.0, after: Some(800.0) },
                AbilityOrderEntry { id: 12, before: 400.0, after: Some(400.0) },
            ],
        })
    );
    assert_eq!(
        parsed.blocks[1].enrichment,
        EntityEnrichment {
            bought: Some(BoughtBy {
                method_version: 1,
                heroes: vec![BoughtByHero {
                    id: 1,
                    buyers: 4200.0,
                    appearances: 14_000.0,
                    after_buyers: Some(900.0),
                    after_appearances: Some(3000.0),
                }],
            }),
            ..Default::default()
        }
    );
    assert_eq!(fixture.related("2026/p1"), None);
}

#[test]
fn a_settled_window_is_neither_fetched_nor_written_again() {
    let fixture = Fixture::new();
    fixture.run(&Source::new(1000.0), SETTLED, false).unwrap();
    let before = fixture.read("2026/p2");
    let source = Source::new(1000.0);
    fixture.run(&source, SETTLED + 3600, false).unwrap();
    assert_eq!(source.hero_calls.get(), 0);
    assert_eq!(fixture.read("2026/p2"), before);
}

#[test]
fn an_open_window_is_refreshed_on_every_run() {
    let fixture = Fixture::new();
    fixture.run(&Source::new(1000.0), NOW, false).unwrap();
    let source = Source::new(1000.0);
    fixture.run(&source, NOW + DAY_S, false).unwrap();
    assert_eq!(source.hero_calls.get(), 2);
    assert_eq!(fixture.related("2026/p2").unwrap().after_appearances, Some(4000.0));
}

#[test]
fn a_change_in_the_changed_items_recomputes() {
    let mut fixture = Fixture::new();
    fixture.run(&Source::new(1000.0), NOW, false).unwrap();
    fixture.base[1].candidates = vec![7, 8];
    fixture.run(&Source::new(1000.0), NOW, false).unwrap();
    assert_eq!(fixture.related("2026/p2").unwrap().candidates, vec![7, 8]);
}

#[test]
fn an_empty_result_is_stored_so_the_job_does_not_ask_again() {
    let fixture = Fixture::new();
    fixture.run(&Source::new(10.0), NOW, false).unwrap();
    let related = fixture.related("2026/p2").unwrap();
    assert_eq!((related.status.as_str(), related.appearances), ("insufficient-sample", 140.0));
    assert!(related.items.is_empty());
}

#[test]
fn a_failed_request_leaves_that_patch_untouched_and_does_the_others() {
    let fixture = Fixture::new();
    let untouched = fixture.read("2026/p1");
    let source = Source { fail_buyers_before: Some(day(20)), ..Source::new(1000.0) };
    let log = fixture.run(&source, NOW, true).unwrap();
    assert_eq!(fixture.read("2026/p1"), untouched);
    assert_eq!(fixture.related("2026/p2").unwrap().status, "complete");
    assert!(log.iter().any(|line| line.contains("1 failed (2026/p1)")), "{log:?}");
}

#[test]
fn each_item_window_is_asked_for_once_per_run() {
    let mut fixture = Fixture::new();
    fixture.base.push(Base { id: "p3", slug: "2026/p3", at: day(40) + 7200, candidates: vec![7] });
    fixture.write("2026/p3", &changelog("p3"));
    let source = Source::new(1000.0);
    fixture.run(&source, NOW, false).unwrap();
    assert_eq!(source.buyer_calls.borrow().len(), 2);
    assert_eq!(fixture.related("2026/p3").unwrap().status, "complete");
}
