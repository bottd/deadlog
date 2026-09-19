import snapshot from '../../../stats/impact.json?raw';
import type { EntityImpact, EntityKind, ImpactSnapshot } from '@deadlog/stats';

const { impact } = JSON.parse(snapshot) as ImpactSnapshot;

export function impactFor(
	patchId: string,
	kind: EntityKind,
	id: number
): EntityImpact | null {
	return impact[patchId]?.[`${kind}:${id}`] ?? null;
}
