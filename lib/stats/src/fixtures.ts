export const DAY_1 = 1788825600;
export const DAY_2 = DAY_1 + 86_400;
export const DAY_3 = DAY_2 + 86_400;

export const heroRow = (
	hero_id: number,
	bucket: number,
	wins: number,
	matches: number
) => ({
	hero_id,
	bucket,
	wins,
	losses: matches - wins,
	matches,
	matches_per_bucket: 515_328,
	total_kills: 110_927,
	total_deaths: 105_635
});

export const itemRow = (
	item_id: number,
	bucket: number,
	wins: number,
	matches: number
) => ({
	item_id,
	bucket,
	wins,
	losses: matches - wins,
	matches,
	players: Math.round(matches * 0.6),
	avg_buy_time_s: 857.67
});
