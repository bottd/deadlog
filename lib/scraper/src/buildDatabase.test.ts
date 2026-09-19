import { afterEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createClient } from '@libsql/client';
import { buildDatabaseFromMog } from './buildDatabase';
import type { EntitySnapshot } from './api';

vi.mock('deadlock-api-client', () => ({
	Configuration: vi.fn(),
	PatchesApi: class {
		async bigPatchDays() {
			return { data: [] };
		}
	}
}));

let directory: string | undefined;
afterEach(async () => {
	if (directory) await rm(directory, { recursive: true, force: true });
	vi.restoreAllMocks();
});

describe('database artifact publication', () => {
	it('batches rows, rolls back a failed build, and preserves the published artifact', async () => {
		directory = await mkdtemp(join(tmpdir(), 'deadlog-build-'));
		const changelogsDir = join(directory, 'notes');
		const outputDir = join(directory, 'output');
		await mkdir(changelogsDir);
		const note = (published: string) =>
			[
				'``meta:',
				'title "Test patch"',
				'thread_id "1"',
				`published "${published}"`,
				'author "Yoshi"',
				'content_text "Balance change"',
				'``',
				'# General Changes',
				'- Balance change'
			].join('\n');
		const snapshot: EntitySnapshot = {
			heroes: Array.from({ length: 60 }, (_, index) => ({
				id: index + 1,
				name: `Prototype ${index}`,
				class_name: `hero_${index}`,
				images: { icon_image_small: 'https://images.example/hero.webp' },
				player_selectable: false
			})),
			items: []
		};
		vi.spyOn(console, 'log').mockImplementation(() => undefined);
		await writeFile(join(changelogsDir, 'patch.mg'), note('2026-09-01T20:00:00.000Z'));
		const options = { outputDir, changelogsDir, snapshot };
		const result = await buildDatabaseFromMog(options);
		expect(result.patchCount).toBe(1);
		const published = await readFile(result.path);
		const client = createClient({ url: `file:${result.path}` });
		try {
			expect(
				(await client.execute('SELECT COUNT(*) AS count FROM heroes')).rows[0].count
			).toBe(60);
		} finally {
			client.close();
		}

		// Invalid publication fails after the staged hero batches have been inserted.
		await writeFile(join(changelogsDir, 'patch.mg'), note('invalid-date'));
		await expect(buildDatabaseFromMog(options)).rejects.toThrow();
		expect(await readFile(result.path)).toEqual(published);
		const staged = createClient({ url: `file:${result.path}.building` });
		try {
			expect(
				(await staged.execute('SELECT COUNT(*) AS count FROM heroes')).rows[0].count
			).toBe(0);
		} finally {
			staged.close();
		}
	}, 60_000);
});
