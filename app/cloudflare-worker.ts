import { canonicalOriginRedirect } from './src/lib/server/canonical-origin';
import { isEdgeCacheable } from './src/lib/server/cache-policy';
// @ts-expect-error The generated module does not exist until the production build runs.
import generatedWorker from './.svelte-kit/cloudflare/_worker.js';

interface Env {
	ASSETS: Fetcher;
	PUBLIC_COUNTERSCALE_REPORTER_URL: string;
	PUBLIC_COUNTERSCALE_SITE_ID: string;
}

// includeSubDomains and preload are deliberately omitted: they commit every current and
// future subdomain to HTTPS for a year, which is a separate decision from securing
// deadlog.io itself.
const STRICT_TRANSPORT_SECURITY = 'max-age=31536000';

const svelteKitWorker = generatedWorker as {
	fetch(request: Request, env: Env, context: ExecutionContext): Promise<Response>;
};

// adapter-cloudflare 8 dropped its Cache API layer in favour of Workers Cache, which bills
// every request including static assets, so the edge cache lives here instead.
async function cachedResponse(request: Request): Promise<Response | undefined> {
	if (request.method !== 'GET' && request.method !== 'HEAD') return undefined;
	if (request.headers.get('Cache-Control')?.includes('no-cache')) return undefined;
	const hit = await caches.default.match(new Request(request, { method: 'GET' }));
	return hit && request.method === 'HEAD' ? new Response(null, hit) : hit;
}

function storeResponse(
	request: Request,
	response: Response,
	context: ExecutionContext
): void {
	if (request.method !== 'GET' || !isEdgeCacheable(response)) return;
	context.waitUntil(caches.default.put(request, response.clone()));
}

export default {
	async fetch(request, env, context) {
		let response = canonicalOriginRedirect(request) ?? (await cachedResponse(request));
		if (!response) {
			response = await svelteKitWorker.fetch(request, env, context);
			storeResponse(request, response, context);
		}

		// Only responses served over TLS carry HSTS; user agents ignore it otherwise, and
		// the canonical-origin redirect already upgrades plain-HTTP requests. The redirect
		// is deliberately inside this branch: the https www -> apex 308 is the only
		// response that ever pins a policy on www.deadlog.io.
		if (!request.url.startsWith('https:')) return response;

		const secured = new Response(response.body, response);
		secured.headers.set('Strict-Transport-Security', STRICT_TRANSPORT_SECURITY);
		return secured;
	}
} satisfies ExportedHandler<Env>;
