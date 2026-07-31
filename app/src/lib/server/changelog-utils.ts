import {
	formatDate,
	getChangelogIcons,
	getUpdatesForChangelogs,
	type ScrapedChangelog
} from '@deadlog/scraper';
import type { DrizzleDB } from '@deadlog/db';
import type { ChangelogEntry } from '$lib/types';
import { entityNameAliases, makeSummary } from '@deadlog/utils';
import { parseCSV } from '$lib/utils/csv';
import { absoluteUrl } from '$lib/seo';

export const NO_MATCH_ENTITY_ID = -1;

export function resolveEntityIds(
	names: string[],
	entities: { id: number; name: string }[]
): number[] {
	const idsByName = new Map<string, number>();
	for (const entity of entities) {
		for (const alias of entityNameAliases(entity.name)) {
			if (!idsByName.has(alias)) idsByName.set(alias, entity.id);
		}
	}
	return [
		...new Set(
			names.map(
				(name) =>
					entityNameAliases(name)
						.map((alias) => idsByName.get(alias))
						.find((id) => id !== undefined) ?? NO_MATCH_ENTITY_ID
			)
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

	// Cards only ever show the summary, so contentText is destructured off rather than
	// spread through — it would otherwise ship the full patch prose to every client.
	const enriched = sorted.map(({ contentText, ...entry }) => {
		const icons = iconsByChangelog[entry.id] ?? { heroes: [], items: [] };

		const entryUpdates = updatesMap.get(entry.id) ?? [];
		const enrichedUpdates: ChangelogEntry[] = entryUpdates
			.sort((a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime())
			.map(({ contentText: updateText, ...update }) => ({
				...update,
				date: new Date(update.pubDate),
				summary: makeSummary(updateText),
				icons: iconsByChangelog[update.id] ?? { heroes: [], items: [] }
			}));

		return {
			...entry,
			date: new Date(entry.pubDate),
			summary: makeSummary(contentText),
			icons,
			updates: enrichedUpdates
		};
	});

	return enriched;
}

/** The full patch-page payload for the /change/[...slug] load. */
export async function buildChangePageData(
	db: DrizzleDB,
	changelog: ScrapedChangelog,
	parentData: Promise<{
		heroes: { id: number; name: string; slug: string; images: Record<string, string> }[];
		items: { id: number; name: string; slug: string; image: string }[];
	}>
) {
	const [iconsMap, { heroes, items }] = await Promise.all([
		getChangelogIcons(db, [changelog.id]),
		parentData
	]);
	const icons = iconsMap[changelog.id] ?? { heroes: [], items: [] };
	const date = new Date(changelog.pubDate);
	const description =
		makeSummary(changelog.contentText, 155) ||
		`Read the ${formatDate(date)} Deadlock patch notes, including hero, item, and gameplay balance changes.`;

	const heroMap: Record<
		number,
		{ name: string; slug: string; images: Record<string, string> }
	> = {};
	for (const hero of heroes) {
		// `heroes` comes from the layout load, which already trimmed images.
		heroMap[hero.id] = { name: hero.name, slug: hero.slug, images: hero.images };
	}

	const itemMap: Record<number, { name: string; slug: string; image: string }> = {};
	for (const item of items) {
		itemMap[item.id] = { name: item.name, slug: item.slug, image: item.image };
	}

	// The body renders from the .mg component, so contentText is dead weight in the
	// payload — it only feeds the summary and indexability checks on the server.
	const { contentText, ...changelogFields } = changelog;

	return {
		changelog: {
			...changelogFields,
			date,
			icons
		},
		heroMap,
		itemMap,
		title: `${changelog.title} | Deadlock Patch Notes | Deadlog`,
		description,
		// Meta previews are generated per changelog id — the filename is not the URL.
		image: absoluteUrl(`/assets/meta/change/${changelog.id}.png`),
		isIndexable: Boolean(contentText?.trim())
	};
}

export function parseApiParams(url: URL) {
	return {
		limit: Number(url.searchParams.get('limit')) || 8,
		offset: Number(url.searchParams.get('offset')) || 0,
		hero: parseCSV(url.searchParams.get('hero')),
		item: parseCSV(url.searchParams.get('item')),
		q: url.searchParams.get('q') ?? '',
		major: url.searchParams.get('major') === 'true'
	};
}
