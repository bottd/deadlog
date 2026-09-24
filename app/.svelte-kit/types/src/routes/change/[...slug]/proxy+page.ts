// @ts-nocheck
import type { PageLoad } from './$types';
import type { Component } from 'svelte';
import type { MogTocEntry } from '$lib/types';
import {
	resolveRelatedReading,
	type MogReadingManifest
} from '$lib/components/changelog/readingContext';
import { changePath } from '$lib/seo';

const mogModules = import.meta.glob('../../../../changelogs/**/*.mg');

export const load = async ({ data }: Parameters<PageLoad>[0]) => {
	const key = `../../../../changelogs/${data.changelog.slug}.mg`;
	const loader = mogModules[key];
	if (!loader) {
		throw new Error(`Missing .mg file for ${data.changelog.slug}`);
	}

	let module: {
		default: Component;
		toc?: MogTocEntry[];
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
		mogStats: module.readingManifest?.stats ?? null,
		mogOpen: module.readingManifest?.open ?? false,
		mogRelated: resolveRelatedReading(
			module.readingManifest ?? null,
			data.changelog.icons,
			changePath(data.changelog)
		)
	};
};
