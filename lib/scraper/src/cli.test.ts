import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
	scrape: vi.fn(),
	build: vi.fn(),
	snapshot: vi.fn(),
	previous: vi.fn(),
	record: vi.fn(),
	relink: vi.fn()
}));
vi.mock('./pipeline', () => ({ scrapeChangelogs: mocks.scrape }));
vi.mock('./buildDatabase', () => ({ buildDatabaseFromMog: mocks.build }));
vi.mock('./api', () => ({
	loadEntitySnapshot: mocks.snapshot,
	readEntitySnapshot: mocks.previous
}));
vi.mock('./entityRenames', () => ({
	recordEntityRenames: mocks.record,
	rewriteRenamedLinks: mocks.relink
}));
import { runPipeline } from './cli';

describe('build orchestration', () => {
	const snapshot = { heroes: [], items: [] };
	beforeEach(() => {
		vi.clearAllMocks();
		mocks.snapshot.mockResolvedValue(snapshot);
		mocks.previous.mockResolvedValue(snapshot);
		mocks.record.mockReturnValue(0);
		mocks.relink.mockReturnValue(0);
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
	it('rebuilds a scheduled run when the asset api renamed an entity', async () => {
		mocks.record.mockReturnValue(1);
		await expect(runPipeline(['--if-changed'])).resolves.toMatchObject({ changed: true });
		expect(mocks.record).toHaveBeenCalledWith(snapshot, snapshot, './app/changelogs');
		expect(mocks.build).toHaveBeenCalledTimes(1);
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
