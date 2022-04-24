import { NextSeo } from 'next-seo'

import { Posts } from '@components/feature/entry'
import { ParamHeader } from '@components/feature/entry/ParamHeader'
import { getSortedPostsDataWithCategory } from '@lib/posts'

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

const CategoryPage = ({ posts, category }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<NextSeo title={category} />
			<ParamHeader total={posts.length} />
			<Posts posts={posts} />
		</>
	)
}

export default CategoryPage
