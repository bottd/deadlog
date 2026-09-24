export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.C_4-ok8v.js',
	'_app/immutable/chunks/CSrylp8p.js',
	'_app/immutable/chunks/xihTtKlq.js',
	'_app/immutable/chunks/CfafoLPj.js',
	'_app/immutable/chunks/Cips59vp.js',
	'_app/immutable/chunks/BkQs74dv.js',
	'_app/immutable/chunks/BZA8fNAE.js',
	'_app/immutable/chunks/C4XnHIoE.js',
	'_app/immutable/chunks/dp17nrVd.js'
];
export const stylesheets = [];
export const fonts = [];
