mod common;

use std::time::Duration;

use common::{FakeHttp, temp_dir};
use deadlog_scraper::api::forum::{ChangelogPost, PostScrapeOptions, scrape_multiple_changelog_posts};

fn thread() -> ChangelogPost {
    ChangelogPost {
        title: "10-18-2024 Update".into(),
        url: "https://forums.playdeadlock.com/threads/update.42/".into(),
        author: "Yoshi".into(),
        pub_date: "2024-10-18T10:00:00Z".into(),
        post_id: "42".into(),
    }
}

fn message(id: &str, author: &str, content: &str, timestamp: &str) -> String {
    format!(
        r#"<article class="message" data-content="post-{id}"><a class="username">{author}</a><div class="message-content"><div class="bbWrapper">{content}</div></div><time datetime="{timestamp}"></time></article>"#
    )
}

fn page(messages: &str, next: Option<&str>) -> String {
    let next = next
        .map(|href| format!(r#"<a class="pageNav-jump--next" rel="next" href="{href}">Next</a>"#))
        .unwrap_or_default();
    format!(
        r#"<!doctype html><html><body><h1 class="p-title-value">10-18-2024 Update</h1>{messages}{next}</body></html>"#
    )
}

fn options(cache_dir: std::path::PathBuf, max_thread_pages: usize) -> PostScrapeOptions {
    PostScrapeOptions { use_cache: true, cache_dir, concurrency: 1, delay: Duration::ZERO, max_thread_pages }
}

#[test]
fn captures_later_page_replies_and_caches_them() {
    let cache = temp_dir("forum-cache");
    let url = thread().url;
    let http = FakeHttp::default()
        .route(
            &url,
            page(&message("900", "Yoshi", "Original notes", "2024-10-18T10:00:00Z"), Some("/threads/update.42/page-2")),
        )
        .route(
            &format!("{url}page-2"),
            page(
                &(message("950", "Other", "Not an OP reply", "2024-10-18T11:00:00Z")
                    + &message("951", "Yoshi", "Later hotfix", "2024-10-18T12:00:00Z")),
                None,
            ),
        );
    let first = scrape_multiple_changelog_posts(&http, &[thread()], &options(cache.clone(), 10));
    assert_eq!(http.calls().len(), 2);
    assert_eq!(first.len(), 1);
    assert_eq!(first[0].post_id, "42");
    assert_eq!(first[0].poster_replies.len(), 1);
    assert!(first[0].poster_replies[0].content.contains("Later hotfix"));
    let cached: serde_json::Value =
        serde_json::from_str(&std::fs::read_to_string(cache.join("post-42.json")).unwrap()).unwrap();
    assert_eq!((cached["version"].as_i64(), cached["data"]["postId"].as_str()), (Some(2), Some("42")));

    let offline = FakeHttp::default();
    assert_eq!(scrape_multiple_changelog_posts(&offline, &[thread()], &options(cache, 10)), first);
    assert!(offline.calls().is_empty());
}

#[test]
fn ignores_legacy_caches_and_bounds_pagination() {
    let cache = temp_dir("forum-legacy");
    std::fs::write(
        cache.join("post-42.json"),
        r#"{"postId":"900","title":"x","author":"Yoshi","pubDate":"x","content":"stale content","posterReplies":[]}"#,
    )
    .unwrap();
    let url = thread().url;
    let http = FakeHttp::default()
        .route(
            &url,
            page(&message("900", "Yoshi", "Fresh notes", "2024-10-18T10:00:00Z"), Some("/threads/update.42/page-2")),
        )
        .route(
            &format!("{url}page-2"),
            page(&message("951", "Yoshi", "Bounded hotfix", "2024-10-18T12:00:00Z"), Some("/threads/update.42/page-3")),
        );
    let result = scrape_multiple_changelog_posts(&http, &[thread()], &options(cache, 2));
    assert_eq!(http.calls().len(), 2);
    assert_eq!(result[0].post_id, "42");
    assert!(result[0].content.contains("Fresh notes"));
    assert!(result[0].poster_replies[0].content.contains("Bounded hotfix"));
}
