import {
	getAllChangelogIds,
	getChangelogById,
	getChangelogIcons,
	formatDate
} from '@deadlog/scraper';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

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

	const heroMap: Record<number, { name: string; images: Record<string, string> }> = {};
	for (const hero of heroes) {
		heroMap[hero.id] = { name: hero.name, images: hero.images };
	}

	const itemMap: Record<number, { name: string; image: string }> = {};
	for (const item of items) {
		itemMap[item.id] = { name: item.name, image: item.image };
	}

	return {
		changelog: {
			...changelog,
			date,
			icons
		},
		heroMap,
		itemMap,
		title: `${formatDate(date)} Update - Deadlog`,
		description: `View the ${formatDate(date)} Deadlock changelog`,
		image: `https://deadlog.io/assets/meta/change/${params.id}.png`
	};
};
