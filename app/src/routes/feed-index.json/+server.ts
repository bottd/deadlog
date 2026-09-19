import { json } from '@sveltejs/kit';
import { getFeedIndex } from '@deadlog/db';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	return json(await getFeedIndex(locals.db));
};

export const prerender = true;
