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
	updates?: ChangelogWithIcons[];
}

export function resolveHeroIds(
	heroNames: string[],
	heroes: { id: number; name: string }[]
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

export function resolveItemIds(
	itemNames: string[],
	items: { id: number; name: string }[]
): number[] {
	return itemNames
		.map((itemName) => {
			const itemData = items.find((i) => i.name.toLowerCase() === itemName.toLowerCase());
			return itemData?.id;
		})
		.filter((id): id is number => id !== undefined);
}

export async function enrichChangelogs(
	db: DrizzleDB,
	changelogs: ScrapedChangelog[]
): Promise<ChangelogWithIcons[]> {
	const parentIds = changelogs.map((c) => c.id);
	const updates = await getUpdatesForChangelogs(db, parentIds);

	const updatesMap = new Map<string, ScrapedChangelog[]>();
	for (const update of updates) {
		if (!update.parentChange) continue;
		const existing = updatesMap.get(update.parentChange) ?? [];
		existing.push(update);
		updatesMap.set(update.parentChange, existing);
	}

	const sorted = [...changelogs].sort(
		(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
	);

	const changelogIds = [...changelogs.map((c) => c.id), ...updates.map((u) => u.id)];
	const iconsByChangelog = await getChangelogIcons(db, changelogIds);

	const enriched = sorted.map((entry) => {
		const icons = iconsByChangelog[entry.id] ?? { heroes: [], items: [] };

		const entryUpdates = updatesMap.get(entry.id) ?? [];
		const enrichedUpdates: ChangelogWithIcons[] = entryUpdates
			.sort((a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime())
			.map((update) => ({
				...update,
				date: new Date(update.pubDate),
				icons: iconsByChangelog[update.id] ?? { heroes: [], items: [] }
			}));

		return {
			...entry,
			date: new Date(entry.pubDate),
			icons,
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
