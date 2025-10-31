export { getDb, getD1Db, getLibsqlDb, type DrizzleDB } from './client';
export * as schema from './schema';

// Export types
export type {
	ScalingPattern,
	NoteWithPatterns,
	HeroChanges,
	ItemChanges,
	AbilityChanges,
	HeroAbilityChange,
	ChangelogContentJson,
	InsertChangelog,
	SelectChangelog,
	InsertHero,
	SelectHero,
	InsertItem,
	SelectItem,
	InsertMetadata,
	SelectMetadata,
	InsertChangelogIcon,
	SelectChangelogIcon,
	InsertChangelogHero,
	SelectChangelogHero,
	InsertChangelogItem,
	SelectChangelogItem
} from './schema';

// Export Zod schemas
export {
	scalingPatternSchema,
	noteWithPatternsSchema,
	heroAbilityChangeSchema,
	heroChangesSchema,
	itemChangesSchema,
	abilityChangesSchema,
	changelogContentJsonSchema,
	insertChangelogSchema,
	selectChangelogSchema,
	insertHeroSchema,
	selectHeroSchema,
	itemImagesSchema,
	insertItemSchema,
	selectItemSchema,
	insertMetadataSchema,
	selectMetadataSchema,
	insertChangelogIconSchema,
	selectChangelogIconSchema,
	insertChangelogHeroSchema,
	selectChangelogHeroSchema,
	insertChangelogItemSchema,
	selectChangelogItemSchema
} from './schema';
