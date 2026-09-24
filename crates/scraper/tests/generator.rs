mod common;

use common::{hero, item};
use deadlog_scraper::content::generator::{EntityAssets, build_entity_assets, generate_structured_content};
use deadlog_scraper::content::parser::GroupedContent;

const ABRAMS: [&str; 3] = [
    "Shoulder Charge speed increased by 25%",
    "Shoulder Charge distance increased by 15%",
    "Shoulder Charge now stuns enemies for 1s if it drags them into a wall",
];

fn assets() -> EntityAssets {
    build_entity_assets(
        &[hero(
            1,
            "Abrams",
            Some("https://cdn.example/abrams.webp"),
            ["ability_charge", "missing_two", "missing_three", "missing_four"],
        )],
        &[item(2, "ability_charge", "Shoulder Charge", "ability", "https://cdn.example/charge.webp")],
    )
    .unwrap()
}

fn heroes(name: &str, notes: &[&str]) -> GroupedContent {
    GroupedContent { heroes: vec![(name.into(), notes.iter().map(|n| n.to_string()).collect())], ..Default::default() }
}

#[test]
fn wraps_an_entity_in_a_fenced_block() {
    let out = generate_structured_content(&heroes("Abrams", &ABRAMS[..1]), None);
    let lines: Vec<&str> = out.split('\n').filter(|line| !line.is_empty()).collect();
    assert_eq!(
        lines[lines.len() - 7..],
        [
            "=hero:abrams:",
            "## Abrams",
            "==ability:shoulder-charge:",
            "### Shoulder Charge",
            "- Shoulder Charge speed increased by 25%",
            "==",
            "="
        ]
    );
}

#[test]
fn bakes_portraits_and_links_resolved_entities() {
    let out = generate_structured_content(&heroes("Abrams", &ABRAMS[..1]), Some(&assets()));
    assert!(out.contains("=hero:abrams:\n[[/hero/abrams]](([[!:https://cdn.example/abrams.webp]] Abrams patch history))\n## [[/hero/abrams]]((Abrams))"));
    assert!(out.contains("==ability:shoulder-charge:\n[[/ability/shoulder-charge]](([[!:https://cdn.example/charge.webp]] Shoulder Charge change history))\n### [[/ability/shoulder-charge]]((Shoulder Charge))"));

    let unresolved = generate_structured_content(&heroes("Nobody", &["Base health increased"]), Some(&assets()));
    assert!(
        unresolved.contains("=hero:nobody:\n## Nobody")
            && !unresolved.contains("/hero/nobody")
            && !unresolved.contains("[[!:]]")
    );

    let bare = build_entity_assets(&[hero(4, "Nobody", None, ["", "", "", ""])], &[]).unwrap();
    let out = generate_structured_content(&heroes("Nobody", &["Base health increased"]), Some(&bare));
    assert!(out.contains("=hero:nobody:\n## [[/hero/nobody]]((Nobody))") && !out.contains("[[!:]]"));

    let doorman =
        build_entity_assets(&[hero(3, "The Doorman", Some("https://cdn.example/doorman.webp"), ["", "", "", ""])], &[])
            .unwrap();
    let out = generate_structured_content(&heroes("Doorman", &["Base health increased"]), Some(&doorman));
    assert!(out.contains("## [[/hero/the-doorman]]((Doorman))"));
}

#[test]
fn links_derived_headings_only_when_they_resolve() {
    let linked = generate_structured_content(&heroes("Abrams", &["Shoulder Charge Cooldown reduced"]), Some(&assets()));
    assert!(linked.contains("### [[/ability/shoulder-charge]]((Shoulder Charge Cooldown))"));
    let unresolved =
        generate_structured_content(&heroes("Abrams", &["Can now be cast while airborne"]), Some(&assets()));
    assert!(unresolved.contains("### Can") && !unresolved.contains("ability=can"));
}

#[test]
fn an_ability_typed_entity_is_not_an_item_route() {
    let assets =
        build_entity_assets(&[], &[item(5, "ability_golden_idol", "Soul Urn", "ability", "/soul-urn.png")]).unwrap();
    let grouped = GroupedContent {
        items: vec![("Soul Urn".into(), vec!["Carrier resistance reduced".into()])],
        ..Default::default()
    };
    let out = generate_structured_content(&grouped, Some(&assets));
    assert!(out.contains("=item:soul-urn:\n## Soul Urn") && !out.contains("/item/soul-urn"));
}

#[test]
fn writes_no_ids_and_closes_every_block() {
    let out = generate_structured_content(&heroes("Abrams", &ABRAMS), None);
    let opens: Vec<&str> = out.split('\n').filter(|l| l.starts_with("==ability:")).collect();
    assert_eq!(opens, ["==ability:shoulder-charge:", "==ability:shoulder-charge:"]);
    assert!(!out.contains("id="));
    let grouped = GroupedContent {
        heroes: vec![("Abrams".into(), ABRAMS.map(String::from).to_vec())],
        items: vec![("Metal Skin".into(), vec!["Cooldown increased".into()])],
        ..Default::default()
    };
    let out = generate_structured_content(&grouped, None);
    let lines: Vec<&str> = out.split('\n').collect();
    let count = |f: &dyn Fn(&str) -> bool| lines.iter().filter(|l| f(l)).count();
    assert_eq!(
        count(&|l| l.starts_with('=') && l.as_bytes().get(1).is_some_and(u8::is_ascii_lowercase)),
        count(&|l| l == "=")
    );
    assert_eq!(
        count(&|l| l.starts_with("==") && l.as_bytes().get(2).is_some_and(u8::is_ascii_lowercase)),
        count(&|l| l == "==")
    );
}

fn general(notes: &[&str]) -> GroupedContent {
    GroupedContent { general: notes.iter().map(|n| n.to_string()).collect(), ..Default::default() }
}

#[test]
fn video_links_become_embeds() {
    let video = "[[https://f.example/bounce_update-mp4.1/]]((View attachment bounce_update.mp4))";
    let out = generate_structured_content(&general(&[video]), None);
    assert!(out.contains("<VideoLink src=\"https://f.example/bounce_update-mp4.1/\" label=\"bounce update\" />"));
    assert!(!out.contains("- [[https://") && !out.contains("poster"));
    let link =
        generate_structured_content(&general(&["[[https://store.example/news/1]]((Patch notes on Steam))"]), None);
    assert!(link.contains("- [[https://store.example/news/1]]((Patch notes on Steam))") && !link.contains("VideoLink"));
    let bare = generate_structured_content(&general(&["[[https://f.example/a-mp4.1/]]((View attachment .mp4))"]), None);
    assert!(bare.contains("label=\"clip\""));
    let both = generate_structured_content(&general(&["[[!:https://cdn.example/s.jpg]]((caption))", video]), None);
    assert!(
        both.contains("[[!:https://cdn.example/s.jpg]]((caption))")
            && both.contains("<VideoLink src=\"https://f.example/bounce_update-mp4.1/\"")
    );
}

#[test]
fn escapes_prose_delimiters_but_not_links() {
    let out = generate_structured_content(
        &general(&["Reload ~~2.5s~~ now 2.0s", "[[https://x.example/a]]((View attachment clip.mp4))"]),
        None,
    );
    assert!(out.contains("- Reload \\~~2.5s\\~~ now 2.0s"));
    assert!(out.contains("- [[https://x.example/a]]((View attachment clip.mp4))"));
}
