import { describe, expect, it } from 'vitest';
import { extractPreviewImage } from './load';

describe('extractPreviewImage', () => {
	it('returns the first non-favicon image embed', () => {
		const content = `
@image https://store.steampowered.com/favicon.ico
Steam
@end

@image https://cdn.example.com/patch-header.jpg?version=2
Patch header
@end
`;

		expect(extractPreviewImage(content)).toBe(
			'https://cdn.example.com/patch-header.jpg?version=2'
		);
	});

	it('ignores malformed and non-http image sources', () => {
		const content = `
@image /local/header.jpg
Local image
@end

@image javascript:alert(1)
Invalid image
@end
`;

		expect(extractPreviewImage(content)).toBeUndefined();
	});
});
