import type { EntityImpact, RankTier, TierImpact } from '@deadlog/stats';

export interface ImpactLine {
	tier: RankTier;
	win: [string, string];
	pick: [string, string];
	matches: string;
	note: string | null;
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

export function tierLine(tier: RankTier, impact: TierImpact): ImpactLine | null {
	const { before, after } = impact;
	if (before.winRate === null && after.winRate === null) return null;

	const note =
		before.winRate === null
			? 'not enough matches before'
			: after.winRate === null
				? 'not enough matches after'
				: after.closed
					? null
					: `after: ${after.days} ${after.days === 1 ? 'day' : 'days'} so far`;

	const win: [string, string] = [formatRate(before.winRate), formatRate(after.winRate)];
	const pick: [string, string] = [
		formatRate(before.pickRate),
		formatRate(after.pickRate)
	];
	const matches = formatMatches(after.matches);
	const sample = after.winRate === null ? null : `${matches} matches`;

	return {
		tier,
		win,
		pick,
		matches,
		note,
		text:
			TIER_PREFIX[tier] +
			[`WIN ${win[0]} → ${win[1]}`, `PICK ${pick[0]} → ${pick[1]}`, sample, note]
				.filter(Boolean)
				.join(' · '),
		label: [
			`${TIER_NAME[tier]}.`,
			spoken('Win rate', before.winRate, after.winRate),
			spoken('Pick rate', before.pickRate, after.pickRate),
			`${after.matches.toLocaleString('en-US')} matches after the patch${after.closed ? '.' : ' so far.'}`
		].join(' ')
	};
}

export function impactLines(impact: EntityImpact): ImpactLine[] {
	return (['all', 'high'] as const)
		.map((tier) => tierLine(tier, impact[tier]))
		.filter((line) => line !== null);
}
