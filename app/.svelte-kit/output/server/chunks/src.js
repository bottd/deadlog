import { c as __exportAll } from './index-server.js';
import { h as canonicalSlug, r as countBullets, u as makeSummary } from './src2.js';
import { t as HERO_IMAGE_KEYS } from './entityImages.js';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import {
	index,
	integer,
	primaryKey,
	sqliteTable,
	text,
	uniqueIndex
} from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';
import { and, desc, eq, getTableColumns, inArray, sql } from 'drizzle-orm';
//#region ../lib/db/src/schema.ts
var schema_exports = /* @__PURE__ */ __exportAll({
	changelogAliases: () => changelogAliases,
	changelogHeroes: () => changelogHeroes,
	changelogItems: () => changelogItems,
	changelogs: () => changelogs,
	heroAbilities: () => heroAbilities,
	heroes: () => heroes,
	insertChangelogHeroSchema: () => insertChangelogHeroSchema,
	insertChangelogItemSchema: () => insertChangelogItemSchema,
	insertHeroAbilitySchema: () => insertHeroAbilitySchema,
	insertHeroSchema: () => insertHeroSchema,
	insertItemSchema: () => insertItemSchema,
	items: () => items,
	metadata: () => metadata,
	propertyEvents: () => propertyEvents
});
var changelogs = sqliteTable(
	'changelogs',
	{
		id: text('id').primaryKey(),
		title: text('title').notNull(),
		slug: text('slug').notNull(),
		sourceUrl: text('source_url').notNull(),
		author: text('author').notNull(),
		authorImage: text('author_image').notNull(),
		previewImage: text('preview_image'),
		pubDate: text('pub_date').notNull(),
		majorUpdate: integer('major_update', { mode: 'boolean' }).notNull().default(false),
		contentText: text('content_text'),
		stats: text('stats', { mode: 'json' }).$type()
	},
	(table) => ({
		pubDateIdx: index('idx_changelogs_pub_date').on(table.pubDate),
		slugIdx: uniqueIndex('idx_changelogs_slug').on(table.slug)
	})
);
var changelogAliases = sqliteTable('changelog_aliases', {
	slug: text('slug').primaryKey(),
	changelogId: text('changelog_id')
		.notNull()
		.references(() => changelogs.id)
});
var heroes = sqliteTable('heroes', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	className: text('class_name').notNull(),
	heroType: text('hero_type', { enum: ['marksman', 'mystic', 'brawler', 'assassin'] }),
	images: text('images', { mode: 'json' }).notNull().$type(),
	isReleased: integer('is_released', { mode: 'boolean' }).notNull().default(true)
});
var insertHeroSchema = createInsertSchema(heroes, {
	images: z.record(z.string(), z.string()),
	heroType: z.enum(['marksman', 'mystic', 'brawler', 'assassin']).nullable().catch(null)
});
var heroAbilities = sqliteTable(
	'hero_abilities',
	{
		heroId: integer('hero_id')
			.notNull()
			.references(() => heroes.id),
		position: integer('position').notNull(),
		name: text('name').notNull(),
		slug: text('slug').notNull(),
		image: text('image').notNull(),
		description: text('description'),
		assetId: integer('asset_id'),
		className: text('class_name'),
		context: text('context', { mode: 'json' }).$type()
	},
	(table) => ({
		pk: primaryKey({ columns: [table.heroId, table.position] }),
		heroSlugIdx: uniqueIndex('hero_abilities_hero_slug_idx').on(table.heroId, table.slug)
	})
);
var insertHeroAbilitySchema = createInsertSchema(heroAbilities, {
	position: z.number().int().min(1).max(4),
	image: z.string().min(1)
});
var items = sqliteTable('items', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	className: text('class_name').notNull(),
	type: text('type', { enum: ['weapon', 'ability', 'upgrade'] }).notNull(),
	category: text('category', { enum: ['weapon', 'vitality', 'spirit'] }),
	tier: integer('tier'),
	image: text('image').notNull(),
	isReleased: integer('is_released', { mode: 'boolean' }).notNull().default(false),
	context: text('context', { mode: 'json' }).$type()
});
var insertItemSchema = createInsertSchema(items, {
	slug: z.string().min(1),
	image: z.string().min(1, 'Image URL must be provided'),
	type: z.enum(['weapon', 'ability', 'upgrade']),
	category: z.enum(['weapon', 'vitality', 'spirit']).nullable(),
	tier: z.number().int().positive().nullable()
});
var metadata = sqliteTable('metadata', {
	key: text('key').primaryKey(),
	value: text('value')
});
var changelogHeroes = sqliteTable(
	'changelog_heroes',
	{
		changelogId: text('changelog_id')
			.notNull()
			.references(() => changelogs.id),
		heroId: integer('hero_id')
			.notNull()
			.references(() => heroes.id),
		changeGroups: text('change_groups', { mode: 'json' }).$type(),
		impact: text('impact', { mode: 'json' }).$type(),
		relatedItems: text('related_items', { mode: 'json' }).$type(),
		abilityOrder: text('ability_order', { mode: 'json' }).$type()
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.heroId] }),
		heroIdIdx: index('changelog_heroes_hero_id_idx').on(table.heroId)
	})
);
var impactWindowSchema = z.object({
	win: z.number().nullable(),
	pick: z.number().nullable(),
	matches: z.number(),
	days: z.number(),
	total: z.number(),
	covered: z.number(),
	coverage: z.enum(['complete', 'incomplete']),
	buy: z.number().nullable().optional()
});
var tierImpactSchema = z.object({
	before: impactWindowSchema,
	after: impactWindowSchema
});
var impactSchema = z
	.object({
		closed: z.boolean(),
		all: tierImpactSchema,
		high: tierImpactSchema
	})
	.nullable()
	.optional();
