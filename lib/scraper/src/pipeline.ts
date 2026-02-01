import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Window } from 'happy-dom';
import {
	scrapeChangelogPage,
	scrapeMultipleChangelogPosts,
	type ChangelogPost,
	type PostContentResult
} from './forumFetcher';
import { parseAuthorName } from './authorParser';
import { fetchHeroes, fetchItems } from './deadlockApi';

const CHANGELOGS_DIR = process.env.CHANGELOGS_DIR || 'app/changelogs';

/** Entity lists for categorizing changelog lines */
interface EntityLists {
	heroes: Set<string>;
	items: Set<string>;
}

interface ScrapeOptions {
	overwrite?: boolean;
}

/**
 * Generate a URL-friendly slug from a changelog title
 * Example: "01-23-2025 Update" -> "01-23-2025-update"
 */
function slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/**
 * Check if a .norg file has been curated (marked as published)
 */
function isCurated(filepath: string): boolean {
	if (!existsSync(filepath)) return false;
	const content = readFileSync(filepath, 'utf-8');
	// Only protect files explicitly marked as published
	return content.includes('status: published');
}

/**
 * Escape special characters in metadata values for norg frontmatter
 */
function escapeMetaValue(value: string): string {
	if (value.includes('\n') || value.includes(':') || value.includes('"')) {
		return `"${value.replace(/"/g, '\\"')}"`;
	}
	return value;
}

/**
 * Extract the changelog content from raw HTML, stripping wrapper elements
 */
function extractContent(html: string): string {
	const window = new Window();
	window.document.write(html);

	const bbWrapper = window.document.querySelector('.bbWrapper');
	if (bbWrapper) {
		let text = bbWrapper.innerHTML;
		text = text.replace(/<br\s*\/?>/gi, '\n');
		text = text.replace(/&amp;/g, '&');
		text = text.replace(/&lt;/g, '<');
		text = text.replace(/&gt;/g, '>');
		text = text.replace(/&nbsp;/g, ' ');
		// Convert <a> tags to plain URLs (won't match <a><img></a> since [^<]* can't match <img>)
		text = text.replace(/<a\s[^>]*href="([^"]*)"[^>]*>[^<]*<\/a>/gi, '$1');
		// Convert <img> tags to norg @image blocks (after <a> conversion, before final HTML strip)
		text = text.replace(
			/<img\s+[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi,
			(_, src, alt) => {
				// Decode proxy URLs to direct URLs
				const proxyMatch = src.match(/\/proxy\.php\?image=([^&]+)/);
				const url = proxyMatch ? decodeURIComponent(proxyMatch[1]) : src;
				const label = alt.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
				return `\n@image ${url}\n${label}\n@end\n`;
			}
		);
		// Strip any remaining HTML tags (norg parser crashes on < >)
		text = text.replace(/<[^>]+>/g, '');
		text = text.replace(/\n{2,}/g, '\n');
		window.close();
		return text.trim();
	}

	window.close();
	return html;
}

interface ParsedNote {
	entityName: string | null;
	entityType: 'hero' | 'item' | 'general';
	text: string;
}

/**
 * Parse a changelog line to extract entity name and note text
 */
function parseChangelogLine(line: string, entities: EntityLists): ParsedNote {
	const text = line.replace(/^[-•]\s*/, '').trim();
	if (!text) {
		return { entityName: null, entityType: 'general', text: line };
	}

	const colonMatch = text.match(/^([^:]+):\s*(.+)$/);
	if (colonMatch) {
		const potentialEntity = colonMatch[1].trim();
		const noteText = colonMatch[2].trim();

		if (entities.heroes.has(potentialEntity.toLowerCase())) {
			return { entityName: potentialEntity, entityType: 'hero', text: noteText };
		}

		if (entities.items.has(potentialEntity.toLowerCase())) {
			return { entityName: potentialEntity, entityType: 'item', text: noteText };
		}
	}

	return { entityName: null, entityType: 'general', text };
}

