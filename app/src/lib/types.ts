export type {
	ChangelogAbilityIcon,
	ChangelogEntityIcon,
	EnrichedHero,
	EnrichedItem,
	EntityIcon
} from '@deadlog/scraper';

import type { ChangelogEntityIcon } from '@deadlog/scraper';

/** The `toc` export of a compiled .mg module. */
export type { TocEntry as MogTocEntry } from 'vite-plugin-mog';

export interface ChangelogEntry {
	id: string;
	/** The .mg file path — basis of the canonical patch URL. */
	slug: string;
	sourceUrl?: string;
	title: string;
	date: Date;
	author: string;
	authorImage?: string;
	previewImage?: string | null;
	summary?: string;
	icons?: {
		heroes: ChangelogEntityIcon[];
		items: ChangelogEntityIcon[];
	};
	updates?: ChangelogEntry[];
	majorUpdate?: boolean;
}

export type ChangelogWireEntry = Omit<ChangelogEntry, 'date' | 'updates'> & {
	date: string;
	updates?: ChangelogWireEntry[];
};
