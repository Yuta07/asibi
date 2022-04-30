import { SEO } from '@/components/common/SEO'

export const Head = () => {
	return (
		<>
			<SEO>
				<meta charSet="utf-8" />
				<meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/icon/icon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
				<link rel="manifest" href="/app.webmanifest" key="app-manifest" />
				<link rel="alternate" type="application/rss+xml" title="zakimii" href="https://yutaaaaa.dev/rss/feed.xml" />
			</SEO>
		</>
	)
}
