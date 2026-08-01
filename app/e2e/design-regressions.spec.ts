import { expect, test } from 'playwright/test';

const LATEST_CHANGE = '/change/2026/minor-06-11';

async function gotoApp(page: import('playwright/test').Page, path: string) {
	await page.goto(path);
	await expect(page.locator('[data-app-ready="true"]')).toBeAttached();
}

async function openEntityFilter(page: import('playwright/test').Page, mobile: boolean) {
	if (mobile) {
		await page.getByRole('button', { name: /Filters/ }).click();
		return page.getByRole('combobox', { name: 'Hero, item, or keyword' });
	}

	return page.getByRole('combobox', {
		name: 'Search by hero, item, or keyword'
	});
}

test('the global changelog filter navigates from a directory', async ({
	page
}, testInfo) => {
	await gotoApp(page, '/heroes');
	const input = await openEntityFilter(page, testInfo.project.name === 'mobile-chromium');
	await input.fill('Bebop');
	await page.getByRole('option', { name: /Bebop, Hero, not selected/ }).click();

	// Anchored to the root path on purpose: "/?hero=Bebop" and "/heroes?hero=Bebop"
	// both satisfied a "/?" optional-slash pattern, hiding the fact that filtering
	// from a directory stayed on a page that ignores the param.
	await expect(page).toHaveURL(/\/\?hero=Bebop$/);
	await expect(
		page.locator('main').getByRole('button', { name: 'Bebop', exact: true })
	).toHaveAttribute('aria-pressed', 'true');
});

test('selected filter chips are keyboard removable', async ({ page }) => {
	await gotoApp(page, '/?hero=Bebop');
	const chip = page.getByRole('button', { name: 'Remove Hero filter: Bebop' });
	await chip.focus();
	await page.keyboard.press('Enter');
	await expect(page).toHaveURL(/\/$/);
});

test('directory search narrows items without horizontal overflow', async ({ page }) => {
	await gotoApp(page, '/items');
	await page
		.getByRole('searchbox', { name: 'Filter items by name' })
		.fill('Active Reload');
	await expect(page.getByRole('link', { name: /Active Reload/ })).toBeVisible();
	await expect(page.getByRole('link', { name: /Berserker/ })).toHaveCount(0);
	const hasOverflow = await page.evaluate(
		() => document.documentElement.scrollWidth > window.innerWidth
	);
	expect(hasOverflow).toBe(false);
});

test('canonical aliases and profile history preserve entity scope', async ({ page }) => {
	await gotoApp(page, '/hero/doorman?ability=call-bell');
	await expect(page).toHaveURL(/\/hero\/the-doorman\?ability=call-bell$/);
	await expect(
		page.getByRole('heading', { level: 1, name: 'The Doorman' })
	).toBeVisible();
	await expect(
		page
			.getByRole('region', { name: 'Abilities' })
			.getByRole('button', { name: /^Call Bell/ })
	).toHaveAttribute('aria-pressed', 'true');
	const patchLink = page
		.getByRole('region', { name: 'Change History' })
		.getByRole('link')
		.first();
	await expect(patchLink).toHaveAttribute('href', /\/change\/[^?]+\?hero=The\+Doorman$/);
});

test('keyword search from a patch navigates to the changelog list', async ({
	page
}, testInfo) => {
	await gotoApp(page, '/change/2026/minor-07-28');
	const input = await openEntityFilter(page, testInfo.project.name === 'mobile-chromium');
	await expect(input).toHaveAttribute('maxlength', '200');
	await input.fill('stamina bucket');
	await input.press('Enter');

	await expect(page).toHaveURL(/\/\?q=stamina\+bucket$/);
	await expect(page.locator('[data-patch-card]').first()).toBeVisible();
});

test('historical item filters still resolve and remain removable', async ({ page }) => {
	await gotoApp(page, '/?item=Ammo+Scavenger');

	await expect(page.locator('[data-patch-card]').first()).toBeVisible();
	await expect(
		page.getByRole('button', { name: 'Remove Item filter: Ammo Scavenger' })
	).toBeVisible();
});

