import { schema } from '@deadlog/db';
import { eq, or } from 'drizzle-orm';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, route }) => {
	// Changelog rendering also needs ability records; every other route only needs
	// entities known to appear in the archive (isReleased is set from the joins).
	const itemCondition =
		route.id === '/change/[id]'
			? or(eq(schema.items.isReleased, true), eq(schema.items.type, 'ability'))
			: eq(schema.items.isReleased, true);

	const [heroes, items] = await Promise.all([
		locals.db
			.select()
			.from(schema.heroes)
			.where(eq(schema.heroes.isReleased, true))
			.all(),
		locals.db.select().from(schema.items).where(itemCondition).all()
	]);

	return {
		heroes,
		items
	};
};
