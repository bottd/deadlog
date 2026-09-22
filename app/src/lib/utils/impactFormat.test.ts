import { describe, expect, it } from 'vitest';
import type { EntityImpact, ImpactWindow } from '@deadlog/utils';
import type { PatchStats } from '@deadlog/utils';
import {
	formatInterval,
	formatMatches,
	formatRate,
	impactDetails,
	impactSummary
} from './impactFormat';

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

describe('impactSummary', () => {
	const both = { before: window(0.5), after: window(0.52) };
	const neither = { before: window(null), after: window(null) };

	it('lays out one labelled row per tier under shared column headers', () => {
		const summary = impactSummary({
			closed: true,
			all: { before: window(0.4812), after: window(0.5131, { pick: 0.089 }) },
			high: { before: window(0.453), after: window(0.5, { pick: 0.07 }) }
		});

		expect(summary?.columns).toEqual(['WIN', 'PICK']);
		expect(summary?.rows).toEqual([
			{ tier: 'all', label: 'ALL RANKS', cells: ['48.1% → 51.3%', '6.2% → 8.9%'] },
			{ tier: 'high', label: 'HIGH RANK', cells: ['45.3% → 50.0%', '6.2% → 7.0%'] }
		]);
		expect(summary?.notes).toEqual(['41k matches after']);
		expect(summary?.label).toBe(
			'Match results around this patch. All ranks. Win rate 48.1 percent before, 51.3 percent after. Pick rate 6.2 percent before, 8.9 percent after. High rank. Win rate 45.3 percent before, 50.0 percent after. Pick rate 6.2 percent before, 7.0 percent after. 41,234 matches after the patch.'
		);
	});

	it('notes an open after-window once, with its day count', () => {
		const openFor = (days: number) =>
			impactSummary({
				closed: false,
				all: { before: window(0.5), after: window(0.52, { days }) },
				high: { before: window(0.5), after: window(0.52, { days }) }
			});

		expect(openFor(3)?.notes).toEqual(['41k matches after', '3 days so far']);
		expect(openFor(1)?.notes).toEqual(['41k matches after', '1 day so far']);
		expect(openFor(3)?.label).toContain('matches after the patch so far.');
		expect(openFor(3)?.label).toContain('After: 3 days measured so far.');
		expect(openFor(1)?.label).toContain('After: 1 day measured so far.');
	});

	it('shows a dash and names the tier when one side is suppressed', () => {
		const summary = impactSummary({
			closed: false,
			all: both,
			high: { before: window(0.453), after: window(null, { days: 2, matches: 926 }) }
		});

		expect(summary?.rows[1]).toEqual({
			tier: 'high',
			label: 'HIGH RANK',
			cells: ['45.3% → —', '6.2% → —']
		});
		expect(summary?.notes).toEqual([
			'41k matches after',
			'high rank: not enough matches after',
			'14 days so far'
		]);
		expect(summary?.label).toContain(
			'High rank. Win rate 45.3 percent before, not enough matches after.'
		);
	});

	it('keeps the sample when only the before side is suppressed', () => {
		const summary = impactSummary({
			closed: true,
			all: { before: window(null), after: window(0.52) },
			high: neither
		});

		expect(summary?.rows).toEqual([
			{ tier: 'all', label: 'ALL RANKS', cells: ['— → 52.0%', '— → 6.2%'] }
		]);
		expect(summary?.notes).toEqual(['41k matches after', 'not enough matches before']);
	});

	it('drops the sample when the after side is suppressed', () => {
		const summary = impactSummary({
			closed: false,
			all: { before: window(0.5), after: window(null, { days: 2 }) },
			high: neither
		});

		expect(summary?.notes).toEqual(['not enough matches after', '2 days so far']);
		expect(summary?.label).not.toContain('matches after the patch');
	});

	it('leads an item with its purchase share and names the sample for what it is', () => {
		const summary = impactSummary(
			{
				closed: true,
				all: { before: window(0.4812), after: window(0.5131, { pick: 0.089 }) },
				high: neither
			},
			'item'
		);

		expect(summary?.columns).toEqual(['BOUGHT', 'BUYER WIN']);
		expect(summary?.rows[0].cells).toEqual(['6.2% → 8.9%', '48.1% → 51.3%']);
		expect(summary?.notes).toEqual(['41k player-matches after']);
		expect(summary?.label).toBe(
			'Match results around this patch. All ranks. Bought by 6.2 percent before, 8.9 percent after. Buyer win rate 48.1 percent before, 51.3 percent after. 41,234 player-match observations after the patch.'
		);
	});

	it('omits a tier with no reportable side, and everything when neither has one', () => {
		expect(
			impactSummary({ closed: true, all: both, high: neither })?.rows.map(
				(row) => row.tier
			)
		).toEqual(['all']);
		expect(impactSummary({ closed: true, all: neither, high: neither })).toBeNull();
	});
});

