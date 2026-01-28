import React from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Header } from '../components/Header';
import { RoundIcon } from '../components/CircularImage';
import { Theme } from '../theme';

export interface HeroPreviewItem {
	type: 'text' | 'ability';
	text: string;
	name?: string;
	image?: string;
}

interface HeroLayoutProps {
	name: string;
	heroType?: string | null;
	image: string;
	changePreview: HeroPreviewItem[] | null;
}

export function HeroLayout({ name, heroType, image, changePreview }: HeroLayoutProps) {
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
					{changePreview && changePreview.length > 0 && (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '24px',
								marginTop: Theme.spacing.sm,
								marginBottom: '40px',
								overflow: 'hidden'
							}}
						>
							{changePreview.map((item, idx) => {
								if (item.type === 'text') {
									return (
										<div
											key={idx}
											style={{
												fontSize: Theme.font.md,
												color: Theme.colors.textPrimary,
												lineHeight: 1.5
											}}
										>
											• {item.text}
										</div>
									);
								} else {
									return (
										<div
											key={idx}
											style={{
												display: 'flex',
												flexDirection: 'column',
												gap: '8px'
											}}
										>
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													gap: '12px'
												}}
											>
												{item.image && (
													<img
														src={item.image}
														style={{
															width: '40px',
															height: '40px',
															borderRadius: '4px',
															flexShrink: '0'
														}}
													/>
												)}
												{item.name && (
													<div
														style={{
															fontSize: Theme.font.sm,
															fontWeight: 'bold',
															color: Theme.colors.primary,
															lineHeight: 1.3
														}}
													>
														{item.name}
													</div>
												)}
											</div>
											<div
												style={{
													fontSize: Theme.font.xs,
													color: Theme.colors.textPrimary,
													lineHeight: 1.4,
													paddingLeft: '52px'
												}}
											>
												{item.text}
											</div>
										</div>
									);
								}
							})}
						</div>
					)}
				</div>
			</div>
		</LayoutContainer>
	);
}
