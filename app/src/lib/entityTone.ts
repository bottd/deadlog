/**
 * Heroes read as `primary`, items as `signal`. Every badge, dot, count and directory
 * repeated that pairing inline; this is the one table they all read.
 *
 * Class names are spelled out as literals so UnoCSS's extractor still sees them.
 */
export const ENTITY_TONE = {
	hero: {
		label: 'Hero',
		plural: 'heroes',
		text: 'text-primary',
		dot: 'bg-primary',
		subtle: 'bg-primary/10',
		chip: 'border border-primary/30 bg-primary/10',
		badgeVariant: 'default'
	},
	item: {
		label: 'Item',
		plural: 'items',
		text: 'text-signal',
		dot: 'bg-signal',
		subtle: 'bg-signal/10',
		chip: 'border border-signal/30 bg-signal/10',
		badgeVariant: 'signal'
	}
} as const;

export type EntityKind = keyof typeof ENTITY_TONE;
