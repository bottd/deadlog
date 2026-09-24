import { m as getFeedIndex } from '../../../../chunks/src.js';
import { r as unfilteredFeedPage, t as feedPageCount } from '../../../../chunks/pages.js';
import { error, json } from '@sveltejs/kit';
//#region src/routes/feed-page/[page].json/+server.ts
var prerender = true;
var entries = async () => {
	const { getLibsqlDb } = await import('../../../../chunks/src3.js');
	const index = await getFeedIndex(getLibsqlDb());
	return Array.from({ length: feedPageCount(index.rows.length) }, (_, page) => ({
		page: String(page)
	}));
};
var GET = async ({ params, locals }) => {
	const index = await getFeedIndex(locals.db);
	const page = Number(params.page);
	if (!Number.isInteger(page) || page < 0 || page >= feedPageCount(index.rows.length))
		throw error(404, 'Feed page not found');
	return json(unfilteredFeedPage(index, page));
};
//#endregion
export { GET, entries, prerender };
