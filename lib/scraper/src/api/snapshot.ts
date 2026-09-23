import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fetchEntitySnapshot, type EntitySnapshot } from './deadlock';
import { entitySnapshotSchema } from '../types/deadlockApi';

export function entitySnapshotPath(): string {
	return resolve(process.env.CHANGELOGS_DIR || 'app/changelogs', 'entities.json');
}

const SNAPSHOT_SCHEMA_VERSION = 2;

export function serializeEntitySnapshot(snapshot: EntitySnapshot): string {
	const { heroes, items, provenance } = snapshot;
	const envelope = provenance
		? { schemaVersion: SNAPSHOT_SCHEMA_VERSION, ...provenance, heroes, items }
		: { heroes, items };
	return `${JSON.stringify(envelope, null, '\t')}\n`;
}

export async function writeEntitySnapshot(snapshot: EntitySnapshot): Promise<string> {
	const target = entitySnapshotPath();
	const staging = `${target}.${process.pid}.tmp`;
	await mkdir(dirname(target), { recursive: true });
	await writeFile(staging, serializeEntitySnapshot(snapshot));
	await rename(staging, target);
	return target;
}

export async function readEntitySnapshot(): Promise<EntitySnapshot | null> {
	let raw: string;
	try {
		raw = await readFile(entitySnapshotPath(), 'utf-8');
	} catch {
		return null;
	}
	let json: unknown;
	try {
		json = JSON.parse(raw);
	} catch {
		json = null;
	}
	const parsed = entitySnapshotSchema.safeParse(json);
	if (!parsed.success) {
		console.warn(`   ⚠️  ${entitySnapshotPath()} is not a usable snapshot`);
		return null;
	}
	const { heroes, items, schemaVersion, clientVersion, language, collectedAt } =
		parsed.data;
	if (schemaVersion === undefined || !clientVersion || !language || !collectedAt) {
		return { heroes, items };
	}
	return { heroes, items, provenance: { clientVersion, language, collectedAt } };
}

const withoutCollectionTime = ({ heroes, items, provenance }: EntitySnapshot): string =>
	JSON.stringify({
		clientVersion: provenance?.clientVersion,
		language: provenance?.language,
		heroes,
		items
	});

export async function loadEntitySnapshot(): Promise<EntitySnapshot> {
	let cached: EntitySnapshot | null | undefined;
	try {
		const snapshot = await fetchEntitySnapshot();
		cached = await readEntitySnapshot();
		if (cached && withoutCollectionTime(cached) === withoutCollectionTime(snapshot)) {
			return cached;
		}
		await writeEntitySnapshot(snapshot);
		return snapshot;
	} catch (error) {
		cached ??= await readEntitySnapshot();
		if (!cached) throw error;
		const reason = error instanceof Error ? error.message : String(error);
		console.warn(`   ⚠️  Deadlock asset API unreachable (${reason})`);
		console.warn(`   ↩️  Falling back to ${entitySnapshotPath()}`);
		return cached;
	}
}
