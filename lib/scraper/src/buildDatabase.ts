import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { PatchesApi, Configuration } from 'deadlock-api-client';
import { execSync } from 'node:child_process';
import { mkdir, readFile, rename, rm } from 'fs/promises';
import path from 'path';
import { fetchEntitySnapshot, type EntitySnapshot } from './api';
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
	changelogSourceUrl,
	loadAllChangelogs,
	type EntityBulletGroup,
	type EntityChange
} from '@deadlog/changelog';
import { indexEntityNames, findEntityName, toSlug } from '@deadlog/utils';
import { resolveAbilitySlots } from './heroAbilities';

interface BuildOptions {
	outputDir: string;
	changelogsDir: string;
	snapshot?: EntitySnapshot;
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

async function writeBatches<T>(rows: T[], write: (batch: T[]) => PromiseLike<unknown>) {
	// Small enough for SQLite's conservative parameter limit even on the widest table.
	for (let offset = 0; offset < rows.length; offset += 50) {
		await write(rows.slice(offset, offset + 50));
	}
}

/** Null groups = the entity is named in the patch but heads no section of its own. */
type EntityMatch = EntityBulletGroup[] | null;

function collectEntityMatches(
	names: string[],
	changes: EntityChange[],
	type: 'hero' | 'item',
	entityMap: Map<string, { id: number }>
): Map<number, EntityMatch> {
	const matches = new Map<number, EntityMatch>();

	for (const name of names) {
		const id = findEntityName(entityMap, name)?.id;
		if (id !== undefined && !matches.has(id)) {
			matches.set(id, null);
		}
	}

	for (const change of changes) {
		if (change.type !== type) continue;
		const id = findEntityName(entityMap, change.name)?.id;
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

	const [bigDaysResponse, snapshot] = await Promise.all([
		patchesApi.bigPatchDays(),
		options.snapshot ?? fetchEntitySnapshot()
	]);
	const { heroes, items } = snapshot;

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
	const env: NodeJS.ProcessEnv = {
		...process.env,
		DATABASE_URL: `file:${path.resolve(dbPath)}`
	};
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
	const connection = drizzle(client, { schema });
	let patchCount = 0;
	let heroMatches = 0;
	let itemMatches = 0;
	try {
		await connection.transaction(async (db) => {
			console.log(`📅 Found ${bigDayDates.size} big patch days`);
			console.log(`🦸 Found ${heroes.length} heroes`);
			console.log(`⚔️  Found ${items.length} items`);

			console.log('💾 Inserting heroes...');
			await writeBatches(
				heroes.map((hero) =>
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
				),
				(batch) => db.insert(schema.heroes).values(batch).onConflictDoNothing()
			);
			console.log(`  ✅ Inserted ${heroes.length} heroes`);

			const abilitySlots = resolveAbilitySlots(heroes, items);
			const abilityRows = [...abilitySlots.values()]
				.flat()
				.map((ability) => insertHeroAbilitySchema.parse(ability));
			await writeBatches(abilityRows, (batch) =>
				db.insert(schema.heroAbilities).values(batch)
			);
			console.log(`  ✅ Inserted ${abilityRows.length} hero ability slots`);

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

			await writeBatches(
				itemsToInsert.map((item) =>
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
				),
				(batch) => db.insert(schema.items).values(batch).onConflictDoNothing()
			);
			console.log(`  ✅ Inserted ${itemsToInsert.length} items`);

			const heroMap = indexEntityNames(heroes, (hero) => hero.name);
			const itemMap = indexEntityNames(
				itemsToInsert.filter((item) => item.type === 'upgrade'),
				(item) => item.name
			);

			console.log(`📂 Loading changelogs from ${changelogsDir}...`);
			const changelogs = await loadAllChangelogs(changelogsDir);
			patchCount = changelogs.length;
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
			const patchRows: (typeof schema.changelogs.$inferInsert)[] = [];
			const aliasRows: (typeof schema.changelogAliases.$inferInsert)[] = [];
			const heroRows: (typeof schema.changelogHeroes.$inferInsert)[] = [];
			const itemRows: (typeof schema.changelogItems.$inferInsert)[] = [];

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

				patchRows.push({
					id: changelogId,
					title: metadata.title,
					slug,
					sourceUrl: changelogSourceUrl(metadata),
					author: metadata.author,
					authorImage: metadata.author_image ?? '',
					previewImage: previewImage ?? null,
					category: metadata.category,
					pubDate: new Date(metadata.published).toISOString(),
					majorUpdate: isMajorUpdate,
					parentChange: metadata.parent_id ?? null,
					contentText: plainText
				});
				for (const alias of aliases) {
					if (alias === slug) continue;
					aliasRows.push({ slug: alias, changelogId });
				}

				for (const [heroId, changeGroups] of heroMatchesForPatch) {
					heroRows.push(
						insertChangelogHeroSchema.parse({
							changelogId,
							heroId,
							changeGroups
						})
					);
					heroMatches++;
				}

				for (const [itemId, changeGroups] of itemMatchesForPatch) {
					itemRows.push(
						insertChangelogItemSchema.parse({ changelogId, itemId, changeGroups })
					);
					itemMatches++;
				}
			}

			await writeBatches(patchRows, (batch) =>
				db.insert(schema.changelogs).values(batch).onConflictDoNothing()
			);
			await writeBatches(aliasRows, (batch) =>
				db.insert(schema.changelogAliases).values(batch)
			);
			await writeBatches(heroRows, (batch) =>
				db.insert(schema.changelogHeroes).values(batch).onConflictDoNothing()
			);
			await writeBatches(itemRows, (batch) =>
				db.insert(schema.changelogItems).values(batch).onConflictDoNothing()
			);
			console.log(`  ✅ Inserted ${changelogs.length} changelogs`);
			console.log(`  🦸 ${heroMatches} hero references`);
			console.log(`  ⚔️  ${itemMatches} item references`);

			console.log('📋 Adding metadata...');
			await db.insert(schema.metadata).values([
				{ key: 'built_at', value: new Date().toISOString() },
				{ key: 'patch_count', value: String(patchCount) }
			]);
		});
	} finally {
		client.close();
	}
	await rename(dbPath, targetDbPath);

	console.log(`\n✨ Database built successfully!`);
	console.log(`📦 File: ${targetDbPath}`);
	console.log(`📊 Changelogs: ${patchCount}`);

	return { path: targetDbPath, patchCount, heroMatches, itemMatches };
}
