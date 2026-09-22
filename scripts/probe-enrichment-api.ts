import { appendFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { getLibsqlDb } from '@deadlog/db';
import { readPatches } from '../lib/stats/src/readPatches';
import { sliceWindows, type SlicedImpact } from '../lib/stats/src/sliceWindows';
import type { AllSeries, DailyRow, DailyTotals } from '../lib/stats/src/types';

const API_BASE = 'https://api.deadlock-api.com/v1';
const DAY_S = 86_400;
const TIMEOUT_MS = 90_000;
const MAX_ATTEMPTS = 3;
const POPULATION = { game_mode: 'normal', match_mode: 'ranked,unranked' };

const USAGE = `Read-only probe for the enrichment plans. Writes full responses and a
requests.jsonl log to --out; never touches changelogs or the database.

  tsx scripts/probe-enrichment-api.ts --check assets --out DIR
      [--asset-version V] [--second-version V2] [--heroes 1]
  tsx scripts/probe-enrichment-api.ts --check min-matches --out DIR
      --from YYYY-MM-DD --to YYYY-MM-DD [--badge 91]
  tsx scripts/probe-enrichment-api.ts --check windows --out DIR
      Recomputes every recorded item window from the default minimum and from
      min_matches=1 (about 65 requests); needs app/static/deadlog.db.
  tsx scripts/probe-enrichment-api.ts --check association --out DIR
      --from YYYY-MM-DD --to YYYY-MM-DD --heroes 1,2 --items ID,ID [--badge 91]

--from and --to are inclusive UTC days.`;

const { values: args } = parseArgs({
	options: {
		check: { type: 'string' },
		out: { type: 'string' },
		from: { type: 'string' },
		to: { type: 'string' },
		heroes: { type: 'string' },
		items: { type: 'string' },
		badge: { type: 'string' },
		'asset-version': { type: 'string' },
		'second-version': { type: 'string' }
	}
});

function fail(message: string): never {
	console.error(`${message}\n\n${USAGE}`);
	process.exit(1);
}

if (!args.check || !args.out) fail('--check and --out are required');
const outDir = args.out;
await mkdir(outDir, { recursive: true });

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };
type Row = Record<string, number>;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
let requestCount = 0;

async function get<T = Json>(
	path: string,
	params: Record<string, string> = {}
): Promise<T> {
	const query = new URLSearchParams(params).toString();
	const url = `${API_BASE}/${path}${query ? `?${query}` : ''}`;
	for (let attempt = 1; ; attempt++) {
		const retrievedAt = new Date().toISOString();
		const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
		const body = await response.text();
		const file = `${String(++requestCount).padStart(3, '0')}.json`;
		await writeFile(join(outDir, file), body);
		await appendFile(
			join(outDir, 'requests.jsonl'),
			`${JSON.stringify({ url, retrievedAt, status: response.status, bytes: body.length, file })}\n`
		);
		if (response.ok) return JSON.parse(body) as T;
		const retryable = response.status === 429 || response.status >= 500;
		if (!retryable || attempt === MAX_ATTEMPTS) {
			throw new Error(`${response.status} after ${attempt} attempt(s): ${url}`);
		}
		const retryAfter = Number(response.headers.get('retry-after'));
		await sleep((retryAfter > 0 ? retryAfter : 5 * attempt) * 1000);
	}
}

async function report(name: string, data: unknown): Promise<void> {
	const text = JSON.stringify(data, null, '\t');
	await writeFile(join(outDir, `report-${name}.json`), text);
	console.log(text);
}

function interval(): { from: number; to: number; params: Record<string, string> } {
	if (!args.from || !args.to) fail('--from and --to are required for this check');
	const from = Date.parse(`${args.from}T00:00:00Z`) / 1000;
	const to = Date.parse(`${args.to}T00:00:00Z`) / 1000;
	if (!Number.isFinite(from) || !Number.isFinite(to)) fail('dates must be YYYY-MM-DD');
	if (to < from) fail('--to is before --from');
	return { from, to, params: bounds(from, to) };
}

