import React from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Header } from '../components/Header';
import { RoundIcon } from '../components/CircularImage';
import { Theme } from '../theme';

interface HeroLayoutProps {
	name: string;
	heroType?: string | null;
	image: string;
}

export function HeroLayout({ name, heroType, image }: HeroLayoutProps) {
	return (
		<LayoutContainer>
			<Header />
			<div
				style={{
					display: 'flex',
					gap: '48px',
					flex: 1,
					alignItems: 'flex-start',
					paddingTop: '40px'
				}}
			>
				<RoundIcon src={image} size="280px" />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						flex: 1,
						gap: '24px'
					}}
				>
					<div
						style={{
							fontSize: Theme.font['4xl'],
							fontWeight: 'bold',
							color: Theme.colors.textPrimary,
							lineHeight: 1
						}}
					>
						{name}
					</div>
					{heroType && (
						<div
							style={{
								fontSize: Theme.font.md,
								color: Theme.colors.textSecondary,
								textTransform: 'uppercase',
								letterSpacing: '0.05em'
							}}
						>
							{heroType}
						</div>
					)}
				</div>
			</div>
		</LayoutContainer>
	);
}
