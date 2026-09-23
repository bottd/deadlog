mod common;

use common::lines;
use deadlog_changelog::{
    EnrichmentUpdate, EntityEnrichment, carry_enrichment, parse_enrichment, parse_structure, splice_entity_blocks,
    splice_impact_blocks, write_enrichment_block,
};
use deadlog_model::{
    AbilityOrder, AbilityOrderEntry, BoughtBy, BoughtByHero, EntityImpact, EntityType, RelatedItem, RelatedItems,
    TierImpact,
};

fn impact() -> EntityImpact {
    let window = common::standard();
    EntityImpact {
        closed: true,
        all: TierImpact { before: window.clone(), after: window.clone() },
        high: TierImpact { before: window.clone(), after: window },
    }
}

fn related() -> RelatedItems {
    RelatedItems {
        method_version: 1,
        status: "complete".into(),
        appearances: 205_924.0,
        after_appearances: None,
        candidates: vec![1710079648, 3696726732],
        items: vec![
            RelatedItem { id: 3696726732, buyers: 61_000.0, after: None },
            RelatedItem { id: 1710079648, buyers: 2200.0, after: None },
        ],
    }
}

fn source() -> String {
    lines(&[
        "``attr:",
        "title \"Patch\"",
        "``",
        "",
        "=hero:doorman:",
        "## The Doorman",
        "- Base damage increased",
        "=",
        "=item:toxic-bullets:",
        "## Toxic Bullets",
        "- Bleed increased",
        "=",
        "",
    ])
}

fn hero(text: &str) -> EntityEnrichment {
    parse_structure(text).unwrap().blocks[0].enrichment.clone()
}

fn only_hero(update: EnrichmentUpdate) -> impl FnMut(&deadlog_changelog::EntityBlock) -> Option<EnrichmentUpdate> {
    move |block| (block.kind == EntityType::Hero).then(|| update.clone())
}

fn related_update(related: RelatedItems) -> EnrichmentUpdate {
    EnrichmentUpdate { related: Some(Some(related)), ..Default::default() }
}

#[test]
fn round_trips_related_items() {
    let written = splice_entity_blocks(&source(), only_hero(related_update(related())), None).unwrap();
    assert_eq!(hero(&written), EntityEnrichment { related: Some(related()), ..Default::default() });
    assert_eq!(parse_structure(&written).unwrap().changes[0].enrichment.related, Some(related()));
}

#[test]
fn stores_an_empty_result_explicitly_as_one_line() {
    let empty = RelatedItems { status: "insufficient-sample".into(), items: vec![], ..related() };
    let written = splice_entity_blocks(&source(), only_hero(related_update(empty.clone())), None).unwrap();
    assert!(written.contains(
        "related method=1 status=\"insufficient-sample\" appearances=205924 candidates=\"1710079648,3696726732\"\n``"
    ));
    assert_eq!(hero(&written).related, Some(empty));
}

#[test]
fn updates_one_field_without_touching_the_other() {
    let both = splice_entity_blocks(
        &source(),
        only_hero(EnrichmentUpdate { impact: Some(Some(impact())), related: Some(Some(related())), ..Default::default() }),
        None,
    )
    .unwrap();
    let moved = EntityImpact { closed: false, ..impact() };
    let next = splice_impact_blocks(&both, |block| (block.kind == EntityType::Hero).then(|| Some(moved.clone())), None)
        .unwrap();
    assert_eq!(hero(&next), EntityEnrichment { impact: Some(moved), related: Some(related()), ..Default::default() });
    assert_eq!(next.matches("``attr:").count(), 2);
}

#[test]
fn deletes_only_the_field_it_is_told_to() {
    let both = splice_entity_blocks(&source(), |_| Some(EnrichmentUpdate { impact: Some(Some(impact())), ..Default::default() }), None).unwrap();
    let with_related = splice_entity_blocks(&both, only_hero(related_update(related())), None).unwrap();
    let no_impact =
        splice_entity_blocks(&with_related, |_| Some(EnrichmentUpdate { impact: Some(None), ..Default::default() }), None)
            .unwrap();
    assert_eq!(hero(&no_impact), EntityEnrichment { related: Some(related()), ..Default::default() });
    let bare =
        splice_entity_blocks(&no_impact, |_| Some(EnrichmentUpdate { related: Some(None), ..Default::default() }), None)
            .unwrap();
    assert_eq!(bare, source());
}

#[test]
fn writes_impact_before_related_whatever_order_they_arrive_in() {
    let first = splice_entity_blocks(&source(), only_hero(related_update(related())), None).unwrap();
    let second = splice_entity_blocks(
        &first,
        only_hero(EnrichmentUpdate { impact: Some(Some(impact())), ..Default::default() }),
        None,
    )
    .unwrap();
    let together = splice_entity_blocks(
        &source(),
        only_hero(EnrichmentUpdate { impact: Some(Some(impact())), related: Some(Some(related())), ..Default::default() }),
        None,
    )
    .unwrap();
    assert_eq!(second, together);
    assert!(second.find("impact closed").unwrap() < second.find("related method").unwrap());
}

