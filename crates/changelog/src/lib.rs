//! `.mg` changelogs → the structures the database build and the stats rewriter read:
//! metadata, entities, bullets grouped per ability, and the attr blocks that carry
//! patch impact and enrichment.

pub mod ast;
mod enrichment;
mod extract;
mod impact_block;
mod load;
mod property_changes;
mod rewrite;
mod schema;
mod source;
mod validate;

pub use enrichment::{
    BOUGHT_BY_LIMIT, EnrichmentUpdate, EntityEnrichment, RELATED_ITEMS_LIMIT, apply_update, parse_enrichment,
    parse_related, write_enrichment_block,
};
pub use extract::{
    ParsedBullet, ParsedStructure, ReadingBlock, TocEntry, change_key, extract_entities, extract_entity_changes,
    parse_structure, structure_of,
};
pub use impact_block::{parse_impact, parse_stats, write_impact_node, write_stats_node};
pub use load::{deduplicate_changelogs, extract_preview_image, load_all_changelogs, load_changelog};
pub use property_changes::{
    Barrier, BulletReading, LINKED_PROPERTIES, LinkedEvent, PROPERTY_EXTRACTION_VERSION, PreviousChange, PropertyEvent,
    PropertyValue, ScopedBullet, Unlinked, digest, link_property_changes, read_bullet,
};
pub use rewrite::{carry_enrichment, splice_entity_blocks, splice_impact_blocks};
pub use schema::{ChangelogEntities, ChangelogMetadata, EntityBlock, EntityBulletGroup, EntityChange, ParsedChangelog};
pub use source::{changelog_source_url, encode_uri_component};
