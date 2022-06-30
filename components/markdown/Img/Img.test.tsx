import { render } from '@testing-library/react'

import { Img } from '.'

describe('image markdown test', () => {
	test('responsive image src and alt test', () => {
		const { getByAltText } = render(<Img src="/logo/logo.png" alt="image-for-test" layout="responsive" />)
		const element = getByAltText('image-for-test')

		const displayedImage = element as HTMLImageElement
		expect(displayedImage.src).toContain('logo.png')
	})

	// test('raw image src and alt test', () => {
	// 	const { getByAltText } = render(<Img src="/logo/logo.png" alt="image-for-test" />)
	// 	const element = getByAltText('image-for-test')

	// 	const displayedImage = element as HTMLImageElement
	// 	expect(displayedImage.style).toContain('max-width:100%;height:auto;')
	// })
})