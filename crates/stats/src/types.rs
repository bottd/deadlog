use std::collections::HashMap;

pub use deadlog_model::EntityType as EntityKind;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum RankTier {
    All,
    High,
}

#[derive(Debug, Clone, PartialEq)]
pub struct DailyRow {
    pub entity_id: i64,
    pub day: i64,
    pub wins: f64,
    pub matches: f64,
    pub buy_time: Option<f64>,
}

impl DailyRow {
    pub fn new(entity_id: i64, day: i64, wins: f64, matches: f64) -> Self {
        Self { entity_id, day, wins, matches, buy_time: None }
    }
}

#[derive(Debug, Clone, PartialEq)]
pub struct AbilityOrderRow {
    pub abilities: Vec<i64>,
    pub matches: f64,
}

/// Player slots per UTC day.
pub type DailyTotals = HashMap<i64, f64>;

#[derive(Debug, Clone, Default, PartialEq)]
pub struct TierRows {
    pub all: Vec<DailyRow>,
    pub high: Vec<DailyRow>,
}

impl TierRows {
    pub fn tier(&self, tier: RankTier) -> &[DailyRow] {
        match tier {
            RankTier::All => &self.all,
            RankTier::High => &self.high,
        }
    }
}

#[derive(Debug, Clone, Default, PartialEq)]
pub struct TierTotals {
    pub all: DailyTotals,
    pub high: DailyTotals,
}

impl TierTotals {
    pub fn tier(&self, tier: RankTier) -> &DailyTotals {
        match tier {
            RankTier::All => &self.all,
            RankTier::High => &self.high,
        }
    }
}

/// Every series a stats run reads. Item picks divide by the hero series' totals, so
/// totals are kept per rank tier only.
#[derive(Debug, Clone, Default, PartialEq)]
pub struct AllSeries {
    pub hero: TierRows,
    pub item: TierRows,
    pub totals: TierTotals,
}

impl AllSeries {
    pub fn rows(&self, kind: EntityKind, tier: RankTier) -> &[DailyRow] {
        match kind {
            EntityKind::Hero => self.hero.tier(tier),
            EntityKind::Item => self.item.tier(tier),
        }
    }
}

/// Unix seconds, both ends inclusive.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct TimeRange {
    pub from: i64,
    pub to: i64,
}
