export { getDb, getD1Db, getLibsqlDb, type DrizzleDB } from './client';
export * as schema from './schema';

export type {
	InsertChangelog,
	SelectChangelog,
	InsertHero,
	SelectHero,
	InsertItem,
	SelectItem,
	InsertMetadata,
	SelectMetadata,
	InsertChangelogHero,
	SelectChangelogHero,
	InsertChangelogItem,
	SelectChangelogItem
} from './schema';

export {
	insertChangelogSchema,
	selectChangelogSchema,
	insertHeroSchema,
	selectHeroSchema,
	insertItemSchema,
	selectItemSchema,
	insertMetadataSchema,
	selectMetadataSchema,
	insertChangelogHeroSchema,
	selectChangelogHeroSchema,
	insertChangelogItemSchema,
	selectChangelogItemSchema
} from './schema';
