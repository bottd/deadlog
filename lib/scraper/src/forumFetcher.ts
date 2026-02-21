import { mkdir, writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { z } from 'zod';
import { Window } from 'happy-dom';

const SELECTORS = {
	CONTENT: ['.bbWrapper', '.message-content'],
	AVATAR: ['.message-avatar img'],
	TITLE: ['h1.p-title-value', 'h1'],
	AUTHOR: ['.message-name .username', '.username'],
	DATE: ['time[datetime]', 'time'],
	THREAD: ['.structItem'],
	THREAD_TITLE: ['.structItem-title a'],
	NEXT_PAGE: ['.pageNav-jump--next', 'a[rel="next"]']
} as const;

export interface ChangelogPost {
	title: string;
	url: string;
	author: string;
	pubDate: string;
	postId: string;
}

export interface PosterReply {
	content: string;
	timestamp: string;
}

export interface PostContentResult {
	postId: string;
	title: string;
	author: string;
	authorImage?: string;
	pubDate: string;
	content: string;
	posterReplies: PosterReply[];
}

const postContentResultSchema = z.object({
	postId: z.string(),
	title: z.string(),
	author: z.string(),
	authorImage: z.string().optional(),
	pubDate: z.string(),
	content: z.string(),
	posterReplies: z.array(z.object({ content: z.string(), timestamp: z.string() }))
});

export interface ScraperOptions {
	timeout?: number;
	userAgent?: string;
	useCache?: boolean;
	cacheDir?: string;
	maxPagesToScrape?: number;
}

const DEFAULT_OPTIONS = {
	timeout: 30000,
	userAgent:
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	useCache: false,
	cacheDir: './lib/scraper/src/cache',
	maxPagesToScrape: 100
} satisfies Required<ScraperOptions>;

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchHtml(url: string, opts: Required<ScraperOptions>): Promise<string> {
	const response = await fetch(url, {
		headers: {
			'User-Agent': opts.userAgent,
			Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
		},
		signal: AbortSignal.timeout(opts.timeout)
	});

	if (!response.ok) {
		throw new Error(`HTTP ${response.status}: ${response.statusText}`);
	}

	return response.text();
}

function parseDocument(html: string, url: string): Document {
	const window = new Window({ url });
	window.document.write(html);
	return window.document as unknown as Document;
}

const KEEP_ATTRS: Record<string, string[]> = {
	a: ['href'],
	img: ['src', 'alt'],
	div: ['class']
};

function cleanHtml(html: string): string {
	const window = new Window();
	window.document.write(`<body>${html}</body>`);
	const body = window.document.body;

	for (const el of body.querySelectorAll('*')) {
		const keep = KEEP_ATTRS[el.tagName.toLowerCase()] || [];
		const toRemove: string[] = [];
		for (const attr of el.attributes) {
			if (!keep.includes(attr.name)) {
				toRemove.push(attr.name);
			}
		}
		for (const name of toRemove) {
			el.removeAttribute(name);
		}
	}

	const result = body.innerHTML.replace(/^[\n\t\r ]+/, '').trimEnd();
	window.close();
	return result;
}

function extractPostContent(document: Document): PostContentResult | null {
	const firstPost = document.querySelector('.message');
	if (!firstPost) return null;

	const titleElement = document.querySelector(SELECTORS.TITLE.join(', '));
	const title = titleElement?.textContent?.trim() || '';

	const contentElement = firstPost.querySelector(SELECTORS.CONTENT.join(', '));
	const content = cleanHtml(contentElement?.innerHTML || '');

	const authorElement = firstPost.querySelector(SELECTORS.AUTHOR.join(', '));
	const author = authorElement?.textContent?.trim() || '';

	const avatarElement = firstPost.querySelector(
		SELECTORS.AVATAR.join(', ')
	) as HTMLImageElement | null;
	const authorImage = avatarElement?.src || undefined;

	const dateElement = firstPost.querySelector(SELECTORS.DATE.join(', '));
	const pubDate =
		dateElement?.getAttribute('datetime') || dateElement?.textContent?.trim();

	const postId =
		firstPost.getAttribute('data-content')?.replace('post-', '') ||
		firstPost.getAttribute('id')?.replace(/\D/g, '') ||
		'';

	// Find replies from the same author
	const posterReplies: PosterReply[] = [];
	const allPosts = document.querySelectorAll('.message');
	const authorLower = author.toLowerCase();

	for (let i = 1; i < allPosts.length; i++) {
		const post = allPosts[i];
		const postAuthor = post
			.querySelector(SELECTORS.AUTHOR.join(', '))
			?.textContent?.trim()
			.toLowerCase();

		if (postAuthor === authorLower) {
			const replyContent = post.querySelector(SELECTORS.CONTENT.join(', '));
			const replyDateElement = post.querySelector(SELECTORS.DATE.join(', '));
			const replyTimestamp =
				replyDateElement?.getAttribute('datetime') ||
				replyDateElement?.textContent?.trim();

			if (replyContent && replyTimestamp) {
				posterReplies.push({
					content: cleanHtml(replyContent.innerHTML),
					timestamp: replyTimestamp
				});
			}
		}
	}

	if (!pubDate) return null;

	return { postId, title, author, authorImage, pubDate, content, posterReplies };
}

function extractThreadList(document: Document): {
	posts: ChangelogPost[];
	hasNextPage: boolean;
} {
	const posts: ChangelogPost[] = [];

	const threads = document.querySelectorAll(SELECTORS.THREAD.join(', '));

	for (const thread of threads) {
		const titleElement = thread.querySelector(SELECTORS.THREAD_TITLE.join(', '));
		const title = titleElement?.textContent?.trim() || '';

		if (title.toLowerCase().includes('feedback')) continue;

		const url = (titleElement as HTMLAnchorElement)?.href || '';
		const authorElement = thread.querySelector(SELECTORS.AUTHOR.join(', '));
		const author = authorElement?.textContent?.trim() || '';

		const dateElement = thread.querySelector(SELECTORS.DATE.join(', '));
		const pubDate =
			dateElement?.getAttribute('datetime') || dateElement?.textContent?.trim();

		const postIdMatch = url.match(/threads\/[^/]+\.(\d+)/);
		const postId = postIdMatch ? postIdMatch[1] : '';

		if (url && postId && pubDate) {
			posts.push({ title, url, author, pubDate, postId });
		}
	}

	const nextButton = document.querySelector(SELECTORS.NEXT_PAGE.join(', '));
	const hasNextPage =
		nextButton !== null && !nextButton.classList.contains('is-disabled');

	return { posts, hasNextPage };
}

export async function scrapeChangelogPage(
	options: ScraperOptions = {}
): Promise<ChangelogPost[]> {
	const opts = { ...DEFAULT_OPTIONS, ...options };
	const baseUrl = 'https://forums.playdeadlock.com/forums/changelog.10/';
	const allPosts: ChangelogPost[] = [];
	let currentPage = 1;
	let hasMorePages = true;

	console.log(`🔍 Scraping changelog forum...`);

	while (hasMorePages && currentPage <= opts.maxPagesToScrape) {
		const pageUrl = currentPage === 1 ? baseUrl : `${baseUrl}page-${currentPage}`;
		console.log(`  📄 Page ${currentPage}: ${pageUrl}`);

		const html = await fetchHtml(pageUrl, opts);
		const document = parseDocument(html, pageUrl);
		const { posts, hasNextPage } = extractThreadList(document);

		allPosts.push(...posts);
		console.log(`    ✅ Found ${posts.length} posts on page ${currentPage}`);

		hasMorePages = hasNextPage;
		currentPage++;

		if (hasMorePages) await sleep(500);
	}

	console.log(
		`✅ Total: ${allPosts.length} changelog posts across ${currentPage - 1} pages`
	);
	return allPosts;
}

async function scrapePost(
	url: string,
	opts: Required<ScraperOptions>
): Promise<PostContentResult> {
	const html = await fetchHtml(url, opts);
	const document = parseDocument(html, url);
	const data = extractPostContent(document);

	if (!data || !data.content) {
		throw new Error(`No content found for URL: ${url}`);
	}

	return data;
}

async function writeToCache(
	cacheDir: string,
	postId: string,
	data: PostContentResult
): Promise<void> {
	try {
		if (!existsSync(cacheDir)) {
			await mkdir(cacheDir, { recursive: true });
		}
		await writeFile(
			path.join(cacheDir, `post-${postId}.json`),
			JSON.stringify(data, null, 2)
		);
	} catch (error) {
		console.warn(`Failed to write cache for post ${postId}:`, error);
	}
}

export async function scrapeMultipleChangelogPosts(
	posts: ChangelogPost[],
	options: ScraperOptions & { concurrency?: number; delayMs?: number } = {}
): Promise<PostContentResult[]> {
	const { concurrency = 5, delayMs = 500, ...scraperOptions } = options;
	const opts = { ...DEFAULT_OPTIONS, ...scraperOptions };
	const results: PostContentResult[] = [];

	console.log(
		`🕷️  Scraping ${posts.length} changelog posts (concurrency: ${concurrency}, mode: fetch)...`
	);

	// Check cache
	const cachedPosts: PostContentResult[] = [];
	const postsToScrape: ChangelogPost[] = [];

	if (opts.useCache) {
		for (const post of posts) {
			const cacheFile = path.join(opts.cacheDir, `post-${post.postId}.json`);
			if (existsSync(cacheFile)) {
				try {
					const cached = await readFile(cacheFile, 'utf-8');
					cachedPosts.push(postContentResultSchema.parse(JSON.parse(cached)));
				} catch {
					postsToScrape.push(post);
				}
			} else {
				postsToScrape.push(post);
			}
		}

		if (cachedPosts.length > 0) {
			console.log(`  📦 Using ${cachedPosts.length} cached posts`);
			results.push(...cachedPosts);
		}

		if (postsToScrape.length === 0) {
			console.log(`✨ All posts loaded from cache!`);
			return results;
		}

		console.log(`  🌐 Scraping ${postsToScrape.length} new posts...`);
	} else {
		postsToScrape.push(...posts);
	}

	// Scrape in batches
	for (let i = 0; i < postsToScrape.length; i += concurrency) {
		const batch = postsToScrape.slice(i, i + concurrency);
		const batchResults = await Promise.all(
			batch.map(async (post) => {
				try {
					const data = await scrapePost(post.url, opts);
					if (opts.useCache) await writeToCache(opts.cacheDir, post.postId, data);
					return data;
				} catch (error) {
					console.warn(`  ⚠️  Failed to scrape ${post.postId}:`, error);
					return null;
				}
			})
		);

		results.push(...batchResults.filter((r): r is PostContentResult => r !== null));

		const totalProcessed =
			cachedPosts.length + Math.min(i + concurrency, postsToScrape.length);
		console.log(`  ✅ Processed ${totalProcessed}/${posts.length} posts`);

		if (i + concurrency < postsToScrape.length) await sleep(delayMs);
	}

	console.log(`✨ Successfully scraped ${results.length}/${posts.length} posts`);
	return results;
}
