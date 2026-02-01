/**
 * Database builder from .norg changelog files
 */

import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { PatchesApi, Configuration } from 'deadlock-api-client';
import { mkdir, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { sql } from 'drizzle-orm';
import { fetchHeroes, fetchItems } from './deadlockApi';
import {
	schema,
	insertHeroSchema,
	insertItemSchema,
	insertChangelogHeroSchema,
	insertChangelogItemSchema
} from '@deadlog/db';
import { loadAllChangelogs, normalizeEntityName } from '@deadlog/changelog';
import { toSlug } from '@deadlog/utils';

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

export async function buildDatabaseFromNorg(
	options: BuildOptions = {}
): Promise<BuildResult> {
	const outputDir = options.outputDir || './dist/data';
	const changelogsDir = options.changelogsDir || './app/changelogs';

	if (!existsSync(outputDir)) {
		await mkdir(outputDir, { recursive: true });
	}

	const dbPath = path.join(outputDir, 'deadlog.db');

	if (existsSync(dbPath)) {
		console.log('🗑️  Removing existing database...');
		await unlink(dbPath);
	}

	console.log(`📁 Database path: ${dbPath}`);

	const client = createClient({ url: `file:${dbPath}` });
	const db = drizzle(client, { schema });

	console.log('📊 Creating tables...');
	await createTables(db);

	console.log('🌐 Fetching data from Deadlock API...');
	const patchesApi = new PatchesApi(
		new Configuration({ basePath: 'https://api.deadlock-api.com' })
	);

	const [bigDaysResponse, heroes, items] = await Promise.all([
		patchesApi.bigPatchDays(),
		fetchHeroes(),
		fetchItems()
	]);

	const bigDayDates = new Set(
		(bigDaysResponse.data as string[]).map((d) => d.split('T')[0])
	);

	console.log(`📅 Found ${bigDayDates.size} big patch days`);
	console.log(`🦸 Found ${heroes.length} heroes`);
	console.log(`⚔️  Found ${items.length} items`);

	// Insert heroes
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
					isReleased: false
				})
			)
			.onConflictDoNothing();
	}
	console.log(`  ✅ Inserted ${heroes.length} heroes`);

	// Insert items (deduplicated, with images only)
	console.log('💾 Inserting items...');
	const seenItems = new Set<string>();
	const itemsToInsert = items.filter((item) => {
		const key = `${item.name}|${item.type}`;
		if (seenItems.has(key)) return false;
		seenItems.add(key);
		return item.shop_image || item.shop_image_webp || item.image || item.image_webp;
	});

	for (const item of itemsToInsert) {
		await db
			.insert(schema.items)
			.values(
				insertItemSchema.parse({
					id: item.id,
					name: item.name,
					slug: toSlug(item.name),
					className: item.class_name,
					type: item.type,
					image:
						item.shop_image_webp ||
						item.shop_image ||
						item.image_webp ||
						item.image ||
						'',
					isReleased: false
				})
			)
			.onConflictDoNothing();
	}
	console.log(`  ✅ Inserted ${itemsToInsert.length} items`);

	// Build lookup maps
	const heroMap = new Map(heroes.map((h) => [normalizeEntityName(h.name), h.id]));
	const itemMap = new Map(itemsToInsert.map((i) => [normalizeEntityName(i.name), i.id]));

	// Load changelogs
	console.log(`📂 Loading changelogs from ${changelogsDir}...`);
	const changelogs = await loadAllChangelogs(changelogsDir, { curatedOnly: false });
	console.log(`  ✅ Found ${changelogs.length} changelog files`);

	// Insert changelogs
	console.log('💾 Inserting changelogs...');
	let heroMatches = 0;
	let itemMatches = 0;

	for (const { metadata, entities, slug } of changelogs) {
		const dateOnly = metadata.published.split('T')[0];
		const isMajorUpdate = bigDayDates.has(dateOnly) || metadata.major_update;

		await db
			.insert(schema.changelogs)
			.values({
				id: metadata.thread_id,
				title: metadata.title,
				slug,
				contentJson: null,
				author: metadata.author,
				authorImage: metadata.author_image ?? '',
				category: metadata.category,
				guid: metadata.thread_id,
				pubDate: metadata.published,
				majorUpdate: isMajorUpdate,
				parentChange: metadata.parent_id ?? null
			})
			.onConflictDoNothing();

		// Link heroes
		for (const heroName of entities.heroes) {
			const heroId = heroMap.get(normalizeEntityName(heroName));
			if (heroId) {
				await db
					.insert(schema.changelogHeroes)
					.values(
						insertChangelogHeroSchema.parse({
							changelogId: metadata.thread_id,
							heroId
						})
					)
					.onConflictDoNothing();
				heroMatches++;
			}
		}

		// Link items
		for (const itemName of entities.items) {
			const itemId = itemMap.get(normalizeEntityName(itemName));
			if (itemId) {
				await db
					.insert(schema.changelogItems)
					.values(
						insertChangelogItemSchema.parse({
							changelogId: metadata.thread_id,
							itemId
						})
					)
					.onConflictDoNothing();
				itemMatches++;
			}
		}
	}

	console.log(`  ✅ Inserted ${changelogs.length} changelogs`);
	console.log(`  🦸 ${heroMatches} hero references`);
	console.log(`  ⚔️  ${itemMatches} item references`);

	// Update released status
	console.log('🔄 Updating released status...');
	await db.run(sql`
		UPDATE heroes SET is_released = 1
		WHERE id IN (SELECT DISTINCT hero_id FROM changelog_heroes)
	`);
	await db.run(sql`
		UPDATE items SET is_released = 1
		WHERE id IN (SELECT DISTINCT item_id FROM changelog_items)
	`);

	// Add metadata
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

	// Create indexes
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
	await db.run(sql`CREATE INDEX IF NOT EXISTS idx_heroes_slug ON heroes(slug)`);
	await db.run(sql`CREATE INDEX IF NOT EXISTS idx_items_slug ON items(slug)`);

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
			content_json TEXT,
			author TEXT NOT NULL,
			author_image TEXT NOT NULL,
			category TEXT,
			guid TEXT,
			pub_date TEXT NOT NULL,
			major_update INTEGER NOT NULL DEFAULT 0,
			parent_change TEXT
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
			PRIMARY KEY (changelog_id, hero_id)
		)
	`);

	await db.run(sql`
		CREATE TABLE IF NOT EXISTS changelog_items (
			changelog_id TEXT NOT NULL REFERENCES changelogs(id),
			item_id INTEGER NOT NULL REFERENCES items(id),
			PRIMARY KEY (changelog_id, item_id)
		)
	`);
}
