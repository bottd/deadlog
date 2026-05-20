import { page } from '$app/state';
import { goto } from '$app/navigation';
import { building } from '$app/environment';
import { getContext, hasContext, setContext } from 'svelte';
import { parseCSV, toCSV } from '$lib/utils/csv';

export { parseCSV } from '$lib/utils/csv';

const SEARCH_PARAMS_KEY = Symbol('searchParams');
const GOTO_OPTS = { replaceState: false, keepFocus: true, noScroll: true } as const;

type ParamValues = Partial<{ hero: string[]; item: string[]; change: number; q: string }>;
type ParamValue = ParamValues[keyof ParamValues];

function serialize(value: ParamValue): string | null {
	if (value === undefined || value === '') return null;
	if (Array.isArray(value)) return value.length > 0 ? toCSV(value) : null;
	return String(value);
}

class SearchParamsStore {
	get hero(): string[] {
		return building ? [] : parseCSV(page.url.searchParams.get('hero'));
	}

	get item(): string[] {
		return building ? [] : parseCSV(page.url.searchParams.get('item'));
	}

	get change(): number | undefined {
		if (building) return undefined;
		const val = page.url.searchParams.get('change');
		return val ? Number(val) : undefined;
	}

	get q(): string {
		return building ? '' : (page.url.searchParams.get('q') ?? '');
	}

	update(values: ParamValues) {
		if (building) return;
		const url = new URL(page.url);
		for (const [key, value] of Object.entries(values)) {
			const s = serialize(value as ParamValue);
			if (s === null) url.searchParams.delete(key);
			else url.searchParams.set(key, s);
		}
		goto(url.toString(), GOTO_OPTS);
	}

	reset() {
		if (building) return;
		goto('?', GOTO_OPTS);
	}

	toURLSearchParams(): URLSearchParams {
		const params = new URLSearchParams();
		const all: ParamValues = {
			hero: this.hero,
			item: this.item,
			change: this.change,
			q: this.q
		};
		for (const [key, value] of Object.entries(all)) {
			const s = serialize(value as ParamValue);
			if (s !== null) params.set(key, s);
		}
		return params;
	}
}

export function setSearchParams() {
	const instance = new SearchParamsStore();
	setContext(SEARCH_PARAMS_KEY, instance);
	return instance;
}

export function getSearchParams(): SearchParamsStore {
	if (!hasContext(SEARCH_PARAMS_KEY)) {
		throw new Error(
			'Search params not initialized. Call setSearchParams() in a parent component.'
		);
	}
	return getContext(SEARCH_PARAMS_KEY);
}
