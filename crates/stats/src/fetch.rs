//! The Deadlock analytics API. `lib/stats/README.md` records the measured behaviour
//! every request here is shaped around.

use std::time::Duration;

use anyhow::{Context, Result, anyhow, bail};
use serde_json::{Map, Value};

use crate::constants::{
    ANALYTICS_API_BASE, DAY_S, HIGH_RANK_MIN_BADGE, MAX_ATTEMPTS, MAX_RANGE_DAYS, METHOD_VERSION, POPULATION,
    REQUEST_TIMEOUT_MS, day_of, item_min_matches,
};
use crate::types::{
    AbilityOrderRow, AllSeries, DailyRow, DailyTotals, EntityKind, RankTier, TierRows, TierTotals, TimeRange,
};

#[derive(Debug, Clone, PartialEq)]
pub struct Response {
    pub status: u16,
    pub status_text: String,
    pub retry_after: Option<String>,
    pub body: String,
}

impl Response {
    pub fn ok(&self) -> bool {
        (200..300).contains(&self.status)
    }
}

/// The one seam between the stats job and the network, so tests replay responses.
pub trait Http {
    fn get(&self, url: &str, timeout: Duration) -> Result<Response>;
}

pub struct ReqwestHttp {
    client: reqwest::blocking::Client,
}

impl ReqwestHttp {
    pub fn new() -> Result<Self> {
        Ok(Self { client: reqwest::blocking::Client::builder().timeout(None).build()? })
    }
}

impl Http for ReqwestHttp {
    fn get(&self, url: &str, timeout: Duration) -> Result<Response> {
        let response = self.client.get(url).timeout(timeout).send().with_context(|| format!("GET {url}"))?;
        let status = response.status();
        let retry_after =
            response.headers().get("retry-after").and_then(|value| value.to_str().ok()).map(str::to_string);
        Ok(Response {
            status: status.as_u16(),
            status_text: status.canonical_reason().unwrap_or_default().to_string(),
            retry_after,
            body: response.text().with_context(|| format!("reading {url}"))?,
        })
    }
}

pub struct Api {
    base: String,
    http: Box<dyn Http>,
    retry_delay: Duration,
}

fn day_end(t: i64) -> i64 {
    day_of(t) + DAY_S - 1
}

/// Whole-day chunks of at most `MAX_RANGE_DAYS`: `item-stats` times out on long ranges.
pub fn chunk_range(range: TimeRange) -> Vec<TimeRange> {
    let span = MAX_RANGE_DAYS * DAY_S;
    let end = day_end(range.to);
    let mut chunks = Vec::new();
    let mut from = day_of(range.from);
    while from <= end {
        chunks.push(TimeRange { from, to: (from + span - 1).min(end) });
        from += span;
    }
    chunks
}

/// `Number(text)` for a header value: blank is 0, anything unparsable is NaN.
fn js_number_of(text: &str) -> f64 {
    let trimmed = deadlog_model::js_trim(text);
    if trimmed.is_empty() {
        return 0.0;
    }
    trimmed.parse().unwrap_or(f64::NAN)
}

struct Params(Vec<(String, String)>);

impl Params {
    fn new(pairs: &[(&str, String)]) -> Self {
        Self(pairs.iter().map(|(key, value)| (key.to_string(), value.clone())).collect())
    }

    fn population(mut self) -> Self {
        self.0.extend(POPULATION.iter().map(|(key, value)| (key.to_string(), value.to_string())));
        self
    }

    fn set(&mut self, key: &str, value: String) {
        match self.0.iter_mut().find(|(name, _)| name == key) {
            Some(pair) => pair.1 = value,
            None => self.0.push((key.to_string(), value)),
        }
    }

    /// `URLSearchParams.toString()`.
    fn query(&self) -> String {
        url::form_urlencoded::Serializer::new(String::new()).extend_pairs(&self.0).finish()
    }
}

/// A validated number field, as zod's `z.number()` reads it.
fn field(label: &str, row: &Map<String, Value>, key: &str) -> Result<f64> {
    match row.get(key) {
        Some(Value::Number(number)) => number.as_f64().ok_or_else(|| anyhow!("{label}: {key} is not a number")),
        Some(other) => bail!("{label}: {key} expected number, received {}", kind_of(other)),
        None => bail!("{label}: {key} expected number, received undefined"),
    }
}

