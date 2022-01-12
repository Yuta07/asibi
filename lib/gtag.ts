export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
export const UNIVERSAL_ID = process.env.NEXT_PUBLIC_GOOGLE_UNIVERSAL_ID || ''

export const pageview = (path: string) => {
	if (window && window.gtag) {
		window.gtag('config', UNIVERSAL_ID, {
			page_path: path,
		})

		window.gtag('config', GA_TRACKING_ID, {
			page_path: path,
		})
	}
}
