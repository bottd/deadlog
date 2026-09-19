import { describe, it, expect } from 'vitest';
import { resolveSlugRoute } from './slug-redirects';

describe('resolveSlugRoute', () => {
	it('passes canonical entity slugs through', () => {
		expect(resolveSlugRoute('/hero/seven')).toEqual({ kind: 'ok' });
		expect(resolveSlugRoute('/item/decay')).toEqual({ kind: 'ok' });
		expect(resolveSlugRoute('/ability/shoulder-charge')).toEqual({ kind: 'ok' });
	});

	it('reports article variants as unknown instead of inventing a redirect', () => {
		expect(resolveSlugRoute('/hero/the-seven')).toEqual({ kind: 'unknown' });
		expect(resolveSlugRoute('/item/the-decay')).toEqual({ kind: 'unknown' });
		expect(resolveSlugRoute('/hero/a-seven')).toEqual({ kind: 'unknown' });
	});

	it('matches slugs exactly, like every other route on the site', () => {
		expect(resolveSlugRoute('/hero/SEVEN')).toEqual({ kind: 'unknown' });
		expect(resolveSlugRoute('/item/Decay')).toEqual({ kind: 'unknown' });
		expect(resolveSlugRoute('/change/2026/GAMEPLAY-03-06')).toEqual({ kind: 'unknown' });
	});

	it('keeps a real article-prefixed slug canonical', () => {
		expect(resolveSlugRoute('/hero/the-doorman')).toEqual({ kind: 'ok' });
		expect(resolveSlugRoute('/hero/doorman')).toEqual({ kind: 'unknown' });
	});

	it('serves unreleased items that patch notes still link', () => {
		expect(resolveSlugRoute('/item/enduring-spirit')).toEqual({ kind: 'ok' });
	});

	it('reports unknown slugs so the hook can 404 before a load runs', () => {
		expect(resolveSlugRoute('/hero/bogus-hero-xyz')).toEqual({ kind: 'unknown' });
		expect(resolveSlugRoute('/item/nope-xyz')).toEqual({ kind: 'unknown' });
		expect(resolveSlugRoute('/ability/nope-xyz')).toEqual({ kind: 'unknown' });
		expect(resolveSlugRoute('/change/2026/nope')).toEqual({ kind: 'unknown' });
	});

	it('redirects changelog aliases to their canonical patch', () => {
		expect(resolveSlugRoute('/change/2026/gameplay-03-06')).toEqual({
			kind: 'redirect',
			path: '/change/2026/03-06'
		});
		expect(resolveSlugRoute('/change/2026/03-06')).toEqual({ kind: 'ok' });
	});

	it('leaves every other route alone', () => {
		for (const path of ['/', '/archive', '/heroes', '/items', '/feed-index.json']) {
			expect(resolveSlugRoute(path)).toEqual({ kind: 'ok' });
		}
	});

	it('reports malformed percent-escapes separately so they never reach error()', () => {
		for (const path of ['/hero/%zz', '/item/%', '/change/%E0%A4', '/ability/%2']) {
			expect(resolveSlugRoute(path)).toEqual({ kind: 'malformed' });
		}
	});

	it('decodes percent-encoded slugs', () => {
		expect(resolveSlugRoute('/ability/shoulder%2Dcharge')).toEqual({ kind: 'ok' });
		expect(resolveSlugRoute('/change/2026/gameplay%2D03%2D06')).toEqual({
			kind: 'redirect',
			path: '/change/2026/03-06'
		});
	});
});
