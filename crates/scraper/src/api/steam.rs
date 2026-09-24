use std::sync::LazyLock;
use std::time::Duration;

use anyhow::{Context, Result, bail};
use chrono::{TimeZone, Utc};
use deadlog_model::{JS_SPACE, escape_mog_delimiters, js_trim, mog_image, mog_link};
use regex::{Captures, Regex};
use serde_json::Value;

use crate::http::Http;
use deadlog_model::utf16_len;

const STEAM_NEWS_API: &str = "https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/";
const DEADLOCK_APP_ID: &str = "1422450";

const SECTION_MARKER: &str = "__SECTION__";
const SUBPATCH_MARKER: &str = "__SUBPATCH__";
const SECTION_NAMES: [&str; 3] = ["Items", "Heroes", "General"];
const STEAM_IMAGE_BASE: &str = "https://clan.fastly.steamstatic.com/images";

#[derive(Debug, Clone, PartialEq)]
pub struct SteamAnnouncement {
    pub gid: String,
    pub title: String,
    /// ISO timestamp.
    pub date: String,
    pub author: String,
    /// BBCode.
    pub content: String,
}

#[derive(Debug, Clone, PartialEq)]
pub struct RenderedSteamAnnouncement {
    pub mog: String,
    pub text: String,
}

fn re(pattern: &str) -> Regex {
    Regex::new(&pattern.replace(r"\s", JS_SPACE).replace(r"\S", &format!("[^{}]", &JS_SPACE[1..JS_SPACE.len() - 1])))
        .unwrap()
}

macro_rules! regex {
    ($name:ident, $pattern:expr) => {
        static $name: LazyLock<Regex> = LazyLock::new(|| re($pattern));
    };
}

