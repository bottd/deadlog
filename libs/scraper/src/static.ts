import { eq, sql, desc, gt } from 'drizzle-orm';
import type { ScrapedChangelog } from './deadlock';
import type { EnrichedHero, EnrichedItem, EntityIcon } from './types/assets';
import { getLibsqlDb, type DrizzleDB, schema } from '@deadlog/db';

export { getLibsqlDb as getDb };

function buildTextSearchCondition(searchQuery: string) {
	const pattern = `%${searchQuery}%`;
	return sql`LOWER(${schema.changelogs.title}) LIKE LOWER(${pattern})`;
}

export async function getAllChangelogs(db: DrizzleDB) {
	const results = await db.select().from(schema.changelogs).all();
	return results;
}

export async function getAllChangelogIds(db: DrizzleDB): Promise<string[]> {
	const results = await db.select().from(schema.changelogs).all();
	return results.map((r) => r.id);
}

export async function queryChangelogs(
	db: DrizzleDB,
	options: {
		heroIds?: number[];
		itemIds?: number[];
		searchQuery?: string | null;
		limit?: number;
		offset?: number;
	} = {}
) {
	const { heroIds = [], itemIds = [], searchQuery, limit = 5, offset = 0 } = options;

	const hasHeroFilter = heroIds.length > 0;
	const hasItemFilter = itemIds.length > 0;
	const hasSearchFilter = !!searchQuery?.trim();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let query = (db as any)
		.selectDistinct({ changelogs: schema.changelogs })
		.from(schema.changelogs);

	const conditions = [];
	if (hasSearchFilter && searchQuery) {
		conditions.push(buildTextSearchCondition(searchQuery));
	}

	if (hasHeroFilter) {
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
	}

	if (hasItemFilter) {
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
		query = query.where(sql.join(conditions, sql` AND `));
	}

	const results = await query
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.offset(offset)
		.all();

	// Extract changelogs from nested structure when using selectDistinct
	return results.map((r: { changelogs: ScrapedChangelog }) => r.changelogs);
}

/**
 * Get total count of changelogs
 */
export async function getChangelogsCount(db: DrizzleDB): Promise<number> {
	const result = await db.select().from(schema.changelogs).all();
	return result.length;
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

export async function getChangelogById(db: DrizzleDB, id: string) {
	const result = await db
		.select()
		.from(schema.changelogs)
		.where(eq(schema.changelogs.id, id))
		.get();

	return result;
}

export async function getMetadata(db: DrizzleDB, key: string) {
	const result = await db
		.select()
		.from(schema.metadata)
		.where(eq(schema.metadata.key, key))
		.get();

	return result?.value ?? null;
}

export async function getAllHeroes(db: DrizzleDB): Promise<EnrichedHero[]> {
	return db.select().from(schema.heroes).all();
}

export async function getAllItems(db: DrizzleDB): Promise<EnrichedItem[]> {
	return await db.select().from(schema.items).all();
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

	return result ?? null;
}

export async function getHeroBySlug(
	db: DrizzleDB,
	slug: string
): Promise<EnrichedHero | null> {
	const result = await db
		.select()
		.from(schema.heroes)
		.where(eq(schema.heroes.slug, slug))
		.get();

	return result ?? null;
}

export async function getAllHeroSlugs(db: DrizzleDB): Promise<string[]> {
	const results = await db.select().from(schema.heroes).all();
	return results.map((r) => r.slug);
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

	return result ?? null;
}

export async function getItemBySlug(
	db: DrizzleDB,
	slug: string
): Promise<EnrichedItem | null> {
	const result = await db
		.select()
		.from(schema.items)
		.where(eq(schema.items.slug, slug))
		.get();

	return result ?? null;
}

export async function getAllItemSlugs(db: DrizzleDB): Promise<string[]> {
	const results = await db.select().from(schema.items).all();
	return results.map((r) => r.slug);
}

export async function getChangelogsByHeroId(
	db: DrizzleDB,
	heroId: number,
	limit = 50
): Promise<ScrapedChangelog[]> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const results = await (db as any)
		.selectDistinct({ changelogs: schema.changelogs })
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogHeroes,
			eq(schema.changelogs.id, schema.changelogHeroes.changelogId)
		)
		.where(eq(schema.changelogHeroes.heroId, heroId))
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.all();

	return results.map((r: { changelogs: ScrapedChangelog }) => r.changelogs);
}

export async function getChangelogsByItemId(
	db: DrizzleDB,
	itemId: number,
	limit = 50
): Promise<ScrapedChangelog[]> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const results = await (db as any)
		.selectDistinct({ changelogs: schema.changelogs })
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogItems,
			eq(schema.changelogs.id, schema.changelogItems.changelogId)
		)
		.where(eq(schema.changelogItems.itemId, itemId))
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.all();

	return results.map((r: { changelogs: ScrapedChangelog }) => r.changelogs);
}

interface ChangelogIcons {
	heroes: EntityIcon[];
	items: EntityIcon[];
}

export async function getChangelogIcons(
	db: DrizzleDB,
	changelogIds: string[]
): Promise<Record<string, ChangelogIcons>> {
	const heroRows = await db
		.select()
		.from(schema.changelogHeroes)
		.innerJoin(schema.heroes, eq(schema.changelogHeroes.heroId, schema.heroes.id))
		.where(
			sql`${schema.changelogHeroes.changelogId} IN (${sql.join(
				changelogIds.map((id) => sql`${id}`),
				sql`, `
			)})`
		)
		.all();

	const itemRows = await db
		.select()
		.from(schema.changelogItems)
		.innerJoin(schema.items, eq(schema.changelogItems.itemId, schema.items.id))
		.where(
			sql`${schema.changelogItems.changelogId} IN (${sql.join(
				changelogIds.map((id) => sql`${id}`),
				sql`, `
			)})`
		)
		.all();

	const result: Record<string, ChangelogIcons> = {};

	for (const r of heroRows) {
		const icons = (result[r.changelog_heroes.changelogId] ??= { heroes: [], items: [] });
		const images = r.heroes.images;
		icons.heroes.push({
			id: r.heroes.id,
			src:
				images.icon_image_small_webp ??
				images.icon_image_small ??
				Object.values(images)[0] ??
				'',
			alt: r.heroes.name,
			type: 'hero',
			heroType: r.heroes.heroType
		});
	}

	for (const r of itemRows) {
		const icons = (result[r.changelog_items.changelogId] ??= { heroes: [], items: [] });
		icons.items.push({
			id: r.items.id,
			src: r.items.image,
			alt: r.items.name,
			type: 'item',
			itemCategory: r.items.type
		});
	}

	return result;
}
