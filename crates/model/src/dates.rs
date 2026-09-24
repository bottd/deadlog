//! Date display, in Pacific time like the patch notes themselves.

use chrono::{DateTime, Datelike, NaiveDate, TimeZone, Utc};
use chrono_tz::America::Los_Angeles;

const MONTHS: [&str; 12] = [
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

pub const SHORT_MONTHS: [&str; 12] =
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/// Stored dates are ISO strings; a bare `YYYY-MM-DD` reads as UTC midnight, like `new Date()`.
pub fn parse_date(date: &str) -> Option<DateTime<Utc>> {
    DateTime::parse_from_rfc3339(date).map(|date| date.with_timezone(&Utc)).ok().or_else(|| {
        NaiveDate::parse_from_str(date, "%Y-%m-%d")
            .ok()
            .and_then(|day| day.and_hms_opt(0, 0, 0))
            .map(|midnight| Utc.from_utc_datetime(&midnight))
    })
}

fn pacific(date: &str) -> chrono::DateTime<chrono_tz::Tz> {
    parse_date(date).unwrap_or_default().with_timezone(&Los_Angeles)
}

fn ordinal_suffix(day: u32) -> &'static str {
    if (11..=13).contains(&day) {
        return "th";
    }
    match day % 10 {
        1 => "st",
        2 => "nd",
        3 => "rd",
        _ => "th",
    }
}

/// "September 16th, 2026".
pub fn format_date(date: &str) -> String {
    let local = pacific(date);
    let day = local.day();
    format!("{} {day}{}, {}", MONTHS[local.month0() as usize], ordinal_suffix(day), local.year())
}

/// "Sep 16, 2026".
pub fn format_date_short(date: &str) -> String {
    let local = pacific(date);
    format!("{} {}, {}", SHORT_MONTHS[local.month0() as usize], local.day(), local.year())
}

pub fn format_year(date: &str) -> String {
    pacific(date).year().to_string()
}

pub fn utc_year(date: &str) -> i32 {
    parse_date(date).unwrap_or_default().year()
}

/// `Date.prototype.toISOString()`.
pub fn iso_string(date: &str) -> String {
    parse_date(date).unwrap_or_default().format("%Y-%m-%dT%H:%M:%S%.3fZ").to_string()
}

pub struct PatchHeading {
    pub named: bool,
    pub date: String,
    pub heading: String,
}

/// Titles like "Minor Update - 09-16-2026" carry only a date, so the date is the heading.
pub fn patch_heading(title: &str, date: &str) -> PatchHeading {
    let bytes = title.as_bytes();
    let dated = bytes.windows(10).any(|window| {
        window.iter().enumerate().all(|(index, byte)| match index {
            2 | 5 => *byte == b'-',
            _ => byte.is_ascii_digit(),
        })
    });
    let date = format_date(date);
    PatchHeading { named: !dated, heading: if dated { date.clone() } else { title.to_string() }, date }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn pacific_dates() {
        assert_eq!(format_date("2026-09-16T20:16:43.000Z"), "September 16th, 2026");
        assert_eq!(format_date("2026-01-01T03:00:00.000Z"), "December 31st, 2025");
        assert_eq!(format_date_short("2026-09-02T20:16:43.000Z"), "Sep 2, 2026");
        assert_eq!(format_year("2026-01-01T03:00:00.000Z"), "2025");
        assert_eq!(iso_string("2026-09-16T20:16:43.000Z"), "2026-09-16T20:16:43.000Z");
    }

    #[test]
    fn headings() {
        assert!(!patch_heading("Minor Update - 09-16-2026", "2026-09-16T20:16:43.000Z").named);
        assert!(patch_heading("Matchmaking Update", "2026-07-30T19:14:37.000Z").named);
    }
}
