import {
	eq,
	sql,
	desc,
	and,
	or,
	ne,
	isNull,
	isNotNull,
	count,
	inArray,
	type SQL
} from 'drizzle-orm';
import type { SQLiteColumn } from 'drizzle-orm/sqlite-core';
import type { EntityIcon } from './types/deadlockApi';
import { getLibsqlDb, type DrizzleDB, type SelectChangelog, schema } from '@deadlog/db';
import { entityNamesMatch } from '@deadlog/changelog';

export { getLibsqlDb as getDb };

export type ScrapedChangelog = SelectChangelog;
export type ScrapedItem = typeof schema.items.$inferSelect;
export type EnrichedHero = typeof schema.heroes.$inferSelect;
export type EnrichedItem = ScrapedItem;

/**
 * Entity history rows carry the entity's own scoped bullets — never the full patch
 * body. Selecting `contentText` here put the full prose of every patch into the
 * prerendered HTML of all ~200 hero/item pages, so the column list is deliberate.
 */
const ENTITY_HISTORY_COLUMNS = {
	id: schema.changelogs.id,
	title: schema.changelogs.title,
	slug: schema.changelogs.slug,
	pubDate: schema.changelogs.pubDate,
	author: schema.changelogs.author
} as const;

export type EntityChangelog = Pick<
	SelectChangelog,
	keyof typeof ENTITY_HISTORY_COLUMNS
> & {
	/** Derived from changeBullets — null when the patch mentions the entity without its own section. */
	changeCount: number | null;
	changeBullets: string[] | null;
};

function isMainChangelog() {
	return or(
		isNull(schema.changelogs.parentChange),
		eq(schema.changelogs.parentChange, '')
	);
}

function buildTextSearchCondition(searchQuery: string): SQL {
	const pattern = `%${searchQuery.replace(/[!%_]/g, '!$&')}%`;
	return sql`(LOWER(${schema.changelogs.title}) LIKE LOWER(${pattern}) ESCAPE '!' OR LOWER(${schema.changelogs.contentText}) LIKE LOWER(${pattern}) ESCAPE '!')`;
}

export async function getAllChangelogs(db: DrizzleDB) {
	return db.select().from(schema.changelogs).all();
}

export async function getAllChangelogSlugs(db: DrizzleDB): Promise<string[]> {
	const rows = await db
		.select({ slug: schema.changelogs.slug })
		.from(schema.changelogs)
		.all();
	return rows.map((r) => r.slug);
}