test('mobile search remains usable without JavaScript', async ({ browser }, testInfo) => {
	test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile no-JavaScript fallback');
	const context = await browser.newContext({
		javaScriptEnabled: false,
		viewport: { width: 390, height: 844 }
	});
	const page = await context.newPage();
	await page.goto('http://127.0.0.1:4173/?hero=Bebop&item=Ammo+Scavenger&major=true');

	const input = page.getByRole('searchbox', { name: 'Search the changelog' });
	await expect(input).toBeVisible();
	await expect(
		page.getByRole('link', { name: 'Remove Hero filter: Bebop' })
	).toBeVisible();
	await expect(
		page.getByRole('link', { name: 'Remove Item filter: Ammo Scavenger' })
	).toBeVisible();
	await expect(
		page.getByRole('link', { name: 'Remove Major patches filter' })
	).toBeVisible();

	const itemFilter = page.getByRole('link', {
		name: 'Remove Item filter: Ammo Scavenger'
	});
	const removalHref = await itemFilter.getAttribute('href');
	expect(removalHref).not.toBeNull();
	await page.goto(new URL(removalHref!, page.url()).href);
	await expect(page).toHaveURL(/\/\?hero=Bebop&major=true$/);
	await input.fill('stamina bucket');
	await input.press('Enter');
	await page.waitForURL((url) => url.searchParams.get('q') === 'stamina bucket');
	expect(new URL(page.url()).searchParams.get('hero')).toBe('Bebop');
	expect(new URL(page.url()).searchParams.get('item')).toBeNull();
	expect(new URL(page.url()).searchParams.get('major')).toBe('true');
	await context.close();
});

test('semantic accent colors remain legible on their UI surfaces', async ({
	page
}, testInfo) => {
	test.skip(
		testInfo.project.name !== 'desktop-chromium',
		'One browser color calculation is enough'
	);
	await gotoApp(page, '/');

	// One theme ships (app.html hardcodes `class="dark"`), so measure what renders.
	const contrast = async () => {
		return page.evaluate(() => {
			const styles = getComputedStyle(document.documentElement);
			const luminance = (hex: string) => {
				const channels = hex
					.match(/[\da-f]{2}/gi)!
					.map((value) => Number.parseInt(value, 16) / 255)
					.map((value) =>
						value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
					);
				return 0.2126 * channels[0]! + 0.7152 * channels[1]! + 0.0722 * channels[2]!;
			};
			const ratio = (first: string, second: string) => {
				const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
				return (values[0]! + 0.05) / (values[1]! + 0.05);
			};
			const token = (name: string) => styles.getPropertyValue(name).trim();
			const background = token('--background');
			const card = token('--card');
			const primary = token('--primary');
			const signal = token('--signal');
			const reference = document.createElement('span');
			reference.style.color = 'var(--signal)';
			document.body.append(reference);
			const searchLabel = [...document.querySelectorAll('header span')].find(
				(element) => element.textContent?.trim() === 'Search by hero, item, or keyword'
			);
			const headerUsesFullSignal =
				searchLabel !== undefined &&
				getComputedStyle(searchLabel).color === getComputedStyle(reference).color;
			reference.remove();

			return {
				text: [
					ratio(token('--foreground'), background),
					ratio(token('--card-foreground'), card),
					ratio(token('--muted-foreground'), background),
					ratio(primary, background),
					ratio(primary, card),
					ratio(signal, background),
					ratio(signal, card)
				],
				controls: [
					ratio(token('--primary-foreground'), primary),
					ratio(token('--signal-foreground'), signal),
					ratio(token('--border'), background),
					ratio(token('--border'), card)
				],
				headerUsesFullSignal
			};
		});
	};

	const values = await contrast();
	for (const ratio of values.text) expect(ratio).toBeGreaterThanOrEqual(4.5);
	for (const ratio of values.controls) expect(ratio).toBeGreaterThanOrEqual(3);
	expect(values.headerUsesFullSignal).toBe(true);
});

