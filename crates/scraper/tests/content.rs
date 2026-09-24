use deadlog_scraper::author::parse_author_name;
use deadlog_scraper::content::capture_version::{VersionCapture, with_captured_version};
use deadlog_scraper::content::parser::{EntityLists, deduplicate_lines, extract_content, parse_and_group_content};

fn wrap(inner: &str) -> String {
    format!("<div class=\"bbWrapper\">{inner}</div>")
}

#[test]
fn links_become_mog_markup() {
    assert_eq!(
        extract_content(&wrap("<a href=\"https://x.example/a\">View attachment clip.mp4</a>")).unwrap(),
        "[[https://x.example/a]]((View attachment clip.mp4))"
    );
    assert_eq!(
        extract_content(&wrap("<a href=\"https://x.example/a\"></a>")).unwrap(),
        "[[https://x.example/a]]((https://x.example/a))"
    );
    for href in ["javascript:alert(1)", "data:text/html,x", "/relative"] {
        assert_eq!(extract_content(&wrap(&format!("<a href=\"{href}\">click</a>"))).unwrap(), "click");
    }
}

#[test]
fn images_share_the_link_allowlist() {
    assert_eq!(extract_content(&wrap("<img src=\"javascript:alert(1)\" alt=\"x.jpg\">")).unwrap(), "x");
    assert_eq!(extract_content(&wrap("<img src=\"https://x.example/a(1).jpg\" alt=\"s.jpg\">")).unwrap(), "s");
    assert_eq!(
        extract_content(&wrap("<img src=\"https://x.example/a.jpg\" alt=\"a((b)).jpg\">")).unwrap(),
        "[[!:https://x.example/a.jpg]]((ab))"
    );
}

fn entities() -> EntityLists {
    EntityLists { heroes: ["abrams".to_string()].into(), items: ["tesla bullets".to_string()].into() }
}

#[test]
fn groups_general_notes_links_and_media() {
    let grouped = parse_and_group_content(
        "- Added Bounce Pads\n[[!:https://cdn.example/still.jpg]]((bounce pad locations))\n[[https://forum.example/attachments/bounce_update-mp4.10434/]]((View attachment bounce_update.mp4))",
        &entities(),
    );
    assert_eq!(
        grouped.general,
        [
            "Added Bounce Pads",
            "[[!:https://cdn.example/still.jpg]]((bounce pad locations))",
            "[[https://forum.example/attachments/bounce_update-mp4.10434/]]((View attachment bounce_update.mp4))"
        ]
    );
    let link = parse_and_group_content("[[https://store.example/news/1]]((Patch notes on Steam))", &entities());
    assert_eq!(link.general, ["[[https://store.example/news/1]]((Patch notes on Steam))"]);
}

#[test]
fn accepts_every_bullet_marker_and_routes_entities() {
    for marker in ["-", "*", "•"] {
        let grouped =
            parse_and_group_content(&format!("{marker} Weapon Investment bonus increased from 7% to 9%"), &entities());
        assert_eq!(grouped.general, ["Weapon Investment bonus increased from 7% to 9%"]);
    }
    let grouped =
        parse_and_group_content("* Abrams: Base health increased\n* Tesla Bullets: Proc chance increased", &entities());
    assert_eq!(grouped.heroes, [("Abrams".to_string(), vec!["Base health increased".to_string()])]);
    assert_eq!(grouped.items, [("Tesla Bullets".to_string(), vec!["Proc chance increased".to_string()])]);
}

#[test]
fn prose_only_when_there_are_no_bullets() {
    let prose = "This update reverts the communication changes from yesterday.";
    assert_eq!(parse_and_group_content(prose, &entities()).general, [prose]);
    let mixed = parse_and_group_content("[ General ]\n* Mid Boss base HP increased from 12500 to 13000", &entities());
    assert_eq!(mixed.general, ["Mid Boss base HP increased from 12500 to 13000"]);
    assert_eq!(parse_and_group_content("*", &entities()).general, ["*"]);
}

#[test]
fn deduplicates_dash_bullets_only() {
    assert_eq!(deduplicate_lines("- Same change\n- Same change\n- Other change"), "- Same change\n- Other change");
    assert_eq!(deduplicate_lines("* 20% Reload Time\n* 20% Reload Time"), "* 20% Reload Time\n* 20% Reload Time");
}

const GENERATED: &str = "``attr:\ntitle \"Patch\"\npublished \"2026-09-16T20:16:43.000Z\"\nauthor \"Yoshi\"\nmajor_update #false\n``\n\n=hero:abrams:\n``attr:\nimpact closed=#true {\n}\n``\n## Abrams\n- Change\n=\n";

fn capture(version: i64, at: &str) -> VersionCapture {
    VersionCapture { client_version: version, captured_at: at.into() }
}

#[test]
fn captures_the_client_version_once() {
    let first = with_captured_version(GENERATED, None, Some(&capture(6698, "2026-09-16T21:00:00.000Z")));
    assert_eq!(
        first.split('\n').skip(4).take(4).collect::<Vec<_>>(),
        [
            "major_update #false",
            "client_version_captured 6698",
            "client_version_captured_at \"2026-09-16T21:00:00.000Z\"",
            "``"
        ]
    );
    assert_eq!(first.matches("client_version_captured ").count(), 1);
    assert_eq!(with_captured_version(GENERATED, Some(GENERATED), Some(&capture(1, "x"))), GENERATED);
    assert_eq!(with_captured_version(GENERATED, Some(&first), Some(&capture(6800, "2026-10-01T00:00:00.000Z"))), first);
    assert_eq!(with_captured_version(GENERATED, None, None), GENERATED);
    assert_eq!(with_captured_version("# Notes\n", None, Some(&capture(1, "x"))), "# Notes\n");
}

#[test]
fn author_names() {
    for (input, expected) in [
        (Some("invalid@example.com (Yoshi)"), "Yoshi"),
        (Some("(Yoshi)"), "Yoshi"),
        (Some("Yoshi"), "Yoshi"),
        (Some("invalid@example.com"), "Unknown"),
        (None, "Unknown"),
        (Some(""), "Unknown"),
        (Some("invalid@example.com (John Doe)"), "John Doe"),
        (Some("invalid@example.com (  Yoshi  )"), "Yoshi"),
    ] {
        assert_eq!(parse_author_name(input), expected);
    }
}
