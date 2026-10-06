import { getFeedText } from '@deadlog/db';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	return Response.json(await getFeedText(locals.db));
};

export const prerender = true;
