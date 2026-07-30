import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { ChangelogMetadataSchema, type ParsedChangelog } from './schema';
import {
	extractEntities,
	extractEntityChanges,
	parseHeading,
	type TocEntry
} from './extract';
import { MOG_IMAGE_LINE_RE } from '@deadlog/utils';

function findMogFiles(dir: string): string[] {
	const files: string[] = [];
	if (!existsSync(dir)) return files;

	for (const entry of readdirSync(dir)) {
		const fullPath = join(dir, entry);
		const stat = statSync(fullPath);

		if (stat.isDirectory()) {
			files.push(...findMogFiles(fullPath));
		} else if (entry.endsWith('.mg')) {
			files.push(fullPath);
		}
	}

	return files;
}

/**
 * The leading `meta` verbatim block, whose body is KDL. The generator only ever emits
 * `key "string"`, `key #bool` and `//` comments, so a line reader stays cheaper than a
 * KDL dependency — anything richer than that has to grow one.
 */
function parseMogContent(content: string): {
	metadata: Record<string, unknown>;
	toc: TocEntry[];
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

	const toc: TocEntry[] = [];
	// The meta block was matched from position 0, so it is just a prefix to drop.
	const contentWithoutMeta = content.slice(metaMatch?.[0].length ?? 0);

	for (const line of contentWithoutMeta.split('\n')) {
		const heading = parseHeading(line.trim());
		if (heading) toc.push(heading);
	}

	return { metadata, toc };
}

export function extractPreviewImage(content: string): string | undefined {
	for (const match of content.matchAll(MOG_IMAGE_LINE_RE)) {
		try {
			const url = new URL(match[1]);
			if (!['http:', 'https:'].includes(url.protocol)) continue;
			if (url.pathname.toLowerCase().endsWith('.ico') || /favicon/i.test(url.pathname)) {
				continue;
			}
			return match[1];
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
			const { metadata: rawMetadata, toc } = parseMogContent(content);
			const metadata = ChangelogMetadataSchema.parse(rawMetadata);
			const entities = extractEntities(toc);
			const entityChanges = extractEntityChanges(content);
			const relativePath = relative(changelogsDir, filepath);
			const slug = relativePath.replace(/\.mg$/, '');
			const plainText =
				typeof rawMetadata.content_text === 'string' ? rawMetadata.content_text : '';
			const previewImage = metadata.preview_image ?? extractPreviewImage(content);

			changelogs.push({
				filepath,
				slug,
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

	changelogs.sort(
		(a, b) =>
			new Date(b.metadata.published).getTime() - new Date(a.metadata.published).getTime()
	);

	return changelogs;
}
