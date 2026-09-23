import { expect, test } from 'playwright/test';
import { expectNoHorizontalOverflow, gotoApp, openEntityFilter } from './helpers';

const LATEST_CHANGE = '/change/2026/minor-06-11';

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
		page.getByRole('button', { name: 'Remove Hero filter: Bebop' })
	).toBeVisible();
	await expect(page.locator('[data-matched-changes]').first()).toContainText('Bebop');
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
	await expectNoHorizontalOverflow(page);
});

test('an ability deep link keeps its entity scope and profile history', async ({
	page
}) => {
	await gotoApp(page, '/hero/the-doorman?ability=call-bell');
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
	await expect(patchLink).toHaveAttribute('href', /\/change\/[^?]+#doorman$/);
});

test('a changelog alias redirect keeps the query string', async ({ page }) => {
	await gotoApp(page, '/change/2026/gameplay-03-06?ref=test');
	await expect(page).toHaveURL(/\/change\/2026\/03-06\?ref=test$/);
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
	await page.getByRole('link', { name: 'Ammo Scavenger full history' }).first().click();
	await expect(
		page.getByRole('heading', { level: 1, name: 'Ammo Scavenger' })
	).toBeVisible();
	await expect(page.locator('main header')).toContainText('Historical');
});

test('mobile fallback offers a complete archive without JavaScript', async ({
	browser
}, testInfo) => {
	test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile no-JavaScript fallback');
	const context = await browser.newContext({
		javaScriptEnabled: false,
		reducedMotion: 'reduce',
		viewport: { width: 390, height: 844 }
	});
	const page = await context.newPage();
	await page.goto('http://127.0.0.1:4173/?hero=Bebop&item=Ammo+Scavenger&major=true');
	await page.evaluate(() => document.fonts.ready);

	// Playwright's text/role query engines skip noscript descendants even when the
	// browser renders them with JavaScript disabled, so locate this native fallback.
	const fallback = page.locator('header noscript p');
	await expect(fallback).toBeVisible();
	await expect(fallback).toContainText('Search needs JavaScript.');
	await expect(page.getByRole('searchbox')).toHaveCount(0);
	await page.locator('header noscript a[href="/archive"]').click();
	await expect(
		page.getByRole('heading', { level: 1, name: 'Patch archive' })
	).toBeVisible();
	const patches = page.locator('main a[href^="/change/"]');
	expect(await patches.count()).toBeGreaterThan(100);
	await patches.last().click();
	await expect(page.getByRole('region', { name: 'Changelog details' })).toBeVisible();
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
			const navigationFontSize = Math.min(
				...[
					...document.querySelectorAll(
						'header nav a[href="/heroes"], header nav a[href="/items"]'
					)
				].map((element) => Number.parseFloat(getComputedStyle(element).fontSize))
			);

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
				navigationFontSize
			};
		});
	};

	const values = await contrast();
	for (const ratio of values.text) expect(ratio).toBeGreaterThanOrEqual(4.5);
	for (const ratio of values.controls) expect(ratio).toBeGreaterThanOrEqual(3);
	expect(values.navigationFontSize).toBeGreaterThanOrEqual(12);
});

test('toasts resolve semantic colors without Tailwind theme aliases', async ({
	context,
	page
}, testInfo) => {
	test.skip(
		testInfo.project.name !== 'desktop-chromium',
		'One browser color calculation is enough'
	);
	await context.grantPermissions(['clipboard-read', 'clipboard-write'], {
		origin: 'http://localhost:4173'
	});
	await gotoApp(page, LATEST_CHANGE);
	await page.getByRole('button', { name: 'Copy link to clipboard' }).click();

	const toast = page
		.locator('[data-sonner-toast]')
		.filter({ hasText: 'Copied to clipboard' });
	await expect(toast).toBeVisible();
	const colors = await toast.evaluate((element) => {
		const reference = document.createElement('div');
		reference.style.backgroundColor = 'var(--popover)';
		reference.style.color = 'var(--popover-foreground)';
		reference.style.borderColor = 'var(--border)';
		document.body.append(reference);

		const actual = getComputedStyle(element);
		const expected = getComputedStyle(reference);
		const result = {
			actual: [actual.backgroundColor, actual.color, actual.borderColor],
			expected: [expected.backgroundColor, expected.color, expected.borderColor]
		};
		reference.remove();
		return result;
	});
	expect(colors.actual).toEqual(colors.expected);
});

