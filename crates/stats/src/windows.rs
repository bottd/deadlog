use std::collections::HashMap;

use deadlog_model::{DayInterval, EntityImpact, ImpactWindow, TierImpact};

use crate::constants::{DAY_S, MIN_WINDOW_MATCHES, PLAYERS_PER_MATCH, WINDOW_CAP_DAYS, day_of};
use crate::types::{AllSeries, DailyRow, DailyTotals, EntityKind, RankTier};

#[derive(Debug, Clone, PartialEq)]
pub struct PatchRef {
    pub id: String,
    pub at: i64,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct TouchedEntity {
    pub kind: EntityKind,
    pub id: i64,
}

#[derive(Debug, Clone, PartialEq)]
pub struct SlicedImpact {
    pub kind: EntityKind,
    pub id: i64,
    pub impact: EntityImpact,
}

/// Per patch id, in patch order.
pub type Sliced = Vec<(String, Vec<SlicedImpact>)>;

pub struct IndexedSeries {
    by_entity: HashMap<i64, HashMap<i64, DailyRow>>,
    totals: DailyTotals,
    pick_multiplier: f64,
    kind: EntityKind,
}

fn pick_multiplier(kind: EntityKind) -> f64 {
    match kind {
        EntityKind::Hero => PLAYERS_PER_MATCH,
        EntityKind::Item => 1.0,
    }
}

/// `Math.round`, which sends halves towards +∞.
pub(crate) fn js_round(value: f64) -> f64 {
    let floor = value.floor();
    if value - floor >= 0.5 { floor + 1.0 } else { floor }
}

fn round4(value: f64) -> f64 {
    js_round(value * 1e4) / 1e4
}

pub fn index_series(rows: &[DailyRow], totals: &DailyTotals, kind: EntityKind) -> IndexedSeries {
    let mut by_entity: HashMap<i64, HashMap<i64, DailyRow>> = HashMap::new();
    for row in rows {
        by_entity.entry(row.entity_id).or_default().insert(row.day, row.clone());
    }
    IndexedSeries { by_entity, totals: totals.clone(), pick_multiplier: pick_multiplier(kind), kind }
}

fn days_between(lower: i64, upper: i64) -> Vec<i64> {
    let mut days = Vec::new();
    let mut day = lower.saturating_add(DAY_S);
    while day < upper {
        days.push(day);
        day += DAY_S;
    }
    days
}

pub(crate) fn iso_day(day: i64) -> String {
    chrono::DateTime::from_timestamp(day, 0).map(|date| date.format("%Y-%m-%d").to_string()).unwrap_or_default()
}

fn interval(days: &[i64]) -> Option<DayInterval> {
    let (first, last) = (days.first()?, days.last()?);
    Some(DayInterval { from: iso_day(*first), to: iso_day(last + DAY_S) })
}

#[derive(Debug, Clone, PartialEq)]
pub struct PatchBounds {
    pub before: Option<DayInterval>,
    pub after: Option<DayInterval>,
    pub siblings: Vec<String>,
}

pub fn patch_bounds(patches: &[PatchRef], index: usize, now: i64) -> PatchBounds {
    let WindowDays { before, after, .. } = window_days(patches, index, now);
    let patch_day = day_of(patches[index].at);
    PatchBounds {
        before: interval(&before),
        after: interval(&after),
        siblings: patches
            .iter()
            .enumerate()
            .filter(|(at, other)| *at != index && day_of(other.at) == patch_day)
            .map(|(_, other)| other.id.clone())
            .collect(),
    }
}

#[derive(Debug, Clone, PartialEq)]
pub struct WindowDays {
    pub before: Vec<i64>,
    pub after: Vec<i64>,
    pub closed: bool,
}

/// The whole UTC days strictly between a patch day and its neighbours, capped at
/// `WINDOW_CAP_DAYS` a side; the after side stops before today.
pub fn window_days(patches: &[PatchRef], index: usize, now: i64) -> WindowDays {
    let patch = &patches[index];
    let patch_day = day_of(patch.at);
    let reach = (WINDOW_CAP_DAYS + 1) * DAY_S;

    let mut previous_day = None::<i64>;
    let mut next_day = None::<i64>;
    for other in patches {
        let day = day_of(other.at);
        if day < patch_day && previous_day.is_none_or(|previous| day > previous) {
            previous_day = Some(day);
        }
        if day > patch_day && next_day.is_none_or(|next| day < next) {
            next_day = Some(day);
        }
    }

    let lower = previous_day.map_or(patch_day - reach, |previous| previous.max(patch_day - reach));
    let upper = (patch_day + reach).min(day_of(now));
    let upper = next_day.map_or(upper, |next| next.min(upper));
    WindowDays {
        before: days_between(lower, patch_day),
        after: days_between(patch_day, upper),
        closed: next_day.is_some() || now >= patch.at + reach,
    }
}

pub fn summarise(series: &IndexedSeries, entity_id: i64, days: &[i64]) -> ImpactWindow {
    let entity_days = series.by_entity.get(&entity_id);
    let (mut wins, mut matches, mut total, mut contributing, mut covered) = (0.0, 0.0, 0.0, 0.0, 0usize);
    let (mut buy_time, mut timed_matches) = (0.0, 0.0);

    for day in days {
        let slots = series.totals.get(day);
        if slots.is_some() {
            covered += 1;
        }
        total += slots.copied().unwrap_or(0.0);
        let Some(row) = entity_days.and_then(|entity| entity.get(day)) else { continue };
        wins += row.wins;
        matches += row.matches;
        contributing += 1.0;
        if let Some(time) = row.buy_time {
            buy_time += time * row.matches;
            timed_matches += row.matches;
        }
    }

    let complete = covered == days.len();
    let reportable = matches >= MIN_WINDOW_MATCHES && total > 0.0 && complete;
    ImpactWindow {
        win: reportable.then(|| round4(wins / matches)),
        pick: reportable.then(|| round4(matches * series.pick_multiplier / total)),
        matches,
        days: contributing,
        total,
        covered: covered as f64,
        coverage: if complete { "complete" } else { "incomplete" }.into(),
        buy: (series.kind == EntityKind::Item)
            .then(|| (reportable && timed_matches > 0.0).then(|| js_round(buy_time / timed_matches))),
    }
}

pub fn slice_windows(
    patches: &[PatchRef],
    touched: &HashMap<String, Vec<TouchedEntity>>,
    series: &AllSeries,
    now: i64,
) -> Sliced {
    let index = |kind, tier| index_series(series.rows(kind, tier), series.totals.tier(tier), kind);
    let indexed = |kind: EntityKind| [index(kind, RankTier::All), index(kind, RankTier::High)];
    let heroes = indexed(EntityKind::Hero);
    let items = indexed(EntityKind::Item);

    let mut sliced = Sliced::new();
    for (position, patch) in patches.iter().enumerate() {
        let Some(entities) = touched.get(&patch.id).filter(|entities| !entities.is_empty()) else { continue };
        let WindowDays { before, after, closed } = window_days(patches, position, now);

        let mut entries = Vec::new();
        for &TouchedEntity { kind, id } in entities {
            let [all, high] = if kind == EntityKind::Hero { &heroes } else { &items };
            let tier = |series: &IndexedSeries| TierImpact {
                before: summarise(series, id, &before),
                after: summarise(series, id, &after),
            };
            let impact = EntityImpact { closed, all: tier(all), high: tier(high) };
            let has_data =
                [&impact.all, &impact.high].iter().any(|tier| tier.before.matches > 0.0 || tier.after.matches > 0.0);
            if has_data {
                entries.push(SlicedImpact { kind, id, impact });
            }
        }
        if !entries.is_empty() {
            sliced.push((patch.id.clone(), entries));
        }
    }
    sliced
}
