export interface ChangelogFilters {
	hero?: string[];
	item?: string[];
	q?: string;
}

export const queryKeys = {
	all: ['deadlog'] as const,

	meta: () => [...queryKeys.all, 'meta'] as const,
	heroList: () => [...queryKeys.meta(), 'heroes'] as const,
	itemList: () => [...queryKeys.meta(), 'items'] as const,

	changelogs: () => [...queryKeys.all, 'changelogs'] as const,
	changelogsList: (filters: ChangelogFilters = {}) =>
		[...queryKeys.changelogs(), 'list', filters] as const,

	heroes: () => [...queryKeys.all, 'heroes'] as const,
	hero: (slug: string) => [...queryKeys.heroes(), slug] as const,

	items: () => [...queryKeys.all, 'items'] as const,
	item: (slug: string) => [...queryKeys.items(), slug] as const,

	changes: () => [...queryKeys.all, 'changes'] as const,
	change: (id: string) => [...queryKeys.changes(), id] as const
};

export type QueryKeys = typeof queryKeys;
