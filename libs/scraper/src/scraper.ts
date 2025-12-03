import { chromium, type Browser, type Page } from 'playwright';
import { mkdir, writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { z } from 'zod';
import { Window } from 'happy-dom';

// Semantic selectors for XenForo forum software
// Ordered by specificity - first match wins
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

// Zod schemas for runtime validation
const posterReplySchema = z.object({
	content: z.string(),
	timestamp: z.string()
});

const postContentResultSchema = z.object({
	postId: z.string(),
	title: z.string(),
	author: z.string(),
	authorImage: z.string().optional(),
	pubDate: z.string(),
	content: z.string(),
	posterReplies: z.array(posterReplySchema)
});

export interface ScraperOptions {
	headless?: boolean;
	timeout?: number;
	userAgent?: string;
	useCache?: boolean;
	cacheDir?: string;
	maxPagesToScrape?: number;
	maxRetries?: number;
	retryDelayMs?: number;
	useFetch?: boolean; // Use fetch-based scraping instead of Playwright
}

const DEFAULT_OPTIONS = {
	headless: true,
	timeout: 30000,
	userAgent:
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	useCache: false,
	cacheDir: './src/lib/db/cache',
	maxPagesToScrape: 1,
	maxRetries: 3,
	retryDelayMs: 1000,
	useFetch: false
} satisfies Required<ScraperOptions>;

/**
 * Sleep helper for retry delays
 */
function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retry wrapper with exponential backoff
 */
async function withRetry<T>(
	fn: () => Promise<T>,
	options: { maxRetries: number; retryDelayMs: number; context?: string }
): Promise<T> {
	const { maxRetries, retryDelayMs, context = 'operation' } = options;
	let lastError: Error | null = null;

	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			return await fn();
		} catch (error) {
			lastError = error instanceof Error ? error : new Error(String(error));

			if (attempt < maxRetries) {
				const delay = retryDelayMs * Math.pow(2, attempt - 1); // Exponential backoff
				console.warn(
					`⚠️  ${context} failed (attempt ${attempt}/${maxRetries}), retrying in ${delay}ms...`,
					lastError.message
				);
				await sleep(delay);
			}
		}
	}

	throw new Error(
		`${context} failed after ${maxRetries} attempts: ${lastError?.message}`
	);
}

/**
 * Helper to find the first matching element from a list of selectors
 */
function findBySelectors<T extends Element>(
	selectors: readonly string[],
	querySelectorFn: (selector: string) => T | null
): T | null {
	for (const selector of selectors) {
		const element = querySelectorFn(selector);
		if (element) return element;
	}
	return null;
}

/**
 * Shared extraction logic for post content (works with both Playwright and happy-dom)
 */
