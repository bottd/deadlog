import {
	BOUGHT_BY_LIMIT,
	RELATED_ITEMS_LIMIT,
	type AbilityOrder,
	type BoughtBy,
	type EntityImpact,
	type RelatedItems
} from '@deadlog/utils';
import { z } from 'zod';
import {
	countSchema,
	methodSchema,
	parseImpact,
	parseWith,
	prop,
	writeImpactNode
} from './impactBlock';

export interface EntityEnrichment {
	impact?: EntityImpact;
	related?: RelatedItems;
	order?: AbilityOrder;
	bought?: BoughtBy;
}

export type EnrichmentUpdate = {
	[Field in keyof EntityEnrichment]?: EntityEnrichment[Field] | null;
};

function keyed<T extends object>(
	label: string,
	prefix: string,
	rest: Record<string, T>
): (T & { id: number })[] {
	const pattern = new RegExp(`^${prefix}-(\\d+)$`);
	return Object.entries(rest).map(([key, value]) => {
		const id = pattern.exec(key)?.[1];
		if (!id) throw new Error(`Malformed ${label} block: unknown key "${key}"`);
		return { id: Number(id), ...value };
	});
}

function requireAfterTotal(
	label: string,
	total: number | undefined,
	entries: { after?: number }[]
): void {
	if ((total === undefined) !== entries.every((entry) => entry.after === undefined)) {
		throw new Error(`Malformed ${label} block: after counts need an after total`);
	}
}

const relatedSchema = z
	.strictObject({
		method: methodSchema,
		status: z.enum(['complete', 'no-window', 'insufficient-sample']),
		appearances: countSchema,
		'after-appearances': countSchema.optional(),
		candidates: z.string().regex(/^\d+(,\d+)*$/)
	})
	.catchall(z.strictObject({ buyers: countSchema, after: countSchema.optional() }));

export function parseRelated(value: unknown): RelatedItems {
	const {
		method,
		status,
		appearances,
		'after-appearances': afterAppearances,
		candidates,
		...rest
	} = parseWith('related block', relatedSchema, value);
	const items = keyed('related', 'item', rest);
	if (items.length > RELATED_ITEMS_LIMIT) {
		throw new Error(`Malformed related block: more than ${RELATED_ITEMS_LIMIT} items`);
	}
	if (status !== 'complete' && items.length > 0) {
		throw new Error(`Malformed related block: items recorded with status "${status}"`);
	}
	requireAfterTotal('related', afterAppearances, items);
	return {
		methodVersion: method,
		status,
		appearances,
		...(afterAppearances !== undefined && { afterAppearances }),
		candidates: candidates.split(',').map(Number),
		items
	};
}

const orderSchema = z
	.strictObject({
		method: methodSchema,
		matches: countSchema,
		'after-matches': countSchema.optional()
	})
	.catchall(z.strictObject({ before: countSchema, after: countSchema.optional() }));

function parseOrder(value: unknown): AbilityOrder {
	const {
		method,
		matches,
		'after-matches': afterMatches,
		...rest
	} = parseWith('order block', orderSchema, value);
	const abilities = keyed('order', 'ability', rest);
	requireAfterTotal('order', afterMatches, abilities);
	return {
		methodVersion: method,
		matches,
		...(afterMatches !== undefined && { afterMatches }),
		abilities
	};
}

const boughtSchema = z.strictObject({ method: methodSchema }).catchall(
	z.strictObject({
		buyers: countSchema,
		appearances: countSchema,
		'after-buyers': countSchema.optional(),
		'after-appearances': countSchema.optional()
	})
);

function parseBought(value: unknown): BoughtBy {
	const { method, ...rest } = parseWith('bought block', boughtSchema, value);
	const heroes = keyed('bought', 'hero', rest);
	if (heroes.length > BOUGHT_BY_LIMIT) {
		throw new Error(`Malformed bought block: more than ${BOUGHT_BY_LIMIT} heroes`);
	}
	return {
		methodVersion: method,
		heroes: heroes.map(
			({
				'after-buyers': afterBuyers,
				'after-appearances': afterAppearances,
				...hero
			}) => {
				requireAfterTotal('bought', afterAppearances, [{ after: afterBuyers }]);
				return {
					...hero,
					...(afterBuyers !== undefined && { afterBuyers, afterAppearances })
				};
			}
		)
	};
}

