import { describe, expect, it } from 'vitest';
import {
	entityNameAliases,
	entityNamesMatch,
	extractEntities,
	extractEntityChanges
} from './extract';

describe('extractEntityChanges', () => {
	it('collects every bullet in an entity section across ability headings', () => {
		const content = [
			'# Hero Changes',
			'=hero:doorman:',
			'[[!:https://cdn.example/doorman.webp]]',
			'## Doorman',
			'- Base damage increased',
			'==ability:call-bell:',
			'### Call Bell',
			'- Cooldown reduced',
			'- Radius increased',
			'==',
			'=',
			'=item:tesla-bullets:',
			'## Tesla Bullets',
			'- Proc chance increased',
			'='
		].join('\n');

		expect(extractEntityChanges(content)).toEqual([
			{
				name: 'Doorman',
				type: 'hero',
				bullets: [
					'Base damage increased',
					'Call Bell: Cooldown reduced',
					'Call Bell: Radius increased'
				]
			},
			{
				name: 'Tesla Bullets',
				type: 'item',
				bullets: ['Proc chance increased']
			}
		]);
	});

	it('merges repeated article aliases and decodes entity names', () => {
		const content = `
=hero:doorman:
## The Doorman
- First change
=
=hero:doorman:
## Doorman
- Second change
=
=hero:mo-krill:
## Mo &amp; Krill
- Third change
=
`;

		expect(extractEntityChanges(content)).toEqual([
			{
				name: 'The Doorman',
				type: 'hero',
				bullets: ['First change', 'Second change']
			},
			{ name: 'Mo & Krill', type: 'hero', bullets: ['Third change'] }
		]);
	});

	it('stops attributing bullets at a new top-level section', () => {
		const content = `
=hero:abrams:
## Abrams
- Counted
- Also counted
=
# Item Changes
- Not counted, a new top-level section
`;

		expect(extractEntityChanges(content)).toEqual([
			{ name: 'Abrams', type: 'hero', bullets: ['Counted', 'Also counted'] }
		]);
	});

	it('keeps an explicit empty list instead of inventing a change', () => {
		expect(extractEntityChanges('=hero:abrams:\n## Abrams\n=')).toEqual([
			{ name: 'Abrams', type: 'hero', bullets: [] }
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
