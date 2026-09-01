export interface ChangelogFilters {
	hero?: string[];
	item?: string[];
	q?: string;
	major?: boolean;
}

export const MAX_QUERY_LENGTH = 200;
export const MAX_ENTITY_FILTERS = 20;
export const INITIAL_LOAD_COUNT = 15;

/** One encoding for the filter set — shared by the URL store and the API fetch. */
export function filtersToSearchParams(filters: ChangelogFilters): URLSearchParams {
	const params = new URLSearchParams();
	if (filters.hero?.length) params.set('hero', filters.hero.join(','));
	if (filters.item?.length) params.set('item', filters.item.join(','));
	if (filters.q) params.set('q', filters.q);
	if (filters.major) params.set('major', 'true');
	return params;
}

export const changelogsListKey = (filters: ChangelogFilters = {}) =>
	['deadlog', 'changelogs', 'list', filters] as const;
