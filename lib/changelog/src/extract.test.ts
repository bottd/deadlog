import { describe, expect, it } from 'vitest';
import {
	entityNameAliases,
	entityNamesMatch,
	extractEntities,
	extractEntityChanges
} from './extract';

describe('extractEntityChanges', () => {
	it('counts every bullet in an entity section across ability headings', () => {
		const content = [
			'# Hero Changes',
			'##hero:doorman: [[!:https://cdn.example/doorman.webp]] Doorman',
			'- Base damage increased',
			'###ability: Call Bell',
			'- Cooldown reduced',
			'- Radius increased',
			'##item:tesla-bullets: Tesla Bullets',
			'- Proc chance increased'
		].join('\n');

		expect(extractEntityChanges(content)).toEqual([
			{
				name: 'Doorman',
				type: 'hero',
				count: 3,
				summary:
					'Base damage increased · Call Bell: Cooldown reduced · Call Bell: Radius increased'
			},
			{
				name: 'Tesla Bullets',
				type: 'item',
				count: 1,
				summary: 'Proc chance increased'
			}
		]);
	});

	it('clamps a long summary at a word boundary', () => {
		const bullet = 'Cooldown reduced from 40s to 32s and radius increased by 15%';
		const content = `
##hero:abrams: Abrams
- ${bullet}
- ${bullet}
- ${bullet}
`;

		const [change] = extractEntityChanges(content);
		expect(change.count).toBe(3);
		expect(change.summary.length).toBeLessThanOrEqual(161);
		expect(change.summary.endsWith('…')).toBe(true);
		expect(change.summary.startsWith(bullet)).toBe(true);
	});

	it('merges repeated article aliases and decodes entity names', () => {
		const content = `
##hero:doorman: The Doorman
- First change
##hero:doorman: Doorman
- Second change
##hero:mo-krill: Mo &amp; Krill
- Third change
`;

		expect(extractEntityChanges(content)).toEqual([
			{
				name: 'The Doorman',
				type: 'hero',
				count: 2,
				summary: 'First change · Second change'
			},
			{ name: 'Mo & Krill', type: 'hero', count: 1, summary: 'Third change' }
		]);
	});

	it('stops attributing bullets at a new top-level section', () => {
		const content = `
##hero:abrams: Abrams
- Counted
- Also counted
# Item Changes
- Not counted, a new top-level section
`;

		expect(extractEntityChanges(content)).toEqual([
			{ name: 'Abrams', type: 'hero', count: 2, summary: 'Counted · Also counted' }
		]);
	});

	it('keeps an explicit zero instead of inventing a change', () => {
		expect(extractEntityChanges('##hero:abrams: Abrams')).toEqual([
			{ name: 'Abrams', type: 'hero', count: 0, summary: '' }
		]);
	});
});

describe('entity identity extraction', () => {
	it('reads entities off the toc by their heading attribute', () => {
		const entities = extractEntities([
			{ level: 1, title: 'Hero Changes', attrs: [] },
			{ level: 2, title: 'Doorman', attrs: ['hero', 'doorman'] },
			{ level: 3, title: 'Call Bell', attrs: ['ability'] },
			{ level: 2, title: 'Tesla Bullets', attrs: ['item', 'tesla-bullets'] }
		]);
		expect(entities).toEqual({ heroes: ['Doorman'], items: ['Tesla Bullets'] });
	});

	it('exposes canonical article aliases', () => {
		expect(entityNameAliases(' The Doorman ')).toEqual(['the doorman', 'doorman']);
		expect(entityNameAliases('Doorman')).toEqual(['doorman']);
	});

	it('matches names with optional articles', () => {
		expect(entityNamesMatch('The Doorman', 'Doorman')).toBe(true);
	});
});
