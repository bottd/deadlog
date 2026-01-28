import React from 'react';
import type { PropsWithChildren } from 'react';
import { Theme } from '../theme';

export function LayoutContainer({ children }: PropsWithChildren) {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: Theme.colors.bg,
				padding: `${Theme.size.padding}px`,
				fontFamily: 'Geist'
			}}
		>
			{children}
		</div>
	);
}
