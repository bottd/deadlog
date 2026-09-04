import type { EntityIcon, MogTocEntry } from '$lib/types';

/** Sections ChangelogToc renders through its own General / Heroes / Items affordances. */
const STRUCTURED_SECTION_IDS = ['general-changes', 'hero-changes', 'item-changes'];

interface TocInput {
	toc: MogTocEntry[];
	heroes: EntityIcon[];
	items: EntityIcon[];
}

/**
 * A patch with no entity blocks (dev diary, hotfix prose) lists its own headings
 * instead of the hero and item groups.
 */
export function genericTocEntries({ toc, heroes, items }: TocInput): MogTocEntry[] {
	return heroes.length + items.length === 0
		? toc.filter((entry) => !STRUCTURED_SECTION_IDS.includes(entry.id))
		: [];
}

/**
 * How many links ChangelogToc will render. The patch page decides whether to show the
 * TOC at all from this, so the count and the render can't drift apart.
 */
export function tocLinkCount(input: TocInput & { hideGeneral: boolean }): number {
	const { heroes, items, hideGeneral } = input;
	return (
		(hideGeneral ? 0 : 1) +
		genericTocEntries(input).length +
		(heroes.length > 0 ? heroes.length + 1 : 0) +
		(items.length > 0 ? items.length + 1 : 0)
	);
}