fn kind_of(value: &Value) -> &'static str {
    match value {
        Value::Null => "null",
        Value::Bool(_) => "boolean",
        Value::Number(_) => "number",
        Value::String(_) => "string",
        Value::Array(_) => "array",
        Value::Object(_) => "object",
    }
}

fn rows_of(label: &str, body: Value) -> Result<Vec<Map<String, Value>>> {
    let Value::Array(items) = body else {
        bail!("{label}: expected array, received {}", kind_of(&body));
    };
    items
        .into_iter()
        .enumerate()
        .map(|(index, item)| match item {
            Value::Object(map) => Ok(map),
            other => bail!("{label}: [{index}] expected object, received {}", kind_of(&other)),
        })
        .collect()
}

struct FetchedRow {
    row: DailyRow,
    total: Option<f64>,
}

fn endpoint(kind: EntityKind) -> &'static str {
    match kind {
        EntityKind::Hero => "hero-stats",
        EntityKind::Item => "item-stats",
    }
}

fn fetched_row(kind: EntityKind, label: &str, row: &Map<String, Value>) -> Result<FetchedRow> {
    Ok(match kind {
        EntityKind::Hero => FetchedRow {
            row: DailyRow::new(
                field(label, row, "hero_id")? as i64,
                field(label, row, "bucket")? as i64,
                field(label, row, "wins")?,
                field(label, row, "matches")?,
            ),
            total: Some(field(label, row, "matches_per_bucket")?),
        },
        EntityKind::Item => {
            let buy_time = match row.get("avg_buy_time_s") {
                None => None,
                Some(_) => Some(field(label, row, "avg_buy_time_s")?),
            };
            FetchedRow {
                row: DailyRow {
                    entity_id: field(label, row, "item_id")? as i64,
                    day: field(label, row, "bucket")? as i64,
                    wins: field(label, row, "wins")?,
                    matches: field(label, row, "matches")?,
                    buy_time,
                },
                total: None,
            }
        }
    })
}

impl Api {
    pub fn new(base: impl Into<String>, http: Box<dyn Http>) -> Self {
        Self { base: base.into(), http, retry_delay: Duration::from_secs(1) }
    }

    /// `https://api.deadlock-api.com/v1/analytics` over rustls.
    pub fn live() -> Result<Self> {
        Ok(Self::new(ANALYTICS_API_BASE, Box::new(ReqwestHttp::new()?)))
    }

    /// The unit of the retry back-off; one second outside tests.
    pub fn with_retry_delay(mut self, delay: Duration) -> Self {
        self.retry_delay = delay;
        self
    }

    fn request(&self, url: &str) -> Result<Response> {
        let mut attempt = 1;
        loop {
            let response = self.http.get(url, Duration::from_millis(REQUEST_TIMEOUT_MS))?;
            let retryable = response.status == 429 || response.status >= 500;
            if response.ok() || !retryable || attempt == MAX_ATTEMPTS {
                return Ok(response);
            }
            let retry_after = response.retry_after.as_deref().map_or(0.0, js_number_of);
            let wait = if retry_after > 0.0 { retry_after } else { 2.0 * f64::from(attempt) };
            std::thread::sleep(self.retry_delay.mul_f64(wait.min(30.0)));
            attempt += 1;
        }
    }

    fn get_json(&self, endpoint: &str, params: &Params) -> Result<Value> {
        let url = format!("{}/{endpoint}?{}", self.base, params.query());
        let response = self.request(&url)?;
        if !response.ok() {
            bail!("Failed to fetch {url}: {} {}", response.status, response.status_text);
        }
        serde_json::from_str(&response.body).with_context(|| format!("Invalid JSON from {url}"))
    }

