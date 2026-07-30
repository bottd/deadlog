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
	abilityFragmentId,
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
 * An entity section as a wrapped block, so its portrait, heading and notes render as one
 * subtree rather than a run of siblings:
 *
 *   =hero:abrams:
 *   [[!:https://…/abrams.webp]]
 *   ## Abrams
 *   - Base Health increased
 *   =
 *
 * The attribute chain must abut the marker — `= hero:` renders it as literal text. The
 * renderer derives the anchor id from the heading title alone and disambiguates repeats
 * itself (`-1`, `-2`), which is why no id is written here.
 *
 * The single place the entity shape is spelled.
 */
function entityBlock(
	depth: number,
	attrs: string[],
	level: number,
	name: string,
	icon: string | undefined,
	body: string[]
): string[] {
	const fence = '='.repeat(depth);
	return [
		`${fence}${attrs.map((a) => `${a}:`).join('')}`,
		...(icon ? [mogImage(icon, '')] : []),
		`${'#'.repeat(level)} ${name}`,
		...body,
		fence
	];
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
			const body: string[] = [];
			for (const group of groupNotesByAbility(notes)) {
				const bullets = group.notes.map(bulletLine);
				if (!group.abilityName) {
					body.push(...bullets);
					continue;
				}
				body.push(
					...entityBlock(
						2,
						['ability', abilityFragmentId(group.abilityName)],
						3,
						group.abilityName,
						iconFor(icons, 'ability', group.abilityName),
						bullets
					)
				);
			}

			out.push(
				'',
				...entityBlock(
					1,
					['hero', entityFragmentId(heroName)],
					2,
					heroName,
					iconFor(icons, 'hero', heroName),
					body
				)
			);
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
			out.push(
				'',
				...entityBlock(
					1,
					['item', entityFragmentId(itemName)],
					2,
					itemName,
					iconFor(icons, 'item', itemName),
					notes.map(bulletLine)
				)
			);
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
