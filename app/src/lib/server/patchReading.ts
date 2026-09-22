import { createHash } from 'node:crypto';
import { PROPERTY_EXTRACTION_VERSION, toSlug, entityNamesMatch } from '@deadlog/utils';
import type { PatchReadingData } from '@deadlog/db';
import type { MogTocEntry } from '$lib/types';
import {
	detailKey,
	previousKey,
	type PatchReading
} from '$lib/components/changelog/readingContext';
import { toPageContext } from '$lib/components/entity/pageContext';
import { previousChangeLookup } from '$lib/components/entity/previousChanges';
import { changePath } from '$lib/seo';

// Reuse the same compiled modules as the patch route. Metadata-only .mg queries
// are still treated as Svelte by the current plugin stack; the named TOC export
// avoids that path and never renders the document or serializes its component.
const tocModules = import.meta.glob('../../../changelogs/**/*.mg', { import: 'toc' });
const tocCache = new Map<string, Promise<MogTocEntry[]>>();

export function patchToc(slug: string): Promise<MogTocEntry[]> {
	let pending = tocCache.get(slug);
	if (!pending) {
		const loader = tocModules[`../../../changelogs/${slug}.mg`];
		pending = loader
			? loader().then((value) => value as MogTocEntry[])
			: Promise.resolve([]);
		tocCache.set(slug, pending);
	}
	return pending;
}

export async function projectPatchReading(
	data: PatchReadingData,
	patch: { id: string; pubDate: string },
	loadToc: (slug: string) => Promise<MogTocEntry[]> = patchToc
): Promise<PatchReading> {
	const details: PatchReading['details'] = {};
	for (const item of data.items) {
		if (item.context && item.groups?.some((group) => group.bullets.length)) {
			details[detailKey('item', item.id)] = {
				name: item.name,
				historyHref: `/item/${item.slug}`,
				context: toPageContext(item.context)
			};
		}
	}
	for (const ability of data.abilities) {
		const hero = data.heroes.find((hero) => hero.id === ability.heroId);
		const exact = hero?.groups?.some(
			(group) =>
				group.ability &&
				group.bullets.length &&
				group.abilitySlug === ability.slug &&
				toSlug(group.ability) === ability.slug
		);
		if (ability.context && exact) {
			details[detailKey('hero', ability.heroId, ability.slug)] = {
				name: ability.name,
				historyHref: `/ability/${ability.slug}`,
				context: toPageContext(ability.context)
			};
		}
	}
	const previous: PatchReading['previous'] = {};
	await Promise.all(
		data.links.map(async (link) => {
			if (
				link.extractionVersion !== PROPERTY_EXTRACTION_VERSION ||
				link.previousOld === null ||
				link.previousNew === null
			)
				return;
			const entity = (link.entityType === 'hero' ? data.heroes : data.items).find(
				(entity) => entity.id === link.entityId
			);
			const group = entity?.groups?.[link.groupIndex];
			const bullet = group?.bullets[link.bulletIndex];
			if (
				!entity ||
				!group ||
				!bullet ||
				createHash('sha256').update(bullet).digest('hex').slice(0, 16) !== link.digest
			)
				return;
			const toc = await loadToc(link.previousSlug);
			let owner: string | null = null;
			const headings = toc.filter((heading) => {
				if (heading.level <= 2) owner = heading.level === 2 ? heading.title : null;
				return group.ability
					? heading.level === 3 &&
							heading.title === group.ability &&
							owner !== null &&
							entityNamesMatch(owner, entity.name)
					: heading.level === 2 && entityNamesMatch(heading.title, entity.name);
			});
			if (headings.length !== 1) return;
			const lookup = previousChangeLookup(
				[{ ...link, previousOld: link.previousOld, previousNew: link.previousNew }],
				entity.name
			);
			const annotation = lookup(patch, group, link.groupIndex)?.[link.bulletIndex];
			if (annotation)
				previous[
					previousKey(link.entityType, entity.id, link.groupIndex, link.bulletIndex)
				] = {
					...annotation,
					bullet,
					href: `${changePath({ slug: link.previousSlug })}#${headings[0].id}`
				};
		})
	);
	return { details, previous };
}
