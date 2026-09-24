use std::collections::{HashMap, HashSet};
use std::path::{Path, PathBuf};
use std::sync::LazyLock;
use std::time::Duration;

use anyhow::{Context, Result};
use chrono::{Datelike, TimeZone, Utc};
use deadlog_changelog::carry_enrichment;
use deadlog_db::write::snapshot::EntitySnapshot;
use deadlog_model::{MOG_IMAGE_PREFIX, author_avatar_path, entity_name_aliases, js_trim, parse_js_date, to_slug};
use regex::Regex;

use crate::api::forum::{
    ChangelogPost, PostContentResult, PostScrapeOptions, scrape_changelog_page, scrape_multiple_changelog_posts,
};
use crate::api::steam::{
    SteamAnnouncement, extract_date_from_title, fetch_steam_announcements, is_steam_patch_content, is_steam_unfurl,
    parse_steam_content, render_steam_announcement,
};
use crate::author::parse_author_name;
use crate::content::capture_version::{VersionCapture, with_captured_version};
use crate::content::generator::{
    ChangelogSource, EntityAssets, RenderedContent, build_entity_assets, generate_changelog,
};
use crate::content::parser::{EntityLists, deduplicate_lines, extract_content};
use crate::http::Http;
use deadlog_model::utf16_len;

/// The first line of a note whose body came from a source that no longer serves it
/// (`2024/11-07.mg` and `2024/12-06.mg` came from the Steam API, which has dropped notes
/// that old). Regenerating such a file from the forum cache replaces real patch notes
/// with the forum's unfurl summary, so the scraper will not overwrite or delete one.
pub const IRREPRODUCIBLE_MARKER: &str = "// Not reproducible offline";

pub struct ScrapeConfig<'a> {
    pub http: &'a dyn Http,
    pub changelogs_dir: PathBuf,
    pub cache_dir: PathBuf,
    pub overwrite: bool,
    /// Lets `overwrite` replace files carrying [`IRREPRODUCIBLE_MARKER`].
    pub overwrite_irreproducible: bool,
    pub snapshot: &'a EntitySnapshot,
    pub capture: Option<VersionCapture>,
    /// Pause between forum requests, to stay polite.
    pub delay: Duration,
}

#[derive(Debug, Clone, Copy, Default, PartialEq, Eq)]
pub struct ScrapeResult {
    pub created: usize,
    pub updated: usize,
    pub changed: bool,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WriteOutcome {
    Created,
    Updated,
    Unchanged,
    /// The file carries [`IRREPRODUCIBLE_MARKER`] and was left alone.
    Protected,
}

static FOUR_DIGITS: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"(?-u:\b)[0-9]{4}(?-u:\b)").unwrap());
static UPDATE_WORD: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"(?i)(?-u:\b)update(?-u:\b)").unwrap());
static ALIAS_LINE: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"(?m)^alias [^\n\r\x{2028}\x{2029}]+$").unwrap());
static TITLE_LINE: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"(?m)^title [^\n\r\x{2028}\x{2029}]+$").unwrap());
static STEAM_GID_LINE: LazyLock<Regex> = LazyLock::new(|| Regex::new(r#"(?m)^steam_gid "([^"]+)"$"#).unwrap());
static HTML_TAG: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"<[^>]+>").unwrap());

fn slugify(title: &str) -> String {
    let cleaned = FOUR_DIGITS.replace_all(title, "");
    let cleaned = UPDATE_WORD.replace_all(&cleaned, "");
    let slug = to_slug(&cleaned);
    if slug.is_empty() { "announcement".into() } else { slug }
}

fn resolve_filepath(changelogs_dir: &Path, title: &str, date: &str) -> PathBuf {
    let year = parse_js_date(date).map_or_else(|| "NaN".to_string(), |date| date.year().to_string());
    changelogs_dir.join(year).join(format!("{}.mg", slugify(title)))
}

pub fn is_irreproducible(content: &str) -> bool {
    content.lines().any(|line| line.trim_start().starts_with(IRREPRODUCIBLE_MARKER))
}