const bounds = (from: number, to: number): Record<string, string> => ({
	min_unix_timestamp: String(from),
	max_unix_timestamp: String(to + DAY_S - 1)
});

const ids = (value: string | undefined, flag: string): number[] => {
	const list = (value ?? '').split(',').filter(Boolean).map(Number);
	if (list.length === 0 || list.some((n) => !Number.isInteger(n))) {
		fail(`${flag} needs comma-separated integer ids`);
	}
	return list;
};

const badge = (): Record<string, string> =>
	args.badge ? { min_average_badge: args.badge } : {};

const isoDay = (t: number) => new Date(t * 1000).toISOString().slice(0, 10);
const sum = (rows: Row[], field: string) => rows.reduce((n, row) => n + row[field], 0);

function count<T>(list: T[], key: (entry: T) => string): Record<string, number> {
	const counts: Record<string, number> = {};
	for (const entry of list) counts[key(entry)] = (counts[key(entry)] ?? 0) + 1;
	return counts;
}

interface Asset {
	id: number;
	class_name: string;
	name: string | null;
	type: string;
	description?: Record<string, string | null> | null;
	properties?: Record<string, Record<string, Json>> | null;
	tooltip_sections?: { section_attributes?: Record<string, Json>[] }[];
	tooltip_details?: {
		additional_header_properties?: string[];
		info_sections?: {
			basic_properties?: string[];
			properties_block?: { properties?: Record<string, string | boolean>[] }[];
		}[];
	};
	[key: string]: Json | undefined | object;
}

const SHOP_PROPERTY_LISTS = ['properties', 'important_properties', 'elevated_properties'];

function displayedProperties(asset: Asset): Set<string> {
	const shop = (asset.tooltip_sections ?? []).flatMap((section) =>
		(section.section_attributes ?? []).flatMap((attribute) =>
			SHOP_PROPERTY_LISTS.flatMap((list) => {
				const keys = attribute[list];
				return Array.isArray(keys)
					? keys.filter((key): key is string => typeof key === 'string')
					: [];
			})
		)
	);
	const details = asset.tooltip_details;
	const ability = (details?.info_sections ?? []).flatMap((section) => [
		...(section.basic_properties ?? []),
		...(section.properties_block ?? []).flatMap((block) =>
			(block.properties ?? []).flatMap((entry) =>
				[entry.important_property, entry.status_effect_value].filter(
					(key): key is string => typeof key === 'string'
				)
			)
		)
	]);
	return new Set([...shop, ...(details?.additional_header_properties ?? []), ...ability]);
}

interface Hero {
	id: number;
	name: string;
	items: Record<string, string>;
	[key: string]: Json | object;
}

const MARKUP = {
	svg: /<svg[\s\S]*?<\/svg>/,
	span: /<span\b/,
	br: /<br\s*\/?>/,
	otherTag: /<(?!\/?(?:svg|path|span|br|g|rect|circle|defs|clipPath)\b)[a-zA-Z][^>]*>/,
	entity: /&[a-z#0-9]+;/i,
	braceToken: /\{[^}]*\}/,
	hashToken: /(^|\s)#[A-Za-z_][\w]*/,
	unclosedSpan: /^(?![\s\S]*<\/span>)[\s\S]*<span\b/
};

function valueShape(value: Json | undefined): string {
	if (value === undefined) return 'missing';
	if (value === null) return 'null';
	if (typeof value === 'number') return 'number';
	if (typeof value !== 'string') return typeof value;
	if (/^-?\d+(\.\d+)?$/.test(value)) return 'numeric string';
	if (/^-?\d+(\.\d+)?[a-zA-Z%]+$/.test(value)) return 'numeric string with unit suffix';
	if (value === '') return 'empty string';
	return 'other string';
}

