import { NextRouter } from 'next/router'

export const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
	return {
		basePath: '',
		pathname: '/',
		route: '/',
		query: {},
		asPath: '/',
		push: jest.fn(),
		replace: jest.fn(),
		reload: jest.fn(),
		back: jest.fn(),
		prefetch: jest.fn(),
		beforePopState: jest.fn(),
		events: {
			off: jest.fn(),
			on: jest.fn(),
			emit: jest.fn(),
		},
		isFallback: false,
		isReady: false,
		isPreview: false,
		isLocaleDomain: false,
		...router,
	}
}
