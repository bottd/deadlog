import {
	$ as e,
	E as t,
	F as n,
	I as r,
	K as i,
	P as a,
	T as o,
	W as s,
	Z as c,
	a as l,
	at as u,
	b as d,
	bt as f,
	et as p,
	f as m,
	k as h,
	m as g,
	mt as _,
	nt as v,
	st as y,
	xt as b
} from './CSrylp8p.js';
import './xihTtKlq.js';
var x = r(`<meta name="robots"/>`),
	S = r(`<meta name="description"/>`),
	C = r(`<link rel="canonical"/>`),
	w = r(`<meta name="keywords"/>`),
	T = r(`<link rel="alternate"/>`),
	ee = r(`<meta name="twitter:card"/>`),
	E = r(`<meta name="twitter:site"/>`),
	te = r(`<meta name="twitter:title"/>`),
	ne = r(`<meta name="twitter:description"/>`),
	re = r(`<meta name="twitter:creator"/>`),
	ie = r(`<meta name="twitter:creator:id"/>`),
	ae = r(`<meta name="twitter:image"/>`),
	oe = r(`<meta name="twitter:image:alt"/>`),
	se = r(`<meta name="twitter:player"/>`),
	ce = r(`<meta name="twitter:player:width"/>`),
	le = r(`<meta name="twitter:player:height"/>`),
	ue = r(`<meta name="twitter:player:stream"/>`),
	de = r(`<meta name="twitter:app:name:iphone"/>`),
	fe = r(`<meta name="twitter:app:id:iphone"/>`),
	pe = r(`<meta name="twitter:app:url:iphone"/>`),
	me = r(`<meta name="twitter:app:name:ipad"/>`),
	he = r(`<meta name="twitter:app:id:ipad"/>`),
	ge = r(`<meta name="twitter:app:url:ipad"/>`),
	_e = r(`<meta name="twitter:app:name:googleplay"/>`),
	ve = r(`<meta name="twitter:app:id:googleplay"/>`),
	ye = r(`<meta name="twitter:app:url:googleplay"/>`),
	be = r(
		`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,
		1
	),
	xe = r(`<meta property="fb:app_id"/>`),
	D = r(`<meta property="og:url"/>`),
	O = r(`<meta property="profile:first_name"/>`),
	k = r(`<meta property="profile:last_name"/>`),
	A = r(`<meta property="profile:username"/>`),
	j = r(`<meta property="profile:gender"/>`),
	M = r(`<!> <!> <!> <!>`, 1),
	N = r(`<meta property="book:author"/>`),
	P = r(`<meta property="book:isbn"/>`),
	F = r(`<meta property="book:release_date"/>`),
	I = r(`<meta property="book:tag"/>`),
	L = r(`<meta property="article:published_time"/>`),
	Se = r(`<meta property="article:modified_time"/>`),
	R = r(`<meta property="article:expiration_time"/>`),
	Ce = r(`<meta property="article:author"/>`),
	z = r(`<meta property="article:section"/>`),
	we = r(`<meta property="article:tag"/>`),
	B = r(`<!> <!> <!> <!> <!> <!>`, 1),
	Te = r(`<meta property="video:actor"/>`),
	V = r(`<meta property="video:actor:role"/>`),
	Ee = r(`<!> <!>`, 1),
	H = r(`<meta property="video:director"/>`),
	De = r(`<meta property="video:writer"/>`),
	Oe = r(`<meta property="video:duration"/>`),
	ke = r(`<meta property="video:release_date"/>`),
	Ae = r(`<meta property="video:tag"/>`),
	je = r(`<meta property="video:series"/>`),
	Me = r(`<!> <!> <!> <!> <!> <!> <!>`, 1),
	Ne = r(`<meta property="og:type"/> <!>`, 1),
	Pe = r(`<meta property="og:title"/>`),
	Fe = r(`<meta property="og:description"/>`),
	Ie = r(`<meta property="og:image:alt"/>`),
	Le = r(`<meta property="og:image:width"/>`),
	Re = r(`<meta property="og:image:height"/>`),
	ze = r(`<meta property="og:image:secure_url"/>`),
	Be = r(`<meta property="og:image:type"/>`),
	Ve = r(`<meta property="og:image"/> <!> <!> <!> <!> <!>`, 1),
	He = r(`<meta property="og:video:width"/>`),
	Ue = r(`<meta property="og:video:height"/>`),
	We = r(`<meta property="og:video:secure_url"/>`),
	Ge = r(`<meta property="og:video:type"/>`),
	Ke = r(`<meta property="og:video"/> <!> <!> <!> <!>`, 1),
	qe = r(`<meta property="og:audio:secure_url"/>`),
	Je = r(`<meta property="og:audio:type"/>`),
	Ye = r(`<meta property="og:audio"/> <!> <!>`, 1),
	Xe = r(`<meta property="og:locale"/>`),
	Ze = r(`<meta property="og:site_name"/>`),
	Qe = r(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1),
	$e = r(`<meta/>`),
	et = r(`<link/>`),
	tt = r(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function U(r, o) {
	b(o, !0);
	let U = l(o, `title`, 3, void 0),
		W = l(o, `titleTemplate`, 3, void 0),
		G = l(o, `robots`, 3, `index,follow`),
		K = l(o, `additionalRobotsProps`, 3, void 0),
		q = l(o, `description`, 3, void 0),
		J = l(o, `mobileAlternate`, 3, void 0),
		nt = l(o, `languageAlternates`, 3, void 0),
		Y = l(o, `twitter`, 3, void 0),
		rt = l(o, `facebook`, 3, void 0),
		X = l(o, `openGraph`, 3, void 0),
		Z = l(o, `canonical`, 3, void 0),
		it = l(o, `keywords`, 3, void 0),
		at = l(o, `additionalMetaTags`, 3, void 0),
		ot = l(o, `additionalLinkTags`, 3, void 0),
		Q = _(() => {
			let e = U();
			return e && (W() ? W().replace(/%s/g, () => e) : e);
		}),
		st = _(() => {
			if (!K()) return ``;
			let {
				nosnippet: e,
				maxSnippet: t,
				maxImagePreview: n,
				maxVideoPreview: r,
				noarchive: i,
				noimageindex: a,
				notranslate: o,
				unavailableAfter: s
			} = K();
			return `${e ? `,nosnippet` : ``}${t ? `,max-snippet:${t}` : ``}${n ? `,max-image-preview:${n}` : ``}${i ? `,noarchive` : ``}${s ? `,unavailable_after:${s}` : ``}${a ? `,noimageindex` : ``}${r ? `,max-video-preview:${r}` : ``}${o ? `,notranslate` : ``}`;
		});
	(p(() => {
		!G() &&
			K() &&
			console.warn(`additionalRobotsProps cannot be used when robots is set to false`);
	}),
		d(`bh6ypm`, (r) => {
			var o = tt(),
				l = u(o),
				d = (e) => {
					c(() => {
						v.title = i(Q) ?? ``;
					});
				};
			h(l, (e) => {
				i(Q) && e(d);
			});
			var f = y(l, 2),
				p = (t) => {
					var n = x();
					(e(() => g(n, `content`, `${G() ?? ``}${i(st) ?? ``}`)), a(t, n));
				};
			h(f, (e) => {
				G() !== !1 && e(p);
			});
			var b = y(f, 2),
				U = (t) => {
					var n = S();
					(e(() => g(n, `content`, q())), a(t, n));
				};
			h(b, (e) => {
				q() && e(U);
			});
			var W = y(b, 2),
				K = (t) => {
					var n = C();
					(e(() => g(n, `href`, Z())), a(t, n));
				};
			h(W, (e) => {
				Z() && e(K);
			});
			var ct = y(W, 2),
				lt = (t) => {
					var n = w();
					(e((e) => g(n, `content`, e), [() => it().join(`, `)]), a(t, n));
				};
			h(ct, (e) => {
				it()?.length && e(lt);
			});
			var ut = y(ct, 2),
				dt = (t) => {
					var n = T();
					(e(() => {
						(g(n, `media`, J().media), g(n, `href`, J().href));
					}),
						a(t, n));
				};
			h(ut, (e) => {
				J() && e(dt);
			});
			var ft = y(ut, 2);
			t(
				ft,
				16,
				nt,
				(e) => e,
				(t, n) => {
					var r = T();
					(e(() => {
						(g(r, `hreflang`, n.hrefLang), g(r, `href`, n.href));
					}),
						a(t, r));
				}
			);
			var $ = y(ft, 2),
				pt = (t) => {
					var n = be(),
						r = u(n),
						o = (t) => {
							var n = ee();
							(e(() => g(n, `content`, Y().cardType)), a(t, n));
						};
					h(r, (e) => {
						Y().cardType && e(o);
					});
					var s = y(r, 2),
						c = (t) => {
							var n = E();
							(e(() => g(n, `content`, Y().site)), a(t, n));
						};
					h(s, (e) => {
						Y().site && e(c);
					});
					var l = y(s, 2),
						d = (t) => {
							var n = te();
							(e(() => g(n, `content`, Y().title || X()?.title || i(Q))), a(t, n));
						};
					h(l, (e) => {
						(Y().title || X()?.title || i(Q)) && e(d);
					});
					var f = y(l, 2),
						p = (t) => {
							var n = ne();
							(e(() => g(n, `content`, Y().description || X()?.description || q())),
								a(t, n));
						};
					h(f, (e) => {
						(Y().description || X()?.description || q()) && e(p);
					});
					var m = y(f, 2),
						_ = (t) => {
							var n = re();
							(e(() => g(n, `content`, Y().creator)), a(t, n));
						};
					h(m, (e) => {
						Y().creator && e(_);
					});
					var v = y(m, 2),
						b = (t) => {
							var n = ie();
							(e(() => g(n, `content`, Y().creatorId)), a(t, n));
						};
					h(v, (e) => {
						Y().creatorId && e(b);
					});
					var x = y(v, 2),
						S = (t) => {
							var n = ae();
							(e(() => g(n, `content`, Y().image)), a(t, n));
						};
					h(x, (e) => {
						Y().image && e(S);
					});
					var C = y(x, 2),
						w = (t) => {
							var n = oe();
							(e(() => g(n, `content`, Y().imageAlt)), a(t, n));
						};
					h(C, (e) => {
						Y().imageAlt && e(w);
					});
					var T = y(C, 2),
						xe = (t) => {
							var n = se();
							(e(() => g(n, `content`, Y().player)), a(t, n));
						};
					h(T, (e) => {
						Y().player && e(xe);
					});
					var D = y(T, 2),
						O = (t) => {
							var n = ce();
							(e((e) => g(n, `content`, e), [() => Y().playerWidth.toString()]), a(t, n));
						};
					h(D, (e) => {
						Y().playerWidth && e(O);
					});
					var k = y(D, 2),
						A = (t) => {
							var n = le();
							(e((e) => g(n, `content`, e), [() => Y().playerHeight.toString()]),
								a(t, n));
						};
					h(k, (e) => {
						Y().playerHeight && e(A);
					});
					var j = y(k, 2),
						M = (t) => {
							var n = ue();
							(e(() => g(n, `content`, Y().playerStream)), a(t, n));
						};
					h(j, (e) => {
						Y().playerStream && e(M);
					});
					var N = y(j, 2),
						P = (t) => {
							var n = de();
							(e(() => g(n, `content`, Y().appNameIphone)), a(t, n));
						};
					h(N, (e) => {
						Y().appNameIphone && e(P);
					});
					var F = y(N, 2),
						I = (t) => {
							var n = fe();
							(e(() => g(n, `content`, Y().appIdIphone)), a(t, n));
						};
					h(F, (e) => {
						Y().appIdIphone && e(I);
					});
					var L = y(F, 2),
						Se = (t) => {
							var n = pe();
							(e(() => g(n, `content`, Y().appUrlIphone)), a(t, n));
						};
					h(L, (e) => {
						Y().appUrlIphone && e(Se);
					});
					var R = y(L, 2),
						Ce = (t) => {
							var n = me();
							(e(() => g(n, `content`, Y().appNameIpad)), a(t, n));
						};
					h(R, (e) => {
						Y().appNameIpad && e(Ce);
					});
					var z = y(R, 2),
						we = (t) => {
							var n = he();
							(e(() => g(n, `content`, Y().appIdIpad)), a(t, n));
						};
					h(z, (e) => {
						Y().appIdIpad && e(we);
					});
					var B = y(z, 2),
						Te = (t) => {
							var n = ge();
							(e(() => g(n, `content`, Y().appUrlIpad)), a(t, n));
						};
					h(B, (e) => {
						Y().appUrlIpad && e(Te);
					});
					var V = y(B, 2),
						Ee = (t) => {
							var n = _e();
							(e(() => g(n, `content`, Y().appNameGoogleplay)), a(t, n));
						};
					h(V, (e) => {
						Y().appNameGoogleplay && e(Ee);
					});
					var H = y(V, 2),
						De = (t) => {
							var n = ve();
							(e(() => g(n, `content`, Y().appIdGoogleplay)), a(t, n));
						};
					h(H, (e) => {
						Y().appIdGoogleplay && e(De);
					});
					var Oe = y(H, 2),
						ke = (t) => {
							var n = ye();
							(e(() => g(n, `content`, Y().appUrlGoogleplay)), a(t, n));
						};
					(h(Oe, (e) => {
						Y().appUrlGoogleplay && e(ke);
					}),
						a(t, n));
				};
			h($, (e) => {
				Y() && e(pt);
			});
			var mt = y($, 2),
				ht = (t) => {
					var n = xe();
					(e(() => g(n, `content`, rt().appId)), a(t, n));
				};
			h(mt, (e) => {
				rt()?.appId && e(ht);
			});
			var gt = y(mt, 2),
				_t = (r) => {
					var o = Qe(),
						s = u(o),
						c = (t) => {
							var n = D();
							(e(() => g(n, `content`, X().url || Z())), a(t, n));
						};
					h(s, (e) => {
						(X().url || Z()) && e(c);
					});
					var l = y(s, 2),
						d = (n) => {
							var r = Ne(),
								o = u(r),
								s = y(o, 2),
								c = (t) => {
									var n = M(),
										r = u(n),
										i = (t) => {
											var n = O();
											(e(() => g(n, `content`, X().profile.firstName)), a(t, n));
										};
									h(r, (e) => {
										X().profile.firstName && e(i);
									});
									var o = y(r, 2),
										s = (t) => {
											var n = k();
											(e(() => g(n, `content`, X().profile.lastName)), a(t, n));
										};
									h(o, (e) => {
										X().profile.lastName && e(s);
									});
									var c = y(o, 2),
										l = (t) => {
											var n = A();
											(e(() => g(n, `content`, X().profile.username)), a(t, n));
										};
									h(c, (e) => {
										X().profile.username && e(l);
									});
									var d = y(c, 2),
										f = (t) => {
											var n = j();
											(e(() => g(n, `content`, X().profile.gender)), a(t, n));
										};
									(h(d, (e) => {
										X().profile.gender && e(f);
									}),
										a(t, n));
								},
								l = _(() => X().type.toLowerCase() === `profile` && X().profile),
								d = (n) => {
									var r = M(),
										i = u(r);
									t(
										i,
										16,
										() => X().book?.authors,
										(e) => e,
										(t, n) => {
											var r = N();
											(e(() => g(r, `content`, n)), a(t, r));
										}
									);
									var o = y(i, 2),
										s = (t) => {
											var n = P();
											(e(() => g(n, `content`, X().book.isbn)), a(t, n));
										};
									h(o, (e) => {
										X().book.isbn && e(s);
									});
									var c = y(o, 2),
										l = (t) => {
											var n = F();
											(e(() => g(n, `content`, X().book.releaseDate)), a(t, n));
										};
									h(c, (e) => {
										X().book.releaseDate && e(l);
									});
									var d = y(c, 2);
									(t(
										d,
										16,
										() => X().book?.tags,
										(e) => e,
										(t, n) => {
											var r = I();
											(e(() => g(r, `content`, n)), a(t, r));
										}
									),
										a(n, r));
								},
								f = _(() => X().type.toLowerCase() === `book` && X().book),
								p = (n) => {
									var r = B(),
										i = u(r),
										o = (t) => {
											var n = L();
											(e(() => g(n, `content`, X().article.publishedTime)), a(t, n));
										};
									h(i, (e) => {
										X().article.publishedTime && e(o);
									});
									var s = y(i, 2),
										c = (t) => {
											var n = Se();
											(e(() => g(n, `content`, X().article.modifiedTime)), a(t, n));
										};
									h(s, (e) => {
										X().article.modifiedTime && e(c);
									});
									var l = y(s, 2),
										d = (t) => {
											var n = R();
											(e(() => g(n, `content`, X().article.expirationTime)), a(t, n));
										};
									h(l, (e) => {
										X().article.expirationTime && e(d);
									});
									var f = y(l, 2);
									t(
										f,
										16,
										() => X().article?.authors,
										(e) => e,
										(t, n) => {
											var r = Ce();
											(e(() => g(r, `content`, n)), a(t, r));
										}
									);
									var p = y(f, 2),
										m = (t) => {
											var n = z();
											(e(() => g(n, `content`, X().article.section)), a(t, n));
										};
									h(p, (e) => {
										X().article.section && e(m);
									});
									var _ = y(p, 2);
									(t(
										_,
										16,
										() => X().article?.tags,
										(e) => e,
										(t, n) => {
											var r = we();
											(e(() => g(r, `content`, n)), a(t, r));
										}
									),
										a(n, r));
								},
								m = _(() => X().type.toLowerCase() === `article` && X().article),
								v = (n) => {
									var r = Me(),
										i = u(r);
									t(
										i,
										16,
										() => X().video?.actors,
										(e) => e,
										(t, n) => {
											var r = Ee(),
												i = u(r),
												o = (t) => {
													var r = Te();
													(e(() => g(r, `content`, n.profile)), a(t, r));
												};
											h(i, (e) => {
												n.profile && e(o);
											});
											var s = y(i, 2),
												c = (t) => {
													var r = V();
													(e(() => g(r, `content`, n.role)), a(t, r));
												};
											(h(s, (e) => {
												n.role && e(c);
											}),
												a(t, r));
										}
									);
									var o = y(i, 2);
									t(
										o,
										16,
										() => X().video?.directors,
										(e) => e,
										(t, n) => {
											var r = H();
											(e(() => g(r, `content`, n)), a(t, r));
										}
									);
									var s = y(o, 2);
									t(
										s,
										16,
										() => X().video?.writers,
										(e) => e,
										(t, n) => {
											var r = De();
											(e(() => g(r, `content`, n)), a(t, r));
										}
									);
									var c = y(s, 2),
										l = (t) => {
											var n = Oe();
											(e(
												(e) => g(n, `content`, e),
												[() => X().video.duration.toString()]
											),
												a(t, n));
										};
									h(c, (e) => {
										X().video?.duration && e(l);
									});
									var d = y(c, 2),
										f = (t) => {
											var n = ke();
											(e(() => g(n, `content`, X().video.releaseDate)), a(t, n));
										};
									h(d, (e) => {
										X().video?.releaseDate && e(f);
									});
									var p = y(d, 2);
									t(
										p,
										16,
										() => X().video?.tags,
										(e) => e,
										(t, n) => {
											var r = Ae();
											(e(() => g(r, `content`, n)), a(t, r));
										}
									);
									var m = y(p, 2),
										_ = (t) => {
											var n = je();
											(e(() => g(n, `content`, X().video.series)), a(t, n));
										};
									(h(m, (e) => {
										X().video?.series && e(_);
									}),
										a(n, r));
								},
								b = _(
									() =>
										[`video.movie`, `video.episode`, `video.tv_show`].includes(
											X().type.toLowerCase()
										) ||
										(X().type.toLowerCase() === `video.other` && X().video)
								);
							(h(s, (e) => {
								i(l) ? e(c) : i(f) ? e(d, 1) : i(m) ? e(p, 2) : i(b) && e(v, 3);
							}),
								e((e) => g(o, `content`, e), [() => X().type.toLowerCase()]),
								a(n, r));
						};
					h(l, (e) => {
						X().type && e(d);
					});
					var f = y(l, 2),
						p = (t) => {
							var n = Pe();
							(e(() => g(n, `content`, X().title || i(Q))), a(t, n));
						};
					h(f, (e) => {
						(X().title || i(Q)) && e(p);
					});
					var m = y(f, 2),
						v = (t) => {
							var n = Fe();
							(e(() => g(n, `content`, X().description || q())), a(t, n));
						};
					h(m, (e) => {
						(X().description || q()) && e(v);
					});
					var b = y(m, 2),
						x = (r) => {
							let o = _(() =>
								X().image ? [X().image, ...(X().images || [])] : X().images
							);
							var s = n(),
								c = u(s);
							(t(
								c,
								16,
								() => i(o),
								(e) => e,
								(t, n) => {
									var r = Ve(),
										i = u(r),
										o = y(i, 2),
										s = (t) => {
											var r = Ie();
											(e(() => g(r, `content`, n.alt)), a(t, r));
										};
									h(o, (e) => {
										n.alt && e(s);
									});
									var c = y(o, 2),
										l = (t) => {
											var r = Le();
											(e((e) => g(r, `content`, e), [() => n.width.toString()]), a(t, r));
										};
									h(c, (e) => {
										n.width && e(l);
									});
									var d = y(c, 2),
										f = (t) => {
											var r = Re();
											(e((e) => g(r, `content`, e), [() => n.height.toString()]),
												a(t, r));
										};
									h(d, (e) => {
										n.height && e(f);
									});
									var p = y(d, 2),
										m = (t) => {
											var r = ze();
											(e((e) => g(r, `content`, e), [() => n.secureUrl.toString()]),
												a(t, r));
										};
									h(p, (e) => {
										n.secureUrl && e(m);
									});
									var _ = y(p, 2),
										v = (t) => {
											var r = Be();
											(e((e) => g(r, `content`, e), [() => n.type.toString()]), a(t, r));
										};
									(h(_, (e) => {
										n.type && e(v);
									}),
										e(() => g(i, `content`, n.url)),
										a(t, r));
								}
							),
								a(r, s));
						};
					h(b, (e) => {
						(X().image || X().images?.length) && e(x);
					});
					var S = y(b, 2);
					t(
						S,
						16,
						() => X().videos,
						(e) => e,
						(t, n) => {
							var r = Ke(),
								i = u(r),
								o = y(i, 2),
								s = (t) => {
									var r = He();
									(e((e) => g(r, `content`, e), [() => n.width.toString()]), a(t, r));
								};
							h(o, (e) => {
								n.width && e(s);
							});
							var c = y(o, 2),
								l = (t) => {
									var r = Ue();
									(e((e) => g(r, `content`, e), [() => n.height.toString()]), a(t, r));
								};
							h(c, (e) => {
								n.height && e(l);
							});
							var d = y(c, 2),
								f = (t) => {
									var r = We();
									(e((e) => g(r, `content`, e), [() => n.secureUrl.toString()]), a(t, r));
								};
							h(d, (e) => {
								n.secureUrl && e(f);
							});
							var p = y(d, 2),
								m = (t) => {
									var r = Ge();
									(e((e) => g(r, `content`, e), [() => n.type.toString()]), a(t, r));
								};
							(h(p, (e) => {
								n.type && e(m);
							}),
								e(() => g(i, `content`, n.url)),
								a(t, r));
						}
					);
					var C = y(S, 2);
					t(
						C,
						16,
						() => X().audio,
						(e) => e,
						(t, n) => {
							var r = Ye(),
								i = u(r),
								o = y(i, 2),
								s = (t) => {
									var r = qe();
									(e((e) => g(r, `content`, e), [() => n.secureUrl.toString()]), a(t, r));
								};
							h(o, (e) => {
								n.secureUrl && e(s);
							});
							var c = y(o, 2),
								l = (t) => {
									var r = Je();
									(e((e) => g(r, `content`, e), [() => n.type.toString()]), a(t, r));
								};
							(h(c, (e) => {
								n.type && e(l);
							}),
								e(() => g(i, `content`, n.url)),
								a(t, r));
						}
					);
					var w = y(C, 2),
						T = (t) => {
							var n = Xe();
							(e(() => g(n, `content`, X().locale)), a(t, n));
						};
					h(w, (e) => {
						X().locale && e(T);
					});
					var ee = y(w, 2),
						E = (t) => {
							var n = Ze();
							(e(() => g(n, `content`, X().siteName)), a(t, n));
						};
					(h(ee, (e) => {
						X().siteName && e(E);
					}),
						a(r, o));
				};
			h(gt, (e) => {
				X() && e(_t);
			});
			var vt = y(gt, 2);
			t(
				vt,
				16,
				at,
				(e) => e,
				(e, t) => {
					let n = _(() => {
						let { httpEquiv: e, ...n } = t;
						return { httpEquiv: e, metaTag: n };
					});
					var r = $e();
					(m(r, (e) => ({ ...e }), [
						() =>
							i(n).httpEquiv
								? { ...i(n).metaTag, 'http-equiv': i(n).httpEquiv }
								: i(n).metaTag
					]),
						a(e, r));
				}
			);
			var yt = y(vt, 2);
			(t(
				yt,
				16,
				ot,
				(e) => e,
				(e, t) => {
					var n = et();
					(m(n, () => ({ ...t })), s(n), a(e, n));
				}
			),
				a(r, o));
		}),
		f());
}
function W(e, t) {
	b(t, !0);
	let r = l(t, `output`, 3, `head`),
		s = l(t, `schema`, 3, void 0),
		c = _(() => s() && typeof s() == `object`),
		p = (e) => {
			let t = (e) => ({ '@context': `https://schema.org`, ...e });
			return Array.isArray(e) ? e.map((e) => t(e)) : t(e);
		},
		m = _(() => JSON.stringify(p(s())).replace(/</g, `\\u003c`)),
		g = _(() => `<script type="application/ld+json">${i(m)}<\/script>`);
	var v = n();
	d(`ewfwwg`, (e) => {
		var t = n(),
			s = u(t),
			l = (e) => {
				var t = n(),
					r = u(t);
				(o(r, () => i(g)), a(e, t));
			};
		(h(s, (e) => {
			i(c) && r() === `head` && e(l);
		}),
			a(e, t));
	});
	var y = u(v),
		x = (e) => {
			var t = n(),
				r = u(t);
			(o(r, () => i(g)), a(e, t));
		};
	(h(y, (e) => {
		i(c) && r() === `body` && e(x);
	}),
		a(e, v),
		f());
}
export { U as n, W as t };
