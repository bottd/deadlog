import { describe, expect, it } from 'vitest';
import { mergeSnapshot, serialise, snapshotSchema } from './mergeSnapshot';
import type { EntityImpact, ImpactSnapshot, ImpactWindow } from './types';

const window = (winRate: number | null, closed = true): ImpactWindow => ({
	winRate,
	pickRate: winRate === null ? null : 0.1,
	matches: winRate === null ? 12 : 5000,
	days: 7,
	closed
});

const entity = (winRate: number, closed = true): EntityImpact => ({
	all: { before: window(0.5), after: window(winRate, closed) },
	high: { before: window(null), after: window(null, closed) }
});

const snapshot = (
	impact: ImpactSnapshot['impact'],
	overrides: Partial<ImpactSnapshot> = {}
): ImpactSnapshot => ({
	generatedAt: '2026-09-19T05:00:00.000Z',
	highRankMinBadge: 91,
	minWindowMatches: 1000,
	impact,
	...overrides
});

describe('mergeSnapshot', () => {
	it('returns the fresh snapshot when nothing exists yet', () => {
		const fresh = snapshot({ p1: { 'hero:1': entity(0.52) } });

		expect(mergeSnapshot(null, fresh, { rebuild: false })).toBe(fresh);
	});

	it('keeps closed entries even when fresh data disagrees', () => {
		const existing = snapshot({ p1: { 'hero:1': entity(0.52) } });
		const fresh = snapshot({ p1: { 'hero:1': entity(0.58) } });

		const merged = mergeSnapshot(existing, fresh, { rebuild: false });

		expect(merged.impact.p1['hero:1'].all.after.winRate).toBe(0.52);
	});

	it('replaces open entries and adds new ones', () => {
		const existing = snapshot({ p2: { 'hero:1': entity(0.51, false) } });
		const fresh = snapshot({
			p2: { 'hero:1': entity(0.53, false), 'item:500': entity(0.6, false) }
		});

		const merged = mergeSnapshot(existing, fresh, { rebuild: false });

		expect(merged.impact.p2['hero:1'].all.after.winRate).toBe(0.53);
		expect(merged.impact.p2['item:500'].all.after.winRate).toBe(0.6);
	});

	it('keeps closed entries the fresh run did not cover and drops open ones', () => {
		const existing = snapshot({
			p1: { 'hero:1': entity(0.52) },
			p2: { 'hero:1': entity(0.51, false) }
		});
		const fresh = snapshot({ p3: { 'hero:2': entity(0.49, false) } });

		const merged = mergeSnapshot(existing, fresh, { rebuild: false });

		expect(Object.keys(merged.impact).sort()).toEqual(['p1', 'p3']);
	});

	it('treats an entry as open while either tier is open', () => {
		const half = entity(0.52);
		half.high.after.closed = false;
		const existing = snapshot({ p1: { 'hero:1': half } });
		const fresh = snapshot({ p1: { 'hero:1': entity(0.58) } });

		const merged = mergeSnapshot(existing, fresh, { rebuild: false });

		expect(merged.impact.p1['hero:1'].all.after.winRate).toBe(0.58);
	});

	it('takes generatedAt from the fresh run', () => {
		const existing = snapshot({ p1: { 'hero:1': entity(0.52) } });
		const fresh = snapshot({}, { generatedAt: '2026-09-20T05:00:00.000Z' });

		expect(mergeSnapshot(existing, fresh, { rebuild: false }).generatedAt).toBe(
			'2026-09-20T05:00:00.000Z'
		);
	});

	it('refuses to mix thresholds without --rebuild', () => {
		const existing = snapshot(
			{ p1: { 'hero:1': entity(0.52) } },
			{ highRankMinBadge: 101 }
		);
		const fresh = snapshot({ p1: { 'hero:1': entity(0.58) } });

		expect(() => mergeSnapshot(existing, fresh, { rebuild: false })).toThrow(/--rebuild/);
	});

	it('replaces everything on rebuild', () => {
		const existing = snapshot(
			{ p1: { 'hero:1': entity(0.52) }, p0: { 'hero:9': entity(0.5) } },
			{ minWindowMatches: 500 }
		);
		const fresh = snapshot({ p1: { 'hero:1': entity(0.58) } });

		expect(mergeSnapshot(existing, fresh, { rebuild: true })).toBe(fresh);
	});
});

describe('serialise', () => {
	const unordered = snapshot({
		p2: { 'item:500': entity(0.6), 'hero:2': entity(0.5), 'hero:10': entity(0.4) },
		p1: { 'hero:1': entity(0.52) }
	});

	it('sorts patches and entities and ends with a newline', () => {
		const text = serialise(unordered);

		expect(text.endsWith('}\n')).toBe(true);
		expect(text.indexOf('"p1"')).toBeLessThan(text.indexOf('"p2"'));
		expect(text.indexOf('"hero:10"')).toBeLessThan(text.indexOf('"hero:2"'));
		expect(text.indexOf('"hero:2"')).toBeLessThan(text.indexOf('"item:500"'));
	});

	it('writes one line per entity', () => {
		const lines = serialise(unordered).split('\n');

		expect(lines.filter((line) => line.includes('"winRate"'))).toHaveLength(4);
	});

	it('round-trips through the schema to identical bytes', () => {
		const text = serialise(unordered);

		expect(serialise(snapshotSchema.parse(JSON.parse(text)))).toBe(text);
	});

	it('serialises an empty snapshot as valid JSON', () => {
		expect(JSON.parse(serialise(snapshot({}))).impact).toEqual({});
	});
});
