import { a as derived, d as spread_props } from '../../chunks/server2.js';
import { l as Changelog } from '../../chunks/changelog.js';
import {
	a as SITE_NAME,
	i as SITE_DESCRIPTION,
	n as DEFAULT_SOCIAL_IMAGE,
	o as SITE_TITLE,
	p as pageMeta,
	s as SITE_URL
} from '../../chunks/seo.js';
import { R as searchParams } from '../../chunks/context.js';
import { n as MetaTags, t as JsonLd } from '../../chunks/dist.js';
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const queryString = derived(() => searchParams.toURLSearchParams().toString());
		const hasFilters = derived(() => queryString() !== '');
		const shareUrl = derived(() =>
			queryString() ? `${SITE_URL}/?${queryString()}` : SITE_URL
		);
		MetaTags(
			$$renderer,
			spread_props([
				pageMeta({
					title: SITE_TITLE,
					description: SITE_DESCRIPTION,
					canonical: shareUrl(),
					indexable: !hasFilters()
				})
			])
		);
		$$renderer.push(`<!----> `);
		if (!hasFilters()) {
			$$renderer.push('<!--[0-->');
			JsonLd($$renderer, {
				schema: {
					'@graph': [
						{
							'@type': 'WebSite',
							'@id': `${SITE_URL}/#website`,
							url: SITE_URL,
							name: SITE_NAME,
							alternateName: 'Deadlock Changelog',
							description: SITE_DESCRIPTION,
							inLanguage: 'en-US'
						},
						{
							'@type': 'CollectionPage',
							'@id': `${SITE_URL}/#webpage`,
							url: SITE_URL,
							name: SITE_TITLE,
							description: SITE_DESCRIPTION,
							image: DEFAULT_SOCIAL_IMAGE,
							dateModified: data.lastUpdate,
							inLanguage: 'en-US',
							isPartOf: { '@id': `${SITE_URL}/#website` },
							about: {
								'@type': 'VideoGame',
								name: 'Deadlock'
							}
						}
					]
				}
			});
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> `);
		Changelog($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
