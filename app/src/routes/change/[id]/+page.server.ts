import {
	getAllChangelogIds,
	getChangelogById,
	getChangelogIcons,
	formatDate
} from '@deadlog/scraper';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { makeSummary } from '$lib/server/changelog-utils';
import { absoluteUrl } from '$lib/seo';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const ids = await getAllChangelogIds(db);
	return ids.map((id) => ({ id }));
};

export const load: PageServerLoad = async ({ params, locals, parent }) => {
	const changelog = await getChangelogById(locals.db, params.id);

	if (!changelog) {
		throw error(404, 'Changelog not found');
	}

	const [iconsMap, { heroes, items }] = await Promise.all([
		getChangelogIcons(locals.db, [changelog.id]),
		parent()
	]);

	const icons = iconsMap[changelog.id] ?? { heroes: [], items: [] };
	const date = new Date(changelog.pubDate);
	const formattedDate = formatDate(date);
	const description =
		makeSummary(changelog.contentText, 155) ||
		`Read the ${formattedDate} Deadlock patch notes, including hero, item, and gameplay balance changes.`;

	const heroMap: Record<
		number,
		{ name: string; slug: string; images: Record<string, string> }
	> = {};
	for (const hero of heroes) {
		heroMap[hero.id] = { name: hero.name, slug: hero.slug, images: hero.images };
	}

	const itemMap: Record<number, { name: string; slug: string; image: string }> = {};
	const abilityMap: Record<string, { name: string; image: string; heroName: string }> =
		{};
	for (const item of items) {
		itemMap[item.id] = { name: item.name, slug: item.slug, image: item.image };
		if (item.type === 'ability') {
			abilityMap[item.name.toLowerCase()] = {
				name: item.name,
				image: item.image,
				heroName: ''
			};
		}
	}

	return {
		changelog: {
			...changelog,
			date,
			icons
		},
		heroMap,
		itemMap,
		abilityMap,
		title: `${changelog.title} | Deadlock Patch Notes | Deadlog`,
		description,
		image: absoluteUrl(`/assets/meta/change/${params.id}.png`),
		isIndexable: Boolean(changelog.contentText?.trim())
	};
};
