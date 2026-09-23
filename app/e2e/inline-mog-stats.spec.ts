import { expect, test } from 'playwright/test';
import { expectNoHorizontalOverflow, gotoApp } from './helpers';

const PATCH = '/change/2026/09-16';

test('full patches carry a stats band inside each entity, below the notes', async ({
	page
}, testInfo) => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	await gotoApp(page, PATCH);
	const hero = page.locator('.mog-content > div.hero.lash');
	const band = hero.locator('[data-stats-reading="hero"]');
	await expect(band).toHaveCount(1);
	await expect(band.getByRole('heading', { name: 'Maxed first' })).toBeVisible();
	await expect(
		band.getByRole('heading', { name: 'Also changed in this patch' })
	).toBeVisible();
	await expect(band).toContainText(/2–15 Sep → .+ so far\./);
	await expect(hero.locator('div.ability [data-stats-reading]')).toHaveCount(0);
	await expect(page.locator('[data-patch-impact]')).toHaveCount(0);
	await expect(hero.locator(':scope > h3')).toHaveText('Lash');
	await expect(hero.locator(':scope > p img')).toHaveAttribute('width', '40');
	await expect(hero.locator('.ability img').first()).toHaveAttribute('width', '24');
	await expect(hero.locator('a[href$=".html"]')).toHaveCount(0);
	const placement = await hero.evaluate((node) => {
		const lastNotes = [...node.querySelectorAll('div.ability')].at(-1);
		const stats = node.querySelector('[data-stats-reading]');
		return lastNotes && stats
			? lastNotes.getBoundingClientRect().bottom <= stats.getBoundingClientRect().top
			: false;
	});
	expect(placement).toBe(true);

	const item = page.locator(
		'.mog-content > div.item.lifestrike [data-stats-reading="item"]'
	);
	await expect(item.getByRole('heading', { name: 'Bought most by' })).toBeVisible();
	await expect(item.locator('[data-share-block="bought-at"]')).toContainText(
		/\d+:\d{2} → \d+:\d{2}/
	);

	await expect(page.locator('#method')).toHaveCount(1);
	await expect(page.locator('#method')).toContainText(
		'is not the effect of any one line'
	);
	await expect(page.locator('#method')).toContainText('Maxed first is the share');
	await expectNoHorizontalOverflow(page);
	await band.scrollIntoViewIfNeeded();
	await page.screenshot({ path: testInfo.outputPath('inline-stats.png') });
	expect(errors).toEqual([]);
});

test('the band sits in two columns when the reading column is wide enough', async ({
	page
}) => {
	await gotoApp(page, PATCH);
	const band = page.locator('.mog-content > div.hero.lash [data-stats-band]');
	const blocks = band.locator('[data-share-block]');
	const maxed = (await blocks.nth(0).boundingBox())!;
	const related = (await blocks.nth(1).boundingBox())!;
	const width = await band.evaluate((node) => node.getBoundingClientRect().width);
	if (width >= 576) {
		expect(Math.abs(related.y - maxed.y)).toBeLessThan(2);
		expect(related.x).toBeGreaterThan(maxed.x + maxed.width);
	} else {
		expect(related.y).toBeGreaterThan(maxed.y);
	}
});

test('entity filters carry their stats and leave the shared method reachable', async ({
	page
}) => {
	await gotoApp(page, `${PATCH}?hero=Lash`);
	await expect(page.locator('.mog-content [data-stats-reading]:visible')).toHaveCount(1);
	await expect(page.locator('#method')).toBeVisible();
	await page.getByRole('link', { name: 'Show all changes' }).click();
	await expect(page).toHaveURL(new RegExp(`${PATCH}$`));
	expect(
		await page.locator('.mog-content [data-stats-reading]:visible').count()
	).toBeGreaterThan(1);
	await expect(page.locator('#method')).toHaveCount(1);
});

test('the stats band renders without JavaScript in a 320px reading column', async ({
	browser
}) => {
	const context = await browser.newContext({
		javaScriptEnabled: false,
		viewport: { width: 320, height: 720 }
	});
	try {
		const page = await context.newPage();
		await page.goto(PATCH);
		await expect(page.locator('[data-stats-reading]').first()).toBeVisible();
		await expectNoHorizontalOverflow(page);
		await expect(
			page.locator('main').getByRole('link', { name: 'Deadlock API', exact: true })
		).toHaveCount(1);
	} finally {
		await context.close();
	}
});

test('unmeasured patches carry no stats band and no method note', async ({ page }) => {
	await gotoApp(page, '/change/2024/05-03');
	await expect(page.locator('[data-stats-reading]')).toHaveCount(0);
	await expect(
		page.getByRole('heading', { name: 'How these shares are measured' })
	).toHaveCount(0);
});
