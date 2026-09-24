import * as universal from '../entries/pages/change/_...slug_/_page.ts.js';
import * as server from '../entries/pages/change/_...slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/change/_...slug_/_page.svelte.js'))
		.default);
export { universal };
export const universal_id = 'src/routes/change/[...slug]/+page.ts';
export { server };
export const server_id = 'src/routes/change/[...slug]/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/5.cKGfBggt.js',
	'_app/immutable/chunks/CSrylp8p.js',
	'_app/immutable/chunks/Cips59vp.js',
	'_app/immutable/chunks/uBIymjUX.js',
	'_app/immutable/chunks/xihTtKlq.js',
	'_app/immutable/chunks/CfafoLPj.js',
	'_app/immutable/chunks/1gFtTxxl.js',
	'_app/immutable/chunks/DQOGthuy.js',
	'_app/immutable/chunks/bGGqeocG.js',
	'_app/immutable/chunks/BkQs74dv.js',
	'_app/immutable/chunks/BZA8fNAE.js',
	'_app/immutable/chunks/DGUGVeMZ.js',
	'_app/immutable/chunks/C4XnHIoE.js',
	'_app/immutable/chunks/dp17nrVd.js',
	'_app/immutable/chunks/Byt6hszL.js',
	'_app/immutable/chunks/C8Y4yTRY.js'
];
export const stylesheets = [
	'_app/immutable/assets/changelog.BsxzltK7.css',
	'_app/immutable/assets/StatsBand.a3-fBLhT.css',
	'_app/immutable/assets/_virtual_mog-arborium.E39SMIxX.css'
];
export const fonts = [];
