import { describe, expect, it } from 'vitest';
import type { EntityImpact, ImpactWindow, PatchStats } from '@deadlog/utils';
import { parseStructure } from './extract';
import { parseImpact, parseStats, writeImpactBlock, writeStatsNode } from './impactBlock';
import { carryImpact, spliceImpactBlocks } from './rewrite';

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

const legacy = [
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
		const written = await spliceImpactBlocks(legacy, () => impact, stats);
		const parsed = await parseStructure(written);

		expect(parsed.stats).toEqual(stats);
		expect(parsed.changes[0].impact).toEqual(impact);
		expect(parsed.metadata.title).toBe('Patch "quoted"');
		expect(parsed.changes[0].groups[0].bullets).toEqual(['Base damage increased']);
	});

	it('keeps every other metadata line and its order', async () => {
		const written = await spliceImpactBlocks(legacy, () => impact, stats);
		const head = written.split('\n').slice(0, 8);

		expect(head.slice(0, 3)).toEqual(legacy.split('\n').slice(0, 3));
		expect(head.slice(3, 7)).toEqual(writeStatsNode(stats).slice(0, 4));
	});

	it('replaces an existing node in place and is stable on a second write', async () => {
		const first = await spliceImpactBlocks(legacy, () => impact, stats);
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
		const written = await spliceImpactBlocks(legacy, () => impact, many);
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

describe('impact schema versions', () => {
	const v1Window = { win: 0.5, pick: 0.1, matches: 2800, days: 14 };
	const v1 = {
		closed: true,
		all: { before: v1Window, after: v1Window },
		high: { before: v1Window, after: v1Window }
	};

	it('reads a legacy block only as schema 1, and a v2 block only as schema 2', () => {
		expect(parseImpact(v1)).toEqual(v1);
		expect(() => parseImpact(v1, 2)).toThrow(/schema 2/);
		expect(parseImpact(impact, 2)).toEqual(impact);
		expect(() => parseImpact(impact, 1)).toThrow(/schema 1/);
	});

	it('refuses a file that mixes a stats node with legacy blocks', async () => {
		const withLegacyBlock = await spliceImpactBlocks(legacy, () => v1);
		const mixed = withLegacyBlock.replace(
			'major_update #false',
			['major_update #false', ...writeStatsNode(stats)].join('\n')
		);
		await expect(parseStructure(mixed)).rejects.toThrow(/schema 2/);
	});

	it('writes the coverage fields only for a v2 window', () => {
		expect(writeImpactBlock(impact)[3]).toBe(
			'    before win=0.5 pick=0.1 matches=2800 days=14 total=28000 covered=14 coverage="complete"'
		);
		expect(writeImpactBlock(v1)[3]).toBe(
			'    before win=0.5 pick=0.1 matches=2800 days=14'
		);
	});
});

describe('rewrites', () => {
	it('removes a block when told there is nothing left to report', async () => {
		const written = await spliceImpactBlocks(legacy, () => impact, stats);
		const cleared = await spliceImpactBlocks(written, () => null, stats);

		expect(cleared).not.toContain('impact closed');
		expect((await parseStructure(cleared)).changes[0].groups[0].bullets).toEqual([
			'Base damage increased'
		]);
	});

	it('carries the stats node with the blocks through a scraper overwrite', async () => {
		const recorded = await spliceImpactBlocks(legacy, () => impact, stats);
		const carried = await carryImpact(recorded, legacy);

		const parsed = await parseStructure(carried);
		expect(parsed.stats).toEqual(stats);
		expect(parsed.changes[0].impact).toEqual(impact);
	});
});