var changeGroupSchema = z.object({
	ability: z.string().nullable(),
	bullets: z.array(z.string())
});
var propertyEvents = sqliteTable(
	'property_events',
	{
		changelogId: text('changelog_id')
			.notNull()
			.references(() => changelogs.id),
		entityType: text('entity_type', { enum: ['hero', 'item'] }).notNull(),
		entityId: integer('entity_id').notNull(),
		abilitySlug: text('ability_slug'),
		groupIndex: integer('group_index').notNull(),
		bulletIndex: integer('bullet_index').notNull(),
		property: text('property').notNull(),
		qualifier: text('qualifier').notNull(),
		oldValue: text('old_value').notNull(),
		newValue: text('new_value').notNull(),
		digest: text('digest').notNull(),
		extractionVersion: integer('extraction_version').notNull(),
		previousChangelogId: text('previous_changelog_id').references(() => changelogs.id),
		previousOld: text('previous_old'),
		previousNew: text('previous_new')
	},
	(table) => ({
		pk: primaryKey({
			columns: [
				table.changelogId,
				table.entityType,
				table.entityId,
				table.groupIndex,
				table.bulletIndex
			]
		}),
		entityIdx: index('idx_property_events_entity').on(table.entityType, table.entityId)
	})
);
var insertChangelogHeroSchema = createInsertSchema(changelogHeroes, {
	changeGroups: z
		.array(changeGroupSchema.extend({ abilitySlug: z.string().min(1).nullable() }))
		.nullable(),
	impact: impactSchema
});
var changelogItems = sqliteTable(
	'changelog_items',
	{
		changelogId: text('changelog_id')
			.notNull()
			.references(() => changelogs.id),
		itemId: integer('item_id')
			.notNull()
			.references(() => items.id),
		changeGroups: text('change_groups', { mode: 'json' }).$type(),
		impact: text('impact', { mode: 'json' }).$type(),
		boughtBy: text('bought_by', { mode: 'json' }).$type()
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.itemId] }),
		itemIdIdx: index('changelog_items_item_id_idx').on(table.itemId)
	})
);
var insertChangelogItemSchema = createInsertSchema(changelogItems, {
	changeGroups: z.array(changeGroupSchema).nullable(),
	impact: impactSchema
});
//#endregion
//#region ../lib/db/src/client.ts
var libsqlInstance = null;
function getLibsqlDb() {
	if (!libsqlInstance) {
		const DATABASE_URL = process.env.DATABASE_URL;
		if (!DATABASE_URL) throw new Error('DATABASE_URL environment variable is required');
		libsqlInstance = drizzle(createClient({ url: DATABASE_URL }), {
			schema: schema_exports
		});
	}
	return libsqlInstance;
}
//#endregion
//#region ../lib/db/src/queries.ts
/**
 * Entity history rows carry the entity's own scoped bullets — never the full patch
 * body. Selecting `contentText` here put the full prose of every patch into the
 * prerendered HTML of all ~200 hero/item pages, so the column list is deliberate.
 */
