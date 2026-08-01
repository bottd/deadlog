import { schema } from '@deadlog/db';
import { eq } from 'drizzle-orm';
import { pickHeroImages } from '$lib/utils/entityImages';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const [heroes, items] = await Promise.all([
		locals.db
			.select()
			.from(schema.heroes)
			.where(eq(schema.heroes.isReleased, true))
			.all(),
		// Keep the shared layout payload explicit so item-table additions do not
		// silently ride into every prerendered page.
		locals.db
			.select({
				id: schema.items.id,
				name: schema.items.name,
				slug: schema.items.slug,
				className: schema.items.className,
				type: schema.items.type,
				category: schema.items.category,
				tier: schema.items.tier,
				image: schema.items.image,
				isReleased: schema.items.isReleased
			})
			.from(schema.items)
			.where(eq(schema.items.isReleased, true))
			.all()
	]);

	return {
		// This payload is serialized into every page for the header's filter, so the
		// unused image keys were pure weight on all ~200 prerendered pages.
		heroes: heroes.map((hero) => ({ ...hero, images: pickHeroImages(hero.images) })),
		items
	};
};
