use std::collections::HashMap;

use anyhow::{Result, bail};
use deadlog_model::{AssetIdentity, EntityContext, to_slug};

use super::context::{build_entity_context, description_text};
use super::snapshot::{Hero, Item, Provenance};

#[derive(Debug, Clone, PartialEq)]
pub struct AbilitySlot {
    pub hero_id: i64,
    pub position: i64,
    pub name: String,
    pub slug: String,
    pub image: String,
    pub description: Option<String>,
    pub asset_id: i64,
    pub class_name: String,
    pub context: Option<EntityContext>,
}

/// Each hero's four signature abilities, keyed by hero id. A released hero whose slots
/// cannot be resolved, or two released heroes routing the same ability slug, fails the
/// build: either would publish a broken ability page.
pub fn resolve_ability_slots(
    heroes: &[Hero],
    items: &[Item],
    provenance: Option<&Provenance>,
) -> Result<HashMap<i64, Vec<AbilitySlot>>> {
    let items_by_class: HashMap<&str, &Item> = items.iter().map(|item| (item.class_name.as_str(), item)).collect();
    let mut slots_by_hero = HashMap::new();
    let mut routed_slugs: HashMap<String, &str> = HashMap::new();
    let mut errors = Vec::new();

    for hero in heroes {
        let mut slots = Vec::new();
        for position in 1..=4 {
            let class_name = hero.items.as_ref().and_then(|items| items.signature(position));
            let ability = class_name.and_then(|class_name| items_by_class.get(class_name)).copied();
            let image = ability.map_or("", Item::ability_image);
            let Some(ability) = ability.filter(|ability| ability.kind == "ability" && !image.is_empty()) else {
                if hero.is_released() {
                    errors.push(format!("{} signature{position} ({})", hero.name, class_name.unwrap_or("missing")));
                }
                continue;
            };

            let slug = to_slug(&ability.name);
            if hero.is_released() {
                match routed_slugs.get(&slug) {
                    Some(owner) => errors.push(format!("/ability/{slug} claimed by {owner} and {}", hero.name)),
                    None => {
                        routed_slugs.insert(slug.clone(), &hero.name);
                    }
                }
            }

            slots.push(AbilitySlot {
                hero_id: hero.id,
                position: position as i64,
                name: ability.name.clone(),
                slug,
                image: image.to_string(),
                description: description_text(ability.description_field("desc")),
                asset_id: ability.id,
                class_name: ability.class_name.clone(),
                context: build_entity_context(
                    AssetIdentity {
                        asset_id: ability.id,
                        class_name: ability.class_name.clone(),
                        kind: ability.kind.clone(),
                        hero_id: Some(hero.id),
                        slot: Some(position as i64),
                    },
                    ability,
                    provenance,
                ),
            });
        }
        if !slots.is_empty() {
            slots_by_hero.insert(hero.id, slots);
        }
    }

    if !errors.is_empty() {
        bail!("Could not resolve released hero abilities: {}", errors.join(", "));
    }
    Ok(slots_by_hero)
}
