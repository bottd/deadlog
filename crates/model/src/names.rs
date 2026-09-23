use std::collections::HashMap;
use std::hash::Hash;

pub fn to_slug(name: &str) -> String {
    let lowered = name.to_lowercase();
    let kept: String = lowered
        .trim()
        .chars()
        .filter(|c| c.is_ascii_lowercase() || c.is_ascii_digit() || c.is_whitespace() || *c == '-')
        .collect();
    let mut slug = String::with_capacity(kept.len());
    let mut last_dash = false;
    for c in kept.chars() {
        let c = if c.is_whitespace() { '-' } else { c };
        if c == '-' {
            if !last_dash {
                slug.push('-');
            }
            last_dash = true;
        } else {
            slug.push(c);
            last_dash = false;
        }
    }
    slug.trim_matches('-').to_string()
}

pub fn canonical_slug(slug: &str) -> String {
    slug.to_lowercase().trim().to_string()
}

pub fn decode_entity_name(name: &str) -> String {
    name.replace("&amp;", "&")
        .replace("&quot;", "\"")
        .replace("&apos;", "'")
        .replace("&#39;", "'")
}

/// JS `\s` — Unicode whitespace plus the BOM.
pub fn is_js_space(c: char) -> bool {
    c.is_whitespace() || c == '\u{feff}'
}

pub fn collapse_whitespace(text: &str) -> String {
    text.split(is_js_space).filter(|part| !part.is_empty()).collect::<Vec<_>>().join(" ")
}

pub fn normalize_entity_name(name: &str) -> String {
    collapse_whitespace(&decode_entity_name(name).to_lowercase())
}

pub fn entity_name_aliases(name: &str) -> Vec<String> {
    let normalized = normalize_entity_name(name);
    for article in ["the", "a", "an"] {
        if let Some(rest) = normalized.strip_prefix(article)
            && rest.starts_with(' ')
        {
            let without = rest.trim_start_matches(is_js_space).to_string();
            return vec![normalized, without];
        }
    }
    vec![normalized]
}

pub fn entity_names_match(left: &str, right: &str) -> bool {
    let right = entity_name_aliases(right);
    entity_name_aliases(left).iter().any(|alias| right.contains(alias))
}

pub struct NameIndex<T> {
    map: HashMap<String, T>,
}

impl<T: Clone> NameIndex<T> {
    pub fn new<'a, I, F>(entities: I, name: F) -> Self
    where
        I: IntoIterator<Item = &'a T>,
        T: 'a,
        F: Fn(&T) -> &str,
    {
        let mut map = HashMap::new();
        for entity in entities {
            for alias in entity_name_aliases(name(entity)) {
                map.entry(alias).or_insert_with(|| entity.clone());
            }
        }
        Self { map }
    }

    pub fn find(&self, name: &str) -> Option<&T> {
        entity_name_aliases(name).iter().find_map(|alias| self.map.get(alias))
    }
}

pub fn dedupe<T: Eq + Hash + Clone>(values: impl IntoIterator<Item = T>) -> Vec<T> {
    let mut seen = std::collections::HashSet::new();
    values.into_iter().filter(|value| seen.insert(value.clone())).collect()
}

/// Lowercase, runs of anything but `[a-z0-9]` become one dash, dashes trimmed.
pub fn ability_fragment_id(name: &str) -> String {
    let lowered = name.to_lowercase();
    let mut id = String::with_capacity(lowered.len());
    let mut pending_dash = false;
    for c in lowered.chars() {
        if c.is_ascii_lowercase() || c.is_ascii_digit() {
            if pending_dash && !id.is_empty() {
                id.push('-');
            }
            pending_dash = false;
            id.push(c);
        } else {
            pending_dash = true;
        }
    }
    id
}

/// [`ability_fragment_id`] over the article-stripped alias, so "The Doorman" and
/// "Doorman" land on the same id.
pub fn entity_fragment_id(name: &str) -> String {
    ability_fragment_id(entity_name_aliases(name).last().map(String::as_str).unwrap_or(""))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn slugs_and_fragments() {
        assert_eq!(to_slug("Mo & Krill"), "mo-krill");
        assert_eq!(to_slug("  Grey  Talon "), "grey-talon");
        assert_eq!(ability_fragment_id("Mo & Krill"), "mo-krill");
        assert_eq!(entity_fragment_id("The Doorman"), "doorman");
        assert_eq!(entity_fragment_id("Mo &amp; Krill"), "mo-krill");
    }

    #[test]
    fn aliases() {
        assert_eq!(entity_name_aliases("The  Bebop"), vec!["the bebop", "bebop"]);
        assert_eq!(entity_name_aliases("Theo"), vec!["theo"]);
        assert!(entity_names_match("the bebop", "Bebop"));
    }
}
