import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DAY_S } from './constants';
import { run, stalePatchIds, type RunOptions } from './run';
import type { PatchInputs } from './readPatches';
import type { AllSeries, DailyRow, DailySeries, TimeRange } from './types';

const D0 = 1788825600;
const day = (n: number) => D0 + n * DAY_S;
const NOW = day(44) + DAY_S / 2;

const inputs: PatchInputs = {
	patches: [
		{ id: 'p1', at: day(20) + 100 },
		{ id: 'p2', at: day(40) + 100 }
	],
	touched: new Map([
		['p1', [{ kind: 'hero', id: 1 }]],
		['p2', [{ kind: 'hero', id: 1 }]]
	])
};

function heroSeries(range: TimeRange, wins: number): DailySeries {
	const rows: DailyRow[] = [];
	const totalMatches = new Map<number, number>();
	for (let d = day(0); d <= day(60); d += DAY_S) {
		if (d < range.from - DAY_S || d > range.to) continue;
		rows.push({ entityId: 1, day: d, wins, matches: 1000 });
		totalMatches.set(d, 120_000);
	}
	return { rows, totalMatches };
}

const fetchWith =
	(wins: number) =>
	async (range: TimeRange): Promise<AllSeries> => {
		const empty: DailySeries = { rows: [], totalMatches: new Map() };
		return {
			hero: { all: heroSeries(range, wins), high: empty },
			item: { all: empty, high: empty }
		};
	};

let dir: string;
let snapshotPath: string;
const options = (overrides: Partial<RunOptions> = {}): RunOptions => ({
	snapshotPath,
	rebuild: false,
	now: NOW,
	loadPatches: async () => inputs,
	fetchAll: fetchWith(500),
	log: () => undefined,
	...overrides
});

beforeEach(async () => {
	dir = await mkdtemp(join(tmpdir(), 'deadlog-stats-'));
	snapshotPath = join(dir, 'stats', 'impact.json');
});

afterEach(async () => {
	vi.restoreAllMocks();
	await rm(dir, { recursive: true, force: true });
});

describe('stalePatchIds', () => {
	it('flags open windows and entries recorded as open', async () => {
		await run(options());
		const recorded = JSON.parse(await readFile(snapshotPath, 'utf8'));

		expect([...stalePatchIds(inputs.patches, null, NOW)]).toEqual(['p2']);
		expect([...stalePatchIds(inputs.patches, recorded, day(90))]).toEqual(['p2']);
	});
});

describe('run', () => {
	it('builds the whole history on the first run', async () => {
		const fetchAll = vi.fn(fetchWith(500));

		expect(await run(options({ fetchAll }))).toBe(0);

		const written = JSON.parse(await readFile(snapshotPath, 'utf8'));
		expect(Object.keys(written.impact)).toEqual(['p1', 'p2']);
		expect(written.impact.p1['hero:1'].all.after).toMatchObject({
			winRate: 0.5,
			closed: true
		});
		expect(written.impact.p2['hero:1'].all.after).toMatchObject({
			days: 3,
			closed: false
		});
		expect(fetchAll.mock.calls[0][0].from).toBeLessThan(day(20) - 14 * DAY_S);
	});

	it('fetches only from the open patches on a routine run and freezes the rest', async () => {
		await run(options());
		const fetchAll = vi.fn(fetchWith(600));

		await run(options({ fetchAll, now: NOW + DAY_S }));

		const range = fetchAll.mock.calls[0][0];
		expect(range.from).toBeGreaterThan(day(20));
		expect(range.from).toBeLessThan(day(40) - 14 * DAY_S);
		const written = JSON.parse(await readFile(snapshotPath, 'utf8'));
		expect(written.impact.p1['hero:1'].all.after.winRate).toBe(0.5);
		expect(written.impact.p2['hero:1'].all.after).toMatchObject({
			winRate: 0.6,
			days: 4
		});
	});

	it('leaves the file untouched and exits 0 when the fetch fails', async () => {
		await run(options());
		const before = await readFile(snapshotPath, 'utf8');
		vi.spyOn(console, 'error').mockImplementation(() => undefined);

		const code = await run(
			options({
				now: NOW + DAY_S,
				fetchAll: async () => {
					throw new Error('Failed to fetch: 500');
				}
			})
		);

		expect(code).toBe(0);
		expect(await readFile(snapshotPath, 'utf8')).toBe(before);
	});

	it('does not create a file when the first fetch fails', async () => {
		vi.spyOn(console, 'error').mockImplementation(() => undefined);

		await run(
			options({
				fetchAll: async () => {
					throw new Error('offline');
				}
			})
		);

		expect(existsSync(snapshotPath)).toBe(false);
	});

	it('does not rewrite the file when only generatedAt would change', async () => {
		await run(options());
		const before = await readFile(snapshotPath, 'utf8');

		await run(options({ now: NOW + 60 }));

		expect(await readFile(snapshotPath, 'utf8')).toBe(before);
	});

	it('skips the fetch once every window is closed', async () => {
		await run(options({ now: day(90) }));
		const fetchAll = vi.fn(fetchWith(900));

		await run(options({ fetchAll, now: day(91) }));

		expect(fetchAll).not.toHaveBeenCalled();
	});

	it('recomputes closed windows on --rebuild', async () => {
		await run(options());

		await run(options({ rebuild: true, fetchAll: fetchWith(700) }));

		const written = JSON.parse(await readFile(snapshotPath, 'utf8'));
		expect(written.impact.p1['hero:1'].all.after.winRate).toBe(0.7);
	});

	it('rejects a malformed snapshot', async () => {
		await run(options());
		await writeFile(snapshotPath, '{"impact": []}');

		await expect(run(options())).rejects.toThrow(/Malformed snapshot/);
	});
});
