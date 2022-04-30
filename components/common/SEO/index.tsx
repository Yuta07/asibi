import Head from 'next/head'

import config from '@/config/seo.json'

import type { ReactNode, VFC } from 'react'

type OGImageType = {
	url?: string
	width?: string
	height?: string
	alt?: string
}

type SEOProps = {
	title?: string
	description?: string
	robots?: string
	openGraph?: {
		title?: string
		type?: string
		description?: string
		images: OGImageType
	}
	children?: ReactNode
}

export const SEO: VFC<SEOProps> = ({ title, description, robots, openGraph, children }) => {
	return (
		<Head>
			<title key="title">{title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}</title>
			<meta key="description" name="description" content={description || config.description} />
			<meta key="robots" name="robots" content={robots ?? 'index,follow'} />
			<meta key="googlebot" name="googlebot" content={robots ?? 'index,follow'} />
			<meta key="og:type" property="og:type" content={openGraph?.type ?? config.openGraph.type} />
			<meta
				key="og:title"
				property="og:title"
				content={openGraph?.title ?? config.openGraph.title ?? title ?? config.title}
			/>
			<meta
				key="og:description"
				property="og:description"
				content={openGraph?.description ?? config.openGraph.description ?? description ?? config.description}
			/>
			<meta key="og:site_name" property="og:site_name" content={config.openGraph.site_name} />
			<meta key="og:url" property="og:url" content={config.openGraph.url} />
			<meta key="og:image" property="og:image" content={openGraph?.images.url ?? config.openGraph.images[0].url} />
			{config.twitter.cardType && <meta key="twitter:card" name="twitter:card" content={config.twitter.cardType} />}
			{config.twitter.site && <meta key="twitter:site" name="twitter:site" content={config.twitter.site} />}
			{config.twitter.handle && <meta key="twitter:creator" name="twitter:creator" content={config.twitter.handle} />}
			{children}
		</Head>
	)
}
