import { describe, expect, it } from 'vitest';
import { canonicalOriginRedirect } from './canonical-origin';

describe('canonicalOriginRedirect', () => {
	it.each([
		['http://deadlog.io/heroes?role=tank', 'https://deadlog.io/heroes?role=tank'],
		['http://www.deadlog.io/items', 'https://deadlog.io/items'],
		['https://www.deadlog.io/change/2026/05-22', 'https://deadlog.io/change/2026/05-22']
	])('redirects %s to the canonical origin', (input, expected) => {
		const response = canonicalOriginRedirect(new Request(input));

		expect(response?.status).toBe(308);
		expect(response?.headers.get('location')).toBe(expected);
	});

	it('leaves the canonical origin and development hosts alone', () => {
		expect(
			canonicalOriginRedirect(new Request('https://deadlog.io/heroes'))
		).toBeUndefined();
		expect(
			canonicalOriginRedirect(new Request('http://localhost:5173/'))
		).toBeUndefined();
	});
});
