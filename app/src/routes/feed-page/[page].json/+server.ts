import { error, json } from '@sveltejs/kit';
import { getFeedIndex } from '@deadlog/db';
import { feedPageCount, unfilteredFeedPage } from '$lib/feed/pages';
import type { EntryGenerator, RequestHandler } from './$types';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const { getLibsqlDb } = await import('@deadlog/db');
	const index = await getFeedIndex(getLibsqlDb());
	return Array.from({ length: feedPageCount(index.rows.length) }, (_, page) => ({
		page: String(page)
	}));
};

export const GET: RequestHandler = async ({ params, locals }) => {
	const index = await getFeedIndex(locals.db);
	const page = Number(params.page);
	if (!Number.isInteger(page) || page < 0 || page >= feedPageCount(index.rows.length)) {
		throw error(404, 'Feed page not found');
	}
	return json(unfilteredFeedPage(index, page));
};
