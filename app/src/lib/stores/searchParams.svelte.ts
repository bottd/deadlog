import { page } from '$app/state';
import { goto } from '$app/navigation';
import { building } from '$app/environment';
import { toast } from 'svelte-sonner';
import { plural } from '@deadlog/utils';
import { parseCSV } from '$lib/utils/csv';
import {
	filtersToSearchParams,
	MAX_ENTITY_FILTERS,
	MAX_QUERY_LENGTH,
	type ChangelogFilters
} from '$lib/queries/keys';

const GOTO_OPTS = { replaceState: false, keepFocus: true, noScroll: false } as const;

type ParamValues = Partial<{
	hero: string[];
	item: string[];
	q: string;
	major: boolean;
}>;
type ParamValue = ParamValues[keyof ParamValues];

function serialize(value: ParamValue): string | null {
	if (value === undefined || value === '' || value === false) return null;
	if (Array.isArray(value)) return value.length > 0 ? value.join(',') : null;
	return String(value);
}

class SearchParamsStore {
	#pendingParams = $state<URLSearchParams | null>(null);
	#navigationId = 0;
	#pendingTarget = '';
	#hasReachedTarget = false;

	#getParams(): URLSearchParams {
		if (building) return new URLSearchParams();
		if (!this.#pendingParams) return page.url.searchParams;

		const current = `${page.url.pathname}${page.url.search}`;
		if (current === this.#pendingTarget) this.#hasReachedTarget = true;
		return this.#hasReachedTarget && current !== this.#pendingTarget
			? page.url.searchParams
			: this.#pendingParams;
	}

	get hero(): string[] {
		return parseCSV(this.#getParams().get('hero')).slice(0, MAX_ENTITY_FILTERS);
	}

	get item(): string[] {
		return parseCSV(this.#getParams().get('item')).slice(0, MAX_ENTITY_FILTERS);
	}

	get q(): string {
		return (this.#getParams().get('q') ?? '').trim();
	}

	get major(): boolean {
		return this.#getParams().get('major') === 'true';
	}

	/** How many filters are active — the one source for badges and is-filtered checks. */
	get activeFilterCount(): number {
		return this.hero.length + this.item.length + (this.q ? 1 : 0) + (this.major ? 1 : 0);
	}

	/** A filter navigation started by this store is still in flight. */
	get isPending(): boolean {
		return this.#pendingParams !== null;
	}

	get heroAtCap(): boolean {
		return this.hero.length >= MAX_ENTITY_FILTERS;
	}

	/** `major` alone is not searching — it narrows the same feed. */
	get isSearching(): boolean {
		return this.hero.length > 0 || this.item.length > 0 || this.q !== '';
	}

	get filters(): Required<ChangelogFilters> {
		return { hero: this.hero, item: this.item, q: this.q, major: this.major };
	}

	update(values: ParamValues) {
		if (building) return;
		const nextParams = this.toURLSearchParams();
		let dropped = 0;
		for (const [key, value] of Object.entries(values)) {
			let normalized: ParamValue;
			if (Array.isArray(value)) {
				normalized = value.slice(0, MAX_ENTITY_FILTERS);
				dropped += value.length - normalized.length;
			} else if (key === 'q' && typeof value === 'string') {
				normalized = value.trim().slice(0, MAX_QUERY_LENGTH);
			} else {
				normalized = value;
			}
			const s = serialize(normalized);
			if (s === null) nextParams.delete(key);
			else nextParams.set(key, s);
		}
		if (dropped > 0) {
			toast.error(
				`Filter limit reached — ${MAX_ENTITY_FILTERS} heroes and ${MAX_ENTITY_FILTERS} items max. ` +
					`${dropped} ${plural(dropped, 'selection')} not applied.`
			);
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
		this.#pendingTarget = query ? `/?${query}` : '/';
		this.#hasReachedTarget = false;

		const finish = () => {
			if (navigationId === this.#navigationId) this.#pendingParams = null;
		};

		void goto(this.#pendingTarget, GOTO_OPTS).then(finish, finish);
	}

	toURLSearchParams(): URLSearchParams {
		return filtersToSearchParams(this.filters);
	}
}

// Shared singleton; URL reads stay reactive and pending navigation state prevents
// rapid updates from being based on an older page.url.
export const searchParams = new SearchParamsStore();
