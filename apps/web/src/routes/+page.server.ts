import {
	queryChangelogs,
	getChangelogsCount,
	getChangelogPosition,
	getAllHeroes,
	getAllItems,
	getHeroByName,
	getItemByName,
	formatDateWithSuffix
} from '@deadlog/scraper';
import { formatISO } from 'date-fns';
import type { PageServerLoad } from './$types';
import { validateSearchParams } from 'runed/kit';
import { paramSchema } from '$lib/utils/searchParams.svelte';
import {
	enrichChangelogs,
	resolveHeroIds,
	resolveItemIds
} from '$lib/server/changelog-utils';

export const prerender = true;

export const load: PageServerLoad = async ({ locals, url }) => {
	let hero: string[] = [];
	let item: string[] = [];
	let change: number | undefined = undefined;
	let q: string | null = null;

	try {
		const validated = validateSearchParams(url, paramSchema);
		hero = validated.data.hero;
		item = validated.data.item;
		change = validated.data.change;
		q = validated.data.q;
	} catch {
		// Validation fails during prerendering
	}

	const [heroes, items] = await Promise.all([
		getAllHeroes(locals.db),
		getAllItems(locals.db)
	]);

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
				? `${formatDateWithSuffix(changelog.date)} Update - Deadlog`
				: pageMeta.title,
			description: changelog
				? `View the ${formatDateWithSuffix(changelog.date)} Deadlock changelog`
				: pageMeta.description,
			image: `https://deadlog.io/assets/meta/change/${change}.png`
		};
	} else if (hero[0]) {
		const data = await getHeroByName(locals.db, hero[0]);
		if (data) {
			pageMeta = {
				title: `${data.name} Changelog - Deadlog`,
				description: `View all ${data.name} balance changes and updates in Deadlock`,
				image: `https://deadlog.io/assets/meta/hero/${hero[0]}.png`
			};
		}
	} else if (item[0]) {
		const data = await getItemByName(locals.db, item[0]);
		if (data) {
			pageMeta = {
				title: `${data.name} Changes - Deadlog`,
				description: `View all ${data.name} balance changes and updates in Deadlock`,
				image: `https://deadlog.io/assets/meta/item/${item[0]}.png`
			};
		}
	}

	return {
		changelogs: enriched,
		heroes,
		items,
		totalCount,
		initialLoadCount: initialLoadLimit,
		lastUpdate: allChangelogs[0]?.date
			? formatISO(allChangelogs[0].date)
			: formatISO(new Date()),
		title: pageMeta.title,
		description: pageMeta.description,
		image: pageMeta.image
	};
};
