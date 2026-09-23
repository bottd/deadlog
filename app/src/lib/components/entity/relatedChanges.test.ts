import { afterEach, describe, expect, it, vi } from 'vitest';
import type { PatchStats, RelatedItems } from '@deadlog/utils';
import { formatShare, relatedChanges } from './relatedChanges';

const stats: PatchStats = {
	schemaVersion: 2,
	methodVersion: 2,
	collectedAt: '2026-09-21T21:00:00.000Z',
	before: { from: '2026-09-02', to: '2026-09-16' },
	after: null,
	siblings: []
};
const related: RelatedItems = {
	methodVersion: 1,
	status: 'complete',
	appearances: 200_000,
	candidates: [1, 2],
	items: [
		{ id: 1, buyers: 62_000 },
		{ id: 2, buyers: 900 }
	]
};
const patch = { id: 'p', slug: '2026/09-16', stats, relatedItems: related };
const change = (itemId: number, name: string) => ({
	changelogId: 'p',
	itemId,
	name,
	image: `/${itemId}.webp`,
	changeGroups: [{ ability: null, bullets: ['One', 'Two'] }]
});

afterEach(() => vi.restoreAllMocks());

describe('relatedChanges', () => {
	it("joins each selection to the item's own section in the same patch", () => {
		const result = relatedChanges(patch, [
			change(1, "Diviner's Kevlar"),
			change(2, 'Rite')
		]);

		expect(result?.before).toEqual(stats.before);
		expect(result?.items[0]).toEqual({
			name: "Diviner's Kevlar",
			image: '/1.webp',
			share: 0.31,
			groups: [{ ability: null, bullets: ['One', 'Two'] }],
			href: '/change/2026/09-16#diviner-s-kevlar'
		});
	});

	it('omits an item with no section to link to, and says so in the build log', () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

		const result = relatedChanges(patch, [change(2, 'Rite')]);

		expect(result?.items.map((item) => item.name)).toEqual(['Rite']);
		expect(warn).toHaveBeenCalledWith(expect.stringContaining('Related item 1'));
	});

	it('renders nothing for an empty, windowless or unrecorded result', () => {
		const changes = [change(1, 'A')];

		expect(relatedChanges({ ...patch, relatedItems: null }, changes)).toBeNull();
		expect(
			relatedChanges(
				{
					...patch,
					relatedItems: { ...related, status: 'insufficient-sample', items: [] }
				},
				changes
			)
		).toBeNull();
		expect(relatedChanges({ ...patch, stats: null }, changes)).toBeNull();
		expect(
			relatedChanges({ ...patch, relatedItems: { ...related, items: [] } }, changes)
		).toBeNull();
	});
});

describe('formatShare', () => {
	it('rounds to a whole percent and never shows a bought item as zero', () => {
		expect(formatShare(0.314)).toBe('31%');
		expect(formatShare(0.0045)).toBe('<1%');
		expect(formatShare(0.995)).toBe('100%');
	});
});
