import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/2.CLD00a-x.js',
	'_app/immutable/chunks/CSrylp8p.js',
	'_app/immutable/chunks/xihTtKlq.js',
	'_app/immutable/chunks/1gFtTxxl.js',
	'_app/immutable/chunks/Cips59vp.js',
	'_app/immutable/chunks/CfafoLPj.js',
	'_app/immutable/chunks/DQOGthuy.js',
	'_app/immutable/chunks/bGGqeocG.js',
	'_app/immutable/chunks/BkQs74dv.js',
	'_app/immutable/chunks/BZA8fNAE.js',
	'_app/immutable/chunks/DGUGVeMZ.js',
	'_app/immutable/chunks/C4XnHIoE.js',
	'_app/immutable/chunks/dp17nrVd.js'
];
export const stylesheets = ['_app/immutable/assets/changelog.BsxzltK7.css'];
export const fonts = [];
