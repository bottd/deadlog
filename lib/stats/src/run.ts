import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import {
	DAY_S,
	HIGH_RANK_MIN_BADGE,
	MIN_WINDOW_MATCHES,
	WINDOW_CAP_DAYS
} from './constants';
import {
	isClosed,
	mergeSnapshot,
	serialise,
	serialiseImpact,
	snapshotSchema
} from './mergeSnapshot';
import type { PatchInputs } from './readPatches';
import { sliceWindows, windowDays, type PatchRef } from './sliceWindows';
import type { AllSeries, ImpactSnapshot, TimeRange } from './types';

export interface RunOptions {
	snapshotPath: string;
	rebuild: boolean;
	now: number;
	loadPatches: () => Promise<PatchInputs>;
	fetchAll: (range: TimeRange) => Promise<AllSeries>;
	log?: (message: string) => void;
}

const LOOKBACK_S = (WINDOW_CAP_DAYS + 2) * DAY_S;

export function stalePatchIds(
	patches: PatchRef[],
	existing: ImpactSnapshot | null,
	now: number
): Set<string> {
	const stale = new Set<string>();
	patches.forEach((patch, index) => {
		const recorded = Object.values(existing?.impact[patch.id] ?? {});
		if (!windowDays(patches, index, now).closed || recorded.some((e) => !isClosed(e))) {
			stale.add(patch.id);
		}
	});
	return stale;
}

async function readSnapshot(path: string): Promise<ImpactSnapshot | null> {
	if (!existsSync(path)) return null;
	const result = snapshotSchema.safeParse(JSON.parse(await readFile(path, 'utf8')));
	if (!result.success) {
		throw new Error(`Malformed snapshot at ${path}: ${result.error.message}`);
	}
	return result.data;
}

export async function run(options: RunOptions): Promise<number> {
	const {
		snapshotPath,
		rebuild,
		now,
		loadPatches,
		fetchAll,
		log = console.log
	} = options;

	const existing = await readSnapshot(snapshotPath);
	const { patches, touched } = await loadPatches();
	if (patches.length === 0) throw new Error('No patches in the database');

	const full = rebuild || !existing;
	const stale = stalePatchIds(patches, existing, now);
	const wanted = full ? patches : patches.filter((patch) => stale.has(patch.id));
	if (wanted.length === 0) {
		log('   Stats: every window is closed, nothing to refresh');
		return 0;
	}

	const range = { from: wanted[0].at - LOOKBACK_S, to: now };
	let series: AllSeries;
	try {
		series = await fetchAll(range);
	} catch (error) {
		console.error('   Stats: fetch failed, snapshot left untouched:', error);
		return 0;
	}

	const wantedIds = new Set(wanted.map((patch) => patch.id));
	const fresh: ImpactSnapshot = {
		generatedAt: new Date(now * 1000).toISOString(),
		highRankMinBadge: HIGH_RANK_MIN_BADGE,
		minWindowMatches: MIN_WINDOW_MATCHES,
		impact: sliceWindows({
			patches,
			touched: new Map([...touched].filter(([patchId]) => wantedIds.has(patchId))),
			series,
			now
		})
	};
	const merged = mergeSnapshot(existing, fresh, { rebuild });

	if (existing && serialiseImpact(existing.impact) === serialiseImpact(merged.impact)) {
		log('   Stats: no change');
		return 0;
	}

	await mkdir(dirname(snapshotPath), { recursive: true });
	await writeFile(snapshotPath, serialise(merged));

	const entries = Object.values(merged.impact).reduce(
		(sum, entities) => sum + Object.keys(entities).length,
		0
	);
	log(`   Stats: ${snapshotPath}`);
	log(
		`   ${Object.keys(merged.impact).length} patches, ${entries} entries, refreshed ${wanted.length} ${full ? '(full rebuild)' : 'open'}`
	);
	return 0;
}
