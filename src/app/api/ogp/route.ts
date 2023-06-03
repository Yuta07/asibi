import { captureException } from '@sentry/nextjs'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import { NextResponse } from 'next/server'

type OgName = 'title' | 'site_name' | 'description' | 'image' | 'image:alt'
type OgpState = {
	[key in OgName]: string
}

export async function POST(req: Request) {
	const { searchParams } = new URL(req.url)
	const url = searchParams.get('url')

	const encodeURL = encodeURI(url as string)
	const headers = {
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin': '*',
	}

	try {
		const response = await axios.get<string>(encodeURL, {
			method: 'get',
			withCredentials: true,
			responseType: 'arraybuffer',
			headers,
		})

		response.headers['set-cookie'] = ['SameSite=strict']

		const data = response.data

		const dom = new JSDOM(data)
		const meta = dom.window.document.head.querySelectorAll('meta')
		/* eslint-disable */
		const ogp: OgpState[] = Array.from(meta)
			.filter((element: Element) => element.hasAttribute('property'))
			.reduce((previous: any, current: Element) => {
				const property = current.getAttribute('property')?.trim().replace('og:', '')

				if (!property) return

				const content = current.getAttribute('content')
				previous[property] = content

				return previous
			}, {})
		/* eslint-disable */

		return NextResponse.json({ data: ogp, status: 200 })
	} catch {
		captureException(new Error('cannot get og image'), {
			tags: {
				section: 'blog',
			},
			extra: {
				ogUrl: url,
			},
			level: 'error',
		})

		return NextResponse.json({ status: 200 })
	}
}
