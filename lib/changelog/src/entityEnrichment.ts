import {
	RELATED_ITEMS_LIMIT,
	type EntityImpact,
	type RelatedItems
} from '@deadlog/utils';
import { z } from 'zod';
import { parseImpact, writeImpactNode, type ImpactSchemaVersion } from './impactBlock';

export interface EntityEnrichment {
	impact?: EntityImpact;
	related?: RelatedItems;
}

export type EnrichmentUpdate = {
	[Field in keyof EntityEnrichment]?: EntityEnrichment[Field] | null;
};

const FIELDS = ['impact', 'related'];
const ITEM_KEY = /^item-(\d+)$/;

const countSchema = z.number().int().min(0);
const relatedSchema = z
	.strictObject({
		method: z.number().int().positive(),
		status: z.enum(['complete', 'no-window', 'insufficient-sample']),
		appearances: countSchema,
		candidates: z.string().regex(/^\d+(,\d+)*$/)
	})
	.catchall(z.strictObject({ buyers: countSchema }));

export function parseRelated(value: unknown): RelatedItems {
	const result = relatedSchema.safeParse(value);
	if (!result.success) {
		throw new Error(`Malformed related block: ${z.prettifyError(result.error)}`);
	}
	const { method, status, appearances, candidates, ...rest } = result.data;
	const items = Object.entries(rest).map(([key, item]) => {
		const id = ITEM_KEY.exec(key)?.[1];
		if (!id) throw new Error(`Malformed related block: unknown key "${key}"`);
		return { id: Number(id), buyers: item.buyers };
	});
	if (items.length > RELATED_ITEMS_LIMIT) {
		throw new Error(`Malformed related block: more than ${RELATED_ITEMS_LIMIT} items`);
	}
	if (status !== 'complete' && items.length > 0) {
		throw new Error(`Malformed related block: items recorded with status "${status}"`);
	}
	return {
		methodVersion: method,
		status,
		appearances,
		candidates: candidates.split(',').map(Number),
		items
	};
}

function writeRelatedNode(related: RelatedItems): string[] {
	const head = `related method=${related.methodVersion} status="${related.status}" appearances=${related.appearances} candidates="${related.candidates.join(',')}"`;
	if (related.items.length === 0) return [head];
	return [
		`${head} {`,
		...related.items.map((item) => `  item-${item.id} buyers=${item.buyers}`),
		'}'
	];
}

export function parseEnrichment(
	plain: Record<string, unknown> | undefined,
	kind: 'hero' | 'item',
	version: ImpactSchemaVersion
): EntityEnrichment {
	const keys = Object.keys(plain ?? {});
	const unknown = keys.filter((key) => !FIELDS.includes(key));
	if (unknown.length > 0) {
		throw new Error(
			`an entity attr block holds only ${FIELDS.join(' and ')}, not "${unknown[0]}"`
		);
	}
	if (plain?.related !== undefined && kind !== 'hero') {
		throw new Error('only a hero block takes related items');
	}
	return {
		...(plain?.impact !== undefined && { impact: parseImpact(plain.impact, version) }),
		...(plain?.related !== undefined && { related: parseRelated(plain.related) })
	};
}

export function applyUpdate(
	current: EntityEnrichment,
	update: EnrichmentUpdate
): EntityEnrichment {
	const impact = update.impact === undefined ? current.impact : update.impact;
	const related = update.related === undefined ? current.related : update.related;
	return { ...(impact && { impact }), ...(related && { related }) };
}

export function writeEnrichmentBlock(enrichment: EntityEnrichment): string[] {
	const body = [
		...(enrichment.impact ? writeImpactNode(enrichment.impact) : []),
		...(enrichment.related ? writeRelatedNode(enrichment.related) : [])
	];
	return body.length === 0 ? [] : ['``attr:', ...body, '``'];
}
