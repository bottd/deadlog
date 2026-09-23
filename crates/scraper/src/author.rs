use std::sync::LazyLock;

use regex::Regex;

static PARENTHESISED: LazyLock<Regex> = LazyLock::new(|| Regex::new(r"\(([^)]+)\)").unwrap());

/// The display name out of a forum author string: `email (Name)`, `(Name)` or `Name`.
pub fn parse_author_name(author: Option<&str>) -> String {
    let text = author.unwrap_or("Unknown");
    if text == "Unknown" || deadlog_model::js_trim(text).is_empty() {
        return "Unknown".into();
    }
    if let Some(captures) = PARENTHESISED.captures(text) {
        return deadlog_model::js_trim(&captures[1]).to_string();
    }
    if text.contains('@') { "Unknown".into() } else { deadlog_model::js_trim(text).to_string() }
}
