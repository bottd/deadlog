import { eq, sql, desc, and, count, inArray, type SQL } from 'drizzle-orm';
import type { SQLiteColumn } from 'drizzle-orm/sqlite-core';
import type {
	ChangelogEntityIcon,
	EntityChangeGroup,
	EntityType,
	FeedEntityRef,
	FeedIndex,
	FeedText,
	FeedGroups,
	HeroChangeGroup,
	RedirectSlugs
} from './types';
import type { DrizzleDB } from './client';
import type { SelectChangelog } from './schema';
import * as schema from './schema';
import {
	countBullets,
	makeSummary,
	canonicalSlug,
	HERO_IMAGE_KEYS,
	type EntityImpact
} from '@deadlog/utils';

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
	impact: EntityImpact | null;
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

export async function getHeroBySlug(
	db: DrizzleDB,
	slug: string
): Promise<EnrichedHero | null> {
	const hero = await db
		.select()
		.from(schema.heroes)
		.where(eq(schema.heroes.slug, canonicalSlug(slug)))
		.get();

	return hero ?? null;
}

export async function getItemBySlug(
	db: DrizzleDB,
	slug: string
): Promise<ScrapedItem | null> {
	const item = await db
		.select()
		.from(schema.items)
		.where(eq(schema.items.slug, canonicalSlug(slug)))
		.get();

	return item ?? null;
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
	const match = await db
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
				eq(schema.heroAbilities.slug, canonicalSlug(slug))
			)
		)
		.get();

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
			changeGroups: schema.changelogHeroes.changeGroups,
			impact: schema.changelogHeroes.impact
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
			changeGroups: schema.changelogItems.changeGroups,
			impact: schema.changelogItems.impact
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

export async function getAbilityLastModified(
	db: DrizzleDB
): Promise<Map<string, string>> {
	const rows = await db.all<{ abilitySlug: string; lastModified: string }>(sql`
		SELECT json_extract(groups.value, '$.abilitySlug') AS abilitySlug,
			MAX(${schema.changelogs.pubDate}) AS lastModified
		FROM ${schema.changelogHeroes}
		JOIN ${schema.heroes} ON ${schema.heroes.id} = ${schema.changelogHeroes.heroId}
		JOIN ${schema.changelogs} ON ${schema.changelogs.id} = ${schema.changelogHeroes.changelogId},
			json_each(${schema.changelogHeroes.changeGroups}) AS groups
		WHERE ${schema.heroes.isReleased} = 1 AND abilitySlug IS NOT NULL
		GROUP BY abilitySlug
	`);
	return new Map(rows.map((row) => [row.abilitySlug, row.lastModified]));
}

