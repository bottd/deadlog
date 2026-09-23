import type { AbilityOrder } from '@deadlog/utils';
import {
	ABILITY_UNLOCK_AND_UPGRADES,
	ORDER_METHOD_VERSION,
	RELATED_MIN_APPEARANCES
} from './constants';
import type { AbilityOrderRow } from './types';

function firstMaxed(rows: AbilityOrderRow[], abilityIds: number[]) {
	const known = new Set(abilityIds);
	const counts = new Map(abilityIds.map((id) => [id, 0]));
	let matches = 0;
	for (const row of rows) {
		matches += row.matches;
		const seen = new Map<number, number>();
		for (const id of row.abilities) {
			const count = (seen.get(id) ?? 0) + 1;
			seen.set(id, count);
			if (count === ABILITY_UNLOCK_AND_UPGRADES) {
				if (known.has(id)) counts.set(id, (counts.get(id) ?? 0) + row.matches);
				break;
			}
		}
	}
	return { matches, counts };
}

export function selectAbilityOrder(input: {
	abilityIds: number[];
	before: AbilityOrderRow[];
	after?: AbilityOrderRow[];
}): AbilityOrder | null {
	const before = firstMaxed(input.before, input.abilityIds);
	if (before.matches < RELATED_MIN_APPEARANCES) return null;
	const after = input.after && firstMaxed(input.after, input.abilityIds);
	const withAfter = after !== undefined && after.matches >= RELATED_MIN_APPEARANCES;
	return {
		methodVersion: ORDER_METHOD_VERSION,
		matches: before.matches,
		...(withAfter && { afterMatches: after.matches }),
		abilities: input.abilityIds.map((id) => ({
			id,
			before: before.counts.get(id) ?? 0,
			...(withAfter && { after: after.counts.get(id) ?? 0 })
		}))
	};
}
