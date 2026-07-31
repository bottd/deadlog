import type { PageLoad } from './$types';
import type { Component } from 'svelte';
import type { MogTocEntry } from '$lib/types';

const mogModules = import.meta.glob('../../../../changelogs/**/*.mg');

export const load: PageLoad = async ({ data }) => {
	let MogComponent: Component | null = null;
	let mogToc: MogTocEntry[] = [];

	const key = `../../../../changelogs/${data.changelog.slug}.mg`;
	const loader = mogModules[key];

	if (loader) {
		try {
			const module = (await loader()) as {
				default: Component;
				toc?: MogTocEntry[];
			};
			MogComponent = module.default;
			mogToc = module.toc ?? [];
		} catch (e) {
			console.warn(`Failed to load .mg file for ${data.changelog.slug}:`, e);
		}
	}

	return {
		...data,
		MogComponent,
		mogToc
	};
};
