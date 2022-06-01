import { render, screen } from '@testing-library/react'

import { BlockCode } from '.'

describe('blockcode markdown test', () => {
	render(<BlockCode language="tsx" value="const add = (x: number, y: number) => { return x + y }" />)
	const element = screen.getByTestId('markdown-blockcode')

	test('pre language value test', () => {
		expect(element).toHaveTextContent('const add = (x: number, y: number) => { return x + y }')
	})

	test('code language class test', () => {
		const code = element.querySelector('code')
		expect(code).toHaveClass('language-tsx')
	})
})