fn protected(path: &Path, config: &ScrapeConfig) -> bool {
    !config.overwrite_irreproducible && std::fs::read_to_string(path).is_ok_and(|content| is_irreproducible(&content))
}

/// Writes a generated changelog, keeping what the existing file already recorded: its
/// legacy alias, its captured client version, and its impact/enrichment blocks.
pub fn write_mog_file(
    filepath: &Path,
    content: &str,
    capture: Option<&VersionCapture>,
    overwrite_irreproducible: bool,
) -> Result<WriteOutcome> {
    std::fs::create_dir_all(filepath.parent().unwrap_or(Path::new(".")))?;
    let previous = std::fs::read_to_string(filepath).ok();
    if let Some(previous) = &previous
        && is_irreproducible(previous)
        && !overwrite_irreproducible
    {
        eprintln!("   🔒 Refusing to overwrite {}: it is marked \"{IRREPRODUCIBLE_MARKER}\"", filepath.display());
        return Ok(WriteOutcome::Protected);
    }
    let mut content = content.to_string();
    if let Some(previous) = &previous
        && !content.lines().any(|line| line.starts_with("alias "))
        && let Some(alias) = ALIAS_LINE.find(previous)
    {
        content = TITLE_LINE
            .replace(&content, |captures: &regex::Captures| format!("{}\n{}", &captures[0], alias.as_str()))
            .into_owned();
    }
    content = with_captured_version(&content, previous.as_deref(), capture);
    if let Some(previous) = &previous {
        content = carry_enrichment(previous, &content)?;
    }
    if previous.as_deref() == Some(content.as_str()) {
        return Ok(WriteOutcome::Unchanged);
    }
    std::fs::write(filepath, &content)?;
    Ok(if previous.is_some() { WriteOutcome::Updated } else { WriteOutcome::Created })
}

fn mog_files(dir: &Path, files: &mut Vec<PathBuf>) {
    let Ok(entries) = std::fs::read_dir(dir) else { return };
    let mut entries: Vec<PathBuf> = entries.filter_map(|entry| entry.ok().map(|entry| entry.path())).collect();
    entries.sort();
    for path in entries {
        if path.is_dir() {
            mog_files(&path, files);
        } else if path.extension().is_some_and(|extension| extension == "mg") {
            files.push(path);
        }
    }
}

fn existing_steam_files(changelogs_dir: &Path) -> HashMap<String, PathBuf> {
    let mut files = Vec::new();
    mog_files(changelogs_dir, &mut files);
    files
        .into_iter()
        .filter_map(|path| {
            let content = std::fs::read_to_string(&path).ok()?;
            let gid = STEAM_GID_LINE.captures(&content)?[1].to_string();
            Some((gid, path))
        })
        .collect()
}

fn resolve_steam_filepath(
    changelogs_dir: &Path,
    note: &SteamAnnouncement,
    files_by_gid: &HashMap<String, PathBuf>,
    reserved: &mut HashSet<PathBuf>,
) -> PathBuf {
    if let Some(existing) = files_by_gid.get(&note.gid) {
        return existing.clone();
    }
    let mut filepath = resolve_filepath(changelogs_dir, &note.title, &note.date);
    if reserved.contains(&filepath) || filepath.exists() {
        let stem = filepath.file_stem().map(|stem| stem.to_string_lossy().into_owned()).unwrap_or_default();
        filepath = filepath.with_file_name(format!("{stem}-{}.mg", note.gid));
    }
    reserved.insert(filepath.clone());
    filepath
}

fn needs_steam_backfill(filepath: &Path, note: Option<&SteamAnnouncement>) -> bool {
    let (Some(note), Ok(content)) = (note, std::fs::read_to_string(filepath)) else { return false };
    !content.contains(&format!("steam_gid \"{}\"", note.gid))
}

