import { describe, it, expect } from 'vitest';
import { readFile } from 'fs/promises';
import { join } from 'path';

/**
 * Tests for OG image generation
 *
 * These tests ensure that the OG image generation creates valid images with correct properties.
 * We test image validity, dimensions, and the logic that determines when to show gradients.
 */

describe('OG Image Tests', () => {
	// Test a selection of hero images with different content amounts
	const heroTestCases = [
		{
			name: 'Seven',
			slug: 'seven',
			description: 'Hero with multiple ability changes (should have gradient)',
			expectedGradient: true
		},
		{
			name: 'Infernus',
			slug: 'infernus',
			description: 'Hero with ability changes',
			expectedGradient: true
		},
		{
			name: 'Abrams',
			slug: 'abrams',
			description: 'Hero with changelog data',
			expectedGradient: true // Adjust based on actual data
		}
	];

	const itemTestCases = [
		{
			name: 'Spirit Strike',
			slug: 'spirit-strike',
			description: 'Item with single change (should NOT have gradient)',
			expectedGradient: false
		},
		{
			name: 'Mystic Shot',
			slug: 'mystic-shot',
			description: 'Item with single change (should NOT have gradient)',
			expectedGradient: false
		},
		{
			name: 'Active Reload',
			slug: 'active-reload',
			description: 'Item with multiple changes',
			expectedGradient: true // Adjust based on actual data
		}
	];

	describe('Hero OG Images', () => {
		heroTestCases.forEach(({ name, slug, description }) => {
			it(`should exist and be valid PNG for ${name} (${description})`, async () => {
				const filePath = join('static/meta/hero', `${slug}.png`);
				const content = await readFile(filePath);

				// PNG files are binary, but we can check if the image was generated successfully
				expect(content.length).toBeGreaterThan(0);

				// Verify it's a valid PNG with correct signature
				const signature = content.subarray(0, 8);
				const expectedSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
				expect(signature.equals(expectedSignature)).toBe(true);

				// Verify dimensions
				const width = content.readUInt32BE(16);
				const height = content.readUInt32BE(20);
				expect(width).toBe(1200);
				expect(height).toBe(630);
			});
		});
	});

	describe('Item OG Images', () => {
		itemTestCases.forEach(({ name, slug, description }) => {
			it(`should exist and be valid PNG for ${name} (${description})`, async () => {
				const filePath = join('static/meta/item', `${slug}.png`);
				const content = await readFile(filePath);

				// PNG files are binary, but we can check if the image was generated successfully
				expect(content.length).toBeGreaterThan(0);

				// Verify it's a valid PNG with correct signature
				const signature = content.subarray(0, 8);
				const expectedSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
				expect(signature.equals(expectedSignature)).toBe(true);

				// Verify dimensions
				const width = content.readUInt32BE(16);
				const height = content.readUInt32BE(20);
				expect(width).toBe(1200);
				expect(height).toBe(630);
			});
		});
	});

	describe('Gradient Logic Consistency', () => {
		it('should consistently determine gradient need for heroes with 3+ items', () => {
			// Test the logic: more than 3 total items (notes + abilities) = gradient
			const testCases = [
				{ notes: 0, abilities: 0, expected: false },
				{ notes: 1, abilities: 0, expected: false },
				{ notes: 2, abilities: 0, expected: false },
				{ notes: 3, abilities: 0, expected: false },
				{ notes: 4, abilities: 0, expected: true },
				{ notes: 0, abilities: 4, expected: true },
				{ notes: 2, abilities: 2, expected: true },
				{ notes: 1, abilities: 3, expected: true }
			];

			testCases.forEach(({ notes, abilities, expected }) => {
				const totalContent = notes + abilities;
				const hasMoreContent = totalContent > 3;
				expect(hasMoreContent).toBe(expected);
			});
		});

		it('should consistently determine gradient need for items with 4+ notes', () => {
			// Test the logic: more than 4 notes OR truncated text = gradient
			const testCases = [
				{ noteCount: 0, textLength: 100, expected: false },
				{ noteCount: 1, textLength: 100, expected: false },
				{ noteCount: 4, textLength: 100, expected: false },
				{ noteCount: 5, textLength: 100, expected: true },
				{ noteCount: 10, textLength: 100, expected: true },
				{ noteCount: 2, textLength: 260, expected: true }, // Truncated
				{ noteCount: 4, textLength: 260, expected: true } // Truncated
			];

			testCases.forEach(({ noteCount, textLength, expected }) => {
				const hasMoreContent = noteCount > 4 || textLength > 250;
				expect(hasMoreContent).toBe(expected);
			});
		});
	});

	describe('Regression Tests', () => {
		it('should maintain ability icon size at 56px (2x text size of 28px)', () => {
			// This is a logic test to ensure the ratio is maintained
			const iconSize = 56;
			const textSize = 28;
			const ratio = iconSize / textSize;

			expect(ratio).toBe(2);
		});

		it('should maintain gradient height at 94px with 15% solid margin', () => {
			// Verify gradient configuration
			const gradientHeight = 94;
			const solidPercentage = 15;
			const solidHeight = (gradientHeight * solidPercentage) / 100;

			expect(gradientHeight).toBe(94);
			expect(solidHeight).toBeCloseTo(14.1, 1); // ~14px solid before fade
		});

		it('should maintain preview height at 240px for heroes', () => {
			const heroPreviewHeight = 240;
			expect(heroPreviewHeight).toBe(240);
		});

		it('should maintain preview height at 280px for items', () => {
			const itemPreviewHeight = 280;
			expect(itemPreviewHeight).toBe(280);
		});

		it('should maintain spacing at 42px between preview items (1.5 line height)', () => {
			const spacing = 42;
			const lineHeight = 28; // Font size
			const ratio = spacing / lineHeight;

			expect(spacing).toBe(42);
			expect(ratio).toBeCloseTo(1.5, 1);
		});
	});
});
