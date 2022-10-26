import Head from 'next/head'

import config from '@/config/seo.json'

import type { ReactNode } from 'react'

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
		url?: string
		site_name?: string
		images?: OGImageType
	}
	twitter?: {
		cardType?: string
		site?: string
		handle?: string
	}
	children?: ReactNode
}

export const SEO = ({ title, description, robots, openGraph, twitter, children }: SEOProps) => {
	return (
		<Head>
			<title>{title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}</title>
			<link rel="canonical" href={openGraph?.url ?? config.openGraph.url} />
			<meta name="description" content={description || config.description} />
			<meta name="robots" content={robots ?? 'index,follow'} />
			<meta name="googlebot" content={robots ?? 'index,follow'} />
			<meta property="og:type" content={openGraph?.type ?? config.openGraph.type} />
			<meta property="og:title" content={openGraph?.title ?? title ?? config.openGraph.title ?? config.title} />
			<meta
				property="og:description"
				content={openGraph?.description ?? description ?? config.openGraph.description ?? config.description}
			/>
			<meta property="og:site_name" content={openGraph?.site_name ?? config.openGraph.site_name} />
			<meta
				property="og:url"
				content={openGraph?.url ? `${config.openGraph.url}/${openGraph?.url}` : config.openGraph.url}
			/>
			<meta property="og:image" content={openGraph?.images?.url ?? config.openGraph.images[0].url} />
			<meta name="twitter:card" content={twitter?.cardType ?? config.twitter.cardType} />
			<meta name="twitter:site" content={twitter?.site ?? config.twitter.site} />
			<meta name="twitter:creator" content={twitter?.handle ?? config.twitter.handle} />
			{children}
		</Head>
	)
}
