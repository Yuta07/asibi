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
		locale?: string
		description?: string
		site_name?: string
		url?: string
		images?: OGImageType
	}
	children?: ReactNode
}

export const SEO: VFC<SEOProps> = ({ title, description, robots, children }) => {
	return (
		<Head>
			<title key="title">{title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}</title>
			<meta key="description" name="description" content={description || config.description} />
			<meta key="robots" name="robots" content={robots ?? 'index,follow'} />
			<meta key="googlebot" name="googlebot" content={robots ?? 'index,follow'} />
			{children}
		</Head>
	)
}
