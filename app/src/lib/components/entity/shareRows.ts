import {
	abilityShare,
	boughtByShare,
	type AbilityOrder,
	type BoughtBy,
	type EntityImpact,
	type PatchStats
} from '@deadlog/utils';
import type { HeroAbility, HeroIcon } from '@deadlog/db';
import { formatClock, formatInterval } from '$lib/utils/windowFormat';

export interface ShareRow {
	name: string;
	image: string;
	href: string;
	before: number;
	after: number | null;
	muted?: boolean;
}

export type ShareKind = 'maxed-first' | 'related' | 'bought-by';

export const SHARE_KINDS: Record<
	ShareKind,
	{ title: string; lead: (subject: string) => string; round?: boolean }
> = {
	'maxed-first': {
		title: 'Maxed first',
		lead: (hero) => `Share of ${hero} players who maxed each ability first`
	},
	related: {
		title: 'Also changed in this patch',
		lead: (hero) => `Share of ${hero} players who bought each`
	},
	'bought-by': {
		title: 'Bought most by',
		lead: (item) => `Share of each hero's players who bought ${item}`,
		round: true
	}
};

export interface ShareWindows {
	stats: Pick<PatchStats, 'before' | 'after'>;
	entryYear: number;
	open: boolean;
}

export function formatShare(share: number): string {
	const percent = Math.round(share * 100);
	return percent === 0 ? '<1%' : `${percent}%`;
}

export const shareText = (row: Pick<ShareRow, 'before' | 'after'>): string =>
	row.after === null
		? formatShare(row.before)
		: `${formatShare(row.before)} → ${formatShare(row.after)}`;

export const shareLabel = (row: ShareRow): string =>
	row.after === null
		? `${row.name} ${formatShare(row.before)}`
		: `${row.name}, ${formatShare(row.before)} before, ${formatShare(row.after)} after`;

export function shareSpan(
	{ stats, entryYear, open }: ShareWindows,
	hasAfter: boolean
): string {
	const before = formatInterval(stats.before, entryYear);
	if (!stats.after || !hasAfter) return `${before}, before this patch`;
	return `${before} → ${formatInterval(stats.after, entryYear)}${open ? ' so far' : ''}`;
}

export function maxedFirstRows(
	order: AbilityOrder,
	abilities: Pick<HeroAbility, 'assetId' | 'name' | 'slug' | 'image'>[],
	groups: { abilitySlug?: string | null }[] | null
): ShareRow[] {
	const changed = new Set(groups?.map((group) => group.abilitySlug));
	return order.abilities
		.flatMap((entry) => {
			const ability = abilities.find((candidate) => candidate.assetId === entry.id);
			if (!ability) return [];
			return [
				{
					name: ability.name,
					image: ability.image,
					href: `/ability/${ability.slug}`,
					...abilityShare(order, entry),
					muted: !changed.has(ability.slug)
				}
			];
		})
		.sort((a, b) => b.before - a.before);
}

export function boughtByRows(bought: BoughtBy, heroes: HeroIcon[]): ShareRow[] {
	return bought.heroes.flatMap((recorded) => {
		const hero = heroes.find((candidate) => candidate.id === recorded.id);
		if (!hero) return [];
		return [
			{
				name: hero.name,
				image: hero.image,
				href: `/hero/${hero.slug}`,
				...boughtByShare(recorded)
			}
		];
	});
}

export interface BuyTime {
	before: string;
	after: string;
}

export function buyTime(impact: EntityImpact | null | undefined): BuyTime | null {
	const before = impact?.all.before.buy;
	const after = impact?.all.after.buy;
	return typeof before === 'number' && typeof after === 'number'
		? { before: formatClock(before), after: formatClock(after) }
		: null;
}
