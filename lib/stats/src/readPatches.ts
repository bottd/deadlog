import { schema, type DrizzleDB } from '@deadlog/db';
import type { EntityImpact } from '@deadlog/utils';
import type { PatchRef, TouchedEntity } from './sliceWindows';
import type { EntityKind } from './types';

export interface StatsPatch extends PatchRef {
	slug: string;
}

export interface RecordedEntity extends TouchedEntity {
	recorded: EntityImpact | null;
}

export interface NamedEntity {
	id: number;
	name: string;
}

export interface PatchInputs {
	patches: StatsPatch[];
	touched: Map<string, RecordedEntity[]>;
	entities: Record<EntityKind, NamedEntity[]>;
}

export async function readPatches(db: DrizzleDB): Promise<PatchInputs> {
	const [changelogs, heroLinks, itemLinks, heroes, items] = await Promise.all([
		db
			.select({
				id: schema.changelogs.id,
				slug: schema.changelogs.slug,
				pubDate: schema.changelogs.pubDate
			})
			.from(schema.changelogs)
			.all(),
		db
			.select({
				changelogId: schema.changelogHeroes.changelogId,
				id: schema.changelogHeroes.heroId,
				recorded: schema.changelogHeroes.impact
			})
			.from(schema.changelogHeroes)
			.all(),
		db
			.select({
				changelogId: schema.changelogItems.changelogId,
				id: schema.changelogItems.itemId,
				recorded: schema.changelogItems.impact
			})
			.from(schema.changelogItems)
			.all(),
		db
			.select({ id: schema.heroes.id, name: schema.heroes.name })
			.from(schema.heroes)
			.all(),
		db.select({ id: schema.items.id, name: schema.items.name }).from(schema.items).all()
	]);

	const patches = changelogs
		.map(({ id, slug, pubDate }) => ({
			id,
			slug,
			at: Math.floor(Date.parse(pubDate) / 1000)
		}))
		.sort((a, b) => a.at - b.at || (a.id < b.id ? -1 : 1));

	const touched = new Map<string, RecordedEntity[]>();
	const link = (changelogId: string, entity: RecordedEntity) => {
		const list = touched.get(changelogId);
		if (list) list.push(entity);
		else touched.set(changelogId, [entity]);
	};
	for (const { changelogId, id, recorded } of heroLinks)
		link(changelogId, { kind: 'hero', id, recorded });
	for (const { changelogId, id, recorded } of itemLinks)
		link(changelogId, { kind: 'item', id, recorded });

	return { patches, touched, entities: { hero: heroes, item: items } };
}
