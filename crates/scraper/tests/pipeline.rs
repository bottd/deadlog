mod common;

use std::path::Path;
use std::time::Duration;

use common::{FakeHttp, temp_dir};
use deadlog_db::write::snapshot::EntitySnapshot;
use deadlog_scraper::api::forum::ChangelogPost;
use deadlog_scraper::api::steam::SteamAnnouncement;
use deadlog_scraper::pipeline::{
    ScrapeConfig, ScrapeResult, WriteOutcome, match_steam_notes_to_forum_posts, scrape_changelogs, write_mog_file,
};
use serde_json::json;

fn post(id: &str, title: &str, date: &str) -> ChangelogPost {
    ChangelogPost {
        post_id: id.into(),
        title: title.into(),
        url: format!("https://forums.playdeadlock.com/threads/update.{id}/"),
        author: "Yoshi".into(),
        pub_date: date.into(),
    }
}

fn note(gid: &str, title: &str, date: &str) -> SteamAnnouncement {
    SteamAnnouncement {
        gid: gid.into(),
        title: title.into(),
        date: date.into(),
        author: "Yoshi".into(),
        content: format!("Content for {gid}"),
    }
}

const DAY: &str = "2024-10-18T10:00:00Z";

fn gid<'a>(matches: &'a deadlog_scraper::pipeline::SteamMatches, id: &str) -> Option<&'a str> {
    matches.steam_by_forum_post_id.get(id).map(|note| note.gid.as_str())
}

fn unmatched(matches: &deadlog_scraper::pipeline::SteamMatches) -> Vec<&str> {
    matches.unmatched_steam_notes.iter().map(|note| note.gid.as_str()).collect()
}

#[test]
fn matches_by_full_title_then_looser_signals() {
    let result = match_steam_notes_to_forum_posts(
        &[post("first", "10-18-2024 Update", DAY), post("second", "10-18-2024 Update 2", DAY)],
        &[note("gid-second", "10-18-2024: UPDATE 2", DAY), note("gid-first", "10-18-2024 Update", DAY)],
    );
    assert_eq!((gid(&result, "first"), gid(&result, "second")), (Some("gid-first"), Some("gid-second")));
    assert!(result.unmatched_steam_notes.is_empty());

    let exact = match_steam_notes_to_forum_posts(
        &[post("first", "10-18-2024 Update", DAY)],
        &[note("gid-first", "10-18-2024 Update", DAY), note("gid-second", "10-18-2024 Update 2", DAY)],
    );
    assert_eq!(gid(&exact, "first"), Some("gid-first"));
    assert_eq!(unmatched(&exact), ["gid-second"]);

    let ambiguous = match_steam_notes_to_forum_posts(
        &[post("first", "Hotfix A - 10-18-2024", DAY), post("second", "Hotfix B - 10-18-2024", DAY)],
        &[note("gid-third", "Patch C - 10-18-2024", DAY), note("gid-fourth", "Patch D - 10-18-2024", DAY)],
    );
    assert!(ambiguous.steam_by_forum_post_id.is_empty());
    assert_eq!(unmatched(&ambiguous), ["gid-third", "gid-fourth"]);
}

#[test]
fn backfilled_threads_match_by_title_date_only_within_bounds() {
    let result = match_steam_notes_to_forum_posts(
        &[
            post("162570", "08-12-2026 Update", "2026-09-16T22:41:13Z"),
            post("162571", "08-22-2026 Update", "2026-09-16T22:41:28Z"),
        ],
        &[
            note("gid-22", "Minor Update - 08-22-2026", "2026-08-22T21:40:46Z"),
            note("gid-12", "Minor Update - 08-12-2026", "2026-08-12T22:57:44Z"),
        ],
    );
    assert_eq!((gid(&result, "162570"), gid(&result, "162571")), (Some("gid-12"), Some("gid-22")));
    for (forum_date, steam_date) in
        [("2026-09-16T22:41:28Z", "2026-08-30T21:40:46Z"), ("2026-12-16T22:41:28Z", "2026-08-22T21:40:46Z")]
    {
        let result = match_steam_notes_to_forum_posts(
            &[post("forum", "08-22-2026 Update", forum_date)],
            &[note("gid", "Minor Update - 08-22-2026", steam_date)],
        );
        assert!(result.steam_by_forum_post_id.is_empty());
    }
}

