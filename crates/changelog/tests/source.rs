use deadlog_changelog::{ChangelogMetadata, changelog_source_url};

fn metadata(thread: Option<&str>, gid: Option<&str>) -> ChangelogMetadata {
    ChangelogMetadata { thread_id: thread.map(String::from), steam_gid: gid.map(String::from), ..Default::default() }
}

#[test]
fn source_urls() {
    assert_eq!(
        changelog_source_url(&metadata(Some("135477"), Some("1833334318572828"))).unwrap(),
        "https://store.steampowered.com/news/externalpost/steam_community_announcements/1833334318572828"
    );
    assert_eq!(changelog_source_url(&metadata(Some("135477"), None)).unwrap(), "https://forums.playdeadlock.com/threads/135477/");
    assert!(changelog_source_url(&metadata(None, None)).unwrap_err().to_string().contains("no forum or Steam source identifier"));
}
