import { describe, expect, it } from 'vitest';
import { PublicationSchema } from '@deadlog/contracts';
import { exportFixture } from './export-mcp-fixture';

describe('real fixture publication envelope', () => {
	it('preserves canonical identity and sources without live API access', async () => {
		const fixture = await exportFixture();
		expect(fixture.dataset.patchIds).toEqual(['162571', '162572']);
		expect(fixture.patches[1].slug).toBe('2026/09-16');
		expect(fixture.patches[1].text).toContain('Unstable Rift');
		expect(fixture.patches[1].sourceUrl).toContain('1844115010490072');
		expect(
			PublicationSchema.safeParse({
				...fixture,
				dataset: { ...fixture.dataset, patchIds: ['wrong'] }
			}).success
		).toBe(false);
	});
	it('does not confuse fresh export time with a different content revision', async () => {
		const a = await exportFixture(new Date('2026-09-29T00:00:00Z'));
		const b = await exportFixture(new Date('2026-09-29T01:00:00Z'));
		expect(a.dataset.revision).toBe(b.dataset.revision);
		expect(a.dataset.publishedAt).not.toBe(b.dataset.publishedAt);
	});
});
