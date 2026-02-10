import { describe, it, expect } from 'vitest';
import {
	getVisibleHeroNames,
	getVisibleItemNames,
	shouldShowGeneralNotes
} from './filterChanges';

describe('filterChanges', () => {
	const mockChangelogs = [
		{
			id: 'change-1',
			title: 'Change 1.0',
			date: new Date('2024-01-01'),
			author: 'Valve',
			authorImage: undefined,
			majorUpdate: false,
			icons: {
				heroes: [{ id: 1, src: 'test.png', alt: 'Infernus', type: 'hero' as const }],
				items: [{ id: 101, src: 'item1.png', alt: 'Metal Skin', type: 'item' as const }]
			},
			updates: []
		},
		{
			id: 'change-2',
			title: 'Change 1.1',
			date: new Date('2024-01-02'),
			author: 'Valve',
			authorImage: undefined,
			majorUpdate: false,
			icons: {
				heroes: [{ id: 2, src: 'test2.png', alt: 'Seven', type: 'hero' as const }],
				items: [
					{
						id: 102,
						src: 'item2.png',
						alt: 'Headshot Booster',
						type: 'item' as const
					}
				]
			},
			updates: []
		},
		{
			id: 'change-3',
			title: 'Change 1.2',
			date: new Date('2024-01-03'),
			author: 'Valve',
			authorImage: undefined,
			majorUpdate: false,
			icons: {
				heroes: [
					{ id: 1, src: 'test.png', alt: 'Infernus', type: 'hero' as const },
					{ id: 2, src: 'test2.png', alt: 'Seven', type: 'hero' as const }
				],
				items: [{ id: 101, src: 'item1.png', alt: 'Metal Skin', type: 'item' as const }]
			},
			updates: []
		}
	];

	describe('getVisibleHeroNames', () => {
		it('should return null when no filter is active', () => {
			const result = getVisibleHeroNames(mockChangelogs[0], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toBeNull();
		});
	});

	describe('getVisibleItemNames', () => {
		it('should return null when no filter is active', () => {
			const result = getVisibleItemNames(mockChangelogs[0], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toBeNull();
		});
	});

	describe('shouldShowGeneralNotes', () => {
		it('should return false when no filters are applied', () => {
			const result = shouldShowGeneralNotes(mockChangelogs[0], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toBe(false);
		});
	});
});
