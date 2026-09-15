import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, readFile, rm } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import type { ReactElement } from 'react';

import type { EnrichedHero } from '@deadlog/db';
import { HeroLayout } from './layouts/HeroLayout';
import { ItemLayout } from './layouts/ItemLayout';

const mocks = vi.hoisted(() => ({
	getAllChangelogs: vi.fn(),
	getAllHeroes: vi.fn(),
	getAllItems: vi.fn(),
	getChangelogIcons: vi.fn(),
	getDb: vi.fn(),
	fromJsx: vi.fn(),
	fetchImageAsDataUri: vi.fn(),
	render: vi.fn()
}));

vi.mock('@deadlog/db', () => ({
	getAllChangelogs: mocks.getAllChangelogs,
	getAllHeroes: mocks.getAllHeroes,
	getAllItems: mocks.getAllItems,
	getChangelogIcons: mocks.getChangelogIcons,
	getLibsqlDb: mocks.getDb
}));

vi.mock('@takumi-rs/helpers/jsx', () => ({
	fromJsx: mocks.fromJsx
}));

vi.mock('./renderer', () => ({
	renderer: { render: mocks.render },
	fetchImageAsDataUri: mocks.fetchImageAsDataUri,
	// Vitest throws on exports the factory omits.
	fontsReady: Promise.resolve()
}));

import {
	convertImageUrl,
	runPreviewGenerator,
	type GeneratePreviewsResult
} from './generate-previews';

