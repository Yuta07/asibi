import { AsyncResponseResolverReturnType, MockedRequest, MockedResponse, ResponseResolver, restContext } from 'msw'

export const mockOgpRequest: ResponseResolver<MockedRequest, typeof restContext> = (
	req,
	res,
	ctx
): AsyncResponseResolverReturnType<MockedResponse<any>> => {
	const ogpUrl = req.url.searchParams.get('url')

	if (ogpUrl === 'https://ogp-success.com') {
		return res(
			ctx.status(200),
			ctx.json({
				type: 'website',
				title: 'koppa test',
				description: "yutaka's website test.",
				site_name: 'koppa',
				url: 'https://example.dev/',
				image: '/og.jpg',
			})
		)
	}

	return res(ctx.status(200), ctx.json({}))
}
