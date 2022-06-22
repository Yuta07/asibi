import { ReactElement } from 'react'

import { Layout } from '@/components/common/Layout'
import { SEO } from '@/components/common/SEO'
import { Entries } from '@/components/feature/entry'
import { ParamHeader } from '@/components/feature/entry/ParamHeader'
import { getSortedPostsDataWithCategory } from '@/lib/posts'

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const { category } = params as { category: string }

	const posts = getSortedPostsDataWithCategory(category)

	return {
		props: {
			posts,
			category,
		},
	}
}

export default function CategoryPage({ posts, category }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<SEO title={`${category} Entry`} description={`${category}のエントリ一覧`} />
			<ParamHeader total={posts.length} />
			<Entries posts={posts} />
		</>
	)
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
