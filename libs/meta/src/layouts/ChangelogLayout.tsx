import React from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Header } from '../components/Header';
import { AuthorDisplay } from '../components/AuthorDisplay';
import {
	HeroPreview as HeroPreviewComponent,
	type HeroPreview
} from '../components/HeroPreview';
import { IconGrid } from '../components/IconGrid';
import { Theme } from '../theme';

interface ChangelogLayoutProps {
	title: string;
	author: string;
	authorIcon: string;
	heroPreviews: HeroPreview[];
	itemIcons: string[];
	generalNotes: string[];
}

export function ChangelogLayout({
	title,
	author,
	authorIcon,
	heroPreviews,
	itemIcons,
	generalNotes
}: ChangelogLayoutProps) {
	return (
		<LayoutContainer>
			<Header />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flex: 1
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '16px',
						marginBottom: '24px'
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
						{title}
					</div>
					<AuthorDisplay author={author} authorIcon={authorIcon} />
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
						flex: 1
					}}
				>
					<HeroPreviewComponent heroes={heroPreviews} />
					<IconGrid icons={itemIcons} />
					{generalNotes.length > 0 && (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '16px'
							}}
						>
							{generalNotes.map((note, idx) => (
								<div
									key={idx}
									style={{
										fontSize: Theme.font.xs,
										color: Theme.colors.textPrimary,
										lineHeight: 1.6
									}}
								>
									• {note}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</LayoutContainer>
	);
}
