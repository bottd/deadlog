import './src2.js';
import { n as boughtByShare, t as abilityShare } from './relatedItems.js';
//#region src/lib/utils/windowFormat.ts
var MONTHS = [
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
function formatInterval(interval, entryYear) {
	if (!interval) return '—';
	const first = /* @__PURE__ */ new Date(`${interval.from}T00:00:00Z`);
	const last = /* @__PURE__ */ new Date(Date.parse(`${interval.to}T00:00:00Z`) - 864e5);
	const month = (date) => MONTHS[date.getUTCMonth()];
	const year =
		last.getUTCFullYear() === entryYear && first.getUTCFullYear() === entryYear
			? ''
			: ` ${last.getUTCFullYear()}`;
	if (first.getTime() === last.getTime())
		return `${first.getUTCDate()} ${month(first)}${year}`;
	if (first.getUTCMonth() === last.getUTCMonth())
		return `${first.getUTCDate()}–${last.getUTCDate()} ${month(last)}${year}`;
	return `${first.getUTCDate()} ${month(first)} – ${last.getUTCDate()} ${month(last)}${year}`;
}
function formatClock(seconds) {
	const whole = Math.round(seconds);
	return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}
//#endregion
//#region src/lib/components/entity/shareRows.ts
var SHARE_KINDS = {
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
function formatShare(share) {
	const percent = Math.round(share * 100);
	return percent === 0 ? '<1%' : `${percent}%`;
}
var shareText = (row) =>
	row.after === null
		? formatShare(row.before)
		: `${formatShare(row.before)} → ${formatShare(row.after)}`;
var shareLabel = (row) =>
	row.after === null
		? `${row.name} ${formatShare(row.before)}`
		: `${row.name}, ${formatShare(row.before)} before, ${formatShare(row.after)} after`;
function shareSpan({ stats, entryYear, open }, hasAfter) {
	const before = formatInterval(stats.before, entryYear);
	if (!stats.after || !hasAfter) return `${before}, before this patch`;
	return `${before} → ${formatInterval(stats.after, entryYear)}${open ? ' so far' : ''}`;
}
function maxedFirstRows(order, abilities, groups) {
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
function boughtByRows(bought, heroes) {
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
function buyTime(impact) {
	const before = impact?.all.before.buy;
	const after = impact?.all.after.buy;
	return typeof before === 'number' && typeof after === 'number'
		? {
				before: formatClock(before),
				after: formatClock(after)
			}
		: null;
}
//#endregion
export {
	shareLabel as a,
	maxedFirstRows as i,
	boughtByRows as n,
	shareSpan as o,
	buyTime as r,
	shareText as s,
	SHARE_KINDS as t
};
