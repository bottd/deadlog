import { expect, test } from 'playwright/test';
import { expectNoHorizontalOverflow, gotoApp } from './helpers';

const PATCH = '/change/2026/09-16';

test('current details belong to their ability or item and work without JavaScript', async ({
	browser
}) => {
	const context = await browser.newContext({
		javaScriptEnabled: false,
		viewport: { width: 320, height: 720 }
	});
	try {
		const page = await context.newPage();
		await page.goto(PATCH);
		for (const selector of ['.hero.abrams .ability', '.item']) {
			const disclosure = page
				.locator(`.mog-content ${selector} [data-entity-context]`)
				.first();
			const summary = disclosure.locator('summary');
			await expect(summary).toHaveAccessibleName(/^Current details for .+ · client \d+$/);
			expect((await summary.boundingBox())?.height).toBeGreaterThanOrEqual(44);
			await expect(disclosure.locator('p').first()).toBeHidden();
			await summary.click();
			await expect(disclosure.getByText(/not as of this patch\.$/)).toBeVisible();
			await expect(
				disclosure.getByRole('link', { name: /full history$/ })
			).toHaveAttribute('href', /^\/(ability|item)\/[^?#]+$/);
			await expectNoHorizontalOverflow(page);
		}
		await expect(page.locator('#method')).toContainText(
			'not the game as it was when this patch shipped'
		);
		await expect(
			page.locator('main').getByRole('link', { name: 'Deadlock API', exact: true })
		).toHaveCount(1);
	} finally {
		await context.close();
	}
});

test('related purchase shares navigate to visible item notes from a filtered patch', async ({
	page
}, testInfo) => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	await gotoApp(page, `${PATCH}?hero=Abrams`);
	const hero = page.locator('.mog-content > .hero.abrams');
	const related = hero.locator('[data-related-reading]');
	await expect(related).toBeVisible();
	await expect(related).toContainText('Share of Abrams players who bought each');
	await expect(related).toContainText('before this patch.');
	const rows = related
		.getByRole('list', { name: 'Related item changes' })
		.getByRole('link');
	expect(await rows.count()).toBeLessThanOrEqual(3);
	const first = rows.first();
	await expect(first).toContainText(/\d+%/);
	const href = (await first.getAttribute('href'))!;
	expect(href).toMatch(/^\/change\/2026\/09-16#[a-z0-9-]+$/);
	const id = href.split('#')[1];
	await expect(page.locator(`[id="${id}"]`)).toBeHidden();
	const placement = await hero.evaluate((node) => {
		const related = node.querySelector('[data-related-reading]')!.getBoundingClientRect();
		const results = node.querySelector('[data-patch-impact]')!.getBoundingClientRect();
		const ability = [...node.querySelectorAll('.ability')]
			.at(-1)!
			.getBoundingClientRect();
		return related.top >= ability.bottom && results.top >= related.bottom;
	});
	expect(placement).toBe(true);
	await hero.locator('[data-entity-context] summary').first().focus();
	await page.keyboard.press('Enter');
	await expect(hero.locator('[data-entity-context]').first()).toHaveAttribute('open', '');
	await related.scrollIntoViewIfNeeded();
	await page.screenshot({ path: testInfo.outputPath('inline-reading.png') });
	await expectNoHorizontalOverflow(page);
	await first.click();
	await expect(page).toHaveURL(new RegExp(`${PATCH}#${id}$`));
	await expect(page.locator(`[id="${id}"]`)).toBeVisible();
	await expect(page.getByRole('link', { name: 'Show all changes' })).toHaveCount(0);
	await expectNoHorizontalOverflow(page);
	expect(errors).toEqual([]);
});

test('a previous recorded change remains attached to the original Mog bullet', async ({
	page
}) => {
	await gotoApp(page, '/item/majestic-leap');
	const historyLink = page.locator('[data-previous-change]').first();
	const previousHref = await historyLink.getAttribute('href');
	const previousLabel = await historyLink.getAttribute('aria-label');
	const annotation = await historyLink.innerText();
	const original = (await historyLink.locator('xpath=ancestor::li[1]').innerText())
		.replace(annotation, '')
		.trim();
	const entry = historyLink.locator('xpath=ancestor::li[@data-entity-patch]');
	await entry.getByRole('link', { name: 'Full patch', exact: true }).click();
	const inline = page
		.locator('.mog-content > .item.majestic-leap [data-previous-change]')
		.first();
	await expect(inline).toHaveAttribute('href', previousHref!);
	await expect(inline).toHaveAccessibleName(previousLabel!);
	await expect(inline.locator('xpath=ancestor::li[1]')).toContainText(original);
	await expect(inline).toHaveText(annotation);
	await expect(page.locator('#method')).toContainText('part of the archive');
	await expectNoHorizontalOverflow(page);
	await inline.click();
	await expect(page.locator(`[id="${previousHref!.split('#')[1]}"]`)).toBeVisible();
});
