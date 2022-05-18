import { MockedRequest, rest } from 'msw'

import { getPostData } from '@/lib/posts'

interface PostType {
	title: string
	preface: string
	attention: string
	createdAt: string
	category: string
	tags: string[]
	slug: string
	content: string
}

export const handlers = [
	rest.get<MockedRequest, PostType>('/starting-blog', (req, res, ctx) => {
		const post = getPostData('starting-blog')
		return res(ctx.status(200), ctx.json(post))
	}),
]
