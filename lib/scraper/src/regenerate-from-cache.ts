/**
 * Offline changelog regeneration.
 *
 * `scrapeChangelogs` re-fetches the forum and the Steam API, which drifts: the Steam
 * endpoint only returns the ~16 most recent notes, so a full rescrape empties older
 * Steam-sourced patches. This regenerates from the on-disk post cache instead, so a
 * change to the parser or generator can be applied to existing changelogs without
 * touching the network.
 *
 * Posts whose body originally came from Steam cannot be reproduced (there is no Steam
 * cache), so they simply fail to match and are reported — never silently rewritten.
 *
 *   HEROES_JSON=… ITEMS_JSON=… OUT_DIR=… tsx lib/scraper/src/regenerate-from-cache.ts
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { parseAuthorName } from './authorParser';
import { extractContent, deduplicateLines, type EntityLists } from './content/parser';
import { generateChangelog, type ChangelogSource } from './content/generator';
import { toSlug, entityNameAliases } from '@deadlog/utils';

const CACHE_DIR = 'lib/scraper/src/cache/posts';
const SRC_DIR = process.env.SRC_DIR || 'app/changelogs';
// Point OUT_DIR elsewhere to diff a prospective regeneration without touching the tree.
const OUT_DIR = process.env.OUT_DIR || SRC_DIR;
/**
 * Only files listed here are rewritten. Produce it by running this script against
 * unmodified code and recording everything that came back byte-identical (RECORD=path):
 * reproducing a file today is the only evidence that regenerating it tomorrow is safe.
 */
const ALLOWLIST = process.env.ALLOWLIST;
const RECORD = process.env.RECORD;

interface CachedPost {
	postId: string;
	title: string;
	author: string;
	authorImage?: string;
	pubDate: string;
	content: string;
	posterReplies?: { content: string }[];
}

function loadNames(envVar: string): string[] {
	const path = process.env[envVar];
	if (!path) throw new Error(`${envVar} is required`);
	return (JSON.parse(readFileSync(path, 'utf-8')) as { name: string }[]).map(
		(r) => r.name
	);
}

/** Mirrors pipeline.ts resolveFilepath/slugify — the output path must match exactly. */
function relativePath(title: string, date: string): string {
	const cleaned = title.replace(/\b\d{4}\b/g, '').replace(/\bupdate\b/gi, '');
	const year = new Date(date).getFullYear();
	return join(String(year), `${toSlug(cleaned)}.norg`);
}

/** Mirrors pipeline.ts buildChangelogSource, minus the Steam branch. */
function buildSource(post: CachedPost): ChangelogSource {
	const contentParts = [extractContent(post.content)];

	for (const reply of post.posterReplies ?? []) {
		const replyRaw = extractContent(reply.content);
		if (replyRaw.trim()) contentParts.push(replyRaw);
	}

	return {
		title: post.title,
		published: post.pubDate,
		author: parseAuthorName(post.author),
		authorImage: post.authorImage,
		threadId: post.postId,
		rawContent: deduplicateLines(contentParts.join('\n'))
	};
}

function main() {
	const entities: EntityLists = {
		heroes: new Set(loadNames('HEROES_JSON').flatMap((n) => entityNameAliases(n))),
		items: new Set(loadNames('ITEMS_JSON').flatMap((n) => entityNameAliases(n)))
	};

	const allowed = ALLOWLIST
		? new Set(readFileSync(ALLOWLIST, 'utf-8').split('\n').filter(Boolean))
		: null;

	const files = readdirSync(CACHE_DIR).filter((f) => f.endsWith('.json'));
	const reproduced: string[] = [];
	let written = 0;
	let unchanged = 0;
	const missing: string[] = [];
	const blocked: string[] = [];

	for (const file of files) {
		const { data: post } = JSON.parse(readFileSync(join(CACHE_DIR, file), 'utf-8')) as {
			data: CachedPost;
		};

		const relative = relativePath(post.title, post.pubDate);
		const source = join(SRC_DIR, relative);
		if (!existsSync(source)) {
			missing.push(`${file} -> ${relative}`);
			continue;
		}

		const generated = generateChangelog(buildSource(post), entities);
		if (readFileSync(source, 'utf-8') === generated) {
			reproduced.push(relative);
			unchanged++;
			continue;
		}

		if (allowed && !allowed.has(relative)) {
			blocked.push(relative);
			continue;
		}

		const target = join(OUT_DIR, relative);
		mkdirSync(dirname(target), { recursive: true });
		writeFileSync(target, generated, 'utf-8');
		written++;
	}

	if (RECORD) writeFileSync(RECORD, reproduced.sort().join('\n'), 'utf-8');

	console.log(`cached posts: ${files.length}`);
	console.log(`  byte-identical: ${unchanged}`);
	console.log(`  rewritten:      ${written}`);
	if (blocked.length) {
		console.log(`  skipped (not reproducible, left as-is): ${blocked.length}`);
		for (const b of blocked) console.log(`     ${b}`);
	}
	if (missing.length) {
		console.log(`  no target file: ${missing.length}`);
		for (const m of missing) console.log(`     ${m}`);
	}
}

main();
