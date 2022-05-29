import { MockedRequest, ResponseResolver, restContext } from 'msw'

export const mockPost: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
	console.log(req)
	return res(
		ctx.status(200),
		ctx.json({
			attention: 'mswでのテストです！',
			category: 'ordinary',
			content: '\nPersonal website with msw test.',
			createdAt: '2022-05-19',
			preface: '徒然なるmswテスト。mswを使用した初めてのテスト',
			slug: 'msw-test',
			tags: ['Others'],
			title: '徒然なるmswテスト',
		})
	)
}
