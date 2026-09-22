import { readFile } from 'node:fs/promises';
import { register } from 'tsx/esm/api';
import { normalizePath } from 'vite';

/** @param {string} changelogsDir @returns {import('vite').Plugin} */
export function inlineMogStatsPlugin(changelogsDir) {
	const prefix = `${normalizePath(changelogsDir)}/`;
	// Workspace packages export TypeScript with extensionless imports. Load them
	// through the same TS runtime as the other build tools, not native Node ESM
	// (Vite externalizes package imports while bundling its configuration).
	/** @type {Promise<typeof import('./src/lib/build/inlineMogStats')> | undefined} */
	let renderer;
	async function loadRenderer() {
		const unregister = register();
		try {
			return await import(
				new URL('./src/lib/build/inlineMogStats.ts', import.meta.url).href
			);
		} finally {
			unregister();
		}
	}
	return {
		name: 'deadlog-inline-mog-stats',
		enforce: 'pre',
		async transform(code, id) {
			// SvelteKit compiles .mg directly; the suffixed form supports standalone Vite.
			// Exclude virtual/query modules, particularly Mog's original embeds.
			if (!id.startsWith(prefix) || !/\.mg(?:\.svelte)?$/.test(id)) return;
			const file = id.replace(/\.mg\.svelte$/, '.mg');
			try {
				renderer ??= loadRenderer();
				const { inlineMogStats } = await renderer;
				const source = await readFile(file, 'utf8');
				const next = await inlineMogStats(source, code);
				return next === code ? undefined : { code: next, map: null };
			} catch (cause) {
				this.error(`Failed to inline match results in ${file}: ${String(cause)}`);
			}
		}
	};
}
