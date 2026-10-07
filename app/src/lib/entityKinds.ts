/** Entity vocabulary. Appearance is selected by data-entity-kind in CSS. */
export const ENTITY_KINDS = {
	hero: {
		label: 'Hero',
		plural: 'heroes'
	},
	item: {
		label: 'Item',
		plural: 'items'
	}
} as const;

export type EntityKind = keyof typeof ENTITY_KINDS;
