import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, readFile, rm } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

import type { EnrichedHero } from '@deadlog/scraper';

const mocks = vi.hoisted(() => ({
	getAllChangelogs: vi.fn(),
	getAllHeroes: vi.fn(),
	getAllItems: vi.fn(),
	getChangelogIcons: vi.fn(),
	getDb: vi.fn(),
	fromJsx: vi.fn(),
	getRenderer: vi.fn(),
	fetchImageAsDataUri: vi.fn(),
	render: vi.fn()
}));

vi.mock('@deadlog/scraper', () => ({
	getAllChangelogs: mocks.getAllChangelogs,
	getAllHeroes: mocks.getAllHeroes,
	getAllItems: mocks.getAllItems,
	getChangelogIcons: mocks.getChangelogIcons,
	formatDate: (date: string) => date
}));

vi.mock('@deadlog/db', () => ({
	getLibsqlDb: mocks.getDb
}));

vi.mock('@takumi-rs/helpers/jsx', () => ({
	fromJsx: mocks.fromJsx
}));

vi.mock('./renderer', () => ({
	getRenderer: mocks.getRenderer,
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
		mocks.getRenderer.mockResolvedValue({ render: mocks.render });
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
});
