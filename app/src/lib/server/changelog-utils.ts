import {
	getChangelogAbilityIcons,
	getChangelogIcons,
	getSelectedChangeGroups,
	type ScrapedChangelog
} from '@deadlog/db';
import type { DrizzleDB } from '@deadlog/db';
import type { PatchSummary, ChangelogEntityIcon } from '$lib/types';
import {
	findEntityName,
	indexEntityNames,
	formatDate,
	makeSummary
} from '@deadlog/utils';
import { parseCSV } from '$lib/utils/csv';
import { absoluteUrl } from '$lib/seo';
import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { MAX_ENTITY_FILTERS, MAX_QUERY_LENGTH, parseFilters } from '$lib/queries/keys';

export const NO_MATCH_ENTITY_ID = -1;
const MAX_PAGE_SIZE = 100;
const MAX_OFFSET = 100_000;
const MAX_ENTITY_NAME_LENGTH = 100;

const integerParam = (minimum: number, maximum: number) =>
	z.number().int().min(minimum).max(maximum);

function parseIntegerParam(
	url: URL,
	name: string,
	fallback: number,
	minimum: number,
	maximum: number
): number {
	const raw = url.searchParams.get(name);
	const parsed = integerParam(minimum, maximum).safeParse(
		raw === null ? fallback : Number(raw)
	);
	if (!parsed.success) throw error(400, `Invalid ${name} parameter`);
	return parsed.data;
}

function parseEntityFilters(url: URL, name: 'hero' | 'item'): string[] {
	const values = parseCSV(url.searchParams.get(name));
	if (
		values.length > MAX_ENTITY_FILTERS ||
		values.some((value) => value.length > MAX_ENTITY_NAME_LENGTH)
	) {
		throw error(400, `Invalid ${name} parameter`);
	}
	return values;
}

export function resolveEntityIds(
	names: string[],
	entities: { id: number; name: string }[]
): number[] {
	const byName = indexEntityNames(entities, (entity) => entity.name);
	return [
		...new Set(
			names.map((name) => findEntityName(byName, name)?.id ?? NO_MATCH_ENTITY_ID)
		)
	];
}

export function splitPage<T>(rows: T[], limit: number) {
	return {
		rows: rows.slice(0, limit),
		hasMore: rows.length > limit
	};
}

/** Preserve the matching passage rather than always taking the beginning of a patch. */
export function searchExcerpt(text: string | null, query: string, max = 240): string {
	const clean = (text ?? '').replace(/\s+/g, ' ').trim();
	const match = clean.toLowerCase().indexOf(query.toLowerCase());
	if (match < 0) return makeSummary(clean, max);
	const context = Math.min(60, Math.max(0, Math.floor((max - query.length) / 2)));
	const start = Math.max(0, match - context);
	const wordBoundary = clean.indexOf(' ', start);
	const boundary =
		start > 0 && wordBoundary >= 0 && wordBoundary < match ? wordBoundary + 1 : start;
	return `${boundary > 0 ? '…' : ''}${makeSummary(clean.slice(boundary), max)}`;
}

export async function buildPatchSummaries(
	db: DrizzleDB,
	changelogs: ScrapedChangelog[],
	{
		heroIds = [],
		itemIds = [],
		q = '',
		isFirstPage = false
	}: {
		heroIds?: number[];
		itemIds?: number[];
		q?: string;
		/** Only the top of an unfiltered feed gets the wide treatment. */
		isFirstPage?: boolean;
	} = {}
): Promise<PatchSummary[]> {
	const ids = changelogs.map((entry) => entry.id);
	const [iconsByChangelog, groups] = await Promise.all([
		getChangelogIcons(db, ids),
		getSelectedChangeGroups(db, ids, heroIds, itemIds)
	]);
	const selected = (icon: ChangelogEntityIcon) =>
		(icon.type === 'hero' ? heroIds : itemIds).includes(icon.id);
	const searching = heroIds.length + itemIds.length > 0 || q !== '';
	const featureFirst = isFirstPage && !searching;

	return changelogs.map((entry, index) => {
		const all = iconsByChangelog[entry.id] ?? { heroes: [], items: [] };
		const limit = featureFirst && index === 0 ? 14 : 6;
		let remainingExcerpts = 6;
		const matches = [...all.heroes, ...all.items].filter(selected).map((icon) => {
			const changes = (groups.get(`${entry.id}:${icon.type}:${icon.id}`) ?? [])
				.flatMap((group) =>
					group.bullets.map((text) => ({ ability: group.ability, text }))
				)
				.slice(0, Math.min(3, remainingExcerpts))
				.map((change) => ({ ...change, text: makeSummary(change.text, 320) }));
			remainingExcerpts -= changes.length;
			return {
				id: icon.id,
				type: icon.type,
				name: icon.alt,
				slug: icon.slug,
				changeCount: icon.changeCount,
				changes
			};
		});
		return {
			id: entry.id,
			slug: entry.slug,
			title: entry.title,
			date: entry.pubDate,
			author: entry.author,
			authorImage: entry.authorImage,
			previewImage: entry.previewImage,
			majorUpdate: entry.majorUpdate,
			summary: q
				? searchExcerpt(entry.contentText, q)
				: matches.length
					? ''
					: makeSummary(entry.contentText),
			icons: {
				heroes: searching ? [] : all.heroes.slice(0, limit),
				items: searching ? [] : all.items.slice(0, limit)
			},
			counts: { heroes: all.heroes.length, items: all.items.length },
			matches
		};
	});
}

/** The full patch-page payload for the /change/[...slug] load. */
export async function buildChangePageData(db: DrizzleDB, changelog: ScrapedChangelog) {
	const [iconsMap, abilityIcons] = await Promise.all([
		getChangelogIcons(db, [changelog.id]),
		getChangelogAbilityIcons(db, changelog.id)
	]);
	const icons = iconsMap[changelog.id] ?? { heroes: [], items: [] };
	const date = new Date(changelog.pubDate);
	const description =
		makeSummary(changelog.contentText, 155) ||
		`Read the ${formatDate(date)} Deadlock patch notes, including hero, item, and gameplay balance changes.`;

	// The body renders from the .mg component, so contentText is dead weight in the
	// payload — it only feeds the summary and indexability checks on the server.
	const { contentText, ...changelogFields } = changelog;

	return {
		changelog: {
			...changelogFields,
			date,
			icons,
			abilityIcons
		},
		title: `${changelog.title} | Deadlock Patch Notes`,
		description,
		// Meta previews are generated per changelog id — the filename is not the URL.
		image: absoluteUrl(`/assets/meta/change/${changelog.id}.png`),
		isIndexable: Boolean(contentText?.trim())
	};
}

export function parseApiParams(url: URL) {
	const filters = parseFilters(url.searchParams);
	if (filters.q.length > MAX_QUERY_LENGTH) throw error(400, 'Invalid q parameter');
	parseEntityFilters(url, 'hero');
	parseEntityFilters(url, 'item');

	return {
		...filters,
		limit: parseIntegerParam(url, 'limit', 8, 1, MAX_PAGE_SIZE),
		offset: parseIntegerParam(url, 'offset', 0, 0, MAX_OFFSET)
	};
}
