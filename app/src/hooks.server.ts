import type { Handle, Reroute } from '@sveltejs/kit';
import { building } from '$app/environment';
import { getLibsqlDb } from '@deadlog/db';
import { edgeCacheControlFor } from '$lib/server/cache-policy';
import { resolveSlugRoute } from '$lib/server/slug-redirects';

const NOT_FOUND = '/__not-found';

export const reroute: Reroute = ({ url }) =>
	resolveSlugRoute(url.pathname).kind === 'unknown' ? NOT_FOUND : undefined;

export const handle: Handle = async ({ event, resolve }) => {
	const verdict = resolveSlugRoute(event.url.pathname);
	if (verdict.kind === 'redirect') {
		return withCacheControl(
			event.request,
			new Response(null, {
				status: 308,
				headers: { location: `${verdict.path}${building ? '' : event.url.search}` }
			})
		);
	}
	if (verdict.kind === 'malformed') {
		return withCacheControl(event.request, new Response('Not found', { status: 404 }));
	}

	Object.defineProperty(event.locals, 'db', { configurable: true, get: getLibsqlDb });

	return withCacheControl(event.request, await resolve(event));
};

function withCacheControl(request: Request, response: Response): Response {
	const cacheControl = edgeCacheControlFor(request, response);
	if (cacheControl) response.headers.set('Cache-Control', cacheControl);
	return response;
}
