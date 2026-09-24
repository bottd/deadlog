import { p as getFeedGroups } from '../../../chunks/src.js';
import { json } from '@sveltejs/kit';
//#region src/routes/feed-groups.json/+server.ts
var GET = async ({ locals }) => {
	return json(await getFeedGroups(locals.db));
};
var prerender = true;
//#endregion
export { GET, prerender };
