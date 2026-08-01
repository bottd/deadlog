import { describe, expect, it } from 'vitest';

import type { ChangelogPost } from './api';
import type { SteamAnnouncement } from './api/steam';
import { matchSteamNotesToForumPosts } from './pipeline';

function forumPost(
	postId: string,
	title: string,
	pubDate = '2024-10-18T10:00:00Z'
): ChangelogPost {
	return {
		postId,
		title,
		url: `https://forums.playdeadlock.com/threads/update.${postId}/`,
		author: 'Yoshi',
		pubDate
	};
}

function steamNote(
	gid: string,
	title: string,
	date = '2024-10-18T10:00:00Z'
): SteamAnnouncement {
	return {
		gid,
		title,
		date,
		author: 'Yoshi',
		content: `Content for ${gid}`
	};
}

describe('matchSteamNotesToForumPosts', () => {
	it('matches multiple same-day notes by normalized full title regardless of order', () => {
		const posts = [
			forumPost('first', '10-18-2024 Update'),
			forumPost('second', '10-18-2024 Update 2')
		];
		const notes = [
			steamNote('gid-second', '10-18-2024: UPDATE 2'),
			steamNote('gid-first', '10-18-2024 Update')
		];

		const result = matchSteamNotesToForumPosts(posts, notes);

		expect(result.steamByForumPostId.get('first')?.gid).toBe('gid-first');
		expect(result.steamByForumPostId.get('second')?.gid).toBe('gid-second');
		expect(result.unmatchedSteamNotes).toEqual([]);
	});

	it('leaves additional and ambiguous same-day notes unmatched instead of consuming a date', () => {
		const exact = matchSteamNotesToForumPosts(
			[forumPost('first', '10-18-2024 Update')],
			[
				steamNote('gid-first', '10-18-2024 Update'),
				steamNote('gid-second', '10-18-2024 Update 2')
			]
		);

		expect(exact.steamByForumPostId.get('first')?.gid).toBe('gid-first');
		expect(exact.unmatchedSteamNotes.map((note) => note.gid)).toEqual(['gid-second']);

		const ambiguous = matchSteamNotesToForumPosts(
			[
				forumPost('first', 'Hotfix A - 10-18-2024'),
				forumPost('second', 'Hotfix B - 10-18-2024')
			],
			[
				steamNote('gid-third', 'Patch C - 10-18-2024'),
				steamNote('gid-fourth', 'Patch D - 10-18-2024')
			]
		);

		expect(ambiguous.steamByForumPostId.size).toBe(0);
		expect(ambiguous.unmatchedSteamNotes.map((note) => note.gid)).toEqual([
			'gid-third',
			'gid-fourth'
		]);
	});

	it('does not match an exact title reused on a different day', () => {
		const result = matchSteamNotesToForumPosts(
			[forumPost('forum', 'Matchmaking Update', '2026-07-31T12:00:00Z')],
			[steamNote('old', 'Matchmaking Update', '2026-07-29T12:00:00Z')]
		);

		expect(result.steamByForumPostId.size).toBe(0);
		expect(result.unmatchedSteamNotes.map((note) => note.gid)).toEqual(['old']);
	});

	it('matches a single dated pair when source titles and publication times differ', () => {
		const result = matchSteamNotesToForumPosts(
			[forumPost('forum', '05-22-2026 Update', '2026-05-23T00:11:11Z')],
			[steamNote('steam', 'Gameplay Update - 05-22-2026', '2026-05-22T21:51:02Z')]
		);

		expect(result.steamByForumPostId.get('forum')?.gid).toBe('steam');
		expect(result.unmatchedSteamNotes).toEqual([]);
	});

	it('matches a dateless Steam note by its nearby publication time', () => {
		const result = matchSteamNotesToForumPosts(
			[forumPost('56683', '02-25-2025 Update', '2025-02-25T21:51:13Z')],
			[steamNote('530965072572320687', 'Map Rework Update', '2025-02-25T21:49:19Z')]
		);

		expect(result.steamByForumPostId.get('56683')?.gid).toBe('530965072572320687');
		expect(result.unmatchedSteamNotes).toEqual([]);
	});

	it('leaves ambiguous dated updates unmatched outside the time window', () => {
		const result = matchSteamNotesToForumPosts(
			[
				forumPost('first', '10-18-2024 Update A', '2024-10-19T02:00:00Z'),
				forumPost('second', '10-18-2024 Update B', '2024-10-19T02:00:00Z')
			],
			[
				steamNote('third', 'Gameplay Update - 10-18-2024', '2024-10-18T20:00:00Z'),
				steamNote('fourth', 'Ranked Update - 10-18-2024', '2024-10-18T20:00:00Z')
			]
		);

		expect(result.steamByForumPostId.size).toBe(0);
		expect(result.unmatchedSteamNotes.map((note) => note.gid)).toEqual([
			'third',
			'fourth'
		]);
	});

	it('does not match unrelated dated updates published far apart', () => {
		const result = matchSteamNotesToForumPosts(
			[forumPost('forum', '07-31-2026 Update', '2026-07-31T23:00:00Z')],
			[steamNote('ranked', 'Ranked Update - 07-31-2026', '2026-07-31T12:00:00Z')]
		);

		expect(result.steamByForumPostId.size).toBe(0);
		expect(result.unmatchedSteamNotes.map((note) => note.gid)).toEqual(['ranked']);
	});

	it('does not match unrelated announcements merely because they share a date', () => {
		const result = matchSteamNotesToForumPosts(
			[forumPost('forum', '07-31-2026 Update', '2026-07-31T11:55:00Z')],
			[steamNote('news', 'Community News', '2026-07-31T12:00:00Z')]
		);

		expect(result.steamByForumPostId.size).toBe(0);
		expect(result.unmatchedSteamNotes.map((note) => note.gid)).toEqual(['news']);
	});
});
