import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { createClient, type Client } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { schema, type DrizzleDB } from '@deadlog/db';
import {
	getChangelogsByHeroId,
	getChangelogsByItemId,
	getHeroByName,
	getHeroBySlug
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
				slug TEXT,
				author TEXT NOT NULL,
				author_image TEXT NOT NULL,
				category TEXT,
				pub_date TEXT NOT NULL,
				major_update INTEGER NOT NULL DEFAULT 0,
				parent_change TEXT,
				content_text TEXT
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
				change_count INTEGER,
				PRIMARY KEY (changelog_id, hero_id)
			);
			CREATE TABLE changelog_items (
				changelog_id TEXT NOT NULL,
				item_id INTEGER NOT NULL,
				change_count INTEGER,
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
		await db.insert(schema.changelogs).values([
			{
				id: 'new',
				title: 'New patch',
				author: 'Yoshi',
				authorImage: '',
				pubDate: '2026-02-02T20:00:00.000Z'
			},
			{
				id: 'old',
				title: 'Old patch',
				author: 'Yoshi',
				authorImage: '',
				pubDate: '2026-01-01T20:00:00.000Z'
			}
		]);
		await db.insert(schema.changelogHeroes).values([
			{ changelogId: 'new', heroId: 69, changeCount: 4 },
			{ changelogId: 'old', heroId: 69, changeCount: null }
		]);
		await db
			.insert(schema.changelogItems)
			.values({ changelogId: 'new', itemId: 1, changeCount: 2 });
	});

	afterEach(() => client.close());

	it('returns stored hero counts and preserves an unknown count as null', async () => {
		const history = await getChangelogsByHeroId(db, 69);
		expect(history.map(({ id, changeCount }) => ({ id, changeCount }))).toEqual([
			{ id: 'new', changeCount: 4 },
			{ id: 'old', changeCount: null }
		]);
	});

	it('returns the item-specific count rather than the wider patch scope', async () => {
		const history = await getChangelogsByItemId(db, 1);
		expect(history).toHaveLength(1);
		expect(history[0].changeCount).toBe(2);
	});

	it('resolves article aliases to the canonical hero row', async () => {
		await expect(getHeroByName(db, 'Doorman')).resolves.toMatchObject({
			name: 'The Doorman',
			slug: 'the-doorman'
		});
		await expect(getHeroBySlug(db, 'doorman')).resolves.toMatchObject({
			name: 'The Doorman',
			slug: 'the-doorman'
		});
	});
});
