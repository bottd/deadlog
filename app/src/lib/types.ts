export type { EnrichedHero, EnrichedItem, EntityIcon } from '@deadlog/scraper';

import type { EntityIcon } from '@deadlog/scraper';

/** The `toc` export of a compiled .mg module. */
export type { TocEntry as MogTocEntry } from 'vite-plugin-mog';

export interface ChangelogEntry {
	id: string;
	/** The .mg file path — basis of the canonical patch URL. */
	slug: string;
	title: string;
	date: Date;
	author: string;
	authorImage?: string;
	previewImage?: string | null;
	summary?: string;
	icons?: {
		heroes: EntityIcon[];
		items: EntityIcon[];
	};
	updates?: ChangelogEntry[];
	majorUpdate?: boolean;
}