function node(head: string, children: string[]): string[] {
	return children.length === 0
		? [head]
		: [`${head} {`, ...children.map((line) => `  ${line}`), '}'];
}

const writeRelatedNode = (related: RelatedItems): string[] =>
	node(
		`related method=${related.methodVersion} status="${related.status}" appearances=${related.appearances}${prop('after-appearances', related.afterAppearances)} candidates="${related.candidates.join(',')}"`,
		related.items.map(
			(item) => `item-${item.id} buyers=${item.buyers}${prop('after', item.after)}`
		)
	);

const writeOrderNode = (order: AbilityOrder): string[] =>
	node(
		`order method=${order.methodVersion} matches=${order.matches}${prop('after-matches', order.afterMatches)}`,
		order.abilities.map(
			(entry) => `ability-${entry.id} before=${entry.before}${prop('after', entry.after)}`
		)
	);

const writeBoughtNode = (bought: BoughtBy): string[] =>
	node(
		`bought method=${bought.methodVersion}`,
		bought.heroes.map(
			(hero) =>
				`hero-${hero.id} buyers=${hero.buyers} appearances=${hero.appearances}${prop('after-buyers', hero.afterBuyers)}${prop('after-appearances', hero.afterAppearances)}`
		)
	);

type Kind = 'hero' | 'item';

const FIELDS: {
	[Field in keyof EntityEnrichment]-?: {
		kinds: Kind[];
		parse: (value: unknown) => NonNullable<EntityEnrichment[Field]>;
		write: (value: NonNullable<EntityEnrichment[Field]>) => string[];
	};
} = {
	impact: { kinds: ['hero', 'item'], parse: parseImpact, write: writeImpactNode },
	related: { kinds: ['hero'], parse: parseRelated, write: writeRelatedNode },
	order: { kinds: ['hero'], parse: parseOrder, write: writeOrderNode },
	bought: { kinds: ['item'], parse: parseBought, write: writeBoughtNode }
};
const FIELD_NAMES = Object.keys(FIELDS) as (keyof EntityEnrichment)[];

export function parseEnrichment(
	plain: Record<string, unknown> | undefined,
	kind: Kind
): EntityEnrichment {
	const keys = Object.keys(plain ?? {});
	const unknown = keys.find((key) => !(FIELD_NAMES as string[]).includes(key));
	if (unknown !== undefined) {
		throw new Error(
			`an entity attr block holds only ${FIELD_NAMES.join(', ')}, not "${unknown}"`
		);
	}
	const enrichment: EntityEnrichment = {};
	for (const field of FIELD_NAMES) {
		const value = plain?.[field];
		if (value === undefined) continue;
		if (!FIELDS[field].kinds.includes(kind)) {
			throw new Error(
				`only ${kind === 'hero' ? 'an item' : 'a hero'} block takes ${field}`
			);
		}
		Object.assign(enrichment, { [field]: FIELDS[field].parse(value) });
	}
	return enrichment;
}

export function applyUpdate(
	current: EntityEnrichment,
	update: EnrichmentUpdate
): EntityEnrichment {
	const next: EntityEnrichment = {};
	for (const field of FIELD_NAMES) {
		const value = update[field] === undefined ? current[field] : update[field];
		if (value) Object.assign(next, { [field]: value });
	}
	return next;
}

export function writeEnrichmentBlock(enrichment: EntityEnrichment): string[] {
	const body = FIELD_NAMES.flatMap((field) => {
		const value = enrichment[field];
		return value ? (FIELDS[field].write as (value: unknown) => string[])(value) : [];
	});
	return body.length === 0 ? [] : ['``attr:', ...body, '``'];
}
