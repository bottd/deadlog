import { parseISO } from 'date-fns';
import { eq, sql, desc, gt, or } from 'drizzle-orm';
import type { ChangelogEntry } from './deadlock';
import type { HeroId, ItemId, EnrichedHero, EnrichedItem } from './types/assets';
import { getLibsqlDb, type DrizzleDB, schema } from '@deadlog/db';

export { getLibsqlDb as getDb };

/**
 * Helper to build text search condition for title and content fields
 */
function buildTextSearchCondition(searchQuery: string) {
	const pattern = `%${searchQuery}%`;
	const condition = or(
		sql`LOWER(${schema.changelogs.title}) LIKE LOWER(${pattern})`,
		sql`LOWER(${schema.changelogs.content}) LIKE LOWER(${pattern})`
	);
	if (!condition) {
		throw new Error('Failed to build text search condition');
	}
	return condition;
}

function rowToChangelogEntry(row: typeof schema.changelogs.$inferSelect): ChangelogEntry {
	return {
		id: row.id,
		title: row.title,
		link: row.guid ?? '',
		content_encoded: row.content,
		fullContent: row.content,
		contentJson: row.contentJson ?? undefined,
		author: row.author,
		authorImage: row.authorImage,
		category: row.category
			? { domain: '', text: row.category }
			: { domain: '', text: '' },
		guid: { text: row.guid ?? '', is_perma_link: false },
		pub_date: row.pubDate,
		date: parseISO(row.pubDate),
		dc_creator: row.author,
		slash_comments: '',
		majorUpdate: row.majorUpdate,
		parentChange: row.parentChange ?? undefined
	};
}

export async function getAllChangelogs(db: DrizzleDB): Promise<ChangelogEntry[]> {
	const results = await db.select().from(schema.changelogs).all();
	return results.map(rowToChangelogEntry);
}

/**
 * Unified method to query changelogs with optional filters
 * @param db Database instance
 * @param options Query options
 * @returns Paginated and filtered changelogs
 */
