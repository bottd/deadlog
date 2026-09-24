//#region ../node_modules/.pnpm/@sveltejs+kit@2.70.3_@sveltejs+vite-plugin-svelte@7.3.0_svelte@5.57.0_@typescript-eslin_d34b0b60129670dccbfe83ef3c3382f5/node_modules/@sveltejs/kit/src/runtime/app/paths/internal/server.js
var base = '';
var assets = base;
var app_dir = '_app';
var initial = {
	base,
	assets
};
initial.base;
/**
 * @param {{ base: string, assets: string }} paths
 */
function override(paths) {
	base = paths.base;
	assets = paths.assets;
}
function reset() {
	base = initial.base;
	assets = initial.assets;
}
/** @param {string} path */
function set_assets(path) {
	assets = initial.assets = path;
}
//#endregion
export {
	reset as a,
	override as i,
	assets as n,
	set_assets as o,
	base as r,
	app_dir as t
};
