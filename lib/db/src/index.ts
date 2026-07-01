export { getDb, getD1Db, getLibsqlDb, type DrizzleDB } from './client';
export * as schema from './schema';
export type { SelectChangelog } from './schema';

export {
	insertHeroSchema,
	insertItemSchema,
	insertChangelogHeroSchema,
	insertChangelogItemSchema
} from './schema';