function surveyDescriptions(assets: Asset[]) {
	const fields: Record<string, Record<string, number>> = {};
	let duplicated = 0;
	for (const asset of assets) {
		const texts = Object.entries(asset.description ?? {});
		const seen = new Set<string>();
		for (const [field, text] of texts) {
			const tally = (fields[field] ??= {});
			const bump = (key: string) => (tally[key] = (tally[key] ?? 0) + 1);
			if (text === null) {
				bump('null');
				continue;
			}
			bump('present');
			if (text.trim() === '') bump('blank');
			for (const [name, pattern] of Object.entries(MARKUP)) {
				if (pattern.test(text)) bump(name);
			}
			if (seen.has(text)) duplicated++;
			seen.add(text);
		}
	}
	return { fields, assetsWithADuplicatedField: duplicated };
}

function surveyProperties(assets: Asset[]) {
	const shapes: Record<string, number> = {};
	const postfixes: Record<string, number> = {};
	const displayUnits: Record<string, number> = {};
	let total = 0;
	let labelled = 0;
	let scaled = 0;
	let shown = 0;
	let shownWithoutLabel = 0;
	const otherStrings = new Set<string>();
	const unresolved: string[] = [];
	const shownShapes: Record<string, number> = {};

	for (const asset of assets) {
		const displayed = displayedProperties(asset);
		for (const key of displayed) {
			if (!asset.properties?.[key]) unresolved.push(`${asset.name}: ${key}`);
		}
		for (const [key, property] of Object.entries(asset.properties ?? {})) {
			total++;
			const shape = valueShape(property.value);
			shapes[shape] = (shapes[shape] ?? 0) + 1;
			if (shape === 'other string' && otherStrings.size < 25) {
				otherStrings.add(String(property.value));
			}
			if (property.label) labelled++;
			if (property.scale_function) scaled++;
			const postfix = String(property.postfix ?? '(none)');
			postfixes[postfix] = (postfixes[postfix] ?? 0) + 1;
			const unit = String(property.display_units ?? '(none)');
			displayUnits[unit] = (displayUnits[unit] ?? 0) + 1;
			if (displayed.has(key)) {
				shown++;
				shownShapes[shape] = (shownShapes[shape] ?? 0) + 1;
				if (!property.label) shownWithoutLabel++;
			}
		}
	}
	return {
		total,
		labelled,
		scaled,
		shownInTooltipSections: shown,
		shownWithoutLabel,
		shownValueShapes: shownShapes,
		displayedKeysWithoutAProperty: unresolved,
		valueShapes: shapes,
		otherStringExamples: [...otherStrings],
		postfixes,
		displayUnits
	};
}

function surveyNullable(assets: Asset[]) {
	const byType: Record<string, Record<string, { null: number; missing: number }>> = {};
	for (const type of new Set(assets.map((asset) => asset.type))) {
		const group = assets.filter((asset) => asset.type === type);
		const keys = new Set(group.flatMap((asset) => Object.keys(asset)));
		const result: Record<string, { null: number; missing: number }> = {};
		for (const key of keys) {
			const nulls = group.filter((asset) => asset[key] === null).length;
			const missing = group.filter((asset) => !(key in asset)).length;
			if (nulls || missing) result[key] = { null: nulls, missing };
		}
		byType[`${type} (${group.length})`] = result;
	}
	return byType;
}

