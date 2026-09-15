import React from 'react';
import { Theme } from '../theme';
import { makeSummary } from '@deadlog/utils';
import { estimateWidth, fitDisplay } from '../text';

const { colors, font, family, tracking, leading } = Theme;

const LEDE_LINE = Math.round(Number.parseInt(font.body, 10) * leading.body);

function displaySize(text: string, maxWidth: number, lines = 1): number {
	return fitDisplay(
		text,
		maxWidth,
		lines > 1 ? font.display.slice(1) : font.display,
		lines
	);
}

export function displayWraps(text: string, maxWidth: number, lines = 1): boolean {
	return estimateWidth(text, displaySize(text, maxWidth, lines)) > maxWidth;
}

export function Display({
	text,
	maxWidth,
	lines = 1
}: {
	text: string;
	maxWidth: number;
	lines?: number;
}) {
	const size = displaySize(text, maxWidth, lines);
	const single = lines === 1;

	return (
		<div
			style={{
				display: 'flex',
				width: `${maxWidth}px`,
				maxHeight: `${Math.round(size * 1.08 * lines)}px`,
				overflow: 'hidden',
				fontFamily: family.display,
				fontSize: `${size}px`,
				letterSpacing: tracking.display,
				color: colors.parchment,
				lineHeight: 1.08,
				...(single
					? { whiteSpace: 'nowrap' as const, textOverflow: 'ellipsis' as const }
					: {})
			}}
		>
			{text}
		</div>
	);
}

export function Lede({
	text,
	maxWidth,
	lines = 2
}: {
	text: string;
	maxWidth: number;
	lines?: number;
}) {
	const size = Number.parseInt(font.body, 10);
	const perLine = Math.floor((maxWidth * 0.85) / estimateWidth('x', size, 'body'));
	const trimmed = makeSummary(text, perLine * lines);
	if (!trimmed || lines < 1) return null;

	return (
		<div
			style={{
				display: 'flex',
				width: `${maxWidth}px`,
				maxHeight: `${LEDE_LINE * lines}px`,
				overflow: 'hidden',
				fontFamily: family.body,
				fontSize: font.body,
				color: colors.stone,
				lineHeight: leading.body
			}}
		>
			{trimmed}
		</div>
	);
}
