import {
	getAllChangelogs,
	getAllHeroes,
	getAllItems,
	formatDateWithSuffix,
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

const OUTPUT_DIR = 'apps/web/static/assets/meta';
const CHANGELOG_DIR = `${OUTPUT_DIR}/change`;
const HERO_DIR = `${OUTPUT_DIR}/hero`;
const ITEM_DIR = `${OUTPUT_DIR}/item`;

async function convertImageUrl(url: string): Promise<string> {
	// If already a data URI, return as-is
	if (url.startsWith('data:')) return url;
	// Fetch and convert to data URI
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
	// Convert all image URLs to data URIs
	const authorIconDataUri = await convertImageUrl(data.authorIcon);
	const itemIconsDataUris = await convertImageUrls(data.itemIcons);

	const heroPreviewsDataUris = await Promise.all(
		data.heroPreviews.map(async (hero) => ({
			heroIcon: await convertImageUrl(hero.heroIcon),
			abilityIcons: await convertImageUrls(hero.abilityIcons)
		}))
	);

	const element = React.createElement(ChangelogLayout, {
		...data,
		authorIcon: authorIconDataUri,
		itemIcons: itemIconsDataUris,
		heroPreviews: heroPreviewsDataUris
	});
	await renderToFile(element, join(CHANGELOG_DIR, `${changeId}.png`));
}

async function generateHomeOG(
	latestChangelog: {
		id: string;
		date: Date;
		author: string;
		authorImage: string;
	},
	db: ReturnType<typeof getDb>
) {
	const icons = await getChangelogIcons(db, latestChangelog.id);

	// Convert all image URLs to data URIs
	const authorImageDataUri = await convertImageUrl(latestChangelog.authorImage);
	const heroIconsDataUris = await convertImageUrls(
		icons.heroes.slice(0, 8).map((h) => h.src)
	);
	const itemIconsDataUris = await convertImageUrls(
		icons.items.slice(0, 8).map((i) => i.src)
	);

	const element = React.createElement(HomeLayout, {
		lastUpdated: formatDateWithSuffix(latestChangelog.date),
		author: latestChangelog.author,
		authorImage: authorImageDataUri,
		heroIcons: heroIconsDataUris,
		itemIcons: itemIconsDataUris
	});

	await renderToFile(element, join(OUTPUT_DIR, 'index.png'));
}

async function generateHeroOG(
	hero: EnrichedHero,
	changePreview: HeroPreviewItem[] | null
) {
	const image = hero.images.card ?? hero.images.portrait ?? Object.values(hero.images)[0];
	const slug = hero.name.toLowerCase().replace(/\s+/g, '-');

	// Convert image URL to data URI
	const imageDataUri = await convertImageUrl(image);

	// Convert ability images in change preview if present
	let changePreviewWithDataUris: HeroPreviewItem[] | null = null;
	if (changePreview) {
		changePreviewWithDataUris = await Promise.all(
			changePreview.map(async (item): Promise<HeroPreviewItem> => {
				if (item.type === 'ability' && item.image) {
					const convertedImage = await convertImageUrl(item.image);
					return {
						...item,
						image: convertedImage
					};
				}
				return item;
			})
		);
	}

	const element = React.createElement(HeroLayout, {
		name: hero.name,
		heroType: hero.heroType,
		image: imageDataUri,
		changePreview: changePreviewWithDataUris
	});

	await renderToFile(element, join(HERO_DIR, `${slug}.png`));
}

async function generateItemOG(item: EnrichedItem, changePreview: string | null) {
	const image = item.images.png ?? item.images.webp;
	if (!image) {
		throw new Error(`Item ${item.name} has no images`);
	}
	const slug = item.name.toLowerCase().replace(/\s+/g, '-');

	// Convert image URL to data URI
	const imageDataUri = await convertImageUrl(image);

	const element = React.createElement(ItemLayout, {
		name: item.name,
		type: item.type,
		image: imageDataUri,
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
				return current.date > mostRecent.date ? current : mostRecent;
			}, allChangelogs[0]);

			await generateHomeOG(
				{
					id: latest.id,
					date: latest.date,
					author: latest.author,
					authorImage: latest.authorImage
				},
				db
			);
			totalCount++;
		}

		let changelogCount = 0;
		for (const changelog of allChangelogs) {
			const icons = await getChangelogIcons(db, changelog.id);

			// Extract heroes with their abilities
			const heroPreviews: HeroPreview[] = [];
			if (changelog.contentJson?.heroes) {
				for (const [heroName, heroData] of Object.entries(changelog.contentJson.heroes)) {
					const hero = heroes.find((h) => h.name === heroName);
					if (hero) {
						const heroIcon = Object.values(hero.images)[0];
						const abilityIcons = (heroData.abilities || [])
							.map((ability) => ability.abilityImage)
							.filter((img): img is string => Boolean(img))
							.slice(0, 6);

						heroPreviews.push({ heroIcon, abilityIcons });
					}
				}
			}

			// Extract general notes
			const generalNotes: string[] = [];
			if (changelog.contentJson?.notes) {
				for (const note of changelog.contentJson.notes) {
					if (note.text.length <= 85) {
						generalNotes.push(note.text);
					}
					if (generalNotes.length >= 8) break;
				}
			}

			await generateChangelogOG(changelog.id, {
				title: `${formatDateWithSuffix(changelog.date)} Update`,
				author: changelog.author,
				authorIcon: changelog.authorImage,
				heroPreviews: heroPreviews.slice(0, 6),
				itemIcons: icons.items.slice(0, 6).map((i) => i.src),
				generalNotes
			});
			changelogCount++;
		}

		console.log(`Generated ${changelogCount} changelog images`);
		totalCount += changelogCount;
	}

	// Generate hero OG images
	if (!changelogOnly && !itemsOnly) {
		const { getChangelogsByHeroIds } = await import('@deadlog/scraper');
		let heroCount = 0;

		for (const hero of heroes.filter((h) => h.isReleased)) {
			const changelogs = await getChangelogsByHeroIds(db, [hero.id]);

			let previewData: HeroPreviewItem[] | null = null;
			if (changelogs.length > 0) {
				const latestChangelog = changelogs[0];
				const heroChanges = latestChangelog.contentJson?.heroes?.[hero.name];
				const items: HeroPreviewItem[] = [];

				if (heroChanges?.abilities && heroChanges.abilities.length > 0) {
					for (const ability of heroChanges.abilities.slice(0, 3)) {
						if (ability.notes && ability.notes.length > 0) {
							let noteText = ability.notes[0].text;
							const abilityPrefix = `${ability.abilityName}:`;
							if (noteText.startsWith(abilityPrefix)) {
								noteText = noteText.slice(abilityPrefix.length).trim();
							}

							items.push({
								type: 'ability',
								name: ability.abilityName,
								image: ability.abilityImage,
								text: noteText
							});
						}
					}
				}

				if (heroChanges?.notes && heroChanges.notes.length > 0) {
					const remainingSpace = 3 - items.length;
					for (const note of heroChanges.notes.slice(0, remainingSpace)) {
						items.push({ type: 'text', text: note.text });
					}
				}

				if (items.length > 0) {
					previewData = items;
				}
			}

			await generateHeroOG(hero, previewData);
			heroCount++;
		}

		console.log(`Generated ${heroCount} hero images`);
		totalCount += heroCount;
	}

	// Generate item OG images
	if (!changelogOnly && !heroesOnly) {
		const { getChangelogsByItemIds } = await import('@deadlog/scraper');
		let itemCount = 0;

		for (const item of items) {
			if (!item.images?.png && !item.images?.webp) continue;

			const changelogs = await getChangelogsByItemIds(db, [item.id]);
			if (changelogs.length > 0) {
				let previewText: string | null = null;
				const latestChangelog = changelogs[0];
				const itemChanges = latestChangelog.contentJson?.items?.[item.name];
				const lines: string[] = [];

				if (itemChanges?.notes && itemChanges.notes.length > 0) {
					for (const note of itemChanges.notes.slice(0, 4)) {
						lines.push(`• ${note.text}`);
					}
				}

				if (lines.length > 0) {
					previewText = lines.join('\n');
					if (previewText.length > 250) {
						previewText = previewText.slice(0, 250) + '...';
					}
				}

				await generateItemOG(item, previewText);
				itemCount++;
			}
		}

		console.log(`Generated ${itemCount} item images`);
		totalCount += itemCount;
	}

	console.log(`✅ Total: ${totalCount} images generated`);
}

main().catch(console.error);
