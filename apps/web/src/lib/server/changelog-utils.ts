import { getChangelogIcons, type ChangelogEntry } from '@deadlog/scraper';
import type { DrizzleDB, ChangelogContentJson } from '@deadlog/db';
import { compareDesc } from 'date-fns';

export interface ChangelogWithIcons extends ChangelogEntry {
	icons: {
		heroes: { id: number; src: string; alt: string; type: 'hero' | 'item' }[];
		items: { id: number; src: string; alt: string; type: 'hero' | 'item' }[];
	};
	fullContent: string;
	contentJson?: ChangelogContentJson;
	updates?: ChangelogWithIcons[];
}

/**
 * Resolves hero names to IDs
 */
export function resolveHeroIds(
	heroNames: string[],
	heroes: { id?: number; name: string }[]
): number[] {
	return heroNames
		.map((heroName) => {
			const heroData = heroes.find(
				(h) => h.name.toLowerCase() === heroName.toLowerCase()
			);
			return heroData?.id;
		})
		.filter((id): id is number => id !== undefined);
}

/**
 * Resolves item names to IDs
 */
export function resolveItemIds(
	itemNames: string[],
	items: { id?: number; name: string }[]
): number[] {
	return itemNames
		.map((itemName) => {
			const itemData = items.find((i) => i.name.toLowerCase() === itemName.toLowerCase());
			return itemData?.id;
		})
		.filter((id): id is number => id !== undefined);
}

/**
 * Enriches changelogs with icons, updates, and full content
 */
export async function enrichChangelogs(
	db: DrizzleDB,
	changelogs: ChangelogEntry[]
): Promise<ChangelogWithIcons[]> {
	// Separate main changelogs and updates
	const mainChangelogs = changelogs.filter(
		(entry: { parentChange?: string | null }) => !entry.parentChange
	);
	const updates = changelogs.filter(
		(entry: { parentChange?: string | null }) => entry.parentChange
	);

	// Build updates map
	const updatesMap = new Map<string, typeof changelogs>();
	for (const update of updates) {
		if (!update.parentChange) continue;
		const existing = updatesMap.get(update.parentChange) || [];
		existing.push(update);
		updatesMap.set(update.parentChange, existing);
	}

	// Sort by date
	const sorted = [...mainChangelogs].sort((a, b) => compareDesc(a.date, b.date));

	// Enrich with icons and updates
	const enriched = await Promise.all(
		sorted.map(async (entry) => {
			const content = entry.fullContent ?? entry.content_encoded;
			const icons = await getChangelogIcons(db, entry.id);

			const entryUpdates = updatesMap.get(entry.id) || [];
			const enrichedUpdates: ChangelogWithIcons[] = await Promise.all(
				entryUpdates
					.sort((a: { date: Date }, b: { date: Date }) => -compareDesc(a.date, b.date))
					.map(async (update: ChangelogEntry): Promise<ChangelogWithIcons> => {
						const updateContent = update.fullContent ?? update.content_encoded;
						const updateIcons = await getChangelogIcons(db, update.id);

						return {
							...update,
							icons: updateIcons,
							fullContent: updateContent,
							contentJson: update.contentJson
						};
					})
			);

			return {
				...entry,
				icons,
				fullContent: content,
				contentJson: entry.contentJson,
				updates: enrichedUpdates
			};
		})
	);

	return enriched;
}
