mod common;

use common::{impact, lines};
use deadlog_changelog::{
    EntityBulletGroup, EntityEnrichment, TocEntry, extract_entities, extract_entity_changes, parse_structure,
    write_enrichment_block,
};
use deadlog_model::EntityType;

fn group(ability: Option<&str>, bullets: &[&str]) -> EntityBulletGroup {
    EntityBulletGroup { ability: ability.map(str::to_string), bullets: bullets.iter().map(|b| b.to_string()).collect() }
}

fn summary(content: &str) -> Vec<(String, EntityType, Vec<EntityBulletGroup>)> {
    extract_entity_changes(content)
        .unwrap()
        .into_iter()
        .map(|change| (change.name, change.kind, change.groups))
        .collect()
}

#[test]
fn groups_bullets_per_ability_section_within_an_entity() {
    let content = lines(&[
        "# Hero Changes",
        "=hero:doorman:",
        "[[/hero/doorman]](([[!:https://cdn.example/doorman.webp]] Doorman patch history))",
        "## [[/hero/doorman]]((Doorman))",
        "- Base damage increased",
        "==ability:call-bell:",
        "### [[/hero/doorman?ability=call-bell]]((Call Bell))",
        "- Cooldown reduced",
        "- Radius increased",
        "==",
        "=",
        "=item:tesla-bullets:",
        "## [[/item/tesla-bullets]]((Tesla Bullets))",
        "- Proc chance increased",
        "=",
    ]);
    assert_eq!(
        summary(&content),
        vec![
            (
                "Doorman".into(),
                EntityType::Hero,
                vec![
                    group(None, &["Base damage increased"]),
                    group(Some("Call Bell"), &["Cooldown reduced", "Radius increased"])
                ]
            ),
            ("Tesla Bullets".into(), EntityType::Item, vec![group(None, &["Proc chance increased"])]),
        ]
    );
    let parsed = parse_structure(&content).unwrap();
    let bullets: Vec<_> = parsed
        .bullets
        .iter()
        .map(|b| (b.name.as_str(), b.ability.as_deref(), b.group_index, b.bullet_index, b.start_line))
        .collect();
    assert_eq!(
        bullets,
        vec![
            ("Doorman", None, 0, 0, 4),
            ("Doorman", Some("Call Bell"), 1, 0, 7),
            ("Doorman", Some("Call Bell"), 1, 1, 8),
            ("Tesla Bullets", None, 0, 0, 13),
        ]
    );
    let blocks: Vec<_> = parsed
        .reading_blocks
        .iter()
        .map(|b| (b.kind, b.name.as_str(), b.ability.as_deref(), b.start_line, b.end_line, b.depth))
        .collect();
    assert_eq!(
        blocks,
        vec![
            (EntityType::Hero, "Doorman", Some("Call Bell"), 5, 9, 2),
            (EntityType::Item, "Tesla Bullets", None, 11, 14, 1),
        ]
    );
}

#[test]
fn merges_repeated_article_aliases_and_decodes_entity_names() {
    let content = "\n=hero:doorman:\n## The Doorman\n- First change\n=\n=hero:doorman:\n## Doorman\n- Second change\n=\n=hero:mo-krill:\n## Mo &amp; Krill\n- Third change\n=\n";
    assert_eq!(
        summary(content),
        vec![
            ("The Doorman".into(), EntityType::Hero, vec![group(None, &["First change", "Second change"])]),
            ("Mo & Krill".into(), EntityType::Hero, vec![group(None, &["Third change"])]),
        ]
    );
}

#[test]
fn stops_attributing_bullets_at_a_new_top_level_section() {
    let content = "\n=hero:abrams:\n## Abrams\n- Counted\n- Also counted\n=\n# Item Changes\n- Not counted, a new top-level section\n";
    assert_eq!(
        summary(content),
        vec![("Abrams".into(), EntityType::Hero, vec![group(None, &["Counted", "Also counted"])])]
    );
}

#[test]
fn keeps_an_explicit_empty_list() {
    assert_eq!(summary("=hero:abrams:\n## Abrams\n="), vec![("Abrams".into(), EntityType::Hero, vec![])]);
}

#[test]
fn reads_entities_off_the_toc_by_their_heading_attribute() {
    let entry = |level, title: &str, attrs: &[&str]| TocEntry {
        level,
        title: title.into(),
        attrs: attrs.iter().map(|a| a.to_string()).collect(),
    };
    let entities = extract_entities(&[
        entry(1, "Hero Changes", &[]),
        entry(2, "Doorman", &["hero", "doorman"]),
        entry(3, "Call Bell", &["ability"]),
        entry(2, "Tesla Bullets", &["item", "tesla-bullets"]),
    ]);
    assert_eq!(entities.heroes, vec!["Doorman"]);
    assert_eq!(entities.items, vec!["Tesla Bullets"]);
}

