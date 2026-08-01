import { existsSync, globSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { basename, dirname, join } from 'path';
import {
	scrapeChangelogPage,
	scrapeMultipleChangelogPosts,
	fetchHeroes,
	fetchItems,
	fetchSteamAnnouncements,
	isSteamUnfurl,
	isSteamPatchContent,
	parseSteamContent,
	renderSteamAnnouncement,
	type ChangelogPost,
	type PostContentResult,
	type SteamAnnouncement
} from './api';
import { parseAuthorName } from './authorParser';
import { extractContent, deduplicateLines, type EntityLists } from './content/parser';
import {
	buildEntityAssets,
	generateChangelog,
	type ChangelogSource
} from './content/generator';
import { MOG_IMAGE_PREFIX, toSlug } from '@deadlog/utils';
import { entityNameAliases } from '@deadlog/changelog';

export const CHANGELOGS_DIR = process.env.CHANGELOGS_DIR || 'app/changelogs';

interface ScrapeOptions {
	overwrite?: boolean;
}

// --- Helpers ---

function slugify(title: string): string {
	const cleaned = title.replace(/\b\d{4}\b/g, '').replace(/\bupdate\b/gi, '');
	return toSlug(cleaned) || 'announcement';
}

function fileStatus(filepath: string): 'missing' | 'curated' | 'draft' {
	if (!existsSync(filepath)) return 'missing';
	const content = readFileSync(filepath, 'utf-8');
	return content.includes('status "published"') ? 'curated' : 'draft';
}

function resolveFilepath(title: string, date: string): string {
	const year = new Date(date).getUTCFullYear();
	const slug = slugify(title);
	return join(CHANGELOGS_DIR, String(year), `${slug}.mg`);
}

function skipReason(filepath: string, overwrite: boolean): string | null {
	const status = fileStatus(filepath);
	if (status === 'curated') return 'curated';
	if (status === 'draft' && !overwrite) return 'exists (use --overwrite)';
	return null;
}

function writeMogFile(filepath: string, content: string): 'created' | 'updated' {
	mkdirSync(dirname(filepath), { recursive: true });
	const isUpdate = existsSync(filepath);
	writeFileSync(filepath, content, 'utf-8');
	return isUpdate ? 'updated' : 'created';
}

function existingSteamFiles(): Map<string, string> {
	const files = new Map<string, string>();
	for (const filepath of globSync(join(CHANGELOGS_DIR, '**', '*.mg'))) {
		const gid = readFileSync(filepath, 'utf-8').match(/^steam_gid "([^"]+)"$/m)?.[1];
		if (gid) files.set(gid, filepath);
	}
	return files;
}

function resolveSteamFilepath(
	note: SteamAnnouncement,
	filesByGid: ReadonlyMap<string, string>,
	reserved: Set<string>
): string {
	const existing = filesByGid.get(note.gid);
	if (existing) return existing;

	let filepath = resolveFilepath(note.title, note.date);
	if (reserved.has(filepath) || existsSync(filepath)) {
		filepath = join(dirname(filepath), `${basename(filepath, '.mg')}-${note.gid}.mg`);
	}
	reserved.add(filepath);
	return filepath;
}

function needsSteamBackfill(
	filepath: string,
	note: SteamAnnouncement | undefined
): boolean {
	if (!note || fileStatus(filepath) !== 'draft') return false;
	return !readFileSync(filepath, 'utf-8').includes(`steam_gid "${note.gid}"`);
}

// --- Source builders ---