async function checkAssets(): Promise<void> {
	const versions = await get<number[]>('assets/client-versions');
	const version = Number(args['asset-version'] ?? versions.at(-1));
	const second = Number(args['second-version'] ?? versions.at(-100));
	if (!versions.includes(version) || !versions.includes(second)) {
		fail(`versions must come from assets/client-versions (${versions.length} listed)`);
	}
	const pin = (v: number) => ({ client_version: String(v), language: 'english' });

	const heroes = await get<Hero[]>('assets/heroes', pin(version));
	const items = await get<Asset[]>('assets/items', pin(version));
	const repeat = await get<Asset[]>('assets/items', pin(version));
	const older = await get<Asset[]>('assets/items', pin(second));

	const byClass = new Map(items.map((item) => [item.class_name, item]));
	const olderByClass = new Map(
		older.map((item) => [item.class_name, JSON.stringify(item)])
	);
	const changed = items.filter((item) => {
		const previous = olderByClass.get(item.class_name);
		return previous !== undefined && previous !== JSON.stringify(item);
	});

	const slotJoins = heroes.map((hero) => {
		const slots = Object.entries(hero.items).filter(([slot]) =>
			slot.startsWith('signature')
		);
		return {
			hero: hero.name,
			unresolved: slots
				.filter(([, className]) => !byClass.has(className))
				.map(([slot]) => slot)
		};
	});

	const heroId = ids(args.heroes ?? '1', '--heroes')[0];
	const hero = heroes.find((entry) => entry.id === heroId);
	if (!hero) fail(`hero ${heroId} is not in version ${version}`);
	const bound = await get<Asset[]>(`assets/items/by-hero-id/${heroId}`, pin(version));
	const boundClasses = new Set(bound.map((item) => item.class_name));
	const slotClasses = Object.entries(hero.items);

	const abilities = items.filter((item) => item.type === 'ability');
	const heroAbilityClasses = new Set(
		heroes
			.filter((entry) => entry.player_selectable === true && entry.disabled === false)
			.flatMap((entry) =>
				Object.entries(entry.items)
					.filter(([slot]) => slot.startsWith('signature'))
					.map(([, className]) => className)
			)
	);
	const heroAbilities = abilities.filter((item) =>
		heroAbilityClasses.has(item.class_name)
	);
	const shopItems = items.filter(
		(item) => item.type === 'upgrade' && item.shopable === true
	);

	await report('assets', {
		version,
		second,
		versionsListed: versions.length,
		counts: {
			heroes: heroes.length,
			items: items.length,
			types: count(items, (i) => i.type)
		},
		pinnedRepeatIdentical: JSON.stringify(items) === JSON.stringify(repeat),
		secondVersion: {
			items: older.length,
			sharedClassNamesWithDifferentPayload: changed.length,
			onlyInPinned: items.filter((item) => !olderByClass.has(item.class_name)).length,
			onlyInSecond: older.filter((item) => !byClass.has(item.class_name)).length,
			exampleChanged: changed.slice(0, 5).map((item) => item.class_name)
		},
		slotJoins: {
			heroes: slotJoins.length,
			withUnresolvedSignatureSlot: slotJoins.filter((join) => join.unresolved.length > 0)
		},
		byHeroId: {
			hero: hero.name,
			returned: bound.map((item) => item.class_name),
			slotsMissingFromByHeroId: slotClasses
				.filter(([, className]) => !boundClasses.has(className))
				.map(([slot]) => slot),
			returnedButNotInSlots: bound
				.filter(
					(item) => !slotClasses.some(([, className]) => className === item.class_name)
				)
				.map((item) => item.class_name)
		},
		descriptions: {
			heroAbilities: surveyDescriptions(heroAbilities),
			shopItems: surveyDescriptions(shopItems)
		},
		properties: {
			heroAbilities: surveyProperties(heroAbilities),
			shopItems: surveyProperties(shopItems)
		},
		nullable: {
			heroAbilities: surveyNullable(heroAbilities),
			shopItems: surveyNullable(shopItems),
			heroes: count(
				heroes.flatMap((entry) =>
					Object.entries(entry)
						.filter(([, value]) => value === null)
						.map(([key]) => key)
				),
				(key) => key
			)
		}
	});
}

function inside(rows: Row[], from: number, to: number): Row[] {
	return rows.filter((row) => row.bucket >= from && row.bucket <= to);
}

