use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::sync::OnceLock;
use std::sync::atomic::{AtomicUsize, Ordering};

use serde_json::Value;
use takumi::prelude::MeasuredNode;

use crate::components::RowIcon;
use crate::generate::{Run, change_label, collect_entity_stats, history_line, run};
use crate::inputs::{HeroEntry, Icon, Inputs, ItemEntry, Patch, PatchIcons};
use crate::layouts::{self, ChangelogLayout, HeroLayout, HomeLayout, ItemLayout};
use crate::render::Renderer;

const PIXEL: &str = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGNo3Tb1PwAGZALQewNK1wAAAABJRU5ErkJggg==";

fn renderer() -> &'static Renderer {
    static RENDERER: OnceLock<Renderer> = OnceLock::new();
    RENDERER.get_or_init(|| {
        Renderer::new(&Path::new(env!("CARGO_MANIFEST_DIR")).join("../../app/static/fonts"))
            .unwrap()
    })
}

struct TempDir(PathBuf);

impl TempDir {
    fn new(name: &str) -> Self {
        let path = std::env::temp_dir().join(format!("deadlog-meta-{name}-{}", std::process::id()));
        let _ = std::fs::remove_dir_all(&path);
        Self(path)
    }
}

impl Drop for TempDir {
    fn drop(&mut self) {
        let _ = std::fs::remove_dir_all(&self.0);
    }
}

fn hero(name: &str, slug: &str, hero_type: Option<&str>, image: &str) -> HeroEntry {
    HeroEntry {
        name: name.into(),
        slug: slug.into(),
        hero_type: hero_type.map(Into::into),
        image: image.into(),
    }
}

fn item(name: &str, slug: &str, image: &str) -> ItemEntry {
    ItemEntry {
        name: name.into(),
        slug: slug.into(),
        kind: "upgrade".into(),
        category: Some("weapon".into()),
        tier: Some(1),
        image: image.into(),
    }
}

fn patch(id: &str, title: &str, pub_date: &str) -> Patch {
    Patch {
        id: id.into(),
        title: title.into(),
        pub_date: pub_date.into(),
        author: "Yoshi".into(),
        ..Default::default()
    }
}

fn icon(slug: &str, src: &str, change_count: Option<usize>) -> Icon {
    Icon { name: slug.into(), slug: slug.into(), src: src.into(), tone: None, change_count }
}

#[test]
fn continues_after_an_entity_failure_and_uses_canonical_db_slugs() {
    let out = TempDir::new("failure");
    let inputs = Inputs {
        heroes: vec![
            hero("Broken Hero", "broken-hero", None, "https://images.example/broken.png"),
            hero(
                "Hero Name That Does Not Match Its Slug",
                "canonical-hero",
                Some("mystic"),
                "https://images.example/working.png",
            ),
        ],
        ..Default::default()
    };
    let fetch = |url: &str| if url.contains("broken") { String::new() } else { PIXEL.to_string() };
    let report = run(&inputs, &Run::new(renderer(), &fetch, &out.0));

    assert_eq!(report.total(), 1);
    assert_eq!(report.failures, ["hero preview Broken Hero"]);
    let png = std::fs::read(out.0.join("hero/canonical-hero.png")).unwrap();
    assert_eq!(&png[1..4], b"PNG");
    assert!(!out.0.join("hero/broken-hero.png").exists());
}

#[test]
fn unroutable_slugs_are_reported_not_written() {
    let out = TempDir::new("unroutable");
    let inputs = Inputs {
        patches: vec![patch("51:20", "Six New Heroes", "2025-08-18T20:42:20.000Z")],
        heroes: vec![hero("Jeté", "jeté", None, PIXEL)],
        items: vec![item("Back Off!", "back-off!", PIXEL)],
        ..Default::default()
    };
    let fetch = |_: &str| PIXEL.to_string();
    let report = run(&inputs, &Run::new(renderer(), &fetch, &out.0));
    assert_eq!(report.total(), 1);
    assert_eq!(
        report.failures,
        [
            "changelog preview 51:20 (unroutable id)",
            "hero preview Jeté (unroutable slug \"jeté\")",
            "item preview Back Off! (unroutable slug \"back-off!\")",
        ]
    );
}

