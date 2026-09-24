import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export { server };
export const server_id = 'src/routes/+layout.server.ts';
export const imports = [
	'_app/immutable/nodes/0.CGTOe4H-.js',
	'_app/immutable/chunks/CSrylp8p.js',
	'_app/immutable/chunks/xihTtKlq.js',
	'_app/immutable/chunks/B7jpYZsL.js',
	'_app/immutable/chunks/CfafoLPj.js',
	'_app/immutable/chunks/Cips59vp.js',
	'_app/immutable/chunks/1gFtTxxl.js',
	'_app/immutable/chunks/DQOGthuy.js',
	'_app/immutable/chunks/bGGqeocG.js',
	'_app/immutable/chunks/BkQs74dv.js',
	'_app/immutable/chunks/BZA8fNAE.js'
];
export const stylesheets = ['_app/immutable/assets/0.BOofR7gy.css'];
export const fonts = [];
