import { g as entityNameAliases } from './src2.js';
//#region src/lib/utils/csv.ts
function parseCSV(value) {
	if (!value) return [];
	return value
		.split(',')
		.map((entry) => entry.trim())
		.filter(Boolean);
}
//#endregion
//#region src/lib/queries/keys.ts
function normalizeEntityFilters(names = []) {
	const seen = /* @__PURE__ */ new Set();
	return names
		.map((name) => name.trim().replace(/\s+/g, ' '))
		.filter((name) => {
			const key = entityNameAliases(name).at(-1) ?? '';
			if (!key || seen.has(key)) return false;
			seen.add(key);
			return true;
		});
}
function normalizeFilters(filters = {}) {
	return {
		hero: normalizeEntityFilters(filters.hero),
		item: normalizeEntityFilters(filters.item),
		q: filters.q?.trim() ?? '',
		major: filters.major === true
	};
}
function parseFilters(params) {
	return normalizeFilters({
		hero: parseCSV(params.get('hero')),
		item: parseCSV(params.get('item')),
		q: params.get('q') ?? '',
		major: params.get('major') === 'true'
	});
}
/** One encoding for the filter set — shared by the URL store and the API fetch. */
function filtersToSearchParams(filters) {
	filters = normalizeFilters(filters);
	const params = new URLSearchParams();
	if (filters.hero?.length) params.set('hero', filters.hero.join(','));
	if (filters.item?.length) params.set('item', filters.item.join(','));
	if (filters.q) params.set('q', filters.q);
	if (filters.major) params.set('major', 'true');
	return params;
}
function changelogsListKey(filters = {}) {
	const normalized = normalizeFilters(filters);
	const names = (values) =>
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
	];
}
//#endregion
export {
	parseFilters as i,
	filtersToSearchParams as n,
	normalizeFilters as r,
	changelogsListKey as t
};
