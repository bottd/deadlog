use std::collections::HashMap;
use std::path::Path;
use std::sync::Mutex;
use std::sync::atomic::{AtomicUsize, Ordering};

use anyhow::{Context, Result, bail};
use deadlog_model::{format_date_short, patch_heading};
use serde_json::Value;

use crate::Report;
use crate::components::RowIcon;
use crate::images::{Fetch, ImageCache, convert};
use crate::inputs::{HeroEntry, Icon, Inputs, ItemEntry, Patch, PatchIcons};
use crate::layouts::{self, ChangelogLayout, HeroLayout, HomeLayout, ItemLayout};
use crate::render::Renderer;
use crate::text::{count_label, display_name, is_renderable_slug};

const ROW_ICONS: usize = 8;

pub const CONCURRENCY: usize = 8;

#[derive(Debug, Clone, Default, PartialEq)]
pub struct EntityStats {
    pub change_count: usize,
    pub patch_count: usize,
    pub uncounted_patch_count: usize,
    pub latest_date: Option<String>,
    pub latest_patch: String,
    pub latest_named: bool,
    pub latest_mention: bool,
}

pub fn change_label(stats: &EntityStats) -> String {
    if stats.uncounted_patch_count == 0 {
        return count_label(stats.change_count, "CHANGE", None);
    }
    if stats.uncounted_patch_count == stats.patch_count {
        return String::new();
    }
    format!("{}+ CHANGES", stats.change_count)
}

pub fn history_line(stats: &EntityStats) -> String {
    let Some(latest_date) = stats.latest_date.as_deref().filter(|_| stats.patch_count > 0) else {
        return "No changes recorded yet.".into();
    };
    let action = if stats.latest_mention { "mentioned" } else { "changed" };
    if !stats.latest_named {
        return format!("Last {action} in the {} patch.", stats.latest_patch);
    }
    format!("Last {action} {} in {}.", format_date_short(latest_date), stats.latest_patch)
}

fn fold(icons: &[Icon], into: &mut HashMap<String, EntityStats>, patch: &Patch) {
    for icon in icons {
        let stats = into.entry(icon.slug.clone()).or_default();
        // A mention without its own change section has an unknown count, not zero.
        match icon.change_count {
            None => stats.uncounted_patch_count += 1,
            Some(count) => stats.change_count += count,
        }
        stats.patch_count += 1;
        if stats.latest_date.as_deref().is_none_or(|latest| patch.pub_date.as_str() > latest) {
            let heading = patch_heading(&patch.title, &patch.pub_date);
            stats.latest_date = Some(patch.pub_date.clone());
            stats.latest_patch = heading.heading;
            stats.latest_named = heading.named;
            stats.latest_mention = icon.change_count.is_none();
        }
    }
}

#[derive(Debug, Default)]
pub struct AllStats {
    pub heroes: HashMap<String, EntityStats>,
    pub items: HashMap<String, EntityStats>,
}

pub fn collect_entity_stats(inputs: &Inputs) -> AllStats {
    let mut stats = AllStats::default();
    for patch in &inputs.patches {
        let Some(icons) = inputs.icons.get(&patch.id) else { continue };
        fold(&icons.heroes, &mut stats.heroes, patch);
        fold(&icons.items, &mut stats.items, patch);
    }
    stats
}

fn resolve_row(icons: &[Icon], images: &ImageCache) -> Result<Vec<RowIcon>> {
    let mut row = Vec::new();
    for icon in icons.iter().take(ROW_ICONS) {
        let src = images.get(&icon.src)?;
        if !src.is_empty() {
            row.push(RowIcon { src: src.to_string(), tone: icon.tone });
        }
    }
    Ok(row)
}

fn resolve_rows(icons: &PatchIcons, images: &ImageCache) -> Result<(Vec<RowIcon>, Vec<RowIcon>)> {
    Ok((resolve_row(&icons.heroes, images)?, resolve_row(&icons.items, images)?))
}

/// Everything a run shares across its workers.
pub struct Run<'a> {
    pub renderer: &'a Renderer,
    pub fetch: &'a Fetch<'a>,
    pub images: ImageCache<'a>,
    pub out: &'a Path,
    pub failures: Mutex<Vec<String>>,
}

impl<'a> Run<'a> {
    pub fn new(renderer: &'a Renderer, fetch: &'a Fetch<'a>, out: &'a Path) -> Self {
        Self { renderer, fetch, images: ImageCache::new(fetch), out, failures: Mutex::default() }
    }

    fn fail(&self, label: String) {
        self.failures.lock().unwrap().push(label);
    }

    fn write(&self, node: Value, path: &Path) -> Result<()> {
        let png = self.renderer.render_png(node)?;
        let path = self.out.join(path);
        if let Some(parent) = path.parent() {
            std::fs::create_dir_all(parent)
                .with_context(|| format!("creating {}", parent.display()))?;
        }
        std::fs::write(&path, png).with_context(|| format!("writing {}", path.display()))
    }

    fn generate_one(&self, label: String, generate: impl FnOnce() -> Result<()>) -> bool {
        match generate() {
            Ok(()) => true,
            Err(error) => {
                eprintln!("Failed to generate {label}: {error:#}");
                self.fail(label);
                false
            }
        }
    }

