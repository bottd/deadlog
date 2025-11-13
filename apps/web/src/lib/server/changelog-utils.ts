import { getChangelogIcons, type ScrapedChangelog } from '@deadlog/scraper';
import type { DrizzleDB } from '@deadlog/db';
import { compareDesc } from 'date-fns';

export interface ChangelogWithIcons extends ScrapedChangelog {
	icons: {
		heroes: { id: number; src: string; alt: string; type: 'hero' | 'item' }[];
		items: { id: number; src: string; alt: string; type: 'hero' | 'item' }[];
	};
	date: Date;
	fullContent: string;
	content_encoded?: string;
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
	changelogs: ScrapedChangelog[]
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
	const sorted = [...mainChangelogs].sort((a, b) =>
		compareDesc(new Date(a.pubDate), new Date(b.pubDate))
	);

	// Enrich with icons and updates
	const enriched = await Promise.all(
		sorted.map(async (entry) => {
			const content = ''; // No fullContent on base type
			const icons = await getChangelogIcons(db, entry.id);

			const entryUpdates = updatesMap.get(entry.id) || [];
			const enrichedUpdates: ChangelogWithIcons[] = await Promise.all(
				entryUpdates
					.sort(
						(a: { pubDate: string }, b: { pubDate: string }) =>
							-compareDesc(new Date(a.pubDate), new Date(b.pubDate))
					)
					.map(async (update: ScrapedChangelog): Promise<ChangelogWithIcons> => {
						const updateContent = ''; // No fullContent on base type
						const updateIcons = await getChangelogIcons(db, update.id);

						return {
							...update,
							date: new Date(update.pubDate),
							icons: updateIcons,
							fullContent: updateContent
						};
					})
			);

			return {
				...entry,
				date: new Date(entry.pubDate),
				icons,
				fullContent: content,
				updates: enrichedUpdates
			};
		})
	);

	return enriched;
}
