use std::path::PathBuf;

use deadlog_changelog::{
    ChangelogMetadata, ParsedChangelog, deduplicate_changelogs, extract_preview_image, load_all_changelogs,
    parse_structure,
};

#[test]
fn returns_the_first_non_favicon_image() {
    let images = ["https://store.steampowered.com/favicon.ico", "https://cdn.example.com/patch-header.jpg?version=2"]
        .map(String::from);
    assert_eq!(extract_preview_image(&images).as_deref(), Some("https://cdn.example.com/patch-header.jpg?version=2"));
    assert_eq!(extract_preview_image(&["/local/header.jpg".into(), "javascript:alert(1)".into()]), None);
}

#[test]
fn skips_an_entity_portrait() {
    let content = [
        "# General Changes",
        "[[!:https://cdn.example.com/screenshot.jpg]]((map changes))",
        "",
        "# Hero Changes",
        "=hero:abrams:",
        "[[!:https://cdn.example.com/abrams_sm.webp]]",
        "## Abrams",
        "- Base health increased",
        "=",
    ]
    .join("\n");
    assert_eq!(parse_structure(&content).unwrap().images, vec!["https://cdn.example.com/screenshot.jpg"]);
}

fn changelog(slug: &str, steam_gid: Option<&str>, thread_id: Option<&str>) -> ParsedChangelog {
    ParsedChangelog {
        filepath: PathBuf::new(),
        slug: slug.into(),
        aliases: vec![slug.into()],
        metadata: ChangelogMetadata {
            steam_gid: steam_gid.map(String::from),
            thread_id: thread_id.map(String::from),
            ..Default::default()
        },
        entities: Default::default(),
        entity_changes: vec![],
        plain_text: String::new(),
        preview_image: None,
        stats: None,
    }
}

#[test]
fn prefers_a_forum_backed_changelog_for_a_shared_steam_source() {
    let standalone = changelog("2026/gameplay-03-06", Some("steam-1"), None);
    let forum = changelog("2026/03-06", Some("steam-1"), Some("forum-1"));
    let other = changelog("2026/minor-03-06", Some("steam-2"), None);
    let unique = deduplicate_changelogs(vec![standalone, forum.clone(), other.clone()]);
    assert_eq!(
        unique,
        vec![ParsedChangelog { aliases: vec!["2026/03-06".into(), "2026/gameplay-03-06".into()], ..forum }, other]
    );
}

#[test]
fn merges_records_connected_by_either_source_identifier() {
    let forum_only = changelog("forum", None, Some("forum-1"));
    let steam_only = changelog("steam", Some("steam-1"), None);
    let linked = changelog("linked", Some("steam-1"), Some("forum-1"));
    let unique = deduplicate_changelogs(vec![forum_only, steam_only, linked.clone()]);
    assert_eq!(unique, vec![ParsedChangelog { aliases: vec!["linked".into(), "forum".into(), "steam".into()], ..linked }]);
}

#[test]
fn keeps_an_explicit_legacy_slug_as_a_database_alias() {
    let dir = std::env::temp_dir().join(format!("deadlog-alias-{}", std::process::id()));
    std::fs::create_dir_all(dir.join("2026")).unwrap();
    std::fs::write(
        dir.join("2026/03-06.mg"),
        [
            "``attr:",
            "title \"Gameplay Update - 03-06-2026\"",
            "alias \"2026/gameplay-03-06\"",
            "published \"2026-03-06T21:37:00.000Z\"",
            "author \"simonne\"",
            "``",
            "",
            "# General Changes",
            "- Test change",
        ]
        .join("\n"),
    )
    .unwrap();
    let loaded = load_all_changelogs(&dir);
    std::fs::remove_dir_all(&dir).unwrap();
    assert_eq!(loaded.unwrap()[0].aliases, vec!["2026/03-06", "2026/gameplay-03-06"]);
}
