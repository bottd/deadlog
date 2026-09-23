//! JavaScript's number and JSON spellings. The database's JSON columns and the `.mg`
//! attr blocks were written by `JSON.stringify` and template literals, and a port has to
//! write the same bytes: `14` not `14.0`, `1e+21` not `1000000000000000000000`.

use serde::Serialize;
use serde_json::Value;

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

#[cfg(test)]
mod tests {
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
