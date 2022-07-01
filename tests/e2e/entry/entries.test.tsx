import test, { expect } from '@playwright/test'

test.describe.configure({ mode: 'parallel' })

test.beforeEach(async ({ page }) => {
	await page.goto('/entry')
})

test.describe('entries page test', () => {
	test('entry link is correct slug', async ({ page }) => {
		await page.locator('data-testid=entry-section >> nth=-1').locator('data-testid=entry-slug-link').click()
		await expect(page).toHaveURL('/entry/starting-blog')
		await expect(page.locator('data-testid=entry-title')).toContainText('個人ブログを作成しました')
	})

	test('category link is ordinary', async ({ page }) => {
		await page.locator('data-testid=entry-section >> nth=-1').locator('data-testid=entry-category-link').click()
		await expect(page).toHaveURL('/categories/ordinary')

		await page.locator('data-testid=entry-section >> nth=-1').locator('data-testid=entry-slug-link').click()
		await expect(page.locator('data-testid=entry-title')).toContainText('個人ブログを作成しました')
	})
})
