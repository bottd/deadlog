import {
	getAllChangelogs,
	getAllHeroes,
	getAllItems,
	getChangelogIcons,
	type EnrichedHero,
	type EnrichedItem
} from '@deadlog/db';
import { formatDateShort, heroImage, patchHeading } from '@deadlog/utils';
import { getLibsqlDb as getDb } from '@deadlog/db';
import { fromJsx } from '@takumi-rs/helpers/jsx';
import { mkdir, writeFile } from 'fs/promises';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import React from 'react';

import { renderer, fetchImageAsDataUri, fontsReady } from './renderer';
import { Theme, heroTone, itemTone } from './theme';
import { countLabel, displayName, isRenderableSlug } from './text';
import type { RowIcon } from './components/Entities';
import { ChangelogLayout } from './layouts/ChangelogLayout';
import { HomeLayout } from './layouts/HomeLayout';
import { HeroLayout } from './layouts/HeroLayout';
import { ItemLayout } from './layouts/ItemLayout';

const OUTPUT_DIR = 'app/static/assets/meta';

const ROW_ICONS = 8;

const CONCURRENCY = 8;

export async function convertImageUrl(url?: string | null): Promise<string> {
	if (!url) return '';
	if (url.startsWith('data:')) return url;
	const dataUri = await fetchImageAsDataUri(url);
	if (!dataUri) throw new Error(`Failed to fetch image: ${url}`);
	return dataUri;
}

type ImageConverter = typeof convertImageUrl;
type ChangelogIcons = Awaited<ReturnType<typeof getChangelogIcons>>[string];

async function renderToFile(element: React.ReactElement, outputPath: string) {
	try {
		await fontsReady;
		const { node, css } = await fromJsx(element);
		const { width, height } = Theme.size;
		const imageBuffer = await renderer.render(node, {
			width,
			height,
			format: 'png',
			css
		});

		await mkdir(join(outputPath, '..'), { recursive: true });
		await writeFile(outputPath, imageBuffer);
	} catch (error) {
		console.error(`Failed to render ${outputPath}:`, error);
		throw error;
	}
}

interface EntityStats {
	changeCount: number;
	patchCount: number;
	uncountedPatchCount: number;
	latestDate?: string;
	latestPatch?: string;
	latestNamed?: boolean;
	latestMention?: boolean;
}

const NO_CHANGES: Readonly<EntityStats> = Object.freeze({
	changeCount: 0,
	patchCount: 0,
	uncountedPatchCount: 0
});

function changeLabel(stats: Readonly<EntityStats>): string {
	if (stats.uncountedPatchCount === 0) return countLabel(stats.changeCount, 'CHANGE');
	if (stats.uncountedPatchCount === stats.patchCount) return '';
	return `${stats.changeCount}+ CHANGES`;
}

function historyLine(stats: Readonly<EntityStats>): string {
	if (stats.patchCount === 0 || !stats.latestDate) return 'No changes recorded yet.';
	const action = stats.latestMention ? 'mentioned' : 'changed';
	if (!stats.latestNamed) {
		return `Last ${action} in the ${stats.latestPatch} patch.`;
	}
	return `Last ${action} ${formatDateShort(stats.latestDate)} in ${stats.latestPatch}.`;
}

function fold(
	entities: readonly { slug: string; changeCount?: number | null }[],
	into: Map<string, EntityStats>,
	changelog: { title: string; pubDate: string }
) {
	for (const entity of entities) {
		const stats = into.get(entity.slug) ?? { ...NO_CHANGES };
		// A mention without its own change section has an unknown count, not zero.
		if (entity.changeCount == null) stats.uncountedPatchCount += 1;
		else stats.changeCount += entity.changeCount;
		stats.patchCount += 1;
		if (!stats.latestDate || changelog.pubDate > stats.latestDate) {
			const { named, heading } = patchHeading({ ...changelog, date: changelog.pubDate });
			stats.latestDate = changelog.pubDate;
			stats.latestPatch = heading;
			stats.latestNamed = named;
			stats.latestMention = entity.changeCount == null;
		}
		into.set(entity.slug, stats);
	}
}

function collectEntityStats(
	changelogs: { id: string; title: string; pubDate: string }[],
	iconsByPatch: Record<string, ChangelogIcons>
) {
	const heroes = new Map<string, EntityStats>();
	const items = new Map<string, EntityStats>();

	for (const changelog of changelogs) {
		const icons = iconsByPatch[changelog.id];
		if (!icons) continue;

		fold(icons.heroes, heroes, changelog);
		fold(icons.items, items, changelog);
	}

	return { heroes, items };
}

