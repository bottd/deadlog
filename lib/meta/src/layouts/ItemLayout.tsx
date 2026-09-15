import React from 'react';
import { EntityCard } from '../components/EntityCard';
import { countLabel } from '../text';
import { Theme, itemTone } from '../theme';

const { colors } = Theme;

const ICON = { width: 264, height: 264 };

export interface ItemLayoutProps {
	name: string;
	type: string;
	category?: string | null;
	tier?: number | null;
	image: string;
	/** Formatted count, or empty when every patch is mention-only. */
	changes: string;
	patchCount: number;
	history: string;
}

export function ItemLayout({
	name,
	type,
	category,
	tier,
	image,
	changes,
	patchCount,
	history
}: ItemLayoutProps) {
	return (
		<EntityCard
			name={name}
			image={image}
			thumb={ICON}
			fit="contain"
			history={history}
			segments={[
				{ text: (category ?? type).toUpperCase(), color: itemTone(category) },
				{ text: tier ? `TIER ${tier}` : '' },
				{
					text: changes,
					color: colors.amber
				},
				{ text: countLabel(patchCount, 'PATCH', 'PATCHES') }
			]}
		/>
	);
}
