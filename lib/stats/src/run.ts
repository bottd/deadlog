import { existsSync } from 'node:fs';
import { readFile, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { PatchStats } from '@deadlog/utils';
import { DAY_S, METHOD_VERSION, WINDOW_CAP_DAYS } from './constants';
import type { PatchInputs, RecordedEntity, StatsPatch } from './readPatches';
import { indexEntities, upsertImpactBlocks } from './rewriteMog';
import { patchBounds, sliceWindows, windowDays } from './sliceWindows';
import type { AllSeries, TimeRange } from './types';

export interface RunOptions {
	changelogsDir: string;
	rebuild: boolean;
	now: number;
	loadPatches: () => Promise<PatchInputs>;
	fetchAll: (range: TimeRange) => Promise<AllSeries>;
	log?: (message: string) => void;
}

const LOOKBACK_S = (WINDOW_CAP_DAYS + 2) * DAY_S;

const isFrozen = (entity: RecordedEntity): boolean => entity.recorded?.closed === true;

export function stalePatchIds(
	patches: StatsPatch[],
	touched: Map<string, RecordedEntity[]>,
	now: number
): Set<string> {
	const stale = new Set<string>();
	patches.forEach((patch, index) => {
		const recorded = touched.get(patch.id) ?? [];
		const open = recorded.some((entity) => entity.recorded?.closed === false);
		if (open || !windowDays(patches, index, now).closed) stale.add(patch.id);
	});
	return stale;
}

export async function run(options: RunOptions): Promise<void> {
	const {
		changelogsDir,
		rebuild,
		now,
		loadPatches,
		fetchAll,
		log = console.log
	} = options;

	const { patches, touched, entities } = await loadPatches();
	if (patches.length === 0) throw new Error('No patches in the database');

	const anyRecorded = [...touched.values()].some((list) => list.some((e) => e.recorded));
	const full = rebuild || !anyRecorded;
	const wantedIds = full
		? new Set(patches.map((patch) => patch.id))
		: stalePatchIds(patches, touched, now);
	const wanted = patches.filter((patch) => wantedIds.has(patch.id));
	if (wanted.length === 0) {
		log('   Stats: every window is closed, nothing to refresh');
		return;
	}

	let series: AllSeries;
	try {
		series = await fetchAll({ from: wanted[0].at - LOOKBACK_S, to: now });
	} catch (error) {
		console.error('   Stats: fetch failed, changelogs left untouched:', error);
		return;
	}

	const isCurrent = (patch: StatsPatch) =>
		patch.stats?.schemaVersion === 2 && patch.stats.methodVersion === METHOD_VERSION;
	const refresh = new Map(
		wanted.map((patch) => [
			patch.id,
			(touched.get(patch.id) ?? []).filter(
				(entity) => rebuild || !isCurrent(patch) || !isFrozen(entity)
			)
		])
	);
	const sliced = sliceWindows({ patches, touched: refresh, series, now });
	const index = indexEntities(entities);

	let files = 0;
	let blocks = 0;
	const collectedAt = new Date(now * 1000).toISOString();
	for (const patch of wanted) {
		const impacts = sliced.get(patch.id) ?? [];
		const wholeFile = rebuild || !isCurrent(patch);
		const hasRecorded = (touched.get(patch.id) ?? []).some((entity) => entity.recorded);
		if (!impacts.length && !(wholeFile && hasRecorded)) continue;
		const bounds = patchBounds(patches, patches.indexOf(patch), now);
		const statsAt = (at: string): PatchStats => ({
			schemaVersion: 2,
			methodVersion: METHOD_VERSION,
			collectedAt: at,
			...bounds
		});

		const path = join(changelogsDir, `${patch.slug}.mg`);
		if (!existsSync(path)) throw new Error(`Changelog file not found: ${path}`);
		const source = await readFile(path, 'utf8');
		let next: string;
		try {
			const write = (at: string) =>
				upsertImpactBlocks(source, impacts, index, {
					stats: statsAt(at),
					removeOthers: wholeFile
				});
			next = await write(patch.stats?.collectedAt ?? collectedAt);
			if (next !== source) next = await write(collectedAt);
		} catch (error) {
			throw new Error(`Failed to write patch impact into ${path}`, { cause: error });
		}
		if (next === source) continue;

		await writeFile(`${path}.tmp`, next);
		await rename(`${path}.tmp`, path);
		files++;
		blocks += impacts.length;
	}

	const legacy = patches.filter(
		(patch) =>
			!wantedIds.has(patch.id) &&
			!isCurrent(patch) &&
			(touched.get(patch.id) ?? []).some((entity) => entity.recorded)
	).length;
	if (legacy > 0) {
		log(
			`   Stats: ${legacy} closed changelogs hold an older method; run with --rebuild to recompute them`
		);
	}

	log(
		files === 0
			? '   Stats: no change'
			: `   Stats: ${files} changelogs updated, ${blocks} blocks written, refreshed ${wanted.length} ${full ? '(full rebuild)' : 'open'}`
	);
}