test('classified entity pages resolve their restored category accents', async ({
	page
}, testInfo) => {
	test.skip(
		testInfo.project.name !== 'desktop-chromium',
		'One browser color calculation is enough'
	);

	const expectTokenColor = async (label: string, token: string) => {
		const element = page.getByText(label, { exact: true });
		await expect(element).toBeVisible();
		const colors = await element.evaluate((target, tokenName) => {
			const tokenValue = getComputedStyle(document.documentElement)
				.getPropertyValue(tokenName)
				.trim();
			const reference = document.createElement('span');
			reference.style.color = `var(${tokenName})`;
			document.body.append(reference);
			const result = {
				actual: getComputedStyle(target).color,
				expected: getComputedStyle(reference).color,
				tokenValue
			};
			reference.remove();
			return result;
		}, token);

		expect(colors.tokenValue).not.toBe('');
		expect(colors.actual).toBe(colors.expected);
	};

	await gotoApp(page, '/hero/abrams');
	await expectTokenColor('brawler hero', '--type-brawler');
	await gotoApp(page, '/item/active-reload');
	await expectTokenColor('Weapon item', '--item-weapon');
});

test('the mobile sheet close control uses the shared focus-visible ring', async ({
	page
}, testInfo) => {
	test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile sheet regression');
	await gotoApp(page, '/');
	await page.getByRole('button', { name: /Search & filter/ }).click();

	const close = page.getByRole('button', { name: 'Close' });
	await expect(close).toBeVisible();
	const target = await close.boundingBox();
	expect(target?.width).toBeGreaterThanOrEqual(44);
	expect(target?.height).toBeGreaterThanOrEqual(44);
	await close.focus();
	await page.keyboard.press('Tab');
	await page.keyboard.press('Shift+Tab');
	await expect(close).toBeFocused();
	const boxShadow = await close.evaluate(
		(element) => getComputedStyle(element).boxShadow
	);
	expect(boxShadow).toMatch(/0px 0px 0px 3px/);
});

test('entity aliases render as selected and toggle without duplication', async ({
	page
}) => {
	await gotoApp(page, '/?hero=bebop');
	await page.getByText('Quick hero filters', { exact: true }).click();
	const hero = page.locator('main').getByRole('button', { name: 'Bebop', exact: true });

	await expect(hero).toHaveAttribute('aria-pressed', 'true');
	await expect(
		page.getByRole('button', { name: 'Remove Hero filter: Bebop' })
	).toBeVisible();
	await hero.click();
	await expect(page).toHaveURL(/\/$/);
});

