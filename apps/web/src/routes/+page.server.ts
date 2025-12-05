import {
	queryChangelogs,
	getChangelogsCount,
	getChangelogPosition,
	getHeroByName,
	getItemByName,
	formatDate
} from '@deadlog/scraper';
import { toSlug } from '@deadlog/utils';
import type { PageServerLoad } from './$types';
import {
	enrichChangelogs,
	resolveHeroIds,
	resolveItemIds,
	parseApiParams
} from '$lib/server/changelog-utils';

export const prerender = false;

export const load: PageServerLoad = async ({ locals, url, parent }) => {
	const { hero, item, q, change } = parseApiParams(url);

	// Get heroes and items from layout data
	const { heroes, items } = await parent();

	const heroIds = resolveHeroIds(hero, heroes);
	const itemIds = resolveItemIds(item, items);

	let initialLoadLimit = 5;
	if (change) {
		const position = await getChangelogPosition(locals.db, String(change));
		initialLoadLimit = position + 1 + 5;
	}

	const allChangelogs = await queryChangelogs(locals.db, {
		heroIds,
		itemIds,
		searchQuery: q,
		limit: initialLoadLimit,
		offset: 0
	});

	const totalCount =
		heroIds.length === 0 && itemIds.length === 0 && !q
			? await getChangelogsCount(locals.db)
			: 0;

	const enriched = await enrichChangelogs(locals.db, allChangelogs);

	interface PageMeta {
		title: string;
		description: string;
		image: string;
	}

	let pageMeta: PageMeta = {
		title: 'deadlog.io - deadlock changelog',
		description:
			'Stay updated with the latest Deadlock game changelog, updates, and balance changes',
		image: 'https://deadlog.io/assets/meta/index.png'
	};

	if (change) {
		const changelog = enriched.find((c) => c.id === String(change));
		pageMeta = {
			title: changelog
				? `${formatDate(changelog.date)} Update - Deadlog`
				: pageMeta.title,
			description: changelog
				? `View the ${formatDate(changelog.date)} Deadlock changelog`
				: pageMeta.description,
			image: `https://deadlog.io/assets/meta/change/${change}.png`
		};
	} else if (hero[0]) {
		const data = await getHeroByName(locals.db, hero[0]);
		if (data) {
			pageMeta = {
				title: `${data.name} Changelog - Deadlog`,
				description: `View all ${data.name} balance changes and updates in Deadlock`,
				image: `https://deadlog.io/assets/meta/hero/${toSlug(data.name)}.png`
			};
		}
	} else if (item[0]) {
		const data = await getItemByName(locals.db, item[0]);
		if (data) {
			pageMeta = {
				title: `${data.name} Changes - Deadlog`,
				description: `View all ${data.name} balance changes and updates in Deadlock`,
				image: `https://deadlog.io/assets/meta/item/${toSlug(data.name)}.png`
			};
		}
	}

	return {
		changelogs: enriched,
		totalCount,
		initialLoadCount: initialLoadLimit,
		lastUpdate: (allChangelogs[0]?.date ?? new Date()).toISOString(),
		title: pageMeta.title,
		description: pageMeta.description,
		image: pageMeta.image
	};
};
