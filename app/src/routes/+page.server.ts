import {
	queryChangelogs,
	getChangelogsCount,
	getHeroByName,
	getItemByName
} from '@deadlog/scraper';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { absoluteUrl, DEFAULT_SOCIAL_IMAGE, SITE_DESCRIPTION } from '$lib/seo';
import {
	enrichChangelogs,
	resolveEntityIds,
	parseApiParams,
	splitPage
} from '$lib/server/changelog-utils';

export const prerender = false;

export const load: PageServerLoad = async ({ locals, url, parent }) => {
	const { hero, item, q, change } = parseApiParams(url);
	if (change) {
		const searchParams = new URLSearchParams(url.searchParams);
		searchParams.delete('change');
		const query = searchParams.toString();
		throw redirect(
			308,
			`/change/${encodeURIComponent(change)}${query ? `?${query}` : ''}`
		);
	}

	// Get heroes and items from layout data
	const { heroes, items } = await parent();

	const heroIds = resolveEntityIds(hero, heroes);
	const itemIds = resolveEntityIds(item, items);

	const initialLoadLimit = 15;

	const queriedChangelogs = await queryChangelogs(locals.db, {
		heroIds,
		itemIds,
		searchQuery: q,
		limit: initialLoadLimit + 1,
		offset: 0
	});
	const { rows: allChangelogs, hasMore: initialHasMore } = splitPage(
		queriedChangelogs,
		initialLoadLimit
	);

	const totalCount =
		hero.length === 0 && item.length === 0 && !q
			? await getChangelogsCount(locals.db)
			: initialHasMore
				? initialLoadLimit + 1
				: allChangelogs.length;

	const enriched = await enrichChangelogs(locals.db, allChangelogs);

	interface PageMeta {
		title: string;
		description: string;
		image: string;
	}

	let pageMeta: PageMeta = {
		title: 'Deadlock Patch Notes & Changelog | Deadlog',
		description: SITE_DESCRIPTION,
		image: DEFAULT_SOCIAL_IMAGE
	};

	if (hero[0]) {
		const data = await getHeroByName(locals.db, hero[0]);
		if (data) {
			pageMeta = {
				title: `${data.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
				description: `Track every ${data.name} buff, nerf, and balance change across Deadlock patch notes.`,
				image: absoluteUrl(`/assets/meta/hero/${data.slug}.png`)
			};
		}
	} else if (item[0]) {
		const data = await getItemByName(locals.db, item[0]);
		if (data) {
			pageMeta = {
				title: `${data.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
				description: `Track every ${data.name} buff, nerf, and balance change across Deadlock patch notes.`,
				image: absoluteUrl(`/assets/meta/item/${data.slug}.png`)
			};
		}
	}

	// Get latest patch summary for hero banner
	const latestPatch = enriched[0];
	const latestPatchSummary = latestPatch
		? {
				id: latestPatch.id,
				date: latestPatch.date,
				heroCount: latestPatch.icons?.heroes?.length ?? 0,
				itemCount: latestPatch.icons?.items?.length ?? 0
			}
		: null;

	return {
		changelogs: enriched,
		filters: { hero, item, q },
		totalCount,
		initialLoadCount: initialLoadLimit,
		lastUpdate: (enriched[0]?.date ?? new Date()).toISOString(),
		latestPatchSummary,
		title: pageMeta.title,
		description: pageMeta.description,
		image: pageMeta.image
	};
};
