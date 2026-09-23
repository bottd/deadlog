//! Page parity between two builds of the site. Byte equality is impossible across
//! frameworks, so each page is reduced to what it says and where it links: head
//! metadata, structured data, headings, ids, dates, list text, internal links and
//! the visible text of the main region. Two builds agree when every projection does.
//!
//! Usage: parity <reference-dist> <candidate-dist> [--only <prefix>] [--verbose] [--show N]

use std::collections::{BTreeMap, BTreeSet};
use std::fs;
use std::path::{Path, PathBuf};

use anyhow::{Context, Result, bail};
use scraper::{ElementRef, Html, Node, Selector};
use serde_json::Value;

#[derive(Debug, PartialEq)]
struct Projection {
    fields: BTreeMap<&'static str, Value>,
}

fn select<'a>(document: &'a Html, selector: &str) -> Vec<ElementRef<'a>> {
    let selector = Selector::parse(selector).expect("valid selector");
    document.select(&selector).collect()
}

fn squash(text: &str) -> String {
    text.split_whitespace().collect::<Vec<_>>().join(" ")
}

/// Visible text: script, style, template and `hidden`/`aria-hidden` subtrees are skipped,
/// as are `<noscript>` blocks, since what they say depends on scripting.
fn visible_text(element: ElementRef) -> String {
    fn walk(node: ego_tree::NodeRef<Node>, out: &mut String) {
        match node.value() {
            Node::Text(text) => out.push_str(text),
            Node::Element(element) => {
                let name = element.name();
                if matches!(name, "script" | "style" | "template" | "noscript" | "svg")
                    || is_planned_addition(element)
                    || element.attr("hidden").is_some()
                    || element.attr("aria-hidden") == Some("true")
                {
                    return;
                }
                if matches!(name, "br" | "p" | "li" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "dt" | "dd" | "tr") {
                    out.push(' ');
                }
                for child in node.children() {
                    walk(child, out);
                }
                if matches!(name, "p" | "li" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "dt" | "dd" | "td" | "th") {
                    out.push(' ');
                }
            }
            _ => {
                for child in node.children() {
                    walk(child, out);
                }
            }
        }
    }
    let mut out = String::new();
    walk(*element, &mut out);
    squash(&out)
}

fn attr_list(elements: &[ElementRef], attr: &str) -> Value {
    Value::Array(elements.iter().filter_map(|element| element.value().attr(attr)).map(|value| Value::from(value)).collect())
}

fn normalize_href(href: &str) -> Option<String> {
    if href.starts_with("http") || href.starts_with("mailto:") || href.starts_with('#') {
        return None;
    }
    let href = href.strip_prefix("./").unwrap_or(href);
    Some(href.to_string())
}

