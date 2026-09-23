#![allow(dead_code)]

use deadlog_model::{EntityImpact, ImpactWindow, TierImpact};

pub fn window(win: Option<f64>, pick: Option<f64>, counts: [f64; 4], coverage: &str) -> ImpactWindow {
    let [matches, days, total, covered] = counts;
    ImpactWindow { win, pick, matches, days, total, covered, coverage: coverage.into(), buy: None }
}

pub fn standard() -> ImpactWindow {
    window(Some(0.5), Some(0.1), [2800.0, 14.0, 33600.0, 14.0], "complete")
}

pub fn impact() -> EntityImpact {
    EntityImpact {
        closed: true,
        all: TierImpact { before: standard(), after: ImpactWindow { win: Some(0.52), ..standard() } },
        high: TierImpact { before: standard(), after: window(None, None, [12.0, 2.0, 144.0, 2.0], "complete") },
    }
}

pub fn lines(lines: &[&str]) -> String {
    lines.join("\n")
}
