import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, relative } from 'path';
import { ChangelogMetadataSchema, type ParsedChangelog } from './schema';
import { extractEntities, parseStructure } from './extract';

interface ChangelogIdentity {
	slug: string;
	aliases: string[];
	metadata: { steam_gid?: string; thread_id?: string };
}

export function deduplicateChangelogs<T extends ChangelogIdentity>(
	changelogs: readonly T[]
): T[] {
	const unique: T[] = [];
	const sameSource = (left: T, right: T) => {
		const leftMeta = left.metadata;
		const rightMeta = right.metadata;
		return (
			(leftMeta.steam_gid !== undefined && leftMeta.steam_gid === rightMeta.steam_gid) ||
			(leftMeta.thread_id !== undefined && leftMeta.thread_id === rightMeta.thread_id) ||
			(!leftMeta.steam_gid &&
				!leftMeta.thread_id &&
				!rightMeta.steam_gid &&
				!rightMeta.thread_id &&
				left.slug === right.slug)
		);
	};
	const sourceCount = (changelog: T) =>
		Number(Boolean(changelog.metadata.thread_id)) +
		Number(Boolean(changelog.metadata.steam_gid));

	for (const changelog of changelogs) {
		const matches = unique.flatMap((current, index) =>
			sameSource(changelog, current) ? [index] : []
		);
		if (matches.length === 0) {
			unique.push(changelog);
			continue;
		}

		const candidates = matches.map((index) => unique[index]).concat(changelog);
		const preferred = candidates.reduce((best, candidate) =>
			sourceCount(candidate) > sourceCount(best) ? candidate : best
		);
		const aliases = [
			preferred.slug,
			...candidates.flatMap((candidate) => candidate.aliases)
		].filter((slug, index, all) => all.indexOf(slug) === index);
		unique[matches[0]] = { ...preferred, aliases };
		for (const index of matches.slice(1).reverse()) unique.splice(index, 1);
	}

	return unique;
}

function findMogFiles(dir: string): string[] {
	if (!existsSync(dir)) return [];
	return readdirSync(dir, { recursive: true, encoding: 'utf-8' })
		.filter((entry) => entry.endsWith('.mg'))
		.map((entry) => join(dir, entry));
}

/**
 * The leading `meta` verbatim block, whose body is KDL. The generator only ever emits
 * `key "string"`, `key #bool` and `//` comments, so a line reader stays cheaper than a
 * KDL dependency — anything richer than that has to grow one.
 */
function parseMogMetadata(content: string): {
	metadata: Record<string, unknown>;
	body: string;
} {
	const metaMatch = content.match(/^``meta:[ \t]*\n([\s\S]*?)\n``/);
	const metadata: Record<string, unknown> = {};

	if (metaMatch) {
		for (const line of metaMatch[1].split('\n')) {
			// A leading `/` is a KDL comment, not a key.
			const match = line.trim().match(/^([^\s/]\S*)\s+(.+)$/);
			if (!match) continue;

			const [, key, raw] = match;
			// The generator writes strings with JSON.stringify, so JSON.parse reverses it.
			// A value that is neither shape is malformed; letting it throw beats guessing,
			// since loadAllChangelogs reports the offending file.
			metadata[key] = raw.startsWith('#') ? raw === '#true' : JSON.parse(raw);
		}
	}

	// The meta block was matched from position 0, so it is just a prefix to drop.
	return { metadata, body: content.slice(metaMatch?.[0].length ?? 0) };
}

/**
 * The patch's own screenshot, from the images `parseStructure` found outside every
 * block — an entity portrait is chrome and would otherwise win by being first.
 */
export function extractPreviewImage(images: string[]): string | undefined {
	for (const candidate of images) {
		try {
			const url = new URL(candidate);
			if (!['http:', 'https:'].includes(url.protocol)) continue;
			if (url.pathname.toLowerCase().endsWith('.ico') || /favicon/i.test(url.pathname)) {
				continue;
			}
			return candidate;
		} catch {
			continue;
		}
	}

	return undefined;
}

export async function loadAllChangelogs(
	changelogsDir: string,
	options: { curatedOnly?: boolean } = {}
): Promise<ParsedChangelog[]> {
	const { curatedOnly = true } = options;
	const files = findMogFiles(changelogsDir);
	const changelogs: ParsedChangelog[] = [];

	for (const filepath of files) {
		const content = readFileSync(filepath, 'utf-8');

		if (curatedOnly && content.includes('status "draft"')) {
			continue;
		}

		try {
			const { metadata: rawMetadata, body } = parseMogMetadata(content);
			const metadata = ChangelogMetadataSchema.parse(rawMetadata);
			const { toc, changes: entityChanges, images } = parseStructure(body);
			const entities = extractEntities(toc);
			const relativePath = relative(changelogsDir, filepath);
			const slug = relativePath.replace(/\.mg$/, '');
			const plainText =
				typeof rawMetadata.content_text === 'string' ? rawMetadata.content_text : '';
			const previewImage = metadata.preview_image ?? extractPreviewImage(images);

			changelogs.push({
				filepath,
				slug,
				aliases: metadata.alias ? [slug, metadata.alias] : [slug],
				metadata,
				entities,
				entityChanges,
				plainText,
				previewImage
			});
		} catch (error) {
			throw new Error(`Failed to parse changelog: ${filepath}`, { cause: error });
		}
	}

	const unique = deduplicateChangelogs(changelogs);
	unique.sort(
		(a, b) =>
			new Date(b.metadata.published).getTime() - new Date(a.metadata.published).getTime()
	);

	return unique;
}
