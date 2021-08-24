import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

export const Head = () => {
	return (
		<>
			<DefaultSeo {...config} />
			<NextHead>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="twitter:url" content="https://yutaaaaa.vercel.app/ogp.jpg" />
				<meta name="twitter:image" content="https://yutaaaaa.vercel.app/ogp.jpg" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</NextHead>
		</>
	)
}