#[test]
fn other_pairings() {
    let reused = match_steam_notes_to_forum_posts(
        &[post("forum", "Matchmaking Update", "2026-07-31T12:00:00Z")],
        &[note("old", "Matchmaking Update", "2026-07-29T12:00:00Z")],
    );
    assert!(reused.steam_by_forum_post_id.is_empty());
    assert_eq!(unmatched(&reused), ["old"]);

    let dated = match_steam_notes_to_forum_posts(
        &[post("forum", "05-22-2026 Update", "2026-05-23T00:11:11Z")],
        &[note("steam", "Gameplay Update - 05-22-2026", "2026-05-22T21:51:02Z")],
    );
    assert_eq!(gid(&dated, "forum"), Some("steam"));

    let mut dateless = note("530965072572320687", "Map Rework Update", "2025-02-25T21:49:19Z");
    dateless.content = "Content".into();
    let nearby =
        match_steam_notes_to_forum_posts(&[post("56683", "02-25-2025 Update", "2025-02-25T21:51:13Z")], &[dateless]);
    assert_eq!(gid(&nearby, "56683"), Some("530965072572320687"));

    let far = match_steam_notes_to_forum_posts(
        &[
            post("first", "10-18-2024 Update A", "2024-10-19T02:00:00Z"),
            post("second", "10-18-2024 Update B", "2024-10-19T02:00:00Z"),
        ],
        &[
            note("third", "Gameplay Update - 10-18-2024", "2024-10-18T20:00:00Z"),
            note("fourth", "Ranked Update - 10-18-2024", "2024-10-18T20:00:00Z"),
        ],
    );
    assert_eq!(unmatched(&far), ["third", "fourth"]);

    let apart = match_steam_notes_to_forum_posts(
        &[post("forum", "07-31-2026 Update", "2026-07-31T23:00:00Z")],
        &[note("ranked", "Ranked Update - 07-31-2026", "2026-07-31T12:00:00Z")],
    );
    assert_eq!(unmatched(&apart), ["ranked"]);

    let mut news = note("news", "Community News", "2026-07-31T12:00:00Z");
    news.content = "Welcome".into();
    let unrelated =
        match_steam_notes_to_forum_posts(&[post("forum", "07-31-2026 Update", "2026-07-31T11:55:00Z")], &[news]);
    assert_eq!(unmatched(&unrelated), ["news"]);
}

const FORUM: &str = "https://forums.playdeadlock.com/forums/changelog.10/";

fn steam_body(notes: &[(&str, &str, &str, &str)]) -> String {
    let items: Vec<serde_json::Value> = notes
        .iter()
        .map(|(gid, title, date, contents)| {
            let seconds = deadlog_model::parse_js_date(date).unwrap().timestamp();
            json!({ "gid": gid, "title": title, "url": "u", "author": "Yoshi", "contents": contents, "feedlabel": "l",
                    "date": seconds, "feedname": "steam_community_announcements", "feed_type": 1, "appid": 1422450 })
        })
        .collect();
    json!({ "appnews": { "appid": 1422450, "newsitems": items } }).to_string()
}

fn http(notes: &[(&str, &str, &str, &str)]) -> FakeHttp {
    FakeHttp::default().route(FORUM, "<html><body></body></html>").suffix("GetNewsForApp/v2/", 200, steam_body(notes))
}

fn scrape(http: &FakeHttp, dir: &Path, overwrite: bool) -> ScrapeResult {
    let snapshot = EntitySnapshot { heroes: vec![], items: vec![], provenance: None };
    scrape_changelogs(&ScrapeConfig {
        http,
        changelogs_dir: dir.to_path_buf(),
        cache_dir: dir.join("cache"),
        overwrite,
        overwrite_irreproducible: false,
        snapshot: &snapshot,
        capture: None,
        delay: Duration::ZERO,
    })
    .unwrap()
}

const MATCHMAKING: (&str, &str, &str, &str) = (
    "1839676055886206",
    "Matchmaking Update",
    "2026-07-30T19:14:37.000Z",
    "[b]STANDARD MODE[/b]\nPlayers are now matched by rank points.",
);

#[test]
fn writes_a_steam_only_announcement_and_reports_changes_accurately() {
    let dir = temp_dir("pipeline-steam");
    let http = http(&[MATCHMAKING]);
    assert_eq!(scrape(&http, &dir, false), ScrapeResult { created: 1, updated: 0, changed: true });
    let content = std::fs::read_to_string(dir.join("2026/matchmaking.mg")).unwrap();
    for expected in [
        "title \"Matchmaking Update\"",
        "steam_gid \"1839676055886206\"",
        "published \"2026-07-30T19:14:37.000Z\"",
        "Players are now matched by rank points.",
        "# STANDARD MODE",
    ] {
        assert!(content.contains(expected), "{expected}");
    }
    assert!(!content.contains("# General Changes"));
    assert_eq!(scrape(&http, &dir, false), ScrapeResult::default());
    assert_eq!(scrape(&http, &dir, true), ScrapeResult::default());
}

