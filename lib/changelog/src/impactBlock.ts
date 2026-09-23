import type { EntityImpact, ImpactWindow, PatchStats } from '@deadlog/utils';
import { z } from 'zod';

const TIERS = ['all', 'high'] as const;
const SIDES = ['before', 'after'] as const;

const rateSchema = z.number().min(0).nullable();
const countSchema = z.number().int().min(0);
const windowSchema = z.strictObject({
	win: rateSchema,
	pick: rateSchema,
	matches: countSchema,
	days: countSchema,
	total: countSchema,
	covered: countSchema,
	coverage: z.enum(['complete', 'incomplete'])
});
const tierSchema = z.strictObject({ before: windowSchema, after: windowSchema });
const impactSchema = z.strictObject({
	closed: z.boolean(),
	all: tierSchema,
	high: tierSchema
});

const rate = (value: number | null): string => (value === null ? '#null' : String(value));

const windowLine = (side: string, window: ImpactWindow): string =>
	`    ${side} win=${rate(window.win)} pick=${rate(window.pick)} matches=${window.matches} days=${window.days} total=${window.total} covered=${window.covered} coverage="${window.coverage}"`;

export function writeImpactNode(impact: EntityImpact): string[] {
	return [
		`impact closed=#${impact.closed} {`,
		...TIERS.flatMap((tier) => [
			`  ${tier} {`,
			...SIDES.map((side) => windowLine(side, impact[tier][side])),
			'  }'
		]),
		'}'
	];
}

export function parseImpact(value: unknown): EntityImpact {
	const result = impactSchema.safeParse(value);
	if (!result.success) {
		throw new Error(`Malformed impact block: ${z.prettifyError(result.error)}`);
	}
	return result.data;
}

const daySchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const intervalSchema = z
	.strictObject({ from: daySchema.nullable(), to: daySchema.nullable() })
	.transform(({ from, to }, context) => {
		if (from === null && to === null) return null;
		if (from === null || to === null || from >= to) {
			context.addIssue({
				code: 'custom',
				message: 'an interval needs from < to, or neither'
			});
			return z.NEVER;
		}
		return { from, to };
	});
const statsSchema = z
	.strictObject({
		schema: z.literal(2),
		method: z.number().int().positive(),
		collected: z.iso.datetime(),
		before: intervalSchema,
		after: intervalSchema,
		siblings: z.union([z.string(), z.array(z.string())]).optional()
	})
	.transform(({ schema, method, collected, before, after, siblings }): PatchStats => ({
		schemaVersion: schema,
		methodVersion: method,
		collectedAt: collected,
		before,
		after,
		siblings: siblings === undefined ? [] : [siblings].flat()
	}));

export function parseStats(value: unknown): PatchStats {
	const version = (value as { schema?: unknown } | null)?.schema;
	if (version !== 2) {
		throw new Error(
			`Unsupported stats schema ${JSON.stringify(version)}; this build reads 2`
		);
	}
	const result = statsSchema.safeParse(value);
	if (!result.success) {
		throw new Error(`Malformed stats node: ${z.prettifyError(result.error)}`);
	}
	return result.data;
}

const quoted = (value: string | null): string =>
	value === null ? '#null' : JSON.stringify(value);

export function writeStatsNode(stats: PatchStats): string[] {
	const interval = (side: 'before' | 'after') =>
		`  ${side} from=${quoted(stats[side]?.from ?? null)} to=${quoted(stats[side]?.to ?? null)}`;
	return [
		`stats schema=${stats.schemaVersion} method=${stats.methodVersion} collected=${quoted(stats.collectedAt)} {`,
		interval('before'),
		interval('after'),
		...(stats.siblings.length
			? [`  siblings ${stats.siblings.map(quoted).join(' ')}`]
			: []),
		'}'
	];
}
