import { entityNameAliases } from '@deadlog/utils';
import { parseCSV } from '$lib/utils/csv';

export interface ChangelogFilters {
	hero?: string[];
	item?: string[];
	q?: string;
	major?: boolean;
}

export const MAX_QUERY_LENGTH = 200;
export const MAX_ENTITY_FILTERS = 20;
export const INITIAL_LOAD_COUNT = 15;

function normalizeEntityFilters(names: readonly string[] = []): string[] {
	const seen = new Set<string>();
	return names
		.map((name) => name.trim().replace(/\s+/g, ' '))
		.filter((name) => {
			const key = entityNameAliases(name).at(-1) ?? '';
			if (!key || seen.has(key)) return false;
			seen.add(key);
			return true;
		});
}

export function normalizeFilters(
	filters: ChangelogFilters = {}
): Required<ChangelogFilters> {
	return {
		hero: normalizeEntityFilters(filters.hero),
		item: normalizeEntityFilters(filters.item),
		q: filters.q?.trim() ?? '',
		major: filters.major === true
	};
}

export function parseFilters(params: URLSearchParams): Required<ChangelogFilters> {
	return normalizeFilters({
		hero: parseCSV(params.get('hero')),
		item: parseCSV(params.get('item')),
		q: params.get('q') ?? '',
		major: params.get('major') === 'true'
	});
}

/** One encoding for the filter set — shared by the URL store and the API fetch. */
export function filtersToSearchParams(filters: ChangelogFilters): URLSearchParams {
	filters = normalizeFilters(filters);
	const params = new URLSearchParams();
	if (filters.hero?.length) params.set('hero', filters.hero.join(','));
	if (filters.item?.length) params.set('item', filters.item.join(','));
	if (filters.q) params.set('q', filters.q);
	if (filters.major) params.set('major', 'true');
	return params;
}

export function changelogsListKey(filters: ChangelogFilters = {}) {
	const normalized = normalizeFilters(filters);
	const names = (values: string[]) =>
		values.map((name) => entityNameAliases(name).at(-1) ?? '').sort();
	return [
		'deadlog',
		'changelogs',
		'list',
		{
			...normalized,
			hero: names(normalized.hero),
			item: names(normalized.item)
		}
	] as const;
}
