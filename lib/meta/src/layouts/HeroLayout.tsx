import React from 'react';
import { EntityCard } from '../components/EntityCard';
import { countLabel } from '../text';
import { Theme, heroTone } from '../theme';

const { colors } = Theme;

const PORTRAIT = { width: 264, height: 368 };

export interface HeroLayoutProps {
	name: string;
	heroType?: string | null;
	image: string;
	/** Formatted count, or empty when every patch is mention-only. */
	changes: string;
	patchCount: number;
	history: string;
}

export function HeroLayout({
	name,
	heroType,
	image,
	changes,
	patchCount,
	history
}: HeroLayoutProps) {
	return (
		<EntityCard
			name={name}
			image={image}
			thumb={PORTRAIT}
			history={history}
			segments={[
				{ text: heroType ? heroType.toUpperCase() : '', color: heroTone(heroType) },
				{
					text: changes,
					color: colors.amber
				},
				{ text: countLabel(patchCount, 'PATCH', 'PATCHES') }
			]}
		/>
	);
}
