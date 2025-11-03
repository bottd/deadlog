import React from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Header } from '../components/Header';
import { AuthorDisplay } from '../components/AuthorDisplay';
import { IconGrid } from '../components/IconGrid';
import { Theme } from '../theme';

interface HomeLayoutProps {
	lastUpdated: string;
	author: string;
	authorImage: string;
	heroIcons: string[];
	itemIcons: string[];
}

export function HomeLayout({
	lastUpdated,
	author,
	authorImage,
	heroIcons,
	itemIcons
}: HomeLayoutProps) {
	return (
		<LayoutContainer>
			<Header />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '28px',
					flex: 1
				}}
			>
				<div
					style={{
						fontSize: Theme.font.xl,
						fontWeight: 'bold',
						color: Theme.colors.textPrimary
					}}
				>
					Last updated: {lastUpdated}
				</div>
				<AuthorDisplay author={author} authorIcon={authorImage} />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: Theme.spacing.md
					}}
				>
					<IconGrid icons={heroIcons} />
					<IconGrid icons={itemIcons} />
				</div>
			</div>
		</LayoutContainer>
	);
}
