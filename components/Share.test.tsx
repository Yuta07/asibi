import { render, screen } from '@testing-library/react'

import { Share } from './Share'

describe('Share component test', () => {
	test('Share button href test', () => {
		render(<Share slug="test-blog" title="テストです" />)

		const pageUrl = 'https://yutaaaaa.dev/blog/test-blog'
		const encodeTitle = encodeURIComponent('テストです')

		const element = screen.getByTestId('blog-share-button')
		expect(element).toHaveAttribute('href', `https://twitter.com/share?url=${pageUrl}&text=${encodeTitle}&via=_yutawo`)
	})
})
