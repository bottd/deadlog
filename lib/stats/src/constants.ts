export const ANALYTICS_API_BASE = 'https://api.deadlock-api.com/v1/analytics';

export const DAY_S = 86_400;
export const dayOf = (t: number): number => Math.floor(t / DAY_S) * DAY_S;
export const HIGH_RANK_MIN_BADGE = 91;
export const MIN_WINDOW_MATCHES = 1000;
export const WINDOW_CAP_DAYS = 14;
export const MAX_RANGE_DAYS = 60;
export const PLAYERS_PER_MATCH = 12;
export const REQUEST_TIMEOUT_MS = 60_000;
