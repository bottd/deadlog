//! Encoders and decoders for the bits of Mog grammar the pipeline writes itself.

use crate::is_js_space;

/// Mog's media transclusion, `[[!:<url>]]((alt))`.
pub const MOG_IMAGE_PREFIX: &str = "[[!:";

const DELIMITERS: [&str; 11] = ["**", "__", "~~", "$$", "[[", "]]", "((", "))", "{{", "}}", "||"];

pub fn mog_link(target: &str, label: &str) -> String {
    format!("[[{target}]](({label}))")
}

pub fn mog_image(url: &str, alt: &str) -> String {
    if alt.is_empty() { format!("{MOG_IMAGE_PREFIX}{url}]]") } else { format!("{MOG_IMAGE_PREFIX}{url}]](({alt}))") }
}

/// `\[\[([^\[\]]*)\]\]\(\(([^()]*)\)\)` anchored at the start of `text`: the target,
/// the label, and the byte length of the whole link.
fn link_at(text: &str) -> Option<(&str, &str, usize)> {
    let rest = text.strip_prefix("[[")?;
    let target_end = rest.find(['[', ']']).unwrap_or(rest.len());
    let after_target = rest[target_end..].strip_prefix("]]((")?;
    let label_end = after_target.find(['(', ')']).unwrap_or(after_target.len());
    after_target[label_end..].strip_prefix("))")?;
    let length = 2 + target_end + 4 + label_end + 2;
    Some((&rest[..target_end], &after_target[..label_end], length))
}

fn delimiter_at(text: &str) -> Option<&'static str> {
    DELIMITERS.into_iter().find(|delimiter| text.starts_with(delimiter))
}

/// Splits a note that is nothing but a link — an attachment or a source, not prose.
/// An image shares the grammar but is a different kind of note, so it is not a link.
pub fn parse_mog_link(text: &str) -> Option<(&str, &str)> {
    let trimmed = text.trim_matches(is_js_space);
    let (target, label, length) = link_at(trimmed)?;
    (length == trimmed.len() && !target.starts_with("!:")).then_some((target, label))
}

/// Escapes Mog's paired delimiters so prose reads as punctuation rather than markup,
/// while leaving real `[[target]]((label))` links intact. Every occurrence has to be
/// escaped, not just the opening one — an escaped `~~` still leaves its partner free
/// to pair with whatever comes next and swallow the rest of the block.
pub fn escape_mog_delimiters(text: &str) -> String {
    let mut out = String::with_capacity(text.len());
    let mut index = 0;
    while index < text.len() {
        let rest = &text[index..];
        if let Some((_, _, length)) = link_at(rest) {
            out.push_str(&rest[..length]);
            index += length;
            continue;
        }
        if let Some(delimiter) = delimiter_at(rest)
            && !text[..index].ends_with('\\')
        {
            out.push('\\');
            out.push_str(delimiter);
            index += delimiter.len();
            continue;
        }
        let c = rest.chars().next().unwrap_or_default();
        out.push(c);
        index += c.len_utf8();
    }
    out
}

/// Inverse of [`escape_mog_delimiters`] — lives beside it so the pair cannot drift.
pub fn unescape_mog_delimiters(text: &str) -> String {
    let mut out = String::with_capacity(text.len());
    let mut index = 0;
    while index < text.len() {
        let rest = &text[index..];
        if let Some(delimiter) = rest.strip_prefix('\\').and_then(delimiter_at) {
            out.push_str(delimiter);
            index += 1 + delimiter.len();
            continue;
        }
        let c = rest.chars().next().unwrap_or_default();
        out.push(c);
        index += c.len_utf8();
    }
    out
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn escapes_prose_delimiters() {
        assert_eq!(escape_mog_delimiters("Approx ~~5s~~ and a || pipe."), "Approx \\~~5s\\~~ and a \\|| pipe.");
        assert_eq!(escape_mog_delimiters("[[a]] and ((b)) and {{c}}"), "\\[[a\\]] and \\((b\\)) and \\{{c\\}}");
        assert_eq!(
            escape_mog_delimiters("see [[https://a.example/b]]((the FAQ)) now"),
            "see [[https://a.example/b]]((the FAQ)) now"
        );
        assert_eq!(
            escape_mog_delimiters("**a** [[https://x.example]]((y)) __b__"),
            "\\**a\\** [[https://x.example]]((y)) \\__b\\__"
        );
        assert_eq!(escape_mog_delimiters("already \\** escaped"), "already \\** escaped");
        let prose = "Approx ~~5s~~ and **stars** and a || pipe.";
        assert_eq!(unescape_mog_delimiters(&escape_mog_delimiters(prose)), prose);
    }

    #[test]
    fn links() {
        assert_eq!(parse_mog_link(" [[https://a]]((b)) "), Some(("https://a", "b")));
        assert_eq!(parse_mog_link("[[!:https://a]]((b))"), None);
        assert_eq!(parse_mog_link("[[https://a]]((b)) tail"), None);
        assert_eq!(mog_image("u", ""), "[[!:u]]");
        assert_eq!(mog_image("u", "a"), "[[!:u]]((a))");
    }
}
