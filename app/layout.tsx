import { AnalyticsScript } from '@/components/AnalyticsScript'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { ThemeProvider } from 'contexts/ThemeProvider'

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
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link href="https://fonts.gstatic.com" rel="preconnect" />
				<link
					href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;900&display=swap"
					media="all"
					rel="preload"
				/>
				<AnalyticsScript />
			</head>
			<body>
				<ThemeProvider>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
