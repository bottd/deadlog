import { z } from 'zod';
import type { EntityImpact, ImpactSnapshot } from './types';

const windowSchema = z.object({
	winRate: z.number().nullable(),
	pickRate: z.number().nullable(),
	matches: z.number(),
	days: z.number(),
	closed: z.boolean()
});

const tierSchema = z.object({ before: windowSchema, after: windowSchema });

export const snapshotSchema = z.object({
	generatedAt: z.string(),
	highRankMinBadge: z.number(),
	minWindowMatches: z.number(),
	impact: z.record(
		z.string(),
		z.record(z.string(), z.object({ all: tierSchema, high: tierSchema }))
	)
});

export const isClosed = (entity: EntityImpact): boolean =>
	entity.all.after.closed && entity.high.after.closed;

export function mergeSnapshot(
	existing: ImpactSnapshot | null,
	fresh: ImpactSnapshot,
	options: { rebuild: boolean }
): ImpactSnapshot {
	if (!existing || options.rebuild) return fresh;

	if (
		existing.highRankMinBadge !== fresh.highRankMinBadge ||
		existing.minWindowMatches !== fresh.minWindowMatches
	) {
		throw new Error(
			`Snapshot was built with highRankMinBadge=${existing.highRankMinBadge}, minWindowMatches=${existing.minWindowMatches}; ` +
				`current constants are ${fresh.highRankMinBadge} and ${fresh.minWindowMatches}. Run with --rebuild to regenerate every window.`
		);
	}

	const impact: ImpactSnapshot['impact'] = {};
	const put = (patchId: string, key: string, entity: EntityImpact) => {
		(impact[patchId] ??= {})[key] = entity;
	};

	for (const [patchId, entities] of Object.entries(fresh.impact)) {
		for (const [key, entity] of Object.entries(entities)) put(patchId, key, entity);
	}
	for (const [patchId, entities] of Object.entries(existing.impact)) {
		for (const [key, entity] of Object.entries(entities)) {
			if (isClosed(entity)) put(patchId, key, entity);
		}
	}

	return { ...fresh, impact };
}

const byKey = <T>(record: Record<string, T>): [string, T][] =>
	Object.entries(record).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));

export function serialiseImpact(impact: ImpactSnapshot['impact']): string {
	const patches = byKey(impact).map(([patchId, entities]) => {
		const lines = byKey(entities).map(
			([key, entity]) => `\t\t\t${JSON.stringify(key)}: ${JSON.stringify(entity)}`
		);
		return `\t\t${JSON.stringify(patchId)}: {\n${lines.join(',\n')}\n\t\t}`;
	});
	return patches.length ? `{\n${patches.join(',\n')}\n\t}` : '{}';
}

export function serialise(snapshot: ImpactSnapshot): string {
	return [
		'{',
		`\t"generatedAt": ${JSON.stringify(snapshot.generatedAt)},`,
		`\t"highRankMinBadge": ${snapshot.highRankMinBadge},`,
		`\t"minWindowMatches": ${snapshot.minWindowMatches},`,
		`\t"impact": ${serialiseImpact(snapshot.impact)}`,
		'}',
		''
	].join('\n');
}
