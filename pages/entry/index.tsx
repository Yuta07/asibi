import { InferGetStaticPropsType } from 'next'

import { Layout } from '@/components/common/Layout'
import { Posts } from '@/components/feature/entry'
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

export default function PostsPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return <Posts posts={posts} />
}

PostsPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
