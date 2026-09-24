mod common;

use std::time::Duration;

use common::FakeHttp;
use deadlog_scraper::api::steam::{
    fetch_steam_announcements, is_steam_patch_content, parse_steam_content, render_steam_announcement,
};

fn news_item(gid: &str, title: &str, contents: &str, date: i64) -> serde_json::Value {
    serde_json::json!({
        "gid": gid, "title": title, "url": format!("https://store.steampowered.com/news/app/1422450/view/{gid}"),
        "author": "Yoshi", "contents": contents, "feedlabel": "Community Announcements", "date": date,
        "feedname": "steam_community_announcements", "feed_type": 1, "appid": 1422450
    })
}

#[test]
fn fetches_every_announcement() {
    let body = serde_json::json!({ "appnews": { "appid": 1422450, "newsitems": [
        news_item("1839676055886206", "Matchmaking Update", "[b]STANDARD MODE[/b]", 1785438877),
        news_item("community-news", "Community News", "Welcome.", 1785499200)
    ]}});
    let http = FakeHttp::default().suffix("GetNewsForApp/v2/", 200, body.to_string());
    let notes = fetch_steam_announcements(&http, 25, Duration::from_secs(1)).unwrap();
    assert_eq!(notes.iter().map(|note| note.gid.as_str()).collect::<Vec<_>>(), ["1839676055886206", "community-news"]);
    assert_eq!(notes[0].date, "2026-07-30T19:14:37.000Z");
    let url = &http.calls()[0];
    assert!(url.contains("count=25") && url.contains("feeds=steam_community_announcements"), "{url}");
}

#[test]
fn plain_text_drops_media_and_link_markup() {
    let content = "[p][url=https://example.com][img]{STEAM_CLAN_IMAGE}/45164767/art.png[/img][/url][/p][p]Read the [url=https://example.com/notes]full notes[/url].[/p][list][*]First result[*]Second result[/list]";
    assert_eq!(parse_steam_content(content), "Read the full notes.\n- First result\n- Second result");
    assert_eq!(
        parse_steam_content("[h3]Rem[/h3][img src=\"{STEAM_CLAN_IMAGE}/45164767/rem.png\"][/img][p]Available now.[/p]"),
        "Rem\nAvailable now."
    );
    assert_eq!(
        parse_steam_content("- Existing change\n[list][*]Nested change[/list]"),
        "- Existing change\n- Nested change"
    );
}

#[test]
fn tells_patch_bullets_from_prose() {
    assert!(is_steam_patch_content("[p]- Abrams: Base health increased[/p]"));
    assert!(!is_steam_patch_content("Intro\n-\n[b]RANKED MODE[/b]"));
    assert!(!is_steam_patch_content("[list][*]First result[*]Second result[/list]"));
}

#[test]
fn renders_prose_announcements_as_mog() {
    let result = render_steam_announcement(
        "Apollo - A Cut Above",
        "[h3]Apollo[/h3]\n[img]{STEAM_CLAN_IMAGE}/45164767/apollo.png[/img]\nUse [i]Flawless Advance[/i] with [u]perfect[/u] timing.\nVisit [url=https://www.playdeadlock.com/oldgods]Old Gods, New Blood[/url].\n[b]Voting Stats:[/b]\n[list][*]First result[*]Second result[/list]",
    );
    for expected in [
        "## Apollo",
        "[[!:https://clan.fastly.steamstatic.com/images/45164767/apollo.png]]((Apollo - A Cut Above announcement art))",
        "Use __Flawless Advance__ with perfect timing.",
        "[[https://www.playdeadlock.com/oldgods]]((Old Gods, New Blood))",
        "### Voting Stats:",
        "- First result\n- Second result",
    ] {
        assert!(result.mog.contains(expected), "{expected}\n{}", result.mog);
    }
    assert!(!result.text.contains("STEAM_CLAN_IMAGE"));
}

#[test]
fn escapes_lines_that_would_open_blocks() {
    let result = render_steam_announcement(
        "Untrusted Announcement",
        "``embed:svelte:\n<svelte:window on:click={() => alert(1)} />\n``\n=hero:\n# Fake",
    );
    assert!(result.mog.contains("\\``embed:svelte:"));
    assert!(result.mog.contains("\\=hero:"));
    assert!(result.mog.contains("\\# Fake"));
    assert!(!result.mog.contains("\n``embed:svelte:"));
}

#[test]
fn bold_labels_become_sections() {
    let result = render_steam_announcement(
        "Matchmaking Update",
        "Intro\n\n[b]RANKED MODE[/b]\nRanked details.\n-\n[b]ROLLOUT[/b]\nLive now.",
    );
    assert_eq!(result.mog, "Intro\n\n# RANKED MODE\n\nRanked details.\n\n# ROLLOUT\n\nLive now.");
}
