//! Reading aids shared by the entity histories and the patch pages: share rows for the
//! stats band, the measurement windows they cite, "current details" disclosures, and
//! previous-change links.

use chrono::Datelike;
use deadlog_db::{Ability, PropertyEvent};
use deadlog_model::{
    AbilityOrder, BoughtBy, ContextSection, DayInterval, EntityContext, EntityImpact, PatchStats, SHORT_MONTHS,
    ability_fragment_id, ability_share, bought_by_share, entity_fragment_id, format_date, parse_date, to_slug,
};

use crate::Site;
use crate::context::hero_icon_image;
use crate::meta::change_path;

pub use deadlog_changelog::RELATED_ITEMS_LIMIT;
pub use deadlog_model::{RELATED_MIN_APPEARANCES, RELATED_MIN_BUYERS, WINDOW_CAP_DAYS};

#[derive(Debug, Clone)]
pub struct ShareRow {
    pub name: String,
    pub image: String,
    pub href: String,
    pub before: f64,
    pub after: Option<f64>,
    pub muted: bool,
}

pub fn format_share(share: f64) -> String {
    let percent = (share * 100.0).round();
    if percent == 0.0 { "<1%".into() } else { format!("{percent}%") }
}

fn bar_width(share: f64) -> String {
    format!("{}%", share.min(1.0) * 100.0)
}

impl ShareRow {
    pub fn text(&self) -> String {
        match self.after {
            None => format_share(self.before),
            Some(after) => format!("{} → {}", format_share(self.before), format_share(after)),
        }
    }

    pub fn label(&self) -> String {
        match self.after {
            None => format!("{} {}", self.name, format_share(self.before)),
            Some(after) => {
                format!("{}, {} before, {} after", self.name, format_share(self.before), format_share(after))
            }
        }
    }

    pub fn before_width(&self) -> String {
        bar_width(self.before)
    }

    pub fn after_width(&self) -> String {
        bar_width(self.after.unwrap_or_default())
    }
}

#[derive(Debug, Clone)]
pub struct ShareWindows {
    pub before: Option<DayInterval>,
    pub after: Option<DayInterval>,
    pub entry_year: i32,
    pub open: bool,
}

impl ShareWindows {
    pub fn new(stats: &PatchStats, pub_date: &str, open: bool) -> Self {
        Self {
            before: stats.before.clone(),
            after: stats.after.clone(),
            entry_year: parse_date(pub_date).map(|date| date.year()).unwrap_or_default(),
            open,
        }
    }

    pub fn span(&self, has_after: bool) -> String {
        let before = format_interval(self.before.as_ref(), self.entry_year);
        match &self.after {
            Some(after) if has_after => format!(
                "{before} → {}{}",
                format_interval(Some(after), self.entry_year),
                if self.open { " so far" } else { "" }
            ),
            _ => format!("{before}, before this patch"),
        }
    }
}

/// "2–15 Sep": the interval's `to` is exclusive, so the last sampled day is shown.
pub fn format_interval(interval: Option<&DayInterval>, entry_year: i32) -> String {
    let Some(interval) = interval else { return "—".into() };
    let (Some(first), Some(end)) = (parse_date(&interval.from), parse_date(&interval.to)) else {
        return "—".into();
    };
    let last = end - chrono::Duration::days(1);
    let month = |date: &chrono::DateTime<chrono::Utc>| SHORT_MONTHS[date.month0() as usize];
    let year = if last.year() == entry_year && first.year() == entry_year {
        String::new()
    } else {
        format!(" {}", last.year())
    };
    if first == last {
        format!("{} {}{year}", first.day(), month(&first))
    } else if first.month() == last.month() {
        format!("{}–{} {}{year}", first.day(), last.day(), month(&last))
    } else {
        format!("{} {} – {} {}{year}", first.day(), month(&first), last.day(), month(&last))
    }
}

/// Seconds of game time as `m:ss`.
pub fn format_clock(seconds: f64) -> String {
    let whole = seconds.round() as i64;
    format!("{}:{:02}", whole / 60, whole % 60)
}

pub fn maxed_first_rows<'a>(
    order: &AbilityOrder,
    abilities: impl IntoIterator<Item = &'a Ability> + Clone,
    changed: &[Option<&str>],
) -> Vec<ShareRow> {
    let mut rows: Vec<ShareRow> = order
        .abilities
        .iter()
        .filter_map(|entry| {
            let ability = abilities.clone().into_iter().find(|ability| ability.asset_id == Some(entry.id))?;
            let share = ability_share(order, entry);
            Some(ShareRow {
                name: ability.name.clone(),
                image: ability.image.clone(),
                href: format!("/ability/{}", ability.slug),
                before: share.before,
                after: share.after,
                muted: !changed.contains(&Some(ability.slug.as_str())),
            })
        })
        .collect();
    rows.sort_by(|a, b| b.before.partial_cmp(&a.before).unwrap_or(std::cmp::Ordering::Equal));
    rows
}

