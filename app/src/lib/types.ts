export type {
	EnrichedHero,
	EnrichedItem,
	EntityType,
	EntityIcon,
	HeroId,
	ItemId
} from '@deadlog/scraper';
export { ENTITY_TYPES } from '@deadlog/scraper';

import type { EntityIcon } from '@deadlog/scraper';

export interface ChangelogEntry {
	id: string;
	title: string;
	date: Date;
	author: string;
	authorImage?: string;
	icons?: {
		heroes: EntityIcon[];
		items: EntityIcon[];
	};
	updates?: ChangelogEntry[];
	majorUpdate?: boolean;
}
