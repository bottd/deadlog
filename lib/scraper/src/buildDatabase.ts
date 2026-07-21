import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { PatchesApi, Configuration } from 'deadlock-api-client';
import { mkdir, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { sql } from 'drizzle-orm';
import { fetchHeroes, fetchItems } from './api';
import {
	schema,
	insertHeroSchema,
	insertItemSchema,
	insertChangelogHeroSchema,
	insertChangelogItemSchema
} from '@deadlog/db';
import {
	loadAllChangelogs,
	entityNameAliases,
	type EntityChange
} from '@deadlog/changelog';
import { toSlug } from '@deadlog/utils';

const ITEMS_API_URL = 'https://assets.deadlock-api.com/v2/items';

type ItemCategory = 'weapon' | 'vitality' | 'spirit';

interface ItemTaxonomy {
	category: ItemCategory | null;
	tier: number | null;
	shopable: boolean;
	disabled: boolean;
}

interface BuildOptions {
	outputDir?: string;
	changelogsDir?: string;
}

interface BuildResult {
	path: string;
	patchCount: number;
	heroMatches: number;
	itemMatches: number;
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null;
}

export function parseItemTaxonomy(payload: unknown): Map<number, ItemTaxonomy> {
	if (!Array.isArray(payload)) throw new Error('Invalid item taxonomy response');

	const result = new Map<number, ItemTaxonomy>();
	for (const item of payload) {
		if (!isRecord(item) || typeof item.id !== 'number') continue;

		const category =
			item.item_slot_type === 'weapon' ||
			item.item_slot_type === 'vitality' ||
			item.item_slot_type === 'spirit'
				? item.item_slot_type
				: null;
		const tier =
			typeof item.item_tier === 'number' && Number.isInteger(item.item_tier)
				? item.item_tier
				: null;

		result.set(item.id, {
			category,
			tier,
			shopable: item.shopable === true,
			disabled: item.disabled === true
		});
	}

	return result;
}

async function fetchItemTaxonomy(): Promise<Map<number, ItemTaxonomy>> {
	const response = await fetch(ITEMS_API_URL);
	if (!response.ok) {
		throw new Error(`Failed to fetch item taxonomy: ${response.statusText}`);
	}
	return parseItemTaxonomy(await response.json());
}

function createEntityIdMap(
	entities: { id: number; name: string }[]
): Map<string, number> {
	const result = new Map<string, number>();
	for (const entity of entities) {
		for (const alias of entityNameAliases(entity.name)) {
			if (!result.has(alias)) result.set(alias, entity.id);
		}
	}
	return result;
}

function resolveEntityId(
	entityMap: Map<string, number>,
	name: string
): number | undefined {
	for (const alias of entityNameAliases(name)) {
		const id = entityMap.get(alias);
		if (id !== undefined) return id;
	}
	return undefined;
}

function collectEntityMatches(
	names: string[],
	changes: EntityChange[],
	type: 'hero' | 'item',
	entityMap: Map<string, number>
): Map<number, number | null> {
	const matches = new Map<number, number | null>();

	for (const name of names) {
		const id = resolveEntityId(entityMap, name);
		if (id !== undefined && !matches.has(id)) matches.set(id, null);
	}

	for (const change of changes) {
		if (change.type !== type) continue;
		const id = resolveEntityId(entityMap, change.name);
		if (id === undefined) continue;
		matches.set(id, (matches.get(id) ?? 0) + change.count);
	}

	return matches;
}

export async function buildDatabaseFromNorg(
	options: BuildOptions = {}
): Promise<BuildResult> {
	const outputDir = options.outputDir || './dist/data';
	const changelogsDir = options.changelogsDir || './app/changelogs';

	await mkdir(outputDir, { recursive: true });

	const dbPath = path.join(outputDir, 'deadlog.db');

	console.log('🌐 Fetching data from Deadlock API...');
	const patchesApi = new PatchesApi(
		new Configuration({ basePath: 'https://api.deadlock-api.com' })
	);

	const [bigDaysResponse, heroes, items, itemTaxonomy] = await Promise.all([
		patchesApi.bigPatchDays(),
		fetchHeroes(),
		fetchItems(),
		fetchItemTaxonomy()
	]);

	const bigDayDates = new Set(
		(bigDaysResponse.data as string[]).map((d) => d.split('T')[0])
	);

	if (existsSync(dbPath)) {
		console.log('🗑️  Removing existing database...');
		await unlink(dbPath);
	}

	console.log(`📁 Database path: ${dbPath}`);

	const client = createClient({ url: `file:${dbPath}` });
	const db = drizzle(client, { schema });

	console.log('📊 Creating tables...');
	await createTables(db);

	console.log(`📅 Found ${bigDayDates.size} big patch days`);
	console.log(`🦸 Found ${heroes.length} heroes`);
	console.log(`⚔️  Found ${items.length} items`);

	console.log('💾 Inserting heroes...');
	for (const hero of heroes) {
		await db
			.insert(schema.heroes)
			.values(
				insertHeroSchema.parse({
					id: hero.id,
					name: hero.name,
					slug: toSlug(hero.name),
					className: hero.class_name,
					heroType: hero.hero_type ?? null,
					images: hero.images,
					isReleased:
						hero.player_selectable === true &&
						hero.disabled !== true &&
						hero.in_development !== true
				})
			)
			.onConflictDoNothing();
	}
	console.log(`  ✅ Inserted ${heroes.length} heroes`);

	console.log('💾 Inserting items...');
	const seenItemSlugs = new Set<string>();
	const itemsToInsert = [...items]
		.filter(
			(item) => item.shop_image || item.shop_image_webp || item.image || item.image_webp
		)
		.sort((a, b) => {
			const priority = (type: string, taxonomy?: ItemTaxonomy) =>
				taxonomy?.shopable && !taxonomy.disabled ? 3 : type === 'upgrade' ? 2 : 1;
			return (
				priority(b.type, itemTaxonomy.get(b.id)) -
				priority(a.type, itemTaxonomy.get(a.id))
			);
		})
		.filter((item) => {
			const slug = toSlug(item.name);
			if (seenItemSlugs.has(slug)) return false;
			seenItemSlugs.add(slug);
			return true;
		});

	for (const item of itemsToInsert) {
		const taxonomy = itemTaxonomy.get(item.id);
		await db
			.insert(schema.items)
			.values(
				insertItemSchema.parse({
					id: item.id,
					name: item.name,
					slug: toSlug(item.name),
					className: item.class_name,
					type: item.type,
					category: taxonomy?.category ?? null,
					tier: taxonomy?.tier ?? null,
					image:
						item.shop_image_webp ||
						item.shop_image ||
						item.image_webp ||
						item.image ||
						'',
					isReleased:
						taxonomy?.category != null && taxonomy.shopable && !taxonomy.disabled
				})
			)
			.onConflictDoNothing();
	}
	console.log(`  ✅ Inserted ${itemsToInsert.length} items`);

	const heroMap = createEntityIdMap(heroes);
	const itemMap = createEntityIdMap(
		itemsToInsert.filter((item) => item.type === 'upgrade')
	);

	console.log(`📂 Loading changelogs from ${changelogsDir}...`);
	const changelogs = await loadAllChangelogs(changelogsDir, { curatedOnly: false });
	console.log(`  ✅ Found ${changelogs.length} changelog files`);

	console.log('💾 Inserting changelogs...');
	let heroMatches = 0;
	let itemMatches = 0;

	for (const { metadata, entities, entityChanges, slug, plainText } of changelogs) {
		const dateOnly = metadata.published.split('T')[0];
		const isMajorUpdate = bigDayDates.has(dateOnly) || metadata.major_update;
		const changelogId = metadata.thread_id ?? metadata.steam_gid ?? slug;
		const heroMatchesForPatch = collectEntityMatches(
			entities.heroes,
			entityChanges,
			'hero',
			heroMap
		);
		const itemMatchesForPatch = collectEntityMatches(
			entities.items,
			entityChanges,
			'item',
			itemMap
		);

		await db
			.insert(schema.changelogs)
			.values({
				id: changelogId,
				title: metadata.title,
				slug,
				author: metadata.author,
				authorImage: metadata.author_image ?? '',
				category: metadata.category,
				pubDate: new Date(metadata.published).toISOString(),
				majorUpdate: isMajorUpdate,
				parentChange: metadata.parent_id ?? null,
				contentText: plainText
			})
			.onConflictDoNothing();

		for (const [heroId, changeCount] of heroMatchesForPatch) {
			await db
				.insert(schema.changelogHeroes)
				.values(insertChangelogHeroSchema.parse({ changelogId, heroId, changeCount }))
				.onConflictDoNothing();
			heroMatches++;
		}

		for (const [itemId, changeCount] of itemMatchesForPatch) {
			await db
				.insert(schema.changelogItems)
				.values(insertChangelogItemSchema.parse({ changelogId, itemId, changeCount }))
				.onConflictDoNothing();
			itemMatches++;
		}
	}

	console.log(`  ✅ Inserted ${changelogs.length} changelogs`);
	console.log(`  🦸 ${heroMatches} hero references`);
	console.log(`  ⚔️  ${itemMatches} item references`);

	console.log('📋 Adding metadata...');
	const builtAt = new Date().toISOString();
	await db
		.insert(schema.metadata)
		.values({ key: 'built_at', value: builtAt })
		.onConflictDoUpdate({ target: schema.metadata.key, set: { value: builtAt } });
	await db
		.insert(schema.metadata)
		.values({ key: 'patch_count', value: String(changelogs.length) })
		.onConflictDoUpdate({
			target: schema.metadata.key,
			set: { value: String(changelogs.length) }
		});

	console.log('🔍 Creating indexes...');
	await db.run(
		sql`CREATE INDEX IF NOT EXISTS idx_changelogs_pub_date ON changelogs(pub_date DESC)`
	);
	await db.run(sql`CREATE INDEX IF NOT EXISTS idx_changelogs_slug ON changelogs(slug)`);
	await db.run(
		sql`CREATE INDEX IF NOT EXISTS idx_changelog_heroes_hero_id ON changelog_heroes(hero_id)`
	);
	await db.run(
		sql`CREATE INDEX IF NOT EXISTS idx_changelog_items_item_id ON changelog_items(item_id)`
	);
	await db.run(
		sql`CREATE INDEX IF NOT EXISTS idx_changelogs_parent_change ON changelogs(parent_change, pub_date DESC)`
	);

	client.close();

	console.log(`\n✨ Database built successfully!`);
	console.log(`📦 File: ${dbPath}`);
	console.log(`📊 Changelogs: ${changelogs.length}`);

	return { path: dbPath, patchCount: changelogs.length, heroMatches, itemMatches };
}

async function createTables(db: ReturnType<typeof drizzle>) {
	await db.run(sql`
		CREATE TABLE IF NOT EXISTS changelogs (
			id TEXT PRIMARY KEY,
			title TEXT NOT NULL,
			slug TEXT,
			author TEXT NOT NULL,
			author_image TEXT NOT NULL,
			category TEXT,
			pub_date TEXT NOT NULL,
			major_update INTEGER NOT NULL DEFAULT 0,
			parent_change TEXT,
			content_text TEXT
		)
	`);

	await db.run(sql`
		CREATE TABLE IF NOT EXISTS heroes (
			id INTEGER PRIMARY KEY,
			name TEXT NOT NULL,
			slug TEXT NOT NULL UNIQUE,
			class_name TEXT NOT NULL,
			hero_type TEXT,
			images TEXT NOT NULL,
			is_released INTEGER NOT NULL DEFAULT 1
		)
	`);

	await db.run(sql`
		CREATE TABLE IF NOT EXISTS items (
			id INTEGER PRIMARY KEY,
			name TEXT NOT NULL,
			slug TEXT NOT NULL UNIQUE,
			class_name TEXT NOT NULL,
			type TEXT NOT NULL,
			category TEXT,
			tier INTEGER,
			image TEXT NOT NULL,
			is_released INTEGER NOT NULL DEFAULT 0
		)
	`);

	await db.run(sql`
		CREATE TABLE IF NOT EXISTS metadata (
			key TEXT PRIMARY KEY,
			value TEXT
		)
	`);

	await db.run(sql`
		CREATE TABLE IF NOT EXISTS changelog_heroes (
			changelog_id TEXT NOT NULL REFERENCES changelogs(id),
			hero_id INTEGER NOT NULL REFERENCES heroes(id),
			change_count INTEGER,
			PRIMARY KEY (changelog_id, hero_id)
		)
	`);

	await db.run(sql`
		CREATE TABLE IF NOT EXISTS changelog_items (
			changelog_id TEXT NOT NULL REFERENCES changelogs(id),
			item_id INTEGER NOT NULL REFERENCES items(id),
			change_count INTEGER,
			PRIMARY KEY (changelog_id, item_id)
		)
	`);
}