var ENTITY_HISTORY_COLUMNS = {
	id: changelogs.id,
	title: changelogs.title,
	slug: changelogs.slug,
	pubDate: changelogs.pubDate,
	author: changelogs.author
};
async function getAllChangelogs(db) {
	return db.select().from(changelogs).all();
}
async function getAllChangelogSlugs(db) {
	return (await db.select({ slug: changelogs.slug }).from(changelogs).all()).map(
		(r) => r.slug
	);
}
function getPatchArchive(db) {
	return db
		.select({
			title: changelogs.title,
			slug: changelogs.slug,
			pubDate: changelogs.pubDate
		})
		.from(changelogs)
		.orderBy(desc(changelogs.pubDate))
		.all();
}
async function getChangelogBySlug(db, slug) {
	const changelog = await db
		.select()
		.from(changelogs)
		.where(eq(changelogs.slug, slug))
		.get();
	if (changelog) return changelog;
	return (
		(
			await db
				.select()
				.from(changelogAliases)
				.innerJoin(changelogs, eq(changelogAliases.changelogId, changelogs.id))
				.where(eq(changelogAliases.slug, slug))
				.get()
		)?.changelogs ?? null
	);
}
async function getAllHeroes(db) {
	return db.select().from(heroes).all();
}
var itemColumns = Object.fromEntries(
	Object.entries(getTableColumns(items)).filter(([name]) => name !== 'context')
);
async function getAllItems(db) {
	return db.select(itemColumns).from(items).all();
}
async function getItemContext(db, itemId) {
	return (
		(
			await db
				.select({ context: items.context })
				.from(items)
				.where(eq(items.id, itemId))
				.get()
		)?.context ?? null
	);
}
async function getHeroAbilityContexts(db, heroId) {
	return (
		await db
			.select({
				slug: heroAbilities.slug,
				context: heroAbilities.context
			})
			.from(heroAbilities)
			.where(eq(heroAbilities.heroId, heroId))
			.orderBy(heroAbilities.position)
			.all()
	).flatMap(({ slug, context }) =>
		context
			? [
					{
						slug,
						context
					}
				]
			: []
	);
}
async function getHeroBySlug(db, slug) {
	return (
		(await db
			.select()
			.from(heroes)
			.where(eq(heroes.slug, canonicalSlug(slug)))
			.get()) ?? null
	);
}
async function getItemBySlug(db, slug) {
	return (
		(await db
			.select(itemColumns)
			.from(items)
			.where(eq(items.slug, canonicalSlug(slug)))
			.get()) ?? null
	);
}
async function getHeroAbilities(db, heroId) {
	return db
		.select({
			name: heroAbilities.name,
			slug: heroAbilities.slug,
			image: heroAbilities.image,
			description: heroAbilities.description,
			assetId: heroAbilities.assetId
		})
		.from(heroAbilities)
		.where(eq(heroAbilities.heroId, heroId))
		.orderBy(heroAbilities.position)
		.all();
}
/**
 * Released heroes only, and that filter is load-bearing rather than cosmetic: three
 * ability slugs are shared with unreleased heroes (`full-auto`, `pulse-grenade`,
 * `demontrigger-blitz`). Restricted to released heroes the set is 152 slugs, all
 * distinct, which is what lets `/ability/<slug>` be a flat route with no tiebreak.
 */
