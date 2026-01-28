import React from 'react';
import { Theme } from '../theme';

interface IconGridProps {
	icons: string[];
}

export function IconGrid({ icons }: IconGridProps) {
	if (icons.length === 0) return null;

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				maxWidth: '100%'
			}}
		>
			{icons.map((src, idx) => (
				<img
					key={src}
					src={src}
					style={{
						width: '52px',
						height: '52px',
						borderRadius: Theme.borderRadius.md,
						border: `2px solid ${Theme.colors.bg}`,
						marginLeft: idx === 0 ? '0' : '-8px'
					}}
				/>
			))}
		</div>
	);
}
