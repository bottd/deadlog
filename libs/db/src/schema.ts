import { sqliteTable, text, integer, primaryKey, index } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export type ScalingPattern = z.infer<typeof scalingPatternSchema>;
export const scalingPatternSchema = z.object({
	text: z.string(),
	start: z.number(),
	end: z.number()
});

export type Note = z.infer<typeof noteSchema>;
export const noteSchema = z.object({
	text: z.string(),
	patterns: z.array(scalingPatternSchema)
});

export type HeroAbilityChange = z.infer<typeof heroAbilityChangeSchema>;
export const heroAbilityChangeSchema = z.object({
	abilityName: z.string(),
	abilityImage: z.string(),
	notes: z.array(noteSchema)
});

export type HeroChange = z.infer<typeof heroChangeSchema>;
export const heroChangeSchema = z.record(
	z.string(),
	z.object({
		id: z.number(),
		notes: z.array(noteSchema),
		abilities: z.array(heroAbilityChangeSchema).optional()
	})
);

export type ItemChange = z.infer<typeof itemChangeSchema>;
export const itemChangeSchema = z.record(
	z.string(),
	z.object({
		id: z.number(),
		notes: z.array(noteSchema)
	})
);

export type AbilityChange = z.infer<typeof abilityChangeSchema>;
export const abilityChangeSchema = z.record(
	z.string(),
	z.object({
		notes: z.array(noteSchema)
	})
);

export type ChangelogContentJson = z.infer<typeof changelogContentJsonSchema>;
export const changelogContentJsonSchema = z.object({
	notes: z.array(noteSchema),
	heroes: heroChangeSchema,
	items: itemChangeSchema,
	abilities: abilityChangeSchema
});

export const changelogs = sqliteTable('changelogs', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	contentJson: text('content_json', { mode: 'json' }).$type<ChangelogContentJson>(),
	author: text('author').notNull(),
	authorImage: text('author_image').notNull(),
	category: text('category'),
	guid: text('guid'),
	pubDate: text('pub_date').notNull(),
	majorUpdate: integer('major_update', { mode: 'boolean' }).notNull().default(false),
	parentChange: text('parent_change')
});

export type InsertChangelog = z.infer<typeof insertChangelogSchema>;
export const insertChangelogSchema = createInsertSchema(changelogs, {
	contentJson: changelogContentJsonSchema.optional()
});

export type SelectChangelog = z.infer<typeof selectChangelogSchema>;
export const selectChangelogSchema = createSelectSchema(changelogs, {
	contentJson: changelogContentJsonSchema.optional()
});

export const heroes = sqliteTable('heroes', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
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
	className: text('class_name').notNull(),
	type: text('type').notNull(),
	images: text('images', { mode: 'json' })
		.notNull()
		.$type<{ png?: string; webp?: string }>(),
	isReleased: integer('is_released', { mode: 'boolean' }).notNull().default(false)
});

export const itemImagesSchema = z
	.object({
		png: z.string().optional(),
		webp: z.string().optional()
	})
	.refine((data) => data.png || data.webp, {
		message: 'At least one image (png or webp) must be provided'
	});

export type InsertItem = z.infer<typeof insertItemSchema>;
export const insertItemSchema = createInsertSchema(items, {
	images: itemImagesSchema
});

export type SelectItem = z.infer<typeof selectItemSchema>;
export const selectItemSchema = createSelectSchema(items, {
	images: itemImagesSchema
});

export const metadata = sqliteTable('metadata', {
	key: text('key').primaryKey(),
	value: text('value')
});

export type InsertMetadata = z.infer<typeof insertMetadataSchema>;
export const insertMetadataSchema = createInsertSchema(metadata);

export type SelectMetadata = z.infer<typeof selectMetadataSchema>;
export const selectMetadataSchema = createSelectSchema(metadata);

export const changelogEntities = sqliteTable(
	'changelog_entities',
	{
		changelogId: text('changelog_id')
			.notNull()
			.references(() => changelogs.id),
		entityType: text('entity_type', { enum: ['hero', 'item'] }).notNull(),
		entityId: integer('entity_id').notNull(),
		entityName: text('entity_name').notNull(),
		imageSrc: text('image_src').notNull()
	},
	(table) => ({
		pk: primaryKey({ columns: [table.changelogId, table.entityType, table.entityId] })
	})
);

export const insertChangelogEntitySchema = createInsertSchema(changelogEntities, {
	entityType: z.enum(['hero', 'item'])
});
export const selectChangelogEntitySchema = createSelectSchema(changelogEntities, {
	entityType: z.enum(['hero', 'item'])
});
export type InsertChangelogEntity = z.infer<typeof insertChangelogEntitySchema>;
export type SelectChangelogEntity = z.infer<typeof selectChangelogEntitySchema>;

// Junction table: changelog to heroes (for efficient filtering)
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

// Junction table: changelog to items (for efficient filtering)
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
