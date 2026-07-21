import {
	getAllItemSlugs,
	getItemBySlug,
	getChangelogsByItemId,
	getChangelogIcons
} from '@deadlog/scraper';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { absoluteUrl } from '$lib/seo';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const slugs = await getAllItemSlugs(db);
	return slugs.map((slug) => ({ slug }));
};

export const load: PageServerLoad = async ({ params, locals }) => {
	const item = await getItemBySlug(locals.db, params.slug);

	if (!item) {
		throw error(404, 'Item not found');
	}

	const changelogs = await getChangelogsByItemId(locals.db, item.id);

	const changelogIds = changelogs.map((c) => c.id);
	const iconsMap = await getChangelogIcons(locals.db, changelogIds);

	const enrichedChangelogs = changelogs.map((changelog) => ({
		...changelog,
		date: new Date(changelog.pubDate),
		icons: iconsMap[changelog.id] || { heroes: [], items: [] }
	}));

	return {
		item,
		changelogs: enrichedChangelogs,
		title: `${item.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
		description: `Track every ${item.name} buff, nerf, and balance change across Deadlock patch notes in chronological order.`,
		image: absoluteUrl(`/assets/meta/item/${params.slug}.png`)
	};
};