interface GroupedContent {
	general: string[];
	heroes: Map<string, string[]>;
	items: Map<string, string[]>;
}

/**
 * Parse raw changelog text and group by hero/item
 */
function parseAndGroupContent(rawContent: string, entities: EntityLists): GroupedContent {
	const result: GroupedContent = {
		general: [],
		heroes: new Map(),
		items: new Map()
	};

	const lines = rawContent.split('\n');

	for (let i = 0; i < lines.length; i++) {
		const trimmed = lines[i].trim();

		// Collect @image blocks as-is
		if (trimmed.startsWith('@image ')) {
			const blockLines = [trimmed];
			while (i + 1 < lines.length && lines[i + 1].trim() !== '@end') {
				i++;
				blockLines.push(lines[i]);
			}
			if (i + 1 < lines.length) {
				i++;
				blockLines.push(lines[i]); // @end
			}
			result.general.push(blockLines.join('\n'));
			continue;
		}

		if (!trimmed || !trimmed.startsWith('-')) {
			continue;
		}

		const parsed = parseChangelogLine(trimmed, entities);

		if (parsed.entityType === 'hero' && parsed.entityName) {
			const existing = result.heroes.get(parsed.entityName) || [];
			existing.push(parsed.text);
			result.heroes.set(parsed.entityName, existing);
		} else if (parsed.entityType === 'item' && parsed.entityName) {
			const existing = result.items.get(parsed.entityName) || [];
			existing.push(parsed.text);
			result.items.set(parsed.entityName, existing);
		} else {
			result.general.push(parsed.text);
		}
	}

	return result;
}

/**
 * Generate structured norg content from grouped changes
 */
function generateStructuredContent(grouped: GroupedContent): string {
	const sections: string[] = [];

	if (grouped.general.length > 0) {
		sections.push('* General Changes');
		sections.push('');
		for (const note of grouped.general) {
			if (note.startsWith('@image ')) {
				sections.push(note);
			} else {
				sections.push(`- ${note}`);
			}
		}
	}

	if (grouped.heroes.size > 0) {
		sections.push('');
		sections.push('* Hero Changes');

		const sortedHeroes = [...grouped.heroes.entries()].sort((a, b) =>
			a[0].localeCompare(b[0])
		);

		for (const [heroName, notes] of sortedHeroes) {
			sections.push('');
			sections.push(`** ${heroName}`);
			sections.push('');
			for (const note of notes) {
				sections.push(`- ${note}`);
			}
		}
	}

	if (grouped.items.size > 0) {
		sections.push('');
		sections.push('* Item Changes');

		const sortedItems = [...grouped.items.entries()].sort((a, b) =>
			a[0].localeCompare(b[0])
		);

		for (const [itemName, notes] of sortedItems) {
			sections.push('');
			sections.push(`** ${itemName}`);
			sections.push('');
			for (const note of notes) {
				sections.push(`- ${note}`);
			}
		}
	}

	return sections.join('\n');
}

/**
 * Generate a .norg file from scraped post content
 */
function generateChangelog(
	content: PostContentResult,
	threadId: string,
	slug: string,
	entities: EntityLists
): string {
	const pubDate = content.pubDate || new Date().toISOString();
	const author = parseAuthorName(content.author);

	const rawContent = extractContent(content.content);
	const grouped = parseAndGroupContent(rawContent, entities);
	const structuredContent = generateStructuredContent(grouped);

	const lines = [
		'@document.meta',
		`title: ${escapeMetaValue(content.title)}`,
		`thread_id: ${threadId}`,
		`published: ${pubDate}`,
		`author: ${escapeMetaValue(author)}`
	];

	if (content.authorImage) {
		lines.push(`author_image: ${content.authorImage}`);
	}

	lines.push(
		'category: patch',
		'major_update: false',
		'status: draft',
		'@end',
		'',
		structuredContent ||
			'* Changelog\n\nNo structured changes were parsed for this update.'
	);

	if (content.posterReplies?.length) {
		for (let i = 0; i < content.posterReplies.length; i++) {
			const reply = content.posterReplies[i];
			const replyRaw = extractContent(reply.content);
			const replyGrouped = parseAndGroupContent(replyRaw, entities);
			const replyStructured = generateStructuredContent(replyGrouped);

			lines.push(
				'',
				'@comment',
				`Poster reply ${i + 1} (${reply.timestamp})`,
				`Consider creating a separate file: ${slug}-reply-${i + 1}.norg with parent_id in metadata`,
				'@end',
				'',
				replyStructured
			);
		}
	}

	return lines.join('\n');
}

