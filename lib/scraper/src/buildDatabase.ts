import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { PatchesApi, Configuration } from 'deadlock-api-client';
import { execSync } from 'node:child_process';
import { mkdir, readFile, rename, rm } from 'fs/promises';
import path from 'path';
import { fetchHeroes, fetchItems } from './api';
import { itemImage } from './types/deadlockApi';
import {
	schema,
	insertHeroSchema,
	insertHeroAbilitySchema,
	insertItemSchema,
	insertChangelogHeroSchema,
	insertChangelogItemSchema
} from '@deadlog/db';
import {
	loadAllChangelogs,
	type EntityBulletGroup,
	type EntityChange
} from '@deadlog/changelog';
import { entityNameAliases, toSlug } from '@deadlog/utils';
import { resolveAbilitySlots } from './heroAbilities';

interface BuildOptions {
	outputDir: string;
	changelogsDir: string;
}

interface BuildResult {
	path: string;
	patchCount: number;
	heroMatches: number;
	itemMatches: number;
}

interface EntityRoutes {
	heroes: ReadonlySet<string>;
	items: ReadonlySet<string>;
	abilities: ReadonlySet<string>;
}

function assertEntityLinks(
	content: string,
	filepath: string,
	routes: EntityRoutes
): void {
	for (const match of content.matchAll(/\[\[(\/(?:hero|item)\/[^\]]+)\]\]/g)) {
		const target = match[1];
		const url = new URL(target, 'https://deadlog.test');
		const [, type, slug, extra] = url.pathname.split('/');
		const ability = url.searchParams.get('ability');
		const query = [...url.searchParams.keys()];
		const valid =
			!extra &&
			!url.hash &&
			(type === 'hero'
				? routes.heroes.has(slug) &&
					(query.length === 0 ||
						(query.length === 1 &&
							query[0] === 'ability' &&
							ability !== null &&
							routes.abilities.has(`${slug}:${ability}`)))
				: type === 'item' && routes.items.has(slug) && query.length === 0);
		const labelStart = (match.index ?? 0) + match[0].length;

		if (!valid || content.slice(labelStart, labelStart + 2) !== '((') {
			throw new Error(`Invalid entity link ${target} in ${filepath}`);
		}
	}
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

/** Null groups = the entity is named in the patch but heads no section of its own. */
type EntityMatch = EntityBulletGroup[] | null;

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
		// An entity can head more than one section in a patch; groups concatenate.
		matches.set(id, [...(matches.get(id) ?? []), ...change.groups]);
	}

	return matches;
}

export async function buildDatabaseFromMog(options: BuildOptions): Promise<BuildResult> {
	const { outputDir, changelogsDir } = options;

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

	const abilitySlots = resolveAbilitySlots(heroes, items);
	let heroAbilityCount = 0;
	for (const abilities of abilitySlots.values()) {
		for (const ability of abilities) {
			await db
				.insert(schema.heroAbilities)
				.values(insertHeroAbilitySchema.parse(ability));
			heroAbilityCount++;
		}
	}
	console.log(`  ✅ Inserted ${heroAbilityCount} hero ability slots`);

	console.log('💾 Inserting items...');
	const seenItemSlugs = new Set<string>();
	const itemsToInsert = [...items]
		.filter(itemImage)
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
					image: itemImage(item),
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
	console.log(`  ✅ Found ${changelogs.length} unique changelogs`);
	const routes: EntityRoutes = {
		heroes: new Set(heroes.map((hero) => toSlug(hero.name))),
		items: new Set(
			itemsToInsert
				.filter((item) => item.type !== 'ability')
				.map((item) => toSlug(item.name))
		),
		abilities: new Set(
			heroes.flatMap((hero) =>
				(abilitySlots.get(hero.id) ?? []).map(
					(ability) => `${toSlug(hero.name)}:${ability.slug}`
				)
			)
		)
	};
	await Promise.all(
		changelogs.map(async ({ filepath }) =>
			assertEntityLinks(await readFile(filepath, 'utf8'), filepath, routes)
		)
	);

	console.log('💾 Inserting changelogs...');
	let heroMatches = 0;
	let itemMatches = 0;

	for (const {
		metadata,
		entities,
		entityChanges,
		slug,
		aliases,
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
		for (const alias of aliases) {
			if (alias === slug) continue;
			await db.insert(schema.changelogAliases).values({ slug: alias, changelogId });
		}

		for (const [heroId, changeGroups] of heroMatchesForPatch) {
			await db
				.insert(schema.changelogHeroes)
				.values(
					insertChangelogHeroSchema.parse({
						changelogId,
						heroId,
						changeGroups
					})
				)
				.onConflictDoNothing();
			heroMatches++;
		}

		for (const [itemId, changeGroups] of itemMatchesForPatch) {
			await db
				.insert(schema.changelogItems)
				.values(insertChangelogItemSchema.parse({ changelogId, itemId, changeGroups }))
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