pub fn build_changelog_source(
    content: &PostContentResult,
    thread_id: &str,
    steam: Option<&SteamAnnouncement>,
    alias: Option<String>,
) -> Result<ChangelogSource> {
    let forum_raw = extract_content(&content.content)?;
    let forum_images: Vec<&str> = forum_raw
        .split('\n')
        .filter(|line| line.starts_with(MOG_IMAGE_PREFIX) && !line.to_lowercase().contains("favicon"))
        .collect();
    let mut replies = Vec::new();
    for reply in content.poster_replies.iter().filter(|reply| !is_steam_unfurl(&reply.content)) {
        let text = extract_content(&reply.content)?;
        if !js_trim(&text).is_empty() {
            replies.push(text);
        }
    }

    let mut rendered = None;
    let mut steam_meta = None;
    let raw = match steam {
        Some(note) => {
            let steam_raw = parse_steam_content(&note.content);
            let rough_forum_len = utf16_len(&HTML_TAG.replace_all(&content.content, ""));
            if is_steam_unfurl(&content.content) || rough_forum_len <= utf16_len(&steam_raw) {
                steam_meta = Some(note);
                if is_steam_patch_content(&note.content) {
                    [forum_images.iter().map(|image| image.to_string()).collect(), vec![steam_raw], replies]
                        .concat()
                        .join("\n")
                } else {
                    let announcement = render_steam_announcement(&note.title, &note.content);
                    rendered = Some(RenderedContent { mog: announcement.mog, text: announcement.text });
                    replies.join("\n")
                }
            } else {
                [vec![forum_raw], replies].concat().join("\n")
            }
        }
        None => [vec![forum_raw], replies].concat().join("\n"),
    };
    let raw = deduplicate_lines(&raw);

    let author = match steam_meta {
        Some(note) => note.author.clone(),
        None => parse_author_name(Some(&content.author)),
    };
    let published = match steam_meta {
        Some(note) => note.date.clone(),
        None if !content.pub_date.is_empty() => content.pub_date.clone(),
        None => now_iso(),
    };
    let raw_content = match &rendered {
        Some(_) if js_trim(&raw).is_empty() => None,
        _ => Some(raw),
    };
    Ok(ChangelogSource {
        title: steam_meta.map_or_else(|| content.title.clone(), |note| note.title.clone()),
        alias,
        published,
        author_image: Some(author_avatar_path(&author)),
        author,
        thread_id: Some(thread_id.to_string()),
        steam_gid: steam.map(|note| note.gid.clone()),
        raw_content,
        rendered_content: rendered,
    })
}

fn build_steam_changelog_source(note: &SteamAnnouncement) -> ChangelogSource {
    let (raw_content, rendered_content) = if is_steam_patch_content(&note.content) {
        (Some(parse_steam_content(&note.content)), None)
    } else {
        let rendered = render_steam_announcement(&note.title, &note.content);
        (None, Some(RenderedContent { mog: rendered.mog, text: rendered.text }))
    };
    ChangelogSource {
        title: note.title.clone(),
        alias: None,
        published: note.date.clone(),
        author: note.author.clone(),
        author_image: Some(author_avatar_path(&note.author)),
        thread_id: None,
        steam_gid: Some(note.gid.clone()),
        raw_content,
        rendered_content,
    }
}

const MINUTE: i64 = 60 * 1000;
const HOUR: i64 = 60 * MINUTE;
const STEAM_FORUM_MATCH_WINDOW: i64 = 15 * MINUTE;
const STEAM_TITLE_DATE_MATCH_WINDOW: i64 = 6 * HOUR;
const STEAM_EXACT_TITLE_MATCH_WINDOW: i64 = 24 * HOUR;
const STEAM_TITLE_DATE_TOLERANCE: i64 = 36 * HOUR;
const STEAM_BACKFILL_MATCH_WINDOW: i64 = 90 * 24 * HOUR;

fn millis(date: &str) -> Option<i64> {
    parse_js_date(date).map(|date| date.timestamp_millis())
}

fn is_published_on_title_date(title: &str, published: &str) -> bool {
    let Some(title_date) = extract_date_from_title(title) else { return false };
    let parts: Vec<u32> = title_date.split('-').filter_map(|part| part.parse().ok()).collect();
    let [month, day, year] = parts[..] else { return false };
    let Some(noon) = Utc.with_ymd_and_hms(year as i32, month, day, 12, 0, 0).single() else { return false };
    millis(published).is_some_and(|published| (published - noon.timestamp_millis()).abs() <= STEAM_TITLE_DATE_TOLERANCE)
}

