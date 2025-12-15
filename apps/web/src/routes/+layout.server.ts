import { getAllHeroes, getAllItems } from '@deadlog/scraper';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const [heroes, items] = await Promise.all([
		getAllHeroes(locals.db),
		getAllItems(locals.db)
	]);

	return {
		heroes,
		items
	};
};
