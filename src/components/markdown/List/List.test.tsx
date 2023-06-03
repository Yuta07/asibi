import { render, screen } from '@testing-library/react'

import { List } from '.'

const MockListChildren = () => {
	return (
		<>
			<li>first</li>
			<li>second</li>
			<li>third</li>
		</>
	)
}

describe('markdwon list test', () => {
	test('unOrdered list test', () => {
		render(
			<List depth={3} ordered={false}>
				<MockListChildren />
			</List>
		)

		const element = screen.getByTestId('markdown-unOrdered-list')
		expect(element.querySelector('ul > li:nth-child(1)')).toHaveTextContent('first')
		expect(element.querySelector('ul > li:nth-child(2)')).toHaveTextContent('second')
		expect(element.querySelector('ul > li:nth-child(3)')).toHaveTextContent('third')

		expect(element.querySelector('ul > li:nth-child(4)')).not.toBeInTheDocument()

		expect(element).toHaveClass('unOrdered')
	})

	test('ordered list test', () => {
		render(
			<List depth={3} ordered={true}>
				<MockListChildren />
			</List>
		)

		const element = screen.getByTestId('markdown-ordered-list')
		expect(element.querySelector('ol > li:nth-child(1)')).toHaveTextContent('first')
		expect(element.querySelector('ol > li:nth-child(2)')).toHaveTextContent('second')
		expect(element.querySelector('ol > li:nth-child(3)')).toHaveTextContent('third')

		expect(element.querySelector('ol > li:nth-child(4)')).not.toBeInTheDocument()

		expect(element).toHaveClass('ordered')
	})
})
