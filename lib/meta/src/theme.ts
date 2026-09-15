import type { EnrichedHero } from '@deadlog/db';
import type { ItemCategory } from '@deadlog/utils';

type HeroType = NonNullable<EnrichedHero['heroType']>;

export const HERO_TONE = {
	marksman: '#ebc06d',
	mystic: '#cf9bc2',
	brawler: '#da806f',
	assassin: '#85b695'
} satisfies Record<HeroType, string>;

export const ITEM_TONE = {
	weapon: '#e49b5d',
	vitality: '#85b695',
	spirit: '#cf9bc2'
} satisfies Record<ItemCategory, string>;

export const Theme = {
	colors: {
		ink: '#292522',
		inkRaised: '#34302c',
		inkPlate: '#403a36',

		amber: '#ebc06d',
		amberField: '#3f362a',

		sea: '#82bbc2',
		seaDeep: '#689da4',

		parchment: '#ece1d7',
		stone: '#c1a78e',
		rule: '#897766',
		ruleSubtle: '#544b43'
	},

	size: {
		width: 1200,
		height: 630,
		inset: 32,
		padding: 48,
		border: 1
	},

	font: {
		label: '24px',
		body: '30px',
		display: [96, 80, 64, 52] as const
	},

	leading: { body: 1.4 },

	family: {
		display: 'Oswald',
		body: 'Archivo',
		mono: 'JetBrains Mono'
	},

	tracking: {
		display: '0.025em',
		annotation: '0.12em',
		label: '0.16em'
	},

	radius: {
		control: '8px',
		thumb: '10px'
	}
} as const;

const { size } = Theme;

export const PLATE = {
	width: size.width - size.inset * 2,
	height: size.height - size.inset * 2
} as const;

export const CONTENT = PLATE.width - size.border * 2 - size.padding * 2;

export function alpha(hex: string, opacity: number): string {
	const [r, g, b] = [1, 3, 5].map((at) => Number.parseInt(hex.slice(at, at + 2), 16));
	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function heroTone(type?: string | null): string | undefined {
	return type ? HERO_TONE[type as HeroType] : undefined;
}

export function itemTone(category?: string | null): string | undefined {
	return category ? ITEM_TONE[category as ItemCategory] : undefined;
}

export function cutCorners(corner: number): string {
	return [
		'polygon(',
		`0 0, calc(100% - ${corner}px) 0, 100% ${corner}px,`,
		`100% 100%, ${corner}px 100%, 0 calc(100% - ${corner}px)`,
		')'
	].join(' ');
}

export function wireGrid(): string {
	const line = 'rgba(130, 187, 194, 0.045)';
	return [
		'radial-gradient(circle at 88% 0%, rgba(130, 187, 194, 0.11), transparent 480px)',
		'radial-gradient(circle at 8% 24%, rgba(235, 192, 109, 0.045), transparent 384px)',
		`repeating-linear-gradient(to right, ${line} 0 1px, transparent 1px 20px)`,
		`repeating-linear-gradient(to bottom, ${line} 0 1px, transparent 1px 20px)`
	].join(', ');
}
