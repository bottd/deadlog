import { expect, test } from 'playwright/test';

const LATEST_CHANGE = '/change/1835236783562074';

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

	await expect(page).toHaveURL(/\/?\?hero=Bebop$/);
	await expect(page.getByText(/patches? matching all 1 filter/i)).toBeVisible();
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
	await gotoApp(page, '/hero/the-doorman');
	await expect(
		page.getByRole('heading', { level: 1, name: 'The Doorman' })
	).toBeVisible();
	const patchLink = page
		.getByRole('region', { name: 'Change History' })
		.getByRole('link')
		.first();
	await expect(patchLink).toHaveAttribute('href', /\/change\/\d+\?hero=The\+Doorman$/);
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
	const preview = page.locator('a[href^="/change/135477"] img[data-patch-preview]');
	await expect(preview).toBeVisible();
	await expect(preview).toHaveAttribute(
		'src',
		/686d522ba79a25d36cf53ef92f7b0499501f7d2f/
	);
});

test('patch cards use responsive masonry columns', async ({ page }, testInfo) => {
	await gotoApp(page, '/');
	const masonry = page.locator('[data-patch-masonry]').first();
	await expect(masonry.locator('[data-patch-card]').first()).toBeVisible();
	const columnCount = await masonry.evaluate((element) =>
		Number.parseInt(getComputedStyle(element).columnCount, 10)
	);
	expect(columnCount).toBe(testInfo.project.name === 'mobile-chromium' ? 1 : 4);
});

test('load more appends a masonry page below existing cards without reflow', async ({
	page
}) => {
	await gotoApp(page, '/');
	const firstPage = page.locator('[data-patch-masonry-page="0"]');
	await page.evaluate(() => document.fonts.ready);
	await firstPage.evaluate(async (element) => {
		await Promise.allSettled(
			element.getAnimations({ subtree: true }).map((animation) => animation.finished)
		);
	});
	const positionsBefore = await firstPage.evaluate((element) => {
		const origin = element.getBoundingClientRect();
		return [...element.querySelectorAll('[data-patch-card]')].map((card) => {
			const rect = card.getBoundingClientRect();
			return { x: rect.x - origin.x, y: rect.y - origin.y };
		});
	});

	await page.getByRole('button', { name: 'Load More' }).click();
	const secondPage = page.locator('[data-patch-masonry-page="1"]');
	await expect(secondPage.locator('[data-patch-card]').first()).toBeVisible();

	const positionsAfter = await firstPage.evaluate((element) => {
		const origin = element.getBoundingClientRect();
		return [...element.querySelectorAll('[data-patch-card]')].map((card) => {
			const rect = card.getBoundingClientRect();
			return { x: rect.x - origin.x, y: rect.y - origin.y };
		});
	});
	expect(positionsAfter).toEqual(positionsBefore);

	const [firstPageBox, secondPageBox] = await Promise.all([
		firstPage.boundingBox(),
		secondPage.boundingBox()
	]);
	expect(firstPageBox).not.toBeNull();
	expect(secondPageBox).not.toBeNull();
	expect(secondPageBox!.y).toBeGreaterThanOrEqual(firstPageBox!.y + firstPageBox!.height);
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

	const timelineLink = page
		.locator('a[aria-label^="View Abrams in the"]:visible')
		.first();
	await expect(timelineLink).toBeVisible();
	const box = await timelineLink.boundingBox();
	expect(box?.width).toBeGreaterThanOrEqual(24);
	expect(box?.height).toBeGreaterThanOrEqual(24);
});