function heroRowIcons(icons: ChangelogIcons['heroes']): RowIcon[] {
	return icons.slice(0, ROW_ICONS).map((icon) => ({
		src: icon.src,
		tone: heroTone(icon.heroType)
	}));
}

function itemRowIcons(icons: ChangelogIcons['items']): RowIcon[] {
	return icons.slice(0, ROW_ICONS).map((icon) => ({
		src: icon.src,
		tone: itemTone(icon.itemCategory)
	}));
}

async function convertRowIcons(icons: RowIcon[], convert: ImageConverter) {
	const resolved = await Promise.all(
		icons.map(async (icon) => ({ ...icon, src: await convert(icon.src) }))
	);
	return resolved.filter((icon) => icon.src);
}

async function resolveRows(icons: ChangelogIcons, convert: ImageConverter) {
	return Promise.all([
		convertRowIcons(heroRowIcons(icons.heroes), convert),
		convertRowIcons(itemRowIcons(icons.items), convert)
	]);
}

async function generateChangelogOG(
	changeId: string,
	changelog: {
		title: string;
		pubDate: string;
		author: string;
		majorUpdate: boolean;
		contentText?: string | null;
		previewImage?: string | null;
	},
	icons: ChangelogIcons,
	convert: ImageConverter,
	outputDir = OUTPUT_DIR
) {
	const [[heroIcons, itemIcons], art] = await Promise.all([
		resolveRows(icons, convert),
		convertImageUrl(changelog.previewImage).catch(() => '')
	]);

	const { named, heading } = patchHeading({ ...changelog, date: changelog.pubDate });

	const element = React.createElement(ChangelogLayout, {
		heading,
		date: named ? formatDateShort(changelog.pubDate) : '',
		author: changelog.author,
		majorUpdate: changelog.majorUpdate,
		heroCount: icons.heroes.length,
		itemCount: icons.items.length,
		heroIcons,
		itemIcons,
		summary: changelog.contentText,
		art
	});
	await renderToFile(element, join(outputDir, 'change', `${changeId}.png`));
}

async function generateHomeOG(
	latest: { pubDate: string },
	totals: { patches: number; heroes: number; items: number },
	icons: ChangelogIcons,
	convert: ImageConverter,
	outputDir = OUTPUT_DIR
) {
	const [heroIcons, itemIcons] = await resolveRows(icons, convert);

	const element = React.createElement(HomeLayout, {
		lastUpdated: formatDateShort(latest.pubDate).toUpperCase(),
		patchCount: totals.patches,
		heroCount: totals.heroes,
		itemCount: totals.items,
		heroIcons,
		itemIcons,
		latestHeroCount: icons.heroes.length,
		latestItemCount: icons.items.length
	});

	await renderToFile(element, join(outputDir, 'index.png'));
}

async function generateHeroOG(
	hero: EnrichedHero,
	stats: EntityStats,
	convert: ImageConverter,
	outputDir = OUTPUT_DIR
) {
	const image = heroImage(hero.images);
	if (!image) {
		throw new Error(`Hero ${hero.name} has no images`);
	}

	const element = React.createElement(HeroLayout, {
		name: displayName(hero.name),
		heroType: hero.heroType,
		image: await convert(image),
		changes: changeLabel(stats),
		patchCount: stats.patchCount,
		history: historyLine(stats)
	});

	await renderToFile(element, join(outputDir, 'hero', `${hero.slug}.png`));
}

async function generateItemOG(
	item: EnrichedItem,
	stats: EntityStats,
	convert: ImageConverter,
	outputDir = OUTPUT_DIR
) {
	const image = item.image;
	if (!image) {
		throw new Error(`Item ${item.name} has no images`);
	}

	const element = React.createElement(ItemLayout, {
		name: displayName(item.name),
		type: item.type,
		category: item.category,
		tier: item.tier,
		image: await convert(image),
		changes: changeLabel(stats),
		patchCount: stats.patchCount,
		history: historyLine(stats)
	});

	await renderToFile(element, join(outputDir, 'item', `${item.slug}.png`));
}

export interface GeneratePreviewsOptions {
	outputDir?: string;
}

export interface GeneratePreviewsResult {
	totalCount: number;
	failures: string[];
}

async function pooled<T>(items: readonly T[], task: (item: T) => Promise<boolean>) {
	const done: boolean[] = new Array(items.length);
	let next = 0;

	async function worker() {
		while (true) {
			const index = next++;
			if (index >= items.length) return;
			done[index] = await task(items[index]);
		}
	}

	await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, worker));
	return done.filter(Boolean).length;
}