#[test]
fn a_named_changelog_title_is_its_heading() {
    let out = TempDir::new("named");
    let inputs = Inputs {
        patches: vec![Patch {
            content_text: Some("Meet the new heroes.".into()),
            ..patch("2025-08-18", "Six New Heroes", "2025-08-18T20:42:20.000Z")
        }],
        ..Default::default()
    };
    let fetch = |_: &str| PIXEL.to_string();
    let report = run(&inputs, &Run::new(renderer(), &fetch, &out.0));
    assert_eq!((report.total(), report.failures.len()), (2, 0));
    assert!(out.0.join("index.png").exists());
    assert!(out.0.join("change/2025-08-18.png").exists());

    let node = layouts::changelog(&ChangelogLayout {
        heading: "Six New Heroes".into(),
        date: "Aug 18, 2025".into(),
        author: "simonne".into(),
        major_update: false,
        hero_count: 0,
        item_count: 0,
        hero_icons: vec![],
        item_icons: vec![],
        summary: Some("Meet the new heroes.".into()),
        art: None,
    });
    let rendered = node.to_string();
    assert!(rendered.contains("\"text\":\"Six New Heroes\""));
    assert!(rendered.contains("BY SIMONNE"));
}

struct Scenario {
    counts: &'static [Option<usize>],
    named: bool,
    changes: &'static str,
    history: &'static str,
}

const SCENARIOS: [Scenario; 8] = [
    Scenario {
        counts: &[Some(1), Some(1)],
        named: false,
        changes: "2 CHANGES",
        history: "Last changed in the September 15th, 2026 patch.",
    },
    Scenario {
        counts: &[Some(2), None],
        named: false,
        changes: "2+ CHANGES",
        history: "Last mentioned in the September 15th, 2026 patch.",
    },
    Scenario {
        counts: &[None, Some(1)],
        named: true,
        changes: "1+ CHANGES",
        history: "Last changed Sep 15, 2026 in Matchmaking Update.",
    },
    Scenario {
        counts: &[None, None],
        named: true,
        changes: "",
        history: "Last mentioned Sep 15, 2026 in Matchmaking Update.",
    },
    Scenario {
        counts: &[Some(1)],
        named: false,
        changes: "1 CHANGE",
        history: "Last changed in the September 1st, 2026 patch.",
    },
    Scenario {
        counts: &[Some(0)],
        named: false,
        changes: "0 CHANGES",
        history: "Last changed in the September 1st, 2026 patch.",
    },
    Scenario {
        counts: &[Some(0), None],
        named: false,
        changes: "0+ CHANGES",
        history: "Last mentioned in the September 15th, 2026 patch.",
    },
    Scenario {
        counts: &[],
        named: false,
        changes: "0 CHANGES",
        history: "No changes recorded yet.",
    },
];

fn scenario_inputs(scenario: &Scenario) -> Inputs {
    let image = "https://images.example/entity.png";
    let patches: Vec<Patch> = scenario
        .counts
        .iter()
        .enumerate()
        .map(|(index, _)| {
            let day = if index == 0 { "01" } else { "15" };
            let title = if scenario.named {
                "Matchmaking Update".to_string()
            } else {
                format!("09-{day}-2026")
            };
            patch(&format!("patch-{index}"), &title, &format!("2026-09-{day}T20:00:00.000Z"))
        })
        .collect();
    let icons = patches
        .iter()
        .zip(scenario.counts)
        .map(|(patch, count)| {
            let icons = PatchIcons {
                heroes: vec![icon("abrams", image, *count)],
                items: vec![icon("headshot-booster", image, *count)],
            };
            (patch.id.clone(), icons)
        })
        .collect::<HashMap<_, _>>();
    Inputs {
        // The newest entry must keep its mention status when an older patch is folded later.
        patches: patches.into_iter().rev().collect(),
        icons,
        heroes: vec![hero("Abrams", "abrams", Some("brawler"), image)],
        items: vec![item("Headshot Booster", "headshot-booster", image)],
    }
}

