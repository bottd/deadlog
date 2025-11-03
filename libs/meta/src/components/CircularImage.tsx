import React from 'react';
import { Theme } from '../theme';

interface RoundIconProps {
	src: string;
	size: string;
	border?: string;
}

export function RoundIcon({ src, size, border = '8px' }: RoundIconProps) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<img
				src={src}
				style={{
					width: size,
					height: size,
					borderRadius: Theme.borderRadius.full,
					border: `${border} solid ${Theme.colors.primary}`,
					objectFit: 'cover'
				}}
			/>
		</div>
	);
}
