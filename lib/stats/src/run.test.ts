import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { parseStructure, splitFrontMatter } from '@deadlog/changelog';
import type { EntityImpact } from '@deadlog/utils';
import { DAY_S } from './constants';
import { allSeries, day, type HeroPart } from './fixtures';
import type { PatchInputs, RecordedEntity } from './readPatches';
import { run, stalePatchIds, type RunOptions } from './run';
import type { DailyRow, TimeRange } from './types';

const NOW = day(44) + DAY_S / 2;

const patches = [
	{ id: 'p1', slug: '2026/p1', at: day(20) + 100 },
	{ id: 'p2', slug: '2026/p2', at: day(40) + 100 }
];

const changelog = (title: string) =>
	[
		'``attr:',
		`title "${title}"`,
		'``',
		'',
		'=hero:infernus:',
		'## Infernus',
		'- Afterburn reduced',
		'=',
		''
	].join('\n');

function heroSeries(range: TimeRange, wins: number): HeroPart {
	const rows: DailyRow[] = [];
	const totals = new Map<number, number>();
	for (let d = day(0); d <= day(60); d += DAY_S) {
		if (d < range.from - DAY_S || d > range.to) continue;
		rows.push({ entityId: 1, day: d, wins, matches: 1000 });
		totals.set(d, 120_000);
	}
	return { rows, totals };
}

const fetchWith = (wins: number) => async (range: TimeRange) =>
	allSeries({ heroAll: heroSeries(range, wins) });

let dir: string;
const file = (slug: string) => join(dir, `${slug}.mg`);

async function recordedImpact(slug: string): Promise<EntityImpact | null> {
	const { body } = splitFrontMatter(await readFile(file(slug), 'utf8'));
	return parseStructure(body).changes[0].impact ?? null;
}

async function inputs(): Promise<PatchInputs> {
	const touched = new Map<string, RecordedEntity[]>();
	for (const patch of patches) {
		touched.set(patch.id, [
			{ kind: 'hero', id: 1, recorded: await recordedImpact(patch.slug) }
		]);
	}
	return {
		patches,
		touched,
		entities: { hero: [{ id: 1, name: 'Infernus' }], item: [] }
	};
}

const options = (overrides: Partial<RunOptions> = {}): RunOptions => ({
	changelogsDir: dir,
	rebuild: false,
	now: NOW,
	loadPatches: inputs,
	fetchAll: fetchWith(500),
	log: () => undefined,
	...overrides
});

beforeEach(async () => {
	dir = await mkdtemp(join(tmpdir(), 'deadlog-stats-'));
	await mkdir(join(dir, '2026'));
	await writeFile(file('2026/p1'), changelog('One'));
	await writeFile(file('2026/p2'), changelog('Two'));
});

afterEach(async () => {
	vi.restoreAllMocks();
	await rm(dir, { recursive: true, force: true });
});

describe('stalePatchIds', () => {
	it('flags open windows, and entries recorded as open after their window closed', async () => {
		expect([...stalePatchIds(patches, (await inputs()).touched, NOW)]).toEqual(['p2']);

		await run(options());

		expect([...stalePatchIds(patches, (await inputs()).touched, day(90))]).toEqual([
			'p2'
		]);
	});
});

describe('run', () => {
	it('writes the whole history on the first run', async () => {
		const fetchAll = vi.fn(fetchWith(500));

		await run(options({ fetchAll }));

		expect(await recordedImpact('2026/p1')).toMatchObject({
			closed: true,
			all: { after: { win: 0.5, days: 14 } }
		});
		expect(await recordedImpact('2026/p2')).toMatchObject({
			closed: false,
			all: { after: { days: 3 } }
		});
		expect(fetchAll.mock.calls[0][0].from).toBeLessThan(day(20) - 14 * DAY_S);
	});

	it('refreshes only the open patch on a routine run and leaves closed files alone', async () => {
		await run(options());
		const closedFile = await readFile(file('2026/p1'), 'utf8');
		const fetchAll = vi.fn(fetchWith(600));

		await run(options({ fetchAll, now: NOW + DAY_S }));

		const range = fetchAll.mock.calls[0][0];
		expect(range.from).toBeGreaterThan(day(20));
		expect(range.from).toBeLessThan(day(40) - 14 * DAY_S);
		expect(await readFile(file('2026/p1'), 'utf8')).toBe(closedFile);
		expect(await recordedImpact('2026/p2')).toMatchObject({
			closed: false,
			all: { after: { win: 0.6, days: 4 } }
		});
	});

	it('leaves every file untouched when the fetch fails', async () => {
		await run(options());
		const before = await readFile(file('2026/p2'), 'utf8');
		vi.spyOn(console, 'error').mockImplementation(() => undefined);

		await expect(
			run(
				options({
					now: NOW + DAY_S,
					fetchAll: async () => {
						throw new Error('Failed to fetch: 500');
					}
				})
			)
		).resolves.toBeUndefined();

		expect(await readFile(file('2026/p2'), 'utf8')).toBe(before);
	});

	it('writes nothing when the numbers have not changed', async () => {
		await run(options());
		const before = await readFile(file('2026/p2'), 'utf8');
		const log = vi.fn();

		await run(options({ now: NOW + 60, log }));

		expect(await readFile(file('2026/p2'), 'utf8')).toBe(before);
		expect(log).toHaveBeenCalledWith('   Stats: no change');
	});

	it('skips the fetch once every window is closed', async () => {
		await run(options({ now: day(90) }));
		const fetchAll = vi.fn(fetchWith(900));

		await run(options({ fetchAll, now: day(91) }));

		expect(fetchAll).not.toHaveBeenCalled();
	});

	it('recomputes closed blocks on --rebuild', async () => {
		await run(options());

		await run(options({ rebuild: true, fetchAll: fetchWith(700) }));

		expect((await recordedImpact('2026/p1'))?.all.after.win).toBe(0.7);
	});

	it('names the file when a touched entity has no block', async () => {
		await writeFile(
			file('2026/p2'),
			'``attr:\ntitle "Two"\n``\n\n# Notes\n- Nothing here\n'
		);

		await expect(run(options({ loadPatches: baseInputs }))).rejects.toThrow(
			/2026\/p2\.mg/
		);
	});

	it('fails when a changelog file is missing', async () => {
		await rm(file('2026/p1'));

		await expect(run(options({ loadPatches: baseInputs }))).rejects.toThrow(/not found/);
	});
});

async function baseInputs(): Promise<PatchInputs> {
	return {
		patches,
		touched: new Map(
			patches.map((patch) => [
				patch.id,
				[{ kind: 'hero' as const, id: 1, recorded: null }]
			])
		),
		entities: { hero: [{ id: 1, name: 'Infernus' }], item: [] }
	};
}
