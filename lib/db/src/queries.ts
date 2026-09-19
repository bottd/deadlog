import { eq, sql, desc, and, count, inArray, type SQL } from 'drizzle-orm';
import type { SQLiteColumn } from 'drizzle-orm/sqlite-core';
import type {
	ChangelogEntityIcon,
	EntityChangeGroup,
	EntityType,
	HeroChangeGroup
} from './types';
import type { DrizzleDB } from './client';
import type { SelectChangelog } from './schema';
import * as schema from './schema';
import { countBullets, HERO_IMAGE_KEYS } from '@deadlog/utils';

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

export type EntityChangelog<Group = EntityChangeGroup> = Pick<
	SelectChangelog,
	keyof typeof ENTITY_HISTORY_COLUMNS
> & {
	/** Derived from changeGroups — null when the patch mentions the entity without its own section. */
	changeCount: number | null;
	changeGroups: Group[] | null;
};

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

export function getPatchArchive(db: DrizzleDB) {
	return db
		.select({
			title: schema.changelogs.title,
			slug: schema.changelogs.slug,
			pubDate: schema.changelogs.pubDate
		})
		.from(schema.changelogs)
		.orderBy(desc(schema.changelogs.pubDate))
		.all();
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

	const conditions: SQL[] = [];

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
	const result = await db.select({ count: count() }).from(schema.changelogs).get();
	return result?.count ?? 0;
}

