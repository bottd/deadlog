//! Ability heading → canonical ability slug, shared by the scraper and the DB build.

use crate::to_slug;

fn singularize_slug(slug: &str) -> String {
    slug.split('-')
        .map(|part| if part.len() > 3 && part.ends_with('s') { &part[..part.len() - 1] } else { part })
        .collect::<Vec<_>>()
        .join("-")
}

fn matches_ability_slug(heading: &str, ability: &str) -> bool {
    let compact = ability.replace('-', "");
    heading == ability
        || heading.starts_with(&format!("{ability}-"))
        || heading == compact
        || heading.starts_with(&format!("{compact}-"))
        || heading.replace('-', "") == compact
}

/// The longest ability slug the heading names, allowing stat suffixes ("Call Bell Charge
/// Time"), compact spellings ("Hyperbeam") and plurals.
pub fn resolve_ability_slug<'a, I>(name: &str, abilities: I) -> Option<String>
where
    I: IntoIterator<Item = &'a str>,
{
    let heading_slug = to_slug(name);
    let headings = [singularize_slug(&heading_slug), heading_slug];
    let mut best: Option<&str> = None;
    for slug in abilities {
        let candidates = [slug.to_string(), singularize_slug(slug)];
        let matches =
            headings.iter().any(|heading| candidates.iter().any(|candidate| matches_ability_slug(heading, candidate)));
        if matches && best.is_none_or(|best| slug.len() > best.len()) {
            best = Some(slug);
        }
    }
    best.map(str::to_string)
}

pub const HERO_ABILITY_ALIASES: [(&str, &str); 30] = [
    ("should-charge", "shoulder-charge"),
    ("siphon", "siphon-life"),
    ("hook", "grapple-arm"),
    ("uppercut", "exploding-uppercut"),
    ("charge-shot", "charged-shot"),
    ("immobilizing-trap", "spirit-snare"),
    ("rain-of-fire", "rain-of-arrows"),
    ("catalyst", "napalm"),
    ("kudzu-bomb", "entangling-thorns"),
    ("watchers-covenant", "kudzu-connection"),
    ("true-form", "stone-form"),
    ("blood-bomb", "essence-bomb"),
    ("ground-slam", "ground-strike"),
    ("ghouls", "borrowed-decree"),
    ("turret", "mini-turret"),
    ("medicinal-spectre", "medicinal-specter"),
    ("rocket-barrage", "heavy-barrage"),
    ("tornado", "dust-devil"),
    ("bookworm", "bookwyrm"),
    ("conjure-dragon", "bookwyrm"),
    ("bararge", "barrage"),
    ("tail-whack", "boot-kick"),
    ("mauling-leap", "entangling-bola"),
    ("go-for-the-throat", "lycan-curse"),
    ("assistant", "spectral-assistant"),
    ("crow", "crow-familiar"),
    ("royal-flush", "card-trick"),
    ("card-toss", "card-trick"),
    ("flying-strike", "flying-slash"),
    ("shadow-explosion", "shadow-transformation"),
];

/// [`resolve_ability_slug`], then the renamed-ability aliases — but only onto an ability
/// this hero still has.
pub fn resolve_hero_ability_slug<'a, I>(name: &str, abilities: I) -> Option<String>
where
    I: IntoIterator<Item = &'a str> + Clone,
{
    if let Some(current) = resolve_ability_slug(name, abilities.clone()) {
        return Some(current);
    }
    let alias = resolve_ability_slug(name, HERO_ABILITY_ALIASES.iter().map(|(alias, _)| *alias))?;
    let slug = HERO_ABILITY_ALIASES.iter().find(|(from, _)| *from == alias)?.1;
    abilities.into_iter().any(|ability| ability == slug).then(|| slug.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    const ABILITIES: [&str; 3] = ["call-bell", "storm-cloud", "hyper-beam"];

    #[test]
    fn stat_suffixed_and_compact_headings() {
        let resolve = |name| resolve_ability_slug(name, ABILITIES);
        assert_eq!(resolve("Call Bell Charge Time").as_deref(), Some("call-bell"));
        assert_eq!(resolve("Storm Cloud DPS").as_deref(), Some("storm-cloud"));
        assert_eq!(resolve("Hyperbeam").as_deref(), Some("hyper-beam"));
        assert_eq!(resolve("Hyperbeam DPS").as_deref(), Some("hyper-beam"));
        assert_eq!(resolve("Storm Clouds DPS").as_deref(), Some("storm-cloud"));
        assert_eq!(resolve("Can"), None);
    }

    #[test]
    fn renamed_abilities() {
        assert_eq!(resolve_hero_ability_slug("Tornado", ["dust-devil"]).as_deref(), Some("dust-devil"));
        assert_eq!(resolve_hero_ability_slug("Tornado", ["bookwyrm"]), None);
    }
}
