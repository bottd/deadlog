import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import {
	scrapeChangelogPage,
	scrapeMultipleChangelogPosts,
	fetchHeroes,
	fetchItems,
	fetchSteamPatchNotes,
	isSteamUnfurl,
	parseSteamContent,
	extractDateFromTitle,
	type ChangelogPost,
	type PostContentResult,
	type SteamPatchNote
} from './api';
import { parseAuthorName } from './authorParser';
import { extractContent, deduplicateLines, type EntityLists } from './content/parser';
import { generateChangelog, type ChangelogSource } from './content/generator';
import { toSlug } from '@deadlog/utils';
import { entityNameAliases } from '@deadlog/changelog';

const CHANGELOGS_DIR = process.env.CHANGELOGS_DIR || 'app/changelogs';

interface ScrapeOptions {
	overwrite?: boolean;
}

// --- Helpers ---

function slugify(title: string): string {
	const cleaned = title.replace(/\b\d{4}\b/g, '').replace(/\bupdate\b/gi, '');
	return toSlug(cleaned);
}

function fileStatus(filepath: string): 'missing' | 'curated' | 'draft' {
	if (!existsSync(filepath)) return 'missing';
	const content = readFileSync(filepath, 'utf-8');
	return content.includes('status: published') ? 'curated' : 'draft';
}

function resolveFilepath(title: string, date: string) {
	const year = new Date(date).getFullYear();
	const slug = slugify(title);
	const dir = join(CHANGELOGS_DIR, String(year));
	const filepath = join(dir, `${slug}.norg`);
	return { year, slug, dir, filepath };
}

function skipReason(filepath: string, overwrite: boolean): string | null {
	const status = fileStatus(filepath);
	if (status === 'curated') return 'curated';
	if (status === 'draft' && !overwrite) return 'exists (use --overwrite)';
	return null;
}

function writeNorgFile(filepath: string, content: string): 'created' | 'updated' {
	mkdirSync(dirname(filepath), { recursive: true });
	const isUpdate = existsSync(filepath);
	writeFileSync(filepath, content, 'utf-8');
	return isUpdate ? 'updated' : 'created';
}

// --- Source builders ---

function buildChangelogSource(
	content: PostContentResult,
	threadId: string,
	entities: EntityLists,
	steamContent?: SteamPatchNote
): ChangelogSource {
	const contentParts: string[] = [];

	if (steamContent) {
		const steamRaw = parseSteamContent(steamContent.content);

		if (isSteamUnfurl(content.content)) {
			contentParts.push(steamRaw);
		} else {
			const roughForumLen = content.content.replace(/<[^>]+>/g, '').length;
			if (roughForumLen > steamRaw.length) {
				contentParts.push(extractContent(content.content));
			} else {
				contentParts.push(steamRaw);
			}
		}
	} else {
		contentParts.push(extractContent(content.content));
	}

	if (content.posterReplies?.length) {
		for (const reply of content.posterReplies) {
			const replyRaw = extractContent(reply.content);
			if (replyRaw.trim()) {
				contentParts.push(replyRaw);
			}
		}
	}

	return {
		title: content.title,
		published: content.pubDate || new Date().toISOString(),
		author: parseAuthorName(content.author),
		authorImage: content.authorImage,
		threadId,
		steamGid: steamContent?.gid,
		rawContent: deduplicateLines(contentParts.join('\n'))
	};
}

function buildSteamChangelogSource(steamNote: SteamPatchNote): ChangelogSource {
	return {
		title: steamNote.title,
		published: steamNote.date,
		author: steamNote.author,
		steamGid: steamNote.gid,
		rawContent: parseSteamContent(steamNote.content)
	};
}

function buildSteamLookup(steamNotes: SteamPatchNote[]): Map<string, SteamPatchNote> {
	const lookup = new Map<string, SteamPatchNote>();
	for (const note of steamNotes) {
		const dateKey = extractDateFromTitle(note.title);
		if (dateKey) {
			lookup.set(dateKey, note);
		}
	}
	return lookup;
}

// --- Main orchestration ---

