mod common;

use common::{standard, window};
use deadlog_changelog::{
    EntityEnrichment, carry_enrichment, parse_stats, parse_structure, splice_impact_blocks, write_enrichment_block,
};
use deadlog_model::{DayInterval, EntityImpact, ImpactWindow, PatchStats, TierImpact};

fn v2() -> ImpactWindow {
    ImpactWindow { total: 28_000.0, ..standard() }
}

fn impact() -> EntityImpact {
    EntityImpact {
        closed: true,
        all: TierImpact { before: v2(), after: ImpactWindow { win: Some(0.52), ..v2() } },
        high: TierImpact { before: v2(), after: window(None, None, [0.0; 4], "incomplete") },
    }
}

fn stats() -> PatchStats {
    PatchStats {
        schema_version: 2,
        method_version: 2,
        collected_at: "2026-09-21T21:00:00.000Z".into(),
        before: Some(DayInterval { from: "2026-09-02".into(), to: "2026-09-16".into() }),
        after: None,
        siblings: vec!["162580".into()],
    }
}

const PLAIN: &str = "``attr:\ntitle \"Patch \\\"quoted\\\"\"\nmajor_update #false\n``\n\n=hero:doorman:\n## The Doorman\n- Base damage increased\n=\n";

fn splice(source: &str, stats: &PatchStats) -> String {
    splice_impact_blocks(source, |_| Some(Some(impact())), Some(stats)).unwrap()
}

#[test]
fn round_trips_through_the_mog_parser() {
    let parsed = parse_structure(&splice(PLAIN, &stats())).unwrap();
    assert_eq!(parsed.stats, Some(stats()));
    assert_eq!(parsed.changes[0].enrichment.impact, Some(impact()));
    assert_eq!(parsed.metadata["title"], "Patch \"quoted\"");
    assert_eq!(parsed.changes[0].groups[0].bullets, vec!["Base damage increased"]);
}

#[test]
fn keeps_every_other_metadata_line_and_its_order() {
    let written = splice(PLAIN, &stats());
    let head: Vec<&str> = written.split('\n').take(8).collect();
    assert_eq!(head[..3], PLAIN.split('\n').take(3).collect::<Vec<_>>()[..]);
    assert_eq!(
        head[3..7],
        deadlog_changelog::write_stats_node(&stats())[..4].iter().map(String::as_str).collect::<Vec<_>>()[..]
    );
}

#[test]
fn replaces_an_existing_node_in_place_and_is_stable() {
    let first = splice(PLAIN, &stats());
    let moved = PatchStats {
        after: Some(DayInterval { from: "2026-09-17".into(), to: "2026-09-20".into() }),
        siblings: vec![],
        ..stats()
    };
    let second = splice(&first, &moved);
    assert_eq!(parse_structure(&second).unwrap().stats, Some(moved.clone()));
    assert_eq!(second.lines().filter(|line| line.starts_with("stats ")).count(), 1);
    assert_eq!(splice(&second, &moved), second);
}

#[test]
fn reads_several_siblings_back_as_a_list() {
    let many = PatchStats { siblings: vec!["1".into(), "2".into()], ..stats() };
    assert_eq!(parse_structure(&splice(PLAIN, &many)).unwrap().stats.unwrap().siblings, vec!["1", "2"]);
}

#[test]
fn names_an_unsupported_schema() {
    let error = parse_stats(&serde_json::json!({ "schema": 3, "method": 1 })).unwrap_err().to_string();
    assert!(error.contains("Unsupported stats schema 3"), "{error}");
    let error = parse_stats(&serde_json::json!({ "schema": 2, "method": 2, "collected": "yesterday" }))
        .unwrap_err()
        .to_string();
    assert!(error.contains("Malformed stats node"), "{error}");
    let error = parse_stats(&serde_json::json!({
        "schema": 2, "method": 2, "collected": "2026-09-21T21:00:00.000Z",
        "before": { "from": "2026-09-16", "to": "2026-09-02" },
        "after": { "from": null, "to": null }
    }))
    .unwrap_err()
    .to_string();
    assert!(error.contains("from < to"), "{error}");
}

#[test]
fn writes_the_coverage_fields_on_every_window() {
    assert_eq!(
        write_enrichment_block(&EntityEnrichment { impact: Some(impact()), ..Default::default() })[3],
        "    before win=0.5 pick=0.1 matches=2800 days=14 total=28000 covered=14 coverage=\"complete\""
    );
}

#[test]
fn refuses_a_window_without_its_coverage_fields() {
    let bare = serde_json::json!({ "win": 0.5, "pick": 0.1, "matches": 2800, "days": 14 });
    let value = serde_json::json!({ "closed": true, "all": { "before": bare, "after": bare }, "high": { "before": bare, "after": bare } });
    assert!(deadlog_changelog::parse_impact(&value).unwrap_err().to_string().contains("Malformed impact block"));
}

#[test]
fn removes_a_block_when_told_there_is_nothing_left() {
    let written = splice(PLAIN, &stats());
    let cleared = splice_impact_blocks(&written, |_| Some(None), Some(&stats())).unwrap();
    assert!(!cleared.contains("impact closed"));
    assert_eq!(parse_structure(&cleared).unwrap().changes[0].groups[0].bullets, vec!["Base damage increased"]);
}

#[test]
fn carries_the_stats_node_through_a_scraper_overwrite() {
    let recorded = splice(PLAIN, &stats());
    let parsed = parse_structure(&carry_enrichment(&recorded, PLAIN).unwrap()).unwrap();
    assert_eq!(parsed.stats, Some(stats()));
    assert_eq!(parsed.changes[0].enrichment.impact, Some(impact()));
}