#[test]
fn honest_hero_and_item_labels() {
    for scenario in &SCENARIOS {
        let inputs = scenario_inputs(scenario);
        let stats = collect_entity_stats(&inputs);
        let none = Default::default();
        let nodes = [
            (stats.heroes.get("abrams").unwrap_or(&none), true),
            (stats.items.get("headshot-booster").unwrap_or(&none), false),
        ]
        .map(|(stats, is_hero)| {
            assert_eq!(change_label(stats), scenario.changes);
            assert_eq!(history_line(stats), scenario.history);
            let rendered: Value = if is_hero {
                layouts::hero(&HeroLayout {
                    name: "Abrams".into(),
                    hero_type: Some("brawler".into()),
                    image: PIXEL.into(),
                    changes: change_label(stats),
                    patch_count: stats.patch_count,
                    history: history_line(stats),
                })
            } else {
                layouts::item(&ItemLayout {
                    name: "Headshot Booster".into(),
                    kind: "upgrade".into(),
                    category: Some("weapon".into()),
                    tier: Some(1),
                    image: PIXEL.into(),
                    changes: change_label(stats),
                    patch_count: stats.patch_count,
                    history: history_line(stats),
                })
            };
            rendered.to_string()
        });
        let patches = scenario.counts.len();
        for rendered in nodes {
            assert!(rendered.contains(scenario.history), "{}", scenario.history);
            let label = format!("\"{patches} {}\"", if patches == 1 { "PATCH" } else { "PATCHES" });
            assert!(rendered.contains(&label), "{label}");
            if scenario.changes.is_empty() {
                assert!(!rendered.contains(" CHANGES"));
            } else {
                assert!(rendered.contains(scenario.changes));
            }
        }
    }
}

#[test]
fn a_full_scenario_renders_every_preview() {
    let out = TempDir::new("scenario");
    let inputs = scenario_inputs(&SCENARIOS[1]);
    let fetch = |_: &str| PIXEL.to_string();
    let report = run(&inputs, &Run::new(renderer(), &fetch, &out.0));
    assert_eq!((report.home, report.changelogs, report.heroes, report.items), (1, 2, 1, 1));
    assert!(report.failures.is_empty());
}

fn shared_artwork_inputs(image: &str) -> Inputs {
    let icons = PatchIcons { heroes: vec![], items: vec![icon("item", image, Some(1))] };
    Inputs {
        patches: ["first", "second"].map(|id| patch(id, id, "2026-09-01T20:00:00.000Z")).into(),
        icons: [("first".to_string(), icons.clone()), ("second".to_string(), icons)].into(),
        ..Default::default()
    }
}

#[test]
fn shared_artwork_is_fetched_once_per_run() {
    let out = TempDir::new("shared");
    let inputs = shared_artwork_inputs("https://images.example/shared.webp");
    let calls = AtomicUsize::new(0);
    let fetch = |_: &str| {
        calls.fetch_add(1, Ordering::SeqCst);
        PIXEL.to_string()
    };
    run(&inputs, &Run::new(renderer(), &fetch, &out.0));
    assert_eq!(calls.load(Ordering::SeqCst), 1);
    run(&inputs, &Run::new(renderer(), &fetch, &out.0));
    assert_eq!(calls.load(Ordering::SeqCst), 2);
}

