import { t as building } from '../../chunks/internal2.js';
import { L as items, j as heroes } from '../../chunks/src.js';
import { i as pickHeroImages } from '../../chunks/entityImages2.js';
import { eq } from 'drizzle-orm';
//#region src/routes/+layout.server.ts
var load = async ({ locals }) => {
	if (!building && true)
		return {
			heroes: [],
			items: []
		};
	const [heroes$1, items$1] = await Promise.all([
		locals.db.select().from(heroes).where(eq(heroes.isReleased, true)).all(),
		locals.db
			.select({
				id: items.id,
				name: items.name,
				slug: items.slug,
				className: items.className,
				type: items.type,
				category: items.category,
				tier: items.tier,
				image: items.image,
				isReleased: items.isReleased
			})
			.from(items)
			.where(eq(items.isReleased, true))
			.all()
	]);
	return {
		heroes: heroes$1.map((hero) => ({
			...hero,
			images: pickHeroImages(hero.images)
		})),
		items: items$1
	};
};
//#endregion
export { load };