test('entity aliases render as selected and toggle without duplication', async ({
	page
}) => {
	await gotoApp(page, '/?hero=bebop');
	const hero = page.locator('main').getByRole('button', { name: 'Bebop', exact: true });

	await expect(hero).toHaveAttribute('aria-pressed', 'true');
	await expect(
		page.getByRole('button', { name: 'Remove Hero filter: Bebop' })
	).toBeVisible();
	await hero.click();
	await expect(page).toHaveURL(/\/$/);
});

test('patch entity deep links keep their target visible', async ({ page }) => {
	await gotoApp(page, '/?hero=Bebop');
	const link = page.getByRole('link', { name: 'Jump to Abrams in this patch' }).first();

	await expect(link).toHaveAttribute('href', /hero=Bebop%2CAbrams#abrams$/);
	await link.click();
	await expect(page.locator('#abrams')).toBeVisible();

	const saturatedFilter = Array.from({ length: 20 }, () => 'Bebop').join(',');
	await gotoApp(page, `/?hero=${encodeURIComponent(saturatedFilter)}`);
	const saturatedLink = page
		.getByRole('link', { name: 'Jump to Abrams in this patch' })
		.first();
	const href = await saturatedLink.getAttribute('href');
	expect(href).not.toBeNull();
	const linkedHeroes = new URL(href!, 'http://127.0.0.1').searchParams
		.get('hero')!
		.split(',');
	expect(linkedHeroes).toHaveLength(20);
	expect(linkedHeroes.at(-1)).toBe('Abrams');
});

test('the changelog API rejects invalid pagination', async ({ request }) => {
	const negative = await request.get('/api/changelogs?limit=-1');
	const infinite = await request.get('/api/changelogs?limit=Infinity');

	expect(negative.status()).toBe(400);
	expect(infinite.status()).toBe(400);
});

test('entity histories deduplicate shared forum and Steam sources', async ({ page }) => {
	await gotoApp(page, '/hero/kelvin');
	const history = page.getByRole('region', { name: 'Change History' });

	await expect(
		history.getByRole('link', { name: 'March 6th, 2026', exact: true })
	).toHaveCount(1);
});

test('deduplicated changelog slugs redirect to the canonical source', async ({
	page
}) => {
	await gotoApp(page, '/change/2026/gameplay-03-06?hero=Kelvin');
	await expect(page).toHaveURL(/\/change\/2026\/03-06\?hero=Kelvin$/);
});

test('hero abilities preserve slot order and scoped change counts', async ({ page }) => {
	await gotoApp(page, '/hero/the-doorman');

	const rail = page.getByRole('region', { name: 'Abilities' });
	const buttons = rail.getByRole('button');
	const names = ['Call Bell', 'Doorway', 'Luggage Cart', 'Hotel Guest'];

	await expect(buttons).toHaveCount(names.length);
	for (const [index, name] of names.entries()) {
		await expect(buttons.nth(index)).toHaveAccessibleName(
			new RegExp(`^${name}(?:\\s|$)`)
		);
	}

	const history = page.getByRole('region', { name: 'Change History' });
	const card = history.locator(
		'li:has(a[href="/change/2026/minor-07-28?hero=The+Doorman"])'
	);
	await expect(card.getByText('9 changes', { exact: true })).toBeVisible();
	await expect(
		card.getByRole('heading', { level: 3, name: 'July 28th, 2026' })
	).toBeVisible();
	await expect(card.locator('ul > li')).toHaveCount(9);

	const callBell = rail.getByRole('button', { name: /^Call Bell(?:\s|$)/ });
	await callBell.click();

	await expect(page).toHaveURL(/\/hero\/the-doorman\?ability=call-bell$/);
	await expect(callBell).toHaveAttribute('aria-pressed', 'true');
	await expect(card.getByText('1 change', { exact: true })).toBeVisible();
	await expect(card.locator('ul > li')).toHaveText([
		'Call Bell Charge Time increased from 6s to 7s'
	]);
	await expect(
		card.getByRole('heading', { level: 4, name: 'Call Bell Charge Time' })
	).toBeVisible();
	await expect(card.getByRole('heading', { level: 4, name: 'Doorway' })).toHaveCount(0);
	await expect(history.getByRole('button', { name: 'Show all changes' })).toBeVisible();
});

test('hero ability cards share a height and top-align their icons', async ({ page }) => {
	await gotoApp(page, '/hero/wraith');
	const cards = page.getByRole('region', { name: 'Abilities' }).getByRole('button');
	await expect(cards).toHaveCount(4);

	const layout = await cards.evaluateAll((elements) =>
		elements.map((element) => {
			const cardBox = element.getBoundingClientRect();
			const iconBox = element.querySelector('img')!.getBoundingClientRect();
			return {
				height: cardBox.height,
				iconOffset: iconBox.top - cardBox.top
			};
		})
	);
	const [reference, ...remaining] = layout;
	if (!reference) throw new Error('Expected at least one ability card');
	for (const card of remaining) {
		expect(card.height).toBeCloseTo(reference.height, 1);
		expect(card.iconOffset).toBeCloseTo(reference.iconOffset, 1);
	}
});

test('mog entity links target app routes without document extensions', async ({
	page
}) => {
	await gotoApp(page, '/change/2026/minor-07-28');
	const content = page.getByRole('region', { name: 'Changelog details' });

	await expect(
		content.getByRole('heading', { level: 2, name: 'Doorman' }).getByRole('link')
	).toHaveAttribute('href', '/hero/the-doorman');
	await expect(
		content
			.getByRole('heading', { level: 3, name: 'Call Bell Charge Time' })
			.getByRole('link')
	).toHaveAttribute('href', '/hero/the-doorman?ability=call-bell');
});

test('changelog contents surface ability icons on a card', async ({ page }, testInfo) => {
	await gotoApp(page, '/change/2026/minor-07-28');
	if (testInfo.project.name === 'mobile-chromium') {
		await page.getByRole('button', { name: 'Open table of contents' }).click();
	}

	const toc = page.getByRole('navigation', { name: 'Table of contents' });
	await expect(toc.getByRole('link', { name: /patch history/ })).toHaveCount(0);
	await expect(toc.locator('.toc-entity').first()).toContainText('Apollo');
	await expect(toc.locator('.toc-entity').nth(1)).toContainText('Billy');
	const ability = toc.getByRole('link', { name: 'Riposte', exact: true });
	await expect(ability.locator('img')).toHaveAttribute('src', /fencer_riposte\.webp$/);
	const [heroBox, abilityBox] = await Promise.all([
		toc.locator('.toc-entity').first().boundingBox(),
		ability.boundingBox()
	]);
	expect(heroBox).not.toBeNull();
	expect(abilityBox).not.toBeNull();
	expect(abilityBox!.x).toBeGreaterThan(heroBox!.x);
	const abilityUsesMutedText = await ability.evaluate((element) => {
		const reference = document.createElement('span');
		reference.style.color = 'var(--muted-foreground)';
		document.body.append(reference);
		const matches = getComputedStyle(element).color === getComputedStyle(reference).color;
		reference.remove();
		return matches;
	});
	expect(abilityUsesMutedText).toBe(true);
	const surface = await toc.evaluate(
		(element) => getComputedStyle(element).backgroundColor
	);
	expect(surface).not.toBe('rgba(0, 0, 0, 0)');
	await expect(toc.locator('[data-toc-tree]')).toHaveCSS('border-left-width', '0px');
	if (testInfo.project.name === 'desktop-chromium') {
		const scrollContainer = page.locator('[data-toc-scroll]');
		const scrollState = await scrollContainer.evaluate((element) => {
			const style = getComputedStyle(element);
			return {
				position: style.position,
				overflowY: style.overflowY,
				clientHeight: element.clientHeight,
				scrollHeight: element.scrollHeight
			};
		});
		expect(scrollState.position).toBe('sticky');
		expect(scrollState.overflowY).toBe('auto');
		expect(scrollState.scrollHeight).toBeGreaterThan(scrollState.clientHeight);
	}

	await gotoApp(page, '/change/2024/05-10');
	if (testInfo.project.name === 'mobile-chromium') {
		await page.getByRole('button', { name: 'Open table of contents' }).click();
	}
	const historicalToc = page.getByRole('navigation', { name: 'Table of contents' });
	await expect(
		historicalToc.getByRole('link', { name: 'Hook', exact: true }).locator('img')
	).toHaveCount(1);
});

test('mog headings use a clear hierarchy without decorative top rules', async ({
	page
}) => {
	await gotoApp(page, '/change/2026/minor-07-28');
	const content = page.getByRole('region', { name: 'Changelog details' });
	const section = content.getByRole('heading', { level: 1, name: 'Hero Changes' });
	const entity = content.getByRole('heading', { level: 2, name: 'Doorman' });
	const ability = content.getByRole('heading', {
		level: 3,
		name: 'Call Bell Charge Time'
	});

	const sizes = await Promise.all(
		[section, entity, ability].map((heading) =>
			heading.evaluate((element) => Number.parseFloat(getComputedStyle(element).fontSize))
		)
	);
	expect(sizes[0]).toBeGreaterThan(sizes[1] ?? 0);
	expect(sizes[1]).toBeGreaterThan(sizes[2] ?? 0);
	await expect
		.poll(() =>
			section.evaluate((element) => getComputedStyle(element, '::before').content)
		)
		.toBe('none');
});

test('patch dates are stable across viewer timezones', async ({ browser }) => {
	for (const timezoneId of ['Pacific/Honolulu', 'Asia/Tokyo']) {
		const page = await browser.newPage({ timezoneId });
		await gotoApp(page, LATEST_CHANGE);
		await expect(
			page.getByRole('heading', { level: 1, name: 'June 11th, 2026', exact: true })
		).toBeVisible();
		await page.close();
	}
});

test('skip navigation and active directory state are exposed', async ({ page }) => {
	await gotoApp(page, '/items');
	await page.keyboard.press('Tab');
	const skipLink = page.getByRole('link', { name: 'Skip to content' });
	await expect(skipLink).toBeFocused();
	await skipLink.click();
	await expect(page.locator('#main-content')).toBeFocused();
	await expect(page.getByRole('link', { name: 'Items', exact: true })).toHaveAttribute(
		'aria-current',
		'page'
	);
});

test('cards do not nest interactive controls', async ({ page }) => {
	for (const path of ['/', '/hero/abrams']) {
		await gotoApp(page, path);
		await expect(page.locator('a button, a [role="button"], button a')).toHaveCount(0);
	}
});

test('patch cards show preserved post image previews', async ({ page }) => {
	await gotoApp(page, '/');
	// The card's link is a stretched anchor around the heading, so the preview image
	// is a sibling of it rather than a descendant — scope to the card instead.
	const preview = page
		.locator('[data-patch-card]')
		.filter({ has: page.locator('a[href^="/change/2026/05-22"]') })
		.locator('img[data-patch-preview]');
	await expect(preview).toBeVisible();
	await expect(preview).toHaveAttribute(
		'src',
		/686d522ba79a25d36cf53ef92f7b0499501f7d2f/
	);
});

test('patch cards use responsive grid columns', async ({ page }, testInfo) => {
	await gotoApp(page, '/');
	const grid = page.locator('[data-patch-grid]').first();
	await expect(grid.locator('[data-patch-card]').first()).toBeVisible();

	const expectedColumns = testInfo.project.name === 'mobile-chromium' ? 1 : 4;
	const cards = await grid.locator('[data-patch-card]').all();
	expect(cards.length).toBeGreaterThanOrEqual(expectedColumns);

	const gridStyle = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
	const columnCount = gridStyle.split(' ').length;
	expect(columnCount).toBe(expectedColumns);
});

test('scrolling to the bottom appends cards to the same grid without reflow', async ({
	page
}) => {
	await gotoApp(page, '/');
	const grid = page.locator('[data-patch-grid]');
	const cards = grid.locator('[data-patch-card]');
	await expect(cards.first()).toBeVisible();
	const initialCardCount = await cards.count();
	await page.evaluate(() => document.fonts.ready);
	await grid.evaluate(async (element) => {
		await Promise.allSettled(
			element.getAnimations({ subtree: true }).map((animation) => animation.finished)
		);
	});
	const positionsBefore = await grid.evaluate((element) => {
		const origin = element.getBoundingClientRect();
		return [...element.querySelectorAll('[data-patch-card]')].map((card) => {
			const rect = card.getBoundingClientRect();
			return { x: rect.x - origin.x, y: rect.y - origin.y };
		});
	});

	await page.locator('[data-load-more-sentinel]').scrollIntoViewIfNeeded();
	await expect.poll(() => cards.count()).toBeGreaterThan(initialCardCount);
	await expect(page.locator('[data-patch-grid]')).toHaveCount(1);

	const positionsAfter = await grid.evaluate((element, count) => {
		const origin = element.getBoundingClientRect();
		return [...element.querySelectorAll('[data-patch-card]')]
			.slice(0, count)
			.map((card) => {
				const rect = card.getBoundingClientRect();
				return { x: rect.x - origin.x, y: rect.y - origin.y };
			});
	}, initialCardCount);
	expect(positionsAfter).toEqual(positionsBefore);
	expect(
		await cards
			.nth(initialCardCount)
			.evaluate((card) => card.parentElement?.matches('[data-patch-grid]'))
	).toBe(true);
});

test('reduced motion removes route delay and timeline targets remain usable', async ({
	page
}) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await gotoApp(page, '/hero/abrams');
	const timing = await page.locator('#main-content').evaluate((element) => {
		const style = getComputedStyle(element);
		return { delay: style.animationDelay, duration: style.animationDuration };
	});
	expect(timing.delay).toBe('0s');
	expect(Number.parseFloat(timing.duration)).toBeLessThanOrEqual(0.001);

	const timeline = page.getByRole('group', { name: 'Patch timeline for Abrams' });
	const timelineLinks = timeline.locator('a[aria-label^="View Abrams in the"]:visible');
	const timelineLink = timelineLinks.first();
	await expect(timelineLink).toBeVisible();
	const box = await timelineLink.boundingBox();
	expect(box?.width).toBeGreaterThanOrEqual(24);
	expect(box?.height).toBeGreaterThanOrEqual(24);
	await expect(timeline.locator('[aria-label*="not shown"]')).toHaveCount(0);
	await expect(timeline.locator('[data-timeline-date]:visible')).toHaveCount(
		await timelineLinks.count()
	);
});

test('timeline date labels do not collide at responsive breakpoints', async ({
	page
}, testInfo) => {
	test.skip(
		testInfo.project.name !== 'desktop-chromium',
		'One responsive pass is enough'
	);

	for (const width of [640, 768]) {
		await page.setViewportSize({ width, height: 900 });
		await gotoApp(page, '/hero/mcginnis');
		const labels = page
			.getByRole('group', { name: 'Patch timeline for McGinnis' })
			.locator('[data-timeline-date]:visible');
		await expect(labels.first()).toHaveText(/^[A-Z][a-z]{2} \d{1,2} '\d{2}$/);
		const boxes = await labels.evaluateAll((elements) =>
			elements.map((element) => {
				const rect = element.getBoundingClientRect();
				return { left: rect.left, right: rect.right };
			})
		);
		for (let index = 1; index < boxes.length; index += 1) {
			expect(boxes[index]!.left).toBeGreaterThanOrEqual(boxes[index - 1]!.right - 0.5);
		}
	}
});
