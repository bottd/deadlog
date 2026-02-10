import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { ChangelogMetadataSchema, type ParsedChangelog } from './schema';
import { extractEntities, type TocEntry } from './extract';

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
				if (
					(value.startsWith('"') && value.endsWith('"')) ||
					(value.startsWith("'") && value.endsWith("'"))
				) {
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
			const relativePath = relative(changelogsDir, filepath);
			const slug = relativePath.replace(/\.norg$/, '');

			changelogs.push({ filepath, slug, metadata, entities });
		} catch (error) {
			console.warn(`Failed to parse: ${filepath}`, error);
		}
	}

	changelogs.sort(
		(a, b) =>
			new Date(b.metadata.published).getTime() - new Date(a.metadata.published).getTime()
	);

	return changelogs;
}
