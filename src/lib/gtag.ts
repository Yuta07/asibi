export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

export const pageview = (path: string) => {
	if (window && window.gtag) {
		window.gtag('config', GA_TRACKING_ID, {
			page_path: path,
		})
	}
}
