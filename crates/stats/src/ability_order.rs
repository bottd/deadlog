use std::collections::{HashMap, HashSet};

use deadlog_model::{AbilityOrder, AbilityOrderEntry};

use crate::constants::{ABILITY_UNLOCK_AND_UPGRADES, ORDER_METHOD_VERSION, RELATED_MIN_APPEARANCES};
use crate::types::AbilityOrderRow;

struct FirstMaxed {
    matches: f64,
    counts: HashMap<i64, f64>,
}

/// Per ability, the matches in which it was the first to reach its third upgrade (the
/// fourth occurrence: the first is the unlock).
fn first_maxed(rows: &[AbilityOrderRow], ability_ids: &[i64]) -> FirstMaxed {
    let known: HashSet<i64> = ability_ids.iter().copied().collect();
    let mut counts: HashMap<i64, f64> = ability_ids.iter().map(|id| (*id, 0.0)).collect();
    let mut matches = 0.0;
    for row in rows {
        matches += row.matches;
        let mut seen: HashMap<i64, usize> = HashMap::new();
        for id in &row.abilities {
            let count = seen.entry(*id).or_default();
            *count += 1;
            if *count == ABILITY_UNLOCK_AND_UPGRADES {
                if known.contains(id) {
                    *counts.entry(*id).or_default() += row.matches;
                }
                break;
            }
        }
    }
    FirstMaxed { matches, counts }
}

/// `None` under the sample floor; the after side is left out under it.
pub fn select_ability_order(
    ability_ids: &[i64],
    before: &[AbilityOrderRow],
    after: Option<&[AbilityOrderRow]>,
) -> Option<AbilityOrder> {
    let before = first_maxed(before, ability_ids);
    if before.matches < RELATED_MIN_APPEARANCES {
        return None;
    }
    let after =
        after.map(|rows| first_maxed(rows, ability_ids)).filter(|after| after.matches >= RELATED_MIN_APPEARANCES);
    Some(AbilityOrder {
        method_version: ORDER_METHOD_VERSION,
        matches: before.matches,
        after_matches: after.as_ref().map(|after| after.matches),
        abilities: ability_ids
            .iter()
            .map(|id| AbilityOrderEntry {
                id: *id,
                before: before.counts.get(id).copied().unwrap_or(0.0),
                after: after.as_ref().map(|after| after.counts.get(id).copied().unwrap_or(0.0)),
            })
            .collect(),
    })
}
