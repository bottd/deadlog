import {
	getReleasedItemSlugs,
	getItemBySlug,
	getChangelogsByItemId
} from '@deadlog/scraper';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { absoluteUrl } from '$lib/seo';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const slugs = await getReleasedItemSlugs(db);
	return slugs.map((slug) => ({ slug }));
};

export const load: PageServerLoad = async ({ params, locals }) => {
	const item = await getItemBySlug(locals.db, params.slug);

	if (!item) {
		throw error(404, 'Item not found');
	}
	if (item.slug !== params.slug) redirect(308, `/item/${item.slug}`);

	const changelogs = await getChangelogsByItemId(locals.db, item.id);

	const enrichedChangelogs = changelogs.map((changelog) => ({
		...changelog,
		date: new Date(changelog.pubDate)
	}));

	return {
		item,
		changelogs: enrichedChangelogs,
		title: `${item.name} Deadlock Changes: Buffs & Nerfs | Deadlog`,
		description: `Track every ${item.name} buff, nerf, and balance change across Deadlock patch notes in chronological order.`,
		image: absoluteUrl(`/assets/meta/item/${params.slug}.png`)
	};
};
