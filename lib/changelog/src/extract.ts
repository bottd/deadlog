import type { ChangelogEntities, EntityChange } from './schema';
import {
	MOG_IMAGE_RE,
	decodeEntityName,
	entityNameAliases,
	stripMogLinks,
	unescapeMogDelimiters
} from '@deadlog/utils';

/** Only what `extractEntities` needs. Heading anchors come from the renderer's own toc
 * (see the `.mg` module's `toc` export), so deriving ids here would be a second rule. */
export interface TocEntry {
	level: number;
	title: string;
	/** Attribute chain on the marker, e.g. `['hero', 'abrams']`. */
	attrs: string[];
}

/**
 * An entity section opens with `=hero:abrams:` and closes with a bare `=` at the same
 * depth; abilities nest one deeper. The attribute chain abuts the marker, so a space
 * after it means the colon is ordinary text — exactly as the renderer reads it.
 */
const BLOCK_RE = /^(=+)((?:[^\s:]+:)*)$/;
const HEADING_RE = /^(#+)[ \t]*(.+)$/;

type Kind = 'hero' | 'item' | 'ability';

interface Frame {
	kind: Kind;
	name: string | null;
	level: number;
}

/**
 * One pass over the document, yielding both outputs the build needs. Walking it twice
 * would mean two implementations of the same block grammar, which is how the toc and
 * the entity list drift apart.
 */
export function parseStructure(content: string): {
	toc: TocEntry[];
	changes: EntityChange[];
	/** Only images outside every block — an entity's own portrait is chrome, not content. */
	images: string[];
} {
	const toc: TocEntry[] = [];
	const images: string[] = [];
	const changes = new Map<string, EntityChange>();
	const stack: Frame[] = [];

	const innermost = (kind: Kind) =>
		[...stack].reverse().find((f) => f.kind === kind && f.name);

	for (const rawLine of content.split('\n')) {
		const line = rawLine.trim();

		const block = line.match(BLOCK_RE);
		if (block) {
			const attrs = block[2].split(':').filter(Boolean);
			const [kind] = attrs;
			// A bare fence closes the innermost block of its depth.
			if (!attrs.length) stack.pop();
			else if (kind === 'hero' || kind === 'item' || kind === 'ability')
				stack.push({ kind, name: null, level: block[1].length });
			else stack.push({ kind: 'ability', name: null, level: block[1].length });
			continue;
		}

		const heading = line.match(HEADING_RE);
		if (heading) {
			// Entity headings can use native Mog links; their visible label remains the name.
			const title = decodeEntityName(stripMogLinks(heading[2].trim()));
			const open = stack.at(-1);
			// A heading names the block it sits in; anything outside one is a section.
			const attrs = open && !open.name ? [open.kind] : [];
			if (open && !open.name) open.name = title;
			toc.push({ level: heading[1].length, title, attrs });

			if (open && attrs[0] && attrs[0] !== 'ability') {
				const key = `${open.kind}:${entityNameAliases(title).at(-1)}`;
				if (!changes.has(key))
					changes.set(key, {
						name: title,
						type: open.kind as 'hero' | 'item',
						groups: []
					});
			}
			continue;
		}

		const image = line.match(MOG_IMAGE_RE);
		if (image) {
			if (!stack.length) images.push(image[1]);
			continue;
		}

		if (!/^-\s+\S/.test(line)) continue;

		const entity = innermost('hero') ?? innermost('item');
		if (!entity?.name) continue;
		const current = changes.get(
			`${entity.kind}:${entityNameAliases(entity.name).at(-1)}`
		);
		if (!current) continue;

		// .mg carries escaped delimiters and [[target]]((label)) links; the rendered
		// history wants neither the backslashes nor the markup.
		const text = stripMogLinks(
			decodeEntityName(unescapeMogDelimiters(line.replace(/^-\s+/, '').trim()))
		);
		// Bullets group per ability section, so the renderer can show the ability
		// heading and icon instead of a text prefix.
		const ability = innermost('ability')?.name ?? null;
		const group = current.groups.at(-1);
		if (group && group.ability === ability) group.bullets.push(text);
		else current.groups.push({ ability, bullets: [text] });
	}

	return { toc, images, changes: [...changes.values()] };
}

export function extractEntityChanges(content: string): EntityChange[] {
	return parseStructure(content).changes;
}

export function extractEntities(toc: TocEntry[]): ChangelogEntities {
	const heroes = new Set<string>();
	const items = new Set<string>();

	// An entity is a heading that says it is one, so section order no longer has to be
	// inferred and stray headings cannot be mistaken for entities.
	for (const entry of toc) {
		const [kind] = entry.attrs;
		if (kind === 'hero') heroes.add(entry.title);
		else if (kind === 'item') items.add(entry.title);
	}

	return { heroes: [...heroes], items: [...items] };
}

export { entityNameAliases, entityNamesMatch, normalizeEntityName } from '@deadlog/utils';