export async function getChangelogBySlug(db: DrizzleDB, slug: string) {
	const changelog = await db
		.select()
		.from(schema.changelogs)
		.where(eq(schema.changelogs.slug, slug))
		.get();
	if (changelog) return changelog;

	return (
		(
			await db
				.select()
				.from(schema.changelogAliases)
				.innerJoin(
					schema.changelogs,
					eq(schema.changelogAliases.changelogId, schema.changelogs.id)
				)
				.where(eq(schema.changelogAliases.slug, slug))
				.get()
		)?.changelogs ?? null
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

export async function getEntityNames(db: DrizzleDB, kind: EntityType) {
	const table = kind === 'hero' ? schema.heroes : schema.items;
	return db.select({ id: table.id, name: table.name }).from(table).all();
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
		.where(eq(schema.items.isReleased, true))
		.all();
	return results.map((r) => r.slug);
}

export type HeroAbility = Pick<
	typeof schema.heroAbilities.$inferSelect,
	'name' | 'slug' | 'image' | 'description'
>;

export interface ChangelogAbilityIcon {
	heroId: number;
	slug: string;
	image: string;
}

export async function getHeroAbilities(
	db: DrizzleDB,
	heroId: number
): Promise<HeroAbility[]> {
	return db
		.select({
			name: schema.heroAbilities.name,
			slug: schema.heroAbilities.slug,
			image: schema.heroAbilities.image,
			description: schema.heroAbilities.description
		})
		.from(schema.heroAbilities)
		.where(eq(schema.heroAbilities.heroId, heroId))
		.orderBy(schema.heroAbilities.position)
		.all();
}

export interface ReleasedAbility {
	slug: string;
	heroId: number;
}

export interface AbilityWithHero {
	ability: HeroAbility;
	hero: Pick<
		typeof schema.heroes.$inferSelect,
		'id' | 'name' | 'slug' | 'heroType' | 'images'
	>;
}

/**
 * Released heroes only, and that filter is load-bearing rather than cosmetic: three
 * ability slugs are shared with unreleased heroes (`full-auto`, `pulse-grenade`,
 * `demontrigger-blitz`). Restricted to released heroes the set is 152 slugs, all
 * distinct, which is what lets `/ability/<slug>` be a flat route with no tiebreak.
 */
export async function getReleasedAbilities(db: DrizzleDB): Promise<ReleasedAbility[]> {
	return db
		.select({
			slug: schema.heroAbilities.slug,
			heroId: schema.heroAbilities.heroId
		})
		.from(schema.heroAbilities)
		.innerJoin(schema.heroes, eq(schema.heroes.id, schema.heroAbilities.heroId))
		.where(eq(schema.heroes.isReleased, true))
		.orderBy(schema.heroAbilities.slug)
		.all();
}

export async function getAbilityBySlug(
	db: DrizzleDB,
	slug: string
): Promise<AbilityWithHero | null> {
	const matches = await db
		.select({
			name: schema.heroAbilities.name,
			slug: schema.heroAbilities.slug,
			image: schema.heroAbilities.image,
			description: schema.heroAbilities.description,
			heroId: schema.heroes.id,
			heroName: schema.heroes.name,
			heroSlug: schema.heroes.slug,
			heroType: schema.heroes.heroType,
			heroImages: schema.heroes.images
		})
		.from(schema.heroAbilities)
		.innerJoin(schema.heroes, eq(schema.heroes.id, schema.heroAbilities.heroId))
		.where(
			and(
				eq(schema.heroes.isReleased, true),
				inArray(schema.heroAbilities.slug, slugCandidates(slug))
			)
		)
		.all();

	// See getHeroBySlug: prefer the exact slug so a real row beats an article variant.
	const match = matches.find((row) => row.slug === slug) ?? matches[0];
	if (!match) return null;

	return {
		ability: {
			name: match.name,
			slug: match.slug,
			image: match.image,
			description: match.description
		},
		hero: {
			id: match.heroId,
			name: match.heroName,
			slug: match.heroSlug,
			heroType: match.heroType,
			images: match.heroImages
		}
	};
}

export async function getChangelogAbilityIcons(
	db: DrizzleDB,
	changelogId: string
): Promise<ChangelogAbilityIcon[]> {
	return db
		.select({
			heroId: schema.heroAbilities.heroId,
			slug: schema.heroAbilities.slug,
			image: schema.heroAbilities.image
		})
		.from(schema.heroAbilities)
		.innerJoin(
			schema.changelogHeroes,
			eq(schema.heroAbilities.heroId, schema.changelogHeroes.heroId)
		)
		.where(eq(schema.changelogHeroes.changelogId, changelogId))
		.orderBy(schema.heroAbilities.heroId, schema.heroAbilities.position)
		.all();
}

/**
 * No limit by design: the page bills itself as the canonical history and derives
 * "Patches" and "Tracked since" from these rows, so a cap silently reported the
 * oldest of the newest N as the first-ever patch. Bounded by the changelog count.
 */
export async function getChangelogsByHeroId(
	db: DrizzleDB,
	heroId: number
): Promise<EntityChangelog<HeroChangeGroup>[]> {
	const rows = await db
		.select({
			...ENTITY_HISTORY_COLUMNS,
			changeGroups: schema.changelogHeroes.changeGroups
		})
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogHeroes,
			eq(schema.changelogs.id, schema.changelogHeroes.changelogId)
		)
		.where(eq(schema.changelogHeroes.heroId, heroId))
		.orderBy(desc(schema.changelogs.pubDate))
		.all();
	return rows.map((row) => ({
		...row,
		changeCount: countBullets(row.changeGroups)
	}));
}

/** See getChangelogsByHeroId — deliberately uncapped for the same reason. */
export async function getChangelogsByItemId(
	db: DrizzleDB,
	itemId: number
): Promise<EntityChangelog[]> {
	const rows = await db
		.select({
			...ENTITY_HISTORY_COLUMNS,
			changeGroups: schema.changelogItems.changeGroups
		})
		.from(schema.changelogs)
		.innerJoin(
			schema.changelogItems,
			eq(schema.changelogs.id, schema.changelogItems.changelogId)
		)
		.where(eq(schema.changelogItems.itemId, itemId))
		.orderBy(desc(schema.changelogs.pubDate))
		.all();
	return rows.map((row) => ({
		...row,
		changeCount: countBullets(row.changeGroups)
	}));
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
	heroes: ChangelogEntityIcon[];
	items: ChangelogEntityIcon[];
}

// D1 permits 100 bindings per query.
const D1_MAX_BINDINGS = 100;
// Room for the json paths and literals the query builder binds around the ids.
const BINDING_HEADROOM = 25;

/** Runs a query over id batches that stay under D1's binding cap. `otherBindings` is what
 * the same query binds besides these ids. */
async function inBatches<T>(
	ids: string[],
	otherBindings: number,
	run: (batch: string[]) => Promise<T>
): Promise<T[]> {
	if (ids.length === 0) return [];
	const size = Math.max(1, D1_MAX_BINDINGS - BINDING_HEADROOM - otherBindings);
	if (ids.length <= size) return [await run(ids)];

	const batches: string[][] = [];
	for (let start = 0; start < ids.length; start += size) {
		batches.push(ids.slice(start, start + size));
	}
	return Promise.all(batches.map(run));
}

function heroIconImage() {
	const preferred = HERO_IMAGE_KEYS.icon.map(
		(key) => sql`NULLIF(json_extract(${schema.heroes.images}, ${`$.${key}`}), '')`
	);
	return sql<string>`COALESCE(${sql.join(preferred, sql`, `)},
		(SELECT value FROM json_each(${schema.heroes.images}) WHERE value != '' LIMIT 1), '')`;
}

function groupBulletCount(column: SQLiteColumn) {
	return sql<number | null>`CASE WHEN ${column} IS NULL THEN NULL ELSE COALESCE(
		(SELECT SUM(json_array_length(json_extract(value, '$.bullets'))) FROM json_each(${column})), 0
	) END`;
}

export async function getChangelogIcons(
	db: DrizzleDB,
	changelogIds: string[]
): Promise<Record<string, ChangelogIcons>> {
	const batches = await inBatches(changelogIds, 0, (ids) =>
		selectChangelogIcons(db, ids)
	);
	return Object.assign({}, ...batches);
}

async function selectChangelogIcons(
	db: DrizzleDB,
	changelogIds: string[]
): Promise<Record<string, ChangelogIcons>> {
	const [heroRows, itemRows] = await Promise.all([
		db
			.select({
				changelogId: schema.changelogHeroes.changelogId,
				id: schema.heroes.id,
				src: heroIconImage(),
				alt: schema.heroes.name,
				slug: schema.heroes.slug,
				heroType: schema.heroes.heroType,
				changeCount: groupBulletCount(schema.changelogHeroes.changeGroups)
			})
			.from(schema.changelogHeroes)
			.innerJoin(schema.heroes, eq(schema.changelogHeroes.heroId, schema.heroes.id))
			.where(inArray(schema.changelogHeroes.changelogId, changelogIds))
			.orderBy(schema.heroes.name)
			.all(),
		db
			.select({
				changelogId: schema.changelogItems.changelogId,
				id: schema.items.id,
				src: schema.items.image,
				alt: schema.items.name,
				slug: schema.items.slug,
				itemCategory: schema.items.category,
				changeCount: groupBulletCount(schema.changelogItems.changeGroups)
			})
			.from(schema.changelogItems)
			.innerJoin(schema.items, eq(schema.changelogItems.itemId, schema.items.id))
			.where(inArray(schema.changelogItems.changelogId, changelogIds))
			.orderBy(schema.items.name)
			.all()
	]);

	const result: Record<string, ChangelogIcons> = {};

	for (const { changelogId, ...hero } of heroRows) {
		const icons = (result[changelogId] ??= { heroes: [], items: [] });
		icons.heroes.push({ ...hero, type: 'hero' });
	}

	for (const { changelogId, itemCategory, ...item } of itemRows) {
		const icons = (result[changelogId] ??= { heroes: [], items: [] });
		icons.items.push({ ...item, type: 'item', itemCategory: itemCategory ?? undefined });
	}

	return result;
}

/** Only selected entities' prose is needed for relevant feed excerpts. */
export async function getSelectedChangeGroups(
	db: DrizzleDB,
	changelogIds: string[],
	heroIds: number[],
	itemIds: number[]
): Promise<Map<string, EntityChangeGroup[] | null>> {
	// Each batch also binds one entity list, so the widest of the two sets the reserve.
	const batches = await inBatches(
		changelogIds,
		Math.max(heroIds.length, itemIds.length),
		(ids) => selectChangeGroups(db, ids, heroIds, itemIds)
	);
	return new Map(batches.flatMap((batch) => [...batch]));
}

async function selectChangeGroups(
	db: DrizzleDB,
	changelogIds: string[],
	heroIds: number[],
	itemIds: number[]
): Promise<Map<string, EntityChangeGroup[] | null>> {
	const result = new Map<string, EntityChangeGroup[] | null>();
	const collect = async (
		type: EntityType,
		link: typeof schema.changelogHeroes | typeof schema.changelogItems,
		entityId: SQLiteColumn,
		ids: number[]
	) => {
		if (ids.length === 0) return;
		const rows = await db
			.select({
				changelogId: link.changelogId,
				entityId,
				groups: link.changeGroups
			})
			.from(link)
			.where(and(inArray(link.changelogId, changelogIds), inArray(entityId, ids)))
			.all();
		for (const row of rows)
			result.set(`${row.changelogId}:${type}:${row.entityId}`, row.groups);
	};
	await Promise.all([
		collect('hero', schema.changelogHeroes, schema.changelogHeroes.heroId, heroIds),
		collect('item', schema.changelogItems, schema.changelogItems.itemId, itemIds)
	]);
	return result;
}
