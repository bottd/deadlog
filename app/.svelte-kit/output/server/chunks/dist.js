import {
	O as escape_html,
	T as attr,
	a as derived,
	c as head,
	f as stringify,
	m as html,
	r as attributes,
	s as ensure_array_like
} from './server2.js';
//#region ../node_modules/.pnpm/svelte-meta-tags@5.0.2_svelte@5.57.0_@typescript-eslint+types@8.70.0__typescript@6.0.3/node_modules/svelte-meta-tags/dist/MetaTags.svelte
function MetaTags($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			title = void 0,
			titleTemplate = void 0,
			robots = 'index,follow',
			additionalRobotsProps = void 0,
			description = void 0,
			mobileAlternate = void 0,
			languageAlternates = void 0,
			twitter = void 0,
			facebook = void 0,
			openGraph = void 0,
			canonical = void 0,
			keywords = void 0,
			additionalMetaTags = void 0,
			additionalLinkTags = void 0
		} = $$props;
		let updatedTitle = derived(() => {
			const t = title;
			if (!t) return t;
			return titleTemplate ? titleTemplate.replace(/%s/g, () => t) : t;
		});
		let robotsParams = derived(() => {
			if (!additionalRobotsProps) return '';
			const {
				nosnippet,
				maxSnippet,
				maxImagePreview,
				maxVideoPreview,
				noarchive,
				noimageindex,
				notranslate,
				unavailableAfter
			} = additionalRobotsProps;
			return `${nosnippet ? ',nosnippet' : ''}${maxSnippet ? `,max-snippet:${maxSnippet}` : ''}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ''}${noarchive ? ',noarchive' : ''}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ''}${noimageindex ? ',noimageindex' : ''}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ''}${notranslate ? ',notranslate' : ''}`;
		});
		head('bh6ypm', $$renderer, ($$renderer) => {
			if (updatedTitle()) {
				$$renderer.push('<!--[0-->');
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>${escape_html(updatedTitle())}</title>`);
				});
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (robots !== false)
				$$renderer.push(
					`<!--[0--><meta name="robots"${attr('content', `${stringify(robots)}${stringify(robotsParams())}`)}/>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (description)
				$$renderer.push(
					`<!--[0--><meta name="description"${attr('content', description)}/>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (canonical)
				$$renderer.push(`<!--[0--><link rel="canonical"${attr('href', canonical)}/>`);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (keywords?.length)
				$$renderer.push(
					`<!--[0--><meta name="keywords"${attr('content', keywords.join(', '))}/>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (mobileAlternate)
				$$renderer.push(
					`<!--[0--><link rel="alternate"${attr('media', mobileAlternate.media)}${attr('href', mobileAlternate.href)}/>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> <!--[-->`);
			const each_array = ensure_array_like(languageAlternates);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let languageAlternate = each_array[$$index];
				$$renderer.push(
					`<link rel="alternate"${attr('hreflang', languageAlternate.hrefLang)}${attr('href', languageAlternate.href)}/>`
				);
			}
			$$renderer.push(`<!--]--> `);
			if (twitter) {
				$$renderer.push('<!--[0-->');
				if (twitter.cardType)
					$$renderer.push(
						`<!--[0--><meta name="twitter:card"${attr('content', twitter.cardType)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.site)
					$$renderer.push(
						`<!--[0--><meta name="twitter:site"${attr('content', twitter.site)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.title || openGraph?.title || updatedTitle())
					$$renderer.push(
						`<!--[0--><meta name="twitter:title"${attr('content', twitter.title || openGraph?.title || updatedTitle())}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.description || openGraph?.description || description)
					$$renderer.push(
						`<!--[0--><meta name="twitter:description"${attr('content', twitter.description || openGraph?.description || description)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.creator)
					$$renderer.push(
						`<!--[0--><meta name="twitter:creator"${attr('content', twitter.creator)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.creatorId)
					$$renderer.push(
						`<!--[0--><meta name="twitter:creator:id"${attr('content', twitter.creatorId)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.image)
					$$renderer.push(
						`<!--[0--><meta name="twitter:image"${attr('content', twitter.image)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.imageAlt)
					$$renderer.push(
						`<!--[0--><meta name="twitter:image:alt"${attr('content', twitter.imageAlt)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.player)
					$$renderer.push(
						`<!--[0--><meta name="twitter:player"${attr('content', twitter.player)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.playerWidth)
					$$renderer.push(
						`<!--[0--><meta name="twitter:player:width"${attr('content', twitter.playerWidth.toString())}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.playerHeight)
					$$renderer.push(
						`<!--[0--><meta name="twitter:player:height"${attr('content', twitter.playerHeight.toString())}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.playerStream)
					$$renderer.push(
						`<!--[0--><meta name="twitter:player:stream"${attr('content', twitter.playerStream)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.appNameIphone)
					$$renderer.push(
						`<!--[0--><meta name="twitter:app:name:iphone"${attr('content', twitter.appNameIphone)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.appIdIphone)
					$$renderer.push(
						`<!--[0--><meta name="twitter:app:id:iphone"${attr('content', twitter.appIdIphone)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.appUrlIphone)
					$$renderer.push(
						`<!--[0--><meta name="twitter:app:url:iphone"${attr('content', twitter.appUrlIphone)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.appNameIpad)
					$$renderer.push(
						`<!--[0--><meta name="twitter:app:name:ipad"${attr('content', twitter.appNameIpad)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.appIdIpad)
					$$renderer.push(
						`<!--[0--><meta name="twitter:app:id:ipad"${attr('content', twitter.appIdIpad)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.appUrlIpad)
					$$renderer.push(
						`<!--[0--><meta name="twitter:app:url:ipad"${attr('content', twitter.appUrlIpad)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.appNameGoogleplay)
					$$renderer.push(
						`<!--[0--><meta name="twitter:app:name:googleplay"${attr('content', twitter.appNameGoogleplay)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.appIdGoogleplay)
					$$renderer.push(
						`<!--[0--><meta name="twitter:app:id:googleplay"${attr('content', twitter.appIdGoogleplay)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (twitter.appUrlGoogleplay)
					$$renderer.push(
						`<!--[0--><meta name="twitter:app:url:googleplay"${attr('content', twitter.appUrlGoogleplay)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (facebook?.appId)
				$$renderer.push(
					`<!--[0--><meta property="fb:app_id"${attr('content', facebook.appId)}/>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> `);
			if (openGraph) {
				$$renderer.push('<!--[0-->');
				if (openGraph.url || canonical)
					$$renderer.push(
						`<!--[0--><meta property="og:url"${attr('content', openGraph.url || canonical)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (openGraph.type) {
					$$renderer.push(
						`<!--[0--><meta property="og:type"${attr('content', openGraph.type.toLowerCase())}/> `
					);
					if (openGraph.type.toLowerCase() === 'profile' && openGraph.profile) {
						$$renderer.push('<!--[0-->');
						if (openGraph.profile.firstName)
							$$renderer.push(
								`<!--[0--><meta property="profile:first_name"${attr('content', openGraph.profile.firstName)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (openGraph.profile.lastName)
							$$renderer.push(
								`<!--[0--><meta property="profile:last_name"${attr('content', openGraph.profile.lastName)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (openGraph.profile.username)
							$$renderer.push(
								`<!--[0--><meta property="profile:username"${attr('content', openGraph.profile.username)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (openGraph.profile.gender)
							$$renderer.push(
								`<!--[0--><meta property="profile:gender"${attr('content', openGraph.profile.gender)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]-->`);
					} else if (openGraph.type.toLowerCase() === 'book' && openGraph.book) {
						$$renderer.push(`<!--[1--><!--[-->`);
						const each_array_1 = ensure_array_like(openGraph.book?.authors);
						for (
							let $$index_1 = 0, $$length = each_array_1.length;
							$$index_1 < $$length;
							$$index_1++
						) {
							let author = each_array_1[$$index_1];
							$$renderer.push(`<meta property="book:author"${attr('content', author)}/>`);
						}
						$$renderer.push(`<!--]--> `);
						if (openGraph.book.isbn)
							$$renderer.push(
								`<!--[0--><meta property="book:isbn"${attr('content', openGraph.book.isbn)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (openGraph.book.releaseDate)
							$$renderer.push(
								`<!--[0--><meta property="book:release_date"${attr('content', openGraph.book.releaseDate)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> <!--[-->`);
						const each_array_2 = ensure_array_like(openGraph.book?.tags);
						for (
							let $$index_2 = 0, $$length = each_array_2.length;
							$$index_2 < $$length;
							$$index_2++
						) {
							let tag = each_array_2[$$index_2];
							$$renderer.push(`<meta property="book:tag"${attr('content', tag)}/>`);
						}
						$$renderer.push(`<!--]-->`);
					} else if (openGraph.type.toLowerCase() === 'article' && openGraph.article) {
						$$renderer.push('<!--[2-->');
						if (openGraph.article.publishedTime)
							$$renderer.push(
								`<!--[0--><meta property="article:published_time"${attr('content', openGraph.article.publishedTime)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (openGraph.article.modifiedTime)
							$$renderer.push(
								`<!--[0--><meta property="article:modified_time"${attr('content', openGraph.article.modifiedTime)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (openGraph.article.expirationTime)
							$$renderer.push(
								`<!--[0--><meta property="article:expiration_time"${attr('content', openGraph.article.expirationTime)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> <!--[-->`);
						const each_array_3 = ensure_array_like(openGraph.article?.authors);
						for (
							let $$index_3 = 0, $$length = each_array_3.length;
							$$index_3 < $$length;
							$$index_3++
						) {
							let author = each_array_3[$$index_3];
							$$renderer.push(
								`<meta property="article:author"${attr('content', author)}/>`
							);
						}
						$$renderer.push(`<!--]--> `);
						if (openGraph.article.section)
							$$renderer.push(
								`<!--[0--><meta property="article:section"${attr('content', openGraph.article.section)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> <!--[-->`);
						const each_array_4 = ensure_array_like(openGraph.article?.tags);
						for (
							let $$index_4 = 0, $$length = each_array_4.length;
							$$index_4 < $$length;
							$$index_4++
						) {
							let tag = each_array_4[$$index_4];
							$$renderer.push(`<meta property="article:tag"${attr('content', tag)}/>`);
						}
						$$renderer.push(`<!--]-->`);
					} else if (
						['video.movie', 'video.episode', 'video.tv_show'].includes(
							openGraph.type.toLowerCase()
						) ||
						(openGraph.type.toLowerCase() === 'video.other' && openGraph.video)
					) {
						$$renderer.push(`<!--[3--><!--[-->`);
						const each_array_5 = ensure_array_like(openGraph.video?.actors);
						for (
							let $$index_5 = 0, $$length = each_array_5.length;
							$$index_5 < $$length;
							$$index_5++
						) {
							let actor = each_array_5[$$index_5];
							if (actor.profile)
								$$renderer.push(
									`<!--[0--><meta property="video:actor"${attr('content', actor.profile)}/>`
								);
							else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]--> `);
							if (actor.role)
								$$renderer.push(
									`<!--[0--><meta property="video:actor:role"${attr('content', actor.role)}/>`
								);
							else $$renderer.push('<!--[-1-->');
							$$renderer.push(`<!--]-->`);
						}
						$$renderer.push(`<!--]--> <!--[-->`);
						const each_array_6 = ensure_array_like(openGraph.video?.directors);
						for (
							let $$index_6 = 0, $$length = each_array_6.length;
							$$index_6 < $$length;
							$$index_6++
						) {
							let director = each_array_6[$$index_6];
							$$renderer.push(
								`<meta property="video:director"${attr('content', director)}/>`
							);
						}
						$$renderer.push(`<!--]--> <!--[-->`);
						const each_array_7 = ensure_array_like(openGraph.video?.writers);
						for (
							let $$index_7 = 0, $$length = each_array_7.length;
							$$index_7 < $$length;
							$$index_7++
						) {
							let writer = each_array_7[$$index_7];
							$$renderer.push(
								`<meta property="video:writer"${attr('content', writer)}/>`
							);
						}
						$$renderer.push(`<!--]--> `);
						if (openGraph.video?.duration)
							$$renderer.push(
								`<!--[0--><meta property="video:duration"${attr('content', openGraph.video.duration.toString())}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (openGraph.video?.releaseDate)
							$$renderer.push(
								`<!--[0--><meta property="video:release_date"${attr('content', openGraph.video.releaseDate)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> <!--[-->`);
						const each_array_8 = ensure_array_like(openGraph.video?.tags);
						for (
							let $$index_8 = 0, $$length = each_array_8.length;
							$$index_8 < $$length;
							$$index_8++
						) {
							let tag = each_array_8[$$index_8];
							$$renderer.push(`<meta property="video:tag"${attr('content', tag)}/>`);
						}
						$$renderer.push(`<!--]--> `);
						if (openGraph.video?.series)
							$$renderer.push(
								`<!--[0--><meta property="video:series"${attr('content', openGraph.video.series)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]-->`);
					} else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]-->`);
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (openGraph.title || updatedTitle())
					$$renderer.push(
						`<!--[0--><meta property="og:title"${attr('content', openGraph.title || updatedTitle())}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (openGraph.description || description)
					$$renderer.push(
						`<!--[0--><meta property="og:description"${attr('content', openGraph.description || description)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (openGraph.image || openGraph.images?.length) {
					$$renderer.push('<!--[0-->');
					const ogImages = openGraph.image
						? [openGraph.image, ...(openGraph.images || [])]
						: openGraph.images;
					$$renderer.push(`<!--[-->`);
					const each_array_9 = ensure_array_like(ogImages);
					for (
						let $$index_9 = 0, $$length = each_array_9.length;
						$$index_9 < $$length;
						$$index_9++
					) {
						let image = each_array_9[$$index_9];
						$$renderer.push(`<meta property="og:image"${attr('content', image.url)}/> `);
						if (image.alt)
							$$renderer.push(
								`<!--[0--><meta property="og:image:alt"${attr('content', image.alt)}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (image.width)
							$$renderer.push(
								`<!--[0--><meta property="og:image:width"${attr('content', image.width.toString())}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (image.height)
							$$renderer.push(
								`<!--[0--><meta property="og:image:height"${attr('content', image.height.toString())}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (image.secureUrl)
							$$renderer.push(
								`<!--[0--><meta property="og:image:secure_url"${attr('content', image.secureUrl.toString())}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						if (image.type)
							$$renderer.push(
								`<!--[0--><meta property="og:image:type"${attr('content', image.type.toString())}/>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]-->`);
					}
					$$renderer.push(`<!--]-->`);
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> <!--[-->`);
				const each_array_10 = ensure_array_like(openGraph.videos);
				for (
					let $$index_10 = 0, $$length = each_array_10.length;
					$$index_10 < $$length;
					$$index_10++
				) {
					let video = each_array_10[$$index_10];
					$$renderer.push(`<meta property="og:video"${attr('content', video.url)}/> `);
					if (video.width)
						$$renderer.push(
							`<!--[0--><meta property="og:video:width"${attr('content', video.width.toString())}/>`
						);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--> `);
					if (video.height)
						$$renderer.push(
							`<!--[0--><meta property="og:video:height"${attr('content', video.height.toString())}/>`
						);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--> `);
					if (video.secureUrl)
						$$renderer.push(
							`<!--[0--><meta property="og:video:secure_url"${attr('content', video.secureUrl.toString())}/>`
						);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--> `);
					if (video.type)
						$$renderer.push(
							`<!--[0--><meta property="og:video:type"${attr('content', video.type.toString())}/>`
						);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]-->`);
				}
				$$renderer.push(`<!--]--> <!--[-->`);
				const each_array_11 = ensure_array_like(openGraph.audio);
				for (
					let $$index_11 = 0, $$length = each_array_11.length;
					$$index_11 < $$length;
					$$index_11++
				) {
					let audio = each_array_11[$$index_11];
					$$renderer.push(`<meta property="og:audio"${attr('content', audio.url)}/> `);
					if (audio.secureUrl)
						$$renderer.push(
							`<!--[0--><meta property="og:audio:secure_url"${attr('content', audio.secureUrl.toString())}/>`
						);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--> `);
					if (audio.type)
						$$renderer.push(
							`<!--[0--><meta property="og:audio:type"${attr('content', audio.type.toString())}/>`
						);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]-->`);
				}
				$$renderer.push(`<!--]--> `);
				if (openGraph.locale)
					$$renderer.push(
						`<!--[0--><meta property="og:locale"${attr('content', openGraph.locale)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (openGraph.siteName)
					$$renderer.push(
						`<!--[0--><meta property="og:site_name"${attr('content', openGraph.siteName)}/>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]-->`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--> <!--[-->`);
			const each_array_12 = ensure_array_like(additionalMetaTags);
			for (
				let $$index_12 = 0, $$length = each_array_12.length;
				$$index_12 < $$length;
				$$index_12++
			) {
				const { httpEquiv, ...metaTag } = each_array_12[$$index_12];
				$$renderer.push(
					`<meta${attributes({
						...(httpEquiv
							? {
									...metaTag,
									'http-equiv': httpEquiv
								}
							: metaTag)
					})}/>`
				);
			}
			$$renderer.push(`<!--]--> <!--[-->`);
			const each_array_13 = ensure_array_like(additionalLinkTags);
			for (
				let $$index_13 = 0, $$length = each_array_13.length;
				$$index_13 < $$length;
				$$index_13++
			) {
				let tag = each_array_13[$$index_13];
				$$renderer.push(
					`<link${attributes({ ...tag })} onload="this.__e=event" onerror="this.__e=event"/>`
				);
			}
			$$renderer.push(`<!--]-->`);
		});
	});
}
//#endregion
//#region ../node_modules/.pnpm/svelte-meta-tags@5.0.2_svelte@5.57.0_@typescript-eslint+types@8.70.0__typescript@6.0.3/node_modules/svelte-meta-tags/dist/JsonLd.svelte
function JsonLd($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { output = 'head', schema = void 0 } = $$props;
		let isValid = derived(() => schema && typeof schema === 'object');
		const createSchema = (schema) => {
			const addContext = (context) => ({
				'@context': 'https://schema.org',
				...context
			});
			return Array.isArray(schema)
				? schema.map((context) => addContext(context))
				: addContext(schema);
		};
		let escapedJson = derived(() =>
			JSON.stringify(createSchema(schema)).replace(/</g, '\\u003c')
		);
		let json = derived(
			() => `<script type="application/ld+json">${escapedJson()}<\/script>`
		);
		head('ewfwwg', $$renderer, ($$renderer) => {
			if (isValid() && output === 'head') $$renderer.push(`<!--[0-->${html(json())}`);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]-->`);
		});
		if (isValid() && output === 'body') $$renderer.push(`<!--[0-->${html(json())}`);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { MetaTags as n, JsonLd as t };
