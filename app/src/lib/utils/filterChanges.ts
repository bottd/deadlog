import type { EntityIcon } from '@deadlog/scraper';

export interface FilterState {
	selectedHeroNames: ReadonlySet<string>;
	selectedItemNames: ReadonlySet<string>;
	searchQuery: string;
}

export interface FilteredChangelog {
	id: string;
	title: string;
	date: Date;
	author: string;
	authorImage?: string;
	icons?: {
		heroes: EntityIcon[];
		items: EntityIcon[];
	};
	updates?: FilteredChangelog[];
	majorUpdate?: boolean;
}

export function getVisibleHeroNames(
	changelog: FilteredChangelog,
	filterState: FilterState
): Set<string> | null {
	void changelog;
	void filterState;
	return null;
}

export function getVisibleItemNames(
	changelog: FilteredChangelog,
	filterState: FilterState
): Set<string> | null {
	void changelog;
	void filterState;
	return null;
}

export function shouldShowGeneralNotes(
	changelog: FilteredChangelog,
	filterState: FilterState
): boolean {
	void changelog;
	void filterState;
	return false;
}
