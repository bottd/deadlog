import { RELATED_ITEMS_LIMIT, type RelatedItems } from '@deadlog/utils';
import {
	RELATED_METHOD_VERSION,
	RELATED_MIN_APPEARANCES,
	RELATED_MIN_BUYERS
} from './constants';
import type { DailyRow } from './types';

export interface RelatedInput {
	heroId: number;
	days: number[];
	heroRows: DailyRow[];
	candidates: number[];
	buyers: ReadonlyMap<number, DailyRow[]>;
}

const candidateFingerprint = (candidates: number[]): number[] =>
	[...new Set(candidates)].sort((a, b) => a - b);

export function isCurrentRelated(
	recorded: RelatedItems | null | undefined,
	candidates: number[]
): boolean {
	return (
		!!recorded &&
		recorded.methodVersion === RELATED_METHOD_VERSION &&
		recorded.candidates.join(',') === candidateFingerprint(candidates).join(',')
	);
}

function dailyMatches(rows: DailyRow[], heroId: number, days: Set<number>) {
	const byDay = new Map<number, number>();
	for (const row of rows) {
		if (row.entityId === heroId && days.has(row.day)) byDay.set(row.day, row.matches);
	}
	return byDay;
}

export function selectRelatedItems(input: RelatedInput): RelatedItems {
	const candidates = candidateFingerprint(input.candidates);
	const result = (
		status: RelatedItems['status'],
		appearances: number,
		items: RelatedItems['items'] = []
	): RelatedItems => ({
		methodVersion: RELATED_METHOD_VERSION,
		status,
		appearances,
		candidates,
		items
	});

	if (input.days.length === 0) return result('no-window', 0);

	const days = new Set(input.days);
	const played = dailyMatches(input.heroRows, input.heroId, days);
	const appearances = [...played.values()].reduce((sum, matches) => sum + matches, 0);
	if (appearances < RELATED_MIN_APPEARANCES)
		return result('insufficient-sample', appearances);

	const items = candidates.flatMap((id) => {
		const rows = input.buyers.get(id);
		if (!rows) throw new Error(`No buyer series was fetched for item ${id}`);
		const bought = dailyMatches(rows, input.heroId, days);
		let buyers = 0;
		for (const [day, matches] of bought) {
			if (matches > (played.get(day) ?? 0)) return [];
			buyers += matches;
		}
		return buyers >= RELATED_MIN_BUYERS ? [{ id, buyers }] : [];
	});

	items.sort((a, b) => b.buyers - a.buyers || a.id - b.id);
	return result('complete', appearances, items.slice(0, RELATED_ITEMS_LIMIT));
}