export async function queryChangelogs(
	db: DrizzleDB,
	options: {
		heroIds?: number[];
		itemIds?: number[];
		searchQuery?: string | null;
		limit?: number;
		offset?: number;
	} = {}
): Promise<ChangelogEntry[]> {
	const { heroIds = [], itemIds = [], searchQuery, limit = 5, offset = 0 } = options;

	const hasHeroFilter = heroIds.length > 0;
	const hasItemFilter = itemIds.length > 0;
	const hasSearchFilter = !!searchQuery?.trim();

	const conditions = [];
	if (hasSearchFilter && searchQuery) {
		conditions.push(buildTextSearchCondition(searchQuery));
	}

	if (!hasHeroFilter && !hasItemFilter) {
		const query = db
			.select()
			.from(schema.changelogs)
			.orderBy(desc(schema.changelogs.pubDate))
			.limit(limit)
			.offset(offset);

		const results = hasSearchFilter
			? await query.where(conditions[0]).all()
			: await query.all();

		return results.map(rowToChangelogEntry);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let query = (db as any)
		.selectDistinct({ changelogs: schema.changelogs })
		.from(schema.changelogs);

	if (hasHeroFilter && hasItemFilter) {
		query = query
			.innerJoin(
				schema.changelogHeroes,
				eq(schema.changelogs.id, schema.changelogHeroes.changelogId)
			)
			.innerJoin(
				schema.changelogItems,
				eq(schema.changelogs.id, schema.changelogItems.changelogId)
			);

		conditions.push(
			sql`${schema.changelogHeroes.heroId} IN (${sql.join(
				heroIds.map((id) => sql`${id}`),
				sql`, `
			)})`
		);
		conditions.push(
			sql`${schema.changelogItems.itemId} IN (${sql.join(
				itemIds.map((id) => sql`${id}`),
				sql`, `
			)})`
		);
	} else if (hasHeroFilter) {
		query = query.innerJoin(
			schema.changelogHeroes,
			eq(schema.changelogs.id, schema.changelogHeroes.changelogId)
		);

		conditions.push(
			sql`${schema.changelogHeroes.heroId} IN (${sql.join(
				heroIds.map((id) => sql`${id}`),
				sql`, `
			)})`
		);
	} else if (hasItemFilter) {
		query = query.innerJoin(
			schema.changelogItems,
			eq(schema.changelogs.id, schema.changelogItems.changelogId)
		);

		conditions.push(
			sql`${schema.changelogItems.itemId} IN (${sql.join(
				itemIds.map((id) => sql`${id}`),
				sql`, `
			)})`
		);
	}

	if (conditions.length > 0) {
		query = query.where(sql`${sql.join(conditions, sql` AND `)}`);
	}

	const results = await query
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.offset(offset)
		.all();

	return results.map((r: { changelogs: typeof schema.changelogs.$inferSelect }) =>
		rowToChangelogEntry(r.changelogs)
	);
}

/**
 * Get paginated changelogs sorted by publish date (newest first)
 * @deprecated Use queryChangelogs instead
 */
export async function getChangelogsPaginated(
	db: DrizzleDB,
	limit = 5,
	offset = 0
): Promise<ChangelogEntry[]> {
	return queryChangelogs(db, { limit, offset });
}

/**
 * Get total count of changelogs
 */
export async function getChangelogsCount(db: DrizzleDB): Promise<number> {
	const result = await db.select().from(schema.changelogs).all();
	return result.length;
}

/**
 * Get paginated changelogs filtered by text search query
 * Searches in title and content fields (case-insensitive)
 */
export async function getChangelogsByTextSearch(
	db: DrizzleDB,
	searchQuery: string,
	limit = 5,
	offset = 0
): Promise<ChangelogEntry[]> {
	if (!searchQuery?.trim()) {
		return getChangelogsPaginated(db, limit, offset);
	}

	const results = await db
		.select()
		.from(schema.changelogs)
		.where(buildTextSearchCondition(searchQuery))
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.offset(offset)
		.all();

	return results.map(rowToChangelogEntry);
}

/**
 * Find the position (index) of a specific changelog in the sorted list (by pubDate desc)
 * Returns the number of changelogs that come before this one
 */
export async function getChangelogPosition(
	db: DrizzleDB,
	changelogId: string
): Promise<number> {
	const target = await db
		.select()
		.from(schema.changelogs)
		.where(eq(schema.changelogs.id, changelogId))
		.get();

	if (!target) {
		return 0;
	}

	const results = await db
		.select()
		.from(schema.changelogs)
		.where(gt(schema.changelogs.pubDate, target.pubDate))
		.all();

	return results.length;
}

export async function getChangelogById(
	db: DrizzleDB,
	id: string
): Promise<ChangelogEntry | null> {
	const result = await db
		.select()
		.from(schema.changelogs)
		.where(eq(schema.changelogs.id, id))
		.get();

	return result ? rowToChangelogEntry(result) : null;
}

export async function getMetadata(db: DrizzleDB, key: string) {
	const result = await db
		.select()
		.from(schema.metadata)
		.where(eq(schema.metadata.key, key))
		.get();

	return result?.value ?? null;
}

function rowToHero(row: typeof schema.heroes.$inferSelect): EnrichedHero {
	return {
		id: row.id,
		name: row.name,
		className: row.className,
		heroType: row.heroType,
		images: row.images,
		isReleased: row.isReleased
	};
}

export async function getAllHeroes(db: DrizzleDB): Promise<EnrichedHero[]> {
	const results = await db.select().from(schema.heroes).all();
	return results.map(rowToHero);
}

function rowToItem(row: typeof schema.items.$inferSelect): EnrichedItem {
	return {
		id: row.id,
		name: row.name,
		className: row.className,
		type: row.type as 'weapon' | 'ability' | 'upgrade',
		images: row.images ?? null,
		isReleased: row.isReleased
	};
}

export async function getAllItems(db: DrizzleDB): Promise<EnrichedItem[]> {
	const results = await db.select().from(schema.items).all();
	return results.map(rowToItem);
}

export async function getHeroByName(
	db: DrizzleDB,
	name: string
): Promise<EnrichedHero | null> {
	const result = await db
		.select()
		.from(schema.heroes)
		.where(eq(schema.heroes.name, name))
		.get();

	return result ? rowToHero(result) : null;
}

export async function getItemByName(
	db: DrizzleDB,
	name: string
): Promise<EnrichedItem | null> {
	const result = await db
		.select()
		.from(schema.items)
		.where(eq(schema.items.name, name))
		.get();

	return result ? rowToItem(result) : null;
}

/**
 * Get icons for a specific changelog entry
 */
export async function getChangelogIcons(
	db: DrizzleDB,
	changelogId: string
): Promise<{
	heroes: { id: HeroId; src: string; alt: string; type: 'hero' | 'item' }[];
	items: { id: ItemId; src: string; alt: string; type: 'hero' | 'item' }[];
}> {
	const results = await db
		.select()
		.from(schema.changelogEntities)
		.where(eq(schema.changelogEntities.changelogId, changelogId))
		.all();

	const heroes = results
		.filter((r: typeof schema.changelogEntities.$inferSelect) => r.entityType === 'hero')
		.map((r: typeof schema.changelogEntities.$inferSelect) => ({
			id: r.entityId,
			src: r.imageSrc,
			alt: r.entityName,
			type: 'hero' as const
		}));

	const items = results
		.filter((r: typeof schema.changelogEntities.$inferSelect) => r.entityType === 'item')
		.map((r: typeof schema.changelogEntities.$inferSelect) => ({
			id: r.entityId,
			src: r.imageSrc,
			alt: r.entityName,
			type: 'item' as const
		}));

	return { heroes, items };
}

/**
 * Get changelogs filtered by hero IDs (SQL-based filtering)
 */
export async function getChangelogsByHeroIds(
	db: DrizzleDB,
	heroIds: number[]
): Promise<ChangelogEntry[]> {
	if (heroIds.length === 0) {
		return getAllChangelogs(db);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const results = await (db as any)
		.selectDistinct({ changelogs: schema.changelogs })
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogHeroes,
			eq(schema.changelogs.id, schema.changelogHeroes.changelogId)
		)
		.where(
			sql`${schema.changelogHeroes.heroId} IN (${sql.join(
				heroIds.map((id) => sql`${id}`),
				sql`, `
			)})`
		)
		.all();

	return results.map((r: { changelogs: typeof schema.changelogs.$inferSelect }) =>
		rowToChangelogEntry(r.changelogs)
	);
}

/**
 * Get paginated changelogs filtered by hero IDs
 */
export async function getChangelogsByHeroIdsPaginated(
	db: DrizzleDB,
	heroIds: number[],
	limit = 5,
	offset = 0,
	searchQuery?: string
): Promise<ChangelogEntry[]> {
	if (heroIds.length === 0) {
		return searchQuery
			? getChangelogsByTextSearch(db, searchQuery, limit, offset)
			: getChangelogsPaginated(db, limit, offset);
	}

	const conditions = [
		sql`${schema.changelogHeroes.heroId} IN (${sql.join(
			heroIds.map((id) => sql`${id}`),
			sql`, `
		)})`
	];

	if (searchQuery?.trim()) {
		conditions.push(buildTextSearchCondition(searchQuery));
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const results = await (db as any)
		.selectDistinct({ changelogs: schema.changelogs })
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogHeroes,
			eq(schema.changelogs.id, schema.changelogHeroes.changelogId)
		)
		.where(sql`${sql.join(conditions, sql` AND `)}`)
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.offset(offset)
		.all();

	return results.map((r: { changelogs: typeof schema.changelogs.$inferSelect }) =>
		rowToChangelogEntry(r.changelogs)
	);
}

/**
 * Get changelogs filtered by item IDs (SQL-based filtering)
 */
export async function getChangelogsByItemIds(
	db: DrizzleDB,
	itemIds: number[]
): Promise<ChangelogEntry[]> {
	if (itemIds.length === 0) {
		return getAllChangelogs(db);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const results = await (db as any)
		.selectDistinct({ changelogs: schema.changelogs })
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogItems,
			eq(schema.changelogs.id, schema.changelogItems.changelogId)
		)
		.where(
			sql`${schema.changelogItems.itemId} IN (${sql.join(
				itemIds.map((id) => sql`${id}`),
				sql`, `
			)})`
		)
		.all();

	return results.map((r: { changelogs: typeof schema.changelogs.$inferSelect }) =>
		rowToChangelogEntry(r.changelogs)
	);
}

/**
 * Get paginated changelogs filtered by item IDs
 */
export async function getChangelogsByItemIdsPaginated(
	db: DrizzleDB,
	itemIds: number[],
	limit = 5,
	offset = 0,
	searchQuery?: string
): Promise<ChangelogEntry[]> {
	if (itemIds.length === 0) {
		return searchQuery
			? getChangelogsByTextSearch(db, searchQuery, limit, offset)
			: getChangelogsPaginated(db, limit, offset);
	}

	const conditions = [
		sql`${schema.changelogItems.itemId} IN (${sql.join(
			itemIds.map((id) => sql`${id}`),
			sql`, `
		)})`
	];

	if (searchQuery?.trim()) {
		conditions.push(buildTextSearchCondition(searchQuery));
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const results = await (db as any)
		.selectDistinct({ changelogs: schema.changelogs })
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogItems,
			eq(schema.changelogs.id, schema.changelogItems.changelogId)
		)
		.where(sql`${sql.join(conditions, sql` AND `)}`)
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.offset(offset)
		.all();

	return results.map((r: { changelogs: typeof schema.changelogs.$inferSelect }) =>
		rowToChangelogEntry(r.changelogs)
	);
}

/**
 * Get paginated changelogs filtered by both hero and item IDs
 * Returns changelogs that mention BOTH the specified heroes AND items
 */
export async function getChangelogsByHeroAndItemIds(
	db: DrizzleDB,
	heroIds: number[],
	itemIds: number[],
	limit = 5,
	offset = 0,
	searchQuery?: string
): Promise<ChangelogEntry[]> {
	if (heroIds.length === 0 || itemIds.length === 0) {
		return getChangelogsPaginated(db, limit, offset);
	}

	const conditions = [
		sql`${schema.changelogHeroes.heroId} IN (${sql.join(
			heroIds.map((id) => sql`${id}`),
			sql`, `
		)})`,
		sql`${schema.changelogItems.itemId} IN (${sql.join(
			itemIds.map((id) => sql`${id}`),
			sql`, `
		)})`
	];

	if (searchQuery?.trim()) {
		conditions.push(buildTextSearchCondition(searchQuery));
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const results = await (db as any)
		.selectDistinct({ changelogs: schema.changelogs })
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogHeroes,
			eq(schema.changelogs.id, schema.changelogHeroes.changelogId)
		)
		.innerJoin(
			schema.changelogItems,
			eq(schema.changelogs.id, schema.changelogItems.changelogId)
		)
		.where(sql`${sql.join(conditions, sql` AND `)}`)
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.offset(offset)
		.all();

	return results.map((r: { changelogs: typeof schema.changelogs.$inferSelect }) =>
		rowToChangelogEntry(r.changelogs)
	);
}
