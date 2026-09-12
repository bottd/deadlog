import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, readFile, rm } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

import type { EnrichedHero } from '@deadlog/db';

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
	fetchImageAsDataUri: mocks.fetchImageAsDataUri
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
			stylesheets: ['body { margin: 0; }']
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
			args: ['--heroes-only'],
			outputDir
		})) as GeneratePreviewsResult;

		expect(result.totalCount).toBe(1);
		expect(result.failures).toEqual(['hero preview Broken Hero']);
		expect(process.exitCode).toBe(1);
		expect(mocks.getAllChangelogs).not.toHaveBeenCalled();
		expect(mocks.getAllItems).not.toHaveBeenCalled();
		expect(mocks.render).toHaveBeenCalledWith(
			{ type: 'container', children: [] },
			{
				width: 1200,
				height: 630,
				format: 'png',
				stylesheets: ['body { margin: 0; }']
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
			args: ['--changelog-only'],
			outputDir
		})) as GeneratePreviewsResult;

		expect(result).toEqual({ totalCount: 2, failures: [] });
		expect(mocks.fromJsx).toHaveBeenCalledWith(
			expect.objectContaining({
				props: expect.objectContaining({ title: 'Six New Heroes' })
			})
		);
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
		await runPreviewGenerator({ args: ['--changelog-only'], outputDir });
		expect(mocks.getChangelogIcons).toHaveBeenCalledTimes(1);
		expect(mocks.getChangelogIcons).toHaveBeenCalledWith({}, ['first', 'second']);
		expect(mocks.fetchImageAsDataUri).toHaveBeenCalledTimes(1);
		await runPreviewGenerator({ args: ['--changelog-only'], outputDir });
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
				authorImage: image
			}))
		);
		mocks.fetchImageAsDataUri
			.mockResolvedValueOnce('')
			.mockResolvedValue('data:image/png;base64,AA==');

		const result = (await runPreviewGenerator({
			args: ['--changelog-only'],
			outputDir
		})) as GeneratePreviewsResult;

		// Only the preview that hit the blip is lost; the rest retry.
		expect(result.failures).toEqual(['home preview']);
		expect(result.totalCount).toBe(2);
		expect(mocks.fetchImageAsDataUri).toHaveBeenCalledTimes(2);
	});
});
