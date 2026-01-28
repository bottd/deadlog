// Export database query functions (but not getDb - that should come from @deadlog/db)
export {
	queryChangelogs,
	getAllChangelogs,
	getAllChangelogIds,
	getChangelogsCount,
	getChangelogPosition,
	getChangelogById,
	getUpdatesForChangelogs,
	getMetadata,
	getAllHeroes,
	getAllItems,
	getHeroByName,
	getHeroBySlug,
	getAllHeroSlugs,
	getItemByName,
	getItemBySlug,
	getAllItemSlugs,
	getChangelogsByHeroId,
	getChangelogsByItemId,
	getChangelogIcons
} from './static';

// Note: extractIcons and parseHtmlToJson are only used server-side during database building
// They are not exported to prevent happy-dom from being bundled in client builds

export { formatDate, formatTime } from '@deadlog/utils';

export type { ScrapedChangelog } from './deadlock';
export type {
	HeroId,
	ItemId,
	EnrichedHero,
	EnrichedItem,
	EntityType,
	EntityIcon
} from './types/assets';
export { ENTITY_TYPES } from './types/assets';
