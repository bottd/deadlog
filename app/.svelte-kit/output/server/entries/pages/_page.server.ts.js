import { m as getFeedIndex } from '../../chunks/src.js';
import { r as unfilteredFeedPage } from '../../chunks/pages.js';
//#region src/routes/+page.server.ts
var prerender = true;
var load = async ({ locals }) => {
	const index = await getFeedIndex(locals.db);
	const { changelogs } = unfilteredFeedPage(index, 0);
	return {
		changelogs,
		totalCount: index.rows.length,
		lastUpdate: changelogs[0]?.date ?? /* @__PURE__ */ new Date().toISOString()
	};
};
//#endregion
export { load, prerender };
