use std::time::Duration;

use anyhow::{Context, Result, bail};
use deadlog_db::write::snapshot::{EntitySnapshot, Provenance, read_api_heroes, read_api_items};
use serde_json::Value;

use crate::http::Http;

const ASSETS_API_BASE: &str = "https://api.deadlock-api.com/v1/assets";
const BIG_DAYS_URL: &str = "https://api.deadlock-api.com/v1/patches/big-days";
const SNAPSHOT_LANGUAGE: &str = "english";
const TIMEOUT: Duration = Duration::from_secs(30);

fn fetch_and_validate<T>(
    http: &dyn Http,
    url: &str,
    resource_name: &str,
    timeout: Option<Duration>,
    validate: impl FnOnce(&Value) -> Result<T>,
) -> Result<T> {
    let response = http.get(url, &[], timeout)?;
    if !response.ok() {
        bail!("Failed to fetch {resource_name}: {}", response.status_text);
    }
    let data: Value = serde_json::from_str(&response.body).with_context(|| format!("parsing {resource_name}"))?;
    validate(&data).map_err(|error| {
        eprintln!("Failed to validate {resource_name} response: {error:#}");
        anyhow::anyhow!("Invalid {resource_name} response: {error:#}")
    })
}

/// The newest client version the asset API knows.
pub fn fetch_client_version(http: &dyn Http) -> Result<i64> {
    fetch_and_validate(http, &format!("{ASSETS_API_BASE}/client-versions"), "client versions", Some(TIMEOUT), |data| {
        let versions = data.as_array().context("expected an array")?;
        let versions: Vec<i64> = versions
            .iter()
            .map(|version| match version.as_f64() {
                Some(number) if number.fract() == 0.0 && number > 0.0 => Ok(number as i64),
                _ => bail!("expected positive integers"),
            })
            .collect::<Result<_>>()?;
        versions.into_iter().max().context("expected at least one version")
    })
}

fn pinned(endpoint: &str, client_version: i64) -> String {
    format!("{ASSETS_API_BASE}/{endpoint}?client_version={client_version}&language={SNAPSHOT_LANGUAGE}")
}

/// Heroes and items pinned to one client version, so the pair always describes the
/// same build of the game.
pub fn fetch_entity_snapshot(http: &dyn Http, collected_at: &str) -> Result<EntitySnapshot> {
    let client_version = fetch_client_version(http)?;
    let (heroes, items) = std::thread::scope(|scope| {
        let heroes = scope.spawn(|| {
            fetch_and_validate(http, &pinned("heroes", client_version), "heroes", Some(TIMEOUT), read_api_heroes)
        });
        let items = fetch_and_validate(http, &pinned("items", client_version), "items", Some(TIMEOUT), read_api_items);
        (heroes.join().expect("heroes fetch panicked"), items)
    });
    Ok(EntitySnapshot {
        heroes: heroes?,
        items: items?,
        provenance: Some(Provenance {
            client_version,
            language: SNAPSHOT_LANGUAGE.into(),
            collected_at: collected_at.into(),
        }),
    })
}

/// `GET /v1/patches/big-days`: when Deadlock's "big" patches landed, usually
/// bi-weekly. The list is maintained by hand upstream and has no offline copy.
pub fn fetch_big_patch_days(http: &dyn Http) -> Result<Vec<String>> {
    fetch_and_validate(http, BIG_DAYS_URL, "big patch days", None, |data| {
        data.as_array()
            .context("expected an array")?
            .iter()
            .map(|day| day.as_str().map(str::to_string).context("expected strings"))
            .collect()
    })
}
