import * as server from '../entries/pages/archive/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/archive/_page.svelte.js'))
		.default);
export { server };
export const server_id = 'src/routes/archive/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/4.Bk5pFhuT.js',
	'_app/immutable/chunks/CSrylp8p.js',
	'_app/immutable/chunks/xihTtKlq.js',
	'_app/immutable/chunks/bGGqeocG.js',
	'_app/immutable/chunks/BkQs74dv.js',
	'_app/immutable/chunks/dp17nrVd.js'
];
export const stylesheets = [];
export const fonts = [];
