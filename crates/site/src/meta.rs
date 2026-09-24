//! Head tags and structured data, in the order `svelte-meta-tags` wrote them.

use serde_json::{Map, Value, json};

pub const SITE_URL: &str = "https://deadlog.io";
pub const SITE_NAME: &str = "Deadlog";
pub const SITE_TITLE: &str = "Deadlock Patch Notes & Changelog | Deadlog";
pub const SITE_DESCRIPTION: &str = "Track every Deadlock update in one searchable changelog. Browse the latest patch notes, hero buffs and nerfs, item changes, and balance updates.";

pub fn default_social_image() -> String {
    format!("{SITE_URL}/assets/meta/index.png")
}

pub fn absolute_url(path: &str) -> String {
    if path.is_empty() || path == "/" {
        return SITE_URL.to_string();
    }
    if path.starts_with('/') { format!("{SITE_URL}{path}") } else { format!("{SITE_URL}/{path}") }
}

/// Canonical patch URL; the slug's own `/` survives, so encode per segment.
pub fn change_path(slug: &str) -> String {
    format!("/change/{}", slug.split('/').map(deadlog_changelog::encode_uri_component).collect::<Vec<_>>().join("/"))
}

#[derive(Debug, Clone)]
pub struct Article {
    pub published_time: String,
    pub section: String,
    pub tags: Vec<String>,
}

#[derive(Debug, Clone)]
pub struct Meta {
    pub title: String,
    pub description: String,
    pub canonical: String,
    pub image: String,
    pub indexable: bool,
    pub article: Option<Article>,
    pub json_ld: Option<Value>,
}

impl Meta {
    pub fn new(title: impl Into<String>, description: impl Into<String>, canonical: impl Into<String>) -> Self {
        Self {
            title: title.into(),
            description: description.into(),
            canonical: canonical.into(),
            image: default_social_image(),
            indexable: true,
            article: None,
            json_ld: None,
        }
    }

    pub fn image(mut self, image: impl Into<String>) -> Self {
        self.image = image.into();
        self
    }

    pub fn indexable(mut self, indexable: bool) -> Self {
        self.indexable = indexable;
        self
    }

    pub fn json_ld(mut self, schema: Value) -> Self {
        self.json_ld = Some(schema);
        self
    }

    pub fn article(mut self, article: Article) -> Self {
        self.article = Some(article);
        self
    }

    pub fn robots(&self) -> String {
        let base = if self.indexable { "index,follow" } else { "noindex,follow" };
        format!("{base},max-snippet:-1,max-image-preview:large,max-video-preview:-1")
    }

    /// The `<script type="application/ld+json">` body, with `<` escaped as the library did.
    pub fn json_ld_text(&self) -> Option<String> {
        let schema = self.json_ld.as_ref()?;
        let mut object = Map::new();
        object.insert("@context".into(), json!("https://schema.org"));
        if let Value::Object(fields) = schema {
            for (key, value) in fields {
                object.insert(key.clone(), value.clone());
            }
        }
        Some(Value::Object(object).to_string().replace('<', "\\u003c"))
    }
}

pub fn deadlock_game() -> Value {
    json!({ "@type": "VideoGame", "name": "Deadlock" })
}

pub fn breadcrumb_list(items: &[(&str, &str)]) -> Value {
    json!({
        "@type": "BreadcrumbList",
        "itemListElement": items.iter().enumerate().map(|(index, (name, path))| json!({
            "@type": "ListItem",
            "position": index + 1,
            "name": name,
            "item": absolute_url(path),
        })).collect::<Vec<_>>(),
    })
}

pub struct CollectionPage<'a> {
    pub canonical: &'a str,
    pub title: &'a str,
    pub description: &'a str,
    pub image: &'a str,
    pub about: Vec<Value>,
    pub items: Vec<(String, String)>,
    pub date_modified: Option<String>,
    pub breadcrumbs: Vec<(&'a str, &'a str)>,
}

pub fn collection_page_schema(page: CollectionPage) -> Value {
    let mut webpage = Map::new();
    webpage.insert("@type".into(), json!("CollectionPage"));
    webpage.insert("@id".into(), json!(format!("{}#webpage", page.canonical)));
    webpage.insert("url".into(), json!(page.canonical));
    webpage.insert("name".into(), json!(page.title));
    webpage.insert("description".into(), json!(page.description));
    webpage.insert("image".into(), json!(page.image));
    if let Some(date) = page.date_modified {
        webpage.insert("dateModified".into(), json!(date));
    }
    webpage.insert("inLanguage".into(), json!("en-US"));
    webpage.insert("isPartOf".into(), json!({ "@id": format!("{SITE_URL}/#website") }));
    webpage.insert("about".into(), Value::Array(page.about));
    webpage.insert(
        "mainEntity".into(),
        json!({
            "@type": "ItemList",
            "numberOfItems": page.items.len(),
            "itemListElement": page.items.iter().enumerate().map(|(index, (name, url))| json!({
                "@type": "ListItem",
                "position": index + 1,
                "name": name,
                "url": url,
            })).collect::<Vec<_>>(),
        }),
    );
    json!({ "@graph": [Value::Object(webpage), breadcrumb_list(&page.breadcrumbs)] })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn change_paths_keep_slashes() {
        assert_eq!(change_path("2026/09-16"), "/change/2026/09-16");
        assert_eq!(change_path("2024/a b"), "/change/2024/a%20b");
    }

    #[test]
    fn json_ld_escapes_tags() {
        let meta = Meta::new("t", "d", "c").json_ld(json!({ "name": "<b>" }));
        assert_eq!(meta.json_ld_text().unwrap(), "{\"@context\":\"https://schema.org\",\"name\":\"\\u003cb>\"}");
    }
}
