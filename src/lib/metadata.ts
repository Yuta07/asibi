import { Metadata } from 'next'

export const metadata: Metadata = {
	title: { template: '%s | asibi', default: 'asibi' },
	description: "asibi's website.",
	creator: 'asibi3Q',
	openGraph: {
		type: 'website',
		url: 'https://asibi.dev',
		title: 'asibi',
		description: "asibi3Q's website.",
		siteName: 'asibi',
		images: [
			{
				url: 'https://asibi.dev/ogp.jpg',
				width: 800,
				height: 600,
				alt: 'asibi og image',
			},
		],
	},
	manifest: 'https://asibi.dev/app.webmanifest',
	themeColor: [
		{ color: '#25191f', media: '(prefers-color-scheme: dark)' },
		{ color: '#f4f5f5', media: '(prefers-color-scheme: light)' },
	],
	colorScheme: 'dark light',
	alternates: {
		canonical: 'https://asibi.dev',
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		minimumScale: 1,
		maximumScale: 5,
	},
	twitter: { site: '@asibi3Q', card: 'summary', images: ['https://asibi.dev/ogp.jpg'] },
}
