use std::sync::LazyLock;

use regex::Regex;

/// The client version a changelog was first captured against.
#[derive(Debug, Clone, PartialEq)]
pub struct VersionCapture {
    pub client_version: i64,
    pub captured_at: String,
}

static CAPTURE_LINES: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r"(?m)^client_version_captured(?:_at)? [^\n\r\x{2028}\x{2029}]+$").unwrap());

fn insert_into_root_attr(content: &str, lines: Vec<String>) -> String {
    let mut all: Vec<String> = content.split('\n').map(str::to_string).collect();
    if all.first().map(String::as_str) != Some("``attr:") {
        return content.to_string();
    }
    let Some(close) = all.iter().skip(1).position(|line| line == "``").map(|index| index + 1) else {
        return content.to_string();
    };
    all.splice(close..close, lines);
    all.join("\n")
}

/// Records the version on a changelog's first write only: an existing file keeps the
/// capture it already has, whatever the version is now.
pub fn with_captured_version(content: &str, previous: Option<&str>, capture: Option<&VersionCapture>) -> String {
    if CAPTURE_LINES.is_match(content) {
        return content.to_string();
    }
    if let Some(previous) = previous {
        let carried: Vec<String> = CAPTURE_LINES.find_iter(previous).map(|found| found.as_str().to_string()).collect();
        return if carried.is_empty() { content.to_string() } else { insert_into_root_attr(content, carried) };
    }
    let Some(capture) = capture else { return content.to_string() };
    insert_into_root_attr(
        content,
        vec![
            format!("client_version_captured {}", capture.client_version),
            format!("client_version_captured_at {}", serde_json::to_string(&capture.captured_at).unwrap_or_default()),
        ],
    )
}
