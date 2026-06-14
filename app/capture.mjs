import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const OUT = '/tmp/deadlog-shots';
mkdirSync(OUT, { recursive: true });
const BASE = 'http://localhost:5173';

const VIEWPORTS = {
	desktop: { width: 1440, height: 900 },
	tablet: { width: 834, height: 1112 },
	mobile: { width: 390, height: 844 }
};

const results = [];

async function shot(page, name, { fullPage = true } = {}) {
	const path = `${OUT}/${name}.png`;
	await page.screenshot({ path, fullPage });
	results.push(name);
	console.log('shot', name);
}

async function settle(page) {
	try {
		await page.waitForLoadState('networkidle', { timeout: 8000 });
	} catch {}
	await page.waitForTimeout(700); // let entrance animations finish
}

const browser = await chromium.launch();

async function capturePage(url, slug) {
	for (const [vp, size] of Object.entries(VIEWPORTS)) {
		const ctx = await browser.newContext({
			viewport: size,
			deviceScaleFactor: 1,
			colorScheme: 'dark'
		});
		const page = await ctx.newPage();
		await page.goto(`${BASE}${url}`, { waitUntil: 'domcontentloaded' });
		await settle(page);
		// above-the-fold (viewport only)
		await shot(page, `${slug}__${vp}__fold`, { fullPage: false });
		// full page
		await shot(page, `${slug}__${vp}__full`, { fullPage: true });
		await ctx.close();
	}
}

// 1. Core pages
await capturePage('/', 'home');
await capturePage('/hero/abrams', 'hero-abrams');
await capturePage('/item/active-reload', 'item-active-reload');
await capturePage('/change/129989', 'change-129989');

// 2. Interaction states on home (desktop)
{
	const ctx = await browser.newContext({ viewport: VIEWPORTS.desktop, colorScheme: 'dark' });
	const page = await ctx.newPage();
	await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
	await settle(page);

	// Open filters dropdown
	try {
		const openBtn = page.locator('[aria-label="Open filters"]').first();
		await openBtn.click({ timeout: 4000 });
		await page.waitForTimeout(600);
		await shot(page, 'home__desktop__filters-open', { fullPage: false });
	} catch (e) {
		console.log('filters-open failed', e.message);
	}

	// Type into the filter input to show suggestions
	try {
		await page.keyboard.type('abrams');
		await page.waitForTimeout(700);
		await shot(page, 'home__desktop__filter-typing', { fullPage: false });
	} catch (e) {
		console.log('filter-typing failed', e.message);
	}
	await ctx.close();
}

// 3. Mobile filter interaction
{
	const ctx = await browser.newContext({ viewport: VIEWPORTS.mobile, colorScheme: 'dark' });
	const page = await ctx.newPage();
	await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
	await settle(page);
	try {
		const openBtn = page.locator('[aria-label="Open filters"]').first();
		await openBtn.click({ timeout: 4000 });
		await page.waitForTimeout(600);
		await shot(page, 'home__mobile__filters-open', { fullPage: false });
	} catch (e) {
		console.log('mobile filters-open failed', e.message);
	}
	await ctx.close();
}

// 4. Scrolled state on home desktop (sticky header behavior)
{
	const ctx = await browser.newContext({ viewport: VIEWPORTS.desktop, colorScheme: 'dark' });
	const page = await ctx.newPage();
	await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
	await settle(page);
	try {
		await page.mouse.wheel(0, 1400);
		await page.waitForTimeout(800);
		await shot(page, 'home__desktop__scrolled', { fullPage: false });
	} catch (e) {
		console.log('scrolled failed', e.message);
	}
	await ctx.close();
}

await browser.close();
console.log('DONE', results.length, 'screenshots');
console.log(results.join('\n'));
