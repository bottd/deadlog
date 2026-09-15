import React from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { PLATE, Theme, alpha, cutCorners, wireGrid } from '../theme';

const { colors, size, font, family, tracking } = Theme;

const PLATE_CORNER = 24;
const FILL = {
	position: 'absolute',
	top: '0px',
	left: '0px',
	width: `${PLATE.width}px`,
	height: `${PLATE.height}px`
} as const;

export interface CardArt {
	src: string;
	clear: number;
}

const VEIL_EASE = 227;

function veil(clear: number): string {
	const edge = size.border + size.padding + clear;
	const at = (px: number) => `${((px / PLATE.width) * 100).toFixed(2)}%`;
	return [
		'linear-gradient(to right',
		`${colors.inkRaised} 0%`,
		`${colors.inkRaised} ${at(edge)}`,
		`${alpha(colors.inkRaised, 0.88)} ${at(Math.min(edge + VEIL_EASE, PLATE.width))}`,
		`${alpha(colors.inkRaised, 0.6)} 100%)`
	].join(', ');
}

const TICK = { thickness: 3, arm: 34, inset: 18 };

function CornerTick({
	corner,
	color
}: {
	corner: 'top-left' | 'bottom-right';
	color: string;
}) {
	const bar = {
		display: 'flex',
		position: 'absolute' as const,
		backgroundColor: color,
		...(corner === 'top-left'
			? { top: `${TICK.inset}px`, left: `${TICK.inset}px` }
			: { bottom: `${TICK.inset}px`, right: `${TICK.inset}px` })
	};

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ ...bar, width: `${TICK.arm}px`, height: `${TICK.thickness}px` }} />
			<div style={{ ...bar, width: `${TICK.thickness}px`, height: `${TICK.arm}px` }} />
		</div>
	);
}

function Wordmark() {
	return (
		<div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
			<div
				style={{
					display: 'flex',
					fontFamily: family.display,
					fontSize: '38px',
					letterSpacing: tracking.display,
					color: colors.parchment,
					lineHeight: 1
				}}
			>
				dead
			</div>
			<div
				style={{
					display: 'flex',
					fontFamily: family.display,
					fontSize: '38px',
					letterSpacing: tracking.display,
					color: colors.amber,
					lineHeight: 1,
					marginLeft: '-10px'
				}}
			>
				log
			</div>
			<div
				style={{
					display: 'flex',
					fontFamily: family.mono,
					fontSize: '24px',
					letterSpacing: tracking.label,
					color: colors.sea,
					lineHeight: 1
				}}
			>
				.IO
			</div>
		</div>
	);
}

export function Card({
	trailing,
	art,
	children
}: PropsWithChildren<{ trailing?: ReactNode; art?: CardArt }>) {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				backgroundColor: colors.ink,
				backgroundImage: wireGrid(),
				padding: `${size.inset}px`,
				fontFamily: family.body
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					width: '100%',
					height: '100%',
					backgroundColor: colors.inkRaised,
					border: `${size.border}px solid ${colors.rule}`,
					clipPath: cutCorners(PLATE_CORNER),
					padding: `${size.padding}px`
				}}
			>
				{art ? (
					<div style={{ display: 'flex' }}>
						<img src={art.src} style={{ ...FILL, objectFit: 'cover' }} />
						<div style={{ ...FILL, backgroundImage: veil(art.clear) }} />
					</div>
				) : null}

				<CornerTick corner="top-left" color={colors.amber} />
				<CornerTick corner="bottom-right" color={colors.sea} />

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%'
					}}
				>
					<Wordmark />
					{trailing ? (
						<div
							style={{
								display: 'flex',
								fontFamily: family.mono,
								fontSize: font.label,
								letterSpacing: tracking.label,
								color: colors.seaDeep
							}}
						>
							{trailing}
						</div>
					) : null}
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						flex: 1,
						width: '100%',
						justifyContent: 'center',
						overflow: 'hidden'
					}}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

export function Divider() {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '1px',
				backgroundImage:
					'linear-gradient(to right, rgba(130,187,194,0.28) 0%, rgba(235,192,109,0.22) 50%, rgba(130,187,194,0.28) 80%, transparent 100%)'
			}}
		/>
	);
}