    /// Runs `task` over `items` on [`CONCURRENCY`] workers, returning how many succeeded.
    fn pooled<T: Sync>(&self, items: &[T], task: impl Fn(&T) -> bool + Sync) -> usize {
        let next = AtomicUsize::new(0);
        let done = AtomicUsize::new(0);
        std::thread::scope(|scope| {
            for _ in 0..CONCURRENCY.min(items.len()) {
                scope.spawn(|| {
                    while let Some(item) = items.get(next.fetch_add(1, Ordering::Relaxed)) {
                        if task(item) {
                            done.fetch_add(1, Ordering::Relaxed);
                        }
                    }
                });
            }
        });
        done.into_inner()
    }

    fn changelog(&self, patch: &Patch, icons: &PatchIcons) -> Result<()> {
        let (hero_icons, item_icons) = resolve_rows(icons, &self.images)?;
        let art = convert(self.fetch, patch.preview_image.as_deref().unwrap_or_default())
            .unwrap_or_default();
        let heading = patch_heading(&patch.title, &patch.pub_date);
        let node = layouts::changelog(&ChangelogLayout {
            heading: heading.heading,
            date: if heading.named { format_date_short(&patch.pub_date) } else { String::new() },
            author: patch.author.clone(),
            major_update: patch.major_update,
            hero_count: icons.heroes.len(),
            item_count: icons.items.len(),
            hero_icons,
            item_icons,
            summary: patch.content_text.clone(),
            art: Some(art),
        });
        self.write(node, &Path::new("change").join(format!("{}.png", patch.id)))
    }

    fn home(
        &self,
        latest: &Patch,
        totals: (usize, usize, usize),
        icons: &PatchIcons,
    ) -> Result<()> {
        let (hero_icons, item_icons) = resolve_rows(icons, &self.images)?;
        let (patch_count, hero_count, item_count) = totals;
        let node = layouts::home(&HomeLayout {
            last_updated: format_date_short(&latest.pub_date).to_uppercase(),
            patch_count,
            hero_count,
            item_count,
            hero_icons,
            item_icons,
            latest_hero_count: icons.heroes.len(),
            latest_item_count: icons.items.len(),
        });
        self.write(node, Path::new("index.png"))
    }

    fn hero(&self, hero: &HeroEntry, stats: &EntityStats) -> Result<()> {
        if hero.image.is_empty() {
            bail!("Hero {} has no images", hero.name);
        }
        let node = layouts::hero(&HeroLayout {
            name: display_name(&hero.name),
            hero_type: hero.hero_type.clone(),
            image: self.images.get(&hero.image)?.to_string(),
            changes: change_label(stats),
            patch_count: stats.patch_count,
            history: history_line(stats),
        });
        self.write(node, &Path::new("hero").join(format!("{}.png", hero.slug)))
    }

    fn item(&self, item: &ItemEntry, stats: &EntityStats) -> Result<()> {
        if item.image.is_empty() {
            bail!("Item {} has no images", item.name);
        }
        let node = layouts::item(&ItemLayout {
            name: display_name(&item.name),
            kind: item.kind.clone(),
            category: item.category.clone(),
            tier: item.tier,
            image: self.images.get(&item.image)?.to_string(),
            changes: change_label(stats),
            patch_count: stats.patch_count,
            history: history_line(stats),
        });
        self.write(node, &Path::new("item").join(format!("{}.png", item.slug)))
    }
}

/// The generation order and failure labels of `generate-previews.ts`.
pub fn run(inputs: &Inputs, run: &Run) -> Report {
    let stats = collect_entity_stats(inputs);
    let empty = PatchIcons::default();
    let icons_for = |id: &str| inputs.icons.get(id).unwrap_or(&empty);
    let mut counts = Report::default();

    let latest = inputs
        .patches
        .iter()
        .reduce(|latest, patch| if patch.pub_date > latest.pub_date { patch } else { latest });
    if let Some(latest) = latest {
        let totals = (inputs.patches.len(), inputs.heroes.len(), inputs.items.len());
        if run
            .generate_one("home preview".into(), || run.home(latest, totals, icons_for(&latest.id)))
        {
            counts.home = 1;
        }
    }

    counts.changelogs = run.pooled(&inputs.patches, |patch| {
        if !is_renderable_slug(&patch.id) {
            run.fail(format!("changelog preview {} (unroutable id)", patch.id));
            return false;
        }
        run.generate_one(format!("changelog preview {}", patch.id), || {
            run.changelog(patch, icons_for(&patch.id))
        })
    });

    let none = EntityStats::default();
    counts.heroes = run.pooled(&inputs.heroes, |hero| {
        if !is_renderable_slug(&hero.slug) {
            run.fail(format!("hero preview {} (unroutable slug \"{}\")", hero.name, hero.slug));
            return false;
        }
        run.generate_one(format!("hero preview {}", hero.name), || {
            run.hero(hero, stats.heroes.get(&hero.slug).unwrap_or(&none))
        })
    });

    counts.items = run.pooled(&inputs.items, |item| {
        if !is_renderable_slug(&item.slug) {
            run.fail(format!("item preview {} (unroutable slug \"{}\")", item.name, item.slug));
            return false;
        }
        run.generate_one(format!("item preview {}", item.name), || {
            run.item(item, stats.items.get(&item.slug).unwrap_or(&none))
        })
    });

    counts.failures = std::mem::take(&mut *run.failures.lock().unwrap());
    counts.failures.sort();
    counts
}
