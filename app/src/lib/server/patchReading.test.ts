import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import type { EntityContext } from '@deadlog/utils';
import type { PatchReadingData } from '@deadlog/db';
import { projectPatchReading } from './patchReading';

const bullet = 'Call Bell Cooldown reduced from 40s to 30s';
const context: EntityContext = {
	identity: { assetId: 1, className: 'bell', type: 'ability' },
	clientVersion: 6698,
	language: 'english',
	collectedAt: '2026-09-21T00:00:00Z',
	sections: [{ kind: 'description', label: null, paragraphs: ['Rings a bell.'] }],
	properties: []
};
const patch = { id: 'new', pubDate: '2026-09-16T00:00:00Z' };
const fixture = (): PatchReadingData => ({
	heroes: [
		{
			id: 69,
			name: 'The Doorman',
			groups: [{ ability: 'Call Bell', abilitySlug: 'call-bell', bullets: [bullet] }]
		}
	],
	items: [
		{
			id: 1,
			name: 'Item',
			slug: 'item',
			groups: [{ ability: null, bullets: ['A change'] }],
			context
		}
	],
	abilities: [
		{ heroId: 69, name: 'Call Bell', slug: 'call-bell', context },
		{ heroId: 70, name: 'Call Bell', slug: 'call-bell', context },
		{ heroId: 69, name: 'Doorway', slug: 'doorway', context }
	],
	links: [
		{
			entityType: 'hero',
			entityId: 69,
			changelogId: 'new',
			groupIndex: 0,
			bulletIndex: 0,
			property: 'cooldown',
			digest: createHash('sha256').update(bullet).digest('hex').slice(0, 16),
			extractionVersion: 1,
			previousOld: '50s',
			previousNew: '40s',
			previousSlug: '2026/06-30',
			previousPubDate: '2026-06-30T00:00:00Z'
		}
	]
});
const toc = async () => [
	{ level: 2, title: 'Doorman', id: 'doorman' },
	{ level: 3, title: 'Call Bell', id: 'call-bell-2' }
];

describe('full-patch reading projection', () => {
	it('ships only changed, identity-matched descriptions and uses the real previous anchor', async () => {
		const data = await projectPatchReading(fixture(), patch, toc);
		expect(Object.keys(data.details)).toEqual(['item:1', 'hero:69:call-bell']);
		expect(data.details['hero:69:call-bell'].context).not.toHaveProperty('identity');
		expect(data.details['hero:69:call-bell'].historyHref).toBe('/ability/call-bell');
		expect(data.previous['hero:69:0:0']).toMatchObject({
			bullet,
			href: '/change/2026/06-30#call-bell-2',
			text: 'prev. 50s → 40s · 30 Jun'
		});
	});

	it('withholds context for an alias-only group and preserves unknown client versions', async () => {
		const data = fixture();
		const groups = data.heroes[0].groups;
		if (!groups) throw new Error('Expected fixture groups');
		groups[0].ability = 'Old Bell';
		data.items[0].context = { ...context, clientVersion: null };
		const result = await projectPatchReading(data, patch, toc);
		expect(Object.keys(result.details)).toEqual(['item:1']);
		expect(result.details['item:1'].context.clientVersion).toBeNull();
	});

	it('withholds stale or unsupported property events', async () => {
		for (const change of ['digest', 'version', 'text'] as const) {
			const data = fixture();
			if (change === 'digest') data.links[0].digest = 'stale';
			if (change === 'version') data.links[0].extractionVersion = 99;
			if (change === 'text' && data.heroes[0].groups)
				data.heroes[0].groups[0].bullets[0] = 'Corrected text';
			expect((await projectPatchReading(data, patch, toc)).previous).toEqual({});
		}
	});

	it('omits missing, ambiguous, or wrong-owner destinations', async () => {
		const headings = await toc();
		for (const entries of [
			[],
			[...headings, headings[1]],
			[{ ...headings[0], title: 'Another Hero' }, headings[1]]
		]) {
			expect(
				(await projectPatchReading(fixture(), patch, async () => entries)).previous
			).toEqual({});
		}
	});
});
