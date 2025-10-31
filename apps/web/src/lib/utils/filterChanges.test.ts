import { describe, it, expect } from 'vitest';
import {
	filterChangelogs,
	getVisibleHeroNames,
	getVisibleItemNames,
	shouldShowGeneralNotes,
	getFilteredGeneralNotes
} from './filterChanges';
import type { ChangelogContentJson } from '@deadlog/db';

describe('filterChanges', () => {
	const mockChangelogs = [
		{
			id: 'change-1',
			title: 'Change 1.0',
			date: new Date('2024-01-01'),
			author: 'Valve',
			authorImage: undefined,
			category: { text: 'Update' },
			content_encoded: '<p>Test content</p>',
			fullContent:
				'<p>General bug fix Infernus: Damage increased Metal Skin: Cost reduced</p>',
			guid: { text: 'change-1' },
			majorUpdate: false,
			parentChange: null,
			contentJson: {
				notes: [{ text: 'General bug fix', patterns: [] }],
				heroes: {
					Infernus: {
						id: 1,
						notes: [{ text: 'Damage increased', patterns: [] }],
						abilities: []
					}
				},
				items: {
					'Metal Skin': {
						id: 101,
						notes: [{ text: 'Cost reduced', patterns: [] }]
					}
				},
				abilities: {}
			} as ChangelogContentJson,
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
			category: { text: 'Update' },
			content_encoded: '<p>Test content 2</p>',
			fullContent:
				'<p>Performance improvements Seven: Shield buffed Headshot Booster: Damage bonus increased</p>',
			guid: { text: 'change-2' },
			majorUpdate: false,
			parentChange: null,
			contentJson: {
				notes: [{ text: 'Performance improvements', patterns: [] }],
				heroes: {
					Seven: {
						id: 2,
						notes: [{ text: 'Shield buffed', patterns: [] }],
						abilities: []
					}
				},
				items: {
					'Headshot Booster': {
						id: 102,
						notes: [{ text: 'Damage bonus increased', patterns: [] }]
					}
				},
				abilities: {}
			} as ChangelogContentJson,
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
			category: { text: 'Update' },
			content_encoded: '<p>Test content 3</p>',
			fullContent:
				'<p>Map updates Infernus: Health increased Seven: Speed reduced Metal Skin: Armor buffed</p>',
			guid: { text: 'change-3' },
			majorUpdate: false,
			parentChange: null,
			contentJson: {
				notes: [{ text: 'Map updates', patterns: [] }],
				heroes: {
					Infernus: {
						id: 1,
						notes: [{ text: 'Health increased', patterns: [] }],
						abilities: []
					},
					Seven: {
						id: 2,
						notes: [{ text: 'Speed reduced', patterns: [] }],
						abilities: []
					}
				},
				items: {
					'Metal Skin': {
						id: 101,
						notes: [{ text: 'Armor buffed', patterns: [] }]
					}
				},
				abilities: {}
			} as ChangelogContentJson,
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

	describe('filterChangelogs', () => {
		it('should return all changelogs when no filter is applied', () => {
			const result = filterChangelogs(mockChangelogs, {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toHaveLength(3);
		});

		it('should filter changelogs by hero name', () => {
			const result = filterChangelogs(mockChangelogs, {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			// Should return changes 1 and 3 (both mention Infernus)
			expect(result).toHaveLength(2);
			expect(result[0].id).toBe('change-1');
			expect(result[1].id).toBe('change-3');
		});

		it('should filter changelogs by multiple hero names (AND logic)', () => {
			const result = filterChangelogs(mockChangelogs, {
				selectedHeroNames: new Set(['Infernus', 'Seven']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			// Should return only change 3 since it's the only one that mentions BOTH heroes
			expect(result).toHaveLength(1);
			expect(result[0].id).toBe('change-3');
		});

		it('should filter changelogs by search query (hero name)', () => {
			const result = filterChangelogs(mockChangelogs, {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'Seven'
			});

			// Should return changes 2 and 3 (both mention Seven)
			expect(result).toHaveLength(2);
			expect(result[0].id).toBe('change-2');
			expect(result[1].id).toBe('change-3');
		});

		it('should filter changelogs by search query (case insensitive)', () => {
			const result = filterChangelogs(mockChangelogs, {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'INFERNUS'
			});

			// Should return changes 1 and 3
			expect(result).toHaveLength(2);
			expect(result[0].id).toBe('change-1');
			expect(result[1].id).toBe('change-3');
		});

		it('should filter changelogs by search query (partial match)', () => {
			const result = filterChangelogs(mockChangelogs, {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'performance'
			});

			// Should return change 2 (contains "Performance improvements")
			expect(result).toHaveLength(1);
			expect(result[0].id).toBe('change-2');
		});

		it('should combine hero filter and search query', () => {
			const result = filterChangelogs(mockChangelogs, {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(),
				searchQuery: 'Health'
			});

			// Should return change 3 (mentions Infernus AND contains "Health")
			expect(result).toHaveLength(1);
			expect(result[0].id).toBe('change-3');
		});

		it('should return empty array when no matches found', () => {
			const result = filterChangelogs(mockChangelogs, {
				selectedHeroNames: new Set(['NonExistentHero']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toHaveLength(0);
		});

		it('should return empty array for non-matching search query', () => {
			const result = filterChangelogs(mockChangelogs, {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'nonexistent'
			});

			expect(result).toHaveLength(0);
		});

		it('should handle empty changelogs array', () => {
			const result = filterChangelogs([], {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(),
				searchQuery: 'test'
			});

			expect(result).toHaveLength(0);
		});
	});

	describe('getVisibleHeroNames', () => {
		it('should return null when no filter is active', () => {
			const result = getVisibleHeroNames(mockChangelogs[0], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toBeNull();
		});

		it('should return matching hero names when hero filter is active', () => {
			const result = getVisibleHeroNames(mockChangelogs[2], {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			// Change 3 has both Infernus and Seven, but we filtered for Infernus
			expect(result).toEqual(new Set(['Infernus']));
		});

		it('should return matching hero names when search query matches', () => {
			const result = getVisibleHeroNames(mockChangelogs[2], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'Infernus'
			});

			// Should return Infernus name since search matches
			expect(result).toEqual(new Set(['Infernus']));
		});

		it('should return all hero names when search matches change title', () => {
			const result = getVisibleHeroNames(mockChangelogs[2], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'Change 1.2' // Matches the title
			});

			// Should return all heroes in the change
			expect(result).toEqual(new Set(['Infernus', 'Seven']));
		});

		it('should return all hero names when search matches general notes', () => {
			const result = getVisibleHeroNames(mockChangelogs[2], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'Map updates' // Matches general notes
			});

			// Should return all heroes in the change
			expect(result).toEqual(new Set(['Infernus', 'Seven']));
		});

		it('should return only matching hero names when search matches specific hero note', () => {
			const result = getVisibleHeroNames(mockChangelogs[2], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'Health increased' // Specific to Infernus
			});

			// Should return only Infernus
			expect(result).toEqual(new Set(['Infernus']));
		});

		it('should handle change without contentJson', () => {
			const changeWithoutJson = {
				...mockChangelogs[0],
				contentJson: null
			};

			const result = getVisibleHeroNames(changeWithoutJson, {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			// Should return empty set when no contentJson
			expect(result?.size).toBe(0);
		});

		it('should return empty set when filtered hero not in change', () => {
			const result = getVisibleHeroNames(mockChangelogs[0], {
				selectedHeroNames: new Set(['Seven']), // Seven not in change 1
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			// Should return empty set
			expect(result?.size).toBe(0);
		});

		it('should be case insensitive for search', () => {
			const result = getVisibleHeroNames(mockChangelogs[0], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'INFERNUS'
			});

			expect(result).toEqual(new Set(['Infernus']));
		});

		it('should handle multiple hero filters', () => {
			const result = getVisibleHeroNames(mockChangelogs[2], {
				selectedHeroNames: new Set(['Infernus', 'Seven']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			// Should return both heroes
			expect(result).toEqual(new Set(['Infernus', 'Seven']));
		});
	});

	describe('Item Filtering', () => {
		describe('filterChangelogs - item filters', () => {
			it('should filter changelogs by item name', () => {
				const result = filterChangelogs(mockChangelogs, {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['Metal Skin']),
					searchQuery: ''
				});

				// Should return changes 1 and 3 (both mention Metal Skin)
				expect(result).toHaveLength(2);
				expect(result[0].id).toBe('change-1');
				expect(result[1].id).toBe('change-3');
			});

			it('should filter changelogs by multiple item names (AND logic)', () => {
				const result = filterChangelogs(mockChangelogs, {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['Metal Skin', 'Headshot Booster']),
					searchQuery: ''
				});

				// Should return empty since no change has BOTH items
				expect(result).toHaveLength(0);
			});

			it('should combine hero and item filters (AND logic)', () => {
				const result = filterChangelogs(mockChangelogs, {
					selectedHeroNames: new Set(['Infernus']),
					selectedItemNames: new Set(['Metal Skin']),
					searchQuery: ''
				});

				// Should return changes that mention BOTH Infernus AND Metal Skin
				expect(result).toHaveLength(2);
				expect(result[0].id).toBe('change-1');
				expect(result[1].id).toBe('change-3');
			});

			it('should return empty when hero+item combination has no matches', () => {
				const result = filterChangelogs(mockChangelogs, {
					selectedHeroNames: new Set(['Seven']),
					selectedItemNames: new Set(['Metal Skin']),
					searchQuery: ''
				});

				// Change 3 has both Seven and Metal Skin
				expect(result).toHaveLength(1);
				expect(result[0].id).toBe('change-3');
			});

			it('should filter by item name via search query', () => {
				const result = filterChangelogs(mockChangelogs, {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(),
					searchQuery: 'Metal Skin'
				});

				// Should return changes mentioning Metal Skin
				expect(result).toHaveLength(2);
				expect(result[0].id).toBe('change-1');
				expect(result[1].id).toBe('change-3');
			});

			it('should filter by item name via search query (case insensitive)', () => {
				const result = filterChangelogs(mockChangelogs, {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(),
					searchQuery: 'HEADSHOT BOOSTER'
				});

				// Should return change 2
				expect(result).toHaveLength(1);
				expect(result[0].id).toBe('change-2');
			});

			it('should combine item filter, hero filter, and search query', () => {
				const result = filterChangelogs(mockChangelogs, {
					selectedHeroNames: new Set(['Infernus']),
					selectedItemNames: new Set(['Metal Skin']),
					searchQuery: 'Health' // Specific note in change 3
				});

				// Should return only change 3 (has Infernus, Metal Skin, AND "Health")
				expect(result).toHaveLength(1);
				expect(result[0].id).toBe('change-3');
			});

			it('should return empty when item filter finds no matches', () => {
				const result = filterChangelogs(mockChangelogs, {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['NonExistentItem']),
					searchQuery: ''
				});

				expect(result).toHaveLength(0);
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

			it('should return matching item names when item filter is active', () => {
				const result = getVisibleItemNames(mockChangelogs[0], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['Metal Skin']),
					searchQuery: ''
				});

				// Change 1 has Metal Skin
				expect(result).toEqual(new Set(['Metal Skin']));
			});

			it('should return matching item names when search query matches item name', () => {
				const result = getVisibleItemNames(mockChangelogs[0], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(),
					searchQuery: 'Metal Skin'
				});

				// Should return Metal Skin name since search matches
				expect(result).toEqual(new Set(['Metal Skin']));
			});

			it('should return all item names when search matches change title', () => {
				const result = getVisibleItemNames(mockChangelogs[2], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(),
					searchQuery: 'Change 1.2' // Matches the title
				});

				// Should return all items in the change
				expect(result).toEqual(new Set(['Metal Skin']));
			});

			it('should return all item names when search matches general notes', () => {
				const result = getVisibleItemNames(mockChangelogs[2], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(),
					searchQuery: 'Map updates' // Matches general notes
				});

				// Should return all items in the change
				expect(result).toEqual(new Set(['Metal Skin']));
			});

			it('should return only matching item names when search matches specific item note', () => {
				const result = getVisibleItemNames(mockChangelogs[0], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(),
					searchQuery: 'Cost reduced' // Specific to Metal Skin in change 1
				});

				// Should return only Metal Skin
				expect(result).toEqual(new Set(['Metal Skin']));
			});

			it('should handle change without contentJson', () => {
				const changeWithoutJson = {
					...mockChangelogs[0],
					contentJson: null
				};

				const result = getVisibleItemNames(changeWithoutJson, {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['Metal Skin']),
					searchQuery: ''
				});

				// Should return empty set when no contentJson
				expect(result?.size).toBe(0);
			});

			it('should return empty set when filtered item not in change', () => {
				const result = getVisibleItemNames(mockChangelogs[1], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['Metal Skin']), // Metal Skin not in change 2
					searchQuery: ''
				});

				// Should return empty set
				expect(result?.size).toBe(0);
			});

			it('should be case insensitive for search', () => {
				const result = getVisibleItemNames(mockChangelogs[0], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(),
					searchQuery: 'METAL SKIN'
				});

				expect(result).toEqual(new Set(['Metal Skin']));
			});

			it('should handle multiple item filters', () => {
				const changeWithMultipleItems = {
					...mockChangelogs[0],
					contentJson: {
						...mockChangelogs[0].contentJson,
						items: {
							'Metal Skin': {
								id: 101,
								notes: [{ text: 'Cost reduced', patterns: [] }]
							},
							'Headshot Booster': {
								id: 102,
								notes: [{ text: 'Damage increased', patterns: [] }]
							}
						}
					} as ChangelogContentJson,
					icons: {
						...mockChangelogs[0].icons,
						items: [
							{
								id: 101,
								src: 'item1.png',
								alt: 'Metal Skin',
								type: 'item' as const
							},
							{
								id: 102,
								src: 'item2.png',
								alt: 'Headshot Booster',
								type: 'item' as const
							}
						]
					}
				};

				const result = getVisibleItemNames(changeWithMultipleItems, {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['Metal Skin', 'Headshot Booster']),
					searchQuery: ''
				});

				// Should return both items
				expect(result).toEqual(new Set(['Metal Skin', 'Headshot Booster']));
			});

			it('should intersect item filter with search results', () => {
				const result = getVisibleItemNames(mockChangelogs[2], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['Metal Skin']),
					searchQuery: 'Armor' // Matches Metal Skin note in change 3
				});

				// Should return Metal Skin since it matches both filter and search
				expect(result).toEqual(new Set(['Metal Skin']));
			});

			it('should return empty when search matches but item filter does not', () => {
				const result = getVisibleItemNames(mockChangelogs[1], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['Metal Skin']), // Filter for Metal Skin (not in change 2)
					searchQuery: 'Headshot' // Matches Headshot Booster in change 2
				});

				// Should return empty since Metal Skin is not in this change
				expect(result?.size).toBe(0);
			});
		});

		describe('Hero visibility when item filtering is active', () => {
			it('should hide heroes when only item filter is active with no heroes selected', () => {
				const result = getVisibleHeroNames(mockChangelogs[0], {
					selectedHeroNames: new Set(),
					selectedItemNames: new Set(['Metal Skin']), // Only item filter active
					searchQuery: ''
				});

				// When item filter is active but no hero selected, should hide all heroes
				expect(result).toEqual(new Set());
			});

			it('should return heroes when both hero and item filters are active', () => {
				const result = getVisibleHeroNames(mockChangelogs[0], {
					selectedHeroNames: new Set(['Infernus']),
					selectedItemNames: new Set(['Metal Skin']),
					searchQuery: ''
				});

				// Should still return filtered heroes
				expect(result).toEqual(new Set(['Infernus']));
			});
		});

		describe('Item visibility when hero filtering is active', () => {
			it('should hide items when only hero filter is active with no items selected', () => {
				const result = getVisibleItemNames(mockChangelogs[0], {
					selectedHeroNames: new Set(['Infernus']), // Only hero filter active
					selectedItemNames: new Set(),
					searchQuery: ''
				});

				// When hero filter is active but no item selected, should hide all items
				expect(result).toEqual(new Set());
			});

			it('should return items when both hero and item filters are active', () => {
				const result = getVisibleItemNames(mockChangelogs[0], {
					selectedHeroNames: new Set(['Infernus']),
					selectedItemNames: new Set(['Metal Skin']),
					searchQuery: ''
				});

				// Should still return filtered items
				expect(result).toEqual(new Set(['Metal Skin']));
			});
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

		it('should return true when search query matches general notes', () => {
			const result = shouldShowGeneralNotes(mockChangelogs[0], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'bug fix'
			});

			expect(result).toBe(true);
		});

		it('should return false when search query does not match general notes', () => {
			const result = shouldShowGeneralNotes(mockChangelogs[0], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'nonexistent text'
			});

			expect(result).toBe(false);
		});

		it('should return true when hero is mentioned only in general notes', () => {
			// Create a change where a hero is mentioned in notes but not in hero sections
			const changeWithHeroInNotes = {
				...mockChangelogs[0],
				contentJson: {
					notes: [{ text: 'Fixed bug affecting Infernus', patterns: [] }],
					heroes: {},
					items: {},
					abilities: {}
				} as ChangelogContentJson,
				icons: {
					heroes: [],
					items: []
				}
			};

			const result = shouldShowGeneralNotes(changeWithHeroInNotes, {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			// Should return true because Infernus is mentioned in general notes
			expect(result).toBe(true);
		});

		it('should return false when hero has a dedicated section', () => {
			const result = shouldShowGeneralNotes(mockChangelogs[0], {
				selectedHeroNames: new Set(['Infernus']), // Infernus has a section in change 1
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toBe(false);
		});

		it('should handle search query with mixed case', () => {
			const result = shouldShowGeneralNotes(mockChangelogs[0], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'BUG FIX'
			});

			expect(result).toBe(true);
		});
	});

	describe('getFilteredGeneralNotes', () => {
		it('should return null when no filters are applied', () => {
			const result = getFilteredGeneralNotes(mockChangelogs[0], {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toBeNull();
		});

		it('should filter notes that mention selected hero', () => {
			const changeWithMixedNotes = {
				...mockChangelogs[0],
				contentJson: {
					notes: [
						{ text: 'General bug fixes', patterns: [] },
						{ text: 'Infernus balance adjustment', patterns: [] },
						{ text: 'Map improvements', patterns: [] }
					],
					heroes: {},
					items: {},
					abilities: {}
				} as ChangelogContentJson
			};

			const result = getFilteredGeneralNotes(changeWithMixedNotes, {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toHaveLength(1);
			expect(result?.[0].text).toBe('Infernus balance adjustment');
		});

		it('should filter notes that mention selected item', () => {
			const changeWithMixedNotes = {
				...mockChangelogs[0],
				contentJson: {
					notes: [
						{ text: 'General bug fixes', patterns: [] },
						{ text: 'Metal Skin cost reduced', patterns: [] },
						{ text: 'Map improvements', patterns: [] }
					],
					heroes: {},
					items: {},
					abilities: {}
				} as ChangelogContentJson
			};

			const result = getFilteredGeneralNotes(changeWithMixedNotes, {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(['Metal Skin']),
				searchQuery: ''
			});

			expect(result).toHaveLength(1);
			expect(result?.[0].text).toBe('Metal Skin cost reduced');
		});

		it('should filter notes by search query', () => {
			const changeWithMixedNotes = {
				...mockChangelogs[0],
				contentJson: {
					notes: [
						{ text: 'General bug fixes', patterns: [] },
						{ text: 'Performance improvements', patterns: [] },
						{ text: 'Map improvements', patterns: [] }
					],
					heroes: {},
					items: {},
					abilities: {}
				} as ChangelogContentJson
			};

			const result = getFilteredGeneralNotes(changeWithMixedNotes, {
				selectedHeroNames: new Set(),
				selectedItemNames: new Set(),
				searchQuery: 'performance'
			});

			expect(result).toHaveLength(1);
			expect(result?.[0].text).toBe('Performance improvements');
		});

		it('should return empty array when no notes match filters', () => {
			const changeWithMixedNotes = {
				...mockChangelogs[0],
				contentJson: {
					notes: [
						{ text: 'General bug fixes', patterns: [] },
						{ text: 'Map improvements', patterns: [] }
					],
					heroes: {},
					items: {},
					abilities: {}
				} as ChangelogContentJson
			};

			const result = getFilteredGeneralNotes(changeWithMixedNotes, {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toEqual([]);
		});

		it('should be case insensitive when filtering', () => {
			const changeWithMixedNotes = {
				...mockChangelogs[0],
				contentJson: {
					notes: [
						{ text: 'INFERNUS was buffed', patterns: [] },
						{ text: 'Map improvements', patterns: [] }
					],
					heroes: {},
					items: {},
					abilities: {}
				} as ChangelogContentJson
			};

			const result = getFilteredGeneralNotes(changeWithMixedNotes, {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toHaveLength(1);
			expect(result?.[0].text).toBe('INFERNUS was buffed');
		});

		it('should filter notes matching multiple heroes', () => {
			const changeWithMixedNotes = {
				...mockChangelogs[0],
				contentJson: {
					notes: [
						{ text: 'Infernus buff applied', patterns: [] },
						{ text: 'Seven nerf applied', patterns: [] },
						{ text: 'General changes', patterns: [] }
					],
					heroes: {},
					items: {},
					abilities: {}
				} as ChangelogContentJson
			};

			const result = getFilteredGeneralNotes(changeWithMixedNotes, {
				selectedHeroNames: new Set(['Infernus', 'Seven']),
				selectedItemNames: new Set(),
				searchQuery: ''
			});

			expect(result).toHaveLength(2);
		});

		it('should combine hero and item filters', () => {
			const changeWithMixedNotes = {
				...mockChangelogs[0],
				contentJson: {
					notes: [
						{ text: 'Infernus buff applied', patterns: [] },
						{ text: 'Metal Skin cost reduced', patterns: [] },
						{ text: 'General changes', patterns: [] }
					],
					heroes: {},
					items: {},
					abilities: {}
				} as ChangelogContentJson
			};

			const result = getFilteredGeneralNotes(changeWithMixedNotes, {
				selectedHeroNames: new Set(['Infernus']),
				selectedItemNames: new Set(['Metal Skin']),
				searchQuery: ''
			});

			expect(result).toHaveLength(2);
		});
	});
});
