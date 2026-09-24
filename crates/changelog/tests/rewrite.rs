mod common;

use common::{impact, lines};
use deadlog_changelog::{
    EntityEnrichment, carry_enrichment, parse_structure, splice_impact_blocks, write_enrichment_block,
};
use deadlog_model::{EntityImpact, EntityType};

fn generated() -> String {
    lines(&[
        "``attr:",
        "title \"Patch\"",
        "``",
        "",
        "=hero:doorman:",
        "## The Doorman",
        "- Base damage increased",
        "=",
        "=item:tesla-bullets:",
        "## Tesla Bullets",
        "- Proc chance increased",
        "=",
        "",
    ])
}

fn impacts_in(text: &str) -> Vec<Option<EntityImpact>> {
    parse_structure(text).unwrap().changes.into_iter().map(|change| change.enrichment.impact).collect()
}

fn with_stats() -> String {
    splice_impact_blocks(&generated(), |_| Some(Some(impact())), None).unwrap()
}

#[test]
fn writes_under_the_fence_of_each_block_the_callback_answers_for() {
    let next =
        splice_impact_blocks(&generated(), |block| (block.kind == EntityType::Item).then(|| Some(impact())), None)
            .unwrap();
    assert_eq!(impacts_in(&next), vec![None, Some(impact())]);
    assert_eq!(next.split('\n').nth(9), Some("``attr:"));
}

#[test]
fn restores_recorded_blocks_onto_a_plain_regeneration() {
    assert_eq!(carry_enrichment(&with_stats(), &generated()).unwrap(), with_stats());
}

#[test]
fn follows_an_entity_whose_fence_slug_or_heading_markup_changed() {
    let regenerated = generated()
        .replace("=hero:doorman:", "=hero:the-doorman:")
        .replace("## The Doorman", "## [[/hero/the-doorman]]((Doorman))");
    assert_eq!(impacts_in(&carry_enrichment(&with_stats(), &regenerated).unwrap())[0], Some(impact()));
}

#[test]
fn drops_the_block_of_an_entity_the_regeneration_no_longer_has() {
    let without_item = generated().split('\n').take(8).collect::<Vec<_>>().join("\n") + "\n";
    let next = carry_enrichment(&with_stats(), &without_item).unwrap();
    assert_eq!(impacts_in(&next), vec![Some(impact())]);
    assert_eq!(next.matches("``attr:").count(), 2);
}

#[test]
fn returns_the_new_text_untouched_when_nothing_was_recorded() {
    assert_eq!(carry_enrichment(&generated(), &generated()).unwrap(), generated());
}

#[test]
fn keeps_a_block_the_new_text_already_carries() {
    let other = EntityImpact { closed: false, ..impact() };
    let already = splice_impact_blocks(&generated(), |_| Some(Some(other.clone())), None).unwrap();
    assert_eq!(impacts_in(&carry_enrichment(&with_stats(), &already).unwrap()), vec![Some(other.clone()), Some(other)]);
}

#[test]
fn writes_exactly_the_lines_of_the_block_writer() {
    let carried = carry_enrichment(&with_stats(), &generated()).unwrap();
    let lines: Vec<&str> = carried.split('\n').collect();
    assert_eq!(
        lines[5..17],
        write_enrichment_block(&EntityEnrichment { impact: Some(impact()), ..Default::default() })[..]
    );
}