regex!(TITLE_DATE, r"([0-9]{2}-[0-9]{2}-[0-9]{4})");
regex!(IMG_ANY, r"(?i)\[img(?:\s+[^\]]*)?\][\s\S]*?\[/img\]");
regex!(CLAN_IMAGE_TOKEN, r"\{STEAM_CLAN_(?:LOC_)?IMAGE\}/\S+");
regex!(URL_WITH_TARGET, r"(?i)\[url=[^\]]+\]([\s\S]*?)\[/url\]");
regex!(URL_BARE, r"(?i)\[url\]([\s\S]*?)\[/url\]");
regex!(VIDEO_ANY, r"(?i)\[video(?:\s+[^\]]*)?\][\s\S]*?\[/video\]");
regex!(LIST_ITEM, r"\[\*\]\s*");
regex!(PARAGRAPH, r"\[/?p\]");
regex!(HEADING_OR_LIST, r"(?i)\[/?(?:h[1-6]|list)\]");
regex!(UNDERLINED_SECTION, r"\[u\]\[b\]\\?\[\s*([^\]]+?)\s*\]?\[/b\]\[/u\]");
regex!(BOLD_SECTION, r"\[b\]\\?\[\s*([^\]]+?)\s*\]?\[/b\]");
regex!(SUBPATCH, r"(?i)^[0-9]{2}-[0-9]{2}-[0-9]{4}\s+Patch");
regex!(ANY_TAG, r"\[/?[A-Za-z0-9_]+(?:[=\s][^\]]*)?\]");
regex!(ESCAPED_BRACKET, r"\\\[");
regex!(BLANK_RUNS, r"\n{3,}");
regex!(BBCODE_LIST, r"(?i)\[list\][\s\S]*?\[/list\]");
regex!(PATCH_BULLET, r"^(?:[-•]\s*\S|\*\s+\S)");
regex!(SPACES, r"\s+");
regex!(QUOTES, r#"^"|"$"#);
regex!(CLAN_IMAGE_PREFIX, r"(?i)^\{STEAM_CLAN_(?:LOC_)?IMAGE\}");
regex!(LINK_DELIMITERS, r"[\[\]()]");
regex!(EXPLICIT_HEADING, r"(?i)\[h[1-6]\]");
regex!(LINE_BREAKS, r"\r\n?");
regex!(URL_TAG, r"(?i)\[url=([^\]]+)\]([\s\S]*?)\[/url\]");
regex!(IMG_IN_LABEL, r"(?i)\[img(?:\s|\])");
regex!(STEAM_IMAGE, r#"(?i)\[img(?:\s+src=(?:"([^"]+)"|'([^']+)'|([^\]\s]+)))?\]([\s\S]*?)\[/img\]"#);
regex!(VIDEO_MP4, r#"(?i)\[video\s+[^\]]*(?-u:\b)mp4=(?:"([^"]+)"|'([^']+)'|([^\]\s]+))[^\]]*\][\s\S]*?\[/video\]"#);
regex!(HEADING_TAG, r"(?i)\[h[1-6]\]([\s\S]*?)\[/h[1-6]\]");
regex!(PARAGRAPH_ANY_CASE, r"(?i)\[/?p\]");
regex!(LIST_TAG, r"(?i)\[/?list\]");
regex!(LIST_ITEM_ANY_CASE, r"(?i)\[\*\]\s*");
regex!(BREAK_TAG, r"(?i)\[br\s*/?\]");
regex!(ITALIC, r"(?i)\[i\]([\s\S]*?)\[/i\]");
regex!(BOLD, r"(?i)\[b\]([\s\S]*?)\[/b\]");
regex!(UNDERLINE, r"(?i)\[/?u\]");
regex!(BLOCK_OPENER, r"^[#=.`>|+*~:$-]");
regex!(BOLD_LINE, r"(?i)^\[b\](.*?)\[/b\]$");
regex!(TOKEN, "\u{E000}([0-9]+)\u{E001}");
regex!(LEADING_MARKERS, r"^(?:[-*•]+\s*)");
regex!(STEAM_VIEW_URL, r#"href="(https://store\.steampowered\.com/news/app/[0-9]+/view/[0-9]+)""#);
regex!(UNFURL_BLOCK, r#"<div class="bbCodeBlock bbCodeBlock--unfurl[\s\S]*?</div>\s*</div>\s*</div>"#);
regex!(HTML_TAG, r"<[^>]+>");

/// `MM-DD-YYYY` out of "Gameplay Update - 03-06-2026" or "03-06-2026 Update".
pub fn extract_date_from_title(title: &str) -> Option<String> {
    TITLE_DATE.captures(title).map(|captures| captures[1].to_string())
}

fn bbcode_to_text(bbcode: &str) -> String {
    // Plain-text parsing omits presentation-only media.
    let text = IMG_ANY.replace_all(bbcode, "\n");
    let text = CLAN_IMAGE_TOKEN.replace_all(&text, "");
    let text = URL_WITH_TARGET.replace_all(&text, "$1");
    let text = URL_BARE.replace_all(&text, "$1");
    let text = VIDEO_ANY.replace_all(&text, "\n");
    let text = LIST_ITEM.replace_all(&text, "\n- ");

    // [/p][p] is a single newline; a standalone tag is a newline or nothing.
    let text = text.replace("[/p][p]", "\n");
    let text = PARAGRAPH.replace_all(&text, |captures: &Captures| if &captures[0] == "[p]" { "" } else { "\n" });
    let text = HEADING_OR_LIST.replace_all(&text, "\n");

    // Section header shape: [u][b]\[ General ][/b][/u]
    let text = UNDERLINED_SECTION.replace_all(&text, format!("{SECTION_MARKER}${{1}}").as_str());
    let text = BOLD_SECTION.replace_all(&text, |captures: &Captures| {
        let trimmed = js_trim(&captures[1]);
        if SECTION_NAMES.contains(&trimmed) {
            return format!("{SECTION_MARKER}{trimmed}");
        }
        // Sub-patch headers like "03-07-2026 Patch:"
        if SUBPATCH.is_match(trimmed) {
            return format!("{SUBPATCH_MARKER}{trimmed}");
        }
        trimmed.to_string()
    });

    let text = ANY_TAG.replace_all(&text, "");
    let text = ESCAPED_BRACKET.replace_all(&text, "[");
    let text = BLANK_RUNS.replace_all(&text, "\n\n");
    js_trim(&text).to_string()
}

/// Plain-text lines, shaped to feed `parse_and_group_content` directly.
pub fn parse_steam_content(bbcode: &str) -> String {
    bbcode_to_text(bbcode)
        .split('\n')
        .map(js_trim)
        .filter(|line| !line.is_empty() && !line.starts_with(SECTION_MARKER) && !line.starts_with(SUBPATCH_MARKER))
        .collect::<Vec<_>>()
        .join("\n")
}

pub fn is_steam_patch_content(bbcode: &str) -> bool {
    let without_lists = BBCODE_LIST.replace_all(bbcode, "");
    parse_steam_content(&without_lists).split('\n').any(|line| PATCH_BULLET.is_match(js_trim(line)))
}

fn safe_http_url(value: &str) -> Option<String> {
    let url = url::Url::parse(&QUOTES.replace_all(js_trim(value), "")).ok()?;
    let href = url.as_str();
    (matches!(url.scheme(), "http" | "https") && !LINK_DELIMITERS.is_match(href)).then(|| href.to_string())
}

fn steam_image_url(value: &str) -> Option<String> {
    safe_http_url(&CLAN_IMAGE_PREFIX.replace(js_trim(value), STEAM_IMAGE_BASE))
}

fn plain_bbcode(value: &str) -> String {
    let text = ANY_TAG.replace_all(value, "");
    let text = ESCAPED_BRACKET.replace_all(&text, "[");
    js_trim(&SPACES.replace_all(&text, " ")).to_string()
}

fn safe_mog_label(value: &str) -> String {
    js_trim(&LINK_DELIMITERS.replace_all(&plain_bbcode(value), "")).to_string()
}

fn first_group<'a>(captures: &'a Captures, groups: &[usize]) -> &'a str {
    groups
        .iter()
        .filter_map(|index| captures.get(*index))
        .map(|m| m.as_str())
        .find(|value| !value.is_empty())
        .unwrap_or("")
}

#[derive(Default)]
struct Tokens(std::cell::RefCell<Vec<String>>);

impl Tokens {
    fn protect(&self, value: String) -> String {
        let mut tokens = self.0.borrow_mut();
        tokens.push(value);
        format!("\u{E000}{}\u{E001}", tokens.len() - 1)
    }

    fn restore(&self, value: &str) -> String {
        let tokens = self.0.borrow();
        TOKEN
            .replace_all(value, |captures: &Captures| {
                captures[1].parse::<usize>().ok().and_then(|index| tokens.get(index)).cloned().unwrap_or_default()
            })
            .into_owned()
    }
}

/// Convert prose-shaped Steam BBCode directly to readable Mog blocks.
pub fn render_steam_announcement(title: &str, bbcode: &str) -> RenderedSteamAnnouncement {
    let tokens = Tokens::default();
    let has_explicit_heading = EXPLICIT_HEADING.is_match(bbcode);

    let content = LINE_BREAKS.replace_all(bbcode, "\n").replace('\u{a0}', " ");
    let content = URL_TAG.replace_all(&content, |captures: &Captures| {
        let (target, label) = (&captures[1], &captures[2]);
        if IMG_IN_LABEL.is_match(label) {
            return label.to_string();
        }
        let text = safe_mog_label(label);
        match safe_http_url(target) {
            Some(href) if !text.is_empty() => tokens.protect(mog_link(&href, &text)),
            _ => text,
        }
    });
    let content = STEAM_IMAGE.replace_all(&content, |captures: &Captures| {
        match steam_image_url(first_group(captures, &[1, 2, 3, 4])) {
            None => "\n".to_string(),
            Some(src) => format!(
                "\n{}\n",
                tokens.protect(mog_image(&src, &format!("{} announcement art", safe_mog_label(title))))
            ),
        }
    });
    let content =
        VIDEO_MP4.replace_all(&content, |captures: &Captures| match safe_http_url(first_group(captures, &[1, 2, 3])) {
            Some(href) => format!("\n{}\n", tokens.protect(mog_link(&href, "Video"))),
            None => "\n".to_string(),
        });
    let content = HEADING_TAG.replace_all(&content, "\n\u{E100}${1}\n");
    let content = PARAGRAPH_ANY_CASE.replace_all(&content, "\n");
    let content = LIST_TAG.replace_all(&content, "\n");
    let content = LIST_ITEM_ANY_CASE.replace_all(&content, "\n\u{E101}");
    let content = BREAK_TAG.replace_all(&content, "\n");

    let format_inline = |value: &str| -> String {
        let text = ITALIC.replace_all(value, |captures: &Captures| {
            tokens.protect(format!("__{}__", escape_mog_delimiters(&plain_bbcode(&captures[1]))))
        });
        let text = BOLD.replace_all(&text, |captures: &Captures| {
            tokens.protect(format!("**{}**", escape_mog_delimiters(&plain_bbcode(&captures[1]))))
        });
        let text = UNDERLINE.replace_all(&text, "");
        let text = ANY_TAG.replace_all(&text, "");
        let text = ESCAPED_BRACKET.replace_all(&text, "[");
        let text = SPACES.replace_all(&text, " ");
        let mut text = escape_mog_delimiters(js_trim(&text));
        if BLOCK_OPENER.is_match(&text) {
            text = format!("\\{text}");
        }
        tokens.restore(&text)
    };

    let mut blocks: Vec<(String, bool)> = Vec::new();
    let mut append = |value: String, list: bool| {
        if value.is_empty() {
            return;
        }
        match blocks.last_mut() {
            Some((previous, true)) if list => {
                previous.push('\n');
                previous.push_str(&value);
            }
            _ => blocks.push((value, list)),
        }
    };

    for raw_line in content.split('\n') {
        let line = js_trim(raw_line);
        if line.is_empty() || line == "-" {
            continue;
        }
        if let Some(heading) = line.strip_prefix('\u{E100}') {
            append(format!("## {}", format_inline(heading)), false);
        } else if let Some(item) = line.strip_prefix('\u{E101}') {
            append(format!("- {}", format_inline(item)), true);
        } else if let Some(captures) = BOLD_LINE.captures(line) {
            let marker = if has_explicit_heading { "###" } else { "#" };
            append(format!("{marker} {}", format_inline(&captures[1])), false);
        } else {
            append(format_inline(line), false);
        }
    }

    let text = parse_steam_content(bbcode)
        .split('\n')
        .map(|line| js_trim(&LEADING_MARKERS.replace(line, "")).to_string())
        .filter(|line| !line.is_empty())
        .collect::<Vec<_>>()
        .join(" ");

    RenderedSteamAnnouncement { mog: blocks.into_iter().map(|(value, _)| value).collect::<Vec<_>>().join("\n\n"), text }
}

fn string_field<'a>(item: &'a Value, key: &str) -> Result<&'a str> {
    item.get(key).and_then(Value::as_str).with_context(|| format!("newsitems: {key} must be a string"))
}

/// Every Deadlock community announcement Steam still serves, full text, newest first.
pub fn fetch_steam_announcements(http: &dyn Http, count: usize, timeout: Duration) -> Result<Vec<SteamAnnouncement>> {
    let url = format!(
        "{STEAM_NEWS_API}?appid={DEADLOCK_APP_ID}&count={count}&maxlength=0&feeds=steam_community_announcements"
    );
    let response = http.get(&url, &[], Some(timeout))?;
    if !response.ok() {
        bail!("Steam API HTTP {}: {}", response.status, response.status_text);
    }
    let data: Value = serde_json::from_str(&response.body)?;
    let appnews = data.get("appnews").context("appnews missing")?;
    appnews.get("appid").and_then(Value::as_f64).context("appnews.appid must be a number")?;
    let items = appnews.get("newsitems").and_then(Value::as_array).context("appnews.newsitems must be an array")?;
    items
        .iter()
        .map(|item| {
            for key in ["url", "feedlabel", "feedname"] {
                string_field(item, key)?;
            }
            for key in ["feed_type", "appid"] {
                item.get(key).and_then(Value::as_f64).with_context(|| format!("newsitems: {key} must be a number"))?;
            }
            if let Some(tags) = item.get("tags")
                && !tags.as_array().is_some_and(|tags| tags.iter().all(Value::is_string))
            {
                bail!("newsitems: tags must be strings");
            }
            let seconds = item.get("date").and_then(Value::as_f64).context("newsitems: date must be a number")?;
            let date = Utc
                .timestamp_millis_opt((seconds * 1000.0) as i64)
                .single()
                .context("newsitems: date out of range")?
                .format("%Y-%m-%dT%H:%M:%S%.3fZ")
                .to_string();
            Ok(SteamAnnouncement {
                gid: string_field(item, "gid")?.to_string(),
                title: string_field(item, "title")?.to_string(),
                date,
                author: string_field(item, "author")?.to_string(),
                content: string_field(item, "contents")?.to_string(),
            })
        })
        .collect()
}

/// True when the post is a link preview with no patch notes of its own.
pub fn is_steam_unfurl(html: &str) -> bool {
    if !STEAM_VIEW_URL.is_match(html) || !html.contains("bbCodeBlock--unfurl") {
        return false;
    }
    let stripped = UNFURL_BLOCK.replace_all(html, "");
    let stripped = HTML_TAG.replace_all(&stripped, "");
    utf16_len(js_trim(&stripped)) < 50
}
