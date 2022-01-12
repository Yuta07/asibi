export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
export const UNIVERSAL_ID = process.env.NEXT_PUBLIC_GOOGLE_UNIVERSAL_ID || ''

export const pageview = (path: string) => {
	window.gtag('config', UNIVERSAL_ID, {
		page_path: path,
	})
}
