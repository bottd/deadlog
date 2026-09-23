//! JavaScript's number and JSON spellings. The database's JSON columns and the `.mg`
//! attr blocks were written by `JSON.stringify` and template literals, and a port has to
//! write the same bytes: `14` not `14.0`, `1e+21` not `1000000000000000000000`.

use chrono::{DateTime, FixedOffset, Local, NaiveDate, NaiveDateTime, TimeZone, Utc};
use serde::Serialize;
use serde_json::Value;

/// JavaScript's `\s` as a regex class. Rust's `\s` differs at U+0085 and U+FEFF, and
/// the game's localisation files and forum posts can carry either.
pub const JS_SPACE: &str =
    r"[\t\n\x0B\x0C\r \x{a0}\x{1680}\x{2000}-\x{200a}\x{2028}\x{2029}\x{202f}\x{205f}\x{3000}\x{feff}]";

pub fn is_js_whitespace(c: char) -> bool {
    matches!(
        c,
        '\t' | '\n' | '\u{b}' | '\u{c}' | '\r' | ' ' | '\u{a0}' | '\u{1680}' | '\u{2000}'..='\u{200a}'
            | '\u{2028}' | '\u{2029}' | '\u{202f}' | '\u{205f}' | '\u{3000}' | '\u{feff}'
    )
}

/// `String.prototype.trim()`.
pub fn js_trim(text: &str) -> &str {
    text.trim_matches(is_js_whitespace)
}

/// `Number.prototype.toString()`.
pub fn js_number(value: f64) -> String {
    if value.is_nan() {
        return "NaN".into();
    }
    if value.is_infinite() {
        return if value > 0.0 { "Infinity" } else { "-Infinity" }.into();
    }
    if value == 0.0 {
        return "0".into();
    }
    let sign = if value < 0.0 { "-" } else { "" };
    let scientific = format!("{:e}", value.abs());
    let (mantissa, exponent) = scientific.split_once('e').unwrap_or((&scientific, "0"));
    let digits: String = mantissa.chars().filter(|c| *c != '.').collect();
    let k = digits.len() as i32;
    let n = exponent.parse::<i32>().unwrap_or(0) + 1;
    let body = if k <= n && n <= 21 {
        format!("{digits}{}", "0".repeat((n - k) as usize))
    } else if 0 < n && n <= 21 {
        format!("{}.{}", &digits[..n as usize], &digits[n as usize..])
    } else if -6 < n && n <= 0 {
        format!("0.{}{digits}", "0".repeat((-n) as usize))
    } else {
        let fraction = if k > 1 { format!(".{}", &digits[1..]) } else { String::new() };
        let exponent = n - 1;
        format!("{}{fraction}e{}{}", &digits[..1], if exponent >= 0 { "+" } else { "-" }, exponent.abs())
    };
    format!("{sign}{body}")
}

fn number(number: &serde_json::Number) -> String {
    if number.is_i64() || number.is_u64() {
        return number.to_string();
    }
    number.as_f64().filter(|value| value.is_finite()).map(js_number).unwrap_or_else(|| "null".into())
}

fn string(text: &str) -> String {
    serde_json::to_string(text).unwrap_or_default()
}

fn write(value: &Value, indent: Option<&str>, depth: usize, out: &mut String) {
    let newline = |out: &mut String, depth: usize| {
        if let Some(indent) = indent {
            out.push('\n');
            out.push_str(&indent.repeat(depth));
        }
    };
    match value {
        Value::Null => out.push_str("null"),
        Value::Bool(flag) => out.push_str(if *flag { "true" } else { "false" }),
        Value::Number(value) => out.push_str(&number(value)),
        Value::String(text) => out.push_str(&string(text)),
        Value::Array(items) if items.is_empty() => out.push_str("[]"),
        Value::Array(items) => {
            out.push('[');
            for (index, item) in items.iter().enumerate() {
                if index > 0 {
                    out.push(',');
                }
                newline(out, depth + 1);
                write(item, indent, depth + 1, out);
            }
            newline(out, depth);
            out.push(']');
        }
        Value::Object(map) if map.is_empty() => out.push_str("{}"),
        Value::Object(map) => {
            out.push('{');
            for (index, (key, item)) in map.iter().enumerate() {
                if index > 0 {
                    out.push(',');
                }
                newline(out, depth + 1);
                out.push_str(&string(key));
                out.push(':');
                if indent.is_some() {
                    out.push(' ');
                }
                write(item, indent, depth + 1, out);
            }
            newline(out, depth);
            out.push('}');
        }
    }
}

/// `JSON.stringify(value)`.
pub fn js_json(value: &Value) -> String {
    let mut out = String::new();
    write(value, None, 0, &mut out);
    out
}

