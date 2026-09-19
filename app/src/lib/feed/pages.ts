import type { FeedFilters, FeedIndex } from '@deadlog/db';
import type { PatchSummary } from '$lib/types';
import { INITIAL_LOAD_COUNT } from '$lib/queries/keys';
import { assembleSummaries, queryFeed } from './assemble';

export const PAGE_SIZE = 12;

export const UNFILTERED: FeedFilters = {
	heroIds: [],
	itemIds: [],
	q: '',
	majorOnly: false
};

export interface FeedPage {
	changelogs: PatchSummary[];
	hasMore: boolean;
}

export function feedWindow(page: number) {
	return page === 0
		? { limit: INITIAL_LOAD_COUNT, offset: 0 }
		: { limit: PAGE_SIZE, offset: INITIAL_LOAD_COUNT + (page - 1) * PAGE_SIZE };
}

export function feedPageCount(total: number): number {
	return 1 + Math.ceil(Math.max(0, total - INITIAL_LOAD_COUNT) / PAGE_SIZE);
}

export function unfilteredFeedPage(index: FeedIndex, page: number): FeedPage {
	const window = feedWindow(page);
	const { rows, hasMore } = queryFeed(index, null, UNFILTERED, window);
	return {
		changelogs: assembleSummaries(
			rows,
			index,
			{ text: null, groups: null },
			{ isFirstPage: page === 0 }
		),
		hasMore
	};
}
