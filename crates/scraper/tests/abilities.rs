mod common;

use common::item;
use deadlog_changelog::EntityBulletGroup;
use deadlog_db::write::abilities::resolve_ability_slots;
use deadlog_db::write::context::{description_text, markup_paragraphs};
use deadlog_db::write::snapshot::{Description, Hero, Nullish, Property, Provenance};
use deadlog_scraper::hero_abilities::{AbilityName, regroup_ability_changes};

fn hero(partial: impl FnOnce(&mut Hero)) -> Hero {
    let mut hero = common::hero(1, "Test Hero", None, ["ability_one", "ability_two", "ability_three", "ability_four"]);
    hero.player_selectable = Some(true);
    partial(&mut hero);
    hero
}

fn ability(id: i64, class_name: &str, name: &str) -> deadlog_db::write::snapshot::Item {
    item(id, class_name, name, "ability", &format!("/{class_name}.png"))
}

fn four() -> Vec<deadlog_db::write::snapshot::Item> {
    vec![ability(2, "ability_two", "Two"), ability(3, "ability_three", "Three"), ability(4, "ability_four", "Four")]
}

#[test]
fn slots_follow_signature_order_and_class_names() {
    let items = vec![
        ability(4, "ability_four", "Four"),
        ability(2, "ability_two", "Two"),
        ability(1, "ability_one", "One"),
        ability(3, "ability_three", "Three"),
    ];
    let slots = resolve_ability_slots(&[hero(|_| {})], &items, None).unwrap();
    assert_eq!(slots[&1].iter().map(|s| s.name.as_str()).collect::<Vec<_>>(), ["One", "Two", "Three", "Four"]);

    let mut items = vec![ability(10, "ownerless_hex", "Rabbit Hex"), ability(11, "ability_one", "Rabbit Hex")];
    items.extend(four());
    let slots = resolve_ability_slots(&[hero(|_| {})], &items, None).unwrap();
    assert_eq!((slots[&1][0].image.as_str(), slots[&1][0].slug.as_str()), ("/ability_one.png", "rabbit-hex"));
}

#[test]
fn shared_rows_and_route_collisions() {
    let mut items = vec![ability(1, "ability_one", "Shared One")];
    items.extend(four());
    let second = hero(|h| {
        h.id = 2;
        h.name = "Second Hero".into();
        h.in_development = Some(true);
    });
    let slots = resolve_ability_slots(&[hero(|_| {}), second], &items, None).unwrap();
    assert_eq!(slots[&2][0].image, "/ability_one.png");
    let released = hero(|h| {
        h.id = 2;
        h.name = "Second Hero".into();
    });
    let error = resolve_ability_slots(&[hero(|_| {}), released], &items, None).unwrap_err().to_string();
    assert!(error.contains("/ability/shared-one claimed by Test Hero and Second Hero"), "{error}");
    assert!(resolve_ability_slots(&[hero(|_| {})], &[], None).unwrap_err().to_string().contains("signature1"));
}

#[test]
fn slot_context_comes_from_the_resolved_asset() {
    let mut described = ability(11, "ability_one", "Rabbit Hex");
    described.description = Nullish::Value(Description {
        desc: Nullish::Value("Hex a <span>target</span>.".into()),
        t3_desc: Nullish::Value("Hex everyone".into()),
        ..Default::default()
    });
    described.properties = Some(vec![(
        "Radius".into(),
        Property {
            value: Nullish::Value("6m".into()),
            postfix: Nullish::Value("m".into()),
            label: Nullish::Value("Radius".into()),
            scales: Some(true),
            ..Default::default()
        },
    )]);
    let mut items = vec![ability(10, "ownerless_hex", "Rabbit Hex"), described];
    items.extend(four());
    let provenance = Provenance {
        client_version: 6698,
        language: "english".into(),
        collected_at: "2026-09-21T21:19:12.631Z".into(),
    };
    let slots = resolve_ability_slots(&[hero(|_| {})], &items, Some(&provenance)).unwrap();
    let context = serde_json::to_value(slots[&1][0].context.as_ref().unwrap()).unwrap();
    assert_eq!(
        context,
        serde_json::json!({
            "identity": { "assetId": 11, "className": "ability_one", "type": "ability", "heroId": 1, "slot": 1 },
            "clientVersion": 6698, "language": "english", "collectedAt": "2026-09-21T21:19:12.631Z",
            "sections": [
                { "kind": "description", "label": null, "paragraphs": ["Hex a target."] },
                { "kind": "tier3", "label": "Tier 3", "paragraphs": ["Hex everyone"] }
            ],
            "properties": [{ "key": "Radius", "label": "Radius", "display": "6", "unit": "m", "scales": true }]
        })
    );
    assert!(slots[&1][1].context.is_none());
    let legacy = resolve_ability_slots(&[hero(|_| {})], &items, None).unwrap();
    assert!(legacy[&1][0].context.as_ref().unwrap().client_version.is_none());
}

