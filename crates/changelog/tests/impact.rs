mod common;

use common::window;
use deadlog_changelog::{EntityEnrichment, parse_impact, parse_structure, write_enrichment_block};
use deadlog_model::{EntityImpact, TierImpact};

fn closed() -> EntityImpact {
    EntityImpact {
        closed: true,
        all: TierImpact {
            before: window(Some(0.505), Some(0.338), [21734.0, 14.0, 260808.0, 14.0], "complete"),
            after: window(Some(0.524), Some(0.3381), [21305.0, 14.0, 255660.0, 14.0], "complete"),
        },
        high: TierImpact {
            before: window(Some(0.497), Some(0.377), [1301.0, 14.0, 15612.0, 14.0], "complete"),
            after: window(None, None, [926.0, 2.0, 11112.0, 2.0], "complete"),
        },
    }
}

fn open() -> EntityImpact {
    let empty = window(None, None, [0.0; 4], "complete");
    EntityImpact {
        closed: false,
        all: TierImpact {
            before: window(Some(0.5), Some(1.0), [2800.0, 14.0, 33600.0, 14.0], "complete"),
            after: empty.clone(),
        },
        high: TierImpact { before: empty.clone(), after: empty },
    }
}

fn block(impact: EntityImpact) -> Vec<String> {
    write_enrichment_block(&EntityEnrichment { impact: Some(impact), ..Default::default() })
}

fn in_block(attr: &[String]) -> String {
    let mut lines = vec!["=hero:abrams:".to_string()];
    lines.extend_from_slice(attr);
    lines.extend(["## Abrams", "- Change", "=", ""].map(String::from));
    lines.join("\n")
}

#[test]
fn writes_the_fixed_shape_between_verbatim_fences() {
    assert_eq!(
        block(closed()),
        [
            "``attr:",
            "impact closed=#true {",
            "  all {",
            "    before win=0.505 pick=0.338 matches=21734 days=14 total=260808 covered=14 coverage=\"complete\"",
            "    after win=0.524 pick=0.3381 matches=21305 days=14 total=255660 covered=14 coverage=\"complete\"",
            "  }",
            "  high {",
            "    before win=0.497 pick=0.377 matches=1301 days=14 total=15612 covered=14 coverage=\"complete\"",
            "    after win=#null pick=#null matches=926 days=2 total=11112 covered=2 coverage=\"complete\"",
            "  }",
            "}",
            "``",
        ]
    );
}

#[test]
fn round_trips_through_the_mog_parser_nulls_and_zeroes_included() {
    for impact in [closed(), open()] {
        let parsed = parse_structure(&in_block(&block(impact.clone()))).unwrap();
        assert_eq!(parsed.changes[0].enrichment.impact, Some(impact));
    }
}

#[test]
fn rejects_corrupt_blocks() {
    let replace =
        |lines: Vec<String>, from: &str, to: &str| lines.into_iter().map(|line| line.replace(from, to)).collect();
    let edits: Vec<(&str, Box<dyn Fn(Vec<String>) -> Vec<String>>)> = vec![
        ("an unknown key", Box::new(move |l| replace(l, "days=", "dayz="))),
        (
            "a missing window",
            Box::new(|l: Vec<String>| l.into_iter().filter(|x| !x.contains("after win=0.524")).collect()),
        ),
        (
            "an extra tier",
            Box::new(|l: Vec<String>| {
                let mut out = l[..l.len() - 2].to_vec();
                out.extend(["  low {", "  }", "}", "``"].map(String::from));
                out
            }),
        ),
        ("a fractional match count", Box::new(move |l| replace(l, "21734", "2.5"))),
        ("a null match count", Box::new(move |l| replace(l, "matches=926", "matches=#null"))),
        ("a non-numeric rate", Box::new(move |l| replace(l, "win=0.505", "win=\"x\""))),
        ("a missing closed flag", Box::new(move |l| replace(l, " closed=#true", ""))),
        ("invalid KDL", Box::new(|l: Vec<String>| l.into_iter().filter(|x| x != "}").collect())),
        (
            "a second key beside impact",
            Box::new(|l: Vec<String>| {
                let mut out = l[..l.len() - 1].to_vec();
                out.extend(["note \"x\"", "``"].map(String::from));
                out
            }),
        ),
    ];
    for (name, edit) in edits {
        let error = parse_structure(&in_block(&edit(block(closed())))).unwrap_err().to_string();
        assert!(
            error.contains("Malformed impact block") || error.contains("holds only impact, related"),
            "{name}: {error}"
        );
    }
}

#[test]
fn rejects_two_attr_blocks_on_one_entity() {
    let twice = [block(closed()), block(open())].concat();
    let error = parse_structure(&in_block(&twice)).unwrap_err().to_string();
    assert!(error.contains("one attr block"), "{error}");
}

#[test]
fn names_what_is_wrong_with_a_value() {
    let error = parse_impact(&serde_json::json!({ "closed": true })).unwrap_err().to_string();
    assert!(error.contains("Malformed impact block"), "{error}");
}
