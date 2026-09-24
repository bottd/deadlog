import { u as changePath } from '../../../../chunks/seo.js';
import { i as resolveRelatedReading } from '../../../../chunks/readingContext.js';
//#region src/routes/change/[...slug]/+page.ts
var mogModules = /* #__PURE__ */ Object.assign({
	'../../../../changelogs/2024/05-03.mg': () => import('../../../../chunks/05-03.js'),
	'../../../../changelogs/2024/05-10.mg': () => import('../../../../chunks/05-10.js'),
	'../../../../changelogs/2024/05-13.mg': () => import('../../../../chunks/05-13.js'),
	'../../../../changelogs/2024/05-16.mg': () => import('../../../../chunks/05-16.js'),
	'../../../../changelogs/2024/05-19.mg': () => import('../../../../chunks/05-19.js'),
	'../../../../changelogs/2024/05-23.mg': () => import('../../../../chunks/05-23.js'),
	'../../../../changelogs/2024/05-24.mg': () => import('../../../../chunks/05-24.js'),
	'../../../../changelogs/2024/05-30.mg': () => import('../../../../chunks/05-30.js'),
	'../../../../changelogs/2024/06-01.mg': () => import('../../../../chunks/06-01.js'),
	'../../../../changelogs/2024/06-06.mg': () => import('../../../../chunks/06-06.js'),
	'../../../../changelogs/2024/06-07.mg': () => import('../../../../chunks/06-07.js'),
	'../../../../changelogs/2024/06-13.mg': () => import('../../../../chunks/06-13.js'),
	'../../../../changelogs/2024/06-14.mg': () => import('../../../../chunks/06-14.js'),
	'../../../../changelogs/2024/06-16.mg': () => import('../../../../chunks/06-16.js'),
	'../../../../changelogs/2024/06-20.mg': () => import('../../../../chunks/06-20.js'),
	'../../../../changelogs/2024/06-23.mg': () => import('../../../../chunks/06-23.js'),
	'../../../../changelogs/2024/06-27.mg': () => import('../../../../chunks/06-27.js'),
	'../../../../changelogs/2024/07-04.mg': () => import('../../../../chunks/07-04.js'),
	'../../../../changelogs/2024/07-11.mg': () => import('../../../../chunks/07-11.js'),
	'../../../../changelogs/2024/07-18.mg': () => import('../../../../chunks/07-18.js'),
	'../../../../changelogs/2024/07-23.mg': () => import('../../../../chunks/07-23.js'),
	'../../../../changelogs/2024/08-01.mg': () => import('../../../../chunks/08-01.js'),
	'../../../../changelogs/2024/08-06.mg': () => import('../../../../chunks/08-06.js'),
	'../../../../changelogs/2024/08-15.mg': () => import('../../../../chunks/08-15.js'),
	'../../../../changelogs/2024/08-16.mg': () => import('../../../../chunks/08-16.js'),
	'../../../../changelogs/2024/08-18.mg': () => import('../../../../chunks/08-18.js'),
	'../../../../changelogs/2024/08-22.mg': () => import('../../../../chunks/08-22.js'),
	'../../../../changelogs/2024/08-23.mg': () => import('../../../../chunks/08-23.js'),
	'../../../../changelogs/2024/08-29.mg': () => import('../../../../chunks/08-29.js'),
	'../../../../changelogs/2024/09-01.mg': () => import('../../../../chunks/09-01.js'),
	'../../../../changelogs/2024/09-12.mg': () => import('../../../../chunks/09-12.js'),
	'../../../../changelogs/2024/09-14.mg': () => import('../../../../chunks/09-14.js'),
	'../../../../changelogs/2024/09-17.mg': () => import('../../../../chunks/09-17.js'),
	'../../../../changelogs/2024/09-19.mg': () => import('../../../../chunks/09-19.js'),
	'../../../../changelogs/2024/09-26.mg': () => import('../../../../chunks/09-26.js'),
	'../../../../changelogs/2024/09-27.mg': () => import('../../../../chunks/09-27.js'),
	'../../../../changelogs/2024/09-29.mg': () => import('../../../../chunks/09-29.js'),
	'../../../../changelogs/2024/10-02.mg': () => import('../../../../chunks/10-02.js'),
	'../../../../changelogs/2024/10-07.mg': () => import('../../../../chunks/10-07.js'),
	'../../../../changelogs/2024/10-10.mg': () => import('../../../../chunks/10-10.js'),
	'../../../../changelogs/2024/10-11.mg': () => import('../../../../chunks/10-11.js'),
	'../../../../changelogs/2024/10-15.mg': () => import('../../../../chunks/10-15.js'),
	'../../../../changelogs/2024/10-18-2.mg': () => import('../../../../chunks/10-18-2.js'),
	'../../../../changelogs/2024/10-18.mg': () => import('../../../../chunks/10-18.js'),
	'../../../../changelogs/2024/10-24.mg': () => import('../../../../chunks/10-24.js'),
	'../../../../changelogs/2024/10-27.mg': () => import('../../../../chunks/10-27.js'),
	'../../../../changelogs/2024/10-29.mg': () => import('../../../../chunks/10-29.js'),
	'../../../../changelogs/2024/11-01.mg': () => import('../../../../chunks/11-01.js'),
	'../../../../changelogs/2024/11-07.mg': () => import('../../../../chunks/11-07.js'),
	'../../../../changelogs/2024/11-10.mg': () => import('../../../../chunks/11-10.js'),
	'../../../../changelogs/2024/11-13.mg': () => import('../../../../chunks/11-13.js'),
	'../../../../changelogs/2024/11-21.mg': () => import('../../../../chunks/11-21.js'),
	'../../../../changelogs/2024/11-29.mg': () => import('../../../../chunks/11-29.js'),
	'../../../../changelogs/2024/12-06.mg': () => import('../../../../chunks/12-06.js'),
	'../../../../changelogs/2024/12-17.mg': () => import('../../../../chunks/12-17.js'),
	'../../../../changelogs/2024/12-21.mg': () => import('../../../../chunks/12-21.js'),
	'../../../../changelogs/2024/12-31.mg': () => import('../../../../chunks/12-31.js'),
	'../../../../changelogs/2025/01-12.mg': () => import('../../../../chunks/01-12.js'),
	'../../../../changelogs/2025/01-17.mg': () => import('../../../../chunks/01-17.js'),
	'../../../../changelogs/2025/01-19.mg': () => import('../../../../chunks/01-19.js'),
	'../../../../changelogs/2025/01-27.mg': () => import('../../../../chunks/01-27.js'),
	'../../../../changelogs/2025/02-11.mg': () => import('../../../../chunks/02-11.js'),
	'../../../../changelogs/2025/02-25.mg': () => import('../../../../chunks/02-25.js'),
	'../../../../changelogs/2025/03-13.mg': () => import('../../../../chunks/03-13.js'),
	'../../../../changelogs/2025/03-16.mg': () => import('../../../../chunks/03-16.js'),
	'../../../../changelogs/2025/03-19.mg': () => import('../../../../chunks/03-19.js'),
	'../../../../changelogs/2025/04-04.mg': () => import('../../../../chunks/04-04.js'),
	'../../../../changelogs/2025/04-17.mg': () => import('../../../../chunks/04-17.js'),
	'../../../../changelogs/2025/05-08.mg': () => import('../../../../chunks/05-08.js'),
	'../../../../changelogs/2025/05-11.mg': () => import('../../../../chunks/05-11.js'),
	'../../../../changelogs/2025/05-19.mg': () => import('../../../../chunks/05-192.js'),
	'../../../../changelogs/2025/05-21.mg': () => import('../../../../chunks/05-21.js'),
	'../../../../changelogs/2025/05-27.mg': () => import('../../../../chunks/05-27.js'),
	'../../../../changelogs/2025/06-17.mg': () => import('../../../../chunks/06-17.js'),
	'../../../../changelogs/2025/07-04.mg': () => import('../../../../chunks/07-042.js'),
	'../../../../changelogs/2025/07-29.mg': () => import('../../../../chunks/07-29.js'),
	'../../../../changelogs/2025/08-18.mg': () => import('../../../../chunks/08-182.js'),
	'../../../../changelogs/2025/09-04.mg': () => import('../../../../chunks/09-04.js'),
	'../../../../changelogs/2025/10-02.mg': () => import('../../../../chunks/10-022.js'),
	'../../../../changelogs/2025/10-24.mg': () => import('../../../../chunks/10-242.js'),
	'../../../../changelogs/2025/11-21.mg': () => import('../../../../chunks/11-212.js'),
	'../../../../changelogs/2025/12-16.mg': () => import('../../../../chunks/12-16.js'),
	'../../../../changelogs/2025/12-29.mg': () => import('../../../../chunks/12-29.js'),
	'../../../../changelogs/2025/billy-comes-in-swinging.mg': () =>
		import('../../../../chunks/billy-comes-in-swinging.js'),
	'../../../../changelogs/2025/drifter-emerges-from-the-shadows.mg': () =>
		import('../../../../chunks/drifter-emerges-from-the-shadows.js'),
	'../../../../changelogs/2025/paige-writes-her-own-story.mg': () =>
		import('../../../../chunks/paige-writes-her-own-story.js'),
	'../../../../changelogs/2025/the-doorman-at-your-service.mg': () =>
		import('../../../../chunks/the-doorman-at-your-service.js'),
	'../../../../changelogs/2025/you-cant-kill-victor.mg': () =>
		import('../../../../chunks/you-cant-kill-victor.js'),
	'../../../../changelogs/2026/01-30.mg': () => import('../../../../chunks/01-30.js'),
	'../../../../changelogs/2026/03-06.mg': () => import('../../../../chunks/03-06.js'),
	'../../../../changelogs/2026/03-21.mg': () => import('../../../../chunks/03-21.js'),
	'../../../../changelogs/2026/03-25.mg': () => import('../../../../chunks/03-25.js'),
	'../../../../changelogs/2026/04-10.mg': () => import('../../../../chunks/04-10.js'),
	'../../../../changelogs/2026/04-30.mg': () => import('../../../../chunks/04-30.js'),
	'../../../../changelogs/2026/05-22.mg': () => import('../../../../chunks/05-22.js'),
	'../../../../changelogs/2026/06-30.mg': () => import('../../../../chunks/06-30.js'),
	'../../../../changelogs/2026/08-12.mg': () => import('../../../../chunks/08-12.js'),
	'../../../../changelogs/2026/08-22.mg': () => import('../../../../chunks/08-222.js'),
	'../../../../changelogs/2026/09-16.mg': () => import('../../../../chunks/09-16.js'),
	'../../../../changelogs/2026/apollo-a-cut-above.mg': () =>
		import('../../../../chunks/apollo-a-cut-above.js'),
	'../../../../changelogs/2026/graves-prefers-the-dead.mg': () =>
		import('../../../../chunks/graves-prefers-the-dead.js'),
	'../../../../changelogs/2026/introducing-the-dazzling-celeste.mg': () =>
		import('../../../../chunks/introducing-the-dazzling-celeste.js'),
	'../../../../changelogs/2026/matchmaking.mg': () =>
		import('../../../../chunks/matchmaking.js'),
	'../../../../changelogs/2026/minor-05-25.mg': () =>
		import('../../../../chunks/minor-05-25.js'),
	'../../../../changelogs/2026/minor-05-28.mg': () =>
		import('../../../../chunks/minor-05-28.js'),
	'../../../../changelogs/2026/minor-05-31.mg': () =>
		import('../../../../chunks/minor-05-31.js'),
	'../../../../changelogs/2026/minor-06-04.mg': () =>
		import('../../../../chunks/minor-06-04.js'),
	'../../../../changelogs/2026/minor-06-11.mg': () =>
		import('../../../../chunks/minor-06-11.js'),
	'../../../../changelogs/2026/minor-07-01.mg': () =>
		import('../../../../chunks/minor-07-01.js'),
	'../../../../changelogs/2026/minor-07-09.mg': () =>
		import('../../../../chunks/minor-07-09.js'),
	'../../../../changelogs/2026/minor-07-28.mg': () =>
		import('../../../../chunks/minor-07-28.js'),
	'../../../../changelogs/2026/old-gods-new-blood.mg': () =>
		import('../../../../chunks/old-gods-new-blood.js'),
	'../../../../changelogs/2026/rem-enters-the-city-that-never-sleeps.mg': () =>
		import('../../../../chunks/rem-enters-the-city-that-never-sleeps.js'),
	'../../../../changelogs/2026/some-are-merciful-the-venator-is-not.mg': () =>
		import('../../../../chunks/some-are-merciful-the-venator-is-not.js'),
	'../../../../changelogs/2026/the-curse-beckons-for-silver.mg': () =>
		import('../../../../chunks/the-curse-beckons-for-silver.js')
});
var load = async ({ data }) => {
	const loader = mogModules[`../../../../changelogs/${data.changelog.slug}.mg`];
	if (!loader) throw new Error(`Missing .mg file for ${data.changelog.slug}`);
	let module;
	try {
		module = await loader();
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
//#endregion
export { load };
