import { getReleasedItemSlugs, getItemBySlug, getChangelogsByItemId } from '@deadlog/db';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { DEFAULT_SOCIAL_IMAGE, absoluteUrl } from '$lib/seo';

export const prerender = 'auto';

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const slugs = await getReleasedItemSlugs(db);
	return slugs.map((slug) => ({ slug }));
};

export const load: PageServerLoad = async ({ params, locals, url }) => {
	const item = await getItemBySlug(locals.db, params.slug);

	if (!item) {
		throw error(404, 'Item not found');
	}
	if (item.slug !== params.slug) redirect(308, `/item/${item.slug}${url.search}`);

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
		image: item.isReleased
			? absoluteUrl(`/assets/meta/item/${params.slug}.png`)
			: DEFAULT_SOCIAL_IMAGE
	};
};