function extractPostContent(
	document: Document,
	selectors: typeof SELECTORS
): (Omit<PostContentResult, 'postId'> & { postId: string }) | null {
	// Extract the main post (first post)
	const firstPost = document.querySelector('.message');
	if (!firstPost) {
		return null;
	}

	// Extract title
	const titleElement = document.querySelector(selectors.TITLE.join(', '));
	const title = titleElement?.textContent?.trim() || '';

	// Extract main post content
	const contentElement = firstPost.querySelector(selectors.CONTENT.join(', '));
	const content = contentElement?.innerHTML || '';

	// Extract author
	const authorElement = firstPost.querySelector(selectors.AUTHOR.join(', '));
	const author = authorElement?.textContent?.trim() || '';

	// Extract author image
	const avatarElement = firstPost.querySelector(
		selectors.AVATAR.join(', ')
	) as HTMLImageElement | null;
	const authorImage = avatarElement?.src || undefined;

	// Extract date
	const dateElement = firstPost.querySelector(selectors.DATE.join(', '));
	const pubDate =
		dateElement?.getAttribute('datetime') || dateElement?.textContent?.trim();

	// Extract post ID from URL or data attribute
	const postId =
		firstPost.getAttribute('data-content')?.replace('post-', '') ||
		firstPost.getAttribute('id')?.replace(/\D/g, '') ||
		'';

	// Find all subsequent posts by the same author (changelog poster)
	const posterReplies: { content: string; timestamp: string }[] = [];
	const allPosts = document.querySelectorAll('.message');
	const authorLower = author.toLowerCase();

	for (let i = 1; i < allPosts.length; i++) {
		const post = allPosts[i];
		const postAuthor = post
			.querySelector(selectors.AUTHOR.join(', '))
			?.textContent?.trim()
			.toLowerCase();

		// Check if author matches the original poster (case insensitive)
		if (postAuthor && postAuthor === authorLower) {
			const replyContent = post.querySelector(selectors.CONTENT.join(', '));
			const replyDateElement = post.querySelector(selectors.DATE.join(', '));
			const replyTimestamp =
				replyDateElement?.getAttribute('datetime') ||
				replyDateElement?.textContent?.trim();

			if (replyContent && replyTimestamp) {
				posterReplies.push({
					content: replyContent.innerHTML,
					timestamp: replyTimestamp
				});
			}
		}
	}

	if (!pubDate) {
		return null; // Will be caught and throw error by caller
	}

	return {
		postId,
		title,
		author,
		authorImage,
		pubDate,
		content,
		posterReplies
	};
}

/**
 * Fetch-based scraping using happy-dom (lighter weight than Playwright)
 * Best for server-rendered content like XenForo forums
 */
async function fetchAndParsePost(
	url: string,
	opts: Required<ScraperOptions>
): Promise<PostContentResult | null> {
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

	const html = await response.text();

	// Parse HTML with happy-dom
	const window = new Window({ url });
	window.document.write(html);

	const data = extractPostContent(window.document as unknown as Document, SELECTORS);

	// Clean up happy-dom resources
	window.close();

	if (!data) {
		throw new Error(`No post found for URL: ${url}`);
	}

	if (!data.content) {
		throw new Error(`No content found for URL: ${url}`);
	}

	if (!data.pubDate) {
		throw new Error(`Date not found for post: ${url}`);
	}

	return data;
}

/**
 * Scrapes the changelog page to get all changelog posts across all pages
 */
