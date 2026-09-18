import { page } from '$app/state';
import { goto } from '$app/navigation';
import { building } from '$app/environment';
import { toast } from 'svelte-sonner';
import { plural } from '@deadlog/utils';
import {
	filtersToSearchParams,
	normalizeFilters,
	parseFilters,
	MAX_ENTITY_FILTERS,
	MAX_QUERY_LENGTH,
	type ChangelogFilters
} from '$lib/queries/keys';

const GOTO_OPTS = { replaceState: false, keepFocus: true, noScroll: false } as const;

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
		return this.filters.hero;
	}

	get item(): string[] {
		return this.filters.item;
	}

	get q(): string {
		return this.#q;
	}

	get major(): boolean {
		return this.filters.major;
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

	/** Parsed once per URL change; every other getter reads this. */
	#filters = $derived.by((): Required<ChangelogFilters> => {
		const filters = parseFilters(this.#getParams());
		return {
			...filters,
			hero: filters.hero.slice(0, MAX_ENTITY_FILTERS),
			item: filters.item.slice(0, MAX_ENTITY_FILTERS)
		};
	});

	#q = $derived(this.#filters.q);

	get filters(): Required<ChangelogFilters> {
		return this.#filters;
	}

	update(values: ChangelogFilters) {
		if (building) return;
		const next = normalizeFilters({ ...this.filters, ...values });
		const dropped =
			Math.max(0, next.hero.length - MAX_ENTITY_FILTERS) +
			Math.max(0, next.item.length - MAX_ENTITY_FILTERS);
		next.hero = next.hero.slice(0, MAX_ENTITY_FILTERS);
		next.item = next.item.slice(0, MAX_ENTITY_FILTERS);
		next.q = next.q.slice(0, MAX_QUERY_LENGTH);
		if (dropped > 0) {
			toast.error(
				`Filter limit reached — ${MAX_ENTITY_FILTERS} heroes and ${MAX_ENTITY_FILTERS} items max. ` +
					`${dropped} ${plural(dropped, 'selection')} not applied.`
			);
		}
		this.#navigate(filtersToSearchParams(next));
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
