export { getDb, getD1Db, getLibsqlDb, type DrizzleDB } from './client';
export * as schema from './schema';

export type {
	ScalingPattern,
	Note,
	HeroChange,
	ItemChange,
	AbilityChange,
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
	InsertChangelogEntity,
	SelectChangelogEntity,
	InsertChangelogHero,
	SelectChangelogHero,
	InsertChangelogItem,
	SelectChangelogItem
} from './schema';

export {
	scalingPatternSchema,
	noteSchema,
	heroAbilityChangeSchema,
	heroChangeSchema,
	itemChangeSchema,
	abilityChangeSchema,
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
	insertChangelogEntitySchema,
	selectChangelogEntitySchema,
	insertChangelogHeroSchema,
	selectChangelogHeroSchema,
	insertChangelogItemSchema,
	selectChangelogItemSchema
} from './schema';
