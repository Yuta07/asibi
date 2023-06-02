import { render, screen } from '@testing-library/react'

import { Img } from '.'

describe('image markdown test', () => {
	test('responsive image src and alt test', () => {
		const { getByAltText } = render(<Img alt="image-for-test.png" src="/logo/logo.png" />)
		const element = getByAltText('image-for-test.png')

		const displayedImage = element as HTMLImageElement
		expect(displayedImage.src).toContain('logo.png')
	})

	test('test caption', async () => {
		render(<Img alt="image-for-test" src="/logo/logo.png" />)

		const element = await screen.findByTestId('image-caption')
		expect(element).toBeInTheDocument()
	})

	// test('raw image src and alt test', () => {
	// 	const { getByAltText } = render(<Img src="/logo/logo.png" alt="image-for-test" />)
	// 	const element = getByAltText('image-for-test')

	// 	const displayedImage = element as HTMLImageElement
	// 	expect(displayedImage.style).toContain('max-width:100%;height:auto;')
	// })
})
