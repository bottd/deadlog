import { WorkerEntrypoint } from 'cloudflare:workers';
import { canonicalOriginRedirect } from './src/lib/server/canonical-origin';
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

// Workers Cache keys on path and query only and answers before the Worker runs, so the
// canonical-origin redirect and HSTS live in this uncached gateway in front of the cached
// SvelteKit entrypoint.
export class SvelteKit extends WorkerEntrypoint<Env> {
	fetch(request: Request): Promise<Response> {
		return svelteKitWorker.fetch(request, this.env, this.ctx);
	}
}

export default {
	async fetch(request, _env, context) {
		const response =
			canonicalOriginRedirect(request) ??
			(await context.exports.SvelteKit.fetch(request));

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

declare global {
	// Declaration merging into workers-types' namespace is how `ctx.exports` gets typed.
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cloudflare {
		interface GlobalProps {
			mainModule: typeof import('./cloudflare-worker');
		}
	}
}
