import React from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Header } from '../components/Header';
import { Theme } from '../theme';

interface ItemLayoutProps {
	name: string;
	type: string;
	image: string;
	changePreview?: string;
}

export function ItemLayout({ name, type, image, changePreview }: ItemLayoutProps) {
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
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<img
						src={image}
						style={{
							width: '240px',
							height: '240px',
							borderRadius: '24px',
							border: `8px solid ${Theme.colors.primary}`,
							objectFit: 'contain',
							backgroundColor: Theme.colors.bgLight,
							padding: '24px'
						}}
					/>
				</div>
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
							fontSize: name.length > 20 ? Theme.font['3xl'] : Theme.font['4xl'],
							fontWeight: 'bold',
							color: Theme.colors.textPrimary,
							lineHeight: 1.1
						}}
					>
						{name}
					</div>
					<div
						style={{
							fontSize: Theme.font.md,
							color: Theme.colors.textSecondary,
							textTransform: 'uppercase',
							letterSpacing: '0.05em'
						}}
					>
						{type}
					</div>
					{changePreview && (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '16px',
								marginBottom: '40px',
								overflow: 'hidden'
							}}
						>
							{changePreview.split('\n').map((line, idx) => (
								<div
									key={idx}
									style={{
										fontSize: Theme.font.md,
										color: Theme.colors.textPrimary,
										lineHeight: 1.5
									}}
								>
									{line}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</LayoutContainer>
	);
}
