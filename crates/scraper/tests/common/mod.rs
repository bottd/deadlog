#![allow(dead_code)]

use std::collections::HashMap;
use std::sync::Mutex;
use std::time::Duration;

use deadlog_db::write::snapshot::{Hero, HeroItems, Item, Nullish};
use deadlog_scraper::http::{Http, Response};

/// Replays canned responses by URL (or by a matcher), recording every request.
#[derive(Default)]
pub struct FakeHttp {
    pub routes: HashMap<String, (u16, String)>,
    pub by_suffix: Vec<(String, u16, String)>,
    pub calls: Mutex<Vec<String>>,
}

impl FakeHttp {
    pub fn route(mut self, url: &str, body: impl Into<String>) -> Self {
        self.routes.insert(url.into(), (200, body.into()));
        self
    }

    pub fn suffix(mut self, path_end: &str, status: u16, body: impl Into<String>) -> Self {
        self.by_suffix.push((path_end.into(), status, body.into()));
        self
    }

    pub fn calls(&self) -> Vec<String> {
        self.calls.lock().unwrap().clone()
    }
}

impl Http for FakeHttp {
    fn get(&self, url: &str, _: &[(&str, &str)], _: Option<Duration>) -> anyhow::Result<Response> {
        self.calls.lock().unwrap().push(url.to_string());
        let path = url.split('?').next().unwrap_or(url);
        let found = self.routes.get(url).cloned().or_else(|| {
            self.by_suffix
                .iter()
                .find(|(end, _, _)| path.ends_with(end.as_str()))
                .map(|(_, status, body)| (*status, body.clone()))
        });
        Ok(match found {
            Some((status, body)) => {
                Response { status, status_text: if status == 404 { "Not Found".into() } else { "OK".into() }, body }
            }
            None => Response { status: 404, status_text: "Not Found".into(), body: "Not found".into() },
        })
    }
}

pub fn temp_dir(name: &str) -> std::path::PathBuf {
    let dir =
        std::env::temp_dir().join(format!("deadlog-{name}-{}-{:?}", std::process::id(), std::thread::current().id()));
    let _ = std::fs::remove_dir_all(&dir);
    std::fs::create_dir_all(&dir).unwrap();
    dir
}

pub fn hero(id: i64, name: &str, image: Option<&str>, signatures: [&str; 4]) -> Hero {
    let mut images = serde_json::Map::new();
    if let Some(image) = image {
        images.insert("icon_image_small_webp".into(), image.into());
    }
    let [s1, s2, s3, s4] = signatures.map(|s| (!s.is_empty()).then(|| s.to_string()));
    Hero {
        id,
        name: name.into(),
        class_name: format!("hero_{id}"),
        hero_type: None,
        images,
        items: s1.is_some().then_some(HeroItems { signature1: s1, signature2: s2, signature3: s3, signature4: s4 }),
        player_selectable: None,
        disabled: None,
        in_development: None,
    }
}

pub fn item(id: i64, class_name: &str, name: &str, kind: &str, image: &str) -> Item {
    Item {
        id,
        class_name: class_name.into(),
        name: name.into(),
        kind: kind.into(),
        image: Some(image.into()),
        image_webp: None,
        shop_image: None,
        shop_image_webp: None,
        item_slot_type: Nullish::Absent,
        item_tier: Nullish::Absent,
        shopable: None,
        disabled: None,
        description: Nullish::Absent,
        properties: None,
    }
}
