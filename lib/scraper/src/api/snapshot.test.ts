import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import type { EntitySnapshot } from './deadlock';

const mocks = vi.hoisted(() => ({ fetch: vi.fn() }));
vi.mock('./deadlock', async (importOriginal) => ({
	...(await importOriginal<typeof import('./deadlock')>()),
	fetchEntitySnapshot: mocks.fetch
}));

const {
	entitySnapshotPath,
	loadEntitySnapshot,
	readEntitySnapshot,
	serializeEntitySnapshot,
	writeEntitySnapshot
} = await import('./snapshot');

const snapshot: EntitySnapshot = {
	heroes: [
		{
			id: 2,
			name: 'Seven',
			class_name: 'hero_gigawatt',
			images: { icon_b: 'https://cdn/b.webp', icon_a: 'https://cdn/a.webp' }
		},
		{
			id: 1,
			name: 'Infernus',
			class_name: 'hero_inferno',
			images: { icon_a: 'https://cdn/inferno.webp' }
		}
	],
	items: [
		{ id: 20, class_name: 'upgrade_grit', name: 'Grit', type: 'upgrade' },
		{ id: 10, class_name: 'ability_slam', name: 'Slam', type: 'ability' }
	]
};

describe('entity snapshot cache', () => {
	let directory: string;
	beforeEach(async () => {
		directory = await mkdtemp(join(tmpdir(), 'deadlog-snapshot-'));
		vi.stubEnv('CHANGELOGS_DIR', directory);
		mocks.fetch.mockReset();
		vi.spyOn(console, 'warn').mockImplementation(() => undefined);
	});
	afterEach(async () => {
		vi.unstubAllEnvs();
		vi.restoreAllMocks();
		await rm(directory, { recursive: true, force: true });
	});

	it('resolves the path inside the changelog directory', () => {
		expect(entitySnapshotPath()).toBe(join(directory, 'entities.json'));
	});

	it('preserves api order, which decides slug collisions downstream', () => {
		const written = JSON.parse(serializeEntitySnapshot(snapshot));
		expect(written.heroes.map((hero: { id: number }) => hero.id)).toEqual([2, 1]);
		expect(written.items.map((item: { id: number }) => item.id)).toEqual([20, 10]);
	});

	it('preserves hero image key order', () => {
		const written = JSON.parse(serializeEntitySnapshot(snapshot));
		expect(Object.keys(written.heroes[0].images)).toEqual(['icon_b', 'icon_a']);
	});

	it('round-trips through the file unchanged', async () => {
		await writeEntitySnapshot(snapshot);
		await expect(readEntitySnapshot()).resolves.toEqual(snapshot);
	});

	it('refreshes the file when the api answers', async () => {
		mocks.fetch.mockResolvedValue(snapshot);
		await expect(loadEntitySnapshot()).resolves.toEqual(snapshot);
		const raw = await readFile(join(directory, 'entities.json'), 'utf-8');
		expect(raw).toBe(serializeEntitySnapshot(snapshot));
	});

	it('falls back to the committed file when the api is unreachable', async () => {
		await writeEntitySnapshot(snapshot);
		mocks.fetch.mockRejectedValue(new Error('getaddrinfo ENOTFOUND'));
		await expect(loadEntitySnapshot()).resolves.toEqual(snapshot);
		expect(console.warn).toHaveBeenCalledWith(
			expect.stringContaining('getaddrinfo ENOTFOUND')
		);
	});

	it('leaves the committed file intact when the api is unreachable', async () => {
		await writeEntitySnapshot(snapshot);
		mocks.fetch.mockRejectedValue(new Error('offline'));
		await loadEntitySnapshot();
		const raw = await readFile(join(directory, 'entities.json'), 'utf-8');
		expect(raw).toBe(serializeEntitySnapshot(snapshot));
	});

	it('rethrows when the api is unreachable and nothing is cached', async () => {
		const failure = new Error('getaddrinfo ENOTFOUND');
		mocks.fetch.mockRejectedValue(failure);
		await expect(loadEntitySnapshot()).rejects.toBe(failure);
	});

	it('rethrows rather than trusting a corrupt snapshot', async () => {
		await writeFile(join(directory, 'entities.json'), '{"heroes":[{"id":"nope"}]}');
		const failure = new Error('offline');
		mocks.fetch.mockRejectedValue(failure);
		await expect(loadEntitySnapshot()).rejects.toBe(failure);
	});
});
