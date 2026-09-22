import {
	sqliteTable,
	text,
	integer,
	primaryKey,
	index,
	uniqueIndex
} from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';
import type {
	EntityContext,
	EntityImpact,
	PatchStats,
	RelatedItems
} from '@deadlog/utils';
import type { EntityChangeGroup, HeroChangeGroup } from './types';

export const changelogs = sqliteTable(
	'changelogs',
	{
		id: text('id').primaryKey(),
		title: text('title').notNull(),
		slug: text('slug').notNull(), // Path to .mg file (e.g., "2025/01-23-update")
		sourceUrl: text('source_url').notNull(),
		author: text('author').notNull(),
		authorImage: text('author_image').notNull(),
		previewImage: text('preview_image'),
		pubDate: text('pub_date').notNull(),
		majorUpdate: integer('major_update', { mode: 'boolean' }).notNull().default(false),
		contentText: text('content_text'),
		stats: text('stats', { mode: 'json' }).$type<PatchStats>()
	},
	// SQLite serves ORDER BY … DESC from an ASC index via a backward scan, so no
	// ordering modifiers here.
	(table) => ({
		pubDateIdx: index('idx_changelogs_pub_date').on(table.pubDate),
		slugIdx: uniqueIndex('idx_changelogs_slug').on(table.slug)
	})
);

export type SelectChangelog = typeof changelogs.$inferSelect;

export const changelogAliases = sqliteTable('changelog_aliases', {
	slug: text('slug').primaryKey(),
	changelogId: text('changelog_id')
		.notNull()
		.references(() => changelogs.id)
});

export const heroes = sqliteTable('heroes', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	className: text('class_name').notNull(),
	heroType: text('hero_type', { enum: ['marksman', 'mystic', 'brawler', 'assassin'] }),
	images: text('images', { mode: 'json' }).notNull().$type<Record<string, string>>(),
	isReleased: integer('is_released', { mode: 'boolean' }).notNull().default(true)
});

export const insertHeroSchema = createInsertSchema(heroes, {
	images: z.record(z.string(), z.string()),
	heroType: z.enum(['marksman', 'mystic', 'brawler', 'assassin']).nullable().catch(null)
});

export const heroAbilities = sqliteTable(
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
		context: text('context', { mode: 'json' }).$type<EntityContext>()
	},
	(table) => ({
		pk: primaryKey({ columns: [table.heroId, table.position] }),
		heroSlugIdx: uniqueIndex('hero_abilities_hero_slug_idx').on(table.heroId, table.slug)
	})
);

export const insertHeroAbilitySchema = createInsertSchema(heroAbilities, {
	position: z.number().int().min(1).max(4),
	image: z.string().min(1)
});

export const items = sqliteTable('items', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	className: text('class_name').notNull(),
	type: text('type', { enum: ['weapon', 'ability', 'upgrade'] }).notNull(),
	category: text('category', { enum: ['weapon', 'vitality', 'spirit'] }),
	tier: integer('tier'),
	image: text('image').notNull(),
	isReleased: integer('is_released', { mode: 'boolean' }).notNull().default(false),
	context: text('context', { mode: 'json' }).$type<EntityContext>()
});

export const insertItemSchema = createInsertSchema(items, {
	slug: z.string().min(1),
	image: z.string().min(1, 'Image URL must be provided'),
	type: z.enum(['weapon', 'ability', 'upgrade']),
	category: z.enum(['weapon', 'vitality', 'spirit']).nullable(),
	tier: z.number().int().positive().nullable()
});

export const metadata = sqliteTable('metadata', {
	key: text('key').primaryKey(),
	value: text('value')
});

export const changelogHeroes = sqliteTable(
	'changelog_heroes',
	{
		changelogId: text('changelog_id')
			.notNull()
			.references(() => changelogs.id),
		heroId: integer('hero_id')
			.notNull()
			.references(() => heroes.id),
		changeGroups: text('change_groups', { mode: 'json' }).$type<HeroChangeGroup[]>(),
		impact: text('impact', { mode: 'json' }).$type<EntityImpact>(),
		relatedItems: text('related_items', { mode: 'json' }).$type<RelatedItems>()
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.heroId] }),
		heroIdIdx: index('changelog_heroes_hero_id_idx').on(table.heroId)
	})
);

const impactWindowSchema = z.object({
	win: z.number().nullable(),
	pick: z.number().nullable(),
	matches: z.number(),
	days: z.number(),
	total: z.number().optional(),
	covered: z.number().optional(),
	coverage: z.enum(['complete', 'incomplete']).optional()
});
const tierImpactSchema = z.object({
	before: impactWindowSchema,
	after: impactWindowSchema
});
const impactSchema = z
	.object({ closed: z.boolean(), all: tierImpactSchema, high: tierImpactSchema })
	.nullable()
	.optional();

const changeGroupSchema = z.object({
	ability: z.string().nullable(),
	bullets: z.array(z.string())
});

export const propertyEvents = sqliteTable(
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

export const insertChangelogHeroSchema = createInsertSchema(changelogHeroes, {
	changeGroups: z
		.array(changeGroupSchema.extend({ abilitySlug: z.string().min(1).nullable() }))
		.nullable(),
	impact: impactSchema
});

export const changelogItems = sqliteTable(
	'changelog_items',
	{
		changelogId: text('changelog_id')
			.notNull()
			.references(() => changelogs.id),
		itemId: integer('item_id')
			.notNull()
			.references(() => items.id),
		changeGroups: text('change_groups', { mode: 'json' }).$type<EntityChangeGroup[]>(),
		impact: text('impact', { mode: 'json' }).$type<EntityImpact>()
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.itemId] }),
		itemIdIdx: index('changelog_items_item_id_idx').on(table.itemId)
	})
);

export const insertChangelogItemSchema = createInsertSchema(changelogItems, {
	changeGroups: z.array(changeGroupSchema).nullable(),
	impact: impactSchema
});