interface ChangelogIcons {
	heroes: ChangelogEntityIcon[];
	items: ChangelogEntityIcon[];
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

const feedIndexes = new WeakMap<DrizzleDB, Promise<FeedIndex>>();

export function getFeedIndex(db: DrizzleDB): Promise<FeedIndex> {
	let index = feedIndexes.get(db);
	if (!index) {
		index = buildFeedIndex(db);
		feedIndexes.set(db, index);
	}
	return index;
}

async function buildFeedIndex(db: DrizzleDB): Promise<FeedIndex> {
	const [rows, heroRefs, itemRefs, heroes, items] = await Promise.all([
		db
			.select({
				id: schema.changelogs.id,
				slug: schema.changelogs.slug,
				title: schema.changelogs.title,
				date: schema.changelogs.pubDate,
				author: schema.changelogs.author,
				authorImage: schema.changelogs.authorImage,
				previewImage: schema.changelogs.previewImage,
				majorUpdate: schema.changelogs.majorUpdate,
				contentText: schema.changelogs.contentText
			})
			.from(schema.changelogs)
			.orderBy(desc(schema.changelogs.pubDate))
			.all(),
		db
			.select({
				changelogId: schema.changelogHeroes.changelogId,
				id: schema.changelogHeroes.heroId,
				groups: schema.changelogHeroes.changeGroups
			})
			.from(schema.changelogHeroes)
			.all(),
		db
			.select({
				changelogId: schema.changelogItems.changelogId,
				id: schema.changelogItems.itemId,
				groups: schema.changelogItems.changeGroups
			})
			.from(schema.changelogItems)
			.all(),
		db
			.select({
				id: schema.heroes.id,
				name: schema.heroes.name,
				slug: schema.heroes.slug,
				src: heroIconImage(),
				heroType: schema.heroes.heroType
			})
			.from(schema.heroes)
			.where(
				inArray(
					schema.heroes.id,
					db.select({ id: schema.changelogHeroes.heroId }).from(schema.changelogHeroes)
				)
			)
			.orderBy(schema.heroes.name)
			.all(),
		db
			.select({
				id: schema.items.id,
				name: schema.items.name,
				slug: schema.items.slug,
				src: schema.items.image,
				category: schema.items.category
			})
			.from(schema.items)
			.where(
				inArray(
					schema.items.id,
					db.select({ id: schema.changelogItems.itemId }).from(schema.changelogItems)
				)
			)
			.orderBy(schema.items.name)
			.all()
	]);

	const group = (
		refs: { changelogId: string; id: number; groups: EntityChangeGroup[] | null }[]
	) => {
		const byChangelog = new Map<string, FeedEntityRef[]>();
		for (const { changelogId, id, groups } of refs) {
			const list = byChangelog.get(changelogId) ?? [];
			list.push({ id, changeCount: countBullets(groups) });
			byChangelog.set(changelogId, list);
		}
		return byChangelog;
	};

	const heroesByChangelog = group(heroRefs);
	const itemsByChangelog = group(itemRefs);

	return {
		rows: rows.map(({ contentText, ...row }) => ({
			...row,
			summary: makeSummary(contentText),
			heroes: heroesByChangelog.get(row.id) ?? [],
			items: itemsByChangelog.get(row.id) ?? []
		})),
		heroes: heroes.map((hero) => ({ ...hero, type: 'hero' as const })),
		items: items.map(({ category, ...item }) => ({
			...item,
			type: 'item' as const,
			itemCategory: category ?? undefined
		}))
	};
}

export async function getFeedText(db: DrizzleDB): Promise<FeedText> {
	const rows = await db
		.select({ id: schema.changelogs.id, text: schema.changelogs.contentText })
		.from(schema.changelogs)
		.all();
	return Object.fromEntries(rows.map((row) => [row.id, row.text ?? '']));
}

export async function getRedirectSlugs(db: DrizzleDB): Promise<RedirectSlugs> {
	const [heroes, items, abilities, changelogs, aliases] = await Promise.all([
		getRenderableHeroSlugs(db),
		getRenderableItemSlugs(db),
		getReleasedAbilities(db),
		getAllChangelogSlugs(db),
		db
			.select({
				alias: schema.changelogAliases.slug,
				canonical: schema.changelogs.slug
			})
			.from(schema.changelogAliases)
			.innerJoin(
				schema.changelogs,
				eq(schema.changelogAliases.changelogId, schema.changelogs.id)
			)
			.all()
	]);

	return {
		hero: heroes,
		item: items,
		ability: abilities.map((entry) => entry.slug),
		changelog: changelogs,
		changelogAliases: Object.fromEntries(aliases.map((row) => [row.alias, row.canonical]))
	};
}

async function renderableSlugs(
	db: DrizzleDB,
	table: typeof schema.heroes | typeof schema.items,
	link: SQLiteColumn
): Promise<string[]> {
	const rows = await db
		.selectDistinct({ slug: table.slug })
		.from(table)
		.where(
			sql`${table.isReleased} = 1 OR ${table.id} IN (SELECT ${link} FROM ${link.table})`
		)
		.orderBy(table.slug)
		.all();
	return rows.map((row) => row.slug);
}

export function getRenderableHeroSlugs(db: DrizzleDB): Promise<string[]> {
	return renderableSlugs(db, schema.heroes, schema.changelogHeroes.heroId);
}

export function getRenderableItemSlugs(db: DrizzleDB): Promise<string[]> {
	return renderableSlugs(db, schema.items, schema.changelogItems.itemId);
}

export async function getFeedGroups(db: DrizzleDB): Promise<FeedGroups> {
	const [heroRows, itemRows] = await Promise.all([
		db
			.select({
				changelogId: schema.changelogHeroes.changelogId,
				id: schema.changelogHeroes.heroId,
				groups: schema.changelogHeroes.changeGroups
			})
			.from(schema.changelogHeroes)
			.all(),
		db
			.select({
				changelogId: schema.changelogItems.changelogId,
				id: schema.changelogItems.itemId,
				groups: schema.changelogItems.changeGroups
			})
			.from(schema.changelogItems)
			.all()
	]);

	const groups: FeedGroups = {};
	for (const row of heroRows) groups[`${row.changelogId}:hero:${row.id}`] = row.groups;
	for (const row of itemRows) groups[`${row.changelogId}:item:${row.id}`] = row.groups;
	return groups;
}