test('filtered results retain scope and expose direct entity histories', async ({
	page
}) => {
	await gotoApp(page, '/?hero=Bebop');
	await expect(page.locator('[data-patch-card]').first().locator('h2 a')).toHaveAttribute(
		'href',
		/^\/change\/[^?]+\?hero=Bebop$/
	);
	await expect(
		page.getByRole('link', { name: 'Bebop full history' }).first()
	).toHaveAttribute('href', '/hero/bebop');
	await gotoApp(page, '/?hero=Bebop,Abrams');
	const link = page.locator('[data-patch-card]').first().locator('h2 a');
	await expect(link).toHaveAttribute('href', /hero=Bebop%2CAbrams$/);
	await link.click();
	await expect(
		page.getByRole('region', { name: 'Changelog details' }).locator('#abrams')
	).toBeVisible();
	const current = new URL(page.url());
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		'href',
		`https://deadlog.io${current.pathname}`
	);

	await gotoApp(page, '/');
	const entityLink = page
		.getByRole('link', { name: 'Jump to Abrams in this patch' })
		.first();
	await expect(entityLink).toHaveAttribute('href', /\/change\/[^?]+#abrams$/);
	await entityLink.click();
	await expect(page.locator('#abrams')).toBeVisible();
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
	const card = history.locator('li:has(a[href="/change/2026/minor-07-28#doorman"])');
	await expect(card.getByText('9 changes', { exact: true })).toBeVisible();
	await expect(card.getByRole('heading', { name: 'July 28th, 2026' })).toBeVisible();
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
		card.getByRole('heading', { name: 'Call Bell Charge Time' })
	).toBeVisible();
	await expect(card.getByRole('heading', { name: 'Doorway' })).toHaveCount(0);
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
		content.getByRole('heading', { level: 3, name: 'Doorman' }).getByRole('link')
	).toHaveAttribute('href', '/hero/the-doorman');
	await expect(
		content
			.getByRole('heading', { level: 4, name: 'Call Bell Charge Time' })
			.getByRole('link')
	).toHaveAttribute('href', '/ability/call-bell');

	const entityImage = content.locator('.hero img').first();
	await expect(entityImage).toHaveAttribute('width', '40');
	await expect(entityImage).toHaveAttribute('height', '40');
	await expect(entityImage).toHaveAttribute('loading', 'lazy');
	await expect(entityImage).toHaveAttribute('decoding', 'async');
	const abilityImage = content.locator('.ability img').first();
	await expect(abilityImage).toHaveAttribute('width', '24');
	await expect(abilityImage).toHaveAttribute('height', '24');
	await expect(abilityImage).toHaveAttribute('loading', 'lazy');
	await expect(abilityImage).toHaveAttribute('decoding', 'async');
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
		reference.style.color =
			'color-mix(in srgb, var(--muted-foreground) 100%, transparent)';
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
	const section = content.getByRole('heading', { level: 2, name: 'Hero Changes' });
	const entity = content.getByRole('heading', { level: 3, name: 'Doorman' });
	const ability = content.getByRole('heading', {
		level: 4,
		name: 'Call Bell Charge Time'
	});
	await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);

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