#[test]
fn description_text_and_paragraphs() {
    assert_eq!(
        description_text(Some("Stun.<br><span>Cooldown reduced</span>.")).as_deref(),
        Some("Stun. Cooldown reduced.")
    );
    assert_eq!(description_text(Some("<br>")), None);
    assert_eq!(markup_paragraphs(Some("a&nbsp;&#38;&#x26; b")), ["a && b"]);
    assert!(markup_paragraphs(Some("Deals {s:Damage} damage")).is_empty());
    assert!(markup_paragraphs(Some("First.<br>#Citadel_Ability_Desc")).is_empty());
    assert!(markup_paragraphs(Some("Fish &unknownthing; chips")).is_empty());
    assert_eq!(
        markup_paragraphs(Some("<span class=\"highlight\">+50 Damage and <span class=\"highlight\">+5m Range")),
        ["+50 Damage and +5m Range"]
    );
}

fn names(pairs: &[(&str, &str)]) -> Vec<AbilityName> {
    pairs.iter().map(|(name, slug)| AbilityName { name: name.to_string(), slug: slug.to_string() }).collect()
}

fn group(ability: Option<&str>, bullets: &[&str]) -> EntityBulletGroup {
    EntityBulletGroup { ability: ability.map(String::from), bullets: bullets.iter().map(|b| b.to_string()).collect() }
}

fn abilities() -> Vec<AbilityName> {
    names(&[
        ("Gloom Bombs", "gloom-bombs"),
        ("Leaping Slash", "leaping-slash"),
        ("Ava", "ava"),
        ("Return to Shadows", "return-to-shadows"),
        ("Call Bell", "call-bell"),
        ("Frozen Shelter", "frozen-shelter"),
        ("Arctic Beam", "arctic-beam"),
        ("Doorway", "doorway"),
        ("Storm Cloud", "storm-cloud"),
        ("Power Surge", "power-surge"),
        ("Jar of Dead", "jar-of-dead"),
    ])
}

#[test]
fn regroups_by_the_ability_each_bullet_names() {
    assert_eq!(
        regroup_ability_changes(
            &[group(
                Some("Gloom Bombs"),
                &[
                    "Gloom Bombs damage increased",
                    "Leaping Slash only heals when hitting heroes",
                    "Leaping Slash fixed its VFX"
                ]
            )],
            &abilities()
        ),
        [
            group(Some("Gloom Bombs"), &["Gloom Bombs damage increased"]),
            group(
                Some("Leaping Slash"),
                &["Leaping Slash only heals when hitting heroes", "Leaping Slash fixed its VFX"]
            )
        ]
    );
    assert_eq!(
        regroup_ability_changes(
            &[
                group(Some("Call Bell"), &["Doorways close faster"]),
                group(Some("Power Surge"), &["Storm Cloud's damage increased"])
            ],
            &abilities()
        ),
        [
            group(Some("Doorway"), &["Doorways close faster"]),
            group(Some("Storm Cloud"), &["Storm Cloud's damage increased"])
        ]
    );
    assert_eq!(
        regroup_ability_changes(
            &[group(
                Some("Leaping Slash"),
                &["Leaping Slash damage increased", "Health growth per boon reduced", "Gloom Bombs damage increased"]
            )],
            &abilities()
        ),
        [
            group(Some("Leaping Slash"), &["Leaping Slash damage increased"]),
            group(None, &["Health growth per boon reduced"]),
            group(Some("Gloom Bombs"), &["Gloom Bombs damage increased"])
        ]
    );
}

#[test]
fn base_changes_leave_the_ability() {
    for bullet in [
        "Fixed her weapon not working with Close Quarters",
        "Fixed Fire Rate bonuses applying incorrectly",
        "Reduced gun range from 18m to 16m",
        "Increase base move speed from 6.6 to 7.0m",
        "HP per boon reduced from 41 to 37",
        "Reverted recent melee damage reduction",
        "No longer has -10% base bullet resist",
        "Headshot Crit value reduced from 80% to 70%",
        "Rage buildup rate reduced by 6%",
        "Float time with umbrella increased from 2.5s to 4s",
        "Alt fire knockback increased by 10%",
        "Restored health per boon back to 46",
        "No longer has -30% Lifesteal Effectiveness",
    ] {
        assert_eq!(
            regroup_ability_changes(&[group(Some("Gloom Bombs"), &[bullet])], &abilities()),
            [group(None, &[bullet])],
            "{bullet}"
        );
    }
    assert_eq!(
        regroup_ability_changes(
            &[group(
                None,
                &[
                    "Fixed Return Fire working with Power Surge",
                    "No longer has base +15% Spirit Resistance",
                    "Now has base +20% Bullet Resistance",
                    "Base health regen reduced from 2 to 1"
                ]
            )],
            &abilities()
        ),
        [
            group(Some("Power Surge"), &["Fixed Return Fire working with Power Surge"]),
            group(
                None,
                &[
                    "No longer has base +15% Spirit Resistance",
                    "Now has base +20% Bullet Resistance",
                    "Base health regen reduced from 2 to 1"
                ]
            )
        ]
    );
}

