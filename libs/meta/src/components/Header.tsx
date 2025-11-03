import React from 'react';
import { Theme } from '../theme';

export function Header() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '12px',
				marginBottom: '48px'
			}}
		>
			<div
				style={{
					fontSize: Theme.font['4xl'],
					fontWeight: 'bold',
					color: Theme.colors.primary,
					lineHeight: 1
				}}
			>
				deadlog.io
			</div>
			<div
				style={{
					fontSize: Theme.font.lg,
					color: Theme.colors.textTertiary
				}}
			>
				Deadlock Changelog Viewer
			</div>
		</div>
	);
}
