export type RelatedStatus = 'complete' | 'no-window' | 'insufficient-sample';

export interface RelatedItem {
	id: number;
	buyers: number;
}

export interface RelatedItems {
	methodVersion: number;
	status: RelatedStatus;
	appearances: number;
	candidates: number[];
	items: RelatedItem[];
}

export const RELATED_ITEMS_LIMIT = 3;

export function relatedShare(related: RelatedItems, item: RelatedItem): number {
	return item.buyers / related.appearances;
}
