mod db;
mod stats;

use std::fs;
use std::path::{Path, PathBuf};

use anyhow::{Context, Result, bail};
use askama::Template;

use db::{Ability, Db, Hero, HeroEntry};
use stats::{ShareRow, Windows};

struct Note {
    name: String,
    image: String,
    bullets: Vec<String>,
}

struct Block {
    kind: &'static str,
    id: String,
    title: &'static str,
    caption: String,
    rows: Vec<ShareRow>,
    round: bool,
    paired: bool,
    notes: Vec<Note>,
}

struct GroupView {
    ability: Option<String>,
    icon: Option<String>,
    bullets: Vec<String>,
}

struct EntryView {
    id: String,
    date: String,
    href: String,
    count: String,
    groups: Vec<GroupView>,
    band: Vec<Block>,
}

#[derive(Template)]
#[template(path = "heroes.html")]
struct HeroesPage<'a> {
    heroes: &'a [Hero],
}

#[derive(Template)]
#[template(path = "hero.html")]
struct HeroPage<'a> {
    hero: &'a Hero,
    abilities: &'a [Ability],
    entries: &'a [EntryView],
    selected: Option<String>,
    has_stats: bool,
}

#[derive(Template)]
#[template(path = "fragment.html")]
struct HistoryFragment<'a> {
    hero: &'a Hero,
    entries: &'a [EntryView],
    selected: Option<String>,
}

fn block(
    kind: &'static str,
    title: &'static str,
    lead: String,
    rows: Vec<ShareRow>,
    windows: &Windows,
    entry_id: &str,
) -> Block {
    Block {
        kind,
        id: format!("{kind}-{entry_id}"),
        title,
        caption: format!("{lead}, {}.", windows.span(&rows)),
        paired: rows.iter().any(|row| row.after.is_some()),
        rows,
        round: false,
        notes: Vec::new(),
    }
}

fn entry_view(db: &Db, hero: &Hero, abilities: &[Ability], entry: &HeroEntry) -> Result<EntryView> {
    let groups = entry.groups.clone().unwrap_or_default();
    let count: usize = groups.iter().map(|group| group.bullets.len()).sum();
    let mut band = Vec::new();
    if let Some(stats) = entry.stats.clone() {
        let windows = Windows {
            stats,
            entry_year: stats::entry_year(&entry.pub_date),
            open: entry.impact.as_ref().is_some_and(|impact| !impact.closed),
        };
        if let Some(order) = &entry.order {
            let rows = stats::maxed_first_rows(order, abilities, &groups);
            if !rows.is_empty() {
                band.push(block(
                    "maxed-first",
                    "Maxed first",
                    format!("Share of {} players who maxed each ability first", hero.name),
                    rows,
                    &windows,
                    &entry.changelog_id,
                ));
            }
        }
        if let Some(related) = entry.related.as_ref().filter(|related| related.status == "complete") {
            let mut rows = Vec::new();
            let mut notes = Vec::new();
            for item in &related.items {
                let Some(found) = db.item_in_patch(&entry.changelog_id, item.id)? else { continue };
                let bullets: Vec<String> =
                    found.changes.iter().flat_map(|group| group.bullets.clone()).collect();
                let related_row = stats::related_row(
                    related,
                    item,
                    found.name.clone(),
                    found.image.clone(),
                    &entry.patch_slug,
                    bullets,
                );
                notes.push(Note { name: found.name, image: found.image, bullets: related_row.bullets });
                rows.push(related_row.row);
            }
            if !rows.is_empty() {
                let mut related_block = block(
                    "related",
                    "Also changed in this patch",
                    format!("Share of {} players who bought each", hero.name),
                    rows,
                    &windows,
                    &entry.changelog_id,
                );
                related_block.notes = notes;
                band.push(related_block);
            }
        }
    }
    Ok(EntryView {
        id: entry.changelog_id.clone(),
        date: stats::format_date(&entry.pub_date),
        href: format!("/change/{}#{}", entry.patch_slug, stats::fragment_id(&hero.name)),
        count: match entry.groups {
            None => "change count unavailable".into(),
            Some(_) if count == 1 => "1 change".into(),
            Some(_) => format!("{count} changes"),
        },
        groups: groups
            .into_iter()
            .map(|group| GroupView {
                icon: abilities
                    .iter()
                    .find(|ability| Some(&ability.slug) == group.ability_slug.as_ref())
                    .map(|ability| ability.image.clone()),
                ability: group.ability,
                bullets: group.bullets,
            })
            .collect(),
        band,
    })
}

