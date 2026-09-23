import { eq } from 'drizzle-orm';
import type { DrizzleDB } from './client';
import * as schema from './schema';
import { getHeroIconsByIds } from './queries';

/** Build-time inputs for one patch; the app projects these before serialization. */
export async function getPatchReadingData(db: DrizzleDB, changelogId: string) {
	const [heroes, items, abilities, links] = await Promise.all([
		db
			.select({
				id: schema.heroes.id,
				name: schema.heroes.name,
				groups: schema.changelogHeroes.changeGroups,
				abilityOrder: schema.changelogHeroes.abilityOrder
			})
			.from(schema.changelogHeroes)
			.innerJoin(schema.heroes, eq(schema.heroes.id, schema.changelogHeroes.heroId))
			.where(eq(schema.changelogHeroes.changelogId, changelogId))
			.all(),
		db
			.select({
				id: schema.items.id,
				name: schema.items.name,
				slug: schema.items.slug,
				groups: schema.changelogItems.changeGroups,
				context: schema.items.context,
				boughtBy: schema.changelogItems.boughtBy,
				impact: schema.changelogItems.impact
			})
			.from(schema.changelogItems)
			.innerJoin(schema.items, eq(schema.items.id, schema.changelogItems.itemId))
			.where(eq(schema.changelogItems.changelogId, changelogId))
			.all(),
		db
			.select({
				heroId: schema.heroAbilities.heroId,
				name: schema.heroAbilities.name,
				slug: schema.heroAbilities.slug,
				context: schema.heroAbilities.context,
				image: schema.heroAbilities.image,
				assetId: schema.heroAbilities.assetId
			})
			.from(schema.heroAbilities)
			.innerJoin(
				schema.changelogHeroes,
				eq(schema.changelogHeroes.heroId, schema.heroAbilities.heroId)
			)
			.where(eq(schema.changelogHeroes.changelogId, changelogId))
			.all(),
		db
			.select({
				entityType: schema.propertyEvents.entityType,
				entityId: schema.propertyEvents.entityId,
				changelogId: schema.propertyEvents.changelogId,
				groupIndex: schema.propertyEvents.groupIndex,
				bulletIndex: schema.propertyEvents.bulletIndex,
				property: schema.propertyEvents.property,
				digest: schema.propertyEvents.digest,
				extractionVersion: schema.propertyEvents.extractionVersion,
				previousOld: schema.propertyEvents.previousOld,
				previousNew: schema.propertyEvents.previousNew,
				previousSlug: schema.changelogs.slug,
				previousPubDate: schema.changelogs.pubDate
			})
			.from(schema.propertyEvents)
			.innerJoin(
				schema.changelogs,
				eq(schema.changelogs.id, schema.propertyEvents.previousChangelogId)
			)
			.where(eq(schema.propertyEvents.changelogId, changelogId))
			.all()
	]);
	const heroIcons = await getHeroIconsByIds(
		db,
		items.flatMap((item) => item.boughtBy?.heroes.map((hero) => hero.id) ?? [])
	);
	return { heroes, items, abilities, links, heroIcons };
}

export type PatchReadingData = Awaited<ReturnType<typeof getPatchReadingData>>;
