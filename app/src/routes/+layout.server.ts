import { schema } from '@deadlog/db';
import { eq } from 'drizzle-orm';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, route }) => {
	// Detail pages render historical records as well as currently released entities.
	const releaseCondition =
		route.id === '/change/[id]' ? undefined : eq(schema.heroes.isReleased, true);
	const itemReleaseCondition =
		route.id === '/change/[id]' ? undefined : eq(schema.items.isReleased, true);

	const [heroes, items] = await Promise.all([
		locals.db.select().from(schema.heroes).where(releaseCondition).all(),
		locals.db.select().from(schema.items).where(itemReleaseCondition).all()
	]);

	return {
		heroes,
		items
	};
};
