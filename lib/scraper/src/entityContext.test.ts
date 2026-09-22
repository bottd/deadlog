import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
	contextProperties,
	contextProperty,
	contextSections,
	descriptionText,
	markupParagraphs,
	type SourceDescription,
	type SourceProperty
} from './entityContext';

interface FixtureItem {
	name: string;
	description: SourceDescription;
	properties: Record<string, SourceProperty>;
}

const fixture = JSON.parse(
	readFileSync(new URL('./fixtures/enrichment/assets-6698.json', import.meta.url), 'utf8')
) as { items: FixtureItem[] };

const byName = (name: string) => {
	const item = fixture.items.find((entry) => entry.name === name);
	if (!item) throw new Error(`${name} is not in the fixture`);
	return item;
};

describe('markupParagraphs', () => {
	it('drops inline svg icons and keeps the words that follow them', () => {
		expect(markupParagraphs(byName('Afterburn').description.desc)).toEqual([
			'Weapon hits build up a burning effect, dealing spirit damage over time.',
			'Abilities refresh to the base burn duration and weapon hits extend it.'
		]);
	});

	it('survives tags that are never closed', () => {
		expect(markupParagraphs(byName('Paradoxical Swap').description.desc)).toEqual([
			'Fire a projectile that swaps your position with the target enemy hero.'
		]);
		expect(
			markupParagraphs(
				'<span class="highlight">+50 Damage and <span class="highlight">+5m Range'
			)
		).toEqual(['+50 Damage and +5m Range']);
	});

	it('drops game panel and image tags without leaving their attributes behind', () => {
		const [first, second] = markupParagraphs(byName('Rabbit Hex').description.desc);

		expect(first).toBe(
			'Hex a target, transforming them into a Rabbit for a limited duration.'
		);
		expect(second).toContain('Rabbits are small and move faster, but take increased');
		expect(second).not.toMatch(/[<>]|AbilityPropertyIcon/);
	});

	it('decodes entities', () => {
		expect(markupParagraphs(byName('Riposte').description.t3_desc)).toEqual([
			'Gain 75% Bullet, Spirit & Melee Lifesteal against the Riposte target for 13s'
		]);
		expect(markupParagraphs('a&nbsp;&#38;&#x26; b')).toEqual(['a && b']);
	});

	it('omits text that still holds an unresolved token or entity', () => {
		expect(markupParagraphs('Deals {s:Damage} damage')).toEqual([]);
		expect(markupParagraphs('First.<br>#Citadel_Ability_Desc')).toEqual([]);
		expect(markupParagraphs('Fish &unknownthing; chips')).toEqual([]);
	});

	it('returns nothing for empty input', () => {
		expect(markupParagraphs(null)).toEqual([]);
		expect(markupParagraphs('<br> <span></span>')).toEqual([]);
	});

	it('leaves no markup in any fixture description', () => {
		for (const item of fixture.items) {
			for (const markup of Object.values(item.description)) {
				for (const paragraph of markupParagraphs(markup)) {
					expect(paragraph, item.name).not.toMatch(/[<>{}]|&[a-z]+;|\s{2}/);
				}
			}
		}
	});
});

describe('descriptionText', () => {
	it('joins paragraphs into one line', () => {
		expect(descriptionText('Stun.<br><br><span>Cooldown reduced</span>.')).toBe(
			'Stun. Cooldown reduced.'
		);
		expect(descriptionText('<br>')).toBeNull();
	});
});

describe('contextSections', () => {
	it('labels tier sections and leaves the main description unlabelled', () => {
		const sections = contextSections(byName('Afterburn').description);

		expect(sections.map((section) => [section.kind, section.label])).toEqual([
			['description', null],
			['tier2', 'Tier 2'],
			['tier3', 'Tier 3']
		]);
		expect(sections[2].paragraphs).toEqual(['+3.0s Max Burn Duration']);
	});

	it('ignores fields it has no label for', () => {
		const kinds = contextSections(byName('Afterburn').description).map((s) => s.kind);
		expect(byName('Afterburn').description.quip).toBeTruthy();
		expect(kinds).not.toContain('quip');
	});

	it('drops a section that repeats an earlier one', () => {
		const sections = contextSections({ desc: 'Same <b>text</b>.', active: 'Same text.' });
		expect(sections).toHaveLength(1);
	});

	it('returns nothing for a stat item without prose', () => {
		expect(contextSections(byName('Extended Magazine').description)).toEqual([]);
		expect(contextSections(null)).toEqual([]);
	});
});

describe('contextProperty', () => {
	it('resolves the sign token from the value', () => {
		expect(
			contextProperty(
				'BonusClipSizePercent',
				byName('Extended Magazine').properties.BonusClipSizePercent
			)
		).toEqual({
			key: 'BonusClipSizePercent',
			label: 'Max Ammo',
			display: '+30',
			unit: '%',
			scales: false
		});
		expect(
			contextProperty('X', {
				value: '-35',
				prefix: '{s:sign}',
				postfix: '%',
				label: 'Healing'
			})?.display
		).toBe('-35');
	});

	it('takes the unit from the value when the value carries one', () => {
		expect(
			contextProperty('Range', { value: '20m', postfix: 'm', label: 'Cast Range' })
		).toMatchObject({ display: '20', unit: 'm' });
		expect(
			contextProperty('Speed', { value: '6m', postfix: 'm/s', label: 'Speed' })
		).toMatchObject({ display: '6', unit: 'm/s' });
		expect(
			contextProperty('Odd', { value: '6s', postfix: '%', label: 'Odd' })
		).toMatchObject({ display: '6', unit: 's' });
	});

	it('accepts numbers, numeric strings and a leading dot', () => {
		expect(
			contextProperty('A', { value: 25.0, postfix: 's', label: 'Cooldown' })?.display
		).toBe('25');
		expect(contextProperty('B', { value: '.75', label: 'Scale' })?.display).toBe('0.75');
		expect(
			contextProperty('C', { value: '1.90', postfix: ' %/sec', label: 'Bleed' })
		).toMatchObject({
			display: '1.9',
			unit: '%/sec'
		});
	});

	it('omits what it cannot state plainly', () => {
		expect(contextProperty('A', { value: '0', label: 'Duration' })).toBeNull();
		expect(contextProperty('B', { value: '12', label: '' })).toBeNull();
		expect(contextProperty('C', { value: '12' })).toBeNull();
		expect(contextProperty('D', { value: 'fast', label: 'Speed' })).toBeNull();
		expect(contextProperty('E', { value: '12 to 20', label: 'Damage' })).toBeNull();
		expect(
			contextProperty('F', { value: '12', label: 'Damage', prefix: '{s:other}' })
		).toBeNull();
		expect(
			contextProperty('G', { value: '12', label: 'Damage', postfix: '{s:unit}' })
		).toBeNull();
		expect(contextProperty('H', { value: null, label: 'Damage' })).toBeNull();
	});

	it('carries the scaling flag', () => {
		expect(
			contextProperty('A', { value: '4', label: 'Duration', scales: true })?.scales
		).toBe(true);
	});
});

describe('contextProperties', () => {
	it('keeps only formattable fixture properties, none with markup or tokens', () => {
		for (const item of fixture.items) {
			for (const property of contextProperties(item.properties)) {
				expect(
					`${property.label}${property.display}${property.unit}`,
					item.name
				).not.toMatch(/[<>{}]/);
				expect(Number(property.display)).not.toBe(0);
			}
		}
		expect(contextProperties(null)).toEqual([]);
	});
});
