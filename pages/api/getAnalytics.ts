import { google } from 'googleapis'

export const VIEW_ID = process.env.NEXT_PUBLIC_VIEW_ID || ''

export default async () => {
	const auth = new google.auth.GoogleAuth({
		keyFilename: './keys.json',
		scopes: 'https://www.googleapis.com/auth/analytics.readonly',
	})

	const client = await auth.getClient()

	const analyticsreporting = google.analyticsreporting({
		version: 'v4',
		auth: client,
	})

	const res = await analyticsreporting.reports.batchGet({
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
					metrics: [{ expression: 'ga:pageviews' }],
					dimensions: [{ name: 'ga:pagePath' }, { name: 'ga:pageTitle' }],
					orderBys: [{ fieldName: 'ga:pageviews', sortOrder: 'DESCENDING' }],
				},
			],
		},
	})

	console.log(JSON.stringify(res.data))
}
