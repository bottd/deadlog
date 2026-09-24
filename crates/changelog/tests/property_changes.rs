use deadlog_changelog::{
    Barrier, BulletReading, PreviousChange, PropertyEvent, PropertyValue, ScopedBullet, Unlinked,
    link_property_changes, read_bullet,
};
use deadlog_model::EntityType;

fn event(bullet: &str, scope: Option<&str>) -> Result<PropertyEvent, &'static str> {
    match read_bullet(bullet, scope) {
        BulletReading::Event(event) => Ok(event),
        BulletReading::Barrier(_) => Err("barrier"),
        BulletReading::Unrelated => Err("unrelated"),
    }
}

fn value(amount: f64, unit: &str, text: &str) -> PropertyValue {
    PropertyValue { amount, unit: unit.into(), text: text.into() }
}

#[test]
fn reads_the_explicit_from_to_forms() {
    assert_eq!(
        event("Cooldown increased from 20s to 26s", None).unwrap(),
        PropertyEvent {
            property: "cooldown",
            qualifier: String::new(),
            old: value(20.0, "s", "20s"),
            new: value(26.0, "s", "26s")
        }
    );
    let grapple = event("Grapple cooldown decreased from 45s to 40s", Some("Grapple")).unwrap();
    assert_eq!((grapple.property, grapple.old.amount), ("cooldown", 45.0));
    let charge = event("Static Charge base radius reduced from 8m to 5m", Some("Static Charge")).unwrap();
    assert_eq!((charge.property, charge.qualifier.as_str()), ("radius", "base"));
    let dagger = event("Sleep Dagger T2 cooldown changed from -15s to -13s", Some("Sleep Dagger")).unwrap();
    assert_eq!((dagger.qualifier.as_str(), dagger.old.amount, dagger.old.text.as_str()), ("T2", -15.0, "-15s"));
    let damage = event("Damage increased from 40% to 45%.", None).unwrap();
    assert_eq!((damage.property, damage.new.amount, damage.new.unit.as_str()), ("damage", 45.0, "%"));
}

#[test]
fn takes_a_missing_unit_from_the_other_side() {
    assert_eq!(event("Cooldown increased from 25 to 27s", None).unwrap().old, value(25.0, "s", "25"));
    assert_eq!(event("Radius changed from 5m to 20%", None), Err("barrier"));
}

#[test]
fn treats_a_property_it_can_see_but_not_read_as_a_barrier() {
    for bullet in [
        "Flying Cloak T3 reduced from -14s Cooldown to -13s",
        "Cooldown Reduction reduced from +20% to +12%",
        "Cooldown Reduction For Charged Abilities increased from +25% to 30%",
        "Bullet damage increased from 11.4 to 11.8",
        "Damage spirit scaling increased from 1.8 to 2.0",
        "Cooldown now scales with Spirit Power",
        "Radius increased by 2m",
        "Cooldown increased from 20s to 26s (was 18s before)",
    ] {
        assert_eq!(event(bullet, None), Err("barrier"), "{bullet}");
    }
}

#[test]
fn treats_a_rework_as_a_barrier_for_everything() {
    assert_eq!(
        read_bullet("Screwjab Dagger has been reworked", Some("Screwjab Dagger")),
        BulletReading::Barrier(Barrier::All)
    );
    assert_eq!(
        read_bullet("No longer grants +20% Ability Duration on proc", None),
        BulletReading::Barrier(Barrier::All)
    );
}

#[test]
fn ignores_bullets_about_something_else() {
    assert_eq!(event("Base health increased from 550 to 600", None), Err("unrelated"));
    assert_eq!(event("Napalm cooldown increased from 25s to 27s", Some("Afterburn")), Err("barrier"));
}

fn bullet(patch: &str, at: &str, text: &str) -> ScopedBullet {
    ScopedBullet {
        patch_id: patch.into(),
        published_at: at.into(),
        entity_type: EntityType::Item,
        entity_id: 7,
        ability: None,
        ability_slug: None,
        group_index: 0,
        bullet_index: 0,
        text: text.into(),
    }
}

fn hero(patch: &str, at: &str, ability: &str, slug: &str, text: &str) -> ScopedBullet {
    ScopedBullet {
        entity_type: EntityType::Hero,
        entity_id: 1,
        ability: Some(ability.into()),
        ability_slug: Some(slug.into()),
        ..bullet(patch, at, text)
    }
}

#[derive(Debug, PartialEq)]
enum Link {
    To(String),
    Not(Unlinked),
}

fn links_of(bullets: &[ScopedBullet]) -> Vec<(String, Link)> {
    link_property_changes(bullets)
        .into_iter()
        .map(|event| {
            let link = match (event.previous, event.unlinked) {
                (Some(previous), _) => Link::To(previous.patch_id),
                (None, Some(unlinked)) => Link::Not(unlinked),
                (None, None) => unreachable!(),
            };
            (event.patch_id, link)
        })
        .collect()
}

fn to(patch: &str) -> Link {
    Link::To(patch.into())
}

