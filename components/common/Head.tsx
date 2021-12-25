import { DefaultSeo } from 'next-seo'
import NextHead from 'next/head'

import config from '@config/seo.json'

export const Head = () => {
	return (
		<>
			<DefaultSeo {...config} />
			<NextHead>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="alternate"
					type="application/rss+xml"
					title="yutaaaaaの日常とtechブログ"
					href="https://yutaaaaa.dev/rss/feed.xml"
				/>
			</NextHead>
		</>
	)
}
