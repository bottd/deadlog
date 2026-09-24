pub use deadlog_model::{RELATED_MIN_APPEARANCES, RELATED_MIN_BUYERS, WINDOW_CAP_DAYS};

pub const ANALYTICS_API_BASE: &str = "https://api.deadlock-api.com/v1/analytics";

pub const DAY_S: i64 = 86_400;
pub const HIGH_RANK_MIN_BADGE: u32 = 91;
pub const HIGH_RANK_LABEL: &str = "Phantom 1";
pub const POPULATION: [(&str, &str); 2] = [("game_mode", "normal"), ("match_mode", "ranked,unranked")];
pub const METHOD_VERSION: u32 = 3;
pub const RELATED_METHOD_VERSION: u32 = 2;
pub const ORDER_METHOD_VERSION: u32 = 1;
pub const BOUGHT_METHOD_VERSION: u32 = 1;
pub const READING_SETTLE_DAYS: i64 = 2;
pub const ABILITY_UNLOCK_AND_UPGRADES: usize = 4;
pub const RELATED_RETRY_DAYS: i64 = 30;
pub const MAX_ATTEMPTS: u32 = 3;
pub const MIN_WINDOW_MATCHES: f64 = 1000.0;
pub const MAX_RANGE_DAYS: i64 = 60;
pub const PLAYERS_PER_MATCH: f64 = 12.0;
pub const REQUEST_TIMEOUT_MS: u64 = 60_000;

/// The API's `min_matches` row filter for `item-stats` under each method version.
pub fn item_min_matches(method: u32) -> u32 {
    if method == 1 { 20 } else { 1 }
}

pub fn day_of(t: i64) -> i64 {
    t.div_euclid(DAY_S) * DAY_S
}
