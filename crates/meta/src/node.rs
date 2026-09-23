//! Node trees in the JSON shape `@takumi-rs/helpers/jsx`'s `fromJsx` produced, so the
//! renderer receives exactly what the TypeScript generator sent it.

use serde_json::{Map, Value, json};

pub type Style = Map<String, Value>;

pub fn style(value: Value) -> Style {
    match value {
        Value::Object(map) => map,
        _ => Style::new(),
    }
}

pub fn merge(mut base: Style, extra: Value) -> Style {
    base.extend(style(extra));
    base
}

pub fn px(value: i64) -> String {
    format!("{value}px")
}

pub fn div(style: Style, children: impl IntoIterator<Item = Option<Value>>) -> Value {
    json!({
        "type": "container",
        "children": children.into_iter().flatten().collect::<Vec<_>>(),
        "tagName": "div",
        "preset": { "display": "block" },
        "style": style,
    })
}

/// A `<div>` whose only child is a string.
pub fn text(style: Style, text: impl Into<String>) -> Value {
    json!({
        "type": "text",
        "text": text.into(),
        "tagName": "div",
        "preset": { "display": "block" },
        "style": style,
    })
}

pub fn img(src: &str, style: Style) -> Value {
    json!({
        "type": "image",
        "src": src,
        "tagName": "img",
        "attributes": { "src": src },
        "style": style,
    })
}
