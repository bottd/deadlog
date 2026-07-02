export interface ChangelogFilters {
	hero?: string[];
	item?: string[];
	q?: string;
	/** initial page size — pagination offsets are derived from it */
	count?: number;
}

export const queryKeys = {
	all: ['deadlog'] as const,

	changelogs: () => [...queryKeys.all, 'changelogs'] as const,
	changelogsList: (filters: ChangelogFilters = {}) =>
		[...queryKeys.changelogs(), 'list', filters] as const
};

export type QueryKeys = typeof queryKeys;
