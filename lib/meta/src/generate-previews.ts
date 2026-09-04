import {
	getAllChangelogs,
	getAllHeroes,
	getAllItems,
	getChangelogIcons,
	type EnrichedHero,
	type EnrichedItem
} from '@deadlog/scraper';
import { formatDate } from '@deadlog/utils';
import { getLibsqlDb as getDb } from '@deadlog/db';
import { fromJsx } from '@takumi-rs/helpers/jsx';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { extname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import React from 'react';

import { renderer, fetchImageAsDataUri } from './renderer';
import { Theme } from './theme';
import { ChangelogLayout } from './layouts/ChangelogLayout';
import { HomeLayout } from './layouts/HomeLayout';
import { HeroLayout } from './layouts/HeroLayout';
import { ItemLayout } from './layouts/ItemLayout';

const OUTPUT_DIR = 'app/static/assets/meta';
// Anchored to this file, not to cwd: every changelog now carries a root-relative
// author_image, so a cwd-relative lookup would fail every preview when build:meta runs
// from anywhere but the repo root.
const STATIC_DIR = resolve(import.meta.dirname, '../../../app/static');

const MIME_TYPES: Record<string, string> = {
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.webp': 'image/webp'
};

/** Author avatars are root-relative site paths, not URLs, so they come off disk. */
async function readStaticAsDataUri(path: string): Promise<string> {
	const buffer = await readFile(join(STATIC_DIR, path));
	const mime = MIME_TYPES[extname(path).toLowerCase()] ?? 'image/png';
	return `data:${mime};base64,${buffer.toString('base64')}`;
}

export async function convertImageUrl(url?: string | null): Promise<string> {
	if (!url) return '';
	if (url.startsWith('data:')) return url;
	if (url.startsWith('/')) return await readStaticAsDataUri(url);
	const dataUri = await fetchImageAsDataUri(url);
	if (!dataUri) throw new Error(`Failed to fetch image: ${url}`);
	return dataUri;
}

async function convertImageUrls(urls: readonly string[]): Promise<string[]> {
	return await Promise.all(urls.map((url) => convertImageUrl(url)));
}

export async function renderToFile(element: React.ReactElement, outputPath: string) {
	try {
		const { node, stylesheets } = await fromJsx(element);
		const { width, height } = Theme.size;
		const imageBuffer = await renderer.render(node, {
			width,
			height,
			format: 'png',
			stylesheets
		});

		await mkdir(join(outputPath, '..'), { recursive: true });
		await writeFile(outputPath, imageBuffer);
	} catch (error) {
		console.error(`Failed to render ${outputPath}:`, error);
		throw error;
	}
}

async function generateChangelogOG(
	changeId: string,
	data: { title: string; author: string; authorIcon: string; itemIcons: string[] },
	outputDir = OUTPUT_DIR
) {
	const authorIcon = await convertImageUrl(data.authorIcon);
	const itemIcons = await convertImageUrls(data.itemIcons);

	const element = React.createElement(ChangelogLayout, {
		...data,
		authorIcon,
		itemIcons
	});
	await renderToFile(element, join(outputDir, 'change', `${changeId}.png`));
}

async function generateHomeOG(
	latestChangelog: {
		id: string;
		pubDate: string;
		author: string;
		authorImage?: string | null;
	},
	db: ReturnType<typeof getDb>,
	outputDir = OUTPUT_DIR
) {
	const iconsMap = await getChangelogIcons(db, [latestChangelog.id]);
	const icons = iconsMap[latestChangelog.id] ?? { heroes: [], items: [] };

	const authorImage = await convertImageUrl(latestChangelog.authorImage);
	const heroIcons = await convertImageUrls(icons.heroes.slice(0, 8).map((h) => h.src));
	const itemIcons = await convertImageUrls(icons.items.slice(0, 8).map((i) => i.src));

	const element = React.createElement(HomeLayout, {
		lastUpdated: formatDate(latestChangelog.pubDate),
		author: latestChangelog.author,
		authorImage,
		heroIcons,
		itemIcons
	});

	await renderToFile(element, join(outputDir, 'index.png'));
}

async function generateHeroOG(hero: EnrichedHero, outputDir = OUTPUT_DIR) {
	const image = hero.images.card ?? hero.images.portrait ?? Object.values(hero.images)[0];
	if (!image) {
		throw new Error(`Hero ${hero.name} has no images`);
	}

	const imageUri = await convertImageUrl(image);

	const element = React.createElement(HeroLayout, {
		name: hero.name,
		heroType: hero.heroType,
		image: imageUri
	});

	await renderToFile(element, join(outputDir, 'hero', `${hero.slug}.png`));
}

async function generateItemOG(item: EnrichedItem, outputDir = OUTPUT_DIR) {
	const image = item.image;
	if (!image) {
		throw new Error(`Item ${item.name} has no images`);
	}

	const imageUri = await convertImageUrl(image);

	const element = React.createElement(ItemLayout, {
		name: item.name,
		type: item.type,
		image: imageUri
	});

	await renderToFile(element, join(outputDir, 'item', `${item.slug}.png`));
}

export interface GeneratePreviewsOptions {
	args?: string[];
	outputDir?: string;
}

export interface GeneratePreviewsResult {
	totalCount: number;
	failures: string[];
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

export async function generatePreviews(
	options: GeneratePreviewsOptions = {}
): Promise<GeneratePreviewsResult> {
	const args = options.args ?? process.argv.slice(2);
	const outputDir = options.outputDir ?? OUTPUT_DIR;
	const changelogOnly = args.includes('--changelog-only');
	const heroesOnly = args.includes('--heroes-only');
	const itemsOnly = args.includes('--items-only');
	const includeChangelogs = !heroesOnly && !itemsOnly;
	const includeHeroes = !changelogOnly && !itemsOnly;
	const includeItems = !changelogOnly && !heroesOnly;

	const db = getDb();
	const [allChangelogs, heroes, items] = await Promise.all([
		includeChangelogs ? getAllChangelogs(db) : Promise.resolve([]),
		includeHeroes ? getAllHeroes(db) : Promise.resolve([]),
		includeItems ? getAllItems(db) : Promise.resolve([])
	]);

	let totalCount = 0;
	const failures: string[] = [];

	if (includeChangelogs) {
		if (allChangelogs.length > 0) {
			const latest = allChangelogs.reduce((mostRecent, current) => {
				return current.pubDate > mostRecent.pubDate ? current : mostRecent;
			}, allChangelogs[0]);

			if (
				await generateOne('home preview', failures, () =>
					generateHomeOG(
						{
							id: latest.id,
							pubDate: latest.pubDate,
							author: latest.author,
							authorImage: latest.authorImage
						},
						db,
						outputDir
					)
				)
			) {
				totalCount++;
			}
		}

		let changelogCount = 0;
		for (const changelog of allChangelogs) {
			if (
				await generateOne(`changelog preview ${changelog.id}`, failures, async () => {
					const iconsMap = await getChangelogIcons(db, [changelog.id]);
					const icons = iconsMap[changelog.id] ?? { heroes: [], items: [] };

					await generateChangelogOG(
						changelog.id,
						{
							title: changelog.title,
							author: changelog.author,
							authorIcon: changelog.authorImage,
							itemIcons: icons.items.slice(0, 6).map((i) => i.src)
						},
						outputDir
					);
				})
			) {
				changelogCount++;
				totalCount++;
			}
		}

		console.log(`Generated ${changelogCount} changelog images`);
	}

	if (includeHeroes) {
		let heroCount = 0;

		for (const hero of heroes.filter((h) => h.isReleased)) {
			if (
				await generateOne(`hero preview ${hero.name}`, failures, () =>
					generateHeroOG(hero, outputDir)
				)
			) {
				heroCount++;
				totalCount++;
			}
		}

		console.log(`Generated ${heroCount} hero images`);
	}

	if (includeItems) {
		let itemCount = 0;

		for (const item of items.filter((item) => item.isReleased)) {
			if (
				await generateOne(`item preview ${item.name}`, failures, () =>
					generateItemOG(item, outputDir)
				)
			) {
				itemCount++;
				totalCount++;
			}
		}

		console.log(`Generated ${itemCount} item images`);
	}

	console.log(`✅ Total: ${totalCount} images generated`);
	return { totalCount, failures };
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