describe('formatInterval', () => {
	it('shows the last sampled day, not the exclusive end', () => {
		expect(formatInterval({ from: '2026-09-02', to: '2026-09-16' }, 2026)).toBe(
			'2–15 Sep'
		);
		expect(formatInterval({ from: '2026-09-17', to: '2026-09-18' }, 2026)).toBe('17 Sep');
	});

	it("names both months across a boundary and the year only when it is not the entry's", () => {
		expect(formatInterval({ from: '2025-12-28', to: '2026-01-11' }, 2026)).toBe(
			'28 Dec – 10 Jan 2026'
		);
		expect(formatInterval({ from: '2025-12-18', to: '2026-01-01' }, 2026)).toBe(
			'18–31 Dec 2025'
		);
		expect(formatInterval({ from: '2026-08-25', to: '2026-09-08' }, 2026)).toBe(
			'25 Aug – 7 Sep'
		);
	});

	it('shows a dash for an empty interval', () => {
		expect(formatInterval(null, 2026)).toBe('—');
	});
});

describe('impactDetails', () => {
	const stats: PatchStats = {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T21:00:00.000Z',
		before: { from: '2026-09-02', to: '2026-09-16' },
		after: { from: '2026-09-17', to: '2026-09-21' },
		siblings: []
	};
	const side = (matches: number, covered: number) =>
		window(0.5, { matches, covered, total: matches * 10, coverage: 'complete' });
	const impact: EntityImpact = {
		closed: false,
		all: { before: side(205_924, 14), after: side(48_646, 4) },
		high: { before: side(9441, 14), after: side(2700, 4) }
	};

	it('lays out days, sample, coverage and the high-rank sample', () => {
		expect(
			impactDetails(impact, stats, 'hero', 2026).map((row) => [
				row.label,
				row.before,
				row.after
			])
		).toEqual([
			['DAYS', '2–15 Sep', '17–20 Sep'],
			['SAMPLE', '205,924', '48,646'],
			['COVERED', '14 / 14', '4 / 4 · open'],
			['HIGH RANK', '9,441', '2,700']
		]);
	});

	it('says player-matches for an item only in the spoken labels', () => {
		const rows = impactDetails({ ...impact, closed: true }, stats, 'item', 2026);

		expect(rows[1].spoken).toBe('Sample, player-match observations');
		expect(rows[2].after).toBe('4 / 4');
		expect(rows.map((row) => row.label).join(' ')).not.toMatch(/player/i);
	});
});

describe('coverage notes', () => {
	it('says data unavailable, not too few matches, when cohort days are missing', () => {
		const summary = impactSummary({
			closed: true,
			all: {
				before: window(0.5),
				after: window(null, { matches: 40_000, coverage: 'incomplete', covered: 12 })
			},
			high: { before: window(null), after: window(null) }
		});

		expect(summary?.notes).toEqual(['data unavailable after']);
		expect(summary?.label).toContain(
			'Win rate 50.0 percent before, data unavailable after.'
		);
		expect(summary?.label).toContain(
			'Pick rate 6.2 percent before, data unavailable after.'
		);
		expect(summary?.label).not.toContain('not enough matches');
	});

	it('distinguishes incomplete before data from a small after sample in spoken text', () => {
		const summary = impactSummary({
			closed: true,
			all: { before: window(null, { coverage: 'incomplete' }), after: window(0.5) },
			high: { before: window(null), after: window(null) }
		});
		expect(summary?.label).toContain(
			'Win rate data unavailable before, 50.0 percent after.'
		);
	});
});
