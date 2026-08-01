import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

const apiMocks = vi.hoisted(() => ({
	fetchHeroes: vi.fn(),
	fetchItems: vi.fn(),
	scrapeChangelogPage: vi.fn(),
	scrapeMultipleChangelogPosts: vi.fn(),
	fetchSteamAnnouncements: vi.fn()
}));

vi.mock('./api', async (importOriginal) => ({
	...(await importOriginal<typeof import('./api')>()),
	...apiMocks
}));

describe('scrapeChangelogs', () => {
	let changelogsDir: string;

	beforeEach(async () => {
		changelogsDir = await mkdtemp(join(tmpdir(), 'deadlog-changelogs-'));
		vi.stubEnv('CHANGELOGS_DIR', changelogsDir);
		vi.resetModules();

		apiMocks.fetchHeroes.mockReset().mockResolvedValue([]);
		apiMocks.fetchItems.mockReset().mockResolvedValue([]);
		apiMocks.scrapeChangelogPage.mockReset().mockResolvedValue([]);
		apiMocks.scrapeMultipleChangelogPosts.mockReset().mockResolvedValue([]);
		apiMocks.fetchSteamAnnouncements.mockReset().mockResolvedValue([
			{
				gid: '1839676055886206',
				title: 'Matchmaking Update',
				date: '2026-07-30T19:14:37.000Z',
				author: 'Yoshi',
				content: '[b]STANDARD MODE[/b]\nPlayers are now matched by rank points.'
			}
		]);

		vi.spyOn(console, 'log').mockImplementation(() => undefined);
		vi.spyOn(console, 'warn').mockImplementation(() => undefined);
	});

	afterEach(async () => {
		vi.unstubAllEnvs();
		vi.restoreAllMocks();
		await rm(changelogsDir, { recursive: true, force: true });
	});

	it('writes a Steam-only announcement whose title has no date', async () => {
		const { scrapeChangelogs } = await import('./pipeline');

		await scrapeChangelogs();

		const content = await readFile(
			join(changelogsDir, '2026', 'matchmaking.mg'),
			'utf-8'
		);
		expect(content).toContain('title "Matchmaking Update"');
		expect(content).toContain('steam_gid "1839676055886206"');
		expect(content).toContain('published "2026-07-30T19:14:37.000Z"');
		expect(content).toContain('Players are now matched by rank points.');
		expect(content).toContain('# STANDARD MODE');
		expect(content).not.toContain('# General Changes');
	});

	it('does not overwrite announcements that normalize to the same path', async () => {
		apiMocks.fetchSteamAnnouncements.mockResolvedValue([
			{
				gid: 'first',
				title: 'Matchmaking Update',
				date: '2026-07-30T19:14:37.000Z',
				author: 'Yoshi',
				content: 'First announcement.'
			},
			{
				gid: 'second',
				title: 'Matchmaking Update',
				date: '2026-08-01T19:14:37.000Z',
				author: 'Yoshi',
				content: 'Second announcement.'
			}
		]);
		const { scrapeChangelogs } = await import('./pipeline');

		await scrapeChangelogs();

		const first = await readFile(join(changelogsDir, '2026', 'matchmaking.mg'), 'utf-8');
		const second = await readFile(
			join(changelogsDir, '2026', 'matchmaking-second.mg'),
			'utf-8'
		);
		expect(first).toContain('steam_gid "first"');
		expect(second).toContain('steam_gid "second"');
	});

	it('backfills a matched draft without dropping its legacy alias on overwrite', async () => {
		const dir = join(changelogsDir, '2025');
		const filepath = join(dir, '05-08.mg');
		await mkdir(dir, { recursive: true });
		await writeFile(
			filepath,
			'``meta:\ntitle "Legacy Shop Update"\nalias "2025/shop-rework"\nstatus "draft"\n``\n'
		);

		apiMocks.scrapeChangelogPage.mockResolvedValue([
			{
				postId: '63133',
				title: '05-08-2025 Update',
				url: 'https://forums.playdeadlock.com/threads/update.63133/',
				author: 'Yoshi',
				pubDate: '2025-05-08T19:43:20.000Z'
			}
		]);
		apiMocks.fetchSteamAnnouncements.mockResolvedValue([
			{
				gid: '1799088287841594',
				title: 'Shop Rework Update',
				date: '2025-05-08T19:33:12.000Z',
				author: 'Yoshi',
				content: '- Full shop rework'
			}
		]);
		apiMocks.scrapeMultipleChangelogPosts.mockResolvedValue([
			{
				postId: '63133',
				title: '05-08-2025 Update',
				author: 'Yoshi',
				pubDate: '2025-05-08T19:43:20.000Z',
				content:
					'<div class="bbCodeBlock bbCodeBlock--unfurl"><div><div><a href="https://store.steampowered.com/news/app/1422450/view/123">Shop Rework</a></div></div></div>',
				posterReplies: []
			}
		]);
		const { scrapeChangelogs } = await import('./pipeline');

		await scrapeChangelogs({ overwrite: true });

		const content = await readFile(filepath, 'utf-8');
		expect(content).toContain('title "Shop Rework Update"');
		expect(content).toContain('alias "2025/shop-rework"');
		expect(content).toContain('steam_gid "1799088287841594"');
		expect(content).toContain('- Full shop rework');
	});

	it('keeps rendered Steam prose, forum follow-ups, and Steam metadata together', async () => {
		apiMocks.scrapeChangelogPage.mockResolvedValue([
			{
				postId: '75046',
				title: 'Six New Heroes',
				url: 'https://forums.playdeadlock.com/threads/update.75046/',
				author: 'Yoshi',
				pubDate: '2025-08-18T20:43:52.000Z'
			}
		]);
		apiMocks.fetchSteamAnnouncements.mockResolvedValue([
			{
				gid: '1808061939479652',
				title: 'Six New Heroes',
				date: '2025-08-18T20:42:20.000Z',
				author: 'simonne',
				content:
					'[p]Meet the newest heroes coming to the Cursed Apple.[/p]\n[h3]Billy[/h3]\n[p]Billy charges into battle.[/p]'
			}
		]);
		apiMocks.scrapeMultipleChangelogPosts.mockResolvedValue([
			{
				postId: '75046',
				title: 'Six New Heroes',
				author: 'Yoshi',
				authorImage: 'https://forums.example/yoshi.png',
				pubDate: '2025-08-18T20:43:52.000Z',
				content:
					'<div class="bbWrapper"><a href="https://store.steampowered.com/news/app/1422450/view/123">Steam article</a></div>',
				posterReplies: [
					{
						content:
							'<div class="bbWrapper">- Billy: Health regen increased from 2.5 to 3.0</div>',
						timestamp: '2025-08-22T19:02:06.000Z'
					},
					{
						content:
							'<div class="bbWrapper"><div class="bbCodeBlock bbCodeBlock--unfurl"><div><a href="https://store.steampowered.com/news/app/1422450/view/456">Duplicate teaser</a></div></div></div>',
						timestamp: '2025-08-28T17:49:04.000Z'
					}
				]
			}
		]);
		const { scrapeChangelogs } = await import('./pipeline');

		await scrapeChangelogs();

		const content = await readFile(
			join(changelogsDir, '2025', 'six-new-heroes.mg'),
			'utf-8'
		);
		expect(content).toContain('title "Six New Heroes"');
		expect(content).toContain('published "2025-08-18T20:42:20.000Z"');
		expect(content).toContain('author "simonne"');
		expect(content).not.toContain('author_image');
		expect(content).toContain('Meet the newest heroes coming to the Cursed Apple.');
		expect(content).toContain('## Billy');
		expect(content).toContain('# General Changes');
		expect(content).toContain('- Billy: Health regen increased from 2.5 to 3.0');
		expect(content).not.toContain('Duplicate teaser');
		expect(content).toContain(
			'content_text "Meet the newest heroes coming to the Cursed Apple. Billy Billy charges into battle. Billy: Health regen increased from 2.5 to 3.0"'
		);
	});

	it('migrates a Steam-first draft when its forum post appears later', async () => {
		apiMocks.fetchSteamAnnouncements.mockResolvedValue([
			{
				gid: 'steam-gameplay',
				title: 'Gameplay Update - 05-22-2026',
				date: '2026-05-22T21:51:02.000Z',
				author: 'simonne',
				content: '- Base HP reduced by 10'
			}
		]);
		const { scrapeChangelogs } = await import('./pipeline');

		await scrapeChangelogs();
		const standalone = join(changelogsDir, '2026', 'gameplay-05-22.mg');
		expect(await readFile(standalone, 'utf-8')).toContain('steam_gid "steam-gameplay"');

		apiMocks.scrapeChangelogPage.mockResolvedValue([
			{
				postId: '135477',
				title: '05-22-2026 Update',
				url: 'https://forums.playdeadlock.com/threads/update.135477/',
				author: 'Yoshi',
				pubDate: '2026-05-23T00:11:11.000Z'
			}
		]);
		apiMocks.scrapeMultipleChangelogPosts.mockResolvedValue([
			{
				postId: '135477',
				title: '05-22-2026 Update',
				author: 'Yoshi',
				pubDate: '2026-05-23T00:11:11.000Z',
				content: '<div class="bbWrapper">Forum update</div>',
				posterReplies: []
			}
		]);

		await scrapeChangelogs();

		const canonical = await readFile(join(changelogsDir, '2026', '05-22.mg'), 'utf-8');
		expect(canonical).toContain('alias "2026/gameplay-05-22"');
		expect(canonical).toContain('thread_id "135477"');
		expect(canonical).toContain('steam_gid "steam-gameplay"');
		await expect(readFile(standalone, 'utf-8')).rejects.toMatchObject({ code: 'ENOENT' });
	});
});
