import { captureException } from '@sentry/nextjs'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const url = searchParams.get('query')

	const encodeURL = encodeURI(url as string)
	const headers = {
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin': '*',
	}

	try {
		const response = await axios.get(encodeURL, {
			method: 'get',
			withCredentials: true,
			responseType: 'arraybuffer',
			headers,
		})

		response.headers['set-cookie'] = ['SameSite=strict']

		const data = response.data

		const dom = new JSDOM(data)
		const meta = dom.window.document.head.querySelectorAll('meta')
		const ogp = Array.from(meta)
			.filter((element: Element) => element.hasAttribute('property'))
			.reduce((previous: any, current: Element) => {
				const property = current.getAttribute('property')?.trim().replace('og:', '')

				if (!property) return

				const content = current.getAttribute('content')
				previous[property] = content

				return previous
			}, {})

		NextResponse.json({ data: ogp, status: 200 })
	} catch {
		captureException(new Error('cannot get og image'), {
			tags: {
				section: 'blog',
				url,
			},
			level: 'error',
		})

		NextResponse.json({ status: 200 })
	}
}
