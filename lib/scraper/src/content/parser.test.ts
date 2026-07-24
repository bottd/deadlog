import { describe, expect, it } from 'vitest';
import { deduplicateLines, parseAndGroupContent, type EntityLists } from './parser';

const entities: EntityLists = {
	heroes: new Set(['abrams']),
	items: new Set(['tesla bullets'])
};

describe('parseAndGroupContent', () => {
	it('accepts the bullet markers Valve actually posts with', () => {
		for (const marker of ['-', '*', '•']) {
			const grouped = parseAndGroupContent(
				`${marker} Weapon Investment bonus increased from 7% to 9%`,
				entities
			);
			expect(grouped.general).toEqual([
				'Weapon Investment bonus increased from 7% to 9%'
			]);
		}
	});

	it('routes entity-prefixed bullets regardless of marker', () => {
		const grouped = parseAndGroupContent(
			['* Abrams: Base health increased', '* Tesla Bullets: Proc chance increased'].join(
				'\n'
			),
			entities
		);
		expect(grouped.heroes.get('Abrams')).toEqual(['Base health increased']);
		expect(grouped.items.get('Tesla Bullets')).toEqual(['Proc chance increased']);
	});

	it('keeps prose from announcement posts that have no bullets', () => {
		const grouped = parseAndGroupContent(
			'This update reverts the communication changes from yesterday.',
			entities
		);
		expect(grouped.general).toEqual([
			'This update reverts the communication changes from yesterday.'
		]);
	});

	it('never lets surrounding prose outrank real bullets', () => {
		const grouped = parseAndGroupContent(
			['[ General ]', '* Mid Boss base HP increased from 12500 to 13000'].join('\n'),
			entities
		);
		expect(grouped.general).toEqual(['Mid Boss base HP increased from 12500 to 13000']);
	});

	it('does not treat a bare marker as a bullet', () => {
		expect(parseAndGroupContent('*', entities).general).toEqual(['*']);
	});
});

describe('deduplicateLines', () => {
	it('deduplicates repeated "-" bullets', () => {
		const text = ['- Same change', '- Same change', '- Other change'].join('\n');
		expect(deduplicateLines(text)).toBe(['- Same change', '- Other change'].join('\n'));
	});

	it('keeps repeated "*" bullets — the same stat legitimately recurs per entity', () => {
		const text = ['* 20% Reload Time', '* 20% Reload Time'].join('\n');
		expect(deduplicateLines(text)).toBe(text);
	});
});
