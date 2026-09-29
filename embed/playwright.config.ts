import { defineConfig } from 'playwright/test';

export default defineConfig({
	testDir: './e2e',
	workers: 1,
	forbidOnly: Boolean(process.env.CI),
	use: { baseURL: 'http://127.0.0.1:4188', trace: 'retain-on-failure' },
	webServer: {
		command: 'tsx ../scripts/serve-mcp-test-host.ts',
		url: 'http://127.0.0.1:4188',
		reuseExistingServer: false,
		timeout: 60_000
	}
});