#[test]
fn refuses_related_on_an_item_unknown_keys_and_malformed_values() {
    let everywhere = splice_entity_blocks(&source(), |_| Some(related_update(related())), None).unwrap();
    let error = parse_structure(&everywhere).unwrap_err().to_string();
    assert!(error.contains("Toxic Bullets: only a hero block takes related"), "{error}");

    let written = splice_entity_blocks(&source(), only_hero(related_update(related())), None).unwrap();
    for (from, to, expected) in [
        ("buyers=61000", "buyers=-1", "Malformed related block"),
        ("item-3696726732", "thing-1", "unknown key \"thing-1\""),
        ("status=\"complete\"", "status=\"unavailable\"", "Malformed related block"),
    ] {
        let error = parse_structure(&written.replace(from, to)).unwrap_err().to_string();
        assert!(error.contains(expected), "{error}");
    }
}

#[test]
fn carries_both_fields_through_a_scraper_overwrite() {
    let recorded = splice_entity_blocks(
        &source(),
        |block| {
            Some(if block.kind == EntityType::Hero {
                EnrichmentUpdate { impact: Some(Some(impact())), related: Some(Some(related())), ..Default::default() }
            } else {
                EnrichmentUpdate { impact: Some(Some(impact())), ..Default::default() }
            })
        },
        None,
    )
    .unwrap();
    assert_eq!(carry_enrichment(&recorded, &source()).unwrap(), recorded);
}

#[test]
fn leaves_bullets_and_metadata_byte_for_byte() {
    let written = splice_entity_blocks(&source(), |_| Some(EnrichmentUpdate { impact: Some(Some(impact())), ..Default::default() }), None).unwrap();
    assert!(written.contains("- Base damage increased"));
    assert!(written.starts_with("``attr:\ntitle \"Patch\"\n``\n"));
}

#[test]
fn round_trips_related_after_counts_ability_order_and_bought_by() {
    let hero = EntityEnrichment {
        related: Some(RelatedItems {
            method_version: 2,
            status: "complete".into(),
            appearances: 206_094.0,
            after_appearances: Some(52_850.0),
            candidates: vec![7, 8],
            items: vec![RelatedItem { id: 7, buyers: 67_786.0, after: Some(25_796.0) }],
        }),
        order: Some(AbilityOrder {
            method_version: 1,
            matches: 208_194.0,
            after_matches: Some(52_850.0),
            abilities: vec![
                AbilityOrderEntry { id: 11, before: 156_279.0, after: Some(41_000.0) },
                AbilityOrderEntry { id: 12, before: 3427.0, after: Some(800.0) },
            ],
        }),
        ..Default::default()
    };
    let item = EntityEnrichment {
        bought: Some(BoughtBy {
            method_version: 1,
            heroes: vec![
                BoughtByHero {
                    id: 6,
                    buyers: 68_587.0,
                    appearances: 208_159.0,
                    after_buyers: Some(25_796.0),
                    after_appearances: Some(52_850.0),
                },
                BoughtByHero { id: 7, buyers: 2000.0, appearances: 9000.0, after_buyers: None, after_appearances: None },
            ],
        }),
        ..Default::default()
    };
    assert!(write_enrichment_block(&hero).contains(&"order method=1 matches=208194 after-matches=52850 {".to_string()));
    let item_lines = write_enrichment_block(&item);
    assert_eq!(
        item_lines[1..item_lines.len() - 1].join("\n"),
        [
            "bought method=1 {",
            "  hero-6 buyers=68587 appearances=208159 after-buyers=25796 after-appearances=52850",
            "  hero-7 buyers=2000 appearances=9000",
            "}",
        ]
        .join("\n")
    );
    let plain = serde_json::json!({
        "order": {
            "method": 1, "matches": 208_194, "after-matches": 52_850,
            "ability-11": { "before": 156_279, "after": 41_000 },
            "ability-12": { "before": 3427, "after": 800 }
        }
    });
    assert_eq!(
        parse_enrichment(plain.as_object(), EntityType::Hero).unwrap(),
        EntityEnrichment { order: hero.order.clone(), ..Default::default() }
    );
    let bought = serde_json::json!({ "bought": { "method": 1 } });
    let error = parse_enrichment(bought.as_object(), EntityType::Hero).unwrap_err().to_string();
    assert!(error.contains("only an item block takes bought"), "{error}");
    let unpaired = serde_json::json!({ "order": { "method": 1, "matches": 10, "ability-1": { "before": 2, "after": 1 } } });
    let error = parse_enrichment(unpaired.as_object(), EntityType::Hero).unwrap_err().to_string();
    assert!(error.contains("after counts need an after total"), "{error}");

    let text = splice_entity_blocks(
        &source(),
        |block| Some(if block.kind == EntityType::Hero { hero.clone().into() } else { item.clone().into() }),
        None,
    )
    .unwrap();
    let blocks = parse_structure(&text).unwrap().blocks;
    assert_eq!(blocks[0].enrichment, hero);
    assert_eq!(blocks[1].enrichment, item);
}
