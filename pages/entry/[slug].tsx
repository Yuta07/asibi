import { Layout } from '@/components/common/Layout'
import { Entry } from '@/components/feature/entry/slug'
import { getPostData, getSortedPostsData } from '@/lib/posts'

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import type { ReactElement } from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = getSortedPostsData()

	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}))

	return {
		paths: paths,
		fallback: true,
	}
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const { slug } = params as { slug: string }

	const post = await getPostData(slug)

	return {
		props: {
			post,
		},
	}
}

export default function EntryPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
	return <Entry post={post} />
}

EntryPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
