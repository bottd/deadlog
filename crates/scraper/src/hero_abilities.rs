use std::sync::LazyLock;

use deadlog_changelog::EntityBulletGroup;
use deadlog_model::{resolve_hero_ability_slug, to_slug};
use regex::Regex;

use crate::content::parser::detect_ability_prefix;

/// What regrouping needs of an ability: its display name and route slug.
#[derive(Debug, Clone, PartialEq)]
pub struct AbilityName {
    pub name: String,
    pub slug: String,
}

/// Older or informal names a note uses for an ability, keyed by its slug.
static ABILITY_TERMS: LazyLock<Vec<(&str, Regex)>> = LazyLock::new(|| {
    [
        ("air-drop", r"when flying while disarmed"),
        ("assassinate", r"low hp indication"),
        ("enchanters-satchel", r"enchanted satchel"),
        ("flight", r"(?:shooting|stamina) while flying"),
        ("flying-cloak", r"cloak"),
        ("flying-slash", r"grapple post cast"),
        ("grapple-arm", r"hooking"),
        ("gutshot", r"gut shot"),
        ("ice-path", r"ice pathing"),
        ("jar-of-dead", r"deadheads?"),
        ("last-stand", r"ult channel"),
        ("petrifying-bola", r"petrify"),
        ("rabbit-hex", r"rabbit can"),
        ("rejuvenating-aurora", r"dynamo heal"),
        ("sleep-dagger", r"sleep state"),
        ("spirit-lasso", r"lasso"),
    ]
    .into_iter()
    .map(|(slug, term)| (slug, Regex::new(&format!(r"(?i)(?-u:\b){term}(?-u:\b)")).expect("valid regex")))
    .collect()
});

fn slugs(abilities: &[AbilityName]) -> impl Iterator<Item = &str> + Clone {
    abilities.iter().map(|ability| ability.slug.as_str())
}

/// The ability a note mentions first, by name (from any word on) or by an older term.
fn mentioned_ability<'a>(note: &str, abilities: &'a [AbilityName]) -> Option<&'a AbilityName> {
    let normalized = to_slug(note);
    let words: Vec<&str> = normalized.split('-').collect();
    let mut mention: Option<(&AbilityName, usize)> = None;
    let mut offset = 0;
    for index in 0..words.len() {
        let slug = resolve_hero_ability_slug(&words[index..].join("-"), slugs(abilities));
        if let Some(ability) = abilities.iter().find(|candidate| Some(&candidate.slug) == slug.as_ref()) {
            mention = Some((ability, offset));
            break;
        }
        offset += words[index].len() + 1;
    }

    for ability in abilities {
        let Some((_, term)) = ABILITY_TERMS.iter().find(|(slug, _)| *slug == ability.slug) else { continue };
        let Some(found) = term.find(note) else { continue };
        if let Some(index) = normalized.find(&to_slug(found.as_str()))
            && mention.is_none_or(|(_, earlier)| index < earlier)
        {
            mention = Some((ability, index));
        }
    }
    mention.map(|(ability, _)| ability)
}

static BASE_CHANGE: LazyLock<Regex> = LazyLock::new(|| {
    let space = deadlog_model::JS_SPACE;
    Regex::new(&format!(
        r"(?i)^(?:(?:fixed|increas(?:e|ed)|reduc(?:e|ed)|restor(?:e|ed)|revert(?:ed)?){space}+(?:(?:her|his|recent|their){space}+)?|(?:no longer|now){space}+has{space}+(?:[+-]?[0-9]+(?:\.[0-9]+)?%{space}+)?)?(?:air control|alt fire|ammo|base|bullet|crit|falloff|fire rate|float time|gravity|gun|headshot|health|hp|lifesteal|light melee|max (?:falloff|health)|melee|move(?:ment|speed| speed)?|rage|regen|reload|sliding|spirit|sprint|stamina|starting|weapon)(?-u:\b)"
    ))
    .expect("valid regex")
});

/// Re-splits bullets by the ability each one is actually about. The forum groups by
/// the first word of a run, which misfiles a note that names another ability, or a
/// base-stat change that follows an ability's notes.
pub fn regroup_ability_changes(groups: &[EntityBulletGroup], abilities: &[AbilityName]) -> Vec<EntityBulletGroup> {
    let mut result: Vec<EntityBulletGroup> = Vec::new();
    for group in groups {
        let mut name = group.ability.clone();
        let mut slug = name.as_deref().and_then(|name| resolve_hero_ability_slug(name, slugs(abilities)));

        for bullet in &group.bullets {
            let mention = mentioned_ability(bullet, abilities);
            let prefix = if mention.is_some() { None } else { detect_ability_prefix(bullet, None) };
            let detected = mention
                .map(|ability| ability.slug.clone())
                .or_else(|| prefix.as_deref().and_then(|prefix| resolve_hero_ability_slug(prefix, slugs(abilities))));
            match &detected {
                Some(found) if Some(found) != slug.as_ref() => {
                    name = abilities
                        .iter()
                        .find(|ability| &ability.slug == found)
                        .map(|ability| ability.name.clone())
                        .or(prefix.clone())
                        .or(name);
                    slug = detected.clone();
                }
                None if BASE_CHANGE.is_match(bullet) => {
                    name = None;
                    slug = None;
                }
                _ => {}
            }

            match result.last_mut() {
                Some(current) if current.ability == name => current.bullets.push(bullet.clone()),
                _ => result.push(EntityBulletGroup { ability: name.clone(), bullets: vec![bullet.clone()] }),
            }
        }
    }
    result
}
