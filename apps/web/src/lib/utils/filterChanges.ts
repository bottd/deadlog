import type { ChangelogContentJson, Note } from '@deadlog/db';
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
	fullContent?: string;
	contentJson?: ChangelogContentJson | null;
	updates?: FilteredChangelog[];
	majorUpdate?: boolean;
}

type EntityContentMap = Readonly<
	Record<string, { id?: number; notes?: readonly Note[] }>
>;

/** Collect entity names from content, optionally filtering by selection and/or search query */
function collectNames(
	content: EntityContentMap | undefined,
	selected?: ReadonlySet<string>,
	query?: string
): Set<string> {
	if (!content) return new Set();

	const normalizedQuery = query?.toLowerCase().trim();
	const result = new Set<string>();

	for (const [name, data] of Object.entries(content)) {
		if (selected && !selected.has(name)) continue;

		if (normalizedQuery) {
			const matchesName = name.toLowerCase().includes(normalizedQuery);
			const matchesNotes = data.notes?.some((n) =>
				n.text.toLowerCase().includes(normalizedQuery)
			);
			if (!matchesName && !matchesNotes) continue;
		}

		result.add(name);
	}
	return result;
}

/** Check if search query matches changelog title or general notes */
function matchesGeneralContent(changelog: FilteredChangelog, query: string): boolean {
	const q = query.toLowerCase().trim();
	if (!q) return false;
	return (
		changelog.title.toLowerCase().includes(q) ||
		changelog.contentJson?.notes?.some((n) => n.text.toLowerCase().includes(q)) ||
		false
	);
}

/** Core logic for getting visible entity names based on filters */
function getVisibleNames(
	changelog: FilteredChangelog,
	entityKey: 'heroes' | 'items',
	selected: ReadonlySet<string>,
	otherSelected: ReadonlySet<string>,
	searchQuery: string
): Set<string> | null {
	const hasFilter = selected.size > 0;
	const hasOtherFilter = otherSelected.size > 0;
	const query = searchQuery.trim();

	// No filters active - show all (null) or none if other type is filtered
	if (!hasFilter && !query) {
		return hasOtherFilter ? new Set() : null;
	}

	const content = changelog.contentJson?.[entityKey] as EntityContentMap | undefined;

	// Only entity filter (no search) - show selected entities
	if (hasFilter && !query) {
		return collectNames(content, selected);
	}

	// Search matches title/general notes - show all entities of this type
	if (matchesGeneralContent(changelog, query)) {
		return collectNames(content);
	}

	// Search by query, then intersect with selection if needed
	const matched = collectNames(content, undefined, query);
	if (hasFilter) {
		const intersected = new Set<string>();
		for (const name of matched) {
			if (selected.has(name)) intersected.add(name);
		}
		return intersected;
	}

	return matched.size > 0 ? matched : null;
}

export function getVisibleHeroNames(
	changelog: FilteredChangelog,
	filterState: FilterState
): Set<string> | null {
	return getVisibleNames(
		changelog,
		'heroes',
		filterState.selectedHeroNames,
		filterState.selectedItemNames,
		filterState.searchQuery
	);
}

export function getVisibleItemNames(
	changelog: FilteredChangelog,
	filterState: FilterState
): Set<string> | null {
	return getVisibleNames(
		changelog,
		'items',
		filterState.selectedItemNames,
		filterState.selectedHeroNames,
		filterState.searchQuery
	);
}

/** Check if entity is mentioned in general notes but doesn't have its own section */
function isMentionedOnlyInGeneralNotes(
	changelog: FilteredChangelog,
	entityName: string,
	entityKey: 'heroes' | 'items'
): boolean {
	const content = changelog.contentJson?.[entityKey];
	if (content && entityName in content) return false;

	return (
		changelog.contentJson?.notes?.some((n) =>
			n.text.toLowerCase().includes(entityName.toLowerCase())
		) ?? false
	);
}

export function shouldShowGeneralNotes(
	changelog: FilteredChangelog,
	filterState: FilterState
): boolean {
	const { selectedHeroNames, selectedItemNames, searchQuery } = filterState;
	const query = searchQuery.trim();

	// No filters - don't highlight general notes
	if (!selectedHeroNames.size && !selectedItemNames.size && !query) {
		return false;
	}

	// Search query matches general notes
	if (query && matchesGeneralContent(changelog, query)) {
		return true;
	}

	// Check if any selected entity is only mentioned in general notes
	for (const name of selectedHeroNames) {
		if (isMentionedOnlyInGeneralNotes(changelog, name, 'heroes')) return true;
	}
	for (const name of selectedItemNames) {
		if (isMentionedOnlyInGeneralNotes(changelog, name, 'items')) return true;
	}

	return false;
}
