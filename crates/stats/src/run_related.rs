use std::collections::HashMap;
use std::path::Path;
use std::rc::Rc;

use anyhow::{Result, anyhow, bail};
use deadlog_changelog::{EnrichmentUpdate, splice_entity_blocks};
use deadlog_model::{AbilityOrder, BoughtBy, PatchStats};

use crate::ability_order::select_ability_order;
use crate::constants::{
    BOUGHT_METHOD_VERSION, DAY_S, METHOD_VERSION, ORDER_METHOD_VERSION, READING_SETTLE_DAYS, RELATED_RETRY_DAYS, day_of,
};
use crate::fetch::Api;
use crate::read::{RelatedHero, RelatedInputs, RelatedPatch};
use crate::rewrite::EntityIndex;
use crate::run::{iso_time, write_atomically};
use crate::select_related::{RelatedInput, WindowSeries, is_current_related, select_bought_by, select_related_items};
use crate::types::{AbilityOrderRow, DailyRow, EntityKind, RankTier, TimeRange};
use crate::windows::{PatchRef, WindowDays, patch_bounds, window_days};

pub struct RelatedRunOptions<'a> {
    pub changelogs_dir: &'a Path,
    pub now: i64,
    pub rebuild: bool,
    pub patch_id: Option<&'a str>,
}

/// Where the related job reads its series; `Api` in production.
pub trait RelatedSource {
    fn heroes(&self, range: TimeRange) -> Result<Vec<DailyRow>>;
    fn buyers(&self, item_id: i64, range: TimeRange) -> Result<Vec<DailyRow>>;
    fn ability_order(&self, hero_id: i64, range: TimeRange) -> Result<Vec<AbilityOrderRow>>;
}

impl RelatedSource for Api {
    fn heroes(&self, range: TimeRange) -> Result<Vec<DailyRow>> {
        Ok(self.fetch_series(EntityKind::Hero, RankTier::All, range)?.0)
    }

    fn buyers(&self, item_id: i64, range: TimeRange) -> Result<Vec<DailyRow>> {
        self.fetch_buyer_series(item_id, range)
    }

    fn ability_order(&self, hero_id: i64, range: TimeRange) -> Result<Vec<AbilityOrderRow>> {
        self.fetch_ability_order(hero_id, range)
    }
}

/// A patch keeps being refreshed while its after-window is open and for
/// `READING_SETTLE_DAYS` after it closes, so the last days land.
pub fn is_settling(patches: &[PatchRef], index: usize, now: i64) -> bool {
    let WindowDays { after, closed, .. } = window_days(patches, index, now);
    if !closed {
        return true;
    }
    let end = after.last().map_or_else(|| day_of(patches[index].at), |last| last + DAY_S);
    now < end + READING_SETTLE_DAYS * DAY_S
}

fn refs(patches: &[RelatedPatch]) -> Vec<PatchRef> {
    patches.iter().map(|patch| patch.patch.to_ref()).collect()
}

/// The patches a run looks at: `--patch` alone, `--rebuild` all, otherwise the newest
/// patch day, settling windows and recent patches with a hero not yet recorded.
pub fn patches_in_scope<'a>(
    patches: &'a [RelatedPatch],
    now: i64,
    rebuild: bool,
    patch_id: Option<&str>,
) -> Result<Vec<&'a RelatedPatch>> {
    let eligible: Vec<&RelatedPatch> =
        patches.iter().filter(|patch| !patch.heroes.is_empty() && !patch.candidates.is_empty()).collect();
    if let Some(patch_id) = patch_id {
        let matched: Vec<_> = eligible.into_iter().filter(|patch| patch.patch.id == patch_id).collect();
        if matched.is_empty() {
            bail!("Patch \"{patch_id}\" is unknown or has no hero and item changes to relate");
        }
        return Ok(matched);
    }
    if rebuild {
        return Ok(eligible);
    }

    let refs = refs(patches);
    let newest_day = eligible.iter().map(|patch| day_of(patch.patch.at)).max();
    let retry_from = now - RELATED_RETRY_DAYS * DAY_S;
    Ok(eligible
        .into_iter()
        .filter(|patch| {
            let position = position_of(patches, patch);
            Some(day_of(patch.patch.at)) == newest_day
                || is_settling(&refs, position, now)
                || (patch.patch.at >= retry_from && patch.heroes.iter().any(|hero| hero.recorded.is_none()))
        })
        .collect())
}

fn position_of(patches: &[RelatedPatch], patch: &RelatedPatch) -> usize {
    patches.iter().position(|candidate| std::ptr::eq(candidate, patch)).unwrap_or_default()
}

