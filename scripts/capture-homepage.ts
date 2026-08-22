import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const targetUrl = new URL(process.env.SCREENSHOT_URL ?? 'https://deadlog.io').href;
const outputPath = fileURLToPath(new URL('../docs/homepage.png', import.meta.url));

await mkdir(dirname(outputPath), { recursive: true });

const browser = await chromium.launch();

try {
	const page = await browser.newPage({
		viewport: { width: 1440, height: 1000 },
		deviceScaleFactor: 1,
		colorScheme: 'dark'
	});

	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });
	await page
		.locator('[data-app-ready="true"]')
		.waitFor({ state: 'attached', timeout: 30_000 });
	await page.evaluate(async () => {
		await document.fonts.ready;
	});
	await page.waitForFunction(
		() =>
			[...document.images]
				.filter((image) => {
					const bounds = image.getBoundingClientRect();
					return bounds.bottom > 0 && bounds.top < window.innerHeight;
				})
				.every((image) => image.complete),
		undefined,
		{ timeout: 30_000 }
	);
	await page.evaluate(() => window.scrollTo(0, 0));
	await page.screenshot({ path: outputPath, animations: 'disabled' });

	console.log(`Saved homepage screenshot to ${outputPath}`);
} finally {
	await browser.close();
}
