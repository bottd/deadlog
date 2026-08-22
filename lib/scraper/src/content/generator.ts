import {
	MOG_IMAGE_PREFIX,
	abilityFragmentId,
	entityFragmentId,
	entityNameAliases,
	escapeMogDelimiters,
	mogImage,
	mogLink,
	parseMogLink,
	resolveHeroAbilitySlug,
	stripMogLinks,
	toSlug
} from '@deadlog/utils';
import { regroupAbilityChanges, resolveAbilitySlots } from '../heroAbilities';
import {
	itemImage,
	type HeroesApiResponse,
	type ItemsApiResponse
} from '../types/deadlockApi';
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

interface EntityAsset {
	name: string;
	src?: string;
	slug: string;
}

export interface EntityAssets {
	hero: ReadonlyMap<string, EntityAsset>;
	item: ReadonlyMap<string, EntityAsset>;
	abilitiesByHero: ReadonlyMap<string, readonly EntityAsset[]>;
}

interface LinkTarget {
	href: string;
	src?: string;
}

function indexByAlias<T>(
	rows: readonly T[],
	name: (row: T) => string,
	image: (row: T) => string
) {
	const map = new Map<string, EntityAsset>();
	for (const row of rows) {
		const canonicalName = name(row);
		const asset = {
			name: canonicalName,
			src: image(row) || undefined,
			slug: toSlug(canonicalName)
		};
		for (const alias of entityNameAliases(canonicalName)) map.set(alias, asset);
	}
	return map;
}

export function buildEntityAssets(
	heroes: HeroesApiResponse,
	items: ItemsApiResponse
): EntityAssets {
	const heroImage = (h: HeroesApiResponse[number]) =>
		h.images.icon_image_small_webp ||
		h.images.icon_image_small ||
		Object.values(h.images)[0] ||
		'';
	const abilitiesByHero = new Map<string, EntityAsset[]>();
	const abilitySlots = resolveAbilitySlots(heroes, items);
	for (const hero of heroes) {
		const abilities = (abilitySlots.get(hero.id) ?? []).map((ability) => ({
			name: ability.name,
			src: ability.image,
			slug: ability.slug
		}));
		for (const alias of entityNameAliases(hero.name))
			abilitiesByHero.set(alias, abilities);
	}

	return {
		hero: indexByAlias(heroes, (h) => h.name, heroImage),
		item: indexByAlias(
			items.filter((item) => item.type !== 'ability' && itemImage(item)),
			(i) => i.name,
			itemImage
		),
		abilitiesByHero
	};
}

function byAlias<T>(
	rows: ReadonlyMap<string, T> | undefined,
	name: string
): T | undefined {
	for (const alias of entityNameAliases(name)) {
		const row = rows?.get(alias);
		if (row) return row;
	}
	return undefined;
}

function entityTarget(
	assets: EntityAssets | undefined,
	type: 'hero' | 'item',
	name: string
): LinkTarget | undefined {
	const asset = byAlias(assets?.[type], name);
	return asset ? { href: `/${type}/${asset.slug}`, src: asset.src } : undefined;
}

function abilitiesFor(
	assets: EntityAssets | undefined,
	heroName: string
): readonly EntityAsset[] {
	return byAlias(assets?.abilitiesByHero, heroName) ?? [];
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

function entityBlock(
	depth: number,
	attrs: string[],
	level: number,
	name: string,
	target: LinkTarget | undefined,
	body: readonly string[]
): string[] {
	const fence = '='.repeat(depth);
	const imageLabel = `${name} ${attrs[0] === 'ability' ? 'change' : 'patch'} history`;
	return [
		`${fence}${attrs.map((a) => `${a}:`).join('')}`,
		...(target?.src
			? [mogLink(target.href, `${mogImage(target.src, '')} ${imageLabel}`)]
			: []),
		`${'#'.repeat(level)} ${target ? mogLink(target.href, name) : name}`,
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
	assets?: EntityAssets
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
			const hero = entityTarget(assets, 'hero', heroName);
			const abilities = abilitiesFor(assets, heroName);
			const body: string[] = [];
			const groups = regroupAbilityChanges(
				groupNotesByAbility(notes).map((group) => ({
					ability: group.abilityName,
					bullets: group.notes
				})),
				abilities
			);
			for (const group of groups) {
				const bullets = group.bullets.map(bulletLine);
				if (!group.ability) {
					body.push(...bullets);
					continue;
				}
				const slug = resolveHeroAbilitySlug(group.ability, abilities);
				const ability = abilities.find((candidate) => candidate.slug === slug);
				const target =
					hero && ability
						? { href: `${hero.href}?ability=${ability.slug}`, src: ability.src }
						: undefined;
				body.push(
					...entityBlock(
						2,
						['ability', abilityFragmentId(group.ability)],
						3,
						group.ability,
						target,
						bullets
					)
				);
			}

			out.push(
				'',
				...entityBlock(1, ['hero', entityFragmentId(heroName)], 2, heroName, hero, body)
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
			const item = entityTarget(assets, 'item', itemName);
			out.push(
				'',
				...entityBlock(
					1,
					['item', entityFragmentId(itemName)],
					2,
					itemName,
					item,
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

interface ChangelogSourceMetadata {
	title: string;
	alias?: string;
	published: string;
	author: string;
	authorImage?: string;
	threadId?: string;
	steamGid?: string;
}

export type ChangelogSource = ChangelogSourceMetadata &
	(
		| { rawContent: string; renderedContent?: never }
		| { rawContent?: string; renderedContent: { mog: string; text: string } }
	);

export function generateChangelog(
	source: ChangelogSource,
	entities: EntityLists,
	assets?: EntityAssets
): string {
	let structuredContent: string;
	let contentText: string;
	if (source.renderedContent) {
		structuredContent = source.renderedContent.mog;
		contentText = source.renderedContent.text;

		if (source.rawContent?.trim()) {
			const grouped = parseAndGroupContent(source.rawContent, entities);
			const supplementalContent = generateStructuredContent(grouped, assets).trim();
			const supplementalText = collectPlainText(grouped);
			structuredContent = [structuredContent, supplementalContent]
				.filter(Boolean)
				.join('\n\n');
			contentText = [contentText, supplementalText].filter(Boolean).join(' ');
		}
	} else {
		const grouped = parseAndGroupContent(source.rawContent, entities);
		structuredContent = generateStructuredContent(grouped, assets);
		contentText = collectPlainText(grouped);
	}

	const out: string[] = ['``meta:', `title ${kdlString(source.title)}`];

	if (source.alias) {
		out.push(`alias ${kdlString(source.alias)}`);
	}
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
		`content_text ${kdlString(contentText)}`,
		'``',
		'',
		structuredContent || EMPTY_CHANGELOG
	);

	return out.join('\n');
}