fn is_current_order(recorded: Option<&AbilityOrder>) -> bool {
    recorded.is_some_and(|order| order.method_version == ORDER_METHOD_VERSION)
}

fn is_current_bought(recorded: Option<&BoughtBy>) -> bool {
    recorded.is_some_and(|bought| bought.method_version == BOUGHT_METHOD_VERSION)
}

/// Every request once per run: patches released the same day share their windows. A
/// failure is remembered too, so it fails each patch that needs it without a retry.
struct Cached<'a> {
    source: &'a dyn RelatedSource,
    rows: HashMap<String, Result<Rc<Vec<DailyRow>>, String>>,
    orders: HashMap<String, Result<Rc<Vec<AbilityOrderRow>>, String>>,
}

fn span(range: TimeRange) -> String {
    format!("{}:{}", range.from, range.to)
}

fn once<T>(
    cache: &mut HashMap<String, Result<Rc<T>, String>>,
    key: String,
    load: impl FnOnce() -> Result<T>,
) -> Result<Rc<T>> {
    let entry = cache.entry(key).or_insert_with(|| load().map(Rc::new).map_err(|error| format!("{error:#}")));
    entry.clone().map_err(|error| anyhow!(error))
}

impl Cached<'_> {
    fn heroes(&mut self, range: TimeRange) -> Result<Rc<Vec<DailyRow>>> {
        let source = self.source;
        once(&mut self.rows, format!("hero:{}", span(range)), || source.heroes(range))
    }

    fn buyers(&mut self, item_id: i64, range: TimeRange) -> Result<Rc<Vec<DailyRow>>> {
        let source = self.source;
        once(&mut self.rows, format!("{item_id}:{}", span(range)), || source.buyers(item_id, range))
    }

    fn ability_order(&mut self, hero_id: i64, range: TimeRange) -> Result<Rc<Vec<AbilityOrderRow>>> {
        let source = self.source;
        once(&mut self.orders, format!("order:{hero_id}:{}", span(range)), || source.ability_order(hero_id, range))
    }

    fn window(&mut self, days: &[i64], candidates: &[i64]) -> Result<Option<(WindowSeries, TimeRange)>> {
        let (Some(first), Some(last)) = (days.first(), days.last()) else { return Ok(None) };
        let range = TimeRange { from: *first, to: *last };
        let mut buyers = HashMap::new();
        for item_id in candidates {
            buyers.insert(*item_id, self.buyers(*item_id, range)?.as_ref().clone());
        }
        let hero_rows = self.heroes(range)?.as_ref().clone();
        Ok(Some((WindowSeries { days: days.to_vec(), hero_rows, buyers }, range)))
    }
}

struct Updates {
    hero: Vec<(i64, EnrichmentUpdate)>,
    item: Vec<(i64, EnrichmentUpdate)>,
}

impl Updates {
    fn list(&mut self, kind: EntityKind) -> &mut Vec<(i64, EnrichmentUpdate)> {
        if kind == EntityKind::Hero { &mut self.hero } else { &mut self.item }
    }

    fn set(&mut self, kind: EntityKind, id: i64, update: EnrichmentUpdate) {
        let list = self.list(kind);
        match list.iter_mut().find(|(existing, _)| *existing == id) {
            Some(entry) => entry.1 = update,
            None => list.push((id, update)),
        }
    }

    fn take(&mut self, kind: EntityKind, id: i64) -> Option<EnrichmentUpdate> {
        let list = self.list(kind);
        let position = list.iter().position(|(existing, _)| *existing == id)?;
        Some(list.remove(position).1)
    }
}

