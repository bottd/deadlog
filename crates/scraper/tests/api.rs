mod common;

use common::{FakeHttp, temp_dir};
use deadlog_db::write::snapshot::{EntitySnapshot, Provenance, read_snapshot, serialize_snapshot};
use deadlog_scraper::api::deadlock::{fetch_client_version, fetch_entity_snapshot};
use deadlog_scraper::api::snapshot::{load_entity_snapshot, read_entity_snapshot, write_entity_snapshot};
use serde_json::json;

fn hero() -> serde_json::Value {
    json!({ "id": 1, "name": "Infernus", "class_name": "hero_inferno", "images": { "icon_a": "https://cdn/inferno.webp" }, "items": { "signature1": "ability_napalm" } })
}

fn ability() -> serde_json::Value {
    let svg = "<svg width=\"128\" viewBox=\"0 0 128 128\">\n<path d=\"M53 20C48 13\"/>\n</svg>";
    json!({
        "id": 10, "class_name": "ability_napalm", "name": "Napalm", "type": "ability", "image": "https://cdn/napalm.png",
        "description": { "desc": format!("Spew a mixture, dealing {svg}\n<span class=\"label\">spirit damage</span>."), "quip": "Set them on fire", "t1_desc": null },
        "properties": {
            "Damage": { "value": "40", "label": "Damage", "scale_function": { "class_name": "tech" } },
            "AbilityCooldown": { "value": 25.0, "label": "Cooldown", "postfix": "s", "icon": "https://cdn/i" },
            "Hidden": { "value": "3", "label": "Hidden" }
        },
        "tooltip_details": { "info_sections": [{
            "properties_block": [{ "properties": [{ "important_property": "Damage" }, { "important_property": "" }] }],
            "basic_properties": ["AbilityCooldown", "StatusEffectStun"]
        }] }
    })
}

fn upgrade() -> serde_json::Value {
    json!({
        "id": 20, "class_name": "upgrade_clip_size", "name": "Extended Magazine", "type": "upgrade", "shop_image": "https://cdn/clip.png",
        "properties": { "BonusClipSizePercent": { "value": "30", "prefix": "{s:sign}", "label": "Ammo" } },
        "tooltip_sections": [{ "section_attributes": [{ "elevated_properties": ["BonusClipSizePercent"] }] }]
    })
}

fn api(items: serde_json::Value) -> FakeHttp {
    FakeHttp::default()
        .suffix("client-versions", 200, "[6697, 6698]")
        .suffix("heroes", 200, json!([hero()]).to_string())
        .suffix("items", 200, items.to_string())
}

#[test]
fn client_version_is_the_highest_listed() {
    assert_eq!(
        fetch_client_version(&FakeHttp::default().suffix("client-versions", 200, "[5044, 6698, 6697]")).unwrap(),
        6698
    );
    let error =
        fetch_client_version(&FakeHttp::default().suffix("client-versions", 200, "[]")).unwrap_err().to_string();
    assert!(error.contains("Invalid client versions"), "{error}");
}

#[test]
fn pins_heroes_and_items_to_one_version() {
    let http = api(json!([ability(), upgrade()]));
    let snapshot = fetch_entity_snapshot(&http, "2026-09-23T00:00:00.000Z").unwrap();
    let pinned: Vec<String> =
        http.calls().into_iter().filter(|url| url.contains("/heroes?") || url.contains("/items?")).collect();
    assert_eq!(pinned.len(), 2);
    for url in pinned {
        assert!(url.ends_with("?client_version=6698&language=english"), "{url}");
    }
    assert_eq!(snapshot.provenance.unwrap().client_version, 6698);
}

