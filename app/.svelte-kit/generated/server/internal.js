import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import {
	set_private_env,
	set_public_env
} from '../../../../node_modules/.pnpm/@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typescript-eslin_d34b0b60129670dccbfe83ef3c3382f5/node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {
		mode: 'auto',
		directives: { 'upgrade-insecure-requests': false, 'block-all-mixed-content': false },
		reportOnly: { 'upgrade-insecure-requests': false, 'block-all-mixed-content': false }
	},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: 'modulepreload',
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) =>
			'<!doctype html>\n<html lang="en" class="dark">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<meta\n\t\t\tname="viewport"\n\t\t\tcontent="width=device-width, initial-scale=1.0, viewport-fit=cover"\n\t\t/>\n\t\t<link rel="dns-prefetch" href="https://assets-bucket.deadlock-api.com" />\n\t\t<link rel="preconnect" href="https://assets-bucket.deadlock-api.com" crossorigin />\n\t\t<meta name="theme-color" content="#292522" />\n\t\t<link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n\t\t<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />\n\t\t<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />\n\t\t<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />\n\t\t<link rel="manifest" href="/site.webmanifest" />\n\t\t' +
			head +
			'\n\t</head>\n\t<body data-sveltekit-preload-data="hover">\n\t\t<div style="display: contents">' +
			body +
			'</div>\n\t</body>\n</html>\n',
		error
	},
	version_hash: '5bzrq4'
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	({ handle, handleFetch, handleError, handleValidationError, init } =
		await import('../../../src/hooks.server.ts'));

	let reroute;
	let transport;

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export {
	set_assets,
	set_building,
	set_manifest,
	set_prerendering,
	set_private_env,
	set_public_env,
	set_read_implementation
};
