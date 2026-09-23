use std::path::{Path, PathBuf};
use std::time::Duration;

use anyhow::{Context, Result, bail};
use regex::Regex;
use scraper::{ElementRef, Html};
use serde::{Deserialize, Serialize};

use crate::html::{attr, document_first, first, inner_html, selector, text_content};
use crate::http::Http;

const CONTENT: &str = ".bbWrapper, .message-content";
const TITLE: &str = "h1.p-title-value, h1";
const AUTHOR: &str = ".message-name .username, .username";
const DATE: &str = "time[datetime], time";
const THREAD: &str = ".structItem";
const THREAD_TITLE: &str = ".structItem-title a";
const NEXT_PAGE: &str = ".pageNav-jump--next, a[rel=\"next\"]";

const CHANGELOG_FORUM: &str = "https://forums.playdeadlock.com/forums/changelog.10/";
const FETCH_TIMEOUT: Duration = Duration::from_secs(30);
const USER_AGENT: &str = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const MAX_PAGES_TO_SCRAPE: usize = 100;
pub const MAX_THREAD_PAGES: usize = 10;
const POST_CACHE_VERSION: u32 = 2;

/// Where scraped post bodies land, relative to the repository root.
pub const POST_CACHE_DIR: &str = "lib/scraper/src/cache/posts";

