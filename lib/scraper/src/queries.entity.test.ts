import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { createClient, type Client } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { schema, type DrizzleDB } from '@deadlog/db';
import {
	getChangelogAbilityIcons,
	getChangelogBySlug,
	getChangelogsByHeroId,
	getChangelogsByItemId,
	getChangelogIcons,
	getHeroAbilities,
	getHeroBySlug,
	getHeroLastModified,
	getItemLastModified,
	getReleasedHeroSlugs,
	getReleasedItemSlugs,
	queryChangelogs
} from './queries';

describe('entity history queries', () => {
	let client: Client;
	let db: DrizzleDB;

	beforeEach(async () => {
		client = createClient({ url: ':memory:' });
		db = drizzle(client, { schema }) as DrizzleDB;
		await client.executeMultiple(`
			CREATE TABLE changelogs (
				id TEXT PRIMARY KEY,
				title TEXT NOT NULL,
				slug TEXT NOT NULL,
				source_url TEXT NOT NULL,
				author TEXT NOT NULL,
				author_image TEXT NOT NULL,
				preview_image TEXT,
				category TEXT,
				pub_date TEXT NOT NULL,
				major_update INTEGER NOT NULL DEFAULT 0,
				parent_change TEXT,
				content_text TEXT
			);
			CREATE TABLE changelog_aliases (
				slug TEXT PRIMARY KEY,
				changelog_id TEXT NOT NULL
			);
			CREATE TABLE heroes (
				id INTEGER PRIMARY KEY,
				name TEXT NOT NULL,
				slug TEXT NOT NULL UNIQUE,
				class_name TEXT NOT NULL,
				hero_type TEXT,
				images TEXT NOT NULL,
				is_released INTEGER NOT NULL DEFAULT 0
			);
			CREATE TABLE hero_abilities (
				hero_id INTEGER NOT NULL,
				position INTEGER NOT NULL,
				name TEXT NOT NULL,
				slug TEXT NOT NULL,
				image TEXT NOT NULL,
				description TEXT,
				PRIMARY KEY (hero_id, position),
				UNIQUE (hero_id, slug)
			);
			CREATE TABLE items (
				id INTEGER PRIMARY KEY,
				name TEXT NOT NULL,
				slug TEXT NOT NULL UNIQUE,
				class_name TEXT NOT NULL,
				type TEXT NOT NULL,
				category TEXT,
				tier INTEGER,
				image TEXT NOT NULL,
				is_released INTEGER NOT NULL DEFAULT 0
			);
			CREATE TABLE changelog_heroes (
				changelog_id TEXT NOT NULL,
				hero_id INTEGER NOT NULL,
				change_groups TEXT,
				PRIMARY KEY (changelog_id, hero_id)
			);
			CREATE TABLE changelog_items (
				changelog_id TEXT NOT NULL,
				item_id INTEGER NOT NULL,
				change_groups TEXT,
				PRIMARY KEY (changelog_id, item_id)
			);
		`);

		await db.insert(schema.heroes).values({
			id: 69,
			name: 'The Doorman',
			slug: 'the-doorman',
			className: 'hero_doorman',
			heroType: 'mystic',
			images: { icon_image_small: '/doorman.png' },
			isReleased: true
		});
		await db.insert(schema.heroes).values({
			id: 70,
			name: 'Prototype Hero',
			slug: 'prototype-hero',
			className: 'hero_prototype',
			heroType: null,
			images: {},
			isReleased: false
		});
		await db.insert(schema.items).values({
			id: 1,
			name: 'Tesla Bullets',
			slug: 'tesla-bullets',
			className: 'upgrade_chain_lightning',
			type: 'upgrade',
			category: 'weapon',
			tier: 3,
			image: '/tesla.png',
			isReleased: true
		});
		await db.insert(schema.heroAbilities).values([
			{
				heroId: 69,
				position: 2,
				name: 'Doorway',
				slug: 'doorway',
				image: '/doorway.png',
				description: 'Opens a doorway.'
			},
			{
				heroId: 69,
				position: 1,
				name: 'Call Bell',
				slug: 'call-bell',
				image: '/call-bell.png',
				description: null
			},
			{
				heroId: 70,
				position: 1,
				name: 'Call Bell',
				slug: 'call-bell',
				image: '/prototype-call-bell.png',
				description: null
			}
		]);
		await db.insert(schema.changelogs).values([
			{
				id: 'new',
				title: '100% patch',
				slug: '2026/02-02',
				sourceUrl: 'https://forums.playdeadlock.com/threads/1/',
				author: 'Yoshi',
				authorImage: '',
				pubDate: '2026-02-02T20:00:00.000Z',
				contentText: 'A literal percentage marker'
			},
			{
				id: 'old',
				title: 'Old_patch',
				slug: '2026/01-01',
				sourceUrl: 'https://forums.playdeadlock.com/threads/2/',
				author: 'Yoshi',
				authorImage: '',
				pubDate: '2026-01-01T20:00:00.000Z',
				contentText: 'An underscore marker'
			}
		]);
		await db.insert(schema.changelogAliases).values({
			slug: '2026/gameplay-02-02',
			changelogId: 'new'
		});
		await db.insert(schema.changelogHeroes).values([
			{
				changelogId: 'new',
				heroId: 69,
				changeGroups: [
					{ ability: null, bullets: ['Base bullet damage increased'] },
					{ ability: 'Doorway', bullets: ['Cooldown reduced from 40s to 32s'] }
				]
			},
			{ changelogId: 'old', heroId: 69, changeGroups: null }
		]);
		await db.insert(schema.changelogItems).values({
			changelogId: 'new',
			itemId: 1,
			changeGroups: [{ ability: null, bullets: ['Proc chance increased'] }]
		});
	});

	afterEach(() => client.close());

	it('derives hero counts from bullets and keeps a bullet-less mention null', async () => {
		const history = await getChangelogsByHeroId(db, 69);
		expect(history.map(({ id, changeCount }) => ({ id, changeCount }))).toEqual([
			{ id: 'new', changeCount: 2 },
			{ id: 'old', changeCount: null }
		]);
	});

	it('resolves changelog aliases as canonical rows', async () => {
		await expect(getChangelogBySlug(db, '2026/gameplay-02-02')).resolves.toMatchObject({
			id: 'new',
			slug: '2026/02-02'
		});
	});

	it('returns the item-specific count rather than the wider patch scope', async () => {
		const history = await getChangelogsByItemId(db, 1);
		expect(history).toHaveLength(1);
		expect(history[0].changeCount).toBe(1);
	});

	it('carries the entity-specific change groups instead of the whole patch body', async () => {
		const [hero] = await getChangelogsByHeroId(db, 69);
		const [item] = await getChangelogsByItemId(db, 1);

		expect(hero.changeGroups).toEqual([
			{ ability: null, bullets: ['Base bullet damage increased'] },
			{ ability: 'Doorway', bullets: ['Cooldown reduced from 40s to 32s'] }
		]);
		expect(item.changeGroups).toEqual([
			{ ability: null, bullets: ['Proc chance increased'] }
		]);

		// Entity history pages prerender ~200 pages; shipping contentText put the full
		// prose of every patch into each one. Keep it out of this query.
		for (const row of [hero, item]) {
			expect(row).not.toHaveProperty('contentText');
		}
	});

	it('returns a hero’s castable abilities in in-game order', async () => {
		const abilities = await getHeroAbilities(db, 69);
		expect(abilities).toEqual([
			{
				name: 'Call Bell',
				slug: 'call-bell',
				image: '/call-bell.png',
				description: null
			},
			{
				name: 'Doorway',
				slug: 'doorway',
				image: '/doorway.png',
				description: 'Opens a doorway.'
			}
		]);
	});

	it('returns only the patch heroes ability icons in slot order', async () => {
		await expect(getChangelogAbilityIcons(db, 'new')).resolves.toEqual([
			{ heroId: 69, slug: 'call-bell', image: '/call-bell.png' },
			{ heroId: 69, slug: 'doorway', image: '/doorway.png' }
		]);
	});

	it('translates the stored shop taxonomy for existing icon consumers', async () => {
		const icons = await getChangelogIcons(db, ['new']);
		expect(icons.new.items[0].itemCategory).toBe('weapon');
	});

	it('reports the newest patch date per entity for the sitemap', async () => {
		const heroes = await getHeroLastModified(db);
		const items = await getItemLastModified(db);

		// 'new' is 2026-02-02, 'old' is 2026-01-01 — the hero touched both must report
		// the newer one, or the sitemap tells crawlers the page is staler than it is.
		expect(heroes.get(69)).toBe('2026-02-02T20:00:00.000Z');
		expect(items.get(1)).toBe('2026-02-02T20:00:00.000Z');
		expect(heroes.get(70)).toBeUndefined();
	});

	it('resolves article aliases without scanning the table', async () => {
		// Both directions: bare slug -> "the-" row, and an unknown slug -> null.
		await expect(getHeroBySlug(db, 'doorman')).resolves.toMatchObject({
			slug: 'the-doorman'
		});
		await expect(getHeroBySlug(db, 'the-doorman')).resolves.toMatchObject({
			slug: 'the-doorman'
		});
		await expect(getHeroBySlug(db, 'not-a-hero')).resolves.toBeNull();
	});

	it('returns an entity history uncapped so the header stats stay honest', async () => {
		const history = await getChangelogsByHeroId(db, 69);
		expect(history).toHaveLength(2);
		// oldest last — the page reads .at(-1) for "Tracked since"
		expect(history.at(-1)?.id).toBe('old');
	});

	it('resolves article aliases to the canonical hero row', async () => {
		await expect(getHeroBySlug(db, 'doorman')).resolves.toMatchObject({
			name: 'The Doorman',
			slug: 'the-doorman'
		});
	});

	it('only returns released entities for prerendered profile routes', async () => {
		await expect(getReleasedHeroSlugs(db)).resolves.toEqual(['the-doorman']);
		await expect(getReleasedItemSlugs(db)).resolves.toEqual(['tesla-bullets']);
	});

	it('treats SQL LIKE wildcard characters as literal search text', async () => {
		await expect(queryChangelogs(db, { searchQuery: '%' })).resolves.toMatchObject([
			{ id: 'new' }
		]);
		await expect(queryChangelogs(db, { searchQuery: '_' })).resolves.toMatchObject([
			{ id: 'old' }
		]);
	});
});
