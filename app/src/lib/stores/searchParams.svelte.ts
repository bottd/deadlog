import { page } from '$app/state';
import { goto } from '$app/navigation';
import { building } from '$app/environment';
import { parseCSV, toCSV } from '$lib/utils/csv';

const GOTO_OPTS = { replaceState: false, keepFocus: true, noScroll: false } as const;

type ParamValues = Partial<{ hero: string[]; item: string[]; change: number; q: string }>;
type ParamValue = ParamValues[keyof ParamValues];

function serialize(value: ParamValue): string | null {
	if (value === undefined || value === '') return null;
	if (Array.isArray(value)) return value.length > 0 ? toCSV(value) : null;
	return String(value);
}

class SearchParamsStore {
	#pendingParams = $state<URLSearchParams | null>(null);
	#navigationId = 0;

	#getParams(): URLSearchParams {
		if (this.#pendingParams) return this.#pendingParams;
		return building ? new URLSearchParams() : page.url.searchParams;
	}

	get hero(): string[] {
		return parseCSV(this.#getParams().get('hero'));
	}

	get item(): string[] {
		return parseCSV(this.#getParams().get('item'));
	}

	get change(): number | undefined {
		const val = this.#getParams().get('change');
		return val ? Number(val) : undefined;
	}

	get q(): string {
		return this.#getParams().get('q') ?? '';
	}

	update(values: ParamValues) {
		if (building) return;
		const nextParams = new URLSearchParams(this.#getParams());
		for (const [key, value] of Object.entries(values)) {
			const s = serialize(value as ParamValue);
			if (s === null) nextParams.delete(key);
			else nextParams.set(key, s);
		}
		this.#navigate(nextParams);
	}

	reset() {
		if (building) return;
		this.#navigate(new URLSearchParams());
	}

	#navigate(nextParams: URLSearchParams) {
		this.#pendingParams = nextParams;
		const navigationId = ++this.#navigationId;
		const query = nextParams.toString();

		const finish = () => {
			if (navigationId === this.#navigationId) this.#pendingParams = null;
		};

		void goto(query ? `/?${query}` : '/', GOTO_OPTS).then(finish, finish);
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

// Shared singleton; URL reads stay reactive and pending navigation state prevents
// rapid updates from being based on an older page.url.
export const searchParams = new SearchParamsStore();