async function checkMinMatches(): Promise<void> {
	const { from, to, params } = interval();
	const shared = { bucket: 'start_time_day', ...params, ...POPULATION, ...badge() };

	const implicit = await get<Row[]>('analytics/item-stats', {
		bucket: 'start_time_day',
		...params,
		...badge()
	});
	const byDefault = await get<Row[]>('analytics/item-stats', shared);
	const every = await get<Row[]>('analytics/item-stats', { ...shared, min_matches: '1' });
	const heroImplicit = await get<Row[]>('analytics/hero-stats', {
		bucket: 'start_time_day',
		...params,
		...badge()
	});
	const heroExplicit = await get<Row[]>('analytics/hero-stats', shared);

	const kept = inside(byDefault, from, to);
	const all = inside(every, from, to);
	const key = (row: Row) => `${row.item_id}:${row.bucket}`;
	const keptKeys = new Set(kept.map(key));
	const dropped = all.filter((row) => !keptKeys.has(key(row)));

	const totals = (rows: Row[]) => {
		const byItem = new Map<number, { wins: number; matches: number }>();
		for (const row of rows) {
			const entry = byItem.get(row.item_id) ?? { wins: 0, matches: 0 };
			entry.wins += row.wins;
			entry.matches += row.matches;
			byItem.set(row.item_id, entry);
		}
		return byItem;
	};
	const keptTotals = totals(kept);
	const affected = [...totals(all)].flatMap(([item, full]) => {
		const partial = keptTotals.get(item) ?? { wins: 0, matches: 0 };
		if (partial.matches === full.matches) return [];
		return [
			{
				item,
				matchesDefault: partial.matches,
				matchesMin1: full.matches,
				winRateDefault: partial.matches ? partial.wins / partial.matches : null,
				winRateMin1: full.wins / full.matches,
				crossesFloor: partial.matches < 1000 !== full.matches < 1000
			}
		];
	});

	const slots = (rows: Row[]) => {
		const perDay = new Map<number, { declared: number; summed: number }>();
		for (const row of inside(rows, from, to)) {
			const entry = perDay.get(row.bucket) ?? {
				declared: row.matches_per_bucket,
				summed: 0
			};
			entry.summed += row.matches;
			perDay.set(row.bucket, entry);
		}
		return perDay;
	};
	const explicitSlots = slots(heroExplicit);

	await report(
		`min-matches-${args.from}-${args.to}${args.badge ? `-badge${args.badge}` : ''}`,
		{
			from: args.from,
			to: args.to,
			badge: args.badge ?? null,
			implicitDefaultsEqualExplicitModes: {
				item: JSON.stringify(implicit) === JSON.stringify(byDefault),
				hero: JSON.stringify(heroImplicit) === JSON.stringify(heroExplicit)
			},
			returnedOutsideInterval: {
				itemDefault: byDefault.length - kept.length,
				itemMin1: every.length - all.length
			},
			rows: { default: kept.length, min1: all.length, dropped: dropped.length },
			droppedMatches: {
				total: sum(dropped, 'matches'),
				largestRow: Math.max(0, ...dropped.map((r) => r.matches))
			},
			entityDays: {
				default: count(kept, (row) => isoDay(row.bucket)),
				min1: count(all, (row) => isoDay(row.bucket))
			},
			itemsWhoseWindowTotalChanges: affected.length,
			itemsCrossingThe1000Floor: affected.filter((entry) => entry.crossesFloor).length,
			largestWinRateShift: Math.max(
				0,
				...affected.map((entry) =>
					entry.winRateDefault === null
						? 0
						: Math.abs(entry.winRateDefault - entry.winRateMin1)
				)
			),
			affected: affected.slice(0, 40),
			heroSlots: [...explicitSlots].map(([day, entry]) => ({
				day: isoDay(day),
				matchesPerBucket: entry.declared,
				sumOfHeroMatches: entry.summed,
				equal: entry.declared === entry.summed
			}))
		}
	);
}

