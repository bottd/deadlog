use anyhow::{Result, bail};
use deadlog_model::{DayInterval, EntityImpact, ImpactWindow, PatchStats, TierImpact, js_number};
use regex::Regex;
use serde_json::Value;
use std::sync::LazyLock;

use crate::validate::{count, method, number, one_of, strict, string};

const TIERS: [&str; 2] = ["all", "high"];
const SIDES: [&str; 2] = ["before", "after"];

/// `` name=value`` for a value that is present, `#null` for an explicit null.
pub fn prop(name: &str, value: Option<Option<f64>>) -> String {
    match value {
        None => String::new(),
        Some(None) => format!(" {name}=#null"),
        Some(Some(value)) => format!(" {name}={}", js_number(value)),
    }
}

fn rate(value: Option<f64>) -> String {
    value.map_or_else(|| "#null".into(), js_number)
}

fn window_line(side: &str, window: &ImpactWindow) -> String {
    format!(
        "    {side} win={} pick={} matches={} days={} total={} covered={} coverage=\"{}\"{}",
        rate(window.win),
        rate(window.pick),
        js_number(window.matches),
        js_number(window.days),
        js_number(window.total),
        js_number(window.covered),
        window.coverage,
        prop("buy", window.buy)
    )
}

fn tier<'a>(impact: &'a EntityImpact, name: &str) -> &'a TierImpact {
    if name == "all" { &impact.all } else { &impact.high }
}

fn side<'a>(tier: &'a TierImpact, name: &str) -> &'a ImpactWindow {
    if name == "before" { &tier.before } else { &tier.after }
}

pub fn write_impact_node(impact: &EntityImpact) -> Vec<String> {
    let mut lines = vec![format!("impact closed=#{} {{", impact.closed)];
    for name in TIERS {
        lines.push(format!("  {name} {{"));
        lines.extend(SIDES.map(|side_name| window_line(side_name, side(tier(impact, name), side_name))));
        lines.push("  }".into());
    }
    lines.push("}".into());
    lines
}

const LABEL: &str = "impact block";

fn rate_value(key: &str, value: &Value) -> Result<Option<f64>> {
    if value.is_null() {
        return Ok(None);
    }
    let rate = number(LABEL, key, value)?;
    if rate < 0.0 {
        bail!("Malformed {LABEL}: {key} must be at least 0");
    }
    Ok(Some(rate))
}

fn parse_window(value: &Value) -> Result<ImpactWindow> {
    let map = strict(LABEL, value, &["win", "pick", "matches", "days", "total", "covered", "coverage"], &["buy"])?;
    let buy = match map.get("buy") {
        None => None,
        Some(Value::Null) => Some(None),
        Some(value) => Some(Some(count(LABEL, "buy", value)?)),
    };
    Ok(ImpactWindow {
        win: rate_value("win", &map["win"])?,
        pick: rate_value("pick", &map["pick"])?,
        matches: count(LABEL, "matches", &map["matches"])?,
        days: count(LABEL, "days", &map["days"])?,
        total: count(LABEL, "total", &map["total"])?,
        covered: count(LABEL, "covered", &map["covered"])?,
        coverage: one_of(LABEL, "coverage", &map["coverage"], &["complete", "incomplete"])?.to_string(),
        buy,
    })
}

fn parse_tier(value: &Value) -> Result<TierImpact> {
    let map = strict(LABEL, value, &["before", "after"], &[])?;
    Ok(TierImpact { before: parse_window(&map["before"])?, after: parse_window(&map["after"])? })
}

pub fn parse_impact(value: &Value) -> Result<EntityImpact> {
    let map = strict(LABEL, value, &["closed", "all", "high"], &[])?;
    let Some(closed) = map["closed"].as_bool() else {
        bail!("Malformed {LABEL}: closed must be a boolean");
    };
    Ok(EntityImpact { closed, all: parse_tier(&map["all"])?, high: parse_tier(&map["high"])? })
}

const STATS: &str = "stats node";

static DAY: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"^[0-9]{4}-[0-9]{2}-[0-9]{2}$").unwrap());
static DATETIME: LazyLock<Regex> = LazyLock::new(|| {
    Regex::new(
        r"^[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]+)?)?Z$",
    )
    .unwrap()
});

fn day(key: &str, value: &Value) -> Result<Option<String>> {
    if value.is_null() {
        return Ok(None);
    }
    let text = string(STATS, key, value)?;
    if !DAY.is_match(text) {
        bail!("Malformed {STATS}: {key} must be a YYYY-MM-DD day");
    }
    Ok(Some(text.to_string()))
}

fn interval(value: &Value) -> Result<Option<DayInterval>> {
    let map = strict(STATS, value, &["from", "to"], &[])?;
    match (day("from", &map["from"])?, day("to", &map["to"])?) {
        (None, None) => Ok(None),
        (Some(from), Some(to)) if from < to => Ok(Some(DayInterval { from, to })),
        _ => bail!("Malformed {STATS}: an interval needs from < to, or neither"),
    }
}

pub fn parse_stats(value: &Value) -> Result<PatchStats> {
    let version = value.get("schema");
    if version.and_then(Value::as_f64) != Some(2.0) {
        let shown = version.map_or_else(|| "undefined".into(), deadlog_model::js_json);
        bail!("Unsupported stats schema {shown}; this build reads 2");
    }
    let map = strict(STATS, value, &["schema", "method", "collected", "before", "after"], &["siblings"])?;
    let collected = string(STATS, "collected", &map["collected"])?;
    if !DATETIME.is_match(collected) {
        bail!("Malformed {STATS}: collected must be an ISO datetime");
    }
    let siblings = match map.get("siblings") {
        None => Vec::new(),
        Some(Value::String(sibling)) => vec![sibling.clone()],
        Some(Value::Array(items)) => {
            items.iter().map(|item| string(STATS, "siblings", item).map(str::to_string)).collect::<Result<_>>()?
        }
        Some(_) => bail!("Malformed {STATS}: siblings must be strings"),
    };
    Ok(PatchStats {
        schema_version: 2,
        method_version: method(STATS, "method", &map["method"])?,
        collected_at: collected.to_string(),
        before: interval(&map["before"])?,
        after: interval(&map["after"])?,
        siblings,
    })
}

fn quoted(value: Option<&str>) -> String {
    value.map_or_else(|| "#null".into(), |text| serde_json::to_string(text).unwrap_or_default())
}

pub fn write_stats_node(stats: &PatchStats) -> Vec<String> {
    let interval = |name: &str, interval: &Option<DayInterval>| {
        format!(
            "  {name} from={} to={}",
            quoted(interval.as_ref().map(|day| day.from.as_str())),
            quoted(interval.as_ref().map(|day| day.to.as_str()))
        )
    };
    let mut lines = vec![
        format!(
            "stats schema={} method={} collected={} {{",
            stats.schema_version,
            stats.method_version,
            quoted(Some(&stats.collected_at))
        ),
        interval("before", &stats.before),
        interval("after", &stats.after),
    ];
    if !stats.siblings.is_empty() {
        let siblings: Vec<String> = stats.siblings.iter().map(|sibling| quoted(Some(sibling))).collect();
        lines.push(format!("  siblings {}", siblings.join(" ")));
    }
    lines.push("}".into());
    lines
}