function buildChangelogSource(
	content: PostContentResult,
	threadId: string,
	steamContent?: SteamAnnouncement
): ChangelogSource {
	const forumRaw = extractContent(content.content);
	const forumImages = forumRaw
		.split('\n')
		.filter((line) => line.startsWith(MOG_IMAGE_PREFIX) && !/favicon/i.test(line));
	const replies = (content.posterReplies ?? [])
		.map((reply) => extractContent(reply.content))
		.filter((reply) => reply.trim());
	let rawContent = forumRaw;
	let renderedContent: ChangelogSource['renderedContent'];
	let steamMeta: SteamAnnouncement | undefined;

	if (steamContent) {
		const steamRaw = parseSteamContent(steamContent.content);
		const steamUnfurl = isSteamUnfurl(content.content);
		const roughForumLen = content.content.replace(/<[^>]+>/g, '').length;
		const useSteam = steamUnfurl || roughForumLen <= steamRaw.length;
		if (steamUnfurl) steamMeta = steamContent;

		if (useSteam && replies.length === 0 && !isSteamPatchContent(steamContent.content)) {
			renderedContent = renderSteamAnnouncement(steamContent.title, steamContent.content);
		} else if (useSteam) {
			rawContent = [...forumImages, steamRaw].join('\n');
		}
	}
	if (!renderedContent)
		rawContent = deduplicateLines([rawContent, ...replies].join('\n'));

	return {
		title: steamMeta ? steamMeta.title : content.title,
		published: steamMeta ? steamMeta.date : content.pubDate || new Date().toISOString(),
		author: steamMeta ? steamMeta.author : parseAuthorName(content.author),
		authorImage: steamMeta ? undefined : content.authorImage,
		threadId,
		steamGid: steamContent?.gid,
		...(renderedContent ? { renderedContent } : { rawContent })
	};
}

function buildSteamChangelogSource(steamNote: SteamAnnouncement): ChangelogSource {
	return {
		title: steamNote.title,
		published: steamNote.date,
		author: steamNote.author,
		steamGid: steamNote.gid,
		...(isSteamPatchContent(steamNote.content)
			? { rawContent: parseSteamContent(steamNote.content) }
			: { renderedContent: renderSteamAnnouncement(steamNote.title, steamNote.content) })
	};
}

const STEAM_FORUM_MATCH_WINDOW_MS = 15 * 60 * 1000;

export function matchSteamNotesToForumPosts(
	posts: ChangelogPost[],
	steamNotes: SteamAnnouncement[]
): {
	steamByForumPostId: Map<string, SteamAnnouncement>;
	unmatchedSteamNotes: SteamAnnouncement[];
} {
	const steamByForumPostId = new Map<string, SteamAnnouncement>();
	const consumedGids = new Set<string>();
	const claim = (post: ChangelogPost, note: SteamAnnouncement) => {
		steamByForumPostId.set(post.postId, note);
		consumedGids.add(note.gid);
	};

	for (const post of posts) {
		const candidates = steamNotes.filter(
			(note) => !consumedGids.has(note.gid) && toSlug(note.title) === toSlug(post.title)
		);
		if (candidates.length === 1) claim(post, candidates[0]);
	}

	const unmatchedPosts = posts.filter((post) => !steamByForumPostId.has(post.postId));
	const unmatchedNotes = steamNotes.filter((note) => !consumedGids.has(note.gid));
	const isClose = (post: ChangelogPost, note: SteamAnnouncement) =>
		/\bupdate\b/i.test(`${note.title}\n${note.content}`) &&
		Math.abs(new Date(post.pubDate).getTime() - new Date(note.date).getTime()) <=
			STEAM_FORUM_MATCH_WINDOW_MS;

	for (const post of unmatchedPosts) {
		const noteCandidates = unmatchedNotes.filter(
			(note) => !consumedGids.has(note.gid) && isClose(post, note)
		);
		if (noteCandidates.length !== 1) continue;

		const [note] = noteCandidates;
		const postCandidates = unmatchedPosts.filter(
			(candidate) => !steamByForumPostId.has(candidate.postId) && isClose(candidate, note)
		);
		if (postCandidates.length === 1) claim(post, note);
	}

	return {
		steamByForumPostId,
		unmatchedSteamNotes: steamNotes.filter((note) => !consumedGids.has(note.gid))
	};
}

