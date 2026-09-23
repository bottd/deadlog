import { describe, expect, it } from 'vitest';
import type { ChangelogEntityIcon } from '@deadlog/db';
import { resolveRelatedReading, type MogReadingManifest } from './readingContext';

const hero: ChangelogEntityIcon = {
	id: 1,
	alt: 'The Doorman',
	slug: 'the-doorman',
	type: 'hero',
	src: '/hero.png',
	changeCount: 1
};
const item: ChangelogEntityIcon = {
	id: 2,
	alt: 'Item',
	slug: 'item',
	type: 'item',
	src: '/item.png',
	changeCount: 2
};
const fixture = (): MogReadingManifest => ({
	stats: {
		schemaVersion: 2,
		methodVersion: 2,
		collectedAt: '2026-09-21T00:00:00Z',
		before: { from: '2026-09-02', to: '2026-09-16' },
		after: null,
		siblings: []
	},
	open: false,
	sections: [{ kind: 'item', name: 'Item', id: 'item-2' }],
	related: [
		{
			name: 'Doorman',
			record: {
				methodVersion: 1,
				status: 'complete',
				appearances: 2000,
				candidates: [2],
				items: [{ id: 2, buyers: 1000 }]
			}
		}
	]
});
const icons = { heroes: [hero], items: [item] };

describe('related reading links', () => {
	it('uses changed item identities and actual anchors, with canonical URLs that clear filters', () => {
		expect(resolveRelatedReading(fixture(), icons, '/change/2026/09-16')).toEqual({
			'1': {
				stats: { before: { from: '2026-09-02', to: '2026-09-16' }, after: null },
				items: [
					{
						name: 'Item',
						image: '/item.png',
						before: 0.5,
						after: null,
						href: '/change/2026/09-16#item-2'
					}
				]
			}
		});
	});

	it('omits unavailable windows, insufficient samples, and unresolved item sections', () => {
		for (const fail of [
			'window',
			'status',
			'appearances',
			'buyers',
			'overflow',
			'section',
			'ambiguous'
		] as const) {
			const data = fixture();
			if (fail === 'window' && data.stats) data.stats.before = null;
			if (fail === 'status') data.related[0].record.status = 'insufficient-sample';
			if (fail === 'appearances') data.related[0].record.appearances = 999;
			if (fail === 'buyers') data.related[0].record.items[0].buyers = 99;
			if (fail === 'overflow') data.related[0].record.items[0].buyers = 2001;
			if (fail === 'section') data.sections = [];
			if (fail === 'ambiguous')
				data.sections.push({ ...data.sections[0], id: 'other-item' });
			expect(resolveRelatedReading(data, icons, '/change/2026/09-16')).toEqual({});
		}
		expect(
			resolveRelatedReading(fixture(), { heroes: [hero], items: [] }, '/patch')
		).toEqual({});
	});
});