fn write(out: &Path, relative: &str, html: String) -> Result<()> {
    let path = out.join(relative);
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent)?;
    }
    fs::write(&path, html).with_context(|| format!("writing {}", path.display()))
}

fn build(db_path: &str, out: &Path) -> Result<usize> {
    let db = Db::open(db_path)?;
    let heroes = db.released_heroes()?;
    let mut pages = 0;
    write(out, "heroes/index.html", HeroesPage { heroes: &heroes }.render()?)?;
    pages += 1;

    for hero in &heroes {
        let abilities = db.abilities(hero.id)?;
        let history = db.hero_history(hero.id)?;
        let entries = history
            .iter()
            .map(|entry| entry_view(&db, hero, &abilities, entry))
            .collect::<Result<Vec<_>>>()?;
        let has_stats = entries.iter().any(|entry| !entry.band.is_empty());
        let base = format!("hero/{}", hero.slug);
        write(
            out,
            &format!("{base}/index.html"),
            HeroPage { hero, abilities: &abilities, entries: &entries, selected: None, has_stats }.render()?,
        )?;
        write(
            out,
            &format!("{base}/fragment.html"),
            HistoryFragment { hero, entries: &entries, selected: None }.render()?,
        )?;
        pages += 1;

        for ability in &abilities {
            let filtered: Vec<EntryView> = history
                .iter()
                .zip(&entries)
                .filter_map(|(raw, view)| {
                    let own: Vec<usize> = raw
                        .groups
                        .as_deref()
                        .unwrap_or_default()
                        .iter()
                        .enumerate()
                        .filter(|(_, group)| group.ability_slug.as_deref() == Some(ability.slug.as_str()))
                        .map(|(index, _)| index)
                        .collect();
                    if own.is_empty() {
                        return None;
                    }
                    let bullets: usize = own.iter().map(|&index| view.groups[index].bullets.len()).sum();
                    Some(EntryView {
                        id: view.id.clone(),
                        date: view.date.clone(),
                        href: view.href.clone(),
                        count: if bullets == 1 { "1 change".into() } else { format!("{bullets} changes") },
                        groups: own
                            .iter()
                            .map(|&index| GroupView {
                                ability: view.groups[index].ability.clone(),
                                icon: view.groups[index].icon.clone(),
                                bullets: view.groups[index].bullets.clone(),
                            })
                            .collect(),
                        band: Vec::new(),
                    })
                })
                .collect();
            let selected = Some(ability.name.clone());
            let path = format!("{base}/ability/{}", ability.slug);
            write(
                out,
                &format!("{path}/index.html"),
                HeroPage { hero, abilities: &abilities, entries: &filtered, selected: selected.clone(), has_stats: false }
                    .render()?,
            )?;
            write(
                out,
                &format!("{path}/fragment.html"),
                HistoryFragment { hero, entries: &filtered, selected }.render()?,
            )?;
            pages += 1;
        }
    }

    let assets = Path::new(env!("CARGO_MANIFEST_DIR")).join("static");
    for asset in ["site.css", "htmx.min.js"] {
        fs::create_dir_all(out.join("assets"))?;
        fs::copy(assets.join(asset), out.join("assets").join(asset))
            .with_context(|| format!("copying {asset}"))?;
    }
    Ok(pages)
}

fn main() -> Result<()> {
    let args: Vec<String> = std::env::args().skip(1).collect();
    let flag = |name: &str| {
        args.iter()
            .position(|arg| arg == name)
            .and_then(|index| args.get(index + 1).cloned())
    };
    if args.first().map(String::as_str) != Some("build") {
        bail!("usage: deadlog-site build [--db <path>] [--out <dir>]");
    }
    let db = flag("--db").unwrap_or_else(|| "../app/static/deadlog.db".into());
    let out = PathBuf::from(flag("--out").unwrap_or_else(|| "dist".into()));
    let pages = build(&db, &out)?;
    println!("Rendered {pages} pages into {}", out.display());
    Ok(())
}