#[derive(Debug, Clone, PartialEq)]
pub struct ChangelogPost {
    pub title: String,
    pub url: String,
    pub author: String,
    pub pub_date: String,
    pub post_id: String,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct PosterReply {
    pub content: String,
    pub timestamp: String,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PostContentResult {
    pub post_id: String,
    pub title: String,
    pub author: String,
    pub pub_date: String,
    pub content: String,
    pub poster_replies: Vec<PosterReply>,
}

#[derive(Serialize, Deserialize)]
struct CachedPost {
    version: u32,
    data: PostContentResult,
}

fn fetch_html(http: &dyn Http, url: &str) -> Result<String> {
    let headers = [
        ("User-Agent", USER_AGENT),
        ("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"),
    ];
    let response = http.get(url, &headers, Some(FETCH_TIMEOUT))?;
    if !response.ok() {
        bail!("HTTP {}: {}", response.status, response.status_text);
    }
    Ok(response.body)
}

const KEEP_ATTRS: [(&str, &str); 4] = [("a", "href"), ("img", "src"), ("img", "alt"), ("div", "class")];

/// Strips every attribute but links, image sources and div classes, so the cache holds
/// the post's content without the forum's presentation.
pub fn clean_html(html: &str) -> String {
    let document = Html::parse_document(&format!("<body>{html}</body>"));
    let Some(body) = document_first(&document, "body") else { return String::new() };
    let keep = |tag: &str, name: &str| KEEP_ATTRS.contains(&(tag, name));
    let serialized = inner_html(*body, &keep);
    serialized.trim_start_matches(['\n', '\t', '\r', ' ']).trim_end_matches(deadlog_model::is_js_whitespace).to_string()
}

fn timestamp(element: Option<ElementRef>) -> Option<String> {
    let element = element?;
    attr(element, "datetime")
        .filter(|value| !value.is_empty())
        .map(str::to_string)
        .or_else(|| Some(deadlog_model::js_trim(&text_content(element)).to_string()))
        .filter(|value| !value.is_empty())
}

fn trimmed_text(element: Option<ElementRef>) -> String {
    element.map(|element| deadlog_model::js_trim(&text_content(element)).to_string()).unwrap_or_default()
}

fn extract_poster_replies(document: &Html, author_lower: &str, start_index: usize) -> Vec<PosterReply> {
    if author_lower.is_empty() {
        return Vec::new();
    }
    document
        .select(&selector(".message"))
        .skip(start_index)
        .filter(|post| trimmed_text(first(*post, AUTHOR)).to_lowercase() == author_lower)
        .filter_map(|post| {
            let content = first(post, CONTENT)?;
            let timestamp = timestamp(first(post, DATE))?;
            Some(PosterReply { content: clean_html(&content.inner_html()), timestamp })
        })
        .collect()
}

fn next_page_url(document: &Html, current_url: &str) -> Option<String> {
    let next = document_first(document, NEXT_PAGE)?;
    if next.value().classes().any(|class| class == "is-disabled") {
        return None;
    }
    let href = attr(next, "href")?;
    let current = url::Url::parse(current_url).ok()?;
    let next_url = current.join(href).ok()?;
    (next_url.origin() == current.origin()).then(|| next_url.to_string())
}

fn extract_post_content(document: &Html) -> Option<PostContentResult> {
    let first_post = document_first(document, ".message")?;
    let title = trimmed_text(document_first(document, TITLE));
    let content = clean_html(&first(first_post, CONTENT).map(|element| element.inner_html()).unwrap_or_default());
    let author = trimmed_text(first(first_post, AUTHOR));
    let pub_date = timestamp(first(first_post, DATE));
    let digits = || attr(first_post, "id").map(|id| id.chars().filter(char::is_ascii_digit).collect::<String>());
    let post_id = attr(first_post, "data-content")
        .map(|id| id.replacen("post-", "", 1))
        .filter(|id| !id.is_empty())
        .or_else(digits)
        .unwrap_or_default();
    let poster_replies = extract_poster_replies(document, &author.to_lowercase(), 1);
    Some(PostContentResult { post_id, title, author, pub_date: pub_date?, content, poster_replies })
}

fn extract_thread_list(document: &Html, page_url: &str) -> (Vec<ChangelogPost>, bool) {
    let post_id_pattern = Regex::new(r"threads/[^/]+\.([0-9]+)").expect("valid regex");
    let base = url::Url::parse(page_url).ok();
    let mut posts = Vec::new();
    for thread in document.select(&selector(THREAD)) {
        let title_element = first(thread, THREAD_TITLE);
        let title = trimmed_text(title_element);
        if title.to_lowercase().contains("feedback") {
            continue;
        }
        let url = title_element
            .and_then(|element| attr(element, "href"))
            .and_then(|href| base.as_ref().and_then(|base| base.join(href).ok()))
            .map(|url| url.to_string())
            .unwrap_or_default();
        let author = trimmed_text(first(thread, AUTHOR));
        let pub_date = timestamp(first(thread, DATE));
        let post_id = post_id_pattern.captures(&url).map(|captures| captures[1].to_string()).unwrap_or_default();
        if let Some(pub_date) = pub_date
            && !url.is_empty()
            && !post_id.is_empty()
        {
            posts.push(ChangelogPost { title, url, author, pub_date, post_id });
        }
    }
    let has_next = next_page_url(document, page_url).is_some();
    (posts, has_next)
}

/// Every thread in the changelog forum, following its pagination.
pub fn scrape_changelog_page(http: &dyn Http, delay: Duration) -> Result<Vec<ChangelogPost>> {
    let mut all_posts = Vec::new();
    let mut page = 1;
    let mut more = true;
    println!("🔍 Scraping changelog forum...");
    while more && page <= MAX_PAGES_TO_SCRAPE {
        let page_url = if page == 1 { CHANGELOG_FORUM.to_string() } else { format!("{CHANGELOG_FORUM}page-{page}") };
        println!("  📄 Page {page}: {page_url}");
        let html = fetch_html(http, &page_url)?;
        let (posts, has_next) = extract_thread_list(&Html::parse_document(&html), &page_url);
        println!("    ✅ Found {} posts on page {page}", posts.len());
        all_posts.extend(posts);
        more = has_next;
        page += 1;
        if more {
            std::thread::sleep(delay);
        }
    }
    println!("✅ Total: {} changelog posts across {} pages", all_posts.len(), page - 1);
    Ok(all_posts)
}

fn scrape_post(http: &dyn Http, url: &str, max_thread_pages: usize) -> Result<PostContentResult> {
    let html = fetch_html(http, url)?;
    let document = Html::parse_document(&html);
    let data = extract_post_content(&document);
    let mut next = next_page_url(&document, url);
    let Some(mut data) = data.filter(|data| !data.content.is_empty()) else {
        bail!("No content found for URL: {url}");
    };

    let mut visited = vec![url.to_string()];
    let mut pages = 1;
    while let Some(next_url) = next.clone() {
        if pages >= max_thread_pages || visited.contains(&next_url) {
            break;
        }
        visited.push(next_url.clone());
        let page = Html::parse_document(&fetch_html(http, &next_url)?);
        data.poster_replies.extend(extract_poster_replies(&page, &data.author.to_lowercase(), 0));
        next = next_page_url(&page, &next_url);
        pages += 1;
    }
    if next.is_some() && pages >= max_thread_pages {
        eprintln!("Reached thread page limit ({max_thread_pages}) for {url}");
    }
    Ok(data)
}

fn cache_file(cache_dir: &Path, post_id: &str) -> PathBuf {
    cache_dir.join(format!("post-{post_id}.json"))
}

fn read_cache(cache_dir: &Path, post: &ChangelogPost) -> Option<PostContentResult> {
    let raw = std::fs::read_to_string(cache_file(cache_dir, &post.post_id)).ok()?;
    let cached: CachedPost = serde_json::from_str(&raw).ok()?;
    (cached.version == POST_CACHE_VERSION).then(|| PostContentResult { post_id: post.post_id.clone(), ..cached.data })
}

fn write_cache(cache_dir: &Path, data: &PostContentResult) {
    let written = std::fs::create_dir_all(cache_dir).context("creating the cache").and_then(|()| {
        let value = serde_json::to_value(CachedPost { version: POST_CACHE_VERSION, data: data.clone() })?;
        std::fs::write(cache_file(cache_dir, &data.post_id), deadlog_model::js_json_pretty(&value, "  "))?;
        Ok(())
    });
    if let Err(error) = written {
        eprintln!("Failed to write cache for post {}: {error:#}", data.post_id);
    }
}

pub struct PostScrapeOptions {
    pub use_cache: bool,
    pub cache_dir: PathBuf,
    pub concurrency: usize,
    pub delay: Duration,
    pub max_thread_pages: usize,
}

impl Default for PostScrapeOptions {
    fn default() -> Self {
        Self {
            use_cache: false,
            cache_dir: POST_CACHE_DIR.into(),
            concurrency: 5,
            delay: Duration::from_millis(500),
            max_thread_pages: MAX_THREAD_PAGES,
        }
    }
}

/// Each post's first message and the author's later replies across the thread's pages.
/// Cached posts are returned first; a post that fails to scrape is skipped with a
/// warning rather than failing the batch.
pub fn scrape_multiple_changelog_posts(
    http: &dyn Http,
    posts: &[ChangelogPost],
    options: &PostScrapeOptions,
) -> Vec<PostContentResult> {
    println!("🕷️  Scraping {} changelog posts (concurrency: {}, mode: fetch)...", posts.len(), options.concurrency);
    let mut results = Vec::new();
    let mut to_scrape = Vec::new();
    if options.use_cache {
        for post in posts {
            match read_cache(&options.cache_dir, post) {
                Some(cached) => results.push(cached),
                None => to_scrape.push(post),
            }
        }
        if !results.is_empty() {
            println!("  📦 Using {} cached posts", results.len());
        }
        if to_scrape.is_empty() {
            println!("✨ All posts loaded from cache!");
            return results;
        }
        println!("  🌐 Scraping {} new posts...", to_scrape.len());
    } else {
        to_scrape.extend(posts);
    }

    let cached = results.len();
    let batches: Vec<&[&ChangelogPost]> = to_scrape.chunks(options.concurrency.max(1)).collect();
    for (index, batch) in batches.iter().enumerate() {
        let scraped: Vec<Option<PostContentResult>> = std::thread::scope(|scope| {
            let handles: Vec<_> = batch
                .iter()
                .map(|post| {
                    scope.spawn(move || match scrape_post(http, &post.url, options.max_thread_pages) {
                        Ok(data) => {
                            let data = PostContentResult { post_id: post.post_id.clone(), ..data };
                            if options.use_cache {
                                write_cache(&options.cache_dir, &data);
                            }
                            Some(data)
                        }
                        Err(error) => {
                            eprintln!("  ⚠️  Failed to scrape {}: {error:#}", post.post_id);
                            None
                        }
                    })
                })
                .collect();
            handles.into_iter().map(|handle| handle.join().ok().flatten()).collect()
        });
        results.extend(scraped.into_iter().flatten());
        let processed = cached + ((index + 1) * options.concurrency).min(to_scrape.len());
        println!("  ✅ Processed {processed}/{} posts", posts.len());
        if index + 1 < batches.len() {
            std::thread::sleep(options.delay);
        }
    }
    println!("✨ Successfully scraped {}/{} posts", results.len(), posts.len());
    results
}
