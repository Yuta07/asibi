import { PlaywrightTestConfig, devices } from '@playwright/test'

let baseURL = 'http://localhost:3000'
{
	const { ROOT_TEST_URL } = process.env
	if (ROOT_TEST_URL) {
		if (ROOT_TEST_URL.at(-1) === '/') baseURL = ROOT_TEST_URL.slice(0, -1)
		else baseURL = ROOT_TEST_URL
	}
}

const config: PlaywrightTestConfig = {
	testDir: 'tests/e2e',
	timeout: 10000,
	forbidOnly: !!process.env.CI,
	use: {
		actionTimeout: 5000,
		baseURL,
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
