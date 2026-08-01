import { describe, expect, it } from 'vitest';
import { deduplicateChangelogs, extractPreviewImage } from './load';
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

describe('deduplicateChangelogs', () => {
	it('prefers a forum-backed changelog for a shared Steam source', () => {
		const standalone = {
			slug: '2026/gameplay-03-06',
			aliases: ['2026/gameplay-03-06'],
			metadata: { steam_gid: 'steam-1' }
		};
		const forum = {
			slug: '2026/03-06',
			aliases: ['2026/03-06'],
			metadata: { steam_gid: 'steam-1', thread_id: 'forum-1' }
		};
		const other = {
			slug: '2026/minor-03-06',
			aliases: ['2026/minor-03-06'],
			metadata: { steam_gid: 'steam-2' }
		};

		expect(deduplicateChangelogs([standalone, forum, other])).toEqual([
			{ ...forum, aliases: ['2026/03-06', '2026/gameplay-03-06'] },
			other
		]);
	});

	it('merges records connected by either source identifier', () => {
		const forumOnly = {
			slug: 'forum',
			aliases: ['forum'],
			metadata: { thread_id: 'forum-1' }
		};
		const steamOnly = {
			slug: 'steam',
			aliases: ['steam'],
			metadata: { steam_gid: 'steam-1' }
		};
		const linked = {
			slug: 'linked',
			aliases: ['linked'],
			metadata: { thread_id: 'forum-1', steam_gid: 'steam-1' }
		};

		expect(deduplicateChangelogs([forumOnly, steamOnly, linked])).toEqual([
			{ ...linked, aliases: ['linked', 'forum', 'steam'] }
		]);
	});
});
