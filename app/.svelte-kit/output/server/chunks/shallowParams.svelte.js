import './server2.js';
import { t as building } from './internal2.js';
import { i as replaceState, n as page } from './Icon.js';
import './navigation.js';
//#region src/lib/stores/shallowParams.svelte.ts
function shallowParams(debounceMs) {
	const keys = Object.keys(debounceMs);
	const drafts = {};
	let timer;
	const read = (key) =>
		drafts[key] ??
		(building
			? ''
			: key in page.state
				? (page.state[key] ?? '')
				: (page.url.searchParams.get(key) ?? ''));
	function commit() {
		clearTimeout(timer);
		const url = new URL(location.href);
		const state = { ...page.state };
		for (const key of keys) {
			const value = read(key);
			url.searchParams.delete(key);
			if (value) url.searchParams.set(key, value);
			state[key] = value;
			drafts[key] = void 0;
		}
		replaceState(url, state);
	}
	return Object.defineProperties(
		{},
		Object.fromEntries(
			keys.map((key) => [
				key,
				{
					get: () => read(key),
					set(value) {
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
//#endregion
export { shallowParams as t };
