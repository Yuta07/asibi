import { render, screen } from '@testing-library/react'

import { Heading } from '.'

describe('heading markdown test', () => {
	test('markdown level one test', () => {
		render(<Heading headingLevel="h1">見出し1テスト</Heading>)
		const element = screen.getByTestId('markdown-heading-h1')

		expect(element).toHaveTextContent('見出し1テスト')
	})

	test('markdown level two test', () => {
		render(<Heading headingLevel="h2">見出し2テスト</Heading>)
		const element = screen.getByTestId('markdown-heading-h2')

		expect(element).toHaveTextContent('見出し2テスト')
	})

	test('markdown level three test', () => {
		render(<Heading headingLevel="h3">見出し3テスト</Heading>)
		const element = screen.getByTestId('markdown-heading-h3')

		expect(element).toHaveTextContent('見出し3テスト')
	})

	test('markdown level four test', () => {
		render(<Heading headingLevel="h4">見出し4テスト</Heading>)
		const element = screen.getByTestId('markdown-heading-h4')

		expect(element).toHaveTextContent('見出し4テスト')
	})

	test('markdown level five test', () => {
		render(<Heading headingLevel="h5">見出し5テスト</Heading>)
		const element = screen.getByTestId('markdown-heading-h5')

		expect(element).toHaveTextContent('見出し5テスト')
	})
})
