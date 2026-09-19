import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({ scrape: vi.fn(), build: vi.fn(), snapshot: vi.fn() }));
vi.mock('./pipeline', () => ({ scrapeChangelogs: mocks.scrape }));
vi.mock('./buildDatabase', () => ({ buildDatabaseFromMog: mocks.build }));
vi.mock('./api', () => ({ loadEntitySnapshot: mocks.snapshot }));
import { runPipeline } from './cli';

describe('build orchestration', () => {
	const snapshot = { heroes: [], items: [] };
	beforeEach(() => {
		vi.clearAllMocks();
		mocks.snapshot.mockResolvedValue(snapshot);
		mocks.scrape.mockResolvedValue({ changed: false, created: 0, updated: 0 });
		mocks.build.mockResolvedValue({
			path: '/tmp/deadlog.db',
			patchCount: 1,
			heroMatches: 1,
			itemMatches: 0
		});
	});
	it('skips an unchanged scheduled build', async () => {
		await expect(runPipeline(['--if-changed'])).resolves.toEqual({ changed: false });
		expect(mocks.build).not.toHaveBeenCalled();
	});
	it('shares one snapshot between scraping and a changed build', async () => {
		mocks.scrape.mockResolvedValue({ changed: true, created: 1, updated: 0 });
		await runPipeline(['--if-changed']);
		expect(mocks.snapshot).toHaveBeenCalledTimes(1);
		expect(mocks.scrape).toHaveBeenCalledWith({ overwrite: false, snapshot });
		expect(mocks.build).toHaveBeenCalledWith(expect.objectContaining({ snapshot }));
	});
	it('builds existing authored content directly in db-only mode', async () => {
		await runPipeline(['--db-only']);
		expect(mocks.scrape).not.toHaveBeenCalled();
		expect(mocks.build).toHaveBeenCalledTimes(1);
	});
});
