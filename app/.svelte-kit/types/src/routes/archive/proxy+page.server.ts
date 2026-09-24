// @ts-nocheck
import { getPatchArchive } from '@deadlog/db';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => ({
	patches: await getPatchArchive(locals.db)
});
