import type { PageLoad } from './$types';
import type { Component } from 'svelte';

export const load: PageLoad = async ({ data }) => {
	let NorgComponent: Component | null = null;

	// If we have a slug, try to load the .norg file
	if (data.changelog.slug) {
		try {
			// Dynamic import of the .norg file
			const module = await import(`$changelogs/${data.changelog.slug}.norg`);
			NorgComponent = module.default;
		} catch (e) {
			// .norg file not found, fall back to contentJson
			console.warn(`Failed to load .norg file for ${data.changelog.slug}:`, e);
		}
	}

	return {
		...data,
		NorgComponent
	};
};
