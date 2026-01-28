import React from 'react';
import { Theme } from '../theme';

interface AuthorDisplayProps {
	author: string;
	authorIcon: string;
}

export function AuthorDisplay({ author, authorIcon }: AuthorDisplayProps) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: Theme.spacing.md
			}}
		>
			<img
				src={authorIcon}
				style={{
					width: '48px',
					height: '48px',
					borderRadius: Theme.borderRadius.full,
					border: `2px solid ${Theme.colors.primary}`
				}}
			/>
			<div
				style={{
					fontSize: Theme.font.xs,
					color: Theme.colors.textSecondary
				}}
			>
				By {author}
			</div>
		</div>
	);
}
