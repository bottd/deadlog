import { describe, expect, it } from 'vitest';
import { entityNameAliases, extractEntities, extractEntityChanges } from './extract';

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
			{ name: 'Doorman', type: 'hero', count: 3 },
			{ name: 'Tesla Bullets', type: 'item', count: 1 }
		]);
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
			{ name: 'The Doorman', type: 'hero', count: 2 },
			{ name: 'Mo & Krill', type: 'hero', count: 1 }
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
			{ name: 'Abrams', type: 'hero', count: 1 }
		]);
	});

	it('keeps an explicit zero instead of inventing a change', () => {
		expect(extractEntityChanges('<EntityHeading name="Abrams" type="hero" />')).toEqual([
			{ name: 'Abrams', type: 'hero', count: 0 }
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
});