pub fn bought_by_rows(bought: &BoughtBy, site: &Site) -> Vec<ShareRow> {
    bought
        .heroes
        .iter()
        .filter_map(|recorded| {
            let hero = site.hero(recorded.id)?;
            let share = bought_by_share(recorded);
            Some(ShareRow {
                name: hero.name.clone(),
                image: hero_icon_image(hero),
                href: format!("/hero/{}", hero.slug),
                before: share.before,
                after: share.after,
                muted: false,
            })
        })
        .collect()
}

pub struct RelatedNote {
    pub name: String,
    pub image: String,
    pub groups: Vec<Vec<String>>,
}

pub enum BandBlock {
    Share {
        kind: &'static str,
        heading_id: String,
        title: &'static str,
        lead: String,
        rows: Vec<ShareRow>,
        paired: bool,
        round: bool,
        notes: Vec<RelatedNote>,
    },
    BuyTime {
        lead: String,
        time: BuyTime,
    },
}

impl BandBlock {
    pub fn share(
        kind: &'static str,
        entry: &str,
        subject: &str,
        rows: Vec<ShareRow>,
        windows: &ShareWindows,
        notes: Vec<RelatedNote>,
    ) -> Self {
        let (title, lead, round) = match kind {
            "maxed-first" => ("Maxed first", format!("Share of {subject} players who maxed each ability first"), false),
            "related" => ("Also changed in this patch", format!("Share of {subject} players who bought each"), false),
            _ => ("Bought most by", format!("Share of each hero's players who bought {subject}"), true),
        };
        let paired = rows.iter().any(|row| row.after.is_some());
        BandBlock::Share {
            kind,
            heading_id: format!("{kind}-{entry}-heading"),
            title,
            lead: format!("{lead}, {}.", windows.span(paired)),
            rows,
            paired,
            round,
            notes,
        }
    }
}

#[derive(Debug, Clone)]
pub struct BuyTime {
    pub before: String,
    pub after: String,
}

pub fn buy_time(impact: Option<&EntityImpact>) -> Option<BuyTime> {
    let impact = impact?;
    let before = impact.all.before.buy.flatten()?;
    let after = impact.all.after.buy.flatten()?;
    Some(BuyTime { before: format_clock(before), after: format_clock(after) })
}

/// A "Current details" / "About" disclosure, rendered by `partials/context.html`.
#[derive(Debug, Clone)]
pub struct ContextView {
    pub context: EntityContext,
    pub name: String,
    pub header: bool,
    pub history_href: Option<String>,
}

impl ContextView {
    pub fn lead(&self) -> impl Iterator<Item = &ContextSection> {
        self.context.sections.iter().filter(|section| section.label.is_none())
    }

    pub fn labelled(&self) -> Vec<&ContextSection> {
        self.context.sections.iter().filter(|section| section.label.is_some()).collect()
    }

    pub fn summary(&self) -> String {
        if self.header { format!("About {}", self.name) } else { "Current details".into() }
    }

    pub fn closing(&self) -> String {
        let lead = match self.context.client_version {
            None => format!("Current details for {}", self.name),
            Some(version) => format!("Describes {} as of client {version}", self.name),
        };
        format!("{lead}{}.", if self.header { "" } else { ", not as of this patch" })
    }
}

/// Only a group headed by the ability's own name gets its details.
pub fn group_context_matches(ability: Option<&str>, ability_slug: Option<&str>) -> bool {
    matches!((ability, ability_slug), (Some(name), Some(slug)) if to_slug(name) == slug)
}

#[derive(Debug, Clone)]
pub struct PreviousChange {
    pub text: String,
    pub label: String,
    pub href: String,
}

fn short_date(date: &str, entry_year: i32) -> String {
    let date = parse_date(date).unwrap_or_default();
    let day = format!("{} {}", date.day(), SHORT_MONTHS[date.month0() as usize]);
    if date.year() == entry_year { day } else { format!("{day} {}", date.year()) }
}

/// A property event joined to the patch it points back at.
pub struct PropertyLink<'a> {
    pub event: &'a PropertyEvent,
    pub previous_slug: String,
    pub previous_pub_date: String,
}

impl PropertyLink<'_> {
    pub fn previous_old(&self) -> &str {
        self.event.previous_old.as_deref().unwrap_or_default()
    }

    pub fn previous_new(&self) -> &str {
        self.event.previous_new.as_deref().unwrap_or_default()
    }
}

