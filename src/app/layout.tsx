import { AnalyticsScript } from '@/components/common/Analytics/GoogleAnalytics/index'
import { Footer } from '@/components/common/Footer'
import { GoogleAnalyticsRoute } from '@/components/ui/GoogleAnalyticsRoute'
export { metadata } from '@/lib/metadata'

import '@/styles/root.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja-JP">
			<head>
				<meta charSet="utf-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<link href="/favicon.ico" rel="icon" sizes="any" />
				<link href="/icon/icon.svg" rel="icon" type="image/svg+xml" />
				<link href="/icon/apple-touch-icon.png" rel="apple-touch-icon" />
				<link
					as="font"
					crossOrigin=""
					href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css"
					media="all"
					rel="stylesheet"
				/>
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
				<link
					as="font"
					crossOrigin=""
					href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;700&display=swap"
					media="all"
					rel="stylesheet"
				/>
				<AnalyticsScript />
			</head>
			<body>
				{children}
				<GoogleAnalyticsRoute />
				<Footer />
			</body>
		</html>
	)
}