fn plain() -> Vec<String> {
    [
        "# Hero Changes",
        "=hero:doorman:",
        "## [[/hero/the-doorman]]((The Doorman))",
        "- Base damage increased",
        "==ability:call-bell:",
        "### Call Bell",
        "- Cooldown reduced",
        "==",
        "=",
        "=item:tesla-bullets:",
        "## Tesla Bullets",
        "- Proc chance increased",
        "=",
    ]
    .map(String::from)
    .to_vec()
}

fn attr() -> Vec<String> {
    write_enrichment_block(&EntityEnrichment { impact: Some(impact()), ..Default::default() })
}

fn with_impact() -> Vec<String> {
    let plain = plain();
    [&plain[..2], &attr(), &plain[2..10], &attr(), &plain[10..]].concat()
}

#[test]
fn captures_a_block_onto_its_hero_and_item() {
    let bare = parse_structure(&plain().join("\n")).unwrap();
    let parsed = parse_structure(&with_impact().join("\n")).unwrap();
    let impacts: Vec<_> = parsed.changes.iter().map(|change| change.enrichment.impact.clone()).collect();
    assert_eq!(impacts, vec![Some(impact()), Some(impact())]);
    let stripped: Vec<_> = parsed
        .changes
        .iter()
        .cloned()
        .map(|mut change| {
            change.enrichment = EntityEnrichment::default();
            change
        })
        .collect();
    assert_eq!(stripped, bare.changes);
    assert_eq!(parsed.toc, bare.toc);
}

#[test]
fn reports_each_block_by_heading_name_with_its_fence_and_attr_lines() {
    let text = with_impact();
    let blocks = parse_structure(&text.join("\n")).unwrap().blocks;
    let summary: Vec<_> = blocks.iter().map(|b| (b.name.as_str(), b.kind, b.fence_line, b.attribute_lines)).collect();
    assert_eq!(
        summary,
        vec![
            ("The Doorman", EntityType::Hero, 1, Some((2, 13))),
            ("Tesla Bullets", EntityType::Item, 21, Some((22, 33))),
        ]
    );
    assert!(blocks[0].enrichment.impact.is_some() && blocks[0].enrichment.related.is_none());
    assert_eq!(text[blocks[0].fence_line], "=hero:doorman:");
    let bare = &parse_structure(&plain().join("\n")).unwrap().blocks[1];
    assert_eq!((bare.name.as_str(), bare.fence_line, bare.attribute_lines), ("Tesla Bullets", 9, None));
    assert!(bare.enrichment.is_empty());
}

#[test]
fn merges_a_root_level_block_into_metadata() {
    let parsed = parse_structure(&[attr(), vec![String::new()], plain()].concat().join("\n")).unwrap();
    assert!(parsed.metadata.contains_key("impact"));
    assert_eq!(parsed.changes, parse_structure(&plain().join("\n")).unwrap().changes);
}

#[test]
fn rejects_a_misplaced_block() {
    for at in [5, 3, 12] {
        let plain = plain();
        let misplaced = [&plain[..at], &attr(), &plain[at..]].concat();
        let error = parse_structure(&misplaced.join("\n")).unwrap_err().to_string();
        assert!(error.contains("not directly under a hero or item fence"), "{at}: {error}");
    }
}

#[test]
fn keeps_the_first_block_when_an_entity_appears_twice() {
    let twice = [
        with_impact(),
        vec!["=hero:doorman:".into()],
        attr(),
        ["## The Doorman", "- Again", "="].map(String::from).to_vec(),
    ]
    .concat();
    let parsed = parse_structure(&twice.join("\n")).unwrap();
    assert_eq!(parsed.blocks.iter().filter(|block| block.name == "The Doorman").count(), 1);
    assert!(parsed.changes[0].groups.last().unwrap().bullets.contains(&"Again".to_string()));
}

#[test]
fn propagates_a_malformed_block() {
    let plain = plain();
    let broken = [&plain[1..2], &["``attr:".into(), "impact {".into(), "``".into()], &plain[2..]].concat();
    let error = parse_structure(&broken.join("\n")).unwrap_err().to_string();
    assert!(error.contains("Malformed impact block"), "{error}");
}
