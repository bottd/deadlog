import { json } from '@sveltejs/kit';
import { getFeedText } from '@deadlog/db';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	return json(await getFeedText(locals.db));
};

export const prerender = true;
