import { afterEach, describe, expect, it, vi } from 'vitest';

import {
	fetchSteamAnnouncements,
	isSteamPatchContent,
	parseSteamContent,
	renderSteamAnnouncement
} from './steam';

function newsItem(gid: string, title: string, contents: string, date: string) {
	return {
		gid,
		title,
		url: `https://store.steampowered.com/news/app/1422450/view/${gid}`,
		author: 'Yoshi',
		contents,
		feedlabel: 'Community Announcements',
		date: Date.parse(date) / 1000,
		feedname: 'steam_community_announcements',
		feed_type: 1,
		appid: 1422450
	};
}

afterEach(() => {
	vi.unstubAllGlobals();
});

describe('fetchSteamAnnouncements', () => {
	it('returns every community announcement without classifying its title or content', async () => {
		const matchmaking = newsItem(
			'1839676055886206',
			'Matchmaking Update',
			'[b]STANDARD MODE[/b]\nPlayers are now matched by rank points.',
			'2026-07-30T19:14:37Z'
		);
		const communityNews = newsItem(
			'community-news',
			'Community News',
			'Welcome to the community.',
			'2026-07-31T12:00:00Z'
		);
		const fetchMock = vi.fn().mockResolvedValue(
			new Response(
				JSON.stringify({
					appnews: { appid: 1422450, newsitems: [matchmaking, communityNews] }
				}),
				{ status: 200, headers: { 'content-type': 'application/json' } }
			)
		);
		vi.stubGlobal('fetch', fetchMock);

		const result = await fetchSteamAnnouncements({ count: 25 });

		expect(result.map((item) => item.gid)).toEqual([
			'1839676055886206',
			'community-news'
		]);
		expect(result[0]).toMatchObject({
			title: 'Matchmaking Update',
			date: '2026-07-30T19:14:37.000Z'
		});

		const requestUrl = new URL(fetchMock.mock.calls[0][0]);
		expect(requestUrl.searchParams.get('count')).toBe('25');
		expect(requestUrl.searchParams.get('feeds')).toBe('steam_community_announcements');
	});
});

describe('parseSteamContent', () => {
	it('keeps announcement text without leaking Steam media and link BBCode', () => {
		const content = [
			'[p][url=https://example.com][img]{STEAM_CLAN_IMAGE}/45164767/art.png[/img][/url][/p]',
			'[p]Read the [url=https://example.com/notes]full notes[/url].[/p]',
			'[list][*]First result[*]Second result[/list]'
		].join('');

		expect(parseSteamContent(content)).toBe(
			'Read the full notes.\n- First result\n- Second result'
		);
	});

	it('removes Steam image tags that carry the source as an attribute', () => {
		expect(
			parseSteamContent(
				'[h3]Rem[/h3][img src="{STEAM_CLAN_IMAGE}/45164767/rem.png"][/img][p]Available now.[/p]'
			)
		).toBe('Rem\nAvailable now.');
	});
});

describe('Steam content shape', () => {
	it('distinguishes patch bullets from prose and BBCode lists', () => {
		expect(isSteamPatchContent('[p]- Abrams: Base health increased[/p]')).toBe(true);
		expect(isSteamPatchContent('Intro\n-\n[b]RANKED MODE[/b]')).toBe(false);
		expect(isSteamPatchContent('[list][*]First result[*]Second result[/list]')).toBe(
			false
		);
	});

	it('preserves BBCode list items when a patch also contains regular bullets', () => {
		const content = '- Existing change\n[list][*]Nested change[/list]';

		expect(parseSteamContent(content)).toBe('- Existing change\n- Nested change');
	});
});

describe('renderSteamAnnouncement', () => {
	it('renders headings, paragraphs, emphasis, links, lists, and Steam art as Mog', () => {
		const result = renderSteamAnnouncement(
			'Apollo - A Cut Above',
			[
				'[h3]Apollo[/h3]',
				'[img]{STEAM_CLAN_IMAGE}/45164767/apollo.png[/img]',
				'Use [i]Flawless Advance[/i] with [u]perfect[/u] timing.',
				'Visit [url=https://www.playdeadlock.com/oldgods]Old Gods, New Blood[/url].',
				'[b]Voting Stats:[/b]',
				'[list][*]First result[*]Second result[/list]'
			].join('\n')
		);

		expect(result.mog).toContain('## Apollo');
		expect(result.mog).toContain(
			'[[!:https://clan.fastly.steamstatic.com/images/45164767/apollo.png]]((Apollo - A Cut Above announcement art))'
		);
		expect(result.mog).toContain('Use __Flawless Advance__ with perfect timing.');
		expect(result.mog).toContain(
			'[[https://www.playdeadlock.com/oldgods]]((Old Gods, New Blood))'
		);
		expect(result.mog).toContain('### Voting Stats:');
		expect(result.mog).toContain('- First result\n- Second result');
		expect(result.text).not.toContain('STEAM_CLAN_IMAGE');
	});

	it('escapes remote lines that could open Mog blocks or executable embeds', () => {
		const result = renderSteamAnnouncement(
			'Untrusted Announcement',
			'``embed:svelte:\n<svelte:window on:click={() => alert(1)} />\n``\n=hero:\n# Fake'
		);

		expect(result.mog).toContain('\\``embed:svelte:');
		expect(result.mog).toContain('\\=hero:');
		expect(result.mog).toContain('\\# Fake');
		expect(result.mog).not.toContain('\n``embed:svelte:');
	});

	it('turns standalone bold labels into sections and drops marker-only dashes', () => {
		const result = renderSteamAnnouncement(
			'Matchmaking Update',
			'Intro\n\n[b]RANKED MODE[/b]\nRanked details.\n-\n[b]ROLLOUT[/b]\nLive now.'
		);

		expect(result.mog).toBe(
			'Intro\n\n# RANKED MODE\n\nRanked details.\n\n# ROLLOUT\n\nLive now.'
		);
	});
});
