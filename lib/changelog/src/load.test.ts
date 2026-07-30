import { describe, expect, it } from 'vitest';
import { extractPreviewImage } from './load';
import { parseStructure } from './extract';

const imagesIn = (content: string) => parseStructure(content).images;

describe('extractPreviewImage', () => {
	it('returns the first non-favicon image', () => {
		expect(
			extractPreviewImage([
				'https://store.steampowered.com/favicon.ico',
				'https://cdn.example.com/patch-header.jpg?version=2'
			])
		).toBe('https://cdn.example.com/patch-header.jpg?version=2');
	});

	it('ignores malformed and non-http image sources', () => {
		expect(
			extractPreviewImage(['/local/header.jpg', 'javascript:alert(1)'])
		).toBeUndefined();
	});

	it('skips an entity portrait, which is chrome rather than patch content', () => {
		const content = [
			'# General Changes',
			'[[!:https://cdn.example.com/screenshot.jpg]]((map changes))',
			'',
			'# Hero Changes',
			'=hero:abrams:',
			'[[!:https://cdn.example.com/abrams_sm.webp]]',
			'## Abrams',
			'- Base health increased',
			'='
		].join('\n');

		expect(imagesIn(content)).toEqual(['https://cdn.example.com/screenshot.jpg']);
	});
});
