import { DefaultSeo } from 'next-seo'
import NextHead from 'next/head'

import config from '@config/seo.json'

export const Head = () => {
	return (
		<>
			<NextHead>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/icon/icon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
				<link rel="manifest" href="/app.webmanifest" />
				<link rel="alternate" type="application/rss+xml" title="yutanote" href="https://yutaaaaa.dev/rss/feed.xml" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</NextHead>
			<DefaultSeo {...config} />
		</>
	)
}