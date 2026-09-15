import React from 'react';
import { Card, Divider } from './Card';
import { Display, Lede } from './Display';
import { Annotation, type Segment } from './Annotation';
import { Thumb } from './Entities';
import { CONTENT } from '../theme';

const GAP = 48;

export interface EntityCardProps {
	name: string;
	image: string;
	thumb: { width: number; height: number };
	fit?: 'cover' | 'contain';
	segments: Segment[];
	history: string;
}

export function EntityCard({
	name,
	image,
	thumb,
	fit,
	segments,
	history
}: EntityCardProps) {
	const text = CONTENT - thumb.width - GAP;

	return (
		<Card trailing="PATCH HISTORY">
			<div style={{ display: 'flex', alignItems: 'center', gap: `${GAP}px` }}>
				<Thumb src={image} width={thumb.width} height={thumb.height} fit={fit} />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '26px',
						width: `${text}px`
					}}
				>
					<Display text={name} maxWidth={text} />
					<Annotation maxWidth={text} segments={segments} />
					<div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
						<Divider />
						<Lede text={history} maxWidth={text} />
					</div>
				</div>
			</div>
		</Card>
	);
}
