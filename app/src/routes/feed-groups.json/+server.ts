import { getFeedGroups } from '@deadlog/db';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	return Response.json(await getFeedGroups(locals.db));
};

export const prerender = true;
