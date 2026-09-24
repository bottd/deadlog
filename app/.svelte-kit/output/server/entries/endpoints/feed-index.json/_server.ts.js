import { m as getFeedIndex } from '../../../chunks/src.js';
import { json } from '@sveltejs/kit';
//#region src/routes/feed-index.json/+server.ts
var GET = async ({ locals }) => {
	return json(await getFeedIndex(locals.db));
};
var prerender = true;
//#endregion
export { GET, prerender };
