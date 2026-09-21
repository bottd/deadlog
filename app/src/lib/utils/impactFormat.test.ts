import { describe, expect, it } from 'vitest';
import type { EntityImpact, ImpactWindow } from '@deadlog/utils';
import { formatMatches, formatRate, impactLines, tierLine } from './impactFormat';

const window = (
	win: number | null,
	overrides: Partial<ImpactWindow> = {}
): ImpactWindow => ({
	win,
	pick: win === null ? null : 0.062,
	matches: win === null ? 310 : 41_234,
	days: 14,
	...overrides
});

describe('formatRate', () => {
	it('shows one decimal place', () => {
		expect(formatRate(0.4812)).toBe('48.1');
		expect(formatRate(0.5)).toBe('50.0');
		expect(formatRate(0.09996)).toBe('10.0');
	});

	it('shows a dash for a suppressed window', () => {
		expect(formatRate(null)).toBe('—');
	});
});

describe('formatMatches', () => {
	it('abbreviates by magnitude', () => {
		expect(formatMatches(926)).toBe('926');
		expect(formatMatches(3210)).toBe('3.2k');
		expect(formatMatches(41_234)).toBe('41k');
		expect(formatMatches(759_480)).toBe('759k');
		expect(formatMatches(13_780_958)).toBe('13.8M');
	});
});

describe('tierLine', () => {
	it('formats a closed window with both sides', () => {
		const line = tierLine(
			'all',
			{ before: window(0.4812), after: window(0.5131, { pick: 0.089 }) },
			true
		);

		expect(line?.text).toBe('WIN 48.1 → 51.3 · PICK 6.2 → 8.9 · 41k matches');
		expect(line?.label).toBe(
			'All ranks. Win rate 48.1 percent before, 51.3 percent after. Pick rate 6.2 percent before, 8.9 percent after. 41,234 matches after the patch.'
		);
	});

	it('notes an open after-window with its day count', () => {
		const openFor = (days: number) =>
			tierLine('all', { before: window(0.5), after: window(0.52, { days }) }, false);

		expect(openFor(3)?.text).toContain('41k matches · after: 3 days so far');
		expect(openFor(1)?.text).toContain('after: 1 day so far');
		expect(openFor(3)?.label).toContain('matches after the patch so far.');
	});

	it('shows a dash and a note when one side is suppressed', () => {
		const line = tierLine(
			'high',
			{ before: window(0.453), after: window(null, { days: 2, matches: 926 }) },
			false
		);

		expect(line?.text).toBe(
			'HIGH RANK\u00a0 WIN 45.3 → — · PICK 6.2 → — · not enough matches after'
		);
		expect(line?.label).toContain(
			'Win rate 45.3 percent before, not enough matches after.'
		);
		expect(line?.label.startsWith('High rank.')).toBe(true);
	});

	it('keeps the sample size when only the before side is suppressed', () => {
		const line = tierLine('all', { before: window(null), after: window(0.52) }, true);

		expect(line?.text).toBe(
			'WIN — → 52.0 · PICK — → 6.2 · 41k matches · not enough matches before'
		);
	});

	it('returns nothing when both sides are suppressed', () => {
		expect(
			tierLine('high', { before: window(null), after: window(null) }, true)
		).toBeNull();
	});
});

describe('impactLines', () => {
	const both = { before: window(0.5), after: window(0.52) };
	const neither = { before: window(null), after: window(null) };

	it('returns all ranks then high rank', () => {
		const impact: EntityImpact = { closed: true, all: both, high: both };

		expect(impactLines(impact).map((line) => line.tier)).toEqual(['all', 'high']);
	});

	it('omits a tier with no reportable side', () => {
		expect(
			impactLines({ closed: true, all: both, high: neither }).map((line) => line.tier)
		).toEqual(['all']);
		expect(impactLines({ closed: true, all: neither, high: neither })).toEqual([]);
	});

	it('takes the open note from the entity, not from a window', () => {
		const [line] = impactLines({ closed: false, all: both, high: neither });

		expect(line.text).toContain('so far');
	});
});
