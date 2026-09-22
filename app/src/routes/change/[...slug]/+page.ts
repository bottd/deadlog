import type { PageLoad } from './$types';
import type { Component } from 'svelte';
import type { MogTocEntry } from '$lib/types';
import type { MogMatchResults } from '$lib/components/changelog/patchStatsContext';
import {
	resolveRelatedReading,
	type MogReadingManifest
} from '$lib/components/changelog/readingContext';
import { changePath } from '$lib/seo';

const mogModules = import.meta.glob('../../../../changelogs/**/*.mg');

export const load: PageLoad = async ({ data }) => {
	const key = `../../../../changelogs/${data.changelog.slug}.mg`;
	const loader = mogModules[key];
	if (!loader) {
		throw new Error(`Missing .mg file for ${data.changelog.slug}`);
	}

	let module: {
		default: Component;
		toc?: MogTocEntry[];
		matchResults?: MogMatchResults;
		readingManifest?: MogReadingManifest;
	};
	try {
		module = (await loader()) as typeof module;
	} catch (cause) {
		throw new Error(`Failed to load .mg file for ${data.changelog.slug}`, { cause });
	}

	return {
		...data,
		MogComponent: module.default,
		mogToc: module.toc ?? [],
		mogMatchResults: module.matchResults ?? null,
		mogRelated: resolveRelatedReading(
			module.readingManifest ?? null,
			data.changelog.icons,
			changePath(data.changelog)
		)
	};
};
