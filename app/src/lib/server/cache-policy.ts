export const EDGE_CACHE_CONTROL = 'public, max-age=0, s-maxage=3600, must-revalidate';

/**
 * Applies the hourly edge TTL to deterministic GET responses, including 404s and
 * redirects. Existing cache directives and cookies opt out.
 */
export function edgeCacheControlFor(
	request: Request,
	response: Response
): string | undefined {
	const shareable =
		request.method === 'GET' &&
		response.status < 500 &&
		!response.headers.has('Cache-Control') &&
		!response.headers.has('Set-Cookie');
	return shareable ? EDGE_CACHE_CONTROL : undefined;
}

export function isEdgeCacheable(response: Response): boolean {
	return response.headers.get('Cache-Control') === EDGE_CACHE_CONTROL;
}
