//! The palette and plate geometry, mirrored from `web/css/app.css`.

pub mod colors {
    pub const INK: &str = "#292522";
    pub const INK_RAISED: &str = "#34302c";
    pub const INK_PLATE: &str = "#403a36";

    pub const AMBER: &str = "#ebc06d";
    pub const AMBER_FIELD: &str = "#3f362a";

    pub const SEA: &str = "#82bbc2";
    pub const SEA_DEEP: &str = "#689da4";

    pub const PARCHMENT: &str = "#ece1d7";
    pub const STONE: &str = "#c1a78e";
    pub const RULE: &str = "#897766";
    pub const RULE_SUBTLE: &str = "#544b43";
}

pub const HERO_TONE: [(&str, &str); 4] =
    [("marksman", "#ebc06d"), ("mystic", "#cf9bc2"), ("brawler", "#da806f"), ("assassin", "#85b695")];

pub const ITEM_TONE: [(&str, &str); 3] = [("weapon", "#e49b5d"), ("vitality", "#85b695"), ("spirit", "#cf9bc2")];

pub const WIDTH: u32 = 1200;
pub const HEIGHT: u32 = 630;
pub const INSET: i64 = 32;
pub const PADDING: i64 = 48;
pub const BORDER: i64 = 1;

pub const FONT_LABEL: &str = "24px";
pub const FONT_BODY: i64 = 30;
pub const FONT_DISPLAY: [i64; 4] = [96, 80, 64, 52];

pub const LEADING_BODY: f64 = 1.4;

pub const FAMILY_DISPLAY: &str = "Oswald";
pub const FAMILY_BODY: &str = "Archivo";
pub const FAMILY_MONO: &str = "JetBrains Mono";

pub const TRACKING_DISPLAY: &str = "0.025em";
pub const TRACKING_ANNOTATION: &str = "0.12em";
pub const TRACKING_LABEL: &str = "0.16em";

pub const RADIUS_CONTROL: &str = "8px";
pub const RADIUS_THUMB: &str = "10px";

pub const PLATE_WIDTH: i64 = WIDTH as i64 - INSET * 2;
pub const PLATE_HEIGHT: i64 = HEIGHT as i64 - INSET * 2;

pub const CONTENT: i64 = PLATE_WIDTH - BORDER * 2 - PADDING * 2;

pub fn alpha(hex: &str, opacity: f64) -> String {
    let channel = |at: usize| u8::from_str_radix(&hex[at..at + 2], 16).unwrap_or_default();
    format!("rgba({}, {}, {}, {opacity})", channel(1), channel(3), channel(5))
}

fn tone(table: &[(&str, &'static str)], key: Option<&str>) -> Option<&'static str> {
    let key = key?;
    table.iter().find(|(name, _)| *name == key).map(|(_, color)| *color)
}

pub fn hero_tone(hero_type: Option<&str>) -> Option<&'static str> {
    tone(&HERO_TONE, hero_type)
}

pub fn item_tone(category: Option<&str>) -> Option<&'static str> {
    tone(&ITEM_TONE, category)
}

pub fn cut_corners(corner: i64) -> String {
    [
        "polygon(".to_string(),
        format!("0 0, calc(100% - {corner}px) 0, 100% {corner}px,"),
        format!("100% 100%, {corner}px 100%, 0 calc(100% - {corner}px)"),
        ")".to_string(),
    ]
    .join(" ")
}

pub fn wire_grid() -> String {
    let line = "rgba(130, 187, 194, 0.045)";
    [
        "radial-gradient(circle at 88% 0%, rgba(130, 187, 194, 0.11), transparent 480px)".to_string(),
        "radial-gradient(circle at 8% 24%, rgba(235, 192, 109, 0.045), transparent 384px)".to_string(),
        format!("repeating-linear-gradient(to right, {line} 0 1px, transparent 1px 20px)"),
        format!("repeating-linear-gradient(to bottom, {line} 0 1px, transparent 1px 20px)"),
    ]
    .join(", ")
}

#[cfg(test)]
mod tests {
    use std::collections::HashMap;

    use super::*;

    fn custom_properties(css: &str) -> HashMap<String, String> {
        let start = css.find(":root {").expect("a :root block");
        let end = start + css[start..].find("\n}").expect("the end of :root");
        css[start..end]
            .lines()
            .filter_map(|line| {
                let (name, value) = line.trim().split_once(':')?;
                let value = value.trim().strip_suffix(';')?;
                name.starts_with("--").then(|| (name.to_string(), value.trim().to_string()))
            })
            .collect()
    }

    fn app_css() -> HashMap<String, String> {
        let path = concat!(env!("CARGO_MANIFEST_DIR"), "/../../web/css/app.css");
        custom_properties(&std::fs::read_to_string(path).expect("web/css/app.css"))
    }

    #[test]
    fn theme_mirrors_app_css() {
        let css = app_css();
        assert!(css.len() > 20);
        assert_eq!(css["--base-950"], "#292522");
        let mirrored = [
            (colors::INK, "--base-950"),
            (colors::INK_RAISED, "--base-900"),
            (colors::INK_PLATE, "--base-25"),
            (colors::AMBER, "--accent-500"),
            (colors::AMBER_FIELD, "--accent-100"),
            (colors::SEA, "--sea-500"),
            (colors::SEA_DEEP, "--sea-700"),
            (colors::PARCHMENT, "--base-10"),
            (colors::STONE, "--base-500"),
            (colors::RULE, "--border-default"),
            (colors::RULE_SUBTLE, "--border-light"),
        ];
        let tones = HERO_TONE
            .iter()
            .map(|(name, color)| (*color, format!("--type-{name}")))
            .chain(ITEM_TONE.iter().map(|(name, color)| (*color, format!("--item-{name}"))));
        for (value, property) in mirrored.map(|(v, p)| (v, p.to_string())).into_iter().chain(tones) {
            assert_eq!(css.get(&property).map(String::as_str), Some(value), "{property}");
        }
    }

    #[test]
    fn warm_ink_rule() {
        use colors::*;
        let all = [INK, INK_RAISED, INK_PLATE, AMBER, AMBER_FIELD, SEA, SEA_DEEP, PARCHMENT, STONE, RULE, RULE_SUBTLE];
        for value in all {
            assert!(!["#000", "#fff", "#000000", "#ffffff"].contains(&value.to_lowercase().as_str()));
            if value != colors::SEA && value != colors::SEA_DEEP {
                let red = u8::from_str_radix(&value[1..3], 16).unwrap();
                let blue = u8::from_str_radix(&value[5..7], 16).unwrap();
                assert!(red >= blue, "{value} is cool");
            }
        }
    }

    #[test]
    fn plate_geometry() {
        assert_eq!(PLATE_WIDTH, WIDTH as i64 - INSET * 2);
        assert_eq!(CONTENT, PLATE_WIDTH - BORDER * 2 - PADDING * 2);
    }

    #[test]
    fn alpha_respells_a_token() {
        assert_eq!(alpha(colors::INK_RAISED, 0.6), "rgba(52, 48, 44, 0.6)");
    }
}
