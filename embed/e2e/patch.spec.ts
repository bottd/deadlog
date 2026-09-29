import { expect, test } from 'playwright/test';

test('compiled resource renders once and refreshes through the actual Worker', async ({
	page
}) => {
	await page.goto('/');
	const app = page.frameLocator('iframe');
	await expect(
		app.getByRole('heading', { name: 'Minor Update - 09-16-2026' })
	).toBeVisible();
	await expect(page.locator('body')).toHaveAttribute('data-ui-reads', '0');
	await app.getByRole('button', { name: 'Refresh patch' }).click();
	await expect(page.locator('body')).toHaveAttribute('data-ui-reads', '1');
	await expect(app.getByRole('button', { name: 'Refresh patch' })).toBeEnabled();
	await app.getByText('Read full archived text').click();
	await expect(app.locator('.evidence-text')).toContainText('Unstable Rift');
	await expect(page.locator('body')).toHaveAttribute('data-ui-reads', '1');
});

test('refresh failure preserves valid evidence and offers explicit retry', async ({
	page
}) => {
	await page.goto('/?scenario=failure');
	const app = page.frameLocator('iframe');
	await expect(app.getByRole('button', { name: 'Refresh patch' })).toBeEnabled();
	await app.getByRole('button', { name: 'Refresh patch' }).click();
	await expect(app.getByRole('alert')).toContainText('Refresh failed');
	await expect(
		app.getByRole('heading', { name: 'Minor Update - 09-16-2026' })
	).toBeVisible();
	await expect(app.getByRole('button', { name: 'Refresh patch' })).toBeEnabled();
});

test('missing optional capabilities still leaves source evidence usable', async ({
	page
}) => {
	await page.goto('/?scenario=missing-tools');
	const app = page.frameLocator('iframe');
	await expect(
		app.getByRole('heading', { name: 'Minor Update - 09-16-2026' })
	).toBeVisible();
	await expect(app.getByRole('button', { name: 'Refresh patch' })).toBeDisabled();
	await expect(app.getByRole('link', { name: 'Open in Deadlog' })).toHaveAttribute(
		'href',
		'https://deadlog.io/change/2026/09-16'
	);
});

test('untrusted patch text remains escaped under strict CSP', async ({ page }) => {
	await page.goto('/?scenario=malicious');
	const app = page.frameLocator('iframe');
	await expect(app.locator('.evidence-text')).toContainText('<img src=x');
	await expect(app.locator('img')).toHaveCount(0);
});

test('malformed host results explain the failure', async ({ page }) => {
	await page.goto('/?scenario=malformed');
	await expect(page.frameLocator('iframe').getByRole('alert')).toContainText(
		'invalid patch result'
	);
});

for (const [width, theme, zoom] of [
	[760, 'light', 1],
	[320, 'dark', 1],
	[640, 'light', 2]
] as const) {
	test(`keyboard and layout at ${width}px, ${theme}, ${zoom * 100}% zoom`, async ({
		page
	}) => {
		await page.setViewportSize({ width, height: 1000 });
		await page.goto(`/?theme=${theme}`);
		const app = page.frameLocator('iframe');
		await expect(app.getByRole('button', { name: 'Refresh patch' })).toBeEnabled();
		const frame = page
			.frames()
			.find((candidate) => candidate.url().endsWith('/resource'));
		if (!frame) throw new Error('Missing resource frame');
		await frame.evaluate((scale) => {
			document.body.style.zoom = String(scale);
		}, zoom);
		await app.getByText('Coverage, freshness, and revision', { exact: true }).focus();
		await page.keyboard.press('Enter');
		await expect(app.getByText('Archive SHA-256', { exact: true })).toBeVisible();
		expect(
			await frame.evaluate(
				() => document.documentElement.scrollWidth <= document.documentElement.clientWidth
			)
		).toBe(true);
		if (zoom === 1)
			await page.screenshot({
				path: `test-results/patch-${theme}-${width}.png`,
				fullPage: true
			});
	});
}
