import type { Handle } from '@sveltejs/kit';
import { getDb } from '@deadlog/db';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.platform?.caches !== undefined) {
		event.locals.db = getDb(event.platform.env.DB);
	} else {
		event.locals.db = getDb();
	}

	const response = await resolve(event);

	if (event.url.pathname === '/') {
		response.headers.set(
			'Cache-Control',
			'public, max-age=0, s-maxage=3600, must-revalidate'
		);
		response.headers.set('Vary', 'Accept-Encoding');
	}

	return response;
};