test('patch articles expose their original source in markup and structured data', async ({
	page
}) => {
	await gotoApp(page, LATEST_CHANGE);
	const original = page.getByRole('link', { name: 'View original patch notes' });
	await expect(original).toHaveAttribute(
		'href',
		/^https:\/\/store\.steampowered\.com\/news\/externalpost\/steam_community_announcements\/\d+$/
	);
	await expect(original).toHaveAttribute('target', '_blank');
	const sourceUrl = await original.getAttribute('href');
	const basedOnUrl = await page.locator('script[type="application/ld+json"]').evaluateAll(
		(scripts) =>
			scripts
				.flatMap((script) => {
					const value = JSON.parse(script.textContent ?? '{}');
					return value['@graph'] ?? [value];
				})
				.find((entry) => entry['@type'] === 'Article')?.isBasedOn?.url
	);
	expect(basedOnUrl).toBe(sourceUrl);

	await gotoApp(page, '/change/2026/apollo-a-cut-above');
	const announcementImage = page
		.getByRole('region', { name: 'Changelog details' })
		.locator('img')
		.first();
	await expect(announcementImage).toHaveAttribute('loading', 'eager');
	await expect(announcementImage).toHaveAttribute('decoding', 'async');
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

test('patch cards navigate from their full card surfaces', async ({ page }) => {
	await gotoApp(page, '/');
	await expect(
		page.getByRole('heading', { level: 1, name: 'Deadlock Patch Notes & Changelog' })
	).toBeVisible();
	await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);

	const featuredLink = page.getByRole('link', {
		name: /^Latest patch,.*View full patch\.$/i
	});
	const featuredHref = await featuredLink.getAttribute('href');
	expect(featuredHref).not.toBeNull();
	const cta = page.getByText('View full patch', { exact: true });
	await cta.scrollIntoViewIfNeeded();
	const ctaBox = await cta.boundingBox();
	expect(ctaBox).not.toBeNull();
	await page.mouse.click(ctaBox!.x + ctaBox!.width / 2, ctaBox!.y + ctaBox!.height / 2);
	await expect(page).toHaveURL(new URL(featuredHref!, page.url()).href);

	await gotoApp(page, '/');
	const card = page.locator('[data-patch-card]').first();
	const cardHref = await card.locator('h2 a').getAttribute('href');
	expect(cardHref).not.toBeNull();
	await card.scrollIntoViewIfNeeded();
	const cardBox = await card.boundingBox();
	expect(cardBox).not.toBeNull();
	await page.mouse.click(
		cardBox!.x + cardBox!.width - 12,
		cardBox!.y + cardBox!.height - 12
	);
	await expect(page).toHaveURL(new URL(cardHref!, page.url()).href);
});

test('patch cards show preserved post image previews', async ({ page, request }) => {
	const { rows } = await (await request.get('/feed-index.json')).json();
	const patch = rows
		.slice(1)
		.find((entry: { previewImage: string | null }) => entry.previewImage);
	expect(patch).toBeDefined();

	await gotoApp(page, '/');
	// The card's link is a stretched anchor around the heading, so the preview image
	// is a sibling of it rather than a descendant — scope to the card instead.
	const preview = page
		.locator('[data-patch-card]')
		.filter({ has: page.locator(`a[href^="/change/${patch.slug}"]`) })
		.first()
		.locator('img[data-patch-preview]');
	await expect(preview).toHaveAttribute('src', patch.previewImage);
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

test('reduced motion removes route delay and recent patch links remain usable', async ({
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

	await page.getByText('Archive details', { exact: true }).click();
	const timeline = page.getByRole('navigation', { name: 'Recent patches for Abrams' });
	const timelineLinks = timeline.locator('a[aria-label^="View Abrams in the"]:visible');
	const timelineLink = timelineLinks.first();
	await expect(timelineLink).toBeVisible();
	const box = await timelineLink.boundingBox();
	expect(box?.width).toBeGreaterThanOrEqual(44);
	expect(box?.height).toBeGreaterThanOrEqual(44);
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
		await page.getByText('Archive details', { exact: true }).click();
		const labels = page
			.getByRole('navigation', { name: 'Recent patches for McGinnis' })
			.locator('[data-timeline-date]:visible');
		await expect(labels.first()).toHaveText(/^[A-Z][a-z]{2} \d{1,2}, \d{4}$/);
		const boxes = await labels.evaluateAll((elements) =>
			elements.map((element) => {
				const rect = element.getBoundingClientRect();
				return { left: rect.left, right: rect.right, top: rect.top };
			})
		);
		for (let index = 1; index < boxes.length; index += 1) {
			if (Math.abs(boxes[index]!.top - boxes[index - 1]!.top) < 1) {
				expect(boxes[index]!.left).toBeGreaterThanOrEqual(boxes[index - 1]!.right - 0.5);
			}
		}
	}
});

test('hero histories report measured patch impact without a direction cue', async ({
	page
}) => {
	await gotoApp(page, '/hero/abrams');

	const impact = page.locator('[data-patch-impact]');
	await expect(impact.first()).toBeVisible();
	await expect(impact.first().locator('[data-impact-grid]')).toBeHidden();
	await impact.first().locator('summary').click();

	const cells = impact.first().locator('[data-impact-grid] > span');
	await expect(cells.nth(1)).toHaveText('WIN');
	await expect(cells.nth(2)).toHaveText('PICK');
	await expect(cells.nth(3)).toContainText('ALL RANKS');
	await expect(cells.nth(4)).toHaveText(/^([\d.]+%|—) → ([\d.]+%|—)$/);
	await expect(cells.nth(5)).toHaveText(/^([\d.]+%|—) → ([\d.]+%|—)$/);
	await expect(cells.nth(4)).toHaveCSS('white-space', 'nowrap');
	await expect(impact.first().locator('.sr-only').first()).toHaveText(
		/^Match results around this patch, .+ before, .+ after\. All ranks\. Win rate /
	);

	const method = page.locator('#method');
	await expect(
		method.getByRole('heading', { name: 'Match results around this patch' })
	).toBeVisible();
	await expect(method).toContainText('is not the effect of any one line');
	await expect(method).toContainText('average badge across both teams');
	await expect(
		page.locator('main').getByRole('link', { name: 'Deadlock API' })
	).toHaveCount(1);

	const colors = await impact
		.locator('[data-impact-grid] > span:not(:empty)')
		.evaluateAll((lines) => {
			const probe = document.createElement('span');
			probe.style.color = 'var(--primary)';
			document.body.append(probe);
			const primary = getComputedStyle(probe).color;
			probe.remove();
			return {
				primary,
				used: [...new Set(lines.map((el) => getComputedStyle(el).color))]
			};
		});
	expect(colors.used).not.toContain(colors.primary);
	expect(colors.used.length).toBeLessThanOrEqual(2);

	await expect(page.getByRole('link', { name: 'Deadlock API' }).first()).toHaveAttribute(
		'href',
		'https://deadlock-api.com'
	);

	await expectNoHorizontalOverflow(page);
});

test('ability histories carry no patch impact lines', async ({ page }) => {
	await gotoApp(page, '/ability/affliction');

	await expect(page.locator('[data-patch-impact]')).toHaveCount(0);
	await expect(
		page.getByRole('heading', { name: 'Match results around this patch' })
	).toHaveCount(0);
	await expect(
		page.locator('main').getByRole('link', { name: 'Deadlock API' })
	).toHaveCount(1);

	const heroResults = page.getByRole('link', { name: 'Pocket match results' }).first();
	const href = await heroResults.getAttribute('href');
	expect(href).toMatch(/^\/hero\/pocket#history-\d+$/);
	await page.goto(href!);
	await expect(page.locator(`#${href!.split('#')[1]} [data-patch-impact]`)).toHaveCount(
		1
	);
});

test('hero change groups disclose current ability details without scripts', async ({
	browser
}) => {
	const context = await browser.newContext({
		javaScriptEnabled: false,
		viewport: { width: 320, height: 720 }
	});
	const page = await context.newPage();
	await page.goto('/hero/abrams');

	const disclosure = page.locator('[data-entity-context]').first();
	const summary = disclosure.locator('summary');
	await expect(summary).toHaveText(/^Current details for .+ · client \d+$/);
	await expect(disclosure.locator('p').first()).toBeHidden();

	await summary.click();

	await expect(disclosure.getByText(/, not as of this patch\.$/)).toBeVisible();
	const name = (await summary.locator('.sr-only').innerText()).replace(/^\s*for\s+/, '');
	const history = disclosure.getByRole('link', { name: `${name} full history` });
	await expect(history).toHaveAttribute('href', /^\/ability\/[a-z0-9-]+$/);
	const heading = disclosure.locator('xpath=ancestor::div[.//h5][1]//h5');
	await expect(heading).toHaveText(name);

	await expect(
		disclosure.locator(':scope > div svg, span[class*="highlight"]')
	).toHaveCount(0);
	expect(await disclosure.innerText()).not.toMatch(/[<>{}]/);
	await expectNoHorizontalOverflow(page);
	await context.close();
});

test('item and ability pages describe their own entity once, in the header', async ({
	page
}) => {
	for (const path of ['/item/toxic-bullets', '/ability/afterburn']) {
		await gotoApp(page, path);

		const disclosures = page.locator('[data-entity-context]');
		await expect(disclosures).toHaveCount(1);
		await expect(page.locator('header [data-entity-context] summary')).toHaveText(
			/^About .+ · client \d+$/
		);
		await disclosures.locator('summary').click();
		await expect(
			disclosures.getByText(/^Describes .+ as of client \d+\.$/)
		).toBeVisible();
		await expect(disclosures.getByRole('link')).toHaveCount(0);
	}
});

test('item histories lead with purchase share and name their sample', async ({
	page
}) => {
	await gotoApp(page, '/item/toxic-bullets');

	const cells = page
		.locator('[data-patch-impact] [data-impact-grid]')
		.first()
		.locator('> span');
	await expect(cells.nth(1)).toHaveText('BOUGHT');
	await expect(cells.nth(2)).toHaveText('BUYER WIN');
	await expect(page.locator('[data-patch-impact]').first()).toContainText(
		'player-matches'
	);
	await expect(page.locator('#method')).toContainText('share of players who bought');
	await expectNoHorizontalOverflow(page);
});

test('match results disclose their windows and link to the method note', async ({
	browser
}) => {
	const context = await browser.newContext({
		javaScriptEnabled: false,
		viewport: { width: 320, height: 720 }
	});
	const page = await context.newPage();
	await page.goto('/hero/abrams');

	const impact = page.locator('[data-patch-impact]').first();
	const summary = impact.locator('summary');
	const box = await summary.boundingBox();
	expect(box?.height).toBeGreaterThanOrEqual(44);
	await expect(impact.locator('table')).toBeHidden();

	await summary.click();

	const rows = impact.locator('tbody tr');
	const day = '\\d{1,2}(–\\d{1,2})? [A-Z][a-z]{2}( – \\d{1,2} [A-Z][a-z]{2})?( \\d{4})?';
	await expect(impact.locator('[data-impact-caption]')).toHaveText(
		new RegExp(`^Match results · ${day} → ${day}$`)
	);
	await expect(rows).toHaveCount(3);
	await expect(rows.nth(2).locator('td').first()).toHaveText(/^\d+ \/ \d+$/);
	await expect(
		impact.getByRole('link', { name: 'How this is measured' })
	).toHaveAttribute('href', '#method');
	await expect(page.locator('#method')).toContainText(/Method \d+, last collected /);
	await expectNoHorizontalOverflow(page);
	await context.close();
});

test('hero entries list the changed items their players bought, linked to real sections', async ({
	page
}) => {
	await gotoApp(page, '/hero/abrams');

	const block = page.locator('[data-related-items]').first();
	await expect(
		block.getByRole('heading', { name: 'Also changed in this patch' })
	).toBeVisible();
	await expect(block).toContainText(
		/Share of Abrams players who bought each, .+, before this patch\./
	);
	await expect(block).not.toContainText(/recommended|best|core|synergy/i);

	const rows = block
		.getByRole('list', { name: 'Related item changes' })
		.locator(':scope > li');
	expect(await rows.count()).toBeLessThanOrEqual(3);
	const first = rows.first();
	await expect(first.locator('[data-share-bar]')).toBeVisible();
	await expect(first).toContainText(/(<1|\d+)%/);
	await expect(first.locator('ul li').first()).toBeVisible();

	const entry = block.locator('xpath=ancestor::li[@data-entity-patch]');
	const bullets = await entry.locator('ul').first().boundingBox();
	const related = await block.boundingBox();
	const impact = await entry.locator('[data-patch-impact]').boundingBox();
	expect(related!.y).toBeGreaterThan(bullets!.y);
	expect(impact!.y).toBeGreaterThan(related!.y);

	const href = await first.getByRole('link').first().getAttribute('href');
	expect(href).toMatch(/^\/change\/.+#.+/);
	await gotoApp(page, href!);
	await expect(page.locator(`[id="${href!.split('#')[1]}"]`)).toHaveCount(1);
});

test('related items stay inside a 320px viewport', async ({ browser }) => {
	const context = await browser.newContext({ viewport: { width: 320, height: 720 } });
	const page = await context.newPage();
	await page.goto('/hero/abrams');
	await expect(page.locator('[data-share-bar]').first()).toBeVisible();
	await expectNoHorizontalOverflow(page);
	await context.close();
});

test('a bullet links to the previous recorded change of the same property', async ({
	page
}) => {
	await gotoApp(page, '/item/majestic-leap');

	const previous = page.locator('[data-previous-change]').first();
	await expect(previous).toHaveText(
		/^prev\. \S+ → \S+ · \d{1,2} [A-Z][a-z]{2}( \d{4})?$/
	);
	await expect(previous).toHaveAccessibleName(
		/^Previous recorded cooldown change: \S+ to \S+, .+\.$/
	);
	const bullet = previous.locator('xpath=..');
	await expect(bullet).toContainText(/Cooldown (increased|reduced) from/);
	await expect(page.locator('main')).not.toContainText(/reverted|net change/i);

	const href = await previous.getAttribute('href');
	expect(href).toMatch(/^\/change\/.+#.+/);
	await expectNoHorizontalOverflow(page);
	await gotoApp(page, href!);
	await expect(page.locator(`[id="${href!.split('#')[1]}"]`)).toHaveCount(1);
});

test('an ability page keeps its previous-change links and they resolve', async ({
	page
}) => {
	await gotoApp(page, '/ability/ground-strike');

	const previous = page.locator('[data-previous-change]').first();
	await expect(previous).toBeVisible();
	const href = await previous.getAttribute('href');
	await gotoApp(page, href!);
	await expect(page.locator(`[id="${href!.split('#')[1]}"]`)).toHaveCount(1);
});