async function generateOne(
	label: string,
	failures: string[],
	generate: () => Promise<void>
): Promise<boolean> {
	try {
		await generate();
		return true;
	} catch (error) {
		console.error(`Failed to generate ${label}:`, error);
		failures.push(label);
		return false;
	}
}

async function generatePreviews(
	options: GeneratePreviewsOptions = {}
): Promise<GeneratePreviewsResult> {
	const outputDir = options.outputDir ?? OUTPUT_DIR;

	const db = getDb();
	const [allChangelogs, heroes, items] = await Promise.all([
		getAllChangelogs(db),
		getAllHeroes(db),
		getAllItems(db)
	]);
	const iconsByPatch = await getChangelogIcons(
		db,
		allChangelogs.map((patch) => patch.id)
	);
	const stats = collectEntityStats(allChangelogs, iconsByPatch);
	const imageCache = new Map<string, Promise<string>>();
	const convert: ImageConverter = (url) => {
		if (!url) return Promise.resolve('');
		let image = imageCache.get(url);
		if (!image) {
			// Drop a failed fetch from the cache: memoizing the rejection would turn one
			// blip on a shared icon into a failure for every later preview that uses it.
			image = convertImageUrl(url).catch((error) => {
				imageCache.delete(url);
				throw error;
			});
			imageCache.set(url, image);
		}
		return image;
	};

	let totalCount = 0;
	const failures: string[] = [];

	const releasedHeroes = heroes.filter((hero) => hero.isReleased);
	const releasedItems = items.filter((item) => item.isReleased);

	if (allChangelogs.length > 0) {
		const latest = allChangelogs.reduce((mostRecent, current) => {
			return current.pubDate > mostRecent.pubDate ? current : mostRecent;
		}, allChangelogs[0]);

		if (
			await generateOne('home preview', failures, () =>
				generateHomeOG(
					latest,
					{
						patches: allChangelogs.length,
						heroes: releasedHeroes.length,
						items: releasedItems.length
					},
					iconsByPatch[latest.id] ?? { heroes: [], items: [] },
					convert,
					outputDir
				)
			)
		) {
			totalCount++;
		}
	}

	const changelogCount = await pooled(allChangelogs, (changelog) => {
		if (!isRenderableSlug(changelog.id)) {
			failures.push(`changelog preview ${changelog.id} (unroutable id)`);
			return Promise.resolve(false);
		}
		return generateOne(`changelog preview ${changelog.id}`, failures, () =>
			generateChangelogOG(
				changelog.id,
				changelog,
				iconsByPatch[changelog.id] ?? { heroes: [], items: [] },
				convert,
				outputDir
			)
		);
	});
	totalCount += changelogCount;

	console.log(`Generated ${changelogCount} changelog images`);

	const heroCount = await pooled(releasedHeroes, (hero) => {
		if (!isRenderableSlug(hero.slug)) {
			failures.push(`hero preview ${hero.name} (unroutable slug "${hero.slug}")`);
			return Promise.resolve(false);
		}
		return generateOne(`hero preview ${hero.name}`, failures, () =>
			generateHeroOG(hero, stats.heroes.get(hero.slug) ?? NO_CHANGES, convert, outputDir)
		);
	});
	totalCount += heroCount;

	console.log(`Generated ${heroCount} hero images`);

	const itemCount = await pooled(releasedItems, (item) => {
		if (!isRenderableSlug(item.slug)) {
			failures.push(`item preview ${item.name} (unroutable slug "${item.slug}")`);
			return Promise.resolve(false);
		}
		return generateOne(`item preview ${item.name}`, failures, () =>
			generateItemOG(item, stats.items.get(item.slug) ?? NO_CHANGES, convert, outputDir)
		);
	});
	totalCount += itemCount;

	console.log(`Generated ${itemCount} item images`);

	console.log(`✅ Total: ${totalCount} images generated`);
	return { totalCount, failures: failures.sort() };
}

export async function runPreviewGenerator(
	options: GeneratePreviewsOptions = {}
): Promise<GeneratePreviewsResult | undefined> {
	try {
		const result = await generatePreviews(options);
		if (result.failures.length > 0) process.exitCode = 1;
		return result;
	} catch (error) {
		console.error('Preview generation failed:', error);
		process.exitCode = 1;
		return undefined;
	}
}

const entryPoint = process.argv[1];
if (entryPoint && resolve(entryPoint) === fileURLToPath(import.meta.url)) {
	void runPreviewGenerator();
}
