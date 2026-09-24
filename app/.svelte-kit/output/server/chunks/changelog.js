import './index-server.js';
import {
	E as clsx,
	O as escape_html,
	T as attr,
	a as derived,
	d as spread_props,
	f as stringify,
	i as bind_props,
	l as props_id,
	r as attributes,
	s as ensure_array_like,
	t as attr_class,
	y as createContext
} from './server2.js';
import {
	a as formatDate,
	d as patchHeading,
	f as plural,
	i as entityFragmentId,
	o as formatDateShort,
	p as resolveHeroAbilitySlug
} from './src2.js';
import { n as filtersToSearchParams, t as changelogsListKey } from './keys.js';
import {
	a as queryFeed,
	i as assembleSummaries,
	n as feedWindow,
	o as resolveEntityIds
} from './pages.js';
import { u as changePath } from './seo.js';
import { n as page, t as Icon } from './Icon.js';
import {
	C as replaceData,
	Ct as boxWith,
	D as timeUntilStale,
	L as setEntityIcons,
	M as hasEntity,
	N as changeCountLabel,
	O as timeoutManager,
	P as entityPatchHref,
	R as searchParams,
	T as shallowEqualObjects,
	_t as Context,
	a as fetchState,
	bt as mergeProps,
	ct as createBitsAttrs,
	d as notifyManager,
	dt as DOMContext,
	f as focusManager,
	gt as watch,
	j as ENTITY_TONE,
	k as HeroRail,
	m as isServer,
	n as getQueryClientContext,
	o as hasNextPage,
	p as Subscribable,
	s as hasPreviousPage,
	t as getIsRestoringContext,
	tt as createId,
	ut as attachRef,
	v as isValidTimeout,
	vt as SvelteSet,
	w as resolveQueryValue,
	x as noop$1
} from './context.js';
import { t as Arrow_right } from './arrow-right.js';
import { t as CornerAccents } from './CornerAccents.js';
import { a as setReadingContext } from './readingContext.js';
//#region ../lib/utils/src/author.ts
/**
 * Author identity, shared by the scraper, the OG renderer and the site.
 *
 * Steam anonymizes announcement posters (both the news API and the events API report
 * `posterid: 0`), so there is no per-author picture to scrape for simonne, IceFrog or
 * anyone else who only ever appears in a Steam announcement. The forum does expose an
 * avatar, so scraping it bought a picture for exactly one author. The pictures are now
 * static files in `app/static/assets/authors/`, mapped by name below.
 */