/// `JSON.stringify(value, null, indent)`.
pub fn js_json_pretty(value: &Value, indent: &str) -> String {
    let mut out = String::new();
    write(value, Some(indent), 0, &mut out);
    out
}

/// [`js_json`] over anything serde can describe.
pub fn to_js_json<T: Serialize + ?Sized>(value: &T) -> serde_json::Result<String> {
    Ok(js_json(&serde_json::to_value(value)?))
}

/// `new Date(text)` for the ISO shapes the changelogs use, including V8's lenient
/// `+HHMM` offset. A date-only string is UTC midnight; a date-time without an offset is
/// local time, as in JavaScript.
pub fn parse_js_date(text: &str) -> Option<DateTime<Utc>> {
    if let Ok(day) = NaiveDate::parse_from_str(text, "%Y-%m-%d") {
        return Some(Utc.from_utc_datetime(&day.and_hms_opt(0, 0, 0)?));
    }
    if let Some(naive) = text.strip_suffix('Z').and_then(|rest| parse_naive(rest)) {
        return Some(Utc.from_utc_datetime(&naive));
    }
    let split = text.rfind(['+', '-']).filter(|index| *index > 10);
    if let Some(index) = split {
        let (rest, offset) = text.split_at(index);
        if let (Some(naive), Some(offset)) = (parse_naive(rest), parse_offset(offset)) {
            return offset.from_local_datetime(&naive).single().map(|date| date.with_timezone(&Utc));
        }
    }
    parse_naive(text).and_then(|naive| Local.from_local_datetime(&naive).earliest()).map(|date| date.with_timezone(&Utc))
}

fn parse_naive(text: &str) -> Option<NaiveDateTime> {
    ["%Y-%m-%dT%H:%M:%S%.f", "%Y-%m-%dT%H:%M"].into_iter().find_map(|format| NaiveDateTime::parse_from_str(text, format).ok())
}

fn parse_offset(text: &str) -> Option<FixedOffset> {
    let sign = if text.starts_with('-') { -1 } else { 1 };
    let digits: String = text[1..].chars().filter(|c| *c != ':').collect();
    if digits.len() != 4 || !digits.bytes().all(|b| b.is_ascii_digit()) {
        return None;
    }
    let hours: i32 = digits[..2].parse().ok()?;
    let minutes: i32 = digits[2..].parse().ok()?;
    FixedOffset::east_opt(sign * (hours * 3600 + minutes * 60))
}

/// `new Date(text).toISOString()`.
pub fn js_iso_string(text: &str) -> Option<String> {
    parse_js_date(text).map(|date| date.format("%Y-%m-%dT%H:%M:%S%.3fZ").to_string())
}

#[cfg(test)]
mod tests {
    #[test]
    fn dates_parse_like_v8() {
        assert_eq!(js_iso_string("2024-05-03T12:00:00-0700").as_deref(), Some("2024-05-03T19:00:00.000Z"));
        assert_eq!(js_iso_string("2026-09-16T20:16:43.000Z").as_deref(), Some("2026-09-16T20:16:43.000Z"));
        assert_eq!(js_iso_string("2026-09-16T20:16:43+02:00").as_deref(), Some("2026-09-16T18:16:43.000Z"));
        assert_eq!(js_iso_string("2026-09-16").as_deref(), Some("2026-09-16T00:00:00.000Z"));
        assert_eq!(js_iso_string("yesterday"), None);
    }

    use super::*;

    #[test]
    fn numbers_spell_like_javascript() {
        for (value, expected) in [
            (14.0, "14"),
            (0.5056, "0.5056"),
            (-0.0, "0"),
            (1e21, "1e+21"),
            (1.5e21, "1.5e+21"),
            (123456789012345680000.0, "123456789012345680000"),
            (0.000001, "0.000001"),
            (0.0000001, "1e-7"),
            (1.25e-9, "1.25e-9"),
            (-2.5, "-2.5"),
            (0.1 + 0.2, "0.30000000000000004"),
        ] {
            assert_eq!(js_number(value), expected, "{value}");
        }
    }

    #[test]
    fn json_matches_stringify() {
        let value: Value = serde_json::from_str(r#"{"b":[1,2.0,{"c":null}],"a":"x\u0001\"","e":{},"f":[]}"#).unwrap();
        assert_eq!(js_json(&value), r#"{"b":[1,2,{"c":null}],"a":"x\u0001\"","e":{},"f":[]}"#);
        assert_eq!(
            js_json_pretty(&value, "\t"),
            "{\n\t\"b\": [\n\t\t1,\n\t\t2,\n\t\t{\n\t\t\t\"c\": null\n\t\t}\n\t],\n\t\"a\": \"x\\u0001\\\"\",\n\t\"e\": {},\n\t\"f\": []\n}"
        );
    }
}
