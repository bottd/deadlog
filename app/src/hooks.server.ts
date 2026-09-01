import type { Handle } from '@sveltejs/kit';
import { getDb } from '@deadlog/db';
import { edgeCacheControlFor } from '$lib/server/cache-policy';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.platform?.caches !== undefined) {
		event.locals.db = getDb(event.platform.env.DB);
	} else {
		event.locals.db = getDb();
	}

	const response = await resolve(event);

	const cacheControl = edgeCacheControlFor(event.request, response);
	if (cacheControl) response.headers.set('Cache-Control', cacheControl);

	return response;
};