/// `post − note` in milliseconds; `None` stands in for JavaScript's NaN, which fails
/// every comparison.
fn forum_delay(post: &ChangelogPost, note: &SteamAnnouncement) -> Option<i64> {
    Some(millis(&post.pub_date)? - millis(&note.date)?)
}

static UPDATE: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"(?i)(?-u:\b)update(?-u:\b)").unwrap());

fn has_same_title_date(post: &ChangelogPost, note: &SteamAnnouncement) -> bool {
    let post_date = extract_date_from_title(&post.title);
    post_date.is_some()
        && post_date == extract_date_from_title(&note.title)
        && UPDATE.is_match(&post.title)
        && UPDATE.is_match(&note.title)
}

pub struct SteamMatches {
    /// Forum post id → the Steam note that carries the same patch.
    pub steam_by_forum_post_id: HashMap<String, SteamAnnouncement>,
    pub unmatched_steam_notes: Vec<SteamAnnouncement>,
}

/// Pairs forum posts with Steam announcements of the same patch: an exact title first,
/// then progressively looser signals, each only when the pairing is unique both ways.
pub fn match_steam_notes_to_forum_posts(posts: &[ChangelogPost], notes: &[SteamAnnouncement]) -> SteamMatches {
    let mut matched: HashMap<String, SteamAnnouncement> = HashMap::new();
    let mut consumed: HashSet<String> = HashSet::new();

    for post in posts {
        let candidates: Vec<&SteamAnnouncement> = notes
            .iter()
            .filter(|note| {
                !consumed.contains(&note.gid)
                    && to_slug(&note.title) == to_slug(&post.title)
                    && forum_delay(post, note).is_some_and(|delay| delay.abs() <= STEAM_EXACT_TITLE_MATCH_WINDOW)
            })
            .collect();
        if let [note] = candidates[..] {
            matched.insert(post.post_id.clone(), note.clone());
            consumed.insert(note.gid.clone());
        }
    }

    let unmatched_posts: Vec<&ChangelogPost> =
        posts.iter().filter(|post| !matched.contains_key(&post.post_id)).collect();
    let unmatched_notes: Vec<&SteamAnnouncement> = notes.iter().filter(|note| !consumed.contains(&note.gid)).collect();
    let mut claim_unique_pairs = |matches: &dyn Fn(&ChangelogPost, &SteamAnnouncement) -> bool| {
        for post in &unmatched_posts {
            if matched.contains_key(&post.post_id) {
                continue;
            }
            let note_candidates: Vec<&&SteamAnnouncement> =
                unmatched_notes.iter().filter(|note| !consumed.contains(&note.gid) && matches(post, note)).collect();
            let [note] = note_candidates[..] else { continue };
            let post_candidates = unmatched_posts
                .iter()
                .filter(|candidate| !matched.contains_key(&candidate.post_id) && matches(candidate, note))
                .count();
            if post_candidates == 1 {
                matched.insert(post.post_id.clone(), (*note).clone());
                consumed.insert(note.gid.clone());
            }
        }
    };

    claim_unique_pairs(&|post, note| {
        has_same_title_date(post, note)
            && forum_delay(post, note).is_some_and(|delay| delay.abs() <= STEAM_TITLE_DATE_MATCH_WINDOW)
    });
    claim_unique_pairs(&|post, note| {
        UPDATE.is_match(&format!("{}\n{}", note.title, note.content))
            && forum_delay(post, note).is_some_and(|delay| delay.abs() <= STEAM_FORUM_MATCH_WINDOW)
    });
    claim_unique_pairs(&|post, note| {
        has_same_title_date(post, note)
            && forum_delay(post, note).is_some_and(|delay| delay > 0 && delay <= STEAM_BACKFILL_MATCH_WINDOW)
            && !is_published_on_title_date(&post.title, &post.pub_date)
            && is_published_on_title_date(&note.title, &note.date)
    });

    SteamMatches {
        unmatched_steam_notes: notes.iter().filter(|note| !consumed.contains(&note.gid)).cloned().collect(),
        steam_by_forum_post_id: matched,
    }
}