async function checkAssociation(): Promise<void> {
	const { from, to, params } = interval();
	const heroIds = ids(args.heroes, '--heroes');
	const itemIds = ids(args.items, '--items');
	const population = { ...POPULATION, ...badge() };
	const daily = { bucket: 'start_time_day', ...params, ...population };
	const day = (rows: Row[], bucket: number) =>
		rows.filter((row) => row.bucket === bucket);

	const heroDaily = await get<Row[]>('analytics/hero-stats', daily);
	const byHeroBucket = await get<Row[]>('analytics/item-stats', {
		bucket: 'hero',
		...params,
		...population,
		min_matches: '1'
	});

	const pairs = [];
	const invariants = { itemAboveHero: 0, winsPlusLossesOff: 0, checked: 0 };
	const buyersByItem = new Map<number, Row[]>();

	for (const itemId of itemIds) {
		const buyers = await get<Row[]>('analytics/hero-stats', {
			...daily,
			include_item_ids: String(itemId)
		});
		buyersByItem.set(itemId, buyers);
	}

	for (const heroId of heroIds) {
		const itemDaily = await get<Row[]>('analytics/item-stats', {
			...daily,
			hero_ids: String(heroId),
			min_matches: '1'
		});
		const itemAggregate = await get<Row[]>('analytics/item-stats', {
			bucket: 'no_bucket',
			...params,
			...population,
			hero_ids: String(heroId),
			min_matches: '1'
		});

		for (const row of inside(itemDaily, from, to)) {
			invariants.checked++;
			if (row.wins + row.losses !== row.matches) invariants.winsPlusLossesOff++;
			const appearances = day(heroDaily, row.bucket).find((r) => r.hero_id === heroId);
			if (!appearances || row.matches > appearances.matches) invariants.itemAboveHero++;
		}

		for (const itemId of itemIds) {
			const buyers = buyersByItem.get(itemId) ?? [];
			const perDay = [];
			for (let bucket = from; bucket <= to; bucket += DAY_S) {
				const viaItem = day(itemDaily, bucket).find((r) => r.item_id === itemId);
				const viaHero = day(buyers, bucket).find((r) => r.hero_id === heroId);
				const appearances = day(heroDaily, bucket).find((r) => r.hero_id === heroId);
				perDay.push({
					day: isoDay(bucket),
					itemStatsMatches: viaItem?.matches ?? null,
					itemStatsPlayers: viaItem?.players ?? null,
					heroStatsBuyerMatches: viaHero?.matches ?? null,
					heroStatsBuyerWins: viaHero?.wins ?? null,
					itemStatsWins: viaItem?.wins ?? null,
					heroAppearances: appearances?.matches ?? null,
					buyerMatchesPerBucket: viaHero?.matches_per_bucket ?? null,
					unfilteredMatchesPerBucket: appearances?.matches_per_bucket ?? null
				});
			}
			const dailySum = sum(
				inside(itemDaily, from, to).filter((r) => r.item_id === itemId),
				'matches'
			);
			pairs.push({
				hero: heroId,
				item: itemId,
				perDay,
				sumOfDailyItemStats: dailySum,
				noBucketAggregate:
					itemAggregate.find((r) => r.item_id === itemId)?.matches ?? null,
				heroBucketAggregate:
					byHeroBucket.find((r) => r.item_id === itemId && r.bucket === heroId)
						?.matches ?? null
			});
		}
	}

	const additivity = [];
	if (to > from) {
		const itemId = itemIds[0];
		const heroId = heroIds[0];
		const single = [];
		for (const bucket of [from, from + DAY_S]) {
			const rows = await get<Row[]>('analytics/item-stats', {
				bucket: 'no_bucket',
				...bounds(bucket, bucket),
				...population,
				hero_ids: String(heroId),
				min_matches: '1'
			});
			single.push(rows.find((r) => r.item_id === itemId)?.matches ?? 0);
		}
		const pair = await get<Row[]>('analytics/item-stats', {
			bucket: 'no_bucket',
			...bounds(from, from + DAY_S),
			...population,
			hero_ids: String(heroId),
			min_matches: '1'
		});
		additivity.push({
			hero: heroId,
			item: itemId,
			days: [isoDay(from), isoDay(from + DAY_S)],
			singleDayAggregates: single,
			twoDayAggregate: pair.find((r) => r.item_id === itemId)?.matches ?? 0
		});
	}

	const multi =
		heroIds.length > 1 && itemIds.length > 1
			? {
					itemStatsHeroIdsCsv: inside(
						await get<Row[]>('analytics/item-stats', {
							...daily,
							hero_ids: heroIds.join(','),
							include_item_ids: itemIds.join(','),
							min_matches: '1'
						}),
						from,
						to
					).filter((r) => r.bucket === from),
					heroStatsIncludeItemIdsCsv: inside(
						await get<Row[]>('analytics/hero-stats', {
							...daily,
							include_item_ids: itemIds.join(',')
						}),
						from,
						to
					).filter((r) => r.bucket === from && heroIds.includes(r.hero_id))
				}
			: null;

	const includeOnly = inside(
		await get<Row[]>('analytics/item-stats', {
			...daily,
			hero_ids: String(heroIds[0]),
			include_item_ids: String(itemIds[0]),
			min_matches: '1'
		}),
		from,
		to
	);

	await report(
		`association-${args.from}-${args.to}${args.badge ? `-badge${args.badge}` : ''}`,
		{
			from: args.from,
			to: args.to,
			badge: args.badge ?? null,
			heroBucketValuesAreHeroIds: byHeroBucket.every((row) =>
				heroDaily.some((r) => r.hero_id === row.bucket)
			),
			heroBucketRows: byHeroBucket.length,
			invariants,
			pairs,
			additivity,
			includeItemIdsOnItemStats: {
				hero: heroIds[0],
				item: itemIds[0],
				distinctItemsReturned: new Set(includeOnly.map((r) => r.item_id)).size,
				firstDay: includeOnly.filter((r) => r.bucket === from)
			},
			multi
		}
	);
}

