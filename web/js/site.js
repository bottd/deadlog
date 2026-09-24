// Every page loads this module. It wires the few behaviours plain HTML can't express
// and loads the search island only when someone reaches for search.

const app = document.querySelector('[data-app-ready]');

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function toast(message, kind = 'success') {
	const host = document.querySelector('[data-toaster]');
	if (!host) return;
	const item = document.createElement('div');
	item.setAttribute('data-toast', kind);
	item.setAttribute('role', kind === 'error' ? 'alert' : 'status');
	item.className = 'toast';
	item.textContent = message;
	host.append(item);
	setTimeout(() => item.remove(), 4000);
}

function scrollToTop() {
	const button = document.querySelector('[data-scroll-top]');
	if (!button) return;
	const update = () => {
		button.hidden = scrollY <= 500;
	};
	addEventListener('scroll', update, { passive: true });
	update();
	button.addEventListener('click', () =>
		scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' })
	);
}

/** Directory filters live in the URL, like the shallow params they replace. Safari
 * throws past roughly 100 replaceState calls in 30 seconds, so typing is debounced. */
function directory() {
	const root = document.querySelector('[data-directory]');
	if (!root) return;
	const search = root.querySelector('[data-directory-search]');
	const buttons = [...root.querySelectorAll('[data-directory-category]')];
	const entries = [...root.querySelectorAll('[data-directory-list] > li')];
	const count = root.querySelector('[data-directory-count]');
	const empty = root.querySelector('[data-directory-empty]');
	const emptyText = root.querySelector('[data-directory-empty-text]');
	const list = root.querySelector('[data-directory-list]');
	const label = root.dataset.label;
	const total = Number(root.dataset.total);
	const categories = new Set(buttons.map((button) => button.dataset.directoryCategory));
	const params = new URLSearchParams(location.search);
	let name = params.get('name') ?? '';
	let category = categories.has(params.get('category')) ? params.get('category') : '';
	let timer;

	const commit = () => {
		const url = new URL(location.href);
		url.searchParams.delete('name');
		url.searchParams.delete('category');
		if (name) url.searchParams.set('name', name);
		if (category) url.searchParams.set('category', category);
		history.replaceState(history.state, '', url);
	};

	const render = () => {
		const needle = name.trim().toLowerCase();
		let shown = 0;
		for (const entry of entries) {
			const visible =
				entry.dataset.name.includes(needle) &&
				(!category || entry.dataset.category === category);
			entry.hidden = !visible;
			if (visible) shown++;
		}
		count.textContent = `${shown}${name || category ? ` / ${total}` : ''} ${label}`;
		list.hidden = shown === 0;
		empty.hidden = shown !== 0;
		emptyText.textContent = `No ${label} match ${name ? `“${name}”` : 'this category'}${name && category ? ` in ${category}` : ''}.`;
		for (const button of buttons) {
			button.setAttribute(
				'aria-pressed',
				String(button.dataset.directoryCategory === category)
			);
		}
	};

	search.value = name;
	search.addEventListener('input', () => {
		name = search.value;
		render();
		clearTimeout(timer);
		timer = setTimeout(commit, 250);
	});
	for (const button of buttons) {
		button.addEventListener('click', () => {
			category = button.dataset.directoryCategory;
			render();
			commit();
		});
	}
	root.querySelector('[data-directory-clear]')?.addEventListener('click', () => {
		name = '';
		category = '';
		search.value = '';
		render();
		commit();
	});
	render();
}

function notFound() {
	const target = document.querySelector('[data-not-found-path]');
	if (target) target.textContent = location.pathname;
}

function copyLink() {
	for (const button of document.querySelectorAll('[data-copy-link]')) {
		button.addEventListener('click', async () => {
			try {
				await navigator.clipboard.writeText(location.href);
				toast('Copied to clipboard');
			} catch {
				toast('Could not copy this link', 'error');
			}
		});
	}
}

// "New since last visit" is a client-only high-water mark: null until a prior visit.
const LAST_VISIT_KEY = 'deadlog:lastVisited';

function readLastVisit() {
	try {
		const stored = localStorage.getItem(LAST_VISIT_KEY);
		return stored ? Number(stored) : null;
	} catch {
		return null;
	}
}

let visitCommitted = false;
function commitVisit() {
	if (visitCommitted) return;
	visitCommitted = true;
	try {
		localStorage.setItem(LAST_VISIT_KEY, String(Date.now()));
	} catch {
		// Private mode: the marker simply never appears.
	}
}

const lastVisit = readLastVisit();