    fn fetch_rows(
        &self,
        kind: EntityKind,
        tier: RankTier,
        chunk: TimeRange,
        include_item_id: Option<i64>,
    ) -> Result<Vec<FetchedRow>> {
        let mut params = Params::new(&[
            ("bucket", "start_time_day".into()),
            ("min_unix_timestamp", chunk.from.to_string()),
            ("max_unix_timestamp", chunk.to.to_string()),
        ])
        .population();
        if kind == EntityKind::Item {
            params.set("min_matches", item_min_matches(METHOD_VERSION).to_string());
        }
        if tier == RankTier::High {
            params.set("min_average_badge", HIGH_RANK_MIN_BADGE.to_string());
        }
        if let Some(item) = include_item_id {
            params.set("include_item_ids", item.to_string());
        }

        let endpoint = endpoint(kind);
        let label = format!("Invalid {endpoint} response");
        rows_of(&label, self.get_json(endpoint, &params)?)?.iter().map(|row| fetched_row(kind, &label, row)).collect()
    }

    pub fn fetch_series(
        &self,
        kind: EntityKind,
        tier: RankTier,
        range: TimeRange,
    ) -> Result<(Vec<DailyRow>, DailyTotals)> {
        let mut rows = Vec::new();
        let mut totals = DailyTotals::new();
        for chunk in chunk_range(range) {
            for FetchedRow { row, total } in self.fetch_rows(kind, tier, chunk, None)? {
                if row.day < chunk.from || row.day > chunk.to {
                    continue;
                }
                if let Some(total) = total {
                    totals.insert(row.day, total);
                }
                rows.push(row);
            }
        }
        Ok((rows, totals))
    }

    /// Per hero and day, the player-matches that bought `item_id`. The filtered
    /// `matches_per_bucket` is the buyers' slots, not a denominator, so it is dropped.
    pub fn fetch_buyer_series(&self, item_id: i64, range: TimeRange) -> Result<Vec<DailyRow>> {
        let mut rows = Vec::new();
        for chunk in chunk_range(range) {
            for FetchedRow { row, .. } in self.fetch_rows(EntityKind::Hero, RankTier::All, chunk, Some(item_id))? {
                if row.day < chunk.from || row.day > chunk.to {
                    continue;
                }
                rows.push(row);
            }
        }
        Ok(rows)
    }

    pub fn fetch_all_series(&self, range: TimeRange) -> Result<AllSeries> {
        let (hero_all, totals_all) = self.fetch_series(EntityKind::Hero, RankTier::All, range)?;
        let (hero_high, totals_high) = self.fetch_series(EntityKind::Hero, RankTier::High, range)?;
        let (item_all, _) = self.fetch_series(EntityKind::Item, RankTier::All, range)?;
        let (item_high, _) = self.fetch_series(EntityKind::Item, RankTier::High, range)?;
        Ok(AllSeries {
            hero: TierRows { all: hero_all, high: hero_high },
            item: TierRows { all: item_all, high: item_high },
            totals: TierTotals { all: totals_all, high: totals_high },
        })
    }

    /// `ability-order-stats` cuts at the exact timestamp, so the range ends at the last
    /// day's 23:59:59.
    pub fn fetch_ability_order(&self, hero_id: i64, range: TimeRange) -> Result<Vec<AbilityOrderRow>> {
        let params = Params::new(&[
            ("hero_id", hero_id.to_string()),
            ("min_unix_timestamp", day_of(range.from).to_string()),
            ("max_unix_timestamp", day_end(range.to).to_string()),
            ("min_matches", "1".into()),
        ])
        .population();
        let label = "Invalid ability-order-stats response";
        rows_of(label, self.get_json("ability-order-stats", &params)?)?
            .iter()
            .map(|row| {
                let abilities = match row.get("abilities") {
                    Some(Value::Array(ids)) => ids
                        .iter()
                        .map(|id| match id {
                            Value::Number(number) => {
                                number.as_f64().map(|id| id as i64).ok_or_else(|| anyhow!("{label}: abilities"))
                            }
                            other => bail!("{label}: abilities expected number, received {}", kind_of(other)),
                        })
                        .collect::<Result<_>>()?,
                    other => {
                        bail!("{label}: abilities expected array, received {}", other.map_or("undefined", kind_of))
                    }
                };
                Ok(AbilityOrderRow { abilities, matches: field(label, row, "matches")? })
            })
            .collect()
    }
}
