import type { FeedGroups, FeedIndex, FeedText } from '@deadlog/db';
import type { FeedPage } from './pages';

let indexPromise: Promise<FeedIndex> | null = null;
let textPromise: Promise<FeedText> | null = null;
let groupsPromise: Promise<FeedGroups> | null = null;

async function fetchJson<T>(path: string, signal?: AbortSignal): Promise<T> {
	const response = await fetch(path, { signal });
	if (!response.ok) {
		throw new Error(`Failed to load ${path}: ${response.status} ${response.statusText}`);
	}
	return (await response.json()) as T;
}

export function loadFeedIndex(): Promise<FeedIndex> {
	indexPromise ??= fetchJson<FeedIndex>('/feed-index.json').catch((error: unknown) => {
		indexPromise = null;
		throw error;
	});
	return indexPromise;
}

export function loadFeedText(): Promise<FeedText> {
	textPromise ??= fetchJson<FeedText>('/feed-text.json').catch((error: unknown) => {
		textPromise = null;
		throw error;
	});
	return textPromise;
}

export function loadFeedGroups(): Promise<FeedGroups> {
	groupsPromise ??= fetchJson<FeedGroups>('/feed-groups.json').catch((error: unknown) => {
		groupsPromise = null;
		throw error;
	});
	return groupsPromise;
}

export function loadFeedPage(page: number, signal?: AbortSignal): Promise<FeedPage> {
	return fetchJson<FeedPage>(`/feed-page/${page}.json`, signal);
}