pub fn now_iso() -> String {
    Utc::now().format("%Y-%m-%dT%H:%M:%S%.3fZ").to_string()
}

fn entity_lists(snapshot: &EntitySnapshot) -> EntityLists {
    EntityLists {
        heroes: snapshot.heroes.iter().flat_map(|hero| entity_name_aliases(&hero.name)).collect(),
        items: snapshot.items.iter().flat_map(|item| entity_name_aliases(&item.name)).collect(),
    }
}

fn relative_slug(changelogs_dir: &Path, path: &Path) -> String {
    let relative = path.strip_prefix(changelogs_dir).unwrap_or(path).to_string_lossy().replace('\\', "/");
    relative.strip_suffix(".mg").unwrap_or(&relative).to_string()
}

fn report(outcome: WriteOutcome, filepath: &Path) {
    match outcome {
        WriteOutcome::Created => println!("   ✨ Created: {}", filepath.display()),
        WriteOutcome::Protected => {}
        _ => println!("   📄 Updated: {}", filepath.display()),
    }
}

struct Writer<'a> {
    config: &'a ScrapeConfig<'a>,
    entities: EntityLists,
    assets: EntityAssets,
    created: usize,
    updated: usize,
}

/// Scrapes the changelog forum and Steam announcements into `.mg` files. New patches
/// are written; existing ones only with `overwrite`, or when a Steam note newly matches
/// them. Files marked [`IRREPRODUCIBLE_MARKER`] are never rewritten or deleted unless
/// `overwrite_irreproducible` is set.
pub fn scrape_changelogs(config: &ScrapeConfig) -> Result<ScrapeResult> {
    let snapshot = config.snapshot;
    let mut writer = Writer {
        config,
        entities: entity_lists(snapshot),
        assets: build_entity_assets(&snapshot.heroes, &snapshot.items)?,
        created: 0,
        updated: 0,
    };
    println!("   Found {} heroes, {} items", writer.entities.heroes.len(), writer.entities.items.len());

    println!("🔍 Fetching changelog posts from forum and Steam API...");
    let (posts, steam_notes) = std::thread::scope(|scope| {
        let steam = scope.spawn(|| fetch_steam_announcements(config.http, 1000, Duration::from_secs(30)));
        let posts = scrape_changelog_page(config.http, config.delay);
        let steam = steam.join().expect("steam fetch panicked").unwrap_or_else(|error| {
            eprintln!("   ⚠️  Steam API fetch failed: {error:#}");
            Vec::new()
        });
        (posts, steam)
    });
    let posts = posts?;
    println!("📋 Found {} forum posts, {} Steam announcements", posts.len(), steam_notes.len());

    let matches = match_steam_notes_to_forum_posts(&posts, &steam_notes);
    let dir = &config.changelogs_dir;
    let mut new_posts = Vec::new();
    let mut skipped: Vec<(String, &str)> = Vec::new();
    for post in &posts {
        let filepath = resolve_filepath(dir, &post.title, &post.pub_date);
        if filepath.exists()
            && !config.overwrite
            && !needs_steam_backfill(&filepath, matches.steam_by_forum_post_id.get(&post.post_id))
        {
            skipped.push((post.title.clone(), "exists (use --overwrite)"));
            continue;
        }
        new_posts.push(post);
    }

    let files_by_gid = existing_steam_files(dir);
    let mut reserved: HashSet<PathBuf> = files_by_gid.values().cloned().collect();
    let mut steam_only = Vec::new();
    for note in &matches.unmatched_steam_notes {
        let filepath = resolve_steam_filepath(dir, note, &files_by_gid, &mut reserved);
        if filepath.exists() && !config.overwrite {
            skipped.push((note.title.clone(), "exists (use --overwrite)"));
            continue;
        }
        steam_only.push((note, filepath));
    }

    if !skipped.is_empty() {
        println!("\n⏭️  Skipping {} posts:", skipped.len());
        for (title, reason) in skipped.iter().take(10) {
            println!("   - {title}: {reason}");
        }
        if skipped.len() > 10 {
            println!("   ... and {} more", skipped.len() - 10);
        }
    }

    if new_posts.is_empty() && steam_only.is_empty() {
        println!("\n✨ All changelogs up to date!");
        return Ok(ScrapeResult::default());
    }

    if !new_posts.is_empty() {
        println!("\n🕷️  Scraping {} forum posts...", new_posts.len());
        let owned: Vec<ChangelogPost> = new_posts.iter().map(|post| (*post).clone()).collect();
        let options = PostScrapeOptions {
            use_cache: true,
            cache_dir: config.cache_dir.clone(),
            delay: config.delay,
            ..Default::default()
        };
        let contents = scrape_multiple_changelog_posts(config.http, &owned, &options);
        let by_id: HashMap<&str, &PostContentResult> =
            contents.iter().map(|content| (content.post_id.as_str(), content)).collect();
        println!("\n📝 Writing changelogs...");
        for post in new_posts {
            let Some(content) = by_id.get(post.post_id.as_str()) else {
                eprintln!("   ⚠️  No content for: {}", post.title);
                continue;
            };
            writer.write_forum_post(post, content, &files_by_gid, matches.steam_by_forum_post_id.get(&post.post_id))?;
        }
    }

    if !steam_only.is_empty() {
        println!("\n🎮 Writing {} Steam-only announcements...", steam_only.len());
        for (note, filepath) in steam_only {
            let changelog =
                generate_changelog(&build_steam_changelog_source(note), &writer.entities, Some(&writer.assets));
            let outcome =
                write_mog_file(&filepath, &changelog, config.capture.as_ref(), config.overwrite_irreproducible)?;
            report(outcome, &filepath);
            writer.count(outcome, false);
        }
    }

    println!("\n✅ Done! Created {}, updated {} changelogs.", writer.created, writer.updated);
    Ok(ScrapeResult { created: writer.created, updated: writer.updated, changed: writer.created + writer.updated > 0 })
}

