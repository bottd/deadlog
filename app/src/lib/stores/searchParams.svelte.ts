import { page } from '$app/state';
import { goto } from '$app/navigation';
import { building } from '$app/environment';
import { getContext, hasContext, setContext } from 'svelte';
import { z } from 'zod';

const SEARCH_PARAMS_KEY = Symbol('searchParams');

export function parseCSV(value: string | null): string[] {
	if (!value) return [];
	return value.split(',').filter(Boolean);
}

function toCSV(arr: string[]): string {
	return arr.join(',');
}

// Schema for server-side validation
export const paramSchema = z.object({
	hero: z.array(z.string()).default([]),
	item: z.array(z.string()).default([]),
	change: z.number().optional(),
	q: z.string().default('')
});

export type SearchParams = z.infer<typeof paramSchema>;

/** Parse URL search params on the server */
export function parseSearchParams(url: URL): SearchParams {
	return {
		hero: parseCSV(url.searchParams.get('hero')),
		item: parseCSV(url.searchParams.get('item')),
		change: url.searchParams.get('change')
			? Number(url.searchParams.get('change'))
			: undefined,
		q: url.searchParams.get('q') ?? ''
	};
}

/** Check if we can safely access URL search params (not during prerendering) */
function canAccessSearchParams(): boolean {
	// During build/prerender, URL search params aren't available
	if (building) return false;
	return true;
}

class SearchParamsStore {
	get hero(): string[] {
		if (!canAccessSearchParams()) return [];
		return parseCSV(page.url.searchParams.get('hero'));
	}

	set hero(value: string[]) {
		this.#updateParam('hero', value.length > 0 ? toCSV(value) : null);
	}

	get item(): string[] {
		if (!canAccessSearchParams()) return [];
		return parseCSV(page.url.searchParams.get('item'));
	}

	set item(value: string[]) {
		this.#updateParam('item', value.length > 0 ? toCSV(value) : null);
	}

	get change(): number | undefined {
		if (!canAccessSearchParams()) return undefined;
		const val = page.url.searchParams.get('change');
		return val ? Number(val) : undefined;
	}

	set change(value: number | undefined) {
		this.#updateParam('change', value !== undefined ? String(value) : null);
	}

	get q(): string {
		if (!canAccessSearchParams()) return '';
		return page.url.searchParams.get('q') ?? '';
	}

	set q(value: string) {
		this.#updateParam('q', value || null);
	}

	#updateParam(key: string, value: string | null) {
		if (!canAccessSearchParams()) return;
		const url = new URL(page.url);
		if (value === null) {
			url.searchParams.delete(key);
		} else {
			url.searchParams.set(key, value);
		}
		goto(url.toString(), { replaceState: false, keepFocus: true, noScroll: true });
	}

	update(values: Partial<{ hero: string[]; item: string[]; change: number; q: string }>) {
		if (!canAccessSearchParams()) return;
		const url = new URL(page.url);

		if ('hero' in values) {
			if (values.hero && values.hero.length > 0) {
				url.searchParams.set('hero', toCSV(values.hero));
			} else {
				url.searchParams.delete('hero');
			}
		}

		if ('item' in values) {
			if (values.item && values.item.length > 0) {
				url.searchParams.set('item', toCSV(values.item));
			} else {
				url.searchParams.delete('item');
			}
		}

		if ('change' in values) {
			if (values.change !== undefined) {
				url.searchParams.set('change', String(values.change));
			} else {
				url.searchParams.delete('change');
			}
		}

		if ('q' in values) {
			if (values.q) {
				url.searchParams.set('q', values.q);
			} else {
				url.searchParams.delete('q');
			}
		}

		goto(url.toString(), { replaceState: false, keepFocus: true, noScroll: true });
	}

	reset() {
		if (!canAccessSearchParams()) return;
		goto('?', { replaceState: false, keepFocus: true, noScroll: true });
	}

	toURLSearchParams(): URLSearchParams {
		const params = new URLSearchParams();
		if (this.hero.length > 0) params.set('hero', toCSV(this.hero));
		if (this.item.length > 0) params.set('item', toCSV(this.item));
		if (this.change !== undefined) params.set('change', String(this.change));
		if (this.q) params.set('q', this.q);
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