#[test]
fn links_the_immediately_preceding_change() {
    let events = link_property_changes(&[
        bullet("c", "2024-07-04", "Cooldown increased from 30s to 45s"),
        bullet("a", "2024-05-10", "Cooldown reduced from 55s to 50s"),
        bullet("b", "2024-06-20", "Cooldown reduced from 50 to 30"),
    ]);
    let previous: Vec<_> = events.into_iter().map(|e| (e.patch_id, e.previous)).collect();
    let change =
        |patch: &str, old: &str, new: &str| PreviousChange { patch_id: patch.into(), old: old.into(), new: new.into() };
    assert_eq!(
        previous,
        vec![
            ("a".into(), None),
            ("b".into(), Some(change("a", "55s", "50s"))),
            ("c".into(), Some(change("b", "50", "30")))
        ]
    );
}

#[test]
fn refuses_a_link_when_the_values_do_not_meet() {
    assert_eq!(
        links_of(&[
            bullet("a", "2024-05-10", "Cooldown reduced from 55s to 50s"),
            bullet("b", "2024-06-20", "Cooldown reduced from 48s to 40s"),
        ]),
        vec![("a".into(), Link::Not(Unlinked::First)), ("b".into(), Link::Not(Unlinked::ValueMismatch))]
    );
}

#[test]
fn does_not_link_across_an_unreadable_change_or_a_rework() {
    let chain = |middle: &str| {
        links_of(&[
            bullet("a", "2024-05-10", "Cooldown reduced from 55s to 50s"),
            bullet("m", "2024-06-01", middle),
            bullet("b", "2024-06-20", "Cooldown reduced from 50s to 40s"),
        ])
        .pop()
        .unwrap()
    };
    assert_eq!(chain("Cooldown now starts when the effect ends"), ("b".into(), Link::Not(Unlinked::Barrier)));
    assert_eq!(chain("Item reworked"), ("b".into(), Link::Not(Unlinked::Barrier)));
    assert_eq!(chain("Bonus health increased from 100 to 125"), ("b".into(), to("a")));
}

#[test]
fn keeps_tiers_base_values_and_abilities_on_separate_chains() {
    assert_eq!(
        links_of(&[
            hero(
                "a",
                "2024-08-01",
                "Static Charge",
                "static-charge",
                "Static Charge T2 radius increased from +5m to +7m"
            ),
            hero("b", "2024-08-15", "Static Charge", "static-charge", "Static Charge radius increased from 5m to 7m"),
            hero(
                "c",
                "2024-08-29",
                "Static Charge",
                "static-charge",
                "Static Charge T2 radius increased from +7m to +8m"
            ),
            hero("d", "2024-09-01", "Power Surge", "power-surge", "Power Surge radius increased from 7m to 8m"),
        ]),
        vec![
            ("a".into(), Link::Not(Unlinked::First)),
            ("b".into(), Link::Not(Unlinked::First)),
            ("c".into(), to("a")),
            ("d".into(), Link::Not(Unlinked::First)),
        ]
    );
}

#[test]
fn does_not_order_changes_inside_one_patch_or_across_simultaneous_patches() {
    let second = ScopedBullet { bullet_index: 1, ..bullet("b", "2025-07-29", "Cooldown reduced from 45s to 25s") };
    let links: Vec<Link> = links_of(&[
        bullet("a", "2025-07-01", "Cooldown reduced from 70s to 60s"),
        bullet("b", "2025-07-29", "Cooldown reduced from 60s to 45s"),
        second,
        bullet("c", "2025-09-04", "Cooldown reduced from 25s to 20s"),
    ])
    .into_iter()
    .map(|(_, link)| link)
    .collect();
    assert_eq!(
        links,
        vec![
            Link::Not(Unlinked::First),
            Link::Not(Unlinked::AmbiguousOrder),
            Link::Not(Unlinked::AmbiguousOrder),
            Link::Not(Unlinked::AmbiguousOrder),
        ]
    );

    let other = ScopedBullet { entity_id: 8, ..bullet("x", "2025-07-29", "Bonus health increased from 1 to 2") };
    assert_eq!(
        links_of(&[
            bullet("a", "2025-07-01", "Cooldown reduced from 70s to 60s"),
            bullet("b", "2025-07-29", "Cooldown reduced from 60s to 45s"),
            other,
        ])
        .pop(),
        Some(("b".into(), Link::Not(Unlinked::AmbiguousOrder)))
    );
}

#[test]
fn an_alias_heading_breaks_the_chain() {
    assert_eq!(
        links_of(&[
            hero("a", "2024-09-26", "Life Drain", "life-drain", "Life Drain cooldown reduced from 42s to 30s"),
            hero("m", "2025-01-01", "Drain", "life-drain", "Drain cooldown reduced from 30s to 25s"),
            hero("b", "2026-03-06", "Life Drain", "life-drain", "Life Drain cooldown increased from 30s to 34s"),
        ]),
        vec![("a".into(), Link::Not(Unlinked::First)), ("b".into(), Link::Not(Unlinked::Barrier))]
    );
}

#[test]
fn same_result_whatever_the_arrival_order() {
    let bullets = [
        bullet("a", "2024-05-10", "Cooldown reduced from 55s to 50s"),
        bullet("b", "2024-06-20", "Cooldown reduced from 50s to 40s"),
    ];
    let forward = link_property_changes(&bullets);
    let mut reversed = bullets.to_vec();
    reversed.reverse();
    assert_eq!(link_property_changes(&reversed), forward);
    assert_eq!(forward[0].digest.len(), 16);
    assert!(forward[0].digest.bytes().all(|b| b.is_ascii_hexdigit() && !b.is_ascii_uppercase()));
    assert_ne!(forward[0].digest, forward[1].digest);
}