/**
 * Scrape changelog posts from forum and write .norg files
 */
export async function scrapeChangelogs(options: ScrapeOptions = {}): Promise<void> {
	const { overwrite = false } = options;

	console.log('🌐 Fetching hero and item lists...');
	const [heroes, items] = await Promise.all([fetchHeroes(), fetchItems()]);

	const entities: EntityLists = {
		heroes: new Set(heroes.map((h) => h.name.toLowerCase())),
		items: new Set(items.map((i) => i.name.toLowerCase()))
	};
	console.log(`   Found ${entities.heroes.size} heroes, ${entities.items.size} items`);

	console.log('🔍 Fetching changelog posts from forum...');
	const posts = await scrapeChangelogPage({
		timeout: 30000
	});

	console.log(`📋 Found ${posts.length} posts`);

	const newPosts: ChangelogPost[] = [];
	const skipped: { title: string; reason: string }[] = [];

	for (const post of posts) {
		const year = new Date(post.pubDate).getFullYear();
		const slug = slugify(post.title);
		const dir = join(CHANGELOGS_DIR, String(year));
		const filepath = join(dir, `${slug}.norg`);

		if (isCurated(filepath)) {
			skipped.push({ title: post.title, reason: 'curated' });
			continue;
		}

		if (existsSync(filepath) && !overwrite) {
			skipped.push({ title: post.title, reason: 'exists (use --overwrite)' });
			continue;
		}

		newPosts.push(post);
	}

	if (skipped.length > 0) {
		console.log(`\n⏭️  Skipping ${skipped.length} posts:`);
		for (const { title, reason } of skipped.slice(0, 10)) {
			console.log(`   - ${title}: ${reason}`);
		}
		if (skipped.length > 10) {
			console.log(`   ... and ${skipped.length - 10} more`);
		}
	}

	if (newPosts.length === 0) {
		console.log('\n✨ All changelogs up to date!');
		return;
	}

	console.log(`\n🕷️  Scraping ${newPosts.length} posts...`);

	const contents = await scrapeMultipleChangelogPosts(newPosts, {
		timeout: 30000,
		useCache: true,
		cacheDir: 'lib/scraper/src/cache/posts',
		concurrency: 5,
		delayMs: 500
	});

	const contentMap = new Map(contents.map((c) => [c.title, c]));

	console.log('\n📝 Writing changelogs...');
	let created = 0;
	let updated = 0;

	for (const post of newPosts) {
		const content = contentMap.get(post.title);
		if (!content) {
			console.warn(`   ⚠️  No content for: ${post.title}`);
			continue;
		}

		const year = new Date(post.pubDate).getFullYear();
		const slug = slugify(post.title);
		const dir = join(CHANGELOGS_DIR, String(year));
		const filepath = join(dir, `${slug}.norg`);

		if (!existsSync(dir)) {
			mkdirSync(dir, { recursive: true });
		}

		const changelog = generateChangelog(content, post.postId, slug, entities);
		const isUpdate = existsSync(filepath);

		writeFileSync(filepath, changelog, 'utf-8');

		if (isUpdate) {
			console.log(`   📄 Updated: ${filepath}`);
			updated++;
		} else {
			console.log(`   ✨ Created: ${filepath}`);
			created++;
		}
	}

	console.log(`\n✅ Done! Created ${created}, updated ${updated} changelogs.`);
}