impl Writer<'_> {
    fn count(&mut self, outcome: WriteOutcome, migrated: bool) {
        match outcome {
            WriteOutcome::Created => self.created += 1,
            WriteOutcome::Updated => self.updated += 1,
            _ if migrated => self.updated += 1,
            _ => {}
        }
    }

    fn write_forum_post(
        &mut self,
        post: &ChangelogPost,
        content: &PostContentResult,
        files_by_gid: &HashMap<String, PathBuf>,
        steam_note: Option<&SteamAnnouncement>,
    ) -> Result<()> {
        let config = self.config;
        let filepath = resolve_filepath(&config.changelogs_dir, &post.title, &post.pub_date);
        let existing = steam_note.and_then(|note| files_by_gid.get(&note.gid));
        let migrated = existing.filter(|existing| **existing != filepath);
        if let Some(path) = migrated.filter(|path| protected(path, config)) {
            eprintln!("   🔒 Leaving {} in place: it is marked \"{IRREPRODUCIBLE_MARKER}\"", path.display());
            return Ok(());
        }
        let alias = migrated.map(|path| relative_slug(&config.changelogs_dir, path));
        if steam_note.is_some() {
            println!("   🔗 Matched Steam content for: {}", post.title);
        }

        let source = build_changelog_source(content, &post.post_id, steam_note, alias)
            .with_context(|| format!("building {}", post.title))?;
        let changelog = generate_changelog(&source, &self.entities, Some(&self.assets));
        let outcome = write_mog_file(&filepath, &changelog, config.capture.as_ref(), config.overwrite_irreproducible)?;
        if outcome == WriteOutcome::Protected {
            return Ok(());
        }
        if let Some(path) = migrated {
            std::fs::remove_file(path)?;
        }
        report(outcome, &filepath);
        self.count(outcome, migrated.is_some());
        Ok(())
    }
}
