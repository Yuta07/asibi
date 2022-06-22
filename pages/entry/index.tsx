import { InferGetStaticPropsType } from 'next'

import { Layout } from '@/components/common/Layout'
import { SEO } from '@/components/common/SEO'
import { Entries } from '@/components/feature/entry'
import config from '@/config/seo.json'
import { generatedRssFeed } from '@/lib/feed'
import { getSortedPostsData } from '@/lib/posts'

import type { ReactElement } from 'react'

export const getStaticProps = async () => {
	const posts = getSortedPostsData()

	generatedRssFeed()

	return {
		props: {
			posts,
		},
	}
}

export default function EntriesPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<SEO title="Entry" description="エントリ一覧" openGraph={{ url: `${config.openGraph.url}/entry` }} />
			<Entries posts={posts} />
		</>
	)
}

EntriesPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
