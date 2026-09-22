import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { parseStructure } from '@deadlog/changelog';
import { DAY_S } from './constants';
import { day } from './fixtures';
import {
	patchesInScope,
	runRelatedItems,
	type RelatedInputs,
	type RelatedPatch,
	type RelatedRunOptions
} from './runRelatedItems';
import type { DailyRow, TimeRange } from './types';

const NOW = day(44) + DAY_S / 2;
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
		'=item:toxic-bullets:',
		'## Toxic Bullets',
		'- Bleed increased',
		'=',
		''
	].join('\n');

let dir: string;
const file = (slug: string) => join(dir, `${slug}.mg`);

const base: Omit<RelatedPatch, 'heroes'>[] = [
	{ id: 'p1', slug: '2026/p1', at: day(5) + 100, candidates: [7] },
	{ id: 'p2', slug: '2026/p2', at: day(40) + 100, candidates: [7] }
];

async function inputs(): Promise<RelatedInputs> {
	const patches = await Promise.all(
		base.map(async (patch) => {
			const parsed = await parseStructure(await readFile(file(patch.slug), 'utf8'));
			return {
				...patch,
				stats: parsed.stats,
				heroes: [{ id: 1, recorded: parsed.changes[0].related ?? null }]
			};
		})
	);
	return { patches, heroes: [{ id: 1, name: 'Infernus' }] };
}

const series = (matches: number) => async (range: TimeRange) => {
	const rows: DailyRow[] = [];
	for (let d = range.from; d <= range.to; d += DAY_S) {
		rows.push({ entityId: 1, day: d, wins: 0, matches });
	}
	return rows;
};

const options = (overrides: Partial<RelatedRunOptions> = {}): RelatedRunOptions => ({
	changelogsDir: dir,
	now: NOW,
	rebuild: false,
	loadPatches: inputs,
	fetchHeroes: series(1000),
	fetchBuyers: (_item, range) => series(300)(range),
	log: () => undefined,
	...overrides
});

const related = async (slug: string) =>
	(await parseStructure(await readFile(file(slug), 'utf8'))).changes[0].related;

beforeEach(async () => {
	dir = await mkdtemp(join(tmpdir(), 'deadlog-related-'));
	await mkdir(join(dir, '2026'));
	for (const patch of base) await writeFile(file(patch.slug), changelog(patch.id));
});

afterEach(async () => {
	vi.restoreAllMocks();
	await rm(dir, { recursive: true, force: true });
});

describe('patchesInScope', () => {
	it('takes the newest patch day and recent patches without a record, not the archive', async () => {
		const { patches } = await inputs();

		expect(
			patchesInScope(patches, { now: NOW, rebuild: false }).map((p) => p.id)
		).toEqual(['p2']);
		expect(patchesInScope(patches, { now: NOW, rebuild: true })).toHaveLength(2);
		expect(
			patchesInScope(patches, { now: NOW, rebuild: false, patchId: 'p1' }).map(
				(p) => p.id
			)
		).toEqual(['p1']);
	});

	it('refuses a patch id it cannot relate anything in', async () => {
		const { patches } = await inputs();
		expect(() =>
			patchesInScope(patches, { now: NOW, rebuild: false, patchId: 'nope' })
		).toThrow(/unknown or has no hero and item changes/);
	});
});

describe('runRelatedItems', () => {
	it('records the selection on the hero block and the window on the file', async () => {
		await runRelatedItems(options());

		expect(await related('2026/p2')).toEqual({
			methodVersion: 1,
			status: 'complete',
			appearances: 14_000,
			candidates: [7],
			items: [{ id: 7, buyers: 4200 }]
		});
		const parsed = await parseStructure(await readFile(file('2026/p2'), 'utf8'));
		expect(parsed.stats?.before).toEqual({ from: '2026-10-04', to: '2026-10-18' });
		expect(parsed.blocks[1].enrichment).toEqual({});
		expect(await related('2026/p1')).toBeUndefined();
	});

	it('writes nothing on a second run, and fetches nothing', async () => {
		await runRelatedItems(options());
		const before = await readFile(file('2026/p2'), 'utf8');
		const fetchHeroes = vi.fn(series(1000));

		await runRelatedItems(options({ fetchHeroes, now: NOW + 3600 }));

		expect(fetchHeroes).not.toHaveBeenCalled();
		expect(await readFile(file('2026/p2'), 'utf8')).toBe(before);
	});

	it('recomputes when the changed items change', async () => {
		await runRelatedItems(options());
		base[1] = { ...base[1], candidates: [7, 8] };

		await runRelatedItems(options());

		expect((await related('2026/p2'))?.candidates).toEqual([7, 8]);
		base[1] = { ...base[1], candidates: [7] };
	});

	it('stores an empty result so the job does not ask again', async () => {
		await runRelatedItems(options({ fetchHeroes: series(10) }));

		expect(await related('2026/p2')).toMatchObject({
			status: 'insufficient-sample',
			appearances: 140,
			items: []
		});
	});

	it('leaves a patch untouched when a request fails, and still does the others', async () => {
		vi.spyOn(console, 'error').mockImplementation(() => undefined);
		const untouched = await readFile(file('2026/p1'), 'utf8');
		const log = vi.fn();

		await runRelatedItems(
			options({
				rebuild: true,
				log,
				fetchBuyers: async (_item, range) => {
					if (range.to < day(20)) throw new Error('Failed to fetch: 500');
					return series(300)(range);
				}
			})
		);

		expect(await readFile(file('2026/p1'), 'utf8')).toBe(untouched);
		expect((await related('2026/p2'))?.status).toBe('complete');
		expect(log).toHaveBeenCalledWith(expect.stringContaining('1 failed (2026/p1)'));
	});

	it('asks for each item window once per run', async () => {
		const fetchBuyers = vi.fn((_item: number, range: TimeRange) => series(300)(range));
		base.push({ id: 'p3', slug: '2026/p3', at: day(40) + 7200, candidates: [7] });
		await writeFile(file('2026/p3'), changelog('p3'));

		await runRelatedItems(options({ fetchBuyers }));

		expect(fetchBuyers).toHaveBeenCalledTimes(1);
		expect((await related('2026/p3'))?.status).toBe('complete');
		base.pop();
	});
});
