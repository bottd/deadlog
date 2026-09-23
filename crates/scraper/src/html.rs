//! Just enough DOM for the forum: selector queries, `textContent`, and an `innerHTML`
//! serializer (html5ever's own drops attribute filtering, which `clean_html` needs).

use ego_tree::NodeRef;
use scraper::{ElementRef, Html, Node, Selector};

pub fn selector(css: &str) -> Selector {
    Selector::parse(css).unwrap_or_else(|error| panic!("invalid selector {css}: {error:?}"))
}

pub fn first<'a>(scope: ElementRef<'a>, css: &str) -> Option<ElementRef<'a>> {
    scope.select(&selector(css)).next()
}

pub fn document_first<'a>(document: &'a Html, css: &str) -> Option<ElementRef<'a>> {
    document.select(&selector(css)).next()
}

/// `textContent`.
pub fn text_content(element: ElementRef) -> String {
    element.text().collect()
}

pub fn attr<'a>(element: ElementRef<'a>, name: &str) -> Option<&'a str> {
    element.value().attr(name)
}

const VOID: [&str; 17] = [
    "area", "base", "basefont", "bgsound", "br", "col", "embed", "frame", "hr", "img", "input", "keygen", "link",
    "meta", "param", "source", "track",
];
const RAW_TEXT: [&str; 7] = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext"];

fn escape(text: &str, attribute: bool) -> String {
    let mut out = String::with_capacity(text.len());
    for c in text.chars() {
        match c {
            '&' => out.push_str("&amp;"),
            '\u{a0}' => out.push_str("&nbsp;"),
            '"' if attribute => out.push_str("&quot;"),
            '<' if !attribute => out.push_str("&lt;"),
            '>' if !attribute => out.push_str("&gt;"),
            _ => out.push(c),
        }
    }
    out
}

/// `innerHTML`, keeping only the attributes `keep` allows for each tag.
pub fn inner_html(node: NodeRef<Node>, keep: &dyn Fn(&str, &str) -> bool) -> String {
    let mut out = String::new();
    for child in node.children() {
        serialize(child, keep, &mut out);
    }
    out
}

fn serialize(node: NodeRef<Node>, keep: &dyn Fn(&str, &str) -> bool, out: &mut String) {
    match node.value() {
        Node::Element(element) => {
            let name = element.name();
            out.push('<');
            out.push_str(name);
            for (attribute, value) in element.attrs() {
                if keep(name, attribute) {
                    out.push_str(&format!(" {attribute}=\"{}\"", escape(value, true)));
                }
            }
            out.push('>');
            if VOID.contains(&name) || name == "wbr" {
                return;
            }
            for child in node.children() {
                serialize(child, keep, out);
            }
            out.push_str(&format!("</{name}>"));
        }
        Node::Text(text) => {
            let raw = node
                .parent()
                .and_then(|parent| parent.value().as_element().map(|element| RAW_TEXT.contains(&element.name())))
                .unwrap_or(false);
            if raw { out.push_str(text) } else { out.push_str(&escape(text, false)) }
        }
        Node::Comment(comment) => out.push_str(&format!("<!--{}-->", &**comment)),
        _ => {}
    }
}
