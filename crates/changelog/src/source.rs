use anyhow::{Result, bail};

use crate::schema::ChangelogMetadata;

const STEAM_EXTERNAL_POST: &str = "https://store.steampowered.com/news/externalpost/steam_community_announcements";
const DEADLOCK_FORUM_THREADS: &str = "https://forums.playdeadlock.com/threads";

/// `encodeURIComponent`.
pub fn encode_uri_component(text: &str) -> String {
    let mut out = String::with_capacity(text.len());
    for byte in text.bytes() {
        if byte.is_ascii_alphanumeric() || b"-_.!~*'()".contains(&byte) {
            out.push(byte as char);
        } else {
            out.push_str(&format!("%{byte:02X}"));
        }
    }
    out
}

pub fn changelog_source_url(metadata: &ChangelogMetadata) -> Result<String> {
    if let Some(gid) = metadata.steam_gid.as_deref().filter(|gid| !gid.is_empty()) {
        return Ok(format!("{STEAM_EXTERNAL_POST}/{}", encode_uri_component(gid)));
    }
    if let Some(thread) = metadata.thread_id.as_deref().filter(|thread| !thread.is_empty()) {
        return Ok(format!("{DEADLOCK_FORUM_THREADS}/{}/", encode_uri_component(thread)));
    }
    bail!("Changelog metadata has no forum or Steam source identifier")
}
