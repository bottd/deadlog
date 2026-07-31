import { z } from 'zod';

export type EntityType = 'hero' | 'item';

export interface EntityIcon {
	id: number;
	src: string;
	alt: string;
	/** Entity-page slug, e.g. `/hero/{slug}`. */
	slug: string;
	type: EntityType;
	heroType?: string | null;
	itemCategory?: 'weapon' | 'vitality' | 'spirit';
}

// The API returns far more than the build reads; zod strips unknown keys, so the
// schemas list only the fields consumers actually use.
const heroSchema = z.object({
	id: z.number(),
	name: z.string(),
	class_name: z.string(),
	hero_type: z.string().optional(),
	images: z.record(z.string(), z.string()),
	player_selectable: z.boolean().optional(),
	disabled: z.boolean().optional(),
	in_development: z.boolean().optional()
});

const itemSchema = z.object({
	id: z.number(),
	class_name: z.string(),
	name: z.string(),
	type: z.enum(['weapon', 'ability', 'upgrade']),
	image: z.string().optional(),
	image_webp: z.string().optional(),
	shop_image: z.string().optional(),
	shop_image_webp: z.string().optional(),
	// Shop taxonomy, same endpoint: null when absent or an unexpected shape.
	item_slot_type: z.enum(['weapon', 'vitality', 'spirit']).nullish().catch(null),
	item_tier: z.number().int().positive().nullish().catch(null),
	shopable: z.boolean().optional(),
	disabled: z.boolean().optional()
});

export const heroesApiResponseSchema = z.array(heroSchema);
export const itemsApiResponseSchema = z.array(itemSchema);

export type HeroesApiResponse = z.infer<typeof heroesApiResponseSchema>;
export type ItemsApiResponse = z.infer<typeof itemsApiResponseSchema>;
