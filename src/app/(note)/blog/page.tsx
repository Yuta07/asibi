import { Metadata } from 'next'

import { TagsAside } from '@/components/common/Aside/TagsAside'
import { Posts } from '@/components/pages/blog/Posts'

import s from './styles.module.css'

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

export default function Page({ params: { tag } }: { params: { tag: string | undefined } }) {
	return (
		<main className={s.container}>
			<Posts tag={tag} />
			<TagsAside />
		</main>
	)
}
