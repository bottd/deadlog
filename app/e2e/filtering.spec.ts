import { test, expect } from 'playwright/test';

async function gotoApp(page: import('playwright/test').Page, path: string) {
	await page.goto(path);
	await expect(page.locator('[data-app-ready="true"]')).toBeAttached();
}

test.describe('Changelog filtering', () => {
	test('shows changelog entries on the main page', async ({ page }) => {
		await gotoApp(page, '/');
		// Wait for changelog cards to appear (links to /change/*)
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('filters changelogs by hero via URL param', async ({ page }) => {
		await gotoApp(page, '/?hero=Bebop');
		// Should show results (Bebop appears in 33 changelogs)
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('filters changelogs by item via URL param', async ({ page }) => {
		await gotoApp(page, '/?item=Decay');
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('filters changelogs by hero and item together', async ({ page }) => {
		await gotoApp(page, '/?hero=Bebop&item=Decay');
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('shows empty state for non-existent hero filter', async ({ page }) => {
		await gotoApp(page, '/?hero=NonExistentHero12345');
		// Should show no results
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards).toHaveCount(0);
		// Should show the "No changes found" empty state
		await expect(page.getByText('No changes found')).toBeVisible();
	});

	test('does not discard an invalid entity from a mixed AND filter', async ({ page }) => {
		await gotoApp(page, '/?hero=Bebop,NonExistentHero12345');
		await expect(page.locator('a[href^="/change/"]')).toHaveCount(0);
		await expect(page.getByText('No changes found')).toBeVisible();
	});

	test('does not show Load More button in empty state', async ({ page }) => {
		await gotoApp(page, '/?hero=NonExistentHero12345');
		await expect(page.getByText('No changes found')).toBeVisible();
		// Load More / End of Log should not be visible
		await expect(page.getByText('Load More')).not.toBeVisible();
		await expect(page.getByText('End of Log')).not.toBeVisible();
	});

	test('clear filters button resets to unfiltered view', async ({ page }) => {
		await gotoApp(page, '/?hero=NonExistentHero12345');
		await expect(page.getByText('No changes found')).toBeVisible();

		// Click clear filters
		await page.getByRole('button', { name: 'Clear Filters' }).click();
		await expect(page).toHaveURL(/\/$/);

		// Should now show changelog entries
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
	});

	test('shows Latest Patch card only when not filtering', async ({ page }) => {
		// Unfiltered - should show "Latest Patch"
		await gotoApp(page, '/');
		await expect(page.getByText('Latest Patch')).toBeVisible();

		// Filtered - should not show "Latest Patch" hero card
		await gotoApp(page, '/?hero=Bebop');
		await expect(page.getByText('Latest Patch')).not.toBeVisible();
	});

	test('multiple heroes AND returns subset of single hero', async ({ page }) => {
		await gotoApp(page, '/?hero=Bebop');
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		const singleCount = await cards.count();

		await gotoApp(page, '/?hero=Bebop,Abrams');
		// AND filter: must match BOTH heroes, so results <= single hero
		const multiCards = page.locator('a[href^="/change/"]');
		// Either fewer results or empty state
		const multiCount = await multiCards.count();
		expect(multiCount).toBeLessThanOrEqual(singleCount);
	});

	test('text search via q param returns results', async ({ page }) => {
		await gotoApp(page, '/?q=Bebop');
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('Escape key closes the filter dropdown', async ({ page }, testInfo) => {
		test.skip(testInfo.project.name !== 'desktop-chromium', 'Desktop combobox behavior');
		await gotoApp(page, '/');
		// Focus the desktop filter input to open dropdown
		const input = page.locator('input[placeholder]').first();
		await input.click();
		// Dropdown should be open (filter-dropdown element visible)
		await expect(page.locator('.filter-dropdown')).toBeVisible();

		// Press Escape
		await input.press('Escape');
		// Dropdown should be closed
		await expect(page.locator('.filter-dropdown')).not.toBeVisible();
	});
});
