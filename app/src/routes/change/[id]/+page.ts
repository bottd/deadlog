import type { PageLoad } from './$types';
import type { Component } from 'svelte';

const mogModules = import.meta.glob('../../../../changelogs/**/*.mg');

export const load: PageLoad = async ({ data }) => {
	let MogComponent: Component | null = null;
	let mogSections: string[] = [];

	if (data.changelog.slug) {
		const key = `../../../../changelogs/${data.changelog.slug}.mg`;
		const loader = mogModules[key];

		if (loader) {
			try {
				const module = (await loader()) as {
					default: Component;
					toc?: { id: string }[];
				};
				MogComponent = module.default;
				mogSections = module.toc?.map((section) => section.id) ?? [];
			} catch (e) {
				console.warn(`Failed to load .mg file for ${data.changelog.slug}:`, e);
			}
		}
	}

	return {
		...data,
		MogComponent,
		mogSections
	};
};