// --- Main orchestration ---

export async function scrapeChangelogs(options: ScrapeOptions = {}): Promise<void> {
	const { overwrite = false } = options;

	console.log('🌐 Fetching hero and item lists...');
	const [heroes, items] = await Promise.all([fetchHeroes(), fetchItems()]);
	const assets = buildEntityAssets(heroes, items);

	const entities: EntityLists = {
		heroes: new Set(heroes.flatMap((h) => entityNameAliases(h.name))),
		items: new Set(items.flatMap((i) => entityNameAliases(i.name)))
	};
	console.log(`   Found ${entities.heroes.size} heroes, ${entities.items.size} items`);

	console.log('🔍 Fetching changelog posts from forum and Steam API...');
	const [posts, steamNotes] = await Promise.all([
		scrapeChangelogPage(),
		fetchSteamAnnouncements({ timeout: 30000 }).catch((err) => {
			console.warn(`   ⚠️  Steam API fetch failed: ${err.message}`);
			return [] as SteamAnnouncement[];
		})
	]);

	console.log(
		`📋 Found ${posts.length} forum posts, ${steamNotes.length} Steam announcements`
	);

	const { steamByForumPostId, unmatchedSteamNotes } = matchSteamNotesToForumPosts(
		posts,
		steamNotes
	);

	const newPosts: ChangelogPost[] = [];
	const skipped: { title: string; reason: string }[] = [];

	for (const post of posts) {
		const filepath = resolveFilepath(post.title, post.pubDate);

		const reason = skipReason(filepath, overwrite);
		if (reason && !needsSteamBackfill(filepath, steamByForumPostId.get(post.postId))) {
			skipped.push({ title: post.title, reason });
			continue;
		}

		newPosts.push(post);
	}

	const filesByGid = existingSteamFiles();
	const reservedPaths = new Set(filesByGid.values());
	const steamOnlyNotes: { note: SteamAnnouncement; filepath: string }[] = [];
	for (const note of unmatchedSteamNotes) {
		const filepath = resolveSteamFilepath(note, filesByGid, reservedPaths);

		const reason = skipReason(filepath, overwrite);
		if (reason) {
			skipped.push({ title: note.title, reason });
			continue;
		}

		steamOnlyNotes.push({ note, filepath });
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

		const contents = await scrapeMultipleChangelogPosts(newPosts, { useCache: true });

		const contentMap = new Map(contents.map((c) => [c.postId, c]));
		console.log('\n📝 Writing changelogs...');

		for (const post of newPosts) {
			const content = contentMap.get(post.postId);
			if (!content) {
				console.warn(`   ⚠️  No content for: ${post.title}`);
				continue;
			}

			const filepath = resolveFilepath(post.title, post.pubDate);

			const steamNote = steamByForumPostId.get(post.postId);

			if (steamNote) {
				console.log(`   🔗 Matched Steam content for: ${post.title}`);
			}

			const source = buildChangelogSource(content, post.postId, steamNote);
			const changelog = generateChangelog(source, entities, assets);
			const result = writeMogFile(filepath, changelog);

			console.log(
				`   ${result === 'created' ? '✨ Created' : '📄 Updated'}: ${filepath}`
			);
			if (result === 'created') created++;
			else updated++;
		}
	}

	if (steamOnlyNotes.length > 0) {
		console.log(`\n🎮 Writing ${steamOnlyNotes.length} Steam-only announcements...`);

		for (const { note, filepath } of steamOnlyNotes) {
			const source = buildSteamChangelogSource(note);
			const changelog = generateChangelog(source, entities, assets);
			const result = writeMogFile(filepath, changelog);

			console.log(
				`   ${result === 'created' ? '✨ Created' : '📄 Updated'}: ${filepath}`
			);
			if (result === 'created') created++;
			else updated++;
		}
	}

	console.log(`\n✅ Done! Created ${created}, updated ${updated} changelogs.`);
}
