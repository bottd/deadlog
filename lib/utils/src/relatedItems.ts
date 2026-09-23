export type RelatedStatus = 'complete' | 'no-window' | 'insufficient-sample';

export interface RelatedItem {
	id: number;
	buyers: number;
	after?: number;
}

export interface RelatedItems {
	methodVersion: number;
	status: RelatedStatus;
	appearances: number;
	afterAppearances?: number;
	candidates: number[];
	items: RelatedItem[];
}

export const RELATED_ITEMS_LIMIT = 3;

export interface ShareChange {
	before: number;
	after: number | null;
}

const afterRatio = (
	count: number | undefined,
	total: number | undefined
): number | null => (total && count !== undefined ? count / total : null);

export const relatedShare = (related: RelatedItems, item: RelatedItem): ShareChange => ({
	before: item.buyers / related.appearances,
	after: afterRatio(item.after, related.afterAppearances)
});

export interface AbilityOrderEntry {
	id: number;
	before: number;
	after?: number;
}

export interface AbilityOrder {
	methodVersion: number;
	matches: number;
	afterMatches?: number;
	abilities: AbilityOrderEntry[];
}

export interface BoughtByHero {
	id: number;
	buyers: number;
	appearances: number;
	afterBuyers?: number;
	afterAppearances?: number;
}

export interface BoughtBy {
	methodVersion: number;
	heroes: BoughtByHero[];
}

export const BOUGHT_BY_LIMIT = 3;

export const abilityShare = (
	order: AbilityOrder,
	entry: AbilityOrderEntry
): ShareChange => ({
	before: entry.before / order.matches,
	after: afterRatio(entry.after, order.afterMatches)
});

export const boughtByShare = (hero: BoughtByHero): ShareChange => ({
	before: hero.buyers / hero.appearances,
	after: afterRatio(hero.afterBuyers, hero.afterAppearances)
});
