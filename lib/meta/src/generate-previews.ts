import {
	getAllChangelogs,
	getAllHeroes,
	getAllItems,
	formatDate,
	getChangelogIcons,
	type EnrichedHero,
	type EnrichedItem
} from '@deadlog/scraper';
import { getLibsqlDb as getDb } from '@deadlog/db';
import { fromJsx } from '@takumi-rs/helpers/jsx';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import React from 'react';

import { getRenderer, fetchImageAsDataUri } from './renderer';
import { Theme } from './theme';
import { ChangelogLayout } from './layouts/ChangelogLayout';
import { HomeLayout } from './layouts/HomeLayout';
import { HeroLayout, type HeroPreviewItem } from './layouts/HeroLayout';
import { ItemLayout } from './layouts/ItemLayout';
import type { HeroPreview } from './components/HeroPreview';

const OUTPUT_DIR = 'app/static/assets/meta';
const CHANGELOG_DIR = `${OUTPUT_DIR}/change`;
const HERO_DIR = `${OUTPUT_DIR}/hero`;
const ITEM_DIR = `${OUTPUT_DIR}/item`;

async function convertImageUrl(url: string): Promise<string> {
	if (url.startsWith('data:')) return url;
	const dataUri = await fetchImageAsDataUri(url);
	if (!dataUri) throw new Error(`Failed to fetch image: ${url}`);
	return dataUri;
}

async function convertImageUrls(urls: readonly string[]): Promise<string[]> {
	return await Promise.all(urls.map((url) => convertImageUrl(url)));
}

async function renderToFile(element: React.ReactElement, outputPath: string) {
	const renderer = await getRenderer();
	const node = await fromJsx(element);
	const { width, height } = Theme.size;

	try {
		const imageBuffer = await renderer.render(node, {
			width,
			height,
			format: 'png'
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
	data: {
		title: string;
		author: string;
		authorIcon: string;
		heroPreviews: HeroPreview[];
		itemIcons: string[];
		generalNotes: string[];
	}
) {
	const authorIcon = await convertImageUrl(data.authorIcon);
	const itemIcons = await convertImageUrls(data.itemIcons);

	const heroPreviews = await Promise.all(
		data.heroPreviews.map(async (hero) => ({
			heroIcon: await convertImageUrl(hero.heroIcon),
			abilityIcons: await convertImageUrls(hero.abilityIcons)
		}))
	);

	const element = React.createElement(ChangelogLayout, {
		...data,
		authorIcon,
		itemIcons,
		heroPreviews
	});
	await renderToFile(element, join(CHANGELOG_DIR, `${changeId}.png`));
}

async function generateHomeOG(
	latestChangelog: {
		id: string;
		pubDate: string;
		author: string;
		authorImage: string;
	},
	db: ReturnType<typeof getDb>
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

	await renderToFile(element, join(OUTPUT_DIR, 'index.png'));
}

async function generateHeroOG(
	hero: EnrichedHero,
	changePreview: HeroPreviewItem[] | null
) {
	const image = hero.images.card ?? hero.images.portrait ?? Object.values(hero.images)[0];
	const slug = hero.name.toLowerCase().replace(/\s+/g, '-');

	const imageUri = await convertImageUrl(image);

	let preview: HeroPreviewItem[] | null = null;
	if (changePreview) {
		preview = await Promise.all(
			changePreview.map(async (item): Promise<HeroPreviewItem> => {
				if (item.type === 'ability' && item.image) {
					return { ...item, image: await convertImageUrl(item.image) };
				}
				return item;
			})
		);
	}

	const element = React.createElement(HeroLayout, {
		name: hero.name,
		heroType: hero.heroType,
		image: imageUri,
		changePreview: preview
	});

	await renderToFile(element, join(HERO_DIR, `${slug}.png`));
}

async function generateItemOG(item: EnrichedItem, changePreview: string | null) {
	const image = item.image;
	if (!image) {
		throw new Error(`Item ${item.name} has no images`);
	}
	const slug = item.name.toLowerCase().replace(/\s+/g, '-');

	const imageUri = await convertImageUrl(image);

	const element = React.createElement(ItemLayout, {
		name: item.name,
		type: item.type,
		image: imageUri,
		changePreview: changePreview ?? ''
	});

	await renderToFile(element, join(ITEM_DIR, `${slug}.png`));
}

async function main() {
	const args = process.argv.slice(2);
	const changelogOnly = args.includes('--changelog-only');
	const heroesOnly = args.includes('--heroes-only');
	const itemsOnly = args.includes('--items-only');

	const db = getDb();
	const [allChangelogs, heroes, items] = await Promise.all([
		getAllChangelogs(db),
		getAllHeroes(db),
		getAllItems(db)
	]);

	let totalCount = 0;

	// Generate changelog OG images
	if (!heroesOnly && !itemsOnly) {
		if (allChangelogs.length > 0) {
			const latest = allChangelogs.reduce((mostRecent, current) => {
				return current.pubDate > mostRecent.pubDate ? current : mostRecent;
			}, allChangelogs[0]);

			await generateHomeOG(
				{
					id: latest.id,
					pubDate: latest.pubDate,
					author: latest.author,
					authorImage: latest.authorImage
				},
				db
			);
			totalCount++;
		}

		let changelogCount = 0;
		for (const changelog of allChangelogs) {
			const iconsMap = await getChangelogIcons(db, [changelog.id]);
			const icons = iconsMap[changelog.id] ?? { heroes: [], items: [] };

			await generateChangelogOG(changelog.id, {
				title: `${formatDate(changelog.pubDate)} Update`,
				author: changelog.author,
				authorIcon: changelog.authorImage,
				heroPreviews: [],
				itemIcons: icons.items.slice(0, 6).map((i) => i.src),
				generalNotes: []
			});
			changelogCount++;
		}

		console.log(`Generated ${changelogCount} changelog images`);
		totalCount += changelogCount;
	}

	// Generate hero OG images
	if (!changelogOnly && !itemsOnly) {
		let heroCount = 0;

		for (const hero of heroes.filter((h) => h.isReleased)) {
			await generateHeroOG(hero, null);
			heroCount++;
		}

		console.log(`Generated ${heroCount} hero images`);
		totalCount += heroCount;
	}

	// Generate item OG images
	if (!changelogOnly && !heroesOnly) {
		let itemCount = 0;

		for (const item of items) {
			if (!item.image) continue;

			await generateItemOG(item, null);
			itemCount++;
		}

		console.log(`Generated ${itemCount} item images`);
		totalCount += itemCount;
	}

	console.log(`✅ Total: ${totalCount} images generated`);
}

main().catch(console.error);
