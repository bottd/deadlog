use deadlog_model::{AbilityOrder, AbilityOrderEntry};
use deadlog_stats::ability_order::select_ability_order;
use deadlog_stats::types::AbilityOrderRow;

fn row(abilities: &[i64], matches: f64) -> AbilityOrderRow {
    AbilityOrderRow { abilities: abilities.to_vec(), matches }
}

fn entry(id: i64, before: f64) -> AbilityOrderEntry {
    AbilityOrderEntry { id, before, after: None }
}

#[test]
fn each_match_goes_to_the_first_ability_to_reach_its_third_upgrade() {
    let order = select_ability_order(
        &[1, 2, 3],
        &[row(&[1, 2, 1, 1, 2, 1, 2, 2], 700.0), row(&[2, 1, 2, 2, 2, 1, 1, 1], 300.0), row(&[3, 1, 2], 50.0)],
        None,
    );
    assert_eq!(
        order,
        Some(AbilityOrder {
            method_version: 1,
            matches: 1050.0,
            after_matches: None,
            abilities: vec![entry(1, 700.0), entry(2, 300.0), entry(3, 0.0)],
        })
    );
}

#[test]
fn nothing_is_recorded_under_the_floor_and_no_after_side_under_it() {
    let small = [row(&[1, 1, 1, 1], 999.0)];
    let large = [row(&[1, 1, 1, 1], 1000.0)];
    assert_eq!(select_ability_order(&[1], &small, None), None);
    assert_eq!(
        select_ability_order(&[1], &large, Some(&small)),
        Some(AbilityOrder {
            method_version: 1,
            matches: 1000.0,
            after_matches: None,
            abilities: vec![entry(1, 1000.0)]
        })
    );
}

#[test]
fn an_ability_that_is_not_the_heros_is_ignored() {
    let order = select_ability_order(&[1], &[row(&[9, 9, 9, 9, 1, 1, 1, 1], 1000.0), row(&[1, 1, 1, 1], 500.0)], None);
    assert_eq!(order.unwrap().abilities, vec![entry(1, 500.0)]);
}

#[test]
fn the_after_side_is_recorded_when_it_clears_the_floor() {
    let rows = [row(&[1, 1, 1, 1], 1000.0), row(&[2, 2, 2, 2], 200.0)];
    let order = select_ability_order(&[1, 2], &rows, Some(&rows)).unwrap();
    assert_eq!(order.after_matches, Some(1200.0));
    assert_eq!(order.abilities[1], AbilityOrderEntry { id: 2, before: 200.0, after: Some(200.0) });
}
