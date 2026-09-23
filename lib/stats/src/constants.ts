export const ANALYTICS_API_BASE = 'https://api.deadlock-api.com/v1/analytics';

export const DAY_S = 86_400;
export const dayOf = (t: number): number => Math.floor(t / DAY_S) * DAY_S;
export const HIGH_RANK_MIN_BADGE = 91;
export const HIGH_RANK_LABEL = 'Phantom 1';
export const POPULATION = { game_mode: 'normal', match_mode: 'ranked,unranked' } as const;
export const METHODS = {
	1: { itemMinMatches: 20 },
	2: { itemMinMatches: 1 },
	3: { itemMinMatches: 1 }
} as const;
export const METHOD_VERSION = 3;
export const RELATED_METHOD_VERSION = 2;
export const ORDER_METHOD_VERSION = 1;
export const BOUGHT_METHOD_VERSION = 1;
export const READING_SETTLE_DAYS = 2;
export const ABILITY_UNLOCK_AND_UPGRADES = 4;
export const RELATED_MIN_APPEARANCES = 1000;
export const RELATED_MIN_BUYERS = 100;
export const RELATED_RETRY_DAYS = 30;
export const MAX_ATTEMPTS = 3;
export const MIN_WINDOW_MATCHES = 1000;
export const WINDOW_CAP_DAYS = 14;
export const MAX_RANGE_DAYS = 60;
export const PLAYERS_PER_MATCH = 12;
export const REQUEST_TIMEOUT_MS = 60_000;
