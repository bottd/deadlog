import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { PatchesApi, Configuration } from 'deadlock-api-client';
import { execSync } from 'node:child_process';
import { mkdir, rename, rm } from 'fs/promises';
import path from 'path';
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

/** Null bullets = the entity is named in the patch but heads no section of its own. */
type EntityMatch = string[] | null;

function collectEntityMatches(
	names: string[],
	changes: EntityChange[],
	type: 'hero' | 'item',
	entityMap: Map<string, number>
): Map<number, EntityMatch> {
	const matches = new Map<number, EntityMatch>();

	for (const name of names) {
		const id = resolveEntityId(entityMap, name);
		if (id !== undefined && !matches.has(id)) {
			matches.set(id, null);
		}
	}

	for (const change of changes) {
		if (change.type !== type) continue;
		const id = resolveEntityId(entityMap, change.name);
		if (id === undefined) continue;
		// An entity can head more than one section in a patch; bullets concatenate.
		matches.set(id, [...(matches.get(id) ?? []), ...change.bullets]);
	}

	return matches;
}

export async function buildDatabaseFromMog(
	options: BuildOptions = {}
): Promise<BuildResult> {
	const outputDir = options.outputDir || './dist/data';
	const changelogsDir = options.changelogsDir || './app/changelogs';

	await mkdir(outputDir, { recursive: true });

	const targetDbPath = path.join(outputDir, 'deadlog.db');
	const dbPath = `${targetDbPath}.building`;

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

	// Build alongside the live database so parse or insertion failures cannot
	// destroy the last known-good artifact. rename() is atomic on the target FS.
	await rm(dbPath, { force: true });

	console.log(`📁 Database path: ${dbPath}`);

	// One source of truth for the schema: drizzle-kit materializes lib/db/src/schema.ts
	// into the fresh .building file, so the DDL cannot drift from the Drizzle types.
	console.log('📊 Creating tables...');
	const env = { ...process.env, DATABASE_URL: `file:${path.resolve(dbPath)}` };
	// tsx exports its --tsconfig to children; drizzle-kit would resolve it against
	// lib/db and fail, so drop it.
	delete env.TSX_TSCONFIG_PATH;
	delete env.ESBK_TSCONFIG_PATH;
	execSync('pnpm exec drizzle-kit push --force', {
		cwd: path.resolve(import.meta.dirname, '../../db'),
		env,
		stdio: 'inherit'
	});

	const client = createClient({ url: `file:${dbPath}` });
	const db = drizzle(client, { schema });

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
			const priority = (item: (typeof items)[number]) =>
				item.shopable && !item.disabled ? 3 : item.type === 'upgrade' ? 2 : 1;
			return priority(b) - priority(a);
		})
		.filter((item) => {
			const slug = toSlug(item.name);
			if (seenItemSlugs.has(slug)) return false;
			seenItemSlugs.add(slug);
			return true;
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
					category: item.item_slot_type ?? null,
					tier: item.item_tier ?? null,
					image:
						item.shop_image_webp ||
						item.shop_image ||
						item.image_webp ||
						item.image ||
						'',
					isReleased:
						item.item_slot_type != null &&
						item.shopable === true &&
						item.disabled !== true
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

	for (const {
		metadata,
		entities,
		entityChanges,
		slug,
		plainText,
		previewImage
	} of changelogs) {
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
				previewImage: previewImage ?? null,
				category: metadata.category,
				pubDate: new Date(metadata.published).toISOString(),
				majorUpdate: isMajorUpdate,
				parentChange: metadata.parent_id ?? null,
				contentText: plainText
			})
			.onConflictDoNothing();

		for (const [heroId, changeBullets] of heroMatchesForPatch) {
			await db
				.insert(schema.changelogHeroes)
				.values(insertChangelogHeroSchema.parse({ changelogId, heroId, changeBullets }))
				.onConflictDoNothing();
			heroMatches++;
		}

		for (const [itemId, changeBullets] of itemMatchesForPatch) {
			await db
				.insert(schema.changelogItems)
				.values(insertChangelogItemSchema.parse({ changelogId, itemId, changeBullets }))
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

	client.close();
	await rename(dbPath, targetDbPath);

	console.log(`\n✨ Database built successfully!`);
	console.log(`📦 File: ${targetDbPath}`);
	console.log(`📊 Changelogs: ${changelogs.length}`);

	return { path: targetDbPath, patchCount: changelogs.length, heroMatches, itemMatches };
}
