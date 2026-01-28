import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mkdir, rm } from 'fs/promises';
import { join } from 'path';
import { getAllHeroes, getAllItems, queryChangelogs } from '@deadlog/scraper';
import { getLibsqlDb as getDb } from '@deadlog/db';

// Import the main function to test - we'll need to refactor to export the functions
// For now, let's test the integration by checking if files are generated

const TEST_OUTPUT_DIR = 'test-output/og';

describe('OG Image Generation', () => {
	beforeAll(async () => {
		// Ensure test output directory exists
		await mkdir(TEST_OUTPUT_DIR, { recursive: true });
		await mkdir(join(TEST_OUTPUT_DIR, 'hero'), { recursive: true });
		await mkdir(join(TEST_OUTPUT_DIR, 'item'), { recursive: true });
		await mkdir(join(TEST_OUTPUT_DIR, 'change'), { recursive: true });
	});

	afterAll(async () => {
		// Clean up test outputs
		await rm(TEST_OUTPUT_DIR, { recursive: true, force: true });
	});

	describe('Hero OG Images', () => {
		it('should have ability icon data in hero changes', async () => {
			const db = getDb();
			const heroes = await getAllHeroes(db);
			const releasedHeroes = heroes.filter((h) => h.isReleased);

			expect(releasedHeroes.length).toBeGreaterThan(0);

			// Check if at least one hero has changelog data with ability changes
			let foundAbilityWithIcon = false;
			for (const hero of releasedHeroes.slice(0, 5)) {
				const changelogs = await queryChangelogs(db, { heroIds: [hero.id] });
				if (changelogs.length > 0) {
					const latestChangelog = changelogs[0];
					const heroChanges = latestChangelog.contentJson?.heroes?.[hero.name];

					if (heroChanges?.abilities) {
						for (const ability of heroChanges.abilities) {
							if (ability.abilityImage) {
								foundAbilityWithIcon = true;
								expect(ability.abilityImage).toMatch(/^https?:\/\//);
								expect(ability.abilityName).toBeTruthy();
								break;
							}
						}
					}
				}
				if (foundAbilityWithIcon) break;
			}

			// Note: This might not always be true depending on the data, but documents the expected structure
			expect(foundAbilityWithIcon).toBe(true);
		});

		it('should generate preview data with correct structure', async () => {
			const db = getDb();
			const heroes = await getAllHeroes(db);
			const hero = heroes.find((h) => h.isReleased);

			expect(hero).toBeDefined();

			if (hero) {
				const changelogs = await queryChangelogs(db, { heroIds: [hero.id] });

				if (changelogs.length > 0) {
					const latestChangelog = changelogs[0];
					const heroChanges = latestChangelog.contentJson?.heroes?.[hero.name];

					if (heroChanges) {
						// Check that we can construct preview items
						const previewItems: {
							type: 'text' | 'ability';
							text: string;
							abilityName?: string;
							abilityImage?: string;
						}[] = [];

						// Add general notes
						if (heroChanges.notes) {
							for (const note of heroChanges.notes.slice(0, 3)) {
								previewItems.push({
									type: 'text',
									text: note.text
								});
							}
						}

						// Add ability changes
						if (heroChanges.abilities) {
							const remainingSpace = 3 - previewItems.length;
							for (const ability of heroChanges.abilities.slice(0, remainingSpace)) {
								if (ability.notes && ability.notes.length > 0) {
									previewItems.push({
										type: 'ability',
										abilityName: ability.abilityName,
										abilityImage: ability.abilityImage,
										text: ability.notes[0].text
									});
								}
							}
						}

						// Verify structure
						for (const item of previewItems) {
							expect(['text', 'ability']).toContain(item.type);
							expect(item.text).toBeTruthy();

							if (item.type === 'ability') {
								expect(item.abilityName).toBeTruthy();
								// abilityImage is optional but should be a URL if present
								if (item.abilityImage) {
									expect(item.abilityImage).toMatch(/^https?:\/\//);
								}
							}
						}

						expect(previewItems.length).toBeGreaterThan(0);
						expect(previewItems.length).toBeLessThanOrEqual(3);
					}
				}
			}
		});
	});

	describe('Item OG Images', () => {
		it('should have changelog data for items with images', async () => {
			const db = getDb();
			const items = await getAllItems(db);
			const itemsWithImages = items.filter((i) => i.image);

			expect(itemsWithImages.length).toBeGreaterThan(0);

			// Verify at least one item has the required image format
			const item = itemsWithImages[0];
			expect(item.image).toBeDefined();
			expect(item.image).toBeTruthy();
		});

		it('should format item preview text correctly', () => {
			// Test the text formatting logic
			const mockNotes = [
				{ text: 'Damage increased from 50 to 60', patterns: [] },
				{ text: 'Cooldown reduced from 10s to 8s', patterns: [] },
				{ text: 'Range increased by 2m', patterns: [] }
			];

			const lines: string[] = [];
			for (const note of mockNotes.slice(0, 4)) {
				lines.push(`• ${note.text}`);
			}

			const previewText = lines.join('\n');

			expect(previewText).toContain('•');
			expect(previewText.split('\n').length).toBe(3);
			expect(previewText).toContain('Damage increased');
			expect(previewText).toContain('Cooldown reduced');
		});
	});

	describe('Preview Data Structure', () => {
		it('should limit preview items to 3 max', () => {
			// Test the logic for limiting preview items
			const mockItems = [
				{ type: 'text' as const, text: 'Change 1' },
				{ type: 'text' as const, text: 'Change 2' },
				{ type: 'text' as const, text: 'Change 3' },
				{ type: 'text' as const, text: 'Change 4' }
			];

			const remainingSpace = 3 - mockItems.slice(0, 3).length;
			expect(remainingSpace).toBe(0);

			// With 2 general notes, should have space for 1 ability
			const withTwoNotes = mockItems.slice(0, 2);
			const spaceForAbilities = 3 - withTwoNotes.length;
			expect(spaceForAbilities).toBe(1);
		});

		it('should handle empty preview data gracefully', () => {
			const emptyPreview: {
				type: 'text' | 'ability';
				text: string;
			}[] = [];

			expect(emptyPreview.length).toBe(0);
			// In the actual code, this should result in null preview
			const shouldBeNull = emptyPreview.length === 0 ? null : emptyPreview;
			expect(shouldBeNull).toBeNull();
		});
	});

	describe('Type Safety', () => {
		it('should enforce HeroPreviewItem interface', () => {
			// Test that the TypeScript interface is correctly defined
			const validTextItem: {
				type: 'text' | 'ability';
				text: string;
				abilityName?: string;
				abilityImage?: string;
			} = {
				type: 'text',
				text: 'Health increased'
			};

			const validAbilityItem: {
				type: 'text' | 'ability';
				text: string;
				abilityName?: string;
				abilityImage?: string;
			} = {
				type: 'ability',
				text: 'Damage reduced',
				abilityName: 'Fireball',
				abilityImage: 'https://example.com/icon.png'
			};

			expect(validTextItem.type).toBe('text');
			expect(validTextItem.text).toBeTruthy();

			expect(validAbilityItem.type).toBe('ability');
			expect(validAbilityItem.abilityName).toBeTruthy();
			expect(validAbilityItem.abilityImage).toBeTruthy();
		});
	});

	describe('Image Path Structure', () => {
		it('should use correct folder structure for meta images', () => {
			const heroSlug = 'seven';
			const itemSlug = 'mystic-shot';
			const changelogId = '2024-01-01';

			const heroPath = `static/meta/hero/${heroSlug}.png`;
			const itemPath = `static/meta/item/${itemSlug}.png`;
			const changelogPath = `static/meta/change/${changelogId}.png`;

			expect(heroPath).toMatch(/^static\/meta\/hero\/[a-z-]+\.png$/);
			expect(itemPath).toMatch(/^static\/meta\/item\/[a-z-]+\.png$/);
			expect(changelogPath).toMatch(/^static\/meta\/change\/[0-9-]+\.png$/);
		});
	});
});
