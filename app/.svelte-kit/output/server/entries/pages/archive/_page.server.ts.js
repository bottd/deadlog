import { T as getPatchArchive } from '../../../chunks/src.js';
//#region src/routes/archive/+page.server.ts
var prerender = true;
var load = async ({ locals }) => ({ patches: await getPatchArchive(locals.db) });
//#endregion
export { load, prerender };
