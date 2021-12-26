import axios from 'axios'
import { JSDOM } from 'jsdom'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { url } = req.query
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

		res.status(200).json(ogp)
	} catch {
		res.status(400).json({ message: 'error' })
	}
}