async function checkWindows(): Promise<void> {
	process.env.DATABASE_URL ??= `file:${fileURLToPath(new URL('../app/static/deadlog.db', import.meta.url))}`;
	const { patches, touched } = await readPatches(getLibsqlDb());
	const items = new Map(
		[...touched].map(([id, list]) => [
			id,
			list.filter((entity) => entity.kind === 'item')
		])
	);
	const now = Math.floor(Date.now() / 1000);
	const first = Math.floor(patches[0].at / DAY_S) * DAY_S - 16 * DAY_S;
	const today = Math.floor(now / DAY_S) * DAY_S;

	const totals: Record<'all' | 'high', DailyTotals> = { all: new Map(), high: new Map() };
	for (const tier of ['all', 'high'] as const) {
		const rows = await get<Row[]>('analytics/hero-stats', {
			bucket: 'start_time_day',
			...bounds(first, today),
			...POPULATION,
			...(tier === 'high' ? { min_average_badge: '91' } : {})
		});
		for (const row of rows) totals[tier].set(row.bucket, row.matches_per_bucket);
	}

	const fetchItems = async (tier: 'all' | 'high', minMatches: string | null) => {
		const rows: DailyRow[] = [];
		for (let from = first; from <= today; from += 60 * DAY_S) {
			const to = Math.min(from + 59 * DAY_S, today);
			const chunk = await get<Row[]>('analytics/item-stats', {
				bucket: 'start_time_day',
				...bounds(from, to),
				...POPULATION,
				...(tier === 'high' ? { min_average_badge: '91' } : {}),
				...(minMatches ? { min_matches: minMatches } : {})
			});
			for (const row of inside(chunk, from, to)) {
				rows.push({
					entityId: row.item_id,
					day: row.bucket,
					wins: row.wins,
					matches: row.matches
				});
			}
		}
		return rows;
	};

	const slice = async (minMatches: string | null) => {
		const series: AllSeries = {
			rows: {
				hero: { all: [], high: [] },
				item: {
					all: await fetchItems('all', minMatches),
					high: await fetchItems('high', minMatches)
				}
			},
			totals
		};
		return { series, sliced: sliceWindows({ patches, touched: items, series, now }) };
	};

	const byDefault = await slice(null);
	const every = await slice('1');

	const slugs = new Map(patches.map((patch) => [patch.id, patch.slug]));
	const find = (list: SlicedImpact[] | undefined, id: number) =>
		list?.find((entry) => entry.id === id)?.impact;
	const tally = {
		windows: 0,
		reportable: 0,
		matchesDiffer: 0,
		publishedRateDiffers: 0,
		crossesFloor: 0
	};
	const byTier = { all: { ...tally }, high: { ...tally } };
	const changed = [];

	for (const [patchId, entries] of every.sliced) {
		for (const entry of entries) {
			const before = find(byDefault.sliced.get(patchId), entry.id);
			for (const tier of ['all', 'high'] as const) {
				for (const side of ['before', 'after'] as const) {
					const full = entry.impact[tier][side];
					const kept = before?.[tier][side] ?? {
						win: null,
						pick: null,
						matches: 0,
						days: 0
					};
					const counts = byTier[tier];
					counts.windows++;
					if (full.win !== null) counts.reportable++;
					if (full.matches === kept.matches) continue;
					counts.matchesDiffer++;
					const crosses = (full.win === null) !== (kept.win === null);
					const rateDiffers = full.win !== kept.win || full.pick !== kept.pick;
					if (crosses) counts.crossesFloor++;
					if (rateDiffers) counts.publishedRateDiffers++;
					if (rateDiffers) {
						changed.push({
							patch: slugs.get(patchId),
							item: entry.id,
							tier,
							side,
							default: kept,
							min1: full
						});
					}
				}
			}
		}
	}

	const rowCounts = (series: AllSeries) => ({
		all: series.rows.item.all.length,
		high: series.rows.item.high.length
	});
	const lastChanged =
		changed
			.map((entry) => entry.patch ?? '')
			.sort()
			.at(-1) ?? null;
	await report('windows', {
		retrievedAt: new Date(now * 1000).toISOString(),
		range: [isoDay(first), isoDay(today)],
		itemRows: { default: rowCounts(byDefault.series), min1: rowCounts(every.series) },
		byTier,
		latestPatchWithAPublishedDifference: lastChanged,
		largestWinShift: Math.max(
			0,
			...changed.map((e) =>
				e.default.win === null || e.min1.win === null
					? 0
					: Math.abs(e.default.win - e.min1.win)
			)
		),
		largestPickShift: Math.max(
			0,
			...changed.map((e) =>
				e.default.pick === null || e.min1.pick === null
					? 0
					: Math.abs(e.default.pick - e.min1.pick)
			)
		),
		changedByYear: count(
			changed,
			(entry) => `${(entry.patch ?? '').slice(0, 4)} ${entry.tier}`
		),
		changed
	});
}

const checks: Record<string, () => Promise<void>> = {
	windows: checkWindows,
	assets: checkAssets,
	'min-matches': checkMinMatches,
	association: checkAssociation
};

const run = checks[args.check];
if (!run) fail(`unknown --check "${args.check}"`);
try {
	await run();
} catch (error) {
	console.error(`Incomplete: ${error instanceof Error ? error.message : String(error)}`);
	console.error(`Requests so far are logged in ${join(outDir, 'requests.jsonl')}`);
	process.exit(1);
}
