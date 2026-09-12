import { expect, type Page } from 'playwright/test';

export async function gotoApp(page: Page, path: string) {
	await page.goto(path);
	await expect(page.locator('[data-app-ready="true"]')).toBeAttached();
}

export async function openEntityFilter(page: Page, mobile: boolean) {
	if (mobile) {
		await page.getByRole('button', { name: /Search & filter/ }).click();
		return page.getByRole('combobox', { name: 'Hero, item, or keyword' });
	}

	return page.getByRole('combobox', {
		name: 'Search by hero, item, or keyword'
	});
}
