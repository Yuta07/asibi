import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		// {
		// 	name: 'firefox',
		// 	use: { ...devices['Desktop Firefox'] },
		// },
		// {
		// 	name: 'webkit',
		// 	use: { ...devices['Desktop Safari'] },
		// },
		// {
		//   name: 'Microsoft Edge',
		//   use: {
		//     channel: 'msedge',
		//   },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: {
		//     channel: 'chrome',
		//   },
		// },
	],
}
export default config
