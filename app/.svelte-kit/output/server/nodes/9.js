import * as universal from '../entries/pages/items/_page.ts.js';

export const index = 9;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/items/_page.svelte.js')).default);
export { universal };
export const universal_id = 'src/routes/items/+page.ts';
export const imports = [
	'_app/immutable/nodes/9.CiUqG1yg.js',
	'_app/immutable/chunks/CSrylp8p.js',
	'_app/immutable/chunks/xihTtKlq.js',
	'_app/immutable/chunks/DQOGthuy.js',
	'_app/immutable/chunks/Cips59vp.js',
	'_app/immutable/chunks/CfafoLPj.js',
	'_app/immutable/chunks/bGGqeocG.js',
	'_app/immutable/chunks/SOIWy3ct.js',
	'_app/immutable/chunks/BkQs74dv.js',
	'_app/immutable/chunks/dp17nrVd.js',
	'_app/immutable/chunks/BxaZbZlY.js'
];
export const stylesheets = [];
export const fonts = [];
