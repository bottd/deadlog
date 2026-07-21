import {
	eq,
	sql,
	desc,
	gt,
	and,
	or,
	ne,
	isNull,
	isNotNull,
	count,
	inArray,
	type SQL
} from 'drizzle-orm';
import type { EnrichedHero, EntityIcon } from './types/deadlockApi';
import { getLibsqlDb, type DrizzleDB, type SelectChangelog, schema } from '@deadlog/db';
import { entityNameAliases } from '@deadlog/changelog';

export { getLibsqlDb as getDb };

export type ScrapedChangelog = SelectChangelog;
export type ChangelogWithCount = ScrapedChangelog & { changeCount: number | null };
export type ScrapedItem = typeof schema.items.$inferSelect;

function isMainChangelog() {
	return or(
		isNull(schema.changelogs.parentChange),
		eq(schema.changelogs.parentChange, '')
	);
}

function buildTextSearchCondition(searchQuery: string): SQL {
	const pattern = `%${searchQuery}%`;
	return sql`(LOWER(${schema.changelogs.title}) LIKE LOWER(${pattern}) OR LOWER(${schema.changelogs.contentText}) LIKE LOWER(${pattern}))`;
}

export async function getAllChangelogs(db: DrizzleDB) {
	return db.select().from(schema.changelogs).all();
}

export async function getAllChangelogIds(db: DrizzleDB): Promise<string[]> {
	const results = await db
		.select({ id: schema.changelogs.id })
		.from(schema.changelogs)
		.all();
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
): Promise<ScrapedChangelog[]> {
	const { heroIds = [], itemIds = [], searchQuery, limit = 5, offset = 0 } = options;

	// Only return main changelogs (exclude child updates) for pagination to work correctly
	const conditions = [isMainChangelog()];

	if (searchQuery?.trim()) {
		conditions.push(buildTextSearchCondition(searchQuery));
	}

	// PK on (changelog_id, hero_id) guarantees uniqueness within a group,
	// so COUNT(*) suffices — no DISTINCT needed.
	if (heroIds.length > 0) {
		conditions.push(
			sql`EXISTS (
				SELECT 1 FROM ${schema.changelogHeroes}
				WHERE ${schema.changelogHeroes.changelogId} = ${schema.changelogs.id}
				AND ${inArray(schema.changelogHeroes.heroId, heroIds)}
				GROUP BY ${schema.changelogHeroes.changelogId}
				HAVING COUNT(*) = ${heroIds.length}
			)`
		);
	}

	if (itemIds.length > 0) {
		conditions.push(
			sql`EXISTS (
				SELECT 1 FROM ${schema.changelogItems}
				WHERE ${schema.changelogItems.changelogId} = ${schema.changelogs.id}
				AND ${inArray(schema.changelogItems.itemId, itemIds)}
				GROUP BY ${schema.changelogItems.changelogId}
				HAVING COUNT(*) = ${itemIds.length}
			)`
		);
	}

	const results = await db
		.select({ changelogs: schema.changelogs })
		.from(schema.changelogs)
		.where(and(...conditions))
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.offset(offset)
		.all();

	return results.map((r) => r.changelogs);
}

export async function getChangelogsCount(db: DrizzleDB): Promise<number> {
	const result = await db
		.select({ count: count() })
		.from(schema.changelogs)
		.where(isMainChangelog())
		.get();
	return result?.count ?? 0;
}

/**
 * Get child updates for given parent changelog IDs
 */
export async function getUpdatesForChangelogs(
	db: DrizzleDB,
	parentIds: string[]
): Promise<ScrapedChangelog[]> {
	if (parentIds.length === 0) return [];

	return db
		.select()
		.from(schema.changelogs)
		.where(inArray(schema.changelogs.parentChange, parentIds))
		.orderBy(desc(schema.changelogs.pubDate))
		.all();
}

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

	const result = await db
		.select({ count: count() })
		.from(schema.changelogs)
		.where(and(gt(schema.changelogs.pubDate, target.pubDate), isMainChangelog()))
		.get();

	return result?.count ?? 0;
}

