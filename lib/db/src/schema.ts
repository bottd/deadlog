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
		category: text('category'),
		pubDate: text('pub_date').notNull(),
		majorUpdate: integer('major_update', { mode: 'boolean' }).notNull().default(false),
		parentChange: text('parent_change'),
		contentText: text('content_text')
	},
	// SQLite serves ORDER BY … DESC from an ASC index via a backward scan, so no
	// ordering modifiers here.
	(table) => ({
		pubDateIdx: index('idx_changelogs_pub_date').on(table.pubDate),
		slugIdx: index('idx_changelogs_slug').on(table.slug),
		parentChangeIdx: index('idx_changelogs_parent_change').on(
			table.parentChange,
			table.pubDate
		)
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
		description: text('description')
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
	isReleased: integer('is_released', { mode: 'boolean' }).notNull().default(false)
});

export const insertItemSchema = createInsertSchema(items, {
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
		changeGroups: text('change_groups', { mode: 'json' }).$type<
			{ ability: string | null; bullets: string[] }[]
		>()
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.heroId] }),
		heroIdIdx: index('changelog_heroes_hero_id_idx').on(table.heroId)
	})
);

const changeGroupsSchema = z
	.array(z.object({ ability: z.string().nullable(), bullets: z.array(z.string()) }))
	.nullable();

export const insertChangelogHeroSchema = createInsertSchema(changelogHeroes, {
	changeGroups: changeGroupsSchema
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
		changeGroups: text('change_groups', { mode: 'json' }).$type<
			{ ability: string | null; bullets: string[] }[]
		>()
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.itemId] }),
		itemIdIdx: index('changelog_items_item_id_idx').on(table.itemId)
	})
);

export const insertChangelogItemSchema = createInsertSchema(changelogItems, {
	changeGroups: changeGroupsSchema
});
