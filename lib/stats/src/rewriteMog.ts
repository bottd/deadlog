import { spliceImpactBlocks } from '@deadlog/changelog';
import { findEntityName, indexEntityNames, type PatchStats } from '@deadlog/utils';
import type { NamedEntity } from './readPatches';
import type { SlicedImpact } from './sliceWindows';
import type { EntityKind } from './types';

export type EntityIndex = Record<EntityKind, Map<string, NamedEntity>>;

export function indexEntities(entities: Record<EntityKind, NamedEntity[]>): EntityIndex {
	return {
		hero: indexEntityNames(entities.hero, (hero) => hero.name),
		item: indexEntityNames(entities.item, (item) => item.name)
	};
}

export async function upsertImpactBlocks(
	source: string,
	impacts: SlicedImpact[],
	index: EntityIndex,
	options: { stats?: PatchStats; removeOthers?: boolean } = {}
): Promise<string> {
	const pending = new Map(impacts.map((entry) => [`${entry.kind}:${entry.id}`, entry]));

	const next = await spliceImpactBlocks(
		source,
		(block) => {
			const id = findEntityName(index[block.type], block.name)?.id;
			const key = `${block.type}:${id}`;
			const entry = pending.get(key);
			pending.delete(key);
			if (entry) return entry.impact;
			return options.removeOthers && block.enrichment.impact ? null : undefined;
		},
		options.stats
	);

	if (pending.size > 0) {
		throw new Error(`No block found for ${[...pending.keys()].join(', ')}`);
	}
	return next;
}
