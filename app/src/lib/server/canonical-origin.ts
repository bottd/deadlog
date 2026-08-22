const CANONICAL_HOST = 'deadlog.io';

export function canonicalOriginRedirect(request: Request): Response | undefined {
	const url = new URL(request.url);
	const redirectHost = url.hostname === `www.${CANONICAL_HOST}`;
	const redirectProtocol = url.hostname === CANONICAL_HOST && url.protocol === 'http:';

	if (!redirectHost && !redirectProtocol) return;

	url.protocol = 'https:';
	url.hostname = CANONICAL_HOST;
	url.port = '';

	return new Response(null, {
		status: 308,
		headers: { location: url.toString() }
	});
}
