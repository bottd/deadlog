import { replaceState } from '$app/navigation';
import { page } from '$app/state';
import { building } from '$app/environment';

type Key = keyof App.PageState;

export function shallowParams<K extends Key>(debounceMs: Record<K, number>) {
	const keys = Object.keys(debounceMs) as K[];
	const drafts = $state<Partial<Record<Key, string>>>({});
	let timer: ReturnType<typeof setTimeout> | undefined;

	const read = (key: K) =>
		drafts[key] ??
		(building
			? ''
			: key in page.state
				? (page.state[key] ?? '')
				: (page.url.searchParams.get(key) ?? ''));

	function commit() {
		clearTimeout(timer);
		const url = new URL(location.href);
		const state: App.PageState = { ...page.state };
		for (const key of keys) {
			const value = read(key);
			url.searchParams.delete(key);
			if (value) url.searchParams.set(key, value);
			state[key] = value;
			drafts[key] = undefined;
		}
		replaceState(url, state);
	}

	$effect(() => () => clearTimeout(timer));

	return Object.defineProperties(
		{} as Record<K, string>,
		Object.fromEntries(
			keys.map((key) => [
				key,
				{
					get: () => read(key),
					set(value: string) {
						drafts[key] = value;
						clearTimeout(timer);
						if (debounceMs[key]) timer = setTimeout(commit, debounceMs[key]);
						else commit();
					}
				}
			])
		)
	);
}
