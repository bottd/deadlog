import { createContext } from 'svelte';
import {
	entityNamesMatch,
	relatedShare,
	toSlug,
	RELATED_ITEMS_LIMIT,
	type PatchStats,
	type RelatedItems
} from '@deadlog/utils';
import { RELATED_MIN_APPEARANCES, RELATED_MIN_BUYERS } from '@deadlog/stats';
import type { ChangelogEntityIcon } from '@deadlog/db';
import type { PageContext } from '../entity/pageContext';
import type { PreviousChange } from '../entity/previousChanges';

export interface ReadingDetails {
	name: string;
	historyHref: string;
	context: PageContext;
}

export interface PatchReading {
	details: Record<string, ReadingDetails>;
	previous: Record<string, PreviousChange & { bullet: string }>;
}

export interface MogReadingManifest {
	stats: PatchStats | null;
	sections: { kind: 'hero' | 'item'; name: string; id: string }[];
	related: { name: string; record: RelatedItems }[];
}

export interface RelatedReading {
	before: NonNullable<PatchStats['before']>;
	items: {
		name: string;
		image: string;
		share: number;
		changeCount: number | null;
		href: string;
	}[];
}

export const detailKey = (kind: 'hero' | 'item', id: number, ability?: string | null) =>
	`${kind}:${id}${ability ? `:${toSlug(ability)}` : ''}`;
export const previousKey = (
	kind: 'hero' | 'item',
	id: number,
	group: number,
	bullet: number
) => `${kind}:${id}:${group}:${bullet}`;

export const [getReadingContext, setReadingContext] = createContext<
	PatchReading & {
		related: Record<string, RelatedReading>;
	}
>();

/** Only real changed item sections qualify; a full patch URL clears entity filters. */
export function resolveRelatedReading(
	manifest: MogReadingManifest | null,
	icons: { heroes: ChangelogEntityIcon[]; items: ChangelogEntityIcon[] },
	patchPath: string
): Record<string, RelatedReading> {
	const before = manifest?.stats?.before;
	if (!manifest || !before) return {};
	const entries = manifest.related.flatMap(({ name, record }) => {
		const hero = icons.heroes.find((hero) => entityNamesMatch(hero.alt, name));
		if (
			!hero ||
			record.status !== 'complete' ||
			record.appearances < RELATED_MIN_APPEARANCES
		)
			return [];
		const items = record.items
			.flatMap((recorded) => {
				if (recorded.buyers < RELATED_MIN_BUYERS || recorded.buyers > record.appearances)
					return [];
				const item = icons.items.find((item) => item.id === recorded.id);
				if (!item) return [];
				const sections = manifest.sections.filter(
					(section) => section.kind === 'item' && entityNamesMatch(section.name, item.alt)
				);
				if (sections.length !== 1) return [];
				return [
					{
						name: item.alt,
						image: item.src,
						share: relatedShare(record, recorded),
						changeCount: item.changeCount,
						href: `${patchPath}#${sections[0].id}`
					}
				];
			})
			.slice(0, RELATED_ITEMS_LIMIT);
		return items.length ? [[String(hero.id), { before, items }] as const] : [];
	});
	return Object.fromEntries(entries);
}