export async function getChangelogById(db: DrizzleDB, id: string) {
	return (
		(await db
			.select()
			.from(schema.changelogs)
			.where(eq(schema.changelogs.id, id))
			.get()) ?? null
	);
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

export async function getAllItems(db: DrizzleDB): Promise<ScrapedItem[]> {
	return db.select().from(schema.items).all();
}

function hasMatchingNameAlias(candidate: string, requested: string): boolean {
	const requestedAliases = new Set(entityNameAliases(requested));
	return entityNameAliases(candidate).some((alias) => requestedAliases.has(alias));
}

function canonicalSlug(slug: string): string {
	return slug
		.toLowerCase()
		.trim()
		.replace(/^(the|a|an)-/, '');
}

export async function getHeroByName(
	db: DrizzleDB,
	name: string
): Promise<EnrichedHero | null> {
	const exact = await db
		.select()
		.from(schema.heroes)
		.where(eq(schema.heroes.name, name))
		.get();
	if (exact) return exact;
	const candidates = await db.select().from(schema.heroes).all();
	return candidates.find((hero) => hasMatchingNameAlias(hero.name, name)) ?? null;
}

export async function getHeroBySlug(
	db: DrizzleDB,
	slug: string
): Promise<EnrichedHero | null> {
	const exact = await db
		.select()
		.from(schema.heroes)
		.where(eq(schema.heroes.slug, slug))
		.get();
	if (exact) return exact;
	const candidates = await db.select().from(schema.heroes).all();
	return (
		candidates.find((hero) => canonicalSlug(hero.slug) === canonicalSlug(slug)) ?? null
	);
}

export async function getAllHeroSlugs(db: DrizzleDB): Promise<string[]> {
	const results = await db.select({ slug: schema.heroes.slug }).from(schema.heroes).all();
	return results.map((r) => r.slug);
}

export async function getItemByName(
	db: DrizzleDB,
	name: string
): Promise<ScrapedItem | null> {
	const exact = await db
		.select()
		.from(schema.items)
		.where(eq(schema.items.name, name))
		.get();
	if (exact) return exact;
	const candidates = await db.select().from(schema.items).all();
	return candidates.find((item) => hasMatchingNameAlias(item.name, name)) ?? null;
}

export async function getItemBySlug(
	db: DrizzleDB,
	slug: string
): Promise<ScrapedItem | null> {
	const exact = await db
		.select()
		.from(schema.items)
		.where(eq(schema.items.slug, slug))
		.get();
	if (exact) return exact;
	const candidates = await db.select().from(schema.items).all();
	return (
		candidates.find((item) => canonicalSlug(item.slug) === canonicalSlug(slug)) ?? null
	);
}

export async function getAllItemSlugs(db: DrizzleDB): Promise<string[]> {
	const results = await db
		.select({ slug: schema.items.slug })
		.from(schema.items)
		.where(and(isNotNull(schema.items.slug), ne(schema.items.slug, '')))
		.all();
	return results.map((r) => r.slug);
}

export async function getChangelogsByHeroId(
	db: DrizzleDB,
	heroId: number,
	limit = 50
): Promise<ChangelogWithCount[]> {
	const results = await db
		.selectDistinct({
			changelog: schema.changelogs,
			changeCount: schema.changelogHeroes.changeCount
		})
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogHeroes,
			eq(schema.changelogs.id, schema.changelogHeroes.changelogId)
		)
		.where(eq(schema.changelogHeroes.heroId, heroId))
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.all();

	return results.map((r) => ({ ...r.changelog, changeCount: r.changeCount }));
}

export async function getChangelogsByItemId(
	db: DrizzleDB,
	itemId: number,
	limit = 50
): Promise<ChangelogWithCount[]> {
	const results = await db
		.selectDistinct({
			changelog: schema.changelogs,
			changeCount: schema.changelogItems.changeCount
		})
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogItems,
			eq(schema.changelogs.id, schema.changelogItems.changelogId)
		)
		.where(eq(schema.changelogItems.itemId, itemId))
		.orderBy(desc(schema.changelogs.pubDate))
		.limit(limit)
		.all();

	return results.map((r) => ({ ...r.changelog, changeCount: r.changeCount }));
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
		.where(inArray(schema.changelogHeroes.changelogId, changelogIds))
		.all();

	const itemRows = await db
		.select()
		.from(schema.changelogItems)
		.innerJoin(schema.items, eq(schema.changelogItems.itemId, schema.items.id))
		.where(inArray(schema.changelogItems.changelogId, changelogIds))
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
