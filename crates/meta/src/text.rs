use deadlog_model::{decode_entity_name, utf16_len};

/// `^[a-z0-9]+(?:_[a-z0-9]+)+$`
fn is_asset_key(text: &str) -> bool {
    let words: Vec<&str> = text.split('_').collect();
    words.len() > 1
        && words
            .iter()
            .all(|word| !word.is_empty() && word.bytes().all(|b| b.is_ascii_lowercase() || b.is_ascii_digit()))
}

/// `^(citadel|upgrade|ability|item)_(?=.+_)`
fn strip_asset_prefix(key: &str) -> &str {
    for prefix in ["citadel_", "upgrade_", "ability_", "item_"] {
        if let Some(rest) = key.strip_prefix(prefix)
            && rest.len() > 1
            && rest[1..].contains('_')
        {
            return rest;
        }
    }
    key
}

pub fn display_name(name: &str) -> String {
    let decoded = decode_entity_name(name);
    let decoded = decoded.trim();
    if !is_asset_key(decoded) {
        return decoded.to_string();
    }
    strip_asset_prefix(decoded)
        .split('_')
        .filter(|word| !word.is_empty())
        .map(|word| word[..1].to_uppercase() + &word[1..])
        .collect::<Vec<_>>()
        .join(" ")
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Face {
    Display,
    Body,
    Mono,
}

impl Face {
    fn advance(self) -> f64 {
        match self {
            Self::Display => 0.46,
            Self::Body => 0.5,
            Self::Mono => 0.74,
        }
    }
}

pub fn estimate_width(text: &str, font_size: i64, face: Face) -> f64 {
    utf16_len(text) as f64 * font_size as f64 * face.advance()
}

pub fn fit_display(text: &str, max_width: i64, steps: &[i64], max_lines: i64, face: Face) -> i64 {
    let budget = (max_width * max_lines) as f64 * 0.92;
    steps.iter().copied().find(|size| estimate_width(text, *size, face) <= budget).unwrap_or(steps[steps.len() - 1])
}

/// `^[a-z0-9]+(?:-[a-z0-9]+)*$`
pub fn is_renderable_slug(slug: &str) -> bool {
    slug.split('-').all(|part| !part.is_empty() && part.bytes().all(|b| b.is_ascii_lowercase() || b.is_ascii_digit()))
}

pub fn count_label(n: usize, singular: &str, plural: Option<&str>) -> String {
    match (n, plural) {
        (1, _) => format!("{n} {singular}"),
        (_, Some(plural)) => format!("{n} {plural}"),
        (_, None) => format!("{n} {singular}S"),
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::theme::FONT_DISPLAY;

    #[test]
    fn display_name_leaves_a_real_name_alone() {
        assert_eq!(display_name("Enchanter's Emblem"), "Enchanter's Emblem");
        assert_eq!(display_name("Mo & Krill"), "Mo & Krill");
    }

    #[test]
    fn display_name_decodes_scraper_entities() {
        assert_eq!(display_name("Mo &amp; Krill"), "Mo & Krill");
    }

    #[test]
    fn display_name_repairs_a_leaked_asset_key() {
        assert_eq!(display_name("ability_death_tax"), "Death Tax");
        assert_eq!(display_name("citadel_weapon_astro_hand_cannon"), "Weapon Astro Hand Cannon");
        assert_eq!(display_name("upgrade_weapon_power_and_health_drain"), "Weapon Power And Health Drain");
    }

    #[test]
    fn display_name_keeps_a_single_word_key() {
        assert_eq!(display_name("curse"), "curse");
    }

    #[test]
    fn display_name_needs_two_words_after_the_prefix_to_strip_it() {
        assert_eq!(display_name("item_sword"), "Item Sword");
    }

    #[test]
    fn fit_keeps_the_largest_step_for_a_name_that_fits() {
        assert_eq!(fit_display("Abrams", 728, &FONT_DISPLAY, 1, Face::Display), 96);
    }

    #[test]
    fn fit_steps_down_for_a_long_name() {
        let long = fit_display("Weapon Power And Health Drain", 728, &FONT_DISPLAY, 1, Face::Display);
        assert!(long < 96);
        assert!(fit_display("Abrams", 728, &FONT_DISPLAY, 1, Face::Display) > long);
    }

    #[test]
    fn fit_picks_a_smaller_step_as_the_column_narrows() {
        let name = "Spirit Shredder Bullets";
        assert!(
            fit_display(name, 400, &FONT_DISPLAY, 1, Face::Display)
                < fit_display(name, 1040, &FONT_DISPLAY, 1, Face::Display)
        );
    }

    #[test]
    fn fit_measures_mono_separately() {
        let row = "WEAPON · TIER 2 · 3 CHANGES";
        assert!(
            fit_display(row, 600, &FONT_DISPLAY, 1, Face::Mono)
                <= fit_display(row, 600, &FONT_DISPLAY, 1, Face::Display)
        );
    }

    #[test]
    fn fit_bottoms_out_at_the_smallest_step() {
        assert_eq!(fit_display(&"x".repeat(400), 728, &FONT_DISPLAY, 1, Face::Display), 52);
    }

    #[test]
    fn fit_gives_a_two_line_heading_twice_the_room() {
        let title = "Some Are Merciful, The Venator Is Not";
        assert!(
            fit_display(title, 1040, &FONT_DISPLAY, 2, Face::Display)
                >= fit_display(title, 1040, &FONT_DISPLAY, 1, Face::Display)
        );
    }

    #[test]
    fn renderable_slugs() {
        for slug in ["enchanters-emblem", "mo-krill", "171245"] {
            assert!(is_renderable_slug(slug), "{slug}");
        }
        for slug in [
            "",
            "51:20",
            "jeté",
            "back-off!",
            "weapon_alternative_rmb+lmb_activate",
            "enchanter's-emblem",
            "-lead",
            "trail-",
            "dou--ble",
        ] {
            assert!(!is_renderable_slug(slug), "{slug}");
        }
    }

    #[test]
    fn count_labels() {
        assert_eq!(count_label(152, "CHANGE", None), "152 CHANGES");
        assert_eq!(count_label(2, "ITEM", None), "2 ITEMS");
        assert_eq!(count_label(1, "CHANGE", None), "1 CHANGE");
        assert_eq!(count_label(1, "PATCH", Some("PATCHES")), "1 PATCH");
        assert_eq!(count_label(33, "PATCH", Some("PATCHES")), "33 PATCHES");
        assert_eq!(count_label(0, "CHANGE", None), "0 CHANGES");
    }
}
