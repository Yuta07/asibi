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
				<meta name="twitter:url" content="https://yutazon.me/ogp.jpg" />
				<meta name="twitter:image" content="https://yutazon.me/ogp.jpg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon-precomposed" href="/icons/apple-icon-precomposed.png" />
				<link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
				<link rel="manifest" href="/manifest.json" />
			</NextHead>
		</>
	)
}
