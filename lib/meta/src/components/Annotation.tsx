import React from 'react';
import { Theme } from '../theme';
import { fitDisplay } from '../text';

const { colors, font, family, tracking } = Theme;

export interface Segment {
	text: string;
	color?: string;
}

const ROW_STEPS = [30, 26, 23, 20];

export function Annotation({
	segments,
	maxWidth
}: {
	segments: Segment[];
	maxWidth: number;
}) {
	const shown = segments.filter((segment) => segment.text);
	if (shown.length === 0) return null;

	const measured =
		shown.map((segment) => segment.text).join('') + '·'.repeat((shown.length - 1) * 3);
	const size = fitDisplay(measured, maxWidth, ROW_STEPS, 1, 'mono');
	const gap = Math.round(size * 0.45);

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexWrap: 'nowrap',
				gap: `${gap}px`
			}}
		>
			{shown.flatMap((segment, index) => [
				...(index > 0
					? [
							<div
								key={`separator-${index}`}
								style={{
									display: 'flex',
									flexShrink: 0,
									fontFamily: family.mono,
									fontSize: `${size}px`,
									color: colors.seaDeep,
									lineHeight: 1
								}}
							>
								·
							</div>
						]
					: []),
				<div
					key={segment.text}
					style={{
						display: 'flex',
						flexShrink: 0,
						whiteSpace: 'nowrap',
						fontFamily: family.mono,
						fontSize: `${size}px`,
						letterSpacing: tracking.annotation,
						color: segment.color ?? colors.stone,
						lineHeight: 1
					}}
				>
					{segment.text}
				</div>
			])}
		</div>
	);
}

export function Flag({ text }: { text: string }) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				backgroundColor: colors.amberField,
				padding: '8px 16px',
				fontFamily: family.mono,
				fontSize: font.label,
				letterSpacing: tracking.label,
				color: colors.amber,
				lineHeight: 1
			}}
		>
			{text}
		</div>
	);
}
