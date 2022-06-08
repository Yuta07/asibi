import { render, screen } from '@testing-library/react'

import { EmbedLink } from '.'

describe('markdown embed link test', () => {
	test('embed link test', async () => {
		render(<EmbedLink href="https://ogp-success.com" />)

		const element = await screen.findByTestId('markdown-embed-link')
		expect(element).toHaveTextContent('koppa test')
	})

	test('embed link test', async () => {
		render(<EmbedLink href="https://ogp-error.com" />)

		const element = await screen.findByTestId('markdown-embed-only-link')
		expect(element).toHaveTextContent('https://ogp-error.com')
	})
})
