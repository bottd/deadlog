import { plural, type EntityImpact, type TierImpact } from '@deadlog/utils';

export type RankTier = 'all' | 'high';

export interface ImpactLine {
	tier: RankTier;
	text: string;
	label: string;
}

const MISSING = '—';
const TIER_PREFIX: Record<RankTier, string> = { all: '', high: 'HIGH RANK\u00a0 ' };
const TIER_NAME: Record<RankTier, string> = { all: 'All ranks', high: 'High rank' };

export function formatRate(rate: number | null): string {
	return rate === null ? MISSING : (rate * 100).toFixed(1);
}

export function formatMatches(matches: number): string {
	if (matches < 1000) return String(matches);
	if (matches < 10_000) return `${(matches / 1000).toFixed(1)}k`;
	if (matches < 1_000_000) return `${Math.round(matches / 1000)}k`;
	return `${(matches / 1_000_000).toFixed(1)}M`;
}

function spoken(name: string, before: number | null, after: number | null): string {
	const side = (rate: number | null, when: string) =>
		rate === null ? `not enough matches ${when}` : `${formatRate(rate)} percent ${when}`;
	return `${name} ${side(before, 'before')}, ${side(after, 'after')}.`;
}

function noteFor({ before, after }: TierImpact, closed: boolean): string | null {
	if (before.win === null) return 'not enough matches before';
	if (after.win === null) return 'not enough matches after';
	if (closed) return null;
	return `after: ${after.days} ${plural(after.days, 'day')} so far`;
}

const arrow = (before: number | null, after: number | null): string =>
	`${formatRate(before)} → ${formatRate(after)}`;

export function tierLine(
	tier: RankTier,
	impact: TierImpact,
	closed: boolean
): ImpactLine | null {
	const { before, after } = impact;
	if (before.win === null && after.win === null) return null;

	const sample = after.win === null ? null : `${formatMatches(after.matches)} matches`;

	return {
		tier,
		text:
			TIER_PREFIX[tier] +
			[
				`WIN ${arrow(before.win, after.win)}`,
				`PICK ${arrow(before.pick, after.pick)}`,
				sample,
				noteFor(impact, closed)
			]
				.filter(Boolean)
				.join(' · '),
		label: [
			`${TIER_NAME[tier]}.`,
			spoken('Win rate', before.win, after.win),
			spoken('Pick rate', before.pick, after.pick),
			`${after.matches.toLocaleString('en-US')} matches after the patch${closed ? '.' : ' so far.'}`
		].join(' ')
	};
}

export function impactLines(impact: EntityImpact): ImpactLine[] {
	return (['all', 'high'] as const)
		.map((tier) => tierLine(tier, impact[tier], impact.closed))
		.filter((line) => line !== null);
}
