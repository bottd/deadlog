import type { Handle } from '@sveltejs/kit';
import { getDb } from '@deadlog/db';

export const handle: Handle = async ({ event, resolve }) => {
	try {
		// @ts-expect-error - Adapter defines env as unknown, but we know the shape at runtime
		const d1db = event?.platform?.env?.DB;
		event.locals.db = getDb(d1db);
	} catch (error) {
		console.error('Failed to initialize database:', error);
		throw error;
	}

	const response = await resolve(event);

	// For the root page, set cache headers to ensure fresh content
	// This prevents browsers and CDNs from serving stale meta tags
	if (event.url.pathname === '/') {
		response.headers.set(
			'Cache-Control',
			'public, max-age=0, s-maxage=3600, must-revalidate'
		);
		// Vary on query string to ensure different URLs are cached separately
		response.headers.set('Vary', 'Accept-Encoding');
	}

	return response;
};
