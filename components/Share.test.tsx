import { render, screen } from '@testing-library/react'

import { Share } from './Share'

describe('Share component test', () => {
	test('Share button href test', () => {
		render(<Share slug="starting-blog" title="個人ブログを作成しました" />)

		const pageUrl = 'https://yutaaaaa.dev/entry/starting-blog'
		const encodeTitle = encodeURIComponent('個人ブログを作成しました')

		const element = screen.getByTestId('entry-share-button')
		expect(element).toHaveAttribute('href', `https://twitter.com/share?url=${pageUrl}&text=${encodeTitle}&via=koppa_07`)
	})
})
