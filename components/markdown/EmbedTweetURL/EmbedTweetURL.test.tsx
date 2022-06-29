import { render, screen } from '@testing-library/react'

import { EmbedTweetURL } from '.'

describe('markdown embed tweet link', () => {
	test('embed tweet link test', () => {
		render(<EmbedTweetURL href="https://twitter.com/koppa_07/status/1453566698297049091" />)

		const element = screen.getByTestId('markdown-tweet-link')
		expect(element).toBeInTheDocument()

		const linkElement = screen.getByRole('link')
		expect(linkElement).toHaveAttribute('href', 'https://twitter.com/koppa_07/status/1453566698297049091')
	})
})
