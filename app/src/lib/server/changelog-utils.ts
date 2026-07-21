import {
	getChangelogIcons,
	getUpdatesForChangelogs,
	type ScrapedChangelog
} from '@deadlog/scraper';
import type { DrizzleDB } from '@deadlog/db';
import type { ChangelogEntry } from '$lib/types';
import { parseCSV } from '$lib/utils/csv';

export const NO_MATCH_ENTITY_ID = -1;

// ponytail: crude teaser, not a curated summary — content_text has no extractable
// lead, so just clamp at a word boundary. An LLM `summary` column would do better.
export function makeSummary(text: string | null | undefined, max = 140): string {
	if (!text) return '';
	const clean = text.replace(/\s+/g, ' ').trim();
	if (clean.length <= max) return clean;
	const cut = clean.slice(0, max);
	const lastSpace = cut.lastIndexOf(' ');
	return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

export function resolveEntityIds(
	names: string[],
	entities: { id: number; name: string }[]
): number[] {
	const idsByName = new Map(
		entities.map((entity) => [entity.name.toLowerCase(), entity.id])
	);
	return [
		...new Set(
			names.map((name) => idsByName.get(name.toLowerCase()) ?? NO_MATCH_ENTITY_ID)
		)
	];
}

export function splitPage<T>(rows: T[], limit: number) {
	return {
		rows: rows.slice(0, limit),
		hasMore: rows.length > limit
	};
}

export async function enrichChangelogs(
	db: DrizzleDB,
	changelogs: ScrapedChangelog[]
): Promise<ChangelogEntry[]> {
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
		const enrichedUpdates: ChangelogEntry[] = entryUpdates
			.sort((a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime())
			.map((update) => ({
				...update,
				date: new Date(update.pubDate),
				summary: makeSummary(update.contentText),
				icons: iconsByChangelog[update.id] ?? { heroes: [], items: [] }
			}));

		return {
			...entry,
			date: new Date(entry.pubDate),
			summary: makeSummary(entry.contentText),
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
