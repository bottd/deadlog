import { describe, expect, it } from 'vitest';

import { countLabel, displayName, fitDisplay, isRenderableSlug } from './text';
import { Theme } from './theme';

describe('displayName', () => {
	it('leaves a real display name alone', () => {
		expect(displayName("Enchanter's Emblem")).toBe("Enchanter's Emblem");
		expect(displayName('Mo & Krill')).toBe('Mo & Krill');
	});

	it('decodes the entities the scraper leaves behind', () => {
		expect(displayName('Mo &amp; Krill')).toBe('Mo & Krill');
	});

	it('repairs a leaked asset key rather than publishing it at 96px', () => {
		expect(displayName('ability_death_tax')).toBe('Death Tax');
		expect(displayName('citadel_weapon_astro_hand_cannon')).toBe(
			'Weapon Astro Hand Cannon'
		);
		expect(displayName('upgrade_weapon_power_and_health_drain')).toBe(
			'Weapon Power And Health Drain'
		);
	});

	it('keeps a single-word key that is already a name', () => {
		expect(displayName('curse')).toBe('curse');
	});
});

describe('fitDisplay', () => {
	const steps = Theme.font.display;

	it('keeps the largest step for a name that fits', () => {
		expect(fitDisplay('Abrams', 728, steps)).toBe(96);
	});

	it('steps down rather than letting a long name leave the canvas', () => {
		expect(fitDisplay('Weapon Power And Health Drain', 728, steps)).toBeLessThan(96);
		expect(fitDisplay('Abrams', 728, steps)).toBeGreaterThan(
			fitDisplay('Weapon Power And Health Drain', 728, steps)
		);
	});

	it('picks a smaller step as the column narrows', () => {
		const name = 'Spirit Shredder Bullets';
		expect(fitDisplay(name, 400, steps)).toBeLessThan(fitDisplay(name, 1040, steps));
	});

	it('measures the mono face separately from the display face', () => {
		const row = 'WEAPON · TIER 2 · 3 CHANGES';
		expect(fitDisplay(row, 600, steps, 1, 'mono')).toBeLessThanOrEqual(
			fitDisplay(row, 600, steps, 1)
		);
	});

	it('bottoms out at the smallest step instead of returning undefined', () => {
		expect(fitDisplay('x'.repeat(400), 728, steps)).toBe(steps[steps.length - 1]);
	});

	it('gives a two-line heading twice the room', () => {
		const title = 'Some Are Merciful, The Venator Is Not';
		expect(fitDisplay(title, 1040, steps, 2)).toBeGreaterThanOrEqual(
			fitDisplay(title, 1040, steps, 1)
		);
	});
});

describe('isRenderableSlug', () => {
	it('accepts the slugs the routes actually request', () => {
		expect(isRenderableSlug('enchanters-emblem')).toBe(true);
		expect(isRenderableSlug('mo-krill')).toBe(true);
		expect(isRenderableSlug('171245')).toBe(true);
	});

	it('rejects what earlier slug schemes wrote into the tree', () => {
		expect(isRenderableSlug('')).toBe(false);
		expect(isRenderableSlug('51:20')).toBe(false);
		expect(isRenderableSlug('jeté')).toBe(false);
		expect(isRenderableSlug('back-off!')).toBe(false);
		expect(isRenderableSlug('weapon_alternative_rmb+lmb_activate')).toBe(false);
		expect(isRenderableSlug("enchanter's-emblem")).toBe(false);
	});
});

describe('countLabel', () => {
	it('keeps the plural uppercase, which `plural`s derived default does not', () => {
		expect(countLabel(152, 'CHANGE')).toBe('152 CHANGES');
		expect(countLabel(2, 'ITEM')).toBe('2 ITEMS');
	});

	it('uses the singular for exactly one', () => {
		expect(countLabel(1, 'CHANGE')).toBe('1 CHANGE');
		expect(countLabel(1, 'PATCH', 'PATCHES')).toBe('1 PATCH');
	});

	it('takes an irregular plural when the suffix rule does not apply', () => {
		expect(countLabel(33, 'PATCH', 'PATCHES')).toBe('33 PATCHES');
		expect(countLabel(0, 'CHANGE')).toBe('0 CHANGES');
	});
});
