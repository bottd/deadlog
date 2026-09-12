import { getPatchArchive } from '@deadlog/db';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ locals }) => ({
	patches: await getPatchArchive(locals.db)
});
