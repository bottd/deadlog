import { sqliteTable, text, integer, primaryKey, index } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const changelogs = sqliteTable('changelogs', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	slug: text('slug'), // Path to .norg file (e.g., "2025/01-23-update")
	author: text('author').notNull(),
	authorImage: text('author_image').notNull(),
	previewImage: text('preview_image'),
	category: text('category'),
	pubDate: text('pub_date').notNull(),
	majorUpdate: integer('major_update', { mode: 'boolean' }).notNull().default(false),
	parentChange: text('parent_change'),
	contentText: text('content_text')
});

export type SelectChangelog = typeof changelogs.$inferSelect;

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
		changeCount: integer('change_count')
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.heroId] }),
		heroIdIdx: index('changelog_heroes_hero_id_idx').on(table.heroId)
	})
);

export const insertChangelogHeroSchema = createInsertSchema(changelogHeroes);

export const changelogItems = sqliteTable(
	'changelog_items',
	{
		changelogId: text('changelog_id')
			.notNull()
			.references(() => changelogs.id),
		itemId: integer('item_id')
			.notNull()
			.references(() => items.id),
		changeCount: integer('change_count')
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.itemId] }),
		itemIdIdx: index('changelog_items_item_id_idx').on(table.itemId)
	})
);

export const insertChangelogItemSchema = createInsertSchema(changelogItems);
