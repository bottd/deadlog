import { describe, expect, it } from 'vitest';
import type { EntityImpact, ImpactWindow, PatchStats } from '@deadlog/utils';
import { parseStructure } from './extract';
import { writeEnrichmentBlock } from './entityEnrichment';
import { parseImpact, parseStats, writeStatsNode } from './impactBlock';
import { carryEnrichment, spliceImpactBlocks } from './rewrite';

const v2 = (overrides: Partial<ImpactWindow> = {}): ImpactWindow => ({
	win: 0.5,
	pick: 0.1,
	matches: 2800,
	days: 14,
	total: 28_000,
	covered: 14,
	coverage: 'complete',
	...overrides
});
const impact: EntityImpact = {
	closed: true,
	all: { before: v2(), after: v2({ win: 0.52 }) },
	high: {
		before: v2(),
		after: v2({
			win: null,
			pick: null,
			matches: 0,
			days: 0,
			total: 0,
			covered: 0,
			coverage: 'incomplete'
		})
	}
};
const stats: PatchStats = {
	schemaVersion: 2,
	methodVersion: 2,
	collectedAt: '2026-09-21T21:00:00.000Z',
	before: { from: '2026-09-02', to: '2026-09-16' },
	after: null,
	siblings: ['162580']
};

const plain = [
	'``attr:',
	'title "Patch \\"quoted\\""',
	'major_update #false',
	'``',
	'',
	'=hero:doorman:',
	'## The Doorman',
	'- Base damage increased',
	'=',
	''
].join('\n');

describe('stats node', () => {
	it('round-trips through the Mog parser, null interval and siblings included', async () => {
		const written = await spliceImpactBlocks(plain, () => impact, stats);
		const parsed = await parseStructure(written);

		expect(parsed.stats).toEqual(stats);
		expect(parsed.changes[0].impact).toEqual(impact);
		expect(parsed.metadata.title).toBe('Patch "quoted"');
		expect(parsed.changes[0].groups[0].bullets).toEqual(['Base damage increased']);
	});

	it('keeps every other metadata line and its order', async () => {
		const written = await spliceImpactBlocks(plain, () => impact, stats);
		const head = written.split('\n').slice(0, 8);

		expect(head.slice(0, 3)).toEqual(plain.split('\n').slice(0, 3));
		expect(head.slice(3, 7)).toEqual(writeStatsNode(stats).slice(0, 4));
	});

	it('replaces an existing node in place and is stable on a second write', async () => {
		const first = await spliceImpactBlocks(plain, () => impact, stats);
		const moved = {
			...stats,
			after: { from: '2026-09-17', to: '2026-09-20' },
			siblings: []
		};
		const second = await spliceImpactBlocks(first, () => impact, moved);

		expect((await parseStructure(second)).stats).toEqual(moved);
		expect(second.match(/^stats /gm)).toHaveLength(1);
		await expect(spliceImpactBlocks(second, () => impact, moved)).resolves.toBe(second);
	});

	it('reads several siblings back as a list', async () => {
		const many = { ...stats, siblings: ['1', '2'] };
		const written = await spliceImpactBlocks(plain, () => impact, many);
		expect((await parseStructure(written)).stats?.siblings).toEqual(['1', '2']);
	});

	it('names an unsupported schema instead of reading it as something else', () => {
		expect(() => parseStats({ schema: 3, method: 1 })).toThrow(
			/Unsupported stats schema 3/
		);
		expect(() => parseStats({ schema: 2, method: 2, collected: 'yesterday' })).toThrow(
			/Malformed stats node/
		);
		expect(() =>
			parseStats({
				schema: 2,
				method: 2,
				collected: stats.collectedAt,
				before: { from: '2026-09-16', to: '2026-09-02' },
				after: { from: null, to: null }
			})
		).toThrow(/from < to/);
	});
});

describe('impact windows', () => {
	it('writes the coverage fields on every window', () => {
		expect(writeEnrichmentBlock({ impact })[3]).toBe(
			'    before win=0.5 pick=0.1 matches=2800 days=14 total=28000 covered=14 coverage="complete"'
		);
	});

	it('refuses a window without its coverage fields', () => {
		const bare = { win: 0.5, pick: 0.1, matches: 2800, days: 14 };
		expect(() =>
			parseImpact({
				closed: true,
				all: { before: bare, after: bare },
				high: { before: bare, after: bare }
			})
		).toThrow(/Malformed impact block/);
	});
});

describe('rewrites', () => {
	it('removes a block when told there is nothing left to report', async () => {
		const written = await spliceImpactBlocks(plain, () => impact, stats);
		const cleared = await spliceImpactBlocks(written, () => null, stats);

		expect(cleared).not.toContain('impact closed');
		expect((await parseStructure(cleared)).changes[0].groups[0].bullets).toEqual([
			'Base damage increased'
		]);
	});

	it('carries the stats node with the blocks through a scraper overwrite', async () => {
		const recorded = await spliceImpactBlocks(plain, () => impact, stats);
		const carried = await carryEnrichment(recorded, plain);

		const parsed = await parseStructure(carried);
		expect(parsed.stats).toEqual(stats);
		expect(parsed.changes[0].impact).toEqual(impact);
	});
});
