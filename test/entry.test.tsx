import { chromium, test } from '@playwright/test'

test.describe('[slug].tsx - entry msw test', () => {
	test('entryのヘッダーの表示は正しいか', async () => {
		const browser = await chromium.launch({ channel: 'chrome' }).then((browser) => {
			return browser
		})
		const page = await browser.newPage()
		await page.goto('http://localhost:3000/entry/msw-test/')
		await browser.close()
	})
})
