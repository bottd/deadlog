import { sqliteTable, text, integer, primaryKey, index } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const changelogs = sqliteTable('changelogs', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	slug: text('slug'), // Path to .norg file (e.g., "2025/01-23-update")
	author: text('author').notNull(),
	authorImage: text('author_image').notNull(),
	category: text('category'),
	pubDate: text('pub_date').notNull(),
	majorUpdate: integer('major_update', { mode: 'boolean' }).notNull().default(false),
	parentChange: text('parent_change'),
	contentText: text('content_text')
});

export type InsertChangelog = z.infer<typeof insertChangelogSchema>;
export const insertChangelogSchema = createInsertSchema(changelogs);

export type SelectChangelog = z.infer<typeof selectChangelogSchema>;
export const selectChangelogSchema = createSelectSchema(changelogs);

export const heroes = sqliteTable('heroes', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	className: text('class_name').notNull(),
	heroType: text('hero_type'),
	images: text('images', { mode: 'json' }).notNull().$type<Record<string, string>>(),
	isReleased: integer('is_released', { mode: 'boolean' }).notNull().default(true)
});

export type InsertHero = z.infer<typeof insertHeroSchema>;
export const insertHeroSchema = createInsertSchema(heroes, {
	images: z.record(z.string(), z.string())
});

export type SelectHero = z.infer<typeof selectHeroSchema>;
export const selectHeroSchema = createSelectSchema(heroes, {
	images: z.record(z.string(), z.string())
});

export const items = sqliteTable('items', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	className: text('class_name').notNull(),
	type: text('type', { enum: ['weapon', 'ability', 'upgrade'] }).notNull(),
	image: text('image').notNull(),
	isReleased: integer('is_released', { mode: 'boolean' }).notNull().default(false)
});

export type InsertItem = z.infer<typeof insertItemSchema>;
export const insertItemSchema = createInsertSchema(items, {
	image: z.string().min(1, 'Image URL must be provided'),
	type: z.enum(['weapon', 'ability', 'upgrade'])
});

export type SelectItem = z.infer<typeof selectItemSchema>;
export const selectItemSchema = createSelectSchema(items, {
	image: z.string(),
	type: z.enum(['weapon', 'ability', 'upgrade'])
});

export const metadata = sqliteTable('metadata', {
	key: text('key').primaryKey(),
	value: text('value')
});

export type InsertMetadata = z.infer<typeof insertMetadataSchema>;
export const insertMetadataSchema = createInsertSchema(metadata);

export type SelectMetadata = z.infer<typeof selectMetadataSchema>;
export const selectMetadataSchema = createSelectSchema(metadata);

export const changelogHeroes = sqliteTable(
	'changelog_heroes',
	{
		changelogId: text('changelog_id')
			.notNull()
			.references(() => changelogs.id),
		heroId: integer('hero_id')
			.notNull()
			.references(() => heroes.id)
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.heroId] }),
		heroIdIdx: index('changelog_heroes_hero_id_idx').on(table.heroId)
	})
);

export const insertChangelogHeroSchema = createInsertSchema(changelogHeroes);
export const selectChangelogHeroSchema = createSelectSchema(changelogHeroes);
export type InsertChangelogHero = z.infer<typeof insertChangelogHeroSchema>;
export type SelectChangelogHero = z.infer<typeof selectChangelogHeroSchema>;

export const changelogItems = sqliteTable(
	'changelog_items',
	{
		changelogId: text('changelog_id')
			.notNull()
			.references(() => changelogs.id),
		itemId: integer('item_id')
			.notNull()
			.references(() => items.id)
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.itemId] }),
		itemIdIdx: index('changelog_items_item_id_idx').on(table.itemId)
	})
);

export const insertChangelogItemSchema = createInsertSchema(changelogItems);
export const selectChangelogItemSchema = createSelectSchema(changelogItems);
export type InsertChangelogItem = z.infer<typeof insertChangelogItemSchema>;
export type SelectChangelogItem = z.infer<typeof selectChangelogItemSchema>;
