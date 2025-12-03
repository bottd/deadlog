import { getChangelogIcons, type ScrapedChangelog } from '@deadlog/scraper';
import type { DrizzleDB } from '@deadlog/db';
import { parseCSV } from '$lib/stores/searchParams.svelte';

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
	const mainChangelogs = changelogs.filter((entry) => !entry.parentChange);
	const updates = changelogs.filter((entry) => entry.parentChange);

	// Build updates map
	const updatesMap = new Map<string, ScrapedChangelog[]>();
	for (const update of updates) {
		if (!update.parentChange) continue;
		const existing = updatesMap.get(update.parentChange) || [];
		existing.push(update);
		updatesMap.set(update.parentChange, existing);
	}

	// Sort by date (descending - newest first)
	const sorted = [...mainChangelogs].sort(
		(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
	);

	// Get all changelog IDs for bulk fetching icons
	const changelogIds = changelogs.map((c) => c.id);
	const iconsByChangelog = await getChangelogIcons(db, changelogIds);

	// Enrich with icons and updates
	const enriched = sorted.map((entry) => {
		const content = ''; // No fullContent on base type
		const icons = iconsByChangelog[entry.id] || { heroes: [], items: [] };

		const entryUpdates = updatesMap.get(entry.id) || [];
		const enrichedUpdates: ChangelogWithIcons[] = entryUpdates
			.sort((a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime())
			.map((update) => {
				const updateContent = ''; // No fullContent on base type
				const updateIcons = iconsByChangelog[update.id] || { heroes: [], items: [] };

				return {
					...update,
					date: new Date(update.pubDate),
					icons: updateIcons,
					fullContent: updateContent
				};
			});

		return {
			...entry,
			date: new Date(entry.pubDate),
			icons,
			fullContent: content,
			updates: enrichedUpdates
		};
	});

	return enriched;
}

export function parseApiParams(url: URL) {
	return {
		limit: Number(url.searchParams.get('limit')) || 5,
		offset: Number(url.searchParams.get('offset')) || 0,
		hero: parseCSV(url.searchParams.get('hero')),
		item: parseCSV(url.searchParams.get('item')),
		q: url.searchParams.get('q') ?? '',
		change: url.searchParams.get('change') ?? ''
	};
}
