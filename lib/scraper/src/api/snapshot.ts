import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fetchEntitySnapshot, type EntitySnapshot } from './deadlock';
import { entitySnapshotSchema } from '../types/deadlockApi';

export function entitySnapshotPath(): string {
	return resolve(process.env.CHANGELOGS_DIR || 'app/changelogs', 'entities.json');
}

export function serializeEntitySnapshot(snapshot: EntitySnapshot): string {
	const { heroes, items } = snapshot;
	return `${JSON.stringify({ heroes, items }, null, '\t')}\n`;
}

export async function writeEntitySnapshot(snapshot: EntitySnapshot): Promise<string> {
	const target = entitySnapshotPath();
	await mkdir(dirname(target), { recursive: true });
	await writeFile(target, serializeEntitySnapshot(snapshot));
	return target;
}

export async function readEntitySnapshot(): Promise<EntitySnapshot | null> {
	let raw: string;
	try {
		raw = await readFile(entitySnapshotPath(), 'utf-8');
	} catch {
		return null;
	}
	const parsed = entitySnapshotSchema.safeParse(JSON.parse(raw));
	if (!parsed.success) {
		console.warn(`   ⚠️  ${entitySnapshotPath()} is not a usable snapshot`);
		return null;
	}
	return parsed.data;
}

export async function loadEntitySnapshot(): Promise<EntitySnapshot> {
	try {
		const snapshot = await fetchEntitySnapshot();
		await writeEntitySnapshot(snapshot);
		return snapshot;
	} catch (error) {
		const cached = await readEntitySnapshot();
		if (!cached) throw error;
		const reason = error instanceof Error ? error.message : String(error);
		console.warn(`   ⚠️  Deadlock asset API unreachable (${reason})`);
		console.warn(`   ↩️  Falling back to ${entitySnapshotPath()}`);
		return cached;
	}
}
