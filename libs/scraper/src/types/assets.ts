import { z } from 'zod';

export type HeroId = number;
export type ItemId = number;

export const ENTITY_TYPES = {
	HERO: 'hero',
	ITEM: 'item'
} as const;

export type EntityType = (typeof ENTITY_TYPES)[keyof typeof ENTITY_TYPES];

export interface EntityIcon {
	id: number;
	src: string;
	alt: string;
	type: EntityType;
}

// Schema for stat values that have a value and display name
const statValueSchema = z.object({
	value: z.number(),
	display_stat_name: z.string()
});

// Schema for cost bonus entries
const costBonusSchema = z.object({
	gold_threshold: z.number(),
	bonus: z.number(),
	percent_on_graph: z.number()
});

// Schema for complex item/weapon property values
// Making this very permissive since the API returns various structures
const complexPropertySchema = z.union([
	z.object({
		value: z.union([z.string(), z.number()]).optional(),
		can_set_token_override: z.boolean().optional(),
		css_class: z.string().optional(),
		disable_value: z.string().optional(),
		label: z.string().optional(),
		postfix: z.string().optional(),
		postvalue_label: z.string().optional(),
		icon: z.string().optional()
	}),
	z.array(z.number()), // Some properties are arrays
	z.record(z.string(), z.any()) // Some properties are arbitrary objects
]);

const heroImagesSchema = z.record(z.string(), z.string());

const heroDescriptionSchema = z.object({
	lore: z.string().optional(),
	playstyle: z.string().optional(),
	role: z.string().optional()
});

const heroSchema = z.object({
	id: z.number(),
	name: z.string(),
	class_name: z.string(),
	description: heroDescriptionSchema.optional(),
	hero_type: z.string().optional(),
	tags: z.array(z.string()).optional(),
	starting_stats: z.record(z.string(), statValueSchema).optional(),
	images: heroImagesSchema,
	recommended_upgrades: z.array(z.string()).optional(),
	recommended_ability_order: z.array(z.string()).optional(),
	cost_bonuses: z.record(z.string(), z.array(costBonusSchema)).optional(),
	physics: z.record(z.string(), z.number()).optional(),
	colors: z.record(z.string(), z.array(z.number())).optional(),
	player_selectable: z.boolean().optional(),
	disabled: z.boolean().optional(),
	in_development: z.boolean().optional()
});

export type Hero = z.infer<typeof heroSchema>;
export type HeroImages = z.infer<typeof heroImagesSchema>;

const itemSchema = z.object({
	id: z.number(),
	class_name: z.string(),
	name: z.string(),
	type: z.enum(['weapon', 'ability', 'upgrade']),
	heroes: z.array(z.number()).optional(),
	properties: z.record(z.string(), complexPropertySchema).optional(),
	weapon_info: z
		.record(
			z.string(),
			z.union([complexPropertySchema, z.number(), z.boolean(), z.array(z.number())])
		)
		.optional(),
	image: z.string().optional(),
	image_webp: z.string().optional()
});

export type Item = z.infer<typeof itemSchema>;
export type ItemType = Item['type'];

export const heroesApiResponseSchema = z.array(heroSchema);
export const itemsApiResponseSchema = z.array(itemSchema);

export type HeroesApiResponse = z.infer<typeof heroesApiResponseSchema>;
export type ItemsApiResponse = z.infer<typeof itemsApiResponseSchema>;

interface EntityDb {
	id: number;
	name: string;
	className: string;
	images: string;
	isReleased: number;
}

export interface HeroDb extends EntityDb {
	heroType: string | null;
}

export interface ItemDb extends EntityDb {
	type: 'weapon' | 'ability' | 'upgrade';
}

export interface EnrichedHero extends Omit<HeroDb, 'images' | 'isReleased'> {
	images: HeroImages;
	isReleased: boolean;
}

export interface EnrichedItem extends Omit<ItemDb, 'images' | 'isReleased'> {
	images: { png?: string; webp?: string };
	isReleased: boolean;
}
