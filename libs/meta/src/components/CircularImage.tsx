import React from 'react';
import { Theme } from '../theme';

interface CircularImageProps {
	src: string;
	size: string;
	border?: string;
}

export function CircularImage({ src, size, border = '8px' }: CircularImageProps) {
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
