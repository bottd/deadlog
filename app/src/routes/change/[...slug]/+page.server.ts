import { getAllChangelogSlugs, getChangelogBySlug } from '@deadlog/scraper';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { buildChangePageData } from '$lib/server/changelog-utils';

export const prerender = 'auto';

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const db = getLibsqlDb();
	const slugs = await getAllChangelogSlugs(db);
	return slugs.map((slug) => ({ slug }));
};

export const load: PageServerLoad = async ({ params, locals, url }) => {
	const changelog = await getChangelogBySlug(locals.db, params.slug);

	if (!changelog) {
		throw error(404, 'Changelog not found');
	}
	if (changelog.slug !== params.slug) {
		redirect(308, `/change/${changelog.slug}${url.search}`);
	}

	return buildChangePageData(locals.db, changelog);
};
