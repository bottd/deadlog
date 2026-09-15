import React from 'react';
import { Card } from '../components/Card';
import { Display, Lede } from '../components/Display';
import { Annotation } from '../components/Annotation';
import { PatchRows, type RowIcon } from '../components/Entities';
import { Theme, CONTENT } from '../theme';

const { colors } = Theme;

export interface HomeLayoutProps {
	lastUpdated: string;
	patchCount: number;
	heroCount: number;
	itemCount: number;
	heroIcons: RowIcon[];
	itemIcons: RowIcon[];
	latestHeroCount: number;
	latestItemCount: number;
}

export function HomeLayout({
	lastUpdated,
	patchCount,
	heroCount,
	itemCount,
	heroIcons,
	itemIcons,
	latestHeroCount,
	latestItemCount
}: HomeLayoutProps) {
	return (
		<Card trailing={`LATEST PATCH · ${lastUpdated}`}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
				<Display text="Deadlock Patch Notes" maxWidth={CONTENT} />
				<Lede
					text="Every patch, hero buff, nerf and item change — in one searchable changelog."
					maxWidth={CONTENT}
				/>
				<Annotation
					maxWidth={CONTENT}
					segments={[
						{ text: `${patchCount} PATCHES`, color: colors.amber },
						{ text: `${heroCount} HEROES`, color: colors.stone },
						{ text: `${itemCount} ITEMS`, color: colors.stone }
					]}
				/>

				<PatchRows
					heroIcons={heroIcons}
					itemIcons={itemIcons}
					heroCount={latestHeroCount}
					itemCount={latestItemCount}
				/>
			</div>
		</Card>
	);
}
