import { schema, type DrizzleDB } from '@deadlog/db';
import type { PatchRef, TouchedEntity } from './sliceWindows';

export interface PatchInputs {
	patches: PatchRef[];
	touched: Map<string, TouchedEntity[]>;
}

export async function readPatches(db: DrizzleDB): Promise<PatchInputs> {
	const [changelogs, heroLinks, itemLinks] = await Promise.all([
		db
			.select({ id: schema.changelogs.id, pubDate: schema.changelogs.pubDate })
			.from(schema.changelogs)
			.all(),
		db
			.select({
				changelogId: schema.changelogHeroes.changelogId,
				id: schema.changelogHeroes.heroId
			})
			.from(schema.changelogHeroes)
			.all(),
		db
			.select({
				changelogId: schema.changelogItems.changelogId,
				id: schema.changelogItems.itemId
			})
			.from(schema.changelogItems)
			.all()
	]);

	const patches = changelogs
		.map(({ id, pubDate }) => ({ id, at: Math.floor(Date.parse(pubDate) / 1000) }))
		.sort((a, b) => a.at - b.at || (a.id < b.id ? -1 : 1));

	const touched = new Map<string, TouchedEntity[]>();
	const link = (changelogId: string, entity: TouchedEntity) => {
		const list = touched.get(changelogId);
		if (list) list.push(entity);
		else touched.set(changelogId, [entity]);
	};
	for (const { changelogId, id } of heroLinks) link(changelogId, { kind: 'hero', id });
	for (const { changelogId, id } of itemLinks) link(changelogId, { kind: 'item', id });

	return { patches, touched };
}
