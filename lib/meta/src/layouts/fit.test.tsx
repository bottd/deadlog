import { describe, expect, it } from 'vitest';
import { fromJsx } from '@takumi-rs/helpers/jsx';
import React from 'react';

import { fontsReady, renderer } from '../renderer';
import { Theme } from '../theme';
import { ChangelogLayout, type ChangelogLayoutProps } from './ChangelogLayout';
import { HeroLayout } from './HeroLayout';
import { HomeLayout } from './HomeLayout';
import { ItemLayout } from './ItemLayout';

interface Box {
	x: number;
	y: number;
	width: number;
	height: number;
}

interface Measured {
	width: number;
	height: number;
	transform: number[];
	children: Measured[];
}

const box = (node: Measured): Box => ({
	x: node.transform[4],
	y: node.transform[5],
	width: node.width,
	height: node.height
});

async function measure(element: React.ReactElement) {
	await fontsReady;
	const { node, css } = await fromJsx(element);
	const root = (await renderer.measure(node, {
		width: Theme.size.width,
		height: Theme.size.height,
		css
	})) as unknown as Measured;

	// field → plate → [art?, ticks, rail, content column]; the column is always last.
	const plate = root.children[0];
	const slot = plate.children[plate.children.length - 1];
	const body = slot.children[0];
	return { slot: box(slot), body: box(body), children: body.children.map(box) };
}

async function expectFits(element: React.ReactElement) {
	const { slot, body, children } = await measure(element);
	expect(body.height, 'layout is taller than the plate').toBeLessThanOrEqual(slot.height);
	for (const child of children) {
		expect(child.width, 'a block is wider than the plate').toBeLessThanOrEqual(
			slot.width
		);
	}
}

const PIXEL =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAMAASsJTYQAAAAASUVORK5CYII=';
const icons = (n: number) =>
	Array.from({ length: n }, (_, i) => ({ src: `${PIXEL}#${i}` }));
const LONG_SUMMARY =
	'King of the Hill objective has been rethemed and renamed to Unstable Rift. Unstable Rift no longer requires an Urn delivery to trigger the start of the event, and the reward now scales with match time.';

const patch = (overrides: Partial<ChangelogLayoutProps>): ChangelogLayoutProps => ({
	heading: 'Six New Heroes',
	date: 'Aug 18, 2025',
	author: 'Daniel Jennings',
	majorUpdate: true,
	heroCount: 38,
	itemCount: 173,
	heroIcons: icons(8),
	itemIcons: icons(8),
	summary: LONG_SUMMARY,
	...overrides
});

describe('layouts fit the plate', () => {
	describe('patch card', () => {
		it.each([
			['one-line heading, major, summary, full rows', {}],
			[
				'two-line heading, major, full rows',
				{ heading: 'Holliday, Vyper, Calico, and The Magnificent Sinclair' }
			],
			[
				'announcement with no rows, two-line heading and summary',
				{
					heading: 'Some Are Merciful, The Venator Is Not',
					heroIcons: [],
					itemIcons: [],
					heroCount: 0,
					itemCount: 0
				}
			],
			[
				'date-titled patch',
				{ heading: 'August 22nd, 2026', date: '', majorUpdate: false }
			],
			['with post art behind it', { art: PIXEL }]
		] as [string, Partial<ChangelogLayoutProps>][])('%s', async (_, overrides) => {
			await expectFits(<ChangelogLayout {...patch(overrides)} />);
		});
	});

	it('home card with full rows and large counts', async () => {
		await expectFits(
			<HomeLayout
				lastUpdated="SEP 30, 2026"
				patchCount={1140}
				heroCount={380}
				itemCount={1730}
				heroIcons={icons(8)}
				itemIcons={icons(8)}
				latestHeroCount={38}
				latestItemCount={173}
			/>
		);
	});

	it('hero card with a long name and the longest history line', async () => {
		await expectFits(
			<HeroLayout
				name="The Magnificent Sinclair"
				heroType="assassin"
				image={PIXEL}
				changes="1520+ CHANGES"
				patchCount={330}
				history="Last mentioned Sep 30, 2026 in Holliday, Vyper, Calico, and The Magnificent Sinclair."
			/>
		);
	});

	it('item card with a long name, a tier and the longest history line', async () => {
		await expectFits(
			<ItemLayout
				name="Weapon Power And Health Drain"
				type="upgrade"
				category="vitality"
				tier={4}
				image={PIXEL}
				changes="1520+ CHANGES"
				patchCount={330}
				history="Last mentioned Sep 30, 2026 in Holliday, Vyper, Calico, and The Magnificent Sinclair."
			/>
		);
	});
});
