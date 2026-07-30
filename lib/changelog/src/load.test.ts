import { describe, expect, it } from 'vitest';
import { extractPreviewImage } from './load';

describe('extractPreviewImage', () => {
	it('returns the first non-favicon image embed', () => {
		const content = `
[[!:https://store.steampowered.com/favicon.ico]]((Steam))

[[!:https://cdn.example.com/patch-header.jpg?version=2]]((Patch header))
`;

		expect(extractPreviewImage(content)).toBe(
			'https://cdn.example.com/patch-header.jpg?version=2'
		);
	});

	it('ignores malformed and non-http image sources', () => {
		const content = `
[[!:/local/header.jpg]]((Local image))

[[!:javascript:alert(1)]]((Invalid image))
`;

		expect(extractPreviewImage(content)).toBeUndefined();
	});
});
