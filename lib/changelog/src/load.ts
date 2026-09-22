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
	changelogsDir: string
): Promise<ParsedChangelog[]> {
	const files = findMogFiles(changelogsDir);
	const changelogs: ParsedChangelog[] = [];

	for (const filepath of files) {
		const content = readFileSync(filepath, 'utf-8');

		try {
			const {
				metadata: rawMetadata,
				toc,
				changes: entityChanges,
				images,
				stats
			} = await parseStructure(content);
			const metadata = ChangelogMetadataSchema.parse(rawMetadata);
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
				previewImage,
				...(stats && { stats })
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
