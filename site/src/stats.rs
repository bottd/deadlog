use crate::db::{Ability, AbilityOrder, ChangeGroup, DayInterval, PatchStats, RelatedItems};

const MONTHS: [&str; 12] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const LONG_MONTHS: [&str; 12] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

#[derive(Debug, Clone, Copy, PartialEq)]
struct Day {
    year: i32,
    month: usize,
    day: u32,
}

fn parse_day(iso: &str) -> Option<Day> {
    let mut parts = iso.get(..10)?.split('-');
    let year = parts.next()?.parse().ok()?;
    let month: usize = parts.next()?.parse().ok()?;
    let day = parts.next()?.parse().ok()?;
    (1..=12).contains(&month).then_some(Day { year, month: month - 1, day })
}

fn days_in_month(year: i32, month: usize) -> u32 {
    match month {
        1 if year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) => 29,
        1 => 28,
        3 | 5 | 8 | 10 => 30,
        _ => 31,
    }
}

fn previous_day(day: Day) -> Day {
    if day.day > 1 {
        return Day { day: day.day - 1, ..day };
    }
    let (year, month) = if day.month == 0 { (day.year - 1, 11) } else { (day.year, day.month - 1) };
    Day { year, month, day: days_in_month(year, month) }
}

pub fn format_interval(interval: &DayInterval, entry_year: i32) -> String {
    let (Some(first), Some(end)) = (parse_day(&interval.from), parse_day(&interval.to)) else {
        return "—".into();
    };
    let last = previous_day(end);
    let year = if first.year == entry_year && last.year == entry_year {
        String::new()
    } else {
        format!(" {}", last.year)
    };
    if first == last {
        format!("{} {}{year}", first.day, MONTHS[first.month])
    } else if first.month == last.month {
        format!("{}–{} {}{year}", first.day, last.day, MONTHS[last.month])
    } else {
        format!(
            "{} {} – {} {}{year}",
            first.day, MONTHS[first.month], last.day, MONTHS[last.month]
        )
    }
}

pub fn format_date(iso: &str) -> String {
    let Some(day) = parse_day(iso) else { return iso.into() };
    let suffix = match (day.day % 10, day.day % 100) {
        (1, n) if n != 11 => "st",
        (2, n) if n != 12 => "nd",
        (3, n) if n != 13 => "rd",
        _ => "th",
    };
    format!("{} {}{suffix}, {}", LONG_MONTHS[day.month], day.day, day.year)
}

pub fn entry_year(iso: &str) -> i32 {
    parse_day(iso).map_or(0, |day| day.year)
}

pub fn fragment_id(name: &str) -> String {
    let mut slug = String::new();
    for ch in name.to_lowercase().chars() {
        if ch.is_ascii_alphanumeric() {
            slug.push(ch);
        } else if !slug.ends_with('-') && !slug.is_empty() {
            slug.push('-');
        }
    }
    slug.trim_end_matches('-').into()
}

pub fn format_share(share: f64) -> String {
    let percent = (share * 100.0).round();
    if percent == 0.0 { "<1%".into() } else { format!("{percent}%") }
}

#[derive(Debug, Clone)]
pub struct ShareRow {
    pub name: String,
    pub image: String,
    pub href: String,
    pub before: f64,
    pub after: Option<f64>,
    pub muted: bool,
}

impl ShareRow {
    pub fn text(&self) -> String {
        match self.after {
            Some(after) => format!("{} → {}", format_share(self.before), format_share(after)),
            None => format_share(self.before),
        }
    }

    pub fn label(&self) -> String {
        match self.after {
            Some(after) => format!(
                "{}, {} before, {} after",
                self.name,
                format_share(self.before),
                format_share(after)
            ),
            None => format!("{} {}", self.name, format_share(self.before)),
        }
    }

    pub fn before_width(&self) -> String {
        format!("{:.1}%", self.before.min(1.0) * 100.0)
    }

    pub fn after_width(&self) -> String {
        format!("{:.1}%", self.after.unwrap_or(0.0).min(1.0) * 100.0)
    }
}

fn ratio(count: Option<u64>, total: Option<u64>) -> Option<f64> {
    match (count, total) {
        (Some(count), Some(total)) if total > 0 => Some(count as f64 / total as f64),
        _ => None,
    }
}

pub struct Windows {
    pub stats: PatchStats,
    pub entry_year: i32,
    pub open: bool,
}

impl Windows {
    pub fn span(&self, rows: &[ShareRow]) -> String {
        let before = self
            .stats
            .before
            .as_ref()
            .map_or("—".into(), |interval| format_interval(interval, self.entry_year));
        match &self.stats.after {
            Some(after) if rows.iter().any(|row| row.after.is_some()) => format!(
                "{before} → {}{}",
                format_interval(after, self.entry_year),
                if self.open { " so far" } else { "" }
            ),
            _ => format!("{before}, before this patch"),
        }
    }
}

pub fn maxed_first_rows(
    order: &AbilityOrder,
    abilities: &[Ability],
    groups: &[ChangeGroup],
) -> Vec<ShareRow> {
    let mut rows: Vec<ShareRow> = order
        .abilities
        .iter()
        .filter_map(|entry| {
            let ability = abilities.iter().find(|ability| ability.asset_id == Some(entry.id))?;
            Some(ShareRow {
                name: ability.name.clone(),
                image: ability.image.clone(),
                href: format!("/ability/{}", ability.slug),
                before: entry.before as f64 / order.matches as f64,
                after: ratio(entry.after, order.after_matches),
                muted: !groups
                    .iter()
                    .any(|group| group.ability_slug.as_deref() == Some(ability.slug.as_str())),
            })
        })
        .collect();
    rows.sort_by(|a, b| b.before.total_cmp(&a.before));
    rows
}

pub struct RelatedRow {
    pub row: ShareRow,
    pub bullets: Vec<String>,
}

pub fn related_row(
    related: &RelatedItems,
    item: &crate::db::RelatedItem,
    name: String,
    image: String,
    patch_slug: &str,
    bullets: Vec<String>,
) -> RelatedRow {
    RelatedRow {
        row: ShareRow {
            href: format!("/change/{patch_slug}#{}", fragment_id(&name)),
            name,
            image,
            before: item.buyers as f64 / related.appearances as f64,
            after: ratio(item.after, related.after_appearances),
            muted: false,
        },
        bullets,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn interval(from: &str, to: &str) -> DayInterval {
        DayInterval { from: from.into(), to: to.into() }
    }

    #[test]
    fn intervals_match_the_svelte_formatter() {
        assert_eq!(format_interval(&interval("2026-09-02", "2026-09-16"), 2026), "2–15 Sep");
        assert_eq!(format_interval(&interval("2026-09-17", "2026-09-18"), 2026), "17 Sep");
        assert_eq!(
            format_interval(&interval("2025-12-28", "2026-01-11"), 2026),
            "28 Dec – 10 Jan 2026"
        );
        assert_eq!(
            format_interval(&interval("2025-12-18", "2026-01-01"), 2026),
            "18–31 Dec 2025"
        );
    }

    #[test]
    fn shares_round_and_never_show_zero() {
        assert_eq!(format_share(0.314), "31%");
        assert_eq!(format_share(0.0045), "<1%");
    }

    #[test]
    fn dates_read_like_the_current_site() {
        assert_eq!(format_date("2026-09-16T20:16:43.000Z"), "September 16th, 2026");
        assert_eq!(format_date("2026-09-22T00:00:00Z"), "September 22nd, 2026");
        assert_eq!(format_date("2026-09-11T00:00:00Z"), "September 11th, 2026");
    }
}
