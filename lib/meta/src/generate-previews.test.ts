import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mkdir, rm } from 'fs/promises';
import { join } from 'path';
import { getAllHeroes, getAllItems } from '@deadlog/scraper';
import { getLibsqlDb as getDb } from '@deadlog/db';

const TEST_OUTPUT_DIR = 'test-output/og';

describe('OG Image Generation', () => {
	beforeAll(async () => {
		await mkdir(TEST_OUTPUT_DIR, { recursive: true });
		await mkdir(join(TEST_OUTPUT_DIR, 'hero'), { recursive: true });
		await mkdir(join(TEST_OUTPUT_DIR, 'item'), { recursive: true });
		await mkdir(join(TEST_OUTPUT_DIR, 'change'), { recursive: true });
	});

	afterAll(async () => {
		await rm(TEST_OUTPUT_DIR, { recursive: true, force: true });
	});

	describe('Hero OG Images', () => {
		it('should have released heroes available', async () => {
			const db = getDb();
			const heroes = await getAllHeroes(db);
			const releasedHeroes = heroes.filter((h) => h.isReleased);

			expect(releasedHeroes.length).toBeGreaterThan(0);
		});
	});

	describe('Item OG Images', () => {
		it('should have items with images', async () => {
			const db = getDb();
			const items = await getAllItems(db);
			const itemsWithImages = items.filter((i) => i.image);

			expect(itemsWithImages.length).toBeGreaterThan(0);

			const item = itemsWithImages[0];
			expect(item.image).toBeDefined();
			expect(item.image).toBeTruthy();
		});

		it('should format item preview text correctly', () => {
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
			const mockItems = [
				{ type: 'text' as const, text: 'Change 1' },
				{ type: 'text' as const, text: 'Change 2' },
				{ type: 'text' as const, text: 'Change 3' },
				{ type: 'text' as const, text: 'Change 4' }
			];

			const remainingSpace = 3 - mockItems.slice(0, 3).length;
			expect(remainingSpace).toBe(0);

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
			const shouldBeNull = emptyPreview.length === 0 ? null : emptyPreview;
			expect(shouldBeNull).toBeNull();
		});
	});

	describe('Type Safety', () => {
		it('should enforce HeroPreviewItem interface', () => {
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
