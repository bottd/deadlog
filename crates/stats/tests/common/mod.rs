#![allow(dead_code)]

use std::cell::RefCell;
use std::path::PathBuf;
use std::rc::Rc;
use std::time::Duration;

use anyhow::Result;
use deadlog_stats::constants::DAY_S;
use deadlog_stats::fetch::{Api, Http, Response};
use deadlog_stats::types::{AllSeries, DailyRow, DailyTotals, TierRows, TierTotals};
use serde_json::{Value, json};

pub const DAY_1: i64 = 1788825600;

pub fn day(n: i64) -> i64 {
    DAY_1 + n * DAY_S
}

pub const DAY_2: i64 = DAY_1 + DAY_S;
pub const DAY_3: i64 = DAY_1 + 2 * DAY_S;

#[derive(Debug, Clone, Default)]
pub struct HeroPart {
    pub rows: Vec<DailyRow>,
    pub totals: DailyTotals,
}

#[derive(Default)]
pub struct Parts {
    pub hero_all: Option<HeroPart>,
    pub hero_high: Option<HeroPart>,
    pub item_all: Option<Vec<DailyRow>>,
    pub item_high: Option<Vec<DailyRow>>,
}

pub fn all_series(parts: Parts) -> AllSeries {
    let (hero_all, hero_high) = (parts.hero_all.unwrap_or_default(), parts.hero_high.unwrap_or_default());
    AllSeries {
        hero: TierRows { all: hero_all.rows, high: hero_high.rows },
        item: TierRows { all: parts.item_all.unwrap_or_default(), high: parts.item_high.unwrap_or_default() },
        totals: TierTotals { all: hero_all.totals, high: hero_high.totals },
    }
}

pub fn hero_row(hero_id: i64, bucket: i64, wins: i64, matches: i64) -> Value {
    json!({
        "hero_id": hero_id,
        "bucket": bucket,
        "wins": wins,
        "losses": matches - wins,
        "matches": matches,
        "matches_per_bucket": 515_328,
        "total_kills": 110_927,
        "total_deaths": 105_635
    })
}

pub fn item_row(item_id: i64, bucket: i64, wins: i64, matches: i64) -> Value {
    json!({
        "item_id": item_id,
        "bucket": bucket,
        "wins": wins,
        "losses": matches - wins,
        "matches": matches,
        "players": (matches as f64 * 0.6).round() as i64,
        "avg_buy_time_s": 857.67
    })
}

pub fn fixture(name: &str) -> Value {
    let path = PathBuf::from(env!("CARGO_MANIFEST_DIR")).join(format!("tests/fixtures/enrichment/{name}.json"));
    serde_json::from_str(&std::fs::read_to_string(path).unwrap()).unwrap()
}

/// Answers every request from `responder`, recording the URLs asked for.
pub struct Stub {
    pub calls: Rc<RefCell<Vec<url::Url>>>,
    responder: Box<dyn Fn(&url::Url) -> Value>,
    status: u16,
}

impl Http for Stub {
    fn get(&self, url: &str, _timeout: Duration) -> Result<Response> {
        let parsed = url::Url::parse(url)?;
        let body = (self.responder)(&parsed);
        self.calls.borrow_mut().push(parsed);
        Ok(Response {
            status: self.status,
            status_text: if self.status == 200 { "OK" } else { "Internal Server Error" }.into(),
            retry_after: None,
            body: body.to_string(),
        })
    }
}

pub fn stub_api(status: u16, responder: impl Fn(&url::Url) -> Value + 'static) -> (Api, Rc<RefCell<Vec<url::Url>>>) {
    let calls = Rc::new(RefCell::new(Vec::new()));
    let stub = Stub { calls: calls.clone(), responder: Box::new(responder), status };
    let api = Api::new("https://api.deadlock-api.com/v1/analytics", Box::new(stub)).with_retry_delay(Duration::ZERO);
    (api, calls)
}

pub fn param(url: &url::Url, key: &str) -> Option<String> {
    url.query_pairs().find(|(name, _)| name == key).map(|(_, value)| value.into_owned())
}
