//! The tree `vite-plugin-mog`'s `parseMogAst` hands the TypeScript build, read from the
//! same JSON so both builds see one document.

use anyhow::{Result, anyhow};
use serde::Deserialize;
use serde_json::{Map, Value};

#[derive(Debug, Clone, Copy, PartialEq, Eq, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Span {
    pub start: usize,
    pub end: usize,
    pub start_line: usize,
    pub end_line: usize,
}

#[derive(Debug, Deserialize)]
pub struct Attribute {
    pub name: Option<String>,
    pub value: Value,
}

#[derive(Debug, Default, Deserialize)]
pub struct Attributes {
    #[serde(default)]
    pub entries: Vec<Attribute>,
    #[serde(default)]
    pub children: Vec<Attribute>,
    #[serde(default)]
    pub blocks: Vec<Span>,
    pub plain: Option<Map<String, Value>>,
}

#[derive(Debug, Deserialize)]
pub struct Node {
    pub kind: String,
    pub marker: Option<String>,
    pub depth: Option<usize>,
    pub delimiter: Option<String>,
    pub text: Option<String>,
    pub target: Option<String>,
    pub attributes: Option<Attributes>,
    #[serde(default)]
    pub children: Vec<Node>,
    pub span: Option<Span>,
    pub fence: Option<Span>,
}

#[derive(Debug, Deserialize)]
pub struct Document {
    pub attributes: Option<Attributes>,
    #[serde(default)]
    pub body: Vec<Node>,
}

/// `parseMogAst(content, { plain: true })`.
pub fn parse(content: &str) -> Result<Document> {
    let json = mog::parse_ast_json(content, false, true).map_err(|error| anyhow!(error))?;
    Ok(serde_json::from_str(&json)?)
}

impl Node {
    pub fn is_marker(&self, marker: &str) -> bool {
        self.kind == "marker" && self.marker.as_deref() == Some(marker)
    }

    pub fn is_delimiter(&self, delimiter: &str) -> bool {
        self.kind == "delimiter" && self.delimiter.as_deref() == Some(delimiter)
    }

    pub fn attribute_children(&self) -> &[Attribute] {
        self.attributes.as_ref().map_or(&[], |attributes| &attributes.children)
    }

    pub fn attribute_blocks(&self) -> &[Span] {
        self.attributes.as_ref().map_or(&[], |attributes| &attributes.blocks)
    }
}

/// The unnamed string entries of a node's attribute chain, e.g. `["hero", "abrams"]`.
pub fn chain(node: &Node) -> Vec<&str> {
    node.attributes
        .iter()
        .flat_map(|attributes| &attributes.entries)
        .filter(|entry| entry.name.is_none() && entry.value["kind"] == "string")
        .filter_map(|entry| entry.value["value"].as_str())
        .collect()
}

pub fn is_image(node: &Node) -> bool {
    node.kind == "link" && chain(node).first() == Some(&"!")
}

fn is_inline(node: &Node) -> bool {
    matches!(node.kind.as_str(), "text" | "raw" | "link" | "delimiter") && !node.is_delimiter("verbatim")
}

pub fn plain_text(nodes: &[Node]) -> String {
    nodes
        .iter()
        .filter(|node| is_inline(node))
        .map(|node| match node.kind.as_str() {
            "text" | "raw" => node.text.clone().unwrap_or_default(),
            "link" if is_image(node) => String::new(),
            "link" => match node.children.iter().find(|child| child.is_delimiter("link-name")) {
                Some(name) => plain_text(&name.children),
                None => node.target.clone().unwrap_or_default(),
            },
            _ => plain_text(&node.children),
        })
        .collect()
}
