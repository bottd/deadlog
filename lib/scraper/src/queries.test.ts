import { describe, it, expect } from 'vitest';
import { getLibsqlDb as getDb } from '@deadlog/db';
import {
	getAllChangelogs,
	getChangelogBySlug,
	getMetadata,
	queryChangelogs,
	getAllHeroes,
	getAllItems
} from './queries';
import { existsSync } from 'fs';
import { resolve } from 'path';

// These run against the database the repo actually builds. The previous path
// ("dist/data/deadlog.db", resolved against lib/scraper's cwd) never existed, so the
// whole suite reported as skipped rather than failed — silently, in CI and locally.
const dbUrl =
	process.env.DATABASE_URL ??
	`file:${resolve(process.cwd(), '../../app/static/deadlog.db')}`;
process.env.DATABASE_URL = dbUrl;
const dbPath = dbUrl.replace(/^file:/, '');

// Still skipped when no database has been built yet (run `pnpm run build:db`).
describe.skipIf(!existsSync(dbPath))('Database Static Reader', () => {
	describe('getAllChangelogs', () => {
		it('should return an array of patches', async () => {
			const db = getDb();
			const patches = await getAllChangelogs(db);
			expect(Array.isArray(patches)).toBe(true);
		});

		it('should return patches with correct structure', async () => {
			const db = getDb();
			const patches = await getAllChangelogs(db);
			expect(patches.length).toBeGreaterThan(0);

			const firstPatch = patches[0];
			expect(firstPatch).toHaveProperty('id');
			expect(firstPatch).toHaveProperty('title');
			expect(firstPatch).toHaveProperty('author');
			expect(firstPatch).toHaveProperty('authorImage');
			expect(firstPatch).toHaveProperty('sourceUrl');
			expect(firstPatch).toHaveProperty('pubDate');
			expect(typeof firstPatch.pubDate).toBe('string');
		});

		it('should return patches with valid data types', async () => {
			const db = getDb();
			const patches = await getAllChangelogs(db);
			const firstPatch = patches[0];

			expect(typeof firstPatch.id).toBe('string');
			expect(typeof firstPatch.title).toBe('string');
			expect(typeof firstPatch.author).toBe('string');
			expect(typeof firstPatch.authorImage).toBe('string');
			expect(firstPatch.sourceUrl).toMatch(
				/^https:\/\/(?:store\.steampowered\.com|forums\.playdeadlock\.com)\//
			);
			expect(typeof firstPatch.pubDate).toBe('string');
			expect(typeof firstPatch.majorUpdate).toBe('boolean');
		});

		it('should parse categories from JSON', async () => {
			const db = getDb();
			const patches = await getAllChangelogs(db);
			const patchWithCategory = patches.find((p) => p.category);

			if (patchWithCategory) {
				// Category can be string or array depending on the data
				expect(['string', 'object']).toContain(typeof patchWithCategory.category);
			}
		});
	});

	describe('getChangelogBySlug', () => {
		it('resolves a changelog by its .mg slug', async () => {
			const db = getDb();
			// slug is NOT NULL, so any row exercises the lookup
			const [changelog] = await getAllChangelogs(db);
			const patch = await getChangelogBySlug(db, changelog.slug);
			expect(patch?.id).toBe(changelog.id);
		});

		it('returns null for an unknown slug', async () => {
			const db = getDb();
			expect(await getChangelogBySlug(db, '1999/no-such-patch')).toBeNull();
		});
	});

	describe('queryChangelogs', () => {
		it('returns results for a single hero filter', async () => {
			const db = getDb();
			const heroes = await getAllHeroes(db);
			const hero = heroes[0];
			const results = await queryChangelogs(db, { heroIds: [hero.id], limit: 50 });
			expect(results.length).toBeGreaterThan(0);
			for (const r of results) {
				expect(!r.parentChange || r.parentChange === '').toBe(true);
			}
		});

		it('returns fewer or equal results for two heroes AND than either alone', async () => {
			const db = getDb();
			const heroes = await getAllHeroes(db);
			const hero1 = heroes[0];
			const hero2 = heroes[1];

			const [resultsA, resultsB, resultsBoth] = await Promise.all([
				queryChangelogs(db, { heroIds: [hero1.id], limit: 100 }),
				queryChangelogs(db, { heroIds: [hero2.id], limit: 100 }),
				queryChangelogs(db, { heroIds: [hero1.id, hero2.id], limit: 100 })
			]);

			// AND: both must match, so intersection <= either alone
			expect(resultsBoth.length).toBeLessThanOrEqual(resultsA.length);
			expect(resultsBoth.length).toBeLessThanOrEqual(resultsB.length);
		});

		it('returns intersection for hero + item AND filter', async () => {
			const db = getDb();
			const heroes = await getAllHeroes(db);
			const items = await getAllItems(db);
			const hero = heroes[0];
			const item = items[0];

			const [heroOnly, itemOnly, both] = await Promise.all([
				queryChangelogs(db, { heroIds: [hero.id], limit: 100 }),
				queryChangelogs(db, { itemIds: [item.id], limit: 100 }),
				queryChangelogs(db, { heroIds: [hero.id], itemIds: [item.id], limit: 100 })
			]);

			expect(both.length).toBeLessThanOrEqual(heroOnly.length);
			expect(both.length).toBeLessThanOrEqual(itemOnly.length);
		});

		it('returns empty for a non-existent heroId', async () => {
			const db = getDb();
			const results = await queryChangelogs(db, { heroIds: [999999] });
			expect(results).toEqual([]);
		});

		it('returns unfiltered results when no filters provided', async () => {
			const db = getDb();
			const results = await queryChangelogs(db, { limit: 10 });
			expect(results.length).toBeGreaterThan(0);
			expect(results.length).toBeLessThanOrEqual(10);
		});

		it('returns only major updates when majorOnly is set', async () => {
			const db = getDb();
			const results = await queryChangelogs(db, { majorOnly: true, limit: 200 });
			expect(results.length).toBeGreaterThan(0);
			for (const r of results) {
				expect(r.majorUpdate).toBe(true);
			}
		});

		it('respects pagination with limit and offset', async () => {
			const db = getDb();
			const page1 = await queryChangelogs(db, { limit: 3, offset: 0 });
			const page2 = await queryChangelogs(db, { limit: 3, offset: 3 });
			expect(page1).toHaveLength(3);
			expect(page2).toHaveLength(3);
			const ids1 = new Set(page1.map((r) => r.id));
			for (const r of page2) {
				expect(ids1.has(r.id)).toBe(false);
			}
		});
	});

	describe('Database integrity', () => {
		it('should have consistent patch count between metadata and actual patches', async () => {
			const db = getDb();
			const patches = await getAllChangelogs(db);
			const metadataCount = await getMetadata(db, 'patch_count');

			if (metadataCount !== null) {
				const count = parseInt(metadataCount, 10);
				// Poster replies become their own entries, so the row count runs ahead
				// of the recorded patch count (e.g. 79 posts -> 86 entries).
				expect(patches.length).toBeGreaterThanOrEqual(count);
			} else {
				expect(patches.length).toBeGreaterThan(0);
			}
		});

		it('should have valid last_updated timestamp', async () => {
			const db = getDb();
			const lastUpdated = await getMetadata(db, 'last_updated');

			if (lastUpdated !== null) {
				const date = new Date(lastUpdated);
				expect(date.toString()).not.toBe('Invalid Date');
				expect(date.getFullYear()).toBeGreaterThanOrEqual(2020);
			} else {
				const builtAt = await getMetadata(db, 'built_at');
				expect(builtAt).not.toBeNull();
			}
		});

		it('should return patches ordered consistently', async () => {
			const db = getDb();
			const patches1 = await getAllChangelogs(db);
			const patches2 = await getAllChangelogs(db);

			expect(patches1.length).toBe(patches2.length);
			if (patches1.length > 0) {
				expect(patches1[0].id).toBe(patches2[0].id);
				expect(patches1[patches1.length - 1].id).toBe(patches2[patches2.length - 1].id);
			}
		});
	});
});
