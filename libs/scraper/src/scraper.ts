import { chromium, type Browser } from 'playwright';
import { mkdir, writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { formatISO } from 'date-fns';
import { z } from 'zod';

const SELECTORS = {
	CONTENT: [
		'.cPost_contentWrap [data-role="commentContent"]',
		'.ipsType_normal',
		'article .post-content',
		'.post_body',
		'.message-content'
	],
	AVATAR: [
		'.cAuthorPane_photo img',
		'.message-avatar img',
		'[data-role="photo"] img',
		'.ipsUserPhoto img',
		'.message-user-avatar img'
	],
	TITLE: ['h1', '.p-title-value', '.ipsType_pageTitle'],
	AUTHOR: [
		'.username',
		'.structItem-startedBy a',
		'.ipsType_break a',
		'.author a',
		'.message-name a',
		'.cAuthorPane_author a'
	],
	DATE: ['time', '.structItem-startDate time', '.ipsType_light time'],
	THREAD: [
		'.structItem',
		'.ipsDataItem_main',
		'.discussionListItem',
		'[data-type="thread"]',
		'.structItemContainer'
	],
	THREAD_TITLE: [
		'.structItem-title a',
		'.ipsDataItem_title a',
		'.title a',
		'[data-preview-url] a'
	],
	NEXT_PAGE: [
		'.pageNav-jump--next',
		'.ipsPagination_next a',
		'a[rel="next"]',
		'.pagination .next a'
	]
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
}

const DEFAULT_OPTIONS = {
	headless: true,
	timeout: 30000,
	userAgent:
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	useCache: false,
	cacheDir: './src/lib/db/cache'
} satisfies Required<ScraperOptions>;

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
 * Scrapes full content and author info from a Deadlock forum post
 */
export async function scrapeForumPost(
	url: string,
	options: ScraperOptions = {}
): Promise<{ content: string; authorImage?: string } | null> {
	const opts = { ...DEFAULT_OPTIONS, ...options };
	let browser: Browser | null = null;

	try {
		browser = await chromium.launch({ headless: opts.headless });
		const context = await browser.newContext({
			userAgent: opts.userAgent
		});
		const page = await context.newPage();

		// Navigate to the forum post
		await page.goto(url, { waitUntil: 'domcontentloaded', timeout: opts.timeout });

		// Wait for the main content area to load
		await page.waitForSelector('.ipsType_normal, .cPost_contentWrap, article', {
			timeout: opts.timeout
		});

		// Extract the post content and author image
		const data = await page.evaluate(
			({
				selectors,
				findBySelectorsStr
			}: {
				selectors: typeof SELECTORS;
				findBySelectorsStr: string;
			}) => {
				// Inject helper function into page context
				const findBySelectors = new Function('return ' + findBySelectorsStr)() as (
					selectors: readonly string[],
					querySelectorFn: (selector: string) => Element | null
				) => Element | null;

				// Extract content
				const contentElement = findBySelectors(selectors.CONTENT, (s: string) =>
					document.querySelector(s)
				);
				let content = contentElement?.innerHTML || null;

				// Fallback: try to find the largest text content block
				if (!content) {
					const articles = document.querySelectorAll('article');
					if (articles.length > 0) {
						content = articles[0].innerHTML;
					}
				}

				// Extract author profile image
				const imgElement = findBySelectors(
					selectors.AVATAR,
					(s: string) => document.querySelector(s) as HTMLImageElement
				) as HTMLImageElement | null;
				const authorImage = imgElement?.src;

				return { content, authorImage };
			},
			{ selectors: SELECTORS, findBySelectorsStr: findBySelectors.toString() }
		);

		if (!data.content) {
			console.warn(`No content found for URL: ${url}`);
			return null;
		}

		return { content: data.content, authorImage: data.authorImage };
	} catch (error) {
		console.error(`Failed to scrape ${url}:`, error);
		return null;
	} finally {
		await browser?.close();
	}
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

		while (hasMorePages) {
			const pageUrl = currentPage === 1 ? baseUrl : `${baseUrl}page-${currentPage}`;
			console.log(`  📄 Page ${currentPage}: ${pageUrl}`);

			await page.goto(pageUrl, {
				waitUntil: 'domcontentloaded',
				timeout: opts.timeout
			});

			// Wait for the thread list to load
			await page.waitForSelector('.structItemContainer, .ipsDataItem', {
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
							dateElement?.getAttribute('datetime') ||
							dateElement?.textContent?.trim() ||
							formatISO(new Date());

						// Extract post ID from URL
						const postIdMatch = url.match(/threads\/[^/]+\.(\d+)/);
						const postId = postIdMatch ? postIdMatch[1] : '';

						if (url && postId) {
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

	// Check cache if enabled (for individual calls outside of batch scraping)
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

	let browser: Browser | null = null;

	try {
		browser = await chromium.launch({ headless: opts.headless });
		const context = await browser.newContext({
			userAgent: opts.userAgent
		});
		const page = await context.newPage();

		await page.goto(url, { waitUntil: 'domcontentloaded', timeout: opts.timeout });

		// Wait for the main content area to load
		await page.waitForSelector('article, .message, .cPost', { timeout: opts.timeout });

		// Extract post content and poster replies
		const data = await page.evaluate((selectors) => {
			// Extract the main post (first post)
			const firstPost = document.querySelector('article, .message, .cPost');
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
			) as HTMLImageElement;
			const authorImage = avatarElement?.src || undefined;

			// Extract date
			const dateElement = firstPost.querySelector('time');
			const pubDate =
				dateElement?.getAttribute('datetime') ||
				dateElement?.textContent?.trim() ||
				new Date().toISOString();

			// Extract post ID from URL or data attribute
			const postId =
				firstPost.getAttribute('data-content') ||
				firstPost.getAttribute('id')?.replace(/\D/g, '') ||
				'';

			// Find all subsequent posts by the same author (changelog poster)
			const posterReplies: { content: string; timestamp: string }[] = [];
			const allPosts = document.querySelectorAll('article, .message, .cPost');
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
					const replyDateElement = post.querySelector('time');
					const replyTimestamp =
						replyDateElement?.getAttribute('datetime') ||
						replyDateElement?.textContent?.trim() ||
						formatISO(new Date());

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
				pubDate,
				content,
				posterReplies
			};
		}, SELECTORS);

		if (!data || !data.content) {
			console.warn(`No content found for URL: ${url}`);
			return null;
		}

		// Write to cache if enabled
		if (opts.useCache && postId && data) {
			try {
				if (!existsSync(opts.cacheDir)) {
					await mkdir(opts.cacheDir, { recursive: true });
				}
				const cacheFile = path.join(opts.cacheDir, `post-${postId}.json`);
				await writeFile(cacheFile, JSON.stringify(data, null, 2), 'utf-8');
			} catch (error) {
				console.warn(`Failed to write cache for post ${postId}:`, error);
			}
		}

		return data;
	} catch (error) {
		console.error(`Failed to scrape changelog post ${url}:`, error);
		return null;
	} finally {
		await browser?.close();
	}
}

/**
 * Scrapes multiple changelog posts in parallel with rate limiting
 */
export async function scrapeMultipleChangelogPosts(
	posts: ChangelogPost[],
	options: ScraperOptions & { concurrency?: number; delayMs?: number } = {}
): Promise<PostContentResult[]> {
	const { concurrency = 10, delayMs = 1000, ...scraperOptions } = options;
	const opts = { ...DEFAULT_OPTIONS, ...scraperOptions };
	const results: PostContentResult[] = [];

	console.log(
		`🕷️  Scraping ${posts.length} changelog posts (concurrency: ${concurrency})...`
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

	// Process non-cached posts in batches to respect rate limits
	for (let i = 0; i < postsToScrape.length; i += concurrency) {
		const batch = postsToScrape.slice(i, i + concurrency);
		const batchPromises = batch.map(async (post): Promise<PostContentResult | null> => {
			try {
				return await scrapeChangelogPost(post.url, scraperOptions);
			} catch (error) {
				console.error(`Failed to scrape ${post.postId}:`, error);
				return null;
			}
		});

		const batchResults = await Promise.all(batchPromises);
		results.push(...batchResults.filter((r): r is PostContentResult => r !== null));

		// Progress update
		const totalProcessed =
			cachedPosts.length + Math.min(i + concurrency, postsToScrape.length);
		console.log(`  ✅ Processed ${totalProcessed}/${posts.length} posts`);

		// Delay between batches to avoid rate limiting
		if (i + concurrency < postsToScrape.length) {
			await new Promise((resolve) => setTimeout(resolve, delayMs));
		}
	}

	console.log(`✨ Successfully scraped ${results.length}/${posts.length} posts`);

	return results;
}
