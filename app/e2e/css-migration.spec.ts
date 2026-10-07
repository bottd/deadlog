import { expect, test } from 'playwright/test';
import { gotoApp, openEntityFilter } from './helpers';

test('search controls keep their sizing after client-side route styles load', async ({
	page
}, testInfo) => {
	const mobile = testInfo.project.name === 'mobile-chromium';
	await gotoApp(page, '/change/2026/minor-07-28');
	await page
		.getByRole('navigation', { name: 'Primary navigation' })
		.getByRole('link', { name: 'Heroes', exact: true })
		.click();
	await expect(page).toHaveURL(/\/heroes$/);

	const input = await openEntityFilter(page, mobile);
	await input.fill('Bebop');
	const submit = page.getByRole('button', { name: 'Search changelog', exact: true });
	await expect(submit).toHaveCSS('width', '44px');
	await expect(submit).toHaveCSS('height', '44px');
	await expect(input).toHaveCSS('font-size', '16px');
	await expect(
		page.getByRole('option', { name: /Bebop, Hero, not selected/ })
	).toBeVisible();

	if (!mobile) {
		const command = page.locator('[data-slot="command"]').filter({ has: input });
		const box = await command.boundingBox();
		expect(box?.height).toBeGreaterThanOrEqual(44);
		expect(box?.height).toBeLessThan(60);
		await expect(command).toHaveCSS('overflow', 'visible');
	}

	await input.press('Tab');
	await expect(submit).toBeFocused();
	await expect(submit).not.toHaveCSS('box-shadow', 'none');
});

test('Mog galleries keep their own layout and portalled lightbox controls', async ({
	page
}) => {
	await page.route('**/apps/deadlock/images/react/cityneversleeps/**', (route) =>
		route.fulfill({
			contentType: 'image/svg+xml',
			body: '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="640" height="360" fill="#34302c"/></svg>'
		})
	);
	await gotoApp(page, '/change/2026/09-29');
	const gallery = page.getByRole('list', { name: 'Image gallery' }).first();
	await gallery.scrollIntoViewIfNeeded();
	await expect(gallery).toHaveCSS('display', 'grid');
	await expect(gallery).toHaveCSS('margin-top', '24px');
	await expect(gallery).toHaveCSS('margin-left', '0px');
	const item = gallery.locator(':scope > li').first();
	await expect(item).toHaveCSS('display', 'flex');
	expect(await item.evaluate((node) => getComputedStyle(node, '::before').content)).toBe(
		'none'
	);
	await gallery.getByRole('button').first().click();
	const dialog = page.getByRole('dialog');
	await expect(dialog).toBeVisible();
	await expect(dialog).toHaveCSS('position', 'fixed');
	const next = dialog.getByRole('button', { name: 'Next image' });
	await expect(next).toHaveCSS('width', '44px');
	await expect(next).toHaveCSS('height', '44px');
	await next.click();
	await expect(dialog.getByText('2 / 2', { exact: true })).toBeVisible();
	await page.keyboard.press('Escape');
	await expect(dialog).not.toBeVisible();
});
