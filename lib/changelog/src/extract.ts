import type { ChangelogEntities, EntityChange } from './schema';
import {
	decodeEntityName,
	entityNameAliases,
	makeSummary,
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
 * A heading with its attribute chain: `##hero:abrams: [[!:…]] Abrams`. The chain abuts
 * the marker, so a space after it means the colon is ordinary text — `# Foo: Bar` keeps
 * its title intact, exactly as the renderer reads it.
 */
const HEADING_RE = /^(#+)((?:[^\s:]+:)*)[ \t]*(.*)$/;
/** The baked portrait leads the title; the name is what follows it. */
const LEADING_IMAGE_RE = /^\[\[!:[^\]]*\]\](?:\(\([^)]*\)\))?\s*/;

/** Shared with the changelog loader so the toc and the entity walk read alike. */
export function parseHeading(line: string): TocEntry | null {
	const match = line.match(HEADING_RE);
	if (!match) return null;
	const title = decodeEntityName(match[3].replace(LEADING_IMAGE_RE, '').trim());
	if (!title) return null;
	return {
		level: match[1].length,
		attrs: match[2].split(':').filter(Boolean),
		title
	};
}

/** Roughly two card lines — see PatchPreviewCard's line-clamp-2. */
const SUMMARY_MAX = 160;

type EntityBullets = Omit<EntityChange, 'count' | 'summary'> & { bullets: string[] };

export function extractEntityChanges(content: string): EntityChange[] {
	const changes = new Map<string, EntityBullets>();
	let currentKey: string | null = null;
	let currentAbility: string | null = null;

	for (const rawLine of content.split('\n')) {
		const line = rawLine.trim();
		const heading = parseHeading(line);

		if (heading) {
			const [kind] = heading.attrs;

			if (kind === 'hero' || kind === 'item') {
				const key = `${kind}:${entityNameAliases(heading.title).at(-1)}`;
				if (!changes.has(key))
					changes.set(key, { name: heading.title, type: kind, bullets: [] });
				currentKey = key;
				currentAbility = null;
			} else if (kind === 'ability') {
				// Ability bullets still belong to the hero, but a bare "Cooldown reduced to
				// 32s" is meaningless without knowing which ability it came from.
				currentAbility = heading.title;
			} else {
				// A section heading — anything below it belongs to no entity yet.
				currentKey = null;
				currentAbility = null;
			}
			continue;
		}

		if (currentKey && /^-\s+\S/.test(line)) {
			const current = changes.get(currentKey);
			if (!current) continue;
			// .mg carries escaped delimiters and [[target]]((label)) links; a summary
			// wants neither the backslashes nor the markup.
			const text = stripMogLinks(
				decodeEntityName(unescapeMogDelimiters(line.replace(/^-\s+/, '').trim()))
			);
			// Most bullets already lead with the ability name; only prefix the ones that don't.
			const needsPrefix =
				currentAbility !== null &&
				!text.toLowerCase().startsWith(currentAbility.toLowerCase());
			current.bullets.push(needsPrefix ? `${currentAbility}: ${text}` : text);
		}
	}

	return [...changes.values()].map(({ bullets, ...change }) => ({
		...change,
		count: bullets.length,
		summary: makeSummary(bullets.join(' · '), SUMMARY_MAX)
	}));
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
