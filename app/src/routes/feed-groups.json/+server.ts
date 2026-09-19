import { json } from '@sveltejs/kit';
import { getFeedGroups } from '@deadlog/db';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	return json(await getFeedGroups(locals.db));
};

export const prerender = true;
