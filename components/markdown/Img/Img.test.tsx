import { render } from '@testing-library/react'

import { Img } from '.'

describe('image markdown test', () => {
	test('image src and alt test', () => {
		const { getByAltText } = render(<Img src="/logo/logo.png" alt="image-for-test" layout="responsive" />)
		const element = getByAltText('image-for-test')

		const displayedImage = element as HTMLImageElement
		expect(displayedImage.src).toContain('logo.png')
	})
})