pub fn previous_change(
    link: &PropertyLink,
    patch_pub_date: &str,
    group_ability: Option<&str>,
    entity_name: &str,
    href: Option<String>,
) -> PreviousChange {
    let entry_year = parse_date(patch_pub_date).map(|date| date.year()).unwrap_or_default();
    let fragment = match group_ability {
        Some(ability) => ability_fragment_id(ability),
        None => entity_fragment_id(entity_name),
    };
    PreviousChange {
        text: format!(
            "prev. {} → {} · {}",
            link.previous_old(),
            link.previous_new(),
            short_date(&link.previous_pub_date, entry_year)
        ),
        label: format!(
            "Previous recorded {} change: {} to {}, {}.",
            link.event.property,
            link.previous_old(),
            link.previous_new(),
            format_date(&link.previous_pub_date)
        ),
        href: href.unwrap_or_else(|| format!("{}#{fragment}", change_path(&link.previous_slug))),
    }
}

/// Which of the method note's paragraphs a page needs.
#[derive(Debug, Clone, Default)]
pub struct MethodNote {
    pub collected_at: Option<String>,
    pub shipped: &'static str,
    pub context_versions: Vec<i64>,
    pub details: bool,
    pub previous: bool,
    pub related: bool,
    pub maxed_first: bool,
    pub bought_by: bool,
    pub buy_time: bool,
}

impl MethodNote {
    pub fn match_data(&self) -> bool {
        self.related || self.maxed_first || self.bought_by || self.buy_time
    }

    pub fn any(&self) -> bool {
        self.match_data() || self.details || self.previous
    }

    pub fn heading(&self) -> &'static str {
        if self.match_data() { "How these shares are measured" } else { "Reading context and sources" }
    }

    pub fn windows(&self) -> String {
        let collected = self
            .collected_at
            .as_ref()
            .map(|date| format!(" Last collected {}.", format_date(date)))
            .unwrap_or_default();
        format!(
            "Each side counts complete UTC days between the patch and its neighbours, excluding release day, up to {WINDOW_CAP_DAYS} days; \"so far\" marks an after-window still collecting matches. All ranks, normal-mode ranked and unranked matches.{collected}"
        )
    }

    /// Grouped with commas, as `toLocaleString('en-US')` printed it.
    pub fn appearances(&self) -> String {
        let digits = (RELATED_MIN_APPEARANCES as u64).to_string();
        let mut grouped = String::new();
        for (index, digit) in digits.chars().enumerate() {
            if index > 0 && (digits.len() - index).is_multiple_of(3) {
                grouped.push(',');
            }
            grouped.push(digit);
        }
        grouped
    }

    pub fn min_buyers(&self) -> u32 {
        RELATED_MIN_BUYERS as u32
    }

    pub fn details_text(&self) -> String {
        let versions = if self.context_versions.is_empty() {
            "the currently recorded game assets".to_string()
        } else {
            format!("game client {}", self.context_versions.iter().map(i64::to_string).collect::<Vec<_>>().join(", "))
        };
        format!(
            "Current details describe {versions}, not the game as it was when {} shipped. Base values exclude upgrades and scaling.",
            self.shipped
        )
    }

    pub fn source_label(&self) -> &'static str {
        if self.match_data() {
            "Match data"
        } else if self.details {
            "Current details"
        } else {
            "Entity data"
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn interval(from: &str, to: &str) -> DayInterval {
        DayInterval { from: from.into(), to: to.into() }
    }

    #[test]
    fn intervals() {
        assert_eq!(format_interval(Some(&interval("2026-09-02", "2026-09-16")), 2026), "2–15 Sep");
        assert_eq!(format_interval(Some(&interval("2026-09-17", "2026-09-18")), 2026), "17 Sep");
        assert_eq!(format_interval(Some(&interval("2025-12-28", "2026-01-11")), 2026), "28 Dec – 10 Jan 2026");
        assert_eq!(format_interval(Some(&interval("2025-12-18", "2026-01-01")), 2026), "18–31 Dec 2025");
        assert_eq!(format_interval(Some(&interval("2026-08-25", "2026-09-08")), 2026), "25 Aug – 7 Sep");
        assert_eq!(format_interval(None, 2026), "—");
    }

    #[test]
    fn clock() {
        assert_eq!(format_clock(1261.8), "21:02");
        assert_eq!(format_clock(59.6), "1:00");
        assert_eq!(format_clock(5.0), "0:05");
    }

    #[test]
    fn shares() {
        assert_eq!(format_share(0.004), "<1%");
        assert_eq!(format_share(0.75065), "75%");
        assert_eq!(format_share(1.0), "100%");
    }
}