async function getReleasedAbilities(db) {
	return db
		.select({
			slug: heroAbilities.slug,
			heroId: heroAbilities.heroId
		})
		.from(heroAbilities)
		.innerJoin(heroes, eq(heroes.id, heroAbilities.heroId))
		.where(eq(heroes.isReleased, true))
		.orderBy(heroAbilities.slug)
		.all();
}
async function getAbilityBySlug(db, slug) {
	const match = await db
		.select({
			name: heroAbilities.name,
			slug: heroAbilities.slug,
			image: heroAbilities.image,
			description: heroAbilities.description,
			assetId: heroAbilities.assetId,
			heroId: heroes.id,
			heroName: heroes.name,
			heroSlug: heroes.slug,
			heroType: heroes.heroType,
			heroImages: heroes.images
		})
		.from(heroAbilities)
		.innerJoin(heroes, eq(heroes.id, heroAbilities.heroId))
		.where(and(eq(heroes.isReleased, true), eq(heroAbilities.slug, canonicalSlug(slug))))
		.get();
	if (!match) return null;
	return {
		ability: {
			name: match.name,
			slug: match.slug,
			image: match.image,
			description: match.description,
			assetId: match.assetId
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
async function getChangelogAbilityIcons(db, changelogId) {
	return db
		.select({
			heroId: heroAbilities.heroId,
			slug: heroAbilities.slug,
			image: heroAbilities.image
		})
		.from(heroAbilities)
		.innerJoin(changelogHeroes, eq(heroAbilities.heroId, changelogHeroes.heroId))
		.where(eq(changelogHeroes.changelogId, changelogId))
		.orderBy(heroAbilities.heroId, heroAbilities.position)
		.all();
}
/**
 * No limit by design: the page bills itself as the canonical history and derives
 * "Patches" and "Tracked since" from these rows, so a cap silently reported the
 * oldest of the newest N as the first-ever patch. Bounded by the changelog count.
 */
async function getChangelogsByHeroId(db, heroId) {
	return (
		await db
			.select({
				...ENTITY_HISTORY_COLUMNS,
				changeGroups: changelogHeroes.changeGroups,
				impact: changelogHeroes.impact,
				stats: changelogs.stats,
				relatedItems: changelogHeroes.relatedItems,
				abilityOrder: changelogHeroes.abilityOrder
			})
			.from(changelogs)
			.innerJoin(changelogHeroes, eq(changelogs.id, changelogHeroes.changelogId))
			.where(eq(changelogHeroes.heroId, heroId))
			.orderBy(desc(changelogs.pubDate))
			.all()
	).map((row) => ({
		...row,
		changeCount: countBullets(row.changeGroups)
	}));
}
async function getPropertyLinks(db, entityType, entityId) {
	return (
		await db
			.select({
				changelogId: propertyEvents.changelogId,
				groupIndex: propertyEvents.groupIndex,
				bulletIndex: propertyEvents.bulletIndex,
				property: propertyEvents.property,
				previousOld: propertyEvents.previousOld,
				previousNew: propertyEvents.previousNew,
				previousSlug: changelogs.slug,
				previousPubDate: changelogs.pubDate
			})
			.from(propertyEvents)
			.innerJoin(changelogs, eq(changelogs.id, propertyEvents.previousChangelogId))
			.where(
				and(
					eq(propertyEvents.entityType, entityType),
					eq(propertyEvents.entityId, entityId)
				)
			)
			.all()
	).flatMap((row) =>
		row.previousOld !== null && row.previousNew !== null
			? [
					{
						...row,
						previousOld: row.previousOld,
						previousNew: row.previousNew
					}
				]
			: []
	);
}
async function getItemChangesInPatches(db, pairs) {
	if (pairs.length === 0) return [];
	const wanted = new Set(pairs.map((pair) => `${pair.changelogId}:${pair.itemId}`));
	return (
		await db
			.select({
				changelogId: changelogItems.changelogId,
				itemId: changelogItems.itemId,
				name: items.name,
				image: items.image,
				changeGroups: changelogItems.changeGroups
			})
			.from(changelogItems)
			.innerJoin(items, eq(items.id, changelogItems.itemId))
			.where(
				inArray(changelogItems.changelogId, [
					...new Set(pairs.map((pair) => pair.changelogId))
				])
			)
			.all()
	).flatMap((row) =>
		wanted.has(`${row.changelogId}:${row.itemId}`) && row.changeGroups?.length
			? [
					{
						...row,
						changeGroups: row.changeGroups
					}
				]
			: []
	);
}
/** See getChangelogsByHeroId — deliberately uncapped for the same reason. */
async function getChangelogsByItemId(db, itemId) {
	return (
		await db
			.select({
				...ENTITY_HISTORY_COLUMNS,
				changeGroups: changelogItems.changeGroups,
				impact: changelogItems.impact,
				stats: changelogs.stats,
				boughtBy: changelogItems.boughtBy
			})
			.from(changelogs)
			.innerJoin(changelogItems, eq(changelogs.id, changelogItems.changelogId))
			.where(eq(changelogItems.itemId, itemId))
			.orderBy(desc(changelogs.pubDate))
			.all()
	).map((row) => ({
		...row,
		changeCount: countBullets(row.changeGroups)
	}));
}
/**
 * Newest patch date per entity, keyed by id. The sitemap's whole job is telling
 * crawlers a hero page changed after a patch touched that hero, so these URLs
 * shipping without <lastmod> wasted the one signal that matters here.
 */
async function lastModifiedByEntity(db, link, entityId) {
	const rows = await db
		.select({
			id: entityId,
			lastModified: sql`MAX(${changelogs.pubDate})`
		})
		.from(link)
		.innerJoin(changelogs, eq(changelogs.id, link.changelogId))
		.groupBy(entityId)
		.all();
	return new Map(rows.map((row) => [row.id, row.lastModified]));
}
function getHeroLastModified(db) {
	return lastModifiedByEntity(db, changelogHeroes, changelogHeroes.heroId);
}
function getItemLastModified(db) {
	return lastModifiedByEntity(db, changelogItems, changelogItems.itemId);
}
async function getAbilityLastModified(db) {
	const rows = await db.all(sql`
		SELECT json_extract(groups.value, '$.abilitySlug') AS abilitySlug,
			MAX(${changelogs.pubDate}) AS lastModified
		FROM ${changelogHeroes}
		JOIN ${heroes} ON ${heroes.id} = ${changelogHeroes.heroId}
		JOIN ${changelogs} ON ${changelogs.id} = ${changelogHeroes.changelogId},
			json_each(${changelogHeroes.changeGroups}) AS groups
		WHERE ${heroes.isReleased} = 1 AND abilitySlug IS NOT NULL
		GROUP BY abilitySlug
	`);
	return new Map(rows.map((row) => [row.abilitySlug, row.lastModified]));
}
function heroIconImage() {
	const preferred = HERO_IMAGE_KEYS.icon.map(
		(key) => sql`NULLIF(json_extract(${heroes.images}, ${`$.${key}`}), '')`
	);
	return sql`COALESCE(${sql.join(preferred, sql`, `)},
		(SELECT value FROM json_each(${heroes.images}) WHERE value != '' LIMIT 1), '')`;
}
async function getHeroIconsByIds(db, ids) {
	if (ids.length === 0) return [];
	return db
		.select({
			id: heroes.id,
			name: heroes.name,
			slug: heroes.slug,
			image: heroIconImage()
		})
		.from(heroes)
		.where(inArray(heroes.id, [...new Set(ids)]))
		.all();
}
function groupBulletCount(column) {
	return sql`CASE WHEN ${column} IS NULL THEN NULL ELSE COALESCE(
		(SELECT SUM(json_array_length(json_extract(value, '$.bullets'))) FROM json_each(${column})), 0
	) END`;
}
async function getChangelogIcons(db, changelogIds) {
	const [heroRows, itemRows] = await Promise.all([
		db
			.select({
				changelogId: changelogHeroes.changelogId,
				id: heroes.id,
				src: heroIconImage(),
				alt: heroes.name,
				slug: heroes.slug,
				heroType: heroes.heroType,
				changeCount: groupBulletCount(changelogHeroes.changeGroups)
			})
			.from(changelogHeroes)
			.innerJoin(heroes, eq(changelogHeroes.heroId, heroes.id))
			.where(inArray(changelogHeroes.changelogId, changelogIds))
			.orderBy(heroes.name)
			.all(),
		db
			.select({
				changelogId: changelogItems.changelogId,
				id: items.id,
				src: items.image,
				alt: items.name,
				slug: items.slug,
				itemCategory: items.category,
				changeCount: groupBulletCount(changelogItems.changeGroups)
			})
			.from(changelogItems)
			.innerJoin(items, eq(changelogItems.itemId, items.id))
			.where(inArray(changelogItems.changelogId, changelogIds))
			.orderBy(items.name)
			.all()
	]);
	const result = {};
	for (const { changelogId, ...hero } of heroRows)
		(result[changelogId] ??= {
			heroes: [],
			items: []
		}).heroes.push({
			...hero,
			type: 'hero'
		});
	for (const { changelogId, itemCategory, ...item } of itemRows)
		(result[changelogId] ??= {
			heroes: [],
			items: []
		}).items.push({
			...item,
			type: 'item',
			itemCategory: itemCategory ?? void 0
		});
	return result;
}
var feedIndexes = /* @__PURE__ */ new WeakMap();
function getFeedIndex(db) {
	let index = feedIndexes.get(db);
	if (!index) {
		index = buildFeedIndex(db);
		feedIndexes.set(db, index);
	}
	return index;
}
async function buildFeedIndex(db) {
	const [rows, heroRefs, itemRefs, heroes$2, items$2] = await Promise.all([
		db
			.select({
				id: changelogs.id,
				slug: changelogs.slug,
				title: changelogs.title,
				date: changelogs.pubDate,
				author: changelogs.author,
				authorImage: changelogs.authorImage,
				previewImage: changelogs.previewImage,
				majorUpdate: changelogs.majorUpdate,
				contentText: changelogs.contentText
			})
			.from(changelogs)
			.orderBy(desc(changelogs.pubDate))
			.all(),
		db
			.select({
				changelogId: changelogHeroes.changelogId,
				id: changelogHeroes.heroId,
				groups: changelogHeroes.changeGroups
			})
			.from(changelogHeroes)
			.all(),
		db
			.select({
				changelogId: changelogItems.changelogId,
				id: changelogItems.itemId,
				groups: changelogItems.changeGroups
			})
			.from(changelogItems)
			.all(),
		db
			.select({
				id: heroes.id,
				name: heroes.name,
				slug: heroes.slug,
				src: heroIconImage(),
				heroType: heroes.heroType
			})
			.from(heroes)
			.where(
				inArray(
					heroes.id,
					db.select({ id: changelogHeroes.heroId }).from(changelogHeroes)
				)
			)
			.orderBy(heroes.name)
			.all(),
		db
			.select({
				id: items.id,
				name: items.name,
				slug: items.slug,
				src: items.image,
				category: items.category
			})
			.from(items)
			.where(
				inArray(items.id, db.select({ id: changelogItems.itemId }).from(changelogItems))
			)
			.orderBy(items.name)
			.all()
	]);
	const group = (refs) => {
		const byChangelog = /* @__PURE__ */ new Map();
		for (const { changelogId, id, groups } of refs) {
			const list = byChangelog.get(changelogId) ?? [];
			list.push({
				id,
				changeCount: countBullets(groups)
			});
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
		heroes: heroes$2.map((hero) => ({
			...hero,
			type: 'hero'
		})),
		items: items$2.map(({ category, ...item }) => ({
			...item,
			type: 'item',
			itemCategory: category ?? void 0
		}))
	};
}
async function getFeedText(db) {
	const rows = await db
		.select({
			id: changelogs.id,
			text: changelogs.contentText
		})
		.from(changelogs)
		.all();
	return Object.fromEntries(rows.map((row) => [row.id, row.text ?? '']));
}
async function renderableSlugs(db, table, link) {
	return (
		await db
			.selectDistinct({ slug: table.slug })
			.from(table)
			.where(
				sql`${table.isReleased} = 1 OR ${table.id} IN (SELECT ${link} FROM ${link.table})`
			)
			.orderBy(table.slug)
			.all()
	).map((row) => row.slug);
}
function getRenderableHeroSlugs(db) {
	return renderableSlugs(db, heroes, changelogHeroes.heroId);
}
function getRenderableItemSlugs(db) {
	return renderableSlugs(db, items, changelogItems.itemId);
}
async function getFeedGroups(db) {
	const [heroRows, itemRows] = await Promise.all([
		db
			.select({
				changelogId: changelogHeroes.changelogId,
				id: changelogHeroes.heroId,
				groups: changelogHeroes.changeGroups
			})
			.from(changelogHeroes)
			.all(),
		db
			.select({
				changelogId: changelogItems.changelogId,
				id: changelogItems.itemId,
				groups: changelogItems.changeGroups
			})
			.from(changelogItems)
			.all()
	]);
	const groups = {};
	for (const row of heroRows) groups[`${row.changelogId}:hero:${row.id}`] = row.groups;
	for (const row of itemRows) groups[`${row.changelogId}:item:${row.id}`] = row.groups;
	return groups;
}
//#endregion
//#region ../lib/db/src/patchReading.ts
/** Build-time inputs for one patch; the app projects these before serialization. */
async function getPatchReadingData(db, changelogId) {
	const [heroes$1, items$1, abilities, links] = await Promise.all([
		db
			.select({
				id: heroes.id,
				name: heroes.name,
				groups: changelogHeroes.changeGroups,
				abilityOrder: changelogHeroes.abilityOrder
			})
			.from(changelogHeroes)
			.innerJoin(heroes, eq(heroes.id, changelogHeroes.heroId))
			.where(eq(changelogHeroes.changelogId, changelogId))
			.all(),
		db
			.select({
				id: items.id,
				name: items.name,
				slug: items.slug,
				groups: changelogItems.changeGroups,
				context: items.context,
				boughtBy: changelogItems.boughtBy,
				impact: changelogItems.impact
			})
			.from(changelogItems)
			.innerJoin(items, eq(items.id, changelogItems.itemId))
			.where(eq(changelogItems.changelogId, changelogId))
			.all(),
		db
			.select({
				heroId: heroAbilities.heroId,
				name: heroAbilities.name,
				slug: heroAbilities.slug,
				context: heroAbilities.context,
				image: heroAbilities.image,
				assetId: heroAbilities.assetId
			})
			.from(heroAbilities)
			.innerJoin(changelogHeroes, eq(changelogHeroes.heroId, heroAbilities.heroId))
			.where(eq(changelogHeroes.changelogId, changelogId))
			.all(),
		db
			.select({
				entityType: propertyEvents.entityType,
				entityId: propertyEvents.entityId,
				changelogId: propertyEvents.changelogId,
				groupIndex: propertyEvents.groupIndex,
				bulletIndex: propertyEvents.bulletIndex,
				property: propertyEvents.property,
				digest: propertyEvents.digest,
				extractionVersion: propertyEvents.extractionVersion,
				previousOld: propertyEvents.previousOld,
				previousNew: propertyEvents.previousNew,
				previousSlug: changelogs.slug,
				previousPubDate: changelogs.pubDate
			})
			.from(propertyEvents)
			.innerJoin(changelogs, eq(changelogs.id, propertyEvents.previousChangelogId))
			.where(eq(propertyEvents.changelogId, changelogId))
			.all()
	]);
	return {
		heroes: heroes$1,
		items: items$1,
		abilities,
		links,
		heroIcons: await getHeroIconsByIds(
			db,
			items$1.flatMap((item) => item.boughtBy?.heroes.map((hero) => hero.id) ?? [])
		)
	};
}
//#endregion
export {
	getLibsqlDb as A,
	getItemContext as C,
	getReleasedAbilities as D,
	getPropertyLinks as E,
	insertHeroSchema as F,
	insertItemSchema as I,
	items as L,
	insertChangelogHeroSchema as M,
	insertChangelogItemSchema as N,
	getRenderableHeroSlugs as O,
	insertHeroAbilitySchema as P,
	schema_exports as R,
	getItemChangesInPatches as S,
	getPatchArchive as T,
	getHeroAbilityContexts as _,
	getAllChangelogs as a,
	getHeroLastModified as b,
	getChangelogAbilityIcons as c,
	getChangelogsByHeroId as d,
	getChangelogsByItemId as f,
	getHeroAbilities as g,
	getFeedText as h,
	getAllChangelogSlugs as i,
	heroes as j,
	getRenderableItemSlugs as k,
	getChangelogBySlug as l,
	getFeedIndex as m,
	getAbilityBySlug as n,
	getAllHeroes as o,
	getFeedGroups as p,
	getAbilityLastModified as r,
	getAllItems as s,
	getPatchReadingData as t,
	getChangelogIcons as u,
	getHeroBySlug as v,
	getItemLastModified as w,
	getItemBySlug as x,
	getHeroIconsByIds as y
};
