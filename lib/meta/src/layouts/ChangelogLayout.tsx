import React from 'react';
import { Card } from '../components/Card';
import { Display, Lede, displayWraps } from '../components/Display';
import { Annotation, Flag } from '../components/Annotation';
import { PatchRows, type RowIcon } from '../components/Entities';
import { countLabel } from '../text';
import { Theme, CONTENT } from '../theme';

const { colors } = Theme;

const ART_CLEAR = 542;

export interface ChangelogLayoutProps {
	heading: string;
	date: string;
	author: string;
	majorUpdate: boolean;
	heroCount: number;
	itemCount: number;
	heroIcons: RowIcon[];
	itemIcons: RowIcon[];
	summary?: string | null;
	art?: string;
}

export function ChangelogLayout({
	heading,
	date,
	author,
	majorUpdate,
	heroCount,
	itemCount,
	heroIcons,
	itemIcons,
	summary,
	art
}: ChangelogLayoutProps) {
	const hasRows = heroIcons.length > 0 || itemIcons.length > 0;
	const ledeLines = !hasRows ? 2 : displayWraps(heading, CONTENT, 2) ? 0 : 1;

	return (
		<Card
			trailing={`BY ${author.toUpperCase()}`}
			art={art ? { src: art, clear: ART_CLEAR } : undefined}
		>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
				<Display text={heading} maxWidth={CONTENT} lines={2} />

				<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
					<Annotation
						maxWidth={majorUpdate ? CONTENT - 220 : CONTENT}
						segments={[
							{ text: date.toUpperCase(), color: colors.sea },
							{
								text: heroCount > 0 ? countLabel(heroCount, 'HERO', 'HEROES') : '',
								color: colors.amber
							},
							{
								text: itemCount > 0 ? countLabel(itemCount, 'ITEM') : '',
								color: colors.amber
							}
						]}
					/>
					{majorUpdate ? <Flag text="MAJOR" /> : null}
				</div>

				{summary ? <Lede text={summary} maxWidth={CONTENT} lines={ledeLines} /> : null}

				<PatchRows
					heroIcons={heroIcons}
					itemIcons={itemIcons}
					heroCount={heroCount}
					itemCount={itemCount}
				/>
			</div>
		</Card>
	);
}