#[test]
fn projects_descriptions_and_displayed_properties() {
    let snapshot = fetch_entity_snapshot(&api(json!([upgrade(), ability()])), "now").unwrap();
    let items: Vec<serde_json::Value> =
        snapshot.items.iter().map(|item| deadlog_db::write::snapshot::item_value(item).unwrap()).collect();
    assert_eq!(items.iter().map(|item| item["id"].as_i64().unwrap()).collect::<Vec<_>>(), [20, 10]);
    assert_eq!(
        items[1]["description"],
        json!({ "desc": "Spew a mixture, dealing \n<span class=\"label\">spirit damage</span>.", "t1_desc": null })
    );
    assert_eq!(
        deadlog_model::js_json(&items[1]["properties"]),
        r#"{"Damage":{"value":"40","label":"Damage","scales":true},"AbilityCooldown":{"value":25,"label":"Cooldown","postfix":"s"}}"#
    );
    assert_eq!(
        items[0]["properties"],
        json!({ "BonusClipSizePercent": { "value": "30", "prefix": "{s:sign}", "label": "Ammo" } })
    );
}

#[test]
fn keeps_an_asset_with_odd_context_fields_and_fails_whole_responses() {
    let mut odd = ability();
    odd["description"] = json!("text");
    odd["properties"] = json!([1]);
    odd["tooltip_details"] = json!(7);
    let snapshot = fetch_entity_snapshot(&api(json!([odd])), "now").unwrap();
    let value = deadlog_db::write::snapshot::item_value(&snapshot.items[0]).unwrap();
    assert_eq!(value["description"], serde_json::Value::Null);
    assert!(value.get("properties").is_none());

    let missing = FakeHttp::default()
        .suffix("client-versions", 200, "[6698]")
        .suffix("heroes", 200, json!([hero()]).to_string())
        .suffix("items", 404, "{}");
    assert!(fetch_entity_snapshot(&missing, "now").unwrap_err().to_string().contains("Failed to fetch items"));
    let malformed = FakeHttp::default()
        .suffix("client-versions", 200, "[6698]")
        .suffix("heroes", 200, r#"[{"id":"nope"}]"#)
        .suffix("items", 200, json!([ability()]).to_string());
    assert!(fetch_entity_snapshot(&malformed, "now").unwrap_err().to_string().contains("Invalid heroes response"));
}

fn snapshot(provenance: Option<Provenance>) -> EntitySnapshot {
    let raw = json!({
        "heroes": [
            { "id": 2, "name": "Seven", "class_name": "hero_gigawatt", "images": { "icon_b": "https://cdn/b.webp", "icon_a": "https://cdn/a.webp" } },
            { "id": 1, "name": "Infernus", "class_name": "hero_inferno", "images": { "icon_a": "https://cdn/inferno.webp" } }
        ],
        "items": [
            { "id": 20, "class_name": "upgrade_grit", "name": "Grit", "type": "upgrade", "description": { "desc": "Second <span>item</span>", "t1_desc": null },
              "properties": { "Bonus": { "value": "30", "prefix": "{s:sign}", "label": "Ammo" } } },
            { "id": 10, "class_name": "ability_slam", "name": "Slam", "type": "ability", "properties": { "Damage": { "value": 40, "scales": true } } }
        ]
    });
    EntitySnapshot { provenance, ..read_snapshot(&raw.to_string()).unwrap() }
}

fn versioned(collected_at: &str, client_version: i64) -> EntitySnapshot {
    snapshot(Some(Provenance { client_version, language: "english".into(), collected_at: collected_at.into() }))
}

/// Serves `snapshot` as the live API would, one version pinned.
fn serving(snapshot: &EntitySnapshot) -> FakeHttp {
    let version = snapshot.provenance.as_ref().map_or(1, |p| p.client_version);
    let items: Vec<serde_json::Value> = snapshot
        .items
        .iter()
        .map(|item| {
            let mut value = deadlog_db::write::snapshot::item_value(item).unwrap();
            let keys: Vec<String> = value
                .get("properties")
                .and_then(|p| p.as_object())
                .map(|p| p.keys().cloned().collect())
                .unwrap_or_default();
            value["tooltip_sections"] = json!([{ "section_attributes": [{ "properties": keys }] }]);
            if let Some(properties) = value.get_mut("properties").and_then(|p| p.as_object_mut()) {
                for property in properties.values_mut() {
                    if property.get("scales").is_some() {
                        property.as_object_mut().unwrap().remove("scales");
                        property["scale_function"] = json!({ "class_name": "tech" });
                    }
                }
            }
            value
        })
        .collect();
    FakeHttp::default()
        .suffix("client-versions", 200, format!("[{version}]"))
        .suffix("heroes", 200, serde_json::to_string(&snapshot.heroes).unwrap())
        .suffix("items", 200, serde_json::Value::Array(items).to_string())
}

#[test]
fn snapshot_file_keeps_api_order_and_round_trips() {
    let dir = temp_dir("snapshot-order");
    let written: serde_json::Value = serde_json::from_str(&serialize_snapshot(&snapshot(None)).unwrap()).unwrap();
    assert_eq!(
        written["heroes"].as_array().unwrap().iter().map(|h| h["id"].as_i64().unwrap()).collect::<Vec<_>>(),
        [2, 1]
    );
    assert_eq!(
        written["items"].as_array().unwrap().iter().map(|h| h["id"].as_i64().unwrap()).collect::<Vec<_>>(),
        [20, 10]
    );
    assert_eq!(written["heroes"][0]["images"].as_object().unwrap().keys().collect::<Vec<_>>(), ["icon_b", "icon_a"]);
    write_entity_snapshot(&dir, &versioned("2026-09-21T21:01:20.000Z", 6698)).unwrap();
    let raw: serde_json::Value =
        serde_json::from_str(&std::fs::read_to_string(dir.join("entities.json")).unwrap()).unwrap();
    assert_eq!(
        raw.as_object().unwrap().keys().collect::<Vec<_>>(),
        ["schemaVersion", "clientVersion", "language", "collectedAt", "heroes", "items"]
    );
    assert_eq!(read_entity_snapshot(&dir), Some(versioned("2026-09-21T21:01:20.000Z", 6698)));
    assert_eq!(std::fs::read_dir(&dir).unwrap().count(), 1);
    write_entity_snapshot(&dir, &snapshot(None)).unwrap();
    assert_eq!(read_entity_snapshot(&dir).unwrap().provenance, None);
}

#[test]
fn refreshes_only_when_the_api_moved() {
    let dir = temp_dir("snapshot-refresh");
    let recorded = versioned("2026-09-21T21:01:20.000Z", 6698);
    write_entity_snapshot(&dir, &recorded).unwrap();
    let before = std::fs::read_to_string(dir.join("entities.json")).unwrap();
    assert_eq!(load_entity_snapshot(&serving(&recorded), &dir, "2026-09-22T06:00:00.000Z").unwrap(), recorded);
    assert_eq!(std::fs::read_to_string(dir.join("entities.json")).unwrap(), before);

    let moved = versioned("2026-09-22T06:00:00.000Z", 6700);
    assert_eq!(load_entity_snapshot(&serving(&moved), &dir, "2026-09-22T06:00:00.000Z").unwrap(), moved);
    assert_eq!(read_entity_snapshot(&dir), Some(moved));
}

#[test]
fn falls_back_to_the_committed_file_or_rethrows() {
    let dir = temp_dir("snapshot-fallback");
    let offline = FakeHttp::default();
    assert!(load_entity_snapshot(&offline, &dir, "now").is_err());
    std::fs::write(dir.join("entities.json"), r#"{"heroes":[{"id":"nope"}]}"#).unwrap();
    assert!(load_entity_snapshot(&offline, &dir, "now").is_err());
    let recorded = versioned("2026-09-21T21:01:20.000Z", 6698);
    write_entity_snapshot(&dir, &recorded).unwrap();
    let before = std::fs::read_to_string(dir.join("entities.json")).unwrap();
    assert_eq!(load_entity_snapshot(&offline, &dir, "now").unwrap(), recorded);
    assert_eq!(std::fs::read_to_string(dir.join("entities.json")).unwrap(), before);
}

#[test]
fn committed_entities_json_reserializes_byte_for_byte() {
    let path = concat!(env!("CARGO_MANIFEST_DIR"), "/../../app/changelogs/entities.json");
    let raw = std::fs::read_to_string(path).unwrap();
    assert_eq!(serialize_snapshot(&read_snapshot(&raw).unwrap()).unwrap(), raw);
}
