import { describe, expect, it } from 'vitest';
import { extractEntities, extractEntityChanges } from './extract';

describe('extractEntityChanges', () => {
	it('groups bullets per ability section within an entity', () => {
		const content = [
			'# Hero Changes',
			'=hero:doorman:',
			'[[/hero/doorman]](([[!:https://cdn.example/doorman.webp]] Doorman patch history))',
			'## [[/hero/doorman]]((Doorman))',
			'- Base damage increased',
			'==ability:call-bell:',
			'### [[/hero/doorman?ability=call-bell]]((Call Bell))',
			'- Cooldown reduced',
			'- Radius increased',
			'==',
			'=',
			'=item:tesla-bullets:',
			'## [[/item/tesla-bullets]]((Tesla Bullets))',
			'- Proc chance increased',
			'='
		].join('\n');

		expect(extractEntityChanges(content)).toEqual([
			{
				name: 'Doorman',
				type: 'hero',
				groups: [
					{ ability: null, bullets: ['Base damage increased'] },
					{ ability: 'Call Bell', bullets: ['Cooldown reduced', 'Radius increased'] }
				]
			},
			{
				name: 'Tesla Bullets',
				type: 'item',
				groups: [{ ability: null, bullets: ['Proc chance increased'] }]
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
				// Both alias sections' bullets sit at hero level, so they share one group.
				groups: [{ ability: null, bullets: ['First change', 'Second change'] }]
			},
			{
				name: 'Mo & Krill',
				type: 'hero',
				groups: [{ ability: null, bullets: ['Third change'] }]
			}
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
			{
				name: 'Abrams',
				type: 'hero',
				groups: [{ ability: null, bullets: ['Counted', 'Also counted'] }]
			}
		]);
	});

	it('keeps an explicit empty list instead of inventing a change', () => {
		expect(extractEntityChanges('=hero:abrams:\n## Abrams\n=')).toEqual([
			{ name: 'Abrams', type: 'hero', groups: [] }
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
});
