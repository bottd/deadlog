import React from 'react';
import { Theme } from '../theme';
import { Divider } from './Card';

const { colors, font, family, radius, tracking } = Theme;

export function Thumb({
	src,
	width,
	height,
	fit = 'cover',
	tone
}: {
	src: string;
	width: number;
	height: number;
	fit?: 'cover' | 'contain';
	tone?: string;
}) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: `${width}px`,
				height: `${height}px`,
				backgroundColor: colors.inkPlate,
				border: `1px solid ${tone ?? colors.rule}`,
				borderRadius: radius.thumb,
				overflow: 'hidden'
			}}
		>
			<img
				src={src}
				style={{
					width: `${width}px`,
					height: `${height}px`,
					objectFit: fit,
					borderRadius: radius.thumb
				}}
			/>
		</div>
	);
}

export interface RowIcon {
	src: string;
	tone?: string;
}

export function EntityRow({
	label,
	icons,
	extra,
	tone
}: {
	label: string;
	icons: RowIcon[];
	extra: number;
	tone: string;
}) {
	if (icons.length === 0) return null;

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
			<div
				style={{
					display: 'flex',
					width: '128px',
					fontFamily: family.mono,
					fontSize: font.label,
					letterSpacing: tracking.label,
					color: tone,
					lineHeight: 1
				}}
			>
				{label}
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
				{icons.map((icon) => (
					<Thumb key={icon.src} src={icon.src} width={64} height={64} tone={icon.tone} />
				))}
				{extra > 0 ? (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: '64px',
							padding: '0 16px',
							backgroundColor: colors.inkPlate,
							border: `1px solid ${colors.ruleSubtle}`,
							borderRadius: radius.control,
							fontFamily: family.mono,
							fontSize: font.label,
							color: colors.stone,
							lineHeight: 1
						}}
					>
						{`+${extra}`}
					</div>
				) : null}
			</div>
		</div>
	);
}

export function PatchRows({
	heroIcons,
	itemIcons,
	heroCount,
	itemCount
}: {
	heroIcons: RowIcon[];
	itemIcons: RowIcon[];
	heroCount: number;
	itemCount: number;
}) {
	if (heroIcons.length === 0 && itemIcons.length === 0) return null;

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
			<Divider />
			<EntityRow
				label="HEROES"
				tone={colors.amber}
				icons={heroIcons}
				extra={Math.max(0, heroCount - heroIcons.length)}
			/>
			<EntityRow
				label="ITEMS"
				tone={colors.sea}
				icons={itemIcons}
				extra={Math.max(0, itemCount - itemIcons.length)}
			/>
		</div>
	);
}