export async function scrapeChangelogPage(
	options: ScraperOptions = {}
): Promise<ChangelogPost[]> {
	const opts = { ...DEFAULT_OPTIONS, ...options };
	let browser: Browser | null = null;

	try {
		browser = await chromium.launch({ headless: opts.headless });
		const context = await browser.newContext({
			userAgent: opts.userAgent
		});
		const page = await context.newPage();

		const baseUrl = 'https://forums.playdeadlock.com/forums/changelog.10/';
		const allPosts: ChangelogPost[] = [];
		let currentPage = 1;
		let hasMorePages = true;

		console.log(`🔍 Scraping changelog forum...`);

		while (hasMorePages && currentPage <= opts.maxPagesToScrape) {
			const pageUrl = currentPage === 1 ? baseUrl : `${baseUrl}page-${currentPage}`;
			console.log(`  📄 Page ${currentPage}: ${pageUrl}`);

			await page.goto(pageUrl, {
				waitUntil: 'domcontentloaded',
				timeout: opts.timeout
			});

			// Wait for the thread list to load
			await page.waitForSelector('.structItem', {
				timeout: opts.timeout
			});

			// Extract changelog posts from current page
			const pageData = await page.evaluate(
				({
					selectors,
					findBySelectorsStr
				}: {
					selectors: typeof SELECTORS;
					findBySelectorsStr: string;
				}) => {
					const results: {
						title: string;
						url: string;
						author: string;
						pubDate: string;
						postId: string;
					}[] = [];

					// Inject helper function
					const findBySelectors = new Function('return ' + findBySelectorsStr)() as (
						selectors: readonly string[],
						querySelectorFn: (selector: string) => Element | null
					) => Element | null;

					// Try multiple selectors for different forum software versions
					const threads = selectors.THREAD.flatMap((selector) =>
						Array.from(document.querySelectorAll(selector))
					).filter((thread, index, arr) => arr.indexOf(thread) === index);

					for (const thread of threads) {
						// Extract title
						const titleElement = thread.querySelector(selectors.THREAD_TITLE.join(', '));
						const title = titleElement?.textContent?.trim() || '';

						// Skip posts with "Feedback" in the title
						if (title.toLowerCase().includes('feedback')) {
							continue;
						}

						// Extract URL
						const url = (titleElement as HTMLAnchorElement)?.href || '';

						// Extract author
						const authorElement = thread.querySelector(selectors.AUTHOR.join(', '));
						const author = authorElement?.textContent?.trim() || '';

						// Extract date
						const dateElement = thread.querySelector(selectors.DATE.join(', '));
						const pubDate =
							dateElement?.getAttribute('datetime') || dateElement?.textContent?.trim();

						// Extract post ID from URL
						const postIdMatch = url.match(/threads\/[^/]+\.(\d+)/);
						const postId = postIdMatch ? postIdMatch[1] : '';

						if (url && postId && pubDate) {
							results.push({
								title,
								url,
								author,
								pubDate,
								postId
							});
						}
					}

					// Check if there's a next page link
					const nextButton = findBySelectors(selectors.NEXT_PAGE, (s: string) =>
						document.querySelector(s)
					);
					const hasNext = nextButton && !nextButton.classList.contains('is-disabled');

					return { posts: results, hasNextPage: Boolean(hasNext) };
				},
				{ selectors: SELECTORS, findBySelectorsStr: findBySelectors.toString() }
			);

			allPosts.push(...pageData.posts);
			console.log(`    ✅ Found ${pageData.posts.length} posts on page ${currentPage}`);

			hasMorePages = pageData.hasNextPage;
			currentPage++;

			// Add a small delay between pages to be respectful
			if (hasMorePages) {
				await new Promise((resolve) => setTimeout(resolve, 500));
			}
		}

		console.log(
			`✅ Total: ${allPosts.length} changelog posts across ${currentPage - 1} pages`
		);
		return allPosts;
	} catch (error) {
		console.error('Failed to scrape changelog page:', error);
		throw error;
	} finally {
		await browser?.close();
	}
}

/**
 * Scrapes a single changelog post using Playwright (with shared browser context)
 * Internal function - use scrapeChangelogPost for the public API
 */
async function scrapePostWithPlaywright(
	url: string,
	page: Page,
	opts: Required<ScraperOptions>
): Promise<PostContentResult | null> {
	await page.goto(url, { waitUntil: 'domcontentloaded', timeout: opts.timeout });
	await page.waitForSelector('.message', { timeout: opts.timeout });

	const data = await page.evaluate((selectors) => {
		const firstPost = document.querySelector('.message');
		if (!firstPost) return null;

		const titleElement = document.querySelector(selectors.TITLE.join(', '));
		const title = titleElement?.textContent?.trim() || '';

		const contentElement = firstPost.querySelector(selectors.CONTENT.join(', '));
		const content = contentElement?.innerHTML || '';

		const authorElement = firstPost.querySelector(selectors.AUTHOR.join(', '));
		const author = authorElement?.textContent?.trim() || '';

		const avatarElement = firstPost.querySelector(
			selectors.AVATAR.join(', ')
		) as HTMLImageElement;
		const authorImage = avatarElement?.src || undefined;

		const dateElement = firstPost.querySelector(selectors.DATE.join(', '));
		const pubDate =
			dateElement?.getAttribute('datetime') || dateElement?.textContent?.trim();

		const postId =
			firstPost.getAttribute('data-content')?.replace('post-', '') ||
			firstPost.getAttribute('id')?.replace(/\D/g, '') ||
			'';

		const posterReplies: { content: string; timestamp: string }[] = [];
		const allPosts = document.querySelectorAll('.message');
		const authorLower = author.toLowerCase();

		for (let i = 1; i < allPosts.length; i++) {
			const post = allPosts[i];
			const postAuthor = post
				.querySelector(selectors.AUTHOR.join(', '))
				?.textContent?.trim()
				.toLowerCase();

			if (postAuthor && postAuthor === authorLower) {
				const replyContent = post.querySelector(selectors.CONTENT.join(', '));
				const replyDateElement = post.querySelector(selectors.DATE.join(', '));
				const replyTimestamp =
					replyDateElement?.getAttribute('datetime') ||
					replyDateElement?.textContent?.trim() ||
					new Date().toISOString();

				if (replyContent) {
					posterReplies.push({
						content: replyContent.innerHTML,
						timestamp: replyTimestamp
					});
				}
			}
		}

		return {
			postId,
			title,
			author,
			authorImage,
			pubDate: pubDate || null,
			content,
			posterReplies
		};
	}, SELECTORS);

	if (!data || !data.content) {
		throw new Error(`No content found for URL: ${url}`);
	}

	if (!data.pubDate) {
		throw new Error(`Date not found for post: ${url}`);
	}

	return data as PostContentResult;
}

