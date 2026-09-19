import { expect, test } from 'playwright/test';
import { gotoApp, openEntityFilter } from './helpers';

test('entity result excerpts answer the selected question', async ({ page }) => {
	await gotoApp(page, '/?hero=Abrams');
	const result = page.locator('[data-patch-card]').first();
	await expect(result).toBeVisible();

	const matched = result.locator('[data-matched-changes]');
	await expect(matched).not.toBeEmpty();
	await expect(matched).not.toContainText('Unstable Rift');
	await expect(result.getByRole('link', { name: 'Abrams full history' })).toHaveAttribute(
		'href',
		'/hero/abrams'
	);
	await expect(page.getByText(/Latest matching patch:/)).toBeVisible();
});

test('keyword results display and highlight the matching passage', async ({ page }) => {
	await gotoApp(page, '/?q=parry');
	await expect(page.locator('[data-patch-card] mark').first()).toHaveText(/parry/i);
});

test('global entity lookup has a direct history destination', async ({
	page
}, testInfo) => {
	await gotoApp(page, '/');
	const mobile = testInfo.project.name === 'mobile-chromium';
	const input = await openEntityFilter(page, mobile);
	await input.fill('Abrams');
	await page
		.getByRole('navigation', { name: 'Entity histories' })
		.getByRole('link', { name: 'Abrams', exact: true })
		.click();
	await expect(page).toHaveURL(/\/hero\/abrams$/);
	await expect(page.getByRole('heading', { level: 1, name: 'Abrams' })).toBeVisible();
});

test('rapid filters and browser history preserve committed selections', async ({
	page
}) => {
	await gotoApp(page, '/');
	await page.getByText('Quick hero filters', { exact: true }).click();
	await Promise.all([
		page
			.locator('main')
			.getByRole('button', { name: 'Abrams', exact: true })
			.dispatchEvent('click'),
		page
			.locator('main')
			.getByRole('button', { name: 'Bebop', exact: true })
			.dispatchEvent('click')
	]);
	await expect(
		page.getByRole('button', { name: 'Remove Hero filter: Abrams' })
	).toBeVisible();
	await expect(
		page.getByRole('button', { name: 'Remove Hero filter: Bebop' })
	).toBeVisible();
	await expect(page).toHaveURL(/hero=(?:Abrams%2CBebop|Bebop%2CAbrams)$/);
	await page.getByRole('button', { name: 'Remove Hero filter: Bebop' }).click();
	await expect(page).toHaveURL(/hero=Abrams$/);
	await page.goBack();
	await expect(
		page.getByRole('button', { name: 'Remove Hero filter: Bebop' })
	).toBeVisible();
});

test('directory name and category filters survive reload', async ({ page }) => {
	await gotoApp(page, '/items');
	await page
		.getByRole('searchbox', { name: 'Filter items by name' })
		.fill('Active Reload');
	await page
		.getByRole('group', { name: 'Item category' })
		.getByRole('button', { name: 'weapon', exact: true })
		.click();
	await expect(page).toHaveURL(/name=Active\+Reload&category=weapon$/);
	await page.reload();
	await expect(page.getByRole('searchbox', { name: 'Filter items by name' })).toHaveValue(
		'Active Reload'
	);
	await expect(page.getByRole('link', { name: /Active Reload/ })).toBeVisible();
	await expect(page.getByRole('link', { name: /Berserker/ })).toHaveCount(0);
});

test('mobile entity lookup exposes the first actual change in the initial viewport', async ({
	page
}, testInfo) => {
	test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile reading hierarchy');
	await page.setViewportSize({ width: 390, height: 844 });
	await gotoApp(page, '/hero/abrams');
	await page.evaluate(() => document.fonts.ready);
	const bullet = page.locator('[data-entity-patch] ul li').first();
	await expect(bullet).toBeVisible();
	const box = await bullet.boundingBox();
	expect(box).not.toBeNull();
	expect(box!.y + box!.height).toBeLessThan(844);
});

test('scrolling the unfiltered feed loads small pages, not the feed index', async ({
	page
}) => {
	const requested: string[] = [];
	page.on('request', (request) => requested.push(new URL(request.url()).pathname));

	await gotoApp(page, '/');
	const cards = page.locator('[data-patch-card]');
	await expect(cards.first()).toBeVisible();
	const initial = await cards.count();

	const nextPage = page.waitForResponse((response) =>
		response.url().endsWith('/feed-page/1.json')
	);
	await page.mouse.wheel(0, 100_000);
	await cards.last().scrollIntoViewIfNeeded();
	const body = await (await nextPage).body();

	await expect.poll(() => cards.count()).toBeGreaterThan(initial);
	expect(body.byteLength).toBeLessThan(40_000);
	expect(requested).not.toContain('/feed-index.json');
	expect(requested).not.toContain('/feed-groups.json');
});
