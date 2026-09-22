import { z } from 'zod';
import { displayedPropertyKeys, stripInlineSvg } from '../entityContext';

// The API returns far more than the build reads; zod strips unknown keys, so the
// schemas list only the fields consumers actually use.
const heroSchema = z.object({
	id: z.number(),
	name: z.string(),
	class_name: z.string(),
	hero_type: z.string().optional(),
	images: z.record(z.string(), z.string()),
	items: z
		.object({
			signature1: z.string().optional(),
			signature2: z.string().optional(),
			signature3: z.string().optional(),
			signature4: z.string().optional()
		})
		.optional(),
	player_selectable: z.boolean().optional(),
	disabled: z.boolean().optional(),
	in_development: z.boolean().optional()
});

const DESCRIPTION_FIELDS = [
	'desc',
	'active',
	'passive',
	't1_desc',
	't2_desc',
	't3_desc'
] as const;

const markup = z.string().nullish().catch(undefined);
const descriptionSchema = z
	.object({
		desc: markup,
		active: markup,
		passive: markup,
		t1_desc: markup,
		t2_desc: markup,
		t3_desc: markup
	})
	.nullish()
	.catch(null);

const propertyFields = {
	value: z.union([z.number(), z.string()]).nullish().catch(undefined),
	label: z.string().nullish().catch(undefined),
	prefix: z.string().nullish().catch(undefined),
	postfix: z.string().nullish().catch(undefined)
};
const propertySchema = z.object({ ...propertyFields, scales: z.boolean().optional() });

const itemFields = {
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
	disabled: z.boolean().optional(),
	description: descriptionSchema
};

const itemSchema = z.object({
	...itemFields,
	properties: z.record(z.string(), propertySchema).optional().catch(undefined)
});

const apiItemSchema = z
	.object({
		...itemFields,
		properties: z
			.record(
				z.string(),
				z.object({ ...propertyFields, scale_function: z.unknown().optional() })
			)
			.nullish()
			.catch(undefined),
		tooltip_sections: z.unknown().optional(),
		tooltip_details: z.unknown().optional()
	})
	.transform(({ properties, tooltip_sections, tooltip_details, ...item }) => {
		const description = item.description && { ...item.description };
		for (const field of DESCRIPTION_FIELDS) {
			const text = description?.[field];
			if (description && text) description[field] = stripInlineSvg(text);
		}

		const shown: z.infer<typeof itemSchema>['properties'] = {};
		for (const key of displayedPropertyKeys({ tooltip_sections, tooltip_details })) {
			const source = properties?.[key];
			if (!source) continue;
			const { scale_function, ...fields } = source;
			shown[key] = scale_function ? { ...fields, scales: true } : fields;
		}

		return {
			...item,
			description,
			...(Object.keys(shown).length > 0 ? { properties: shown } : {})
		};
	});

export const heroesApiResponseSchema = z.array(heroSchema);
export const itemsApiResponseSchema = z.array(apiItemSchema);
export const itemsSnapshotSchema = z.array(itemSchema);

export const entitySnapshotSchema = z.object({
	schemaVersion: z.literal(2).optional(),
	clientVersion: z.number().int().positive().optional(),
	language: z.string().optional(),
	collectedAt: z.string().optional(),
	heroes: heroesApiResponseSchema,
	items: itemsSnapshotSchema
});

export type HeroesApiResponse = z.infer<typeof heroesApiResponseSchema>;
export type ItemsApiResponse = z.infer<typeof itemsSnapshotSchema>;

export function itemImage(item: ItemsApiResponse[number]): string {
	return item.shop_image_webp || item.shop_image || item.image_webp || item.image || '';
}
