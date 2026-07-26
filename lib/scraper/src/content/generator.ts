import {
	groupNotesByAbility,
	parseAndGroupContent,
	type EntityLists,
	type GroupedContent
} from './parser';

// The forum names a video attachment "<name>-mp4.<id>"; a plain ".mp4" covers anywhere
// else a clip is linked directly. It serves no embeddable video, so a clip renders as a
// labelled card rather than a bare URL.
const VIDEO_EXT = 'mp4|webm|m4v';
const VIDEO_HREF_RE = new RegExp(`(?:-|\\.)(?:${VIDEO_EXT})(?:\\.|$|/)`, 'i');
const VIDEO_EXT_RE = new RegExp(`\\.(?:${VIDEO_EXT})$`, 'i');

/** "View attachment bounce_update.mp4" is XenForo chrome; the filename is the content. */
function cleanVideoLabel(label: string): string {
	const cleaned = label
		.replace(/^view attachment\s+/i, '')
		.replace(VIDEO_EXT_RE, '')
		.replace(/[-_]+/g, ' ')
		.trim();
	return cleaned || 'clip';
}
import {
	abilityFragmentId,
	escapeNorgBraces,
	parseNorgLink,
	stripNorgLinks
} from '@deadlog/utils';

const EMPTY_CHANGELOG = `* Changelog\n\nNo structured changes were parsed for this update.`;

function escapeMetaValue(value: string): string {
	if (value.includes('\n') || value.includes(':') || value.includes('"')) {
		return `"${value.replace(/"/g, '\\"')}"`;
	}
	return value;
}

function escapeInlineAttr(value: string): string {
	return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function entityHeadingBlock(name: string, type: 'hero' | 'item'): string {
	const escaped = escapeInlineAttr(name);
	return `\
@embed svelte
<EntityHeading name="${escaped}" type="${type}" />
@end`;
}

function sectionPreviewBlock(type: 'hero' | 'item', names: string[]): string {
	const escaped = names.map((n) => `"${escapeInlineAttr(n)}"`).join(', ');
	return `\
@embed svelte
<SectionPreview type="${type}" names={[${escaped}]} />
@end`;
}

/**
 * An ability can head more than one group in a patch — `detectAbilityPrefix` only
 * recognises a note when its wording is familiar, so an unrecognised note between two
 * "Shoulder Charge" notes splits them. Repeats are legitimate, duplicate ids are not, so
 * later ones get an explicit id (`-1`, `-2`, matching how the Norg renderer disambiguates
 * its own headings). The first keeps the bare slug, leaving existing anchors alone.
 */
function abilityHeadingBlock(name: string, usedIds: Set<string>): string {
	const base = abilityFragmentId(name);
	let id = base;
	for (let n = 1; usedIds.has(id); n++) id = `${base}-${n}`;
	usedIds.add(id);

	const idAttr = id === base ? '' : ` id="${id}"`;
	return `\
@embed svelte
<AbilityHeading name="${escapeInlineAttr(name)}"${idAttr} />
@end`;
}

/**
 * The forum serves no embeddable video URL, so a clip stays a link out. Swapping to a
 * real <video> once the files are hosted somewhere is a change inside VideoLink.
 */
function videoEmbedBlock(link: { target: string; label: string }): string {
	return `\
@embed svelte
<VideoLink src="${escapeInlineAttr(link.target)}" label="${escapeInlineAttr(cleanVideoLabel(link.label))}" />
@end`;
}

/**
 * Note text only — the @embed svelte blocks above rely on real braces. Prose braces are
 * escaped (see the Glyph Locking line in 2024/11-07), links carried over from the source
 * post are not.
 */
function bulletLine(note: string): string {
	return `- ${escapeNorgBraces(note)}`;
}

export function generateStructuredContent(grouped: GroupedContent): string {
	const out: string[] = [];
	// Anchor ids have to be unique across the rendered page, not just within a hero.
	const abilityIds = new Set<string>();

	if (grouped.general.length > 0) {
		out.push('* General Changes', '');
		for (const note of grouped.general) {
			const link = parseNorgLink(note);
			if (note.startsWith('@image ')) out.push(note);
			else if (link && VIDEO_HREF_RE.test(link.target)) out.push(videoEmbedBlock(link));
			else out.push(bulletLine(note));
		}
	}

	if (grouped.heroes.size > 0) {
		const sortedHeroes = [...grouped.heroes.entries()].sort((a, b) =>
			a[0].localeCompare(b[0])
		);

		out.push(
			'',
			'* Hero Changes',
			'',
			sectionPreviewBlock(
				'hero',
				sortedHeroes.map(([name]) => name)
			)
		);

		for (const [heroName, notes] of sortedHeroes) {
			out.push('', entityHeadingBlock(heroName, 'hero'), '');

			const abilityGroups = groupNotesByAbility(notes);
			for (let gi = 0; gi < abilityGroups.length; gi++) {
				const group = abilityGroups[gi];
				if (group.abilityName) {
					out.push(abilityHeadingBlock(group.abilityName, abilityIds), '');
				}
				for (const note of group.notes) {
					out.push(bulletLine(note));
				}
				if (gi < abilityGroups.length - 1) {
					out.push('');
				}
			}
		}
	}

	if (grouped.items.size > 0) {
		const sortedItems = [...grouped.items.entries()].sort((a, b) =>
			a[0].localeCompare(b[0])
		);

		out.push(
			'',
			'* Item Changes',
			'',
			sectionPreviewBlock(
				'item',
				sortedItems.map(([name]) => name)
			)
		);

		for (const [itemName, notes] of sortedItems) {
			out.push('', entityHeadingBlock(itemName, 'item'), '');
			for (const note of notes) {
				out.push(bulletLine(note));
			}
		}
	}

	return out.join('\n');
}

function collectPlainText(grouped: GroupedContent): string {
	const parts: string[] = [];

	for (const note of grouped.general) {
		// Media and bare source links are navigation, not patch content — keeping their
		// labels would put "View attachment clip.mp4" into search and meta descriptions.
		if (!note.startsWith('@image ') && !parseNorgLink(note)) {
			parts.push(note);
		}
	}
	for (const [name, notes] of grouped.heroes) {
		parts.push(name);
		parts.push(...notes);
	}
	for (const [name, notes] of grouped.items) {
		parts.push(name);
		parts.push(...notes);
	}

	// content_text feeds search and meta descriptions, so it wants the link's label
	// rather than its markup.
	return stripNorgLinks(parts.join(' '));
}

export interface ChangelogSource {
	title: string;
	published: string;
	author: string;
	authorImage?: string;
	threadId?: string;
	steamGid?: string;
	rawContent: string;
}

export function generateChangelog(
	source: ChangelogSource,
	entities: EntityLists
): string {
	const grouped = parseAndGroupContent(source.rawContent, entities);
	const structuredContent = generateStructuredContent(grouped);
	const contentText = collectPlainText(grouped);

	const out: string[] = ['@document.meta', `title: ${escapeMetaValue(source.title)}`];

	if (source.threadId) {
		out.push(`thread_id: ${source.threadId}`);
	}
	if (source.steamGid) {
		out.push(`steam_gid: ${source.steamGid}`);
	}

	out.push(`published: ${source.published}`, `author: ${escapeMetaValue(source.author)}`);

	if (source.authorImage) {
		out.push(`author_image: ${source.authorImage}`);
	}

	out.push(
		'category: patch',
		'major_update: false',
		'status: draft',
		`content_text: ${escapeMetaValue(contentText)}`,
		'@end',
		'',
		structuredContent || EMPTY_CHANGELOG
	);

	return out.join('\n');
}