describe('preview generation reliability', () => {
	let outputDir: string;
	let previousExitCode: typeof process.exitCode;

	beforeEach(async () => {
		outputDir = await mkdtemp(join(tmpdir(), 'deadlog-meta-'));
		previousExitCode = process.exitCode;
		process.exitCode = undefined;

		vi.clearAllMocks();
		mocks.getDb.mockReturnValue({});
		mocks.getAllChangelogs.mockResolvedValue([]);
		mocks.getAllHeroes.mockResolvedValue([]);
		mocks.getAllItems.mockResolvedValue([]);
		mocks.getChangelogIcons.mockResolvedValue({});
		mocks.fromJsx.mockResolvedValue({
			node: { type: 'container', children: [] },
			css: ['body { margin: 0; }']
		});
		mocks.render.mockResolvedValue(Buffer.from('rendered image'));
		mocks.fetchImageAsDataUri.mockResolvedValue('data:image/png;base64,AA==');
		vi.spyOn(console, 'log').mockImplementation(() => undefined);
		vi.spyOn(console, 'error').mockImplementation(() => undefined);
	});

	afterEach(async () => {
		process.exitCode = previousExitCode;
		vi.restoreAllMocks();
		await rm(outputDir, { recursive: true, force: true });
	});

	it('accepts missing optional images without fetching them', async () => {
		await expect(convertImageUrl()).resolves.toBe('');
		await expect(convertImageUrl(null)).resolves.toBe('');
		await expect(convertImageUrl('')).resolves.toBe('');
		expect(mocks.fetchImageAsDataUri).not.toHaveBeenCalled();
	});

	it('continues after an entity failure, uses canonical DB slugs, and exits nonzero', async () => {
		const heroes: EnrichedHero[] = [
			{
				id: 1,
				name: 'Broken Hero',
				slug: 'broken-hero',
				className: 'hero_broken',
				heroType: null,
				images: { card: 'https://images.example/broken.png' },
				isReleased: true
			},
			{
				id: 2,
				name: 'Hero Name That Does Not Match Its Slug',
				slug: 'canonical-hero',
				className: 'hero_working',
				heroType: 'mystic',
				images: { card: 'https://images.example/working.png' },
				isReleased: true
			}
		];
		mocks.getAllHeroes.mockResolvedValue(heroes);
		mocks.fetchImageAsDataUri.mockImplementation(async (url: string) =>
			url.includes('broken') ? '' : 'data:image/png;base64,AA=='
		);

		const result = (await runPreviewGenerator({
			outputDir
		})) as GeneratePreviewsResult;

		expect(result.totalCount).toBe(1);
		expect(result.failures).toEqual(['hero preview Broken Hero']);
		expect(process.exitCode).toBe(1);
		expect(mocks.getAllChangelogs).toHaveBeenCalledTimes(1);
		expect(mocks.getAllItems).toHaveBeenCalledTimes(1);
		expect(mocks.render).toHaveBeenCalledWith(
			{ type: 'container', children: [] },
			{
				width: 1200,
				height: 630,
				format: 'png',
				css: ['body { margin: 0; }']
			}
		);
		await expect(
			readFile(join(outputDir, 'hero', 'canonical-hero.png'))
		).resolves.toEqual(Buffer.from('rendered image'));
	});

	it('uses a named changelog title in its social preview', async () => {
		mocks.getAllChangelogs.mockResolvedValue([
			{
				id: '2025-08-18',
				title: 'Six New Heroes',
				slug: '2025/08-18',
				sourceUrl: 'https://forums.playdeadlock.com/threads/1/',
				author: 'simonne',
				authorImage: '',
				previewImage: null,
				category: 'patch',
				pubDate: '2025-08-18T20:42:20.000Z',
				majorUpdate: false,
				parentChange: null,
				contentText: 'Meet the new heroes.'
			}
		]);

		const result = (await runPreviewGenerator({
			outputDir
		})) as GeneratePreviewsResult;

		expect(result).toEqual({ totalCount: 2, failures: [] });
		expect(mocks.fromJsx).toHaveBeenCalledWith(
			expect.objectContaining({
				props: expect.objectContaining({ heading: 'Six New Heroes' })
			})
		);
	});

	it.each<{
		name: string;
		counts: (number | null)[];
		named?: boolean;
		changes: string;
		history: string;
	}>([
		{
			name: 'fully counted history',
			counts: [1, 1],
			changes: '2 CHANGES',
			history: 'Last changed in the September 15th, 2026 patch.'
		},
		{
			name: 'newest patch only mentions the entity',
			counts: [2, null],
			changes: '2+ CHANGES',
			history: 'Last mentioned in the September 15th, 2026 patch.'
		},
		{
			name: 'older mention and a newer counted change',
			counts: [null, 1],
			named: true,
			changes: '1+ CHANGES',
			history: 'Last changed Sep 15, 2026 in Matchmaking Update.'
		},
		{
			name: 'mention-only history',
			counts: [null, null],
			named: true,
			changes: '',
			history: 'Last mentioned Sep 15, 2026 in Matchmaking Update.'
		},
		{
			name: 'one known change',
			counts: [1],
			changes: '1 CHANGE',
			history: 'Last changed in the September 1st, 2026 patch.'
		},
		{
			name: 'known zero is not an unknown count',
			counts: [0],
			changes: '0 CHANGES',
			history: 'Last changed in the September 1st, 2026 patch.'
		},
		{
			name: 'known zero and an unknown count',
			counts: [0, null],
			changes: '0+ CHANGES',
			history: 'Last mentioned in the September 15th, 2026 patch.'
		},
		{
			name: 'no recorded history',
			counts: [],
			changes: '0 CHANGES',
			history: 'No changes recorded yet.'
		}
	])('renders honest hero and item labels for $name', async (scenario) => {
		const image = 'https://images.example/entity.png';
		mocks.getAllHeroes.mockResolvedValue([
			{
				id: 1,
				name: 'Abrams',
				slug: 'abrams',
				className: 'hero_abrams',
				heroType: 'brawler',
				images: { card: image },
				isReleased: true
			}
		]);
		mocks.getAllItems.mockResolvedValue([
			{
				id: 1,
				name: 'Headshot Booster',
				slug: 'headshot-booster',
				className: 'upgrade_headshot_booster',
				type: 'upgrade',
				category: 'weapon',
				tier: 1,
				image,
				isReleased: true
			}
		]);
		const patches = scenario.counts.map((_, index) => ({
			id: `patch-${index}`,
			title: scenario.named
				? 'Matchmaking Update'
				: `09-${index === 0 ? '01' : '15'}-2026`,
			pubDate: `2026-09-${index === 0 ? '01' : '15'}T20:00:00.000Z`,
			author: 'Yoshi'
		}));
		// The newest entry must keep its mention status when an older patch is folded later.
		mocks.getAllChangelogs.mockResolvedValue([...patches].reverse());
		mocks.getChangelogIcons.mockResolvedValue(
			Object.fromEntries(
				patches.map((patch, index) => [
					patch.id,
					{
						heroes: [{ slug: 'abrams', src: image, changeCount: scenario.counts[index] }],
						items: [
							{
								slug: 'headshot-booster',
								src: image,
								changeCount: scenario.counts[index]
							}
						]
					}
				])
			)
		);

		const result = await runPreviewGenerator({ outputDir });
		expect(result).toEqual({
			totalCount: patches.length + (patches.length > 0 ? 1 : 0) + 2,
			failures: []
		});

		// Exercise the real layouts as well as aggregation: an empty count must actually
		// disappear from the annotation row, and a partial count must retain its plus.
		const { fromJsx } = await vi.importActual<typeof import('@takumi-rs/helpers/jsx')>(
			'@takumi-rs/helpers/jsx'
		);
		for (const layout of [HeroLayout, ItemLayout]) {
			const element = mocks.fromJsx.mock.calls
				.map(([element]) => element as ReactElement)
				.find((element) => element.type === layout);
			if (!element) throw new Error(`Missing ${layout.name} preview`);
			const { node } = await fromJsx(element);
			const rendered = JSON.stringify(node);
			expect(rendered).toContain(scenario.history);
			expect(rendered).toContain(
				`${patches.length} ${patches.length === 1 ? 'PATCH' : 'PATCHES'}`
			);
			if (scenario.changes) expect(rendered).toContain(scenario.changes);
			else expect(rendered).not.toContain(' CHANGES');
		}
	});

	it('batches icon reads and fetches shared artwork once per generation run', async () => {
		const image = 'https://images.example/shared.webp';
		mocks.getAllChangelogs.mockResolvedValue(
			['first', 'second'].map((id) => ({
				id,
				title: id,
				pubDate: '2026-09-01T20:00:00.000Z',
				author: 'Yoshi',
				authorImage: image
			}))
		);
		const icons = {
			heroes: [],
			items: [
				{ id: 1, src: image, alt: 'Item', slug: 'item', type: 'item', changeCount: 1 }
			]
		};
		mocks.getChangelogIcons.mockResolvedValue({ first: icons, second: icons });
		await runPreviewGenerator({ outputDir });
		expect(mocks.getChangelogIcons).toHaveBeenCalledTimes(1);
		expect(mocks.getChangelogIcons).toHaveBeenCalledWith({}, ['first', 'second']);
		expect(mocks.fetchImageAsDataUri).toHaveBeenCalledTimes(1);
		await runPreviewGenerator({ outputDir });
		expect(mocks.fetchImageAsDataUri).toHaveBeenCalledTimes(2);
	});

	it('refetches shared artwork whose first fetch failed', async () => {
		const image = 'https://images.example/flaky.webp';
		mocks.getAllChangelogs.mockResolvedValue(
			['first', 'second'].map((id) => ({
				id,
				title: id,
				pubDate: '2026-09-01T20:00:00.000Z',
				author: 'Yoshi',
				authorImage: ''
			}))
		);
		const icons = {
			heroes: [],
			items: [
				{ id: 1, src: image, alt: 'Item', slug: 'item', type: 'item', changeCount: 1 }
			]
		};
		mocks.getChangelogIcons.mockResolvedValue({ first: icons, second: icons });
		mocks.fetchImageAsDataUri
			.mockResolvedValueOnce('')
			.mockResolvedValue('data:image/png;base64,AA==');

		const result = (await runPreviewGenerator({
			outputDir
		})) as GeneratePreviewsResult;

		// Only the preview that hit the blip is lost; the rest retry.
		expect(result.failures).toEqual(['home preview']);
		expect(result.totalCount).toBe(2);
		expect(mocks.fetchImageAsDataUri).toHaveBeenCalledTimes(2);
	});
});