fn project(html: &str) -> Projection {
    let document = Html::parse_document(html);
    let mut fields = BTreeMap::new();

    let title = select(&document, "head title").first().map(|title| squash(&title.text().collect::<String>()));
    fields.insert("title", Value::from(title));

    let mut head = BTreeMap::new();
    for meta in select(&document, "head meta[name], head meta[property]") {
        let key = meta.value().attr("name").or(meta.value().attr("property")).unwrap_or_default();
        if matches!(key, "viewport" | "theme-color") {
            continue;
        }
        let content = meta.value().attr("content").unwrap_or_default();
        head.entry(key.to_string()).or_insert_with(Vec::new).push(Value::from(content));
    }
    for link in select(&document, "head link[rel=canonical]") {
        head.insert("canonical".into(), vec![Value::from(link.value().attr("href").unwrap_or_default())]);
    }
    fields.insert("head", serde_json::to_value(head).unwrap());

    let json_ld: Vec<Value> = select(&document, r#"script[type="application/ld+json"]"#)
        .iter()
        .map(|script| serde_json::from_str(&script.inner_html()).unwrap_or(Value::Null))
        .collect();
    fields.insert("json_ld", Value::Array(json_ld));

    let main_selector = if select(&document, "#main-content").is_empty() { "body" } else { "#main-content" };
    let main = select(&document, main_selector);
    let Some(main) = main.first() else {
        return Projection { fields };
    };
    let within = |selector: &str| -> Vec<ElementRef> {
        let selector = Selector::parse(selector).expect("valid selector");
        main.select(&selector).collect()
    };

    let headings: Vec<Value> = within("h1, h2, h3, h4, h5, h6")
        .iter()
        .map(|heading| Value::from(format!("{} {}", heading.value().name(), visible_text(*heading))))
        .collect();
    fields.insert("headings", Value::Array(headings));

    let ids: Vec<Value> = within("[id]")
        .iter()
        .filter_map(|element| element.value().attr("id"))
        .filter(|id| !id.starts_with("bits-") && !id.contains("svelte") && !is_generated_id(id))
        .map(Value::from)
        .collect();
    fields.insert("ids", Value::Array(ids));

    fields.insert("dates", attr_list(&within("time[datetime]"), "datetime"));

    let items: Vec<Value> = within("li").iter().map(|item| Value::from(visible_text(*item))).collect();
    fields.insert("list_items", Value::Array(items));

    let rail_links: Vec<ElementRef> =
        within(r#"section[aria-label="Abilities"] a[href], nav[aria-label="Feed pages"] a[href]"#);
    let links: Vec<Value> = within("a[href]")
        .iter()
        .filter(|link| !rail_links.contains(link))
        .filter_map(|link| link.value().attr("href").and_then(normalize_href))
        .map(Value::from)
        .collect();
    fields.insert("links", Value::Array(links));

    fields.insert("text", Value::from(visible_text(*main)));
    Projection { fields }
}

/// Additions the migration plan asked for, which the reference build cannot have: the
/// feed's "Older patches" pagination replaces an invisible scroll sentinel.
fn is_planned_addition(element: &scraper::node::Element) -> bool {
    element.name() == "nav" && element.attr("aria-label") == Some("Feed pages")
}

/// Ids that only exist to tie an element to its label: Svelte numbered them per render
/// (`s4-heading`), the Rust build names them after their block. Neither is a link target.
fn is_generated_id(id: &str) -> bool {
    let numbered = id.strip_prefix('s').and_then(|rest| rest.strip_suffix("-heading")).is_some_and(|n| n.chars().all(|c| c.is_ascii_digit()));
    let block = ["maxed-first-", "related-", "bought-by-"].iter().any(|prefix| id.starts_with(prefix)) && id.ends_with("-heading");
    numbered || block
}

fn html_files(root: &Path) -> Result<BTreeSet<String>> {
    fn walk(root: &Path, dir: &Path, out: &mut BTreeSet<String>) -> Result<()> {
        for entry in fs::read_dir(dir).with_context(|| format!("reading {}", dir.display()))? {
            let path = entry?.path();
            if path.is_dir() {
                walk(root, &path, out)?;
            } else if path.extension().is_some_and(|extension| extension == "html") {
                out.insert(path.strip_prefix(root)?.to_string_lossy().replace('\\', "/"));
            }
        }
        Ok(())
    }
    let mut out = BTreeSet::new();
    walk(root, root, &mut out)?;
    Ok(out)
}

fn describe(value: &Value) -> String {
    let text = value.to_string();
    if text.len() > 400 { format!("{}…", &text[..text.floor_char_boundary(400)]) } else { text }
}

fn first_difference(reference: &Value, candidate: &Value) -> String {
    match (reference, candidate) {
        (Value::Array(left), Value::Array(right)) => {
            for (index, (a, b)) in left.iter().zip(right).enumerate() {
                if a != b {
                    return format!("[{index}]\n      ref: {}\n      new: {}", describe(a), describe(b));
                }
            }
            format!(
                "lengths {} vs {}; extra: {}",
                left.len(),
                right.len(),
                describe(&Value::Array(if left.len() > right.len() {
                    left[right.len()..].to_vec()
                } else {
                    right[left.len()..].to_vec()
                }))
            )
        }
        (Value::String(left), Value::String(right)) => {
            let prefix = left.chars().zip(right.chars()).take_while(|(a, b)| a == b).count();
            let start = prefix.saturating_sub(80);
            let window = |text: &str| text.chars().skip(start).take(240).collect::<String>();
            format!("at char {prefix}\n      ref: …{}\n      new: …{}", window(left), window(right))
        }
        (Value::Object(left), Value::Object(right)) => {
            for key in left.keys().chain(right.keys()).collect::<BTreeSet<_>>() {
                if left.get(key) != right.get(key) {
                    return format!(
                        "key {key}\n      ref: {}\n      new: {}",
                        describe(left.get(key).unwrap_or(&Value::Null)),
                        describe(right.get(key).unwrap_or(&Value::Null))
                    );
                }
            }
            String::new()
        }
        _ => format!("\n      ref: {}\n      new: {}", describe(reference), describe(candidate)),
    }
}

fn main() -> Result<()> {
    let args: Vec<String> = std::env::args().skip(1).collect();
    let positional: Vec<&String> = args.iter().filter(|arg| !arg.starts_with("--")).collect();
    let flag_value = |name: &str| args.iter().position(|arg| arg == name).and_then(|index| args.get(index + 1));
    let only = flag_value("--only").cloned();
    let show: usize = flag_value("--show").and_then(|value| value.parse().ok()).unwrap_or(20);
    let verbose = args.iter().any(|arg| arg == "--verbose");
    let positional: Vec<&String> =
        positional.into_iter().filter(|arg| Some(*arg) != only.as_ref() && arg.parse::<usize>().is_err()).collect();
    let [reference, candidate] = positional.as_slice() else {
        bail!("usage: parity <reference-dist> <candidate-dist> [--only <prefix>] [--verbose] [--show N]");
    };
    let (reference, candidate) = (PathBuf::from(reference), PathBuf::from(candidate));

    let keep = |path: &String| only.as_ref().is_none_or(|prefix| path.starts_with(prefix.as_str()));
    let left: BTreeSet<String> = html_files(&reference)?.into_iter().filter(keep).collect();
    let right: BTreeSet<String> = html_files(&candidate)?.into_iter().filter(keep).collect();

    let missing: Vec<&String> = left.difference(&right).collect();
    let extra: Vec<&String> = right.difference(&left).collect();
    let mut failures: BTreeMap<&'static str, Vec<(String, String)>> = BTreeMap::new();
    let mut passed = 0;
    for path in left.intersection(&right) {
        let a = project(&fs::read_to_string(reference.join(path))?);
        let b = project(&fs::read_to_string(candidate.join(path))?);
        let mut ok = true;
        for (field, value) in &a.fields {
            let other = b.fields.get(field).unwrap_or(&Value::Null);
            if value != other {
                ok = false;
                failures.entry(field).or_default().push((path.clone(), first_difference(value, other)));
            }
        }
        if ok {
            passed += 1;
        }
    }

    println!("{} pages compared, {passed} in parity", left.intersection(&right).count());
    println!("{} missing from candidate, {} only in candidate", missing.len(), extra.len());
    for path in missing.iter().take(show) {
        println!("  missing: {path}");
    }
    for path in extra.iter().take(show) {
        println!("  extra:   {path}");
    }
    for (field, pages) in &failures {
        println!("\n{field}: {} pages differ", pages.len());
        for (path, difference) in pages.iter().take(if verbose { usize::MAX } else { show }) {
            println!("  {path} {difference}");
        }
    }
    if !missing.is_empty() || !failures.is_empty() {
        std::process::exit(1);
    }
    Ok(())
}
