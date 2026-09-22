import {
	intervalDays,
	plural,
	type DayInterval,
	type EntityImpact,
	type ImpactWindow,
	type PatchStats,
	type TierImpact
} from '@deadlog/utils';

export type RankTier = 'all' | 'high';
export type ImpactKind = 'hero' | 'item';

export interface ImpactRow {
	tier: RankTier;
	label: string;
	cells: string[];
}

export interface ImpactSummary {
	columns: string[];
	rows: ImpactRow[];
	notes: string[];
	label: string;
}

export const IMPACT_HEADING = 'Match results around this patch';

interface Metric {
	field: 'win' | 'pick';
	label: string;
	spoken: string;
}

const METRICS: Record<ImpactKind, Metric[]> = {
	hero: [
		{ field: 'win', label: 'WIN', spoken: 'Win rate' },
		{ field: 'pick', label: 'PICK', spoken: 'Pick rate' }
	],
	item: [
		{ field: 'pick', label: 'BOUGHT', spoken: 'Bought by' },
		{ field: 'win', label: 'BUYER WIN', spoken: 'Buyer win rate' }
	]
};
const SAMPLE: Record<ImpactKind, { short: string; spoken: string }> = {
	hero: { short: 'matches', spoken: 'matches' },
	item: { short: 'player-matches', spoken: 'player-match observations' }
};

const MISSING = '—';
const TIER_LABEL: Record<RankTier, string> = { all: 'ALL RANKS', high: 'HIGH RANK' };
const TIER_NAME: Record<RankTier, string> = { all: 'All ranks', high: 'High rank' };
const TIERS = ['all', 'high'] as const;

export function formatRate(rate: number | null): string {
	return rate === null ? MISSING : (rate * 100).toFixed(1);
}

export function formatMatches(matches: number): string {
	if (matches < 1000) return String(matches);
	if (matches < 10_000) return `${(matches / 1000).toFixed(1)}k`;
	if (matches < 1_000_000) return `${Math.round(matches / 1000)}k`;
	return `${(matches / 1_000_000).toFixed(1)}M`;
}

const shortfall = (window: ImpactWindow): string =>
	window.coverage === 'incomplete' ? 'data unavailable' : 'not enough matches';

function spoken(metric: Metric, before: ImpactWindow, after: ImpactWindow): string {
	const side = (window: ImpactWindow, when: string) =>
		window[metric.field] === null
			? `${shortfall(window)} ${when}`
			: `${formatRate(window[metric.field])} percent ${when}`;
	return `${metric.spoken} ${side(before, 'before')}, ${side(after, 'after')}.`;
}

const percent = (rate: number | null): string =>
	rate === null ? MISSING : `${formatRate(rate)}%`;

const arrow = (before: number | null, after: number | null): string =>
	`${percent(before)} → ${percent(after)}`;

function tierRow(
	tier: RankTier,
	{ before, after }: TierImpact,
	kind: ImpactKind
): ImpactRow | null {
	if (before.win === null && after.win === null) return null;
	return {
		tier,
		label: TIER_LABEL[tier],
		cells: METRICS[kind].map(({ field }) => arrow(before[field], after[field]))
	};
}

function tierNotes(tier: RankTier, { before, after }: TierImpact): string[] {
	const prefix = tier === 'high' ? 'high rank: ' : '';
	return [
		before.win === null ? `${prefix}${shortfall(before)} before` : null,
		after.win === null ? `${prefix}${shortfall(after)} after` : null
	].filter((note) => note !== null);
}

export function impactSummary(
	impact: EntityImpact,
	kind: ImpactKind = 'hero'
): ImpactSummary | null {
	const rows = TIERS.map((tier) => tierRow(tier, impact[tier], kind)).filter(
		(row) => row !== null
	);
	if (!rows.length) return null;

	const { after } = impact.all;
	const days = `${after.days} ${plural(after.days, 'day')}`;
	const sampled = after.win !== null;
	const notes = [
		sampled ? `${formatMatches(after.matches)} ${SAMPLE[kind].short} after` : null,
		...rows.flatMap((row) => tierNotes(row.tier, impact[row.tier])),
		impact.closed ? null : `${days} so far`
	].filter((note) => note !== null);

	const label = [
		`${IMPACT_HEADING}.`,
		...rows.flatMap((row) => [
			`${TIER_NAME[row.tier]}.`,
			...METRICS[kind].map((metric) =>
				spoken(metric, impact[row.tier].before, impact[row.tier].after)
			)
		]),
		sampled
			? `${after.matches.toLocaleString('en-US')} ${SAMPLE[kind].spoken} after the patch${impact.closed ? '.' : ' so far.'}`
			: null,
		impact.closed ? null : `After: ${days} measured so far.`
	]
		.filter((part) => part !== null)
		.join(' ');

	return { columns: METRICS[kind].map((metric) => metric.label), rows, notes, label };
}

const MONTHS = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

export function formatInterval(interval: DayInterval | null, entryYear: number): string {
	if (!interval) return MISSING;
	const first = new Date(`${interval.from}T00:00:00Z`);
	const last = new Date(Date.parse(`${interval.to}T00:00:00Z`) - 86_400_000);
	const month = (date: Date) => MONTHS[date.getUTCMonth()];
	const year =
		last.getUTCFullYear() === entryYear && first.getUTCFullYear() === entryYear
			? ''
			: ` ${last.getUTCFullYear()}`;

	if (first.getTime() === last.getTime()) {
		return `${first.getUTCDate()} ${month(first)}${year}`;
	}
	if (first.getUTCMonth() === last.getUTCMonth()) {
		return `${first.getUTCDate()}–${last.getUTCDate()} ${month(last)}${year}`;
	}
	return `${first.getUTCDate()} ${month(first)} – ${last.getUTCDate()} ${month(last)}${year}`;
}

export interface ImpactDetailRow {
	label: string;
	spoken: string;
	before: string;
	after: string;
}

export function impactDetails(
	impact: EntityImpact,
	stats: PatchStats,
	kind: ImpactKind,
	entryYear: number
): ImpactDetailRow[] {
	const count = (value: number) => value.toLocaleString('en-US');
	const covered = (window: ImpactWindow, interval: DayInterval | null) =>
		`${window.covered ?? 0} / ${intervalDays(interval)}`;
	const sample = SAMPLE[kind].spoken;

	return [
		{
			label: 'DAYS',
			spoken: 'Days measured',
			before: formatInterval(stats.before, entryYear),
			after: formatInterval(stats.after, entryYear)
		},
		{
			label: 'SAMPLE',
			spoken: `Sample, ${sample}`,
			before: count(impact.all.before.matches),
			after: count(impact.all.after.matches)
		},
		{
			label: 'COVERED',
			spoken: 'Days with data, of days in the window',
			before: covered(impact.all.before, stats.before),
			after: `${covered(impact.all.after, stats.after)}${impact.closed ? '' : ' · open'}`
		},
		{
			label: 'HIGH RANK',
			spoken: `High rank sample, ${sample}`,
			before: count(impact.high.before.matches),
			after: count(impact.high.after.matches)
		}
	];
}
