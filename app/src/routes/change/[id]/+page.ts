import type { PageLoad } from './$types';
import type { Component } from 'svelte';

const norgModules = import.meta.glob('../../../../changelogs/**/*.norg');

export const load: PageLoad = async ({ data }) => {
	let NorgComponent: Component | null = null;

	if (data.changelog.slug) {
		const key = `../../../../changelogs/${data.changelog.slug}.norg`;
		const loader = norgModules[key];

		if (loader) {
			try {
				const module = await loader();
				NorgComponent = (module as Record<string, Component>).default;
			} catch (e) {
				console.warn(`Failed to load .norg file for ${data.changelog.slug}:`, e);
			}
		}
	}

	return {
		...data,
		NorgComponent
	};
};
