use std::collections::HashMap;

use deadlog_changelog::parse_structure;
use deadlog_model::{EntityImpact, ImpactWindow, TierImpact};
use deadlog_stats::rewrite::{Entities, EntityIndex, NamedEntity, upsert_impact_blocks};
use deadlog_stats::types::EntityKind;
use deadlog_stats::windows::SlicedImpact;

fn window() -> ImpactWindow {
    ImpactWindow {
        win: Some(0.5),
        pick: Some(0.1),
        matches: 2800.0,
        days: 14.0,
        total: 33600.0,
        covered: 14.0,
        coverage: "complete".into(),
        buy: None,
    }
}

fn impact_with(win: f64, closed: bool) -> EntityImpact {
    EntityImpact {
        closed,
        all: TierImpact { before: window(), after: ImpactWindow { win: Some(win), ..window() } },
        high: TierImpact {
            before: window(),
            after: ImpactWindow {
                win: None,
                pick: None,
                matches: 12.0,
                days: 2.0,
                total: 144.0,
                covered: 2.0,
                coverage: "complete".into(),
                buy: None,
            },
        },
    }
}

fn named(id: i64, name: &str) -> NamedEntity {
    NamedEntity { id, name: name.into() }
}

fn index() -> EntityIndex {
    EntityIndex::new(&Entities {
        hero: vec![named(69, "The Doorman"), named(1, "Infernus")],
        item: vec![named(500, "Diviner's Kevlar")],
    })
}

const SOURCE: &str = "``attr:
title \"Patch\"
content_text \"Doorman Base damage increased\"
``

# Hero Changes
=hero:doorman:
[[/hero/the-doorman]](([[!:https://cdn.example/d.webp]] Doorman patch history))
## [[/hero/the-doorman]]((The Doorman))
- Base damage increased
==ability:call-bell:
### Call Bell
- Cooldown reduced
==
=
=hero:infernus:
## Infernus
- Afterburn reduced
=
# Item Changes
=item:diviner-s-kevlar:
## Diviner's Kevlar
- Now grants cooldown reduction
=
";

fn doorman() -> SlicedImpact {
    SlicedImpact { kind: EntityKind::Hero, id: 69, impact: impact_with(0.52, true) }
}

fn kevlar() -> SlicedImpact {
    SlicedImpact { kind: EntityKind::Item, id: 500, impact: impact_with(0.61, false) }
}

fn upsert(source: &str, impacts: &[SlicedImpact]) -> anyhow::Result<String> {
    upsert_impact_blocks(source, impacts, &index(), None, false)
}

fn impacts_in(text: &str) -> HashMap<String, Option<EntityImpact>> {
    parse_structure(text).unwrap().changes.into_iter().map(|change| (change.name, change.enrichment.impact)).collect()
}

#[test]
fn a_block_goes_directly_under_the_fence_found_by_heading_name() {
    let next = upsert(SOURCE, &[doorman()]).unwrap();
    let lines: Vec<&str> = next.split('\n').collect();
    let fence = lines.iter().position(|line| *line == "=hero:doorman:").unwrap();
    assert_eq!(lines[fence + 1], "``attr:");
    assert_eq!(lines[fence + 2], "impact closed=#true {");
    assert_eq!(
        impacts_in(&next),
        HashMap::from([
            ("The Doorman".to_string(), Some(doorman().impact)),
            ("Infernus".to_string(), None),
            ("Diviner's Kevlar".to_string(), None),
        ])
    );
}

#[test]
fn several_entities_are_written_in_one_pass_and_everything_else_keeps_its_bytes() {
    let next = upsert(SOURCE, &[kevlar(), doorman()]).unwrap();
    let impacts = impacts_in(&next);
    assert_eq!(impacts["Diviner's Kevlar"], Some(kevlar().impact));
    assert_eq!(impacts["The Doorman"], Some(doorman().impact));

    let lines: Vec<&str> = next.split('\n').collect();
    let mut kept = Vec::new();
    let mut inside = false;
    for (index, line) in lines.iter().enumerate() {
        if index > 3 && *line == "``attr:" {
            inside = true;
        }
        if !inside {
            kept.push(*line);
        }
        if inside && *line == "``" {
            inside = false;
        }
    }
    assert_eq!(kept.join("\n"), SOURCE);
}

#[test]
fn an_existing_block_is_replaced_not_duplicated() {
    let first = upsert(SOURCE, &[doorman()]).unwrap();
    let second = upsert(&first, &[SlicedImpact { impact: impact_with(0.55, true), ..doorman() }]).unwrap();
    assert_eq!(second.split('\n').filter(|line| *line == "``attr:").count(), 2);
    assert_eq!(impacts_in(&second)["The Doorman"], Some(impact_with(0.55, true)));
    assert_eq!(second.split('\n').count(), first.split('\n').count());
}

#[test]
fn it_is_idempotent() {
    let once = upsert(SOURCE, &[doorman(), kevlar()]).unwrap();
    assert_eq!(upsert(&once, &[doorman(), kevlar()]).unwrap(), once);
}

#[test]
fn the_front_matter_is_untouched() {
    let next = upsert(SOURCE, &[doorman()]).unwrap();
    assert_eq!(next.split('\n').take(4).collect::<Vec<_>>(), SOURCE.split('\n').take(4).collect::<Vec<_>>());
}

#[test]
fn a_requested_entity_without_a_block_is_an_error() {
    let missing = SlicedImpact { kind: EntityKind::Hero, id: 2, impact: impact_with(0.5, true) };
    let error = upsert(SOURCE, &[missing]).unwrap_err();
    assert!(error.to_string().contains("hero:2"), "{error}");
}

#[test]
fn a_malformed_existing_block_is_an_error_rather_than_written_beside() {
    let broken = SOURCE.replace("=hero:infernus:", "=hero:infernus:\n``attr:\nimpact {\n``");
    let infernus = SlicedImpact { kind: EntityKind::Hero, id: 1, impact: impact_with(0.5, true) };
    let error = upsert(&broken, &[infernus]).unwrap_err();
    assert!(format!("{error:#}").contains("Malformed"), "{error:#}");
}

#[test]
fn crlf_input_is_refused() {
    let error = upsert(&SOURCE.replace('\n', "\r\n"), &[doorman()]).unwrap_err();
    assert!(error.to_string().contains("CRLF"));
}

#[test]
fn remove_others_clears_a_recorded_impact_nobody_asked_for() {
    let both = upsert(SOURCE, &[doorman(), kevlar()]).unwrap();
    let next = upsert_impact_blocks(&both, &[doorman()], &index(), None, true).unwrap();
    let impacts = impacts_in(&next);
    assert_eq!(impacts["The Doorman"], Some(doorman().impact));
    assert_eq!(impacts["Diviner's Kevlar"], None);
}