export async function queryChangelogs(
	db: DrizzleDB,
	options: {
		heroIds?: number[];
		itemIds?: number[];
		searchQuery?: string | null;
		majorOnly?: boolean;
		limit?: number;
		offset?: number;
	} = {}
): Promise<ScrapedChangelog[]> {
	const {
		heroIds = [],
		itemIds = [],
		searchQuery,
		majorOnly = false,
		limit = 5,
		offset = 0
	} = options;

	// Only return main changelogs (exclude child updates) for pagination to work correctly
	const conditions = [isMainChangelog()];

	if (searchQuery?.trim()) {
		conditions.push(buildTextSearchCondition(searchQuery));
	}

	if (majorOnly) {
		conditions.push(eq(schema.changelogs.majorUpdate, true));
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

export async function getChangelogBySlug(db: DrizzleDB, slug: string) {
	return (
		(await db
			.select()
			.from(schema.changelogs)
			.where(eq(schema.changelogs.slug, slug))
			.get()) ?? null
	);
}

/** Build-artifact bookkeeping (built_at, patch_count); read by the integrity tests. */
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

const SLUG_ARTICLES = ['the', 'a', 'an'] as const;
const SLUG_ARTICLE_RE = new RegExp(`^(${SLUG_ARTICLES.join('|')})-`);

function canonicalSlug(slug: string): string {
	return slug.toLowerCase().trim().replace(SLUG_ARTICLE_RE, '');
}

/**
 * Every slug that could canonicalise to the same entity, so an alias lookup stays an
 * indexed query. Slug misses are mostly bots and typos; scanning the table for each
 * one made a 404 the most expensive request on the site.
 */
function slugCandidates(slug: string): string[] {
	const canonical = canonicalSlug(slug);
	return [
		...new Set([slug, canonical, ...SLUG_ARTICLES.map((a) => `${a}-${canonical}`)])
	];
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
	return candidates.find((hero) => entityNamesMatch(hero.name, name)) ?? null;
}

export async function getHeroBySlug(
	db: DrizzleDB,
	slug: string
): Promise<EnrichedHero | null> {
	const matches = await db
		.select()
		.from(schema.heroes)
		.where(inArray(schema.heroes.slug, slugCandidates(slug)))
		.all();

	// Every candidate shares one canonical form, so any match is a valid alias —
	// prefer the exact slug so a real row always beats its own article variant.
	return matches.find((hero) => hero.slug === slug) ?? matches[0] ?? null;
}

export async function getReleasedHeroSlugs(db: DrizzleDB): Promise<string[]> {
	const results = await db
		.select({ slug: schema.heroes.slug })
		.from(schema.heroes)
		.where(eq(schema.heroes.isReleased, true))
		.all();
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
	return candidates.find((item) => entityNamesMatch(item.name, name)) ?? null;
}

export async function getItemBySlug(
	db: DrizzleDB,
	slug: string
): Promise<ScrapedItem | null> {
	const matches = await db
		.select()
		.from(schema.items)
		.where(inArray(schema.items.slug, slugCandidates(slug)))
		.all();

	// See getHeroBySlug.
	return matches.find((item) => item.slug === slug) ?? matches[0] ?? null;
}

export async function getReleasedItemSlugs(db: DrizzleDB): Promise<string[]> {
	const results = await db
		.select({ slug: schema.items.slug })
		.from(schema.items)
		.where(
			and(
				eq(schema.items.isReleased, true),
				isNotNull(schema.items.slug),
				ne(schema.items.slug, '')
			)
		)
		.all();
	return results.map((r) => r.slug);
}

/** Newest-first main-changelog ids, for streak math against an entity's patch set. */
export async function getMainChangelogIdSequence(db: DrizzleDB): Promise<string[]> {
	const rows = await db
		.select({ id: schema.changelogs.id })
		.from(schema.changelogs)
		.where(isMainChangelog())
		.orderBy(desc(schema.changelogs.pubDate))
		.all();
	return rows.map((r) => r.id);
}

/**
 * No limit by design: the page bills itself as the canonical history and derives
 * "Patches" and "Tracked since" from these rows, so a cap silently reported the
 * oldest of the newest N as the first-ever patch. Bounded by the changelog count.
 */
export async function getChangelogsByHeroId(
	db: DrizzleDB,
	heroId: number
): Promise<EntityChangelog[]> {
	const rows = await db
		.select({
			...ENTITY_HISTORY_COLUMNS,
			changeBullets: schema.changelogHeroes.changeBullets
		})
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogHeroes,
			eq(schema.changelogs.id, schema.changelogHeroes.changelogId)
		)
		.where(eq(schema.changelogHeroes.heroId, heroId))
		.orderBy(desc(schema.changelogs.pubDate))
		.all();
	return rows.map((row) => ({ ...row, changeCount: row.changeBullets?.length ?? null }));
}

/** See getChangelogsByHeroId — deliberately uncapped for the same reason. */
export async function getChangelogsByItemId(
	db: DrizzleDB,
	itemId: number
): Promise<EntityChangelog[]> {
	const rows = await db
		.select({
			...ENTITY_HISTORY_COLUMNS,
			changeBullets: schema.changelogItems.changeBullets
		})
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogItems,
			eq(schema.changelogs.id, schema.changelogItems.changelogId)
		)
		.where(eq(schema.changelogItems.itemId, itemId))
		.orderBy(desc(schema.changelogs.pubDate))
		.all();
	return rows.map((row) => ({ ...row, changeCount: row.changeBullets?.length ?? null }));
}

/**
 * Newest patch date per entity, keyed by id. The sitemap's whole job is telling
 * crawlers a hero page changed after a patch touched that hero, so these URLs
 * shipping without <lastmod> wasted the one signal that matters here.
 */
async function lastModifiedByEntity(
	db: DrizzleDB,
	link: typeof schema.changelogHeroes | typeof schema.changelogItems,
	entityId: SQLiteColumn
): Promise<Map<number, string>> {
	const rows = await db
		.select({
			id: entityId,
			lastModified: sql<string>`MAX(${schema.changelogs.pubDate})`
		})
		.from(link)
		.innerJoin(schema.changelogs, eq(schema.changelogs.id, link.changelogId))
		.groupBy(entityId)
		.all();
	return new Map(rows.map((row) => [row.id, row.lastModified]));
}

export function getHeroLastModified(db: DrizzleDB): Promise<Map<number, string>> {
	return lastModifiedByEntity(db, schema.changelogHeroes, schema.changelogHeroes.heroId);
}

export function getItemLastModified(db: DrizzleDB): Promise<Map<number, string>> {
	return lastModifiedByEntity(db, schema.changelogItems, schema.changelogItems.itemId);
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
			slug: r.heroes.slug,
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
			slug: r.items.slug,
			type: 'item',
			itemCategory: r.items.category ?? undefined
		});
	}

	return result;
}
