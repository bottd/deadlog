import { describe, expect, it } from 'vitest';
import type { PropertyLink } from '@deadlog/db';
import { previousChangeLookup } from './previousChanges';

const link = (overrides: Partial<PropertyLink> = {}): PropertyLink => ({
	changelogId: 'p2',
	groupIndex: 1,
	bulletIndex: 0,
	property: 'cooldown',
	previousOld: '55s',
	previousNew: '50s',
	previousSlug: '2024/05-10',
	previousPubDate: '2024-05-10T20:00:00.000Z',
	...overrides
});
const patch = { id: 'p2', pubDate: '2024-06-20T20:00:00.000Z' };

describe('previousChangeLookup', () => {
	it('annotates only the bullet that has a recorded predecessor', () => {
		const previousFor = previousChangeLookup([link()], 'Lash');
		const group = { ability: 'Ground Strike', bullets: ['a', 'b'] };

		expect(previousFor(patch, group, 1)).toEqual([
			{
				text: 'prev. 55s → 50s · 10 May',
				label: 'Previous recorded cooldown change: 55s to 50s, May 10th, 2024.',
				href: '/change/2024/05-10#ground-strike'
			},
			null
		]);
		expect(previousFor(patch, group, 0)).toBeUndefined();
	});

	it("names the year when the earlier change is not in the entry's year, and anchors an item on itself", () => {
		const previousFor = previousChangeLookup(
			[link({ groupIndex: 0, previousPubDate: '2023-12-28T00:00:00.000Z' })],
			"Diviner's Kevlar"
		);

		expect(previousFor(patch, { ability: null, bullets: ['a'] }, 0)?.[0]).toMatchObject({
			text: 'prev. 55s → 50s · 28 Dec 2023',
			href: '/change/2024/05-10#diviner-s-kevlar'
		});
	});

	it('states a record, never a direction or a net effect', () => {
		const [previous] =
			previousChangeLookup([link()], 'Lash')(
				patch,
				{ ability: 'X', bullets: ['a'] },
				1
			) ?? [];
		expect(`${previous?.text} ${previous?.label}`).not.toMatch(
			/revert|buff|nerf|net|undo/i
		);
	});
});
