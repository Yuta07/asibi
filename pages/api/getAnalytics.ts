import { google } from 'googleapis'

import type { NextApiRequest, NextApiResponse } from 'next'

export const VIEW_ID = process.env.NEXT_PUBLIC_VIEW_ID || ''

export default async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(req)

	const auth = new google.auth.GoogleAuth({
		keyFilename: './keys.json',
		scopes: 'https://www.googleapis.com/auth/analytics.readonly',
	})

	const client = await auth.getClient()

	const analyticsreporting = google.analyticsreporting({
		version: 'v4',
		auth: client,
	})

	const response = await analyticsreporting.reports.batchGet({
		requestBody: {
			reportRequests: [
				{
					viewId: VIEW_ID,
					dateRanges: [
						{
							startDate: '7daysAgo',
							endDate: 'today',
						},
					],
					metrics: [{ expression: 'ga:users' }],
				},
			],
		},
	})

	res.status(200).json(JSON.stringify(response.data))
}
