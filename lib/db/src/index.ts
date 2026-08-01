export { getDb, getLibsqlDb, type DrizzleDB } from './client';
export * as schema from './schema';
export type { SelectChangelog } from './schema';

export {
	insertHeroSchema,
	insertHeroAbilitySchema,
	insertItemSchema,
	insertChangelogHeroSchema,
	insertChangelogItemSchema
} from './schema';
