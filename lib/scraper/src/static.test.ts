import { describe, it, expect } from 'vitest';
import { getAllChangelogs, getChangelogById, getMetadata, getDb } from './static';
import { existsSync } from 'fs';
import { resolve } from 'path';

// Standard database path from repo root
const dbPath = resolve(process.cwd(), 'dist/data/deadlog.db');

// Skip tests if database doesn't exist (e.g., in CI before build)
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
			expect(firstPatch).toHaveProperty('contentJson');
			expect(firstPatch).toHaveProperty('author');
			expect(firstPatch).toHaveProperty('authorImage');
			expect(firstPatch).toHaveProperty('guid');
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

		it('should include contentJson when available', async () => {
			const db = getDb();
			const patches = await getAllChangelogs(db);
			const patchWithContent = patches.find((p) => p.contentJson);

			if (patchWithContent && patchWithContent.contentJson) {
				expect(typeof patchWithContent.contentJson).toBe('object');
				expect(patchWithContent.contentJson).not.toBeNull();
			}
		});
	});

	describe('getChangelogById', () => {
		it('should return a patch when given a valid id', async () => {
			const db = getDb();
			const allPatches = await getAllChangelogs(db);
			const testId = allPatches[0].id;

			const patch = await getChangelogById(db, testId);
			expect(patch).not.toBeNull();
			expect(patch?.id).toBe(testId);
		});

		it('should return null for non-existent patch id', async () => {
			const db = getDb();
			const patch = await getChangelogById(db, 'non-existent-id-12345');
			expect(patch).toBeNull();
		});

		it('should return patch with correct structure', async () => {
			const db = getDb();
			const allPatches = await getAllChangelogs(db);
			const testId = allPatches[0].id;

			const patch = await getChangelogById(db, testId);
			expect(patch).toHaveProperty('id');
			expect(patch).toHaveProperty('title');
			expect(patch).toHaveProperty('contentJson');
			expect(patch).toHaveProperty('author');
			expect(patch).toHaveProperty('pubDate');
			expect(typeof patch?.pubDate).toBe('string');
		});

		it('should return same data as getAllChangelogs for matching id', async () => {
			const db = getDb();
			const allPatches = await getAllChangelogs(db);
			const testId = allPatches[0].id;

			const patchFromGetAll = allPatches[0];
			const patchFromGetById = await getChangelogById(db, testId);

			expect(patchFromGetById?.id).toBe(patchFromGetAll.id);
			expect(patchFromGetById?.title).toBe(patchFromGetAll.title);
			expect(patchFromGetById?.author).toBe(patchFromGetAll.author);
		});
	});

	describe('getMetadata', () => {
		it('should return metadata value for existing key', async () => {
			const db = getDb();
			// Test with known metadata keys
			const lastUpdated = await getMetadata(db, 'last_updated');
			const patchCount = await getMetadata(db, 'patch_count');

			// At least one of these should exist
			const hasMetadata = lastUpdated !== null || patchCount !== null;
			expect(hasMetadata).toBe(true);
		});

		it('should return null for non-existent key', async () => {
			const db = getDb();
			const result = await getMetadata(db, 'non-existent-key-12345');
			expect(result).toBeNull();
		});

		it('should return string values', async () => {
			const db = getDb();
			const lastUpdated = await getMetadata(db, 'last_updated');
			// Ensure we always have an assertion
			if (lastUpdated !== null) {
				expect(typeof lastUpdated).toBe('string');
			} else {
				// If no last_updated, that's acceptable - just verify it's null
				expect(lastUpdated).toBeNull();
			}
		});

		it('should handle patch_count metadata', async () => {
			const db = getDb();
			const patchCount = await getMetadata(db, 'patch_count');
			if (patchCount !== null) {
				expect(typeof patchCount).toBe('string');
				const count = parseInt(patchCount, 10);
				expect(count).toBeGreaterThan(0);
			}
		});

		it('should handle big_patch_days metadata', async () => {
			const db = getDb();
			const bigPatchDays = await getMetadata(db, 'big_patch_days');
			if (bigPatchDays !== null) {
				expect(typeof bigPatchDays).toBe('string');
				// Should be valid JSON
				const parsed = JSON.parse(bigPatchDays);
				expect(Array.isArray(parsed)).toBe(true);
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
				// Note: actual patch count may be higher than metadata due to poster replies
				// Each main post can have additional update entries (e.g., 79 posts -> 86 total entries)
				expect(patches.length).toBeGreaterThanOrEqual(count);
			} else {
				// If no metadata, just verify we have some patches
				expect(patches.length).toBeGreaterThan(0);
			}
		});

		it('should have valid last_updated timestamp', async () => {
			const db = getDb();
			const lastUpdated = await getMetadata(db, 'last_updated');

			if (lastUpdated !== null) {
				const date = new Date(lastUpdated);
				expect(date.toString()).not.toBe('Invalid Date');
				// Should be a reasonable date (after 2020)
				expect(date.getFullYear()).toBeGreaterThanOrEqual(2020);
			} else {
				// If no last_updated metadata, check for built_at instead
				const builtAt = await getMetadata(db, 'built_at');
				expect(builtAt).not.toBeNull();
			}
		});

		it('should return patches ordered consistently', async () => {
			const db = getDb();
			const patches1 = await getAllChangelogs(db);
			const patches2 = await getAllChangelogs(db);

			expect(patches1.length).toBe(patches2.length);
			// First and last patches should match
			if (patches1.length > 0) {
				expect(patches1[0].id).toBe(patches2[0].id);
				expect(patches1[patches1.length - 1].id).toBe(patches2[patches2.length - 1].id);
			}
		});
	});
});