/**
 * Scrapes a single changelog post including main content and poster replies
 */
export async function scrapeChangelogPost(
	url: string,
	options: ScraperOptions = {}
): Promise<PostContentResult | null> {
	const opts = { ...DEFAULT_OPTIONS, ...options };

	// Extract post ID from URL for caching
	const postIdMatch = url.match(/threads\/[^/]+\.(\d+)/);
	const postId = postIdMatch ? postIdMatch[1] : null;

	// Check cache if enabled
	if (opts.useCache && postId) {
		const cacheFile = path.join(opts.cacheDir, `post-${postId}.json`);
		if (existsSync(cacheFile)) {
			try {
				const cached = await readFile(cacheFile, 'utf-8');
				return postContentResultSchema.parse(JSON.parse(cached));
			} catch (error) {
				console.warn(`Failed to read cache for post ${postId}:`, error);
			}
		}
	}

	// Use fetch-based scraping if enabled (lighter weight)
	if (opts.useFetch) {
		const data = await withRetry(() => fetchAndParsePost(url, opts), {
			maxRetries: opts.maxRetries,
			retryDelayMs: opts.retryDelayMs,
			context: `fetch ${url}`
		});

		if (opts.useCache && postId && data) {
			await writeToCache(opts.cacheDir, postId, data);
		}

		return data;
	}

	// Playwright-based scraping (launches new browser for single post)
	let browser: Browser | null = null;

	try {
		browser = await chromium.launch({ headless: opts.headless });
		const context = await browser.newContext({ userAgent: opts.userAgent });
		const page = await context.newPage();

		const data = await withRetry(() => scrapePostWithPlaywright(url, page, opts), {
			maxRetries: opts.maxRetries,
			retryDelayMs: opts.retryDelayMs,
			context: `scrape ${url}`
		});

		if (opts.useCache && postId && data) {
			await writeToCache(opts.cacheDir, postId, data);
		}

		return data;
	} finally {
		await browser?.close();
	}
}

/**
 * Helper to write scraped data to cache
 */
async function writeToCache(
	cacheDir: string,
	postId: string,
	data: PostContentResult
): Promise<void> {
	try {
		if (!existsSync(cacheDir)) {
			await mkdir(cacheDir, { recursive: true });
		}
		const cacheFile = path.join(cacheDir, `post-${postId}.json`);
		await writeFile(cacheFile, JSON.stringify(data, null, 2), 'utf-8');
	} catch (error) {
		console.warn(`Failed to write cache for post ${postId}:`, error);
	}
}

/**
 * Scrapes multiple changelog posts with shared browser instance for efficiency
 */
