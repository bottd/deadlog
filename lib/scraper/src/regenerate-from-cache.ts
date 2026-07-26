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
 *   HEROES_JSON=… ITEMS_JSON=… tsx lib/scraper/src/regenerate-from-cache.ts
 *
 * Writes in place. Set OUT_DIR to send the rewrites somewhere else instead — the
 * comparison still reads the real changelogs, so a prospective regeneration can be
 * diffed without dirtying the tree.
 */
import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { cachedPostSchema, POST_CACHE_DIR } from './api';
import { buildChangelogSource, resolveFilepath } from './pipeline';
import { type EntityLists } from './content/parser';
import { generateChangelog } from './content/generator';
import { entityNameAliases } from '@deadlog/utils';

/**
 * Only files listed here are rewritten. Produce it by running this script against
 * unmodified code and recording everything that came back byte-identical (RECORD=path):
 * reproducing a file today is the only evidence that regenerating it tomorrow is safe.
 */
const ALLOWLIST = process.env.ALLOWLIST;
const RECORD = process.env.RECORD;
/** Write target only; the comparison always reads the real changelogs. */
const OUT_DIR = process.env.OUT_DIR;

function loadNames(envVar: string): string[] {
	const path = process.env[envVar];
	if (!path) throw new Error(`${envVar} is required`);
	return (JSON.parse(readFileSync(path, 'utf-8')) as { name: string }[]).map(
		(r) => r.name
	);
}

function main() {
	const entities: EntityLists = {
		heroes: new Set(loadNames('HEROES_JSON').flatMap((n) => entityNameAliases(n))),
		items: new Set(loadNames('ITEMS_JSON').flatMap((n) => entityNameAliases(n)))
	};

	const allowed = ALLOWLIST
		? new Set(readFileSync(ALLOWLIST, 'utf-8').split('\n').filter(Boolean))
		: null;

	const files = readdirSync(POST_CACHE_DIR).filter((f) => f.endsWith('.json'));
	const reproduced: string[] = [];
	let written = 0;
	const missing: string[] = [];
	const blocked: string[] = [];

	for (const file of files) {
		// Validated, so a cache-format bump fails here rather than silently rewriting
		// every changelog from a misread body.
		const { data: post } = cachedPostSchema.parse(
			JSON.parse(readFileSync(join(POST_CACHE_DIR, file), 'utf-8'))
		);

		const { filepath } = resolveFilepath(post.title, post.pubDate);
		if (!existsSync(filepath)) {
			missing.push(`${file} -> ${filepath}`);
			continue;
		}

		// No steamContent: the Steam body cannot be refetched, so those files never match
		// and are reported rather than rewritten.
		const source = buildChangelogSource(post, post.postId, entities);
		const generated = generateChangelog(source, entities);
		if (readFileSync(filepath, 'utf-8') === generated) {
			reproduced.push(filepath);
			continue;
		}

		if (allowed && !allowed.has(filepath)) {
			blocked.push(filepath);
			continue;
		}

		const target = OUT_DIR ? join(OUT_DIR, filepath) : filepath;
		mkdirSync(dirname(target), { recursive: true });
		writeFileSync(target, generated, 'utf-8');
		written++;
	}

	if (RECORD) writeFileSync(RECORD, reproduced.sort().join('\n'), 'utf-8');

	console.log(`cached posts: ${files.length}`);
	console.log(`  byte-identical: ${reproduced.length}`);
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
