/**
 * Centralized query key factory for TanStack Query
 * Ensures consistent keys across prefetching, queries, and invalidation
 */

// Filter types for changelog queries
export interface ChangelogFilters {
	hero?: string[];
	item?: string[];
	q?: string;
}

export const queryKeys = {
	all: ['deadlog'] as const,

	// Meta / Static data for dropdowns and navigation
	meta: () => [...queryKeys.all, 'meta'] as const,
	heroList: () => [...queryKeys.meta(), 'heroes'] as const,
	itemList: () => [...queryKeys.meta(), 'items'] as const,

	// Changelogs (unified for home page and filtered views)
	// Using same key structure allows cache sharing between
	// main feed filters and entity detail pages
	changelogs: () => [...queryKeys.all, 'changelogs'] as const,
	changelogsList: (filters: ChangelogFilters = {}) =>
		[...queryKeys.changelogs(), 'list', filters] as const,

	// Hero detail pages
	heroes: () => [...queryKeys.all, 'heroes'] as const,
	hero: (slug: string) => [...queryKeys.heroes(), slug] as const,

	// Item detail pages
	items: () => [...queryKeys.all, 'items'] as const,
	item: (slug: string) => [...queryKeys.items(), slug] as const,

	// Individual change pages
	changes: () => [...queryKeys.all, 'changes'] as const,
	change: (id: string) => [...queryKeys.changes(), id] as const
};

// Type helpers for query keys
export type QueryKeys = typeof queryKeys;
