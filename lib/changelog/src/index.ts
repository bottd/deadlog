export {
	ChangelogMetadataSchema,
	type ChangelogMetadata,
	type ChangelogEntities,
	type EntityBulletGroup,
	type EntityBlock,
	type EntityChange,
	type ParsedChangelog
} from './schema';
export {
	extractEntities,
	extractEntityChanges,
	parseStructure,
	type ParsedStructure,
	type ParsedBullet,
	type TocEntry
} from './extract';
export { extractPreviewImage, loadAllChangelogs } from './load';
export { carryEnrichment, spliceEntityBlocks, spliceImpactBlocks } from './rewrite';
export {
	parseRelated,
	writeEnrichmentBlock,
	type EnrichmentUpdate,
	type EntityEnrichment
} from './entityEnrichment';
export { changelogSourceUrl } from './source';
export {
	LINKED_PROPERTIES,
	PROPERTY_EXTRACTION_VERSION,
	linkPropertyChanges,
	readBullet,
	type LinkedEvent,
	type LinkedProperty,
	type ScopedBullet
} from './propertyChanges';
export { parseImpact, parseStats, writeStatsNode } from './impactBlock';
