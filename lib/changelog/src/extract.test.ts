import { describe, expect, it } from 'vitest';
import {
	entityNameAliases,
	entityNamesMatch,
	extractEntities,
	extractEntityChanges
} from './extract';

describe('extractEntityChanges', () => {
	it('counts every bullet in an entity section across ability headings', () => {
		const content = `
* Hero Changes
@embed svelte
<EntityHeading name="Doorman" type="hero" />
@end
- Base damage increased
@embed svelte
<AbilityHeading name="Call Bell" />
@end
- Cooldown reduced
- Radius increased
@embed svelte
<EntityHeading name="Tesla Bullets" type="item" />
@end
- Proc chance increased
`;

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
<EntityHeading name="Abrams" type="hero" />
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
<EntityHeading name="The Doorman" type="hero" />
- First change
<EntityHeading type="hero" name="Doorman" />
- Second change
<EntityHeading name="Mo &amp; Krill" type="hero" />
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

	it('does not attribute bullets after a malformed heading or a new top-level section', () => {
		const content = `
<EntityHeading name="Abrams" type="hero" />
- Counted
<EntityHeading name="Missing Type" />
- Not counted for Abrams
* Item Changes
- Also not counted
`;

		expect(extractEntityChanges(content)).toEqual([
			{ name: 'Abrams', type: 'hero', count: 1, summary: 'Counted' }
		]);
	});

	it('keeps an explicit zero instead of inventing a change', () => {
		expect(extractEntityChanges('<EntityHeading name="Abrams" type="hero" />')).toEqual([
			{ name: 'Abrams', type: 'hero', count: 0, summary: '' }
		]);
	});
});

describe('entity identity extraction', () => {
	it('accepts either component attribute order', () => {
		const entities = extractEntities([], '<EntityHeading type="hero" name="Doorman" />');
		expect(entities).toEqual({ heroes: ['Doorman'], items: [] });
	});

	it('exposes canonical article aliases', () => {
		expect(entityNameAliases(' The Doorman ')).toEqual(['the doorman', 'doorman']);
		expect(entityNameAliases('Doorman')).toEqual(['doorman']);
	});

	it('matches names with optional articles', () => {
		expect(entityNamesMatch('The Doorman', 'Doorman')).toBe(true);
	});
});
