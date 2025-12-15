import type { ChangelogContentJson, Note } from '@deadlog/db';
import type { EntityType, EntityIcon } from '@deadlog/scraper';
import { ENTITY_TYPES } from '@deadlog/scraper';

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

type EntityKey = 'heroes' | 'items';

interface EntityData {
	id?: number;
	notes?: readonly Note[];
}

type EntityContentMap = Readonly<Record<string, EntityData>>;

function collectContentNames(
	content?: EntityContentMap,
	selectedNames?: ReadonlySet<string>,
	searchQuery?: string
): Set<string> {
	const names = new Set<string>();
	if (!content) return names;

	const query = searchQuery?.toLowerCase().trim();

	for (const [entityName, entityData] of Object.entries(content)) {
		// Check if this entity is selected (if filter exists)
		if (selectedNames && !selectedNames.has(entityName)) continue;

		if (query) {
			const nameMatches = entityName.toLowerCase().includes(query);
			const notesMatch = entityData.notes?.some((note) =>
				note.text.toLowerCase().includes(query)
			);
			if (nameMatches || notesMatch) {
				names.add(entityName);
			}
		} else {
			names.add(entityName);
		}
	}
	return names;
}

function getVisibleEntityNames(
	changelog: FilteredChangelog,
	filterState: FilterState,
	entityType: EntityType,
	selectedNames: ReadonlySet<string>,
	otherSelectedNames: ReadonlySet<string>
): Set<string> | null {
	const { searchQuery } = filterState;
	const entityKey: EntityKey = entityType === ENTITY_TYPES.HERO ? 'heroes' : 'items';

	const hasFilter = selectedNames.size > 0;
	const hasOtherFilter = otherSelectedNames.size > 0;
	const hasSearchQuery = searchQuery.trim().length > 0;

	if (!hasFilter && !hasSearchQuery) {
		return hasOtherFilter ? new Set<string>() : null;
	}

	const content = changelog.contentJson?.[entityKey] as EntityContentMap | undefined;
	const query = searchQuery.toLowerCase().trim();

	if (hasFilter && !hasSearchQuery) {
		return collectContentNames(content, selectedNames);
	}

	if (
		changelog.title.toLowerCase().includes(query) ||
		changelog.contentJson?.notes?.some((note) => note.text.toLowerCase().includes(query))
	) {
		return collectContentNames(content);
	}

	const visibleNames = collectContentNames(content, undefined, query);

	if (hasFilter) {
		const filtered = new Set<string>();
		for (const name of visibleNames) {
			if (selectedNames.has(name)) filtered.add(name);
		}
		return filtered;
	}

	return visibleNames.size > 0 ? visibleNames : null;
}

export function getVisibleHeroNames(
	changelog: FilteredChangelog,
	filterState: FilterState
): Set<string> | null {
	return getVisibleEntityNames(
		changelog,
		filterState,
		ENTITY_TYPES.HERO,
		filterState.selectedHeroNames,
		filterState.selectedItemNames
	);
}

export function getVisibleItemNames(
	changelog: FilteredChangelog,
	filterState: FilterState
): Set<string> | null {
	return getVisibleEntityNames(
		changelog,
		filterState,
		ENTITY_TYPES.ITEM,
		filterState.selectedItemNames,
		filterState.selectedHeroNames
	);
}

function isEntityInGeneralNotesOnly(
	changelog: FilteredChangelog,
	entityName: string,
	entityType: EntityType
): boolean {
	const entityKey: EntityKey = entityType === ENTITY_TYPES.HERO ? 'heroes' : 'items';

	const content = changelog.contentJson?.[entityKey];
	const hasContentSection = content && entityName in content;
	if (hasContentSection) return false;

	return (
		changelog.contentJson?.notes?.some((note) =>
			note.text.toLowerCase().includes(entityName.toLowerCase())
		) || false
	);
}

export function shouldShowGeneralNotes(
	changelog: FilteredChangelog,
	filterState: FilterState
): boolean {
	const { selectedHeroNames, selectedItemNames, searchQuery } = filterState;
	const hasHeroFilter = selectedHeroNames.size > 0;
	const hasItemFilter = selectedItemNames.size > 0;
	const hasSearchQuery = searchQuery.trim().length > 0;

	if (!hasHeroFilter && !hasItemFilter && !hasSearchQuery) {
		return false;
	}

	if (hasSearchQuery) {
		const query = searchQuery.toLowerCase().trim();
		const matchesGeneralNotes = changelog.contentJson?.notes?.some((note) =>
			note.text.toLowerCase().includes(query)
		);
		if (matchesGeneralNotes) return true;
	}

	if (hasHeroFilter) {
		for (const heroName of selectedHeroNames) {
			if (isEntityInGeneralNotesOnly(changelog, heroName, ENTITY_TYPES.HERO)) {
				return true;
			}
		}
	}

	if (hasItemFilter) {
		for (const itemName of selectedItemNames) {
			if (isEntityInGeneralNotesOnly(changelog, itemName, ENTITY_TYPES.ITEM)) {
				return true;
			}
		}
	}

	return false;
}
