import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

import { scrapeMultipleChangelogPosts, type ChangelogPost } from './forum';

const thread: ChangelogPost = {
	title: '10-18-2024 Update',
	url: 'https://forums.playdeadlock.com/threads/update.42/',
	author: 'Yoshi',
	pubDate: '2024-10-18T10:00:00Z',
	postId: '42'
};

function message(id: string, author: string, content: string, timestamp: string): string {
	return `
		<article class="message" data-content="post-${id}">
			<a class="username">${author}</a>
			<div class="message-content"><div class="bbWrapper">${content}</div></div>
			<time datetime="${timestamp}"></time>
		</article>`;
}

function page(messages: string, nextHref?: string): string {
	return `<!doctype html>
		<html>
			<body>
				<h1 class="p-title-value">10-18-2024 Update</h1>
				${messages}
				${nextHref ? `<a class="pageNav-jump--next" rel="next" href="${nextHref}">Next</a>` : ''}
			</body>
		</html>`;
}

function mockPages(pages: Record<string, string>) {
	const fetchMock = vi.fn(async (input: string | URL | Request) => {
		const url = input instanceof Request ? input.url : input.toString();
		const html = pages[url];
		if (!html) return new Response('Not found', { status: 404, statusText: 'Not Found' });
		return new Response(html, { status: 200, headers: { 'content-type': 'text/html' } });
	});
	vi.stubGlobal('fetch', fetchMock);
	return fetchMock;
}

describe('scrapeMultipleChangelogPosts', () => {
	let cacheDir: string;

	beforeEach(async () => {
		cacheDir = await mkdtemp(join(tmpdir(), 'deadlog-forum-'));
		vi.spyOn(console, 'log').mockImplementation(() => undefined);
		vi.spyOn(console, 'warn').mockImplementation(() => undefined);
	});

	afterEach(async () => {
		vi.unstubAllGlobals();
		vi.restoreAllMocks();
		await rm(cacheDir, { recursive: true, force: true });
	});

	it('captures later-page OP replies and preserves them in a versioned cache', async () => {
		const secondPageUrl = `${thread.url}page-2`;
		const fetchMock = mockPages({
			[thread.url]: page(
				message('900', 'Yoshi', 'Original notes', '2024-10-18T10:00:00Z'),
				'/threads/update.42/page-2'
			),
			[secondPageUrl]: page(
				message('950', 'Other', 'Not an OP reply', '2024-10-18T11:00:00Z') +
					message('951', 'Yoshi', 'Later hotfix', '2024-10-18T12:00:00Z')
			)
		});

		const firstResult = await scrapeMultipleChangelogPosts([thread], {
			useCache: true,
			cacheDir,
			concurrency: 1,
			delayMs: 0
		});

		expect(fetchMock).toHaveBeenCalledTimes(2);
		expect(firstResult).toHaveLength(1);
		expect(firstResult[0].postId).toBe(thread.postId);
		expect(firstResult[0].posterReplies).toHaveLength(1);
		expect(firstResult[0].posterReplies[0].content).toContain('Later hotfix');

		const cached = JSON.parse(
			await readFile(join(cacheDir, `post-${thread.postId}.json`), 'utf-8')
		) as { version: number; data: { postId: string } };
		expect(cached.version).toBe(2);
		expect(cached.data.postId).toBe(thread.postId);

		fetchMock.mockClear();
		const cachedResult = await scrapeMultipleChangelogPosts([thread], {
			useCache: true,
			cacheDir,
			concurrency: 1,
			delayMs: 0
		});

		expect(fetchMock).not.toHaveBeenCalled();
		expect(cachedResult).toEqual(firstResult);
	});

	it('invalidates legacy caches and bounds thread pagination', async () => {
		await mkdir(cacheDir, { recursive: true });
		await writeFile(
			join(cacheDir, `post-${thread.postId}.json`),
			JSON.stringify({
				postId: '900',
				title: thread.title,
				author: thread.author,
				pubDate: thread.pubDate,
				content: 'stale content',
				posterReplies: []
			})
		);

		const secondPageUrl = `${thread.url}page-2`;
		const fetchMock = mockPages({
			[thread.url]: page(
				message('900', 'Yoshi', 'Fresh notes', '2024-10-18T10:00:00Z'),
				'/threads/update.42/page-2'
			),
			[secondPageUrl]: page(
				message('951', 'Yoshi', 'Bounded hotfix', '2024-10-18T12:00:00Z'),
				'/threads/update.42/page-3'
			)
		});

		const result = await scrapeMultipleChangelogPosts([thread], {
			useCache: true,
			cacheDir,
			concurrency: 1,
			delayMs: 0,
			maxThreadPages: 2
		});

		expect(fetchMock).toHaveBeenCalledTimes(2);
		expect(result[0].postId).toBe(thread.postId);
		expect(result[0].content).toContain('Fresh notes');
		expect(result[0].posterReplies[0].content).toContain('Bounded hotfix');
		expect(console.warn).toHaveBeenCalledWith(
			`Reached thread page limit (2) for ${thread.url}`
		);
	});
});