#[test]
fn shared_artwork_whose_first_fetch_failed_is_refetched() {
    let out = TempDir::new("flaky");
    let inputs = shared_artwork_inputs("https://images.example/flaky.webp");
    let calls = AtomicUsize::new(0);
    let fetch = |_: &str| {
        if calls.fetch_add(1, Ordering::SeqCst) == 0 { String::new() } else { PIXEL.to_string() }
    };
    let report = run(&inputs, &Run::new(renderer(), &fetch, &out.0));
    // Only the preview that hit the blip is lost; the rest retry.
    assert_eq!(report.failures, ["home preview"]);
    assert_eq!(report.total(), 2);
    assert_eq!(calls.load(Ordering::SeqCst), 2);
}

fn fits(node: Value) {
    let root: MeasuredNode = renderer().measure(node).unwrap();
    // field → plate → [art?, ticks, rail, content column]; the column is always last.
    let plate = &root.children[0];
    let slot = plate.children.last().unwrap();
    let body = &slot.children[0];
    assert!(
        body.height <= slot.height,
        "layout is taller than the plate: {} > {}",
        body.height,
        slot.height
    );
    for child in &body.children {
        assert!(
            child.width <= slot.width,
            "a block is wider than the plate: {} > {}",
            child.width,
            slot.width
        );
    }
}

fn icons(n: usize) -> Vec<RowIcon> {
    (0..n).map(|i| RowIcon { src: format!("{PIXEL}#{i}"), tone: None }).collect()
}

const LONG_SUMMARY: &str = "King of the Hill objective has been rethemed and renamed to Unstable Rift. Unstable Rift no longer requires an Urn delivery to trigger the start of the event, and the reward now scales with match time.";

fn patch_card() -> ChangelogLayout {
    ChangelogLayout {
        heading: "Six New Heroes".into(),
        date: "Aug 18, 2025".into(),
        author: "Daniel Jennings".into(),
        major_update: true,
        hero_count: 38,
        item_count: 173,
        hero_icons: icons(8),
        item_icons: icons(8),
        summary: Some(LONG_SUMMARY.into()),
        art: None,
    }
}

#[test]
fn patch_cards_fit_the_plate() {
    let cases = [
        patch_card(),
        ChangelogLayout {
            heading: "Holliday, Vyper, Calico, and The Magnificent Sinclair".into(),
            ..patch_card()
        },
        ChangelogLayout {
            heading: "Some Are Merciful, The Venator Is Not".into(),
            hero_icons: vec![],
            item_icons: vec![],
            hero_count: 0,
            item_count: 0,
            ..patch_card()
        },
        ChangelogLayout {
            heading: "August 22nd, 2026".into(),
            date: String::new(),
            major_update: false,
            ..patch_card()
        },
        ChangelogLayout { art: Some(PIXEL.into()), ..patch_card() },
    ];
    for case in &cases {
        fits(layouts::changelog(case));
    }
}

#[test]
fn home_card_with_full_rows_and_large_counts_fits() {
    fits(layouts::home(&HomeLayout {
        last_updated: "SEP 30, 2026".into(),
        patch_count: 1140,
        hero_count: 380,
        item_count: 1730,
        hero_icons: icons(8),
        item_icons: icons(8),
        latest_hero_count: 38,
        latest_item_count: 173,
    }));
}

const LONGEST_HISTORY: &str =
    "Last mentioned Sep 30, 2026 in Holliday, Vyper, Calico, and The Magnificent Sinclair.";

#[test]
fn hero_card_with_a_long_name_fits() {
    fits(layouts::hero(&HeroLayout {
        name: "The Magnificent Sinclair".into(),
        hero_type: Some("assassin".into()),
        image: PIXEL.into(),
        changes: "1520+ CHANGES".into(),
        patch_count: 330,
        history: LONGEST_HISTORY.into(),
    }));
}

#[test]
fn item_card_with_a_long_name_and_a_tier_fits() {
    fits(layouts::item(&ItemLayout {
        name: "Weapon Power And Health Drain".into(),
        kind: "upgrade".into(),
        category: Some("vitality".into()),
        tier: Some(4),
        image: PIXEL.into(),
        changes: "1520+ CHANGES".into(),
        patch_count: 330,
        history: LONGEST_HISTORY.into(),
    }));
}