#[test]
fn does_not_overwrite_announcements_sharing_a_path() {
    let dir = temp_dir("pipeline-collide");
    scrape(
        &http(&[
            ("first", "Matchmaking Update", "2026-07-30T19:14:37.000Z", "First announcement."),
            ("second", "Matchmaking Update", "2026-08-01T19:14:37.000Z", "Second announcement."),
        ]),
        &dir,
        false,
    );
    assert!(std::fs::read_to_string(dir.join("2026/matchmaking.mg")).unwrap().contains("steam_gid \"first\""));
    assert!(std::fs::read_to_string(dir.join("2026/matchmaking-second.mg")).unwrap().contains("steam_gid \"second\""));
}

#[test]
fn migrates_a_steam_first_changelog_when_its_forum_post_appears() {
    let dir = temp_dir("pipeline-migrate");
    let gameplay =
        ("steam-gameplay", "Gameplay Update - 05-22-2026", "2026-05-22T21:51:02.000Z", "- Base HP reduced by 10");
    scrape(&http(&[gameplay]), &dir, false);
    let standalone = dir.join("2026/gameplay-05-22.mg");
    assert!(std::fs::read_to_string(&standalone).unwrap().contains("steam_gid \"steam-gameplay\""));

    let listing = r#"<html><body><div class="structItem"><div class="structItem-title"><a href="/threads/update.135477/">05-22-2026 Update</a></div><a class="username">Yoshi</a><time datetime="2026-05-23T00:11:11.000Z"></time></div></body></html>"#;
    let thread = r#"<html><body><h1 class="p-title-value">05-22-2026 Update</h1><article class="message" data-content="post-135477"><a class="username">Yoshi</a><div class="message-content"><div class="bbWrapper">Forum update</div></div><time datetime="2026-05-23T00:11:11.000Z"></time></article></body></html>"#;
    let http =
        http(&[gameplay]).route(FORUM, listing).route("https://forums.playdeadlock.com/threads/update.135477/", thread);
    scrape(&http, &dir, false);
    let canonical = std::fs::read_to_string(dir.join("2026/05-22.mg")).unwrap();
    for expected in ["alias \"2026/gameplay-05-22\"", "thread_id \"135477\"", "steam_gid \"steam-gameplay\""] {
        assert!(canonical.contains(expected), "{expected}\n{canonical}");
    }
    assert!(!standalone.exists());
}

const MARKED: &str = "``attr:\n// Not reproducible offline: this body came from the Steam API.\ntitle \"Matchmaking Update\"\nsteam_gid \"1839676055886206\"\n``\n\n- Real notes nobody can fetch again\n";

#[test]
fn refuses_to_overwrite_an_irreproducible_changelog() {
    let dir = temp_dir("pipeline-guard");
    let path = dir.join("2026/matchmaking.mg");
    std::fs::create_dir_all(path.parent().unwrap()).unwrap();
    std::fs::write(&path, MARKED).unwrap();

    assert_eq!(write_mog_file(&path, "``attr:\ntitle \"x\"\n``\n", None, false).unwrap(), WriteOutcome::Protected);
    assert_eq!(std::fs::read_to_string(&path).unwrap(), MARKED);

    assert_eq!(scrape(&http(&[MATCHMAKING]), &dir, true), ScrapeResult::default());
    assert_eq!(std::fs::read_to_string(&path).unwrap(), MARKED);

    assert_eq!(write_mog_file(&path, "``attr:\ntitle \"x\"\n``\n", None, true).unwrap(), WriteOutcome::Updated);
    assert!(!std::fs::read_to_string(&path).unwrap().contains("Real notes"));
}

#[test]
fn committed_irreproducible_files_are_detected() {
    for file in ["2024/11-07.mg", "2024/12-06.mg"] {
        let path = concat!(env!("CARGO_MANIFEST_DIR"), "/../../app/changelogs/").to_string() + file;
        assert!(deadlog_scraper::pipeline::is_irreproducible(&std::fs::read_to_string(path).unwrap()), "{file}");
    }
}
