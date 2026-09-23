//! The handful of zod rules the attr blocks are held to, over the plain JSON projection.

use anyhow::{Result, bail};
use serde_json::{Map, Value};

pub fn object<'a>(label: &str, value: &'a Value) -> Result<&'a Map<String, Value>> {
    match value.as_object() {
        Some(map) => Ok(map),
        None => bail!("Malformed {label}: expected an object"),
    }
}

/// A strict object: every key is known, every required key is present.
pub fn strict<'a>(
    label: &str,
    value: &'a Value,
    required: &[&str],
    optional: &[&str],
) -> Result<&'a Map<String, Value>> {
    let map = object(label, value)?;
    if let Some(key) = map.keys().find(|key| !required.contains(&key.as_str()) && !optional.contains(&key.as_str())) {
        bail!("Malformed {label}: unrecognized key \"{key}\"");
    }
    if let Some(key) = required.iter().find(|key| !map.contains_key(**key)) {
        bail!("Malformed {label}: missing \"{key}\"");
    }
    Ok(map)
}

pub fn number(label: &str, key: &str, value: &Value) -> Result<f64> {
    match value.as_f64() {
        Some(number) => Ok(number),
        None => bail!("Malformed {label}: {key} must be a number"),
    }
}

/// `z.number().int().min(0)`.
pub fn count(label: &str, key: &str, value: &Value) -> Result<f64> {
    let number = number(label, key, value)?;
    if number.fract() != 0.0 || number < 0.0 {
        bail!("Malformed {label}: {key} must be a whole number of at least 0");
    }
    Ok(number)
}

/// `z.number().int().positive()`.
pub fn method(label: &str, key: &str, value: &Value) -> Result<u32> {
    let number = number(label, key, value)?;
    if number.fract() != 0.0 || number <= 0.0 || number > u32::MAX as f64 {
        bail!("Malformed {label}: {key} must be a positive whole number");
    }
    Ok(number as u32)
}

pub fn optional<'a>(map: &'a Map<String, Value>, key: &str) -> Option<&'a Value> {
    map.get(key)
}

pub fn optional_count(label: &str, map: &Map<String, Value>, key: &str) -> Result<Option<f64>> {
    optional(map, key).map(|value| count(label, key, value)).transpose()
}

pub fn string<'a>(label: &str, key: &str, value: &'a Value) -> Result<&'a str> {
    match value.as_str() {
        Some(text) => Ok(text),
        None => bail!("Malformed {label}: {key} must be a string"),
    }
}

pub fn one_of<'a>(label: &str, key: &str, value: &'a Value, options: &[&str]) -> Result<&'a str> {
    let text = string(label, key, value)?;
    if !options.contains(&text) {
        bail!("Malformed {label}: {key} must be one of {}", options.join(", "));
    }
    Ok(text)
}
