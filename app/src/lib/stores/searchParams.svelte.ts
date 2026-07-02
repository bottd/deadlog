import { page } from '$app/state';
import { goto } from '$app/navigation';
import { building } from '$app/environment';
import { parseCSV, toCSV } from '$lib/utils/csv';

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
		const val = Number(page.url.searchParams.get('change'));
		return Number.isFinite(val) && val !== 0 ? val : undefined;
	}

	get q(): string {
		return building ? '' : (page.url.searchParams.get('q') ?? '');
	}

	// page.url only reflects an update() once its goto's server load finishes, so a
	// second rapid update (e.g. two quick HeroRail toggles) would read-modify-write
	// the stale URL and drop the first one. Track the in-flight target instead.
	#pending: URL | null = null;

	update(values: ParamValues) {
		if (building) return;
		const url = new URL(this.#pending ?? page.url);
		for (const [key, value] of Object.entries(values)) {
			const s = serialize(value as ParamValue);
			if (s === null) url.searchParams.delete(key);
			else url.searchParams.set(key, s);
		}
		this.#navigate(url);
	}

	reset() {
		if (building) return;
		const url = new URL(page.url);
		url.search = '';
		this.#navigate(url);
	}

	#navigate(url: URL) {
		this.#pending = url;
		goto(url.toString(), GOTO_OPTS).finally(() => {
			if (this.#pending === url) this.#pending = null;
		});
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

// Stateless singleton — every getter reads the reactive page.url, so no per-tree
// context is needed. Import { searchParams } anywhere.
export const searchParams = new SearchParamsStore();
