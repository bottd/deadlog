// Export database query functions (but not getDb - that should come from @deadlog/db)
export {
	queryChangelogs,
	getAllChangelogs,
	getChangelogsPaginated,
	getChangelogsCount,
	getChangelogsByTextSearch,
	getChangelogPosition,
	getChangelogById,
	getMetadata,
	getAllHeroes,
	getAllItems,
	getHeroByName,
	getItemByName,
	getChangelogIcons,
	getChangelogsByHeroIds,
	getChangelogsByHeroIdsPaginated,
	getChangelogsByItemIds,
	getChangelogsByItemIdsPaginated,
	getChangelogsByHeroAndItemIds
} from './static';

// Note: extractIcons and parseHtmlToJson are only used server-side during database building
// They are not exported to prevent jsdom from being bundled in client builds

export { formatDate, formatDateWithSuffix, formatTime } from './dateFormatters';

export type { ChangelogEntry } from './deadlock';
export type {
	HeroId,
	ItemId,
	EnrichedHero,
	EnrichedItem,
	EntityType
} from './types/assets';
export { ENTITY_TYPES } from './types/assets';
