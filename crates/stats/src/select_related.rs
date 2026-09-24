use std::collections::{HashMap, HashSet};

use anyhow::{Result, bail};
use deadlog_changelog::{BOUGHT_BY_LIMIT, RELATED_ITEMS_LIMIT};
use deadlog_model::{BoughtBy, BoughtByHero, RelatedItem, RelatedItems};

use crate::constants::{BOUGHT_METHOD_VERSION, RELATED_METHOD_VERSION, RELATED_MIN_APPEARANCES, RELATED_MIN_BUYERS};
use crate::types::DailyRow;

/// One window's hero appearances and, per candidate item, the hero series filtered to
/// the player-matches that bought it.
#[derive(Debug, Clone, Default)]
pub struct WindowSeries {
    pub days: Vec<i64>,
    pub hero_rows: Vec<DailyRow>,
    pub buyers: HashMap<i64, Vec<DailyRow>>,
}

pub struct RelatedInput<'a> {
    pub series: &'a WindowSeries,
    pub hero_id: i64,
    pub candidates: &'a [i64],
    pub after: Option<&'a WindowSeries>,
}

fn candidate_fingerprint(candidates: &[i64]) -> Vec<i64> {
    let mut unique: Vec<i64> = candidates.iter().copied().collect::<HashSet<_>>().into_iter().collect();
    unique.sort_unstable();
    unique
}

/// Whether a recorded selection still stands: same method, same changed items.
pub fn is_current_related(recorded: Option<&RelatedItems>, candidates: &[i64]) -> bool {
    recorded.is_some_and(|recorded| {
        recorded.method_version == RELATED_METHOD_VERSION && recorded.candidates == candidate_fingerprint(candidates)
    })
}

/// Per day in `days`, the hero's matches, in row order.
fn daily_matches(rows: &[DailyRow], hero_id: i64, days: &HashSet<i64>) -> Vec<(i64, f64)> {
    let mut by_day: Vec<(i64, f64)> = Vec::new();
    for row in rows.iter().filter(|row| row.entity_id == hero_id && days.contains(&row.day)) {
        match by_day.iter_mut().find(|(day, _)| *day == row.day) {
            Some(entry) => entry.1 = row.matches,
            None => by_day.push((row.day, row.matches)),
        }
    }
    by_day
}

struct HeroWindow<'a> {
    series: &'a WindowSeries,
    hero_id: i64,
    days: HashSet<i64>,
    played: HashMap<i64, f64>,
    appearances: f64,
}

fn hero_window(series: &WindowSeries, hero_id: i64) -> HeroWindow<'_> {
    let days: HashSet<i64> = series.days.iter().copied().collect();
    let played = daily_matches(&series.hero_rows, hero_id, &days);
    let appearances = played.iter().map(|(_, matches)| matches).sum();
    HeroWindow { series, hero_id, played: played.into_iter().collect(), days, appearances }
}

/// `None` when a day has more buyers than appearances: the two series disagree, so
/// neither is trusted.
fn buyer_sum(window: &HeroWindow, item_id: i64) -> Result<Option<f64>> {
    let Some(rows) = window.series.buyers.get(&item_id) else {
        bail!("No buyer series was fetched for item {item_id}");
    };
    let mut buyers = 0.0;
    for (day, matches) in daily_matches(rows, window.hero_id, &window.days) {
        if matches > window.played.get(&day).copied().unwrap_or(0.0) {
            return Ok(None);
        }
        buyers += matches;
    }
    Ok(Some(buyers))
}

struct AfterCounts {
    appearances: f64,
    buyers: Vec<f64>,
}

fn after_counts(series: &WindowSeries, hero_id: i64, item_ids: &[i64]) -> Result<Option<AfterCounts>> {
    let window = hero_window(series, hero_id);
    if window.appearances < RELATED_MIN_APPEARANCES {
        return Ok(None);
    }
    let mut buyers = Vec::new();
    for id in item_ids {
        let Some(sum) = buyer_sum(&window, *id)? else { return Ok(None) };
        buyers.push(sum);
    }
    Ok(Some(AfterCounts { appearances: window.appearances, buyers }))
}

pub fn select_related_items(input: RelatedInput) -> Result<RelatedItems> {
    let candidates = candidate_fingerprint(input.candidates);
    let result = |status: &str, appearances: f64, items: Vec<RelatedItem>| RelatedItems {
        method_version: RELATED_METHOD_VERSION,
        status: status.into(),
        appearances,
        after_appearances: None,
        candidates: candidates.clone(),
        items,
    };

    if input.series.days.is_empty() {
        return Ok(result("no-window", 0.0, Vec::new()));
    }
    let window = hero_window(input.series, input.hero_id);
    if window.appearances < RELATED_MIN_APPEARANCES {
        return Ok(result("insufficient-sample", window.appearances, Vec::new()));
    }

    let mut items = Vec::new();
    for &id in &candidates {
        if let Some(buyers) = buyer_sum(&window, id)?
            && buyers >= RELATED_MIN_BUYERS
        {
            items.push(RelatedItem { id, buyers, after: None });
        }
    }
    items.sort_by(|a, b| b.buyers.total_cmp(&a.buyers).then(a.id.cmp(&b.id)));
    items.truncate(RELATED_ITEMS_LIMIT);

    let selected: Vec<i64> = items.iter().map(|item| item.id).collect();
    let after = match input.after {
        Some(after) => after_counts(after, input.hero_id, &selected)?,
        None => None,
    };
    let Some(after) = after else { return Ok(result("complete", window.appearances, items)) };
    for (item, buyers) in items.iter_mut().zip(after.buyers) {
        item.after = Some(buyers);
    }
    Ok(RelatedItems { after_appearances: Some(after.appearances), ..result("complete", window.appearances, items) })
}

/// The heroes with the highest share of player-matches that bought the item before the
/// patch, with the same share after where the hero clears the floor there.
pub fn select_bought_by(item_id: i64, before: &WindowSeries, after: Option<&WindowSeries>) -> Result<Option<BoughtBy>> {
    let rows = before.buyers.get(&item_id).map_or(&[][..], Vec::as_slice);
    let hero_ids = deadlog_model::dedupe(rows.iter().map(|row| row.entity_id));

    let mut ranked = Vec::new();
    for hero_id in hero_ids {
        let window = hero_window(before, hero_id);
        if window.appearances < RELATED_MIN_APPEARANCES {
            continue;
        }
        match buyer_sum(&window, item_id)? {
            Some(buyers) if buyers >= RELATED_MIN_BUYERS => ranked.push(BoughtByHero {
                id: hero_id,
                buyers,
                appearances: window.appearances,
                after_buyers: None,
                after_appearances: None,
            }),
            _ => {}
        }
    }
    if ranked.is_empty() {
        return Ok(None);
    }
    ranked.sort_by(|a, b| (b.buyers / b.appearances).total_cmp(&(a.buyers / a.appearances)).then(a.id.cmp(&b.id)));
    ranked.truncate(BOUGHT_BY_LIMIT);

    for hero in &mut ranked {
        let counts = match after {
            Some(after) => after_counts(after, hero.id, &[item_id])?,
            None => None,
        };
        if let Some(counts) = counts {
            hero.after_buyers = Some(counts.buyers[0]);
            hero.after_appearances = Some(counts.appearances);
        }
    }
    Ok(Some(BoughtBy { method_version: BOUGHT_METHOD_VERSION, heroes: ranked }))
}
