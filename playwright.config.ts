import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
	testDir: 'tests/e2e',
	timeout: 20000,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	webServer: {
		command: 'yarn dev',
		url: 'http://localhost:3000/',
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI,
	},
	use: {
		actionTimeout: 10000,
		baseURL: 'http://localhost:3000/',
		browserName: 'chromium',
		headless: false,
		viewport: { width: 1280, height: 960 },
		ignoreHTTPSErrors: true,
		screenshot: 'only-on-failure',
	},
	projects: [
		{
			name: 'chromium',
			use: { browserName: 'chromium', ...devices['Desktop Chrome'] },
		},
		// {
		// 	name: 'iPhone 11',
		// 	use: { browserName: 'webkit', ...devices['iPhone 11'] },
		// },
	],
}
export default config
