import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadAllChangelogs, changelogSourceUrl } from '@deadlog/changelog';
import { PublicationSchema, type Publication } from '@deadlog/contracts';

export const repositoryRoot = resolve(import.meta.dirname, '..');
const fixtureRoot = resolve(repositoryRoot, 'fixtures/mcp/patches');
const sha256 = (data: string | Uint8Array) =>
	createHash('sha256').update(data).digest('hex');

export async function exportFixture(now = new Date()): Promise<Publication> {
	const loaded = await loadAllChangelogs(fixtureRoot);
	const patches = await Promise.all(
		loaded.map(async (patch) => ({
			id: patch.metadata.thread_id ?? patch.metadata.steam_gid ?? patch.slug,
			title: patch.metadata.title,
			slug: patch.slug,
			sourceUrl: changelogSourceUrl(patch.metadata),
			publishedAt: new Date(patch.metadata.published).toISOString(),
			author: patch.metadata.author,
			text: patch.plainText,
			aliases: patch.aliases,
			revision: {
				hash: sha256(await readFile(patch.filepath)),
				basis: 'deadlog_archive_file' as const,
				upstreamRevision: null
			}
		}))
	);
	patches.sort((a, b) => a.id.localeCompare(b.id));
	return PublicationSchema.parse({
		dataset: {
			schemaVersion: 1,
			revision: sha256(JSON.stringify(patches)),
			ready: true,
			publishedAt: now.toISOString(),
			coverage: 'fixture-only',
			patchIds: patches.map((patch) => patch.id)
		},
		patches
	});
}

async function main() {
	if (process.argv.includes('--capture')) {
		await mkdir(resolve(fixtureRoot, '2026'), { recursive: true });
		for (const date of ['08-22', '09-16']) {
			await copyFile(
				resolve(repositoryRoot, `app/changelogs/2026/${date}.mg`),
				resolve(fixtureRoot, `2026/${date}.mg`)
			);
		}
	}
	const fixture = await exportFixture();
	if (process.argv.includes('--capture')) {
		await writeFile(
			resolve(fixtureRoot, 'manifest.json'),
			JSON.stringify(
				{
					capturedAt: new Date().toISOString(),
					origin: 'Deadlog tracked archive',
					patches: fixture.patches.map((patch) => ({
						id: patch.id,
						originalPath: `app/changelogs/${patch.slug}.mg`,
						snapshotPath: `${patch.slug}.mg`,
						archiveSha256: patch.revision.hash,
						sourceUrl: patch.sourceUrl
					}))
				},
				null,
				'\t'
			) + '\n'
		);
	}
	await mkdir(resolve(repositoryRoot, 'mcp/.generated'), { recursive: true });
	await writeFile(
		resolve(repositoryRoot, 'mcp/.generated/fixture.json'),
		JSON.stringify(fixture, null, '\t') + '\n'
	);
	console.log(
		`Exported ${fixture.patches.length} real patches; dataset ${fixture.dataset.revision}`
	);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url))
	await main();
