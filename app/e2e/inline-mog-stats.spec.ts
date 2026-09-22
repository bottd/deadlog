import { expect, test } from 'playwright/test';
import { expectNoHorizontalOverflow, gotoApp } from './helpers';

const PATCH = '/change/2026/09-16';

test('full patches keep match results inside each entity, below the notes', async ({
	page
}, testInfo) => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	await gotoApp(page, PATCH);
	const hero = page.locator('.mog-content > div.hero.abrams');
	const results = hero.locator('[data-patch-impact]');
	await expect(results).toHaveCount(1);
	const grid = results.locator('[data-impact-grid]');
	await expect(grid.locator('> span').nth(1)).toHaveText('WIN');
	await expect(grid.locator('> span').nth(2)).toHaveText('PICK');
	await expect(grid.locator('[data-impact-row="all"]')).toContainText('ALL RANKS');
	await expect(grid.locator('[data-impact-row="high"]')).toContainText('HIGH RANK');
	await expect(results.locator('[data-impact-notes]')).toHaveText(
		/^49k matches after( · \d+ days? so far)?$/
	);
	await expect(results.locator('summary .sr-only')).toHaveText(
		/^Match results around this patch\. All ranks\. Win rate /
	);
	await expect(hero.locator('div.ability [data-patch-impact]')).toHaveCount(0);
	await expect(hero.locator(':scope > h3')).toHaveText('Abrams');
	await expect(hero.locator(':scope > h3 a')).toHaveCSS(
		'color',
		await hero
			.locator(':scope > h3')
			.evaluate((heading) => getComputedStyle(heading).color)
	);
	await expect(hero.locator('.ability h4').first()).toHaveText('Infernal Resilience');
	await expect(hero.locator(':scope > p img')).toHaveAttribute('width', '40');
	await expect(hero.locator('.ability img').first()).toHaveAttribute('width', '24');
	await expect(hero.locator('a[href$=".html"]')).toHaveCount(0);
	await expect(page.locator('.mog-content [data-impact]')).toHaveCount(0);
	const placement = await hero.evaluate((node) => {
		const lastNotes =
			[...node.querySelectorAll('div.ability')].at(-1) ?? node.querySelector('ul');
		const stats = node.querySelector('[data-patch-impact]');
		return lastNotes && stats
			? lastNotes.getBoundingClientRect().bottom <= stats.getBoundingClientRect().top
			: false;
	});
	expect(placement).toBe(true);
	await results.locator('summary').click();
	await expect(results.locator('tbody tr').first()).toContainText('2–15 Sep');
	await expect(
		results.getByRole('link', { name: 'How this is measured' })
	).toHaveAttribute('href', '#method');
	await expect(page.locator('#method')).toHaveCount(1);
	await expect(page.locator('#method')).toContainText('For heroes');
	await expect(page.locator('#method')).toContainText('For items');
	await expect(page.locator('#method')).toContainText(
		'is not the effect of any one line'
	);
	await expect(
		page
			.locator('.mog-content > div.item [data-patch-impact] [data-impact-grid] > span')
			.nth(1)
	).toHaveText('BOUGHT');
	await expect(results.locator('table')).toHaveCSS('border-top-width', '0px');
	await expect(results.locator('tbody td').first()).toHaveCSS('padding-top', '2px');
	await expectNoHorizontalOverflow(page);
	await hero.scrollIntoViewIfNeeded();
	await page.screenshot({ path: testInfo.outputPath('inline-stats.png') });
	expect(errors).toEqual([]);
});

test('entity filters carry their results and leave the shared method reachable', async ({
	page
}) => {
	await gotoApp(page, `${PATCH}?hero=Abrams`);
	await expect(page.locator('.mog-content [data-patch-impact]:visible')).toHaveCount(1);
	await expect(page.locator('.mog-content > div.hero.abrams')).toBeVisible();
	await expect(page.locator('#method')).toBeVisible();
	await page.getByRole('link', { name: 'Show all changes' }).click();
	await expect(page).toHaveURL(new RegExp(`${PATCH}$`));
	expect(
		await page.locator('.mog-content [data-patch-impact]:visible').count()
	).toBeGreaterThan(1);
	await expect(page.locator('#method')).toHaveCount(1);
});

test('inline disclosures work without JavaScript in a 320px reading column', async ({
	browser
}) => {
	const context = await browser.newContext({
		javaScriptEnabled: false,
		viewport: { width: 320, height: 720 }
	});
	try {
		const page = await context.newPage();
		await page.goto(PATCH);
		for (const kind of ['hero', 'item']) {
			const results = page
				.locator(`.mog-content > div.${kind} [data-patch-impact]`)
				.first();
			const summary = results.locator('summary');
			expect((await summary.boundingBox())?.height).toBeGreaterThanOrEqual(44);
			await expect(results.locator('table')).toBeHidden();
			await summary.click();
			await expect(results.locator('table')).toBeVisible();
			await expectNoHorizontalOverflow(page);
			const fits = await results.locator('table').evaluate((table) => {
				const bounds = table.getBoundingClientRect();
				return [...table.querySelectorAll('th, td')].every((cell) => {
					const rect = cell.getBoundingClientRect();
					return (
						cell.scrollWidth <= cell.clientWidth + 1 && rect.right <= bounds.right + 1
					);
				});
			});
			expect(fits).toBe(true);
		}
		await page
			.locator('[data-patch-impact]')
			.first()
			.getByRole('link', { name: 'How this is measured' })
			.click();
		await expect(page).toHaveURL(/#method$/);
		await expect(
			page.locator('main').getByRole('link', { name: 'Deadlock API', exact: true })
		).toHaveCount(1);
	} finally {
		await context.close();
	}
});

test('client navigation replaces patch windows and omits results on unmeasured patches', async ({
	page
}) => {
	await gotoApp(page, PATCH);
	await page.locator('.mog-content > div.hero.abrams > h3 a').click();
	await expect(page).toHaveURL(/\/hero\/abrams$/);
	const olderPatch = page
		.locator('a[href="/change/2026/06-30#abrams"]')
		.filter({ hasText: 'Full patch' });
	await olderPatch.click();
	await expect(page).toHaveURL(/\/change\/2026\/06-30#abrams$/);
	const results = page.locator('.mog-content > div.hero.abrams [data-patch-impact]');
	await results.locator('summary').click();
	await expect(results.locator('tbody tr').first()).not.toContainText('2–15 Sep');
	await expect(page.locator('#method')).toHaveCount(1);
	await page.getByRole('link', { name: 'Back to all changes' }).click();
	await gotoApp(page, '/change/2024/05-03');
	await expect(page.locator('[data-patch-impact]')).toHaveCount(0);
	await expect(
		page.getByRole('heading', { name: 'Match results around this patch' })
	).toHaveCount(0);
});
