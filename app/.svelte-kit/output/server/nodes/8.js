import * as server from '../entries/pages/item/_slug_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/item/_slug_/_page.svelte.js'))
		.default);
export { server };
export const server_id = 'src/routes/item/[slug]/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/8.gEE5QvUa.js',
	'_app/immutable/chunks/CSrylp8p.js',
	'_app/immutable/chunks/xihTtKlq.js',
	'_app/immutable/chunks/CrkVz1YB.js',
	'_app/immutable/chunks/1gFtTxxl.js',
	'_app/immutable/chunks/Cips59vp.js',
	'_app/immutable/chunks/CfafoLPj.js',
	'_app/immutable/chunks/DQOGthuy.js',
	'_app/immutable/chunks/bGGqeocG.js',
	'_app/immutable/chunks/BkQs74dv.js',
	'_app/immutable/chunks/BZA8fNAE.js',
	'_app/immutable/chunks/DGUGVeMZ.js',
	'_app/immutable/chunks/C4XnHIoE.js',
	'_app/immutable/chunks/dp17nrVd.js',
	'_app/immutable/chunks/CBNvjb0G.js',
	'_app/immutable/chunks/Byt6hszL.js',
	'_app/immutable/chunks/BxaZbZlY.js'
];
export const stylesheets = [
	'_app/immutable/assets/changelog.BsxzltK7.css',
	'_app/immutable/assets/StatsBand.a3-fBLhT.css',
	'_app/immutable/assets/EntityChangelogPage.BK64ZZpq.css'
];
export const fonts = [];
