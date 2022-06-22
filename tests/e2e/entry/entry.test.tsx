import test, { expect } from '@playwright/test'

test('entry page test', async ({ page }) => {
	await page.goto('/entry/starting-blog')
	await expect(page.locator('data-testid=entry-title')).toContainText('個人ブログを作成しました')

	await expect(page.locator('data-testid=entry-content')).toContainText('楽しくできるのもポイント')

	await page.locator('data-testid=entry-share-button').click()
	expect(page.url()).toContain('https://twitter.com/share?url=https://yutaaaaa.dev/entry/starting-blog')
})