/** Marks cards newer than the last visit and places the "Seen before" divider. */
export function markNew(grid, counter) {
	if (lastVisit === null || !grid) return;
	grid.querySelector('[data-seen-divider]')?.remove();
	const cards = [...grid.querySelectorAll('[data-patch-card]')];
	let newCount = 0;
	let firstSeen = -1;
	cards.forEach((card, index) => {
		const fresh = Date.parse(card.dataset.date) > lastVisit;
		if (fresh) {
			newCount++;
			if (!card.querySelector('[data-new-badge]')) {
				card.firstElementChild?.insertAdjacentHTML(
					'afterbegin',
					'<span data-new-badge bg="primary" text="primary-foreground" absolute z="20" p="x-1.5 y-0.5" font="bold" class="kicker-xs clip-corner-sm top-2 right-2">New</span>'
				);
			}
		} else if (firstSeen === -1) {
			firstSeen = index;
		}
	});
	if (firstSeen > 0) {
		const divider = document.createElement('div');
		divider.setAttribute('data-seen-divider', '');
		divider.setAttribute('role', 'presentation');
		divider.setAttribute('aria-hidden', 'true');
		divider.setAttribute('flex', '~');
		divider.setAttribute('m', 'y-1 b-4');
		divider.setAttribute('items', 'center');
		divider.setAttribute('gap', '4');
		divider.className = 'col-span-full';
		divider.innerHTML =
			'<div bg="signal/35" h="px" flex="1"></div><span text="muted-foreground" kicker-sm>Seen before</span><div bg="primary/30" h="px" flex="1"></div>';
		cards[firstSeen].before(divider);
	}
	if (counter) {
		counter.hidden = newCount === 0;
		counter.setAttribute('flex', '~');
		counter.innerHTML = newCount
			? `<span text="primary" font="bold">${newCount}</span> <span>new ${newCount === 1 ? 'patch' : 'patches'} since your last visit</span>`
			: '';
	}
}

const FILTER_KEYS = ['hero', 'item', 'q', 'major'];
export const hasFilters = (params = new URLSearchParams(location.search)) =>
	FILTER_KEYS.some((key) => params.get(key));

let observeFeed = () => {};

/** The unfiltered feed continues on `/page/<n>`; with scripting, each next page's cards
 * are appended to the same grid as the reader nears the end. */
function infiniteFeed() {
	const feed = document.querySelector('[data-feed]');
	if (!feed) return;

	let loading = false;
	const observer = new IntersectionObserver(
		async ([entry]) => {
			const grid = feed.querySelector('[data-patch-grid]');
			const more = feed.querySelector('[data-feed-more]');
			const next = more?.querySelector('[data-load-more]');
			if (!entry?.isIntersecting || loading || !grid || !next) return;
			loading = true;
			more.setAttribute('aria-busy', 'true');
			try {
				const response = await fetch(next.href);
				if (!response.ok) throw new Error(String(response.status));
				const page = new DOMParser().parseFromString(await response.text(), 'text/html');
				grid.append(...page.querySelectorAll('[data-patch-grid] > [data-patch-card]'));
				const nextMore = page.querySelector('[data-feed-more]');
				nextMore?.querySelector('a[rel="prev"]')?.remove();
				more.replaceChildren(...(nextMore?.childNodes ?? []));
				markNew(grid, feed.querySelector('[data-new-count]'));
			} catch {
				toast('Failed to load more patches.', 'error');
			} finally {
				loading = false;
				more.setAttribute('aria-busy', 'false');
			}
		},
		{ rootMargin: '0px 0px 200px 0px' }
	);
	observeFeed = () => {
		observer.disconnect();
		const more = feed.querySelector('[data-feed-more]');
		if (more) observer.observe(more);
	};

	if (hasFilters()) return;
	markNew(
		feed.querySelector('[data-patch-grid]'),
		feed.querySelector('[data-new-count]')
	);
	setTimeout(commitVisit, 10_000);
	addEventListener('pagehide', commitVisit);
	observeFeed();
}

let island;
export function loadSearch() {
	island ??= import('__SEARCH_MODULE__')
		.then(async (module) => {
			await module.init({ toast, markNew, observeFeed, hasFilters });
			return module;
		})
		.catch((error) => {
			island = undefined;
			document.documentElement.removeAttribute('data-filtering');
			throw error;
		});
	return island;
}

function search() {
	const root = document.querySelector('[data-search]');
	if (!root) return;
	const wake = () => void loadSearch();
	document.querySelector('[data-search-open]')?.addEventListener('click', async () => {
		const module = await loadSearch();
		module.openSearchSheet();
	});
	for (const event of ['focusin', 'pointerenter', 'touchstart']) {
		root.addEventListener(event, wake, { once: true, passive: true });
	}
	if (hasFilters() || document.querySelector('[data-hero-rail]')) wake();
}

/** Sticky elements below the header offset by its height, which grows when filter
 * chips show. */
function headerHeight() {
	const header = document.querySelector('.site-header');
	if (!header) return;
	new ResizeObserver(([entry]) => {
		document.documentElement.style.setProperty(
			'--site-header-height',
			`${entry.target.getBoundingClientRect().height}px`
		);
	}).observe(header);
}

app?.setAttribute('data-app-ready', 'true');
headerHeight();
scrollToTop();
directory();
notFound();
copyLink();
infiniteFeed();
search();
