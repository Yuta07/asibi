import { Metadata } from 'next'

import { Feed } from '@/components/pages/blog/Feed'
import { Posts } from '@/components/pages/blog/Posts'

export const metadata: Metadata = {
	title: 'Blog',
	description: "This page is asibi3Q's blog page about engineering.",
	openGraph: {
		type: 'article',
		url: 'https://asibi.dev/blog',
		title: 'Blog',
		description: "This page is asibi3Q's blog page about engineering.",
	},
	alternates: {
		canonical: 'https://asibi.dev/blog',
		types: {
			'application/rss+xml': 'https://asibi.dev//rss/feed.xml',
			'application/feed+json': 'https://asibi.dev//rss/feed.json',
			'application/atom+xml': 'https://asibi.dev//rss/atom.xml',
		},
	},
}

export default function Page() {
	return (
		<>
			<main>
				<Posts />
			</main>
			<Feed />
		</>
	)
}
