import { describe, it, expect } from 'vitest';
import { fetchHeroes, fetchItems, fetchAllAssets } from './assets';
import '../test/setup';

describe('Assets API', () => {
	describe('fetchHeroes', () => {
		it('should fetch heroes from API', async () => {
			const heroes = await fetchHeroes();

			expect(heroes).toBeDefined();
			expect(Array.isArray(heroes)).toBe(true);
			expect(heroes.length).toBeGreaterThan(0);
		});

		it('should return heroes with correct structure', async () => {
			const heroes = await fetchHeroes();
			const hero = heroes[0];

			expect(hero).toHaveProperty('id');
			expect(hero).toHaveProperty('name');
			expect(hero).toHaveProperty('class_name');
			expect(hero).toHaveProperty('images');
			expect(typeof hero.id).toBe('number');
			expect(typeof hero.name).toBe('string');
			expect(typeof hero.images).toBe('object');
		});

		it('should have valid image URLs', async () => {
			const heroes = await fetchHeroes();
			const hero = heroes[0];

			const imageValues = Object.values(hero.images);
			expect(imageValues.length).toBeGreaterThan(0);

			imageValues.forEach((url) => {
				expect(typeof url).toBe('string');
				expect(url).toMatch(/^https?:\/\//);
			});
		});
	});

	describe('fetchItems', () => {
		it('should fetch items from API', async () => {
			const items = await fetchItems();

			expect(items).toBeDefined();
			expect(Array.isArray(items)).toBe(true);
			expect(items.length).toBeGreaterThan(0);
		});

		it('should return items with correct structure', async () => {
			const items = await fetchItems();
			const item = items[0];

			expect(item).toHaveProperty('id');
			expect(item).toHaveProperty('name');
			expect(item).toHaveProperty('class_name');
			expect(item).toHaveProperty('type');
			expect(typeof item.id).toBe('number');
			expect(typeof item.name).toBe('string');
			expect(['weapon', 'ability']).toContain(item.type);
		});

		it('should have valid image URLs when available', async () => {
			const items = await fetchItems();
			// @ts-expect-error - items schema is currently z.any()
			const itemsWithImages = items.filter((item) => item.image || item.image_webp);

			expect(itemsWithImages.length).toBeGreaterThan(0);

			// @ts-expect-error - items schema is currently z.any()
			itemsWithImages.forEach((item) => {
				if (item.image) {
					expect(item.image).toMatch(/^https?:\/\//);
				}
				if (item.image_webp) {
					expect(item.image_webp).toMatch(/^https?:\/\//);
				}
			});
		});
	});

	describe('fetchAllAssets', () => {
		it('should fetch all assets in parallel', async () => {
			const assets = await fetchAllAssets();

			expect(assets).toHaveProperty('heroes');
			expect(assets).toHaveProperty('items');

			expect(Array.isArray(assets.heroes)).toBe(true);
			expect(Array.isArray(assets.items)).toBe(true);

			expect(assets.heroes.length).toBeGreaterThan(0);
			expect(assets.items.length).toBeGreaterThan(0);
		});
	});
});
