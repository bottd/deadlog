import React from 'react';
import { Theme } from '../theme';

export interface HeroPreview {
	readonly heroIcon: string;
	readonly abilityIcons: readonly string[];
}

interface HeroPreviewProps {
	heroes: readonly HeroPreview[];
}

export function HeroPreview({ heroes }: HeroPreviewProps) {
	return (
		<div
			style={{
				display: 'flex',
				gap: '12px',
				flexWrap: 'wrap'
			}}
		>
			{heroes.map((hero) => (
				<div
					style={{
						display: 'flex',
						alignItems: 'flex-start',
						gap: '0'
					}}
				>
					<img
						src={hero.heroIcon}
						style={{
							width: '72px',
							height: '72px',
							borderRadius: Theme.borderRadius.full,
							border: `3px solid ${Theme.colors.primary}`,
							flexShrink: '0'
						}}
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0',
							marginLeft: '-12px',
							minWidth: '32px'
						}}
					>
						{hero.abilityIcons.map((src, idx) => (
							<img
								key={src}
								src={src}
								style={{
									width: '32px',
									height: '32px',
									borderRadius: Theme.borderRadius.sm,
									border: `2px solid ${Theme.colors.bg}`,
									marginTop: idx === 0 ? '0' : '-8px'
								}}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
