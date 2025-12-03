import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { PatchesApi, Configuration } from 'deadlock-api-client';
import { mkdir, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { z } from 'zod';
import { formatISO } from 'date-fns';
import { fetchHeroes, fetchItems } from './assets';
import {
	schema,
	insertHeroSchema,
	insertItemSchema,
	insertChangelogSchema,
	insertChangelogEntitySchema,
	insertChangelogHeroSchema,
	insertChangelogItemSchema
} from '@deadlog/db';
import { sql } from 'drizzle-orm';
import { parseAuthorName } from './authorParser';
import { scrapeChangelogPage, scrapeMultipleChangelogPosts } from './scraper';
import { parseHtmlToJson, extractIcons } from './changelogParser';

const buildDatabaseOptionsSchema = z.object({
	outputDir: z.string().default('./dist/data')
});

const buildDatabaseResultSchema = z.object({
	path: z.string(),
	patchCount: z.number().int().nonnegative()
});

export type BuildDatabaseOptions = Partial<z.input<typeof buildDatabaseOptionsSchema>>;
export type BuildDatabaseResult = z.infer<typeof buildDatabaseResultSchema>;

export async function buildDatabase(
	options: BuildDatabaseOptions = {}
): Promise<BuildDatabaseResult> {
	const validatedOptions = buildDatabaseOptionsSchema.parse(options);
	const { outputDir } = validatedOptions;

	if (!existsSync(outputDir)) {
		await mkdir(outputDir, { recursive: true });
	}

	const dbPath = path.join(outputDir, 'deadlog.db');

	if (existsSync(dbPath)) {
		console.log('🗑️  Removing existing database...');
		await unlink(dbPath);
	}

	console.log(`📁 Database path: ${dbPath}`);

	const client = createClient({
		url: `file:${dbPath}`
	});
	const db = drizzle(client, { schema });

	console.log('📊 Creating tables...');
	await db.run(sql`
		CREATE TABLE IF NOT EXISTS changelogs (
			id TEXT PRIMARY KEY,
			title TEXT NOT NULL,
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
		CREATE TABLE IF NOT EXISTS changelog_entities (
			changelog_id TEXT NOT NULL REFERENCES changelogs(id),
			entity_type TEXT NOT NULL CHECK(entity_type IN ('hero', 'item')),
			entity_id INTEGER NOT NULL,
			entity_name TEXT NOT NULL,
			image_src TEXT NOT NULL,
			PRIMARY KEY (changelog_id, entity_type, entity_id)
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

	// Fetch data from APIs
	console.log('🌐 Fetching data from Deadlock API...');
	const config = {
		basePath: 'https://api.deadlock-api.com'
	} satisfies ConstructorParameters<typeof Configuration>[0];
	const patchesApi = new PatchesApi(new Configuration(config));

	const bigDaysResponse = await patchesApi.bigPatchDays();

	// Convert big patch days to just dates (YYYY-MM-DD) for easier matching
	const bigDayDates = new Set(
		(bigDaysResponse.data as string[]).map((dateStr) => dateStr.split('T')[0])
	);
	const heroes = await fetchHeroes();
	const items = await fetchItems();

	// Scrape patches directly from the forums
	console.log('🕷️  Scraping changelog from forums...');
	const changelogPosts = await scrapeChangelogPage({
		timeout: 30000,
		maxPagesToScrape: 10
	});
	console.log(`✅ Found ${changelogPosts.length} changelog posts`);

	// Scrape full content from each post (with caching enabled)
	const patches = await scrapeMultipleChangelogPosts(changelogPosts, {
		timeout: 30000,
		useCache: true,
		cacheDir: path.resolve('libs/scraper/src/cache/posts')
	});

	console.log(`📅 Found ${bigDayDates.size} big patch days`);
	console.log(`🦸 Found ${heroes.length} heroes`);
	console.log(`⚔️  Found ${items.length} items`);

	console.log('💾 Inserting heroes...');
	for (const hero of heroes) {
		const heroData = insertHeroSchema.parse({
			id: hero.id,
			name: hero.name,
			className: hero.class_name,
			heroType: hero.hero_type ?? null,
			images: hero.images,
			isReleased: false // Will be updated after parsing changelogs
		});
		await db.insert(schema.heroes).values(heroData).onConflictDoUpdate({
			target: schema.heroes.id,
			set: heroData
		});
	}
	console.log(`  ✅ Inserted ${heroes.length} heroes`);

	console.log('💾 Inserting items...');
	// Deduplicate items by name+type combination
	// Keep the first occurrence of each name+type pair
	const seenNameTypes = new Map<string, boolean>();
	const deduplicatedItems = items.filter((item) => {
		const key = `${item.name}|${item.type}`;
		if (seenNameTypes.has(key)) {
			return false;
		}
		seenNameTypes.set(key, true);
		return true;
	});

	console.log(
		`  ℹ️  Deduplicated ${items.length} items to ${deduplicatedItems.length} unique items`
	);

	// Filter out items without any images (png or webp)
	const itemsWithImages = deduplicatedItems.filter(
		(item) => item.shop_image || item.shop_image_webp || item.image || item.image_webp
	);

	if (itemsWithImages.length < deduplicatedItems.length) {
		console.log(
			`  ⚠️  Filtered out ${deduplicatedItems.length - itemsWithImages.length} items without images`
		);
	}

	for (const item of itemsWithImages) {
		const itemData = insertItemSchema.parse({
			id: item.id,
			name: item.name,
			className: item.class_name,
			type: item.type,
			image:
				item.shop_image_webp || item.image_webp || item.shop_image || item.image || '',
			isReleased: false // Will be updated after parsing changelogs
		});
		await db.insert(schema.items).values(itemData).onConflictDoNothing();
	}
	console.log(`  ✅ Inserted ${itemsWithImages.length} items`);

	console.log('💾 Inserting patches...');
	let insertedCount = 0;

	const enrichedHeroes = heroes.map((hero) => ({
		...hero,
		className: hero.class_name,
		heroType: hero.hero_type ?? null,
		isReleased: false
	}));

	const enrichedItems = itemsWithImages.map((item) => ({
		...item,
		className: item.class_name,
		image: item.image_webp || item.image || '',
		isReleased: false
	}));

	for (const patch of patches) {
		// Parse the main content (without poster replies)
		// Filter items to only include abilities
		const abilities = enrichedItems.filter((item) => item.type === 'ability');
		const contentJson = await parseHtmlToJson(patch.content, {
			heroes: enrichedHeroes,
			items: enrichedItems,
			abilities
		});

		// Extract icons for this changelog
		const icons = extractIcons(patch.content, {
			heroes: enrichedHeroes,
			items: enrichedItems
		});

		// Extract just the date part (YYYY-MM-DD) from pub_date for comparison
		const pubDate = patch.pubDate ?? '';
		const dateOnly = pubDate.split('T')[0]; // Get just the date part
		const isBigPatch = bigDayDates.has(dateOnly);

		const changelogData = insertChangelogSchema.parse({
			id: patch.postId,
			title: patch.title ?? '',
			content: patch.content,
			contentJson,
			author: parseAuthorName(patch.author),
			authorImage: patch.authorImage ?? null,
			category: 'Update',
			guid: patch.postId,
			pubDate,
			majorUpdate: isBigPatch,
			parentChange: null
		});

		await db.insert(schema.changelogs).values(changelogData).onConflictDoUpdate({
			target: schema.changelogs.id,
			set: changelogData
		});

		// Insert icons for this changelog
		for (const heroIcon of icons.heroes) {
			const iconData = insertChangelogEntitySchema.parse({
				changelogId: patch.postId,
				entityType: 'hero',
				entityId: heroIcon.id as number,
				entityName: heroIcon.alt,
				imageSrc: heroIcon.src
			});
			await db.insert(schema.changelogEntities).values(iconData).onConflictDoNothing();
		}

		for (const itemIcon of icons.items) {
			const iconData = insertChangelogEntitySchema.parse({
				changelogId: patch.postId,
				entityType: 'item',
				entityId: itemIcon.id as number,
				entityName: itemIcon.alt,
				imageSrc: itemIcon.src
			});
			await db.insert(schema.changelogEntities).values(iconData).onConflictDoNothing();
		}

		// Insert hero mentions into junction table
		if (contentJson.heroes) {
			for (const heroData of Object.values(contentJson.heroes)) {
				if (heroData.id) {
					const changelogHeroData = insertChangelogHeroSchema.parse({
						changelogId: patch.postId,
						heroId: heroData.id
					});
					await db
						.insert(schema.changelogHeroes)
						.values(changelogHeroData)
						.onConflictDoNothing();
				}
			}
		}

		// Insert item mentions into junction table
		if (contentJson.items) {
			for (const itemData of Object.values(contentJson.items)) {
				if (itemData.id) {
					const changelogItemData = insertChangelogItemSchema.parse({
						changelogId: patch.postId,
						itemId: itemData.id
					});
					await db
						.insert(schema.changelogItems)
						.values(changelogItemData)
						.onConflictDoNothing();
				}
			}
		}

		insertedCount++;

		// Insert poster updates as separate changelog records
		if (patch.posterReplies?.length) {
			for (let i = 0; i < patch.posterReplies.length; i++) {
				const reply = patch.posterReplies[i];
				if (!reply.content) continue; // Skip if content is missing

				const replyJson = await parseHtmlToJson(reply.content, {
					heroes: enrichedHeroes,
					items: enrichedItems,
					abilities
				});

				// Extract icons for this update
				const replyIcons = extractIcons(reply.content, {
					heroes: enrichedHeroes,
					items: enrichedItems
				});

				const updateId = `${patch.postId}-update-${i + 1}`;
				const updateData = insertChangelogSchema.parse({
					id: updateId,
					title: `${patch.title ?? ''} - Update ${i + 1}`,
					content: reply.content,
					contentJson: replyJson,
					author: parseAuthorName(patch.author),
					authorImage: patch.authorImage ?? null,
					category: 'Update',
					guid: updateId,
					pubDate: reply.timestamp,
					majorUpdate: false,
					parentChange: patch.postId
				});

				await db.insert(schema.changelogs).values(updateData).onConflictDoUpdate({
					target: schema.changelogs.id,
					set: updateData
				});

				// Insert icons for this update
				for (const heroIcon of replyIcons.heroes) {
					const iconData = insertChangelogEntitySchema.parse({
						changelogId: updateId,
						entityType: 'hero',
						entityId: heroIcon.id as number,
						entityName: heroIcon.alt,
						imageSrc: heroIcon.src
					});
					await db
						.insert(schema.changelogEntities)
						.values(iconData)
						.onConflictDoNothing();
				}

				for (const itemIcon of replyIcons.items) {
					const iconData = insertChangelogEntitySchema.parse({
						changelogId: updateId,
						entityType: 'item',
						entityId: itemIcon.id as number,
						entityName: itemIcon.alt,
						imageSrc: itemIcon.src
					});
					await db
						.insert(schema.changelogEntities)
						.values(iconData)
						.onConflictDoNothing();
				}

				// Insert hero mentions for this update
				if (replyJson.heroes) {
					for (const heroData of Object.values(replyJson.heroes)) {
						if (heroData.id) {
							const changelogHeroData = insertChangelogHeroSchema.parse({
								changelogId: updateId,
								heroId: heroData.id
							});
							await db
								.insert(schema.changelogHeroes)
								.values(changelogHeroData)
								.onConflictDoNothing();
						}
					}
				}

				// Insert item mentions for this update
				if (replyJson.items) {
					for (const itemData of Object.values(replyJson.items)) {
						if (itemData.id) {
							const changelogItemData = insertChangelogItemSchema.parse({
								changelogId: updateId,
								itemId: itemData.id
							});
							await db
								.insert(schema.changelogItems)
								.values(changelogItemData)
								.onConflictDoNothing();
						}
					}
				}

				insertedCount++;
			}
		}

		if (insertedCount % 10 === 0) {
			console.log(`  📝 Inserted ${insertedCount} patches`);
		}
	}

	console.log('🔄 Updating released status for heroes and items...');

	// Mark heroes as released if they appear in any changelog
	await db.run(sql`
		UPDATE heroes
		SET is_released = 1
		WHERE id IN (
			SELECT DISTINCT hero_id
			FROM changelog_heroes
		)
	`);
	const releasedHeroes = await db.run(sql`
		SELECT COUNT(*) as count
		FROM heroes
		WHERE is_released = 1
	`);
	console.log(`  ✅ Marked ${releasedHeroes.rows[0]?.count ?? 0} heroes as released`);

	// Mark items as released if they appear in any changelog
	await db.run(sql`
		UPDATE items
		SET is_released = 1
		WHERE id IN (
			SELECT DISTINCT item_id
			FROM changelog_items
		)
	`);
	const releasedItems = await db.run(sql`
		SELECT COUNT(*) as count
		FROM items
		WHERE is_released = 1
	`);
	console.log(`  ✅ Marked ${releasedItems.rows[0]?.count ?? 0} items as released`);

	console.log('📋 Adding metadata...');
	const builtAt = formatISO(new Date());
	const patchCount = patches.length.toString();

	// Helper to upsert metadata entries
	const upsertMetadata = async (key: string, value: string) => {
		await db.insert(schema.metadata).values({ key, value }).onConflictDoUpdate({
			target: schema.metadata.key,
			set: { value }
		});
	};

	await Promise.all([
		upsertMetadata('built_at', builtAt),
		upsertMetadata('patch_count', patchCount),
		upsertMetadata('big_patch_days', JSON.stringify(bigDaysResponse.data))
	]);

	console.log('🔍 Creating indexes...');
	await db.run(
		sql`CREATE INDEX IF NOT EXISTS idx_changelogs_pub_date ON changelogs(pub_date DESC)`
	);
	await db.run(
		sql`CREATE INDEX IF NOT EXISTS idx_changelogs_pub_date_text ON changelogs(pub_date)`
	);
	await db.run(
		sql`CREATE INDEX IF NOT EXISTS idx_changelog_heroes_hero_id ON changelog_heroes(hero_id)`
	);
	await db.run(
		sql`CREATE INDEX IF NOT EXISTS idx_changelog_items_item_id ON changelog_items(item_id)`
	);

	client.close();

	console.log(`✨ Database built successfully!`);
	console.log(`📦 File: ${dbPath}`);
	console.log(`📊 Patches: ${insertedCount}`);

	return buildDatabaseResultSchema.parse({
		path: dbPath,
		patchCount: insertedCount
	});
}
