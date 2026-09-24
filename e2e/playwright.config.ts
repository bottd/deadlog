import { defineConfig, devices } from 'playwright/test';

// Runs against the static build in dist/, served with the host's routing rules.
// Build first: `cargo run --release -- build`.
export default defineConfig({
	testDir: '.',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',
	use: {
		baseURL: 'http://localhost:4173',
		trace: 'on-first-retry'
	},
	projects: [
		{
			name: 'desktop-chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'mobile-chromium',
			use: { ...devices['Pixel 7'] }
		}
	],
	webServer: {
		command: 'cargo run --release -- serve --static --port 4173',
		cwd: '..',
		url: 'http://localhost:4173',
		reuseExistingServer: !process.env.CI,
		timeout: 600_000
	}
});
