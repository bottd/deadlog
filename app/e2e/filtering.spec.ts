import { test, expect } from 'playwright/test';

test.describe('Changelog filtering', () => {
	test('shows changelog entries on the main page', async ({ page }) => {
		await page.goto('/');
		// Wait for changelog cards to appear (links to /change/*)
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('filters changelogs by hero via URL param', async ({ page }) => {
		await page.goto('/?hero=Bebop');
		// Should show results (Bebop appears in 33 changelogs)
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('filters changelogs by item via URL param', async ({ page }) => {
		await page.goto('/?item=Decay');
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('filters changelogs by hero and item together', async ({ page }) => {
		await page.goto('/?hero=Bebop&item=Decay');
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
		expect(await cards.count()).toBeGreaterThan(0);
	});

	test('shows empty state for non-existent hero filter', async ({ page }) => {
		await page.goto('/?hero=NonExistentHero12345');
		// Should show no results
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards).toHaveCount(0);
		// Should show the "No changes found" empty state
		await expect(page.getByText('No changes found')).toBeVisible();
	});

	test('does not show Load More button in empty state', async ({ page }) => {
		await page.goto('/?hero=NonExistentHero12345');
		await expect(page.getByText('No changes found')).toBeVisible();
		// Load More / End of Log should not be visible
		await expect(page.getByText('Load More')).not.toBeVisible();
		await expect(page.getByText('End of Log')).not.toBeVisible();
	});

	test('clear filters button resets to unfiltered view', async ({ page }) => {
		await page.goto('/?hero=NonExistentHero12345');
		await expect(page.getByText('No changes found')).toBeVisible();

		// Click clear filters
		await page.getByRole('button', { name: 'Clear Filters' }).click();

		// Should now show changelog entries
		const cards = page.locator('a[href^="/change/"]');
		await expect(cards.first()).toBeVisible();
	});

	test('shows Latest Patch card only when not filtering', async ({ page }) => {
		// Unfiltered - should show "Latest Patch"
		await page.goto('/');
		await expect(page.getByText('Latest Patch')).toBeVisible();

		// Filtered - should not show "Latest Patch" hero card
		await page.goto('/?hero=Bebop');
		await expect(page.getByText('Latest Patch')).not.toBeVisible();
	});
});
