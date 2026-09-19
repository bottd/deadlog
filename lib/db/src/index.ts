export { getDb, getLibsqlDb, type DrizzleDB } from './client';
export * as schema from './schema';
export type { SelectChangelog } from './schema';
export * from './queries';
export type {
	EntityType,
	EntityIcon,
	ChangelogEntityIcon,
	EntityChangeGroup,
	HeroChangeGroup,
	ChangelogMatch,
	PatchSummary
} from './types';

export {
	insertHeroSchema,
	insertHeroAbilitySchema,
	insertItemSchema,
	insertChangelogHeroSchema,
	insertChangelogItemSchema
} from './schema';