export async function scrapeChangelogs(options: ScrapeOptions = {}): Promise<void> {
	const { overwrite = false } = options;

	console.log('🌐 Fetching hero and item lists...');
	const [heroes, items] = await Promise.all([fetchHeroes(), fetchItems()]);

	const entities: EntityLists = {
		heroes: new Set(heroes.flatMap((h) => entityNameAliases(h.name))),
		items: new Set(items.flatMap((i) => entityNameAliases(i.name)))
	};
	console.log(`   Found ${entities.heroes.size} heroes, ${entities.items.size} items`);

	console.log('🔍 Fetching changelog posts from forum and Steam API...');
	const [posts, steamNotes] = await Promise.all([
		scrapeChangelogPage({ timeout: 30000 }),
		fetchSteamPatchNotes({ timeout: 30000 }).catch((err) => {
			console.warn(`   ⚠️  Steam API fetch failed: ${err.message}`);
			return [] as SteamPatchNote[];
		})
	]);

	console.log(
		`📋 Found ${posts.length} forum posts, ${steamNotes.length} Steam patch notes`
	);

	const steamLookup = buildSteamLookup(steamNotes);
	const forumDateKeys = new Set<string>();

	const newPosts: ChangelogPost[] = [];
	const skipped: { title: string; reason: string }[] = [];

	for (const post of posts) {
		const { filepath } = resolveFilepath(post.title, post.pubDate);

		const dateKey = extractDateFromTitle(post.title);
		if (dateKey) forumDateKeys.add(dateKey);

		const reason = skipReason(filepath, overwrite);
		if (reason) {
			skipped.push({ title: post.title, reason });
			continue;
		}

		newPosts.push(post);
	}

	const steamOnlyNotes: SteamPatchNote[] = [];
	for (const note of steamNotes) {
		const dateKey = extractDateFromTitle(note.title);
		if (!dateKey) continue;
		if (forumDateKeys.has(dateKey)) continue;

		const { filepath } = resolveFilepath(note.title, note.date);

		const reason = skipReason(filepath, overwrite);
		if (reason) {
			skipped.push({ title: note.title, reason });
			continue;
		}

		steamOnlyNotes.push(note);
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

	if (newPosts.length === 0 && steamOnlyNotes.length === 0) {
		console.log('\n✨ All changelogs up to date!');
		return;
	}

	let created = 0;
	let updated = 0;

	if (newPosts.length > 0) {
		console.log(`\n🕷️  Scraping ${newPosts.length} forum posts...`);

		const contents = await scrapeMultipleChangelogPosts(newPosts, {
			timeout: 30000,
			useCache: true,
			cacheDir: 'lib/scraper/src/cache/posts',
			concurrency: 5,
			delayMs: 500
		});

		const contentMap = new Map(contents.map((c) => [c.title, c]));

		console.log('\n📝 Writing changelogs...');

		for (const post of newPosts) {
			const content = contentMap.get(post.title);
			if (!content) {
				console.warn(`   ⚠️  No content for: ${post.title}`);
				continue;
			}

			const { filepath } = resolveFilepath(post.title, post.pubDate);

			const dateKey = extractDateFromTitle(post.title);
			const steamNote = dateKey ? steamLookup.get(dateKey) : undefined;

			if (steamNote) {
				console.log(`   🔗 Matched Steam content for: ${post.title}`);
			}

			const source = buildChangelogSource(content, post.postId, entities, steamNote);
			const changelog = generateChangelog(source, entities);
			const result = writeNorgFile(filepath, changelog);

			console.log(
				`   ${result === 'created' ? '✨ Created' : '📄 Updated'}: ${filepath}`
			);
			if (result === 'created') created++;
			else updated++;
		}
	}

	if (steamOnlyNotes.length > 0) {
		console.log(`\n🎮 Writing ${steamOnlyNotes.length} Steam-only patch notes...`);

		for (const note of steamOnlyNotes) {
			const { filepath } = resolveFilepath(note.title, note.date);

			const source = buildSteamChangelogSource(note);
			const changelog = generateChangelog(source, entities);
			const result = writeNorgFile(filepath, changelog);

			console.log(
				`   ${result === 'created' ? '✨ Created' : '📄 Updated'}: ${filepath}`
			);
			if (result === 'created') created++;
			else updated++;
		}
	}

	console.log(`\n✅ Done! Created ${created}, updated ${updated} changelogs.`);
}
