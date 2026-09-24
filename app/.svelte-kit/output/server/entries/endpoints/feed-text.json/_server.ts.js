import { h as getFeedText } from '../../../chunks/src.js';
import { json } from '@sveltejs/kit';
//#region src/routes/feed-text.json/+server.ts
var GET = async ({ locals }) => {
	return json(await getFeedText(locals.db));
};
var prerender = true;
//#endregion
export { GET, prerender };
