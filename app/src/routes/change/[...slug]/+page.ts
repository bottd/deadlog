import type { PageLoad } from './$types';
import type { Component } from 'svelte';
import type { MogTocEntry } from '$lib/types';

const mogModules = import.meta.glob('../../../../changelogs/**/*.mg');

export const load: PageLoad = async ({ data }) => {
	const key = `../../../../changelogs/${data.changelog.slug}.mg`;
	const loader = mogModules[key];
	if (!loader) {
		throw new Error(`Missing .mg file for ${data.changelog.slug}`);
	}

	let module: { default: Component; toc?: MogTocEntry[] };
	try {
		module = (await loader()) as typeof module;
	} catch (cause) {
		throw new Error(`Failed to load .mg file for ${data.changelog.slug}`, { cause });
	}

	return {
		...data,
		MogComponent: module.default,
		mogToc: module.toc ?? []
	};
};
