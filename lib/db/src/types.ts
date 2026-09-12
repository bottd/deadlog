import type { ItemCategory } from '@deadlog/utils';

export type EntityType = 'hero' | 'item';

export interface EntityIcon {
	id: number;
	src: string;
	alt: string;
	slug: string;
	type: EntityType;
	heroType?: string | null;
	itemCategory?: ItemCategory;
}

export interface ChangelogEntityIcon extends EntityIcon {
	/** Null means a mention without attributed bullets. */
	changeCount: number | null;
}

export interface EntityChangeGroup {
	ability: string | null;
	bullets: string[];
}

export interface ChangelogMatch {
	id: number;
	type: EntityType;
	name: string;
	slug: string;
	changeCount: number | null;
	changes: { ability: string | null; text: string }[];
}

/** A bounded, JSON-native feed result; detail/history pages have their own shapes. */
export interface PatchSummary {
	id: string;
	slug: string;
	title: string;
	date: string;
	author: string;
	authorImage: string;
	previewImage: string | null;
	majorUpdate: boolean;
	summary: string;
	icons: { heroes: ChangelogEntityIcon[]; items: ChangelogEntityIcon[] };
	counts: { heroes: number; items: number };
	matches: ChangelogMatch[];
}
