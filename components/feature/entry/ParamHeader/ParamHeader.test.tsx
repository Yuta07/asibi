import { render, screen } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import { ParamHeader } from '@/components/feature/entry/ParamHeader'
import { createMockRouter } from '@/lib/test-utils'

describe('ParamHeader component test', () => {
	test('category and total show', () => {
		render(
			<RouterContext.Provider value={createMockRouter({ query: { category: 'dev' }, pathname: 'categories' })}>
				<ParamHeader total={5} />
			</RouterContext.Provider>
		)

		const element = screen.getByTestId('param-header')
		expect(element).toHaveTextContent('dev カテゴリのエントリは5件あります')
	})
})
