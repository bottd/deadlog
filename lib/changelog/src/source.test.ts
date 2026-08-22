import { describe, expect, it } from 'vitest';
import { changelogSourceUrl } from './source';

describe('changelogSourceUrl', () => {
	it('prefers the official Steam resolver for dual-source posts', () => {
		expect(
			changelogSourceUrl({ thread_id: '135477', steam_gid: '1833334318572828' })
		).toBe(
			'https://store.steampowered.com/news/externalpost/steam_community_announcements/1833334318572828'
		);
	});

	it('links forum-only posts through their stable thread id', () => {
		expect(changelogSourceUrl({ thread_id: '135477' })).toBe(
			'https://forums.playdeadlock.com/threads/135477/'
		);
	});

	it('rejects changelogs without an original source', () => {
		expect(() => changelogSourceUrl({})).toThrow(/no forum or Steam source identifier/);
	});
});
