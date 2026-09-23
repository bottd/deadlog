use crate::names::is_js_space;

/// `text.replace(/\s+/g, ' ').trim()`.
fn squash(text: &str) -> String {
    crate::names::collapse_whitespace(text)
}

fn utf16_prefix(text: &str, units: usize) -> &str {
    let mut count = 0;
    for (index, c) in text.char_indices() {
        let width = c.len_utf16();
        if count + width > units {
            return &text[..index];
        }
        count += width;
    }
    text
}

pub fn utf16_len(text: &str) -> usize {
    text.encode_utf16().count()
}

// ponytail: crude teaser, not a curated summary — just clamp at a word boundary.
pub fn make_summary(text: Option<&str>, max: usize) -> String {
    let Some(text) = text.filter(|text| !text.is_empty()) else { return String::new() };
    let clean = squash(text);
    if utf16_len(&clean) <= max {
        return clean;
    }
    let cut = utf16_prefix(&clean, max);
    let cut = match cut.rfind(' ') {
        Some(space) if utf16_len(&cut[..space]) as f64 > max as f64 * 0.6 => &cut[..space],
        _ => cut,
    };
    format!("{}…", cut.trim_end_matches(is_js_space))
}

pub fn plural<'a>(count: usize, one: &'a str, many: &'a str) -> &'a str {
    if count == 1 { one } else { many }
}

pub fn plural_s(count: usize, one: &str) -> String {
    if count == 1 { one.to_string() } else { format!("{one}s") }
}

fn name_words(author: &str) -> Vec<String> {
    let mut words = Vec::new();
    for word in author.split(is_js_space).filter(|word| !word.is_empty()) {
        let chars: Vec<char> = word.chars().collect();
        let mut start = 0;
        for index in 1..chars.len() {
            if chars[index - 1].is_lowercase() && chars[index].is_uppercase() {
                words.push(chars[start..index].iter().collect::<String>());
                start = index;
            }
        }
        words.push(chars[start..].iter().collect::<String>());
    }
    words
        .into_iter()
        .filter(|word| word.chars().next().is_some_and(|c| c.is_alphanumeric()))
        .collect()
}

pub fn author_initials(author: &str) -> String {
    let words = name_words(author);
    let Some(first) = words.first() else { return "?".into() };
    let initials: String = match words.get(1) {
        Some(second) => first.chars().take(1).chain(second.chars().take(1)).collect(),
        None => first.chars().take(2).collect(),
    };
    initials.to_uppercase()
}

pub fn author_slug(author: &str) -> String {
    crate::names::ability_fragment_id(author)
}

pub fn author_avatar_path(author: &str) -> String {
    let slug = author_slug(author);
    let name = if slug == "yoshi" || slug == "icefrog" { slug.as_str() } else { "deadlock" };
    format!("/assets/authors/{name}.webp")
}

/// Mog's inline link `[[target]]((label))`, reduced to the label.
pub fn strip_mog_links(text: &str) -> String {
    let mut out = String::with_capacity(text.len());
    let mut rest = text;
    while let Some(start) = rest.find("[[") {
        let after = &rest[start + 2..];
        let parsed = after.find("]]((").and_then(|close| {
            let target = &after[..close];
            if target.contains('[') || target.contains(']') {
                return None;
            }
            let label_start = close + 4;
            let label_end = after[label_start..].find("))")? + label_start;
            let label = &after[label_start..label_end];
            if label.contains('(') || label.contains(')') {
                return None;
            }
            Some((label, start + 2 + label_end + 2))
        });
        match parsed {
            Some((label, end)) => {
                out.push_str(&rest[..start]);
                out.push_str(label);
                rest = &rest[end..];
            }
            None => {
                out.push_str(&rest[..start + 2]);
                rest = &rest[start + 2..];
            }
        }
    }
    out.push_str(rest);
    out
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn summaries() {
        assert_eq!(make_summary(Some("  a   b "), 140), "a b");
        let long = "word ".repeat(40);
        let summary = make_summary(Some(&long), 140);
        assert!(summary.ends_with("word…"));
        assert_eq!(make_summary(None, 10), "");
    }

    #[test]
    fn initials() {
        assert_eq!(author_initials("IceFrog"), "IF");
        assert_eq!(author_initials("JP Morgan"), "JM");
        assert_eq!(author_initials("Yoshi"), "YO");
        assert_eq!(author_initials(""), "?");
    }

    #[test]
    fn links() {
        assert_eq!(strip_mog_links("see [[/hero/a]]((Abrams)) now"), "see Abrams now");
        assert_eq!(strip_mog_links("[[x]] plain"), "[[x]] plain");
    }
}
