//! Lookups over the loaded snapshot, built once and shared by every page renderer.

use std::collections::HashMap;

use deadlog_db::{Ability, Changelog, Hero, HeroLink, Item, ItemLink, PropertyEvent, Snapshot};
use deadlog_model::{HERO_CARD_IMAGE_KEYS, HERO_ICON_IMAGE_KEYS, hero_image};

pub struct Site<'a> {
    pub db: &'a Snapshot,
    changelog_index: HashMap<&'a str, usize>,
    hero_index: HashMap<i64, usize>,
    item_index: HashMap<i64, usize>,
    abilities_by_hero: HashMap<i64, Vec<&'a Ability>>,
    hero_history: HashMap<i64, Vec<&'a HeroLink>>,
    item_history: HashMap<i64, Vec<&'a ItemLink>>,
    heroes_in: HashMap<&'a str, Vec<&'a HeroLink>>,
    items_in: HashMap<&'a str, Vec<&'a ItemLink>>,
}

impl<'a> Site<'a> {
    pub fn new(db: &'a Snapshot) -> Self {
        let changelog_index: HashMap<&str, usize> =
            db.changelogs.iter().enumerate().map(|(index, row)| (row.id.as_str(), index)).collect();
        let hero_index = db.heroes.iter().enumerate().map(|(index, row)| (row.id, index)).collect();
        let item_index = db.items.iter().enumerate().map(|(index, row)| (row.id, index)).collect();

        let mut abilities_by_hero: HashMap<i64, Vec<&Ability>> = HashMap::new();
        for ability in &db.abilities {
            abilities_by_hero.entry(ability.hero_id).or_default().push(ability);
        }

        let order = |id: &str| changelog_index.get(id).copied().unwrap_or(usize::MAX);
        let mut hero_history: HashMap<i64, Vec<&HeroLink>> = HashMap::new();
        let mut heroes_in: HashMap<&str, Vec<&HeroLink>> = HashMap::new();
        for link in &db.hero_links {
            hero_history.entry(link.hero_id).or_default().push(link);
            heroes_in.entry(link.changelog_id.as_str()).or_default().push(link);
        }
        for links in hero_history.values_mut() {
            links.sort_by_key(|link| order(&link.changelog_id));
        }
        let mut item_history: HashMap<i64, Vec<&ItemLink>> = HashMap::new();
        let mut items_in: HashMap<&str, Vec<&ItemLink>> = HashMap::new();
        for link in &db.item_links {
            item_history.entry(link.item_id).or_default().push(link);
            items_in.entry(link.changelog_id.as_str()).or_default().push(link);
        }
        for links in item_history.values_mut() {
            links.sort_by_key(|link| order(&link.changelog_id));
        }

        Self {
            db,
            changelog_index,
            hero_index,
            item_index,
            abilities_by_hero,
            hero_history,
            item_history,
            heroes_in,
            items_in,
        }
    }

    pub fn changelog(&self, id: &str) -> Option<&'a Changelog> {
        self.changelog_index.get(id).map(|&index| &self.db.changelogs[index])
    }

    pub fn changelog_by_slug(&self, slug: &str) -> Option<&'a Changelog> {
        self.db.changelogs.iter().find(|row| row.slug == slug)
    }

    pub fn hero(&self, id: i64) -> Option<&'a Hero> {
        self.hero_index.get(&id).map(|&index| &self.db.heroes[index])
    }

    pub fn item(&self, id: i64) -> Option<&'a Item> {
        self.item_index.get(&id).map(|&index| &self.db.items[index])
    }

    pub fn abilities(&self, hero_id: i64) -> &[&'a Ability] {
        self.abilities_by_hero.get(&hero_id).map(Vec::as_slice).unwrap_or_default()
    }

    /// Newest first, like `getChangelogsByHeroId`.
    pub fn hero_history(&self, hero_id: i64) -> &[&'a HeroLink] {
        self.hero_history.get(&hero_id).map(Vec::as_slice).unwrap_or_default()
    }

    pub fn item_history(&self, item_id: i64) -> &[&'a ItemLink] {
        self.item_history.get(&item_id).map(Vec::as_slice).unwrap_or_default()
    }

    /// Table order.
    pub fn heroes_in(&self, changelog_id: &str) -> &[&'a HeroLink] {
        self.heroes_in.get(changelog_id).map(Vec::as_slice).unwrap_or_default()
    }

    pub fn items_in(&self, changelog_id: &str) -> &[&'a ItemLink] {
        self.items_in.get(changelog_id).map(Vec::as_slice).unwrap_or_default()
    }

    pub fn released_heroes(&self) -> impl Iterator<Item = &'a Hero> {
        self.db.heroes.iter().filter(|hero| hero.is_released)
    }

    pub fn released_items(&self) -> impl Iterator<Item = &'a Item> {
        self.db.items.iter().filter(|item| item.is_released)
    }

    /// Released, or ever mentioned in a patch — `getRenderableHeroSlugs`.
    pub fn renderable_heroes(&self) -> Vec<&'a Hero> {
        let mut heroes: Vec<&Hero> = self
            .db
            .heroes
            .iter()
            .filter(|hero| hero.is_released || self.hero_history.contains_key(&hero.id))
            .collect();
        heroes.sort_by(|a, b| a.slug.cmp(&b.slug));
        heroes
    }

    pub fn renderable_items(&self) -> Vec<&'a Item> {
        let mut items: Vec<&Item> = self
            .db
            .items
            .iter()
            .filter(|item| item.is_released || self.item_history.contains_key(&item.id))
            .collect();
        items.sort_by(|a, b| a.slug.cmp(&b.slug));
        items
    }

    /// `getReleasedAbilities`: slugs are unique among released heroes.
    pub fn released_abilities(&self) -> Vec<(&'a Ability, &'a Hero)> {
        let mut abilities: Vec<(&Ability, &Hero)> = self
            .db
            .abilities
            .iter()
            .filter_map(|ability| {
                self.hero(ability.hero_id).filter(|hero| hero.is_released).map(|hero| (ability, hero))
            })
            .collect();
        abilities.sort_by(|a, b| a.0.slug.cmp(&b.0.slug));
        abilities
    }

    pub fn property_events(&self, entity_type: &str, entity_id: i64) -> Vec<&'a PropertyEvent> {
        self.db
            .property_events
            .iter()
            .filter(|event| event.entity_type == entity_type && event.entity_id == entity_id)
            .collect()
    }
}

pub fn hero_card_image(hero: &Hero) -> String {
    hero_image(&hero.images, &HERO_CARD_IMAGE_KEYS)
}

pub fn hero_icon_image(hero: &Hero) -> String {
    hero_image(&hero.images, &HERO_ICON_IMAGE_KEYS)
}

/// `String.prototype.localeCompare` for the names the directories sort, which are Latin
/// letters, digits, spaces and a little punctuation. ICU's root collation orders
/// whitespace before punctuation before digits before letters, compares letters
/// case-insensitively, and only then puts lowercase ahead of uppercase.
pub fn locale_compare(a: &str, b: &str) -> std::cmp::Ordering {
    fn primary(text: &str) -> Vec<(u8, char)> {
        text.chars()
            .flat_map(char::to_lowercase)
            .map(|c| {
                let class = if c.is_whitespace() {
                    0
                } else if c.is_numeric() {
                    2
                } else if c.is_alphabetic() {
                    3
                } else {
                    1
                };
                (class, c)
            })
            .collect()
    }
    primary(a).cmp(&primary(b)).then_with(|| b.cmp(a))
}
