import { NextSeo } from 'next-seo'

import { Home } from '@components/domain/home'
import { ParamHeader } from '@components/domain/home/ParamHeader'
import { getSortedPostsDataWithCategory } from '@lib/posts'

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

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

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}
const CategoryPage = ({ posts, category }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<NextSeo title={category} />
			<ParamHeader total={posts.length} />
			<Home posts={posts} />
		</>
	)
}

export default CategoryPage
