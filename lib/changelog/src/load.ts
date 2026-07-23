import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { ChangelogMetadataSchema, type ParsedChangelog } from './schema';
import { extractEntities, extractEntityChanges, type TocEntry } from './extract';

function findNorgFiles(dir: string): string[] {
	const files: string[] = [];
	if (!existsSync(dir)) return files;

	for (const entry of readdirSync(dir)) {
		const fullPath = join(dir, entry);
		const stat = statSync(fullPath);

		if (stat.isDirectory()) {
			files.push(...findNorgFiles(fullPath));
		} else if (entry.endsWith('.norg')) {
			files.push(fullPath);
		}
	}

	return files;
}

function parseNorgContent(content: string): {
	metadata: Record<string, unknown>;
	toc: TocEntry[];
} {
	const metaMatch = content.match(/@document\.meta\s*\n([\s\S]*?)\n@end/);
	const metadata: Record<string, unknown> = {};

	if (metaMatch) {
		for (const line of metaMatch[1].split('\n')) {
			const colonIndex = line.indexOf(':');
			if (colonIndex === -1) continue;

			const key = line.slice(0, colonIndex).trim();
			let value: string | boolean = line.slice(colonIndex + 1).trim();

			if (value === 'true') {
				metadata[key] = true;
			} else if (value === 'false') {
				metadata[key] = false;
			} else {
				if (value.startsWith('"') && value.endsWith('"')) {
					value = value.slice(1, -1).replace(/\\"/g, '"');
				} else if (value.startsWith("'") && value.endsWith("'")) {
					value = value.slice(1, -1);
				}
				metadata[key] = value;
			}
		}
	}

	const toc: TocEntry[] = [];
	const contentWithoutMeta = content
		.replace(/@document\.meta[\s\S]*?@end/g, '')
		.replace(/@comment[\s\S]*?@end/g, '');

	for (const line of contentWithoutMeta.split('\n')) {
		const match = line.match(/^(\*+)\s+(.+)$/);
		if (match) {
			const level = match[1].length;
			const title = match[2].trim();
			const id = title
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/^-+|-+$/g, '');
			toc.push({ level, title, id });
		}
	}

	return { metadata, toc };
}

export function extractPreviewImage(content: string): string | undefined {
	for (const match of content.matchAll(/^@image\s+(\S+)\s*$/gm)) {
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
	const files = findNorgFiles(changelogsDir);
	const changelogs: ParsedChangelog[] = [];

	for (const filepath of files) {
		const content = readFileSync(filepath, 'utf-8');

		if (curatedOnly && content.includes('status: draft')) {
			continue;
		}

		try {
			const { metadata: rawMetadata, toc } = parseNorgContent(content);
			const metadata = ChangelogMetadataSchema.parse(rawMetadata);
			const entities = extractEntities(toc, content);
			const entityChanges = extractEntityChanges(content);
			const relativePath = relative(changelogsDir, filepath);
			const slug = relativePath.replace(/\.norg$/, '');
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
