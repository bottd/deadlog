import { describe, expect, it } from 'vitest';

import type { ChangelogPost } from './api';
import type { SteamPatchNote } from './api/steam';
import { extractSteamGidFromUnfurl } from './api/steam';
import { matchSteamNotesToForumPosts } from './pipeline';

function forumPost(postId: string, title: string): ChangelogPost {
	return {
		postId,
		title,
		url: `https://forums.playdeadlock.com/threads/update.${postId}/`,
		author: 'Yoshi',
		pubDate: '2024-10-18T10:00:00Z'
	};
}

function steamNote(gid: string, title: string): SteamPatchNote {
	return {
		gid,
		title,
		date: '2024-10-18T10:00:00Z',
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

	it('matches a single same-day pair when source titles use different wording', () => {
		const result = matchSteamNotesToForumPosts(
			[forumPost('forum', 'Gameplay Update - 03-06-2026')],
			[steamNote('steam', '03-06-2026 Update')]
		);

		expect(result.steamByForumPostId.get('forum')?.gid).toBe('steam');
		expect(result.unmatchedSteamNotes).toEqual([]);
	});

	it('cannot match a Steam note whose title carries no date', () => {
		// The real 02-25-2025 case: Steam called it "Map Rework Update". Date-keyed
		// matching has nothing to key on, which is why the gid fallback exists.
		const result = matchSteamNotesToForumPosts(
			[forumPost('56683', '02-25-2025 Update')],
			[steamNote('530965072572320687', 'Map Rework Update')]
		);

		expect(result.steamByForumPostId.size).toBe(0);
		expect(result.unmatchedSteamNotes.map((note) => note.gid)).toEqual([
			'530965072572320687'
		]);
	});
});

describe('extractSteamGidFromUnfurl', () => {
	it('recovers the gid a dateless Steam title cannot be matched by', () => {
		const unfurl = `<div class="bbCodeBlock bbCodeBlock--unfurl"><h3><a href="https://store.steampowered.com/news/app/1422450/view/530965072572320687">Deadlock - Map Rework Update - Steam News</a></h3></div>`;

		expect(extractSteamGidFromUnfurl(unfurl)).toBe('530965072572320687');
	});

	it('returns null when the post has no Steam unfurl', () => {
		expect(extractSteamGidFromUnfurl('<p>- Base damage increased</p>')).toBeNull();
	});
});