export async function scrapeMultipleChangelogPosts(
	posts: ChangelogPost[],
	options: ScraperOptions & { concurrency?: number; delayMs?: number } = {}
): Promise<PostContentResult[]> {
	const { concurrency = 5, delayMs = 500, ...scraperOptions } = options;
	const opts = { ...DEFAULT_OPTIONS, ...scraperOptions };
	const results: PostContentResult[] = [];

	console.log(
		`🕷️  Scraping ${posts.length} changelog posts (concurrency: ${concurrency}, mode: ${opts.useFetch ? 'fetch' : 'playwright'})...`
	);

	// Pre-check cache and separate cached vs non-cached posts
	const cachedPosts: PostContentResult[] = [];
	const postsToScrape: ChangelogPost[] = [];

	if (opts.useCache) {
		for (const post of posts) {
			const cacheFile = path.join(opts.cacheDir, `post-${post.postId}.json`);
			if (existsSync(cacheFile)) {
				try {
					const cached = await readFile(cacheFile, 'utf-8');
					cachedPosts.push(postContentResultSchema.parse(JSON.parse(cached)));
				} catch (error) {
					console.warn(`Failed to read cache for post ${post.postId}:`, error);
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

	// Use fetch-based scraping if enabled
	if (opts.useFetch) {
		for (let i = 0; i < postsToScrape.length; i += concurrency) {
			const batch = postsToScrape.slice(i, i + concurrency);
			const batchPromises = batch.map(async (post) => {
				const data = await withRetry(() => fetchAndParsePost(post.url, opts), {
					maxRetries: opts.maxRetries,
					retryDelayMs: opts.retryDelayMs,
					context: `fetch ${post.postId}`
				});

				if (opts.useCache && data) {
					await writeToCache(opts.cacheDir, post.postId, data);
				}

				return data;
			});

			const batchResults = await Promise.all(batchPromises);
			results.push(...batchResults.filter((r): r is PostContentResult => r !== null));

			const totalProcessed =
				cachedPosts.length + Math.min(i + concurrency, postsToScrape.length);
			console.log(`  ✅ Processed ${totalProcessed}/${posts.length} posts`);

			if (i + concurrency < postsToScrape.length) {
				await sleep(delayMs);
			}
		}
	} else {
		// Playwright-based scraping with shared browser instance
		let browser: Browser | null = null;

		try {
			browser = await chromium.launch({ headless: opts.headless });
			const context = await browser.newContext({ userAgent: opts.userAgent });

			// Create a pool of pages for concurrent scraping
			const pages: Page[] = [];
			for (let i = 0; i < concurrency; i++) {
				pages.push(await context.newPage());
			}

			for (let i = 0; i < postsToScrape.length; i += concurrency) {
				const batch = postsToScrape.slice(i, i + concurrency);
				const batchPromises = batch.map(async (post, batchIndex) => {
					const page = pages[batchIndex % pages.length];

					const data = await withRetry(
						() => scrapePostWithPlaywright(post.url, page, opts),
						{
							maxRetries: opts.maxRetries,
							retryDelayMs: opts.retryDelayMs,
							context: `scrape ${post.postId}`
						}
					);

					if (opts.useCache && data) {
						await writeToCache(opts.cacheDir, post.postId, data);
					}

					return data;
				});

				const batchResults = await Promise.all(batchPromises);
				results.push(...batchResults.filter((r): r is PostContentResult => r !== null));

				const totalProcessed =
					cachedPosts.length + Math.min(i + concurrency, postsToScrape.length);
				console.log(`  ✅ Processed ${totalProcessed}/${posts.length} posts`);

				if (i + concurrency < postsToScrape.length) {
					await sleep(delayMs);
				}
			}

			// Close all pages
			await Promise.all(pages.map((p) => p.close()));
		} finally {
			await browser?.close();
		}
	}

	console.log(`✨ Successfully scraped ${results.length}/${posts.length} posts`);

	return results;
}
