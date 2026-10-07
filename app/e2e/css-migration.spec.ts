import { expect, test } from 'playwright/test';
import { MAX_ENTITY_FILTERS } from '../src/lib/queries/keys';
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

test('disabled hero filters keep their disabled appearance on hover', async ({
	page
}) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await gotoApp(page, '/');
	await page.getByText('Quick hero filters', { exact: true }).click();
	const selected = await page
		.getByRole('group', { name: /Filter by hero/ })
		.getByRole('button')
		.evaluateAll(
			(buttons, limit) =>
				buttons.slice(0, limit).map((button) => button.getAttribute('aria-label')!),
			MAX_ENTITY_FILTERS
		);
	expect(selected).toHaveLength(MAX_ENTITY_FILTERS);

	await gotoApp(page, `/?${new URLSearchParams({ hero: selected.join(',') })}`);
	await page.getByText('Quick hero filters', { exact: true }).click();
	const disabled = page
		.getByRole('group', { name: /Filter by hero/ })
		.getByRole('button', { name: /filter limit reached/ })
		.first();
	await expect(disabled).toBeDisabled();
	await expect(disabled).toHaveCSS('opacity', '0.3');
	const border = await disabled.evaluate(
		(element) => getComputedStyle(element).borderTopColor
	);
	await disabled.hover({ force: true });
	await expect(disabled).toHaveCSS('opacity', '0.3');
	await expect(disabled).toHaveCSS('border-top-color', border);
});

test('TOC subsections stay indented in the sidebar and mobile sheet', async ({
	page
}, testInfo) => {
	await gotoApp(page, '/change/2026/09-29');
	if (testInfo.project.name === 'mobile-chromium') {
		await page.getByRole('button', { name: 'Open table of contents' }).click();
	}
	const toc = page.getByRole('navigation', { name: 'Table of contents' });
	const section = toc.getByRole('link', { name: 'The Map', exact: true });
	const subsection = toc.getByRole('link', { name: 'Broadway (Blue Lane)', exact: true });
	await expect(section).toBeVisible();
	await expect(subsection).toBeVisible();
	const inset = (element: Element) =>
		Number.parseFloat(getComputedStyle(element).paddingInlineStart);
	const sectionInset = await section.evaluate(inset);
	const subsectionInset = await subsection.evaluate(inset);
	expect(subsectionInset).toBeGreaterThan(sectionInset);
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
