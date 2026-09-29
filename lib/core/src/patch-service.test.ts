import { describe, expect, it } from 'vitest';
import { MODEL_RESULT_BYTES, type Dataset, type PatchRecord } from '@deadlog/contracts';
import { getPatch, toolPayload, type PatchRepository } from './patch-service';

const dataset: Dataset = {
	schemaVersion: 1,
	revision: 'a'.repeat(64),
	ready: true,
	publishedAt: '2026-09-29T00:00:00.000Z',
	coverage: 'fixture-only',
	patchIds: ['162572']
};
const patch: PatchRecord = {
	id: '162572',
	title: 'Minor Update',
	slug: '2026/09-16',
	sourceUrl: 'https://forums.playdeadlock.com/threads/162572/',
	publishedAt: '2026-09-16T20:16:43.000Z',
	author: 'IceFrog',
	text: 'A real-shaped synthetic test bullet.',
	aliases: [],
	revision: {
		hash: 'b'.repeat(64),
		basis: 'deadlog_archive_file',
		upstreamRevision: null
	}
};
const repository = (overrides: Partial<PatchRepository> = {}): PatchRepository => ({
	getDataset: async () => dataset,
	getPatch: async () => patch,
	getLatest: async () => patch,
	...overrides
});

describe('patch service integrity', () => {
	it('does not return mixed data when publication changes during the read', async () => {
		let reads = 0;
		const result = await getPatch(
			repository({
				getDataset: async () => (++reads === 1 ? dataset : { ...dataset, ready: false })
			}),
			{ latest: true }
		);
		expect(result.status === 'error' && result.error.code).toBe('dataset_unavailable');
	});
	it('preserves evidence and separates retrieval from unknown source freshness', async () => {
		const result = await getPatch(
			repository(),
			{ latest: true },
			{ now: () => new Date('2026-09-29T01:00:00Z') }
		);
		expect(result.status).toBe('success');
		if (result.status !== 'success') throw new Error('Expected success');
		expect(result.sourceUpdatedAt).toBeNull();
		expect(result.patch.effectiveAt).toBeNull();
		expect(result.retrievedAt).not.toBe(result.dataset.publishedAt);
		expect(toolPayload(result).content[0].text).toContain(patch.sourceUrl);
		expect(result.limitations.join(' ')).toContain('Fixture-only');
	});
	it('never describes unavailable storage as an empty success', async () => {
		for (const [repo, code] of [
			[repository({ getDataset: async () => null }), 'dataset_unavailable'],
			[repository({ getPatch: async () => null }), 'patch_not_found'],
			[
				repository({
					getDataset: async () => {
						throw new Error('secret diagnostic');
					}
				}),
				'storage_failure'
			]
		] as const) {
			const result = await getPatch(repo, { patchId: '162572' });
			expect(result.status === 'error' && result.error.code).toBe(code);
			expect(JSON.stringify(result)).not.toContain('secret diagnostic');
			expect(toolPayload(result).isError).toBe(true);
		}
	});
	it('bounds multibyte evidence without cutting fragments', async () => {
		const text = '漢'.repeat(40_000);
		const result = await getPatch(
			repository({ getLatest: async () => ({ ...patch, text }) }),
			{ latest: true }
		);
		expect(
			new TextEncoder().encode(JSON.stringify(toolPayload(result))).byteLength
		).toBeLessThanOrEqual(MODEL_RESULT_BYTES);
		if (result.status !== 'success') throw new Error('Expected success');
		expect(result.sections).toEqual([]);
		expect(result.omittedSections).toBe(1);
		expect(result.completeness).toBe('partial-patch');
	});
	it('rejects stored unsafe links', async () => {
		const result = await getPatch(
			repository({
				getLatest: async () => ({ ...patch, sourceUrl: 'https://evil.test' })
			}),
			{ latest: true }
		);
		expect(result.status === 'error' && result.error.code).toBe('storage_failure');
	});
	it('returns bounded timeout rather than waiting indefinitely', async () => {
		const result = await getPatch(
			repository({ getDataset: () => new Promise(() => undefined) }),
			{ latest: true },
			{ deadlineMs: 5 }
		);
		expect(result.status === 'error' && result.error.code).toBe('deadline_exceeded');
	});
});
