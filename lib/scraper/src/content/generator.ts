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
	MOG_IMAGE_PREFIX,
	entityFragmentId,
	entityNameAliases,
	escapeMogDelimiters,
	mogImage,
	parseMogLink,
	stripMogLinks
} from '@deadlog/utils';
import type { HeroesApiResponse, ItemsApiResponse } from '../types/deadlockApi';

/**
 * Icon URL per entity, keyed by every alias a note might name it with. Baked into the
 * heading rather than resolved at render time, so the portrait survives without a
 * component — the trade is that a changed asset URL needs a regeneration.
 */
export interface EntityIcons {
	hero: Map<string, string>;
	item: Map<string, string>;
	ability: Map<string, string>;
}

function indexByAlias<T>(rows: T[], name: (row: T) => string, image: (row: T) => string) {
	const map = new Map<string, string>();
	for (const row of rows) {
		const url = image(row);
		if (!url) continue;
		for (const alias of entityNameAliases(name(row))) map.set(alias, url);
	}
	return map;
}

/** Mirrors the precedence the app resolves at render time, so the baked icon matches. */
export function buildEntityIcons(
	heroes: HeroesApiResponse,
	items: ItemsApiResponse
): EntityIcons {
	const heroImage = (h: HeroesApiResponse[number]) =>
		h.images.icon_image_small_webp ||
		h.images.icon_image_small ||
		Object.values(h.images)[0] ||
		'';
	const itemImage = (i: ItemsApiResponse[number]) =>
		i.shop_image_webp || i.shop_image || i.image_webp || i.image || '';

	return {
		hero: indexByAlias(heroes, (h) => h.name, heroImage),
		item: indexByAlias(
			items.filter((i) => i.type !== 'ability'),
			(i) => i.name,
			itemImage
		),
		ability: indexByAlias(
			items.filter((i) => i.type === 'ability'),
			(i) => i.name,
			itemImage
		)
	};
}

function iconFor(
	icons: EntityIcons | undefined,
	kind: keyof EntityIcons,
	name: string
): string | undefined {
	if (!icons) return undefined;
	for (const alias of entityNameAliases(name)) {
		const url = icons[kind].get(alias);
		if (url) return url;
	}
	return undefined;
}

const EMPTY_CHANGELOG = `# Changelog\n\nNo structured changes were parsed for this update.`;

/** A KDL quoted string and a JSON one escape the same way for everything written here,
 * so the reader in @deadlog/changelog can pair this with JSON.parse. */
const kdlString = JSON.stringify as (value: string) => string;

/** A component embed, `` ``embed:svelte: `` fenced. */
function embedBlock(tag: string): string {
	return ['``embed:svelte:', tag, '``'].join('\n');
}

function escapeInlineAttr(value: string): string {
	return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

/**
 * A heading carrying its own classification and portrait:
 *
 *   ##hero:abrams: [[!:https://…/abrams.webp]] Abrams
 *
 * The attribute chain must abut the marker — `## hero:` renders the attributes as
 * literal title text. The renderer derives the anchor id from the title alone and
 * disambiguates repeats itself (`-1`, `-2`), which is why no id is written here.
 *
 * The single place the heading shape is spelled: switching to a wrapped block form
 * changes this function and nothing else.
 */
function headingLine(
	level: number,
	attrs: string[],
	name: string,
	icon: string | undefined
): string {
	const media = icon ? `${mogImage(icon, '')} ` : '';
	return `${'#'.repeat(level)}${attrs.map((a) => `${a}:`).join('')} ${media}${name}`;
}

function entityHeading(name: string, type: 'hero' | 'item', icons?: EntityIcons): string {
	return headingLine(2, [type, entityFragmentId(name)], name, iconFor(icons, type, name));
}

function abilityHeading(name: string, icons?: EntityIcons): string {
	return headingLine(3, ['ability'], name, iconFor(icons, 'ability', name));
}

function sectionPreviewBlock(type: 'hero' | 'item', names: string[]): string {
	const escaped = names.map((n) => `"${escapeInlineAttr(n)}"`).join(', ');
	return embedBlock(`<SectionPreview type="${type}" names={[${escaped}]} />`);
}

/**
 * The forum serves no embeddable video URL, so a clip stays a link out. Swapping to a
 * real <video> once the files are hosted somewhere is a change inside VideoLink.
 */
function videoEmbedBlock(link: { target: string; label: string }): string {
	return embedBlock(
		`<VideoLink src="${escapeInlineAttr(link.target)}" label="${escapeInlineAttr(cleanVideoLabel(link.label))}" />`
	);
}

/**
 * Note text only — the embed blocks above rely on real braces and brackets. Prose
 * delimiters are escaped, links carried over from the source post are not.
 */
function bulletLine(note: string): string {
	return `- ${escapeMogDelimiters(note)}`;
}

export function generateStructuredContent(
	grouped: GroupedContent,
	icons?: EntityIcons
): string {
	const out: string[] = [];

	if (grouped.general.length > 0) {
		out.push('# General Changes', '');
		for (const note of grouped.general) {
			const link = parseMogLink(note);
			if (note.startsWith(MOG_IMAGE_PREFIX)) out.push(note);
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
			'# Hero Changes',
			'',
			sectionPreviewBlock(
				'hero',
				sortedHeroes.map(([name]) => name)
			)
		);

		for (const [heroName, notes] of sortedHeroes) {
			out.push('', entityHeading(heroName, 'hero', icons), '');

			const abilityGroups = groupNotesByAbility(notes);
			for (let gi = 0; gi < abilityGroups.length; gi++) {
				const group = abilityGroups[gi];
				if (group.abilityName) {
					out.push(abilityHeading(group.abilityName, icons), '');
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
			'# Item Changes',
			'',
			sectionPreviewBlock(
				'item',
				sortedItems.map(([name]) => name)
			)
		);

		for (const [itemName, notes] of sortedItems) {
			out.push('', entityHeading(itemName, 'item', icons), '');
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
		if (!note.startsWith(MOG_IMAGE_PREFIX) && !parseMogLink(note)) {
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
	return stripMogLinks(parts.join(' '));
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
	entities: EntityLists,
	icons?: EntityIcons
): string {
	const grouped = parseAndGroupContent(source.rawContent, entities);
	const structuredContent = generateStructuredContent(grouped, icons);
	const contentText = collectPlainText(grouped);

	const out: string[] = ['``meta:', `title ${kdlString(source.title)}`];

	if (source.threadId) {
		out.push(`thread_id ${kdlString(source.threadId)}`);
	}
	if (source.steamGid) {
		out.push(`steam_gid ${kdlString(source.steamGid)}`);
	}

	out.push(
		`published ${kdlString(source.published)}`,
		`author ${kdlString(source.author)}`
	);

	if (source.authorImage) {
		out.push(`author_image ${kdlString(source.authorImage)}`);
	}

	out.push(
		'category "patch"',
		'major_update #false',
		'status "draft"',
		`content_text ${kdlString(contentText)}`,
		'``',
		'',
		structuredContent || EMPTY_CHANGELOG
	);

	return out.join('\n');
}
