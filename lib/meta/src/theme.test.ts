import { describe, expect, it } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

import { CONTENT, HERO_TONE, ITEM_TONE, PLATE, Theme, alpha } from './theme';

const APP_CSS = readFileSync(
	resolve(import.meta.dirname, '../../../app/src/app.css'),
	'utf8'
);

function customProperties(css: string): Map<string, string> {
	const root = css.slice(
		css.indexOf(':root {'),
		css.indexOf('\n}', css.indexOf(':root {'))
	);
	const properties = new Map<string, string>();
	for (const [, name, value] of root.matchAll(/(--[\w-]+):\s*([^;]+);/g)) {
		properties.set(name, value.trim());
	}
	return properties;
}

const css = customProperties(APP_CSS);

const MIRRORED: [string, string][] = [
	[Theme.colors.ink, '--base-950'],
	[Theme.colors.inkRaised, '--base-900'],
	[Theme.colors.inkPlate, '--base-25'],
	[Theme.colors.amber, '--accent-500'],
	[Theme.colors.amberField, '--accent-100'],
	[Theme.colors.sea, '--sea-500'],
	[Theme.colors.seaDeep, '--sea-700'],
	[Theme.colors.parchment, '--base-10'],
	[Theme.colors.stone, '--base-500'],
	[Theme.colors.rule, '--border-default'],
	[Theme.colors.ruleSubtle, '--border-light'],
	[HERO_TONE.marksman, '--type-marksman'],
	[HERO_TONE.mystic, '--type-mystic'],
	[HERO_TONE.brawler, '--type-brawler'],
	[HERO_TONE.assassin, '--type-assassin'],
	[ITEM_TONE.weapon, '--item-weapon'],
	[ITEM_TONE.vitality, '--item-vitality'],
	[ITEM_TONE.spirit, '--item-spirit']
];

describe('theme mirrors app.css', () => {
	it('reads the palette it is checking against', () => {
		expect(css.size).toBeGreaterThan(20);
		expect(css.get('--base-950')).toBe('#292522');
	});

	it.each(MIRRORED)('%s matches %s', (value, property) => {
		expect(css.get(property)).toBe(value);
	});

	it('ships no cool gray, no #000 and no #fff — the Warm Ink Rule', () => {
		for (const value of Object.values(Theme.colors)) {
			expect(value).not.toMatch(/^#(000|fff)(000|fff)?$/i);
			const [, red, , blue] = value.match(/^#(\w\w)(\w\w)(\w\w)$/) ?? [];
			if (value !== Theme.colors.sea && value !== Theme.colors.seaDeep) {
				expect(Number.parseInt(red, 16)).toBeGreaterThanOrEqual(
					Number.parseInt(blue, 16)
				);
			}
		}
	});
});

describe('plate geometry', () => {
	it('derives the content width from the plate, its hairline and its padding', () => {
		expect(PLATE.width).toBe(Theme.size.width - Theme.size.inset * 2);
		expect(CONTENT).toBe(PLATE.width - Theme.size.border * 2 - Theme.size.padding * 2);
	});
});

describe('alpha', () => {
	it('re-spells a token as rgba rather than a hand-copied triplet', () => {
		expect(alpha(Theme.colors.inkRaised, 0.6)).toBe('rgba(52, 48, 44, 0.6)');
	});
});