/** Whitespace and camelCase both split a name: "IceFrog" → "IF", "JP Morgan" → "JM". */
function nameWords(author) {
	return author
		.split(/\s+/)
		.flatMap((word) => word.split(/(?<=\p{Ll})(?=\p{Lu})/u))
		.filter((word) => /^[\p{L}\p{N}]/u.test(word));
}
function authorInitials(author) {
	const [first, second] = nameWords(author);
	if (!first) return '?';
	const chars = [...first];
	return (second ? chars[0] + [...second][0] : chars.slice(0, 2).join('')).toUpperCase();
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/avatar/avatar.svelte.js
var avatarAttrs = createBitsAttrs({
	component: 'avatar',
	parts: ['root', 'image', 'fallback']
});
var AvatarRootContext = new Context('Avatar.Root');
var AvatarRootState = class AvatarRootState {
	static create(opts) {
		return AvatarRootContext.set(new AvatarRootState(opts));
	}
	opts;
	domContext;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(this.opts.ref);
		this.loadImage = this.loadImage.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	loadImage(src, crossorigin, referrerPolicy) {
		if (this.opts.loadingStatus.current === 'loaded') return;
		let imageTimerId;
		const image = new Image();
		image.src = src;
		if (crossorigin !== void 0) image.crossOrigin = crossorigin;
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		this.opts.loadingStatus.current = 'loading';
		image.onload = () => {
			imageTimerId = this.domContext.setTimeout(() => {
				this.opts.loadingStatus.current = 'loaded';
			}, this.opts.delayMs.current);
		};
		image.onerror = () => {
			this.opts.loadingStatus.current = 'error';
		};
		return () => {
			image.onload = null;
			image.onerror = null;
			if (!imageTimerId) return;
			this.domContext.clearTimeout(imageTimerId);
		};
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		[avatarAttrs.root]: '',
		'data-status': this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AvatarImageState = class AvatarImageState {
	static create(opts) {
		return new AvatarImageState(opts, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
		watch.pre(
			[() => this.opts.src.current, () => this.opts.crossOrigin.current],
			([src, crossOrigin]) => {
				if (!src) {
					this.root.opts.loadingStatus.current = 'error';
					return;
				}
				return this.root.loadImage(src, crossOrigin, this.opts.referrerPolicy.current);
			}
		);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		style: {
			display: this.root.opts.loadingStatus.current === 'loaded' ? 'block' : 'none'
		},
		'data-status': this.root.opts.loadingStatus.current,
		[avatarAttrs.image]: '',
		src: this.opts.src.current,
		crossorigin: this.opts.crossOrigin.current,
		referrerpolicy: this.opts.referrerPolicy.current,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AvatarFallbackState = class AvatarFallbackState {
	static create(opts) {
		return new AvatarFallbackState(opts, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#style = derived(() =>
		this.root.opts.loadingStatus.current === 'loaded' ? { display: 'none' } : void 0
	);
	get style() {
		return this.#style();
	}
	set style($$value) {
		return this.#style($$value);
	}
	#props = derived(() => ({
		style: this.style,
		'data-status': this.root.opts.loadingStatus.current,
		[avatarAttrs.fallback]: '',
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/avatar/components/avatar.svelte
function Avatar$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			delayMs = 0,
			loadingStatus = 'loading',
			onLoadingStatusChange,
			child,
			children,
			id = createId(uid),
			ref = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const rootState = AvatarRootState.create({
			delayMs: boxWith(() => delayMs),
			loadingStatus: boxWith(
				() => loadingStatus,
				(v) => {
					if (loadingStatus !== v) {
						loadingStatus = v;
						onLoadingStatusChange?.(v);
					}
				}
			),
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			loadingStatus,
			ref
		});
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/avatar/components/avatar-image.svelte
function Avatar_image$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			src,
			child,
			id = createId(uid),
			ref = null,
			crossorigin = void 0,
			referrerpolicy = void 0,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const imageState = AvatarImageState.create({
			src: boxWith(() => src),
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			),
			crossOrigin: boxWith(() => crossorigin),
			referrerPolicy: boxWith(() => referrerpolicy)
		});
		const mergedProps = derived(() => mergeProps(restProps, imageState.props));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else
			$$renderer.push(
				`<!--[-1--><img${attributes({
					...mergedProps(),
					src
				})} onload="this.__e=event" onerror="this.__e=event"/>`
			);
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/bits-ui@2.19.2_@internationalized+date@3.12.4_@sveltejs+kit@2.70.3_@sveltejs+vite-plugi_933aae1cdae612473bde42c95dc81621/node_modules/bits-ui/dist/bits/avatar/components/avatar-fallback.svelte
function Avatar_fallback$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let {
			children,
			child,
			id = createId(uid),
			ref = null,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		const fallbackState = AvatarFallbackState.create({
			id: boxWith(() => id),
			ref: boxWith(
				() => ref,
				(v) => (ref = v)
			)
		});
		const mergedProps = derived(() => mergeProps(restProps, fallbackState.props));
		if (child) {
			$$renderer.push('<!--[0-->');
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push(`<!--[-1--><span${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></span>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/queryObserver.js
/**
 * A `QueryObserver` watches a single query in the `QueryCache` and computes a
 * `QueryObserverResult` from its state, recomputing and notifying subscribers
 * whenever the underlying query (or the observer's options) changes. It is
 * the primitive that framework adapters (e.g. `useQuery`) build their hooks
 * on top of, but it can also be used directly to observe and switch between
 * queries outside of any framework.
 *
 * @example
 * ```ts
 * const observer = new QueryObserver(queryClient, {
 *   queryKey: ['posts'],
 *   queryFn: fetchPosts,
 * })
 *
 * const unsubscribe = observer.subscribe((result) => {
 *   console.log(result.data)
 * })
 * ```
 */
var QueryObserver = class extends Subscribable {
	#client;
	#currentQuery = void 0;
	#currentQueryInitialState = void 0;
	#currentResult = void 0;
	#currentResultState;
	#currentResultOptions;
	#selectError;
	#selectFn;
	#selectResult;
	#lastQueryWithDefinedData;
	#staleTimeoutId;
	#refetchIntervalId;
	#currentRefetchInterval;
	#trackedProps = /* @__PURE__ */ new Set();
	constructor(client, options) {
		super();
		this.options = options;
		this.#client = client;
		this.#selectError = null;
		this.bindMethods();
		this.setOptions(options);
	}
	bindMethods() {
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		if (this.listeners.size === 1) {
			this.#currentQuery.addObserver(this);
			if (shouldFetchOnMount(this.#currentQuery, this.options)) this.#executeFetch();
			else this.updateResult();
			this.#updateTimers();
		}
	}
	onUnsubscribe() {
		if (!this.hasListeners()) this.destroy();
	}
	/**
	 * Returns whether the observed query is currently stale and configured
	 * (via the `refetchOnReconnect` option) to refetch when the network
	 * reconnects.
	 */
	shouldFetchOnReconnect() {
		return shouldFetchOn(
			this.#currentQuery,
			this.options,
			this.options.refetchOnReconnect
		);
	}
	/**
	 * Returns whether the observed query is currently stale and configured
	 * (via the `refetchOnWindowFocus` option) to refetch when the window
	 * regains focus.
	 */
	shouldFetchOnWindowFocus() {
		return shouldFetchOn(
			this.#currentQuery,
			this.options,
			this.options.refetchOnWindowFocus
		);
	}
	/**
	 * Stops observing the current query: clears all listeners, cancels the
	 * stale and refetch-interval timers, and removes this observer from the
	 * query it was observing.
	 */
	destroy() {
		this.listeners = /* @__PURE__ */ new Set();
		this.#clearStaleTimeout();
		this.#clearRefetchInterval();
		this.#currentQuery.removeObserver(this);
	}
	/**
	 * Updates the observer's options. This will re-resolve the query being
	 * observed (switching to a different query if the `queryKey` changed),
	 * trigger a fetch if the new options require one and the observer has
	 * subscribers, recompute the current result, and reschedule the stale and
	 * refetch-interval timers as needed.
	 *
	 * @example
	 * ```ts
	 * observer.setOptions({ queryKey: ['posts', 1], queryFn: () => fetchPost(1) })
	 * // later: switch to a different query, reusing the same observer
	 * observer.setOptions({ queryKey: ['posts', 2], queryFn: () => fetchPost(2) })
	 * ```
	 */
	setOptions(options) {
		const prevOptions = this.options;
		const prevQuery = this.#currentQuery;
		this.options = this.#client.defaultQueryOptions(options);
		if (
			this.options.enabled !== void 0 &&
			typeof this.options.enabled !== 'boolean' &&
			typeof this.options.enabled !== 'function' &&
			typeof resolveQueryValue(this.options.enabled, this.#currentQuery) !== 'boolean'
		)
			throw new Error(
				'Expected enabled to be a boolean or a callback that returns a boolean'
			);
		this.#updateQuery();
		this.#currentQuery.setOptions(this.options);
		if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions))
			this.#client.getQueryCache().notify({
				type: 'observerOptionsUpdated',
				query: this.#currentQuery,
				observer: this
			});
		const mounted = this.hasListeners();
		if (
			mounted &&
			shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)
		)
			this.#executeFetch();
		this.updateResult();
		if (
			mounted &&
			(this.#currentQuery !== prevQuery ||
				resolveQueryValue(this.options.enabled, this.#currentQuery) !==
					resolveQueryValue(prevOptions.enabled, this.#currentQuery) ||
				resolveQueryValue(this.options.staleTime, this.#currentQuery) !==
					resolveQueryValue(prevOptions.staleTime, this.#currentQuery))
		)
			this.#updateStaleTimeout();
		const nextRefetchInterval = this.#computeRefetchInterval();
		if (
			mounted &&
			(this.#currentQuery !== prevQuery ||
				resolveQueryValue(this.options.enabled, this.#currentQuery) !==
					resolveQueryValue(prevOptions.enabled, this.#currentQuery) ||
				nextRefetchInterval !== this.#currentRefetchInterval)
		)
			this.#updateRefetchInterval(nextRefetchInterval);
	}
	/**
	 * Computes the result the observer would produce for the given (already-defaulted) options
	 * right now, building the underlying `Query` if it doesn't exist yet, without waiting for a
	 * subscription callback. Called by framework adapters on every render (e.g. `useQuery`) so the
	 * returned value is available synchronously, ahead of `setOptions` triggering an actual fetch.
	 */
	getOptimisticResult(options) {
		const query = this.#client.getQueryCache().build(this.#client, options);
		const result = this.createResult(query, options);
		if (!shallowEqualObjects(this.getCurrentResult(), result)) {
			this.#currentResult = result;
			this.#currentResultOptions = this.options;
			this.#currentResultState = this.#currentQuery.state;
		}
		return result;
	}
	/**
	 * Returns the most recently computed `QueryObserverResult` for the
	 * observed query. This is a point-in-time read; to be notified of updates
	 * as they happen, subscribe to the observer instead (its inherited
	 * `subscribe` method).
	 *
	 * @example
	 * ```ts
	 * const result = observer.getCurrentResult()
	 * console.log(result.status, result.data)
	 * ```
	 */
	getCurrentResult() {
		return this.#currentResult;
	}
	/**
	 * Wraps a `QueryObserverResult` in a `Proxy` that records which properties are read, via
	 * {@link QueryObserver#trackProp} (and an optional `onPropTracked` callback). Used by framework
	 * adapters when `notifyOnChangeProps` is not set, to implement its default "only re-render on
	 * properties you actually read" behavior.
	 */
	trackResult(result, onPropTracked) {
		return new Proxy(result, {
			get: (target, key) => {
				this.trackProp(key);
				onPropTracked?.(key);
				return Reflect.get(target, key);
			}
		});
	}
	/**
	 * Records that the given `QueryObserverResult` property was read, so a subsequent update only
	 * notifies this observer if a tracked property actually changed. Normally called indirectly via
	 * {@link QueryObserver#trackResult}'s proxy; exposed directly for adapters that track property
	 * access themselves (e.g. through their own reactivity system) instead of via the proxy.
	 */
	trackProp(key) {
		this.#trackedProps.add(key);
	}
	/**
	 * Returns the `Query` instance this observer is currently observing.
	 */
	getCurrentQuery() {
		return this.#currentQuery;
	}
	/**
	 * Refetches the observed query and returns a promise that resolves with
	 * the resulting `QueryObserverResult`.
	 *
	 * @example
	 * ```ts
	 * const result = await observer.refetch({ cancelRefetch: false })
	 * console.log(result.data)
	 * ```
	 */
	refetch({ ...options } = {}) {
		return this.fetch({ ...options });
	}
	/**
	 * Fetches a query defined by the given options without affecting this
	 * observer's own tracked query or result, and returns a promise that
	 * resolves with the `QueryObserverResult` for that fetch. This is useful
	 * for prefetching data that another observer (e.g. a query about to be
	 * navigated to) will need, ahead of time.
	 *
	 * @example
	 * ```ts
	 * const result = await observer.fetchOptimistic({
	 *   queryKey: ['posts', 2],
	 *   queryFn: () => fetchPost(2),
	 * })
	 * console.log(result.data)
	 * ```
	 */
	fetchOptimistic(options) {
		const defaultedOptions = this.#client.defaultQueryOptions(options);
		const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
		let unsubscribe = () => {};
		let resolveEarly;
		const cachePromise = new Promise((resolve) => {
			resolveEarly = resolve;
			unsubscribe = this.#client.getQueryCache().subscribe((event) => {
				if (
					event.type === 'updated' &&
					event.query.queryHash === query.queryHash &&
					query.state.data !== void 0
				) {
					unsubscribe();
					resolve(this.createResult(query, defaultedOptions));
				}
			});
		});
		return Promise.race([
			query
				.fetch()
				.then(() => {
					const result = this.createResult(query, defaultedOptions);
					resolveEarly?.(result);
					return result;
				})
				.finally(() => {
					unsubscribe();
				}),
			cachePromise
		]);
	}
	fetch(fetchOptions) {
		return this.#executeFetch({
			...fetchOptions,
			cancelRefetch: fetchOptions.cancelRefetch ?? true
		}).then(() => {
			this.updateResult();
			return this.#currentResult;
		});
	}
	#executeFetch(fetchOptions) {
		this.#updateQuery();
		let promise = this.#currentQuery.fetch(this.options, fetchOptions);
		if (!fetchOptions?.throwOnError) promise = promise.catch(noop$1);
		return promise;
	}
	#shouldScheduleTimer(timeout) {
		return (
			!isServer() &&
			resolveQueryValue(this.options.enabled, this.#currentQuery) !== false &&
			isValidTimeout(timeout)
		);
	}
	#updateStaleTimeout() {
		this.#clearStaleTimeout();
		const staleTime = resolveQueryValue(this.options.staleTime, this.#currentQuery);
		if (this.#currentResult.isStale || !this.#shouldScheduleTimer(staleTime)) return;
		const timeout = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime) + 1;
		this.#staleTimeoutId = timeoutManager.setTimeout(() => {
			if (!this.#currentResult.isStale) this.updateResult();
		}, timeout);
	}
	#computeRefetchInterval() {
		return resolveQueryValue(this.options.refetchInterval, this.#currentQuery) ?? false;
	}
	#updateRefetchInterval(nextInterval) {
		this.#clearRefetchInterval();
		this.#currentRefetchInterval = nextInterval;
		if (
			this.#currentRefetchInterval === 0 ||
			!this.#shouldScheduleTimer(this.#currentRefetchInterval)
		)
			return;
		this.#refetchIntervalId = timeoutManager.setInterval(() => {
			if (this.options.refetchIntervalInBackground || focusManager.isFocused())
				this.#executeFetch();
		}, this.#currentRefetchInterval);
	}
	#updateTimers() {
		this.#updateStaleTimeout();
		this.#updateRefetchInterval(this.#computeRefetchInterval());
	}
	#clearStaleTimeout() {
		if (this.#staleTimeoutId !== void 0) {
			timeoutManager.clearTimeout(this.#staleTimeoutId);
			this.#staleTimeoutId = void 0;
		}
	}
	#clearRefetchInterval() {
		if (this.#refetchIntervalId !== void 0) {
			timeoutManager.clearInterval(this.#refetchIntervalId);
			this.#refetchIntervalId = void 0;
		}
	}
	createResult(query, options) {
		const prevQuery = this.#currentQuery;
		const prevOptions = this.options;
		const prevResult = this.#currentResult;
		const prevResultState = this.#currentResultState;
		const prevResultOptions = this.#currentResultOptions;
		const queryInitialState =
			query !== prevQuery ? query.state : this.#currentQueryInitialState;
		const { state } = query;
		let newState = { ...state };
		let isPlaceholderData = false;
		let data;
		if (options._optimisticResults) {
			const mounted = this.hasListeners();
			const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
			const fetchOptionally =
				mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
			if (fetchOnMount || fetchOptionally)
				newState = {
					...newState,
					...fetchState(state.data, query.options)
				};
			if (options._optimisticResults === 'isRestoring') newState.fetchStatus = 'idle';
		}
		let { error, errorUpdatedAt, status } = newState;
		data = newState.data;
		let skipSelect = false;
		if (options.placeholderData !== void 0 && data === void 0 && status === 'pending') {
			let placeholderData;
			if (
				prevResult?.isPlaceholderData &&
				options.placeholderData === prevResultOptions?.placeholderData
			) {
				placeholderData = prevResult.data;
				skipSelect = true;
			} else
				placeholderData =
					typeof options.placeholderData === 'function'
						? options.placeholderData(
								this.#lastQueryWithDefinedData?.state.data,
								this.#lastQueryWithDefinedData
							)
						: options.placeholderData;
			if (placeholderData !== void 0) {
				status = 'success';
				data = replaceData(prevResult?.data, placeholderData, options);
				isPlaceholderData = true;
			}
		}
		if (options.select && data !== void 0 && !skipSelect) {
			if (
				prevResult &&
				data === prevResultState?.data &&
				options.select === this.#selectFn
			)
				data = this.#selectResult;
			else
				try {
					this.#selectFn = options.select;
					data = options.select(data);
					data = replaceData(prevResult?.data, data, options);
					this.#selectResult = data;
					this.#selectError = null;
				} catch (selectError) {
					this.#selectError = selectError;
				}
		} else if (data === void 0) this.#selectError = null;
		if (this.#selectError) {
			error = this.#selectError;
			data = this.#selectResult;
			errorUpdatedAt = Date.now();
			status = 'error';
			isPlaceholderData = false;
		}
		const isFetching = newState.fetchStatus === 'fetching';
		const isPending = status === 'pending';
		const isError = status === 'error';
		const isLoading = isPending && isFetching;
		const hasData = data !== void 0;
		return {
			status,
			fetchStatus: newState.fetchStatus,
			isPending,
			isSuccess: status === 'success',
			isError,
			isInitialLoading: isLoading,
			isLoading,
			data,
			dataUpdatedAt: newState.dataUpdatedAt,
			error,
			errorUpdatedAt,
			failureCount: newState.fetchFailureCount,
			failureReason: newState.fetchFailureReason,
			errorUpdateCount: newState.errorUpdateCount,
			isFetched: query.isFetched(),
			isFetchedAfterMount:
				newState.dataUpdateCount > queryInitialState.dataUpdateCount ||
				newState.errorUpdateCount > queryInitialState.errorUpdateCount,
			isFetching,
			isRefetching: isFetching && !isPending,
			isLoadingError: isError && !hasData,
			isPaused: newState.fetchStatus === 'paused',
			isPlaceholderData,
			isRefetchError: isError && hasData,
			isStale: isStale(query, options),
			refetch: this.refetch,
			isEnabled: resolveQueryValue(options.enabled, query) !== false
		};
	}
	/**
	 * Recomputes and stores the current result from the current query/options, notifying listeners
	 * if it changed. Framework adapters call this right after subscribing to make sure no query
	 * update was missed in the gap between creating the observer and subscribing to it.
	 */
	updateResult() {
		const prevResult = this.#currentResult;
		const nextResult = this.createResult(this.#currentQuery, this.options);
		this.#currentResultState = this.#currentQuery.state;
		this.#currentResultOptions = this.options;
		if (this.#currentResultState.data !== void 0)
			this.#lastQueryWithDefinedData = this.#currentQuery;
		if (shallowEqualObjects(nextResult, prevResult)) return;
		this.#currentResult = nextResult;
		const shouldNotifyListeners = () => {
			if (!prevResult) return true;
			const { notifyOnChangeProps } = this.options;
			const notifyOnChangePropsValue =
				typeof notifyOnChangeProps === 'function'
					? notifyOnChangeProps()
					: notifyOnChangeProps;
			if (
				notifyOnChangePropsValue === 'all' ||
				(!notifyOnChangePropsValue && !this.#trackedProps.size)
			)
				return true;
			const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
			if (this.options.throwOnError) includedProps.add('error');
			return Object.keys(this.#currentResult).some((key) => {
				const typedKey = key;
				return (
					this.#currentResult[typedKey] !== prevResult[typedKey] &&
					includedProps.has(typedKey)
				);
			});
		};
		const notifyListeners = shouldNotifyListeners();
		notifyManager.batch(() => {
			if (notifyListeners)
				this.listeners.forEach((listener) => {
					listener(this.#currentResult);
				});
			this.#client.getQueryCache().notify({
				query: this.#currentQuery,
				type: 'observerResultsUpdated'
			});
		});
	}
	#updateQuery() {
		const query = this.#client.getQueryCache().build(this.#client, this.options);
		if (query === this.#currentQuery) return;
		const prevQuery = this.#currentQuery;
		this.#currentQuery = query;
		this.#currentQueryInitialState = query.state;
		if (this.hasListeners()) {
			prevQuery?.removeObserver(this);
			query.addObserver(this);
		}
	}
	/** @internal */
	onQueryUpdate() {
		this.updateResult();
		if (this.hasListeners()) this.#updateTimers();
	}
};
function shouldLoadOnMount(query, options) {
	return (
		resolveQueryValue(options.enabled, query) !== false &&
		query.state.data === void 0 &&
		!(
			query.state.status === 'error' &&
			resolveQueryValue(options.retryOnMount, query) === false
		)
	);
}
function shouldFetchOnMount(query, options) {
	return (
		shouldLoadOnMount(query, options) ||
		(query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount))
	);
}
function shouldFetchOn(query, options, field) {
	if (
		resolveQueryValue(options.enabled, query) !== false &&
		resolveQueryValue(options.staleTime, query) !== 'static'
	) {
		const value = resolveQueryValue(field, query);
		return value === 'always' || (value !== false && isStale(query, options));
	}
	return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
	return (
		(query !== prevQuery || resolveQueryValue(prevOptions.enabled, query) === false) &&
		(!options.suspense || query.state.status !== 'error') &&
		isStale(query, options)
	);
}
function isStale(query, options) {
	return (
		resolveQueryValue(options.enabled, query) !== false &&
		query.isStaleByTime(resolveQueryValue(options.staleTime, query))
	);
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
/**
 * An `InfiniteQueryObserver` extends `QueryObserver` to observe and switch
 * between infinite queries. It augments the base `QueryObserverResult` with
 * infinite-query-specific fields and methods, such as `hasNextPage` and
 * `fetchNextPage`, and is the primitive that framework adapters (e.g.
 * `useInfiniteQuery`) build their hooks on top of.
 *
 * @example
 * ```ts
 * const observer = new InfiniteQueryObserver(queryClient, {
 *   queryKey: ['projects'],
 *   queryFn: ({ pageParam }) => fetchProjects(pageParam),
 *   initialPageParam: 0,
 *   getNextPageParam: (lastPage) => lastPage.nextCursor,
 * })
 *
 * const unsubscribe = observer.subscribe((result) => console.log(result))
 * ```
 */
var InfiniteQueryObserver = class extends QueryObserver {
	constructor(client, options) {
		super(client, options);
	}
	bindMethods() {
		super.bindMethods();
		this.fetchNextPage = this.fetchNextPage.bind(this);
		this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
	}
	/**
	 * Updates the observer's options. Behaves the same as
	 * `QueryObserver.setOptions`, additionally marking the options as
	 * belonging to an infinite query before delegating to the base
	 * implementation.
	 */
	setOptions(options) {
		options._type = 'infinite';
		super.setOptions(options);
	}
	/**
	 * The infinite-query counterpart of {@link QueryObserver#getOptimisticResult}, marking the
	 * options as an infinite query before delegating to it. Called by framework adapters (e.g.
	 * `useInfiniteQuery`) ahead of subscribing, to compute the current `InfiniteQueryObserverResult`
	 * synchronously.
	 */
	getOptimisticResult(options) {
		options._type = 'infinite';
		return super.getOptimisticResult(options);
	}
	/**
	 * Fetches the next page of the infinite query and returns a promise that
	 * resolves with the resulting `InfiniteQueryObserverResult`. The page
	 * param used for the fetch is determined by `getNextPageParam`, which
	 * receives the current pages/page params and whose result also determines
	 * `hasNextPage`.
	 *
	 * @example
	 * ```ts
	 * const { hasNextPage } = observer.getCurrentResult()
	 *
	 * if (hasNextPage) {
	 *   await observer.fetchNextPage()
	 * }
	 * ```
	 *
	 * @see {@link InfiniteQueryObserver#fetchPreviousPage}
	 */
	fetchNextPage(options) {
		return this.fetch({
			...options,
			meta: { fetchMore: { direction: 'forward' } }
		});
	}
	/**
	 * Fetches the previous page of the infinite query and returns a promise
	 * that resolves with the resulting `InfiniteQueryObserverResult`. The page
	 * param used for the fetch is determined by `getPreviousPageParam`, which
	 * receives the current pages/page params and whose result also determines
	 * `hasPreviousPage`.
	 *
	 * @example
	 * ```ts
	 * const { hasPreviousPage } = observer.getCurrentResult()
	 *
	 * if (hasPreviousPage) {
	 *   await observer.fetchPreviousPage()
	 * }
	 * ```
	 *
	 * @see {@link InfiniteQueryObserver#fetchNextPage}
	 */
	fetchPreviousPage(options) {
		return this.fetch({
			...options,
			meta: { fetchMore: { direction: 'backward' } }
		});
	}
	createResult(query, options) {
		const { state } = query;
		const parentResult = super.createResult(query, options);
		const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
		const fetchDirection = state.fetchMeta?.fetchMore?.direction;
		const isFetchNextPageError = isError && fetchDirection === 'forward';
		const isFetchingNextPage = isFetching && fetchDirection === 'forward';
		const isFetchPreviousPageError = isError && fetchDirection === 'backward';
		const isFetchingPreviousPage = isFetching && fetchDirection === 'backward';
		return {
			...parentResult,
			fetchNextPage: this.fetchNextPage,
			fetchPreviousPage: this.fetchPreviousPage,
			hasNextPage: hasNextPage(options, state.data),
			hasPreviousPage: hasPreviousPage(options, state.data),
			isFetchNextPageError,
			isFetchingNextPage,
			isFetchPreviousPageError,
			isFetchingPreviousPage,
			isRefetchError:
				isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
			isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
		};
	}
};
//#endregion
//#region ../node_modules/.pnpm/@tanstack+svelte-query@6.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@tanstack/svelte-query/dist/useIsRestoring.js
function useIsRestoring() {
	return getIsRestoringContext();
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+svelte-query@6.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@tanstack/svelte-query/dist/useQueryClient.js
function useQueryClient(queryClient) {
	if (queryClient) return queryClient;
	return getQueryClientContext();
}
/**
 * Makes all of the top-level keys of an object into $state.raw fields whose initial values
 * are the same as in the original object. Does not mutate the original object. Provides an `update`
 * function that _can_ (but does not have to be) be used to replace all of the object's top-level keys
 * with the values of the new object, while maintaining the original root object's reference.
 */
function createRawRef(init) {
	const refObj = Array.isArray(init) ? [] : {};
	const hiddenKeys = new SvelteSet();
	let keyVersion = 0;
	const out = new Proxy(refObj, {
		get(target, prop, receiver) {
			if (
				hiddenKeys.has(prop) ||
				!(prop in target) ||
				(Array.isArray(target) && prop === 'length')
			) {
			}
			return Reflect.get(target, prop, receiver);
		},
		set(target, prop, value, receiver) {
			hiddenKeys.delete(prop);
			if (prop in target) return Reflect.set(target, prop, value, receiver);
			let state = value;
			Object.defineProperty(target, prop, {
				configurable: true,
				enumerable: true,
				get: () => {
					return state && isBranded(state) ? state() : state;
				},
				set: (v) => {
					state = v;
				}
			});
			return true;
		},
		has: (target, prop) => {
			if (hiddenKeys.has(prop)) return false;
			return prop in target;
		},
		ownKeys(target) {
			return Reflect.ownKeys(target).filter((key) => !hiddenKeys.has(key));
		},
		getOwnPropertyDescriptor(target, prop) {
			if (hiddenKeys.has(prop)) return;
			return Reflect.getOwnPropertyDescriptor(target, prop);
		},
		deleteProperty(target, prop) {
			if (prop in target) {
				target[prop] = void 0;
				hiddenKeys.add(prop);
				if (Array.isArray(target)) target.length--;
				return true;
			}
			return false;
		}
	});
	function update(newValue) {
		const existingKeys = Object.keys(out);
		const newKeys = Object.keys(newValue);
		const keysToRemove = existingKeys.filter((key) => !newKeys.includes(key));
		if (Array.isArray(newValue)) keysToRemove.sort((a, b) => Number(b) - Number(a));
		const keysAdded = newKeys.some((key) => !existingKeys.includes(key));
		for (const key of keysToRemove) delete out[key];
		for (const key of newKeys) out[key] = brand(() => newValue[key]);
		if (keysAdded || keysToRemove.length > 0) keyVersion++;
	}
	update(init);
	return [out, update];
}
var lazyBrand = Symbol('LazyValue');
function brand(fn) {
	fn[lazyBrand] = true;
	return fn;
}
function isBranded(fn) {
	return Boolean(fn[lazyBrand]);
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+svelte-query@6.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@tanstack/svelte-query/dist/createBaseQuery.svelte.js
function createBaseQuery(options, Observer, queryClient) {
	/** Load query client */
	const client = derived(() => useQueryClient(queryClient?.()));
	const isRestoring = useIsRestoring();
	const resolvedOptions = derived(() => {
		const opts = client().defaultQueryOptions(options());
		opts._optimisticResults = isRestoring.current ? 'isRestoring' : 'optimistic';
		return opts;
	});
	/** Creates the observer */
	let observer = new Observer(client(), resolvedOptions());
	function createResult() {
		const result = observer.getOptimisticResult(resolvedOptions());
		return !resolvedOptions().notifyOnChangeProps ? observer.trackResult(result) : result;
	}
	const [query, update] = createRawRef(createResult());
	return query;
}
//#endregion
//#region ../node_modules/.pnpm/@tanstack+svelte-query@6.2.1_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@tanstack/svelte-query/dist/createInfiniteQuery.js
function createInfiniteQuery(options, queryClient) {
	return createBaseQuery(options, InfiniteQueryObserver, queryClient);
}
//#endregion
//#region src/lib/feed/load.ts
var indexPromise = null;
var textPromise = null;
var groupsPromise = null;
async function fetchJson(path, signal) {
	const response = await fetch(path, { signal });
	if (!response.ok)
		throw new Error(`Failed to load ${path}: ${response.status} ${response.statusText}`);
	return await response.json();
}
function loadFeedIndex() {
	indexPromise ??= fetchJson('/feed-index.json').catch((error) => {
		indexPromise = null;
		throw error;
	});
	return indexPromise;
}
function loadFeedText() {
	textPromise ??= fetchJson('/feed-text.json').catch((error) => {
		textPromise = null;
		throw error;
	});
	return textPromise;
}
function loadFeedGroups() {
	groupsPromise ??= fetchJson('/feed-groups.json').catch((error) => {
		groupsPromise = null;
		throw error;
	});
	return groupsPromise;
}
function loadFeedPage(page, signal) {
	return fetchJson(`/feed-page/${page}.json`, signal);
}
//#endregion
//#region src/lib/hooks/useChangelogQuery.svelte.ts
function isUnfiltered(filters) {
	return filtersToSearchParams(filters).size === 0;
}
function useChangelogQuery(options) {
	return createInfiniteQuery(() => {
		const seed = options.getSeed();
		const filters = searchParams.filters;
		return {
			queryKey: changelogsListKey(filters),
			initialData: isUnfiltered(filters)
				? {
						pages: [
							{
								changelogs: seed.changelogs,
								hasMore: seed.totalCount > seed.changelogs.length
							}
						],
						pageParams: [0]
					}
				: void 0,
			queryFn: async ({ pageParam, signal }) => {
				if (isUnfiltered(filters)) return loadFeedPage(pageParam, signal);
				const { limit, offset } = feedWindow(pageParam);
				const selectsEntities = filters.hero.length + filters.item.length > 0;
				const [index, text, groups] = await Promise.all([
					loadFeedIndex(),
					filters.q ? loadFeedText() : null,
					selectsEntities ? loadFeedGroups() : null
				]);
				if (signal.aborted) throw new DOMException('Aborted', 'AbortError');
				const heroIds = resolveEntityIds(filters.hero, index.heroes);
				const itemIds = resolveEntityIds(filters.item, index.items);
				const scope = {
					heroIds,
					itemIds,
					q: filters.q,
					majorOnly: filters.major
				};
				const page = queryFeed(index, text, scope, {
					limit,
					offset
				});
				return {
					changelogs: assembleSummaries(
						page.rows,
						index,
						{
							text,
							groups
						},
						{
							heroIds,
							itemIds,
							q: filters.q,
							isFirstPage: offset === 0
						}
					),
					hasMore: page.hasMore
				};
			},
			getNextPageParam: (lastPage, _pages, lastPageParam) =>
				lastPage.hasMore ? lastPageParam + 1 : void 0,
			initialPageParam: 0
		};
	});
}
//#endregion
//#region ../node_modules/.pnpm/@lucide+svelte@1.47.0_svelte@5.57.0_@typescript-eslint+types@8.70.0_/node_modules/@lucide/svelte/dist/icons/face-slightly-frowning.svelte
function Face_slightly_frowning($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon(
		$$renderer,
		spread_props([
			props,
			{
				icon: {
					name: 'face-slightly-frowning',
					size: 24,
					node: [
						['path', { d: 'M15 10V9' }],
						['path', { d: 'M9 10V9' }],
						['path', { d: 'M9 16a5 5 0 016 0' }],
						[
							'circle',
							{
								cx: '12',
								cy: '12',
								r: '10'
							}
						]
					],
					aliases: ['frown']
				}
			}
		])
	);
}
//#endregion
//#region src/lib/components/changelog/Changelog.svelte
function retryPrompt($$renderer, message, retry) {
	$$renderer.push(
		`<div flex="~ col" items="center" gap="3" text="center" role="alert"><p text="destructive sm" font="medium">${escape_html(message)}</p> <button type="button" border="destructive/30 ~" text="destructive xs" p="x-5 y-2" font="mono semibold" class="hover:bg-destructive/10">Retry</button></div>`
	);
}
function loadingSpinner($$renderer) {
	$$renderer.push(
		`<div flex="~ col" items="center" gap="3" role="status"><div border="primary/30 2 t-transparent" rounded="full" class="size-10 animate-spin"></div> <span text="muted-foreground xs" font="mono" uppercase="" class="tracking-wider">Loading...</span></div>`
	);
}
function Changelog($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const changelogs = derived(() => page.data.changelogs ?? []);
		const totalCount = derived(() => page.data.totalCount ?? 0);
		const filters = derived(() => searchParams.filters);
		const query = useChangelogQuery({
			getSeed: () => ({
				changelogs: changelogs(),
				totalCount: totalCount()
			})
		});
		const filterCount = derived(() => searchParams.activeFilterCount);
		const isSearching = derived(() => searchParams.isSearching);
		const allChangelogs = derived(() =>
			(query.data?.pages ?? []).flatMap((p) => p.changelogs)
		);
		const isFilterPending = derived(() => searchParams.isPending);
		const isNew = (entry) => false;
		const gridEntries = derived(() => allChangelogs().slice(isSearching() ? 0 : 1));
		const newCount = derived(() => 0);
		const firstSeenIdx = derived(() => -1);
		$$renderer.push(
			`<main container="" m="x-auto t-8 b-24" p="x-4"><header m="b-5" class="max-w-3xl"><h1 font="display medium" text="foreground 3xl" class="heading-glow tracking-wide sm:text-4xl">${escape_html(isSearching() ? 'Matching patch notes' : 'Deadlock Patch Notes & Changelog')}</h1> <p text="muted-foreground sm" m="t-2" class="max-w-2xl leading-relaxed">${escape_html(isSearching() ? 'Changes for your selected heroes, items, and keywords.' : 'Every gameplay update, hero adjustment, and item balance change.')}</p> `
		);
		if (totalCount() > 0)
			$$renderer.push(
				`<!--[0--><p flex="~" text="muted-foreground" m="t-3" items="center" gap="2" kicker-sm=""><span text="primary" font="bold">${escape_html(totalCount())}</span> <a href="/archive" class="underline-offset-4 hover:text-signal hover:underline">${escape_html(plural(totalCount(), 'patch', 'patches'))} in the archive</a></p>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--></header> <div class="js-only mb-5 flex flex-wrap items-start gap-x-4 gap-y-2"><details><summary class="ui-focus-ring text-muted-foreground cursor-pointer rounded-sm py-3 text-sm">Quick hero filters</summary> `
		);
		HeroRail($$renderer, {});
		$$renderer.push(
			`<!----></details> <button type="button"${attr('aria-pressed', searchParams.major)} class="ui-focus-ring border-border text-muted-foreground min-h-11 rounded-md border px-3 text-xs font-medium transition-colors idle-hover:border-primary/40 idle-hover:text-foreground selected:border-primary/60 selected:bg-primary/15 selected:text-primary">Major updates only</button></div> `
		);
		if (isFilterPending())
			$$renderer.push(
				`<!--[0--><div aria-hidden="true" class="filter-progress fixed inset-x-0 top-0 z-60 h-0.5 overflow-hidden svelte-h2pzr3"></div>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--> <p aria-live="polite" class="sr-only">${escape_html(isFilterPending() ? 'Updating patches…' : '')}</p> `
		);
		if (query.data) {
			$$renderer.push('<!--[0-->');
			if (allChangelogs().length > 0) {
				$$renderer.push('<!--[0-->');
				if (filterCount() > 0) {
					$$renderer.push(`<!--[0--><p text="muted-foreground xs" m="b-4" font="mono" uppercase="" class="tracking-wider" role="status" aria-live="polite">${escape_html(allChangelogs().length)}${escape_html(query.hasNextPage ? '+' : '')} matching
					${escape_html(query.hasNextPage ? 'patches' : plural(allChangelogs().length, 'patch', 'patches'))} `);
					if (filterCount() > 1)
						$$renderer.push(`<!--[0-->· all ${escape_html(filterCount())} filters`);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--> `);
					if (isSearching() && allChangelogs()[0])
						$$renderer.push(
							`<!--[0--><span class="mt-1 block normal-case">Latest matching patch: <time${attr('datetime', allChangelogs()[0].date)}>${escape_html(formatDate(allChangelogs()[0].date))}</time></span>`
						);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--></p>`);
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (!isSearching()) {
					$$renderer.push('<!--[0-->');
					FeaturedPatchCard($$renderer, spread_props([allChangelogs()[0]]));
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--> `);
				if (newCount() > 0)
					$$renderer.push(
						`<!--[0--><p flex="~" text="muted-foreground xs" m="b-4" items="center" gap="2" font="mono" class="tracking-wider uppercase"><span text="primary" font="bold">${escape_html(newCount())}</span> <span>new ${escape_html(plural(newCount(), 'patch', 'patches'))} since your last visit</span></p>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(
					`<!--]--> <div data-patch-grid="" gap="4"${attr('aria-busy', isFilterPending())}${attr_class(`grid grid-cols-1 transition-opacity duration-200 ${isSearching() ? 'max-w-3xl' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} ${isFilterPending() ? 'pointer-events-none opacity-60' : ''}`)}><!--[-->`
				);
				const each_array = ensure_array_like(gridEntries());
				for (let i = 0, $$length = each_array.length; i < $$length; i++) {
					let entry = each_array[i];
					if (i === firstSeenIdx() && firstSeenIdx() > 0)
						$$renderer.push(
							`<!--[0--><div flex="~" role="presentation" aria-hidden="true" m="y-1 b-4" items="center" gap="4" class="col-span-full"><div bg="signal/35" h="px" flex="1"></div> <span text="muted-foreground" kicker-sm="">Seen before</span> <div bg="primary/30" h="px" flex="1"></div></div>`
						);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]--> <div data-patch-card="" h="full">`);
					PatchCard($$renderer, spread_props([entry, { isNew: isNew(entry) }]));
					$$renderer.push(`<!----></div>`);
				}
				$$renderer.push(`<!--]--></div>`);
			} else {
				$$renderer.push(
					`<!--[-1--><div border="border/50 2" bg="card" relative="" p="12" text="center" class="clip-corner overflow-hidden" role="status">`
				);
				CornerAccents($$renderer, {
					tlSize: '2rem',
					tlColor: 'bg-muted-foreground/30'
				});
				$$renderer.push(
					`<!----> <div flex="~" border="border ~" bg="muted/30" m="x-auto b-6" items="center" justify="center" class="clip-corner-sm size-20">`
				);
				Face_slightly_frowning($$renderer, { class: 'text-muted-foreground size-10' });
				$$renderer.push(
					`<!----></div> <p text="muted-foreground xs" m="b-2" font="mono" uppercase="" class="tracking-wide">No Results</p> <h2 font="display medium" text="foreground 2xl" m="b-3" class="tracking-wide">No changes found</h2> `
				);
				if (filterCount() > 0) {
					$$renderer.push(
						`<!--[0--><p text="muted-foreground" m="x-auto b-8" class="max-w-md">`
					);
					if (filters().q)
						$$renderer.push(
							`<!--[0-->Nothing matches <span text="foreground" font="mono">“${escape_html(filters().q)}”</span>${escape_html(filterCount() > 1 ? ` and your other ${filterCount() - 1} ${plural(filterCount() - 1, 'filter')}` : '')}.`
						);
					else
						$$renderer.push(`<!--[-1-->No changelog entries match your
							${escape_html(filterCount() === 1 ? 'filter' : `${filterCount()} filters`)}.`);
					$$renderer.push(
						`<!--]--></p> <button type="button" border="primary/30 ~" bg="primary/10" text="primary sm" p="x-6 y-3" font="mono semibold" class="ui-focus-ring min-h-11 rounded-md transition-all hover:bg-primary/20 active:scale-[0.97]">Clear Filters</button>`
					);
				} else
					$$renderer.push(
						`<!--[-1--><p text="muted-foreground" m="x-auto" class="max-w-md">The log has no entries yet.</p>`
					);
				$$renderer.push(`<!--]--></div>`);
			}
			$$renderer.push(`<!--]--> `);
			if (allChangelogs().length > 0) {
				$$renderer.push(
					`<!--[0--><div flex="~ col" items="center" gap="4" p="y-12" aria-live="polite"${attr('aria-busy', query.isFetchingNextPage)}>`
				);
				if (query.isFetchNextPageError) {
					$$renderer.push('<!--[0-->');
					retryPrompt($$renderer, 'Failed to load more patches.', () =>
						query.fetchNextPage()
					);
				} else if (query.isFetchingNextPage) {
					$$renderer.push('<!--[1-->');
					loadingSpinner($$renderer);
				} else if (query.hasNextPage)
					$$renderer.push(
						`<!--[2--><div data-load-more-sentinel="" h="px" w="full" aria-hidden="true"></div>`
					);
				else
					$$renderer.push(
						`<!--[-1--><div flex="~" items="center" gap="4"><div bg="primary/30" h="px" w="16"></div> <p text="muted-foreground xs" font="mono" uppercase="" class="tracking-wider">End of Log</p> <div bg="primary/30" h="px" w="16"></div></div>`
					);
				$$renderer.push(`<!--]--></div>`);
			} else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]-->`);
		} else if (query.isError) {
			$$renderer.push(`<!--[1--><div p="y-16">`);
			retryPrompt($$renderer, 'Failed to load patches.', () => query.refetch());
			$$renderer.push(`<!----></div>`);
		} else {
			$$renderer.push(`<!--[-1--><div p="y-16" class="js-only">`);
			loadingSpinner($$renderer);
			$$renderer.push(
				`<!----></div> <noscript><p class="text-muted-foreground py-6 text-sm">Open the <a href="/archive" class="text-signal underline">complete patch archive</a> to browse without search.</p></noscript>`
			);
		}
		$$renderer.push(`<!--]--></main>`);
	});
}
//#endregion
//#region src/lib/components/changelog/patchCard.ts
var NO_MATCHES = {
	searching: false,
	changeCount: null,
	label: null,
	tone: ENTITY_TONE.hero.text
};
/** Which of this patch's entities the active filters asked for. */
function patchCardMatches(patch) {
	if (!searchParams.isSearching) return NO_MATCHES;
	const entities = patch.matches;
	const counted = entities.filter((entity) => entity.changeCount != null);
	const changeCount = counted.length
		? counted.reduce((total, entity) => total + (entity.changeCount ?? 0), 0)
		: null;
	return {
		searching: true,
		changeCount,
		label:
			changeCount === null
				? null
				: entities.length === 1
					? `${entities[0].name} ${plural(changeCount, 'change')}`
					: `matched ${plural(changeCount, 'change')}`,
		tone: entities.every((entity) => entity.type === 'item')
			? ENTITY_TONE.item.text
			: ENTITY_TONE.hero.text
	};
}
/**
 * Reads the filter store, like `patchCardMatches` — both re-derive on every filter change.
 */
function patchCardHrefs(patch) {
	const params = searchParams.toURLSearchParams();
	const query = params.toString();
	const href = `${changePath(patch)}${query ? `?${query}` : ''}`;
	return {
		href,
		entityHref: (entity) => {
			const fragment = `#${entityFragmentId(entity.alt)}`;
			const key = entity.type;
			const selected = key === 'hero' ? searchParams.hero : searchParams.item;
			if (searchParams.hero.length + searchParams.item.length === 0)
				return `${href}${fragment}`;
			const entityParams = new URLSearchParams(params);
			if (!hasEntity(selected, entity.alt)) {
				const retained = selected.slice(0, 19);
				entityParams.set(key, [...retained, entity.alt].join(','));
			}
			return `${changePath(patch)}?${entityParams.toString()}${fragment}`;
		}
	};
}
function patchCardView(patch, featured = false) {
	const { heroes, items } = patch.icons;
	const rows = [
		{
			type: 'heroes',
			label: 'Heroes',
			tone: ENTITY_TONE.hero.text,
			list: heroes,
			extra: Math.max(0, patch.counts.heroes - heroes.length)
		},
		{
			type: 'items',
			label: 'Items',
			tone: ENTITY_TONE.item.text,
			list: items,
			extra: Math.max(0, patch.counts.items - items.length)
		}
	].filter((row) => row.list.length > 0);
	const counts = [
		{
			n: patch.counts.heroes,
			noun: plural(patch.counts.heroes, 'hero', 'heroes'),
			tone: ENTITY_TONE.hero.text
		},
		{
			n: patch.counts.items,
			noun: plural(patch.counts.items, 'item'),
			tone: ENTITY_TONE.item.text
		}
	].filter((count) => count.n > 0);
	const phrases = counts.map((count) => `${count.n} ${count.noun}`);
	const { named, date, heading } = patchHeading(patch);
	return {
		rows,
		counts,
		totals: phrases.join(' · '),
		initials: authorInitials(patch.author),
		heading,
		date,
		named,
		accessibleLabel: `${featured ? 'Latest patch, ' : ''}${named ? `${patch.title}, ${date}` : date}, by ${patch.author}${phrases.length ? `, affecting ${phrases.join(' and ')}` : ''}. View full patch.`
	};
}
//#endregion
//#region src/lib/components/changelog/FeaturedPatchCard.svelte
function FeaturedPatchCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { $$slots, $$events, ...patch } = $$props;
		const view = derived(() => patchCardView(patch, true));
		const links = derived(() => patchCardHrefs(patch));
		$$renderer.push(
			`<div class="mb-7"><article class="clip-corner-lg card-glow border-primary/40 bg-card group relative overflow-hidden border md:flex">`
		);
		CornerAccents($$renderer, {
			tlSize: '2rem',
			brSize: '1.5rem',
			tlColor: 'bg-primary',
			brColor: 'bg-signal/60'
		});
		$$renderer.push(
			`<!----> <div class="min-w-0 flex-1 p-5 sm:p-6"><div class="flex flex-wrap items-center gap-x-4 gap-y-2"><h2 class="font-display text-foreground group-hover:text-primary text-3xl leading-tight font-medium tracking-wide transition-colors sm:text-4xl"><a${attr('href', links().href)}${attr('aria-label', view().accessibleLabel)} class="stretched-link">${escape_html(view().heading)}</a></h2> <span class="bg-primary/10 text-primary rounded-sm px-2 py-1 font-mono text-xs">Latest Patch</span></div> <p class="text-muted-foreground mt-2 text-xs">By ${escape_html(patch.author)}`
		);
		if (view().named)
			$$renderer.push(
				`<!--[0-->· <time${attr('datetime', patch.date)}>${escape_html(view().date)}</time>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--></p> `);
		if (patch.summary)
			$$renderer.push(
				`<!--[0--><p class="text-foreground/90 mt-4 max-w-[72ch] text-sm leading-relaxed">${escape_html(patch.summary)}</p>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> `);
		if (view().rows.length) {
			$$renderer.push(
				`<!--[0--><div class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2"><!--[-->`
			);
			const each_array = ensure_array_like(view().rows);
			for (
				let $$index_1 = 0, $$length = each_array.length;
				$$index_1 < $$length;
				$$index_1++
			) {
				let row = each_array[$$index_1];
				$$renderer.push(
					`<div class="flex items-center gap-3"><span${attr_class(`w-12 shrink-0 text-xs ${stringify(row.tone)}`)}>${escape_html(row.label)}</span> <div class="flex flex-wrap gap-1.5"><!--[-->`
				);
				const each_array_1 = ensure_array_like(row.list);
				for (
					let $$index = 0, $$length = each_array_1.length;
					$$index < $$length;
					$$index++
				) {
					let icon = each_array_1[$$index];
					$$renderer.push(
						`<a${attr('href', links().entityHref(icon))}${attr('aria-label', `Jump to ${stringify(icon.alt)} in this patch`)} class="ui-focus-outline relative z-10 flex size-11 items-center justify-center rounded-md hover:bg-signal/10"><img${attr('src', icon.src)} alt="" width="32" height="32" loading="lazy" decoding="async" class="border-subtle bg-background size-8 rounded border object-cover"/></a>`
					);
				}
				$$renderer.push(`<!--]--></div> `);
				if (row.extra > 0)
					$$renderer.push(
						`<!--[0--><span class="text-muted-foreground font-mono text-xs">+${escape_html(row.extra)}</span>`
					);
				else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--> <div class="border-subtle mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3"><span class="text-muted-foreground text-xs">${escape_html(view().totals)}</span> <span class="text-signal inline-flex items-center gap-2 text-sm">View full patch `
		);
		Arrow_right($$renderer, { class: 'size-4' });
		$$renderer.push(`<!----></span></div></div> `);
		if (patch.previewImage)
			$$renderer.push(
				`<!--[0--><div class="relative h-40 shrink-0 md:h-auto md:w-64"><img data-patch-preview=""${attr('src', patch.previewImage)} alt="" width="640" height="360" decoding="async" fetchpriority="high" class="absolute inset-0 size-full object-cover"/></div>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--></article> <p class="text-muted-foreground mt-6 text-sm">Previous patches</p></div>`
		);
	});
}
//#endregion
//#region src/lib/components/ui/avatar/avatar.svelte
function Avatar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			ref = null,
			loadingStatus = 'loading',
			class: className,
			$$slots,
			$$events,
			...restProps
		} = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Avatar$1) {
				$$renderer.push('<!--[-->');
				Avatar$1(
					$$renderer,
					spread_props([
						{
							'data-slot': 'avatar',
							class: `relative flex shrink-0 overflow-hidden rounded-full ${stringify(className ?? '')}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							},
							get loadingStatus() {
								return loadingStatus;
							},
							set loadingStatus($$value) {
								loadingStatus = $$value;
								$$settled = false;
							}
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			ref,
			loadingStatus
		});
	});
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-image.svelte
function Avatar_image($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Avatar_image$1) {
				$$renderer.push('<!--[-->');
				Avatar_image$1(
					$$renderer,
					spread_props([
						{
							'data-slot': 'avatar-image',
							class: `aspect-square size-full ${stringify(className ?? '')}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							}
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/avatar/avatar-fallback.svelte
function Avatar_fallback($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Avatar_fallback$1) {
				$$renderer.push('<!--[-->');
				Avatar_fallback$1(
					$$renderer,
					spread_props([
						{
							'data-slot': 'avatar-fallback',
							class: `flex size-full items-center justify-center rounded-full bg-muted ${stringify(className ?? '')}`
						},
						restProps,
						{
							get ref() {
								return ref;
							},
							set ref($$value) {
								ref = $$value;
								$$settled = false;
							}
						}
					])
				);
				$$renderer.push('<!--]-->');
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push('<!--]-->');
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/changelog/HighlightedText.svelte
var cached = null;
function splitOnQuery(text, query) {
	if (!query) return [text];
	if (cached?.query !== query) {
		const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		cached = {
			query,
			pattern: new RegExp(`(${escaped})`, 'gi')
		};
	}
	return text.split(cached.pattern);
}
function HighlightedText($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { text, query = '' } = $$props;
		const parts = derived(() => splitOnQuery(text, query));
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(parts());
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let part = each_array[index];
			if (query && index % 2 === 1)
				$$renderer.push(
					`<!--[0--><mark class="bg-primary/15 text-primary rounded-sm px-0.5">${escape_html(part)}</mark>`
				);
			else $$renderer.push(`<!--[-1-->${escape_html(part)}`);
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/changelog/PatchCard.svelte
function PatchCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { isNew = false, $$slots, $$events, ...patch } = $$props;
		const matches = derived(() => patchCardMatches(patch));
		const view = derived(() => patchCardView(patch));
		const links = derived(() => patchCardHrefs(patch));
		const isMajor = derived(() => !!patch.majorUpdate);
		$$renderer.push(
			`<div${attr_class(`clip-corner-sm group bg-card hover:bg-card-accent/30 relative flex h-full flex-col overflow-hidden border transition-colors duration-200 ${matches().searching ? '' : 'min-h-[200px]'} ${isMajor() ? 'border-primary/50 hover:border-primary/80' : 'border-border hover:border-signal/45'}`)}>`
		);
		CornerAccents($$renderer, {
			tlSize: '1.5rem',
			brSize: '1rem',
			tlColor: isMajor() ? 'bg-primary' : 'bg-signal/45',
			brColor: isMajor() ? 'bg-primary/30' : 'bg-signal/20',
			tlHover: isMajor() ? '' : 'group-hover:bg-signal',
			brHover: isMajor() ? 'group-hover:bg-primary/60' : 'group-hover:bg-signal/60',
			thickness: '0.125rem'
		});
		$$renderer.push(`<!----> `);
		if (isNew)
			$$renderer.push(
				`<!--[0--><span bg="primary" text="primary-foreground" absolute="" z="20" p="x-1.5 y-0.5" font="bold" class="kicker-xs clip-corner-sm top-2 right-2">New</span>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> `);
		if (!matches().searching && patch.previewImage) {
			$$renderer.push(
				`<!--[0--><div border="border/70 b" relative="" h="28" shrink="0" class="overflow-hidden">`
			);
			if (patch.previewImage)
				$$renderer.push(
					`<!--[0--><img data-patch-preview=""${attr('src', patch.previewImage)} alt="" width="640" height="360" loading="lazy" decoding="async" class="size-full object-cover transition-transform duration-500 group-hover:scale-105"/> <div absolute="" bg="gradient-to-b" class="from-card/0 via-card/10 to-card/55 pointer-events-none inset-0" aria-hidden="true"></div>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--></div>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--> <div absolute="" bg="gradient-to-br" class="from-primary/0 group-hover:from-primary/5 pointer-events-none inset-0 to-transparent transition-all duration-200"></div> <div z="10" flex="~ 1 col" gap="3" p="4"><div><div flex="~" m="b-1.5" items="center" gap="2"><h2 text="foreground base" font="semibold" class="group-hover:text-primary line-clamp-2 min-w-0 tracking-tight transition-colors duration-300"><a${attr('href', links().href)}${attr('aria-label', view().accessibleLabel)}${attr_class(clsx(matches().searching ? 'ui-focus-ring rounded-sm' : 'stretched-link'))}>${escape_html(view().heading)}</a></h2> `
		);
		if (isMajor())
			$$renderer.push(
				`<!--[0--><span border="primary/40 ~" bg="primary/15" text="primary" m="l-auto" shrink="0" p="x-1.5 y-0.5" font="bold" class="kicker-xs clip-corner-sm">Major</span>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(
			`<!--]--></div> <div flex="~" text="muted-foreground xs" items="center" gap="2">`
		);
		if (Avatar) {
			$$renderer.push('<!--[-->');
			Avatar($$renderer, {
				class:
					'border-primary/20 group-hover:border-primary/50 size-6 border transition-all duration-300',
				children: ($$renderer) => {
					if (Avatar_image) {
						$$renderer.push('<!--[-->');
						Avatar_image($$renderer, {
							src: patch.authorImage,
							alt: ''
						});
						$$renderer.push('<!--]-->');
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push('<!--]-->');
					}
					$$renderer.push(` `);
					if (Avatar_fallback) {
						$$renderer.push('<!--[-->');
						Avatar_fallback($$renderer, {
							text: 'muted-foreground',
							font: 'mono',
							class: 'text-[11px] tracking-wide',
							children: ($$renderer) => {
								$$renderer.push(`<!---->${escape_html(view().initials)}`);
							},
							$$slots: { default: true }
						});
						$$renderer.push('<!--]-->');
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push('<!--]-->');
					}
				},
				$$slots: { default: true }
			});
			$$renderer.push('<!--]-->');
		} else {
			$$renderer.push('<!--[!-->');
			$$renderer.push('<!--]-->');
		}
		$$renderer.push(` <span truncate="">${escape_html(patch.author)}</span> `);
		if (view().named)
			$$renderer.push(
				`<!--[0--><span aria-hidden="true">·</span> <time${attr('datetime', patch.date)}>${escape_html(view().date)}</time>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--></div></div> `);
		if (patch.matches.length > 0) {
			$$renderer.push(`<!--[0--><div class="space-y-4" data-matched-changes=""><!--[-->`);
			const each_array = ensure_array_like(patch.matches);
			for (
				let $$index_1 = 0, $$length = each_array.length;
				$$index_1 < $$length;
				$$index_1++
			) {
				let match = each_array[$$index_1];
				$$renderer.push(
					`<section${attr('aria-label', `${stringify(match.name)} changes`)}><div class="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3 class="text-sm font-semibold">${escape_html(match.name)}</h3> <a${attr('href', `/${stringify(match.type)}/${stringify(match.slug)}`)}${attr('aria-label', `${stringify(match.name)} full history`)} class="ui-focus-ring text-signal relative z-10 inline-flex min-h-11 items-center gap-1 rounded-sm text-xs underline-offset-4 hover:underline">Full history `
				);
				Arrow_right($$renderer, { class: 'size-3.5' });
				$$renderer.push(`<!----></a></div> `);
				if (match.changes.length) {
					$$renderer.push(
						`<!--[0--><ul class="max-w-[72ch] space-y-2 text-sm leading-relaxed"><!--[-->`
					);
					const each_array_1 = ensure_array_like(match.changes);
					for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
						let change = each_array_1[index];
						$$renderer.push(`<li>`);
						if (
							change.ability &&
							!change.text.toLowerCase().startsWith(change.ability.toLowerCase())
						)
							$$renderer.push(
								`<!--[0--><span class="text-foreground font-medium">${escape_html(change.ability)}:</span>`
							);
						else $$renderer.push('<!--[-1-->');
						$$renderer.push(`<!--]--> `);
						HighlightedText($$renderer, {
							text: change.text,
							query: searchParams.q
						});
						$$renderer.push(`<!----></li>`);
					}
					$$renderer.push(`<!--]--></ul> `);
					if (match.changeCount !== null && match.changeCount > match.changes.length)
						$$renderer.push(
							`<!--[0--><p class="text-muted-foreground mt-2 text-xs">${escape_html(match.changeCount - match.changes.length)} more changes in the full patch</p>`
						);
					else $$renderer.push('<!--[-1-->');
					$$renderer.push(`<!--]-->`);
				} else
					$$renderer.push(
						`<!--[-1--><p class="text-muted-foreground text-sm">${escape_html(match.changeCount === null ? 'Mentioned in this patch; see the full notes for context.' : 'See the full patch for these changes.')}</p>`
					);
				$$renderer.push(`<!--]--></section>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> `);
		if (patch.summary) {
			$$renderer.push(
				`<!--[0--><p${attr_class(`text-muted-foreground max-w-[72ch] leading-relaxed ${matches().searching ? 'text-sm' : 'line-clamp-2 text-xs'}`)}>`
			);
			HighlightedText($$renderer, {
				text: patch.summary,
				query: searchParams.q
			});
			$$renderer.push(`<!----></p>`);
		} else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> <!--[-->`);
		const each_array_2 = ensure_array_like(view().rows);
		for (
			let $$index_3 = 0, $$length = each_array_2.length;
			$$index_3 < $$length;
			$$index_3++
		) {
			let row = each_array_2[$$index_3];
			const isItems = row.type === 'items';
			$$renderer.push(
				`<div class="flex flex-wrap items-center gap-1 sm:flex-nowrap sm:gap-0 sm:[&amp;>a+a]:-ml-1.5"><!--[-->`
			);
			const each_array_3 = ensure_array_like(row.list);
			for (
				let $$index_2 = 0, $$length = each_array_3.length;
				$$index_2 < $$length;
				$$index_2++
			) {
				let icon = each_array_3[$$index_2];
				$$renderer.push(
					`<a${attr('href', links().entityHref(icon))}${attr('aria-label', `Jump to ${stringify(icon.alt)} in this patch`)} relative="" z="10" rounded="md" class="group/icon ui-focus-outline flex size-11 items-center justify-center transition-all duration-200 sm:size-7 hover:z-20 hover:-translate-y-0.5 hover:scale-110"><img${attr('src', icon.src)} alt="" width="28" height="28" loading="lazy" decoding="async"${attr_class(`border-border/80 bg-card size-7 rounded-md border object-cover shadow-sm transition-colors duration-200 ${isItems ? 'group-hover/icon:border-signal/60' : 'group-hover/icon:border-primary/50'}`)}/></a>`
				);
			}
			$$renderer.push(`<!--]--> `);
			if (row.extra > 0)
				$$renderer.push(
					`<!--[0--><span${attr_class(`bg-muted/80 text-muted-foreground flex size-11 items-center justify-center rounded-md font-mono text-[11px] font-semibold transition-all duration-300 sm:ml-1.5 sm:size-7 ${isItems ? 'group-hover:bg-signal/15 group-hover:text-signal' : 'group-hover:bg-primary/15 group-hover:text-primary'}`)}>+${escape_html(row.extra)}</span>`
				);
			else $$renderer.push('<!--[-1-->');
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(
			`<!--]--> <div flex="~" border="border/50 t" m="t-auto" items="center" gap="3" p="t-3" text="xs">`
		);
		if (matches().label)
			$$renderer.push(
				`<!--[0--><span flex="~" items="baseline" gap="1"><span${attr_class(`font-mono font-bold ${stringify(matches().tone)}`)}>${escape_html(matches().changeCount)}</span> <span text="foreground">${escape_html(matches().label)}</span></span> <span text="muted-foreground" class="ml-auto hidden text-xs sm:inline">${escape_html(view().totals)} in full patch</span>`
			);
		else {
			$$renderer.push(`<!--[-1--><!--[-->`);
			const each_array_4 = ensure_array_like(view().counts);
			for (
				let $$index_4 = 0, $$length = each_array_4.length;
				$$index_4 < $$length;
				$$index_4++
			) {
				let count = each_array_4[$$index_4];
				$$renderer.push(
					`<span flex="~" items="baseline" gap="1"><span${attr_class(`font-mono font-bold ${stringify(count.tone)}`)}>${escape_html(count.n)}</span> <span text="muted-foreground">${escape_html(count.noun)}</span></span>`
				);
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--> `);
		if (matches().searching) {
			$$renderer.push(
				`<!--[0--><a${attr('href', links().href)} class="ui-focus-ring text-signal ml-auto inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-sm text-xs">Full patch `
			);
			Arrow_right($$renderer, { class: 'size-3.5' });
			$$renderer.push(`<!----></a>`);
		} else {
			$$renderer.push('<!--[-1-->');
			Arrow_right($$renderer, { class: 'text-signal ml-auto size-3.5' });
		}
		$$renderer.push(`<!--]--></div></div></div>`);
	});
}
//#endregion
//#region src/lib/components/changelog/toc.ts
/** Sections ChangelogToc renders through its own General / Heroes / Items affordances. */
var STRUCTURED_SECTION_IDS = ['general-changes', 'hero-changes', 'item-changes'];
/**
 * A patch with no entity blocks (dev diary, hotfix prose) lists its own headings
 * instead of the hero and item groups.
 */
function genericTocEntries({ toc, heroes, items }) {
	return heroes.length + items.length === 0
		? toc.filter((entry) => !STRUCTURED_SECTION_IDS.includes(entry.id))
		: [];
}
/**
 * How many links ChangelogToc will render. The patch page decides whether to show the
 * TOC at all from this, so the count and the render can't drift apart.
 */
function tocLinkCount(input) {
	const { heroes, items, hideGeneral } = input;
	return (
		(hideGeneral ? 0 : 1) +
		genericTocEntries(input).length +
		(heroes.length > 0 ? heroes.length + 1 : 0) +
		(items.length > 0 ? items.length + 1 : 0)
	);
}
//#endregion
//#region src/lib/components/changelog/ChangelogToc.svelte
function ChangelogToc($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		/** Full mog toc; level-3 entries nest as ability links under their entity. */
		let {
			heroes,
			items,
			abilityIcons = [],
			onnavigate,
			size = 'sm',
			hideGeneral = false,
			toc = []
		} = $$props;
		const abilityIconsByHero = derived(() => {
			const icons = /* @__PURE__ */ new Map();
			for (const ability of abilityIcons) {
				const entries = icons.get(ability.heroId) ?? [];
				entries.push(ability);
				icons.set(ability.heroId, entries);
			}
			return icons;
		});
		const genericEntries = derived(() =>
			genericTocEntries({
				toc,
				heroes,
				items
			})
		);
		const iconPx = derived(() =>
			size === 'lg'
				? {
						entity: 28,
						ability: 20
					}
				: {
						entity: 16,
						ability: 14
					}
		);
		const groups = derived(() => {
			const positions = /* @__PURE__ */ new Map();
			const abilities = /* @__PURE__ */ new Map();
			let section;
			let open;
			for (const entry of toc) {
				if (entry.level === 3) {
					open?.push(entry);
					continue;
				}
				open = void 0;
				if (entry.level === 1) {
					section = /* @__PURE__ */ new Map();
					positions.set(entry.id, section);
				} else if (entry.level === 2) {
					section?.set(entry.id, section.size);
					open = [];
					abilities.set(entry.id, open);
				}
			}
			return [
				{
					id: 'hero-changes',
					label: 'Heroes',
					entities: heroes
				},
				{
					id: 'item-changes',
					label: 'Items',
					entities: items
				}
			]
				.filter((group) => group.entities.length > 0)
				.map((group) => {
					const order = positions.get(group.id);
					const rank = (entity) =>
						order?.get(entityFragmentId(entity.alt)) ?? Number.MAX_SAFE_INTEGER;
					return {
						...group,
						entities: group.entities
							.toSorted((a, b) => rank(a) - rank(b))
							.map((entity) => {
								const fragment = entityFragmentId(entity.alt);
								const icons = abilityIconsByHero().get(entity.id) ?? [];
								return {
									...entity,
									fragment,
									abilities: (abilities.get(fragment) ?? []).map((ability) => {
										const slug = resolveHeroAbilitySlug(ability.title, icons);
										return {
											...ability,
											image: icons.find((icon) => icon.slug === slug)?.image
										};
									})
								};
							})
					};
				});
		});
		$$renderer.push(
			`<nav${attr_class(`toc ${stringify(size)} toc-panel clip-corner-sm`, 'svelte-1dqdqxt')} aria-label="Table of contents">`
		);
		if (size === 'sm')
			$$renderer.push(
				`<!--[0--><div bg="signal/50" m="b-4" h="px" w="8" aria-hidden="true"></div> <p text="muted-foreground" m="b-4" font="bold" class="kicker-xs tracking-[0.2em]">Contents</p>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> <div class="toc-tree svelte-1dqdqxt" data-toc-tree="">`);
		if (!hideGeneral)
			$$renderer.push(
				`<!--[0--><a href="#general-changes" class="toc-section svelte-1dqdqxt"><span class="toc-marker svelte-1dqdqxt" aria-hidden="true"></span> General</a>`
			);
		else $$renderer.push('<!--[-1-->');
		$$renderer.push(`<!--]--> <!--[-->`);
		const each_array = ensure_array_like(genericEntries());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let entry = each_array[$$index];
			$$renderer.push(
				`<a${attr('href', `#${stringify(entry.id)}`)}${attr_class(`toc-section ${entry.level > 1 ? 'toc-subsection' : ''}`, 'svelte-1dqdqxt')}><span class="toc-marker svelte-1dqdqxt" aria-hidden="true"></span> <span class="line-clamp-2 leading-tight">${escape_html(entry.title)}</span></a>`
			);
		}
		$$renderer.push(`<!--]--> <!--[-->`);
		const each_array_1 = ensure_array_like(groups());
		for (
			let $$index_3 = 0, $$length = each_array_1.length;
			$$index_3 < $$length;
			$$index_3++
		) {
			let group = each_array_1[$$index_3];
			$$renderer.push(
				`<div class="toc-group svelte-1dqdqxt"><a${attr('href', `#${stringify(group.id)}`)} class="toc-section svelte-1dqdqxt"><span class="toc-marker svelte-1dqdqxt" aria-hidden="true"></span> ${escape_html(group.label)} <span class="toc-count svelte-1dqdqxt">${escape_html(group.entities.length)}</span></a> <ul class="toc-entities svelte-1dqdqxt"><!--[-->`
			);
			const each_array_2 = ensure_array_like(group.entities);
			for (
				let $$index_2 = 0, $$length = each_array_2.length;
				$$index_2 < $$length;
				$$index_2++
			) {
				let entity = each_array_2[$$index_2];
				$$renderer.push(
					`<li><a${attr('href', `#${stringify(entity.fragment)}`)} class="toc-entity toc-link min-w-0 svelte-1dqdqxt"><img${attr('src', entity.src)} alt=""${attr('width', iconPx().entity)}${attr('height', iconPx().entity)} loading="lazy" decoding="async" class="toc-entity-img svelte-1dqdqxt"/> <span truncate="">${escape_html(entity.alt)}</span></a> `
				);
				if (entity.abilities.length > 0) {
					$$renderer.push(`<!--[0--><ul space="y-px" class="svelte-1dqdqxt"><!--[-->`);
					const each_array_3 = ensure_array_like(entity.abilities);
					for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
						let ability = each_array_3[i];
						$$renderer.push(
							`<li><a${attr('href', `#${stringify(ability.id)}`)} class="toc-ability toc-link svelte-1dqdqxt">`
						);
						if (ability.image)
							$$renderer.push(
								`<!--[0--><img${attr('src', ability.image)} alt=""${attr('width', iconPx().ability)}${attr('height', iconPx().ability)} loading="lazy" decoding="async" class="toc-ability-icon toc-ability-img svelte-1dqdqxt"/>`
							);
						else
							$$renderer.push(
								`<!--[-1--><span class="toc-ability-icon svelte-1dqdqxt" aria-hidden="true"></span>`
							);
						$$renderer.push(
							`<!--]--> <span truncate="">${escape_html(ability.title)}</span></a></li>`
						);
					}
					$$renderer.push(`<!--]--></ul>`);
				} else $$renderer.push('<!--[-1-->');
				$$renderer.push(`<!--]--></li>`);
			}
			$$renderer.push(`<!--]--></ul></div>`);
		}
		$$renderer.push(`<!--]--></div></nav>`);
	});
}
//#endregion
//#region src/lib/components/changelog/patchStatsContext.ts
var [getPatchStats, setPatchStats] = createContext();
//#endregion
//#region src/lib/components/changelog/MogContent.svelte
function MogContent($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			content: Content,
			icons,
			filter,
			stats = null,
			open = false,
			entryYear,
			reading = {
				details: {},
				previous: {},
				maxedFirst: {},
				boughtBy: {},
				buyTime: {}
			},
			related = {}
		} = $$props;
		setReadingContext({
			get details() {
				return reading.details;
			},
			get previous() {
				return reading.previous;
			},
			get maxedFirst() {
				return reading.maxedFirst;
			},
			get boughtBy() {
				return reading.boughtBy;
			},
			get buyTime() {
				return reading.buyTime;
			},
			get related() {
				return related;
			}
		});
		setPatchStats({
			get stats() {
				return stats;
			},
			get entryYear() {
				return entryYear;
			},
			get open() {
				return open;
			}
		});
		setEntityIcons({
			get heroes() {
				return icons.heroes;
			},
			get items() {
				return icons.items;
			}
		});
		derived(
			() =>
				new Set(
					[...(filter?.heroes ?? []), ...(filter?.items ?? [])].map(entityFragmentId)
				)
		);
		$$renderer.push(`<!---->`);
		$$renderer.push(
			`<section class="mog-content svelte-15qe8qj" aria-label="Changelog details">`
		);
		if (Content) {
			$$renderer.push('<!--[-->');
			Content($$renderer, {});
			$$renderer.push('<!--]-->');
		} else {
			$$renderer.push('<!--[!-->');
			$$renderer.push('<!--]-->');
		}
		$$renderer.push(`</section>`);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region src/lib/components/changelog/RecentPatches.svelte
function RecentPatches($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { patches, entity } = $$props;
		const recent = derived(() => patches.slice(0, 6));
		$$renderer.push(
			`<nav${attr('aria-label', `Recent patches for ${stringify(entity.name)}`)}><p class="text-muted-foreground mb-2 text-xs">Most recent ${escape_html(recent().length)} of ${escape_html(patches.length)} patches</p> <div class="flex flex-wrap gap-2"><!--[-->`
		);
		const each_array = ensure_array_like(recent());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let patch = each_array[$$index];
			$$renderer.push(
				`<a${attr('href', entityPatchHref(patch, entity))} class="ui-focus-ring border-subtle text-signal hover:border-signal inline-flex min-h-11 items-center rounded-md border px-3 font-mono text-xs"${attr('aria-label', `View ${stringify(entity.name)} in the ${stringify(formatDateShort(patch.date))} patch, ${stringify(changeCountLabel(patch.changeCount))}`)}><time${attr('datetime', patch.date.toISOString())} data-timeline-date="">${escape_html(formatDateShort(patch.date))}</time></a>`
			);
		}
		$$renderer.push(`<!--]--></div></nav>`);
	});
}
//#endregion
export {
	tocLinkCount as a,
	Avatar as c,
	ChangelogToc as i,
	Changelog as l,
	MogContent as n,
	Avatar_fallback as o,
	getPatchStats as r,
	Avatar_image as s,
	RecentPatches as t,
	authorInitials as u
};
