import {
	getChangelogIcons,
	getUpdatesForChangelogs,
	type ScrapedChangelog,
	type EntityIcon
} from '@deadlog/scraper';
import type { DrizzleDB } from '@deadlog/db';
import { parseCSV } from '$lib/stores/searchParams.svelte';

export interface ChangelogWithIcons extends ScrapedChangelog {
	icons: {
		heroes: EntityIcon[];
		items: EntityIcon[];
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
	// changelogs should only contain main entries (no parentChange)
	// Fetch child updates for these changelogs
	const parentIds = changelogs.map((c) => c.id);
	const updates = await getUpdatesForChangelogs(db, parentIds);

	// Build updates map
	const updatesMap = new Map<string, ScrapedChangelog[]>();
	for (const update of updates) {
		if (!update.parentChange) continue;
		const existing = updatesMap.get(update.parentChange) || [];
		existing.push(update);
		updatesMap.set(update.parentChange, existing);
	}

	// Sort by date (descending - newest first)
	const sorted = [...changelogs].sort(
		(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
	);

	// Get all changelog IDs for bulk fetching icons (including updates)
	const changelogIds = [...changelogs.map((c) => c.id), ...updates.map((u) => u.id)];
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
		limit: Number(url.searchParams.get('limit')) || 8,
		offset: Number(url.searchParams.get('offset')) || 0,
		hero: parseCSV(url.searchParams.get('hero')),
		item: parseCSV(url.searchParams.get('item')),
		q: url.searchParams.get('q') ?? '',
		change: url.searchParams.get('change') ?? ''
	};
}