#[test]
fn historical_terms_and_first_mentions() {
    let bullets = ["Updated dash ranges for Deadheads", "Fixed Fire Rate buffs for Deadheads"];
    assert_eq!(
        regroup_ability_changes(&[group(Some("Gloom Bombs"), &bullets)], &abilities()),
        [group(Some("Jar of Dead"), &bullets)]
    );
    for (name, slug, bullet) in [
        ("Ice Path", "ice-path", "While Ice Pathing you no longer slow down"),
        ("Enchanter's Satchel", "enchanters-satchel", "Enchanted Satchel cast time reduced"),
        ("Grapple Arm", "grapple-arm", "Fixed hooking through veils"),
        ("Flying Cloak", "flying-cloak", "Fixed camera movement after using Cloak"),
        ("Flight", "flight", "Shooting while flying now slows you"),
        ("Air Drop", "air-drop", "Fixed clicking noise when flying while disarmed"),
        ("Last Stand", "last-stand", "Gain bullet resistance during the ult channel"),
        ("Flying Slash", "flying-slash", "Grapple post cast duration reduced"),
        ("Assassinate", "assassinate", "Low HP indication now shows while unscoped"),
        ("Rejuvenating Aurora", "rejuvenating-aurora", "Fixed Magic Carpet + Dynamo heal interaction"),
        ("Sleep Dagger", "sleep-dagger", "Sleep state no longer disables the target"),
        ("Rabbit Hex", "rabbit-hex", "Rabbit can now use jump"),
        ("Spirit Lasso", "spirit-lasso", "Fixed being able to melee while casting Lasso"),
        ("Gutshot", "gutshot", "Gut Shot wall stun reduced"),
        ("Petrifying Bola", "petrifying-bola", "Fixed damage going through Petrify"),
    ] {
        let list = names(&[("Other Ability", "other-ability"), (name, slug)]);
        assert_eq!(
            regroup_ability_changes(&[group(Some("Other Ability"), &[bullet])], &list),
            [group(Some(name), &[bullet])],
            "{bullet}"
        );
    }
    let interaction = names(&[
        ("Other Ability", "other-ability"),
        ("Spirit Lasso", "spirit-lasso"),
        ("Bounce Pad", "bounce-pad"),
        ("Enchanter's Satchel", "enchanters-satchel"),
        ("Flying Cloak", "flying-cloak"),
        ("Lethal Venom", "lethal-venom"),
        ("Petrifying Bola", "petrifying-bola"),
        ("Barrage", "barrage"),
    ]);
    for (ability, bullet) in [
        ("Spirit Lasso", "Lasso bonus Bounce Pad duration reduced"),
        ("Bounce Pad", "Fixed height on damage from Bounce Pad while using lasso"),
        ("Enchanter's Satchel", "Enchanter's Satchel failed when teleporting with Flying Cloak"),
        ("Barrage", "Barrage now lets you use Flying Cloak during the ability"),
        ("Lethal Venom", "Lethal Venom now deals damage through petrify"),
    ] {
        assert_eq!(
            regroup_ability_changes(&[group(Some("Other Ability"), &[bullet])], &interaction),
            [group(Some(ability), &[bullet])],
            "{bullet}"
        );
    }
}

#[test]
fn inner_lowercase_words_and_derived_headings() {
    assert_eq!(
        regroup_ability_changes(
            &[
                group(Some("Ava"), &["Return to Shadows cooldown increased", "Fixed Leaping Slash doing bonus damage"]),
                group(Some("Can"), &["Can now dismiss Frozen Shelter while channeling other abilities (Arctic Beam)"]),
            ],
            &abilities()
        ),
        [
            group(Some("Return to Shadows"), &["Return to Shadows cooldown increased"]),
            group(Some("Leaping Slash"), &["Fixed Leaping Slash doing bonus damage"]),
            group(
                Some("Frozen Shelter"),
                &["Can now dismiss Frozen Shelter while channeling other abilities (Arctic Beam)"]
            ),
        ]
    );
    let groups = [group(Some("Call Bell Charge Time"), &["Call Bell Charge Time increased from 6s to 7s"])];
    assert_eq!(regroup_ability_changes(&groups, &abilities()), groups);
}
