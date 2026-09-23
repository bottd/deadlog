//! The JavaScript behaviours the scraper's output depends on: `localeCompare` ordering
//! of entity names and `decodeURIComponent`.

use std::cmp::Ordering;

/// ICU root collation order for ASCII punctuation, which sorts before digits and letters.
const PUNCTUATION: &str = "\t\n\u{b}\u{c}\r _-,;:!?.'\"()[]{}@*/\\&#%`^+<=>|~$";

fn primary(c: char) -> (u8, u32) {
    if let Some(index) = PUNCTUATION.find(c) {
        return (0, index as u32);
    }
    if c.is_ascii_digit() {
        return (1, c as u32);
    }
    if c.is_alphabetic() {
        return (2, c.to_lowercase().next().unwrap_or(c) as u32);
    }
    (3, c as u32)
}

/// `a.localeCompare(b)` under the root locale, for the names the generator sorts:
/// punctuation before digits before letters, letters case-insensitively, then
/// lowercase before uppercase.
pub fn locale_compare(a: &str, b: &str) -> Ordering {
    let key = |text: &str| text.chars().map(primary).collect::<Vec<_>>();
    key(a).cmp(&key(b)).then_with(|| {
        let tertiary = |text: &str| text.chars().map(|c| c.is_uppercase()).collect::<Vec<_>>();
        tertiary(a).cmp(&tertiary(b))
    })
}

/// `decodeURIComponent`, which throws on a malformed escape or invalid UTF-8.
pub fn decode_uri_component(text: &str) -> Option<String> {
    let bytes = text.as_bytes();
    let mut out = Vec::with_capacity(bytes.len());
    let mut index = 0;
    while index < bytes.len() {
        if bytes[index] == b'%' {
            let hex = text.get(index + 1..index + 3)?;
            out.push(u8::from_str_radix(hex, 16).ok()?);
            index += 3;
        } else {
            out.push(bytes[index]);
            index += 1;
        }
    }
    String::from_utf8(out).ok()
}

pub fn utf16_len(text: &str) -> usize {
    text.encode_utf16().count()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn collation() {
        let mut names = vec!["abrams", "Bebop", "McGinnis", "Mirage", "Mo & Krill", "Mo", "The Doorman", "grey talon"];
        names.sort_by(|a, b| locale_compare(a, b));
        assert_eq!(names, ["abrams", "Bebop", "grey talon", "McGinnis", "Mirage", "Mo", "Mo & Krill", "The Doorman"]);
        assert_eq!(locale_compare("a", "A"), Ordering::Less);
    }

    #[test]
    fn uri_decoding() {
        assert_eq!(decode_uri_component("https%3A%2F%2Fa.example%2Fx%20y").as_deref(), Some("https://a.example/x y"));
        assert_eq!(decode_uri_component("%E0%A4%A"), None);
    }
}