fn compute_updates(
    cached: &mut Cached,
    patch: &RelatedPatch,
    stale_heroes: &[&RelatedHero],
    stale_items: &[i64],
    days: &WindowDays,
    abilities: &HashMap<i64, Vec<i64>>,
    orderable: &dyn Fn(&RelatedHero) -> bool,
) -> Result<Updates> {
    let mut updates = Updates { hero: Vec::new(), item: Vec::new() };
    let before = cached.window(&days.before, &patch.candidates)?;
    let after = cached.window(&days.after, &patch.candidates)?;
    let empty = WindowSeries { days: days.before.clone(), ..Default::default() };
    for hero in stale_heroes {
        let mut update = EnrichmentUpdate {
            related: Some(Some(select_related_items(RelatedInput {
                series: before.as_ref().map_or(&empty, |(series, _)| series),
                hero_id: hero.id,
                candidates: &patch.candidates,
                after: after.as_ref().map(|(series, _)| series),
            })?)),
            ..Default::default()
        };
        if orderable(hero)
            && let Some((_, before_range)) = &before
        {
            let before_rows = cached.ability_order(hero.id, *before_range)?;
            let after_rows = match &after {
                Some((_, after_range)) => Some(cached.ability_order(hero.id, *after_range)?),
                None => None,
            };
            let ids = abilities.get(&hero.id).map_or(&[][..], Vec::as_slice);
            update.order = Some(select_ability_order(ids, &before_rows, after_rows.as_deref().map(Vec::as_slice)));
        }
        updates.set(EntityKind::Hero, hero.id, update);
    }
    for item_id in stale_items {
        let bought = match &before {
            Some((series, _)) => select_bought_by(*item_id, series, after.as_ref().map(|(series, _)| series))?,
            None => None,
        };
        updates.set(EntityKind::Item, *item_id, EnrichmentUpdate { bought: Some(bought), ..Default::default() });
    }
    Ok(updates)
}

/// One related-items run. A failed request leaves that patch's file untouched and the
/// run moves on; the missing record is the retry state.
pub fn run_related_items(
    options: &RelatedRunOptions,
    inputs: RelatedInputs,
    source: &dyn RelatedSource,
    log: &mut dyn FnMut(&str),
) -> Result<()> {
    let RelatedRunOptions { changelogs_dir, now, rebuild, patch_id } = *options;
    let RelatedInputs { patches, entities, abilities } = inputs;
    let scope = patches_in_scope(&patches, now, rebuild, patch_id)?;
    let index = EntityIndex::new(&entities);
    let refs = refs(&patches);
    let mut cached = Cached { source, rows: HashMap::new(), orders: HashMap::new() };

    let mut files = 0;
    let mut failed: Vec<&str> = Vec::new();
    for patch in &scope {
        let position = position_of(&patches, patch);
        let refresh_all = rebuild || is_settling(&refs, position, now);
        let orderable =
            |hero: &RelatedHero| hero.ability_changed && abilities.get(&hero.id).is_some_and(|ids| !ids.is_empty());
        let stale_heroes: Vec<&RelatedHero> = patch
            .heroes
            .iter()
            .filter(|hero| {
                refresh_all
                    || !is_current_related(hero.recorded.as_ref(), &patch.candidates)
                    || (orderable(hero) && !is_current_order(hero.recorded_order.as_ref()))
            })
            .collect();
        let stale_items: Vec<i64> = patch
            .items
            .iter()
            .filter(|item| refresh_all || !is_current_bought(item.recorded.as_ref()))
            .map(|item| item.id)
            .collect();
        if stale_heroes.is_empty() && stale_items.is_empty() {
            continue;
        }

        let days = window_days(&refs, position, now);
        let mut updates =
            match compute_updates(&mut cached, patch, &stale_heroes, &stale_items, &days, &abilities, &orderable) {
                Ok(updates) => updates,
                Err(error) => {
                    failed.push(&patch.patch.slug);
                    eprintln!("   Related: {} left untouched: {error:#}", patch.patch.slug);
                    continue;
                }
            };

        let path = changelogs_dir.join(format!("{}.mg", patch.patch.slug));
        if !path.exists() {
            bail!("Changelog file not found: {}", path.display());
        }
        let source_text = std::fs::read_to_string(&path)?;
        let stats = match patch.patch.stats {
            Some(_) => None,
            None => {
                let bounds = patch_bounds(&refs, position, now);
                Some(PatchStats {
                    schema_version: 2,
                    method_version: METHOD_VERSION,
                    collected_at: iso_time(now),
                    before: bounds.before,
                    after: bounds.after,
                    siblings: bounds.siblings,
                })
            }
        };
        let next = splice_entity_blocks(
            &source_text,
            |block| {
                let id = index.id_of(block)?;
                updates.take(block.kind, id)
            },
            stats.as_ref(),
        )?;
        let missing: Vec<String> = updates
            .hero
            .iter()
            .map(|(id, _)| id.to_string())
            .chain(updates.item.iter().map(|(id, _)| id.to_string()))
            .collect();
        if !missing.is_empty() {
            bail!("{}: no block found for {}", path.display(), missing.join(", "));
        }
        if next == source_text {
            continue;
        }

        write_atomically(&path, &next)?;
        files += 1;
    }

    let failures =
        if failed.is_empty() { String::new() } else { format!(", {} failed ({})", failed.len(), failed.join(", ")) };
    log(&format!("   Related: {} patches in scope, {files} changelogs updated{failures}", scope.len()));
    Ok(())
}
